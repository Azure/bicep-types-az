# Microsoft.EventHub @ 2018-01-01-preview

## Resource Microsoft.EventHub/clusters@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ClusterProperties
* **sku**: ClusterSku
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.EventHub/clusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: EHNamespaceProperties
* **sku**: Sku
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.EventHub/namespaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/authorizationRules@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AuthorizationRuleProperties
* **type**: 'Microsoft.EventHub/namespaces/authorizationRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/disasterRecoveryConfigs@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ArmDisasterRecoveryProperties
* **type**: 'Microsoft.EventHub/namespaces/disasterRecoveryConfigs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/eventhubs@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EventhubProperties
* **type**: 'Microsoft.EventHub/namespaces/eventhubs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/eventhubs/authorizationRules@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AuthorizationRuleProperties
* **type**: 'Microsoft.EventHub/namespaces/eventhubs/authorizationRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/eventhubs/consumergroups@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConsumerGroupProperties
* **type**: 'Microsoft.EventHub/namespaces/eventhubs/consumergroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/ipfilterrules@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IpFilterRuleProperties
* **type**: 'Microsoft.EventHub/namespaces/ipfilterrules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/networkRuleSets@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: NetworkRuleSetProperties
* **type**: 'Microsoft.EventHub/namespaces/networkRuleSets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/privateEndpointConnections@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.EventHub/namespaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/virtualnetworkrules@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualNetworkRuleProperties
* **type**: 'Microsoft.EventHub/namespaces/virtualnetworkrules' (ReadOnly, DeployTimeConstant)

## ClusterProperties
### Properties
* **createdAt**: string (ReadOnly)
* **metricId**: string (ReadOnly)
* **status**: string (ReadOnly)
* **updatedAt**: string (ReadOnly)

## ClusterSku
### Properties
* **capacity**: int
* **name**: 'Dedicated' (Required)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Identity
### Properties
* **principalId**: string
* **tenantId**: string
* **type**: '[object Object]'

## EHNamespaceProperties
### Properties
* **clusterArmId**: string
* **createdAt**: string (ReadOnly)
* **encryption**: Encryption
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
* **keySource**: '[object Object]'
* **keyVaultProperties**: KeyVaultProperties[]

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AuthorizationRuleProperties
### Properties
* **rights**: 'Listen' | 'Manage' | 'Send'[] (Required)

## ArmDisasterRecoveryProperties
### Properties
* **alternateName**: string
* **partnerNamespace**: string
* **pendingReplicationOperationsCount**: int (ReadOnly)
* **provisioningState**: 'Accepted' | 'Failed' | 'Succeeded' (ReadOnly)
* **role**: 'Primary' | 'PrimaryNotReplicating' | 'Secondary' (ReadOnly)

## EventhubProperties
### Properties
* **captureDescription**: CaptureDescription
* **createdAt**: string (ReadOnly)
* **messageRetentionInDays**: int
* **partitionCount**: int
* **partitionIds**: string[] (ReadOnly)
* **status**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' | 'ReceiveDisabled' | 'Renaming' | 'Restoring' | 'SendDisabled' | 'Unknown'
* **updatedAt**: string (ReadOnly)

## CaptureDescription
### Properties
* **destination**: Destination
* **enabled**: bool
* **encoding**: 'Avro' | 'AvroDeflate'
* **intervalInSeconds**: int
* **sizeLimitInBytes**: int
* **skipEmptyArchives**: bool

## Destination
### Properties
* **name**: string
* **properties**: DestinationProperties

## DestinationProperties
### Properties
* **archiveNameFormat**: string
* **blobContainer**: string
* **storageAccountResourceId**: string

## ConsumerGroupProperties
### Properties
* **createdAt**: string (ReadOnly)
* **updatedAt**: string (ReadOnly)
* **userMetadata**: string

## IpFilterRuleProperties
### Properties
* **action**: 'Accept' | 'Reject'
* **filterName**: string
* **ipMask**: string

## NetworkRuleSetProperties
### Properties
* **defaultAction**: 'Allow' | 'Deny'
* **ipRules**: NWRuleSetIpRules[]
* **trustedServiceAccessEnabled**: bool
* **virtualNetworkRules**: NWRuleSetVirtualNetworkRules[]

## NWRuleSetIpRules
### Properties
* **action**: 'Allow'
* **ipMask**: string

## NWRuleSetVirtualNetworkRules
### Properties
* **ignoreMissingVnetServiceEndpoint**: bool
* **subnet**: Subnet

## Subnet
### Properties
* **id**: string

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: PrivateEndpoint
* **privateLinkServiceConnectionState**: ConnectionState
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## PrivateEndpoint
### Properties
* **id**: string

## ConnectionState
### Properties
* **description**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected'

## VirtualNetworkRuleProperties
### Properties
* **virtualNetworkSubnetId**: string

