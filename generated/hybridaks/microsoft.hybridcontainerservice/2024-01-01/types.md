# Microsoft.HybridContainerService @ 2024-01-01

## Resource Microsoft.HybridContainerService/kubernetesVersions@2024-01-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Extended location pointing to the underlying infrastructure
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [KubernetesVersionProfileProperties](#kubernetesversionprofileproperties) (ReadOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HybridContainerService/kubernetesVersions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridContainerService/provisionedClusterInstances@2024-01-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Extended location pointing to the underlying infrastructure
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ProvisionedClusterProperties](#provisionedclusterproperties): Properties of the provisioned cluster.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HybridContainerService/provisionedClusterInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridContainerService/provisionedClusterInstances/agentPools@2024-01-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Extended location pointing to the underlying infrastructure
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 12, pattern: "^[a-z][a-z0-9]{2,11}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AgentPoolProperties](#agentpoolproperties): Properties of the agent pool resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [AgentPoolTags](#agentpooltags): Resource tags
* **type**: 'Microsoft.HybridContainerService/provisionedClusterInstances/agentPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridContainerService/provisionedClusterInstances/hybridIdentityMetadata@2024-01-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [HybridIdentityMetadataProperties](#hybrididentitymetadataproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HybridContainerService/provisionedClusterInstances/hybridIdentityMetadata' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridContainerService/provisionedClusterInstances/upgradeProfiles@2024-01-01 (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ProvisionedClusterUpgradeProfileProperties](#provisionedclusterupgradeprofileproperties) (ReadOnly): The properties of the upgrade profile.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HybridContainerService/provisionedClusterInstances/upgradeProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridContainerService/skus@2024-01-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Extended location pointing to the underlying infrastructure
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [VmSkuProfileProperties](#vmskuprofileproperties) (ReadOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HybridContainerService/skus' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridContainerService/virtualNetworks@2024-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [VirtualNetworkExtendedLocation](#virtualnetworkextendedlocation): Extended location pointing to the underlying infrastructure
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-_a-zA-Z0-9]{0,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkProperties](#virtualnetworkproperties): Properties of the virtual network resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridContainerService/virtualNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Function listAdminKubeconfig (Microsoft.HybridContainerService/provisionedClusterInstances@2024-01-01)
* **Resource**: Microsoft.HybridContainerService/provisionedClusterInstances
* **ApiVersion**: 2024-01-01
* **Output**: [ListCredentialResponse](#listcredentialresponse)

## Function listUserKubeconfig (Microsoft.HybridContainerService/provisionedClusterInstances@2024-01-01)
* **Resource**: Microsoft.HybridContainerService/provisionedClusterInstances
* **ApiVersion**: 2024-01-01
* **Output**: [ListCredentialResponse](#listcredentialresponse)

## AddonStatusProfile
### Properties
* **errorMessage**: string: Observed error message from the addon or component
* **name**: string: Name of the addon or component
* **phase**: 'deleting' | 'failed' | 'pending' | 'provisioned' | 'provisioning {HelmChartInstalled}' | 'provisioning {MSICertificateDownloaded}' | 'provisioning' | 'upgrading' | string: Observed phase of the addon or component on the provisioned cluster. Possible values include: 'pending', 'provisioning', 'provisioning {HelmChartInstalled}', 'provisioning {MSICertificateDownloaded}', 'provisioned', 'deleting', 'failed', 'upgrading'
* **ready**: bool: Indicates whether the addon or component is ready

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
* **count**: int: Number of nodes in the agent pool. The default value is 1.
* **enableAutoScaling**: bool: Whether to enable auto-scaler. Default value is false
* **kubernetesVersion**: string (ReadOnly): Version of Kubernetes in use by the agent pool. This is inherited from the kubernetesVersion of the provisioned cluster.
* **maxCount**: int: The maximum number of nodes for auto-scaling
* **maxPods**: int: The maximum number of pods that can run on a node.
* **minCount**: int: The minimum number of nodes for auto-scaling
* **nodeLabels**: [AgentPoolProfileNodeLabels](#agentpoolprofilenodelabels): The node labels to be persisted across all nodes in agent pool.
* **nodeTaints**: string[]: Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
* **osSKU**: 'CBLMariner' | 'Windows2019' | 'Windows2022' | string: Specifies the OS SKU used by the agent pool. The default is CBLMariner if OSType is Linux. The default is Windows2019 when OSType is Windows.
* **osType**: 'Linux' | 'Windows' | string: The particular KubernetesVersion Image OS Type (Linux, Windows)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Pending' | 'Succeeded' | 'Updating' | 'Upgrading' | string (ReadOnly): The status of the latest long running operation for the agent pool.
* **status**: [AgentPoolProvisioningStatusStatus](#agentpoolprovisioningstatusstatus): The observed status of the agent pool.
* **vmSize**: string: The VM sku size of the agent pool node VMs.

## AgentPoolProvisioningStatusStatus
### Properties
* **currentState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Pending' | 'Succeeded' | 'Updating' | 'Upgrading' | string (ReadOnly): The current state of the agent pool.
* **errorMessage**: string: Error messages during an agent pool operation or steady state.
* **readyReplicas**: [AgentPoolUpdateProfile](#agentpoolupdateprofile)[]

## AgentPoolTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AgentPoolUpdateProfile
### Properties
* **count**: int: Number of nodes in the agent pool. The default value is 1.
* **kubernetesVersion**: string (ReadOnly): Version of Kubernetes in use by the agent pool. This is inherited from the kubernetesVersion of the provisioned cluster.
* **vmSize**: string: The VM sku size of the agent pool node VMs.

## CloudProviderProfile
### Properties
* **infraNetworkProfile**: [CloudProviderProfileInfraNetworkProfile](#cloudproviderprofileinfranetworkprofile): The profile for the infrastructure networks used by the provisioned cluster

## CloudProviderProfileInfraNetworkProfile
### Properties
* **vnetSubnetIds**: string[]: List of ARM resource Ids (maximum 1) for the infrastructure network object e.g. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/logicalNetworks/{logicalNetworkName}

## ClusterVMAccessProfile
### Properties
* **authorizedIPRanges**: string: IP Address or CIDR for SSH access to VMs in the provisioned cluster

## ControlPlaneProfile
### Properties
* **controlPlaneEndpoint**: [ControlPlaneProfileControlPlaneEndpoint](#controlplaneprofilecontrolplaneendpoint): IP Address of the Kubernetes API server
* **count**: int: Number of control plane nodes. The default value is 1, and the count should be an odd number
* **vmSize**: string: VM sku size of the control plane nodes

## ControlPlaneProfileControlPlaneEndpoint
### Properties
* **hostIP**: string: IP address of the Kubernetes API server

## CredentialResult
### Properties
* **name**: string (ReadOnly): The name of the credential.
* **value**: any (ReadOnly): Base64-encoded Kubernetes configuration file.

## ExtendedLocation
### Properties
* **name**: string: ARM Id of the extended location.
* **type**: 'CustomLocation' | string: The extended location type. Allowed value: 'CustomLocation'

## HybridIdentityMetadataProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Pending' | 'Succeeded' | 'Updating' | 'Upgrading' | string (ReadOnly): Provisioning state of the resource
* **publicKey**: string: Onboarding public key for provisioning the Managed identity for the connected cluster.
* **resourceUid**: string: Unique id of the parent provisioned cluster resource.

## KubernetesPatchVersions
### Properties
* **readiness**: [KubernetesVersionReadiness](#kubernetesversionreadiness)[]: Indicates whether the kubernetes version image is ready or not
* **upgrades**: string[]: Possible upgrade paths for given patch version

## KubernetesVersionProfileProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Pending' | 'Succeeded' | 'Updating' | 'Upgrading' | string (ReadOnly): Provisioning state of the resource
* **values**: [KubernetesVersionProperties](#kubernetesversionproperties)[]: List of supported Kubernetes versions

## KubernetesVersionProperties
### Properties
* **isPreview**: bool (ReadOnly): Whether this version is in preview mode.
* **patchVersions**: [KubernetesVersionPropertiesPatchVersions](#kubernetesversionpropertiespatchversions) (ReadOnly): Patch versions of a Kubernetes release
* **version**: string (ReadOnly): major.minor version of Kubernetes release

## KubernetesVersionPropertiesPatchVersions
### Properties
### Additional Properties
* **Additional Properties Type**: [KubernetesPatchVersions](#kubernetespatchversions)

## KubernetesVersionReadiness
### Properties
* **errorMessage**: string (ReadOnly): The error message for version not being ready
* **osSku**: 'CBLMariner' | 'Windows2019' | 'Windows2022' | string: Specifies the OS SKU used by the agent pool. The default is CBLMariner if OSType is Linux. The default is Windows2019 when OSType is Windows.
* **osType**: 'Linux' | 'Windows' | string (ReadOnly): The particular KubernetesVersion Image OS Type (Linux, Windows)
* **ready**: bool (ReadOnly): Whether the kubernetes version image is ready or not

## LinuxProfileProperties
### Properties
* **ssh**: [LinuxProfilePropertiesSsh](#linuxprofilepropertiesssh): SSH configuration for VMs of the provisioned cluster.

## LinuxProfilePropertiesSsh
### Properties
* **publicKeys**: [LinuxProfilePropertiesSshPublicKeysItem](#linuxprofilepropertiessshpublickeysitem)[]: The list of SSH public keys used to authenticate with VMs. A maximum of 1 key may be specified.

## LinuxProfilePropertiesSshPublicKeysItem
### Properties
* **keyData**: string: Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.

## ListCredentialResponse
### Properties
* **error**: [ListCredentialResponseError](#listcredentialresponseerror)
* **id**: string (ReadOnly): Operation Id
* **name**: string (ReadOnly): Operation Name
* **properties**: [ListCredentialResponseProperties](#listcredentialresponseproperties)
* **resourceId**: string (ReadOnly): ARM Resource Id of the provisioned cluster instance
* **status**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Pending' | 'Succeeded' | 'Updating' | 'Upgrading' | string (ReadOnly): Provisioning state of the resource

## ListCredentialResponse
### Properties
* **error**: [ListCredentialResponseError](#listcredentialresponseerror)
* **id**: string (ReadOnly): Operation Id
* **name**: string (ReadOnly): Operation Name
* **properties**: [ListCredentialResponseProperties](#listcredentialresponseproperties)
* **resourceId**: string (ReadOnly): ARM Resource Id of the provisioned cluster instance
* **status**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Pending' | 'Succeeded' | 'Updating' | 'Upgrading' | string (ReadOnly): Provisioning state of the resource

## ListCredentialResponseError
### Properties
* **code**: string
* **message**: string

## ListCredentialResponseProperties
### Properties
* **kubeconfigs**: [CredentialResult](#credentialresult)[] (ReadOnly): Base64-encoded Kubernetes configuration file.

## NamedAgentPoolProfile
### Properties
* **count**: int: Number of nodes in the agent pool. The default value is 1.
* **enableAutoScaling**: bool: Whether to enable auto-scaler. Default value is false
* **kubernetesVersion**: string (ReadOnly): Version of Kubernetes in use by the agent pool. This is inherited from the kubernetesVersion of the provisioned cluster.
* **maxCount**: int: The maximum number of nodes for auto-scaling
* **maxPods**: int: The maximum number of pods that can run on a node.
* **minCount**: int: The minimum number of nodes for auto-scaling
* **name**: string: Unique name of the default agent pool in the context of the provisioned cluster. Default value is <clusterName>-nodepool1
* **nodeLabels**: [AgentPoolProfileNodeLabels](#agentpoolprofilenodelabels): The node labels to be persisted across all nodes in agent pool.
* **nodeTaints**: string[]: Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
* **osSKU**: 'CBLMariner' | 'Windows2019' | 'Windows2022' | string: Specifies the OS SKU used by the agent pool. The default is CBLMariner if OSType is Linux. The default is Windows2019 when OSType is Windows.
* **osType**: 'Linux' | 'Windows' | string: The particular KubernetesVersion Image OS Type (Linux, Windows)
* **vmSize**: string: The VM sku size of the agent pool node VMs.

## NetworkProfile
### Properties
* **loadBalancerProfile**: [NetworkProfileLoadBalancerProfile](#networkprofileloadbalancerprofile): Profile of the HA Proxy load balancer.
* **networkPolicy**: 'calico' | string: Network policy used for building Kubernetes network. Possible values include: 'calico'.
* **podCidr**: string: A CIDR notation IP Address range from which to assign pod IPs.

## NetworkProfileLoadBalancerProfile
### Properties
* **count**: int: Number of HA Proxy load balancer VMs. The default value is 0.

## ProvisionedClusterLicenseProfile
### Properties
* **azureHybridBenefit**: 'False' | 'NotApplicable' | 'True' | string: Indicates whether Azure Hybrid Benefit is opted in. Default value is false

## ProvisionedClusterPoolUpgradeProfile
### Properties
* **kubernetesVersion**: string (ReadOnly): The Kubernetes version (major.minor.patch).
* **osType**: 'Linux' | 'Windows' | string (ReadOnly): The particular KubernetesVersion Image OS Type (Linux, Windows)
* **upgrades**: [ProvisionedClusterPoolUpgradeProfileProperties](#provisionedclusterpoolupgradeprofileproperties)[]: List of available kubernetes versions for upgrade.

## ProvisionedClusterPoolUpgradeProfileProperties
### Properties
* **isPreview**: bool (ReadOnly): Whether the Kubernetes version is currently in preview.
* **kubernetesVersion**: string (ReadOnly): The Kubernetes version (major.minor.patch).

## ProvisionedClusterProperties
### Properties
* **agentPoolProfiles**: [NamedAgentPoolProfile](#namedagentpoolprofile)[]: The agent pool properties for the provisioned cluster.
* **autoScalerProfile**: [ProvisionedClusterPropertiesAutoScalerProfile](#provisionedclusterpropertiesautoscalerprofile): Parameters to be applied to the cluster-autoscaler when auto scaling is enabled for the provisioned cluster.
* **cloudProviderProfile**: [CloudProviderProfile](#cloudproviderprofile): The profile for the underlying cloud infrastructure provider for the provisioned cluster.
* **clusterVMAccessProfile**: [ClusterVMAccessProfile](#clustervmaccessprofile): The SSH restricted access profile for the VMs in the provisioned cluster.
* **controlPlane**: [ControlPlaneProfile](#controlplaneprofile): The profile for control plane of the provisioned cluster.
* **kubernetesVersion**: string: The version of Kubernetes in use by the provisioned cluster.
* **licenseProfile**: [ProvisionedClusterLicenseProfile](#provisionedclusterlicenseprofile): The license profile of the provisioned cluster.
* **linuxProfile**: [LinuxProfileProperties](#linuxprofileproperties): The profile for Linux VMs in the provisioned cluster.
* **networkProfile**: [NetworkProfile](#networkprofile): The network configuration profile for the provisioned cluster.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Pending' | 'Succeeded' | 'Updating' | 'Upgrading' | string (ReadOnly): The status of the latest long running operation for the provisioned cluster.
* **status**: [ProvisionedClusterPropertiesStatus](#provisionedclusterpropertiesstatus) (ReadOnly): The observed status of the provisioned cluster.
* **storageProfile**: [StorageProfile](#storageprofile): The storage configuration profile for the provisioned cluster.

## ProvisionedClusterPropertiesAutoScalerProfile
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

## ProvisionedClusterPropertiesStatus
### Properties
* **controlPlaneStatus**: [AddonStatusProfile](#addonstatusprofile)[]: The detailed status of the provisioned cluster components including addons.
* **currentState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Pending' | 'Succeeded' | 'Updating' | 'Upgrading' | string (ReadOnly): The current state of the provisioned cluster.
* **errorMessage**: string: Error messages during a provisioned cluster operation or steady state.

## ProvisionedClusterUpgradeProfileProperties
### Properties
* **controlPlaneProfile**: [ProvisionedClusterPoolUpgradeProfile](#provisionedclusterpoolupgradeprofile) (Required): The list of available kubernetes version upgrades for the control plane.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Pending' | 'Succeeded' | 'Updating' | 'Upgrading' | string (ReadOnly): Provisioning state of the resource

## StorageProfile
### Properties
* **nfsCsiDriver**: [StorageProfileNfsCSIDriver](#storageprofilenfscsidriver): NFS CSI Driver settings for the storage profile.
* **smbCsiDriver**: [StorageProfileSmbCSIDriver](#storageprofilesmbcsidriver): SMB CSI Driver settings for the storage profile.

## StorageProfileNfsCSIDriver
### Properties
* **enabled**: bool: Indicates whether to enable NFS CSI Driver. The default value is true.

## StorageProfileSmbCSIDriver
### Properties
* **enabled**: bool: Indicates whether to enable SMB CSI Driver. The default value is true.

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
* **name**: string: ARM Id of the extended location.
* **type**: 'CustomLocation' | string: The extended location type. Allowed value: 'CustomLocation'

## VirtualNetworkProperties
### Properties
* **dnsServers**: string[]: List of DNS server IP Addresses associated with the network
* **gateway**: string: IP Address of the Gateway associated with the network
* **infraVnetProfile**: [VirtualNetworkPropertiesInfraVnetProfile](#virtualnetworkpropertiesinfravnetprofile)
* **ipAddressPrefix**: string: IP Address Prefix of the network
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Pending' | 'Succeeded' | 'Updating' | string (ReadOnly)
* **status**: [VirtualNetworkPropertiesStatus](#virtualnetworkpropertiesstatus) (ReadOnly): Status of the virtual network resource
* **vipPool**: [VirtualNetworkPropertiesVipPoolItem](#virtualnetworkpropertiesvippoolitem)[]: Range of IP Addresses for Kubernetes API Server and services if using HA Proxy load balancer
* **vlanID**: int: VLAN Id used by the network
* **vmipPool**: [VirtualNetworkPropertiesVmipPoolItem](#virtualnetworkpropertiesvmippoolitem)[]: Range of IP Addresses for Kubernetes node VMs

## VirtualNetworkPropertiesInfraVnetProfile
### Properties
* **hci**: [VirtualNetworkPropertiesInfraVnetProfileHci](#virtualnetworkpropertiesinfravnetprofilehci): Infrastructure network profile for HCI platform

## VirtualNetworkPropertiesInfraVnetProfileHci
### Properties
* **mocGroup**: string: Group in MOC(Microsoft On-premises Cloud)
* **mocLocation**: string: Location in MOC(Microsoft On-premises Cloud)
* **mocVnetName**: string: Virtual Network name in MOC(Microsoft On-premises Cloud)

## VirtualNetworkPropertiesStatus
### Properties
* **operationStatus**: [VirtualNetworkPropertiesStatusOperationStatus](#virtualnetworkpropertiesstatusoperationstatus): The detailed status of the long running operation.

## VirtualNetworkPropertiesStatusOperationStatus
### Properties
* **error**: [VirtualNetworkPropertiesStatusOperationStatusError](#virtualnetworkpropertiesstatusoperationstatuserror): The error if any from the operation.
* **operationId**: string: The identifier of the operation.
* **status**: string: The status of the operation.

## VirtualNetworkPropertiesStatusOperationStatusError
### Properties
* **code**: string: The error code from the operation.
* **message**: string: The error message from the operation.

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
* **name**: string (ReadOnly): Name of the VM SKU capability
* **value**: string (ReadOnly): Value of the VM SKU capability

## VmSkuProfileProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Pending' | 'Succeeded' | 'Updating' | 'Upgrading' | string (ReadOnly): Provisioning state of the resource
* **values**: [VmSkuProperties](#vmskuproperties)[]: List of supported VM SKUs.

## VmSkuProperties
### Properties
* **capabilities**: [VmSkuCapabilities](#vmskucapabilities)[] (ReadOnly): The list of name-value pairs to describe VM SKU capabilities like MemoryGB, vCPUs, etc.
* **name**: string (ReadOnly): The name of the VM SKU
* **resourceType**: string (ReadOnly): The type of resource the SKU applies to.
* **size**: string (ReadOnly): The size of the VM SKU
* **tier**: string (ReadOnly): The tier of the VM SKU

