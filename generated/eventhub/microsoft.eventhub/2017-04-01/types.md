# Microsoft.EventHub @ 2017-04-01

## Resource Microsoft.EventHub/namespaces@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EHNamespaceProperties](#ehnamespaceproperties): Namespace properties supplied for create namespace operation.
* **sku**: [Sku](#sku): Properties of sku resource
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.EventHub/namespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/authorizationRules@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationRuleProperties](#authorizationruleproperties): Properties supplied to create or update AuthorizationRule
* **type**: 'Microsoft.EventHub/namespaces/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/disasterRecoveryConfigs@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ArmDisasterRecoveryProperties](#armdisasterrecoveryproperties): Properties required to the Create Or Update Alias(Disaster Recovery configurations)
* **type**: 'Microsoft.EventHub/namespaces/disasterRecoveryConfigs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/disasterRecoveryConfigs/authorizationRules@2017-04-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationRuleProperties](#authorizationruleproperties) (ReadOnly): Properties supplied to create or update AuthorizationRule
* **type**: 'Microsoft.EventHub/namespaces/disasterRecoveryConfigs/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/eventhubs@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EventhubProperties](#eventhubproperties): Properties supplied to the Create Or Update Event Hub operation.
* **type**: 'Microsoft.EventHub/namespaces/eventhubs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/eventhubs/authorizationRules@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationRuleProperties](#authorizationruleproperties): Properties supplied to create or update AuthorizationRule
* **type**: 'Microsoft.EventHub/namespaces/eventhubs/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/eventhubs/consumergroups@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConsumerGroupProperties](#consumergroupproperties): Single item in List or Get Consumer group operation
* **type**: 'Microsoft.EventHub/namespaces/eventhubs/consumergroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/networkRuleSets@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkRuleSetProperties](#networkrulesetproperties): NetworkRuleSet properties
* **type**: 'Microsoft.EventHub/namespaces/networkRuleSets' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.EventHub/namespaces/authorizationRules@2017-04-01)
* **Resource**: Microsoft.EventHub/namespaces/authorizationRules
* **ApiVersion**: 2017-04-01
* **Output**: [AccessKeys](#accesskeys)

## Function listKeys (Microsoft.EventHub/namespaces/disasterRecoveryConfigs/authorizationRules@2017-04-01)
* **Resource**: Microsoft.EventHub/namespaces/disasterRecoveryConfigs/authorizationRules
* **ApiVersion**: 2017-04-01
* **Output**: [AccessKeys](#accesskeys)

## Function listKeys (Microsoft.EventHub/namespaces/eventhubs/authorizationRules@2017-04-01)
* **Resource**: Microsoft.EventHub/namespaces/eventhubs/authorizationRules
* **ApiVersion**: 2017-04-01
* **Output**: [AccessKeys](#accesskeys)

## AccessKeys
### Properties
* **aliasPrimaryConnectionString**: string (ReadOnly): Primary connection string of the alias if GEO DR is enabled
* **aliasSecondaryConnectionString**: string (ReadOnly): Secondary  connection string of the alias if GEO DR is enabled
* **keyName**: string (ReadOnly): A string that describes the AuthorizationRule.
* **primaryConnectionString**: string (ReadOnly): Primary connection string of the created namespace AuthorizationRule.
* **primaryKey**: string (ReadOnly): A base64-encoded 256-bit primary key for signing and validating the SAS token.
* **secondaryConnectionString**: string (ReadOnly): Secondary connection string of the created namespace AuthorizationRule.
* **secondaryKey**: string (ReadOnly): A base64-encoded 256-bit primary key for signing and validating the SAS token.

## AccessKeys
### Properties
* **aliasPrimaryConnectionString**: string (ReadOnly): Primary connection string of the alias if GEO DR is enabled
* **aliasSecondaryConnectionString**: string (ReadOnly): Secondary  connection string of the alias if GEO DR is enabled
* **keyName**: string (ReadOnly): A string that describes the AuthorizationRule.
* **primaryConnectionString**: string (ReadOnly): Primary connection string of the created namespace AuthorizationRule.
* **primaryKey**: string (ReadOnly): A base64-encoded 256-bit primary key for signing and validating the SAS token.
* **secondaryConnectionString**: string (ReadOnly): Secondary connection string of the created namespace AuthorizationRule.
* **secondaryKey**: string (ReadOnly): A base64-encoded 256-bit primary key for signing and validating the SAS token.

## AccessKeys
### Properties
* **aliasPrimaryConnectionString**: string (ReadOnly): Primary connection string of the alias if GEO DR is enabled
* **aliasSecondaryConnectionString**: string (ReadOnly): Secondary  connection string of the alias if GEO DR is enabled
* **keyName**: string (ReadOnly): A string that describes the AuthorizationRule.
* **primaryConnectionString**: string (ReadOnly): Primary connection string of the created namespace AuthorizationRule.
* **primaryKey**: string (ReadOnly): A base64-encoded 256-bit primary key for signing and validating the SAS token.
* **secondaryConnectionString**: string (ReadOnly): Secondary connection string of the created namespace AuthorizationRule.
* **secondaryKey**: string (ReadOnly): A base64-encoded 256-bit primary key for signing and validating the SAS token.

## ArmDisasterRecoveryProperties
### Properties
* **alternateName**: string: Alternate name specified when alias and namespace names are same.
* **partnerNamespace**: string: ARM Id of the Primary/Secondary eventhub namespace name, which is part of GEO DR pairing
* **pendingReplicationOperationsCount**: int (ReadOnly): Number of entities pending to be replicated.
* **provisioningState**: 'Accepted' | 'Failed' | 'Succeeded' (ReadOnly): Provisioning state of the Alias(Disaster Recovery configuration) - possible values 'Accepted' or 'Succeeded' or 'Failed'
* **role**: 'Primary' | 'PrimaryNotReplicating' | 'Secondary' (ReadOnly): role of namespace in GEO DR - possible values 'Primary' or 'PrimaryNotReplicating' or 'Secondary'

## AuthorizationRuleProperties
### Properties
* **rights**: 'Listen' | 'Manage' | 'Send' | string[] (Required): The rights associated with the rule.

## CaptureDescription
### Properties
* **destination**: [Destination](#destination): Properties of Destination where capture will be stored. (Storage Account, Blob Names)
* **enabled**: bool: A value that indicates whether capture description is enabled.
* **encoding**: 'Avro' | 'AvroDeflate': Enumerates the possible values for the encoding format of capture description. Note: 'AvroDeflate' will be deprecated in New API Version
* **intervalInSeconds**: int: The time window allows you to set the frequency with which the capture to Azure Blobs will happen, value should between 60 to 900 seconds
* **sizeLimitInBytes**: int: The size window defines the amount of data built up in your Event Hub before an capture operation, value should be between 10485760 to 524288000 bytes
* **skipEmptyArchives**: bool: A value that indicates whether to Skip Empty Archives

## ConsumerGroupProperties
### Properties
* **createdAt**: string (ReadOnly): Exact time the message was created.
* **updatedAt**: string (ReadOnly): The exact time the message was updated.
* **userMetadata**: string: User Metadata is a placeholder to store user-defined string data with maximum length 1024. e.g. it can be used to store descriptive data, such as list of teams and their contact information also user-defined configuration settings can be stored.

## Destination
### Properties
* **name**: string: Name for capture destination
* **properties**: [DestinationProperties](#destinationproperties): Properties describing the storage account, blob container and archive name format for capture destination

## DestinationProperties
### Properties
* **archiveNameFormat**: string: Blob naming convention for archive, e.g. {Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}. Here all the parameters (Namespace,EventHub .. etc) are mandatory irrespective of order
* **blobContainer**: string: Blob container Name
* **storageAccountResourceId**: string: Resource id of the storage account to be used to create the blobs

## EHNamespaceProperties
### Properties
* **createdAt**: string (ReadOnly): The time the Namespace was created.
* **isAutoInflateEnabled**: bool: Value that indicates whether AutoInflate is enabled for eventhub namespace.
* **kafkaEnabled**: bool: Value that indicates whether Kafka is enabled for eventhub namespace.
* **maximumThroughputUnits**: int: Upper limit of throughput units when AutoInflate is enabled, value should be within 0 to 20 throughput units. ( '0' if AutoInflateEnabled = true)
* **metricId**: string (ReadOnly): Identifier for Azure Insights metrics.
* **provisioningState**: string (ReadOnly): Provisioning state of the Namespace.
* **serviceBusEndpoint**: string (ReadOnly): Endpoint you can use to perform Service Bus operations.
* **updatedAt**: string (ReadOnly): The time the Namespace was updated.

## EventhubProperties
### Properties
* **captureDescription**: [CaptureDescription](#capturedescription): Properties of capture description
* **createdAt**: string (ReadOnly): Exact time the Event Hub was created.
* **messageRetentionInDays**: int: Number of days to retain the events for this Event Hub, value should be 1 to 7 days
* **partitionCount**: int: Number of partitions created for the Event Hub, allowed values are from 1 to 32 partitions.
* **partitionIds**: string[] (ReadOnly): Current number of shards on the Event Hub.
* **status**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' | 'ReceiveDisabled' | 'Renaming' | 'Restoring' | 'SendDisabled' | 'Unknown': Enumerates the possible values for the status of the Event Hub.
* **updatedAt**: string (ReadOnly): The exact time the message was updated.

## NetworkRuleSetProperties
### Properties
* **defaultAction**: 'Allow' | 'Deny' | string: Default Action for Network Rule Set
* **ipRules**: [NWRuleSetIpRules](#nwrulesetiprules)[]: List of IpRules
* **virtualNetworkRules**: [NWRuleSetVirtualNetworkRules](#nwrulesetvirtualnetworkrules)[]: List VirtualNetwork Rules

## NWRuleSetIpRules
### Properties
* **action**: 'Allow' | string: The IP Filter Action
* **ipMask**: string: IP Mask

## NWRuleSetVirtualNetworkRules
### Properties
* **ignoreMissingVnetServiceEndpoint**: bool: Value that indicates whether to ignore missing VNet Service Endpoint
* **subnet**: [Subnet](#subnet): Subnet properties

## Sku
### Properties
* **capacity**: int: The Event Hubs throughput units, value should be 0 to 20 throughput units.
* **name**: 'Basic' | 'Standard' | string (Required): Name of this SKU.
* **tier**: 'Basic' | 'Standard' | string: The billing tier of this particular SKU.

## Subnet
### Properties
* **id**: string (Required): Resource ID of Virtual Network Subnet

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

