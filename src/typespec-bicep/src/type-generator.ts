// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Enum, getDiscriminatedUnionFromInheritance, getDiscriminator, getDoc, getFormat, getNamespaceFullName, getLifecycleVisibilityEnum, getMaxItems, getMaxLength,
  getMaxValue, getMinItems, getMinLength, getMinValue, getPattern, getVisibilityForClass, IntrinsicType, isSecret, Model, ModelProperty,
  NoTarget, Program, Scalar, Type, Union } from "@typespec/compiler";
import { BicepType, DiscriminatedObjectType, ObjectTypeProperty, ObjectTypePropertyFlags, TypeBaseKind, TypeFactory, TypeReference } from "@azure/bicep-types";
import { ProviderDefinition, ResourceDefinition, ResourceDescriptor } from "./resources.js";
import { getFullyQualifiedType } from "./resource-helpers.js";
import { $lib } from "./lib.js";

const uuidLength = 36;
const uuidPattern = "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$";

// Single source of truth for how built-in TypeSpec scalars map to Bicep kinds,
// so classification logic isn't duplicated across the functions that need it.
const STRING_SCALAR_NAMES = new Set(["string", "url", "uuid", "duration", "armResourceIdentifier", "bytes", "plainDate", "plainTime", "utcDateTime", "offsetDateTime"]);
const INTEGER_SCALAR_NAMES = new Set(["int8", "int16", "int32", "int64", "uint8", "uint16", "uint32", "uint64", "integer", "safeint"]);
const FLOAT_SCALAR_NAMES = new Set(["float", "float32", "float64", "decimal", "decimal128", "numeric"]);

type ScalarBaseKind = "string" | "integer" | "float" | "boolean" | "null";

/** Walk a scalar's base-scalar chain and classify it by its built-in root type, if any. */
function getScalarBaseKind(scalar: Scalar): ScalarBaseKind | undefined {
  let current: Scalar | undefined = scalar;
  while (current) {
    if (STRING_SCALAR_NAMES.has(current.name)) return "string";
    if (INTEGER_SCALAR_NAMES.has(current.name)) return "integer";
    if (FLOAT_SCALAR_NAMES.has(current.name)) return "float";
    if (current.name === "boolean") return "boolean";
    if (current.name === "null") return "null";
    current = current.baseScalar;
  }
  return undefined;
}

interface StringConstraints {
  sensitive?: true;
  minLen?: number;
  maxLen?: number;
  pattern?: string;
}

interface NumericConstraints {
  minValue?: number;
  maxValue?: number;
}

// An empty pattern imposes no constraint, so treat it as absent.
function getNonEmptyPattern(program: Program, target: Scalar | ModelProperty): string | undefined {
  return getPattern(program, target) || undefined;
}

/** Resolve a scalar's own string/numeric constraints, applying uuid defaults where applicable. */
function resolveScalarConstraints(program: Program, scalar: Scalar): StringConstraints & NumericConstraints {
  const isUuid = getFormat(program, scalar) === "uuid";

  return {
    sensitive: isSecret(program, scalar) ? true : undefined,
    minLen: getMinLength(program, scalar) ?? (isUuid ? uuidLength : undefined),
    maxLen: getMaxLength(program, scalar) ?? (isUuid ? uuidLength : undefined),
    pattern: getNonEmptyPattern(program, scalar) ?? (isUuid ? uuidPattern : undefined),
    minValue: getMinValue(program, scalar),
    maxValue: getMaxValue(program, scalar),
  };
}

