# Microsoft.AlertsManagement @ 2021-01-01-preview

## Function migrateFromSmartDetection (Microsoft.AlertsManagement@2021-01-01-preview)
* **Resource**: Microsoft.AlertsManagement
* **ApiVersion**: 2021-01-01-preview
* **Input**: [SmartDetectionMigrationRequest](#smartdetectionmigrationrequest)
* **Output**: [MigrationStatusResponse](#migrationstatusresponse)

## MigrationStatusResponse
### Properties
* **id**: string (ReadOnly): The migration resource identifier.
* **name**: string (ReadOnly): The migration process name.
* **properties**: [MigrationStatusResponseProperties](#migrationstatusresponseproperties): The details of the migration response
* **type**: string (ReadOnly): Type of resource. "Microsoft.AlertsManagement/migrateFromSmartDetection"

## MigrationStatusResponseProperties
### Properties
* **armDeploymentName**: string: The name of the ARM deployment associated with the migration process.
* **migrationId**: string (Required): The migration process unique id.
* **scope**: string[] (Required): The list of resource IDs that the requested migration should be performed on.
* **status**: 'Canceled' | 'Completed' | 'Deploying' | 'Failed' | 'InProcess' | 'Starting' | string (Required): The current status of the migration process

## SmartDetectionMigrationRequest
### Properties
* **actionGroupCreationPolicy**: 'Auto' | 'Custom' | string: The policy for migrating the email settings in the Smart Detection Rules into action groups. If not specified, 'Auto' policy is used.
* **customActionGroupName**: string: A custom name of an existing action group to attach to the created alert rules. Required only when actionGroupCreationPolicy is set to 'Custom'.
* **scope**: string[] (Required): The list of resource IDs that the requested migration should be performed on.

