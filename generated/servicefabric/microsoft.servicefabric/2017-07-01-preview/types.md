# Microsoft.ServiceFabric @ 2017-07-01-preview

## Resource Microsoft.ServiceFabric/clusters@2017-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ClusterProperties](#clusterproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.ServiceFabric/clusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/clusters/applications@2017-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationResourceProperties](#applicationresourceproperties)
* **type**: 'Microsoft.ServiceFabric/clusters/applications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/clusters/applications/services@2017-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServiceResourceProperties](#serviceresourceproperties)
* **type**: 'Microsoft.ServiceFabric/clusters/applications/services' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/clusters/applicationTypes@2017-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationTypeResourceProperties](#applicationtyperesourceproperties)
* **type**: 'Microsoft.ServiceFabric/clusters/applicationTypes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/clusters/applicationTypes/versions@2017-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationTypeVersionResourceProperties](#applicationtypeversionresourceproperties)
* **type**: 'Microsoft.ServiceFabric/clusters/applicationTypes/versions' (ReadOnly, DeployTimeConstant)

## ClusterProperties
### Properties
* **addOnFeatures**: 'BackupRestoreService' | 'DnsService' | 'RepairManager'[]
* **availableClusterVersions**: [ClusterVersionDetails](#clusterversiondetails)[]
* **azureActiveDirectory**: [AzureActiveDirectory](#azureactivedirectory)
* **certificate**: [CertificateDescription](#certificatedescription)
* **clientCertificateCommonNames**: [ClientCertificateCommonName](#clientcertificatecommonname)[]
* **clientCertificateThumbprints**: [ClientCertificateThumbprint](#clientcertificatethumbprint)[]
* **clusterCodeVersion**: string
* **clusterEndpoint**: string (ReadOnly)
* **clusterId**: string (ReadOnly)
* **clusterState**: 'AutoScale' | 'BaselineUpgrade' | 'Deploying' | 'EnforcingClusterVersion' | 'Ready' | 'UpdatingInfrastructure' | 'UpdatingUserCertificate' | 'UpdatingUserConfiguration' | 'UpgradeServiceUnreachable' | 'WaitingForNodes'
* **diagnosticsStorageAccountConfig**: [DiagnosticsStorageAccountConfig](#diagnosticsstorageaccountconfig)
* **fabricSettings**: [SettingsSectionDescription](#settingssectiondescription)[]
* **managementEndpoint**: string (Required)
* **nodeTypes**: [NodeTypeDescription](#nodetypedescription)[] (Required)
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **reliabilityLevel**: 'Bronze' | 'Gold' | 'None' | 'Platinum' | 'Silver'
* **reverseProxyCertificate**: [CertificateDescription](#certificatedescription)
* **upgradeDescription**: [ClusterUpgradePolicy](#clusterupgradepolicy)
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
* **parameters**: [SettingsParameterDescription](#settingsparameterdescription)[] (Required)

## SettingsParameterDescription
### Properties
* **name**: string (Required)
* **value**: string (Required)

## NodeTypeDescription
### Properties
* **applicationPorts**: [EndpointRangeDescription](#endpointrangedescription)
* **capacities**: [Dictionary<string,String>](#dictionarystringstring)
* **clientConnectionEndpointPort**: int (Required)
* **durabilityLevel**: 'Bronze' | 'Gold' | 'Silver'
* **ephemeralPorts**: [EndpointRangeDescription](#endpointrangedescription)
* **httpGatewayEndpointPort**: int (Required)
* **isPrimary**: bool (Required)
* **name**: string (Required)
* **placementProperties**: [Dictionary<string,String>](#dictionarystringstring)
* **reverseProxyEndpointPort**: int
* **vmInstanceCount**: int (Required)

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

## ClusterUpgradePolicy
### Properties
* **deltaHealthPolicy**: [ClusterUpgradeDeltaHealthPolicy](#clusterupgradedeltahealthpolicy)
* **forceRestart**: bool
* **healthCheckRetryTimeout**: string (Required)
* **healthCheckStableDuration**: string (Required)
* **healthCheckWaitDuration**: string (Required)
* **healthPolicy**: [ClusterHealthPolicy](#clusterhealthpolicy) (Required)
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationResourceProperties
### Properties
* **maximumNodes**: int
* **metrics**: [ApplicationMetricDescription](#applicationmetricdescription)[]
* **minimumNodes**: int
* **parameters**: [Dictionary<string,String>](#dictionarystringstring)
* **provisioningState**: string (ReadOnly)
* **removeApplicationCapacity**: bool
* **typeName**: string
* **typeVersion**: string
* **upgradePolicy**: [ApplicationUpgradePolicy](#applicationupgradepolicy)

## ApplicationMetricDescription
### Properties
* **MaximumCapacity**: int
* **Name**: string
* **ReservationCapacity**: int
* **TotalApplicationCapacity**: int

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationUpgradePolicy
### Properties
* **applicationHealthPolicy**: [ArmApplicationHealthPolicy](#armapplicationhealthpolicy)
* **forceRestart**: bool
* **rollingUpgradeMonitoringPolicy**: [ArmRollingUpgradeMonitoringPolicy](#armrollingupgrademonitoringpolicy)
* **upgradeReplicaSetCheckTimeout**: string

## ArmApplicationHealthPolicy
### Properties
* **ConsiderWarningAsError**: bool
* **DefaultServiceTypeHealthPolicy**: [ArmServiceTypeHealthPolicy](#armservicetypehealthpolicy)
* **MaxPercentUnhealthyDeployedApplications**: int
* **ServiceTypeHealthPolicyMap**: [Dictionary<string,ArmServiceTypeHealthPolicy>](#dictionarystringarmservicetypehealthpolicy)

## ArmServiceTypeHealthPolicy
### Properties
* **maxPercentUnhealthyPartitionsPerService**: int
* **maxPercentUnhealthyReplicasPerPartition**: int
* **maxPercentUnhealthyServices**: int

## Dictionary<string,ArmServiceTypeHealthPolicy>
### Properties
### Additional Properties
* **Additional Properties Type**: [ArmServiceTypeHealthPolicy](#armservicetypehealthpolicy)

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
* **correlationScheme**: [ServiceCorrelationDescription](#servicecorrelationdescription)[]
* **defaultMoveCost**: 'High' | 'Low' | 'Medium' | 'Zero'
* **partitionDescription**: [PartitionSchemeDescription](#partitionschemedescription)
* **placementConstraints**: string
* **provisioningState**: string (ReadOnly)
* **serviceLoadMetrics**: [ServiceLoadMetricDescription](#serviceloadmetricdescription)[]
* **servicePlacementPolicies**: [ServicePlacementPolicyDescription](#serviceplacementpolicydescription)[]
* **serviceTypeName**: string
### Stateful
#### Properties
* **hasPersistedState**: bool
* **minReplicaSetSize**: int
* **quorumLossWaitDuration**: string
* **replicaRestartWaitDuration**: string
* **serviceKind**: 'Stateful' (Required)
* **standByReplicaKeepDuration**: string
* **targetReplicaSetSize**: int

### Stateless
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
### Named
#### Properties
* **Count**: int (Required)
* **Names**: string[] (Required)
* **PartitionScheme**: 'Named' (Required)

### Singleton
#### Properties
* **PartitionScheme**: 'Singleton' (Required)

### UniformInt64Range
#### Properties
* **Count**: int (Required)
* **HighKey**: string (Required)
* **LowKey**: string (Required)
* **PartitionScheme**: 'UniformInt64Range' (Required)


## Named
### Properties
* **Count**: int (Required)
* **Names**: string[] (Required)
* **PartitionScheme**: 'Named' (Required)

## Singleton
### Properties
* **PartitionScheme**: 'Singleton' (Required)

## UniformInt64Range
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

## Stateful
### Properties
* **hasPersistedState**: bool
* **minReplicaSetSize**: int
* **quorumLossWaitDuration**: string
* **replicaRestartWaitDuration**: string
* **serviceKind**: 'Stateful' (Required)
* **standByReplicaKeepDuration**: string
* **targetReplicaSetSize**: int

## Stateless
### Properties
* **instanceCount**: int
* **serviceKind**: 'Stateless' (Required)

## ApplicationTypeResourceProperties
### Properties
* **provisioningState**: string (ReadOnly)

## ApplicationTypeVersionResourceProperties
### Properties
* **appPackageUrl**: string (Required)
* **defaultParameterList**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **provisioningState**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

