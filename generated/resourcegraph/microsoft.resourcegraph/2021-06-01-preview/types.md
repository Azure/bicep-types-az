# Microsoft.ResourceGraph @ 2021-06-01-preview

## Function resources (Microsoft.ResourceGraph@2021-06-01-preview)
* **Resource**: Microsoft.ResourceGraph
* **ApiVersion**: 2021-06-01-preview
* **Input**: [QueryRequest](#queryrequest)
* **Output**: [QueryResponse](#queryresponse)

## Function resourcesHistory (Microsoft.ResourceGraph@2021-06-01-preview)
* **Resource**: Microsoft.ResourceGraph
* **ApiVersion**: 2021-06-01-preview
* **Input**: [ResourcesHistoryRequest](#resourceshistoryrequest)
* **Output**: [ResourcesHistoryResult](#resourceshistoryresult)

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
* **data**: any (Required): A JObject array or Table containing the desired facets. Only present if the facet is valid.
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
* **managementGroups**: string[]: Azure management groups against which to execute the query. Example: [ 'mg1', 'mg2' ]
* **options**: [QueryRequestOptions](#queryrequestoptions): The query evaluation options
* **query**: string (Required): The resources query.
* **subscriptions**: string[]: Azure subscriptions against which to execute the query.

## QueryRequestOptions
### Properties
* **$skip**: int {minValue: 0}: The number of rows to skip from the beginning of the results. Overrides the next page offset when ```$skipToken``` property is present.
* **$skipToken**: string: Continuation token for pagination, capturing the next page size and offset, as well as the context of the query.
* **$top**: int {minValue: 1, maxValue: 1000}: The maximum number of rows that the query should return. Overrides the page size when ```$skipToken``` property is present.
* **allowPartialScopes**: bool: Only applicable for tenant and management group level queries to decide whether to allow partial scopes for result in case the number of subscriptions exceed allowed limits.
* **authorizationScopeFilter**: 'AtScopeAboveAndBelow' | 'AtScopeAndAbove' | 'AtScopeAndBelow' | 'AtScopeExact': Defines what level of authorization resources should be returned based on the which subscriptions and management groups are passed as scopes.
* **resultFormat**: 'objectArray' | 'table': Defines in which format query result returned.

## QueryResponse
### Properties
* **$skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **count**: int (Required): Number of records returned in the current response. In the case of paging, this is the number of records in the current page.
* **data**: any (Required): Query output in JObject array or Table format.
* **facets**: [Facet](#facet)[]: Query facets.
* **resultTruncated**: 'false' | 'true' (Required): Indicates whether the query results are truncated.
* **totalRecords**: int (Required): Number of total records matching the query.

## ResourceGraphCommonDateTimeInterval
### Properties
* **end**: string (Required): A datetime indicating the exclusive/open end of the time interval, i.e. `[start, `**`end`**`)`. Specifying an `end` that occurs chronologically before `start` will result in an error.
* **start**: string (Required): A datetime indicating the inclusive/closed start of the time interval, i.e. `[`**`start`**`, end)`. Specifying a `start` that occurs chronologically after `end` will result in an error.

## ResourcesHistoryRequest
### Properties
* **managementGroups**: string[]: Azure management groups against which to execute the query. Example: [ 'mg1', 'mg2' ]
* **options**: [ResourcesHistoryRequestOptions](#resourceshistoryrequestoptions): The history request evaluation options
* **query**: string: The resources query.
* **subscriptions**: string[]: Azure subscriptions against which to execute the query.

## ResourcesHistoryRequestOptions
### Properties
* **$skip**: int {minValue: 0}: The number of rows to skip from the beginning of the results. Overrides the next page offset when ```$skipToken``` property is present.
* **$skipToken**: string: Continuation token for pagination, capturing the next page size and offset, as well as the context of the query.
* **$top**: int {minValue: 1, maxValue: 1000}: The maximum number of rows that the query should return. Overrides the page size when ```$skipToken``` property is present.
* **interval**: [ResourceGraphCommonDateTimeInterval](#resourcegraphcommondatetimeinterval): The time interval used to fetch history.
* **resultFormat**: 'objectArray' | 'table': Defines in which format query result returned.

## ResourcesHistoryResult
### Properties
### Additional Properties
* **Additional Properties Type**: any

