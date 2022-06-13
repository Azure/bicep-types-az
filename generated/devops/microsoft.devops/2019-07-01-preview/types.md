# Microsoft.DevOps @ 2019-07-01-preview

## Resource Microsoft.DevOps/pipelines@2019-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PipelineProperties](#pipelineproperties) (Required): Custom properties of the Pipeline.
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
* **repository**: [CodeRepository](#coderepository): Repository containing the source code for the pipeline.
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
### Properties
* **bootstrapConfiguration**: [BootstrapConfiguration](#bootstrapconfiguration) (Required): Configuration used to bootstrap the Pipeline.
* **organization**: [OrganizationReference](#organizationreference) (Required): Reference to the Azure DevOps Organization containing the Pipeline.
* **pipelineId**: int (ReadOnly): Unique identifier of the Azure Pipeline within the Azure DevOps Project.
* **project**: [ProjectReference](#projectreference) (Required): Reference to the Azure DevOps Project containing the Pipeline.

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

