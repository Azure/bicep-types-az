# Microsoft.MixedReality @ 2021-03-01-preview

## Resource Microsoft.MixedReality/objectAnchorsAccounts@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ObjectAnchorsAccountIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MixedRealityAccountProperties
* **systemData**: SystemData (ReadOnly)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.MixedReality/objectAnchorsAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MixedReality/remoteRenderingAccounts@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **kind**: Sku
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **plan**: Identity
* **properties**: MixedRealityAccountProperties
* **sku**: Sku
* **systemData**: SystemData (ReadOnly)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.MixedReality/remoteRenderingAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MixedReality/spatialAnchorsAccounts@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **kind**: Sku
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **plan**: Identity
* **properties**: MixedRealityAccountProperties
* **sku**: Sku
* **systemData**: SystemData (ReadOnly)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.MixedReality/spatialAnchorsAccounts' (ReadOnly, DeployTimeConstant)

## ObjectAnchorsAccountIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)

## MixedRealityAccountProperties
### Properties
* **accountDomain**: string (ReadOnly)
* **accountId**: string (ReadOnly)
* **storageAccountName**: string

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)

## Sku
### Properties
* **capacity**: int
* **family**: string
* **name**: string (Required)
* **size**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

