# Microsoft.ContainerInstance @ 2017-12-01-preview

## Resource Microsoft.ContainerInstance/containerGroups@2017-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContainerGroupProperties](#containergroupproperties) (Required)
* **tags**: [ResourceTags](#resourcetags): The resource tags.
* **type**: 'Microsoft.ContainerInstance/containerGroups' (ReadOnly, DeployTimeConstant): The resource type

## ContainerGroupProperties
### Properties
* **containers**: [Container](#container)[] (Required): The containers within the container group.
* **imageRegistryCredentials**: [ImageRegistryCredential](#imageregistrycredential)[]: The image registry credentials by which the container group is created from.
* **instanceView**: [ContainerGroupPropertiesInstanceView](#containergrouppropertiesinstanceview) (ReadOnly): The instance view of the container group. Only valid in response.
* **ipAddress**: [IpAddress](#ipaddress): IP address for the container group.
* **osType**: 'Linux' | 'Windows' (Required): The operating system type required by the containers in the container group.
* **provisioningState**: string (ReadOnly): The provisioning state of the container group. This only appears in the response.
* **restartPolicy**: 'Always' | 'Never' | 'OnFailure': Restart policy for all containers within the container group. 
- `Always` Always restart
- `OnFailure` Restart on failure
- `Never` Never restart
* **volumes**: [Volume](#volume)[]: The list of volumes that can be mounted by containers in this container group.

## Container
### Properties
* **name**: string (Required): The user-provided name of the container instance.
* **properties**: [ContainerProperties](#containerproperties) (Required): The container instance properties.

## ContainerProperties
### Properties
* **command**: string[]: The commands to execute within the container instance in exec form.
* **environmentVariables**: [EnvironmentVariable](#environmentvariable)[]: The environment variables to set in the container instance.
* **image**: string (Required): The name of the image used to create the container instance.
* **instanceView**: [ContainerPropertiesInstanceView](#containerpropertiesinstanceview) (ReadOnly): The instance view of the container instance. Only valid in response.
* **ports**: [ContainerPort](#containerport)[]: The exposed ports on the container instance.
* **resources**: [ResourceRequirements](#resourcerequirements) (Required): The resource requirements.
* **volumeMounts**: [VolumeMount](#volumemount)[]: The volume mounts available to the container instance.

## EnvironmentVariable
### Properties
* **name**: string (Required): The name of the environment variable.
* **value**: string (Required): The value of the environment variable.

## ContainerPropertiesInstanceView
### Properties
* **currentState**: [ContainerState](#containerstate) (ReadOnly): The container instance state.
* **events**: [Event](#event)[] (ReadOnly): The events of the container instance.
* **previousState**: [ContainerState](#containerstate) (ReadOnly): The container instance state.
* **restartCount**: int (ReadOnly): The number of times that the container instance has been restarted.

## ContainerState
### Properties
* **detailStatus**: string: The human-readable status of the container instance state.
* **exitCode**: int: The container instance exit codes correspond to those from the `docker run` command.
* **finishTime**: string: The date-time when the container instance state finished.
* **startTime**: string: The date-time when the container instance state started.
* **state**: string: The state of the container instance.

## Event
### Properties
* **count**: int: The count of the event.
* **firstTimestamp**: string: The date-time of the earliest logged event.
* **lastTimestamp**: string: The date-time of the latest logged event.
* **message**: string: The event message.
* **name**: string: The event name.
* **type**: string: The event type.

## ContainerPort
### Properties
* **port**: int (Required): The port number exposed within the container group.
* **protocol**: 'TCP' | 'UDP': The protocol associated with the port.

## ResourceRequirements
### Properties
* **limits**: [ResourceLimits](#resourcelimits): The resource limits.
* **requests**: [ResourceRequests](#resourcerequests) (Required): The resource requests.

## ResourceLimits
### Properties
* **cpu**: int: The CPU limit of this container instance.
* **memoryInGB**: int: The memory limit in GB of this container instance.

## ResourceRequests
### Properties
* **cpu**: int (Required): The CPU request of this container instance.
* **memoryInGB**: int (Required): The memory request in GB of this container instance.

## VolumeMount
### Properties
* **mountPath**: string (Required): The path within the container where the volume should be mounted. Must not contain colon (:).
* **name**: string (Required): The name of the volume mount.
* **readOnly**: bool: The flag indicating whether the volume mount is read-only.

## ImageRegistryCredential
### Properties
* **password**: string: The password for the private registry.
* **server**: string (Required): The Docker image registry server without a protocol such as "http" and "https".
* **username**: string (Required): The username for the private registry.

## ContainerGroupPropertiesInstanceView
### Properties
* **events**: [Event](#event)[] (ReadOnly): The events of this container group.
* **state**: string (ReadOnly): The state of the container group. Only valid in response.

## IpAddress
### Properties
* **ip**: string: The IP exposed to the public internet.
* **ports**: [Port](#port)[] (Required): The list of ports exposed on the container group.
* **type**: 'Public' (Required): Specifies if the IP is exposed to the public internet.

## Port
### Properties
* **port**: int (Required): The port number.
* **protocol**: 'TCP' | 'UDP': The protocol associated with the port.

## Volume
### Properties
* **azureFile**: [AzureFileVolume](#azurefilevolume): The properties of the Azure File volume. Azure File shares are mounted as volumes.
* **emptyDir**: any: Any object
* **gitRepo**: [GitRepoVolume](#gitrepovolume): Represents a volume that is populated with the contents of a git repository
* **name**: string (Required): The name of the volume.
* **secret**: [SecretVolume](#secretvolume): The secret volume.

## AzureFileVolume
### Properties
* **readOnly**: bool: The flag indicating whether the Azure File shared mounted as a volume is read-only.
* **shareName**: string (Required): The name of the Azure File share to be mounted as a volume.
* **storageAccountKey**: string: The storage account access key used to access the Azure File share.
* **storageAccountName**: string (Required): The name of the storage account that contains the Azure File share.

## GitRepoVolume
### Properties
* **directory**: string: Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
* **repository**: string (Required): Repository URL
* **revision**: string: Commit hash for the specified revision.

## SecretVolume
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

