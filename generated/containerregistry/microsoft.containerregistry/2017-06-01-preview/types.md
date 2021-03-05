# Microsoft.ContainerRegistry @ 2017-06-01-preview

## Resource Microsoft.ContainerRegistry/registries@2017-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RegistryProperties
* **sku**: Sku (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.ContainerRegistry/registries' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/replications@2017-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ReplicationProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.ContainerRegistry/registries/replications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/webhooks@2017-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WebhookPropertiesCreateParameters
* **tags**: WebhookCreateParametersTags
* **type**: 'Microsoft.ContainerRegistry/registries/webhooks' (ReadOnly, DeployTimeConstant)

## RegistryProperties
### Properties
* **adminUserEnabled**: bool
* **creationDate**: string (ReadOnly)
* **loginServer**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **status**: Status (ReadOnly)
* **storageAccount**: StorageAccountProperties

## Status
### Properties
* **displayStatus**: string (ReadOnly)
* **message**: string (ReadOnly)
* **timestamp**: string (ReadOnly)

## StorageAccountProperties
### Properties
* **id**: string (Required)

## Sku
### Properties
* **name**: 'Basic' | 'Managed_Basic' | 'Managed_Premium' | 'Managed_Standard' (Required)
* **tier**: 'Basic' | 'Managed' (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ReplicationProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **status**: Status (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebhookPropertiesCreateParameters
### Properties
* **actions**: 'delete' | 'push'[] (Required)
* **customHeaders**: WebhookPropertiesCreateParametersCustomHeaders (WriteOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **scope**: string
* **serviceUri**: string (Required, WriteOnly)
* **status**: 'disabled' | 'enabled'

## WebhookPropertiesCreateParametersCustomHeaders
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebhookCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

