# Microsoft.SqlVirtualMachine @ 2017-03-01-preview

## Resource Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlVirtualMachineGroupProperties](#sqlvirtualmachinegroupproperties): Resource properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/availabilityGroupListeners@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AvailabilityGroupListenerProperties](#availabilitygrouplistenerproperties): Resource properties.
* **type**: 'Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/availabilityGroupListeners' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SqlVirtualMachine/sqlVirtualMachines@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceIdentity](#resourceidentity): Azure Active Directory identity of the server.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlVirtualMachineProperties](#sqlvirtualmachineproperties): Resource properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.SqlVirtualMachine/sqlVirtualMachines' (ReadOnly, DeployTimeConstant): The resource type

## AdditionalFeaturesServerConfigurations
### Properties
* **isRServicesEnabled**: bool: Enable or disable R services (SQL 2016 onwards).

## AutoBackupSettings
### Properties
* **backupScheduleType**: 'Automated' | 'Manual' | string: Backup schedule type.
* **backupSystemDbs**: bool: Include or exclude system databases from auto backup.
* **enable**: bool: Enable or disable autobackup on SQL virtual machine.
* **enableEncryption**: bool: Enable or disable encryption for backup on SQL virtual machine.
* **fullBackupFrequency**: 'Daily' | 'Weekly' | string: Frequency of full backups. In both cases, full backups begin during the next scheduled time window.
* **fullBackupStartTime**: int: Start time of a given day during which full backups can take place. 0-23 hours.
* **fullBackupWindowHours**: int: Duration of the time window of a given day during which full backups can take place. 1-23 hours.
* **logBackupFrequency**: int: Frequency of log backups. 5-60 minutes.
* **password**: string (WriteOnly): Password for encryption on backup.
* **retentionPeriod**: int: Retention period of backup: 1-30 days.
* **storageAccessKey**: string (WriteOnly): Storage account key where backup will be taken to.
* **storageAccountUrl**: string: Storage account url where backup will be taken to.

## AutoPatchingSettings
### Properties
* **dayOfWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday': Day of week to apply the patch on.
* **enable**: bool: Enable or disable autopatching on SQL virtual machine.
* **maintenanceWindowDuration**: int: Duration of patching.
* **maintenanceWindowStartingHour**: int: Hour of the day when patching is initiated. Local VM time.

## AvailabilityGroupListenerProperties
### Properties
* **availabilityGroupName**: string: Name of the availability group.
* **createDefaultAvailabilityGroupIfNotExist**: bool: Create a default availability group if it does not exist.
* **loadBalancerConfigurations**: [LoadBalancerConfiguration](#loadbalancerconfiguration)[]: List of load balancer configurations for an availability group listener.
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

## PrivateIPAddress
### Properties
* **ipAddress**: string: Private IP address bound to the availability group listener.
* **subnetResourceId**: string: Subnet used to include private IP.

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly): The Azure Active Directory principal id.
* **tenantId**: string (ReadOnly): The Azure Active Directory tenant id.
* **type**: 'SystemAssigned' | string: The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.

## ServerConfigurationsManagementSettings
### Properties
* **additionalFeaturesServerConfigurations**: [AdditionalFeaturesServerConfigurations](#additionalfeaturesserverconfigurations): Additional SQL feature settings.
* **sqlConnectivityUpdateSettings**: [SqlConnectivityUpdateSettings](#sqlconnectivityupdatesettings): SQL connectivity type settings.
* **sqlStorageUpdateSettings**: [SqlStorageUpdateSettings](#sqlstorageupdatesettings): SQL storage update settings.
* **sqlWorkloadTypeUpdateSettings**: [SqlWorkloadTypeUpdateSettings](#sqlworkloadtypeupdatesettings): SQL workload type settings.

## SqlConnectivityUpdateSettings
### Properties
* **connectivityType**: 'LOCAL' | 'PRIVATE' | 'PUBLIC' | string: SQL Server connectivity option.
* **port**: int: SQL Server port.
* **sqlAuthUpdatePassword**: string (WriteOnly): SQL Server sysadmin login password.
* **sqlAuthUpdateUserName**: string (WriteOnly): SQL Server sysadmin login to create.

## SQLStorageSettings
### Properties
* **defaultFilePath**: string: SQL Server default file path
* **luns**: int[]: Logical Unit Numbers for the disks.

## SqlStorageUpdateSettings
### Properties
* **diskConfigurationType**: 'ADD' | 'EXTEND' | 'NEW' | string: Disk configuration to apply to SQL Server.
* **diskCount**: int: Virtual machine disk count.
* **startingDeviceId**: int: Device id of the first disk to be updated.

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

## SqlWorkloadTypeUpdateSettings
### Properties
* **sqlWorkloadType**: 'DW' | 'GENERAL' | 'OLTP' | string: SQL Server workload type.

## StorageConfigurationSettings
### Properties
* **diskConfigurationType**: 'ADD' | 'EXTEND' | 'NEW' | string: Disk configuration to apply to SQL Server.
* **sqlDataSettings**: [SQLStorageSettings](#sqlstoragesettings): SQL Server Data Storage Settings.
* **sqlLogSettings**: [SQLStorageSettings](#sqlstoragesettings): SQL Server Log Storage Settings.
* **sqlTempDbSettings**: [SQLStorageSettings](#sqlstoragesettings): SQL Server TempDb Storage Settings.
* **storageWorkloadType**: 'DW' | 'GENERAL' | 'OLTP' | string: Storage workload type.

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
* **domainFqdn**: string: Fully qualified name of the domain.
* **fileShareWitnessPath**: string: Optional path for fileshare witness.
* **ouPath**: string: Organizational Unit path in which the nodes and cluster will be present.
* **sqlServiceAccount**: string: Account name under which SQL service will run on all participating SQL virtual machines in the cluster.
* **storageAccountPrimaryKey**: string (WriteOnly): Primary key of the witness storage account.
* **storageAccountUrl**: string: Fully qualified ARM resource id of the witness storage account.

