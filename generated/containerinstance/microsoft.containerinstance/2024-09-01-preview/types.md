# Microsoft.ContainerInstance @ 2024-09-01-preview

## Resource Microsoft.ContainerInstance/containerGroups@2024-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ContainerGroupIdentity](#containergroupidentity): The identity of the container group, if configured.
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContainerGroupPropertiesProperties](#containergrouppropertiesproperties) (Required): The container group properties
* **tags**: [ResourceTags](#resourcetags): The resource tags.
* **type**: 'Microsoft.ContainerInstance/containerGroups' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: The zones for the container group.

## Resource Microsoft.ContainerInstance/ngroups@2024-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [NGroupIdentity](#ngroupidentity): The identity of the nGroup, if configured.
* **location**: string: The resource location.
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-_a-zA-Z0-9]{0,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NGroupProperties](#ngroupproperties): Describes the properties of a Container Scale Set.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ResourceTags](#resourcetags): The resource tags.
* **type**: 'Microsoft.ContainerInstance/ngroups' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: The zones for the container group.

## ApiEntityReference
### Properties
* **id**: string: The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...

## AzureFileVolume
### Properties
* **readOnly**: bool: The flag indicating whether the Azure File shared mounted as a volume is read-only.
* **shareName**: string (Required): The name of the Azure File share to be mounted as a volume.
* **storageAccountKey**: string: The storage account access key used to access the Azure File share.
* **storageAccountName**: string (Required): The name of the storage account that contains the Azure File share.

## ConfidentialComputeProperties
### Properties
* **ccePolicy**: string: The base64 encoded confidential compute enforcement policy

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
* **userAssignedIdentities**: [ContainerGroupIdentityUserAssignedIdentities](#containergroupidentityuserassignedidentities): The list of user identities associated with the container group.

## ContainerGroupIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentities](#userassignedidentities)

## ContainerGroupProfileStub
### Properties
* **resource**: [ApiEntityReference](#apientityreference): The API entity reference.

## ContainerGroupPropertiesInstanceView
### Properties
* **events**: [Event](#event)[] (ReadOnly): The events of this container group.
* **state**: string (ReadOnly): The state of the container group. Only valid in response.

## ContainerGroupPropertiesProperties
### Properties
* **confidentialComputeProperties**: [ConfidentialComputeProperties](#confidentialcomputeproperties): The properties for confidential container group
* **containers**: [Container](#container)[] (Required): The containers within the container group.
* **diagnostics**: [ContainerGroupDiagnostics](#containergroupdiagnostics): The diagnostic information for a container group.
* **dnsConfig**: [DnsConfiguration](#dnsconfiguration): The DNS config information for a container group.
* **encryptionProperties**: [EncryptionProperties](#encryptionproperties): The encryption properties for a container group.
* **extensions**: [DeploymentExtensionSpec](#deploymentextensionspec)[]: extensions used by virtual kubelet
* **imageRegistryCredentials**: [ImageRegistryCredential](#imageregistrycredential)[]: The image registry credentials by which the container group is created from.
* **initContainers**: [InitContainerDefinition](#initcontainerdefinition)[]: The init containers for a container group.
* **instanceView**: [ContainerGroupPropertiesInstanceView](#containergrouppropertiesinstanceview) (ReadOnly): The instance view of the container group. Only valid in response.
* **ipAddress**: [IpAddress](#ipaddress): The IP address type of the container group.
* **osType**: 'Linux' | 'Windows' | string (Required): The operating system type required by the containers in the container group.
* **priority**: 'Regular' | 'Spot' | string: The priority of the container group.
* **provisioningState**: string (ReadOnly): The provisioning state of the container group. This only appears in the response.
* **restartPolicy**: 'Always' | 'Never' | 'OnFailure' | string: Restart policy for all containers within the container group. 
- `Always` Always restart
- `OnFailure` Restart on failure
- `Never` Never restart
* **sku**: 'Confidential' | 'Dedicated' | 'Standard' | string: The SKU for a container group.
* **subnetIds**: [ContainerGroupSubnetId](#containergroupsubnetid)[]: The subnet resource IDs for a container group.
* **volumes**: [Volume](#volume)[]: The list of volumes that can be mounted by containers in this container group.

## ContainerGroupSubnetId
### Properties
* **id**: string (Required): Resource ID of virtual network and subnet.
* **name**: string: Friendly name for the subnet.

## ContainerHttpGet
### Properties
* **httpHeaders**: [HttpHeader](#httpheader)[]: The HTTP headers.
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
* **securityContext**: [SecurityContextDefinition](#securitycontextdefinition): The container security properties.
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

## DeploymentExtensionSpec
### Properties
* **name**: string (Required): Name of the extension.
* **properties**: [DeploymentExtensionSpecProperties](#deploymentextensionspecproperties): Extension specific properties

## DeploymentExtensionSpecProperties
### Properties
* **extensionType**: string (Required): Type of extension to be added.
* **protectedSettings**: any: Protected settings for the extension.
* **settings**: any: Settings for the extension.
* **version**: string (Required): Version of the extension being used.

## DnsConfiguration
### Properties
* **nameServers**: string[] (Required): The DNS servers for the container group.
* **options**: string: The DNS options for the container group.
* **searchDomains**: string: The DNS search domains for hostname lookup in the container group.

## ElasticProfile
### Properties
* **desiredCount**: int

## EncryptionProperties
### Properties
* **identity**: string: The keyvault managed identity.
* **keyName**: string (Required): The encryption key name.
* **keyVersion**: string (Required): The encryption key version.
* **vaultBaseUrl**: string (Required): The keyvault base url.

## EnvironmentVariable
### Properties
* **name**: string (Required): The name of the environment variable.
* **secureValue**: string {sensitive}: The value of the secure environment variable.
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

## HttpHeader
### Properties
* **name**: string: The header name.
* **value**: string: The header value.

## ImageRegistryCredential
### Properties
* **identity**: string: The identity for the private registry.
* **identityUrl**: string: The identity URL for the private registry.
* **password**: string {sensitive}: The password for the private registry.
* **server**: string (Required): The Docker image registry server without a protocol such as "http" and "https".
* **username**: string: The username for the private registry.

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
* **securityContext**: [SecurityContextDefinition](#securitycontextdefinition): The container security properties.
* **volumeMounts**: [VolumeMount](#volumemount)[]: The volume mounts available to the init container.

## InitContainerPropertiesDefinitionInstanceView
### Properties
* **currentState**: [ContainerState](#containerstate) (ReadOnly): The current state of the init container.
* **events**: [Event](#event)[] (ReadOnly): The events of the init container.
* **previousState**: [ContainerState](#containerstate) (ReadOnly): The previous state of the init container.
* **restartCount**: int (ReadOnly): The number of times that the init container has been restarted.

## IpAddress
### Properties
* **autoGeneratedDomainNameLabelScope**: 'Noreuse' | 'ResourceGroupReuse' | 'SubscriptionReuse' | 'TenantReuse' | 'Unsecure' | string: The value representing the security enum. The 'Unsecure' value is the default value if not selected and means the object's domain name label is not secured against subdomain takeover. The 'TenantReuse' value is the default value if selected and means the object's domain name label can be reused within the same tenant. The 'SubscriptionReuse' value means the object's domain name label can be reused within the same subscription. The 'ResourceGroupReuse' value means the object's domain name label can be reused within the same resource group. The 'NoReuse' value means the object's domain name label cannot be reused within the same resource group, subscription, or tenant.
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
* **workspaceKey**: string {sensitive} (Required): The workspace key for log analytics
* **workspaceResourceId**: string {sensitive}: The workspace resource id for log analytics

## LogAnalyticsMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NGroupIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the nGroup identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the nGroup. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The type of identity used for the container scale set. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the nGroup.
* **userAssignedIdentities**: [NGroupIdentityUserAssignedIdentities](#ngroupidentityuserassignedidentities): The list of user identities associated with the container scale set. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## NGroupIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## NGroupProperties
### Properties
* **containerGroupProfiles**: [ContainerGroupProfileStub](#containergroupprofilestub)[]: The Container Group Profiles that could be used in a nGroup.
* **elasticProfile**: [ElasticProfile](#elasticprofile): The elastic profile.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state, which only appears in the response.

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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SecretVolume
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SecurityContextCapabilitiesDefinition
### Properties
* **add**: string[]: The capabilities to add to the container.
* **drop**: string[]: The capabilities to drop from the container.

## SecurityContextDefinition
### Properties
* **allowPrivilegeEscalation**: bool: A boolean value indicating whether the init process can elevate its privileges
* **capabilities**: [SecurityContextCapabilitiesDefinition](#securitycontextcapabilitiesdefinition): The capabilities to add or drop from a container.
* **privileged**: bool: The flag to determine if the container permissions is elevated to Privileged.
* **runAsGroup**: int: Sets the User GID for the container.
* **runAsUser**: int: Sets the User UID for the container.
* **seccompProfile**: string: a base64 encoded string containing the contents of the JSON in the seccomp profile

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## UserAssignedIdentities
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

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

