# Microsoft.DevOps @ 2020-07-13-preview

## Resource Microsoft.DevOps/pipelines@2020-07-13-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-13-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PipelineProperties](#pipelineproperties) (Required): Custom properties of the Pipeline.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata pertaining to this resource.
* **tags**: [ResourceTags](#resourcetags): Resource Tags
* **type**: 'Microsoft.DevOps/pipelines' (ReadOnly, DeployTimeConstant): The resource type

## Authorization
### Properties
* **authorizationType**: 'personalAccessToken' | string (Required): Type of authorization.
* **parameters**: [AuthorizationParameters](#authorizationparameters): Authorization parameters corresponding to the authorization type.

## AuthorizationParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BootstrapConfiguration
### Properties
* **sourceRepository**: [CodeRepository](#coderepository): Repository containing the source code for the pipeline. Currently only 'azurePipeline' pipeline type supports this.
* **template**: [PipelineTemplate](#pipelinetemplate) (Required): Template used to bootstrap the pipeline.

## CodeRepository
### Properties
* **authorization**: [Authorization](#authorization): Authorization info to access the code repository.
* **defaultBranch**: string (Required): Default branch used to configure Continuous Integration (CI) in the pipeline.
* **id**: string (Required): Unique immutable identifier of the code repository.
* **properties**: [CodeRepositoryProperties](#coderepositoryproperties): Repository-specific properties.
* **repositoryType**: 'gitHub' | 'vstsGit' | string (Required): Type of code repository.

## CodeRepositoryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OrganizationReference
### Properties
* **id**: string (ReadOnly): Unique immutable identifier for the Azure DevOps Organization.
* **name**: string (Required): Name of the Azure DevOps Organization.

## PipelineProperties
* **Discriminator**: pipelineType

### Base Properties
* **bootstrapConfiguration**: [BootstrapConfiguration](#bootstrapconfiguration) (Required): Configuration used to bootstrap the Pipeline.
* **pipelineId**: int (ReadOnly): Unique identifier of the Pipeline
### AzurePipelineProperties
#### Properties
* **organization**: [OrganizationReference](#organizationreference) (Required): Reference to the Azure DevOps Organization containing the Pipeline. Required for 'azurePipeline' pipeline type.
* **pipelineType**: 'azurePipeline' (Required): Specifies which CI/CD provider to use. Valid options are 'azurePipeline', 'githubWorkflow'.
* **project**: [ProjectReference](#projectreference) (Required): Reference to the Azure DevOps Project containing the Pipeline. Required for 'azurePipeline' pipeline type.

### GithubWorkflowProperties
#### Properties
* **pipelineType**: 'githubWorkflow' (Required): Specifies which CI/CD provider to use. Valid options are 'azurePipeline', 'githubWorkflow'.
* **repository**: [CodeRepository](#coderepository) (Required): Contains the specifications of the repository to be created for generating the workflow. Required for 'githubWorkflow' pipeline type.


## PipelineTemplate
### Properties
* **id**: string (Required): Unique identifier of the pipeline template.
* **parameters**: [PipelineTemplateParameters](#pipelinetemplateparameters): Dictionary of input parameters used in the pipeline template.

## PipelineTemplateParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProjectReference
### Properties
* **id**: string (ReadOnly): Unique immutable identifier of the Azure DevOps Project.
* **name**: string (Required): Name of the Azure DevOps Project.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

