# Microsoft.ContainerInstance @ 2018-09-01

## Resource Microsoft.ContainerInstance/containerGroups@2018-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContainerGroupProperties](#containergroupproperties) (Required)
* **tags**: [ResourceTags](#resourcetags): The resource tags.
* **type**: 'Microsoft.ContainerInstance/containerGroups' (ReadOnly, DeployTimeConstant): The resource type

## AzureFileVolume
### Properties
* **readOnly**: bool: The flag indicating whether the Azure File shared mounted as a volume is read-only.
* **shareName**: string (Required): The name of the Azure File share to be mounted as a volume.
* **storageAccountKey**: string: The storage account access key used to access the Azure File share.
* **storageAccountName**: string (Required): The name of the storage account that contains the Azure File share.

## Container
### Properties
* **name**: string (Required): The user-provided name of the container instance.
* **properties**: [ContainerProperties](#containerproperties) (Required): The properties of the container instance.

## ContainerExec
### Properties
* **command**: string[]: The commands to execute within the container.

## ContainerGroupDiagnostics
### Properties
* **logAnalytics**: [LogAnalytics](#loganalytics): Container group log analytics information.

## ContainerGroupNetworkProfile
### Properties
* **id**: string (Required): The identifier for a network profile.

## ContainerGroupProperties
### Properties
* **containers**: [Container](#container)[] (Required): The containers within the container group.
* **diagnostics**: [ContainerGroupDiagnostics](#containergroupdiagnostics): The diagnostic information for a container group.
* **imageRegistryCredentials**: [ImageRegistryCredential](#imageregistrycredential)[]: The image registry credentials by which the container group is created from.
* **instanceView**: [ContainerGroupPropertiesInstanceView](#containergrouppropertiesinstanceview) (ReadOnly): The instance view of the container group. Only valid in response.
* **ipAddress**: [IpAddress](#ipaddress): The IP address type of the container group.
* **networkProfile**: [ContainerGroupNetworkProfile](#containergroupnetworkprofile): The network profile information for a container group.
* **osType**: 'Linux' | 'Windows' | string (Required): The operating system type required by the containers in the container group.
* **provisioningState**: string (ReadOnly): The provisioning state of the container group. This only appears in the response.
* **restartPolicy**: 'Always' | 'Never' | 'OnFailure' | string: Restart policy for all containers within the container group. 
- `Always` Always restart
- `OnFailure` Restart on failure
- `Never` Never restart
* **volumes**: [Volume](#volume)[]: The list of volumes that can be mounted by containers in this container group.

## ContainerGroupPropertiesInstanceView
### Properties
* **events**: [Event](#event)[] (ReadOnly): The events of this container group.
* **state**: string (ReadOnly): The state of the container group. Only valid in response.

## ContainerHttpGet
### Properties
* **path**: string: The path to probe.
* **port**: int (Required): The port number to probe.
* **scheme**: 'http' | 'https' | string: The scheme.

## ContainerPort
### Properties
* **port**: int (Required): The port number exposed within the container group.
* **protocol**: 'TCP' | 'UDP' | string: The protocol associated with the port.

## ContainerProbe
### Properties
* **exec**: [ContainerExec](#containerexec): The execution command to probe
* **failureThreshold**: int: The failure threshold.
* **httpGet**: [ContainerHttpGet](#containerhttpget): The Http Get settings to probe
* **initialDelaySeconds**: int: The initial delay seconds.
* **periodSeconds**: int: The period seconds.
* **successThreshold**: int: The success threshold.
* **timeoutSeconds**: int: The timeout seconds.

## ContainerProperties
### Properties
* **command**: string[]: The commands to execute within the container instance in exec form.
* **environmentVariables**: [EnvironmentVariable](#environmentvariable)[]: The environment variables to set in the container instance.
* **image**: string (Required): The name of the image used to create the container instance.
* **instanceView**: [ContainerPropertiesInstanceView](#containerpropertiesinstanceview) (ReadOnly): The instance view of the container instance. Only valid in response.
* **livenessProbe**: [ContainerProbe](#containerprobe): The liveness probe.
* **ports**: [ContainerPort](#containerport)[]: The exposed ports on the container instance.
* **readinessProbe**: [ContainerProbe](#containerprobe): The readiness probe.
* **resources**: [ResourceRequirements](#resourcerequirements) (Required): The resource requirements of the container instance.
* **volumeMounts**: [VolumeMount](#volumemount)[]: The volume mounts available to the container instance.

## ContainerPropertiesInstanceView
### Properties
* **currentState**: [ContainerState](#containerstate) (ReadOnly): Current container instance state.
* **events**: [Event](#event)[] (ReadOnly): The events of the container instance.
* **previousState**: [ContainerState](#containerstate) (ReadOnly): Previous container instance state.
* **restartCount**: int (ReadOnly): The number of times that the container instance has been restarted.

## ContainerState
### Properties
* **detailStatus**: string: The human-readable status of the container instance state.
* **exitCode**: int: The container instance exit codes correspond to those from the `docker run` command.
* **finishTime**: string: The date-time when the container instance state finished.
* **startTime**: string: The date-time when the container instance state started.
* **state**: string: The state of the container instance.

## EnvironmentVariable
### Properties
* **name**: string (Required): The name of the environment variable.
* **secureValue**: string: The value of the secure environment variable.
* **value**: string: The value of the environment variable.

## Event
### Properties
* **count**: int: The count of the event.
* **firstTimestamp**: string: The date-time of the earliest logged event.
* **lastTimestamp**: string: The date-time of the latest logged event.
* **message**: string: The event message.
* **name**: string: The event name.
* **type**: string: The event type.

## GitRepoVolume
### Properties
* **directory**: string: Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
* **repository**: string (Required): Repository URL
* **revision**: string: Commit hash for the specified revision.

## ImageRegistryCredential
### Properties
* **password**: string: The password for the private registry.
* **server**: string (Required): The Docker image registry server without a protocol such as "http" and "https".
* **username**: string (Required): The username for the private registry.

## IpAddress
### Properties
* **dnsNameLabel**: string: The Dns name label for the IP.
* **fqdn**: string (ReadOnly): The FQDN for the IP.
* **ip**: string: The IP exposed to the public internet.
* **ports**: [Port](#port)[] (Required): The list of ports exposed on the container group.
* **type**: 'Private' | 'Public' | string (Required): Specifies if the IP is exposed to the public internet.

## LogAnalytics
### Properties
* **logType**: 'ContainerInsights' | 'ContainerInstanceLogs' | string: The log type to be used.
* **metadata**: [LogAnalyticsMetadata](#loganalyticsmetadata): Metadata for log analytics.
* **workspaceId**: string (Required): The workspace id for log analytics
* **workspaceKey**: string (Required): The workspace key for log analytics

## LogAnalyticsMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Port
### Properties
* **port**: int (Required): The port number.
* **protocol**: 'TCP' | 'UDP' | string: The protocol associated with the port.

## ResourceLimits
### Properties
* **cpu**: int: The CPU limit of this container instance.
* **memoryInGB**: int: The memory limit in GB of this container instance.

## ResourceRequests
### Properties
* **cpu**: int (Required): The CPU request of this container instance.
* **memoryInGB**: int (Required): The memory request in GB of this container instance.

## ResourceRequirements
### Properties
* **limits**: [ResourceLimits](#resourcelimits): The resource limits of this container instance.
* **requests**: [ResourceRequests](#resourcerequests) (Required): The resource requests of this container instance.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SecretVolume
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Volume
### Properties
* **azureFile**: [AzureFileVolume](#azurefilevolume): The Azure File volume.
* **emptyDir**: any: The empty directory volume.
* **gitRepo**: [GitRepoVolume](#gitrepovolume): The git repo volume.
* **name**: string (Required): The name of the volume.
* **secret**: [SecretVolume](#secretvolume): The secret volume.

## VolumeMount
### Properties
* **mountPath**: string (Required): The path within the container where the volume should be mounted. Must not contain colon (:).
* **name**: string (Required): The name of the volume mount.
* **readOnly**: bool: The flag indicating whether the volume mount is read-only.

