# Microsoft.DeviceUpdate @ 2020-03-01-preview

## Resource Microsoft.DeviceUpdate/accounts@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccountProperties](#accountproperties): Device Update account properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceUpdate/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceUpdate/accounts/instances@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InstanceProperties](#instanceproperties) (Required): Device Update instance properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceUpdate/accounts/instances' (ReadOnly, DeployTimeConstant): The resource type

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned': The identity type.

## AccountProperties
### Properties
* **hostName**: string (ReadOnly): API host name.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Failed' | 'Succeeded' (ReadOnly): Provisioning state.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InstanceProperties
### Properties
* **accountName**: string (ReadOnly): Parent Device Update Account name which Instance belongs to.
* **enableDiagnostics**: bool: Enables or Disables the diagnostic logs collection
* **iotHubs**: [IotHubSettings](#iothubsettings)[]: List of IoT Hubs associated with the account.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Failed' | 'Succeeded' (ReadOnly): Provisioning state.

## IotHubSettings
### Properties
* **eventHubConnectionString**: string: EventHub connection string.
* **ioTHubConnectionString**: string: IoTHub connection string.
* **resourceId**: string (Required): IoTHub resource ID

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

