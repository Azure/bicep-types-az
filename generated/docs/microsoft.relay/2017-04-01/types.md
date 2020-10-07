# Microsoft.Relay @ 2017-04-01

## Microsoft.Relay/namespaces/authorizationRules
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:13_properties (Required)
* **type**: 'Microsoft.Relay/namespaces/authorizationRules' (ReadOnly, DeployTimeConstant)

## schemas:13_properties
### Properties
* **rights**: 'Listen' | 'Manage' | 'Send'[] (Required)

## Microsoft.Relay/namespaces/hybridConnections/authorizationRules
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:13_properties (Required)
* **type**: 'Microsoft.Relay/namespaces/hybridConnections/authorizationRules' (ReadOnly, DeployTimeConstant)

## Microsoft.Relay/namespaces/hybridConnections
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:4_properties
* **type**: 'Microsoft.Relay/namespaces/hybridConnections' (ReadOnly, DeployTimeConstant)

## schemas:4_properties
### Properties
* **createdAt**: string (ReadOnly)
* **listenerCount**: int (ReadOnly)
* **requiresClientAuthorization**: bool
* **updatedAt**: string (ReadOnly)
* **userMetadata**: string

## Microsoft.Relay/namespaces/wcfRelays/authorizationRules
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:13_properties (Required)
* **type**: 'Microsoft.Relay/namespaces/wcfRelays/authorizationRules' (ReadOnly, DeployTimeConstant)

## Microsoft.Relay/namespaces/wcfRelays
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:6_properties
* **type**: 'Microsoft.Relay/namespaces/wcfRelays' (ReadOnly, DeployTimeConstant)

## schemas:6_properties
### Properties
* **createdAt**: string (ReadOnly)
* **isDynamic**: bool (ReadOnly)
* **listenerCount**: int (ReadOnly)
* **relayType**: 'Http' | 'NetTcp'
* **requiresClientAuthorization**: bool
* **requiresTransportSecurity**: bool
* **updatedAt**: string (ReadOnly)
* **userMetadata**: string

## Microsoft.Relay/namespaces
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
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
* **provisioningState**: 'Created' | 'Deleted' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **serviceBusEndpoint**: string (ReadOnly)
* **updatedAt**: string (ReadOnly)

## Sku
### Properties
* **name**: string (Required)
* **tier**: 'Standard'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

