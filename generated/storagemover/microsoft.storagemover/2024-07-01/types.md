# Microsoft.StorageMover @ 2024-07-01

## Resource Microsoft.StorageMover/storageMovers@2024-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageMoverProperties](#storagemoverproperties): The resource specific properties for the Storage Mover resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.StorageMover/storageMovers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageMover/storageMovers/agents@2024-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AgentProperties](#agentproperties) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.StorageMover/storageMovers/agents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageMover/storageMovers/endpoints@2024-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EndpointBaseProperties](#endpointbaseproperties) (Required): The resource specific properties for the Storage Mover resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.StorageMover/storageMovers/endpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageMover/storageMovers/projects@2024-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectProperties](#projectproperties): Project properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.StorageMover/storageMovers/projects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageMover/storageMovers/projects/jobDefinitions@2024-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobDefinitionProperties](#jobdefinitionproperties) (Required): Job definition properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.StorageMover/storageMovers/projects/jobDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageMover/storageMovers/projects/jobDefinitions/jobRuns@2024-07-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobRunProperties](#jobrunproperties) (ReadOnly): Job run properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.StorageMover/storageMovers/projects/jobDefinitions/jobRuns' (ReadOnly, DeployTimeConstant): The resource type

## AgentProperties
### Properties
* **agentStatus**: 'Executing' | 'Offline' | 'Online' | 'Registering' | 'RequiresAttention' | 'Unregistering' | string (ReadOnly): The Agent status.
* **agentVersion**: string (ReadOnly): The Agent version.
* **arcResourceId**: string (Required): The fully qualified resource ID of the Hybrid Compute resource for the Agent.
* **arcVmUuid**: string (Required): The VM UUID of the Hybrid Compute resource for the Agent.
* **description**: string: A description for the Agent.
* **errorDetails**: [AgentPropertiesErrorDetails](#agentpropertieserrordetails) (ReadOnly)
* **lastStatusUpdate**: string (ReadOnly): The last updated time of the Agent status.
* **localIPAddress**: string (ReadOnly): Local IP address reported by the Agent.
* **memoryInMB**: int (ReadOnly): Available memory reported by the Agent, in MB.
* **numberOfCores**: int (ReadOnly): Available compute cores reported by the Agent.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of this resource.
* **timeZone**: string (ReadOnly): The agent's local time zone represented in Windows format.
* **uploadLimitSchedule**: [UploadLimitSchedule](#uploadlimitschedule): The WAN-link upload limit schedule that applies to any Job Run the agent executes. Data plane operations (migrating files) are affected. Control plane operations ensure seamless migration functionality and are not limited by this schedule. The schedule is interpreted with the agent's local time.
* **uptimeInSeconds**: int (ReadOnly): Uptime of the Agent in seconds.

## AgentPropertiesErrorDetails
### Properties
* **code**: string: Error code reported by Agent
* **message**: string: Expanded description of reported error code

## AzureKeyVaultSmbCredentials
### Properties
* **passwordUri**: string: The Azure Key Vault secret URI which stores the password. Use empty string to clean-up existing value.
* **type**: 'AzureKeyVaultSmb' | string (Required): The Credentials type.
* **usernameUri**: string: The Azure Key Vault secret URI which stores the username. Use empty string to clean-up existing value.

## EndpointBaseProperties
* **Discriminator**: endpointType

### Base Properties
* **description**: string: A description for the Endpoint.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of this resource.

### AzureStorageBlobContainerEndpointProperties
#### Properties
* **blobContainerName**: string (Required): The name of the Storage blob container that is the target destination.
* **endpointType**: 'AzureStorageBlobContainer' (Required): The Endpoint resource type.
* **storageAccountResourceId**: string (Required): The Azure Resource ID of the storage account that is the target destination.

### AzureStorageSmbFileShareEndpointProperties
#### Properties
* **endpointType**: 'AzureStorageSmbFileShare' (Required): The Endpoint resource type.
* **fileShareName**: string (Required): The name of the Azure Storage file share.
* **storageAccountResourceId**: string (Required): The Azure Resource ID of the storage account.

### NfsMountEndpointProperties
#### Properties
* **endpointType**: 'NfsMount' (Required): The Endpoint resource type.
* **export**: string (Required): The directory being exported from the server.
* **host**: string (Required): The host name or IP address of the server exporting the file system.
* **nfsVersion**: 'NFSauto' | 'NFSv3' | 'NFSv4' | string: The NFS protocol version.

### SmbMountEndpointProperties
#### Properties
* **credentials**: [AzureKeyVaultSmbCredentials](#azurekeyvaultsmbcredentials): The Azure Key Vault secret URIs which store the required credentials to access the SMB share.
* **endpointType**: 'SmbMount' (Required): The Endpoint resource type.
* **host**: string (Required): The host name or IP address of the server exporting the file system.
* **shareName**: string (Required): The name of the SMB share being exported from the server.


## JobDefinitionProperties
### Properties
* **agentName**: string: Name of the Agent to assign for new Job Runs of this Job Definition.
* **agentResourceId**: string (ReadOnly): Fully qualified resource id of the Agent to assign for new Job Runs of this Job Definition.
* **copyMode**: 'Additive' | 'Mirror' | string (Required): Strategy to use for copy.
* **description**: string: A description for the Job Definition.
* **latestJobRunName**: string (ReadOnly): The name of the Job Run in a non-terminal state, if exists.
* **latestJobRunResourceId**: string (ReadOnly): The fully qualified resource ID of the Job Run in a non-terminal state, if exists.
* **latestJobRunStatus**: 'CancelRequested' | 'Canceled' | 'Canceling' | 'Failed' | 'PausedByBandwidthManagement' | 'Queued' | 'Running' | 'Started' | 'Succeeded' | string (ReadOnly): The current status of the Job Run in a non-terminal state, if exists.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of this resource.
* **sourceName**: string (Required): The name of the source Endpoint.
* **sourceResourceId**: string (ReadOnly): Fully qualified resource ID of the source Endpoint.
* **sourceSubpath**: string: The subpath to use when reading from the source Endpoint.
* **targetName**: string (Required): The name of the target Endpoint.
* **targetResourceId**: string (ReadOnly): Fully qualified resource ID of the target Endpoint.
* **targetSubpath**: string: The subpath to use when writing to the target Endpoint.

## JobRunError
### Properties
* **code**: string: Error code of the given entry.
* **message**: string: Error message of the given entry.
* **target**: string: Target of the given error entry.

## JobRunProperties
### Properties
* **agentName**: string (ReadOnly): Name of the Agent assigned to this run.
* **agentResourceId**: string (ReadOnly): Fully qualified resource id of the Agent assigned to this run.
* **bytesExcluded**: int (ReadOnly): Bytes of data that will not be transferred, as they are excluded by user configuration.
* **bytesFailed**: int (ReadOnly): Bytes of data that were attempted to transfer and failed.
* **bytesNoTransferNeeded**: int (ReadOnly): Bytes of data that will not be transferred, as they are already found on target (e.g. mirror mode).
* **bytesScanned**: int (ReadOnly): Bytes of data scanned so far in source.
* **bytesTransferred**: int (ReadOnly): Bytes of data successfully transferred to target.
* **bytesUnsupported**: int (ReadOnly): Bytes of data that will not be transferred, as they are unsupported on target.
* **error**: [JobRunError](#jobrunerror) (ReadOnly): Error details.
* **executionEndTime**: string (ReadOnly): End time of the run. Null if Agent has not reported that the job has ended.
* **executionStartTime**: string (ReadOnly): Start time of the run. Null if no Agent reported that the job has started.
* **itemsExcluded**: int (ReadOnly): Number of items that will not be transferred, as they are excluded by user configuration.
* **itemsFailed**: int (ReadOnly): Number of items that were attempted to transfer and failed.
* **itemsNoTransferNeeded**: int (ReadOnly): Number of items that will not be transferred, as they are already found on target (e.g. mirror mode).
* **itemsScanned**: int (ReadOnly): Number of items scanned so far in source.
* **itemsTransferred**: int (ReadOnly): Number of items successfully transferred to target.
* **itemsUnsupported**: int (ReadOnly): Number of items that will not be transferred, as they are unsupported on target.
* **jobDefinitionProperties**: any (ReadOnly): Copy of parent Job Definition's properties at time of Job Run creation.
* **lastStatusUpdate**: string (ReadOnly): The last updated time of the Job Run.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of this resource.
* **scanStatus**: 'Completed' | 'NotStarted' | 'Scanning' | string (ReadOnly): The status of Agent's scanning of source.
* **sourceName**: string (ReadOnly): Name of source Endpoint resource. This resource may no longer exist.
* **sourceProperties**: any (ReadOnly): Copy of source Endpoint resource's properties at time of Job Run creation.
* **sourceResourceId**: string (ReadOnly): Fully qualified resource id of source Endpoint. This id may no longer exist.
* **status**: 'CancelRequested' | 'Canceled' | 'Canceling' | 'Failed' | 'PausedByBandwidthManagement' | 'Queued' | 'Running' | 'Started' | 'Succeeded' | string (ReadOnly): The state of the job execution.
* **targetName**: string (ReadOnly): Name of target Endpoint resource. This resource may no longer exist.
* **targetProperties**: any (ReadOnly): Copy of Endpoint resource's properties at time of Job Run creation.
* **targetResourceId**: string (ReadOnly): Fully qualified resource id of of Endpoint. This id may no longer exist.

## ProjectProperties
### Properties
* **description**: string: A description for the Project.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of this resource.

## StorageMoverProperties
### Properties
* **description**: string: A description for the Storage Mover.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of this resource.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## Time
### Properties
* **hour**: int {minValue: 0, maxValue: 24} (Required): The hour element of the time. Allowed values range from 0 (start of the selected day) to 24 (end of the selected day). Hour value 24 cannot be combined with any other minute value but 0.
* **minute**: int: The minute element of the time. Allowed values are 0 and 30. If not specified, its value defaults to 0.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UploadLimitSchedule
### Properties
* **weeklyRecurrences**: [UploadLimitWeeklyRecurrence](#uploadlimitweeklyrecurrence)[]: The set of weekly repeating recurrences of the WAN-link upload limit schedule.

## UploadLimitWeeklyRecurrence
### Properties
* **days**: ('Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday')[] (Required): The set of days of week for the schedule recurrence. A day must not be specified more than once in a recurrence.
* **endTime**: [Time](#time) (Required): The end time of the schedule recurrence. Full hour and 30-minute intervals are supported.
* **limitInMbps**: int {minValue: 0, maxValue: 2147483647} (Required): The WAN-link upload bandwidth (maximum data transfer rate) in megabits per second. Value of 0 indicates no throughput is allowed and any running migration job is effectively paused for the duration of this recurrence. Only data plane operations are governed by this limit. Control plane operations ensure seamless functionality. The agent may exceed this limit with control messages, if necessary.
* **startTime**: [Time](#time) (Required): The start time of the schedule recurrence. Full hour and 30-minute intervals are supported.

