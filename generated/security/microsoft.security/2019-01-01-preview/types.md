# Microsoft.Security @ 2019-01-01-preview

## Resource Microsoft.Security/alertsSuppressionRules@2019-01-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AlertsSuppressionRuleProperties](#alertssuppressionruleproperties): describes AlertsSuppressionRule properties
* **type**: 'Microsoft.Security/alertsSuppressionRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/assessmentMetadata@2019-01-01-preview
* **Valid Scope(s)**: Tenant (ReadOnly), Subscription
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityAssessmentMetadataProperties](#securityassessmentmetadataproperties): Describes properties of an assessment metadata.
* **type**: 'Microsoft.Security/assessmentMetadata' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/assessments@2019-01-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityAssessmentProperties](#securityassessmentproperties): Describes properties of an assessment.
* **type**: 'Microsoft.Security/assessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/assessments/subAssessments@2019-01-01-preview (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecuritySubAssessmentProperties](#securitysubassessmentproperties) (ReadOnly): Describes properties of an sub-assessment.
* **type**: 'Microsoft.Security/assessments/subAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/automations@2019-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Entity tag is used for comparing two or more entities from the same requested resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of the resource
* **location**: string: Location where the resource is stored
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AutomationProperties](#automationproperties): Security automation data
* **tags**: [Tags](#tags): A list of key value pairs that describe the resource.
* **type**: 'Microsoft.Security/automations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/regulatoryComplianceStandards@2019-01-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RegulatoryComplianceStandardProperties](#regulatorycompliancestandardproperties) (ReadOnly): Regulatory compliance standard data
* **type**: 'Microsoft.Security/regulatoryComplianceStandards' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/regulatoryComplianceStandards/regulatoryComplianceControls@2019-01-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RegulatoryComplianceControlProperties](#regulatorycompliancecontrolproperties) (ReadOnly): Regulatory compliance control data
* **type**: 'Microsoft.Security/regulatoryComplianceStandards/regulatoryComplianceControls' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/regulatoryComplianceStandards/regulatoryComplianceControls/regulatoryComplianceAssessments@2019-01-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RegulatoryComplianceAssessmentProperties](#regulatorycomplianceassessmentproperties) (ReadOnly): Regulatory compliance assessment data
* **type**: 'Microsoft.Security/regulatoryComplianceStandards/regulatoryComplianceControls/regulatoryComplianceAssessments' (ReadOnly, DeployTimeConstant): The resource type

## AdditionalData
* **Discriminator**: assessedResourceType

### Base Properties

### ContainerRegistryVulnerabilityProperties
#### Properties
* **assessedResourceType**: 'ContainerRegistryVulnerability' (Required): Sub-assessment resource type
* **cve**: [CVE](#cve)[] (ReadOnly): List of CVEs
* **cvss**: [ContainerRegistryVulnerabilityPropertiesCvss](#containerregistryvulnerabilitypropertiescvss) (ReadOnly): Dictionary from cvss version to cvss details object
* **imageDigest**: string (ReadOnly): Digest of the vulnerable image
* **patchable**: bool (ReadOnly): Indicates whether a patch is available or not
* **publishedTime**: string (ReadOnly): Published time
* **repositoryName**: string (ReadOnly): Name of the repository which the vulnerable image belongs to
* **type**: string (ReadOnly): Vulnerability Type. e.g: Vulnerability, Potential Vulnerability, Information Gathered, Vulnerability
* **vendorReferences**: [VendorReference](#vendorreference)[] (ReadOnly)

### ServerVulnerabilityProperties
#### Properties
* **assessedResourceType**: 'ServerVulnerabilityAssessment' (Required): Sub-assessment resource type
* **cve**: [CVE](#cve)[] (ReadOnly): List of CVEs
* **cvss**: [ServerVulnerabilityPropertiesCvss](#servervulnerabilitypropertiescvss) (ReadOnly): Dictionary from cvss version to cvss details object
* **patchable**: bool (ReadOnly): Indicates whether a patch is available or not
* **publishedTime**: string (ReadOnly): Published time
* **threat**: string (ReadOnly): Threat name
* **type**: string (ReadOnly): Vulnerability Type. e.g: Vulnerability, Potential Vulnerability, Information Gathered
* **vendorReferences**: [VendorReference](#vendorreference)[] (ReadOnly)

### SqlServerVulnerabilityProperties
#### Properties
* **assessedResourceType**: 'SqlServerVulnerability' (Required): Sub-assessment resource type
* **query**: string (ReadOnly): The T-SQL query that runs on your SQL database to perform the particular check
* **type**: string (ReadOnly): The resource type the sub assessment refers to in its resource details


## AlertsSuppressionRuleProperties
### Properties
* **alertType**: string (Required): Type of the alert to automatically suppress. For all alert types, use '*'
* **comment**: string: Any comment regarding the rule
* **expirationDateUtc**: string: Expiration date of the rule, if value is not provided or provided as null this field will default to the maximum allowed expiration date.
* **lastModifiedUtc**: string (ReadOnly): The last time this rule was modified
* **reason**: string (Required): The reason for dismissing the alert
* **state**: 'Disabled' | 'Enabled' | 'Expired' (Required): Possible states of the rule
* **suppressionAlertsScope**: [SuppressionAlertsScope](#suppressionalertsscope): The suppression conditions

## AssessmentLinks
### Properties
* **azurePortalUri**: string (ReadOnly): Link to assessment in Azure Portal

## AssessmentStatus
### Properties
* **cause**: string: Programmatic code for the cause of the assessment status
* **code**: 'Healthy' | 'NotApplicable' | 'Unhealthy' | string (Required): Programmatic code for the status of the assessment
* **description**: string: Human readable description of the assessment status

## AutomationAction
* **Discriminator**: actionType

### Base Properties

### AutomationActionEventHub
#### Properties
* **actionType**: 'EventHub' (Required): The type of the action that will be triggered by the Automation
* **connectionString**: string: The target Event Hub connection string (it will not be included in any response).
* **eventHubResourceId**: string: The target Event Hub Azure Resource ID.
* **sasPolicyName**: string (ReadOnly): The target Event Hub SAS policy name.

### AutomationActionLogicApp
#### Properties
* **actionType**: 'LogicApp' (Required): The type of the action that will be triggered by the Automation
* **logicAppResourceId**: string: The triggered Logic App Azure Resource ID. This can also reside on other subscriptions, given that you have permissions to trigger the Logic App
* **uri**: string: The Logic App trigger URI endpoint (it will not be included in any response).

### AutomationActionWorkspace
#### Properties
* **actionType**: 'Workspace' (Required): The type of the action that will be triggered by the Automation
* **workspaceResourceId**: string: The fully qualified Log Analytics Workspace Azure Resource ID.


## AutomationProperties
### Properties
* **actions**: [AutomationAction](#automationaction)[]: A collection of the actions which are triggered if all the configured rules evaluations, within at least one rule set, are true.
* **description**: string: The security automation description.
* **isEnabled**: bool: Indicates whether the security automation is enabled.
* **scopes**: [AutomationScope](#automationscope)[]: A collection of scopes on which the security automations logic is applied. Supported scopes are the subscription itself or a resource group under that subscription. The automation will only apply on defined scopes.
* **sources**: [AutomationSource](#automationsource)[]: A collection of the source event types which evaluate the security automation set of rules.

## AutomationRuleSet
### Properties
* **rules**: [AutomationTriggeringRule](#automationtriggeringrule)[]

## AutomationScope
### Properties
* **description**: string: The resources scope description.
* **scopePath**: string: The resources scope path. Can be the subscription on which the automation is defined on or a resource group under that subscription (fully qualified Azure resource IDs).

## AutomationSource
### Properties
* **eventSource**: 'Alerts' | 'Assessments' | 'AssessmentsSnapshot' | 'RegulatoryComplianceAssessment' | 'RegulatoryComplianceAssessmentSnapshot' | 'SecureScoreControls' | 'SecureScoreControlsSnapshot' | 'SecureScores' | 'SecureScoresSnapshot' | 'SubAssessments' | 'SubAssessmentsSnapshot' | string: A valid event source type.
* **ruleSets**: [AutomationRuleSet](#automationruleset)[]: A set of rules which evaluate upon event interception. A logical disjunction is applied between defined rule sets (logical 'or').

## AutomationTriggeringRule
### Properties
* **expectedValue**: string: The expected value.
* **operator**: 'Contains' | 'EndsWith' | 'Equals' | 'GreaterThan' | 'GreaterThanOrEqualTo' | 'LesserThan' | 'LesserThanOrEqualTo' | 'NotEquals' | 'StartsWith' | string: A valid comparer operator to use. A case-insensitive comparison will be applied for String PropertyType.
* **propertyJPath**: string: The JPath of the entity model property that should be checked.
* **propertyType**: 'Boolean' | 'Integer' | 'Number' | 'String' | string: The data type of the compared operands (string, integer, floating point number or a boolean [true/false]]

## ContainerRegistryVulnerabilityPropertiesCvss
### Properties
### Additional Properties
* **Additional Properties Type**: [Cvss](#cvss)

## CVE
### Properties
* **link**: string (ReadOnly): Link url
* **title**: string (ReadOnly): CVE title

## Cvss
### Properties
* **base**: int (ReadOnly): CVSS base

## RegulatoryComplianceAssessmentProperties
### Properties
* **assessmentDetailsLink**: string (ReadOnly): Link to more detailed assessment results data. The response type will be according to the assessmentType field
* **assessmentType**: string (ReadOnly): The expected type of assessment contained in the AssessmentDetailsLink
* **description**: string (ReadOnly): The description of the regulatory compliance assessment
* **failedResources**: int (ReadOnly): The given assessment's related resources count with failed state.
* **passedResources**: int (ReadOnly): The given assessment's related resources count with passed state.
* **skippedResources**: int (ReadOnly): The given assessment's related resources count with skipped state.
* **state**: 'Failed' | 'Passed' | 'Skipped' | 'Unsupported' | string: Aggregative state based on the assessment's scanned resources states
* **unsupportedResources**: int (ReadOnly): The given assessment's related resources count with unsupported state.

## RegulatoryComplianceControlProperties
### Properties
* **description**: string (ReadOnly): The description of the regulatory compliance control
* **failedAssessments**: int (ReadOnly): The number of supported regulatory compliance assessments of the given control with a failed state
* **passedAssessments**: int (ReadOnly): The number of supported regulatory compliance assessments of the given control with a passed state
* **skippedAssessments**: int (ReadOnly): The number of supported regulatory compliance assessments of the given control with a skipped state
* **state**: 'Failed' | 'Passed' | 'Skipped' | 'Unsupported' | string: Aggregative state based on the control's supported assessments states

## RegulatoryComplianceStandardProperties
### Properties
* **failedControls**: int (ReadOnly): The number of supported regulatory compliance controls of the given standard with a failed state
* **passedControls**: int (ReadOnly): The number of supported regulatory compliance controls of the given standard with a passed state
* **skippedControls**: int (ReadOnly): The number of supported regulatory compliance controls of the given standard with a skipped state
* **state**: 'Failed' | 'Passed' | 'Skipped' | 'Unsupported' | string: Aggregative state based on the standard's supported controls states
* **unsupportedControls**: int (ReadOnly): The number of regulatory compliance controls of the given standard which are unsupported by automated assessments

## ResourceDetails
* **Discriminator**: source

### Base Properties

### AzureResourceDetails
#### Properties
* **id**: string (ReadOnly): Azure resource Id of the assessed resource
* **source**: 'Azure' (Required): The platform where the assessed resource resides

### OnPremiseSqlResourceDetails
#### Properties
* **databaseName**: string (Required): The Sql database name installed on the machine
* **machineName**: string (Required): The name of the machine
* **serverName**: string (Required): The Sql server name installed on the machine
* **source**: 'OnPremiseSql' (Required): The platform where the assessed resource resides
* **sourceComputerId**: string (Required): The oms agent Id installed on the machine
* **vmuuid**: string (Required): The unique Id of the machine
* **workspaceId**: string (Required): Azure resource Id of the workspace the machine is attached to


## ScopeElement
### Properties
* **field**: string: The alert entity type to suppress by.
### Additional Properties
* **Additional Properties Type**: any

## SecurityAssessmentMetadataProperties
### Properties
* **assessmentType**: 'BuiltIn' | 'CustomPolicy' | 'CustomerManaged' | string (Required): BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition
* **categories**: 'Compute' | 'Data' | 'IdentityAndAccess' | 'IoT' | 'Networking' | string[]
* **description**: string: Human readable description of the assessment
* **displayName**: string (Required): User friendly display name of the assessment
* **implementationEffort**: 'High' | 'Low' | 'Moderate' | string: The implementation effort required to remediate this assessment
* **policyDefinitionId**: string (ReadOnly): Azure resource ID of the policy definition that turns this assessment calculation on
* **preview**: bool: True if this assessment is in preview release status
* **remediationDescription**: string: Human readable description of what you should do to mitigate this security issue
* **severity**: 'High' | 'Low' | 'Medium' | string (Required): The severity level of the assessment
* **threats**: 'accountBreach' | 'dataExfiltration' | 'dataSpillage' | 'denialOfService' | 'elevationOfPrivilege' | 'maliciousInsider' | 'missingCoverage' | 'threatResistance' | string[]
* **userImpact**: 'High' | 'Low' | 'Moderate' | string: The user impact of the assessment

## SecurityAssessmentProperties
### Properties
* **additionalData**: [SecurityAssessmentPropertiesAdditionalData](#securityassessmentpropertiesadditionaldata): Additional data regarding the assessment
* **displayName**: string (ReadOnly): User friendly display name of the assessment
* **links**: [AssessmentLinks](#assessmentlinks) (ReadOnly): Links relevant to the assessment
* **resourceDetails**: [ResourceDetails](#resourcedetails) (Required): Details of the resource that was assessed
* **status**: [AssessmentStatus](#assessmentstatus) (Required): The result of the assessment

## SecurityAssessmentPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SecuritySubAssessmentProperties
### Properties
* **additionalData**: [AdditionalData](#additionaldata): Details of the sub-assessment
* **category**: string (ReadOnly): Category of the sub-assessment
* **description**: string (ReadOnly): Human readable description of the assessment status
* **displayName**: string (ReadOnly): User friendly display name of the sub-assessment
* **id**: string (ReadOnly): Vulnerability ID
* **impact**: string (ReadOnly): Description of the impact of this sub-assessment
* **remediation**: string (ReadOnly): Information on how to remediate this sub-assessment
* **resourceDetails**: [ResourceDetails](#resourcedetails): Details of the resource that was assessed
* **status**: [SubAssessmentStatus](#subassessmentstatus): Status of the sub-assessment
* **timeGenerated**: string (ReadOnly): The date and time the sub-assessment was generated

## ServerVulnerabilityPropertiesCvss
### Properties
### Additional Properties
* **Additional Properties Type**: [Cvss](#cvss)

## SubAssessmentStatus
### Properties
* **cause**: string (ReadOnly): Programmatic code for the cause of the assessment status
* **code**: 'Healthy' | 'NotApplicable' | 'Unhealthy' | string (ReadOnly): Programmatic code for the status of the assessment
* **description**: string (ReadOnly): Human readable description of the assessment status
* **severity**: 'High' | 'Low' | 'Medium' | string (ReadOnly): The sub-assessment severity level

## SuppressionAlertsScope
### Properties
* **allOf**: [ScopeElement](#scopeelement)[] (Required): All the conditions inside need to be true in order to suppress the alert

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VendorReference
### Properties
* **link**: string (ReadOnly): Link url
* **title**: string (ReadOnly): Link title

