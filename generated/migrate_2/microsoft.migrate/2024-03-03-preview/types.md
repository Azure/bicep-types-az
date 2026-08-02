# Microsoft.Migrate @ 2024-03-03-preview

## Resource Microsoft.Migrate/assessmentProjects/avsAssessmentOptions@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [AvsGraphAssessmentOptionsProperties](#avsgraphassessmentoptionsproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/avsAssessmentOptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/avsAssessments@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AvsAssessmentPropertiesV2](#avsassessmentpropertiesv2): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/avsAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/avsAssessments/avsAssessedMachines@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AvsAssessedMachinePropertiesV2](#avsassessedmachinepropertiesv2) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/avsAssessments/avsAssessedMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/avsAssessments/summaries@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AvsAssessmentSummaryPropertiesV2](#avsassessmentsummarypropertiesv2) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/avsAssessments/summaries' (ReadOnly, DeployTimeConstant): The resource type

## Function downloadUrl (Microsoft.Migrate/assessmentProjects/avsAssessments@2024-03-03-preview)
* **Resource**: Microsoft.Migrate/assessmentProjects/avsAssessments
* **ApiVersion**: 2024-03-03-preview
* **Input**: any
* **Output**: [DownloadUrl](#downloadurl)

## AssessmentDetails
### Properties
* **confidenceRatingInPercentage**: int (ReadOnly): Confidence Rating in Percentage.
* **createdTimestamp**: string (ReadOnly): Date and Time when assessment was created.
* **pricesTimestamp**: string (ReadOnly): Last time when rates were queried.
* **status**: 'Completed' | 'Created' | 'Deleted' | 'Failed' | 'Invalid' | 'OutDated' | 'OutOfSync' | 'Running' | 'Updated' | string (ReadOnly): Whether assessment is in valid state and all machines have been assessed.
* **updatedTimestamp**: string (ReadOnly): Date and Time when assessment was last updated.

## AvsAssessedDiskV2
### Properties
* **assessedExternalStorageType**: 'AnfPremium' | 'AnfStandard' | 'AnfUltra' | 'None' | 'Unknown' | string (ReadOnly): Associated storage Type recommended for Disk.
* **displayName**: string (ReadOnly): Gets the display name of the disk.
* **estimatedDiskSizeInGB**: int (ReadOnly): Estimated Disk Size in GB.
* **gigabytesProvisioned**: int (ReadOnly): Gigabytes Provisioned for a disk in private data center.
* **megabytesPerSecondOfRead**: int (ReadOnly): Disk Read Throughput in MB/s.
* **megabytesPerSecondOfWrite**: int (ReadOnly): Disk Write Throughput in MB/s.
* **name**: string (ReadOnly): Gets the ID of the disk.
* **numberOfReadOperationsPerSecond**: int (ReadOnly): Read Operations per second.
* **numberOfWriteOperationsPerSecond**: int (ReadOnly): Write Operations per second.

## AvsAssessedMachineExtendedDetails
### Properties
* **avsTargetNode**: 'AV36' | 'AV36P' | 'AV52' | 'AV64' | 'Unknown' | string (ReadOnly): Gets the Avs Target Type for Machine.
* **bootType**: 'BIOS' | 'EFI' | 'NotSpecified' | 'Unknown' | string (ReadOnly): Boot type of machine discovered in private data center.
* **datacenterManagementServerName**: string (ReadOnly): Data center management server name.
* **description**: string (ReadOnly): Description for the machine.
* **disks**: [AvsAssessedDiskV2](#avsassesseddiskv2)[] (ReadOnly): List of Disks that were assessed as part of this machine's assessment.
* **displayName**: string (ReadOnly): Display Name of the Machine.
* **errors**: [Error](#error)[] (ReadOnly): List of errors for this machine.
* **megabytesOfMemory**: int (ReadOnly): Megabytes of memory found allocated for the machine in private data center.
* **networkAdapters**: [AvsAssessedNetworkAdapter](#avsassessednetworkadapter)[] (ReadOnly): List of Network Adapters that were assessed as part of this machine's
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
* **storageInUseGB**: int (ReadOnly): Gets the storage in use.

## AvsAssessedMachinePropertiesV2
### Properties
* **assessedMachineType**: 'AssessedMachine' | 'AvsAssessedMachine' | 'SqlAssessedMachine' | 'Unknown' | string (ReadOnly): Assessed machine type.
* **createdTimestamp**: string (ReadOnly): When was machine first created.
* **extendedDetails**: [AvsAssessedMachineExtendedDetails](#avsassessedmachineextendeddetails) (ReadOnly): The assessed machine extended details.
* **linkages**: [Linkages](#linkages)[] (ReadOnly): The linkages list.
* **recommendations**: [AvsAssessedMachinePropertiesV2RecommendationsItem](#avsassessedmachinepropertiesv2recommendationsitem)[] (ReadOnly): The recommendation list.
* **updatedTimestamp**: string (ReadOnly): When was machine last updated.
* **workloadType**: 'Database' | 'Host' | 'Instance' | 'Machine' | 'ManagementServer' | 'Server' | 'Unknown' | 'WebApplication' | 'WebServer' | string (ReadOnly): The workload type

## AvsAssessedMachinePropertiesV2RecommendationsItem
### Properties
* **confidenceScore**: int (ReadOnly): The confidence score.
* **configuration**: [Configuration](#configuration) (ReadOnly): The configuration data.
* **fallbackMachineAssessmentArmId**: string: Gets or sets the machine assessment ARM ID for VM fallback.
* **migrationIssues**: [MigrationIssues](#migrationissues)[] (ReadOnly): The migration issues list.
* **migrationPlatform**: 'IaaS' | 'PaaS' | 'SaaS' | 'Unknown' | string (ReadOnly): The migration Platform.
* **migrationSuitability**: [MigrationSuitability](#migrationsuitability) (ReadOnly): The migration suitability.
* **recommendedFor**: [RecommendedFor](#recommendedfor) (ReadOnly): The recommended details.
* **securitySuitability**: [SecuritySuitability](#securitysuitability) (ReadOnly): The security suitability.
* **skus**: [AvsAssessedMachinePropertiesV2RecommendationsPropertiesItemsItem](#avsassessedmachinepropertiesv2recommendationspropertiesitemsitem)[] (ReadOnly): The Skus list.
* **totalCost**: [CostDetailsCommon](#costdetailscommon)[] (ReadOnly): The total cost details.
* **totalSavings**: [SavingsDetailsCommon](#savingsdetailscommon)[] (ReadOnly): The total cost details.

## AvsAssessedMachinePropertiesV2RecommendationsPropertiesItemsItem
### Properties
* **details**: [SkuDetails](#skudetails) (ReadOnly): The sku details.
* **displayName**: string (ReadOnly): The sku name.
* **id**: string (ReadOnly): The sku id.
* **kind**: 'Details' | 'Endpoint' | string (ReadOnly): The Sku kind.
* **resourceUri**: string (ReadOnly): The resource uri.
* **sources**: [AvsAssessedMachinePropertiesV2RecommendationsPropertiesItemsSourcesItem](#avsassessedmachinepropertiesv2recommendationspropertiesitemssourcesitem)[] (ReadOnly): The source name.
* **type**: 'AppServicePlan' | 'AzureSpringApps' | 'Compute' | 'Network' | 'Storage' | 'Unknown' | string (ReadOnly): The sku type.

## AvsAssessedMachinePropertiesV2RecommendationsPropertiesItemsSourcesItem
### Properties
* **migrationSuitability**: [MigrationSuitability](#migrationsuitability) (ReadOnly): The sku type.
* **name**: string (ReadOnly): The sku name.

## AvsAssessedNetworkAdapter
### Properties
* **displayName**: string (ReadOnly): Gets the display name of the network adapter.
* **ipAddresses**: string[] (ReadOnly): IP V4 addresses for the machine.
* **macAddress**: string (ReadOnly): Mac address of the NIC.
* **megabytesPerSecondRecieved**: int (ReadOnly): Gets the Recieved data for Network Adapter in MB/s.
            This value is
the percentile of historical data based on options selected in Assessment.
* **megabytesPerSecondTransmitted**: int (ReadOnly): Gets the Transmitted data for Network Adapter in MB/s.
            This value
is the percentile of historical data based on options selected in Assessment.
* **name**: string (ReadOnly): Gets the name of the network adapter.

## AvsAssessmentOptionsOutboundEdgeGroup
### Properties
* **avsExternalStorageTypes**: ('AnfPremium' | 'AnfStandard' | 'AnfUltra' | 'None' | 'Unknown' | string)[] (Required): Gets or sets the Avs External Storage Type.
* **avsNodes**: ('AV36' | 'AV36P' | 'AV52' | 'AV64' | 'Unknown' | string)[] (Required): Gets or sets the Azure Avs Node Type.
* **currencies**: ('ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string)[] (Required): Gets or sets the Azure Currency.
* **failuresToTolerateAndRaidLevelValues**: ('Ftt1Raid1' | 'Ftt1Raid5' | 'Ftt2Raid1' | 'Ftt2Raid6' | 'Ftt3Raid1' | 'Unknown' | string)[] (Required): Gets or sets the Azure SQL service tiers.
* **licensingProgram**: ('EA' | 'MCA' | 'Retail' | 'Unknown' | string)[] (Required): Gets or sets the Licensing Program.
* **savingsOptions**: ('CustomAzureOfferCode' | 'None' | 'RI1Year' | 'RI3Year' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | string)[] (Required): Gets or sets the Assessment Savings Options.
* **targetLocations**: ('AustraliaCentral' | 'AustraliaCentral2' | 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaEast2' | 'ChinaNorth' | 'ChinaNorth2' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'FranceCentral' | 'FranceSouth' | 'GermanyCentral' | 'GermanyNorth' | 'GermanyNortheast' | 'GermanyWestCentral' | 'IsraelCentral' | 'ItalyNorth' | 'JapanEast' | 'JapanWest' | 'JioIndiaWest' | 'KoreaCentral' | 'KoreaSouth' | 'MexicoCentral' | 'NewZealandNorth' | 'NorthCentralUs' | 'NorthEurope' | 'NorwayEast' | 'NorwayWest' | 'PolandCentral' | 'QatarCentral' | 'SouthAfricaNorth' | 'SouthAfricaWest' | 'SouthCentralUs' | 'SouthIndia' | 'SoutheastAsia' | 'SpainCentral' | 'SwedenCentral' | 'SwitzerlandNorth' | 'SwitzerlandWest' | 'UAECentral' | 'UAENorth' | 'USDoDCentral' | 'USDoDEast' | 'USGovArizona' | 'USGovIowa' | 'USGovTexas' | 'USGovVirginia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'UsNatEast' | 'UsNatWest' | 'UsSecCentral' | 'UsSecEast' | 'UsSecWest' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' | string)[] (Required): Gets or sets the Azure Locations.

## AvsAssessmentPropertiesV2
### Properties
* **details**: [AssessmentDetails](#assessmentdetails): Gets or sets the details of the assessment.
* **fallbackMachineAssessmentArmId**: string: Gets or sets the machine assessment ARM ID for VM fallback.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **scope**: [Scope](#scope): Gets or sets the scope of assessment.
* **settings**: [AvsAssessmentSettings](#avsassessmentsettings): Gets or sets the settings for the assessment.

## AvsAssessmentSettings
### Properties
* **avsAssessmentScenario**: 'AvsSddcExpansion' | 'NewAvsSddc' | 'Unknown' | string: AVS Assessment Scenario.
* **azureLocation**: string: Azure Location or Azure region where to which the machines will be migrated.
* **billingSettings**: [BillingSettings](#billingsettings): Gets or sets the billing settings.
* **cpuHeadroom**: int: Gets or sets the CPU headroom.
* **currency**: 'ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string: Currency in which prices should be reported.
* **dedupeCompression**: int: De-duplication compression.
* **discountPercentage**: int: Custom discount percentage.
* **environmentType**: 'DevTest' | 'Production' | 'Unknown' | string: Gets or sets user configurable setting to display the environment type.
* **externalStorageTypes**: ('AnfPremium' | 'AnfStandard' | 'AnfUltra' | 'None' | 'Unknown' | string)[]: List of AVS external storage types.
* **failuresToTolerateAndRaidLevelList**: ('Ftt1Raid1' | 'Ftt1Raid5' | 'Ftt2Raid1' | 'Ftt2Raid6' | 'Ftt3Raid1' | 'Unknown' | string)[]: List of Failures to tolerate and RAID levels in a common property.
* **isStretchClusterEnabled**: bool: Is Stretch Cluster Enabled.
* **isVcfByolEnabled**: bool: Is VCF license applied
* **memOvercommit**: int: Memory overcommit.
* **nodeTypes**: ('AV36' | 'AV36P' | 'AV52' | 'AV64' | 'Unknown' | string)[]: AVS node types.
* **performanceData**: [PerformanceData](#performancedata): Gets or sets the performance data.
* **savingsSettings**: [SavingsSettings](#savingssettings): Gets or sets the savings settings.
* **scalingFactor**: int: Percentage of buffer that user wants on performance metrics when recommending
Azure sizes.
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' | string: Assessment sizing criterion.
* **vcpuOversubscription**: int: VCPU over subscription.

## AvsAssessmentSummaryPropertiesV2
### Properties
* **avsEstimatedExternalStorages**: [AvsEstimatedExternalStorage](#avsestimatedexternalstorage)[] (ReadOnly): Estimated External Storage for Assessment.
* **avsEstimatedNetworks**: [AvsEstimatedNetwork](#avsestimatednetwork)[] (ReadOnly): Estimated External Storage for Assessment.
* **avsEstimatedNodes**: [AvsEstimatedNode](#avsestimatednode)[] (ReadOnly): Estimated AVS SKU for Assessment.
* **costComponents**: [CostDetailsCommon](#costdetailscommon)[] (ReadOnly): The cost components.
* **cpuUtilization**: int (ReadOnly): Predicted CPU utilization.
* **limitingFactor**: string (ReadOnly): Limiting factor.
* **numberOfNodes**: int (ReadOnly): Recommended number of nodes.
* **ramUtilization**: int (ReadOnly): Predicted RAM utilization.
* **savingsComponents**: [SavingsDetailsCommon](#savingsdetailscommon)[] (ReadOnly): The cost components.
* **sources**: [SourceDetails](#sourcedetails)[] (ReadOnly): The source details list.
* **storageUtilization**: int (ReadOnly): Predicted storage utilization.
* **suitability**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'Unknown' | string (ReadOnly): Gets or sets the Assessment cloud suitability.
* **suitabilityExplanation**: 'InternalErrorInRecommendation' | 'NotApplicable' | 'Unknown' | 'UnsupportedLocationForSelectedExternalStorageTypes' | 'UnsupportedLocationForSelectedNode' | string (ReadOnly): Gets or sets the Assessment suitability explanation.
* **summaryName**: string (ReadOnly): The summary name
* **summaryType**: 'Strategy' | 'Target' | 'Unknown' | string (ReadOnly): The summary type
* **targets**: [TargetDetails](#targetdetails)[] (ReadOnly): The target details list.
* **targetSourceMapping**: [TargetSourcePair](#targetsourcepair)[] (ReadOnly): The target source mapping.
* **totalCpuCores**: int (ReadOnly): Predicted total CPU cores used.
* **totalRamInGB**: int (ReadOnly): Predicted total RAM used in GB.
* **totalStorageInGB**: int (ReadOnly): Predicted total Storage used in GB.

## AvsEstimatedExternalStorage
### Properties
* **monthlyPrice**: int: Total monthly cost for type of storage.
* **storageType**: 'AnfPremium' | 'AnfStandard' | 'AnfUltra' | 'None' | 'Unknown' | string: Recommended External Storage.
* **storageUtilization**: int: Predicted storage utilization.
* **totalStorageInGB**: int: Predicted total Storage used in GB.

## AvsEstimatedNetwork
### Properties
* **monthlyPrice**: int: Monthly cost for network type.
* **networkType**: 'ExpressRouteUltra' | 'None' | 'Unknown' | string: Recommended Network Sku.

## AvsEstimatedNode
### Properties
* **cpuUtilization**: int: Predicted CPU utilization.
* **fttRaidLevel**: 'Ftt1Raid1' | 'Ftt1Raid5' | 'Ftt2Raid1' | 'Ftt2Raid6' | 'Ftt3Raid1' | 'Unknown' | string: FttRaidLevel recommended for Node.
* **monthlyPrice**: int: Total monthly cost for type and number of nodes.
* **nodeNumber**: int: Number of nodes that will be needed.
* **nodeType**: 'AV36' | 'AV36P' | 'AV52' | 'AV64' | 'Unknown' | string: Recommended SKU.
* **pricingModel**: 'None' | 'RI1Year' | 'RI3Year' | string: Pricing model indicates what hour multiplier to use while estimating the Nodes cost.
* **ramUtilization**: int: Predicted RAM utilization.
* **storageUtilization**: int: Predicted storage utilization.
* **totalCpu**: int: Predicted total CPU cores across the set of nodes.
* **totalRam**: int: Predicted total RAM used in GB.
* **totalStorage**: int: Predicted total Storage used in GB.

## AvsGraphAssessmentOptionsProperties
### Properties
* **edges**: [AvsGraphAssessmentOptionsPropertiesEdges](#avsgraphassessmentoptionspropertiesedges) (Required): Gets or sets the edges.

## AvsGraphAssessmentOptionsPropertiesEdges
### Properties
### Additional Properties
* **Additional Properties Type**: [AvsAssessmentOptionsOutboundEdgeGroup](#avsassessmentoptionsoutboundedgegroup)

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

