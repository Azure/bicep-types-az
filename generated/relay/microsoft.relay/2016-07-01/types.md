# Microsoft.Relay @ 2016-07-01

## Resource Microsoft.Relay/namespaces@2016-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelayNamespaceProperties](#relaynamespaceproperties): Description of Relay Namespace
* **sku**: [Sku](#sku): Sku of the Namespace.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags
* **type**: 'Microsoft.Relay/namespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Relay/namespaces/AuthorizationRules@2016-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationRuleProperties](#authorizationruleproperties) (Required): Authorization Rule properties
* **type**: 'Microsoft.Relay/namespaces/AuthorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Relay/namespaces/HybridConnections@2016-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridConnectionProperties](#hybridconnectionproperties): Properties of HybridConnection
* **type**: 'Microsoft.Relay/namespaces/HybridConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Relay/namespaces/HybridConnections/authorizationRules@2016-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationRuleProperties](#authorizationruleproperties) (Required): Authorization Rule properties
* **type**: 'Microsoft.Relay/namespaces/HybridConnections/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Relay/namespaces/WcfRelays@2016-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WcfRelayProperties](#wcfrelayproperties): Properties of WcfRelay
* **type**: 'Microsoft.Relay/namespaces/WcfRelays' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Relay/namespaces/WcfRelays/authorizationRules@2016-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationRuleProperties](#authorizationruleproperties) (Required): Authorization Rule properties
* **type**: 'Microsoft.Relay/namespaces/WcfRelays/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.Relay/namespaces/AuthorizationRules@2016-07-01)
* **Resource**: Microsoft.Relay/namespaces/AuthorizationRules
* **ApiVersion**: 2016-07-01
* **Output**: [AuthorizationRuleKeys](#authorizationrulekeys)

## Function listKeys (Microsoft.Relay/namespaces/HybridConnections/authorizationRules@2016-07-01)
* **Resource**: Microsoft.Relay/namespaces/HybridConnections/authorizationRules
* **ApiVersion**: 2016-07-01
* **Output**: [AuthorizationRuleKeys](#authorizationrulekeys)

## Function listKeys (Microsoft.Relay/namespaces/WcfRelays/authorizationRules@2016-07-01)
* **Resource**: Microsoft.Relay/namespaces/WcfRelays/authorizationRules
* **ApiVersion**: 2016-07-01
* **Output**: [AuthorizationRuleKeys](#authorizationrulekeys)

## AuthorizationRuleKeys
### Properties
* **keyName**: string: A string that describes the authorization rule
* **primaryConnectionString**: string: PrimaryConnectionString of the created Namespace AuthorizationRule.
* **primaryKey**: string: A base64-encoded 256-bit primary key for signing and validating the SAS token
* **secondaryConnectionString**: string: SecondaryConnectionString of the created Namespace AuthorizationRule
* **secondaryKey**: string: A base64-encoded 256-bit secondary key for signing and validating the SAS token

## AuthorizationRuleKeys
### Properties
* **keyName**: string: A string that describes the authorization rule
* **primaryConnectionString**: string: PrimaryConnectionString of the created Namespace AuthorizationRule.
* **primaryKey**: string: A base64-encoded 256-bit primary key for signing and validating the SAS token
* **secondaryConnectionString**: string: SecondaryConnectionString of the created Namespace AuthorizationRule
* **secondaryKey**: string: A base64-encoded 256-bit secondary key for signing and validating the SAS token

## AuthorizationRuleKeys
### Properties
* **keyName**: string: A string that describes the authorization rule
* **primaryConnectionString**: string: PrimaryConnectionString of the created Namespace AuthorizationRule.
* **primaryKey**: string: A base64-encoded 256-bit primary key for signing and validating the SAS token
* **secondaryConnectionString**: string: SecondaryConnectionString of the created Namespace AuthorizationRule
* **secondaryKey**: string: A base64-encoded 256-bit secondary key for signing and validating the SAS token

## AuthorizationRuleProperties
### Properties
* **rights**: 'Listen' | 'Manage' | 'Send' | string[] (Required): The rights associated with the rule.

## HybridConnectionProperties
### Properties
* **createdAt**: string (ReadOnly): The time the HybridConnection was created.
* **listenerCount**: int (ReadOnly): The number of listeners for this HybridConnection. min : 1 and max:25 supported
* **requiresClientAuthorization**: bool: true if client authorization is needed for this HybridConnection; otherwise, false.
* **updatedAt**: string (ReadOnly): The time the namespace was updated.
* **userMetadata**: string: usermetadata is a placeholder to store user-defined string data for the HybridConnection endpoint.e.g. it can be used to store  descriptive data, such as list of teams and their contact information also user-defined configuration settings can be stored.

## RelayNamespaceProperties
### Properties
* **createdAt**: string (ReadOnly): The time the namespace was created.
* **metricId**: string (ReadOnly): Identifier for Azure Insights metrics
* **provisioningState**: string (ReadOnly): Provisioning state of the namespace.
* **serviceBusEndpoint**: string (ReadOnly): Endpoint you can use to perform Service Bus operations.
* **updatedAt**: string (ReadOnly): The time the namespace was updated.

## Sku
### Properties
* **name**: 'Standard' | string (Required): Name of this Sku
* **tier**: 'Standard' | string (Required): The tier of this particular SKU

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WcfRelayProperties
### Properties
* **createdAt**: string (ReadOnly): The time the WCFRelay was created.
* **isDynamic**: bool (ReadOnly): true if the relay is dynamic; otherwise, false.
* **listenerCount**: int (ReadOnly): The number of listeners for this relay. min : 1 and max:25 supported
* **relayType**: 'Http' | 'NetTcp' | string: WCFRelay Type.
* **requiresClientAuthorization**: bool: true if client authorization is needed for this relay; otherwise, false.
* **requiresTransportSecurity**: bool: true if transport security is needed for this relay; otherwise, false.
* **updatedAt**: string (ReadOnly): The time the namespace was updated.
* **userMetadata**: string: usermetadata is a placeholder to store user-defined string data for the HybridConnection endpoint.e.g. it can be used to store  descriptive data, such as list of teams and their contact information also user-defined configuration settings can be stored.

