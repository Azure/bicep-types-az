# Microsoft.SignalRService @ 2018-03-01-preview

## Resource Microsoft.SignalRService/SignalR@2018-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SignalRCreateOrUpdateProperties](#signalrcreateorupdateproperties)
* **sku**: [ResourceSku](#resourcesku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.SignalRService/SignalR' (ReadOnly, DeployTimeConstant)

## SignalRCreateOrUpdateProperties
### Properties
* **externalIP**: string (ReadOnly)
* **hostName**: string (ReadOnly)
* **hostNamePrefix**: string
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **publicPort**: int (ReadOnly)
* **serverPort**: int (ReadOnly)
* **version**: string (ReadOnly)

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

