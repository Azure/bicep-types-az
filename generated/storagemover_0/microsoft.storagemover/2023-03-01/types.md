# Microsoft.StorageMover @ 2023-03-01

## Resource Microsoft.StorageMover/storageMovers@2023-03-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageMoverProperties](#storagemoverproperties): The resource specific properties for the Storage Mover resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Resource system metadata.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.StorageMover/storageMovers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageMover/storageMovers/agents@2023-03-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AgentProperties](#agentproperties) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Resource system metadata.
* **type**: 'Microsoft.StorageMover/storageMovers/agents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageMover/storageMovers/endpoints@2023-03-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EndpointBaseProperties](#endpointbaseproperties) (Required): The resource specific properties for the Storage Mover resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Resource system metadata.
* **type**: 'Microsoft.StorageMover/storageMovers/endpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageMover/storageMovers/projects@2023-03-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectProperties](#projectproperties): Project properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Resource system metadata.
* **type**: 'Microsoft.StorageMover/storageMovers/projects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageMover/storageMovers/projects/jobDefinitions@2023-03-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobDefinitionProperties](#jobdefinitionproperties) (Required): Job definition properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Resource system metadata.
* **type**: 'Microsoft.StorageMover/storageMovers/projects/jobDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageMover/storageMovers/projects/jobDefinitions/jobRuns@2023-03-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobRunProperties](#jobrunproperties) (ReadOnly): Job run properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Resource system metadata.
* **type**: 'Microsoft.StorageMover/storageMovers/projects/jobDefinitions/jobRuns' (ReadOnly, DeployTimeConstant): The resource type

## Function startJob (Microsoft.StorageMover/storageMovers/projects/jobDefinitions@2023-03-01)
* **Resource**: Microsoft.StorageMover/storageMovers/projects/jobDefinitions
* **ApiVersion**: 2023-03-01
* **Output**: [JobRunResourceId](#jobrunresourceid)

## Function stopJob (Microsoft.StorageMover/storageMovers/projects/jobDefinitions@2023-03-01)
* **Resource**: Microsoft.StorageMover/storageMovers/projects/jobDefinitions
* **ApiVersion**: 2023-03-01
* **Output**: [JobRunResourceId](#jobrunresourceid)

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
* **provisioningState**: 'Succeeded' | string (ReadOnly): The provisioning state of this resource.
* **uptimeInSeconds**: int (ReadOnly): Uptime of the Agent in seconds.

## AgentPropertiesErrorDetails
### Properties
* **code**: string: Error code reported by Agent
* **message**: string: Expanded description of reported error code

## EndpointBaseProperties
* **Discriminator**: endpointType

### Base Properties
* **description**: string: A description for the Endpoint.
* **provisioningState**: 'Succeeded' | string (ReadOnly): The provisioning state of this resource.

### AzureStorageBlobContainerEndpointProperties
#### Properties
* **blobContainerName**: string (Required): The name of the Storage blob container that is the target destination.
* **endpointType**: 'AzureStorageBlobContainer' (Required): The Endpoint resource type.
* **storageAccountResourceId**: string (Required): The Azure Resource ID of the storage account that is the target destination.

### NfsMountEndpointProperties
#### Properties
* **endpointType**: 'NfsMount' (Required): The Endpoint resource type.
* **export**: string (Required): The directory being exported from the server.
* **host**: string (Required): The host name or IP address of the server exporting the file system.
* **nfsVersion**: 'NFSauto' | 'NFSv3' | 'NFSv4' | string: The NFS protocol version.


## JobDefinitionProperties
### Properties
* **agentName**: string: Name of the Agent to assign for new Job Runs of this Job Definition.
* **agentResourceId**: string (ReadOnly): Fully qualified resource id of the Agent to assign for new Job Runs of this Job Definition.
* **copyMode**: 'Additive' | 'Mirror' | string (Required): Strategy to use for copy.
* **description**: string: A description for the Job Definition.
* **latestJobRunName**: string (ReadOnly): The name of the Job Run in a non-terminal state, if exists.
* **latestJobRunResourceId**: string (ReadOnly): The fully qualified resource ID of the Job Run in a non-terminal state, if exists.
* **latestJobRunStatus**: 'CancelRequested' | 'Canceled' | 'Canceling' | 'Failed' | 'Queued' | 'Running' | 'Started' | 'Succeeded' | string (ReadOnly): The current status of the Job Run in a non-terminal state, if exists.
* **provisioningState**: 'Succeeded' | string (ReadOnly): The provisioning state of this resource.
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
* **provisioningState**: 'Succeeded' | string (ReadOnly): The provisioning state of this resource.
* **scanStatus**: 'Completed' | 'NotStarted' | 'Scanning' | string (ReadOnly): The status of Agent's scanning of source.
* **sourceName**: string (ReadOnly): Name of source Endpoint resource. This resource may no longer exist.
* **sourceProperties**: any (ReadOnly): Copy of source Endpoint resource's properties at time of Job Run creation.
* **sourceResourceId**: string (ReadOnly): Fully qualified resource id of source Endpoint. This id may no longer exist.
* **status**: 'CancelRequested' | 'Canceled' | 'Canceling' | 'Failed' | 'Queued' | 'Running' | 'Started' | 'Succeeded' | string (ReadOnly): The state of the job execution.
* **targetName**: string (ReadOnly): Name of target Endpoint resource. This resource may no longer exist.
* **targetProperties**: any (ReadOnly): Copy of Endpoint resource's properties at time of Job Run creation.
* **targetResourceId**: string (ReadOnly): Fully qualified resource id of of Endpoint. This id may no longer exist.

## JobRunResourceId
### Properties
* **jobRunResourceId**: string (ReadOnly): Fully qualified resource id of the Job Run.

## ProjectProperties
### Properties
* **description**: string: A description for the Project.
* **provisioningState**: 'Succeeded' | string (ReadOnly): The provisioning state of this resource.

## StorageMoverProperties
### Properties
* **description**: string: A description for the Storage Mover.
* **provisioningState**: 'Succeeded' | string (ReadOnly): The provisioning state of this resource.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

