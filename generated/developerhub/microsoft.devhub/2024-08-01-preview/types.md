# Microsoft.DevHub @ 2024-08-01-preview

## Resource Microsoft.DevHub/iacProfiles@2024-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-_a-zA-Z0-9]{0,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [IacProfileProperties](#iacprofileproperties): Properties of a IacProfile.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DevHub/iacProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevHub/locations/adooauth@2024-08-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [AdooAuth](#adooauth) (ReadOnly): Details of ADO OAuth.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevHub/locations/adooauth' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevHub/workflows@2024-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-_a-zA-Z0-9]{0,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowProperties](#workflowproperties): Properties of a workflow.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DevHub/workflows' (ReadOnly, DeployTimeConstant): The resource type

## ACR
### Properties
* **acrRegistryName**: string: ACR registry
* **acrRepositoryName**: string: ACR repository
* **acrResourceGroup**: string: ACR resource group
* **acrSubscriptionId**: string: ACR subscription id

## AdooAuth
### Properties
* **username**: string: user making request

## ADORepository
### Properties
* **adoOrganization**: string: The name of the Azure DevOps organization the pipeline is associated with.
* **branchName**: string: The name of the branch the workflow is associated with.
* **projectName**: string: The name of the project the pipeline is associated with.
* **repositoryName**: string: The name of the repository the workflow is associated with.
* **repositoryOwner**: string: The owner of the repository the workflow is associated with.

## ArtifactGenerationProperties
### Properties
* **appName**: string: The name of the app.
* **builderVersion**: string: The version of the language image used for building the code in the generated dockerfile.
* **dockerfileGenerationMode**: 'disabled' | 'enabled' | string: The mode of generation to be used for generating Dockerfiles.
* **dockerfileOutputDirectory**: string: The directory to output the generated Dockerfile to.
* **generationLanguage**: 'clojure' | 'csharp' | 'erlang' | 'go' | 'gomodule' | 'gradle' | 'java' | 'javascript' | 'php' | 'python' | 'ruby' | 'rust' | 'swift' | string: The programming language used.
* **imageName**: string: The name of the image to be generated.
* **imageTag**: string: The tag to apply to the generated image.
* **languageVersion**: string: The version of the language image used for execution in the generated dockerfile.
* **manifestGenerationMode**: 'disabled' | 'enabled' | string: The mode of generation to be used for generating Manifest.
* **manifestOutputDirectory**: string: The directory to output the generated manifests to.
* **manifestType**: 'helm' | 'kube' | string: Determines the type of manifests to be generated.
* **namespace**: string: The namespace to deploy the application to.
* **port**: string: The port the application is exposed on.

