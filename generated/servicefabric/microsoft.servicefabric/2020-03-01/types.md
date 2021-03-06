# Microsoft.ServiceFabric @ 2020-03-01

## Resource Microsoft.ServiceFabric/clusters@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ClusterProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.ServiceFabric/clusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/clusters/applications@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ManagedIdentity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationResourceProperties
* **tags**: ProxyResourceTags
* **type**: 'Microsoft.ServiceFabric/clusters/applications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/clusters/applications/services@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServiceResourceProperties
* **tags**: ProxyResourceTags
* **type**: 'Microsoft.ServiceFabric/clusters/applications/services' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/clusters/applicationTypes@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationTypeResourceProperties
* **tags**: ProxyResourceTags
* **type**: 'Microsoft.ServiceFabric/clusters/applicationTypes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/clusters/applicationTypes/versions@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationTypeVersionResourceProperties
* **tags**: ProxyResourceTags
* **type**: 'Microsoft.ServiceFabric/clusters/applicationTypes/versions' (ReadOnly, DeployTimeConstant)

## ClusterProperties
### Properties
* **addOnFeatures**: 'BackupRestoreService' | 'DnsService' | 'RepairManager' | 'ResourceMonitorService'[]
* **applicationTypeVersionsCleanupPolicy**: ApplicationTypeVersionsCleanupPolicy
* **availableClusterVersions**: ClusterVersionDetails[] (ReadOnly)
* **azureActiveDirectory**: AzureActiveDirectory
* **certificate**: CertificateDescription
* **certificateCommonNames**: ServerCertificateCommonNames
* **clientCertificateCommonNames**: ClientCertificateCommonName[]
* **clientCertificateThumbprints**: ClientCertificateThumbprint[]
* **clusterCodeVersion**: string
* **clusterEndpoint**: string (ReadOnly)
* **clusterId**: string (ReadOnly)
* **clusterState**: 'AutoScale' | 'BaselineUpgrade' | 'Deploying' | 'EnforcingClusterVersion' | 'Ready' | 'UpdatingInfrastructure' | 'UpdatingUserCertificate' | 'UpdatingUserConfiguration' | 'UpgradeServiceUnreachable' | 'WaitingForNodes' (ReadOnly)
* **diagnosticsStorageAccountConfig**: DiagnosticsStorageAccountConfig
* **eventStoreServiceEnabled**: bool
* **fabricSettings**: SettingsSectionDescription[]
* **managementEndpoint**: string (Required)
* **nodeTypes**: NodeTypeDescription[] (Required)
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **reliabilityLevel**: 'Bronze' | 'Gold' | 'None' | 'Platinum' | 'Silver'
* **reverseProxyCertificate**: CertificateDescription
* **reverseProxyCertificateCommonNames**: ServerCertificateCommonNames
* **upgradeDescription**: ClusterUpgradePolicy
* **upgradeMode**: 'Automatic' | 'Manual'
* **vmImage**: string

## ApplicationTypeVersionsCleanupPolicy
### Properties
* **maxUnusedVersionsToKeep**: int (Required)

## ClusterVersionDetails
### Properties
* **codeVersion**: string
* **environment**: 'Linux' | 'Windows'
* **supportExpiryUtc**: string

## AzureActiveDirectory
### Properties
* **clientApplication**: string
* **clusterApplication**: string
* **tenantId**: string

## CertificateDescription
### Properties
* **thumbprint**: string (Required)
* **thumbprintSecondary**: string
* **x509StoreName**: 'AddressBook' | 'AuthRoot' | 'CertificateAuthority' | 'Disallowed' | 'My' | 'Root' | 'TrustedPeople' | 'TrustedPublisher'

## ServerCertificateCommonNames
### Properties
* **commonNames**: ServerCertificateCommonName[]
* **x509StoreName**: 'AddressBook' | 'AuthRoot' | 'CertificateAuthority' | 'Disallowed' | 'My' | 'Root' | 'TrustedPeople' | 'TrustedPublisher'

## ServerCertificateCommonName
### Properties
* **certificateCommonName**: string (Required)
* **certificateIssuerThumbprint**: string (Required)

## ClientCertificateCommonName
### Properties
* **certificateCommonName**: string (Required)
* **certificateIssuerThumbprint**: string (Required)
* **isAdmin**: bool (Required)

## ClientCertificateThumbprint
### Properties
* **certificateThumbprint**: string (Required)
* **isAdmin**: bool (Required)

## DiagnosticsStorageAccountConfig
### Properties
* **blobEndpoint**: string (Required)
* **protectedAccountKeyName**: string (Required)
* **protectedAccountKeyName2**: string
* **queueEndpoint**: string (Required)
* **storageAccountName**: string (Required)
* **tableEndpoint**: string (Required)

