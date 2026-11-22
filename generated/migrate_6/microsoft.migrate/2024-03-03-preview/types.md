# Microsoft.Migrate @ 2024-03-03-preview

## Resource Microsoft.Migrate/assessmentProjects/heterogeneousAssessments@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HeterogeneousAssessmentProperties](#heterogeneousassessmentproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/heterogeneousAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/heterogeneousAssessments/summaries@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HeterogeneousAssessmentSummaryProperties](#heterogeneousassessmentsummaryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/heterogeneousAssessments/summaries' (ReadOnly, DeployTimeConstant): The resource type

## CostComponent
### Properties
* **description**: string: The textual description of the component.
* **name**: 'MonthlyAvsNodeCost' | 'MonthlyAzureHybridCostSavings' | 'MonthlyExternalStorageCost' | 'MonthlyLinuxAzureHybridCostSavings' | 'MonthlyNetworkCost' | 'MonthlyPremiumV2StorageCost' | 'MonthlySecurityCost' | 'MonthlyVcfByolCostDifference' | 'Unknown' | string (ReadOnly): Gets the name of the component.
* **value**: int: The value of the component.

## HeterogeneousAssessmentProperties
### Properties
* **assessmentArmIds**: string[]: Arm id of partner assessments.
* **azureLocation**: string (ReadOnly): Azure location for assessment.
* **confidenceRatingInPercentage**: int (ReadOnly): Confidence rating in percentage.
* **lastCalculatedOn**: string (ReadOnly): Timestamp for the last successfully calculated summary for the assessment.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **schemaVersion**: string (ReadOnly): Schema version.
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' | string (ReadOnly): Sizing criterion for assessment.
* **status**: 'Completed' | 'Created' | 'Deleted' | 'Failed' | 'Invalid' | 'OutDated' | 'OutOfSync' | 'Running' | 'Updated' | string (ReadOnly): Whether assessment is in valid state and all machines have been assessed.

## HeterogeneousAssessmentSummaryProperties
### Properties
* **assessmentName**: string (ReadOnly): The assessment name
* **confidenceScore**: int (ReadOnly): Gets the confidence score.
* **costComponents**: [CostComponent](#costcomponent)[] (ReadOnly): Gets the cost components.
* **migrationPaths**: [MigrationTypeSummaries](#migrationtypesummaries)[] (ReadOnly): Gets the migration type summaries.
* **readinessSummary**: [HeterogeneousAssessmentSummaryPropertiesReadinessSummaryItem](#heterogeneousassessmentsummarypropertiesreadinesssummaryitem)[] (ReadOnly): Gets the readiness summary.
* **savingComponent**: [SavingComponent](#savingcomponent)[] (ReadOnly): Gets the saving component.
* **summaryType**: 'Strategy' | 'Target' | 'Unknown' | string (ReadOnly): The summary type

## HeterogeneousAssessmentSummaryPropertiesReadinessSummaryItem
### Properties
* **name**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'SuitableWithWarnings' | 'Unknown' | string (ReadOnly): The name.
* **value**: int (ReadOnly): The value.

## MigrationTypeSummaries
### Properties
* **migrationType**: 'Rearchitect' | 'Rehost' | 'Replatform' | 'Retain' | 'Unknown' | string (ReadOnly): Gets the migration type.
* **platform**: 'IaaS' | 'PaaS' | 'SaaS' | 'Unknown' | string (ReadOnly): Gets the Platform.
* **readinessSummary**: [MigrationTypeSummariesReadinessSummaryItem](#migrationtypesummariesreadinesssummaryitem)[] (ReadOnly): Gets the readiness summary.

## MigrationTypeSummariesReadinessSummaryItem
### Properties
* **name**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'SuitableWithWarnings' | 'Unknown' | string (ReadOnly): The name.
* **value**: int (ReadOnly): The value.

## SavingComponent
### Properties
* **description**: string: The textual description of the component.
* **name**: 'MonthlyAzureHybridCostSavings' | 'MonthlyLinuxAzureHybridCostSavings' | string (ReadOnly): Gets the name of the component.
* **value**: int: The value of the component.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

