# Microsoft.DevOps @ 2020-07-13-preview

## Resource Microsoft.DevOps/pipelines@2020-07-13-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-13-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PipelineProperties](#pipelineproperties) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.DevOps/pipelines' (ReadOnly, DeployTimeConstant)

## PipelineProperties
* **Discriminator**: pipelineType

### Base Properties
* **bootstrapConfiguration**: [BootstrapConfiguration](#bootstrapconfiguration) (Required)
* **pipelineId**: int (ReadOnly)
### AzurePipelineProperties
#### Properties
* **organization**: [OrganizationReference](#organizationreference) (Required)
* **pipelineType**: 'azurePipeline' (Required)
* **project**: [ProjectReference](#projectreference) (Required)

### GithubWorkflowProperties
#### Properties
* **pipelineType**: 'githubWorkflow' (Required)
* **repository**: [CodeRepository](#coderepository) (Required)


## BootstrapConfiguration
### Properties
* **sourceRepository**: [CodeRepository](#coderepository)
* **template**: [PipelineTemplate](#pipelinetemplate) (Required)

## CodeRepository
### Properties
* **authorization**: [Authorization](#authorization)
* **defaultBranch**: string (Required)
* **id**: string (Required)
* **properties**: [CodeRepositoryProperties](#coderepositoryproperties)
* **repositoryType**: 'gitHub' | 'vstsGit' (Required)

## Authorization
### Properties
* **authorizationType**: 'personalAccessToken' (Required)
* **parameters**: [AuthorizationParameters](#authorizationparameters)

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
* **parameters**: [PipelineTemplateParameters](#pipelinetemplateparameters)

## PipelineTemplateParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AzurePipelineProperties
### Properties
* **organization**: [OrganizationReference](#organizationreference) (Required)
* **pipelineType**: 'azurePipeline' (Required)
* **project**: [ProjectReference](#projectreference) (Required)

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
* **repository**: [CodeRepository](#coderepository) (Required)

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

