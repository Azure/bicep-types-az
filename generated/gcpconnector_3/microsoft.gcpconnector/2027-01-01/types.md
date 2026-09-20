# Microsoft.GcpConnector @ 2027-01-01

## Resource Microsoft.GcpConnector/containerClusters@2027-01-01
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2027-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.GcpConnector/containerClusters' (ReadOnly, DeployTimeConstant): The resource type

## AcceleratorConfig
### Properties
* **acceleratorCount**: string: The number of the accelerator cards exposed to an instance
* **acceleratorType**: string: The accelerator type resource name
* **gpuDriverInstallationConfig**: [GpuDriverInstallationConfig](#gpudriverinstallationconfig): The configuration for auto-installing GPU driver
* **gpuPartitionSize**: string: Size of partitions to create on the GPU
* **gpuSharingConfig**: [GpuSharingConfig](#gpusharingconfig): The configuration for GPU sharing options

## AdditionalNodeNetworkConfig
### Properties
* **network**: string: Name of the VPC where the additional interface belongs.
* **subnetwork**: string: Name of the subnetwork where the additional interface belongs.

## AdditionalPodNetworkConfig
### Properties
* **maxPodsPerNode**: [MaxPodsConstraint](#maxpodsconstraint): The maximum number of pods per node which use this pod network.
* **secondaryPodRange**: string: Name of the secondary range on the subnetwork.
* **subnetwork**: string: Name of the subnetwork where the additional pod network belongs.

## AdditionalPodRangesConfig
### Properties
* **podRangeInfo**: [RangeInfo](#rangeinfo)[]: Output only. [Output only] Information for additional pod range.
* **podRangeNames**: string[]: Name for pod secondary ipv4 range which has the actual range defined ahead.

## AddonsConfig
### Properties
* **cloudRunConfig**: [CloudRunConfig](#cloudrunconfig): Configuration for the Cloud Run addon
* **configConnectorConfig**: [ConfigConnectorConfig](#configconnectorconfig): Configuration for the Config Connector addon
* **dnsCacheConfig**: [DnsCacheConfig](#dnscacheconfig): Configuration for the DNS Cache addon
* **gcePersistentDiskCsiDriverConfig**: [GcePersistentDiskCsiDriverConfig](#gcepersistentdiskcsidriverconfig): Configuration for the GCE Persistent Disk CSI Driver addon
* **gcpFilestoreCsiDriverConfig**: [GcpFilestoreCsiDriverConfig](#gcpfilestorecsidriverconfig): Configuration for the GCP Filestore CSI Driver addon
* **gcsFuseCsiDriverConfig**: [GcsFuseCsiDriverConfig](#gcsfusecsidriverconfig): Configuration for the GCS Fuse CSI Driver addon
* **gkeBackupAgentConfig**: [GkeBackupAgentConfig](#gkebackupagentconfig): Configuration for the GKE Backup Agent addon
* **highScaleCheckpointingConfig**: [HighScaleCheckpointingConfig](#highscalecheckpointingconfig): Configuration for the High Scale Checkpointing addon
* **horizontalPodAutoscaling**: [HorizontalPodAutoscaling](#horizontalpodautoscaling): Configuration for the Horizontal Pod Autoscaling addon
* **httpLoadBalancing**: [HttpLoadBalancing](#httploadbalancing): Configuration for the HTTP Load Balancing addon
* **kubernetesDashboard**: [KubernetesDashboard](#kubernetesdashboard): Configuration for the Kubernetes Dashboard addon
* **lustreCsiDriverConfig**: [LustreCsiDriverConfig](#lustrecsidriverconfig): Configuration for the Lustre CSI Driver addon
* **networkPolicyConfig**: [NetworkPolicyConfig](#networkpolicyconfig): Configuration for the Network Policy addon
* **parallelstoreCsiDriverConfig**: [ParallelstoreCsiDriverConfig](#parallelstorecsidriverconfig): Configuration for the Parallelstore CSI Driver addon
* **rayOperatorConfig**: [RayOperatorConfig](#rayoperatorconfig): Configuration for the Ray Operator addon
* **statefulHaConfig**: [StatefulHaConfig](#statefulhaconfig): Configuration for the Stateful HA addon

## AdvancedMachineFeatures
### Properties
* **enableNestedVirtualization**: bool: Whether or not to enable nested virtualization
* **threadsPerCore**: string: The number of threads per physical core

## AuthenticatorGroupsConfig
### Properties
* **enabled**: bool: Whether Google Groups for RBAC and IAM are enabled
* **securityGroup**: string: The name of the security group for the cluster

## Autopilot
### Properties
* **enabled**: bool: Whether the cluster is an Autopilot cluster

## AutoprovisioningNodePoolDefaults
### Properties
* **bootDiskKmsKey**: string: Boot disk KMS key for NAP created node pools
* **diskSizeGb**: string: Size of the disk attached to each node
* **diskType**: string: Type of the disk attached to each node
* **enableSpotInstances**: bool: Whether the nodes are created as spot VM instances or not
* **imageType**: string: The image type to use for NAP created node pools
* **insecureKubeletReadonlyPortEnabled**: bool: Whether the nodes are preemptible or not
* **management**: [NodeManagement](#nodemanagement): The node management for NAP created node pools
* **minCpuPlatform**: string: Minimum CPU platform for NAP created node pools
* **oauthScopes**: string[]: Scopes that are used by NAP when creating node pools
* **resourceLabels**: [AutoprovisioningNodePoolDefaultsResourceLabels](#autoprovisioningnodepooldefaultsresourcelabels): Resource labels for NAP created node pools
* **resourceManagerTags**: [ResourceManagerTags](#resourcemanagertags): Resource manager tags for NAP created node pools
* **serviceAccount**: string: The Google Cloud Platform Service Account to be used by the node VMs
* **shieldedInstanceConfig**: [ShieldedInstanceConfig](#shieldedinstanceconfig): Shielded Instance options for NAP created node pools
* **upgradeSettings**: [UpgradeSettings](#upgradesettings): Upgrade settings for NAP created node pools

## AutoprovisioningNodePoolDefaultsResourceLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BestEffortProvisioning
### Properties
* **enabled**: bool: When this is enabled, cluster/node pool creations will ignore non-fatal errors like stockout to best provision as many nodes as possible.
* **minProvisionNodes**: int: Minimum number of nodes to be provisioned.

## BigQueryDestination
### Properties
* **datasetId**: string: The BigQuery dataset ID

## BinaryAuthorization
### Properties
* **enabled**: bool: Whether Binary Authorization is enabled for this cluster
* **evaluationMode**: 'DISABLED' | 'EVALUATION_MODE_UNSPECIFIED' | 'PROJECT_SINGLETON_POLICY_ENFORCE' | string: Mode of operation for Binary Authorization policy evaluation

## BlueGreenInfo
### Properties
* **blueInstanceGroupUrls**: string[]: The resource URLs of the managed instance groups associated with blue pool.
* **bluePoolDeletionStartTime**: string: Time to start deleting blue pool to complete blue-green upgrade.
* **greenInstanceGroupUrls**: string[]: The resource URLs of the managed instance groups associated with green pool.
* **greenPoolVersion**: string: The resource name of the green pool.
* **phase**: 'CORDONING_BLUE_POOL' | 'CREATING_GREEN_POOL' | 'DELETING_BLUE_POOL' | 'DRAINING_BLUE_POOL' | 'NODE_POOL_SOAKING' | 'PHASE_UNSPECIFIED' | 'ROLLBACK_STARTED' | 'UPDATE_STARTED' | string: Current blue-green upgrade phase.

## BlueGreenSettings
### Properties
* **nodePoolSoakDuration**: string: Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.
* **standardRolloutPolicy**: [StandardRolloutPolicy](#standardrolloutpolicy): Standard policy for the blue-green upgrade.

## CidrBlock
### Properties
* **cidrBlock**: string: The CIDR block in IPv4 or IPv6 format
* **displayName**: string: An optional field for users to identify CIDR blocks

## ClientCertificateConfig
### Properties
* **issueClientCertificate**: bool: Issue a client certificate.

## CloudRunConfig
### Properties
* **disabled**: bool: Whether the Cloud Run addon is disabled
* **loadBalancerType**: 'LOAD_BALANCER_TYPE_EXTERNAL' | 'LOAD_BALANCER_TYPE_INTERNAL' | 'LOAD_BALANCER_TYPE_UNSPECIFIED' | string: The load balancer type for Cloud Run

## ClusterAutoscaling
### Properties
* **autoprovisioningLocations**: string[]: The list of Google Compute Engine zones in which the NodePool's nodes can be created by NAP
* **autoprovisioningNodePoolDefaults**: [AutoprovisioningNodePoolDefaults](#autoprovisioningnodepooldefaults): AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP
* **autoscalingProfile**: 'BALANCED' | 'OPTIMIZE_UTILIZATION' | 'PROFILE_UNSPECIFIED' | string: Defines the autoscaling behavior
* **defaultComputeClassConfig**: [DefaultComputeClassConfig](#defaultcomputeclassconfig): Default configuration for the Compute Class of the node pool
* **enableNodeAutoprovisioning**: bool: Enables automatic node pool creation and deletion
* **resourceLimits**: [ResourceLimit](#resourcelimit)[]: Contains global constraints regarding minimum and maximum amount of resources in the cluster

## ClusterNetworkPerformanceConfig
### Properties
* **totalEgressBandwidthTier**: 'TIER_1' | 'TIER_UNSPECIFIED' | string: Total egress bandwidth tier for the cluster

## ClusterProperties
### Properties
* **gcpProjectId**: string: GCP Project Id
* **gcpProjectNumber**: string: GCP Project Number
* **gcpProperties**: [GcpContainerClusterProperties](#gcpcontainerclusterproperties): GCP Properties
* **gcpRegion**: string: GCP Region
* **gcpSourceSchema**: string: GCP Source Schema
* **gcpTags**: [ClusterPropertiesGcpTags](#clusterpropertiesgcptags): GCP Tags
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **publicCloudConnectorsResourceId**: string: Public Cloud Connectors Resource ID
* **publicCloudResourceName**: string: Public Cloud Resource Name
* **resourceName**: string: Fully qualified resource name of the GCP resource

## ClusterPropertiesGcpTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConfidentialNodes
### Properties
* **confidentialInstanceType**: 'CONFIDENTIAL_INSTANCE_TYPE_UNSPECIFIED' | 'SEV' | 'SEV_SNP' | 'TDX' | string: The type of Confidential Compute offering used by the node pool
* **enabled**: bool: Whether Confidential Nodes feature is enabled for this cluster

## ConfigConnectorConfig
### Properties
* **enabled**: bool: Whether the Config Connector addon is enabled

## ConsumptionMeteringConfig
### Properties
* **enabled**: bool: Whether consumption metering is enabled

## CostManagementConfig
### Properties
* **enabled**: bool: Whether the cost management feature is enabled

## DailyMaintenanceWindow
### Properties
* **duration**: string: Duration of the maintenance window
* **startTime**: string: Time of day the maintenance window starts

## DatabaseEncryption
### Properties
* **currentState**: 'CURRENT_STATE_ALL_OBJECTS_ENCRYPTION_ENABLED' | 'CURRENT_STATE_ALL_OBJECTS_ENCRYPTION_ERROR' | 'CURRENT_STATE_ALL_OBJECTS_ENCRYPTION_PENDING' | 'CURRENT_STATE_DECRYPTED' | 'CURRENT_STATE_DECRYPTION_ERROR' | 'CURRENT_STATE_DECRYPTION_PENDING' | 'CURRENT_STATE_ENCRYPTED' | 'CURRENT_STATE_ENCRYPTION_ERROR' | 'CURRENT_STATE_ENCRYPTION_PENDING' | 'CURRENT_STATE_UNSPECIFIED' | string: Current state of the database encryption
* **decryptionKeys**: string[]: List of decryption keys used for encryption
* **keyName**: string: Name of CloudKMS key to use for the encryption of secrets
* **lastOperationErrors**: [OperationError](#operationerror)[]: Errors that occurred during the last operation
* **state**: 'ALL_OBJECTS_ENCRYPTION_ENABLED' | 'DECRYPTED' | 'ENCRYPTED' | 'UNKNOWN' | string: Encryption state

## DefaultComputeClassConfig
### Properties
* **computeClass**: 'ARM64' | 'BALANCED' | 'COMPUTE_CLASS_UNSPECIFIED' | 'MEMORY_OPTIMIZED' | 'PERFORMANCE' | string: The compute class to use for NAP created node pools

## DefaultSnatStatus
### Properties
* **disabled**: bool: Whether SNAT is disabled

## DnsCacheConfig
### Properties
* **enabled**: bool: Whether the DNS Cache addon is enabled

## DnsConfig
### Properties
* **additionalDnsSearchDomains**: string[]: Additional DNS search domains
* **customDnsEndpoint**: string: Custom DNS endpoint for the cluster
* **dnsScope**: 'CLUSTER_SCOPE' | 'DNS_SCOPE_UNSPECIFIED' | 'VPC_SCOPE' | string: DNS scope for the cluster

## EnterpriseConfig
### Properties
* **enableEnterpriseFeatures**: bool: Whether enterprise features are enabled
* **enterpriseProjectId**: string: The enterprise project ID associated with this cluster
* **enterpriseTier**: 'CLUSTER_TIER_UNSPECIFIED' | 'ENTERPRISE' | 'STANDARD' | string: The enterprise tier level

## EphemeralStorageLocalSsdConfig
### Properties
* **localSsdCount**: int: Number of local SSD disks to use to back ephemeral storage

## FastSocket
### Properties
* **enabled**: bool: Whether or not NCCL Fast Socket is enabled

## Filter
### Properties
* **eventType**: ('EVENT_TYPE_UNSPECIFIED' | 'SECURITY_BULLETIN_EVENT' | 'UPGRADE_AVAILABLE_EVENT' | 'UPGRADE_EVENT' | 'UPGRADE_INFO_EVENT' | string)[]: Event types to include in the filter

## Fleet
### Properties
* **project**: string: The project number for the fleet host project

## GatewayApiConfig
### Properties
* **channel**: 'CHANNEL_DISABLED' | 'CHANNEL_EXPERIMENTAL' | 'CHANNEL_STANDARD' | 'CHANNEL_UNSPECIFIED' | string: The Gateway API release channel to subscribe to

## GcePersistentDiskCsiDriverConfig
### Properties
* **enabled**: bool: Whether the GCE Persistent Disk CSI Driver addon is enabled

## GcfsConfig
### Properties
* **enabled**: bool: Whether to use GCFS or not

## GcpContainerClusterProperties
### Properties
* **addonsConfig**: [AddonsConfig](#addonsconfig): Configurations for the various addons available to run in the cluster.
* **authenticatorGroupsConfig**: [AuthenticatorGroupsConfig](#authenticatorgroupsconfig): Configuration controlling RBAC group membership information.
* **autopilot**: [Autopilot](#autopilot): Autopilot configuration for the cluster.
* **autoscaling**: [ClusterAutoscaling](#clusterautoscaling): Cluster-level autoscaling configuration.
* **binaryAuthorization**: [BinaryAuthorization](#binaryauthorization): Configuration for Binary Authorization.
* **clusterIpv4Cidr**: string: The IP address range of the container pods in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`). Leave blank to have one automatically chosen or specify a `/14` block in `10.0.0.0/8`.
* **conditions**: [StatusCondition](#statuscondition)[]: Which conditions caused the current cluster state.
* **confidentialNodes**: [ConfidentialNodes](#confidentialnodes): Configuration of Confidential Nodes. All the nodes in the cluster will be Confidential VM once enabled.
* **costManagementConfig**: [CostManagementConfig](#costmanagementconfig): Configuration for the fine-grained cost management feature.
* **createTime**: string: [Output only] The time the cluster was created, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
* **currentMasterVersion**: string: [Output only] The current software version of the master endpoint.
* **currentNodeCount**: int: [Output only] The number of nodes currently in the cluster. Deprecated. Call Kubernetes API directly to retrieve node information.
* **currentNodeVersion**: string: [Output only] Deprecated, use [NodePools.version](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools) instead. The current version of the node software components. If they are currently at multiple versions because they're in the process of being upgraded, this reflects the minimum version of all nodes.
* **databaseEncryption**: [DatabaseEncryption](#databaseencryption): Configuration of etcd encryption.
* **defaultMaxPodsConstraint**: [MaxPodsConstraint](#maxpodsconstraint): The default constraint on the maximum number of pods that can be run simultaneously on a node in the node pool of this cluster. Only honored if cluster created with IP Alias support.
* **description**: string: An optional description of this cluster.
* **enableK8sBetaApis**: [K8SBetaApiConfig](#k8sbetaapiconfig): Beta APIs Config
* **enableKubernetesAlpha**: bool: Kubernetes alpha features are enabled on this cluster. This includes alpha API groups (e.g. v1alpha1) and features that may not be production ready in the kubernetes version of the master and nodes. The cluster has no SLA for uptime and master/node upgrades are disabled. Alpha enabled clusters are automatically deleted thirty days after creation.
* **enableTpu**: bool: Enable the ability to use Cloud TPUs in this cluster.
* **endpoint**: string: [Output only] The IP address of this cluster's master endpoint. The endpoint can be accessed from the internet at `https://username:password@endpoint/`. See the `masterAuth` property of this resource for username and password information.
* **enterpriseConfig**: [EnterpriseConfig](#enterpriseconfig): GKE Enterprise Configuration.
* **etag**: string: This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding.
* **expireTime**: string: [Output only] The time the cluster will be automatically deleted in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
* **fleet**: [Fleet](#fleet): Fleet information for the cluster.
* **id**: string: Output only. Unique id for the cluster.
* **identityServiceConfig**: [IdentityServiceConfig](#identityserviceconfig): Configuration for Identity Service component.
* **initialClusterVersion**: string: The initial Kubernetes version for this cluster. Valid versions are those found in validMasterVersions returned by getServerConfig. The version can be upgraded over time; such upgrades are reflected in currentMasterVersion and currentNodeVersion. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "","-": picks the default Kubernetes version
* **initialNodeCount**: int: The number of nodes to create in this cluster. You must ensure that your Compute Engine [resource quota](https://cloud.google.com/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "node_config") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. This field is deprecated, use node_pool.initial_node_count instead.
* **instanceGroupUrls**: string[]: Deprecated. Use node_pools.instance_group_urls.
* **ipAllocationPolicy**: [IpAllocationPolicy](#ipallocationpolicy): Configuration for cluster IP allocation.
* **labelFingerprint**: string: The fingerprint of the set of labels for this cluster.
* **legacyAbac**: [LegacyAbac](#legacyabac): Configuration for the legacy ABAC authorization mode.
* **location**: string: [Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) or [region](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) in which the cluster resides.
* **locations**: string[]: The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. This field provides a default value if [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) are not specified during node pool creation. Warning: changing cluster locations will update the [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) of all node pools and will result in nodes being added and/or removed.
* **loggingConfig**: [LoggingConfig](#loggingconfig): Logging configuration for the cluster.
* **loggingService**: string: The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.
* **maintenancePolicy**: [MaintenancePolicy](#maintenancepolicy): Configure the maintenance policy for this cluster.
* **masterAuth**: [MasterAuth](#masterauth): The authentication information for accessing the master endpoint. If unspecified, the defaults are used: For clusters before v1.12, if master_auth is unspecified, `username` will be set to "admin", a random password will be generated, and a client certificate will be issued.
* **masterAuthorizedNetworksConfig**: [MasterAuthorizedNetworksConfig](#masterauthorizednetworksconfig): The configuration options for master authorized networks feature.
* **meshCertificates**: [MeshCertificates](#meshcertificates): Configuration for issuance of mTLS keys and certificates to Kubernetes pods.
* **monitoringConfig**: [MonitoringConfig](#monitoringconfig): Monitoring configuration for the cluster.
* **monitoringService**: string: The monitoring service the cluster should use to write metrics. Currently available options: * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.
* **name**: string: The name of this cluster. The name must be unique within this project and location (e.g. zone or region), and can be up to 40 characters with the following restrictions: * Lowercase letters, numbers, and hyphens only. * Must start with a letter. * Must end with a number or a letter.
* **network**: string: The name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. If left unspecified, the `default` network will be used.
* **networkConfig**: [NetworkConfig](#networkconfig): Configuration for cluster networking.
* **networkPolicy**: [NetworkPolicy](#networkpolicy): Configuration options for the NetworkPolicy feature.
* **nodeConfig**: [NodeConfig](#nodeconfig): Parameters used in creating the cluster's nodes. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "initial_node_count") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. For responses, this field will be populated with the node configuration of the first node pool. (For configuration of each node pool, see `node_pool.config`) If unspecified, the defaults are used. This field is deprecated, use node_pool.config instead.
* **nodeIpv4CidrSize**: int: [Output only] The size of the address space on each node for hosting containers. This is provisioned from within the `container_ipv4_cidr` range. This field will only be set when cluster is in route-based network mode.
* **nodePoolAutoConfig**: [NodePoolAutoConfig](#nodepoolautoconfig): Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters.
* **nodePoolDefaults**: [NodePoolDefaults](#nodepooldefaults): Default NodePool settings for the entire cluster. These settings are overridden if specified on the specific NodePool object.
* **nodePools**: [NodePool](#nodepool)[]: The node pools associated with this cluster. This field should not be set if "node_config" or "initial_node_count" are specified.
* **notificationConfig**: [NotificationConfig](#notificationconfig): Notification configuration of the cluster.
* **parentProductConfig**: [ParentProductConfig](#parentproductconfig): The configuration of the parent product of the cluster. This field is used by Google internal products that are built on top of the GKE cluster and take the ownership of the cluster.
* **privateClusterConfig**: [PrivateClusterConfig](#privateclusterconfig): Configuration for private cluster.
* **releaseChannel**: [ReleaseChannel](#releasechannel): Release channel configuration. If left unspecified on cluster creation and a version is specified, the cluster is enrolled in the most mature release channel where the version is available (first checking STABLE, then REGULAR, and finally RAPID). Otherwise, if no release channel configuration and no version is specified, the cluster is enrolled in the REGULAR channel with its default version.
* **resourceLabels**: [GcpContainerClusterPropertiesResourceLabels](#gcpcontainerclusterpropertiesresourcelabels): The resource labels for the cluster to use to annotate any related Google Compute Engine resources.
* **resourceUsageExportConfig**: [ResourceUsageExportConfig](#resourceusageexportconfig): Configuration for exporting resource usages. Resource usage export is disabled when this config is unspecified.
* **securityPostureConfig**: [SecurityPostureConfig](#securitypostureconfig): Enable/Disable Security Posture API features for the cluster.
* **selfLink**: string: [Output only] Server-defined URL for the resource.
* **servicesIpv4Cidr**: string: [Output only] The IP address range of the Kubernetes services in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). Service addresses are typically put in the last `/16` from the container CIDR.
* **shieldedNodes**: [ShieldedNodes](#shieldednodes): Shielded Nodes configuration.
* **status**: 'DEGRADED' | 'ERROR' | 'PROVISIONING' | 'RECONCILING' | 'RUNNING' | 'STATUS_UNSPECIFIED' | 'STOPPING' | string: [Output only] The current status of this cluster.
* **statusMessage**: string: [Output only] Deprecated. Use conditions instead. Additional information about the current status of this cluster, if available.
* **subnetwork**: string: The name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/subnetworks) to which the cluster is connected.
* **tpuIpv4CidrBlock**: string: [Output only] The IP address range of the Cloud TPUs in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`).
* **verticalPodAutoscaling**: [VerticalPodAutoscaling](#verticalpodautoscaling): Cluster-level Vertical Pod Autoscaling configuration.
* **workloadIdentityConfig**: [WorkloadIdentityConfig](#workloadidentityconfig): Configuration for the use of Kubernetes Service Accounts in GCP IAM policies.
* **zone**: string: [Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use location instead.

## GcpContainerClusterPropertiesResourceLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GcpFilestoreCsiDriverConfig
### Properties
* **enabled**: bool: Whether the GCP Filestore CSI Driver addon is enabled

## GcsFuseCsiDriverConfig
### Properties
* **enabled**: bool: Whether the GCS Fuse CSI Driver addon is enabled

## GkeBackupAgentConfig
### Properties
* **enabled**: bool: Whether the GKE Backup Agent addon is enabled

## GpuDriverInstallationConfig
### Properties
* **gpuDriverVersion**: 'DEFAULT' | 'GPU_DRIVER_VERSION_UNSPECIFIED' | 'INSTALLATION_DISABLED' | 'LATEST' | string: Mode for how the GPU driver is installed

## GpuSharingConfig
### Properties
* **gpuSharingStrategy**: 'GPU_SHARING_STRATEGY_UNSPECIFIED' | 'MPS' | 'TIME_SHARING' | string: The type of GPU sharing strategy to enable on the GPU node
* **maxSharedClientsPerGpu**: string: The max number of containers that can share a physical GPU

## HighScaleCheckpointingConfig
### Properties
* **enabled**: bool: Whether the High Scale Checkpointing addon is enabled

## HorizontalPodAutoscaling
### Properties
* **disabled**: bool: Whether the Horizontal Pod Autoscaling addon is disabled

## HttpLoadBalancing
### Properties
* **disabled**: bool: Whether the HTTP Load Balancing addon is disabled

## IdentityServiceConfig
### Properties
* **enabled**: bool: Whether Identity Service is enabled for this cluster

## IpAllocationPolicy
### Properties
* **additionalPodRangesConfig**: [AdditionalPodRangesConfig](#additionalpodrangesconfig): Output only. [Output only] The additional pod ranges that are added to the cluster. These pod ranges can be used by new node pools to allocate pod IPs automatically. Once the range is removed it will not show up in IPAllocationPolicy.
* **clusterIpv4Cidr**: string: This field is deprecated, use cluster_ipv4_cidr_block.
* **clusterIpv4CidrBlock**: string: The IP address range for the cluster pod IPs. If this field is set, then `cluster.cluster_ipv4_cidr` must be left blank. This field is only applicable when `use_ip_aliases` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use.
* **clusterSecondaryRangeName**: string: The name of the secondary range to be used for the cluster CIDR block. The secondary range will be used for pod IP addresses. This must be an existing secondary range associated with the cluster subnetwork. This field is only applicable with use_ip_aliases is true and create_subnetwork is false.
* **createSubnetwork**: bool: Whether a new subnetwork will be created automatically for the cluster. This field is only applicable when `use_ip_aliases` is true.
* **defaultPodIpv4RangeUtilization**: int: Output only. [Output only] The utilization of the cluster default IPv4 range for the pod. The ratio is Usage/[Total number of IPs in the secondary range], Usage=numNodes*numZones*podIPsPerNode.
* **ipv6AccessType**: 'EXTERNAL' | 'INTERNAL' | 'IPV6_ACCESS_TYPE_UNSPECIFIED' | string: The ipv6 access type (internal or external) when create_subnetwork is true
* **nodeIpv4Cidr**: string: This field is deprecated, use node_ipv4_cidr_block.
* **nodeIpv4CidrBlock**: string: The IP address range of the instance IPs in this cluster. This is applicable only if `create_subnetwork` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use.
* **podCidrOverprovisionConfig**: [PodCidrOverprovisionConfig](#podcidroverprovisionconfig): [PRIVATE FIELD] Pod CIDR size overprovisioning config for the cluster. Pod CIDR size per node depends on max_pods_per_node. By default, the value of max_pods_per_node is doubled and then rounded off to next power of 2 to get the size of pod CIDR block per node. Example: max_pods_per_node of 30 would result in 64 IPs (/26). This config can disable the doubling of IPs (we still round off to next power of 2) Example: max_pods_per_node of 30 will result in 32 IPs (/27) when overprovisioning is disabled.
* **servicesIpv4Cidr**: string: This field is deprecated, use services_ipv4_cidr_block.
* **servicesIpv4CidrBlock**: string: The IP address range of the services IPs in this cluster. If blank, a range will be automatically chosen with the default size. This field is only applicable when `use_ip_aliases` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use.
* **servicesIpv6CidrBlock**: string: Output only. [Output only] The services IPv6 CIDR block for the cluster.
* **servicesSecondaryRangeName**: string: The name of the secondary range to be used as for the services CIDR block. The secondary range will be used for service ClusterIPs. This must be an existing secondary range associated with the cluster subnetwork. This field is only applicable with use_ip_aliases is true and create_subnetwork is false.
* **stackType**: 'IPV4' | 'IPV4_IPV6' | 'STACK_TYPE_UNSPECIFIED' | string: The IP stack type of the cluster
* **subnetIpv6CidrBlock**: string: Output only. [Output only] The subnet's IPv6 CIDR block used by nodes and pods.
* **subnetworkName**: string: A custom subnetwork name to be used if `create_subnetwork` is true. If this field is empty, then an automatic name will be chosen for the new subnetwork.
* **tpuIpv4CidrBlock**: string: The IP address range of the Cloud TPUs in this cluster. If unspecified, a range will be automatically chosen with the default size. This field is only applicable when `use_ip_aliases` is true. If unspecified, the range will use the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use.
* **useIpAliases**: bool: Whether alias IPs will be used for pod IPs in the cluster. This is used in conjunction with use_routes. It cannot be true if use_routes is true. If both use_ip_aliases and use_routes are false, then the server picks the default IP allocation mode
* **useRoutes**: bool: Whether routes will be used for pod IPs in the cluster. This is used in conjunction with use_ip_aliases. It cannot be true if use_ip_aliases is true. If both use_ip_aliases and use_routes are false, then the server picks the default IP allocation mode

## K8SBetaApiConfig
### Properties
* **allowedBetaApis**: string[]: List of allowed Beta APIs
* **enableBetaApis**: bool: Whether Beta APIs are enabled

## KubernetesDashboard
### Properties
* **disabled**: bool: Whether the Kubernetes Dashboard addon is disabled

## LegacyAbac
### Properties
* **enabled**: bool: Whether the Legacy Authorization mode is enabled
* **provider**: string: The provider of the legacy ABAC authorization mode

## LinuxNodeConfig
### Properties
* **cgroupMode**: 'CGROUP_MODE_UNSPECIFIED' | 'CGROUP_MODE_V1' | 'CGROUP_MODE_V2' | string: cgroup_mode specifies the cgroup mode to be used on the node
* **sysctls**: [LinuxNodeConfigSysctls](#linuxnodeconfigsysctls): The Linux kernel parameters to be applied to the nodes and all pods running on the nodes

## LinuxNodeConfigSysctls
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LocalNvmeSsdBlockConfig
### Properties
* **localSsdCount**: int: Number of raw-block local NVMe SSD disks to be attached to the node

## LoggingComponentConfig
### Properties
* **enableComponents**: ('APISERVER' | 'COMPONENT_UNSPECIFIED' | 'CONTROLLER_MANAGER' | 'KCP_CONNECTION' | 'KCP_HPA' | 'KCP_SSHD' | 'KCP_VPA' | 'SCHEDULER' | 'SYSTEM_COMPONENTS' | 'WORKLOADS' | string)[]: Select components to collect logs. An empty set would disable all logging.

## LoggingConfig
### Properties
* **componentConfig**: [LoggingComponentConfig](#loggingcomponentconfig): Logging components configuration

## LoggingVariantConfig
### Properties
* **variant**: 'DEFAULT' | 'MAX_THROUGHPUT' | 'VARIANT_UNSPECIFIED' | string: Logging variant deployed on nodes

## LustreCsiDriverConfig
### Properties
* **enabled**: bool: Whether the Lustre CSI Driver addon is enabled

## MaintenanceExclusion
### Properties
* **exclusionOptions**: [MaintenanceExclusionOptions](#maintenanceexclusionoptions): The scope of the exclusion
* **window**: [TimeWindow](#timewindow): The time window during which maintenance is excluded

## MaintenanceExclusionOptions
### Properties
* **scope**: 'NO_MINOR_OR_NODE_UPGRADES' | 'NO_MINOR_UPGRADES' | 'NO_UPGRADES' | string: The scope of automatic upgrades to restrict

## MaintenancePolicy
### Properties
* **resourceVersion**: string: A hash identifying the version of this policy, so that updates to fields of the policy won't accidentally undo intermediate changes
* **window**: [MaintenanceWindow](#maintenancewindow): Specifies the maintenance window for this cluster

## MaintenanceWindow
### Properties
* **dailyMaintenanceWindow**: [DailyMaintenanceWindow](#dailymaintenancewindow): Daily maintenance window configuration
* **maintenanceExclusions**: [MaintenanceWindowMaintenanceExclusions](#maintenancewindowmaintenanceexclusions): Exceptions to maintenance window
* **recurringWindow**: [RecurringTimeWindow](#recurringtimewindow): Recurring maintenance window configuration

## MaintenanceWindowMaintenanceExclusions
### Properties
### Additional Properties
* **Additional Properties Type**: [MaintenanceExclusion](#maintenanceexclusion)

## MasterAuth
### Properties
* **clientCertificate**: string: Base64-encoded public certificate used by clients to authenticate to the cluster endpoint. Issued only if clientCertificateConfig is set.
* **clientCertificateConfig**: [ClientCertificateConfig](#clientcertificateconfig): Configuration for client certificate authentication on the cluster.
* **clientKey**: string {sensitive}: Base64-encoded private key used by clients to authenticate to the cluster endpoint.
* **clusterCaCertificate**: string: Base64-encoded public certificate used as the root of trust for the cluster.
* **password**: string {sensitive}: The password to use for HTTP basic authentication.
* **username**: string: The username to use for HTTP basic authentication.

## MasterAuthorizedNetworksConfig
### Properties
* **cidrBlocks**: [CidrBlock](#cidrblock)[]: External networks that can access Kubernetes master through HTTPS
* **enabled**: bool: Whether or not master authorized networks is enabled
* **gcpPublicCidrsAccessEnabled**: bool: Whether access from Google Cloud public IP addresses is enabled
* **privateEndpointEnforcementEnabled**: bool: Whether private endpoint enforcement is enabled

## MaxPodsConstraint
### Properties
* **maxPodsPerNode**: string: The maximum number of pods that can run on a node

## MeshCertificates
### Properties
* **enableCertificates**: bool: Whether to enable certificates for service mesh

## MonitoringComponentConfig
### Properties
* **enableComponents**: ('APISERVER' | 'CADVISOR' | 'COMPONENT_UNSPECIFIED' | 'CONTROLLER_MANAGER' | 'DAEMONSET' | 'DCGM' | 'DEPLOYMENT' | 'HPA' | 'JOBSET' | 'KUBELET' | 'POD' | 'SCHEDULER' | 'STATEFULSET' | 'STORAGE' | 'SYSTEM_COMPONENTS' | string)[]: Select components to collect metrics. An empty set would disable all monitoring.

## MonitoringConfig
### Properties
* **componentConfig**: [MonitoringComponentConfig](#monitoringcomponentconfig): Monitoring components configuration

## NetworkConfig
### Properties
* **datapathProvider**: 'ADVANCED_DATAPATH' | 'DATAPATH_PROVIDER_UNSPECIFIED' | 'LEGACY_DATAPATH' | string: The datapath provider for this cluster
* **defaultEnablePrivateNodes**: bool: Whether private nodes are enabled by default
* **defaultSnatStatus**: [DefaultSnatStatus](#defaultsnatstatus): Configuration for default SNAT status
* **disableL4LbFirewallReconciliation**: bool: Whether to disable L4 load balancer firewall reconciliation
* **dnsConfig**: [DnsConfig](#dnsconfig): DNS configuration for the cluster
* **enableCiliumClusterwideNetworkPolicy**: bool: Whether Cilium cluster-wide network policy is enabled
* **enableFqdnNetworkPolicy**: bool: Whether FQDN network policy is enabled
* **enableIntraNodeVisibility**: bool: Whether Intra-node visibility is enabled for this cluster
* **enableL4ilbSubsetting**: bool: Whether L4ILB Subsetting is enabled for this cluster
* **enableMultiNetworking**: bool: Whether multi-networking is enabled for this cluster
* **gatewayApiConfig**: [GatewayApiConfig](#gatewayapiconfig): Gateway API configuration
* **inTransitEncryptionConfig**: 'IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED' | 'IN_TRANSIT_ENCRYPTION_DISABLED' | 'IN_TRANSIT_ENCRYPTION_INTER_NODE_TRANSPARENT' | string: In-transit encryption configuration
* **network**: string: Name of the Google Compute Engine network
* **networkPerformanceConfig**: [ClusterNetworkPerformanceConfig](#clusternetworkperformanceconfig): Network performance configuration for the cluster
* **privateIpv6GoogleAccess**: 'PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL' | 'PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED' | 'PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE' | 'PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED' | string: Private IPv6 Google Access configuration
* **serviceExternalIpsConfig**: [ServiceExternalIpsConfig](#serviceexternalipsconfig): Configuration for external IPs on services
* **subnetwork**: string: Name of the Google Compute Engine subnetwork

## NetworkPolicy
### Properties
* **enabled**: bool: Whether network policy is enabled on the cluster
* **provider**: 'CALICO' | 'PROVIDER_UNSPECIFIED' | string: The selected network policy provider

## NetworkPolicyConfig
### Properties
* **disabled**: bool: Whether the Network Policy addon is disabled

## NetworkTags
### Properties
* **tags**: string[]: List of network tags

## NodeAffinity
### Properties
* **key**: string: Key for NodeAffinity
* **operator**: 'IN' | 'NOT_IN' | 'OPERATOR_UNSPECIFIED' | string: Operator for NodeAffinity
* **values**: string[]: Values for NodeAffinity

## NodeConfig
### Properties
* **accelerators**: [AcceleratorConfig](#acceleratorconfig)[]: A list of hardware accelerators to be attached to each node. See https://cloud.google.com/compute/docs/gpus for more information about support for GPUs.
* **advancedMachineFeatures**: [AdvancedMachineFeatures](#advancedmachinefeatures): Advanced features for the Compute Engine VM.
* **bootDiskKmsKey**: string: The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption
* **confidentialNodes**: [ConfidentialNodes](#confidentialnodes): Confidential nodes config. All the nodes in the node pool will be Confidential VM once enabled.
* **diskSizeGb**: int: Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. If unspecified, the default disk size is 100GB.
* **diskType**: string: Type of the disk attached to each node (e.g. 'pd-standard', 'pd-ssd' or 'pd-balanced') If unspecified, the default disk type is 'pd-standard'
* **enableConfidentialStorage**: bool: Optional. Reserved for future use.
* **ephemeralStorageLocalSsdConfig**: [EphemeralStorageLocalSsdConfig](#ephemeralstoragelocalssdconfig): Parameters for the node ephemeral storage using Local SSDs. If unspecified, ephemeral storage is backed by the boot disk.
* **fastSocket**: [FastSocket](#fastsocket): Enable or disable NCCL fast socket for the node pool.
* **gcfsConfig**: [GcfsConfig](#gcfsconfig): Google Container File System (image streaming) configs.
* **gvnic**: [VirtualNic](#virtualnic): Enable or disable gvnic in the node pool.
* **imageType**: string: The image type to use for this node. Note that for a given image type, the latest version of it will be used. Please see https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for available image types.
* **kubeletConfig**: [NodeKubeletConfig](#nodekubeletconfig): Node kubelet configs.
* **labels**: [NodeConfigLabels](#nodeconfiglabels): The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node. In case of conflict in label keys, the applied set may differ depending on the Kubernetes version -- it's best to assume the behavior is undefined and conflicts should be avoided. For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
* **linuxNodeConfig**: [LinuxNodeConfig](#linuxnodeconfig): Parameters that can be configured on Linux nodes.
* **localNvmeSsdBlockConfig**: [LocalNvmeSsdBlockConfig](#localnvmessdblockconfig): Parameters for using raw-block Local NVMe SSDs.
* **localSsdCount**: int: The number of local SSD disks to be attached to the node. The limit for this value is dependent upon the maximum number of disks available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information.
* **loggingConfig**: [NodePoolLoggingConfig](#nodepoolloggingconfig): Logging configuration.
* **machineType**: string: The name of a Google Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-types) If unspecified, the default machine type is `e2-medium`.
* **metadata**: [NodeConfigMetadata](#nodeconfigmetadata): The metadata key/value pairs assigned to instances in the cluster. Keys must conform to the regexp `[a-zA-Z0-9-_]+` and be less than 128 bytes in length. These are reflected as part of a URL in the metadata server. Additionally, to avoid ambiguity, keys must not conflict with any other metadata keys for the project or be one of the reserved keys: - \"cluster-location\" - \"cluster-name\" - \"cluster-uid\" - \"configure-sh\" - \"containerd-configure-sh\" - \"enable-os-login\" - \"gci-ensure-gke-docker\" - \"gci-metrics-enabled\" - \"gci-update-strategy\" - \"instance-template\" - \"kube-env\" - \"startup-script\" - \"user-data\" - \"disable-address-manager\" - \"windows-startup-script-ps1\" - \"common-psm1\" - \"k8s-node-setup-psm1\" - \"install-ssh-psm1\" - \"user-profile-psm1\" Values are free-form strings, and only have meaning as interpreted by the image running in the instance. The only restriction placed on them is that each value's size must be less than or equal to 32 KB. The total size of all keys and values must be less than 512 KB.
* **minCpuPlatform**: string: Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as `minCpuPlatform: "Intel Haswell"` or `minCpuPlatform: "Intel Sandy Bridge"`. For more information, read [how to specify min CPU platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform)
* **nodeGroup**: string: Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on [sole tenant nodes](https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes).
* **oauthScopes**: string[]: The set of Google API scopes to be made available on all of the node VMs under the "default" service account. The following scopes are recommended, but not required, and by default are not included: * `https://www.googleapis.com/auth/compute` is required for mounting persistent storage on your nodes. * `https://www.googleapis.com/auth/devstorage.read_only` is required for communicating with **gcr.io** (the [Google Container Registry](https://cloud.google.com/container-registry/)). If unspecified, no scopes are added, unless Cloud Logging or Cloud Monitoring are enabled, in which case their required scopes will be added.
* **preemptible**: bool: Whether the nodes are created as preemptible VM instances. See: https://cloud.google.com/compute/docs/instances/preemptible for more information about preemptible VM instances.
* **reservationAffinity**: [ReservationAffinity](#reservationaffinity): The optional reservation affinity. Setting this field will apply the specified [Zonal Compute Reservation](https://cloud.google.com/compute/docs/instances/reserving-zonal-resources) to this node pool.
* **resourceLabels**: [NodeConfigResourceLabels](#nodeconfigresourcelabels): The resource labels for the node pool to use to annotate any related Google Compute Engine resources.
* **resourceManagerTags**: [ResourceManagerTags](#resourcemanagertags): A map of resource manager tag keys and values to be attached to the nodes.
* **sandboxConfig**: [SandboxConfig](#sandboxconfig): Sandbox configuration for this node.
* **secondaryBootDisks**: [SecondaryBootDisk](#secondarybootdisk)[]: List of secondary boot disks attached to the nodes.
* **serviceAccount**: string: The Google Cloud Platform Service Account to be used by the node VMs. Specify the email address of the Service Account; otherwise, if no Service Account is specified, the "default" service account is used.
* **shieldedInstanceConfig**: [ShieldedInstanceConfig](#shieldedinstanceconfig): Shielded Instance options.
* **soleTenantConfig**: [SoleTenantConfig](#soletenantconfig): Parameters for node pools to be backed by shared sole tenant node groups.
* **spot**: bool: Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag.
* **tags**: string[]: The list of instance tags applied to all nodes. Tags are used to identify valid sources or targets for network firewalls and are specified by the client during cluster or node pool creation. Each tag within the list must comply with RFC1035.
* **taints**: [NodeTaint](#nodetaint)[]: List of kubernetes taints to be applied to each node. For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/
* **windowsNodeConfig**: [WindowsNodeConfig](#windowsnodeconfig): Parameters that can be configured on Windows nodes.
* **workloadMetadataConfig**: [WorkloadMetadataConfig](#workloadmetadataconfig): The workload metadata configuration for this node.

## NodeConfigDefaults
### Properties
* **gcfsConfig**: [GcfsConfig](#gcfsconfig): GCFS (Google Container File System, also known as Riptide) options.

## NodeConfigLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NodeConfigMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NodeConfigResourceLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NodeKubeletConfig
### Properties
* **cpuCfsQuota**: bool: Enable CPU CFS quota enforcement for containers that specify CPU limits
* **cpuCfsQuotaPeriod**: string: Set the CPU CFS quota period value 'cpu.cfs_period_us'
* **cpuManagerPolicy**: string: Control the CPU management policy on the node
* **insecureKubeletReadonlyPortEnabled**: bool: Set flag to enable/disable the logs verbosity for the node
* **podPidsLimit**: string: Set the verbosity level of the kubelet logs

## NodeManagement
### Properties
* **autoRepair**: bool: A flag that specifies whether the node auto-repair is enabled.
* **autoUpgrade**: bool: A flag that specifies whether node auto-upgrade is enabled.

## NodeNetworkConfig
### Properties
* **additionalNodeNetworkConfigs**: [AdditionalNodeNetworkConfig](#additionalnodenetworkconfig)[]: Configuration of additional node network interfaces.
* **additionalPodNetworkConfigs**: [AdditionalPodNetworkConfig](#additionalpodnetworkconfig)[]: Configuration of additional pod network interfaces.
* **createPodRange**: bool: Whether to create a pod range for this node pool.
* **enablePrivateNodes**: bool: Whether to enable private nodes.
* **podCidrOverprovisionConfig**: [PodCidrOverprovisionConfig](#podcidroverprovisionconfig): List of pod CIDR ranges to be used for the node pool.
* **podIpv4CidrBlock**: string: The IP address range for pods in this node pool.
* **podRange**: string: The ID of the secondary range for pod IPs.

## NodePool
### Properties
* **autoscaling**: [NodePoolAutoscaling](#nodepoolautoscaling): Autoscaler configuration for this NodePool. Autoscaler is enabled only if a valid configuration is present.
* **bestEffortProvisioning**: [BestEffortProvisioning](#besteffortprovisioning): Enable best effort provisioning for nodes
* **conditions**: [StatusCondition](#statuscondition)[]: Which conditions caused the current node pool state.
* **config**: [NodeConfig](#nodeconfig): The node configuration of the pool.
* **etag**: string: This checksum is computed by the server based on the value of node pool fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding.
* **initialNodeCount**: int: The initial node count for the pool. You must ensure that your Compute Engine [resource quota](https://cloud.google.com/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota.
* **instanceGroupUrls**: string[]: [Output only] The resource URLs of the [managed instance groups](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with this node pool. During the node pool blue-green upgrade operation, the URLs contain both blue and green resources.
* **locations**: string[]: The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the NodePool's nodes should be located. If this value is unspecified during node pool creation, the [Cluster.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters#Cluster.FIELDS.locations) value will be used, instead. Warning: changing node pool locations will result in nodes being added and/or removed.
* **management**: [NodeManagement](#nodemanagement): NodeManagement configuration for this NodePool.
* **maxPodsConstraint**: [MaxPodsConstraint](#maxpodsconstraint): The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool.
* **name**: string: The name of the node pool.
* **networkConfig**: [NodeNetworkConfig](#nodenetworkconfig): Networking configuration for this NodePool. If specified, it overrides the cluster-level defaults.
* **placementPolicy**: [PlacementPolicy](#placementpolicy): Specifies the node placement policy.
* **podIpv4CidrSize**: int: [Output only] The pod CIDR block size per node in this node pool.
* **queuedProvisioning**: [QueuedProvisioning](#queuedprovisioning): Specifies the configuration of queued provisioning.
* **selfLink**: string: [Output only] Server-defined URL for the resource.
* **status**: 'ERROR' | 'PROVISIONING' | 'RECONCILING' | 'RUNNING' | 'RUNNING_WITH_ERROR' | 'STATUS_UNSPECIFIED' | 'STOPPING' | string: [Output only] The status of the nodes in this pool instance.
* **statusMessage**: string: [Output only] Deprecated. Use conditions instead. Additional information about the current status of this node pool instance, if available.
* **updateInfo**: [UpdateInfo](#updateinfo): Output only. [Output only] Update info contains relevant information during a node pool update.
* **upgradeSettings**: [UpgradeSettings](#upgradesettings): Upgrade settings control disruption and speed of the upgrade.
* **version**: string: The version of Kubernetes running on this NodePool's nodes. If unspecified, it defaults as described [here](https://cloud.google.com/kubernetes-engine/versioning#specifying_node_version).

## NodePoolAutoConfig
### Properties
* **networkTags**: [NetworkTags](#networktags): The list of instance tags applied to all nodes. Tags are used to identify valid sources or targets for network firewalls and are specified by the client during cluster creation. Each tag within the list must comply with RFC1035.
* **resourceManagerTags**: [ResourceManagerTags](#resourcemanagertags): Resource manager tag keys and values to be attached to the nodes for managing Compute Engine firewalls using Network Firewall Policies.

## NodePoolAutoscaling
### Properties
* **autoprovisioned**: bool: Can this node pool be deleted automatically.
* **enabled**: bool: Is autoscaling enabled for this node pool.
* **locationPolicy**: 'ANY' | 'BALANCED' | 'LOCATION_POLICY_UNSPECIFIED' | string: Location policy used when scaling up a nodepool.
* **maxNodeCount**: int: Maximum number of nodes for one location in the NodePool. Must be >= min_node_count. There has to be enough quota to scale up the cluster.
* **minNodeCount**: int: Minimum number of nodes for one location in the NodePool. Must be >= 1 and <= max_node_count.
* **totalMaxNodeCount**: int: Maximum number of nodes in the node pool. Must be greater than total_min_node_count. There has to be enough quota to scale up the cluster. The total_*_node_count fields are mutually exclusive with the *_node_count fields.
* **totalMinNodeCount**: int: Minimum number of nodes in the node pool. Must be greater than 1 less than total_max_node_count. The total_*_node_count fields are mutually exclusive with the *_node_count fields.

## NodePoolDefaults
### Properties
* **nodeConfigDefaults**: [NodeConfigDefaults](#nodeconfigdefaults): Subset of NodeConfig message that has defaults.

## NodePoolLoggingConfig
### Properties
* **variantConfig**: [LoggingVariantConfig](#loggingvariantconfig): Logging variant configuration

## NodeTaint
### Properties
* **effect**: 'EFFECT_UNSPECIFIED' | 'NO_EXECUTE' | 'NO_SCHEDULE' | 'PREFER_NO_SCHEDULE' | string: Effect for taint
* **key**: string: Key for taint
* **value**: string: Value for taint

## NotificationConfig
### Properties
* **pubsub**: [PubSub](#pubsub): Configuration for Pub/Sub notifications

## OperationError
### Properties
* **code**: string: Error code
* **details**: [OperationErrorDetails](#operationerrordetails): Additional details about the error
* **message**: string: Error message
* **timestamp**: string: Timestamp when the error occurred

## OperationErrorDetails
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ParallelstoreCsiDriverConfig
### Properties
* **enabled**: bool: Whether the Parallelstore CSI Driver addon is enabled

## ParentProductConfig
### Properties
* **productId**: string: The ID of the parent product
* **projectId**: string: The project ID where the parent product is deployed

## PlacementPolicy
### Properties
* **policyName**: string: If set, refers to the name of a custom resource policy supplied by the user.
* **tpuTopology**: string: TPU placement topology for pod slice node pool.
* **type**: 'COMPACT' | 'TYPE_UNSPECIFIED' | string: The type of placement.

## PodCidrOverprovisionConfig
### Properties
* **disable**: bool: Whether to disable pod CIDR overprovision.

## PrivateClusterConfig
### Properties
* **enablePrivateEndpoint**: bool: Whether the master's internal IP address is used as the cluster endpoint
* **enablePrivateNodes**: bool: Whether nodes have internal IP addresses only
* **masterGlobalAccessConfig**: [PrivateClusterMasterGlobalAccessConfig](#privateclustermasterglobalaccessconfig): Controls master global access settings
* **masterIpv4CidrBlock**: string: The IP range in CIDR notation to use for the hosted master network
* **peeringName**: string: The name of the VPC Network peering connection
* **privateEndpoint**: string: The internal IP address of this cluster's master endpoint
* **privateEndpointSubnetwork**: string: Subnet to provision the master's private endpoint during cluster creation
* **publicEndpoint**: string: The external IP address of this cluster's master endpoint

## PrivateClusterMasterGlobalAccessConfig
### Properties
* **enabled**: bool: Whether the cluster master is accessible globally or not

## PubSub
### Properties
* **enabled**: bool: Whether notifications are enabled
* **filter**: [Filter](#filter): Filter configuration for notifications
* **topic**: string: The Pub/Sub topic for notifications

## QueuedProvisioning
### Properties
* **enabled**: bool: Denotes that this nodepool is QRM specific.

## RangeInfo
### Properties
* **rangeName**: string: The name of the range.
* **utilization**: int: The utilization of the range.

## RayClusterLoggingConfig
### Properties
* **enabled**: bool: Whether Ray cluster logging is enabled

## RayClusterMonitoringConfig
### Properties
* **enabled**: bool: Whether Ray cluster monitoring is enabled

## RayOperatorConfig
### Properties
* **enabled**: bool: Whether the Ray Operator addon is enabled
* **rayClusterLoggingConfig**: [RayClusterLoggingConfig](#rayclusterloggingconfig): Configuration for Ray logging
* **rayClusterMonitoringConfig**: [RayClusterMonitoringConfig](#rayclustermonitoringconfig): Configuration for Ray monitoring

## RecurringTimeWindow
### Properties
* **recurrence**: string: An RRULE for how this window recurs
* **window**: [TimeWindow](#timewindow): The window of the first recurrence

## ReleaseChannel
### Properties
* **channel**: 'EXTENDED' | 'RAPID' | 'REGULAR' | 'STABLE' | 'UNSPECIFIED' | string: The release channel the cluster is subscribed to

## ReservationAffinity
### Properties
* **consumeReservationType**: 'ANY_RESERVATION' | 'ANY_RESERVATION_THEN_FAIL' | 'NO_RESERVATION' | 'SPECIFIC_RESERVATION' | 'UNSPECIFIED' | string: Corresponds to the type of reservation consumption
* **key**: string: Corresponds to the label key of a reservation resource
* **values**: string[]: Corresponds to the label value(s) of reservation resource(s)

## ResourceLimit
### Properties
* **maximum**: string: Maximum amount of the resource in the cluster
* **minimum**: string: Minimum amount of the resource in the cluster
* **resourceType**: string: The type of the resource

## ResourceManagerTags
### Properties
* **tags**: [ResourceManagerTags](#resourcemanagertags): TagKeyId is the namespaced and unique ID of the tag key

## ResourceManagerTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceUsageExportConfig
### Properties
* **bigqueryDestination**: [BigQueryDestination](#bigquerydestination): Configuration to use BigQuery as destination of resource usage export
* **consumptionMeteringConfig**: [ConsumptionMeteringConfig](#consumptionmeteringconfig): Configuration to enable resource consumption metering
* **enableNetworkEgressMetering**: bool: Whether to enable network egress metering for this cluster

## SandboxConfig
### Properties
* **type**: 'GVISOR' | 'UNSPECIFIED' | string: Type of the sandbox to use for the node

## SecondaryBootDisk
### Properties
* **diskImage**: string: Fully-qualified resource ID for an existing disk image
* **mode**: 'CONTAINER_IMAGE_CACHE' | 'MODE_UNSPECIFIED' | string: Disk boot mode

## SecurityPostureConfig
### Properties
* **mode**: 'BASIC' | 'DISABLED' | 'ENTERPRISE' | 'MODE_UNSPECIFIED' | string: Mode of the security posture

## ServiceExternalIpsConfig
### Properties
* **enabled**: bool: Whether Services with ExternalIPs field are allowed or not.

## ShieldedInstanceConfig
### Properties
* **enableIntegrityMonitoring**: bool: Defines whether the instance has integrity monitoring enabled
* **enableSecureBoot**: bool: Defines whether the instance has Secure Boot enabled

## ShieldedNodes
### Properties
* **enabled**: bool: Whether Shielded Nodes features are enabled on all nodes in this cluster

## SoleTenantConfig
### Properties
* **nodeAffinities**: [NodeAffinity](#nodeaffinity)[]: List of node affinities associated with the sole tenant node pool

## StandardRolloutPolicy
### Properties
* **batchNodeCount**: int: Number of blue nodes to drain in a batch.
* **batchPercentage**: int: Percentage of the blue pool nodes to drain in a batch.
* **batchSoakDuration**: string: Soak time after each batch gets drained.

## StatefulHaConfig
### Properties
* **enabled**: bool: Whether the Stateful HA addon is enabled

## StatusCondition
### Properties
* **canonicalCode**: 'ABORTED' | 'ALREADY_EXISTS' | 'CANCELLED' | 'DATA_LOSS' | 'DEADLINE_EXCEEDED' | 'FAILED_PRECONDITION' | 'INTERNAL' | 'INVALID_ARGUMENT' | 'NOT_FOUND' | 'OK' | 'OUT_OF_RANGE' | 'PERMISSION_DENIED' | 'RESOURCE_EXHAUSTED' | 'UNAUTHENTICATED' | 'UNAVAILABLE' | 'UNIMPLEMENTED' | 'UNKNOWN' | string: Canonical code of the condition.
* **code**: 'CA_EXPIRING' | 'CLOUD_KMS_KEY_DESTROYED' | 'CLOUD_KMS_KEY_ERROR' | 'GCE_QUOTA_EXCEEDED' | 'GCE_STOCKOUT' | 'GKE_SERVICE_ACCOUNT_DELETED' | 'NODE_SERVICE_ACCOUNT_MISSING_PERMISSIONS' | 'SET_BY_OPERATOR' | 'UNKNOWN' | string: Machine-readable code indicating the condition state
* **message**: string: Human-readable message indicating details about the condition

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TimeWindow
### Properties
* **endTime**: string: The end time of the time window
* **startTime**: string: The start time of the time window

## UpdateInfo
### Properties
* **blueGreenInfo**: [BlueGreenInfo](#bluegreeninfo): Information about a blue-green upgrade.

## UpgradeSettings
### Properties
* **blueGreenSettings**: [BlueGreenSettings](#bluegreensettings): Settings for blue-green upgrade.
* **maxSurge**: int: The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process.
* **maxUnavailable**: int: The maximum number of nodes that can be simultaneously unavailable during the upgrade process.
* **strategy**: 'BLUE_GREEN' | 'NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED' | 'SHORT_LIVED' | 'SURGE' | string: Update strategy of the node pool.

## VerticalPodAutoscaling
### Properties
* **enabled**: bool: Enables vertical pod autoscaling

## VirtualNic
### Properties
* **enabled**: bool: Whether gVNIC features are enabled in the node pool

## WindowsNodeConfig
### Properties
* **osVersion**: 'OS_VERSION_LTSC2019' | 'OS_VERSION_LTSC2022' | 'OS_VERSION_UNSPECIFIED' | string: OSVersion specifies the Windows node config to be used on the node

## WorkloadIdentityConfig
### Properties
* **workloadPool**: string: The workload pool to attach all Kubernetes service accounts to

## WorkloadMetadataConfig
### Properties
* **mode**: 'GCE_METADATA' | 'GKE_METADATA' | 'MODE_UNSPECIFIED' | string: Mode is the configuration for how to expose metadata to workloads running on the node pool

