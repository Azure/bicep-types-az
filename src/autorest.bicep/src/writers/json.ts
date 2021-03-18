import { ArrayType, BuiltInType, DiscriminatedObjectType, ObjectType, ResourceType, StringLiteralType, TypeBase, TypeBaseKind, TypeReference, UnionType } from '../types';

export function writeJson(types: TypeBase[]) {
  return JSON.stringify(types, replacer, 0);
}

function replacer(this: any, key: string, value: any) {
  if (value instanceof TypeReference) {
    return value.index;
  }

  if (value instanceof TypeBase) {
    const { type, ...rest } = value;

    return {
      [type]: rest,
    };
  }

  return value;
}