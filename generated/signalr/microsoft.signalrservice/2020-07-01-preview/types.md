# Microsoft.SignalRService @ 2020-07-01-preview

## Resource Microsoft.SignalRService/signalR@2020-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ManagedIdentity
* **kind**: 'RawWebSockets' | 'SignalR'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: SignalRProperties
* **sku**: ResourceSku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.SignalRService/signalR' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SignalRService/signalR/privateEndpointConnections@2020-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.SignalRService/signalR/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## ManagedIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned'
* **userAssignedIdentities**: Dictionary<string,UserAssignedIdentityProperty>

## Dictionary<string,UserAssignedIdentityProperty>
### Additional Properties
* **Additional Properties Type**: UserAssignedIdentityProperty

## UserAssignedIdentityProperty
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## SignalRProperties
### Properties
* **cors**: SignalRCorsSettings
* **externalIP**: string (ReadOnly)
* **features**: SignalRFeature[]
* **hostName**: string (ReadOnly)
* **networkACLs**: SignalRNetworkACLs
* **privateEndpointConnections**: PrivateEndpointConnection[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **publicPort**: int (ReadOnly)
* **serverPort**: int (ReadOnly)
* **tls**: SignalRTlsSettings
* **upstream**: ServerlessUpstreamSettings
* **version**: string (ReadOnly)

## SignalRCorsSettings
### Properties
* **allowedOrigins**: string[]

## SignalRFeature
### Properties
* **flag**: 'EnableConnectivityLogs' | 'EnableMessagingLogs' | 'ServiceMode' (Required)
* **properties**: Dictionary<string,String>
* **value**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## SignalRNetworkACLs
### Properties
* **defaultAction**: 'Allow' | 'Deny'
* **privateEndpoints**: PrivateEndpointACL[]
* **publicNetwork**: NetworkACL

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
* **properties**: PrivateEndpointConnectionProperties
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: PrivateEndpoint
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionState
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
* **templates**: UpstreamTemplate[]

## UpstreamTemplate
### Properties
* **auth**: UpstreamAuthSettings
* **categoryPattern**: string
* **eventPattern**: string
* **hubPattern**: string
* **urlTemplate**: string (Required)

## UpstreamAuthSettings
### Properties
* **managedIdentity**: ManagedIdentitySettings
* **type**: 'ManagedIdentity' | 'None'

## ManagedIdentitySettings
### Properties
* **resource**: string

## ResourceSku
### Properties
* **capacity**: int
* **family**: string
* **name**: string (Required)
* **size**: string
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

