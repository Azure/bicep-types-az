# Microsoft.Migrate @ 2026-06-01-preview

## Resource Microsoft.Migrate/migrateProjects/migrationEntities@2026-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MigrationEntityProperties](#migrationentityproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/migrateProjects/migrationEntities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/migrateProjects/migrationEntityGroups@2026-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MigrationEntityGroupProperties](#migrationentitygroupproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/migrateProjects/migrationEntityGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/migrateProjects/tasks@2026-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TaskProperties](#taskproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/migrateProjects/tasks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/migrateProjects/waves@2026-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WaveProperties](#waveproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/migrateProjects/waves' (ReadOnly, DeployTimeConstant): The resource type

## Function createWavesFromPlan (Microsoft.Migrate/migrateProjects@2026-06-01-preview)
* **Resource**: Microsoft.Migrate/migrateProjects
* **ApiVersion**: 2026-06-01-preview
* **Input**: [CreateWavesFromPlanRequest](#createwavesfromplanrequest)
* **Output**: [CreateWavesFromPlanResponse](#createwavesfromplanresponse)

## Function fetchSASUri (Microsoft.Migrate/migrateProjects@2026-06-01-preview)
* **Resource**: Microsoft.Migrate/migrateProjects
* **ApiVersion**: 2026-06-01-preview
* **Input**: [FetchSasUriRequest](#fetchsasurirequest)
* **Output**: [FetchSasUriResponse](#fetchsasuriresponse)

## Function generateWavePlan (Microsoft.Migrate/migrateProjects@2026-06-01-preview)
* **Resource**: Microsoft.Migrate/migrateProjects
* **ApiVersion**: 2026-06-01-preview
* **Input**: [GenerateWavePlanRequest](#generatewaveplanrequest)
* **Output**: [GenerateWavePlanResponse](#generatewaveplanresponse)

## Function getWavePlans (Microsoft.Migrate/migrateProjects@2026-06-01-preview)
* **Resource**: Microsoft.Migrate/migrateProjects
* **ApiVersion**: 2026-06-01-preview
* **Input**: [GetWavePlansRequest](#getwaveplansrequest)
* **Output**: [GetWavePlansResponse](#getwaveplansresponse)

## Function importWavePlan (Microsoft.Migrate/migrateProjects@2026-06-01-preview)
* **Resource**: Microsoft.Migrate/migrateProjects
* **ApiVersion**: 2026-06-01-preview
* **Input**: [ImportWavePlanRequest](#importwaveplanrequest)
* **Output**: [ImportWavePlanResponse](#importwaveplanresponse)

## Function refresh (Microsoft.Migrate/migrateProjects/waves@2026-06-01-preview)
* **Resource**: Microsoft.Migrate/migrateProjects/waves
* **ApiVersion**: 2026-06-01-preview
* **Output**: [WaveProperties](#waveproperties)

## Function refreshEntities (Microsoft.Migrate/migrateProjects@2026-06-01-preview)
* **Resource**: Microsoft.Migrate/migrateProjects
* **ApiVersion**: 2026-06-01-preview
* **Input**: [RefreshEntitiesRequest](#refreshentitiesrequest)
* **Output**: [RefreshEntitiesResponse](#refreshentitiesresponse)

## Function taskSummary (Microsoft.Migrate/migrateProjects@2026-06-01-preview)
* **Resource**: Microsoft.Migrate/migrateProjects
* **ApiVersion**: 2026-06-01-preview
* **Input**: [TaskSummaryRequest](#tasksummaryrequest)
* **Output**: [TaskSummaryResponse](#tasksummaryresponse)

## Arg
### Properties
* **query**: string (Required): The query to create workloads within the wave.

## ArtifactProperties
### Properties
* **artifactId**: string (Required, ReadOnly): The ARM id of the Artifact Store artifact the run's files are committed under.
* **versionId**: string (Required, ReadOnly): The Artifact Store version id for the run's committed files.

## CreateWavesFromPlanRequest
### Properties
* **assessmentArmId**: string (Required): The assessment ARM ID to capture migration preference, saving and scope.
* **migrationPath**: string (Required): The migration path preference.
* **waveSelection**: [WaveSelectionItem](#waveselectionitem)[]: The wave selection list. If null or empty, all waves from the wave plan will be included.

## CreateWavesFromPlanResponse
### Properties
* **expirationTime**: string (ReadOnly): The expiry timestamp (UTC) for the error CSV SAS URI.
* **failedWaves**: int (Required, ReadOnly): The count of failed wave creations.
* **sasUri**: string (ReadOnly): The read-only SAS URI for the exported error CSV.
* **skippedWaves**: int (Required, ReadOnly): The count of skipped waves.
* **succeededWaves**: int (Required, ReadOnly): The count of successfully created waves.
* **totalWaves**: int (Required, ReadOnly): The total number of waves in the wave plan.

## FetchSasUriRequest
### Properties
* **assessmentArmId**: string (Required): The assessment ARM ID identifying the wave plan to amend.
* **migrationPath**: string (Required): The migration path identifying the wave plan to amend.
* **sasVersionId**: string: An optional caller-supplied SAS version ID folded into the deterministic staging blob name so concurrent upload sessions stage to distinct blobs.

## FetchSasUriResponse
### Properties
* **expirationTime**: string (Required, ReadOnly): The UTC expiration timestamp of the returned SAS URI.
* **sasUri**: string (Required, ReadOnly): The write-targeted SAS URI to which the caller should PUT the CSV payload.

## GenerateWavePlanRequest
### Properties
* **assessmentArmId**: string: ARM Id of the assessment for which the wave plan report is to be generated.
* **migrationPath**: string: Optional. Specify the migration path for which the wave plan report is to be generated. If not specified, the default will be used

## GenerateWavePlanResponse
### Properties
* **artifactProperties**: [ArtifactProperties](#artifactproperties) (Required, ReadOnly): The Artifact Store identity (artifactId, versionId) this run's files are committed under, used to resolve time-bound download access.
* **assessmentArmId**: string (Required, ReadOnly): The assessment ARM ID this plan was generated for.
* **migrationPath**: string (Required, ReadOnly): The canonical migration-path string this plan was generated for.
* **planSource**: 'Imported' | 'SystemGenerated' | string (Required, ReadOnly): The plan source (SystemGenerated for all generated runs).
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (Required, ReadOnly): The provisioning state of the persisted wave-plan row.
* **summary**: [WavePlanSummary](#waveplansummary) (ReadOnly): The plan-level summary (number of waves, risk, confidence).
* **wavePlanName**: string (Required, ReadOnly): The deterministic wave-plan resource name matching the persisted row's wavePlanName.

## GetWavePlansRequest
### Properties
* **assessmentArmId**: string (Required): The assessment ARM ID to scope the listing to.
* **migrationPath**: string: The optional migration path filter. When omitted, plans across all migration paths are returned.

## GetWavePlansResponse
### Properties
* **value**: [WavePlanListItem](#waveplanlistitem)[] (Required): The wave plan list items. Always present; empty when no plans match the filter.

## ImportWavePlanRequest
### Properties
* **assessmentArmId**: string (Required): The assessment ARM ID to scope the import to.
* **migrationPath**: string (Required): The migration path identifying the existing wave plan being amended.
* **sasVersionId**: string: An optional caller-supplied SAS version ID. Must match the value passed to fetchSASUri when the CSV was staged.

## ImportWavePlanResponse
### Properties
* **artifactProperties**: [ArtifactProperties](#artifactproperties) (Required, ReadOnly): The Artifact Store identity (artifactId, versionId) this plan's files are committed under, used to resolve time-bound download access.
* **assessmentArmId**: string (Required, ReadOnly): The assessment ARM identifier the plan belongs to.
* **migrationPath**: string (Required, ReadOnly): The migration path the plan was generated for.
* **planSource**: 'Imported' | 'SystemGenerated' | string (Required, ReadOnly): The source of the plan.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (Required, ReadOnly): The provisioning state of the plan.
* **wavePlanName**: string (Required, ReadOnly): The wave-plan name.

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


## RefreshEntitiesRequest
### Properties
* **migrationEntityGroupIds**: string[]: List of migration entity group ARM IDs. All entities within these groups will be refreshed. Each ID must be a fully qualified ARM resource ID belonging to the same subscription and resource group as the migrate project.
* **migrationEntityIds**: string[]: List of migration entity ARM IDs to refresh. Each ID must be a fully qualified ARM resource ID belonging to the same subscription and resource group as the migrate project.

## RefreshEntitiesResponse
### Properties
* **migrationEntityGroupIds**: string[] (ReadOnly): List of migration entity group ARM IDs being refreshed.
* **migrationEntityIds**: string[] (ReadOnly): List of migration entity ARM IDs being refreshed.

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

## WavePlanListItem
### Properties
* **artifactProperties**: [ArtifactProperties](#artifactproperties) (Required, ReadOnly): The Artifact Store identity (artifactId, versionId) this plan's files are committed under, used to resolve time-bound download access.
* **assessmentArmId**: string (Required, ReadOnly): The assessment ARM identifier the plan belongs to.
* **migrationPath**: string (Required, ReadOnly): The migration path the plan was generated for.
* **planSource**: 'Imported' | 'SystemGenerated' | string (Required, ReadOnly): The source of the plan.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (Required, ReadOnly): The provisioning state of the plan.
* **summary**: [WavePlanSummary](#waveplansummary) (ReadOnly): The plan-level summary (number of waves, risk, confidence).
* **wavePlanName**: string (Required, ReadOnly): The wave-plan name.

## WavePlanSummary
### Properties
* **confidence**: string (Required, ReadOnly): The plan-level overall confidence label (Low/Medium/High).
* **numberOfWaves**: int (Required, ReadOnly): The total number of waves in the plan.
* **risk**: string (Required, ReadOnly): The plan-level overall risk bucket (Low/Medium/High).

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

## WaveSelectionItem
### Properties
* **waveDisplayName**: string: Optional friendly name used during wave creation.
* **waveName**: string (Required): The ARM-compliant wave resource name used to create the wave.

