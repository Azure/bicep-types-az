# Microsoft.Relay @ 2016-07-01

## Resource Microsoft.Relay/namespaces@2016-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RelayNamespaceProperties](#relaynamespaceproperties)
* **sku**: [Sku](#sku)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.Relay/namespaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Relay/namespaces/AuthorizationRules@2016-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AuthorizationRuleProperties](#authorizationruleproperties) (Required)
* **type**: 'Microsoft.Relay/namespaces/AuthorizationRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Relay/namespaces/HybridConnections@2016-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [HybridConnectionProperties](#hybridconnectionproperties)
* **type**: 'Microsoft.Relay/namespaces/HybridConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Relay/namespaces/HybridConnections/authorizationRules@2016-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AuthorizationRuleProperties](#authorizationruleproperties) (Required)
* **type**: 'Microsoft.Relay/namespaces/HybridConnections/authorizationRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Relay/namespaces/WcfRelays@2016-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WcfRelayProperties](#wcfrelayproperties)
* **type**: 'Microsoft.Relay/namespaces/WcfRelays' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Relay/namespaces/WcfRelays/authorizationRules@2016-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AuthorizationRuleProperties](#authorizationruleproperties) (Required)
* **type**: 'Microsoft.Relay/namespaces/WcfRelays/authorizationRules' (ReadOnly, DeployTimeConstant)

## RelayNamespaceProperties
### Properties
* **createdAt**: string (ReadOnly)
* **metricId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **serviceBusEndpoint**: string (ReadOnly)
* **updatedAt**: string (ReadOnly)

## Sku
### Properties
* **name**: 'Standard' (Required)
* **tier**: 'Standard' (Required)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AuthorizationRuleProperties
### Properties
* **rights**: 'Listen' | 'Manage' | 'Send'[] (Required)

## HybridConnectionProperties
### Properties
* **createdAt**: string (ReadOnly)
* **listenerCount**: int (ReadOnly)
* **requiresClientAuthorization**: bool
* **updatedAt**: string (ReadOnly)
* **userMetadata**: string

## WcfRelayProperties
### Properties
* **createdAt**: string (ReadOnly)
* **isDynamic**: bool (ReadOnly)
* **listenerCount**: int (ReadOnly)
* **relayType**: 'Http' | 'NetTcp'
* **requiresClientAuthorization**: bool
* **requiresTransportSecurity**: bool
* **updatedAt**: string (ReadOnly)
* **userMetadata**: string

