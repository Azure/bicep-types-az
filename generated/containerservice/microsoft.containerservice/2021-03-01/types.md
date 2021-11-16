# Microsoft.ContainerService @ 2021-03-01

## Resource Microsoft.ContainerService/managedClusters@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The complex type of the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedClusterIdentity](#managedclusteridentity): Identity for the managed cluster.
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedClusterProperties](#managedclusterproperties): Properties of the managed cluster.
* **sku**: [ManagedClusterSKU](#managedclustersku)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.ContainerService/managedClusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/agentPools@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedClusterAgentPoolProfileProperties](#managedclusteragentpoolprofileproperties): Properties for the container service agent pool profile.
* **type**: 'Microsoft.ContainerService/managedClusters/agentPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/maintenanceConfigurations@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MaintenanceConfigurationProperties](#maintenanceconfigurationproperties): Default maintenance configuration properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.ContainerService/managedClusters/maintenanceConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/privateEndpointConnections@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of a private endpoint connection.
* **type**: 'Microsoft.ContainerService/managedClusters/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Function listClusterAdminCredential (Microsoft.ContainerService/managedClusters@2021-03-01)
* **Resource**: Microsoft.ContainerService/managedClusters
* **ApiVersion**: 2021-03-01
* **Output**: [CredentialResults](#credentialresults)

## Function listClusterMonitoringUserCredential (Microsoft.ContainerService/managedClusters@2021-03-01)
* **Resource**: Microsoft.ContainerService/managedClusters
* **ApiVersion**: 2021-03-01
* **Output**: [CredentialResults](#credentialresults)

## Function listClusterUserCredential (Microsoft.ContainerService/managedClusters@2021-03-01)
* **Resource**: Microsoft.ContainerService/managedClusters
* **ApiVersion**: 2021-03-01
* **Output**: [CredentialResults](#credentialresults)

## Function listCredential (Microsoft.ContainerService/managedClusters/accessProfiles@2021-03-01)
* **Resource**: Microsoft.ContainerService/managedClusters/accessProfiles
* **ApiVersion**: 2021-03-01
* **Output**: [ManagedClusterAccessProfile](#managedclusteraccessprofile)

## ExtendedLocation
### Properties
* **name**: string: The name of the extended location.
* **type**: 'EdgeZone': The type of extendedLocation.

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

## Components1Umhcm8SchemasManagedclusteridentityPropertiesUserassignedidentitiesAdditionalproperties
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## ManagedClusterProperties
### Properties
* **aadProfile**: [ManagedClusterAADProfile](#managedclusteraadprofile): AADProfile specifies attributes for Azure Active Directory integration.
* **addonProfiles**: [ManagedClusterPropertiesAddonProfiles](#managedclusterpropertiesaddonprofiles): Profile of managed cluster add-on.
* **agentPoolProfiles**: [ManagedClusterAgentPoolProfile](#managedclusteragentpoolprofile)[]: Properties of the agent pool.
* **apiServerAccessProfile**: [ManagedClusterAPIServerAccessProfile](#managedclusterapiserveraccessprofile): Access profile for managed cluster API server.
* **autoScalerProfile**: [ManagedClusterPropertiesAutoScalerProfile](#managedclusterpropertiesautoscalerprofile): Parameters to be applied to the cluster-autoscaler when enabled
* **autoUpgradeProfile**: [ManagedClusterAutoUpgradeProfile](#managedclusterautoupgradeprofile): Auto upgrade profile for a managed cluster.
* **azurePortalFQDN**: string (ReadOnly): FQDN for the master pool which used by proxy config.
* **disableLocalAccounts**: bool: If set to true, getting static credential will be disabled for this cluster. Expected to only be used for AAD clusters.
* **diskEncryptionSetID**: string: ResourceId of the disk encryption set to use for enabling encryption at rest.
* **dnsPrefix**: string: DNS prefix specified when creating the managed cluster.
* **enablePodSecurityPolicy**: bool: (DEPRECATING) Whether to enable Kubernetes pod security policy (preview). This feature is set for removal on October 15th, 2020. Learn more at aka.ms/aks/azpodpolicy.
* **enableRBAC**: bool: Whether to enable Kubernetes Role-Based Access Control.
* **fqdn**: string (ReadOnly): FQDN for the master pool.
* **fqdnSubdomain**: string: FQDN subdomain specified when creating private cluster with custom private dns zone.
* **httpProxyConfig**: [ManagedClusterHttpProxyConfig](#managedclusterhttpproxyconfig): Configurations for provisioning the cluster with HTTP proxy servers.
* **identityProfile**: [ManagedClusterPropertiesIdentityProfile](#managedclusterpropertiesidentityprofile): Identities associated with the cluster.
* **kubernetesVersion**: string: Version of Kubernetes specified when creating the managed cluster.
* **linuxProfile**: [ContainerServiceLinuxProfile](#containerservicelinuxprofile): Profile for Linux VMs in the container service cluster.
* **maxAgentPools**: int (ReadOnly): The max number of agent pools for the managed cluster.
* **networkProfile**: [ContainerServiceNetworkProfile](#containerservicenetworkprofile): Profile of network configuration.
* **nodeResourceGroup**: string: Name of the resource group containing agent pool nodes.
* **podIdentityProfile**: [ManagedClusterPodIdentityProfile](#managedclusterpodidentityprofile)
* **powerState**: [PowerState](#powerstate) (ReadOnly): Describes the Power State of the cluster
* **privateFQDN**: string (ReadOnly): FQDN of private cluster.
* **privateLinkResources**: [PrivateLinkResource](#privatelinkresource)[]: Private link resources associated with the cluster.
* **provisioningState**: string (ReadOnly): The current deployment or provisioning state, which only appears in the response.
* **servicePrincipalProfile**: [ManagedClusterServicePrincipalProfile](#managedclusterserviceprincipalprofile): Information about a service principal identity for the cluster to use for manipulating Azure APIs.
* **windowsProfile**: [ManagedClusterWindowsProfile](#managedclusterwindowsprofile): Profile for Windows VMs in the container service cluster.

## ManagedClusterAADProfile
### Properties
* **adminGroupObjectIDs**: string[]: AAD group object IDs that will have admin role of the cluster.
* **clientAppID**: string: The client AAD application ID.
* **enableAzureRBAC**: bool: Whether to enable Azure RBAC for Kubernetes authorization.
* **managed**: bool: Whether to enable managed AAD.
* **serverAppID**: string: The server AAD application ID.
* **serverAppSecret**: string: The server AAD application secret.
* **tenantID**: string: The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.

## ManagedClusterPropertiesAddonProfiles
### Properties
### Additional Properties
* **Additional Properties Type**: [ManagedClusterAddonProfile](#managedclusteraddonprofile)

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
* **enableFIPS**: bool: Whether to use FIPS enabled OS
* **enableNodePublicIP**: bool: Enable public IP for nodes
* **gpuInstanceProfile**: 'MIG1g' | 'MIG2g' | 'MIG3g' | 'MIG4g' | 'MIG7g': GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU. Supported values are MIG1g, MIG2g, MIG3g, MIG4g and MIG7g.
* **kubeletConfig**: [KubeletConfig](#kubeletconfig): Kubelet configurations of agent nodes.
* **kubeletDiskType**: 'OS' | 'Temporary': KubeletDiskType determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage. Allowed values: 'OS', 'Temporary' (preview).
* **linuxOSConfig**: [LinuxOSConfig](#linuxosconfig): OS configurations of Linux agent nodes.
* **maxCount**: int: Maximum number of nodes for auto-scaling
* **maxPods**: int: Maximum number of pods that can run on a node.
* **minCount**: int: Minimum number of nodes for auto-scaling
* **mode**: 'System' | 'User': AgentPoolMode represents mode of an agent pool.
* **name**: string (Required): Unique name of the agent pool profile in the context of the subscription and resource group.
* **nodeImageVersion**: string (ReadOnly): Version of node image
* **nodeLabels**: [ManagedClusterAgentPoolProfilePropertiesNodeLabels](#managedclusteragentpoolprofilepropertiesnodelabels): Agent pool node labels to be persisted across all nodes in agent pool.
* **nodePublicIPPrefixID**: string: Public IP Prefix ID. VM nodes use IPs assigned from this Public IP Prefix.
* **nodeTaints**: string[]: Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
* **orchestratorVersion**: string: Version of orchestrator specified when creating the managed cluster.
* **osDiskSizeGB**: int: OS Disk Size in GB to be used to specify the disk size for every machine in this master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
* **osDiskType**: 'Ephemeral' | 'Managed': OSDiskType represents the type of an OS disk on an agent pool.
* **osSKU**: 'CBLMariner' | 'Ubuntu': OsSKU to be used to specify os sku. Choose from Ubuntu(default) and CBLMariner for Linux OSType. Not applicable to Windows OSType.
* **osType**: 'Linux' | 'Windows': OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
* **podSubnetID**: string: specifies a subnet's resource id with subscription, resource group, vnet and subnet name
* **powerState**: [PowerState](#powerstate) (ReadOnly): Describes the Power State of the cluster
* **provisioningState**: string (ReadOnly): The current deployment or provisioning state, which only appears in the response.
* **proximityPlacementGroupID**: string: The ID for Proximity Placement Group.
* **scaleSetEvictionPolicy**: 'Deallocate' | 'Delete': ScaleSetEvictionPolicy to be used to specify eviction policy for Spot virtual machine scale set. Default to Delete.
* **scaleSetPriority**: 'Regular' | 'Spot': ScaleSetPriority to be used to specify virtual machine scale set priority. Default to regular.
* **spotMaxPrice**: int: SpotMaxPrice to be used to specify the maximum price you are willing to pay in US Dollars. Possible values are any decimal value greater than zero or -1 which indicates default price to be up-to on-demand.
* **tags**: [ManagedClusterAgentPoolProfilePropertiesTags](#managedclusteragentpoolprofilepropertiestags): Agent pool tags to be persisted on the agent pool virtual machine scale set.
* **type**: 'AvailabilitySet' | 'VirtualMachineScaleSets': AgentPoolType represents types of an agent pool.
* **upgradeSettings**: [AgentPoolUpgradeSettings](#agentpoolupgradesettings): Settings for upgrading an agentpool
* **vmSize**: string: Size of agent VMs.
* **vnetSubnetID**: string: specifies a subnet's resource id with subscription, resource group, vnet and subnet name

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

## ManagedClusterAgentPoolProfilePropertiesNodeLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PowerState
### Properties
* **code**: 'Running' | 'Stopped': Tells whether the cluster is Running or Stopped

## ManagedClusterAgentPoolProfilePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AgentPoolUpgradeSettings
### Properties
* **maxSurge**: string: Count or percentage of additional nodes to be added during upgrade. If empty uses AKS default

## ManagedClusterAPIServerAccessProfile
### Properties
* **authorizedIPRanges**: string[]: Authorized IP Ranges to kubernetes API server.
* **enablePrivateCluster**: bool: Whether to create the cluster as a private cluster or not.
* **privateDNSZone**: string: Private dns zone mode for private cluster.

## ManagedClusterPropertiesAutoScalerProfile
### Properties
* **balance-similar-node-groups**: string
* **expander**: 'least-waste' | 'most-pods' | 'priority' | 'random'
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

## ManagedClusterAutoUpgradeProfile
### Properties
* **upgradeChannel**: 'node-image' | 'none' | 'patch' | 'rapid' | 'stable': upgrade channel for auto upgrade.

## ManagedClusterHttpProxyConfig
### Properties
* **httpProxy**: string: HTTP proxy server endpoint to use.
* **httpsProxy**: string: HTTPS proxy server endpoint to use.
* **noProxy**: string[]: Endpoints that should not go through proxy.
* **trustedCa**: string: Alternative CA cert to use for connecting to proxy servers.

## ManagedClusterPropertiesIdentityProfile
### Properties
### Additional Properties
* **Additional Properties Type**: [ComponentsQit0EtSchemasManagedclusterpropertiesPropertiesIdentityprofileAdditionalproperties](#componentsqit0etschemasmanagedclusterpropertiespropertiesidentityprofileadditionalproperties)

## ComponentsQit0EtSchemasManagedclusterpropertiesPropertiesIdentityprofileAdditionalproperties
### Properties
* **clientId**: string: The client id of the user assigned identity.
* **objectId**: string: The object id of the user assigned identity.
* **resourceId**: string: The resource id of the user assigned identity.

## ContainerServiceLinuxProfile
### Properties
* **adminUsername**: string (Required): The administrator username to use for Linux VMs.
* **ssh**: [ContainerServiceSshConfiguration](#containerservicesshconfiguration) (Required): SSH configuration for Linux-based VMs running on Azure.

## ContainerServiceSshConfiguration
### Properties
* **publicKeys**: [ContainerServiceSshPublicKey](#containerservicesshpublickey)[] (Required): The list of SSH public keys used to authenticate with Linux-based VMs. Only expect one key specified.

## ContainerServiceSshPublicKey
### Properties
* **keyData**: string (Required): Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.

## ContainerServiceNetworkProfile
### Properties
* **dnsServiceIP**: string: An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
* **dockerBridgeCidr**: string: A CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the Kubernetes service address range.
* **loadBalancerProfile**: [ManagedClusterLoadBalancerProfile](#managedclusterloadbalancerprofile): Profile of the managed cluster load balancer.
* **loadBalancerSku**: 'basic' | 'standard': The load balancer sku for the managed cluster.
* **networkMode**: 'bridge' | 'transparent': Network mode used for building Kubernetes network.
* **networkPlugin**: 'azure' | 'kubenet': Network plugin used for building Kubernetes network.
* **networkPolicy**: 'azure' | 'calico': Network policy used for building Kubernetes network.
* **outboundType**: 'loadBalancer' | 'userDefinedRouting': The outbound (egress) routing method.
* **podCidr**: string: A CIDR notation IP range from which to assign pod IPs when kubenet is used.
* **serviceCidr**: string: A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.

## ManagedClusterLoadBalancerProfile
### Properties
* **allocatedOutboundPorts**: int: Desired number of allocated SNAT ports per VM. Allowed values must be in the range of 0 to 64000 (inclusive). The default value is 0 which results in Azure dynamically allocating ports.
* **effectiveOutboundIPs**: [ResourceReference](#resourcereference)[]: The effective outbound IP resources of the cluster load balancer.
* **idleTimeoutInMinutes**: int: Desired outbound flow idle timeout in minutes. Allowed values must be in the range of 4 to 120 (inclusive). The default value is 30 minutes.
* **managedOutboundIPs**: [ManagedClusterLoadBalancerProfileManagedOutboundIPs](#managedclusterloadbalancerprofilemanagedoutboundips): Desired managed outbound IPs for the cluster load balancer.
* **outboundIPPrefixes**: [ManagedClusterLoadBalancerProfileOutboundIPPrefixes](#managedclusterloadbalancerprofileoutboundipprefixes): Desired outbound IP Prefix resources for the cluster load balancer.
* **outboundIPs**: [ManagedClusterLoadBalancerProfileOutboundIPs](#managedclusterloadbalancerprofileoutboundips): Desired outbound IP resources for the cluster load balancer.

## ResourceReference
### Properties
* **id**: string: The fully qualified Azure resource id.

## ManagedClusterLoadBalancerProfileManagedOutboundIPs
### Properties
* **count**: int: Desired number of outbound IP created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.

## ManagedClusterLoadBalancerProfileOutboundIPPrefixes
### Properties
* **publicIPPrefixes**: [ResourceReference](#resourcereference)[]: A list of public IP prefix resources.

## ManagedClusterLoadBalancerProfileOutboundIPs
### Properties
* **publicIPs**: [ResourceReference](#resourcereference)[]: A list of public IP resources.

## ManagedClusterPodIdentityProfile
### Properties
* **allowNetworkPluginKubenet**: bool: Customer consent for enabling AAD pod identity addon in cluster using Kubenet network plugin.
* **enabled**: bool: Whether the pod identity addon is enabled.
* **userAssignedIdentities**: [ManagedClusterPodIdentity](#managedclusterpodidentity)[]: User assigned pod identity settings.
* **userAssignedIdentityExceptions**: [ManagedClusterPodIdentityException](#managedclusterpodidentityexception)[]: User assigned pod identity exception settings.

## ManagedClusterPodIdentity
### Properties
* **bindingSelector**: string: Binding selector to use for the AzureIdentityBinding resource.
* **identity**: [UserAssignedIdentity](#userassignedidentity) (Required)
* **name**: string (Required): Name of the pod identity.
* **namespace**: string (Required): Namespace of the pod identity.
* **provisioningInfo**: [ManagedClusterPodIdentityProvisioningInfo](#managedclusterpodidentityprovisioninginfo) (ReadOnly)
* **provisioningState**: 'Assigned' | 'Deleting' | 'Failed' | 'Updating' (ReadOnly): The current provisioning state of the pod identity.

## UserAssignedIdentity
### Properties
* **clientId**: string: The client id of the user assigned identity.
* **objectId**: string: The object id of the user assigned identity.
* **resourceId**: string: The resource id of the user assigned identity.

## ManagedClusterPodIdentityProvisioningInfo
### Properties
* **error**: [CloudError](#clouderror): An error response from the Container service.

## CloudError
### Properties
* **error**: [CloudErrorBody](#clouderrorbody): An error response from the Container service.

## CloudErrorBody
### Properties
* **code**: string: An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
* **details**: [CloudErrorBody](#clouderrorbody)[]: A list of additional details about the error.
* **message**: string: A message describing the error, intended to be suitable for display in a user interface.
* **target**: string: The target of the particular error. For example, the name of the property in error.

## ManagedClusterPodIdentityException
### Properties
* **name**: string (Required): Name of the pod identity exception.
* **namespace**: string (Required): Namespace of the pod identity exception.
* **podLabels**: [ManagedClusterPodIdentityExceptionPodLabels](#managedclusterpodidentityexceptionpodlabels) (Required): Pod labels to match.

## ManagedClusterPodIdentityExceptionPodLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateLinkResource
### Properties
* **groupId**: string: The group ID of the resource.
* **id**: string: The ID of the private link resource.
* **name**: string: The name of the private link resource.
* **privateLinkServiceID**: string (ReadOnly): The private link service ID of the resource, this field is exposed only to NRP internally.
* **requiredMembers**: string[]: RequiredMembers of the resource
* **type**: string: The resource type.

## ManagedClusterServicePrincipalProfile
### Properties
* **clientId**: string (Required): The ID for the service principal.
* **secret**: string: The secret password associated with the service principal in plain text.

## ManagedClusterWindowsProfile
### Properties
* **adminPassword**: string: Specifies the password of the administrator account. <br><br> **Minimum-length:** 8 characters <br><br> **Max-length:** 123 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"
* **adminUsername**: string (Required): Specifies the name of the administrator account. <br><br> **restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length:** 1 character <br><br> **Max-length:** 20 characters
* **enableCSIProxy**: bool: Whether to enable CSI proxy.
* **licenseType**: 'None' | 'Windows_Server': The licenseType to use for Windows VMs. Windows_Server is used to enable Azure Hybrid User Benefits for Windows VMs.

## ManagedClusterSKU
### Properties
* **name**: 'Basic': Name of a managed cluster SKU.
* **tier**: 'Free' | 'Paid': Tier of a managed cluster SKU.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedClusterAgentPoolProfileProperties
### Properties
* **availabilityZones**: string[]: Availability zones for nodes. Must use VirtualMachineScaleSets AgentPoolType.
* **count**: int: Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 100 (inclusive) for user pools and in the range of 1 to 100 (inclusive) for system pools. The default value is 1.
* **enableAutoScaling**: bool: Whether to enable auto-scaler
* **enableEncryptionAtHost**: bool: Whether to enable EncryptionAtHost
* **enableFIPS**: bool: Whether to use FIPS enabled OS
* **enableNodePublicIP**: bool: Enable public IP for nodes
* **gpuInstanceProfile**: 'MIG1g' | 'MIG2g' | 'MIG3g' | 'MIG4g' | 'MIG7g': GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU. Supported values are MIG1g, MIG2g, MIG3g, MIG4g and MIG7g.
* **kubeletConfig**: [KubeletConfig](#kubeletconfig): Kubelet configurations of agent nodes.
* **kubeletDiskType**: 'OS' | 'Temporary': KubeletDiskType determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage. Allowed values: 'OS', 'Temporary' (preview).
* **linuxOSConfig**: [LinuxOSConfig](#linuxosconfig): OS configurations of Linux agent nodes.
* **maxCount**: int: Maximum number of nodes for auto-scaling
* **maxPods**: int: Maximum number of pods that can run on a node.
* **minCount**: int: Minimum number of nodes for auto-scaling
* **mode**: 'System' | 'User': AgentPoolMode represents mode of an agent pool.
* **nodeImageVersion**: string (ReadOnly): Version of node image
* **nodeLabels**: [ManagedClusterAgentPoolProfilePropertiesNodeLabels](#managedclusteragentpoolprofilepropertiesnodelabels): Agent pool node labels to be persisted across all nodes in agent pool.
* **nodePublicIPPrefixID**: string: Public IP Prefix ID. VM nodes use IPs assigned from this Public IP Prefix.
* **nodeTaints**: string[]: Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
* **orchestratorVersion**: string: Version of orchestrator specified when creating the managed cluster.
* **osDiskSizeGB**: int: OS Disk Size in GB to be used to specify the disk size for every machine in this master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
* **osDiskType**: 'Ephemeral' | 'Managed': OSDiskType represents the type of an OS disk on an agent pool.
* **osSKU**: 'CBLMariner' | 'Ubuntu': OsSKU to be used to specify os sku. Choose from Ubuntu(default) and CBLMariner for Linux OSType. Not applicable to Windows OSType.
* **osType**: 'Linux' | 'Windows': OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
* **podSubnetID**: string: specifies a subnet's resource id with subscription, resource group, vnet and subnet name
* **powerState**: [PowerState](#powerstate) (ReadOnly): Describes the Power State of the cluster
* **provisioningState**: string (ReadOnly): The current deployment or provisioning state, which only appears in the response.
* **proximityPlacementGroupID**: string: The ID for Proximity Placement Group.
* **scaleSetEvictionPolicy**: 'Deallocate' | 'Delete': ScaleSetEvictionPolicy to be used to specify eviction policy for Spot virtual machine scale set. Default to Delete.
* **scaleSetPriority**: 'Regular' | 'Spot': ScaleSetPriority to be used to specify virtual machine scale set priority. Default to regular.
* **spotMaxPrice**: int: SpotMaxPrice to be used to specify the maximum price you are willing to pay in US Dollars. Possible values are any decimal value greater than zero or -1 which indicates default price to be up-to on-demand.
* **tags**: [ManagedClusterAgentPoolProfilePropertiesTags](#managedclusteragentpoolprofilepropertiestags): Agent pool tags to be persisted on the agent pool virtual machine scale set.
* **type**: 'AvailabilitySet' | 'VirtualMachineScaleSets': AgentPoolType represents types of an agent pool.
* **upgradeSettings**: [AgentPoolUpgradeSettings](#agentpoolupgradesettings): Settings for upgrading an agentpool
* **vmSize**: string: Size of agent VMs.
* **vnetSubnetID**: string: specifies a subnet's resource id with subscription, resource group, vnet and subnet name

## ManagedClusterAgentPoolProfilePropertiesNodeLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedClusterAgentPoolProfilePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MaintenanceConfigurationProperties
### Properties
* **notAllowedTime**: [TimeSpan](#timespan)[]: Time slots on which upgrade is not allowed.
* **timeInWeek**: [TimeInWeek](#timeinweek)[]: Weekday time slots allowed to upgrade.

## TimeSpan
### Properties
* **end**: string: The end of a time span
* **start**: string: The start of a time span

## TimeInWeek
### Properties
* **day**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday': The weekday enum.
* **hourSlots**: int[]: hour slots in a day.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The type of identity that last modified the resource.
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): Private endpoint which a connection belongs to.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): The state of a private link service connection.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly): The current provisioning state.

## PrivateEndpoint
### Properties
* **id**: string: The resource Id for private endpoint

## PrivateLinkServiceConnectionState
### Properties
* **description**: string: The private link service connection description.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected': The private link service connection status.

## CredentialResults
### Properties
* **kubeconfigs**: [CredentialResult](#credentialresult)[] (ReadOnly): Base64-encoded Kubernetes configuration file.

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

## ManagedClusterAccessProfile
### Properties
* **id**: string (ReadOnly): Resource Id
* **location**: string (ReadOnly): Resource location
* **name**: string (ReadOnly): Resource name
* **properties**: [AccessProfile](#accessprofile) (ReadOnly): Profile for enabling a user to access a managed cluster.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: string (ReadOnly): Resource type

## AccessProfile
### Properties
* **kubeConfig**: any (ReadOnly): Base64-encoded Kubernetes configuration file.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

