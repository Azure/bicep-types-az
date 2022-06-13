# Microsoft.Relay @ 2021-11-01

## Resource Microsoft.Relay/namespaces@2021-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelayNamespaceProperties](#relaynamespaceproperties): Description of Relay namespace
* **sku**: [Sku](#sku): SKU of the namespace.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Relay/namespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Relay/namespaces/authorizationRules@2021-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationRuleProperties](#authorizationruleproperties): Properties supplied to create or update AuthorizationRule
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.Relay/namespaces/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Relay/namespaces/hybridConnections@2021-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridConnectionProperties](#hybridconnectionproperties): Properties of the HybridConnection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.Relay/namespaces/hybridConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Relay/namespaces/hybridConnections/authorizationRules@2021-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationRuleProperties](#authorizationruleproperties): Properties supplied to create or update AuthorizationRule
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.Relay/namespaces/hybridConnections/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Relay/namespaces/networkRuleSets@2021-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkRuleSetProperties](#networkrulesetproperties): NetworkRuleSet properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.Relay/namespaces/networkRuleSets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Relay/namespaces/privateEndpointConnections@2021-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.Relay/namespaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Relay/namespaces/wcfRelays@2021-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WcfRelayProperties](#wcfrelayproperties): Properties of the WCF relay.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.Relay/namespaces/wcfRelays' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Relay/namespaces/wcfRelays/authorizationRules@2021-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationRuleProperties](#authorizationruleproperties): Properties supplied to create or update AuthorizationRule
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.Relay/namespaces/wcfRelays/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.Relay/namespaces/authorizationRules@2021-11-01)
* **Resource**: Microsoft.Relay/namespaces/authorizationRules
* **ApiVersion**: 2021-11-01
* **Output**: [AccessKeys](#accesskeys)

## Function listKeys (Microsoft.Relay/namespaces/hybridConnections/authorizationRules@2021-11-01)
* **Resource**: Microsoft.Relay/namespaces/hybridConnections/authorizationRules
* **ApiVersion**: 2021-11-01
* **Output**: [AccessKeys](#accesskeys)

## Function listKeys (Microsoft.Relay/namespaces/wcfRelays/authorizationRules@2021-11-01)
* **Resource**: Microsoft.Relay/namespaces/wcfRelays/authorizationRules
* **ApiVersion**: 2021-11-01
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
* **rights**: 'Listen' | 'Manage' | 'Send' | string[] (Required): The rights associated with the rule.

## ConnectionState
### Properties
* **description**: string: Description of the connection state.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: Status of the connection.

## HybridConnectionProperties
### Properties
* **createdAt**: string (ReadOnly): The time the hybrid connection was created.
* **listenerCount**: int (ReadOnly): The number of listeners for this hybrid connection. Note that min : 1 and max:25 are supported.
* **requiresClientAuthorization**: bool: Returns true if client authorization is needed for this hybrid connection; otherwise, false.
* **updatedAt**: string (ReadOnly): The time the namespace was updated.
* **userMetadata**: string: The usermetadata is a placeholder to store user-defined string data for the hybrid connection endpoint. For example, it can be used to store descriptive data, such as a list of teams and their contact information. Also, user-defined configuration settings can be stored.

## NetworkRuleSetProperties
### Properties
* **defaultAction**: 'Allow' | 'Deny' | string: Default Action for Network Rule Set
* **ipRules**: [NWRuleSetIpRules](#nwrulesetiprules)[]: List of IpRules

## NWRuleSetIpRules
### Properties
* **action**: 'Allow' | string: The IP Filter Action
* **ipMask**: string: IP Mask

## PrivateEndpoint
### Properties
* **id**: string: The ARM identifier for Private Endpoint.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The Private Endpoint resource for this Connection.
* **privateLinkServiceConnectionState**: [ConnectionState](#connectionstate): Details about the state of the connection.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: Provisioning state of the Private Endpoint Connection.

## RelayNamespaceProperties
### Properties
* **createdAt**: string (ReadOnly): The time the namespace was created.
* **metricId**: string (ReadOnly): Identifier for Azure Insights metrics.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[]: List of private endpoint connections.
* **provisioningState**: string (ReadOnly): Provisioning state of the Namespace.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | 'SecuredByPerimeter' | string: This determines if traffic is allowed over public network. By default it is enabled.
* **serviceBusEndpoint**: string (ReadOnly): Endpoint you can use to perform Service Bus operations.
* **status**: string (ReadOnly): Status of the Namespace.
* **updatedAt**: string (ReadOnly): The time the namespace was updated.

## Sku
### Properties
* **name**: 'Standard' | string (Required): Name of this SKU.
* **tier**: 'Standard' | string: The tier of this SKU.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

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

