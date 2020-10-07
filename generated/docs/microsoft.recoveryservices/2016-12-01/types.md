# Microsoft.RecoveryServices @ 2016-12-01

## Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProtectionContainer
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers' (ReadOnly, DeployTimeConstant)

## ProtectionContainer
* **Discriminator**: containerType
### Base Properties
* **backupManagementType**: 'AzureBackupServer' | 'AzureIaasVM' | 'AzureSql' | 'AzureStorage' | 'AzureWorkload' | 'DPM' | 'DefaultBackup' | 'Invalid' | 'MAB'
* **friendlyName**: string
* **healthStatus**: string
* **registrationStatus**: string
### AzureSqlContainer
#### Properties
* **containerType**: 'AzureSqlContainer' (Required)

### AzureWorkloadContainer
#### Properties
* **containerType**: 'AzureWorkloadContainer' (Required)
* **extendedInfo**: AzureWorkloadContainerExtendedInfo
* **lastUpdatedTime**: string
* **operationType**: 'Invalid' | 'Register' | 'Reregister'
* **sourceResourceId**: string
* **workloadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'SQLDB' | 'SQLDataBase' | 'Sharepoint' | 'SystemState' | 'VM' | 'VMwareVM'

### DPMContainer
#### Properties
* **canReRegister**: bool
* **containerId**: string
* **containerType**: 'DPMContainer' (Required)
* **dpmAgentVersion**: string
* **dpmServers**: string[]
* **extendedInfo**: DPMContainerExtendedInfo
* **protectedItemCount**: int
* **protectionStatus**: string
* **upgradeAvailable**: bool

### GenericContainer
#### Properties
* **containerType**: 'GenericContainer' (Required)
* **extendedInformation**: GenericContainerExtendedInfo
* **fabricName**: string

### IaaSVMContainer
#### Properties
* **containerType**: 'IaaSVMContainer' (Required)
* **resourceGroup**: string
* **virtualMachineId**: string
* **virtualMachineVersion**: string

### StorageContainer
#### Properties
* **containerType**: 'StorageContainer' (Required)
* **protectedItemCount**: int
* **resourceGroup**: string
* **sourceResourceId**: string
* **storageAccountVersion**: string

### Windows
#### Properties
* **agentVersion**: string
* **canReRegister**: bool
* **containerHealthState**: string
* **containerId**: int
* **containerType**: 'Windows' (Required)
* **extendedInfo**: MabContainerExtendedInfo
* **mabContainerHealthDetails**: MABContainerHealthDetails[]
* **protectedItemCount**: int


## AzureSqlContainer
### Properties
* **containerType**: 'AzureSqlContainer' (Required)

## AzureWorkloadContainer
### Properties
* **containerType**: 'AzureWorkloadContainer' (Required)
* **extendedInfo**: AzureWorkloadContainerExtendedInfo
* **lastUpdatedTime**: string
* **operationType**: 'Invalid' | 'Register' | 'Reregister'
* **sourceResourceId**: string
* **workloadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'SQLDB' | 'SQLDataBase' | 'Sharepoint' | 'SystemState' | 'VM' | 'VMwareVM'

## AzureWorkloadContainerExtendedInfo
### Properties
* **hostServerName**: string
* **inquiryInfo**: InquiryInfo
* **nodesList**: DistributedNodesInfo[]

## InquiryInfo
### Properties
* **errorDetail**: ErrorDetail
* **inquiryDetails**: WorkloadInquiryDetails[]
* **status**: string

## ErrorDetail
### Properties
* **code**: string (ReadOnly)
* **message**: string (ReadOnly)
* **recommendations**: string[] (ReadOnly)

## WorkloadInquiryDetails
### Properties
* **inquiryValidation**: InquiryValidation
* **itemCount**: int
* **type**: string

## InquiryValidation
### Properties
* **additionalDetail**: string (ReadOnly)
* **errorDetail**: ErrorDetail
* **status**: string

## DistributedNodesInfo
### Properties
* **errorDetail**: ErrorDetail
* **nodeName**: string
* **status**: string

## DPMContainer
### Properties
* **canReRegister**: bool
* **containerId**: string
* **containerType**: 'DPMContainer' (Required)
* **dpmAgentVersion**: string
* **dpmServers**: string[]
* **extendedInfo**: DPMContainerExtendedInfo
* **protectedItemCount**: int
* **protectionStatus**: string
* **upgradeAvailable**: bool

## DPMContainerExtendedInfo
### Properties
* **lastRefreshedAt**: string

## GenericContainer
### Properties
* **containerType**: 'GenericContainer' (Required)
* **extendedInformation**: GenericContainerExtendedInfo
* **fabricName**: string

## GenericContainerExtendedInfo
### Properties
* **containerIdentityInfo**: ContainerIdentityInfo
* **rawCertData**: string
* **serviceEndpoints**: Dictionary<string,String>

## ContainerIdentityInfo
### Properties
* **aadTenantId**: string
* **audience**: string
* **servicePrincipalClientId**: string
* **uniqueName**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## IaaSVMContainer
### Properties
* **containerType**: 'IaaSVMContainer' (Required)
* **resourceGroup**: string
* **virtualMachineId**: string
* **virtualMachineVersion**: string

## StorageContainer
### Properties
* **containerType**: 'StorageContainer' (Required)
* **protectedItemCount**: int
* **resourceGroup**: string
* **sourceResourceId**: string
* **storageAccountVersion**: string

## Windows
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
* **backupItemType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'SQLDB' | 'SQLDataBase' | 'Sharepoint' | 'SystemState' | 'VM' | 'VMwareVM'
* **backupItems**: string[]
* **lastBackupStatus**: string
* **lastRefreshedAt**: string
* **policyName**: string

## MABContainerHealthDetails
### Properties
* **code**: int
* **message**: string
* **recommendations**: string[]
* **title**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.RecoveryServices/vaults/backupstorageconfig
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: BackupResourceConfig
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.RecoveryServices/vaults/backupstorageconfig' (ReadOnly, DeployTimeConstant)

## BackupResourceConfig
### Properties
* **storageModelType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant'
* **storageType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant'
* **storageTypeState**: 'Invalid' | 'Locked' | 'Unlocked'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

