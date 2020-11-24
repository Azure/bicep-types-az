# Microsoft.ContainerRegistry @ 2019-06-01-preview

## Microsoft.ContainerRegistry/registries/agentPools
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AgentPoolProperties
* **systemData**: SystemData (ReadOnly)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ContainerRegistry/registries/agentPools' (ReadOnly, DeployTimeConstant)

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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.ContainerRegistry/registries/taskRuns
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: IdentityProperties
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: TaskRunProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/taskRuns' (ReadOnly, DeployTimeConstant)

## IdentityProperties
### Properties
* **principalId**: string
* **tenantId**: string
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned'
* **userAssignedIdentities**: Dictionary<string,UserIdentityProperties>

## Dictionary<string,UserIdentityProperties>
### Additional Properties
* **Additional Properties Type**: UserIdentityProperties

## UserIdentityProperties
### Properties
* **clientId**: string
* **principalId**: string

## TaskRunProperties
### Properties
* **forceUpdateTag**: string
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **runRequest**: RunRequest
* **runResult**: Run (ReadOnly)

## RunRequest
* **Discriminator**: type
### Base Properties
* **agentPoolName**: string
* **isArchiveEnabled**: bool
* **logTemplate**: string
### DockerBuildRequest
#### Properties
* **agentConfiguration**: AgentProperties
* **arguments**: Argument[]
* **credentials**: Credentials
* **dockerFilePath**: string (Required)
* **imageNames**: string[]
* **isPushEnabled**: bool
* **noCache**: bool
* **platform**: PlatformProperties (Required)
* **sourceLocation**: string
* **target**: string
* **timeout**: int
* **type**: 'DockerBuildRequest' (Required)

### EncodedTaskRunRequest
#### Properties
* **agentConfiguration**: AgentProperties
* **credentials**: Credentials
* **encodedTaskContent**: string (Required)
* **encodedValuesContent**: string
* **platform**: PlatformProperties (Required)
* **sourceLocation**: string
* **timeout**: int
* **type**: 'EncodedTaskRunRequest' (Required)
* **values**: SetValue[]

### FileTaskRunRequest
#### Properties
* **agentConfiguration**: AgentProperties
* **credentials**: Credentials
* **platform**: PlatformProperties (Required)
* **sourceLocation**: string
* **taskFilePath**: string (Required)
* **timeout**: int
* **type**: 'FileTaskRunRequest' (Required)
* **values**: SetValue[]
* **valuesFilePath**: string

### TaskRunRequest
#### Properties
* **overrideTaskStepProperties**: OverrideTaskStepProperties
* **taskId**: string (Required)
* **type**: 'TaskRunRequest' (Required)


## DockerBuildRequest
### Properties
* **agentConfiguration**: AgentProperties
* **arguments**: Argument[]
* **credentials**: Credentials
* **dockerFilePath**: string (Required)
* **imageNames**: string[]
* **isPushEnabled**: bool
* **noCache**: bool
* **platform**: PlatformProperties (Required)
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
* **customRegistries**: Dictionary<string,CustomRegistryCredentials>
* **sourceRegistry**: SourceRegistryCredentials

## Dictionary<string,CustomRegistryCredentials>
### Additional Properties
* **Additional Properties Type**: CustomRegistryCredentials

## CustomRegistryCredentials
### Properties
* **identity**: string
* **password**: SecretObject
* **userName**: SecretObject

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
* **agentConfiguration**: AgentProperties
* **credentials**: Credentials
* **encodedTaskContent**: string (Required)
* **encodedValuesContent**: string
* **platform**: PlatformProperties (Required)
* **sourceLocation**: string
* **timeout**: int
* **type**: 'EncodedTaskRunRequest' (Required)
* **values**: SetValue[]

## SetValue
### Properties
* **isSecret**: bool
* **name**: string (Required)
* **value**: string (Required)

## FileTaskRunRequest
### Properties
* **agentConfiguration**: AgentProperties
* **credentials**: Credentials
* **platform**: PlatformProperties (Required)
* **sourceLocation**: string
* **taskFilePath**: string (Required)
* **timeout**: int
* **type**: 'FileTaskRunRequest' (Required)
* **values**: SetValue[]
* **valuesFilePath**: string

## TaskRunRequest
### Properties
* **overrideTaskStepProperties**: OverrideTaskStepProperties
* **taskId**: string (Required)
* **type**: 'TaskRunRequest' (Required)

