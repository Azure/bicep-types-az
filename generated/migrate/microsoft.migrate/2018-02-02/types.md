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

## GroupProperties
### Properties
* **assessments**: string[] (ReadOnly): List of References to Assessments created on this group.
* **createdTimestamp**: string (ReadOnly): Time when this project was created. Date-Time represented in ISO-8601 format.
* **machines**: string[] (Required): List of machine names that are part of this group.
* **updatedTimestamp**: string (ReadOnly): Time when this project was last updated. Date-Time represented in ISO-8601 format.

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

