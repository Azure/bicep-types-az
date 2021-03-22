# Microsoft.RecoveryServices @ 2020-10-01

## Resource Microsoft.RecoveryServices/vaults@2020-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [IdentityData](#identitydata)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VaultProperties](#vaultproperties)
* **sku**: [Sku](#sku)
* **systemData**: [systemData](#systemdata)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.RecoveryServices/vaults' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/certificates@2020-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RawCertificateData](#rawcertificatedata)
* **type**: 'Microsoft.RecoveryServices/vaults/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/extendedInformation@2020-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'vaultExtendedInfo' (Required, DeployTimeConstant)
* **properties**: [VaultExtendedInfo](#vaultextendedinfo)
* **type**: 'Microsoft.RecoveryServices/vaults/extendedInformation' (ReadOnly, DeployTimeConstant)

## IdentityData
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned' (Required)
* **userAssignedIdentities**: [Dictionary<string,UserIdentity>](#dictionarystringuseridentity)

## Dictionary<string,UserIdentity>
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentity](#useridentity)

## UserIdentity
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## VaultProperties
### Properties
* **encryption**: [schemas:29_encryption](#schemas29encryption)
* **privateEndpointConnections**: [PrivateEndpointConnectionVaultProperties](#privateendpointconnectionvaultproperties)[] (ReadOnly)
* **privateEndpointStateForBackup**: 'Enabled' | 'None' (ReadOnly)
* **privateEndpointStateForSiteRecovery**: 'Enabled' | 'None' (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **upgradeDetails**: [UpgradeDetails](#upgradedetails)

## schemas:29_encryption
### Properties
* **infrastructureEncryption**: 'Disabled' | 'Enabled'
* **kekIdentity**: [CmkKekIdentity](#cmkkekidentity)
* **keyVaultProperties**: [CmkKeyVaultProperties](#cmkkeyvaultproperties)

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
* **properties**: [PrivateEndpointConnection](#privateendpointconnection)

## PrivateEndpointConnection
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate)
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
* **tier**: string

## systemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

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

