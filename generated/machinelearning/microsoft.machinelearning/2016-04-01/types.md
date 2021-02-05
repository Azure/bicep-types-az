# Microsoft.MachineLearning @ 2016-04-01

## Resource Microsoft.MachineLearning/workspaces@2016-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkspaceProperties
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

