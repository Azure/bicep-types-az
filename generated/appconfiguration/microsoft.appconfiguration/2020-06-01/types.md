# Microsoft.AppConfiguration @ 2020-06-01

## Resource Microsoft.AppConfiguration/configurationStores@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ResourceIdentity](#resourceidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConfigurationStoreProperties](#configurationstoreproperties)
* **sku**: [Sku](#sku) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.AppConfiguration/configurationStores' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AppConfiguration/configurationStores/privateEndpointConnections@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: 'Microsoft.AppConfiguration/configurationStores/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned'
* **userAssignedIdentities**: [ResourceIdentityUserAssignedIdentities](#resourceidentityuserassignedidentities)

## ResourceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentity](#useridentity)

## UserIdentity
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## ConfigurationStoreProperties
### Properties
* **creationDate**: string (ReadOnly)
* **encryption**: [EncryptionProperties](#encryptionproperties)
* **endpoint**: string (ReadOnly)
* **privateEndpointConnections**: [PrivateEndpointConnectionReference](#privateendpointconnectionreference)[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled'

## EncryptionProperties
### Properties
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties)

## KeyVaultProperties
### Properties
* **identityClientId**: string
* **keyIdentifier**: string

## PrivateEndpointConnectionReference
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## PrivateEndpoint
### Properties
* **id**: string

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: 'None' | 'Recreate' (ReadOnly)
* **description**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected'

## Sku
### Properties
* **name**: string (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

