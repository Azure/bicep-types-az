# Microsoft.SqlVirtualMachine @ 2017-03-01-preview

## Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/availabilityGroupListeners
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AvailabilityGroupListenerProperties
* **type**: 'Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/availabilityGroupListeners' (ReadOnly, DeployTimeConstant)

## AvailabilityGroupListenerProperties
### Properties
* **availabilityGroupName**: string
* **createDefaultAvailabilityGroupIfNotExist**: bool
* **loadBalancerConfigurations**: LoadBalancerConfiguration[]
* **port**: int
* **provisioningState**: string (ReadOnly)

## LoadBalancerConfiguration
### Properties
* **loadBalancerResourceId**: string
* **privateIpAddress**: PrivateIPAddress
* **probePort**: int
* **publicIpAddressResourceId**: string
* **sqlVirtualMachineInstances**: string[]

## PrivateIPAddress
### Properties
* **ipAddress**: string
* **subnetResourceId**: string

## Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SqlVirtualMachineGroupProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups' (ReadOnly, DeployTimeConstant)

## SqlVirtualMachineGroupProperties
### Properties
* **clusterConfiguration**: 'Domainful' (ReadOnly)
* **clusterManagerType**: 'WSFC' (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **scaleType**: 'HA' (ReadOnly)
* **sqlImageOffer**: string
* **sqlImageSku**: 'Developer' | 'Enterprise'
* **wsfcDomainProfile**: WsfcDomainProfile

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
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.SqlVirtualMachine/sqlVirtualMachines
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ResourceIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SqlVirtualMachineProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.SqlVirtualMachine/sqlVirtualMachines' (ReadOnly, DeployTimeConstant)

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned'

## SqlVirtualMachineProperties
### Properties
* **autoBackupSettings**: AutoBackupSettings
* **autoPatchingSettings**: AutoPatchingSettings
* **keyVaultCredentialSettings**: KeyVaultCredentialSettings
* **provisioningState**: string (ReadOnly)
* **serverConfigurationsManagementSettings**: ServerConfigurationsManagementSettings
* **sqlImageOffer**: string
* **sqlImageSku**: 'Developer' | 'Enterprise' | 'Express' | 'Standard' | 'Web'
* **sqlManagement**: 'Full' | 'LightWeight' | 'NoAgent'
* **sqlServerLicenseType**: 'AHUB' | 'DR' | 'PAYG'
* **sqlVirtualMachineGroupResourceId**: string
* **storageConfigurationSettings**: StorageConfigurationSettings
* **virtualMachineResourceId**: string
* **wsfcDomainCredentials**: WsfcDomainCredentials

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
* **additionalFeaturesServerConfigurations**: AdditionalFeaturesServerConfigurations
* **sqlConnectivityUpdateSettings**: SqlConnectivityUpdateSettings
* **sqlStorageUpdateSettings**: SqlStorageUpdateSettings
* **sqlWorkloadTypeUpdateSettings**: SqlWorkloadTypeUpdateSettings

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
* **sqlDataSettings**: SQLStorageSettings
* **sqlLogSettings**: SQLStorageSettings
* **sqlTempDbSettings**: SQLStorageSettings
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
### Additional Properties
* **Additional Properties Type**: string

