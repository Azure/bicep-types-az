# Microsoft.Backup.Admin @ 2018-09-01

## Resource Microsoft.Backup.Admin/backupLocations@2018-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackupLocationModel](#backuplocationmodel): Properties of a backup location.
* **tags**: [ResourceTags](#resourcetags): List of key value pairs.
* **type**: 'Microsoft.Backup.Admin/backupLocations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Backup.Admin/backupLocations/backups@2018-09-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackupModel](#backupmodel) (ReadOnly): Properties for a backup.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key value pairs.
* **type**: 'Microsoft.Backup.Admin/backupLocations/backups' (ReadOnly, DeployTimeConstant): The resource type

## BackupInfo
### Properties
* **backupDataVersion**: string (ReadOnly): Version of the backup data.
* **createdDateTime**: string (ReadOnly): Creation time of the backup.
* **deploymentID**: string (ReadOnly): Deployment Id of the stamp.
* **encryptionCertThumbprint**: string (ReadOnly): The thumbprint of the certificate used to encrypt the backup encryption key.
* **isCloudRecoveryReady**: bool (ReadOnly): True if the backup can be used for cloud recovery scenario.
* **oemVersion**: string (ReadOnly): OEM version.
* **roleStatus**: [RoleOperationStatus](#roleoperationstatus)[] (ReadOnly): Backup status for each role.
* **stampVersion**: string (ReadOnly): Azure Stack stamp version of the backup.
* **status**: 'Creating' | 'Deleted' | 'Failed' | 'PartialSucceeded' | 'Queued' | 'Running' | 'Succeeded' (ReadOnly): Current status of the backup.
* **timeTakenToCreate**: string (ReadOnly): Duration to create the backup.

## BackupLocationModel
### Properties
* **externalStoreDefault**: [ExternalStore](#externalstore): Information about an external storage location.

## BackupModel
### Properties
* **backupInfo**: [BackupInfo](#backupinfo): Holds information for a backup.

## ExternalStore
### Properties
* **availableCapacity**: string (ReadOnly): Free space at the backup location.
* **backupFrequencyInHours**: int: The interval, in hours, for the frequency that the scheduler takes a backup.
* **backupRetentionPeriodInDays**: int: The retention period, in days, for backs in the storage location.
* **encryptionCertBase64**: string: The base64 raw data for the backup encryption certificate.
* **encryptionCertThumbprint**: string (ReadOnly): The thumbprint of the encryption certificate.
* **isBackupSchedulerEnabled**: bool: True if the backup scheduler is enabled.
* **lastBackupTime**: string (ReadOnly): Time of backup.
* **nextBackupTime**: string (ReadOnly): The scheduled time of the next backup.
* **password**: string: Password to access the location.
* **path**: string: Path to the update location
* **userName**: string: Username to access the location.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RoleOperationStatus
### Properties
* **roleName**: string: Name of the role.
* **status**: 'Creating' | 'Deleted' | 'Failed' | 'PartialSucceeded' | 'Queued' | 'Running' | 'Succeeded': Status of the role.

