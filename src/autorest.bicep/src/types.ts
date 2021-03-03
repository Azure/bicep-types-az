import { Dictionary } from "lodash";

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

export enum ScopeType {
  Unknown = 0,
  Tenant = 1 << 0,
  ManagementGroup = 1 << 1,
  Subscription = 1 << 2,
  ResourceGroup = 1 << 3,
  Extension = 1 << 4,
}

export enum ObjectPropertyFlags {
  None = 0,
  Required = 1 << 0,
  ReadOnly = 1 << 1,
  WriteOnly = 1 << 2,
  DeployTimeConstant = 1 << 3,
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