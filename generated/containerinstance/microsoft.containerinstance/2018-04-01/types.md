# Microsoft.ContainerInstance @ 2018-04-01

## Resource Microsoft.ContainerInstance/containerGroups@2018-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:13_properties](#schemas13properties) (Required):
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The resource tags.
* **type**: 'Microsoft.ContainerInstance/containerGroups' (ReadOnly, DeployTimeConstant): The resource type

## schemas:13_properties
### Properties
* **containers**: [Container](#container)[] (Required): The containers within the container group.
* **imageRegistryCredentials**: [ImageRegistryCredential](#imageregistrycredential)[]: The image registry credentials by which the container group is created from.
* **instanceView**: [schemas:13_properties_instanceView](#schemas13propertiesinstanceview) (ReadOnly): The instance view of the container group. Only valid in response.
* **ipAddress**: [IpAddress](#ipaddress): IP address for the container group.
* **osType**: 'Linux' | 'Windows' (Required): The operating system type required by the containers in the container group. Possible values include: 'Windows', 'Linux'
* **provisioningState**: string (ReadOnly): The provisioning state of the container group. This only appears in the response.
* **restartPolicy**: 'Always' | 'Never' | 'OnFailure': Restart policy for all containers within the container group.
- `Always` Always restart
- `OnFailure` Restart on failure
- `Never` Never restart
. Possible values include: 'Always', 'OnFailure', 'Never'
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
* **instanceView**: [schemas:1_instanceView](#schemas1instanceview) (ReadOnly): The instance view of the container instance. Only valid in response.
* **ports**: [ContainerPort](#containerport)[]: The exposed ports on the container instance.
* **resources**: [ResourceRequirements](#resourcerequirements) (Required): The resource requirements.
* **volumeMounts**: [VolumeMount](#volumemount)[]: The volume mounts available to the container instance.

## EnvironmentVariable
### Properties
* **name**: string (Required): The name of the environment variable.
* **value**: string (Required): The value of the environment variable.

## schemas:1_instanceView
### Properties
* **currentState**: [ContainerState](#containerstate) (ReadOnly): The container instance state.
* **events**: [Event](#event)[] (ReadOnly): The events of the container instance.
* **previousState**: [ContainerState](#containerstate) (ReadOnly): The container instance state.
* **restartCount**: int (ReadOnly): The number of times that the container instance has been restarted.

## ContainerState
### Properties
* **detailStatus**: string (ReadOnly): The human-readable status of the container instance state.
* **exitCode**: int (ReadOnly): The container instance exit codes correspond to those from the `docker run` command.
* **finishTime**: string (ReadOnly): The date-time when the container instance state finished.
* **startTime**: string (ReadOnly): The date-time when the container instance state started.
* **state**: string (ReadOnly): The state of the container instance.

## Event
### Properties
* **count**: int (ReadOnly): The count of the event.
* **firstTimestamp**: string (ReadOnly): The date-time of the earliest logged event.
* **lastTimestamp**: string (ReadOnly): The date-time of the latest logged event.
* **message**: string (ReadOnly): The event message.
* **name**: string (ReadOnly): The event name.
* **type**: string (ReadOnly): The event type.

## ContainerPort
### Properties
* **port**: int (Required): The port number exposed within the container group.
* **protocol**: 'TCP' | 'UDP': The protocol associated with the port. Possible values include: 'TCP', 'UDP'

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

## schemas:13_properties_instanceView
### Properties
* **events**: [Event](#event)[] (ReadOnly): The events of this container group.
* **state**: string (ReadOnly): The state of the container group. Only valid in response.

## IpAddress
### Properties
* **dnsNameLabel**: string: The Dns name label for the IP.
* **fqdn**: string (ReadOnly): The FQDN for the IP.
* **ip**: string: The IP exposed to the public internet.
* **ports**: [Port](#port)[] (Required): The list of ports exposed on the container group.
* **type**: string (Required): Specifies if the IP is exposed to the public internet.

## Port
### Properties
* **port**: int (Required): The port number.
* **protocol**: 'TCP' | 'UDP': The protocol associated with the port. Possible values include: 'TCP', 'UDP'

## Volume
### Properties
* **azureFile**: [AzureFileVolume](#azurefilevolume): The properties of the Azure File volume. Azure File shares are mounted as volumes.
* **emptyDir**: any: The empty directory volume.
* **gitRepo**: [GitRepoVolume](#gitrepovolume): Represents a volume that is populated with the contents of a git repository
* **name**: string (Required): The name of the volume.
* **secret**: [Dictionary<string,String>](#dictionarystringstring): The secret volume.

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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

