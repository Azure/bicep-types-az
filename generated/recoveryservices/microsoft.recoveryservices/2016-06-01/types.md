# Microsoft.RecoveryServices @ 2016-06-01

## Resource Microsoft.RecoveryServices/vaults@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [IdentityData](#identitydata)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VaultProperties](#vaultproperties)
* **sku**: [Sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.RecoveryServices/vaults' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/certificates@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RawCertificateData](#rawcertificatedata)
* **type**: 'Microsoft.RecoveryServices/vaults/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/extendedInformation@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'vaultExtendedInfo' (Required, DeployTimeConstant)
* **properties**: [VaultExtendedInfo](#vaultextendedinfo)
* **type**: 'Microsoft.RecoveryServices/vaults/extendedInformation' (ReadOnly, DeployTimeConstant)

## IdentityData
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' (Required)

## VaultProperties
### Properties
* **privateEndpointConnections**: [PrivateEndpointConnectionVaultProperties](#privateendpointconnectionvaultproperties)[] (ReadOnly)
* **privateEndpointStateForBackup**: 'Enabled' | 'None' (ReadOnly)
* **privateEndpointStateForSiteRecovery**: 'Enabled' | 'None' (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **upgradeDetails**: [UpgradeDetails](#upgradedetails)

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

