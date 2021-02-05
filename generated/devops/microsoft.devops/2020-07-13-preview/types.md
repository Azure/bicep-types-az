# Microsoft.DevOps @ 2020-07-13-preview

## Resource Microsoft.DevOps/pipelines@2020-07-13-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-13-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PipelineProperties (Required)
* **systemData**: systemData (ReadOnly)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevOps/pipelines' (ReadOnly, DeployTimeConstant)

## PipelineProperties
* **Discriminator**: pipelineType
### Base Properties
* **bootstrapConfiguration**: BootstrapConfiguration (Required)
* **pipelineId**: int (ReadOnly)
### azurePipeline
#### Properties
* **organization**: OrganizationReference (Required)
* **pipelineType**: 'azurePipeline' (Required)
* **project**: ProjectReference (Required)

### githubWorkflow
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
* **properties**: Dictionary<string,String>
* **repositoryType**: 'gitHub' | 'vstsGit' (Required)

## Authorization
### Properties
* **authorizationType**: string (Required)
* **parameters**: Dictionary<string,String>

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PipelineTemplate
### Properties
* **id**: string (Required)
* **parameters**: Dictionary<string,String>

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## azurePipeline
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

## githubWorkflow
### Properties
* **pipelineType**: 'githubWorkflow' (Required)
* **repository**: CodeRepository (Required)

## systemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

