# Microsoft.SignalRService @ 2020-05-01

## Resource Microsoft.SignalRService/signalR@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'RawWebSockets' | 'SignalR'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: SignalRProperties
* **sku**: ResourceSku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.SignalRService/signalR' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SignalRService/signalR/privateEndpointConnections@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.SignalRService/signalR/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Function listKeys (Microsoft.SignalRService/signalR@2020-05-01)
* **Resource**: Microsoft.SignalRService/signalR
* **ApiVersion**: 2020-05-01
* **Output**: SignalRKeys

## SignalRProperties
### Properties
* **cors**: SignalRCorsSettings
* **externalIP**: string (ReadOnly)
* **features**: SignalRFeature[]
* **hostName**: string (ReadOnly)
* **hostNamePrefix**: string (ReadOnly)
* **networkACLs**: SignalRNetworkACLs
* **privateEndpointConnections**: PrivateEndpointConnection[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **publicPort**: int (ReadOnly)
* **serverPort**: int (ReadOnly)
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
### Properties
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

## ServerlessUpstreamSettings
### Properties
* **templates**: UpstreamTemplate[]

## UpstreamTemplate
### Properties
* **categoryPattern**: string
* **eventPattern**: string
* **hubPattern**: string
* **urlTemplate**: string (Required)

## ResourceSku
### Properties
* **capacity**: int
* **family**: string (ReadOnly)
* **name**: string (Required)
* **size**: string (ReadOnly)
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SignalRKeys
### Properties
* **primaryConnectionString**: string (ReadOnly)
* **primaryKey**: string (ReadOnly)
* **secondaryConnectionString**: string (ReadOnly)
* **secondaryKey**: string (ReadOnly)

