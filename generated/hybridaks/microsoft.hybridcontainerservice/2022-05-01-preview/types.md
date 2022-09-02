# Microsoft.HybridContainerService @ 2022-05-01-preview

## Resource Microsoft.HybridContainerService/provisionedClusters@2022-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ProvisionedClustersExtendedLocationOrProvisionedClustersResponseExtendedLocation](#provisionedclustersextendedlocationorprovisionedclustersresponseextendedlocation)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ProvisionedClusterIdentity](#provisionedclusteridentity): Identity for the Provisioned cluster.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProvisionedClustersAllPropertiesOrProvisionedClustersResponseProperties](#provisionedclustersallpropertiesorprovisionedclustersresponseproperties): All properties of the provisioned cluster
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridContainerService/provisionedClusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridContainerService/provisionedClusters/agentPools@2022-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [AgentPoolExtendedLocation](#agentpoolextendedlocation)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AgentPoolProperties](#agentpoolproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [AgentPoolTags](#agentpooltags): Resource tags
* **type**: 'Microsoft.HybridContainerService/provisionedClusters/agentPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridContainerService/provisionedClusters/hybridIdentityMetadata@2022-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridIdentityMetadataProperties](#hybrididentitymetadataproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **type**: 'Microsoft.HybridContainerService/provisionedClusters/hybridIdentityMetadata' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridContainerService/storageSpaces@2022-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [StorageSpacesExtendedLocation](#storagespacesextendedlocation)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageSpacesProperties](#storagespacesproperties): HybridAKSStorageSpec defines the desired state of HybridAKSStorage
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridContainerService/storageSpaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridContainerService/virtualNetworks@2022-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [VirtualNetworksExtendedLocation](#virtualnetworksextendedlocation)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworksProperties](#virtualnetworksproperties): HybridAKSNetworkSpec defines the desired state of HybridAKSNetwork
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridContainerService/virtualNetworks' (ReadOnly, DeployTimeConstant): The resource type

## AADProfileOrAADProfileResponse
### Properties
* **adminGroupObjectIDs**: string[]: The list of AAD group object IDs that will have admin role of the cluster.
* **clientAppID**: string: The client AAD application ID.
* **enableAzureRbac**: bool: Whether to enable Azure RBAC for Kubernetes authorization.
* **managed**: bool: Whether to enable managed AAD.
* **serverAppID**: string: The server AAD application ID.
* **serverAppSecret**: string (WriteOnly): The server AAD application secret.
* **tenantID**: string: The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.

## AddonProfiles
### Properties
* **config**: [AddonProfilesConfig](#addonprofilesconfig): Config - Key-value pairs for configuring an add-on.
* **enabled**: bool: Enabled - Whether the add-on is enabled or not.

## AddonProfilesConfig
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AddonStatus
### Properties
* **errorMessage**: string: ErrorMessage will be set in the event that there is a terminal problem reconciling the AddOn and will contain a more verbose string suitable for logging and human consumption.
* **phase**: string: Phase represents the current phase of cluster actuation. E.g. Pending, Running, Terminating, Failed etc.
* **ready**: bool

## AgentPoolExtendedLocation
### Properties
* **name**: string: The extended location name.
* **type**: string: The extended location type.

## AgentPoolProfileNodeLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AgentPoolProfileNodeLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AgentPoolProfileNodeLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AgentPoolProfileNodeLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AgentPoolProperties
### Properties
* **availabilityZones**: string[]: AvailabilityZones - The list of Availability zones to use for nodes. Datacenter racks modelled as zones
* **cloudProviderProfile**: [CloudProviderProfile](#cloudproviderprofile): The underlying cloud infra provider properties.
* **count**: int: Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
* **maxCount**: int: The maximum number of nodes for auto-scaling
* **maxPods**: int: The maximum number of pods that can run on a node.
* **minCount**: int: The minimum number of nodes for auto-scaling
* **mode**: 'LB' | 'System' | 'User' | string: Mode - AgentPoolMode represents mode of an agent pool. Possible values include: 'System', 'LB', 'User'. Default is 'User'
* **nodeImageVersion**: string: The version of node image
* **nodeLabels**: [AgentPoolProfileNodeLabels](#agentpoolprofilenodelabels): NodeLabels - Agent pool node labels to be persisted across all nodes in agent pool.
* **nodeTaints**: string[]: NodeTaints - Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
* **osType**: 'Linux' | 'Windows' | string: OsType - OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. Possible values include: 'Linux', 'Windows'
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly)
* **status**: [AgentPoolProvisioningStatusStatus](#agentpoolprovisioningstatusstatus): HybridAKSNodePoolStatus defines the observed state of HybridAKSNodePool
* **vmSize**: string: VmSize - The size of the agent pool VMs.

## AgentPoolProvisioningStatusError
### Properties
* **code**: string
* **message**: string

## AgentPoolProvisioningStatusStatus
### Properties
* **errorMessage**: string: ErrorMessage - Error messages during creation of cluster
* **provisioningStatus**: [AgentPoolProvisioningStatusStatusProvisioningStatus](#agentpoolprovisioningstatusstatusprovisioningstatus): Contains Provisioning errors
* **readyReplicas**: int: Total number of ready machines targeted by this deployment.
* **replicas**: int: Total number of non-terminated machines targeted by this deployment

## AgentPoolProvisioningStatusStatusProvisioningStatus
### Properties
* **error**: [AgentPoolProvisioningStatusError](#agentpoolprovisioningstatuserror)
* **operationId**: string
* **phase**: string: Phase represents the current phase of cluster actuation. E.g. Pending, Running, Terminating, Failed etc.
* **status**: string

## AgentPoolTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ArcAgentProfile
### Properties
* **agentAutoUpgrade**: 'Disabled' | 'Enabled' | string: Indicates whether the Arc agents on the provisioned clusters be upgraded automatically to the latest version. Defaults to Enabled.
* **agentVersion**: string: Version of the Arc agents to be installed on the provisioned Provisioned cluster resource

## ArcAgentStatus
### Properties
* **agentVersion**: string: Version of the Arc agents currently running on the Provisioned cluster resource.
* **coreCount**: int: Number of CPU cores present in the Provisioned cluster resource
* **deploymentState**: 'deleting' | 'failed' | 'pending' | 'provisioned' | 'provisioning' | 'upgrading' | string: Observed deployment state of the Arc Agents on the target cluster. Possible values include: 'pending', 'provisioning', 'provisioned', 'deleting', 'failed', 'upgrading'
* **errorMessage**: string: Error messages while onboarding/upgrading/uninstalling the Arc agents
* **lastConnectivityTime**: string: Last connected timestamp of the Provisioned cluster resource.
* **managedIdentityCertificateExpirationTime**: string: ManagedIdentity certificate expiration time (ValidUntil).
* **onboardingPublicKey**: string: Onboarding public key for provisioning the Managed identity for the HybridAKS cluster. Will be used to create the hybridIdentityMetadata proxy resource and will not be persisted.

## CloudProviderProfile
### Properties
* **infraNetworkProfile**: [CloudProviderProfileInfraNetworkProfile](#cloudproviderprofileinfranetworkprofile): InfraNetworkProfile - List of infra network profiles for the provisioned cluster
* **infraStorageProfile**: [CloudProviderProfileInfraStorageProfile](#cloudproviderprofileinfrastorageprofile): InfraStorageProfile - List of infra storage profiles for the provisioned cluster

## CloudProviderProfileInfraNetworkProfile
### Properties
* **vnetSubnetIds**: string[]: Array of references to azure resource corresponding to the new HybridAKSNetwork object e.g. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridContainerService/virtualNetworks/{virtualNetworkName}

## CloudProviderProfileInfraStorageProfile
### Properties
* **storageSpaceIds**: string[]: Reference to azure resource corresponding to the new HybridAKSStorage object e.g. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridContainerService/storageSpaces/{storageSpaceName}

## ControlPlaneEndpointProfileControlPlaneEndpoint
### Properties
* **hostIP**: string: Host IP address for API server
* **port**: string: Port for the API server

## ControlPlaneProfile
### Properties
* **availabilityZones**: string[]: AvailabilityZones - The list of Availability zones to use for nodes. Datacenter racks modelled as zones
* **cloudProviderProfile**: [CloudProviderProfile](#cloudproviderprofile): The underlying cloud infra provider properties.
* **controlPlaneEndpoint**: [ControlPlaneEndpointProfileControlPlaneEndpoint](#controlplaneendpointprofilecontrolplaneendpoint): API server endpoint for the control plane
* **count**: int: Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
* **linuxProfile**: [LinuxProfileProperties](#linuxprofileproperties): Profile for Linux VMs in the container service cluster.
* **maxCount**: int: The maximum number of nodes for auto-scaling
* **maxPods**: int: The maximum number of pods that can run on a node.
* **minCount**: int: The minimum number of nodes for auto-scaling
* **mode**: 'LB' | 'System' | 'User' | string: Mode - AgentPoolMode represents mode of an agent pool. Possible values include: 'System', 'LB', 'User'. Default is 'User'
* **name**: string: Unique name of the agent pool profile in the context of the subscription and resource group.
* **nodeImageVersion**: string: The version of node image
* **nodeLabels**: [AgentPoolProfileNodeLabels](#agentpoolprofilenodelabels): NodeLabels - Agent pool node labels to be persisted across all nodes in agent pool.
* **nodeTaints**: string[]: NodeTaints - Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
* **osType**: 'Linux' | 'Windows' | string: OsType - OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. Possible values include: 'Linux', 'Windows'
* **vmSize**: string: VmSize - The size of the agent pool VMs.

## HttpProxyConfigOrHttpProxyConfigResponse
### Properties
* **httpProxy**: string: The HTTP proxy server endpoint to use.
* **httpsProxy**: string: The HTTPS proxy server endpoint to use.
* **noProxy**: string[]: The endpoints that should not go through proxy.
* **password**: string (WriteOnly): Password to use for connecting to proxy server
* **trustedCa**: string: Alternative CA cert to use for connecting to proxy servers.
* **username**: string: Username to use for connecting to proxy server

## HybridIdentityMetadataProperties
### Properties
* **identity**: [ProvisionedClusterIdentity](#provisionedclusteridentity): The identity of the provisioned cluster.
* **provisioningState**: string (ReadOnly): provisioning state of the hybridIdentityMetadata resource.
* **publicKey**: string: Onboarding public key for provisioning the Managed identity for the HybridAKS cluster.
* **resourceUid**: string: Unique id of the parent provisioned cluster resource.

## LinuxProfileProperties
### Properties
* **adminUsername**: string: AdminUsername - The administrator username to use for Linux VMs.
* **ssh**: [LinuxProfilePropertiesSsh](#linuxprofilepropertiesssh): SSH - SSH configuration for Linux-based VMs running on Azure.

## LinuxProfilePropertiesSsh
### Properties
* **publicKeys**: [LinuxProfilePropertiesSshPublicKeysItem](#linuxprofilepropertiessshpublickeysitem)[]: PublicKeys - The list of SSH public keys used to authenticate with Linux-based VMs. Only expect one key specified.

## LinuxProfilePropertiesSshPublicKeysItem
### Properties
* **keyData**: string: KeyData - Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.

## LoadBalancerProfile
### Properties
* **availabilityZones**: string[]: AvailabilityZones - The list of Availability zones to use for nodes. Datacenter racks modelled as zones
* **cloudProviderProfile**: [CloudProviderProfile](#cloudproviderprofile): The underlying cloud infra provider properties.
* **count**: int: Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
* **linuxProfile**: [LinuxProfileProperties](#linuxprofileproperties): Profile for Linux VMs in the container service cluster.
* **maxCount**: int: The maximum number of nodes for auto-scaling
* **maxPods**: int: The maximum number of pods that can run on a node.
* **minCount**: int: The minimum number of nodes for auto-scaling
* **mode**: 'LB' | 'System' | 'User' | string: Mode - AgentPoolMode represents mode of an agent pool. Possible values include: 'System', 'LB', 'User'. Default is 'User'
* **name**: string: Unique name of the agent pool profile in the context of the subscription and resource group.
* **nodeImageVersion**: string: The version of node image
* **nodeLabels**: [AgentPoolProfileNodeLabels](#agentpoolprofilenodelabels): NodeLabels - Agent pool node labels to be persisted across all nodes in agent pool.
* **nodeTaints**: string[]: NodeTaints - Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
* **osType**: 'Linux' | 'Windows' | string: OsType - OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. Possible values include: 'Linux', 'Windows'
* **vmSize**: string: VmSize - The size of the agent pool VMs.

## NamedAgentPoolProfile
### Properties
* **availabilityZones**: string[]: AvailabilityZones - The list of Availability zones to use for nodes. Datacenter racks modelled as zones
* **cloudProviderProfile**: [CloudProviderProfile](#cloudproviderprofile): The underlying cloud infra provider properties.
* **count**: int: Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
* **maxCount**: int: The maximum number of nodes for auto-scaling
* **maxPods**: int: The maximum number of pods that can run on a node.
* **minCount**: int: The minimum number of nodes for auto-scaling
* **mode**: 'LB' | 'System' | 'User' | string: Mode - AgentPoolMode represents mode of an agent pool. Possible values include: 'System', 'LB', 'User'. Default is 'User'
* **name**: string: Unique name of the agent pool profile in the context of the subscription and resource group.
* **nodeImageVersion**: string: The version of node image
* **nodeLabels**: [AgentPoolProfileNodeLabels](#agentpoolprofilenodelabels): NodeLabels - Agent pool node labels to be persisted across all nodes in agent pool.
* **nodeTaints**: string[]: NodeTaints - Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
* **osType**: 'Linux' | 'Windows' | string: OsType - OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. Possible values include: 'Linux', 'Windows'
* **vmSize**: string: VmSize - The size of the agent pool VMs.

## NetworkProfile
### Properties
* **dnsServiceIP**: string: DNSServiceIP - An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
* **loadBalancerProfile**: [LoadBalancerProfile](#loadbalancerprofile): LoadBalancerProfile - Profile of the cluster load balancer.
* **loadBalancerSku**: 'stacked-kube-vip' | 'stacked-metallb' | 'unmanaged' | 'unstacked-haproxy' | string: LoadBalancerSku - The load balancer sku for the provisioned cluster. Possible values: 'unstacked-haproxy', 'stacked-kube-vip', 'stacked-metallb', 'unmanaged'. The default is 'unmanaged'.
* **networkPolicy**: 'calico' | 'flannel' | string: NetworkPolicy - Network policy used for building Kubernetes network. Possible values include: 'calico', 'flannel'. Default is 'calico'
* **podCidr**: string: PodCidr - A CIDR notation IP range from which to assign pod IPs when kubenet is used.
* **podCidrs**: string[]: The CIDR notation IP ranges from which to assign pod IPs. One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
* **serviceCidr**: string: ServiceCidr - A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
* **serviceCidrs**: string[]: The CIDR notation IP ranges from which to assign service cluster IPs. One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. They must not overlap with any Subnet IP ranges.

## ProvisionedClusterIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of provisioned cluster identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the provisioned cluster. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' (Required): The type of identity used for the provisioned cluster. The type SystemAssigned, includes a system created identity. The type None means no identity is assigned to the provisioned cluster.

## ProvisionedClustersAllPropertiesOrProvisionedClustersResponseProperties
### Properties
* **aadProfile**: [AADProfileOrAADProfileResponse](#aadprofileoraadprofileresponse): AAD profile for the provisioned cluster.
* **addonProfiles**: [ProvisionedClustersCommonPropertiesAddonProfiles](#provisionedclusterscommonpropertiesaddonprofiles): AddonProfiles - Profile of managed cluster add-on.
* **agentPoolProfiles**: [NamedAgentPoolProfile](#namedagentpoolprofile)[]: The agent pools of the cluster.
* **cloudProviderProfile**: [CloudProviderProfile](#cloudproviderprofile): The underlying cloud infra provider properties.
* **controlPlane**: [ControlPlaneProfile](#controlplaneprofile): ControlPlane - ControlPlane Configuration
* **enableRbac**: bool: EnableRBAC - Whether to enable Kubernetes Role-Based Access Control.
* **features**: [ProvisionedClustersCommonPropertiesFeatures](#provisionedclusterscommonpropertiesfeatures): Additional features specs like Arc Agent Onboarding.
* **httpProxyConfig**: [HttpProxyConfigOrHttpProxyConfigResponse](#httpproxyconfigorhttpproxyconfigresponse): HttpProxyConfig - Configurations for provisioning the cluster with HTTP proxy servers.
* **kubernetesVersion**: string: KubernetesVersion - Version of Kubernetes specified when creating the managed cluster.
* **linuxProfile**: [LinuxProfileProperties](#linuxprofileproperties): LinuxProfile - The profile for Linux VMs in the Provisioned Cluster.
* **networkProfile**: [NetworkProfile](#networkprofile): NetworkProfile - Profile of network configuration.
* **nodeResourceGroup**: string: NodeResourceGroup - Name of the resource group containing agent pool nodes.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | 'Updating' | string (ReadOnly)
* **status**: [ProvisionedClustersCommonPropertiesStatus](#provisionedclusterscommonpropertiesstatus) (ReadOnly): HybridAKSClusterStatus defines the observed state of HybridAKSCluster
* **windowsProfile**: [WindowsProfileOrWindowsProfileResponse](#windowsprofileorwindowsprofileresponse): WindowsProfile - Profile for Windows VMs in the Provisioned Cluster.

## ProvisionedClustersCommonPropertiesAddonProfiles
### Properties
### Additional Properties
* **Additional Properties Type**: [AddonProfiles](#addonprofiles)

## ProvisionedClustersCommonPropertiesFeatures
### Properties
* **arcAgentProfile**: [ArcAgentProfile](#arcagentprofile): Arc agentry configuration for the provisioned cluster.

## ProvisionedClustersCommonPropertiesStatus
### Properties
* **addonStatus**: [ProvisionedClustersCommonPropertiesStatusAddonStatus](#provisionedclusterscommonpropertiesstatusaddonstatus): AddonStatus - Status of Addons
* **errorMessage**: string: ErrorMessage - Error messages during creation of cluster
* **featuresStatus**: [ProvisionedClustersCommonPropertiesStatusFeaturesStatus](#provisionedclusterscommonpropertiesstatusfeaturesstatus): Additional features status like Arc Agent Onboarding.
* **provisioningStatus**: [ProvisionedClustersCommonPropertiesStatusProvisioningStatus](#provisionedclusterscommonpropertiesstatusprovisioningstatus): Contains Provisioning errors

## ProvisionedClustersCommonPropertiesStatusAddonStatus
### Properties
### Additional Properties
* **Additional Properties Type**: [AddonStatus](#addonstatus)

## ProvisionedClustersCommonPropertiesStatusFeaturesStatus
### Properties
* **arcAgentStatus**: [ArcAgentStatus](#arcagentstatus): Defines the observed Arc Agent status that is resourceSynced back to the ARM resource.

## ProvisionedClustersCommonPropertiesStatusProvisioningStatus
### Properties
* **error**: [ProvisionedClustersCommonPropertiesStatusProvisioningStatusError](#provisionedclusterscommonpropertiesstatusprovisioningstatuserror)
* **operationId**: string
* **phase**: string: Phase represents the current phase of cluster actuation. E.g. Pending, Running, Terminating, Failed etc.
* **status**: string

## ProvisionedClustersCommonPropertiesStatusProvisioningStatusError
### Properties
* **code**: string
* **message**: string

## ProvisionedClustersExtendedLocationOrProvisionedClustersResponseExtendedLocation
### Properties
* **name**: string: The extended location name.
* **type**: string: The extended location type.

## StorageSpacesExtendedLocation
### Properties
* **name**: string: The extended location name.
* **type**: string: The extended location type.

## StorageSpacesProperties
### Properties
* **hciStorageProfile**: [StorageSpacesPropertiesHciStorageProfile](#storagespacespropertieshcistorageprofile)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | 'Updating' | string (ReadOnly)
* **status**: [StorageSpacesPropertiesStatus](#storagespacespropertiesstatus): HybridAKSStorageStatus defines the observed state of HybridAKSStorage
* **vmwareStorageProfile**: [StorageSpacesPropertiesVmwareStorageProfile](#storagespacespropertiesvmwarestorageprofile)

## StorageSpacesPropertiesHciStorageProfile
### Properties
* **mocGroup**: string: Resource group in MOC(Microsoft On-premises Cloud)
* **mocLocation**: string: Location in MOC(Microsoft On-premises Cloud)
* **mocStorageContainer**: string: Name of the storage container in MOC(Microsoft On-premises Cloud)

## StorageSpacesPropertiesStatus
### Properties
* **provisioningStatus**: [StorageSpacesPropertiesStatusProvisioningStatus](#storagespacespropertiesstatusprovisioningstatus): Contains Provisioning errors

## StorageSpacesPropertiesStatusProvisioningStatus
### Properties
* **error**: [StorageSpacesPropertiesStatusProvisioningStatusError](#storagespacespropertiesstatusprovisioningstatuserror)
* **operationId**: string
* **phase**: string: Phase represents the current phase of cluster actuation. E.g. Pending, Running, Terminating, Failed etc.
* **status**: string

## StorageSpacesPropertiesStatusProvisioningStatusError
### Properties
* **code**: string
* **message**: string

## StorageSpacesPropertiesVmwareStorageProfile
### Properties
* **datacenter**: string: Name of the datacenter in VSphere
* **datastore**: string: Name of the datastore in VSphere
* **folder**: string: Name of the folder in VSphere
* **resourcePool**: string: Name of the resource pool in VSphere

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualNetworksExtendedLocation
### Properties
* **name**: string: The extended location name.
* **type**: string: The extended location type.

## VirtualNetworksProperties
### Properties
* **dhcpServers**: string[] (ReadOnly): Address of the DHCP servers associated with the network
* **dnsServers**: string[] (ReadOnly): Address of the DNS servers associated with the network
* **gateway**: string (ReadOnly): Address of the Gateway associated with the network
* **infraVnetProfile**: [VirtualNetworksPropertiesInfraVnetProfile](#virtualnetworkspropertiesinfravnetprofile)
* **ipAddressPrefix**: string (ReadOnly): IP Address Prefix of the network
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | 'Updating' | string (ReadOnly)
* **status**: [VirtualNetworksPropertiesStatus](#virtualnetworkspropertiesstatus) (ReadOnly): HybridAKSNetworkStatus defines the observed state of HybridAKSNetwork
* **vipPool**: [VirtualNetworksPropertiesVipPoolItem](#virtualnetworkspropertiesvippoolitem)[]: Virtual IP Pool for Kubernetes
* **vlanID**: string (ReadOnly): VLAN Id used by the network
* **vmipPool**: [VirtualNetworksPropertiesVmipPoolItem](#virtualnetworkspropertiesvmippoolitem)[]: IP Pool for Virtual Machines

## VirtualNetworksPropertiesInfraVnetProfile
### Properties
* **hci**: [VirtualNetworksPropertiesInfraVnetProfileHci](#virtualnetworkspropertiesinfravnetprofilehci): Infra network profile for HCI platform
* **kubevirt**: [VirtualNetworksPropertiesInfraVnetProfileKubevirt](#virtualnetworkspropertiesinfravnetprofilekubevirt): Infra network profile for KubeVirt platform
* **vmware**: [VirtualNetworksPropertiesInfraVnetProfileVmware](#virtualnetworkspropertiesinfravnetprofilevmware): Infra network profile for VMware platform

## VirtualNetworksPropertiesInfraVnetProfileHci
### Properties
* **mocGroup**: string: Resource group in MOC(Microsoft On-premises Cloud)
* **mocLocation**: string: Location in MOC(Microsoft On-premises Cloud)
* **mocVnetName**: string: Virtual Network name in MOC(Microsoft On-premises Cloud)

## VirtualNetworksPropertiesInfraVnetProfileKubevirt
### Properties
* **vnetName**: string: Name of the network in KubeVirt

## VirtualNetworksPropertiesInfraVnetProfileVmware
### Properties
* **segmentName**: string: Name of the network segment in VSphere

## VirtualNetworksPropertiesStatus
### Properties
* **provisioningStatus**: [VirtualNetworksPropertiesStatusProvisioningStatus](#virtualnetworkspropertiesstatusprovisioningstatus): Contains Provisioning errors

## VirtualNetworksPropertiesStatusProvisioningStatus
### Properties
* **error**: [VirtualNetworksPropertiesStatusProvisioningStatusError](#virtualnetworkspropertiesstatusprovisioningstatuserror)
* **operationId**: string
* **phase**: string: Phase represents the current phase of cluster actuation. E.g. Pending, Running, Terminating, Failed etc.
* **status**: string

## VirtualNetworksPropertiesStatusProvisioningStatusError
### Properties
* **code**: string
* **message**: string

## VirtualNetworksPropertiesVipPoolItem
### Properties
* **endIP**: string: Ending IP address for the IP Pool
* **startIP**: string: Starting IP address for the IP Pool

## VirtualNetworksPropertiesVmipPoolItem
### Properties
* **endIP**: string: Ending IP address for the IP Pool
* **startIP**: string: Starting IP address for the IP Pool

## WindowsProfileOrWindowsProfileResponse
### Properties
* **adminPassword**: string (WriteOnly): AdminPassword - Specifies the password of the administrator account. <br><br> **Minimum-length:** 8 characters <br><br> **Max-length:** 123 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"
* **adminUsername**: string: AdminUsername - Specifies the name of the administrator account. <br><br> **restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length:** 1 character <br><br> **Max-length:** 20 characters
* **enableCsiProxy**: bool: EnableCSIProxy - Whether to enable CSI proxy.
* **licenseType**: 'None' | 'Windows_Server' | string: LicenseType - The licenseType to use for Windows VMs. Windows_Server is used to enable Azure Hybrid User Benefits for Windows VMs. Possible values include: 'None', 'Windows_Server'

