# Microsoft.Resources @ 2022-05-01

## Resource Microsoft.Resources/changes@2022-05-01 (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ChangeProperties](#changeproperties) (ReadOnly): The properties of a change
* **type**: 'Microsoft.Resources/changes' (ReadOnly, DeployTimeConstant): The resource type

## ChangeAttributes
### Properties
* **changesCount**: int (ReadOnly): The number of changes this resource captures
* **correlationId**: string (ReadOnly): The ARM correlation ID of the change resource
* **newResourceSnapshotId**: string (ReadOnly): The GUID of the new snapshot
* **previousResourceSnapshotId**: string (ReadOnly): The GUID of the previous snapshot
* **timestamp**: string (ReadOnly): The time the change(s) on the target resource ocurred

## ChangeBase
### Properties
* **changeCategory**: 'System' | 'User' (ReadOnly): The entity that made the change
* **newValue**: string (ReadOnly): The target resource property value after the change
* **previousValue**: string (ReadOnly): The target resource property value before the change
* **propertyChangeType**: 'Insert' | 'Remove' | 'Update' (ReadOnly): The type of change that occurred

## ChangeProperties
### Properties
* **changeAttributes**: [ChangeAttributes](#changeattributes): Details about the change resource
* **changes**: [ChangesDictionary](#changesdictionary): A dictionary with changed property name as a key and the change details as the value
* **changeType**: 'Create' | 'Delete' | 'Update' (ReadOnly): The type of change that was captured in the resource
* **targetResourceId**: string (ReadOnly): The fully qualified ID of the target resource that was changed
* **targetResourceType**: string (ReadOnly): The namespace and type of the resource

## ChangesDictionary
### Properties
### Additional Properties
* **Additional Properties Type**: [ChangeBase](#changebase)

