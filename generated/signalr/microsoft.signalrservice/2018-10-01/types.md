# Microsoft.SignalRService @ 2018-10-01

## Resource Microsoft.SignalRService/SignalR@2018-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SignalRCreateOrUpdateProperties
* **sku**: ResourceSku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.SignalRService/signalR' (ReadOnly, DeployTimeConstant)

## Function listKeys (Microsoft.SignalRService/SignalR@2018-10-01)
* **Resource**: Microsoft.SignalRService/SignalR
* **ApiVersion**: 2018-10-01
* **Output**: SignalRKeys

## SignalRCreateOrUpdateProperties
### Properties
* **cors**: SignalRCorsSettings
* **externalIP**: string (ReadOnly)
* **features**: SignalRFeature[]
* **hostName**: string (ReadOnly)
* **hostNamePrefix**: string
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **publicPort**: int (ReadOnly)
* **serverPort**: int (ReadOnly)
* **version**: string (ReadOnly)

## SignalRCorsSettings
### Properties
* **allowedOrigins**: string[]

## SignalRFeature
### Properties
* **flag**: 'EnableConnectivityLogs' | 'ServiceMode' (Required)
* **properties**: Dictionary<string,String>
* **value**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceSku
### Properties
* **capacity**: int
* **family**: string
* **name**: string (Required)
* **size**: string
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

