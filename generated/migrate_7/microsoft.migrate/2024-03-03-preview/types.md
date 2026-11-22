# Microsoft.Migrate @ 2024-03-03-preview

## Resource Microsoft.Migrate/assessmentProjects/assessmentOptions@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [MachineGraphAssessmentOptionsProperties](#machinegraphassessmentoptionsproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/assessmentOptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/assessments@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MachineAssessmentV2Properties](#machineassessmentv2properties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/assessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/assessments/assessedMachines@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssessedMachineV2Properties](#assessedmachinev2properties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/assessments/assessedMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/assessments/summaries@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SummaryProperties](#summaryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/assessments/summaries' (ReadOnly, DeployTimeConstant): The resource type

## Function downloadUrl (Microsoft.Migrate/assessmentProjects/assessments@2024-03-03-preview)
* **Resource**: Microsoft.Migrate/assessmentProjects/assessments
* **ApiVersion**: 2024-03-03-preview
* **Input**: any
* **Output**: [DownloadUrl](#downloadurl)

## AssessedDiskDataV3
### Properties
* **displayName**: string (ReadOnly): The disk display name.
* **gigabytesProvisioned**: int: Gets the gigabytes provisioned.
* **megabytesPerSecondOfRead**: int: Gets the megabytes per second of read.
* **megabytesPerSecondOfWrite**: int: Gets the megabytes per second of write.
* **name**: string (ReadOnly): The disk name.
* **numberOfReadOperationsPerSecond**: int: Gets the number of read operations per second.
* **numberOfWriteOperationsPerSecond**: int: Gets the number of write operations per second.

## AssessedMachineExtendedDetails
### Properties
* **assessedMachineType**: 'AssessedMachine' | 'AvsAssessedMachine' | 'SqlAssessedMachine' | 'Unknown' | string (ReadOnly): Assessed machine type.
* **bootType**: 'BIOS' | 'EFI' | 'NotSpecified' | 'Unknown' | string (ReadOnly): Boot type of machine discovered in private data center.
* **description**: string (ReadOnly): Description for the machine.
* **disks**: [AssessedDiskDataV3](#assesseddiskdatav3)[] (ReadOnly): Dictionary of disks attached to the machine. Key is ID of disk. Value is a disk object.
* **displayName**: string (ReadOnly): Display Name of the Machine.
* **errors**: [Error](#error)[] (ReadOnly): List of errors for this machine.
* **hostProcessor**: [ProcessorInfo](#processorinfo): Gets or sets the processor details of the host.
* **megabytesOfMemory**: int (ReadOnly): Megabytes of memory found allocated for the machine in private data center.
* **networkAdapters**: [AssessedMachineNetworkAdaptersV3](#assessedmachinenetworkadaptersv3)[] (ReadOnly): List of Network Adapters that were assessed as part of this machine's
assessment.
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

## AssessedMachineNetworkAdaptersV3
### Properties
* **displayName**: string (ReadOnly): Display Name of the Machine.
* **ipAddresses**: string[] (ReadOnly): Gets the ip addresses.
* **macAddress**: string: Gets the mac address.
* **megabytesPerSecondRecieved**: int: Gets the megabytes per second received.
* **megabytesPerSecondTransmitted**: int: Gets the megabytes per second transmitted.
* **name**: string (ReadOnly): The disk name.
* **netGigabytesTransmittedPerMonth**: int: Gets the net gigabytes transmitted per month.

## AssessedMachineV2Properties
### Properties
* **createdTimestamp**: string (ReadOnly): When was machine first created.
* **extendedDetails**: [AssessedMachineExtendedDetails](#assessedmachineextendeddetails) (ReadOnly): The assessed machine extended details.
* **linkages**: [Linkages](#linkages)[] (ReadOnly): The linkages list.
* **recommendations**: [MachineAssessmentRecommendation](#machineassessmentrecommendation)[] (ReadOnly): The recommendation list.
* **updatedTimestamp**: string (ReadOnly): When was machine last updated.
* **workloadType**: 'Database' | 'Host' | 'Instance' | 'Machine' | 'ManagementServer' | 'Server' | 'Unknown' | 'WebApplication' | 'WebServer' | string (ReadOnly): The workload type

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

## Error
### Properties
* **agentScenario**: string (ReadOnly): Gets the agent scenario where this error occurred.
* **applianceName**: string (ReadOnly): Gets the Appliance name.
* **code**: string (ReadOnly): Gets the error code.
* **id**: int (ReadOnly): Gets the error ID.
* **impactedAssessmentType**: string (ReadOnly): Gets the type of assessment impacted by this error.
* **message**: string (ReadOnly): Gets the error message.
* **messageParameters**: [ErrorMessageParametersItem](#errormessageparametersitem)[] (ReadOnly): Gets the error message parameters.
* **possibleCauses**: string (ReadOnly): Gets the error possible causes.
* **recommendedAction**: string (ReadOnly): Gets the recommended action for the error.
* **runAsAccountId**: string (ReadOnly): Gets the Run as account ID.
* **severity**: string (ReadOnly): Gets the error severity.
* **summaryMessage**: string (ReadOnly): Gets the error summary message.
* **updatedTimeStamp**: string (ReadOnly): Gets the time stamp when the error was updated.

## ErrorMessageParametersItem
### Properties
* **name**: string (ReadOnly): The name.
* **value**: string (ReadOnly): The value.

## Linkages
### Properties
* **armId**: string (ReadOnly): The arm id.
* **kind**: 'Database' | 'Instance' | 'Machine' | 'Server' | 'Unknown' | 'WebApplication' | 'WebServer' | string (ReadOnly): The linkage kind.
* **linkageType**: 'Parent' | 'Source' | string (ReadOnly): The linkage type.
* **workloadName**: string (ReadOnly): The workload name

## MachineAssessmentOptionsOutboundEdgeGroup
### Properties
* **azureOfferCode**: ('EA' | 'MSAZR0003P' | 'MSAZR0023P' | 'MSAZRUSGOV0003P' | 'MSMCAZR0044P' | 'MSMCAZR0059P' | 'MSMCAZR0060P' | 'MSMCAZR0063P' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | 'Unknown' | string)[] (Required): Gets or sets the Azure Offer Code.
* **azureVmFamilies**: ('Av2_series' | 'Basic_A0_A4' | 'DC_Series' | 'DS_series' | 'DSv2_series' | 'D_series' | 'Dadsv5_series' | 'Dasv4_series' | 'Dasv5_series' | 'Dav4_series' | 'Ddsv4_series' | 'Ddsv5_series' | 'Ddv4_series' | 'Ddv5_series' | 'Dsv3_series' | 'Dsv4_series' | 'Dsv5_series' | 'Dv2_series' | 'Dv3_series' | 'Dv4_series' | 'Dv5_series' | 'Eadsv5_series' | 'Easv4_series' | 'Easv5_series' | 'Eav4_series' | 'Ebdsv5_series' | 'Ebsv5_series' | 'Edsv4_series' | 'Edsv5_series' | 'Edv4_series' | 'Edv5_series' | 'Esv3_series' | 'Esv4_series' | 'Esv5_series' | 'Ev3_series' | 'Ev4_series' | 'Ev5_series' | 'F_series' | 'Fs_series' | 'Fsv2_series' | 'GS_series' | 'G_series' | 'H_series' | 'Ls_series' | 'Lsv2_series' | 'M_series' | 'Mdsv2_series' | 'Msv2_series' | 'Mv2_series' | 'Standard_A0_A7' | 'Standard_A8_A11' | 'Unknown' | string)[] (Required): Gets or sets the Azure VM families.
* **azureVmFamilyCategories**: ('ComputeOptimized' | 'Confidential' | 'GeneralPurpose' | 'GpuOptimized' | 'HighPerformanceCompute' | 'MemoryOptimized' | 'StorageOptimized' | 'SupportsPremiumStorage' | 'SupportsUltraDiskStorage' | 'Unknown' | string)[] (Required): Gets or sets the Azure VM family categories.
* **azureVmSecurityOptions**: ('CVM' | 'Standard' | 'TVM' | 'Unknown' | string)[]: Gets or sets the Azure VM security options.
* **currencies**: ('ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string)[] (Required): Gets or sets the Azure Currency.
* **licensingProgram**: ('EA' | 'MCA' | 'Retail' | 'Unknown' | string)[] (Required): Gets or sets the Licensing Program.
* **premiumDiskSupport**: ('PremiumDiskNotSupported' | 'PremiumDiskSupported' | string)[] (Required): Gets or sets the premium disk support.
* **savingsOptions**: ('CustomAzureOfferCode' | 'None' | 'RI1Year' | 'RI3Year' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | string)[] (Required): Gets or sets the Assessment Savings Options.
* **targetLocations**: ('AustraliaCentral' | 'AustraliaCentral2' | 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaEast2' | 'ChinaNorth' | 'ChinaNorth2' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'FranceCentral' | 'FranceSouth' | 'GermanyCentral' | 'GermanyNorth' | 'GermanyNortheast' | 'GermanyWestCentral' | 'IsraelCentral' | 'ItalyNorth' | 'JapanEast' | 'JapanWest' | 'JioIndiaWest' | 'KoreaCentral' | 'KoreaSouth' | 'MexicoCentral' | 'NewZealandNorth' | 'NorthCentralUs' | 'NorthEurope' | 'NorwayEast' | 'NorwayWest' | 'PolandCentral' | 'QatarCentral' | 'SouthAfricaNorth' | 'SouthAfricaWest' | 'SouthCentralUs' | 'SouthIndia' | 'SoutheastAsia' | 'SpainCentral' | 'SwedenCentral' | 'SwitzerlandNorth' | 'SwitzerlandWest' | 'UAECentral' | 'UAENorth' | 'USDoDCentral' | 'USDoDEast' | 'USGovArizona' | 'USGovIowa' | 'USGovTexas' | 'USGovVirginia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'UsNatEast' | 'UsNatWest' | 'UsSecCentral' | 'UsSecEast' | 'UsSecWest' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' | string)[] (Required): Gets or sets the Azure Locations.
* **ultraDiskSupport**: ('UltraDiskNotSupported' | 'UltraDiskSupported' | string)[] (Required): Gets or sets the premium disk support.

## MachineAssessmentRecommendation
### Properties
* **confidenceScore**: int (ReadOnly): The confidence score.
* **configuration**: [Configuration](#configuration) (ReadOnly): The configuration data.
* **migrationIssues**: [MigrationIssues](#migrationissues)[] (ReadOnly): The migration issues list.
* **migrationPlatform**: 'IaaS' | 'PaaS' | 'SaaS' | 'Unknown' | string (ReadOnly): The migration Platform.
* **migrationSuitability**: [MigrationSuitability](#migrationsuitability) (ReadOnly): The migration suitability.
* **recommendedFor**: [RecommendedFor](#recommendedfor) (ReadOnly): The recommended details.
* **recommendedVmSecurityType**: 'CVM' | 'Standard' | 'TVM' | 'Unknown' | string (ReadOnly): Recommended security type for the VM.
* **securitySuitability**: [SecuritySuitability](#securitysuitability) (ReadOnly): The security suitability.
* **skus**: [MachineAssessmentRecommendationSkusItem](#machineassessmentrecommendationskusitem)[] (ReadOnly): The Skus list.
* **totalCost**: [CostDetailsCommon](#costdetailscommon)[] (ReadOnly): The total cost details.
* **totalSavings**: [SavingsDetailsCommon](#savingsdetailscommon)[] (ReadOnly): The total cost details.
* **vmSecuritySuitabilityResults**: [VmSecuritySuitability](#vmsecuritysuitability)[] (ReadOnly): VM Security Suitability Results.

## MachineAssessmentRecommendationSkusItem
### Properties
* **details**: [SkuDetails](#skudetails) (ReadOnly): The sku details.
* **displayName**: string (ReadOnly): The sku name.
* **id**: string (ReadOnly): The sku id.
* **kind**: 'Details' | 'Endpoint' | string (ReadOnly): The Sku kind.
* **resourceUri**: string (ReadOnly): The resource uri.
* **sources**: [MachineAssessmentRecommendationSkusPropertiesItemsItem](#machineassessmentrecommendationskuspropertiesitemsitem)[] (ReadOnly): The source name.
* **type**: 'AppServicePlan' | 'AzureSpringApps' | 'Compute' | 'Network' | 'Storage' | 'Unknown' | string (ReadOnly): The sku type.

## MachineAssessmentRecommendationSkusPropertiesItemsItem
### Properties
* **migrationSuitability**: [MigrationSuitability](#migrationsuitability) (ReadOnly): The sku type.
* **name**: string (ReadOnly): The sku name.

## MachineAssessmentSettings
### Properties
* **azureDiskTypes**: ('Premium' | 'PremiumV2' | 'Standard' | 'StandardOrPremium' | 'StandardSSD' | 'Ultra' | 'Unknown' | string)[]: The disk type for the assessment.
* **azureHybridUseBenefit**: 'No' | 'Unknown' | 'Yes' | string: Gets or sets the user configurable setting to display the azure hybrid use
benefit.
* **azureLocation**: string: Azure Location or Azure region where to which the machines will be migrated.
* **azurePricingTier**: 'Basic' | 'Standard' | string: Gets or sets Azure Pricing Tier - Free, Basic, etc.
* **azureSecurityOfferingType**: 'MDC' | 'NO' | string: The azure security offering type.
* **azureStorageRedundancy**: 'GeoRedundant' | 'LocallyRedundant' | 'ReadAccessGeoRedundant' | 'Unknown' | 'ZoneRedundant' | string: Gets or sets the Azure Storage Redundancy. Example: Locally Redundant Storage.
* **azureVmFamilies**: ('Av2_series' | 'Basic_A0_A4' | 'DC_Series' | 'DS_series' | 'DSv2_series' | 'D_series' | 'Dadsv5_series' | 'Dasv4_series' | 'Dasv5_series' | 'Dav4_series' | 'Ddsv4_series' | 'Ddsv5_series' | 'Ddv4_series' | 'Ddv5_series' | 'Dsv3_series' | 'Dsv4_series' | 'Dsv5_series' | 'Dv2_series' | 'Dv3_series' | 'Dv4_series' | 'Dv5_series' | 'Eadsv5_series' | 'Easv4_series' | 'Easv5_series' | 'Eav4_series' | 'Ebdsv5_series' | 'Ebsv5_series' | 'Edsv4_series' | 'Edsv5_series' | 'Edv4_series' | 'Edv5_series' | 'Esv3_series' | 'Esv4_series' | 'Esv5_series' | 'Ev3_series' | 'Ev4_series' | 'Ev5_series' | 'F_series' | 'Fs_series' | 'Fsv2_series' | 'GS_series' | 'G_series' | 'H_series' | 'Ls_series' | 'Lsv2_series' | 'M_series' | 'Mdsv2_series' | 'Msv2_series' | 'Mv2_series' | 'Standard_A0_A7' | 'Standard_A8_A11' | 'Unknown' | string)[]: Gets or sets the Azure VM families.
* **azureVmSecurityOptions**: ('CVM' | 'Standard' | 'TVM' | 'Unknown' | string)[]: Gets or sets the Azure VM security options.
* **billingSettings**: [BillingSettings](#billingsettings): Gets or sets the billing settings.
* **currency**: 'ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string: Currency in which prices should be reported.
* **discountPercentage**: int: Custom discount percentage.
* **environmentType**: 'DevTest' | 'Production' | 'Unknown' | string: Gets or sets user configurable setting to display the environment type.
* **linuxAzureHybridUseBenefit**: 'No' | 'Unknown' | 'Yes' | string: Gets or sets the user configurable setting to display the linux azure hybrid use
benefit.
* **performanceData**: [PerformanceData](#performancedata): Gets or sets the performance data.
* **savingsSettings**: [SavingsSettings](#savingssettings): Gets or sets the savings settings.
* **scalingFactor**: int: Percentage of buffer that user wants on performance metrics when recommending
Azure sizes.
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' | string: Assessment sizing criterion.
* **vmUptime**: [VmUptime](#vmuptime): Gets or sets the duration for which the VMs are up in the on-premises
environment.

## MachineAssessmentV2Properties
### Properties
* **details**: [AssessmentDetails](#assessmentdetails): Gets or sets the details of the assessment.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **scope**: [Scope](#scope): Gets or sets the scope of assessment.
* **settings**: [MachineAssessmentSettings](#machineassessmentsettings): Gets or sets the settings for the assessment.

## MachineGraphAssessmentOptionsProperties
### Properties
* **edges**: [MachineGraphAssessmentOptionsPropertiesEdges](#machinegraphassessmentoptionspropertiesedges) (Required): Gets or sets the edges.

## MachineGraphAssessmentOptionsPropertiesEdges
### Properties
### Additional Properties
* **Additional Properties Type**: [MachineAssessmentOptionsOutboundEdgeGroup](#machineassessmentoptionsoutboundedgegroup)

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

## ProcessorInfo
### Properties
* **name**: string: Gets or sets the name \ model of a processor.
* **numberOfCoresPerSocket**: int: Gets or sets the number of cores in a socket.
* **numberOfSockets**: int: Gets or sets the number of sockets.

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

## VmSecuritySuitability
### Properties
* **securitySuitability**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'SuitableWithWarnings' | 'Unknown' | string (Required, ReadOnly): Gets the suitability for this secure VM.
* **securitySuitabilityDetails**: ('AllDiskSizeExceeds2TB' | 'AllDiskSizeExceeds4TB' | 'AnyDiskSizeExceeds4TB' | 'AnyDiskSizeExceeds4TBConditional' | 'BootTypeNotSupported' | 'DiskSize2TBConditionalReadyBiosBoot' | 'DiskSizeLarge' | 'GuestOperatingSystemNotSupported' | 'NotApplicable' | 'OSNameCannotBeRead' | 'OSNotSupported' | 'StandardCanMigrate' | 'StandardCannotMigrateOSNotSupported' | 'StandardNotReady2TBBiosBoot' | 'StandardNotReadyOSNotSupported' | 'StandardReady' | 'TVMCanMigrateConditional' | 'TVMCannotMigrateOSNotSupported' | 'TVMNotReadyOSNotSupported' | 'TVMNotSupportedForBiosBoot' | 'TVMReady' | 'Unknown' | string)[] (Required, ReadOnly): Gets the security suitability details for this VM.
* **vmSecurityType**: 'CVM' | 'Standard' | 'TVM' | 'Unknown' | string (Required, ReadOnly): Gets and sets the security type for this secure VM.

## VmUptime
### Properties
* **daysPerMonth**: int: Number of days in a month for VM uptime.
* **hoursPerDay**: int: Number of hours per day for VM uptime.

