# Microsoft.AppConfiguration @ 2022-05-01

## Resource Microsoft.AppConfiguration/configurationStores@2022-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceIdentity](#resourceidentity): The managed identity information, if configured.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationStoreProperties](#configurationstoreproperties): The properties of a configuration store.
* **sku**: [Sku](#sku) (Required): The sku of the configuration store.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Resource system metadata.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AppConfiguration/configurationStores' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppConfiguration/configurationStores/keyValues@2022-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [KeyValueProperties](#keyvalueproperties): All key-value properties.
* **type**: 'Microsoft.AppConfiguration/configurationStores/keyValues' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppConfiguration/configurationStores/privateEndpointConnections@2022-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): The properties of a private endpoint.
* **type**: 'Microsoft.AppConfiguration/configurationStores/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.AppConfiguration/configurationStores@2022-05-01)
* **Resource**: Microsoft.AppConfiguration/configurationStores
* **ApiVersion**: 2022-05-01
* **Output**: [ApiKeyListResult](#apikeylistresult)

## ApiKey
### Properties
* **connectionString**: string (ReadOnly): A connection string that can be used by supporting clients for authentication.
* **id**: string (ReadOnly): The key ID.
* **lastModified**: string (ReadOnly): The last time any of the key's properties were modified.
* **name**: string (ReadOnly): A name for the key describing its usage.
* **readOnly**: bool (ReadOnly): Whether this key can only be used for read operations.
* **value**: string (ReadOnly): The value of the key that is used for authentication purposes.

## ApiKeyListResult
### Properties
* **nextLink**: string: The URI that can be used to request the next set of paged results.
* **value**: [ApiKey](#apikey)[]: The collection value.

## ConfigurationStoreProperties
### Properties
* **createMode**: 'Default' | 'Recover' (WriteOnly): Indicates whether the configuration store need to be recovered.
* **creationDate**: string (ReadOnly): The creation date of configuration store.
* **disableLocalAuth**: bool: Disables all authentication methods other than AAD authentication.
* **enablePurgeProtection**: bool: Property specifying whether protection against purge is enabled for this configuration store.
* **encryption**: [EncryptionProperties](#encryptionproperties): The encryption settings of the configuration store.
* **endpoint**: string (ReadOnly): The DNS endpoint where the configuration store API will be available.
* **privateEndpointConnections**: [PrivateEndpointConnectionReference](#privateendpointconnectionreference)[] (ReadOnly): The list of private endpoint connections that are set up for this resource.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the configuration store.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Control permission for data plane traffic coming from public networks while private endpoint is enabled.
* **softDeleteRetentionInDays**: int: The amount of time in days that the configuration store will be retained when it is soft deleted.

## EncryptionProperties
### Properties
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): Key vault properties.

## KeyValueProperties
### Properties
* **contentType**: string: The content type of the key-value's value.
Providing a proper content-type can enable transformations of values when they are retrieved by applications.
* **eTag**: string (ReadOnly): An ETag indicating the state of a key-value within a configuration store.
* **key**: string (ReadOnly): The primary identifier of a key-value.
The key is used in unison with the label to uniquely identify a key-value.
* **label**: string (ReadOnly): A value used to group key-values.
The label is used in unison with the key to uniquely identify a key-value.
* **lastModified**: string (ReadOnly): The last time a modifying operation was performed on the given key-value.
* **locked**: bool (ReadOnly): A value indicating whether the key-value is locked.
A locked key-value may not be modified until it is unlocked.
* **tags**: [KeyValuePropertiesTags](#keyvaluepropertiestags): A dictionary of tags that can help identify what a key-value may be applicable for.
* **value**: string: The value of the key-value.

## KeyValuePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## KeyVaultProperties
### Properties
* **identityClientId**: string: The client id of the identity which will be used to access key vault.
* **keyIdentifier**: string: The URI of the key vault key used to encrypt data.

## PrivateEndpoint
### Properties
* **id**: string: The resource Id for private endpoint

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The resource of private endpoint.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning status of the private endpoint connection.

## PrivateEndpointConnectionReference
### Properties
* **id**: string (ReadOnly): The resource ID.
* **name**: string (ReadOnly): The name of the resource.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): The properties of a private endpoint connection.
* **type**: string (ReadOnly): The type of the resource.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: 'None' | 'Recreate' | string (ReadOnly): Any action that is required beyond basic workflow (approve/ reject/ disconnect)
* **description**: string: The private link service connection description.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: The private link service connection status.

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the identity. This property will only be provided for a system-assigned identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the resource's identity. This property will only be provided for a system-assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' | string: The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities.
* **userAssignedIdentities**: [ResourceIdentityUserAssignedIdentities](#resourceidentityuserassignedidentities): The list of user-assigned identities associated with the resource. The user-assigned identity dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## ResourceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentity](#useridentity)

## Sku
### Properties
* **name**: string (Required): The SKU name of the configuration store.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserIdentity
### Properties
* **clientId**: string (ReadOnly): The client ID of the user-assigned identity.
* **principalId**: string (ReadOnly): The principal ID of the user-assigned identity.

