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
* **expectedResults**: string[][]: Expected results.
* **updatedTime**: string: Baseline update time (UTC).

## BaselineAdjustedResult
### Properties
* **baseline**: [Baseline](#baseline): Baseline details.
* **resultsNotInBaseline**: string[][]: Results the are not in baseline.
* **resultsOnlyInBaseline**: string[][]: Results the are in baseline.
* **status**: 'Finding' | 'InternalError' | 'NonFinding' | string: The rule result status.

## BenchmarkReference
### Properties
* **benchmark**: string: The benchmark name.
* **reference**: string: The benchmark reference.

## QueryCheck
### Properties
* **columnNames**: string[]: Column names of expected result.
* **expectedResult**: string[][]: Expected result.
* **query**: string: The rule query.

## Remediation
### Properties
* **automated**: bool: Is remediation automated.
* **description**: string: Remediation description.
* **portalLink**: string: Optional link to remediate in Azure Portal.
* **scripts**: string[]: Remediation script.

## RuleResultsProperties
### Properties
* **results**: string[][]: Expected results in the baseline.

## ScanProperties
### Properties
* **database**: string: The database name.
* **endTime**: string: Scan results are valid until end time (UTC).
* **highSeverityFailedRulesCount**: int: The number of failed rules with high severity.
* **isBaselineApplied**: bool: Baseline created for this database, and has one or more rules.
* **lowSeverityFailedRulesCount**: int: The number of failed rules with low severity.
* **mediumSeverityFailedRulesCount**: int: The number of failed rules with medium severity.
* **server**: string: The server name.
* **sqlVersion**: string: The SQL version.
* **startTime**: string: The scan start time (UTC).
* **state**: 'Failed' | 'FailedToRun' | 'InProgress' | 'Passed' | string: The scan status.
* **totalFailedRulesCount**: int: The number of total failed rules.
* **totalPassedRulesCount**: int: The number of total passed rules.
* **totalRulesCount**: int: The number of total rules assessed.
* **triggerType**: 'OnDemand' | 'Recurring' | string: The scan trigger type.

## ScanResultProperties
### Properties
* **baselineAdjustedResult**: [BaselineAdjustedResult](#baselineadjustedresult): The rule result adjusted with baseline.
* **isTrimmed**: bool: Indicated whether the results specified here are trimmed.
* **queryResults**: string[][]: The results of the query that was run.
* **remediation**: [Remediation](#remediation): Remediation details.
* **ruleId**: string: The rule Id.
* **ruleMetadata**: [VaRule](#varule): vulnerability assessment rule metadata details.
* **status**: 'Finding' | 'InternalError' | 'NonFinding' | string: The rule result status.

## VaRule
### Properties
* **benchmarkReferences**: [BenchmarkReference](#benchmarkreference)[]: The benchmark references.
* **category**: string: The rule category.
* **description**: string: The rule description.
* **queryCheck**: [QueryCheck](#querycheck): The rule query details.
* **rationale**: string: The rule rationale.
* **ruleId**: string: The rule Id.
* **ruleType**: 'BaselineExpected' | 'Binary' | 'NegativeList' | 'PositiveList' | string: The rule type.
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | 'Obsolete' | string: The rule severity.
* **title**: string: The rule title.

