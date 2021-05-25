# Microsoft.BatchAI @ 2017-09-01-preview

## Resource Microsoft.BatchAI/clusters@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterBaseProperties](#clusterbaseproperties): Job specific properties.
* **tags**: [ClusterCreateParametersTags](#clustercreateparameterstags): The tags of the resource
* **type**: 'Microsoft.BatchAI/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.BatchAI/fileServers@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FileServerBaseProperties](#fileserverbaseproperties): File server specific properties.
* **tags**: [FileServerCreateParametersTags](#fileservercreateparameterstags): The tags of the resource
* **type**: 'Microsoft.BatchAI/fileServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.BatchAI/jobs@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobBaseProperties](#jobbaseproperties): Job specific properties.
* **tags**: [JobCreateParametersTags](#jobcreateparameterstags): The tags of the resource
* **type**: 'Microsoft.BatchAI/jobs' (ReadOnly, DeployTimeConstant): The resource type

## ClusterBaseProperties
### Properties
* **allocationState**: 'resizing' | 'steady' (ReadOnly): Possible values are: steady and resizing. steady state indicates that the cluster is not resizing. There are no changes to the number of compute nodes in the cluster in progress. A cluster enters this state when it is created and when no operations are being performed on the cluster to change the number of compute nodes. resizing state indicates that the cluster is resizing; that is, compute nodes are being added to or removed from the cluster.
* **allocationStateTransitionTime**: string (ReadOnly): The time at which the cluster entered its current allocation state.
* **creationTime**: string (ReadOnly): The creation time of the cluster.
* **currentNodeCount**: int (ReadOnly): The number of compute nodes currently assigned to the cluster.
* **errors**: [BatchAIError](#batchaierror)[] (ReadOnly): This element contains all the errors encountered by various compute nodes during node setup.
* **nodeSetup**: [NodeSetup](#nodesetup): Use this to prepare the VM. NOTE: The volumes specified in mountVolumes are mounted first and then the setupTask is run. Therefore the setup task can use local mountPaths in its execution.
* **nodeStateCounts**: [NodeStateCounts](#nodestatecounts) (ReadOnly): Counts of various compute node states on the cluster.
* **provisioningState**: 'creating' | 'deleting' | 'failed' | 'succeeded' (ReadOnly): Possible value are: creating - Specifies that the cluster is being created. succeeded - Specifies that the cluster has been created successfully. failed - Specifies that the cluster creation has failed. deleting - Specifies that the cluster is being deleted.
* **provisioningStateTransitionTime**: string (ReadOnly): The provisioning state transition time of the cluster.
* **scaleSettings**: [ScaleSettings](#scalesettings): At least one of manual or autoScale settings must be specified. Only one of manual or autoScale settings can be specified. If autoScale settings are specified, the system automatically scales the cluster up and down (within the supplied limits) based on the pending jobs on the cluster.
* **subnet**: [ResourceId](#resourceid): Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
* **userAccountSettings**: [UserAccountSettings](#useraccountsettings) (Required): Settings for user account that gets created on each on the nodes of a cluster.
* **virtualMachineConfiguration**: [VirtualMachineConfiguration](#virtualmachineconfiguration): Settings for OS image.
* **vmPriority**: 'dedicated' | 'lowpriority': Default is dedicated.
* **vmSize**: string (Required): All virtual machines in a cluster are the same size. For information about available VM sizes for clusters using images from the Virtual Machines Marketplace (see Sizes for Virtual Machines (Linux) or Sizes for Virtual Machines (Windows). Batch AI service supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).

## BatchAIError
### Properties
* **code**: string (ReadOnly): An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
* **details**: [NameValuePair](#namevaluepair)[] (ReadOnly): A list of additional details about the error.
* **message**: string (ReadOnly): A message describing the error, intended to be suitable for display in a user interface.

## NameValuePair
### Properties
* **name**: string (ReadOnly): The name in the name-value pair.
* **value**: string (ReadOnly): The value in the name-value pair.

## NodeSetup
### Properties
* **mountVolumes**: [MountVolumes](#mountvolumes): Details of volumes to mount on the cluster.
* **setupTask**: [SetupTask](#setuptask): Specifies a setup task which can be used to customize the compute nodes of the cluster.

## MountVolumes
### Properties
* **azureBlobFileSystems**: [AzureBlobFileSystemReference](#azureblobfilesystemreference)[]: References to Azure Blob FUSE that are to be mounted to the cluster nodes.
* **azureFileShares**: [AzureFileShareReference](#azurefilesharereference)[]: References to Azure File Shares that are to be mounted to the cluster nodes.
* **fileServers**: [FileServerReference](#fileserverreference)[]: References to a list of file servers that are mounted to the cluster node.
* **unmanagedFileSystems**: [UnmanagedFileSystemReference](#unmanagedfilesystemreference)[]: References to a list of file servers that are mounted to the cluster node.

## AzureBlobFileSystemReference
### Properties
* **accountName**: string (Required): Name of the Azure Blob Storage account.
* **containerName**: string (Required): Name of the Azure Blob Storage container to mount on the cluster.
* **credentials**: [AzureStorageCredentialsInfo](#azurestoragecredentialsinfo) (Required): Credentials to access Azure File Share.
* **mountOptions**: string: Specifies the various mount options that can be used to configure Blob file system.
* **relativeMountPath**: string (Required): Note that all blob file systems will be mounted under $AZ_BATCHAI_MOUNT_ROOT location.

## AzureStorageCredentialsInfo
### Properties
* **accountKey**: string: One of accountKey or accountKeySecretReference must be specified.
* **accountKeySecretReference**: [KeyVaultSecretReference](#keyvaultsecretreference): Describes a reference to Key Vault Secret.

## KeyVaultSecretReference
### Properties
* **secretUrl**: string (Required): The URL referencing a secret in a Key Vault.
* **sourceVault**: [ResourceId](#resourceid) (Required): Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.

## ResourceId
### Properties
* **id**: string (Required): The ID of the resource

## AzureFileShareReference
### Properties
* **accountName**: string (Required): Name of the storage account.
* **azureFileUrl**: string (Required): URL to access the Azure File.
* **credentials**: [AzureStorageCredentialsInfo](#azurestoragecredentialsinfo) (Required): Credentials to access Azure File Share.
* **directoryMode**: string: Default value is 0777. Valid only if OS is linux.
* **fileMode**: string: Default value is 0777. Valid only if OS is linux.
* **relativeMountPath**: string (Required): Note that all file shares will be mounted under $AZ_BATCHAI_MOUNT_ROOT location.

## FileServerReference
### Properties
* **fileServer**: [ResourceId](#resourceid) (Required): Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
* **mountOptions**: string: Specifies the mount options for File Server.
* **relativeMountPath**: string (Required): Note that all file shares will be mounted under $AZ_BATCHAI_MOUNT_ROOT location.
* **sourceDirectory**: string: If this property is not specified, the entire File Server will be mounted.

## UnmanagedFileSystemReference
### Properties
* **mountCommand**: string (Required): Command used to mount the unmanaged file system.
* **relativeMountPath**: string (Required): Note that all file shares will be mounted under $AZ_BATCHAI_MOUNT_ROOT location.

## SetupTask
### Properties
* **commandLine**: string (Required): Command Line to start Setup process.
* **environmentVariables**: [EnvironmentSetting](#environmentsetting)[]: Collection of environment settings.
* **runElevated**: bool: Specifies whether to run the setup task in elevated mode. The default value is false.
* **stdOutErrPathPrefix**: string (Required): The path where the Batch AI service will upload the stdout and stderror of setup task.

## EnvironmentSetting
### Properties
* **name**: string (Required): The name of the environment variable.
* **value**: string: The value of the environment variable.

## NodeStateCounts
### Properties
* **idleNodeCount**: int (ReadOnly): Number of compute nodes in idle state.
* **leavingNodeCount**: int (ReadOnly): Number of compute nodes which are leaving the cluster.
* **preparingNodeCount**: int (ReadOnly): Number of compute nodes which are being prepared.
* **runningNodeCount**: int (ReadOnly): Number of compute nodes which are running jobs.
* **unusableNodeCount**: int (ReadOnly): Number of compute nodes which are unusable.

## ScaleSettings
### Properties
* **autoScale**: [AutoScaleSettings](#autoscalesettings): The system automatically scales the cluster up and down (within minimumNodeCount and maximumNodeCount) based on the pending and running jobs on the cluster.
* **manual**: [ManualScaleSettings](#manualscalesettings): Manual scale settings for the cluster.

## AutoScaleSettings
### Properties
* **initialNodeCount**: int: Specifies the number of compute nodes to allocate on cluster creation. Note that this value is used only during cluster creation.
* **maximumNodeCount**: int (Required): Specifies the maximum number of compute nodes the cluster can have.
* **minimumNodeCount**: int (Required): Specifies the minimum number of compute nodes the cluster can have.

## ManualScaleSettings
### Properties
* **nodeDeallocationOption**: 'requeue' | 'terminate' | 'unknown' | 'waitforjobcompletion': Possible values are: requeue - Terminate running jobs and requeue them. The jobs will run again. Remove compute nodes as soon as jobs have been terminated. terminate - Terminate running jobs. The jobs will not run again. Remove compute nodes as soon as jobs have been terminated. jobcompletion - Allow currently running jobs to complete. Schedule no new jobs while waiting. Remove compute nodes when all jobs have completed. The default value is requeue.
* **targetNodeCount**: int (Required): Default is 0. If autoScaleSettings are not specified, then the Cluster starts with this target.

## UserAccountSettings
### Properties
* **adminUserName**: string (Required): Specifies the name of the administrator account.
* **adminUserPassword**: string: Admin user Password (linux only). This does not get returned in a GET response body.
* **adminUserSshPublicKey**: string: SSH public keys used to authenticate with linux based VMs. This does not get returned in a GET response body.

## VirtualMachineConfiguration
### Properties
* **imageReference**: [ImageReference](#imagereference): The image reference.

## ImageReference
### Properties
* **offer**: string (Required): Offer of the image.
* **publisher**: string (Required): Publisher of the image.
* **sku**: string (Required): SKU of the image.
* **version**: string: Version of the image

## ClusterCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FileServerBaseProperties
### Properties
* **creationTime**: string (ReadOnly): Time when the FileServer was created.
* **dataDisks**: [DataDisks](#datadisks) (Required): Settings for the data disk which would be created for the File Server.
* **mountSettings**: [MountSettings](#mountsettings) (ReadOnly): Details of the File Server.
* **provisioningState**: 'creating' | 'deleting' | 'failed' | 'succeeded' | 'updating' (ReadOnly): Possible values: creating - The File Server is getting created. updating - The File Server creation has been accepted and it is getting updated. deleting - The user has requested that the File Server be deleted, and it is in the process of being deleted. failed - The File Server creation has failed with the specified errorCode. Details about the error code are specified in the message field. succeeded - The File Server creation has succeeded.
* **provisioningStateTransitionTime**: string (ReadOnly): Time when the status was changed.
* **sshConfiguration**: [SshConfiguration](#sshconfiguration) (Required): SSH configuration settings for the VM
* **subnet**: [ResourceId](#resourceid): Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
* **vmSize**: string (Required): For information about available VM sizes for File Server from the Virtual Machines Marketplace, see Sizes for Virtual Machines (Linux).

## DataDisks
### Properties
* **cachingType**: 'none' | 'readonly' | 'readwrite' (ReadOnly): None, ReadOnly, ReadWrite. Default value is None. This property is not patchable.
* **diskCount**: int (Required): Number of data disks to be attached to the VM. RAID level 0 will be applied in the case of multiple disks.
* **diskSizeInGB**: int (Required): Initial disk size in GB for blank data disks, and the new desired size for resizing existing data disks.
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS' (Required): Specifies the type of storage account to be used on the disk. Possible values are: Standard_LRS or Premium_LRS.

## MountSettings
### Properties
* **fileServerInternalIP**: string (ReadOnly): Internal subnet IP which can be used to access the file Server from within the subnet.
* **fileServerPublicIP**: string (ReadOnly): Public IP of the File Server VM.
* **fileServerType**: 'glusterfs' | 'nfs' (ReadOnly): Type of the fileserver e.g. nfs, glusterfs etc.
* **mountPoint**: string (ReadOnly): Path where the NFS is mounted on the Server.

## SshConfiguration
### Properties
* **publicIPsToAllow**: string[]: Default value is '*' can be used to match all source IPs. Maximum number of publicIPs that can be specified are 400.
* **userAccountSettings**: [UserAccountSettings](#useraccountsettings) (Required): Settings for user account that gets created on each on the nodes of a cluster.

## FileServerCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobBaseProperties
### Properties
* **caffe2Settings**: [Caffe2Settings](#caffe2settings) (WriteOnly)
* **caffeSettings**: [CaffeSettings](#caffesettings): Specifies the settings for Caffe job.
* **chainerSettings**: [ChainerSettings](#chainersettings): Specifies the settings for Chainer job.
* **cluster**: [ResourceId](#resourceid) (Required): Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
* **cntkSettings**: [CNTKsettings](#cntksettings): Specifies the settings for CNTK (aka Microsoft Cognitive Toolkit) job.
* **constraints**: [JobBasePropertiesConstraints](#jobbasepropertiesconstraints): Constraints associated with the Job.
* **containerSettings**: [ContainerSettings](#containersettings): Settings for the container to be downloaded.
* **creationTime**: string (ReadOnly): The creation time of the job.
* **customToolkitSettings**: [CustomToolkitSettings](#customtoolkitsettings): Specifies the settings for a custom tool kit job.
* **environmentVariables**: [EnvironmentSetting](#environmentsetting)[]: Batch AI services sets the following environment variables for all jobs: AZ_BATCHAI_INPUT_id, AZ_BATCHAI_OUTPUT_id, AZ_BATCHAI_NUM_GPUS_PER_NODE, For distributed TensorFlow jobs, following additional environment variables are set by the Batch AI Service: AZ_BATCHAI_PS_HOSTS, AZ_BATCHAI_WORKER_HOSTS.
* **executionInfo**: [JobPropertiesExecutionInfo](#jobpropertiesexecutioninfo) (ReadOnly): Contains information about the execution of a job in the Azure Batch service.
* **executionState**: 'failed' | 'queued' | 'running' | 'succeeded' | 'terminating' (ReadOnly): The current state of the job. Possible values are: queued - The job is queued and able to run. A job enters this state when it is created, or when it is awaiting a retry after a failed run. running - The job is running on a compute cluster. This includes job-level preparation such as downloading resource files or set up container specified on the job - it does not necessarily mean that the job command line has started executing. terminating - The job is terminated by the user, the terminate operation is in progress. succeeded - The job has completed running successfully and exited with exit code 0. failed - The job has finished unsuccessfully (failed with a non-zero exit code) and has exhausted its retry limit. A job is also marked as failed if an error occurred launching the job.
* **executionStateTransitionTime**: string (ReadOnly): The time at which the job entered its current execution state.
* **experimentName**: string: Describe the experiment information of the job
* **inputDirectories**: [InputDirectory](#inputdirectory)[]: Specifies the list of input directories for the Job.
* **jobPreparation**: [JobPreparation](#jobpreparation): Specifies the settings for job preparation.
* **nodeCount**: int (Required): The job will be gang scheduled on that many compute nodes
* **outputDirectories**: [OutputDirectory](#outputdirectory)[]: Specifies the list of output directories where the models will be created. .
* **priority**: int: Priority associated with the job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0.
* **provisioningState**: 'creating' | 'deleting' | 'failed' | 'succeeded' (ReadOnly): Possible value are: creating - Specifies that the cluster is being created. succeeded - Specifies that the cluster has been created successfully. failed - Specifies that the cluster creation has failed. deleting - Specifies that the cluster is being deleted.
* **provisioningStateTransitionTime**: string (ReadOnly): The time at which the job entered its current provisioning state.
* **stdOutErrPathPrefix**: string (Required): The path where the Batch AI service will upload stdout and stderror of the job.
* **tensorFlowSettings**: [TensorFlowSettings](#tensorflowsettings): Specifies the settings for TensorFlow job.
* **toolType**: 'caffe' | 'caffe2' | 'chainer' | 'cntk' | 'custom' | 'tensorflow' (ReadOnly): The toolkit type of this job.

## Caffe2Settings
### Properties
* **commandLineArgs**: string (WriteOnly)
* **pythonInterpreterPath**: string (WriteOnly)
* **pythonScriptFilePath**: string (Required, WriteOnly)

## CaffeSettings
### Properties
* **commandLineArgs**: string: Command line arguments that needs to be passed to the Caffe job.
* **configFilePath**: string: This property cannot be specified if pythonScriptFilePath is specified.
* **processCount**: int: The default value for this property is equal to nodeCount property
* **pythonInterpreterPath**: string: This property can be specified only if the pythonScriptFilePath is specified.
* **pythonScriptFilePath**: string: This property cannot be specified if configFilePath is specified.

## ChainerSettings
### Properties
* **commandLineArgs**: string: Command line arguments that needs to be passed to the python script
* **processCount**: int: The default value for this property is equal to nodeCount property
* **pythonInterpreterPath**: string: The path to python interpreter.
* **pythonScriptFilePath**: string (Required): The path and file name of the python script to execute the job.

## CNTKsettings
### Properties
* **commandLineArgs**: string: Command line arguments that needs to be passed to the python script or CNTK.exe.
* **configFilePath**: string: This property can be specified only if the languageType is 'BrainScript'.
* **languageType**: string: Valid values are 'BrainScript' or 'Python'.
* **processCount**: int: The default value for this property is equal to nodeCount property
* **pythonInterpreterPath**: string: This property can be specified only if the languageType is 'Python'.
* **pythonScriptFilePath**: string: This property can be specified only if the languageType is 'Python'.

## JobBasePropertiesConstraints
### Properties
* **maxWallClockTime**: string: Default Value = 1 week.

## ContainerSettings
### Properties
* **imageSourceRegistry**: [ImageSourceRegistry](#imagesourceregistry) (Required): Details of the container image such as name, URL and credentials.

## ImageSourceRegistry
### Properties
* **credentials**: [PrivateRegistryCredentials](#privateregistrycredentials): Credentials to access a container image in a private repository.
* **image**: string (Required): The name of the image in image repository.
* **serverUrl**: string: URL for image repository.

## PrivateRegistryCredentials
### Properties
* **password**: string: One of password or passwordSecretReference must be specified.
* **passwordSecretReference**: [KeyVaultSecretReference](#keyvaultsecretreference): Describes a reference to Key Vault Secret.
* **username**: string (Required): User name to login.

## CustomToolkitSettings
### Properties
* **commandLine**: string: The command line to execute the custom toolkit Job.

## JobPropertiesExecutionInfo
### Properties
* **endTime**: string (ReadOnly): This property is only returned if the job is in completed state.
* **errors**: [BatchAIError](#batchaierror)[] (ReadOnly): Contains details of various errors encountered by the service during job execution
* **exitCode**: int (ReadOnly): This property is only returned if the job is in completed state.
* **startTime**: string (ReadOnly): 'Running' corresponds to the running state. If the job has been restarted or retried, this is the most recent time at which the job started running. This property is present only for job that are in the running or completed state.

## InputDirectory
### Properties
* **id**: string (Required): It will be available for the job as an environment variable under AZ_BATCHAI_INPUT_id. The service will also provide the following  environment variable: AZ_BATCHAI_PREV_OUTPUT_Name. The value of the variable will be populated if the job is being retried after a previous failure, otherwise it will be set to nothing.
* **path**: string (Required): The path to the input directory.

## JobPreparation
### Properties
* **commandLine**: string (Required): If containerSettings is specified on the job, this commandLine will be executed in the same container as job. Otherwise it will be executed on the node.

## OutputDirectory
### Properties
* **createNew**: bool: Default is true. If false, then the directory is not created and can be any directory path that the user specifies.
* **id**: string (Required): It will be available for the job as an environment variable under AZ_BATCHAI_OUTPUT_id.
* **pathPrefix**: string (Required): NOTE: This is an absolute path to prefix. E.g. $AZ_BATCHAI_MOUNT_ROOT/MyNFS/MyLogs.
* **pathSuffix**: string: The suffix path where the output directory will be created.
* **type**: 'custom' | 'logs' | 'model' | 'summary': Default value is Custom. The possible values are Model, Logs, Summary, and Custom. Users can use multiple enums for a single directory. Eg. outPutType='Model,Logs, Summary'

## TensorFlowSettings
### Properties
* **masterCommandLineArgs**: string (Required): Specifies the command line arguments for the master task.
* **parameterServerCommandLineArgs**: string: This property is optional for single machine training.
* **parameterServerCount**: int: If specified, the value must be less than or equal to nodeCount. If not specified, the default value is equal to 1 for distributed TensorFlow training (This property is not applicable for single machine training). This property can be specified only for distributed TensorFlow training.
* **pythonInterpreterPath**: string: The path to python interpreter.
* **pythonScriptFilePath**: string (Required): The path and file name of the python script to execute the job.
* **workerCommandLineArgs**: string: This property is optional for single machine training.
* **workerCount**: int: If specified, the value must be less than or equal to (nodeCount * numberOfGPUs per VM). If not specified, the default value is equal to nodeCount. This property can be specified only for distributed TensorFlow training

## JobCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

