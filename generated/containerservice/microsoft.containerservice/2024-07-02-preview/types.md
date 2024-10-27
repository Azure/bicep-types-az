# Microsoft.ContainerService @ 2024-07-02-preview

## Resource Microsoft.ContainerService/locations/guardrailsVersions@2024-07-02-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-07-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 24} (Required, DeployTimeConstant): The resource name
* **properties**: [GuardrailsAvailableVersionsProperties](#guardrailsavailableversionsproperties) (ReadOnly): Whether the version is default or not and support info.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/locations/guardrailsVersions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/locations/meshRevisionProfiles@2024-07-02-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-07-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 24, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-_a-zA-Z0-9]{0,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MeshRevisionProfileProperties](#meshrevisionprofileproperties) (ReadOnly): Mesh revision profile properties for a mesh
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/locations/meshRevisionProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/locations/safeguardsVersions@2024-07-02-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-07-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 24} (Required, DeployTimeConstant): The resource name
* **properties**: [SafeguardsAvailableVersionsProperties](#safeguardsavailableversionsproperties) (ReadOnly): Whether the version is default or not and support info.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/locations/safeguardsVersions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters@2024-07-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Unique read-only string used to implement optimistic concurrency. The eTag value will change when the resource is updated. Specify an if-match or if-none-match header with the eTag value for a subsequent request to enable optimistic concurrency per the normal etag convention.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location of the Virtual Machine.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedClusterIdentity](#managedclusteridentity): The identity of the managed cluster, if configured.
* **kind**: string: This is primarily used to expose different UI experiences in the portal for different kinds
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-_a-zA-Z0-9]{0,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedClusterProperties](#managedclusterproperties): Properties of a managed cluster.
* **sku**: [ManagedClusterSKU](#managedclustersku): The managed cluster SKU.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ContainerService/managedClusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/agentPools@2024-07-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 12, pattern: "^[a-z][a-z0-9]{0,11}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedClusterAgentPoolProfileProperties](#managedclusteragentpoolprofileproperties): Properties of an agent pool.
* **type**: 'Microsoft.ContainerService/managedClusters/agentPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/agentPools/machines@2024-07-02-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][-_a-zA-Z0-9]{0,39}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MachineProperties](#machineproperties) (ReadOnly): The properties of the machine
* **type**: 'Microsoft.ContainerService/managedClusters/agentPools/machines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/loadBalancers@2024-07-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 12, pattern: "^[a-z][a-z0-9]{0,11}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [LoadBalancerProperties](#loadbalancerproperties): The properties of the load balancer.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/managedClusters/loadBalancers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/maintenanceConfigurations@2024-07-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MaintenanceConfigurationProperties](#maintenanceconfigurationproperties): Properties of a default maintenance configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.ContainerService/managedClusters/maintenanceConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/meshUpgradeProfiles@2024-07-02-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 24, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-_a-zA-Z0-9]{0,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MeshUpgradeProfileProperties](#meshupgradeprofileproperties) (ReadOnly): Mesh upgrade profile properties for a major.minor release.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/managedClusters/meshUpgradeProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/privateEndpointConnections@2024-07-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): The properties of a private endpoint connection.
* **type**: 'Microsoft.ContainerService/managedClusters/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/trustedAccessRoleBindings@2024-07-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 24, pattern: "^([A-Za-z0-9-])+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TrustedAccessRoleBindingProperties](#trustedaccessrolebindingproperties) (Required): Properties for trusted access role binding
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/managedClusters/trustedAccessRoleBindings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedclustersnapshots@2024-07-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-_a-zA-Z0-9]{0,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedClusterSnapshotProperties](#managedclustersnapshotproperties): Properties of a managed cluster snapshot.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ContainerService/managedclustersnapshots' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/snapshots@2024-07-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-_a-zA-Z0-9]{0,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SnapshotProperties](#snapshotproperties): Properties of a snapshot.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ContainerService/snapshots' (ReadOnly, DeployTimeConstant): The resource type

## Function listClusterAdminCredential (Microsoft.ContainerService/managedClusters@2024-07-02-preview)
* **Resource**: Microsoft.ContainerService/managedClusters
* **ApiVersion**: 2024-07-02-preview
* **Output**: [CredentialResults](#credentialresults)

## Function listClusterMonitoringUserCredential (Microsoft.ContainerService/managedClusters@2024-07-02-preview)
* **Resource**: Microsoft.ContainerService/managedClusters
* **ApiVersion**: 2024-07-02-preview
* **Output**: [CredentialResults](#credentialresults)

## Function listClusterUserCredential (Microsoft.ContainerService/managedClusters@2024-07-02-preview)
* **Resource**: Microsoft.ContainerService/managedClusters
* **ApiVersion**: 2024-07-02-preview
* **Output**: [CredentialResults](#credentialresults)

## Function listCredential (Microsoft.ContainerService/managedClusters/accessProfiles@2024-07-02-preview)
* **Resource**: Microsoft.ContainerService/managedClusters/accessProfiles
* **ApiVersion**: 2024-07-02-preview
* **Output**: [ManagedClusterAccessProfile](#managedclusteraccessprofile)

## AbsoluteMonthlySchedule
### Properties
* **dayOfMonth**: int {minValue: 1, maxValue: 31} (Required): The date of the month.
* **intervalMonths**: int {minValue: 1, maxValue: 6} (Required): Specifies the number of months between each set of occurrences.

## AccessProfile
### Properties
* **kubeConfig**: any: Base64-encoded Kubernetes configuration file.

## AdvancedNetworking
### Properties
* **observability**: [AdvancedNetworkingObservability](#advancednetworkingobservability): Observability profile to enable advanced network metrics and flow logs with historical contexts.
* **security**: [AdvancedNetworkingSecurity](#advancednetworkingsecurity): Security profile to enable security features on cilium based cluster.

## AdvancedNetworkingFqdnPolicy
### Properties
* **enabled**: bool: This feature allows user to configure network policy based on DNS (FQDN) names. It can be enabled only on cilium based clusters. If not specified, the default is false.

## AdvancedNetworkingObservability
### Properties
* **enabled**: bool: Indicates the enablement of Advanced Networking observability functionalities on clusters.
* **tlsManagement**: 'Managed' | 'None' | string: Management of TLS certificates for querying network flow logs via the flow log endpoint for Advanced Networking observability clusters. If not specified, the default is Managed. For more information see aka.ms/acnstls.

## AdvancedNetworkingSecurity
### Properties
* **fqdnPolicy**: [AdvancedNetworkingFqdnPolicy](#advancednetworkingfqdnpolicy): FQDNFiltering profile to enable FQDN Policy filtering on cilium based cluster.

## AgentPoolArtifactStreamingProfile
### Properties
* **enabled**: bool: Artifact streaming speeds up the cold-start of containers on a node through on-demand image loading. To use this feature, container images must also enable artifact streaming on ACR. If not specified, the default is false.

## AgentPoolGatewayProfile
### Properties
* **publicIPPrefixSize**: int {minValue: 28, maxValue: 31}: The Gateway agent pool associates one public IPPrefix for each static egress gateway to provide public egress. The size of Public IPPrefix should be selected by the user. Each node in the agent pool is assigned with one IP from the IPPrefix. The IPPrefix size thus serves as a cap on the size of the Gateway agent pool. Due to Azure public IPPrefix size limitation, the valid value range is [28, 31] (/31 = 2 nodes/IPs, /30 = 4 nodes/IPs, /29 = 8 nodes/IPs, /28 = 16 nodes/IPs). The default value is 31.

## AgentPoolGPUProfile
### Properties
* **driverType**: 'CUDA' | 'GRID' | string: Specify the type of GPU driver to install when creating Windows agent pools. If not provided, AKS selects the driver based on system compatibility. This cannot be changed once the AgentPool has been created. This cannot be set on Linux AgentPools. For Linux AgentPools, the driver is selected based on system compatibility.
* **installGPUDriver**: bool: The default value is true when the vmSize of the agent pool contains a GPU, false otherwise. GPU Driver Installation can only be set true when VM has an associated GPU resource. Setting this field to false prevents automatic GPU driver installation. In that case, in order for the GPU to be usable, the user must perform GPU driver installation themselves.

## AgentPoolNetworkProfile
### Properties
* **allowedHostPorts**: [PortRange](#portrange)[]: The port ranges that are allowed to access. The specified ranges are allowed to overlap.
* **applicationSecurityGroups**: string[]: The IDs of the application security groups which agent pool will associate when created.
* **nodePublicIPTags**: [IPTag](#iptag)[]: IPTags of instance-level public IPs.

## AgentPoolSecurityProfile
### Properties
* **enableSecureBoot**: bool: Secure Boot is a feature of Trusted Launch which ensures that only signed operating systems and drivers can boot. For more details, see aka.ms/aks/trustedlaunch.  If not specified, the default is false.
* **enableVTPM**: bool: vTPM is a Trusted Launch feature for configuring a dedicated secure vault for keys and measurements held locally on the node. For more details, see aka.ms/aks/trustedlaunch. If not specified, the default is false.
* **sshAccess**: 'Disabled' | 'LocalUser' | string: SSH access method of an agent pool.

## AgentPoolUpgradeSettings
### Properties
* **drainTimeoutInMinutes**: int {minValue: 1, maxValue: 1440}: The amount of time (in minutes) to wait on eviction of pods and graceful termination per node. This eviction wait time honors waiting on pod disruption budgets. If this time is exceeded, the upgrade fails. If not specified, the default is 30 minutes.
* **maxSurge**: string: This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 1. For more information, including best practices, see: https://docs.microsoft.com/azure/aks/upgrade-cluster#customize-node-surge-upgrade
* **nodeSoakDurationInMinutes**: int {minValue: 0, maxValue: 30}: The amount of time (in minutes) to wait after draining a node and before reimaging it and moving on to next node. If not specified, the default is 0 minutes.
* **undrainableNodeBehavior**: 'Cordon' | 'Schedule' | string: Defines the behavior for undrainable nodes during upgrade. The most common cause of undrainable nodes is Pod Disruption Budgets (PDBs), but other issues, such as pod termination grace period is exceeding the remaining per-node drain timeout or pod is still being in a running state, can also cause undrainable nodes.

## AgentPoolWindowsProfile
### Properties
* **disableOutboundNat**: bool: The default value is false. Outbound NAT can only be disabled if the cluster outboundType is NAT Gateway and the Windows agent pool does not have node public IP enabled.

## AutoScaleProfile
### Properties
* **maxCount**: int: The maximum number of nodes of the specified sizes.
* **minCount**: int: The minimum number of nodes of the specified sizes.
* **sizes**: string[]: The list of allowed vm sizes e.g. ['Standard_E4s_v3', 'Standard_E16s_v3', 'Standard_D16s_v5']. AKS will use the first available one when auto scaling. If a VM size is unavailable (e.g. due to quota or regional capacity reasons), AKS will use the next size.

## AzureKeyVaultKms
### Properties
* **enabled**: bool: Whether to enable Azure Key Vault key management service. The default is false.
* **keyId**: string: Identifier of Azure Key Vault key. See [key identifier format](https://docs.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates#vault-name-and-object-name) for more details. When Azure Key Vault key management service is enabled, this field is required and must be a valid key identifier. When Azure Key Vault key management service is disabled, leave the field empty.
* **keyVaultNetworkAccess**: 'Private' | 'Public' | string: Network access of key vault. The possible values are `Public` and `Private`. `Public` means the key vault allows public access from all networks. `Private` means the key vault disables public access and enables private link. The default value is `Public`.
* **keyVaultResourceId**: string: Resource ID of key vault. When keyVaultNetworkAccess is `Private`, this field is required and must be a valid resource ID. When keyVaultNetworkAccess is `Public`, leave the field empty.

## ClusterUpgradeSettings
### Properties
* **overrideSettings**: [UpgradeOverrideSettings](#upgradeoverridesettings): Settings for overrides.

## CompatibleVersions
### Properties
* **name**: string: The product/service name.
* **versions**: string[]: Product/service versions compatible with a service mesh add-on revision.

## ContainerServiceLinuxProfile
### Properties
* **adminUsername**: string {pattern: "^[A-Za-z][-A-Za-z0-9_]*$"} (Required): The administrator username to use for Linux VMs.
* **ssh**: [ContainerServiceSshConfiguration](#containerservicesshconfiguration) (Required): The SSH configuration for Linux-based VMs running on Azure.

## ContainerServiceNetworkProfile
### Properties
* **advancedNetworking**: [AdvancedNetworking](#advancednetworking): Advanced Networking profile for enabling observability on a cluster. Note that enabling advanced networking features may incur additional costs. For more information see aka.ms/aksadvancednetworking.
* **dnsServiceIP**: string {pattern: "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"}: An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
* **ipFamilies**: ('IPv4' | 'IPv6' | string)[]: IP families are used to determine single-stack or dual-stack clusters. For single-stack, the expected value is IPv4. For dual-stack, the expected values are IPv4 and IPv6.
* **kubeProxyConfig**: [ContainerServiceNetworkProfileKubeProxyConfig](#containerservicenetworkprofilekubeproxyconfig): Holds configuration customizations for kube-proxy. Any values not defined will use the kube-proxy defaulting behavior. See https://v<version>.docs.kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/ where <version> is represented by a <major version>-<minor version> string. Kubernetes version 1.23 would be '1-23'.
* **loadBalancerProfile**: [ManagedClusterLoadBalancerProfile](#managedclusterloadbalancerprofile): Profile of the cluster load balancer.
* **loadBalancerSku**: 'basic' | 'standard' | string: The default is 'standard'. See [Azure Load Balancer SKUs](https://docs.microsoft.com/azure/load-balancer/skus) for more information about the differences between load balancer SKUs.
* **natGatewayProfile**: [ManagedClusterNATGatewayProfile](#managedclusternatgatewayprofile): Profile of the cluster NAT gateway.
* **networkDataplane**: 'azure' | 'cilium' | string: Network dataplane used in the Kubernetes cluster.
* **networkMode**: 'bridge' | 'transparent' | string: This cannot be specified if networkPlugin is anything other than 'azure'.
* **networkPlugin**: 'azure' | 'kubenet' | 'none' | string: Network plugin used for building the Kubernetes network.
* **networkPluginMode**: 'overlay' | string: Network plugin mode used for building the Kubernetes network.
* **networkPolicy**: 'azure' | 'calico' | 'cilium' | 'none' | string: Network policy used for building the Kubernetes network.
* **outboundType**: 'loadBalancer' | 'managedNATGateway' | 'none' | 'userAssignedNATGateway' | 'userDefinedRouting' | string: This can only be set at cluster creation time and cannot be changed later. For more information see [egress outbound type](https://docs.microsoft.com/azure/aks/egress-outboundtype).
* **podCidr**: string {pattern: "^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$"}: A CIDR notation IP range from which to assign pod IPs when kubenet is used.
* **podCidrs**: string[]: One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
* **podLinkLocalAccess**: 'IMDS' | 'None' | string: Defines access to special link local addresses (Azure Instance Metadata Service, aka IMDS) for pods with hostNetwork=false. if not specified, the default is 'IMDS'.
* **serviceCidr**: string {pattern: "^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$"}: A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
* **serviceCidrs**: string[]: One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. They must not overlap with any Subnet IP ranges.
* **staticEgressGatewayProfile**: [ManagedClusterStaticEgressGatewayProfile](#managedclusterstaticegressgatewayprofile): The profile for Static Egress Gateway addon. For more details about Static Egress Gateway, see https://aka.ms/aks/static-egress-gateway.

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

## CredentialResults
### Properties
* **kubeconfigs**: [CredentialResult](#credentialresult)[] (ReadOnly): Base64-encoded Kubernetes configuration file.

## CredentialResults
### Properties
* **kubeconfigs**: [CredentialResult](#credentialresult)[] (ReadOnly): Base64-encoded Kubernetes configuration file.

## DailySchedule
### Properties
* **intervalDays**: int {minValue: 1, maxValue: 7} (Required): Specifies the number of days between each set of occurrences.

## DateSpan
### Properties
* **end**: string (Required): The end date of the date span.
* **start**: string (Required): The start date of the date span.

## DelegatedResource
### Properties
* **location**: string: The source resource location - internal use only.
* **referralResource**: string: The delegation id of the referral delegation (optional) - internal use only.
* **resourceId**: string: The ARM resource id of the delegated resource - internal use only.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: The tenant id of the delegated resource - internal use only.

## DelegatedResources
### Properties
### Additional Properties
* **Additional Properties Type**: [DelegatedResource](#delegatedresource)

## ExtendedLocation
### Properties
* **name**: string: The name of the extended location.
* **type**: 'EdgeZone' | string: The type of the extended location.

## GuardrailsAvailableVersionsProperties
### Properties
* **isDefaultVersion**: bool (ReadOnly)
* **support**: 'Preview' | 'Stable' | string (ReadOnly): Whether the version is preview or stable.

## IPTag
### Properties
* **ipTagType**: string: The IP tag type. Example: RoutingPreference.
* **tag**: string: The value of the IP tag associated with the public IP. Example: Internet.

## IstioCertificateAuthority
### Properties
* **plugin**: [IstioPluginCertificateAuthority](#istioplugincertificateauthority): Plugin certificates information for Service Mesh.

## IstioComponents
### Properties
* **egressGateways**: [IstioEgressGateway](#istioegressgateway)[]: Istio egress gateways.
* **ingressGateways**: [IstioIngressGateway](#istioingressgateway)[]: Istio ingress gateways.

## IstioEgressGateway
### Properties
* **enabled**: bool (Required): Whether to enable the egress gateway.

## IstioIngressGateway
### Properties
* **enabled**: bool (Required): Whether to enable the ingress gateway.
* **mode**: 'External' | 'Internal' | string (Required): Mode of an ingress gateway.

## IstioPluginCertificateAuthority
### Properties
* **certChainObjectName**: string: Certificate chain object name in Azure Key Vault.
* **certObjectName**: string: Intermediate certificate object name in Azure Key Vault.
* **keyObjectName**: string: Intermediate certificate private key object name in Azure Key Vault.
* **keyVaultId**: string: The resource ID of the Key Vault.
* **rootCertObjectName**: string: Root certificate object name in Azure Key Vault.

## IstioServiceMesh
### Properties
* **certificateAuthority**: [IstioCertificateAuthority](#istiocertificateauthority): Istio Service Mesh Certificate Authority (CA) configuration. For now, we only support plugin certificates as described here https://aka.ms/asm-plugin-ca
* **components**: [IstioComponents](#istiocomponents): Istio components configuration.
* **revisions**: string[] {maxLength: 2}: The list of revisions of the Istio control plane. When an upgrade is not in progress, this holds one value. When canary upgrade is in progress, this can only hold two consecutive values. For more information, see: https://learn.microsoft.com/en-us/azure/aks/istio-upgrade

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

## LabelSelector
### Properties
* **matchExpressions**: [LabelSelectorRequirement](#labelselectorrequirement)[]: matchExpressions is a list of label selector requirements. The requirements are ANDed.
* **matchLabels**: string[]: matchLabels is an array of {key=value} pairs. A single {key=value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is `key`, the operator is `In`, and the values array contains only `value`. The requirements are ANDed.

## LabelSelectorRequirement
### Properties
* **key**: string: key is the label key that the selector applies to.
* **operator**: 'DoesNotExist' | 'Exists' | 'In' | 'NotIn' | string: operator represents a key's relationship to a set of values. Valid operators are In and NotIn
* **values**: string[]: values is an array of string values, the values array must be non-empty.

## LinuxOSConfig
### Properties
* **swapFileSizeMB**: int: The size in MB of a swap file that will be created on each node.
* **sysctls**: [SysctlConfig](#sysctlconfig): Sysctl settings for Linux agent nodes.
* **transparentHugePageDefrag**: string: Valid values are 'always', 'defer', 'defer+madvise', 'madvise' and 'never'. The default is 'madvise'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
* **transparentHugePageEnabled**: string: Valid values are 'always', 'madvise', and 'never'. The default is 'always'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).

## LoadBalancerProperties
### Properties
* **allowServicePlacement**: bool: Whether to automatically place services on the load balancer. If not supplied, the default value is true. If set to false manually, both of the external and the internal load balancer will not be selected for services unless they explicitly target it.
* **name**: string (Required): Name of the public load balancer. There will be an internal load balancer created if needed, and the name will be `<name>-internal`. The internal lb shares the same configurations as the external one. The internal lbs are not needed to be included in LoadBalancer list. There must be a name of kubernetes in the list.
* **nodeSelector**: [LabelSelector](#labelselector): Nodes that match this selector will be possible members of this load balancer.
* **primaryAgentPoolName**: string (Required): Required field. A string value that must specify the ID of an existing agent pool. All nodes in the given pool will always be added to this load balancer. This agent pool must have at least one node and minCount>=1 for autoscaling operations. An agent pool can only be the primary pool for a single load balancer.
* **provisioningState**: string (ReadOnly): The current provisioning state.
* **serviceLabelSelector**: [LabelSelector](#labelselector): Only services that must match this selector can be placed on this load balancer.
* **serviceNamespaceSelector**: [LabelSelector](#labelselector): Services created in namespaces that match the selector can be placed on this load balancer.

## MachineIpAddress
### Properties
* **family**: 'IPv4' | 'IPv6' | string (ReadOnly): To determine if address belongs IPv4 or IPv6 family
* **ip**: string (ReadOnly): IPv4 or IPv6 address of the machine

## MachineNetworkProperties
### Properties
* **ipAddresses**: [MachineIpAddress](#machineipaddress)[] (ReadOnly): IPv4, IPv6 addresses of the machine

## MachineProperties
### Properties
* **network**: [MachineNetworkProperties](#machinenetworkproperties) (ReadOnly): network properties of the machine
* **resourceId**: string (ReadOnly): Arm resource id of the machine. It can be used to GET underlying VM Instance

## MaintenanceConfigurationProperties
### Properties
* **maintenanceWindow**: [MaintenanceWindow](#maintenancewindow): Maintenance window for the maintenance configuration.
* **notAllowedTime**: [TimeSpan](#timespan)[]: Time slots on which upgrade is not allowed.
* **timeInWeek**: [TimeInWeek](#timeinweek)[]: If two array entries specify the same day of the week, the applied configuration is the union of times in both entries.

## MaintenanceWindow
### Properties
* **durationHours**: int {minValue: 4, maxValue: 24} (Required): Length of maintenance window range from 4 to 24 hours.
* **notAllowedDates**: [DateSpan](#datespan)[]: Date ranges on which upgrade is not allowed. 'utcOffset' applies to this field. For example, with 'utcOffset: +02:00' and 'dateSpan' being '2022-12-23' to '2023-01-03', maintenance will be blocked from '2022-12-22 22:00' to '2023-01-03 22:00' in UTC time.
* **schedule**: [Schedule](#schedule) (Required): Recurrence schedule for the maintenance window.
* **startDate**: string: The date the maintenance window activates. If the current date is before this date, the maintenance window is inactive and will not be used for upgrades. If not specified, the maintenance window will be active right away.
* **startTime**: string {pattern: "^\d{2}:\d{2}$"} (Required): The start time of the maintenance window. Accepted values are from '00:00' to '23:59'. 'utcOffset' applies to this field. For example: '02:00' with 'utcOffset: +02:00' means UTC time '00:00'.
* **utcOffset**: string {pattern: "^(-|\+)[0-9]{2}:[0-9]{2}$"}: The UTC offset in format +/-HH:mm. For example, '+05:30' for IST and '-07:00' for PST. If not specified, the default is '+00:00'.

## ManagedClusterAADProfile
### Properties
* **adminGroupObjectIDs**: string[]: The list of AAD group object IDs that will have admin role of the cluster.
* **clientAppID**: string: (DEPRECATED) The client AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
* **enableAzureRBAC**: bool: Whether to enable Azure RBAC for Kubernetes authorization.
* **managed**: bool: Whether to enable managed AAD.
* **serverAppID**: string: (DEPRECATED) The server AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
* **serverAppSecret**: string: (DEPRECATED) The server AAD application secret. Learn more at https://aka.ms/aks/aad-legacy.
* **tenantID**: string: The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.

## ManagedClusterAccessProfile
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
* **artifactStreamingProfile**: [AgentPoolArtifactStreamingProfile](#agentpoolartifactstreamingprofile): Configuration for using artifact streaming on AKS.
* **availabilityZones**: string[]: The list of Availability zones to use for nodes. This can only be specified if the AgentPoolType property is 'VirtualMachineScaleSets'.
* **capacityReservationGroupID**: string: AKS will associate the specified agent pool with the Capacity Reservation Group.
* **count**: int: Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1.
* **creationData**: [CreationData](#creationdata): CreationData to be used to specify the source Snapshot ID if the node pool will be created/upgraded using a snapshot.
* **currentOrchestratorVersion**: string (ReadOnly): If orchestratorVersion was a fully specified version <major.minor.patch>, this field will be exactly equal to it. If orchestratorVersion was <major.minor>, this field will contain the full <major.minor.patch> version being used.
* **enableAutoScaling**: bool: Whether to enable auto-scaler
* **enableCustomCATrust**: bool: When set to true, AKS adds a label to the node indicating that the feature is enabled and deploys a daemonset along with host services to sync custom certificate authorities from user-provided list of base64 encoded certificates into node trust stores. Defaults to false.
* **enableEncryptionAtHost**: bool: This is only supported on certain VM sizes and in certain Azure regions. For more information, see: https://docs.microsoft.com/azure/aks/enable-host-encryption
* **enableFIPS**: bool: See [Add a FIPS-enabled node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#add-a-fips-enabled-node-pool-preview) for more details.
* **enableNodePublicIP**: bool: Some scenarios may require nodes in a node pool to receive their own dedicated public IP addresses. A common scenario is for gaming workloads, where a console needs to make a direct connection to a cloud virtual machine to minimize hops. For more information see [assigning a public IP per node](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#assign-a-public-ip-per-node-for-your-node-pools). The default is false.
* **enableUltraSSD**: bool: Whether to enable UltraSSD
* **eTag**: string (ReadOnly): Unique read-only string used to implement optimistic concurrency. The eTag value will change when the resource is updated. Specify an if-match or if-none-match header with the eTag value for a subsequent request to enable optimistic concurrency per the normal etag convention.
* **gatewayProfile**: [AgentPoolGatewayProfile](#agentpoolgatewayprofile): Profile specific to a managed agent pool in Gateway mode. This field cannot be set if agent pool mode is not Gateway.
* **gpuInstanceProfile**: 'MIG1g' | 'MIG2g' | 'MIG3g' | 'MIG4g' | 'MIG7g' | string: GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU.
* **gpuProfile**: [AgentPoolGPUProfile](#agentpoolgpuprofile): The GPU settings of an agent pool.
* **hostGroupID**: string: This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information see [Azure dedicated hosts](https://docs.microsoft.com/azure/virtual-machines/dedicated-hosts).
* **kubeletConfig**: [KubeletConfig](#kubeletconfig): The Kubelet configuration on the agent pool nodes.
* **kubeletDiskType**: 'OS' | 'Temporary' | string: Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
* **linuxOSConfig**: [LinuxOSConfig](#linuxosconfig): The OS configuration of Linux agent nodes.
* **maxCount**: int: The maximum number of nodes for auto-scaling
* **maxPods**: int: The maximum number of pods that can run on a node.
* **messageOfTheDay**: string: A base64-encoded string which will be written to /etc/motd after decoding. This allows customization of the message of the day for Linux nodes. It must not be specified for Windows nodes. It must be a static string (i.e., will be printed raw and not be executed as a script).
* **minCount**: int: The minimum number of nodes for auto-scaling
* **mode**: 'Gateway' | 'System' | 'User' | string: A cluster must have at least one 'System' Agent Pool at all times. For additional information on agent pool restrictions and best practices, see: https://docs.microsoft.com/azure/aks/use-system-pools
* **name**: string {pattern: "^[a-z][a-z0-9]{0,11}$"} (Required): Windows agent pool names must be 6 characters or less.
* **networkProfile**: [AgentPoolNetworkProfile](#agentpoolnetworkprofile): Network-related settings of an agent pool.
* **nodeImageVersion**: string (ReadOnly): The version of node image
* **nodeInitializationTaints**: string[]: These taints will not be reconciled by AKS and can be removed with a kubectl call. This field can be modified after node pool is created, but nodes will not be recreated with new taints until another operation that requires recreation (e.g. node image upgrade) happens. These taints allow for required configuration to run before the node is ready to accept workloads, for example 'key1=value1:NoSchedule' that then can be removed with `kubectl taint nodes node1 key1=value1:NoSchedule-`
* **nodeLabels**: [ManagedClusterAgentPoolProfilePropertiesNodeLabels](#managedclusteragentpoolprofilepropertiesnodelabels): The node labels to be persisted across all nodes in agent pool.
* **nodePublicIPPrefixID**: string: This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIPPrefixName}
* **nodeTaints**: string[]: The taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
* **orchestratorVersion**: string: Both patch version <major.minor.patch> and <major.minor> are supported. When <major.minor> is specified, the latest supported patch version is chosen automatically. Updating the agent pool with the same <major.minor> once it has been created will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see [upgrading a node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#upgrade-a-node-pool).
* **osDiskSizeGB**: int {minValue: 0, maxValue: 2048}: OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
* **osDiskType**: 'Ephemeral' | 'Managed' | string: The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
* **osSKU**: 'AzureLinux' | 'CBLMariner' | 'Mariner' | 'Ubuntu' | 'Windows2019' | 'Windows2022' | 'WindowsAnnual' | string: Specifies the OS SKU used by the agent pool. If not specified, the default is Ubuntu if OSType=Linux or Windows2019 if OSType=Windows. And the default Windows OSSKU will be changed to Windows2022 after Windows2019 is deprecated.
* **osType**: 'Linux' | 'Windows' | string: The operating system type. The default is Linux.
* **podIPAllocationMode**: 'DynamicIndividual' | 'StaticBlock' | string: The IP allocation mode for pods in the agent pool. Must be used with podSubnetId. The default is 'DynamicIndividual'.
* **podSubnetID**: string: If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
* **powerState**: [PowerState](#powerstate): When an Agent Pool is first created it is initially Running. The Agent Pool can be stopped by setting this field to Stopped. A stopped Agent Pool stops all of its VMs and does not accrue billing charges. An Agent Pool can only be stopped if it is Running and provisioning state is Succeeded
* **provisioningState**: string (ReadOnly): The current deployment or provisioning state.
* **proximityPlacementGroupID**: string: The ID for Proximity Placement Group.
* **scaleDownMode**: 'Deallocate' | 'Delete' | string: This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete.
* **scaleSetEvictionPolicy**: 'Deallocate' | 'Delete' | string: This cannot be specified unless the scaleSetPriority is 'Spot'. If not specified, the default is 'Delete'.
* **scaleSetPriority**: 'Regular' | 'Spot' | string: The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
* **securityProfile**: [AgentPoolSecurityProfile](#agentpoolsecurityprofile): The security settings of an agent pool.
* **spotMaxPrice**: int: Possible values are any decimal value greater than zero or -1 which indicates the willingness to pay any on-demand price. For more details on spot pricing, see [spot VMs pricing](https://docs.microsoft.com/azure/virtual-machines/spot-vms#pricing)
* **tags**: [ManagedClusterAgentPoolProfilePropertiesTags](#managedclusteragentpoolprofilepropertiestags): The tags to be persisted on the agent pool virtual machine scale set.
* **type**: 'AvailabilitySet' | 'VirtualMachineScaleSets' | 'VirtualMachines' | string: The type of Agent Pool.
* **upgradeSettings**: [AgentPoolUpgradeSettings](#agentpoolupgradesettings): Settings for upgrading the agentpool
* **virtualMachineNodesStatus**: [VirtualMachineNodes](#virtualmachinenodes)[]: The status of nodes in a VirtualMachines agent pool.
* **virtualMachinesProfile**: [VirtualMachinesProfile](#virtualmachinesprofile): Specifications on VirtualMachines agent pool.
* **vmSize**: string: VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
* **vnetSubnetID**: string: If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
* **windowsProfile**: [AgentPoolWindowsProfile](#agentpoolwindowsprofile): The Windows agent pool's specific profile.
* **workloadRuntime**: 'KataMshvVmIsolation' | 'OCIContainer' | 'WasmWasi' | string: Determines the type of workload a node can run.

## ManagedClusterAgentPoolProfileProperties
### Properties
* **artifactStreamingProfile**: [AgentPoolArtifactStreamingProfile](#agentpoolartifactstreamingprofile): Configuration for using artifact streaming on AKS.
* **availabilityZones**: string[]: The list of Availability zones to use for nodes. This can only be specified if the AgentPoolType property is 'VirtualMachineScaleSets'.
* **capacityReservationGroupID**: string: AKS will associate the specified agent pool with the Capacity Reservation Group.
* **count**: int: Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1.
* **creationData**: [CreationData](#creationdata): CreationData to be used to specify the source Snapshot ID if the node pool will be created/upgraded using a snapshot.
* **currentOrchestratorVersion**: string (ReadOnly): If orchestratorVersion was a fully specified version <major.minor.patch>, this field will be exactly equal to it. If orchestratorVersion was <major.minor>, this field will contain the full <major.minor.patch> version being used.
* **enableAutoScaling**: bool: Whether to enable auto-scaler
* **enableCustomCATrust**: bool: When set to true, AKS adds a label to the node indicating that the feature is enabled and deploys a daemonset along with host services to sync custom certificate authorities from user-provided list of base64 encoded certificates into node trust stores. Defaults to false.
* **enableEncryptionAtHost**: bool: This is only supported on certain VM sizes and in certain Azure regions. For more information, see: https://docs.microsoft.com/azure/aks/enable-host-encryption
* **enableFIPS**: bool: See [Add a FIPS-enabled node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#add-a-fips-enabled-node-pool-preview) for more details.
* **enableNodePublicIP**: bool: Some scenarios may require nodes in a node pool to receive their own dedicated public IP addresses. A common scenario is for gaming workloads, where a console needs to make a direct connection to a cloud virtual machine to minimize hops. For more information see [assigning a public IP per node](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#assign-a-public-ip-per-node-for-your-node-pools). The default is false.
* **enableUltraSSD**: bool: Whether to enable UltraSSD
* **eTag**: string (ReadOnly): Unique read-only string used to implement optimistic concurrency. The eTag value will change when the resource is updated. Specify an if-match or if-none-match header with the eTag value for a subsequent request to enable optimistic concurrency per the normal etag convention.
* **gatewayProfile**: [AgentPoolGatewayProfile](#agentpoolgatewayprofile): Profile specific to a managed agent pool in Gateway mode. This field cannot be set if agent pool mode is not Gateway.
* **gpuInstanceProfile**: 'MIG1g' | 'MIG2g' | 'MIG3g' | 'MIG4g' | 'MIG7g' | string: GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU.
* **gpuProfile**: [AgentPoolGPUProfile](#agentpoolgpuprofile): The GPU settings of an agent pool.
* **hostGroupID**: string: This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information see [Azure dedicated hosts](https://docs.microsoft.com/azure/virtual-machines/dedicated-hosts).
* **kubeletConfig**: [KubeletConfig](#kubeletconfig): The Kubelet configuration on the agent pool nodes.
* **kubeletDiskType**: 'OS' | 'Temporary' | string: Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
* **linuxOSConfig**: [LinuxOSConfig](#linuxosconfig): The OS configuration of Linux agent nodes.
* **maxCount**: int: The maximum number of nodes for auto-scaling
* **maxPods**: int: The maximum number of pods that can run on a node.
* **messageOfTheDay**: string: A base64-encoded string which will be written to /etc/motd after decoding. This allows customization of the message of the day for Linux nodes. It must not be specified for Windows nodes. It must be a static string (i.e., will be printed raw and not be executed as a script).
* **minCount**: int: The minimum number of nodes for auto-scaling
* **mode**: 'Gateway' | 'System' | 'User' | string: A cluster must have at least one 'System' Agent Pool at all times. For additional information on agent pool restrictions and best practices, see: https://docs.microsoft.com/azure/aks/use-system-pools
* **networkProfile**: [AgentPoolNetworkProfile](#agentpoolnetworkprofile): Network-related settings of an agent pool.
* **nodeImageVersion**: string (ReadOnly): The version of node image
* **nodeInitializationTaints**: string[]: These taints will not be reconciled by AKS and can be removed with a kubectl call. This field can be modified after node pool is created, but nodes will not be recreated with new taints until another operation that requires recreation (e.g. node image upgrade) happens. These taints allow for required configuration to run before the node is ready to accept workloads, for example 'key1=value1:NoSchedule' that then can be removed with `kubectl taint nodes node1 key1=value1:NoSchedule-`
* **nodeLabels**: [ManagedClusterAgentPoolProfilePropertiesNodeLabels](#managedclusteragentpoolprofilepropertiesnodelabels): The node labels to be persisted across all nodes in agent pool.
* **nodePublicIPPrefixID**: string: This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIPPrefixName}
* **nodeTaints**: string[]: The taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
* **orchestratorVersion**: string: Both patch version <major.minor.patch> and <major.minor> are supported. When <major.minor> is specified, the latest supported patch version is chosen automatically. Updating the agent pool with the same <major.minor> once it has been created will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see [upgrading a node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#upgrade-a-node-pool).
* **osDiskSizeGB**: int {minValue: 0, maxValue: 2048}: OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
* **osDiskType**: 'Ephemeral' | 'Managed' | string: The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
* **osSKU**: 'AzureLinux' | 'CBLMariner' | 'Mariner' | 'Ubuntu' | 'Windows2019' | 'Windows2022' | 'WindowsAnnual' | string: Specifies the OS SKU used by the agent pool. If not specified, the default is Ubuntu if OSType=Linux or Windows2019 if OSType=Windows. And the default Windows OSSKU will be changed to Windows2022 after Windows2019 is deprecated.
* **osType**: 'Linux' | 'Windows' | string: The operating system type. The default is Linux.
* **podIPAllocationMode**: 'DynamicIndividual' | 'StaticBlock' | string: The IP allocation mode for pods in the agent pool. Must be used with podSubnetId. The default is 'DynamicIndividual'.
* **podSubnetID**: string: If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
* **powerState**: [PowerState](#powerstate): When an Agent Pool is first created it is initially Running. The Agent Pool can be stopped by setting this field to Stopped. A stopped Agent Pool stops all of its VMs and does not accrue billing charges. An Agent Pool can only be stopped if it is Running and provisioning state is Succeeded
* **provisioningState**: string (ReadOnly): The current deployment or provisioning state.
* **proximityPlacementGroupID**: string: The ID for Proximity Placement Group.
* **scaleDownMode**: 'Deallocate' | 'Delete' | string: This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete.
* **scaleSetEvictionPolicy**: 'Deallocate' | 'Delete' | string: This cannot be specified unless the scaleSetPriority is 'Spot'. If not specified, the default is 'Delete'.
* **scaleSetPriority**: 'Regular' | 'Spot' | string: The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
* **securityProfile**: [AgentPoolSecurityProfile](#agentpoolsecurityprofile): The security settings of an agent pool.
* **spotMaxPrice**: int: Possible values are any decimal value greater than zero or -1 which indicates the willingness to pay any on-demand price. For more details on spot pricing, see [spot VMs pricing](https://docs.microsoft.com/azure/virtual-machines/spot-vms#pricing)
* **tags**: [ManagedClusterAgentPoolProfilePropertiesTags](#managedclusteragentpoolprofilepropertiestags): The tags to be persisted on the agent pool virtual machine scale set.
* **type**: 'AvailabilitySet' | 'VirtualMachineScaleSets' | 'VirtualMachines' | string: The type of Agent Pool.
* **upgradeSettings**: [AgentPoolUpgradeSettings](#agentpoolupgradesettings): Settings for upgrading the agentpool
* **virtualMachineNodesStatus**: [VirtualMachineNodes](#virtualmachinenodes)[]: The status of nodes in a VirtualMachines agent pool.
* **virtualMachinesProfile**: [VirtualMachinesProfile](#virtualmachinesprofile): Specifications on VirtualMachines agent pool.
* **vmSize**: string: VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
* **vnetSubnetID**: string: If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
* **windowsProfile**: [AgentPoolWindowsProfile](#agentpoolwindowsprofile): The Windows agent pool's specific profile.
* **workloadRuntime**: 'KataMshvVmIsolation' | 'OCIContainer' | 'WasmWasi' | string: Determines the type of workload a node can run.

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

## ManagedClusterAIToolchainOperatorProfile
### Properties
* **enabled**: bool: Indicates if AI toolchain operator  enabled or not.

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
* **nodeOSUpgradeChannel**: 'NodeImage' | 'None' | 'SecurityPatch' | 'Unmanaged' | string: The default is Unmanaged, but may change to either NodeImage or SecurityPatch at GA.
* **upgradeChannel**: 'node-image' | 'none' | 'patch' | 'rapid' | 'stable' | string: For more information see [setting the AKS cluster auto-upgrade channel](https://docs.microsoft.com/azure/aks/upgrade-cluster#set-auto-upgrade-channel).

## ManagedClusterAzureMonitorProfile
### Properties
* **appMonitoring**: [ManagedClusterAzureMonitorProfileAppMonitoring](#managedclusterazuremonitorprofileappmonitoring): Application Monitoring Profile for Kubernetes Application Container. Collects application logs, metrics and traces through auto-instrumentation of the application using Azure Monitor OpenTelemetry based SDKs. See aka.ms/AzureMonitorApplicationMonitoring for an overview.
* **containerInsights**: [ManagedClusterAzureMonitorProfileContainerInsights](#managedclusterazuremonitorprofilecontainerinsights): Azure Monitor Container Insights Profile for Kubernetes Events, Inventory and Container stdout & stderr logs etc. See aka.ms/AzureMonitorContainerInsights for an overview.
* **metrics**: [ManagedClusterAzureMonitorProfileMetrics](#managedclusterazuremonitorprofilemetrics): Metrics profile for the prometheus service addon

## ManagedClusterAzureMonitorProfileAppMonitoring
### Properties
* **autoInstrumentation**: [ManagedClusterAzureMonitorProfileAppMonitoringAutoInstrumentation](#managedclusterazuremonitorprofileappmonitoringautoinstrumentation): Application Monitoring Auto Instrumentation for Kubernetes Application Container. Deploys web hook to auto-instrument Azure Monitor OpenTelemetry based SDKs to collect OpenTelemetry metrics, logs and traces of the application. See aka.ms/AzureMonitorApplicationMonitoring for an overview.
* **openTelemetryLogs**: [ManagedClusterAzureMonitorProfileAppMonitoringOpenTelemetryLogs](#managedclusterazuremonitorprofileappmonitoringopentelemetrylogs): Application Monitoring Open Telemetry Metrics Profile for Kubernetes Application Container Logs and Traces. Collects OpenTelemetry logs and traces of the application using Azure Monitor OpenTelemetry based SDKs. See aka.ms/AzureMonitorApplicationMonitoring for an overview.
* **openTelemetryMetrics**: [ManagedClusterAzureMonitorProfileAppMonitoringOpenTelemetryMetrics](#managedclusterazuremonitorprofileappmonitoringopentelemetrymetrics): Application Monitoring Open Telemetry Metrics Profile for Kubernetes Application Container Metrics. Collects OpenTelemetry metrics of the application using Azure Monitor OpenTelemetry based SDKs. See aka.ms/AzureMonitorApplicationMonitoring for an overview.

## ManagedClusterAzureMonitorProfileAppMonitoringAutoInstrumentation
### Properties
* **enabled**: bool: Indicates if Application Monitoring Auto Instrumentation is enabled or not.

## ManagedClusterAzureMonitorProfileAppMonitoringOpenTelemetryLogs
### Properties
* **enabled**: bool: Indicates if Application Monitoring Open Telemetry Logs and traces is enabled or not.
* **port**: int: The Open Telemetry host port for Open Telemetry logs and traces. If not specified, the default port is 28331.

## ManagedClusterAzureMonitorProfileAppMonitoringOpenTelemetryMetrics
### Properties
* **enabled**: bool: Indicates if Application Monitoring Open Telemetry Metrics is enabled or not.
* **port**: int: The Open Telemetry host port for Open Telemetry metrics. If not specified, the default port is 28333.

## ManagedClusterAzureMonitorProfileContainerInsights
### Properties
* **disableCustomMetrics**: bool: Indicates whether custom metrics collection has to be disabled or not. If not specified the default is false. No custom metrics will be emitted if this field is false but the container insights enabled field is false
* **disablePrometheusMetricsScraping**: bool: Indicates whether prometheus metrics scraping is disabled or not. If not specified the default is false. No prometheus metrics will be emitted if this field is false but the container insights enabled field is false
* **enabled**: bool: Indicates if Azure Monitor Container Insights Logs Addon is enabled or not.
* **logAnalyticsWorkspaceResourceId**: string: Fully Qualified ARM Resource Id of Azure Log Analytics Workspace for storing Azure Monitor Container Insights Logs.
* **syslogPort**: int: The syslog host port. If not specified, the default port is 28330.

## ManagedClusterAzureMonitorProfileKubeStateMetrics
### Properties
* **metricAnnotationsAllowList**: string: Comma-separated list of additional Kubernetes label keys that will be used in the resource's labels metric.
* **metricLabelsAllowlist**: string: Comma-separated list of Kubernetes annotations keys that will be used in the resource's labels metric.

## ManagedClusterAzureMonitorProfileMetrics
### Properties
* **enabled**: bool (Required): Whether to enable the Prometheus collector
* **kubeStateMetrics**: [ManagedClusterAzureMonitorProfileKubeStateMetrics](#managedclusterazuremonitorprofilekubestatemetrics): Kube State Metrics for prometheus addon profile for the container service cluster

## ManagedClusterBootstrapProfile
### Properties
* **artifactSource**: 'Cache' | 'Direct' | string: The source where the artifacts are downloaded from.
* **containerRegistryId**: string: The resource Id of Azure Container Registry. The registry must have private network access, premium SKU and zone redundancy.

## ManagedClusterCostAnalysis
### Properties
* **enabled**: bool: The Managed Cluster sku.tier must be set to 'Standard' or 'Premium' to enable this feature. Enabling this will add Kubernetes Namespace and Deployment details to the Cost Analysis views in the Azure portal. If not specified, the default is false. For more information see aka.ms/aks/docs/cost-analysis.

## ManagedClusterHttpProxyConfig
### Properties
* **effectiveNoProxy**: string[] (ReadOnly): A read-only list of all endpoints for which traffic should not be sent to the proxy. This list is a superset of noProxy and values injected by AKS.
* **httpProxy**: string: The HTTP proxy server endpoint to use.
* **httpsProxy**: string: The HTTPS proxy server endpoint to use.
* **noProxy**: string[]: The endpoints that should not go through proxy.
* **trustedCa**: string: Alternative CA cert to use for connecting to proxy servers.

## ManagedClusterIdentity
### Properties
* **delegatedResources**: [DelegatedResources](#delegatedresources): The delegated identity resources assigned to this managed cluster. This can only be set by another Azure Resource Provider, and managed cluster only accept one delegated identity resource. Internal use only.
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

## ManagedClusterIngressProfileNginx
### Properties
* **defaultIngressControllerType**: 'AnnotationControlled' | 'External' | 'Internal' | 'None' | string: Ingress type for the default NginxIngressController custom resource

## ManagedClusterIngressProfileWebAppRouting
### Properties
* **dnsZoneResourceIds**: string[] {maxLength: 5}: Resource IDs of the DNS zones to be associated with the Web App Routing add-on. Used only when Web App Routing is enabled. Public and private DNS zones can be in different resource groups, but all public DNS zones must be in the same resource group and all private DNS zones must be in the same resource group.
* **enabled**: bool: Whether to enable Web App Routing.
* **identity**: [UserAssignedIdentity](#userassignedidentity) (ReadOnly): Managed identity of the Web Application Routing add-on. This is the identity that should be granted permissions, for example, to manage the associated Azure DNS resource and get certificates from Azure Key Vault. See [this overview of the add-on](https://learn.microsoft.com/en-us/azure/aks/web-app-routing?tabs=with-osm) for more instructions.
* **nginx**: [ManagedClusterIngressProfileNginx](#managedclusteringressprofilenginx): Configuration for the default NginxIngressController. See more at https://learn.microsoft.com/en-us/azure/aks/app-routing-nginx-configuration#the-default-nginx-ingress-controller.

## ManagedClusterLoadBalancerProfile
### Properties
* **allocatedOutboundPorts**: int {minValue: 0, maxValue: 64000}: The desired number of allocated SNAT ports per VM. Allowed values are in the range of 0 to 64000 (inclusive). The default value is 0 which results in Azure dynamically allocating ports.
* **backendPoolType**: 'NodeIP' | 'NodeIPConfiguration' | string: The type of the managed inbound Load Balancer BackendPool.
* **clusterServiceLoadBalancerHealthProbeMode**: 'ServiceNodePort' | 'Shared' | string: The health probing behavior for External Traffic Policy Cluster services.
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

## ManagedClusterMetricsProfile
### Properties
* **costAnalysis**: [ManagedClusterCostAnalysis](#managedclustercostanalysis): The cost analysis configuration for the cluster

## ManagedClusterNATGatewayProfile
### Properties
* **effectiveOutboundIPs**: [ResourceReference](#resourcereference)[]: The effective outbound IP resources of the cluster NAT gateway.
* **idleTimeoutInMinutes**: int {minValue: 4, maxValue: 120}: Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 4 minutes.
* **managedOutboundIPProfile**: [ManagedClusterManagedOutboundIPProfile](#managedclustermanagedoutboundipprofile): Profile of the managed outbound IP resources of the cluster NAT gateway.

## ManagedClusterNodeProvisioningProfile
### Properties
* **mode**: 'Auto' | 'Manual' | string: Once the mode it set to Auto, it cannot be changed back to Manual.

## ManagedClusterNodeResourceGroupProfile
### Properties
* **restrictionLevel**: 'ReadOnly' | 'Unrestricted' | string: The restriction level applied to the cluster's node resource group

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
* **provisioningState**: 'Assigned' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state of the pod identity.

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
* **aiToolchainOperatorProfile**: [ManagedClusterAIToolchainOperatorProfile](#managedclusteraitoolchainoperatorprofile): AI toolchain operator settings that apply to the whole cluster.
* **apiServerAccessProfile**: [ManagedClusterAPIServerAccessProfile](#managedclusterapiserveraccessprofile): The access profile for managed cluster API server.
* **autoScalerProfile**: [ManagedClusterPropertiesAutoScalerProfile](#managedclusterpropertiesautoscalerprofile): Parameters to be applied to the cluster-autoscaler when enabled
* **autoUpgradeProfile**: [ManagedClusterAutoUpgradeProfile](#managedclusterautoupgradeprofile): The auto upgrade configuration.
* **azureMonitorProfile**: [ManagedClusterAzureMonitorProfile](#managedclusterazuremonitorprofile): Prometheus addon profile for the container service cluster
* **azurePortalFQDN**: string (ReadOnly): The Azure Portal requires certain Cross-Origin Resource Sharing (CORS) headers to be sent in some responses, which Kubernetes APIServer doesn't handle by default. This special FQDN supports CORS, allowing the Azure Portal to function properly.
* **bootstrapProfile**: [ManagedClusterBootstrapProfile](#managedclusterbootstrapprofile): Profile of the cluster bootstrap configuration.
* **creationData**: [CreationData](#creationdata): CreationData to be used to specify the source Snapshot ID if the cluster will be created/upgraded using a snapshot.
* **currentKubernetesVersion**: string (ReadOnly): The version of Kubernetes the Managed Cluster is running.
* **disableLocalAccounts**: bool: If set to true, getting static credentials will be disabled for this cluster. This must only be used on Managed Clusters that are AAD enabled. For more details see [disable local accounts](https://docs.microsoft.com/azure/aks/managed-aad#disable-local-accounts-preview).
* **diskEncryptionSetID**: string: This is of the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{encryptionSetName}'
* **dnsPrefix**: string: This cannot be updated once the Managed Cluster has been created.
* **enableNamespaceResources**: bool: The default value is false. It can be enabled/disabled on creation and updating of the managed cluster. See [https://aka.ms/NamespaceARMResource](https://aka.ms/NamespaceARMResource) for more details on Namespace as a ARM Resource.
* **enablePodSecurityPolicy**: bool: (DEPRECATED) Whether to enable Kubernetes pod security policy (preview). PodSecurityPolicy was deprecated in Kubernetes v1.21, and removed from Kubernetes in v1.25. Learn more at https://aka.ms/k8s/psp and https://aka.ms/aks/psp.
* **enableRBAC**: bool: Whether to enable Kubernetes Role-Based Access Control.
* **fqdn**: string (ReadOnly): The FQDN of the master pool.
* **fqdnSubdomain**: string: This cannot be updated once the Managed Cluster has been created.
* **httpProxyConfig**: [ManagedClusterHttpProxyConfig](#managedclusterhttpproxyconfig): Configurations for provisioning the cluster with HTTP proxy servers.
* **identityProfile**: [ManagedClusterPropertiesIdentityProfile](#managedclusterpropertiesidentityprofile): Identities associated with the cluster.
* **ingressProfile**: [ManagedClusterIngressProfile](#managedclusteringressprofile): Ingress profile for the managed cluster.
* **kubernetesVersion**: string: When you upgrade a supported AKS cluster, Kubernetes minor versions cannot be skipped. All upgrades must be performed sequentially by major version number. For example, upgrades between 1.14.x -> 1.15.x or 1.15.x -> 1.16.x are allowed, however 1.14.x -> 1.16.x is not allowed. See [upgrading an AKS cluster](https://docs.microsoft.com/azure/aks/upgrade-cluster) for more details.
* **linuxProfile**: [ContainerServiceLinuxProfile](#containerservicelinuxprofile): The profile for Linux VMs in the Managed Cluster.
* **maxAgentPools**: int (ReadOnly): The max number of agent pools for the managed cluster.
* **metricsProfile**: [ManagedClusterMetricsProfile](#managedclustermetricsprofile): Optional cluster metrics configuration.
* **networkProfile**: [ContainerServiceNetworkProfile](#containerservicenetworkprofile): The network configuration profile.
* **nodeProvisioningProfile**: [ManagedClusterNodeProvisioningProfile](#managedclusternodeprovisioningprofile): Node provisioning settings that apply to the whole cluster.
* **nodeResourceGroup**: string: The name of the resource group containing agent pool nodes.
* **nodeResourceGroupProfile**: [ManagedClusterNodeResourceGroupProfile](#managedclusternoderesourcegroupprofile): The node resource group configuration profile.
* **oidcIssuerProfile**: [ManagedClusterOidcIssuerProfile](#managedclusteroidcissuerprofile): The OIDC issuer profile of the Managed Cluster.
* **podIdentityProfile**: [ManagedClusterPodIdentityProfile](#managedclusterpodidentityprofile): See [use AAD pod identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity) for more details on AAD pod identity integration.
* **powerState**: [PowerState](#powerstate) (ReadOnly): The Power State of the cluster.
* **privateFQDN**: string (ReadOnly): The FQDN of private cluster.
* **privateLinkResources**: [PrivateLinkResource](#privatelinkresource)[]: Private link resources associated with the cluster.
* **provisioningState**: string (ReadOnly): The current provisioning state.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | 'SecuredByPerimeter' | string: Allow or deny public network access for AKS
* **resourceUID**: string (ReadOnly): The resourceUID uniquely identifies ManagedClusters that reuse ARM ResourceIds (i.e: create, delete, create sequence)
* **safeguardsProfile**: [SafeguardsProfile](#safeguardsprofile): The Safeguards profile holds all the safeguards information for a given cluster
* **securityProfile**: [ManagedClusterSecurityProfile](#managedclustersecurityprofile): Security profile for the managed cluster.
* **serviceMeshProfile**: [ServiceMeshProfile](#servicemeshprofile): Service mesh profile for a managed cluster.
* **servicePrincipalProfile**: [ManagedClusterServicePrincipalProfile](#managedclusterserviceprincipalprofile): Information about a service principal identity for the cluster to use for manipulating Azure APIs.
* **storageProfile**: [ManagedClusterStorageProfile](#managedclusterstorageprofile): Storage profile for the managed cluster.
* **supportPlan**: 'AKSLongTermSupport' | 'KubernetesOfficial' | string: The support plan for the Managed Cluster. If unspecified, the default is 'KubernetesOfficial'.
* **upgradeSettings**: [ClusterUpgradeSettings](#clusterupgradesettings): Settings for upgrading a cluster.
* **windowsProfile**: [ManagedClusterWindowsProfile](#managedclusterwindowsprofile): The profile for Windows VMs in the Managed Cluster.
* **workloadAutoScalerProfile**: [ManagedClusterWorkloadAutoScalerProfile](#managedclusterworkloadautoscalerprofile): Workload Auto-scaler profile for the managed cluster.

## ManagedClusterPropertiesAddonProfiles
### Properties
### Additional Properties
* **Additional Properties Type**: [ManagedClusterAddonProfile](#managedclusteraddonprofile)

## ManagedClusterPropertiesAutoScalerProfile
### Properties
* **balance-similar-node-groups**: string: Valid values are 'true' and 'false'
* **daemonset-eviction-for-empty-nodes**: bool: If set to true, all daemonset pods on empty nodes will be evicted before deletion of the node. If the daemonset pod cannot be evicted another node will be chosen for scaling. If set to false, the node will be deleted without ensuring that daemonset pods are deleted or evicted.
* **daemonset-eviction-for-occupied-nodes**: bool: If set to true, all daemonset pods on occupied nodes will be evicted before deletion of the node. If the daemonset pod cannot be evicted another node will be chosen for scaling. If set to false, the node will be deleted without ensuring that daemonset pods are deleted or evicted.
* **expander**: 'least-waste' | 'most-pods' | 'priority' | 'random' | string: Available values are: 'least-waste', 'most-pods', 'priority', 'random'.
* **ignore-daemonsets-utilization**: bool: If set to true, the resources used by daemonset will be taken into account when making scaling down decisions.
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
* **customCATrustCertificates**: any[] {maxLength: 10}: A list of up to 10 base64 encoded CAs that will be added to the trust store on nodes with the Custom CA Trust feature enabled. For more information see [Custom CA Trust Certificates](https://learn.microsoft.com/en-us/azure/aks/custom-certificate-authority)
* **defender**: [ManagedClusterSecurityProfileDefender](#managedclustersecurityprofiledefender): Microsoft Defender settings for the security profile.
* **imageCleaner**: [ManagedClusterSecurityProfileImageCleaner](#managedclustersecurityprofileimagecleaner): Image Cleaner settings for the security profile.
* **imageIntegrity**: [ManagedClusterSecurityProfileImageIntegrity](#managedclustersecurityprofileimageintegrity): Image integrity is a feature that works with Azure Policy to verify image integrity by signature. This will not have any effect unless Azure Policy is applied to enforce image signatures. See https://aka.ms/aks/image-integrity for how to use this feature via policy.
* **nodeRestriction**: [ManagedClusterSecurityProfileNodeRestriction](#managedclustersecurityprofilenoderestriction): [Node Restriction](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#noderestriction) settings for the security profile.
* **workloadIdentity**: [ManagedClusterSecurityProfileWorkloadIdentity](#managedclustersecurityprofileworkloadidentity): Workload identity settings for the security profile. Workload identity enables Kubernetes applications to access Azure cloud resources securely with Azure AD. See https://aka.ms/aks/wi for more details.

## ManagedClusterSecurityProfileDefender
### Properties
* **logAnalyticsWorkspaceResourceId**: string: Resource ID of the Log Analytics workspace to be associated with Microsoft Defender. When Microsoft Defender is enabled, this field is required and must be a valid workspace resource ID. When Microsoft Defender is disabled, leave the field empty.
* **securityMonitoring**: [ManagedClusterSecurityProfileDefenderSecurityMonitoring](#managedclustersecurityprofiledefendersecuritymonitoring): Microsoft Defender threat detection for Cloud settings for the security profile.

## ManagedClusterSecurityProfileDefenderSecurityMonitoring
### Properties
* **enabled**: bool: Whether to enable Defender threat detection

## ManagedClusterSecurityProfileImageCleaner
### Properties
* **enabled**: bool: Whether to enable Image Cleaner on AKS cluster.
* **intervalHours**: int: Image Cleaner scanning interval in hours.

## ManagedClusterSecurityProfileImageIntegrity
### Properties
* **enabled**: bool: Whether to enable image integrity. The default value is false.

## ManagedClusterSecurityProfileNodeRestriction
### Properties
* **enabled**: bool: Whether to enable Node Restriction

## ManagedClusterSecurityProfileWorkloadIdentity
### Properties
* **enabled**: bool: Whether to enable workload identity.

## ManagedClusterServicePrincipalProfile
### Properties
* **clientId**: string (Required): The ID for the service principal.
* **secret**: string: The secret password associated with the service principal in plain text.

## ManagedClusterSKU
### Properties
* **name**: 'Automatic' | 'Base' | string: The name of a managed cluster SKU.
* **tier**: 'Free' | 'Premium' | 'Standard' | string: If not specified, the default is 'Free'. See [AKS Pricing Tier](https://learn.microsoft.com/azure/aks/free-standard-pricing-tiers) for more details.

## ManagedClusterSnapshotProperties
### Properties
* **creationData**: [CreationData](#creationdata): CreationData to be used to specify the source resource ID to create this snapshot.
* **managedClusterPropertiesReadOnly**: [ManagedClusterPropertiesForSnapshot](#managedclusterpropertiesforsnapshot) (ReadOnly): What the properties will be showed when getting managed cluster snapshot. Those properties are read-only.
* **snapshotType**: 'ManagedCluster' | 'NodePool' | string: The type of a snapshot. The default is NodePool.

## ManagedClusterStaticEgressGatewayProfile
### Properties
* **enabled**: bool: Indicates if Static Egress Gateway addon is enabled or not.

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
* **addonAutoscaling**: 'Disabled' | 'Enabled' | string: Whether VPA add-on is enabled and configured to scale AKS-managed add-ons.
* **enabled**: bool (Required): Whether to enable VPA add-on in cluster. Default value is false.

## ManagedServiceIdentityUserAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## ManualScaleProfile
### Properties
* **count**: int: Number of nodes.
* **sizes**: string[]: The list of allowed vm sizes e.g. ['Standard_E4s_v3', 'Standard_E16s_v3', 'Standard_D16s_v5']. AKS will use the first available one when scaling. If a VM size is unavailable (e.g. due to quota or regional capacity reasons), AKS will use the next size.

## MeshRevision
### Properties
* **compatibleWith**: [CompatibleVersions](#compatibleversions)[]: List of items this revision of service mesh is compatible with, and their associated versions.
* **revision**: string: The revision of the mesh release.
* **upgrades**: string[]: List of revisions available for upgrade of a specific mesh revision

## MeshRevisionProfileProperties
### Properties
* **meshRevisions**: [MeshRevision](#meshrevision)[]

## MeshUpgradeProfileProperties
### Properties
* **compatibleWith**: [CompatibleVersions](#compatibleversions)[]: List of items this revision of service mesh is compatible with, and their associated versions.
* **revision**: string: The revision of the mesh release.
* **upgrades**: string[]: List of revisions available for upgrade of a specific mesh revision

## NetworkProfileForSnapshot
### Properties
* **loadBalancerSku**: 'basic' | 'standard' | string: loadBalancerSku for managed cluster snapshot.
* **networkMode**: 'bridge' | 'transparent' | string: networkMode for managed cluster snapshot.
* **networkPlugin**: 'azure' | 'kubenet' | 'none' | string: networkPlugin for managed cluster snapshot.
* **networkPluginMode**: 'overlay' | string: NetworkPluginMode for managed cluster snapshot.
* **networkPolicy**: 'azure' | 'calico' | 'cilium' | 'none' | string: networkPolicy for managed cluster snapshot.

## PortRange
### Properties
* **portEnd**: int {minValue: 1, maxValue: 65535}: The maximum port that is included in the range. It should be ranged from 1 to 65535, and be greater than or equal to portStart.
* **portStart**: int {minValue: 1, maxValue: 65535}: The minimum port that is included in the range. It should be ranged from 1 to 65535, and be less than or equal to portEnd.
* **protocol**: 'TCP' | 'UDP' | string: The network protocol of the port.

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
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The current provisioning state.

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

## RelativeMonthlySchedule
### Properties
* **dayOfWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string (Required): Specifies on which day of the week the maintenance occurs.
* **intervalMonths**: int {minValue: 1, maxValue: 6} (Required): Specifies the number of months between each set of occurrences.
* **weekIndex**: 'First' | 'Fourth' | 'Last' | 'Second' | 'Third' | string (Required): Specifies on which instance of the allowed days specified in daysOfWeek the maintenance occurs.

## ResourceReference
### Properties
* **id**: string: The fully qualified Azure resource id.

## SafeguardsAvailableVersionsProperties
### Properties
* **isDefaultVersion**: bool (ReadOnly)
* **support**: 'Preview' | 'Stable' | string (ReadOnly): Whether the version is preview or stable.

## SafeguardsProfile
### Properties
* **excludedNamespaces**: string[]: List of namespaces excluded from Safeguards checks
* **level**: 'Enforcement' | 'Off' | 'Warning' | string (Required): The Safeguards level to be used. By default, Safeguards is enabled for all namespaces except those that AKS excludes via systemExcludedNamespaces
* **systemExcludedNamespaces**: string[] (ReadOnly): List of namespaces specified by AKS to be excluded from Safeguards
* **version**: string: The version of constraints to use

## ScaleProfile
### Properties
* **autoscale**: [AutoScaleProfile](#autoscaleprofile)[]: Specifications on how to auto-scale the VirtualMachines agent pool within a predefined size range. Currently, at most one AutoScaleProfile is allowed.
* **manual**: [ManualScaleProfile](#manualscaleprofile)[]: Specifications on how to scale the VirtualMachines agent pool to a fixed size.

## Schedule
### Properties
* **absoluteMonthly**: [AbsoluteMonthlySchedule](#absolutemonthlyschedule): For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'.
* **daily**: [DailySchedule](#dailyschedule): For schedules like: 'recur every day' or 'recur every 3 days'.
* **relativeMonthly**: [RelativeMonthlySchedule](#relativemonthlyschedule): For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
* **weekly**: [WeeklySchedule](#weeklyschedule): For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.

## ServiceMeshProfile
### Properties
* **istio**: [IstioServiceMesh](#istioservicemesh): Istio service mesh configuration.
* **mode**: 'Disabled' | 'Istio' | string (Required): Mode of the service mesh.

## SnapshotProperties
### Properties
* **creationData**: [CreationData](#creationdata): CreationData to be used to specify the source agent pool resource ID to create this snapshot.
* **enableFIPS**: bool (ReadOnly): Whether to use a FIPS-enabled OS.
* **kubernetesVersion**: string (ReadOnly): The version of Kubernetes.
* **nodeImageVersion**: string (ReadOnly): The version of node image.
* **osSku**: 'AzureLinux' | 'CBLMariner' | 'Mariner' | 'Ubuntu' | 'Windows2019' | 'Windows2022' | 'WindowsAnnual' | string (ReadOnly): Specifies the OS SKU used by the agent pool. If not specified, the default is Ubuntu if OSType=Linux or Windows2019 if OSType=Windows. And the default Windows OSSKU will be changed to Windows2022 after Windows2019 is deprecated.
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
* **netIpv4TcpkeepaliveIntvl**: int {minValue: 10, maxValue: 90}: Sysctl setting net.ipv4.tcp_keepalive_intvl.
* **netIpv4TcpKeepaliveProbes**: int: Sysctl setting net.ipv4.tcp_keepalive_probes.
* **netIpv4TcpKeepaliveTime**: int: Sysctl setting net.ipv4.tcp_keepalive_time.
* **netIpv4TcpMaxSynBacklog**: int: Sysctl setting net.ipv4.tcp_max_syn_backlog.
* **netIpv4TcpMaxTwBuckets**: int: Sysctl setting net.ipv4.tcp_max_tw_buckets.
* **netIpv4TcpTwReuse**: bool: Sysctl setting net.ipv4.tcp_tw_reuse.
* **netNetfilterNfConntrackBuckets**: int {minValue: 65536, maxValue: 524288}: Sysctl setting net.netfilter.nf_conntrack_buckets.
* **netNetfilterNfConntrackMax**: int {minValue: 131072, maxValue: 2097152}: Sysctl setting net.netfilter.nf_conntrack_max.
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
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state of trusted access role binding.
* **roles**: string[] (Required): A list of roles to bind, each item is a resource type qualified role name. For example: 'Microsoft.MachineLearningServices/workspaces/reader'.
* **sourceResourceId**: string (Required): The ARM resource ID of source resource that trusted access is configured for.

## UpgradeOverrideSettings
### Properties
* **forceUpgrade**: bool: Whether to force upgrade the cluster. Note that this option instructs upgrade operation to bypass upgrade protections such as checking for deprecated API usage. Enable this option only with caution.
* **until**: string: Until when the overrides are effective. Note that this only matches the start time of an upgrade, and the effectiveness won't change once an upgrade starts even if the `until` expires as upgrade proceeds. This field is not set by default. It must be set for the overrides to take effect.

## UserAssignedIdentity
### Properties
* **clientId**: string: The client ID of the user assigned identity.
* **objectId**: string: The object ID of the user assigned identity.
* **resourceId**: string: The resource ID of the user assigned identity.

## VirtualMachineNodes
### Properties
* **count**: int: Number of nodes.
* **size**: string: The VM size of the agents used to host this group of nodes.

## VirtualMachinesProfile
### Properties
* **scale**: [ScaleProfile](#scaleprofile): Specifications on how to scale a VirtualMachines agent pool.

## WeeklySchedule
### Properties
* **dayOfWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string (Required): Specifies on which day of the week the maintenance occurs.
* **intervalWeeks**: int {minValue: 1, maxValue: 4} (Required): Specifies the number of weeks between each set of occurrences.

## WindowsGmsaProfile
### Properties
* **dnsServer**: string: Specifies the DNS server for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
* **enabled**: bool: Specifies whether to enable Windows gMSA in the managed cluster.
* **rootDomainName**: string: Specifies the root domain name for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.

