# Microsoft.ContainerRegistry @ 2017-03-01

## Resource Microsoft.ContainerRegistry/registries@2017-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RegistryPropertiesCreateParameters](#registrypropertiescreateparameters)
* **sku**: [Sku](#sku) (Required)
* **tags**: [RegistryCreateParametersTags](#registrycreateparameterstags)
* **type**: 'Microsoft.ContainerRegistry/registries' (ReadOnly, DeployTimeConstant)

## RegistryPropertiesCreateParameters
### Properties
* **adminUserEnabled**: bool
* **creationDate**: string (ReadOnly)
* **loginServer**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'Succeeded' (ReadOnly)
* **storageAccount**: [StorageAccountParameters](#storageaccountparameters) (Required)

## StorageAccountParameters
### Properties
* **accessKey**: string (Required, WriteOnly)
* **name**: string (Required)

## Sku
### Properties
* **name**: string (Required)
* **tier**: 'Basic' (ReadOnly)

## RegistryCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

