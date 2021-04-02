# Microsoft.Relay @ 2017-04-01

## Resource Microsoft.Relay/namespaces@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelayNamespaceProperties](#relaynamespaceproperties): Properties of the namespace.
* **sku**: [Sku](#sku): SKU of the namespace.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Relay/namespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Relay/namespaces/authorizationRules@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:13_properties](#schemas13properties) (Required): Authorization rule properties.
* **type**: 'Microsoft.Relay/namespaces/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Relay/namespaces/hybridConnections@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:4_properties](#schemas4properties): Properties of the HybridConnection.
* **type**: 'Microsoft.Relay/namespaces/hybridConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Relay/namespaces/hybridConnections/authorizationRules@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:13_properties](#schemas13properties) (Required): Authorization rule properties.
* **type**: 'Microsoft.Relay/namespaces/hybridConnections/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Relay/namespaces/wcfRelays@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:6_properties](#schemas6properties): Properties of the WCF relay.
* **type**: 'Microsoft.Relay/namespaces/wcfRelays' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Relay/namespaces/wcfRelays/authorizationRules@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:13_properties](#schemas13properties) (Required): Authorization rule properties.
* **type**: 'Microsoft.Relay/namespaces/wcfRelays/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## RelayNamespaceProperties
### Properties
* **createdAt**: string (ReadOnly): The time the namespace was created.
* **metricId**: string (ReadOnly): Identifier for Azure Insights metrics.
* **provisioningState**: 'Created' | 'Deleted' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly):
* **serviceBusEndpoint**: string (ReadOnly): Endpoint you can use to perform Service Bus operations.
* **updatedAt**: string (ReadOnly): The time the namespace was updated.

## Sku
### Properties
* **name**: string (Required): Name of this SKU.
* **tier**: 'Standard': The tier of this SKU.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:13_properties
### Properties
* **rights**: 'Listen' | 'Manage' | 'Send'[] (Required): The rights associated with the rule.

## schemas:4_properties
### Properties
* **createdAt**: string (ReadOnly): The time the hybrid connection was created.
* **listenerCount**: int (ReadOnly): The number of listeners for this hybrid connection. Note that min : 1 and max:25 are supported.
* **requiresClientAuthorization**: bool: Returns true if client authorization is needed for this hybrid connection; otherwise, false.
* **updatedAt**: string (ReadOnly): The time the namespace was updated.
* **userMetadata**: string: The usermetadata is a placeholder to store user-defined string data for the hybrid connection endpoint. For example, it can be used to store descriptive data, such as a list of teams and their contact information. Also, user-defined configuration settings can be stored.

## schemas:6_properties
### Properties
* **createdAt**: string (ReadOnly): The time the WCF relay was created.
* **isDynamic**: bool (ReadOnly): Returns true if the relay is dynamic; otherwise, false.
* **listenerCount**: int (ReadOnly): The number of listeners for this relay. Note that min :1 and max:25 are supported.
* **relayType**: 'Http' | 'NetTcp': WCF relay type.
* **requiresClientAuthorization**: bool: Returns true if client authorization is needed for this relay; otherwise, false.
* **requiresTransportSecurity**: bool: Returns true if transport security is needed for this relay; otherwise, false.
* **updatedAt**: string (ReadOnly): The time the namespace was updated.
* **userMetadata**: string: The usermetadata is a placeholder to store user-defined string data for the WCF Relay endpoint. For example, it can be used to store descriptive data, such as list of teams and their contact information. Also, user-defined configuration settings can be stored.