/** Resolve a property's string constraints, falling back to its scalar base type's constraints. */
function resolvePropertyStringConstraints(program: Program, prop: ModelProperty, baseType: Type): StringConstraints {
  const scalarConstraints = baseType.kind === "Scalar" ? resolveScalarConstraints(program, baseType) : undefined;
  const format = getFormat(program, prop) ?? (baseType.kind === "Scalar" ? getFormat(program, baseType) : undefined);
  const isUuid = format === "uuid";

  return {
    sensitive: isSecret(program, prop) || isSecret(program, baseType) ? true : undefined,
    minLen: getMinLength(program, prop) ?? scalarConstraints?.minLen ?? (isUuid ? uuidLength : undefined),
    maxLen: getMaxLength(program, prop) ?? scalarConstraints?.maxLen ?? (isUuid ? uuidLength : undefined),
    pattern: getNonEmptyPattern(program, prop) ?? scalarConstraints?.pattern ?? (isUuid ? uuidPattern : undefined),
  };
}

/** Resolve a property's numeric constraints, falling back to its scalar base type's constraints. */
function resolvePropertyNumericConstraints(program: Program, prop: ModelProperty, baseType: Type): NumericConstraints {
  const scalarConstraints = baseType.kind === "Scalar" ? resolveScalarConstraints(program, baseType) : undefined;

  return {
    minValue: getMinValue(program, prop) ?? scalarConstraints?.minValue,
    maxValue: getMaxValue(program, prop) ?? scalarConstraints?.maxValue,
  };
}

/**
 * Generate Bicep type definitions for all resources within a provider definition.
 *
 * This is the TypeSpec equivalent of autorest.bicep's type-generator.ts.
 * It converts TypeSpec model types into Bicep-types TypeFactory entries.
 */
