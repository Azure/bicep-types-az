# Microsoft.Migrate @ 2019-10-01

## Microsoft.Migrate/assessmentProjects/groups/assessments
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AssessmentProperties (Required)
* **type**: 'Microsoft.Migrate/assessmentProjects/groups/assessments' (ReadOnly, DeployTimeConstant)

## AssessmentProperties
### Properties
* **azureDiskType**: 'Premium' | 'Standard' | 'StandardOrPremium' | 'StandardSSD' | 'Unknown' (Required)
* **azureHybridUseBenefit**: 'No' | 'Unknown' | 'Yes' (Required)
* **azureLocation**: 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaNorth' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'GermanyCentral' | 'GermanyNortheast' | 'JapanEast' | 'JapanWest' | 'KoreaCentral' | 'KoreaSouth' | 'NorthCentralUs' | 'NorthEurope' | 'SouthCentralUs' | 'SouthIndia' | 'SoutheastAsia' | 'USDoDCentral' | 'USDoDEast' | 'USGovArizona' | 'USGovIowa' | 'USGovTexas' | 'USGovVirginia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' (Required)
* **azureOfferCode**: 'EA' | 'MSAZR0003P' | 'MSAZR0022P' | 'MSAZR0023P' | 'MSAZR0025P' | 'MSAZR0029P' | 'MSAZR0036P' | 'MSAZR0044P' | 'MSAZR0059P' | 'MSAZR0060P' | 'MSAZR0062P' | 'MSAZR0063P' | 'MSAZR0064P' | 'MSAZR0111P' | 'MSAZR0120P' | 'MSAZR0121P' | 'MSAZR0122P' | 'MSAZR0123P' | 'MSAZR0124P' | 'MSAZR0125P' | 'MSAZR0126P' | 'MSAZR0127P' | 'MSAZR0128P' | 'MSAZR0129P' | 'MSAZR0130P' | 'MSAZR0144P' | 'MSAZR0148P' | 'MSAZR0149P' | 'MSAZRDE0003P' | 'MSAZRDE0044P' | 'MSAZRUSGOV0003P' | 'MSMCAZR0044P' | 'MSMCAZR0059P' | 'MSMCAZR0060P' | 'MSMCAZR0063P' | 'MSMCAZR0120P' | 'MSMCAZR0121P' | 'MSMCAZR0125P' | 'MSMCAZR0128P' | 'Unknown' (Required)
* **azurePricingTier**: 'Basic' | 'Standard' (Required)
* **azureStorageRedundancy**: 'GeoRedundant' | 'LocallyRedundant' | 'ReadAccessGeoRedundant' | 'Unknown' | 'ZoneRedundant' (Required)
* **azureVmFamilies**: 'Av2_series' | 'Basic_A0_A4' | 'DC_Series' | 'DS_series' | 'DSv2_series' | 'D_series' | 'Dsv3_series' | 'Dv2_series' | 'Dv3_series' | 'Esv3_series' | 'Ev3_series' | 'F_series' | 'Fs_series' | 'Fsv2_series' | 'GS_series' | 'G_series' | 'H_series' | 'Ls_series' | 'M_series' | 'Standard_A0_A7' | 'Standard_A8_A11' | 'Unknown'[] (Required)
* **confidenceRatingInPercentage**: int (ReadOnly)
* **createdTimestamp**: string (ReadOnly)
* **currency**: 'ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' (Required)
* **discountPercentage**: int (Required)
* **eaSubscriptionId**: string (ReadOnly)
* **monthlyBandwidthCost**: int (ReadOnly)
* **monthlyComputeCost**: int (ReadOnly)
* **monthlyPremiumStorageCost**: int (ReadOnly)
* **monthlyStandardSSDStorageCost**: int (ReadOnly)
* **monthlyStorageCost**: int (ReadOnly)
* **numberOfMachines**: int (ReadOnly)
* **percentile**: 'Percentile50' | 'Percentile90' | 'Percentile95' | 'Percentile99' (Required)
* **perfDataEndTime**: string (ReadOnly)
* **perfDataStartTime**: string (ReadOnly)
* **pricesTimestamp**: string (ReadOnly)
* **reservedInstance**: 'None' | 'RI1Year' | 'RI3Year' (Required)
* **scalingFactor**: int (Required)
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' (Required)
* **stage**: 'Approved' | 'InProgress' | 'UnderReview' (Required)
* **status**: 'Completed' | 'Created' | 'Invalid' | 'OutDated' | 'OutOfSync' | 'Running' | 'Updated' (ReadOnly)
* **timeRange**: 'Custom' | 'Day' | 'Month' | 'Week' (Required)
* **updatedTimestamp**: string (ReadOnly)
* **vmUptime**: VmUptime (Required)

## VmUptime
### Properties
* **daysPerMonth**: int
* **hoursPerDay**: int

## Microsoft.Migrate/assessmentProjects/groups
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: GroupProperties (Required)
* **type**: 'Microsoft.Migrate/assessmentProjects/groups' (ReadOnly, DeployTimeConstant)

## GroupProperties
### Properties
* **areAssessmentsRunning**: bool (ReadOnly)
* **assessments**: string[] (ReadOnly)
* **createdTimestamp**: string (ReadOnly)
* **groupStatus**: 'Completed' | 'Created' | 'Invalid' | 'Running' | 'Updated' (ReadOnly)
* **machineCount**: int (ReadOnly)
* **updatedTimestamp**: string (ReadOnly)

## Microsoft.Migrate/assessmentProjects/hypervcollectors
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CollectorProperties
* **type**: 'Microsoft.Migrate/assessmentProjects/hypervcollectors' (ReadOnly, DeployTimeConstant)

## CollectorProperties
### Properties
* **agentProperties**: CollectorAgentProperties
* **createdTimestamp**: string (ReadOnly)
* **discoverySiteId**: string
* **updatedTimestamp**: string (ReadOnly)

## CollectorAgentProperties
### Properties
* **id**: string (ReadOnly)
* **lastHeartbeatUtc**: string (ReadOnly)
* **spnDetails**: CollectorBodyAgentSpnProperties
* **version**: string (ReadOnly)

## CollectorBodyAgentSpnProperties
### Properties
* **applicationId**: string
* **audience**: string
* **authority**: string
* **objectId**: string
* **tenantId**: string

## Microsoft.Migrate/assessmentProjects/vmwarecollectors
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CollectorProperties
* **type**: 'Microsoft.Migrate/assessmentProjects/vmwarecollectors' (ReadOnly, DeployTimeConstant)

## Microsoft.Migrate/assessmentProjects
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProjectProperties
* **tags**: any
* **type**: 'Microsoft.Migrate/assessmentProjects' (ReadOnly, DeployTimeConstant)

## ProjectProperties
### Properties
* **assessmentSolutionId**: string
* **createdTimestamp**: string (ReadOnly)
* **customerWorkspaceId**: string
* **customerWorkspaceLocation**: string
* **lastAssessmentTimestamp**: string (ReadOnly)
* **numberOfAssessments**: int (ReadOnly)
* **numberOfGroups**: int (ReadOnly)
* **numberOfMachines**: int (ReadOnly)
* **projectStatus**: 'Active' | 'Inactive'
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)
* **serviceEndpoint**: string (ReadOnly)
* **updatedTimestamp**: string (ReadOnly)

