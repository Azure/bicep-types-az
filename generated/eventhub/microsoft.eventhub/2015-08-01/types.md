# Microsoft.EventHub @ 2015-08-01

## Resource Microsoft.EventHub/namespaces@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NamespaceProperties](#namespaceproperties)
* **sku**: [Sku](#sku)
* **tags**: [NamespaceCreateOrUpdateParametersTags](#namespacecreateorupdateparameterstags)
* **type**: 'Microsoft.EventHub/namespaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/AuthorizationRules@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties)
* **type**: 'Microsoft.EventHub/namespaces/AuthorizationRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/eventhubs@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [EventHubProperties](#eventhubproperties)
* **type**: 'Microsoft.EventHub/namespaces/eventhubs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/eventhubs/authorizationRules@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties)
* **type**: 'Microsoft.EventHub/namespaces/eventhubs/authorizationRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/eventhubs/consumergroups@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConsumerGroupProperties](#consumergroupproperties)
* **type**: 'Microsoft.EventHub/namespaces/eventhubs/consumergroups' (ReadOnly, DeployTimeConstant)

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

## NamespaceCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SharedAccessAuthorizationRuleProperties
### Properties
* **rights**: 'Listen' | 'Manage' | 'Send'[] (Required)

## EventHubProperties
### Properties
* **createdAt**: string (ReadOnly)
* **messageRetentionInDays**: int
* **partitionCount**: int
* **partitionIds**: string[] (ReadOnly)
* **status**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' | 'ReceiveDisabled' | 'Renaming' | 'Restoring' | 'SendDisabled' | 'Unknown'
* **updatedAt**: string (ReadOnly)

## ConsumerGroupProperties
### Properties
* **createdAt**: string (ReadOnly)
* **eventHubPath**: string (ReadOnly)
* **updatedAt**: string (ReadOnly)
* **userMetadata**: string

