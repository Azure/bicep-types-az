# Microsoft.Migrate @ 2018-02-02

## Resource Microsoft.Migrate/projects@2018-02-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-02' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: For optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Azure location in which project is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectProperties](#projectproperties): Properties of a project.
* **tags**: any: Tags provided by Azure Tagging service.
* **type**: 'Microsoft.Migrate/projects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/projects/groups@2018-02-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-02' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: For optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GroupProperties](#groupproperties) (Required): Properties of group resource.
* **type**: 'Microsoft.Migrate/projects/groups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/projects/groups/assessments@2018-02-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-02' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: For optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AssessmentProperties](#assessmentproperties) (Required): Properties of an assessment.
* **type**: 'Microsoft.Migrate/projects/groups/assessments' (ReadOnly, DeployTimeConstant): The resource type

## ProjectProperties
### Properties
* **createdTimestamp**: string (ReadOnly): Time when this project was created. Date-Time represented in ISO-8601 format.
* **customerWorkspaceId**: string: ARM ID of the Service Map workspace created by user.
* **customerWorkspaceLocation**: string: Location of the Service Map workspace created by user.
* **discoveryStatus**: 'Completed' | 'InProgress' | 'NotStarted' | 'Unknown' (ReadOnly): Reports whether project is under discovery. Possible values include: 'Unknown', 'NotStarted', 'InProgress', 'Completed'
* **lastAssessmentTimestamp**: string (ReadOnly): Time when last assessment was created. Date-Time represented in ISO-8601 format. This value will be null until assessment is created.
* **lastDiscoverySessionId**: string (ReadOnly): Session id of the last discovery.
* **lastDiscoveryTimestamp**: string (ReadOnly): Time when this project was created. Date-Time represented in ISO-8601 format. This value will be null until discovery is complete.
* **numberOfAssessments**: int (ReadOnly): Number of assessments created in the project.
* **numberOfGroups**: int (ReadOnly): Number of groups created in the project.
* **numberOfMachines**: int (ReadOnly): Number of machines in the project.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded': Provisioning state of the project. Possible values include: 'Accepted', 'Creating', 'Deleting', 'Failed', 'Moving', 'Succeeded'
* **updatedTimestamp**: string (ReadOnly): Time when this project was last updated. Date-Time represented in ISO-8601 format.

## GroupProperties
### Properties
* **assessments**: string[] (ReadOnly): List of References to Assessments created on this group.
* **createdTimestamp**: string (ReadOnly): Time when this project was created. Date-Time represented in ISO-8601 format.
* **machines**: string[] (Required): List of machine names that are part of this group.
* **updatedTimestamp**: string (ReadOnly): Time when this project was last updated. Date-Time represented in ISO-8601 format.

## AssessmentProperties
### Properties
* **azureHybridUseBenefit**: 'No' | 'Unknown' | 'Yes' (Required): AHUB discount on windows virtual machines. Possible values include: 'Unknown', 'Yes', 'No'
* **azureLocation**: 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaNorth' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'GermanyCentral' | 'GermanyNortheast' | 'JapanEast' | 'JapanWest' | 'KoreaCentral' | 'KoreaSouth' | 'NorthCentralUs' | 'NorthEurope' | 'SouthCentralUs' | 'SoutheastAsia' | 'SouthIndia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' (Required): Target Azure location for which the machines should be assessed. These enums are the same as used by Compute API. Possible values include: 'Unknown', 'EastAsia', 'SoutheastAsia', 'AustraliaEast', 'AustraliaSoutheast', 'BrazilSouth', 'CanadaCentral', 'CanadaEast', 'WestEurope', 'NorthEurope', 'CentralIndia', 'SouthIndia', 'WestIndia', 'JapanEast', 'JapanWest', 'KoreaCentral', 'KoreaSouth', 'UkWest', 'UkSouth', 'NorthCentralUs', 'EastUs', 'WestUs2', 'SouthCentralUs', 'CentralUs', 'EastUs2', 'WestUs', 'WestCentralUs', 'GermanyCentral', 'GermanyNortheast', 'ChinaNorth', 'ChinaEast'
* **azureOfferCode**: 'MSAZR0003P' | 'MSAZR0022P' | 'MSAZR0023P' | 'MSAZR0025P' | 'MSAZR0029P' | 'MSAZR0036P' | 'MSAZR0044P' | 'MSAZR0059P' | 'MSAZR0060P' | 'MSAZR0062P' | 'MSAZR0063P' | 'MSAZR0064P' | 'MSAZR0111P' | 'MSAZR0120P' | 'MSAZR0121P' | 'MSAZR0122P' | 'MSAZR0123P' | 'MSAZR0124P' | 'MSAZR0125P' | 'MSAZR0126P' | 'MSAZR0127P' | 'MSAZR0128P' | 'MSAZR0129P' | 'MSAZR0130P' | 'MSAZR0144P' | 'MSAZR0148P' | 'MSAZR0149P' | 'MSAZRDE0003P' | 'MSAZRDE0044P' | 'MSMCAZR0044P' | 'MSMCAZR0059P' | 'MSMCAZR0060P' | 'MSMCAZR0063P' | 'MSMCAZR0120P' | 'MSMCAZR0121P' | 'MSMCAZR0125P' | 'MSMCAZR0128P' | 'Unknown' (Required): Offer code according to which cost estimation is done. Possible values include: 'Unknown', 'MSAZR0003P', 'MSAZR0044P', 'MSAZR0059P', 'MSAZR0060P', 'MSAZR0062P', 'MSAZR0063P', 'MSAZR0064P', 'MSAZR0029P', 'MSAZR0022P', 'MSAZR0023P', 'MSAZR0148P', 'MSAZR0025P', 'MSAZR0036P', 'MSAZR0120P', 'MSAZR0121P', 'MSAZR0122P', 'MSAZR0123P', 'MSAZR0124P', 'MSAZR0125P', 'MSAZR0126P', 'MSAZR0127P', 'MSAZR0128P', 'MSAZR0129P', 'MSAZR0130P', 'MSAZR0111P', 'MSAZR0144P', 'MSAZR0149P', 'MSMCAZR0044P', 'MSMCAZR0059P', 'MSMCAZR0060P', 'MSMCAZR0063P', 'MSMCAZR0120P', 'MSMCAZR0121P', 'MSMCAZR0125P', 'MSMCAZR0128P', 'MSAZRDE0003P', 'MSAZRDE0044P'
* **azurePricingTier**: 'Basic' | 'Standard' (Required): Pricing tier for Size evaluation. Possible values include: 'Standard', 'Basic'
* **azureStorageRedundancy**: 'GeoRedundant' | 'LocallyRedundant' | 'ReadAccessGeoRedundant' | 'Unknown' | 'ZoneRedundant' (Required): Storage Redundancy type offered by Azure. Possible values include: 'Unknown', 'LocallyRedundant', 'ZoneRedundant', 'GeoRedundant', 'ReadAccessGeoRedundant'
* **confidenceRatingInPercentage**: int (ReadOnly): Confidence rating percentage for assessment. Can be in the range [0, 100].
* **createdTimestamp**: string (ReadOnly): Time when this project was created. Date-Time represented in ISO-8601 format.
* **currency**: 'ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'Unknown' | 'USD' | 'ZAR' (Required): Currency to report prices in. Possible values include: 'Unknown', 'USD', 'DKK', 'CAD', 'IDR', 'JPY', 'KRW', 'NZD', 'NOK', 'RUB', 'SAR', 'ZAR', 'SEK', 'TRY', 'GBP', 'MXN', 'MYR', 'INR', 'HKD', 'BRL', 'TWD', 'EUR', 'CHF', 'ARS', 'AUD', 'CNY'
* **discountPercentage**: int (Required): Custom discount percentage to be applied on final costs. Can be in the range [0, 100].
* **monthlyBandwidthCost**: int (ReadOnly): Monthly network cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
* **monthlyComputeCost**: int (ReadOnly): Monthly compute cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
* **monthlyStorageCost**: int (ReadOnly): Monthly storage cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
* **numberOfMachines**: int (ReadOnly): Number of assessed machines part of this assessment.
* **percentile**: 'Percentile50' | 'Percentile90' | 'Percentile95' | 'Percentile99' (Required): Percentile of performance data used to recommend Azure size. Possible values include: 'Percentile50', 'Percentile90', 'Percentile95', 'Percentile99'
* **pricesTimestamp**: string (ReadOnly): Time when the Azure Prices were queried. Date-Time represented in ISO-8601 format.
* **scalingFactor**: int (Required): Scaling factor used over utilization data to add a performance buffer for new machines to be created in Azure. Min Value = 1.0, Max value = 1.9, Default = 1.3.
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' (Required): Assessment sizing criterion. Possible values include: 'PerformanceBased', 'AsOnPremises'
* **stage**: 'Approved' | 'InProgress' | 'UnderReview' (Required): User configurable setting that describes the status of the assessment. Possible values include: 'InProgress', 'UnderReview', 'Approved'
* **status**: 'Completed' | 'Created' | 'Invalid' | 'Running' | 'Updated' (ReadOnly): Whether the assessment has been created and is valid. Possible values include: 'Created', 'Updated', 'Running', 'Completed', 'Invalid'
* **timeRange**: 'Day' | 'Month' | 'Week' (Required): Time range of performance data used to recommend a size. Possible values include: 'Day', 'Week', 'Month'
* **updatedTimestamp**: string (ReadOnly): Time when this project was last updated. Date-Time represented in ISO-8601 format.

