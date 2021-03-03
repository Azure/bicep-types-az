import { ArrayType, BuiltInType, DiscriminatedObjectType, ObjectProperty, ObjectPropertyFlags, ObjectType, ResourceType, StringLiteralType, TypeBase, TypeBaseKind, TypeReference, UnionType } from './types';

function getTypeName(types: TypeBase[], typeReference: TypeReference): string {
  const type = types[typeReference.index];
  switch (type.type) {
    case TypeBaseKind.BuiltInType:
      return (type as BuiltInType).kind.toString().toLowerCase();
    case TypeBaseKind.ObjectType:
      return (type as ObjectType).name;
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
      return (type as DiscriminatedObjectType).name;
    default:
      throw `Unrecognized type`;
  }
}

let output = '';
function writeHeading(nesting: number, message: string) {
  return output += `${'#'.repeat(nesting)} ${message}"`;
}

function writeTypeProperty(types: TypeBase[], name: string, property: ObjectProperty) {
  const flagsString = property.flags != ObjectPropertyFlags.None ? ` (${property.flags})` : ``;
  writeBullet(name, `${getTypeName(types, property.type)}${flagsString}`);
}

function writeBullet(key: string, value: string) {
  output += `* **${key}**: ${value}`;
}

function writeNewLine() {
  output += '\n';
}

/*
function write(types: TypeBase[], providerNamespace: string, apiVersion: string) {
    writeHeading(1, `${providerNamespace} @ ${apiVersion}`);
    writeNewLine();

    const resourceTypes = types.filter(t => t instanceof ResourceType) as ResourceType[];

    var resourceTypes = types.filter(t => t instanceof ResourceType).sort(x => x..Split("@")[0], StringComparer.OrdinalIgnoreCase).ToList();
    var typesToWrite = new OrderedTypes(resourceTypes);
    foreach (var resourceType in resourceTypes)
    {
        FindTypesToWrite(typesToWrite, resourceType.Body);
    }

    foreach (var type in typesToWrite)
    {
        WriteComplexType(type, 2, true);
    }

    return output.ToString();
}
*/