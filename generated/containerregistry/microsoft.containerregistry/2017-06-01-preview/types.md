# Microsoft.ContainerRegistry @ 2017-06-01-preview

## Resource Microsoft.ContainerRegistry/registries@2017-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource. This cannot be changed after the resource is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RegistryProperties](#registryproperties): The properties of a container registry.
* **sku**: [Sku](#sku) (Required): The SKU of a container registry.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.ContainerRegistry/registries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerRegistry/registries/replications@2017-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource. This cannot be changed after the resource is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ReplicationProperties](#replicationproperties): The properties of a replication.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.ContainerRegistry/registries/replications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerRegistry/registries/webhooks@2017-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the webhook. This cannot be changed after the resource is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebhookPropertiesCreateParameters](#webhookpropertiescreateparameters): The parameters for creating the properties of a webhook.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags for the webhook.
* **type**: 'Microsoft.ContainerRegistry/registries/webhooks' (ReadOnly, DeployTimeConstant): The resource type

## RegistryProperties
### Properties
* **adminUserEnabled**: bool: The value that indicates whether the admin user is enabled.
* **creationDate**: string (ReadOnly): The creation date of the container registry in ISO8601 format.
* **loginServer**: string (ReadOnly): The URL that can be used to log into the container registry.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of the container registry at the time the operation was called.
* **status**: [Status](#status) (ReadOnly): The status of an Azure resource at the time the operation was called.
* **storageAccount**: [StorageAccountProperties](#storageaccountproperties): The properties of a storage account for a container registry. Only applicable to Basic SKU.

## Status
### Properties
* **displayStatus**: string (ReadOnly): The short label for the status.
* **message**: string (ReadOnly): The detailed message for the status, including alerts and error messages.
* **timestamp**: string (ReadOnly): The timestamp when the status was changed to the current value.

## StorageAccountProperties
### Properties
* **id**: string (Required): The resource ID of the storage account.

## Sku
### Properties
* **name**: 'Basic' | 'Managed_Basic' | 'Managed_Premium' | 'Managed_Standard' (Required): The SKU name of the container registry. Required for registry creation.
* **tier**: 'Basic' | 'Managed' (ReadOnly): The SKU tier based on the SKU name.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ReplicationProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of the replication at the time the operation was called.
* **status**: [Status](#status) (ReadOnly): The status of an Azure resource at the time the operation was called.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebhookPropertiesCreateParameters
### Properties
* **actions**: 'delete' | 'push'[] (Required): The list of actions that trigger the webhook to post notifications.
* **customHeaders**: [Dictionary<string,String>](#dictionarystringstring) (WriteOnly): Custom headers that will be added to the webhook notifications.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of the webhook at the time the operation was called.
* **scope**: string: The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events.
* **serviceUri**: string (Required, WriteOnly): The service URI for the webhook to post notifications.
* **status**: 'disabled' | 'enabled': The status of the webhook at the time the operation was called.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

