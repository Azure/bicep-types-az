# Microsoft.ServiceFabric @ 2019-03-01-preview

## Resource Microsoft.ServiceFabric/clusters@2019-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Azure resource etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Azure resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): Describes the cluster resource properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Azure resource tags.
* **type**: 'Microsoft.ServiceFabric/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceFabric/clusters/applications@2019-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Azure resource etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Azure resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationResourceProperties](#applicationresourceproperties): The application resource properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Azure resource tags.
* **type**: 'Microsoft.ServiceFabric/clusters/applications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceFabric/clusters/applications/services@2019-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Azure resource etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Azure resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceResourceProperties](#serviceresourceproperties): The service resource properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Azure resource tags.
* **type**: 'Microsoft.ServiceFabric/clusters/applications/services' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceFabric/clusters/applicationTypes@2019-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Azure resource etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Azure resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationTypeResourceProperties](#applicationtyperesourceproperties): The application type name properties
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Azure resource tags.
* **type**: 'Microsoft.ServiceFabric/clusters/applicationTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceFabric/clusters/applicationTypes/versions@2019-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Azure resource etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Azure resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationTypeVersionResourceProperties](#applicationtypeversionresourceproperties): The properties of the application type version resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Azure resource tags.
* **type**: 'Microsoft.ServiceFabric/clusters/applicationTypes/versions' (ReadOnly, DeployTimeConstant): The resource type

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
. Possible values include: 'WaitingForNodes', 'Deploying', 'BaselineUpgrade', 'UpdatingUserConfiguration', 'UpdatingUserCertificate', 'UpdatingInfrastructure', 'EnforcingClusterVersion', 'UpgradeServiceUnreachable', 'AutoScale', 'Ready'
* **diagnosticsStorageAccountConfig**: [DiagnosticsStorageAccountConfig](#diagnosticsstorageaccountconfig): The storage account information for storing Service Fabric diagnostic logs.
* **eventStoreServiceEnabled**: bool: Indicates if the event store service is enabled.
* **fabricSettings**: [SettingsSectionDescription](#settingssectiondescription)[]: The list of custom fabric settings to configure the cluster.
* **managementEndpoint**: string (Required): The http management endpoint of the cluster.
* **nodeTypes**: [NodeTypeDescription](#nodetypedescription)[] (Required): The list of node types in the cluster.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of the cluster resource. Possible values include: 'Updating', 'Succeeded', 'Failed', 'Canceled'
* **reliabilityLevel**: 'Bronze' | 'Gold' | 'None' | 'Platinum' | 'Silver': The reliability level sets the replica set size of system services. Learn about [ReliabilityLevel](https://docs.microsoft.com/azure/service-fabric/service-fabric-cluster-capacity).

  - None - Run the System services with a target replica set count of 1. This should only be used for test clusters.
  - Bronze - Run the System services with a target replica set count of 3. This should only be used for test clusters.
  - Silver - Run the System services with a target replica set count of 5.
  - Gold - Run the System services with a target replica set count of 7.
  - Platinum - Run the System services with a target replica set count of 9.
. Possible values include: 'None', 'Bronze', 'Silver', 'Gold', 'Platinum'
* **reverseProxyCertificate**: [CertificateDescription](#certificatedescription): Describes the certificate details.
* **reverseProxyCertificateCommonNames**: [ServerCertificateCommonNames](#servercertificatecommonnames): Describes a list of server certificates referenced by common name that are used to secure the cluster.
* **upgradeDescription**: [ClusterUpgradePolicy](#clusterupgradepolicy): Describes the policy used when upgrading the cluster.
* **upgradeMode**: 'Automatic' | 'Manual': The upgrade mode of the cluster when new Service Fabric runtime version is available.

  - Automatic - The cluster will be automatically upgraded to the latest Service Fabric runtime version as soon as it is available.
  - Manual - The cluster will not be automatically upgraded to the latest Service Fabric runtime version. The cluster is upgraded by setting the **clusterCodeVersion** property in the cluster resource.
. Possible values include: 'Automatic', 'Manual'
* **vmImage**: string: The VM image VMSS has been configured with. Generic names such as Windows or Linux can be used.

## ClusterVersionDetails
### Properties
* **codeVersion**: string: The Service Fabric runtime version of the cluster.
* **environment**: 'Linux' | 'Windows': Indicates if this version is for Windows or Linux operating system. Possible values include: 'Windows', 'Linux'
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
* **x509StoreName**: 'AddressBook' | 'AuthRoot' | 'CertificateAuthority' | 'Disallowed' | 'My' | 'Root' | 'TrustedPeople' | 'TrustedPublisher': The local certificate store location. Possible values include: 'AddressBook', 'AuthRoot', 'CertificateAuthority', 'Disallowed', 'My', 'Root', 'TrustedPeople', 'TrustedPublisher'

## ServerCertificateCommonNames
### Properties
* **commonNames**: [ServerCertificateCommonName](#servercertificatecommonname)[]: The list of server certificates referenced by common name that are used to secure the cluster.
* **x509StoreName**: 'AddressBook' | 'AuthRoot' | 'CertificateAuthority' | 'Disallowed' | 'My' | 'Root' | 'TrustedPeople' | 'TrustedPublisher': The local certificate store location. Possible values include: 'AddressBook', 'AuthRoot', 'CertificateAuthority', 'Disallowed', 'My', 'Root', 'TrustedPeople', 'TrustedPublisher'

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
  - Gold - The infrastructure jobs can be paused for a duration of 2 hours per UD. Gold durability can be enabled only on full node VM skus like D15_V2, G5 etc.
. Possible values include: 'Bronze', 'Silver', 'Gold'
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

## ApplicationResourceProperties
### Properties
* **maximumNodes**: int: The maximum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. By default, the value of this property is zero and it means that the services can be placed on any node.
* **metrics**: [ApplicationMetricDescription](#applicationmetricdescription)[]: List of application capacity metric description.
* **minimumNodes**: int: The minimum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. If this property is set to zero, no capacity will be reserved. The value of this property cannot be more than the value of the MaximumNodes property.
* **parameters**: [Dictionary<string,String>](#dictionarystringstring): List of application parameters with overridden values from their default values specified in the application manifest.
* **provisioningState**: string (ReadOnly): The current deployment or provisioning state, which only appears in the response
* **removeApplicationCapacity**: bool: Remove the current application capacity settings.
* **typeName**: string: The application type name as defined in the application manifest.
* **typeVersion**: string: The version of the application type as defined in the application manifest.
* **upgradePolicy**: [ApplicationUpgradePolicy](#applicationupgradepolicy): Describes the policy for a monitored application upgrade.

## ApplicationMetricDescription
### Properties
* **maximumCapacity**: int: The maximum node capacity for Service Fabric application.
This is the maximum Load for an instance of this application on a single node. Even if the capacity of node is greater than this value, Service Fabric will limit the total load of services within the application on each node to this value.
If set to zero, capacity for this metric is unlimited on each node.
When creating a new application with application capacity defined, the product of MaximumNodes and this value must always be smaller than or equal to TotalApplicationCapacity.
When updating existing application with application capacity, the product of MaximumNodes and this value must always be smaller than or equal to TotalApplicationCapacity.

* **name**: string: The name of the metric.
* **reservationCapacity**: int: The node reservation capacity for Service Fabric application.
This is the amount of load which is reserved on nodes which have instances of this application.
If MinimumNodes is specified, then the product of these values will be the capacity reserved in the cluster for the application.
If set to zero, no capacity is reserved for this metric.
When setting application capacity or when updating application capacity; this value must be smaller than or equal to MaximumCapacity for each metric.

* **totalApplicationCapacity**: int: The total metric capacity for Service Fabric application.
This is the total metric capacity for this application in the cluster. Service Fabric will try to limit the sum of loads of services within the application to this value.
When creating a new application with application capacity defined, the product of MaximumNodes and MaximumCapacity must always be smaller than or equal to this value.


## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationUpgradePolicy
### Properties
* **applicationHealthPolicy**: [ArmApplicationHealthPolicy](#armapplicationhealthpolicy): Defines a health policy used to evaluate the health of an application or one of its children entities.

* **forceRestart**: bool: If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data).
* **rollingUpgradeMonitoringPolicy**: [ArmRollingUpgradeMonitoringPolicy](#armrollingupgrademonitoringpolicy): The policy used for monitoring the application upgrade
* **upgradeReplicaSetCheckTimeout**: string: The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer).

## ArmApplicationHealthPolicy
### Properties
* **considerWarningAsError**: bool: Indicates whether warnings are treated with the same severity as errors.
* **defaultServiceTypeHealthPolicy**: [ArmServiceTypeHealthPolicy](#armservicetypehealthpolicy): Represents the health policy used to evaluate the health of services belonging to a service type.

* **maxPercentUnhealthyDeployedApplications**: int: The maximum allowed percentage of unhealthy deployed applications. Allowed values are Byte values from zero to 100.
The percentage represents the maximum tolerated percentage of deployed applications that can be unhealthy before the application is considered in error.
This is calculated by dividing the number of unhealthy deployed applications over the number of nodes where the application is currently deployed on in the cluster.
The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero.

* **serviceTypeHealthPolicyMap**: [Dictionary<string,ArmServiceTypeHealthPolicy>](#dictionarystringarmservicetypehealthpolicy): Defines a ServiceTypeHealthPolicy per service type name.

The entries in the map replace the default service type health policy for each specified service type.
For example, in an application that contains both a stateless gateway service type and a stateful engine service type, the health policies for the stateless and stateful services can be configured differently.
With policy per service type, there's more granular control of the health of the service.

If no policy is specified for a service type name, the DefaultServiceTypeHealthPolicy is used for evaluation.


## ArmServiceTypeHealthPolicy
### Properties
* **maxPercentUnhealthyPartitionsPerService**: int: The maximum percentage of partitions per service allowed to be unhealthy before your application is considered in error.

* **maxPercentUnhealthyReplicasPerPartition**: int: The maximum percentage of replicas per partition allowed to be unhealthy before your application is considered in error.

* **maxPercentUnhealthyServices**: int: The maximum percentage of services allowed to be unhealthy before your application is considered in error.


## Dictionary<string,ArmServiceTypeHealthPolicy>
### Properties
### Additional Properties
* **Additional Properties Type**: [ArmServiceTypeHealthPolicy](#armservicetypehealthpolicy)

## ArmRollingUpgradeMonitoringPolicy
### Properties
* **failureAction**: 'Manual' | 'Rollback': The activation Mode of the service package. Possible values include: 'Rollback', 'Manual'
* **healthCheckRetryTimeout**: string: The amount of time to retry health evaluation when the application or cluster is unhealthy before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.
* **healthCheckStableDuration**: string: The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.
* **healthCheckWaitDuration**: string: The amount of time to wait after completing an upgrade domain before applying health policies. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.
* **upgradeDomainTimeout**: string: The amount of time each upgrade domain has to complete before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.
* **upgradeTimeout**: string: The amount of time the overall upgrade has to complete before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceResourceProperties
* **Discriminator**: serviceKind
### Base Properties
* **correlationScheme**: [ServiceCorrelationDescription](#servicecorrelationdescription)[]: A list that describes the correlation of the service with other services.
* **defaultMoveCost**: 'High' | 'Low' | 'Medium' | 'Zero': Specifies the move cost for the service. Possible values include: 'Zero', 'Low', 'Medium', 'High'
* **partitionDescription**: [PartitionSchemeDescription](#partitionschemedescription): Describes how the service is partitioned.
* **placementConstraints**: string: The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
* **provisioningState**: string (ReadOnly): The current deployment or provisioning state, which only appears in the response
* **serviceLoadMetrics**: [ServiceLoadMetricDescription](#serviceloadmetricdescription)[]: The service load metrics is given as an array of ServiceLoadMetricDescription objects.
* **servicePackageActivationMode**: 'ExclusiveProcess' | 'SharedProcess': The activation Mode of the service package. Possible values include: 'SharedProcess', 'ExclusiveProcess'
* **servicePlacementPolicies**: [ServicePlacementPolicyDescription](#serviceplacementpolicydescription)[]: A list that describes the correlation of the service with other services.
* **serviceTypeName**: string: The name of the service type
### Stateful
#### Properties
* **hasPersistedState**: bool: A flag indicating whether this is a persistent service which stores states on the local disk. If it is then the value of this property is true, if not it is false.
* **minReplicaSetSize**: int: The minimum replica set size as a number.
* **quorumLossWaitDuration**: string: The maximum duration for which a partition is allowed to be in a state of quorum loss, represented in ISO 8601 format (hh:mm:ss.s).
* **replicaRestartWaitDuration**: string: The duration between when a replica goes down and when a new replica is created, represented in ISO 8601 format (hh:mm:ss.s).
* **serviceKind**: 'Stateful' (Required): The properties of a stateful service resource.
* **standByReplicaKeepDuration**: string: The definition on how long StandBy replicas should be maintained before being removed, represented in ISO 8601 format (hh:mm:ss.s).
* **targetReplicaSetSize**: int: The target replica set size as a number.

### Stateless
#### Properties
* **instanceCount**: int: The instance count.
* **serviceKind**: 'Stateless' (Required): The properties of a stateless service resource.


## ServiceCorrelationDescription
### Properties
* **scheme**: 'Affinity' | 'AlignedAffinity' | 'Invalid' | 'NonAlignedAffinity' (Required): The ServiceCorrelationScheme which describes the relationship between this service and the service specified via ServiceName. Possible values include: 'Invalid', 'Affinity', 'AlignedAffinity', 'NonAlignedAffinity'
* **serviceName**: string (Required): The full name of the service with 'fabric:' URI scheme.

## PartitionSchemeDescription
* **Discriminator**: partitionScheme
### Base Properties
### Named
#### Properties
* **Count**: int (Required): The number of partitions.
* **Names**: string[] (Required): Array of size specified by the ‘Count’ parameter, for the names of the partitions.
* **partitionScheme**: 'Named' (Required): Describes the named partition scheme of the service.

### Singleton
#### Properties
* **partitionScheme**: 'Singleton' (Required): SingletonPartitionSchemeDescription

### UniformInt64Range
#### Properties
* **Count**: int (Required): The number of partitions.
* **HighKey**: string (Required): String indicating the upper bound of the partition key range that
should be split between the partition ‘Count’

* **LowKey**: string (Required): String indicating the lower bound of the partition key range that
should be split between the partition ‘Count’

* **partitionScheme**: 'UniformInt64Range' (Required): Describes a partitioning scheme where an integer range is allocated evenly across a number of partitions.


## Named
### Properties
* **Count**: int (Required): The number of partitions.
* **Names**: string[] (Required): Array of size specified by the ‘Count’ parameter, for the names of the partitions.
* **partitionScheme**: 'Named' (Required): Describes the named partition scheme of the service.

## Singleton
### Properties
* **partitionScheme**: 'Singleton' (Required): SingletonPartitionSchemeDescription

## UniformInt64Range
### Properties
* **Count**: int (Required): The number of partitions.
* **HighKey**: string (Required): String indicating the upper bound of the partition key range that
should be split between the partition ‘Count’

* **LowKey**: string (Required): String indicating the lower bound of the partition key range that
should be split between the partition ‘Count’

* **partitionScheme**: 'UniformInt64Range' (Required): Describes a partitioning scheme where an integer range is allocated evenly across a number of partitions.

## ServiceLoadMetricDescription
### Properties
* **defaultLoad**: int: Used only for Stateless services. The default amount of load, as a number, that this service creates for this metric.
* **name**: string (Required): The name of the metric. If the service chooses to report load during runtime, the load metric name should match the name that is specified in Name exactly. Note that metric names are case sensitive.
* **primaryDefaultLoad**: int: Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Primary replica.
* **secondaryDefaultLoad**: int: Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Secondary replica.
* **weight**: 'High' | 'Low' | 'Medium' | 'Zero': The service load metric relative weight, compared to other metrics configured for this service, as a number. Possible values include: 'Zero', 'Low', 'Medium', 'High'

## ServicePlacementPolicyDescription
* **Discriminator**: Type
### Base Properties

## Stateful
### Properties
* **hasPersistedState**: bool: A flag indicating whether this is a persistent service which stores states on the local disk. If it is then the value of this property is true, if not it is false.
* **minReplicaSetSize**: int: The minimum replica set size as a number.
* **quorumLossWaitDuration**: string: The maximum duration for which a partition is allowed to be in a state of quorum loss, represented in ISO 8601 format (hh:mm:ss.s).
* **replicaRestartWaitDuration**: string: The duration between when a replica goes down and when a new replica is created, represented in ISO 8601 format (hh:mm:ss.s).
* **serviceKind**: 'Stateful' (Required): The properties of a stateful service resource.
* **standByReplicaKeepDuration**: string: The definition on how long StandBy replicas should be maintained before being removed, represented in ISO 8601 format (hh:mm:ss.s).
* **targetReplicaSetSize**: int: The target replica set size as a number.

## Stateless
### Properties
* **instanceCount**: int: The instance count.
* **serviceKind**: 'Stateless' (Required): The properties of a stateless service resource.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationTypeResourceProperties
### Properties
* **provisioningState**: string (ReadOnly): The current deployment or provisioning state, which only appears in the response.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationTypeVersionResourceProperties
### Properties
* **appPackageUrl**: string (Required): The URL to the application package
* **defaultParameterList**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): List of application type parameters that can be overridden when creating or updating the application.
* **provisioningState**: string (ReadOnly): The current deployment or provisioning state, which only appears in the response

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

