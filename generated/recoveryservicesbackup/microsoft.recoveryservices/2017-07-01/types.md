# Microsoft.RecoveryServices @ 2017-07-01

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/backupProtectionIntent@2017-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-07-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProtectionIntent](#protectionintent)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/backupProtectionIntent' (ReadOnly, DeployTimeConstant)

## ProtectionIntent
* **Discriminator**: protectionIntentItemType

### Base Properties
* **backupManagementType**: 'AzureBackupServer' | 'AzureIaasVM' | 'AzureSql' | 'AzureStorage' | 'AzureWorkload' | 'DPM' | 'DefaultBackup' | 'Invalid' | 'MAB'
* **itemId**: string
* **policyId**: string
* **protectionState**: 'Invalid' | 'NotProtected' | 'Protected' | 'Protecting' | 'ProtectionFailed'
* **sourceResourceId**: string
### AzureResourceProtectionIntent
#### Properties
* **friendlyName**: string
* **protectionIntentItemType**: 'AzureResourceItem' (Required)

### AzureWorkloadSQLAutoProtectionIntent
#### Properties
* **protectionIntentItemType**: 'AzureWorkloadSQLAutoProtectionIntent' (Required)
* **workloadItemType**: 'Invalid' | 'SAPAseDatabase' | 'SAPAseSystem' | 'SAPHanaDatabase' | 'SAPHanaSystem' | 'SQLDataBase' | 'SQLInstance'


## AzureResourceProtectionIntent
### Properties
* **friendlyName**: string
* **protectionIntentItemType**: 'AzureResourceItem' (Required)

## AzureWorkloadSQLAutoProtectionIntent
### Properties
* **protectionIntentItemType**: 'AzureWorkloadSQLAutoProtectionIntent' (Required)
* **workloadItemType**: 'Invalid' | 'SAPAseDatabase' | 'SAPAseSystem' | 'SAPHanaDatabase' | 'SAPHanaSystem' | 'SQLDataBase' | 'SQLInstance'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

