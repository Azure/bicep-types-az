# Microsoft.StorageDiscovery @ 2026-10-01-preview

## Resource Microsoft.StorageDiscovery/storageDiscoveryWorkspaces@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 4, maxLength: 64, pattern: "^[a-zA-Z][a-zA-Z0-9]*(-[a-zA-Z0-9]+)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [StorageDiscoveryWorkspaceProperties](#storagediscoveryworkspaceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.StorageDiscovery/storageDiscoveryWorkspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageDiscovery/storageDiscoveryWorkspaces/reports@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ReportProperties](#reportproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.StorageDiscovery/storageDiscoveryWorkspaces/reports' (ReadOnly, DeployTimeConstant): The resource type

## Function generateReport (Microsoft.StorageDiscovery/storageDiscoveryWorkspaces/reports@2026-10-01-preview)
* **Resource**: Microsoft.StorageDiscovery/storageDiscoveryWorkspaces/reports
* **ApiVersion**: 2026-10-01-preview
* **Input**: [GetReportContent](#getreportcontent)
* **Output**: [GetReportResult](#getreportresult)

## Function report (Microsoft.StorageDiscovery/storageDiscoveryWorkspaces@2026-10-01-preview)
* **Resource**: Microsoft.StorageDiscovery/storageDiscoveryWorkspaces
* **ApiVersion**: 2026-10-01-preview
* **Input**: [GetReportContent](#getreportcontent)
* **Output**: [GetReportResult](#getreportresult)

## AzureBlobStorageCapability
### Properties
* **capacityDetails**: [CapacityDetails](#capacitydetails) (Required): The capacity details configuration for Azure Blob Storage.
* **prefixDefinitions**: [PrefixDefinition](#prefixdefinition)[]: The prefix definitions that scope the capacity details to specific storage accounts, containers, and prefixes.

## CapacityDetails
### Properties
* **status**: 'Disabled' | 'Enabled' | string (Required): The enablement status of the capacity details capability.

## GetReportContent
### Properties
* **queries**: string[] (Required): The queries to execute against Storage Discovery data.
Format: Base64-encoded JSON object with structure:
{"queries":[{"name":"queryName","query":"KQL query"}]}
For query syntax and available tables, see: https://aka.ms/storageDiscoveryQuery

## GetReportResult
### Properties
* **results**: [ReportResultSet](#reportresultset)[] (Required): One or more result sets, in the same order as the queries in the request body

## PrefixDefinition
### Properties
* **containerName**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9]([a-z0-9]|(-(?!-))){1,61}[a-z0-9]$"} (Required): The name of the blob container within the storage account.
* **prefix**: string {maxLength: 1024}: The blob prefix within the container to scope capacity details to. An empty value scopes to the entire container. Must not start with a '/'.
* **storageAccountName**: string {minLength: 3, maxLength: 24, pattern: "^[a-z0-9]{3,24}$"} (Required): The name of the storage account.

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

## StorageDiscoveryCapabilities
### Properties
* **azureBlobStorage**: [AzureBlobStorageCapability](#azureblobstoragecapability) (Required): The Azure Blob Storage capability configuration for the storage discovery workspace.

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
* **capabilities**: [StorageDiscoveryCapabilities](#storagediscoverycapabilities): The capabilities configured for the storage discovery workspace.
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

