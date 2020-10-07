# Microsoft.ServiceBus @ 2018-01-01-preview

## Microsoft.ServiceBus/namespaces/ipfilterrules
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:0_properties
* **type**: 'Microsoft.ServiceBus/namespaces/ipfilterrules' (ReadOnly, DeployTimeConstant)

## schemas:0_properties
### Properties
* **action**: 'Accept' | 'Reject'
* **filterName**: string
* **ipMask**: string

## Microsoft.ServiceBus/namespaces/networkrulesets
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:22_properties
* **type**: 'Microsoft.ServiceBus/namespaces/networkrulesets' (ReadOnly, DeployTimeConstant)

## schemas:22_properties
### Properties
* **defaultAction**: 'Allow' | 'Deny'
* **ipRules**: NWRuleSetIpRules[]
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

## Microsoft.ServiceBus/namespaces/privateEndpointConnections
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.ServiceBus/namespaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

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

## Microsoft.ServiceBus/namespaces/virtualnetworkrules
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:23_properties
* **type**: 'Microsoft.ServiceBus/namespaces/virtualnetworkrules' (ReadOnly, DeployTimeConstant)

## schemas:23_properties
### Properties
* **virtualNetworkSubnetId**: string

## Microsoft.ServiceBus/namespaces
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SBNamespaceProperties
* **sku**: SBSku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ServiceBus/namespaces' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string
* **tenantId**: string
* **type**: 'SystemAssigned'

## SBNamespaceProperties
### Properties
* **createdAt**: string (ReadOnly)
* **encryption**: Encryption
* **metricId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **serviceBusEndpoint**: string (ReadOnly)
* **updatedAt**: string (ReadOnly)
* **zoneRedundant**: bool

## Encryption
### Properties
* **keySource**: 'Microsoft.KeyVault'
* **keyVaultProperties**: KeyVaultProperties

## KeyVaultProperties
### Properties
* **keyName**: string
* **keyVaultUri**: string

## SBSku
### Properties
* **capacity**: int
* **name**: 'Basic' | 'Premium' | 'Standard' (Required)
* **tier**: 'Basic' | 'Premium' | 'Standard'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