## SettingsSectionDescription
### Properties
* **name**: string (Required)
* **parameters**: SettingsParameterDescription[] (Required)

## SettingsParameterDescription
### Properties
* **name**: string (Required)
* **value**: string (Required)

## NodeTypeDescription
### Properties
* **applicationPorts**: EndpointRangeDescription
* **capacities**: NodeTypeDescriptionCapacities
* **clientConnectionEndpointPort**: int (Required)
* **durabilityLevel**: 'Bronze' | 'Gold' | 'Silver'
* **ephemeralPorts**: EndpointRangeDescription
* **httpGatewayEndpointPort**: int (Required)
* **isPrimary**: bool (Required)
* **name**: string (Required)
* **placementProperties**: NodeTypeDescriptionPlacementProperties
* **reverseProxyEndpointPort**: int
* **vmInstanceCount**: int (Required)

## EndpointRangeDescription
### Properties
* **endPort**: int (Required)
* **startPort**: int (Required)

## NodeTypeDescriptionCapacities
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NodeTypeDescriptionPlacementProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ClusterUpgradePolicy
### Properties
* **deltaHealthPolicy**: ClusterUpgradeDeltaHealthPolicy
* **forceRestart**: bool
* **healthCheckRetryTimeout**: string (Required)
* **healthCheckStableDuration**: string (Required)
* **healthCheckWaitDuration**: string (Required)
* **healthPolicy**: ClusterHealthPolicy (Required)
* **upgradeDomainTimeout**: string (Required)
* **upgradeReplicaSetCheckTimeout**: string (Required)
* **upgradeTimeout**: string (Required)

## ClusterUpgradeDeltaHealthPolicy
### Properties
* **applicationDeltaHealthPolicies**: ApplicationDeltaHealthPolicyMap
* **maxPercentDeltaUnhealthyApplications**: int (Required)
* **maxPercentDeltaUnhealthyNodes**: int (Required)
* **maxPercentUpgradeDomainDeltaUnhealthyNodes**: int (Required)

## ApplicationDeltaHealthPolicyMap
### Properties
### Additional Properties
* **Additional Properties Type**: ApplicationDeltaHealthPolicy

## ApplicationDeltaHealthPolicy
### Properties
* **defaultServiceTypeDeltaHealthPolicy**: ServiceTypeDeltaHealthPolicy
* **serviceTypeDeltaHealthPolicies**: ServiceTypeDeltaHealthPolicyMap

## ServiceTypeDeltaHealthPolicy
### Properties
* **maxPercentDeltaUnhealthyServices**: int

## ServiceTypeDeltaHealthPolicyMap
### Properties
### Additional Properties
* **Additional Properties Type**: ServiceTypeDeltaHealthPolicy

## ClusterHealthPolicy
### Properties
* **applicationHealthPolicies**: ApplicationHealthPolicyMap
* **maxPercentUnhealthyApplications**: int
* **maxPercentUnhealthyNodes**: int

## ApplicationHealthPolicyMap
### Properties
### Additional Properties
* **Additional Properties Type**: ApplicationHealthPolicy

## ApplicationHealthPolicy
### Properties
* **defaultServiceTypeHealthPolicy**: ServiceTypeHealthPolicy
* **serviceTypeHealthPolicies**: ServiceTypeHealthPolicyMap

## ServiceTypeHealthPolicy
### Properties
* **maxPercentUnhealthyServices**: int

## ServiceTypeHealthPolicyMap
### Properties
### Additional Properties
* **Additional Properties Type**: ServiceTypeHealthPolicy

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned'
* **userAssignedIdentities**: UserAssignedIdentityMap

## UserAssignedIdentityMap
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
* **maximumNodes**: int
* **metrics**: ApplicationMetricDescription[]
* **minimumNodes**: int
* **parameters**: ApplicationParameterList
* **provisioningState**: string (ReadOnly)
* **removeApplicationCapacity**: bool
* **typeName**: string
* **typeVersion**: string
* **upgradePolicy**: ApplicationUpgradePolicy

## ApplicationUserAssignedIdentity
### Properties
* **name**: string (Required)
* **principalId**: string (Required)

## ApplicationMetricDescription
### Properties
* **maximumCapacity**: int
* **name**: string
* **reservationCapacity**: int
* **totalApplicationCapacity**: int

## ApplicationParameterList
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationUpgradePolicy
### Properties
* **applicationHealthPolicy**: ArmApplicationHealthPolicy
* **forceRestart**: bool
* **rollingUpgradeMonitoringPolicy**: ArmRollingUpgradeMonitoringPolicy
* **upgradeMode**: 'Invalid' | 'Monitored' | 'UnmonitoredAuto' | 'UnmonitoredManual'
* **upgradeReplicaSetCheckTimeout**: string

