import { Dictionary, keys } from "lodash";

export enum BuiltInTypeKind {
  Any = 1,
  Null = 2,
  Bool = 3,
  Int = 4,
  String = 5,
  Object = 6,
  Array = 7,
  ResourceRef = 8,
}

const BuiltInTypeKindLabel = new Map<BuiltInTypeKind, string>([
  [BuiltInTypeKind.Any, 'Any'],
  [BuiltInTypeKind.Null, 'Null'],
  [BuiltInTypeKind.Bool, 'Bool'],
  [BuiltInTypeKind.Int, 'Int'],
  [BuiltInTypeKind.String, 'String'],
  [BuiltInTypeKind.Object, 'Object'],
  [BuiltInTypeKind.Array, 'Array'],
  [BuiltInTypeKind.ResourceRef, 'ResourceRef'],
]);

export function getBuiltInTypeKindLabel(input: BuiltInTypeKind) {
  return BuiltInTypeKindLabel.get(input) ?? '';
}

export enum ScopeType {
  Unknown = 0,
  Tenant = 1 << 0,
  ManagementGroup = 1 << 1,
  Subscription = 1 << 2,
  ResourceGroup = 1 << 3,
  Extension = 1 << 4,
}

const ScopeTypeLabel = new Map<ScopeType, string>([
  [ScopeType.Tenant, 'Tenant'],
  [ScopeType.ManagementGroup, 'ManagementGroup'],
  [ScopeType.Subscription, 'Subscription'],
  [ScopeType.ResourceGroup, 'ResourceGroup'],
  [ScopeType.Extension, 'Extension'],
]);

export function getScopeTypeLabels(input: ScopeType) {
  const types = [];
  for (const [key, value] of ScopeTypeLabel) {
    if ((key & input) === key) {
      types.push(value);
    }
  }

  return types
}

export enum ObjectPropertyFlags {
  None = 0,
  Required = 1 << 0,
  ReadOnly = 1 << 1,
  WriteOnly = 1 << 2,
  DeployTimeConstant = 1 << 3,
}

const ObjectPropertyFlagsLabel = new Map<ObjectPropertyFlags, string>([
  [ObjectPropertyFlags.Required, 'Required'],
  [ObjectPropertyFlags.ReadOnly, 'ReadOnly'],
  [ObjectPropertyFlags.WriteOnly, 'WriteOnly'],
  [ObjectPropertyFlags.DeployTimeConstant, 'DeployTimeConstant'],
]);

export function getObjectPropertyFlagsLabels(input: ObjectPropertyFlags) {
  const types = [];
  for (const [key, value] of ObjectPropertyFlagsLabel) {
    if ((key & input) === key) {
      types.push(value);
    }
  }

  return types;
}

export enum TypeBaseKind {
  BuiltInType = 1,
  ObjectType = 2,
  ArrayType = 3,
  ResourceType = 4,
  UnionType = 5,
  StringLiteralType = 6,
  DiscriminatedObjectType = 7,
}

const TypeBaseKindLabel = new Map<TypeBaseKind, string>([
  [TypeBaseKind.BuiltInType, 'BuiltInType'],
  [TypeBaseKind.ObjectType, 'ObjectType'],
  [TypeBaseKind.ArrayType, 'ArrayType'],
  [TypeBaseKind.ResourceType, 'ResourceType'],
  [TypeBaseKind.UnionType, 'UnionType'],
  [TypeBaseKind.StringLiteralType, 'StringLiteralType'],
  [TypeBaseKind.DiscriminatedObjectType, 'DiscriminatedObjectType'],
]);

export function getTypeBaseKindLabel(input: TypeBaseKind) {
  return TypeBaseKindLabel.get(input) ?? '';
}

export abstract class TypeBase {
  constructor(type: TypeBaseKind) {
    this.type = type;
  }
  readonly type: TypeBaseKind;
}

export class TypeReference {
  constructor(index: number) {
    this.index = index;
  }
  readonly index: number;

  toJson = () => (this.index);
}

