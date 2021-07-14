# Microsoft.ContainerRegistry @ 2019-06-01-preview

## Resource Microsoft.ContainerRegistry/registries/agentPools@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource. This cannot be changed after the resource is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AgentPoolProperties](#agentpoolproperties): The properties of agent pool.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ResourceTags](#resourcetags): The tags of the resource.
* **type**: 'Microsoft.ContainerRegistry/registries/agentPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerRegistry/registries/taskRuns@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityProperties](#identityproperties): Managed identity for the resource.
* **location**: string: The location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TaskRunProperties](#taskrunproperties): The properties of task run.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.ContainerRegistry/registries/taskRuns' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerRegistry/registries/tasks@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityProperties](#identityproperties): Managed identity for the resource.
* **location**: string (Required): The location of the resource. This cannot be changed after the resource is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TaskProperties](#taskproperties): The properties of a task.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ResourceTags](#resourcetags): The tags of the resource.
* **type**: 'Microsoft.ContainerRegistry/registries/tasks' (ReadOnly, DeployTimeConstant): The resource type

## AgentPoolProperties
### Properties
* **count**: int: The count of agent machine
* **os**: 'Linux' | 'Windows': The OS of agent machine
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of this agent pool
* **tier**: string: The Tier of agent machine
* **virtualNetworkSubnetResourceId**: string: The Virtual Network Subnet Resource Id of the agent machine

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource modification (UTC).
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## UserIdentityProperties
### Properties
* **clientId**: string: The client id of user assigned identity.
* **principalId**: string: The principal id of user assigned identity.

## TaskRunProperties
### Properties
* **forceUpdateTag**: string: How the run should be forced to rerun even if the run request configuration has not changed
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of this agent pool
* **runRequest**: [RunRequest](#runrequest): The request parameters for scheduling a run.
* **runResult**: [Run](#run) (ReadOnly): Run resource properties

## RunRequest
* **Discriminator**: type

### Base Properties
* **agentPoolName**: string: The dedicated agent pool for the run.
* **isArchiveEnabled**: bool: The value that indicates whether archiving is enabled for the run or not.
* **logTemplate**: string: The template that describes the repository and tag information for run log artifact.
### DockerBuildRequest
#### Properties
* **agentConfiguration**: [AgentProperties](#agentproperties): The properties that determine the run agent configuration.
* **arguments**: [Argument](#argument)[]: The collection of override arguments to be used when executing the run.
* **credentials**: [Credentials](#credentials): The parameters that describes a set of credentials that will be used when a run is invoked.
* **dockerFilePath**: string (Required): The Docker file path relative to the source location.
* **imageNames**: string[]: The fully qualified image names including the repository and tag.
* **isPushEnabled**: bool: The value of this property indicates whether the image built should be pushed to the registry or not.
* **noCache**: bool: The value of this property indicates whether the image cache is enabled or not.
* **platform**: [PlatformProperties](#platformproperties) (Required): The platform properties against which the run has to happen.
* **sourceLocation**: string: The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.
If it is relative URL, the relative path should be obtained from calling listBuildSourceUploadUrl API.
* **target**: string: The name of the target build stage for the docker build.
* **timeout**: int: Run timeout in seconds.
* **type**: 'DockerBuildRequest' (Required): The type of the run request.

### EncodedTaskRunRequest
#### Properties
* **agentConfiguration**: [AgentProperties](#agentproperties): The properties that determine the run agent configuration.
* **credentials**: [Credentials](#credentials): The parameters that describes a set of credentials that will be used when a run is invoked.
* **encodedTaskContent**: string (Required): Base64 encoded value of the template/definition file content.
* **encodedValuesContent**: string: Base64 encoded value of the parameters/values file content.
* **platform**: [PlatformProperties](#platformproperties) (Required): The platform properties against which the run has to happen.
* **sourceLocation**: string: The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.
If it is relative URL, the relative path should be obtained from calling listBuildSourceUploadUrl API.
* **timeout**: int: Run timeout in seconds.
* **type**: 'EncodedTaskRunRequest' (Required): The type of the run request.
* **values**: [SetValue](#setvalue)[]: The collection of overridable values that can be passed when running a task.

### FileTaskRunRequest
#### Properties
* **agentConfiguration**: [AgentProperties](#agentproperties): The properties that determine the run agent configuration.
* **credentials**: [Credentials](#credentials): The parameters that describes a set of credentials that will be used when a run is invoked.
* **platform**: [PlatformProperties](#platformproperties) (Required): The platform properties against which the run has to happen.
* **sourceLocation**: string: The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.
If it is relative URL, the relative path should be obtained from calling listBuildSourceUploadUrl API.
* **taskFilePath**: string (Required): The template/definition file path relative to the source.
* **timeout**: int: Run timeout in seconds.
* **type**: 'FileTaskRunRequest' (Required): The type of the run request.
* **values**: [SetValue](#setvalue)[]: The collection of overridable values that can be passed when running a task.
* **valuesFilePath**: string: The values/parameters file path relative to the source.

### TaskRunRequest
#### Properties
* **overrideTaskStepProperties**: [OverrideTaskStepProperties](#overridetaskstepproperties)
* **taskId**: string (Required): The resource ID of task against which run has to be queued.
* **type**: 'TaskRunRequest' (Required): The type of the run request.


## AgentProperties
### Properties
* **cpu**: int: The CPU configuration in terms of number of cores required for the run.

## Argument
### Properties
* **isSecret**: bool: Flag to indicate whether the argument represents a secret and want to be removed from build logs.
* **name**: string (Required): The name of the argument.
* **value**: string (Required): The value of the argument.

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
* **password**: [SecretObject](#secretobject): Describes the properties of a secret object value.
* **userName**: [SecretObject](#secretobject): Describes the properties of a secret object value.

## SecretObject
### Properties
* **type**: 'Opaque' | 'Vaultsecret': The type of the secret object which determines how the value of the secret object has to be
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
* **architecture**: '386' | 'amd64' | 'arm' | 'arm64' | 'x86': The OS architecture.
* **os**: 'Linux' | 'Windows' (Required): The OS of agent machine
* **variant**: 'v6' | 'v7' | 'v8': Variant of the CPU.

## SetValue
### Properties
* **isSecret**: bool: Flag to indicate whether the value represents a secret or not.
* **name**: string (Required): The name of the overridable value.
* **value**: string (Required): The overridable value.

## OverrideTaskStepProperties
### Properties
* **arguments**: [Argument](#argument)[]: Gets or sets the collection of override arguments to be used when
executing a build step.
* **contextPath**: string: The source context against which run has to be queued.
* **file**: string: The file against which run has to be queued.
* **target**: string: The name of the target build stage for the docker build.
* **updateTriggerToken**: string: Base64 encoded update trigger token that will be attached with the base image trigger webhook.
* **values**: [SetValue](#setvalue)[]: The collection of overridable values that can be passed when running a Task.

## Run
### Properties
* **id**: string (ReadOnly): The resource ID.
* **name**: string (ReadOnly): The name of the resource.
* **properties**: [RunProperties](#runproperties): The properties for a run.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: string (ReadOnly): The type of the resource.

## RunProperties
### Properties
* **agentConfiguration**: [AgentProperties](#agentproperties): The properties that determine the run agent configuration.
* **agentPoolName**: string: The dedicated agent pool for the run.
* **createTime**: string: The time the run was scheduled.
* **customRegistries**: string[]: The list of custom registries that were logged in during this run.
* **finishTime**: string: The time the run finished.
* **imageUpdateTrigger**: [ImageUpdateTrigger](#imageupdatetrigger): The image update trigger that caused a build.
* **isArchiveEnabled**: bool: The value that indicates whether archiving is enabled or not.
* **lastUpdatedTime**: string: The last updated time for the run.
* **logArtifact**: [ImageDescriptor](#imagedescriptor) (ReadOnly): Properties for a registry image.
* **outputImages**: [ImageDescriptor](#imagedescriptor)[]: The list of all images that were generated from the run. This is applicable if the run generates base image dependencies.
* **platform**: [PlatformProperties](#platformproperties): The platform properties against which the run has to happen.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating': The provisioning state of this agent pool
* **runErrorMessage**: string (ReadOnly): The error message received from backend systems after the run is scheduled.
* **runId**: string: The unique identifier for the run.
* **runType**: 'AutoBuild' | 'AutoRun' | 'QuickBuild' | 'QuickRun': The type of run.
* **sourceRegistryAuth**: string: The scope of the credentials that were used to login to the source registry during this run.
* **sourceTrigger**: [SourceTriggerDescriptor](#sourcetriggerdescriptor): The source trigger that caused a run.
* **startTime**: string: The time the run started.
* **status**: 'Canceled' | 'Error' | 'Failed' | 'Queued' | 'Running' | 'Started' | 'Succeeded' | 'Timeout': The current status of the run.
* **task**: string: The task against which run was scheduled.
* **timerTrigger**: [TimerTriggerDescriptor](#timertriggerdescriptor)
* **updateTriggerToken**: string: The update trigger token passed for the Run.

## ImageUpdateTrigger
### Properties
* **id**: string: The unique ID of the trigger.
* **images**: [ImageDescriptor](#imagedescriptor)[]: The list of image updates that caused the build.
* **timestamp**: string: The timestamp when the image update happened.

## ImageDescriptor
### Properties
* **digest**: string: The sha256-based digest of the image manifest.
* **registry**: string: The registry login server.
* **repository**: string: The repository name.
* **tag**: string: The tag name.

## SourceTriggerDescriptor
### Properties
* **branchName**: string: The branch name in the repository.
* **commitId**: string: The unique ID that identifies a commit.
* **eventType**: string: The event type of the trigger.
* **id**: string: The unique ID of the trigger.
* **providerType**: string: The source control provider type.
* **pullRequestId**: string: The unique ID that identifies pull request.
* **repositoryUrl**: string: The repository URL.

## TimerTriggerDescriptor
### Properties
* **scheduleOccurrence**: string: The occurrence that triggered the run.
* **timerTriggerName**: string: The timer trigger name that caused the run.

## TaskProperties
### Properties
* **agentConfiguration**: [AgentProperties](#agentproperties): The properties that determine the run agent configuration.
* **agentPoolName**: string: The dedicated agent pool for the task.
* **creationDate**: string (ReadOnly): The creation date of task.
* **credentials**: [Credentials](#credentials): The parameters that describes a set of credentials that will be used when a run is invoked.
* **isSystemTask**: bool: The value of this property indicates whether the task resource is system task or not.
* **logTemplate**: string: The template that describes the repository and tag information for run log artifact.
* **platform**: [PlatformProperties](#platformproperties): The platform properties against which the run has to happen.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of this agent pool
* **status**: 'Disabled' | 'Enabled': The current status of task.
* **step**: [TaskStepProperties](#taskstepproperties): Base properties for any task step.
* **timeout**: int: Run timeout in seconds.
* **trigger**: [TriggerProperties](#triggerproperties): The properties of a trigger.

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

## TriggerProperties
### Properties
* **baseImageTrigger**: [BaseImageTrigger](#baseimagetrigger): The trigger based on base image dependency.
* **sourceTriggers**: [SourceTrigger](#sourcetrigger)[]: The collection of triggers based on source code repository.
* **timerTriggers**: [TimerTrigger](#timertrigger)[]: The collection of timer triggers.

## BaseImageTrigger
### Properties
* **baseImageTriggerType**: 'All' | 'Runtime' (Required): The type of the auto trigger for base image dependency updates.
* **name**: string (Required): The name of the trigger.
* **status**: 'Disabled' | 'Enabled': The current status of trigger.
* **updateTriggerEndpoint**: string: The endpoint URL for receiving update triggers.
* **updateTriggerPayloadType**: 'Default' | 'Token': Type of Payload body for Base image update triggers.

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

## TimerTrigger
### Properties
* **name**: string (Required): The name of the trigger.
* **schedule**: string (Required): The CRON expression for the task schedule
* **status**: 'Disabled' | 'Enabled': The current status of trigger.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

