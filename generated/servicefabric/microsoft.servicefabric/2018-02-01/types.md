# Microsoft.ServiceFabric @ 2018-02-01

## Resource Microsoft.ServiceFabric/clusters@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Azure resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): Describes the cluster resource properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Azure resource tags.
* **type**: 'Microsoft.ServiceFabric/clusters' (ReadOnly, DeployTimeConstant): The resource type

## ClusterProperties
### Properties
* **addOnFeatures**: 'BackupRestoreService' | 'DnsService' | 'RepairManager' | 'ResourceMonitorService'[]: The list of add-on features to enable in the cluster.
* **availableClusterVersions**: [ClusterVersionDetails](#clusterversiondetails)[] (ReadOnly): The Service Fabric runtime versions available for this cluster.
* **azureActiveDirectory**: [AzureActiveDirectory](#azureactivedirectory): The settings to enable AAD authentication on the cluster.
* **certificate**: [CertificateDescription](#certificatedescription): Describes the certificate details.
* **certificateCommonNames**: [ServerCertificateCommonNames](#servercertificatecommonnames): Describes a list of server certificates referenced by common name that are used to secure the cluster.
* **clientCertificateCommonNames**: [ClientCertificateCommonName](#clientcertificatecommonname)[]: The list of client certificates referenced by common name that are allowed to manage the cluster.
* **clientCertificateThumbprints**: [ClientCertificateThumbprint](#clientcertificatethumbprint)[]: The list of client certificates referenced by thumbprint that are allowed to manage the cluster.
* **clusterCodeVersion**: string: The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**.
* **clusterEndpoint**: string (ReadOnly): The Azure Resource Provider endpoint. A system service in the cluster connects to this  endpoint.
* **clusterId**: string (ReadOnly): A service generated unique identifier for the cluster resource.
* **clusterState**: 'AutoScale' | 'BaselineUpgrade' | 'Deploying' | 'EnforcingClusterVersion' | 'Ready' | 'UpdatingInfrastructure' | 'UpdatingUserCertificate' | 'UpdatingUserConfiguration' | 'UpgradeServiceUnreachable' | 'WaitingForNodes' (ReadOnly): The current state of the cluster.

  - WaitingForNodes - Indicates that the cluster resource is created and the resource provider is waiting for Service Fabric VM extension to boot up and report to it.
  - Deploying - Indicates that the Service Fabric runtime is being installed on the VMs. Cluster resource will be in this state until the cluster boots up and system services are up.
  - BaselineUpgrade - Indicates that the cluster is upgrading to establishes the cluster version. This upgrade is automatically initiated when the cluster boots up for the first time.
  - UpdatingUserConfiguration - Indicates that the cluster is being upgraded with the user provided configuration.
  - UpdatingUserCertificate - Indicates that the cluster is being upgraded with the user provided certificate.
  - UpdatingInfrastructure - Indicates that the cluster is being upgraded with the latest Service Fabric runtime version. This happens only when the **upgradeMode** is set to 'Automatic'.
  - EnforcingClusterVersion - Indicates that cluster is on a different version than expected and the cluster is being upgraded to the expected version.
  - UpgradeServiceUnreachable - Indicates that the system service in the cluster is no longer polling the Resource Provider. Clusters in this state cannot be managed by the Resource Provider.
  - AutoScale - Indicates that the ReliabilityLevel of the cluster is being adjusted.
  - Ready - Indicates that the cluster is in a stable state.
.
* **diagnosticsStorageAccountConfig**: [DiagnosticsStorageAccountConfig](#diagnosticsstorageaccountconfig): The storage account information for storing Service Fabric diagnostic logs.
* **fabricSettings**: [SettingsSectionDescription](#settingssectiondescription)[]: The list of custom fabric settings to configure the cluster.
* **managementEndpoint**: string (Required): The http management endpoint of the cluster.
* **nodeTypes**: [NodeTypeDescription](#nodetypedescription)[] (Required): The list of node types in the cluster.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of the cluster resource.
* **reliabilityLevel**: 'Bronze' | 'Gold' | 'None' | 'Platinum' | 'Silver': The reliability level sets the replica set size of system services. Learn about [ReliabilityLevel](https://docs.microsoft.com/azure/service-fabric/service-fabric-cluster-capacity).

  - None - Run the System services with a target replica set count of 1. This should only be used for test clusters.
  - Bronze - Run the System services with a target replica set count of 3. This should only be used for test clusters.
  - Silver - Run the System services with a target replica set count of 5.
  - Gold - Run the System services with a target replica set count of 7.
  - Platinum - Run the System services with a target replica set count of 9.
.
* **reverseProxyCertificate**: [CertificateDescription](#certificatedescription): Describes the certificate details.
* **reverseProxyCertificateCommonNames**: [ServerCertificateCommonNames](#servercertificatecommonnames): Describes a list of server certificates referenced by common name that are used to secure the cluster.
* **upgradeDescription**: [ClusterUpgradePolicy](#clusterupgradepolicy): Describes the policy used when upgrading the cluster.
* **upgradeMode**: 'Automatic' | 'Manual': The upgrade mode of the cluster when new Service Fabric runtime version is available.

  - Automatic - The cluster will be automatically upgraded to the latest Service Fabric runtime version as soon as it is available.
  - Manual - The cluster will not be automatically upgraded to the latest Service Fabric runtime version. The cluster is upgraded by setting the **clusterCodeVersion** property in the cluster resource.
.
* **vmImage**: string: The VM image VMSS has been configured with. Generic names such as Windows or Linux can be used.

## ClusterVersionDetails
### Properties
* **codeVersion**: string: The Service Fabric runtime version of the cluster.
* **environment**: 'Linux' | 'Windows': Indicates if this version is for Windows or Linux operating system.
* **supportExpiryUtc**: string: The date of expiry of support of the version.

## AzureActiveDirectory
### Properties
* **clientApplication**: string: Azure active directory client application id.
* **clusterApplication**: string: Azure active directory cluster application id.
* **tenantId**: string: Azure active directory tenant id.

## CertificateDescription
### Properties
* **thumbprint**: string (Required): Thumbprint of the primary certificate.
* **thumbprintSecondary**: string: Thumbprint of the secondary certificate.
* **x509StoreName**: 'AddressBook' | 'AuthRoot' | 'CertificateAuthority' | 'Disallowed' | 'My' | 'Root' | 'TrustedPeople' | 'TrustedPublisher': The local certificate store location.

## ServerCertificateCommonNames
### Properties
* **commonNames**: [ServerCertificateCommonName](#servercertificatecommonname)[]: The list of server certificates referenced by common name that are used to secure the cluster.
* **x509StoreName**: 'AddressBook' | 'AuthRoot' | 'CertificateAuthority' | 'Disallowed' | 'My' | 'Root' | 'TrustedPeople' | 'TrustedPublisher': The local certificate store location.

## ServerCertificateCommonName
### Properties
* **certificateCommonName**: string (Required): The common name of the server certificate.
* **certificateIssuerThumbprint**: string (Required): The issuer thumbprint of the server certificate.

## ClientCertificateCommonName
### Properties
* **certificateCommonName**: string (Required): The common name of the client certificate.
* **certificateIssuerThumbprint**: string (Required): The issuer thumbprint of the client certificate.
* **isAdmin**: bool (Required): Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.

## ClientCertificateThumbprint
### Properties
* **certificateThumbprint**: string (Required): The thumbprint of the client certificate.
* **isAdmin**: bool (Required): Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.

## DiagnosticsStorageAccountConfig
### Properties
* **blobEndpoint**: string (Required): The blob endpoint of the azure storage account.
* **protectedAccountKeyName**: string (Required): The protected diagnostics storage key name.
* **queueEndpoint**: string (Required): The queue endpoint of the azure storage account.
* **storageAccountName**: string (Required): The Azure storage account name.
* **tableEndpoint**: string (Required): The table endpoint of the azure storage account.

## SettingsSectionDescription
### Properties
* **name**: string (Required): The section name of the fabric settings.
* **parameters**: [SettingsParameterDescription](#settingsparameterdescription)[] (Required): The collection of parameters in the section.

## SettingsParameterDescription
### Properties
* **name**: string (Required): The parameter name of fabric setting.
* **value**: string (Required): The parameter value of fabric setting.

## NodeTypeDescription
### Properties
* **applicationPorts**: [EndpointRangeDescription](#endpointrangedescription): Port range details
* **capacities**: [Dictionary<string,String>](#dictionarystringstring): The capacity tags applied to the nodes in the node type, the cluster resource manager uses these tags to understand how much resource a node has.
* **clientConnectionEndpointPort**: int (Required): The TCP cluster management endpoint port.
* **durabilityLevel**: 'Bronze' | 'Gold' | 'Silver': The durability level of the node type. Learn about [DurabilityLevel](https://docs.microsoft.com/azure/service-fabric/service-fabric-cluster-capacity).

  - Bronze - No privileges. This is the default.
  - Silver - The infrastructure jobs can be paused for a duration of 10 minutes per UD.
  - Gold - The infrastructure jobs can be paused for a duration of 2 hours per UD. Gold durability can be enabled only on full node VM SKUs like D15_V2, G5 etc.
.
* **ephemeralPorts**: [EndpointRangeDescription](#endpointrangedescription): Port range details
* **httpGatewayEndpointPort**: int (Required): The HTTP cluster management endpoint port.
* **isPrimary**: bool (Required): The node type on which system services will run. Only one node type should be marked as primary. Primary node type cannot be deleted or changed for existing clusters.
* **name**: string (Required): The name of the node type.
* **placementProperties**: [Dictionary<string,String>](#dictionarystringstring): The placement tags applied to nodes in the node type, which can be used to indicate where certain services (workload) should run.
* **reverseProxyEndpointPort**: int: The endpoint used by reverse proxy.
* **vmInstanceCount**: int (Required): The number of nodes in the node type. This count should match the capacity property in the corresponding VirtualMachineScaleSet resource.

## EndpointRangeDescription
### Properties
* **endPort**: int (Required): End port of a range of ports
* **startPort**: int (Required): Starting port of a range of ports

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
* **deltaHealthPolicy**: [ClusterUpgradeDeltaHealthPolicy](#clusterupgradedeltahealthpolicy): Describes the delta health policies for the cluster upgrade.
* **forceRestart**: bool: If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data).
* **healthCheckRetryTimeout**: string (Required): The amount of time to retry health evaluation when the application or cluster is unhealthy before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
* **healthCheckStableDuration**: string (Required): The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
* **healthCheckWaitDuration**: string (Required): The length of time to wait after completing an upgrade domain before performing health checks. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
* **healthPolicy**: [ClusterHealthPolicy](#clusterhealthpolicy) (Required): Defines a health policy used to evaluate the health of the cluster or of a cluster node.
* **upgradeDomainTimeout**: string (Required): The amount of time each upgrade domain has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
* **upgradeReplicaSetCheckTimeout**: string (Required): The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
* **upgradeTimeout**: string (Required): The amount of time the overall upgrade has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.

## ClusterUpgradeDeltaHealthPolicy
### Properties
* **applicationDeltaHealthPolicies**: [Dictionary<string,ApplicationDeltaHealthPolicy>](#dictionarystringapplicationdeltahealthpolicy): Defines a map that contains specific application delta health policies for different applications.
Each entry specifies as key the application name and as value an ApplicationDeltaHealthPolicy used to evaluate the application health when upgrading the cluster.
The application name should include the 'fabric:' URI scheme.
The map is empty by default.
* **maxPercentDeltaUnhealthyApplications**: int (Required): The maximum allowed percentage of applications health degradation allowed during cluster upgrades.
The delta is measured between the state of the applications at the beginning of upgrade and the state of the applications at the time of the health evaluation.
The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits. System services are not included in this.
* **maxPercentDeltaUnhealthyNodes**: int (Required): The maximum allowed percentage of nodes health degradation allowed during cluster upgrades.
The delta is measured between the state of the nodes at the beginning of upgrade and the state of the nodes at the time of the health evaluation.
The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits.
* **maxPercentUpgradeDomainDeltaUnhealthyNodes**: int (Required): The maximum allowed percentage of upgrade domain nodes health degradation allowed during cluster upgrades.
The delta is measured between the state of the upgrade domain nodes at the beginning of upgrade and the state of the upgrade domain nodes at the time of the health evaluation.
The check is performed after every upgrade domain upgrade completion for all completed upgrade domains to make sure the state of the upgrade domains is within tolerated limits.

## Dictionary<string,ApplicationDeltaHealthPolicy>
### Properties
### Additional Properties
* **Additional Properties Type**: [ApplicationDeltaHealthPolicy](#applicationdeltahealthpolicy)

## ApplicationDeltaHealthPolicy
### Properties
* **defaultServiceTypeDeltaHealthPolicy**: [ServiceTypeDeltaHealthPolicy](#servicetypedeltahealthpolicy): Represents the delta health policy used to evaluate the health of services belonging to a service type when upgrading the cluster.
* **serviceTypeDeltaHealthPolicies**: [Dictionary<string,ServiceTypeDeltaHealthPolicy>](#dictionarystringservicetypedeltahealthpolicy): Defines a map that contains specific delta health policies for different service types.
Each entry specifies as key the service type name and as value a ServiceTypeDeltaHealthPolicy used to evaluate the service health when upgrading the cluster.
The map is empty by default.

## ServiceTypeDeltaHealthPolicy
### Properties
* **maxPercentDeltaUnhealthyServices**: int: The maximum allowed percentage of services health degradation allowed during cluster upgrades.
The delta is measured between the state of the services at the beginning of upgrade and the state of the services at the time of the health evaluation.
The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits.

## Dictionary<string,ServiceTypeDeltaHealthPolicy>
### Properties
### Additional Properties
* **Additional Properties Type**: [ServiceTypeDeltaHealthPolicy](#servicetypedeltahealthpolicy)

## ClusterHealthPolicy
### Properties
* **applicationHealthPolicies**: [Dictionary<string,ApplicationHealthPolicy>](#dictionarystringapplicationhealthpolicy): Defines a map that contains specific application health policies for different applications.
Each entry specifies as key the application name and as value an ApplicationHealthPolicy used to evaluate the application health.
The application name should include the 'fabric:' URI scheme.
The map is empty by default.
* **maxPercentUnhealthyApplications**: int: The maximum allowed percentage of unhealthy applications before reporting an error. For example, to allow 10% of applications to be unhealthy, this value would be 10.

The percentage represents the maximum tolerated percentage of applications that can be unhealthy before the cluster is considered in error.
If the percentage is respected but there is at least one unhealthy application, the health is evaluated as Warning.
This is calculated by dividing the number of unhealthy applications over the total number of application instances in the cluster, excluding applications of application types that are included in the ApplicationTypeHealthPolicyMap.
The computation rounds up to tolerate one failure on small numbers of applications. Default percentage is zero.
* **maxPercentUnhealthyNodes**: int: The maximum allowed percentage of unhealthy nodes before reporting an error. For example, to allow 10% of nodes to be unhealthy, this value would be 10.

The percentage represents the maximum tolerated percentage of nodes that can be unhealthy before the cluster is considered in error.
If the percentage is respected but there is at least one unhealthy node, the health is evaluated as Warning.
The percentage is calculated by dividing the number of unhealthy nodes over the total number of nodes in the cluster.
The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero.

In large clusters, some nodes will always be down or out for repairs, so this percentage should be configured to tolerate that.

## Dictionary<string,ApplicationHealthPolicy>
### Properties
### Additional Properties
* **Additional Properties Type**: [ApplicationHealthPolicy](#applicationhealthpolicy)

## ApplicationHealthPolicy
### Properties
* **defaultServiceTypeHealthPolicy**: [ServiceTypeHealthPolicy](#servicetypehealthpolicy): Represents the health policy used to evaluate the health of services belonging to a service type.
* **serviceTypeHealthPolicies**: [Dictionary<string,ServiceTypeHealthPolicy>](#dictionarystringservicetypehealthpolicy): Defines a ServiceTypeHealthPolicy per service type name.

The entries in the map replace the default service type health policy for each specified service type.
For example, in an application that contains both a stateless gateway service type and a stateful engine service type, the health policies for the stateless and stateful services can be configured differently.
With policy per service type, there's more granular control of the health of the service.

If no policy is specified for a service type name, the DefaultServiceTypeHealthPolicy is used for evaluation.

## ServiceTypeHealthPolicy
### Properties
* **maxPercentUnhealthyServices**: int: The maximum percentage of services allowed to be unhealthy before your application is considered in error.

## Dictionary<string,ServiceTypeHealthPolicy>
### Properties
### Additional Properties
* **Additional Properties Type**: [ServiceTypeHealthPolicy](#servicetypehealthpolicy)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

