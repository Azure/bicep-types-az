# Microsoft.ServiceFabric @ 2016-09-01

## Resource Microsoft.ServiceFabric/clusters@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): The cluster resource properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.ServiceFabric/clusters' (ReadOnly, DeployTimeConstant): The resource type

## AzureActiveDirectory
### Properties
* **clientApplication**: string: Azure active directory client application id
* **clusterApplication**: string: Azure active directory cluster application id
* **tenantId**: string: Azure active directory tenant id

## CertificateDescription
### Properties
* **thumbprint**: string (Required): Thumbprint of the primary certificate
* **thumbprintSecondary**: string: Thumbprint of the secondary certificate
* **x509StoreName**: 'AddressBook' | 'AuthRoot' | 'CertificateAuthority' | 'Disallowed' | 'My' | 'Root' | 'TrustedPeople' | 'TrustedPublisher' | string: The local certificate store location

## ClientCertificateCommonName
### Properties
* **certificateCommonName**: string (Required): Certificate common name to be granted access; be careful using wild card common names
* **certificateIssuerThumbprint**: string (Required): Certificate issuer thumbprint
* **isAdmin**: bool (Required): Is this certificate used for admin access from the client, if false , it is used or query only access

## ClientCertificateThumbprint
### Properties
* **certificateThumbprint**: string (Required): Certificate thumbprint
* **isAdmin**: bool (Required): Is this certificate used for admin access from the client, if false, it is used or query only access

## ClusterHealthPolicy
### Properties
* **maxPercentUnhealthyApplications**: int: The maximum allowed percentage of unhealthy applications before reporting an error. For example, to allow 10% of applications to be unhealthy, this value would be 10.
* **maxPercentUnhealthyNodes**: int: The maximum allowed percentage of unhealthy nodes before reporting an error. For example, to allow 10% of nodes to be unhealthy, this value would be 10.

