# Microsoft.EventHub @ 2015-08-01

## Microsoft.EventHub/namespaces/AuthorizationRules
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: SharedAccessAuthorizationRuleProperties
* **type**: 'Microsoft.EventHub/namespaces/AuthorizationRules' (ReadOnly, DeployTimeConstant)

## SharedAccessAuthorizationRuleProperties
### Properties
* **rights**: 'Listen' | 'Manage' | 'Send'[] (Required)

## Microsoft.EventHub/namespaces/eventhubs/authorizationRules
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: SharedAccessAuthorizationRuleProperties
* **type**: 'Microsoft.EventHub/namespaces/eventhubs/authorizationRules' (ReadOnly, DeployTimeConstant)

## Microsoft.EventHub/namespaces/eventhubs/consumergroups
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConsumerGroupProperties
* **type**: 'Microsoft.EventHub/namespaces/eventhubs/consumergroups' (ReadOnly, DeployTimeConstant)

## ConsumerGroupProperties
### Properties
* **createdAt**: string (ReadOnly)
* **eventHubPath**: string (ReadOnly)
* **updatedAt**: string (ReadOnly)
* **userMetadata**: string

## Microsoft.EventHub/namespaces/eventhubs
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EventHubProperties
* **type**: 'Microsoft.EventHub/namespaces/eventhubs' (ReadOnly, DeployTimeConstant)

## EventHubProperties
### Properties
* **createdAt**: string (ReadOnly)
* **messageRetentionInDays**: int
* **partitionCount**: int
* **partitionIds**: string[] (ReadOnly)
* **status**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' | 'ReceiveDisabled' | 'Renaming' | 'Restoring' | 'SendDisabled' | 'Unknown'
* **updatedAt**: string (ReadOnly)

## Microsoft.EventHub/namespaces
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: NamespaceProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.EventHub/namespaces' (ReadOnly, DeployTimeConstant)

## NamespaceProperties
### Properties
* **createdAt**: string
* **enabled**: bool
* **metricId**: string (ReadOnly)
* **provisioningState**: string
* **serviceBusEndpoint**: string
* **status**: 'Activating' | 'Active' | 'Created' | 'Creating' | 'Disabled' | 'Disabling' | 'Enabling' | 'Failed' | 'Removed' | 'Removing' | 'SoftDeleted' | 'SoftDeleting' | 'Unknown'
* **updatedAt**: string

## Sku
### Properties
* **capacity**: int
* **name**: 'Basic' | 'Standard'
* **tier**: 'Basic' | 'Premium' | 'Standard' (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

