# Microsoft.Relay @ 2017-04-01

## Resource Microsoft.Relay/namespaces@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelayNamespaceProperties](#relaynamespaceproperties): Description of Relay namespace
* **sku**: [Sku](#sku): SKU of the namespace.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Relay/namespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Relay/namespaces/authorizationRules@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationRuleProperties](#authorizationruleproperties) (Required): Authorization rule properties.
* **type**: 'Microsoft.Relay/namespaces/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Relay/namespaces/hybridConnections@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridConnectionProperties](#hybridconnectionproperties): Properties of the HybridConnection.
* **type**: 'Microsoft.Relay/namespaces/hybridConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Relay/namespaces/hybridConnections/authorizationRules@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationRuleProperties](#authorizationruleproperties) (Required): Authorization rule properties.
* **type**: 'Microsoft.Relay/namespaces/hybridConnections/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Relay/namespaces/wcfRelays@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WcfRelayProperties](#wcfrelayproperties): Properties of the WCF relay.
* **type**: 'Microsoft.Relay/namespaces/wcfRelays' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Relay/namespaces/wcfRelays/authorizationRules@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationRuleProperties](#authorizationruleproperties) (Required): Authorization rule properties.
* **type**: 'Microsoft.Relay/namespaces/wcfRelays/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.Relay/namespaces/authorizationRules@2017-04-01)
* **Resource**: Microsoft.Relay/namespaces/authorizationRules
* **ApiVersion**: 2017-04-01
* **Output**: [AccessKeys](#accesskeys)

## Function listKeys (Microsoft.Relay/namespaces/hybridConnections/authorizationRules@2017-04-01)
* **Resource**: Microsoft.Relay/namespaces/hybridConnections/authorizationRules
* **ApiVersion**: 2017-04-01
* **Output**: [AccessKeys](#accesskeys)

## Function listKeys (Microsoft.Relay/namespaces/wcfRelays/authorizationRules@2017-04-01)
* **Resource**: Microsoft.Relay/namespaces/wcfRelays/authorizationRules
* **ApiVersion**: 2017-04-01
* **Output**: [AccessKeys](#accesskeys)

## AccessKeys
### Properties
* **keyName**: string (ReadOnly): A string that describes the authorization rule.
* **primaryConnectionString**: string (ReadOnly): Primary connection string of the created namespace authorization rule.
* **primaryKey**: string (ReadOnly): A base64-encoded 256-bit primary key for signing and validating the SAS token.
* **secondaryConnectionString**: string (ReadOnly): Secondary connection string of the created namespace authorization rule.
* **secondaryKey**: string (ReadOnly): A base64-encoded 256-bit secondary key for signing and validating the SAS token.

## AccessKeys
### Properties
* **keyName**: string (ReadOnly): A string that describes the authorization rule.
* **primaryConnectionString**: string (ReadOnly): Primary connection string of the created namespace authorization rule.
* **primaryKey**: string (ReadOnly): A base64-encoded 256-bit primary key for signing and validating the SAS token.
* **secondaryConnectionString**: string (ReadOnly): Secondary connection string of the created namespace authorization rule.
* **secondaryKey**: string (ReadOnly): A base64-encoded 256-bit secondary key for signing and validating the SAS token.

## AccessKeys
### Properties
* **keyName**: string (ReadOnly): A string that describes the authorization rule.
* **primaryConnectionString**: string (ReadOnly): Primary connection string of the created namespace authorization rule.
* **primaryKey**: string (ReadOnly): A base64-encoded 256-bit primary key for signing and validating the SAS token.
* **secondaryConnectionString**: string (ReadOnly): Secondary connection string of the created namespace authorization rule.
* **secondaryKey**: string (ReadOnly): A base64-encoded 256-bit secondary key for signing and validating the SAS token.

## AuthorizationRuleProperties
### Properties
* **rights**: 'Listen' | 'Manage' | 'Send'[] (Required): The rights associated with the rule.

## HybridConnectionProperties
### Properties
* **createdAt**: string (ReadOnly): The time the hybrid connection was created.
* **listenerCount**: int (ReadOnly): The number of listeners for this hybrid connection. Note that min : 1 and max:25 are supported.
* **requiresClientAuthorization**: bool: Returns true if client authorization is needed for this hybrid connection; otherwise, false.
* **updatedAt**: string (ReadOnly): The time the namespace was updated.
* **userMetadata**: string: The usermetadata is a placeholder to store user-defined string data for the hybrid connection endpoint. For example, it can be used to store descriptive data, such as a list of teams and their contact information. Also, user-defined configuration settings can be stored.

## RelayNamespaceProperties
### Properties
* **createdAt**: string (ReadOnly): The time the namespace was created.
* **metricId**: string (ReadOnly): Identifier for Azure Insights metrics.
* **provisioningState**: 'Created' | 'Deleted' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **serviceBusEndpoint**: string (ReadOnly): Endpoint you can use to perform Service Bus operations.
* **updatedAt**: string (ReadOnly): The time the namespace was updated.

## Sku
### Properties
* **name**: 'Standard' (Required): Name of this SKU.
* **tier**: 'Standard': The tier of this SKU.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WcfRelayProperties
### Properties
* **createdAt**: string (ReadOnly): The time the WCF relay was created.
* **isDynamic**: bool (ReadOnly): Returns true if the relay is dynamic; otherwise, false.
* **listenerCount**: int (ReadOnly): The number of listeners for this relay. Note that min :1 and max:25 are supported.
* **relayType**: 'Http' | 'NetTcp': WCF relay type.
* **requiresClientAuthorization**: bool: Returns true if client authorization is needed for this relay; otherwise, false.
* **requiresTransportSecurity**: bool: Returns true if transport security is needed for this relay; otherwise, false.
* **updatedAt**: string (ReadOnly): The time the namespace was updated.
* **userMetadata**: string: The usermetadata is a placeholder to store user-defined string data for the WCF Relay endpoint. For example, it can be used to store descriptive data, such as list of teams and their contact information. Also, user-defined configuration settings can be stored.

