# Microsoft.DevOps @ 2019-07-01-preview

## Resource Microsoft.DevOps/pipelines@2019-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PipelineProperties](#pipelineproperties) (Required): Custom properties of a Pipeline.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource Tags
* **type**: 'Microsoft.DevOps/pipelines' (ReadOnly, DeployTimeConstant): The resource type

## PipelineProperties
### Properties
* **bootstrapConfiguration**: [BootstrapConfiguration](#bootstrapconfiguration) (Required): Configuration used to bootstrap a Pipeline.
* **organization**: [OrganizationReference](#organizationreference) (Required): Reference to an Azure DevOps Organization.
* **pipelineId**: int (ReadOnly): Unique identifier of the Azure Pipeline within the Azure DevOps Project.
* **project**: [ProjectReference](#projectreference) (Required): Reference to an Azure DevOps Project.

## BootstrapConfiguration
### Properties
* **repository**: [CodeRepository](#coderepository): Repository containing the source code for a pipeline.
* **template**: [PipelineTemplate](#pipelinetemplate) (Required): Template used to bootstrap the pipeline.

## CodeRepository
### Properties
* **authorization**: [Authorization](#authorization): Authorization info used to access a resource (like code repository).
* **defaultBranch**: string (Required): Default branch used to configure Continuous Integration (CI) in the pipeline.
* **id**: string (Required): Unique immutable identifier of the code repository.
* **properties**: [Dictionary<string,String>](#dictionarystringstring): Repository-specific properties.
* **repositoryType**: 'gitHub' | 'vstsGit' (Required): Type of code repository. Possible values include: 'gitHub', 'vstsGit'

## Authorization
### Properties
* **authorizationType**: string (Required): Type of authorization.
* **parameters**: [Dictionary<string,String>](#dictionarystringstring): Authorization parameters corresponding to the authorization type.

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
* **id**: string (Required): Unique identifier of the pipeline template.
* **parameters**: [Dictionary<string,String>](#dictionarystringstring): Dictionary of input parameters used in the pipeline template.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OrganizationReference
### Properties
* **id**: string (ReadOnly): Unique immutable identifier for the Azure DevOps Organization.
* **name**: string (Required): Name of the Azure DevOps Organization.

## ProjectReference
### Properties
* **id**: string (ReadOnly): Unique immutable identifier of the Azure DevOps Project.
* **name**: string (Required): Name of the Azure DevOps Project.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

