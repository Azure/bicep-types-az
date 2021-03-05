# Microsoft.DevOps @ 2020-07-13-preview

## Resource Microsoft.DevOps/pipelines@2020-07-13-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-13-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PipelineProperties (Required)
* **systemData**: SystemData (ReadOnly)
* **tags**: ResourceTags
* **type**: 'Microsoft.DevOps/pipelines' (ReadOnly, DeployTimeConstant)

## PipelineProperties
* **Discriminator**: pipelineType

### Base Properties
* **bootstrapConfiguration**: BootstrapConfiguration (Required)
* **pipelineId**: int (ReadOnly)
### AzurePipelineProperties
#### Properties
* **organization**: OrganizationReference (Required)
* **pipelineType**: 'azurePipeline' (Required)
* **project**: ProjectReference (Required)

### GithubWorkflowProperties
#### Properties
* **pipelineType**: 'githubWorkflow' (Required)
* **repository**: CodeRepository (Required)


## BootstrapConfiguration
### Properties
* **sourceRepository**: CodeRepository
* **template**: PipelineTemplate (Required)

## CodeRepository
### Properties
* **authorization**: Authorization
* **defaultBranch**: string (Required)
* **id**: string (Required)
* **properties**: CodeRepositoryProperties
* **repositoryType**: 'gitHub' | 'vstsGit' (Required)

## Authorization
### Properties
* **authorizationType**: 'personalAccessToken' (Required)
* **parameters**: AuthorizationParameters

## AuthorizationParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CodeRepositoryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PipelineTemplate
### Properties
* **id**: string (Required)
* **parameters**: PipelineTemplateParameters

## PipelineTemplateParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AzurePipelineProperties
### Properties
* **organization**: OrganizationReference (Required)
* **pipelineType**: 'azurePipeline' (Required)
* **project**: ProjectReference (Required)

## OrganizationReference
### Properties
* **id**: string (ReadOnly)
* **name**: string (Required)

## ProjectReference
### Properties
* **id**: string (ReadOnly)
* **name**: string (Required)

## GithubWorkflowProperties
### Properties
* **pipelineType**: 'githubWorkflow' (Required)
* **repository**: CodeRepository (Required)

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

