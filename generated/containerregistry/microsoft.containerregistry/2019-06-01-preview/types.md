# Microsoft.ContainerRegistry @ 2019-06-01-preview

## Resource Microsoft.ContainerRegistry/registries/agentPools@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AgentPoolProperties](#agentpoolproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.ContainerRegistry/registries/agentPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/taskRuns@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [IdentityProperties](#identityproperties)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TaskRunProperties](#taskrunproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/taskRuns' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/tasks@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [IdentityProperties](#identityproperties)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TaskProperties](#taskproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.ContainerRegistry/registries/tasks' (ReadOnly, DeployTimeConstant)

## AgentPoolProperties
### Properties
* **count**: int
* **os**: 'Linux' | 'Windows'
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **tier**: string
* **virtualNetworkSubnetResourceId**: string

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IdentityProperties
### Properties
* **principalId**: string
* **tenantId**: string
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned'
* **userAssignedIdentities**: [IdentityPropertiesUserAssignedIdentities](#identitypropertiesuserassignedidentities)

## IdentityPropertiesUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentityProperties](#useridentityproperties)

## UserIdentityProperties
### Properties
* **clientId**: string
* **principalId**: string

## TaskRunProperties
### Properties
* **forceUpdateTag**: string
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **runRequest**: [RunRequest](#runrequest)
* **runResult**: [Run](#run) (ReadOnly)

## RunRequest
* **Discriminator**: type

### Base Properties
* **agentPoolName**: string
* **isArchiveEnabled**: bool
* **logTemplate**: string
### DockerBuildRequest
#### Properties
* **agentConfiguration**: [AgentProperties](#agentproperties)
* **arguments**: [Argument](#argument)[]
* **credentials**: [Credentials](#credentials)
* **dockerFilePath**: string (Required)
* **imageNames**: string[]
* **isPushEnabled**: bool
* **noCache**: bool
* **platform**: [PlatformProperties](#platformproperties) (Required)
* **sourceLocation**: string
* **target**: string
* **timeout**: int
* **type**: 'DockerBuildRequest' (Required)

### EncodedTaskRunRequest
#### Properties
* **agentConfiguration**: [AgentProperties](#agentproperties)
* **credentials**: [Credentials](#credentials)
* **encodedTaskContent**: string (Required)
* **encodedValuesContent**: string
* **platform**: [PlatformProperties](#platformproperties) (Required)
* **sourceLocation**: string
* **timeout**: int
* **type**: 'EncodedTaskRunRequest' (Required)
* **values**: [SetValue](#setvalue)[]

### FileTaskRunRequest
#### Properties
* **agentConfiguration**: [AgentProperties](#agentproperties)
* **credentials**: [Credentials](#credentials)
* **platform**: [PlatformProperties](#platformproperties) (Required)
* **sourceLocation**: string
* **taskFilePath**: string (Required)
* **timeout**: int
* **type**: 'FileTaskRunRequest' (Required)
* **values**: [SetValue](#setvalue)[]
* **valuesFilePath**: string

### TaskRunRequest
#### Properties
* **overrideTaskStepProperties**: [OverrideTaskStepProperties](#overridetaskstepproperties)
* **taskId**: string (Required)
* **type**: 'TaskRunRequest' (Required)


## DockerBuildRequest
### Properties
* **agentConfiguration**: [AgentProperties](#agentproperties)
* **arguments**: [Argument](#argument)[]
* **credentials**: [Credentials](#credentials)
* **dockerFilePath**: string (Required)
* **imageNames**: string[]
* **isPushEnabled**: bool
* **noCache**: bool
* **platform**: [PlatformProperties](#platformproperties) (Required)
* **sourceLocation**: string
* **target**: string
* **timeout**: int
* **type**: 'DockerBuildRequest' (Required)

## AgentProperties
### Properties
* **cpu**: int

## Argument
### Properties
* **isSecret**: bool
* **name**: string (Required)
* **value**: string (Required)

## Credentials
### Properties
* **customRegistries**: [CredentialsCustomRegistries](#credentialscustomregistries)
* **sourceRegistry**: [SourceRegistryCredentials](#sourceregistrycredentials)

## CredentialsCustomRegistries
### Properties
### Additional Properties
* **Additional Properties Type**: [CustomRegistryCredentials](#customregistrycredentials)

## CustomRegistryCredentials
### Properties
* **identity**: string
* **password**: [SecretObject](#secretobject)
* **userName**: [SecretObject](#secretobject)

## SecretObject
### Properties
* **type**: 'Opaque' | 'Vaultsecret'
* **value**: string

## SourceRegistryCredentials
### Properties
* **loginMode**: 'Default' | 'None'

## PlatformProperties
### Properties
* **architecture**: '386' | 'amd64' | 'arm' | 'arm64' | 'x86'
* **os**: 'Linux' | 'Windows' (Required)
* **variant**: 'v6' | 'v7' | 'v8'

## EncodedTaskRunRequest
### Properties
* **agentConfiguration**: [AgentProperties](#agentproperties)
* **credentials**: [Credentials](#credentials)
* **encodedTaskContent**: string (Required)
* **encodedValuesContent**: string
* **platform**: [PlatformProperties](#platformproperties) (Required)
* **sourceLocation**: string
* **timeout**: int
* **type**: 'EncodedTaskRunRequest' (Required)
* **values**: [SetValue](#setvalue)[]

## SetValue
### Properties
* **isSecret**: bool
* **name**: string (Required)
* **value**: string (Required)

## FileTaskRunRequest
### Properties
* **agentConfiguration**: [AgentProperties](#agentproperties)
* **credentials**: [Credentials](#credentials)
* **platform**: [PlatformProperties](#platformproperties) (Required)
* **sourceLocation**: string
* **taskFilePath**: string (Required)
* **timeout**: int
* **type**: 'FileTaskRunRequest' (Required)
* **values**: [SetValue](#setvalue)[]
* **valuesFilePath**: string

## TaskRunRequest
### Properties
* **overrideTaskStepProperties**: [OverrideTaskStepProperties](#overridetaskstepproperties)
* **taskId**: string (Required)
* **type**: 'TaskRunRequest' (Required)

## OverrideTaskStepProperties
### Properties
* **arguments**: [Argument](#argument)[]
* **contextPath**: string
* **file**: string
* **target**: string
* **updateTriggerToken**: string
* **values**: [SetValue](#setvalue)[]

## Run
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [RunProperties](#runproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: string (ReadOnly)

## RunProperties
### Properties
* **agentConfiguration**: [AgentProperties](#agentproperties)
* **agentPoolName**: string
* **createTime**: string
* **customRegistries**: string[]
* **finishTime**: string
* **imageUpdateTrigger**: [ImageUpdateTrigger](#imageupdatetrigger)
* **isArchiveEnabled**: bool
* **lastUpdatedTime**: string
* **logArtifact**: [ImageDescriptor](#imagedescriptor) (ReadOnly)
* **outputImages**: [ImageDescriptor](#imagedescriptor)[]
* **platform**: [PlatformProperties](#platformproperties)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **runErrorMessage**: string (ReadOnly)
* **runId**: string
* **runType**: 'AutoBuild' | 'AutoRun' | 'QuickBuild' | 'QuickRun'
* **sourceRegistryAuth**: string
* **sourceTrigger**: [SourceTriggerDescriptor](#sourcetriggerdescriptor)
* **startTime**: string
* **status**: 'Canceled' | 'Error' | 'Failed' | 'Queued' | 'Running' | 'Started' | 'Succeeded' | 'Timeout'
* **task**: string
* **timerTrigger**: [TimerTriggerDescriptor](#timertriggerdescriptor)
* **updateTriggerToken**: string

## ImageUpdateTrigger
### Properties
* **id**: string
* **images**: [ImageDescriptor](#imagedescriptor)[]
* **timestamp**: string

## ImageDescriptor
### Properties
* **digest**: string
* **registry**: string
* **repository**: string
* **tag**: string

## SourceTriggerDescriptor
### Properties
* **branchName**: string
* **commitId**: string
* **eventType**: string
* **id**: string
* **providerType**: string
* **pullRequestId**: string
* **repositoryUrl**: string

## TimerTriggerDescriptor
### Properties
* **scheduleOccurrence**: string
* **timerTriggerName**: string

## TaskProperties
### Properties
* **agentConfiguration**: [AgentProperties](#agentproperties)
* **agentPoolName**: string
* **creationDate**: string (ReadOnly)
* **credentials**: [Credentials](#credentials)
* **isSystemTask**: bool
* **logTemplate**: string
* **platform**: [PlatformProperties](#platformproperties)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **status**: 'Disabled' | 'Enabled'
* **step**: [TaskStepProperties](#taskstepproperties)
* **timeout**: int
* **trigger**: [TriggerProperties](#triggerproperties)

## TaskStepProperties
* **Discriminator**: type

### Base Properties
* **baseImageDependencies**: [BaseImageDependency](#baseimagedependency)[] (ReadOnly)
* **contextAccessToken**: string
* **contextPath**: string
### DockerBuildStep
#### Properties
* **arguments**: [Argument](#argument)[]
* **dockerFilePath**: string (Required)
* **imageNames**: string[]
* **isPushEnabled**: bool
* **noCache**: bool
* **target**: string
* **type**: 'Docker' (Required)

### EncodedTaskStep
#### Properties
* **encodedTaskContent**: string (Required)
* **encodedValuesContent**: string
* **type**: 'EncodedTask' (Required)
* **values**: [SetValue](#setvalue)[]

### FileTaskStep
#### Properties
* **taskFilePath**: string (Required)
* **type**: 'FileTask' (Required)
* **values**: [SetValue](#setvalue)[]
* **valuesFilePath**: string


## BaseImageDependency
### Properties
* **digest**: string
* **registry**: string
* **repository**: string
* **tag**: string
* **type**: 'BuildTime' | 'RunTime'

## DockerBuildStep
### Properties
* **arguments**: [Argument](#argument)[]
* **dockerFilePath**: string (Required)
* **imageNames**: string[]
* **isPushEnabled**: bool
* **noCache**: bool
* **target**: string
* **type**: 'Docker' (Required)

## EncodedTaskStep
### Properties
* **encodedTaskContent**: string (Required)
* **encodedValuesContent**: string
* **type**: 'EncodedTask' (Required)
* **values**: [SetValue](#setvalue)[]

## FileTaskStep
### Properties
* **taskFilePath**: string (Required)
* **type**: 'FileTask' (Required)
* **values**: [SetValue](#setvalue)[]
* **valuesFilePath**: string

## TriggerProperties
### Properties
* **baseImageTrigger**: [BaseImageTrigger](#baseimagetrigger)
* **sourceTriggers**: [SourceTrigger](#sourcetrigger)[]
* **timerTriggers**: [TimerTrigger](#timertrigger)[]

## BaseImageTrigger
### Properties
* **baseImageTriggerType**: 'All' | 'Runtime' (Required)
* **name**: string (Required)
* **status**: 'Disabled' | 'Enabled'
* **updateTriggerEndpoint**: string
* **updateTriggerPayloadType**: 'Default' | 'Token'

## SourceTrigger
### Properties
* **name**: string (Required)
* **sourceRepository**: [SourceProperties](#sourceproperties) (Required)
* **sourceTriggerEvents**: 'commit' | 'pullrequest'[] (Required)
* **status**: 'Disabled' | 'Enabled'

## SourceProperties
### Properties
* **branch**: string
* **repositoryUrl**: string (Required)
* **sourceControlAuthProperties**: [AuthInfo](#authinfo)
* **sourceControlType**: 'Github' | 'VisualStudioTeamService' (Required)

## AuthInfo
### Properties
* **expiresIn**: int
* **refreshToken**: string
* **scope**: string
* **token**: string (Required)
* **tokenType**: 'OAuth' | 'PAT' (Required)

## TimerTrigger
### Properties
* **name**: string (Required)
* **schedule**: string (Required)
* **status**: 'Disabled' | 'Enabled'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

