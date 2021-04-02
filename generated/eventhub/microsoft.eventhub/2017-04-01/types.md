# Microsoft.EventHub @ 2017-04-01

## Resource Microsoft.EventHub/namespaces@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:20_properties](#schemas20properties): Namespace properties supplied for create namespace operation.
* **sku**: [Sku](#sku): SKU parameters supplied to the create namespace operation
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.EventHub/namespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/authorizationRules@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:1_properties](#schemas1properties): Properties supplied to create or update AuthorizationRule
* **type**: 'Microsoft.EventHub/namespaces/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/disasterRecoveryConfigs@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:12_properties](#schemas12properties): Properties required to the Create Or Update Alias(Disaster Recovery configurations)
* **type**: 'Microsoft.EventHub/namespaces/disasterRecoveryConfigs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/eventhubs@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:15_properties](#schemas15properties): Properties supplied to the Create Or Update Event Hub operation.
* **type**: 'Microsoft.EventHub/namespaces/eventhubs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/eventhubs/authorizationRules@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:1_properties](#schemas1properties): Properties supplied to create or update AuthorizationRule
* **type**: 'Microsoft.EventHub/namespaces/eventhubs/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/eventhubs/consumergroups@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:7_properties](#schemas7properties): Single item in List or Get Consumer group operation
* **type**: 'Microsoft.EventHub/namespaces/eventhubs/consumergroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventHub/namespaces/networkRuleSets@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:25_properties](#schemas25properties): NetworkRuleSet properties
* **type**: 'Microsoft.EventHub/namespaces/networkRuleSets' (ReadOnly, DeployTimeConstant): The resource type

## schemas:20_properties
### Properties
* **createdAt**: string (ReadOnly): The time the Namespace was created.
* **isAutoInflateEnabled**: bool: Value that indicates whether AutoInflate is enabled for eventhub namespace.
* **kafkaEnabled**: bool: Value that indicates whether Kafka is enabled for eventhub namespace.
* **maximumThroughputUnits**: int: Upper limit of throughput units when AutoInflate is enabled, value should be within 0 to 20 throughput units. ( '0' if AutoInflateEnabled = true)
* **metricId**: string (ReadOnly): Identifier for Azure Insights metrics.
* **provisioningState**: string (ReadOnly): Provisioning state of the Namespace.
* **serviceBusEndpoint**: string (ReadOnly): Endpoint you can use to perform Service Bus operations.
* **updatedAt**: string (ReadOnly): The time the Namespace was updated.

## Sku
### Properties
* **capacity**: int: The Event Hubs throughput units, value should be 0 to 20 throughput units.
* **name**: 'Basic' | 'Standard' (Required): Name of this SKU.
* **tier**: 'Basic' | 'Standard': The billing tier of this particular SKU.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:1_properties
### Properties
* **rights**: 'Listen' | 'Manage' | 'Send'[] (Required): The rights associated with the rule.

## schemas:12_properties
### Properties
* **alternateName**: string: Alternate name specified when alias and namespace names are same.
* **partnerNamespace**: string: ARM Id of the Primary/Secondary eventhub namespace name, which is part of GEO DR pairing
* **pendingReplicationOperationsCount**: int (ReadOnly): Number of entities pending to be replicated.
* **provisioningState**: 'Accepted' | 'Failed' | 'Succeeded' (ReadOnly): Provisioning state of the Alias(Disaster Recovery configuration) - possible values 'Accepted' or 'Succeeded' or 'Failed'.
* **role**: 'Primary' | 'PrimaryNotReplicating' | 'Secondary' (ReadOnly): role of namespace in GEO DR - possible values 'Primary' or 'PrimaryNotReplicating' or 'Secondary'.

## schemas:15_properties
### Properties
* **captureDescription**: [CaptureDescription](#capturedescription): Properties to configure capture description for eventhub
* **createdAt**: string (ReadOnly): Exact time the Event Hub was created.
* **messageRetentionInDays**: int: Number of days to retain the events for this Event Hub, value should be 1 to 7 days
* **partitionCount**: int: Number of partitions created for the Event Hub, allowed values are from 1 to 32 partitions.
* **partitionIds**: string[] (ReadOnly): Current number of shards on the Event Hub.
* **status**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' | 'ReceiveDisabled' | 'Renaming' | 'Restoring' | 'SendDisabled' | 'Unknown': Enumerates the possible values for the status of the Event Hub.
* **updatedAt**: string (ReadOnly): The exact time the message was updated.

## CaptureDescription
### Properties
* **destination**: [Destination](#destination): Capture storage details for capture description
* **enabled**: bool: A value that indicates whether capture description is enabled.
* **encoding**: 'Avro' | 'AvroDeflate': Enumerates the possible values for the encoding format of capture description. Note: 'AvroDeflate' will be deprecated in New API Version.
* **intervalInSeconds**: int: The time window allows you to set the frequency with which the capture to Azure Blobs will happen, value should between 60 to 900 seconds
* **sizeLimitInBytes**: int: The size window defines the amount of data built up in your Event Hub before an capture operation, value should be between 10485760 to 524288000 bytes
* **skipEmptyArchives**: bool: A value that indicates whether to Skip Empty Archives

## Destination
### Properties
* **name**: string: Name for capture destination
* **properties**: [schemas:17_properties](#schemas17properties): Properties describing the storage account, blob container and archive name format for capture destination

## schemas:17_properties
### Properties
* **archiveNameFormat**: string: Blob naming convention for archive, e.g. {Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}. Here all the parameters (Namespace,EventHub .. etc) are mandatory irrespective of order
* **blobContainer**: string: Blob container Name
* **storageAccountResourceId**: string: Resource id of the storage account to be used to create the blobs

## schemas:7_properties
### Properties
* **createdAt**: string (ReadOnly): Exact time the message was created.
* **updatedAt**: string (ReadOnly): The exact time the message was updated.
* **userMetadata**: string: User Metadata is a placeholder to store user-defined string data with maximum length 1024. e.g. it can be used to store descriptive data, such as list of teams and their contact information also user-defined configuration settings can be stored.

## schemas:25_properties
### Properties
* **defaultAction**: 'Allow' | 'Deny': Default Action for Network Rule Set.
* **ipRules**: [NWRuleSetIpRules](#nwrulesetiprules)[]: List of IpRules
* **virtualNetworkRules**: [NWRuleSetVirtualNetworkRules](#nwrulesetvirtualnetworkrules)[]: List VirtualNetwork Rules

## NWRuleSetIpRules
### Properties
* **action**: 'Allow': The IP Filter Action.
* **ipMask**: string: IP Mask

## NWRuleSetVirtualNetworkRules
### Properties
* **ignoreMissingVnetServiceEndpoint**: bool: Value that indicates whether to ignore missing VNet Service Endpoint
* **subnet**: [Subnet](#subnet): Properties supplied for Subnet

## Subnet
### Properties
* **id**: string (Required): Resource ID of Virtual Network Subnet

