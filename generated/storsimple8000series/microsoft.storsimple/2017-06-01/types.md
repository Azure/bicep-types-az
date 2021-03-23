# Microsoft.StorSimple @ 2017-06-01

## Resource Microsoft.StorSimple/managers@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagerProperties](#managerproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.StorSimple/managers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/accessControlRecords@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'Series8000'
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AccessControlRecordProperties](#accesscontrolrecordproperties) (Required)
* **type**: 'Microsoft.StorSimple/managers/accessControlRecords' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/bandwidthSettings@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'Series8000'
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BandwidthRateSettingProperties](#bandwidthratesettingproperties) (Required)
* **type**: 'Microsoft.StorSimple/managers/bandwidthSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/devices/alertSettings@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'Series8000'
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [AlertNotificationProperties](#alertnotificationproperties) (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/alertSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/devices/backupPolicies@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'Series8000'
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BackupPolicyProperties](#backuppolicyproperties) (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/backupPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/devices/backupPolicies/schedules@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'Series8000'
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BackupScheduleProperties](#backupscheduleproperties) (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/backupPolicies/schedules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/devices/timeSettings@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'Series8000'
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [TimeSettingsProperties](#timesettingsproperties) (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/timeSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/devices/volumeContainers@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'Series8000'
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VolumeContainerProperties](#volumecontainerproperties) (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/volumeContainers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/devices/volumeContainers/volumes@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'Series8000'
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VolumeProperties](#volumeproperties) (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/volumeContainers/volumes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/extendedInformation@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'Series8000'
* **name**: 'vaultExtendedInfo' (Required, DeployTimeConstant)
* **properties**: [ManagerExtendedInfoProperties](#managerextendedinfoproperties)
* **type**: 'Microsoft.StorSimple/managers/extendedInformation' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/storageAccountCredentials@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'Series8000'
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StorageAccountCredentialProperties](#storageaccountcredentialproperties) (Required)
* **type**: 'Microsoft.StorSimple/managers/storageAccountCredentials' (ReadOnly, DeployTimeConstant)

## ManagerProperties
### Properties
* **cisIntrinsicSettings**: [ManagerIntrinsicSettings](#managerintrinsicsettings)
* **provisioningState**: string
* **sku**: [ManagerSku](#managersku)

## ManagerIntrinsicSettings
### Properties
* **type**: 'GardaV1' | 'HelsinkiV1' (Required)

## ManagerSku
### Properties
* **name**: 'Standard' (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AccessControlRecordProperties
### Properties
* **initiatorName**: string (Required)
* **volumeCount**: int (ReadOnly)

## BandwidthRateSettingProperties
### Properties
* **schedules**: [BandwidthSchedule](#bandwidthschedule)[] (Required)
* **volumeCount**: int (ReadOnly)

## BandwidthSchedule
### Properties
* **days**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[] (Required)
* **rateInMbps**: int (Required)
* **start**: [Time](#time) (Required)
* **stop**: [Time](#time) (Required)

## Time
### Properties
* **hours**: int (Required)
* **minutes**: int (Required)
* **seconds**: int (Required)

## AlertNotificationProperties
### Properties
* **additionalRecipientEmailList**: string[]
* **alertNotificationCulture**: string
* **emailNotification**: 'Disabled' | 'Enabled' (Required)
* **notificationToServiceOwners**: 'Disabled' | 'Enabled'

## BackupPolicyProperties
### Properties
* **backupPolicyCreationType**: 'BySSM' | 'BySaaS' (ReadOnly)
* **lastBackupTime**: string (ReadOnly)
* **nextBackupTime**: string (ReadOnly)
* **scheduledBackupStatus**: 'Disabled' | 'Enabled' (ReadOnly)
* **schedulesCount**: int (ReadOnly)
* **ssmHostName**: string (ReadOnly)
* **volumeIds**: string[] (Required)

## BackupScheduleProperties
### Properties
* **backupType**: 'CloudSnapshot' | 'LocalSnapshot' (Required)
* **lastSuccessfulRun**: string (ReadOnly)
* **retentionCount**: int (Required)
* **scheduleRecurrence**: [ScheduleRecurrence](#schedulerecurrence) (Required)
* **scheduleStatus**: 'Disabled' | 'Enabled' (Required)
* **startTime**: string (Required)

## ScheduleRecurrence
### Properties
* **recurrenceType**: 'Daily' | 'Hourly' | 'Minutes' | 'Weekly' (Required)
* **recurrenceValue**: int (Required)
* **weeklyDaysList**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]

## TimeSettingsProperties
### Properties
* **primaryTimeServer**: string
* **secondaryTimeServer**: string[]
* **timeZone**: string (Required)

## VolumeContainerProperties
### Properties
* **bandWidthRateInMbps**: int
* **bandwidthSettingId**: string
* **encryptionKey**: [AsymmetricEncryptedSecret](#asymmetricencryptedsecret)
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

## ManagerExtendedInfoProperties
### Properties
* **algorithm**: string (Required)
* **encryptionKey**: string
* **encryptionKeyThumbprint**: string
* **integrityKey**: string (Required)
* **portalCertificateThumbprint**: string
* **version**: string

## StorageAccountCredentialProperties
### Properties
* **accessKey**: [AsymmetricEncryptedSecret](#asymmetricencryptedsecret)
* **endPoint**: string (Required)
* **sslStatus**: 'Disabled' | 'Enabled' (Required)
* **volumesCount**: int (ReadOnly)

