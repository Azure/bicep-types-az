# Microsoft.Compute.Admin @ 2018-07-30-preview

## Resource Microsoft.Compute.Admin/locations/diskmigrationjobs@2018-07-30-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2018-07-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiskMigrationJobProperties](#diskmigrationjobproperties) (ReadOnly): Disk migration job properties.
* **type**: 'Microsoft.Compute.Admin/locations/diskmigrationjobs' (ReadOnly, DeployTimeConstant): The resource type

## DiskMigrationJobProperties
### Properties
* **creationTime**: string (ReadOnly): The job creation time.
* **endTime**: string (ReadOnly): The job end time.
* **migrationId**: string (ReadOnly): The disk migration id.
* **startTime**: string (ReadOnly): The job start time.
* **status**: 'Canceled' | 'Failed' | 'Pending' | 'Running' | 'Succeeded' | 'Undefined' (ReadOnly): The current status of disk migration job.
* **subtasks**: [MigrationSubTask](#migrationsubtask)[] (ReadOnly): List of disk migration tasks.
* **targetShare**: string (ReadOnly): The target share of migration job.

## MigrationSubTask
### Properties
* **migrationSubTaskId**: string (ReadOnly): The id of migration child task.
* **properties**: [MigrationSubTaskProperties](#migrationsubtaskproperties) (ReadOnly): Disk migration child task properties.

## MigrationSubTaskProperties
### Properties
* **diskId**: string (ReadOnly): The id of disk.
* **endTime**: string (ReadOnly): The task end time.
* **migrationSubtaskStatus**: 'Canceled' | 'Failed' | 'Pending' | 'Running' | 'Skipped' | 'Succeeded' | 'Undefined' (ReadOnly): The disk migration child task status.
* **reason**: string (ReadOnly): The reason of task failure.
* **sourceShare**: string (ReadOnly): The source share of migration task.
* **startTime**: string (ReadOnly): The task start time.
* **targetDiskStateForMigration**: 'ActiveSAS' | 'All' | 'Attached' | 'OfflineMigration' | 'OnlineMigration' | 'Recommended' | 'Reserved' | 'Unattached' | 'Undefined' | 'Unknown' (ReadOnly): The disk status.
* **targetShare**: string (ReadOnly): The target share of migration task.

