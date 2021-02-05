# Microsoft.ServiceFabric @ 2021-01-01-preview

## Resource Microsoft.ServiceFabric/managedClusters@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagedClusterProperties
* **sku**: Sku
* **systemData**: SystemData
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ServiceFabric/managedClusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/managedclusters/applications@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ManagedIdentity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationResourceProperties
* **systemData**: SystemData
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ServiceFabric/managedclusters/applications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/managedclusters/applications/services@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServiceResourceProperties
* **systemData**: SystemData
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ServiceFabric/managedclusters/applications/services' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/managedclusters/applicationTypes@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationTypeResourceProperties
* **systemData**: SystemData
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ServiceFabric/managedclusters/applicationTypes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/managedclusters/applicationTypes/versions@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationTypeVersionResourceProperties
* **systemData**: SystemData
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ServiceFabric/managedclusters/applicationTypes/versions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/managedClusters/nodeTypes@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: NodeTypeProperties
* **systemData**: SystemData
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ServiceFabric/managedClusters/nodeTypes' (ReadOnly, DeployTimeConstant)

## ManagedClusterProperties
### Properties
* **addonFeatures**: 'BackupRestoreService' | 'DnsService' | 'ResourceMonitorService'[]
* **adminPassword**: string
* **adminUserName**: string (Required)
* **allowRdpAccess**: bool
* **applicationTypeVersionsCleanupPolicy**: ApplicationTypeVersionsCleanupPolicy
* **azureActiveDirectory**: AzureActiveDirectory
* **clientConnectionPort**: int
* **clients**: ClientCertificate[]
* **clusterCertificateThumbprints**: string[] (ReadOnly)
* **clusterCodeVersion**: string
* **clusterId**: string (ReadOnly)
* **clusterState**: 'BaselineUpgrade' | 'Deploying' | 'Ready' | 'UpgradeFailed' | 'Upgrading' | 'WaitingForNodes' (ReadOnly)
* **dnsName**: string (Required)
* **enableAutoOSUpgrade**: bool
* **fabricSettings**: SettingsSectionDescription[]
* **fqdn**: string (ReadOnly)
* **httpGatewayConnectionPort**: int
* **ipv4Address**: string (ReadOnly)
* **loadBalancingRules**: LoadBalancingRule[]
* **networkSecurityRules**: NetworkSecurityRule[]
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
* **parameters**: SettingsParameterDescription[] (Required)

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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned'
* **userAssignedIdentities**: Dictionary<string,UserAssignedIdentity>

## Dictionary<string,UserAssignedIdentity>
### Properties
### Additional Properties
* **Additional Properties Type**: UserAssignedIdentity

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## ApplicationResourceProperties
### Properties
* **managedIdentities**: ApplicationUserAssignedIdentity[]
* **parameters**: Dictionary<string,String>
* **provisioningState**: string (ReadOnly)
* **upgradePolicy**: ApplicationUpgradePolicy
* **version**: string

## ApplicationUserAssignedIdentity
### Properties
* **name**: string (Required)
* **principalId**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationUpgradePolicy
### Properties
* **applicationHealthPolicy**: ApplicationHealthPolicy
* **forceRestart**: bool
* **instanceCloseDelayDuration**: int
* **recreateApplication**: bool
* **rollingUpgradeMonitoringPolicy**: RollingUpgradeMonitoringPolicy
* **upgradeMode**: 'Monitored' | 'UnmonitoredAuto'
* **upgradeReplicaSetCheckTimeout**: int

## ApplicationHealthPolicy
### Properties
* **considerWarningAsError**: bool (Required)
* **defaultServiceTypeHealthPolicy**: ServiceTypeHealthPolicy
* **maxPercentUnhealthyDeployedApplications**: int (Required)
* **serviceTypeHealthPolicyMap**: Dictionary<string,ServiceTypeHealthPolicy>

## ServiceTypeHealthPolicy
### Properties
* **maxPercentUnhealthyPartitionsPerService**: int (Required)
* **maxPercentUnhealthyReplicasPerPartition**: int (Required)
* **maxPercentUnhealthyServices**: int (Required)

## Dictionary<string,ServiceTypeHealthPolicy>
### Properties
### Additional Properties
* **Additional Properties Type**: ServiceTypeHealthPolicy

## RollingUpgradeMonitoringPolicy
### Properties
* **failureAction**: 'Manual' | 'Rollback' (Required)
* **healthCheckRetryTimeout**: string (Required)
* **healthCheckStableDuration**: string (Required)
* **healthCheckWaitDuration**: string (Required)
* **upgradeDomainTimeout**: string (Required)
* **upgradeTimeout**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceResourceProperties
* **Discriminator**: serviceKind
### Base Properties
* **correlationScheme**: ServiceCorrelation[]
* **defaultMoveCost**: 'High' | 'Low' | 'Medium' | 'Zero'
* **partitionDescription**: Partition (Required)
* **placementConstraints**: string
* **provisioningState**: string (ReadOnly)
* **scalingPolicies**: ScalingPolicy[]
* **serviceDnsName**: string
* **serviceLoadMetrics**: ServiceLoadMetric[]
* **servicePackageActivationMode**: 'ExclusiveProcess' | 'SharedProcess'
* **servicePlacementPolicies**: ServicePlacementPolicy[]
* **serviceTypeName**: string (Required)
### Stateful
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

### Stateless
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
### Named
#### Properties
* **names**: string[] (Required)
* **partitionScheme**: 'Named' (Required)

### Singleton
#### Properties
* **partitionScheme**: 'Singleton' (Required)

### UniformInt64Range
#### Properties
* **count**: int (Required)
* **highKey**: int (Required)
* **lowKey**: int (Required)
* **partitionScheme**: 'UniformInt64Range' (Required)


