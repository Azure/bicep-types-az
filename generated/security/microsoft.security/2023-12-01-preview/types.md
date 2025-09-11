# Microsoft.Security @ 2023-12-01-preview

## Resource Microsoft.Security/automations@2023-12-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Entity tag is used for comparing two or more entities from the same requested resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of the resource
* **location**: string: Location where the resource is stored
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AutomationProperties](#automationproperties): Security automation data
* **tags**: [Tags](#tags): A list of key value pairs that describe the resource.
* **type**: 'Microsoft.Security/automations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/securityContacts@2023-12-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityContactProperties](#securitycontactproperties): Security contact data
* **type**: 'Microsoft.Security/securityContacts' (ReadOnly, DeployTimeConstant): The resource type

## AutomationAction
* **Discriminator**: actionType

### Base Properties

### AutomationActionEventHub
#### Properties
* **actionType**: 'EventHub' (Required): The type of the action that will be triggered by the Automation
* **connectionString**: string: The target Event Hub connection string (it will not be included in any response).
* **eventHubResourceId**: string: The target Event Hub Azure Resource ID.
* **isTrustedServiceEnabled**: bool: Indicates whether the trusted service is enabled or not.
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
* **eventSource**: 'Alerts' | 'Assessments' | 'AssessmentsSnapshot' | 'AttackPaths' | 'AttackPathsSnapshot' | 'RegulatoryComplianceAssessment' | 'RegulatoryComplianceAssessmentSnapshot' | 'SecureScoreControls' | 'SecureScoreControlsSnapshot' | 'SecureScores' | 'SecureScoresSnapshot' | 'SubAssessments' | 'SubAssessmentsSnapshot' | string: A valid event source type.
* **ruleSets**: [AutomationRuleSet](#automationruleset)[]: A set of rules which evaluate upon event interception. A logical disjunction is applied between defined rule sets (logical 'or').

## AutomationTriggeringRule
### Properties
* **expectedValue**: string: The expected value.
* **operator**: 'Contains' | 'EndsWith' | 'Equals' | 'GreaterThan' | 'GreaterThanOrEqualTo' | 'LesserThan' | 'LesserThanOrEqualTo' | 'NotEquals' | 'StartsWith' | string: A valid comparer operator to use. A case-insensitive comparison will be applied for String PropertyType.
* **propertyJPath**: string: The JPath of the entity model property that should be checked.
* **propertyType**: 'Boolean' | 'Integer' | 'Number' | 'String' | string: The data type of the compared operands (string, integer, floating point number or a boolean [true/false]]

## NotificationsSource
* **Discriminator**: sourceType

### Base Properties

### NotificationsSourceAlert
#### Properties
* **minimalSeverity**: 'High' | 'Low' | 'Medium' | string: Defines the minimal alert severity which will be sent as email notifications
* **sourceType**: 'Alert' (Required): The source type that will trigger the notification

### NotificationsSourceAttackPath
#### Properties
* **minimalRiskLevel**: 'Critical' | 'High' | 'Low' | 'Medium' | string: Defines the minimal attach path risk level which will be sent as email notifications
* **sourceType**: 'AttackPath' (Required): The source type that will trigger the notification


## SecurityContactProperties
### Properties
* **emails**: string: List of email addresses which will get notifications from Microsoft Defender for Cloud by the configurations defined in this security contact.
* **isEnabled**: bool: Indicates whether the security contact is enabled.
* **notificationsByRole**: [SecurityContactPropertiesNotificationsByRole](#securitycontactpropertiesnotificationsbyrole): Defines whether to send email notifications from Microsoft Defender for Cloud to persons with specific RBAC roles on the subscription.
* **notificationsSources**: [NotificationsSource](#notificationssource)[]: A collection of sources types which evaluate the email notification.
* **phone**: string: The security contact's phone number

## SecurityContactPropertiesNotificationsByRole
### Properties
* **roles**: ('AccountAdmin' | 'Contributor' | 'Owner' | 'ServiceAdmin' | string)[]: Defines which RBAC roles will get email notifications from Microsoft Defender for Cloud. List of allowed RBAC roles:
* **state**: 'Off' | 'On' | string: Defines whether to send email notifications from AMicrosoft Defender for Cloud to persons with specific RBAC roles on the subscription.

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

