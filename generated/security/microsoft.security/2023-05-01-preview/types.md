# Microsoft.Security @ 2023-05-01-preview

## Resource Microsoft.Security/healthReports@2023-05-01-preview (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HealthReportProperties](#healthreportproperties) (ReadOnly): Properties of a health report
* **type**: 'Microsoft.Security/healthReports' (ReadOnly, DeployTimeConstant): The resource type

## EnvironmentDetails
### Properties
* **environmentHierarchyId**: string: The hierarchy id of the connector (in case of Azure - the subscription Id, in case of MC - the hierarchyId id)
* **nativeResourceId**: string: The native resource id of the resource (in case of Azure - the resource Id, in case of MC - the native resource id)
* **organizationalHierarchyId**: string: The organizational hierarchy id of the connector (in case of Azure - the subscription Id, in case of MC - the organizational hierarchyId id)
* **subscriptionId**: string: The subscription Id
* **tenantId**: string: The tenant Id

## HealthDataClassification
### Properties
* **component**: string: The component describes the name of the agent/service that scans the issue
* **scenario**: string: The scenario describes the health scenario issue of the component
* **scope**: string: The resource scope of the health report

## HealthReportProperties
### Properties
* **affectedDefendersPlans**: string[]: The affected defenders plans by unhealthy report
* **affectedDefendersSubPlans**: string[]: The affected defenders sub plans by unhealthy report
* **environmentDetails**: [EnvironmentDetails](#environmentdetails): The environment details of the resource
* **healthDataClassification**: [HealthDataClassification](#healthdataclassification): The classification of the health report
* **issues**: [Issue](#issue)[]: A collection of the issues in the report
* **reportAdditionalData**: [HealthReportPropertiesReportAdditionalData](#healthreportpropertiesreportadditionaldata) (ReadOnly): Additional data for the given health report, this field can include more details on the resource and the health scenario.
* **resourceDetails**: [ResourceDetails](#resourcedetails): The resource details of the health report
* **status**: [Status](#status): The status of the health report

## HealthReportPropertiesReportAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Issue
### Properties
* **issueAdditionalData**: [IssueAdditionalData](#issueadditionaldata): Additional data for the given issue. The additional data depends on the issue type
* **issueDescription**: string: The issue description
* **issueKey**: string (Required): The unique issue key
* **issueName**: string: The issue name
* **remediationScript**: string: The remediation script to solve this issue
* **remediationSteps**: string: Human readable description of what you should do to mitigate this health issue
* **securityValues**: string[]: The affected security values that MDC offers that will be affected by the issue, for example: recommendations, alerts, etc

## IssueAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceDetails
### Properties
* **connectorId**: string (ReadOnly): The id of the connector
* **id**: string (ReadOnly): The azure id of the resource
* **source**: 'Aws' | 'Azure' | 'Gcp' | string: The status of the health report

## Status
### Properties
* **code**: 'Healthy' | 'NotApplicable' | 'NotHealthy' | string: The status of the health report
* **firstEvaluationDate**: string (ReadOnly): The date of when the resource of the health report was scanned in the first time
* **lastScannedDate**: string (ReadOnly): The date of when the resource was scanned in the last time
* **reason**: string (ReadOnly): The reason of the given status
* **statusChangeDate**: string (ReadOnly): The date of when the status of the health report was changed in the last time

