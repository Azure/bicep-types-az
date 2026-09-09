# Microsoft.ResourceGraph @ 2020-04-01-preview

## Function resourceChangeDetails (Microsoft.ResourceGraph@2020-04-01-preview)
* **Resource**: Microsoft.ResourceGraph
* **ApiVersion**: 2020-04-01-preview
* **Input**: [ResourceChangeDetailsRequestParameters](#resourcechangedetailsrequestparameters)
* **Output**: [ResourceChangeData](#resourcechangedata)

## Function resourceChanges (Microsoft.ResourceGraph@2020-04-01-preview)
* **Resource**: Microsoft.ResourceGraph
* **ApiVersion**: 2020-04-01-preview
* **Input**: [ResourceChangesRequestParameters](#resourcechangesrequestparameters)
* **Output**: [ResourceChangeList](#resourcechangelist)

## Function resources (Microsoft.ResourceGraph@2020-04-01-preview)
* **Resource**: Microsoft.ResourceGraph
* **ApiVersion**: 2020-04-01-preview
* **Input**: [QueryRequest](#queryrequest)
* **Output**: [QueryResponse](#queryresponse)

## Function resourcesHistory (Microsoft.ResourceGraph@2020-04-01-preview)
* **Resource**: Microsoft.ResourceGraph
* **ApiVersion**: 2020-04-01-preview
* **Input**: [ResourcesHistoryRequest](#resourceshistoryrequest)
* **Output**: any

## DateTimeInterval
### Properties
* **end**: string (Required): A datetime indicating the exclusive/open end of the time interval, i.e. `[start, `**`end`**`)`. Specifying an `end` that occurs chronologically before `start` will result in an error.
* **start**: string (Required): A datetime indicating the inclusive/closed start of the time interval, i.e. `[`**`start`**`, end)`. Specifying a `start` that occurs chronologically after `end` will result in an error.

## ErrorDetails
### Properties
* **code**: string (Required): Error code identifying the specific error.
* **message**: string (Required): A human readable error message.
### Additional Properties
* **Additional Properties Type**: any

## Facet
* **Discriminator**: resultType

### Base Properties
* **expression**: string (Required): Facet expression, same as in the corresponding facet request.

### FacetError
#### Properties
* **errors**: [ErrorDetails](#errordetails)[] (Required): An array containing detected facet errors with details.
* **resultType**: 'FacetError' (Required): Result type

### FacetResult
#### Properties
* **count**: int (Required): Number of records returned in the facet response.
* **data**: any (Required): A table containing the desired facets. Only present if the facet is valid.
* **resultType**: 'FacetResult' (Required): Result type
* **totalRecords**: int (Required): Number of total records in the facet results.


## FacetRequest
### Properties
* **expression**: string (Required): The column or list of columns to summarize by
* **options**: [FacetRequestOptions](#facetrequestoptions): The options for facet evaluation

## FacetRequestOptions
### Properties
* **$top**: int {minValue: 1, maxValue: 1000}: The maximum number of facet rows that should be returned.
* **filter**: string: Specifies the filter condition for the 'where' clause which will be run on main query's result, just before the actual faceting.
* **sortBy**: string: The column name or query expression to sort on. Defaults to count if not present.
* **sortOrder**: 'asc' | 'desc': The sorting order by the selected column (count by default).

## QueryRequest
### Properties
* **facets**: [FacetRequest](#facetrequest)[]: An array of facet requests to be computed against the query result.
* **managementGroupId**: string: The management group identifier.
* **options**: [QueryRequestOptions](#queryrequestoptions): The query evaluation options
* **query**: string (Required): The resources query.
* **subscriptions**: string[]: Azure subscriptions against which to execute the query.

## QueryRequestOptions
### Properties
* **$skip**: int {minValue: 0}: The number of rows to skip from the beginning of the results. Overrides the next page offset when ```$skipToken``` property is present.
* **$skipToken**: string: Continuation token for pagination, capturing the next page size and offset, as well as the context of the query.
* **$top**: int {minValue: 1, maxValue: 1000}: The maximum number of rows that the query should return. Overrides the page size when ```$skipToken``` property is present.
* **resultFormat**: 'objectArray' | 'table': Defines in which format query result returned.

## QueryResponse
### Properties
* **$skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and subscriptions used in the current request) to retrieve the next page of data.
* **count**: int (Required): Number of records returned in the current response. In the case of paging, this is the number of records in the current page.
* **data**: any (Required): Query output in tabular format.
* **facets**: [Facet](#facet)[]: Query facets.
* **resultTruncated**: 'false' | 'true' (Required): Indicates whether the query results are truncated.
* **totalRecords**: int (Required): Number of total records matching the query.

## ResourceChangeData
### Properties
* **afterSnapshot**: [ResourceChangeDataAfterSnapshot](#resourcechangedataaftersnapshot) (Required): The snapshot after the change.
* **beforeSnapshot**: [ResourceChangeDataBeforeSnapshot](#resourcechangedatabeforesnapshot) (Required): The snapshot before the change.
* **changeId**: string (Required): The change ID. Valid and unique within the specified resource only.
* **changeType**: 'Create' | 'Delete' | 'Update': The change type for snapshot. PropertyChanges will be provided in case of Update change type
* **propertyChanges**: [ResourcePropertyChange](#resourcepropertychange)[]: An array of resource property change
* **resourceId**: string: The ID of the resource

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
* **changeId**: string (Required): Specifies the change ID.
* **resourceId**: string (Required): Specifies the resource for a change details request.

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
* **interval**: [ResourceChangesRequestParametersInterval](#resourcechangesrequestparametersinterval) (Required): Specifies the date and time interval for a changes request.
* **resourceId**: string (Required): Specifies the resource for a changes request.

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

## ResourcesHistoryRequest
### Properties
* **managementGroupId**: string
* **options**: [ResourcesHistoryRequestOptions](#resourceshistoryrequestoptions)
* **query**: string
* **subscriptions**: string[]

## ResourcesHistoryRequestOptions
### Properties
* **$skip**: int
* **$skipToken**: string
* **$top**: int
* **interval**: [DateTimeInterval](#datetimeinterval): An interval in time specifying the date and time for the inclusive start and exclusive end, i.e. `[start, end)`.
* **resultFormat**: 'objectArray' | 'table' | string

