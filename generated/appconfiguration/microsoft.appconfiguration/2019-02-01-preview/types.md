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
* **creationDate**: string (ReadOnly): The creation date of configuration store.
* **endpoint**: string (ReadOnly): The DNS endpoint where the configuration store API will be available.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the configuration store.

## KeyValue
### Properties
* **contentType**: string (ReadOnly): The content type of the key-value's value.
Providing a proper content-type can enable transformations of values when they are retrieved by applications.
* **eTag**: string (ReadOnly): An ETag indicating the state of a key-value within a configuration store.
* **key**: string (ReadOnly): The primary identifier of a key-value.
The key is used in unison with the label to uniquely identify a key-value.
* **label**: string (ReadOnly): A value used to group key-values.
The label is used in unison with the key to uniquely identify a key-value.
* **lastModified**: string (ReadOnly): The last time a modifying operation was performed on the given key-value.
* **locked**: bool (ReadOnly): A value indicating whether the key-value is locked.
A locked key-value may not be modified until it is unlocked.
* **tags**: [KeyValueTags](#keyvaluetags) (ReadOnly): A dictionary of tags that can help identify what a key-value may be applicable for.
* **value**: string (ReadOnly): The value of the key-value.

## KeyValueTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ListKeyValueParameters
### Properties
* **key**: string (Required): The key to retrieve.
* **label**: string: The label of the key.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

