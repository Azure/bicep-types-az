# Microsoft.EventHub @ 2018-01-01-preview

## Resource Microsoft.EventHub/clusters@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:2_properties
* **sku**: ClusterSku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.EventHub/clusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:10_properties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.EventHub/namespaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/ipfilterrules@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:7_properties
* **type**: 'Microsoft.EventHub/namespaces/ipfilterrules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/networkRuleSets@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:29_properties
* **type**: 'Microsoft.EventHub/namespaces/networkRuleSets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/privateEndpointConnections@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.EventHub/namespaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/virtualnetworkrules@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:24_properties
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
* **keySource**: 'Microsoft.KeyVault'
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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## schemas:7_properties
### Properties
* **action**: 'Accept' | 'Reject'
* **filterName**: string
* **ipMask**: string

## schemas:29_properties
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

## schemas:24_properties
### Properties
* **virtualNetworkSubnetId**: string

