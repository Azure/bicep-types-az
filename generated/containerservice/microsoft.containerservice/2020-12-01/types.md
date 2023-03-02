# Microsoft.ContainerService @ 2020-12-01

## Resource Microsoft.ContainerService/managedClusters@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedClusterIdentity](#managedclusteridentity): The identity of the managed cluster, if configured.
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedClusterProperties](#managedclusterproperties): Properties of a managed cluster.
* **sku**: [ManagedClusterSKU](#managedclustersku): The managed cluster SKU.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.ContainerService/managedClusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/agentPools@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedClusterAgentPoolProfileProperties](#managedclusteragentpoolprofileproperties): Properties of an agent pool.
* **type**: 'Microsoft.ContainerService/managedClusters/agentPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/maintenanceConfigurations@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MaintenanceConfigurationProperties](#maintenanceconfigurationproperties): Properties of a default maintenance configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.ContainerService/managedClusters/maintenanceConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/privateEndpointConnections@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): The properties of a private endpoint connection.
* **type**: 'Microsoft.ContainerService/managedClusters/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Function listClusterAdminCredential (Microsoft.ContainerService/managedClusters@2020-12-01)
* **Resource**: Microsoft.ContainerService/managedClusters
* **ApiVersion**: 2020-12-01
* **Output**: [CredentialResults](#credentialresults)

## Function listClusterMonitoringUserCredential (Microsoft.ContainerService/managedClusters@2020-12-01)
* **Resource**: Microsoft.ContainerService/managedClusters
* **ApiVersion**: 2020-12-01
* **Output**: [CredentialResults](#credentialresults)

## Function listClusterUserCredential (Microsoft.ContainerService/managedClusters@2020-12-01)
* **Resource**: Microsoft.ContainerService/managedClusters
* **ApiVersion**: 2020-12-01
* **Output**: [CredentialResults](#credentialresults)

## Function listCredential (Microsoft.ContainerService/managedClusters/accessProfiles@2020-12-01)
* **Resource**: Microsoft.ContainerService/managedClusters/accessProfiles
* **ApiVersion**: 2020-12-01
* **Output**: [ManagedClusterAccessProfile](#managedclusteraccessprofile)

## AccessProfile
### Properties
* **kubeConfig**: any: Base64-encoded Kubernetes configuration file.

## AgentPoolUpgradeSettings
### Properties
* **maxSurge**: string: Count or percentage of additional nodes to be added during upgrade. If empty uses AKS default

## CloudError
### Properties
* **error**: [CloudErrorBody](#clouderrorbody): Details about the error.

## CloudErrorBody
### Properties
* **code**: string: An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
* **details**: [CloudErrorBody](#clouderrorbody)[]: A list of additional details about the error.
* **message**: string: A message describing the error, intended to be suitable for display in a user interface.
* **target**: string: The target of the particular error. For example, the name of the property in error.

## Components1Umhcm8SchemasManagedclusteridentityPropertiesUserassignedidentitiesAdditionalproperties
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## ComponentsQit0EtSchemasManagedclusterpropertiesPropertiesIdentityprofileAdditionalproperties
### Properties
* **clientId**: string: The client id of the user assigned identity.
* **objectId**: string: The object id of the user assigned identity.
* **resourceId**: string: The resource id of the user assigned identity.

## ContainerServiceLinuxProfile
### Properties
* **adminUsername**: string (Required): The administrator username to use for Linux VMs.
* **ssh**: [ContainerServiceSshConfiguration](#containerservicesshconfiguration) (Required): SSH configuration for Linux-based VMs running on Azure.

## ContainerServiceNetworkProfile
### Properties
* **dnsServiceIP**: string: An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
* **dockerBridgeCidr**: string: A CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the Kubernetes service address range.
* **loadBalancerProfile**: [ManagedClusterLoadBalancerProfile](#managedclusterloadbalancerprofile): Profile of the cluster load balancer.
* **loadBalancerSku**: 'basic' | 'standard' | string: The load balancer sku for the managed cluster.
* **networkMode**: 'bridge' | 'transparent' | string: Network mode used for building Kubernetes network.
* **networkPlugin**: 'azure' | 'kubenet' | string: Network plugin used for building Kubernetes network.
* **networkPolicy**: 'azure' | 'calico' | string: Network policy used for building Kubernetes network.
* **outboundType**: 'loadBalancer' | 'userDefinedRouting' | string: The outbound (egress) routing method.
* **podCidr**: string: A CIDR notation IP range from which to assign pod IPs when kubenet is used.
* **serviceCidr**: string: A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.

## ContainerServiceSshConfiguration
### Properties
* **publicKeys**: [ContainerServiceSshPublicKey](#containerservicesshpublickey)[] (Required): The list of SSH public keys used to authenticate with Linux-based VMs. Only expect one key specified.

## ContainerServiceSshPublicKey
### Properties
* **keyData**: string (Required): Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.

## CredentialResult
### Properties
* **name**: string (ReadOnly): The name of the credential.
* **value**: any (ReadOnly): Base64-encoded Kubernetes configuration file.

## CredentialResults
### Properties
* **kubeconfigs**: [CredentialResult](#credentialresult)[] (ReadOnly): Base64-encoded Kubernetes configuration file.

## CredentialResults
### Properties
* **kubeconfigs**: [CredentialResult](#credentialresult)[] (ReadOnly): Base64-encoded Kubernetes configuration file.

## CredentialResults
### Properties
* **kubeconfigs**: [CredentialResult](#credentialresult)[] (ReadOnly): Base64-encoded Kubernetes configuration file.

## KubeletConfig
### Properties
* **allowedUnsafeSysctls**: string[]: Allowlist of unsafe sysctls or unsafe sysctl patterns (ending in `*`).
* **containerLogMaxFiles**: int: The maximum number of container log files that can be present for a container. The number must be ≥ 2.
* **containerLogMaxSizeMB**: int: The maximum size (e.g. 10Mi) of container log file before it is rotated.
* **cpuCfsQuota**: bool: Enable CPU CFS quota enforcement for containers that specify CPU limits.
* **cpuCfsQuotaPeriod**: string: Sets CPU CFS quota period value.
* **cpuManagerPolicy**: string: CPU Manager policy to use.
* **failSwapOn**: bool: If set to true it will make the Kubelet fail to start if swap is enabled on the node.
* **imageGcHighThreshold**: int: The percent of disk usage after which image garbage collection is always run.
* **imageGcLowThreshold**: int: The percent of disk usage before which image garbage collection is never run.
* **podMaxPids**: int: The maximum number of processes per pod.
* **topologyManagerPolicy**: string: Topology Manager policy to use.

## LinuxOSConfig
### Properties
* **swapFileSizeMB**: int: SwapFileSizeMB specifies size in MB of a swap file will be created on each node.
* **sysctls**: [SysctlConfig](#sysctlconfig): Sysctl settings for Linux agent nodes.
* **transparentHugePageDefrag**: string: Transparent Huge Page defrag configuration.
* **transparentHugePageEnabled**: string: Transparent Huge Page enabled configuration.

## MaintenanceConfigurationProperties
### Properties
* **notAllowedTime**: [TimeSpan](#timespan)[]: Time slots on which upgrade is not allowed.
* **timeInWeek**: [TimeInWeek](#timeinweek)[]: Weekday time slots allowed to upgrade.

## ManagedClusterAADProfile
### Properties
* **adminGroupObjectIDs**: string[]: AAD group object IDs that will have admin role of the cluster.
* **clientAppID**: string: The client AAD application ID.
* **enableAzureRBAC**: bool: Whether to enable Azure RBAC for Kubernetes authorization.
* **managed**: bool: Whether to enable managed AAD.
* **serverAppID**: string: The server AAD application ID.
* **serverAppSecret**: string: The server AAD application secret.
* **tenantID**: string: The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.

## ManagedClusterAccessProfile
### Properties
* **id**: string (ReadOnly): Resource Id
* **location**: string (Required): Resource location
* **name**: string (ReadOnly): Resource name
* **properties**: [AccessProfile](#accessprofile): AccessProfile of a managed cluster.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string (ReadOnly): Resource type

## ManagedClusterAddonProfile
### Properties
* **config**: [ManagedClusterAddonProfileConfig](#managedclusteraddonprofileconfig): Key-value pairs for configuring an add-on.
* **enabled**: bool (Required): Whether the add-on is enabled or not.
* **identity**: [ManagedClusterAddonProfileIdentity](#managedclusteraddonprofileidentity) (ReadOnly): Information of user assigned identity used by this add-on.

## ManagedClusterAddonProfileConfig
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedClusterAddonProfileIdentity
### Properties
* **clientId**: string: The client id of the user assigned identity.
* **objectId**: string: The object id of the user assigned identity.
* **resourceId**: string: The resource id of the user assigned identity.

## ManagedClusterAgentPoolProfile
### Properties
* **availabilityZones**: string[]: Availability zones for nodes. Must use VirtualMachineScaleSets AgentPoolType.
* **count**: int: Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 100 (inclusive) for user pools and in the range of 1 to 100 (inclusive) for system pools. The default value is 1.
* **enableAutoScaling**: bool: Whether to enable auto-scaler
* **enableEncryptionAtHost**: bool: Whether to enable EncryptionAtHost
* **enableNodePublicIP**: bool: Enable public IP for nodes
* **kubeletConfig**: [KubeletConfig](#kubeletconfig): KubeletConfig specifies the configuration of kubelet on agent nodes.
* **kubeletDiskType**: 'OS' | string: KubeletDiskType determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage. Currently allows one value, OS, resulting in Kubelet using the OS disk for data.
* **linuxOSConfig**: [LinuxOSConfig](#linuxosconfig): LinuxOSConfig specifies the OS configuration of linux agent nodes.
* **maxCount**: int: Maximum number of nodes for auto-scaling
* **maxPods**: int: Maximum number of pods that can run on a node.
* **minCount**: int: Minimum number of nodes for auto-scaling
* **mode**: 'System' | 'User' | string: AgentPoolMode represents mode of an agent pool
* **name**: string (Required): Unique name of the agent pool profile in the context of the subscription and resource group.
* **nodeImageVersion**: string (ReadOnly): Version of node image
* **nodeLabels**: [ManagedClusterAgentPoolProfilePropertiesNodeLabels](#managedclusteragentpoolprofilepropertiesnodelabels): Agent pool node labels to be persisted across all nodes in agent pool.
* **nodeTaints**: string[]: Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
* **orchestratorVersion**: string: Version of orchestrator specified when creating the managed cluster.
* **osDiskSizeGB**: int: OS Disk Size in GB to be used to specify the disk size for every machine in this master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
* **osDiskType**: 'Ephemeral' | 'Managed' | string: OS disk type to be used for machines in a given agent pool. Allowed values are 'Ephemeral' and 'Managed'. If unspecified, defaults to 'Ephemeral' when the VM supports ephemeral OS and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation.
* **osType**: 'Linux' | 'Windows' | string: OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
* **podSubnetID**: string: Pod SubnetID specifies the VNet's subnet identifier for pods.
* **powerState**: [PowerState](#powerstate) (ReadOnly): Describes whether the Agent Pool is Running or Stopped
* **provisioningState**: string (ReadOnly): The current deployment or provisioning state, which only appears in the response.
* **proximityPlacementGroupID**: string: The ID for Proximity Placement Group.
* **scaleSetEvictionPolicy**: 'Deallocate' | 'Delete' | string: ScaleSetEvictionPolicy to be used to specify eviction policy for Spot virtual machine scale set. Default to Delete.
* **scaleSetPriority**: 'Regular' | 'Spot' | string: ScaleSetPriority to be used to specify virtual machine scale set priority. Default to regular.
* **spotMaxPrice**: int: SpotMaxPrice to be used to specify the maximum price you are willing to pay in US Dollars. Possible values are any decimal value greater than zero or -1 which indicates default price to be up-to on-demand.
* **tags**: [ManagedClusterAgentPoolProfilePropertiesTags](#managedclusteragentpoolprofilepropertiestags): Agent pool tags to be persisted on the agent pool virtual machine scale set.
* **type**: 'AvailabilitySet' | 'VirtualMachineScaleSets' | string: AgentPoolType represents types of an agent pool
* **upgradeSettings**: [AgentPoolUpgradeSettings](#agentpoolupgradesettings): Settings for upgrading the agentpool
* **vmSize**: 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A1_v2' | 'Standard_A2' | 'Standard_A2_v2' | 'Standard_A2m_v2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A4_v2' | 'Standard_A4m_v2' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A8_v2' | 'Standard_A8m_v2' | 'Standard_A9' | 'Standard_B2ms' | 'Standard_B2s' | 'Standard_B4ms' | 'Standard_B8ms' | 'Standard_D1' | 'Standard_D11' | 'Standard_D11_v2' | 'Standard_D11_v2_Promo' | 'Standard_D12' | 'Standard_D12_v2' | 'Standard_D12_v2_Promo' | 'Standard_D13' | 'Standard_D13_v2' | 'Standard_D13_v2_Promo' | 'Standard_D14' | 'Standard_D14_v2' | 'Standard_D14_v2_Promo' | 'Standard_D15_v2' | 'Standard_D16_v3' | 'Standard_D16s_v3' | 'Standard_D1_v2' | 'Standard_D2' | 'Standard_D2_v2' | 'Standard_D2_v2_Promo' | 'Standard_D2_v3' | 'Standard_D2s_v3' | 'Standard_D3' | 'Standard_D32_v3' | 'Standard_D32s_v3' | 'Standard_D3_v2' | 'Standard_D3_v2_Promo' | 'Standard_D4' | 'Standard_D4_v2' | 'Standard_D4_v2_Promo' | 'Standard_D4_v3' | 'Standard_D4s_v3' | 'Standard_D5_v2' | 'Standard_D5_v2_Promo' | 'Standard_D64_v3' | 'Standard_D64s_v3' | 'Standard_D8_v3' | 'Standard_D8s_v3' | 'Standard_DS1' | 'Standard_DS11' | 'Standard_DS11_v2' | 'Standard_DS11_v2_Promo' | 'Standard_DS12' | 'Standard_DS12_v2' | 'Standard_DS12_v2_Promo' | 'Standard_DS13' | 'Standard_DS13-2_v2' | 'Standard_DS13-4_v2' | 'Standard_DS13_v2' | 'Standard_DS13_v2_Promo' | 'Standard_DS14' | 'Standard_DS14-4_v2' | 'Standard_DS14-8_v2' | 'Standard_DS14_v2' | 'Standard_DS14_v2_Promo' | 'Standard_DS15_v2' | 'Standard_DS1_v2' | 'Standard_DS2' | 'Standard_DS2_v2' | 'Standard_DS2_v2_Promo' | 'Standard_DS3' | 'Standard_DS3_v2' | 'Standard_DS3_v2_Promo' | 'Standard_DS4' | 'Standard_DS4_v2' | 'Standard_DS4_v2_Promo' | 'Standard_DS5_v2' | 'Standard_DS5_v2_Promo' | 'Standard_E16_v3' | 'Standard_E16s_v3' | 'Standard_E2_v3' | 'Standard_E2s_v3' | 'Standard_E32-16s_v3' | 'Standard_E32-8s_v3' | 'Standard_E32_v3' | 'Standard_E32s_v3' | 'Standard_E4_v3' | 'Standard_E4s_v3' | 'Standard_E64-16s_v3' | 'Standard_E64-32s_v3' | 'Standard_E64_v3' | 'Standard_E64s_v3' | 'Standard_E8_v3' | 'Standard_E8s_v3' | 'Standard_F1' | 'Standard_F16' | 'Standard_F16s' | 'Standard_F16s_v2' | 'Standard_F1s' | 'Standard_F2' | 'Standard_F2s' | 'Standard_F2s_v2' | 'Standard_F32s_v2' | 'Standard_F4' | 'Standard_F4s' | 'Standard_F4s_v2' | 'Standard_F64s_v2' | 'Standard_F72s_v2' | 'Standard_F8' | 'Standard_F8s' | 'Standard_F8s_v2' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS4-4' | 'Standard_GS4-8' | 'Standard_GS5' | 'Standard_GS5-16' | 'Standard_GS5-8' | 'Standard_H16' | 'Standard_H16m' | 'Standard_H16mr' | 'Standard_H16r' | 'Standard_H8' | 'Standard_H8m' | 'Standard_L16s' | 'Standard_L32s' | 'Standard_L4s' | 'Standard_L8s' | 'Standard_M128-32ms' | 'Standard_M128-64ms' | 'Standard_M128ms' | 'Standard_M128s' | 'Standard_M64-16ms' | 'Standard_M64-32ms' | 'Standard_M64ms' | 'Standard_M64s' | 'Standard_NC12' | 'Standard_NC12s_v2' | 'Standard_NC12s_v3' | 'Standard_NC24' | 'Standard_NC24r' | 'Standard_NC24rs_v2' | 'Standard_NC24rs_v3' | 'Standard_NC24s_v2' | 'Standard_NC24s_v3' | 'Standard_NC6' | 'Standard_NC6s_v2' | 'Standard_NC6s_v3' | 'Standard_ND12s' | 'Standard_ND24rs' | 'Standard_ND24s' | 'Standard_ND6s' | 'Standard_NV12' | 'Standard_NV24' | 'Standard_NV6' | string: Size of agent VMs.
* **vnetSubnetID**: string: VNet SubnetID specifies the VNet's subnet identifier for nodes and maybe pods

## ManagedClusterAgentPoolProfileProperties
### Properties
* **availabilityZones**: string[]: Availability zones for nodes. Must use VirtualMachineScaleSets AgentPoolType.
* **count**: int: Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 100 (inclusive) for user pools and in the range of 1 to 100 (inclusive) for system pools. The default value is 1.
* **enableAutoScaling**: bool: Whether to enable auto-scaler
* **enableEncryptionAtHost**: bool: Whether to enable EncryptionAtHost
* **enableNodePublicIP**: bool: Enable public IP for nodes
* **kubeletConfig**: [KubeletConfig](#kubeletconfig): KubeletConfig specifies the configuration of kubelet on agent nodes.
* **kubeletDiskType**: 'OS' | string: KubeletDiskType determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage. Currently allows one value, OS, resulting in Kubelet using the OS disk for data.
* **linuxOSConfig**: [LinuxOSConfig](#linuxosconfig): LinuxOSConfig specifies the OS configuration of linux agent nodes.
* **maxCount**: int: Maximum number of nodes for auto-scaling
* **maxPods**: int: Maximum number of pods that can run on a node.
* **minCount**: int: Minimum number of nodes for auto-scaling
* **mode**: 'System' | 'User' | string: AgentPoolMode represents mode of an agent pool
* **nodeImageVersion**: string (ReadOnly): Version of node image
* **nodeLabels**: [ManagedClusterAgentPoolProfilePropertiesNodeLabels](#managedclusteragentpoolprofilepropertiesnodelabels): Agent pool node labels to be persisted across all nodes in agent pool.
* **nodeTaints**: string[]: Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
* **orchestratorVersion**: string: Version of orchestrator specified when creating the managed cluster.
* **osDiskSizeGB**: int: OS Disk Size in GB to be used to specify the disk size for every machine in this master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
* **osDiskType**: 'Ephemeral' | 'Managed' | string: OS disk type to be used for machines in a given agent pool. Allowed values are 'Ephemeral' and 'Managed'. If unspecified, defaults to 'Ephemeral' when the VM supports ephemeral OS and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation.
* **osType**: 'Linux' | 'Windows' | string: OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
* **podSubnetID**: string: Pod SubnetID specifies the VNet's subnet identifier for pods.
* **powerState**: [PowerState](#powerstate) (ReadOnly): Describes whether the Agent Pool is Running or Stopped
* **provisioningState**: string (ReadOnly): The current deployment or provisioning state, which only appears in the response.
* **proximityPlacementGroupID**: string: The ID for Proximity Placement Group.
* **scaleSetEvictionPolicy**: 'Deallocate' | 'Delete' | string: ScaleSetEvictionPolicy to be used to specify eviction policy for Spot virtual machine scale set. Default to Delete.
* **scaleSetPriority**: 'Regular' | 'Spot' | string: ScaleSetPriority to be used to specify virtual machine scale set priority. Default to regular.
* **spotMaxPrice**: int: SpotMaxPrice to be used to specify the maximum price you are willing to pay in US Dollars. Possible values are any decimal value greater than zero or -1 which indicates default price to be up-to on-demand.
* **tags**: [ManagedClusterAgentPoolProfilePropertiesTags](#managedclusteragentpoolprofilepropertiestags): Agent pool tags to be persisted on the agent pool virtual machine scale set.
* **type**: 'AvailabilitySet' | 'VirtualMachineScaleSets' | string: AgentPoolType represents types of an agent pool
* **upgradeSettings**: [AgentPoolUpgradeSettings](#agentpoolupgradesettings): Settings for upgrading the agentpool
* **vmSize**: 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A1_v2' | 'Standard_A2' | 'Standard_A2_v2' | 'Standard_A2m_v2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A4_v2' | 'Standard_A4m_v2' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A8_v2' | 'Standard_A8m_v2' | 'Standard_A9' | 'Standard_B2ms' | 'Standard_B2s' | 'Standard_B4ms' | 'Standard_B8ms' | 'Standard_D1' | 'Standard_D11' | 'Standard_D11_v2' | 'Standard_D11_v2_Promo' | 'Standard_D12' | 'Standard_D12_v2' | 'Standard_D12_v2_Promo' | 'Standard_D13' | 'Standard_D13_v2' | 'Standard_D13_v2_Promo' | 'Standard_D14' | 'Standard_D14_v2' | 'Standard_D14_v2_Promo' | 'Standard_D15_v2' | 'Standard_D16_v3' | 'Standard_D16s_v3' | 'Standard_D1_v2' | 'Standard_D2' | 'Standard_D2_v2' | 'Standard_D2_v2_Promo' | 'Standard_D2_v3' | 'Standard_D2s_v3' | 'Standard_D3' | 'Standard_D32_v3' | 'Standard_D32s_v3' | 'Standard_D3_v2' | 'Standard_D3_v2_Promo' | 'Standard_D4' | 'Standard_D4_v2' | 'Standard_D4_v2_Promo' | 'Standard_D4_v3' | 'Standard_D4s_v3' | 'Standard_D5_v2' | 'Standard_D5_v2_Promo' | 'Standard_D64_v3' | 'Standard_D64s_v3' | 'Standard_D8_v3' | 'Standard_D8s_v3' | 'Standard_DS1' | 'Standard_DS11' | 'Standard_DS11_v2' | 'Standard_DS11_v2_Promo' | 'Standard_DS12' | 'Standard_DS12_v2' | 'Standard_DS12_v2_Promo' | 'Standard_DS13' | 'Standard_DS13-2_v2' | 'Standard_DS13-4_v2' | 'Standard_DS13_v2' | 'Standard_DS13_v2_Promo' | 'Standard_DS14' | 'Standard_DS14-4_v2' | 'Standard_DS14-8_v2' | 'Standard_DS14_v2' | 'Standard_DS14_v2_Promo' | 'Standard_DS15_v2' | 'Standard_DS1_v2' | 'Standard_DS2' | 'Standard_DS2_v2' | 'Standard_DS2_v2_Promo' | 'Standard_DS3' | 'Standard_DS3_v2' | 'Standard_DS3_v2_Promo' | 'Standard_DS4' | 'Standard_DS4_v2' | 'Standard_DS4_v2_Promo' | 'Standard_DS5_v2' | 'Standard_DS5_v2_Promo' | 'Standard_E16_v3' | 'Standard_E16s_v3' | 'Standard_E2_v3' | 'Standard_E2s_v3' | 'Standard_E32-16s_v3' | 'Standard_E32-8s_v3' | 'Standard_E32_v3' | 'Standard_E32s_v3' | 'Standard_E4_v3' | 'Standard_E4s_v3' | 'Standard_E64-16s_v3' | 'Standard_E64-32s_v3' | 'Standard_E64_v3' | 'Standard_E64s_v3' | 'Standard_E8_v3' | 'Standard_E8s_v3' | 'Standard_F1' | 'Standard_F16' | 'Standard_F16s' | 'Standard_F16s_v2' | 'Standard_F1s' | 'Standard_F2' | 'Standard_F2s' | 'Standard_F2s_v2' | 'Standard_F32s_v2' | 'Standard_F4' | 'Standard_F4s' | 'Standard_F4s_v2' | 'Standard_F64s_v2' | 'Standard_F72s_v2' | 'Standard_F8' | 'Standard_F8s' | 'Standard_F8s_v2' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS4-4' | 'Standard_GS4-8' | 'Standard_GS5' | 'Standard_GS5-16' | 'Standard_GS5-8' | 'Standard_H16' | 'Standard_H16m' | 'Standard_H16mr' | 'Standard_H16r' | 'Standard_H8' | 'Standard_H8m' | 'Standard_L16s' | 'Standard_L32s' | 'Standard_L4s' | 'Standard_L8s' | 'Standard_M128-32ms' | 'Standard_M128-64ms' | 'Standard_M128ms' | 'Standard_M128s' | 'Standard_M64-16ms' | 'Standard_M64-32ms' | 'Standard_M64ms' | 'Standard_M64s' | 'Standard_NC12' | 'Standard_NC12s_v2' | 'Standard_NC12s_v3' | 'Standard_NC24' | 'Standard_NC24r' | 'Standard_NC24rs_v2' | 'Standard_NC24rs_v3' | 'Standard_NC24s_v2' | 'Standard_NC24s_v3' | 'Standard_NC6' | 'Standard_NC6s_v2' | 'Standard_NC6s_v3' | 'Standard_ND12s' | 'Standard_ND24rs' | 'Standard_ND24s' | 'Standard_ND6s' | 'Standard_NV12' | 'Standard_NV24' | 'Standard_NV6' | string: Size of agent VMs.
* **vnetSubnetID**: string: VNet SubnetID specifies the VNet's subnet identifier for nodes and maybe pods

## ManagedClusterAgentPoolProfilePropertiesNodeLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedClusterAgentPoolProfilePropertiesNodeLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedClusterAgentPoolProfilePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedClusterAgentPoolProfilePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedClusterAPIServerAccessProfile
### Properties
* **authorizedIPRanges**: string[]: Authorized IP Ranges to kubernetes API server.
* **enablePrivateCluster**: bool: Whether to create the cluster as a private cluster or not.
* **privateDNSZone**: string: Private dns zone mode for private cluster.

## ManagedClusterAutoUpgradeProfile
### Properties
* **upgradeChannel**: 'none' | 'patch' | 'rapid' | 'stable' | string: upgrade channel for auto upgrade.

## ManagedClusterIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the system assigned identity which is used by master components.
* **tenantId**: string (ReadOnly): The tenant id of the system assigned identity which is used by master components.
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned': The type of identity used for the managed cluster. Type 'SystemAssigned' will use an implicitly created identity in master components and an auto-created user assigned identity in MC_ resource group in agent nodes. Type 'None' will not use MSI for the managed cluster, service principal will be used instead.
* **userAssignedIdentities**: [ManagedClusterIdentityUserAssignedIdentities](#managedclusteridentityuserassignedidentities): The user identity associated with the managed cluster. This identity will be used in control plane and only one user assigned identity is allowed. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## ManagedClusterIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [Components1Umhcm8SchemasManagedclusteridentityPropertiesUserassignedidentitiesAdditionalproperties](#components1umhcm8schemasmanagedclusteridentitypropertiesuserassignedidentitiesadditionalproperties)

## ManagedClusterLoadBalancerProfile
### Properties
* **allocatedOutboundPorts**: int: Desired number of allocated SNAT ports per VM. Allowed values must be in the range of 0 to 64000 (inclusive). The default value is 0 which results in Azure dynamically allocating ports.
* **effectiveOutboundIPs**: [ResourceReference](#resourcereference)[]: The effective outbound IP resources of the cluster load balancer.
* **idleTimeoutInMinutes**: int: Desired outbound flow idle timeout in minutes. Allowed values must be in the range of 4 to 120 (inclusive). The default value is 30 minutes.
* **managedOutboundIPs**: [ManagedClusterLoadBalancerProfileManagedOutboundIPs](#managedclusterloadbalancerprofilemanagedoutboundips): Desired managed outbound IPs for the cluster load balancer.
* **outboundIPPrefixes**: [ManagedClusterLoadBalancerProfileOutboundIPPrefixes](#managedclusterloadbalancerprofileoutboundipprefixes): Desired outbound IP Prefix resources for the cluster load balancer.
* **outboundIPs**: [ManagedClusterLoadBalancerProfileOutboundIPs](#managedclusterloadbalancerprofileoutboundips): Desired outbound IP resources for the cluster load balancer.

## ManagedClusterLoadBalancerProfileManagedOutboundIPs
### Properties
* **count**: int: Desired number of outbound IP created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.

## ManagedClusterLoadBalancerProfileOutboundIPPrefixes
### Properties
* **publicIPPrefixes**: [ResourceReference](#resourcereference)[]: A list of public IP prefix resources.

## ManagedClusterLoadBalancerProfileOutboundIPs
### Properties
* **publicIPs**: [ResourceReference](#resourcereference)[]: A list of public IP resources.

## ManagedClusterPodIdentity
### Properties
* **identity**: [UserAssignedIdentity](#userassignedidentity) (Required): Information of the user assigned identity.
* **name**: string (Required): Name of the pod identity.
* **namespace**: string (Required): Namespace of the pod identity.
* **provisioningInfo**: [ManagedClusterPodIdentityProvisioningInfo](#managedclusterpodidentityprovisioninginfo) (ReadOnly)
* **provisioningState**: 'Assigned' | 'Deleting' | 'Failed' | 'Updating' | string (ReadOnly): The current provisioning state of the pod identity.

## ManagedClusterPodIdentityException
### Properties
* **name**: string (Required): Name of the pod identity exception.
* **namespace**: string (Required): Namespace of the pod identity exception.
* **podLabels**: [ManagedClusterPodIdentityExceptionPodLabels](#managedclusterpodidentityexceptionpodlabels) (Required): Pod labels to match.

## ManagedClusterPodIdentityExceptionPodLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedClusterPodIdentityProfile
### Properties
* **enabled**: bool: Whether the pod identity addon is enabled.
* **userAssignedIdentities**: [ManagedClusterPodIdentity](#managedclusterpodidentity)[]: User assigned pod identity settings.
* **userAssignedIdentityExceptions**: [ManagedClusterPodIdentityException](#managedclusterpodidentityexception)[]: User assigned pod identity exception settings.

## ManagedClusterPodIdentityProvisioningInfo
### Properties
* **error**: [CloudError](#clouderror): Pod identity assignment error (if any).

## ManagedClusterProperties
### Properties
* **aadProfile**: [ManagedClusterAADProfile](#managedclusteraadprofile): Profile of Azure Active Directory configuration.
* **addonProfiles**: [ManagedClusterPropertiesAddonProfiles](#managedclusterpropertiesaddonprofiles): Profile of managed cluster add-on.
* **agentPoolProfiles**: [ManagedClusterAgentPoolProfile](#managedclusteragentpoolprofile)[]: Properties of the agent pool.
* **apiServerAccessProfile**: [ManagedClusterAPIServerAccessProfile](#managedclusterapiserveraccessprofile): Access profile for managed cluster API server.
* **autoScalerProfile**: [ManagedClusterPropertiesAutoScalerProfile](#managedclusterpropertiesautoscalerprofile): Parameters to be applied to the cluster-autoscaler when enabled
* **autoUpgradeProfile**: [ManagedClusterAutoUpgradeProfile](#managedclusterautoupgradeprofile): Profile of auto upgrade configuration.
* **diskEncryptionSetID**: string: ResourceId of the disk encryption set to use for enabling encryption at rest.
* **dnsPrefix**: string: DNS prefix specified when creating the managed cluster.
* **enablePodSecurityPolicy**: bool: (DEPRECATING) Whether to enable Kubernetes pod security policy (preview). This feature is set for removal on October 15th, 2020. Learn more at aka.ms/aks/azpodpolicy.
* **enableRBAC**: bool: Whether to enable Kubernetes Role-Based Access Control.
* **fqdn**: string (ReadOnly): FQDN for the master pool.
* **identityProfile**: [ManagedClusterPropertiesIdentityProfile](#managedclusterpropertiesidentityprofile): Identities associated with the cluster.
* **kubernetesVersion**: string: Version of Kubernetes specified when creating the managed cluster.
* **linuxProfile**: [ContainerServiceLinuxProfile](#containerservicelinuxprofile): Profile for Linux VMs in the container service cluster.
* **maxAgentPools**: int (ReadOnly): The max number of agent pools for the managed cluster.
* **networkProfile**: [ContainerServiceNetworkProfile](#containerservicenetworkprofile): Profile of network configuration.
* **nodeResourceGroup**: string: Name of the resource group containing agent pool nodes.
* **podIdentityProfile**: [ManagedClusterPodIdentityProfile](#managedclusterpodidentityprofile): Profile of managed cluster pod identity.
* **powerState**: [PowerState](#powerstate) (ReadOnly): Represents the Power State of the cluster
* **privateFQDN**: string (ReadOnly): FQDN of private cluster.
* **provisioningState**: string (ReadOnly): The current deployment or provisioning state, which only appears in the response.
* **servicePrincipalProfile**: [ManagedClusterServicePrincipalProfile](#managedclusterserviceprincipalprofile): Information about a service principal identity for the cluster to use for manipulating Azure APIs.
* **windowsProfile**: [ManagedClusterWindowsProfile](#managedclusterwindowsprofile): Profile for Windows VMs in the container service cluster.

## ManagedClusterPropertiesAddonProfiles
### Properties
### Additional Properties
* **Additional Properties Type**: [ManagedClusterAddonProfile](#managedclusteraddonprofile)

## ManagedClusterPropertiesAutoScalerProfile
### Properties
* **balance-similar-node-groups**: string
* **expander**: 'least-waste' | 'most-pods' | 'priority' | 'random' | string
* **max-empty-bulk-delete**: string
* **max-graceful-termination-sec**: string
* **max-node-provision-time**: string
* **max-total-unready-percentage**: string
* **new-pod-scale-up-delay**: string
* **ok-total-unready-count**: string
* **scale-down-delay-after-add**: string
* **scale-down-delay-after-delete**: string
* **scale-down-delay-after-failure**: string
* **scale-down-unneeded-time**: string
* **scale-down-unready-time**: string
* **scale-down-utilization-threshold**: string
* **scan-interval**: string
* **skip-nodes-with-local-storage**: string
* **skip-nodes-with-system-pods**: string

## ManagedClusterPropertiesIdentityProfile
### Properties
### Additional Properties
* **Additional Properties Type**: [ComponentsQit0EtSchemasManagedclusterpropertiesPropertiesIdentityprofileAdditionalproperties](#componentsqit0etschemasmanagedclusterpropertiespropertiesidentityprofileadditionalproperties)

## ManagedClusterServicePrincipalProfile
### Properties
* **clientId**: string (Required): The ID for the service principal.
* **secret**: string: The secret password associated with the service principal in plain text.

## ManagedClusterSKU
### Properties
* **name**: 'Basic' | string: Name of a managed cluster SKU.
* **tier**: 'Free' | 'Paid' | string: Tier of a managed cluster SKU.

## ManagedClusterWindowsProfile
### Properties
* **adminPassword**: string: Specifies the password of the administrator account. <br><br> **Minimum-length:** 8 characters <br><br> **Max-length:** 123 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"
* **adminUsername**: string (Required): Specifies the name of the administrator account. <br><br> **restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length:** 1 character <br><br> **Max-length:** 20 characters
* **licenseType**: 'None' | 'Windows_Server' | string: The licenseType to use for Windows VMs. Windows_Server is used to enable Azure Hybrid User Benefits for Windows VMs.

## PowerState
### Properties
* **code**: 'Running' | 'Stopped' | string: Tells whether the cluster is Running or Stopped

## PrivateEndpoint
### Properties
* **id**: string: The resource Id for private endpoint

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The resource of private endpoint.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The current provisioning state.

## PrivateLinkServiceConnectionState
### Properties
* **description**: string: The private link service connection description.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: The private link service connection status.

## ResourceReference
### Properties
* **id**: string: The fully qualified Azure resource id.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SysctlConfig
### Properties
* **fsAioMaxNr**: int: Sysctl setting fs.aio-max-nr.
* **fsFileMax**: int: Sysctl setting fs.file-max.
* **fsInotifyMaxUserWatches**: int: Sysctl setting fs.inotify.max_user_watches.
* **fsNrOpen**: int: Sysctl setting fs.nr_open.
* **kernelThreadsMax**: int: Sysctl setting kernel.threads-max.
* **netCoreNetdevMaxBacklog**: int: Sysctl setting net.core.netdev_max_backlog.
* **netCoreOptmemMax**: int: Sysctl setting net.core.optmem_max.
* **netCoreRmemDefault**: int: Sysctl setting net.core.rmem_default.
* **netCoreRmemMax**: int: Sysctl setting net.core.rmem_max.
* **netCoreSomaxconn**: int: Sysctl setting net.core.somaxconn.
* **netCoreWmemDefault**: int: Sysctl setting net.core.wmem_default.
* **netCoreWmemMax**: int: Sysctl setting net.core.wmem_max.
* **netIpv4IpLocalPortRange**: string: Sysctl setting net.ipv4.ip_local_port_range.
* **netIpv4NeighDefaultGcThresh1**: int: Sysctl setting net.ipv4.neigh.default.gc_thresh1.
* **netIpv4NeighDefaultGcThresh2**: int: Sysctl setting net.ipv4.neigh.default.gc_thresh2.
* **netIpv4NeighDefaultGcThresh3**: int: Sysctl setting net.ipv4.neigh.default.gc_thresh3.
* **netIpv4TcpFinTimeout**: int: Sysctl setting net.ipv4.tcp_fin_timeout.
* **netIpv4TcpkeepaliveIntvl**: int: Sysctl setting net.ipv4.tcp_keepalive_intvl.
* **netIpv4TcpKeepaliveProbes**: int: Sysctl setting net.ipv4.tcp_keepalive_probes.
* **netIpv4TcpKeepaliveTime**: int: Sysctl setting net.ipv4.tcp_keepalive_time.
* **netIpv4TcpMaxSynBacklog**: int: Sysctl setting net.ipv4.tcp_max_syn_backlog.
* **netIpv4TcpMaxTwBuckets**: int: Sysctl setting net.ipv4.tcp_max_tw_buckets.
* **netIpv4TcpTwReuse**: bool: Sysctl setting net.ipv4.tcp_tw_reuse.
* **netNetfilterNfConntrackBuckets**: int: Sysctl setting net.netfilter.nf_conntrack_buckets.
* **netNetfilterNfConntrackMax**: int: Sysctl setting net.netfilter.nf_conntrack_max.
* **vmMaxMapCount**: int: Sysctl setting vm.max_map_count.
* **vmSwappiness**: int: Sysctl setting vm.swappiness.
* **vmVfsCachePressure**: int: Sysctl setting vm.vfs_cache_pressure.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The type of identity that last modified the resource.
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TimeInWeek
### Properties
* **day**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string: A day in a week.
* **hourSlots**: int[]: hour slots in a day.

## TimeSpan
### Properties
* **end**: string: The end of a time span
* **start**: string: The start of a time span

## UserAssignedIdentity
### Properties
* **clientId**: string: The client id of the user assigned identity.
* **objectId**: string: The object id of the user assigned identity.
* **resourceId**: string: The resource id of the user assigned identity.

