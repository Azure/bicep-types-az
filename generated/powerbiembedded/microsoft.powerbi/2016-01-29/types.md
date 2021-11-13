# Microsoft.PowerBI @ 2016-01-29

## Resource Microsoft.PowerBI/workspaceCollections@2016-01-29
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-01-29' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Azure location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any (ReadOnly): Any object
* **sku**: [AzureSku](#azuresku)
* **tags**: [CreateWorkspaceCollectionRequestTags](#createworkspacecollectionrequesttags): Dictionary of <string>
* **type**: 'Microsoft.PowerBI/workspaceCollections' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.PowerBI/workspaceCollections@2016-01-29)
* **Resource**: Microsoft.PowerBI/workspaceCollections
* **ApiVersion**: 2016-01-29
* **Output**: [WorkspaceCollectionAccessKeys](#workspacecollectionaccesskeys)

## AzureSku
### Properties
* **name**: 'S1' (Required): SKU name
* **tier**: 'Standard' (Required): SKU tier

## CreateWorkspaceCollectionRequestTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

