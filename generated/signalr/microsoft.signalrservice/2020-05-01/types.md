# Microsoft.SignalRService @ 2020-05-01

## Microsoft.SignalRService/signalR
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

## SignalRProperties
### Properties
* **cors**: SignalRCorsSettings
* **externalIP**: string (ReadOnly)
* **features**: SignalRFeature[]
* **hostName**: string (ReadOnly)
* **hostNamePrefix**: string
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
* **family**: string
* **name**: string (Required)
* **size**: string
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.SignalRService/signalR/privateEndpointConnections
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.SignalRService/signalR/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

