# Microsoft.PowerBI @ 2016-01-29

## Resource Microsoft.PowerBI/workspaceCollections@2016-01-29
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-01-29' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Azure location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any (ReadOnly): Properties
* **sku**: [AzureSku](#azuresku)
* **tags**: [CreateWorkspaceCollectionRequestTags](#createworkspacecollectionrequesttags): Dictionary of <string>
* **type**: 'Microsoft.PowerBI/workspaceCollections' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.PowerBI/workspaceCollections@2016-01-29)
* **Resource**: Microsoft.PowerBI/workspaceCollections
* **ApiVersion**: 2016-01-29
* **Output**: [WorkspaceCollectionAccessKeys](#workspacecollectionaccesskeys)

## AzureSku
### Properties
* **name**: 'S1' | string (Required): SKU name
* **tier**: 'Standard' | string (Required): SKU tier

## CreateWorkspaceCollectionRequestTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkspaceCollectionAccessKeys
### Properties
* **key1**: string: Access key 1
* **key2**: string: Access key 2

