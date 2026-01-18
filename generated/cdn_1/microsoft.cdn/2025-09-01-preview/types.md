# Microsoft.Cdn @ 2025-09-01-preview

## Resource Microsoft.Cdn/edgeActions@2025-09-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 50, pattern: "[a-zA-Z0-9]+"} (Required, DeployTimeConstant): The resource name
* **properties**: [EdgeActionProperties](#edgeactionproperties): The resource-specific properties for this resource.
* **sku**: [SkuType](#skutype) (Required): The sku type of the edge action
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Cdn/edgeActions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/edgeActions/executionFilters@2025-09-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 50, pattern: "[a-zA-Z0-9]+"} (Required, DeployTimeConstant): The resource name
* **properties**: [EdgeActionExecutionFilterProperties](#edgeactionexecutionfilterproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Cdn/edgeActions/executionFilters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/edgeActions/versions@2025-09-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 50, pattern: "[a-zA-Z0-9]+"} (Required, DeployTimeConstant): The resource name
* **properties**: [EdgeActionVersionProperties](#edgeactionversionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Cdn/edgeActions/versions' (ReadOnly, DeployTimeConstant): The resource type

## EdgeActionAttachment
### Properties
* **attachedResourceId**: string (Required): The attached resource Id
* **id**: string (Required, ReadOnly): The edge action attachment id

## EdgeActionExecutionFilterProperties
### Properties
* **executionFilterIdentifierHeaderName**: string (Required): Custom Header Key associated with the execution filter
* **executionFilterIdentifierHeaderValue**: string (Required): Custom Header Value associated with the execution filter
* **lastUpdateTime**: string (Required, ReadOnly): The last update time in UTC for the execution filter
* **provisioningState**: 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Upgrading' | string (ReadOnly): The provisioning state
* **versionId**: string (Required): The referenced versionId of the edgeaction version

## EdgeActionProperties
### Properties
* **attachments**: [EdgeActionAttachment](#edgeactionattachment)[] (Required, ReadOnly): A list of attachments for the edge action
* **provisioningState**: 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Upgrading' | string (ReadOnly): The provisioning state of the edge action

## EdgeActionVersionProperties
### Properties
* **deploymentType**: 'file' | 'others' | 'zip' | string (Required): The deployment type
* **isDefaultVersion**: 'False' | 'True' | string (Required): The active state
* **lastPackageUpdateTime**: string (Required, ReadOnly): The last update time in UTC for package update
* **provisioningState**: 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Upgrading' | string (ReadOnly): The provisioning state
* **validationStatus**: 'Failed' | 'Succeeded' | string (Required, ReadOnly): The validation status

## SkuType
### Properties
* **name**: string (Required): The name of the SKU
* **tier**: string (Required): The tier of the SKU

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

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

