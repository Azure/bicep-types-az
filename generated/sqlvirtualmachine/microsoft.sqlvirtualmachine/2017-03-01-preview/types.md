# Microsoft.SqlVirtualMachine @ 2017-03-01-preview

## Resource Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlVirtualMachineGroupProperties](#sqlvirtualmachinegroupproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/availabilityGroupListeners@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AvailabilityGroupListenerProperties](#availabilitygrouplistenerproperties)
* **type**: 'Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/availabilityGroupListeners' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SqlVirtualMachine/sqlVirtualMachines@2017-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ResourceIdentity](#resourceidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlVirtualMachineProperties](#sqlvirtualmachineproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.SqlVirtualMachine/sqlVirtualMachines' (ReadOnly, DeployTimeConstant)

## SqlVirtualMachineGroupProperties
### Properties
* **clusterConfiguration**: 'Domainful' (ReadOnly)
* **clusterManagerType**: 'WSFC' (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **scaleType**: 'HA' (ReadOnly)
* **sqlImageOffer**: string
* **sqlImageSku**: 'Developer' | 'Enterprise'
* **wsfcDomainProfile**: [WsfcDomainProfile](#wsfcdomainprofile)

## WsfcDomainProfile
### Properties
* **clusterBootstrapAccount**: string
* **clusterOperatorAccount**: string
* **domainFqdn**: string
* **fileShareWitnessPath**: string
* **ouPath**: string
* **sqlServiceAccount**: string
* **storageAccountPrimaryKey**: string
* **storageAccountUrl**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AvailabilityGroupListenerProperties
### Properties
* **availabilityGroupName**: string
* **createDefaultAvailabilityGroupIfNotExist**: bool
* **loadBalancerConfigurations**: [LoadBalancerConfiguration](#loadbalancerconfiguration)[]
* **port**: int
* **provisioningState**: string (ReadOnly)

## LoadBalancerConfiguration
### Properties
* **loadBalancerResourceId**: string
* **privateIpAddress**: [PrivateIPAddress](#privateipaddress)
* **probePort**: int
* **publicIpAddressResourceId**: string
* **sqlVirtualMachineInstances**: string[]

## PrivateIPAddress
### Properties
* **ipAddress**: string
* **subnetResourceId**: string

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned'

## SqlVirtualMachineProperties
### Properties
* **autoBackupSettings**: [AutoBackupSettings](#autobackupsettings)
* **autoPatchingSettings**: [AutoPatchingSettings](#autopatchingsettings)
* **keyVaultCredentialSettings**: [KeyVaultCredentialSettings](#keyvaultcredentialsettings)
* **provisioningState**: string (ReadOnly)
* **serverConfigurationsManagementSettings**: [ServerConfigurationsManagementSettings](#serverconfigurationsmanagementsettings)
* **sqlImageOffer**: string
* **sqlImageSku**: 'Developer' | 'Enterprise' | 'Express' | 'Standard' | 'Web'
* **sqlManagement**: 'Full' | 'LightWeight' | 'NoAgent'
* **sqlServerLicenseType**: 'AHUB' | 'DR' | 'PAYG'
* **sqlVirtualMachineGroupResourceId**: string
* **storageConfigurationSettings**: [StorageConfigurationSettings](#storageconfigurationsettings)
* **virtualMachineResourceId**: string
* **wsfcDomainCredentials**: [WsfcDomainCredentials](#wsfcdomaincredentials)

## AutoBackupSettings
### Properties
* **backupScheduleType**: 'Automated' | 'Manual'
* **backupSystemDbs**: bool
* **enable**: bool
* **enableEncryption**: bool
* **fullBackupFrequency**: 'Daily' | 'Weekly'
* **fullBackupStartTime**: int
* **fullBackupWindowHours**: int
* **logBackupFrequency**: int
* **password**: string
* **retentionPeriod**: int
* **storageAccessKey**: string
* **storageAccountUrl**: string

## AutoPatchingSettings
### Properties
* **dayOfWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'
* **enable**: bool
* **maintenanceWindowDuration**: int
* **maintenanceWindowStartingHour**: int

## KeyVaultCredentialSettings
### Properties
* **azureKeyVaultUrl**: string
* **credentialName**: string
* **enable**: bool
* **servicePrincipalName**: string
* **servicePrincipalSecret**: string

## ServerConfigurationsManagementSettings
### Properties
* **additionalFeaturesServerConfigurations**: [AdditionalFeaturesServerConfigurations](#additionalfeaturesserverconfigurations)
* **sqlConnectivityUpdateSettings**: [SqlConnectivityUpdateSettings](#sqlconnectivityupdatesettings)
* **sqlStorageUpdateSettings**: [SqlStorageUpdateSettings](#sqlstorageupdatesettings)
* **sqlWorkloadTypeUpdateSettings**: [SqlWorkloadTypeUpdateSettings](#sqlworkloadtypeupdatesettings)

## AdditionalFeaturesServerConfigurations
### Properties
* **isRServicesEnabled**: bool

## SqlConnectivityUpdateSettings
### Properties
* **connectivityType**: 'LOCAL' | 'PRIVATE' | 'PUBLIC'
* **port**: int
* **sqlAuthUpdatePassword**: string
* **sqlAuthUpdateUserName**: string

## SqlStorageUpdateSettings
### Properties
* **diskConfigurationType**: 'ADD' | 'EXTEND' | 'NEW'
* **diskCount**: int
* **startingDeviceId**: int

## SqlWorkloadTypeUpdateSettings
### Properties
* **sqlWorkloadType**: 'DW' | 'GENERAL' | 'OLTP'

## StorageConfigurationSettings
### Properties
* **diskConfigurationType**: 'ADD' | 'EXTEND' | 'NEW'
* **sqlDataSettings**: [SQLStorageSettings](#sqlstoragesettings)
* **sqlLogSettings**: [SQLStorageSettings](#sqlstoragesettings)
* **sqlTempDbSettings**: [SQLStorageSettings](#sqlstoragesettings)
* **storageWorkloadType**: 'DW' | 'GENERAL' | 'OLTP'

## SQLStorageSettings
### Properties
* **defaultFilePath**: string
* **luns**: int[]

## WsfcDomainCredentials
### Properties
* **clusterBootstrapAccountPassword**: string
* **clusterOperatorAccountPassword**: string
* **sqlServiceAccountPassword**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

