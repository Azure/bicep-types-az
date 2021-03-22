# Microsoft.RecoveryServices @ 2021-01-01

## Resource Microsoft.RecoveryServices/vaults/backupconfig@2021-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: 'vaultconfig' (Required, DeployTimeConstant)
* **properties**: [BackupResourceVaultConfig](#backupresourcevaultconfig)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.RecoveryServices/vaults/backupconfig' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/backupEncryptionConfigs@2021-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: 'backupResourceEncryptionConfig' (Required, DeployTimeConstant)
* **properties**: [BackupResourceEncryptionConfig](#backupresourceencryptionconfig)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.RecoveryServices/vaults/backupEncryptionConfigs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers@2021-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProtectionContainer](#protectioncontainer)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems@2021-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProtectedItem](#protecteditem)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/backupPolicies@2021-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProtectionPolicy](#protectionpolicy)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.RecoveryServices/vaults/backupPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/privateEndpointConnections@2021-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnection](#privateendpointconnection)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.RecoveryServices/vaults/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## BackupResourceVaultConfig
### Properties
* **enhancedSecurityState**: 'Disabled' | 'Enabled' | 'Invalid'
* **softDeleteFeatureState**: 'Disabled' | 'Enabled' | 'Invalid'
* **storageModelType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant' | 'ReadAccessGeoZoneRedundant' | 'ZoneRedundant'
* **storageType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant' | 'ReadAccessGeoZoneRedundant' | 'ZoneRedundant'
* **storageTypeState**: 'Invalid' | 'Locked' | 'Unlocked'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BackupResourceEncryptionConfig
### Properties
* **encryptionAtRestType**: 'CustomerManaged' | 'Invalid' | 'MicrosoftManaged'
* **infrastructureEncryptionState**: 'Disabled' | 'Enabled' | 'Invalid'
* **keyUri**: string
* **lastUpdateStatus**: 'Failed' | 'Invalid' | 'NotEnabled' | 'PartiallyFailed' | 'PartiallySucceeded' | 'Succeeded'
* **subscriptionId**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProtectionContainer
* **Discriminator**: containerType
### Base Properties
* **backupManagementType**: 'AzureBackupServer' | 'AzureIaasVM' | 'AzureSql' | 'AzureStorage' | 'AzureWorkload' | 'DefaultBackup' | 'DPM' | 'Invalid' | 'MAB'
* **friendlyName**: string
* **healthStatus**: string
* **registrationStatus**: string
### AzureSqlContainer
#### Properties
* **containerType**: 'AzureSqlContainer' (Required)

### AzureWorkloadContainer
#### Properties
* **containerType**: 'AzureWorkloadContainer' (Required)
* **extendedInfo**: [AzureWorkloadContainerExtendedInfo](#azureworkloadcontainerextendedinfo)
* **lastUpdatedTime**: string
* **operationType**: 'Invalid' | 'Register' | 'Reregister'
* **sourceResourceId**: string
* **workloadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'Sharepoint' | 'SQLDataBase' | 'SQLDB' | 'SystemState' | 'VM' | 'VMwareVM'

### DPMContainer
#### Properties
* **canReRegister**: bool
* **containerId**: string
* **containerType**: 'DPMContainer' (Required)
* **dpmAgentVersion**: string
* **dpmServers**: string[]
* **extendedInfo**: [DPMContainerExtendedInfo](#dpmcontainerextendedinfo)
* **protectedItemCount**: int
* **protectionStatus**: string
* **upgradeAvailable**: bool

### GenericContainer
#### Properties
* **containerType**: 'GenericContainer' (Required)
* **extendedInformation**: [GenericContainerExtendedInfo](#genericcontainerextendedinfo)
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
* **extendedInfo**: [MabContainerExtendedInfo](#mabcontainerextendedinfo)
* **mabContainerHealthDetails**: [MABContainerHealthDetails](#mabcontainerhealthdetails)[]
* **protectedItemCount**: int


## AzureSqlContainer
### Properties
* **containerType**: 'AzureSqlContainer' (Required)

## AzureWorkloadContainer
### Properties
* **containerType**: 'AzureWorkloadContainer' (Required)
* **extendedInfo**: [AzureWorkloadContainerExtendedInfo](#azureworkloadcontainerextendedinfo)
* **lastUpdatedTime**: string
* **operationType**: 'Invalid' | 'Register' | 'Reregister'
* **sourceResourceId**: string
* **workloadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'Sharepoint' | 'SQLDataBase' | 'SQLDB' | 'SystemState' | 'VM' | 'VMwareVM'

## AzureWorkloadContainerExtendedInfo
### Properties
* **hostServerName**: string
* **inquiryInfo**: [InquiryInfo](#inquiryinfo)
* **nodesList**: [DistributedNodesInfo](#distributednodesinfo)[]

## InquiryInfo
### Properties
* **errorDetail**: [ErrorDetail](#errordetail)
* **inquiryDetails**: [WorkloadInquiryDetails](#workloadinquirydetails)[]
* **status**: string

## ErrorDetail
### Properties
* **code**: string (ReadOnly)
* **message**: string (ReadOnly)
* **recommendations**: string[] (ReadOnly)

## WorkloadInquiryDetails
### Properties
* **inquiryValidation**: [InquiryValidation](#inquiryvalidation)
* **itemCount**: int
* **type**: string

## InquiryValidation
### Properties
* **additionalDetail**: string (ReadOnly)
* **errorDetail**: [ErrorDetail](#errordetail)
* **status**: string

## DistributedNodesInfo
### Properties
* **errorDetail**: [ErrorDetail](#errordetail)
* **nodeName**: string
* **status**: string

## DPMContainer
### Properties
* **canReRegister**: bool
* **containerId**: string
* **containerType**: 'DPMContainer' (Required)
* **dpmAgentVersion**: string
* **dpmServers**: string[]
* **extendedInfo**: [DPMContainerExtendedInfo](#dpmcontainerextendedinfo)
* **protectedItemCount**: int
* **protectionStatus**: string
* **upgradeAvailable**: bool

## DPMContainerExtendedInfo
### Properties
* **lastRefreshedAt**: string

## GenericContainer
### Properties
* **containerType**: 'GenericContainer' (Required)
* **extendedInformation**: [GenericContainerExtendedInfo](#genericcontainerextendedinfo)
* **fabricName**: string

## GenericContainerExtendedInfo
### Properties
* **containerIdentityInfo**: [ContainerIdentityInfo](#containeridentityinfo)
* **rawCertData**: string
* **serviceEndpoints**: [Dictionary<string,String>](#dictionarystringstring)

## ContainerIdentityInfo
### Properties
* **aadTenantId**: string
* **audience**: string
* **servicePrincipalClientId**: string
* **uniqueName**: string

## Dictionary<string,String>
### Properties
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
* **extendedInfo**: [MabContainerExtendedInfo](#mabcontainerextendedinfo)
* **mabContainerHealthDetails**: [MABContainerHealthDetails](#mabcontainerhealthdetails)[]
* **protectedItemCount**: int

## MabContainerExtendedInfo
### Properties
* **backupItems**: string[]
* **backupItemType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'Sharepoint' | 'SQLDataBase' | 'SQLDB' | 'SystemState' | 'VM' | 'VMwareVM'
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
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProtectedItem
* **Discriminator**: protectedItemType
### Base Properties
* **backupManagementType**: 'AzureBackupServer' | 'AzureIaasVM' | 'AzureSql' | 'AzureStorage' | 'AzureWorkload' | 'DefaultBackup' | 'DPM' | 'Invalid' | 'MAB'
* **backupSetName**: string
* **containerName**: string
* **createMode**: 'Default' | 'Invalid' | 'Recover'
* **deferredDeleteTimeInUTC**: string
* **deferredDeleteTimeRemaining**: string
* **isDeferredDeleteScheduleUpcoming**: bool
* **isRehydrate**: bool
* **isScheduledForDeferredDelete**: bool
* **lastRecoveryPoint**: string
* **policyId**: string
* **sourceResourceId**: string
* **workloadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'Sharepoint' | 'SQLDataBase' | 'SQLDB' | 'SystemState' | 'VM' | 'VMwareVM'
### AzureFileShareProtectedItem
#### Properties
* **extendedInfo**: [AzureFileshareProtectedItemExtendedInfo](#azurefileshareprotecteditemextendedinfo)
* **friendlyName**: string
* **kpisHealths**: [Dictionary<string,KPIResourceHealthDetails>](#dictionarystringkpiresourcehealthdetails)
* **lastBackupStatus**: string
* **lastBackupTime**: string
* **protectedItemType**: 'AzureFileShareProtectedItem' (Required)
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'
* **protectionStatus**: string

### AzureIaaSVMProtectedItem
#### Properties
* **extendedInfo**: [AzureIaaSVMProtectedItemExtendedInfo](#azureiaasvmprotecteditemextendedinfo)
* **extendedProperties**: [ExtendedProperties](#extendedproperties)
* **friendlyName**: string
* **healthDetails**: [AzureIaaSVMHealthDetails](#azureiaasvmhealthdetails)[]
* **healthStatus**: 'ActionRequired' | 'ActionSuggested' | 'Invalid' | 'Passed'
* **kpisHealths**: [Dictionary<string,KPIResourceHealthDetails>](#dictionarystringkpiresourcehealthdetails)
* **lastBackupStatus**: string
* **lastBackupTime**: string
* **protectedItemDataId**: string
* **protectedItemType**: 'AzureIaaSVMProtectedItem' (Required)
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'
* **protectionStatus**: string
* **virtualMachineId**: string

### AzureVmWorkloadProtectedItem
#### Properties
* **extendedInfo**: [AzureVmWorkloadProtectedItemExtendedInfo](#azurevmworkloadprotecteditemextendedinfo)
* **friendlyName**: string
* **kpisHealths**: [Dictionary<string,KPIResourceHealthDetails>](#dictionarystringkpiresourcehealthdetails)
* **lastBackupErrorDetail**: [ErrorDetail](#errordetail)
* **lastBackupStatus**: 'Healthy' | 'Invalid' | 'IRPending' | 'Unhealthy'
* **lastBackupTime**: string
* **parentName**: string
* **parentType**: string
* **protectedItemDataSourceId**: string
* **protectedItemHealthStatus**: 'Healthy' | 'Invalid' | 'IRPending' | 'NotReachable' | 'Unhealthy'
* **protectedItemType**: 'AzureVmWorkloadProtectedItem' (Required)
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'
* **protectionStatus**: string
* **serverName**: string

### DPMProtectedItem
#### Properties
* **backupEngineName**: string
* **extendedInfo**: [DPMProtectedItemExtendedInfo](#dpmprotecteditemextendedinfo)
* **friendlyName**: string
* **protectedItemType**: 'DPMProtectedItem' (Required)
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'

### GenericProtectedItem
#### Properties
* **fabricName**: string
* **friendlyName**: string
* **policyState**: string
* **protectedItemId**: int
* **protectedItemType**: 'GenericProtectedItem' (Required)
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'
* **sourceAssociations**: [Dictionary<string,String>](#dictionarystringstring)

### MabFileFolderProtectedItem
#### Properties
* **computerName**: string
* **deferredDeleteSyncTimeInUTC**: int
* **extendedInfo**: [MabFileFolderProtectedItemExtendedInfo](#mabfilefolderprotecteditemextendedinfo)
* **friendlyName**: string
* **lastBackupStatus**: string
* **lastBackupTime**: string
* **protectedItemType**: 'MabFileFolderProtectedItem' (Required)
* **protectionState**: string

### Microsoft.Sql/servers/databases
#### Properties
* **extendedInfo**: [AzureSqlProtectedItemExtendedInfo](#azuresqlprotecteditemextendedinfo)
* **protectedItemDataId**: string
* **protectedItemType**: 'Microsoft.Sql/servers/databases' (Required)
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'


## AzureFileShareProtectedItem
### Properties
* **extendedInfo**: [AzureFileshareProtectedItemExtendedInfo](#azurefileshareprotecteditemextendedinfo)
* **friendlyName**: string
* **kpisHealths**: [Dictionary<string,KPIResourceHealthDetails>](#dictionarystringkpiresourcehealthdetails)
* **lastBackupStatus**: string
* **lastBackupTime**: string
* **protectedItemType**: 'AzureFileShareProtectedItem' (Required)
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'
* **protectionStatus**: string

## AzureFileshareProtectedItemExtendedInfo
### Properties
* **oldestRecoveryPoint**: string
* **policyState**: string
* **recoveryPointCount**: int
* **resourceState**: string (ReadOnly)
* **resourceStateSyncTime**: string (ReadOnly)

## Dictionary<string,KPIResourceHealthDetails>
### Properties
### Additional Properties
* **Additional Properties Type**: [KPIResourceHealthDetails](#kpiresourcehealthdetails)

## KPIResourceHealthDetails
### Properties
* **resourceHealthDetails**: [ResourceHealthDetails](#resourcehealthdetails)[]
* **resourceHealthStatus**: 'Healthy' | 'Invalid' | 'PersistentDegraded' | 'PersistentUnhealthy' | 'TransientDegraded' | 'TransientUnhealthy'

## ResourceHealthDetails
### Properties
* **code**: int (ReadOnly)
* **message**: string (ReadOnly)
* **recommendations**: string[] (ReadOnly)
* **title**: string (ReadOnly)

## AzureIaaSVMProtectedItem
### Properties
* **extendedInfo**: [AzureIaaSVMProtectedItemExtendedInfo](#azureiaasvmprotecteditemextendedinfo)
* **extendedProperties**: [ExtendedProperties](#extendedproperties)
* **friendlyName**: string
* **healthDetails**: [AzureIaaSVMHealthDetails](#azureiaasvmhealthdetails)[]
* **healthStatus**: 'ActionRequired' | 'ActionSuggested' | 'Invalid' | 'Passed'
* **kpisHealths**: [Dictionary<string,KPIResourceHealthDetails>](#dictionarystringkpiresourcehealthdetails)
* **lastBackupStatus**: string
* **lastBackupTime**: string
* **protectedItemDataId**: string
* **protectedItemType**: 'AzureIaaSVMProtectedItem' (Required)
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'
* **protectionStatus**: string
* **virtualMachineId**: string

## AzureIaaSVMProtectedItemExtendedInfo
### Properties
* **oldestRecoveryPoint**: string
* **policyInconsistent**: bool
* **recoveryPointCount**: int

## ExtendedProperties
### Properties
* **diskExclusionProperties**: [DiskExclusionProperties](#diskexclusionproperties)

## DiskExclusionProperties
### Properties
* **diskLunList**: int[]
* **isInclusionList**: bool

## AzureIaaSVMHealthDetails
### Properties
* **code**: int (ReadOnly)
* **message**: string (ReadOnly)
* **recommendations**: string[] (ReadOnly)
* **title**: string (ReadOnly)

## Dictionary<string,KPIResourceHealthDetails>
### Properties
### Additional Properties
* **Additional Properties Type**: [KPIResourceHealthDetails](#kpiresourcehealthdetails)

## AzureVmWorkloadProtectedItem
### Properties
* **extendedInfo**: [AzureVmWorkloadProtectedItemExtendedInfo](#azurevmworkloadprotecteditemextendedinfo)
* **friendlyName**: string
* **kpisHealths**: [Dictionary<string,KPIResourceHealthDetails>](#dictionarystringkpiresourcehealthdetails)
* **lastBackupErrorDetail**: [ErrorDetail](#errordetail)
* **lastBackupStatus**: 'Healthy' | 'Invalid' | 'IRPending' | 'Unhealthy'
* **lastBackupTime**: string
* **parentName**: string
* **parentType**: string
* **protectedItemDataSourceId**: string
* **protectedItemHealthStatus**: 'Healthy' | 'Invalid' | 'IRPending' | 'NotReachable' | 'Unhealthy'
* **protectedItemType**: 'AzureVmWorkloadProtectedItem' (Required)
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'
* **protectionStatus**: string
* **serverName**: string

## AzureVmWorkloadProtectedItemExtendedInfo
### Properties
* **oldestRecoveryPoint**: string
* **policyState**: string
* **recoveryPointCount**: int

## Dictionary<string,KPIResourceHealthDetails>
### Properties
### Additional Properties
* **Additional Properties Type**: [KPIResourceHealthDetails](#kpiresourcehealthdetails)

## DPMProtectedItem
### Properties
* **backupEngineName**: string
* **extendedInfo**: [DPMProtectedItemExtendedInfo](#dpmprotecteditemextendedinfo)
* **friendlyName**: string
* **protectedItemType**: 'DPMProtectedItem' (Required)
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'

## DPMProtectedItemExtendedInfo
### Properties
* **diskStorageUsedInBytes**: string
* **isCollocated**: bool
* **isPresentOnCloud**: bool
* **lastBackupStatus**: string
* **lastRefreshedAt**: string
* **oldestRecoveryPoint**: string
* **onPremiseLatestRecoveryPoint**: string
* **onPremiseOldestRecoveryPoint**: string
* **onPremiseRecoveryPointCount**: int
* **protectableObjectLoadPath**: [Dictionary<string,String>](#dictionarystringstring)
* **protected**: bool
* **protectionGroupName**: string
* **recoveryPointCount**: int
* **totalDiskStorageSizeInBytes**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GenericProtectedItem
### Properties
* **fabricName**: string
* **friendlyName**: string
* **policyState**: string
* **protectedItemId**: int
* **protectedItemType**: 'GenericProtectedItem' (Required)
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'
* **sourceAssociations**: [Dictionary<string,String>](#dictionarystringstring)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MabFileFolderProtectedItem
### Properties
* **computerName**: string
* **deferredDeleteSyncTimeInUTC**: int
* **extendedInfo**: [MabFileFolderProtectedItemExtendedInfo](#mabfilefolderprotecteditemextendedinfo)
* **friendlyName**: string
* **lastBackupStatus**: string
* **lastBackupTime**: string
* **protectedItemType**: 'MabFileFolderProtectedItem' (Required)
* **protectionState**: string

## MabFileFolderProtectedItemExtendedInfo
### Properties
* **lastRefreshedAt**: string
* **oldestRecoveryPoint**: string
* **recoveryPointCount**: int

## Microsoft.Sql/servers/databases
### Properties
* **extendedInfo**: [AzureSqlProtectedItemExtendedInfo](#azuresqlprotecteditemextendedinfo)
* **protectedItemDataId**: string
* **protectedItemType**: 'Microsoft.Sql/servers/databases' (Required)
* **protectionState**: 'Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionPaused' | 'ProtectionStopped'

## AzureSqlProtectedItemExtendedInfo
### Properties
* **oldestRecoveryPoint**: string
* **policyState**: string
* **recoveryPointCount**: int

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProtectionPolicy
* **Discriminator**: backupManagementType
### Base Properties
* **protectedItemsCount**: int
### AzureIaasVM
#### Properties
* **backupManagementType**: 'AzureIaasVM' (Required)
* **instantRPDetails**: [InstantRPAdditionalDetails](#instantrpadditionaldetails)
* **instantRpRetentionRangeInDays**: int
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy)
* **timeZone**: string

### AzureSql
#### Properties
* **backupManagementType**: 'AzureSql' (Required)
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)

### AzureStorage
#### Properties
* **backupManagementType**: 'AzureStorage' (Required)
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy)
* **timeZone**: string
* **workLoadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'Sharepoint' | 'SQLDataBase' | 'SQLDB' | 'SystemState' | 'VM' | 'VMwareVM'

### AzureWorkload
#### Properties
* **backupManagementType**: 'AzureWorkload' (Required)
* **makePolicyConsistent**: bool
* **settings**: [Settings](#settings)
* **subProtectionPolicy**: [SubProtectionPolicy](#subprotectionpolicy)[]
* **workLoadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'Sharepoint' | 'SQLDataBase' | 'SQLDB' | 'SystemState' | 'VM' | 'VMwareVM'

### GenericProtectionPolicy
#### Properties
* **backupManagementType**: 'GenericProtectionPolicy' (Required)
* **fabricName**: string
* **subProtectionPolicy**: [SubProtectionPolicy](#subprotectionpolicy)[]
* **timeZone**: string

### MAB
#### Properties
* **backupManagementType**: 'MAB' (Required)
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy)


## AzureIaasVM
### Properties
* **backupManagementType**: 'AzureIaasVM' (Required)
* **instantRPDetails**: [InstantRPAdditionalDetails](#instantrpadditionaldetails)
* **instantRpRetentionRangeInDays**: int
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy)
* **timeZone**: string

## InstantRPAdditionalDetails
### Properties
* **azureBackupRGNamePrefix**: string
* **azureBackupRGNameSuffix**: string

## RetentionPolicy
* **Discriminator**: retentionPolicyType
### Base Properties
### LongTermRetentionPolicy
#### Properties
* **dailySchedule**: [DailyRetentionSchedule](#dailyretentionschedule)
* **monthlySchedule**: [MonthlyRetentionSchedule](#monthlyretentionschedule)
* **retentionPolicyType**: 'LongTermRetentionPolicy' (Required)
* **weeklySchedule**: [WeeklyRetentionSchedule](#weeklyretentionschedule)
* **yearlySchedule**: [YearlyRetentionSchedule](#yearlyretentionschedule)

### SimpleRetentionPolicy
#### Properties
* **retentionDuration**: [RetentionDuration](#retentionduration)
* **retentionPolicyType**: 'SimpleRetentionPolicy' (Required)


## LongTermRetentionPolicy
### Properties
* **dailySchedule**: [DailyRetentionSchedule](#dailyretentionschedule)
* **monthlySchedule**: [MonthlyRetentionSchedule](#monthlyretentionschedule)
* **retentionPolicyType**: 'LongTermRetentionPolicy' (Required)
* **weeklySchedule**: [WeeklyRetentionSchedule](#weeklyretentionschedule)
* **yearlySchedule**: [YearlyRetentionSchedule](#yearlyretentionschedule)

## DailyRetentionSchedule
### Properties
* **retentionDuration**: [RetentionDuration](#retentionduration)
* **retentionTimes**: string[]

## RetentionDuration
### Properties
* **count**: int
* **durationType**: 'Days' | 'Invalid' | 'Months' | 'Weeks' | 'Years'

## MonthlyRetentionSchedule
### Properties
* **retentionDuration**: [RetentionDuration](#retentionduration)
* **retentionScheduleDaily**: [DailyRetentionFormat](#dailyretentionformat)
* **retentionScheduleFormatType**: 'Daily' | 'Invalid' | 'Weekly'
* **retentionScheduleWeekly**: [WeeklyRetentionFormat](#weeklyretentionformat)
* **retentionTimes**: string[]

## DailyRetentionFormat
### Properties
* **daysOfTheMonth**: [Day](#day)[]

## Day
### Properties
* **date**: int
* **isLast**: bool

## WeeklyRetentionFormat
### Properties
* **daysOfTheWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]
* **weeksOfTheMonth**: 'First' | 'Fourth' | 'Invalid' | 'Last' | 'Second' | 'Third'[]

## WeeklyRetentionSchedule
### Properties
* **daysOfTheWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]
* **retentionDuration**: [RetentionDuration](#retentionduration)
* **retentionTimes**: string[]

## YearlyRetentionSchedule
### Properties
* **monthsOfYear**: 'April' | 'August' | 'December' | 'February' | 'Invalid' | 'January' | 'July' | 'June' | 'March' | 'May' | 'November' | 'October' | 'September'[]
* **retentionDuration**: [RetentionDuration](#retentionduration)
* **retentionScheduleDaily**: [DailyRetentionFormat](#dailyretentionformat)
* **retentionScheduleFormatType**: 'Daily' | 'Invalid' | 'Weekly'
* **retentionScheduleWeekly**: [WeeklyRetentionFormat](#weeklyretentionformat)
* **retentionTimes**: string[]

## SimpleRetentionPolicy
### Properties
* **retentionDuration**: [RetentionDuration](#retentionduration)
* **retentionPolicyType**: 'SimpleRetentionPolicy' (Required)

## SchedulePolicy
* **Discriminator**: schedulePolicyType
### Base Properties
### LogSchedulePolicy
#### Properties
* **scheduleFrequencyInMins**: int
* **schedulePolicyType**: 'LogSchedulePolicy' (Required)

### LongTermSchedulePolicy
#### Properties
* **schedulePolicyType**: 'LongTermSchedulePolicy' (Required)

### SimpleSchedulePolicy
#### Properties
* **schedulePolicyType**: 'SimpleSchedulePolicy' (Required)
* **scheduleRunDays**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]
* **scheduleRunFrequency**: 'Daily' | 'Invalid' | 'Weekly'
* **scheduleRunTimes**: string[]
* **scheduleWeeklyFrequency**: int


## LogSchedulePolicy
### Properties
* **scheduleFrequencyInMins**: int
* **schedulePolicyType**: 'LogSchedulePolicy' (Required)

## LongTermSchedulePolicy
### Properties
* **schedulePolicyType**: 'LongTermSchedulePolicy' (Required)

## SimpleSchedulePolicy
### Properties
* **schedulePolicyType**: 'SimpleSchedulePolicy' (Required)
* **scheduleRunDays**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]
* **scheduleRunFrequency**: 'Daily' | 'Invalid' | 'Weekly'
* **scheduleRunTimes**: string[]
* **scheduleWeeklyFrequency**: int

## AzureSql
### Properties
* **backupManagementType**: 'AzureSql' (Required)
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)

## AzureStorage
### Properties
* **backupManagementType**: 'AzureStorage' (Required)
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy)
* **timeZone**: string
* **workLoadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'Sharepoint' | 'SQLDataBase' | 'SQLDB' | 'SystemState' | 'VM' | 'VMwareVM'

## AzureWorkload
### Properties
* **backupManagementType**: 'AzureWorkload' (Required)
* **makePolicyConsistent**: bool
* **settings**: [Settings](#settings)
* **subProtectionPolicy**: [SubProtectionPolicy](#subprotectionpolicy)[]
* **workLoadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'Sharepoint' | 'SQLDataBase' | 'SQLDB' | 'SystemState' | 'VM' | 'VMwareVM'

## Settings
### Properties
* **isCompression**: bool
* **issqlcompression**: bool
* **timeZone**: string

## SubProtectionPolicy
### Properties
* **policyType**: 'CopyOnlyFull' | 'Differential' | 'Full' | 'Incremental' | 'Invalid' | 'Log'
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy)

## GenericProtectionPolicy
### Properties
* **backupManagementType**: 'GenericProtectionPolicy' (Required)
* **fabricName**: string
* **subProtectionPolicy**: [SubProtectionPolicy](#subprotectionpolicy)[]
* **timeZone**: string

## MAB
### Properties
* **backupManagementType**: 'MAB' (Required)
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)
* **schedulePolicy**: [SchedulePolicy](#schedulepolicy)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateEndpointConnection
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate)
* **provisioningState**: 'Deleting' | 'Failed' | 'Pending' | 'Succeeded'

## PrivateEndpoint
### Properties
* **id**: string

## PrivateLinkServiceConnectionState
### Properties
* **actionRequired**: string
* **description**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

