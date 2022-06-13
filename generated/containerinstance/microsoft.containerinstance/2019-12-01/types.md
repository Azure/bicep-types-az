# Microsoft.ContainerInstance @ 2019-12-01

## Resource Microsoft.ContainerInstance/containerGroups@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ContainerGroupIdentity](#containergroupidentity): The identity of the container group, if configured.
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContainerGroupProperties](#containergroupproperties) (Required): The container group properties
* **tags**: [ResourceTags](#resourcetags): The resource tags.
* **type**: 'Microsoft.ContainerInstance/containerGroups' (ReadOnly, DeployTimeConstant): The resource type

## AzureFileVolume
### Properties
* **readOnly**: bool: The flag indicating whether the Azure File shared mounted as a volume is read-only.
* **shareName**: string (Required): The name of the Azure File share to be mounted as a volume.
* **storageAccountKey**: string: The storage account access key used to access the Azure File share.
* **storageAccountName**: string (Required): The name of the storage account that contains the Azure File share.

## Components10Wh5UdSchemasContainergroupidentityPropertiesUserassignedidentitiesAdditionalproperties
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

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

## ContainerGroupIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the container group identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the container group. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The type of identity used for the container group. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the container group.
* **userAssignedIdentities**: [ContainerGroupIdentityUserAssignedIdentities](#containergroupidentityuserassignedidentities): The list of user identities associated with the container group. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## ContainerGroupIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [Components10Wh5UdSchemasContainergroupidentityPropertiesUserassignedidentitiesAdditionalproperties](#components10wh5udschemascontainergroupidentitypropertiesuserassignedidentitiesadditionalproperties)

## ContainerGroupNetworkProfile
### Properties
* **id**: string (Required): The identifier for a network profile.

## ContainerGroupProperties
### Properties
* **containers**: [Container](#container)[] (Required): The containers within the container group.
* **diagnostics**: [ContainerGroupDiagnostics](#containergroupdiagnostics): The diagnostic information for a container group.
* **dnsConfig**: [DnsConfiguration](#dnsconfiguration): The DNS config information for a container group.
* **encryptionProperties**: [EncryptionProperties](#encryptionproperties): The encryption properties for a container group.
* **imageRegistryCredentials**: [ImageRegistryCredential](#imageregistrycredential)[]: The image registry credentials by which the container group is created from.
* **initContainers**: [InitContainerDefinition](#initcontainerdefinition)[]: The init containers for a container group.
* **instanceView**: [ContainerGroupPropertiesInstanceView](#containergrouppropertiesinstanceview) (ReadOnly): The instance view of the container group. Only valid in response.
* **ipAddress**: [IpAddress](#ipaddress): The IP address type of the container group.
* **networkProfile**: [ContainerGroupNetworkProfile](#containergroupnetworkprofile): The network profile information for a container group.
* **osType**: 'Linux' | 'Windows' | string (Required): The operating system type required by the containers in the container group.
* **provisioningState**: string (ReadOnly): The provisioning state of the container group. This only appears in the response.
* **restartPolicy**: 'Always' | 'Never' | 'OnFailure' | string: Restart policy for all containers within the container group. 
- `Always` Always restart
- `OnFailure` Restart on failure
- `Never` Never restart
* **sku**: 'Dedicated' | 'Standard' | string: The SKU for a container group.
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
* **detailStatus**: string (ReadOnly): The human-readable status of the container instance state.
* **exitCode**: int (ReadOnly): The container instance exit codes correspond to those from the `docker run` command.
* **finishTime**: string (ReadOnly): The date-time when the container instance state finished.
* **startTime**: string (ReadOnly): The date-time when the container instance state started.
* **state**: string (ReadOnly): The state of the container instance.

## DnsConfiguration
### Properties
* **nameServers**: string[] (Required): The DNS servers for the container group.
* **options**: string: The DNS options for the container group.
* **searchDomains**: string: The DNS search domains for hostname lookup in the container group.

## EncryptionProperties
### Properties
* **keyName**: string (Required): The encryption key name.
* **keyVersion**: string (Required): The encryption key version.
* **vaultBaseUrl**: string (Required): The keyvault base url.

## EnvironmentVariable
### Properties
* **name**: string (Required): The name of the environment variable.
* **secureValue**: string: The value of the secure environment variable.
* **value**: string: The value of the environment variable.

## Event
### Properties
* **count**: int (ReadOnly): The count of the event.
* **firstTimestamp**: string (ReadOnly): The date-time of the earliest logged event.
* **lastTimestamp**: string (ReadOnly): The date-time of the latest logged event.
* **message**: string (ReadOnly): The event message.
* **name**: string (ReadOnly): The event name.
* **type**: string (ReadOnly): The event type.

## GitRepoVolume
### Properties
* **directory**: string: Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
* **repository**: string (Required): Repository URL
* **revision**: string: Commit hash for the specified revision.

## GpuResource
### Properties
* **count**: int (Required): The count of the GPU resource.
* **sku**: 'K80' | 'P100' | 'V100' | string (Required): The SKU of the GPU resource.

## ImageRegistryCredential
### Properties
* **password**: string: The password for the private registry.
* **server**: string (Required): The Docker image registry server without a protocol such as "http" and "https".
* **username**: string (Required): The username for the private registry.

## InitContainerDefinition
### Properties
* **name**: string (Required): The name for the init container.
* **properties**: [InitContainerPropertiesDefinition](#initcontainerpropertiesdefinition) (Required): The properties for the init container.

## InitContainerPropertiesDefinition
### Properties
* **command**: string[]: The command to execute within the init container in exec form.
* **environmentVariables**: [EnvironmentVariable](#environmentvariable)[]: The environment variables to set in the init container.
* **image**: string: The image of the init container.
* **instanceView**: [InitContainerPropertiesDefinitionInstanceView](#initcontainerpropertiesdefinitioninstanceview) (ReadOnly): The instance view of the init container. Only valid in response.
* **volumeMounts**: [VolumeMount](#volumemount)[]: The volume mounts available to the init container.

## InitContainerPropertiesDefinitionInstanceView
### Properties
* **currentState**: [ContainerState](#containerstate) (ReadOnly): The current state of the init container.
* **events**: [Event](#event)[] (ReadOnly): The events of the init container.
* **previousState**: [ContainerState](#containerstate) (ReadOnly): The previous state of the init container.
* **restartCount**: int (ReadOnly): The number of times that the init container has been restarted.

## IpAddress
### Properties
* **dnsNameLabel**: string: The Dns name label for the IP.
* **fqdn**: string (ReadOnly): The FQDN for the IP.
* **ip**: string: The IP exposed to the public internet.
* **ports**: [Port](#port)[] (Required): The list of ports exposed on the container group.
* **type**: 'Private' | 'Public' | string (Required): Specifies if the IP is exposed to the public internet or private VNET.

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
* **gpu**: [GpuResource](#gpuresource): The GPU limit of this container instance.
* **memoryInGB**: int: The memory limit in GB of this container instance.

## ResourceRequests
### Properties
* **cpu**: int (Required): The CPU request of this container instance.
* **gpu**: [GpuResource](#gpuresource): The GPU request of this container instance.
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

