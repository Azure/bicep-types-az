# Microsoft.DeviceUpdate @ 2020-03-01-preview

## Resource Microsoft.DeviceUpdate/accounts@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:0_properties](#schemas0properties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DeviceUpdate/accounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DeviceUpdate/accounts/instances@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:2_properties](#schemas2properties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DeviceUpdate/accounts/instances' (ReadOnly, DeployTimeConstant)

## schemas:0_properties
### Properties
* **hostName**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Failed' | 'Succeeded' (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:2_properties
### Properties
* **accountName**: string (ReadOnly)
* **iotHubs**: [IotHubSettings](#iothubsettings)[]
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Failed' | 'Succeeded' (ReadOnly)

## IotHubSettings
### Properties
* **eventHubConnectionString**: string
* **ioTHubConnectionString**: string
* **resourceId**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

