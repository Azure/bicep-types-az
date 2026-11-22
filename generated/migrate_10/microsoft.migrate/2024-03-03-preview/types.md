# Microsoft.Migrate @ 2024-03-03-preview

## Resource Microsoft.Migrate/assessmentProjects/sqlAssessmentOptions@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [SqlGraphAssessmentOptionsProperties](#sqlgraphassessmentoptionsproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/sqlAssessmentOptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/sqlAssessments@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SqlAssessmentV3Properties](#sqlassessmentv3properties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/sqlAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/sqlAssessments/assessedSqlDatabases@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssessedSqlDatabaseV3Properties](#assessedsqldatabasev3properties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/sqlAssessments/assessedSqlDatabases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/sqlAssessments/assessedSqlInstances@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssessedSqlInstanceV3Properties](#assessedsqlinstancev3properties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/sqlAssessments/assessedSqlInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/sqlAssessments/assessedSqlMachines@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssessedSqlMachineV3Properties](#assessedsqlmachinev3properties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/sqlAssessments/assessedSqlMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/sqlAssessments/summaries@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SummaryProperties](#summaryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/sqlAssessments/summaries' (ReadOnly, DeployTimeConstant): The resource type

## Function downloadUrl (Microsoft.Migrate/assessmentProjects/sqlAssessments@2024-03-03-preview)
* **Resource**: Microsoft.Migrate/assessmentProjects/sqlAssessments
* **ApiVersion**: 2024-03-03-preview
* **Input**: any
* **Output**: [DownloadUrl](#downloadurl)

## AssessedSqlDatabaseV3Properties
### Properties
* **createdTimestamp**: string (ReadOnly): When was assessed SQL database first created.
* **extendedDetails**: [SqlDbExtendedDetails](#sqldbextendeddetails) (ReadOnly): The sql db extended details.
* **linkages**: [Linkages](#linkages)[] (ReadOnly): The linkages list.
* **recommendations**: [SqlEntityRecommendations](#sqlentityrecommendations)[] (ReadOnly): The recommendation list.
* **updatedTimestamp**: string (ReadOnly): When was assessed SQL database last updated.
* **workloadType**: 'Database' | 'Host' | 'Instance' | 'Machine' | 'ManagementServer' | 'Server' | 'Unknown' | 'WebApplication' | 'WebServer' | string (ReadOnly): The workload type

## AssessedSqlDiskDataV3
### Properties
* **displayName**: string (ReadOnly): The disk display name.
* **gigabytesProvisioned**: int: Gets the gigabytes provisioned.
* **megabytesPerSecondOfRead**: int: Gets the megabytes per second of read.
* **megabytesPerSecondOfWrite**: int: Gets the megabytes per second of write.
* **name**: string (ReadOnly): The disk name.
* **numberOfReadOperationsPerSecond**: int: Gets the number of read operations per second.
* **numberOfWriteOperationsPerSecond**: int: Gets the number of write operations per second.

## AssessedSqlInstanceDatabaseSummary
### Properties
* **largestDatabaseSizeInMB**: int: Gets the largest database size in MB.
* **numberOfUserDatabases**: int: Gets the number of user databases.
* **totalDatabaseSizeInMB**: int: Gets the total database size in MB.
* **totalDiscoveredUserDatabases**: int: Gets the total discovered user databases.

## AssessedSqlInstanceDiskDetails
### Properties
* **diskId**: string: Gets the disk id.
* **diskSizeInMB**: int: Gets the disk size in mb.
* **megabytesPerSecondOfRead**: int: Gets the megabytes per second of read.
* **megabytesPerSecondOfWrite**: int: Gets the megabytes per second of write.
* **numberOfReadOperationsPerSecond**: int: Gets the number of read operations per second.
* **numberOfWriteOperationsPerSecond**: int: Gets the number of write operations per second.

## AssessedSqlInstanceStorageDetails
### Properties
* **diskSizeInMB**: int: Gets the disk size in mb.
* **megabytesPerSecondOfRead**: int: Gets the megabytes per second of read.
* **megabytesPerSecondOfWrite**: int: Gets the megabytes per second of read.
* **numberOfReadOperationsPerSecond**: int: Gets the number of read operations per second.
* **numberOfWriteOperationsPerSecond**: int: Gets the number of write operations per second.
* **storageType**: string: Gets the storage type.

## AssessedSqlInstanceV3Properties
### Properties
* **createdTimestamp**: string (ReadOnly): When was assessed SQL instance first created.
* **extendedDetails**: [SqlInstanceExtendedDetails](#sqlinstanceextendeddetails) (ReadOnly): The sql instance extended details.
* **linkages**: [Linkages](#linkages)[] (ReadOnly): The linkages list.
* **recommendations**: [SqlEntityRecommendations](#sqlentityrecommendations)[] (ReadOnly): The recommendation list.
* **updatedTimestamp**: string (ReadOnly): When was assessed SQL instance last updated.
* **workloadType**: 'Database' | 'Host' | 'Instance' | 'Machine' | 'ManagementServer' | 'Server' | 'Unknown' | 'WebApplication' | 'WebServer' | string (ReadOnly): The workload type

## AssessedSqlMachineV3Properties
### Properties
* **assessedMachineType**: 'AssessedMachine' | 'AvsAssessedMachine' | 'SqlAssessedMachine' | 'Unknown' | string (ReadOnly): Assessed machine type.
* **createdTimestamp**: string (ReadOnly): When was machine first created.
* **extendedDetails**: [SqlMachineExtendedDetails](#sqlmachineextendeddetails) (ReadOnly): The sql instance extended details.
* **linkages**: [Linkages](#linkages)[] (ReadOnly): The linkages list.
* **recommendations**: [SqlMachineRecommendations](#sqlmachinerecommendations)[] (ReadOnly): The recommendation list.
* **updatedTimestamp**: string (ReadOnly): When was machine last updated.
* **workloadType**: 'Database' | 'Host' | 'Instance' | 'Machine' | 'ManagementServer' | 'Server' | 'Unknown' | 'WebApplication' | 'WebServer' | string (ReadOnly): The workload type

## AssessedSqlNetworkAdaptersV3
### Properties
* **displayName**: string (ReadOnly): Display Name of the Machine.
* **ipAddresses**: string[] (ReadOnly): Gets the ip addresses.
* **macAddress**: string: Gets the mac address.
* **megabytesPerSecondRecieved**: int: Gets the megabytes per second received.
* **megabytesPerSecondTransmitted**: int: Gets the megabytes per second transmitted.
* **name**: string (ReadOnly): The disk name.
* **netGigabytesTransmittedPerMonth**: int: Gets the net gigabytes transmitted per month.

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

## Configuration
### Properties
* **azureTarget**: 'AKS' | 'Avs' | 'AzureAppService' | 'AzureAppServiceContainer' | 'AzureSQLVM' | 'AzureSpringApps' | 'AzureVM' | 'FlexServerPG' | 'MySQLAzureFlexServer' | 'OracleIaasVM' | 'SAPAzureInstance' | 'SqlDatabase' | 'SqlMI' | 'Unknown' | string (ReadOnly): The azure target.
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' | string (ReadOnly): The azure target.

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
* **assessmentReportUrl**: string (Required, ReadOnly): Hyperlink to download report.
* **expirationTime**: string (Required, ReadOnly): Expiry date of download url.

## EntityUptime
### Properties
* **daysPerMonth**: int: Gets the days per month.
* **hoursPerDay**: int: Gets the hours per day.

## ImpactedAssessmentObject
### Properties
* **objectName**: string (ReadOnly): Gets the object name.
* **objectType**: string (ReadOnly): Gets the object type.

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

## MigrationGuidelineContext
### Properties
* **contextKey**: string: Gets the reasoning context key.
* **contextValue**: string: Gets the reasoning context value.

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

## ProductSupportStatus
### Properties
* **currentEsuYear**: string (ReadOnly): Gets or sets the current ESU support year.
* **currentVersion**: string (ReadOnly): Gets or sets current version of ServicePack.
* **esuStatus**: string (ReadOnly): Gets or sets the Extended Security Update ESU status.
* **eta**: int (ReadOnly): Gets or sets the ETA.
* **extendedSecurityUpdateYear1EndDate**: string (ReadOnly): Gets or sets the extended security update year 1 end date of the product.
* **extendedSecurityUpdateYear2EndDate**: string (ReadOnly): Gets or sets the extended security update year 2 end date of the product.
* **extendedSecurityUpdateYear3EndDate**: string (ReadOnly): Gets or sets the extended security update year 3 end date of the product.
* **extendedSupportEndDate**: string (ReadOnly): Gets or sets the extended support end date of the product.
* **mainstreamEndDate**: string (ReadOnly): Gets or sets the main stream end date of the product.
* **servicePackStatus**: string (ReadOnly): Gets or sets ServicePack of the product.
* **supportStatus**: string (ReadOnly): Gets or sets the support status of the product.

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

## SqlAssessmentMigrationIssue
### Properties
* **impactedObjects**: [ImpactedAssessmentObject](#impactedassessmentobject)[] (ReadOnly): Gets the list of impacted objects.
* **issueCategory**: 'Internal' | 'Issue' | 'Warning' | string (ReadOnly): The issue category.
* **issueCode**: string (ReadOnly): The issue id.
* **issueDescription**: string (ReadOnly): The issue description.
* **moreInformation**: [MoreInformation](#moreinformation)[] (ReadOnly): The more information list.
* **possibleCause**: string (ReadOnly): The possible causes.
* **recommendedActions**: string[] (ReadOnly): The recommended action.

## SqlAssessmentOptionsOutboundEdgeGroup
### Properties
* **azureOfferCode**: ('EA' | 'MSAZR0003P' | 'MSAZR0023P' | 'MSAZRUSGOV0003P' | 'MSMCAZR0044P' | 'MSMCAZR0059P' | 'MSMCAZR0060P' | 'MSMCAZR0063P' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | 'Unknown' | string)[] (Required): Gets or sets the Azure Offer Code.
* **azureOfferCodeForVm**: ('EA' | 'MSAZR0003P' | 'MSAZR0023P' | 'MSAZRUSGOV0003P' | 'MSMCAZR0044P' | 'MSMCAZR0059P' | 'MSMCAZR0060P' | 'MSMCAZR0063P' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | 'Unknown' | string)[] (Required): Gets or sets the Azure Offer Code.
* **azureVmFamilies**: ('Av2_series' | 'Basic_A0_A4' | 'DC_Series' | 'DS_series' | 'DSv2_series' | 'D_series' | 'Dadsv5_series' | 'Dasv4_series' | 'Dasv5_series' | 'Dav4_series' | 'Ddsv4_series' | 'Ddsv5_series' | 'Ddv4_series' | 'Ddv5_series' | 'Dsv3_series' | 'Dsv4_series' | 'Dsv5_series' | 'Dv2_series' | 'Dv3_series' | 'Dv4_series' | 'Dv5_series' | 'Eadsv5_series' | 'Easv4_series' | 'Easv5_series' | 'Eav4_series' | 'Ebdsv5_series' | 'Ebsv5_series' | 'Edsv4_series' | 'Edsv5_series' | 'Edv4_series' | 'Edv5_series' | 'Esv3_series' | 'Esv4_series' | 'Esv5_series' | 'Ev3_series' | 'Ev4_series' | 'Ev5_series' | 'F_series' | 'Fs_series' | 'Fsv2_series' | 'GS_series' | 'G_series' | 'H_series' | 'Ls_series' | 'Lsv2_series' | 'M_series' | 'Mdsv2_series' | 'Msv2_series' | 'Mv2_series' | 'Standard_A0_A7' | 'Standard_A8_A11' | 'Unknown' | string)[] (Required): Gets or sets the Azure VM families.
* **azureVmFamilyCategories**: ('ComputeOptimized' | 'Confidential' | 'GeneralPurpose' | 'GpuOptimized' | 'HighPerformanceCompute' | 'MemoryOptimized' | 'StorageOptimized' | 'SupportsPremiumStorage' | 'SupportsUltraDiskStorage' | 'Unknown' | string)[] (Required): Gets or sets the Azure VM family categories.
* **computeTiers**: ('Automatic' | 'Provisioned' | 'Serverless' | 'Unknown' | string)[] (Required): Gets or sets the Azure SQL Compute tiers.
* **currencies**: ('ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string)[] (Required): Gets or sets the Azure Currency.
* **hardwareGenerations**: ('Automatic' | 'DC_series' | 'Fsv2_series' | 'Gen5' | 'M_series' | 'Unknown' | string)[] (Required): Gets or sets the Azure SQL Hardware generations.
* **licensingProgram**: ('EA' | 'MCA' | 'Retail' | 'Unknown' | string)[] (Required): Gets or sets the Licensing Program.
* **premiumDiskSupport**: ('PremiumDiskNotSupported' | 'PremiumDiskSupported' | string)[] (Required): Gets or sets the premium disk support.
* **savingsOptions**: ('CustomAzureOfferCode' | 'None' | 'RI1Year' | 'RI3Year' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | string)[] (Required): Gets or sets the Assessment Savings Options.
* **serviceTiers**: ('Automatic' | 'BusinessCritical' | 'GeneralPurpose' | 'HyperScale' | 'Unknown' | string)[] (Required): Gets or sets the Azure SQL service tiers.
* **targetLocations**: ('AustraliaCentral' | 'AustraliaCentral2' | 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaEast2' | 'ChinaNorth' | 'ChinaNorth2' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'FranceCentral' | 'FranceSouth' | 'GermanyCentral' | 'GermanyNorth' | 'GermanyNortheast' | 'GermanyWestCentral' | 'IsraelCentral' | 'ItalyNorth' | 'JapanEast' | 'JapanWest' | 'JioIndiaWest' | 'KoreaCentral' | 'KoreaSouth' | 'MexicoCentral' | 'NewZealandNorth' | 'NorthCentralUs' | 'NorthEurope' | 'NorwayEast' | 'NorwayWest' | 'PolandCentral' | 'QatarCentral' | 'SouthAfricaNorth' | 'SouthAfricaWest' | 'SouthCentralUs' | 'SouthIndia' | 'SoutheastAsia' | 'SpainCentral' | 'SwedenCentral' | 'SwitzerlandNorth' | 'SwitzerlandWest' | 'UAECentral' | 'UAENorth' | 'USDoDCentral' | 'USDoDEast' | 'USGovArizona' | 'USGovIowa' | 'USGovTexas' | 'USGovVirginia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'UsNatEast' | 'UsNatWest' | 'UsSecCentral' | 'UsSecEast' | 'UsSecWest' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' | string)[] (Required): Gets or sets the Azure Locations.
* **targetTypes**: ('AzureSqlDatabase' | 'AzureSqlManagedInstance' | 'AzureSqlVirtualMachine' | 'AzureVirtualMachine' | 'Recommended' | 'Unknown' | string)[] (Required): Gets or sets the Azure SQL target types.

## SqlAssessmentSettings
### Properties
* **asyncCommitModeIntent**: 'DisasterRecovery' | 'HighAvailability' | 'None' | string: Gets or sets user preference indicating intent of async commit mode.
* **azureLocation**: string: Azure Location or Azure region where to which the machines will be migrated.
* **azureSecurityOfferingType**: 'MDC' | 'NO' | string: Gets or sets a value indicating azure security offering type.
* **azureSqlDatabaseSettings**: [SqlDbSettingsV3](#sqldbsettingsv3): Gets or sets user configurable SQL database settings.
* **azureSqlManagedInstanceSettings**: [SqlMiSettingsV3](#sqlmisettingsv3): Gets or sets user configurable SQL managed instance settings.
* **azureSqlVmSettings**: [SqlVmSettings](#sqlvmsettings): Gets or sets user configurable SQL VM settings.
* **billingSettings**: [BillingSettings](#billingsettings): Gets or sets the billing settings.
* **currency**: 'ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string: Currency in which prices should be reported.
* **disasterRecoveryLocation**: 'AustraliaCentral' | 'AustraliaCentral2' | 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaEast2' | 'ChinaNorth' | 'ChinaNorth2' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'FranceCentral' | 'FranceSouth' | 'GermanyCentral' | 'GermanyNorth' | 'GermanyNortheast' | 'GermanyWestCentral' | 'IsraelCentral' | 'ItalyNorth' | 'JapanEast' | 'JapanWest' | 'JioIndiaWest' | 'KoreaCentral' | 'KoreaSouth' | 'MexicoCentral' | 'NewZealandNorth' | 'NorthCentralUs' | 'NorthEurope' | 'NorwayEast' | 'NorwayWest' | 'PolandCentral' | 'QatarCentral' | 'SouthAfricaNorth' | 'SouthAfricaWest' | 'SouthCentralUs' | 'SouthIndia' | 'SoutheastAsia' | 'SpainCentral' | 'SwedenCentral' | 'SwitzerlandNorth' | 'SwitzerlandWest' | 'UAECentral' | 'UAENorth' | 'USDoDCentral' | 'USDoDEast' | 'USGovArizona' | 'USGovIowa' | 'USGovTexas' | 'USGovVirginia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'UsNatEast' | 'UsNatWest' | 'UsSecCentral' | 'UsSecEast' | 'UsSecWest' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' | string: Gets or sets the Azure Location or Azure region where to which the machines
will be migrated.
* **discountPercentage**: int: Custom discount percentage.
* **enableHadrAssessment**: bool: Gets or sets a value indicating whether HADR assessments needs to be created.
* **entityUptime**: [EntityUptime](#entityuptime): Gets or sets the duration for which the entity (SQL, VMs) are up in the
on-premises environment.
* **environmentType**: 'DevTest' | 'Production' | 'Unknown' | string: Gets or sets user configurable setting to display the environment type.
* **isInternetAccessAvailable**: bool: Gets or sets a value indicating whether internet access is available.
* **multiSubnetIntent**: 'DisasterRecovery' | 'HighAvailability' | 'None' | string: Gets or sets user preference indicating intent of multi-subnet configuration.
* **osLicense**: 'No' | 'Unknown' | 'Yes' | string: Gets or sets user configurable setting to display the azure hybrid use benefit.
* **performanceData**: [PerformanceData](#performancedata): Gets or sets the performance data.
* **preferredTargets**: ('AKS' | 'Avs' | 'AzureAppService' | 'AzureAppServiceContainer' | 'AzureSQLVM' | 'AzureSpringApps' | 'AzureVM' | 'FlexServerPG' | 'MySQLAzureFlexServer' | 'OracleIaasVM' | 'SAPAzureInstance' | 'SqlDatabase' | 'SqlMI' | 'Unknown' | string)[]: Gets or sets SQL the preferred azure targets.
* **savingsSettings**: [SavingsSettings](#savingssettings): Gets or sets the savings settings.
* **scalingFactor**: int: Percentage of buffer that user wants on performance metrics when recommending
Azure sizes.
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' | string: Assessment sizing criterion.
* **sqlServerLicense**: 'No' | 'Unknown' | 'Yes' | string: SQL server license.

## SqlAssessmentV3Properties
### Properties
* **details**: [AssessmentDetails](#assessmentdetails): Gets or sets the details of the assessment.
* **fallbackMachineAssessmentArmId**: string: Gets or sets the machine assessment ARM ID for VM fallback.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **scope**: [Scope](#scope): Gets or sets the scope of assessment.
* **settings**: [SqlAssessmentSettings](#sqlassessmentsettings): Gets or sets the settings for the assessment.

## SqlAvailabilityGroupDataOverview
### Properties
* **availabilityGroupId**: string: Gets the availability group id.
* **availabilityGroupName**: string: Gets the availability group name.
* **sqlAvailabilityGroupEntityId**: string: Gets the availability group entity id.
* **sqlAvailabilityGroupSdsArmId**: string: Gets the availability group arm id.
* **sqlAvailabilityReplicaId**: string: Gets the availability replica id.

## SqlAvailabilityReplicaSummary
### Properties
* **numberOfAsynchronousNonReadReplicas**: int: Gets the number Of asynchronous non read replicas.
* **numberOfAsynchronousReadReplicas**: int: Gets the number Of asynchronous read replicas.
* **numberOfPrimaryReplicas**: int: Gets the number Of primary replicas.
* **numberOfSynchronousNonReadReplicas**: int: Gets the number Of synchronous non read replicas.
* **numberOfSynchronousReadReplicas**: int: Gets the number Of synchronous read replicas.

## SqlDbExtendedDetails
### Properties
* **bufferCacheSizeInMB**: int (ReadOnly): the aggregated cache size of this database.
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel150' | 'CompatLevel80' | 'CompatLevel90' | 'Unknown' | string (ReadOnly): Database compatibility level.
* **databaseSizeInMB**: int (ReadOnly): The product support status.
* **isClustered**: bool: Gets or sets a value indicating whether the parent SQL instance is clustered or not.
* **isDatabaseHighlyAvailable**: bool (ReadOnly): The product support status.
* **isHighAvailabilityEnabled**: bool: Gets or sets a value indicating whether the high availability is enabled or not.
* **linkedAvailabilityGroupOverview**: [SqlAvailabilityGroupDataOverview](#sqlavailabilitygroupdataoverview) (ReadOnly): The linked availability group overview.
* **megabytesPerSecondOfRead**: int (ReadOnly): The read throughput of the SQL database.
* **megabytesPerSecondOfWrite**: int (ReadOnly): The write throughput of the SQL database.
* **numberOfReadOperationsPerSecond**: int (ReadOnly): The read operations per second of the SQL database.
* **numberOfWriteOperationsPerSecond**: int (ReadOnly): The write operations per second of the SQL database.
* **percentageCoresUtilization**: int (ReadOnly): The percentage of the total number of cores being utilized by the SQL database.
* **productSupportStatus**: [ProductSupportStatus](#productsupportstatus) (ReadOnly): The product support status.
* **sqlEdition**: string (Required): Gets or sets the SQL edition.
* **sqlVersion**: string (Required): Gets or sets the SQL version.

## SqlDbSettingsV3
### Properties
* **azureSqlComputeTier**: 'Automatic' | 'Provisioned' | 'Serverless' | 'Unknown' | string: Gets or sets the azure SQL compute tier.
* **azureSqlDataBaseType**: 'Automatic' | 'ElasticPool' | 'SingleDatabase' | 'Unknown' | string: Gets or sets the azure PAAS SQL instance type.
* **azureSqlPurchaseModel**: 'DTU' | 'Unknown' | 'VCore' | string: Gets or sets the azure SQL purchase model.
* **azureSqlServiceTier**: 'SqlService_Automatic' | 'SqlService_BusinessCritical' | 'SqlService_GeneralPurpose' | 'SqlService_HyperScale' | 'SqlService_Unknown' | string: Gets or sets the azure SQL service tier.

## SqlEntityRecommendations
### Properties
* **confidenceScore**: int (ReadOnly): The confidence score.
* **configuration**: [Configuration](#configuration) (ReadOnly): The configuration data.
* **fallbackMachineAssessmentArmId**: string: Gets or sets the machine assessment ARM ID for VM fallback.
* **migrationGuidelines**: [SqlMigrationGuideline](#sqlmigrationguideline)[] (ReadOnly): Gets the list of migration guidelines applicable to this target.
* **migrationIssues**: [SqlAssessmentMigrationIssue](#sqlassessmentmigrationissue)[] (ReadOnly): The migration issues list.
* **migrationPlatform**: 'IaaS' | 'PaaS' | 'SaaS' | 'Unknown' | string (ReadOnly): The migration Platform.
* **migrationSuitability**: [MigrationSuitability](#migrationsuitability) (ReadOnly): The migration suitability.
* **migrationTargetPlatform**: 'AzureSqlDatabase' | 'AzureSqlManagedInstance' | 'AzureSqlVirtualMachine' | 'AzureVirtualMachine' | 'Recommended' | 'Unknown' | string (ReadOnly): Gets the migration target platform.
* **recommendationReasonings**: [SqlRecommendationReasoning](#sqlrecommendationreasoning)[] (ReadOnly): The product support status.
* **recommendedFor**: [RecommendedFor](#recommendedfor) (ReadOnly): The recommended details.
* **securitySuitability**: [SecuritySuitability](#securitysuitability) (ReadOnly): The security suitability.
* **shouldProvisionReplicas**: bool (ReadOnly): Gets a value indicating whether replicas should be provisioned.
* **skuReplicationMode**: 'ActiveGeoReplication' | 'FailoverGroupInstance' | 'NotApplicable' | string (ReadOnly): Gets the replication mode.
* **skus**: [SqlEntityRecommendationsSkusItem](#sqlentityrecommendationsskusitem)[] (ReadOnly): The Skus list.
* **totalCost**: [CostDetailsCommon](#costdetailscommon)[] (ReadOnly): The total cost details.
* **totalSavings**: [SavingsDetailsCommon](#savingsdetailscommon)[] (ReadOnly): The total cost details.

## SqlEntityRecommendationsSkusItem
### Properties
* **details**: [SkuDetails](#skudetails) (ReadOnly): The sku details.
* **displayName**: string (ReadOnly): The sku name.
* **id**: string (ReadOnly): The sku id.
* **kind**: 'Details' | 'Endpoint' | string (ReadOnly): The Sku kind.
* **resourceUri**: string (ReadOnly): The resource uri.
* **sources**: [SqlEntityRecommendationsSkusPropertiesItemsItem](#sqlentityrecommendationsskuspropertiesitemsitem)[] (ReadOnly): The source name.
* **type**: 'AppServicePlan' | 'AzureSpringApps' | 'Compute' | 'Network' | 'Storage' | 'Unknown' | string (ReadOnly): The sku type.

## SqlEntityRecommendationsSkusPropertiesItemsItem
### Properties
* **migrationSuitability**: [MigrationSuitability](#migrationsuitability) (ReadOnly): The sku type.
* **name**: string (ReadOnly): The sku name.

## SqlFCIMetadata
### Properties
* **fciSharedDiskCount**: int: Gets the fci shared disk count.
* **isMultiSubnet**: bool: Gets whether fci is multi subnet.
* **state**: 'Failed' | 'Inherited' | 'Initializing' | 'Offline' | 'OfflinePending' | 'Online' | 'OnlinePending' | 'Pending' | 'Unknown' | string: Gets the Sql fci meta data state.

## SqlGraphAssessmentOptionsProperties
### Properties
* **edges**: [SqlGraphAssessmentOptionsPropertiesEdges](#sqlgraphassessmentoptionspropertiesedges) (Required): Gets or sets the edges.

## SqlGraphAssessmentOptionsPropertiesEdges
### Properties
### Additional Properties
* **Additional Properties Type**: [SqlAssessmentOptionsOutboundEdgeGroup](#sqlassessmentoptionsoutboundedgegroup)

## SqlInstanceExtendedDetails
### Properties
* **availabilityReplicaSummary**: [SqlAvailabilityReplicaSummary](#sqlavailabilityreplicasummary) (ReadOnly): Gets the overview counts of availability replicas in the assessed instance, by
commit mode and read type.
* **databaseSummary**: [AssessedSqlInstanceDatabaseSummary](#assessedsqlinstancedatabasesummary) (ReadOnly): The databases summary.
* **fciMetadata**: [SqlFCIMetadata](#sqlfcimetadata) (ReadOnly): Gets the FCI metadata if this instance represents an FCI instance.
* **hasScanOccurred**: bool (ReadOnly): Gets or sets a value indicating whether SQL instance has been deep discovered.
* **isClustered**: bool (ReadOnly): Gets a value indicating whether the SQL instance is clustered or not.
* **isHighAvailabilityEnabled**: bool (ReadOnly): Gets a value indicating whether the high availability is enabled or not.
* **logicalDisks**: [AssessedSqlInstanceDiskDetails](#assessedsqlinstancediskdetails)[] (ReadOnly): The logical disk details.
* **memoryInUseInMB**: int (ReadOnly): Gets or sets the memory used by SQL instance in megabytes.
* **numberOfCoresAllocated**: int (ReadOnly): Number of CPU cores assigned to the SQL instance.
* **percentageCoresUtilization**: int (ReadOnly): The percentage of the total number of cores being utilized by the SQL instance.
* **productSupportStatus**: [ProductSupportStatus](#productsupportstatus) (ReadOnly): Gets the product support status related details.
* **recommendedTargetReasonings**: [SqlRecommendationReasoning](#sqlrecommendationreasoning)[] (ReadOnly): Gets the list of recommended target reasoning.
* **sqlEdition**: string (ReadOnly): SQL instance edition.
* **sqlVersion**: string (ReadOnly): SQL instance version.
* **storageTypeBasedDetails**: [AssessedSqlInstanceStorageDetails](#assessedsqlinstancestoragedetails)[] (ReadOnly): Gets the storage details.

## SqlMachineExtendedDetails
### Properties
* **biosGuid**: string (ReadOnly): Gets or sets the BIOS GUID for the machine.
* **bootType**: 'BIOS' | 'EFI' | 'NotSpecified' | 'Unknown' | string (ReadOnly): Boot type of machine discovered in private data center.
* **description**: string (ReadOnly): Description for the machine.
* **disks**: [AssessedSqlDiskDataV3](#assessedsqldiskdatav3)[] (ReadOnly): Gets the list of data disks that were assessed as part of this assessment.
* **displayName**: string (ReadOnly): Display Name of the Machine.
* **fqdn**: string (ReadOnly): Gets or sets the FQDN for the machine.
* **megabytesOfMemory**: int (ReadOnly): Megabytes of memory found allocated for the machine in private data center.
* **networkAdapters**: [AssessedSqlNetworkAdaptersV3](#assessedsqlnetworkadaptersv3)[] (ReadOnly): Gets the list of network adapters that were assessed as part of this assessment.
* **numberOfCores**: int (ReadOnly): Number of CPU cores found on the machine.
* **operatingSystemArchitecture**: 'Unknown' | 'X64' | 'X86' | string (ReadOnly): Operating system architecture as reported by datacenter management solution.
* **operatingSystemName**: string (ReadOnly): Operating system as reported by datacenter management solution.
* **operatingSystemType**: string (ReadOnly): Operating system as reported by datacenter management solution.
* **operatingSystemVersion**: string (ReadOnly): Operating system version as reported by datacenter management solution.
* **percentageCoresUtilization**: int (ReadOnly): Percentile of Percentage of Cores Utilized noted during time period T.
        
Here N and T are settings on Assessment.
* **percentageMemoryUtilization**: int (ReadOnly): Percentile of Percentage of Memory Utilized noted during time period T.
    
    Here N and T are settings on Assessment.
* **productSupportStatus**: [ProductSupportStatus](#productsupportstatus) (ReadOnly): Gets the product support status related details.

## SqlMachineRecommendations
### Properties
* **confidenceScore**: int (ReadOnly): The confidence score.
* **configuration**: [Configuration](#configuration) (ReadOnly): The configuration data.
* **migrationGuidelines**: [SqlMigrationGuideline](#sqlmigrationguideline)[] (ReadOnly): Gets the list of migration guidelines applicable to this target.
* **migrationIssues**: [MigrationIssues](#migrationissues)[] (ReadOnly): The migration issues list.
* **migrationPlatform**: 'IaaS' | 'PaaS' | 'SaaS' | 'Unknown' | string (ReadOnly): The migration Platform.
* **migrationSuitability**: [MigrationSuitability](#migrationsuitability) (ReadOnly): The migration suitability.
* **recommendedFor**: [RecommendedFor](#recommendedfor) (ReadOnly): The recommended details.
* **securitySuitability**: [SecuritySuitability](#securitysuitability) (ReadOnly): The security suitability.
* **skus**: [SqlMachineRecommendationsSkusItem](#sqlmachinerecommendationsskusitem)[] (ReadOnly): The Skus list.
* **totalCost**: [CostDetailsCommon](#costdetailscommon)[] (ReadOnly): The total cost details.
* **totalSavings**: [SavingsDetailsCommon](#savingsdetailscommon)[] (ReadOnly): The total cost details.

## SqlMachineRecommendationsSkusItem
### Properties
* **details**: [SkuDetails](#skudetails) (ReadOnly): The sku details.
* **displayName**: string (ReadOnly): The sku name.
* **id**: string (ReadOnly): The sku id.
* **kind**: 'Details' | 'Endpoint' | string (ReadOnly): The Sku kind.
* **resourceUri**: string (ReadOnly): The resource uri.
* **sources**: [SqlMachineRecommendationsSkusPropertiesItemsItem](#sqlmachinerecommendationsskuspropertiesitemsitem)[] (ReadOnly): The source name.
* **type**: 'AppServicePlan' | 'AzureSpringApps' | 'Compute' | 'Network' | 'Storage' | 'Unknown' | string (ReadOnly): The sku type.

## SqlMachineRecommendationsSkusPropertiesItemsItem
### Properties
* **migrationSuitability**: [MigrationSuitability](#migrationsuitability) (ReadOnly): The sku type.
* **name**: string (ReadOnly): The sku name.

## SqlMigrationGuideline
### Properties
* **guidelineId**: string: Gets the guideline id.
* **migrationGuidelineCategory**: 'AvailabilityGroupGuideline' | 'FailoverCluterInstanceGuideLine' | 'General' | 'Unknown' | string: Gets the migration guideline category.
* **migrationGuidelineContext**: [MigrationGuidelineContext](#migrationguidelinecontext)[] (ReadOnly): Gets the migration guideline context.

## SqlMiSettingsV3
### Properties
* **azureSqlInstanceType**: 'Automatic' | 'InstancePools' | 'SingleInstance' | 'Unknown' | string: Gets or sets the azure PAAS SQL instance type.
* **azureSqlServiceTier**: 'SqlService_Automatic' | 'SqlService_BusinessCritical' | 'SqlService_GeneralPurpose' | 'SqlService_HyperScale' | 'SqlService_Unknown' | string: Gets or sets the azure SQL service tier.

## SqlRecommendationReasoning
### Properties
* **contextParameters**: [SqlRecommendationReasoningContext](#sqlrecommendationreasoningcontext)[] (ReadOnly): Gets the Sql recommended reasoning parameters.
* **reasoningCategory**: string: Gets the reasoning category.
* **reasoningId**: string: Gets the reasoning id.
* **reasoningString**: string: Gets the reasoning status.

## SqlRecommendationReasoningContext
### Properties
* **contextKey**: string: Gets the reasoning context key.
* **contextValue**: string: Gets the reasoning context value.

## SqlVmSettings
### Properties
* **instanceSeries**: ('Av2_series' | 'Basic_A0_A4' | 'DC_Series' | 'DS_series' | 'DSv2_series' | 'D_series' | 'Dadsv5_series' | 'Dasv4_series' | 'Dasv5_series' | 'Dav4_series' | 'Ddsv4_series' | 'Ddsv5_series' | 'Ddv4_series' | 'Ddv5_series' | 'Dsv3_series' | 'Dsv4_series' | 'Dsv5_series' | 'Dv2_series' | 'Dv3_series' | 'Dv4_series' | 'Dv5_series' | 'Eadsv5_series' | 'Easv4_series' | 'Easv5_series' | 'Eav4_series' | 'Ebdsv5_series' | 'Ebsv5_series' | 'Edsv4_series' | 'Edsv5_series' | 'Edv4_series' | 'Edv5_series' | 'Esv3_series' | 'Esv4_series' | 'Esv5_series' | 'Ev3_series' | 'Ev4_series' | 'Ev5_series' | 'F_series' | 'Fs_series' | 'Fsv2_series' | 'GS_series' | 'G_series' | 'H_series' | 'Ls_series' | 'Lsv2_series' | 'M_series' | 'Mdsv2_series' | 'Msv2_series' | 'Mv2_series' | 'Standard_A0_A7' | 'Standard_A8_A11' | 'Unknown' | string)[]: Gets or sets the Azure VM families (calling instance series to keep it
consistent with other targets).

## SummaryProperties
### Properties
* **costComponents**: [CostDetailsCommon](#costdetailscommon)[] (ReadOnly): The cost components.
* **savingsComponents**: [SavingsDetailsCommon](#savingsdetailscommon)[] (ReadOnly): The cost components.
* **sources**: [SourceDetails](#sourcedetails)[] (ReadOnly): The source details list.
* **summaryName**: string (ReadOnly): The summary name
* **summaryType**: 'Strategy' | 'Target' | 'Unknown' | string (ReadOnly): The summary type
* **targets**: [TargetDetails](#targetdetails)[] (ReadOnly): The target details list.
* **targetSourceMapping**: [TargetSourcePair](#targetsourcepair)[] (ReadOnly): The target source mapping.

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

