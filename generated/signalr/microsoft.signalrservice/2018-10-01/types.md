# Microsoft.SignalRService @ 2018-10-01

## Resource Microsoft.SignalRService/signalR@2018-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SignalRCreateOrUpdateProperties](#signalrcreateorupdateproperties)
* **sku**: [ResourceSku](#resourcesku)
* **tags**: [SignalRUpdateParametersTags](#signalrupdateparameterstags)
* **type**: 'Microsoft.SignalRService/signalR' (ReadOnly, DeployTimeConstant)

## SignalRCreateOrUpdateProperties
### Properties
* **cors**: [SignalRCorsSettings](#signalrcorssettings)
* **externalIP**: string (ReadOnly)
* **features**: [SignalRFeature](#signalrfeature)[]
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
* **properties**: [SignalRFeatureProperties](#signalrfeatureproperties)
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

