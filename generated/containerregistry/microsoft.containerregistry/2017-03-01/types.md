# Microsoft.ContainerRegistry @ 2017-03-01

## Resource Microsoft.ContainerRegistry/registries@2017-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RegistryPropertiesCreateParameters
* **sku**: Sku (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ContainerRegistry/registries' (ReadOnly, DeployTimeConstant)

## Function listCredentials (Microsoft.ContainerRegistry/registries@2017-03-01)
* **Resource**: Microsoft.ContainerRegistry/registries
* **ApiVersion**: 2017-03-01
* **Output**: RegistryListCredentialsResult

## RegistryPropertiesCreateParameters
### Properties
* **adminUserEnabled**: bool
* **creationDate**: string (ReadOnly)
* **loginServer**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'Succeeded' (ReadOnly)
* **storageAccount**: StorageAccountParameters (Required)

## StorageAccountParameters
### Properties
* **accessKey**: string (Required, WriteOnly)
* **name**: string (Required)

## Sku
### Properties
* **name**: string (Required)
* **tier**: 'Basic' (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RegistryListCredentialsResult
### Properties
* **passwords**: RegistryPassword[] (ReadOnly)
* **username**: string (ReadOnly)

## RegistryPassword
### Properties
* **name**: 'password' | 'password2' (ReadOnly)
* **value**: string (ReadOnly)

