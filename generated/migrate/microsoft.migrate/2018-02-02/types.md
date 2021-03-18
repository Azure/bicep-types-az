# Microsoft.Migrate @ 2018-02-02

## Resource Microsoft.Migrate/projects@2018-02-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-02' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProjectProperties](#projectproperties)
* **tags**: any
* **type**: 'Microsoft.Migrate/projects' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Migrate/projects/groups@2018-02-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-02' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GroupProperties](#groupproperties) (Required)
* **type**: 'Microsoft.Migrate/projects/groups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Migrate/projects/groups/assessments@2018-02-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-02' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AssessmentProperties](#assessmentproperties) (Required)
* **type**: 'Microsoft.Migrate/projects/groups/assessments' (ReadOnly, DeployTimeConstant)

## ProjectProperties
### Properties
* **createdTimestamp**: string (ReadOnly)
* **customerWorkspaceId**: string
* **customerWorkspaceLocation**: string
* **discoveryStatus**: 'Completed' | 'InProgress' | 'NotStarted' | 'Unknown' (ReadOnly)
* **lastAssessmentTimestamp**: string (ReadOnly)
* **lastDiscoverySessionId**: string (ReadOnly)
* **lastDiscoveryTimestamp**: string (ReadOnly)
* **numberOfAssessments**: int (ReadOnly)
* **numberOfGroups**: int (ReadOnly)
* **numberOfMachines**: int (ReadOnly)
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded'
* **updatedTimestamp**: string (ReadOnly)

## GroupProperties
### Properties
* **assessments**: string[] (ReadOnly)
* **createdTimestamp**: string (ReadOnly)
* **machines**: string[] (Required)
* **updatedTimestamp**: string (ReadOnly)

## AssessmentProperties
### Properties
* **azureHybridUseBenefit**: 'No' | 'Unknown' | 'Yes' (Required)
* **azureLocation**: 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaNorth' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'GermanyCentral' | 'GermanyNortheast' | 'JapanEast' | 'JapanWest' | 'KoreaCentral' | 'KoreaSouth' | 'NorthCentralUs' | 'NorthEurope' | 'SouthCentralUs' | 'SouthIndia' | 'SoutheastAsia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' (Required)
* **azureOfferCode**: 'MSAZR0003P' | 'MSAZR0022P' | 'MSAZR0023P' | 'MSAZR0025P' | 'MSAZR0029P' | 'MSAZR0036P' | 'MSAZR0044P' | 'MSAZR0059P' | 'MSAZR0060P' | 'MSAZR0062P' | 'MSAZR0063P' | 'MSAZR0064P' | 'MSAZR0111P' | 'MSAZR0120P' | 'MSAZR0121P' | 'MSAZR0122P' | 'MSAZR0123P' | 'MSAZR0124P' | 'MSAZR0125P' | 'MSAZR0126P' | 'MSAZR0127P' | 'MSAZR0128P' | 'MSAZR0129P' | 'MSAZR0130P' | 'MSAZR0144P' | 'MSAZR0148P' | 'MSAZR0149P' | 'MSAZRDE0003P' | 'MSAZRDE0044P' | 'MSMCAZR0044P' | 'MSMCAZR0059P' | 'MSMCAZR0060P' | 'MSMCAZR0063P' | 'MSMCAZR0120P' | 'MSMCAZR0121P' | 'MSMCAZR0125P' | 'MSMCAZR0128P' | 'Unknown' (Required)
* **azurePricingTier**: 'Basic' | 'Standard' (Required)
* **azureStorageRedundancy**: 'GeoRedundant' | 'LocallyRedundant' | 'ReadAccessGeoRedundant' | 'Unknown' | 'ZoneRedundant' (Required)
* **confidenceRatingInPercentage**: int (ReadOnly)
* **createdTimestamp**: string (ReadOnly)
* **currency**: 'ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' (Required)
* **discountPercentage**: int (Required)
* **monthlyBandwidthCost**: int (ReadOnly)
* **monthlyComputeCost**: int (ReadOnly)
* **monthlyStorageCost**: int (ReadOnly)
* **numberOfMachines**: int (ReadOnly)
* **percentile**: 'Percentile50' | 'Percentile90' | 'Percentile95' | 'Percentile99' (Required)
* **pricesTimestamp**: string (ReadOnly)
* **scalingFactor**: int (Required)
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' (Required)
* **stage**: 'Approved' | 'InProgress' | 'UnderReview' (Required)
* **status**: 'Completed' | 'Created' | 'Invalid' | 'Running' | 'Updated' (ReadOnly)
* **timeRange**: 'Day' | 'Month' | 'Week' (Required)
* **updatedTimestamp**: string (ReadOnly)

