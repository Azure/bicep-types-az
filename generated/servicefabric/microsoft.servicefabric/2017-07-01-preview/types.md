# Microsoft.ServiceFabric @ 2017-07-01-preview

## Resource Microsoft.ServiceFabric/clusters@2017-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ClusterProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.ServiceFabric/clusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/clusters/applications@2017-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationResourceProperties
* **type**: 'Microsoft.ServiceFabric/clusters/applications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/clusters/applications/services@2017-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServiceResourceProperties
* **type**: 'Microsoft.ServiceFabric/clusters/applications/services' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/clusters/applicationTypes@2017-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationTypeResourceProperties
* **type**: 'Microsoft.ServiceFabric/clusters/applicationTypes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/clusters/applicationTypes/versions@2017-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationTypeVersionResourceProperties
* **type**: 'Microsoft.ServiceFabric/clusters/applicationTypes/versions' (ReadOnly, DeployTimeConstant)

## ClusterProperties
### Properties
* **addOnFeatures**: 'BackupRestoreService' | 'DnsService' | 'RepairManager'[]
* **availableClusterVersions**: ClusterVersionDetails[]
* **azureActiveDirectory**: AzureActiveDirectory
* **certificate**: CertificateDescription
* **clientCertificateCommonNames**: ClientCertificateCommonName[]
* **clientCertificateThumbprints**: ClientCertificateThumbprint[]
* **clusterCodeVersion**: string
* **clusterEndpoint**: string (ReadOnly)
* **clusterId**: string (ReadOnly)
* **clusterState**: 'AutoScale' | 'BaselineUpgrade' | 'Deploying' | 'EnforcingClusterVersion' | 'Ready' | 'UpdatingInfrastructure' | 'UpdatingUserCertificate' | 'UpdatingUserConfiguration' | 'UpgradeServiceUnreachable' | 'WaitingForNodes'
* **diagnosticsStorageAccountConfig**: DiagnosticsStorageAccountConfig
* **fabricSettings**: SettingsSectionDescription[]
* **managementEndpoint**: string (Required)
* **nodeTypes**: NodeTypeDescription[] (Required)
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **reliabilityLevel**: 'Bronze' | 'Gold' | 'None' | 'Platinum' | 'Silver'
* **reverseProxyCertificate**: CertificateDescription
* **upgradeDescription**: ClusterUpgradePolicy
* **upgradeMode**: 'Automatic' | 'Manual'
* **vmImage**: string

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
* **maxPercentDeltaUnhealthyApplications**: int (Required)
* **maxPercentDeltaUnhealthyNodes**: int (Required)
* **maxPercentUpgradeDomainDeltaUnhealthyNodes**: int (Required)

## ClusterHealthPolicy
### Properties
* **maxPercentUnhealthyApplications**: int
* **maxPercentUnhealthyNodes**: int

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationResourceProperties
### Properties
* **maximumNodes**: int
* **metrics**: ApplicationMetricDescription[]
* **minimumNodes**: int
* **parameters**: ApplicationParameterList
* **provisioningState**: string (ReadOnly)
* **removeApplicationCapacity**: bool
* **typeName**: string
* **typeVersion**: string
* **upgradePolicy**: ApplicationUpgradePolicy

## ApplicationMetricDescription
### Properties
* **MaximumCapacity**: int
* **Name**: string
* **ReservationCapacity**: int
* **TotalApplicationCapacity**: int

## ApplicationParameterList
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationUpgradePolicy
### Properties
* **applicationHealthPolicy**: ArmApplicationHealthPolicy
* **forceRestart**: bool
* **rollingUpgradeMonitoringPolicy**: ArmRollingUpgradeMonitoringPolicy
* **upgradeReplicaSetCheckTimeout**: string

## ArmApplicationHealthPolicy
### Properties
* **ConsiderWarningAsError**: bool
* **DefaultServiceTypeHealthPolicy**: ArmServiceTypeHealthPolicy
* **MaxPercentUnhealthyDeployedApplications**: int
* **ServiceTypeHealthPolicyMap**: ArmServiceTypeHealthPolicyMap

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

## ServiceResourceProperties
* **Discriminator**: serviceKind

### Base Properties
* **correlationScheme**: ServiceCorrelationDescription[]
* **defaultMoveCost**: 'High' | 'Low' | 'Medium' | 'Zero'
* **partitionDescription**: PartitionSchemeDescription
* **placementConstraints**: string
* **provisioningState**: string (ReadOnly)
* **serviceLoadMetrics**: ServiceLoadMetricDescription[]
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
* **instanceCount**: int
* **serviceKind**: 'Stateless' (Required)


## ServiceCorrelationDescription
### Properties
* **Scheme**: 'Affinity' | 'AlignedAffinity' | 'Invalid' | 'NonAlignedAffinity' (Required)
* **ServiceName**: string (Required)

## PartitionSchemeDescription
* **Discriminator**: PartitionScheme

### Base Properties
### NamedPartitionSchemeDescription
#### Properties
* **Count**: int (Required)
* **Names**: string[] (Required)
* **PartitionScheme**: 'Named' (Required)

### SingletonPartitionSchemeDescription
#### Properties
* **PartitionScheme**: 'Singleton' (Required)

### UniformInt64RangePartitionSchemeDescription
#### Properties
* **Count**: int (Required)
* **HighKey**: string (Required)
* **LowKey**: string (Required)
* **PartitionScheme**: 'UniformInt64Range' (Required)


## NamedPartitionSchemeDescription
### Properties
* **Count**: int (Required)
* **Names**: string[] (Required)
* **PartitionScheme**: 'Named' (Required)

## SingletonPartitionSchemeDescription
### Properties
* **PartitionScheme**: 'Singleton' (Required)

## UniformInt64RangePartitionSchemeDescription
### Properties
* **Count**: int (Required)
* **HighKey**: string (Required)
* **LowKey**: string (Required)
* **PartitionScheme**: 'UniformInt64Range' (Required)

## ServiceLoadMetricDescription
### Properties
* **DefaultLoad**: int
* **Name**: string (Required)
* **PrimaryDefaultLoad**: int
* **SecondaryDefaultLoad**: int
* **Weight**: 'High' | 'Low' | 'Medium' | 'Zero'

## ServicePlacementPolicyDescription
* **Discriminator**: Type

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
* **instanceCount**: int
* **serviceKind**: 'Stateless' (Required)

## ApplicationTypeResourceProperties
### Properties
* **provisioningState**: string (ReadOnly)

## ApplicationTypeVersionResourceProperties
### Properties
* **appPackageUrl**: string (Required)
* **defaultParameterList**: ApplicationTypeParameterList (ReadOnly)
* **provisioningState**: string (ReadOnly)

## ApplicationTypeParameterList
### Properties
### Additional Properties
* **Additional Properties Type**: string

