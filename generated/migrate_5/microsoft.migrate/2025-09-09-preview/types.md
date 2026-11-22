# Microsoft.Migrate @ 2025-09-09-preview

## Resource Microsoft.Migrate/assessmentProjects/containerAppsAssessmentOptions@2025-09-09-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-09-09-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ContainerAppsAssessmentOptionsProperties](#containerappsassessmentoptionsproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/containerAppsAssessmentOptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/containerAppsAssessments@2025-09-09-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-09-09-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ContainerAppsAssessmentProperties](#containerappsassessmentproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/containerAppsAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/containerAppsAssessments/assessedWebApps@2025-09-09-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-09-09-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssessedWebApplicationProperties](#assessedwebapplicationproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/containerAppsAssessments/assessedWebApps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/containerAppsAssessments/managedEnvironments@2025-09-09-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-09-09-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ContainerAppsManagedEnvironmentProperties](#containerappsmanagedenvironmentproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/containerAppsAssessments/managedEnvironments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/containerAppsAssessments/summaries@2025-09-09-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-09-09-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ContainerAppsSummaryProperties](#containerappssummaryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/containerAppsAssessments/summaries' (ReadOnly, DeployTimeConstant): The resource type

## Function downloadUrl (Microsoft.Migrate/assessmentProjects/containerAppsAssessments@2025-09-09-preview)
* **Resource**: Microsoft.Migrate/assessmentProjects/containerAppsAssessments
* **ApiVersion**: 2025-09-09-preview
* **Output**: [DownloadUrl](#downloadurl)

## AssessedWebApplicationProperties
### Properties
* **linkages**: [Linkages](#linkages)[] (ReadOnly): The linkages list.
* **recommendationResult**: [RecommendationResult](#recommendationresult) (Required): Recommendation Result of assessed webapp.
* **recommendations**: [AssessedWebApplicationPropertiesRecommendationsItem](#assessedwebapplicationpropertiesrecommendationsitem)[] (ReadOnly): The recommendation list.
* **webAppType**: 'IIS' | 'Tomcat' | 'Unknown' | string (Required): Type of assessed webapp.
* **workloadType**: 'Database' | 'Host' | 'Instance' | 'Machine' | 'ManagementServer' | 'Server' | 'Unknown' | 'WebApplication' | 'WebServer' | string (ReadOnly): The workload type

## AssessedWebApplicationPropertiesRecommendationsItem
### Properties
* **confidenceScore**: int (ReadOnly): The confidence score.
* **configuration**: [Configuration](#configuration) (ReadOnly): The configuration data.
* **migrationIssues**: [MigrationIssues](#migrationissues)[] (ReadOnly): The migration issues list.
* **migrationPlatform**: 'IaaS' | 'PaaS' | 'SaaS' | 'Unknown' | string (ReadOnly): The migration Platform.
* **migrationSuitability**: [MigrationSuitability](#migrationsuitability) (ReadOnly): The migration suitability.
* **recommendedFor**: [RecommendedFor](#recommendedfor) (ReadOnly): The recommended details.
* **securitySuitability**: [SecuritySuitability](#securitysuitability) (ReadOnly): The security suitability.
* **skus**: [AssessedWebApplicationPropertiesRecommendationsPropertiesItemsItem](#assessedwebapplicationpropertiesrecommendationspropertiesitemsitem)[] (ReadOnly): The Skus list.
* **totalCost**: [CostDetailsCommon](#costdetailscommon)[] (ReadOnly): The total cost details.
* **totalSavings**: [SavingsDetailsCommon](#savingsdetailscommon)[] (ReadOnly): The total cost details.

## AssessedWebApplicationPropertiesRecommendationsPropertiesItemsItem
### Properties
* **details**: [SkuDetails](#skudetails) (ReadOnly): The sku details.
* **displayName**: string (ReadOnly): The sku name.
* **id**: string (ReadOnly): The sku id.
* **kind**: 'Details' | 'Endpoint' | string (ReadOnly): The Sku kind.
* **resourceUri**: string (ReadOnly): The resource uri.
* **sources**: [AssessedWebApplicationPropertiesRecommendationsPropertiesItemsSourcesItem](#assessedwebapplicationpropertiesrecommendationspropertiesitemssourcesitem)[] (ReadOnly): The source name.
* **type**: 'AppServicePlan' | 'AzureSpringApps' | 'Compute' | 'Network' | 'Storage' | 'Unknown' | string (ReadOnly): The sku type.

## AssessedWebApplicationPropertiesRecommendationsPropertiesItemsSourcesItem
### Properties
* **migrationSuitability**: [MigrationSuitability](#migrationsuitability) (ReadOnly): The sku type.
* **name**: string (ReadOnly): The sku name.

## AssessmentDetails
### Properties
* **confidenceRatingInPercentage**: int (ReadOnly): Confidence Rating in Percentage.
* **createdTimestamp**: string (ReadOnly): Date and Time when assessment was created.
* **pricesTimestamp**: string (ReadOnly): Last time when rates were queried.
* **status**: 'Completed' | 'Created' | 'Deleted' | 'Failed' | 'Invalid' | 'OutDated' | 'OutOfSync' | 'Running' | 'Updated' | string (ReadOnly): Whether assessment is in valid state and all machines have been assessed.
* **updatedTimestamp**: string (ReadOnly): Date and Time when assessment was last updated.

## BillingSettings
### Properties
* **licensingProgram**: 'EA' | 'MCA' | 'Retail' | 'Unknown' | string: Gets or sets the licensing program.
* **subscriptionId**: string: Gets or sets the subscription ID for licensing program selected.

## ComputeResource
### Properties
* **cores**: int (Required, ReadOnly): Gets cores.
* **memory**: int (Required, ReadOnly): Gets memory.

## Configuration
### Properties
* **azureTarget**: 'AKS' | 'Avs' | 'AzureAppService' | 'AzureAppServiceContainer' | 'AzureSQLVM' | 'AzureSpringApps' | 'AzureVM' | 'ContainerApps' | 'FlexServerPG' | 'MySQLAzureFlexServer' | 'OracleIaasVM' | 'SAPAzureInstance' | 'SqlDatabase' | 'SqlMI' | 'Unknown' | string (ReadOnly): The azure target.
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' | string (ReadOnly): The azure target.

## ContainerApp
### Properties
* **containerAppId**: string (Required, ReadOnly): Gets the Azure resource ID of the referenced container app.
* **containerAppName**: string (Required, ReadOnly): Gets the name of the referenced container app.
* **cores**: int (ReadOnly): Gets vCPU cores allocated to the container app.
* **environmentName**: string (Required, ReadOnly): Gets the parent environment name.
* **memoryInGib**: int (ReadOnly): Gets memory in GiB allocated to the container app.
* **monthlyCost**: int (ReadOnly): Gets monthly cost.
* **sku**: 'Consumption' | 'Consumption-GPU-NC24-A100' | 'Consumption-GPU-NC8as-T4' | 'Dedicated-D16' | 'Dedicated-D32' | 'Dedicated-D4' | 'Dedicated-D8' | 'Dedicated-E16' | 'Dedicated-E32' | 'Dedicated-E4' | 'Dedicated-E8' | 'Dedicated-NC24-A100' | 'Dedicated-NC48-A100' | 'Dedicated-NC96-A100' | string (ReadOnly): Gets the workload profile SKU.
* **workloadProfileType**: 'Any' | 'Consumption' | 'Dedicated' | string (ReadOnly): Gets the workload profile type.

## ContainerAppsAssessmentOptionsOutboundEdgeGroup
### Properties
* **currencies**: ('ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string)[] (Required): Gets or sets the Azure Currency.
* **licensingProgram**: ('EA' | 'MCA' | 'Retail' | 'Unknown' | string)[] (Required): Gets or sets the Licensing Program.
* **savingsOptions**: ('CustomAzureOfferCode' | 'None' | 'RI1Year' | 'RI3Year' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | string)[] (Required): Gets or sets the Assessment Savings Options.
* **sku**: ('Consumption' | 'Consumption-GPU-NC24-A100' | 'Consumption-GPU-NC8as-T4' | 'Dedicated-D16' | 'Dedicated-D32' | 'Dedicated-D4' | 'Dedicated-D8' | 'Dedicated-E16' | 'Dedicated-E32' | 'Dedicated-E4' | 'Dedicated-E8' | 'Dedicated-NC24-A100' | 'Dedicated-NC48-A100' | 'Dedicated-NC96-A100' | string)[] (Required): Gets or sets the Workload Profile SKUs.
* **targetLocations**: string[] (Required): Gets or sets the Azure Locations.
* **workloadProfileTypes**: ('Any' | 'Consumption' | 'Dedicated' | string)[] (Required): Gets or sets the Workload Profile Types.

## ContainerAppsAssessmentOptionsProperties
### Properties
* **edges**: [ContainerAppsAssessmentOptionsPropertiesEdges](#containerappsassessmentoptionspropertiesedges) (Required, ReadOnly): Gets the mapping of Assessment Options in graph representation.

## ContainerAppsAssessmentOptionsPropertiesEdges
### Properties
### Additional Properties
* **Additional Properties Type**: [ContainerAppsAssessmentOptionsOutboundEdgeGroup](#containerappsassessmentoptionsoutboundedgegroup)

## ContainerAppsAssessmentProperties
### Properties
* **details**: [AssessmentDetails](#assessmentdetails): Gets or sets the details of the assessment.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **scope**: [Scope](#scope): Gets or sets the scope of assessment.
* **settings**: [ContainerAppsAssessmentSettings](#containerappsassessmentsettings): Gets or sets the settings for the assessment.

## ContainerAppsAssessmentSettings
### Properties
* **azureLocation**: string: Azure Location or Azure region where to which the machines will be migrated.
* **billingSettings**: [BillingSettings](#billingsettings): Gets or sets the billing settings.
* **currency**: 'ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string: Currency in which prices should be reported.
* **discountPercentage**: int: Custom discount percentage.
* **environmentType**: 'DevTest' | 'Production' | 'Unknown' | string: Gets or sets user configurable setting to display the environment type.
* **performanceData**: [PerformanceData](#performancedata): Gets or sets the performance data.
* **savingsSettings**: [SavingsSettings](#savingssettings): Gets or sets the savings settings.
* **scalingFactor**: int: Percentage of buffer that user wants on performance metrics when recommending
Azure sizes.
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' | string: Assessment sizing criterion.
* **sku**: 'Consumption' | 'Consumption-GPU-NC24-A100' | 'Consumption-GPU-NC8as-T4' | 'Dedicated-D16' | 'Dedicated-D32' | 'Dedicated-D4' | 'Dedicated-D8' | 'Dedicated-E16' | 'Dedicated-E32' | 'Dedicated-E4' | 'Dedicated-E8' | 'Dedicated-NC24-A100' | 'Dedicated-NC48-A100' | 'Dedicated-NC96-A100' | string (Required): Gets or sets the workload profile SKU.
* **workloadProfileType**: 'Any' | 'Consumption' | 'Dedicated' | string (Required): Gets or sets the workload profile type.

## ContainerAppsManagedEnvironmentProperties
### Properties
* **containerApps**: [ContainerApp](#containerapp)[] (Required, ReadOnly): Gets list of container apps in this environment.
* **cores**: int (ReadOnly): Gets the total vCPU cores allocated to the environment.
* **createdTimestamp**: string (ReadOnly): Gets the created timestamp.
* **managementFeeMonthlyCost**: int (ReadOnly): Gets management fee monthly cost.
* **memoryInGib**: int (ReadOnly): Gets the total memory in GiB allocated to the environment.
* **monthlyCost**: int (ReadOnly): Gets monthly cost.
* **numberOfContainerApps**: int (ReadOnly): Gets the number of container apps in this environment.
* **region**: string (ReadOnly): Gets region.
* **updatedTimestamp**: string (ReadOnly): Gets the updated timestamp.
* **workloadProfileType**: 'Any' | 'Consumption' | 'Dedicated' | string (ReadOnly): Gets the workload profile type for the environment.

## ContainerAppsSummaryProperties
### Properties
* **costComponents**: [CostDetailsCommon](#costdetailscommon)[] (ReadOnly): The cost components.
* **machineCount**: int (Required, ReadOnly): Gets the number of machines.
* **savingsComponents**: [SavingsDetailsCommon](#savingsdetailscommon)[] (ReadOnly): The cost components.
* **sources**: [SourceDetails](#sourcedetails)[] (ReadOnly): The source details list.
* **summaryName**: string (ReadOnly): The summary name
* **summaryType**: 'Strategy' | 'Target' | 'Unknown' | string (ReadOnly): The summary type
* **targets**: [TargetDetails](#targetdetails)[] (ReadOnly): The target details list.
* **targetSourceMapping**: [TargetSourcePair](#targetsourcepair)[] (ReadOnly): The target source mapping.
* **webAppCount**: int (Required, ReadOnly): Gets the number of web apps.
* **webServerCount**: int (Required, ReadOnly): Gets the number of web servers.

## CostDetailsCommon
### Properties
* **costDetail**: [CostDetailsCommonCostDetailItem](#costdetailscommoncostdetailitem)[] (ReadOnly): The sku cost details per azure offer type.
* **savingOptions**: 'CustomAzureOfferCode' | 'None' | 'RI1Year' | 'RI3Year' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | string (ReadOnly): The savings options.

## CostDetailsCommonCostDetailItem
### Properties
* **name**: 'DataProtectionService' | 'MonitoringService' | 'MonthlyAvsExternalStorageCost' | 'MonthlyAvsNetworkCost' | 'MonthlyAvsNodeCost' | 'MonthlyAzureHybridCost' | 'MonthlyBandwidthCost' | 'MonthlyComputeCost' | 'MonthlyLicensingCost' | 'MonthlyLinuxAzureHybridCost' | 'MonthlyManagementCost' | 'MonthlyPremiumStorageCost' | 'MonthlyPremiumV2StorageCost' | 'MonthlySecurityCost' | 'MonthlyStandardHddStorageCost' | 'MonthlyStandardSsdStorageCost' | 'MonthlyStorageCost' | 'MonthlyUltraDiskCost' | 'MonthlyUltraStorageCost' | 'PatchingService' | 'TotalMonthlyCost' | string (ReadOnly): The name.
* **value**: int (ReadOnly): The value.

## DownloadUrl
### Properties
* **assessmentReportUrl**: string {sensitive} (Required, ReadOnly): Hyperlink to download report.
* **expirationTime**: string (Required, ReadOnly): Expiry date of download url.

## Linkages
### Properties
* **armId**: string (ReadOnly): The arm id.
* **kind**: 'Database' | 'Instance' | 'Machine' | 'Server' | 'Unknown' | 'WebApplication' | 'WebServer' | string (ReadOnly): The linkage kind.
* **linkageType**: 'Parent' | 'Source' | string (ReadOnly): The linkage type.
* **workloadName**: string (ReadOnly): The workload name

## ManagementDetails
### Properties
* **name**: 'AUM' | 'AzMon' | 'AzureBackup' | 'No' | 'SCOMMI' | string (ReadOnly): The management summary name.
* **readinessSummary**: [ManagementDetailsReadinessSummaryItem](#managementdetailsreadinesssummaryitem)[] (ReadOnly): The management suitability summary.

## ManagementDetailsReadinessSummaryItem
### Properties
* **name**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'SuitableWithWarnings' | 'Unknown' | string (ReadOnly): The name.
* **value**: int (ReadOnly): The value.

## MigrationDetails
### Properties
* **migrationType**: 'Rearchitect' | 'Rehost' | 'Replatform' | 'Retain' | 'Unknown' | string (ReadOnly): The migration type
* **readinessSummary**: [MigrationDetailsReadinessSummaryItem](#migrationdetailsreadinesssummaryitem)[] (ReadOnly): The readiness summary.

## MigrationDetailsReadinessSummaryItem
### Properties
* **name**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'SuitableWithWarnings' | 'Unknown' | string (ReadOnly): The name.
* **value**: int (ReadOnly): The value.

## MigrationIssues
### Properties
* **issueCategory**: 'Internal' | 'Issue' | 'Warning' | string (ReadOnly): The issue category.
* **issueCode**: string (ReadOnly): The issue id.
* **issueDescription**: string (ReadOnly): The issue description.
* **moreInformation**: [MoreInformation](#moreinformation)[] (ReadOnly): The more information list.
* **possibleCause**: string (ReadOnly): The possible causes.
* **recommendedActions**: string[] (ReadOnly): The recommended action.

## MigrationSuitability
### Properties
* **readiness**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'SuitableWithWarnings' | 'Unknown' | string (ReadOnly): The migration suitability.

## MoreInformation
### Properties
* **title**: string (Required, ReadOnly): The title of the information.
* **url**: string (Required, ReadOnly): The URL of the information.

## PerformanceData
### Properties
* **percentile**: 'Percentile50' | 'Percentile90' | 'Percentile95' | 'Percentile99' | 'PercentileUnknown' | string: Percentile of the utilization data values to be considered while assessing
machines.
* **perfDataEndTime**: string: Gets or sets the end time to consider performance data for assessment.
* **perfDataStartTime**: string: Gets or sets the start time to consider performance data for assessment.
* **timeRange**: 'Custom' | 'Day' | 'Month' | 'Week' | string: Time Range for which the historic utilization data should be considered for
assessment.

## RecommendationResult
### Properties
* **environmentName**: string (Required, ReadOnly): Gets environment name.
* **limit**: [ComputeResource](#computeresource) (Required, ReadOnly): Gets cores and memory limit.
* **maxReplicas**: int (Required, ReadOnly): Gets the maximum number of replicas.
* **minReplicas**: int (Required, ReadOnly): Gets the minimum number of replicas.
* **request**: [ComputeResource](#computeresource) (Required, ReadOnly): Gets cores and memory request.
* **workloadProfileType**: 'Any' | 'Consumption' | 'Dedicated' | string (Required, ReadOnly): Gets the workload profile type.

## RecommendedFor
### Properties
* **strategies**: ('CostOptimized' | 'EffortOptimized' | 'PaaSPreferred' | string)[] (ReadOnly): The list of strategy type.

## SavingsDetailsCommon
### Properties
* **savingOptions**: 'CustomAzureOfferCode' | 'None' | 'RI1Year' | 'RI3Year' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | string (ReadOnly): The savings options.
* **savingsDetail**: [SavingsDetailsCommonSavingsDetailItem](#savingsdetailscommonsavingsdetailitem)[] (ReadOnly): The sku cost details per azure offer type.

## SavingsDetailsCommonSavingsDetailItem
### Properties
* **name**: 'MonthlyAhubSqlCostSavings' | 'MonthlyAzureHybridCostSavings' | 'MonthlyLinuxAzureHybridCostSavings' | 'MonthlyVcfByolCostDifference' | string (ReadOnly): The name.
* **value**: int (ReadOnly): The value.

## SavingsSettings
### Properties
* **azureOfferCode**: 'EA' | 'MSAZR0003P' | 'MSAZR0023P' | 'MSAZRUSGOV0003P' | 'MSMCAZR0044P' | 'MSMCAZR0059P' | 'MSMCAZR0060P' | 'MSMCAZR0063P' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | 'Unknown' | string: Gets or sets the Azure offer code.
* **savingsOptions**: 'CustomAzureOfferCode' | 'None' | 'RI1Year' | 'RI3Year' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | string: Gets or sets the savings options.

## Scope
### Properties
* **azureResourceGraphQuery**: string: The ARG query.
* **scopeType**: 'AzureResourceGraphQuery' | 'ServerGroupId' | string: The scope type
* **serverGroupId**: string: The server group arm id.

## SecuritySuitability
### Properties
* **readiness**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'SuitableWithWarnings' | 'Unknown' | string (ReadOnly): The security suitability.

## SkuDetails
### Properties
* **capabilities**: [SkuDetailsCapabilitiesItem](#skudetailscapabilitiesitem)[] (ReadOnly): The capabilities.
* **skuName**: string (ReadOnly): The sku name.
* **skuType**: 'AppServicePlan' | 'AzureSpringApps' | 'Compute' | 'Network' | 'Storage' | 'Unknown' | string (ReadOnly): The sku type.
* **totalCost**: [CostDetailsCommon](#costdetailscommon)[] (ReadOnly): The sku cost details.
* **totalSavings**: [SavingsDetailsCommon](#savingsdetailscommon)[] (ReadOnly): The sku savings details.

## SkuDetailsCapabilitiesItem
### Properties
* **name**: string (ReadOnly): The name.
* **value**: string (ReadOnly): The value.

## SourceDetails
### Properties
* **count**: int (ReadOnly): The count of a type of source.
* **platform**: 'IaaS' | 'PaaS' | 'SaaS' | 'Unknown' | string (ReadOnly): The migration platform.
* **sourceName**: 'IIS' | 'Machine' | 'MySQLServer' | 'OracleDatabase' | 'OracleServer' | 'SAPInstance' | 'SpringbootApplication' | 'SqlDatabase' | 'SqlInstance' | 'TomCat' | 'Unknown' | 'WebApps' | string (ReadOnly): The source name.
* **sourceType**: 'Database' | 'Host' | 'Instance' | 'Machine' | 'ManagementServer' | 'Server' | 'Unknown' | 'WebApplication' | 'WebServer' | string (ReadOnly): The source type.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TargetDetails
### Properties
* **count**: int (ReadOnly): The count of a type of source.
* **platform**: 'IaaS' | 'PaaS' | 'SaaS' | 'Unknown' | string (ReadOnly): The migration platform.
* **targetName**: 'AKS' | 'Avs' | 'AzureAppService' | 'AzureAppServiceContainer' | 'AzureSQLVM' | 'AzureSpringApps' | 'AzureVM' | 'ContainerApps' | 'FlexServerPG' | 'MySQLAzureFlexServer' | 'OracleIaasVM' | 'SAPAzureInstance' | 'SqlDatabase' | 'SqlMI' | 'Unknown' | string (ReadOnly): The target name.
* **targetType**: 'Database' | 'Host' | 'Instance' | 'Machine' | 'ManagementServer' | 'Server' | 'Unknown' | 'WebApplication' | 'WebServer' | string (ReadOnly): The target type.

## TargetSourcePair
### Properties
* **confidenceScore**: int (ReadOnly): The confidence score.
* **costDetails**: [CostDetailsCommon](#costdetailscommon)[] (ReadOnly): The cost details.
* **managementDetails**: [ManagementDetails](#managementdetails)[] (ReadOnly): The management details.
* **migrationDetails**: [MigrationDetails](#migrationdetails) (ReadOnly): The migration details.
* **savingsDetails**: [SavingsDetailsCommon](#savingsdetailscommon)[] (ReadOnly): The savings details.
* **sourceCount**: int (ReadOnly): The count of a type of source.
* **sourceRef**: 'IIS' | 'Machine' | 'MySQLServer' | 'OracleDatabase' | 'OracleServer' | 'SAPInstance' | 'SpringbootApplication' | 'SqlDatabase' | 'SqlInstance' | 'TomCat' | 'Unknown' | 'WebApps' | string (ReadOnly): The source name.
* **targetCount**: int (ReadOnly): The count of a type of target.
* **targetRef**: 'AKS' | 'Avs' | 'AzureAppService' | 'AzureAppServiceContainer' | 'AzureSQLVM' | 'AzureSpringApps' | 'AzureVM' | 'ContainerApps' | 'FlexServerPG' | 'MySQLAzureFlexServer' | 'OracleIaasVM' | 'SAPAzureInstance' | 'SqlDatabase' | 'SqlMI' | 'Unknown' | string (ReadOnly): The target name.

