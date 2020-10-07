# Microsoft.Security @ 2019-01-01-preview

## Microsoft.Security/alertsSuppressionRules
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AlertsSuppressionRuleProperties
* **type**: 'Microsoft.Security/alertsSuppressionRules' (ReadOnly, DeployTimeConstant)

## AlertsSuppressionRuleProperties
### Properties
* **alertType**: string (Required)
* **comment**: string
* **expirationDateUtc**: string
* **lastModifiedUtc**: string (ReadOnly)
* **reason**: string (Required)
* **state**: 'Disabled' | 'Enabled' | 'Expired' (Required)
* **suppressionAlertsScope**: SuppressionAlertsScope

## SuppressionAlertsScope
### Properties
* **allOf**: ScopeElement[] (Required)

## ScopeElement
### Properties
* **field**: string

## Microsoft.Security/assessmentMetadata
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SecurityAssessmentMetadataProperties
* **type**: 'Microsoft.Security/assessmentMetadata' (ReadOnly, DeployTimeConstant)

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

## Microsoft.Security/assessments
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SecurityAssessmentProperties
* **type**: 'Microsoft.Security/assessments' (ReadOnly, DeployTimeConstant)

## SecurityAssessmentProperties
### Properties
* **additionalData**: Dictionary<string,String>
* **displayName**: string (ReadOnly)
* **links**: AssessmentLinks
* **resourceDetails**: ResourceDetails (Required)
* **status**: AssessmentStatus (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## AssessmentLinks
### Properties
* **azurePortalUri**: string (ReadOnly)

## ResourceDetails
* **Discriminator**: source
### Base Properties
### Azure
#### Properties
* **id**: string (ReadOnly)
* **source**: 'Azure' (Required)

### OnPremise
#### Properties
* **machineName**: string (Required)
* **source**: 'OnPremise' (Required)
* **sourceComputerId**: string (Required)
* **vmuuid**: string (Required)
* **workspaceId**: string (Required)


## Azure
### Properties
* **id**: string (ReadOnly)
* **source**: 'Azure' (Required)

## OnPremise
### Properties
* **machineName**: string (Required)
* **source**: 'OnPremise' (Required)
* **sourceComputerId**: string (Required)
* **vmuuid**: string (Required)
* **workspaceId**: string (Required)

## AssessmentStatus
### Properties
* **cause**: string
* **code**: 'Healthy' | 'NotApplicable' | 'Unhealthy' (Required)
* **description**: string

## Microsoft.Security/automations
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: AutomationProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Security/automations' (ReadOnly, DeployTimeConstant)

## AutomationProperties
### Properties
* **actions**: AutomationAction[]
* **description**: string
* **isEnabled**: bool
* **scopes**: AutomationScope[]
* **sources**: AutomationSource[]

## AutomationAction
* **Discriminator**: actionType
### Base Properties
### EventHub
#### Properties
* **actionType**: 'EventHub' (Required)
* **connectionString**: string
* **eventHubResourceId**: string
* **sasPolicyName**: string (ReadOnly)

### LogicApp
#### Properties
* **actionType**: 'LogicApp' (Required)
* **logicAppResourceId**: string
* **uri**: string

### Workspace
#### Properties
* **actionType**: 'Workspace' (Required)
* **workspaceResourceId**: string


## EventHub
### Properties
* **actionType**: 'EventHub' (Required)
* **connectionString**: string
* **eventHubResourceId**: string
* **sasPolicyName**: string (ReadOnly)

## LogicApp
### Properties
* **actionType**: 'LogicApp' (Required)
* **logicAppResourceId**: string
* **uri**: string

## Workspace
### Properties
* **actionType**: 'Workspace' (Required)
* **workspaceResourceId**: string

## AutomationScope
### Properties
* **description**: string
* **scopePath**: string

## AutomationSource
### Properties
* **eventSource**: 'Alerts' | 'Assessments' | 'SubAssessments'
* **ruleSets**: AutomationRuleSet[]

## AutomationRuleSet
### Properties
* **rules**: AutomationTriggeringRule[]

## AutomationTriggeringRule
### Properties
* **expectedValue**: string
* **operator**: 'Contains' | 'EndsWith' | 'Equals' | 'GreaterThan' | 'GreaterThanOrEqualTo' | 'LesserThan' | 'LesserThanOrEqualTo' | 'NotEquals' | 'StartsWith'
* **propertyJPath**: string
* **propertyType**: 'Boolean' | 'Integer' | 'Number' | 'String'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