## AzurePipelineProfile
### Properties
* **acr**: string: Resource identifier for azure container registry repository associated with the workflow.
* **armServiceConnection**: string: The name of the ARM Service Connection the pipeline is associated with.
* **authStatus**: 'Authorized' | 'Error' | 'NotFound' | string (ReadOnly): Determines the authorization status of requests.
* **build**: [Build](#build): Build details of the repository associated with the workflow.
* **clusterId**: string: The Azure Kubernetes Cluster Resource the application will be deployed to.
* **deployment**: [Deployment](#deployment): Deployment details of the repository associated with the workflow.
* **lastWorkflowRun**: [WorkflowRun](#workflowrun)
* **namespace**: string: Kubernetes namespace the application is deployed to.
* **pullRequest**: [PullRequest](#pullrequest): Details of the pull request containing the workflow.
* **repository**: [ADORepository](#adorepository): Details of the ADO repository associated with the workflow.

## Build
### Properties
* **dockerBuildContext**: string: Path to Dockerfile Build Context within the repository.
* **dockerfile**: string: Path to the Dockerfile within the repository.

## Deployment
### Properties
* **helmChartPath**: string: Helm chart directory path in repository.
* **helmValues**: string: Helm Values.yaml file location in repository.
* **kubeManifestLocations**: string[]
* **manifestType**: 'helm' | 'kube' | string: Determines the type of manifests within the repository.
* **overrides**: [DeploymentOverrides](#deploymentoverrides): Manifest override values.

## DeploymentOverrides
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GitHubWorkflowProfile
### Properties
* **acr**: [ACR](#acr): Information on the azure container registry
* **aksResourceId**: string: The Azure Kubernetes Cluster Resource the application will be deployed to.
* **authStatus**: 'Authorized' | 'Error' | 'NotFound' | string (ReadOnly): Determines the authorization status of requests.
* **branchName**: string: Repository Branch Name
* **deploymentProperties**: [Deployment](#deployment): Deployment details of the repository associated with the workflow.
* **dockerBuildContext**: string: Path to Dockerfile Build Context within the repository.
* **dockerfile**: string: Path to the Dockerfile within the repository.
* **lastWorkflowRun**: [WorkflowRun](#workflowrun)
* **namespace**: string: Kubernetes namespace the application is deployed to.
* **oidcCredentials**: [GitHubWorkflowProfileOidcCredentials](#githubworkflowprofileoidccredentials): The fields needed for OIDC with GitHub.
* **prStatus**: 'merged' | 'removed' | 'submitted' | 'unknown' | string (ReadOnly): The status of the Pull Request submitted against the users repository.
* **prURL**: string (ReadOnly): The URL to the Pull Request submitted against the users repository.
* **pullNumber**: int (ReadOnly): The number associated with the submitted pull request.
* **repositoryName**: string: Repository Name
* **repositoryOwner**: string: Repository Owner

## GitHubWorkflowProfileOidcCredentials
### Properties
* **azureClientId**: string: Azure Application Client ID
* **azureTenantId**: string: Azure Directory (tenant) ID

## IacGitHubProfile
### Properties
* **authStatus**: 'Authorized' | 'Error' | 'NotFound' | string (ReadOnly): Determines the authorization status of requests.
* **branchName**: string: Repository Branch Name
* **prStatus**: 'merged' | 'removed' | 'submitted' | 'unknown' | string (ReadOnly): The status of the Pull Request submitted against the users repository.
* **pullNumber**: int (ReadOnly): The number associated with the submitted pull request.
* **repositoryMainBranch**: string: Repository Main Branch
* **repositoryName**: string: Repository Name
* **repositoryOwner**: string: Repository Owner

## IacProfileProperties
### Properties
* **githubProfile**: [IacGitHubProfile](#iacgithubprofile): GitHub Profile of a IacProfile
* **stages**: [StageProperties](#stageproperties)[]
* **templates**: [IacTemplateProperties](#iactemplateproperties)[]
* **terraformProfile**: [TerraformProfile](#terraformprofile): Terraform Profile of a IacProfile

## IacTemplateDetails
### Properties
* **count**: int: Count of the product
* **namingConvention**: string: Naming convention of this product
* **productName**: string: The name of the products.

## IacTemplateProperties
### Properties
* **instanceName**: string: the sample instance name of the template
* **instanceStage**: string: the source stage of the template
* **quickStartTemplateType**: 'HCI' | 'HCIAKS' | 'HCIARCVM' | 'None' | string (ReadOnly): Determines the authorization status of requests.
* **sourceResourceId**: string: the source store of the template
* **templateDetails**: [IacTemplateDetails](#iactemplatedetails)[]
* **templateName**: string: Template Name

## PullRequest
### Properties
* **prStatus**: 'merged' | 'removed' | 'submitted' | 'unknown' | string (ReadOnly): The status of the Pull Request submitted against the users repository.
* **prURL**: string (ReadOnly): The URL to the Pull Request submitted against the users repository.
* **pullNumber**: int (ReadOnly): The number associated with the submitted pull request.

## StageProperties
### Properties
* **dependencies**: string[]
* **gitEnvironment**: string
* **stageName**: string: Stage Name

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TerraformProfile
### Properties
* **storageAccountName**: string: Terraform Storage Account Name
* **storageAccountResourceGroup**: string: Terraform Storage Account Resource Group
* **storageAccountSubscription**: string: Terraform Storage Account Subscription
* **storageContainerName**: string: Terraform Container Name

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkflowProperties
### Properties
* **artifactGenerationProperties**: [ArtifactGenerationProperties](#artifactgenerationproperties): Properties for generating artifacts like dockerfile and manifests.
* **azurePipelineProfile**: [AzurePipelineProfile](#azurepipelineprofile): Profile of an azure pipeline.
* **githubWorkflowProfile**: [GitHubWorkflowProfile](#githubworkflowprofile): Profile of a github workflow.

## WorkflowRun
### Properties
* **lastRunAt**: string (ReadOnly): The timestamp of the last workflow run.
* **succeeded**: bool (ReadOnly): Describes if the workflow run succeeded.
* **workflowRunStatus**: 'completed' | 'inprogress' | 'queued' | string (ReadOnly): Describes the status of the workflow run
* **workflowRunURL**: string (ReadOnly): URL to the run of the workflow.

