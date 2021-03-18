# Microsoft.DeviceUpdate @ 2020-03-01-preview

## Resource Microsoft.DeviceUpdate/accounts@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AccountProperties
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.DeviceUpdate/accounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DeviceUpdate/accounts/instances@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: InstanceProperties (Required)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.DeviceUpdate/accounts/instances' (ReadOnly, DeployTimeConstant)

## AccountProperties
### Properties
* **hostName**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Failed' | 'Succeeded' (ReadOnly)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InstanceProperties
### Properties
* **accountName**: string (ReadOnly)
* **iotHubs**: IotHubSettings[]
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Failed' | 'Succeeded' (ReadOnly)

## IotHubSettings
### Properties
* **eventHubConnectionString**: string
* **ioTHubConnectionString**: string
* **resourceId**: string (Required)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

