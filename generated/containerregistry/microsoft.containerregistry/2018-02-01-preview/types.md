# Microsoft.ContainerRegistry @ 2018-02-01-preview

## Resource Microsoft.ContainerRegistry/registries/buildTasks@2018-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BuildTaskProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ContainerRegistry/registries/buildTasks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/buildTasks/steps@2018-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BuildStepProperties
* **type**: 'Microsoft.ContainerRegistry/registries/buildTasks/steps' (ReadOnly, DeployTimeConstant)

## BuildTaskProperties
### Properties
* **alias**: string (Required)
* **creationDate**: string (ReadOnly)
* **platform**: PlatformProperties (Required)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **sourceRepository**: SourceRepositoryProperties (Required)
* **status**: 'Disabled' | 'Enabled'
* **timeout**: int

## PlatformProperties
### Properties
* **cpu**: int
* **osType**: 'Linux' | 'Windows' (Required)

## SourceRepositoryProperties
### Properties
* **isCommitTriggerEnabled**: bool
* **repositoryUrl**: string (Required)
* **sourceControlAuthProperties**: SourceControlAuthInfo
* **sourceControlType**: 'Github' | 'VisualStudioTeamService' (Required)

## SourceControlAuthInfo
### Properties
* **expiresIn**: int
* **refreshToken**: string
* **scope**: string
* **token**: string (Required)
* **tokenType**: 'OAuth' | 'PAT'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BuildStepProperties
* **Discriminator**: type
### Base Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
### Docker
#### Properties
* **baseImageDependencies**: BaseImageDependency[] (ReadOnly)
* **baseImageTrigger**: 'All' | 'None' | 'Runtime'
* **branch**: string
* **buildArguments**: BuildArgument[]
* **contextPath**: string
* **dockerFilePath**: string
* **imageNames**: string[]
* **isPushEnabled**: bool
* **noCache**: bool
* **type**: 'Docker' (Required)


## Docker
### Properties
* **baseImageDependencies**: BaseImageDependency[] (ReadOnly)
* **baseImageTrigger**: 'All' | 'None' | 'Runtime'
* **branch**: string
* **buildArguments**: BuildArgument[]
* **contextPath**: string
* **dockerFilePath**: string
* **imageNames**: string[]
* **isPushEnabled**: bool
* **noCache**: bool
* **type**: 'Docker' (Required)

## BaseImageDependency
### Properties
* **digest**: string
* **registry**: string
* **repository**: string
* **tag**: string
* **type**: 'BuildTime' | 'RunTime'

## BuildArgument
### Properties
* **isSecret**: bool
* **name**: string (Required)
* **type**: string (Required)
* **value**: string (Required)

