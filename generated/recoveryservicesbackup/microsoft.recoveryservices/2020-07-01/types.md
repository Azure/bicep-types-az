# Microsoft.RecoveryServices @ 2020-07-01

## Function prepareDataMove (Microsoft.RecoveryServices/vaults/backupstorageconfig@2020-07-01)
* **Resource**: Microsoft.RecoveryServices/vaults/backupstorageconfig
* **ApiVersion**: 2020-07-01
* **Input**: [PrepareDataMoveRequest](#preparedatamoverequest)
* **Output**: any

## Function triggerDataMove (Microsoft.RecoveryServices/vaults/backupstorageconfig@2020-07-01)
* **Resource**: Microsoft.RecoveryServices/vaults/backupstorageconfig
* **ApiVersion**: 2020-07-01
* **Input**: [TriggerDataMoveRequest](#triggerdatamoverequest)
* **Output**: any

## PrepareDataMoveRequest
### Properties
* **dataMoveLevel**: 'Container' | 'Invalid' | 'Vault' | string (Required): DataMove Level
* **ignoreMoved**: bool: Ignore the artifacts which are already moved.
* **sourceContainerArmIds**: string[]: Source Container ArmIds
This needs to be populated only if DataMoveLevel is set to container
* **targetRegion**: string (Required): Target Region
* **targetResourceId**: string (Required): ARM Id of target vault

## TriggerDataMoveRequest
### Properties
* **correlationId**: string (Required): Correlation Id
* **dataMoveLevel**: 'Container' | 'Invalid' | 'Vault' | string (Required): DataMove Level
* **pauseGC**: bool: Pause GC
* **sourceContainerArmIds**: string[]: Source Container ArmIds
* **sourceRegion**: string (Required): Source Region
* **sourceResourceId**: string (Required): ARM Id of source vault

