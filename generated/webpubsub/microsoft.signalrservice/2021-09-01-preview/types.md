# Microsoft.SignalRService @ 2021-09-01-preview

## Resource Microsoft.SignalRService/webPubSub@2021-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedIdentity](#managedidentity): The managed identity response
* **location**: string: The GEO location of the resource. e.g. West US | East US | North Central US | South Central US.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebPubSubProperties](#webpubsubproperties): Settings used to provision or configure the resource
* **sku**: [ResourceSku](#resourcesku): The billing information of the resource.(e.g. Free, Standard)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Tags of the service which is a list of key value pairs that describe the resource.
* **type**: 'Microsoft.SignalRService/webPubSub' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SignalRService/webPubSub/privateEndpointConnections@2021-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the private endpoint connection
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SignalRService/webPubSub/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SignalRService/webPubSub/sharedPrivateLinkResources@2021-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SharedPrivateLinkResourceProperties](#sharedprivatelinkresourceproperties): Describes the properties of a Shared Private Link Resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SignalRService/webPubSub/sharedPrivateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.SignalRService/webPubSub@2021-09-01-preview)
* **Resource**: Microsoft.SignalRService/webPubSub
* **ApiVersion**: 2021-09-01-preview
* **Output**: [WebPubSubKeys](#webpubsubkeys)

## EventHandlerSettings
### Properties
* **items**: [EventHandlerSettingsItems](#eventhandlersettingsitems): Get or set the EventHandler items. The key is the hub name and the value is the corresponding EventHandlerTemplate.

## EventHandlerSettingsItems
### Properties
### Additional Properties
* **Additional Properties Type**: [EventHandlerTemplate](#eventhandlertemplate)[]

## EventHandlerTemplate
### Properties
* **auth**: [UpstreamAuthSettings](#upstreamauthsettings): Gets or sets the auth settings for an event handler. If not set, no auth is used.
* **systemEventPattern**: string: Gets ot sets the system event pattern.
There are 2 kind of patterns supported:
    1. The single event name, for example, "connect", it matches "connect"
    2. Combine multiple events with ",", for example "connect,disconnected", it matches event "connect" and "disconnected"
* **urlTemplate**: string (Required): Gets or sets the EventHandler URL template. You can use a predefined parameter {hub} and {event} inside the template, the value of the EventHandler URL is dynamically calculated when the client request comes in.
For example, UrlTemplate can be `http://example.com/api/{hub}/{event}`. The host part can't contains parameters.
* **userEventPattern**: string: Gets or sets the matching pattern for event names.
There are 3 kind of patterns supported:
    1. "*", it to matches any event name
    2. Combine multiple events with ",", for example "event1,event2", it matches event "event1" and "event2"
    3. The single event name, for example, "event1", it matches "event1"

## LiveTraceCategory
### Properties
* **enabled**: string: Indicates whether or the log category is enabled.
Available values: true, false.
Case insensitive.
* **name**: string: Gets or sets the log category's name.
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
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned' | string: Represent the identity type: systemAssigned, userAssigned, None
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
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
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
* **capacity**: int: Optional, integer. The unit count of the resource. 1 by default.

If present, following values are allowed:
    Free: 1
    Standard: 1,2,5,10,20,50,100
* **family**: string (ReadOnly): Not used. Retained for future use.
* **name**: string (Required): The name of the SKU. Required.

Allowed values: Standard_S1, Free_F1
* **size**: string (ReadOnly): Not used. Retained for future use.
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard' | string: Optional tier of this particular SKU. 'Standard' or 'Free'. 

`Basic` is deprecated, use `Standard` instead.

## SharedPrivateLinkResource
### Properties
* **id**: string (ReadOnly): Fully qualified resource Id for the resource.
* **name**: string (ReadOnly): The name of the resource.
* **properties**: [SharedPrivateLinkResourceProperties](#sharedprivatelinkresourceproperties): Describes the properties of a Shared Private Link Resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: string (ReadOnly): The type of the resource - e.g. "Microsoft.SignalRService/SignalR"

## SharedPrivateLinkResourceProperties
### Properties
* **groupId**: string (Required): The group id from the provider of resource the shared private link resource is for
* **privateLinkResourceId**: string (Required): The resource id of the resource the shared private link resource is for
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of the shared private link resource
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

## UpstreamAuthSettings
### Properties
* **managedIdentity**: [ManagedIdentitySettings](#managedidentitysettings): Gets or sets the managed identity settings. It's required if the auth type is set to ManagedIdentity.
* **type**: 'ManagedIdentity' | 'None' | string: Gets or sets the type of auth. None or ManagedIdentity is supported now.

## UserAssignedIdentityProperty
### Properties
* **clientId**: string (ReadOnly): Get the client id for the user assigned identity
* **principalId**: string (ReadOnly): Get the principal id for the user assigned identity

## WebPubSubKeys
### Properties
* **primaryConnectionString**: string (WriteOnly): Connection string constructed via the primaryKey
* **primaryKey**: string (WriteOnly): The primary access key.
* **secondaryConnectionString**: string (WriteOnly): Connection string constructed via the secondaryKey
* **secondaryKey**: string (WriteOnly): The secondary access key.

## WebPubSubNetworkACLs
### Properties
* **defaultAction**: 'Allow' | 'Deny' | string: Default action when no other rule matches
* **privateEndpoints**: [PrivateEndpointACL](#privateendpointacl)[]: ACLs for requests from private endpoints
* **publicNetwork**: [NetworkACL](#networkacl): ACL for requests from public network

## WebPubSubProperties
### Properties
* **disableAadAuth**: bool: DisableLocalAuth
Enable or disable aad auth
When set as true, connection with AuthType=aad won't work.
* **disableLocalAuth**: bool: DisableLocalAuth
Enable or disable local auth with AccessKey
When set as true, connection with AccessKey=xxx won't work.
* **eventHandler**: [EventHandlerSettings](#eventhandlersettings): The settings for event handler in webpubsub service.
* **externalIP**: string (ReadOnly): The publicly accessible IP of the resource.
* **hostName**: string (ReadOnly): FQDN of the service instance.
* **liveTraceConfiguration**: [LiveTraceConfiguration](#livetraceconfiguration): Live trace configuration of a Microsoft.SignalRService resource.
* **networkACLs**: [WebPubSubNetworkACLs](#webpubsubnetworkacls): Network ACLs
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): Private endpoint connections to the resource.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **publicNetworkAccess**: string: Enable or disable public network access. Default to "Enabled".
When it's Enabled, network ACLs still apply.
When it's Disabled, public network access is always disabled no matter what you set in network ACLs.
* **publicPort**: int (ReadOnly): The publicly accessible port of the resource which is designed for browser/client side usage.
* **serverPort**: int (ReadOnly): The publicly accessible port of the resource which is designed for customer server side usage.
* **sharedPrivateLinkResources**: [SharedPrivateLinkResource](#sharedprivatelinkresource)[] (ReadOnly): The list of shared private link resources.
* **tls**: [WebPubSubTlsSettings](#webpubsubtlssettings): TLS settings.
* **version**: string (ReadOnly): Version of the resource. Probably you need the same or higher version of client SDKs.

## WebPubSubTlsSettings
### Properties
* **clientCertEnabled**: bool: Request client certificate during TLS handshake if enabled

