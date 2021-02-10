# Microsoft.RecoveryServices @ 2020-02-02

## Resource Microsoft.RecoveryServices/vaults@2020-02-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: IdentityData
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VaultProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.RecoveryServices/vaults' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/certificates@2020-02-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RawCertificateData
* **type**: 'Microsoft.RecoveryServices/vaults/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/extendedInformation@2020-02-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VaultExtendedInfo
* **type**: 'Microsoft.RecoveryServices/vaults/extendedInformation' (ReadOnly, DeployTimeConstant)

## IdentityData
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned' (Required)
* **userAssignedIdentities**: Dictionary<string,UserIdentity>

## Dictionary<string,UserIdentity>
### Properties
### Additional Properties
* **Additional Properties Type**: UserIdentity

## UserIdentity
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## VaultProperties
### Properties
* **encryption**: schemas:28_encryption
* **privateEndpointConnections**: PrivateEndpointConnectionVaultProperties[] (ReadOnly)
* **privateEndpointStateForBackup**: 'Enabled' | 'None' (ReadOnly)
* **privateEndpointStateForSiteRecovery**: 'Enabled' | 'None' (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **upgradeDetails**: UpgradeDetails

## schemas:28_encryption
### Properties
* **infrastructureEncryption**: 'Disabled' | 'Enabled'
* **kekIdentity**: CmkKekIdentity
* **keyVaultProperties**: CmkKeyVaultProperties

## CmkKekIdentity
### Properties
* **userAssignedIdentity**: string
* **useSystemAssignedIdentity**: bool

## CmkKeyVaultProperties
### Properties
* **keyUri**: string

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
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RawCertificateData
### Properties
* **authType**: 'AAD' | 'AccessControlService' | 'ACS' | 'AzureActiveDirectory' | 'Invalid'
* **certificate**: array

## VaultExtendedInfo
### Properties
* **algorithm**: string
* **encryptionKey**: string
* **encryptionKeyThumbprint**: string
* **integrityKey**: string

