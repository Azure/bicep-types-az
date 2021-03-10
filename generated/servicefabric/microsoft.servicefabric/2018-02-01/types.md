# Microsoft.ServiceFabric @ 2018-02-01

## Resource Microsoft.ServiceFabric/clusters@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ClusterProperties](#clusterproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.ServiceFabric/clusters' (ReadOnly, DeployTimeConstant)

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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

