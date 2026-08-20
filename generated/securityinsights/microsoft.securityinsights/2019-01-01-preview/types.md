# Microsoft.SecurityInsights @ 2019-01-01-preview

## Resource Microsoft.SecurityInsights/aggregations@2019-01-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'CasesAggregation' | string (ReadOnly): The kind of the setting
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.SecurityInsights/aggregations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/alertRules@2019-01-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Fusion' | 'MLBehaviorAnalytics' | 'MicrosoftSecurityIncidentCreation' | 'Scheduled' | 'ThreatIntelligence' | string (Required): The kind of the alert rule
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.SecurityInsights/alertRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/alertRules/actions@2019-01-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ActionRequestPropertiesOrActionResponseProperties](#actionrequestpropertiesoractionresponseproperties): Action properties for put request
* **systemData**: [SystemData](#systemdata) (ReadOnly, WriteOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/alertRules/actions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/alertRuleTemplates@2019-01-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Fusion' | 'MLBehaviorAnalytics' | 'MicrosoftSecurityIncidentCreation' | 'Scheduled' | 'ThreatIntelligence' | string (ReadOnly): The kind of the alert rule
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.SecurityInsights/alertRuleTemplates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/automationRules@2019-01-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AutomationRuleProperties](#automationruleproperties): Automation rule properties
* **type**: 'Microsoft.SecurityInsights/automationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/bookmarks@2019-01-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BookmarkProperties](#bookmarkproperties): Bookmark properties
* **type**: 'Microsoft.SecurityInsights/bookmarks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/bookmarks/relations@2019-01-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelationProperties](#relationproperties): Relation properties
* **type**: 'Microsoft.SecurityInsights/bookmarks/relations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/cases@2019-01-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CaseProperties](#caseproperties): Case properties
* **type**: 'Microsoft.SecurityInsights/cases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/cases/comments@2019-01-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CaseCommentProperties](#casecommentproperties): Case comment properties
* **type**: 'Microsoft.SecurityInsights/cases/comments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/cases/relations@2019-01-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: ETag for relation
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'CasesToBookmarks' | string (ReadOnly): The type of relation node
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelationsModelInputPropertiesOrCaseRelationProperties](#relationsmodelinputpropertiesorcaserelationproperties): Relation input properties
* **type**: 'Microsoft.SecurityInsights/cases/relations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/dataConnectors@2019-01-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'AmazonWebServicesCloudTrail' | 'AzureActiveDirectory' | 'AzureAdvancedThreatProtection' | 'AzureSecurityCenter' | 'Dynamics365' | 'MicrosoftCloudAppSecurity' | 'MicrosoftDefenderAdvancedThreatProtection' | 'MicrosoftThreatIntelligence' | 'MicrosoftThreatProtection' | 'Office365' | 'OfficeATP' | 'ThreatIntelligence' | 'ThreatIntelligenceTaxii' | string (Required): The kind of the data connector
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.SecurityInsights/dataConnectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/entities@2019-01-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Account' | 'AzureResource' | 'Bookmark' | 'CloudApplication' | 'DnsResolution' | 'File' | 'FileHash' | 'Host' | 'IoTDevice' | 'Ip' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityAlert' | 'SecurityGroup' | 'SubmissionMail' | 'Url' | string (ReadOnly): The kind of the entity.
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.SecurityInsights/entities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/entities/relations@2019-01-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelationProperties](#relationproperties) (ReadOnly): Relation properties
* **type**: 'Microsoft.SecurityInsights/entities/relations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/entityQueries@2019-01-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Expansion' | 'Insight' | string (ReadOnly): The kind of the entity query
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.SecurityInsights/entityQueries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/incidents@2019-01-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IncidentProperties](#incidentproperties): Incident properties
* **type**: 'Microsoft.SecurityInsights/incidents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/incidents/comments@2019-01-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IncidentCommentProperties](#incidentcommentproperties): Incident comment properties
* **type**: 'Microsoft.SecurityInsights/incidents/comments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/incidents/relations@2019-01-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelationProperties](#relationproperties): Relation properties
* **type**: 'Microsoft.SecurityInsights/incidents/relations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/officeConsents@2019-01-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OfficeConsentProperties](#officeconsentproperties) (ReadOnly): Office consent properties
* **type**: 'Microsoft.SecurityInsights/officeConsents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/settings@2019-01-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Anomalies' | 'EntityAnalytics' | 'EyesOn' | 'Ueba' | string (Required): The kind of the setting
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.SecurityInsights/settings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/threatIntelligence/indicators@2019-01-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'indicator' | string (Required): The kind of the entity.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ThreatIntelligenceIndicatorProperties](#threatintelligenceindicatorproperties) (WriteOnly): Threat Intelligence Entity properties
* **type**: 'Microsoft.SecurityInsights/threatIntelligence/indicators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/watchlists@2019-01-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WatchlistProperties](#watchlistproperties): Watchlist properties
* **type**: 'Microsoft.SecurityInsights/watchlists' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/watchlists/watchlistItems@2019-01-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WatchlistItemProperties](#watchlistitemproperties): Watchlist Item properties
* **type**: 'Microsoft.SecurityInsights/watchlists/watchlistItems' (ReadOnly, DeployTimeConstant): The resource type

## Function alerts (Microsoft.SecurityInsights/incidents@2019-01-01-preview)
* **Resource**: Microsoft.SecurityInsights/incidents
* **ApiVersion**: 2019-01-01-preview
* **Output**: [IncidentAlertList](#incidentalertlist)

## Function bookmarks (Microsoft.SecurityInsights/incidents@2019-01-01-preview)
* **Resource**: Microsoft.SecurityInsights/incidents
* **ApiVersion**: 2019-01-01-preview
* **Output**: [IncidentBookmarkList](#incidentbookmarklist)

## Function createIndicator (Microsoft.SecurityInsights/threatIntelligence@2019-01-01-preview)
* **Resource**: Microsoft.SecurityInsights/threatIntelligence
* **ApiVersion**: 2019-01-01-preview
* **Input**: [ThreatIntelligenceIndicatorModelForRequestBody](#threatintelligenceindicatormodelforrequestbody)
* **Output**: [ThreatIntelligenceInformation](#threatintelligenceinformation)

## Function entities (Microsoft.SecurityInsights/incidents@2019-01-01-preview)
* **Resource**: Microsoft.SecurityInsights/incidents
* **ApiVersion**: 2019-01-01-preview
* **Output**: [IncidentEntitiesResponse](#incidententitiesresponse)

## Function expand (Microsoft.SecurityInsights/bookmarks@2019-01-01-preview)
* **Resource**: Microsoft.SecurityInsights/bookmarks
* **ApiVersion**: 2019-01-01-preview
* **Input**: [BookmarkExpandParameters](#bookmarkexpandparameters)
* **Output**: [BookmarkExpandResponse](#bookmarkexpandresponse)

## Function expand (Microsoft.SecurityInsights/entities@2019-01-01-preview)
* **Resource**: Microsoft.SecurityInsights/entities
* **ApiVersion**: 2019-01-01-preview
* **Input**: [EntityExpandParameters](#entityexpandparameters)
* **Output**: [EntityExpandResponse](#entityexpandresponse)

## Function getInsights (Microsoft.SecurityInsights/entities@2019-01-01-preview)
* **Resource**: Microsoft.SecurityInsights/entities
* **ApiVersion**: 2019-01-01-preview
* **Input**: [EntityGetInsightsParameters](#entitygetinsightsparameters)
* **Output**: [EntityGetInsightsResponse](#entitygetinsightsresponse)

## Function getTimeline (Microsoft.SecurityInsights/entities@2019-01-01-preview)
* **Resource**: Microsoft.SecurityInsights/entities
* **ApiVersion**: 2019-01-01-preview
* **Input**: [EntityTimelineParameters](#entitytimelineparameters)
* **Output**: [EntityTimelineResponse](#entitytimelineresponse)

## Function queryIndicators (Microsoft.SecurityInsights/threatIntelligence@2019-01-01-preview)
* **Resource**: Microsoft.SecurityInsights/threatIntelligence
* **ApiVersion**: 2019-01-01-preview
* **Input**: [ThreatIntelligenceFilteringCriteria](#threatintelligencefilteringcriteria)
* **Output**: [ThreatIntelligenceInformationList](#threatintelligenceinformationlist)

## Function replaceTags (Microsoft.SecurityInsights/threatIntelligence/indicators@2019-01-01-preview)
* **Resource**: Microsoft.SecurityInsights/threatIntelligence/indicators
* **ApiVersion**: 2019-01-01-preview
* **Input**: [ThreatIntelligenceIndicatorModelForRequestBody](#threatintelligenceindicatormodelforrequestbody)
* **Output**: [ThreatIntelligenceInformation](#threatintelligenceinformation)

## ActionRequestPropertiesOrActionResponseProperties
### Properties
* **logicAppResourceId**: string (Required): Logic App Resource Id, /subscriptions/{my-subscription}/resourceGroups/{my-resource-group}/providers/Microsoft.Logic/workflows/{my-workflow-id}.
* **triggerUri**: string (Required, WriteOnly): Logic App Callback URL for this specific workflow.
* **workflowId**: string (ReadOnly): The name of the logic app's workflow.

## AutomationRuleAction
* **Discriminator**: actionType

### Base Properties
* **order**: int (Required): The order of execution of the automation rule action

### AutomationRuleModifyPropertiesAction
#### Properties
* **actionConfiguration**: [AutomationRuleModifyPropertiesActionConfiguration](#automationrulemodifypropertiesactionconfiguration) (Required): The configuration of the modify properties automation rule action
* **actionType**: 'ModifyProperties' (Required): The type of the automation rule action

### AutomationRuleRunPlaybookAction
#### Properties
* **actionConfiguration**: [AutomationRuleRunPlaybookActionConfiguration](#automationrulerunplaybookactionconfiguration) (Required): The configuration of the run playbook automation rule action
* **actionType**: 'RunPlaybook' (Required): The type of the automation rule action


## AutomationRuleCondition
* **Discriminator**: conditionType

### Base Properties

### AutomationRulePropertyValuesCondition
#### Properties
* **conditionProperties**: [AutomationRulePropertyValuesConditionProperties](#automationrulepropertyvaluesconditionproperties) (Required): The configuration of the automation rule condition
* **conditionType**: 'Property' (Required): The type of the automation rule condition


## AutomationRuleModifyPropertiesActionConfiguration
### Properties
* **classification**: 'BenignPositive' | 'FalsePositive' | 'TruePositive' | 'Undetermined' | string: The reason the incident was closed
* **classificationComment**: string: Describes the reason the incident was closed
* **classificationReason**: 'InaccurateData' | 'IncorrectAlertLogic' | 'SuspiciousActivity' | 'SuspiciousButExpected' | string: The classification reason to close the incident with
* **labels**: [IncidentLabel](#incidentlabel)[]: List of labels to add to the incident
* **owner**: [IncidentOwnerInfo](#incidentownerinfo): Describes a user that the incident is assigned to
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string: The severity of the incident
* **status**: 'Active' | 'Closed' | 'New' | string: The status of the incident

## AutomationRuleProperties
### Properties
* **actions**: [AutomationRuleAction](#automationruleaction)[] (Required): The actions to execute when the automation rule is triggered
* **createdBy**: [ClientInfo](#clientinfo) (ReadOnly): Describes the client that created the automation rule
* **createdTimeUtc**: string (ReadOnly): The time the automation rule was created
* **displayName**: string (Required): The display name of the automation  rule
* **lastModifiedBy**: [ClientInfo](#clientinfo) (ReadOnly): Describes the client that last updated the automation rule
* **lastModifiedTimeUtc**: string (ReadOnly): The last time the automation rule was updated
* **order**: int (Required): The order of execution of the automation rule
* **triggeringLogic**: [AutomationRuleTriggeringLogic](#automationruletriggeringlogic) (Required): The triggering logic of the automation rule

## AutomationRulePropertyValuesConditionProperties
### Properties
* **operator**: 'Contains' | 'EndsWith' | 'Equals' | 'NotContains' | 'NotEndsWith' | 'NotEquals' | 'NotStartsWith' | 'StartsWith' | string: The operator to use for evaluation the condition
* **propertyName**: 'AccountAadTenantId' | 'AccountAadUserId' | 'AccountNTDomain' | 'AccountName' | 'AccountObjectGuid' | 'AccountPUID' | 'AccountSid' | 'AccountUPNSuffix' | 'AzureResourceResourceId' | 'AzureResourceSubscriptionId' | 'CloudApplicationAppId' | 'CloudApplicationAppName' | 'DNSDomainName' | 'FileDirectory' | 'FileHashValue' | 'FileName' | 'HostAzureID' | 'HostNTDomain' | 'HostName' | 'HostNetBiosName' | 'HostOSVersion' | 'IPAddress' | 'IncidentDescription' | 'IncidentProviderName' | 'IncidentRelatedAnalyticRuleIds' | 'IncidentSeverity' | 'IncidentStatus' | 'IncidentTactics' | 'IncidentTitle' | 'IoTDeviceId' | 'IoTDeviceModel' | 'IoTDeviceName' | 'IoTDeviceOperatingSystem' | 'IoTDeviceType' | 'IoTDeviceVendor' | 'MailMessageDeliveryAction' | 'MailMessageDeliveryLocation' | 'MailMessageP1Sender' | 'MailMessageP2Sender' | 'MailMessageRecipient' | 'MailMessageSenderIP' | 'MailMessageSubject' | 'MailboxDisplayName' | 'MailboxPrimaryAddress' | 'MailboxUPN' | 'MalwareCategory' | 'MalwareName' | 'ProcessCommandLine' | 'ProcessId' | 'RegistryKey' | 'RegistryValueData' | 'Url' | string: The property to evaluate
* **propertyValues**: string[]: The values to use for evaluating the condition

## AutomationRuleRunPlaybookActionConfiguration
### Properties
* **logicAppResourceId**: string: The resource id of the playbook resource
* **tenantId**: string: The tenant id of the playbook resource

## AutomationRuleTriggeringLogic
### Properties
* **conditions**: [AutomationRuleCondition](#automationrulecondition)[]: The conditions to evaluate to determine if the automation rule should be triggered on a given object
* **expirationTimeUtc**: string: Determines when the automation rule should automatically expire and be disabled.
* **isEnabled**: bool (Required): Determines whether the automation rule is enabled or disabled.
* **triggersOn**: 'Incidents' | string (Required): The type of object the automation rule triggers on
* **triggersWhen**: 'Created' | string (Required): The type of event the automation rule triggers on

## BookmarkExpandParameters
### Properties
* **endTime**: string: The end date filter, so the only expansion results returned are before this date.
* **expansionId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: The Id of the expansion to perform.
* **startTime**: string: The start date filter, so the only expansion results returned are after this date.

## BookmarkExpandResponse
### Properties
* **metaData**: [ExpansionResultsMetadata](#expansionresultsmetadata): The metadata from the expansion operation results.
* **value**: [BookmarkExpandResponseValue](#bookmarkexpandresponsevalue): The expansion result values.

## BookmarkExpandResponseValue
### Properties
* **edges**: [ConnectedEntity](#connectedentity)[]: Array of expansion result connected entities
* **entities**: [Entity](#entity)[]: Array of the expansion result entities.

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

## CaseCommentProperties
### Properties
* **createdTimeUtc**: string (ReadOnly): The time the comment was created
* **message**: string (Required): The comment message
* **userInfo**: [UserInfo](#userinfo) (ReadOnly): Describes the user that created the comment

## CaseProperties
### Properties
* **caseNumber**: int (ReadOnly): a sequential number
* **closedReasonText**: string: the case close reason details
* **closeReason**: 'Dismissed' | 'FalsePositive' | 'Other' | 'Resolved' | 'TruePositive' | string: The reason the case was closed
* **createdTimeUtc**: string (ReadOnly): The time the case was created
* **description**: string: The description of the case
* **endTimeUtc**: string: The end time of the case
* **labels**: string[]: List of labels relevant to this case
* **lastComment**: string (ReadOnly): the last comment in the case
* **lastUpdatedTimeUtc**: string (ReadOnly): The last time the case was updated
* **metrics**: [CasePropertiesMetrics](#casepropertiesmetrics) (ReadOnly): Dictionary of metrics, for example the number of alerts in the case
* **owner**: [UserInfo](#userinfo): Describes a user that the case is assigned to
* **relatedAlertIds**: string[] (ReadOnly): List of related alert identifiers
* **relatedAlertProductNames**: string[] (ReadOnly): List of related alert product names
* **severity**: 'Critical' | 'High' | 'Informational' | 'Low' | 'Medium' | string (Required): The severity of the case
* **startTimeUtc**: string: The start time of the case
* **status**: 'Closed' | 'Draft' | 'InProgress' | 'New' | string (Required): The status of the case
* **tactics**: ('Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | string)[] (ReadOnly): The tactics associated with case
* **title**: string (Required): The title of the case
* **totalComments**: int (ReadOnly): the number of total comments in the case

## CasePropertiesMetrics
### Properties
### Additional Properties
* **Additional Properties Type**: int

## ClientInfo
### Properties
* **email**: string: The email of the client.
* **name**: string: The name of the client.
* **objectId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: The object id of the client.
* **userPrincipalName**: string: The user principal name of the client.

## ConnectedEntity
### Properties
* **additionalData**: any: key-value pairs for a connected entity mapping
* **targetEntityId**: string: Entity Id of the connected entity

## Entity
### Properties
* **id**: string (ReadOnly): Azure resource Id
* **kind**: 'Account' | 'AzureResource' | 'Bookmark' | 'CloudApplication' | 'DnsResolution' | 'File' | 'FileHash' | 'Host' | 'IoTDevice' | 'Ip' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityAlert' | 'SecurityGroup' | 'SubmissionMail' | 'Url' | string (Required): The kind of the entity.
* **name**: string (ReadOnly): Azure resource name
* **type**: string (ReadOnly): Azure resource type

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityEdges
### Properties
* **additionalData**: [EntityEdgesAdditionalData](#entityedgesadditionaldata): A bag of custom fields that should be part of the entity and will be presented to the user.
* **targetEntityId**: string: The target entity Id.

## EntityEdgesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityExpandParameters
### Properties
* **endTime**: string: The end date filter, so the only expansion results returned are before this date.
* **expansionId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: The Id of the expansion to perform.
* **startTime**: string: The start date filter, so the only expansion results returned are after this date.

## EntityExpandResponse
### Properties
* **metaData**: [ExpansionResultsMetadata](#expansionresultsmetadata): The metadata from the expansion operation results.
* **value**: [EntityExpandResponseValue](#entityexpandresponsevalue): The expansion result values.

## EntityExpandResponseValue
### Properties
* **edges**: [EntityEdges](#entityedges)[]: Array of edges that connects the entity to the list of entities.
* **entities**: [Entity](#entity)[]: Array of the expansion result entities.

## EntityGetInsightsParameters
### Properties
* **addDefaultExtendedTimeRange**: bool: Indicates if query time range should be extended with default time range of the query. Default value is false
* **endTime**: string (Required): The end timeline date, so the results returned are before this date.
* **insightQueryIds**: (string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"})[]: List of Insights Query Id. If empty, default value is all insights of this entity
* **startTime**: string (Required): The start timeline date, so the results returned are after this date.

## EntityGetInsightsResponse
### Properties
* **metaData**: [GetInsightsResultsMetadata](#getinsightsresultsmetadata): The metadata from the get insights operation results.
* **value**: [EntityInsightItem](#entityinsightitem)[]: The insights result values.

## EntityInsightItem
### Properties
* **chartQueryResults**: [InsightsTableResult](#insightstableresult)[]: Query results for table insights query.
* **queryId**: string: The query id of the insight
* **queryTimeInterval**: [EntityInsightItemQueryTimeInterval](#entityinsightitemquerytimeinterval): The Time interval that the query actually executed on.
* **tableQueryResults**: [InsightsTableResult](#insightstableresult): Query results for table insights query.

## EntityInsightItemQueryTimeInterval
### Properties
* **endTime**: string: Insight query end time
* **startTime**: string: Insight query start time

## EntityTimelineItem
* **Discriminator**: kind

### Base Properties

### ActivityTimelineItem
#### Properties
* **bucketEndTimeUTC**: string (Required): The grouping bucket end time.
* **bucketStartTimeUTC**: string (Required): The grouping bucket start time.
* **content**: string (Required): The activity timeline content.
* **firstActivityTimeUTC**: string (Required): The time of the first activity in the grouping bucket.
* **kind**: 'Activity' (Required): The entity query kind type.
* **lastActivityTimeUTC**: string (Required): The time of the last activity in the grouping bucket.
* **queryId**: string (Required): The activity query id.
* **title**: string (Required): The activity timeline title.

### BookmarkTimelineItem
#### Properties
* **azureResourceId**: string (Required): The bookmark azure resource id.
* **createdBy**: [UserInfo](#userinfo): Describes a user that created the bookmark
* **displayName**: string: The bookmark display name.
* **endTimeUtc**: string: The bookmark end time.
* **eventTime**: string: The bookmark event time.
* **kind**: 'Bookmark' (Required): The entity query kind type.
* **labels**: string[]: List of labels relevant to this bookmark
* **notes**: string: The notes of the bookmark
* **startTimeUtc**: string: The bookmark start time.

### SecurityAlertTimelineItem
#### Properties
* **alertType**: string (Required): The name of the alert type.
* **azureResourceId**: string (Required): The alert azure resource id.
* **description**: string: The alert description.
* **displayName**: string (Required): The alert name.
* **endTimeUtc**: string (Required): The alert end time.
* **kind**: 'SecurityAlert' (Required): The entity query kind type.
* **productName**: string: The alert product name.
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (Required): The alert severity.
* **startTimeUtc**: string (Required): The alert start time.
* **timeGenerated**: string (Required): The alert generated time.


## EntityTimelineParameters
### Properties
* **endTime**: string (Required): The end timeline date, so the results returned are before this date.
* **kinds**: ('Activity' | 'Bookmark' | 'SecurityAlert' | string)[]: Array of timeline Item kinds.
* **numberOfBucket**: int: The number of bucket for timeline queries aggregation.
* **startTime**: string (Required): The start timeline date, so the results returned are after this date.

## EntityTimelineResponse
### Properties
* **metaData**: [TimelineResultsMetadata](#timelineresultsmetadata): The metadata from the timeline operation results.
* **value**: [EntityTimelineItem](#entitytimelineitem)[]: The timeline result values.

## ExpansionResultAggregation
### Properties
* **aggregationType**: string: The common type of the aggregation. (for e.g. entity field name)
* **count**: int (Required): Total number of aggregations of the given kind (and aggregationType if given) in the expansion result.
* **displayName**: string: The display name of the aggregation by type.
* **entityKind**: 'Account' | 'AzureResource' | 'Bookmark' | 'CloudApplication' | 'DnsResolution' | 'File' | 'FileHash' | 'Host' | 'IoTDevice' | 'Ip' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityAlert' | 'SecurityGroup' | 'SubmissionMail' | 'Url' | string (Required): The kind of the aggregated entity.

## ExpansionResultsMetadata
### Properties
* **aggregations**: [ExpansionResultAggregation](#expansionresultaggregation)[]: Information of the aggregated nodes in the expansion result.

## GetInsightsError
### Properties
* **errorMessage**: string (Required): the error message
* **kind**: 'Insight' | string (Required): the query kind
* **queryId**: string: the query id

## GetInsightsResultsMetadata
### Properties
* **errors**: [GetInsightsError](#getinsightserror)[]: information about the failed queries
* **totalCount**: int (Required): the total items found for the insights request

## HuntingBookmark
### Properties
* **id**: string (ReadOnly): Azure resource Id
* **kind**: 'Account' | 'AzureResource' | 'Bookmark' | 'CloudApplication' | 'DnsResolution' | 'File' | 'FileHash' | 'Host' | 'IoTDevice' | 'Ip' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityAlert' | 'SecurityGroup' | 'SubmissionMail' | 'Url' | string (Required): The kind of the entity.
* **name**: string (ReadOnly): Azure resource name
* **properties**: [HuntingBookmarkProperties](#huntingbookmarkproperties): HuntingBookmark entity properties
* **type**: string (ReadOnly): Azure resource type

## HuntingBookmarkProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **created**: string: The time the bookmark was created
* **createdBy**: [UserInfo](#userinfo): Describes a user that created the bookmark
* **displayName**: string (Required): The display name of the bookmark
* **eventTime**: string: The time of the event
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **incidentInfo**: [IncidentInfo](#incidentinfo): Describes an incident that relates to bookmark
* **labels**: string[]: List of labels relevant to this bookmark
* **notes**: string: The notes of the bookmark
* **query**: string (Required): The query of the bookmark.
* **queryResult**: string: The query result of the bookmark.
* **updated**: string: The last time the bookmark was updated
* **updatedBy**: [UserInfo](#userinfo): Describes a user that updated the bookmark

## IncidentAdditionalData
### Properties
* **alertProductNames**: string[] (ReadOnly): List of product names of alerts in the incident
* **alertsCount**: int (ReadOnly): The number of alerts in the incident
* **bookmarksCount**: int (ReadOnly): The number of bookmarks in the incident
* **commentsCount**: int (ReadOnly): The number of comments in the incident
* **tactics**: ('Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | string)[] (ReadOnly): The tactics associated with incident

## IncidentAlertList
### Properties
* **value**: [SecurityAlert](#securityalert)[] (Required): Array of incident alerts.

## IncidentBookmarkList
### Properties
* **value**: [HuntingBookmark](#huntingbookmark)[] (Required): Array of incident bookmarks.

## IncidentCommentProperties
### Properties
* **author**: [ClientInfo](#clientinfo) (ReadOnly): Describes the client that created the comment
* **createdTimeUtc**: string (ReadOnly): The time the comment was created
* **lastModifiedTimeUtc**: string (ReadOnly): The time the comment was updated
* **message**: string (Required): The comment message

## IncidentEntitiesResponse
### Properties
* **entities**: [Entity](#entity)[]: Array of the incident related entities.
* **metaData**: [IncidentEntitiesResultsMetadata](#incidententitiesresultsmetadata)[]: The metadata from the incident related entities results.

## IncidentEntitiesResultsMetadata
### Properties
* **count**: int (Required): Total number of aggregations of the given kind in the incident related entities result.
* **entityKind**: 'Account' | 'AzureResource' | 'Bookmark' | 'CloudApplication' | 'DnsResolution' | 'File' | 'FileHash' | 'Host' | 'IoTDevice' | 'Ip' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityAlert' | 'SecurityGroup' | 'SubmissionMail' | 'Url' | string (Required): The kind of the aggregated entity.

## IncidentInfo
### Properties
* **incidentId**: string: Incident Id
* **relationName**: string: Relation Name
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string: The severity of the incident
* **title**: string: The title of the incident

## IncidentLabel
### Properties
* **labelName**: string (Required): The name of the label
* **labelType**: 'System' | 'User' | string (ReadOnly): The type of the label

## IncidentOwnerInfo
### Properties
* **assignedTo**: string: The name of the user the incident is assigned to.
* **email**: string: The email of the user the incident is assigned to.
* **objectId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: The object id of the user the incident is assigned to.
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
* **providerIncidentId**: string: The incident ID assigned by the incident provider
* **providerName**: string: The name of the source provider that generated the incident
* **relatedAnalyticRuleIds**: string[] (ReadOnly): List of resource ids of Analytic rules related to the incident
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (Required): The severity of the incident
* **status**: 'Active' | 'Closed' | 'New' | string (Required): The status of the incident
* **title**: string (Required): The title of the incident

## InsightsTableResult
### Properties
* **columns**: [InsightsTableResultColumnsItem](#insightstableresultcolumnsitem)[]: Columns Metadata of the table
* **rows**: string[][]: Rows data of the table

## InsightsTableResultColumnsItem
### Properties
* **name**: string: the name of the column
* **type**: string: the type of the column

## OfficeConsentProperties
### Properties
* **consentId**: string: Help to easily cascade among the data layers.
* **tenantId**: string: The tenantId of the Office365 with the consent.

## RelationNode
### Properties
* **etag**: string: Etag for relation node
* **relationAdditionalProperties**: [RelationNodeRelationAdditionalProperties](#relationnoderelationadditionalproperties): Additional set of properties
* **relationNodeId**: string: Relation Node Id
* **relationNodeKind**: 'Bookmark' | 'Case' | string (ReadOnly): The type of relation node

## RelationNodeRelationAdditionalProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RelationProperties
### Properties
* **relatedResourceId**: string (Required): The resource ID of the related resource
* **relatedResourceKind**: string (ReadOnly): The resource kind of the related resource
* **relatedResourceName**: string (ReadOnly): The name of the related resource
* **relatedResourceType**: string (ReadOnly): The resource type of the related resource

## RelationsModelInputPropertiesOrCaseRelationProperties
### Properties
* **bookmarkId**: string (ReadOnly): The case related bookmark id
* **bookmarkName**: string (ReadOnly): The case related bookmark name
* **caseIdentifier**: string (ReadOnly): The case identifier
* **relationName**: string: Name of relation
* **sourceRelationNode**: [RelationNode](#relationnode) (WriteOnly): Relation source node
* **targetRelationNode**: [RelationNode](#relationnode) (WriteOnly): Relation target node

## SecurityAlert
### Properties
* **id**: string (ReadOnly): Azure resource Id
* **kind**: 'Account' | 'AzureResource' | 'Bookmark' | 'CloudApplication' | 'DnsResolution' | 'File' | 'FileHash' | 'Host' | 'IoTDevice' | 'Ip' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityAlert' | 'SecurityGroup' | 'SubmissionMail' | 'Url' | string (Required): The kind of the entity.
* **name**: string (ReadOnly): Azure resource name
* **properties**: [SecurityAlertProperties](#securityalertproperties): SecurityAlert entity properties
* **type**: string (ReadOnly): Azure resource type

## SecurityAlertProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **alertDisplayName**: string (ReadOnly): The display name of the alert.
* **alertLink**: string (ReadOnly): The uri link of the alert.
* **alertType**: string (ReadOnly): The type name of the alert.
* **compromisedEntity**: string (ReadOnly): Display name of the main entity being reported on.
* **confidenceLevel**: 'High' | 'Low' | 'Unknown' | string (ReadOnly): The confidence level of this alert.
* **confidenceReasons**: [SecurityAlertPropertiesConfidenceReasonsItem](#securityalertpropertiesconfidencereasonsitem)[] (ReadOnly): The confidence reasons
* **confidenceScore**: int (ReadOnly): The confidence score of the alert.
* **confidenceScoreStatus**: 'Final' | 'InProcess' | 'NotApplicable' | 'NotFinal' | string (ReadOnly): The confidence score calculation status, i.e. indicating if score calculation is pending for this alert, not applicable or final.
* **description**: string (ReadOnly): Alert description.
* **endTimeUtc**: string (ReadOnly): The impact end time of the alert (the time of the last event contributing to the alert).
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **intent**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Exploitation' | 'Impact' | 'LateralMovement' | 'Persistence' | 'PrivilegeEscalation' | 'Probing' | 'Unknown' | string (ReadOnly): Holds the alert intent stage(s) mapping for this alert.
* **processingEndTime**: string (ReadOnly): The time the alert was made available for consumption.
* **productComponentName**: string (ReadOnly): The name of a component inside the product which generated the alert.
* **productName**: string (ReadOnly): The name of the product which published this alert.
* **productVersion**: string (ReadOnly): The version of the product generating the alert.
* **providerAlertId**: string (ReadOnly): The identifier of the alert inside the product which generated the alert.
* **remediationSteps**: string[] (ReadOnly): Manual action items to take to remediate the alert.
* **resourceIdentifiers**: any[] (ReadOnly): The list of resource identifiers of the alert.
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string: The severity of the alert
* **startTimeUtc**: string (ReadOnly): The impact start time of the alert (the time of the first event contributing to the alert).
* **status**: 'Dismissed' | 'InProgress' | 'New' | 'Resolved' | 'Unknown' | string (ReadOnly): The lifecycle status of the alert.
* **systemAlertId**: string (ReadOnly): Holds the product identifier of the alert for the product.
* **tactics**: ('Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | string)[] (ReadOnly): The tactics of the alert
* **timeGenerated**: string (ReadOnly): The time the alert was generated.
* **vendorName**: string (ReadOnly): The name of the vendor that raise the alert.

## SecurityAlertPropertiesConfidenceReasonsItem
### Properties
* **reason**: string (ReadOnly): The reason's description
* **reasonType**: string (ReadOnly): The type (category) of the reason

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

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

## ThreatIntelligenceFilteringCriteria
### Properties
* **ids**: string[]: Ids of threat intelligence indicators
* **includeDisabled**: bool: Parameter to include/exclude disabled indicators.
* **keywords**: string[]: Keywords for searching threat intelligence indicators
* **maxConfidence**: int: Maximum confidence.
* **maxValidUntil**: string: End time for ValidUntil filter.
* **minConfidence**: int: Minimum confidence.
* **minValidUntil**: string: Start time for ValidUntil filter.
* **pageSize**: int: Page size
* **patternTypes**: string[]: Pattern types
* **skipToken**: string: Skip token.
* **sortBy**: [ThreatIntelligenceSortingCriteriaAutoGenerated](#threatintelligencesortingcriteriaautogenerated)[]: Columns to sort by and sorting order
* **sources**: string[]: Sources of threat intelligence indicators
* **threatTypes**: string[]: Threat types of threat intelligence indicators

## ThreatIntelligenceGranularMarkingModel
### Properties
* **language**: string: Language granular marking model
* **markingRef**: int: marking reference granular marking model
* **selectors**: string[]: granular marking model selectors

## ThreatIntelligenceIndicatorModelForRequestBody
### Properties
* **etag**: string: Etag of the azure resource
* **kind**: 'indicator' | string (Required): The kind of the entity.
* **properties**: [ThreatIntelligenceIndicatorProperties](#threatintelligenceindicatorproperties): Threat Intelligence Entity properties

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

## ThreatIntelligenceInformation
### Properties
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly): Azure resource Id
* **kind**: 'indicator' | string (Required): The kind of the entity.
* **name**: string (ReadOnly): Azure resource name
* **type**: string (ReadOnly): Azure resource type

## ThreatIntelligenceInformationList
### Properties
* **nextLink**: string (ReadOnly): URL to fetch the next set of information objects.
* **value**: [ThreatIntelligenceInformation](#threatintelligenceinformation)[] (Required): Array of threat intelligence information objects.

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

## ThreatIntelligenceSortingCriteriaAutoGenerated
### Properties
* **itemKey**: string: Column name
* **sortOrder**: 'ascending' | 'descending' | 'unsorted' | string: Sorting order (ascending/descending/unsorted).

## TimelineAggregation
### Properties
* **count**: int (Required): the total items found for a kind
* **kind**: 'Activity' | 'Bookmark' | 'SecurityAlert' | string (Required): the query kind

## TimelineError
### Properties
* **errorMessage**: string (Required): the error message
* **kind**: 'Activity' | 'Bookmark' | 'SecurityAlert' | string (Required): the query kind
* **queryId**: string: the query id

## TimelineResultsMetadata
### Properties
* **aggregations**: [TimelineAggregation](#timelineaggregation)[] (Required): timeline aggregation per kind
* **errors**: [TimelineError](#timelineerror)[]: information about the failure queries
* **totalCount**: int (Required): the total items found for the timeline request

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
* **labels**: string[]: List of labels relevant to this watchlist
* **numberOfLinesToSkip**: int: The number of lines in a csv/tsv content to skip before the header
* **provider**: string (Required): The provider of the watchlist
* **rawContent**: string: The raw content that represents to watchlist items to create. In case of csv/tsv content type, it's the content of the file that will parsed by the endpoint
* **source**: 'Local file' | 'Remote storage' | string (Required): The source of the watchlist
* **tenantId**: string: The tenantId where the watchlist belongs to
* **updated**: string: The last time the watchlist was updated
* **updatedBy**: [UserInfo](#userinfo): Describes a user that updated the watchlist
* **uploadStatus**: string: The status of the Watchlist upload : New, InProgress or Complete. Pls note : When a Watchlist upload status is equal to InProgress, the Watchlist cannot be deleted
* **watchlistAlias**: string: The alias of the watchlist
* **watchlistId**: string: The id (a Guid) of the watchlist
* **watchlistItemsCount**: int: The number of Watchlist Items in the Watchlist
* **watchlistType**: string: The type of the watchlist

