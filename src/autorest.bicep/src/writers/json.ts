import { TypeBase, TypeReference } from '../types';

export function writeJson(types: TypeBase[]) {
  return JSON.stringify(types, replacer, 0);
}

function replacer(this: any, key: string, value: any) {
  if (value instanceof TypeReference) {
    return value.Index;
  }

  if (value instanceof TypeBase) {
    const { Type, ...rest } = value;

    return {
      [Type]: rest,
    };
  }

  return value;
}