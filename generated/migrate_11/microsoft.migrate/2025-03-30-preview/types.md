# Microsoft.Migrate @ 2025-03-30-preview

## Resource Microsoft.Migrate/migrateProjects/migrationEntities@2025-03-30-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-03-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MigrationEntityProperties](#migrationentityproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/migrateProjects/migrationEntities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/migrateProjects/migrationEntityGroups@2025-03-30-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-03-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MigrationEntityGroupProperties](#migrationentitygroupproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/migrateProjects/migrationEntityGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/migrateProjects/tasks@2025-03-30-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-03-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TaskProperties](#taskproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/migrateProjects/tasks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/migrateProjects/waves@2025-03-30-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-03-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WaveProperties](#waveproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/migrateProjects/waves' (ReadOnly, DeployTimeConstant): The resource type

## Function refresh (Microsoft.Migrate/migrateProjects/waves@2025-03-30-preview)
* **Resource**: Microsoft.Migrate/migrateProjects/waves
* **ApiVersion**: 2025-03-30-preview
* **Output**: [WaveProperties](#waveproperties)

## Function taskSummary (Microsoft.Migrate/migrateProjects@2025-03-30-preview)
* **Resource**: Microsoft.Migrate/migrateProjects
* **ApiVersion**: 2025-03-30-preview
* **Input**: [TaskSummaryRequest](#tasksummaryrequest)
* **Output**: [TaskSummaryResponse](#tasksummaryresponse)

## Arg
### Properties
* **query**: string (Required): The query to create workloads within the wave.

## MigrationEntityGroupProperties
### Properties
* **applicationDisplayName**: string (Required): Display Name of the Workload.
* **applicationId**: string (Required): Application id
* **associatedAssessmentId**: string: Associated Assessment Id
* **associatedWaveIds**: string[]: associated Wave Id
* **executionStartDate**: string (ReadOnly): Execution Start Date
* **executionStatus**: string (ReadOnly): Migration Entity Group Status
* **migrationPath**: string: Migration path
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

## MigrationEntityProperties
### Properties
* **assessedEntityArmId**: string: Assessed Entity ARM Id
* **associatedAssessmentId**: string: Associated Assessment Id
* **associatedInventoryResourceId**: string (Required): inventory resource id
* **associatedMigrationEntityGroupIds**: string[]: associated Migration Entity Group Id
* **associatedWaveId**: string: associated Wave Id
* **executionReadiness**: string (ReadOnly): Execution Readiness of Migration Entity.
* **executionStage**: string (ReadOnly): Execution Stage of Migration Entity.
* **executionStartDate**: string (ReadOnly): Execution start date for Migration Entity.
* **executionStatus**: string (ReadOnly): Execution Status of Migration Entity.
* **inventoryDisplayName**: string (Required): Display Name of the Workload.
* **migrationPath**: string: Migration path
* **migrationSpecificProperties**: [MigrationSpecificPropertiesBase](#migrationspecificpropertiesbase): Migration specific properties for the entity.
* **migrationStrategy**: 'None' | 'Rearchitect' | 'Rebuild' | 'Refactor' | 'Rehost' | 'Replace' | 'Replatform' | 'Retain' | 'Retire' | string (ReadOnly): Strategy of Migration Entity.
* **migrationTool**: string: Migration Tool of the Migration Entity.
* **partnerResourceArmId**: string: ARM Resource Identifier for the partner resource.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **target**: string: Target of the Migration Entity.
* **targetAzureResourceArmId**: string: target Azure Resource ARM Id.

## MigrationSpecificPropertiesBase
* **Discriminator**: instanceType

### Base Properties

### ServerMigrationSpecificProperties
#### Properties
* **currentJobId**: string: A type definition that refers the id to an Azure Resource Manager resource.
* **drApplianceInventoryId**: string: A type definition that refers the id to an Azure Resource Manager resource.
* **instanceType**: 'ServerMigration' (Required): Discriminator for migration specific properties.


## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## Task
### Properties
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [TaskProperties](#taskproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## TaskProperties
### Properties
* **completionDate**: string (ReadOnly): Task completion Date
* **description**: string: Task Description
* **displayName**: string (Required): Task Dislay Name
* **isEditable**: bool (Required, ReadOnly): Indicates whether the task is editable.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **scope**: 'MigrationEntity' | 'MigrationEntityGroup' | 'Wave' | string (Required): Task Scope
* **scopeId**: string (Required): associated Wave Id
* **stage**: string: Task Stage
* **status**: string (Required): Task Status
* **taskType**: 'SystemDefined' | 'UserDefined' | string (Required, ReadOnly): Task Type

## TaskStatusCountMap
### Properties
* **count**: int (Required): The count of tasks with this status.
* **status**: string (Required): The task status.

## TaskStatusCounts
### Properties
* **statusCounts**: [TaskStatusCountMap](#taskstatuscountmap)[] (Required): Status counts dictionary mapping TaskStatus to the count of tasks with that status.

## TaskSummaryItem
### Properties
* **aggregatedStatus**: string (Required): Aggregated status of tasks in this stage.
* **stage**: string (Required): Task Stage
* **statusCounts**: [TaskStatusCounts](#taskstatuscounts) (Required): Counts of tasks in this stage by status.
* **tasks**: [Task](#task)[] (Required): List of tasks in this stage.

## TaskSummaryRequest
### Properties
* **scopeId**: string (Required): Task Scope ARM Id

## TaskSummaryResponse
### Properties
* **items**: [TaskSummaryItem](#tasksummaryitem)[] (Required): List of Task Summary Items

## WaveProperties
### Properties
* **actualStartDate**: string (ReadOnly): Actual start date of the wave.
* **arg**: [Arg](#arg) (Required): ARG query and other details to create workloads within a wave
* **description**: string: Description of the wave.
* **displayName**: string (Required): Display Name of the wave.
* **plannedCompletionDate**: string: Planned completion date of the wave.
* **plannedStartDate**: string (Required): Planned start date of the wave.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **stage**: string (ReadOnly): The current stage of the wave.
* **status**: string (ReadOnly): The status of the wave.

