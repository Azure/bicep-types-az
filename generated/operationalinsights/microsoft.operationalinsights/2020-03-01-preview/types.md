# Microsoft.OperationalInsights @ 2020-03-01-preview

## Resource Microsoft.OperationalInsights/clusters@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): Cluster properties.
* **sku**: [ClusterSku](#clustersku): The cluster sku definition.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.OperationalInsights/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: The ETag of the workspace.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): Workspace properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.OperationalInsights/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/dataExports@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataExportProperties](#dataexportproperties): Data Export properties.
* **type**: 'Microsoft.OperationalInsights/workspaces/dataExports' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/dataSources@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The ETag of the data source.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'ApplicationInsights' | 'AzureActivityLog' | 'AzureAuditLog' | 'ChangeTrackingContentLocation' | 'ChangeTrackingCustomPath' | 'ChangeTrackingDataTypeConfiguration' | 'ChangeTrackingDefaultRegistry' | 'ChangeTrackingLinuxPath' | 'ChangeTrackingPath' | 'ChangeTrackingRegistry' | 'ChangeTrackingServices' | 'CustomLog' | 'CustomLogCollection' | 'DnsAnalytics' | 'GenericDataSource' | 'IISLogs' | 'ImportComputerGroup' | 'Itsm' | 'LinuxChangeTrackingPath' | 'LinuxPerformanceCollection' | 'LinuxPerformanceObject' | 'LinuxSyslog' | 'LinuxSyslogCollection' | 'NetworkMonitoring' | 'Office365' | 'SecurityCenterSecurityWindowsBaselineConfiguration' | 'SecurityEventCollectionConfiguration' | 'SecurityInsightsSecurityEventCollectionConfiguration' | 'SecurityWindowsBaselineConfiguration' | 'SqlDataClassification' | 'WindowsEvent' | 'WindowsPerformanceCounter' | 'WindowsTelemetry' (Required)
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any (Required): JSON object
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.OperationalInsights/workspaces/dataSources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/linkedServices@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LinkedServiceProperties](#linkedserviceproperties) (Required): Linked service properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.OperationalInsights/workspaces/linkedServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/linkedStorageAccounts@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Alerts' | 'AzureWatson' | 'CustomLogs' | 'Ingestion' | 'Query' (Required, DeployTimeConstant): The resource name
* **properties**: [LinkedStorageAccountsProperties](#linkedstorageaccountsproperties) (Required): Linked storage accounts properties.
* **type**: 'Microsoft.OperationalInsights/workspaces/linkedStorageAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/savedSearches@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The ETag of the saved search.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SavedSearchProperties](#savedsearchproperties) (Required): Value object for saved search results.
* **type**: 'Microsoft.OperationalInsights/workspaces/savedSearches' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/storageInsightConfigs@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: The ETag of the storage insight.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageInsightProperties](#storageinsightproperties): Storage insight properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.OperationalInsights/workspaces/storageInsightConfigs' (ReadOnly, DeployTimeConstant): The resource type

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' (Required): The identity type.

## ClusterProperties
### Properties
* **clusterId**: string (ReadOnly): The ID associated with the cluster.
* **keyVaultProperties**: [keyVaultProperties](#keyvaultproperties): The key vault properties.
* **nextLink**: string: The link used to get the next page of recommendations.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'ProvisioningAccount' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of the cluster.

## keyVaultProperties
### Properties
* **keyName**: string: The name of the key associated with the Log Analytics cluster.
* **keyVaultUri**: string: The Key Vault uri which holds they key associated with the Log Analytics cluster.
* **keyVersion**: string: The version of the key associated with the Log Analytics cluster.

## ClusterSku
### Properties
* **capacity**: int: The capacity value
* **name**: 'CapacityReservation': The name of the SKU.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkspaceProperties
### Properties
* **customerId**: string (ReadOnly): This is a read-only property. Represents the ID associated with the workspace.
* **privateLinkScopedResources**: [PrivateLinkScopedResource](#privatelinkscopedresource)[] (ReadOnly): List of linked private link scope resources.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'ProvisioningAccount' | 'Succeeded' | 'Updating': The provisioning state of the workspace.
* **publicNetworkAccessForIngestion**: 'Disabled' | 'Enabled': The network access type for accessing Log Analytics ingestion.
* **publicNetworkAccessForQuery**: 'Disabled' | 'Enabled': The network access type for accessing Log Analytics query.
* **retentionInDays**: int: The workspace data retention in days. -1 means Unlimited retention for the Unlimited Sku. 730 days is the maximum allowed for all other Skus.
* **sku**: [WorkspaceSku](#workspacesku): The SKU (tier) of a workspace.
* **workspaceCapping**: [WorkspaceCapping](#workspacecapping): The daily volume cap for ingestion.

## PrivateLinkScopedResource
### Properties
* **resourceId**: string: The full resource Id of the private link scope resource.
* **scopeId**: string: The private link scope unique Identifier.

## WorkspaceSku
### Properties
* **capacityReservationLevel**: int: The capacity reservation level for this workspace, when CapacityReservation sku is selected.
* **lastSkuUpdate**: string (ReadOnly): The last time when the sku was updated.
* **maxCapacityReservationLevel**: int (ReadOnly): The maximum capacity reservation level available for this workspace, when CapacityReservation sku is selected.
* **name**: 'CapacityReservation' | 'Free' | 'PerGB2018' | 'PerNode' | 'Premium' | 'Standalone' | 'Standard' (Required): The name of the SKU.

## WorkspaceCapping
### Properties
* **dailyQuotaGb**: int: The workspace daily quota for ingestion. -1 means unlimited.
* **dataIngestionStatus**: 'ApproachingQuota' | 'ForceOff' | 'ForceOn' | 'OverQuota' | 'RespectQuota' | 'SubscriptionSuspended' (ReadOnly): The status of data ingestion for this workspace.
* **quotaNextResetTime**: string (ReadOnly): The time when the quota will be rest.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DataExportProperties
### Properties
* **createdDate**: string: The latest data export rule modification time.
* **dataExportId**: string: The data export rule ID.
* **destination**: [Destination](#destination): Destination properties.
* **enable**: bool: Active when enabled.
* **lastModifiedDate**: string: Date and time when the export was last modified.
* **tableNames**: string[] (Required): An array of tables to export, for example: [“Heartbeat, SecurityEvent”].

## Destination
### Properties
* **metaData**: [DestinationMetaData](#destinationmetadata): Destination meta data.
* **resourceId**: string (Required): The destination resource ID. This can be copied from the Properties entry of the destination resource in Azure.
* **type**: 'EventHub' | 'StorageAccount' (ReadOnly): The type of the destination resource.

## DestinationMetaData
### Properties
* **eventHubName**: string: Optional. Allows to define an Event Hub name. Not applicable when destination is Storage Account.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LinkedServiceProperties
### Properties
* **provisioningState**: 'Deleting' | 'ProvisioningAccount' | 'Succeeded' | 'Updating': The provisioning state of the linked service.
* **resourceId**: string: The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require read access
* **writeAccessResourceId**: string: The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require write access

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LinkedStorageAccountsProperties
### Properties
* **dataSourceType**: 'Alerts' | 'AzureWatson' | 'CustomLogs' | 'Ingestion' | 'Query' (ReadOnly): Linked storage accounts type.
* **storageAccountIds**: string[]: Linked storage accounts resources ids.

## SavedSearchProperties
### Properties
* **category**: string (Required): The category of the saved search. This helps the user to find a saved search faster.
* **displayName**: string (Required): Saved search display name.
* **functionAlias**: string: The function alias if query serves as a function.
* **functionParameters**: string: The optional function parameters if query serves as a function. Value should be in the following format: 'param-name1:type1 = default_value1, param-name2:type2 = default_value2'. For more examples and proper syntax please refer to https://docs.microsoft.com/en-us/azure/kusto/query/functions/user-defined-functions.
* **query**: string (Required): The query expression for the saved search.
* **tags**: [Tag](#tag)[]: The tags attached to the saved search.
* **version**: int: The version number of the query language. The current version is 2 and is the default.

## Tag
### Properties
* **name**: string (Required): The tag name.
* **value**: string (Required): The tag value.

## StorageInsightProperties
### Properties
* **containers**: string[]: The names of the blob containers that the workspace should read
* **status**: [StorageInsightStatus](#storageinsightstatus) (ReadOnly): The status of the storage insight.
* **storageAccount**: [StorageAccount](#storageaccount) (Required): Describes a storage account connection.
* **tables**: string[]: The names of the Azure tables that the workspace should read

## StorageInsightStatus
### Properties
* **description**: string: Description of the state of the storage insight.
* **state**: 'ERROR' | 'OK' (Required): The state of the storage insight connection to the workspace.

## StorageAccount
### Properties
* **id**: string (Required): The Azure Resource Manager ID of the storage account resource.
* **key**: string (Required): The storage account key.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

