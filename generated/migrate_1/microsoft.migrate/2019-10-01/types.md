# Microsoft.Migrate @ 2019-10-01

## Resource Microsoft.Migrate/assessmentProjects@2019-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: For optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Azure location in which project is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectProperties](#projectproperties): Properties of the project.
* **tags**: any: Tags provided by Azure Tagging service.
* **type**: 'Microsoft.Migrate/assessmentProjects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/assessmentOptions@2019-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AssessmentOptionsProperties](#assessmentoptionsproperties) (ReadOnly): Properties of the assessment options.
* **type**: 'Microsoft.Migrate/assessmentProjects/assessmentOptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/groups@2019-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: For optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GroupProperties](#groupproperties) (Required): Properties of the group.
* **type**: 'Microsoft.Migrate/assessmentProjects/groups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/groups/assessments@2019-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: For optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AssessmentProperties](#assessmentproperties) (Required): Properties of the assessment.
* **type**: 'Microsoft.Migrate/assessmentProjects/groups/assessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/groups/assessments/assessedMachines@2019-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): For optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AssessedMachineProperties](#assessedmachineproperties) (ReadOnly): Properties of an assessed machine.
* **type**: 'Microsoft.Migrate/assessmentProjects/groups/assessments/assessedMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/hypervcollectors@2019-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CollectorProperties](#collectorproperties)
* **type**: 'Microsoft.Migrate/assessmentProjects/hypervcollectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/importcollectors@2019-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ImportCollectorProperties](#importcollectorproperties)
* **type**: 'Microsoft.Migrate/assessmentProjects/importcollectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/machines@2019-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): For optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MachineProperties](#machineproperties) (ReadOnly): Properties of the machine.
* **type**: 'Microsoft.Migrate/assessmentProjects/machines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentprojects/privateEndpointConnections@2019-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: For optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (Required): Properties of the private endpoint endpoint connection.
* **type**: 'Microsoft.Migrate/assessmentprojects/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentprojects/privateLinkResources@2019-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Properties of the private link resource.
* **type**: 'Microsoft.Migrate/assessmentprojects/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/servercollectors@2019-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CollectorProperties](#collectorproperties)
* **type**: 'Microsoft.Migrate/assessmentProjects/servercollectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/vmwarecollectors@2019-10-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CollectorProperties](#collectorproperties)
* **type**: 'Microsoft.Migrate/assessmentProjects/vmwarecollectors' (ReadOnly, DeployTimeConstant): The resource type

