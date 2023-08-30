# Microsoft.DevHub @ 2022-10-11-preview

## Resource Microsoft.DevHub/workflows@2022-10-11-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-10-11-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
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

## DeploymentProperties
### Properties
* **helmChartPath**: string: Helm chart directory path in repository.
* **helmValues**: string: Helm Values.yaml file location in repository.
* **kubeManifestLocations**: string[]
* **manifestType**: 'helm' | 'kube' | string: Determines the type of manifests within the repository.
* **overrides**: [DeploymentPropertiesOverrides](#deploymentpropertiesoverrides): Manifest override values.

## DeploymentPropertiesOverrides
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GitHubWorkflowProfile
### Properties
* **acr**: [ACR](#acr): Information on the azure container registry
* **aksResourceId**: string: The Azure Kubernetes Cluster Resource the application will be deployed to.
* **authStatus**: 'Authorized' | 'Error' | 'NotFound' | string (ReadOnly): Determines the authorization status of requests.
* **branchName**: string: Repository Branch Name
* **deploymentProperties**: [DeploymentProperties](#deploymentproperties)
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

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkflowProperties
### Properties
* **artifactGenerationProperties**: [ArtifactGenerationProperties](#artifactgenerationproperties): Properties for generating artifacts like dockerfile and manifests.
* **githubWorkflowProfile**: [GitHubWorkflowProfile](#githubworkflowprofile): Profile of a github workflow.

## WorkflowRun
### Properties
* **lastRunAt**: string (ReadOnly): The timestamp of the last workflow run.
* **succeeded**: bool (ReadOnly): Describes if the workflow run succeeded.
* **workflowRunStatus**: 'completed' | 'inprogress' | 'queued' | string: Describes the status of the workflow run
* **workflowRunURL**: string (ReadOnly): URL to the run of the workflow.

