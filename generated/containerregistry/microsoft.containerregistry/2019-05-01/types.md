# Microsoft.ContainerRegistry @ 2019-05-01

## Resource Microsoft.ContainerRegistry/registries@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RegistryProperties](#registryproperties)
* **sku**: [Sku](#sku) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.ContainerRegistry/registries' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/replications@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ReplicationProperties](#replicationproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.ContainerRegistry/registries/replications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/webhooks@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WebhookPropertiesCreateParameters](#webhookpropertiescreateparameters)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.ContainerRegistry/registries/webhooks' (ReadOnly, DeployTimeConstant)

## RegistryProperties
### Properties
* **adminUserEnabled**: bool
* **creationDate**: string (ReadOnly)
* **loginServer**: string (ReadOnly)
* **networkRuleSet**: [NetworkRuleSet](#networkruleset)
* **policies**: [Policies](#policies)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **status**: [Status](#status) (ReadOnly)
* **storageAccount**: [StorageAccountProperties](#storageaccountproperties)

## NetworkRuleSet
### Properties
* **defaultAction**: 'Allow' | 'Deny' (Required)
* **ipRules**: [IPRule](#iprule)[]
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[]

## IPRule
### Properties
* **action**: 'Allow'
* **value**: string (Required)

## VirtualNetworkRule
### Properties
* **action**: 'Allow'
* **id**: string (Required)

## Policies
### Properties
* **quarantinePolicy**: [QuarantinePolicy](#quarantinepolicy)
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)
* **trustPolicy**: [TrustPolicy](#trustpolicy)

## QuarantinePolicy
### Properties
* **status**: 'disabled' | 'enabled'

## RetentionPolicy
### Properties
* **days**: int
* **lastUpdatedTime**: string (ReadOnly)
* **status**: 'disabled' | 'enabled'

## TrustPolicy
### Properties
* **status**: 'disabled' | 'enabled'
* **type**: 'Notary'

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
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ReplicationProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **status**: [Status](#status) (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebhookPropertiesCreateParameters
### Properties
* **actions**: 'chart_delete' | 'chart_push' | 'delete' | 'push' | 'quarantine'[] (Required)
* **customHeaders**: [Dictionary<string,String>](#dictionarystringstring) (WriteOnly)
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

