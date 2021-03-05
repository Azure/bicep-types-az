# Microsoft.MachineLearningExperimentation @ 2017-05-01-preview

## Resource Microsoft.MachineLearningExperimentation/accounts@2017-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AccountProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.MachineLearningExperimentation/accounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningExperimentation/accounts/workspaces@2017-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkspaceProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.MachineLearningExperimentation/accounts/workspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningExperimentation/accounts/workspaces/projects@2017-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProjectProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.MachineLearningExperimentation/accounts/workspaces/projects' (ReadOnly, DeployTimeConstant)

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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkspaceProperties
### Properties
* **accountId**: string (ReadOnly)
* **creationDate**: string (ReadOnly)
* **description**: string
* **friendlyName**: string (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **workspaceId**: string (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

