# Microsoft.ServiceFabric @ 2021-07-01-preview

## Resource Microsoft.ServiceFabric/managedClusters@2021-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Azure resource etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Azure resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedClusterProperties](#managedclusterproperties): The managed cluster resource properties
* **sku**: [Sku](#sku): The sku of the managed cluster
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ResourceTags](#resourcetags): Azure resource tags.
* **type**: 'Microsoft.ServiceFabric/managedClusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceFabric/managedclusters/applications@2021-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedIdentity](#managedidentity): Describes the managed identities for an Azure resource.
* **location**: string: Resource location depends on the parent resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationResourceProperties](#applicationresourceproperties): The application resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ProxyResourceTags](#proxyresourcetags): Azure resource tags.
* **type**: 'Microsoft.ServiceFabric/managedclusters/applications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceFabric/managedclusters/applications/services@2021-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location depends on the parent resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceResourceProperties](#serviceresourceproperties): The service resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ProxyResourceTags](#proxyresourcetags): Azure resource tags.
* **type**: 'Microsoft.ServiceFabric/managedclusters/applications/services' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceFabric/managedclusters/applicationTypes@2021-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location depends on the parent resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationTypeResourceProperties](#applicationtyperesourceproperties): The application type name properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ProxyResourceTags](#proxyresourcetags): Azure resource tags.
* **type**: 'Microsoft.ServiceFabric/managedclusters/applicationTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceFabric/managedclusters/applicationTypes/versions@2021-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location depends on the parent resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationTypeVersionResourceProperties](#applicationtypeversionresourceproperties): The properties of the application type version resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ProxyResourceTags](#proxyresourcetags): Azure resource tags.
* **type**: 'Microsoft.ServiceFabric/managedclusters/applicationTypes/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceFabric/managedClusters/nodeTypes@2021-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NodeTypeProperties](#nodetypeproperties): The node type properties
* **sku**: [NodeTypeSku](#nodetypesku): The node type sku.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ManagedProxyResourceTags](#managedproxyresourcetags): Azure resource tags.
* **type**: 'Microsoft.ServiceFabric/managedClusters/nodeTypes' (ReadOnly, DeployTimeConstant): The resource type

## ApplicationHealthPolicy
### Properties
* **considerWarningAsError**: bool (Required): Indicates whether warnings are treated with the same severity as errors.
* **defaultServiceTypeHealthPolicy**: [ServiceTypeHealthPolicy](#servicetypehealthpolicy): The health policy used by default to evaluate the health of a service type.
* **maxPercentUnhealthyDeployedApplications**: int (Required): The maximum allowed percentage of unhealthy deployed applications. Allowed values are Byte values from zero to 100.
The percentage represents the maximum tolerated percentage of deployed applications that can be unhealthy before the application is considered in error.
This is calculated by dividing the number of unhealthy deployed applications over the number of nodes where the application is currently deployed on in the cluster.
The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero.
* **serviceTypeHealthPolicyMap**: [ServiceTypeHealthPolicyMap](#servicetypehealthpolicymap): The map with service type health policy per service type name. The map is empty by default.

## ApplicationParameterList
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationResourceProperties
### Properties
* **managedIdentities**: [ApplicationUserAssignedIdentity](#applicationuserassignedidentity)[]: List of user assigned identities for the application, each mapped to a friendly name.
* **parameters**: [ApplicationParameterList](#applicationparameterlist): List of application parameters with overridden values from their default values specified in the application manifest.
* **provisioningState**: string (ReadOnly): The current deployment or provisioning state, which only appears in the response
* **upgradePolicy**: [ApplicationUpgradePolicy](#applicationupgradepolicy): Describes the policy for a monitored application upgrade.
* **version**: string: The version of the application type as defined in the application manifest.
This name must be the full Arm Resource ID for the referenced application type version.

## ApplicationTypeResourceProperties
### Properties
* **provisioningState**: string (ReadOnly): The current deployment or provisioning state, which only appears in the response.

## ApplicationTypeVersionResourceProperties
### Properties
* **appPackageUrl**: string (Required): The URL to the application package
* **provisioningState**: string (ReadOnly): The current deployment or provisioning state, which only appears in the response

## ApplicationTypeVersionsCleanupPolicy
### Properties
* **maxUnusedVersionsToKeep**: int (Required): Number of unused versions per application type to keep.

## ApplicationUpgradePolicy
### Properties
* **applicationHealthPolicy**: [ApplicationHealthPolicy](#applicationhealthpolicy): Defines a health policy used to evaluate the health of an application or one of its children entities.
* **forceRestart**: bool: If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data).
* **instanceCloseDelayDuration**: int: Duration in seconds, to wait before a stateless instance is closed, to allow the active requests to drain gracefully. This would be effective when the instance is closing during the application/cluster upgrade, only for those instances which have a non-zero delay duration configured in the service description.
* **recreateApplication**: bool: Determines whether the application should be recreated on update. If value=true, the rest of the upgrade policy parameters are not allowed.
* **rollingUpgradeMonitoringPolicy**: [RollingUpgradeMonitoringPolicy](#rollingupgrademonitoringpolicy): The policy used for monitoring the application upgrade
* **upgradeMode**: 'Monitored' | 'UnmonitoredAuto' | string: The mode used to monitor health during a rolling upgrade. The values are Monitored, and UnmonitoredAuto.
* **upgradeReplicaSetCheckTimeout**: int: The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer).

## ApplicationUserAssignedIdentity
### Properties
* **name**: string (Required): The friendly name of user assigned identity.
* **principalId**: string (Required): The principal id of user assigned identity.

## AzureActiveDirectory
### Properties
* **clientApplication**: string: Azure active directory client application id.
* **clusterApplication**: string: Azure active directory cluster application id.
* **tenantId**: string: Azure active directory tenant id.

## ClientCertificate
### Properties
* **commonName**: string: Certificate common name.
* **isAdmin**: bool (Required): Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
* **issuerThumbprint**: string: Issuer thumbprint for the certificate. Only used together with CommonName.
* **thumbprint**: string: Certificate thumbprint.

## EndpointRangeDescription
### Properties
* **endPort**: int (Required): End port of a range of ports
* **startPort**: int (Required): Starting port of a range of ports

## FrontendConfiguration
### Properties
* **ipAddressType**: 'IPv4' | 'IPv6' | string: The IP address type of this frontend configuration. If omitted the default value is IPv4.
* **loadBalancerBackendAddressPoolId**: string: The resource Id of the Load Balancer backend address pool that the VM instances of the node type are associated with. The format of the resource Id is '/subscriptions/<subscriptionId>/resourceGroups/<resourceGroupName>/providers/Microsoft.Network/loadBalancers/<loadBalancerName>/backendAddressPools/<backendAddressPoolName>'.
* **loadBalancerInboundNatPoolId**: string: The resource Id of the Load Balancer inbound NAT pool that the VM instances of the node type are associated with. The format of the resource Id is '/subscriptions/<subscriptionId>/resourceGroups/<resourceGroupName>/providers/Microsoft.Network/loadBalancers/<loadBalancerName>/inboundNatPools/<inboundNatPoolName>'.

## IPTag
### Properties
* **ipTagType**: string (Required): The IP tag type.
* **tag**: string (Required): The value of the IP tag.

## LoadBalancingRule
### Properties
* **backendPort**: int (Required): The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
* **frontendPort**: int (Required): The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 1 and 65534.
* **probePort**: int: The prob port used by the load balancing rule. Acceptable values are between 1 and 65535.
* **probeProtocol**: 'http' | 'https' | 'tcp' | string (Required): the reference to the load balancer probe used by the load balancing rule.
* **probeRequestPath**: string: The probe request path. Only supported for HTTP/HTTPS probes.
* **protocol**: 'tcp' | 'udp' | string (Required): The reference to the transport protocol used by the load balancing rule.

## ManagedClusterProperties
### Properties
* **addonFeatures**: 'BackupRestoreService' | 'DnsService' | 'ResourceMonitorService' | string[]: List of add-on features to enable on the cluster.
* **adminPassword**: string: VM admin user password.
* **adminUserName**: string (Required): VM admin user name.
* **allowRdpAccess**: bool: Setting this to true enables RDP access to the VM. The default NSG rule opens RDP port to Internet which can be overridden with custom Network Security Rules. The default value for this setting is false.
* **applicationTypeVersionsCleanupPolicy**: [ApplicationTypeVersionsCleanupPolicy](#applicationtypeversionscleanuppolicy): The policy used to clean up unused versions.
* **azureActiveDirectory**: [AzureActiveDirectory](#azureactivedirectory): The AAD authentication settings of the cluster.
* **clientConnectionPort**: int: The port used for client connections to the cluster.
* **clients**: [ClientCertificate](#clientcertificate)[]: Client certificates that are allowed to manage the cluster.
* **clusterCertificateThumbprints**: string[] (ReadOnly): List of thumbprints of the cluster certificates.
* **clusterCodeVersion**: string: The Service Fabric runtime version of the cluster. This property is required when **clusterUpgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**.
* **clusterId**: string (ReadOnly): A service generated unique identifier for the cluster resource.
* **clusterState**: 'BaselineUpgrade' | 'Deploying' | 'Ready' | 'UpgradeFailed' | 'Upgrading' | 'WaitingForNodes' | string (ReadOnly): The current state of the cluster.
* **clusterUpgradeCadence**: 'Wave0' | 'Wave1' | 'Wave2' | string: Indicates when new cluster runtime version upgrades will be applied after they are released. By default is Wave0. Only applies when **clusterUpgradeMode** is set to 'Automatic'.
* **clusterUpgradeMode**: 'Automatic' | 'Manual' | string: The upgrade mode of the cluster when new Service Fabric runtime version is available.
* **dnsName**: string (Required): The cluster dns name.
* **enableAutoOSUpgrade**: bool: Setting this to true enables automatic OS upgrade for the node types that are created using any platform OS image with version 'latest'. The default value for this setting is false.
* **enableIpv6**: bool: Setting this to true creates IPv6 address space for the default VNet used by the cluster. This setting cannot be changed once the cluster is created. The default value for this setting is false.
* **fabricSettings**: [SettingsSectionDescription](#settingssectiondescription)[]: The list of custom fabric settings to configure the cluster.
* **fqdn**: string (ReadOnly): The fully qualified domain name associated with the public load balancer of the cluster.
* **httpGatewayConnectionPort**: int: The port used for HTTP connections to the cluster.
* **ipTags**: [IPTag](#iptag)[]: The list of IP tags associated with the default public IP address of the cluster.
* **ipv4Address**: string (ReadOnly): The IPv4 address associated with the public load balancer of the cluster.
* **loadBalancingRules**: [LoadBalancingRule](#loadbalancingrule)[]: Load balancing rules that are applied to the public load balancer of the cluster.
* **networkSecurityRules**: [NetworkSecurityRule](#networksecurityrule)[]: Custom Network Security Rules that are applied to the Virtual Network of the cluster.
* **provisioningState**: 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'None' | 'Other' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the managed cluster resource.
* **subnetId**: string: If specified, the node types for the cluster are created in this subnet instead of the default VNet. The **networkSecurityRules** specified for the cluster are also applied to this subnet. This setting cannot be changed once the cluster is created.
* **zonalResiliency**: bool: Indicates if the cluster has zone resiliency.

## ManagedIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the managed identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant id of the managed identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The type of managed identity for the resource.
* **userAssignedIdentities**: [UserAssignedIdentityMap](#userassignedidentitymap): The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:
'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## ManagedProxyResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NetworkSecurityRule
### Properties
* **access**: 'allow' | 'deny' | string (Required): The network traffic is allowed or denied.
* **description**: string: Network security rule description.
* **destinationAddressPrefixes**: string[]: The destination address prefixes. CIDR or destination IP ranges.
* **destinationPortRanges**: string[]: The destination port ranges.
* **direction**: 'inbound' | 'outbound' | string (Required): Network security rule direction.
* **name**: string (Required): Network security rule name.
* **priority**: int (Required): The priority of the rule. The value can be in the range 1000 to 3000. Values outside this range are reserved for Service Fabric ManagerCluster Resource Provider. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
* **protocol**: 'ah' | 'esp' | 'http' | 'https' | 'icmp' | 'tcp' | 'udp' | string (Required): Network protocol this rule applies to.
* **sourceAddressPrefixes**: string[]: The CIDR or source IP ranges.
* **sourcePortRanges**: string[]: The source port ranges.

## NodeTypeProperties
### Properties
* **applicationPorts**: [EndpointRangeDescription](#endpointrangedescription): The range of ports from which cluster assigned port to Service Fabric applications.
* **capacities**: [NodeTypePropertiesCapacities](#nodetypepropertiescapacities): The capacity tags applied to the nodes in the node type, the cluster resource manager uses these tags to understand how much resource a node has.
* **dataDiskSizeGB**: int (Required): Disk size for each vm in the node type in GBs.
* **dataDiskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | string: Managed data disk type.
* **ephemeralPorts**: [EndpointRangeDescription](#endpointrangedescription): The range of ephemeral ports that nodes in this node type should be configured with.
* **frontendConfigurations**: [FrontendConfiguration](#frontendconfiguration)[]: Indicates the node type uses its own frontend configurations instead of the default one for the cluster. This setting can only be specified for non-primary node types and can not be added or removed after the node type is created.
* **isPrimary**: bool (Required): Indicates the Service Fabric system services for the cluster will run on this node type. This setting cannot be changed once the node type is created.
* **isStateless**: bool: Indicates if the node type can only host Stateless workloads.
* **multiplePlacementGroups**: bool: Indicates if scale set associated with the node type can be composed of multiple placement groups.
* **networkSecurityRules**: [NetworkSecurityRule](#networksecurityrule)[]: The Network Security Rules for this node type. This setting can only be specified for node types that are configured with frontend configurations.
* **placementProperties**: [NodeTypePropertiesPlacementProperties](#nodetypepropertiesplacementproperties): The placement tags applied to nodes in the node type, which can be used to indicate where certain services (workload) should run.
* **provisioningState**: 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'None' | 'Other' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the node type resource.
* **vmExtensions**: [VmssExtension](#vmssextension)[]: Set of extensions that should be installed onto the virtual machines.
* **vmImageOffer**: string: The offer type of the Azure Virtual Machines Marketplace image. For example, UbuntuServer or WindowsServer.
* **vmImagePublisher**: string: The publisher of the Azure Virtual Machines Marketplace image. For example, Canonical or MicrosoftWindowsServer.
* **vmImageSku**: string: The SKU of the Azure Virtual Machines Marketplace image. For example, 14.04.0-LTS or 2012-R2-Datacenter.
* **vmImageVersion**: string: The version of the Azure Virtual Machines Marketplace image. A value of 'latest' can be specified to select the latest version of an image. If omitted, the default is 'latest'.
* **vmInstanceCount**: int (Required): The number of nodes in the node type. <br /><br />**Values:** <br />-1 - Use when auto scale rules are configured or sku.capacity is defined <br /> 0 - Not supported <br /> >0 - Use for manual scale.
* **vmManagedIdentity**: [VmManagedIdentity](#vmmanagedidentity): Identities to assign to the virtual machine scale set under the node type.
* **vmSecrets**: [VaultSecretGroup](#vaultsecretgroup)[]: The secrets to install in the virtual machines.
* **vmSize**: string: The size of virtual machines in the pool. All virtual machines in a pool are the same size. For example, Standard_D3.

## NodeTypePropertiesCapacities
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NodeTypePropertiesPlacementProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NodeTypeSku
### Properties
* **capacity**: int (Required): The number of nodes in the node type.<br /><br />If present in request it will override properties.vmInstanceCount.
* **name**: string: The sku name. <br /><br />Name is internally generated and is used in auto-scale scenarios.<br /> Property does not allow to be changed to other values than generated.<br /> To avoid deployment errors please omit the property.
* **tier**: string: Specifies the tier of the node type. <br /><br /> Possible Values:<br /> **Standard**

## Partition
* **Discriminator**: partitionScheme

### Base Properties

### NamedPartitionScheme
#### Properties
* **names**: string[] (Required): Array for the names of the partitions.
* **partitionScheme**: 'Named' (Required): Specifies how the service is partitioned.

### SingletonPartitionScheme
#### Properties
* **partitionScheme**: 'Singleton' (Required): Specifies how the service is partitioned.

### UniformInt64RangePartitionScheme
#### Properties
* **count**: int (Required): The number of partitions.
* **highKey**: int (Required): The upper bound of the partition key range that
should be split between the partition ‘Count’
* **lowKey**: int (Required): The lower bound of the partition key range that
should be split between the partition ‘Count’
* **partitionScheme**: 'UniformInt64Range' (Required): Specifies how the service is partitioned.


## ProxyResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RollingUpgradeMonitoringPolicy
### Properties
* **failureAction**: 'Manual' | 'Rollback' | string (Required): The compensating action to perform when a Monitored upgrade encounters monitoring policy or health policy violations. Invalid indicates the failure action is invalid. Rollback specifies that the upgrade will start rolling back automatically. Manual indicates that the upgrade will switch to UnmonitoredManual upgrade mode.
* **healthCheckRetryTimeout**: string (Required): The amount of time to retry health evaluation when the application or cluster is unhealthy before FailureAction is executed. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
* **healthCheckStableDuration**: string (Required): The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
* **healthCheckWaitDuration**: string (Required): The amount of time to wait after completing an upgrade domain before applying health policies. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
* **upgradeDomainTimeout**: string (Required): The amount of time each upgrade domain has to complete before FailureAction is executed. Cannot be larger than 12 hours. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
* **upgradeTimeout**: string (Required): The amount of time the overall upgrade has to complete before FailureAction is executed. Cannot be larger than 12 hours. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".

## ScalingMechanism
* **Discriminator**: kind

### Base Properties

### AddRemoveIncrementalNamedPartitionScalingMechanism
#### Properties
* **kind**: 'AddRemoveIncrementalNamedPartition' (Required): Specifies the mechanism associated with this scaling policy.
* **maxPartitionCount**: int (Required): Maximum number of named partitions of the service.
* **minPartitionCount**: int (Required): Minimum number of named partitions of the service.
* **scaleIncrement**: int (Required): The number of instances to add or remove during a scaling operation.

### PartitionInstanceCountScaleMechanism
#### Properties
* **kind**: 'ScalePartitionInstanceCount' (Required): Specifies the mechanism associated with this scaling policy.
* **maxInstanceCount**: int (Required): Maximum number of instances of the partition.
* **minInstanceCount**: int (Required): Minimum number of instances of the partition.
* **scaleIncrement**: int (Required): The number of instances to add or remove during a scaling operation.


## ScalingPolicy
### Properties
* **scalingMechanism**: [ScalingMechanism](#scalingmechanism) (Required): Specifies the mechanism associated with this scaling policy
* **scalingTrigger**: [ScalingTrigger](#scalingtrigger) (Required): Specifies the trigger associated with this scaling policy.

## ScalingTrigger
* **Discriminator**: kind

### Base Properties

### AveragePartitionLoadScalingTrigger
#### Properties
* **kind**: 'AveragePartitionLoadTrigger' (Required): Specifies the trigger associated with this scaling policy.
* **lowerLoadThreshold**: int (Required): The lower limit of the load below which a scale in operation should be performed.
* **metricName**: string (Required): The name of the metric for which usage should be tracked.
* **scaleInterval**: string (Required): The period in seconds on which a decision is made whether to scale or not. This property should come in ISO 8601 format "hh:mm:ss".
* **upperLoadThreshold**: int (Required): The upper limit of the load beyond which a scale out operation should be performed.

### AverageServiceLoadScalingTrigger
#### Properties
* **kind**: 'AverageServiceLoadTrigger' (Required): Specifies the trigger associated with this scaling policy.
* **lowerLoadThreshold**: int (Required): The lower limit of the load below which a scale in operation should be performed.
* **metricName**: string (Required): The name of the metric for which usage should be tracked.
* **scaleInterval**: string (Required): The period in seconds on which a decision is made whether to scale or not. This property should come in ISO 8601 format "hh:mm:ss".
* **upperLoadThreshold**: int (Required): The upper limit of the load beyond which a scale out operation should be performed.
* **useOnlyPrimaryLoad**: bool (Required): Flag determines whether only the load of primary replica should be considered for scaling. If set to true, then trigger will only consider the load of primary replicas of stateful service. If set to false, trigger will consider load of all replicas. This parameter cannot be set to true for stateless service.


## ServiceCorrelation
### Properties
* **scheme**: 'AlignedAffinity' | 'NonAlignedAffinity' | string (Required): The ServiceCorrelationScheme which describes the relationship between this service and the service specified via ServiceName.
* **serviceName**: string (Required): The Arm Resource ID of the service that the correlation relationship is established with.

## ServiceLoadMetric
### Properties
* **defaultLoad**: int: Used only for Stateless services. The default amount of load, as a number, that this service creates for this metric.
* **name**: string (Required): The name of the metric. If the service chooses to report load during runtime, the load metric name should match the name that is specified in Name exactly. Note that metric names are case sensitive.
* **primaryDefaultLoad**: int: Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Primary replica.
* **secondaryDefaultLoad**: int: Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Secondary replica.
* **weight**: 'High' | 'Low' | 'Medium' | 'Zero' | string: The service load metric relative weight, compared to other metrics configured for this service, as a number.

## ServicePlacementPolicy
* **Discriminator**: type

### Base Properties

### ServicePlacementInvalidDomainPolicy
#### Properties
* **domainName**: string (Required): The name of the domain that should not be used for placement.
* **type**: 'InvalidDomain' (Required): The type of placement policy for a service fabric service. Following are the possible values.

### ServicePlacementNonPartiallyPlaceServicePolicy
#### Properties
* **type**: 'NonPartiallyPlaceService' (Required): The type of placement policy for a service fabric service. Following are the possible values.

### ServicePlacementPreferPrimaryDomainPolicy
#### Properties
* **domainName**: string (Required): The name of the domain that should used for placement as per this policy.
* **type**: 'PreferredPrimaryDomain' (Required): The type of placement policy for a service fabric service. Following are the possible values.

### ServicePlacementRequiredDomainPolicy
#### Properties
* **domainName**: string (Required): The name of the domain that should used for placement as per this policy.
* **type**: 'RequiredDomain' (Required): The type of placement policy for a service fabric service. Following are the possible values.

### ServicePlacementRequireDomainDistributionPolicy
#### Properties
* **domainName**: string (Required): The name of the domain that should used for placement as per this policy.
* **type**: 'RequiredDomainDistribution' (Required): The type of placement policy for a service fabric service. Following are the possible values.


## ServiceResourceProperties
* **Discriminator**: serviceKind

### Base Properties
* **correlationScheme**: [ServiceCorrelation](#servicecorrelation)[]: A list that describes the correlation of the service with other services.
* **defaultMoveCost**: 'High' | 'Low' | 'Medium' | 'Zero' | string: Specifies the move cost for the service.
* **partitionDescription**: [Partition](#partition) (Required): Describes how the service is partitioned.
* **placementConstraints**: string: The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
* **provisioningState**: string (ReadOnly): The current deployment or provisioning state, which only appears in the response
* **scalingPolicies**: [ScalingPolicy](#scalingpolicy)[]: Scaling policies for this service.
* **serviceLoadMetrics**: [ServiceLoadMetric](#serviceloadmetric)[]: The service load metrics is given as an array of ServiceLoadMetric objects.
* **servicePackageActivationMode**: 'ExclusiveProcess' | 'SharedProcess' | string: The activation Mode of the service package
* **servicePlacementPolicies**: [ServicePlacementPolicy](#serviceplacementpolicy)[]: A list that describes the correlation of the service with other services.
* **serviceTypeName**: string (Required): The name of the service type

### StatefulServiceProperties
#### Properties
* **hasPersistedState**: bool: A flag indicating whether this is a persistent service which stores states on the local disk. If it is then the value of this property is true, if not it is false.
* **minReplicaSetSize**: int: The minimum replica set size as a number.
* **quorumLossWaitDuration**: string: The maximum duration for which a partition is allowed to be in a state of quorum loss, represented in ISO 8601 format "hh:mm:ss".
* **replicaRestartWaitDuration**: string: The duration between when a replica goes down and when a new replica is created, represented in ISO 8601 format "hh:mm:ss".
* **serviceKind**: 'Stateful' (Required): The kind of service (Stateless or Stateful).
* **servicePlacementTimeLimit**: string: The duration for which replicas can stay InBuild before reporting that build is stuck, represented in ISO 8601 format "hh:mm:ss".
* **standByReplicaKeepDuration**: string: The definition on how long StandBy replicas should be maintained before being removed, represented in ISO 8601 format "hh:mm:ss".
* **targetReplicaSetSize**: int: The target replica set size as a number.

### StatelessServiceProperties
#### Properties
* **instanceCount**: int (Required): The instance count.
* **minInstanceCount**: int: MinInstanceCount is the minimum number of instances that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstanceCount computation -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service.
* **minInstancePercentage**: int: MinInstancePercentage is the minimum percentage of InstanceCount that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstancePercentage computation, -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service.
* **serviceKind**: 'Stateless' (Required): The kind of service (Stateless or Stateful).


## ServiceTypeHealthPolicy
### Properties
* **maxPercentUnhealthyPartitionsPerService**: int (Required): The maximum allowed percentage of unhealthy partitions per service.

The percentage represents the maximum tolerated percentage of partitions that can be unhealthy before the service is considered in error.
If the percentage is respected but there is at least one unhealthy partition, the health is evaluated as Warning.
The percentage is calculated by dividing the number of unhealthy partitions over the total number of partitions in the service.
The computation rounds up to tolerate one failure on small numbers of partitions.
* **maxPercentUnhealthyReplicasPerPartition**: int (Required): The maximum allowed percentage of unhealthy replicas per partition.

The percentage represents the maximum tolerated percentage of replicas that can be unhealthy before the partition is considered in error.
If the percentage is respected but there is at least one unhealthy replica, the health is evaluated as Warning.
The percentage is calculated by dividing the number of unhealthy replicas over the total number of replicas in the partition.
The computation rounds up to tolerate one failure on small numbers of replicas.
* **maxPercentUnhealthyServices**: int (Required): The maximum allowed percentage of unhealthy services.

The percentage represents the maximum tolerated percentage of services that can be unhealthy before the application is considered in error.
If the percentage is respected but there is at least one unhealthy service, the health is evaluated as Warning.
This is calculated by dividing the number of unhealthy services of the specific service type over the total number of services of the specific service type.
The computation rounds up to tolerate one failure on small numbers of services.

## ServiceTypeHealthPolicyMap
### Properties
### Additional Properties
* **Additional Properties Type**: [ServiceTypeHealthPolicy](#servicetypehealthpolicy)

## SettingsParameterDescription
### Properties
* **name**: string (Required): The parameter name of fabric setting.
* **value**: string (Required): The parameter value of fabric setting.

## SettingsSectionDescription
### Properties
* **name**: string (Required): The section name of the fabric settings.
* **parameters**: [SettingsParameterDescription](#settingsparameterdescription)[] (Required): The collection of parameters in the section.

## Sku
### Properties
* **name**: 'Basic' | 'Standard' | string (Required): Sku Name.

## SubResource
### Properties
* **id**: string: Azure resource identifier.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC).
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: string: The type of identity that last modified the resource.

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## UserAssignedIdentityMap
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## VaultCertificate
### Properties
* **certificateStore**: string (Required): For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. <br><br>For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name <UppercaseThumbprint>.crt for the X509 certificate file and <UppercaseThumbprint>.prv for private key. Both of these files are .pem formatted.
* **certificateUrl**: string (Required): This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>}

## VaultSecretGroup
### Properties
* **sourceVault**: [SubResource](#subresource) (Required): The relative URL of the Key Vault containing all of the certificates in VaultCertificates.
* **vaultCertificates**: [VaultCertificate](#vaultcertificate)[] (Required): The list of key vault references in SourceVault which contain certificates.

## VmManagedIdentity
### Properties
* **userAssignedIdentities**: string[]: The list of user identities associated with the virtual machine scale set under the node type. Each entry will be an ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## VmssExtension
### Properties
* **name**: string (Required): The name of the extension.
* **properties**: [VmssExtensionProperties](#vmssextensionproperties) (Required): Describes the properties of a Virtual Machine Scale Set Extension.

## VmssExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
* **forceUpdateTag**: string: If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed.
* **protectedSettings**: any: The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
* **provisionAfterExtensions**: string[]: Collection of extension names after which this extension needs to be provisioned.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **publisher**: string (Required): The name of the extension handler publisher.
* **settings**: any: Json formatted public settings for the extension.
* **type**: string (Required): Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string (Required): Specifies the version of the script handler.

