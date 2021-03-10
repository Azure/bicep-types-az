# Microsoft.BatchAI @ 2018-05-01

## Resource Microsoft.BatchAI/workspaces@2018-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkspaceProperties](#workspaceproperties) (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.BatchAI/workspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.BatchAI/workspaces/clusters@2018-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ClusterBaseProperties](#clusterbaseproperties)
* **type**: 'Microsoft.BatchAI/workspaces/clusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.BatchAI/workspaces/experiments@2018-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExperimentProperties](#experimentproperties) (ReadOnly)
* **type**: 'Microsoft.BatchAI/workspaces/experiments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.BatchAI/workspaces/experiments/jobs@2018-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [JobBaseProperties](#jobbaseproperties)
* **type**: 'Microsoft.BatchAI/workspaces/experiments/jobs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.BatchAI/workspaces/fileServers@2018-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FileServerBaseProperties](#fileserverbaseproperties)
* **type**: 'Microsoft.BatchAI/workspaces/fileServers' (ReadOnly, DeployTimeConstant)

## WorkspaceProperties
### Properties
* **creationTime**: string (ReadOnly)
* **provisioningState**: 'creating' | 'deleting' | 'failed' | 'succeeded' (ReadOnly)
* **provisioningStateTransitionTime**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **nodeDeallocationOption**: 'requeue' | 'terminate' | 'waitforjobcompletion'
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

## ExperimentProperties
### Properties
* **creationTime**: string (ReadOnly)
* **provisioningState**: 'creating' | 'deleting' | 'failed' | 'succeeded' (ReadOnly)
* **provisioningStateTransitionTime**: string (ReadOnly)

## JobBaseProperties
### Properties
* **caffe2Settings**: [Caffe2Settings](#caffe2settings)
* **caffeSettings**: [CaffeSettings](#caffesettings)
* **chainerSettings**: [ChainerSettings](#chainersettings)
* **cluster**: [ResourceId](#resourceid) (Required)
* **cntkSettings**: [CNTKsettings](#cntksettings)
* **constraints**: [schemas:31_constraints](#schemas31constraints)
* **containerSettings**: [ContainerSettings](#containersettings)
* **creationTime**: string (ReadOnly)
* **customMpiSettings**: [CustomMpiSettings](#custommpisettings)
* **customToolkitSettings**: [CustomToolkitSettings](#customtoolkitsettings)
* **environmentVariables**: [EnvironmentVariable](#environmentvariable)[]
* **executionInfo**: [schemas:33_executionInfo](#schemas33executioninfo) (ReadOnly)
* **executionState**: 'failed' | 'queued' | 'running' | 'succeeded' | 'terminating' (ReadOnly)
* **executionStateTransitionTime**: string (ReadOnly)
* **horovodSettings**: [HorovodSettings](#horovodsettings)
* **inputDirectories**: [InputDirectory](#inputdirectory)[]
* **jobOutputDirectoryPathSegment**: string (ReadOnly)
* **jobPreparation**: [JobPreparation](#jobpreparation)
* **mountVolumes**: [MountVolumes](#mountvolumes)
* **nodeCount**: int (Required)
* **outputDirectories**: [OutputDirectory](#outputdirectory)[]
* **provisioningState**: 'creating' | 'deleting' | 'failed' | 'succeeded' (ReadOnly)
* **provisioningStateTransitionTime**: string (ReadOnly)
* **pyTorchSettings**: [PyTorchSettings](#pytorchsettings)
* **schedulingPriority**: 'high' | 'low' | 'normal'
* **secrets**: [EnvironmentVariableWithSecretValue](#environmentvariablewithsecretvalue)[]
* **stdOutErrPathPrefix**: string (Required)
* **tensorFlowSettings**: [TensorFlowSettings](#tensorflowsettings)
* **toolType**: 'caffe' | 'caffe2' | 'chainer' | 'cntk' | 'custom' | 'custommpi' | 'horovod' | 'tensorflow' (ReadOnly)

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

## schemas:31_constraints
### Properties
* **maxWallClockTime**: string

## ContainerSettings
### Properties
* **imageSourceRegistry**: [ImageSourceRegistry](#imagesourceregistry) (Required)
* **shmSize**: string

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

## CustomMpiSettings
### Properties
* **commandLine**: string (Required)
* **processCount**: int

## CustomToolkitSettings
### Properties
* **commandLine**: string

## schemas:33_executionInfo
### Properties
* **endTime**: string (ReadOnly)
* **errors**: [BatchAIError](#batchaierror)[] (ReadOnly)
* **exitCode**: int (ReadOnly)
* **startTime**: string (ReadOnly)

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
* **mountPoint**: string (ReadOnly)

## SshConfiguration
### Properties
* **publicIPsToAllow**: string[]
* **userAccountSettings**: [UserAccountSettings](#useraccountsettings) (Required)

