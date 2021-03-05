# Microsoft.MixedReality @ 2020-04-06-preview

## Resource Microsoft.MixedReality/remoteRenderingAccounts@2020-04-06-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-06-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: RemoteRenderingAccountIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MixedRealityAccountProperties
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.MixedReality/remoteRenderingAccounts' (ReadOnly, DeployTimeConstant)

## RemoteRenderingAccountIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: '[object Object]'

## MixedRealityAccountProperties
### Properties
* **accountDomain**: string (ReadOnly)
* **accountId**: string (ReadOnly)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

