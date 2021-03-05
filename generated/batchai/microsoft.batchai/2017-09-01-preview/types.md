# Microsoft.BatchAI @ 2017-09-01-preview

## Resource Microsoft.BatchAI/clusters@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ClusterBaseProperties
* **tags**: ClusterCreateParametersTags
* **type**: 'Microsoft.BatchAI/clusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.BatchAI/fileServers@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: FileServerBaseProperties
* **tags**: FileServerCreateParametersTags
* **type**: 'Microsoft.BatchAI/fileServers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.BatchAI/jobs@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: JobBaseProperties
* **tags**: JobCreateParametersTags
* **type**: 'Microsoft.BatchAI/jobs' (ReadOnly, DeployTimeConstant)

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

## SetupTask
### Properties
* **commandLine**: string (Required)
* **environmentVariables**: EnvironmentSetting[]
* **runElevated**: bool
* **stdOutErrPathPrefix**: string (Required)

## EnvironmentSetting
### Properties
* **name**: string (Required)
* **value**: string

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

## ClusterCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## FileServerCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobBaseProperties
### Properties
* **caffeSettings**: CaffeSettings
* **chainerSettings**: ChainerSettings
* **cluster**: ResourceId (Required)
* **cntkSettings**: CNTKsettings
* **constraints**: JobBasePropertiesConstraints
* **containerSettings**: ContainerSettings
* **customToolkitSettings**: CustomToolkitSettings
* **environmentVariables**: EnvironmentSetting[]
* **experimentName**: string
* **inputDirectories**: InputDirectory[]
* **jobPreparation**: JobPreparation
* **nodeCount**: int (Required)
* **outputDirectories**: OutputDirectory[]
* **priority**: int
* **stdOutErrPathPrefix**: string (Required)
* **tensorFlowSettings**: TensorFlowSettings

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

## CustomToolkitSettings
### Properties
* **commandLine**: string

## InputDirectory
### Properties
* **id**: string (Required)
* **path**: string (Required)

## JobPreparation
### Properties
* **commandLine**: string (Required)

## OutputDirectory
### Properties
* **createNew**: bool
* **id**: string (Required)
* **pathPrefix**: string (Required)
* **pathSuffix**: string
* **type**: 'custom' | 'logs' | 'model' | 'summary'

## TensorFlowSettings
### Properties
* **masterCommandLineArgs**: string (Required)
* **parameterServerCommandLineArgs**: string
* **parameterServerCount**: int
* **pythonInterpreterPath**: string
* **pythonScriptFilePath**: string (Required)
* **workerCommandLineArgs**: string
* **workerCount**: int

## JobCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

