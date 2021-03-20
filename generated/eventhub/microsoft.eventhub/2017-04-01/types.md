# Microsoft.EventHub @ 2017-04-01

## Resource Microsoft.EventHub/namespaces@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:20_properties](#schemas20properties)
* **sku**: [Sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.EventHub/namespaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/authorizationRules@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:1_properties](#schemas1properties)
* **type**: 'Microsoft.EventHub/namespaces/authorizationRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/disasterRecoveryConfigs@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:12_properties](#schemas12properties)
* **type**: 'Microsoft.EventHub/namespaces/disasterRecoveryConfigs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/eventhubs@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:15_properties](#schemas15properties)
* **type**: 'Microsoft.EventHub/namespaces/eventhubs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/eventhubs/authorizationRules@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:1_properties](#schemas1properties)
* **type**: 'Microsoft.EventHub/namespaces/eventhubs/authorizationRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/eventhubs/consumergroups@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:7_properties](#schemas7properties)
* **type**: 'Microsoft.EventHub/namespaces/eventhubs/consumergroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/networkRuleSets@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [schemas:25_properties](#schemas25properties)
* **type**: 'Microsoft.EventHub/namespaces/networkRuleSets' (ReadOnly, DeployTimeConstant)

## schemas:20_properties
### Properties
* **createdAt**: string (ReadOnly)
* **isAutoInflateEnabled**: bool
* **kafkaEnabled**: bool
* **maximumThroughputUnits**: int
* **metricId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **serviceBusEndpoint**: string (ReadOnly)
* **updatedAt**: string (ReadOnly)

## Sku
### Properties
* **capacity**: int
* **name**: 'Basic' | 'Standard' (Required)
* **tier**: 'Basic' | 'Standard'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:1_properties
### Properties
* **rights**: 'Listen' | 'Manage' | 'Send'[] (Required)

## schemas:12_properties
### Properties
* **alternateName**: string
* **partnerNamespace**: string
* **pendingReplicationOperationsCount**: int (ReadOnly)
* **provisioningState**: 'Accepted' | 'Failed' | 'Succeeded' (ReadOnly)
* **role**: 'Primary' | 'PrimaryNotReplicating' | 'Secondary' (ReadOnly)

## schemas:15_properties
### Properties
* **captureDescription**: [CaptureDescription](#capturedescription)
* **createdAt**: string (ReadOnly)
* **messageRetentionInDays**: int
* **partitionCount**: int
* **partitionIds**: string[] (ReadOnly)
* **status**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' | 'ReceiveDisabled' | 'Renaming' | 'Restoring' | 'SendDisabled' | 'Unknown'
* **updatedAt**: string (ReadOnly)

## CaptureDescription
### Properties
* **destination**: [Destination](#destination)
* **enabled**: bool
* **encoding**: 'Avro' | 'AvroDeflate'
* **intervalInSeconds**: int
* **sizeLimitInBytes**: int
* **skipEmptyArchives**: bool

## Destination
### Properties
* **name**: string
* **properties**: [schemas:17_properties](#schemas17properties)

## schemas:17_properties
### Properties
* **archiveNameFormat**: string
* **blobContainer**: string
* **storageAccountResourceId**: string

## schemas:7_properties
### Properties
* **createdAt**: string (ReadOnly)
* **updatedAt**: string (ReadOnly)
* **userMetadata**: string

## schemas:25_properties
### Properties
* **defaultAction**: 'Allow' | 'Deny'
* **ipRules**: [NWRuleSetIpRules](#nwrulesetiprules)[]
* **virtualNetworkRules**: [NWRuleSetVirtualNetworkRules](#nwrulesetvirtualnetworkrules)[]

## NWRuleSetIpRules
### Properties
* **action**: 'Allow'
* **ipMask**: string

## NWRuleSetVirtualNetworkRules
### Properties
* **ignoreMissingVnetServiceEndpoint**: bool
* **subnet**: [Subnet](#subnet)

## Subnet
### Properties
* **id**: string (Required)

