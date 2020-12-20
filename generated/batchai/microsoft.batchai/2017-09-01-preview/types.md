# Microsoft.BatchAI @ 2017-09-01-preview

## Resource Microsoft.BatchAI/clusters@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ClusterBaseProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.BatchAI/clusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.BatchAI/fileServers@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: FileServerBaseProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.BatchAI/fileServers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.BatchAI/jobs@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: JobBaseProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.BatchAI/jobs' (ReadOnly, DeployTimeConstant)

## Function listOutputFiles (Microsoft.BatchAI/jobs@2017-09-01-preview
* **Resource**: Microsoft.BatchAI/jobs@2017-09-01-preview
* **Output**: FileListResult

## Function listRemoteLoginInformation (Microsoft.BatchAI/clusters@2017-09-01-preview
* **Resource**: Microsoft.BatchAI/clusters@2017-09-01-preview
* **Output**: RemoteLoginInformationListResult

## Function listRemoteLoginInformation (Microsoft.BatchAI/jobs@2017-09-01-preview
* **Resource**: Microsoft.BatchAI/jobs@2017-09-01-preview
* **Output**: RemoteLoginInformationListResult

## ClusterBaseProperties
### Properties
* **allocationState**: 'resizing' | 'steady' (ReadOnly)
* **allocationStateTransitionTime**: string (ReadOnly)
* **creationTime**: string (ReadOnly)
* **currentNodeCount**: int (ReadOnly)
* **errors**: BatchAIError[] (ReadOnly)
* **nodeSetup**: NodeSetup
* **nodeStateCounts**: NodeStateCounts (ReadOnly)
* **provisioningState**: 'creating' | 'deleting' | 'failed' | 'succeeded' (ReadOnly)
* **provisioningStateTransitionTime**: string (ReadOnly)
* **scaleSettings**: ScaleSettings
* **subnet**: ResourceId
* **userAccountSettings**: UserAccountSettings (Required)
* **virtualMachineConfiguration**: VirtualMachineConfiguration
* **vmPriority**: 'dedicated' | 'lowpriority'
* **vmSize**: string (Required)

## BatchAIError
### Properties
* **code**: string (ReadOnly)
* **details**: NameValuePair[] (ReadOnly)
* **message**: string (ReadOnly)

## NameValuePair
### Properties
* **name**: string (ReadOnly)
* **value**: string (ReadOnly)

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

## NodeStateCounts
### Properties
* **idleNodeCount**: int (ReadOnly)
* **leavingNodeCount**: int (ReadOnly)
* **preparingNodeCount**: int (ReadOnly)
* **runningNodeCount**: int (ReadOnly)
* **unusableNodeCount**: int (ReadOnly)

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
* **nodeDeallocationOption**: 'requeue' | 'terminate' | 'unknown' | 'waitforjobcompletion'
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FileServerBaseProperties
### Properties
* **creationTime**: string (ReadOnly)
* **dataDisks**: DataDisks (Required)
* **mountSettings**: MountSettings (ReadOnly)
* **provisioningState**: 'creating' | 'deleting' | 'failed' | 'succeeded' | 'updating' (ReadOnly)
* **provisioningStateTransitionTime**: string (ReadOnly)
* **sshConfiguration**: SshConfiguration (Required)
* **subnet**: ResourceId
* **vmSize**: string (Required)

## DataDisks
### Properties
* **cachingType**: 'none' | 'readonly' | 'readwrite' (ReadOnly)
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
* **userAccountSettings**: UserAccountSettings (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobBaseProperties
### Properties
* **caffe2Settings**: Caffe2Settings (WriteOnly)
* **caffeSettings**: CaffeSettings
* **chainerSettings**: ChainerSettings
* **cluster**: ResourceId (Required)
* **cntkSettings**: CNTKsettings
* **constraints**: schemas:27_constraints
* **containerSettings**: ContainerSettings
* **creationTime**: string (ReadOnly)
* **customToolkitSettings**: CustomToolkitSettings
* **environmentVariables**: EnvironmentSetting[]
* **executionInfo**: schemas:29_executionInfo (ReadOnly)
* **executionState**: 'failed' | 'queued' | 'running' | 'succeeded' | 'terminating' (ReadOnly)
* **executionStateTransitionTime**: string (ReadOnly)
* **experimentName**: string
* **inputDirectories**: InputDirectory[]
* **jobPreparation**: JobPreparation
* **nodeCount**: int (Required)
* **outputDirectories**: OutputDirectory[]
* **priority**: int
* **provisioningState**: 'creating' | 'deleting' | 'failed' | 'succeeded' (ReadOnly)
* **provisioningStateTransitionTime**: string (ReadOnly)
* **stdOutErrPathPrefix**: string (Required)
* **tensorFlowSettings**: TensorFlowSettings
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

## schemas:27_constraints
### Properties
* **maxWallClockTime**: string

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

## schemas:29_executionInfo
### Properties
* **endTime**: string (ReadOnly)
* **errors**: BatchAIError[] (ReadOnly)
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

## TensorFlowSettings
### Properties
* **masterCommandLineArgs**: string (Required)
* **parameterServerCommandLineArgs**: string
* **parameterServerCount**: int
* **pythonInterpreterPath**: string
* **pythonScriptFilePath**: string (Required)
* **workerCommandLineArgs**: string
* **workerCount**: int

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FileListResult
### Properties
* **nextLink**: string (ReadOnly)
* **value**: File[] (ReadOnly)

## File
### Properties
* **downloadUrl**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: FileProperties (ReadOnly)

## FileProperties
### Properties
* **contentLength**: int (ReadOnly)
* **lastModified**: string (ReadOnly)

## RemoteLoginInformationListResult
### Properties
* **nextLink**: string (ReadOnly)
* **value**: RemoteLoginInformation[] (ReadOnly)

## RemoteLoginInformation
### Properties
* **ipAddress**: string (ReadOnly)
* **nodeId**: string (ReadOnly)
* **port**: int (ReadOnly)

