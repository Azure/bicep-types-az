# Microsoft.Security @ 2021-07-01-preview

## Resource Microsoft.Security/customAssessmentAutomations@2021-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomAssessmentAutomationProperties](#customassessmentautomationproperties): describes the Custom Assessment Automation properties
* **type**: 'Microsoft.Security/customAssessmentAutomations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/customEntityStoreAssignments@2021-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomEntityStoreAssignmentRequestProperties](#customentitystoreassignmentrequestproperties): describes properties of custom entity store assignment request
* **type**: 'Microsoft.Security/customEntityStoreAssignments' (ReadOnly, DeployTimeConstant): The resource type

## CustomAssessmentAutomationProperties
### Properties
* **compressedQuery**: string: GZip encoded KQL query representing the assessment automation results required.
* **description**: string: The description to relate to the assessments generated by this assessment automation.
* **implementationEffort**: 'High' | 'Low' | 'Moderate': The implementation effort to relate to the assessments generated by this assessment automation.
* **remediationDescription**: string: The remediation description to relate to the assessments generated by this assessment automation.
* **severity**: 'High' | 'Low' | 'Medium': The severity to relate to the assessments generated by this assessment automation.
* **supportedCloud**: 'AWS': Relevant cloud for the custom assessment automation.
* **userImpact**: 'High' | 'Low' | 'Moderate': The user impact to relate to the assessments generated by this assessment automation.

## CustomEntityStoreAssignmentRequestProperties
### Properties
* **entityStoreDatabaseLink**: string (ReadOnly): The link to entity store database.
* **principal**: string: The principal assigned with entity store. If not provided, will use caller principal. Format of principal is: [AAD type]=[PrincipalObjectId];[TenantId]
