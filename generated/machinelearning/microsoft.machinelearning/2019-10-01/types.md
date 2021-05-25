# Microsoft.MachineLearning @ 2019-10-01

## Resource Microsoft.MachineLearning/workspaces@2019-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource. This cannot be changed after the resource is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): The properties of a machine learning workspace.
* **sku**: [Sku](#sku): Sku of the resource
* **tags**: [ResourceTags](#resourcetags): The tags of the resource.
* **type**: 'Microsoft.MachineLearning/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## WorkspaceProperties
### Properties
* **creationTime**: string (ReadOnly): The creation time for this workspace resource.
* **keyVaultIdentifierId**: string: The key vault identifier used for encrypted workspaces.
* **ownerEmail**: string (Required): The email id of the owner for this workspace.
* **studioEndpoint**: string (ReadOnly): The regional endpoint for the machine learning studio service which hosts this workspace.
* **userStorageAccountId**: string (Required): The fully qualified arm id of the storage account associated with this workspace.
* **workspaceId**: string (ReadOnly): The immutable id associated with this workspace.
* **workspaceState**: 'Deleted' | 'Disabled' | 'Enabled' | 'Migrated' | 'Registered' | 'Unregistered' | 'Updated' (ReadOnly): The current state of workspace resource.
* **workspaceType**: 'Anonymous' | 'Free' | 'PaidPremium' | 'PaidStandard' | 'Production' (ReadOnly): The type of this workspace.

## Sku
### Properties
* **name**: string: Name of the sku
* **tier**: string: Tier of the sku like Basic or Enterprise

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

