// this enum should be kept in-sync with src/Bicep.Types/Serialization/TypeBaseConverter.cs
export enum TypeBaseKind {
  BuiltInType = 1,
  ObjectType = 2,
  ArrayType = 3,
  ResourceType = 4,
  UnionType = 5,
  StringLiteralType = 6,
  DiscriminatedObj = 7,
  ResourceFunctionType = 8,
}