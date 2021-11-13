# Microsoft.AppConfiguration @ 2019-10-01

## Resource Microsoft.AppConfiguration/configurationStores@2019-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceIdentity](#resourceidentity)
* **location**: string (Required): The location of the resource. This cannot be changed after the resource is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationStoreProperties](#configurationstoreproperties): The properties of a configuration store.
* **sku**: [Sku](#sku) (Required): Describes a configuration store SKU.
* **tags**: [ResourceTags](#resourcetags): The tags of the resource.
* **type**: 'Microsoft.AppConfiguration/configurationStores' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.AppConfiguration/configurationStores@2019-10-01)
* **Resource**: Microsoft.AppConfiguration/configurationStores
* **ApiVersion**: 2019-10-01
* **Output**: [ApiKeyListResult](#apikeylistresult)

## Function listKeyValue (Microsoft.AppConfiguration/configurationStores@2019-10-01)
* **Resource**: Microsoft.AppConfiguration/configurationStores
* **ApiVersion**: 2019-10-01
* **Input**: [ListKeyValueParameters](#listkeyvalueparameters)
* **Output**: [KeyValue](#keyvalue)

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the identity. This property will only be provided for a system-assigned identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the resource's identity. This property will only be provided for a system-assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities.
* **userAssignedIdentities**: [ResourceIdentityUserAssignedIdentities](#resourceidentityuserassignedidentities): The list of user-assigned identities associated with the resource. The user-assigned identity dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## ResourceIdentityUserAssignedIdentities
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
* **endpoint**: string (ReadOnly): The DNS endpoint where the configuration store API will be available.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of the configuration store.

## Sku
### Properties
* **name**: string (Required): The SKU name of the configuration store.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApiKey
### Properties
* **connectionString**: string (ReadOnly): A connection string that can be used by supporting clients for authentication.
* **id**: string (ReadOnly): The key ID.
* **lastModified**: string (ReadOnly): The last time any of the key's properties were modified.
* **name**: string (ReadOnly): A name for the key describing its usage.
* **readOnly**: bool (ReadOnly): Whether this key can only be used for read operations.
* **value**: string (ReadOnly): The value of the key that is used for authentication purposes.

## KeyValueTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

