# Microsoft.OperationalInsights @ 2020-03-01-preview

## Resource Microsoft.OperationalInsights/clusters@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ClusterProperties](#clusterproperties)
* **sku**: [ClusterSku](#clustersku)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.OperationalInsights/clusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.OperationalInsights/workspaces@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkspaceProperties](#workspaceproperties)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.OperationalInsights/workspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.OperationalInsights/workspaces/dataExports@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DataExportProperties](#dataexportproperties)
* **type**: 'Microsoft.OperationalInsights/workspaces/dataExports' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.OperationalInsights/workspaces/dataSources@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'ApplicationInsights' | 'AzureActivityLog' | 'AzureAuditLog' | 'ChangeTrackingContentLocation' | 'ChangeTrackingCustomPath' | 'ChangeTrackingDataTypeConfiguration' | 'ChangeTrackingDefaultRegistry' | 'ChangeTrackingLinuxPath' | 'ChangeTrackingPath' | 'ChangeTrackingRegistry' | 'ChangeTrackingServices' | 'CustomLog' | 'CustomLogCollection' | 'DnsAnalytics' | 'GenericDataSource' | 'IISLogs' | 'ImportComputerGroup' | 'Itsm' | 'LinuxChangeTrackingPath' | 'LinuxPerformanceCollection' | 'LinuxPerformanceObject' | 'LinuxSyslog' | 'LinuxSyslogCollection' | 'NetworkMonitoring' | 'Office365' | 'SecurityCenterSecurityWindowsBaselineConfiguration' | 'SecurityEventCollectionConfiguration' | 'SecurityInsightsSecurityEventCollectionConfiguration' | 'SecurityWindowsBaselineConfiguration' | 'SqlDataClassification' | 'WindowsEvent' | 'WindowsPerformanceCounter' | 'WindowsTelemetry' (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: any (Required)
* **tags**: [DataSourceTags](#datasourcetags)
* **type**: 'Microsoft.OperationalInsights/workspaces/dataSources' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.OperationalInsights/workspaces/linkedServices@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LinkedServiceProperties](#linkedserviceproperties) (Required)
* **tags**: [LinkedServiceTags](#linkedservicetags)
* **type**: 'Microsoft.OperationalInsights/workspaces/linkedServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.OperationalInsights/workspaces/linkedStorageAccounts@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'Alerts' | 'AzureWatson' | 'CustomLogs' | 'Ingestion' | 'Query' (Required, DeployTimeConstant)
* **properties**: [LinkedStorageAccountsProperties](#linkedstorageaccountsproperties) (Required)
* **type**: 'Microsoft.OperationalInsights/workspaces/linkedStorageAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.OperationalInsights/workspaces/savedSearches@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SavedSearchProperties](#savedsearchproperties) (Required)
* **type**: 'Microsoft.OperationalInsights/workspaces/savedSearches' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.OperationalInsights/workspaces/storageInsightConfigs@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StorageInsightProperties](#storageinsightproperties)
* **tags**: [StorageInsightTags](#storageinsighttags)
* **type**: 'Microsoft.OperationalInsights/workspaces/storageInsightConfigs' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' (Required)

## ClusterProperties
### Properties
* **clusterId**: string (ReadOnly)
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties)
* **nextLink**: string
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'ProvisioningAccount' | 'Succeeded' | 'Updating' (ReadOnly)

## KeyVaultProperties
### Properties
* **keyName**: string
* **keyVaultUri**: string
* **keyVersion**: string

## ClusterSku
### Properties
* **capacity**: int
* **name**: 'CapacityReservation'

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkspaceProperties
### Properties
* **customerId**: string (ReadOnly)
* **privateLinkScopedResources**: [PrivateLinkScopedResource](#privatelinkscopedresource)[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'ProvisioningAccount' | 'Succeeded' | 'Updating'
* **publicNetworkAccessForIngestion**: 'Disabled' | 'Enabled'
* **publicNetworkAccessForQuery**: 'Disabled' | 'Enabled'
* **retentionInDays**: int
* **sku**: [WorkspaceSku](#workspacesku)
* **workspaceCapping**: [WorkspaceCapping](#workspacecapping)

## PrivateLinkScopedResource
### Properties
* **resourceId**: string
* **scopeId**: string

## WorkspaceSku
### Properties
* **capacityReservationLevel**: int
* **lastSkuUpdate**: string (ReadOnly)
* **maxCapacityReservationLevel**: int (ReadOnly)
* **name**: 'CapacityReservation' | 'Free' | 'PerGB2018' | 'PerNode' | 'Premium' | 'Standalone' | 'Standard' (Required)

## WorkspaceCapping
### Properties
* **dailyQuotaGb**: int
* **dataIngestionStatus**: 'ApproachingQuota' | 'ForceOff' | 'ForceOn' | 'OverQuota' | 'RespectQuota' | 'SubscriptionSuspended' (ReadOnly)
* **quotaNextResetTime**: string (ReadOnly)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DataExportProperties
### Properties
* **createdDate**: string
* **dataExportId**: string
* **destination**: [Destination](#destination)
* **enable**: bool
* **lastModifiedDate**: string
* **tableNames**: string[] (Required)

## Destination
### Properties
* **metaData**: [DestinationMetaData](#destinationmetadata)
* **resourceId**: string (Required)
* **type**: 'EventHub' | 'StorageAccount' (ReadOnly)

## DestinationMetaData
### Properties
* **eventHubName**: string

## DataSourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LinkedServiceProperties
### Properties
* **provisioningState**: 'Deleting' | 'ProvisioningAccount' | 'Succeeded' | 'Updating'
* **resourceId**: string
* **writeAccessResourceId**: string

## LinkedServiceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LinkedStorageAccountsProperties
### Properties
* **dataSourceType**: 'Alerts' | 'AzureWatson' | 'CustomLogs' | 'Ingestion' | 'Query' (ReadOnly)
* **storageAccountIds**: string[]

## SavedSearchProperties
### Properties
* **category**: string (Required)
* **displayName**: string (Required)
* **functionAlias**: string
* **functionParameters**: string
* **query**: string (Required)
* **tags**: [Tag](#tag)[]
* **version**: int

## Tag
### Properties
* **name**: string (Required)
* **value**: string (Required)

## StorageInsightProperties
### Properties
* **containers**: string[]
* **status**: [StorageInsightStatus](#storageinsightstatus) (ReadOnly)
* **storageAccount**: [StorageAccount](#storageaccount) (Required)
* **tables**: string[]

## StorageInsightStatus
### Properties
* **description**: string
* **state**: 'ERROR' | 'OK' (Required)

## StorageAccount
### Properties
* **id**: string (Required)
* **key**: string (Required)

## StorageInsightTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

