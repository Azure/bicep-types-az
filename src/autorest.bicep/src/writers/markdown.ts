import { Dictionary, keys, orderBy } from 'lodash';
import { ArrayType, BuiltInType, DiscriminatedObjectType, getBuiltInTypeKindLabel, getObjectPropertyFlagsLabels, getScopeTypeLabels, ObjectProperty, ObjectType, ResourceType, StringLiteralType, TypeBase, TypeBaseKind, TypeReference, UnionType } from '../types';

export function writeMarkdown(provider: string, apiVersion: string, types: TypeBase[]) {
  let output = '';

  function getTypeName(types: TypeBase[], typeReference: TypeReference): string {
    const type = types[typeReference.index];
    switch (type.type) {
      case TypeBaseKind.BuiltInType:
        return getBuiltInTypeKindLabel((type as BuiltInType).kind).toLowerCase();
      case TypeBaseKind.ObjectType:
        return generateAnchorLink((type as ObjectType).name);
      case TypeBaseKind.ArrayType:
        return `${getTypeName(types, (type as ArrayType).itemType)}[]`;
      case TypeBaseKind.ResourceType:
        return (type as ResourceType).name;
      case TypeBaseKind.UnionType:
        const elements = (type as UnionType).elements.map(x => getTypeName(types, x));
        return elements.sort().join(' | ');
      case TypeBaseKind.StringLiteralType:
        return `'${(type as StringLiteralType).value}'`;
      case TypeBaseKind.DiscriminatedObjectType:
        return generateAnchorLink((type as DiscriminatedObjectType).name);
      default:
        throw `Unrecognized type`;
    }
  }

  function generateAnchorLink(name: string) {
    return `[${name}](#${name.replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()})`;
  }

  function writeTypeProperty(types: TypeBase[], name: string, property: ObjectProperty) {
    const flagsString = property.flags ? ` (${getObjectPropertyFlagsLabels(property.flags).join(', ')})` : '';
    writeBullet(name, `${getTypeName(types, property.type)}${flagsString}`);
  }

  function writeHeading(nesting: number, message: string) {
    output += `${'#'.repeat(nesting)} ${message}`;
    writeNewLine();
  }

  function writeBullet(key: string, value: string) {
    output += `* **${key}**: ${value}`;
    writeNewLine();
  }

  function writeNewLine() {
    output += '\n';
  }

  function findTypesToWrite(types: TypeBase[], typesToWrite: TypeBase[], typeReference: TypeReference) {
    function addToOrderedTypes(typeReference: TypeReference) {
      // this is needed to avoid circular type references causing stack overflows
      if (typesToWrite.indexOf(types[typeReference.index]) === -1) {
        typesToWrite.push(types[typeReference.index]);
        findTypesToWrite(types, typesToWrite, typeReference);
      }
    }

    const type = types[typeReference.index];
    switch (type.type) {
      case TypeBaseKind.ArrayType:
        const arrayType = type as ArrayType;
        addToOrderedTypes(arrayType.itemType);

        return;
      case TypeBaseKind.ObjectType:
        const objectType = type as ObjectType;

        for (const key of sortedKeys(objectType.properties)) {
          addToOrderedTypes(objectType.properties[key].type);
        }

        if (objectType.additionalProperties) {
          addToOrderedTypes(objectType.additionalProperties);
        }

        return;
      case TypeBaseKind.DiscriminatedObjectType:
        const discriminatedObjectType = type as DiscriminatedObjectType;

        for (const key of sortedKeys(discriminatedObjectType.baseProperties)) {
          addToOrderedTypes(discriminatedObjectType.baseProperties[key].type);
        }

        for (const key of sortedKeys(discriminatedObjectType.elements)) {
          const element = discriminatedObjectType.elements[key];
          addToOrderedTypes(element);
        }

        return;
    }
  }

  function sortedKeys<T>(dictionary: Dictionary<T>) {
    return orderBy(keys(dictionary), k => k.toLowerCase(), 'asc');
  }

  function writeComplexType(types: TypeBase[], type: TypeBase, nesting: number, includeHeader: boolean) {
    switch (type.type) {
      case TypeBaseKind.ResourceType:
        const resourceType = type as ResourceType;
        writeHeading(nesting, `Resource ${resourceType.name}`);
        writeBullet("Valid Scope(s)", `${getScopeTypeLabels(resourceType.scopeType).join(', ') || 'Unknown'}`);
        writeComplexType(types, types[resourceType.body.index], nesting, false);

        return;
      case TypeBaseKind.ObjectType:
        const objectType = type as ObjectType;
        if (includeHeader) {
          writeHeading(nesting, objectType.name);
        }

        writeHeading(nesting + 1, "Properties");
        for (const key of sortedKeys(objectType.properties)) {
          writeTypeProperty(types, key, objectType.properties[key]);
        }

        if (objectType.additionalProperties) {
          writeHeading(nesting + 1, "Additional Properties");
          writeBullet("Additional Properties Type", getTypeName(types, objectType.additionalProperties));
        }

        writeNewLine();
        return;
      case TypeBaseKind.DiscriminatedObjectType:
        const discriminatedObjectType = type as DiscriminatedObjectType;
        if (includeHeader) {
          writeHeading(nesting, discriminatedObjectType.name);
        }

        writeBullet("Discriminator", discriminatedObjectType.discriminator);
        writeNewLine();

        writeHeading(nesting + 1, "Base Properties");
        for (const propertyName of sortedKeys(discriminatedObjectType.baseProperties)) {
          writeTypeProperty(types, propertyName, discriminatedObjectType.baseProperties[propertyName]);
        }

        for (const key of sortedKeys(discriminatedObjectType.elements)) {
          const element = discriminatedObjectType.elements[key];
          writeComplexType(types, types[element.index], nesting + 1, true);
        }

        writeNewLine();
        return;
    }
  }

  function generateMarkdown(provider: string, apiVersion: string, types: TypeBase[]) {
    writeHeading(1, `${provider} @ ${apiVersion}`);
    writeNewLine();

    const resourceTypes = orderBy(types.filter(t => t instanceof ResourceType) as ResourceType[], x => x.name.split('@')[0].toLowerCase());
    const typesToWrite = [...resourceTypes];

    for (const resourceType of resourceTypes) {
      findTypesToWrite(types, typesToWrite, resourceType.body);
    }

    for (const type of typesToWrite) {
      writeComplexType(types, type, 2, true);
    }

    return output;
  }

  return generateMarkdown(provider, apiVersion, types);
}