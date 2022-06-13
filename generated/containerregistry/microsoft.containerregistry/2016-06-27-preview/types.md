# Microsoft.ContainerRegistry @ 2016-06-27-preview

## Resource Microsoft.ContainerRegistry/registries@2016-06-27-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-27-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource. This cannot be changed after the resource is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RegistryProperties](#registryproperties): The properties of the container registry.
* **tags**: [ResourceTags](#resourcetags): The tags of the resource.
* **type**: 'Microsoft.ContainerRegistry/registries' (ReadOnly, DeployTimeConstant): The resource type

## RegistryProperties
### Properties
* **adminUserEnabled**: bool: The value that indicates whether the admin user is enabled. This value is false by default.
* **creationDate**: string (ReadOnly): The creation date of the container registry in ISO8601 format.
* **loginServer**: string (ReadOnly): The URL that can be used to log into the container registry.
* **storageAccount**: [StorageAccountProperties](#storageaccountproperties) (Required): The properties of the storage account for the container registry. If specified, the storage account must be in the same physical location as the container registry.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StorageAccountProperties
### Properties
* **accessKey**: string (Required): The access key to the storage account.
* **name**: string (Required): The name of the storage account.

