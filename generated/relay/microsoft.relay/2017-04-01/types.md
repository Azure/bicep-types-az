# Microsoft.Relay @ 2017-04-01

## Resource Microsoft.Relay/namespaces@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RelayNamespaceProperties](#relaynamespaceproperties)
* **sku**: [Sku](#sku)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.Relay/namespaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Relay/namespaces/authorizationRules@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AuthorizationRuleProperties](#authorizationruleproperties) (Required)
* **type**: 'Microsoft.Relay/namespaces/authorizationRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Relay/namespaces/hybridConnections@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [HybridConnectionProperties](#hybridconnectionproperties)
* **type**: 'Microsoft.Relay/namespaces/hybridConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Relay/namespaces/hybridConnections/authorizationRules@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AuthorizationRuleProperties](#authorizationruleproperties) (Required)
* **type**: 'Microsoft.Relay/namespaces/hybridConnections/authorizationRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Relay/namespaces/wcfRelays@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WcfRelayProperties](#wcfrelayproperties)
* **type**: 'Microsoft.Relay/namespaces/wcfRelays' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Relay/namespaces/wcfRelays/authorizationRules@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AuthorizationRuleProperties](#authorizationruleproperties) (Required)
* **type**: 'Microsoft.Relay/namespaces/wcfRelays/authorizationRules' (ReadOnly, DeployTimeConstant)

## RelayNamespaceProperties
### Properties
* **createdAt**: string (ReadOnly)
* **metricId**: string (ReadOnly)
* **provisioningState**: 'Created' | 'Deleted' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **serviceBusEndpoint**: string (ReadOnly)
* **updatedAt**: string (ReadOnly)

## Sku
### Properties
* **name**: 'Standard' (Required)
* **tier**: 'Standard'

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

