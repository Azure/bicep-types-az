# Microsoft.Workloads @ 2024-09-01

## Resource Microsoft.Workloads/sapVirtualInstances@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z0-9]{2}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SAPVirtualInstanceProperties](#sapvirtualinstanceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Workloads/sapVirtualInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Workloads/sapVirtualInstances/applicationInstances@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^.*"} (Required, DeployTimeConstant): The resource name
* **properties**: [SAPApplicationServerProperties](#sapapplicationserverproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Workloads/sapVirtualInstances/applicationInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Workloads/sapVirtualInstances/centralInstances@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^.*"} (Required, DeployTimeConstant): The resource name
* **properties**: [SAPCentralServerProperties](#sapcentralserverproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Workloads/sapVirtualInstances/centralInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Workloads/sapVirtualInstances/databaseInstances@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^.*"} (Required, DeployTimeConstant): The resource name
* **properties**: [SAPDatabaseProperties](#sapdatabaseproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Workloads/sapVirtualInstances/databaseInstances' (ReadOnly, DeployTimeConstant): The resource type

## ApplicationServerConfiguration
### Properties
* **instanceCount**: int (Required): The number of app server instances.
* **subnetId**: string (Required): The subnet id.
* **virtualMachineConfiguration**: [VirtualMachineConfiguration](#virtualmachineconfiguration) (Required): Gets or sets the virtual machine configuration.

## ApplicationServerFullResourceNames
### Properties
* **availabilitySetName**: string: The full name for availability set. In case name is not provided, it will be defaulted to {SID}-App-AvSet.
* **virtualMachines**: [VirtualMachineResourceNames](#virtualmachineresourcenames)[]: The list of virtual machine naming details.

## ApplicationServerVmDetails
### Properties
* **storageDetails**: [StorageInformation](#storageinformation)[] (ReadOnly): Storage details of all the Storage Accounts attached to the App Virtual Machine. For e.g. NFS on AFS Shared Storage.
* **type**: 'Active' | 'Standby' | 'Unknown' | string (ReadOnly): Defines the type of application server VM.
* **virtualMachineId**: string (ReadOnly): The virtual machine id.

## CentralServerConfiguration
### Properties
* **instanceCount**: int (Required): The number of central server VMs.
* **subnetId**: string (Required): The subnet id.
* **virtualMachineConfiguration**: [VirtualMachineConfiguration](#virtualmachineconfiguration) (Required): Gets or sets the virtual machine configuration.

## CentralServerFullResourceNames
### Properties
* **availabilitySetName**: string: The full name for availability set. In case name is not provided, it will be defaulted to {SID}-ASCS-AvSet.
* **loadBalancer**: [LoadBalancerResourceNames](#loadbalancerresourcenames): The resource names object for load balancer and related resources.
* **virtualMachines**: [VirtualMachineResourceNames](#virtualmachineresourcenames)[]: The list of names for all ASCS virtual machines to be deployed. The number of entries in this list should be equal to the number VMs to be created for ASCS layer. At maximum, there can be two virtual machines at this layer: ASCS and ERS.

## CentralServerVmDetails
### Properties
* **storageDetails**: [StorageInformation](#storageinformation)[] (ReadOnly): Storage details of all the Storage Accounts attached to the ASCS Virtual Machine. For e.g. NFS on AFS Shared Storage.
* **type**: 'ASCS' | 'ERS' | 'ERSInactive' | 'Primary' | 'Secondary' | 'Standby' | 'Unknown' | string (ReadOnly): Defines the type of central server VM.
* **virtualMachineId**: string (ReadOnly): The virtual machine id.

## DatabaseConfiguration
### Properties
* **databaseType**: 'DB2' | 'HANA' | string: The database type.
* **diskConfiguration**: [DiskConfiguration](#diskconfiguration): Gets or sets the disk configuration.
* **instanceCount**: int (Required): The number of database VMs.
* **subnetId**: string (Required): The subnet id.
* **virtualMachineConfiguration**: [VirtualMachineConfiguration](#virtualmachineconfiguration) (Required): Gets or sets the virtual machine configuration.

## DatabaseServerFullResourceNames
### Properties
* **availabilitySetName**: string: The full name for availability set. In case name is not provided, it will be defaulted to {SID}-DB-AvSet.
* **loadBalancer**: [LoadBalancerResourceNames](#loadbalancerresourcenames): The resource names object for load balancer and related resources.
* **virtualMachines**: [VirtualMachineResourceNames](#virtualmachineresourcenames)[]: The list of virtual machine naming details.

## DatabaseVmDetails
### Properties
* **status**: 'Offline' | 'PartiallyRunning' | 'Running' | 'SoftShutdown' | 'Starting' | 'Stopping' | 'Unavailable' | string (ReadOnly): Defines the SAP Instance status.
* **storageDetails**: [StorageInformation](#storageinformation)[] (ReadOnly): Storage details of all the Storage Accounts attached to the Database Virtual Machine. For e.g. NFS on AFS Shared Storage.
* **virtualMachineId**: string (ReadOnly): The virtual machine id.

## DeployerVmPackages
### Properties
* **storageAccountId**: string: The deployer VM packages storage account id
* **url**: string: The URL to the deployer VM packages file.

## DiskConfiguration
### Properties
* **diskVolumeConfigurations**: [DiskConfigurationDiskVolumeConfigurations](#diskconfigurationdiskvolumeconfigurations): The disk configuration for the db volume. For HANA, Required volumes are: ['hana/data', 'hana/log', hana/shared', 'usr/sap', 'os'], Optional volume : ['backup'].

## DiskConfigurationDiskVolumeConfigurations
### Properties
### Additional Properties
* **Additional Properties Type**: [DiskVolumeConfiguration](#diskvolumeconfiguration)

## DiskSku
### Properties
* **name**: 'PremiumV2_LRS' | 'Premium_LRS' | 'Premium_ZRS' | 'StandardSSD_LRS' | 'StandardSSD_ZRS' | 'Standard_LRS' | 'UltraSSD_LRS' | string: Defines the disk sku name.

## DiskVolumeConfiguration
### Properties
* **count**: int: The total number of disks required for the concerned volume.
* **sizeGB**: int: The disk size in GB.
* **sku**: [DiskSku](#disksku): The disk SKU details.

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

## ErrorDefinition
### Properties
* **code**: string (ReadOnly): Service specific error code which serves as the substatus for the HTTP error code.
* **details**: [ErrorDefinition](#errordefinition)[] (ReadOnly): Internal error details.
* **message**: string (ReadOnly): Description of the error.

## FileShareConfiguration
* **Discriminator**: configurationType

### Base Properties

### CreateAndMountFileShareConfiguration
#### Properties
* **configurationType**: 'CreateAndMount' (Required): The type of file share config, eg: Mount/CreateAndMount/Skip.
* **resourceGroup**: string: The name of transport file share resource group. This should be pre created by the customer. The app rg is used in case of missing input.
* **storageAccountName**: string: The name of file share storage account name . A custom name is used in case of missing input.

### MountFileShareConfiguration
#### Properties
* **configurationType**: 'Mount' (Required): The type of file share config, eg: Mount/CreateAndMount/Skip.
* **id**: string (Required): The fileshare resource ID
* **privateEndpointId**: string (Required): The private endpoint resource ID

### SkipFileShareConfiguration
#### Properties
* **configurationType**: 'Skip' (Required): The type of file share config, eg: Mount/CreateAndMount/Skip.


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
* **fencingClientPassword**: string {sensitive} (Required): The fencing client id secret/password. The secret should never expire. This will be used pacemaker to start/stop the cluster VMs.

## ImageReference
### Properties
* **id**: string: Specifies the ARM resource ID of the Azure Compute Gallery image version used for creating ACSS VMs. You will need to provide this input when you choose to deploy virtual machines in ACSS with OS image from the Azure Compute gallery.
* **offer**: string: Specifies the offer of the platform image or marketplace image used to create the virtual machine.
* **publisher**: string: The image publisher.
* **sku**: string: The image SKU.
* **version**: string: Specifies the version of the platform image or marketplace image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available.

## InfrastructureConfiguration
* **Discriminator**: deploymentType

### Base Properties
* **appResourceGroup**: string (Required): The application resource group where SAP system resources will be deployed.

### SingleServerConfiguration
#### Properties
* **customResourceNames**: [SingleServerCustomResourceNames](#singleservercustomresourcenames): The set of custom names to be used for underlying azure resources that are part of the SAP system.
* **databaseType**: 'DB2' | 'HANA' | string: The database type.
* **dbDiskConfiguration**: [DiskConfiguration](#diskconfiguration): Gets or sets the disk configuration.
* **deploymentType**: 'SingleServer' (Required): The SAP deployment type. Eg: SingleServer/ThreeTier.
* **networkConfiguration**: [NetworkConfiguration](#networkconfiguration): Network configuration for the server
* **subnetId**: string (Required): The subnet id.
* **virtualMachineConfiguration**: [VirtualMachineConfiguration](#virtualmachineconfiguration) (Required): Gets or sets the virtual machine configuration.

### ThreeTierConfiguration
#### Properties
* **applicationServer**: [ApplicationServerConfiguration](#applicationserverconfiguration) (Required): The application server configuration.
* **centralServer**: [CentralServerConfiguration](#centralserverconfiguration) (Required): The central server configuration.
* **customResourceNames**: [ThreeTierCustomResourceNames](#threetiercustomresourcenames): The set of custom names to be used for underlying azure resources that are part of the SAP system.
* **databaseServer**: [DatabaseConfiguration](#databaseconfiguration) (Required): The database configuration.
* **deploymentType**: 'ThreeTier' (Required): The SAP deployment type. Eg: SingleServer/ThreeTier.
* **highAvailabilityConfig**: [HighAvailabilityConfiguration](#highavailabilityconfiguration): The high availability configuration.
* **networkConfiguration**: [NetworkConfiguration](#networkconfiguration): Network configuration common to all servers
* **storageConfiguration**: [StorageConfiguration](#storageconfiguration): The storage configuration.


## LoadBalancerDetails
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the load balancer.

## LoadBalancerResourceNames
### Properties
* **backendPoolNames**: string[]: The list of backend pool names. Currently, ACSS deploys only one backend pool and hence, size of this list should be 1
* **frontendIpConfigurationNames**: string[]: The list of frontend IP configuration names. If provided as input, size of this list should be 2 for cs layer and should be 1 for database layer.
* **healthProbeNames**: string[]: The list of health probe names. If provided as input, size of this list should be 2 for cs layer and should be 1 for database layer.
* **loadBalancerName**: string: The full resource name for load balancer. If this value is not provided, load balancer will be name as {ASCS/DB}-loadBalancer.

## ManagedRGConfiguration
### Properties
* **name**: string: Managed resource group name

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## MessageServerProperties
### Properties
* **health**: 'Degraded' | 'Healthy' | 'Unhealthy' | 'Unknown' | string (ReadOnly): Defines the health of SAP Instances.
* **hostname**: string (ReadOnly): message server SAP Hostname.
* **httpPort**: int (ReadOnly): message server HTTP Port.
* **httpsPort**: int (ReadOnly): message server HTTPS Port.
* **internalMsPort**: int (ReadOnly): message server internal MS port.
* **ipAddress**: string (ReadOnly): message server IP Address.
* **msPort**: int (ReadOnly): message server port.

## NetworkConfiguration
### Properties
* **isSecondaryIpEnabled**: bool: Specifies whether a secondary IP address should be added to the network interface on all VMs of the SAP system being deployed

## NetworkInterfaceResourceNames
### Properties
* **networkInterfaceName**: string: The full name for network interface. If name is not provided, service uses a default name based on the deployment type. For SingleServer, default name is {SID}-Nic. In case of HA-AvZone systems, default name will be {SID}-{App/ASCS/DB}-Zone{A/B}-Nic with an incrementor at the end in case of more than 1 instance per layer. For distributed and HA-AvSet systems, default name will be {SID}-{App/ASCS/DB}-Nic with an incrementor at the end in case of more than 1 instance per layer.

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


## OSProfile
### Properties
* **adminPassword**: string {sensitive}: Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/reset-rdp) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/troubleshoot-ssh-connection)
* **adminUsername**: string: Specifies the name of the administrator account. <br><br> This property cannot be updated after the VM is created. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters.
* **osConfiguration**: [OSConfiguration](#osconfiguration): Specifies Windows operating system settings on the virtual machine.

## OsSapConfiguration
### Properties
* **deployerVmPackages**: [DeployerVmPackages](#deployervmpackages): The url and storage account ID where deployer VM packages are uploaded
* **sapFqdn**: string: The FQDN to set for the SAP system

## SAPApplicationServerProperties
### Properties
* **dispatcherStatus**: string (ReadOnly): Application server instance dispatcher status.
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
* **loadBalancerDetails**: [LoadBalancerDetails](#loadbalancerdetails) (ReadOnly): The Load Balancer details such as LoadBalancer ID attached to Application Server Virtual Machines
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Defines the provisioning states.
* **status**: 'Offline' | 'PartiallyRunning' | 'Running' | 'SoftShutdown' | 'Starting' | 'Stopping' | 'Unavailable' | string (ReadOnly): Defines the SAP Instance status.
* **subnet**: string (ReadOnly): Application server Subnet.
* **vmDetails**: [ApplicationServerVmDetails](#applicationservervmdetails)[] (ReadOnly): The list of virtual machines.

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
* **loadBalancerDetails**: [LoadBalancerDetails](#loadbalancerdetails) (ReadOnly): The Load Balancer details such as LoadBalancer ID attached to ASCS Virtual Machines
* **messageServerProperties**: [MessageServerProperties](#messageserverproperties): Defines the SAP message server properties.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Defines the provisioning states.
* **status**: 'Offline' | 'PartiallyRunning' | 'Running' | 'SoftShutdown' | 'Starting' | 'Stopping' | 'Unavailable' | string (ReadOnly): Defines the SAP Instance status.
* **subnet**: string (ReadOnly): The central services instance subnet.
* **vmDetails**: [CentralServerVmDetails](#centralservervmdetails)[] (ReadOnly): The list of virtual machines corresponding to the Central Services instance.

## SAPConfiguration
* **Discriminator**: configurationType

### Base Properties

### DeploymentConfiguration
#### Properties
* **appLocation**: string: The geo-location where the SAP system is to be created.
* **configurationType**: 'Deployment' (Required): The configuration type. Eg: Deployment/Discovery
* **infrastructureConfiguration**: [InfrastructureConfiguration](#infrastructureconfiguration): The infrastructure configuration.
* **softwareConfiguration**: [SoftwareConfiguration](#softwareconfiguration): The software configuration.

### DeploymentWithOSConfiguration
#### Properties
* **appLocation**: string: The geo-location where the SAP system is to be created.
* **configurationType**: 'DeploymentWithOSConfig' (Required): The configuration type. Eg: Deployment/Discovery
* **infrastructureConfiguration**: [InfrastructureConfiguration](#infrastructureconfiguration): The infrastructure configuration.
* **osSapConfiguration**: [OsSapConfiguration](#ossapconfiguration): The OS and SAP configuration.
* **softwareConfiguration**: [SoftwareConfiguration](#softwareconfiguration): The software configuration.

### DiscoveryConfiguration
#### Properties
* **appLocation**: string (ReadOnly): The geo-location where the SAP system exists.
* **centralServerVmId**: string: The virtual machine ID of the Central Server.
* **configurationType**: 'Discovery' (Required): The configuration type. Eg: Deployment/Discovery
* **managedRgStorageAccountName**: string {minLength: 3, maxLength: 24}: The custom storage account name for the storage account created by the service in the managed resource group created as part of VIS deployment.<br><br>Refer to the storage account naming rules [here](https://learn.microsoft.com/azure/azure-resource-manager/management/resource-name-rules#microsoftstorage).<br><br>If not provided, the service will create the storage account with a random name.


## SAPDatabaseProperties
### Properties
* **databaseSid**: string (ReadOnly): Database SID name.
* **databaseType**: string (ReadOnly): Database type, that is if the DB is HANA, DB2, Oracle, SAP ASE, Max DB or MS SQL Server.
* **errors**: [SAPVirtualInstanceError](#sapvirtualinstanceerror) (ReadOnly): Defines the errors related to Database resource.
* **ipAddress**: string (ReadOnly): Database IP Address.
* **loadBalancerDetails**: [LoadBalancerDetails](#loadbalancerdetails) (ReadOnly): The Load Balancer details such as LoadBalancer ID attached to Database Virtual Machines
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Defines the provisioning states.
* **status**: 'Offline' | 'PartiallyRunning' | 'Running' | 'SoftShutdown' | 'Starting' | 'Stopping' | 'Unavailable' | string (ReadOnly): Defines the SAP Instance status.
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
* **managedResourcesNetworkAccessType**: 'Private' | 'Public' | string: Specifies the network access configuration for the resources that will be deployed in the Managed Resource Group. The options to choose from are Public and Private. If 'Private' is chosen, the Storage Account service tag should be enabled on the subnets in which the SAP VMs exist. This is required for establishing connectivity between VM extensions and the managed resource group storage account. This setting is currently applicable only to Storage Account. Learn more here https://go.microsoft.com/fwlink/?linkid=2247228
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Defines the provisioning states.
* **sapProduct**: 'ECC' | 'Other' | 'S4HANA' | string (Required): Defines the SAP Product type.
* **state**: 'ACSSInstallationBlocked' | 'DiscoveryFailed' | 'DiscoveryInProgress' | 'DiscoveryPending' | 'InfrastructureDeploymentFailed' | 'InfrastructureDeploymentInProgress' | 'InfrastructureDeploymentPending' | 'RegistrationComplete' | 'SoftwareDetectionFailed' | 'SoftwareDetectionInProgress' | 'SoftwareInstallationFailed' | 'SoftwareInstallationInProgress' | 'SoftwareInstallationPending' | string (ReadOnly): Defines the Virtual Instance for SAP state.
* **status**: 'Offline' | 'PartiallyRunning' | 'Running' | 'SoftShutdown' | 'Starting' | 'Stopping' | 'Unavailable' | string (ReadOnly): Defines the SAP Instance status.

## SharedStorageResourceNames
### Properties
* **sharedStorageAccountName**: string: The full name of the shared storage account. If it is not provided, it will be defaulted to {SID}nfs{guid of 15 chars}.
* **sharedStorageAccountPrivateEndPointName**: string: The full name of private end point for the shared storage account. If it is not provided, it will be defaulted to {storageAccountName}_pe

## SingleServerCustomResourceNames
* **Discriminator**: namingPatternType

### Base Properties

### SingleServerFullResourceNames
#### Properties
* **namingPatternType**: 'FullResourceName' (Required): The naming pattern type.
* **virtualMachine**: [VirtualMachineResourceNames](#virtualmachineresourcenames): The resource names object for virtual machine and related resources.


## SoftwareConfiguration
* **Discriminator**: softwareInstallationType

### Base Properties

### ExternalInstallationSoftwareConfiguration
#### Properties
* **centralServerVmId**: string: The resource ID of the virtual machine containing the central server instance.
* **softwareInstallationType**: 'External' (Required): The SAP software installation type.

### SAPInstallWithoutOSConfigSoftwareConfiguration
#### Properties
* **bomUrl**: string (Required): The URL to the SAP Build of Materials(BOM) file.
* **highAvailabilitySoftwareConfiguration**: [HighAvailabilitySoftwareConfiguration](#highavailabilitysoftwareconfiguration): Gets or sets the HA software configuration.
* **sapBitsStorageAccountId**: string (Required): The SAP bits storage account id.
* **softwareInstallationType**: 'SAPInstallWithoutOSConfig' (Required): The SAP software installation type.
* **softwareVersion**: string (Required): The software version to install.

### ServiceInitiatedSoftwareConfiguration
#### Properties
* **bomUrl**: string (Required): The URL to the SAP Build of Materials(BOM) file.
* **highAvailabilitySoftwareConfiguration**: [HighAvailabilitySoftwareConfiguration](#highavailabilitysoftwareconfiguration): Gets or sets the HA software configuration.
* **sapBitsStorageAccountId**: string (Required): The SAP bits storage account id.
* **sapFqdn**: string (Required): The FQDN to set for the SAP system during install.
* **softwareInstallationType**: 'ServiceInitiated' (Required): The SAP software installation type.
* **softwareVersion**: string (Required): The software version to install.
* **sshPrivateKey**: string {sensitive} (Required): The SSH private key.


## SshConfiguration
### Properties
* **publicKeys**: [SshPublicKey](#sshpublickey)[]: The list of SSH public keys used to authenticate with linux based VMs.

## SshKeyPair
### Properties
* **privateKey**: string {sensitive}: SSH private key.
* **publicKey**: string: SSH public key

## SshPublicKey
### Properties
* **keyData**: string: SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure](https://docs.microsoft.com/azure/virtual-machines/linux/create-ssh-keys-detailed).

## StorageConfiguration
### Properties
* **transportFileShareConfiguration**: [FileShareConfiguration](#fileshareconfiguration): The properties of the transport directory attached to the VIS. The default for transportFileShareConfiguration is the createAndMount flow if storage configuration is missing.

## StorageInformation
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the storage account.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## ThreeTierCustomResourceNames
* **Discriminator**: namingPatternType

### Base Properties

### ThreeTierFullResourceNames
#### Properties
* **applicationServer**: [ApplicationServerFullResourceNames](#applicationserverfullresourcenames): The full resource names object for application layer resources. The number of entries in this list should be equal to the number VMs to be created for application layer.
* **centralServer**: [CentralServerFullResourceNames](#centralserverfullresourcenames): The full resource names object for central server layer resources.
* **databaseServer**: [DatabaseServerFullResourceNames](#databaseserverfullresourcenames): The full resource names object for database layer resources. The number of entries in this list should be equal to the number VMs to be created for database layer.
* **namingPatternType**: 'FullResourceName' (Required): The pattern type to be used for resource naming.
* **sharedStorage**: [SharedStorageResourceNames](#sharedstorageresourcenames): The resource names object for shared storage.


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

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## VirtualMachineConfiguration
### Properties
* **imageReference**: [ImageReference](#imagereference) (Required): The image reference.
* **osProfile**: [OSProfile](#osprofile) (Required): The OS profile.
* **vmSize**: string (Required): The virtual machine size.

## VirtualMachineResourceNames
### Properties
* **dataDiskNames**: [VirtualMachineResourceNamesDataDiskNames](#virtualmachineresourcenamesdatadisknames): The full resource names for virtual machine data disks. This is a dictionary containing list of names of data disks per volume. Currently supported volumes for database layer are ['hana/data', 'hana/log', hana/shared', 'usr/sap', 'os', 'backup']. For application and cs layers, only 'default' volume is supported
* **hostName**: string: The full name for virtual-machine's host (computer name). Currently, ACSS only supports host names which are less than or equal to 13 characters long. If this value is not provided, vmName will be used as host name.
* **networkInterfaces**: [NetworkInterfaceResourceNames](#networkinterfaceresourcenames)[]: The list of network interface name objects for the selected virtual machine. Currently, only one network interface is supported per virtual machine.
* **osDiskName**: string: The full name for OS disk attached to the VM. If this value is not provided, it will be named by ARM as per its default naming standards (prefixed with vm name). There is only one OS disk attached per Virtual Machine.
* **vmName**: string: The full name for virtual machine. The length of this field can be upto 64 characters. If name is not provided, service uses a default name based on the deployment type. For SingleServer, default name is {SID}vm. In case of HA-AvZone systems, default name will be {SID}{app/ascs/db}z{a/b}vm with an incrementor at the end in case of more than 1 vm per layer. For distributed and HA-AvSet systems, default name will be {SID}{app/ascs/db}vm with an incrementor at the end in case of more than 1 vm per layer.

## VirtualMachineResourceNamesDataDiskNames
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

