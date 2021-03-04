# Microsoft.BatchAI @ 2018-05-01

## Resource Microsoft.BatchAI/workspaces@2018-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **tags**: WorkspaceCreateParametersTags
* **type**: 'Microsoft.BatchAI/workspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.BatchAI/workspaces/clusters@2018-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ClusterBaseProperties
* **type**: 'Microsoft.BatchAI/workspaces/clusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.BatchAI/workspaces/experiments/jobs@2018-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: JobBaseProperties
* **type**: 'Microsoft.BatchAI/workspaces/experiments/jobs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.BatchAI/workspaces/fileServers@2018-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: FileServerBaseProperties
* **type**: 'Microsoft.BatchAI/workspaces/fileServers' (ReadOnly, DeployTimeConstant)

## WorkspaceCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ClusterBaseProperties
### Properties
* **nodeSetup**: NodeSetup
* **scaleSettings**: ScaleSettings
* **subnet**: ResourceId
* **userAccountSettings**: UserAccountSettings (Required)
* **virtualMachineConfiguration**: VirtualMachineConfiguration
* **vmSize**: string (Required)

## NodeSetup
### Properties
* **mountVolumes**: MountVolumes
* **performanceCountersSettings**: PerformanceCountersSettings
* **setupTask**: SetupTask

## MountVolumes
### Properties
* **azureBlobFileSystems**: AzureBlobFileSystemReference[]
* **azureFileShares**: AzureFileShareReference[]
* **fileServers**: FileServerReference[]
* **unmanagedFileSystems**: UnmanagedFileSystemReference[]

## AzureBlobFileSystemReference
### Properties
* **accountName**: string (Required)
* **containerName**: string (Required)
* **credentials**: AzureStorageCredentialsInfo (Required)
* **mountOptions**: string
* **relativeMountPath**: string (Required)

## AzureStorageCredentialsInfo
### Properties
* **accountKey**: string
* **accountKeySecretReference**: KeyVaultSecretReference

## KeyVaultSecretReference
### Properties
* **secretUrl**: string (Required)
* **sourceVault**: ResourceId (Required)

## ResourceId
### Properties
* **id**: string (Required)

## AzureFileShareReference
### Properties
* **accountName**: string (Required)
* **azureFileUrl**: string (Required)
* **credentials**: AzureStorageCredentialsInfo (Required)
* **directoryMode**: string
* **fileMode**: string
* **relativeMountPath**: string (Required)

## FileServerReference
### Properties
* **fileServer**: ResourceId (Required)
* **mountOptions**: string
* **relativeMountPath**: string (Required)
* **sourceDirectory**: string

## UnmanagedFileSystemReference
### Properties
* **mountCommand**: string (Required)
* **relativeMountPath**: string (Required)

## PerformanceCountersSettings
### Properties
* **appInsightsReference**: AppInsightsReference (Required)

## AppInsightsReference
### Properties
* **component**: ResourceId (Required)
* **instrumentationKey**: string
* **instrumentationKeySecretReference**: KeyVaultSecretReference

## SetupTask
### Properties
* **commandLine**: string (Required)
* **environmentVariables**: EnvironmentVariable[]
* **secrets**: EnvironmentVariableWithSecretValue[]
* **stdOutErrPathPrefix**: string (Required)
* **stdOutErrPathSuffix**: string (ReadOnly)

## EnvironmentVariable
### Properties
* **name**: string (Required)
* **value**: string (Required)

## EnvironmentVariableWithSecretValue
### Properties
* **name**: string (Required)
* **value**: string
* **valueSecretReference**: KeyVaultSecretReference

## ScaleSettings
### Properties
* **autoScale**: AutoScaleSettings
* **manual**: ManualScaleSettings

## AutoScaleSettings
### Properties
* **initialNodeCount**: int
* **maximumNodeCount**: int (Required)
* **minimumNodeCount**: int (Required)

## ManualScaleSettings
### Properties
* **nodeDeallocationOption**: 'requeue' | 'terminate' | 'waitforjobcompletion'
* **targetNodeCount**: int (Required)

## UserAccountSettings
### Properties
* **adminUserName**: string (Required)
* **adminUserPassword**: string
* **adminUserSshPublicKey**: string

