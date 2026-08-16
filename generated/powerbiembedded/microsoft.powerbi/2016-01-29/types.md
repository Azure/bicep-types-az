# Microsoft.PowerBI @ 2016-01-29

## Resource Microsoft.PowerBI/workspaceCollections@2016-01-29
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-01-29' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Azure location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any (ReadOnly): Properties
* **sku**: [AzureSku](#azuresku)
* **tags**: [CreateWorkspaceCollectionRequestTags](#createworkspacecollectionrequesttags): Dictionary of <string>
* **type**: 'Microsoft.PowerBI/workspaceCollections' (ReadOnly, DeployTimeConstant): The resource type

## Function checkNameAvailability (Microsoft.PowerBI/locations@2016-01-29)
* **Resource**: Microsoft.PowerBI/locations
* **ApiVersion**: 2016-01-29
* **Input**: [CheckNameRequest](#checknamerequest)
* **Output**: [CheckNameResponse](#checknameresponse)

## Function listKeys (Microsoft.PowerBI/workspaceCollections@2016-01-29)
* **Resource**: Microsoft.PowerBI/workspaceCollections
* **ApiVersion**: 2016-01-29
* **Output**: [WorkspaceCollectionAccessKeys](#workspacecollectionaccesskeys)

## Function regenerateKey (Microsoft.PowerBI/workspaceCollections@2016-01-29)
* **Resource**: Microsoft.PowerBI/workspaceCollections
* **ApiVersion**: 2016-01-29
* **Input**: [WorkspaceCollectionAccessKey](#workspacecollectionaccesskey)
* **Output**: [WorkspaceCollectionAccessKeys](#workspacecollectionaccesskeys)

## AzureSku
### Properties
* **name**: 'S1' | string (Required): SKU name
* **tier**: 'Standard' | string (Required): SKU tier

## CheckNameRequest
### Properties
* **name**: string: Workspace collection name
* **type**: string: Resource type

## CheckNameResponse
### Properties
* **message**: string: Message indicating an unavailable name due to a conflict, or a description of the naming rules that are violated.
* **nameAvailable**: bool: Specifies a Boolean value that indicates whether the specified Power BI Workspace Collection name is available to use.
* **reason**: 'Invalid' | 'Unavailable' | string: Reason why the workspace collection name cannot be used.

## CreateWorkspaceCollectionRequestTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkspaceCollectionAccessKey
### Properties
* **keyName**: 'key1' | 'key2': Key name

## WorkspaceCollectionAccessKeys
### Properties
* **key1**: string: Access key 1
* **key2**: string: Access key 2

