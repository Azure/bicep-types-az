# Microsoft.StorSimple @ 2017-06-01

## Resource Microsoft.StorSimple/managers@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the manager.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagerProperties](#managerproperties): The properties of the StorSimple Manager.
* **tags**: [ResourceTags](#resourcetags): The tags attached to the resource.
* **type**: 'Microsoft.StorSimple/managers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorSimple/managers/accessControlRecords@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Series8000': The Kind of the object. Currently only Series8000 is supported
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccessControlRecordProperties](#accesscontrolrecordproperties) (Required): The properties of access control record.
* **type**: 'Microsoft.StorSimple/managers/accessControlRecords' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorSimple/managers/bandwidthSettings@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Series8000': The Kind of the object. Currently only Series8000 is supported
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BandwidthRateSettingProperties](#bandwidthratesettingproperties) (Required): The properties of the bandwidth setting.
* **type**: 'Microsoft.StorSimple/managers/bandwidthSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorSimple/managers/devices/alertSettings@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Series8000': The Kind of the object. Currently only Series8000 is supported
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [AlertNotificationProperties](#alertnotificationproperties) (Required): The properties of the alert notification settings.
* **type**: 'Microsoft.StorSimple/managers/devices/alertSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorSimple/managers/devices/backupPolicies@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Series8000': The Kind of the object. Currently only Series8000 is supported
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackupPolicyProperties](#backuppolicyproperties) (Required): The properties of the backup policy.
* **type**: 'Microsoft.StorSimple/managers/devices/backupPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorSimple/managers/devices/backupPolicies/schedules@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Series8000': The Kind of the object. Currently only Series8000 is supported
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackupScheduleProperties](#backupscheduleproperties) (Required): The properties of the backup schedule.
* **type**: 'Microsoft.StorSimple/managers/devices/backupPolicies/schedules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorSimple/managers/devices/timeSettings@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Series8000': The Kind of the object. Currently only Series8000 is supported
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [TimeSettingsProperties](#timesettingsproperties) (Required): The properties of the time settings of a device.
* **type**: 'Microsoft.StorSimple/managers/devices/timeSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorSimple/managers/devices/volumeContainers@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Series8000': The Kind of the object. Currently only Series8000 is supported
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeContainerProperties](#volumecontainerproperties) (Required): The volume container properties.
* **type**: 'Microsoft.StorSimple/managers/devices/volumeContainers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorSimple/managers/devices/volumeContainers/volumes@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Series8000': The Kind of the object. Currently only Series8000 is supported
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeProperties](#volumeproperties) (Required): The properties of the volume.
* **type**: 'Microsoft.StorSimple/managers/devices/volumeContainers/volumes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorSimple/managers/extendedInformation@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Series8000': The Kind of the object. Currently only Series8000 is supported
* **name**: 'vaultExtendedInfo' (Required, DeployTimeConstant): The resource name
* **properties**: [ManagerExtendedInfoProperties](#managerextendedinfoproperties): The extended info properties.
* **type**: 'Microsoft.StorSimple/managers/extendedInformation' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorSimple/managers/storageAccountCredentials@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Series8000': The Kind of the object. Currently only Series8000 is supported
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageAccountCredentialProperties](#storageaccountcredentialproperties) (Required): The storage account credential properties.
* **type**: 'Microsoft.StorSimple/managers/storageAccountCredentials' (ReadOnly, DeployTimeConstant): The resource type

## Function listActivationKey (Microsoft.StorSimple/managers@2017-06-01)
* **Resource**: Microsoft.StorSimple/managers
* **ApiVersion**: 2017-06-01
* **Output**: [Key](#key)

## Function listFailoverSets (Microsoft.StorSimple/managers/devices@2017-06-01)
* **Resource**: Microsoft.StorSimple/managers/devices
* **ApiVersion**: 2017-06-01
* **Output**: [FailoverSetsList](#failoversetslist)

## Function listFailoverTargets (Microsoft.StorSimple/managers/devices@2017-06-01)
* **Resource**: Microsoft.StorSimple/managers/devices
* **ApiVersion**: 2017-06-01
* **Input**: [ListFailoverTargetsRequest](#listfailovertargetsrequest)
* **Output**: [FailoverTargetsList](#failovertargetslist)

## Function listPublicEncryptionKey (Microsoft.StorSimple/managers@2017-06-01)
* **Resource**: Microsoft.StorSimple/managers
* **ApiVersion**: 2017-06-01
* **Output**: [SymmetricEncryptedSecret](#symmetricencryptedsecret)

## AccessControlRecordProperties
### Properties
* **initiatorName**: string (Required): The iSCSI initiator name (IQN).
* **volumeCount**: int (ReadOnly): The number of volumes using the access control record.

## AlertNotificationProperties
### Properties
* **additionalRecipientEmailList**: string[]: The alert notification email list.
* **alertNotificationCulture**: string: The alert notification culture.
* **emailNotification**: 'Disabled' | 'Enabled' (Required): Indicates whether email notification enabled or not.
* **notificationToServiceOwners**: 'Disabled' | 'Enabled': The value indicating whether alert notification enabled for admin or not.

## AsymmetricEncryptedSecret
### Properties
* **encryptionAlgorithm**: 'AES256' | 'None' | 'RSAES_PKCS1_v_1_5' (Required): The algorithm used to encrypt "Value".
* **encryptionCertThumbprint**: string: Thumbprint certificate that was used to encrypt "Value". If the value in unencrypted, it will be null.
* **value**: string (Required): The value of the secret.

## BackupPolicyProperties
### Properties
* **backupPolicyCreationType**: 'BySSM' | 'BySaaS' (ReadOnly): The backup policy creation type. Indicates whether this was created through SaaS or through StorSimple Snapshot Manager.
* **lastBackupTime**: string (ReadOnly): The time of the last backup for the backup policy.
* **nextBackupTime**: string (ReadOnly): The time of the next backup for the backup policy.
* **scheduledBackupStatus**: 'Disabled' | 'Enabled' (ReadOnly): Indicates whether at least one of the schedules in the backup policy is active or not.
* **schedulesCount**: int (ReadOnly): The count of schedules the backup policy contains.
* **ssmHostName**: string (ReadOnly): If the backup policy was created by StorSimple Snapshot Manager, then this field indicates the hostname of the StorSimple Snapshot Manager.
* **volumeIds**: string[] (Required): The path IDs of the volumes which are part of the backup policy.

## BackupScheduleProperties
### Properties
* **backupType**: 'CloudSnapshot' | 'LocalSnapshot' (Required): The type of backup which needs to be taken.
* **lastSuccessfulRun**: string (ReadOnly): The last successful backup run which was triggered for the schedule.
* **retentionCount**: int (Required): The number of backups to be retained.
* **scheduleRecurrence**: [ScheduleRecurrence](#schedulerecurrence) (Required): The schedule recurrence.
* **scheduleStatus**: 'Disabled' | 'Enabled' (Required): The schedule status.
* **startTime**: string (Required): The start time of the schedule.

## BandwidthRateSettingProperties
### Properties
* **schedules**: [BandwidthSchedule](#bandwidthschedule)[] (Required): The schedules.
* **volumeCount**: int (ReadOnly): The number of volumes that uses the bandwidth setting.

## BandwidthSchedule
### Properties
* **days**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[] (Required): The days of the week when this schedule is applicable.
* **rateInMbps**: int (Required): The rate in Mbps.
* **start**: [Time](#time) (Required): The start time of the schedule.
* **stop**: [Time](#time) (Required): The stop time of the schedule.

## FailoverSet
### Properties
* **eligibilityResult**: [FailoverSetEligibilityResult](#failoverseteligibilityresult): The eligibility result of the failover set, for failover.
* **volumeContainers**: [VolumeContainerFailoverMetadata](#volumecontainerfailovermetadata)[]: The list of meta data of volume containers, which are part of the failover set.

## FailoverSetEligibilityResult
### Properties
* **errorMessage**: string: The error message, if the failover set is not eligible for failover.
* **isEligibleForFailover**: bool: Represents if this failover set is eligible for failover or not.

## FailoverSetsList
### Properties
* **value**: [FailoverSet](#failoverset)[]: The list of failover sets.

## FailoverTarget
### Properties
* **availableLocalStorageInBytes**: int: The amount of free local storage available on the device in bytes.
* **availableTieredStorageInBytes**: int: The amount of free tiered storage available for the device in bytes.
* **dataContainersCount**: int: The count of data containers on the device.
* **deviceId**: string: The path ID of the device.
* **deviceLocation**: string: The geo location (applicable only for cloud appliances) of the device.
* **deviceSoftwareVersion**: string: The software version of the device.
* **deviceStatus**: 'Creating' | 'Deactivated' | 'Deactivating' | 'Deleted' | 'MaintenanceMode' | 'Offline' | 'Online' | 'Provisioning' | 'ReadyToSetup' | 'RequiresAttention' | 'Unknown': The status of the device.
* **eligibilityResult**: [TargetEligibilityResult](#targeteligibilityresult): The eligibility result of the device, as a failover target device.
* **friendlyDeviceSoftwareVersion**: string: The friendly name for the current version of software on the device.
* **modelDescription**: string: The model number of the device.
* **volumesCount**: int: The count of volumes on the device.

## FailoverTargetsList
### Properties
* **value**: [FailoverTarget](#failovertarget)[]: The list of all the failover targets.

## Key
### Properties
* **activationKey**: string (Required): The activation key for the device.

## ListFailoverTargetsRequest
### Properties
* **volumeContainers**: string[]: The list of path IDs of the volume containers that needs to be failed-over, for which we want to fetch the eligible targets.

## ManagerExtendedInfoProperties
### Properties
* **algorithm**: string (Required): Represents the encryption algorithm used to encrypt the keys. None - if Key is saved in plain text format. Algorithm name - if key is encrypted
* **encryptionKey**: string: Represents the CEK of the resource.
* **encryptionKeyThumbprint**: string: Represents the Cert thumbprint that was used to encrypt the CEK.
* **integrityKey**: string (Required): Represents the CIK of the resource.
* **portalCertificateThumbprint**: string: Represents the portal thumbprint which can be used optionally to encrypt the entire data before storing it.
* **version**: string: The version of the extended info being persisted.

## ManagerIntrinsicSettings
### Properties
* **type**: 'GardaV1' | 'HelsinkiV1' (Required): The type of StorSimple Manager.

## ManagerProperties
### Properties
* **cisIntrinsicSettings**: [ManagerIntrinsicSettings](#managerintrinsicsettings): Represents the type of StorSimple Manager.
* **provisioningState**: string: Specifies the state of the resource as it is getting provisioned. Value of "Succeeded" means the Manager was successfully created.
* **sku**: [ManagerSku](#managersku): Specifies the Sku.

## ManagerSku
### Properties
* **name**: 'Standard' (Required): Refers to the sku name which should be "Standard"

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScheduleRecurrence
### Properties
* **recurrenceType**: 'Daily' | 'Hourly' | 'Minutes' | 'Weekly' (Required): The recurrence type.
* **recurrenceValue**: int (Required): The recurrence value.
* **weeklyDaysList**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]: The week days list. Applicable only for schedules of recurrence type 'weekly'.

## StorageAccountCredentialProperties
### Properties
* **accessKey**: [AsymmetricEncryptedSecret](#asymmetricencryptedsecret): The details of the storage account password.
* **endPoint**: string (Required): The storage endpoint
* **sslStatus**: 'Disabled' | 'Enabled' (Required): Signifies whether SSL needs to be enabled or not.
* **volumesCount**: int (ReadOnly): The count of volumes using this storage account credential.

## SymmetricEncryptedSecret
### Properties
* **encryptionAlgorithm**: 'AES256' | 'None' | 'RSAES_PKCS1_v_1_5' (Required): The algorithm used to encrypt the "Value".
* **value**: string (Required): The value of the secret itself. If the secret is in plaintext or null then EncryptionAlgorithm will be none.
* **valueCertificateThumbprint**: string: The thumbprint of the cert that was used to encrypt "Value".

## TargetEligibilityErrorMessage
### Properties
* **message**: string: The localized error message stating the reason why the device is not eligible as a target device.
* **resolution**: string: The localized resolution message for the error.
* **resultCode**: 'LocalToTieredVolumesConversionWarning' | 'TargetAndSourceCannotBeSameError' | 'TargetInsufficientCapacityError' | 'TargetInsufficientLocalVolumeMemoryError' | 'TargetInsufficientTieredVolumeMemoryError' | 'TargetIsNotOnlineError' | 'TargetSourceIncompatibleVersionError': The result code for the error, due to which the device does not qualify as a failover target device.

## TargetEligibilityResult
### Properties
* **eligibilityStatus**: 'Eligible' | 'NotEligible': The eligibility status of device, as a failover target device.
* **messages**: [TargetEligibilityErrorMessage](#targeteligibilityerrormessage)[]: The list of error messages, if a device does not qualify as a failover target device.

## Time
### Properties
* **hours**: int (Required): The hour.
* **minutes**: int (Required): The minute.
* **seconds**: int (Required): The second.

## TimeSettingsProperties
### Properties
* **primaryTimeServer**: string: The primary Network Time Protocol (NTP) server name, like 'time.windows.com'.
* **secondaryTimeServer**: string[]: The secondary Network Time Protocol (NTP) server name, like 'time.contoso.com'. It's optional.
* **timeZone**: string (Required): The timezone of device, like '(UTC -06:00) Central America'

## VolumeContainerFailoverMetadata
### Properties
* **volumeContainerId**: string: The path ID of the volume container.
* **volumes**: [VolumeFailoverMetadata](#volumefailovermetadata)[]: The list of metadata of volumes inside the volume container, which contains valid cloud snapshots.

## VolumeContainerProperties
### Properties
* **bandWidthRateInMbps**: int: The bandwidth-rate set on the volume container.
* **bandwidthSettingId**: string: The ID of the bandwidth setting associated with the volume container.
* **encryptionKey**: [AsymmetricEncryptedSecret](#asymmetricencryptedsecret): The key used to encrypt data in the volume container. It is required when property 'EncryptionStatus' is "Enabled".
* **encryptionStatus**: 'Disabled' | 'Enabled' (ReadOnly): The flag to denote whether encryption is enabled or not.
* **ownerShipStatus**: 'NotOwned' | 'Owned' (ReadOnly): The owner ship status of the volume container. Only when the status is "NotOwned", the delete operation on the volume container is permitted.
* **storageAccountCredentialId**: string (Required): The path ID of storage account associated with the volume container.
* **totalCloudStorageUsageInBytes**: int (ReadOnly): The total cloud storage for the volume container.
* **volumeCount**: int (ReadOnly): The number of volumes in the volume Container.

## VolumeFailoverMetadata
### Properties
* **backupCreatedDate**: string: The date at which the snapshot was taken.
* **backupElementId**: string: The path ID of the backup-element for this volume, inside the backup set.
* **backupId**: string: The path ID of the backup set.
* **backupPolicyId**: string: The path ID of the backup policy using which the snapshot was taken.
* **sizeInBytes**: int: The size of the volume in bytes at the time the snapshot was taken.
* **volumeId**: string: The path ID of the volume.
* **volumeType**: 'Archival' | 'LocallyPinned' | 'Tiered': The type of the volume.

## VolumeProperties
### Properties
* **accessControlRecordIds**: string[] (Required): The IDs of the access control records, associated with the volume.
* **backupPolicyIds**: string[] (ReadOnly): The IDs of the backup policies, in which this volume is part of.
* **backupStatus**: 'Disabled' | 'Enabled' (ReadOnly): The backup status of the volume.
* **monitoringStatus**: 'Disabled' | 'Enabled' (Required): The monitoring status of the volume.
* **operationStatus**: 'Deleting' | 'None' | 'Restoring' | 'Updating' (ReadOnly): The operation status on the volume.
* **sizeInBytes**: int (Required): The size of the volume in bytes.
* **volumeContainerId**: string (ReadOnly): The ID of the volume container, in which this volume is created.
* **volumeStatus**: 'Offline' | 'Online' (Required): The volume status.
* **volumeType**: 'Archival' | 'LocallyPinned' | 'Tiered' (Required): The type of the volume.

