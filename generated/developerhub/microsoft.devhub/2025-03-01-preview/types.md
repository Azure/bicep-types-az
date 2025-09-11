# Microsoft.DevHub @ 2025-03-01-preview

## Resource Microsoft.DevHub/iacProfiles@2025-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-_a-zA-Z0-9]{0,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [IacProfileProperties](#iacprofileproperties): Properties of a IacProfile.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DevHub/iacProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevHub/locations/adooauth@2025-03-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [AdooAuth](#adooauth) (ReadOnly): Details of ADO OAuth.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevHub/locations/adooauth' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevHub/templates@2025-03-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-_a-zA-Z0-9]{0,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TemplateProperties](#templateproperties) (ReadOnly): Properties of a Template.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevHub/templates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevHub/templates/versions@2025-03-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 63, pattern: "^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VersionedTemplateProperties](#versionedtemplateproperties) (ReadOnly): Properties of a VersionedTemplate.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevHub/templates/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevHub/workflows@2025-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
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

## ADOProviderProfile
### Properties
* **armServiceConnection**: string: The name of the ARM Service Connection the pipeline is associated with.
* **repository**: [ADORepository](#adorepository): Details of the ADO repository associated with the workflow.

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

## GitHubProviderProfile
### Properties
* **oidcCredentials**: [OidcCredentials](#oidccredentials): The fields needed for OIDC with GitHub.
* **repository**: [GitHubRepository](#githubrepository): Details of the GitHub repository associated with the workflow.

## GitHubRepository
### Properties
* **branchName**: string: The name of the branch the workflow is associated with.
* **repositoryName**: string: The name of the repository the workflow is associated with.
* **repositoryOwner**: string: The owner of the repository the workflow is associated with.

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

## OidcCredentials
### Properties
* **azureClientId**: string: Azure Application Client ID
* **azureTenantId**: string: Azure Directory (tenant) ID

## Parameter
### Properties
* **default**: [ParameterDefault](#parameterdefault): A reference to a default parameter value or a reference parameter to take the value from.
* **description**: string: Description of what the paramater is used for.
* **name**: string: The paramater name.
* **parameterKind**: 'azureContainerRegistry' | 'azureKeyvaultUri' | 'azureManagedCluster' | 'azureResourceGroup' | 'azureServiceConnection' | 'clusterResourceType' | 'containerImageName' | 'containerImageVersion' | 'dirPath' | 'dockerFileName' | 'envVarMap' | 'filePath' | 'flag' | 'helmChartOverrides' | 'imagePullPolicy' | 'ingressHostName' | 'kubernetesNamespace' | 'kubernetesProbeDelay' | 'kubernetesProbeHttpPath' | 'kubernetesProbePeriod' | 'kubernetesProbeThreshold' | 'kubernetesProbeTimeout' | 'kubernetesProbeType' | 'kubernetesResourceLimit' | 'kubernetesResourceName' | 'kubernetesResourceRequest' | 'label' | 'port' | 'replicaCount' | 'repositoryBranch' | 'resourceLimit' | 'scalingResourceType' | 'scalingResourceUtilization' | 'workflowAuthType' | 'workflowName' | string (ReadOnly): The type of the template parameter.
* **parameterType**: 'bool' | 'float' | 'int' | 'object' | 'string' | string (ReadOnly): The type of the template parameter.
* **required**: bool: Whether the parameter is required.

## ParameterDefault
### Properties
* **referenceParameter**: string: The Parameter to reference a value from.
* **value**: string: The default value for this parameter.

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

## TemplateProperties
### Properties
* **defaultVersion**: string: The default version of the template.
* **description**: string: Description of the template
* **templateName**: string: The name of the template.
* **templateType**: 'deployment' | 'dockerfile' | 'manifest' | 'workflow' | string (ReadOnly): The type of the template.
* **versions**: string[]: The valid versions of the template.

## TemplateReference
### Properties
* **destination**: string: destination for template creation
* **parameters**: [TemplateReferenceParameters](#templatereferenceparameters): parameters for template creation
* **templateId**: string: The versioned template arm resource id.

## TemplateReferenceParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TemplateWorkflowProfile
### Properties
* **adoProviderProfile**: [ADOProviderProfile](#adoproviderprofile): Details of the GitHub repository associated with the workflow.
* **authStatus**: 'Authorized' | 'Error' | 'NotFound' | string (ReadOnly): Determines the authorization status of requests.
* **deploymentTemplate**: [TemplateReference](#templatereference): The properties of ADO OAuth.
* **dockerfileTemplate**: [TemplateReference](#templatereference): The properties of ADO OAuth.
* **gitHubProviderProfile**: [GitHubProviderProfile](#githubproviderprofile): Details of the GitHub repository and credentials associated with the workflow.
* **lastWorkflowRun**: [WorkflowRun](#workflowrun)
* **manifestTemplates**: [TemplateReference](#templatereference)[]
* **pullRequest**: [PullRequest](#pullrequest): Details of the pull request containing the workflow.
* **repositoryProvider**: 'ado' | 'github' | string: The status of the Pull Request submitted against the users repository.
* **workflowTemplate**: [TemplateReference](#templatereference): The properties of ADO OAuth.

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

## VersionedTemplateProperties
### Properties
* **parameters**: [Parameter](#parameter)[]: The template parameters.
* **templateType**: 'deployment' | 'dockerfile' | 'manifest' | 'workflow' | string (ReadOnly): The type of the template.
* **version**: string: The version of the template.

## WorkflowProperties
### Properties
* **artifactGenerationProperties**: [ArtifactGenerationProperties](#artifactgenerationproperties): Properties for generating artifacts like dockerfile and manifests.
* **azurePipelineProfile**: [AzurePipelineProfile](#azurepipelineprofile): Profile of an azure pipeline.
* **githubWorkflowProfile**: [GitHubWorkflowProfile](#githubworkflowprofile): Profile of a github workflow.
* **templateWorkflowProfile**: [TemplateWorkflowProfile](#templateworkflowprofile): Profile of an template workflow.

## WorkflowRun
### Properties
* **lastRunAt**: string (ReadOnly): The timestamp of the last workflow run.
* **succeeded**: bool (ReadOnly): Describes if the workflow run succeeded.
* **workflowRunStatus**: 'completed' | 'inprogress' | 'queued' | string (ReadOnly): Describes the status of the workflow run
* **workflowRunURL**: string (ReadOnly): URL to the run of the workflow.

