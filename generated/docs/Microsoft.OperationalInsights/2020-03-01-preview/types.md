# Microsoft.OperationalInsights @ 2020-03-01-preview

## Microsoft.OperationalInsights/clusters
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ClusterProperties
* **sku**: ClusterSku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.OperationalInsights/clusters' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' (Required)

## ClusterProperties
### Properties
* **clusterId**: string (ReadOnly)
* **keyVaultProperties**: keyVaultProperties
* **nextLink**: string
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'ProvisioningAccount' | 'Succeeded' | 'Updating' (ReadOnly)

## keyVaultProperties
### Properties
* **keyName**: string
* **keyVaultUri**: string
* **keyVersion**: string

## ClusterSku
### Properties
* **capacity**: int
* **name**: 'CapacityReservation'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.OperationalInsights/workspaces/dataExports
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DataExportProperties
* **type**: 'Microsoft.OperationalInsights/workspaces/dataExports' (ReadOnly, DeployTimeConstant)

## DataExportProperties
### Properties
* **createdDate**: string
* **dataExportId**: string
* **destination**: Destination
* **enable**: bool
* **lastModifiedDate**: string
* **tableNames**: string[]

## Destination
### Properties
* **metaData**: DestinationMetaData
* **resourceId**: string (Required)
* **type**: 'EventHub' | 'StorageAccount' (ReadOnly)

## DestinationMetaData
### Properties
* **eventHubName**: string

## Microsoft.OperationalInsights/workspaces/dataSources
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'ApplicationInsights' | 'AzureActivityLog' | 'AzureAuditLog' | 'ChangeTrackingContentLocation' | 'ChangeTrackingCustomPath' | 'ChangeTrackingDataTypeConfiguration' | 'ChangeTrackingDefaultRegistry' | 'ChangeTrackingLinuxPath' | 'ChangeTrackingPath' | 'ChangeTrackingRegistry' | 'ChangeTrackingServices' | 'CustomLog' | 'CustomLogCollection' | 'DnsAnalytics' | 'GenericDataSource' | 'IISLogs' | 'ImportComputerGroup' | 'Itsm' | 'LinuxChangeTrackingPath' | 'LinuxPerformanceCollection' | 'LinuxPerformanceObject' | 'LinuxSyslog' | 'LinuxSyslogCollection' | 'NetworkMonitoring' | 'Office365' | 'SecurityCenterSecurityWindowsBaselineConfiguration' | 'SecurityEventCollectionConfiguration' | 'SecurityInsightsSecurityEventCollectionConfiguration' | 'SecurityWindowsBaselineConfiguration' | 'SqlDataClassification' | 'WindowsEvent' | 'WindowsPerformanceCounter' | 'WindowsTelemetry' (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: any (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.OperationalInsights/workspaces/dataSources' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.OperationalInsights/workspaces/linkedServices
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: LinkedServiceProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.OperationalInsights/workspaces/linkedServices' (ReadOnly, DeployTimeConstant)

## LinkedServiceProperties
### Properties
* **provisioningState**: 'Deleting' | 'ProvisioningAccount' | 'Succeeded' | 'Updating'
* **resourceId**: string
* **writeAccessResourceId**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.OperationalInsights/workspaces/linkedStorageAccounts
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'Alerts' | 'AzureWatson' | 'CustomLogs' | 'Ingestion' | 'Query' (Required, DeployTimeConstant)
* **properties**: LinkedStorageAccountsProperties (Required)
* **type**: 'Microsoft.OperationalInsights/workspaces/linkedStorageAccounts' (ReadOnly, DeployTimeConstant)

## LinkedStorageAccountsProperties
### Properties
* **dataSourceType**: 'Alerts' | 'AzureWatson' | 'CustomLogs' | 'Ingestion' | 'Query' (ReadOnly)
* **storageAccountIds**: string[]

## Microsoft.OperationalInsights/workspaces/savedSearches
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SavedSearchProperties (Required)
* **type**: 'Microsoft.OperationalInsights/workspaces/savedSearches' (ReadOnly, DeployTimeConstant)

## SavedSearchProperties
### Properties
* **category**: string (Required)
* **displayName**: string (Required)
* **functionAlias**: string
* **functionParameters**: string
* **query**: string (Required)
* **tags**: Tag[]
* **version**: int

## Tag
### Properties
* **name**: string (Required)
* **value**: string (Required)

## Microsoft.OperationalInsights/workspaces/storageInsightConfigs
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageInsightProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.OperationalInsights/workspaces/storageInsightConfigs' (ReadOnly, DeployTimeConstant)

## StorageInsightProperties
### Properties
* **containers**: string[]
* **status**: StorageInsightStatus (ReadOnly)
* **storageAccount**: StorageAccount (Required)
* **tables**: string[]

## StorageInsightStatus
### Properties
* **description**: string
* **state**: 'ERROR' | 'OK' (Required)

## StorageAccount
### Properties
* **id**: string (Required)
* **key**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.OperationalInsights/workspaces
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkspaceProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.OperationalInsights/workspaces' (ReadOnly, DeployTimeConstant)

## WorkspaceProperties
### Properties
* **customerId**: string (ReadOnly)
* **privateLinkScopedResources**: PrivateLinkScopedResource[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'ProvisioningAccount' | 'Succeeded' | 'Updating'
* **publicNetworkAccessForIngestion**: 'Disabled' | 'Enabled'
* **publicNetworkAccessForQuery**: 'Disabled' | 'Enabled'
* **retentionInDays**: int
* **sku**: WorkspaceSku
* **workspaceCapping**: WorkspaceCapping

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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

