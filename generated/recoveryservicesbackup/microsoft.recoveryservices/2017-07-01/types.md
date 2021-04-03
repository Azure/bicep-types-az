# Microsoft.RecoveryServices @ 2017-07-01

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/backupProtectionIntent@2017-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectionIntent](#protectionintent): Base class for backup ProtectionIntent.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/backupProtectionIntent' (ReadOnly, DeployTimeConstant): The resource type

## ProtectionIntent
* **Discriminator**: protectionIntentItemType
### Base Properties
* **backupManagementType**: 'AzureBackupServer' | 'AzureIaasVM' | 'AzureSql' | 'AzureStorage' | 'AzureWorkload' | 'DefaultBackup' | 'DPM' | 'Invalid' | 'MAB': Type of backup management for the backed up item.
* **itemId**: string: ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
* **policyId**: string: ID of the backup policy with which this item is backed up.
* **protectionState**: 'Invalid' | 'NotProtected' | 'Protected' | 'Protecting' | 'ProtectionFailed': Backup state of this backup item.
* **sourceResourceId**: string: ARM ID of the resource to be backed up.
### AzureResourceItem
#### Properties
* **friendlyName**: string: Friendly name of the VM represented by this backup item.
* **protectionIntentItemType**: 'AzureResourceItem' (Required): IaaS VM specific backup protection intent item.

### RecoveryServiceVaultItem
#### Properties
* **protectionIntentItemType**: 'RecoveryServiceVaultItem' (Required): Azure Recovery Services Vault specific protection intent item.


## AzureResourceItem
### Properties
* **friendlyName**: string: Friendly name of the VM represented by this backup item.
* **protectionIntentItemType**: 'AzureResourceItem' (Required): IaaS VM specific backup protection intent item.

## RecoveryServiceVaultItem
### Properties
* **protectionIntentItemType**: 'RecoveryServiceVaultItem' (Required): Azure Recovery Services Vault specific protection intent item.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

