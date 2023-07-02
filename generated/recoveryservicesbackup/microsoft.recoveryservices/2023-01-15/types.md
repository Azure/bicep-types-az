# Microsoft.RecoveryServices @ 2023-01-15

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems/recoveryPoints@2023-01-15 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-15' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecoveryPoint](#recoverypoint) (ReadOnly): RecoveryPointResource properties
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems/recoveryPoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/backupstorageconfig@2023-01-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-15' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: 'vaultstorageconfig' (Required, DeployTimeConstant): The resource name
* **properties**: [BackupResourceConfig](#backupresourceconfig): BackupResourceConfigResource properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupstorageconfig' (ReadOnly, DeployTimeConstant): The resource type

## AzureWorkloadRecoveryPointMoveReadinessInfo
### Properties
### Additional Properties
* **Additional Properties Type**: [RecoveryPointMoveReadinessInfo](#recoverypointmovereadinessinfo)

## AzureWorkloadRecoveryPointMoveReadinessInfo
### Properties
### Additional Properties
* **Additional Properties Type**: [RecoveryPointMoveReadinessInfo](#recoverypointmovereadinessinfo)

## AzureWorkloadRecoveryPointMoveReadinessInfo
### Properties
### Additional Properties
* **Additional Properties Type**: [RecoveryPointMoveReadinessInfo](#recoverypointmovereadinessinfo)

## AzureWorkloadSQLRecoveryPointExtendedInfo
### Properties
* **dataDirectoryPaths**: [SQLDataDirectory](#sqldatadirectory)[] (ReadOnly): List of data directory paths during restore operation.
* **dataDirectoryTimeInUTC**: string (ReadOnly): UTC time at which data directory info was captured

## BackupResourceConfig
### Properties
* **crossRegionRestoreFlag**: bool: Opt in details of Cross Region Restore feature.
* **storageModelType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant' | 'ReadAccessGeoZoneRedundant' | 'ZoneRedundant' | string: Storage type
* **storageType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant' | 'ReadAccessGeoZoneRedundant' | 'ZoneRedundant' | string: Storage type.
* **storageTypeState**: 'Invalid' | 'Locked' | 'Unlocked' | string: Locked or Unlocked. Once a machine is registered against a resource, the storageTypeState is always Locked.

## BEKDetails
### Properties
* **secretData**: string: BEK data.
* **secretUrl**: string: Secret is BEK.
* **secretVaultId**: string: ID of the Key Vault where this Secret is stored.

## DiskInformation
### Properties
* **lun**: int
* **name**: string

## IaasVMRecoveryPointMoveReadinessInfo
### Properties
### Additional Properties
* **Additional Properties Type**: [RecoveryPointMoveReadinessInfo](#recoverypointmovereadinessinfo)

## KEKDetails
### Properties
* **keyBackupData**: string: KEK data.
* **keyUrl**: string: Key is KEK.
* **keyVaultId**: string: Key Vault ID where this Key is stored.

## KeyAndSecretDetails
### Properties
* **bekDetails**: [BEKDetails](#bekdetails): BEK is bitlocker encryption key.
* **encryptionMechanism**: string: Encryption mechanism: None/ SinglePass/ DoublePass
* **kekDetails**: [KEKDetails](#kekdetails): KEK is encryption key for BEK.

## PointInTimeRange
### Properties
* **endTime**: string: End time of the time range for log recovery.
* **startTime**: string: Start time of the time range for log recovery.

## RecoveryPoint
* **Discriminator**: objectType

### Base Properties

### AzureFileShareRecoveryPoint
#### Properties
* **fileShareSnapshotUri**: string (ReadOnly): Contains Url to the snapshot of fileshare, if applicable
* **objectType**: 'AzureFileShareRecoveryPoint' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **recoveryPointProperties**: [RecoveryPointProperties](#recoverypointproperties): Properties of Recovery Point
* **recoveryPointSizeInGB**: int (ReadOnly): Contains recovery point size
* **recoveryPointTime**: string (ReadOnly): Time at which this backup copy was created.
* **recoveryPointType**: string (ReadOnly): Type of the backup copy. Specifies whether it is a crash consistent backup or app consistent.

### AzureWorkloadSAPHanaPointInTimeRecoveryPoint
#### Properties
* **objectType**: 'AzureWorkloadSAPHanaPointInTimeRecoveryPoint' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **recoveryPointMoveReadinessInfo**: [AzureWorkloadRecoveryPointMoveReadinessInfo](#azureworkloadrecoverypointmovereadinessinfo): Eligibility of RP to be moved to another tier
* **recoveryPointProperties**: [RecoveryPointProperties](#recoverypointproperties): Properties of Recovery Point
* **recoveryPointTierDetails**: [RecoveryPointTierInformation](#recoverypointtierinformation)[]: Recovery point tier information.
* **recoveryPointTimeInUTC**: string (ReadOnly): UTC time at which recovery point was created
* **timeRanges**: [PointInTimeRange](#pointintimerange)[]: List of log ranges
* **type**: 'Differential' | 'Full' | 'Incremental' | 'Invalid' | 'Log' | string (ReadOnly): Type of restore point

### AzureWorkloadSAPHanaRecoveryPoint
#### Properties
* **objectType**: 'AzureWorkloadSAPHanaRecoveryPoint' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **recoveryPointMoveReadinessInfo**: [AzureWorkloadRecoveryPointMoveReadinessInfo](#azureworkloadrecoverypointmovereadinessinfo): Eligibility of RP to be moved to another tier
* **recoveryPointProperties**: [RecoveryPointProperties](#recoverypointproperties): Properties of Recovery Point
* **recoveryPointTierDetails**: [RecoveryPointTierInformation](#recoverypointtierinformation)[]: Recovery point tier information.
* **recoveryPointTimeInUTC**: string (ReadOnly): UTC time at which recovery point was created
* **type**: 'Differential' | 'Full' | 'Incremental' | 'Invalid' | 'Log' | string (ReadOnly): Type of restore point

### AzureWorkloadSQLPointInTimeRecoveryPoint
#### Properties
* **extendedInfo**: [AzureWorkloadSQLRecoveryPointExtendedInfo](#azureworkloadsqlrecoverypointextendedinfo): Extended Info that provides data directory details. Will be populated in two cases:
When a specific recovery point is accessed using GetRecoveryPoint
Or when ListRecoveryPoints is called for Log RP only with ExtendedInfo query filter
* **objectType**: 'AzureWorkloadSQLPointInTimeRecoveryPoint' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **recoveryPointMoveReadinessInfo**: [AzureWorkloadRecoveryPointMoveReadinessInfo](#azureworkloadrecoverypointmovereadinessinfo): Eligibility of RP to be moved to another tier
* **recoveryPointProperties**: [RecoveryPointProperties](#recoverypointproperties): Properties of Recovery Point
* **recoveryPointTierDetails**: [RecoveryPointTierInformation](#recoverypointtierinformation)[]: Recovery point tier information.
* **recoveryPointTimeInUTC**: string (ReadOnly): UTC time at which recovery point was created
* **timeRanges**: [PointInTimeRange](#pointintimerange)[]: List of log ranges
* **type**: 'Differential' | 'Full' | 'Incremental' | 'Invalid' | 'Log' | string (ReadOnly): Type of restore point

### GenericRecoveryPoint
#### Properties
* **friendlyName**: string: Friendly name of the backup copy.
* **objectType**: 'GenericRecoveryPoint' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **recoveryPointAdditionalInfo**: string: Additional information associated with this backup copy.
* **recoveryPointProperties**: [RecoveryPointProperties](#recoverypointproperties): Properties of Recovery Point
* **recoveryPointTime**: string: Time at which this backup copy was created.
* **recoveryPointType**: string: Type of the backup copy.

### IaasVMRecoveryPoint
#### Properties
* **isInstantIlrSessionActive**: bool: Is the session to recover items from this backup copy still active.
* **isManagedVirtualMachine**: bool: Whether VM is with Managed Disks
* **isSourceVMEncrypted**: bool (ReadOnly): Identifies whether the VM was encrypted when the backup copy is created.
* **keyAndSecret**: [KeyAndSecretDetails](#keyandsecretdetails): Required details for recovering an encrypted VM. Applicable only when IsSourceVMEncrypted is true.
* **objectType**: 'IaasVMRecoveryPoint' (Required): This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
* **originalStorageAccountOption**: bool: Original Storage Account Option
* **osType**: string: OS type
* **recoveryPointAdditionalInfo**: string (ReadOnly): Additional information associated with this backup copy.
* **recoveryPointDiskConfiguration**: [RecoveryPointDiskConfiguration](#recoverypointdiskconfiguration): Disk configuration
* **recoveryPointMoveReadinessInfo**: [IaasVMRecoveryPointMoveReadinessInfo](#iaasvmrecoverypointmovereadinessinfo): Eligibility of RP to be moved to another tier
* **recoveryPointProperties**: [RecoveryPointProperties](#recoverypointproperties): Properties of Recovery Point
* **recoveryPointTierDetails**: [RecoveryPointTierInformation](#recoverypointtierinformation)[]: Recovery point tier information.
* **recoveryPointTime**: string (ReadOnly): Time at which this backup copy was created.
* **recoveryPointType**: string (ReadOnly): Type of the backup copy.
* **sourceVMStorageType**: string (ReadOnly): Storage type of the VM whose backup copy is created.
* **virtualMachineSize**: string: Virtual Machine Size
* **zones**: string[]: Identifies the zone of the VM at the time of backup. Applicable only for zone-pinned Vms


## RecoveryPointDiskConfiguration
### Properties
* **excludedDiskList**: [DiskInformation](#diskinformation)[]: Information of disks excluded from backup
* **includedDiskList**: [DiskInformation](#diskinformation)[]: Information of disks included in backup
* **numberOfDisksAttachedToVm**: int: Number of disks attached to the VM
* **numberOfDisksIncludedInBackup**: int: Number of disks included in backup

## RecoveryPointMoveReadinessInfo
### Properties
* **additionalInfo**: string
* **isReadyForMove**: bool

## RecoveryPointProperties
### Properties
* **expiryTime**: string: Expiry time of Recovery Point in UTC.
* **isSoftDeleted**: bool: Bool to indicate whether RP is in soft delete state or not
* **ruleName**: string: Rule name tagged on Recovery Point that governs life cycle

## RecoveryPointTierInformation
### Properties
* **extendedInfo**: [RecoveryPointTierInformationExtendedInfo](#recoverypointtierinformationextendedinfo): Recovery point tier status.
* **status**: 'Deleted' | 'Disabled' | 'Invalid' | 'Rehydrated' | 'Valid': Recovery point tier status.
* **type**: 'ArchivedRP' | 'HardenedRP' | 'InstantRP' | 'Invalid': Recovery point tier type.

## RecoveryPointTierInformationExtendedInfo
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SQLDataDirectory
### Properties
* **logicalName**: string: Logical name of the file
* **path**: string: File path
* **type**: 'Data' | 'Invalid' | 'Log' | string: Type of data directory mapping

