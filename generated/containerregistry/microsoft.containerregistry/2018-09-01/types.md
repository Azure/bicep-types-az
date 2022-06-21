# Microsoft.ContainerRegistry @ 2018-09-01

## Resource Microsoft.ContainerRegistry/registries/runs@2018-09-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RunProperties](#runproperties) (ReadOnly): The properties of a run.
* **type**: 'Microsoft.ContainerRegistry/registries/runs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerRegistry/registries/tasks@2018-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource. This cannot be changed after the resource is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TaskProperties](#taskproperties): The properties of a task.
* **tags**: [ResourceTags](#resourcetags): The tags of the resource.
* **type**: 'Microsoft.ContainerRegistry/registries/tasks' (ReadOnly, DeployTimeConstant): The resource type

## Function listBuildSourceUploadUrl (Microsoft.ContainerRegistry/registries@2018-09-01)
* **Resource**: Microsoft.ContainerRegistry/registries
* **ApiVersion**: 2018-09-01
* **Output**: [SourceUploadDefinition](#sourceuploaddefinition)

## Function listDetails (Microsoft.ContainerRegistry/registries/tasks@2018-09-01)
* **Resource**: Microsoft.ContainerRegistry/registries/tasks
* **ApiVersion**: 2018-09-01
* **Output**: [Task](#task)

## Function listLogSasUrl (Microsoft.ContainerRegistry/registries/runs@2018-09-01)
* **Resource**: Microsoft.ContainerRegistry/registries/runs
* **ApiVersion**: 2018-09-01
* **Output**: [RunGetLogResult](#rungetlogresult)

## AgentProperties
### Properties
* **cpu**: int: The CPU configuration in terms of number of cores required for the run.

## Argument
### Properties
* **isSecret**: bool: Flag to indicate whether the argument represents a secret and want to be removed from build logs.
* **name**: string (Required): The name of the argument.
* **value**: string (Required): The value of the argument.

## AuthInfo
### Properties
* **expiresIn**: int: Time in seconds that the token remains valid
* **refreshToken**: string: The refresh token used to refresh the access token.
* **scope**: string: The scope of the access token.
* **token**: string (Required): The access token used to access the source control provider.
* **tokenType**: 'OAuth' | 'PAT' | string (Required): The type of Auth token.

## BaseImageDependency
### Properties
* **digest**: string: The sha256-based digest of the image manifest.
* **registry**: string: The registry login server.
* **repository**: string: The repository name.
* **tag**: string: The tag name.
* **type**: 'BuildTime' | 'RunTime' | string: The type of the base image dependency.

## BaseImageTrigger
### Properties
* **baseImageTriggerType**: 'All' | 'Runtime' | string (Required): The type of the auto trigger for base image dependency updates.
* **name**: string (Required): The name of the trigger.
* **status**: 'Disabled' | 'Enabled' | string: The current status of trigger.

## Credentials
### Properties
* **customRegistries**: [CredentialsCustomRegistries](#credentialscustomregistries): Describes the credential parameters for accessing other custom registries. The key
for the dictionary item will be the registry login server (myregistry.azurecr.io) and
the value of the item will be the registry credentials for accessing the registry.
* **sourceRegistry**: [SourceRegistryCredentials](#sourceregistrycredentials): Describes the credential parameters for accessing the source registry.

## CredentialsCustomRegistries
### Properties
### Additional Properties
* **Additional Properties Type**: [CustomRegistryCredentials](#customregistrycredentials)

## CustomRegistryCredentials
### Properties
* **password**: [SecretObject](#secretobject): The password for logging into the custom registry. The password is a secret 
object that allows multiple ways of providing the value for it.
* **userName**: [SecretObject](#secretobject): The username for logging into the custom registry.

## ImageDescriptor
### Properties
* **digest**: string: The sha256-based digest of the image manifest.
* **registry**: string: The registry login server.
* **repository**: string: The repository name.
* **tag**: string: The tag name.

## ImageUpdateTrigger
### Properties
* **id**: string: The unique ID of the trigger.
* **images**: [ImageDescriptor](#imagedescriptor)[]: The list of image updates that caused the build.
* **timestamp**: string: The timestamp when the image update happened.

## PlatformProperties
### Properties
* **architecture**: 'amd64' | 'arm' | 'x86' | string: The OS architecture.
* **os**: 'Linux' | 'Windows' | string (Required): The operating system type required for the run.
* **variant**: 'v6' | 'v7' | 'v8' | string: Variant of the CPU.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RunGetLogResult
### Properties
* **logLink**: string: The link to logs for a run on a azure container registry.

## RunProperties
### Properties
* **agentConfiguration**: [AgentProperties](#agentproperties): The machine configuration of the run agent.
* **createTime**: string: The time the run was scheduled.
* **customRegistries**: string[]: The list of custom registries that were logged in during this run.
* **finishTime**: string: The time the run finished.
* **imageUpdateTrigger**: [ImageUpdateTrigger](#imageupdatetrigger): The image update trigger that caused the run. This is applicable if the task has base image trigger configured.
* **isArchiveEnabled**: bool: The value that indicates whether archiving is enabled or not.
* **lastUpdatedTime**: string: The last updated time for the run.
* **outputImages**: [ImageDescriptor](#imagedescriptor)[]: The list of all images that were generated from the run. This is applicable if the run generates base image dependencies.
* **platform**: [PlatformProperties](#platformproperties): The platform properties against which the run will happen.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: The provisioning state of a run.
* **runErrorMessage**: string (ReadOnly): The error message received from backend systems after the run is scheduled.
* **runId**: string: The unique identifier for the run.
* **runType**: 'AutoBuild' | 'AutoRun' | 'QuickBuild' | 'QuickRun' | string: The type of run.
* **sourceRegistryAuth**: string: The scope of the credentials that were used to login to the source registry during this run.
* **sourceTrigger**: [SourceTriggerDescriptor](#sourcetriggerdescriptor): The source trigger that caused the run.
* **startTime**: string: The time the run started.
* **status**: 'Canceled' | 'Error' | 'Failed' | 'Queued' | 'Running' | 'Started' | 'Succeeded' | 'Timeout' | string: The current status of the run.
* **task**: string: The task against which run was scheduled.

## SecretObject
### Properties
* **type**: 'Opaque' | string: The type of the secret object which determines how the value of the secret object has to be
interpreted.
* **value**: string: The value of the secret. The format of this value will be determined
based on the type of the secret object. If the type is Opaque, the value will be
used as is without any modification.

## SetValue
### Properties
* **isSecret**: bool: Flag to indicate whether the value represents a secret or not.
* **name**: string (Required): The name of the overridable value.
* **value**: string (Required): The overridable value.

## SourceProperties
### Properties
* **branch**: string: The branch name of the source code.
* **repositoryUrl**: string (Required): The full URL to the source code repository
* **sourceControlAuthProperties**: [AuthInfo](#authinfo): The authorization properties for accessing the source code repository and to set up
webhooks for notifications.
* **sourceControlType**: 'Github' | 'VisualStudioTeamService' | string (Required): The type of source control service.

## SourceRegistryCredentials
### Properties
* **loginMode**: 'Default' | 'None' | string: The authentication mode which determines the source registry login scope. The credentials for the source registry
will be generated using the given scope. These credentials will be used to login to
the source registry during the run.

## SourceTrigger
### Properties
* **name**: string (Required): The name of the trigger.
* **sourceRepository**: [SourceProperties](#sourceproperties) (Required): The properties that describes the source(code) for the task.
* **sourceTriggerEvents**: 'commit' | 'pullrequest' | string[] (Required): The source event corresponding to the trigger.
* **status**: 'Disabled' | 'Enabled' | string: The current status of trigger.

## SourceTriggerDescriptor
### Properties
* **branchName**: string: The branch name in the repository.
* **commitId**: string: The unique ID that identifies a commit.
* **eventType**: string: The event type of the trigger.
* **id**: string: The unique ID of the trigger.
* **providerType**: string: The source control provider type.
* **pullRequestId**: string: The unique ID that identifies pull request.
* **repositoryUrl**: string: The repository URL.

## SourceUploadDefinition
### Properties
* **relativePath**: string: The relative path to the source. This is used to submit the subsequent queue build request.
* **uploadUrl**: string: The URL where the client can upload the source.

## Task
### Properties
* **id**: string (ReadOnly): The resource ID.
* **location**: string (Required): The location of the resource. This cannot be changed after the resource is created.
* **name**: string (ReadOnly): The name of the resource.
* **properties**: [TaskProperties](#taskproperties): The properties of a task.
* **tags**: [ResourceTags](#resourcetags): The tags of the resource.
* **type**: string (ReadOnly): The type of the resource.

## TaskProperties
### Properties
* **agentConfiguration**: [AgentProperties](#agentproperties): The machine configuration of the run agent.
* **creationDate**: string (ReadOnly): The creation date of task.
* **credentials**: [Credentials](#credentials): The properties that describes a set of credentials that will be used when this run is invoked.
* **platform**: [PlatformProperties](#platformproperties) (Required): The platform properties against which the run has to happen.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the task.
* **status**: 'Disabled' | 'Enabled' | string: The current status of task.
* **step**: [TaskStepProperties](#taskstepproperties) (Required): The properties of a task step.
* **timeout**: int: Run timeout in seconds.
* **trigger**: [TriggerProperties](#triggerproperties): The properties that describe all triggers for the task.

## TaskStepProperties
* **Discriminator**: type

### Base Properties
* **baseImageDependencies**: [BaseImageDependency](#baseimagedependency)[] (ReadOnly): List of base image dependencies for a step.
* **contextAccessToken**: string: The token (git PAT or SAS token of storage account blob) associated with the context for a step.
* **contextPath**: string: The URL(absolute or relative) of the source context for the task step.
### DockerBuildStep
#### Properties
* **arguments**: [Argument](#argument)[]: The collection of override arguments to be used when executing this build step.
* **dockerFilePath**: string (Required): The Docker file path relative to the source context.
* **imageNames**: string[]: The fully qualified image names including the repository and tag.
* **isPushEnabled**: bool: The value of this property indicates whether the image built should be pushed to the registry or not.
* **noCache**: bool: The value of this property indicates whether the image cache is enabled or not.
* **target**: string: The name of the target build stage for the docker build.
* **type**: 'Docker' (Required): The type of the step.

### EncodedTaskStep
#### Properties
* **encodedTaskContent**: string (Required): Base64 encoded value of the template/definition file content.
* **encodedValuesContent**: string: Base64 encoded value of the parameters/values file content.
* **type**: 'EncodedTask' (Required): The type of the step.
* **values**: [SetValue](#setvalue)[]: The collection of overridable values that can be passed when running a task.

### FileTaskStep
#### Properties
* **taskFilePath**: string (Required): The task template/definition file path relative to the source context.
* **type**: 'FileTask' (Required): The type of the step.
* **values**: [SetValue](#setvalue)[]: The collection of overridable values that can be passed when running a task.
* **valuesFilePath**: string: The task values/parameters file path relative to the source context.


## TriggerProperties
### Properties
* **baseImageTrigger**: [BaseImageTrigger](#baseimagetrigger): The trigger based on base image dependencies.
* **sourceTriggers**: [SourceTrigger](#sourcetrigger)[]: The collection of triggers based on source code repository.

