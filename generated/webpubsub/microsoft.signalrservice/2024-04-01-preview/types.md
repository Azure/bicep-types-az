# Microsoft.SignalRService @ 2024-04-01-preview

## Resource Microsoft.SignalRService/webPubSub@2024-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedIdentity](#managedidentity): A class represent managed identities used for request and response
* **kind**: 'SocketIO' | 'WebPubSub' | string: The kind of the service
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WebPubSubProperties](#webpubsubproperties): A class that describes the properties of the resource
* **sku**: [ResourceSku](#resourcesku): The billing information of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.SignalRService/webPubSub' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SignalRService/webPubSub/customCertificates@2024-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomCertificateProperties](#customcertificateproperties) (Required): Custom certificate properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SignalRService/webPubSub/customCertificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SignalRService/webPubSub/customDomains@2024-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomDomainProperties](#customdomainproperties) (Required): Properties of a custom domain.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SignalRService/webPubSub/customDomains' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SignalRService/webPubSub/hubs@2024-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebPubSubHubProperties](#webpubsubhubproperties) (Required): Properties of a hub.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SignalRService/webPubSub/hubs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SignalRService/webPubSub/privateEndpointConnections@2024-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Private endpoint connection properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SignalRService/webPubSub/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SignalRService/webPubSub/replicas@2024-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ReplicaProperties](#replicaproperties)
* **sku**: [ResourceSku](#resourcesku): The billing information of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.SignalRService/webPubSub/replicas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SignalRService/webPubSub/replicas/sharedPrivateLinkResources@2024-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SharedPrivateLinkResourceProperties](#sharedprivatelinkresourceproperties): Describes the properties of an existing Shared Private Link Resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SignalRService/webPubSub/replicas/sharedPrivateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SignalRService/webPubSub/sharedPrivateLinkResources@2024-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SharedPrivateLinkResourceProperties](#sharedprivatelinkresourceproperties): Describes the properties of an existing Shared Private Link Resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SignalRService/webPubSub/sharedPrivateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.SignalRService/webPubSub@2024-04-01-preview)
* **Resource**: Microsoft.SignalRService/webPubSub
* **ApiVersion**: 2024-04-01-preview
* **Output**: [WebPubSubKeys](#webpubsubkeys)

## ApplicationFirewallSettings
### Properties
* **clientConnectionCountRules**: [ClientConnectionCountRule](#clientconnectioncountrule)[] {maxLength: 10}: Rules to control the client connection count

## ClientConnectionCountRule
* **Discriminator**: type

### Base Properties

### ThrottleByJwtCustomClaimRule
#### Properties
* **claimName**: string (Required): The name of the claim in the JWT token. The client connection with the same claim value will be aggregated. If the claim is not found in the token, the connection will be allowed.
* **maxCount**: int {minValue: 0, maxValue: 2147483647}: Maximum connection count allowed for the same Jwt claim value. Clients with the same Jwt claim will get rejected if the connection count exceeds this value. Default value is 20.
* **type**: 'ThrottleByJwtCustomClaimRule' (Required)

### ThrottleByJwtSignatureRule
#### Properties
* **maxCount**: int {minValue: 0, maxValue: 2147483647}: Maximum connection count allowed for the same JWT signature. Clients with the same JWT signature will get rejected if the connection count exceeds this value. Default value is 20.
* **type**: 'ThrottleByJwtSignatureRule' (Required)

### ThrottleByUserIdRule
#### Properties
* **maxCount**: int {minValue: 0, maxValue: 2147483647}: Maximum connection count allowed for the same user ID. Clients with the same user ID will get rejected if the connection count exceeds this value. Default value is 20.
* **type**: 'ThrottleByUserIdRule' (Required)


## CustomCertificateProperties
### Properties
* **keyVaultBaseUri**: string (Required): Base uri of the KeyVault that stores certificate.
* **keyVaultSecretName**: string (Required): Certificate secret name.
* **keyVaultSecretVersion**: string: Certificate secret version.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of the resource.

## CustomDomainProperties
### Properties
* **customCertificate**: [ResourceReference](#resourcereference) (Required): Reference to a resource.
* **domainName**: string (Required): The custom domain name.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of the resource.

## EventHandler
### Properties
* **auth**: [UpstreamAuthSettings](#upstreamauthsettings): Upstream auth settings. If not set, no auth is used for upstream messages.
* **systemEvents**: string[]: Gets or sets the list of system events.
* **urlTemplate**: string (Required): Gets or sets the EventHandler URL template. You can use a predefined parameter {hub} and {event} inside the template, the value of the EventHandler URL is dynamically calculated when the client request comes in.
For example, UrlTemplate can be `http://example.com/api/{hub}/{event}`. The host part can't contains parameters.
* **userEventPattern**: string: Gets or sets the matching pattern for event names.
There are 3 kinds of patterns supported:
    1. "*", it matches any event name
    2. Combine multiple events with ",", for example "event1,event2", it matches event "event1" and "event2"
    3. A single event name, for example, "event1", it matches "event1"

## EventListener
### Properties
* **endpoint**: [EventListenerEndpoint](#eventlistenerendpoint) (Required): An endpoint specifying where Web PubSub should send events to.
* **filter**: [EventListenerFilter](#eventlistenerfilter) (Required): A base class for event filter which determines whether an event should be sent to an event listener.

## EventListenerEndpoint
* **Discriminator**: type

### Base Properties

### EventHubEndpoint
#### Properties
* **eventHubName**: string (Required): The name of the Event Hub.
* **fullyQualifiedNamespace**: string (Required): The fully qualified namespace name of the Event Hub resource. For example, "example.servicebus.windows.net".
* **type**: 'EventHub' (Required)


## EventListenerFilter
* **Discriminator**: type

### Base Properties

### EventNameFilter
#### Properties
* **systemEvents**: string[]: Gets or sets a list of system events. Supported events: "connected" and "disconnected". Blocking event "connect" is not supported because it requires a response.
* **type**: 'EventName' (Required)
* **userEventPattern**: string: Gets or sets a matching pattern for event names.
There are 3 kinds of patterns supported:
    1. "*", it matches any event name
    2. Combine multiple events with ",", for example "event1,event2", it matches events "event1" and "event2"
    3. A single event name, for example, "event1", it matches "event1"


## IPRule
### Properties
* **action**: 'Allow' | 'Deny' | string: Azure Networking ACL Action.
* **value**: string: An IP or CIDR or ServiceTag

## LiveTraceCategory
### Properties
* **enabled**: string: Indicates whether or the live trace category is enabled.
Available values: true, false.
Case insensitive.
* **name**: string: Gets or sets the live trace category's name.
Available values: ConnectivityLogs, MessagingLogs.
Case insensitive.

## LiveTraceConfiguration
### Properties
* **categories**: [LiveTraceCategory](#livetracecategory)[]: Gets or sets the list of category configurations.
* **enabled**: string: Indicates whether or not enable live trace.
When it's set to true, live trace client can connect to the service.
Otherwise, live trace client can't connect to the service, so that you are unable to receive any log, no matter what you configure in "categories".
Available values: true, false.
Case insensitive.

## ManagedIdentity
### Properties
* **principalId**: string (ReadOnly): Get the principal id for the system assigned identity.
Only be used in response.
* **tenantId**: string (ReadOnly): Get the tenant id for the system assigned identity.
Only be used in response
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned' | string: Represents the identity type: systemAssigned, userAssigned, None
* **userAssignedIdentities**: [ManagedIdentityUserAssignedIdentities](#managedidentityuserassignedidentities): Get or set the user assigned identities

## ManagedIdentitySettings
### Properties
* **resource**: string: The Resource indicating the App ID URI of the target resource.
It also appears in the aud (audience) claim of the issued token.

## ManagedIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentityProperty](#userassignedidentityproperty)

## NetworkACL
### Properties
* **allow**: ('ClientConnection' | 'RESTAPI' | 'ServerConnection' | 'Trace' | string)[]: Allowed request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
* **deny**: ('ClientConnection' | 'RESTAPI' | 'ServerConnection' | 'Trace' | string)[]: Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.

## PrivateEndpoint
### Properties
* **id**: string: Full qualified Id of the private endpoint

## PrivateEndpointACL
### Properties
* **allow**: ('ClientConnection' | 'RESTAPI' | 'ServerConnection' | 'Trace' | string)[]: Allowed request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
* **deny**: ('ClientConnection' | 'RESTAPI' | 'ServerConnection' | 'Trace' | string)[]: Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
* **name**: string (Required): Name of the private endpoint connection

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Private endpoint connection properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): Group IDs
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): Private endpoint
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): Connection state of the private endpoint connection
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of the resource.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## ReplicaProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **regionEndpointEnabled**: string: Enable or disable the regional endpoint. Default to "Enabled".
When it's Disabled, new connections will not be routed to this endpoint, however existing connections will not be affected.
* **resourceStopped**: string: Stop or start the resource.  Default to "false".
When it's true, the data plane of the resource is shutdown.
When it's false, the data plane of the resource is started.

## ResourceLogCategory
### Properties
* **enabled**: string: Indicates whether or the resource log category is enabled.
Available values: true, false.
Case insensitive.
* **name**: string: Gets or sets the resource log category's name.
Available values: ConnectivityLogs, MessagingLogs.
Case insensitive.

## ResourceLogConfiguration
### Properties
* **categories**: [ResourceLogCategory](#resourcelogcategory)[]: Gets or sets the list of category configurations.

## ResourceReference
### Properties
* **id**: string: Resource ID.

## ResourceSku
### Properties
* **capacity**: int: Optional, integer. The unit count of the resource.
1 for Free_F1/Standard_S1/Premium_P1, 100 for Premium_P2 by default.

If present, following values are allowed:
    Free_F1: 1;
    Standard_S1: 1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;
    Premium_P1:  1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;
    Premium_P2:  100,200,300,400,500,600,700,800,900,1000;
* **family**: string (ReadOnly): Not used. Retained for future use.
* **name**: string (Required): The name of the SKU. Required.

Allowed values: Standard_S1, Free_F1, Premium_P1, Premium_P2
* **size**: string (ReadOnly): Not used. Retained for future use.
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard' | string: Optional tier of this particular SKU. 'Standard' or 'Free'. 

`Basic` is deprecated, use `Standard` instead.

## SharedPrivateLinkResource
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [SharedPrivateLinkResourceProperties](#sharedprivatelinkresourceproperties): Describes the properties of an existing Shared Private Link Resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## SharedPrivateLinkResourceProperties
### Properties
* **groupId**: string (Required): The group id from the provider of resource the shared private link resource is for
* **privateLinkResourceId**: string (Required): The resource id of the resource the shared private link resource is for
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **requestMessage**: string: The request message for requesting approval of the shared private link resource
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout' | string (ReadOnly): Status of the shared private link resource

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UpstreamAuthSettings
### Properties
* **managedIdentity**: [ManagedIdentitySettings](#managedidentitysettings): Managed identity settings for upstream.
* **type**: 'ManagedIdentity' | 'None' | string: Upstream auth type enum.

## UserAssignedIdentityProperty
### Properties
* **clientId**: string (ReadOnly): Get the client id for the user assigned identity
* **principalId**: string (ReadOnly): Get the principal id for the user assigned identity

## WebPubSubHubProperties
### Properties
* **anonymousConnectPolicy**: string: The settings for configuring if anonymous connections are allowed for this hub: "allow" or "deny". Default to "deny".
* **eventHandlers**: [EventHandler](#eventhandler)[]: Event handler of a hub.
* **eventListeners**: [EventListener](#eventlistener)[]: Event listener settings for forwarding your client events to listeners.
Event listener is transparent to Web PubSub clients, and it doesn't return any result to clients nor interrupt the lifetime of clients.
One event can be sent to multiple listeners, as long as it matches the filters in those listeners. The order of the array elements doesn't matter.
Maximum count of event listeners among all hubs is 10.
* **webSocketKeepAliveIntervalInSeconds**: int {minValue: 1, maxValue: 120}: The settings for configuring the WebSocket ping-pong interval in seconds for all clients in the hub. Valid range: 1 to 120. Default to 20 seconds.

## WebPubSubKeys
### Properties
* **primaryConnectionString**: string {sensitive}: Connection string constructed via the primaryKey
* **primaryKey**: string {sensitive}: The primary access key.
* **secondaryConnectionString**: string {sensitive}: Connection string constructed via the secondaryKey
* **secondaryKey**: string {sensitive}: The secondary access key.

## WebPubSubNetworkACLs
### Properties
* **defaultAction**: 'Allow' | 'Deny' | string: Azure Networking ACL Action.
* **ipRules**: [IPRule](#iprule)[] {maxLength: 30}: IP rules for filtering public traffic
* **privateEndpoints**: [PrivateEndpointACL](#privateendpointacl)[]: ACLs for requests from private endpoints
* **publicNetwork**: [NetworkACL](#networkacl): Network ACL

## WebPubSubProperties
### Properties
* **applicationFirewall**: [ApplicationFirewallSettings](#applicationfirewallsettings): Application firewall settings for the resource
* **disableAadAuth**: bool: DisableLocalAuth
Enable or disable aad auth
When set as true, connection with AuthType=aad won't work.
* **disableLocalAuth**: bool: DisableLocalAuth
Enable or disable local auth with AccessKey
When set as true, connection with AccessKey=xxx won't work.
* **externalIP**: string (ReadOnly): The publicly accessible IP of the resource.
* **hostName**: string (ReadOnly): FQDN of the service instance.
* **hostNamePrefix**: string (ReadOnly): Deprecated.
* **liveTraceConfiguration**: [LiveTraceConfiguration](#livetraceconfiguration): Live trace configuration of a Microsoft.SignalRService resource.
* **networkACLs**: [WebPubSubNetworkACLs](#webpubsubnetworkacls): Network ACLs for the resource
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): Private endpoint connections to the resource.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **publicNetworkAccess**: string: Enable or disable public network access. Default to "Enabled".
When it's Enabled, network ACLs still apply.
When it's Disabled, public network access is always disabled no matter what you set in network ACLs.
* **publicPort**: int (ReadOnly): The publicly accessible port of the resource which is designed for browser/client side usage.
* **regionEndpointEnabled**: string: Enable or disable the regional endpoint. Default to "Enabled".
When it's Disabled, new connections will not be routed to this endpoint, however existing connections will not be affected.
This property is replica specific. Disable the regional endpoint without replica is not allowed.
* **resourceLogConfiguration**: [ResourceLogConfiguration](#resourcelogconfiguration): Resource log configuration of a Microsoft.SignalRService resource.
* **resourceStopped**: string: Stop or start the resource.  Default to "False".
When it's true, the data plane of the resource is shutdown.
When it's false, the data plane of the resource is started.
* **serverPort**: int (ReadOnly): The publicly accessible port of the resource which is designed for customer server side usage.
* **sharedPrivateLinkResources**: [SharedPrivateLinkResource](#sharedprivatelinkresource)[] (ReadOnly): The list of shared private link resources.
* **socketIO**: [WebPubSubSocketIOSettings](#webpubsubsocketiosettings): SocketIO settings for the resource
* **tls**: [WebPubSubTlsSettings](#webpubsubtlssettings): TLS settings for the resource
* **version**: string (ReadOnly): Version of the resource. Probably you need the same or higher version of client SDKs.

## WebPubSubSocketIOSettings
### Properties
* **serviceMode**: string: The service mode of Web PubSub for Socket.IO. Values allowed: 
"Default": have your own backend Socket.IO server
"Serverless": your application doesn't have a backend server

## WebPubSubTlsSettings
### Properties
* **clientCertEnabled**: bool: Request client certificate during TLS handshake if enabled. Not supported for free tier. Any input will be ignored for free tier.

