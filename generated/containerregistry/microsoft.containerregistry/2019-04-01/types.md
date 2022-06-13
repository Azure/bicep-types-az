# Microsoft.ContainerRegistry @ 2019-04-01

## Resource Microsoft.ContainerRegistry/registries/tasks@2019-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityProperties](#identityproperties): Identity for the resource.
* **location**: string (Required): The location of the resource. This cannot be changed after the resource is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TaskProperties](#taskproperties): The properties of a task.
* **tags**: [ResourceTags](#resourcetags): The tags of the resource.
* **type**: 'Microsoft.ContainerRegistry/registries/tasks' (ReadOnly, DeployTimeConstant): The resource type

## Function listBuildSourceUploadUrl (Microsoft.ContainerRegistry/registries@2019-04-01)
* **Resource**: Microsoft.ContainerRegistry/registries
* **ApiVersion**: 2019-04-01
* **Output**: [SourceUploadDefinition](#sourceuploaddefinition)

## Function listDetails (Microsoft.ContainerRegistry/registries/tasks@2019-04-01)
* **Resource**: Microsoft.ContainerRegistry/registries/tasks
* **ApiVersion**: 2019-04-01
* **Output**: [Task](#task)

## Function listLogSasUrl (Microsoft.ContainerRegistry/registries/runs@2019-04-01)
* **Resource**: Microsoft.ContainerRegistry/registries/runs
* **ApiVersion**: 2019-04-01
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
* **identity**: string: Indicates the managed identity assigned to the custom credential. If a user-assigned identity
this value is the Client ID. If a system-assigned identity, the value will be `system`. In
the case of a system-assigned identity, the Client ID will be determined by the runner. This
identity may be used to authenticate to key vault to retrieve credentials or it may be the only 
source of authentication used for accessing the registry.
* **password**: [SecretObject](#secretobject): The password for logging into the custom registry. The password is a secret 
object that allows multiple ways of providing the value for it.
* **userName**: [SecretObject](#secretobject): The username for logging into the custom registry.

## IdentityProperties
### Properties
* **principalId**: string: The principal ID of resource identity.
* **tenantId**: string: The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The identity type.
* **userAssignedIdentities**: [IdentityPropertiesUserAssignedIdentities](#identitypropertiesuserassignedidentities): The list of user identities associated with the resource. The user identity 
dictionary key references will be ARM resource ids in the form: 
'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/
    providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## IdentityPropertiesUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentityProperties](#useridentityproperties)

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
* **logLink**: string (ReadOnly): The link to logs for a run on a azure container registry.

## SecretObject
### Properties
* **type**: 'Opaque' | 'Vaultsecret' | string: The type of the secret object which determines how the value of the secret object has to be
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

## SourceUploadDefinition
### Properties
* **relativePath**: string (ReadOnly): The relative path to the source. This is used to submit the subsequent queue build request.
* **uploadUrl**: string (ReadOnly): The URL where the client can upload the source.

## Task
### Properties
* **id**: string (ReadOnly): The resource ID.
* **identity**: [IdentityProperties](#identityproperties) (ReadOnly): Identity for the resource.
* **location**: string (ReadOnly): The location of the resource. This cannot be changed after the resource is created.
* **name**: string (ReadOnly): The name of the resource.
* **properties**: [TaskProperties](#taskproperties) (ReadOnly): The properties of a task.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): The tags of the resource.
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


## TimerTrigger
### Properties
* **name**: string (Required): The name of the trigger.
* **schedule**: string (Required): The CRON expression for the task schedule
* **status**: 'Disabled' | 'Enabled' | string: The current status of trigger.

## TriggerProperties
### Properties
* **baseImageTrigger**: [BaseImageTrigger](#baseimagetrigger): The trigger based on base image dependencies.
* **sourceTriggers**: [SourceTrigger](#sourcetrigger)[]: The collection of triggers based on source code repository.
* **timerTriggers**: [TimerTrigger](#timertrigger)[]: The collection of timer triggers.

## UserIdentityProperties
### Properties
* **clientId**: string: The client id of user assigned identity.
* **principalId**: string: The principal id of user assigned identity.

