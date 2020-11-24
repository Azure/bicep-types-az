# Microsoft.Relay @ 2016-07-01

## Microsoft.Relay/namespaces
### Properties
* **apiVersion**: '2016-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RelayNamespaceProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Relay/namespaces' (ReadOnly, DeployTimeConstant)

## RelayNamespaceProperties
### Properties
* **createdAt**: string (ReadOnly)
* **metricId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **serviceBusEndpoint**: string (ReadOnly)
* **updatedAt**: string (ReadOnly)

## Sku
### Properties
* **name**: string (Required)
* **tier**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Relay/namespaces/AuthorizationRules
### Properties
* **apiVersion**: '2016-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AuthorizationRuleProperties (Required)
* **type**: 'Microsoft.Relay/namespaces/AuthorizationRules' (ReadOnly, DeployTimeConstant)

## AuthorizationRuleProperties
### Properties
* **rights**: 'Listen' | 'Manage' | 'Send'[] (Required)

## Microsoft.Relay/namespaces/HybridConnections
### Properties
* **apiVersion**: '2016-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: HybridConnectionProperties
* **type**: 'Microsoft.Relay/namespaces/HybridConnections' (ReadOnly, DeployTimeConstant)

## HybridConnectionProperties
### Properties
* **createdAt**: string (ReadOnly)
* **listenerCount**: int (ReadOnly)
* **requiresClientAuthorization**: bool
* **updatedAt**: string (ReadOnly)
* **userMetadata**: string

## Microsoft.Relay/namespaces/HybridConnections/authorizationRules
### Properties
* **apiVersion**: '2016-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AuthorizationRuleProperties (Required)
* **type**: 'Microsoft.Relay/namespaces/HybridConnections/authorizationRules' (ReadOnly, DeployTimeConstant)

## Microsoft.Relay/namespaces/WcfRelays
### Properties
* **apiVersion**: '2016-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WcfRelayProperties
* **type**: 'Microsoft.Relay/namespaces/WcfRelays' (ReadOnly, DeployTimeConstant)

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

## Microsoft.Relay/namespaces/WcfRelays/authorizationRules
### Properties
* **apiVersion**: '2016-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AuthorizationRuleProperties (Required)
* **type**: 'Microsoft.Relay/namespaces/WcfRelays/authorizationRules' (ReadOnly, DeployTimeConstant)

