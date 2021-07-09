# Microsoft.ContainerRegistry @ 2018-02-01-preview

## Resource Microsoft.ContainerRegistry/registries/buildTasks@2018-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource. This cannot be changed after the resource is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BuildTaskProperties](#buildtaskproperties): The properties of a build task.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.ContainerRegistry/registries/buildTasks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerRegistry/registries/buildTasks/steps@2018-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BuildStepProperties](#buildstepproperties): Base properties for any build step.
* **type**: 'Microsoft.ContainerRegistry/registries/buildTasks/steps' (ReadOnly, DeployTimeConstant): The resource type

## BuildTaskProperties
### Properties
* **alias**: string (Required): The alternative updatable name for a build task.
* **creationDate**: string (ReadOnly): The creation date of build task.
* **platform**: [PlatformProperties](#platformproperties) (Required): The platform properties against which the build has to happen.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of the build task.
* **sourceRepository**: [SourceRepositoryProperties](#sourcerepositoryproperties) (Required): The properties of the source code repository.
* **status**: 'Disabled' | 'Enabled': The current status of build task.
* **timeout**: int: Build timeout in seconds.

## PlatformProperties
### Properties
* **cpu**: int: The CPU configuration in terms of number of cores required for the build.
* **osType**: 'Linux' | 'Windows' (Required): The operating system type required for the build.

## SourceRepositoryProperties
### Properties
* **isCommitTriggerEnabled**: bool: The value of this property indicates whether the source control commit trigger is enabled or not.
* **repositoryUrl**: string (Required): The full URL to the source code repository
* **sourceControlAuthProperties**: [SourceControlAuthInfo](#sourcecontrolauthinfo): The authorization properties for accessing the source code repository.
* **sourceControlType**: 'Github' | 'VisualStudioTeamService' (Required): The type of source control service.

## SourceControlAuthInfo
### Properties
* **expiresIn**: int: Time in seconds that the token remains valid
* **refreshToken**: string: The refresh token used to refresh the access token.
* **scope**: string: The scope of the access token.
* **token**: string (Required): The access token used to access the source control provider.
* **tokenType**: 'OAuth' | 'PAT': The type of Auth token.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BuildStepProperties
* **Discriminator**: type
### Base Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of the build step.
### Docker
#### Properties
* **baseImageDependencies**: [BaseImageDependency](#baseimagedependency)[] (ReadOnly): List of base image dependencies for a step.
* **baseImageTrigger**: 'All' | 'None' | 'Runtime': The type of the auto trigger for base image dependency updates.
* **branch**: string: The repository branch name.
* **buildArguments**: [BuildArgument](#buildargument)[]: The custom arguments for building this build step.
* **contextPath**: string: The relative context path for a docker build in the source.
* **dockerFilePath**: string: The Docker file path relative to the source control root.
* **imageNames**: string[]: The fully qualified image names including the repository and tag.
* **isPushEnabled**: bool: The value of this property indicates whether the image built should be pushed to the registry or not.
* **noCache**: bool: The value of this property indicates whether the image cache is enabled or not.
* **type**: 'Docker' (Required): The Docker build step.


## Docker
### Properties
* **baseImageDependencies**: [BaseImageDependency](#baseimagedependency)[] (ReadOnly): List of base image dependencies for a step.
* **baseImageTrigger**: 'All' | 'None' | 'Runtime': The type of the auto trigger for base image dependency updates.
* **branch**: string: The repository branch name.
* **buildArguments**: [BuildArgument](#buildargument)[]: The custom arguments for building this build step.
* **contextPath**: string: The relative context path for a docker build in the source.
* **dockerFilePath**: string: The Docker file path relative to the source control root.
* **imageNames**: string[]: The fully qualified image names including the repository and tag.
* **isPushEnabled**: bool: The value of this property indicates whether the image built should be pushed to the registry or not.
* **noCache**: bool: The value of this property indicates whether the image cache is enabled or not.
* **type**: 'Docker' (Required): The Docker build step.

## BaseImageDependency
### Properties
* **digest**: string: The sha256-based digest of the image manifest.
* **registry**: string: The registry login server.
* **repository**: string: The repository name.
* **tag**: string: The tag name.
* **type**: 'BuildTime' | 'RunTime': The type of the base image dependency.

## BuildArgument
### Properties
* **isSecret**: bool: Flag to indicate whether the argument represents a secret and want to be removed from build logs.
* **name**: string (Required): The name of the argument.
* **type**: string (Required): The type of the argument.
* **value**: string (Required): The value of the argument.

