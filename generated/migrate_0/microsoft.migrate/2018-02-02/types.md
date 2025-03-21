# Microsoft.Migrate @ 2018-02-02

## Resource Microsoft.Migrate/projects@2018-02-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-02' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: For optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Azure location in which project is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectProperties](#projectproperties): Properties of the project.
* **tags**: any: Tags provided by Azure Tagging service.
* **type**: 'Microsoft.Migrate/projects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/projects/groups@2018-02-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-02' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: For optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GroupProperties](#groupproperties) (Required): Properties of the group.
* **type**: 'Microsoft.Migrate/projects/groups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/projects/groups/assessments@2018-02-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-02' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: For optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AssessmentProperties](#assessmentproperties) (Required): Properties of the assessment.
* **type**: 'Microsoft.Migrate/projects/groups/assessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/projects/groups/assessments/assessedMachines@2018-02-02 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-02' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): For optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AssessedMachineProperties](#assessedmachineproperties) (ReadOnly): Properties of an assessed machine.
* **type**: 'Microsoft.Migrate/projects/groups/assessments/assessedMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/projects/machines@2018-02-02 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-02' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): For optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MachineProperties](#machineproperties) (ReadOnly): Properties of the machine.
* **type**: 'Microsoft.Migrate/projects/machines' (ReadOnly, DeployTimeConstant): The resource type

## AssessedDisk
### Properties
* **gigabytesConsumed**: int (ReadOnly): Gigabytes of storage consumed by this disk.
* **gigabytesForRecommendedDiskSize**: int (ReadOnly): Gigabytes of storage provided by the recommended Azure disk size.
* **gigabytesProvisioned**: int (ReadOnly): Gigabytes of storage provisioned for this disk.
* **megabytesPerSecondOfRead**: int (ReadOnly): Disk throughput in MegaBytes per second.
* **megabytesPerSecondOfReadDataPointsExpected**: int (ReadOnly): Expected data points for MegaBytes per second of read.
* **megabytesPerSecondOfReadDataPointsReceived**: int (ReadOnly): Received data points for MegaBytes per second of read.
* **megabytesPerSecondOfWrite**: int (ReadOnly): Disk throughput in MegaBytes per second.
* **megabytesPerSecondOfWriteDataPointsExpected**: int (ReadOnly): Expected data points for MegaBytes per second of write.
* **megabytesPerSecondOfWriteDataPointsReceived**: int (ReadOnly): Received data points for MegaBytes per second of write.
* **monthlyStorageCost**: int (ReadOnly): Estimated aggregate storage cost for a 31-day month for this disk.
* **name**: string (ReadOnly): Name of the assessed disk.
* **numberOfReadOperationsPerSecond**: int (ReadOnly): Number of read operations per second for the disk.
* **numberOfReadOperationsPerSecondDataPointsExpected**: int (ReadOnly): Expected number of data points for read operations per second.
* **numberOfReadOperationsPerSecondDataPointsReceived**: int (ReadOnly): Received number of data points for read operations per second.
* **numberOfWriteOperationsPerSecond**: int (ReadOnly): Number of read and write operations per second for the disk.
* **numberOfWriteOperationsPerSecondDataPointsExpected**: int (ReadOnly): Expected number of data points for write operations per second.
* **numberOfWriteOperationsPerSecondDataPointsReceived**: int (ReadOnly): Received number of data points for write operations per second.
* **recommendedDiskSize**: 'Premium_P10' | 'Premium_P20' | 'Premium_P30' | 'Premium_P4' | 'Premium_P40' | 'Premium_P50' | 'Premium_P6' | 'Standard_S10' | 'Standard_S20' | 'Standard_S30' | 'Standard_S4' | 'Standard_S40' | 'Standard_S50' | 'Standard_S6' | 'Unknown' | string (ReadOnly): Recommended Azure size for the disk, given utilization data and preferences set on Assessment.
* **recommendedDiskType**: 'Premium' | 'Standard' | 'Unknown' | string (ReadOnly): Storage type selected for this disk.
* **suitability**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'Unknown' | string (ReadOnly): Whether this disk is suitable for Azure.
* **suitabilityExplanation**: 'DiskSizeGreaterThanSupported' | 'InternalErrorOccurredForDiskEvaluation' | 'NoDiskSizeFoundForSelectedRedundancy' | 'NoDiskSizeFoundInSelectedLocation' | 'NoSuitableDiskSizeForIops' | 'NoSuitableDiskSizeForThroughput' | 'NotApplicable' | 'Unknown' | string (ReadOnly): If disk is suitable, this explains the reasons and mitigation steps.

## AssessedMachineProperties
### Properties
* **bootType**: 'BIOS' | 'EFI' | 'Unknown' | string (ReadOnly): Boot type of the machine.
* **createdTimestamp**: string (ReadOnly): Time when this machine was created. Date-Time represented in ISO-8601 format.
* **datacenterContainer**: string (ReadOnly): Container defined in the management solution that this machine is part of in the datacenter.
* **datacenterMachineId**: string (ReadOnly): ID of the machine as tracked by the datacenter management solution.
* **datacenterManagementServer**: string (ReadOnly): Name of the server hosting the datacenter management solution.
* **datacenterManagementServerId**: string (ReadOnly): ID of the server hosting the datacenter management solution.
* **description**: string (ReadOnly): Description of the machine
* **discoveredTimestamp**: string (ReadOnly): Time when this machine was discovered by Azure Migrate agent. Date-Time represented in ISO-8601 format.
* **disks**: [AssessedMachinePropertiesDisks](#assessedmachinepropertiesdisks) (ReadOnly): Dictionary of disks attached to the machine. Key is ID of disk. Value is a disk object.
* **displayName**: string (ReadOnly): User readable name of the machine as defined by the user in their private datacenter.
* **groups**: string[] (ReadOnly): List of references to the groups that the machine is member of.
* **megabytesOfMemory**: int (ReadOnly): Memory in Megabytes.
* **megabytesOfMemoryForRecommendedSize**: int (ReadOnly): Megabytes of memory in the Recommended Azure VM Size.
* **monthlyBandwidthCost**: int (ReadOnly): Monthly network cost estimate for the network adapters that are attached to this machine as a group, for a 31-day month.
* **monthlyComputeCostForRecommendedSize**: int (ReadOnly): Compute Cost for a 31-day month, if the machine is migrated to Azure with the Recommended Size.
* **monthlyStorageCost**: int (ReadOnly): Monthly storage cost estimate for the disks that are attached to this machine as a group, for a 31-day month.
* **networkAdapters**: [AssessedMachinePropertiesNetworkAdapters](#assessedmachinepropertiesnetworkadapters) (ReadOnly): Dictionary of network adapters attached to the machine. Key is name of the adapter. Value is a network adapter object.
* **numberOfCores**: int (ReadOnly): Processor count.
* **numberOfCoresForRecommendedSize**: int (ReadOnly): Number of CPU cores in the Recommended Azure VM Size.
* **operatingSystem**: string (ReadOnly): Operating System of the machine.
* **percentageCoresUtilization**: int (ReadOnly): Utilization percentage of the processor core as observed in the private data center, in the Time Range selected on Assessment, reported as the Percentile value based on the percentile number selected in assessment.
* **percentageCoresUtilizationDataPointsExpected**: int (ReadOnly): Expected data points for percentage of cores utilization.
* **percentageCoresUtilizationDataPointsReceived**: int (ReadOnly): Received data points for percentage of cores utilization.
* **percentageMemoryUtilization**: int (ReadOnly): Utilization percentage of the memory as observed in the private data center, in the Time Range selected on Assessment, reported as the Percentile value based on the percentile number selected in assessment.
* **percentageMemoryUtilizationDataPointsExpected**: int (ReadOnly): Expected data points for percentage of memory utilization.
* **percentageMemoryUtilizationDataPointsReceived**: int (ReadOnly): Received data points for percentage of memory utilization.
* **recommendedSize**: 'Basic_A0' | 'Basic_A1' | 'Basic_A2' | 'Basic_A3' | 'Basic_A4' | 'Standard_A0' | 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A1_v2' | 'Standard_A2' | 'Standard_A2_v2' | 'Standard_A2m_v2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A4_v2' | 'Standard_A4m_v2' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A8_v2' | 'Standard_A8m_v2' | 'Standard_A9' | 'Standard_D1' | 'Standard_D11' | 'Standard_D11_v2' | 'Standard_D12' | 'Standard_D12_v2' | 'Standard_D13' | 'Standard_D13_v2' | 'Standard_D14' | 'Standard_D14_v2' | 'Standard_D15_v2' | 'Standard_D1_v2' | 'Standard_D2' | 'Standard_D2_v2' | 'Standard_D3' | 'Standard_D3_v2' | 'Standard_D4' | 'Standard_D4_v2' | 'Standard_D5_v2' | 'Standard_DS1' | 'Standard_DS11' | 'Standard_DS11_v2' | 'Standard_DS12' | 'Standard_DS12_v2' | 'Standard_DS13' | 'Standard_DS13_v2' | 'Standard_DS14' | 'Standard_DS14_v2' | 'Standard_DS15_v2' | 'Standard_DS1_v2' | 'Standard_DS2' | 'Standard_DS2_v2' | 'Standard_DS3' | 'Standard_DS3_v2' | 'Standard_DS4' | 'Standard_DS4_v2' | 'Standard_DS5_v2' | 'Standard_F1' | 'Standard_F16' | 'Standard_F16s' | 'Standard_F1s' | 'Standard_F2' | 'Standard_F2s' | 'Standard_F4' | 'Standard_F4s' | 'Standard_F8' | 'Standard_F8s' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS5' | 'Standard_H16' | 'Standard_H16m' | 'Standard_H16mr' | 'Standard_H16r' | 'Standard_H8' | 'Standard_H8m' | 'Standard_L16s' | 'Standard_L32s' | 'Standard_L4s' | 'Standard_L8s' | 'Unknown' | string (ReadOnly): Recommended Azure size for this machine.
* **suitability**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'Unknown' | string (ReadOnly): Whether machine is suitable for migration to Azure.
* **suitabilityExplanation**: 'BootTypeNotSupported' | 'BootTypeUnknown' | 'CheckCentOsVersion' | 'CheckCoreOsLinuxVersion' | 'CheckDebianLinuxVersion' | 'CheckOpenSuseLinuxVersion' | 'CheckOracleLinuxVersion' | 'CheckRedHatLinuxVersion' | 'CheckSuseLinuxVersion' | 'CheckUbuntuLinuxVersion' | 'CheckWindowsServer2008R2Version' | 'EndorsedWithConditionsLinuxDistributions' | 'GuestOperatingSystemArchitectureNotSupported' | 'GuestOperatingSystemNotSupported' | 'GuestOperatingSystemUnknown' | 'InternalErrorOccuredDuringComputeEvaluation' | 'InternalErrorOccuredDuringNetworkEvaluation' | 'InternalErrorOccuredDuringStorageEvaluation' | 'MoreDisksThanSupported' | 'NoGuestOperatingSystemConditionallySupported' | 'NoSuitableVmSizeFound' | 'NoVmSizeForBasicPricingTier' | 'NoVmSizeForSelectedAzureLocation' | 'NoVmSizeForSelectedPricingTier' | 'NoVmSizeForStandardPricingTier' | 'NoVmSizeSupportsNetworkPerformance' | 'NoVmSizeSupportsStoragePerformance' | 'NotApplicable' | 'OneOrMoreAdaptersNotSuitable' | 'OneOrMoreDisksNotSuitable' | 'UnendorsedLinuxDistributions' | 'Unknown' | 'WindowsClientVersionsConditionallySupported' | 'WindowsOSNoLongerUnderMSSupport' | 'WindowsServerVersionConditionallySupported' | 'WindowsServerVersionsSupportedWithCaveat' | string (ReadOnly): If machine is not ready to be migrated, this explains the reasons and mitigation steps.
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
* **ipAddresses**: string[] (ReadOnly): List of IP Addresses on the network adapter.
* **macAddress**: string (ReadOnly): MAC Address of the network adapter.
* **megabytesPerSecondOfReadDataPointsReceived**: int (ReadOnly): Received data points for incoming traffic in MegaBytes per second.
* **megabytesPerSecondReceived**: int (ReadOnly): Adapter throughput for incoming traffic in MegaBytes per second.
* **megabytesPerSecondReceivedDataPointsExpected**: int (ReadOnly): Expected data points for incoming traffic in MegaBytes per second.
* **megabytesPerSecondTransmitted**: int (ReadOnly): Adapter throughput for outgoing traffic in MegaBytes per second.
* **megabytesPerSecondTransmittedDataPointsExpected**: int (ReadOnly): Expected data points for outgoing traffic in MegaBytes per second.
* **megabytesPerSecondTransmittedDataPointsReceived**: int (ReadOnly): Received data points for outgoing traffic in MegaBytes per second.
* **monthlyBandwidthCosts**: int (ReadOnly): Monthly cost estimate for network bandwidth used by this network adapter.
* **netGigabytesTransmittedPerMonth**: int: Gigabytes transmitted through this adapter each month.
* **suitability**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'Unknown' | string (ReadOnly): Whether this adapter is suitable for Azure.
* **suitabilityExplanation**: 'InternalErrorOccured' | 'NotApplicable' | 'Unknown' | string (ReadOnly): If network adapter is suitable, this explains the reasons and mitigation steps.

## AssessmentProperties
### Properties
* **azureHybridUseBenefit**: 'No' | 'Unknown' | 'Yes' | string (Required): AHUB discount on windows virtual machines.
* **azureLocation**: 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaNorth' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'GermanyCentral' | 'GermanyNortheast' | 'JapanEast' | 'JapanWest' | 'KoreaCentral' | 'KoreaSouth' | 'NorthCentralUs' | 'NorthEurope' | 'SouthCentralUs' | 'SouthIndia' | 'SoutheastAsia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' | string (Required): Target Azure location for which the machines should be assessed. These enums are the same as used by Compute API.
* **azureOfferCode**: 'MSAZR0003P' | 'MSAZR0022P' | 'MSAZR0023P' | 'MSAZR0025P' | 'MSAZR0029P' | 'MSAZR0036P' | 'MSAZR0044P' | 'MSAZR0059P' | 'MSAZR0060P' | 'MSAZR0062P' | 'MSAZR0063P' | 'MSAZR0064P' | 'MSAZR0111P' | 'MSAZR0120P' | 'MSAZR0121P' | 'MSAZR0122P' | 'MSAZR0123P' | 'MSAZR0124P' | 'MSAZR0125P' | 'MSAZR0126P' | 'MSAZR0127P' | 'MSAZR0128P' | 'MSAZR0129P' | 'MSAZR0130P' | 'MSAZR0144P' | 'MSAZR0148P' | 'MSAZR0149P' | 'MSAZRDE0003P' | 'MSAZRDE0044P' | 'MSMCAZR0044P' | 'MSMCAZR0059P' | 'MSMCAZR0060P' | 'MSMCAZR0063P' | 'MSMCAZR0120P' | 'MSMCAZR0121P' | 'MSMCAZR0125P' | 'MSMCAZR0128P' | 'Unknown' | string (Required): Offer code according to which cost estimation is done.
* **azurePricingTier**: 'Basic' | 'Standard' | string (Required): Pricing tier for Size evaluation.
* **azureStorageRedundancy**: 'GeoRedundant' | 'LocallyRedundant' | 'ReadAccessGeoRedundant' | 'Unknown' | 'ZoneRedundant' | string (Required): Storage Redundancy type offered by Azure.
* **confidenceRatingInPercentage**: int (ReadOnly): Confidence rating percentage for assessment. Can be in the range [0, 100].
* **createdTimestamp**: string (ReadOnly): Time when this project was created. Date-Time represented in ISO-8601 format.
* **currency**: 'ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string (Required): Currency to report prices in.
* **discountPercentage**: int (Required): Custom discount percentage to be applied on final costs. Can be in the range [0, 100].
* **monthlyBandwidthCost**: int (ReadOnly): Monthly network cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
* **monthlyComputeCost**: int (ReadOnly): Monthly compute cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
* **monthlyStorageCost**: int (ReadOnly): Monthly storage cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
* **numberOfMachines**: int (ReadOnly): Number of assessed machines part of this assessment.
* **percentile**: 'Percentile50' | 'Percentile90' | 'Percentile95' | 'Percentile99' | string (Required): Percentile of performance data used to recommend Azure size.
* **pricesTimestamp**: string (ReadOnly): Time when the Azure Prices were queried. Date-Time represented in ISO-8601 format.
* **scalingFactor**: int (Required): Scaling factor used over utilization data to add a performance buffer for new machines to be created in Azure. Min Value = 1.0, Max value = 1.9, Default = 1.3.
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' | string (Required): Assessment sizing criterion.
* **stage**: 'Approved' | 'InProgress' | 'UnderReview' | string (Required): User configurable setting that describes the status of the assessment.
* **status**: 'Completed' | 'Created' | 'Invalid' | 'Running' | 'Updated' | string (ReadOnly): Whether the assessment has been created and is valid.
* **timeRange**: 'Day' | 'Month' | 'Week' | string (Required): Time range of performance data used to recommend a size.
* **updatedTimestamp**: string (ReadOnly): Time when this project was last updated. Date-Time represented in ISO-8601 format.

## Disk
### Properties
* **gigabytesAllocated**: int (ReadOnly): Gigabytes of storage provisioned for this disk.
* **gigabytesConsumed**: int (ReadOnly): Gigabytes of storage consumed by this disk.

## GroupProperties
### Properties
* **assessments**: string[] (ReadOnly): List of References to Assessments created on this group.
* **createdTimestamp**: string (ReadOnly): Time when this project was created. Date-Time represented in ISO-8601 format.
* **machines**: string[] (Required): List of machine names that are part of this group.
* **updatedTimestamp**: string (ReadOnly): Time when this project was last updated. Date-Time represented in ISO-8601 format.

## MachineProperties
### Properties
* **bootType**: 'BIOS' | 'EFI' | 'Unknown' | string (ReadOnly): Boot type of the machine.
* **createdTimestamp**: string (ReadOnly): Time when this machine was created. Date-Time represented in ISO-8601 format.
* **datacenterContainer**: string (ReadOnly): Container defined in the management solution that this machine is part of in the datacenter.
* **datacenterMachineId**: string (ReadOnly): ID of the machine as tracked by the datacenter management solution.
* **datacenterManagementServer**: string (ReadOnly): Name of the server hosting the datacenter management solution.
* **datacenterManagementServerId**: string (ReadOnly): ID of the server hosting the datacenter management solution.
* **description**: string (ReadOnly): Description of the machine
* **discoveredTimestamp**: string (ReadOnly): Time when this machine was discovered by Azure Migrate agent. Date-Time represented in ISO-8601 format.
* **disks**: [MachinePropertiesDisks](#machinepropertiesdisks) (ReadOnly): Dictionary of disks attached to the machine. Key is ID of disk. Value is a disk object
* **displayName**: string (ReadOnly): User readable name of the machine as defined by the user in their private datacenter.
* **groups**: string[] (ReadOnly): List of references to the groups that the machine is member of.
* **megabytesOfMemory**: int (ReadOnly): Memory in Megabytes.
* **networkAdapters**: [MachinePropertiesNetworkAdapters](#machinepropertiesnetworkadapters) (ReadOnly): Dictionary of network adapters attached to the machine. Key is ID of network adapter. Value is a network adapter object
* **numberOfCores**: int (ReadOnly): Processor count.
* **operatingSystem**: string (ReadOnly): Operating System of the machine.
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
* **ipAddresses**: string[] (ReadOnly): List of IP Addresses on the network adapter.
* **macAddress**: string (ReadOnly): MAC Address of the network adapter.

## ProjectProperties
### Properties
* **createdTimestamp**: string (ReadOnly): Time when this project was created. Date-Time represented in ISO-8601 format.
* **customerWorkspaceId**: string: ARM ID of the Service Map workspace created by user.
* **customerWorkspaceLocation**: string: Location of the Service Map workspace created by user.
* **discoveryStatus**: 'Completed' | 'InProgress' | 'NotStarted' | 'Unknown' | string (ReadOnly): Reports whether project is under discovery.
* **lastAssessmentTimestamp**: string (ReadOnly): Time when last assessment was created. Date-Time represented in ISO-8601 format. This value will be null until assessment is created.
* **lastDiscoverySessionId**: string (ReadOnly): Session id of the last discovery.
* **lastDiscoveryTimestamp**: string (ReadOnly): Time when this project was created. Date-Time represented in ISO-8601 format. This value will be null until discovery is complete.
* **numberOfAssessments**: int (ReadOnly): Number of assessments created in the project.
* **numberOfGroups**: int (ReadOnly): Number of groups created in the project.
* **numberOfMachines**: int (ReadOnly): Number of machines in the project.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' | string: Provisioning state of the project.
* **updatedTimestamp**: string (ReadOnly): Time when this project was last updated. Date-Time represented in ISO-8601 format.