## OverrideTaskStepProperties
### Properties
* **arguments**: Argument[]
* **contextPath**: string
* **file**: string
* **target**: string
* **updateTriggerToken**: string
* **values**: SetValue[]

## Run
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: RunProperties
* **systemData**: SystemData (ReadOnly)
* **type**: string (ReadOnly)

## RunProperties
### Properties
* **agentConfiguration**: AgentProperties
* **agentPoolName**: string
* **createTime**: string
* **customRegistries**: string[]
* **finishTime**: string
* **imageUpdateTrigger**: ImageUpdateTrigger
* **isArchiveEnabled**: bool
* **lastUpdatedTime**: string
* **logArtifact**: ImageDescriptor (ReadOnly)
* **outputImages**: ImageDescriptor[]
* **platform**: PlatformProperties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **runErrorMessage**: string (ReadOnly)
* **runId**: string
* **runType**: 'AutoBuild' | 'AutoRun' | 'QuickBuild' | 'QuickRun'
* **sourceRegistryAuth**: string
* **sourceTrigger**: SourceTriggerDescriptor
* **startTime**: string
* **status**: 'Canceled' | 'Error' | 'Failed' | 'Queued' | 'Running' | 'Started' | 'Succeeded' | 'Timeout'
* **task**: string
* **timerTrigger**: TimerTriggerDescriptor
* **updateTriggerToken**: string

## ImageUpdateTrigger
### Properties
* **id**: string
* **images**: ImageDescriptor[]
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

## Microsoft.ContainerRegistry/registries/tasks
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: IdentityProperties
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: TaskProperties
* **systemData**: SystemData (ReadOnly)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ContainerRegistry/registries/tasks' (ReadOnly, DeployTimeConstant)

## TaskProperties
### Properties
* **agentConfiguration**: AgentProperties
* **agentPoolName**: string
* **creationDate**: string (ReadOnly)
* **credentials**: Credentials
* **isSystemTask**: bool
* **logTemplate**: string
* **platform**: PlatformProperties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **status**: 'Disabled' | 'Enabled'
* **step**: TaskStepProperties
* **timeout**: int
* **trigger**: TriggerProperties

## TaskStepProperties
* **Discriminator**: type
### Base Properties
* **baseImageDependencies**: BaseImageDependency[] (ReadOnly)
* **contextAccessToken**: string
* **contextPath**: string
### Docker
#### Properties
* **arguments**: Argument[]
* **dockerFilePath**: string (Required)
* **imageNames**: string[]
* **isPushEnabled**: bool
* **noCache**: bool
* **target**: string
* **type**: 'Docker' (Required)

### EncodedTask
#### Properties
* **encodedTaskContent**: string (Required)
* **encodedValuesContent**: string
* **type**: 'EncodedTask' (Required)
* **values**: SetValue[]

### FileTask
#### Properties
* **taskFilePath**: string (Required)
* **type**: 'FileTask' (Required)
* **values**: SetValue[]
* **valuesFilePath**: string


## BaseImageDependency
### Properties
* **digest**: string
* **registry**: string
* **repository**: string
* **tag**: string
* **type**: 'BuildTime' | 'RunTime'

## Docker
### Properties
* **arguments**: Argument[]
* **dockerFilePath**: string (Required)
* **imageNames**: string[]
* **isPushEnabled**: bool
* **noCache**: bool
* **target**: string
* **type**: 'Docker' (Required)

## EncodedTask
### Properties
* **encodedTaskContent**: string (Required)
* **encodedValuesContent**: string
* **type**: 'EncodedTask' (Required)
* **values**: SetValue[]

## FileTask
### Properties
* **taskFilePath**: string (Required)
* **type**: 'FileTask' (Required)
* **values**: SetValue[]
* **valuesFilePath**: string

## TriggerProperties
### Properties
* **baseImageTrigger**: BaseImageTrigger
* **sourceTriggers**: SourceTrigger[]
* **timerTriggers**: TimerTrigger[]

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
* **sourceRepository**: SourceProperties (Required)
* **sourceTriggerEvents**: 'commit' | 'pullrequest'[] (Required)
* **status**: 'Disabled' | 'Enabled'

## SourceProperties
### Properties
* **branch**: string
* **repositoryUrl**: string (Required)
* **sourceControlAuthProperties**: AuthInfo
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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

