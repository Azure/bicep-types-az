# Microsoft.SignalRService @ 2020-07-01-preview

## Resource Microsoft.SignalRService/signalR@2020-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedIdentity](#managedidentity)
* **kind**: 'RawWebSockets' | 'SignalR'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SignalRProperties](#signalrproperties)
* **sku**: [ResourceSku](#resourcesku)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.SignalRService/signalR' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SignalRService/signalR/privateEndpointConnections@2020-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: 'Microsoft.SignalRService/signalR/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## ManagedIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned'
* **userAssignedIdentities**: [ManagedIdentityUserAssignedIdentities](#managedidentityuserassignedidentities)

## ManagedIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentityProperty](#userassignedidentityproperty)

## UserAssignedIdentityProperty
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## SignalRProperties
### Properties
* **cors**: [SignalRCorsSettings](#signalrcorssettings)
* **externalIP**: string (ReadOnly)
* **features**: [SignalRFeature](#signalrfeature)[]
* **hostName**: string (ReadOnly)
* **networkACLs**: [SignalRNetworkACLs](#signalrnetworkacls)
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **publicPort**: int (ReadOnly)
* **serverPort**: int (ReadOnly)
* **tls**: [SignalRTlsSettings](#signalrtlssettings)
* **upstream**: [ServerlessUpstreamSettings](#serverlessupstreamsettings)
* **version**: string (ReadOnly)

## SignalRCorsSettings
### Properties
* **allowedOrigins**: string[]

## SignalRFeature
### Properties
* **flag**: 'EnableConnectivityLogs' | 'EnableMessagingLogs' | 'ServiceMode' (Required)
* **properties**: [SignalRFeatureProperties](#signalrfeatureproperties)
* **value**: string (Required)

## SignalRFeatureProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SignalRNetworkACLs
### Properties
* **defaultAction**: 'Allow' | 'Deny'
* **privateEndpoints**: [PrivateEndpointACL](#privateendpointacl)[]
* **publicNetwork**: [NetworkACL](#networkacl)

## PrivateEndpointACL
### Properties
* **allow**: 'ClientConnection' | 'RESTAPI' | 'ServerConnection'[]
* **deny**: 'ClientConnection' | 'RESTAPI' | 'ServerConnection'[]
* **name**: string (Required)

## NetworkACL
### Properties
* **allow**: 'ClientConnection' | 'RESTAPI' | 'ServerConnection'[]
* **deny**: 'ClientConnection' | 'RESTAPI' | 'ServerConnection'[]

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)

## PrivateEndpoint
### Properties
* **id**: string

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string
* **description**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected'

## SignalRTlsSettings
### Properties
* **clientCertEnabled**: bool

## ServerlessUpstreamSettings
### Properties
* **templates**: [UpstreamTemplate](#upstreamtemplate)[]

## UpstreamTemplate
### Properties
* **auth**: [UpstreamAuthSettings](#upstreamauthsettings)
* **categoryPattern**: string
* **eventPattern**: string
* **hubPattern**: string
* **urlTemplate**: string (Required)

## UpstreamAuthSettings
### Properties
* **managedIdentity**: [ManagedIdentitySettings](#managedidentitysettings)
* **type**: 'ManagedIdentity' | 'None'

## ManagedIdentitySettings
### Properties
* **resource**: string

## ResourceSku
### Properties
* **capacity**: int
* **family**: string (ReadOnly)
* **name**: string (Required)
* **size**: string (ReadOnly)
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard'

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

