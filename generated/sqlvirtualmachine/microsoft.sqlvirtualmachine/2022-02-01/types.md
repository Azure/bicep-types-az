# Microsoft.SqlVirtualMachine @ 2022-02-01

## Resource Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups@2022-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlVirtualMachineGroupProperties](#sqlvirtualmachinegroupproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/availabilityGroupListeners@2022-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AvailabilityGroupListenerProperties](#availabilitygrouplistenerproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/availabilityGroupListeners' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SqlVirtualMachine/sqlVirtualMachines@2022-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceIdentity](#resourceidentity): Azure Active Directory identity of the server.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlVirtualMachineProperties](#sqlvirtualmachineproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.SqlVirtualMachine/sqlVirtualMachines' (ReadOnly, DeployTimeConstant): The resource type

## AdditionalFeaturesServerConfigurations
### Properties
* **isRServicesEnabled**: bool: Enable or disable R services (SQL 2016 onwards).

## AgConfiguration
### Properties
* **replicas**: [AgReplica](#agreplica)[]: Replica configurations.

## AgReplica
### Properties
* **commit**: 'ASYNCHRONOUS_COMMIT' | 'SYNCHRONOUS_COMMIT' | string: Replica commit mode in availability group.
* **failover**: 'AUTOMATIC' | 'MANUAL' | string: Replica failover mode in availability group.
* **readableSecondary**: 'ALL' | 'NO' | 'READ_ONLY' | string: Replica readable secondary mode in availability group.
* **role**: 'PRIMARY' | 'SECONDARY' | string: Replica Role in availability group.
* **sqlVirtualMachineInstanceId**: string: Sql VirtualMachine Instance Id.

## AssessmentSettings
### Properties
* **enable**: bool: Enable or disable assessment feature on SQL virtual machine.
* **runImmediately**: bool: Run assessment immediately on SQL virtual machine.
* **schedule**: [Schedule](#schedule): Schedule for Assessment.

## AutoBackupSettings
### Properties
* **backupScheduleType**: 'Automated' | 'Manual' | string: Backup schedule type.
* **backupSystemDbs**: bool: Include or exclude system databases from auto backup.
* **daysOfWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string[]: Days of the week for the backups when FullBackupFrequency is set to Weekly.
* **enable**: bool: Enable or disable autobackup on SQL virtual machine.
* **enableEncryption**: bool: Enable or disable encryption for backup on SQL virtual machine.
* **fullBackupFrequency**: 'Daily' | 'Weekly' | string: Frequency of full backups. In both cases, full backups begin during the next scheduled time window.
* **fullBackupStartTime**: int: Start time of a given day during which full backups can take place. 0-23 hours.
* **fullBackupWindowHours**: int: Duration of the time window of a given day during which full backups can take place. 1-23 hours.
* **logBackupFrequency**: int: Frequency of log backups. 5-60 minutes.
* **password**: string (WriteOnly): Password for encryption on backup.
* **retentionPeriod**: int: Retention period of backup: 1-90 days.
* **storageAccessKey**: string (WriteOnly): Storage account key where backup will be taken to.
* **storageAccountUrl**: string: Storage account url where backup will be taken to.
* **storageContainerName**: string: Storage container name where backup will be taken to.

## AutoPatchingSettings
### Properties
* **dayOfWeek**: 'Everyday' | 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday': Day of week to apply the patch on.
* **enable**: bool: Enable or disable autopatching on SQL virtual machine.
* **maintenanceWindowDuration**: int: Duration of patching.
* **maintenanceWindowStartingHour**: int: Hour of the day when patching is initiated. Local VM time.

## AvailabilityGroupListenerProperties
### Properties
* **availabilityGroupConfiguration**: [AgConfiguration](#agconfiguration): Availability Group configuration.
* **availabilityGroupName**: string: Name of the availability group.
* **createDefaultAvailabilityGroupIfNotExist**: bool: Create a default availability group if it does not exist.
* **loadBalancerConfigurations**: [LoadBalancerConfiguration](#loadbalancerconfiguration)[]: List of load balancer configurations for an availability group listener.
* **multiSubnetIpConfigurations**: [MultiSubnetIpConfiguration](#multisubnetipconfiguration)[]: List of multi subnet IP configurations for an AG listener.
* **port**: int: Listener port.
* **provisioningState**: string (ReadOnly): Provisioning state to track the async operation status.

## KeyVaultCredentialSettings
### Properties
* **azureKeyVaultUrl**: string: Azure Key Vault url.
* **credentialName**: string: Credential name.
* **enable**: bool: Enable or disable key vault credential setting.
* **servicePrincipalName**: string: Service principal name to access key vault.
* **servicePrincipalSecret**: string (WriteOnly): Service principal name secret to access key vault.

## LoadBalancerConfiguration
### Properties
* **loadBalancerResourceId**: string: Resource id of the load balancer.
* **privateIpAddress**: [PrivateIPAddress](#privateipaddress): Private IP address.
* **probePort**: int: Probe port.
* **publicIpAddressResourceId**: string: Resource id of the public IP.
* **sqlVirtualMachineInstances**: string[]: List of the SQL virtual machine instance resource id's that are enrolled into the availability group listener.

## MultiSubnetIpConfiguration
### Properties
* **privateIpAddress**: [PrivateIPAddress](#privateipaddress) (Required): Private IP address.
* **sqlVirtualMachineInstance**: string (Required): SQL virtual machine instance resource id that are enrolled into the availability group listener.

## PrivateIPAddress
### Properties
* **ipAddress**: string: Private IP address bound to the availability group listener.
* **subnetResourceId**: string: Subnet used to include private IP.

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly): The Azure Active Directory principal id.
* **tenantId**: string (ReadOnly): The Azure Active Directory tenant id.
* **type**: 'None' | 'SystemAssigned' | string: The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.

## Schedule
### Properties
* **dayOfWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday': Day of the week to run assessment.
* **enable**: bool: Enable or disable assessment schedule on SQL virtual machine.
* **monthlyOccurrence**: int: Occurrence of the DayOfWeek day within a month to schedule assessment. Takes values: 1,2,3,4 and -1. Use -1 for last DayOfWeek day of the month
* **startTime**: string: Time of the day in HH:mm format. Eg. 17:30
* **weeklyInterval**: int: Number of weeks to schedule between 2 assessment runs. Takes value from 1-6

## ServerConfigurationsManagementSettings
### Properties
* **additionalFeaturesServerConfigurations**: [AdditionalFeaturesServerConfigurations](#additionalfeaturesserverconfigurations): Additional SQL feature settings.
* **sqlConnectivityUpdateSettings**: [SqlConnectivityUpdateSettings](#sqlconnectivityupdatesettings): SQL connectivity type settings.
* **sqlInstanceSettings**: [SQLInstanceSettings](#sqlinstancesettings): SQL Instance settings.
* **sqlStorageUpdateSettings**: [SqlStorageUpdateSettings](#sqlstorageupdatesettings): SQL storage update settings.
* **sqlWorkloadTypeUpdateSettings**: [SqlWorkloadTypeUpdateSettings](#sqlworkloadtypeupdatesettings): SQL workload type settings.

## SqlConnectivityUpdateSettings
### Properties
* **connectivityType**: 'LOCAL' | 'PRIVATE' | 'PUBLIC' | string: SQL Server connectivity option.
* **port**: int: SQL Server port.
* **sqlAuthUpdatePassword**: string (WriteOnly): SQL Server sysadmin login password.
* **sqlAuthUpdateUserName**: string (WriteOnly): SQL Server sysadmin login to create.

## SQLInstanceSettings
### Properties
* **collation**: string: SQL Server Collation.
* **isIfiEnabled**: bool: SQL Server IFI.
* **isLpimEnabled**: bool: SQL Server LPIM.
* **isOptimizeForAdHocWorkloadsEnabled**: bool: SQL Server Optimize for Adhoc workloads.
* **maxDop**: int: SQL Server MAXDOP.
* **maxServerMemoryMB**: int: SQL Server maximum memory.
* **minServerMemoryMB**: int: SQL Server minimum memory.

## SQLStorageSettings
### Properties
* **defaultFilePath**: string: SQL Server default file path
* **luns**: int[]: Logical Unit Numbers for the disks.

## SqlStorageUpdateSettings
### Properties
* **diskConfigurationType**: 'ADD' | 'EXTEND' | 'NEW' | string: Disk configuration to apply to SQL Server.
* **diskCount**: int: Virtual machine disk count.
* **startingDeviceId**: int: Device id of the first disk to be updated.

## SQLTempDbSettings
### Properties
* **dataFileCount**: int: SQL Server tempdb data file count
* **dataFileSize**: int: SQL Server tempdb data file size
* **dataGrowth**: int: SQL Server tempdb data file autoGrowth size
* **defaultFilePath**: string: SQL Server default file path
* **logFileSize**: int: SQL Server tempdb log file size
* **logGrowth**: int: SQL Server tempdb log file autoGrowth size
* **luns**: int[]: Logical Unit Numbers for the disks.
* **persistFolder**: bool: SQL Server tempdb persist folder choice
* **persistFolderPath**: string: SQL Server tempdb persist folder location

## SqlVirtualMachineGroupProperties
### Properties
* **clusterConfiguration**: 'Domainful' | string (ReadOnly): Cluster type.
* **clusterManagerType**: 'WSFC' | string (ReadOnly): Type of cluster manager: Windows Server Failover Cluster (WSFC), implied by the scale type of the group and the OS type.
* **provisioningState**: string (ReadOnly): Provisioning state to track the async operation status.
* **scaleType**: 'HA' | string (ReadOnly): Scale type.
* **sqlImageOffer**: string: SQL image offer. Examples may include SQL2016-WS2016, SQL2017-WS2016.
* **sqlImageSku**: 'Developer' | 'Enterprise' | string: SQL image sku.
* **wsfcDomainProfile**: [WsfcDomainProfile](#wsfcdomainprofile): Cluster Active Directory domain profile.

## SqlVirtualMachineProperties
### Properties
* **assessmentSettings**: [AssessmentSettings](#assessmentsettings): Assessment Settings.
* **autoBackupSettings**: [AutoBackupSettings](#autobackupsettings): Auto backup settings for SQL Server.
* **autoPatchingSettings**: [AutoPatchingSettings](#autopatchingsettings): Auto patching settings for applying critical security updates to SQL virtual machine.
* **keyVaultCredentialSettings**: [KeyVaultCredentialSettings](#keyvaultcredentialsettings): Key vault credential settings.
* **provisioningState**: string (ReadOnly): Provisioning state to track the async operation status.
* **serverConfigurationsManagementSettings**: [ServerConfigurationsManagementSettings](#serverconfigurationsmanagementsettings): SQL Server configuration management settings.
* **sqlImageOffer**: string: SQL image offer. Examples include SQL2016-WS2016, SQL2017-WS2016.
* **sqlImageSku**: 'Developer' | 'Enterprise' | 'Express' | 'Standard' | 'Web' | string: SQL Server edition type.
* **sqlManagement**: 'Full' | 'LightWeight' | 'NoAgent' | string: SQL Server Management type.
* **sqlServerLicenseType**: 'AHUB' | 'DR' | 'PAYG' | string: SQL Server license type.
* **sqlVirtualMachineGroupResourceId**: string: ARM resource id of the SQL virtual machine group this SQL virtual machine is or will be part of.
* **storageConfigurationSettings**: [StorageConfigurationSettings](#storageconfigurationsettings): Storage Configuration Settings.
* **virtualMachineResourceId**: string: ARM Resource id of underlying virtual machine created from SQL marketplace image.
* **wsfcDomainCredentials**: [WsfcDomainCredentials](#wsfcdomaincredentials): Domain credentials for setting up Windows Server Failover Cluster for SQL availability group.
* **wsfcStaticIp**: string: Domain credentials for setting up Windows Server Failover Cluster for SQL availability group.

## SqlWorkloadTypeUpdateSettings
### Properties
* **sqlWorkloadType**: 'DW' | 'GENERAL' | 'OLTP' | string: SQL Server workload type.

## StorageConfigurationSettings
### Properties
* **diskConfigurationType**: 'ADD' | 'EXTEND' | 'NEW' | string: Disk configuration to apply to SQL Server.
* **sqlDataSettings**: [SQLStorageSettings](#sqlstoragesettings): SQL Server Data Storage Settings.
* **sqlLogSettings**: [SQLStorageSettings](#sqlstoragesettings): SQL Server Log Storage Settings.
* **sqlSystemDbOnDataDisk**: bool: SQL Server SystemDb Storage on DataPool if true.
* **sqlTempDbSettings**: [SQLTempDbSettings](#sqltempdbsettings): SQL Server TempDb Storage Settings.
* **storageWorkloadType**: 'DW' | 'GENERAL' | 'OLTP' | string: Storage workload type.

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

## WsfcDomainCredentials
### Properties
* **clusterBootstrapAccountPassword**: string: Cluster bootstrap account password.
* **clusterOperatorAccountPassword**: string: Cluster operator account password.
* **sqlServiceAccountPassword**: string: SQL service account password.

## WsfcDomainProfile
### Properties
* **clusterBootstrapAccount**: string: Account name used for creating cluster (at minimum needs permissions to 'Create Computer Objects' in domain).
* **clusterOperatorAccount**: string: Account name used for operating cluster i.e. will be part of administrators group on all the participating virtual machines in the cluster.
* **clusterSubnetType**: 'MultiSubnet' | 'SingleSubnet' | string: Cluster subnet type.
* **domainFqdn**: string: Fully qualified name of the domain.
* **fileShareWitnessPath**: string: Optional path for fileshare witness.
* **ouPath**: string: Organizational Unit path in which the nodes and cluster will be present.
* **sqlServiceAccount**: string: Account name under which SQL service will run on all participating SQL virtual machines in the cluster.
* **storageAccountPrimaryKey**: string (WriteOnly): Primary key of the witness storage account.
* **storageAccountUrl**: string: Fully qualified ARM resource id of the witness storage account.

