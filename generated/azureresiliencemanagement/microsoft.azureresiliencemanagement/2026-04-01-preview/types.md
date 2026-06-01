# Microsoft.AzureResilienceManagement @ 2026-04-01-preview

## Resource Microsoft.AzureResilienceManagement/drills@2026-04-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2026-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DrillProperties](#drillproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureResilienceManagement/drills' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureResilienceManagement/drills/drillResources@2026-04-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DrillResourceProperties](#drillresourceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureResilienceManagement/drills/drillResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureResilienceManagement/drills/drillRuns@2026-04-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DrillRunProperties](#drillrunproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureResilienceManagement/drills/drillRuns' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureResilienceManagement/drills/drillRuns/drillRunResources@2026-04-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DrillRunResourceProperties](#drillrunresourceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureResilienceManagement/drills/drillRuns/drillRunResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureResilienceManagement/goalAssignments@2026-04-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2026-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GoalAssignmentProperties](#goalassignmentproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureResilienceManagement/goalAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureResilienceManagement/goalAssignments/goalResources@2026-04-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GoalResourceProperties](#goalresourceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureResilienceManagement/goalAssignments/goalResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureResilienceManagement/goalTemplates@2026-04-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2026-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GoalTemplateProperties](#goaltemplateproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureResilienceManagement/goalTemplates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureResilienceManagement/recoveryPlans@2026-04-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2026-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **name**: string {pattern: "^[a-zA-Z0-9-]{5,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RecoveryPlanProperties](#recoveryplanproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureResilienceManagement/recoveryPlans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureResilienceManagement/recoveryPlans/recoveryJobs@2026-04-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RecoveryJobProperties](#recoveryjobproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureResilienceManagement/recoveryPlans/recoveryJobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureResilienceManagement/recoveryPlans/recoveryJobs/recoveryJobResources@2026-04-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RecoveryJobResourceProperties](#recoveryjobresourceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureResilienceManagement/recoveryPlans/recoveryJobs/recoveryJobResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureResilienceManagement/recoveryPlans/recoveryResources@2026-04-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RecoveryResourceProperties](#recoveryresourceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureResilienceManagement/recoveryPlans/recoveryResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureResilienceManagement/unifiedResilienceItems@2026-04-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [UnifiedResilienceItemProperties](#unifiedresilienceitemproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureResilienceManagement/unifiedResilienceItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureResilienceManagement/usagePlans@2026-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [UsagePlanProperties](#usageplanproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureResilienceManagement/usagePlans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureResilienceManagement/usagePlans/enrollments@2026-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EnrollmentProperties](#enrollmentproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureResilienceManagement/usagePlans/enrollments' (ReadOnly, DeployTimeConstant): The resource type

## AssetPropertiesOfDrill
### Properties
* **region**: string (Required): Region where Drill's internal resources will be created.
* **resourceGroup**: string {minLength: 1, maxLength: 90, pattern: "^[-\w\._\(\)]+$"}: Resource group where Drill's internal resources will be created. If not specified, defaults to 'AzureResilienceManagementDrills'. This value is immutable after drill creation.
* **subscription**: string (Required): Subscription where Drill's internal resources will be created.

## AssociatedIdentity
### Properties
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Identity type linked with the resource
* **userAssignedIdentity**: string: User assigned identity id linked with the resource

