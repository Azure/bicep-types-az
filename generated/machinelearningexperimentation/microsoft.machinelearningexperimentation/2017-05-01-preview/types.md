# Microsoft.MachineLearningExperimentation @ 2017-05-01-preview

## Resource Microsoft.MachineLearningExperimentation/accounts@2017-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource. This cannot be changed after the resource is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccountProperties](#accountproperties): The properties of a machine learning team account.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.MachineLearningExperimentation/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningExperimentation/accounts/workspaces@2017-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource. This cannot be changed after the resource is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): The properties of a machine learning team account workspace.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.MachineLearningExperimentation/accounts/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningExperimentation/accounts/workspaces/projects@2017-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource. This cannot be changed after the resource is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectProperties](#projectproperties): The properties of a machine learning project.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.MachineLearningExperimentation/accounts/workspaces/projects' (ReadOnly, DeployTimeConstant): The resource type

## AccountProperties
### Properties
* **accountId**: string (ReadOnly): The immutable id associated with this team account.
* **creationDate**: string (ReadOnly): The creation date of the machine learning team account in ISO8601 format.
* **description**: string: The description of this workspace.
* **discoveryUri**: string (ReadOnly): The uri for this machine learning team account.
* **friendlyName**: string: The friendly name for this workspace. This will be the workspace name in the arm id when the workspace object gets created
* **keyVaultId**: string (Required): The fully qualified arm id of the user key vault.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The current deployment state of team account resource. The provisioningState is to indicate states for resource provisioning.
* **seats**: string: The no of users/seats who can access this team account. This property defines the charge on the team account.
* **storageAccount**: [StorageAccountProperties](#storageaccountproperties) (Required): The properties of a storage account for a machine learning team account.
* **vsoAccountId**: string (Required): The fully qualified arm id of the vso account to be used for this team account.

## StorageAccountProperties
### Properties
* **accessKey**: string (Required): The access key to the storage account.
* **storageAccountId**: string (Required): The fully qualified arm Id of the storage account.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkspaceProperties
### Properties
* **accountId**: string (ReadOnly): The immutable id of the team account which contains this workspace.
* **creationDate**: string (ReadOnly): The creation date of the machine learning workspace in ISO8601 format.
* **description**: string: The description of this workspace.
* **friendlyName**: string (Required): The friendly name for this workspace. This will be the workspace name in the arm id when the workspace object gets created
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The current deployment state of team account workspace resource. The provisioningState is to indicate states for resource provisioning.
* **workspaceId**: string (ReadOnly): The immutable id of this workspace.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProjectProperties
### Properties
* **accountId**: string (ReadOnly): The immutable id of the team account which contains this project.
* **creationDate**: string (ReadOnly): The creation date of the project in ISO8601 format.
* **description**: string: The description of this project.
* **friendlyName**: string (Required): The friendly name for this project.
* **gitrepo**: string: The reference to git repo for this project.
* **projectId**: string (ReadOnly): The immutable id of this project.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The current deployment state of project resource. The provisioningState is to indicate states for resource provisioning.
* **workspaceId**: string (ReadOnly): The immutable id of the workspace which contains this project.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

