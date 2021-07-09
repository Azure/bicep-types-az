import { Dictionary, keys, orderBy } from 'lodash';
import { ArrayType, BuiltInType, DiscriminatedObjectType, getBuiltInTypeKindLabel, getObjectPropertyFlagsLabels, getScopeTypeLabels, ObjectProperty, ObjectType, ResourceType, StringLiteralType, TypeBase, TypeBaseKind, TypeReference, UnionType } from '../types';

export function writeMarkdown(provider: string, apiVersion: string, types: TypeBase[]) {
  let output = '';

  function getTypeName(types: TypeBase[], typeReference: TypeReference): string {
    const type = types[typeReference.Index];
    switch (type.Type) {
      case TypeBaseKind.BuiltInType:
        return getBuiltInTypeKindLabel((type as BuiltInType).Kind).toLowerCase();
      case TypeBaseKind.ObjectType:
        return generateAnchorLink((type as ObjectType).Name);
      case TypeBaseKind.ArrayType:
        return `${getTypeName(types, (type as ArrayType).ItemType)}[]`;
      case TypeBaseKind.ResourceType:
        return (type as ResourceType).Name;
      case TypeBaseKind.UnionType:
        const elements = (type as UnionType).Elements.map(x => getTypeName(types, x));
        return elements.sort().join(' | ');
      case TypeBaseKind.StringLiteralType:
        return `'${(type as StringLiteralType).Value}'`;
      case TypeBaseKind.DiscriminatedObjectType:
        return generateAnchorLink((type as DiscriminatedObjectType).Name);
      default:
        throw `Unrecognized type`;
    }
  }

  function generateAnchorLink(name: string) {
    return `[${name}](#${name.replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()})`;
  }

  function writeTypeProperty(types: TypeBase[], name: string, property: ObjectProperty) {
    const flagsString = property.Flags ? ` (${getObjectPropertyFlagsLabels(property.Flags).join(', ')})` : '';
    const descriptionString = property.Description ? `: ${property.Description}` : '';
    writeBullet(name, `${getTypeName(types, property.Type)}${flagsString}${descriptionString}`);
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
      if (typesToWrite.indexOf(types[typeReference.Index]) === -1) {
        typesToWrite.push(types[typeReference.Index]);
        findTypesToWrite(types, typesToWrite, typeReference);
      }
    }

    const type = types[typeReference.Index];
    switch (type.Type) {
      case TypeBaseKind.ArrayType:
        const arrayType = type as ArrayType;
        addToOrderedTypes(arrayType.ItemType);

        return;
      case TypeBaseKind.ObjectType:
        const objectType = type as ObjectType;

        for (const key of sortedKeys(objectType.Properties)) {
          addToOrderedTypes(objectType.Properties[key].Type);
        }

        if (objectType.AdditionalProperties) {
          addToOrderedTypes(objectType.AdditionalProperties);
        }

        return;
      case TypeBaseKind.DiscriminatedObjectType:
        const discriminatedObjectType = type as DiscriminatedObjectType;

        for (const key of sortedKeys(discriminatedObjectType.BaseProperties)) {
          addToOrderedTypes(discriminatedObjectType.BaseProperties[key].Type);
        }

        for (const key of sortedKeys(discriminatedObjectType.Elements)) {
          const element = discriminatedObjectType.Elements[key];
          addToOrderedTypes(element);
        }

        return;
    }
  }

  function sortedKeys<T>(dictionary: Dictionary<T>) {
    return orderBy(keys(dictionary), k => k.toLowerCase(), 'asc');
  }

  function writeComplexType(types: TypeBase[], type: TypeBase, nesting: number, includeHeader: boolean) {
    switch (type.Type) {
      case TypeBaseKind.ResourceType:
        const resourceType = type as ResourceType;
        writeHeading(nesting, `Resource ${resourceType.Name}`);
        writeBullet("Valid Scope(s)", `${getScopeTypeLabels(resourceType.ScopeType).join(', ') || 'Unknown'}`);
        writeComplexType(types, types[resourceType.Body.Index], nesting, false);

        return;
      case TypeBaseKind.ObjectType:
        const objectType = type as ObjectType;
        if (includeHeader) {
          writeHeading(nesting, objectType.Name);
        }

        writeHeading(nesting + 1, "Properties");
        for (const key of sortedKeys(objectType.Properties)) {
          writeTypeProperty(types, key, objectType.Properties[key]);
        }

        if (objectType.AdditionalProperties) {
          writeHeading(nesting + 1, "Additional Properties");
          writeBullet("Additional Properties Type", getTypeName(types, objectType.AdditionalProperties));
        }

        writeNewLine();
        return;
      case TypeBaseKind.DiscriminatedObjectType:
        const discriminatedObjectType = type as DiscriminatedObjectType;
        if (includeHeader) {
          writeHeading(nesting, discriminatedObjectType.Name);
        }

        writeBullet("Discriminator", discriminatedObjectType.Discriminator);
        writeNewLine();

        writeHeading(nesting + 1, "Base Properties");
        for (const propertyName of sortedKeys(discriminatedObjectType.BaseProperties)) {
          writeTypeProperty(types, propertyName, discriminatedObjectType.BaseProperties[propertyName]);
        }

        for (const key of sortedKeys(discriminatedObjectType.Elements)) {
          const element = discriminatedObjectType.Elements[key];
          writeComplexType(types, types[element.Index], nesting + 1, true);
        }

        writeNewLine();
        return;
    }
  }

  function generateMarkdown(provider: string, apiVersion: string, types: TypeBase[]) {
    writeHeading(1, `${provider} @ ${apiVersion}`);
    writeNewLine();

    const resourceTypes = orderBy(types.filter(t => t instanceof ResourceType) as ResourceType[], x => x.Name.split('@')[0].toLowerCase());
    const typesToWrite = [...resourceTypes];

    for (const resourceType of resourceTypes) {
      findTypesToWrite(types, typesToWrite, resourceType.Body);
    }

    for (const type of typesToWrite) {
      writeComplexType(types, type, 2, true);
    }

    return output;
  }

  return generateMarkdown(provider, apiVersion, types);
}