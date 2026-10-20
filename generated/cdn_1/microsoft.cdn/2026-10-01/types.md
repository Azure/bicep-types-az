# Microsoft.Cdn @ 2026-10-01

## Resource Microsoft.Cdn/edgeActions@2026-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 50, pattern: "[a-zA-Z0-9]+"} (Required, DeployTimeConstant): The resource name
* **properties**: [EdgeActionProperties](#edgeactionproperties): The resource-specific properties for this resource.
* **sku**: [SkuType](#skutype) (Required): The sku type of the edge action
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Cdn/edgeActions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/edgeActions/executionFilters@2026-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 50, pattern: "[a-zA-Z0-9]+"} (Required, DeployTimeConstant): The resource name
* **properties**: [EdgeActionExecutionFilterProperties](#edgeactionexecutionfilterproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Cdn/edgeActions/executionFilters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/edgeActions/versions@2026-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 50, pattern: "[a-zA-Z0-9]+"} (Required, DeployTimeConstant): The resource name
* **properties**: [EdgeActionVersionProperties](#edgeactionversionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Cdn/edgeActions/versions' (ReadOnly, DeployTimeConstant): The resource type

## Function deployVersionCode (Microsoft.Cdn/edgeActions/versions@2026-10-01)
* **Resource**: Microsoft.Cdn/edgeActions/versions
* **ApiVersion**: 2026-10-01
* **Input**: [VersionCode](#versioncode)
* **Output**: [EdgeActionVersion](#edgeactionversion)

## Function getVersionCode (Microsoft.Cdn/edgeActions/versions@2026-10-01)
* **Resource**: Microsoft.Cdn/edgeActions/versions
* **ApiVersion**: 2026-10-01
* **Output**: [VersionCode](#versioncode)

## Function swapDefault (Microsoft.Cdn/edgeActions/versions@2026-10-01)
* **Resource**: Microsoft.Cdn/edgeActions/versions
* **ApiVersion**: 2026-10-01
* **Output**: any

## EdgeActionAttachment
### Properties
* **attachedResourceId**: string (Required): The attached resource Id
* **id**: string (ReadOnly): The edge action attachment id

## EdgeActionExecutionFilterProperties
### Properties
* **executionFilterIdentifierHeaderName**: string (Required): Custom Header Key associated with the execution filter
* **executionFilterIdentifierHeaderValue**: string (Required): Custom Header Value associated with the execution filter
* **lastUpdateTime**: string (ReadOnly): The last update time in UTC for the execution filter
* **provisioningState**: 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Upgrading' | string (ReadOnly): The provisioning state
* **versionId**: string (Required): The referenced versionId of the edgeaction version

## EdgeActionProperties
### Properties
* **attachments**: [EdgeActionAttachment](#edgeactionattachment)[] (Required, ReadOnly): A list of attachments for the edge action
* **provisioningState**: 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Upgrading' | string (ReadOnly): The provisioning state of the edge action

## EdgeActionVersion
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (ReadOnly): The name of the resource
* **properties**: [EdgeActionVersionProperties](#edgeactionversionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## EdgeActionVersionProperties
### Properties
* **deploymentType**: 'file' | 'others' | 'zip' | string (Required): The deployment type for the Edge Action version. Set this value when creating the version. When updating an existing version, any supplied value must match the existing value.
* **isDefaultVersion**: 'False' | 'True' | string (Required): Indicates whether this is the default version. When creating a version, if the Edge Action has no default version, the service makes the new version the default even when false is supplied. If another default version exists, supplying true is rejected. When updating an existing version, any supplied value must match the existing value. Use swapDefault to change the default version.
* **lastPackageUpdateTime**: string (ReadOnly): The last update time in UTC for package update
* **provisioningState**: 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Upgrading' | string (ReadOnly): The provisioning state
* **validationStatus**: 'Failed' | 'Succeeded' | string (ReadOnly): The validation status

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VersionCode
### Properties
* **content**: string (Required): The version code deployment content
* **name**: string (Required): The version code name

