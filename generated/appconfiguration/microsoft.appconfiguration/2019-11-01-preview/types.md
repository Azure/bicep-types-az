# Microsoft.AppConfiguration @ 2019-11-01-preview

## Resource Microsoft.AppConfiguration/configurationStores@2019-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceIdentity](#resourceidentity): An identity that can be associated with a resource.
* **location**: string (Required): The location of the resource. This cannot be changed after the resource is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationStoreProperties](#configurationstoreproperties): The properties of a configuration store.
* **sku**: [Sku](#sku) (Required): Describes a configuration store SKU.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.AppConfiguration/configurationStores' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppConfiguration/configurationStores/privateEndpointConnections@2019-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of a private endpoint connection.
* **type**: 'Microsoft.AppConfiguration/configurationStores/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the identity. This property will only be provided for a system-assigned identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the resource's identity. This property will only be provided for a system-assigned identity.
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned': The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities. Possible values include: 'None', 'SystemAssigned', 'UserAssigned', 'SystemAssigned, UserAssigned'
* **userAssignedIdentities**: [Dictionary<string,UserIdentity>](#dictionarystringuseridentity): The list of user-assigned identities associated with the resource. The user-assigned identity dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## Dictionary<string,UserIdentity>
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentity](#useridentity)

## UserIdentity
### Properties
* **clientId**: string (ReadOnly): The client ID of the user-assigned identity.
* **principalId**: string (ReadOnly): The principal ID of the user-assigned identity.

## ConfigurationStoreProperties
### Properties
* **creationDate**: string (ReadOnly): The creation date of configuration store.
* **encryption**: [EncryptionProperties](#encryptionproperties): The encryption settings for a configuration store.
* **endpoint**: string (ReadOnly): The DNS endpoint where the configuration store API will be available.
* **privateEndpointConnections**: [PrivateEndpointConnectionReference](#privateendpointconnectionreference)[] (ReadOnly): The list of private endpoint connections that are set up for this resource.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of the configuration store. Possible values include: 'Creating', 'Updating', 'Deleting', 'Succeeded', 'Failed', 'Canceled'
* **publicNetworkAccess**: 'Disabled' | 'Enabled': Control permission for data plane traffic coming from public networks while private endpoint is enabled. Possible values include: 'Enabled', 'Disabled'

## EncryptionProperties
### Properties
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): Settings concerning key vault encryption for a configuration store.

## KeyVaultProperties
### Properties
* **identityClientId**: string: The client id of the identity which will be used to access key vault.
* **keyIdentifier**: string: The URI of the key vault key used to encrypt data.

## PrivateEndpointConnectionReference
### Properties
* **id**: string (ReadOnly): The resource ID.
* **name**: string (ReadOnly): The name of the resource.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of a private endpoint connection.
* **type**: string (ReadOnly): The type of the resource.

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): Private endpoint which a connection belongs to.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): The state of a private link service connection.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning status of the private endpoint connection. Possible values include: 'Creating', 'Updating', 'Deleting', 'Succeeded', 'Failed', 'Canceled'

## PrivateEndpoint
### Properties
* **id**: string: The resource Id for private endpoint

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: 'None' | 'Recreate' (ReadOnly): Any action that is required beyond basic workflow (approve/ reject/ disconnect). Possible values include: 'None', 'Recreate'
* **description**: string: The private link service connection description.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected': The private link service connection status. Possible values include: 'Pending', 'Approved', 'Rejected', 'Disconnected'

## Sku
### Properties
* **name**: string (Required): The SKU name of the configuration store.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

