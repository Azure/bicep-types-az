# Microsoft.Security @ 2026-04-01-preview

## Resource Microsoft.Security/sqlVulnerabilityAssessments@2026-04-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2026-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [SqlVulnerabilityAssessmentSettingsProperties](#sqlvulnerabilityassessmentsettingsproperties): SQL Vulnerability Assessment settings properties.
* **type**: 'Microsoft.Security/sqlVulnerabilityAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/sqlVulnerabilityAssessments/baselineRules@2026-04-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2026-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **latestScan**: bool (WriteOnly): Take results from latest scan.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RuleResultsProperties](#ruleresultsproperties) (ReadOnly): Rule results properties.
* **results**: string[][] (WriteOnly): Expected results to be inserted into the baseline.
Leave this field empty if latestScan == true.
* **type**: 'Microsoft.Security/sqlVulnerabilityAssessments/baselineRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/sqlVulnerabilityAssessments/scans@2026-04-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScanPropertiesV2](#scanpropertiesv2) (ReadOnly): A vulnerability assessment scan record properties.
* **type**: 'Microsoft.Security/sqlVulnerabilityAssessments/scans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/sqlVulnerabilityAssessments/scans/scanResults@2026-04-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
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
* **resultsNotInBaseline**: string[][]: Results that are not in the baseline.
* **resultsOnlyInBaseline**: string[][]: Results that are in the baseline.
* **status**: 'Finding' | 'InternalError' | 'NonFinding' | 'NotApplicable' | string: The rule result status.

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
* **latestScan**: bool: Take results from latest scan.
* **results**: string[][]: Expected results in the baseline.

## ScanPropertiesV2
### Properties
* **database**: string: The database name.
* **endTime**: string: Scan results are valid until end time (UTC).
* **highSeverityFailedRulesCount**: int: The number of failed rules with high severity.
* **isBaselineApplied**: bool: Baseline created for this database, and has one or more rules.
* **lastScanTime**: string: Last scan time.
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
* **isTrimmed**: bool: Indicates whether the results specified here are trimmed.
* **queryResults**: string[][]: The results of the query that was run.
* **remediation**: [Remediation](#remediation): Remediation details.
* **ruleId**: string: The rule Id.
* **ruleMetadata**: [VaRule](#varule): vulnerability assessment rule metadata details.
* **status**: 'Finding' | 'InternalError' | 'NonFinding' | 'NotApplicable' | string: The rule result status.

## SqlVulnerabilityAssessmentSettingsProperties
### Properties
* **creationTime**: string (ReadOnly): The creation time of the SQL Vulnerability Assessment settings.
* **state**: 'Disabled' | 'Enabled' | string: Represents the state of a SQL Vulnerability Assessment.

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

