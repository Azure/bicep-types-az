# Microsoft.ResourceGraph @ 2020-09-01-preview

## Function resourceChangeDetails (Microsoft.ResourceGraph@2020-09-01-preview)
* **Resource**: Microsoft.ResourceGraph
* **ApiVersion**: 2020-09-01-preview
* **Input**: [ResourceChangeDetailsRequestParameters](#resourcechangedetailsrequestparameters)
* **Output**: [ResourceChangeData](#resourcechangedata)[]

## Function resourceChanges (Microsoft.ResourceGraph@2020-09-01-preview)
* **Resource**: Microsoft.ResourceGraph
* **ApiVersion**: 2020-09-01-preview
* **Input**: [ResourceChangesRequestParameters](#resourcechangesrequestparameters)
* **Output**: [ResourceChangeList](#resourcechangelist)

## ResourceChangeData
### Properties
* **afterSnapshot**: [ResourceChangeDataAfterSnapshot](#resourcechangedataaftersnapshot) (Required): The snapshot after the change.
* **beforeSnapshot**: [ResourceChangeDataBeforeSnapshot](#resourcechangedatabeforesnapshot) (Required): The snapshot before the change.
* **changeId**: string (Required): The change ID. Valid and unique within the specified resource only.
* **changeType**: 'Create' | 'Delete' | 'Update': The change type for snapshot. PropertyChanges will be provided in case of Update change type
* **propertyChanges**: [ResourcePropertyChange](#resourcepropertychange)[]: An array of resource property change
* **resourceId**: string: The resource for a change.

## ResourceChangeDataAfterSnapshot
### Properties
* **content**: any: The resource snapshot content (in resourceChangeDetails response only).
* **snapshotId**: string: The ID of the snapshot.
* **timestamp**: string (Required): The time when the snapshot was created.
The snapshot timestamp provides an approximation as to when a modification to a resource was detected.  There can be a difference between the actual modification time and the detection time.  This is due to differences in how operations that modify a resource are processed, versus how operation that record resource snapshots are processed.

## ResourceChangeDataBeforeSnapshot
### Properties
* **content**: any: The resource snapshot content (in resourceChangeDetails response only).
* **snapshotId**: string: The ID of the snapshot.
* **timestamp**: string (Required): The time when the snapshot was created.
The snapshot timestamp provides an approximation as to when a modification to a resource was detected.  There can be a difference between the actual modification time and the detection time.  This is due to differences in how operations that modify a resource are processed, versus how operation that record resource snapshots are processed.

## ResourceChangeDetailsRequestParameters
### Properties
* **changeIds**: string[] (Required): Specifies the list of change IDs for a change details request.
* **resourceIds**: string[] (Required): Specifies the list of resources for a change details request.

## ResourceChangeList
### Properties
* **$skipToken**: any: Skip token that encodes the skip information while executing the current request
* **changes**: [ResourceChangeData](#resourcechangedata)[]: The pageable value returned by the operation, i.e. a list of changes to the resource.

- The list is ordered from the most recent changes to the least recent changes.
- This list will be empty if there were no changes during the requested interval.
- The `Before` snapshot timestamp value of the oldest change can be outside of the specified time interval.

## ResourceChangesRequestParameters
### Properties
* **$skipToken**: string: Acts as the continuation token for paged responses.
* **$top**: int {minValue: 1, maxValue: 1000}: The maximum number of changes the client can accept in a paged response.
* **fetchPropertyChanges**: bool: The flag if set to true will fetch property changes
* **fetchSnapshots**: bool: The flag if set to true will fetch change snapshots
* **interval**: [ResourceChangesRequestParametersInterval](#resourcechangesrequestparametersinterval) (Required): Specifies the date and time interval for a changes request.
* **resourceIds**: string[]: Specifies the list of resources for a changes request.
* **subscriptionId**: string: The subscription id of resources to query the changes from.
* **table**: string: The table name to query resources from.

## ResourceChangesRequestParametersInterval
### Properties
* **end**: string (Required): A datetime indicating the exclusive/open end of the time interval, i.e. `[start, `**`end`**`)`. Specifying an `end` that occurs chronologically before `start` will result in an error.
* **start**: string (Required): A datetime indicating the inclusive/closed start of the time interval, i.e. `[`**`start`**`, end)`. Specifying a `start` that occurs chronologically after `end` will result in an error.

## ResourcePropertyChange
### Properties
* **afterValue**: string: The property value in after snapshot
* **beforeValue**: string: The property value in before snapshot
* **changeCategory**: 'System' | 'User' (Required): The change category.
* **propertyChangeType**: 'Insert' | 'Remove' | 'Update' (Required): The property change Type
* **propertyName**: string (Required): The property name

