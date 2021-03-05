# Microsoft.ServiceFabric @ 2018-02-01

## Resource Microsoft.ServiceFabric/clusters@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ClusterProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.ServiceFabric/clusters' (ReadOnly, DeployTimeConstant)

## ClusterProperties
### Properties
* **addOnFeatures**: 'BackupRestoreService' | 'DnsService' | 'RepairManager' | 'ResourceMonitorService'[]
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

