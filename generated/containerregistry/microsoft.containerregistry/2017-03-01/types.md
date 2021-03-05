# Microsoft.ContainerRegistry @ 2017-03-01

## Resource Microsoft.ContainerRegistry/registries@2017-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RegistryPropertiesCreateParameters
* **sku**: Sku (Required)
* **tags**: RegistryCreateParametersTags
* **type**: 'Microsoft.ContainerRegistry/registries' (ReadOnly, DeployTimeConstant)

## RegistryPropertiesCreateParameters
### Properties
* **adminUserEnabled**: bool
* **storageAccount**: StorageAccountParameters (Required)

## StorageAccountParameters
### Properties
* **name**: string (Required)

## Sku
### Properties
* **name**: string (Required)
* **tier**: 'Basic' (ReadOnly)

## RegistryCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

