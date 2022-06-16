# Microsoft.ContainerRegistry @ 2017-03-01

## Resource Microsoft.ContainerRegistry/registries@2017-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the container registry. This cannot be changed after the resource is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RegistryPropertiesCreateParametersOrRegistryProperties](#registrypropertiescreateparametersorregistryproperties): The properties that the container registry will be created with.
* **sku**: [Sku](#sku) (Required): The SKU of the container registry.
* **tags**: [RegistryCreateParametersTags](#registrycreateparameterstags): The tags for the container registry.
* **type**: 'Microsoft.ContainerRegistry/registries' (ReadOnly, DeployTimeConstant): The resource type

## Function listCredentials (Microsoft.ContainerRegistry/registries@2017-03-01)
* **Resource**: Microsoft.ContainerRegistry/registries
* **ApiVersion**: 2017-03-01
* **Output**: [RegistryListCredentialsResult](#registrylistcredentialsresult)

## RegistryCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RegistryListCredentialsResult
### Properties
* **passwords**: [RegistryPassword](#registrypassword)[]: The list of passwords for a container registry.
* **username**: string: The username for a container registry.

## RegistryPassword
### Properties
* **name**: 'password' | 'password2': The password name.
* **value**: string: The password value.

## RegistryPropertiesCreateParametersOrRegistryProperties
### Properties
* **adminUserEnabled**: bool: The value that indicates whether the admin user is enabled.
* **creationDate**: string (ReadOnly): The creation date of the container registry in ISO8601 format.
* **loginServer**: string (ReadOnly): The URL that can be used to log into the container registry.
* **provisioningState**: 'Creating' | 'Succeeded' (ReadOnly): The provisioning state of the container registry at the time the operation was called.
* **storageAccount**: [StorageAccountParametersOrStorageAccountProperties](#storageaccountparametersorstorageaccountproperties) (Required): The parameters of a storage account for the container registry. If specified, the storage account must be in the same physical location as the container registry.

## Sku
### Properties
* **name**: string (Required): The SKU name of the container registry. Required for registry creation. Allowed value: Basic.
* **tier**: 'Basic' | string (ReadOnly): The SKU tier based on the SKU name.

## StorageAccountParametersOrStorageAccountProperties
### Properties
* **accessKey**: string (Required, WriteOnly): The access key to the storage account.
* **name**: string (Required): The name of the storage account.