export class BuiltInType extends TypeBase {
  constructor(kind: BuiltInTypeKind) {
    super(TypeBaseKind.BuiltInType);
    this.kind = kind;
  }
  readonly kind: BuiltInTypeKind;
}

export class UnionType extends TypeBase {
  constructor(elements: TypeReference[]) {
    super(TypeBaseKind.UnionType);
    this.elements = elements;
  }
  readonly elements: TypeReference[];
}

export class StringLiteralType extends TypeBase {
  constructor(value: string) {
    super(TypeBaseKind.StringLiteralType);
    this.value = value;
  }
  readonly value: string;
}

export class ResourceType extends TypeBase {
  constructor(name: string, scopeType: ScopeType, body: TypeReference) {
    super(TypeBaseKind.ResourceType);
    this.name = name;
    this.scopeType = scopeType;
    this.body = body;
  }
  readonly name: string;
  readonly scopeType: ScopeType;
  readonly body: TypeReference;
}

export class ObjectType extends TypeBase {
  constructor(name: string, properties: Dictionary<ObjectProperty>, additionalProperties?: TypeReference) {
    super(TypeBaseKind.ObjectType);
    this.name = name;
    this.properties = properties;
    this.additionalProperties = additionalProperties;
  }
  readonly name: string;
  readonly properties: Dictionary<ObjectProperty>;
  readonly additionalProperties?: TypeReference;
}

export class DiscriminatedObjectType extends TypeBase {
  constructor(name: string, discriminator: string, baseProperties: Dictionary<ObjectProperty>, elements: Dictionary<TypeReference>) {
    super(TypeBaseKind.DiscriminatedObjectType);
    this.name = name;
    this.discriminator = discriminator;
    this.baseProperties = baseProperties;
    this.elements = elements;
  }
  readonly name: string;
  readonly discriminator: string;
  readonly baseProperties: Dictionary<ObjectProperty>;
  readonly elements: Dictionary<TypeReference>;
}

export class ArrayType extends TypeBase {
  constructor(itemType: TypeReference) {
    super(TypeBaseKind.ArrayType);
    this.itemType = itemType;
  }
  readonly itemType: TypeReference;
}

export class ObjectProperty {
  constructor(type: TypeReference, flags: ObjectPropertyFlags) {
    this.type = type;
    this.flags = flags;
  }
  readonly type: TypeReference;
  readonly flags: ObjectPropertyFlags;
}

export class TypeFactory {
  readonly types: TypeBase[];
  readonly builtInTypes: Record<BuiltInTypeKind, TypeReference>;
  readonly namedDefinitions: Dictionary<TypeReference> = {};

  constructor() {
    this.types = [];
    this.builtInTypes = {
      [BuiltInTypeKind.Any]: this.addType(new BuiltInType(BuiltInTypeKind.Any)),
      [BuiltInTypeKind.Null]: this.addType(new BuiltInType(BuiltInTypeKind.Null)),
      [BuiltInTypeKind.Bool]: this.addType(new BuiltInType(BuiltInTypeKind.Bool)),
      [BuiltInTypeKind.Int]: this.addType(new BuiltInType(BuiltInTypeKind.Int)),
      [BuiltInTypeKind.String]: this.addType(new BuiltInType(BuiltInTypeKind.String)),
      [BuiltInTypeKind.Object]: this.addType(new BuiltInType(BuiltInTypeKind.Object)),
      [BuiltInTypeKind.Array]: this.addType(new BuiltInType(BuiltInTypeKind.Array)),
      [BuiltInTypeKind.ResourceRef]: this.addType(new BuiltInType(BuiltInTypeKind.ResourceRef)),
    };
  }

  public addType<TType extends TypeBase>(type: TType): TypeReference {
    const index = this.types.length;
    this.types[index] = type;

    return new TypeReference(index);
  }

  public lookupType<TType extends TypeBase>(reference: TypeReference): TType {
    return this.types[reference.index] as TType;
  }

  public lookupBuiltInType(kind: BuiltInTypeKind): TypeReference {
    return this.builtInTypes[kind];
  }
}