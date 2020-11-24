# Microsoft.MachineLearningExperimentation @ 2017-05-01-preview

## Microsoft.MachineLearningExperimentation/accounts
### Properties
* **apiVersion**: '2017-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AccountProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.MachineLearningExperimentation/accounts' (ReadOnly, DeployTimeConstant)

## AccountProperties
### Properties
* **accountId**: string (ReadOnly)
* **creationDate**: string (ReadOnly)
* **description**: string
* **discoveryUri**: string (ReadOnly)
* **friendlyName**: string
* **keyVaultId**: string (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **seats**: string
* **storageAccount**: StorageAccountProperties (Required)
* **vsoAccountId**: string (Required)

## StorageAccountProperties
### Properties
* **accessKey**: string (Required)
* **storageAccountId**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.MachineLearningExperimentation/accounts/workspaces
### Properties
* **apiVersion**: '2017-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkspaceProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.MachineLearningExperimentation/accounts/workspaces' (ReadOnly, DeployTimeConstant)

## WorkspaceProperties
### Properties
* **accountId**: string (ReadOnly)
* **creationDate**: string (ReadOnly)
* **description**: string
* **friendlyName**: string (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **workspaceId**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.MachineLearningExperimentation/accounts/workspaces/projects
### Properties
* **apiVersion**: '2017-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProjectProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.MachineLearningExperimentation/accounts/workspaces/projects' (ReadOnly, DeployTimeConstant)

## ProjectProperties
### Properties
* **accountId**: string (ReadOnly)
* **creationDate**: string (ReadOnly)
* **description**: string
* **friendlyName**: string (Required)
* **gitrepo**: string
* **projectId**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **workspaceId**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

