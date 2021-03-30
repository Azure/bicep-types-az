# Microsoft.ContainerRegistry @ 2019-04-01

## Resource Microsoft.ContainerRegistry/registries/tasks@2019-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityProperties](#identityproperties): Managed identity for the resource.
* **location**: string (Required): The location of the resource. This cannot be changed after the resource is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TaskProperties](#taskproperties): The properties of a task.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.ContainerRegistry/registries/tasks' (ReadOnly, DeployTimeConstant): The resource type

## IdentityProperties
### Properties
* **principalId**: string: The principal ID of resource identity.
* **tenantId**: string: The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned': The identity type. Possible values include: 'SystemAssigned', 'UserAssigned', 'SystemAssigned, UserAssigned', 'None'
* **userAssignedIdentities**: [Dictionary<string,UserIdentityProperties>](#dictionarystringuseridentityproperties): The list of user identities associated with the resource. The user identity
dictionary key references will be ARM resource ids in the form:
'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/
    providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## Dictionary<string,UserIdentityProperties>
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentityProperties](#useridentityproperties)

## UserIdentityProperties
### Properties
* **clientId**: string: The client id of user assigned identity.
* **principalId**: string: The principal id of user assigned identity.

## TaskProperties
### Properties
* **agentConfiguration**: [AgentProperties](#agentproperties): The properties that determine the run agent configuration.
* **creationDate**: string (ReadOnly): The creation date of task.
* **credentials**: [Credentials](#credentials): The parameters that describes a set of credentials that will be used when a run is invoked.
* **platform**: [PlatformProperties](#platformproperties) (Required): The platform properties against which the run has to happen.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of the task. Possible values include: 'Creating', 'Updating', 'Deleting', 'Succeeded', 'Failed', 'Canceled'
* **status**: 'Disabled' | 'Enabled': The current status of task. Possible values include: 'Disabled', 'Enabled'
* **step**: [TaskStepProperties](#taskstepproperties) (Required): Base properties for any task step.
* **timeout**: int: Run timeout in seconds.
* **trigger**: [TriggerProperties](#triggerproperties): The properties of a trigger.

## AgentProperties
### Properties
* **cpu**: int: The CPU configuration in terms of number of cores required for the run.

## Credentials
### Properties
* **customRegistries**: [Dictionary<string,CustomRegistryCredentials>](#dictionarystringcustomregistrycredentials): Describes the credential parameters for accessing other custom registries. The key
for the dictionary item will be the registry login server (myregistry.azurecr.io) and
the value of the item will be the registry credentials for accessing the registry.
* **sourceRegistry**: [SourceRegistryCredentials](#sourceregistrycredentials): Describes the credential parameters for accessing the source registry.

## Dictionary<string,CustomRegistryCredentials>
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
* **password**: [SecretObject](#secretobject): Describes the properties of a secret object value.
* **userName**: [SecretObject](#secretobject): Describes the properties of a secret object value.

## SecretObject
### Properties
* **type**: 'Opaque' | 'Vaultsecret': The type of the secret object which determines how the value of the secret object has to be
interpreted. Possible values include: 'Opaque', 'Vaultsecret'
* **value**: string: The value of the secret. The format of this value will be determined
based on the type of the secret object. If the type is Opaque, the value will be
used as is without any modification.

## SourceRegistryCredentials
### Properties
* **loginMode**: 'Default' | 'None': The authentication mode which determines the source registry login scope. The credentials for the source registry
will be generated using the given scope. These credentials will be used to login to
the source registry during the run. Possible values include: 'None', 'Default'

## PlatformProperties
### Properties
* **architecture**: 'amd64' | 'arm' | 'x86': The OS architecture. Possible values include: 'amd64', 'x86', 'arm'
* **os**: 'Linux' | 'Windows' (Required): The operating system type required for the run. Possible values include: 'Windows', 'Linux'
* **variant**: 'v6' | 'v7' | 'v8': Variant of the CPU. Possible values include: 'v6', 'v7', 'v8'

## TaskStepProperties
* **Discriminator**: type
### Base Properties
* **baseImageDependencies**: [BaseImageDependency](#baseimagedependency)[] (ReadOnly): List of base image dependencies for a step.
* **contextAccessToken**: string: The token (git PAT or SAS token of storage account blob) associated with the context for a step.
* **contextPath**: string: The URL(absolute or relative) of the source context for the task step.
### Docker
#### Properties
* **arguments**: [Argument](#argument)[]: The collection of override arguments to be used when executing this build step.
* **dockerFilePath**: string (Required): The Docker file path relative to the source context.
* **imageNames**: string[]: The fully qualified image names including the repository and tag.
* **isPushEnabled**: bool: The value of this property indicates whether the image built should be pushed to the registry or not.
* **noCache**: bool: The value of this property indicates whether the image cache is enabled or not.
* **target**: string: The name of the target build stage for the docker build.
* **type**: 'Docker' (Required): The Docker build step.

### EncodedTask
#### Properties
* **encodedTaskContent**: string (Required): Base64 encoded value of the template/definition file content.
* **encodedValuesContent**: string: Base64 encoded value of the parameters/values file content.
* **type**: 'EncodedTask' (Required): The properties of a encoded task step.
* **values**: [SetValue](#setvalue)[]: The collection of overridable values that can be passed when running a task.

### FileTask
#### Properties
* **taskFilePath**: string (Required): The task template/definition file path relative to the source context.
* **type**: 'FileTask' (Required): The properties of a task step.
* **values**: [SetValue](#setvalue)[]: The collection of overridable values that can be passed when running a task.
* **valuesFilePath**: string: The task values/parameters file path relative to the source context.


## BaseImageDependency
### Properties
* **digest**: string: The sha256-based digest of the image manifest.
* **registry**: string: The registry login server.
* **repository**: string: The repository name.
* **tag**: string: The tag name.
* **type**: 'BuildTime' | 'RunTime': The type of the base image dependency. Possible values include: 'BuildTime', 'RunTime'

## Docker
### Properties
* **arguments**: [Argument](#argument)[]: The collection of override arguments to be used when executing this build step.
* **dockerFilePath**: string (Required): The Docker file path relative to the source context.
* **imageNames**: string[]: The fully qualified image names including the repository and tag.
* **isPushEnabled**: bool: The value of this property indicates whether the image built should be pushed to the registry or not.
* **noCache**: bool: The value of this property indicates whether the image cache is enabled or not.
* **target**: string: The name of the target build stage for the docker build.
* **type**: 'Docker' (Required): The Docker build step.

## Argument
### Properties
* **isSecret**: bool: Flag to indicate whether the argument represents a secret and want to be removed from build logs.
* **name**: string (Required): The name of the argument.
* **value**: string (Required): The value of the argument.

## EncodedTask
### Properties
* **encodedTaskContent**: string (Required): Base64 encoded value of the template/definition file content.
* **encodedValuesContent**: string: Base64 encoded value of the parameters/values file content.
* **type**: 'EncodedTask' (Required): The properties of a encoded task step.
* **values**: [SetValue](#setvalue)[]: The collection of overridable values that can be passed when running a task.

## SetValue
### Properties
* **isSecret**: bool: Flag to indicate whether the value represents a secret or not.
* **name**: string (Required): The name of the overridable value.
* **value**: string (Required): The overridable value.

## FileTask
### Properties
* **taskFilePath**: string (Required): The task template/definition file path relative to the source context.
* **type**: 'FileTask' (Required): The properties of a task step.
* **values**: [SetValue](#setvalue)[]: The collection of overridable values that can be passed when running a task.
* **valuesFilePath**: string: The task values/parameters file path relative to the source context.

## TriggerProperties
### Properties
* **baseImageTrigger**: [BaseImageTrigger](#baseimagetrigger): The trigger based on base image dependency.
* **sourceTriggers**: [SourceTrigger](#sourcetrigger)[]: The collection of triggers based on source code repository.
* **timerTriggers**: [TimerTrigger](#timertrigger)[]: The collection of timer triggers.

## BaseImageTrigger
### Properties
* **baseImageTriggerType**: 'All' | 'Runtime' (Required): The type of the auto trigger for base image dependency updates. Possible values include: 'All', 'Runtime'
* **name**: string (Required): The name of the trigger.
* **status**: 'Disabled' | 'Enabled': The current status of trigger. Possible values include: 'Disabled', 'Enabled'

## SourceTrigger
### Properties
* **name**: string (Required): The name of the trigger.
* **sourceRepository**: [SourceProperties](#sourceproperties) (Required): The properties of the source code repository.
* **sourceTriggerEvents**: 'commit' | 'pullrequest'[] (Required): The source event corresponding to the trigger.
* **status**: 'Disabled' | 'Enabled': The current status of trigger. Possible values include: 'Disabled', 'Enabled'

## SourceProperties
### Properties
* **branch**: string: The branch name of the source code.
* **repositoryUrl**: string (Required): The full URL to the source code repository
* **sourceControlAuthProperties**: [AuthInfo](#authinfo): The authorization properties for accessing the source code repository.
* **sourceControlType**: 'Github' | 'VisualStudioTeamService' (Required): The type of source control service. Possible values include: 'Github', 'VisualStudioTeamService'

## AuthInfo
### Properties
* **expiresIn**: int: Time in seconds that the token remains valid
* **refreshToken**: string: The refresh token used to refresh the access token.
* **scope**: string: The scope of the access token.
* **token**: string (Required): The access token used to access the source control provider.
* **tokenType**: 'OAuth' | 'PAT' (Required): The type of Auth token. Possible values include: 'PAT', 'OAuth'

## TimerTrigger
### Properties
* **name**: string (Required): The name of the trigger.
* **schedule**: string (Required): The CRON expression for the task schedule
* **status**: 'Disabled' | 'Enabled': The current status of trigger. Possible values include: 'Disabled', 'Enabled'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

