# Microsoft.SignalRService @ 2018-10-01

## Resource Microsoft.SignalRService/signalR@2018-10-01
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
### Additional Properties
* **Additional Properties Type**: string

