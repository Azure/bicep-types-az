# Microsoft.AppConfiguration @ 2019-02-01-preview

## Resource Microsoft.AppConfiguration/configurationStores@2019-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource. This cannot be changed after the resource is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationStoreProperties](#configurationstoreproperties): The properties of a configuration store.
* **tags**: [ResourceTags](#resourcetags): The tags of the resource.
* **type**: 'Microsoft.AppConfiguration/configurationStores' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.AppConfiguration/configurationStores@2019-02-01-preview)
* **Resource**: Microsoft.AppConfiguration/configurationStores
* **ApiVersion**: 2019-02-01-preview
* **Output**: [ApiKeyListResult](#apikeylistresult)

## Function listKeyValue (Microsoft.AppConfiguration/configurationStores@2019-02-01-preview)
* **Resource**: Microsoft.AppConfiguration/configurationStores
* **ApiVersion**: 2019-02-01-preview
* **Input**: [ListKeyValueParameters](#listkeyvalueparameters)
* **Output**: [KeyValue](#keyvalue)

## ConfigurationStoreProperties
### Properties
* **creationDate**: string (ReadOnly): The creation date of configuration store.
* **endpoint**: string (ReadOnly): The DNS endpoint where the configuration store API will be available.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of the configuration store.

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

