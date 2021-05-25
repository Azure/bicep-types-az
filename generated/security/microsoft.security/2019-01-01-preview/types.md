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
* **Valid Scope(s)**: Subscription
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

## Resource Microsoft.Security/automations@2019-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Entity tag is used for comparing two or more entities from the same requested resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of the resource
* **location**: string: Location where the resource is stored
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AutomationProperties](#automationproperties): A set of properties that defines the behavior of the automation configuration. To learn more about the supported security events data models schemas - please visit https://aka.ms/ASCAutomationSchemas.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): A list of key value pairs that describe the resource.
* **type**: 'Microsoft.Security/automations' (ReadOnly, DeployTimeConstant): The resource type

## AlertsSuppressionRuleProperties
### Properties
* **alertType**: string (Required): Type of the alert to automatically suppress. For all alert types, use '*'
* **comment**: string: Any comment regarding the rule
* **expirationDateUtc**: string: Expiration date of the rule, if value is not provided or provided as null this field will default to the maximum allowed expiration date.
* **lastModifiedUtc**: string (ReadOnly): The last time this rule was modified
* **reason**: string (Required): The reason for dismissing the alert
* **state**: 'Disabled' | 'Enabled' | 'Expired' (Required): Possible states of the rule.
* **suppressionAlertsScope**: [SuppressionAlertsScope](#suppressionalertsscope)

## SuppressionAlertsScope
### Properties
* **allOf**: [ScopeElement](#scopeelement)[] (Required): All the conditions inside need to be true in order to suppress the alert

## ScopeElement
### Properties
* **field**: string: The alert entity type to suppress by.
### Additional Properties
* **Additional Properties Type**: any

## SecurityAssessmentMetadataProperties
### Properties
* **assessmentType**: 'BuiltIn' | 'CustomerManaged' | 'CustomPolicy' (Required): BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition.
* **category**: 'Compute' | 'Data' | 'IdentityAndAccess' | 'IoT' | 'Networking'[]
* **description**: string: Human readable description of the assessment
* **displayName**: string (Required): User friendly display name of the assessment
* **implementationEffort**: 'High' | 'Low' | 'Moderate': The implementation effort required to remediate this assessment.
* **policyDefinitionId**: string (ReadOnly): Azure resource ID of the policy definition that turns this assessment calculation on
* **preview**: bool: True if this assessment is in preview release status
* **remediationDescription**: string: Human readable description of what you should do to mitigate this security issue
* **severity**: 'High' | 'Low' | 'Medium' (Required): The severity level of the assessment.
* **threats**: 'accountBreach' | 'dataExfiltration' | 'dataSpillage' | 'denialOfService' | 'elevationOfPrivilege' | 'maliciousInsider' | 'missingCoverage' | 'threatResistance'[]
* **userImpact**: 'High' | 'Low' | 'Moderate': The user impact of the assessment.

## SecurityAssessmentProperties
### Properties
* **additionalData**: [Dictionary<string,String>](#dictionarystringstring): Additional data regarding the assessment
* **displayName**: string (ReadOnly): User friendly display name of the assessment
* **links**: [AssessmentLinks](#assessmentlinks): Links relevant to the assessment
* **resourceDetails**: [ResourceDetails](#resourcedetails) (Required): Details of the resource that was assessed
* **status**: [AssessmentStatus](#assessmentstatus) (Required): The result of the assessment

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AssessmentLinks
### Properties
* **azurePortalUri**: string (ReadOnly): Link to assessment in Azure Portal

## ResourceDetails
* **Discriminator**: source
### Base Properties
### Azure
#### Properties
* **id**: string (ReadOnly): Azure resource Id of the assessed resource
* **source**: 'Azure' (Required): Details of the Azure resource that was assessed

### OnPremise
#### Properties
* **machineName**: string (Required): The name of the machine
* **source**: 'OnPremise' (Required): Details of the On Premise resource that was assessed
* **sourceComputerId**: string (Required): The oms agent Id installed on the machine
* **vmuuid**: string (Required): The unique Id of the machine
* **workspaceId**: string (Required): Azure resource Id of the workspace the machine is attached to


## Azure
### Properties
* **id**: string (ReadOnly): Azure resource Id of the assessed resource
* **source**: 'Azure' (Required): Details of the Azure resource that was assessed

## OnPremise
### Properties
* **machineName**: string (Required): The name of the machine
* **source**: 'OnPremise' (Required): Details of the On Premise resource that was assessed
* **sourceComputerId**: string (Required): The oms agent Id installed on the machine
* **vmuuid**: string (Required): The unique Id of the machine
* **workspaceId**: string (Required): Azure resource Id of the workspace the machine is attached to

## AssessmentStatus
### Properties
* **cause**: string: Programmatic code for the cause of the assessment status
* **code**: 'Healthy' | 'NotApplicable' | 'Unhealthy' (Required): Programmatic code for the status of the assessment.
* **description**: string: Human readable description of the assessment status

## AutomationProperties
### Properties
* **actions**: [AutomationAction](#automationaction)[]: A collection of the actions which are triggered if all the configured rules evaluations, within at least one rule set, are true.
* **description**: string: The security automation description.
* **isEnabled**: bool: Indicates whether the security automation is enabled.
* **scopes**: [AutomationScope](#automationscope)[]: A collection of scopes on which the security automations logic is applied. Supported scopes are the subscription itself or a resource group under that subscription. The automation will only apply on defined scopes.
* **sources**: [AutomationSource](#automationsource)[]: A collection of the source event types which evaluate the security automation set of rules.

## AutomationAction
* **Discriminator**: actionType
### Base Properties
### EventHub
#### Properties
* **actionType**: 'EventHub' (Required): The target Event Hub to which event data will be exported. To learn more about Security Center continuous export capabilities, visit https://aka.ms/ASCExportLearnMore
* **connectionString**: string: The target Event Hub connection string (it will not be included in any response).
* **eventHubResourceId**: string: The target Event Hub Azure Resource ID.
* **sasPolicyName**: string (ReadOnly): The target Event Hub SAS policy name.

### LogicApp
#### Properties
* **actionType**: 'LogicApp' (Required): The logic app action that should be triggered. To learn more about Security Center's Workflow Automation capabilities, visit https://aka.ms/ASCWorkflowAutomationLearnMore
* **logicAppResourceId**: string: The triggered Logic App Azure Resource ID. This can also reside on other subscriptions, given that you have permissions to trigger the Logic App
* **uri**: string: The Logic App trigger URI endpoint (it will not be included in any response).

### Workspace
#### Properties
* **actionType**: 'Workspace' (Required): The Log Analytics Workspace to which event data will be exported. Security alerts data will reside in the 'SecurityAlert' table and the assessments data will reside in the 'SecurityRecommendation' table (under the 'Security'/'SecurityCenterFree' solutions). Note that in order to view the data in the workspace, the Security Center Log Analytics free/standard solution needs to be enabled on that workspace. To learn more about Security Center continuous export capabilities, visit https://aka.ms/ASCExportLearnMore
* **workspaceResourceId**: string: The fully qualified Log Analytics Workspace Azure Resource ID.


## EventHub
### Properties
* **actionType**: 'EventHub' (Required): The target Event Hub to which event data will be exported. To learn more about Security Center continuous export capabilities, visit https://aka.ms/ASCExportLearnMore
* **connectionString**: string: The target Event Hub connection string (it will not be included in any response).
* **eventHubResourceId**: string: The target Event Hub Azure Resource ID.
* **sasPolicyName**: string (ReadOnly): The target Event Hub SAS policy name.

## LogicApp
### Properties
* **actionType**: 'LogicApp' (Required): The logic app action that should be triggered. To learn more about Security Center's Workflow Automation capabilities, visit https://aka.ms/ASCWorkflowAutomationLearnMore
* **logicAppResourceId**: string: The triggered Logic App Azure Resource ID. This can also reside on other subscriptions, given that you have permissions to trigger the Logic App
* **uri**: string: The Logic App trigger URI endpoint (it will not be included in any response).

## Workspace
### Properties
* **actionType**: 'Workspace' (Required): The Log Analytics Workspace to which event data will be exported. Security alerts data will reside in the 'SecurityAlert' table and the assessments data will reside in the 'SecurityRecommendation' table (under the 'Security'/'SecurityCenterFree' solutions). Note that in order to view the data in the workspace, the Security Center Log Analytics free/standard solution needs to be enabled on that workspace. To learn more about Security Center continuous export capabilities, visit https://aka.ms/ASCExportLearnMore
* **workspaceResourceId**: string: The fully qualified Log Analytics Workspace Azure Resource ID.

## AutomationScope
### Properties
* **description**: string: The resources scope description.
* **scopePath**: string: The resources scope path. Can be the subscription on which the automation is defined on or a resource group under that subscription (fully qualified Azure resource IDs).

## AutomationSource
### Properties
* **eventSource**: 'Alerts' | 'Assessments' | 'RegulatoryComplianceAssessment' | 'RegulatoryComplianceAssessmentSnapshot' | 'SecureScoreControls' | 'SecureScoreControlsSnapshot' | 'SecureScores' | 'SecureScoresSnapshot' | 'SubAssessments': A valid event source type.
* **ruleSets**: [AutomationRuleSet](#automationruleset)[]: A set of rules which evaluate upon event interception. A logical disjunction is applied between defined rule sets (logical 'or').

## AutomationRuleSet
### Properties
* **rules**: [AutomationTriggeringRule](#automationtriggeringrule)[]

## AutomationTriggeringRule
### Properties
* **expectedValue**: string: The expected value.
* **operator**: 'Contains' | 'EndsWith' | 'Equals' | 'GreaterThan' | 'GreaterThanOrEqualTo' | 'LesserThan' | 'LesserThanOrEqualTo' | 'NotEquals' | 'StartsWith': A valid comparer operator to use. A case-insensitive comparison will be applied for String PropertyType.
* **propertyJPath**: string: The JPath of the entity model property that should be checked.
* **propertyType**: 'Boolean' | 'Integer' | 'Number' | 'String': The data type of the compared operands (string, integer, floating point number or a boolean [true/false]].

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

