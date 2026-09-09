# Microsoft.ResourceGraph @ 2019-04-01

## Resource Microsoft.ResourceGraph/queries@2019-04-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: This will be used to handle Optimistic Concurrency. If not present, it will always overwrite the existing resource without checking conflict.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource
* **name**: string {pattern: "^[^<>&:\?]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GraphQueryProperties](#graphqueryproperties): Metadata describing a graph query for an Azure resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.ResourceGraph/queries' (ReadOnly, DeployTimeConstant): The resource type

## Function resources (Microsoft.ResourceGraph@2019-04-01)
* **Resource**: Microsoft.ResourceGraph
* **ApiVersion**: 2019-04-01
* **Input**: [QueryRequest](#queryrequest)
* **Output**: [QueryResponse](#queryresponse)

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
* **resultFormat**: 'objectArray' | 'table': Defines in which format query result returned.

## QueryResponse
### Properties
* **$skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and subscriptions used in the current request) to retrieve the next page of data.
* **count**: int (Required): Number of records returned in the current response. In the case of paging, this is the number of records in the current page.
* **data**: any (Required): Query output in tabular format.
* **facets**: [Facet](#facet)[]: Query facets.
* **resultTruncated**: 'false' | 'true' (Required): Indicates whether the query results are truncated.
* **totalRecords**: int (Required): Number of total records matching the query.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

