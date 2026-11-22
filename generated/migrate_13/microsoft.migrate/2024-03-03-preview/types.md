# Microsoft.Migrate @ 2024-03-03-preview

## Resource Microsoft.Migrate/assessmentProjects/webAppCompoundAssessments@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CompoundAssessmentProperties](#compoundassessmentproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/webAppCompoundAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/webAppCompoundAssessments/summaries@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WebAppCompoundAssessmentSummaryProperties](#webappcompoundassessmentsummaryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/webAppCompoundAssessments/summaries' (ReadOnly, DeployTimeConstant): The resource type

## Function downloadUrl (Microsoft.Migrate/assessmentProjects/webAppCompoundAssessments@2024-03-03-preview)
* **Resource**: Microsoft.Migrate/assessmentProjects/webAppCompoundAssessments
* **ApiVersion**: 2024-03-03-preview
* **Input**: any
* **Output**: [DownloadUrl](#downloadurl)

## CompoundAssessmentDetails
### Properties
* **createdTimestamp**: string: Timestamp when the assessment was created.
* **status**: 'Completed' | 'Created' | 'Deleted' | 'Failed' | 'Invalid' | 'OutDated' | 'OutOfSync' | 'Running' | 'Updated' | string (Required): Status of the assessment.
* **updatedTimestamp**: string: Timestamp when the assessment was last updated.

## CompoundAssessmentProperties
### Properties
* **details**: [CompoundAssessmentDetails](#compoundassessmentdetails) (ReadOnly): Details of the compound assessment.
* **fallbackMachineAssessmentArmId**: string: Fallback machine assessment ARM ID.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **targetAssessmentArmIds**: [TargetAssessmentArmIds](#targetassessmentarmids) (Required): ARM IDs of the target assessments.

## CostDetailsCommon
### Properties
* **costDetail**: [CostDetailsCommonCostDetailItem](#costdetailscommoncostdetailitem)[] (ReadOnly): The sku cost details per azure offer type.
* **savingOptions**: 'CustomAzureOfferCode' | 'None' | 'RI1Year' | 'RI3Year' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | string (ReadOnly): The savings options.

## CostDetailsCommonCostDetailItem
### Properties
* **name**: 'DataProtectionService' | 'MonitoringService' | 'MonthlyAvsExternalStorageCost' | 'MonthlyAvsNetworkCost' | 'MonthlyAvsNodeCost' | 'MonthlyAzureHybridCost' | 'MonthlyBandwidthCost' | 'MonthlyComputeCost' | 'MonthlyLicensingCost' | 'MonthlyLinuxAzureHybridCost' | 'MonthlyManagementCost' | 'MonthlyPremiumStorageCost' | 'MonthlyPremiumV2StorageCost' | 'MonthlySecurityCost' | 'MonthlyStandardHddStorageCost' | 'MonthlyStandardSsdStorageCost' | 'MonthlyStorageCost' | 'MonthlyUltraDiskCost' | 'MonthlyUltraStorageCost' | 'PatchingService' | 'TotalMonthlyCost' | string (ReadOnly): The name.
* **value**: int (ReadOnly): The value.

## DiscoveredLightSummary
### Properties
* **numberOfServers**: int (Required): Number of servers.
* **numberOfWebApps**: int (Required): Number of web apps.
* **numberOfWebAppsPerType**: [WebAppsPerType](#webappspertype)[]: Number of web apps per type.
* **numberOfWebServers**: int (Required): Number of web servers.
* **numberOfWebServersPerType**: [WebServersPerType](#webserverspertype)[]: Number of web servers per type.

## DownloadUrl
### Properties
* **assessmentReportUrl**: string (Required, ReadOnly): Hyperlink to download report.
* **expirationTime**: string (Required, ReadOnly): Expiry date of download url.

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

## SavingsDetailsCommon
### Properties
* **savingOptions**: 'CustomAzureOfferCode' | 'None' | 'RI1Year' | 'RI3Year' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | string (ReadOnly): The savings options.
* **savingsDetail**: [SavingsDetailsCommonSavingsDetailItem](#savingsdetailscommonsavingsdetailitem)[] (ReadOnly): The sku cost details per azure offer type.

## SavingsDetailsCommonSavingsDetailItem
### Properties
* **name**: 'MonthlyAhubSqlCostSavings' | 'MonthlyAzureHybridCostSavings' | 'MonthlyLinuxAzureHybridCostSavings' | 'MonthlyVcfByolCostDifference' | string (ReadOnly): The name.
* **value**: int (ReadOnly): The value.

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

## TargetAssessmentArmIds
### Properties
* **aks**: string: ARM ID for Azure Kubernetes Service assessment.
* **azureAppService**: string: ARM ID for Azure App Service assessment.
* **azureAppServiceContainer**: string: ARM ID for Azure App Service Container assessment.

## TargetDetails
### Properties
* **count**: int (ReadOnly): The count of a type of source.
* **platform**: 'IaaS' | 'PaaS' | 'SaaS' | 'Unknown' | string (ReadOnly): The migration platform.
* **targetName**: 'AKS' | 'Avs' | 'AzureAppService' | 'AzureAppServiceContainer' | 'AzureSQLVM' | 'AzureSpringApps' | 'AzureVM' | 'FlexServerPG' | 'MySQLAzureFlexServer' | 'OracleIaasVM' | 'SAPAzureInstance' | 'SqlDatabase' | 'SqlMI' | 'Unknown' | string (ReadOnly): The target name.
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
* **targetRef**: 'AKS' | 'Avs' | 'AzureAppService' | 'AzureAppServiceContainer' | 'AzureSQLVM' | 'AzureSpringApps' | 'AzureVM' | 'FlexServerPG' | 'MySQLAzureFlexServer' | 'OracleIaasVM' | 'SAPAzureInstance' | 'SqlDatabase' | 'SqlMI' | 'Unknown' | string (ReadOnly): The target name.

## WebAppCompoundAssessmentSummaryProperties
### Properties
* **assessmentName**: string: Name of the assessment.
* **costComponents**: [CostDetailsCommon](#costdetailscommon)[] (ReadOnly): The cost components.
* **discoveredLightSummary**: [DiscoveredLightSummary](#discoveredlightsummary): Light summary of the compound assessment.
* **savingsComponents**: [SavingsDetailsCommon](#savingsdetailscommon)[] (ReadOnly): The cost components.
* **sources**: [SourceDetails](#sourcedetails)[] (ReadOnly): The source details list.
* **summaryName**: string (ReadOnly): The summary name
* **summaryType**: 'Strategy' | 'Target' | 'Unknown' | string (ReadOnly): The summary type
* **targets**: [TargetDetails](#targetdetails)[] (ReadOnly): The target details list.
* **targetSourceMapping**: [TargetSourcePair](#targetsourcepair)[] (ReadOnly): The target source mapping.

## WebAppsPerType
### Properties
* **count**: int (Required): Count of the web app type.
* **webAppType**: 'ASP.Net' | 'Java' | 'Unknown' | string (Required): Name of the web app type.

## WebServersPerType
### Properties
* **count**: int (Required): Count of the web app type.
* **webServerType**: 'IIS' | 'Tomcat' | 'Unknown' | string (Required): Name of the web app type.

