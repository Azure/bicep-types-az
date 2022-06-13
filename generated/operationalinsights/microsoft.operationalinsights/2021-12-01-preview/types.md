# Microsoft.OperationalInsights @ 2021-12-01-preview

## Resource Microsoft.OperationalInsights/workspaces@2021-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: The ETag of the workspace.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): Workspace properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.OperationalInsights/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/tables@2021-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TableProperties](#tableproperties): Table's properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.OperationalInsights/workspaces/tables' (ReadOnly, DeployTimeConstant): The resource type

## Column
### Properties
* **dataTypeHint**: 'armPath' | 'guid' | 'ip' | 'uri' | string: Column data type logical hint.
* **description**: string: Column description.
* **displayName**: string: Column display name.
* **isDefaultDisplay**: bool (ReadOnly): Is displayed by default.
* **isHidden**: bool (ReadOnly): Is column hidden.
* **name**: string: Column name.
* **type**: 'boolean' | 'dateTime' | 'dynamic' | 'guid' | 'int' | 'long' | 'real' | 'string' | string: Column data type.

## PrivateLinkScopedResource
### Properties
* **resourceId**: string: The full resource Id of the private link scope resource.
* **scopeId**: string: The private link scope unique Identifier.

## RestoredLogs
### Properties
* **endRestoreTime**: string: The timestamp to end the restore by (UTC).
* **sourceTable**: string: The table to restore data from.
* **startRestoreTime**: string: The timestamp to start the restore from (UTC).

## ResultStatistics
### Properties
* **ingestedRecords**: int (ReadOnly): The number of rows that were returned by the search job.
* **progress**: int (ReadOnly): Search job completion percentage.

## Schema
### Properties
* **categories**: string[] (ReadOnly): Table category.
* **columns**: [Column](#column)[]: A list of table custom columns.
* **description**: string: Table description.
* **displayName**: string: Table display name.
* **labels**: string[] (ReadOnly): Table labels.
* **name**: string: Table name.
* **restoredLogs**: [RestoredLogs](#restoredlogs) (ReadOnly): Parameters of the restore operation that initiated this table.
* **searchResults**: [SearchResults](#searchresults) (ReadOnly): Parameters of the search job that initiated this table.
* **solutions**: string[] (ReadOnly): List of solutions the table is affiliated with
* **source**: 'customer' | 'microsoft' | string (ReadOnly): Table's creator.
* **standardColumns**: [Column](#column)[] (ReadOnly): A list of table standard columns.
* **tableSubType**: 'Any' | 'Classic' | 'DataCollectionRuleBased' | string (ReadOnly): The subtype describes what APIs can be used to interact with the table, and what features are available against it.
* **tableType**: 'CustomLog' | 'Microsoft' | 'RestoredLogs' | 'SearchResults' | string (ReadOnly): Table's creator.

## SearchResults
### Properties
* **description**: string: Search job Description.
* **endSearchTime**: string: The timestamp to end the search by (UTC)
* **limit**: int: Limit the search job to return up to specified number of rows.
* **query**: string: Search job query.
* **sourceTable**: string (ReadOnly): The table used in the search job.
* **startSearchTime**: string: The timestamp to start the search from (UTC)

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TableProperties
### Properties
* **archiveRetentionInDays**: int (ReadOnly): The table data archive retention in days. Calculated as (totalRetentionInDays-retentionInDays)
* **lastPlanModifiedDate**: string (ReadOnly): The timestamp that table plan was last modified (UTC).
* **plan**: 'Analytics' | 'Basic' | string: Instruct the system how to handle and charge the logs ingested to this table.
* **provisioningState**: 'InProgress' | 'Succeeded' | 'Updating' | string (ReadOnly): Table's current provisioning state. If set to 'updating', indicates a resource lock due to ongoing operation, forbidding any update to the table until the ongoing operation is concluded.
* **restoredLogs**: [RestoredLogs](#restoredlogs): Parameters of the restore operation that initiated this table.
* **resultStatistics**: [ResultStatistics](#resultstatistics): Search job execution statistics.
* **retentionInDays**: int: The table retention in days, between 4 and 730. Setting this property to -1 will default to the workspace retention.
* **schema**: [Schema](#schema): Table schema.
* **searchResults**: [SearchResults](#searchresults): Parameters of the search job that initiated this table.
* **totalRetentionInDays**: int: The table total retention in days, between 4 and 2555. Setting this property to -1 will default to table retention.

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
* **clusterResourceId**: string: Dedicated LA cluster resourceId that is linked to the workspaces.
* **disableLocalAuth**: bool: Disable Non-AAD based Auth.
* **enableDataExport**: bool: Flag that indicate if data should be exported.
* **enableLogAccessUsingOnlyResourcePermissions**: bool: Flag that indicate which permission to use - resource or workspace or both.
* **immediatePurgeDataOn30Days**: bool: Flag that describes if we want to remove the data after 30 days.
### Additional Properties
* **Additional Properties Type**: any

## WorkspaceProperties
### Properties
* **createdDate**: string (ReadOnly): Workspace creation date.
* **customerId**: string (ReadOnly): This is a read-only property. Represents the ID associated with the workspace.
* **defaultDataCollectionRuleResourceId**: string: The resource ID of the default Data Collection Rule to use for this workspace. Expected format is - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/dataCollectionRules/{dcrName}.
* **features**: [WorkspaceFeatures](#workspacefeatures): Workspace features.
* **forceCmkForQuery**: bool: Indicates whether customer managed storage is mandatory for query management.
* **modifiedDate**: string (ReadOnly): Workspace modification date.
* **privateLinkScopedResources**: [PrivateLinkScopedResource](#privatelinkscopedresource)[] (ReadOnly): List of linked private link scope resources.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'ProvisioningAccount' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the workspace.
* **publicNetworkAccessForIngestion**: 'Disabled' | 'Enabled' | string: The network access type for accessing Log Analytics ingestion.
* **publicNetworkAccessForQuery**: 'Disabled' | 'Enabled' | string: The network access type for accessing Log Analytics query.
* **retentionInDays**: int: The workspace data retention in days. Allowed values are per pricing plan. See pricing tiers documentation for details.
* **sku**: [WorkspaceSku](#workspacesku): The SKU of the workspace.
* **workspaceCapping**: [WorkspaceCapping](#workspacecapping): The daily volume cap for ingestion.

## WorkspaceSku
### Properties
* **capacityReservationLevel**: int: The capacity reservation level in GB for this workspace, when CapacityReservation sku is selected.
* **lastSkuUpdate**: string (ReadOnly): The last time when the sku was updated.
* **name**: 'CapacityReservation' | 'Free' | 'LACluster' | 'PerGB2018' | 'PerNode' | 'Premium' | 'Standalone' | 'Standard' | string (Required): The name of the SKU.

