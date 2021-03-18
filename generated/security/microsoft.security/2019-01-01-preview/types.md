# Microsoft.Security @ 2019-01-01-preview

## Resource Microsoft.Security/alertsSuppressionRules@2019-01-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AlertsSuppressionRuleProperties](#alertssuppressionruleproperties)
* **type**: 'Microsoft.Security/alertsSuppressionRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Security/assessmentMetadata@2019-01-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SecurityAssessmentMetadataProperties](#securityassessmentmetadataproperties)
* **type**: 'Microsoft.Security/assessmentMetadata' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Security/assessments@2019-01-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SecurityAssessmentProperties](#securityassessmentproperties)
* **type**: 'Microsoft.Security/assessments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Security/automations@2019-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AutomationProperties](#automationproperties)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.Security/automations' (ReadOnly, DeployTimeConstant)

## AlertsSuppressionRuleProperties
### Properties
* **alertType**: string (Required)
* **comment**: string
* **expirationDateUtc**: string
* **lastModifiedUtc**: string (ReadOnly)
* **reason**: string (Required)
* **state**: 'Disabled' | 'Enabled' | 'Expired' (Required)
* **suppressionAlertsScope**: [SuppressionAlertsScope](#suppressionalertsscope)

## SuppressionAlertsScope
### Properties
* **allOf**: [ScopeElement](#scopeelement)[] (Required)

## ScopeElement
### Properties
* **field**: string

## SecurityAssessmentMetadataProperties
### Properties
* **assessmentType**: 'BuiltIn' | 'CustomPolicy' | 'CustomerManaged' (Required)
* **category**: 'Compute' | 'Data' | 'IdentityAndAccess' | 'IoT' | 'Networking'[]
* **description**: string
* **displayName**: string (Required)
* **implementationEffort**: 'High' | 'Low' | 'Moderate'
* **policyDefinitionId**: string (ReadOnly)
* **preview**: bool
* **remediationDescription**: string
* **severity**: 'High' | 'Low' | 'Medium' (Required)
* **threats**: 'accountBreach' | 'dataExfiltration' | 'dataSpillage' | 'denialOfService' | 'elevationOfPrivilege' | 'maliciousInsider' | 'missingCoverage' | 'threatResistance'[]
* **userImpact**: 'High' | 'Low' | 'Moderate'

## SecurityAssessmentProperties
### Properties
* **additionalData**: [SecurityAssessmentPropertiesAdditionalData](#securityassessmentpropertiesadditionaldata)
* **displayName**: string (ReadOnly)
* **links**: [AssessmentLinks](#assessmentlinks) (ReadOnly)
* **resourceDetails**: [ResourceDetails](#resourcedetails) (Required)
* **status**: [AssessmentStatus](#assessmentstatus) (Required)

## SecurityAssessmentPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AssessmentLinks
### Properties
* **azurePortalUri**: string (ReadOnly)

## ResourceDetails
* **Discriminator**: source

### Base Properties
### AzureResourceDetails
#### Properties
* **id**: string (ReadOnly)
* **source**: 'Azure' (Required)

### OnPremiseSqlResourceDetails
#### Properties
* **databaseName**: string (Required)
* **serverName**: string (Required)
* **source**: 'OnPremiseSql' (Required)


## AzureResourceDetails
### Properties
* **id**: string (ReadOnly)
* **source**: 'Azure' (Required)

## OnPremiseSqlResourceDetails
### Properties
* **databaseName**: string (Required)
* **serverName**: string (Required)
* **source**: 'OnPremiseSql' (Required)

## AssessmentStatus
### Properties
* **cause**: string
* **code**: 'Healthy' | 'NotApplicable' | 'Unhealthy' (Required)
* **description**: string

## AutomationProperties
### Properties
* **actions**: [AutomationAction](#automationaction)[]
* **description**: string
* **isEnabled**: bool
* **scopes**: [AutomationScope](#automationscope)[]
* **sources**: [AutomationSource](#automationsource)[]

## AutomationAction
* **Discriminator**: actionType

### Base Properties
### AutomationActionEventHub
#### Properties
* **actionType**: 'EventHub' (Required)
* **connectionString**: string
* **eventHubResourceId**: string
* **sasPolicyName**: string (ReadOnly)

### AutomationActionLogicApp
#### Properties
* **actionType**: 'LogicApp' (Required)
* **logicAppResourceId**: string
* **uri**: string

### AutomationActionWorkspace
#### Properties
* **actionType**: 'Workspace' (Required)
* **workspaceResourceId**: string


## AutomationActionEventHub
### Properties
* **actionType**: 'EventHub' (Required)
* **connectionString**: string
* **eventHubResourceId**: string
* **sasPolicyName**: string (ReadOnly)

## AutomationActionLogicApp
### Properties
* **actionType**: 'LogicApp' (Required)
* **logicAppResourceId**: string
* **uri**: string

## AutomationActionWorkspace
### Properties
* **actionType**: 'Workspace' (Required)
* **workspaceResourceId**: string

## AutomationScope
### Properties
* **description**: string
* **scopePath**: string

## AutomationSource
### Properties
* **eventSource**: 'Alerts' | 'Assessments' | 'RegulatoryComplianceAssessment' | 'RegulatoryComplianceAssessmentSnapshot' | 'SecureScoreControls' | 'SecureScoreControlsSnapshot' | 'SecureScores' | 'SecureScoresSnapshot' | 'SubAssessments'
* **ruleSets**: [AutomationRuleSet](#automationruleset)[]

## AutomationRuleSet
### Properties
* **rules**: [AutomationTriggeringRule](#automationtriggeringrule)[]

## AutomationTriggeringRule
### Properties
* **expectedValue**: string
* **operator**: 'Contains' | 'EndsWith' | 'Equals' | 'GreaterThan' | 'GreaterThanOrEqualTo' | 'LesserThan' | 'LesserThanOrEqualTo' | 'NotEquals' | 'StartsWith'
* **propertyJPath**: string
* **propertyType**: 'Boolean' | 'Integer' | 'Number' | 'String'

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

