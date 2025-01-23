# Microsoft.HybridContainerService @ 2023-11-15-preview

## Resource Microsoft.HybridContainerService/kubernetesVersions@2023-11-15-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-11-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Extended Location definition
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [KubernetesVersionProfileProperties](#kubernetesversionprofileproperties) (ReadOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HybridContainerService/kubernetesVersions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridContainerService/provisionedClusterInstances@2023-11-15-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-11-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Extended Location definition
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ProvisionedClusterProperties](#provisionedclusterproperties): All properties of the provisioned cluster
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HybridContainerService/provisionedClusterInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridContainerService/provisionedClusterInstances/agentPools@2023-11-15-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-11-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Extended Location definition
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The resource location
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-_a-zA-Z0-9]{0,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AgentPoolProperties](#agentpoolproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [AgentPoolTags](#agentpooltags): Resource tags
* **type**: 'Microsoft.HybridContainerService/provisionedClusterInstances/agentPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridContainerService/provisionedClusterInstances/hybridIdentityMetadata@2023-11-15-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-11-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [HybridIdentityMetadataProperties](#hybrididentitymetadataproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HybridContainerService/provisionedClusterInstances/hybridIdentityMetadata' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridContainerService/provisionedClusterInstances/upgradeProfiles@2023-11-15-preview (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-11-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ProvisionedClusterUpgradeProfileProperties](#provisionedclusterupgradeprofileproperties) (ReadOnly): The properties of the upgrade profile.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HybridContainerService/provisionedClusterInstances/upgradeProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridContainerService/skus@2023-11-15-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-11-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Extended Location definition
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [VmSkuProfileProperties](#vmskuprofileproperties) (ReadOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HybridContainerService/skus' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridContainerService/virtualNetworks@2023-11-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [VirtualNetworkExtendedLocation](#virtualnetworkextendedlocation)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-_a-zA-Z0-9]{0,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkProperties](#virtualnetworkproperties): HybridAKSNetworkSpec defines the desired state of HybridAKSNetwork
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridContainerService/virtualNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Function listAdminKubeconfig (Microsoft.HybridContainerService/provisionedClusterInstances@2023-11-15-preview)
* **Resource**: Microsoft.HybridContainerService/provisionedClusterInstances
* **ApiVersion**: 2023-11-15-preview
* **Output**: [ListCredentialResponse](#listcredentialresponse)

## Function listUserKubeconfig (Microsoft.HybridContainerService/provisionedClusterInstances@2023-11-15-preview)
* **Resource**: Microsoft.HybridContainerService/provisionedClusterInstances
* **ApiVersion**: 2023-11-15-preview
* **Output**: [ListCredentialResponse](#listcredentialresponse)

## AddonStatusProfile
### Properties
* **errorMessage**: string: Error message while deploying the addon
* **name**: string: Name of the addon
* **phase**: 'deleting' | 'failed' | 'pending' | 'provisioned' | 'provisioning {HelmChartInstalled}' | 'provisioning {MSICertificateDownloaded}' | 'provisioning' | 'upgrading' | string: Observed phase of the addon on the target cluster. Possible values include: 'pending', 'provisioning', 'provisioning {HelmChartInstalled}', 'provisioning {MSICertificateDownloaded}', 'provisioned', 'deleting', 'failed', 'upgrading'
* **ready**: bool: Indicates whether the addon is ready

## AgentPoolProperties
### Properties
* **availabilityZones**: string[]: AvailabilityZones - The list of Availability zones to use for nodes. Datacenter racks modelled as zones
* **count**: int: Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
* **nodeImageVersion**: string: The version of node image
* **osSKU**: 'CBLMariner' | 'Windows2019' | 'Windows2022' | string: Specifies the OS SKU used by the agent pool. The default is CBLMariner if OSType is Linux. The default is Windows2019 when OSType is Windows.
* **osType**: 'Linux' | 'Windows' | string: The particular KubernetesVersion's Image's OS Type (Linux, Windows)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | 'Updating' | 'Upgrading' | string (ReadOnly): Provisioning state of the resource
* **status**: [AgentPoolProvisioningStatusStatus](#agentpoolprovisioningstatusstatus): Defines the observed state of the agent pool
* **vmSize**: string: VmSize - The size of the agent pool VMs.

## AgentPoolProvisioningStatusOperationStatus
### Properties
* **error**: [AgentPoolProvisioningStatusOperationStatusError](#agentpoolprovisioningstatusoperationstatuserror)
* **operationId**: string
* **status**: string

## AgentPoolProvisioningStatusOperationStatusError
### Properties
* **code**: string
* **message**: string

## AgentPoolProvisioningStatusStatus
### Properties
* **errorMessage**: string: ErrorMessage - Error messages during creation of agent pool
* **operationStatus**: [AgentPoolProvisioningStatusOperationStatus](#agentpoolprovisioningstatusoperationstatus): Contains Provisioning errors
* **readyReplicas**: [AgentPoolUpdateProfile](#agentpoolupdateprofile)[]

## AgentPoolTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AgentPoolUpdateProfile
### Properties
* **count**: int: Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
* **vmSize**: string: VmSize - The size of the agent pool VMs.

## CloudProviderProfile
### Properties
* **infraNetworkProfile**: [CloudProviderProfileInfraNetworkProfile](#cloudproviderprofileinfranetworkprofile): InfraNetworkProfile - List of infra network profiles for the provisioned cluster

## CloudProviderProfileInfraNetworkProfile
### Properties
* **vnetSubnetIds**: string[]: Array of references to azure resource corresponding to the Network object e.g. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/logicalNetworks/{logicalNetworkName}

## ControlPlaneEndpointProfileControlPlaneEndpoint
### Properties
* **hostIP**: string: Host IP address for API server
* **port**: int: Port for the API server

## ControlPlaneProfile
### Properties
* **availabilityZones**: string[]: AvailabilityZones - The list of Availability zones to use for nodes. Datacenter racks modelled as zones
* **controlPlaneEndpoint**: [ControlPlaneEndpointProfileControlPlaneEndpoint](#controlplaneendpointprofilecontrolplaneendpoint): API server endpoint for the control plane
* **count**: int: Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
* **linuxProfile**: [LinuxProfileProperties](#linuxprofileproperties): Profile for Linux VMs in the container service cluster.
* **name**: string: Unique name of the agent pool profile in the context of the subscription and resource group.
* **nodeImageVersion**: string: The version of node image
* **osSKU**: 'CBLMariner' | 'Windows2019' | 'Windows2022' | string: Specifies the OS SKU used by the agent pool. The default is CBLMariner if OSType is Linux. The default is Windows2019 when OSType is Windows.
* **osType**: 'Linux' | 'Windows' | string: The particular KubernetesVersion's Image's OS Type (Linux, Windows)
* **vmSize**: string: VmSize - The size of the agent pool VMs.

## CredentialResult
### Properties
* **name**: string (ReadOnly): The name of the credential.
* **value**: any (ReadOnly): Base64-encoded Kubernetes configuration file.

## ExtendedLocation
### Properties
* **name**: string: The extended location name.
* **type**: 'CustomLocation' | string: The extended location type.

## HybridIdentityMetadataProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | 'Updating' | 'Upgrading' | string (ReadOnly): Provisioning state of the resource
* **publicKey**: string: Onboarding public key for provisioning the Managed identity for the HybridAKS cluster.
* **resourceUid**: string: Unique id of the parent provisioned cluster resource.

## KubernetesPatchVersions
### Properties
* **readiness**: [KubernetesVersionReadiness](#kubernetesversionreadiness)[]: Whether the kubernetes version variant (Linux, Windows, Windows2022) is ready or not
* **upgrades**: string[]: Possible upgrade path for given patch version

## KubernetesVersionCapabilities
### Properties
* **supportPlan**: 'KubernetesOfficial'[]

## KubernetesVersionProfileProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | 'Updating' | 'Upgrading' | string (ReadOnly): Provisioning state of the resource
* **values**: [KubernetesVersionProperties](#kubernetesversionproperties)[]: List of supported Kubernetes versions

## KubernetesVersionProperties
### Properties
* **capabilities**: [KubernetesVersionCapabilities](#kubernetesversioncapabilities) (ReadOnly): Capabilities on this kubernetes version
* **isPreview**: bool (ReadOnly): Whether this version is in preview mode.
* **patchVersions**: [KubernetesVersionPropertiesPatchVersions](#kubernetesversionpropertiespatchversions) (ReadOnly): Patch versions of a Kubernetes release
* **version**: string (ReadOnly): major.minor version of Kubernetes release

## KubernetesVersionPropertiesPatchVersions
### Properties
### Additional Properties
* **Additional Properties Type**: [KubernetesPatchVersions](#kubernetespatchversions)

## KubernetesVersionReadiness
### Properties
* **errorMessage**: string (ReadOnly): If image is not ready, the error message for version not being ready
* **osSku**: 'CBLMariner' | 'Windows2019' | 'Windows2022' | string: Specifies the OS SKU used by the agent pool. The default is CBLMariner if OSType is Linux. The default is Windows2019 when OSType is Windows.
* **osType**: 'Linux' | 'Windows' | string (ReadOnly): The particular KubernetesVersion's Image's OS Type (Linux, Windows)
* **ready**: bool (ReadOnly): Whether or not the given image is ready

## LinuxProfileProperties
### Properties
* **ssh**: [LinuxProfilePropertiesSsh](#linuxprofilepropertiesssh): SSH - SSH configuration for Linux-based VMs running on Azure.

## LinuxProfilePropertiesSsh
### Properties
* **publicKeys**: [LinuxProfilePropertiesSshPublicKeysItem](#linuxprofilepropertiessshpublickeysitem)[]: PublicKeys - The list of SSH public keys used to authenticate with Linux-based VMs. Only expect one key specified.

## LinuxProfilePropertiesSshPublicKeysItem
### Properties
* **keyData**: string: KeyData - Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.

## ListCredentialResponse
### Properties
* **error**: [ListCredentialResponseError](#listcredentialresponseerror)
* **id**: string (ReadOnly): Operation Id
* **name**: string (ReadOnly): Operation Name
* **properties**: [ListCredentialResponseProperties](#listcredentialresponseproperties)
* **resourceId**: string (ReadOnly): ARM Resource Id of the provisioned cluster instance
* **status**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | 'Updating' | 'Upgrading' | string (ReadOnly): Provisioning state of the resource

## ListCredentialResponseError
### Properties
* **code**: string
* **message**: string

## ListCredentialResponseProperties
### Properties
* **kubeconfigs**: [CredentialResult](#credentialresult)[] (ReadOnly): Base64-encoded Kubernetes configuration file.

## NamedAgentPoolProfile
### Properties
* **availabilityZones**: string[]: AvailabilityZones - The list of Availability zones to use for nodes. Datacenter racks modelled as zones
* **count**: int: Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
* **name**: string: Unique name of the agent pool profile in the context of the subscription and resource group.
* **nodeImageVersion**: string: The version of node image
* **osSKU**: 'CBLMariner' | 'Windows2019' | 'Windows2022' | string: Specifies the OS SKU used by the agent pool. The default is CBLMariner if OSType is Linux. The default is Windows2019 when OSType is Windows.
* **osType**: 'Linux' | 'Windows' | string: The particular KubernetesVersion's Image's OS Type (Linux, Windows)
* **vmSize**: string: VmSize - The size of the agent pool VMs.

## NetworkProfile
### Properties
* **loadBalancerProfile**: [NetworkProfileLoadBalancerProfile](#networkprofileloadbalancerprofile): LoadBalancerProfile - Profile of the cluster load balancer.
* **networkPolicy**: 'calico' | 'flannel' | string: NetworkPolicy - Network policy used for building Kubernetes network. Possible values include: 'calico', 'flannel'. Default is 'calico'
* **podCidr**: string: PodCidr - A CIDR notation IP range from which to assign pod IPs when kubenet is used.

## NetworkProfileLoadBalancerProfile
### Properties
* **count**: int: Count - Number of load balancer VMs. The default value is 0.

## ProvisionedClusterLicenseProfile
### Properties
* **azureHybridBenefit**: 'False' | 'NotApplicable' | 'True' | string: Indicates whether Azure Hybrid Benefit is opted in

## ProvisionedClusterPoolUpgradeProfile
### Properties
* **kubernetesVersion**: string (ReadOnly): The Kubernetes version (major.minor.patch).
* **name**: string (ReadOnly): The Agent Pool name.
* **osType**: 'Linux' | 'Windows' | string (ReadOnly): The particular KubernetesVersion's Image's OS Type (Linux, Windows)
* **upgrades**: [ProvisionedClusterPoolUpgradeProfileProperties](#provisionedclusterpoolupgradeprofileproperties)[]: List of orchestrator types and versions available for upgrade.

## ProvisionedClusterPoolUpgradeProfileProperties
### Properties
* **isPreview**: bool (ReadOnly): Whether the Kubernetes version is currently in preview.
* **kubernetesVersion**: string (ReadOnly): The Kubernetes version (major.minor.patch).

## ProvisionedClusterProperties
### Properties
* **agentPoolProfiles**: [NamedAgentPoolProfile](#namedagentpoolprofile)[]: The agent pools of the cluster.
* **cloudProviderProfile**: [CloudProviderProfile](#cloudproviderprofile): The underlying cloud infra provider properties.
* **controlPlane**: [ControlPlaneProfile](#controlplaneprofile): ControlPlane - ControlPlane Configuration
* **kubernetesVersion**: string: KubernetesVersion - Version of Kubernetes specified when creating the managed cluster.
* **licenseProfile**: [ProvisionedClusterLicenseProfile](#provisionedclusterlicenseprofile): The license profile of the provisioned cluster.
* **linuxProfile**: [LinuxProfileProperties](#linuxprofileproperties): LinuxProfile - The profile for Linux VMs in the Provisioned Cluster.
* **networkProfile**: [NetworkProfile](#networkprofile): NetworkProfile - Profile of network configuration.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | 'Updating' | 'Upgrading' | string (ReadOnly): Provisioning state of the resource
* **status**: [ProvisionedClusterPropertiesStatus](#provisionedclusterpropertiesstatus) (ReadOnly): HybridAKSClusterStatus defines the observed state of HybridAKSCluster

## ProvisionedClusterPropertiesStatus
### Properties
* **controlPlaneStatus**: [AddonStatusProfile](#addonstatusprofile)[]: Status of the control plane components
* **errorMessage**: string: ErrorMessage - Error messages during creation of cluster
* **operationStatus**: [ProvisionedClusterPropertiesStatusOperationStatus](#provisionedclusterpropertiesstatusoperationstatus): Contains Provisioning errors

## ProvisionedClusterPropertiesStatusOperationStatus
### Properties
* **error**: [ProvisionedClusterPropertiesStatusOperationStatusError](#provisionedclusterpropertiesstatusoperationstatuserror)
* **operationId**: string
* **status**: string

## ProvisionedClusterPropertiesStatusOperationStatusError
### Properties
* **code**: string
* **message**: string

## ProvisionedClusterUpgradeProfileProperties
### Properties
* **agentPoolProfiles**: [ProvisionedClusterPoolUpgradeProfile](#provisionedclusterpoolupgradeprofile)[] (Required): The list of available upgrade versions for agent pools.
* **controlPlaneProfile**: [ProvisionedClusterPoolUpgradeProfile](#provisionedclusterpoolupgradeprofile) (Required): The list of available upgrade versions for the control plane.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | 'Updating' | 'Upgrading' | string (ReadOnly): Provisioning state of the resource

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

## VirtualNetworkExtendedLocation
### Properties
* **name**: string: The extended location name.
* **type**: string: The extended location type.

## VirtualNetworkProperties
### Properties
* **dhcpServers**: string[]: Address of the DHCP servers associated with the network
* **dnsServers**: string[]: Address of the DNS servers associated with the network
* **gateway**: string: Address of the Gateway associated with the network
* **infraVnetProfile**: [VirtualNetworkPropertiesInfraVnetProfile](#virtualnetworkpropertiesinfravnetprofile)
* **ipAddressPrefix**: string: IP Address Prefix of the network
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | 'Updating' | string (ReadOnly)
* **status**: [VirtualNetworkPropertiesStatus](#virtualnetworkpropertiesstatus) (ReadOnly): HybridAKSNetworkStatus defines the observed state of HybridAKSNetwork
* **vipPool**: [VirtualNetworkPropertiesVipPoolItem](#virtualnetworkpropertiesvippoolitem)[]: Virtual IP Pool for Kubernetes
* **vlanID**: int: VLAN Id used by the network
* **vmipPool**: [VirtualNetworkPropertiesVmipPoolItem](#virtualnetworkpropertiesvmippoolitem)[]: IP Pool for Virtual Machines

## VirtualNetworkPropertiesInfraVnetProfile
### Properties
* **hci**: [VirtualNetworkPropertiesInfraVnetProfileHci](#virtualnetworkpropertiesinfravnetprofilehci): Infra network profile for HCI platform
* **vmware**: [VirtualNetworkPropertiesInfraVnetProfileVmware](#virtualnetworkpropertiesinfravnetprofilevmware): Infra network profile for VMware platform

## VirtualNetworkPropertiesInfraVnetProfileHci
### Properties
* **mocGroup**: string: Resource group in MOC(Microsoft On-premises Cloud)
* **mocLocation**: string: Location in MOC(Microsoft On-premises Cloud)
* **mocVnetName**: string: Virtual Network name in MOC(Microsoft On-premises Cloud)

## VirtualNetworkPropertiesInfraVnetProfileVmware
### Properties
* **segmentName**: string: Name of the network segment in VSphere

## VirtualNetworkPropertiesStatus
### Properties
* **operationStatus**: [VirtualNetworkPropertiesStatusOperationStatus](#virtualnetworkpropertiesstatusoperationstatus): Contains Provisioning errors

## VirtualNetworkPropertiesStatusOperationStatus
### Properties
* **error**: [VirtualNetworkPropertiesStatusOperationStatusError](#virtualnetworkpropertiesstatusoperationstatuserror)
* **operationId**: string
* **phase**: string: Phase represents the current phase of the virtual network provisioning. E.g. Pending, Running, Terminating, Failed etc.
* **status**: string

## VirtualNetworkPropertiesStatusOperationStatusError
### Properties
* **code**: string
* **message**: string

## VirtualNetworkPropertiesVipPoolItem
### Properties
* **endIP**: string: Ending IP address for the IP Pool
* **startIP**: string: Starting IP address for the IP Pool

## VirtualNetworkPropertiesVmipPoolItem
### Properties
* **endIP**: string: Ending IP address for the IP Pool
* **startIP**: string: Starting IP address for the IP Pool

## VmSkuCapabilities
### Properties
* **name**: string (ReadOnly): An invariant to describe the feature
* **value**: string (ReadOnly): An invariant if the feature is measured by quantity

## VmSkuProfileProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | 'Updating' | 'Upgrading' | string (ReadOnly): Provisioning state of the resource
* **values**: [VmSkuProperties](#vmskuproperties)[]: Array of HybridAKS Support VM Skus

## VmSkuProperties
### Properties
* **capabilities**: [VmSkuCapabilities](#vmskucapabilities)[] (ReadOnly): A name value pair to describe the specific vm's capability
* **name**: string (ReadOnly): The name of the VM Family
* **resourceType**: string (ReadOnly): The resource type of the vm
* **size**: string (ReadOnly): The size of the VM Family
* **tier**: string (ReadOnly): The tier of the VM Family

