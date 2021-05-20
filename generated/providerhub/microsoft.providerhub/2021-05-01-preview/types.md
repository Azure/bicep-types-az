# Microsoft.ProviderHub @ 2021-05-01-preview

## Resource Microsoft.ProviderHub/providerRegistrations@2021-05-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:1_canary](#schemas1canary)
* **type**: 'Microsoft.ProviderHub/providerRegistrations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/customRollouts@2021-05-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:7_properties](#schemas7properties) (Required): Properties of the rollout.
* **type**: 'Microsoft.ProviderHub/providerRegistrations/customRollouts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/defaultRollouts@2021-05-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:7_properties](#schemas7properties): Properties of the rollout.
* **type**: 'Microsoft.ProviderHub/providerRegistrations/defaultRollouts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/notificationRegistrations@2021-05-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:1_canary](#schemas1canary)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/notificationRegistrations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/operations@2021-05-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **contents**: [OperationsDefinition](#operationsdefinition)[] (Required, WriteOnly)
* **error**: [schemas:10_error](#schemas10error) (ReadOnly): Standard error object.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.ProviderHub/providerRegistrations/operations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations@2021-05-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:1_canary](#schemas1canary)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus@2021-05-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:1_canary](#schemas1canary) (ReadOnly)
* **skuSettings**: [SkuSetting](#skusetting)[] (Required, WriteOnly)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus@2021-05-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:1_canary](#schemas1canary) (ReadOnly)
* **skuSettings**: [SkuSetting](#skusetting)[] (Required, WriteOnly)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus@2021-05-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:1_canary](#schemas1canary) (ReadOnly)
* **skuSettings**: [SkuSetting](#skusetting)[] (Required, WriteOnly)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/skus@2021-05-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:1_canary](#schemas1canary) (ReadOnly)
* **skuSettings**: [SkuSetting](#skusetting)[] (Required, WriteOnly)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant): The resource type

## schemas:1_canary
### Properties
* **regions**: string[]

## schemas:7_properties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'Succeeded' | 'TransientFailure'
* **specification**: [schemas:1_canary](#schemas1canary) (Required)
* **status**: [schemas:1_canary](#schemas1canary)

## OperationsDefinition
### Properties
* **actionType**: 'Internal' | 'NotSpecified' (WriteOnly)
* **display**: [schemas:50_display](#schemas50display) (Required, WriteOnly): Display information of the operation.
* **isDataAction**: bool (WriteOnly): Indicates whether the operation applies to data-plane.
* **name**: string (Required, WriteOnly): Name of the operation.
* **origin**: 'NotSpecified' | 'System' | 'User' (WriteOnly)
* **properties**: any (WriteOnly)

## schemas:50_display
### Properties
* **description**: string (Required, WriteOnly)
* **operation**: string (Required, WriteOnly)
* **provider**: string (Required, WriteOnly)
* **resource**: string (Required, WriteOnly)

## schemas:10_error
### Properties
* **code**: string (ReadOnly): Server-defined set of error codes.
* **details**: [Error](#error)[] (ReadOnly): Array of details about specific errors that led to this reported error.
* **innerError**: [schemas:9_innerError](#schemas9innererror) (ReadOnly): Object containing more specific information than  the current object about the error.
* **message**: string (ReadOnly): Human-readable representation of the error.
* **target**: string (ReadOnly): Target of the error.

## Error
### Properties
* **code**: string (ReadOnly): Server-defined set of error codes.
* **details**: [Error](#error)[] (ReadOnly): Array of details about specific errors that led to this reported error.
* **innerError**: [schemas:9_innerError](#schemas9innererror) (ReadOnly): Object containing more specific information than  the current object about the error.
* **message**: string (ReadOnly): Human-readable representation of the error.
* **target**: string (ReadOnly): Target of the error.

## schemas:9_innerError
### Properties
* **code**: string (ReadOnly): Specific error code than was provided by the containing error.
* **innerError**: any (ReadOnly): Object containing more specific information than the current object about the error.
### Additional Properties
* **Additional Properties Type**: any

## SkuSetting
### Properties
* **capabilities**: [SkuCapability](#skucapability)[] (WriteOnly)
* **capacity**: [schemas:1_canary](#schemas1canary) (WriteOnly)
* **costs**: [SkuCost](#skucost)[] (WriteOnly)
* **family**: string (WriteOnly)
* **kind**: string (WriteOnly)
* **locationInfo**: [SkuLocationInfo](#skulocationinfo)[] (WriteOnly)
* **locations**: string[] (WriteOnly)
* **name**: string (Required, WriteOnly)
* **requiredFeatures**: string[] (WriteOnly)
* **requiredQuotaIds**: string[] (WriteOnly)
* **size**: string (WriteOnly)
* **tier**: string (WriteOnly)

## SkuCapability
### Properties
* **name**: string (Required, WriteOnly)
* **value**: string (Required, WriteOnly)

## SkuCost
### Properties
* **extendedUnit**: string (WriteOnly)
* **meterId**: string (Required, WriteOnly)
* **quantity**: int (WriteOnly)

## SkuLocationInfo
### Properties
* **extendedLocations**: string[] (WriteOnly)
* **location**: string (Required, WriteOnly)
* **type**: 'ArcZone' | 'EdgeZone' | 'NotSpecified' (WriteOnly)
* **zoneDetails**: [SkuZoneDetail](#skuzonedetail)[] (WriteOnly)
* **zones**: string[] (WriteOnly)

## SkuZoneDetail
### Properties
* **capabilities**: [SkuCapability](#skucapability)[] (WriteOnly)
* **name**: string[] (WriteOnly)