## AttentionReason
### Properties
* **chaosResource**: 'Exists' | 'NotExists' | string: Chaos resource for faulting exists or not.
* **chaosResourceCreationFailureReasons**: string[]: Reason for Chaos Resource Creation failure
* **chaosResourceUserMsi**: 'Exists' | 'NotExists' | string: User MSI associated with chaos resource object is deleted.
* **drillMonitoringErrors**: [ErrorDetails](#errordetails)[]: Errors related to Drill Monitoring resources.
* **drillMonitoringResources**: 'Exists' | 'NotExists' | string (ReadOnly): Monitoring Resources created for Drill
* **drillRbacOnChaosResource**: 'NotSet' | 'Set' | string: Drill object does not have the necessary RBAC to run the chaos resource.
* **drillRbacOnMonitoringResources**: 'NotSet' | 'Set' | string: Drill MSI does not have the necessary RBAC to read the Drill Monitoring resources.
* **drillRbacOnRecoveryPlan**: 'NotSet' | 'Set' | string: Drill object does not have the necessary RBAC to run the Recovery Plan.
* **drillUserMsi**: 'Exists' | 'NotExists' | string: User MSI associated with Drill object is deleted.
* **includedResourceInDrill**: 'Exists' | 'NotExists' | string: Included resource in Drill.
* **missingRequiredResourceProviders**: string[]: List of required required Azure resource providers that are not registered in the subscription specified for chaos resource.
* **monitoringRbacOnDrillResources**: 'NotSet' | 'Set' | string: Monitoring RBAC required by Drill MSI not setup on the target resources.
* **rbacNeededForDrillOnChaosResource**: string[]: Permissions needed by the Drill MSI to run the chaos resource.
* **rbacNeededForDrillOnDrillMonitoringResources**: string[]: Permissions needed by the Drill MSI to Upload service group health data for monitoring.
* **rbacNeededForDrillOnDrillResources**: string[]: Permissions needed by the Drill MSI to read health metrics data for resources in service group.
* **rbacNeededForDrillOnRecoveryPlan**: string[]: Permissions needed by the Drill MSI to run the Recovery Plan.
* **rbacOnTargetResources**: 'NotSet' | 'Set' | string: RBAC required by Chaos Resource MSI not setup on the target resources.
* **recoveryPlanAndDrillResourcesState**: 'InSync' | 'OutOfSync' | string: Resources associated in Recovery Plan and Drill are out of sync.
* **roReadiness**: 'Ready' | 'UnderEdit' | 'Warning' | string: Associated RO ready or not.
* **runbookFaultRbacOnTargets**: 'NotSet' | 'Set' | string: RBAC required by AutomationAccount for runbook MSI not setup on the target resources.
* **serviceGroupAndDrillResourcesState**: 'InSync' | 'OutOfSync' | string: Resources in Service Group and Drill are out of sync.

## ChaosResourcePropertiesOfDrill
### Properties
* **chaosResourceId**: string (ReadOnly): Chaos Resource created for this Drill
* **chaosResourceIdentityForFaults**: [AssociatedIdentity](#associatedidentity) (Required): Identity to be used by the Chaos Resource for invoking faults on resources.
* **faultDurationInMin**: int {minValue: 0} (ReadOnly): Duration of faults.
* **identity**: [AssociatedIdentity](#associatedidentity) (Required): Identity to use for Chaos Resource operations.

## CustomFaultDetails
### Properties
* **faultName**: string {minLength: 3, maxLength: 100} (Required): fault name
* **scriptResourceId**: string (Required): ID of ARM resource used for automation (e.g. Automation runbook URL).

## DiskReprotectInputDetails
### Properties
* **diskResourceId**: string: Disk Resource Id to Reprotect
* **stagingStorageAccountResourceId**: string: The staging StorageAccount Resource Id.

## DrillProperties
* **Discriminator**: drillType

### Base Properties
* **attentionReason**: [AttentionReason](#attentionreason) (ReadOnly): Attention reason if the ReadinessState is 'NeedsAttention'.
* **chaosResourceProperties**: [ChaosResourcePropertiesOfDrill](#chaosresourcepropertiesofdrill): Chaos Resource properties.
* **drillAssetProperties**: [AssetPropertiesOfDrill](#assetpropertiesofdrill): Properties for internal resources that are created for the Drill.
* **errorDetails**: [ErrorDetail](#errordetail) (ReadOnly): Error details associated with the resource.
* **executionReadinessState**: 'NeedsAttention' | 'Ready' | string (ReadOnly): Readiness state of the Drill.
* **executionState**: 'NotRunning' | 'Paused' | 'Running' | string (ReadOnly): Execution state of the Drill. Whether it is currently running or not.
* **lastResyncReadinessCheckTime**: string (ReadOnly): Last resync and readiness check time.
* **lastRunProperties**: [LastRunProperties](#lastrunproperties) (ReadOnly): Last run properties.
* **lastSyncTime**: string (ReadOnly): Last sync time.
* **managedOnBehalfOfConfiguration**: [ManagedOnBehalfOfConfiguration](#managedonbehalfofconfiguration) (ReadOnly): Managed RG v2 properties.
* **monitoringProperties**: [MonitoringPropertiesOfDrill](#monitoringpropertiesofdrill): Monitoring properties of the Drill.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Status of the last operation.
* **rbacSetupMode**: 'AutomatedBuiltinRoles' | 'AutomatedCustomRole' | 'Manual' | string: RBAC setup mode.
* **recoveryPlanProperties**: [RecoveryPlanPropertiesOfDrill](#recoveryplanpropertiesofdrill): ROPlan properties.
* **serviceGroupId**: string (ReadOnly): Parent SG resource.
* **systemMetadata**: [SystemMetadata](#systemmetadata) (ReadOnly): Internal System Metadata, to be used by internal components only.

### RegionalDrillProperties
#### Properties
* **drillType**: 'Regional' (Required): The discriminator for the Drill object hierarchy.

### ZonalDrillProperties
#### Properties
* **drillType**: 'Zonal' (Required): The discriminator for the Drill object hierarchy.
* **vmsPresent**: 'Absent' | 'Present' | string (ReadOnly): An indication whether a VM is included in this Zonal Drill. If not, RO is not needed.


## DrillResourceAttentionReason
### Properties
* **faultRbacOnTargetResource**: 'NotSet' | 'Set' | string: Chaos Resource MSI does not have the desired RBAC on the resource.
* **monitoringRbacOnTargets**: 'NotSet' | 'Set' | string: RBAC required by Drill MSI on the target resource for monitoring.
* **resourceState**: ('InDrillNotInRecoveryPlan' | 'InDrillNotInServiceGroup' | 'InRecoveryPlanNotInDrill' | 'InServiceGroupNotInDrill' | 'ResourceStateIncompatibleWithFault' | string)[]: Drill Resource State (wrt SG and RO).
* **runbookFaultRbacOnTargets**: 'NotSet' | 'Set' | string: RBAC required by AutomationAccount for runbook MSI not setup on the target resources.

## DrillResourceProperties
### Properties
* **activeLocations**: string[] (ReadOnly): Active location and zones of the Azure resource.
* **activePhysicalZones**: string[] (ReadOnly): Active Resource location and physical zones of Azure Resource.
* **advisorHaRecommendationId**: string (ReadOnly): Associated Advisor Recommendation link, if HA is not enabled on this resource.
* **advisorRecommendationTypeId**: string (ReadOnly): Recommendation Type Id for the recommendation.
* **attentionReason**: [DrillResourceAttentionReason](#drillresourceattentionreason) (ReadOnly): Attention reason if the Status is 'NeedsAttention'.
* **faultProperties**: [FaultProperties](#faultproperties) (ReadOnly): Fault Properties
* **faultState**: 'CustomScript' | 'NotDefined' | 'SystemNative' | string (ReadOnly): Fault State of the Drill resource
* **forceInclusionState**: 'Disable' | 'Enable' | string (ReadOnly): ForceInclusion status for this resource. Has the customer forceIncluded it?
* **haStatus**: 'Enabled' | 'NotEnabled' | string (ReadOnly): HA status of the Drill resource
* **inclusionState**: 'Excluded' | 'Included' | string: Inclusion State of the Drill resource in Drill
* **monitoringRbacAssignmentError**: [ErrorDetails](#errordetails) (ReadOnly): Monitoring RBAC assignment error, if any.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state
* **rbacAssignmentError**: [ErrorDetails](#errordetails) (ReadOnly): Last RBAC assignment error, if any.
* **readinessState**: 'NeedsAttention' | 'Ready' | string (ReadOnly): Readiness State of the Drill resource
* **recoveryLocations**: string[] (ReadOnly): List of recovery locations and zones of the Azure resource.
* **recoveryPhysicalZones**: string[] (ReadOnly): Recovery Resource location and physical zones of HA Azure Resource.
* **recoveryPlanExclusionReason**: 'ExcludedFromRecoveryPlan' | 'ProtectionStatus' | string (ReadOnly): Exclusion reason of the Drill resource in Recovery Plan
* **recoveryPlanInclusionState**: 'Excluded' | 'Included' | string (ReadOnly): Inclusion State of the Drill resource in Recovery Plan
* **resourceId**: string (Required): ARM Id of the underlying resource.
* **resourceProtectionSolutionType**: 'AzureNative' | 'AzureSiteRecovery' | 'CrossZoneVMRecovery' | 'CustomRunbook' | 'None' | string (ReadOnly): Protection Solution Type of the Drill resource
* **resourceType**: string (Required): Type of the Drill resource.

## DrillRunProperties
### Properties
* **attestation**: 'Failed' | 'Success' | string (ReadOnly): Attestation of this Drill Run.
* **currentActiveOperationId**: string (ReadOnly): The currently active operationID on this Drill Run. There can be only one active.
* **drillId**: string (ReadOnly): Parent Drill resource.
* **drillMode**: 'Failover' | string (ReadOnly): Drill mode.
* **duration**: string (ReadOnly): The time elapsed during the execution of this job.
* **endTime**: string (ReadOnly): The end time of the job execution.
* **errorDetails**: [JobErrorInfo](#joberrorinfo): Details of any errors that occurred during the execution of this job.
* **executionConfigurations**: [ExecutionConfigurations](#executionconfigurations) (ReadOnly): Execution configurations for the job.
* **jobExtendedInfo**: [JobExtendedInfo](#jobextendedinfo): Additional information about the job.
* **jobType**: 'DrillRun' | 'Invalid' | 'RecoveryPlan' | string (Required, ReadOnly): The type of job.
* **notes**: string[] (ReadOnly): Notes for this Drill.
* **operation**: string (ReadOnly): The operation that this job is intended to perform.
* **resourceId**: string (ReadOnly): The resource for which this job was created. This is typically the resource that the job is intended to manage or operate on.
* **retryDetails**: [JobRetryDetails](#jobretrydetails)[]: Details of any retries that have been attempted for this job.
* **startTime**: string (ReadOnly): The start time of the job execution.
* **status**: 'Cancelled' | 'Cancelling' | 'Completed' | 'CompletedWithWarnings' | 'Failed' | 'InProgress' | 'NotApplicable' | 'NotStarted' | 'Paused' | 'Pending' | 'Skipped' | string (ReadOnly): The current status of the job execution.
* **supportedVerbsForStage**: [SupportedVerbsForStage](#supportedverbsforstage)[] (ReadOnly): Matrix of Actions supported on Operations.
* **triggeredBy**: 'System' | 'User' | string (ReadOnly): Indicates whether the job was triggered by the system or a user.
* **userComments**: [JobUserComment](#jobusercomment)[] (ReadOnly): User Comments.

## DrillRunResourceProperties
### Properties
* **duration**: string (ReadOnly): The time elapsed during the execution of this job.
* **endTime**: string (ReadOnly): The end time of the job execution.
* **errorDetails**: [JobErrorInfo](#joberrorinfo): Details of any errors that occurred during the execution of this job.
* **jobExtendedInfo**: [JobExtendedInfo](#jobextendedinfo): Additional information about the job.
* **jobId**: string (ReadOnly): Id of the Job under which this job-resource exists.
* **jobResourceType**: 'DrillRun' | 'Invalid' | 'RecoveryPlan' | string (Required): Discriminator for the JobResource object hierarchy.
* **operation**: string (ReadOnly): The operation that this job is intended to perform.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the Drill Run Resource.
* **resourceId**: string (ReadOnly): The resource for which this job was created. This is typically the resource that the job is intended to manage or operate on.
* **retryDetails**: [JobRetryDetails](#jobretrydetails)[]: Details of any retries that have been attempted for this job.
* **startTime**: string (ReadOnly): The start time of the job execution.
* **status**: 'Cancelled' | 'Cancelling' | 'Completed' | 'CompletedWithWarnings' | 'Failed' | 'InProgress' | 'NotApplicable' | 'NotStarted' | 'Paused' | 'Pending' | 'Skipped' | string (ReadOnly): The current status of the job execution.
* **taskId**: string (ReadOnly): Id of the job-task to which this job resource is associated.
* **taskName**: string (ReadOnly): Friendly name of the job-task to which this job resource is associated.
* **userComments**: [JobUserComment](#jobusercomment)[] (ReadOnly): User Comments.

## EnrollmentProperties
### Properties
* **errorDetails**: [ErrorDetail](#errordetail) (ReadOnly): Details of any errors encountered during Enrollment create or update.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the enrollment.
* **serviceGroupId**: string (Required): ARM resource identifier of the service group associated with this usage plan.

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): The additional info.
* **type**: string (ReadOnly): The additional info type.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## ErrorDetails
### Properties
* **code**: string (Required): Error code.
* **message**: string (Required): Error message.
* **recommendations**: string[]: A list of recommendations to resolve the error.

## ExecutionConfigurations
### Properties
* **userConsent**: 'Allowed' | 'Unspecified' | string (Required): User consent for performing recovery action.

## FaultDetails
### Properties
* **faultName**: string {minLength: 1, maxLength: 100} (Required): fault name
* **faultUrn**: string {minLength: 1} (Required): fault urn.
* **targetResourceId**: string (Required): ARMId of the target resource where fault will be applied. For non-NSG, same as ResourceId. For NSG, its the NSG resource and not the actual resource which is to be simulated for faulting.

## FaultProperties
### Properties
* **availableFaults**: [FaultDetails](#faultdetails)[] (ReadOnly): Available faults for this resource.
* **customFault**: [CustomFaultDetails](#customfaultdetails): Custom Fault Details selected by user
* **defaultFault**: [FaultDetails](#faultdetails) (ReadOnly): Default fault provided by the system.
* **overriddenDefaultFault**: [FaultDetails](#faultdetails): Override fault provided by the user.

## GoalAssignmentProperties
### Properties
* **errorDetails**: [ErrorDetail](#errordetail) (ReadOnly): Details of any errors encountered during the operation.
* **goalAssignmentType**: 'Resiliency' | string (Required): The type of goal assignment.
* **goalTemplateId**: string (Required): Arm id of the goal template.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state
* **serviceLevelResources**: [ServiceLevelResource](#servicelevelresource)[]: List of service level resources.

## GoalResourceProperties
### Properties
* **disasterRecoveryAttestationStatus**: 'ManuallyAttested' | 'NotAttested' | string: Flag which depicts whether the Arm resource is manually attested for disaster recovery recommendation.
* **disasterRecoveryGoalParticipation**: 'Excluded' | 'Included' | string: Flag which depicts whether the Arm resource is excluded for disaster recovery recommendation.
* **exclusionReasonForDisasterRecoveryGoals**: 'FailedOverResource' | 'UnsupportedResource' | 'UserSelectedExclusion' | string (ReadOnly): Reason for exclusion from disaster recovery goals.
* **exclusionReasonForHighAvailabilityGoals**: 'FailedOverResource' | 'UnsupportedResource' | 'UserSelectedExclusion' | string (ReadOnly): Reason for exclusion from high availability goals.
* **highAvailabilityAttestationStatus**: 'ManuallyAttested' | 'NotAttested' | string (Required): Flag which depicts whether the Arm resource is manually attested for high availability recommendation.
* **highAvailabilityGoalParticipation**: 'Excluded' | 'Included' | string (Required): Flag which depicts whether the Arm resource is excluded for high availability recommendation.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state
* **resourceArmId**: string (Required): Arm Id of resource under the SG for which the extension resource is maintained.
* **serviceGroupMemberships**: [ServiceGroupMembership](#servicegroupmembership)[] (ReadOnly): List of service groups of which this resource is memberof.
* **userConfirmationForHighAvailability**: [UserConfirmationForHighAvailabilityItem](#userconfirmationforhighavailabilityitem)[]: List of user confirmations for high availability solutions.

## GoalsData
### Properties
* **assignmentId**: string (Required): Arm id of the goal assignment.
* **regionalRecoveryPointEstimatedInMinutes**: 'PT15M' | 'PT1H' | 'PT24H' | 'PT4H' | string: Computed recovery point estimated for the service group in minutes.
* **regionalRecoveryPointObjectiveInMinutes**: 'PT15M' | 'PT1H' | 'PT24H' | 'PT4H' | string: Regional RPO set in resilience goal in minutes.
* **regionalRecoveryPointObjectiveStatus**: 'Healthy' | 'NotEvaluated' | 'Unhealthy' | string (Required): Regional RPO status of the service group.
* **regionalRecoveryTimeActualInMinutes**: 'PT15M' | 'PT1H' | 'PT24H' | 'PT4H' | string: Computed RTA for the service group in minutes.
* **regionalRecoveryTimeObjectiveInMinutes**: 'PT15M' | 'PT1H' | 'PT24H' | 'PT4H' | string: Regional RTO set in resilience goal in minutes.
* **regionalRecoveryTimeObjectiveStatus**: 'Healthy' | 'NotEvaluated' | 'Unhealthy' | string (Required): Regional RTO status of the service group.
* **requireDisasterRecovery**: 'NotRequired' | 'NotSelected' | 'Required' | string: Whether the resource is required for disaster recovery.
* **requireHighAvailability**: 'NotRequired' | 'NotSelected' | 'Required' | string: Whether the resource is required for high availability.
* **templateId**: string (Required): Arm id of the goal template.

## GoalTemplateProperties
### Properties
* **errorDetails**: [ErrorDetail](#errordetail) (ReadOnly): Details of any errors encountered during the operation.
* **goalType**: 'Resiliency' | string (Required): Type of Goal Template created by customer
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state
* **regionalRecoveryPointObjective**: string: Regional recovery point objective specified by customer. eg, PT15M for 15 minutes
* **regionalRecoveryTimeObjective**: string: Regional recovery time objective specified by customer. eg, PT15M for 15 minutes
* **requireDisasterRecovery**: 'NotRequired' | 'Required' | string: Option specified by customer under disaster recovery section of goal template
* **requireHighAvailability**: 'NotRequired' | 'Required' | string: Option specified by customer under high availability section of goal template

## JobErrorInfo
### Properties
* **errorCode**: string (ReadOnly): A code representing the error.
* **errorMessage**: string (ReadOnly): A detailed message explaining the error.
* **recommendations**: string[] (ReadOnly): A list of recommendations to resolve the error.

## JobExtendedInfo
### Properties
* **dynamicErrorMessage**: string (ReadOnly): Non localized error message on job execution.
* **tasksList**: [JobTaskDetail](#jobtaskdetail)[] (ReadOnly): List of tasks associated with this job.

## JobRetryDetails
### Properties
* **duration**: string (ReadOnly): The time elapsed during the execution of this job.
* **endTime**: string (ReadOnly): The end time of the job execution.
* **errorDetails**: [JobErrorInfo](#joberrorinfo): Details of any errors that occurred during the execution of this job.
* **retryAttempt**: int (Required): The retry attempt number of the job.
* **startTime**: string (ReadOnly): The start time of the job execution.
* **status**: 'Cancelled' | 'Cancelling' | 'Completed' | 'CompletedWithWarnings' | 'Failed' | 'InProgress' | 'NotApplicable' | 'NotStarted' | 'Paused' | 'Pending' | 'Skipped' | string (ReadOnly): The current status of the job execution.
* **userComments**: [JobUserComment](#jobusercomment)[] (ReadOnly): User Comments.

## JobTaskDetail
### Properties
* **duration**: string (ReadOnly): The time elapsed during the execution of this job.
* **endTime**: string (ReadOnly): The end time of the job execution.
* **errorDetails**: [JobErrorInfo](#joberrorinfo): Details of any errors that occurred during the execution of this job.
* **linkedJobIds**: string[] (ReadOnly): Identifiers of linked jobs to this task.
* **retryDetails**: [JobRetryDetails](#jobretrydetails)[] (ReadOnly): Retry details of the task.
* **startTime**: string (ReadOnly): The start time of the job execution.
* **status**: 'Cancelled' | 'Cancelling' | 'Completed' | 'CompletedWithWarnings' | 'Failed' | 'InProgress' | 'NotApplicable' | 'NotStarted' | 'Paused' | 'Pending' | 'Skipped' | string (ReadOnly): The current status of the job execution.
* **subTasksList**: [JobTaskDetail](#jobtaskdetail)[] (ReadOnly): List of sub-tasks associated with this job.
* **taskId**: string (ReadOnly): Identifier of the task.
* **taskName**: string (ReadOnly): Friendly name of the task.
* **userComments**: [JobUserComment](#jobusercomment)[] (ReadOnly): User Comments.

## JobUserComment
### Properties
* **comments**: string (ReadOnly): User Comment
* **commentTime**: string (ReadOnly): The time of user comment.
* **commentType**: 'Description' | 'ResumeReason' | string (ReadOnly): The type of the user comment.

## LastRunProperties
### Properties
* **lastRunAttestation**: 'Failed' | 'Success' | string (ReadOnly): Attestation state of the last run of this Drill.
* **lastRunDuration**: string (ReadOnly): Timespan of the last run of this Drill.
* **lastRunState**: 'Cancelled' | 'Cancelling' | 'Completed' | 'CompletedWithWarnings' | 'Failed' | 'InProgress' | 'NotApplicable' | 'NotStarted' | 'Paused' | 'Pending' | 'Skipped' | string (ReadOnly): Status of the last run of this Drill.
* **lastRunTime**: string (ReadOnly): Timestamp of the last run of this Drill.

## ManagedOnBehalfOfConfiguration
### Properties
* **moboBrokerResources**: [MoboBrokerResource](#mobobrokerresource)[] (ReadOnly): Associated MoboBrokerResources.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## ManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## MoboBrokerResource
### Properties
* **id**: string (ReadOnly): The fully qualified resource ID of the MoboBroker resource.
Example: `/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}`

## MonitoringPropertiesOfDrill
### Properties
* **dataCollectionEndpointId**: string (ReadOnly): Full ARM Id of the Data collection endpoint created by Resiliency service which will route data for service group and its resources.
* **identity**: [AssociatedIdentity](#associatedidentity): Identity to use for Drill monitoring operations.
* **logAnalyticsWorkspaceId**: string (ReadOnly): Full ARM Id of the Log analytics workspace created by Resiliency service where health data is collected.
* **rawMetricsDataCollectionRuleId**: string (ReadOnly): Full ARM Id of the Data collection rule created by Resiliency service which will route data for RAW health data for service group resources.
* **serviceGroupMetricsDataCollectionRuleId**: string (ReadOnly): Full ARM Id of the Data collection rule created by Resiliency service which will route data for Aggregate health data of service group.

## RecommendationsData
### Properties
* **highAvailability**: [RecommendationsHighAvailabilityData](#recommendationshighavailabilitydata) (Required): The high availability section of resilience recommendation.

## RecommendationsHighAvailabilityData
### Properties
* **enabledResourceCount**: int: Count of resources that have high availability enabled.
* **evaluationDateTime**: string: The date and time when the high availability recommendations were last evaluated.
* **notEnabledResourceCount**: int: Count of resources that do not have high availability enabled.
* **notEvaluatedResourceCount**: int: Count of resources that have not been evaluated for high availability.

## RecoveryGroup
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [RecoveryGroupProperties](#recoverygroupproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## RecoveryGroupActionSettings
### Properties
* **actionDescription**: string (ReadOnly): User description of the action.
* **actionName**: string (ReadOnly): Name of the action.
* **actionSequence**: int (ReadOnly): Sequence number for the action.
* **actionTask**: 'None' | 'PostActionTask' | 'PreActionTask' | string (ReadOnly): The action task associated with this job resource.
* **recoveryGroupActionType**: 'CustomRunbook' | 'ManualAction' | string (ReadOnly): Type of the recovery group action.

## RecoveryGroupBaseAction
* **Discriminator**: type

### Base Properties
* **description**: string {maxLength: 100}: A description of the recovery orchestration group action, containing the instructions to be performed during this action.
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required): The name of the recovery orchestration group action.
* **timeoutInMinutes**: int {minValue: 0, maxValue: 10000} (Required): The maximum amount of time, in minutes, allowed for the action to complete before it times out.

### RecoveryGroupCustomRunbookAction
#### Properties
* **actionResourceId**: string: The ARM Resource ID of the resource that includes the actionable script, such as a Runbook in an Automation Account.
* **associatedIdentity**: [AssociatedIdentity](#associatedidentity): The identity associated with actionResourceId for RBAC.
* **parameters**: [RecoveryGroupCustomRunbookActionParameters](#recoverygroupcustomrunbookactionparameters): Key-value parameters for the operation.
* **type**: 'CustomRunbook' (Required): The type of the recovery orchestration group action.

### RecoveryGroupManualAction
#### Properties
* **type**: 'ManualAction' (Required): The type of the recovery orchestration group action.


## RecoveryGroupCustomRunbookActionParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RecoveryGroupProperties
### Properties
* **description**: string {minLength: 5, maxLength: 50} (Required): A description of the recovery orchestration group.
* **groupUniqueId**: string {pattern: "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"} (Required): A unique id for the recovery orchestration group, which is a GUID.
* **orderId**: int {minValue: 0, maxValue: 15} (Required): The order ID of the recovery orchestration group.
* **postActions**: [RecoveryGroupBaseAction](#recoverygroupbaseaction)[] {maxLength: 10}: Post-actions for the recovery orchestration group.
* **preActions**: [RecoveryGroupBaseAction](#recoverygroupbaseaction)[] {maxLength: 10}: Pre-actions for the recovery orchestration group.

## RecoveryGroupsSetting
### Properties
* **additionalGroups**: [RecoveryGroup](#recoverygroup)[] {maxLength: 14}: Additional recovery orchestration group settings.
* **defaultGroup**: [RecoveryGroup](#recoverygroup) (Required): The default recovery orchestration group setting. Every recovery orchestration plan has a default recovery orchestration group.

## RecoveryJobProperties
### Properties
* **duration**: string (ReadOnly): The time elapsed during the execution of this job.
* **endTime**: string (ReadOnly): The end time of the job execution.
* **errorDetails**: [JobErrorInfo](#joberrorinfo): Details of any errors that occurred during the execution of this job.
* **executionConfigurations**: [ExecutionConfigurations](#executionconfigurations) (ReadOnly): Execution configurations for the job.
* **jobExtendedInfo**: [JobExtendedInfo](#jobextendedinfo): Additional information about the job.
* **jobType**: 'DrillRun' | 'Invalid' | 'RecoveryPlan' | string (Required, ReadOnly): The type of job.
* **operation**: string (ReadOnly): The operation that this job is intended to perform.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the recovery job.
* **resourceId**: string (ReadOnly): The resource for which this job was created. This is typically the resource that the job is intended to manage or operate on.
* **retryDetails**: [JobRetryDetails](#jobretrydetails)[]: Details of any retries that have been attempted for this job.
* **startTime**: string (ReadOnly): The start time of the job execution.
* **status**: 'Cancelled' | 'Cancelling' | 'Completed' | 'CompletedWithWarnings' | 'Failed' | 'InProgress' | 'NotApplicable' | 'NotStarted' | 'Paused' | 'Pending' | 'Skipped' | string (ReadOnly): The current status of the job execution.
* **triggeredBy**: 'System' | 'User' | string (ReadOnly): Indicates whether the job was triggered by the system or a user.
* **userComments**: [JobUserComment](#jobusercomment)[] (ReadOnly): User Comments.

## RecoveryJobResourceProperties
### Properties
* **duration**: string (ReadOnly): The time elapsed during the execution of this job.
* **endTime**: string (ReadOnly): The end time of the job execution.
* **errorDetails**: [JobErrorInfo](#joberrorinfo): Details of any errors that occurred during the execution of this job.
* **jobExtendedInfo**: [JobExtendedInfo](#jobextendedinfo): Additional information about the job.
* **jobId**: string (ReadOnly): Id of the Job under which this job-resource exists.
* **jobResourceType**: 'DrillRun' | 'Invalid' | 'RecoveryPlan' | string (Required): Discriminator for the JobResource object hierarchy.
* **operation**: string (ReadOnly): The operation that this job is intended to perform.
* **protectionSolutionType**: 'AzureNative' | 'AzureSiteRecovery' | 'CrossZoneVMRecovery' | 'CustomRunbook' | 'None' | string (ReadOnly): A setting that indicates the protection solution selected.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the recovery job resource.
* **recoveryGroupActionSettings**: [RecoveryGroupActionSettings](#recoverygroupactionsettings) (ReadOnly): The recovery action settings.
* **resourceId**: string (ReadOnly): The resource for which this job was created. This is typically the resource that the job is intended to manage or operate on.
* **retryDetails**: [JobRetryDetails](#jobretrydetails)[]: Details of any retries that have been attempted for this job.
* **startTime**: string (ReadOnly): The start time of the job execution.
* **status**: 'Cancelled' | 'Cancelling' | 'Completed' | 'CompletedWithWarnings' | 'Failed' | 'InProgress' | 'NotApplicable' | 'NotStarted' | 'Paused' | 'Pending' | 'Skipped' | string (ReadOnly): The current status of the job execution.
* **taskId**: string (ReadOnly): Id of the job-task to which this job resource is associated.
* **taskName**: string (ReadOnly): Friendly name of the job-task to which this job resource is associated.
* **userComments**: [JobUserComment](#jobusercomment)[] (ReadOnly): User Comments.

## RecoveryPlanFailoverOperationStatus
### Properties
* **errorDetails**: [ErrorDetail](#errordetail) (ReadOnly): Error details for the most recent execution of the recovery orchestration plan.
* **lastExecutedAt**: string (ReadOnly): The most recent execution time of the recovery orchestration plan in UTC.
* **operationStatus**: 'Canceled' | 'CompletedWithWarning' | 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' | 'ValidationFailed' | 'ValidationInProgress' | string (ReadOnly): The status of the most recent execution of the recovery orchestration plan.
* **recoveryTimeActual**: string (ReadOnly): The actual recovery time of the most recent recovery orchestration plan.

## RecoveryPlanOperationStatus
### Properties
* **errorDetails**: [ErrorDetail](#errordetail) (ReadOnly): Error details for the most recent execution of the recovery orchestration plan.
* **lastExecutedAt**: string (ReadOnly): The most recent execution time of the recovery orchestration plan in UTC.
* **operationStatus**: 'Canceled' | 'CompletedWithWarning' | 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' | 'ValidationFailed' | 'ValidationInProgress' | string (ReadOnly): The status of the most recent execution of the recovery orchestration plan.

## RecoveryPlanProperties
### Properties
* **errorDetails**: [ErrorDetail](#errordetail) (ReadOnly): Error details associated with the resource.
* **latestFailoverStatus**: [RecoveryPlanFailoverOperationStatus](#recoveryplanfailoveroperationstatus) (ReadOnly): The status of the most recent failover operation executed.
* **latestValidationStatus**: [RecoveryPlanOperationStatus](#recoveryplanoperationstatus) (ReadOnly): The status of the most recent validation performed.
* **planDescription**: string {minLength: 5, maxLength: 50} (Required): A description of the recovery orchestration plan.
* **planState**: 'Ready' | 'UnderEdit' | 'Warning' | string (ReadOnly): The current state of the recovery orchestration plan.
* **planType**: 'Regional' | 'Zonal' | string (Required, WriteOnly): The type of the recovery orchestration plan, which can be set during creation but cannot be changed afterward.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the recovery orchestration plan.
* **recoveryGroupsSetting**: [RecoveryGroupsSetting](#recoverygroupssetting) (Required): Settings for the recovery orchestration groups associated with the recovery orchestration plan.

## RecoveryPlanPropertiesOfDrill
### Properties
* **identity**: [AssociatedIdentity](#associatedidentity) (Required): Identity to use for RecoveryPlan operations.
* **recoveryPlanId**: string (ReadOnly): Recovery Orchestration plan associated with this Drill.
* **recoveryPlanResourceExcludedCount**: int (ReadOnly): Excluded resource count in RecoveryPlan.

## RecoveryResourceProperties
### Properties
* **associatedIdentity**: [AssociatedIdentity](#associatedidentity): Identity details associated to the resource, which will be used for performing any operations on it
* **attentionReasons**: string[] (ReadOnly): Reason for the resource to be in need of attention
* **errorDetails**: [ErrorDetail](#errordetail) (ReadOnly): Error details associated with the resource.
* **inclusionState**: 'Excluded' | 'Included' | string: A state that indicates the resource status with respect to the recovery orchestration plan.
* **needsAttention**: bool (ReadOnly): Indicating if resource needs user attention and action, details will be found in attentionReasons
* **protectionStatus**: 'HighlyAvailable' | 'NotProtected' | 'Protected' | 'Unknown' | string (ReadOnly): A status that indicates the protection status of a resource with an Azure solution for regional or zonal recovery.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state
* **recoveryGroupId**: string {pattern: "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"}: The recovery orchestration group id associated with the recovery resources.
* **recoveryResourceUniqueId**: string {pattern: "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"} (Required): A unique id for the recovery resource, which is a GUID.
* **resourceId**: string (ReadOnly): Resource ID of the Azure resource associated with the recovery orchestration plan and linked to the recovery resource.
* **resourceLocation**: string (ReadOnly): Original location of the Azure resource associated with the recovery orchestration plan and linked to the recovery resource.
* **resourcePhysicalZones**: string[] (ReadOnly): Physical zones of the Azure resource associated with the recovery orchestration plan and linked to the recovery resource.
* **resourceProtectionSolutions**: [ResourceProtectionSolutionSettings](#resourceprotectionsolutionsettings)[] (ReadOnly): A list of ResourceProtectionSolutions with which the recovery orchestration resource is protected.
* **selectedProtectionSolutionSetting**: [ResourceBaseProtectionSolutionSetting](#resourcebaseprotectionsolutionsetting): Resource protection solution settings of the protection solutions recovery orchestration resource is protected with.
* **selectedProtectionSolutionType**: 'AzureNative' | 'AzureSiteRecovery' | 'CrossZoneVMRecovery' | 'CustomRunbook' | 'None' | string: A setting that indicates the protection solution selected.

## ResourceBaseProtectionSolutionSetting
* **Discriminator**: protectionSolutionType

### Base Properties

### ResourceNativeProtectionSolutionSetting
#### Properties
* **protectionSolutionType**: 'AzureNative' (Required): A setting that indicates the resource protected with which recovery solution.

### ResourceSiteRecoveryProtectionSetting
#### Properties
* **protectionSolutionType**: 'AzureSiteRecovery' (Required): A setting that indicates the resource protected with which recovery solution.
* **reprotectParams**: [ResourceSiteRecoveryReprotectParams](#resourcesiterecoveryreprotectparams): Reprotect params for azure site recovery solution.
* **testFailoverCleanupParams**: [ResourceSiteRecoveryTestFailoverCleanupParams](#resourcesiterecoverytestfailovercleanupparams): Test failover params for azure site recovery solution.
* **testFailoverParams**: [ResourceSiteRecoveryTestFailoverParams](#resourcesiterecoverytestfailoverparams): Test failover params for azure site recovery solution.

### ResourceCustomProtectionSetting
#### Properties
* **failoverAction**: [ResourceCustomProtectionAction](#resourcecustomprotectionaction): The Azure resource ID hosting the failover automation script.
* **failoverCommitAction**: [ResourceCustomProtectionAction](#resourcecustomprotectionaction): The Azure resource ID hosting the failover commit automation script.
* **protectionSolutionType**: 'CustomRunbook' (Required): A setting that indicates the resource protected with which recovery solution.
* **reprotectAction**: [ResourceCustomProtectionAction](#resourcecustomprotectionaction): The Azure resource ID hosting the reprotect automation script.
* **testFailoverAction**: [ResourceCustomProtectionAction](#resourcecustomprotectionaction): The Azure resource ID hosting the test failover automation script.
* **testFailoverCleanupAction**: [ResourceCustomProtectionAction](#resourcecustomprotectionaction): The Azure resource ID hosting the test failover cleanup automation script.


## ResourceCustomProtectionAction
### Properties
* **resourceId**: string (Required): The Azure resource ID hosting the custom action automation script.

## ResourceProtectionSolutionSettings
### Properties
* **activeLocation**: string (ReadOnly): Active location of the Azure resource associated with the recovery orchestration plan and linked to the recovery resource.
* **activeLocations**: string[] (ReadOnly): Active locations of the Azure resource associated with the recovery orchestration plan and linked to the recovery resource.
* **activePhysicalZones**: string[] (ReadOnly): Active Resource location and physical zones of Azure Resource.
* **failoverState**: 'FailedOver' | 'FailedOverCommitPending' | 'FailedOverReprotectPending' | 'None' | string (ReadOnly): Failover state of the recovery orchestration resource.
* **isAutoFailover**: bool (Required, ReadOnly): Is AutoFailover configured for the resource replication.
* **primaryResource**: string (ReadOnly): Primary resource which is getting replicated.
* **protectionSolutionType**: 'AzureNative' | 'AzureSiteRecovery' | 'CrossZoneVMRecovery' | 'CustomRunbook' | 'None' | string (ReadOnly): A setting that indicates the resource protected with which recovery solution.
* **protectionStatus**: 'HighlyAvailable' | 'NotProtected' | 'Protected' | 'Unknown' | string (ReadOnly): A status that indicates the protection status of a resource with an Azure solution for regional or zonal recovery.
* **recoveryLocations**: string[] (ReadOnly): List of recovery locations of the Azure resource associated with the recovery orchestration plan and linked to the recovery resource.
* **replicaResources**: string[] (ReadOnly): List of Replica resources to which replication is happening.
* **replicationRole**: 'Primary' | 'Replica' | 'Unknown' | string (ReadOnly): Specifies the role of the resource in the replication process.
* **resourceId**: string (ReadOnly): Resource ID of the Azure resource associated with the recovery orchestration plan and linked to the recovery resource.
* **testFailoverState**: 'None' | 'TestFailoverCleanupPending' | string (ReadOnly): TestFailover state of the recovery orchestration resource.

## ResourceSiteRecoveryReprotectParams
### Properties
* **diskReprotectInputDetails**: [DiskReprotectInputDetails](#diskreprotectinputdetails)[]: Disk Reprotect Input Details

## ResourceSiteRecoveryTestFailoverCleanupParams
### Properties
* **comments**: string: Comments for testfailover cleanup

## ResourceSiteRecoveryTestFailoverParams
### Properties
* **networkResourceId**: string: The Azure network resource is which will be used for test failover virtual machine.

## ServiceGroupMembership
### Properties
* **membershipType**: 'Direct' | 'ThroughResourceGroup' | 'ThroughSubscription' | string (Required): Membership type of the service group to resource.
* **serviceGroupId**: string (Required): Arm Id of the service group.

## ServiceLevelResource
### Properties
* **serviceLevelIndicatorResourceId**: string (Required): The arm id of the service level indicator resource
* **serviceLevelObjectiveResourceId**: string (Required): The arm id of the service level object resource

## SupportedVerbsForStage
### Properties
* **drillRunStage**: 'Failover' | 'FailoverReverse' | 'FaultInjection' | 'Reprotect' | 'ReprotectReverse' | string (Required): Name of stage.
* **supportedVerbs**: ('Cancel' | 'MarkAsComplete' | 'Retry' | 'Start' | string)[] (Required): Supported Verbs for stage.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## SystemMetadata
### Properties
* **initialConfig**: 'Complete' | 'Pending' | string (Required): Indicates if the Initial system configuration of the Drill is complete or not.
* **resourceTypeCategories**: ('AzureSiteRecoveryVMsPresent' | string)[] (ReadOnly): An indication whether a intrested resource type is present in drill resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UnifiedResilienceItemProperties
### Properties
* **goals**: [GoalsData](#goalsdata) (Required): Computed and copied data of resilience goals.
* **lastModifiedTime**: string (Required): Last modified time of the unified resilience item.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state
* **recommendations**: [RecommendationsData](#recommendationsdata) (Required): Computed and copied data of Azure recommendations.

## UsagePlanProperties
### Properties
* **errorDetails**: [ErrorDetail](#errordetail) (ReadOnly): Details of any errors encountered during Usage Plan create or update.
* **planType**: 'Basic' | 'Standard' | string: The type of the usage plan.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the usage plan.

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## UserConfirmationForHighAvailabilityItem
### Properties
* **confirmationStatus**: 'ApprovalNotNeeded' | 'ApprovalPending' | 'ApprovedByUser' | 'RejectedByUser' | string (Required): The confirmation status of the high availability solution.
* **reasonForRequestingConfirmation**: 'VmInMultiZoneScaleSetStatelessOnly' | 'ZonePinnedZrsDataDisksConditional' | string: The reason for requesting user confirmation for the high availability solution.
* **solutionDisplayName**: 'VmInMultiZoneVmss' | 'ZonePinnedVmWithZrsDisk' | string (Required): The solution display name of the high availability solution.

