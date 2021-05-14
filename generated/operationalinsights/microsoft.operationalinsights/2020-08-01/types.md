# Microsoft.OperationalInsights @ 2020-08-01

## Resource Microsoft.OperationalInsights/workspaces/dataExports@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataExportProperties](#dataexportproperties): Data Export properties.
* **type**: 'Microsoft.OperationalInsights/workspaces/dataExports' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/dataSources@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The ETag of the data source.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'ApplicationInsights' | 'AzureActivityLog' | 'AzureAuditLog' | 'ChangeTrackingContentLocation' | 'ChangeTrackingCustomPath' | 'ChangeTrackingDataTypeConfiguration' | 'ChangeTrackingDefaultRegistry' | 'ChangeTrackingLinuxPath' | 'ChangeTrackingPath' | 'ChangeTrackingRegistry' | 'ChangeTrackingServices' | 'CustomLog' | 'CustomLogCollection' | 'DnsAnalytics' | 'GenericDataSource' | 'IISLogs' | 'ImportComputerGroup' | 'Itsm' | 'LinuxChangeTrackingPath' | 'LinuxPerformanceCollection' | 'LinuxPerformanceObject' | 'LinuxSyslog' | 'LinuxSyslogCollection' | 'NetworkMonitoring' | 'Office365' | 'SecurityCenterSecurityWindowsBaselineConfiguration' | 'SecurityEventCollectionConfiguration' | 'SecurityInsightsSecurityEventCollectionConfiguration' | 'SecurityWindowsBaselineConfiguration' | 'SqlDataClassification' | 'WindowsEvent' | 'WindowsPerformanceCounter' | 'WindowsTelemetry' (Required)
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any (Required): JSON object
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.OperationalInsights/workspaces/dataSources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/linkedServices@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LinkedServiceProperties](#linkedserviceproperties) (Required): Linked service properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.OperationalInsights/workspaces/linkedServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/linkedStorageAccounts@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Alerts' | 'AzureWatson' | 'CustomLogs' | 'Query' (Required, DeployTimeConstant): The resource name
* **properties**: [LinkedStorageAccountsProperties](#linkedstorageaccountsproperties) (Required): Linked storage accounts properties.
* **type**: 'Microsoft.OperationalInsights/workspaces/linkedStorageAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/savedSearches@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The ETag of the saved search.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SavedSearchProperties](#savedsearchproperties) (Required): Value object for saved search results.
* **type**: 'Microsoft.OperationalInsights/workspaces/savedSearches' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/storageInsightConfigs@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: The ETag of the storage insight.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageInsightProperties](#storageinsightproperties): Storage insight properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.OperationalInsights/workspaces/storageInsightConfigs' (ReadOnly, DeployTimeConstant): The resource type

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
* **dataSourceType**: 'Alerts' | 'AzureWatson' | 'CustomLogs' | 'Query' (ReadOnly): Linked storage accounts type.
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

