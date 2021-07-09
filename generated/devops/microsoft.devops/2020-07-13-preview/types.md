# Microsoft.DevOps @ 2020-07-13-preview

## Resource Microsoft.DevOps/pipelines@2020-07-13-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-13-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PipelineProperties](#pipelineproperties) (Required): Custom properties of a Pipeline.
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource Tags
* **type**: 'Microsoft.DevOps/pipelines' (ReadOnly, DeployTimeConstant): The resource type

## PipelineProperties
* **Discriminator**: pipelineType
### Base Properties
* **bootstrapConfiguration**: [BootstrapConfiguration](#bootstrapconfiguration) (Required): Configuration used to bootstrap a Pipeline.
* **pipelineId**: int (ReadOnly): Unique identifier of the Pipeline
### azurePipeline
#### Properties
* **organization**: [OrganizationReference](#organizationreference) (Required): Reference to an Azure DevOps Organization.
* **pipelineType**: 'azurePipeline' (Required): Custom properties of a Azure Pipeline.
* **project**: [ProjectReference](#projectreference) (Required): Reference to an Azure DevOps Project.

### githubWorkflow
#### Properties
* **pipelineType**: 'githubWorkflow' (Required): Custom properties of an Github Pipeline.
* **repository**: [CodeRepository](#coderepository) (Required): Repository containing the source code for a pipeline.


## BootstrapConfiguration
### Properties
* **sourceRepository**: [CodeRepository](#coderepository): Repository containing the source code for a pipeline.
* **template**: [PipelineTemplate](#pipelinetemplate) (Required): Template used to bootstrap the pipeline.

## CodeRepository
### Properties
* **authorization**: [Authorization](#authorization): Authorization info used to access a resource (like code repository).
* **defaultBranch**: string (Required): Default branch used to configure Continuous Integration (CI) in the pipeline.
* **id**: string (Required): Unique immutable identifier of the code repository.
* **properties**: [Dictionary<string,String>](#dictionarystringstring): Repository-specific properties.
* **repositoryType**: 'gitHub' | 'vstsGit' (Required): Type of code repository.

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

## azurePipeline
### Properties
* **organization**: [OrganizationReference](#organizationreference) (Required): Reference to an Azure DevOps Organization.
* **pipelineType**: 'azurePipeline' (Required): Custom properties of a Azure Pipeline.
* **project**: [ProjectReference](#projectreference) (Required): Reference to an Azure DevOps Project.

## OrganizationReference
### Properties
* **id**: string (ReadOnly): Unique immutable identifier for the Azure DevOps Organization.
* **name**: string (Required): Name of the Azure DevOps Organization.

## ProjectReference
### Properties
* **id**: string (ReadOnly): Unique immutable identifier of the Azure DevOps Project.
* **name**: string (Required): Name of the Azure DevOps Project.

## githubWorkflow
### Properties
* **pipelineType**: 'githubWorkflow' (Required): Custom properties of an Github Pipeline.
* **repository**: [CodeRepository](#coderepository) (Required): Repository containing the source code for a pipeline.

## systemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