## Named
### Properties
* **names**: string[] (Required)
* **partitionScheme**: 'Named' (Required)

## Singleton
### Properties
* **partitionScheme**: 'Singleton' (Required)

## UniformInt64Range
### Properties
* **count**: int (Required)
* **highKey**: int (Required)
* **lowKey**: int (Required)
* **partitionScheme**: 'UniformInt64Range' (Required)

## ScalingPolicy
### Properties
* **scalingMechanism**: ScalingMechanism (Required)
* **scalingTrigger**: ScalingTrigger (Required)

## ScalingMechanism
* **Discriminator**: kind
### Base Properties
### AddRemoveIncrementalNamedPartition
#### Properties
* **kind**: 'AddRemoveIncrementalNamedPartition' (Required)
* **maxPartitionCount**: int (Required)
* **minPartitionCount**: int (Required)
* **scaleIncrement**: int (Required)

### ScalePartitionInstanceCount
#### Properties
* **kind**: 'ScalePartitionInstanceCount' (Required)
* **maxInstanceCount**: int (Required)
* **minInstanceCount**: int (Required)
* **scaleIncrement**: int (Required)


## AddRemoveIncrementalNamedPartition
### Properties
* **kind**: 'AddRemoveIncrementalNamedPartition' (Required)
* **maxPartitionCount**: int (Required)
* **minPartitionCount**: int (Required)
* **scaleIncrement**: int (Required)

## ScalePartitionInstanceCount
### Properties
* **kind**: 'ScalePartitionInstanceCount' (Required)
* **maxInstanceCount**: int (Required)
* **minInstanceCount**: int (Required)
* **scaleIncrement**: int (Required)

## ScalingTrigger
* **Discriminator**: kind
### Base Properties
### AveragePartitionLoadTrigger
#### Properties
* **kind**: 'AveragePartitionLoadTrigger' (Required)
* **lowerLoadThreshold**: int (Required)
* **metricName**: string (Required)
* **scaleInterval**: string (Required)
* **upperLoadThreshold**: int (Required)

### AverageServiceLoadTrigger
#### Properties
* **kind**: 'AverageServiceLoadTrigger' (Required)
* **lowerLoadThreshold**: int (Required)
* **metricName**: string (Required)
* **scaleInterval**: string (Required)
* **upperLoadThreshold**: int (Required)


## AveragePartitionLoadTrigger
### Properties
* **kind**: 'AveragePartitionLoadTrigger' (Required)
* **lowerLoadThreshold**: int (Required)
* **metricName**: string (Required)
* **scaleInterval**: string (Required)
* **upperLoadThreshold**: int (Required)

## AverageServiceLoadTrigger
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
### InvalidDomain
#### Properties
* **domainName**: string (Required)
* **type**: 'InvalidDomain' (Required)

### NonPartiallyPlaceService
#### Properties
* **type**: 'NonPartiallyPlaceService' (Required)

### PreferredPrimaryDomain
#### Properties
* **domainName**: string (Required)
* **type**: 'PreferredPrimaryDomain' (Required)

### RequiredDomain
#### Properties
* **domainName**: string (Required)
* **type**: 'RequiredDomain' (Required)

### RequiredDomainDistribution
#### Properties
* **domainName**: string (Required)
* **type**: 'RequiredDomainDistribution' (Required)


## InvalidDomain
### Properties
* **domainName**: string (Required)
* **type**: 'InvalidDomain' (Required)

## NonPartiallyPlaceService
### Properties
* **type**: 'NonPartiallyPlaceService' (Required)

## PreferredPrimaryDomain
### Properties
* **domainName**: string (Required)
* **type**: 'PreferredPrimaryDomain' (Required)

## RequiredDomain
### Properties
* **domainName**: string (Required)
* **type**: 'RequiredDomain' (Required)

## RequiredDomainDistribution
### Properties
* **domainName**: string (Required)
* **type**: 'RequiredDomainDistribution' (Required)

## Stateful
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

## Stateless
### Properties
* **instanceCloseDelayDuration**: string
* **instanceCount**: int (Required)
* **minInstanceCount**: int
* **minInstancePercentage**: int
* **serviceKind**: 'Stateless' (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationTypeResourceProperties
### Properties
* **provisioningState**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationTypeVersionResourceProperties
### Properties
* **appPackageUrl**: string (Required)
* **provisioningState**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NodeTypeProperties
### Properties
* **applicationPorts**: EndpointRangeDescription
* **capacities**: Dictionary<string,String>
* **dataDiskSizeGB**: int (Required)
* **ephemeralPorts**: EndpointRangeDescription
* **isPrimary**: bool (Required)
* **placementProperties**: Dictionary<string,String>
* **provisioningState**: 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'None' | 'Other' | 'Succeeded' | 'Updating' (ReadOnly)
* **vmExtensions**: VMSSExtension[]
* **vmImageOffer**: string
* **vmImagePublisher**: string
* **vmImageSku**: string
* **vmImageVersion**: string
* **vmInstanceCount**: int (Required)
* **vmManagedIdentity**: VmManagedIdentity
* **vmSecrets**: VaultSecretGroup[]
* **vmSize**: string

## EndpointRangeDescription
### Properties
* **endPort**: int (Required)
* **startPort**: int (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VMSSExtension
### Properties
* **name**: string (Required)
* **properties**: VMSSExtensionProperties (Required)

## VMSSExtensionProperties
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
* **sourceVault**: SubResource (Required)
* **vaultCertificates**: VaultCertificate[] (Required)

## SubResource
### Properties
* **id**: string

## VaultCertificate
### Properties
* **certificateStore**: string (Required)
* **certificateUrl**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

