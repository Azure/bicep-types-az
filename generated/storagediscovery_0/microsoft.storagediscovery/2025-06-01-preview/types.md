# Microsoft.StorageDiscovery @ 2025-06-01-preview

## Resource Microsoft.StorageDiscovery/storageDiscoveryWorkspaces@2025-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 4, maxLength: 64, pattern: "^[a-zA-Z][a-zA-Z0-9]*(-[a-zA-Z0-9]+)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [StorageDiscoveryWorkspaceProperties](#storagediscoveryworkspaceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.StorageDiscovery/storageDiscoveryWorkspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageDiscovery/storageDiscoveryWorkspaces/reports@2025-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ReportProperties](#reportproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.StorageDiscovery/storageDiscoveryWorkspaces/reports' (ReadOnly, DeployTimeConstant): The resource type

## Function generateReport (Microsoft.StorageDiscovery/storageDiscoveryWorkspaces/reports@2025-06-01-preview)
* **Resource**: Microsoft.StorageDiscovery/storageDiscoveryWorkspaces/reports
* **ApiVersion**: 2025-06-01-preview
* **Input**: [GetReportContent](#getreportcontent)
* **Output**: [GetReportResult](#getreportresult)

## Function report (Microsoft.StorageDiscovery/storageDiscoveryWorkspaces@2025-06-01-preview)
* **Resource**: Microsoft.StorageDiscovery/storageDiscoveryWorkspaces
* **ApiVersion**: 2025-06-01-preview
* **Input**: [GetReportContent](#getreportcontent)
* **Output**: [GetReportResult](#getreportresult)

## GetReportContent
### Properties
* **queries**: string[] (Required): The queries to execute against Storage Discovery data.
Format: Base64-encoded JSON object with structure:
{"queries":[{"name":"queryName","query":"KQL query"}]}
For query syntax and available tables, see: https://aka.ms/storageDiscoveryQuery

## GetReportResult
### Properties
* **results**: [ReportResultSet](#reportresultset)[] (Required): One or more result sets, in the same order as the queries in the request body

## ReportProperties
### Properties
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.

## ReportResultColumn
### Properties
* **name**: string (Required): Name of the column
* **type**: string (Required): ADX type of the column

## ReportResultSet
### Properties
* **columns**: [ReportResultColumn](#reportresultcolumn)[]: Array of columns object, present only if the query succeeded
* **errorCode**: string: Provides an error about the query, present only if the query fails
* **rows**: string[][]: Array of all rows from ADX, present only if the query succeeded

## StorageDiscoveryScope
### Properties
* **displayName**: string {minLength: 4, maxLength: 64, pattern: "^[a-zA-Z0-9]+([ -][a-zA-Z0-9]+)*$"} (Required): Display name of the collection
* **resourceTypes**: ('Microsoft.Storage/storageAccounts' | string)[] (Required): Resource types for the collection
* **tagKeysOnly**: string[]: The storage account tags keys to filter
* **tags**: [StorageDiscoveryScopeTags](#storagediscoveryscopetags): Resource tags.

## StorageDiscoveryScopeTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StorageDiscoveryWorkspaceProperties
### Properties
* **description**: string: The description of the storage discovery workspace
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.
* **scopes**: [StorageDiscoveryScope](#storagediscoveryscope)[] (Required): The scopes of the storage discovery workspace.
* **sku**: 'Free' | 'Standard' | string: The storage discovery sku
* **workspaceRoots**: string[] (Required): The view level storage discovery data estate

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

