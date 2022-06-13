# Microsoft.HDInsight @ 2021-06-01

## Resource Microsoft.HDInsight/clusters@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The ETag for the resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ClusterIdentity](#clusteridentity): The identity of the cluster, if configured.
* **location**: string: The location of the cluster.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterCreateProperties](#clustercreateproperties): The cluster create parameters.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ClusterCreateParametersExtendedTags](#clustercreateparametersextendedtags): The resource tags.
* **type**: 'Microsoft.HDInsight/clusters' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: The availability zones.

## Resource Microsoft.HDInsight/clusters/applications@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The ETag for the application
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationProperties](#applicationproperties): The properties of the application.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ApplicationTags](#applicationtags): The tags for the application.
* **type**: 'Microsoft.HDInsight/clusters/applications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HDInsight/clusters/privateEndpointConnections@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (Required): The private endpoint connection properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.HDInsight/clusters/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Function listHosts (Microsoft.HDInsight/clusters@2021-06-01)
* **Resource**: Microsoft.HDInsight/clusters
* **ApiVersion**: 2021-06-01
* **Output**: [HostInfo](#hostinfo)[]

## ApplicationGetEndpoint
### Properties
* **destinationPort**: int: The destination port to connect to.
* **location**: string: The location of the endpoint.
* **privateIPAddress**: string: The private ip address of the endpoint.
* **publicPort**: int: The public port to connect to.

## ApplicationGetHttpsEndpoint
### Properties
* **accessModes**: string[]: The list of access modes for the application.
* **destinationPort**: int: The destination port to connect to.
* **disableGatewayAuth**: bool: The value indicates whether to disable GatewayAuth.
* **location**: string (ReadOnly): The location of the endpoint.
* **privateIPAddress**: string: The private ip address of the endpoint.
* **publicPort**: int (ReadOnly): The public port to connect to.
* **subDomainSuffix**: string (WriteOnly): The subdomain suffix of the application.

## ApplicationProperties
### Properties
* **applicationState**: string (ReadOnly): The application state.
* **applicationType**: string: The application type.
* **computeProfile**: [ComputeProfile](#computeprofile): The list of roles in the cluster.
* **createdDate**: string (ReadOnly): The application create date time.
* **errors**: [Errors](#errors)[]: The list of errors.
* **httpsEndpoints**: [ApplicationGetHttpsEndpoint](#applicationgethttpsendpoint)[]: The list of application HTTPS endpoints.
* **installScriptActions**: [RuntimeScriptAction](#runtimescriptaction)[]: The list of install script actions.
* **marketplaceIdentifier**: string (ReadOnly): The marketplace identifier.
* **privateLinkConfigurations**: [PrivateLinkConfiguration](#privatelinkconfiguration)[]: The private link configurations.
* **provisioningState**: string (ReadOnly): The provisioning state of the application.
* **sshEndpoints**: [ApplicationGetEndpoint](#applicationgetendpoint)[]: The list of application SSH endpoints.
* **uninstallScriptActions**: [RuntimeScriptAction](#runtimescriptaction)[]: The list of uninstall script actions.

## ApplicationTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Autoscale
### Properties
* **capacity**: [AutoscaleCapacity](#autoscalecapacity): Parameters for load-based autoscale
* **recurrence**: [AutoscaleRecurrence](#autoscalerecurrence): Parameters for schedule-based autoscale

## AutoscaleCapacity
### Properties
* **maxInstanceCount**: int: The maximum instance count of the cluster
* **minInstanceCount**: int: The minimum instance count of the cluster

## AutoscaleRecurrence
### Properties
* **schedule**: [AutoscaleSchedule](#autoscaleschedule)[]: Array of schedule-based autoscale rules
* **timeZone**: string: The time zone for the autoscale schedule times

## AutoscaleSchedule
### Properties
* **days**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string[]: Days of the week for a schedule-based autoscale rule
* **timeAndCapacity**: [AutoscaleTimeAndCapacity](#autoscaletimeandcapacity): Time and capacity for a schedule-based autoscale rule

## AutoscaleTimeAndCapacity
### Properties
* **maxInstanceCount**: int: The maximum instance count of the cluster
* **minInstanceCount**: int: The minimum instance count of the cluster
* **time**: string: 24-hour time in the form xx:xx

## ClientGroupInfo
### Properties
* **groupId**: string: The AAD security group id.
* **groupName**: string: The AAD security group name.

## ClusterCreateParametersExtendedTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ClusterCreateProperties
### Properties
* **clusterDefinition**: [ClusterDefinition](#clusterdefinition): The cluster definition.
* **clusterHdpVersion**: string (ReadOnly): The hdp version of the cluster.
* **clusterId**: string (ReadOnly): The cluster id.
* **clusterState**: string (ReadOnly): The state of the cluster.
* **clusterVersion**: string: The version of the cluster.
* **computeIsolationProperties**: [ComputeIsolationProperties](#computeisolationproperties): The compute isolation properties.
* **computeProfile**: [ComputeProfile](#computeprofile): The compute profile.
* **connectivityEndpoints**: [ConnectivityEndpoint](#connectivityendpoint)[] (ReadOnly): The list of connectivity endpoints.
* **createdDate**: string (ReadOnly): The date on which the cluster was created.
* **diskEncryptionProperties**: [DiskEncryptionProperties](#diskencryptionproperties): The disk encryption properties.
* **encryptionInTransitProperties**: [EncryptionInTransitProperties](#encryptionintransitproperties): The encryption-in-transit properties.
* **errors**: [Errors](#errors)[] (ReadOnly): The list of errors.
* **excludedServicesConfig**: [ExcludedServicesConfig](#excludedservicesconfig) (ReadOnly): The excluded services config.
* **kafkaRestProperties**: [KafkaRestProperties](#kafkarestproperties): The cluster kafka rest proxy configuration.
* **minSupportedTlsVersion**: string: The minimal supported tls version.
* **networkProperties**: [NetworkProperties](#networkproperties): The network properties.
* **osType**: 'Linux' | 'Windows' | string: The type of operating system.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The list of private endpoint connections.
* **privateLinkConfigurations**: [PrivateLinkConfiguration](#privatelinkconfiguration)[]: The private link configurations.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): The provisioning state, which only appears in the response.
* **quotaInfo**: [QuotaInfo](#quotainfo) (ReadOnly): The quota information.
* **securityProfile**: [SecurityProfile](#securityprofile): The security profile.
* **storageProfile**: [StorageProfile](#storageprofile): The storage profile.
* **tier**: 'Premium' | 'Standard' | string: The cluster tier.

## ClusterDefinition
### Properties
* **blueprint**: string: The link to the blueprint.
* **componentVersion**: [ClusterDefinitionComponentVersion](#clusterdefinitioncomponentversion): The versions of different services in the cluster.
* **configurations**: any: The cluster configurations.
* **kind**: string: The type of cluster.

## ClusterDefinitionComponentVersion
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ClusterIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of cluster identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the cluster. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' | string: The type of identity used for the cluster. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities.
* **userAssignedIdentities**: [ClusterIdentityUserAssignedIdentities](#clusteridentityuserassignedidentities): The list of user identities associated with the cluster. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## ClusterIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## ComputeIsolationProperties
### Properties
* **enableComputeIsolation**: bool: The flag indicates whether enable compute isolation or not.
* **hostSku**: string: The host sku.

## ComputeProfile
### Properties
* **roles**: [Role](#role)[]: The list of roles in the cluster.

## ConnectivityEndpoint
### Properties
* **location**: string (ReadOnly): The location of the endpoint.
* **name**: string (ReadOnly): The name of the endpoint.
* **port**: int (ReadOnly): The port to connect to.
* **privateIPAddress**: string (ReadOnly): The private ip address of the endpoint.
* **protocol**: string (ReadOnly): The protocol of the endpoint.

## DataDisksGroups
### Properties
* **diskSizeGB**: int (ReadOnly): ReadOnly. The DiskSize in GB. Do not set this value.
* **disksPerNode**: int: The number of disks per node.
* **storageAccountType**: string (ReadOnly): ReadOnly. The storage account type. Do not set this value.

## DiskEncryptionProperties
### Properties
* **encryptionAlgorithm**: 'RSA-OAEP' | 'RSA-OAEP-256' | 'RSA1_5' | string: Algorithm identifier for encryption, default RSA-OAEP.
* **encryptionAtHost**: bool: Indicates whether or not resource disk encryption is enabled.
* **keyName**: string: Key name that is used for enabling disk encryption.
* **keyVersion**: string: Specific key version that is used for enabling disk encryption.
* **msiResourceId**: string: Resource ID of Managed Identity that is used to access the key vault.
* **vaultUri**: string: Base key vault URI where the customers key is located eg. https://myvault.vault.azure.net

## EncryptionInTransitProperties
### Properties
* **isEncryptionInTransitEnabled**: bool: Indicates whether or not inter cluster node communication is encrypted in transit.

## Errors
### Properties
* **code**: string (ReadOnly): The error code.
* **message**: string (ReadOnly): The error message.

## ExcludedServicesConfig
### Properties
* **excludedServicesConfigId**: string (ReadOnly): The config id of excluded services.
* **excludedServicesList**: string (ReadOnly): The list of excluded services.

## HardwareProfile
### Properties
* **vmSize**: string: The size of the VM

## HostInfo
### Properties
* **effectiveDiskEncryptionKeyUrl**: string (ReadOnly): The effective disk encryption key URL used by the host
* **fqdn**: string (ReadOnly): The Fully Qualified Domain Name of host
* **name**: string (ReadOnly): The host name

## IPConfiguration
### Properties
* **id**: string (ReadOnly): The private link IP configuration id.
* **name**: string (Required): The name of private link IP configuration.
* **properties**: [IPConfigurationProperties](#ipconfigurationproperties): The private link ip configuration properties.
* **type**: string (ReadOnly): The type of the private link IP configuration.

## IPConfigurationProperties
### Properties
* **primary**: bool: Indicates whether this IP configuration is primary for the corresponding NIC.
* **privateIPAddress**: string: The IP address.
* **privateIPAllocationMethod**: 'dynamic' | 'static' | string: The method that private IP address is allocated.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): The private link configuration provisioning state, which only appears in the response.
* **subnet**: [ResourceId](#resourceid): The subnet resource id.

## KafkaRestProperties
### Properties
* **clientGroupInfo**: [ClientGroupInfo](#clientgroupinfo): The information of AAD security group.
* **configurationOverride**: [KafkaRestPropertiesConfigurationOverride](#kafkarestpropertiesconfigurationoverride): The configurations that need to be overriden.

## KafkaRestPropertiesConfigurationOverride
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LinuxOperatingSystemProfile
### Properties
* **password**: string: The password.
* **sshProfile**: [SshProfile](#sshprofile): The SSH profile.
* **username**: string: The username.

## NetworkProperties
### Properties
* **privateLink**: 'Disabled' | 'Enabled' | string: Indicates whether or not private link is enabled.
* **resourceProviderConnection**: 'Inbound' | 'Outbound' | string: The direction for the resource provider connection.

## OsProfile
### Properties
* **linuxOperatingSystemProfile**: [LinuxOperatingSystemProfile](#linuxoperatingsystemprofile): The Linux OS profile.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The private endpoint id.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (ReadOnly): The private endpoint connection properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **linkIdentifier**: string (ReadOnly): The link identifier.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint) (ReadOnly): The private endpoint of the private endpoint connection
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (ReadOnly): The private link service connection state.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state, which only appears in the response.

## PrivateLinkConfiguration
### Properties
* **id**: string (ReadOnly): The private link configuration id.
* **name**: string (Required): The name of private link configuration.
* **properties**: [PrivateLinkConfigurationProperties](#privatelinkconfigurationproperties) (Required): The private link configuration properties.
* **type**: string (ReadOnly): The type of the private link configuration.

## PrivateLinkConfigurationProperties
### Properties
* **groupId**: string (Required): The HDInsight private linkable sub-resource name to apply the private link configuration to. For example, 'headnode', 'gateway', 'edgenode'.
* **ipConfigurations**: [IPConfiguration](#ipconfiguration)[] (Required): The IP configurations for the private link service.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): The private link configuration provisioning state, which only appears in the response.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string (ReadOnly): Whether there is further actions.
* **description**: string (ReadOnly): The optional description of the status.
* **status**: 'Approved' | 'Pending' | 'Rejected' | 'Removed' | string (ReadOnly): The concrete private link service connection.

## QuotaInfo
### Properties
* **coresUsed**: int (ReadOnly): The cores used by the cluster.

## ResourceId
### Properties
* **id**: string: The azure resource id.

## Role
### Properties
* **autoscale**: [Autoscale](#autoscale): The autoscale configurations.
* **dataDisksGroups**: [DataDisksGroups](#datadisksgroups)[]: The data disks groups for the role.
* **encryptDataDisks**: bool: Indicates whether encrypt the data disks.
* **hardwareProfile**: [HardwareProfile](#hardwareprofile): The hardware profile.
* **minInstanceCount**: int: The minimum instance count of the cluster.
* **name**: string: The name of the role.
* **osProfile**: [OsProfile](#osprofile): The operating system profile.
* **scriptActions**: [ScriptAction](#scriptaction)[]: The list of script actions on the role.
* **targetInstanceCount**: int: The instance count of the cluster.
* **virtualNetworkProfile**: [VirtualNetworkProfile](#virtualnetworkprofile): The virtual network profile.
* **VMGroupName**: string: The name of the virtual machine group.

## RuntimeScriptAction
### Properties
* **applicationName**: string (ReadOnly): The application name of the script action, if any.
* **name**: string (Required): The name of the script action.
* **parameters**: string (WriteOnly): The parameters for the script
* **roles**: string[] (Required): The list of roles where script will be executed.
* **uri**: string (Required): The URI to the script.

## ScriptAction
### Properties
* **name**: string (Required): The name of the script action.
* **parameters**: string (Required): The parameters for the script provided.
* **uri**: string (Required): The URI to the script.

## SecurityProfile
### Properties
* **aaddsResourceId**: string: The resource ID of the user's Azure Active Directory Domain Service.
* **clusterUsersGroupDNs**: string[]: Optional. The Distinguished Names for cluster user groups
* **directoryType**: 'ActiveDirectory' | string: The directory type.
* **domain**: string: The organization's active directory domain.
* **domainUsername**: string: The domain user account that will have admin privileges on the cluster.
* **domainUserPassword**: string: The domain admin password.
* **ldapsUrls**: string[]: The LDAPS protocol URLs to communicate with the Active Directory.
* **msiResourceId**: string: User assigned identity that has permissions to read and create cluster-related artifacts in the user's AADDS.
* **organizationalUnitDN**: string: The organizational unit within the Active Directory to place the cluster and service accounts.

## SshProfile
### Properties
* **publicKeys**: [SshPublicKey](#sshpublickey)[]: The list of SSH public keys.

## SshPublicKey
### Properties
* **certificateData**: string: The certificate for SSH.

## StorageAccount
### Properties
* **container**: string: The container in the storage account, only to be specified for WASB storage accounts.
* **fileshare**: string: The file share name.
* **fileSystem**: string: The filesystem, only to be specified for Azure Data Lake Storage Gen 2.
* **isDefault**: bool: Whether or not the storage account is the default storage account.
* **key**: string: The storage account access key.
* **msiResourceId**: string: The managed identity (MSI) that is allowed to access the storage account, only to be specified for Azure Data Lake Storage Gen 2.
* **name**: string: The name of the storage account.
* **resourceId**: string: The resource ID of storage account, only to be specified for Azure Data Lake Storage Gen 2.
* **saskey**: string: The shared access signature key.

## StorageProfile
### Properties
* **storageaccounts**: [StorageAccount](#storageaccount)[]: The list of storage accounts in the cluster.

## SystemData
### Properties
* **createdAt**: string (ReadOnly): The timestamp of resource creation (UTC).
* **createdBy**: string (ReadOnly): The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string (ReadOnly): The type of identity that created the resource.
* **lastModifiedAt**: string (ReadOnly): The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string (ReadOnly): The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string (ReadOnly): The type of identity that last modified the resource.

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.
* **tenantId**: string: The tenant id of user assigned identity.

## VirtualNetworkProfile
### Properties
* **id**: string: The ID of the virtual network.
* **subnet**: string: The name of the subnet.

