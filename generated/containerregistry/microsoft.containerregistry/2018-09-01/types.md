# Microsoft.ContainerRegistry @ 2018-09-01

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

## TaskProperties
### Properties
* **agentConfiguration**: [AgentProperties](#agentproperties): The properties that determine the run agent configuration.
* **creationDate**: string (ReadOnly): The creation date of task.
* **credentials**: [Credentials](#credentials): The parameters that describes a set of credentials that will be used when a run is invoked.
* **platform**: [PlatformProperties](#platformproperties) (Required): The platform properties against which the run has to happen.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of a run.
* **status**: 'Disabled' | 'Enabled': The current status of task.
* **step**: [TaskStepProperties](#taskstepproperties) (Required): Base properties for any task step.
* **timeout**: int: Run timeout in seconds.
* **trigger**: [TriggerProperties](#triggerproperties): The properties of a trigger.

## AgentProperties
### Properties
* **cpu**: int: The CPU configuration in terms of number of cores required for the run.

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
* **password**: [SecretObject](#secretobject): Describes the properties of a secret object value.
* **userName**: [SecretObject](#secretobject): Describes the properties of a secret object value.

## SecretObject
### Properties
* **type**: 'Opaque': The type of the secret object which determines how the value of the secret object has to be
interpreted.
* **value**: string: The value of the secret. The format of this value will be determined
based on the type of the secret object. If the type is Opaque, the value will be
used as is without any modification.

## SourceRegistryCredentials
### Properties
* **loginMode**: 'Default' | 'None': The authentication mode which determines the source registry login scope. The credentials for the source registry
will be generated using the given scope. These credentials will be used to login to
the source registry during the run.

## PlatformProperties
### Properties
* **architecture**: 'amd64' | 'arm' | 'x86': The OS architecture.
* **os**: 'Linux' | 'Windows' (Required): The operating system type required for the run.
* **variant**: 'v6' | 'v7' | 'v8': Variant of the CPU.

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


## BaseImageDependency
### Properties
* **digest**: string: The sha256-based digest of the image manifest.
* **registry**: string: The registry login server.
* **repository**: string: The repository name.
* **tag**: string: The tag name.
* **type**: 'BuildTime' | 'RunTime': The type of the base image dependency.

## Argument
### Properties
* **isSecret**: bool: Flag to indicate whether the argument represents a secret and want to be removed from build logs.
* **name**: string (Required): The name of the argument.
* **value**: string (Required): The value of the argument.

## SetValue
### Properties
* **isSecret**: bool: Flag to indicate whether the value represents a secret or not.
* **name**: string (Required): The name of the overridable value.
* **value**: string (Required): The overridable value.

## TriggerProperties
### Properties
* **baseImageTrigger**: [BaseImageTrigger](#baseimagetrigger): The trigger based on base image dependency.
* **sourceTriggers**: [SourceTrigger](#sourcetrigger)[]: The collection of triggers based on source code repository.

## BaseImageTrigger
### Properties
* **baseImageTriggerType**: 'All' | 'Runtime' (Required): The type of the auto trigger for base image dependency updates.
* **name**: string (Required): The name of the trigger.
* **status**: 'Disabled' | 'Enabled': The current status of trigger.

## SourceTrigger
### Properties
* **name**: string (Required): The name of the trigger.
* **sourceRepository**: [SourceProperties](#sourceproperties) (Required): The properties of the source code repository.
* **sourceTriggerEvents**: 'commit' | 'pullrequest'[] (Required): The source event corresponding to the trigger.
* **status**: 'Disabled' | 'Enabled': The current status of trigger.

## SourceProperties
### Properties
* **branch**: string: The branch name of the source code.
* **repositoryUrl**: string (Required): The full URL to the source code repository
* **sourceControlAuthProperties**: [AuthInfo](#authinfo): The authorization properties for accessing the source code repository.
* **sourceControlType**: 'Github' | 'VisualStudioTeamService' (Required): The type of source control service.

## AuthInfo
### Properties
* **expiresIn**: int: Time in seconds that the token remains valid
* **refreshToken**: string: The refresh token used to refresh the access token.
* **scope**: string: The scope of the access token.
* **token**: string (Required): The access token used to access the source control provider.
* **tokenType**: 'OAuth' | 'PAT' (Required): The type of Auth token.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

