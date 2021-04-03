# Microsoft.SecurityInsights @ 2019-01-01-preview

## Resource Microsoft.SecurityInsights/alertRules@2019-01-01-preview
* **Valid Scope(s)**: Extension
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.SecurityInsights/alertRules' (ReadOnly, DeployTimeConstant): The resource type
### Fusion
#### Properties
* **kind**: 'Fusion' (Required): Represents Fusion alert rule.
* **properties**: [FusionAlertRuleProperties](#fusionalertruleproperties): Fusion alert rule base property bag.

### MicrosoftSecurityIncidentCreation
#### Properties
* **kind**: 'MicrosoftSecurityIncidentCreation' (Required): Represents MicrosoftSecurityIncidentCreation rule.
* **properties**: [MicrosoftSecurityIncidentCreationAlertRuleProperties](#microsoftsecurityincidentcreationalertruleproperties): MicrosoftSecurityIncidentCreation rule property bag.

### MLBehaviorAnalytics
#### Properties
* **kind**: 'MLBehaviorAnalytics' (Required): Represents MLBehaviorAnalytics alert rule.
* **properties**: [MLBehaviorAnalyticsAlertRuleProperties](#mlbehavioranalyticsalertruleproperties): MLBehaviorAnalytics alert rule base property bag.

### Scheduled
#### Properties
* **kind**: 'Scheduled' (Required): Represents scheduled alert rule.
* **properties**: [ScheduledAlertRuleProperties](#scheduledalertruleproperties): Scheduled alert rule base property bag.

### ThreatIntelligence
#### Properties
* **kind**: 'ThreatIntelligence' (Required): Data connector to pull threat intelligence data from TIP products.
* **properties**: [ThreatIntelligenceAlertRuleProperties](#threatintelligencealertruleproperties): Threat Intelligence alert rule base property bag.


## Resource Microsoft.SecurityInsights/alertRules/actions@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ActionRequestProperties](#actionrequestproperties): Action property bag.
* **type**: 'Microsoft.SecurityInsights/alertRules/actions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/bookmarks@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BookmarkProperties](#bookmarkproperties): Describes bookmark properties
* **type**: 'Microsoft.SecurityInsights/bookmarks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/bookmarks/relations@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelationProperties](#relationproperties): Relation property bag.
* **type**: 'Microsoft.SecurityInsights/bookmarks/relations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/cases@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CaseProperties](#caseproperties): Describes case properties
* **type**: 'Microsoft.SecurityInsights/cases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/cases/comments@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CaseCommentProperties](#casecommentproperties): Case comment property bag.
* **type**: 'Microsoft.SecurityInsights/cases/comments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/cases/relations@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: ETag for relation
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'CasesToBookmarks' (ReadOnly): The type of relation node.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelationsModelInputProperties](#relationsmodelinputproperties): Relation input properties
* **type**: 'Microsoft.SecurityInsights/cases/relations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/dataConnectors@2019-01-01-preview
* **Valid Scope(s)**: Extension
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.SecurityInsights/dataConnectors' (ReadOnly, DeployTimeConstant): The resource type
### AmazonWebServicesCloudTrail
#### Properties
* **kind**: 'AmazonWebServicesCloudTrail' (Required): Represents Amazon Web Services CloudTrail data connector.
* **properties**: [AwsCloudTrailDataConnectorProperties](#awscloudtraildataconnectorproperties): Amazon Web Services CloudTrail data connector properties.

### AzureActiveDirectory
#### Properties
* **kind**: 'AzureActiveDirectory' (Required): Represents AAD (Azure Active Directory) data connector.
* **properties**: [AADDataConnectorProperties](#aaddataconnectorproperties): AAD (Azure Active Directory) data connector properties.

### AzureAdvancedThreatProtection
#### Properties
* **kind**: 'AzureAdvancedThreatProtection' (Required): Represents AATP (Azure Advanced Threat Protection) data connector.
* **properties**: [AATPDataConnectorProperties](#aatpdataconnectorproperties): AATP (Azure Advanced Threat Protection) data connector properties.

### AzureSecurityCenter
#### Properties
* **kind**: 'AzureSecurityCenter' (Required): Represents ASC (Azure Security Center) data connector.
* **properties**: [ASCDataConnectorProperties](#ascdataconnectorproperties): ASC (Azure Security Center) data connector properties.

### Dynamics365
#### Properties
* **kind**: 'Dynamics365' (Required): Represents Dynamics365 data connector.
* **properties**: [Dynamics365DataConnectorProperties](#dynamics365dataconnectorproperties): Dynamics365 data connector properties.

### MicrosoftCloudAppSecurity
#### Properties
* **kind**: 'MicrosoftCloudAppSecurity' (Required): Represents MCAS (Microsoft Cloud App Security) data connector.
* **properties**: [MCASDataConnectorProperties](#mcasdataconnectorproperties): MCAS (Microsoft Cloud App Security) data connector properties.

### MicrosoftDefenderAdvancedThreatProtection
#### Properties
* **kind**: 'MicrosoftDefenderAdvancedThreatProtection' (Required): Represents MDATP (Microsoft Defender Advanced Threat Protection) data connector.
* **properties**: [MDATPDataConnectorProperties](#mdatpdataconnectorproperties): MDATP (Microsoft Defender Advanced Threat Protection) data connector properties.

### MicrosoftThreatIntelligence
#### Properties
* **kind**: 'MicrosoftThreatIntelligence' (Required): Represents Microsoft Threat Intelligence data connector.
* **properties**: [MSTIDataConnectorProperties](#mstidataconnectorproperties): Microsoft Threat Intelligence data connector properties.

### MicrosoftThreatProtection
#### Properties
* **kind**: 'MicrosoftThreatProtection' (Required): Represents MTP (Microsoft Threat Protection) data connector.
* **properties**: [MTPDataConnectorProperties](#mtpdataconnectorproperties): MTP (Microsoft Threat Protection) data connector properties.

### Office365
#### Properties
* **kind**: 'Office365' (Required): Represents office data connector.
* **properties**: [OfficeDataConnectorProperties](#officedataconnectorproperties): Office data connector properties.

### OfficeATP
#### Properties
* **kind**: 'OfficeATP' (Required): Represents OfficeATP (Office 365 Advanced Threat Protection) data connector.
* **properties**: [OfficeATPDataConnectorProperties](#officeatpdataconnectorproperties): OfficeATP (Office 365 Advanced Threat Protection) data connector properties.

### ThreatIntelligence
#### Properties
* **kind**: 'ThreatIntelligence' (Required): Data connector to pull threat intelligence data from TIP products.
* **properties**: [ThreatIntelligenceAlertRuleProperties](#threatintelligencealertruleproperties): Threat Intelligence alert rule base property bag.

### ThreatIntelligenceTaxii
#### Properties
* **kind**: 'ThreatIntelligenceTaxii' (Required): Data connector to pull Threat intelligence data from TAXII 2.0/2.1 server
* **properties**: [TiTaxiiDataConnectorProperties](#titaxiidataconnectorproperties): Threat Intelligence TAXII data connector properties.


## Resource Microsoft.SecurityInsights/incidents@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IncidentProperties](#incidentproperties): Describes incident properties
* **type**: 'Microsoft.SecurityInsights/incidents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/incidents/comments@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IncidentCommentProperties](#incidentcommentproperties): Incident comment property bag.
* **type**: 'Microsoft.SecurityInsights/incidents/comments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/incidents/relations@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelationProperties](#relationproperties): Relation property bag.
* **type**: 'Microsoft.SecurityInsights/incidents/relations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/settings@2019-01-01-preview
* **Valid Scope(s)**: Extension
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.SecurityInsights/settings' (ReadOnly, DeployTimeConstant): The resource type
### EntityAnalytics
#### Properties
* **kind**: 'EntityAnalytics' (Required): Settings with single toggle.
* **properties**: [EntityAnalyticsProperties](#entityanalyticsproperties): EntityAnalytics property bag.

### EyesOn
#### Properties
* **kind**: 'EyesOn' (Required): Settings with single toggle.
* **properties**: [EyesOnSettingsProperties](#eyesonsettingsproperties): EyesOn property bag.

### IPSyncer
#### Properties
* **kind**: 'IPSyncer' (Required): Settings with single toggle.
* **properties**: [IPSyncerSettingsProperties](#ipsyncersettingsproperties): IPSyncer property bag.

### Ueba
#### Properties
* **kind**: 'Ueba' (Required): Settings with single toggle.
* **properties**: [UebaProperties](#uebaproperties): Ueba property bag.


## Resource Microsoft.SecurityInsights/threatIntelligence/indicators@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (Required, WriteOnly): The kind of the entity.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ThreatIntelligenceIndicatorProperties](#threatintelligenceindicatorproperties) (WriteOnly): Describes threat intelligence entity properties
* **type**: 'Microsoft.SecurityInsights/threatIntelligence/indicators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/watchlists@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WatchlistProperties](#watchlistproperties): Describes watchlist properties
* **type**: 'Microsoft.SecurityInsights/watchlists' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/watchlists/watchlistItems@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WatchlistItemProperties](#watchlistitemproperties): Describes watchlist item properties
* **type**: 'Microsoft.SecurityInsights/watchlists/watchlistItems' (ReadOnly, DeployTimeConstant): The resource type

## Fusion
### Properties
* **kind**: 'Fusion' (Required): Represents Fusion alert rule.
* **properties**: [FusionAlertRuleProperties](#fusionalertruleproperties): Fusion alert rule base property bag.

## FusionAlertRuleProperties
### Properties
* **alertRuleTemplateName**: string (Required): The Name of the alert rule template used to create this rule.
* **description**: string (ReadOnly): The description of the alert rule.
* **displayName**: string (ReadOnly): The display name for alerts created by this alert rule.
* **enabled**: bool (Required): Determines whether this alert rule is enabled or disabled.
* **lastModifiedUtc**: string (ReadOnly): The last time that this alert has been modified.
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' (ReadOnly): The severity for alerts created by this alert rule.
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation'[] (ReadOnly): The tactics of the alert rule

## MicrosoftSecurityIncidentCreation
### Properties
* **kind**: 'MicrosoftSecurityIncidentCreation' (Required): Represents MicrosoftSecurityIncidentCreation rule.
* **properties**: [MicrosoftSecurityIncidentCreationAlertRuleProperties](#microsoftsecurityincidentcreationalertruleproperties): MicrosoftSecurityIncidentCreation rule property bag.

## MicrosoftSecurityIncidentCreationAlertRuleProperties
### Properties
* **alertRuleTemplateName**: string: The Name of the alert rule template used to create this rule.
* **description**: string: The description of the alert rule.
* **displayName**: string (Required): The display name for alerts created by this alert rule.
* **displayNamesExcludeFilter**: string[]: the alerts' displayNames on which the cases will not be generated
* **displayNamesFilter**: string[]: the alerts' displayNames on which the cases will be generated
* **enabled**: bool (Required): Determines whether this alert rule is enabled or disabled.
* **lastModifiedUtc**: string (ReadOnly): The last time that this alert has been modified.
* **productFilter**: 'Azure Active Directory Identity Protection' | 'Azure Advanced Threat Protection' | 'Azure Security Center for IoT' | 'Azure Security Center' | 'Microsoft Cloud App Security' | 'Microsoft Defender Advanced Threat Protection' | 'Office 365 Advanced Threat Protection' (Required): The alerts' productName on which the cases will be generated.
* **severitiesFilter**: 'High' | 'Informational' | 'Low' | 'Medium'[]: the alerts' severities on which the cases will be generated

## MLBehaviorAnalytics
### Properties
* **kind**: 'MLBehaviorAnalytics' (Required): Represents MLBehaviorAnalytics alert rule.
* **properties**: [MLBehaviorAnalyticsAlertRuleProperties](#mlbehavioranalyticsalertruleproperties): MLBehaviorAnalytics alert rule base property bag.

## MLBehaviorAnalyticsAlertRuleProperties
### Properties
* **alertRuleTemplateName**: string (Required): The Name of the alert rule template used to create this rule.
* **description**: string (ReadOnly): The description of the alert rule.
* **displayName**: string (ReadOnly): The display name for alerts created by this alert rule.
* **enabled**: bool (Required): Determines whether this alert rule is enabled or disabled.
* **lastModifiedUtc**: string (ReadOnly): The last time that this alert rule has been modified.
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' (ReadOnly): The severity for alerts created by this alert rule.
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation'[] (ReadOnly): The tactics of the alert rule

## Scheduled
### Properties
* **kind**: 'Scheduled' (Required): Represents scheduled alert rule.
* **properties**: [ScheduledAlertRuleProperties](#scheduledalertruleproperties): Scheduled alert rule base property bag.

## ScheduledAlertRuleProperties
### Properties
* **alertRuleTemplateName**: string: The Name of the alert rule template used to create this rule.
* **description**: string: The description of the alert rule.
* **displayName**: string (Required): The display name for alerts created by this alert rule.
* **enabled**: bool (Required): Determines whether this alert rule is enabled or disabled.
* **eventGroupingSettings**: [EventGroupingSettings](#eventgroupingsettings): Event grouping settings property bag.
* **incidentConfiguration**: [IncidentConfiguration](#incidentconfiguration): Incident Configuration property bag.
* **lastModifiedUtc**: string (ReadOnly): The last time that this alert rule has been modified.
* **query**: string: The query that creates alerts for this rule.
* **queryFrequency**: string: The frequency (in ISO 8601 duration format) for this alert rule to run.
* **queryPeriod**: string: The period (in ISO 8601 duration format) that this alert rule looks at.
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium': The severity for alerts created by this alert rule.
* **suppressionDuration**: string (Required): The suppression (in ISO 8601 duration format) to wait since last time this alert rule been triggered.
* **suppressionEnabled**: bool (Required): Determines whether the suppression for this alert rule is enabled or disabled.
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation'[]: The tactics of the alert rule
* **triggerOperator**: 'Equal' | 'GreaterThan' | 'LessThan' | 'NotEqual': The operation against the threshold that triggers alert rule.
* **triggerThreshold**: int: The threshold triggers this alert rule.

## EventGroupingSettings
### Properties
* **aggregationKind**: 'AlertPerResult' | 'SingleAlert':

## IncidentConfiguration
### Properties
* **createIncident**: bool (Required): Create incidents from alerts triggered by this analytics rule
* **groupingConfiguration**: [GroupingConfiguration](#groupingconfiguration): Grouping configuration property bag.

## GroupingConfiguration
### Properties
* **enabled**: bool (Required): Grouping enabled
* **entitiesMatchingMethod**: 'All' | 'Custom' | 'None' (Required): Grouping matching method.
* **groupByEntities**: 'Account' | 'FileHash' | 'Host' | 'Ip' | 'Url'[]: A list of entity types to group by (when entitiesMatchingMethod is Custom)
* **lookbackDuration**: string (Required): Limit the group to alerts created within the lookback duration (in ISO 8601 duration format)
* **reopenClosedIncident**: bool (Required): Re-open closed matching incidents

## ThreatIntelligence
### Properties
* **kind**: 'ThreatIntelligence' (Required): Data connector to pull threat intelligence data from TIP products.
* **properties**: [ThreatIntelligenceAlertRuleProperties](#threatintelligencealertruleproperties): Threat Intelligence alert rule base property bag.

## ThreatIntelligenceAlertRuleProperties
### Properties
* **alertRuleTemplateName**: string (Required): The Name of the alert rule template used to create this rule.
* **description**: string (ReadOnly): The description of the alert rule.
* **displayName**: string (ReadOnly): The display name for alerts created by this alert rule.
* **enabled**: bool (Required): Determines whether this alert rule is enabled or disabled.
* **lastModifiedUtc**: string (ReadOnly): The last time that this alert has been modified.
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' (ReadOnly): The severity for alerts created by this alert rule.
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation'[] (ReadOnly): The tactics of the alert rule

## ActionRequestProperties
### Properties
* **logicAppResourceId**: string (Required): Logic App Resource Id, /subscriptions/{my-subscription}/resourceGroups/{my-resource-group}/providers/Microsoft.Logic/workflows/{my-workflow-id}.
* **triggerUri**: string (Required, WriteOnly): Logic App Callback URL for this specific workflow.
* **workflowId**: string (ReadOnly): The name of the logic app's workflow.

## BookmarkProperties
### Properties
* **created**: string: The time the bookmark was created
* **createdBy**: [UserInfo](#userinfo): User information that made some action
* **displayName**: string (Required): The display name of the bookmark
* **eventTime**: string: The bookmark event time
* **incidentInfo**: [IncidentInfo](#incidentinfo): Describes related incident information for the bookmark
* **labels**: string[]: List of labels relevant to this bookmark
* **notes**: string: The notes of the bookmark
* **query**: string (Required): The query of the bookmark.
* **queryEndTime**: string: The end time for the query
* **queryResult**: string: The query result of the bookmark.
* **queryStartTime**: string: The start time for the query
* **updated**: string: The last time the bookmark was updated
* **updatedBy**: [UserInfo](#userinfo): User information that made some action

## UserInfo
### Properties
* **email**: string (ReadOnly): The email of the user.
* **name**: string (ReadOnly): The name of the user.
* **objectId**: string: The object id of the user.

## IncidentInfo
### Properties
* **incidentId**: string: Incident Id
* **relationName**: string: Relation Name
* **severity**: 'Critical' | 'High' | 'Informational' | 'Low' | 'Medium': The severity of the incident.
* **title**: string: The title of the incident

## RelationProperties
### Properties
* **relatedResourceId**: string (Required): The resource ID of the related resource
* **relatedResourceKind**: string (ReadOnly): The resource kind of the related resource
* **relatedResourceName**: string (ReadOnly): The name of the related resource
* **relatedResourceType**: string (ReadOnly): The resource type of the related resource

## CaseProperties
### Properties
* **caseNumber**: int (ReadOnly): a sequential number
* **closedReasonText**: string: the case close reason details
* **closeReason**: 'Dismissed' | 'FalsePositive' | 'Other' | 'Resolved' | 'TruePositive': The reason the case was closed.
* **createdTimeUtc**: string (ReadOnly): The time the case was created
* **description**: string: The description of the case
* **endTimeUtc**: string: The end time of the case
* **labels**: string[]: List of labels relevant to this case
* **lastComment**: string (ReadOnly): the last comment in the case
* **lastUpdatedTimeUtc**: string (ReadOnly): The last time the case was updated
* **metrics**: [Dictionary<string,Int>](#dictionarystringint) (ReadOnly): Dictionary of metrics, for example the number of alerts in the case
* **owner**: [UserInfo](#userinfo): User information that made some action
* **relatedAlertIds**: string[] (ReadOnly): List of related alert identifiers
* **relatedAlertProductNames**: string[] (ReadOnly): List of related alert product names
* **severity**: 'Critical' | 'High' | 'Informational' | 'Low' | 'Medium' (Required): The severity of the case.
* **startTimeUtc**: string: The start time of the case
* **status**: 'Closed' | 'Draft' | 'InProgress' | 'New' (Required): The status of the case.
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation'[] (ReadOnly): The tactics associated with case
* **title**: string (Required): The title of the case
* **totalComments**: int (ReadOnly): the number of total comments in the case

## Dictionary<string,Int>
### Properties
### Additional Properties
* **Additional Properties Type**: int

## CaseCommentProperties
### Properties
* **createdTimeUtc**: string (ReadOnly): The time the comment was created
* **message**: string (Required): The comment message
* **userInfo**: [UserInfo](#userinfo) (ReadOnly): User information that made some action

## RelationsModelInputProperties
### Properties
* **bookmarkId**: string (ReadOnly): The case related bookmark id
* **bookmarkName**: string (ReadOnly): The case related bookmark name
* **caseIdentifier**: string (ReadOnly): The case identifier
* **relationName**: string: Name of relation
* **sourceRelationNode**: [RelationNode](#relationnode) (WriteOnly): Relation node
* **targetRelationNode**: [RelationNode](#relationnode) (WriteOnly): Relation node

## RelationNode
### Properties
* **etag**: string (WriteOnly): Etag for relation node
* **relationAdditionalProperties**: [Dictionary<string,String>](#dictionarystringstring) (WriteOnly): Additional set of properties
* **relationNodeId**: string (WriteOnly): Relation Node Id
* **relationNodeKind**: 'Bookmark' | 'Case' (ReadOnly, WriteOnly): The type of relation node.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AmazonWebServicesCloudTrail
### Properties
* **kind**: 'AmazonWebServicesCloudTrail' (Required): Represents Amazon Web Services CloudTrail data connector.
* **properties**: [AwsCloudTrailDataConnectorProperties](#awscloudtraildataconnectorproperties): Amazon Web Services CloudTrail data connector properties.

## AwsCloudTrailDataConnectorProperties
### Properties
* **awsRoleArn**: string: The Aws Role Arn (with CloudTrailReadOnly policy) that is used to access the Aws account.
* **dataTypes**: [AwsCloudTrailDataConnectorDataTypes](#awscloudtraildataconnectordatatypes): The available data types for Amazon Web Services CloudTrail data connector.

## AwsCloudTrailDataConnectorDataTypes
### Properties
* **logs**: [schemas:47_logs](#schemas47logs): Logs data type.

## schemas:47_logs
### Properties
* **state**: 'Disabled' | 'Enabled': Describe whether this data type connection is enabled or not.

## AzureActiveDirectory
### Properties
* **kind**: 'AzureActiveDirectory' (Required): Represents AAD (Azure Active Directory) data connector.
* **properties**: [AADDataConnectorProperties](#aaddataconnectorproperties): AAD (Azure Active Directory) data connector properties.

## AADDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): Alerts data type for data connectors.
* **tenantId**: string: The tenant id to connect to, and get the data from.

## AlertsDataTypeOfDataConnector
### Properties
* **alerts**: [schemas:44_alerts](#schemas44alerts): Alerts data type connection.

## schemas:44_alerts
### Properties
* **state**: 'Disabled' | 'Enabled': Describe whether this data type connection is enabled or not.

## AzureAdvancedThreatProtection
### Properties
* **kind**: 'AzureAdvancedThreatProtection' (Required): Represents AATP (Azure Advanced Threat Protection) data connector.
* **properties**: [AATPDataConnectorProperties](#aatpdataconnectorproperties): AATP (Azure Advanced Threat Protection) data connector properties.

## AATPDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): Alerts data type for data connectors.
* **tenantId**: string: The tenant id to connect to, and get the data from.

## AzureSecurityCenter
### Properties
* **kind**: 'AzureSecurityCenter' (Required): Represents ASC (Azure Security Center) data connector.
* **properties**: [ASCDataConnectorProperties](#ascdataconnectorproperties): ASC (Azure Security Center) data connector properties.

## ASCDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): Alerts data type for data connectors.
* **subscriptionId**: string: The subscription id to connect to, and get the data from.

## Dynamics365
### Properties
* **kind**: 'Dynamics365' (Required): Represents Dynamics365 data connector.
* **properties**: [Dynamics365DataConnectorProperties](#dynamics365dataconnectorproperties): Dynamics365 data connector properties.

## Dynamics365DataConnectorProperties
### Properties
* **dataTypes**: [Dynamics365DataConnectorDataTypes](#dynamics365dataconnectordatatypes): The available data types for Dynamics365 data connector.
* **tenantId**: string: The tenant id to connect to, and get the data from.

## Dynamics365DataConnectorDataTypes
### Properties
* **dynamics365CdsActivities**: [schemas:92_dynamics365CdsActivities](#schemas92dynamics365cdsactivities): Common Data Service data type connection.

## schemas:92_dynamics365CdsActivities
### Properties
* **state**: 'Disabled' | 'Enabled': Describe whether this data type connection is enabled or not.

## MicrosoftCloudAppSecurity
### Properties
* **kind**: 'MicrosoftCloudAppSecurity' (Required): Represents MCAS (Microsoft Cloud App Security) data connector.
* **properties**: [MCASDataConnectorProperties](#mcasdataconnectorproperties): MCAS (Microsoft Cloud App Security) data connector properties.

## MCASDataConnectorProperties
### Properties
* **dataTypes**: [MCASDataConnectorDataTypes](#mcasdataconnectordatatypes): The available data types for MCAS (Microsoft Cloud App Security) data connector.
* **tenantId**: string: The tenant id to connect to, and get the data from.

## MCASDataConnectorDataTypes
### Properties
* **alerts**: [schemas:44_alerts](#schemas44alerts): Alerts data type connection.
* **discoveryLogs**: [schemas:166_discoveryLogs](#schemas166discoverylogs): Discovery log data type connection.

## schemas:166_discoveryLogs
### Properties
* **state**: 'Disabled' | 'Enabled': Describe whether this data type connection is enabled or not.

## MicrosoftDefenderAdvancedThreatProtection
### Properties
* **kind**: 'MicrosoftDefenderAdvancedThreatProtection' (Required): Represents MDATP (Microsoft Defender Advanced Threat Protection) data connector.
* **properties**: [MDATPDataConnectorProperties](#mdatpdataconnectorproperties): MDATP (Microsoft Defender Advanced Threat Protection) data connector properties.

## MDATPDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): Alerts data type for data connectors.
* **tenantId**: string: The tenant id to connect to, and get the data from.

## MicrosoftThreatIntelligence
### Properties
* **kind**: 'MicrosoftThreatIntelligence' (Required): Represents Microsoft Threat Intelligence data connector.
* **properties**: [MSTIDataConnectorProperties](#mstidataconnectorproperties): Microsoft Threat Intelligence data connector properties.

## MSTIDataConnectorProperties
### Properties
* **dataTypes**: [MSTIDataConnectorDataTypes](#mstidataconnectordatatypes): The available data types for Microsoft Threat Intelligence Platforms data connector.
* **tenantId**: string: The tenant id to connect to, and get the data from.

## MSTIDataConnectorDataTypes
### Properties
* **bingSafetyPhishingURL**: [schemas:12_bingSafetyPhishingURL](#schemas12bingsafetyphishingurl): Data type for Microsoft Threat Intelligence Platforms data connector.
* **microsoftEmergingThreatFeed**: [schemas:12_bingSafetyPhishingURL](#schemas12bingsafetyphishingurl): Data type for Microsoft Threat Intelligence Platforms data connector.

## schemas:12_bingSafetyPhishingURL
### Properties
* **lookbackPeriod**: string: lookback period
* **state**: 'Disabled' | 'Enabled': Describe whether this data type connection is enabled or not.

## MicrosoftThreatProtection
### Properties
* **kind**: 'MicrosoftThreatProtection' (Required): Represents MTP (Microsoft Threat Protection) data connector.
* **properties**: [MTPDataConnectorProperties](#mtpdataconnectorproperties): MTP (Microsoft Threat Protection) data connector properties.

## MTPDataConnectorProperties
### Properties
* **dataTypes**: [MTPDataConnectorDataTypes](#mtpdataconnectordatatypes): The available data types for Microsoft Threat Protection Platforms data connector.
* **tenantId**: string: The tenant id to connect to, and get the data from.

## MTPDataConnectorDataTypes
### Properties
* **incidents**: [schemas:17_incidents](#schemas17incidents): Data type for Microsoft Threat Protection Platforms data connector.

## schemas:17_incidents
### Properties
* **state**: 'Disabled' | 'Enabled': Describe whether this data type connection is enabled or not.

## Office365
### Properties
* **kind**: 'Office365' (Required): Represents office data connector.
* **properties**: [OfficeDataConnectorProperties](#officedataconnectorproperties): Office data connector properties.

## OfficeDataConnectorProperties
### Properties
* **dataTypes**: [OfficeDataConnectorDataTypes](#officedataconnectordatatypes): The available data types for office data connector.
* **tenantId**: string: The tenant id to connect to, and get the data from.

## OfficeDataConnectorDataTypes
### Properties
* **exchange**: [schemas:188_exchange](#schemas188exchange): Exchange data type connection.
* **sharePoint**: [schemas:188_sharePoint](#schemas188sharepoint): SharePoint data type connection.
* **teams**: [schemas:188_teams](#schemas188teams): Teams data type connection.

## schemas:188_exchange
### Properties
* **state**: 'Disabled' | 'Enabled': Describe whether this data type connection is enabled or not.

## schemas:188_sharePoint
### Properties
* **state**: 'Disabled' | 'Enabled': Describe whether this data type connection is enabled or not.

## schemas:188_teams
### Properties
* **state**: 'Disabled' | 'Enabled': Describe whether this data type connection is enabled or not.

## OfficeATP
### Properties
* **kind**: 'OfficeATP' (Required): Represents OfficeATP (Office 365 Advanced Threat Protection) data connector.
* **properties**: [OfficeATPDataConnectorProperties](#officeatpdataconnectorproperties): OfficeATP (Office 365 Advanced Threat Protection) data connector properties.

## OfficeATPDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): Alerts data type for data connectors.
* **tenantId**: string: The tenant id to connect to, and get the data from.

## ThreatIntelligenceTaxii
### Properties
* **kind**: 'ThreatIntelligenceTaxii' (Required): Data connector to pull Threat intelligence data from TAXII 2.0/2.1 server
* **properties**: [TiTaxiiDataConnectorProperties](#titaxiidataconnectorproperties): Threat Intelligence TAXII data connector properties.

## TiTaxiiDataConnectorProperties
### Properties
* **collectionId**: string: The collection id of the TAXII server.
* **dataTypes**: [TiTaxiiDataConnectorDataTypes](#titaxiidataconnectordatatypes): The available data types for Threat Intelligence TAXII data connector.
* **friendlyName**: string: The friendly name for the TAXII server.
* **password**: string: The password for the TAXII server.
* **pollingFrequency**: 'OnceADay' | 'OnceAMinute' | 'OnceAnHour': The polling frequency for the TAXII server.
* **taxiiLookbackPeriod**: string: The lookback period for the TAXII server.
* **taxiiServer**: string: The API root for the TAXII server.
* **tenantId**: string: The tenant id to connect to, and get the data from.
* **userName**: string: The userName for the TAXII server.
* **workspaceId**: string: The workspace id.

## TiTaxiiDataConnectorDataTypes
### Properties
* **taxiiClient**: [schemas:224_taxiiClient](#schemas224taxiiclient): Data type for TAXII connector.

## schemas:224_taxiiClient
### Properties
* **state**: 'Disabled' | 'Enabled': Describe whether this data type connection is enabled or not.

## IncidentProperties
### Properties
* **additionalData**: [IncidentAdditionalData](#incidentadditionaldata) (ReadOnly): Incident additional data property bag.
* **classification**: 'BenignPositive' | 'FalsePositive' | 'TruePositive' | 'Undetermined': The reason the incident was closed.
* **classificationComment**: string: Describes the reason the incident was closed
* **classificationReason**: 'InaccurateData' | 'IncorrectAlertLogic' | 'SuspiciousActivity' | 'SuspiciousButExpected': The classification reason the incident was closed with.
* **createdTimeUtc**: string (ReadOnly): The time the incident was created
* **description**: string: The description of the incident
* **firstActivityTimeUtc**: string: The time of the first activity in the incident
* **incidentNumber**: int (ReadOnly): A sequential number
* **incidentUrl**: string (ReadOnly): The deep-link url to the incident in Azure portal
* **labels**: [IncidentLabel](#incidentlabel)[]: List of labels relevant to this incident
* **lastActivityTimeUtc**: string: The time of the last activity in the incident
* **lastModifiedTimeUtc**: string (ReadOnly): The last time the incident was updated
* **owner**: [IncidentOwnerInfo](#incidentownerinfo): Information on the user an incident is assigned to
* **providerIncidentId**: string: The incident ID assigned by the incident provider
* **providerName**: string: The name of the source provider that generated the incident
* **relatedAnalyticRuleIds**: string[] (ReadOnly): List of resource ids of Analytic rules related to the incident
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' (Required): The severity of the incident.
* **status**: 'Active' | 'Closed' | 'New' (Required): The status of the incident.
* **title**: string (Required): The title of the incident

## IncidentAdditionalData
### Properties
* **alertProductNames**: string[] (ReadOnly): List of product names of alerts in the incident
* **alertsCount**: int (ReadOnly): The number of alerts in the incident
* **bookmarksCount**: int (ReadOnly): The number of bookmarks in the incident
* **commentsCount**: int (ReadOnly): The number of comments in the incident
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation'[] (ReadOnly): The tactics associated with incident

## IncidentLabel
### Properties
* **labelName**: string (Required): The name of the label
* **labelType**: 'System' | 'User' (ReadOnly): The type of the label.

## IncidentOwnerInfo
### Properties
* **assignedTo**: string: The name of the user the incident is assigned to.
* **email**: string: The email of the user the incident is assigned to.
* **objectId**: string: The object id of the user the incident is assigned to.
* **userPrincipalName**: string: The user principal name of the user the incident is assigned to.

## IncidentCommentProperties
### Properties
* **author**: [ClientInfo](#clientinfo) (ReadOnly): Information on the client (user or application) that made some action
* **createdTimeUtc**: string (ReadOnly): The time the comment was created
* **lastModifiedTimeUtc**: string (ReadOnly): The time the comment was updated
* **message**: string (Required): The comment message

## ClientInfo
### Properties
* **email**: string: The email of the client.
* **name**: string: The name of the client.
* **objectId**: string: The object id of the client.
* **userPrincipalName**: string: The user principal name of the client.

## EntityAnalytics
### Properties
* **kind**: 'EntityAnalytics' (Required): Settings with single toggle.
* **properties**: [EntityAnalyticsProperties](#entityanalyticsproperties): EntityAnalytics property bag.

## EntityAnalyticsProperties
### Properties
* **isEnabled**: bool (ReadOnly): Determines whether the setting is enable or disabled.

## EyesOn
### Properties
* **kind**: 'EyesOn' (Required): Settings with single toggle.
* **properties**: [EyesOnSettingsProperties](#eyesonsettingsproperties): EyesOn property bag.

## EyesOnSettingsProperties
### Properties
* **isEnabled**: bool (ReadOnly): Determines whether the setting is enable or disabled.

## IPSyncer
### Properties
* **kind**: 'IPSyncer' (Required): Settings with single toggle.
* **properties**: [IPSyncerSettingsProperties](#ipsyncersettingsproperties): IPSyncer property bag.

## IPSyncerSettingsProperties
### Properties
* **isEnabled**: bool (ReadOnly): Determines whether the setting is enable or disabled.

## Ueba
### Properties
* **kind**: 'Ueba' (Required): Settings with single toggle.
* **properties**: [UebaProperties](#uebaproperties): Ueba property bag.

## UebaProperties
### Properties
* **dataSources**: 'AuditLogs' | 'AzureActivity' | 'SecurityEvent' | 'SigninLogs'[]: The relevant data sources that enriched by ueba

## ThreatIntelligenceIndicatorProperties
### Properties
* **additionalData**: [Dictionary<string,Object>](#dictionarystringobject) (ReadOnly, WriteOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **confidence**: int (WriteOnly): Confidence of threat intelligence entity
* **created**: string (WriteOnly): Created by
* **createdByRef**: string (WriteOnly): Created by reference of threat intelligence entity
* **defanged**: bool (WriteOnly): Is threat intelligence entity defanged
* **description**: string (WriteOnly): Description of a threat intelligence entity
* **displayName**: string (WriteOnly): Display name of a threat intelligence entity
* **extensions**: [Dictionary<string,Object>](#dictionarystringobject) (WriteOnly): Extensions map
* **externalId**: string (WriteOnly): External ID of threat intelligence entity
* **externalLastUpdatedTimeUtc**: string (WriteOnly): External last updated time in UTC
* **externalReferences**: [ThreatIntelligenceExternalReference](#threatintelligenceexternalreference)[] (WriteOnly): External References
* **friendlyName**: string (ReadOnly, WriteOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **granularMarkings**: [ThreatIntelligenceGranularMarkingModel](#threatintelligencegranularmarkingmodel)[] (WriteOnly): Granular Markings
* **indicatorTypes**: string[] (WriteOnly): Indicator types of threat intelligence entities
* **killChainPhases**: [ThreatIntelligenceKillChainPhase](#threatintelligencekillchainphase)[] (WriteOnly): Kill chain phases
* **labels**: string[] (WriteOnly): Labels  of threat intelligence entity
* **language**: string (WriteOnly): Language of threat intelligence entity
* **lastUpdatedTimeUtc**: string (WriteOnly): Last updated time in UTC
* **modified**: string (WriteOnly): Modified by
* **objectMarkingRefs**: string[] (WriteOnly): Threat intelligence entity object marking references
* **parsedPattern**: [ThreatIntelligenceParsedPattern](#threatintelligenceparsedpattern)[] (WriteOnly): Parsed patterns
* **pattern**: string (WriteOnly): Pattern of a threat intelligence entity
* **patternType**: string (WriteOnly): Pattern type of a threat intelligence entity
* **patternVersion**: string (WriteOnly): Pattern version of a threat intelligence entity
* **revoked**: bool (WriteOnly): Is threat intelligence entity revoked
* **source**: string (WriteOnly): Source of a threat intelligence entity
* **threatIntelligenceTags**: string[] (WriteOnly): List of tags
* **threatTypes**: string[] (WriteOnly): Threat types
* **validFrom**: string (WriteOnly): Valid from
* **validUntil**: string (WriteOnly): Valid until

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ThreatIntelligenceExternalReference
### Properties
* **description**: string (WriteOnly): External reference description
* **externalId**: string (WriteOnly): External reference ID
* **hashes**: [Dictionary<string,String>](#dictionarystringstring) (WriteOnly): External reference hashes
* **sourceName**: string (WriteOnly): External reference source name
* **url**: string (WriteOnly): External reference URL

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ThreatIntelligenceGranularMarkingModel
### Properties
* **language**: string (WriteOnly): Language granular marking model
* **markingRef**: int (WriteOnly): marking reference granular marking model
* **selectors**: string[] (WriteOnly): granular marking model selectors

## ThreatIntelligenceKillChainPhase
### Properties
* **killChainName**: string (WriteOnly): Kill chainName name
* **phaseName**: string (WriteOnly): Phase name

## ThreatIntelligenceParsedPattern
### Properties
* **patternTypeKey**: string (WriteOnly): Pattern type key
* **patternTypeValues**: [ThreatIntelligenceParsedPatternTypeValue](#threatintelligenceparsedpatterntypevalue)[] (WriteOnly): Pattern type keys

## ThreatIntelligenceParsedPatternTypeValue
### Properties
* **value**: string (WriteOnly): Value of parsed pattern
* **valueType**: string (WriteOnly): Type of the value

## WatchlistProperties
### Properties
* **contentType**: string: The content type of the raw content. Example : text/csv or text/tsv
* **created**: string: The time the watchlist was created
* **createdBy**: [UserInfo](#userinfo): User information that made some action
* **defaultDuration**: string: The default duration of a watchlist (in ISO 8601 duration format)
* **description**: string: A description of the watchlist
* **displayName**: string (Required): The display name of the watchlist
* **isDeleted**: bool: A flag that indicates if the watchlist is deleted or not
* **labels**: string[]: List of labels relevant to this watchlist
* **numberOfLinesToSkip**: int: The number of lines in a csv/tsv content to skip before the header
* **provider**: string (Required): The provider of the watchlist
* **rawContent**: string: The raw content that represents to watchlist items to create. In case of csv/tsv content type, it's the content of the file that will parsed by the endpoint
* **source**: 'Local file' | 'Remote storage' (Required): The source of the watchlist.
* **tenantId**: string: The tenantId where the watchlist belongs to
* **updated**: string: The last time the watchlist was updated
* **updatedBy**: [UserInfo](#userinfo): User information that made some action
* **uploadStatus**: string: The status of the Watchlist upload : New, InProgress or Complete. Pls note : When a Watchlist upload status is equal to InProgress, the Watchlist cannot be deleted
* **watchlistAlias**: string: The alias of the watchlist
* **watchlistId**: string: The id (a Guid) of the watchlist
* **watchlistItemsCount**: int: The number of Watchlist Items in the Watchlist
* **watchlistType**: string: The type of the watchlist

## WatchlistItemProperties
### Properties
* **created**: string: The time the watchlist item was created
* **createdBy**: [UserInfo](#userinfo): User information that made some action
* **entityMapping**: any: key-value pairs for a watchlist item entity mapping
* **isDeleted**: bool: A flag that indicates if the watchlist item is deleted or not
* **itemsKeyValue**: any (Required): key-value pairs for a watchlist item
* **tenantId**: string: The tenantId to which the watchlist item belongs to
* **updated**: string: The last time the watchlist item was updated
* **updatedBy**: [UserInfo](#userinfo): User information that made some action
* **watchlistItemId**: string: The id (a Guid) of the watchlist item
* **watchlistItemType**: string: The type of the watchlist item

