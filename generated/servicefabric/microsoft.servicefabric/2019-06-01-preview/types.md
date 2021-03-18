# Microsoft.ServiceFabric @ 2019-06-01-preview

## Resource Microsoft.ServiceFabric/clusters@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ClusterProperties](#clusterproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.ServiceFabric/clusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/clusters/applications@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedIdentity](#managedidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationResourceProperties](#applicationresourceproperties)
* **tags**: [ProxyResourceTags](#proxyresourcetags)
* **type**: 'Microsoft.ServiceFabric/clusters/applications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/clusters/applications/services@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServiceResourceProperties](#serviceresourceproperties)
* **tags**: [ProxyResourceTags](#proxyresourcetags)
* **type**: 'Microsoft.ServiceFabric/clusters/applications/services' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/clusters/applicationTypes@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationTypeResourceProperties](#applicationtyperesourceproperties)
* **tags**: [ProxyResourceTags](#proxyresourcetags)
* **type**: 'Microsoft.ServiceFabric/clusters/applicationTypes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/clusters/applicationTypes/versions@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationTypeVersionResourceProperties](#applicationtypeversionresourceproperties)
* **tags**: [ProxyResourceTags](#proxyresourcetags)
* **type**: 'Microsoft.ServiceFabric/clusters/applicationTypes/versions' (ReadOnly, DeployTimeConstant)

## ClusterProperties
### Properties
* **addOnFeatures**: 'BackupRestoreService' | 'DnsService' | 'RepairManager' | 'ResourceMonitorService'[]
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
* **capacities**: [NodeTypeDescriptionCapacities](#nodetypedescriptioncapacities)
* **clientConnectionEndpointPort**: int (Required)
* **durabilityLevel**: 'Bronze' | 'Gold' | 'Silver'
* **ephemeralPorts**: [EndpointRangeDescription](#endpointrangedescription)
* **httpGatewayEndpointPort**: int (Required)
* **isPrimary**: bool (Required)
* **name**: string (Required)
* **placementProperties**: [NodeTypeDescriptionPlacementProperties](#nodetypedescriptionplacementproperties)
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
* **applicationDeltaHealthPolicies**: [ApplicationDeltaHealthPolicyMap](#applicationdeltahealthpolicymap)
* **maxPercentDeltaUnhealthyApplications**: int (Required)
* **maxPercentDeltaUnhealthyNodes**: int (Required)
* **maxPercentUpgradeDomainDeltaUnhealthyNodes**: int (Required)

## ApplicationDeltaHealthPolicyMap
### Properties
### Additional Properties
* **Additional Properties Type**: [ApplicationDeltaHealthPolicy](#applicationdeltahealthpolicy)

## ApplicationDeltaHealthPolicy
### Properties
* **defaultServiceTypeDeltaHealthPolicy**: [ServiceTypeDeltaHealthPolicy](#servicetypedeltahealthpolicy)
* **serviceTypeDeltaHealthPolicies**: [ServiceTypeDeltaHealthPolicyMap](#servicetypedeltahealthpolicymap)

## ServiceTypeDeltaHealthPolicy
### Properties
* **maxPercentDeltaUnhealthyServices**: int

## ServiceTypeDeltaHealthPolicyMap
### Properties
### Additional Properties
* **Additional Properties Type**: [ServiceTypeDeltaHealthPolicy](#servicetypedeltahealthpolicy)

## ClusterHealthPolicy
### Properties
* **applicationHealthPolicies**: [ApplicationHealthPolicyMap](#applicationhealthpolicymap)
* **maxPercentUnhealthyApplications**: int
* **maxPercentUnhealthyNodes**: int

## ApplicationHealthPolicyMap
### Properties
### Additional Properties
* **Additional Properties Type**: [ApplicationHealthPolicy](#applicationhealthpolicy)

## ApplicationHealthPolicy
### Properties
* **defaultServiceTypeHealthPolicy**: [ServiceTypeHealthPolicy](#servicetypehealthpolicy)
* **serviceTypeHealthPolicies**: [ServiceTypeHealthPolicyMap](#servicetypehealthpolicymap)

## ServiceTypeHealthPolicy
### Properties
* **maxPercentUnhealthyServices**: int

## ServiceTypeHealthPolicyMap
### Properties
### Additional Properties
* **Additional Properties Type**: [ServiceTypeHealthPolicy](#servicetypehealthpolicy)

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
* **maximumNodes**: int
* **metrics**: [ApplicationMetricDescription](#applicationmetricdescription)[]
* **minimumNodes**: int
* **parameters**: [ApplicationParameterList](#applicationparameterlist)
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

## ApplicationParameterList
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
* **considerWarningAsError**: bool
* **defaultServiceTypeHealthPolicy**: [ArmServiceTypeHealthPolicy](#armservicetypehealthpolicy)
* **maxPercentUnhealthyDeployedApplications**: int
* **serviceTypeHealthPolicyMap**: [ArmServiceTypeHealthPolicyMap](#armservicetypehealthpolicymap)

## ArmServiceTypeHealthPolicy
### Properties
* **maxPercentUnhealthyPartitionsPerService**: int
* **maxPercentUnhealthyReplicasPerPartition**: int
* **maxPercentUnhealthyServices**: int

## ArmServiceTypeHealthPolicyMap
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

## ProxyResourceTags
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
* **serviceLoadMetrics**: [ServiceLoadMetricDescription](#serviceloadmetricdescription)[]
* **servicePackageActivationMode**: 'ExclusiveProcess' | 'SharedProcess'
* **servicePlacementPolicies**: [ServicePlacementPolicyDescription](#serviceplacementpolicydescription)[]
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
* **scheme**: 'Affinity' | 'AlignedAffinity' | 'Invalid' | 'NonAlignedAffinity' (Required)
* **serviceName**: string (Required)

## PartitionSchemeDescription
* **Discriminator**: partitionScheme

### Base Properties
### NamedPartitionSchemeDescription
#### Properties
* **Count**: int (Required)
* **Names**: string[] (Required)
* **partitionScheme**: 'Named' (Required)

### SingletonPartitionSchemeDescription
#### Properties
* **partitionScheme**: 'Singleton' (Required)

### UniformInt64RangePartitionSchemeDescription
#### Properties
* **Count**: int (Required)
* **HighKey**: string (Required)
* **LowKey**: string (Required)
* **partitionScheme**: 'UniformInt64Range' (Required)


## NamedPartitionSchemeDescription
### Properties
* **Count**: int (Required)
* **Names**: string[] (Required)
* **partitionScheme**: 'Named' (Required)

## SingletonPartitionSchemeDescription
### Properties
* **partitionScheme**: 'Singleton' (Required)

## UniformInt64RangePartitionSchemeDescription
### Properties
* **Count**: int (Required)
* **HighKey**: string (Required)
* **LowKey**: string (Required)
* **partitionScheme**: 'UniformInt64Range' (Required)

## ServiceLoadMetricDescription
### Properties
* **defaultLoad**: int
* **name**: string (Required)
* **primaryDefaultLoad**: int
* **secondaryDefaultLoad**: int
* **weight**: 'High' | 'Low' | 'Medium' | 'Zero'

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
* **defaultParameterList**: [ApplicationTypeParameterList](#applicationtypeparameterlist) (ReadOnly)
* **provisioningState**: string (ReadOnly)

## ApplicationTypeParameterList
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

