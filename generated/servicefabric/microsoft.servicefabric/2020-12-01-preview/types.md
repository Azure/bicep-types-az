# Microsoft.ServiceFabric @ 2020-12-01-preview

## Resource Microsoft.ServiceFabric/clusters@2020-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ClusterProperties](#clusterproperties)
* **systemData**: [SystemData](#systemdata)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.ServiceFabric/clusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/clusters/applications@2020-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedIdentity](#managedidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationResourceProperties](#applicationresourceproperties)
* **systemData**: [SystemData](#systemdata)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.ServiceFabric/clusters/applications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/clusters/applications/services@2020-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServiceResourceProperties](#serviceresourceproperties)
* **systemData**: [SystemData](#systemdata)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.ServiceFabric/clusters/applications/services' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/clusters/applicationTypes@2020-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationTypeResourceProperties](#applicationtyperesourceproperties)
* **systemData**: [SystemData](#systemdata)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.ServiceFabric/clusters/applicationTypes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/clusters/applicationTypes/versions@2020-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationTypeVersionResourceProperties](#applicationtypeversionresourceproperties)
* **systemData**: [SystemData](#systemdata)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.ServiceFabric/clusters/applicationTypes/versions' (ReadOnly, DeployTimeConstant)

## ClusterProperties
### Properties
* **addOnFeatures**: 'BackupRestoreService' | 'DnsService' | 'RepairManager' | 'ResourceMonitorService'[]
* **applicationTypeVersionsCleanupPolicy**: [ApplicationTypeVersionsCleanupPolicy](#applicationtypeversionscleanuppolicy)
* **availableClusterVersions**: [ClusterVersionDetails](#clusterversiondetails)[] (ReadOnly)
* **azureActiveDirectory**: [AzureActiveDirectory](#azureactivedirectory)
* **certificate**: [CertificateDescription](#certificatedescription)
* **certificateCommonNames**: [ServerCertificateCommonNames](#servercertificatecommonnames)
* **clientCertificateCommonNames**: [ClientCertificateCommonName](#clientcertificatecommonname)[]
* **clientCertificateThumbprints**: [ClientCertificateThumbprint](#clientcertificatethumbprint)[]
* **clusterCodeVersion**: string
* **clusterEndpoint**: string (ReadOnly)
* **clusterId**: string (ReadOnly)
* **clusterState**: 'AutoScale' | 'BaselineUpgrade' | 'Deploying' | 'EnforcingClusterVersion' | 'Ready' | 'UpdatingInfrastructure' | 'UpdatingUserCertificate' | 'UpdatingUserConfiguration' | 'UpgradeServiceUnreachable' | 'WaitingForNodes' (ReadOnly)
* **diagnosticsStorageAccountConfig**: [DiagnosticsStorageAccountConfig](#diagnosticsstorageaccountconfig)
* **eventStoreServiceEnabled**: bool
* **fabricSettings**: [SettingsSectionDescription](#settingssectiondescription)[]
* **managementEndpoint**: string (Required)
* **nodeTypes**: [NodeTypeDescription](#nodetypedescription)[] (Required)
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **reliabilityLevel**: 'Bronze' | 'Gold' | 'None' | 'Platinum' | 'Silver'
* **reverseProxyCertificate**: [CertificateDescription](#certificatedescription)
* **reverseProxyCertificateCommonNames**: [ServerCertificateCommonNames](#servercertificatecommonnames)
* **upgradeDescription**: [ClusterUpgradePolicy](#clusterupgradepolicy)
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
* **commonNames**: [ServerCertificateCommonName](#servercertificatecommonname)[]
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
* **applicationDeltaHealthPolicies**: [Dictionary<string,ApplicationDeltaHealthPolicy>](#dictionarystringapplicationdeltahealthpolicy)
* **maxPercentDeltaUnhealthyApplications**: int (Required)
* **maxPercentDeltaUnhealthyNodes**: int (Required)
* **maxPercentUpgradeDomainDeltaUnhealthyNodes**: int (Required)

## Dictionary<string,ApplicationDeltaHealthPolicy>
### Properties
### Additional Properties
* **Additional Properties Type**: [ApplicationDeltaHealthPolicy](#applicationdeltahealthpolicy)

## ApplicationDeltaHealthPolicy
### Properties
* **defaultServiceTypeDeltaHealthPolicy**: [ServiceTypeDeltaHealthPolicy](#servicetypedeltahealthpolicy)
* **serviceTypeDeltaHealthPolicies**: [Dictionary<string,ServiceTypeDeltaHealthPolicy>](#dictionarystringservicetypedeltahealthpolicy)

## ServiceTypeDeltaHealthPolicy
### Properties
* **maxPercentDeltaUnhealthyServices**: int

## Dictionary<string,ServiceTypeDeltaHealthPolicy>
### Properties
### Additional Properties
* **Additional Properties Type**: [ServiceTypeDeltaHealthPolicy](#servicetypedeltahealthpolicy)

## ClusterHealthPolicy
### Properties
* **applicationHealthPolicies**: [Dictionary<string,ApplicationHealthPolicy>](#dictionarystringapplicationhealthpolicy)
* **maxPercentUnhealthyApplications**: int
* **maxPercentUnhealthyNodes**: int

## Dictionary<string,ApplicationHealthPolicy>
### Properties
### Additional Properties
* **Additional Properties Type**: [ApplicationHealthPolicy](#applicationhealthpolicy)

## ApplicationHealthPolicy
### Properties
* **defaultServiceTypeHealthPolicy**: [ServiceTypeHealthPolicy](#servicetypehealthpolicy)
* **serviceTypeHealthPolicies**: [Dictionary<string,ServiceTypeHealthPolicy>](#dictionarystringservicetypehealthpolicy)

## ServiceTypeHealthPolicy
### Properties
* **maxPercentUnhealthyServices**: int

## Dictionary<string,ServiceTypeHealthPolicy>
### Properties
### Additional Properties
* **Additional Properties Type**: [ServiceTypeHealthPolicy](#servicetypehealthpolicy)

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
* **userAssignedIdentities**: [Dictionary<string,UserAssignedIdentity>](#dictionarystringuserassignedidentity)

## Dictionary<string,UserAssignedIdentity>
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
* **maximumNodes**: int
* **metrics**: [ApplicationMetricDescription](#applicationmetricdescription)[]
* **minimumNodes**: int
* **parameters**: [Dictionary<string,String>](#dictionarystringstring)
* **provisioningState**: string (ReadOnly)
* **removeApplicationCapacity**: bool
* **typeName**: string
* **typeVersion**: string
* **upgradePolicy**: [ApplicationUpgradePolicy](#applicationupgradepolicy)

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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationUpgradePolicy
### Properties
* **applicationHealthPolicy**: [ArmApplicationHealthPolicy](#armapplicationhealthpolicy)
* **forceRestart**: bool
* **rollingUpgradeMonitoringPolicy**: [ArmRollingUpgradeMonitoringPolicy](#armrollingupgrademonitoringpolicy)
* **upgradeMode**: 'Invalid' | 'Monitored' | 'UnmonitoredAuto' | 'UnmonitoredManual'
* **upgradeReplicaSetCheckTimeout**: string

## ArmApplicationHealthPolicy
### Properties
* **considerWarningAsError**: bool
* **defaultServiceTypeHealthPolicy**: [ArmServiceTypeHealthPolicy](#armservicetypehealthpolicy)
* **maxPercentUnhealthyDeployedApplications**: int
* **serviceTypeHealthPolicyMap**: [Dictionary<string,ArmServiceTypeHealthPolicy>](#dictionarystringarmservicetypehealthpolicy)

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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceResourceProperties
* **Discriminator**: serviceKind
### Base Properties
* **correlationScheme**: [ServiceCorrelationDescription](#servicecorrelationdescription)[]
* **defaultMoveCost**: 'High' | 'Low' | 'Medium' | 'Zero'
* **partitionDescription**: [PartitionSchemeDescription](#partitionschemedescription)
* **placementConstraints**: string
* **provisioningState**: string (ReadOnly)
* **serviceDnsName**: string
* **serviceLoadMetrics**: [ServiceLoadMetricDescription](#serviceloadmetricdescription)[]
* **servicePackageActivationMode**: 'ExclusiveProcess' | 'SharedProcess'
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
### Named
#### Properties
* **count**: int (Required)
* **names**: string[] (Required)
* **partitionScheme**: 'Named' (Required)

### Singleton
#### Properties
* **partitionScheme**: 'Singleton' (Required)

### UniformInt64Range
#### Properties
* **count**: int (Required)
* **highKey**: string (Required)
* **lowKey**: string (Required)
* **partitionScheme**: 'UniformInt64Range' (Required)


## Named
### Properties
* **count**: int (Required)
* **names**: string[] (Required)
* **partitionScheme**: 'Named' (Required)

## Singleton
### Properties
* **partitionScheme**: 'Singleton' (Required)

## UniformInt64Range
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
* **instanceCloseDelayDuration**: string
* **instanceCount**: int
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
* **defaultParameterList**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **provisioningState**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

