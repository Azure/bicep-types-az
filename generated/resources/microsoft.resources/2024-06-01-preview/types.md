# Microsoft.Resources @ 2024-06-01-preview

## Resource Microsoft.Resources/changes@2024-06-01-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ChangeProperties](#changeproperties) (ReadOnly): The properties of a change
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Resources/changes' (ReadOnly, DeployTimeConstant): The resource type

## ChangeAttributes
### Properties
* **changeControlId**: string (ReadOnly): The resource identifier of the change control resource associated with this change record.
* **changedBy**: string (ReadOnly): The identifier i.e. email id or application id of the entity that made the change(s)
* **changedByType**: 'Application' | 'ManagedIdentity' | 'Unknown' | 'User' | string (ReadOnly): The entity type that made the change(s)
* **changesCount**: int (ReadOnly): The number of changes this resource captures
* **clientType**: string (ReadOnly): Client used to make the changes
* **correlationId**: string (ReadOnly): The Azure correlation ID of the change resource
* **isTruncated**: bool (ReadOnly): The flag indicating whether property changes dictionary was truncated in this resource
* **newResourceSnapshotId**: string (ReadOnly): The GUID of the new snapshot
* **operation**: string (ReadOnly): The Azure Resource Provider operation that was invoked to make the change(s). See [here](https://learn.microsoft.com/azure/role-based-access-control/resource-provider-operations) for a full list of possible values
* **previousResourceSnapshotId**: string (ReadOnly): The GUID of the previous snapshot
* **timestamp**: string (ReadOnly): The time the change(s) on the target resource ocurred

## ChangeBase
### Properties
* **newValue**: string (ReadOnly): The target resource property value after the change
* **previousValue**: string (ReadOnly): The target resource property value before the change

## ChangeProperties
### Properties
* **changeAttributes**: [ChangeAttributes](#changeattributes): Details about the change resource
* **changes**: [ChangesDictionary](#changesdictionary): A dictionary with changed property name as a key and the change details as the value
* **changeType**: 'Create' | 'Delete' | 'Update' | string (ReadOnly): The type of change that was captured in the resource
* **targetResourceId**: string (ReadOnly): The fully qualified ID of the target resource that was changed
* **targetResourceType**: string (ReadOnly): The namespace and type of the resource

## ChangesDictionary
### Properties
### Additional Properties
* **Additional Properties Type**: [ChangeBase](#changebase)

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

