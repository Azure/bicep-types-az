# Microsoft.Backup.Admin @ 2018-09-01

## Resource Microsoft.Backup.Admin/backupLocations@2018-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: BackupLocationModel
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Backup.Admin/backupLocations' (ReadOnly, DeployTimeConstant)

## BackupLocationModel
### Properties
* **externalStoreDefault**: ExternalStore

## ExternalStore
### Properties
* **availableCapacity**: string (ReadOnly)
* **backupFrequencyInHours**: int
* **backupRetentionPeriodInDays**: int
* **encryptionCertBase64**: string
* **encryptionCertThumbprint**: string (ReadOnly)
* **isBackupSchedulerEnabled**: bool
* **lastBackupTime**: string (ReadOnly)
* **nextBackupTime**: string (ReadOnly)
* **password**: string
* **path**: string
* **userName**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

