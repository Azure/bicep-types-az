# Microsoft.EventHub @ 2015-08-01

## Resource Microsoft.EventHub/namespaces@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: NamespaceProperties
* **sku**: Sku
* **tags**: NamespaceCreateOrUpdateParametersTags
* **type**: 'Microsoft.EventHub/namespaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/AuthorizationRules@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: SharedAccessAuthorizationRuleProperties
* **type**: 'Microsoft.EventHub/namespaces/AuthorizationRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/eventhubs@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EventHubProperties
* **type**: 'Microsoft.EventHub/namespaces/eventhubs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/eventhubs/authorizationRules@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: SharedAccessAuthorizationRuleProperties
* **type**: 'Microsoft.EventHub/namespaces/eventhubs/authorizationRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/eventhubs/consumergroups@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConsumerGroupProperties
* **type**: 'Microsoft.EventHub/namespaces/eventhubs/consumergroups' (ReadOnly, DeployTimeConstant)

## NamespaceProperties
### Properties
* **createdAt**: string
* **enabled**: bool
* **metricId**: string (ReadOnly)
* **provisioningState**: string
* **serviceBusEndpoint**: string
* **updatedAt**: string

## Sku
### Properties
* **capacity**: int
* **name**: 'Basic' | 'Standard'
* **tier**: 'Basic' | 'Premium' | 'Standard' (Required)

## NamespaceCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SharedAccessAuthorizationRuleProperties
### Properties
* **rights**: array (Required)

## EventHubProperties
### Properties
* **createdAt**: string (ReadOnly)
* **messageRetentionInDays**: int
* **partitionCount**: int
* **partitionIds**: string[] (ReadOnly)
* **updatedAt**: string (ReadOnly)

## ConsumerGroupProperties
### Properties
* **createdAt**: string (ReadOnly)
* **eventHubPath**: string (ReadOnly)
* **updatedAt**: string (ReadOnly)
* **userMetadata**: string

