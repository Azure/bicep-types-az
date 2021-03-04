# Microsoft.RecoveryServices @ 2016-06-01

## Resource Microsoft.RecoveryServices/vaults@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: IdentityData
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VaultProperties
* **sku**: Sku
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.RecoveryServices/vaults' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/certificates@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.RecoveryServices/vaults/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/extendedInformation@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VaultExtendedInfo
* **type**: 'Microsoft.RecoveryServices/vaults/extendedInformation' (ReadOnly, DeployTimeConstant)

## IdentityData
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' (Required)

## VaultProperties
### Properties
* **privateEndpointConnections**: PrivateEndpointConnectionVaultProperties[] (ReadOnly)
* **privateEndpointStateForBackup**: 'Enabled' | 'None' (ReadOnly)
* **privateEndpointStateForSiteRecovery**: 'Enabled' | 'None' (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **upgradeDetails**: UpgradeDetails

## PrivateEndpointConnectionVaultProperties
### Properties
* **id**: string (ReadOnly)
* **properties**: PrivateEndpointConnection (ReadOnly)

## PrivateEndpointConnection
### Properties
* **privateEndpoint**: PrivateEndpoint (ReadOnly)
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionState (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Pending' | 'Succeeded' (ReadOnly)

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly)

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string (ReadOnly)
* **description**: string (ReadOnly)
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' (ReadOnly)

## UpgradeDetails
### Properties
* **endTimeUtc**: string (ReadOnly)
* **lastUpdatedTimeUtc**: string (ReadOnly)
* **message**: string (ReadOnly)
* **operationId**: string (ReadOnly)
* **previousResourceId**: string (ReadOnly)
* **startTimeUtc**: string (ReadOnly)
* **status**: 'Failed' | 'InProgress' | 'Unknown' | 'Upgraded' (ReadOnly)
* **triggerType**: 'ForcedUpgrade' | 'UserTriggered' (ReadOnly)
* **upgradedResourceId**: string (ReadOnly)

## Sku
### Properties
* **name**: 'RS0' | 'Standard' (Required)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VaultExtendedInfo
### Properties
* **algorithm**: string
* **encryptionKey**: string
* **encryptionKeyThumbprint**: string
* **integrityKey**: string

