# Microsoft.SecurityInsights @ 2025-06-01

## Resource Microsoft.SecurityInsights/alertRules@2025-06-01
* **Valid Scope(s)**: Extension
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/alertRules' (ReadOnly, DeployTimeConstant): The resource type

### FusionAlertRule
#### Properties
* **kind**: 'Fusion' (Required): The alert rule kind
* **properties**: [FusionAlertRuleProperties](#fusionalertruleproperties): Fusion alert rule properties

### MicrosoftSecurityIncidentCreationAlertRule
#### Properties
* **kind**: 'MicrosoftSecurityIncidentCreation' (Required): The alert rule kind
* **properties**: [MicrosoftSecurityIncidentCreationAlertRuleProperties](#microsoftsecurityincidentcreationalertruleproperties): MicrosoftSecurityIncidentCreation rule properties

### ScheduledAlertRule
#### Properties
* **kind**: 'Scheduled' (Required): The alert rule kind
* **properties**: [ScheduledAlertRuleProperties](#scheduledalertruleproperties): Scheduled alert rule properties


## Resource Microsoft.SecurityInsights/alertRules/actions@2025-06-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ActionRequestPropertiesOrActionResponseProperties](#actionrequestpropertiesoractionresponseproperties): Action properties for put request
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/alertRules/actions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/alertRuleTemplates@2025-06-01 (ReadOnly)
* **Valid Scope(s)**: Extension
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/alertRuleTemplates' (ReadOnly, DeployTimeConstant): The resource type

### FusionAlertRuleTemplate
#### Properties
* **kind**: 'Fusion' (Required): The alert rule kind
* **properties**: [FusionAlertRuleTemplateProperties](#fusionalertruletemplateproperties) (ReadOnly): Fusion alert rule template properties

### MicrosoftSecurityIncidentCreationAlertRuleTemplate
#### Properties
* **kind**: 'MicrosoftSecurityIncidentCreation' (Required): The alert rule kind
* **properties**: [MicrosoftSecurityIncidentCreationAlertRuleTemplateProperties](#microsoftsecurityincidentcreationalertruletemplateproperties) (ReadOnly): MicrosoftSecurityIncidentCreation rule template properties

### ScheduledAlertRuleTemplate
#### Properties
* **kind**: 'Scheduled' (Required): The alert rule kind
* **properties**: [ScheduledAlertRuleTemplateProperties](#scheduledalertruletemplateproperties) (ReadOnly): Scheduled alert rule template properties


## Resource Microsoft.SecurityInsights/automationRules@2025-06-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AutomationRuleProperties](#automationruleproperties) (Required): Automation rule properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/automationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/bookmarks@2025-06-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BookmarkProperties](#bookmarkproperties): Bookmark properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/bookmarks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/contentPackages@2025-06-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PackageProperties](#packageproperties): package properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/contentPackages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/contentProductPackages@2025-06-01 (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProductPackageProperties](#productpackageproperties) (ReadOnly): package properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/contentProductPackages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/contentproducttemplates@2025-06-01 (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProductTemplateProperties](#producttemplateproperties) (ReadOnly): template properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/contentproducttemplates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/contentTemplates@2025-06-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TemplateProperties](#templateproperties): template properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/contentTemplates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/dataConnectorDefinitions@2025-06-01
* **Valid Scope(s)**: Extension
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-z0-9A-Z-_]*$"} (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/dataConnectorDefinitions' (ReadOnly, DeployTimeConstant): The resource type

### CustomizableConnectorDefinition
#### Properties
* **kind**: 'Customizable' (Required): The data connector kind
* **properties**: [CustomizableConnectorDefinitionProperties](#customizableconnectordefinitionproperties): Customizable properties.


## Resource Microsoft.SecurityInsights/dataConnectors@2025-06-01
* **Valid Scope(s)**: Extension
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/dataConnectors' (ReadOnly, DeployTimeConstant): The resource type

### AwsCloudTrailDataConnector
#### Properties
* **kind**: 'AmazonWebServicesCloudTrail' (Required): The data connector kind
* **properties**: [AwsCloudTrailDataConnectorProperties](#awscloudtraildataconnectorproperties): Amazon Web Services CloudTrail data connector properties.

### AADDataConnector
#### Properties
* **kind**: 'AzureActiveDirectory' (Required): The data connector kind
* **properties**: [AADDataConnectorProperties](#aaddataconnectorproperties): AAD (Azure Active Directory) data connector properties.

### AatpDataConnector
#### Properties
* **kind**: 'AzureAdvancedThreatProtection' (Required): The data connector kind
* **properties**: [AatpDataConnectorProperties](#aatpdataconnectorproperties): AATP (Azure Advanced Threat Protection) data connector properties.

### ASCDataConnector
#### Properties
* **kind**: 'AzureSecurityCenter' (Required): The data connector kind
* **properties**: [ASCDataConnectorProperties](#ascdataconnectorproperties): ASC (Azure Security Center) data connector properties.

### McasDataConnector
#### Properties
* **kind**: 'MicrosoftCloudAppSecurity' (Required): The data connector kind
* **properties**: [McasDataConnectorProperties](#mcasdataconnectorproperties): MCAS (Microsoft Cloud App Security) data connector properties.

### MdatpDataConnector
#### Properties
* **kind**: 'MicrosoftDefenderAdvancedThreatProtection' (Required): The data connector kind
* **properties**: [MdatpDataConnectorProperties](#mdatpdataconnectorproperties): MDATP (Microsoft Defender Advanced Threat Protection) data connector properties.

### MstiDataConnector
#### Properties
* **kind**: 'MicrosoftThreatIntelligence' (Required): The data connector kind
* **properties**: [MstiDataConnectorProperties](#mstidataconnectorproperties): Microsoft Threat Intelligence data connector properties.

### OfficeDataConnector
#### Properties
* **kind**: 'Office365' (Required): The data connector kind
* **properties**: [OfficeDataConnectorProperties](#officedataconnectorproperties): Office data connector properties.

### PremiumMicrosoftDefenderForThreatIntelligence
#### Properties
* **kind**: 'PremiumMicrosoftDefenderForThreatIntelligence' (Required): The data connector kind
* **properties**: [PremiumMdtiDataConnectorProperties](#premiummdtidataconnectorproperties): Premium Microsoft Defender for Threat Intelligence data connector properties.

### RestApiPollerDataConnector
#### Properties
* **kind**: 'RestApiPoller' (Required): The data connector kind
* **properties**: [RestApiPollerDataConnectorProperties](#restapipollerdataconnectorproperties): Rest Api Poller data connector properties.

### TIDataConnector
#### Properties
* **kind**: 'ThreatIntelligence' (Required): The data connector kind
* **properties**: [TIDataConnectorProperties](#tidataconnectorproperties): TI (Threat Intelligence) data connector properties.


## Resource Microsoft.SecurityInsights/incidents@2025-06-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IncidentProperties](#incidentproperties): Incident properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/incidents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/incidents/comments@2025-06-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IncidentCommentProperties](#incidentcommentproperties): Incident comment properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/incidents/comments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/incidents/relations@2025-06-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9-]{3,63}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RelationProperties](#relationproperties): Relation properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/incidents/relations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/incidents/tasks@2025-06-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IncidentTaskProperties](#incidenttaskproperties) (Required): Describes the properties of an incident task
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/incidents/tasks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/metadata@2025-06-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^\S+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MetadataProperties](#metadataproperties): Metadata properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/metadata' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/onboardingStates@2025-06-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SentinelOnboardingStateProperties](#sentinelonboardingstateproperties): The Sentinel onboarding state object
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/onboardingStates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/securityMLAnalyticsSettings@2025-06-01
* **Valid Scope(s)**: Extension
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/securityMLAnalyticsSettings' (ReadOnly, DeployTimeConstant): The resource type

### AnomalySecurityMLAnalyticsSettings
#### Properties
* **kind**: 'Anomaly' (Required): The kind of security ML Analytics Settings
* **properties**: [AnomalySecurityMLAnalyticsSettingsProperties](#anomalysecuritymlanalyticssettingsproperties): Anomaly Security ML Analytics Settings properties


## Resource Microsoft.SecurityInsights/sourcecontrols@2025-06-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SourceControlProperties](#sourcecontrolproperties) (Required): source control properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/sourcecontrols' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/threatIntelligence/indicators@2025-06-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ThreatIntelligenceIndicatorProperties](#threatintelligenceindicatorproperties) (WriteOnly): Threat Intelligence Entity properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/threatIntelligence/indicators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/watchlists@2025-06-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WatchlistProperties](#watchlistproperties): Watchlist properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/watchlists' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/watchlists/watchlistItems@2025-06-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WatchlistItemProperties](#watchlistitemproperties): Watchlist Item properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/watchlists/watchlistItems' (ReadOnly, DeployTimeConstant): The resource type

## AADDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): The available data types for the connector.
* **tenantId**: string: The tenant id to connect to, and get the data from.

## AatpDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): The available data types for the connector.
* **tenantId**: string: The tenant id to connect to, and get the data from.

## ActionRequestPropertiesOrActionResponseProperties
### Properties
* **logicAppResourceId**: string (Required): Logic App Resource Id, /subscriptions/{my-subscription}/resourceGroups/{my-resource-group}/providers/Microsoft.Logic/workflows/{my-workflow-id}.
* **triggerUri**: string (Required, WriteOnly): Logic App Callback URL for this specific workflow.
* **workflowId**: string (ReadOnly): The name of the logic app's workflow.

## AddIncidentTaskActionProperties
### Properties
* **description**: string: The description of the task.
* **title**: string (Required): The title of the task.

## AlertDetailsOverride
### Properties
* **alertDescriptionFormat**: string: the format containing columns name(s) to override the alert description
* **alertDisplayNameFormat**: string: the format containing columns name(s) to override the alert name
* **alertDynamicProperties**: [AlertPropertyMapping](#alertpropertymapping)[]: List of additional dynamic properties to override
* **alertSeverityColumnName**: string: the column name to take the alert severity from
* **alertTacticsColumnName**: string: the column name to take the alert tactics from

## AlertPropertyMapping
### Properties
* **alertProperty**: 'AlertLink' | 'ConfidenceLevel' | 'ConfidenceScore' | 'ExtendedLinks' | 'ProductComponentName' | 'ProductName' | 'ProviderName' | 'RemediationSteps' | 'Techniques' | string: The V3 alert property
* **value**: string: the column name to use to override this property

## AlertRuleTemplateDataSource
### Properties
* **connectorId**: string: The connector id that provides the following data types
* **dataTypes**: string[]: The data types used by the alert rule template

## AlertsDataTypeOfDataConnector
### Properties
* **alerts**: [DataConnectorDataTypeCommon](#dataconnectordatatypecommon): Alerts data type connection.

## AnomalySecurityMLAnalyticsSettingsProperties
### Properties
* **anomalySettingsVersion**: int: The anomaly settings version of the Anomaly security ml analytics settings that dictates whether job version gets updated or not.
* **anomalyVersion**: string (Required): The anomaly version of the AnomalySecurityMLAnalyticsSettings.
* **customizableObservations**: any: The customizable observations of the AnomalySecurityMLAnalyticsSettings.
* **description**: string: The description of the SecurityMLAnalyticsSettings.
* **displayName**: string (Required): The display name for settings created by this SecurityMLAnalyticsSettings.
* **enabled**: bool (Required): Determines whether this settings is enabled or disabled.
* **frequency**: string (Required): The frequency that this SecurityMLAnalyticsSettings will be run.
* **isDefaultSettings**: bool (Required): Determines whether this anomaly security ml analytics settings is a default settings
* **lastModifiedUtc**: string (ReadOnly): The last time that this SecurityMLAnalyticsSettings has been modified.
* **requiredDataConnectors**: [SecurityMLAnalyticsSettingsDataSource](#securitymlanalyticssettingsdatasource)[]: The required data sources for this SecurityMLAnalyticsSettings
* **settingsDefinitionId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: The anomaly settings definition Id
* **settingsStatus**: 'Flighting' | 'Production' | string (Required): The anomaly SecurityMLAnalyticsSettings status
* **tactics**: ('Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'ImpairProcessControl' | 'InhibitResponseFunction' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Reconnaissance' | 'ResourceDevelopment' | string)[]: The tactics of the SecurityMLAnalyticsSettings
* **techniques**: string[]: The techniques of the SecurityMLAnalyticsSettings

## ASCDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): The available data types for the connector.
* **subscriptionId**: string: The subscription id to connect to, and get the data from.

## AutomationRuleAction
* **Discriminator**: actionType

### Base Properties
* **order**: int (Required)

### AutomationRuleAddIncidentTaskAction
#### Properties
* **actionConfiguration**: [AddIncidentTaskActionProperties](#addincidenttaskactionproperties): Describes an automation rule action to add a task to an incident.
* **actionType**: 'AddIncidentTask' (Required): The type of the automation rule action.

### AutomationRuleModifyPropertiesAction
#### Properties
* **actionConfiguration**: [IncidentPropertiesAction](#incidentpropertiesaction)
* **actionType**: 'ModifyProperties' (Required): The type of the automation rule action.

### AutomationRuleRunPlaybookAction
#### Properties
* **actionConfiguration**: [PlaybookActionProperties](#playbookactionproperties)
* **actionType**: 'RunPlaybook' (Required): The type of the automation rule action.


## AutomationRuleBooleanCondition
### Properties
* **innerConditions**: [AutomationRuleCondition](#automationrulecondition)[] {minLength: 2, maxLength: 10}
* **operator**: 'And' | 'Or' | string: Describes a boolean condition operator.

## AutomationRuleCondition
* **Discriminator**: conditionType

### Base Properties

### BooleanConditionProperties
#### Properties
* **conditionProperties**: [AutomationRuleBooleanCondition](#automationrulebooleancondition): Describes an automation rule condition with boolean operators.
* **conditionType**: 'Boolean' (Required)

### PropertyConditionProperties
#### Properties
* **conditionProperties**: [AutomationRulePropertyValuesCondition](#automationrulepropertyvaluescondition)
* **conditionType**: 'Property' (Required)

### PropertyArrayConditionProperties
#### Properties
* **conditionProperties**: [AutomationRulePropertyArrayValuesCondition](#automationrulepropertyarrayvaluescondition): Describes an automation rule condition on array properties.
* **conditionType**: 'PropertyArray' (Required)

### PropertyArrayChangedConditionProperties
#### Properties
* **conditionProperties**: [AutomationRulePropertyArrayChangedValuesCondition](#automationrulepropertyarraychangedvaluescondition)
* **conditionType**: 'PropertyArrayChanged' (Required)

### PropertyChangedConditionProperties
#### Properties
* **conditionProperties**: [AutomationRulePropertyValuesChangedCondition](#automationrulepropertyvalueschangedcondition)
* **conditionType**: 'PropertyChanged' (Required)


## AutomationRuleProperties
### Properties
* **actions**: [AutomationRuleAction](#automationruleaction)[] {maxLength: 20} (Required): The actions to execute when the automation rule is triggered.
* **createdBy**: [ClientInfo](#clientinfo) (ReadOnly): Information on the client (user or application) that made some action
* **createdTimeUtc**: string (ReadOnly): The time the automation rule was created.
* **displayName**: string {maxLength: 500} (Required): The display name of the automation rule.
* **lastModifiedBy**: [ClientInfo](#clientinfo) (ReadOnly): Information on the client (user or application) that made some action
* **lastModifiedTimeUtc**: string (ReadOnly): The last time the automation rule was updated.
* **order**: int {minValue: 1, maxValue: 1000} (Required): The order of execution of the automation rule.
* **triggeringLogic**: [AutomationRuleTriggeringLogic](#automationruletriggeringlogic) (Required): Describes automation rule triggering logic.

## AutomationRulePropertyArrayChangedValuesCondition
### Properties
* **arrayType**: 'Alerts' | 'Comments' | 'Labels' | 'Tactics' | string
* **changeType**: 'Added' | string

## AutomationRulePropertyArrayValuesCondition
### Properties
* **arrayConditionType**: 'AnyItem' | string: Describes an array condition evaluation type.
* **arrayType**: 'CustomDetailValues' | 'CustomDetails' | string: Describes an array condition evaluated array type.
* **itemConditions**: [AutomationRuleCondition](#automationrulecondition)[] {maxLength: 10}

## AutomationRulePropertyValuesChangedCondition
### Properties
* **changeType**: 'ChangedFrom' | 'ChangedTo' | string
* **operator**: 'Contains' | 'EndsWith' | 'Equals' | 'NotContains' | 'NotEndsWith' | 'NotEquals' | 'NotStartsWith' | 'StartsWith' | string
* **propertyName**: 'IncidentOwner' | 'IncidentSeverity' | 'IncidentStatus' | string
* **propertyValues**: string[]

## AutomationRulePropertyValuesCondition
### Properties
* **operator**: 'Contains' | 'EndsWith' | 'Equals' | 'NotContains' | 'NotEndsWith' | 'NotEquals' | 'NotStartsWith' | 'StartsWith' | string
* **propertyName**: 'AccountAadTenantId' | 'AccountAadUserId' | 'AccountNTDomain' | 'AccountName' | 'AccountObjectGuid' | 'AccountPUID' | 'AccountSid' | 'AccountUPNSuffix' | 'AlertAnalyticRuleIds' | 'AlertProductNames' | 'AzureResourceResourceId' | 'AzureResourceSubscriptionId' | 'CloudApplicationAppId' | 'CloudApplicationAppName' | 'DNSDomainName' | 'FileDirectory' | 'FileHashValue' | 'FileName' | 'HostAzureID' | 'HostNTDomain' | 'HostName' | 'HostNetBiosName' | 'HostOSVersion' | 'IPAddress' | 'IncidentCustomDetailsKey' | 'IncidentCustomDetailsValue' | 'IncidentDescription' | 'IncidentLabel' | 'IncidentProviderName' | 'IncidentRelatedAnalyticRuleIds' | 'IncidentSeverity' | 'IncidentStatus' | 'IncidentTactics' | 'IncidentTitle' | 'IncidentUpdatedBySource' | 'IoTDeviceId' | 'IoTDeviceModel' | 'IoTDeviceName' | 'IoTDeviceOperatingSystem' | 'IoTDeviceType' | 'IoTDeviceVendor' | 'MailMessageDeliveryAction' | 'MailMessageDeliveryLocation' | 'MailMessageP1Sender' | 'MailMessageP2Sender' | 'MailMessageRecipient' | 'MailMessageSenderIP' | 'MailMessageSubject' | 'MailboxDisplayName' | 'MailboxPrimaryAddress' | 'MailboxUPN' | 'MalwareCategory' | 'MalwareName' | 'ProcessCommandLine' | 'ProcessId' | 'RegistryKey' | 'RegistryValueData' | 'Url' | string: The property to evaluate in an automation rule property condition.
* **propertyValues**: string[]

## AutomationRuleTriggeringLogic
### Properties
* **conditions**: [AutomationRuleCondition](#automationrulecondition)[] {maxLength: 50}: The conditions to evaluate to determine if the automation rule should be triggered on a given object.
* **expirationTimeUtc**: string: Determines when the automation rule should automatically expire and be disabled.
* **isEnabled**: bool (Required): Determines whether the automation rule is enabled or disabled.
* **triggersOn**: 'Alerts' | 'Incidents' | string (Required)
* **triggersWhen**: 'Created' | 'Updated' | string (Required)

## AwsCloudTrailDataConnectorDataTypes
### Properties
* **logs**: [AwsCloudTrailDataConnectorDataTypesLogs](#awscloudtraildataconnectordatatypeslogs): Logs data type.

## AwsCloudTrailDataConnectorDataTypesLogs
### Properties
* **state**: 'Disabled' | 'Enabled' | string: Describe whether this data type connection is enabled or not.

## AwsCloudTrailDataConnectorProperties
### Properties
* **awsRoleArn**: string: The Aws Role Arn (with CloudTrailReadOnly policy) that is used to access the Aws account.
* **dataTypes**: [AwsCloudTrailDataConnectorDataTypes](#awscloudtraildataconnectordatatypes): The available data types for the connector.

## AzureDevOpsResourceInfo
### Properties
* **pipelineId**: string: Id of the pipeline created for the source-control.
* **serviceConnectionId**: string: Id of the service-connection created for the source-control.

## BookmarkProperties
### Properties
* **created**: string: The time the bookmark was created
* **createdBy**: [UserInfo](#userinfo): Describes a user that created the bookmark
* **displayName**: string (Required): The display name of the bookmark
* **eventTime**: string: The bookmark event time
* **incidentInfo**: [IncidentInfo](#incidentinfo): Describes an incident that relates to bookmark
* **labels**: string[]: List of labels relevant to this bookmark
* **notes**: string: The notes of the bookmark
* **query**: string (Required): The query of the bookmark.
* **queryEndTime**: string: The end time for the query
* **queryResult**: string: The query result of the bookmark.
* **queryStartTime**: string: The start time for the query
* **updated**: string: The last time the bookmark was updated
* **updatedBy**: [UserInfo](#userinfo): Describes a user that updated the bookmark

## CcpAuthConfig
* **Discriminator**: type

### Base Properties

### ApiKeyAuthModel
#### Properties
* **apiKey**: string (Required): API Key for the user secret key credential
* **apiKeyIdentifier**: string: API Key Identifier
* **apiKeyName**: string (Required): API Key name
* **isApiKeyInPostPayload**: bool: Flag to indicate if API key is set in HTTP POST payload
* **type**: 'APIKey' (Required): The auth type

### AWSAuthModel
#### Properties
* **externalId**: string: AWS STS assume role external ID. This is used to prevent the confused deputy problem: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html'
* **roleArn**: string (Required): AWS STS assume role ARN
* **type**: 'AWS' (Required): The auth type

### BasicAuthModel
#### Properties
* **password**: string (Required): The password
* **type**: 'Basic' (Required): The auth type
* **userName**: string (Required): The user name.

### GCPAuthModel
#### Properties
* **projectNumber**: string (Required): GCP Project Number
* **serviceAccountEmail**: string (Required): GCP Service Account Email
* **type**: 'GCP' (Required): The auth type
* **workloadIdentityProviderId**: string (Required): GCP Workload Identity Provider ID

### GitHubAuthModel
#### Properties
* **installationId**: string: The GitHubApp auth installation id.
* **type**: 'GitHub' (Required): The auth type

### JwtAuthModel
#### Properties
* **headers**: [JwtAuthModelHeaders](#jwtauthmodelheaders): The custom headers we want to add once we send request to token endpoint.
* **isCredentialsInHeaders**: bool: Flag indicating whether we want to send the user name and password to token endpoint in the headers.
* **isJsonRequest**: bool: Flag indicating whether the body request is JSON (header Content-Type = application/json), meaning its a Form URL encoded request (header Content-Type = application/x-www-form-urlencoded).
* **password**: [JwtAuthModelPassword](#jwtauthmodelpassword) (Required): The password
* **queryParameters**: [JwtAuthModelQueryParameters](#jwtauthmodelqueryparameters): The custom query parameter we want to add once we send request to token endpoint.
* **requestTimeoutInSeconds**: int {maxValue: 180}: Request timeout in seconds.
* **tokenEndpoint**: string (Required): Token endpoint to request JWT
* **type**: 'JwtToken' (Required): The auth type
* **userName**: [JwtAuthModelUserName](#jwtauthmodelusername) (Required): The user name. If user name and password sent in header request we only need to populate the `value` property with the user name (Same as basic auth). If user name and password sent in body request we need to specify the `Key` and `Value`.

### NoneAuthModel
#### Properties
* **type**: 'None' (Required): The auth type

### OAuthModel
#### Properties
* **accessTokenPrepend**: string: Access token prepend. Default is 'Bearer'.
* **authorizationCode**: string: The user's authorization code.
* **authorizationEndpoint**: string: The authorization endpoint.
* **authorizationEndpointHeaders**: [OAuthModelAuthorizationEndpointHeaders](#oauthmodelauthorizationendpointheaders): The authorization endpoint headers.
* **authorizationEndpointQueryParameters**: [OAuthModelAuthorizationEndpointQueryParameters](#oauthmodelauthorizationendpointqueryparameters): The authorization endpoint query parameters.
* **clientId**: string (Required): The Application (client) ID that the OAuth provider assigned to your app.
* **clientSecret**: string (Required): The Application (client) secret that the OAuth provider assigned to your app.
* **grantType**: string (Required): The grant type, usually will be 'authorization code'.
* **isCredentialsInHeaders**: bool: Indicating whether we want to send the clientId and clientSecret to token endpoint in the headers.
* **isJwtBearerFlow**: bool: A value indicating whether it's a JWT flow.
* **redirectUri**: string: The Application redirect url that the user config in the OAuth provider.
* **scope**: string: The Application (client) Scope that the OAuth provider assigned to your app.
* **tokenEndpoint**: string (Required): The token endpoint. Defines the OAuth2 refresh token.
* **tokenEndpointHeaders**: [OAuthModelTokenEndpointHeaders](#oauthmodeltokenendpointheaders): The token endpoint headers.
* **tokenEndpointQueryParameters**: [OAuthModelTokenEndpointQueryParameters](#oauthmodeltokenendpointqueryparameters): The token endpoint query parameters.
* **type**: 'OAuth2' (Required): The auth type

### OracleAuthModel
#### Properties
* **pemFile**: string (Required): Content of the PRM file
* **publicFingerprint**: string (Required): Public Fingerprint
* **tenantId**: string (Required): Oracle tenant ID
* **type**: 'Oracle' (Required): The auth type
* **userId**: string (Required): Oracle user ID

### GenericBlobSbsAuthModel
#### Properties
* **credentialsConfig**: [GenericBlobSbsAuthModelCredentialsConfig](#genericblobsbsauthmodelcredentialsconfig): Credentials for service bus namespace, keyvault uri for access key
* **storageAccountCredentialsConfig**: [GenericBlobSbsAuthModelStorageAccountCredentialsConfig](#genericblobsbsauthmodelstorageaccountcredentialsconfig): Credentials for storage account, keyvault uri for access key
* **type**: 'ServiceBus' (Required): The auth type

### SessionAuthModel
#### Properties
* **headers**: [SessionAuthModelHeaders](#sessionauthmodelheaders): HTTP request headers to session service endpoint.
* **isPostPayloadJson**: bool: Indicating whether API key is set in HTTP POST payload.
* **password**: [SessionAuthModelPassword](#sessionauthmodelpassword) (Required): The password attribute name.
* **queryParameters**: [SessionAuthModelQueryParameters](#sessionauthmodelqueryparameters): Query parameters to session service endpoint.
* **sessionIdName**: string: Session id attribute name from HTTP response header.
* **sessionLoginRequestUri**: string: HTTP request URL to session service endpoint.
* **sessionTimeoutInMinutes**: int: Session timeout in minutes.
* **type**: 'Session' (Required): The auth type
* **userName**: [SessionAuthModelUserName](#sessionauthmodelusername) (Required): The user name attribute key value.


## CcpResponseConfig
### Properties
* **compressionAlgo**: string: The compression algorithm. For Example: 'gzip', 'multi-gzip', 'deflate'.
* **convertChildPropertiesToArray**: bool: The value indicating whether the response isn't an array of events / logs.  By setting this flag to true it means the remote server will response with an object which each property has as a value an array of events / logs.
* **csvDelimiter**: string: The csv delimiter, in case the response format is CSV.
* **csvEscape**: string {minLength: 1, maxLength: 1}: The character used to escape characters in CSV.
* **eventsJsonPaths**: string[] (Required): The json paths, '$' char is the json root.
* **format**: string: The response format. possible values are json,csv,xml
* **hasCsvBoundary**: bool: The value indicating whether the response has CSV boundary in case the response in CSV format.
* **hasCsvHeader**: bool: The value indicating whether the response has headers in case the response in CSV format.
* **isGzipCompressed**: bool: The value indicating whether the remote server support Gzip and we should expect Gzip response.
* **successStatusJsonPath**: string: The value where the status message/code should appear in the response.
* **successStatusValue**: string: The status value.

## ClientInfo
### Properties
* **email**: string: The email of the client.
* **name**: string: The name of the client.
* **objectId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: The object id of the client.
* **userPrincipalName**: string: The user principal name of the client.

## ConnectivityCriterion
### Properties
* **type**: string (Required): Gets or sets the type of connectivity.
* **value**: string[]: Gets or sets the queries for checking connectivity.

## ConnectorDataType
### Properties
* **lastDataReceivedQuery**: string (Required): Gets or sets the query to indicate when relevant data was last received in the workspace.
* **name**: string (Required): Gets or sets the name of the data type to show in the graph.

## ConnectorDefinitionsAvailability
### Properties
* **isPreview**: bool: Gets or sets a value indicating whether the connector is preview.
* **status**: int: The exposure status of the connector to the customers. Available values are 0-4 (0=None, 1=Available, 2=FeatureFlag, 3=Internal).

## ConnectorDefinitionsPermissions
### Properties
* **customs**: [CustomPermissionDetails](#custompermissiondetails)[]: Gets or sets the customs permissions required for the user to create connections.
* **licenses**: string[]: Gets or sets the required licenses for the user to create connections.
* **resourceProvider**: [ConnectorDefinitionsResourceProvider](#connectordefinitionsresourceprovider)[]: Gets or sets the resource provider permissions required for the user to create connections.
* **tenant**: string[]: Gets or sets the required tenant permissions for the connector.

## ConnectorDefinitionsResourceProvider
### Properties
* **permissionsDisplayText**: string (Required): Gets or sets the permissions description text.
* **provider**: string (Required): Gets or sets the provider name.
* **providerDisplayName**: string (Required): Gets or sets the permissions provider display name.
* **requiredPermissions**: [ResourceProviderRequiredPermissions](#resourceproviderrequiredpermissions) (Required): Required permissions for the connector resource provider that define in ResourceProviders.
For more information about the permissions see <see href="https://docs.microsoft.com/en-us/azure/role-based-access-control/role-definitions#actions-format">here</see>.
* **scope**: 'ResourceGroup' | 'Subscription' | 'Workspace' | string (Required): The scope on which the user should have permissions, in order to be able to create connections.

## CustomizableConnectionsConfig
### Properties
* **templateSpecName**: string (Required): Gets or sets the template name. The template includes ARM templates that can be created by the connector, usually it will be the dataConnectors ARM templates.
* **templateSpecVersion**: string (Required): Gets or sets the template version.

## CustomizableConnectorDefinitionProperties
### Properties
* **connectionsConfig**: [CustomizableConnectionsConfig](#customizableconnectionsconfig): The UiConfig for 'Customizable' connector definition kind.
* **connectorUiConfig**: [CustomizableConnectorUiConfig](#customizableconnectoruiconfig) (Required): The UiConfig for 'Customizable' connector definition kind.
* **createdTimeUtc**: string: Gets or sets the connector definition created date in UTC format.
* **lastModifiedUtc**: string: Gets or sets the connector definition last modified date in UTC format.

## CustomizableConnectorUiConfig
### Properties
* **availability**: [ConnectorDefinitionsAvailability](#connectordefinitionsavailability): The exposure status of the connector to the customers.
* **connectivityCriteria**: [ConnectivityCriterion](#connectivitycriterion)[] (Required): Gets or sets the way the connector checks whether the connector is connected.
* **dataTypes**: [ConnectorDataType](#connectordatatype)[] (Required): Gets or sets the data types to check for last data received.
* **descriptionMarkdown**: string (Required): Gets or sets the connector description in markdown format.
* **graphQueries**: [GraphQuery](#graphquery)[] (Required): Gets or sets the graph queries to show the current data volume over time.
* **id**: string: Gets or sets custom connector id. optional field.
* **instructionSteps**: [InstructionStep](#instructionstep)[] (Required): Gets or sets the instruction steps to enable the connector.
* **isConnectivityCriteriasMatchSome**: bool: Gets or sets a value indicating whether to use 'OR'(SOME) or 'AND' between ConnectivityCriteria items.
* **logo**: string: Gets or sets the connector logo to be used when displaying the connector within Azure Sentinel's connector's gallery.
The logo value should be in SVG format.
* **permissions**: [ConnectorDefinitionsPermissions](#connectordefinitionspermissions) (Required): The required Permissions for the connector.
* **publisher**: string (Required): Gets or sets the connector publisher name.
* **title**: string (Required): Gets or sets the connector blade title.

## CustomPermissionDetails
### Properties
* **description**: string (Required): Gets or sets the custom permissions description.
* **name**: string (Required): Gets or sets the custom permissions name.

## DataConnectorDataTypeCommon
### Properties
* **state**: 'Disabled' | 'Enabled' | string: Describe whether this data type connection is enabled or not.

## DCRConfiguration
### Properties
* **dataCollectionEndpoint**: string (Required): Represents the data collection ingestion endpoint in log analytics.
* **dataCollectionRuleImmutableId**: string (Required): The data collection rule immutable id, the rule defines the transformation and data destination.
* **streamName**: string (Required): The stream we are sending the data to.

## Deployment
### Properties
* **deploymentId**: string: Deployment identifier.
* **deploymentLogsUrl**: string: Url to access repository action logs.
* **deploymentResult**: 'Canceled' | 'Failed' | 'Success' | string: The outcome of the deployment.
* **deploymentState**: 'Canceling' | 'Completed' | 'In_Progress' | 'Queued' | string: Current status of the deployment.
* **deploymentTime**: string: The time when the deployment finished.

## DeploymentInfo
### Properties
* **deployment**: [Deployment](#deployment): Deployment information.
* **deploymentFetchStatus**: 'NotFound' | 'Success' | 'Unauthorized' | string: Status while fetching the last deployment.
* **message**: string: Additional details about the deployment that can be shown to the user.

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityMapping
### Properties
* **entityType**: 'Account' | 'AzureResource' | 'CloudApplication' | 'DNS' | 'File' | 'FileHash' | 'Host' | 'IP' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityGroup' | 'SubmissionMail' | 'URL' | string: The V3 type of the mapped entity
* **fieldMappings**: [FieldMapping](#fieldmapping)[]: array of field mappings for the given entity mapping

## EventGroupingSettings
### Properties
* **aggregationKind**: 'AlertPerResult' | 'SingleAlert' | string: The event grouping aggregation kinds

## FieldMapping
### Properties
* **columnName**: string: the column name to be mapped to the identifier
* **identifier**: string: the V3 identifier of the entity

## FusionAlertRuleProperties
### Properties
* **alertRuleTemplateName**: string (Required): The Name of the alert rule template used to create this rule.
* **description**: string (ReadOnly): The description of the alert rule.
* **displayName**: string (ReadOnly): The display name for alerts created by this alert rule.
* **enabled**: bool (Required): Determines whether this alert rule is enabled or disabled.
* **lastModifiedUtc**: string (ReadOnly): The last time that this alert has been modified.
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (ReadOnly): The severity for alerts created by this alert rule.
* **tactics**: ('Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'ImpairProcessControl' | 'InhibitResponseFunction' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Reconnaissance' | 'ResourceDevelopment' | string)[] (ReadOnly): The tactics of the alert rule
* **techniques**: string[] (ReadOnly): The techniques of the alert rule

## FusionAlertRuleTemplateProperties
### Properties
* **alertRulesCreatedByTemplateCount**: int: the number of alert rules that were created by this template
* **createdDateUTC**: string (ReadOnly): The time that this alert rule template has been added.
* **description**: string: The description of the alert rule template.
* **displayName**: string: The display name for alert rule template.
* **lastUpdatedDateUTC**: string (ReadOnly): The time that this alert rule template was last updated.
* **requiredDataConnectors**: [AlertRuleTemplateDataSource](#alertruletemplatedatasource)[]: The required data connectors for this template
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string: The severity for alerts created by this alert rule.
* **status**: 'Available' | 'Installed' | 'NotAvailable' | string: The alert rule template status.
* **tactics**: ('Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'ImpairProcessControl' | 'InhibitResponseFunction' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Reconnaissance' | 'ResourceDevelopment' | string)[]: The tactics of the alert rule template
* **techniques**: string[]: The techniques of the alert rule template

## GenericBlobSbsAuthModelCredentialsConfig
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GenericBlobSbsAuthModelStorageAccountCredentialsConfig
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GitHubResourceInfo
### Properties
* **appInstallationId**: string: GitHub application installation id.

## GraphQuery
### Properties
* **baseQuery**: string (Required): Gets or sets the base query for the graph.
The base query is wrapped by Sentinel UI infra with a KQL query, that measures the volume over time.
* **legend**: string (Required): Gets or sets the legend for the graph.
* **metricName**: string (Required): Gets or sets the metric name that the query is checking. For example: 'Total data receive'.

## GroupingConfiguration
### Properties
* **enabled**: bool (Required): Grouping enabled
* **groupByAlertDetails**: ('DisplayName' | 'Severity' | string)[]: A list of alert details to group by (when matchingMethod is Selected)
* **groupByCustomDetails**: string[]: A list of custom details keys to group by (when matchingMethod is Selected). Only keys defined in the current alert rule may be used.
* **groupByEntities**: ('Account' | 'AzureResource' | 'CloudApplication' | 'DNS' | 'File' | 'FileHash' | 'Host' | 'IP' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityGroup' | 'SubmissionMail' | 'URL' | string)[]: A list of entity types to group by (when matchingMethod is Selected). Only entities defined in the current alert rule may be used.
* **lookbackDuration**: string (Required): Limit the group to alerts created within the lookback duration (in ISO 8601 duration format)
* **matchingMethod**: 'AllEntities' | 'AnyAlert' | 'Selected' | string (Required): Grouping matching method. When method is Selected at least one of groupByEntities, groupByAlertDetails, groupByCustomDetails must be provided and not empty.
* **reopenClosedIncident**: bool (Required): Re-open closed matching incidents

## IncidentAdditionalData
### Properties
* **alertProductNames**: string[] (ReadOnly): List of product names of alerts in the incident
* **alertsCount**: int (ReadOnly): The number of alerts in the incident
* **bookmarksCount**: int (ReadOnly): The number of bookmarks in the incident
* **commentsCount**: int (ReadOnly): The number of comments in the incident
* **providerIncidentUrl**: string (ReadOnly): The provider incident url to the incident in Microsoft 365 Defender portal
* **tactics**: ('Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'ImpairProcessControl' | 'InhibitResponseFunction' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Reconnaissance' | 'ResourceDevelopment' | string)[] (ReadOnly): The tactics associated with incident

## IncidentCommentProperties
### Properties
* **author**: [ClientInfo](#clientinfo) (ReadOnly): Describes the client that created the comment
* **createdTimeUtc**: string (ReadOnly): The time the comment was created
* **lastModifiedTimeUtc**: string (ReadOnly): The time the comment was updated
* **message**: string (Required): The comment message

## IncidentConfiguration
### Properties
* **createIncident**: bool (Required): Create incidents from alerts triggered by this analytics rule
* **groupingConfiguration**: [GroupingConfiguration](#groupingconfiguration): Set how the alerts that are triggered by this analytics rule, are grouped into incidents

## IncidentInfo
### Properties
* **incidentId**: string: Incident Id
* **relationName**: string: Relation Name
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string: The severity of the incident
* **title**: string: The title of the incident

## IncidentLabel
### Properties
* **labelName**: string (Required): The name of the label
* **labelType**: 'AutoAssigned' | 'User' | string (ReadOnly): The type of the label

## IncidentOwnerInfo
### Properties
* **assignedTo**: string: The name of the user the incident is assigned to.
* **email**: string: The email of the user the incident is assigned to.
* **objectId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: The object id of the user the incident is assigned to.
* **ownerType**: 'Group' | 'Unknown' | 'User' | string: The type of the owner the incident is assigned to.
* **userPrincipalName**: string: The user principal name of the user the incident is assigned to.

## IncidentProperties
### Properties
* **additionalData**: [IncidentAdditionalData](#incidentadditionaldata) (ReadOnly): Additional data on the incident
* **classification**: 'BenignPositive' | 'FalsePositive' | 'TruePositive' | 'Undetermined' | string: The reason the incident was closed
* **classificationComment**: string: Describes the reason the incident was closed
* **classificationReason**: 'InaccurateData' | 'IncorrectAlertLogic' | 'SuspiciousActivity' | 'SuspiciousButExpected' | string: The classification reason the incident was closed with
* **createdTimeUtc**: string (ReadOnly): The time the incident was created
* **description**: string: The description of the incident
* **firstActivityTimeUtc**: string: The time of the first activity in the incident
* **incidentNumber**: int (ReadOnly): A sequential number
* **incidentUrl**: string (ReadOnly): The deep-link url to the incident in Azure portal
* **labels**: [IncidentLabel](#incidentlabel)[]: List of labels relevant to this incident
* **lastActivityTimeUtc**: string: The time of the last activity in the incident
* **lastModifiedTimeUtc**: string (ReadOnly): The last time the incident was updated
* **owner**: [IncidentOwnerInfo](#incidentownerinfo): Describes a user that the incident is assigned to
* **providerIncidentId**: string (ReadOnly): The incident ID assigned by the incident provider
* **providerName**: string (ReadOnly): The name of the source provider that generated the incident
* **relatedAnalyticRuleIds**: string[] (ReadOnly): List of resource ids of Analytic rules related to the incident
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (Required): The severity of the incident
* **status**: 'Active' | 'Closed' | 'New' | string (Required): The status of the incident
* **title**: string (Required): The title of the incident

## IncidentPropertiesAction
### Properties
* **classification**: 'BenignPositive' | 'FalsePositive' | 'TruePositive' | 'Undetermined' | string: The reason the incident was closed
* **classificationComment**: string: Describes the reason the incident was closed.
* **classificationReason**: 'InaccurateData' | 'IncorrectAlertLogic' | 'SuspiciousActivity' | 'SuspiciousButExpected' | string: The classification reason the incident was closed with
* **labels**: [IncidentLabel](#incidentlabel)[]: List of labels to add to the incident.
* **owner**: [IncidentOwnerInfo](#incidentownerinfo): Information on the user an incident is assigned to
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string: The severity of the incident
* **status**: 'Active' | 'Closed' | 'New' | string: The status of the incident

## IncidentTaskProperties
### Properties
* **createdBy**: [ClientInfo](#clientinfo): Information on the client (user or application) that made some action
* **createdTimeUtc**: string (ReadOnly): The time the task was created
* **description**: string: The description of the task
* **lastModifiedBy**: [ClientInfo](#clientinfo): Information on the client (user or application) that made some action
* **lastModifiedTimeUtc**: string (ReadOnly): The last time the task was updated
* **status**: 'Completed' | 'New' | string (Required): The status of the task
* **title**: string (Required): The title of the task

## InstructionStep
### Properties
* **description**: string: Gets or sets the instruction step description.
* **innerSteps**: [InstructionStep](#instructionstep)[]: Gets or sets the inner instruction steps details.
For Example: instruction step 1 might contain inner instruction steps: [instruction step 1.1, instruction step 1.2].
* **instructions**: [InstructionStepDetails](#instructionstepdetails)[]: Gets or sets the instruction step details.
* **title**: string: Gets or sets the instruction step title.

## InstructionStepDetails
### Properties
* **parameters**: any (Required): Gets or sets the instruction type parameters settings.
* **type**: string (Required): Gets or sets the instruction type name.

## JwtAuthModelHeaders
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JwtAuthModelPassword
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JwtAuthModelQueryParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JwtAuthModelUserName
### Properties
### Additional Properties
* **Additional Properties Type**: string

## McasDataConnectorDataTypes
### Properties
* **alerts**: [DataConnectorDataTypeCommon](#dataconnectordatatypecommon): Alerts data type connection.
* **discoveryLogs**: [DataConnectorDataTypeCommon](#dataconnectordatatypecommon): Discovery log data type connection.

## McasDataConnectorProperties
### Properties
* **dataTypes**: [McasDataConnectorDataTypes](#mcasdataconnectordatatypes): The available data types for the connector.
* **tenantId**: string: The tenant id to connect to, and get the data from.

## MdatpDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): The available data types for the connector.
* **tenantId**: string: The tenant id to connect to, and get the data from.

## MetadataAuthor
### Properties
* **email**: string: Email of author contact
* **link**: string: Link for author/vendor page
* **name**: string: Name of the author. Company or person.

## MetadataCategories
### Properties
* **domains**: string[]: domain for the solution content item
* **verticals**: string[]: Industry verticals for the solution content item

## MetadataDependencies
### Properties
* **contentId**: string: Id of the content item we depend on
* **criteria**: [MetadataDependencies](#metadatadependencies)[]: This is the list of dependencies we must fulfill, according to the AND/OR operator
* **kind**: 'AnalyticsRule' | 'AnalyticsRuleTemplate' | 'AutomationRule' | 'AzureFunction' | 'DataConnector' | 'DataType' | 'HuntingQuery' | 'InvestigationQuery' | 'LogicAppsCustomConnector' | 'Notebook' | 'Parser' | 'Playbook' | 'PlaybookTemplate' | 'ResourcesDataConnector' | 'Solution' | 'Standalone' | 'SummaryRule' | 'Watchlist' | 'WatchlistTemplate' | 'Workbook' | 'WorkbookTemplate' | string: Type of the content item we depend on
* **name**: string: Name of the content item
* **operator**: 'AND' | 'OR' | string: Operator used for list of dependencies in criteria array.
* **version**: string: Version of the the content item we depend on.  Can be blank, * or missing to indicate any version fulfills the dependency.  If version does not match our defined numeric format then an exact match is required.

## MetadataProperties
### Properties
* **author**: [MetadataAuthor](#metadataauthor): The creator of the content item.
* **categories**: [MetadataCategories](#metadatacategories): Categories for the solution content item
* **contentId**: string: Static ID for the content.  Used to identify dependencies and content from solutions or community.  Hard-coded/static for out of the box content and solutions. Dynamic for user-created.  This is the resource name
* **contentSchemaVersion**: string: Schema version of the content. Can be used to distinguish between different flow based on the schema version
* **customVersion**: string: The custom version of the content. A optional free text
* **dependencies**: [MetadataDependencies](#metadatadependencies): Dependencies for the content item, what other content items it requires to work.  Can describe more complex dependencies using a recursive/nested structure. For a single dependency an id/kind/version can be supplied or operator/criteria for complex formats.
* **firstPublishDate**: string: first publish date solution content item
* **icon**: string: the icon identifier. this id can later be fetched from the solution template
* **kind**: string (Required): The kind of content the metadata is for.
* **lastPublishDate**: string: last publish date for the solution content item
* **parentId**: string (Required): Full parent resource ID of the content item the metadata is for.  This is the full resource ID including the scope (subscription and resource group)
* **previewImages**: string[]: preview image file names. These will be taken from the solution artifacts
* **previewImagesDark**: string[]: preview image file names. These will be taken from the solution artifacts. used for dark theme support
* **providers**: string[]: Providers for the solution content item
* **source**: [MetadataSource](#metadatasource): Source of the content.  This is where/how it was created.
* **support**: [MetadataSupport](#metadatasupport): Support information for the metadata - type, name, contact information
* **threatAnalysisTactics**: string[]: the tactics the resource covers
* **threatAnalysisTechniques**: string[]: the techniques the resource covers, these have to be aligned with the tactics being used
* **version**: string: Version of the content.  Default and recommended format is numeric (e.g. 1, 1.0, 1.0.0, 1.0.0.0), following ARM template best practices.  Can also be any string, but then we cannot guarantee any version checks

## MetadataSource
### Properties
* **kind**: 'Community' | 'LocalWorkspace' | 'Solution' | 'SourceRepository' | string (Required): Source type of the content
* **name**: string: Name of the content source.  The repo name, solution name, LA workspace name etc.
* **sourceId**: string: ID of the content source.  The solution ID, workspace ID, etc

## MetadataSupport
### Properties
* **email**: string: Email of support contact
* **link**: string: Link for support help, like to support page to open a ticket etc.
* **name**: string: Name of the support contact. Company or person.
* **tier**: 'Community' | 'Microsoft' | 'Partner' | string (Required): Type of support for content item

## MicrosoftSecurityIncidentCreationAlertRuleProperties
### Properties
* **alertRuleTemplateName**: string: The Name of the alert rule template used to create this rule.
* **description**: string: The description of the alert rule.
* **displayName**: string (Required): The display name for alerts created by this alert rule.
* **displayNamesExcludeFilter**: string[]: the alerts' displayNames on which the cases will not be generated
* **displayNamesFilter**: string[]: the alerts' displayNames on which the cases will be generated
* **enabled**: bool (Required): Determines whether this alert rule is enabled or disabled.
* **lastModifiedUtc**: string (ReadOnly): The last time that this alert has been modified.
* **productFilter**: 'Azure Active Directory Identity Protection' | 'Azure Advanced Threat Protection' | 'Azure Security Center for IoT' | 'Azure Security Center' | 'Microsoft Cloud App Security' | string (Required): The alerts' productName on which the cases will be generated
* **severitiesFilter**: ('High' | 'Informational' | 'Low' | 'Medium' | string)[]: the alerts' severities on which the cases will be generated

## MicrosoftSecurityIncidentCreationAlertRuleTemplateProperties
### Properties
* **alertRulesCreatedByTemplateCount**: int: the number of alert rules that were created by this template
* **createdDateUTC**: string (ReadOnly): The time that this alert rule template has been added.
* **description**: string: The description of the alert rule template.
* **displayName**: string: The display name for alert rule template.
* **displayNamesExcludeFilter**: string[]: the alerts' displayNames on which the cases will not be generated
* **displayNamesFilter**: string[]: the alerts' displayNames on which the cases will be generated
* **lastUpdatedDateUTC**: string (ReadOnly): The time that this alert rule template was last updated.
* **productFilter**: 'Azure Active Directory Identity Protection' | 'Azure Advanced Threat Protection' | 'Azure Security Center for IoT' | 'Azure Security Center' | 'Microsoft Cloud App Security' | string: The alerts' productName on which the cases will be generated
* **requiredDataConnectors**: [AlertRuleTemplateDataSource](#alertruletemplatedatasource)[]: The required data connectors for this template
* **severitiesFilter**: ('High' | 'Informational' | 'Low' | 'Medium' | string)[]: the alerts' severities on which the cases will be generated
* **status**: 'Available' | 'Installed' | 'NotAvailable' | string: The alert rule template status.

## MstiDataConnectorDataTypes
### Properties
* **microsoftEmergingThreatFeed**: [MstiDataConnectorDataTypesMicrosoftEmergingThreatFeed](#mstidataconnectordatatypesmicrosoftemergingthreatfeed) (Required): Data type for Microsoft Threat Intelligence data connector.

## MstiDataConnectorDataTypesMicrosoftEmergingThreatFeed
### Properties
* **lookbackPeriod**: string (Required): The lookback period for the feed to be imported. The date-time to begin importing the feed from, for example: 2024-01-01T00:00:00.000Z.
* **state**: 'Disabled' | 'Enabled' | string: Describe whether this data type connection is enabled or not.

## MstiDataConnectorProperties
### Properties
* **dataTypes**: [MstiDataConnectorDataTypes](#mstidataconnectordatatypes) (Required): The available data types for the connector.
* **tenantId**: string: The tenant id to connect to, and get the data from.

## OAuthModelAuthorizationEndpointHeaders
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OAuthModelAuthorizationEndpointQueryParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OAuthModelTokenEndpointHeaders
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OAuthModelTokenEndpointQueryParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OfficeDataConnectorDataTypes
### Properties
* **exchange**: [OfficeDataConnectorDataTypesExchange](#officedataconnectordatatypesexchange): Exchange data type connection.
* **sharePoint**: [OfficeDataConnectorDataTypesSharePoint](#officedataconnectordatatypessharepoint): SharePoint data type connection.
* **teams**: [OfficeDataConnectorDataTypesTeams](#officedataconnectordatatypesteams): Teams data type connection.

## OfficeDataConnectorDataTypesExchange
### Properties
* **state**: 'Disabled' | 'Enabled' | string: Describe whether this data type connection is enabled or not.

## OfficeDataConnectorDataTypesSharePoint
### Properties
* **state**: 'Disabled' | 'Enabled' | string: Describe whether this data type connection is enabled or not.

## OfficeDataConnectorDataTypesTeams
### Properties
* **state**: 'Disabled' | 'Enabled' | string: Describe whether this data type connection is enabled or not.

## OfficeDataConnectorProperties
### Properties
* **dataTypes**: [OfficeDataConnectorDataTypes](#officedataconnectordatatypes): The available data types for the connector.
* **tenantId**: string: The tenant id to connect to, and get the data from.

## PackageProperties
### Properties
* **author**: [MetadataAuthor](#metadataauthor): The author of the package
* **categories**: [MetadataCategories](#metadatacategories): The categories of the package
* **contentId**: string: The content id of the package
* **contentKind**: 'Solution' | 'Standalone' | string: The package kind
* **contentProductId**: string: Unique ID for the content. It should be generated based on the contentId, contentKind and the contentVersion of the package
* **contentSchemaVersion**: string: The version of the content schema.
* **dependencies**: [MetadataDependencies](#metadatadependencies): The support tier of the package
* **description**: string: The description of the package
* **displayName**: string: The display name of the package
* **firstPublishDate**: string: first publish date package item
* **icon**: string: the icon identifier. this id can later be fetched from the content metadata
* **isDeprecated**: 'false' | 'true' | string: Flag indicates if this template is deprecated
* **isFeatured**: 'false' | 'true' | string: Flag indicates if this package is among the featured list.
* **isNew**: 'false' | 'true' | string: Flag indicates if this is a newly published package.
* **isPreview**: 'false' | 'true' | string: Flag indicates if this package is in preview.
* **lastPublishDate**: string: last publish date for the package item
* **providers**: string[]: Providers for the package item
* **publisherDisplayName**: string: The publisher display name of the package
* **source**: [MetadataSource](#metadatasource): The source of the package
* **support**: [MetadataSupport](#metadatasupport): The support tier of the package
* **threatAnalysisTactics**: string[]: the tactics the resource covers
* **threatAnalysisTechniques**: string[]: the techniques the resource covers, these have to be aligned with the tactics being used
* **version**: string: the latest version number of the package

## PlaybookActionProperties
### Properties
* **logicAppResourceId**: string (Required): The resource id of the playbook resource.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: The tenant id of the playbook resource.

## PremiumMdtiDataConnectorDataTypes
### Properties
* **connector**: [PremiumMdtiDataConnectorDataTypesConnector](#premiummdtidataconnectordatatypesconnector) (Required): Data type for Premium Microsoft Defender for Threat Intelligence data connector.

## PremiumMdtiDataConnectorDataTypesConnector
### Properties
* **state**: 'Disabled' | 'Enabled' | string: Describe whether this data type connection is enabled or not.

## PremiumMdtiDataConnectorProperties
### Properties
* **dataTypes**: [PremiumMdtiDataConnectorDataTypes](#premiummdtidataconnectordatatypes) (Required): The available data types for the connector.
* **lookbackPeriod**: string (Required): The lookback period for the feed to be imported. The date-time to begin importing the feed from, for example: 2024-01-01T00:00:00.000Z.
* **requiredSKUsPresent**: bool: The flag to indicate whether the tenant has the premium SKU required to access this connector.
* **tenantId**: string: The tenant id to connect to, and get the data from.

## ProductPackageProperties
### Properties
* **author**: [MetadataAuthor](#metadataauthor): The author of the package
* **categories**: [MetadataCategories](#metadatacategories): The categories of the package
* **contentId**: string: The content id of the package
* **contentKind**: 'Solution' | 'Standalone' | string: The package kind
* **contentProductId**: string: Unique ID for the content. It should be generated based on the contentId, contentKind and the contentVersion of the package
* **contentSchemaVersion**: string: The version of the content schema.
* **dependencies**: [MetadataDependencies](#metadatadependencies): The support tier of the package
* **description**: string: The description of the package
* **displayName**: string: The display name of the package
* **firstPublishDate**: string: first publish date package item
* **icon**: string: the icon identifier. this id can later be fetched from the content metadata
* **installedVersion**: string: The version of the installed package, null or absent means not installed.
* **isDeprecated**: 'false' | 'true' | string: Flag indicates if this template is deprecated
* **isFeatured**: 'false' | 'true' | string: Flag indicates if this package is among the featured list.
* **isNew**: 'false' | 'true' | string: Flag indicates if this is a newly published package.
* **isPreview**: 'false' | 'true' | string: Flag indicates if this package is in preview.
* **lastPublishDate**: string: last publish date for the package item
* **metadataResourceId**: string: The metadata resource id.
* **packagedContent**: any: The json of the ARM template to deploy. Expandable.
* **providers**: string[]: Providers for the package item
* **publisherDisplayName**: string: The publisher display name of the package
* **source**: [MetadataSource](#metadatasource): The source of the package
* **support**: [MetadataSupport](#metadatasupport): The support tier of the package
* **threatAnalysisTactics**: string[]: the tactics the resource covers
* **threatAnalysisTechniques**: string[]: the techniques the resource covers, these have to be aligned with the tactics being used
* **version**: string: the latest version number of the package

## ProductTemplateProperties
### Properties
* **author**: [MetadataAuthor](#metadataauthor): The creator of the content item.
* **categories**: [MetadataCategories](#metadatacategories): Categories for the item
* **contentId**: string: Static ID for the content.  Used to identify dependencies and content from solutions or community.  Hard-coded/static for out of the box content and solutions. Dynamic for user-created.  This is the resource name
* **contentKind**: 'AnalyticsRule' | 'AnalyticsRuleTemplate' | 'AutomationRule' | 'AzureFunction' | 'DataConnector' | 'DataType' | 'HuntingQuery' | 'InvestigationQuery' | 'LogicAppsCustomConnector' | 'Notebook' | 'Parser' | 'Playbook' | 'PlaybookTemplate' | 'ResourcesDataConnector' | 'Solution' | 'Standalone' | 'SummaryRule' | 'Watchlist' | 'WatchlistTemplate' | 'Workbook' | 'WorkbookTemplate' | string: The kind of content the template is for.
* **contentProductId**: string: Unique ID for the content. It should be generated based on the contentId of the package, contentId of the template, contentKind of the template and the contentVersion of the template
* **contentSchemaVersion**: string: Schema version of the content. Can be used to distinguish between different flow based on the schema version
* **customVersion**: string: The custom version of the content. A optional free text
* **dependencies**: [MetadataDependencies](#metadatadependencies): Dependencies for the content item, what other content items it requires to work.  Can describe more complex dependencies using a recursive/nested structure. For a single dependency an id/kind/version can be supplied or operator/criteria for complex formats.
* **displayName**: string: The display name of the template
* **firstPublishDate**: string: first publish date content item
* **icon**: string: the icon identifier. this id can later be fetched from the content metadata
* **isDeprecated**: 'false' | 'true' | string (ReadOnly): Flag indicates if this template is deprecated
* **lastPublishDate**: string: last publish date for the content item
* **packagedContent**: any: The json of the ARM template to deploy
* **packageId**: string: the package Id contains this template
* **packageKind**: 'Solution' | 'Standalone' | string: the packageKind of the package contains this template
* **packageName**: string: the name of the package contains this template
* **packageVersion**: string: Version of the package.  Default and recommended format is numeric (e.g. 1, 1.0, 1.0.0, 1.0.0.0), following ARM metadata best practices.  Can also be any string, but then we cannot guarantee any version checks
* **previewImages**: string[]: preview image file names. These will be taken from the solution artifacts
* **previewImagesDark**: string[]: preview image file names. These will be taken from the solution artifacts. used for dark theme support
* **providers**: string[]: Providers for the content item
* **source**: [MetadataSource](#metadatasource): Source of the content.  This is where/how it was created.
* **support**: [MetadataSupport](#metadatasupport): Support information for the template - type, name, contact information
* **threatAnalysisTactics**: string[]: the tactics the resource covers
* **threatAnalysisTechniques**: string[]: the techniques the resource covers, these have to be aligned with the tactics being used
* **version**: string: Version of the content.  Default and recommended format is numeric (e.g. 1, 1.0, 1.0.0, 1.0.0.0), following ARM metadata best practices.  Can also be any string, but then we cannot guarantee any version checks

## PullRequest
### Properties
* **state**: 'Closed' | 'Open' | string (ReadOnly): State of the pull request
* **url**: string (ReadOnly): URL of pull request

## RelationProperties
### Properties
* **relatedResourceId**: string (Required): The resource ID of the related resource
* **relatedResourceKind**: string (ReadOnly): The resource kind of the related resource
* **relatedResourceName**: string (ReadOnly): The name of the related resource
* **relatedResourceType**: string (ReadOnly): The resource type of the related resource

## Repository
### Properties
* **branch**: string (Required): Branch name of repository.
* **deploymentLogsUrl**: string (ReadOnly): Url to access repository action logs.
* **displayUrl**: string: Display url of repository.
* **url**: string (Required): Url of repository.

## RepositoryAccess
### Properties
* **clientId**: string: OAuth ClientId. Required when `kind` is `OAuth`
* **code**: string {sensitive}: OAuth Code. Required when `kind` is `OAuth`
* **installationId**: string: Application installation ID. Required when `kind` is `App`. Supported by `GitHub` only.
* **kind**: 'App' | 'OAuth' | 'PAT' | string (Required): The kind of repository access credentials
* **state**: string {sensitive}: OAuth State. Required when `kind` is `OAuth`
* **token**: string {sensitive}: Personal Access Token. Required when `kind` is `PAT`

## RepositoryResourceInfo
### Properties
* **azureDevOpsResourceInfo**: [AzureDevOpsResourceInfo](#azuredevopsresourceinfo) (ReadOnly): Resources created in Azure DevOps for this source-control.
* **gitHubResourceInfo**: [GitHubResourceInfo](#githubresourceinfo) (ReadOnly): Resources created in GitHub for this source-control.
* **webhook**: [Webhook](#webhook): The webhook object created for the source-control.

## ResourceProviderRequiredPermissions
### Properties
* **action**: bool: Gets or sets a value indicating whether the permission is custom actions (POST).
* **delete**: bool: Gets or sets a value indicating whether the permission is delete action (DELETE).
* **read**: bool: Gets or sets a value indicating whether the permission is read action (GET).
* **write**: bool: Gets or sets a value indicating whether the permission is write action (PUT or PATCH).

## RestApiPollerDataConnectorProperties
### Properties
* **addOnAttributes**: [RestApiPollerDataConnectorPropertiesAddOnAttributes](#restapipollerdataconnectorpropertiesaddonattributes): The add on attributes. The key name will become attribute name (a column) and the value will become the attribute value in the payload.
* **auth**: [CcpAuthConfig](#ccpauthconfig) (Required): The a authentication model.
* **connectorDefinitionName**: string (Required): The connector definition name (the dataConnectorDefinition resource id).
* **dataType**: string: The Log Analytics table destination.
* **dcrConfig**: [DCRConfiguration](#dcrconfiguration): The DCR related properties.
* **isActive**: bool: Indicates whether the connector is active or not.
* **paging**: [RestApiPollerRequestPagingConfig](#restapipollerrequestpagingconfig): The paging configuration.
* **request**: [RestApiPollerRequestConfig](#restapipollerrequestconfig) (Required): The request configuration.
* **response**: [CcpResponseConfig](#ccpresponseconfig): The response configuration.

## RestApiPollerDataConnectorPropertiesAddOnAttributes
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RestApiPollerRequestConfig
### Properties
* **apiEndpoint**: string (Required): The API endpoint.
* **endTimeAttributeName**: string: The query parameter name which the remote server expect to end query. This property goes hand to hand with `startTimeAttributeName`
* **headers**: [RestApiPollerRequestConfigHeaders](#restapipollerrequestconfigheaders): The header for the request for the remote server.
* **httpMethod**: 'DELETE' | 'GET' | 'POST' | 'PUT' | string: The HTTP method, default value GET.
* **isPostPayloadJson**: bool: Flag to indicate if HTTP POST payload is in JSON format (vs form-urlencoded).
* **queryParameters**: [RestApiPollerRequestConfigQueryParameters](#restapipollerrequestconfigqueryparameters): The HTTP query parameters to RESTful API.
* **queryParametersTemplate**: string: the query parameters template. Defines the query parameters template to use when passing query parameters in advanced scenarios.
* **queryTimeFormat**: string: The query time format. A remote server can have a query to pull data from range 'start' to 'end'. This property indicate what is the expected time format the remote server know to parse.
* **queryTimeIntervalAttributeName**: string: The query parameter name which we need to send the server for query logs in time interval. Should be defined with `queryTimeIntervalPrepend` and `queryTimeIntervalDelimiter`
* **queryTimeIntervalDelimiter**: string: The delimiter string between 2 QueryTimeFormat in the query parameter `queryTimeIntervalAttributeName`.
* **queryTimeIntervalPrepend**: string: The string prepend to the value of the query parameter in `queryTimeIntervalAttributeName`.
* **queryWindowInMin**: int: The query window in minutes for the request.
* **rateLimitQPS**: int: The Rate limit queries per second for the request..
* **retryCount**: int: The retry count.
* **startTimeAttributeName**: string: The query parameter name which the remote server expect to start query. This property goes hand to hand with `endTimeAttributeName`.
* **timeoutInSeconds**: int: The timeout in seconds.

## RestApiPollerRequestConfigHeaders
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RestApiPollerRequestConfigQueryParameters
### Properties
### Additional Properties
* **Additional Properties Type**: any

## RestApiPollerRequestPagingConfig
### Properties
* **pageSize**: int: Page size
* **pageSizeParameterName**: string: Page size parameter name
* **pagingType**: 'CountBasedPaging' | 'LinkHeader' | 'NextPageToken' | 'NextPageUrl' | 'Offset' | 'PersistentLinkHeader' | 'PersistentToken' | string (Required): Type of paging

## ScheduledAlertRuleCommonPropertiesCustomDetails
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScheduledAlertRuleProperties
### Properties
* **alertDetailsOverride**: [AlertDetailsOverride](#alertdetailsoverride): The alert details override settings
* **alertRuleTemplateName**: string: The Name of the alert rule template used to create this rule.
* **customDetails**: [ScheduledAlertRuleCommonPropertiesCustomDetails](#scheduledalertrulecommonpropertiescustomdetails): Dictionary of string key-value pairs of columns to be attached to the alert
* **description**: string: The description of the alert rule.
* **displayName**: string (Required): The display name for alerts created by this alert rule.
* **enabled**: bool (Required): Determines whether this alert rule is enabled or disabled.
* **entityMappings**: [EntityMapping](#entitymapping)[]: Array of the entity mappings of the alert rule
* **eventGroupingSettings**: [EventGroupingSettings](#eventgroupingsettings): The event grouping settings.
* **incidentConfiguration**: [IncidentConfiguration](#incidentconfiguration): The settings of the incidents that created from alerts triggered by this analytics rule
* **lastModifiedUtc**: string (ReadOnly): The last time that this alert rule has been modified.
* **query**: string: The query that creates alerts for this rule.
* **queryFrequency**: string: The frequency (in ISO 8601 duration format) for this alert rule to run.
* **queryPeriod**: string: The period (in ISO 8601 duration format) that this alert rule looks at.
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string: The severity for alerts created by this alert rule.
* **suppressionDuration**: string (Required): The suppression (in ISO 8601 duration format) to wait since last time this alert rule been triggered.
* **suppressionEnabled**: bool (Required): Determines whether the suppression for this alert rule is enabled or disabled.
* **tactics**: ('Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'ImpairProcessControl' | 'InhibitResponseFunction' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Reconnaissance' | 'ResourceDevelopment' | string)[]: The tactics of the alert rule
* **techniques**: string[]: The techniques of the alert rule
* **templateVersion**: string: The version of the alert rule template used to create this rule - in format <a.b.c>, where all are numbers, for example 0 <1.0.2>
* **triggerOperator**: 'Equal' | 'GreaterThan' | 'LessThan' | 'NotEqual': The operation against the threshold that triggers alert rule.
* **triggerThreshold**: int: The threshold triggers this alert rule.

## ScheduledAlertRuleTemplateProperties
### Properties
* **alertDetailsOverride**: [AlertDetailsOverride](#alertdetailsoverride): The alert details override settings
* **alertRulesCreatedByTemplateCount**: int: the number of alert rules that were created by this template
* **createdDateUTC**: string (ReadOnly): The time that this alert rule template has been added.
* **customDetails**: [ScheduledAlertRuleTemplatePropertiesCustomDetails](#scheduledalertruletemplatepropertiescustomdetails): Dictionary of string key-value pairs of columns to be attached to the alert
* **description**: string: The description of the alert rule template.
* **displayName**: string: The display name for alert rule template.
* **entityMappings**: [EntityMapping](#entitymapping)[]: Array of the entity mappings of the alert rule
* **eventGroupingSettings**: [EventGroupingSettings](#eventgroupingsettings): The event grouping settings.
* **lastUpdatedDateUTC**: string (ReadOnly): The time that this alert rule template was last updated.
* **query**: string: The query that creates alerts for this rule.
* **queryFrequency**: string: The frequency (in ISO 8601 duration format) for this alert rule to run.
* **queryPeriod**: string: The period (in ISO 8601 duration format) that this alert rule looks at.
* **requiredDataConnectors**: [AlertRuleTemplateDataSource](#alertruletemplatedatasource)[]: The required data connectors for this template
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string: The severity for alerts created by this alert rule.
* **status**: 'Available' | 'Installed' | 'NotAvailable' | string: The alert rule template status.
* **tactics**: ('Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'ImpairProcessControl' | 'InhibitResponseFunction' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Reconnaissance' | 'ResourceDevelopment' | string)[]: The tactics of the alert rule template
* **techniques**: string[]: The techniques of the alert rule template
* **triggerOperator**: 'Equal' | 'GreaterThan' | 'LessThan' | 'NotEqual': The operation against the threshold that triggers alert rule.
* **triggerThreshold**: int: The threshold triggers this alert rule.
* **version**: string: The version of this template - in format <a.b.c>, where all are numbers. For example <1.0.2>.

## ScheduledAlertRuleTemplatePropertiesCustomDetails
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SecurityMLAnalyticsSettingsDataSource
### Properties
* **connectorId**: string: The connector id that provides the following data types
* **dataTypes**: string[]: The data types used by the security ml analytics settings

## SentinelOnboardingStateProperties
### Properties
* **customerManagedKey**: bool: Flag that indicates the status of the CMK setting

## ServicePrincipal
### Properties
* **appId**: string (ReadOnly): App id of service principal.
* **credentialsExpireOn**: string: Expiration time of service principal credentials.
* **id**: string (ReadOnly): Id of service principal.
* **tenantId**: string (ReadOnly): Tenant id of service principal.

## SessionAuthModelHeaders
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SessionAuthModelPassword
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SessionAuthModelQueryParameters
### Properties
### Additional Properties
* **Additional Properties Type**: any

## SessionAuthModelUserName
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SourceControlProperties
### Properties
* **contentTypes**: ('AnalyticsRule' | 'AutomationRule' | 'HuntingQuery' | 'Parser' | 'Playbook' | 'Workbook' | string)[] (Required): Array of source control content types.
* **description**: string: A description of the source control
* **displayName**: string (Required): The display name of the source control
* **id**: string (ReadOnly): The id (a Guid) of the source control
* **lastDeploymentInfo**: [DeploymentInfo](#deploymentinfo) (ReadOnly): Information regarding the latest deployment for the source control.
* **pullRequest**: [PullRequest](#pullrequest) (ReadOnly): Information regarding the pull request of the source control.
* **repository**: [Repository](#repository) (Required): Repository metadata.
* **repositoryAccess**: [RepositoryAccess](#repositoryaccess) (WriteOnly): Repository access credentials. This is write-only object and it never returns back to a user.
* **repositoryResourceInfo**: [RepositoryResourceInfo](#repositoryresourceinfo): Information regarding the resources created in user's repository.
* **repoType**: 'AzureDevOps' | 'Github' | string (Required): The repository type of the source control
* **servicePrincipal**: [ServicePrincipal](#serviceprincipal): Service principal metadata.
* **version**: 'V1' | 'V2' | string (ReadOnly): The version number associated with the source control
* **workloadIdentityFederation**: [WorkloadIdentityFederation](#workloadidentityfederation) (ReadOnly): Workload Identity metadata.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TemplateProperties
### Properties
* **author**: [MetadataAuthor](#metadataauthor): The creator of the content item.
* **categories**: [MetadataCategories](#metadatacategories): Categories for the item
* **contentId**: string: Static ID for the content.  Used to identify dependencies and content from solutions or community.  Hard-coded/static for out of the box content and solutions. Dynamic for user-created.  This is the resource name
* **contentKind**: 'AnalyticsRule' | 'AnalyticsRuleTemplate' | 'AutomationRule' | 'AzureFunction' | 'DataConnector' | 'DataType' | 'HuntingQuery' | 'InvestigationQuery' | 'LogicAppsCustomConnector' | 'Notebook' | 'Parser' | 'Playbook' | 'PlaybookTemplate' | 'ResourcesDataConnector' | 'Solution' | 'Standalone' | 'SummaryRule' | 'Watchlist' | 'WatchlistTemplate' | 'Workbook' | 'WorkbookTemplate' | string: The kind of content the template is for.
* **contentProductId**: string: Unique ID for the content. It should be generated based on the contentId of the package, contentId of the template, contentKind of the template and the contentVersion of the template
* **contentSchemaVersion**: string: Schema version of the content. Can be used to distinguish between different flow based on the schema version
* **customVersion**: string: The custom version of the content. A optional free text
* **dependantTemplates**: [TemplateProperties](#templateproperties)[] (ReadOnly): Dependant templates. Expandable.
* **dependencies**: [MetadataDependencies](#metadatadependencies): Dependencies for the content item, what other content items it requires to work.  Can describe more complex dependencies using a recursive/nested structure. For a single dependency an id/kind/version can be supplied or operator/criteria for complex formats.
* **displayName**: string: The display name of the template
* **firstPublishDate**: string: first publish date content item
* **icon**: string: the icon identifier. this id can later be fetched from the content metadata
* **isDeprecated**: 'false' | 'true' | string (ReadOnly): Flag indicates if this template is deprecated
* **lastPublishDate**: string: last publish date for the content item
* **mainTemplate**: any: The JSON of the ARM template to deploy active content. Expandable.
* **packageId**: string: the package Id contains this template
* **packageKind**: 'Solution' | 'Standalone' | string: the packageKind of the package contains this template
* **packageName**: string: the name of the package contains this template
* **packageVersion**: string: Version of the package.  Default and recommended format is numeric (e.g. 1, 1.0, 1.0.0, 1.0.0.0), following ARM metadata best practices.  Can also be any string, but then we cannot guarantee any version checks
* **previewImages**: string[]: preview image file names. These will be taken from the solution artifacts
* **previewImagesDark**: string[]: preview image file names. These will be taken from the solution artifacts. used for dark theme support
* **providers**: string[]: Providers for the content item
* **source**: [MetadataSource](#metadatasource): Source of the content.  This is where/how it was created.
* **support**: [MetadataSupport](#metadatasupport): Support information for the template - type, name, contact information
* **threatAnalysisTactics**: string[]: the tactics the resource covers
* **threatAnalysisTechniques**: string[]: the techniques the resource covers, these have to be aligned with the tactics being used
* **version**: string: Version of the content.  Default and recommended format is numeric (e.g. 1, 1.0, 1.0.0, 1.0.0.0), following ARM metadata best practices.  Can also be any string, but then we cannot guarantee any version checks

## ThreatIntelligenceExternalReference
### Properties
* **description**: string: External reference description
* **externalId**: string: External reference ID
* **hashes**: [ThreatIntelligenceExternalReferenceHashes](#threatintelligenceexternalreferencehashes): External reference hashes
* **sourceName**: string: External reference source name
* **url**: string: External reference URL

## ThreatIntelligenceExternalReferenceHashes
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ThreatIntelligenceGranularMarkingModel
### Properties
* **language**: string: Language granular marking model
* **markingRef**: int: marking reference granular marking model
* **selectors**: string[]: granular marking model selectors

## ThreatIntelligenceIndicatorProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **confidence**: int: Confidence of threat intelligence entity
* **created**: string: Created by
* **createdByRef**: string: Created by reference of threat intelligence entity
* **defanged**: bool: Is threat intelligence entity defanged
* **description**: string: Description of a threat intelligence entity
* **displayName**: string: Display name of a threat intelligence entity
* **extensions**: [ThreatIntelligenceIndicatorPropertiesExtensions](#threatintelligenceindicatorpropertiesextensions): Extensions map
* **externalId**: string: External ID of threat intelligence entity
* **externalLastUpdatedTimeUtc**: string: External last updated time in UTC
* **externalReferences**: [ThreatIntelligenceExternalReference](#threatintelligenceexternalreference)[]: External References
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **granularMarkings**: [ThreatIntelligenceGranularMarkingModel](#threatintelligencegranularmarkingmodel)[]: Granular Markings
* **indicatorTypes**: string[]: Indicator types of threat intelligence entities
* **killChainPhases**: [ThreatIntelligenceKillChainPhase](#threatintelligencekillchainphase)[]: Kill chain phases
* **labels**: string[]: Labels  of threat intelligence entity
* **language**: string: Language of threat intelligence entity
* **lastUpdatedTimeUtc**: string: Last updated time in UTC
* **modified**: string: Modified by
* **objectMarkingRefs**: string[]: Threat intelligence entity object marking references
* **parsedPattern**: [ThreatIntelligenceParsedPattern](#threatintelligenceparsedpattern)[]: Parsed patterns
* **pattern**: string: Pattern of a threat intelligence entity
* **patternType**: string: Pattern type of a threat intelligence entity
* **patternVersion**: string: Pattern version of a threat intelligence entity
* **revoked**: bool: Is threat intelligence entity revoked
* **source**: string: Source of a threat intelligence entity
* **threatIntelligenceTags**: string[]: List of tags
* **threatTypes**: string[]: Threat types
* **validFrom**: string: Valid from
* **validUntil**: string: Valid until

## ThreatIntelligenceIndicatorPropertiesExtensions
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ThreatIntelligenceKillChainPhase
### Properties
* **killChainName**: string: Kill chainName name
* **phaseName**: string: Phase name

## ThreatIntelligenceParsedPattern
### Properties
* **patternTypeKey**: string: Pattern type key
* **patternTypeValues**: [ThreatIntelligenceParsedPatternTypeValue](#threatintelligenceparsedpatterntypevalue)[]: Pattern type keys

## ThreatIntelligenceParsedPatternTypeValue
### Properties
* **value**: string: Value of parsed pattern
* **valueType**: string: Type of the value

## TIDataConnectorDataTypes
### Properties
* **indicators**: [TIDataConnectorDataTypesIndicators](#tidataconnectordatatypesindicators): Data type for indicators connection.

## TIDataConnectorDataTypesIndicators
### Properties
* **state**: 'Disabled' | 'Enabled' | string: Describe whether this data type connection is enabled or not.

## TIDataConnectorProperties
### Properties
* **dataTypes**: [TIDataConnectorDataTypes](#tidataconnectordatatypes): The available data types for the connector.
* **tenantId**: string: The tenant id to connect to, and get the data from.
* **tipLookbackPeriod**: string: The lookback period for the feed to be imported.

## UserInfo
### Properties
* **email**: string (ReadOnly): The email of the user.
* **name**: string (ReadOnly): The name of the user.
* **objectId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: The object id of the user.

## WatchlistItemProperties
### Properties
* **created**: string: The time the watchlist item was created
* **createdBy**: [UserInfo](#userinfo): Describes a user that created the watchlist item
* **entityMapping**: any: key-value pairs for a watchlist item entity mapping
* **isDeleted**: bool: A flag that indicates if the watchlist item is deleted or not
* **itemsKeyValue**: any (Required): key-value pairs for a watchlist item
* **tenantId**: string: The tenantId to which the watchlist item belongs to
* **updated**: string: The last time the watchlist item was updated
* **updatedBy**: [UserInfo](#userinfo): Describes a user that updated the watchlist item
* **watchlistItemId**: string: The id (a Guid) of the watchlist item
* **watchlistItemType**: string: The type of the watchlist item

## WatchlistProperties
### Properties
* **contentType**: string: The content type of the raw content. Example : text/csv or text/tsv
* **created**: string: The time the watchlist was created
* **createdBy**: [UserInfo](#userinfo): Describes a user that created the watchlist
* **defaultDuration**: string: The default duration of a watchlist (in ISO 8601 duration format)
* **description**: string: A description of the watchlist
* **displayName**: string (Required): The display name of the watchlist
* **isDeleted**: bool: A flag that indicates if the watchlist is deleted or not
* **itemsSearchKey**: string (Required): The search key is used to optimize query performance when using watchlists for joins with other data. For example, enable a column with IP addresses to be the designated SearchKey field, then use this field as the key field when joining to other event data by IP address.
* **labels**: string[]: List of labels relevant to this watchlist
* **numberOfLinesToSkip**: int: The number of lines in a csv/tsv content to skip before the header
* **provider**: string (Required): The provider of the watchlist
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'New' | 'Succeeded' | 'Uploading' | string (ReadOnly): Describes provisioning state
* **rawContent**: string: The raw content that represents to watchlist items to create. In case of csv/tsv content type, it's the content of the file that will parsed by the endpoint
* **source**: string: The filename of the watchlist, called 'source'
* **sourceType**: 'AzureStorage' | 'Local' | string: The sourceType of the watchlist
* **tenantId**: string: The tenantId where the watchlist belongs to
* **updated**: string: The last time the watchlist was updated
* **updatedBy**: [UserInfo](#userinfo): Describes a user that updated the watchlist
* **uploadStatus**: string: The status of the Watchlist upload : New, InProgress or Complete. **Note** : When a Watchlist upload status is InProgress, the Watchlist cannot be deleted
* **watchlistAlias**: string: The alias of the watchlist
* **watchlistId**: string: The id (a Guid) of the watchlist
* **watchlistType**: string: The type of the watchlist

## Webhook
### Properties
* **rotateWebhookSecret**: bool: A flag to instruct the backend service to rotate webhook secret.
* **webhookId**: string (ReadOnly): Unique identifier for the webhook.
* **webhookSecretUpdateTime**: string (ReadOnly): Time when the webhook secret was updated.
* **webhookUrl**: string (ReadOnly): URL that gets invoked by the webhook.

## WorkloadIdentityFederation
### Properties
* **appId**: string (ReadOnly): App id of Workload Identity Federation.
* **id**: string (ReadOnly): Id of Workload Identity Federation.
* **issuer**: string (ReadOnly): Issuer of Workload Identity Federation.
* **subject**: string (ReadOnly): Subject of Workload Identity Federation.
* **tenantId**: string (ReadOnly): Tenant id of Workload Identity Federation.

