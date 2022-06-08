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

## Resource Microsoft.Security/sqlVulnerabilityAssessments/scans@2020-07-01-preview (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScanProperties](#scanproperties) (ReadOnly): A vulnerability assessment scan record properties.
* **type**: 'Microsoft.Security/sqlVulnerabilityAssessments/scans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/sqlVulnerabilityAssessments/scans/scanResults@2020-07-01-preview (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScanResultProperties](#scanresultproperties) (ReadOnly): A vulnerability assessment scan result properties for a single rule.
* **type**: 'Microsoft.Security/sqlVulnerabilityAssessments/scans/scanResults' (ReadOnly, DeployTimeConstant): The resource type

## Baseline
### Properties
* **expectedResults**: string[][] (ReadOnly): Expected results.
* **updatedTime**: string (ReadOnly): Baseline update time (UTC).

## BaselineAdjustedResult
### Properties
* **baseline**: [Baseline](#baseline) (ReadOnly): Baseline details.
* **resultsNotInBaseline**: string[][] (ReadOnly): Results the are not in baseline.
* **resultsOnlyInBaseline**: string[][] (ReadOnly): Results the are in baseline.
* **status**: 'Finding' | 'InternalError' | 'NonFinding' | string (ReadOnly): The rule result status.

## BenchmarkReference
### Properties
* **benchmark**: string (ReadOnly): The benchmark name.
* **reference**: string (ReadOnly): The benchmark reference.

## QueryCheck
### Properties
* **columnNames**: string[] (ReadOnly): Column names of expected result.
* **expectedResult**: string[][] (ReadOnly): Expected result.
* **query**: string (ReadOnly): The rule query.

## Remediation
### Properties
* **automated**: bool (ReadOnly): Is remediation automated.
* **description**: string (ReadOnly): Remediation description.
* **portalLink**: string (ReadOnly): Optional link to remediate in Azure Portal.
* **scripts**: string[] (ReadOnly): Remediation script.

## RuleResultsProperties
### Properties
* **results**: string[][] (ReadOnly): Expected results in the baseline.

## ScanProperties
### Properties
* **database**: string (ReadOnly): The database name.
* **endTime**: string (ReadOnly): Scan results are valid until end time (UTC).
* **highSeverityFailedRulesCount**: int (ReadOnly): The number of failed rules with high severity.
* **isBaselineApplied**: bool (ReadOnly): Baseline created for this database, and has one or more rules.
* **lowSeverityFailedRulesCount**: int (ReadOnly): The number of failed rules with low severity.
* **mediumSeverityFailedRulesCount**: int (ReadOnly): The number of failed rules with medium severity.
* **server**: string (ReadOnly): The server name.
* **sqlVersion**: string (ReadOnly): The SQL version.
* **startTime**: string (ReadOnly): The scan start time (UTC).
* **state**: 'Failed' | 'FailedToRun' | 'InProgress' | 'Passed' | string (ReadOnly): The scan status.
* **totalFailedRulesCount**: int (ReadOnly): The number of total failed rules.
* **totalPassedRulesCount**: int (ReadOnly): The number of total passed rules.
* **totalRulesCount**: int (ReadOnly): The number of total rules assessed.
* **triggerType**: 'OnDemand' | 'Recurring' | string (ReadOnly): The scan trigger type.

## ScanResultProperties
### Properties
* **baselineAdjustedResult**: [BaselineAdjustedResult](#baselineadjustedresult) (ReadOnly): The rule result adjusted with baseline.
* **isTrimmed**: bool (ReadOnly): Indicated whether the results specified here are trimmed.
* **queryResults**: string[][] (ReadOnly): The results of the query that was run.
* **remediation**: [Remediation](#remediation) (ReadOnly): Remediation details.
* **ruleId**: string (ReadOnly): The rule Id.
* **ruleMetadata**: [VaRule](#varule) (ReadOnly): vulnerability assessment rule metadata details.
* **status**: 'Finding' | 'InternalError' | 'NonFinding' | string (ReadOnly): The rule result status.

## VaRule
### Properties
* **benchmarkReferences**: [BenchmarkReference](#benchmarkreference)[] (ReadOnly): The benchmark references.
* **category**: string (ReadOnly): The rule category.
* **description**: string (ReadOnly): The rule description.
* **queryCheck**: [QueryCheck](#querycheck) (ReadOnly): The rule query details.
* **rationale**: string (ReadOnly): The rule rationale.
* **ruleId**: string (ReadOnly): The rule Id.
* **ruleType**: 'BaselineExpected' | 'Binary' | 'NegativeList' | 'PositiveList' | string (ReadOnly): The rule type.
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | 'Obsolete' | string (ReadOnly): The rule severity.
* **title**: string (ReadOnly): The rule title.