## ClusterProperties
### Properties
* **availableClusterVersions**: [ClusterVersionDetails](#clusterversiondetails)[] (ReadOnly): The available cluster code version which the cluster can upgrade to, note that you must choose upgradeMode to manual to upgrade to
* **azureActiveDirectory**: [AzureActiveDirectory](#azureactivedirectory): The settings to enable AAD authentication on the cluster
* **certificate**: [CertificateDescription](#certificatedescription): This primary certificate will be used as cluster node to node security, SSL certificate for cluster management endpoint and default admin client
* **clientCertificateCommonNames**: [ClientCertificateCommonName](#clientcertificatecommonname)[]: List of client certificates to trust based on common names
* **clientCertificateThumbprints**: [ClientCertificateThumbprint](#clientcertificatethumbprint)[]: The client thumbprint details ,it is used for client access for cluster operation
* **clusterCodeVersion**: string: The ServiceFabric code version running in your cluster
* **clusterEndpoint**: string (ReadOnly): The endpoint for the cluster connecting to servicefabric resource provider
* **clusterId**: string (ReadOnly): The unique identifier for the cluster resource
* **clusterState**: 'AutoScale' | 'BaselineUpgrade' | 'Deploying' | 'EnforcingClusterVersion' | 'Ready' | 'UpdatingInfrastructure' | 'UpdatingUserCertificate' | 'UpdatingUserConfiguration' | 'UpgradeServiceUnreachable' | 'WaitingForNodes' | string (ReadOnly): The state for the cluster
* **diagnosticsStorageAccountConfig**: [DiagnosticsStorageAccountConfig](#diagnosticsstorageaccountconfig): The storage diagnostics account configuration details
* **fabricSettings**: [SettingsSectionDescription](#settingssectiondescription)[]: List of custom fabric settings to configure the cluster.
* **managementEndpoint**: string (Required): The http management endpoint of the cluster
* **nodeTypes**: [NodeTypeDescription](#nodetypedescription)[] (Required): The list of node types that make up the cluster
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the cluster resource
* **reliabilityLevel**: 'Bronze' | 'Gold' | 'Platinum' | 'Silver' | string: Cluster reliability level indicates replica set size of system service
* **reverseProxyCertificate**: [CertificateDescription](#certificatedescription): The server certificate used by reverse proxy
* **upgradeDescription**: [ClusterUpgradePolicy](#clusterupgradepolicy): The policy to use when upgrading the cluster.
* **upgradeMode**: 'Automatic' | 'Manual' | string: Cluster upgrade mode indicates if fabric upgrade is initiated automatically by the system or not
* **vmImage**: string: The name of VM image VMSS has been configured with. Generic names such as Windows or Linux can be used.

## ClusterUpgradeDeltaHealthPolicy
### Properties
* **maxPercentDeltaUnhealthyApplications**: int (Required): Additional unhealthy applications percentage
* **maxPercentDeltaUnhealthyNodes**: int (Required): Additional unhealthy nodes percentage
* **maxPercentUpgradeDomainDeltaUnhealthyNodes**: int (Required): Additional unhealthy nodes percentage per upgrade domain

## ClusterUpgradePolicy
### Properties
* **deltaHealthPolicy**: [ClusterUpgradeDeltaHealthPolicy](#clusterupgradedeltahealthpolicy): Delta health policy
* **forceRestart**: bool: Force node to restart or not
* **healthCheckRetryTimeout**: string (Required): The length of time that health checks can fail continuously,it represents .Net TimeSpan
* **healthCheckStableDuration**: string (Required): The length of time that health checks must pass continuously,it represents .Net TimeSpan
* **healthCheckWaitDuration**: string (Required): The length of time to wait after completing an upgrade domain before performing health checks, it represents .Net TimeSpan
* **healthPolicy**: [ClusterHealthPolicy](#clusterhealthpolicy) (Required): Cluster health Policy
* **overrideUserUpgradePolicy**: bool: Use the user defined upgrade policy or not
* **upgradeDomainTimeout**: string (Required): The timeout for any upgrade domain,it represents .Net TimeSpan
* **upgradeReplicaSetCheckTimeout**: string (Required): Timeout for replica set upgrade to complete,it represents .Net TimeSpan
* **upgradeTimeout**: string (Required): The upgrade timeout,it represents .Net TimeSpan

## ClusterVersionDetails
### Properties
* **codeVersion**: string: The ServiceFabric runtime version of the cluster
* **environment**: 'Linux' | 'Windows' | string: Cluster operating system
* **supportExpiryUtc**: string: The date of expiry of support of the version

## DiagnosticsStorageAccountConfig
### Properties
* **blobEndpoint**: string (Required): Diagnostics storage account blob endpoint
* **protectedAccountKeyName**: string (Required): Protected Diagnostics storage key name
* **queueEndpoint**: string (Required): Diagnostics storage account queue endpoint
* **storageAccountName**: string (Required): Diagnostics storage account name
* **tableEndpoint**: string (Required): Diagnostics storage account table endpoint

## EndpointRangeDescription
### Properties
* **endPort**: int (Required): End port of a range of ports
* **startPort**: int (Required): Starting port of a range of ports

## NodeTypeDescription
### Properties
* **applicationPorts**: [EndpointRangeDescription](#endpointrangedescription): Ports used by applications
* **capacities**: [NodeTypeDescriptionCapacities](#nodetypedescriptioncapacities): The capacity tags applied to the nodes in the node type, the cluster resource manager uses these tags to understand how much of a resource a node has
* **clientConnectionEndpointPort**: int (Required): The TCP cluster management endpoint port
* **durabilityLevel**: 'Bronze' | 'Gold' | 'Silver' | string: Node type durability Level
* **ephemeralPorts**: [EndpointRangeDescription](#endpointrangedescription): System assigned application ports
* **httpGatewayEndpointPort**: int (Required): The HTTP cluster management endpoint port
* **isPrimary**: bool (Required): Mark this as the primary node type
* **name**: string (Required): Name of the node type
* **placementProperties**: [NodeTypeDescriptionPlacementProperties](#nodetypedescriptionplacementproperties): The placement tags applied to nodes in the node type, which can be used to indicate where certain services (workload) should run
* **reverseProxyEndpointPort**: int: Endpoint used by reverse proxy
* **vmInstanceCount**: int (Required): The number of node instances in the node type

## NodeTypeDescriptionCapacities
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NodeTypeDescriptionPlacementProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SettingsParameterDescription
### Properties
* **name**: string (Required): The name of settings property
* **value**: string (Required): The value of the property

## SettingsSectionDescription
### Properties
* **name**: string (Required): The name of settings section
* **parameters**: [SettingsParameterDescription](#settingsparameterdescription)[] (Required): Collection of settings in the section, each setting is a tuple consisting of setting name and value

