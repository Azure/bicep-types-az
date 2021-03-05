# Microsoft.SignalRService @ 2018-10-01

## Resource Microsoft.SignalRService/signalR@2018-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SignalRCreateOrUpdateProperties
* **sku**: ResourceSku
* **tags**: SignalRUpdateParametersTags
* **type**: 'Microsoft.SignalRService/signalR' (ReadOnly, DeployTimeConstant)

## SignalRCreateOrUpdateProperties
### Properties
* **cors**: SignalRCorsSettings
* **features**: SignalRFeature[]
* **hostNamePrefix**: string

## SignalRCorsSettings
### Properties
* **allowedOrigins**: string[]

## SignalRFeature
### Properties
* **flag**: 'EnableConnectivityLogs' | 'ServiceMode' (Required)
* **properties**: SignalRFeatureProperties
* **value**: string (Required)

## SignalRFeatureProperties
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

## SignalRUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

