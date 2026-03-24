// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  Enum,
  getDiscriminator,
  getDoc,
  getLifecycleVisibilityEnum,
  getMaxLength,
  getMinLength,
  getPattern,
  getVisibilityForClass,
  IntrinsicType,
  Model,
  ModelProperty,
  Program,
  Scalar,
  Type,
  Union,
} from "@typespec/compiler";
import {
  BicepType,
  DiscriminatedObjectType,
  ObjectTypeProperty,
  ObjectTypePropertyFlags,
  TypeBaseKind,
  TypeFactory,
  TypeReference,
} from "bicep-types";
import {
  getFullyQualifiedType,
  ProviderDefinition,
  ResourceDefinition,
  ResourceDescriptor,
} from "./resources.js";

/**
 * Generate Bicep type definitions for all resources within a provider definition.
 *
 * This is the TypeSpec equivalent of autorest.bicep's type-generator.ts.
 * It converts TypeSpec model types into Bicep-types TypeFactory entries.
 */
export function generateTypes(
  program: Program,
  definition: ProviderDefinition,
): BicepType[] {
  const factory = new TypeFactory();
  const namedDefinitions = new Map<string, TypeReference>();

  function logWarning(message: string) {
    program.trace("typespec-bicep.warning", message);
  }

  // --- Name type resolution ---

  function getNameType(
    fullyQualifiedType: string,
    definition: ResourceDefinition,
  ): TypeReference | undefined {
    // Singletons have a fixed constant name (e.g. "default")
    if (definition.descriptor.constantName) {
      return factory.addStringLiteralType(definition.descriptor.constantName);
    }

    const nameType = definition.nameType;
    if (!nameType) {
      logWarning(
        `Skipping resource type ${fullyQualifiedType}: could not determine name type`,
      );
      return undefined;
    }

    return parseType(nameType);
  }

  // --- Standard ARM resource properties ---

  function getStandardizedResourceProperties(
    descriptor: ResourceDescriptor,
    resourceName: TypeReference,
  ): Record<string, ObjectTypeProperty> {
    const type = factory.addStringLiteralType(
      getFullyQualifiedType(descriptor),
    );

    return {
      id: createObjectTypeProperty(
        factory.addStringType(),
        ObjectTypePropertyFlags.ReadOnly |
          ObjectTypePropertyFlags.DeployTimeConstant,
        "The resource id",
      ),
      name: createObjectTypeProperty(
        resourceName,
        ObjectTypePropertyFlags.Required |
          ObjectTypePropertyFlags.DeployTimeConstant,
        "The resource name",
      ),
      type: createObjectTypeProperty(
        type,
        ObjectTypePropertyFlags.ReadOnly |
          ObjectTypePropertyFlags.DeployTimeConstant,
        "The resource type",
      ),
      apiVersion: createObjectTypeProperty(
        factory.addStringLiteralType(descriptor.apiVersion),
        ObjectTypePropertyFlags.ReadOnly |
          ObjectTypePropertyFlags.DeployTimeConstant,
        "The resource api version",
      ),
    };
  }

  // --- Resource body processing ---

  function processResourceBody(
    fullyQualifiedType: string,
    definition: ResourceDefinition,
  ): TypeReference | undefined {
    const { descriptor, putModel, getModel } = definition;
    const bodyModel = putModel ?? getModel;

    const nameTypeRef = getNameType(fullyQualifiedType, definition);
    if (!nameTypeRef) {
      return undefined;
    }

    const resourceProperties = getStandardizedResourceProperties(
      descriptor,
      nameTypeRef,
    );

    let resourceDefinition: TypeReference;
    if (bodyModel) {
      // Check for discriminator
      const discriminatorProp = getDiscriminatorProperty(bodyModel);
      if (discriminatorProp) {
        resourceDefinition = factory.addDiscriminatedObjectType(
          getFullyQualifiedType(descriptor),
          discriminatorProp,
          resourceProperties,
          {},
        );
      } else {
        resourceDefinition = factory.addObjectType(
          getFullyQualifiedType(descriptor),
          resourceProperties,
        );
      }

      // Add properties from the model (including inherited ARM envelope properties)
      for (const [propName, prop] of getAllProperties(bodyModel)) {
        if (resourceProperties[propName]) {
          continue; // Skip standard properties (id, name, type, apiVersion)
        }

        const propertyType = parsePropertyType(prop);
        if (propertyType !== undefined) {
          const flags = parsePropertyFlags(prop);
          const description = getPropertyDescription(prop);
          resourceProperties[propName] = createObjectTypeProperty(
            propertyType,
            flags,
            description,
          );
        }
      }

      // Handle discriminated subtypes
      if (discriminatorProp) {
        const discriminatedType = factory.lookupType(
          resourceDefinition,
        ) as DiscriminatedObjectType;
        handlePolymorphicType(discriminatedType, bodyModel);
      }
    } else {
      resourceDefinition = factory.addObjectType(
        getFullyQualifiedType(descriptor),
        resourceProperties,
      );
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
          logWarning(
            `Skipping resource type ${fullyQualifiedType}: found multiple definitions for the same type`,
          );
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

      const discriminatedBodyType = factory.addDiscriminatedObjectType(
        fullyQualifiedType,
        "name",
        {},
        polymorphicBodies,
      );

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
    const { resourcesByType, resourceActions } = definition;

    for (const fullyQualifiedType in resourcesByType) {
      const definitions = resourcesByType[fullyQualifiedType];
      const output = processResource(fullyQualifiedType, definitions);
      if (!output) {
        continue;
      }

      const { descriptor, bodyType } = output;
      factory.addResourceType(
        `${getFullyQualifiedType(descriptor)}@${descriptor.apiVersion}`,
        bodyType,
        descriptor.readableScopes,
        descriptor.writableScopes,
      );
    }

    // Process resource actions (POST list* operations)
    for (const action of resourceActions) {
      let request: TypeReference | undefined;
      if (action.requestModel) {
        request = parseType(action.requestModel);
        if (request === undefined) {
          continue;
        }
      }

      if (!action.responseModel) {
        logWarning(
          `Skipping resource action ${action.actionName}: no response model found`,
        );
        continue;
      }

      // Unwrap ARM response envelope types (e.g. ArmResponse<T> → T)
      const unwrappedResponse = unwrapArmResponseEnvelope(action.responseModel);
      if (!unwrappedResponse) {
        continue;
      }

      const response = parseType(unwrappedResponse);
      if (response === undefined) {
        continue;
      }

      factory.addResourceFunctionType(
        action.actionName,
        getFullyQualifiedType(action.descriptor),
        action.descriptor.apiVersion,
        response,
        request,
      );
    }

    return factory.types;
  }

  // --- Type parsing ---

  /**
   * Parse a property's type, applying any property-level string constraints
   * (@minLength, @maxLength, @pattern decorators on the property itself).
   */
  function parsePropertyType(prop: ModelProperty): TypeReference | undefined {
    // Check if the property itself has string constraint decorators
    const minLen = getMinLength(program, prop);
    const maxLen = getMaxLength(program, prop);
    const pattern = getPattern(program, prop);

    if (minLen !== undefined || maxLen !== undefined || pattern !== undefined) {
      // If the underlying type is a string-like scalar, generate a constrained string
      const baseType = prop.type;
      if (
        (baseType.kind === "Scalar" && isStringScalar(baseType)) ||
        (baseType.kind === "Model" && baseType.name === "string")
      ) {
        return factory.addStringType(undefined, minLen, maxLen, pattern);
      }
    }

    return parseType(prop.type);
  }

  /**
   * Check if a scalar type resolves to a string base type.
   */
  function isStringScalar(scalar: Scalar): boolean {
    let current: Scalar | undefined = scalar;
    while (current) {
      if (["string", "url", "uuid", "duration", "armResourceIdentifier"].includes(current.name)) {
        return true;
      }
      current = current.baseScalar;
    }
    return false;
  }

  function parseType(type: Type): TypeReference | undefined {
    switch (type.kind) {
      case "Model":
        return parseModelType(type);
      case "Scalar":
        return parseScalarType(type);
      case "Enum":
        return parseEnumType(type);
      case "EnumMember":
        return factory.addStringLiteralType(
          typeof type.value === "string" ? type.value : (type.value?.toString() ?? type.name),
        );
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

  function parseModelType(model: Model): TypeReference | undefined {
    // Handle well-known built-in models
    if (isArrayModel(model)) {
      const elementType = model.indexer?.value;
      const itemType = elementType
        ? parseType(elementType)
        : factory.addAnyType();
      return factory.addArrayType(itemType ?? factory.addAnyType());
    }

    if (isRecordModel(model)) {
      const modelName = getModelName(model);
      if (namedDefinitions.has(modelName)) {
        return namedDefinitions.get(modelName)!;
      }
      const valueType = model.indexer?.value;
      const additionalProps = valueType ? parseType(valueType) : undefined;
      const ref = factory.addObjectType(modelName || "Record", {}, additionalProps);
      namedDefinitions.set(modelName, ref);
      return ref;
    }

    // Check for cached named definition
    const modelName = getModelName(model);
    if (namedDefinitions.has(modelName)) {
      return namedDefinitions.get(modelName)!;
    }

    // Build object type
    const properties: Record<string, ObjectTypeProperty> = {};
    const discriminatorProp = getDiscriminatorProperty(model);

    let additionalProperties: TypeReference | undefined;
    if (model.indexer?.value) {
      additionalProperties = parseType(model.indexer.value);
    }

    let definition: TypeReference;
    if (discriminatorProp) {
      definition = factory.addDiscriminatedObjectType(
        modelName,
        discriminatorProp,
        properties,
        {},
      );
    } else {
      definition = factory.addObjectType(
        modelName,
        properties,
        additionalProperties,
      );
    }

    // Cache before recursing to handle circular references
    namedDefinitions.set(modelName, definition);

    // Add properties
    for (const [propName, prop] of getAllProperties(model)) {
      if (discriminatorProp && propName === discriminatorProp) {
        continue; // Skip discriminator property
      }

      const propertyType = parsePropertyType(prop);
      if (propertyType !== undefined) {
        const flags = parsePropertyFlags(prop);
        const description = getPropertyDescription(prop);
        properties[propName] = createObjectTypeProperty(
          propertyType,
          flags,
          description,
        );
      }
    }

    // Handle discriminated subtypes
    if (discriminatorProp) {
      const discriminatedType = factory.lookupType(
        definition,
      ) as DiscriminatedObjectType;
      handlePolymorphicType(discriminatedType, model);
    }

    return definition;
  }

  function parseScalarType(scalar: Scalar): TypeReference {
    // Collect string constraints from the scalar hierarchy
    const minLen = getMinLength(program, scalar);
    const maxLen = getMaxLength(program, scalar);
    const pattern = getPattern(program, scalar);

    // Walk the scalar hierarchy to find a built-in base type
    let current: Scalar | undefined = scalar;
    while (current) {
      switch (current.name) {
        case "string":
        case "url":
        case "uuid":
        case "duration":
        case "armResourceIdentifier":
          return factory.addStringType(undefined, minLen, maxLen, pattern);
        case "boolean":
          return factory.addBooleanType();
        case "int8":
        case "int16":
        case "int32":
        case "int64":
        case "uint8":
        case "uint16":
        case "uint32":
        case "uint64":
        case "integer":
        case "safeint":
          return factory.addIntegerType();
        case "float":
        case "float32":
        case "float64":
        case "decimal":
        case "decimal128":
        case "numeric":
          return factory.addIntegerType(); // Bicep doesn't have float; use int
        case "bytes":
          return factory.addStringType(); // Base64-encoded
        case "plainDate":
        case "plainTime":
        case "utcDateTime":
        case "offsetDateTime":
          return factory.addStringType();
        case "null":
          return factory.addNullType();
      }
      current = current.baseScalar;
    }

    logWarning(`Unknown scalar type: ${scalar.name}. Returning 'any'.`);
    return factory.addAnyType();
  }

  function parseEnumType(enumType: Enum): TypeReference {
    const members = [...enumType.members.values()];
    if (members.length === 0) {
      return factory.addStringType();
    }

    // Check if all members are string values
    const allString = members.every(
      (m) => typeof m.value === "string" || m.value === undefined,
    );

    if (allString) {
      const enumTypes = members.map((m) =>
        factory.addStringLiteralType(
          typeof m.value === "string" ? m.value : m.name,
        ),
      );

      if (enumTypes.length === 1) {
        return enumTypes[0];
      }
      return factory.addUnionType(enumTypes);
    }

    // Non-string enums: just use the base type
    return factory.addStringType();
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

  function handlePolymorphicType(
    discriminatedObjectType: DiscriminatedObjectType,
    model: Model,
  ): void {
    // Find all derived models that have the discriminator value set
    if (!model.derivedModels) return;

    for (const derived of model.derivedModels) {
      const discriminatorValue = getDiscriminatorValue(
        derived,
        discriminatedObjectType.discriminator,
      );
      if (!discriminatorValue) continue;

      const objectTypeRef = parseModelType(derived);
      if (objectTypeRef === undefined) continue;

      const objectType = factory.lookupType(objectTypeRef);
      if (objectType.type !== TypeBaseKind.ObjectType) {
        logWarning(
          `Found unexpected element of discriminated type '${discriminatedObjectType.name}'`,
        );
        continue;
      }

      discriminatedObjectType.elements[discriminatorValue] = objectTypeRef;

      // Add the discriminator property to the subtype
      objectType.properties[discriminatedObjectType.discriminator] =
        createObjectTypeProperty(
          factory.addStringLiteralType(discriminatorValue),
          ObjectTypePropertyFlags.Required,
        );
    }
  }

  function getDiscriminatorValue(
    model: Model,
    discriminatorPropertyName: string,
  ): string | undefined {
    const prop = model.properties.get(discriminatorPropertyName);
    if (!prop) return undefined;

    // Check if the property type is a string literal
    if (prop.type.kind === "Scalar" && prop.defaultValue !== undefined) {
      return String(prop.defaultValue);
    }

    // Check for literal type
    if (
      prop.type.kind === "Intrinsic" ||
      (prop.type.kind === "Scalar" && prop.type.name === "string")
    ) {
      // Try to get enum value from the model name as a convention
      return model.name;
    }

    // Check if the type wraps a string literal
    if (prop.type.kind === "Union") {
      const variants = [...prop.type.variants.values()];
      if (variants.length === 1) {
        const v = variants[0].type;
        if (v.kind === "Scalar") {
          return model.name;
        }
      }
    }

    return model.name;
  }

  // --- Model helpers ---

  function getModelName(model: Model): string {
    return model.name || "AnonymousModel";
  }

  function isArrayModel(model: Model): boolean {
    return model.name === "Array" && model.indexer !== undefined;
  }

  function isRecordModel(model: Model): boolean {
    return model.name === "Record" && model.indexer !== undefined;
  }

  function* getAllProperties(
    model: Model,
  ): IterableIterator<[string, ModelProperty]> {
    // Include inherited properties from base models
    if (model.baseModel) {
      yield* getAllProperties(model.baseModel);
    }

    // Include own properties
    for (const [name, prop] of model.properties) {
      yield [name, prop];
    }
  }

  // --- Utility ---

  /**
   * Unwrap ARM response envelope types.
   * ARM response types like ArmResponse<T> are wrapper models whose
   * template argument is the actual payload type. We detect these by:
   * 1. Checking if the model's templateMapper has arguments (template instantiation)
   * 2. Checking if the model name contains "Response" (ARM convention)
   * If so, we return the first template argument as the unwrapped type.
   * If the inner type is void/never, we return undefined (no output).
   */
  function unwrapArmResponseEnvelope(model: Model): Model | undefined {
    // Check if this is a template instantiation with a template argument
    if (model.templateMapper?.args && model.templateMapper.args.length > 0) {
      // Check if the source template looks like an ARM response wrapper
      const isArmResponse = model.name === "" || // Anonymous template instantiation
        (model.sourceModel && /Response|Accepted|NoContent/.test(model.sourceModel.name ?? ""));

      if (isArmResponse) {
        const innerArg = model.templateMapper.args[0];
        if (innerArg.entityKind === "Type") {
          if (innerArg.kind === "Model") {
            return innerArg;
          }
          if (innerArg.kind === "Intrinsic" && (innerArg.name === "void" || innerArg.name === "never")) {
            return undefined;
          }
        }
      }
    }

    // Check for a "body" property that wraps the actual content
    // This handles cases like { @statusCode code: 200; @body body: T; }
    const bodyProp = model.properties.get("body");
    if (bodyProp && bodyProp.type.kind === "Model") {
      // Only unwrap if this looks like a response envelope (has statusCode or similar)
      const hasStatusCode = model.properties.has("statusCode");
      if (hasStatusCode) {
        return bodyProp.type;
      }
    }

    // Check for void response types (only statusCode, no body) — these represent
    // operations with no response payload (e.g. purgeDeleted, accepted LRO responses)
    const hasStatusCode = model.properties.has("statusCode");
    if (hasStatusCode && !model.properties.has("body")) {
      return undefined; // No meaningful output
    }

    // Not an envelope — return as-is
    return model;
  }

  function createObjectTypeProperty(
    type: TypeReference,
    flags: ObjectTypePropertyFlags,
    description?: string,
  ): ObjectTypeProperty {
    return {
      type,
      flags,
      description: description?.trim() || undefined,
    };
  }

  return generate();
}
