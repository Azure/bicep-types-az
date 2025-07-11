# Microsoft.SignalRService @ 2025-01-01-preview

## Resource Microsoft.SignalRService/signalR@2025-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedIdentity](#managedidentity): A class represent managed identities used for request and response
* **kind**: 'RawWebSockets' | 'SignalR' | string: The kind of the service
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SignalRProperties](#signalrproperties): A class that describes the properties of the resource
* **sku**: [ResourceSku](#resourcesku): The billing information of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.SignalRService/signalR' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SignalRService/signalR/customCertificates@2025-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomCertificateProperties](#customcertificateproperties) (Required): Custom certificate properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SignalRService/signalR/customCertificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SignalRService/signalR/customDomains@2025-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomDomainProperties](#customdomainproperties) (Required): Properties of a custom domain.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SignalRService/signalR/customDomains' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SignalRService/signalR/privateEndpointConnections@2025-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Private endpoint connection properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SignalRService/signalR/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SignalRService/signalR/replicas@2025-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ReplicaProperties](#replicaproperties)
* **sku**: [ResourceSku](#resourcesku): The billing information of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.SignalRService/signalR/replicas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SignalRService/signalR/replicas/sharedPrivateLinkResources@2025-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SharedPrivateLinkResourceProperties](#sharedprivatelinkresourceproperties): Describes the properties of an existing Shared Private Link Resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SignalRService/signalR/replicas/sharedPrivateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SignalRService/signalR/sharedPrivateLinkResources@2025-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SharedPrivateLinkResourceProperties](#sharedprivatelinkresourceproperties): Describes the properties of an existing Shared Private Link Resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SignalRService/signalR/sharedPrivateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.SignalRService/signalR@2025-01-01-preview)
* **Resource**: Microsoft.SignalRService/signalR
* **ApiVersion**: 2025-01-01-preview
* **Output**: [SignalRKeys](#signalrkeys)

## ApplicationFirewallSettings
### Properties
* **clientConnectionCountRules**: [ClientConnectionCountRule](#clientconnectioncountrule)[] {maxLength: 10}: Rules to control the client connection count
* **clientTrafficControlRules**: [ClientTrafficControlRule](#clienttrafficcontrolrule)[] {maxLength: 10}: Rules to control the client traffic
* **maxClientConnectionLifetimeInSeconds**: int {minValue: 0, maxValue: 604800}: Config to control the client connection lifetime in seconds, can be set to 0 to disable the config

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


## ClientTrafficControlRule
* **Discriminator**: type

### Base Properties

### TrafficThrottleByJwtCustomClaimRule
#### Properties
* **aggregationWindowInSeconds**: int {minValue: 10, maxValue: 3600}: The aggregation window for the message bytes. The message bytes will be aggregated in this window and be reset after the window. Default value is 60 seconds.
* **claimName**: string (Required): The name of the claim in the JWT token. The message bytes with the same claim value will be aggregated. If the claim is not found in the token, the rule will be skipped.
* **maxInboundMessageBytes**: int {minValue: 0}: Maximum accumulated inbound message bytes allowed for the same JWT signature within a time window. Clients with the same JWT claim will get disconnected if the message bytes exceeds this value. Default value is 1GB.
* **type**: 'TrafficThrottleByJwtCustomClaimRule' (Required)

### TrafficThrottleByJwtSignatureRule
#### Properties
* **aggregationWindowInSeconds**: int {minValue: 10, maxValue: 3600}: The aggregation window for the message bytes. The message bytes will be aggregated in this window and be reset after the window. Default value is 60 seconds.
* **maxInboundMessageBytes**: int {minValue: 0}: Maximum accumulated inbound message bytes allowed for the same JWT signature within a time window. Clients with the same JWT signature will get disconnected if the message bytes exceeds this value. Default value is 1GB.
* **type**: 'TrafficThrottleByJwtSignatureRule' (Required)

### TrafficThrottleByUserIdRule
#### Properties
* **aggregationWindowInSeconds**: int {minValue: 10, maxValue: 3600}: The aggregation window for the message bytes. The message bytes will be aggregated in this window and be reset after the window. Default value is 60 seconds.
* **maxInboundMessageBytes**: int {minValue: 0}: Maximum accumulated inbound message bytes allowed for the same user ID within a time window. Clients with the same user ID will get disconnected if the message bytes exceeds this value. Default value is 1GB.
* **type**: 'TrafficThrottleByUserIdRule' (Required)


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

## RouteSettings
### Properties
* **connectionBalanceWeight**: int {minValue: 0, maxValue: 255}: Gets or sets the connection balance weight.
A higher value means a greater balance of client connections across different server connections.
A value of 0 distributes connections randomly, while a value of 255 ensures maximum balancing.
The default value is 255.
Recommended ```255``` for all of the cases.
* **latencyWeight**: int {minValue: 0, maxValue: 255}: Gets or sets the weight for latency-based routing.
A higher value increases the influence of latency-based routing.
A value of 0 disables latency-based routing entirely, while a value of 255 enables it fully.
The default value is 0.
Recommended ```255``` for replicas or app servers in different regions for disaster recovery.
* **serverBalanceWeight**: int {minValue: 0, maxValue: 255}: Gets or sets the server balance weight.
A higher value means a greater balance of client connections across different app server instances.
A value of 0 distributes connections randomly, while a value of 255 ensures maximum balancing.
The default value is 255.
Recommended ```255``` for multiple app servers in same size.

## ServerlessSettings
### Properties
* **connectionTimeoutInSeconds**: int {minValue: 1, maxValue: 120}: Gets or sets Client Connection Timeout. Optional to be set.
Value in seconds.
Default value is 30 seconds.
Customer should set the timeout to a shorter period if messages are expected to be sent in shorter intervals,
and want the client to disconnect more quickly after the last message is sent.
You can set the timeout to a longer period if messages are expected to be sent in longer intervals,
and they want to keep the same client connection alive during this session.
The service considers the client disconnected if it hasn't received a message (including keep-alive) in this interval.
* **keepAliveIntervalInSeconds**: int {minValue: 1, maxValue: 120}: Gets or sets the Keep-Alive Interval. Optional to set.
Value is in seconds.
The default value is 15 seconds.
Customers should set this value to a shorter period if they want the service to send keep-alive messages more frequently, 
ensuring timely checks of the connection status.
Conversely, customers can set this value to a longer period if they want the service to send keep-alive messages less frequently, 
reducing network traffic, but note that it may take longer to detect a disconnection.
This interval ensures that the connection is maintained by sending periodic keep-alive messages to the client.

## ServerlessUpstreamSettings
### Properties
* **templates**: [UpstreamTemplate](#upstreamtemplate)[]: Gets or sets the list of Upstream URL templates. Order matters, and the first matching template takes effects.

## SharedPrivateLinkResource
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [SharedPrivateLinkResourceProperties](#sharedprivatelinkresourceproperties): Describes the properties of an existing Shared Private Link Resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## SharedPrivateLinkResourceProperties
### Properties
* **fqdns**: string[]: A list of FQDNs for third party private link service
* **groupId**: string (Required): The group id from the provider of resource the shared private link resource is for
* **privateLinkResourceId**: string (Required): The resource id of the resource the shared private link resource is for
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **requestMessage**: string: The request message for requesting approval of the shared private link resource
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout' | string (ReadOnly): Status of the shared private link resource

## SignalRCorsSettings
### Properties
* **allowedOrigins**: string[]: Gets or sets the list of origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). Use "*" to allow all. If omitted, allow all by default.

## SignalRFeature
### Properties
* **flag**: 'EnableConnectivityLogs' | 'EnableLiveTrace' | 'EnableMessagingLogs' | 'ServiceMode' | string (Required): FeatureFlags is the supported features of Azure SignalR service.
- ServiceMode: Flag for backend server for SignalR service. Values allowed: "Default": have your own backend server; "Serverless": your application doesn't have a backend server; "Classic": for backward compatibility. Support both Default and Serverless mode but not recommended; "PredefinedOnly": for future use.
- EnableConnectivityLogs: "true"/"false", to enable/disable the connectivity log category respectively.
- EnableMessagingLogs: "true"/"false", to enable/disable the connectivity log category respectively.
- EnableLiveTrace: Live Trace allows you to know what's happening inside Azure SignalR service, it will give you live traces in real time, it will be helpful when you developing your own Azure SignalR based web application or self-troubleshooting some issues. Please note that live traces are counted as outbound messages that will be charged. Values allowed: "true"/"false", to enable/disable live trace feature.
* **properties**: [SignalRFeatureProperties](#signalrfeatureproperties): Optional properties related to this feature.
* **value**: string {minLength: 1, maxLength: 128} (Required): Value of the feature flag. See Azure SignalR service document https://docs.microsoft.com/azure/azure-signalr/ for allowed values.

## SignalRFeatureProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SignalRKeys
### Properties
* **primaryConnectionString**: string {sensitive}: Connection string constructed via the primaryKey
* **primaryKey**: string {sensitive}: The primary access key.
* **secondaryConnectionString**: string {sensitive}: Connection string constructed via the secondaryKey
* **secondaryKey**: string {sensitive}: The secondary access key.

## SignalRNetworkACLs
### Properties
* **defaultAction**: 'Allow' | 'Deny' | string: Azure Networking ACL Action.
* **ipRules**: [IPRule](#iprule)[] {maxLength: 30}: IP rules for filtering public traffic
* **privateEndpoints**: [PrivateEndpointACL](#privateendpointacl)[]: ACLs for requests from private endpoints
* **publicNetwork**: [NetworkACL](#networkacl): Network ACL

## SignalRProperties
### Properties
* **applicationFirewall**: [ApplicationFirewallSettings](#applicationfirewallsettings): Application firewall settings for the resource
* **cors**: [SignalRCorsSettings](#signalrcorssettings): Cross-Origin Resource Sharing (CORS) settings.
* **disableAadAuth**: bool: DisableLocalAuth
Enable or disable aad auth
When set as true, connection with AuthType=aad won't work.
* **disableLocalAuth**: bool: DisableLocalAuth
Enable or disable local auth with AccessKey
When set as true, connection with AccessKey=xxx won't work.
* **externalIP**: string (ReadOnly): The publicly accessible IP of the resource.
* **features**: [SignalRFeature](#signalrfeature)[]: List of the featureFlags.

FeatureFlags that are not included in the parameters for the update operation will not be modified.
And the response will only include featureFlags that are explicitly set. 
When a featureFlag is not explicitly set, its globally default value will be used
But keep in mind, the default value doesn't mean "false". It varies in terms of different FeatureFlags.
* **hostName**: string (ReadOnly): FQDN of the service instance.
* **hostNamePrefix**: string (ReadOnly): Deprecated.
* **liveTraceConfiguration**: [LiveTraceConfiguration](#livetraceconfiguration): Live trace configuration of a Microsoft.SignalRService resource.
* **networkACLs**: [SignalRNetworkACLs](#signalrnetworkacls): Network ACLs for the resource
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
* **routeSettings**: [RouteSettings](#routesettings): Route settings for the resource
* **serverless**: [ServerlessSettings](#serverlesssettings): Serverless settings.
* **serverPort**: int (ReadOnly): The publicly accessible port of the resource which is designed for customer server side usage.
* **sharedPrivateLinkResources**: [SharedPrivateLinkResource](#sharedprivatelinkresource)[] (ReadOnly): The list of shared private link resources.
* **tls**: [SignalRTlsSettings](#signalrtlssettings): TLS settings for the resource
* **upstream**: [ServerlessUpstreamSettings](#serverlessupstreamsettings): The settings for the Upstream when the service is in server-less mode.
* **version**: string (ReadOnly): Version of the resource. Probably you need the same or higher version of client SDKs.

## SignalRTlsSettings
### Properties
* **clientCertEnabled**: bool: Request client certificate during TLS handshake if enabled. Not supported for free tier. Any input will be ignored for free tier.

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

## UpstreamTemplate
### Properties
* **auth**: [UpstreamAuthSettings](#upstreamauthsettings): Upstream auth settings. If not set, no auth is used for upstream messages.
* **categoryPattern**: string: Gets or sets the matching pattern for category names. If not set, it matches any category.
There are 3 kind of patterns supported:
    1. "*", it to matches any category name.
    2. Combine multiple categories with ",", for example "connections,messages", it matches category "connections" and "messages".
    3. The single category name, for example, "connections", it matches the category "connections".
* **eventPattern**: string: Gets or sets the matching pattern for event names. If not set, it matches any event.
There are 3 kind of patterns supported:
    1. "*", it to matches any event name.
    2. Combine multiple events with ",", for example "connect,disconnect", it matches event "connect" and "disconnect".
    3. The single event name, for example, "connect", it matches "connect".
* **hubPattern**: string: Gets or sets the matching pattern for hub names. If not set, it matches any hub.
There are 3 kind of patterns supported:
    1. "*", it to matches any hub name.
    2. Combine multiple hubs with ",", for example "hub1,hub2", it matches "hub1" and "hub2".
    3. The single hub name, for example, "hub1", it matches "hub1".
* **urlTemplate**: string (Required): Gets or sets the Upstream URL template. You can use 3 predefined parameters {hub}, {category} {event} inside the template, the value of the Upstream URL is dynamically calculated when the client request comes in.
For example, if the urlTemplate is `http://example.com/{hub}/api/{event}`, with a client request from hub `chat` connects, it will first POST to this URL: `http://example.com/chat/api/connect`.

## UserAssignedIdentityProperty
### Properties
* **clientId**: string (ReadOnly): Get the client id for the user assigned identity
* **principalId**: string (ReadOnly): Get the principal id for the user assigned identity

