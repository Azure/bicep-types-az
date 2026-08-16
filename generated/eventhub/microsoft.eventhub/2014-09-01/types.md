# Microsoft.EventHub @ 2014-09-01

## Resource Microsoft.EventHub/namespaces@2014-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Namespace location.
* **name**: string {minLength: 6, maxLength: 50} (Required, DeployTimeConstant): The resource name
* **properties**: [NamespaceProperties](#namespaceproperties): Properties of the Namespace supplied for create or update Namespace operation
* **sku**: [Sku](#sku): SKU parameters supplied to the create Namespace operation
* **tags**: [NamespaceCreateOrUpdateParametersTags](#namespacecreateorupdateparameterstags): Namespace tags.
* **type**: 'Microsoft.EventHub/namespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/AuthorizationRules@2014-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Data center location.
* **name**: string {minLength: 1, maxLength: 50} (Required, DeployTimeConstant): The resource name
* **properties**: [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties): Properties supplied to create or update SharedAccessAuthorizationRule
* **type**: 'Microsoft.EventHub/namespaces/AuthorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/eventhubs@2014-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Location of the resource.
* **name**: string {minLength: 1, maxLength: 50} (Required, DeployTimeConstant): The resource name
* **properties**: [EventHubProperties](#eventhubproperties): Properties supplied to the Create Or Update Event Hub operation.
* **type**: 'Microsoft.EventHub/namespaces/eventhubs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/eventhubs/authorizationRules@2014-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Data center location.
* **name**: string {minLength: 1, maxLength: 50} (Required, DeployTimeConstant): The resource name
* **properties**: [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties): Properties supplied to create or update SharedAccessAuthorizationRule
* **type**: 'Microsoft.EventHub/namespaces/eventhubs/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/eventhubs/consumergroups@2014-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Location of the resource.
* **name**: string {minLength: 1, maxLength: 50} (Required, DeployTimeConstant): The resource name
* **properties**: [ConsumerGroupProperties](#consumergroupproperties): Properties supplied to the Create Or Update Consumer Group operation.
* **type**: 'Microsoft.EventHub/namespaces/eventhubs/consumergroups' (ReadOnly, DeployTimeConstant): The resource type

## Function AuthorizationRules (Microsoft.EventHub/namespaces@2014-09-01)
* **Resource**: Microsoft.EventHub/namespaces
* **ApiVersion**: 2014-09-01
* **Output**: [SharedAccessAuthorizationRuleListResult](#sharedaccessauthorizationrulelistresult)

## ConsumerGroupProperties
### Properties
* **createdAt**: string (ReadOnly): Exact time the message was created.
* **eventHubPath**: string (ReadOnly): The path of the Event Hub.
* **updatedAt**: string (ReadOnly): The exact time the message was updated.
* **userMetadata**: string: The user metadata.

## EventHubProperties
### Properties
* **createdAt**: string (ReadOnly): Exact time the Event Hub was created.
* **messageRetentionInDays**: int: Number of days to retain the events for this Event Hub.
* **partitionCount**: int: Number of partitions created for the Event Hub.
* **partitionIds**: string[] (ReadOnly): Current number of shards on the Event Hub.
* **status**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' | 'ReceiveDisabled' | 'Renaming' | 'Restoring' | 'SendDisabled' | 'Unknown': Enumerates the possible values for the status of the Event Hub.
* **updatedAt**: string (ReadOnly): The exact time the message was updated.

## NamespaceCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NamespaceProperties
### Properties
* **createdAt**: string: The time the Namespace was created.
* **enabled**: bool: Specifies whether this instance is enabled.
* **metricId**: string (ReadOnly): Identifier for Azure Insights metrics
* **provisioningState**: string: Provisioning state of the Namespace.
* **serviceBusEndpoint**: string: Endpoint you can use to perform Service Bus operations.
* **status**: 'Activating' | 'Active' | 'Created' | 'Creating' | 'Disabled' | 'Disabling' | 'Enabling' | 'Failed' | 'Removed' | 'Removing' | 'SoftDeleted' | 'SoftDeleting' | 'Unknown': State of the Namespace.
* **updatedAt**: string: The time the Namespace was updated.

## SharedAccessAuthorizationRuleListResult
### Properties
* **nextLink**: string: Link to the next set of results. Not empty if Value contains an incomplete list of Authorization Rules
* **value**: [SharedAccessAuthorizationRuleResource](#sharedaccessauthorizationruleresource)[]: Result of the List Authorization Rules operation.

## SharedAccessAuthorizationRuleProperties
### Properties
* **rights**: ('Listen' | 'Manage' | 'Send')[] (Required): The rights associated with the rule.

## SharedAccessAuthorizationRuleResource
### Properties
* **id**: string (ReadOnly): Resource Id
* **location**: string: Resource location
* **name**: string (ReadOnly): Resource name
* **properties**: [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties): Properties supplied to create or update SharedAccessAuthorizationRule
* **type**: string (ReadOnly): Resource type

## Sku
### Properties
* **capacity**: int: The Event Hubs throughput units.
* **name**: 'Basic' | 'Standard' | string: Name of this SKU.
* **tier**: 'Basic' | 'Premium' | 'Standard' | string (Required): The billing tier of this particular SKU.

