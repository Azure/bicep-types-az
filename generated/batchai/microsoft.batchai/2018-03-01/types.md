# Microsoft.BatchAI @ 2018-03-01

## Resource Microsoft.BatchAI/clusters@2018-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The region in which to create the cluster.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterBaseProperties](#clusterbaseproperties): The properties of a Cluster.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The user specified tags associated with the Cluster.
* **type**: 'Microsoft.BatchAI/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.BatchAI/fileServers@2018-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The region in which to create the File Server.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FileServerBaseProperties](#fileserverbaseproperties): The properties of a file server.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The user specified tags associated with the File Server.
* **type**: 'Microsoft.BatchAI/fileServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.BatchAI/jobs@2018-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The region in which to create the job.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobBaseProperties](#jobbaseproperties): The properties of a Batch AI job.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The user specified tags associated with the job.
* **type**: 'Microsoft.BatchAI/jobs' (ReadOnly, DeployTimeConstant): The resource type

## ClusterBaseProperties
### Properties
* **allocationState**: 'resizing' | 'steady' (ReadOnly): Possible values are: steady and resizing. steady state indicates that the cluster is not resizing. There are no changes to the number of compute nodes in the cluster in progress. A cluster enters this state when it is created and when no operations are being performed on the cluster to change the number of compute nodes. resizing state indicates that the cluster is resizing; that is, compute nodes are being added to or removed from the cluster. Possible values include: 'steady', 'resizing'
* **allocationStateTransitionTime**: string (ReadOnly):
* **creationTime**: string (ReadOnly):
* **currentNodeCount**: int (ReadOnly):
* **errors**: [BatchAIError](#batchaierror)[] (ReadOnly): This element contains all the errors encountered by various compute nodes during node setup.
* **nodeSetup**: [NodeSetup](#nodesetup): Use this to prepare the VM. NOTE: The volumes specified in mountVolumes are mounted first and then the setupTask is run. Therefore the setup task can use local mountPaths in its execution.
* **nodeStateCounts**: [NodeStateCounts](#nodestatecounts) (ReadOnly): Counts of various compute node states on the cluster.
* **provisioningState**: 'creating' | 'deleting' | 'failed' | 'succeeded' (ReadOnly): Possible value are: creating - Specifies that the cluster is being created. succeeded - Specifies that the cluster has been created successfully. failed - Specifies that the cluster creation has failed. deleting - Specifies that the cluster is being deleted. Possible values include: 'creating', 'succeeded', 'failed', 'deleting'
* **provisioningStateTransitionTime**: string (ReadOnly):
* **scaleSettings**: [ScaleSettings](#scalesettings): At least one of manual or autoScale settings must be specified. Only one of manual or autoScale settings can be specified. If autoScale settings are specified, the system automatically scales the cluster up and down (within the supplied limits) based on the pending jobs on the cluster.
* **subnet**: [ResourceId](#resourceid): Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
* **userAccountSettings**: [UserAccountSettings](#useraccountsettings) (Required): Settings for user account that gets created on each on the nodes of a cluster.
* **virtualMachineConfiguration**: [VirtualMachineConfiguration](#virtualmachineconfiguration): Settings for OS image.
* **vmPriority**: 'dedicated' | 'lowpriority': Default is dedicated. Possible values include: 'dedicated', 'lowpriority'
* **vmSize**: string (Required): All virtual machines in a cluster are the same size. For information about available VM sizes for clusters using images from the Virtual Machines Marketplace (see Sizes for Virtual Machines (Linux) or Sizes for Virtual Machines (Windows). Batch AI service supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).

## BatchAIError
### Properties
* **code**: string (ReadOnly): An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
* **details**: [NameValuePair](#namevaluepair)[] (ReadOnly): A list of additional details about the error.
* **message**: string (ReadOnly): A message describing the error, intended to be suitable for display in a user interface.

## NameValuePair
### Properties
* **name**: string (ReadOnly):
* **value**: string (ReadOnly):

## NodeSetup
### Properties
* **mountVolumes**: [MountVolumes](#mountvolumes): Details of volumes to mount on the cluster.
* **performanceCountersSettings**: [PerformanceCountersSettings](#performancecounterssettings): Performance counters reporting settings.
* **setupTask**: [SetupTask](#setuptask): Specifies a setup task which can be used to customize the compute nodes of the cluster.

## MountVolumes
### Properties
* **azureBlobFileSystems**: [AzureBlobFileSystemReference](#azureblobfilesystemreference)[]: References to Azure Blob FUSE that are to be mounted to the cluster nodes.
* **azureFileShares**: [AzureFileShareReference](#azurefilesharereference)[]: References to Azure File Shares that are to be mounted to the cluster nodes.
* **fileServers**: [FileServerReference](#fileserverreference)[]:
* **unmanagedFileSystems**: [UnmanagedFileSystemReference](#unmanagedfilesystemreference)[]:

## AzureBlobFileSystemReference
### Properties
* **accountName**: string (Required):
* **containerName**: string (Required):
* **credentials**: [AzureStorageCredentialsInfo](#azurestoragecredentialsinfo) (Required): Credentials to access Azure File Share.
* **mountOptions**: string:
* **relativeMountPath**: string (Required): Note that all cluster level blob file systems will be mounted under $AZ_BATCHAI_MOUNT_ROOT location and all job level blob file systems will be mounted under $AZ_BATCHAI_JOB_MOUNT_ROOT.

## AzureStorageCredentialsInfo
### Properties
* **accountKey**: string: One of accountKey or accountKeySecretReference must be specified.
* **accountKeySecretReference**: [KeyVaultSecretReference](#keyvaultsecretreference): Describes a reference to Key Vault Secret.

## KeyVaultSecretReference
### Properties
* **secretUrl**: string (Required):
* **sourceVault**: [ResourceId](#resourceid) (Required): Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.

## ResourceId
### Properties
* **id**: string (Required): The ID of the resource

## AzureFileShareReference
### Properties
* **accountName**: string (Required):
* **azureFileUrl**: string (Required):
* **credentials**: [AzureStorageCredentialsInfo](#azurestoragecredentialsinfo) (Required): Credentials to access Azure File Share.
* **directoryMode**: string: Default value is 0777. Valid only if OS is linux.
* **fileMode**: string: Default value is 0777. Valid only if OS is linux.
* **relativeMountPath**: string (Required): Note that all cluster level file shares will be mounted under $AZ_BATCHAI_MOUNT_ROOT location and all job level file shares will be mounted under $AZ_BATCHAI_JOB_MOUNT_ROOT.

## FileServerReference
### Properties
* **fileServer**: [ResourceId](#resourceid) (Required): Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
* **mountOptions**: string:
* **relativeMountPath**: string (Required): Note that all cluster level file servers will be mounted under $AZ_BATCHAI_MOUNT_ROOT location and job level file servers will be mounted under $AZ_BATCHAI_JOB_MOUNT_ROOT.
* **sourceDirectory**: string: If this property is not specified, the entire File Server will be mounted.

## UnmanagedFileSystemReference
### Properties
* **mountCommand**: string (Required):
* **relativeMountPath**: string (Required): Note that all cluster level unmanaged file system will be mounted under $AZ_BATCHAI_MOUNT_ROOT location and job level unmanaged file system will be mounted under $AZ_BATCHAI_JOB_MOUNT_ROOT.

## PerformanceCountersSettings
### Properties
* **appInsightsReference**: [AppInsightsReference](#appinsightsreference) (Required): Specifies Azure Application Insights information for performance counters reporting.

## AppInsightsReference
### Properties
* **component**: [ResourceId](#resourceid) (Required): Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
* **instrumentationKey**: string:
* **instrumentationKeySecretReference**: [KeyVaultSecretReference](#keyvaultsecretreference): Describes a reference to Key Vault Secret.

## SetupTask
### Properties
* **commandLine**: string (Required):
* **environmentVariables**: [EnvironmentVariable](#environmentvariable)[]:
* **runElevated**: bool: Note. Non-elevated tasks are run under an account added into sudoer list and can perform sudo when required.
* **secrets**: [EnvironmentVariableWithSecretValue](#environmentvariablewithsecretvalue)[]: Server will never report values of these variables back.
* **stdOutErrPathPrefix**: string (Required): The prefix of a path where the Batch AI service will upload the stdout and stderr of the setup task.
* **stdOutErrPathSuffix**: string (ReadOnly): Batch AI creates the setup task output directories under an unique path to avoid conflicts between different clusters. You can concatenate stdOutErrPathPrefix and stdOutErrPathSuffix to get the full path to the output directory.

## EnvironmentVariable
### Properties
* **name**: string (Required):
* **value**: string (Required):

## EnvironmentVariableWithSecretValue
### Properties
* **name**: string (Required):
* **value**: string:
* **valueSecretReference**: [KeyVaultSecretReference](#keyvaultsecretreference): Describes a reference to Key Vault Secret.

## NodeStateCounts
### Properties
* **idleNodeCount**: int (ReadOnly):
* **leavingNodeCount**: int (ReadOnly):
* **preparingNodeCount**: int (ReadOnly):
* **runningNodeCount**: int (ReadOnly):
* **unusableNodeCount**: int (ReadOnly):

## ScaleSettings
### Properties
* **autoScale**: [AutoScaleSettings](#autoscalesettings): The system automatically scales the cluster up and down (within minimumNodeCount and maximumNodeCount) based on the pending and running jobs on the cluster.
* **manual**: [ManualScaleSettings](#manualscalesettings): Manual scale settings for the cluster.

## AutoScaleSettings
### Properties
* **initialNodeCount**: int:
* **maximumNodeCount**: int (Required):
* **minimumNodeCount**: int (Required):

## ManualScaleSettings
### Properties
* **nodeDeallocationOption**: 'requeue' | 'terminate' | 'unknown' | 'waitforjobcompletion': The default value is requeue. Possible values include: 'requeue', 'terminate', 'waitforjobcompletion', 'unknown'
* **targetNodeCount**: int (Required): Default is 0. If autoScaleSettings are not specified, then the Cluster starts with this target.

## UserAccountSettings
### Properties
* **adminUserName**: string (Required):
* **adminUserPassword**: string:
* **adminUserSshPublicKey**: string:

## VirtualMachineConfiguration
### Properties
* **imageReference**: [ImageReference](#imagereference): The image reference.

## ImageReference
### Properties
* **offer**: string (Required):
* **publisher**: string (Required):
* **sku**: string (Required):
* **version**: string:
* **virtualMachineImageId**: string: The virtual machine image must be in the same region and subscription as the cluster. For information about the firewall settings for the Batch node agent to communicate with the Batch service see https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration. Note, you need to provide publisher, offer and sku of the base OS image of which the custom image has been derived from.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FileServerBaseProperties
### Properties
* **creationTime**: string (ReadOnly):
* **dataDisks**: [DataDisks](#datadisks) (Required): Settings for the data disk which would be created for the File Server.
* **mountSettings**: [MountSettings](#mountsettings) (ReadOnly): Details of the File Server.
* **provisioningState**: 'creating' | 'deleting' | 'failed' | 'succeeded' | 'updating' (ReadOnly): Possible values: creating - The File Server is getting created. updating - The File Server creation has been accepted and it is getting updated. deleting - The user has requested that the File Server be deleted, and it is in the process of being deleted. failed - The File Server creation has failed with the specified errorCode. Details about the error code are specified in the message field. succeeded - The File Server creation has succeeded. Possible values include: 'creating', 'updating', 'deleting', 'succeeded', 'failed'
* **provisioningStateTransitionTime**: string (ReadOnly):
* **sshConfiguration**: [SshConfiguration](#sshconfiguration) (Required): SSH configuration settings for the VM
* **subnet**: [ResourceId](#resourceid): Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
* **vmSize**: string (Required): For information about available VM sizes for fileservers from the Virtual Machines Marketplace, see Sizes for Virtual Machines (Linux).

## DataDisks
### Properties
* **cachingType**: 'none' | 'readonly' | 'readwrite': Possible values include: 'none', 'readonly', 'readwrite'
* **diskCount**: int (Required):
* **diskSizeInGB**: int (Required):
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS' (Required): Possible values include: 'Standard_LRS', 'Premium_LRS'

## MountSettings
### Properties
* **fileServerInternalIP**: string (ReadOnly):
* **fileServerPublicIP**: string (ReadOnly):
* **fileServerType**: 'glusterfs' | 'nfs' (ReadOnly): Possible values include: 'nfs', 'glusterfs'
* **mountPoint**: string (ReadOnly):

## SshConfiguration
### Properties
* **publicIPsToAllow**: string[]: Default value is '*' can be used to match all source IPs. Maximum number of IP ranges that can be specified are 400.
* **userAccountSettings**: [UserAccountSettings](#useraccountsettings) (Required): Settings for user account that gets created on each on the nodes of a cluster.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobBaseProperties
### Properties
* **caffe2Settings**: [Caffe2Settings](#caffe2settings) (WriteOnly): Specifies the settings for Caffe2 job.
* **caffeSettings**: [CaffeSettings](#caffesettings): Specifies the settings for Caffe job.
* **chainerSettings**: [ChainerSettings](#chainersettings): Specifies the settings for Chainer job.
* **cluster**: [ResourceId](#resourceid) (Required): Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
* **cntkSettings**: [CNTKsettings](#cntksettings): Specifies the settings for CNTK (aka Microsoft Cognitive Toolkit) job.
* **constraints**: [schemas:32_constraints](#schemas32constraints): Constraints associated with the Job.
* **containerSettings**: [ContainerSettings](#containersettings): Settings for the container to be downloaded.
* **creationTime**: string (ReadOnly): The creation time of the job.
* **customToolkitSettings**: [CustomToolkitSettings](#customtoolkitsettings): Specifies the settings for a custom tool kit job.
* **environmentVariables**: [EnvironmentVariable](#environmentvariable)[]: Batch AI will setup these additional environment variables for the job.
* **executionInfo**: [schemas:34_executionInfo](#schemas34executioninfo) (ReadOnly): Contains information about the execution of a job in the Azure Batch service.
* **executionState**: 'failed' | 'queued' | 'running' | 'succeeded' | 'terminating' (ReadOnly): The current state of the job. Possible values are: queued - The job is queued and able to run. A job enters this state when it is created, or when it is awaiting a retry after a failed run. running - The job is running on a compute cluster. This includes job-level preparation such as downloading resource files or set up container specified on the job - it does not necessarily mean that the job command line has started executing. terminating - The job is terminated by the user, the terminate operation is in progress. succeeded - The job has completed running successfully and exited with exit code 0. failed - The job has finished unsuccessfully (failed with a non-zero exit code) and has exhausted its retry limit. A job is also marked as failed if an error occurred launching the job. Possible values include: 'queued', 'running', 'terminating', 'succeeded', 'failed'
* **executionStateTransitionTime**: string (ReadOnly): The time at which the job entered its current execution state.
* **experimentName**: string: Describe the experiment information of the job
* **inputDirectories**: [InputDirectory](#inputdirectory)[]:
* **jobOutputDirectoryPathSegment**: string (ReadOnly): Batch AI creates job's output directories under an unique path to avoid conflicts between jobs. This value contains a path segment generated by Batch AI to make the path unique and can be used to find the output directory on the node or mounted filesystem.
* **jobPreparation**: [JobPreparation](#jobpreparation): Specifies the settings for job preparation.
* **mountVolumes**: [MountVolumes](#mountvolumes): Details of volumes to mount on the cluster.
* **nodeCount**: int (Required): The job will be gang scheduled on that many compute nodes
* **outputDirectories**: [OutputDirectory](#outputdirectory)[]:
* **priority**: int: Priority associated with the job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0.
* **provisioningState**: 'creating' | 'deleting' | 'failed' | 'succeeded' (ReadOnly): The provisioned state of the Batch AI job. Possible values include: 'creating', 'succeeded', 'failed', 'deleting'
* **provisioningStateTransitionTime**: string (ReadOnly): The time at which the job entered its current provisioning state.
* **pyTorchSettings**: [PyTorchSettings](#pytorchsettings): Specifies the settings for pyTorch job.
* **secrets**: [EnvironmentVariableWithSecretValue](#environmentvariablewithsecretvalue)[]: Batch AI will setup these additional environment variables for the job. Server will never report values of these variables back.
* **stdOutErrPathPrefix**: string (Required): The path where the Batch AI service will upload stdout and stderror of the job.
* **tensorFlowSettings**: [TensorFlowSettings](#tensorflowsettings): Specifies the settings for TensorFlow job.
* **toolType**: 'caffe' | 'caffe2' | 'chainer' | 'cntk' | 'custom' | 'tensorflow' (ReadOnly): Possible values are: cntk, tensorflow, caffe, caffe2, chainer, pytorch, custom. Possible values include: 'cntk', 'tensorflow', 'caffe', 'caffe2', 'chainer', 'custom'

## Caffe2Settings
### Properties
* **commandLineArgs**: string (WriteOnly):
* **pythonInterpreterPath**: string (WriteOnly):
* **pythonScriptFilePath**: string (Required, WriteOnly):

## CaffeSettings
### Properties
* **commandLineArgs**: string:
* **configFilePath**: string: This property cannot be specified if pythonScriptFilePath is specified.
* **processCount**: int: The default value for this property is equal to nodeCount property
* **pythonInterpreterPath**: string: This property can be specified only if the pythonScriptFilePath is specified.
* **pythonScriptFilePath**: string: This property cannot be specified if configFilePath is specified.

## ChainerSettings
### Properties
* **commandLineArgs**: string:
* **processCount**: int: The default value for this property is equal to nodeCount property
* **pythonInterpreterPath**: string:
* **pythonScriptFilePath**: string (Required):

## CNTKsettings
### Properties
* **commandLineArgs**: string:
* **configFilePath**: string: This property can be specified only if the languageType is 'BrainScript'.
* **languageType**: string: Valid values are 'BrainScript' or 'Python'.
* **processCount**: int: The default value for this property is equal to nodeCount property
* **pythonInterpreterPath**: string: This property can be specified only if the languageType is 'Python'.
* **pythonScriptFilePath**: string: This property can be specified only if the languageType is 'Python'.

## schemas:32_constraints
### Properties
* **maxWallClockTime**: string: Default Value = 1 week.

## ContainerSettings
### Properties
* **imageSourceRegistry**: [ImageSourceRegistry](#imagesourceregistry) (Required): Details of the container image such as name, URL and credentials.

## ImageSourceRegistry
### Properties
* **credentials**: [PrivateRegistryCredentials](#privateregistrycredentials): Credentials to access a container image in a private repository.
* **image**: string (Required):
* **serverUrl**: string:

## PrivateRegistryCredentials
### Properties
* **password**: string: One of password or passwordSecretReference must be specified.
* **passwordSecretReference**: [KeyVaultSecretReference](#keyvaultsecretreference): Describes a reference to Key Vault Secret.
* **username**: string (Required):

## CustomToolkitSettings
### Properties
* **commandLine**: string:

## schemas:34_executionInfo
### Properties
* **endTime**: string (ReadOnly): This property is only returned if the job is in completed state.
* **errors**: [BatchAIError](#batchaierror)[] (ReadOnly):
* **exitCode**: int (ReadOnly): This property is only returned if the job is in completed state.
* **startTime**: string (ReadOnly): 'Running' corresponds to the running state. If the job has been restarted or retried, this is the most recent time at which the job started running. This property is present only for job that are in the running or completed state.

## InputDirectory
### Properties
* **id**: string (Required): The path of the input directory will be available as a value of an environment variable with AZ_BATCHAI_INPUT_<id> name, where <id> is the value of id attribute.
* **path**: string (Required):

## JobPreparation
### Properties
* **commandLine**: string (Required): If containerSettings is specified on the job, this commandLine will be executed in the same container as job. Otherwise it will be executed on the node.

## OutputDirectory
### Properties
* **createNew**: bool: Default is true. If false, then the directory is not created and can be any directory path that the user specifies.
* **id**: string (Required): The path of the output directory will be available as a value of an environment variable with AZ_BATCHAI_OUTPUT_<id> name, where <id> is the value of id attribute.
* **pathPrefix**: string (Required): NOTE: This is an absolute path to prefix. E.g. $AZ_BATCHAI_MOUNT_ROOT/MyNFS/MyLogs. You can find the full path to the output directory by combining pathPrefix, jobOutputDirectoryPathSegment (reported by get job) and pathSuffix.
* **pathSuffix**: string: The suffix path where the output directory will be created. E.g. models. You can find the full path to the output directory by combining pathPrefix, jobOutputDirectoryPathSegment (reported by get job) and pathSuffix.
* **type**: 'custom' | 'logs' | 'model' | 'summary': Default value is Custom. The possible values are Model, Logs, Summary, and Custom. Users can use multiple enums for a single directory. Eg. outPutType='Model,Logs, Summary'. Possible values include: 'model', 'logs', 'summary', 'custom'

## PyTorchSettings
### Properties
* **commandLineArgs**: string:
* **communicationBackend**: string: Valid values are 'TCP', 'Gloo' or 'MPI'. Not required for non-distributed jobs.
* **processCount**: int: The default value for this property is equal to nodeCount property.
* **pythonInterpreterPath**: string:
* **pythonScriptFilePath**: string (Required):

## TensorFlowSettings
### Properties
* **masterCommandLineArgs**: string:
* **parameterServerCommandLineArgs**: string: This property is optional for single machine training.
* **parameterServerCount**: int: If specified, the value must be less than or equal to nodeCount. If not specified, the default value is equal to 1 for distributed TensorFlow training (This property is not applicable for single machine training). This property can be specified only for distributed TensorFlow training.
* **pythonInterpreterPath**: string:
* **pythonScriptFilePath**: string (Required):
* **workerCommandLineArgs**: string: This property is optional for single machine training.
* **workerCount**: int: If specified, the value must be less than or equal to (nodeCount * numberOfGPUs per VM). If not specified, the default value is equal to nodeCount. This property can be specified only for distributed TensorFlow training

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

