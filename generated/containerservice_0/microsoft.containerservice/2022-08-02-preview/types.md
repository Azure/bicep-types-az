# Microsoft.ContainerService @ 2022-08-02-preview

## Resource Microsoft.ContainerService/managedClusters@2022-08-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location of the Virtual Machine.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedClusterIdentity](#managedclusteridentity): The identity of the managed cluster, if configured.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-_a-zA-Z0-9]{0,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedClusterProperties](#managedclusterproperties): Properties of a managed cluster.
* **sku**: [ManagedClusterSKU](#managedclustersku): The managed cluster SKU.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ContainerService/managedClusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/agentPools@2022-08-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedClusterAgentPoolProfileProperties](#managedclusteragentpoolprofileproperties): Properties of an agent pool.
* **type**: 'Microsoft.ContainerService/managedClusters/agentPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/maintenanceConfigurations@2022-08-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MaintenanceConfigurationProperties](#maintenanceconfigurationproperties): Properties of a default maintenance configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.ContainerService/managedClusters/maintenanceConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/privateEndpointConnections@2022-08-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): The properties of a private endpoint connection.
* **type**: 'Microsoft.ContainerService/managedClusters/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/trustedAccessRoleBindings@2022-08-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 36} (Required, DeployTimeConstant): The resource name
* **properties**: [TrustedAccessRoleBindingProperties](#trustedaccessrolebindingproperties) (Required): Properties for trusted access role binding
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/managedClusters/trustedAccessRoleBindings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedclustersnapshots@2022-08-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-_a-zA-Z0-9]{0,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedClusterSnapshotProperties](#managedclustersnapshotproperties): Properties of a managed cluster snapshot.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ContainerService/managedclustersnapshots' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/snapshots@2022-08-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-_a-zA-Z0-9]{0,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SnapshotProperties](#snapshotproperties): Properties of a snapshot.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ContainerService/snapshots' (ReadOnly, DeployTimeConstant): The resource type

## Function listClusterAdminCredential (Microsoft.ContainerService/managedClusters@2022-08-02-preview)
* **Resource**: Microsoft.ContainerService/managedClusters
* **ApiVersion**: 2022-08-02-preview
* **Output**: [CredentialResults](#credentialresults)

## Function listClusterMonitoringUserCredential (Microsoft.ContainerService/managedClusters@2022-08-02-preview)
* **Resource**: Microsoft.ContainerService/managedClusters
* **ApiVersion**: 2022-08-02-preview
* **Output**: [CredentialResults](#credentialresults)

## Function listClusterUserCredential (Microsoft.ContainerService/managedClusters@2022-08-02-preview)
* **Resource**: Microsoft.ContainerService/managedClusters
* **ApiVersion**: 2022-08-02-preview
* **Output**: [CredentialResults](#credentialresults)

## Function listCredential (Microsoft.ContainerService/managedClusters/accessProfiles@2022-08-02-preview)
* **Resource**: Microsoft.ContainerService/managedClusters/accessProfiles
* **ApiVersion**: 2022-08-02-preview
* **Output**: [ManagedClusterAccessProfile](#managedclusteraccessprofile)

## AccessProfile
### Properties
* **kubeConfig**: any: Base64-encoded Kubernetes configuration file.

## AgentPoolUpgradeSettings
### Properties
* **maxSurge**: string: This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 1. For more information, including best practices, see: https://docs.microsoft.com/azure/aks/upgrade-cluster#customize-node-surge-upgrade

## AgentPoolWindowsProfile
### Properties
* **disableOutboundNat**: bool: The default value is false. Outbound NAT can only be disabled if the cluster outboundType is NAT Gateway and the Windows agent pool does not have node public IP enabled.

## AzureKeyVaultKms
### Properties
* **enabled**: bool: Whether to enable Azure Key Vault key management service. The default is false.
* **keyId**: string: Identifier of Azure Key Vault key. See [key identifier format](https://docs.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates#vault-name-and-object-name) for more details. When Azure Key Vault key management service is enabled, this field is required and must be a valid key identifier. When Azure Key Vault key management service is disabled, leave the field empty.
* **keyVaultNetworkAccess**: 'Private' | 'Public' | string: Network access of key vault. The possible values are `Public` and `Private`. `Public` means the key vault allows public access from all networks. `Private` means the key vault disables public access and enables private link. The default value is `Public`.
* **keyVaultResourceId**: string: Resource ID of key vault. When keyVaultNetworkAccess is `Private`, this field is required and must be a valid resource ID. When keyVaultNetworkAccess is `Public`, leave the field empty.

## ContainerServiceLinuxProfile
### Properties
* **adminUsername**: string {pattern: "^[A-Za-z][-A-Za-z0-9_]*$"} (Required): The administrator username to use for Linux VMs.
* **ssh**: [ContainerServiceSshConfiguration](#containerservicesshconfiguration) (Required): The SSH configuration for Linux-based VMs running on Azure.

## ContainerServiceNetworkProfile
### Properties
* **dnsServiceIP**: string {pattern: "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"}: An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
* **dockerBridgeCidr**: string {pattern: "^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$"}: A CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the Kubernetes service address range.
* **ipFamilies**: ('IPv4' | 'IPv6' | string)[]: IP families are used to determine single-stack or dual-stack clusters. For single-stack, the expected value is IPv4. For dual-stack, the expected values are IPv4 and IPv6.
* **kubeProxyConfig**: [ContainerServiceNetworkProfileKubeProxyConfig](#containerservicenetworkprofilekubeproxyconfig): Holds configuration customizations for kube-proxy. Any values not defined will use the kube-proxy defaulting behavior. See https://v<version>.docs.kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/ where <version> is represented by a <major version>-<minor version> string. Kubernetes version 1.23 would be '1-23'.
* **loadBalancerProfile**: [ManagedClusterLoadBalancerProfile](#managedclusterloadbalancerprofile): Profile of the cluster load balancer.
* **loadBalancerSku**: 'basic' | 'standard' | string: The default is 'standard'. See [Azure Load Balancer SKUs](https://docs.microsoft.com/azure/load-balancer/skus) for more information about the differences between load balancer SKUs.
* **natGatewayProfile**: [ManagedClusterNATGatewayProfile](#managedclusternatgatewayprofile): Profile of the cluster NAT gateway.
* **networkMode**: 'bridge' | 'transparent' | string: This cannot be specified if networkPlugin is anything other than 'azure'.
* **networkPlugin**: 'azure' | 'kubenet' | 'none' | string: Network plugin used for building the Kubernetes network.
* **networkPluginMode**: 'Overlay' | string: Network plugin mode used for building the Kubernetes network.
* **networkPolicy**: 'azure' | 'calico' | string: Network policy used for building the Kubernetes network.
* **outboundType**: 'loadBalancer' | 'managedNATGateway' | 'userAssignedNATGateway' | 'userDefinedRouting' | string: This can only be set at cluster creation time and cannot be changed later. For more information see [egress outbound type](https://docs.microsoft.com/azure/aks/egress-outboundtype).
* **podCidr**: string {pattern: "^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$"}: A CIDR notation IP range from which to assign pod IPs when kubenet is used.
* **podCidrs**: string[]: One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
* **serviceCidr**: string {pattern: "^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$"}: A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
* **serviceCidrs**: string[]: One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. They must not overlap with any Subnet IP ranges.

## ContainerServiceNetworkProfileKubeProxyConfig
### Properties
* **enabled**: bool: Whether to enable on kube-proxy on the cluster (if no 'kubeProxyConfig' exists, kube-proxy is enabled in AKS by default without these customizations).
* **ipvsConfig**: [ContainerServiceNetworkProfileKubeProxyConfigIpvsConfig](#containerservicenetworkprofilekubeproxyconfigipvsconfig): Holds configuration customizations for IPVS. May only be specified if 'mode' is set to 'IPVS'.
* **mode**: 'IPTABLES' | 'IPVS' | string: Specify which proxy mode to use ('IPTABLES' or 'IPVS')

## ContainerServiceNetworkProfileKubeProxyConfigIpvsConfig
### Properties
* **scheduler**: 'LeastConnection' | 'RoundRobin' | string: IPVS scheduler, for more information please see http://www.linuxvirtualserver.org/docs/scheduling.html.
* **tcpFinTimeoutSeconds**: int: The timeout value used for IPVS TCP sessions after receiving a FIN in seconds. Must be a positive integer value.
* **tcpTimeoutSeconds**: int: The timeout value used for idle IPVS TCP sessions in seconds. Must be a positive integer value.
* **udpTimeoutSeconds**: int: The timeout value used for IPVS UDP packets in seconds. Must be a positive integer value.

## ContainerServiceSshConfiguration
### Properties
* **publicKeys**: [ContainerServiceSshPublicKey](#containerservicesshpublickey)[] (Required): The list of SSH public keys used to authenticate with Linux-based VMs. A maximum of 1 key may be specified.

## ContainerServiceSshPublicKey
### Properties
* **keyData**: string (Required): Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.

## CreationData
### Properties
* **sourceResourceId**: string: This is the ARM ID of the source object to be used to create the target object.

## CredentialResult
### Properties
* **name**: string (ReadOnly): The name of the credential.
* **value**: any (ReadOnly): Base64-encoded Kubernetes configuration file.

## CredentialResults
### Properties
* **kubeconfigs**: [CredentialResult](#credentialresult)[] (ReadOnly): Base64-encoded Kubernetes configuration file.

## ExtendedLocation
### Properties
* **name**: string: The name of the extended location.
* **type**: 'EdgeZone' | string: The type of the extended location.

## GuardrailsProfile
### Properties
* **excludedNamespaces**: string[]: List of namespaces excluded from guardrails checks
* **level**: 'Enforcement' | 'Off' | 'Warning' | string (Required): The guardrails level to be used. By default, Guardrails is enabled for all namespaces except those that AKS excludes via systemExcludedNamespaces
* **systemExcludedNamespaces**: string[] (ReadOnly): List of namespaces specified by AKS to be excluded from Guardrails
* **version**: string (Required): The version of constraints to use

## KubeletConfig
### Properties
* **allowedUnsafeSysctls**: string[]: Allowed list of unsafe sysctls or unsafe sysctl patterns (ending in `*`).
* **containerLogMaxFiles**: int {minValue: 2}: The maximum number of container log files that can be present for a container. The number must be ≥ 2.
* **containerLogMaxSizeMB**: int: The maximum size (e.g. 10Mi) of container log file before it is rotated.
* **cpuCfsQuota**: bool: The default is true.
* **cpuCfsQuotaPeriod**: string: The default is '100ms.' Valid values are a sequence of decimal numbers with an optional fraction and a unit suffix. For example: '300ms', '2h45m'. Supported units are 'ns', 'us', 'ms', 's', 'm', and 'h'.
* **cpuManagerPolicy**: string: The default is 'none'. See [Kubernetes CPU management policies](https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/#cpu-management-policies) for more information. Allowed values are 'none' and 'static'.
* **failSwapOn**: bool: If set to true it will make the Kubelet fail to start if swap is enabled on the node.
* **imageGcHighThreshold**: int: To disable image garbage collection, set to 100. The default is 85%
* **imageGcLowThreshold**: int: This cannot be set higher than imageGcHighThreshold. The default is 80%
* **podMaxPids**: int: The maximum number of processes per pod.
* **topologyManagerPolicy**: string: For more information see [Kubernetes Topology Manager](https://kubernetes.io/docs/tasks/administer-cluster/topology-manager). The default is 'none'. Allowed values are 'none', 'best-effort', 'restricted', and 'single-numa-node'.

## LinuxOSConfig
### Properties
* **swapFileSizeMB**: int: The size in MB of a swap file that will be created on each node.
* **sysctls**: [SysctlConfig](#sysctlconfig): Sysctl settings for Linux agent nodes.
* **transparentHugePageDefrag**: string: Valid values are 'always', 'defer', 'defer+madvise', 'madvise' and 'never'. The default is 'madvise'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
* **transparentHugePageEnabled**: string: Valid values are 'always', 'madvise', and 'never'. The default is 'always'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).

## MaintenanceConfigurationProperties
### Properties
* **notAllowedTime**: [TimeSpan](#timespan)[]: Time slots on which upgrade is not allowed.
* **timeInWeek**: [TimeInWeek](#timeinweek)[]: If two array entries specify the same day of the week, the applied configuration is the union of times in both entries.

## ManagedClusterAADProfile
### Properties
* **adminGroupObjectIDs**: string[]: The list of AAD group object IDs that will have admin role of the cluster.
* **clientAppID**: string: The client AAD application ID.
* **enableAzureRBAC**: bool: Whether to enable Azure RBAC for Kubernetes authorization.
* **managed**: bool: Whether to enable managed AAD.
* **serverAppID**: string: The server AAD application ID.
* **serverAppSecret**: string: The server AAD application secret.
* **tenantID**: string: The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.

## ManagedClusterAccessProfile
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (ReadOnly): The name of the resource
* **properties**: [AccessProfile](#accessprofile): AccessProfile of a managed cluster.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

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
* **clientId**: string: The client ID of the user assigned identity.
* **objectId**: string: The object ID of the user assigned identity.
* **resourceId**: string: The resource ID of the user assigned identity.

## ManagedClusterAgentPoolProfile
### Properties
* **availabilityZones**: string[]: The list of Availability zones to use for nodes. This can only be specified if the AgentPoolType property is 'VirtualMachineScaleSets'.
* **capacityReservationGroupID**: string: AKS will associate the specified agent pool with the Capacity Reservation Group.
* **count**: int: Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1.
* **creationData**: [CreationData](#creationdata): CreationData to be used to specify the source Snapshot ID if the node pool will be created/upgraded using a snapshot.
* **currentOrchestratorVersion**: string (ReadOnly): If orchestratorVersion was a fully specified version <major.minor.patch>, this field will be exactly equal to it. If orchestratorVersion was <major.minor>, this field will contain the full <major.minor.patch> version being used.
* **enableAutoScaling**: bool: Whether to enable auto-scaler
* **enableCustomCATrust**: bool: When set to true, AKS deploys a daemonset and host services to sync custom certificate authorities from a user-provided config map into node trust stores. Defaults to false.
* **enableEncryptionAtHost**: bool: This is only supported on certain VM sizes and in certain Azure regions. For more information, see: https://docs.microsoft.com/azure/aks/enable-host-encryption
* **enableFIPS**: bool: See [Add a FIPS-enabled node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#add-a-fips-enabled-node-pool-preview) for more details.
* **enableNodePublicIP**: bool: Some scenarios may require nodes in a node pool to receive their own dedicated public IP addresses. A common scenario is for gaming workloads, where a console needs to make a direct connection to a cloud virtual machine to minimize hops. For more information see [assigning a public IP per node](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#assign-a-public-ip-per-node-for-your-node-pools). The default is false.
* **enableUltraSSD**: bool: Whether to enable UltraSSD
* **gpuInstanceProfile**: 'MIG1g' | 'MIG2g' | 'MIG3g' | 'MIG4g' | 'MIG7g' | string: GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU.
* **hostGroupID**: string: This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information see [Azure dedicated hosts](https://docs.microsoft.com/azure/virtual-machines/dedicated-hosts).
* **kubeletConfig**: [KubeletConfig](#kubeletconfig): The Kubelet configuration on the agent pool nodes.
* **kubeletDiskType**: 'OS' | 'Temporary' | string: Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
* **linuxOSConfig**: [LinuxOSConfig](#linuxosconfig): The OS configuration of Linux agent nodes.
* **maxCount**: int: The maximum number of nodes for auto-scaling
* **maxPods**: int: The maximum number of pods that can run on a node.
* **messageOfTheDay**: string: A base64-encoded string which will be written to /etc/motd after decoding. This allows customization of the message of the day for Linux nodes. It must not be specified for Windows nodes. It must be a static string (i.e., will be printed raw and not be executed as a script).
* **minCount**: int: The minimum number of nodes for auto-scaling
* **mode**: 'System' | 'User' | string: A cluster must have at least one 'System' Agent Pool at all times. For additional information on agent pool restrictions and best practices, see: https://docs.microsoft.com/azure/aks/use-system-pools
* **name**: string {pattern: "^[a-z][a-z0-9]{0,11}$"} (Required): Windows agent pool names must be 6 characters or less.
* **nodeImageVersion**: string (ReadOnly): The version of node image
* **nodeLabels**: [ManagedClusterAgentPoolProfilePropertiesNodeLabels](#managedclusteragentpoolprofilepropertiesnodelabels): The node labels to be persisted across all nodes in agent pool.
* **nodePublicIPPrefixID**: string: This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIPPrefixName}
* **nodeTaints**: string[]: The taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
* **orchestratorVersion**: string: Both patch version <major.minor.patch> and <major.minor> are supported. When <major.minor> is specified, the latest supported patch version is chosen automatically. Updating the agent pool with the same <major.minor> once it has been created will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see [upgrading a node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#upgrade-a-node-pool).
* **osDiskSizeGB**: int {minValue: 0, maxValue: 2048}: OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
* **osDiskType**: 'Ephemeral' | 'Managed' | string: The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
* **osSKU**: 'CBLMariner' | 'Mariner' | 'Ubuntu' | 'Windows2019' | 'Windows2022' | string: Specifies the OS SKU used by the agent pool. If not specified, the default is Ubuntu if OSType=Linux or Windows2019 if OSType=Windows. And the default Windows OSSKU will be changed to Windows2022 after Windows2019 is deprecated.
* **osType**: 'Linux' | 'Windows' | string: The operating system type. The default is Linux.
* **podSubnetID**: string: If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
* **powerState**: [PowerState](#powerstate): When an Agent Pool is first created it is initially Running. The Agent Pool can be stopped by setting this field to Stopped. A stopped Agent Pool stops all of its VMs and does not accrue billing charges. An Agent Pool can only be stopped if it is Running and provisioning state is Succeeded
* **provisioningState**: string (ReadOnly): The current deployment or provisioning state.
* **proximityPlacementGroupID**: string: The ID for Proximity Placement Group.
* **scaleDownMode**: 'Deallocate' | 'Delete' | string: This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete.
* **scaleSetEvictionPolicy**: 'Deallocate' | 'Delete' | string: This cannot be specified unless the scaleSetPriority is 'Spot'. If not specified, the default is 'Delete'.
* **scaleSetPriority**: 'Regular' | 'Spot' | string: The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
* **spotMaxPrice**: int: Possible values are any decimal value greater than zero or -1 which indicates the willingness to pay any on-demand price. For more details on spot pricing, see [spot VMs pricing](https://docs.microsoft.com/azure/virtual-machines/spot-vms#pricing)
* **tags**: [ManagedClusterAgentPoolProfilePropertiesTags](#managedclusteragentpoolprofilepropertiestags): The tags to be persisted on the agent pool virtual machine scale set.
* **type**: 'AvailabilitySet' | 'VirtualMachineScaleSets' | string: The type of Agent Pool.
* **upgradeSettings**: [AgentPoolUpgradeSettings](#agentpoolupgradesettings): Settings for upgrading the agentpool
* **vmSize**: string: VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
* **vnetSubnetID**: string: If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
* **windowsProfile**: [AgentPoolWindowsProfile](#agentpoolwindowsprofile): The Windows agent pool's specific profile.
* **workloadRuntime**: 'OCIContainer' | 'WasmWasi' | string: Determines the type of workload a node can run.

## ManagedClusterAgentPoolProfileProperties
### Properties
* **availabilityZones**: string[]: The list of Availability zones to use for nodes. This can only be specified if the AgentPoolType property is 'VirtualMachineScaleSets'.
* **capacityReservationGroupID**: string: AKS will associate the specified agent pool with the Capacity Reservation Group.
* **count**: int: Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1.
* **creationData**: [CreationData](#creationdata): CreationData to be used to specify the source Snapshot ID if the node pool will be created/upgraded using a snapshot.
* **currentOrchestratorVersion**: string (ReadOnly): If orchestratorVersion was a fully specified version <major.minor.patch>, this field will be exactly equal to it. If orchestratorVersion was <major.minor>, this field will contain the full <major.minor.patch> version being used.
* **enableAutoScaling**: bool: Whether to enable auto-scaler
* **enableCustomCATrust**: bool: When set to true, AKS deploys a daemonset and host services to sync custom certificate authorities from a user-provided config map into node trust stores. Defaults to false.
* **enableEncryptionAtHost**: bool: This is only supported on certain VM sizes and in certain Azure regions. For more information, see: https://docs.microsoft.com/azure/aks/enable-host-encryption
* **enableFIPS**: bool: See [Add a FIPS-enabled node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#add-a-fips-enabled-node-pool-preview) for more details.
* **enableNodePublicIP**: bool: Some scenarios may require nodes in a node pool to receive their own dedicated public IP addresses. A common scenario is for gaming workloads, where a console needs to make a direct connection to a cloud virtual machine to minimize hops. For more information see [assigning a public IP per node](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#assign-a-public-ip-per-node-for-your-node-pools). The default is false.
* **enableUltraSSD**: bool: Whether to enable UltraSSD
* **gpuInstanceProfile**: 'MIG1g' | 'MIG2g' | 'MIG3g' | 'MIG4g' | 'MIG7g' | string: GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU.
* **hostGroupID**: string: This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information see [Azure dedicated hosts](https://docs.microsoft.com/azure/virtual-machines/dedicated-hosts).
* **kubeletConfig**: [KubeletConfig](#kubeletconfig): The Kubelet configuration on the agent pool nodes.
* **kubeletDiskType**: 'OS' | 'Temporary' | string: Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
* **linuxOSConfig**: [LinuxOSConfig](#linuxosconfig): The OS configuration of Linux agent nodes.
* **maxCount**: int: The maximum number of nodes for auto-scaling
* **maxPods**: int: The maximum number of pods that can run on a node.
* **messageOfTheDay**: string: A base64-encoded string which will be written to /etc/motd after decoding. This allows customization of the message of the day for Linux nodes. It must not be specified for Windows nodes. It must be a static string (i.e., will be printed raw and not be executed as a script).
* **minCount**: int: The minimum number of nodes for auto-scaling
* **mode**: 'System' | 'User' | string: A cluster must have at least one 'System' Agent Pool at all times. For additional information on agent pool restrictions and best practices, see: https://docs.microsoft.com/azure/aks/use-system-pools
* **nodeImageVersion**: string (ReadOnly): The version of node image
* **nodeLabels**: [ManagedClusterAgentPoolProfilePropertiesNodeLabels](#managedclusteragentpoolprofilepropertiesnodelabels): The node labels to be persisted across all nodes in agent pool.
* **nodePublicIPPrefixID**: string: This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIPPrefixName}
* **nodeTaints**: string[]: The taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
* **orchestratorVersion**: string: Both patch version <major.minor.patch> and <major.minor> are supported. When <major.minor> is specified, the latest supported patch version is chosen automatically. Updating the agent pool with the same <major.minor> once it has been created will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see [upgrading a node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#upgrade-a-node-pool).
* **osDiskSizeGB**: int {minValue: 0, maxValue: 2048}: OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
* **osDiskType**: 'Ephemeral' | 'Managed' | string: The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
* **osSKU**: 'CBLMariner' | 'Mariner' | 'Ubuntu' | 'Windows2019' | 'Windows2022' | string: Specifies the OS SKU used by the agent pool. If not specified, the default is Ubuntu if OSType=Linux or Windows2019 if OSType=Windows. And the default Windows OSSKU will be changed to Windows2022 after Windows2019 is deprecated.
* **osType**: 'Linux' | 'Windows' | string: The operating system type. The default is Linux.
* **podSubnetID**: string: If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
* **powerState**: [PowerState](#powerstate): When an Agent Pool is first created it is initially Running. The Agent Pool can be stopped by setting this field to Stopped. A stopped Agent Pool stops all of its VMs and does not accrue billing charges. An Agent Pool can only be stopped if it is Running and provisioning state is Succeeded
* **provisioningState**: string (ReadOnly): The current deployment or provisioning state.
* **proximityPlacementGroupID**: string: The ID for Proximity Placement Group.
* **scaleDownMode**: 'Deallocate' | 'Delete' | string: This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete.
* **scaleSetEvictionPolicy**: 'Deallocate' | 'Delete' | string: This cannot be specified unless the scaleSetPriority is 'Spot'. If not specified, the default is 'Delete'.
* **scaleSetPriority**: 'Regular' | 'Spot' | string: The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
* **spotMaxPrice**: int: Possible values are any decimal value greater than zero or -1 which indicates the willingness to pay any on-demand price. For more details on spot pricing, see [spot VMs pricing](https://docs.microsoft.com/azure/virtual-machines/spot-vms#pricing)
* **tags**: [ManagedClusterAgentPoolProfilePropertiesTags](#managedclusteragentpoolprofilepropertiestags): The tags to be persisted on the agent pool virtual machine scale set.
* **type**: 'AvailabilitySet' | 'VirtualMachineScaleSets' | string: The type of Agent Pool.
* **upgradeSettings**: [AgentPoolUpgradeSettings](#agentpoolupgradesettings): Settings for upgrading the agentpool
* **vmSize**: string: VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
* **vnetSubnetID**: string: If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
* **windowsProfile**: [AgentPoolWindowsProfile](#agentpoolwindowsprofile): The Windows agent pool's specific profile.
* **workloadRuntime**: 'OCIContainer' | 'WasmWasi' | string: Determines the type of workload a node can run.

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
* **authorizedIPRanges**: string[]: IP ranges are specified in CIDR format, e.g. 137.117.106.88/29. This feature is not compatible with clusters that use Public IP Per Node, or clusters that are using a Basic Load Balancer. For more information see [API server authorized IP ranges](https://docs.microsoft.com/azure/aks/api-server-authorized-ip-ranges).
* **disableRunCommand**: bool: Whether to disable run command for the cluster or not.
* **enablePrivateCluster**: bool: For more details, see [Creating a private AKS cluster](https://docs.microsoft.com/azure/aks/private-clusters).
* **enablePrivateClusterPublicFQDN**: bool: Whether to create additional public FQDN for private cluster or not.
* **enableVnetIntegration**: bool: Whether to enable apiserver vnet integration for the cluster or not.
* **privateDNSZone**: string: The default is System. For more details see [configure private DNS zone](https://docs.microsoft.com/azure/aks/private-clusters#configure-private-dns-zone). Allowed values are 'system' and 'none'.
* **subnetId**: string: It is required when: 1. creating a new cluster with BYO Vnet; 2. updating an existing cluster to enable apiserver vnet integration.

## ManagedClusterAutoUpgradeProfile
### Properties
* **upgradeChannel**: 'node-image' | 'none' | 'patch' | 'rapid' | 'stable' | string: For more information see [setting the AKS cluster auto-upgrade channel](https://docs.microsoft.com/azure/aks/upgrade-cluster#set-auto-upgrade-channel).

## ManagedClusterAzureMonitorProfile
### Properties
* **metrics**: [ManagedClusterAzureMonitorProfileMetrics](#managedclusterazuremonitorprofilemetrics): Metrics profile for the prometheus service addon

## ManagedClusterAzureMonitorProfileKubeStateMetrics
### Properties
* **metricAnnotationsAllowList**: string: Comma-separated list of additional Kubernetes label keys that will be used in the resource's labels metric.
* **metricLabelsAllowlist**: string: Comma-separated list of Kubernetes annotations keys that will be used in the resource's labels metric.

## ManagedClusterAzureMonitorProfileMetrics
### Properties
* **enabled**: bool (Required): Whether to enable the Prometheus collector
* **kubeStateMetrics**: [ManagedClusterAzureMonitorProfileKubeStateMetrics](#managedclusterazuremonitorprofilekubestatemetrics): Kube State Metrics for prometheus addon profile for the container service cluster

## ManagedClusterHttpProxyConfig
### Properties
* **effectiveNoProxy**: string[] (ReadOnly): A read-only list of all endpoints for which traffic should not be sent to the proxy. This list is a superset of noProxy and values injected by AKS.
* **httpProxy**: string: The HTTP proxy server endpoint to use.
* **httpsProxy**: string: The HTTPS proxy server endpoint to use.
* **noProxy**: string[]: The endpoints that should not go through proxy.
* **trustedCa**: string: Alternative CA cert to use for connecting to proxy servers.

## ManagedClusterIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the system assigned identity which is used by master components.
* **tenantId**: string (ReadOnly): The tenant id of the system assigned identity which is used by master components.
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned': For more information see [use managed identities in AKS](https://docs.microsoft.com/azure/aks/use-managed-identity).
* **userAssignedIdentities**: [ManagedClusterIdentityUserAssignedIdentities](#managedclusteridentityuserassignedidentities): The keys must be ARM resource IDs in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## ManagedClusterIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [ManagedServiceIdentityUserAssignedIdentitiesValue](#managedserviceidentityuserassignedidentitiesvalue)

## ManagedClusterIngressProfile
### Properties
* **webAppRouting**: [ManagedClusterIngressProfileWebAppRouting](#managedclusteringressprofilewebapprouting): Web App Routing settings for the ingress profile.

## ManagedClusterIngressProfileWebAppRouting
### Properties
* **dnsZoneResourceId**: string: Resource ID of the DNS Zone to be associated with the web app. Used only when Web App Routing is enabled.
* **enabled**: bool: Whether to enable Web App Routing.

## ManagedClusterLoadBalancerProfile
### Properties
* **allocatedOutboundPorts**: int {minValue: 0, maxValue: 64000}: The desired number of allocated SNAT ports per VM. Allowed values are in the range of 0 to 64000 (inclusive). The default value is 0 which results in Azure dynamically allocating ports.
* **backendPoolType**: 'NodeIP' | 'NodeIPConfiguration' | string: The type of the managed inbound Load Balancer BackendPool.
* **effectiveOutboundIPs**: [ResourceReference](#resourcereference)[]: The effective outbound IP resources of the cluster load balancer.
* **enableMultipleStandardLoadBalancers**: bool: Enable multiple standard load balancers per AKS cluster or not.
* **idleTimeoutInMinutes**: int {minValue: 4, maxValue: 120}: Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 30 minutes.
* **managedOutboundIPs**: [ManagedClusterLoadBalancerProfileManagedOutboundIPs](#managedclusterloadbalancerprofilemanagedoutboundips): Desired managed outbound IPs for the cluster load balancer.
* **outboundIPPrefixes**: [ManagedClusterLoadBalancerProfileOutboundIPPrefixes](#managedclusterloadbalancerprofileoutboundipprefixes): Desired outbound IP Prefix resources for the cluster load balancer.
* **outboundIPs**: [ManagedClusterLoadBalancerProfileOutboundIPs](#managedclusterloadbalancerprofileoutboundips): Desired outbound IP resources for the cluster load balancer.

## ManagedClusterLoadBalancerProfileManagedOutboundIPs
### Properties
* **count**: int {minValue: 1, maxValue: 100}: The desired number of IPv4 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
* **countIPv6**: int {minValue: 0, maxValue: 100}: The desired number of IPv6 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 0 for single-stack and 1 for dual-stack.

## ManagedClusterLoadBalancerProfileOutboundIPPrefixes
### Properties
* **publicIPPrefixes**: [ResourceReference](#resourcereference)[]: A list of public IP prefix resources.

## ManagedClusterLoadBalancerProfileOutboundIPs
### Properties
* **publicIPs**: [ResourceReference](#resourcereference)[]: A list of public IP resources.

## ManagedClusterManagedOutboundIPProfile
### Properties
* **count**: int {minValue: 1, maxValue: 16}: The desired number of outbound IPs created/managed by Azure. Allowed values must be in the range of 1 to 16 (inclusive). The default value is 1.

## ManagedClusterNATGatewayProfile
### Properties
* **effectiveOutboundIPs**: [ResourceReference](#resourcereference)[]: The effective outbound IP resources of the cluster NAT gateway.
* **idleTimeoutInMinutes**: int {minValue: 4, maxValue: 120}: Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 4 minutes.
* **managedOutboundIPProfile**: [ManagedClusterManagedOutboundIPProfile](#managedclustermanagedoutboundipprofile): Profile of the managed outbound IP resources of the cluster NAT gateway.

## ManagedClusterOidcIssuerProfile
### Properties
* **enabled**: bool: Whether the OIDC issuer is enabled.
* **issuerURL**: string (ReadOnly): The OIDC issuer url of the Managed Cluster.

## ManagedClusterPodIdentity
### Properties
* **bindingSelector**: string: The binding selector to use for the AzureIdentityBinding resource.
* **identity**: [UserAssignedIdentity](#userassignedidentity) (Required): The user assigned identity details.
* **name**: string (Required): The name of the pod identity.
* **namespace**: string (Required): The namespace of the pod identity.
* **provisioningInfo**: [ManagedClusterPodIdentityProvisioningInfo](#managedclusterpodidentityprovisioninginfo) (ReadOnly)
* **provisioningState**: 'Assigned' | 'Deleting' | 'Failed' | 'Updating' | string (ReadOnly): The current provisioning state of the pod identity.

## ManagedClusterPodIdentityException
### Properties
* **name**: string (Required): The name of the pod identity exception.
* **namespace**: string (Required): The namespace of the pod identity exception.
* **podLabels**: [ManagedClusterPodIdentityExceptionPodLabels](#managedclusterpodidentityexceptionpodlabels) (Required): The pod labels to match.

## ManagedClusterPodIdentityExceptionPodLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedClusterPodIdentityProfile
### Properties
* **allowNetworkPluginKubenet**: bool: Running in Kubenet is disabled by default due to the security related nature of AAD Pod Identity and the risks of IP spoofing. See [using Kubenet network plugin with AAD Pod Identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity#using-kubenet-network-plugin-with-azure-active-directory-pod-managed-identities) for more information.
* **enabled**: bool: Whether the pod identity addon is enabled.
* **userAssignedIdentities**: [ManagedClusterPodIdentity](#managedclusterpodidentity)[]: The pod identities to use in the cluster.
* **userAssignedIdentityExceptions**: [ManagedClusterPodIdentityException](#managedclusterpodidentityexception)[]: The pod identity exceptions to allow.

## ManagedClusterPodIdentityProvisioningError
### Properties
* **error**: [ManagedClusterPodIdentityProvisioningErrorBody](#managedclusterpodidentityprovisioningerrorbody): Details about the error.

## ManagedClusterPodIdentityProvisioningErrorBody
### Properties
* **code**: string: An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
* **details**: [ManagedClusterPodIdentityProvisioningErrorBody](#managedclusterpodidentityprovisioningerrorbody)[]: A list of additional details about the error.
* **message**: string: A message describing the error, intended to be suitable for display in a user interface.
* **target**: string: The target of the particular error. For example, the name of the property in error.

## ManagedClusterPodIdentityProvisioningInfo
### Properties
* **error**: [ManagedClusterPodIdentityProvisioningError](#managedclusterpodidentityprovisioningerror): Pod identity assignment error (if any).

## ManagedClusterProperties
### Properties
* **aadProfile**: [ManagedClusterAADProfile](#managedclusteraadprofile): The Azure Active Directory configuration.
* **addonProfiles**: [ManagedClusterPropertiesAddonProfiles](#managedclusterpropertiesaddonprofiles): The profile of managed cluster add-on.
* **agentPoolProfiles**: [ManagedClusterAgentPoolProfile](#managedclusteragentpoolprofile)[]: The agent pool properties.
* **apiServerAccessProfile**: [ManagedClusterAPIServerAccessProfile](#managedclusterapiserveraccessprofile): The access profile for managed cluster API server.
* **autoScalerProfile**: [ManagedClusterPropertiesAutoScalerProfile](#managedclusterpropertiesautoscalerprofile): Parameters to be applied to the cluster-autoscaler when enabled
* **autoUpgradeProfile**: [ManagedClusterAutoUpgradeProfile](#managedclusterautoupgradeprofile): The auto upgrade configuration.
* **azureMonitorProfile**: [ManagedClusterAzureMonitorProfile](#managedclusterazuremonitorprofile): Prometheus addon profile for the container service cluster
* **azurePortalFQDN**: string (ReadOnly): The Azure Portal requires certain Cross-Origin Resource Sharing (CORS) headers to be sent in some responses, which Kubernetes APIServer doesn't handle by default. This special FQDN supports CORS, allowing the Azure Portal to function properly.
* **creationData**: [CreationData](#creationdata): CreationData to be used to specify the source Snapshot ID if the cluster will be created/upgraded using a snapshot.
* **currentKubernetesVersion**: string (ReadOnly): The version of Kubernetes the Managed Cluster is running.
* **disableLocalAccounts**: bool: If set to true, getting static credentials will be disabled for this cluster. This must only be used on Managed Clusters that are AAD enabled. For more details see [disable local accounts](https://docs.microsoft.com/azure/aks/managed-aad#disable-local-accounts-preview).
* **diskEncryptionSetID**: string: This is of the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{encryptionSetName}'
* **dnsPrefix**: string: This cannot be updated once the Managed Cluster has been created.
* **enableNamespaceResources**: bool: The default value is false. It can be enabled/disabled on creation and updating of the managed cluster. See [https://aka.ms/NamespaceARMResource](https://aka.ms/NamespaceARMResource) for more details on Namespace as a ARM Resource.
* **enablePodSecurityPolicy**: bool: (DEPRECATING) Whether to enable Kubernetes pod security policy (preview). This feature is set for removal on October 15th, 2020. Learn more at aka.ms/aks/azpodpolicy.
* **enableRBAC**: bool: Whether to enable Kubernetes Role-Based Access Control.
* **fqdn**: string (ReadOnly): The FQDN of the master pool.
* **fqdnSubdomain**: string: This cannot be updated once the Managed Cluster has been created.
* **guardrailsProfile**: [GuardrailsProfile](#guardrailsprofile): The guardrails profile holds all the guardrails information for a given cluster
* **httpProxyConfig**: [ManagedClusterHttpProxyConfig](#managedclusterhttpproxyconfig): Configurations for provisioning the cluster with HTTP proxy servers.
* **identityProfile**: [ManagedClusterPropertiesIdentityProfile](#managedclusterpropertiesidentityprofile): Identities associated with the cluster.
* **ingressProfile**: [ManagedClusterIngressProfile](#managedclusteringressprofile): Ingress profile for the managed cluster.
* **kubernetesVersion**: string: When you upgrade a supported AKS cluster, Kubernetes minor versions cannot be skipped. All upgrades must be performed sequentially by major version number. For example, upgrades between 1.14.x -> 1.15.x or 1.15.x -> 1.16.x are allowed, however 1.14.x -> 1.16.x is not allowed. See [upgrading an AKS cluster](https://docs.microsoft.com/azure/aks/upgrade-cluster) for more details.
* **linuxProfile**: [ContainerServiceLinuxProfile](#containerservicelinuxprofile): The profile for Linux VMs in the Managed Cluster.
* **maxAgentPools**: int (ReadOnly): The max number of agent pools for the managed cluster.
* **networkProfile**: [ContainerServiceNetworkProfile](#containerservicenetworkprofile): The network configuration profile.
* **nodeResourceGroup**: string: The name of the resource group containing agent pool nodes.
* **oidcIssuerProfile**: [ManagedClusterOidcIssuerProfile](#managedclusteroidcissuerprofile): The OIDC issuer profile of the Managed Cluster.
* **podIdentityProfile**: [ManagedClusterPodIdentityProfile](#managedclusterpodidentityprofile): See [use AAD pod identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity) for more details on AAD pod identity integration.
* **powerState**: [PowerState](#powerstate) (ReadOnly): The Power State of the cluster.
* **privateFQDN**: string (ReadOnly): The FQDN of private cluster.
* **privateLinkResources**: [PrivateLinkResource](#privatelinkresource)[]: Private link resources associated with the cluster.
* **provisioningState**: string (ReadOnly): The current provisioning state.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | 'SecuredByPerimeter' | string: Allow or deny public network access for AKS
* **securityProfile**: [ManagedClusterSecurityProfile](#managedclustersecurityprofile): Security profile for the managed cluster.
* **servicePrincipalProfile**: [ManagedClusterServicePrincipalProfile](#managedclusterserviceprincipalprofile): Information about a service principal identity for the cluster to use for manipulating Azure APIs.
* **storageProfile**: [ManagedClusterStorageProfile](#managedclusterstorageprofile): Storage profile for the managed cluster.
* **windowsProfile**: [ManagedClusterWindowsProfile](#managedclusterwindowsprofile): The profile for Windows VMs in the Managed Cluster.
* **workloadAutoScalerProfile**: [ManagedClusterWorkloadAutoScalerProfile](#managedclusterworkloadautoscalerprofile): Workload Auto-scaler profile for the container service cluster.

## ManagedClusterPropertiesAddonProfiles
### Properties
### Additional Properties
* **Additional Properties Type**: [ManagedClusterAddonProfile](#managedclusteraddonprofile)

## ManagedClusterPropertiesAutoScalerProfile
### Properties
* **balance-similar-node-groups**: string: Valid values are 'true' and 'false'
* **expander**: 'least-waste' | 'most-pods' | 'priority' | 'random' | string: If not specified, the default is 'random'. See [expanders](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#what-are-expanders) for more information.
* **max-empty-bulk-delete**: string: The default is 10.
* **max-graceful-termination-sec**: string: The default is 600.
* **max-node-provision-time**: string: The default is '15m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
* **max-total-unready-percentage**: string: The default is 45. The maximum is 100 and the minimum is 0.
* **new-pod-scale-up-delay**: string: For scenarios like burst/batch scale where you don't want CA to act before the kubernetes scheduler could schedule all the pods, you can tell CA to ignore unscheduled pods before they're a certain age. The default is '0s'. Values must be an integer followed by a unit ('s' for seconds, 'm' for minutes, 'h' for hours, etc).
* **ok-total-unready-count**: string: This must be an integer. The default is 3.
* **scale-down-delay-after-add**: string: The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
* **scale-down-delay-after-delete**: string: The default is the scan-interval. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
* **scale-down-delay-after-failure**: string: The default is '3m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
* **scale-down-unneeded-time**: string: The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
* **scale-down-unready-time**: string: The default is '20m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
* **scale-down-utilization-threshold**: string: The default is '0.5'.
* **scan-interval**: string: The default is '10'. Values must be an integer number of seconds.
* **skip-nodes-with-local-storage**: string: The default is true.
* **skip-nodes-with-system-pods**: string: The default is true.

## ManagedClusterPropertiesForSnapshot
### Properties
* **enableRbac**: bool: Whether the cluster has enabled Kubernetes Role-Based Access Control or not.
* **kubernetesVersion**: string: The current kubernetes version.
* **networkProfile**: [NetworkProfileForSnapshot](#networkprofileforsnapshot) (ReadOnly): The current network profile.
* **sku**: [ManagedClusterSKU](#managedclustersku): The current managed cluster sku.

## ManagedClusterPropertiesIdentityProfile
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## ManagedClusterSecurityProfile
### Properties
* **azureKeyVaultKms**: [AzureKeyVaultKms](#azurekeyvaultkms): Azure Key Vault [key management service](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/) settings for the security profile.
* **defender**: [ManagedClusterSecurityProfileDefender](#managedclustersecurityprofiledefender): Microsoft Defender settings for the security profile.
* **imageCleaner**: [ManagedClusterSecurityProfileImageCleaner](#managedclustersecurityprofileimagecleaner): ImageCleaner settings for the security profile.
* **nodeRestriction**: [ManagedClusterSecurityProfileNodeRestriction](#managedclustersecurityprofilenoderestriction): [Node Restriction](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#noderestriction) settings for the security profile.
* **workloadIdentity**: [ManagedClusterSecurityProfileWorkloadIdentity](#managedclustersecurityprofileworkloadidentity): [Workload Identity](https://azure.github.io/azure-workload-identity/docs/) settings for the security profile.

## ManagedClusterSecurityProfileDefender
### Properties
* **logAnalyticsWorkspaceResourceId**: string: Resource ID of the Log Analytics workspace to be associated with Microsoft Defender. When Microsoft Defender is enabled, this field is required and must be a valid workspace resource ID. When Microsoft Defender is disabled, leave the field empty.
* **securityMonitoring**: [ManagedClusterSecurityProfileDefenderSecurityMonitoring](#managedclustersecurityprofiledefendersecuritymonitoring): Microsoft Defender threat detection for Cloud settings for the security profile.

## ManagedClusterSecurityProfileDefenderSecurityMonitoring
### Properties
* **enabled**: bool: Whether to enable Defender threat detection

## ManagedClusterSecurityProfileImageCleaner
### Properties
* **enabled**: bool: Whether to enable ImageCleaner on AKS cluster.
* **intervalHours**: int: ImageCleaner scanning interval.

## ManagedClusterSecurityProfileNodeRestriction
### Properties
* **enabled**: bool: Whether to enable Node Restriction

## ManagedClusterSecurityProfileWorkloadIdentity
### Properties
* **enabled**: bool: Whether to enable Workload Identity

## ManagedClusterServicePrincipalProfile
### Properties
* **clientId**: string (Required): The ID for the service principal.
* **secret**: string: The secret password associated with the service principal in plain text.

## ManagedClusterSKU
### Properties
* **name**: 'Basic' | string: The name of a managed cluster SKU.
* **tier**: 'Free' | 'Paid' | string: If not specified, the default is 'Free'. See [uptime SLA](https://docs.microsoft.com/azure/aks/uptime-sla) for more details.

## ManagedClusterSnapshotProperties
### Properties
* **creationData**: [CreationData](#creationdata): CreationData to be used to specify the source resource ID to create this snapshot.
* **managedClusterPropertiesReadOnly**: [ManagedClusterPropertiesForSnapshot](#managedclusterpropertiesforsnapshot) (ReadOnly): What the properties will be showed when getting managed cluster snapshot. Those properties are read-only.
* **snapshotType**: 'ManagedCluster' | 'NodePool' | string: The type of a snapshot. The default is NodePool.

## ManagedClusterStorageProfile
### Properties
* **blobCSIDriver**: [ManagedClusterStorageProfileBlobCSIDriver](#managedclusterstorageprofileblobcsidriver): AzureBlob CSI Driver settings for the storage profile.
* **diskCSIDriver**: [ManagedClusterStorageProfileDiskCSIDriver](#managedclusterstorageprofilediskcsidriver): AzureDisk CSI Driver settings for the storage profile.
* **fileCSIDriver**: [ManagedClusterStorageProfileFileCSIDriver](#managedclusterstorageprofilefilecsidriver): AzureFile CSI Driver settings for the storage profile.
* **snapshotController**: [ManagedClusterStorageProfileSnapshotController](#managedclusterstorageprofilesnapshotcontroller): Snapshot Controller settings for the storage profile.

## ManagedClusterStorageProfileBlobCSIDriver
### Properties
* **enabled**: bool: Whether to enable AzureBlob CSI Driver. The default value is false.

## ManagedClusterStorageProfileDiskCSIDriver
### Properties
* **enabled**: bool: Whether to enable AzureDisk CSI Driver. The default value is true.
* **version**: string: The version of AzureDisk CSI Driver. The default value is v1.

## ManagedClusterStorageProfileFileCSIDriver
### Properties
* **enabled**: bool: Whether to enable AzureFile CSI Driver. The default value is true.

## ManagedClusterStorageProfileSnapshotController
### Properties
* **enabled**: bool: Whether to enable Snapshot Controller. The default value is true.

## ManagedClusterWindowsProfile
### Properties
* **adminPassword**: string: Specifies the password of the administrator account. <br><br> **Minimum-length:** 8 characters <br><br> **Max-length:** 123 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"
* **adminUsername**: string (Required): Specifies the name of the administrator account. <br><br> **Restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length:** 1 character <br><br> **Max-length:** 20 characters
* **enableCSIProxy**: bool: For more details on CSI proxy, see the [CSI proxy GitHub repo](https://github.com/kubernetes-csi/csi-proxy).
* **gmsaProfile**: [WindowsGmsaProfile](#windowsgmsaprofile): The Windows gMSA Profile in the Managed Cluster.
* **licenseType**: 'None' | 'Windows_Server' | string: The license type to use for Windows VMs. See [Azure Hybrid User Benefits](https://azure.microsoft.com/pricing/hybrid-benefit/faq/) for more details.

## ManagedClusterWorkloadAutoScalerProfile
### Properties
* **keda**: [ManagedClusterWorkloadAutoScalerProfileKeda](#managedclusterworkloadautoscalerprofilekeda): KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
* **verticalPodAutoscaler**: [ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscaler](#managedclusterworkloadautoscalerprofileverticalpodautoscaler)

## ManagedClusterWorkloadAutoScalerProfileKeda
### Properties
* **enabled**: bool (Required): Whether to enable KEDA.

## ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscaler
### Properties
* **controlledValues**: 'RequestsAndLimits' | 'RequestsOnly' | string (Required): Controls which resource value autoscaler will change. Default value is RequestsAndLimits.
* **enabled**: bool (Required): Whether to enable VPA. Default value is false.
* **updateMode**: 'Auto' | 'Initial' | 'Off' | 'Recreate' | string (Required): Each update mode level is a superset of the lower levels. Off<Initial<Recreate<=Auto. For example: if UpdateMode is Initial, it means VPA sets the recommended resources in the VerticalPodAutoscaler Custom Resource (from UpdateMode Off) and also assigns resources on pod creation (from Initial). The default value is Off.

## ManagedServiceIdentityUserAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## NetworkProfileForSnapshot
### Properties
* **loadBalancerSku**: 'basic' | 'standard' | string: loadBalancerSku for managed cluster snapshot.
* **networkMode**: 'bridge' | 'transparent' | string: networkMode for managed cluster snapshot.
* **networkPlugin**: 'azure' | 'kubenet' | 'none' | string: networkPlugin for managed cluster snapshot.
* **networkPluginMode**: 'Overlay' | string: NetworkPluginMode for managed cluster snapshot.
* **networkPolicy**: 'azure' | 'calico' | string: networkPolicy for managed cluster snapshot.

## PowerState
### Properties
* **code**: 'Running' | 'Stopped' | string: Tells whether the cluster is Running or Stopped

## PrivateEndpoint
### Properties
* **id**: string: The resource ID of the private endpoint

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The resource of private endpoint.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The current provisioning state.

## PrivateLinkResource
### Properties
* **groupId**: string: The group ID of the resource.
* **id**: string: The ID of the private link resource.
* **name**: string: The name of the private link resource.
* **privateLinkServiceID**: string (ReadOnly): The private link service ID of the resource, this field is exposed only to NRP internally.
* **requiredMembers**: string[]: The RequiredMembers of the resource
* **type**: string: The resource type.

## PrivateLinkServiceConnectionState
### Properties
* **description**: string: The private link service connection description.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: The private link service connection status.

## ResourceReference
### Properties
* **id**: string: The fully qualified Azure resource id.

## SnapshotProperties
### Properties
* **creationData**: [CreationData](#creationdata): CreationData to be used to specify the source agent pool resource ID to create this snapshot.
* **enableFIPS**: bool (ReadOnly): Whether to use a FIPS-enabled OS.
* **kubernetesVersion**: string (ReadOnly): The version of Kubernetes.
* **nodeImageVersion**: string (ReadOnly): The version of node image.
* **osSku**: 'CBLMariner' | 'Mariner' | 'Ubuntu' | 'Windows2019' | 'Windows2022' | string (ReadOnly): Specifies the OS SKU used by the agent pool. If not specified, the default is Ubuntu if OSType=Linux or Windows2019 if OSType=Windows. And the default Windows OSSKU will be changed to Windows2022 after Windows2019 is deprecated.
* **osType**: 'Linux' | 'Windows' | string (ReadOnly): The operating system type. The default is Linux.
* **snapshotType**: 'ManagedCluster' | 'NodePool' | string: The type of a snapshot. The default is NodePool.
* **vmSize**: string (ReadOnly): The size of the VM.

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
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TimeInWeek
### Properties
* **day**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string: The day of the week.
* **hourSlots**: (int {minValue: 0, maxValue: 23})[]: Each integer hour represents a time range beginning at 0m after the hour ending at the next hour (non-inclusive). 0 corresponds to 00:00 UTC, 23 corresponds to 23:00 UTC. Specifying [0, 1] means the 00:00 - 02:00 UTC time range.

## TimeSpan
### Properties
* **end**: string: The end of a time span
* **start**: string: The start of a time span

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrustedAccessRoleBindingProperties
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state of trusted access role binding.
* **roles**: string[] (Required): A list of roles to bind, each item is a resource type qualified role name. For example: 'Microsoft.MachineLearningServices/workspaces/reader'.
* **sourceResourceId**: string (Required): The ARM resource ID of source resource that trusted access is configured for.

## UserAssignedIdentity
### Properties
* **clientId**: string: The client ID of the user assigned identity.
* **objectId**: string: The object ID of the user assigned identity.
* **resourceId**: string: The resource ID of the user assigned identity.

## WindowsGmsaProfile
### Properties
* **dnsServer**: string: Specifies the DNS server for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
* **enabled**: bool: Specifies whether to enable Windows gMSA in the managed cluster.
* **rootDomainName**: string: Specifies the root domain name for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.

