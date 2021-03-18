# Microsoft.ServiceFabric @ 2021-01-01-preview

## Resource Microsoft.ServiceFabric/managedClusters@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagedClusterProperties](#managedclusterproperties)
* **sku**: [Sku](#sku)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.ServiceFabric/managedClusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/managedclusters/applications@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedIdentity](#managedidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationResourceProperties](#applicationresourceproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [ProxyResourceTags](#proxyresourcetags)
* **type**: 'Microsoft.ServiceFabric/managedclusters/applications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/managedclusters/applications/services@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServiceResourceProperties](#serviceresourceproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [ProxyResourceTags](#proxyresourcetags)
* **type**: 'Microsoft.ServiceFabric/managedclusters/applications/services' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/managedclusters/applicationTypes@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationTypeResourceProperties](#applicationtyperesourceproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [ProxyResourceTags](#proxyresourcetags)
* **type**: 'Microsoft.ServiceFabric/managedclusters/applicationTypes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/managedclusters/applicationTypes/versions@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationTypeVersionResourceProperties](#applicationtypeversionresourceproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [ProxyResourceTags](#proxyresourcetags)
* **type**: 'Microsoft.ServiceFabric/managedclusters/applicationTypes/versions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/managedClusters/nodeTypes@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NodeTypeProperties](#nodetypeproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [ManagedProxyResourceTags](#managedproxyresourcetags)
* **type**: 'Microsoft.ServiceFabric/managedClusters/nodeTypes' (ReadOnly, DeployTimeConstant)

## ManagedClusterProperties
### Properties
* **addonFeatures**: 'BackupRestoreService' | 'DnsService' | 'ResourceMonitorService'[]
* **adminPassword**: string
* **adminUserName**: string (Required)
* **allowRdpAccess**: bool
* **applicationTypeVersionsCleanupPolicy**: [ApplicationTypeVersionsCleanupPolicy](#applicationtypeversionscleanuppolicy)
* **azureActiveDirectory**: [AzureActiveDirectory](#azureactivedirectory)
* **clientConnectionPort**: int
* **clients**: [ClientCertificate](#clientcertificate)[]
* **clusterCertificateThumbprints**: string[] (ReadOnly)
* **clusterCodeVersion**: string
* **clusterId**: string (ReadOnly)
* **clusterState**: 'BaselineUpgrade' | 'Deploying' | 'Ready' | 'UpgradeFailed' | 'Upgrading' | 'WaitingForNodes' (ReadOnly)
* **dnsName**: string (Required)
* **enableAutoOSUpgrade**: bool
* **fabricSettings**: [SettingsSectionDescription](#settingssectiondescription)[]
* **fqdn**: string (ReadOnly)
* **httpGatewayConnectionPort**: int
* **ipv4Address**: string (ReadOnly)
* **loadBalancingRules**: [LoadBalancingRule](#loadbalancingrule)[]
* **networkSecurityRules**: [NetworkSecurityRule](#networksecurityrule)[]
* **provisioningState**: 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'None' | 'Other' | 'Succeeded' | 'Updating' (ReadOnly)

## ApplicationTypeVersionsCleanupPolicy
### Properties
* **maxUnusedVersionsToKeep**: int (Required)

## AzureActiveDirectory
### Properties
* **clientApplication**: string
* **clusterApplication**: string
* **tenantId**: string

## ClientCertificate
### Properties
* **commonName**: string
* **isAdmin**: bool (Required)
* **issuerThumbprint**: string
* **thumbprint**: string

## SettingsSectionDescription
### Properties
* **name**: string (Required)
* **parameters**: [SettingsParameterDescription](#settingsparameterdescription)[] (Required)

## SettingsParameterDescription
### Properties
* **name**: string (Required)
* **value**: string (Required)

## LoadBalancingRule
### Properties
* **backendPort**: int (Required)
* **frontendPort**: int (Required)
* **probeProtocol**: 'http' | 'https' | 'tcp' (Required)
* **probeRequestPath**: string
* **protocol**: 'tcp' | 'udp' (Required)

## NetworkSecurityRule
### Properties
* **access**: 'allow' | 'deny' (Required)
* **description**: string
* **destinationAddressPrefixes**: string[]
* **destinationPortRanges**: string[]
* **direction**: 'inbound' | 'outbound' (Required)
* **name**: string (Required)
* **priority**: int (Required)
* **protocol**: 'ah' | 'esp' | 'http' | 'https' | 'icmp' | 'tcp' | 'udp' (Required)
* **sourceAddressPrefixes**: string[]
* **sourcePortRanges**: string[]

## Sku
### Properties
* **name**: 'Basic' | 'Standard' (Required)

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned'
* **userAssignedIdentities**: [UserAssignedIdentityMap](#userassignedidentitymap)

## UserAssignedIdentityMap
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## ApplicationResourceProperties
### Properties
* **managedIdentities**: [ApplicationUserAssignedIdentity](#applicationuserassignedidentity)[]
* **parameters**: [ApplicationParameterList](#applicationparameterlist)
* **provisioningState**: string (ReadOnly)
* **upgradePolicy**: [ApplicationUpgradePolicy](#applicationupgradepolicy)
* **version**: string

## ApplicationUserAssignedIdentity
### Properties
* **name**: string (Required)
* **principalId**: string (Required)

## ApplicationParameterList
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationUpgradePolicy
### Properties
* **applicationHealthPolicy**: [ApplicationHealthPolicy](#applicationhealthpolicy)
* **forceRestart**: bool
* **instanceCloseDelayDuration**: int
* **recreateApplication**: bool
* **rollingUpgradeMonitoringPolicy**: [RollingUpgradeMonitoringPolicy](#rollingupgrademonitoringpolicy)
* **upgradeMode**: 'Monitored' | 'UnmonitoredAuto'
* **upgradeReplicaSetCheckTimeout**: int

## ApplicationHealthPolicy
### Properties
* **considerWarningAsError**: bool (Required)
* **defaultServiceTypeHealthPolicy**: [ServiceTypeHealthPolicy](#servicetypehealthpolicy)
* **maxPercentUnhealthyDeployedApplications**: int (Required)
* **serviceTypeHealthPolicyMap**: [ServiceTypeHealthPolicyMap](#servicetypehealthpolicymap)

## ServiceTypeHealthPolicy
### Properties
* **maxPercentUnhealthyPartitionsPerService**: int (Required)
* **maxPercentUnhealthyReplicasPerPartition**: int (Required)
* **maxPercentUnhealthyServices**: int (Required)

## ServiceTypeHealthPolicyMap
### Properties
### Additional Properties
* **Additional Properties Type**: [ServiceTypeHealthPolicy](#servicetypehealthpolicy)

## RollingUpgradeMonitoringPolicy
### Properties
* **failureAction**: 'Manual' | 'Rollback' (Required)
* **healthCheckRetryTimeout**: string (Required)
* **healthCheckStableDuration**: string (Required)
* **healthCheckWaitDuration**: string (Required)
* **upgradeDomainTimeout**: string (Required)
* **upgradeTimeout**: string (Required)

## ProxyResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceResourceProperties
* **Discriminator**: serviceKind

### Base Properties
* **correlationScheme**: [ServiceCorrelation](#servicecorrelation)[]
* **defaultMoveCost**: 'High' | 'Low' | 'Medium' | 'Zero'
* **partitionDescription**: [Partition](#partition) (Required)
* **placementConstraints**: string
* **provisioningState**: string (ReadOnly)
* **scalingPolicies**: [ScalingPolicy](#scalingpolicy)[]
* **serviceDnsName**: string
* **serviceLoadMetrics**: [ServiceLoadMetric](#serviceloadmetric)[]
* **servicePackageActivationMode**: 'ExclusiveProcess' | 'SharedProcess'
* **servicePlacementPolicies**: [ServicePlacementPolicy](#serviceplacementpolicy)[]
* **serviceTypeName**: string (Required)
### StatefulServiceProperties
#### Properties
* **dropSourceReplicaOnMove**: bool
* **hasPersistedState**: bool
* **minReplicaSetSize**: int
* **quorumLossWaitDuration**: string
* **replicaRestartWaitDuration**: string
* **serviceKind**: 'Stateful' (Required)
* **servicePlacementTimeLimit**: string
* **standByReplicaKeepDuration**: string
* **targetReplicaSetSize**: int

### StatelessServiceProperties
#### Properties
* **instanceCloseDelayDuration**: string
* **instanceCount**: int (Required)
* **minInstanceCount**: int
* **minInstancePercentage**: int
* **serviceKind**: 'Stateless' (Required)


## ServiceCorrelation
### Properties
* **scheme**: 'AlignedAffinity' | 'NonAlignedAffinity' (Required)
* **serviceName**: string (Required)

## Partition
* **Discriminator**: partitionScheme

### Base Properties
### NamedPartitionScheme
#### Properties
* **names**: string[] (Required)
* **partitionScheme**: 'Named' (Required)

### SingletonPartitionScheme
#### Properties
* **partitionScheme**: 'Singleton' (Required)

### UniformInt64RangePartitionScheme
#### Properties
* **count**: int (Required)
* **highKey**: int (Required)
* **lowKey**: int (Required)
* **partitionScheme**: 'UniformInt64Range' (Required)


## NamedPartitionScheme
### Properties
* **names**: string[] (Required)
* **partitionScheme**: 'Named' (Required)

## SingletonPartitionScheme
### Properties
* **partitionScheme**: 'Singleton' (Required)

## UniformInt64RangePartitionScheme
### Properties
* **count**: int (Required)
* **highKey**: int (Required)
* **lowKey**: int (Required)
* **partitionScheme**: 'UniformInt64Range' (Required)

## ScalingPolicy
### Properties
* **scalingMechanism**: [ScalingMechanism](#scalingmechanism) (Required)
* **scalingTrigger**: [ScalingTrigger](#scalingtrigger) (Required)

## ScalingMechanism
* **Discriminator**: kind

### Base Properties
### AddRemoveIncrementalNamedPartitionScalingMechanism
#### Properties
* **kind**: 'AddRemoveIncrementalNamedPartition' (Required)
* **maxPartitionCount**: int (Required)
* **minPartitionCount**: int (Required)
* **scaleIncrement**: int (Required)

### PartitionInstanceCountScaleMechanism
#### Properties
* **kind**: 'ScalePartitionInstanceCount' (Required)
* **maxInstanceCount**: int (Required)
* **minInstanceCount**: int (Required)
* **scaleIncrement**: int (Required)


## AddRemoveIncrementalNamedPartitionScalingMechanism
### Properties
* **kind**: 'AddRemoveIncrementalNamedPartition' (Required)
* **maxPartitionCount**: int (Required)
* **minPartitionCount**: int (Required)
* **scaleIncrement**: int (Required)

## PartitionInstanceCountScaleMechanism
### Properties
* **kind**: 'ScalePartitionInstanceCount' (Required)
* **maxInstanceCount**: int (Required)
* **minInstanceCount**: int (Required)
* **scaleIncrement**: int (Required)

## ScalingTrigger
* **Discriminator**: kind

### Base Properties
### AveragePartitionLoadScalingTrigger
#### Properties
* **kind**: 'AveragePartitionLoadTrigger' (Required)
* **lowerLoadThreshold**: int (Required)
* **metricName**: string (Required)
* **scaleInterval**: string (Required)
* **upperLoadThreshold**: int (Required)

### AverageServiceLoadScalingTrigger
#### Properties
* **kind**: 'AverageServiceLoadTrigger' (Required)
* **lowerLoadThreshold**: int (Required)
* **metricName**: string (Required)
* **scaleInterval**: string (Required)
* **upperLoadThreshold**: int (Required)


## AveragePartitionLoadScalingTrigger
### Properties
* **kind**: 'AveragePartitionLoadTrigger' (Required)
* **lowerLoadThreshold**: int (Required)
* **metricName**: string (Required)
* **scaleInterval**: string (Required)
* **upperLoadThreshold**: int (Required)

## AverageServiceLoadScalingTrigger
### Properties
* **kind**: 'AverageServiceLoadTrigger' (Required)
* **lowerLoadThreshold**: int (Required)
* **metricName**: string (Required)
* **scaleInterval**: string (Required)
* **upperLoadThreshold**: int (Required)

## ServiceLoadMetric
### Properties
* **defaultLoad**: int
* **name**: string (Required)
* **primaryDefaultLoad**: int
* **secondaryDefaultLoad**: int
* **weight**: 'High' | 'Low' | 'Medium' | 'Zero'

## ServicePlacementPolicy
* **Discriminator**: type

### Base Properties
### ServicePlacementInvalidDomainPolicy
#### Properties
* **domainName**: string (Required)
* **type**: 'InvalidDomain' (Required)

### ServicePlacementNonPartiallyPlaceServicePolicy
#### Properties
* **type**: 'NonPartiallyPlaceService' (Required)

### ServicePlacementPreferPrimaryDomainPolicy
#### Properties
* **domainName**: string (Required)
* **type**: 'PreferredPrimaryDomain' (Required)

### ServicePlacementRequiredDomainPolicy
#### Properties
* **domainName**: string (Required)
* **type**: 'RequiredDomain' (Required)

### ServicePlacementRequireDomainDistributionPolicy
#### Properties
* **domainName**: string (Required)
* **type**: 'RequiredDomainDistribution' (Required)


## ServicePlacementInvalidDomainPolicy
### Properties
* **domainName**: string (Required)
* **type**: 'InvalidDomain' (Required)

## ServicePlacementNonPartiallyPlaceServicePolicy
### Properties
* **type**: 'NonPartiallyPlaceService' (Required)

## ServicePlacementPreferPrimaryDomainPolicy
### Properties
* **domainName**: string (Required)
* **type**: 'PreferredPrimaryDomain' (Required)

## ServicePlacementRequiredDomainPolicy
### Properties
* **domainName**: string (Required)
* **type**: 'RequiredDomain' (Required)

## ServicePlacementRequireDomainDistributionPolicy
### Properties
* **domainName**: string (Required)
* **type**: 'RequiredDomainDistribution' (Required)

## StatefulServiceProperties
### Properties
* **dropSourceReplicaOnMove**: bool
* **hasPersistedState**: bool
* **minReplicaSetSize**: int
* **quorumLossWaitDuration**: string
* **replicaRestartWaitDuration**: string
* **serviceKind**: 'Stateful' (Required)
* **servicePlacementTimeLimit**: string
* **standByReplicaKeepDuration**: string
* **targetReplicaSetSize**: int

## StatelessServiceProperties
### Properties
* **instanceCloseDelayDuration**: string
* **instanceCount**: int (Required)
* **minInstanceCount**: int
* **minInstancePercentage**: int
* **serviceKind**: 'Stateless' (Required)

## ProxyResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationTypeResourceProperties
### Properties
* **provisioningState**: string (ReadOnly)

## ProxyResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationTypeVersionResourceProperties
### Properties
* **appPackageUrl**: string (Required)
* **provisioningState**: string (ReadOnly)

## ProxyResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NodeTypeProperties
### Properties
* **applicationPorts**: [EndpointRangeDescription](#endpointrangedescription)
* **capacities**: [NodeTypePropertiesCapacities](#nodetypepropertiescapacities)
* **dataDiskSizeGB**: int (Required)
* **ephemeralPorts**: [EndpointRangeDescription](#endpointrangedescription)
* **isPrimary**: bool (Required)
* **placementProperties**: [NodeTypePropertiesPlacementProperties](#nodetypepropertiesplacementproperties)
* **provisioningState**: 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'None' | 'Other' | 'Succeeded' | 'Updating' (ReadOnly)
* **vmExtensions**: [VmssExtension](#vmssextension)[]
* **vmImageOffer**: string
* **vmImagePublisher**: string
* **vmImageSku**: string
* **vmImageVersion**: string
* **vmInstanceCount**: int (Required)
* **vmManagedIdentity**: [VmManagedIdentity](#vmmanagedidentity)
* **vmSecrets**: [VaultSecretGroup](#vaultsecretgroup)[]
* **vmSize**: string

## EndpointRangeDescription
### Properties
* **endPort**: int (Required)
* **startPort**: int (Required)

## NodeTypePropertiesCapacities
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NodeTypePropertiesPlacementProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VmssExtension
### Properties
* **name**: string (Required)
* **properties**: [VmssExtensionProperties](#vmssextensionproperties) (Required)

## VmssExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool
* **forceUpdateTag**: string
* **protectedSettings**: any
* **provisionAfterExtensions**: string[]
* **provisioningState**: string (ReadOnly)
* **publisher**: string (Required)
* **settings**: any
* **type**: string (Required)
* **typeHandlerVersion**: string (Required)

## VmManagedIdentity
### Properties
* **userAssignedIdentities**: string[]

## VaultSecretGroup
### Properties
* **sourceVault**: [SubResource](#subresource) (Required)
* **vaultCertificates**: [VaultCertificate](#vaultcertificate)[] (Required)

## SubResource
### Properties
* **id**: string

## VaultCertificate
### Properties
* **certificateStore**: string (Required)
* **certificateUrl**: string (Required)

## ManagedProxyResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

