# Microsoft.RecoveryServices @ 2017-07-01

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/backupProtectionIntent@2017-07-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectionIntent](#protectionintent): ProtectionIntentResource properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/backupProtectionIntent' (ReadOnly, DeployTimeConstant): The resource type

## Function backupPreValidateProtection (Microsoft.RecoveryServices/locations@2017-07-01)
* **Resource**: Microsoft.RecoveryServices/locations
* **ApiVersion**: 2017-07-01
* **Input**: [PreValidateEnableBackupRequest](#prevalidateenablebackuprequest)
* **Output**: [PreValidateEnableBackupResponse](#prevalidateenablebackupresponse)

## Function backupStatus (Microsoft.RecoveryServices/locations@2017-07-01)
* **Resource**: Microsoft.RecoveryServices/locations
* **ApiVersion**: 2017-07-01
* **Input**: [BackupStatusRequest](#backupstatusrequest)
* **Output**: [BackupStatusResponse](#backupstatusresponse)

## Function backupValidateFeatures (Microsoft.RecoveryServices/locations@2017-07-01)
* **Resource**: Microsoft.RecoveryServices/locations
* **ApiVersion**: 2017-07-01
* **Input**: [FeatureSupportRequest](#featuresupportrequest)
* **Output**: [AzureVMResourceFeatureSupportResponse](#azurevmresourcefeaturesupportresponse)

## AzureVMResourceFeatureSupportResponse
### Properties
* **supportStatus**: 'DefaultOFF' | 'DefaultON' | 'Invalid' | 'NotSupported' | 'Supported' | string: Support status of feature

## BackupStatusRequest
### Properties
* **poLogicalName**: string: Protectable Item Logical Name
* **resourceId**: string: Entire ARM resource id of the resource
* **resourceType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'SQLDB' | 'SQLDataBase' | 'Sharepoint' | 'SystemState' | 'VM' | 'VMwareVM' | string: Container Type - VM, SQLPaaS, DPM, AzureFileShare...

## BackupStatusResponse
### Properties
* **containerName**: string: Specifies the product specific container name. E.g. iaasvmcontainer;iaasvmcontainer;csname;vmname.
* **errorCode**: string: ErrorCode in case of intent failed
* **errorMessage**: string: ErrorMessage in case of intent failed.
* **fabricName**: 'Azure' | 'Invalid' | string: Specifies the fabric name - Azure or AD
* **policyName**: string: Specifies the policy name which is used for protection
* **protectedItemName**: string: Specifies the product specific ds name. E.g. vm;iaasvmcontainer;csname;vmname.
* **protectionStatus**: 'Invalid' | 'NotProtected' | 'Protected' | 'Protecting' | 'ProtectionFailed' | string: Specifies whether the container is registered or not
* **registrationStatus**: string: Container registration status
* **vaultId**: string: Specifies the arm resource id of the vault

## FeatureSupportRequest
* **Discriminator**: featureType

### Base Properties

### AzureBackupGoalFeatureSupportRequest
#### Properties
* **featureType**: 'AzureBackupGoals' (Required): backup support feature type.

### AzureVMResourceFeatureSupportRequest
#### Properties
* **featureType**: 'AzureVMResourceBackup' (Required): backup support feature type.
* **vmSize**: string: Size of the resource: VM size(A/D series etc) in case of IaasVM
* **vmSku**: string: SKUs (Premium/Managed etc) in case of IaasVM


## PreValidateEnableBackupRequest
### Properties
* **properties**: string: Configuration of VM if any needs to be validated like OS type etc
* **resourceId**: string: ARM Virtual Machine Id
* **resourceType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'SQLDB' | 'SQLDataBase' | 'Sharepoint' | 'SystemState' | 'VM' | 'VMwareVM' | string: ProtectedItem Type- VM, SqlDataBase, AzureFileShare etc
* **vaultId**: string: ARM id of the Recovery Services Vault

## PreValidateEnableBackupResponse
### Properties
* **containerName**: string: Specifies the product specific container name. E.g. iaasvmcontainer;iaasvmcontainer;rgname;vmname. This is required
for portal
* **errorCode**: string: Response error code
* **errorMessage**: string: Response error message
* **protectedItemName**: string: Specifies the product specific ds name. E.g. vm;iaasvmcontainer;rgname;vmname. This is required for portal
* **recommendation**: string: Recommended action for user
* **status**: 'Failed' | 'Invalid' | 'Succeeded' | string: Validation Status

## ProtectionIntent
* **Discriminator**: protectionIntentItemType

### Base Properties
* **backupManagementType**: 'AzureBackupServer' | 'AzureIaasVM' | 'AzureSql' | 'AzureStorage' | 'AzureWorkload' | 'DPM' | 'DefaultBackup' | 'Invalid' | 'MAB' | string: Type of backup management for the backed up item.
* **itemId**: string: ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
* **policyId**: string: ID of the backup policy with which this item is backed up.
* **protectionState**: 'Invalid' | 'NotProtected' | 'Protected' | 'Protecting' | 'ProtectionFailed' | string: Backup state of this backup item.
* **sourceResourceId**: string: ARM ID of the resource to be backed up.

### AzureResourceProtectionIntent
#### Properties
* **friendlyName**: string: Friendly name of the VM represented by this backup item.
* **protectionIntentItemType**: 'AzureResourceItem' (Required): backup protectionIntent type.

### AzureWorkloadSQLAutoProtectionIntent
#### Properties
* **protectionIntentItemType**: 'AzureWorkloadSQLAutoProtectionIntent' (Required): backup protectionIntent type.
* **workloadItemType**: 'Invalid' | 'SAPAseDatabase' | 'SAPAseSystem' | 'SAPHanaDatabase' | 'SAPHanaSystem' | 'SQLDataBase' | 'SQLInstance' | string: Workload item type of the item for which intent is to be set


## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

