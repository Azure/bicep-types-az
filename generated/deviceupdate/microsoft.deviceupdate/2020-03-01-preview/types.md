# Microsoft.DeviceUpdate @ 2020-03-01-preview

## Resource Microsoft.DeviceUpdate/accounts@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:0_properties](#schemas0properties): Device Update account properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.DeviceUpdate/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceUpdate/accounts/instances@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:2_properties](#schemas2properties) (Required): Device Update instance properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.DeviceUpdate/accounts/instances' (ReadOnly, DeployTimeConstant): The resource type

## schemas:0_properties
### Properties
* **hostName**: string (ReadOnly): API host name.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Failed' | 'Succeeded' (ReadOnly): Provisioning state.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:2_properties
### Properties
* **accountName**: string (ReadOnly): Parent Device Update Account name which Instance belongs to.
* **iotHubs**: [IotHubSettings](#iothubsettings)[]: List of IoT Hubs associated with the account.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Failed' | 'Succeeded' (ReadOnly): Provisioning state.

## IotHubSettings
### Properties
* **eventHubConnectionString**: string: EventHub connection string.
* **ioTHubConnectionString**: string: IoTHub connection string.
* **resourceId**: string (Required): IoTHub resource ID

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

