# Microsoft.RecoveryServices @ 2016-06-01

## Microsoft.RecoveryServices/vaults
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: IdentityData
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VaultProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.RecoveryServices/vaults' (ReadOnly, DeployTimeConstant)

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
* **properties**: PrivateEndpointConnection

## PrivateEndpointConnection
### Properties
* **privateEndpoint**: PrivateEndpoint
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionState
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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.RecoveryServices/vaults/certificates
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RawCertificateData
* **type**: 'Microsoft.RecoveryServices/vaults/certificates' (ReadOnly, DeployTimeConstant)

## RawCertificateData
### Properties
* **authType**: 'AAD' | 'AccessControlService' | 'ACS' | 'AzureActiveDirectory' | 'Invalid'
* **certificate**: array

## Microsoft.RecoveryServices/vaults/extendedInformation
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VaultExtendedInfo
* **type**: 'Microsoft.RecoveryServices/vaults/extendedInformation' (ReadOnly, DeployTimeConstant)

## VaultExtendedInfo
### Properties
* **algorithm**: string
* **encryptionKey**: string
* **encryptionKeyThumbprint**: string
* **integrityKey**: string

