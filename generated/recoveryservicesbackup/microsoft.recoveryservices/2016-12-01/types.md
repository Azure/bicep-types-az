# Microsoft.RecoveryServices @ 2016-12-01

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProtectionContainer
* **tags**: ResourceTags
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/backupstorageconfig@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: BackupResourceConfig
* **tags**: ResourceTags
* **type**: 'Microsoft.RecoveryServices/vaults/backupstorageconfig' (ReadOnly, DeployTimeConstant)

## ProtectionContainer
* **Discriminator**: containerType

### Base Properties
* **backupManagementType**: 'AzureBackupServer' | 'AzureIaasVM' | 'AzureSql' | 'AzureStorage' | 'AzureWorkload' | 'DPM' | 'DefaultBackup' | 'Invalid' | 'MAB'
* **friendlyName**: string
* **healthStatus**: string
* **registrationStatus**: string
### AzureBackupServerContainer
#### Properties
* **containerType**: 'AzureBackupServerContainer' (Required)

### AzureSqlContainer
#### Properties
* **containerType**: 'AzureSqlContainer' (Required)

### GenericContainer
#### Properties
* **containerType**: 'GenericContainer' (Required)
* **extendedInformation**: GenericContainerExtendedInfo
* **fabricName**: string

### AzureIaaSClassicComputeVMContainer
#### Properties
* **containerType**: 'Microsoft.ClassicCompute/virtualMachines' (Required)

### AzureIaaSComputeVMContainer
#### Properties
* **containerType**: 'Microsoft.Compute/virtualMachines' (Required)

### AzureSqlagWorkloadContainerProtectionContainer
#### Properties
* **containerType**: 'SQLAGWorkLoadContainer' (Required)

### AzureStorageContainer
#### Properties
* **containerType**: 'StorageContainer' (Required)
* **protectedItemCount**: int
* **resourceGroup**: string
* **sourceResourceId**: string
* **storageAccountVersion**: string

### AzureVMAppContainerProtectionContainer
#### Properties
* **containerType**: 'VMAppContainer' (Required)

### MabContainer
#### Properties
* **agentVersion**: string
* **canReRegister**: bool
* **containerHealthState**: string
* **containerId**: int
* **containerType**: 'Windows' (Required)
* **extendedInfo**: MabContainerExtendedInfo
* **mabContainerHealthDetails**: MABContainerHealthDetails[]
* **protectedItemCount**: int


## AzureBackupServerContainer
### Properties
* **containerType**: 'AzureBackupServerContainer' (Required)

## AzureSqlContainer
### Properties
* **containerType**: 'AzureSqlContainer' (Required)

## GenericContainer
### Properties
* **containerType**: 'GenericContainer' (Required)
* **extendedInformation**: GenericContainerExtendedInfo
* **fabricName**: string

## GenericContainerExtendedInfo
### Properties
* **containerIdentityInfo**: ContainerIdentityInfo
* **rawCertData**: string
* **serviceEndpoints**: GenericContainerExtendedInfoServiceEndpoints

## ContainerIdentityInfo
### Properties
* **aadTenantId**: string
* **audience**: string
* **servicePrincipalClientId**: string
* **uniqueName**: string

## GenericContainerExtendedInfoServiceEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AzureIaaSClassicComputeVMContainer
### Properties
* **containerType**: 'Microsoft.ClassicCompute/virtualMachines' (Required)

## AzureIaaSComputeVMContainer
### Properties
* **containerType**: 'Microsoft.Compute/virtualMachines' (Required)

## AzureSqlagWorkloadContainerProtectionContainer
### Properties
* **containerType**: 'SQLAGWorkLoadContainer' (Required)

## AzureStorageContainer
### Properties
* **containerType**: 'StorageContainer' (Required)
* **protectedItemCount**: int
* **resourceGroup**: string
* **sourceResourceId**: string
* **storageAccountVersion**: string

## AzureVMAppContainerProtectionContainer
### Properties
* **containerType**: 'VMAppContainer' (Required)

## MabContainer
### Properties
* **agentVersion**: string
* **canReRegister**: bool
* **containerHealthState**: string
* **containerId**: int
* **containerType**: 'Windows' (Required)
* **extendedInfo**: MabContainerExtendedInfo
* **mabContainerHealthDetails**: MABContainerHealthDetails[]
* **protectedItemCount**: int

## MabContainerExtendedInfo
### Properties
* **backupItems**: string[]
* **backupItemType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'SQLDB' | 'SQLDataBase' | 'Sharepoint' | 'SystemState' | 'VM' | 'VMwareVM'
* **lastBackupStatus**: string
* **lastRefreshedAt**: string
* **policyName**: string

## MABContainerHealthDetails
### Properties
* **code**: int
* **message**: string
* **recommendations**: string[]
* **title**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BackupResourceConfig
### Properties
* **storageModelType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant'
* **storageType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant'
* **storageTypeState**: 'Invalid' | 'Locked' | 'Unlocked'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

