# Microsoft.OperationalInsights @ 2020-08-01

## Resource Microsoft.OperationalInsights/clusters@2020-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 4, maxLength: 63, pattern: "^[A-Za-z0-9][A-Za-z0-9-]+[A-Za-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): Log Analytics cluster properties.
* **sku**: [ClusterSku](#clustersku): The sku properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.OperationalInsights/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces@2020-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: The ETag of the workspace.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 4, maxLength: 63, pattern: "^[A-Za-z0-9][A-Za-z0-9-]+[A-Za-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): Workspace properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.OperationalInsights/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/dataExports@2020-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 4, maxLength: 63, pattern: "^[A-Za-z][A-Za-z0-9-]+[A-Za-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DataExportProperties](#dataexportproperties): data export properties.
* **type**: 'Microsoft.OperationalInsights/workspaces/dataExports' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/dataSources@2020-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The ETag of the data source.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'ApplicationInsights' | 'AzureActivityLog' | 'AzureAuditLog' | 'ChangeTrackingContentLocation' | 'ChangeTrackingCustomPath' | 'ChangeTrackingDataTypeConfiguration' | 'ChangeTrackingDefaultRegistry' | 'ChangeTrackingLinuxPath' | 'ChangeTrackingPath' | 'ChangeTrackingRegistry' | 'ChangeTrackingServices' | 'CustomLog' | 'CustomLogCollection' | 'DnsAnalytics' | 'GenericDataSource' | 'IISLogs' | 'ImportComputerGroup' | 'Itsm' | 'LinuxChangeTrackingPath' | 'LinuxPerformanceCollection' | 'LinuxPerformanceObject' | 'LinuxSyslog' | 'LinuxSyslogCollection' | 'NetworkMonitoring' | 'Office365' | 'SecurityCenterSecurityWindowsBaselineConfiguration' | 'SecurityEventCollectionConfiguration' | 'SecurityInsightsSecurityEventCollectionConfiguration' | 'SecurityWindowsBaselineConfiguration' | 'SqlDataClassification' | 'WindowsEvent' | 'WindowsPerformanceCounter' | 'WindowsTelemetry' | string (Required): The kind of the DataSource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any (Required): The data source properties in raw json format, each kind of data source have it's own schema.
* **tags**: [DataSourceTags](#datasourcetags): Resource tags.
* **type**: 'Microsoft.OperationalInsights/workspaces/dataSources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/linkedServices@2020-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LinkedServiceProperties](#linkedserviceproperties) (Required): The properties of the linked service.
* **tags**: [LinkedServiceTags](#linkedservicetags): Resource tags.
* **type**: 'Microsoft.OperationalInsights/workspaces/linkedServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/linkedStorageAccounts@2020-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Alerts' | 'AzureWatson' | 'CustomLogs' | 'Ingestion' | 'Query' (Required, DeployTimeConstant): The resource name
* **properties**: [LinkedStorageAccountsProperties](#linkedstorageaccountsproperties) (Required): Linked storage accounts properties.
* **type**: 'Microsoft.OperationalInsights/workspaces/linkedStorageAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/savedSearches@2020-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The ETag of the saved search. To override an existing saved search, use "*" or specify the current Etag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SavedSearchProperties](#savedsearchproperties) (Required): The properties of the saved search.
* **type**: 'Microsoft.OperationalInsights/workspaces/savedSearches' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/storageInsightConfigs@2020-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: The ETag of the storage insight.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageInsightProperties](#storageinsightproperties): Storage insight properties.
* **tags**: [StorageInsightTags](#storageinsighttags): Resource tags.
* **type**: 'Microsoft.OperationalInsights/workspaces/storageInsightConfigs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/tables@2020-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TableProperties](#tableproperties) (ReadOnly): Table properties.
* **type**: 'Microsoft.OperationalInsights/workspaces/tables' (ReadOnly, DeployTimeConstant): The resource type

## Function Disable (Microsoft.OperationalInsights/workspaces/intelligencePacks@2020-08-01)
* **Resource**: Microsoft.OperationalInsights/workspaces/intelligencePacks
* **ApiVersion**: 2020-08-01
* **Output**: any

## Function Enable (Microsoft.OperationalInsights/workspaces/intelligencePacks@2020-08-01)
* **Resource**: Microsoft.OperationalInsights/workspaces/intelligencePacks
* **ApiVersion**: 2020-08-01
* **Output**: any

## Function purge (Microsoft.OperationalInsights/workspaces@2020-08-01)
* **Resource**: Microsoft.OperationalInsights/workspaces
* **ApiVersion**: 2020-08-01
* **Input**: [WorkspacePurgeBody](#workspacepurgebody)
* **Output**: [WorkspacePurgeResponse](#workspacepurgeresponse)

## Function regenerateSharedKey (Microsoft.OperationalInsights/workspaces@2020-08-01)
* **Resource**: Microsoft.OperationalInsights/workspaces
* **ApiVersion**: 2020-08-01
* **Output**: [SharedKeys](#sharedkeys)

## Function schema (Microsoft.OperationalInsights/workspaces@2020-08-01)
* **Resource**: Microsoft.OperationalInsights/workspaces
* **ApiVersion**: 2020-08-01
* **Output**: [SearchGetSchemaResponse](#searchgetschemaresponse)

## Function sharedKeys (Microsoft.OperationalInsights/workspaces@2020-08-01)
* **Resource**: Microsoft.OperationalInsights/workspaces
* **ApiVersion**: 2020-08-01
* **Output**: [SharedKeys](#sharedkeys)

## ClusterProperties
### Properties
* **clusterId**: string (ReadOnly): The ID associated with the cluster.
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): The associated key properties.
* **nextLink**: string: The link used to get the next page of recommendations.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'ProvisioningAccount' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the cluster.

## ClusterSku
### Properties
* **capacity**: int: The capacity value
* **name**: 'CapacityReservation' | string: The name of the SKU.

## CoreSummary
### Properties
* **numberOfDocuments**: int (Required): The number of documents of a core summary.
* **status**: string: The status of a core summary.

## DataExportProperties
### Properties
* **createdDate**: string: The latest data export rule modification time.
* **dataExportId**: string: The data export rule ID.
* **destination**: [Destination](#destination): destination properties.
* **enable**: bool: Active when enabled.
* **lastModifiedDate**: string: Date and time when the export was last modified.
* **tableNames**: string[] (Required): An array of tables to export, for example: [“Heartbeat, SecurityEvent”].

## DataSourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Destination
### Properties
* **metaData**: [DestinationMetaData](#destinationmetadata): destination meta data.
* **resourceId**: string (Required): The destination resource ID. This can be copied from the Properties entry of the destination resource in Azure.
* **type**: 'EventHub' | 'StorageAccount' | string (ReadOnly): The type of the destination resource

## DestinationMetaData
### Properties
* **eventHubName**: string: Optional. Allows to define an Event Hub name. Not applicable when destination is Storage Account.

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' (Required): The identity type.

## KeyVaultProperties
### Properties
* **keyName**: string: The name of the key associated with the Log Analytics cluster.
* **keyVaultUri**: string: The Key Vault uri which holds they key associated with the Log Analytics cluster.
* **keyVersion**: string: The version of the key associated with the Log Analytics cluster.

## LinkedServiceProperties
### Properties
* **provisioningState**: 'Deleting' | 'ProvisioningAccount' | 'Succeeded' | 'Updating' | string: The provisioning state of the linked service.
* **resourceId**: string: The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require read access
* **writeAccessResourceId**: string: The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require write access

## LinkedServiceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LinkedStorageAccountsProperties
### Properties
* **dataSourceType**: 'Alerts' | 'AzureWatson' | 'CustomLogs' | 'Ingestion' | 'Query' (ReadOnly): Linked storage accounts type.
* **storageAccountIds**: string[]: Linked storage accounts resources ids.

## PrivateLinkScopedResource
### Properties
* **resourceId**: string: The full resource Id of the private link scope resource.
* **scopeId**: string: The private link scope unique Identifier.

## SavedSearchProperties
### Properties
* **category**: string (Required): The category of the saved search. This helps the user to find a saved search faster.
* **displayName**: string (Required): Saved search display name.
* **functionAlias**: string: The function alias if query serves as a function.
* **functionParameters**: string: The optional function parameters if query serves as a function. Value should be in the following format: 'param-name1:type1 = default_value1, param-name2:type2 = default_value2'. For more examples and proper syntax please refer to https://docs.microsoft.com/en-us/azure/kusto/query/functions/user-defined-functions.
* **query**: string (Required): The query expression for the saved search.
* **tags**: [Tag](#tag)[]: The tags attached to the saved search.
* **version**: int: The version number of the query language. The current version is 2 and is the default.

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

## StorageInsightTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TableProperties
### Properties
* **retentionInDays**: int: The data table data retention in days, between 30 and 730. Setting this property to null will default to the workspace retention.

## Tag
### Properties
* **name**: string (Required): The tag name.
* **value**: string (Required): The tag value.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkspaceCapping
### Properties
* **dailyQuotaGb**: int: The workspace daily quota for ingestion.
* **dataIngestionStatus**: 'ApproachingQuota' | 'ForceOff' | 'ForceOn' | 'OverQuota' | 'RespectQuota' | 'SubscriptionSuspended' | string (ReadOnly): The status of data ingestion for this workspace.
* **quotaNextResetTime**: string (ReadOnly): The time when the quota will be rest.

## WorkspaceFeatures
### Properties
### Additional Properties
* **Additional Properties Type**: any

## WorkspaceProperties
### Properties
* **createdDate**: string (ReadOnly): Workspace creation date.
* **customerId**: string (ReadOnly): This is a read-only property. Represents the ID associated with the workspace.
* **features**: [WorkspaceFeatures](#workspacefeatures): Workspace features.
* **forceCmkForQuery**: bool: Indicates whether customer managed storage is mandatory for query management.
* **modifiedDate**: string (ReadOnly): Workspace modification date.
* **privateLinkScopedResources**: [PrivateLinkScopedResource](#privatelinkscopedresource)[] (ReadOnly): List of linked private link scope resources.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'ProvisioningAccount' | 'Succeeded' | 'Updating' | string: The provisioning state of the workspace.
* **publicNetworkAccessForIngestion**: 'Disabled' | 'Enabled' | string: The network access type for accessing Log Analytics ingestion.
* **publicNetworkAccessForQuery**: 'Disabled' | 'Enabled' | string: The network access type for accessing Log Analytics query.
* **retentionInDays**: int: The workspace data retention in days. Allowed values are per pricing plan. See pricing tiers documentation for details.
* **sku**: [WorkspaceSku](#workspacesku): The SKU of the workspace.
* **workspaceCapping**: [WorkspaceCapping](#workspacecapping): The daily volume cap for ingestion.

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

## WorkspaceSku
### Properties
* **capacityReservationLevel**: int: The capacity reservation level for this workspace, when CapacityReservation sku is selected.
* **lastSkuUpdate**: string (ReadOnly): The last time when the sku was updated.
* **maxCapacityReservationLevel**: int (ReadOnly): The maximum capacity reservation level available for this workspace, when CapacityReservation sku is selected.
* **name**: 'CapacityReservation' | 'Free' | 'LACluster' | 'PerGB2018' | 'PerNode' | 'Premium' | 'Standalone' | 'Standard' | string (Required): The name of the SKU.

