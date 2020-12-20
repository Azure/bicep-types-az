# Microsoft.AppConfiguration @ 2019-02-01-preview

## Resource Microsoft.AppConfiguration/configurationStores@2019-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-02-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConfigurationStoreProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.AppConfiguration/configurationStores' (ReadOnly, DeployTimeConstant)

## Function listKeys (Microsoft.AppConfiguration/configurationStores@2019-02-01-preview
* **Resource**: Microsoft.AppConfiguration/configurationStores@2019-02-01-preview
* **Output**: ApiKeyListResult

## Function listKeyValue (Microsoft.AppConfiguration/configurationStores@2019-02-01-preview
* **Resource**: Microsoft.AppConfiguration/configurationStores@2019-02-01-preview
* **Input**: ListKeyValueParameters
* **Output**: KeyValue

## ConfigurationStoreProperties
### Properties
* **creationDate**: string (ReadOnly)
* **endpoint**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApiKeyListResult
### Properties
* **nextLink**: string (ReadOnly)
* **value**: ApiKey[] (ReadOnly)

## ApiKey
### Properties
* **connectionString**: string (ReadOnly)
* **id**: string (ReadOnly)
* **lastModified**: string (ReadOnly)
* **name**: string (ReadOnly)
* **readOnly**: bool (ReadOnly)
* **value**: string (ReadOnly)

## ListKeyValueParameters
### Properties
* **key**: string (Required, WriteOnly)
* **label**: string (WriteOnly)

## KeyValue
### Properties
* **contentType**: string (ReadOnly)
* **eTag**: string (ReadOnly)
* **key**: string (ReadOnly)
* **label**: string (ReadOnly)
* **lastModified**: string (ReadOnly)
* **locked**: bool (ReadOnly)
* **tags**: Dictionary<string,String> (ReadOnly)
* **value**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

