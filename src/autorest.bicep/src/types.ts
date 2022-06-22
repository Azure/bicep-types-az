// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
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

export function getScopeTypeLabels(input: ScopeType, ...scopeLabels: [ScopeType|undefined, string][]) {
  const types = [];
  for (const [key, value] of ScopeTypeLabel) {
    if ((key & input) === key) {
      const labels = [];
      for (const [labeledScopes, label] of scopeLabels) {
        if (labeledScopes !== undefined && (key & labeledScopes) === key) {
          labels.push(label);
        }
      }
      types.push(`${value}${labels.length > 0 ? ` (${labels.join(', ')})` : ''}`);
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
  ResourceFunctionType = 8,
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

export enum ResourceFlags {
  None = 0,
  ReadOnly = 1 << 0,
}

const ResourceFlagsLabels = new Map<ResourceFlags, string>([
  [ResourceFlags.ReadOnly, 'ReadOnly'],
]);

export function getResourceFlagsLabels(input: ResourceFlags) {
  const flags = [];
  for (const [bitmask, label] of ResourceFlagsLabels) {
    if ((bitmask & input) === bitmask) {
      flags.push(label);
    }
  }

  return flags;
}

export abstract class TypeBase {
  constructor(type: TypeBaseKind) {
    this.Type = type;
  }
  readonly Type: TypeBaseKind;
}

export class TypeReference {
  constructor(index: number) {
    this.Index = index;
  }
  readonly Index: number;
}

export class BuiltInType extends TypeBase {
  constructor(kind: BuiltInTypeKind) {
    super(TypeBaseKind.BuiltInType);
    this.Kind = kind;
  }
  readonly Kind: BuiltInTypeKind;
}

export class UnionType extends TypeBase {
  constructor(elements: TypeReference[]) {
    super(TypeBaseKind.UnionType);
    this.Elements = elements;
  }
  readonly Elements: TypeReference[];
}

export class StringLiteralType extends TypeBase {
  constructor(value: string) {
    super(TypeBaseKind.StringLiteralType);
    this.Value = value;
  }
  readonly Value: string;
}

export class ResourceType extends TypeBase {
  constructor(name: string, scopeType: ScopeType, readOnlyScopes: ScopeType|undefined, body: TypeReference, flags: ResourceFlags) {
    super(TypeBaseKind.ResourceType);
    this.Name = name;
    this.ScopeType = scopeType;
    this.ReadOnlyScopes = readOnlyScopes;
    this.Body = body;
    this.Flags = flags;
  }
  readonly Name: string;
  readonly ScopeType: ScopeType;
  readonly ReadOnlyScopes?: ScopeType;
  readonly Body: TypeReference;
  readonly Flags: ResourceFlags;
}

export class ResourceFunctionType extends TypeBase {
  constructor(name: string, resourceType: string, apiVersion: string, output: TypeReference, input?: TypeReference) {
    super(TypeBaseKind.ResourceFunctionType);
    this.Name = name;
    this.ResourceType = resourceType;
    this.ApiVersion = apiVersion;
    this.Output = output;
    this.Input = input;
  }
  readonly Name: string;
  readonly ResourceType: string;
  readonly ApiVersion: string;
  readonly Output: TypeReference;
  readonly Input?: TypeReference;
}

export class ObjectType extends TypeBase {
  constructor(name: string, properties: Dictionary<ObjectProperty>, additionalProperties?: TypeReference) {
    super(TypeBaseKind.ObjectType);
    this.Name = name;
    this.Properties = properties;
    this.AdditionalProperties = additionalProperties;
  }
  readonly Name: string;
  readonly Properties: Dictionary<ObjectProperty>;
  readonly AdditionalProperties?: TypeReference;
}

export class DiscriminatedObjectType extends TypeBase {
  constructor(name: string, discriminator: string, baseProperties: Dictionary<ObjectProperty>, elements: Dictionary<TypeReference>) {
    super(TypeBaseKind.DiscriminatedObjectType);
    this.Name = name;
    this.Discriminator = discriminator;
    this.BaseProperties = baseProperties;
    this.Elements = elements;
  }
  readonly Name: string;
  readonly Discriminator: string;
  readonly BaseProperties: Dictionary<ObjectProperty>;
  readonly Elements: Dictionary<TypeReference>;
}

export class ArrayType extends TypeBase {
  constructor(itemType: TypeReference) {
    super(TypeBaseKind.ArrayType);
    this.ItemType = itemType;
  }
  readonly ItemType: TypeReference;
}

export class ObjectProperty {
  constructor(type: TypeReference, flags: ObjectPropertyFlags, description?: string) {
    this.Type = type;
    this.Flags = flags;
    this.Description = description;
  }
  readonly Type: TypeReference;
  readonly Flags: ObjectPropertyFlags;
  readonly Description?: string;
}

export class TypeFactory {
  readonly types: TypeBase[];
  readonly builtInTypes: Record<BuiltInTypeKind, TypeReference>;

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
    return this.types[reference.Index] as TType;
  }

  public lookupBuiltInType(kind: BuiltInTypeKind): TypeReference {
    return this.builtInTypes[kind];
  }
}