## ArmApplicationHealthPolicy
### Properties
* **considerWarningAsError**: bool
* **defaultServiceTypeHealthPolicy**: ArmServiceTypeHealthPolicy
* **maxPercentUnhealthyDeployedApplications**: int
* **serviceTypeHealthPolicyMap**: ArmServiceTypeHealthPolicyMap

## ArmServiceTypeHealthPolicy
### Properties
* **maxPercentUnhealthyPartitionsPerService**: int
* **maxPercentUnhealthyReplicasPerPartition**: int
* **maxPercentUnhealthyServices**: int

## ArmServiceTypeHealthPolicyMap
### Properties
### Additional Properties
* **Additional Properties Type**: ArmServiceTypeHealthPolicy

## ArmRollingUpgradeMonitoringPolicy
### Properties
* **failureAction**: 'Manual' | 'Rollback'
* **healthCheckRetryTimeout**: string
* **healthCheckStableDuration**: string
* **healthCheckWaitDuration**: string
* **upgradeDomainTimeout**: string
* **upgradeTimeout**: string

## ProxyResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceResourceProperties
* **Discriminator**: serviceKind

### Base Properties
* **correlationScheme**: ServiceCorrelationDescription[]
* **defaultMoveCost**: 'High' | 'Low' | 'Medium' | 'Zero'
* **partitionDescription**: PartitionSchemeDescription
* **placementConstraints**: string
* **provisioningState**: string (ReadOnly)
* **serviceDnsName**: string
* **serviceLoadMetrics**: ServiceLoadMetricDescription[]
* **servicePackageActivationMode**: 'ExclusiveProcess' | 'SharedProcess'
* **servicePlacementPolicies**: ServicePlacementPolicyDescription[]
* **serviceTypeName**: string
### StatefulServiceProperties
#### Properties
* **hasPersistedState**: bool
* **minReplicaSetSize**: int
* **quorumLossWaitDuration**: string
* **replicaRestartWaitDuration**: string
* **serviceKind**: 'Stateful' (Required)
* **standByReplicaKeepDuration**: string
* **targetReplicaSetSize**: int

### StatelessServiceProperties
#### Properties
* **instanceCloseDelayDuration**: string
* **instanceCount**: int
* **serviceKind**: 'Stateless' (Required)


## ServiceCorrelationDescription
### Properties
* **scheme**: 'Affinity' | 'AlignedAffinity' | 'Invalid' | 'NonAlignedAffinity' (Required)
* **serviceName**: string (Required)

## PartitionSchemeDescription
* **Discriminator**: partitionScheme

### Base Properties
### NamedPartitionSchemeDescription
#### Properties
* **count**: int (Required)
* **names**: string[] (Required)
* **partitionScheme**: 'Named' (Required)

### SingletonPartitionSchemeDescription
#### Properties
* **partitionScheme**: 'Singleton' (Required)

### UniformInt64RangePartitionSchemeDescription
#### Properties
* **count**: int (Required)
* **highKey**: string (Required)
* **lowKey**: string (Required)
* **partitionScheme**: 'UniformInt64Range' (Required)


## NamedPartitionSchemeDescription
### Properties
* **count**: int (Required)
* **names**: string[] (Required)
* **partitionScheme**: 'Named' (Required)

## SingletonPartitionSchemeDescription
### Properties
* **partitionScheme**: 'Singleton' (Required)

## UniformInt64RangePartitionSchemeDescription
### Properties
* **count**: int (Required)
* **highKey**: string (Required)
* **lowKey**: string (Required)
* **partitionScheme**: 'UniformInt64Range' (Required)

## ServiceLoadMetricDescription
### Properties
* **defaultLoad**: int
* **name**: string (Required)
* **primaryDefaultLoad**: int
* **secondaryDefaultLoad**: int
* **weight**: 'High' | 'Low' | 'Medium' | 'Zero'

## ServicePlacementPolicyDescription
* **Discriminator**: type

### Base Properties

## StatefulServiceProperties
### Properties
* **hasPersistedState**: bool
* **minReplicaSetSize**: int
* **quorumLossWaitDuration**: string
* **replicaRestartWaitDuration**: string
* **serviceKind**: 'Stateful' (Required)
* **standByReplicaKeepDuration**: string
* **targetReplicaSetSize**: int

## StatelessServiceProperties
### Properties
* **instanceCloseDelayDuration**: string
* **instanceCount**: int
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
* **defaultParameterList**: ApplicationTypeParameterList (ReadOnly)
* **provisioningState**: string (ReadOnly)

## ApplicationTypeParameterList
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

