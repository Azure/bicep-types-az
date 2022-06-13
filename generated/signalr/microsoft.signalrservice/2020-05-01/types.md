# Microsoft.SignalRService @ 2020-05-01

## Resource Microsoft.SignalRService/signalR@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'RawWebSockets' | 'SignalR' | string: The kind of the service - e.g. "SignalR", or "RawWebSockets" for "Microsoft.SignalRService/SignalR"
* **location**: string: The GEO location of the SignalR service. e.g. West US | East US | North Central US | South Central US.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SignalRProperties](#signalrproperties): Settings used to provision or configure the resource
* **sku**: [ResourceSku](#resourcesku): The billing information of the resource.(e.g. Free, Standard)
* **tags**: [TrackedResourceTags](#trackedresourcetags): Tags of the service which is a list of key value pairs that describe the resource.
* **type**: 'Microsoft.SignalRService/signalR' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SignalRService/signalR/privateEndpointConnections@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the private endpoint connection
* **type**: 'Microsoft.SignalRService/signalR/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.SignalRService/signalR@2020-05-01)
* **Resource**: Microsoft.SignalRService/signalR
* **ApiVersion**: 2020-05-01
* **Output**: [SignalRKeys](#signalrkeys)

## NetworkACL
### Properties
* **allow**: 'ClientConnection' | 'RESTAPI' | 'ServerConnection' | 'Trace' | string[]: Allowed request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
* **deny**: 'ClientConnection' | 'RESTAPI' | 'ServerConnection' | 'Trace' | string[]: Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.

## PrivateEndpoint
### Properties
* **id**: string: Full qualified Id of the private endpoint

## PrivateEndpointACL
### Properties
* **allow**: 'ClientConnection' | 'RESTAPI' | 'ServerConnection' | 'Trace' | string[]: Allowed request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
* **deny**: 'ClientConnection' | 'RESTAPI' | 'ServerConnection' | 'Trace' | string[]: Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
* **name**: string (Required): Name of the private endpoint connection

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource Id for the resource.
* **name**: string (ReadOnly): The name of the resource.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the private endpoint connection
* **type**: string (ReadOnly): The type of the resource - e.g. "Microsoft.SignalRService/SignalR"

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): Private endpoint associated with the private endpoint connection
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): Connection state
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of the private endpoint connection

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## ResourceSku
### Properties
* **capacity**: int: Optional, integer. The unit count of SignalR resource. 1 by default.

If present, following values are allowed:
    Free: 1
    Standard: 1,2,5,10,20,50,100
* **family**: string (ReadOnly): Not used. Retained for future use.
* **name**: string (Required): The name of the SKU. Required.

Allowed values: Standard_S1, Free_F1
* **size**: string (ReadOnly): Not used. Retained for future use.
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard' | string: Optional tier of this particular SKU. 'Standard' or 'Free'. 

`Basic` is deprecated, use `Standard` instead.

## ServerlessUpstreamSettings
### Properties
* **templates**: [UpstreamTemplate](#upstreamtemplate)[]: Gets or sets the list of Upstream URL templates. Order matters, and the first matching template takes effects.

## SignalRCorsSettings
### Properties
* **allowedOrigins**: string[]: Gets or sets the list of origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). Use "*" to allow all. If omitted, allow all by default.

## SignalRFeature
### Properties
* **flag**: 'EnableConnectivityLogs' | 'EnableMessagingLogs' | 'ServiceMode' | string (Required): FeatureFlags is the supported features of Azure SignalR service.
- ServiceMode: Flag for backend server for SignalR service. Values allowed: "Default": have your own backend server; "Serverless": your application doesn't have a backend server; "Classic": for backward compatibility. Support both Default and Serverless mode but not recommended; "PredefinedOnly": for future use.
- EnableConnectivityLogs: "true"/"false", to enable/disable the connectivity log category respectively.
* **properties**: [SignalRFeatureProperties](#signalrfeatureproperties): Optional properties related to this feature.
* **value**: string (Required): Value of the feature flag. See Azure SignalR service document https://docs.microsoft.com/azure/azure-signalr/ for allowed values.

## SignalRFeatureProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SignalRKeys
### Properties
* **primaryConnectionString**: string (ReadOnly): SignalR connection string constructed via the primaryKey
* **primaryKey**: string (ReadOnly): The primary access key.
* **secondaryConnectionString**: string (ReadOnly): SignalR connection string constructed via the secondaryKey
* **secondaryKey**: string (ReadOnly): The secondary access key.

## SignalRNetworkACLs
### Properties
* **defaultAction**: 'Allow' | 'Deny' | string: Default action when no other rule matches
* **privateEndpoints**: [PrivateEndpointACL](#privateendpointacl)[]: ACLs for requests from private endpoints
* **publicNetwork**: [NetworkACL](#networkacl): ACL for requests from public network

## SignalRProperties
### Properties
* **cors**: [SignalRCorsSettings](#signalrcorssettings): Cross-Origin Resource Sharing (CORS) settings.
* **externalIP**: string (ReadOnly): The publicly accessible IP of the SignalR service.
* **features**: [SignalRFeature](#signalrfeature)[]: List of SignalR featureFlags. e.g. ServiceMode.

FeatureFlags that are not included in the parameters for the update operation will not be modified.
And the response will only include featureFlags that are explicitly set. 
When a featureFlag is not explicitly set, SignalR service will use its globally default value. 
But keep in mind, the default value doesn't mean "false". It varies in terms of different FeatureFlags.
* **hostName**: string (ReadOnly): FQDN of the SignalR service instance. Format: xxx.service.signalr.net
* **hostNamePrefix**: string (ReadOnly): Prefix for the hostName of the SignalR service. Retained for future use.
The hostname will be of format: &lt;hostNamePrefix&gt;.service.signalr.net.
* **networkACLs**: [SignalRNetworkACLs](#signalrnetworkacls): Network ACLs
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): Private endpoint connections to the SignalR resource.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **publicPort**: int (ReadOnly): The publicly accessible port of the SignalR service which is designed for browser/client side usage.
* **serverPort**: int (ReadOnly): The publicly accessible port of the SignalR service which is designed for customer server side usage.
* **upstream**: [ServerlessUpstreamSettings](#serverlessupstreamsettings): Upstream settings when the Azure SignalR is in server-less mode.
* **version**: string (ReadOnly): Version of the SignalR resource. Probably you need the same or higher version of client SDKs.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UpstreamTemplate
### Properties
* **categoryPattern**: string: Gets or sets the matching pattern for category names. If not set, it matches any category.
There are 3 kind of patterns supported:
    1. "*", it to matches any category name
    2. Combine multiple categories with ",", for example "connections,messages", it matches category "connections" and "messages"
    3. The single category name, for example, "connections", it matches the category "connections"
* **eventPattern**: string: Gets or sets the matching pattern for event names. If not set, it matches any event.
There are 3 kind of patterns supported:
    1. "*", it to matches any event name
    2. Combine multiple events with ",", for example "connect,disconnect", it matches event "connect" and "disconnect"
    3. The single event name, for example, "connect", it matches "connect"
* **hubPattern**: string: Gets or sets the matching pattern for hub names. If not set, it matches any hub.
There are 3 kind of patterns supported:
    1. "*", it to matches any hub name
    2. Combine multiple hubs with ",", for example "hub1,hub2", it matches "hub1" and "hub2"
    3. The single hub name, for example, "hub1", it matches "hub1"
* **urlTemplate**: string (Required): Gets or sets the Upstream URL template. You can use 3 predefined parameters {hub}, {category} {event} inside the template, the value of the Upstream URL is dynamically calculated when the client request comes in.
For example, if the urlTemplate is `http://example.com/{hub}/api/{event}`, with a client request from hub `chat` connects, it will first POST to this URL: `http://example.com/chat/api/connect`.

