# Microsoft.EventHub @ 2018-01-01-preview

## Resource Microsoft.EventHub/clusters@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:2_properties](#schemas2properties)
* **sku**: [ClusterSku](#clustersku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.EventHub/clusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:10_properties](#schemas10properties)
* **sku**: [Sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.EventHub/namespaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/authorizationRules@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:31_properties](#schemas31properties)
* **type**: 'Microsoft.EventHub/namespaces/authorizationRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/disasterRecoveryConfigs@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:42_properties](#schemas42properties)
* **type**: 'Microsoft.EventHub/namespaces/disasterRecoveryConfigs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/eventhubs@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:47_properties](#schemas47properties)
* **type**: 'Microsoft.EventHub/namespaces/eventhubs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/eventhubs/authorizationRules@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:31_properties](#schemas31properties)
* **type**: 'Microsoft.EventHub/namespaces/eventhubs/authorizationRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/eventhubs/consumergroups@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:37_properties](#schemas37properties)
* **type**: 'Microsoft.EventHub/namespaces/eventhubs/consumergroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/ipfilterrules@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:7_properties](#schemas7properties)
* **type**: 'Microsoft.EventHub/namespaces/ipfilterrules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/networkRuleSets@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [schemas:29_properties](#schemas29properties)
* **type**: 'Microsoft.EventHub/namespaces/networkRuleSets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/privateEndpointConnections@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: 'Microsoft.EventHub/namespaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/virtualnetworkrules@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:24_properties](#schemas24properties)
* **type**: 'Microsoft.EventHub/namespaces/virtualnetworkrules' (ReadOnly, DeployTimeConstant)

## schemas:2_properties
### Properties
* **createdAt**: string (ReadOnly)
* **metricId**: string (ReadOnly)
* **status**: string (ReadOnly)
* **updatedAt**: string (ReadOnly)

## ClusterSku
### Properties
* **capacity**: int
* **name**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Identity
### Properties
* **principalId**: string
* **tenantId**: string
* **type**: 'SystemAssigned'

## schemas:10_properties
### Properties
* **clusterArmId**: string
* **createdAt**: string (ReadOnly)
* **encryption**: [Encryption](#encryption)
* **isAutoInflateEnabled**: bool
* **kafkaEnabled**: bool
* **maximumThroughputUnits**: int
* **metricId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **serviceBusEndpoint**: string (ReadOnly)
* **updatedAt**: string (ReadOnly)
* **zoneRedundant**: bool

## Encryption
### Properties
* **keySource**: 'Microsoft.KeyVault'
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties)[]

## KeyVaultProperties
### Properties
* **keyName**: string
* **keyVaultUri**: string
* **keyVersion**: string

## Sku
### Properties
* **capacity**: int
* **name**: 'Basic' | 'Standard' (Required)
* **tier**: 'Basic' | 'Standard'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:31_properties
### Properties
* **rights**: 'Listen' | 'Manage' | 'Send'[] (Required)

## schemas:42_properties
### Properties
* **alternateName**: string
* **partnerNamespace**: string
* **pendingReplicationOperationsCount**: int (ReadOnly)
* **provisioningState**: 'Accepted' | 'Failed' | 'Succeeded' (ReadOnly)
* **role**: 'Primary' | 'PrimaryNotReplicating' | 'Secondary' (ReadOnly)

## schemas:47_properties
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
* **properties**: [schemas:49_properties](#schemas49properties)

## schemas:49_properties
### Properties
* **archiveNameFormat**: string
* **blobContainer**: string
* **storageAccountResourceId**: string

## schemas:37_properties
### Properties
* **createdAt**: string (ReadOnly)
* **updatedAt**: string (ReadOnly)
* **userMetadata**: string

## schemas:7_properties
### Properties
* **action**: 'Accept' | 'Reject'
* **filterName**: string
* **ipMask**: string

## schemas:29_properties
### Properties
* **defaultAction**: 'Allow' | 'Deny'
* **ipRules**: [NWRuleSetIpRules](#nwrulesetiprules)[]
* **trustedServiceAccessEnabled**: bool
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
* **id**: string

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint)
* **privateLinkServiceConnectionState**: [ConnectionState](#connectionstate)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## PrivateEndpoint
### Properties
* **id**: string

## ConnectionState
### Properties
* **description**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected'

## schemas:24_properties
### Properties
* **virtualNetworkSubnetId**: string

