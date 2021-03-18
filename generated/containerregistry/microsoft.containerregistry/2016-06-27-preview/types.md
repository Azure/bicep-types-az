# Microsoft.ContainerRegistry @ 2016-06-27-preview

## Resource Microsoft.ContainerRegistry/registries@2016-06-27-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-27-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RegistryProperties](#registryproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.ContainerRegistry/registries' (ReadOnly, DeployTimeConstant)

## RegistryProperties
### Properties
* **adminUserEnabled**: bool
* **creationDate**: string (ReadOnly)
* **loginServer**: string (ReadOnly)
* **storageAccount**: [StorageAccountProperties](#storageaccountproperties) (Required)

## StorageAccountProperties
### Properties
* **accessKey**: string (Required)
* **name**: string (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