export function generateTypes(program: Program, definition: ProviderDefinition): BicepType[] {
  const factory = new TypeFactory();
  const modelDefinitions = new Map<Model, Map<Model, TypeReference>>();
  const mergedModelNames = new Map<Model, Map<Model, string>>();
  const modelNames = new Map<Model, string>();
  const usedModelNames = new Set<string>();
  let anonymousModelCount = 0;

  function logWarning(message: string) {
    program.trace("typespec-bicep.warning", message);
    $lib.reportDiagnostic(program, {
      code: "emitter-warning",
      target: NoTarget,
      format: { message },
    });
  }

  // --- Name type resolution ---

  function getNameType(fullyQualifiedType: string, definition: ResourceDefinition): TypeReference | undefined {
    // Singletons have a fixed constant name (e.g. "default")
    if (definition.descriptor.constantName) {
      return factory.addStringLiteralType(definition.descriptor.constantName);
    }

    const nameProperty = definition.nameProperty;
    if (!nameProperty) {
      logWarning(`Skipping resource type ${fullyQualifiedType}: could not determine name type`);
      return undefined;
    }

    // Use parsePropertyType so constraint decorators (@pattern, @minLength, @maxLength)
    // applied directly to the 'name' property are preserved.
    return parsePropertyType(nameProperty);
  }

  // --- Standard ARM resource properties ---

  function getStandardizedResourceProperties(descriptor: ResourceDescriptor, resourceName: TypeReference): Record<string, ObjectTypeProperty> {
    const type = factory.addStringLiteralType(getFullyQualifiedType(descriptor));

    return {
      id: createObjectTypeProperty(factory.addStringType(), ObjectTypePropertyFlags.ReadOnly | ObjectTypePropertyFlags.DeployTimeConstant, "The resource id"),
      name: createObjectTypeProperty(resourceName, ObjectTypePropertyFlags.Required | ObjectTypePropertyFlags.DeployTimeConstant, "The resource name"),
      type: createObjectTypeProperty(type, ObjectTypePropertyFlags.ReadOnly | ObjectTypePropertyFlags.DeployTimeConstant, "The resource type"),
      apiVersion: createObjectTypeProperty(
        factory.addStringLiteralType(descriptor.apiVersion),
        ObjectTypePropertyFlags.ReadOnly | ObjectTypePropertyFlags.DeployTimeConstant,
        "The resource api version",
      ),
    };
  }

  // --- Resource body processing ---

  function processResourceBody(fullyQualifiedType: string, definition: ResourceDefinition): TypeReference | undefined {
    const { descriptor, putModel, getModel } = definition;
    const bodyModel = putModel ?? getModel;

    const nameTypeRef = getNameType(fullyQualifiedType, definition);
    if (!nameTypeRef) {
      return undefined;
    }

    const resourceProperties = getStandardizedResourceProperties(descriptor, nameTypeRef);

    let resourceDefinition: TypeReference;
    if (bodyModel) {
      // Check for discriminator
      const discriminatorProp = getDiscriminatorProperty(bodyModel);
      if (discriminatorProp) {
        resourceDefinition = factory.addDiscriminatedObjectType(getFullyQualifiedType(descriptor), discriminatorProp, resourceProperties, {});
      } else {
        resourceDefinition = factory.addObjectType(getFullyQualifiedType(descriptor), resourceProperties);
      }

      // Add properties from the model (including inherited ARM envelope properties)
      for (const { propName, putProp, getProp } of getObjectProperties(bodyModel, getModel ?? bodyModel)) {
        if (resourceProperties[propName]) {
          continue; // Skip standard properties (id, name, type, apiVersion)
        }

        const property = parseObjectProperty(putProp, getProp);
        if (property) {
          resourceProperties[propName] = property;
        }
      }

      // Handle discriminated subtypes
      if (discriminatorProp) {
        const discriminatedType = factory.lookupType(resourceDefinition) as DiscriminatedObjectType;
        handlePolymorphicType(discriminatedType, bodyModel, getModel ?? bodyModel);
      }
    } else {
      resourceDefinition = factory.addObjectType(getFullyQualifiedType(descriptor), resourceProperties);
    }

    return resourceDefinition;
  }

  // --- Resource processing ---

  function processResource(
    fullyQualifiedType: string,
    definitions: ResourceDefinition[],
  ): {
    descriptor: ResourceDescriptor;
    bodyType: TypeReference;
  } | null {
    if (definitions.length > 1) {
      // Multiple definitions for the same type — create discriminated type
      for (const def of definitions) {
        if (!def.descriptor.constantName) {
          logWarning(`Skipping resource type ${fullyQualifiedType}: found multiple definitions for the same type`);
          return null;
        }
      }

      const polymorphicBodies: Record<string, TypeReference> = {};
      for (const def of definitions) {
        const bodyType = processResourceBody(fullyQualifiedType, def);
        if (!bodyType || !def.descriptor.constantName) {
          return null;
        }
        polymorphicBodies[def.descriptor.constantName] = bodyType;
      }

      const discriminatedBodyType = factory.addDiscriminatedObjectType(fullyQualifiedType, "name", {}, polymorphicBodies);

      return {
        descriptor: {
          ...definitions[0].descriptor,
          constantName: undefined,
        },
        bodyType: discriminatedBodyType,
      };
    } else {
      const definition = definitions[0];
      const bodyType = processResourceBody(fullyQualifiedType, definition);
      if (!bodyType) {
        return null;
      }

      return {
        descriptor: definition.descriptor,
        bodyType,
      };
    }
  }

  // --- Main generation loop ---

  function generate(): BicepType[] {
    const { resourcesByType, resourceActions, providerOperations } = definition;

    for (const fullyQualifiedType in resourcesByType) {
      const definitions = resourcesByType[fullyQualifiedType];
      const output = processResource(fullyQualifiedType, definitions);
      if (!output) {
        continue;
      }

      const { descriptor, bodyType } = output;
      factory.addResourceType(`${getFullyQualifiedType(descriptor)}@${descriptor.apiVersion}`, bodyType, descriptor.readableScopes, descriptor.writableScopes);
    }

    // Process resource actions (POST list* operations)
    for (const action of resourceActions) {
      const actionType = `${getFullyQualifiedType(action.descriptor)}`;
      let request: TypeReference | undefined;
      if (action.requestModel) {
        request = parseType(action.requestModel);
        if (request === undefined) {
          logWarning(`Skipping resource action '${action.actionName}' on '${actionType}': unable to parse its request body type.`);
          continue;
        }
      }

      const response = action.responseType ? parseType(action.responseType) : factory.addAnyType();
      if (response === undefined) {
        logWarning(`Skipping resource action '${action.actionName}' on '${actionType}': unable to parse its response body type.`);
        continue;
      }

      factory.addResourceFunctionType(action.actionName, getFullyQualifiedType(action.descriptor), action.descriptor.apiVersion, response, request);
    }

    // Process provider-level operations
    for (const operation of providerOperations) {
      let request: TypeReference | undefined;
      if (operation.requestModel) {
        request = parseType(operation.requestModel);
        if (request === undefined) {
          logWarning(`Skipping provider operation '${operation.operationName}': unable to parse its request body type.`);
          continue;
        }
      }

      const response = operation.responseType ? parseType(operation.responseType) : factory.addAnyType();
      if (response === undefined) {
        logWarning(`Skipping provider operation '${operation.operationName}': unable to parse its response body type.`);
        continue;
      }

      factory.addResourceFunctionType(operation.operationName, operation.namespace, operation.apiVersion, response, request);
    }

    return factory.types;
  }

  // --- Type parsing ---

  /** Parse a property's type, applying property-level constraints. */
  function parsePropertyType(prop: ModelProperty, getProp: ModelProperty = prop): TypeReference | undefined {
    const baseType = prop.type;
    const getType = getProp.type;

    if (baseType.kind === "Model" && isArrayModel(baseType)) {
      const getItemType = getType.kind === "Model" && isArrayModel(getType) ? getType.indexer?.value : undefined;
      const itemType = baseType.indexer?.value ? parseType(baseType.indexer.value, getItemType) : undefined;
      return factory.addArrayType(itemType ?? factory.addAnyType(), getMinItems(program, prop), getMaxItems(program, prop));
    }

    if (baseType.kind === "Scalar" && isIntegerScalar(baseType)) {
      const { minValue, maxValue } = resolvePropertyNumericConstraints(program, prop, baseType);
      if (minValue !== undefined || maxValue !== undefined) {
        return factory.addIntegerType(minValue, maxValue);
      }
    }

    const { sensitive, minLen, maxLen, pattern } = resolvePropertyStringConstraints(program, prop, baseType);
    if (sensitive || minLen !== undefined || maxLen !== undefined || pattern !== undefined) {
      // If the underlying type is a string-like scalar, generate a constrained string
      if ((baseType.kind === "Scalar" && isStringScalar(baseType)) || (baseType.kind === "Model" && baseType.name === "string")) {
        return factory.addStringType(sensitive, minLen, maxLen, pattern);
      }
    }

    return parseType(prop.type, getProp.type);
  }

  function isStringScalar(scalar: Scalar): boolean {
    return getScalarBaseKind(scalar) === "string";
  }

  function isIntegerScalar(scalar: Scalar): boolean {
    return getScalarBaseKind(scalar) === "integer";
  }

  function parseType(type: Type, getType: Type = type): TypeReference | undefined {
    switch (type.kind) {
      case "Model":
        return parseModelType(type, getType.kind === "Model" ? getType : type);
      case "Scalar":
        return parseScalarType(type);
      case "Enum":
        return parseEnumType(type);
      case "EnumMember":
        return factory.addStringLiteralType(typeof type.value === "string" ? type.value : (type.value?.toString() ?? type.name));
      case "String":
        return factory.addStringLiteralType(type.value);
      case "Number":
        return factory.addIntegerType();
      case "Boolean":
        return factory.addBooleanType();
      case "Union":
        return parseUnionType(type);
      case "Intrinsic":
        return parseIntrinsicType(type);
      default:
        logWarning(`Unrecognized type kind: ${type.kind}. Returning 'any'.`);
        return factory.addAnyType();
    }
  }

  function parseModelType(model: Model, getModel: Model = model): TypeReference | undefined {
    // Handle well-known built-in models
    if (isArrayModel(model)) {
      const elementType = model.indexer?.value;
      const itemType = elementType ? parseType(elementType, getModel.indexer?.value) : factory.addAnyType();
      return factory.addArrayType(itemType ?? factory.addAnyType());
    }

    if (isRecordModel(model)) {
      const modelName = getMergedModelName(model, getModel);
      const existing = modelDefinitions.get(model)?.get(getModel);
      if (existing) {
        return existing;
      }
      const valueType = model.indexer?.value;
      const additionalProps = valueType ? parseType(valueType, getModel.indexer?.value) : undefined;
      const ref = factory.addObjectType(modelName || "Record", {}, additionalProps, isSecret(program, model) || undefined);
      cacheModelDefinition(model, getModel, ref);
      return ref;
    }

    // Check for cached named definition
    const modelName = getMergedModelName(model, getModel);
    const existing = modelDefinitions.get(model)?.get(getModel);
    if (existing) {
      return existing;
    }

    // Build object type
    const properties: Record<string, ObjectTypeProperty> = {};
    const discriminatorProp = getDiscriminatorProperty(model);

    let additionalProperties: TypeReference | undefined;
    if (model.indexer?.value) {
      additionalProperties = parseType(model.indexer.value, getModel.indexer?.value);
    }

    let definition: TypeReference;
    if (discriminatorProp) {
      definition = factory.addDiscriminatedObjectType(modelName, discriminatorProp, properties, {});
    } else {
      definition = factory.addObjectType(modelName, properties, additionalProperties, isSecret(program, model) || undefined);
    }

    // Cache before recursing to handle circular references
    cacheModelDefinition(model, getModel, definition);

    // Add properties
    for (const { propName, putProp, getProp } of getObjectProperties(model, getModel)) {
      if (discriminatorProp && propName === discriminatorProp) {
        continue; // Skip discriminator property
      }

      const property = parseObjectProperty(putProp, getProp);
      if (property) {
        properties[propName] = property;
      }
    }

    // Handle discriminated subtypes
    if (discriminatorProp) {
      const discriminatedType = factory.lookupType(definition) as DiscriminatedObjectType;
      handlePolymorphicType(discriminatedType, model, getModel);
    }

    return definition;
  }

  function parseScalarType(scalar: Scalar): TypeReference {
    const { sensitive, minLen, maxLen, pattern, minValue, maxValue } = resolveScalarConstraints(program, scalar);

    switch (getScalarBaseKind(scalar)) {
      case "string":
        // Includes "bytes" (base64-encoded) and date/time scalars, which are all represented as strings.
        return factory.addStringType(sensitive, minLen, maxLen, pattern);
      case "boolean":
        return factory.addBooleanType();
      case "integer":
        return factory.addIntegerType(minValue, maxValue);
      case "float":
        return factory.addIntegerType(); // Bicep doesn't have float; use int
      case "null":
        return factory.addNullType();
      default:
        logWarning(`Unknown scalar type: ${scalar.name}. Returning 'any'.`);
        return factory.addAnyType();
    }
  }

  function parseEnumType(enumType: Enum): TypeReference {
    const members = [...enumType.members.values()];
    if (members.length === 0) {
      return factory.addStringType();
    }

    const memberTypes = members.filter((member) => typeof member.value !== "number").map((member) => factory.addStringLiteralType(typeof member.value === "string" ? member.value : member.name));

    if (members.some((member) => typeof member.value === "number")) {
      memberTypes.push(factory.addIntegerType());
    }

    return memberTypes.length === 1 ? memberTypes[0] : factory.addUnionType(memberTypes);
  }

  function parseUnionType(union: Union): TypeReference {
    const variants = [...union.variants.values()];
    if (variants.length === 0) {
      return factory.addAnyType();
    }

    // Check if it's a string literal union (common for enums in TypeSpec)
    const memberTypes: TypeReference[] = [];
    for (const variant of variants) {
      const parsed = parseType(variant.type);
      if (parsed !== undefined) {
        memberTypes.push(parsed);
      }
    }

    if (memberTypes.length === 0) {
      return factory.addAnyType();
    }
    if (memberTypes.length === 1) {
      return memberTypes[0];
    }
    return factory.addUnionType(memberTypes);
  }

  function parseIntrinsicType(intrinsic: IntrinsicType): TypeReference {
    switch (intrinsic.name) {
      case "null":
        return factory.addNullType();
      case "void":
      case "never":
        return factory.addAnyType();
      default:
        return factory.addAnyType();
    }
  }

  // --- Property helpers ---

  function* getObjectProperties(model: Model, getModel: Model) {
    const putProperties = new Map(getAllProperties(model));
    const getProperties = new Map(getAllProperties(getModel));
    for (const propName of new Set([...putProperties.keys(), ...getProperties.keys()])) {
      yield { propName, putProp: putProperties.get(propName), getProp: getProperties.get(propName) };
    }
  }

  function parseObjectProperty(putProp: ModelProperty | undefined, getProp: ModelProperty | undefined): ObjectTypeProperty | undefined {
    const prop = putProp ?? getProp;
    if (!prop) {
      return undefined;
    }
    const propertyType = parsePropertyType(prop, getProp ?? prop);
    if (propertyType === undefined) {
      return undefined;
    }
    let flags = parsePropertyFlags(prop);
    if (!putProp) {
      flags = (flags & ~ObjectTypePropertyFlags.Required) | ObjectTypePropertyFlags.ReadOnly;
    }
    if (!getProp) {
      flags |= ObjectTypePropertyFlags.WriteOnly;
    }
    return createObjectTypeProperty(propertyType, flags, getPropertyDescription(prop));
  }

  function parsePropertyFlags(prop: ModelProperty): ObjectTypePropertyFlags {
    let flags = ObjectTypePropertyFlags.None;

    if (!prop.optional) {
      flags |= ObjectTypePropertyFlags.Required;
    }

    // Use TypeSpec compiler lifecycle visibility APIs
    const lifecycleEnum = getLifecycleVisibilityEnum(program);
    if (lifecycleEnum) {
      const visibilityModifiers = getVisibilityForClass(program, prop, lifecycleEnum);
      const modifierNames = new Set([...visibilityModifiers].map((m) => m.name));

      const hasRead = modifierNames.has("Read");
      const hasCreate = modifierNames.has("Create");
      const hasUpdate = modifierNames.has("Update");
      const writable = hasCreate || hasUpdate;

      if (hasRead && !writable) {
        flags |= ObjectTypePropertyFlags.ReadOnly;
      }
      if (writable && !hasRead) {
        flags |= ObjectTypePropertyFlags.WriteOnly;
      }
    }

    return flags;
  }

  function getPropertyDescription(prop: ModelProperty): string | undefined {
    return getDoc(program, prop);
  }

  // --- Discriminated type helpers ---

  function getDiscriminatorProperty(model: Model): string | undefined {
    const discriminator = getDiscriminator(program, model);
    if (discriminator) {
      return discriminator.propertyName;
    }
    return undefined;
  }

  function handlePolymorphicType(discriminatedObjectType: DiscriminatedObjectType, model: Model, getModel: Model = model): void {
    const discriminator = getDiscriminator(program, model);
    if (!discriminator) return;

    const [discriminatedUnion, diagnostics] = getDiscriminatedUnionFromInheritance(model, discriminator);
    program.reportDiagnostics(diagnostics);
    const [getDiscriminatedUnion, getDiagnostics] = getDiscriminatedUnionFromInheritance(getModel, getDiscriminator(program, getModel) ?? discriminator);
    program.reportDiagnostics(getDiagnostics);

    const variants = new Map([...getDiscriminatedUnion.variants, ...discriminatedUnion.variants]);
    for (const [discriminatorValue, derived] of variants) {
      const objectTypeRef = parseModelType(derived, getDiscriminatedUnion.variants.get(discriminatorValue) ?? derived);
      if (objectTypeRef === undefined) {
        logWarning(`Skipping subtype '${String(discriminatorValue)}' of discriminated type '${discriminatedObjectType.name}': unable to parse its model.`);
        continue;
      }

      const objectType = factory.lookupType(objectTypeRef);
      if (objectType.type !== TypeBaseKind.ObjectType) {
        logWarning(`Found unexpected element of discriminated type '${discriminatedObjectType.name}'`);
        continue;
      }

      discriminatedObjectType.elements[discriminatorValue] = objectTypeRef;

      // Add the discriminator property to the subtype
      const discriminatorName = discriminatedObjectType.discriminator;
      const baseDiscriminatorProperty = model.properties.get(discriminatorName);
      const description = objectType.properties[discriminatorName]?.description ?? (baseDiscriminatorProperty ? getPropertyDescription(baseDiscriminatorProperty) : undefined);
      objectType.properties[discriminatorName] = createObjectTypeProperty(factory.addStringLiteralType(discriminatorValue), ObjectTypePropertyFlags.Required, description);
    }
  }

  // --- Model helpers ---

  function cacheModelDefinition(model: Model, getModel: Model, definition: TypeReference): void {
    let definitions = modelDefinitions.get(model);
    if (!definitions) {
      definitions = new Map();
      modelDefinitions.set(model, definitions);
    }
    definitions.set(getModel, definition);
  }

  function getMergedModelName(model: Model, getModel: Model): string {
    if (model === getModel) {
      return getModelName(model);
    }
    let names = mergedModelNames.get(model);
    if (!names) {
      names = new Map();
      mergedModelNames.set(model, names);
    }
    const existing = names.get(getModel);
    if (existing) {
      return existing;
    }
    const baseName = `${getModelName(model)}Or${getModelName(getModel)}`;
    let name = baseName;
    let suffix = 2;
    while (usedModelNames.has(name)) {
      name = `${baseName}${suffix++}`;
    }
    usedModelNames.add(name);
    names.set(getModel, name);
    return name;
  }

  function getModelName(model: Model): string {
    const existing = modelNames.get(model);
    if (existing) {
      return existing;
    }

    let name = model.name || `AnonymousModel${++anonymousModelCount}`;
    if (usedModelNames.has(name) && model.namespace) {
      name = `${getNamespaceFullName(model.namespace)}.${name}`;
    }

    let suffix = 2;
    const baseName = name;
    while (usedModelNames.has(name)) {
      name = `${baseName}${suffix++}`;
    }

    modelNames.set(model, name);
    usedModelNames.add(name);
    return name;
  }

  function isArrayModel(model: Model): boolean {
    return model.name === "Array" && model.indexer !== undefined;
  }

  function isRecordModel(model: Model): boolean {
    return model.name === "Record" && model.indexer !== undefined;
  }

  function* getAllProperties(model: Model): IterableIterator<[string, ModelProperty]> {
    // Include inherited properties from base models
    if (model.baseModel) {
      yield* getAllProperties(model.baseModel);
    }

    // Include own properties
    for (const [name, prop] of model.properties) {
      yield [name, prop];
    }
  }

  function createObjectTypeProperty(type: TypeReference, flags: ObjectTypePropertyFlags, description?: string): ObjectTypeProperty {
    const normalizedDescription = description?.replaceAll('\\"', '"').trim();

    return {
      type,
      flags,
      description: normalizedDescription || undefined,
    };
  }

  return generate();
}
