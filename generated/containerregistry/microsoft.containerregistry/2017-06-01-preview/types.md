# Microsoft.ContainerRegistry @ 2017-06-01-preview

## Resource Microsoft.ContainerRegistry/registries@2017-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RegistryProperties
* **sku**: Sku (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ContainerRegistry/registries' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/replications@2017-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ReplicationProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ContainerRegistry/registries/replications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/webhooks@2017-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WebhookPropertiesCreateParameters
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ContainerRegistry/registries/webhooks' (ReadOnly, DeployTimeConstant)

## Function listCredentials (Microsoft.ContainerRegistry/registries@2017-06-01-preview
* **Resource**: Microsoft.ContainerRegistry/registries@2017-06-01-preview
* **Output**: RegistryListCredentialsResult

## Function listEvents (Microsoft.ContainerRegistry/registries/webhooks@2017-06-01-preview
* **Resource**: Microsoft.ContainerRegistry/registries/webhooks@2017-06-01-preview
* **Output**: EventListResult

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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ReplicationProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **status**: Status (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebhookPropertiesCreateParameters
### Properties
* **actions**: 'delete' | 'push'[] (Required)
* **customHeaders**: Dictionary<string,String> (WriteOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **scope**: string
* **serviceUri**: string (Required, WriteOnly)
* **status**: 'disabled' | 'enabled'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## EventListResult
### Properties
* **nextLink**: string (ReadOnly)
* **value**: Event[] (ReadOnly)

## Event
### Properties
* **eventRequestMessage**: EventRequestMessage (ReadOnly)
* **eventResponseMessage**: EventResponseMessage (ReadOnly)
* **id**: string (ReadOnly)

## EventRequestMessage
### Properties
* **content**: EventContent (ReadOnly)
* **headers**: Dictionary<string,String> (ReadOnly)
* **method**: string (ReadOnly)
* **requestUri**: string (ReadOnly)
* **version**: string (ReadOnly)

## EventContent
### Properties
* **action**: string (ReadOnly)
* **actor**: Actor (ReadOnly)
* **id**: string (ReadOnly)
* **request**: Request (ReadOnly)
* **source**: Source (ReadOnly)
* **target**: Target (ReadOnly)
* **timestamp**: string (ReadOnly)

## Actor
### Properties
* **name**: string (ReadOnly)

## Request
### Properties
* **addr**: string (ReadOnly)
* **host**: string (ReadOnly)
* **id**: string (ReadOnly)
* **method**: string (ReadOnly)
* **useragent**: string (ReadOnly)

## Source
### Properties
* **addr**: string (ReadOnly)
* **instanceID**: string (ReadOnly)

## Target
### Properties
* **digest**: string (ReadOnly)
* **length**: int (ReadOnly)
* **mediaType**: string (ReadOnly)
* **repository**: string (ReadOnly)
* **size**: int (ReadOnly)
* **tag**: string (ReadOnly)
* **url**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EventResponseMessage
### Properties
* **content**: string (ReadOnly)
* **headers**: Dictionary<string,String> (ReadOnly)
* **reasonPhrase**: string (ReadOnly)
* **statusCode**: string (ReadOnly)
* **version**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

