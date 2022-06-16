# Microsoft.Security @ 2020-07-01-preview

## Resource Microsoft.Security/sqlVulnerabilityAssessments/baselineRules@2020-07-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **latestScan**: bool (WriteOnly): Take results from latest scan.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RuleResultsProperties](#ruleresultsproperties) (ReadOnly): Rule results properties.
* **results**: string[][] (WriteOnly): Expected results to be inserted into the baseline.
Leave this field empty it LatestScan == true.
* **type**: 'Microsoft.Security/sqlVulnerabilityAssessments/baselineRules' (ReadOnly, DeployTimeConstant): The resource type

## RuleResultsProperties
### Properties
* **results**: string[][]: Expected results in the baseline.

