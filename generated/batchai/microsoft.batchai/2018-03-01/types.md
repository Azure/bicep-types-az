# Microsoft.BatchAI @ 2018-03-01

## Resource Microsoft.BatchAI/clusters@2018-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ClusterBaseProperties](#clusterbaseproperties)
* **tags**: [ClusterCreateParametersTags](#clustercreateparameterstags)
* **type**: 'Microsoft.BatchAI/clusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.BatchAI/fileServers@2018-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FileServerBaseProperties](#fileserverbaseproperties)
* **tags**: [FileServerCreateParametersTags](#fileservercreateparameterstags)
* **type**: 'Microsoft.BatchAI/fileServers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.BatchAI/jobs@2018-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [JobBaseProperties](#jobbaseproperties)
* **tags**: [JobCreateParametersTags](#jobcreateparameterstags)
* **type**: 'Microsoft.BatchAI/jobs' (ReadOnly, DeployTimeConstant)

## ClusterBaseProperties
### Properties
* **allocationState**: 'resizing' | 'steady' (ReadOnly)
* **allocationStateTransitionTime**: string (ReadOnly)
* **creationTime**: string (ReadOnly)
* **currentNodeCount**: int (ReadOnly)
* **errors**: [BatchAIError](#batchaierror)[] (ReadOnly)
* **nodeSetup**: [NodeSetup](#nodesetup)
* **nodeStateCounts**: [NodeStateCounts](#nodestatecounts) (ReadOnly)
* **provisioningState**: 'creating' | 'deleting' | 'failed' | 'succeeded' (ReadOnly)
* **provisioningStateTransitionTime**: string (ReadOnly)
* **scaleSettings**: [ScaleSettings](#scalesettings)
* **subnet**: [ResourceId](#resourceid)
* **userAccountSettings**: [UserAccountSettings](#useraccountsettings) (Required)
* **virtualMachineConfiguration**: [VirtualMachineConfiguration](#virtualmachineconfiguration)
* **vmPriority**: 'dedicated' | 'lowpriority'
* **vmSize**: string (Required)

## BatchAIError
### Properties
* **code**: string (ReadOnly)
* **details**: [NameValuePair](#namevaluepair)[] (ReadOnly)
* **message**: string (ReadOnly)

## NameValuePair
### Properties
* **name**: string (ReadOnly)
* **value**: string (ReadOnly)

## NodeSetup
### Properties
* **mountVolumes**: [MountVolumes](#mountvolumes)
* **performanceCountersSettings**: [PerformanceCountersSettings](#performancecounterssettings)
* **setupTask**: [SetupTask](#setuptask)

## MountVolumes
### Properties
* **azureBlobFileSystems**: [AzureBlobFileSystemReference](#azureblobfilesystemreference)[]
* **azureFileShares**: [AzureFileShareReference](#azurefilesharereference)[]
* **fileServers**: [FileServerReference](#fileserverreference)[]
* **unmanagedFileSystems**: [UnmanagedFileSystemReference](#unmanagedfilesystemreference)[]

## AzureBlobFileSystemReference
### Properties
* **accountName**: string (Required)
* **containerName**: string (Required)
* **credentials**: [AzureStorageCredentialsInfo](#azurestoragecredentialsinfo) (Required)
* **mountOptions**: string
* **relativeMountPath**: string (Required)

## AzureStorageCredentialsInfo
### Properties
* **accountKey**: string
* **accountKeySecretReference**: [KeyVaultSecretReference](#keyvaultsecretreference)

## KeyVaultSecretReference
### Properties
* **secretUrl**: string (Required)
* **sourceVault**: [ResourceId](#resourceid) (Required)

## ResourceId
### Properties
* **id**: string (Required)

## AzureFileShareReference
### Properties
* **accountName**: string (Required)
* **azureFileUrl**: string (Required)
* **credentials**: [AzureStorageCredentialsInfo](#azurestoragecredentialsinfo) (Required)
* **directoryMode**: string
* **fileMode**: string
* **relativeMountPath**: string (Required)

## FileServerReference
### Properties
* **fileServer**: [ResourceId](#resourceid) (Required)
* **mountOptions**: string
* **relativeMountPath**: string (Required)
* **sourceDirectory**: string

## UnmanagedFileSystemReference
### Properties
* **mountCommand**: string (Required)
* **relativeMountPath**: string (Required)

## PerformanceCountersSettings
### Properties
* **appInsightsReference**: [AppInsightsReference](#appinsightsreference) (Required)

## AppInsightsReference
### Properties
* **component**: [ResourceId](#resourceid) (Required)
* **instrumentationKey**: string
* **instrumentationKeySecretReference**: [KeyVaultSecretReference](#keyvaultsecretreference)

## SetupTask
### Properties
* **commandLine**: string (Required)
* **environmentVariables**: [EnvironmentVariable](#environmentvariable)[]
* **runElevated**: bool
* **secrets**: [EnvironmentVariableWithSecretValue](#environmentvariablewithsecretvalue)[]
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
* **valueSecretReference**: [KeyVaultSecretReference](#keyvaultsecretreference)

## NodeStateCounts
### Properties
* **idleNodeCount**: int (ReadOnly)
* **leavingNodeCount**: int (ReadOnly)
* **preparingNodeCount**: int (ReadOnly)
* **runningNodeCount**: int (ReadOnly)
* **unusableNodeCount**: int (ReadOnly)

## ScaleSettings
### Properties
* **autoScale**: [AutoScaleSettings](#autoscalesettings)
* **manual**: [ManualScaleSettings](#manualscalesettings)

## AutoScaleSettings
### Properties
* **initialNodeCount**: int
* **maximumNodeCount**: int (Required)
* **minimumNodeCount**: int (Required)

## ManualScaleSettings
### Properties
* **nodeDeallocationOption**: 'requeue' | 'terminate' | 'unknown' | 'waitforjobcompletion'
* **targetNodeCount**: int (Required)

## UserAccountSettings
### Properties
* **adminUserName**: string (Required)
* **adminUserPassword**: string
* **adminUserSshPublicKey**: string

## VirtualMachineConfiguration
### Properties
* **imageReference**: [ImageReference](#imagereference)

## ImageReference
### Properties
* **offer**: string (Required)
* **publisher**: string (Required)
* **sku**: string (Required)
* **version**: string
* **virtualMachineImageId**: string

## ClusterCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FileServerBaseProperties
### Properties
* **creationTime**: string (ReadOnly)
* **dataDisks**: [DataDisks](#datadisks) (Required)
* **mountSettings**: [MountSettings](#mountsettings) (ReadOnly)
* **provisioningState**: 'creating' | 'deleting' | 'failed' | 'succeeded' | 'updating' (ReadOnly)
* **provisioningStateTransitionTime**: string (ReadOnly)
* **sshConfiguration**: [SshConfiguration](#sshconfiguration) (Required)
* **subnet**: [ResourceId](#resourceid)
* **vmSize**: string (Required)

## DataDisks
### Properties
* **cachingType**: 'none' | 'readonly' | 'readwrite'
* **diskCount**: int (Required)
* **diskSizeInGB**: int (Required)
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS' (Required)

## MountSettings
### Properties
* **fileServerInternalIP**: string (ReadOnly)
* **fileServerPublicIP**: string (ReadOnly)
* **fileServerType**: 'glusterfs' | 'nfs' (ReadOnly)
* **mountPoint**: string (ReadOnly)

## SshConfiguration
### Properties
* **publicIPsToAllow**: string[]
* **userAccountSettings**: [UserAccountSettings](#useraccountsettings) (Required)

## FileServerCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobBaseProperties
### Properties
* **caffe2Settings**: [Caffe2Settings](#caffe2settings) (WriteOnly)
* **caffeSettings**: [CaffeSettings](#caffesettings)
* **chainerSettings**: [ChainerSettings](#chainersettings)
* **cluster**: [ResourceId](#resourceid) (Required)
* **cntkSettings**: [CNTKsettings](#cntksettings)
* **constraints**: [JobBasePropertiesConstraints](#jobbasepropertiesconstraints)
* **containerSettings**: [ContainerSettings](#containersettings)
* **creationTime**: string (ReadOnly)
* **customToolkitSettings**: [CustomToolkitSettings](#customtoolkitsettings)
* **environmentVariables**: [EnvironmentVariable](#environmentvariable)[]
* **executionInfo**: [JobPropertiesExecutionInfo](#jobpropertiesexecutioninfo) (ReadOnly)
* **executionState**: 'failed' | 'queued' | 'running' | 'succeeded' | 'terminating' (ReadOnly)
* **executionStateTransitionTime**: string (ReadOnly)
* **experimentName**: string
* **inputDirectories**: [InputDirectory](#inputdirectory)[]
* **jobOutputDirectoryPathSegment**: string (ReadOnly)
* **jobPreparation**: [JobPreparation](#jobpreparation)
* **mountVolumes**: [MountVolumes](#mountvolumes)
* **nodeCount**: int (Required)
* **outputDirectories**: [OutputDirectory](#outputdirectory)[]
* **priority**: int
* **provisioningState**: 'creating' | 'deleting' | 'failed' | 'succeeded' (ReadOnly)
* **provisioningStateTransitionTime**: string (ReadOnly)
* **pyTorchSettings**: [PyTorchSettings](#pytorchsettings)
* **secrets**: [EnvironmentVariableWithSecretValue](#environmentvariablewithsecretvalue)[]
* **stdOutErrPathPrefix**: string (Required)
* **tensorFlowSettings**: [TensorFlowSettings](#tensorflowsettings)
* **toolType**: 'caffe' | 'caffe2' | 'chainer' | 'cntk' | 'custom' | 'tensorflow' (ReadOnly)

## Caffe2Settings
### Properties
* **commandLineArgs**: string (WriteOnly)
* **pythonInterpreterPath**: string (WriteOnly)
* **pythonScriptFilePath**: string (Required, WriteOnly)

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
* **maxWallClockTime**: string

## ContainerSettings
### Properties
* **imageSourceRegistry**: [ImageSourceRegistry](#imagesourceregistry) (Required)

## ImageSourceRegistry
### Properties
* **credentials**: [PrivateRegistryCredentials](#privateregistrycredentials)
* **image**: string (Required)
* **serverUrl**: string

## PrivateRegistryCredentials
### Properties
* **password**: string
* **passwordSecretReference**: [KeyVaultSecretReference](#keyvaultsecretreference)
* **username**: string (Required)

## CustomToolkitSettings
### Properties
* **commandLine**: string

## JobPropertiesExecutionInfo
### Properties
* **endTime**: string (ReadOnly)
* **errors**: [BatchAIError](#batchaierror)[] (ReadOnly)
* **exitCode**: int (ReadOnly)
* **startTime**: string (ReadOnly)

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

## JobCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

