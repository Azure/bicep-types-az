# Microsoft.Edge @ 2025-06-01

## Resource Microsoft.Edge/configTemplates@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigTemplateProperties](#configtemplateproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Edge/configTemplates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/configTemplates/versions@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9]+\.[0-9]+\.[0-9]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigTemplateVersionProperties](#configtemplateversionproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Edge/configTemplates/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/contexts@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 61, pattern: "^[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ContextProperties](#contextproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Edge/contexts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/contexts/siteReferences@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SiteReferenceProperties](#sitereferenceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Edge/contexts/siteReferences' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/contexts/workflows@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **extendedLocation**: [AzureResourceManagerCommonTypesExtendedLocation](#azureresourcemanagercommontypesextendedlocation): The complex type of the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 61, pattern: "^(?!v-)(?!.*-v-)[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowProperties](#workflowproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Edge/contexts/workflows' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/contexts/workflows/versions@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **extendedLocation**: [AzureResourceManagerCommonTypesExtendedLocation](#azureresourcemanagercommontypesextendedlocation): The complex type of the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 61, pattern: "^(?!v-)(?!.*-v-)[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowVersionProperties](#workflowversionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Edge/contexts/workflows/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/contexts/workflows/versions/executions@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **extendedLocation**: [AzureResourceManagerCommonTypesExtendedLocation](#azureresourcemanagercommontypesextendedlocation): The complex type of the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 61, pattern: "^(?!v-)(?!.*-v-)[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ExecutionProperties](#executionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Edge/contexts/workflows/versions/executions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/diagnostics@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **extendedLocation**: [AzureResourceManagerCommonTypesExtendedLocation](#azureresourcemanagercommontypesextendedlocation): The complex type of the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DiagnosticProperties](#diagnosticproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Edge/diagnostics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/jobs@2025-06-01
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^(?=.{3,60}$)[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [JobProperties](#jobproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Edge/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/schemaReferences@2025-06-01
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SchemaReferenceProperties](#schemareferenceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Edge/schemaReferences' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/schemas@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^(?!.*\.\.)[a-zA-Z0-9-][a-zA-Z0-9._-]{1,68}[a-zA-Z0-9-]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SchemaProperties](#schemaproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Edge/schemas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/schemas/dynamicSchemas@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^(?!.*\.\.)[a-zA-Z0-9-][a-zA-Z0-9._-]{1,68}[a-zA-Z0-9-]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DynamicSchemaProperties](#dynamicschemaproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Edge/schemas/dynamicSchemas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/schemas/dynamicSchemas/versions@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9]+\.[0-9]+\.[0-9]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SchemaVersionProperties](#schemaversionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Edge/schemas/dynamicSchemas/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/schemas/versions@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9]+\.[0-9]+\.[0-9]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SchemaVersionProperties](#schemaversionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Edge/schemas/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/solutionTemplates@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 61, pattern: "^(?!v-)(?!.*-v-)[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SolutionTemplateProperties](#solutiontemplateproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Edge/solutionTemplates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/solutionTemplates/versions@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9]+\.[0-9]+\.[0-9]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SolutionTemplateVersionProperties](#solutiontemplateversionproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Edge/solutionTemplates/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/targets@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **extendedLocation**: [AzureResourceManagerCommonTypesExtendedLocation](#azureresourcemanagercommontypesextendedlocation): The complex type of the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 61, pattern: "^[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TargetProperties](#targetproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Edge/targets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/targets/solutions@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **extendedLocation**: [AzureResourceManagerCommonTypesExtendedLocation](#azureresourcemanagercommontypesextendedlocation): The complex type of the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 61, pattern: "^(?!v-)(?!.*-v-)[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SolutionProperties](#solutionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Edge/targets/solutions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/targets/solutions/instances@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **extendedLocation**: [AzureResourceManagerCommonTypesExtendedLocation](#azureresourcemanagercommontypesextendedlocation): The complex type of the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 61, pattern: "^(?!v-)(?!.*-v-)[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [InstanceProperties](#instanceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Edge/targets/solutions/instances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/targets/solutions/instances/histories@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **extendedLocation**: [AzureResourceManagerCommonTypesExtendedLocation](#azureresourcemanagercommontypesextendedlocation) (ReadOnly): The complex type of the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 61, pattern: "^(?!v-)(?!.*-v-)[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [InstanceHistoryProperties](#instancehistoryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Edge/targets/solutions/instances/histories' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/targets/solutions/versions@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **extendedLocation**: [AzureResourceManagerCommonTypesExtendedLocation](#azureresourcemanagercommontypesextendedlocation): The complex type of the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 7, maxLength: 61, pattern: "^(?!v-)(?!.*-v-)[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SolutionVersionProperties](#solutionversionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Edge/targets/solutions/versions' (ReadOnly, DeployTimeConstant): The resource type

## AvailableSolutionTemplateVersion
### Properties
* **isConfigured**: bool (Required): Has this solution template version been configured
* **latestConfigRevision**: string (Required): Latest Configuration Revision
* **solutionTemplateVersion**: string (Required): Solution template Version

## AzureResourceManagerCommonTypesExtendedLocation
### Properties
* **name**: string (Required): The name of the extended location.
* **type**: 'CustomLocation' | 'EdgeZone' | string (Required): The type of the extended location.

## Capability
### Properties
* **description**: string (Required): Description of Capability
* **name**: string (Required): Name of Capability
* **state**: 'active' | 'inactive' | string: State of resource

## ComponentStatus
### Properties
* **name**: string: Component name
* **status**: string: Component status

## ConfigTemplateProperties
### Properties
* **description**: string (Required): Description of config template
* **latestVersion**: string (ReadOnly): Latest config template version
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Initialized' | 'Succeeded' | string (ReadOnly): Provisioning state of resource

## ConfigTemplateVersionProperties
### Properties
* **configurations**: string (Required): Configuration values
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Initialized' | 'Succeeded' | string (ReadOnly): Provisioning state of resource

## ContextProperties
### Properties
* **capabilities**: [Capability](#capability)[] (Required): List of Capabilities
* **hierarchies**: [Hierarchy](#hierarchy)[] (Required): List of Hierarchies
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Initialized' | 'Succeeded' | string (ReadOnly): Provisioning state of resource

## DeploymentStatus
### Properties
* **deployed**: int: Indicates if Instance is deployed
* **expectedRunningJobId**: int: The expected running job id
* **generation**: int: Deployment Generation
* **lastModified**: string: The lastModified of the Status
* **runningJobId**: int: The running job id
* **status**: string: Deployment status
* **statusDetails**: string: Status details
* **targetStatuses**: [TargetStatus](#targetstatus)[]: Target resource statuses

## DiagnosticProperties
### Properties
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Initialized' | 'Succeeded' | string (ReadOnly): The status of the last operation.

## DynamicSchemaProperties
### Properties
* **configurationModel**: 'Application' | 'Common' | string (ReadOnly): Type of configuration model
* **configurationType**: 'Hierarchy' | 'Shared' | string (ReadOnly): Type of configuration
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Initialized' | 'Succeeded' | string (ReadOnly): Provisioning state of resource

## ErrorAction
### Properties
* **maxToleratedFailures**: int {minValue: 0}: Max tolerated failures
* **mode**: 'silentlyContinue' | 'stopOnAnyFailure' | 'stopOnNFailures' | string: Error action mode

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): The additional info.
* **type**: string (ReadOnly): The additional info type.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## ExecutionProperties
### Properties
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Initialized' | 'Succeeded' | string (ReadOnly): Provisioning state of resource
* **specification**: [ExecutionPropertiesSpecification](#executionpropertiesspecification): Execution specification
* **status**: [ExecutionStatus](#executionstatus) (ReadOnly): Status of Execution
* **workflowVersionId**: string (Required): Workflow version of execution

## ExecutionPropertiesSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ExecutionStatus
### Properties
* **stageHistory**: [StageStatus](#stagestatus)[]: target resource statuses
* **status**: int: Deployment status
* **statusMessage**: string: status details
* **updateTime**: string: The lastModified timestamp of the Status

## Hierarchy
### Properties
* **description**: string (Required): Description of Hierarchy
* **name**: string (Required): Name of Hierarchy

## InstallSolutionParameter
### Properties
* **solutionVersionId**: string (Required): Solution Version ARM Id

## InstanceHistoryProperties
### Properties
* **activeState**: 'active' | 'inactive' | string: State of instance
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Initialized' | 'Succeeded' | string (ReadOnly): Provisioning state of resource
* **reconciliationPolicy**: [ReconciliationPolicyProperties](#reconciliationpolicyproperties) (ReadOnly): Reconciliation policy of instance
* **solutionScope**: string (ReadOnly): Scope of instance
* **solutionVersion**: [SolutionVersionSnapshot](#solutionversionsnapshot) (Required, ReadOnly): Solution version of instance
* **status**: [DeploymentStatus](#deploymentstatus) (ReadOnly): Deployment Status of instance
* **target**: [TargetSnapshot](#targetsnapshot) (Required, ReadOnly): Target of instance

## InstanceProperties
### Properties
* **activeState**: 'active' | 'inactive' | string: State of instance
* **deploymentTimestampEpoch**: int (ReadOnly): Deployment timestamp of instance
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Initialized' | 'Succeeded' | string (ReadOnly): Provisioning state of resource
* **reconciliationPolicy**: [ReconciliationPolicyProperties](#reconciliationpolicyproperties): Reconciliation policy of instance
* **solutionScope**: string {pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"}: Scope of instance
* **solutionVersionId**: string (Required): Solution version of instance
* **status**: [DeploymentStatus](#deploymentstatus) (ReadOnly): Status of instance
* **targetId**: string (Required): Target of instance

## JobParameterBase
* **Discriminator**: jobType

### Base Properties

### DeployJobParameter
#### Properties
* **jobType**: 'deploy' (Required): Job type discriminator value
* **parameter**: [InstallSolutionParameter](#installsolutionparameter): Install Solution Parameter


## JobProperties
### Properties
* **correlationId**: string: Correlation ID for tracking.
* **endTime**: string: End time of the job (ISO8601).
* **errorDetails**: [ErrorDetail](#errordetail) (ReadOnly): Error Details if any failure is there
* **jobParameter**: [JobParameterBase](#jobparameterbase): Parameters for the job.
* **jobType**: 'deploy' | 'externalValidation' | 'staging' | string (Required): The type of job.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Initialized' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **startTime**: string: Start time of the job (ISO8601).
* **status**: 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' | string (Required, ReadOnly): Status of the job.
* **steps**: [JobStep](#jobstep)[]: Steps and substatuses for the job.
* **triggeredBy**: string: The OID or identity that triggered the job.

## JobStep
### Properties
* **endTime**: string: End time of the step (ISO8601)
* **errorDetails**: [ErrorDetail](#errordetail) (ReadOnly): Error Details if any failure is there
* **message**: string: Message for the step
* **name**: string (Required): Name of the step
* **startTime**: string: Start time of the step (ISO8601)
* **statistics**: [JobStepStatisticsBase](#jobstepstatisticsbase): Statistics for the step
* **status**: 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' | string (Required, ReadOnly): Status of the step
* **steps**: [JobStep](#jobstep)[]: Nested substeps for this step

## JobStepStatisticsBase
* **Discriminator**: statisticsType

### Base Properties

### DeployJobStepStatistics
#### Properties
* **failedCount**: int: Count of failed items in this step
* **statisticsType**: 'deploy' (Required): Statistics type discriminator value
* **successCount**: int: Count of successful items in this step
* **totalCount**: int: Total count of items processed in this step


## ReconciliationPolicyProperties
### Properties
* **interval**: string (Required): Policy interval
* **state**: 'active' | 'inactive' | string (Required): The state of the ReconciliationPolicy

## SchemaProperties
### Properties
* **currentVersion**: string (ReadOnly): Current Version of schema
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Initialized' | 'Succeeded' | string (ReadOnly): Provisioning state of resource

## SchemaReferenceProperties
### Properties
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Initialized' | 'Succeeded' | string (ReadOnly): Provisioning state of resource
* **schemaId**: string (Required): Schema Id of schema reference

## SchemaVersionProperties
### Properties
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Initialized' | 'Succeeded' | string (ReadOnly): Provisioning state of resource
* **value**: string (Required): Value of schema version

## SiteReferenceProperties
### Properties
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Initialized' | 'Succeeded' | string (ReadOnly): Provisioning State
* **siteId**: string (Required): Azure Resource ID for Site

## SolutionDependency
### Properties
* **dependencies**: [SolutionDependency](#solutiondependency)[]: Solution dependencies
* **solutionInstanceName**: string {maxLength: 24, pattern: "^(?!v-)(?!.*-v-)[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?)*$"}: Solution Instance Name
* **solutionTemplateVersionId**: string (Required): Solution Template Version Id
* **solutionVersionId**: string (Required): Solution Version Id
* **targetId**: string (Required): Target Id

## SolutionProperties
### Properties
* **availableSolutionTemplateVersions**: [AvailableSolutionTemplateVersion](#availablesolutiontemplateversion)[] (ReadOnly): List of latest revisions for available solution template versions
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Initialized' | 'Succeeded' | string (ReadOnly): Provisioning state of resource
* **solutionTemplateId**: string (ReadOnly): Solution template Id

## SolutionTemplateProperties
### Properties
* **capabilities**: string[] (Required): List of capabilities
* **description**: string (Required): Description of Solution template
* **enableExternalValidation**: bool: Flag to enable external validation
* **latestVersion**: string (ReadOnly): Latest solution template version
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Initialized' | 'Succeeded' | string (ReadOnly): Provisioning state of resource
* **state**: 'active' | 'inactive' | string: State of resource

## SolutionTemplateVersionProperties
### Properties
* **configurations**: string (Required): Config expressions for this solution version
* **orchestratorType**: 'TO' | string: Orchestrator type
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Initialized' | 'Succeeded' | string (ReadOnly): Provisioning state of resource
* **specification**: [SolutionTemplateVersionPropertiesSpecification](#solutiontemplateversionpropertiesspecification) (Required): App components spec

## SolutionTemplateVersionPropertiesSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: any

## SolutionVersionProperties
### Properties
* **actionType**: 'deploy' | 'externalValidation' | 'staging' | string (ReadOnly): The type of the latest action performed on this solution version.
* **configuration**: string (ReadOnly): Resolved configuration values
* **errorDetails**: [ErrorDetail](#errordetail) (ReadOnly): Error Details if any failure is there
* **externalValidationId**: string (ReadOnly): External validation id
* **latestActionTrackingUri**: string (ReadOnly): The URI for tracking the latest action performed on this solution version.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Initialized' | 'Succeeded' | string (ReadOnly): Provisioning state of resource
* **reviewId**: string (ReadOnly): Review id of resolved config for this solution version
* **revision**: int (ReadOnly): Revision number of resolved config for this solution version
* **solutionDependencies**: [SolutionDependency](#solutiondependency)[] (ReadOnly): Solution Dependency Context
* **solutionInstanceName**: string {pattern: "^(?!v-)(?!.*-v-)[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?)*$"} (ReadOnly): Solution instance name
* **solutionTemplateVersionId**: string (ReadOnly): Solution Template Version Id
* **specification**: [SolutionVersionPropertiesSpecification](#solutionversionpropertiesspecification) (Required): App components spec
* **state**: 'Deployed' | 'Deploying' | 'ExternalValidationFailed' | 'Failed' | 'InReview' | 'PendingExternalValidation' | 'ReadyToDeploy' | 'ReadyToUpgrade' | 'Staging' | 'Undeployed' | 'UpgradeInReview' | string (ReadOnly): State of solution instance
* **targetDisplayName**: string (ReadOnly): Name of applicable target's display name
* **targetLevelConfiguration**: string (ReadOnly): Configuration on the line level across all solution template versions

## SolutionVersionPropertiesSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: any

## SolutionVersionSnapshot
### Properties
* **solutionVersionId**: string: Solution version of instance
* **specification**: [SolutionVersionSnapshotSpecification](#solutionversionsnapshotspecification): App components spec

## SolutionVersionSnapshotSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: any

## StageSpec
### Properties
* **name**: string (Required): Name of Stage
* **specification**: [StageSpecSpecification](#stagespecspecification): Stage specification
* **taskOption**: [TaskOption](#taskoption): Task option for the stage
* **tasks**: [TaskSpec](#taskspec)[]: List of tasks in the stage

## StageSpecSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: any

## StageStatus
### Properties
* **errorMessage**: string: Error message
* **inputs**: [StageStatusInputs](#stagestatusinputs): The inputs of the StageHistory, Inputs holds a key-value map of user-defined parameters for the initial stage
* **isActive**: 'active' | 'inactive' | string: whether this stage is active or inactive
* **nextstage**: string: Next stage
* **outputs**: [StageStatusOutputs](#stagestatusoutputs): The outputs of the StageHistory, it is different as the different input stages.
* **stage**: string: Current stage
* **status**: int: Deployment status
* **statusMessage**: string: Status message

## StageStatusInputs
### Properties
### Additional Properties
* **Additional Properties Type**: any

## StageStatusOutputs
### Properties
### Additional Properties
* **Additional Properties Type**: any

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TargetProperties
### Properties
* **capabilities**: string[] (Required): List of capabilities
* **contextId**: string (Required): ArmId of Context
* **description**: string (Required): Description of target
* **displayName**: string (Required): Display name of target
* **hierarchyLevel**: string (Required): Hierarchy Level
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Initialized' | 'Succeeded' | string (ReadOnly): Provisioning state of resource
* **solutionScope**: string {pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"}: Scope of the target resource
* **state**: 'active' | 'inactive' | string: State of resource
* **status**: [DeploymentStatus](#deploymentstatus) (ReadOnly): Status of target
* **targetSpecification**: [TargetPropertiesTargetSpecification](#targetpropertiestargetspecification) (Required): target spec

## TargetPropertiesTargetSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: any

## TargetSnapshot
### Properties
* **solutionScope**: string: Scope of the target resource
* **targetId**: string: Target of instance
* **targetSpecification**: [TargetSnapshotTargetSpecification](#targetsnapshottargetspecification): target spec

## TargetSnapshotTargetSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: any

## TargetStatus
### Properties
* **componentStatuses**: [ComponentStatus](#componentstatus)[]: Component statuses
* **name**: string: Target name
* **status**: string: Target status

## TaskOption
### Properties
* **concurrency**: int {minValue: 1, maxValue: 8}: Parallel worker numbers of the tasks
* **errorAction**: [ErrorAction](#erroraction): Error action for the tasks

## TaskSpec
### Properties
* **name**: string (Required): Name of Task
* **specification**: [TaskSpecSpecification](#taskspecspecification) (Required): Task specification
* **targetId**: string: Target ARM id

## TaskSpecSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: any

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkflowProperties
### Properties
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Initialized' | 'Succeeded' | string (ReadOnly): Provisioning state of resource
* **workflowTemplateId**: string (ReadOnly): Workflow template Id

## WorkflowVersionProperties
### Properties
* **configuration**: string (ReadOnly): Resolved configuration values
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Initialized' | 'Succeeded' | string (ReadOnly): Provisioning state of resource
* **reviewId**: string (ReadOnly): Review id of resolved config for this workflow version
* **revision**: int (ReadOnly): Revision number of resolved config for this workflow version
* **specification**: [WorkflowVersionPropertiesSpecification](#workflowversionpropertiesspecification): Execution specification
* **stageSpec**: [StageSpec](#stagespec)[] (Required): A list of stage specs
* **state**: 'Deployed' | 'Deploying' | 'ExternalValidationFailed' | 'Failed' | 'InReview' | 'PendingExternalValidation' | 'ReadyToDeploy' | 'ReadyToUpgrade' | 'Staging' | 'Undeployed' | 'UpgradeInReview' | string (ReadOnly): State of workflow version

## WorkflowVersionPropertiesSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: any

