# Microsoft.MachineLearning @ 2019-10-01

## Resource Microsoft.MachineLearning/workspaces@2019-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkspaceProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.MachineLearning/workspaces' (ReadOnly, DeployTimeConstant)

## WorkspaceProperties
### Properties
* **creationTime**: string (ReadOnly)
* **keyVaultIdentifierId**: string
* **ownerEmail**: string (Required)
* **studioEndpoint**: string (ReadOnly)
* **userStorageAccountId**: string (Required)
* **workspaceId**: string (ReadOnly)
* **workspaceState**: 'Deleted' | 'Disabled' | 'Enabled' | 'Migrated' | 'Registered' | 'Unregistered' | 'Updated' (ReadOnly)
* **workspaceType**: 'Anonymous' | 'Free' | 'PaidPremium' | 'PaidStandard' | 'Production' (ReadOnly)

## Sku
### Properties
* **name**: string
* **tier**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

