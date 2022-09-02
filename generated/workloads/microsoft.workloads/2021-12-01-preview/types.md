# Microsoft.Workloads @ 2021-12-01-preview

## Resource Microsoft.Workloads/monitors@2021-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [UserAssignedServiceIdentity](#userassignedserviceidentity): Managed service identity (user assigned identities)
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MonitorProperties](#monitorproperties): SAP monitor properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Workloads/monitors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Workloads/monitors/providerInstances@2021-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [UserAssignedServiceIdentity](#userassignedserviceidentity): Managed service identity (user assigned identities)
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProviderInstanceProperties](#providerinstanceproperties): Provider Instance properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Workloads/monitors/providerInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Workloads/phpWorkloads@2021-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [PhpWorkloadResourceIdentity](#phpworkloadresourceidentity): Identity for the resource. Currently not supported
* **kind**: 'WordPress' | string (Required): Indicates which kind of php workload this resource represent e.g WordPress
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PhpWorkloadResourceProperties](#phpworkloadresourceproperties): Resource properties
* **sku**: [Sku](#sku): Php workloads SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Workloads/phpWorkloads' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Workloads/phpWorkloads/wordpressInstances@2021-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [WordpressInstanceResourceProperties](#wordpressinstanceresourceproperties): Resource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Workloads/phpWorkloads/wordpressInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Workloads/sapVirtualInstances@2021-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [UserAssignedServiceIdentity](#userassignedserviceidentity): Managed service identity (user assigned identities)
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SAPVirtualInstanceProperties](#sapvirtualinstanceproperties) (Required): Defines the Virtual Instance for SAP solutions resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Workloads/sapVirtualInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Workloads/sapVirtualInstances/applicationInstances@2021-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SAPApplicationServerProperties](#sapapplicationserverproperties): Defines the SAP Application Server instance properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Workloads/sapVirtualInstances/applicationInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Workloads/sapVirtualInstances/centralInstances@2021-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SAPCentralServerProperties](#sapcentralserverproperties): Defines the SAP Central Services Instance properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Workloads/sapVirtualInstances/centralInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Workloads/sapVirtualInstances/databaseInstances@2021-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SAPDatabaseProperties](#sapdatabaseproperties): Defines the Database properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Workloads/sapVirtualInstances/databaseInstances' (ReadOnly, DeployTimeConstant): The resource type

## ApplicationServerConfiguration
### Properties
* **instanceCount**: int (Required): The number of app server instances.
* **subnetId**: string (Required): The subnet id.
* **virtualMachineConfiguration**: [VirtualMachineConfiguration](#virtualmachineconfiguration) (Required): Gets or sets the virtual machine configuration.

## BackupProfile
### Properties
* **backupEnabled**: 'Disabled' | 'Enabled' | string (Required): Whether to enable Azure backup for the workload
* **vaultResourceId**: string (ReadOnly): Backup vault resource Id

## CacheProfile
### Properties
* **cacheResourceId**: string (ReadOnly): Cache resource Id
* **capacity**: int (Required): Cache capacity
* **family**: 'C' | 'P' | string (Required): Cache family
* **name**: string: Cache name
* **skuName**: string (Required): Cache SKU name

## CentralServerConfiguration
### Properties
* **instanceCount**: int (Required): The number of central server VMs.
* **subnetId**: string (Required): The subnet id.
* **virtualMachineConfiguration**: [VirtualMachineConfiguration](#virtualmachineconfiguration) (Required): Gets or sets the virtual machine configuration.

## CentralServerVmDetails
### Properties
* **type**: 'ASCS' | 'ERS' | 'ERSInactive' | 'Primary' | 'Secondary' | 'Standby' | 'Unknown' | string (ReadOnly): Defines the type of central server VM.
* **virtualMachineId**: string (ReadOnly)

## DatabaseConfiguration
### Properties
* **databaseType**: 'DB2' | 'HANA' | string: The database type.
* **instanceCount**: int (Required): The number of database VMs.
* **subnetId**: string (Required): The subnet id.
* **virtualMachineConfiguration**: [VirtualMachineConfiguration](#virtualmachineconfiguration) (Required): Gets or sets the virtual machine configuration.

## DatabaseProfile
### Properties
* **backupRetentionDays**: int: Backup retention days for the server
* **haEnabled**: 'Disabled' | 'Enabled' | string: Whether to enable HA for the server
* **serverName**: string: Database server name
* **serverResourceId**: string (ReadOnly): Azure Database Server resource Id
* **sku**: string (Required): The name of the server SKU, e.g. Standard_D32s_v4
* **sslEnforcementEnabled**: 'Disabled' | 'Enabled' | string: Whether to enable SSL enforcement on the database
* **storageInGB**: int: Database storage size in GB
* **storageIops**: int: Storage IOPS for the server
* **storageSku**: string: SKU name for database storage
* **tier**: 'Burstable' | 'GeneralPurpose' | 'MemoryOptimized' (Required): Tier of the server SKU
* **type**: 'MySql' | string (Required): Database type
* **version**: string: Database version

## DatabaseVmDetails
### Properties
* **status**: 'Offline' | 'PartiallyRunning' | 'Running' | 'Starting' | 'Stopping' | 'Unavailable' | string (ReadOnly): Defines the SAP Instance status.
* **virtualMachineId**: string (ReadOnly)

## DeployerVmPackages
### Properties
* **storageAccountId**: string: The deployer VM packages storage account id
* **url**: string: The URL to the deployer VM packages file.

## DiskInfo
### Properties
* **sizeInGB**: int: Disk size in GB
* **storageType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' (Required): Storage type

## EnqueueReplicationServerProperties
### Properties
* **ersVersion**: 'EnqueueReplicator1' | 'EnqueueReplicator2' | string (ReadOnly): Defines the type of Enqueue Replication Server.
* **health**: 'Degraded' | 'Healthy' | 'Unhealthy' | 'Unknown' | string (ReadOnly): Defines the health of SAP Instances.
* **hostname**: string (ReadOnly): ERS SAP Hostname.
* **instanceNo**: string (ReadOnly): ERS Instance Number.
* **ipAddress**: string (ReadOnly): ERS SAP IP Address.
* **kernelPatch**: string (ReadOnly): ERS SAP Kernel Patch level.
* **kernelVersion**: string (ReadOnly): ERS SAP Kernel Version.

## EnqueueServerProperties
### Properties
* **health**: 'Degraded' | 'Healthy' | 'Unhealthy' | 'Unknown' | string (ReadOnly): Defines the health of SAP Instances.
* **hostname**: string (ReadOnly): Enqueue Server SAP Hostname.
* **ipAddress**: string (ReadOnly): Enqueue Server SAP IP Address.
* **port**: int (ReadOnly): Enqueue Server Port.

## Error
### Properties
* **code**: string (ReadOnly): Server-defined set of error codes.
* **details**: [Error](#error)[] (ReadOnly): Array of details about specific errors that led to this reported error.
* **innerError**: [ErrorInnerError](#errorinnererror) (ReadOnly): Object containing more specific information than  the current object about the error.
* **message**: string (ReadOnly): Human-readable representation of the error.
* **target**: string (ReadOnly): Target of the error.

## ErrorDefinition
### Properties
* **code**: string (ReadOnly): Service specific error code which serves as the substatus for the HTTP error code.
* **details**: [ErrorDefinition](#errordefinition)[] (ReadOnly): Internal error details.
* **message**: string (ReadOnly): Description of the error.

## ErrorInnerError
### Properties
* **innerError**: [Error](#error): Standard error object.

## FileshareProfile
### Properties
* **shareName**: string (ReadOnly): File share name
* **shareSizeInGB**: int: File share size in GB
* **shareType**: 'AzureFiles' | 'NfsOnController' | string (Required): Share type
* **storageResourceId**: string (ReadOnly): File share storage resource id
* **storageType**: 'Premium_LRS' | 'Standard_GRS' | 'Standard_LRS' | 'Standard_ZRS' | string (Required): File share backing storage type

## GatewayServerProperties
### Properties
* **health**: 'Degraded' | 'Healthy' | 'Unhealthy' | 'Unknown' | string (ReadOnly): Defines the health of SAP Instances.
* **port**: int (ReadOnly): Gateway Port.

## HighAvailabilityConfiguration
### Properties
* **highAvailabilityType**: 'AvailabilitySet' | 'AvailabilityZone' | string (Required): The high availability type.

## HighAvailabilitySoftwareConfiguration
### Properties
* **fencingClientId**: string (Required): The fencing client id.
* **fencingClientPassword**: string (Required): The fencing client id secret/password. The secret should never expire. This will be used pacemaker to start/stop the cluster VMs.

## ImageReference
### Properties
* **exactVersion**: string (ReadOnly): Specifies in decimal numbers, the version of platform image or marketplace image used to create the virtual machine. This readonly field differs from 'version', only if the value specified in 'version' field is 'latest'.
* **offer**: string: Specifies the offer of the platform image or marketplace image used to create the virtual machine.
* **publisher**: string: The image publisher.
* **sharedGalleryImageId**: string: Specified the shared gallery image unique id for vm deployment. This can be fetched from shared gallery image GET call.
* **sku**: string: The image SKU.
* **version**: string: Specifies the version of the platform image or marketplace image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available.

## InfrastructureConfiguration
* **Discriminator**: deploymentType

### Base Properties
* **appResourceGroup**: string (Required): The application resource group where SAP system resources will be deployed.

### SingleServerConfiguration
#### Properties
* **databaseType**: 'DB2' | 'HANA' | string: The database type.
* **deploymentType**: 'SingleServer' (Required): The type of SAP deployment, single server or Three tier.
* **networkConfiguration**: [NetworkConfiguration](#networkconfiguration): Network configuration for the server
* **subnetId**: string (Required): The subnet id.
* **virtualMachineConfiguration**: [VirtualMachineConfiguration](#virtualmachineconfiguration) (Required): Gets or sets the virtual machine configuration.

### ThreeTierConfiguration
#### Properties
* **applicationServer**: [ApplicationServerConfiguration](#applicationserverconfiguration) (Required): The application server configuration.
* **centralServer**: [CentralServerConfiguration](#centralserverconfiguration) (Required): The central server configuration.
* **databaseServer**: [DatabaseConfiguration](#databaseconfiguration) (Required): The database configuration.
* **deploymentType**: 'ThreeTier' (Required): The type of SAP deployment, single server or Three tier.
* **highAvailabilityConfig**: [HighAvailabilityConfiguration](#highavailabilityconfiguration): The high availability configuration.
* **networkConfiguration**: [NetworkConfiguration](#networkconfiguration): Network configuration common to all servers


## ManagedRGConfiguration
### Properties
* **name**: string: Managed resource group name

## MessageServerProperties
### Properties
* **health**: 'Degraded' | 'Healthy' | 'Unhealthy' | 'Unknown' | string (ReadOnly): Defines the health of SAP Instances.
* **hostname**: string (ReadOnly): Message Server SAP Hostname.
* **httpPort**: int (ReadOnly): Message Server HTTP Port.
* **httpsPort**: int (ReadOnly): Message Server HTTPS Port.
* **internalMsPort**: int (ReadOnly): Message Server internal MS port.
* **ipAddress**: string (ReadOnly): Message server IP Address.
* **msPort**: int (ReadOnly): Message Server port.

## MonitorProperties
### Properties
* **appLocation**: string: The SAP monitor resources will be deployed in the SAP monitoring region. The subnet region should be same as the SAP monitoring region.
* **errors**: [MonitorPropertiesErrors](#monitorpropertieserrors) (ReadOnly): Defines the SAP monitor errors.
* **logAnalyticsWorkspaceArmId**: string: The ARM ID of the Log Analytics Workspace that is used for SAP monitoring.
* **managedResourceGroupConfiguration**: [ManagedRGConfiguration](#managedrgconfiguration): Managed resource group configuration
* **monitorSubnet**: string: The subnet which the SAP monitor will be deployed in
* **msiArmId**: string (ReadOnly): The ARM ID of the MSI used for SAP monitoring.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): State of provisioning of the SAP monitor.
* **routingPreference**: 'Default' | 'RouteAll' | string: Sets the routing preference of the SAP monitor. By default only RFC1918 traffic is routed to the customer VNET.
* **zoneRedundancyPreference**: string: Sets the preference for zone redundancy on resources created for the SAP monitor. By default resources will be created which do not support zone redundancy.

## MonitorPropertiesErrors
### Properties
* **code**: string (ReadOnly): Server-defined set of error codes.
* **details**: [Error](#error)[] (ReadOnly): Array of details about specific errors that led to this reported error.
* **innerError**: [ErrorInnerError](#errorinnererror) (ReadOnly): Object containing more specific information than  the current object about the error.
* **message**: string (ReadOnly): Human-readable representation of the error.
* **target**: string (ReadOnly): Target of the error.

## NetworkConfiguration
### Properties
* **isSecondaryIpEnabled**: bool: Specifies whether a secondary IP address should be added to the network interface on all VMs of the SAP system being deployed

## NetworkProfile
### Properties
* **azureFrontDoorEnabled**: 'Disabled' | 'Enabled' | string: Whether to enable Azure front door
* **azureFrontDoorResourceId**: string (ReadOnly): Azure front door resource id
* **capacity**: int: Capacity, applicable only for Application Gateway
* **frontEndPublicIpResourceId**: string (ReadOnly): Loadbalancer front-end IP address resource Id
* **loadBalancerResourceId**: string (ReadOnly): Azure Loadbalancer or ApplicationGateway resource Id
* **loadBalancerSku**: string: Load balancer SKU
* **loadBalancerTier**: string: Load balancer tier
* **loadBalancerType**: 'ApplicationGateway' | 'LoadBalancer' | string (Required): Load balancer type
* **outboundPublicIpResourceIds**: string[] (ReadOnly): List of outbound public IP resource IDs
* **vNetResourceId**: string (ReadOnly): Virtual network resource Id

## NodeProfile
### Properties
* **dataDisks**: [DiskInfo](#diskinfo)[]: Data disks details. This property is not in use right now
* **name**: string: VM or VMSS name
* **nodeResourceIds**: string[] (ReadOnly): VM/VMSS resource ARM Ids
* **nodeSku**: string (Required): VM SKU for node(s)
* **osDisk**: [DiskInfo](#diskinfo) (Required): OS disk details
* **osImage**: [OsImageProfile](#osimageprofile) (Required): OS image used for creating the nodes

## OSConfiguration
* **Discriminator**: osType

### Base Properties

### LinuxConfiguration
#### Properties
* **disablePasswordAuthentication**: bool: Specifies whether password authentication should be disabled.
* **osType**: 'Linux' (Required): The OS Type
* **ssh**: [SshConfiguration](#sshconfiguration): Specifies the ssh key configuration for a Linux OS. (This property is deprecated, please use 'sshKeyPair' instead)
* **sshKeyPair**: [SshKeyPair](#sshkeypair): The SSH Key-pair used to authenticate with the VM's.

### WindowsConfiguration
#### Properties
* **osType**: 'Windows' (Required): The OS Type


## OsImageProfile
### Properties
* **offer**: 'UbuntuServer' | string: OS image offer
* **publisher**: 'Canonical' | string: OS image publisher
* **sku**: '16.04-LTS' | '18.04-LTS' | string: OS image sku
* **version**: 'latest' | string: OS image version

## OSProfile
### Properties
* **adminPassword**: string: Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/reset-rdp) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/troubleshoot-ssh-connection)
* **adminUsername**: string: Specifies the name of the administrator account. <br><br> This property cannot be updated after the VM is created. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters.
* **osConfiguration**: [OSConfiguration](#osconfiguration): Specifies Windows operating system settings on the virtual machine.

## OsSapConfiguration
### Properties
* **deployerVmPackages**: [DeployerVmPackages](#deployervmpackages): The url and storage account ID where deployer VM packages are uploaded
* **sapFqdn**: string: The FQDN to set for the SAP system

## PhpProfile
### Properties
* **version**: '7.2' | '7.3' | '7.4' | string (Required): PHP version

## PhpWorkloadResourceIdentity
### Properties
* **type**: 'None' | 'UserAssigned' | string (Required): Type of manage identity
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): User assigned identities dictionary

## PhpWorkloadResourceProperties
### Properties
* **adminUserProfile**: [UserProfile](#userprofile) (Required): Admin user profile used for VM and VMSS
* **appLocation**: string (Required): The infra resources for PHP workload will be created in this location
* **backupProfile**: [BackupProfile](#backupprofile): Backup profile
* **cacheProfile**: [CacheProfile](#cacheprofile): Cache profile
* **controllerProfile**: [NodeProfile](#nodeprofile) (Required): Controller VM profile
* **databaseProfile**: [DatabaseProfile](#databaseprofile) (Required): Database profile
* **fileshareProfile**: [FileshareProfile](#fileshareprofile): File share profile
* **managedResourceGroupConfiguration**: [ManagedRGConfiguration](#managedrgconfiguration): Managed resource group configuration of the workload
* **networkProfile**: [NetworkProfile](#networkprofile): Network profile
* **phpProfile**: [PhpProfile](#phpprofile): PHP profile
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Php workload resource provisioning state
* **searchProfile**: [SearchProfile](#searchprofile): Search profile
* **siteProfile**: [SiteProfile](#siteprofile): Site profile
* **webNodesProfile**: [VmssNodesProfile](#vmssnodesprofile) (Required): VMSS web nodes profile

## ProviderInstanceProperties
### Properties
* **errors**: [ProviderInstancePropertiesErrors](#providerinstancepropertieserrors) (ReadOnly): Defines the provider instance errors.
* **providerSettings**: [ProviderSpecificProperties](#providerspecificproperties): Defines the provider instance errors.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): State of provisioning of the provider instance

## ProviderInstancePropertiesErrors
### Properties
* **code**: string (ReadOnly): Server-defined set of error codes.
* **details**: [Error](#error)[] (ReadOnly): Array of details about specific errors that led to this reported error.
* **innerError**: [ErrorInnerError](#errorinnererror) (ReadOnly): Object containing more specific information than  the current object about the error.
* **message**: string (ReadOnly): Human-readable representation of the error.
* **target**: string (ReadOnly): Target of the error.

## ProviderSpecificProperties
* **Discriminator**: providerType

### Base Properties

### DB2ProviderInstanceProperties
#### Properties
* **dbName**: string: Gets or sets the db2 database name.
* **dbPassword**: string: Gets or sets the db2 database password.
* **dbPasswordUri**: string: Gets or sets the key vault URI to secret with the database password.
* **dbPort**: string: Gets or sets the db2 database sql port.
* **dbUsername**: string: Gets or sets the db2 database user name.
* **hostname**: string: Gets or sets the target virtual machine name.
* **providerType**: 'Db2' (Required): The provider type. For example, the value can be SapHana.
* **sapSid**: string: Gets or sets the SAP System Identifier

### MsSqlServerProviderInstanceProperties
#### Properties
* **dbPassword**: string: Gets or sets the database password.
* **dbPasswordUri**: string: Gets or sets the key vault URI to secret with the database password.
* **dbPort**: string: Gets or sets the database sql port.
* **dbUsername**: string: Gets or sets the database user name.
* **hostname**: string: Gets or sets the SQL server host name.
* **providerType**: 'MsSqlServer' (Required): The provider type. For example, the value can be SapHana.
* **sapSid**: string: Gets or sets the SAP System Identifier

### PrometheusHaClusterProviderInstanceProperties
#### Properties
* **clusterName**: string: Gets or sets the clusterName.
* **hostname**: string: Gets or sets the target machine name.
* **prometheusUrl**: string: URL of the Node Exporter endpoint.
* **providerType**: 'PrometheusHaCluster' (Required): The provider type. For example, the value can be SapHana.
* **sid**: string: Gets or sets the cluster sid.

### PrometheusOSProviderInstanceProperties
#### Properties
* **prometheusUrl**: string: URL of the Node Exporter endpoint
* **providerType**: 'PrometheusOS' (Required): The provider type. For example, the value can be SapHana.

### HanaDbProviderInstanceProperties
#### Properties
* **dbName**: string: Gets or sets the hana database name.
* **dbPassword**: string: Gets or sets the database password.
* **dbPasswordUri**: string: Gets or sets the key vault URI to secret with the database password.
* **dbSslCertificateUri**: string: Gets or sets the blob URI to SSL certificate for the DB.
* **dbUsername**: string: Gets or sets the database user name.
* **hostname**: string: Gets or sets the target virtual machine size.
* **instanceNumber**: string: Gets or sets the database instance number.
* **providerType**: 'SapHana' (Required): The provider type. For example, the value can be SapHana.
* **sqlPort**: string: Gets or sets the database sql port.
* **sslHostNameInCertificate**: string: Gets or sets the hostname(s) in the SSL certificate.

### SapNetWeaverProviderInstanceProperties
#### Properties
* **providerType**: 'SapNetWeaver' (Required): The provider type. For example, the value can be SapHana.
* **sapClientId**: string: Gets or sets the SAP Client ID.
* **sapHostFileEntries**: string[]: Gets or sets the list of HostFile Entries
* **sapHostname**: string: Gets or sets the target virtual machine IP Address/FQDN.
* **sapInstanceNr**: string: Gets or sets the instance number of SAP NetWeaver.
* **sapPassword**: string: Sets the SAP password.
* **sapPasswordUri**: string: Gets or sets the key vault URI to secret with the SAP password.
* **sapPortNumber**: string: Gets or sets the SAP HTTP port number.
* **sapSid**: string: Gets or sets the SAP System Identifier
* **sapSslCertificateUri**: string: Gets or sets the blob URI to SSL certificate for the SAP system.
* **sapUsername**: string: Gets or sets the SAP user name.


## SAPApplicationServerProperties
### Properties
* **errors**: [SAPVirtualInstanceError](#sapvirtualinstanceerror) (ReadOnly): Defines the Application Instance errors.
* **gatewayPort**: int (ReadOnly): Application server instance gateway Port.
* **health**: 'Degraded' | 'Healthy' | 'Unhealthy' | 'Unknown' | string (ReadOnly): Defines the health of SAP Instances.
* **hostname**: string (ReadOnly): Application server instance SAP hostname.
* **icmHttpPort**: int (ReadOnly): Application server instance ICM HTTP Port.
* **icmHttpsPort**: int (ReadOnly): Application server instance ICM HTTPS Port.
* **instanceNo**: string (ReadOnly): Application server Instance Number.
* **ipAddress**: string (ReadOnly): Application server instance SAP IP Address.
* **kernelPatch**: string (ReadOnly): Application server instance SAP Kernel Patch level.
* **kernelVersion**: string (ReadOnly): Application server instance SAP Kernel Version.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Defines the provisioning states.
* **status**: 'Offline' | 'PartiallyRunning' | 'Running' | 'Starting' | 'Stopping' | 'Unavailable' | string (ReadOnly): Defines the SAP Instance status.
* **subnet**: string (ReadOnly): Application server Subnet.
* **virtualMachineId**: string (ReadOnly): The virtual machine.

## SAPCentralServerProperties
### Properties
* **enqueueReplicationServerProperties**: [EnqueueReplicationServerProperties](#enqueuereplicationserverproperties): Defines the SAP Enqueue Replication Server (ERS) properties.
* **enqueueServerProperties**: [EnqueueServerProperties](#enqueueserverproperties): Defines the SAP Enqueue Server properties.
* **errors**: [SAPVirtualInstanceError](#sapvirtualinstanceerror) (ReadOnly): Defines the errors related to SAP Central Services Instance resource.
* **gatewayServerProperties**: [GatewayServerProperties](#gatewayserverproperties): Defines the SAP Gateway Server properties.
* **health**: 'Degraded' | 'Healthy' | 'Unhealthy' | 'Unknown' | string (ReadOnly): Defines the health of SAP Instances.
* **instanceNo**: string (ReadOnly): The central services instance number.
* **kernelPatch**: string (ReadOnly): The central services instance Kernel Patch level.
* **kernelVersion**: string (ReadOnly): The central services instance Kernel Version.
* **messageServerProperties**: [MessageServerProperties](#messageserverproperties): Defines the SAP Message Server properties.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Defines the provisioning states.
* **status**: 'Offline' | 'PartiallyRunning' | 'Running' | 'Starting' | 'Stopping' | 'Unavailable' | string (ReadOnly): Defines the SAP Instance status.
* **subnet**: string (ReadOnly): The central services instance subnet.
* **vmDetails**: [CentralServerVmDetails](#centralservervmdetails)[] (ReadOnly): The list of virtual machines corresponding to the Central Services instance.

## SAPConfiguration
* **Discriminator**: configurationType

### Base Properties

### DeploymentConfiguration
#### Properties
* **appLocation**: string: The geo-location where the SAP system is to be created.
* **configurationType**: 'Deployment' (Required): The configuration Type.
* **infrastructureConfiguration**: [InfrastructureConfiguration](#infrastructureconfiguration): The infrastructure configuration.
* **softwareConfiguration**: [SoftwareConfiguration](#softwareconfiguration): The software configuration.

### DeploymentWithOSConfiguration
#### Properties
* **appLocation**: string: The geo-location where the SAP system is to be created.
* **configurationType**: 'DeploymentWithOSConfig' (Required): The configuration Type.
* **infrastructureConfiguration**: [InfrastructureConfiguration](#infrastructureconfiguration): The infrastructure configuration.
* **osSapConfiguration**: [OsSapConfiguration](#ossapconfiguration): The OS and SAP configuration.
* **softwareConfiguration**: [SoftwareConfiguration](#softwareconfiguration): The software configuration.

### DiscoveryConfiguration
#### Properties
* **appLocation**: string (ReadOnly): The geo-location where the SAP system exists.
* **centralServerVmId**: string: The virtual machine ID of the Central Server.
* **configurationType**: 'Discovery' (Required): The configuration Type.


## SAPDatabaseProperties
### Properties
* **databaseSid**: string (ReadOnly): Database SID name.
* **databaseType**: string (ReadOnly): Database type, that is if the DB is HANA, DB2, Oracle, SAP ASE, Max DB or MS SQL Server.
* **errors**: [SAPVirtualInstanceError](#sapvirtualinstanceerror) (ReadOnly): Defines the errors related to Database resource.
* **ipAddress**: string (ReadOnly): Database IP Address.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Defines the provisioning states.
* **status**: 'Offline' | 'PartiallyRunning' | 'Running' | 'Starting' | 'Stopping' | 'Unavailable' | string (ReadOnly): Defines the SAP Instance status.
* **subnet**: string (ReadOnly): Database subnet.
* **vmDetails**: [DatabaseVmDetails](#databasevmdetails)[] (ReadOnly): The list of virtual machines corresponding to the Database resource.

## SAPVirtualInstanceError
### Properties
* **properties**: [ErrorDefinition](#errordefinition): The Virtual Instance for SAP error body.

## SAPVirtualInstanceProperties
### Properties
* **configuration**: [SAPConfiguration](#sapconfiguration) (Required): Defines if the SAP system is being created using Azure Center for SAP solutions (ACSS) or if an existing SAP system is being registered with ACSS
* **environment**: 'NonProd' | 'Prod' | string (Required): Defines the environment type - Production/Non Production.
* **errors**: [SAPVirtualInstanceError](#sapvirtualinstanceerror) (ReadOnly): Indicates any errors on the Virtual Instance for SAP solutions resource.
* **health**: 'Degraded' | 'Healthy' | 'Unhealthy' | 'Unknown' | string (ReadOnly): Defines the health of SAP Instances.
* **managedResourceGroupConfiguration**: [ManagedRGConfiguration](#managedrgconfiguration): Managed resource group configuration
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Defines the provisioning states.
* **sapProduct**: 'ECC' | 'Other' | 'S4HANA' | string (Required): Defines the SAP Product type.
* **state**: 'DiscoveryFailed' | 'DiscoveryInProgress' | 'DiscoveryPending' | 'InfrastructureDeploymentFailed' | 'InfrastructureDeploymentInProgress' | 'InfrastructureDeploymentPending' | 'RegistrationComplete' | 'SoftwareInstallationFailed' | 'SoftwareInstallationInProgress' | 'SoftwareInstallationPending' | string (ReadOnly): Defines the Virtual Instance for SAP state.
* **status**: 'Offline' | 'PartiallyRunning' | 'Running' | 'Starting' | 'Stopping' | 'Unavailable' | string (ReadOnly): Defines the SAP Instance status.

## SearchProfile
### Properties
* **dataDisks**: [DiskInfo](#diskinfo)[]: Data disks details. This property is not in use right now
* **name**: string: VM or VMSS name
* **nodeResourceIds**: string[] (ReadOnly): VM/VMSS resource ARM Ids
* **nodeSku**: string (Required): VM SKU for node(s)
* **osDisk**: [DiskInfo](#diskinfo) (Required): OS disk details
* **osImage**: [OsImageProfile](#osimageprofile) (Required): OS image used for creating the nodes
* **searchType**: 'Elastic' | string (Required): Search type

## SiteProfile
### Properties
* **domainName**: string: Domain name for the application site URL

## Sku
### Properties
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU. Ex - P3. It is typically a letter+number code
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard': This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.

## SoftwareConfiguration
* **Discriminator**: softwareInstallationType

### Base Properties

### SAPInstallWithoutOSConfigSoftwareConfiguration
#### Properties
* **bomUrl**: string (Required): The URL to the SAP Build of Materials(BOM) file.
* **highAvailabilitySoftwareConfiguration**: [HighAvailabilitySoftwareConfiguration](#highavailabilitysoftwareconfiguration): Gets or sets the HA software configuration.
* **sapBitsStorageAccountId**: string (Required): The SAP bits storage account id.
* **softwareInstallationType**: 'SAPInstallWithoutOSConfig' (Required): The SAP software installation Type.
* **softwareVersion**: string (Required): The software version to install.

### ServiceInitiatedSoftwareConfiguration
#### Properties
* **bomUrl**: string (Required): The URL to the SAP Build of Materials(BOM) file.
* **highAvailabilitySoftwareConfiguration**: [HighAvailabilitySoftwareConfiguration](#highavailabilitysoftwareconfiguration): Gets or sets the HA software configuration.
* **sapBitsStorageAccountId**: string (Required): The SAP bits storage account id.
* **sapFqdn**: string (Required): The FQDN to set for the SAP system during install.
* **softwareInstallationType**: 'ServiceInitiated' (Required): The SAP software installation Type.
* **softwareVersion**: string (Required): The software version to install.
* **sshPrivateKey**: string (Required): The SSH private key.


## SshConfiguration
### Properties
* **publicKeys**: [SshPublicKey](#sshpublickey)[]: The list of SSH public keys used to authenticate with linux based VMs.

## SshKeyPair
### Properties
* **privateKey**: string: SSH private key.
* **publicKey**: string: SSH public key

## SshPublicKey
### Properties
* **keyData**: string: SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure](https://docs.microsoft.com/azure/virtual-machines/linux/create-ssh-keys-detailed).

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): The client ID of the assigned identity.
* **principalId**: string (ReadOnly): The principal ID of the assigned identity.

## UserAssignedServiceIdentity
### Properties
* **type**: 'None' | 'UserAssigned' | string (Required): Type of manage identity
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): User assigned identities dictionary

## UserProfile
### Properties
* **sshPublicKey**: string (Required): SSH public key data
* **userName**: string (Required): User name

## VirtualMachineConfiguration
### Properties
* **imageReference**: [ImageReference](#imagereference) (Required): The image reference.
* **osProfile**: [OSProfile](#osprofile) (Required): The OS profile.
* **vmSize**: string (Required): The virtual machine size.

## VmssNodesProfile
### Properties
* **autoScaleMaxCount**: int: Maximum number of nodes for autoscale
* **autoScaleMinCount**: int: Minimum number of nodes for autoscale
* **dataDisks**: [DiskInfo](#diskinfo)[]: Data disks details. This property is not in use right now
* **name**: string: VM or VMSS name
* **nodeResourceIds**: string[] (ReadOnly): VM/VMSS resource ARM Ids
* **nodeSku**: string (Required): VM SKU for node(s)
* **osDisk**: [DiskInfo](#diskinfo) (Required): OS disk details
* **osImage**: [OsImageProfile](#osimageprofile) (Required): OS image used for creating the nodes

## WordpressInstanceResourceProperties
### Properties
* **databaseName**: string: Database name used by the application
* **databaseUser**: string: User name used by the application to connect to database
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Failed' | 'Installing' | 'NotSpecified' | 'Succeeded' | string (ReadOnly): WordPress instance provisioning state
* **siteUrl**: string (ReadOnly): Site Url to access the WordPress application
* **version**: '5.4' | '5.4.1' | '5.4.2' | '5.4.3' | string (Required): Application version

