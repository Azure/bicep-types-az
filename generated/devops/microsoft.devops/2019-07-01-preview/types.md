# Microsoft.DevOps @ 2019-07-01-preview

## Resource Microsoft.DevOps/pipelines@2019-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PipelineProperties](#pipelineproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DevOps/pipelines' (ReadOnly, DeployTimeConstant)

## PipelineProperties
### Properties
* **bootstrapConfiguration**: [BootstrapConfiguration](#bootstrapconfiguration) (Required)
* **organization**: [OrganizationReference](#organizationreference) (Required)
* **pipelineId**: int (ReadOnly)
* **project**: [ProjectReference](#projectreference) (Required)

## BootstrapConfiguration
### Properties
* **repository**: [CodeRepository](#coderepository)
* **template**: [PipelineTemplate](#pipelinetemplate) (Required)

## CodeRepository
### Properties
* **authorization**: [Authorization](#authorization)
* **defaultBranch**: string (Required)
* **id**: string (Required)
* **properties**: [Dictionary<string,String>](#dictionarystringstring)
* **repositoryType**: 'gitHub' | 'vstsGit' (Required)

## Authorization
### Properties
* **authorizationType**: string (Required)
* **parameters**: [Dictionary<string,String>](#dictionarystringstring)

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
* **parameters**: [Dictionary<string,String>](#dictionarystringstring)

## Dictionary<string,String>
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