## Function downloadUrl (Microsoft.Migrate/assessmentProjects/groups/assessments@2019-10-01)
* **Resource**: Microsoft.Migrate/assessmentProjects/groups/assessments
* **ApiVersion**: 2019-10-01
* **Output**: [DownloadUrl](#downloadurl)

## Function updateMachines (Microsoft.Migrate/assessmentProjects/groups@2019-10-01)
* **Resource**: Microsoft.Migrate/assessmentProjects/groups
* **ApiVersion**: 2019-10-01
* **Input**: [UpdateGroupBody](#updategroupbody)
* **Output**: [Group](#group)

## AssessedDisk
### Properties
* **displayName**: string (ReadOnly): User friendly name of the assessed disk.
* **gigabytesForRecommendedDiskSize**: int (ReadOnly): Gigabytes of storage provided by the recommended Azure disk size.
* **gigabytesProvisioned**: int (ReadOnly): Gigabytes of storage provisioned for this disk.
* **megabytesPerSecondOfRead**: int (ReadOnly): Disk throughput in MegaBytes per second.
* **megabytesPerSecondOfWrite**: int (ReadOnly): Disk throughput in MegaBytes per second.
* **monthlyStorageCost**: int (ReadOnly): Estimated aggregate storage cost for a 31-day month for this disk.
* **name**: string (ReadOnly): Name of the assessed disk.
* **numberOfReadOperationsPerSecond**: int (ReadOnly): Number of read operations per second for the disk.
* **numberOfWriteOperationsPerSecond**: int (ReadOnly): Number of read and write operations per second for the disk.
* **recommendedDiskSize**: 'Premium_P10' | 'Premium_P15' | 'Premium_P20' | 'Premium_P30' | 'Premium_P4' | 'Premium_P40' | 'Premium_P50' | 'Premium_P6' | 'Premium_P60' | 'Premium_P70' | 'Premium_P80' | 'StandardSSD_E10' | 'StandardSSD_E15' | 'StandardSSD_E20' | 'StandardSSD_E30' | 'StandardSSD_E4' | 'StandardSSD_E40' | 'StandardSSD_E50' | 'StandardSSD_E6' | 'StandardSSD_E60' | 'StandardSSD_E70' | 'StandardSSD_E80' | 'Standard_S10' | 'Standard_S15' | 'Standard_S20' | 'Standard_S30' | 'Standard_S4' | 'Standard_S40' | 'Standard_S50' | 'Standard_S6' | 'Standard_S60' | 'Standard_S70' | 'Standard_S80' | 'Unknown' | string (ReadOnly): Recommended Azure size for the disk, given utilization data and preferences set on Assessment.
* **recommendedDiskType**: 'Premium' | 'Standard' | 'StandardOrPremium' | 'StandardSSD' | 'Unknown' | string (ReadOnly): Storage type selected for this disk.
* **suitability**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'Unknown' | string (ReadOnly): Whether this disk is suitable for Azure.
* **suitabilityDetail**: 'DiskGigabytesConsumedMissing' | 'DiskGigabytesConsumedOutOfRange' | 'DiskGigabytesProvisionedMissing' | 'DiskGigabytesProvisionedOutOfRange' | 'MegabytesPerSecondOfReadMissing' | 'MegabytesPerSecondOfReadOutOfRange' | 'MegabytesPerSecondOfWriteMissing' | 'MegabytesPerSecondOfWriteOutOfRange' | 'None' | 'NumberOfReadOperationsPerSecondMissing' | 'NumberOfReadOperationsPerSecondOutOfRange' | 'NumberOfWriteOperationsPerSecondMissing' | 'NumberOfWriteOperationsPerSecondOutOfRange' | string (ReadOnly): If disk is suitable to be migrate but some conditions/checks were not considered while calculating suitability, this explains the details.
* **suitabilityExplanation**: 'DiskSizeGreaterThanSupported' | 'InternalErrorOccurredForDiskEvaluation' | 'NoDiskSizeFoundForSelectedRedundancy' | 'NoDiskSizeFoundInSelectedLocation' | 'NoEaPriceFoundForDiskSize' | 'NoSuitableDiskSizeForIops' | 'NoSuitableDiskSizeForThroughput' | 'NotApplicable' | 'Unknown' | string (ReadOnly): If disk is not suitable to be migrated, this explains the reasons and mitigation steps.

## AssessedMachineProperties
### Properties
* **bootType**: 'BIOS' | 'EFI' | 'Unknown' | string (ReadOnly): Boot type of the machine.
* **confidenceRatingInPercentage**: int (ReadOnly): Confidence rating of assessed machine.
* **createdTimestamp**: string (ReadOnly): Time when this machine was created. Date-Time represented in ISO-8601 format.
* **datacenterMachineArmId**: string (ReadOnly): ARM ID of the discovered machine.
* **datacenterManagementServerArmId**: string (ReadOnly): ARM ID of the discovered datacenter.
* **datacenterManagementServerName**: string (ReadOnly): Name of the server hosting the datacenter management solution.
* **description**: string (ReadOnly): Description of the machine
* **disks**: [AssessedMachinePropertiesDisks](#assessedmachinepropertiesdisks) (ReadOnly): Dictionary of disks attached to the machine. Key is ID of disk. Value is a disk object.
* **displayName**: string (ReadOnly): User readable name of the machine as defined by the user in their private datacenter.
* **megabytesOfMemory**: int (ReadOnly): Memory in Megabytes.
* **megabytesOfMemoryForRecommendedSize**: int (ReadOnly): Megabytes of memory in the Recommended Azure VM Size.
* **monthlyBandwidthCost**: int (ReadOnly): Monthly network cost estimate for the network adapters that are attached to this machine as a group, for a 31-day month.
* **monthlyComputeCostForRecommendedSize**: int (ReadOnly): Compute Cost for a 31-day month, if the machine is migrated to Azure with the Recommended Size.
* **monthlyPremiumStorageCost**: int (ReadOnly): Monthly premium storage cost estimate for the disks that are attached to this machine as a group, for a 31-day month.
* **monthlyStandardSSDStorageCost**: int (ReadOnly): Monthly standard SSD storage cost estimate for the disks that are attached to this machine as a group, for a 31-day month.
* **monthlyStorageCost**: int (ReadOnly): Monthly storage cost estimate for the disks that are attached to this machine as a group, for a 31-day month.
* **networkAdapters**: [AssessedMachinePropertiesNetworkAdapters](#assessedmachinepropertiesnetworkadapters) (ReadOnly): Dictionary of network adapters attached to the machine. Key is name of the adapter. Value is a network adapter object.
* **numberOfCores**: int (ReadOnly): Processor count.
* **numberOfCoresForRecommendedSize**: int (ReadOnly): Number of CPU cores in the Recommended Azure VM Size.
* **operatingSystemName**: string (ReadOnly): Operating System name of the machine.
* **operatingSystemType**: string (ReadOnly): Operating System type of the machine.
* **operatingSystemVersion**: string (ReadOnly): Operating System version of the machine.
* **percentageCoresUtilization**: int (ReadOnly): Utilization percentage of the processor core as observed in the private data center, in the Time Range selected on Assessment, reported as the Percentile value based on the percentile number selected in assessment.
* **percentageMemoryUtilization**: int (ReadOnly): Utilization percentage of the memory as observed in the private data center, in the Time Range selected on Assessment, reported as the Percentile value based on the percentile number selected in assessment.
* **recommendedSize**: 'Basic_A0' | 'Basic_A1' | 'Basic_A2' | 'Basic_A3' | 'Basic_A4' | 'Standard_A0' | 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A1_v2' | 'Standard_A2' | 'Standard_A2_v2' | 'Standard_A2m_v2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A4_v2' | 'Standard_A4m_v2' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A8_v2' | 'Standard_A8m_v2' | 'Standard_A9' | 'Standard_D1' | 'Standard_D11' | 'Standard_D11_v2' | 'Standard_D12' | 'Standard_D12_v2' | 'Standard_D13' | 'Standard_D13_v2' | 'Standard_D14' | 'Standard_D14_v2' | 'Standard_D15_v2' | 'Standard_D16_v3' | 'Standard_D16s_v3' | 'Standard_D1_v2' | 'Standard_D2' | 'Standard_D2_v2' | 'Standard_D2_v3' | 'Standard_D2s_v3' | 'Standard_D3' | 'Standard_D32_v3' | 'Standard_D32s_v3' | 'Standard_D3_v2' | 'Standard_D4' | 'Standard_D4_v2' | 'Standard_D4_v3' | 'Standard_D4s_v3' | 'Standard_D5_v2' | 'Standard_D64_v3' | 'Standard_D64s_v3' | 'Standard_D8_v3' | 'Standard_D8s_v3' | 'Standard_DS1' | 'Standard_DS11' | 'Standard_DS11_v2' | 'Standard_DS12' | 'Standard_DS12_v2' | 'Standard_DS13' | 'Standard_DS13_v2' | 'Standard_DS14' | 'Standard_DS14_v2' | 'Standard_DS15_v2' | 'Standard_DS1_v2' | 'Standard_DS2' | 'Standard_DS2_v2' | 'Standard_DS3' | 'Standard_DS3_v2' | 'Standard_DS4' | 'Standard_DS4_v2' | 'Standard_DS5_v2' | 'Standard_E16_v3' | 'Standard_E16s_v3' | 'Standard_E2_v3' | 'Standard_E2s_v3' | 'Standard_E32_v3' | 'Standard_E32s_v3' | 'Standard_E4_v3' | 'Standard_E4s_v3' | 'Standard_E64_v3' | 'Standard_E64s_v3' | 'Standard_E8_v3' | 'Standard_E8s_v3' | 'Standard_F1' | 'Standard_F16' | 'Standard_F16s' | 'Standard_F16s_v2' | 'Standard_F1s' | 'Standard_F2' | 'Standard_F2s' | 'Standard_F2s_v2' | 'Standard_F32s_v2' | 'Standard_F4' | 'Standard_F4s' | 'Standard_F4s_v2' | 'Standard_F64s_v2' | 'Standard_F72s_v2' | 'Standard_F8' | 'Standard_F8s' | 'Standard_F8s_v2' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS5' | 'Standard_H16' | 'Standard_H16m' | 'Standard_H16mr' | 'Standard_H16r' | 'Standard_H8' | 'Standard_H8m' | 'Standard_L16s' | 'Standard_L32s' | 'Standard_L4s' | 'Standard_L8s' | 'Standard_M128ms' | 'Standard_M128s' | 'Standard_M64ms' | 'Standard_M64s' | 'Unknown' | string (ReadOnly): Recommended Azure size for this machine.
* **suitability**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'Unknown' | string (ReadOnly): Whether machine is suitable for migration to Azure.
* **suitabilityDetail**: 'CannotReportBandwidthCosts' | 'CannotReportComputeCost' | 'CannotReportStorageCost' | 'None' | 'PercentageOfCoresUtilizedMissing' | 'PercentageOfCoresUtilizedOutOfRange' | 'PercentageOfMemoryUtilizedMissing' | 'PercentageOfMemoryUtilizedOutOfRange' | 'RecommendedSizeHasLessNetworkAdapters' | string (ReadOnly): If machine is not suitable for cloud, this explains the reasons.
* **suitabilityExplanation**: 'BootTypeNotSupported' | 'BootTypeUnknown' | 'CheckCentOsVersion' | 'CheckCoreOsLinuxVersion' | 'CheckDebianLinuxVersion' | 'CheckOpenSuseLinuxVersion' | 'CheckOracleLinuxVersion' | 'CheckRedHatLinuxVersion' | 'CheckSuseLinuxVersion' | 'CheckUbuntuLinuxVersion' | 'CheckWindowsServer2008R2Version' | 'EndorsedWithConditionsLinuxDistributions' | 'GuestOperatingSystemArchitectureNotSupported' | 'GuestOperatingSystemNotSupported' | 'GuestOperatingSystemUnknown' | 'InternalErrorOccurredDuringComputeEvaluation' | 'InternalErrorOccurredDuringNetworkEvaluation' | 'InternalErrorOccurredDuringStorageEvaluation' | 'MoreDisksThanSupported' | 'NoGuestOperatingSystemConditionallySupported' | 'NoSuitableVmSizeFound' | 'NoVmSizeForBasicPricingTier' | 'NoVmSizeForSelectedAzureLocation' | 'NoVmSizeForSelectedPricingTier' | 'NoVmSizeForStandardPricingTier' | 'NoVmSizeSupportsNetworkPerformance' | 'NoVmSizeSupportsStoragePerformance' | 'NotApplicable' | 'OneOrMoreAdaptersNotSuitable' | 'OneOrMoreDisksNotSuitable' | 'UnendorsedLinuxDistributions' | 'Unknown' | 'WindowsClientVersionsConditionallySupported' | 'WindowsOSNoLongerUnderMSSupport' | 'WindowsServerVersionConditionallySupported' | 'WindowsServerVersionsSupportedWithCaveat' | string (ReadOnly): If machine is not ready to be migrated, this explains the reasons and mitigation steps.
* **updatedTimestamp**: string (ReadOnly): Time when this machine was last updated. Date-Time represented in ISO-8601 format.

## AssessedMachinePropertiesDisks
### Properties
### Additional Properties
* **Additional Properties Type**: [AssessedDisk](#assesseddisk)

## AssessedMachinePropertiesNetworkAdapters
### Properties
### Additional Properties
* **Additional Properties Type**: [AssessedNetworkAdapter](#assessednetworkadapter)

## AssessedNetworkAdapter
### Properties
* **displayName**: string (ReadOnly): User friendly name of the assessed network adapter.
* **ipAddresses**: string[] (ReadOnly): List of IP Addresses on the network adapter.
* **macAddress**: string (ReadOnly): MAC Address of the network adapter.
* **megabytesPerSecondReceived**: int (ReadOnly): Adapter throughput for incoming traffic in MegaBytes per second.
* **megabytesPerSecondTransmitted**: int (ReadOnly): Adapter throughput for outgoing traffic in MegaBytes per second.
* **monthlyBandwidthCosts**: int (ReadOnly): Monthly cost estimate for network bandwidth used by this network adapter.
* **netGigabytesTransmittedPerMonth**: int: Gigabytes transmitted through this adapter each month.
* **suitability**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'Unknown' | string (ReadOnly): Whether this adapter is suitable for Azure.
* **suitabilityDetail**: 'MegabytesOfDataTransmittedMissing' | 'MegabytesOfDataTransmittedOutOfRange' | 'None' | string (ReadOnly): If network adapter is not suitable for cloud, this explains the reasons.
* **suitabilityExplanation**: 'InternalErrorOccurred' | 'NotApplicable' | 'Unknown' | string (ReadOnly): If network adapter is suitable, this explains the reasons and mitigation steps.

## AssessmentOptionsProperties
### Properties
* **reservedInstanceSupportedCurrencies**: string[] (ReadOnly): List of supported currencies for reserved instances.
* **reservedInstanceSupportedLocations**: string[] (ReadOnly): List of supported Azure regions for reserved instances.
* **reservedInstanceSupportedOffers**: string[] (ReadOnly): List of supported Azure offer codes for reserved instances.
* **reservedInstanceVmFamilies**: string[] (ReadOnly): List of supported VM Families.
* **vmFamilies**: [VmFamily](#vmfamily)[] (ReadOnly): Dictionary of VM families grouped by vm family name describing the targeted azure locations of VM family and the category of the family.

## AssessmentProperties
### Properties
* **azureDiskType**: 'Premium' | 'Standard' | 'StandardOrPremium' | 'StandardSSD' | 'Unknown' | string (Required): Storage type selected for this disk.
* **azureHybridUseBenefit**: 'No' | 'Unknown' | 'Yes' | string (Required): AHUB discount on windows virtual machines.
* **azureLocation**: 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaNorth' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'GermanyCentral' | 'GermanyNortheast' | 'JapanEast' | 'JapanWest' | 'KoreaCentral' | 'KoreaSouth' | 'NorthCentralUs' | 'NorthEurope' | 'SouthCentralUs' | 'SouthIndia' | 'SoutheastAsia' | 'USDoDCentral' | 'USDoDEast' | 'USGovArizona' | 'USGovIowa' | 'USGovTexas' | 'USGovVirginia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' | string (Required): Target Azure location for which the machines should be assessed. These enums are the same as used by Compute API.
* **azureOfferCode**: 'EA' | 'MSAZR0003P' | 'MSAZR0022P' | 'MSAZR0023P' | 'MSAZR0025P' | 'MSAZR0029P' | 'MSAZR0036P' | 'MSAZR0044P' | 'MSAZR0059P' | 'MSAZR0060P' | 'MSAZR0062P' | 'MSAZR0063P' | 'MSAZR0064P' | 'MSAZR0111P' | 'MSAZR0120P' | 'MSAZR0121P' | 'MSAZR0122P' | 'MSAZR0123P' | 'MSAZR0124P' | 'MSAZR0125P' | 'MSAZR0126P' | 'MSAZR0127P' | 'MSAZR0128P' | 'MSAZR0129P' | 'MSAZR0130P' | 'MSAZR0144P' | 'MSAZR0148P' | 'MSAZR0149P' | 'MSAZRDE0003P' | 'MSAZRDE0044P' | 'MSAZRUSGOV0003P' | 'MSMCAZR0044P' | 'MSMCAZR0059P' | 'MSMCAZR0060P' | 'MSMCAZR0063P' | 'MSMCAZR0120P' | 'MSMCAZR0121P' | 'MSMCAZR0125P' | 'MSMCAZR0128P' | 'Unknown' | string (Required): Offer code according to which cost estimation is done.
* **azurePricingTier**: 'Basic' | 'Standard' | string (Required): Pricing tier for Size evaluation.
* **azureStorageRedundancy**: 'GeoRedundant' | 'LocallyRedundant' | 'ReadAccessGeoRedundant' | 'Unknown' | 'ZoneRedundant' | string (Required): Storage Redundancy type offered by Azure.
* **azureVmFamilies**: ('Av2_series' | 'Basic_A0_A4' | 'DC_Series' | 'DS_series' | 'DSv2_series' | 'D_series' | 'Dsv3_series' | 'Dv2_series' | 'Dv3_series' | 'Esv3_series' | 'Ev3_series' | 'F_series' | 'Fs_series' | 'Fsv2_series' | 'GS_series' | 'G_series' | 'H_series' | 'Ls_series' | 'M_series' | 'Standard_A0_A7' | 'Standard_A8_A11' | 'Unknown' | string)[] (Required): List of azure VM families.
* **confidenceRatingInPercentage**: int (ReadOnly): Confidence rating percentage for assessment. Can be in the range [0, 100].
* **createdTimestamp**: string (ReadOnly): Time when this project was created. Date-Time represented in ISO-8601 format.
* **currency**: 'ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string (Required): Currency to report prices in.
* **discountPercentage**: int (Required): Custom discount percentage to be applied on final costs. Can be in the range [0, 100].
* **eaSubscriptionId**: string (ReadOnly): Enterprise agreement subscription arm id.
* **monthlyBandwidthCost**: int (ReadOnly): Monthly network cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
* **monthlyComputeCost**: int (ReadOnly): Monthly compute cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
* **monthlyPremiumStorageCost**: int (ReadOnly): Monthly premium storage cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
* **monthlyStandardSSDStorageCost**: int (ReadOnly): Monthly standard SSD storage cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
* **monthlyStorageCost**: int (ReadOnly): Monthly storage cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
* **numberOfMachines**: int (ReadOnly): Number of assessed machines part of this assessment.
* **percentile**: 'Percentile50' | 'Percentile90' | 'Percentile95' | 'Percentile99' | string (Required): Percentile of performance data used to recommend Azure size.
* **perfDataEndTime**: string (ReadOnly): End time to consider performance data for assessment
* **perfDataStartTime**: string (ReadOnly): Start time to consider performance data for assessment
* **pricesTimestamp**: string (ReadOnly): Time when the Azure Prices were queried. Date-Time represented in ISO-8601 format.
* **reservedInstance**: 'None' | 'RI1Year' | 'RI3Year' | string (Required): Azure reserved instance.
* **scalingFactor**: int (Required): Scaling factor used over utilization data to add a performance buffer for new machines to be created in Azure. Min Value = 1.0, Max value = 1.9, Default = 1.3.
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' | string (Required): Assessment sizing criterion.
* **stage**: 'Approved' | 'InProgress' | 'UnderReview' | string (Required): User configurable setting that describes the status of the assessment.
* **status**: 'Completed' | 'Created' | 'Invalid' | 'OutDated' | 'OutOfSync' | 'Running' | 'Updated' | string (ReadOnly): Whether the assessment has been created and is valid.
* **timeRange**: 'Custom' | 'Day' | 'Month' | 'Week' | string (Required): Time range of performance data used to recommend a size.
* **updatedTimestamp**: string (ReadOnly): Time when this project was last updated. Date-Time represented in ISO-8601 format.
* **vmUptime**: [VmUptime](#vmuptime) (Required): Specify the duration for which the VMs are up in the on-premises environment.

## CollectorAgentProperties
### Properties
* **id**: string (ReadOnly)
* **lastHeartbeatUtc**: string (ReadOnly)
* **spnDetails**: [CollectorBodyAgentSpnProperties](#collectorbodyagentspnproperties)
* **version**: string (ReadOnly)

## CollectorBodyAgentSpnProperties
### Properties
* **applicationId**: string: Application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **audience**: string: Intended audience for the service principal.
* **authority**: string: AAD Authority URL which was used to request the token for the service principal.
* **objectId**: string: Object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **tenantId**: string: Tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.

## CollectorProperties
### Properties
* **agentProperties**: [CollectorAgentProperties](#collectoragentproperties)
* **createdTimestamp**: string (ReadOnly): Time when this collector was created. Date-Time represented in ISO-8601 format.
* **discoverySiteId**: string: The ARM id of the discovery service site.
* **updatedTimestamp**: string (ReadOnly): Time when this collector was updated. Date-Time represented in ISO-8601 format.

## Disk
### Properties
* **displayName**: string (ReadOnly): User friendly name of the disk.
* **gigabytesAllocated**: int (ReadOnly): Gigabytes of storage provisioned for this disk.

## DownloadUrl
### Properties
* **assessmentReportUrl**: string (ReadOnly): Hyperlink to download report.
* **expirationTime**: string (ReadOnly): Expiry date of download url.

## Group
### Properties
* **eTag**: string: For optimistic concurrency control.
* **id**: string (ReadOnly): Path reference to this group. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}
* **name**: string (ReadOnly): Name of the group.
* **properties**: [GroupProperties](#groupproperties) (Required): Properties of the group.
* **type**: string (ReadOnly): Type of the object = [Microsoft.Migrate/assessmentProjects/groups].

## GroupBodyProperties
### Properties
* **machines**: string[]: List of machine names that are part of this group.
* **operationType**: 'Add' | 'Remove' | string: Whether to add or remove the machines.

## GroupProperties
### Properties
* **areAssessmentsRunning**: bool (ReadOnly): If the assessments are in running state.
* **assessments**: string[] (ReadOnly): List of References to Assessments created on this group.
* **createdTimestamp**: string (ReadOnly): Time when this group was created. Date-Time represented in ISO-8601 format.
* **groupStatus**: 'Completed' | 'Created' | 'Invalid' | 'Running' | 'Updated' | string (ReadOnly): Whether the group has been created and is valid.
* **groupType**: string: The type of group.
* **machineCount**: int (ReadOnly): Number of machines part of this group.
* **updatedTimestamp**: string (ReadOnly): Time when this group was last updated. Date-Time represented in ISO-8601 format.

## ImportCollectorProperties
### Properties
* **createdTimestamp**: string (ReadOnly)
* **discoverySiteId**: string
* **updatedTimestamp**: string (ReadOnly)

## MachineProperties
### Properties
* **bootType**: 'BIOS' | 'EFI' | 'Unknown' | string (ReadOnly): Boot type of the machine.
* **createdTimestamp**: string (ReadOnly): Time when this machine was created. Date-Time represented in ISO-8601 format.
* **datacenterManagementServerArmId**: string (ReadOnly): ARM ID of the data center as tracked by the Microsoft.OffAzure.
* **datacenterManagementServerName**: string (ReadOnly): Name of the server hosting the datacenter management solution.
* **description**: string (ReadOnly): Description of the machine
* **discoveryMachineArmId**: string (ReadOnly): ARM ID of the machine as tracked by the Microsoft.OffAzure.
* **disks**: [MachinePropertiesDisks](#machinepropertiesdisks) (ReadOnly): Dictionary of disks attached to the machine. Key is ID of disk. Value is a disk object
* **displayName**: string (ReadOnly): User readable name of the machine as defined by the user in their private datacenter.
* **groups**: string[] (ReadOnly): List of references to the groups that the machine is member of.
* **megabytesOfMemory**: int (ReadOnly): Memory in Megabytes.
* **networkAdapters**: [MachinePropertiesNetworkAdapters](#machinepropertiesnetworkadapters) (ReadOnly): Dictionary of network adapters attached to the machine. Key is ID of network adapter. Value is a network adapter object
* **numberOfCores**: int (ReadOnly): Processor count.
* **operatingSystemName**: string (ReadOnly): Operating System name of the machine.
* **operatingSystemType**: string (ReadOnly): Operating System type of the machine.
* **operatingSystemVersion**: string (ReadOnly): Operating System version of the machine.
* **updatedTimestamp**: string (ReadOnly): Time when this machine was last updated. Date-Time represented in ISO-8601 format.

## MachinePropertiesDisks
### Properties
### Additional Properties
* **Additional Properties Type**: [Disk](#disk)

## MachinePropertiesNetworkAdapters
### Properties
### Additional Properties
* **Additional Properties Type**: [NetworkAdapter](#networkadapter)

## NetworkAdapter
### Properties
* **displayName**: string (ReadOnly): User friendly name of the network adapter.
* **ipAddresses**: string[] (ReadOnly): List of IP Addresses on the network adapter.
* **macAddress**: string (ReadOnly): MAC Address of the network adapter.

## PrivateEndpointConnection
### Properties
* **eTag**: string: For optimistic concurrency control.
* **id**: string (ReadOnly): Path reference to this private endpoint endpoint connection. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/privateEndpointConnections/{privateEndpointConnectionName}
* **name**: string (ReadOnly): Name of the private endpoint endpoint connection.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (Required): Properties of the private endpoint endpoint connection.
* **type**: string (ReadOnly): Type of the object = [Microsoft.Migrate/assessmentProjects/privateEndpointConnections].

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [ResourceId](#resourceid) (ReadOnly): ARM id for the private endpoint resource corresponding to the connection.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): State of the private endpoint connection.
* **provisioningState**: 'Accepted' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Indicates whether there is an ongoing operation on the private endpoint.

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.
* **requiredZoneNames**: string[] (ReadOnly): Required DNS zone names of the the private link resource.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: Actions required on the private endpoint connection.
* **description**: string: Description of the private endpoint connection.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: Connection status of the private endpoint connection.

## ProjectProperties
### Properties
* **assessmentSolutionId**: string: Assessment solution ARM id tracked by Microsoft.Migrate/migrateProjects.
* **createdTimestamp**: string (ReadOnly): Time when this project was created. Date-Time represented in ISO-8601 format.
* **customerStorageAccountArmId**: string: The ARM id of the storage account used for interactions when public access is disabled.
* **customerWorkspaceId**: string: The ARM id of service map workspace created by customer.
* **customerWorkspaceLocation**: string: Location of service map workspace created by customer.
* **lastAssessmentTimestamp**: string (ReadOnly): Time when last assessment was created. Date-Time represented in ISO-8601 format. This value will be null until assessment is created.
* **numberOfAssessments**: int (ReadOnly): Number of assessments created in the project.
* **numberOfGroups**: int (ReadOnly): Number of groups created in the project.
* **numberOfMachines**: int (ReadOnly): Number of machines in the project.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The list of private endpoint connections to the project.
* **projectStatus**: 'Active' | 'Inactive' | string: Assessment project status.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' | string (ReadOnly): Provisioning state of the project.
* **publicNetworkAccess**: string: This value can be set to 'enabled' to avoid breaking changes on existing customer resources and templates. If set to 'disabled', traffic over public interface is not allowed, and private endpoint connections would be the exclusive access method.
* **serviceEndpoint**: string (ReadOnly): Endpoint at which the collector agent can call agent REST API.
* **updatedTimestamp**: string (ReadOnly): Time when this project was last updated. Date-Time represented in ISO-8601 format.

## ResourceId
### Properties
* **id**: string (ReadOnly)

## UpdateGroupBody
### Properties
* **eTag**: string: For optimistic concurrency control.
* **properties**: [GroupBodyProperties](#groupbodyproperties): Properties of the group.

## VmFamily
### Properties
* **category**: string[] (ReadOnly): Category of the VM family.
* **familyName**: string (ReadOnly): Name of the VM family.
* **targetLocations**: string[] (ReadOnly): List of Azure regions.

## VmUptime
### Properties
* **daysPerMonth**: int: Number of days in a month for VM uptime.
* **hoursPerDay**: int: Number of hours per day for VM uptime.

