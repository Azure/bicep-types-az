# Microsoft.ProviderHub @ 2020-11-20

## Resource Microsoft.ProviderHub/providerRegistrations@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:1_canary](#schemas1canary)
* **type**: 'Microsoft.ProviderHub/providerRegistrations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/customRollouts@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:7_properties](#schemas7properties) (Required)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/customRollouts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/defaultRollouts@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:7_properties](#schemas7properties)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/defaultRollouts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/notificationRegistrations@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:1_canary](#schemas1canary)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/notificationRegistrations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/operations@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **contents**: [OperationsDefinition](#operationsdefinition)[] (Required, WriteOnly)
* **error**: [schemas:10_error](#schemas10error) (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/operations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:1_canary](#schemas1canary)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:1_canary](#schemas1canary) (ReadOnly)
* **skuSettings**: [SkuSetting](#skusetting)[] (Required, WriteOnly)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:1_canary](#schemas1canary) (ReadOnly)
* **skuSettings**: [SkuSetting](#skusetting)[] (Required, WriteOnly)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:1_canary](#schemas1canary) (ReadOnly)
* **skuSettings**: [SkuSetting](#skusetting)[] (Required, WriteOnly)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/skus@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:1_canary](#schemas1canary) (ReadOnly)
* **skuSettings**: [SkuSetting](#skusetting)[] (Required, WriteOnly)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant)

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
* **display**: [schemas:49_display](#schemas49display) (Required, WriteOnly)
* **isDataAction**: bool (WriteOnly)
* **name**: string (Required, WriteOnly)
* **origin**: 'NotSpecified' | 'System' | 'User' (WriteOnly)
* **properties**: any (WriteOnly)

## schemas:49_display
### Properties
* **description**: string (Required, WriteOnly)
* **operation**: string (Required, WriteOnly)
* **provider**: string (Required, WriteOnly)
* **resource**: string (Required, WriteOnly)

## schemas:10_error
### Properties
* **code**: string (ReadOnly)
* **details**: [Error](#error)[] (ReadOnly)
* **innerError**: [schemas:9_innerError](#schemas9innererror) (ReadOnly)
* **message**: string (ReadOnly)
* **target**: string (ReadOnly)

## Error
### Properties
* **code**: string (ReadOnly)
* **details**: [Error](#error)[] (ReadOnly)
* **innerError**: [schemas:9_innerError](#schemas9innererror) (ReadOnly)
* **message**: string (ReadOnly)
* **target**: string (ReadOnly)

## schemas:9_innerError
### Properties
* **code**: string (ReadOnly)
* **innerError**: any (ReadOnly)
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

