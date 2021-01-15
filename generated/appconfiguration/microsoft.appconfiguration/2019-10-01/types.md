# Microsoft.AppConfiguration @ 2019-10-01

## Resource Microsoft.AppConfiguration/configurationStores@2019-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ResourceIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConfigurationStoreProperties
* **sku**: Sku (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.AppConfiguration/configurationStores' (ReadOnly, DeployTimeConstant)

## Function listKeys (Microsoft.AppConfiguration/configurationStores@2019-10-01)
* **Resource**: Microsoft.AppConfiguration/configurationStores
* **ApiVersion**: 2019-10-01
* **Output**: ApiKeyListResult

## Function listKeyValue (Microsoft.AppConfiguration/configurationStores@2019-10-01)
* **Resource**: Microsoft.AppConfiguration/configurationStores
* **ApiVersion**: 2019-10-01
* **Input**: ListKeyValueParameters
* **Output**: KeyValue

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned'
* **userAssignedIdentities**: Dictionary<string,UserIdentity>

## Dictionary<string,UserIdentity>
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
* **endpoint**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Sku
### Properties
* **name**: string (Required)

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

