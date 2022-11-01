# Microsoft.Resources @ 2022-11-01-preview

## Resource Microsoft.Resources/snapshots@2022-11-01-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2022-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SnapshotProperties](#snapshotproperties) (ReadOnly): The properties of a snapshot
* **type**: 'Microsoft.Resources/snapshots' (ReadOnly, DeployTimeConstant): The resource type

## SnapshotProperties
### Properties
* **apiVersion**: string: The API Version of the resource captured
* **content**: [SnapshotPropertiesContent](#snapshotpropertiescontent): The actual ARM Resource

## SnapshotPropertiesContent
### Properties
### Additional Properties
* **Additional Properties Type**: any

