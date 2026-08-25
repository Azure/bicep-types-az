# Microsoft.OperationalInsights @ 2015-03-20

## Resource Microsoft.OperationalInsights/workspaces/savedSearches@2015-03-20
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-03-20' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: The ETag of the saved search.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SavedSearchProperties](#savedsearchproperties) (Required): The properties of the saved search.
* **type**: 'Microsoft.OperationalInsights/workspaces/savedSearches' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/storageInsightConfigs@2015-03-20
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-03-20' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: The ETag of the storage insight.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageInsightProperties](#storageinsightproperties): Storage insight properties.
* **tags**: [ProxyResourceTags](#proxyresourcetags): Resource tags
* **type**: 'Microsoft.OperationalInsights/workspaces/storageInsightConfigs' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.OperationalInsights/workspaces@2015-03-20)
* **Resource**: Microsoft.OperationalInsights/workspaces
* **ApiVersion**: 2015-03-20
* **Output**: [SharedKeys](#sharedkeys)

## Function purge (Microsoft.OperationalInsights/workspaces@2015-03-20)
* **Resource**: Microsoft.OperationalInsights/workspaces
* **ApiVersion**: 2015-03-20
* **Input**: [WorkspacePurgeBody](#workspacepurgebody)
* **Output**: [WorkspacePurgeResponse](#workspacepurgeresponse)

## Function regenerateSharedKey (Microsoft.OperationalInsights/workspaces@2015-03-20)
* **Resource**: Microsoft.OperationalInsights/workspaces
* **ApiVersion**: 2015-03-20
* **Output**: [SharedKeys](#sharedkeys)

## Function schema (Microsoft.OperationalInsights/workspaces@2015-03-20)
* **Resource**: Microsoft.OperationalInsights/workspaces
* **ApiVersion**: 2015-03-20
* **Output**: [SearchGetSchemaResponse](#searchgetschemaresponse)

## CoreSummary
### Properties
* **numberOfDocuments**: int (Required): The number of documents of a core summary.
* **status**: string: The status of a core summary.

## ProxyResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SavedSearchProperties
### Properties
* **category**: string (Required): The category of the saved search. This helps the user to find a saved search faster.
* **displayName**: string (Required): Saved search display name.
* **query**: string (Required): The query expression for the saved search. Please see https://docs.microsoft.com/en-us/azure/log-analytics/log-analytics-search-reference for reference.
* **tags**: [Tag](#tag)[]: The tags attached to the saved search.
* **version**: int {minValue: 1, maxValue: 2}: The version number of the query language. The current version is 2 and is the default.

## SearchGetSchemaResponse
### Properties
* **metadata**: [SearchMetadata](#searchmetadata): The metadata from search results.
* **value**: [SearchSchemaValue](#searchschemavalue)[]: The array of result values.

## SearchMetadata
### Properties
* **aggregatedGroupingFields**: string: The aggregated grouping fields.
* **aggregatedValueField**: string: The aggregated value field.
* **coreSummaries**: [CoreSummary](#coresummary)[]: The core summaries.
* **eTag**: string: The ETag of the search results.
* **id**: string: The id of the search results request.
* **lastUpdated**: string: The time of last update.
* **max**: int: The max of all aggregates returned in the result set.
* **requestId**: string: The request id of the search.
* **requestTime**: int: The request time.
* **resultType**: string: The search result type.
* **schema**: [SearchMetadataSchema](#searchmetadataschema): The schema.
* **sort**: [SearchSort](#searchsort)[]: How the results are sorted.
* **startTime**: string: The start time for the search.
* **status**: string: The status of the search results.
* **sum**: int: The sum of all aggregates returned in the result set.
* **top**: int: The number of top search results.
* **total**: int: The total number of search results.

## SearchMetadataSchema
### Properties
* **name**: string: The name of the metadata schema.
* **version**: int: The version of the metadata schema.

## SearchSchemaValue
### Properties
* **displayName**: string: The display name of the schema.
* **facet**: bool (Required): The boolean that indicates whether or not the field is a facet.
* **indexed**: bool (Required): The boolean that indicates the field is searchable as free text.
* **name**: string: The name of the schema.
* **ownerType**: string[]: The array of workflows containing the field.
* **stored**: bool (Required): The boolean that indicates whether or not the field is stored.
* **type**: string: The type.

## SearchSort
### Properties
* **name**: string: The name of the field the search query is sorted on.
* **order**: 'asc' | 'desc' | string: The sort order of the search.

## SharedKeys
### Properties
* **primarySharedKey**: string: The primary shared key of a workspace.
* **secondarySharedKey**: string: The secondary shared key of a workspace.

## StorageAccount
### Properties
* **id**: string (Required): The Azure Resource Manager ID of the storage account resource.
* **key**: string (Required): The storage account key.

## StorageInsightProperties
### Properties
* **containers**: string[]: The names of the blob containers that the workspace should read
* **status**: [StorageInsightStatus](#storageinsightstatus) (ReadOnly): The status of the storage insight
* **storageAccount**: [StorageAccount](#storageaccount) (Required): The storage account connection details
* **tables**: string[]: The names of the Azure tables that the workspace should read

## StorageInsightStatus
### Properties
* **description**: string: Description of the state of the storage insight.
* **state**: 'ERROR' | 'OK' | string (Required): The state of the storage insight connection to the workspace

## Tag
### Properties
* **name**: string (Required): The tag name.
* **value**: string (Required): The tag value.

## WorkspacePurgeBody
### Properties
* **filters**: [WorkspacePurgeBodyFilters](#workspacepurgebodyfilters)[] (Required): The set of columns and filters (queries) to run over them to purge the resulting data.
* **table**: string (Required): Table from which to purge data.

## WorkspacePurgeBodyFilters
### Properties
* **column**: string: The column of the table over which the given query should run
* **key**: string: When filtering over custom dimensions, this key will be used as the name of the custom dimension.
* **operator**: string: A query operator to evaluate over the provided column and value(s). Supported operators are ==, =~, in, in~, >, >=, <, <=, between, and have the same behavior as they would in a KQL query.
* **value**: any: the value for the operator to function over. This can be a number (e.g., > 100), a string (timestamp >= '2017-09-01') or array of values.

## WorkspacePurgeResponse
### Properties
* **operationId**: string (Required): Id to use when querying for status for a particular purge operation.

