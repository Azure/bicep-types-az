# Microsoft.DevOps @ 2019-07-01-preview

## Resource Microsoft.DevOps/pipelines@2019-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PipelineProperties (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.DevOps/pipelines' (ReadOnly, DeployTimeConstant)

## PipelineProperties
### Properties
* **bootstrapConfiguration**: BootstrapConfiguration (Required)
* **organization**: OrganizationReference (Required)
* **pipelineId**: int (ReadOnly)
* **project**: ProjectReference (Required)

## BootstrapConfiguration
### Properties
* **repository**: CodeRepository
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

## OrganizationReference
### Properties
* **id**: string (ReadOnly)
* **name**: string (Required)

## ProjectReference
### Properties
* **id**: string (ReadOnly)
* **name**: string (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

