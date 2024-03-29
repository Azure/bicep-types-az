# Microsoft.Resources @ 2023-07-01-preview

## Resource Microsoft.Resources/changes@2023-07-01-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ChangeProperties](#changeproperties) (ReadOnly): The properties of a change
* **type**: 'Microsoft.Resources/changes' (ReadOnly, DeployTimeConstant): The resource type

## ChangeAttributes
### Properties
* **changedBy**: string (ReadOnly): The entity that made the change(s)
* **changedByType**: 'Application' | 'ManagedIdentity' | 'Unknown' | 'User' | string (ReadOnly): The entity type that made the change(s)
* **changesCount**: int (ReadOnly): The number of changes this resource captures
* **clientType**: string (ReadOnly): Client used to make the changes
* **correlationId**: string (ReadOnly): The ARM correlation ID of the change resource
* **isTruncated**: bool (ReadOnly): The flag indicating whether property changes dictionary was truncated in this resource
* **newResourceSnapshotId**: string (ReadOnly): The GUID of the new snapshot
* **operation**: string (ReadOnly): The Azure Resource Provider operation that was invoked to make the change(s). See [here](https://learn.microsoft.com/en-us/azure/role-based-access-control/resource-provider-operations) for a full list of possible values
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

