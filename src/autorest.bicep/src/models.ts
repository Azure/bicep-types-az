import { HttpRequest, ObjectSchema, Parameter } from "@autorest/codemodel";

export enum ScopeType {
  Unknown = 0,
  Tenant = 1 << 0,
  ManagementGroup = 1 << 1,
  Subscription = 1 << 2,
  ResourceGroup = 1 << 3,
  Extension = 1 << 4,
}

export interface ResourceDescriptor {
  scopeType: ScopeType;
  namespace: string;
  typeSegments: string[];
  apiVersion: string;
  constantName?: string;
}

export interface ProviderDefinition {
  namespace: string;
  apiVersion: string;
  resources: ResourceDefinition[];
}

export interface ResourceDefinition {
  descriptor: ResourceDescriptor;
  putRequest: HttpRequest;
  putParameters: Parameter[];
  putSchema?: ObjectSchema;
  getSchema?: ObjectSchema;
}