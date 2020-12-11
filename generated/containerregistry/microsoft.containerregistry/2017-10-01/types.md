# Microsoft.ContainerRegistry @ 2017-10-01

## Resource Microsoft.ContainerRegistry/registries@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RegistryProperties
* **sku**: Sku (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ContainerRegistry/registries' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/replications@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ReplicationProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ContainerRegistry/registries/replications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/webhooks@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WebhookPropertiesCreateParameters
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ContainerRegistry/registries/webhooks' (ReadOnly, DeployTimeConstant)

## RegistryProperties
### Properties
* **adminUserEnabled**: bool
* **creationDate**: string (ReadOnly)
* **loginServer**: string (ReadOnly)
* **networkRuleSet**: NetworkRuleSet
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **status**: Status (ReadOnly)
* **storageAccount**: StorageAccountProperties

## NetworkRuleSet
### Properties
* **defaultAction**: 'Allow' | 'Deny' (Required)
* **ipRules**: IPRule[]
* **virtualNetworkRules**: VirtualNetworkRule[]

## IPRule
### Properties
* **action**: 'Allow'
* **value**: string (Required)

## VirtualNetworkRule
### Properties
* **action**: 'Allow'
* **id**: string (Required)

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
* **name**: 'Basic' | 'Classic' | 'Premium' | 'Standard' (Required)
* **tier**: 'Basic' | 'Classic' | 'Premium' | 'Standard' (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ReplicationProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **status**: Status (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## WebhookPropertiesCreateParameters
### Properties
* **actions**: 'chart_delete' | 'chart_push' | 'delete' | 'push' | 'quarantine'[] (Required)
* **customHeaders**: Dictionary<string,String> (WriteOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **scope**: string
* **serviceUri**: string (Required, WriteOnly)
* **status**: 'disabled' | 'enabled'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

