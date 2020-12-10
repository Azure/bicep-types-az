# Microsoft.RecoveryServices @ 2018-12-20

## Microsoft.RecoveryServices/vaults/backupstorageconfig
### Properties
* **apiVersion**: '2018-12-20' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: BackupResourceConfig
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.RecoveryServices/vaults/backupstorageconfig' (ReadOnly, DeployTimeConstant)

## BackupResourceConfig
### Properties
* **crossRegionRestoreFlag**: bool
* **storageModelType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant' | 'ReadAccessGeoZoneRedundant' | 'ZoneRedundant'
* **storageType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant' | 'ReadAccessGeoZoneRedundant' | 'ZoneRedundant'
* **storageTypeState**: 'Invalid' | 'Locked' | 'Unlocked'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

