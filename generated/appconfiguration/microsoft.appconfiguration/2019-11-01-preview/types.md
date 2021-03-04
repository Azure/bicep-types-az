# Microsoft.AppConfiguration @ 2019-11-01-preview

## Resource Microsoft.AppConfiguration/configurationStores@2019-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ResourceIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConfigurationStoreProperties
* **sku**: Sku (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.AppConfiguration/configurationStores' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AppConfiguration/configurationStores/privateEndpointConnections@2019-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.AppConfiguration/configurationStores/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned'
* **userAssignedIdentities**: ResourceIdentityUserAssignedIdentities

## ResourceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: UserIdentity

## UserIdentity
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## ConfigurationStoreProperties
### Properties
* **creationDate**: string (ReadOnly)
* **encryption**: EncryptionProperties
* **endpoint**: string (ReadOnly)
* **privateEndpointConnections**: PrivateEndpointConnectionReference[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled'

## EncryptionProperties
### Properties
* **keyVaultProperties**: KeyVaultProperties

## KeyVaultProperties
### Properties
* **identityClientId**: string
* **keyIdentifier**: string

## PrivateEndpointConnectionReference
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: PrivateEndpointConnectionProperties
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: PrivateEndpoint
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionState (Required)
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

