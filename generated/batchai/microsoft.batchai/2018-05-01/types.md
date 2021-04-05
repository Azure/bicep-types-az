# Microsoft.BatchAI @ 2018-05-01

## Resource Microsoft.BatchAI/workspaces@2018-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties) (ReadOnly): Workspace specific properties.
* **tags**: [WorkspaceCreateParametersTags](#workspacecreateparameterstags): The tags of the resource
* **type**: 'Microsoft.BatchAI/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.BatchAI/workspaces/clusters@2018-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterBaseProperties](#clusterbaseproperties): Cluster properties.
* **type**: 'Microsoft.BatchAI/workspaces/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.BatchAI/workspaces/experiments@2018-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExperimentProperties](#experimentproperties) (ReadOnly): Experiment properties.
* **type**: 'Microsoft.BatchAI/workspaces/experiments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.BatchAI/workspaces/experiments/jobs@2018-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobBaseProperties](#jobbaseproperties): Job properties.
* **type**: 'Microsoft.BatchAI/workspaces/experiments/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.BatchAI/workspaces/fileServers@2018-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FileServerBaseProperties](#fileserverbaseproperties): File Server properties.
* **type**: 'Microsoft.BatchAI/workspaces/fileServers' (ReadOnly, DeployTimeConstant): The resource type

## WorkspaceProperties
### Properties
* **creationTime**: string (ReadOnly): Time when the Workspace was created.
* **provisioningState**: 'creating' | 'deleting' | 'failed' | 'succeeded' (ReadOnly): Provisioning state of the cluster. Possible value are: creating - Specifies that the cluster is being created. succeeded - Specifies that the cluster has been created successfully. failed - Specifies that the cluster creation has failed. deleting - Specifies that the cluster is being deleted.
* **provisioningStateTransitionTime**: string (ReadOnly): The time at which the workspace entered its current provisioning state.

## WorkspaceCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ClusterBaseProperties
### Properties
* **allocationState**: 'resizing' | 'steady' (ReadOnly): Allocation state of the cluster. Possible values are: steady - Indicates that the cluster is not resizing. There are no changes to the number of compute nodes in the cluster in progress. A cluster enters this state when it is created and when no operations are being performed on the cluster to change the number of compute nodes. resizing - Indicates that the cluster is resizing; that is, compute nodes are being added to or removed from the cluster.
* **allocationStateTransitionTime**: string (ReadOnly): The time at which the cluster entered its current allocation state.
* **creationTime**: string (ReadOnly): The time when the cluster was created.
* **currentNodeCount**: int (ReadOnly): The number of compute nodes currently assigned to the cluster.
* **errors**: [BatchAIError](#batchaierror)[] (ReadOnly): Collection of errors encountered by various compute nodes during node setup.
* **nodeSetup**: [NodeSetup](#nodesetup): Node setup settings.
* **nodeStateCounts**: [NodeStateCounts](#nodestatecounts) (ReadOnly): Counts of various compute node states on the cluster.
* **provisioningState**: 'creating' | 'deleting' | 'failed' | 'succeeded' (ReadOnly): Provisioning state of the cluster. Possible value are: creating - Specifies that the cluster is being created. succeeded - Specifies that the cluster has been created successfully. failed - Specifies that the cluster creation has failed. deleting - Specifies that the cluster is being deleted.
* **provisioningStateTransitionTime**: string (ReadOnly): Time when the provisioning state was changed.
* **scaleSettings**: [ScaleSettings](#scalesettings): At least one of manual or autoScale settings must be specified. Only one of manual or autoScale settings can be specified. If autoScale settings are specified, the system automatically scales the cluster up and down (within the supplied limits) based on the pending jobs on the cluster.
* **subnet**: [ResourceId](#resourceid): Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
* **userAccountSettings**: [UserAccountSettings](#useraccountsettings) (Required): Settings for user account that gets created on each on the nodes of a cluster.
* **virtualMachineConfiguration**: [VirtualMachineConfiguration](#virtualmachineconfiguration): VM configuration.
* **vmPriority**: 'dedicated' | 'lowpriority': VM priority. Allowed values are: dedicated (default) and lowpriority.
* **vmSize**: string (Required): The size of the virtual machines in the cluster. All nodes in a cluster have the same VM size.

## BatchAIError
### Properties
* **code**: string (ReadOnly): An identifier of the error. Codes are invariant and are intended to be consumed programmatically.
* **details**: [NameValuePair](#namevaluepair)[] (ReadOnly): A list of additional details about the error.
* **message**: string (ReadOnly): A message describing the error, intended to be suitable for display in a user interface.

## NameValuePair
### Properties
* **name**: string (ReadOnly): The name in the name-value pair.
* **value**: string (ReadOnly): The value in the name-value pair.

## NodeSetup
### Properties
* **mountVolumes**: [MountVolumes](#mountvolumes): Details of volumes to mount on the cluster.
* **performanceCountersSettings**: [PerformanceCountersSettings](#performancecounterssettings): Performance counters reporting settings.
* **setupTask**: [SetupTask](#setuptask): Specifies a setup task which can be used to customize the compute nodes of the cluster.

## MountVolumes
### Properties
* **azureBlobFileSystems**: [AzureBlobFileSystemReference](#azureblobfilesystemreference)[]: A collection of Azure Blob Containers that are to be mounted to the cluster nodes.
* **azureFileShares**: [AzureFileShareReference](#azurefilesharereference)[]: A collection of Azure File Shares that are to be mounted to the cluster nodes.
* **fileServers**: [FileServerReference](#fileserverreference)[]: A collection of Batch AI File Servers that are to be mounted to the cluster nodes.
* **unmanagedFileSystems**: [UnmanagedFileSystemReference](#unmanagedfilesystemreference)[]: A collection of unmanaged file systems that are to be mounted to the cluster nodes.

## AzureBlobFileSystemReference
### Properties
* **accountName**: string (Required): Name of the Azure storage account.
* **containerName**: string (Required): Name of the Azure Blob Storage container to mount on the cluster.
* **credentials**: [AzureStorageCredentialsInfo](#azurestoragecredentialsinfo) (Required): Azure storage account credentials.
* **mountOptions**: string: Mount options for mounting blobfuse file system.
* **relativeMountPath**: string (Required): The relative path on the compute node where the Azure File container will be mounted. Note that all cluster level containers will be mounted under $AZ_BATCHAI_MOUNT_ROOT location and all job level containers will be mounted under $AZ_BATCHAI_JOB_MOUNT_ROOT.

## AzureStorageCredentialsInfo
### Properties
* **accountKey**: string: Storage account key. One of accountKey or accountKeySecretReference must be specified.
* **accountKeySecretReference**: [KeyVaultSecretReference](#keyvaultsecretreference): Key Vault Secret reference.

## KeyVaultSecretReference
### Properties
* **secretUrl**: string (Required): The URL referencing a secret in the Key Vault.
* **sourceVault**: [ResourceId](#resourceid) (Required): Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.

## ResourceId
### Properties
* **id**: string (Required): The ID of the resource

## AzureFileShareReference
### Properties
* **accountName**: string (Required): Name of the Azure storage account.
* **azureFileUrl**: string (Required): URL to access the Azure File.
* **credentials**: [AzureStorageCredentialsInfo](#azurestoragecredentialsinfo) (Required): Azure storage account credentials.
* **directoryMode**: string: File mode for directories on the mounted file share. Default value: 0777.
* **fileMode**: string: File mode for files on the mounted file share. Default value: 0777.
* **relativeMountPath**: string (Required): The relative path on the compute node where the Azure File share will be mounted. Note that all cluster level file shares will be mounted under $AZ_BATCHAI_MOUNT_ROOT location and all job level file shares will be mounted under $AZ_BATCHAI_JOB_MOUNT_ROOT.

## FileServerReference
### Properties
* **fileServer**: [ResourceId](#resourceid) (Required): Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
* **mountOptions**: string: Mount options to be passed to mount command.
* **relativeMountPath**: string (Required): The relative path on the compute node where the File Server will be mounted. Note that all cluster level file servers will be mounted under $AZ_BATCHAI_MOUNT_ROOT location and all job level file servers will be mounted under $AZ_BATCHAI_JOB_MOUNT_ROOT.
* **sourceDirectory**: string: File Server directory that needs to be mounted. If this property is not specified, the entire File Server will be mounted.

## UnmanagedFileSystemReference
### Properties
* **mountCommand**: string (Required): Mount command line. Note, Batch AI will append mount path to the command on its own.
* **relativeMountPath**: string (Required): The relative path on the compute node where the unmanaged file system will be mounted. Note that all cluster level unmanaged file systems will be mounted under $AZ_BATCHAI_MOUNT_ROOT location and all job level unmanaged file systems will be mounted under $AZ_BATCHAI_JOB_MOUNT_ROOT.

## PerformanceCountersSettings
### Properties
* **appInsightsReference**: [AppInsightsReference](#appinsightsreference) (Required): Azure Application Insights information for performance counters reporting.

## AppInsightsReference
### Properties
* **component**: [ResourceId](#resourceid) (Required): Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
* **instrumentationKey**: string: Value of the Azure Application Insights instrumentation key.
* **instrumentationKeySecretReference**: [KeyVaultSecretReference](#keyvaultsecretreference): Key Vault Secret reference.

## SetupTask
### Properties
* **commandLine**: string (Required): The command line to be executed on each cluster's node after it being allocated or rebooted. The command is executed in a bash subshell as a root.
* **environmentVariables**: [EnvironmentVariable](#environmentvariable)[]: A collection of user defined environment variables to be set for setup task.
* **secrets**: [EnvironmentVariableWithSecretValue](#environmentvariablewithsecretvalue)[]: A collection of user defined environment variables with secret values to be set for the setup task. Server will never report values of these variables back.
* **stdOutErrPathPrefix**: string (Required): The prefix of a path where the Batch AI service will upload the stdout, stderr and execution log of the setup task.
* **stdOutErrPathSuffix**: string (ReadOnly): A path segment appended by Batch AI to stdOutErrPathPrefix to form a path where stdout, stderr and execution log of the setup task will be uploaded. Batch AI creates the setup task output directories under an unique path to avoid conflicts between different clusters. The full path can be obtained by concatenation of stdOutErrPathPrefix and stdOutErrPathSuffix.

## EnvironmentVariable
### Properties
* **name**: string (Required): The name of the environment variable.
* **value**: string (Required): The value of the environment variable.

## EnvironmentVariableWithSecretValue
### Properties
* **name**: string (Required): The name of the environment variable to store the secret value.
* **value**: string: The value of the environment variable. This value will never be reported back by Batch AI.
* **valueSecretReference**: [KeyVaultSecretReference](#keyvaultsecretreference): Key Vault Secret reference.

## NodeStateCounts
### Properties
* **idleNodeCount**: int (ReadOnly): Number of compute nodes in idle state.
* **leavingNodeCount**: int (ReadOnly): Number of compute nodes which are leaving the cluster.
* **preparingNodeCount**: int (ReadOnly): Number of compute nodes which are being prepared.
* **runningNodeCount**: int (ReadOnly): Number of compute nodes which are running jobs.
* **unusableNodeCount**: int (ReadOnly): Number of compute nodes which are in unusable state.

## ScaleSettings
### Properties
* **autoScale**: [AutoScaleSettings](#autoscalesettings): Auto-scale settings for the cluster. The system automatically scales the cluster up and down (within minimumNodeCount and maximumNodeCount) based on the number of queued and running jobs assigned to the cluster.
* **manual**: [ManualScaleSettings](#manualscalesettings): Manual scale settings for the cluster.

## AutoScaleSettings
### Properties
* **initialNodeCount**: int: The number of compute nodes to allocate on cluster creation. Note that this value is used only during cluster creation. Default: 0.
* **maximumNodeCount**: int (Required): The maximum number of compute nodes the cluster can have.
* **minimumNodeCount**: int (Required): The minimum number of compute nodes the Batch AI service will try to allocate for the cluster. Note, the actual number of nodes can be less than the specified value if the subscription has not enough quota to fulfill the request.

## ManualScaleSettings
### Properties
* **nodeDeallocationOption**: 'requeue' | 'terminate' | 'waitforjobcompletion': Actions which should be performed when compute nodes are removed from the cluster. Possible values are: requeue (default) - Terminate running jobs and requeue them so the jobs will run again. Remove compute nodes as soon as jobs have been terminated; terminate - Terminate running jobs. The jobs will not run again. Remove compute nodes as soon as jobs have been terminated. waitforjobcompletion - Allow currently running jobs to complete. Schedule no new jobs while waiting. Remove compute nodes when all jobs have completed.
* **targetNodeCount**: int (Required): The desired number of compute nodes in the Cluster. Default is 0.

## UserAccountSettings
### Properties
* **adminUserName**: string (Required): Name of the administrator user account which can be used to SSH to nodes.
* **adminUserPassword**: string: Password of the administrator user account.
* **adminUserSshPublicKey**: string: SSH public key of the administrator user account.

## VirtualMachineConfiguration
### Properties
* **imageReference**: [ImageReference](#imagereference): The OS image reference.

## ImageReference
### Properties
* **offer**: string (Required): Offer of the image.
* **publisher**: string (Required): Publisher of the image.
* **sku**: string (Required): SKU of the image.
* **version**: string: Version of the image.
* **virtualMachineImageId**: string: The ARM resource identifier of the virtual machine image for the compute nodes. This is of the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/images/{imageName}. The virtual machine image must be in the same region and subscription as the cluster. For information about the firewall settings for the Batch node agent to communicate with the Batch service see https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration. Note, you need to provide publisher, offer and sku of the base OS image of which the custom image has been derived from.

## ExperimentProperties
### Properties
* **creationTime**: string (ReadOnly): Time when the Experiment was created.
* **provisioningState**: 'creating' | 'deleting' | 'failed' | 'succeeded' (ReadOnly): Provisioning state of the cluster. Possible value are: creating - Specifies that the cluster is being created. succeeded - Specifies that the cluster has been created successfully. failed - Specifies that the cluster creation has failed. deleting - Specifies that the cluster is being deleted.
* **provisioningStateTransitionTime**: string (ReadOnly): The time at which the experiment entered its current provisioning state.

## JobBaseProperties
### Properties
* **caffe2Settings**: [Caffe2Settings](#caffe2settings): Caffe2 job settings.
* **caffeSettings**: [CaffeSettings](#caffesettings): Caffe job settings.
* **chainerSettings**: [ChainerSettings](#chainersettings): Chainer job settings.
* **cluster**: [ResourceId](#resourceid) (Required): Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
* **cntkSettings**: [CNTKsettings](#cntksettings): CNTK (aka Microsoft Cognitive Toolkit) job settings.
* **constraints**: [JobBasePropertiesConstraints](#jobbasepropertiesconstraints): Constraints associated with the Job.
* **containerSettings**: [ContainerSettings](#containersettings): Docker container settings.
* **creationTime**: string (ReadOnly): The creation time of the job.
* **customMpiSettings**: [CustomMpiSettings](#custommpisettings): Custom MPI job settings.
* **customToolkitSettings**: [CustomToolkitSettings](#customtoolkitsettings): Custom tool kit job settings.
* **environmentVariables**: [EnvironmentVariable](#environmentvariable)[]: A collection of user defined environment variables to be setup for the job.
* **executionInfo**: [JobPropertiesExecutionInfo](#jobpropertiesexecutioninfo) (ReadOnly): Information about the execution of a job.
* **executionState**: 'failed' | 'queued' | 'running' | 'succeeded' | 'terminating' (ReadOnly): The current state of the job. Possible values are: queued - The job is queued and able to run. A job enters this state when it is created, or when it is awaiting a retry after a failed run. running - The job is running on a compute cluster. This includes job-level preparation such as downloading resource files or set up container specified on the job - it does not necessarily mean that the job command line has started executing. terminating - The job is terminated by the user, the terminate operation is in progress. succeeded - The job has completed running successfully and exited with exit code 0. failed - The job has finished unsuccessfully (failed with a non-zero exit code) and has exhausted its retry limit. A job is also marked as failed if an error occurred launching the job.
* **executionStateTransitionTime**: string (ReadOnly): The time at which the job entered its current execution state.
* **horovodSettings**: [HorovodSettings](#horovodsettings): Specifies the settings for Horovod job.
* **inputDirectories**: [InputDirectory](#inputdirectory)[]: A list of input directories for the job.
* **jobOutputDirectoryPathSegment**: string (ReadOnly): A segment of job's output directories path created by Batch AI. Batch AI creates job's output directories under an unique path to avoid conflicts between jobs. This value contains a path segment generated by Batch AI to make the path unique and can be used to find the output directory on the node or mounted filesystem.
* **jobPreparation**: [JobPreparation](#jobpreparation): Job preparation settings.
* **mountVolumes**: [MountVolumes](#mountvolumes): Details of volumes to mount on the cluster.
* **nodeCount**: int (Required): The job will be gang scheduled on that many compute nodes
* **outputDirectories**: [OutputDirectory](#outputdirectory)[]: A list of output directories for the job.
* **provisioningState**: 'creating' | 'deleting' | 'failed' | 'succeeded' (ReadOnly): Provisioning state of the cluster. Possible value are: creating - Specifies that the cluster is being created. succeeded - Specifies that the cluster has been created successfully. failed - Specifies that the cluster creation has failed. deleting - Specifies that the cluster is being deleted.
* **provisioningStateTransitionTime**: string (ReadOnly): The time at which the job entered its current provisioning state.
* **pyTorchSettings**: [PyTorchSettings](#pytorchsettings): pyTorch job settings.
* **schedulingPriority**: 'high' | 'low' | 'normal': Scheduling priority associated with the job. Possible values: low, normal, high.
* **secrets**: [EnvironmentVariableWithSecretValue](#environmentvariablewithsecretvalue)[]: A collection of user defined environment variables with secret values to be setup for the job. Server will never report values of these variables back.
* **stdOutErrPathPrefix**: string (Required): The path where the Batch AI service stores stdout, stderror and execution log of the job.
* **tensorFlowSettings**: [TensorFlowSettings](#tensorflowsettings): TensorFlow job settings.
* **toolType**: 'caffe' | 'caffe2' | 'chainer' | 'cntk' | 'custom' | 'custommpi' | 'horovod' | 'tensorflow' (ReadOnly): The toolkit type of the job.

## Caffe2Settings
### Properties
* **commandLineArgs**: string: Command line arguments that need to be passed to the python script.
* **pythonInterpreterPath**: string: The path to the Python interpreter.
* **pythonScriptFilePath**: string (Required): The python script to execute.

## CaffeSettings
### Properties
* **commandLineArgs**: string: Command line arguments that need to be passed to the Caffe job.
* **configFilePath**: string: Path of the config file for the job. This property cannot be specified if pythonScriptFilePath is specified.
* **processCount**: int: Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property
* **pythonInterpreterPath**: string: The path to the Python interpreter. The property can be specified only if the pythonScriptFilePath is specified.
* **pythonScriptFilePath**: string: Python script to execute. This property cannot be specified if configFilePath is specified.

## ChainerSettings
### Properties
* **commandLineArgs**: string: Command line arguments that need to be passed to the python script.
* **processCount**: int: Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property
* **pythonInterpreterPath**: string: The path to the Python interpreter.
* **pythonScriptFilePath**: string (Required): The python script to execute.

## CNTKsettings
### Properties
* **commandLineArgs**: string: Command line arguments that need to be passed to the python script or cntk executable.
* **configFilePath**: string: Specifies the path of the BrainScript config file. This property can be specified only if the languageType is 'BrainScript'.
* **languageType**: string: The language to use for launching CNTK (aka Microsoft Cognitive Toolkit) job. Valid values are 'BrainScript' or 'Python'.
* **processCount**: int: Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property
* **pythonInterpreterPath**: string: The path to the Python interpreter. This property can be specified only if the languageType is 'Python'.
* **pythonScriptFilePath**: string: Python script to execute. This property can be specified only if the languageType is 'Python'.

## JobBasePropertiesConstraints
### Properties
* **maxWallClockTime**: string: Max time the job can run. Default value: 1 week.

## ContainerSettings
### Properties
* **imageSourceRegistry**: [ImageSourceRegistry](#imagesourceregistry) (Required): Information about docker image for the job.
* **shmSize**: string: Size of /dev/shm. Please refer to docker documentation for supported argument formats.

## ImageSourceRegistry
### Properties
* **credentials**: [PrivateRegistryCredentials](#privateregistrycredentials): Credentials to access a container image in a private repository.
* **image**: string (Required): The name of the image in the image repository.
* **serverUrl**: string: URL for image repository.

## PrivateRegistryCredentials
### Properties
* **password**: string: User password to login to the docker repository. One of password or passwordSecretReference must be specified.
* **passwordSecretReference**: [KeyVaultSecretReference](#keyvaultsecretreference): Key Vault Secret reference.
* **username**: string (Required): User name to login to the repository.

## CustomMpiSettings
### Properties
* **commandLine**: string (Required): The command line to be executed by mpi runtime on each compute node.
* **processCount**: int: Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property

## CustomToolkitSettings
### Properties
* **commandLine**: string: The command line to execute on the master node.

## JobPropertiesExecutionInfo
### Properties
* **endTime**: string (ReadOnly): The time at which the job completed. This property is only returned if the job is in completed state.
* **errors**: [BatchAIError](#batchaierror)[] (ReadOnly): A collection of errors encountered by the service during job execution.
* **exitCode**: int (ReadOnly): The exit code of the job. This property is only returned if the job is in completed state.
* **startTime**: string (ReadOnly): The time at which the job started running. 'Running' corresponds to the running state. If the job has been restarted or retried, this is the most recent time at which the job started running. This property is present only for job that are in the running or completed state.

## HorovodSettings
### Properties
* **commandLineArgs**: string: Command line arguments that need to be passed to the python script.
* **processCount**: int: Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property
* **pythonInterpreterPath**: string: The path to the Python interpreter.
* **pythonScriptFilePath**: string (Required): The python script to execute.

## InputDirectory
### Properties
* **id**: string (Required): The ID for the input directory. The job can use AZ_BATCHAI_INPUT_<id> environment variable to find the directory path, where <id> is the value of id attribute.
* **path**: string (Required): The path to the input directory.

## JobPreparation
### Properties
* **commandLine**: string (Required): The command line to execute. If containerSettings is specified on the job, this commandLine will be executed in the same container as job. Otherwise it will be executed on the node.

## OutputDirectory
### Properties
* **id**: string (Required): The ID of the output directory. The job can use AZ_BATCHAI_OUTPUT_<id> environment variable to find the directory path, where <id> is the value of id attribute.
* **pathPrefix**: string (Required): The prefix path where the output directory will be created. Note, this is an absolute path to prefix. E.g. $AZ_BATCHAI_MOUNT_ROOT/MyNFS/MyLogs. The full path to the output directory by combining pathPrefix, jobOutputDirectoryPathSegment (reported by get job) and pathSuffix.
* **pathSuffix**: string: The suffix path where the output directory will be created. E.g. models. You can find the full path to the output directory by combining pathPrefix, jobOutputDirectoryPathSegment (reported by get job) and pathSuffix.

## PyTorchSettings
### Properties
* **commandLineArgs**: string: Command line arguments that need to be passed to the python script.
* **communicationBackend**: string: Type of the communication backend for distributed jobs. Valid values are 'TCP', 'Gloo' or 'MPI'. Not required for non-distributed jobs.
* **processCount**: int: Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property
* **pythonInterpreterPath**: string: The path to the Python interpreter.
* **pythonScriptFilePath**: string (Required): The python script to execute.

## TensorFlowSettings
### Properties
* **masterCommandLineArgs**: string: Command line arguments that need to be passed to the python script for the master task.
* **parameterServerCommandLineArgs**: string: Command line arguments that need to be passed to the python script for the parameter server. Optional for single process jobs.
* **parameterServerCount**: int: The number of parameter server tasks. If specified, the value must be less than or equal to nodeCount. If not specified, the default value is equal to 1 for distributed TensorFlow training. This property can be specified only for distributed TensorFlow training.
* **pythonInterpreterPath**: string: The path to the Python interpreter.
* **pythonScriptFilePath**: string (Required): The python script to execute.
* **workerCommandLineArgs**: string: Command line arguments that need to be passed to the python script for the worker task. Optional for single process jobs.
* **workerCount**: int: The number of worker tasks. If specified, the value must be less than or equal to (nodeCount * numberOfGPUs per VM). If not specified, the default value is equal to nodeCount. This property can be specified only for distributed TensorFlow training.

## FileServerBaseProperties
### Properties
* **creationTime**: string (ReadOnly): Time when the FileServer was created.
* **dataDisks**: [DataDisks](#datadisks) (Required): Data disks settings.
* **mountSettings**: [MountSettings](#mountsettings) (ReadOnly): File Server mount Information.
* **provisioningState**: 'creating' | 'deleting' | 'failed' | 'succeeded' | 'updating' (ReadOnly): Provisioning state of the File Server. Possible values: creating - The File Server is getting created; updating - The File Server creation has been accepted and it is getting updated; deleting - The user has requested that the File Server be deleted, and it is in the process of being deleted; failed - The File Server creation has failed with the specified error code. Details about the error code are specified in the message field; succeeded - The File Server creation has succeeded.
* **provisioningStateTransitionTime**: string (ReadOnly): Time when the provisioning state was changed.
* **sshConfiguration**: [SshConfiguration](#sshconfiguration) (Required): SSH configuration.
* **subnet**: [ResourceId](#resourceid): Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
* **vmSize**: string (Required): VM size of the File Server.

## DataDisks
### Properties
* **cachingType**: 'none' | 'readonly' | 'readwrite': Caching type for the disks. Available values are none (default), readonly, readwrite. Caching type can be set only for VM sizes supporting premium storage.
* **diskCount**: int (Required): Number of data disks attached to the File Server. If multiple disks attached, they will be configured in RAID level 0.
* **diskSizeInGB**: int (Required): Disk size in GB for the blank data disks.
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS' (Required): Type of storage account to be used on the disk. Possible values are: Standard_LRS or Premium_LRS. Premium storage account type can only be used with VM sizes supporting premium storage.

## MountSettings
### Properties
* **fileServerInternalIP**: string (ReadOnly): Internal IP address of the File Server which can be used to access the File Server from within the subnet.
* **fileServerPublicIP**: string (ReadOnly): Public IP address of the File Server which can be used to SSH to the node from outside of the subnet.
* **mountPoint**: string (ReadOnly): Path where the data disks are mounted on the File Server.

## SshConfiguration
### Properties
* **publicIPsToAllow**: string[]: List of source IP ranges to allow SSH connection from. The default value is '*' (all source IPs are allowed). Maximum number of IP ranges that can be specified is 400.
* **userAccountSettings**: [UserAccountSettings](#useraccountsettings) (Required): Settings for user account that gets created on each on the nodes of a cluster.

