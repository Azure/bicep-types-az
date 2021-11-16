# Microsoft.OperationalInsights @ 2015-03-20

## Resource Microsoft.OperationalInsights/workspaces/savedSearches@2015-03-20
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-03-20' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: The ETag of the saved search.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SavedSearchProperties](#savedsearchproperties) (Required): Value object for saved search results.
* **type**: 'Microsoft.OperationalInsights/workspaces/savedSearches' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/storageInsightConfigs@2015-03-20
* **Valid Scope(s)**: ResourceGroup
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

## SavedSearchProperties
### Properties
* **category**: string (Required): The category of the saved search. This helps the user to find a saved search faster.
* **displayName**: string (Required): Saved search display name.
* **query**: string (Required): The query expression for the saved search. Please see https://docs.microsoft.com/en-us/azure/log-analytics/log-analytics-search-reference for reference.
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
* **state**: 'ERROR' | 'OK' (Required): The state of the storage insight connection to the workspace

## StorageAccount
### Properties
* **id**: string (Required): The Azure Resource Manager ID of the storage account resource.
* **key**: string (Required): The storage account key.

## ProxyResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SharedKeys
### Properties
* **primarySharedKey**: string (ReadOnly): The primary shared key of a workspace.
* **secondarySharedKey**: string (ReadOnly): The secondary shared key of a workspace.

