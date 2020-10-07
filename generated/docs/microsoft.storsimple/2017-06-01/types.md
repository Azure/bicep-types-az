# Microsoft.StorSimple @ 2017-06-01

## Microsoft.StorSimple/managers/accessControlRecords
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'Series8000'
* **name**: string (Required, DeployTimeConstant)
* **properties**: AccessControlRecordProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/accessControlRecords' (ReadOnly, DeployTimeConstant)

## AccessControlRecordProperties
### Properties
* **initiatorName**: string (Required)
* **volumeCount**: int (ReadOnly)

## Microsoft.StorSimple/managers/bandwidthSettings
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'Series8000'
* **name**: string (Required, DeployTimeConstant)
* **properties**: BandwidthRateSettingProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/bandwidthSettings' (ReadOnly, DeployTimeConstant)

## BandwidthRateSettingProperties
### Properties
* **schedules**: BandwidthSchedule[] (Required)
* **volumeCount**: int (ReadOnly)

## BandwidthSchedule
### Properties
* **days**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[] (Required)
* **rateInMbps**: int (Required)
* **start**: Time (Required)
* **stop**: Time (Required)

## Time
### Properties
* **hours**: int (Required)
* **minutes**: int (Required)
* **seconds**: int (Required)

## Microsoft.StorSimple/managers/devices/alertSettings
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'Series8000'
* **name**: string (Required, DeployTimeConstant)
* **properties**: AlertNotificationProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/alertSettings' (ReadOnly, DeployTimeConstant)

## AlertNotificationProperties
### Properties
* **additionalRecipientEmailList**: string[]
* **alertNotificationCulture**: string
* **emailNotification**: 'Disabled' | 'Enabled' (Required)
* **notificationToServiceOwners**: 'Disabled' | 'Enabled'

## Microsoft.StorSimple/managers/devices/backupPolicies/schedules
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'Series8000'
* **name**: string (Required, DeployTimeConstant)
* **properties**: BackupScheduleProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/backupPolicies/schedules' (ReadOnly, DeployTimeConstant)

## BackupScheduleProperties
### Properties
* **backupType**: 'CloudSnapshot' | 'LocalSnapshot' (Required)
* **lastSuccessfulRun**: string (ReadOnly)
* **retentionCount**: int (Required)
* **scheduleRecurrence**: ScheduleRecurrence (Required)
* **scheduleStatus**: 'Disabled' | 'Enabled' (Required)
* **startTime**: string (Required)

## ScheduleRecurrence
### Properties
* **recurrenceType**: 'Daily' | 'Hourly' | 'Minutes' | 'Weekly' (Required)
* **recurrenceValue**: int (Required)
* **weeklyDaysList**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]

## Microsoft.StorSimple/managers/devices/backupPolicies
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'Series8000'
* **name**: string (Required, DeployTimeConstant)
* **properties**: BackupPolicyProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/backupPolicies' (ReadOnly, DeployTimeConstant)

## BackupPolicyProperties
### Properties
* **backupPolicyCreationType**: 'BySSM' | 'BySaaS' (ReadOnly)
* **lastBackupTime**: string (ReadOnly)
* **nextBackupTime**: string (ReadOnly)
* **scheduledBackupStatus**: 'Disabled' | 'Enabled' (ReadOnly)
* **schedulesCount**: int (ReadOnly)
* **ssmHostName**: string (ReadOnly)
* **volumeIds**: string[] (Required)

## Microsoft.StorSimple/managers/devices/timeSettings
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'Series8000'
* **name**: string (Required, DeployTimeConstant)
* **properties**: TimeSettingsProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/timeSettings' (ReadOnly, DeployTimeConstant)

## TimeSettingsProperties
### Properties
* **primaryTimeServer**: string
* **secondaryTimeServer**: string[]
* **timeZone**: string (Required)

## Microsoft.StorSimple/managers/devices/volumeContainers/volumes
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'Series8000'
* **name**: string (Required, DeployTimeConstant)
* **properties**: VolumeProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/volumeContainers/volumes' (ReadOnly, DeployTimeConstant)

## VolumeProperties
### Properties
* **accessControlRecordIds**: string[] (Required)
* **backupPolicyIds**: string[] (ReadOnly)
* **backupStatus**: 'Disabled' | 'Enabled' (ReadOnly)
* **monitoringStatus**: 'Disabled' | 'Enabled' (Required)
* **operationStatus**: 'Deleting' | 'None' | 'Restoring' | 'Updating' (ReadOnly)
* **sizeInBytes**: int (Required)
* **volumeContainerId**: string (ReadOnly)
* **volumeStatus**: 'Offline' | 'Online' (Required)
* **volumeType**: 'Archival' | 'LocallyPinned' | 'Tiered' (Required)

## Microsoft.StorSimple/managers/devices/volumeContainers
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'Series8000'
* **name**: string (Required, DeployTimeConstant)
* **properties**: VolumeContainerProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/volumeContainers' (ReadOnly, DeployTimeConstant)

## VolumeContainerProperties
### Properties
* **bandWidthRateInMbps**: int
* **bandwidthSettingId**: string
* **encryptionKey**: AsymmetricEncryptedSecret
* **encryptionStatus**: 'Disabled' | 'Enabled' (ReadOnly)
* **ownerShipStatus**: 'NotOwned' | 'Owned' (ReadOnly)
* **storageAccountCredentialId**: string (Required)
* **totalCloudStorageUsageInBytes**: int (ReadOnly)
* **volumeCount**: int (ReadOnly)

## AsymmetricEncryptedSecret
### Properties
* **encryptionAlgorithm**: 'AES256' | 'None' | 'RSAES_PKCS1_v_1_5' (Required)
* **encryptionCertThumbprint**: string
* **value**: string (Required)

## Microsoft.StorSimple/managers/extendedInformation
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'Series8000'
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagerExtendedInfoProperties
* **type**: 'Microsoft.StorSimple/managers/extendedInformation' (ReadOnly, DeployTimeConstant)

## ManagerExtendedInfoProperties
### Properties
* **algorithm**: string (Required)
* **encryptionKey**: string
* **encryptionKeyThumbprint**: string
* **integrityKey**: string (Required)
* **portalCertificateThumbprint**: string
* **version**: string

## Microsoft.StorSimple/managers/storageAccountCredentials
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'Series8000'
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageAccountCredentialProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/storageAccountCredentials' (ReadOnly, DeployTimeConstant)

## StorageAccountCredentialProperties
### Properties
* **accessKey**: AsymmetricEncryptedSecret
* **endPoint**: string (Required)
* **sslStatus**: 'Disabled' | 'Enabled' (Required)
* **volumesCount**: int (ReadOnly)

## Microsoft.StorSimple/managers
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagerProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.StorSimple/managers' (ReadOnly, DeployTimeConstant)

## ManagerProperties
### Properties
* **cisIntrinsicSettings**: ManagerIntrinsicSettings
* **provisioningState**: string
* **sku**: ManagerSku

## ManagerIntrinsicSettings
### Properties
* **type**: 'GardaV1' | 'HelsinkiV1' (Required)

## ManagerSku
### Properties
* **name**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

