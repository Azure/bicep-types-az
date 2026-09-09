# Microsoft.ResourceGraph @ 2018-09-01-preview

## Resource Microsoft.ResourceGraph/queries@2018-09-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: This will be used to handle Optimistic Concurrency. If not present, it will always overwrite the existing resource without checking conflict.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GraphQueryProperties](#graphqueryproperties): Metadata describing a graph query for an Azure resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.ResourceGraph/queries' (ReadOnly, DeployTimeConstant): The resource type

## Function resourceChangeDetails (Microsoft.ResourceGraph@2018-09-01-preview)
* **Resource**: Microsoft.ResourceGraph
* **ApiVersion**: 2018-09-01-preview
* **Input**: [ResourceChangeDetailsRequestParameters](#resourcechangedetailsrequestparameters)
* **Output**: [ResourceChangeData](#resourcechangedata)

## Function resourceChanges (Microsoft.ResourceGraph@2018-09-01-preview)
* **Resource**: Microsoft.ResourceGraph
* **ApiVersion**: 2018-09-01-preview
* **Input**: [ResourceChangesRequestParameters](#resourcechangesrequestparameters)
* **Output**: [ResourceChangeList](#resourcechangelist)

## Function resources (Microsoft.ResourceGraph@2018-09-01-preview)
* **Resource**: Microsoft.ResourceGraph
* **ApiVersion**: 2018-09-01-preview
* **Input**: [QueryRequest](#queryrequest)
* **Output**: [QueryResponse](#queryresponse)

## Column
### Properties
* **name**: string (Required): Column name.
* **type**: 'boolean' | 'integer' | 'number' | 'object' | 'string' (Required): Column data type.

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
* **data**: [Table](#table) (Required): A table containing the desired facets. Only present if the facet is valid.
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

## GraphQueryProperties
### Properties
* **description**: string: The description of a graph query.
* **query**: string (Required): KQL query that will be graph.
* **resultKind**: 'basic' | string (ReadOnly): Enum indicating a type of graph query.
* **timeModified**: string (ReadOnly): Date and time in UTC of the last modification that was made to this graph query definition.

## QueryRequest
### Properties
* **facets**: [FacetRequest](#facetrequest)[]: An array of facet requests to be computed against the query result.
* **options**: [QueryRequestOptions](#queryrequestoptions): The query evaluation options
* **query**: string (Required): The resources query.
* **subscriptions**: string[] (Required): Azure subscriptions against which to execute the query.

## QueryRequestOptions
### Properties
* **$skip**: int {minValue: 0}: The number of rows to skip from the beginning of the results. Overrides the next page offset when ```$skipToken``` property is present.
* **$skipToken**: string: Continuation token for pagination, capturing the next page size and offset, as well as the context of the query.
* **$top**: int {minValue: 1, maxValue: 1000}: The maximum number of rows that the query should return. Overrides the page size when ```$skipToken``` property is present.

## QueryResponse
### Properties
* **$skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and subscriptions used in the current request) to retrieve the next page of data.
* **count**: int (Required): Number of records returned in the current response. In the case of paging, this is the number of records in the current page.
* **data**: [Table](#table) (Required): Query output in tabular format.
* **facets**: [Facet](#facet)[]: Query facets.
* **resultTruncated**: 'false' | 'true' (Required): Indicates whether the query results are truncated.
* **totalRecords**: int (Required): Number of total records matching the query.

## ResourceChangeData
### Properties
* **afterSnapshot**: [ResourceChangeDataAfterSnapshot](#resourcechangedataaftersnapshot) (Required): The snapshot after the change.
* **beforeSnapshot**: [ResourceChangeDataBeforeSnapshot](#resourcechangedatabeforesnapshot) (Required): The snapshot before the change.
* **changeId**: string (Required): The change ID. Valid and unique within the specified resource only.

## ResourceChangeDataAfterSnapshot
### Properties
* **content**: any: The resource snapshot content (in resourceChangeDetails response only).
* **timestamp**: string (Required): The time when the snapshot was created.
The snapshot timestamp provides an approximation as to when a modification to a resource was detected.  There can be a difference between the actual modification time and the detection time.  This is due to differences in how operations that modify a resource are processed, versus how operation that record resource snapshots are processed.

## ResourceChangeDataBeforeSnapshot
### Properties
* **content**: any: The resource snapshot content (in resourceChangeDetails response only).
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
* **interval**: [ResourceChangesRequestParametersInterval](#resourcechangesrequestparametersinterval) (Required): Specifies the date and time interval for a changes request.
* **resourceId**: string (Required): Specifies the resource for a changes request.

## ResourceChangesRequestParametersInterval
### Properties
* **end**: string (Required): A datetime indicating the exclusive/open end of the time interval, i.e. `[start, `**`end`**`)`. Specifying an `end` that occurs chronologically before `start` will result in an error.
* **start**: string (Required): A datetime indicating the inclusive/closed start of the time interval, i.e. `[`**`start`**`, end)`. Specifying a `start` that occurs chronologically after `end` will result in an error.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Table
### Properties
* **columns**: [Column](#column)[] (Required): Query result column descriptors.
* **rows**: any[][] (Required): Query result rows.

