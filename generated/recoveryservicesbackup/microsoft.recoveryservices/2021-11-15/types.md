# Microsoft.RecoveryServices @ 2021-11-15

## Resource Microsoft.RecoveryServices/vaults/backupstorageconfig@2021-11-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-15' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: 'vaultstorageconfig' (Required, DeployTimeConstant): The resource name
* **properties**: [BackupResourceConfig](#backupresourceconfig): The resource storage details.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupstorageconfig' (ReadOnly, DeployTimeConstant): The resource type

## BackupResourceConfig
### Properties
* **crossRegionRestoreFlag**: bool: Opt in details of Cross Region Restore feature.
* **storageModelType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant' | 'ReadAccessGeoZoneRedundant' | 'ZoneRedundant': Storage type
* **storageType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant' | 'ReadAccessGeoZoneRedundant' | 'ZoneRedundant': Storage type
* **storageTypeState**: 'Invalid' | 'Locked' | 'Unlocked': Locked or Unlocked. Once a machine is registered against a resource, the storageTypeState is always Locked.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string
