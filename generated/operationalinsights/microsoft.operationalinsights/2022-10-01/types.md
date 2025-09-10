# Microsoft.OperationalInsights @ 2022-10-01

## Resource Microsoft.OperationalInsights/clusters@2022-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Resource's identity.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 4, maxLength: 63, pattern: "^[A-Za-z0-9][A-Za-z0-9-]+[A-Za-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): Log Analytics cluster properties.
* **sku**: [ClusterSku](#clustersku): The sku properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.OperationalInsights/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces@2022-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the workspace.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 4, maxLength: 63, pattern: "^[A-Za-z0-9][A-Za-z0-9-]+[A-Za-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): Workspace properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.OperationalInsights/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/tables@2022-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TableProperties](#tableproperties): Table's properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.OperationalInsights/workspaces/tables' (ReadOnly, DeployTimeConstant): The resource type

## AssociatedWorkspace
### Properties
* **associateDate**: string (ReadOnly): The time of workspace association.
* **resourceId**: string (ReadOnly): Associated workspace arm resource id, in the form of: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}.
* **workspaceId**: string (ReadOnly): Associated workspace immutable id.
* **workspaceName**: string (ReadOnly): Associated workspace resource name.

## CapacityReservationProperties
### Properties
* **lastSkuUpdate**: string (ReadOnly): The last time Sku was updated.
* **minCapacity**: int (ReadOnly): Minimum CapacityReservation value in Gigabytes.

## ClusterProperties
### Properties
* **associatedWorkspaces**: [AssociatedWorkspace](#associatedworkspace)[]: The list of Log Analytics workspaces associated with the cluster
* **billingType**: 'Cluster' | 'Workspaces' | string: The cluster's billing type.
* **capacityReservationProperties**: [CapacityReservationProperties](#capacityreservationproperties): Additional properties for capacity reservation
* **clusterId**: string (ReadOnly): The ID associated with the cluster.
* **createdDate**: string (ReadOnly): The cluster creation time
* **isAvailabilityZonesEnabled**: bool: Sets whether the cluster will support availability zones. This can be set as true only in regions where Azure Data Explorer support Availability Zones. This Property can not be modified after cluster creation. Default value is 'true' if region supports Availability Zones.
* **isDoubleEncryptionEnabled**: bool: Configures whether cluster will use double encryption. This Property can not be modified after cluster creation. Default value is 'true'
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): The associated key properties.
* **lastModifiedDate**: string (ReadOnly): The last time the cluster was updated.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'ProvisioningAccount' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the cluster.

## ClusterSku
### Properties
* **capacity**: int: The capacity reservation level in Gigabytes for this cluster.
* **name**: 'CapacityReservation' | string: The SKU (tier) of a cluster.

## Column
### Properties
* **dataTypeHint**: 'armPath' | 'guid' | 'ip' | 'uri' | string: Column data type logical hint.
* **description**: string: Column description.
* **displayName**: string: Column display name.
* **isDefaultDisplay**: bool (ReadOnly): Is displayed by default.
* **isHidden**: bool (ReadOnly): Is column hidden.
* **name**: string: Column name.
* **type**: 'boolean' | 'dateTime' | 'dynamic' | 'guid' | 'int' | 'long' | 'real' | 'string' | string: Column data type.

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned' (Required): Type of managed service identity.
* **userAssignedIdentities**: [IdentityUserAssignedIdentities](#identityuserassignedidentities): The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## IdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentityProperties](#useridentityproperties)

## KeyVaultProperties
### Properties
* **keyName**: string: The name of the key associated with the Log Analytics cluster.
* **keyRsaSize**: int: Selected key minimum required size.
* **keyVaultUri**: string: The Key Vault uri which holds they key associated with the Log Analytics cluster.
* **keyVersion**: string: The version of the key associated with the Log Analytics cluster.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## PrivateLinkScopedResource
### Properties
* **resourceId**: string: The full resource Id of the private link scope resource.
* **scopeId**: string: The private link scope unique Identifier.

## RestoredLogs
### Properties
* **azureAsyncOperationId**: string (ReadOnly): Search results table async operation id.
* **endRestoreTime**: string: The timestamp to end the restore by (UTC).
* **sourceTable**: string: The table to restore data from.
* **startRestoreTime**: string: The timestamp to start the restore from (UTC).

## ResultStatistics
### Properties
* **ingestedRecords**: int (ReadOnly): The number of rows that were returned by the search job.
* **progress**: int (ReadOnly): Search job completion percentage.
* **scannedGb**: int (ReadOnly): Search job: Amount of scanned data.

## Schema
### Properties
* **categories**: string[] (ReadOnly): Table category.
* **columns**: [Column](#column)[]: A list of table custom columns.
* **description**: string: Table description.
* **displayName**: string: Table display name.
* **labels**: string[] (ReadOnly): Table labels.
* **name**: string: Table name.
* **solutions**: string[] (ReadOnly): List of solutions the table is affiliated with
* **source**: 'customer' | 'microsoft' | string (ReadOnly): Table's creator.
* **standardColumns**: [Column](#column)[] (ReadOnly): A list of table standard columns.
* **tableSubType**: 'Any' | 'Classic' | 'DataCollectionRuleBased' | string (ReadOnly): The subtype describes what APIs can be used to interact with the table, and what features are available against it.
* **tableType**: 'CustomLog' | 'Microsoft' | 'RestoredLogs' | 'SearchResults' | string (ReadOnly): Table's creator.

## SearchResults
### Properties
* **azureAsyncOperationId**: string (ReadOnly): Search results table async operation id.
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
* **provisioningState**: 'Deleting' | 'InProgress' | 'Succeeded' | 'Updating' | string (ReadOnly): Table's current provisioning state. If set to 'updating', indicates a resource lock due to ongoing operation, forbidding any update to the table until the ongoing operation is concluded.
* **restoredLogs**: [RestoredLogs](#restoredlogs): Parameters of the restore operation that initiated this table.
* **resultStatistics**: [ResultStatistics](#resultstatistics) (ReadOnly): Search job execution statistics.
* **retentionInDays**: int {minValue: 4, maxValue: 730}: The table retention in days, between 4 and 730. Setting this property to -1 will default to the workspace retention.
* **retentionInDaysAsDefault**: bool (ReadOnly): True - Value originates from workspace retention in days, False - Customer specific.
* **schema**: [Schema](#schema): Table schema.
* **searchResults**: [SearchResults](#searchresults): Parameters of the search job that initiated this table.
* **totalRetentionInDays**: int {minValue: 4, maxValue: 4383}: The table total retention in days, between 4 and 4383. Setting this property to -1 will default to table retention.
* **totalRetentionInDaysAsDefault**: bool (ReadOnly): True - Value originates from retention in days, False - Customer specific.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## UserIdentityProperties
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

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

