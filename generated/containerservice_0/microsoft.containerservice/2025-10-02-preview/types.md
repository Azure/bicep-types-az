# Microsoft.ContainerService @ 2025-10-02-preview

## Resource Microsoft.ContainerService/locations/guardrailsVersions@2025-10-02-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-10-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 24} (Required, DeployTimeConstant): The resource name
* **properties**: [GuardrailsAvailableVersionsProperties](#guardrailsavailableversionsproperties) (ReadOnly): Whether the version is default or not and support info.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/locations/guardrailsVersions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/locations/meshRevisionProfiles@2025-10-02-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-10-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 24, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-_a-zA-Z0-9]{0,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MeshRevisionProfileProperties](#meshrevisionprofileproperties) (ReadOnly): Mesh revision profile properties for a mesh
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/locations/meshRevisionProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/locations/safeguardsVersions@2025-10-02-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-10-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 24} (Required, DeployTimeConstant): The resource name
* **properties**: [SafeguardsAvailableVersionsProperties](#safeguardsavailableversionsproperties) (ReadOnly): Whether the version is default or not and support info.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/locations/safeguardsVersions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters@2025-10-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-10-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
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

## Resource Microsoft.ContainerService/managedClusters/agentPools@2025-10-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-10-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 12, pattern: "^[a-z][a-z0-9]{0,11}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedClusterAgentPoolProfileProperties](#managedclusteragentpoolprofileproperties): Properties of an agent pool.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/managedClusters/agentPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/agentPools/machines@2025-10-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-10-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-z][a-z0-9]{0,11}$|^[a-zA-Z0-9][-_a-zA-Z0-9]{0,39}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MachineProperties](#machineproperties): The properties of the machine
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/managedClusters/agentPools/machines' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[] (ReadOnly): The Availability zone in which machine is located.

## Resource Microsoft.ContainerService/managedClusters/agentPools/upgradeProfiles@2025-10-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-10-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [AgentPoolUpgradeProfileProperties](#agentpoolupgradeprofileproperties) (ReadOnly): The properties of the agent pool upgrade profile.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/managedClusters/agentPools/upgradeProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/identityBindings@2025-10-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-10-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-z][a-z0-9]{0,63}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [IdentityBindingProperties](#identitybindingproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/managedClusters/identityBindings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/jwtAuthenticators@2025-10-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-10-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 24, pattern: "^[a-z][a-z0-9]{0,23}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [JWTAuthenticatorProperties](#jwtauthenticatorproperties) (Required): The properties of JWTAuthenticator. For details on how to configure the properties of a JWT authenticator, please refer to the Kubernetes documentation: https://kubernetes.io/docs/reference/access-authn-authz/authentication/#using-authentication-configuration. Please note that not all fields available in the Kubernetes documentation are supported by AKS. For troubleshooting, please see https://aka.ms/aks-external-issuers-docs.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/managedClusters/jwtAuthenticators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/loadBalancers@2025-10-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-10-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 12, pattern: "^[a-z][a-z0-9]{0,11}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [LoadBalancerProperties](#loadbalancerproperties): The properties of the load balancer.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/managedClusters/loadBalancers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/maintenanceConfigurations@2025-10-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-10-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MaintenanceConfigurationProperties](#maintenanceconfigurationproperties): Properties of a default maintenance configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/managedClusters/maintenanceConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/managedNamespaces@2025-10-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-10-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 63, pattern: "[a-z0-9]([-a-z0-9]*[a-z0-9])?"} (Required, DeployTimeConstant): The resource name
* **properties**: [NamespaceProperties](#namespaceproperties): Properties of a namespace.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ManagedNamespaceTags](#managednamespacetags): Resource tags.
* **type**: 'Microsoft.ContainerService/managedClusters/managedNamespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/meshMemberships@2025-10-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-10-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **managedBy**: string: The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-zA-Z][a-zA-Z0-9]{0,62}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MeshMembershipProperties](#meshmembershipproperties): Mesh membership properties of a managed cluster.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/managedClusters/meshMemberships' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/meshUpgradeProfiles@2025-10-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-10-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 24, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-_a-zA-Z0-9]{0,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MeshUpgradeProfileProperties](#meshupgradeprofileproperties) (ReadOnly): Mesh upgrade profile properties for a major.minor release.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/managedClusters/meshUpgradeProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/privateEndpointConnections@2025-10-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-10-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): The properties of a private endpoint connection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/managedClusters/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/trustedAccessRoleBindings@2025-10-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-10-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 24, pattern: "^([A-Za-z0-9-])+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TrustedAccessRoleBindingProperties](#trustedaccessrolebindingproperties) (Required): Properties for trusted access role binding
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/managedClusters/trustedAccessRoleBindings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedClusters/upgradeProfiles@2025-10-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-10-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedClusterUpgradeProfileProperties](#managedclusterupgradeprofileproperties) (ReadOnly): The properties of the upgrade profile.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/managedClusters/upgradeProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/managedclustersnapshots@2025-10-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-10-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-_a-zA-Z0-9]{0,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedClusterSnapshotProperties](#managedclustersnapshotproperties): Properties of a managed cluster snapshot.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ContainerService/managedclustersnapshots' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/snapshots@2025-10-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-10-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-_a-zA-Z0-9]{0,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SnapshotProperties](#snapshotproperties): Properties of a snapshot.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ContainerService/snapshots' (ReadOnly, DeployTimeConstant): The resource type

## Function listClusterAdminCredential (Microsoft.ContainerService/managedClusters@2025-10-02-preview)
* **Resource**: Microsoft.ContainerService/managedClusters
* **ApiVersion**: 2025-10-02-preview
* **Output**: [CredentialResults](#credentialresults)

## Function listClusterMonitoringUserCredential (Microsoft.ContainerService/managedClusters@2025-10-02-preview)
* **Resource**: Microsoft.ContainerService/managedClusters
* **ApiVersion**: 2025-10-02-preview
* **Output**: [CredentialResults](#credentialresults)

## Function listClusterUserCredential (Microsoft.ContainerService/managedClusters@2025-10-02-preview)
* **Resource**: Microsoft.ContainerService/managedClusters
* **ApiVersion**: 2025-10-02-preview
* **Output**: [CredentialResults](#credentialresults)

## Function listCredential (Microsoft.ContainerService/managedClusters/accessProfiles@2025-10-02-preview)
* **Resource**: Microsoft.ContainerService/managedClusters/accessProfiles
* **ApiVersion**: 2025-10-02-preview
* **Output**: [ManagedClusterAccessProfile](#managedclusteraccessprofile)

## Function listCredential (Microsoft.ContainerService/managedClusters/managedNamespaces@2025-10-02-preview)
* **Resource**: Microsoft.ContainerService/managedClusters/managedNamespaces
* **ApiVersion**: 2025-10-02-preview
* **Output**: [CredentialResults](#credentialresults)

## AbsoluteMonthlySchedule
### Properties
* **dayOfMonth**: int {minValue: 1, maxValue: 31} (Required): The date of the month.
* **intervalMonths**: int {minValue: 1, maxValue: 6} (Required): Specifies the number of months between each set of occurrences.

## AccessProfile
### Properties
* **kubeConfig**: any: Base64-encoded Kubernetes configuration file.

## AdvancedNetworking
### Properties
* **enabled**: bool: Indicates the enablement of Advanced Networking functionalities of observability and security on AKS clusters. When this is set to true, all observability and security features will be set to enabled unless explicitly disabled. If not specified, the default is false.
* **observability**: [AdvancedNetworkingObservability](#advancednetworkingobservability): Observability profile to enable advanced network metrics and flow logs with historical contexts.
* **performance**: [AdvancedNetworkingPerformance](#advancednetworkingperformance): Profile to enable performance-enhancing features on clusters that use Azure CNI powered by Cilium.
* **security**: [AdvancedNetworkingSecurity](#advancednetworkingsecurity): Security profile to enable security features on cilium based cluster.

## AdvancedNetworkingObservability
### Properties
* **enabled**: bool: Indicates the enablement of Advanced Networking observability functionalities on clusters.

## AdvancedNetworkingPerformance
### Properties
* **accelerationMode**: 'BpfVeth' | 'None' | string: Enable advanced network acceleration options. This allows users to configure acceleration using BPF host routing. This can be enabled only with Cilium dataplane. If not specified, the default value is None (no acceleration). The acceleration mode can be changed on a pre-existing cluster. See https://aka.ms/acnsperformance for a detailed explanation

## AdvancedNetworkingSecurity
### Properties
* **advancedNetworkPolicies**: 'FQDN' | 'L7' | 'None' | string: Enable advanced network policies. This allows users to configure Layer 7 network policies (FQDN, HTTP, Kafka). Policies themselves must be configured via the Cilium Network Policy resources, see https://docs.cilium.io/en/latest/security/policy/index.html. This can be enabled only on cilium-based clusters. If not specified, the default value is FQDN if security.enabled is set to true.
* **enabled**: bool: This feature allows user to configure network policy based on DNS (FQDN) names. It can be enabled only on cilium based clusters. If not specified, the default is false.
* **transitEncryption**: [AdvancedNetworkingSecurityTransitEncryption](#advancednetworkingsecuritytransitencryption): Encryption configuration for Cilium-based clusters. Once enabled all traffic between Cilium managed pods will be encrypted when it leaves the node boundary.

## AdvancedNetworkingSecurityTransitEncryption
### Properties
* **type**: 'None' | 'WireGuard' | string: Configures pod-to-pod encryption. This can be enabled only on Cilium-based clusters. If not specified, the default value is None.

## AgentPoolArtifactStreamingProfile
### Properties
* **enabled**: bool: Artifact streaming speeds up the cold-start of containers on a node through on-demand image loading. To use this feature, container images must also enable artifact streaming on ACR. If not specified, the default is false.

## AgentPoolBlueGreenUpgradeSettings
### Properties
* **batchSoakDurationInMinutes**: int {minValue: 0, maxValue: 1440}: The soak duration after draining a batch of nodes, i.e., the amount of time (in minutes) to wait after draining a batch of nodes before moving on the next batch. If not specified, the default is 15 minutes.
* **drainBatchSize**: string: The number or percentage of nodes to drain in batch during blue-green upgrade. Must be a non-zero number. This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total number of blue nodes of the initial upgrade operation. For percentages, fractional nodes are rounded up. If not specified, the default is 10%. For more information, including best practices, see: https://learn.microsoft.com/en-us/azure/aks/upgrade-cluster
* **drainTimeoutInMinutes**: int {minValue: 1, maxValue: 1440}: The drain timeout for a node, i.e., the amount of time (in minutes) to wait on eviction of pods and graceful termination per node. This eviction wait time honors waiting on pod disruption budgets. If this time is exceeded, the upgrade fails. If not specified, the default is 30 minutes.
* **finalSoakDurationInMinutes**: int {minValue: 0, maxValue: 10080}: The soak duration for a node pool, i.e., the amount of time (in minutes) to wait after all old nodes are drained before we remove the old nodes. If not specified, the default is 60 minutes. Only applicable for blue-green upgrade strategy.

## AgentPoolGatewayProfile
### Properties
* **publicIPPrefixSize**: int {minValue: 28, maxValue: 31}: The Gateway agent pool associates one public IPPrefix for each static egress gateway to provide public egress. The size of Public IPPrefix should be selected by the user. Each node in the agent pool is assigned with one IP from the IPPrefix. The IPPrefix size thus serves as a cap on the size of the Gateway agent pool. Due to Azure public IPPrefix size limitation, the valid value range is [28, 31] (/31 = 2 nodes/IPs, /30 = 4 nodes/IPs, /29 = 8 nodes/IPs, /28 = 16 nodes/IPs). The default value is 31.

## AgentPoolNetworkProfile
### Properties
* **allowedHostPorts**: [PortRange](#portrange)[]: The port ranges that are allowed to access. The specified ranges are allowed to overlap.
* **applicationSecurityGroups**: string[]: The IDs of the application security groups which agent pool will associate when created.
* **nodePublicIPTags**: [IPTag](#iptag)[]: IPTags of instance-level public IPs.

## AgentPoolRecentlyUsedVersion
### Properties
* **nodeImageVersion**: string: The node image version available for rollback.
* **orchestratorVersion**: string: The Kubernetes version (major.minor.patch) available for rollback.
* **timestamp**: string: The timestamp when this version was last used.

## AgentPoolSecurityProfile
### Properties
* **enableSecureBoot**: bool: Secure Boot is a feature of Trusted Launch which ensures that only signed operating systems and drivers can boot. For more details, see aka.ms/aks/trustedlaunch.  If not specified, the default is false.
* **enableVTPM**: bool: vTPM is a Trusted Launch feature for configuring a dedicated secure vault for keys and measurements held locally on the node. For more details, see aka.ms/aks/trustedlaunch. If not specified, the default is false.
* **sshAccess**: 'Disabled' | 'EntraId' | 'LocalUser' | string: SSH access method of an agent pool.

## AgentPoolStatus
### Properties
* **provisioningError**: [ErrorDetail](#errordetail) (ReadOnly): The error detail information of the agent pool. Preserves the detailed info of failure. If there was no error, this field is omitted.

## AgentPoolUpgradeProfileProperties
### Properties
* **componentsByReleases**: [ComponentsByRelease](#componentsbyrelease)[]: List of components grouped by kubernetes major.minor version.
* **kubernetesVersion**: string (Required): The Kubernetes version (major.minor.patch).
* **latestNodeImageVersion**: string: The latest AKS supported node image version.
* **osType**: 'Linux' | 'Windows' | string (Required): The operating system type. The default is Linux.
* **recentlyUsedVersions**: [AgentPoolRecentlyUsedVersion](#agentpoolrecentlyusedversion)[] (ReadOnly): List of historical good versions for rollback operations.
* **upgrades**: [AgentPoolUpgradeProfilePropertiesUpgradesItem](#agentpoolupgradeprofilepropertiesupgradesitem)[]: List of orchestrator types and versions available for upgrade.

## AgentPoolUpgradeProfilePropertiesUpgradesItem
### Properties
* **isOutOfSupport**: bool: Whether the Kubernetes version is out of support.
* **isPreview**: bool: Whether the Kubernetes version is currently in preview.
* **kubernetesVersion**: string: The Kubernetes version (major.minor.patch).

## AgentPoolUpgradeSettings
### Properties
* **drainTimeoutInMinutes**: int {minValue: 1, maxValue: 1440}: The drain timeout for a node. The amount of time (in minutes) to wait on eviction of pods and graceful termination per node. This eviction wait time honors waiting on pod disruption budgets. If this time is exceeded, the upgrade fails. If not specified, the default is 30 minutes.
* **maxBlockedNodes**: string: The maximum number or percentage of extra nodes that are allowed to be blocked in the agent pool during an upgrade when undrainable node behavior is Cordon. This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is maxSurge. This must always be greater than or equal to maxSurge. For more information, including best practices, see: https://learn.microsoft.com/en-us/azure/aks/upgrade-cluster
* **maxSurge**: string: The maximum number or percentage of nodes that are surged during upgrade. This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 10%. For more information, including best practices, see: https://learn.microsoft.com/en-us/azure/aks/upgrade-cluster
* **maxUnavailable**: string: The maximum number or percentage of nodes that can be simultaneously unavailable during upgrade. This can either be set to an integer (e.g. '1') or a percentage (e.g. '5%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 0. For more information, including best practices, see: https://learn.microsoft.com/en-us/azure/aks/upgrade-cluster
* **nodeSoakDurationInMinutes**: int {minValue: 0, maxValue: 30}: The soak duration for a node. The amount of time (in minutes) to wait after draining a node and before reimaging it and moving on to next node. If not specified, the default is 0 minutes.
* **undrainableNodeBehavior**: 'Cordon' | 'Schedule' | string: Defines the behavior for undrainable nodes during upgrade. The most common cause of undrainable nodes is Pod Disruption Budgets (PDBs), but other issues, such as pod termination grace period is exceeding the remaining per-node drain timeout or pod is still being in a running state, can also cause undrainable nodes.

## AgentPoolWindowsProfile
### Properties
* **disableOutboundNat**: bool: Whether to disable OutboundNAT in windows nodes. The default value is false. Outbound NAT can only be disabled if the cluster outboundType is NAT Gateway and the Windows agent pool does not have node public IP enabled.

## AutoScaleProfile
### Properties
* **maxCount**: int: The maximum number of nodes of the specified sizes.
* **minCount**: int: The minimum number of nodes of the specified sizes.
* **size**: string: VM size that AKS will use when creating and scaling e.g. 'Standard_E4s_v3', 'Standard_E16s_v3' or 'Standard_D16s_v5'.

## AzureKeyVaultKms
### Properties
* **enabled**: bool: Whether to enable Azure Key Vault key management service. The default is false.
* **keyId**: string: Identifier of Azure Key Vault key. See [key identifier format](https://docs.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates#vault-name-and-object-name) for more details. When Azure Key Vault key management service is enabled, this field is required and must be a valid key identifier. When Azure Key Vault key management service is disabled, leave the field empty.
* **keyVaultNetworkAccess**: 'Private' | 'Public' | string: Network access of the key vault. Network access of key vault. The possible values are `Public` and `Private`. `Public` means the key vault allows public access from all networks. `Private` means the key vault disables public access and enables private link. The default value is `Public`.
* **keyVaultResourceId**: string: Resource ID of key vault. When keyVaultNetworkAccess is `Private`, this field is required and must be a valid resource ID. When keyVaultNetworkAccess is `Public`, leave the field empty.

## ClusterUpgradeSettings
### Properties
* **overrideSettings**: [UpgradeOverrideSettings](#upgradeoverridesettings): Settings for overrides.

## CompatibleVersions
### Properties
* **name**: string: The product/service name.
* **versions**: string[]: Product/service versions compatible with a service mesh add-on revision.

## Component
### Properties
* **hasBreakingChanges**: bool: If upgraded component version contains breaking changes from the current version. To see a detailed description of what the breaking changes are, visit https://learn.microsoft.com/azure/aks/supported-kubernetes-versions?tabs=azure-cli#aks-components-breaking-changes-by-version.
* **name**: string: Component name.
* **version**: string: Component version.

## ComponentsByRelease
### Properties
* **components**: [Component](#component)[]: components of current or upgraded Kubernetes version in the cluster.
* **kubernetesVersion**: string: The Kubernetes version (major.minor).

## ContainerServiceLinuxProfile
### Properties
* **adminUsername**: string {pattern: "^[A-Za-z][-A-Za-z0-9_]*$"} (Required): The administrator username to use for Linux VMs.
* **ssh**: [ContainerServiceSshConfiguration](#containerservicesshconfiguration) (Required): The SSH configuration for Linux-based VMs running on Azure.

## ContainerServiceNetworkProfile
### Properties
* **advancedNetworking**: [AdvancedNetworking](#advancednetworking): Advanced Networking profile for enabling observability and security feature suite on a cluster. For more information see aka.ms/aksadvancednetworking.
* **dnsServiceIP**: string {pattern: "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"}: An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
* **ipFamilies**: ('IPv4' | 'IPv6' | string)[]: The IP families used to specify IP versions available to the cluster. IP families are used to determine single-stack or dual-stack clusters. For single-stack, the expected value is IPv4. For dual-stack, the expected values are IPv4 and IPv6.
* **kubeProxyConfig**: [ContainerServiceNetworkProfileKubeProxyConfig](#containerservicenetworkprofilekubeproxyconfig): Holds configuration customizations for kube-proxy. Any values not defined will use the kube-proxy defaulting behavior. See https://v<version>.docs.kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/ where <version> is represented by a <major version>-<minor version> string. Kubernetes version 1.23 would be '1-23'.
* **loadBalancerProfile**: [ManagedClusterLoadBalancerProfile](#managedclusterloadbalancerprofile): Profile of the cluster load balancer.
* **loadBalancerSku**: 'basic' | 'standard' | string: The load balancer sku for the managed cluster. The default is 'standard'. See [Azure Load Balancer SKUs](https://docs.microsoft.com/azure/load-balancer/skus) for more information about the differences between load balancer SKUs.
* **natGatewayProfile**: [ManagedClusterNATGatewayProfile](#managedclusternatgatewayprofile): Profile of the cluster NAT gateway.
* **networkDataplane**: 'azure' | 'cilium' | string: Network dataplane used in the Kubernetes cluster.
* **networkMode**: 'bridge' | 'transparent' | string: The network mode Azure CNI is configured with. This cannot be specified if networkPlugin is anything other than 'azure'.
* **networkPlugin**: 'azure' | 'kubenet' | 'none' | string: Network plugin used for building the Kubernetes network.
* **networkPluginMode**: 'overlay' | string: The mode the network plugin should use.
* **networkPolicy**: 'azure' | 'calico' | 'cilium' | 'none' | string: Network policy used for building the Kubernetes network.
* **outboundType**: 'loadBalancer' | 'managedNATGateway' | 'none' | 'userAssignedNATGateway' | 'userDefinedRouting' | string: The outbound (egress) routing method. This can only be set at cluster creation time and cannot be changed later. For more information see [egress outbound type](https://docs.microsoft.com/azure/aks/egress-outboundtype).
* **podCidr**: string {pattern: "^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$"}: A CIDR notation IP range from which to assign pod IPs when kubenet is used.
* **podCidrs**: string[]: The CIDR notation IP ranges from which to assign pod IPs. One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
* **podLinkLocalAccess**: 'IMDS' | 'None' | string: Defines access to special link local addresses (Azure Instance Metadata Service, aka IMDS) for pods with hostNetwork=false. if not specified, the default is 'IMDS'.
* **serviceCidr**: string {pattern: "^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$"}: A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
* **serviceCidrs**: string[]: The CIDR notation IP ranges from which to assign service cluster IPs. One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. They must not overlap with any Subnet IP ranges.
* **staticEgressGatewayProfile**: [ManagedClusterStaticEgressGatewayProfile](#managedclusterstaticegressgatewayprofile): The profile for Static Egress Gateway addon. For more details about Static Egress Gateway, see https://aka.ms/aks/static-egress-gateway.

## ContainerServiceNetworkProfileKubeProxyConfig
### Properties
* **enabled**: bool: Whether to enable on kube-proxy on the cluster (if no 'kubeProxyConfig' exists, kube-proxy is enabled in AKS by default without these customizations).
* **ipvsConfig**: [ContainerServiceNetworkProfileKubeProxyConfigIpvsConfig](#containerservicenetworkprofilekubeproxyconfigipvsconfig): Holds configuration customizations for IPVS. May only be specified if 'mode' is set to 'IPVS'.
* **mode**: 'IPTABLES' | 'IPVS' | 'NFTABLES' | string: Specify which proxy mode to use ('IPTABLES', 'IPVS' or 'NFTABLES')

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

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): The additional info.
* **type**: string (ReadOnly): The additional info type.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## ExtendedLocation
### Properties
* **name**: string: The name of the extended location.
* **type**: 'EdgeZone' | string: The type of the extended location.

## GPUProfile
### Properties
* **driver**: 'Install' | 'None' | string: Whether to install GPU drivers. When it's not specified, default is Install.
* **driverType**: 'CUDA' | 'GRID' | string: Specify the type of GPU driver to install when creating Windows agent pools. If not provided, AKS selects the driver based on system compatibility. This cannot be changed once the AgentPool has been created. This cannot be set on Linux AgentPools. For Linux AgentPools, the driver is selected based on system compatibility.

## GuardrailsAvailableVersionsProperties
### Properties
* **isDefaultVersion**: bool (ReadOnly): Whether this is the default version.
* **support**: 'Preview' | 'Stable' | string (ReadOnly): Whether the version is preview or stable.

## IdentityBindingManagedIdentityProfile
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the managed identity.
* **objectId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"} (ReadOnly): The object ID of the managed identity.
* **resourceId**: string (Required): The resource ID of the managed identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the managed identity.

## IdentityBindingOidcIssuerProfile
### Properties
* **oidcIssuerUrl**: string (ReadOnly): The OIDC issuer URL of the IdentityBinding.

## IdentityBindingProperties
### Properties
* **managedIdentity**: [IdentityBindingManagedIdentityProfile](#identitybindingmanagedidentityprofile) (Required): Managed identity profile for the identity binding.
* **oidcIssuer**: [IdentityBindingOidcIssuerProfile](#identitybindingoidcissuerprofile) (ReadOnly): The OIDC issuer URL of the IdentityBinding.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

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
* **proxyRedirectionMechanism**: 'CNIChaining' | 'InitContainers' | string: Mode of traffic redirection.

## IstioEgressGateway
### Properties
* **enabled**: bool (Required): Whether to enable the egress gateway.
* **gatewayConfigurationName**: string: Name of the gateway configuration custom resource for the Istio add-on egress gateway. Must be specified when enabling the Istio egress gateway. Must be deployed in the same namespace that the Istio egress gateway will be deployed in.
* **name**: string {pattern: "[a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"} (Required): Name of the Istio add-on egress gateway.
* **namespace**: string: Namespace that the Istio add-on egress gateway should be deployed in. If unspecified, the default is aks-istio-egress.

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

## JWTAuthenticatorClaimMappingExpression
### Properties
* **expression**: string (Required): The CEL expression used to access token claims.

## JWTAuthenticatorClaimMappings
### Properties
* **extra**: [JWTAuthenticatorExtraClaimMappingExpression](#jwtauthenticatorextraclaimmappingexpression)[]: The expression to extract extra attribute from the token claims. When not provided, no extra attributes are extracted from the token claims.
* **groups**: [JWTAuthenticatorClaimMappingExpression](#jwtauthenticatorclaimmappingexpression): The expression to extract groups attribute from the token claims. When not provided, no groups are extracted from the token claims.
* **uid**: [JWTAuthenticatorClaimMappingExpression](#jwtauthenticatorclaimmappingexpression): The expression to extract uid attribute from the token claims. When not provided, no uid is extracted from the token claims.
* **username**: [JWTAuthenticatorClaimMappingExpression](#jwtauthenticatorclaimmappingexpression) (Required): The expression to extract username attribute from the token claims.

## JWTAuthenticatorExtraClaimMappingExpression
### Properties
* **key**: string (Required): The key of the extra attribute.
* **valueExpression**: string (Required): The CEL expression used to extract the value of the extra attribute.

## JWTAuthenticatorIssuer
### Properties
* **audiences**: string[] {minLength: 1} (Required): The set of acceptable audiences the JWT must be issued to. At least one is required. When multiple is set, AudienceMatchPolicy is used in API Server configuration.
* **url**: string (Required): The issuer URL. The URL must begin with the scheme https and cannot contain a query string or fragment. This must match the "iss" claim in the presented JWT, and the issuer returned from discovery.

## JWTAuthenticatorProperties
### Properties
* **claimMappings**: [JWTAuthenticatorClaimMappings](#jwtauthenticatorclaimmappings) (Required): The mappings that define how user attributes are extracted from the token claims.
* **claimValidationRules**: [JWTAuthenticatorValidationRule](#jwtauthenticatorvalidationrule)[]: The rules that are applied to validate token claims to authenticate users. All the expressions must evaluate to true for validation to succeed.
* **issuer**: [JWTAuthenticatorIssuer](#jwtauthenticatorissuer) (Required): The JWT OIDC issuer details.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state of the JWT authenticator.
* **userValidationRules**: [JWTAuthenticatorValidationRule](#jwtauthenticatorvalidationrule)[]: The rules that are applied to the mapped user before completing authentication. All the expressions must evaluate to true for validation to succeed.

## JWTAuthenticatorValidationRule
### Properties
* **expression**: string (Required): The CEL expression used to validate the claim or attribute.
* **message**: string: The validation error message.

## KubeletConfig
### Properties
* **allowedUnsafeSysctls**: string[]: Allowed list of unsafe sysctls or unsafe sysctl patterns (ending in `*`).
* **containerLogMaxFiles**: int {minValue: 2}: The maximum number of container log files that can be present for a container. The number must be ≥ 2.
* **containerLogMaxSizeMB**: int: The maximum size (e.g. 10Mi) of container log file before it is rotated.
* **cpuCfsQuota**: bool: If CPU CFS quota enforcement is enabled for containers that specify CPU limits. The default is true.
* **cpuCfsQuotaPeriod**: string: The CPU CFS quota period value. The default is '100ms.' Valid values are a sequence of decimal numbers with an optional fraction and a unit suffix. For example: '300ms', '2h45m'. Supported units are 'ns', 'us', 'ms', 's', 'm', and 'h'.
* **cpuManagerPolicy**: string: The CPU Manager policy to use. The default is 'none'. See [Kubernetes CPU management policies](https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/#cpu-management-policies) for more information. Allowed values are 'none' and 'static'.
* **failSwapOn**: bool: If set to true it will make the Kubelet fail to start if swap is enabled on the node.
* **imageGcHighThreshold**: int: The percent of disk usage after which image garbage collection is always run. To disable image garbage collection, set to 100. The default is 85%
* **imageGcLowThreshold**: int: The percent of disk usage before which image garbage collection is never run. This cannot be set higher than imageGcHighThreshold. The default is 80%
* **podMaxPids**: int: The maximum number of processes per pod.
* **seccompDefault**: 'RuntimeDefault' | 'Unconfined' | string: Specifies the default seccomp profile applied to all workloads. If not specified, 'Unconfined' will be used by default.
* **topologyManagerPolicy**: string: The Topology Manager policy to use. For more information see [Kubernetes Topology Manager](https://kubernetes.io/docs/tasks/administer-cluster/topology-manager). The default is 'none'. Allowed values are 'none', 'best-effort', 'restricted', and 'single-numa-node'.

## KubernetesResourceObjectEncryptionProfile
### Properties
* **infrastructureEncryption**: 'Disabled' | 'Enabled' | string: Whether to enable encryption at rest of Kubernetes resource objects using service-managed keys. More information on this can be found under https://aka.ms/aks/kubernetesResourceObjectEncryption.

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
* **transparentHugePageDefrag**: string: Whether the kernel should make aggressive use of memory compaction to make more hugepages available. Valid values are 'always', 'defer', 'defer+madvise', 'madvise' and 'never'. The default is 'madvise'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
* **transparentHugePageEnabled**: string: Whether transparent hugepages are enabled. Valid values are 'always', 'madvise', and 'never'. The default is 'always'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).

## LoadBalancerProperties
### Properties
* **allowServicePlacement**: bool: Whether to automatically place services on the load balancer. If not supplied, the default value is true. If set to false manually, both of the external and the internal load balancer will not be selected for services unless they explicitly target it.
* **nodeSelector**: [LabelSelector](#labelselector): Nodes that match this selector will be possible members of this load balancer.
* **primaryAgentPoolName**: string (Required): Required field. A string value that must specify the ID of an existing agent pool. All nodes in the given pool will always be added to this load balancer. This agent pool must have at least one node and minCount>=1 for autoscaling operations. An agent pool can only be the primary pool for a single load balancer.
* **provisioningState**: string (ReadOnly): The current provisioning state.
* **serviceLabelSelector**: [LabelSelector](#labelselector): Only services that must match this selector can be placed on this load balancer.
* **serviceNamespaceSelector**: [LabelSelector](#labelselector): Services created in namespaces that match the selector can be placed on this load balancer.

## LocalDNSOverride
### Properties
* **cacheDurationInSeconds**: int: Cache max TTL in seconds. See [cache plugin](https://coredns.io/plugins/cache) for more information.
* **forwardDestination**: 'ClusterCoreDNS' | 'VnetDNS' | string: Destination server for DNS queries to be forwarded from localDNS.
* **forwardPolicy**: 'Random' | 'RoundRobin' | 'Sequential' | string: Forward policy for selecting upstream DNS server. See [forward plugin](https://coredns.io/plugins/forward) for more information.
* **maxConcurrent**: int: Maximum number of concurrent queries. See [forward plugin](https://coredns.io/plugins/forward) for more information.
* **protocol**: 'ForceTCP' | 'PreferUDP' | string: Enforce TCP or prefer UDP protocol for connections from localDNS to upstream DNS server.
* **queryLogging**: 'Error' | 'Log' | string: Log level for DNS queries in localDNS.
* **serveStale**: 'Disable' | 'Immediate' | 'Verify' | string: Policy for serving stale data. See [cache plugin](https://coredns.io/plugins/cache) for more information.
* **serveStaleDurationInSeconds**: int: Serve stale duration in seconds. See [cache plugin](https://coredns.io/plugins/cache) for more information.

## LocalDNSProfile
### Properties
* **kubeDNSOverrides**: [LocalDNSProfileKubeDNSOverrides](#localdnsprofilekubednsoverrides): KubeDNS overrides apply to DNS traffic from pods with dnsPolicy:ClusterFirst (referred to as KubeDNS traffic).
* **mode**: 'Disabled' | 'Preferred' | 'Required' | string: Mode of enablement for localDNS.
* **state**: 'Disabled' | 'Enabled' | string (ReadOnly): System-generated state of localDNS.
* **vnetDNSOverrides**: [LocalDNSProfileVnetDNSOverrides](#localdnsprofilevnetdnsoverrides): VnetDNS overrides apply to DNS traffic from pods with dnsPolicy:default or kubelet (referred to as VnetDNS traffic).

## LocalDNSProfileKubeDNSOverrides
### Properties
### Additional Properties
* **Additional Properties Type**: [LocalDNSOverride](#localdnsoverride)

## LocalDNSProfileVnetDNSOverrides
### Properties
### Additional Properties
* **Additional Properties Type**: [LocalDNSOverride](#localdnsoverride)

## MachineHardwareProfile
### Properties
* **gpuInstanceProfile**: 'MIG1g' | 'MIG2g' | 'MIG3g' | 'MIG4g' | 'MIG7g' | string: GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU.
* **gpuProfile**: [GPUProfile](#gpuprofile): The GPU settings of the machine.
* **vmSize**: string: The size of the VM. VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions

## MachineIpAddress
### Properties
* **family**: 'IPv4' | 'IPv6' | string (ReadOnly): To determine if address belongs IPv4 or IPv6 family
* **ip**: string (ReadOnly): IPv4 or IPv6 address of the machine

## MachineKubernetesProfile
### Properties
* **artifactStreamingProfile**: [AgentPoolArtifactStreamingProfile](#agentpoolartifactstreamingprofile): Configuration for using artifact streaming on AKS.
* **currentOrchestratorVersion**: string (ReadOnly): The version of Kubernetes running on the machine. If orchestratorVersion was a fully specified version <major.minor.patch>, this field will be exactly equal to it. If orchestratorVersion was <major.minor>, this field will contain the full <major.minor.patch> version being used.
* **kubeletConfig**: [KubeletConfig](#kubeletconfig): The Kubelet configuration on the machine.
* **kubeletDiskType**: 'OS' | 'Temporary' | string: Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
* **maxPods**: int: The maximum number of pods that can run on a node.
* **nodeInitializationTaints**: string[]: Taints added on the node during creation that will not be reconciled by AKS. These taints will not be reconciled by AKS and can be removed with a kubectl call. These taints allow for required configuration to run before the node is ready to accept workloads, for example 'key1=value1:NoSchedule' that then can be removed with `kubectl taint nodes node1 key1=value1:NoSchedule-`
* **nodeLabels**: [MachineKubernetesProfileNodeLabels](#machinekubernetesprofilenodelabels): The node labels on the machine.
* **nodeName**: string (ReadOnly): The node name in the Kubernetes cluster.
* **nodeTaints**: string[]: The taints added to new node during machine create. For example, key=value:NoSchedule.
* **orchestratorVersion**: string: The version of Kubernetes specified by the user. Both patch version <major.minor.patch> and <major.minor> are supported. When <major.minor> is specified, the latest supported patch version is chosen automatically.
* **workloadRuntime**: 'KataMshvVmIsolation' | 'KataVmIsolation' | 'OCIContainer' | 'WasmWasi' | string: Determines the type of workload a node can run.

## MachineKubernetesProfileNodeLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MachineNetworkProperties
### Properties
* **enableNodePublicIP**: bool: Whether the machine is allocated its own public IP. Some scenarios may require the machine to receive their own dedicated public IP addresses. A common scenario is for gaming workloads, where a console needs to make a direct connection to a cloud virtual machine to minimize hops. The default is false.
* **ipAddresses**: [MachineIpAddress](#machineipaddress)[] (ReadOnly): IPv4, IPv6 addresses of the machine
* **nodePublicIPPrefixID**: string: The public IP prefix ID which VM node should use IPs from. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIPPrefixName}
* **nodePublicIPTags**: [IPTag](#iptag)[]: IPTags of instance-level public IPs.
* **podSubnetID**: string: The ID of the subnet which pods will join when launched. If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
* **vnetSubnetID**: string: The ID of the subnet which node and optionally pods will join on startup. If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}

## MachineOSProfile
### Properties
* **enableFIPS**: bool: Whether to use a FIPS-enabled OS.
* **linuxProfile**: [MachineOSProfileLinuxProfile](#machineosprofilelinuxprofile): The Linux machine's specific profile.
* **osDiskSizeGB**: int {minValue: 0, maxValue: 2048}: OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
* **osDiskType**: 'Ephemeral' | 'Managed' | string: The OS disk type to be used for machines in the agent pool. The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
* **osSKU**: 'AzureLinux' | 'AzureLinux3' | 'CBLMariner' | 'Flatcar' | 'Mariner' | 'Ubuntu' | 'Ubuntu2204' | 'Ubuntu2404' | 'Windows2019' | 'Windows2022' | 'Windows2025' | 'WindowsAnnual' | string: Specifies the OS SKU used by the agent pool. If not specified, the default is Ubuntu if OSType=Linux or Windows2019 if OSType=Windows. And the default Windows OSSKU will be changed to Windows2022 after Windows2019 is deprecated.
* **osType**: 'Linux' | 'Windows' | string: The operating system type. The default is Linux.
* **windowsProfile**: [AgentPoolWindowsProfile](#agentpoolwindowsprofile): The Windows machine's specific profile.

## MachineOSProfileLinuxProfile
### Properties
* **linuxOSConfig**: [LinuxOSConfig](#linuxosconfig): The OS configuration of Linux machine.
* **messageOfTheDay**: string: Message of the day for Linux nodes, base64-encoded. A base64-encoded string which will be written to /etc/motd after decoding. This allows customization of the message of the day for Linux nodes. It must not be specified for Windows nodes. It must be a static string (i.e., will be printed raw and not be executed as a script).

## MachineProperties
### Properties
* **eTag**: string (ReadOnly): Unique read-only string used to implement optimistic concurrency. The eTag value will change when the resource is updated. Specify an if-match or if-none-match header with the eTag value for a subsequent request to enable optimistic concurrency per the normal eTag convention.
* **hardware**: [MachineHardwareProfile](#machinehardwareprofile): The hardware and GPU settings of the machine.
* **kubernetes**: [MachineKubernetesProfile](#machinekubernetesprofile): The Kubernetes configurations used by the machine.
* **mode**: 'Gateway' | 'Machines' | 'ManagedSystem' | 'System' | 'User' | string: Machine only allows 'System' and 'User' mode.
* **network**: [MachineNetworkProperties](#machinenetworkproperties) (ReadOnly): network properties of the machine
* **nodeImageVersion**: string (ReadOnly): The version of node image.
* **operatingSystem**: [MachineOSProfile](#machineosprofile): The operating system and disk used by the machine.
* **priority**: 'Regular' | 'Spot' | string: The priority for the machine. If not specified, the default is 'Regular'.
* **provisioningState**: string (ReadOnly): The current deployment or provisioning state.
* **resourceId**: string (ReadOnly): Azure resource id of the machine. It can be used to GET underlying VM Instance
* **security**: [MachineSecurityProfile](#machinesecurityprofile): The security settings of the machine.
* **status**: [MachineStatus](#machinestatus) (ReadOnly): Contains read-only information about the machine.
* **tags**: [MachinePropertiesTags](#machinepropertiestags): The tags to be persisted on the machine.

## MachinePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MachineSecurityProfile
### Properties
* **enableEncryptionAtHost**: bool: Whether to enable host based OS and data drive encryption. This is only supported on certain VM sizes and in certain Azure regions. For more information, see: https://docs.microsoft.com/azure/aks/enable-host-encryption
* **enableSecureBoot**: bool: Secure Boot is a feature of Trusted Launch which ensures that only signed operating systems and drivers can boot. For more details, see aka.ms/aks/trustedlaunch.  If not specified, the default is false.
* **enableVTPM**: bool: vTPM is a Trusted Launch feature for configuring a dedicated secure vault for keys and measurements held locally on the node. For more details, see aka.ms/aks/trustedlaunch. If not specified, the default is false.
* **sshAccess**: 'Disabled' | 'EntraId' | 'LocalUser' | string: SSH access method of an agent pool.

## MachineStatus
### Properties
* **creationTimestamp**: string (ReadOnly): Specifies the time at which the machine was created.
* **driftAction**: 'Recreate' | 'Synced' | string (ReadOnly): The drift action of the machine. Indicates whether a machine has deviated from its expected state due to changes in managed cluster properties, requiring corrective action.
* **driftReason**: string (ReadOnly): Reason for machine drift. Provides detailed information on why the machine has drifted. This field is omitted if the machine is up to date.
* **provisioningError**: [ErrorDetail](#errordetail) (ReadOnly): The error details information of the machine. Preserves the detailed info of failure. If there was no error, this field is omitted.
* **vmState**: 'Deleted' | 'Running' | string (ReadOnly): Virtual machine state. Indicates the current state of the underlying virtual machine.

## MaintenanceConfigurationProperties
### Properties
* **maintenanceWindow**: [MaintenanceWindow](#maintenancewindow): Maintenance window for the maintenance configuration.
* **notAllowedTime**: [TimeSpan](#timespan)[]: Time slots on which upgrade is not allowed.
* **timeInWeek**: [TimeInWeek](#timeinweek)[]: Time slots during the week when planned maintenance is allowed to proceed. If two array entries specify the same day of the week, the applied configuration is the union of times in both entries.

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
* **serverAppSecret**: string {sensitive}: (DEPRECATED) The server AAD application secret. Learn more at https://aka.ms/aks/aad-legacy.
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
* **capacityReservationGroupID**: string: The fully qualified resource ID of the Capacity Reservation Group to provide virtual machines from a reserved group of Virtual Machines. This is of the form: '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Compute/capacityreservationgroups/{capacityReservationGroupName}' Customers use it to create an agentpool with a specified CRG. For more information see [Capacity Reservation](https://learn.microsoft.com/en-us/azure/virtual-machines/capacity-reservation-overview)
* **count**: int: Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1.
* **creationData**: [CreationData](#creationdata): CreationData to be used to specify the source Snapshot ID if the node pool will be created/upgraded using a snapshot.
* **currentOrchestratorVersion**: string (ReadOnly): The version of Kubernetes the Agent Pool is running. If orchestratorVersion is a fully specified version <major.minor.patch>, this field will be exactly equal to it. If orchestratorVersion is <major.minor>, this field will contain the full <major.minor.patch> version being used.
* **enableAutoScaling**: bool: Whether to enable auto-scaler
* **enableEncryptionAtHost**: bool: Whether to enable host based OS and data drive encryption. This is only supported on certain VM sizes and in certain Azure regions. For more information, see: https://docs.microsoft.com/azure/aks/enable-host-encryption
* **enableFIPS**: bool: Whether to use a FIPS-enabled OS. See [Add a FIPS-enabled node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#add-a-fips-enabled-node-pool-preview) for more details.
* **enableNodePublicIP**: bool: Whether each node is allocated its own public IP. Some scenarios may require nodes in a node pool to receive their own dedicated public IP addresses. A common scenario is for gaming workloads, where a console needs to make a direct connection to a cloud virtual machine to minimize hops. For more information see [assigning a public IP per node](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#assign-a-public-ip-per-node-for-your-node-pools). The default is false.
* **enableUltraSSD**: bool: Whether to enable UltraSSD
* **eTag**: string (ReadOnly): Unique read-only string used to implement optimistic concurrency. The eTag value will change when the resource is updated. Specify an if-match or if-none-match header with the eTag value for a subsequent request to enable optimistic concurrency per the normal eTag convention.
* **gatewayProfile**: [AgentPoolGatewayProfile](#agentpoolgatewayprofile): Profile specific to a managed agent pool in Gateway mode. This field cannot be set if agent pool mode is not Gateway.
* **gpuInstanceProfile**: 'MIG1g' | 'MIG2g' | 'MIG3g' | 'MIG4g' | 'MIG7g' | string: GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU.
* **gpuProfile**: [GPUProfile](#gpuprofile): GPU settings for the Agent Pool.
* **hostGroupID**: string: The fully qualified resource ID of the Dedicated Host Group to provision virtual machines from, used only in creation scenario and not allowed to changed once set. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information see [Azure dedicated hosts](https://docs.microsoft.com/azure/virtual-machines/dedicated-hosts).
* **kubeletConfig**: [KubeletConfig](#kubeletconfig): The Kubelet configuration on the agent pool nodes.
* **kubeletDiskType**: 'OS' | 'Temporary' | string: Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
* **linuxOSConfig**: [LinuxOSConfig](#linuxosconfig): The OS configuration of Linux agent nodes.
* **localDNSProfile**: [LocalDNSProfile](#localdnsprofile): Configures the per-node local DNS, with VnetDNS and KubeDNS overrides. LocalDNS helps improve performance and reliability of DNS resolution in an AKS cluster. For more details see aka.ms/aks/localdns.
* **maxCount**: int: The maximum number of nodes for auto-scaling
* **maxPods**: int: The maximum number of pods that can run on a node.
* **messageOfTheDay**: string: Message of the day for Linux nodes, base64-encoded. A base64-encoded string which will be written to /etc/motd after decoding. This allows customization of the message of the day for Linux nodes. It must not be specified for Windows nodes. It must be a static string (i.e., will be printed raw and not be executed as a script).
* **minCount**: int: The minimum number of nodes for auto-scaling
* **mode**: 'Gateway' | 'Machines' | 'ManagedSystem' | 'System' | 'User' | string: The mode of an agent pool. A cluster must have at least one 'System' Agent Pool at all times. For additional information on agent pool restrictions and best practices, see: https://docs.microsoft.com/azure/aks/use-system-pools
* **name**: string {pattern: "^[a-z][a-z0-9]{0,11}$"} (Required): Unique name of the agent pool profile in the context of the subscription and resource group. Windows agent pool names must be 6 characters or less.
* **networkProfile**: [AgentPoolNetworkProfile](#agentpoolnetworkprofile): Network-related settings of an agent pool.
* **nodeCustomizationProfile**: [NodeCustomizationProfile](#nodecustomizationprofile): Settings to determine the node customization used to provision nodes in a pool.
* **nodeImageVersion**: string (ReadOnly): The version of node image
* **nodeInitializationTaints**: string[]: Taints added on the nodes during creation that will not be reconciled by AKS. These taints will not be reconciled by AKS and can be removed with a kubectl call. This field can be modified after node pool is created, but nodes will not be recreated with new taints until another operation that requires recreation (e.g. node image upgrade) happens. These taints allow for required configuration to run before the node is ready to accept workloads, for example 'key1=value1:NoSchedule' that then can be removed with `kubectl taint nodes node1 key1=value1:NoSchedule-`
* **nodeLabels**: [ManagedClusterAgentPoolProfilePropertiesNodeLabels](#managedclusteragentpoolprofilepropertiesnodelabels): The node labels to be persisted across all nodes in agent pool.
* **nodePublicIPPrefixID**: string: The public IP prefix ID which VM nodes should use IPs from. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIPPrefixName}
* **nodeTaints**: string[]: The taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
* **orchestratorVersion**: string: The version of Kubernetes specified by the user. Both patch version <major.minor.patch> (e.g. 1.20.13) and <major.minor> (e.g. 1.20) are supported. When <major.minor> is specified, the latest supported GA patch version is chosen automatically. Updating the cluster with the same <major.minor> once it has been created (e.g. 1.14.x -> 1.14) will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see [upgrading a node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#upgrade-a-node-pool).
* **osDiskSizeGB**: int {minValue: 0, maxValue: 2048}: OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
* **osDiskType**: 'Ephemeral' | 'Managed' | string: The OS disk type to be used for machines in the agent pool. The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
* **osSKU**: 'AzureLinux' | 'AzureLinux3' | 'CBLMariner' | 'Flatcar' | 'Mariner' | 'Ubuntu' | 'Ubuntu2204' | 'Ubuntu2404' | 'Windows2019' | 'Windows2022' | 'Windows2025' | 'WindowsAnnual' | string: Specifies the OS SKU used by the agent pool. The default is Ubuntu if OSType is Linux. The default is Windows2019 when Kubernetes <= 1.24 or Windows2022 when Kubernetes >= 1.25 if OSType is Windows.
* **osType**: 'Linux' | 'Windows' | string: The operating system type. The default is Linux.
* **podIPAllocationMode**: 'DynamicIndividual' | 'StaticBlock' | string: Pod IP Allocation Mode. The IP allocation mode for pods in the agent pool. Must be used with podSubnetId. The default is 'DynamicIndividual'.
* **podSubnetID**: string: The ID of the subnet which pods will join when launched. If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
* **powerState**: [PowerState](#powerstate): Whether the Agent Pool is running or stopped. When an Agent Pool is first created it is initially Running. The Agent Pool can be stopped by setting this field to Stopped. A stopped Agent Pool stops all of its VMs and does not accrue billing charges. An Agent Pool can only be stopped if it is Running and provisioning state is Succeeded
* **provisioningState**: string (ReadOnly): The current deployment or provisioning state.
* **proximityPlacementGroupID**: string: The ID for Proximity Placement Group.
* **scaleDownMode**: 'Deallocate' | 'Delete' | string: The scale down mode to use when scaling the Agent Pool. This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete.
* **scaleSetEvictionPolicy**: 'Deallocate' | 'Delete' | string: The Virtual Machine Scale Set eviction policy. The eviction policy specifies what to do with the VM when it is evicted. The default is Delete. For more information about eviction see [spot VMs](https://docs.microsoft.com/azure/virtual-machines/spot-vms)
* **scaleSetPriority**: 'Regular' | 'Spot' | string: The Virtual Machine Scale Set priority.
* **securityProfile**: [AgentPoolSecurityProfile](#agentpoolsecurityprofile): The security settings of an agent pool.
* **spotMaxPrice**: int: The max price (in US Dollars) you are willing to pay for spot instances. Possible values are any decimal value greater than zero or -1 which indicates default price to be up-to on-demand. Possible values are any decimal value greater than zero or -1 which indicates the willingness to pay any on-demand price. For more details on spot pricing, see [spot VMs pricing](https://docs.microsoft.com/azure/virtual-machines/spot-vms#pricing)
* **status**: [AgentPoolStatus](#agentpoolstatus): Contains read-only information about the Agent Pool.
* **tags**: [ManagedClusterAgentPoolProfilePropertiesTags](#managedclusteragentpoolprofilepropertiestags): The tags to be persisted on the agent pool virtual machine scale set.
* **type**: 'AvailabilitySet' | 'VirtualMachineScaleSets' | 'VirtualMachines' | string: The type of Agent Pool.
* **upgradeSettings**: [AgentPoolUpgradeSettings](#agentpoolupgradesettings): Settings for upgrading the agentpool
* **upgradeSettingsBlueGreen**: [AgentPoolBlueGreenUpgradeSettings](#agentpoolbluegreenupgradesettings): Settings for Blue-Green upgrade on the agentpool. Applies when upgrade strategy is set to BlueGreen.
* **upgradeStrategy**: 'BlueGreen' | 'Rolling' | string: Defines the upgrade strategy for the agent pool. The default is Rolling.
* **virtualMachineNodesStatus**: [VirtualMachineNodes](#virtualmachinenodes)[]: The status of nodes in a VirtualMachines agent pool.
* **virtualMachinesProfile**: [VirtualMachinesProfile](#virtualmachinesprofile): Specifications on VirtualMachines agent pool.
* **vmSize**: string: The size of the agent pool VMs. VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
* **vnetSubnetID**: string: The ID of the subnet which agent pool nodes and optionally pods will join on startup. If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
* **windowsProfile**: [AgentPoolWindowsProfile](#agentpoolwindowsprofile): The Windows agent pool's specific profile.
* **workloadRuntime**: 'KataMshvVmIsolation' | 'KataVmIsolation' | 'OCIContainer' | 'WasmWasi' | string: Determines the type of workload a node can run.

## ManagedClusterAgentPoolProfileProperties
### Properties
* **artifactStreamingProfile**: [AgentPoolArtifactStreamingProfile](#agentpoolartifactstreamingprofile): Configuration for using artifact streaming on AKS.
* **availabilityZones**: string[]: The list of Availability zones to use for nodes. This can only be specified if the AgentPoolType property is 'VirtualMachineScaleSets'.
* **capacityReservationGroupID**: string: The fully qualified resource ID of the Capacity Reservation Group to provide virtual machines from a reserved group of Virtual Machines. This is of the form: '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Compute/capacityreservationgroups/{capacityReservationGroupName}' Customers use it to create an agentpool with a specified CRG. For more information see [Capacity Reservation](https://learn.microsoft.com/en-us/azure/virtual-machines/capacity-reservation-overview)
* **count**: int: Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1.
* **creationData**: [CreationData](#creationdata): CreationData to be used to specify the source Snapshot ID if the node pool will be created/upgraded using a snapshot.
* **currentOrchestratorVersion**: string (ReadOnly): The version of Kubernetes the Agent Pool is running. If orchestratorVersion is a fully specified version <major.minor.patch>, this field will be exactly equal to it. If orchestratorVersion is <major.minor>, this field will contain the full <major.minor.patch> version being used.
* **enableAutoScaling**: bool: Whether to enable auto-scaler
* **enableEncryptionAtHost**: bool: Whether to enable host based OS and data drive encryption. This is only supported on certain VM sizes and in certain Azure regions. For more information, see: https://docs.microsoft.com/azure/aks/enable-host-encryption
* **enableFIPS**: bool: Whether to use a FIPS-enabled OS. See [Add a FIPS-enabled node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#add-a-fips-enabled-node-pool-preview) for more details.
* **enableNodePublicIP**: bool: Whether each node is allocated its own public IP. Some scenarios may require nodes in a node pool to receive their own dedicated public IP addresses. A common scenario is for gaming workloads, where a console needs to make a direct connection to a cloud virtual machine to minimize hops. For more information see [assigning a public IP per node](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#assign-a-public-ip-per-node-for-your-node-pools). The default is false.
* **enableUltraSSD**: bool: Whether to enable UltraSSD
* **eTag**: string (ReadOnly): Unique read-only string used to implement optimistic concurrency. The eTag value will change when the resource is updated. Specify an if-match or if-none-match header with the eTag value for a subsequent request to enable optimistic concurrency per the normal eTag convention.
* **gatewayProfile**: [AgentPoolGatewayProfile](#agentpoolgatewayprofile): Profile specific to a managed agent pool in Gateway mode. This field cannot be set if agent pool mode is not Gateway.
* **gpuInstanceProfile**: 'MIG1g' | 'MIG2g' | 'MIG3g' | 'MIG4g' | 'MIG7g' | string: GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU.
* **gpuProfile**: [GPUProfile](#gpuprofile): GPU settings for the Agent Pool.
* **hostGroupID**: string: The fully qualified resource ID of the Dedicated Host Group to provision virtual machines from, used only in creation scenario and not allowed to changed once set. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information see [Azure dedicated hosts](https://docs.microsoft.com/azure/virtual-machines/dedicated-hosts).
* **kubeletConfig**: [KubeletConfig](#kubeletconfig): The Kubelet configuration on the agent pool nodes.
* **kubeletDiskType**: 'OS' | 'Temporary' | string: Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
* **linuxOSConfig**: [LinuxOSConfig](#linuxosconfig): The OS configuration of Linux agent nodes.
* **localDNSProfile**: [LocalDNSProfile](#localdnsprofile): Configures the per-node local DNS, with VnetDNS and KubeDNS overrides. LocalDNS helps improve performance and reliability of DNS resolution in an AKS cluster. For more details see aka.ms/aks/localdns.
* **maxCount**: int: The maximum number of nodes for auto-scaling
* **maxPods**: int: The maximum number of pods that can run on a node.
* **messageOfTheDay**: string: Message of the day for Linux nodes, base64-encoded. A base64-encoded string which will be written to /etc/motd after decoding. This allows customization of the message of the day for Linux nodes. It must not be specified for Windows nodes. It must be a static string (i.e., will be printed raw and not be executed as a script).
* **minCount**: int: The minimum number of nodes for auto-scaling
* **mode**: 'Gateway' | 'Machines' | 'ManagedSystem' | 'System' | 'User' | string: The mode of an agent pool. A cluster must have at least one 'System' Agent Pool at all times. For additional information on agent pool restrictions and best practices, see: https://docs.microsoft.com/azure/aks/use-system-pools
* **networkProfile**: [AgentPoolNetworkProfile](#agentpoolnetworkprofile): Network-related settings of an agent pool.
* **nodeCustomizationProfile**: [NodeCustomizationProfile](#nodecustomizationprofile): Settings to determine the node customization used to provision nodes in a pool.
* **nodeImageVersion**: string (ReadOnly): The version of node image
* **nodeInitializationTaints**: string[]: Taints added on the nodes during creation that will not be reconciled by AKS. These taints will not be reconciled by AKS and can be removed with a kubectl call. This field can be modified after node pool is created, but nodes will not be recreated with new taints until another operation that requires recreation (e.g. node image upgrade) happens. These taints allow for required configuration to run before the node is ready to accept workloads, for example 'key1=value1:NoSchedule' that then can be removed with `kubectl taint nodes node1 key1=value1:NoSchedule-`
* **nodeLabels**: [ManagedClusterAgentPoolProfilePropertiesNodeLabels](#managedclusteragentpoolprofilepropertiesnodelabels): The node labels to be persisted across all nodes in agent pool.
* **nodePublicIPPrefixID**: string: The public IP prefix ID which VM nodes should use IPs from. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIPPrefixName}
* **nodeTaints**: string[]: The taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
* **orchestratorVersion**: string: The version of Kubernetes specified by the user. Both patch version <major.minor.patch> (e.g. 1.20.13) and <major.minor> (e.g. 1.20) are supported. When <major.minor> is specified, the latest supported GA patch version is chosen automatically. Updating the cluster with the same <major.minor> once it has been created (e.g. 1.14.x -> 1.14) will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see [upgrading a node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#upgrade-a-node-pool).
* **osDiskSizeGB**: int {minValue: 0, maxValue: 2048}: OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
* **osDiskType**: 'Ephemeral' | 'Managed' | string: The OS disk type to be used for machines in the agent pool. The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
* **osSKU**: 'AzureLinux' | 'AzureLinux3' | 'CBLMariner' | 'Flatcar' | 'Mariner' | 'Ubuntu' | 'Ubuntu2204' | 'Ubuntu2404' | 'Windows2019' | 'Windows2022' | 'Windows2025' | 'WindowsAnnual' | string: Specifies the OS SKU used by the agent pool. The default is Ubuntu if OSType is Linux. The default is Windows2019 when Kubernetes <= 1.24 or Windows2022 when Kubernetes >= 1.25 if OSType is Windows.
* **osType**: 'Linux' | 'Windows' | string: The operating system type. The default is Linux.
* **podIPAllocationMode**: 'DynamicIndividual' | 'StaticBlock' | string: Pod IP Allocation Mode. The IP allocation mode for pods in the agent pool. Must be used with podSubnetId. The default is 'DynamicIndividual'.
* **podSubnetID**: string: The ID of the subnet which pods will join when launched. If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
* **powerState**: [PowerState](#powerstate): Whether the Agent Pool is running or stopped. When an Agent Pool is first created it is initially Running. The Agent Pool can be stopped by setting this field to Stopped. A stopped Agent Pool stops all of its VMs and does not accrue billing charges. An Agent Pool can only be stopped if it is Running and provisioning state is Succeeded
* **provisioningState**: string (ReadOnly): The current deployment or provisioning state.
* **proximityPlacementGroupID**: string: The ID for Proximity Placement Group.
* **scaleDownMode**: 'Deallocate' | 'Delete' | string: The scale down mode to use when scaling the Agent Pool. This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete.
* **scaleSetEvictionPolicy**: 'Deallocate' | 'Delete' | string: The Virtual Machine Scale Set eviction policy. The eviction policy specifies what to do with the VM when it is evicted. The default is Delete. For more information about eviction see [spot VMs](https://docs.microsoft.com/azure/virtual-machines/spot-vms)
* **scaleSetPriority**: 'Regular' | 'Spot' | string: The Virtual Machine Scale Set priority.
* **securityProfile**: [AgentPoolSecurityProfile](#agentpoolsecurityprofile): The security settings of an agent pool.
* **spotMaxPrice**: int: The max price (in US Dollars) you are willing to pay for spot instances. Possible values are any decimal value greater than zero or -1 which indicates default price to be up-to on-demand. Possible values are any decimal value greater than zero or -1 which indicates the willingness to pay any on-demand price. For more details on spot pricing, see [spot VMs pricing](https://docs.microsoft.com/azure/virtual-machines/spot-vms#pricing)
* **status**: [AgentPoolStatus](#agentpoolstatus): Contains read-only information about the Agent Pool.
* **tags**: [ManagedClusterAgentPoolProfilePropertiesTags](#managedclusteragentpoolprofilepropertiestags): The tags to be persisted on the agent pool virtual machine scale set.
* **type**: 'AvailabilitySet' | 'VirtualMachineScaleSets' | 'VirtualMachines' | string: The type of Agent Pool.
* **upgradeSettings**: [AgentPoolUpgradeSettings](#agentpoolupgradesettings): Settings for upgrading the agentpool
* **upgradeSettingsBlueGreen**: [AgentPoolBlueGreenUpgradeSettings](#agentpoolbluegreenupgradesettings): Settings for Blue-Green upgrade on the agentpool. Applies when upgrade strategy is set to BlueGreen.
* **upgradeStrategy**: 'BlueGreen' | 'Rolling' | string: Defines the upgrade strategy for the agent pool. The default is Rolling.
* **virtualMachineNodesStatus**: [VirtualMachineNodes](#virtualmachinenodes)[]: The status of nodes in a VirtualMachines agent pool.
* **virtualMachinesProfile**: [VirtualMachinesProfile](#virtualmachinesprofile): Specifications on VirtualMachines agent pool.
* **vmSize**: string: The size of the agent pool VMs. VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
* **vnetSubnetID**: string: The ID of the subnet which agent pool nodes and optionally pods will join on startup. If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
* **windowsProfile**: [AgentPoolWindowsProfile](#agentpoolwindowsprofile): The Windows agent pool's specific profile.
* **workloadRuntime**: 'KataMshvVmIsolation' | 'KataVmIsolation' | 'OCIContainer' | 'WasmWasi' | string: Determines the type of workload a node can run.

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
* **enabled**: bool: Whether to enable AI toolchain operator to the cluster. Indicates if AI toolchain operator  enabled or not.

## ManagedClusterAPIServerAccessProfile
### Properties
* **authorizedIPRanges**: string[]: The IP ranges authorized to access the Kubernetes API server. IP ranges are specified in CIDR format, e.g. 137.117.106.88/29. This feature is not compatible with clusters that use Public IP Per Node, or clusters that are using a Basic Load Balancer. For more information see [API server authorized IP ranges](https://docs.microsoft.com/azure/aks/api-server-authorized-ip-ranges).
* **disableRunCommand**: bool: Whether to disable run command for the cluster or not.
* **enablePrivateCluster**: bool: Whether to create the cluster as a private cluster or not. For more details, see [Creating a private AKS cluster](https://docs.microsoft.com/azure/aks/private-clusters).
* **enablePrivateClusterPublicFQDN**: bool: Whether to create additional public FQDN for private cluster or not.
* **enableVnetIntegration**: bool: Whether to enable apiserver vnet integration for the cluster or not. See aka.ms/AksVnetIntegration for more details.
* **privateDNSZone**: string: The private DNS zone mode for the cluster. The default is System. For more details see [configure private DNS zone](https://docs.microsoft.com/azure/aks/private-clusters#configure-private-dns-zone). Allowed values are 'system' and 'none'.
* **subnetId**: string: The subnet to be used when apiserver vnet integration is enabled. It is required when creating a new cluster with BYO Vnet, or when updating an existing cluster to enable apiserver vnet integration.

## ManagedClusterAutoUpgradeProfile
### Properties
* **nodeOSUpgradeChannel**: 'NodeImage' | 'None' | 'SecurityPatch' | 'Unmanaged' | string: Node OS Upgrade Channel. Manner in which the OS on your nodes is updated. The default is NodeImage.
* **upgradeChannel**: 'node-image' | 'none' | 'patch' | 'rapid' | 'stable' | string: The upgrade channel for auto upgrade. The default is 'none'. For more information see [setting the AKS cluster auto-upgrade channel](https://docs.microsoft.com/azure/aks/upgrade-cluster#set-auto-upgrade-channel).

## ManagedClusterAzureMonitorProfile
### Properties
* **appMonitoring**: [ManagedClusterAzureMonitorProfileAppMonitoring](#managedclusterazuremonitorprofileappmonitoring): Application Monitoring Profile for Kubernetes Application Container. Collects application logs, metrics and traces through auto-instrumentation of the application using Azure Monitor OpenTelemetry based SDKs. See aka.ms/AzureMonitorApplicationMonitoring for an overview.
* **containerInsights**: [ManagedClusterAzureMonitorProfileContainerInsights](#managedclusterazuremonitorprofilecontainerinsights): Azure Monitor Container Insights Profile for Kubernetes Events, Inventory and Container stdout & stderr logs etc. See aka.ms/AzureMonitorContainerInsights for an overview.
* **metrics**: [ManagedClusterAzureMonitorProfileMetrics](#managedclusterazuremonitorprofilemetrics): Metrics profile for the Azure Monitor managed service for Prometheus addon. Collect out-of-the-box Kubernetes infrastructure metrics to send to an Azure Monitor Workspace and configure additional scraping for custom targets. See aka.ms/AzureManagedPrometheus for an overview.

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
* **metricAnnotationsAllowList**: string: Comma-separated list of Kubernetes annotation keys that will be used in the resource's labels metric (Example: 'namespaces=[kubernetes.io/team,...],pods=[kubernetes.io/team],...'). By default the metric contains only resource name and namespace labels.
* **metricLabelsAllowlist**: string: Comma-separated list of additional Kubernetes label keys that will be used in the resource's labels metric (Example: 'namespaces=[k8s-label-1,k8s-label-n,...],pods=[app],...'). By default the metric contains only resource name and namespace labels.

## ManagedClusterAzureMonitorProfileMetrics
### Properties
* **enabled**: bool (Required): Whether to enable or disable the Azure Managed Prometheus addon for Prometheus monitoring. See aka.ms/AzureManagedPrometheus-aks-enable for details on enabling and disabling.
* **kubeStateMetrics**: [ManagedClusterAzureMonitorProfileKubeStateMetrics](#managedclusterazuremonitorprofilekubestatemetrics): Kube State Metrics profile for the Azure Managed Prometheus addon. These optional settings are for the kube-state-metrics pod that is deployed with the addon. See aka.ms/AzureManagedPrometheus-optional-parameters for details.

## ManagedClusterBootstrapProfile
### Properties
* **artifactSource**: 'Cache' | 'Direct' | string: The artifact source. The source where the artifacts are downloaded from.
* **containerRegistryId**: string: The resource Id of Azure Container Registry. The registry must have private network access, premium SKU and zone redundancy.

## ManagedClusterCostAnalysis
### Properties
* **enabled**: bool: Whether to enable cost analysis. The Managed Cluster sku.tier must be set to 'Standard' or 'Premium' to enable this feature. Enabling this will add Kubernetes Namespace and Deployment details to the Cost Analysis views in the Azure portal. If not specified, the default is false. For more information see aka.ms/aks/docs/cost-analysis.

## ManagedClusterHostedSystemProfile
### Properties
* **enabled**: bool: Whether to enable hosted system addons for the cluster.

## ManagedClusterHttpProxyConfig
### Properties
* **effectiveNoProxy**: string[] (ReadOnly): A read-only list of all endpoints for which traffic should not be sent to the proxy. This list is a superset of noProxy and values injected by AKS.
* **enabled**: bool: Whether to enable HTTP proxy. When disabled, the specified proxy configuration will be not be set on pods and nodes.
* **httpProxy**: string: The HTTP proxy server endpoint to use.
* **httpsProxy**: string: The HTTPS proxy server endpoint to use.
* **noProxy**: string[]: The endpoints that should not go through proxy.
* **trustedCa**: string: Alternative CA cert to use for connecting to proxy servers.

## ManagedClusterIdentity
### Properties
* **delegatedResources**: [ManagedClusterIdentityDelegatedResources](#managedclusteridentitydelegatedresources): The delegated identity resources assigned to this managed cluster. This can only be set by another Azure Resource Provider, and managed cluster only accept one delegated identity resource. Internal use only.
* **principalId**: string (ReadOnly): The principal id of the system assigned identity which is used by master components.
* **tenantId**: string (ReadOnly): The tenant id of the system assigned identity which is used by master components.
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned' | string: The type of identity used for the managed cluster. For more information see [use managed identities in AKS](https://docs.microsoft.com/azure/aks/use-managed-identity).
* **userAssignedIdentities**: [ManagedClusterIdentityUserAssignedIdentities](#managedclusteridentityuserassignedidentities): The user identity associated with the managed cluster. This identity will be used in control plane. Only one user assigned identity is allowed. The keys must be ARM resource IDs in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## ManagedClusterIdentityDelegatedResources
### Properties
### Additional Properties
* **Additional Properties Type**: [DelegatedResource](#delegatedresource)

## ManagedClusterIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [ManagedServiceIdentityUserAssignedIdentitiesValue](#managedserviceidentityuserassignedidentitiesvalue)

## ManagedClusterIngressDefaultDomainProfile
### Properties
* **domainName**: string (ReadOnly): The unique fully qualified domain name assigned to the cluster. This will not change even if disabled then reenabled.
* **enabled**: bool: Whether to enable Default Domain.

## ManagedClusterIngressProfile
### Properties
* **applicationLoadBalancer**: [ManagedClusterIngressProfileApplicationLoadBalancer](#managedclusteringressprofileapplicationloadbalancer): Settings for the managed Application Load Balancer installation
* **gatewayAPI**: [ManagedClusterIngressProfileGatewayConfiguration](#managedclusteringressprofilegatewayconfiguration): Settings for the managed Gateway API installation
* **webAppRouting**: [ManagedClusterIngressProfileWebAppRouting](#managedclusteringressprofilewebapprouting): App Routing settings for the ingress profile. You can find an overview and onboarding guide for this feature at https://learn.microsoft.com/en-us/azure/aks/app-routing?tabs=default%2Cdeploy-app-default.

## ManagedClusterIngressProfileApplicationLoadBalancer
### Properties
* **enabled**: bool: Whether to enable Application Load Balancer.
* **identity**: [UserAssignedIdentity](#userassignedidentity) (ReadOnly): Managed identity of the Application Load Balancer add-on. This is the identity that should be granted permissions to manage the associated Application Gateway for Containers resource.

## ManagedClusterIngressProfileGatewayConfiguration
### Properties
* **installation**: 'Disabled' | 'Standard' | string: Configuration for the managed Gateway API installation. If not specified, the default is 'Disabled'. See https://aka.ms/k8s-gateway-api for more details.

## ManagedClusterIngressProfileNginx
### Properties
* **defaultIngressControllerType**: 'AnnotationControlled' | 'External' | 'Internal' | 'None' | string: Ingress type for the default NginxIngressController custom resource

## ManagedClusterIngressProfileWebAppRouting
### Properties
* **defaultDomain**: [ManagedClusterIngressDefaultDomainProfile](#managedclusteringressdefaultdomainprofile): Configuration for the Default Domain. This is a unique, autogenerated domain that comes with a signed TLS Certificate allowing for secure HTTPS. See [the Default Domain documentation](https://aka.ms/aks/defaultdomain) for more instructions.
* **dnsZoneResourceIds**: string[] {maxLength: 5}: Resource IDs of the DNS zones to be associated with the Application Routing add-on. Used only when Application Routing add-on is enabled. Public and private DNS zones can be in different resource groups, but all public DNS zones must be in the same resource group and all private DNS zones must be in the same resource group.
* **enabled**: bool: Whether to enable the Application Routing add-on.
* **identity**: [UserAssignedIdentity](#userassignedidentity) (ReadOnly): Managed identity of the Application Routing add-on. This is the identity that should be granted permissions, for example, to manage the associated Azure DNS resource and get certificates from Azure Key Vault. See [this overview of the add-on](https://learn.microsoft.com/en-us/azure/aks/web-app-routing?tabs=with-osm) for more instructions.
* **nginx**: [ManagedClusterIngressProfileNginx](#managedclusteringressprofilenginx): Configuration for the default NginxIngressController. See more at https://learn.microsoft.com/en-us/azure/aks/app-routing-nginx-configuration#the-default-nginx-ingress-controller.

## ManagedClusterLoadBalancerProfile
### Properties
* **allocatedOutboundPorts**: int {minValue: 0, maxValue: 64000}: The desired number of allocated SNAT ports per VM. Allowed values are in the range of 0 to 64000 (inclusive). The default value is 0 which results in Azure dynamically allocating ports.
* **backendPoolType**: 'NodeIP' | 'NodeIPConfiguration' | string: The type of the managed inbound Load Balancer BackendPool.
* **clusterServiceLoadBalancerHealthProbeMode**: 'ServiceNodePort' | 'Shared' | string: The health probing behavior for External Traffic Policy Cluster services.
* **effectiveOutboundIPs**: [ResourceReference](#resourcereference)[] (ReadOnly): The effective outbound IP resources of the cluster load balancer.
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
* **costAnalysis**: [ManagedClusterCostAnalysis](#managedclustercostanalysis): The configuration for detailed per-Kubernetes resource cost analysis.

## ManagedClusterNATGatewayProfile
### Properties
* **effectiveOutboundIPs**: [ResourceReference](#resourcereference)[] (ReadOnly): The effective outbound IP resources of the cluster NAT gateway.
* **idleTimeoutInMinutes**: int {minValue: 4, maxValue: 120}: Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 4 minutes.
* **managedOutboundIPProfile**: [ManagedClusterManagedOutboundIPProfile](#managedclustermanagedoutboundipprofile): Profile of the managed outbound IP resources of the cluster NAT gateway.

## ManagedClusterNodeProvisioningProfile
### Properties
* **defaultNodePools**: 'Auto' | 'None' | string: The set of default Karpenter NodePools (CRDs) configured for node provisioning. This field has no effect unless mode is 'Auto'. Warning: Changing this from Auto to None on an existing cluster will cause the default Karpenter NodePools to be deleted, which will drain and delete the nodes associated with those pools. It is strongly recommended to not do this unless there are idle nodes ready to take the pods evicted by that action. If not specified, the default is Auto. For more information see aka.ms/aks/nap#node-pools.
* **mode**: 'Auto' | 'Manual' | string: The node provisioning mode. If not specified, the default is Manual.

## ManagedClusterNodeResourceGroupProfile
### Properties
* **restrictionLevel**: 'ReadOnly' | 'Unrestricted' | string: The restriction level applied to the cluster's node resource group. If not specified, the default is 'Unrestricted'

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
* **provisioningInfo**: [ManagedClusterPodIdentityProvisioningInfo](#managedclusterpodidentityprovisioninginfo) (ReadOnly): The provisioning information for the pod identity.
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
* **allowNetworkPluginKubenet**: bool: Whether pod identity is allowed to run on clusters with Kubenet networking. Running in Kubenet is disabled by default due to the security related nature of AAD Pod Identity and the risks of IP spoofing. See [using Kubenet network plugin with AAD Pod Identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity#using-kubenet-network-plugin-with-azure-active-directory-pod-managed-identities) for more information.
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

## ManagedClusterPoolUpgradeProfile
### Properties
* **componentsByReleases**: [ComponentsByRelease](#componentsbyrelease)[]: List of components grouped by kubernetes major.minor version.
* **kubernetesVersion**: string (Required): The Kubernetes version (major.minor.patch).
* **name**: string: The Agent Pool name.
* **osType**: 'Linux' | 'Windows' | string (Required): The operating system type. The default is Linux.
* **upgrades**: [ManagedClusterPoolUpgradeProfileUpgradesItem](#managedclusterpoolupgradeprofileupgradesitem)[]: List of orchestrator types and versions available for upgrade.

## ManagedClusterPoolUpgradeProfileUpgradesItem
### Properties
* **isOutOfSupport**: bool: Whether the Kubernetes version is out of support.
* **isPreview**: bool: Whether the Kubernetes version is currently in preview.
* **kubernetesVersion**: string: The Kubernetes version (major.minor.patch).

## ManagedClusterProperties
### Properties
* **aadProfile**: [ManagedClusterAADProfile](#managedclusteraadprofile): The Azure Active Directory configuration.
* **addonProfiles**: [ManagedClusterPropertiesAddonProfiles](#managedclusterpropertiesaddonprofiles): The profile of managed cluster add-on.
* **agentPoolProfiles**: [ManagedClusterAgentPoolProfile](#managedclusteragentpoolprofile)[]: The agent pool properties.
* **aiToolchainOperatorProfile**: [ManagedClusterAIToolchainOperatorProfile](#managedclusteraitoolchainoperatorprofile): AI toolchain operator settings that apply to the whole cluster.
* **apiServerAccessProfile**: [ManagedClusterAPIServerAccessProfile](#managedclusterapiserveraccessprofile): The access profile for managed cluster API server.
* **autoScalerProfile**: [ManagedClusterPropertiesAutoScalerProfile](#managedclusterpropertiesautoscalerprofile): Parameters to be applied to the cluster-autoscaler when enabled
* **autoUpgradeProfile**: [ManagedClusterAutoUpgradeProfile](#managedclusterautoupgradeprofile): The auto upgrade configuration.
* **azureMonitorProfile**: [ManagedClusterAzureMonitorProfile](#managedclusterazuremonitorprofile): Azure Monitor addon profiles for monitoring the managed cluster.
* **azurePortalFQDN**: string (ReadOnly): The special FQDN used by the Azure Portal to access the Managed Cluster. This FQDN is for use only by the Azure Portal and should not be used by other clients. The Azure Portal requires certain Cross-Origin Resource Sharing (CORS) headers to be sent in some responses, which Kubernetes APIServer doesn't handle by default. This special FQDN supports CORS, allowing the Azure Portal to function properly.
* **bootstrapProfile**: [ManagedClusterBootstrapProfile](#managedclusterbootstrapprofile): Profile of the cluster bootstrap configuration.
* **creationData**: [CreationData](#creationdata): CreationData to be used to specify the source Snapshot ID if the cluster will be created/upgraded using a snapshot.
* **currentKubernetesVersion**: string (ReadOnly): The version of Kubernetes the Managed Cluster is running. If kubernetesVersion was a fully specified version <major.minor.patch>, this field will be exactly equal to it. If kubernetesVersion was <major.minor>, this field will contain the full <major.minor.patch> version being used.
* **disableLocalAccounts**: bool: If local accounts should be disabled on the Managed Cluster. If set to true, getting static credentials will be disabled for this cluster. This must only be used on Managed Clusters that are AAD enabled. For more details see [disable local accounts](https://docs.microsoft.com/azure/aks/managed-aad#disable-local-accounts-preview).
* **diskEncryptionSetID**: string: The Resource ID of the disk encryption set to use for enabling encryption at rest. This is of the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{encryptionSetName}'
* **dnsPrefix**: string: The DNS prefix of the Managed Cluster. This cannot be updated once the Managed Cluster has been created.
* **enableNamespaceResources**: bool: Enable namespace as Azure resource. The default value is false. It can be enabled/disabled on creation and updating of the managed cluster. See [https://aka.ms/NamespaceARMResource](https://aka.ms/NamespaceARMResource) for more details on Namespace as a ARM Resource.
* **enableRBAC**: bool: Whether to enable Kubernetes Role-Based Access Control.
* **fqdn**: string (ReadOnly): The FQDN of the master pool.
* **fqdnSubdomain**: string: The FQDN subdomain of the private cluster with custom private dns zone. This cannot be updated once the Managed Cluster has been created.
* **hostedSystemProfile**: [ManagedClusterHostedSystemProfile](#managedclusterhostedsystemprofile): Settings for hosted system addons. For more information, see https://aka.ms/aks/automatic/systemcomponents.
* **httpProxyConfig**: [ManagedClusterHttpProxyConfig](#managedclusterhttpproxyconfig): Configurations for provisioning the cluster with HTTP proxy servers.
* **identityProfile**: [ManagedClusterPropertiesIdentityProfile](#managedclusterpropertiesidentityprofile): The user identity associated with the managed cluster. This identity will be used by the kubelet. Only one user assigned identity is allowed. The only accepted key is "kubeletidentity", with value of "resourceId": "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}".
* **ingressProfile**: [ManagedClusterIngressProfile](#managedclusteringressprofile): Ingress profile for the managed cluster.
* **kubernetesVersion**: string: The version of Kubernetes specified by the user. Both patch version <major.minor.patch> (e.g. 1.20.13) and <major.minor> (e.g. 1.20) are supported. When <major.minor> is specified, the latest supported GA patch version is chosen automatically. Updating the cluster with the same <major.minor> once it has been created (e.g. 1.14.x -> 1.14) will not trigger an upgrade, even if a newer patch version is available. When you upgrade a supported AKS cluster, Kubernetes minor versions cannot be skipped. All upgrades must be performed sequentially by major version number. For example, upgrades between 1.14.x -> 1.15.x or 1.15.x -> 1.16.x are allowed, however 1.14.x -> 1.16.x is not allowed. See [upgrading an AKS cluster](https://docs.microsoft.com/azure/aks/upgrade-cluster) for more details.
* **linuxProfile**: [ContainerServiceLinuxProfile](#containerservicelinuxprofile): The profile for Linux VMs in the Managed Cluster.
* **maxAgentPools**: int (ReadOnly): The max number of agent pools for the managed cluster.
* **metricsProfile**: [ManagedClusterMetricsProfile](#managedclustermetricsprofile): Optional cluster metrics configuration.
* **networkProfile**: [ContainerServiceNetworkProfile](#containerservicenetworkprofile): The network configuration profile.
* **nodeProvisioningProfile**: [ManagedClusterNodeProvisioningProfile](#managedclusternodeprovisioningprofile): Node provisioning settings that apply to the whole cluster.
* **nodeResourceGroup**: string: The name of the resource group containing agent pool nodes.
* **nodeResourceGroupProfile**: [ManagedClusterNodeResourceGroupProfile](#managedclusternoderesourcegroupprofile): Profile of the node resource group configuration.
* **oidcIssuerProfile**: [ManagedClusterOidcIssuerProfile](#managedclusteroidcissuerprofile): The OIDC issuer profile of the Managed Cluster.
* **podIdentityProfile**: [ManagedClusterPodIdentityProfile](#managedclusterpodidentityprofile): The pod identity profile of the Managed Cluster. See [use AAD pod identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity) for more details on AAD pod identity integration.
* **powerState**: [PowerState](#powerstate) (ReadOnly): The Power State of the cluster.
* **privateFQDN**: string (ReadOnly): The FQDN of private cluster.
* **privateLinkResources**: [PrivateLinkResource](#privatelinkresource)[]: Private link resources associated with the cluster.
* **provisioningState**: string (ReadOnly): The current provisioning state.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | 'SecuredByPerimeter' | string: PublicNetworkAccess of the managedCluster. Allow or deny public network access for AKS
* **resourceUID**: string (ReadOnly): The resourceUID uniquely identifies ManagedClusters that reuse ARM ResourceIds (i.e: create, delete, create sequence)
* **schedulerProfile**: [SchedulerProfile](#schedulerprofile): Profile of the pod scheduler configuration.
* **securityProfile**: [ManagedClusterSecurityProfile](#managedclustersecurityprofile): Security profile for the managed cluster.
* **serviceMeshProfile**: [ServiceMeshProfile](#servicemeshprofile): Service mesh profile for a managed cluster.
* **servicePrincipalProfile**: [ManagedClusterServicePrincipalProfile](#managedclusterserviceprincipalprofile): Information about a service principal identity for the cluster to use for manipulating Azure APIs.
* **status**: [ManagedClusterStatus](#managedclusterstatus): Contains read-only information about the Managed Cluster.
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
* **balance-similar-node-groups**: string: Detects similar node pools and balances the number of nodes between them. Valid values are 'true' and 'false'
* **daemonset-eviction-for-empty-nodes**: bool: DaemonSet pods will be gracefully terminated from empty nodes. If set to true, all daemonset pods on empty nodes will be evicted before deletion of the node. If the daemonset pod cannot be evicted another node will be chosen for scaling. If set to false, the node will be deleted without ensuring that daemonset pods are deleted or evicted.
* **daemonset-eviction-for-occupied-nodes**: bool: DaemonSet pods will be gracefully terminated from non-empty nodes. If set to true, all daemonset pods on occupied nodes will be evicted before deletion of the node. If the daemonset pod cannot be evicted another node will be chosen for scaling. If set to false, the node will be deleted without ensuring that daemonset pods are deleted or evicted.
* **expander**: 'least-waste' | 'most-pods' | 'priority' | 'random' | string: The expander to use when scaling up. If not specified, the default is 'random'. See [expanders](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#what-are-expanders) for more information.
* **ignore-daemonsets-utilization**: bool: Should CA ignore DaemonSet pods when calculating resource utilization for scaling down. If set to true, the resources used by daemonset will be taken into account when making scaling down decisions.
* **max-empty-bulk-delete**: string: The maximum number of empty nodes that can be deleted at the same time. This must be a positive integer. The default is 10.
* **max-graceful-termination-sec**: string: The maximum number of seconds the cluster autoscaler waits for pod termination when trying to scale down a node. The default is 600.
* **max-node-provision-time**: string: The maximum time the autoscaler waits for a node to be provisioned. The default is '15m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
* **max-total-unready-percentage**: string: The maximum percentage of unready nodes in the cluster. After this percentage is exceeded, cluster autoscaler halts operations. The default is 45. The maximum is 100 and the minimum is 0.
* **new-pod-scale-up-delay**: string: Ignore unscheduled pods before they're a certain age. For scenarios like burst/batch scale where you don't want CA to act before the kubernetes scheduler could schedule all the pods, you can tell CA to ignore unscheduled pods before they're a certain age. The default is '0s'. Values must be an integer followed by a unit ('s' for seconds, 'm' for minutes, 'h' for hours, etc).
* **ok-total-unready-count**: string: The number of allowed unready nodes, irrespective of max-total-unready-percentage. This must be an integer. The default is 3.
* **scale-down-delay-after-add**: string: How long after scale up that scale down evaluation resumes. The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
* **scale-down-delay-after-delete**: string: How long after node deletion that scale down evaluation resumes. The default is the scan-interval. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
* **scale-down-delay-after-failure**: string: How long after scale down failure that scale down evaluation resumes. The default is '3m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
* **scale-down-unneeded-time**: string: How long a node should be unneeded before it is eligible for scale down. The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
* **scale-down-unready-time**: string: How long an unready node should be unneeded before it is eligible for scale down. The default is '20m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
* **scale-down-utilization-threshold**: string: Node utilization level, defined as sum of requested resources divided by capacity, below which a node can be considered for scale down. The default is '0.5'.
* **scan-interval**: string: How often cluster is reevaluated for scale up or down. The default is '10'. Values must be an integer number of seconds.
* **skip-nodes-with-local-storage**: string: If cluster autoscaler will skip deleting nodes with pods with local storage, for example, EmptyDir or HostPath. The default is true.
* **skip-nodes-with-system-pods**: string: If cluster autoscaler will skip deleting nodes with pods from kube-system (except for DaemonSet or mirror pods). The default is true.

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
* **customCATrustCertificates**: any[] {maxLength: 10}: A list of up to 10 base64 encoded CAs that will be added to the trust store on all nodes in the cluster. For more information see [Custom CA Trust Certificates](https://learn.microsoft.com/en-us/azure/aks/custom-certificate-authority).
* **defender**: [ManagedClusterSecurityProfileDefender](#managedclustersecurityprofiledefender): Microsoft Defender settings for the security profile.
* **imageCleaner**: [ManagedClusterSecurityProfileImageCleaner](#managedclustersecurityprofileimagecleaner): Image Cleaner settings for the security profile.
* **imageIntegrity**: [ManagedClusterSecurityProfileImageIntegrity](#managedclustersecurityprofileimageintegrity): Image integrity is a feature that works with Azure Policy to verify image integrity by signature. This will not have any effect unless Azure Policy is applied to enforce image signatures. See https://aka.ms/aks/image-integrity for how to use this feature via policy.
* **kubernetesResourceObjectEncryptionProfile**: [KubernetesResourceObjectEncryptionProfile](#kubernetesresourceobjectencryptionprofile): Encryption at rest of Kubernetes resource objects. More information on this can be found under https://aka.ms/aks/kubernetesResourceObjectEncryption
* **nodeRestriction**: [ManagedClusterSecurityProfileNodeRestriction](#managedclustersecurityprofilenoderestriction): [Node Restriction](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#noderestriction) settings for the security profile.
* **workloadIdentity**: [ManagedClusterSecurityProfileWorkloadIdentity](#managedclustersecurityprofileworkloadidentity): Workload identity settings for the security profile. Workload identity enables Kubernetes applications to access Azure cloud resources securely with Azure AD. See https://aka.ms/aks/wi for more details.

## ManagedClusterSecurityProfileDefender
### Properties
* **logAnalyticsWorkspaceResourceId**: string: Resource ID of the Log Analytics workspace to be associated with Microsoft Defender. When Microsoft Defender is enabled, this field is required and must be a valid workspace resource ID. When Microsoft Defender is disabled, leave the field empty.
* **securityGating**: [ManagedClusterSecurityProfileDefenderSecurityGating](#managedclustersecurityprofiledefendersecuritygating): Microsoft Defender settings for security gating, validates container images eligibility for deployment based on Defender for Containers security findings. Using Admission Controller, it either audits or prevents the deployment of images that do not meet security standards.
* **securityMonitoring**: [ManagedClusterSecurityProfileDefenderSecurityMonitoring](#managedclustersecurityprofiledefendersecuritymonitoring): Microsoft Defender threat detection for Cloud settings for the security profile.

## ManagedClusterSecurityProfileDefenderSecurityGating
### Properties
* **allowSecretAccess**: bool: In use only while registry access granted by secret rather than managed identity. Set whether to grant the Defender gating agent access to the cluster's secrets for pulling images from registries. If secret access is denied and the registry requires pull secrets, the add-on will not perform any image validation. Default value is false.
* **enabled**: bool: Whether to enable Defender security gating. When enabled, the gating feature will scan container images and audit or block the deployment of images that do not meet security standards according to the configured security rules.
* **identities**: [ManagedClusterSecurityProfileDefenderSecurityGatingIdentitiesItem](#managedclustersecurityprofiledefendersecuritygatingidentitiesitem)[]: List of identities that the admission controller will make use of in order to pull security artifacts from the registry. These are the same identities used by the cluster to pull container images. Each identity provided should have federated identity credential attached to it.

## ManagedClusterSecurityProfileDefenderSecurityGatingIdentitiesItem
### Properties
* **azureContainerRegistry**: string: The container registry for which the identity will be used; the identity specified here should have a federated identity credential attached to it.
* **identity**: [UserAssignedIdentity](#userassignedidentity): The identity object used to access the registry

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
* **secret**: string {sensitive}: The secret password associated with the service principal in plain text.

## ManagedClusterSKU
### Properties
* **name**: 'Automatic' | 'Base' | string: The name of a managed cluster SKU.
* **tier**: 'Free' | 'Premium' | 'Standard' | string: The tier of a managed cluster SKU. If not specified, the default is 'Free'. See [AKS Pricing Tier](https://learn.microsoft.com/azure/aks/free-standard-pricing-tiers) for more details.

## ManagedClusterSnapshotProperties
### Properties
* **creationData**: [CreationData](#creationdata): CreationData to be used to specify the source resource ID to create this snapshot.
* **managedClusterPropertiesReadOnly**: [ManagedClusterPropertiesForSnapshot](#managedclusterpropertiesforsnapshot) (ReadOnly): What the properties will be showed when getting managed cluster snapshot. Those properties are read-only.
* **snapshotType**: 'ManagedCluster' | 'NodePool' | string: The type of a snapshot. The default is NodePool.

## ManagedClusterStaticEgressGatewayProfile
### Properties
* **enabled**: bool: Enable Static Egress Gateway addon. Indicates if Static Egress Gateway addon is enabled or not.

## ManagedClusterStatus
### Properties
* **provisioningError**: [ErrorDetail](#errordetail) (ReadOnly): The error details information of the managed cluster. Preserves the detailed info of failure. If there was no error, this field is omitted.

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

## ManagedClusterUpgradeProfileProperties
### Properties
* **agentPoolProfiles**: [ManagedClusterPoolUpgradeProfile](#managedclusterpoolupgradeprofile)[] (Required): The list of available upgrade versions for agent pools.
* **controlPlaneProfile**: [ManagedClusterPoolUpgradeProfile](#managedclusterpoolupgradeprofile) (Required): The list of available upgrade versions for the control plane.

## ManagedClusterWindowsProfile
### Properties
* **adminPassword**: string {sensitive}: Specifies the password of the administrator account. <br><br> **Minimum-length:** 8 characters <br><br> **Max-length:** 123 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"
* **adminUsername**: string (Required): Specifies the name of the administrator account. <br><br> **Restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length:** 1 character <br><br> **Max-length:** 20 characters
* **enableCSIProxy**: bool: Whether to enable CSI proxy. For more details on CSI proxy, see the [CSI proxy GitHub repo](https://github.com/kubernetes-csi/csi-proxy).
* **gmsaProfile**: [WindowsGmsaProfile](#windowsgmsaprofile): The Windows gMSA Profile in the Managed Cluster.
* **licenseType**: 'None' | 'Windows_Server' | string: The license type to use for Windows VMs. See [Azure Hybrid User Benefits](https://azure.microsoft.com/pricing/hybrid-benefit/faq/) for more details.

## ManagedClusterWorkloadAutoScalerProfile
### Properties
* **keda**: [ManagedClusterWorkloadAutoScalerProfileKeda](#managedclusterworkloadautoscalerprofilekeda): KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
* **verticalPodAutoscaler**: [ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscaler](#managedclusterworkloadautoscalerprofileverticalpodautoscaler): VPA (Vertical Pod Autoscaler) settings for the workload auto-scaler profile.

## ManagedClusterWorkloadAutoScalerProfileKeda
### Properties
* **enabled**: bool (Required): Whether to enable KEDA.

## ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscaler
### Properties
* **addonAutoscaling**: 'Disabled' | 'Enabled' | string: Whether VPA add-on is enabled and configured to scale AKS-managed add-ons.
* **enabled**: bool (Required): Whether to enable VPA. Default value is false.

## ManagedNamespaceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedServiceIdentityUserAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## ManualScaleProfile
### Properties
* **count**: int: Number of nodes.
* **size**: string: VM size that AKS will use when creating and scaling e.g. 'Standard_E4s_v3', 'Standard_E16s_v3' or 'Standard_D16s_v5'.

## MeshMembershipProperties
### Properties
* **managedMeshID**: string (Required): The ARM resource id for the managed mesh member. This is of the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppLink/applinks/{appLinkName}/appLinkMembers/{appLinkMemberName}'. Visit https://aka.ms/applink for more information.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state of the Mesh Membership.

## MeshRevision
### Properties
* **compatibleWith**: [CompatibleVersions](#compatibleversions)[]: List of items this revision of service mesh is compatible with, and their associated versions.
* **revision**: string: The revision of the mesh release.
* **upgrades**: string[]: List of revisions available for upgrade of a specific mesh revision

## MeshRevisionProfileProperties
### Properties
* **meshRevisions**: [MeshRevision](#meshrevision)[]: Available mesh revisions.

## MeshUpgradeProfileProperties
### Properties
* **compatibleWith**: [CompatibleVersions](#compatibleversions)[]: List of items this revision of service mesh is compatible with, and their associated versions.
* **revision**: string: The revision of the mesh release.
* **upgrades**: string[]: List of revisions available for upgrade of a specific mesh revision

## NamespaceProperties
### Properties
* **adoptionPolicy**: 'Always' | 'IfIdentical' | 'Never' | string: Action if Kubernetes namespace with same name already exists.
* **annotations**: [NamespacePropertiesAnnotations](#namespacepropertiesannotations): The annotations of managed namespace.
* **defaultNetworkPolicy**: [NetworkPolicies](#networkpolicies): The default network policy enforced upon the namespace. Customers can have other Kubernetes network policy objects under the namespace. Network policies are additive; if a policy or policies apply to a given pod for a given direction, the connections allowed in that direction for the pod is the union of what all applicable policies allow.
* **defaultResourceQuota**: [ResourceQuota](#resourcequota): The default resource quota enforced upon the namespace. Customers can have other Kubernetes resource quota objects under the namespace. Resource quotas are additive; if multiple resource quotas are applied to a given namespace, then the effective limit will be one such that all quotas on the namespace can be satisfied.
* **deletePolicy**: 'Delete' | 'Keep' | string: Delete options of a namespace.
* **labels**: [NamespacePropertiesLabels](#namespacepropertieslabels): The labels of managed namespace.
* **portalFqdn**: string (ReadOnly): The special FQDN used by the Azure Portal to access the Managed Cluster. This FQDN is for use only by the Azure Portal and should not be used by other clients. The Azure Portal requires certain Cross-Origin Resource Sharing (CORS) headers to be sent in some responses, which Kubernetes APIServer doesn't handle by default. This special FQDN supports CORS, allowing the Azure Portal to function properly.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state of the namespace.

## NamespacePropertiesAnnotations
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NamespacePropertiesLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NetworkPolicies
### Properties
* **egress**: 'AllowAll' | 'AllowSameNamespace' | 'DenyAll' | string: Enum representing different network policy rules.
* **ingress**: 'AllowAll' | 'AllowSameNamespace' | 'DenyAll' | string: Enum representing different network policy rules.

## NetworkProfileForSnapshot
### Properties
* **loadBalancerSku**: 'basic' | 'standard' | string: loadBalancerSku for managed cluster snapshot.
* **networkMode**: 'bridge' | 'transparent' | string: networkMode for managed cluster snapshot.
* **networkPlugin**: 'azure' | 'kubenet' | 'none' | string: networkPlugin for managed cluster snapshot.
* **networkPluginMode**: 'overlay' | string: NetworkPluginMode for managed cluster snapshot.
* **networkPolicy**: 'azure' | 'calico' | 'cilium' | 'none' | string: networkPolicy for managed cluster snapshot.

## NodeCustomizationProfile
### Properties
* **nodeCustomizationId**: string: The resource ID of the node customization resource to use. This can be a version. Omitting the version will use the latest version of the node customization.

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
* **name**: string: The name of the private link resource. See [naming rules](https://aka.ms/search-naming-rules) for more details.
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
* **weekIndex**: 'First' | 'Fourth' | 'Last' | 'Second' | 'Third' | string (Required): The week index. Specifies on which week of the month the dayOfWeek applies.

## ResourceQuota
### Properties
* **cpuLimit**: string: CPU limit of the namespace in one-thousandth CPU form. See [CPU resource units](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-cpu) for more details.
* **cpuRequest**: string: CPU request of the namespace in one-thousandth CPU form. See [CPU resource units](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-cpu) for more details.
* **memoryLimit**: string: Memory limit of the namespace in the power-of-two equivalents form: Ei, Pi, Ti, Gi, Mi, Ki. See [Memory resource units](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-memory) for more details.
* **memoryRequest**: string: Memory request of the namespace in the power-of-two equivalents form: Ei, Pi, Ti, Gi, Mi, Ki. See [Memory resource units](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-memory) for more details.

## ResourceReference
### Properties
* **id**: string: The fully qualified Azure resource id.

## SafeguardsAvailableVersionsProperties
### Properties
* **isDefaultVersion**: bool (ReadOnly): Whether this is the default version.
* **support**: 'Preview' | 'Stable' | string (ReadOnly): Whether the version is preview or stable.

## ScaleProfile
### Properties
* **autoscale**: [AutoScaleProfile](#autoscaleprofile): Specifications on how to auto-scale the VirtualMachines agent pool within a predefined size range.
* **manual**: [ManualScaleProfile](#manualscaleprofile)[]: Specifications on how to scale the VirtualMachines agent pool to a fixed size.

## Schedule
### Properties
* **absoluteMonthly**: [AbsoluteMonthlySchedule](#absolutemonthlyschedule): For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'.
* **daily**: [DailySchedule](#dailyschedule): For schedules like: 'recur every day' or 'recur every 3 days'.
* **relativeMonthly**: [RelativeMonthlySchedule](#relativemonthlyschedule): For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
* **weekly**: [WeeklySchedule](#weeklyschedule): For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.

## SchedulerInstanceProfile
### Properties
* **schedulerConfigMode**: 'Default' | 'ManagedByCRD' | string: The config customization mode for this scheduler instance.

## SchedulerProfile
### Properties
* **schedulerInstanceProfiles**: [SchedulerProfileSchedulerInstanceProfiles](#schedulerprofileschedulerinstanceprofiles): Mapping of each scheduler instance to its profile.

## SchedulerProfileSchedulerInstanceProfiles
### Properties
* **upstream**: [SchedulerInstanceProfile](#schedulerinstanceprofile): The scheduler profile for the upstream scheduler instance.

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
* **osSku**: 'AzureLinux' | 'AzureLinux3' | 'CBLMariner' | 'Flatcar' | 'Mariner' | 'Ubuntu' | 'Ubuntu2204' | 'Ubuntu2404' | 'Windows2019' | 'Windows2022' | 'Windows2025' | 'WindowsAnnual' | string (ReadOnly): Specifies the OS SKU used by the agent pool. The default is Ubuntu if OSType is Linux. The default is Windows2019 when Kubernetes <= 1.24 or Windows2022 when Kubernetes >= 1.25 if OSType is Windows.
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
* **hourSlots**: (int {minValue: 0, maxValue: 23})[]: A list of hours in the day used to identify a time range. Each integer hour represents a time range beginning at 0m after the hour ending at the next hour (non-inclusive). 0 corresponds to 00:00 UTC, 23 corresponds to 23:00 UTC. Specifying [0, 1] means the 00:00 - 02:00 UTC time range.

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
* **enabled**: bool: Whether to enable Windows gMSA. Specifies whether to enable Windows gMSA in the managed cluster.
* **rootDomainName**: string: Specifies the root domain name for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.