## VirtualMachineConfiguration
### Properties
* **imageReference**: ImageReference

## ImageReference
### Properties
* **offer**: string (Required)
* **publisher**: string (Required)
* **sku**: string (Required)
* **version**: string
* **virtualMachineImageId**: string

## JobBaseProperties
### Properties
* **caffe2Settings**: Caffe2Settings
* **caffeSettings**: CaffeSettings
* **chainerSettings**: ChainerSettings
* **cluster**: ResourceId (Required)
* **cntkSettings**: CNTKsettings
* **constraints**: JobBasePropertiesConstraints
* **containerSettings**: ContainerSettings
* **customMpiSettings**: CustomMpiSettings
* **customToolkitSettings**: CustomToolkitSettings
* **environmentVariables**: EnvironmentVariable[]
* **horovodSettings**: HorovodSettings
* **inputDirectories**: InputDirectory[]
* **jobPreparation**: JobPreparation
* **mountVolumes**: MountVolumes
* **nodeCount**: int (Required)
* **outputDirectories**: OutputDirectory[]
* **pyTorchSettings**: PyTorchSettings
* **schedulingPriority**: 'high' | 'low' | 'normal'
* **secrets**: EnvironmentVariableWithSecretValue[]
* **stdOutErrPathPrefix**: string (Required)
* **tensorFlowSettings**: TensorFlowSettings

## Caffe2Settings
### Properties
* **commandLineArgs**: string
* **pythonInterpreterPath**: string
* **pythonScriptFilePath**: string (Required)

## CaffeSettings
### Properties
* **commandLineArgs**: string
* **configFilePath**: string
* **processCount**: int
* **pythonInterpreterPath**: string
* **pythonScriptFilePath**: string

## ChainerSettings
### Properties
* **commandLineArgs**: string
* **processCount**: int
* **pythonInterpreterPath**: string
* **pythonScriptFilePath**: string (Required)

## CNTKsettings
### Properties
* **commandLineArgs**: string
* **configFilePath**: string
* **languageType**: string
* **processCount**: int
* **pythonInterpreterPath**: string
* **pythonScriptFilePath**: string

## JobBasePropertiesConstraints
### Properties
* **maxWallClockTime**: any

## ContainerSettings
### Properties
* **imageSourceRegistry**: ImageSourceRegistry (Required)
* **shmSize**: string

## ImageSourceRegistry
### Properties
* **credentials**: PrivateRegistryCredentials
* **image**: string (Required)
* **serverUrl**: string

## PrivateRegistryCredentials
### Properties
* **password**: string
* **passwordSecretReference**: KeyVaultSecretReference
* **username**: string (Required)

## CustomMpiSettings
### Properties
* **commandLine**: string (Required)
* **processCount**: int

## CustomToolkitSettings
### Properties
* **commandLine**: string

## HorovodSettings
### Properties
* **commandLineArgs**: string
* **processCount**: int
* **pythonInterpreterPath**: string
* **pythonScriptFilePath**: string (Required)

## InputDirectory
### Properties
* **id**: string (Required)
* **path**: string (Required)

## JobPreparation
### Properties
* **commandLine**: string (Required)

## OutputDirectory
### Properties
* **id**: string (Required)
* **pathPrefix**: string (Required)
* **pathSuffix**: string

## PyTorchSettings
### Properties
* **commandLineArgs**: string
* **communicationBackend**: string
* **processCount**: int
* **pythonInterpreterPath**: string
* **pythonScriptFilePath**: string (Required)

## TensorFlowSettings
### Properties
* **masterCommandLineArgs**: string
* **parameterServerCommandLineArgs**: string
* **parameterServerCount**: int
* **pythonInterpreterPath**: string
* **pythonScriptFilePath**: string (Required)
* **workerCommandLineArgs**: string
* **workerCount**: int

## FileServerBaseProperties
### Properties
* **dataDisks**: DataDisks (Required)
* **sshConfiguration**: SshConfiguration (Required)
* **subnet**: ResourceId
* **vmSize**: string (Required)

## DataDisks
### Properties
* **diskCount**: int (Required)
* **diskSizeInGB**: int (Required)
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS' (Required)

## SshConfiguration
### Properties
* **publicIPsToAllow**: string[]
* **userAccountSettings**: UserAccountSettings (Required)

