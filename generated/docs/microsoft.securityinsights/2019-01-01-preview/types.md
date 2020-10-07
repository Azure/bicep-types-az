# Microsoft.SecurityInsights @ 2019-01-01-preview

## Microsoft.SecurityInsights/alertRules/actions
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ActionRequestProperties
* **type**: 'Microsoft.SecurityInsights/alertRules/actions' (ReadOnly, DeployTimeConstant)

## ActionRequestProperties
### Properties
* **logicAppResourceId**: string
* **triggerUri**: string (WriteOnly)
* **workflowId**: string (ReadOnly)

## Microsoft.SecurityInsights/alertRules
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.SecurityInsights/alertRules' (ReadOnly, DeployTimeConstant)
### Fusion
#### Properties
* **kind**: 'Fusion' (Required)
* **properties**: FusionAlertRuleProperties

### MicrosoftSecurityIncidentCreation
#### Properties
* **kind**: 'MicrosoftSecurityIncidentCreation' (Required)
* **properties**: MicrosoftSecurityIncidentCreationAlertRuleProperties

### Scheduled
#### Properties
* **kind**: 'Scheduled' (Required)
* **properties**: ScheduledAlertRuleProperties


## Fusion
### Properties
* **kind**: 'Fusion' (Required)
* **properties**: FusionAlertRuleProperties

## FusionAlertRuleProperties
### Properties
* **alertRuleTemplateName**: string (Required)
* **description**: string (ReadOnly)
* **displayName**: string (ReadOnly)
* **enabled**: bool (Required)
* **lastModifiedUtc**: string (ReadOnly)
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' (ReadOnly)
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation'[] (ReadOnly)

## MicrosoftSecurityIncidentCreation
### Properties
* **kind**: 'MicrosoftSecurityIncidentCreation' (Required)
* **properties**: MicrosoftSecurityIncidentCreationAlertRuleProperties

## MicrosoftSecurityIncidentCreationAlertRuleProperties
### Properties
* **alertRuleTemplateName**: string
* **description**: string
* **displayName**: string (Required)
* **displayNamesExcludeFilter**: string[]
* **displayNamesFilter**: string[]
* **enabled**: bool (Required)
* **lastModifiedUtc**: string (ReadOnly)
* **productFilter**: 'Azure Active Directory Identity Protection' | 'Azure Advanced Threat Protection' | 'Azure Security Center for IoT' | 'Azure Security Center' | 'Microsoft Cloud App Security' (Required)
* **severitiesFilter**: 'High' | 'Informational' | 'Low' | 'Medium'[]

## Scheduled
### Properties
* **kind**: 'Scheduled' (Required)
* **properties**: ScheduledAlertRuleProperties

## ScheduledAlertRuleProperties
### Properties
* **alertRuleTemplateName**: string
* **description**: string
* **displayName**: string (Required)
* **enabled**: bool (Required)
* **eventGroupingSettings**: EventGroupingSettings
* **incidentConfiguration**: IncidentConfiguration
* **lastModifiedUtc**: string (ReadOnly)
* **query**: string
* **queryFrequency**: string
* **queryPeriod**: string
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium'
* **suppressionDuration**: string (Required)
* **suppressionEnabled**: bool (Required)
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation'[]
* **triggerOperator**: 'Equal' | 'GreaterThan' | 'LessThan' | 'NotEqual'
* **triggerThreshold**: int

## EventGroupingSettings
### Properties
* **aggregationKind**: 'AlertPerResult' | 'SingleAlert'

## IncidentConfiguration
### Properties
* **createIncident**: bool (Required)
* **groupingConfiguration**: GroupingConfiguration

## GroupingConfiguration
### Properties
* **enabled**: bool (Required)
* **entitiesMatchingMethod**: 'All' | 'Custom' | 'None' (Required)
* **groupByEntities**: 'Account' | 'Host' | 'Ip' | 'Url'[]
* **lookbackDuration**: string (Required)
* **reopenClosedIncident**: bool (Required)

## Microsoft.SecurityInsights/bookmarks/relations
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RelationProperties
* **type**: 'Microsoft.SecurityInsights/bookmarks/relations' (ReadOnly, DeployTimeConstant)

## RelationProperties
### Properties
* **relatedResourceId**: string (Required)
* **relatedResourceKind**: string (ReadOnly)
* **relatedResourceName**: string (ReadOnly)
* **relatedResourceType**: string (ReadOnly)

## Microsoft.SecurityInsights/bookmarks
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BookmarkProperties
* **type**: 'Microsoft.SecurityInsights/bookmarks' (ReadOnly, DeployTimeConstant)

## BookmarkProperties
### Properties
* **created**: string
* **createdBy**: UserInfo
* **displayName**: string (Required)
* **incidentInfo**: IncidentInfo
* **labels**: string[]
* **notes**: string
* **query**: string (Required)
* **queryResult**: string
* **updated**: string
* **updatedBy**: UserInfo

## UserInfo
### Properties
* **email**: string (ReadOnly)
* **name**: string (ReadOnly)
* **objectId**: string

## IncidentInfo
### Properties
* **incidentId**: string (Required)
* **relationName**: string (Required)
* **severity**: 'Critical' | 'High' | 'Informational' | 'Low' | 'Medium' (Required)
* **title**: string (Required)

## Microsoft.SecurityInsights/cases/comments
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CaseCommentProperties
* **type**: 'Microsoft.SecurityInsights/cases/comments' (ReadOnly, DeployTimeConstant)

## CaseCommentProperties
### Properties
* **createdTimeUtc**: string (ReadOnly)
* **message**: string (Required)
* **userInfo**: UserInfo (ReadOnly)

## Microsoft.SecurityInsights/cases/relations
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'CasesToBookmarks' (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RelationsModelInputProperties
* **type**: 'Microsoft.SecurityInsights/cases/relations' (ReadOnly, DeployTimeConstant)

## RelationsModelInputProperties
### Properties
* **bookmarkId**: string (ReadOnly)
* **bookmarkName**: string (ReadOnly)
* **caseIdentifier**: string (ReadOnly)
* **relationName**: string
* **sourceRelationNode**: RelationNode (WriteOnly)
* **targetRelationNode**: RelationNode (WriteOnly)

## RelationNode
### Properties
* **etag**: string (WriteOnly)
* **relationAdditionalProperties**: Dictionary<string,String> (WriteOnly)
* **relationNodeId**: string (WriteOnly)
* **relationNodeKind**: 'Bookmark' | 'Case' (ReadOnly, WriteOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.SecurityInsights/cases
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CaseProperties
* **type**: 'Microsoft.SecurityInsights/cases' (ReadOnly, DeployTimeConstant)

## CaseProperties
### Properties
* **caseNumber**: int (ReadOnly)
* **closeReason**: 'Dismissed' | 'FalsePositive' | 'Other' | 'Resolved' | 'TruePositive'
* **closedReasonText**: string
* **createdTimeUtc**: string (ReadOnly)
* **description**: string
* **endTimeUtc**: string
* **labels**: string[]
* **lastComment**: string (ReadOnly)
* **lastUpdatedTimeUtc**: string (ReadOnly)
* **owner**: UserInfo
* **relatedAlertIds**: string[] (ReadOnly)
* **severity**: 'Critical' | 'High' | 'Informational' | 'Low' | 'Medium' (Required)
* **startTimeUtc**: string (Required)
* **status**: 'Closed' | 'Draft' | 'InProgress' | 'New' (Required)
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation'[] (ReadOnly)
* **title**: string (Required)
* **totalComments**: int (ReadOnly)

## Microsoft.SecurityInsights/dataConnectors
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.SecurityInsights/dataConnectors' (ReadOnly, DeployTimeConstant)
### AmazonWebServicesCloudTrail
#### Properties
* **kind**: 'AmazonWebServicesCloudTrail' (Required)
* **properties**: AwsCloudTrailDataConnectorProperties

### AzureActiveDirectory
#### Properties
* **kind**: 'AzureActiveDirectory' (Required)
* **properties**: AADDataConnectorProperties

### AzureAdvancedThreatProtection
#### Properties
* **kind**: 'AzureAdvancedThreatProtection' (Required)
* **properties**: AATPDataConnectorProperties

### AzureSecurityCenter
#### Properties
* **kind**: 'AzureSecurityCenter' (Required)
* **properties**: ASCDataConnectorProperties

### MicrosoftCloudAppSecurity
#### Properties
* **kind**: 'MicrosoftCloudAppSecurity' (Required)
* **properties**: MCASDataConnectorProperties

### MicrosoftDefenderAdvancedThreatProtection
#### Properties
* **kind**: 'MicrosoftDefenderAdvancedThreatProtection' (Required)
* **properties**: MDATPDataConnectorProperties

### Office365
#### Properties
* **kind**: 'Office365' (Required)
* **properties**: OfficeDataConnectorProperties

### OfficeATP
#### Properties
* **kind**: 'OfficeATP' (Required)
* **properties**: OfficeATPDataConnectorProperties

### ThreatIntelligence
#### Properties
* **kind**: 'ThreatIntelligence' (Required)
* **properties**: TIDataConnectorProperties

### ThreatIntelligenceTaxii
#### Properties
* **kind**: 'ThreatIntelligenceTaxii' (Required)
* **properties**: TiTaxiiDataConnectorProperties


## AmazonWebServicesCloudTrail
### Properties
* **kind**: 'AmazonWebServicesCloudTrail' (Required)
* **properties**: AwsCloudTrailDataConnectorProperties

## AwsCloudTrailDataConnectorProperties
### Properties
* **awsRoleArn**: string
* **dataTypes**: AwsCloudTrailDataConnectorDataTypes

## AwsCloudTrailDataConnectorDataTypes
### Properties
* **logs**: schemas:34_logs

## schemas:34_logs
### Properties
* **state**: 'Disabled' | 'Enabled'

## AzureActiveDirectory
### Properties
* **kind**: 'AzureActiveDirectory' (Required)
* **properties**: AADDataConnectorProperties

## AADDataConnectorProperties
### Properties
* **dataTypes**: AlertsDataTypeOfDataConnector
* **tenantId**: string

## AlertsDataTypeOfDataConnector
### Properties
* **alerts**: schemas:31_alerts

## schemas:31_alerts
### Properties
* **state**: 'Disabled' | 'Enabled'

## AzureAdvancedThreatProtection
### Properties
* **kind**: 'AzureAdvancedThreatProtection' (Required)
* **properties**: AATPDataConnectorProperties

## AATPDataConnectorProperties
### Properties
* **dataTypes**: AlertsDataTypeOfDataConnector
* **tenantId**: string

## AzureSecurityCenter
### Properties
* **kind**: 'AzureSecurityCenter' (Required)
* **properties**: ASCDataConnectorProperties

## ASCDataConnectorProperties
### Properties
* **dataTypes**: AlertsDataTypeOfDataConnector
* **subscriptionId**: string

## MicrosoftCloudAppSecurity
### Properties
* **kind**: 'MicrosoftCloudAppSecurity' (Required)
* **properties**: MCASDataConnectorProperties

## MCASDataConnectorProperties
### Properties
* **dataTypes**: MCASDataConnectorDataTypes
* **tenantId**: string

## MCASDataConnectorDataTypes
### Properties
* **alerts**: schemas:31_alerts
* **discoveryLogs**: schemas:120_discoveryLogs

## schemas:120_discoveryLogs
### Properties
* **state**: 'Disabled' | 'Enabled'

## MicrosoftDefenderAdvancedThreatProtection
### Properties
* **kind**: 'MicrosoftDefenderAdvancedThreatProtection' (Required)
* **properties**: MDATPDataConnectorProperties

## MDATPDataConnectorProperties
### Properties
* **dataTypes**: AlertsDataTypeOfDataConnector
* **tenantId**: string

## Office365
### Properties
* **kind**: 'Office365' (Required)
* **properties**: OfficeDataConnectorProperties

## OfficeDataConnectorProperties
### Properties
* **dataTypes**: OfficeDataConnectorDataTypes
* **tenantId**: string

## OfficeDataConnectorDataTypes
### Properties
* **exchange**: schemas:142_exchange
* **sharePoint**: schemas:142_sharePoint
* **teams**: schemas:142_teams

## schemas:142_exchange
### Properties
* **state**: 'Disabled' | 'Enabled'

## schemas:142_sharePoint
### Properties
* **state**: 'Disabled' | 'Enabled'

## schemas:142_teams
### Properties
* **state**: 'Disabled' | 'Enabled'

## OfficeATP
### Properties
* **kind**: 'OfficeATP' (Required)
* **properties**: OfficeATPDataConnectorProperties

## OfficeATPDataConnectorProperties
### Properties
* **dataTypes**: AlertsDataTypeOfDataConnector
* **tenantId**: string

## ThreatIntelligence
### Properties
* **kind**: 'ThreatIntelligence' (Required)
* **properties**: TIDataConnectorProperties

## TIDataConnectorProperties
### Properties
* **dataTypes**: TIDataConnectorDataTypes
* **tenantId**: string

## TIDataConnectorDataTypes
### Properties
* **indicators**: schemas:173_indicators

## schemas:173_indicators
### Properties
* **state**: 'Disabled' | 'Enabled'

## ThreatIntelligenceTaxii
### Properties
* **kind**: 'ThreatIntelligenceTaxii' (Required)
* **properties**: TiTaxiiDataConnectorProperties

## TiTaxiiDataConnectorProperties
### Properties
* **collectionId**: string
* **dataTypes**: TiTaxiiDataConnectorDataTypes
* **friendlyName**: string
* **password**: string
* **taxiiServer**: string
* **tenantId**: string
* **userName**: string
* **workspaceId**: string

## TiTaxiiDataConnectorDataTypes
### Properties
* **taxiiClient**: schemas:178_taxiiClient

## schemas:178_taxiiClient
### Properties
* **state**: 'Disabled' | 'Enabled'

## Microsoft.SecurityInsights/incidents/comments
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IncidentCommentProperties
* **type**: 'Microsoft.SecurityInsights/incidents/comments' (ReadOnly, DeployTimeConstant)

## IncidentCommentProperties
### Properties
* **author**: ClientInfo (ReadOnly)
* **createdTimeUtc**: string (ReadOnly)
* **message**: string (Required)

## ClientInfo
### Properties
* **email**: string
* **name**: string
* **objectId**: string
* **userPrincipalName**: string

## Microsoft.SecurityInsights/incidents/relations
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RelationProperties
* **type**: 'Microsoft.SecurityInsights/incidents/relations' (ReadOnly, DeployTimeConstant)

## Microsoft.SecurityInsights/incidents
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IncidentProperties
* **type**: 'Microsoft.SecurityInsights/incidents' (ReadOnly, DeployTimeConstant)

## IncidentProperties
### Properties
* **additionalData**: IncidentAdditionalData (ReadOnly)
* **classification**: 'BenignPositive' | 'FalsePositive' | 'TruePositive' | 'Undetermined'
* **classificationComment**: string
* **classificationReason**: 'InaccurateData' | 'IncorrectAlertLogic' | 'SuspiciousActivity' | 'SuspiciousButExpected'
* **createdTimeUtc**: string (ReadOnly)
* **description**: string
* **firstActivityTimeUtc**: string
* **incidentNumber**: int (ReadOnly)
* **incidentUrl**: string (ReadOnly)
* **labels**: IncidentLabel[]
* **lastActivityTimeUtc**: string
* **lastModifiedTimeUtc**: string (ReadOnly)
* **owner**: IncidentOwnerInfo
* **relatedAnalyticRuleIds**: string[] (ReadOnly)
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' (Required)
* **status**: 'Active' | 'Closed' | 'New' (Required)
* **title**: string (Required)

## IncidentAdditionalData
### Properties
* **alertProductNames**: string[] (ReadOnly)
* **alertsCount**: int (ReadOnly)
* **bookmarksCount**: int (ReadOnly)
* **commentsCount**: int (ReadOnly)
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation'[] (ReadOnly)

## IncidentLabel
### Properties
* **labelName**: string (Required)
* **labelType**: 'System' | 'User' (ReadOnly)

## IncidentOwnerInfo
### Properties
* **assignedTo**: string
* **email**: string
* **objectId**: string
* **userPrincipalName**: string

## Microsoft.SecurityInsights/settings
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.SecurityInsights/settings' (ReadOnly, DeployTimeConstant)
### EntityAnalytics
#### Properties
* **kind**: 'EntityAnalytics' (Required)
* **properties**: EntityAnalyticsProperties

### EyesOn
#### Properties
* **kind**: 'EyesOn' (Required)
* **properties**: EyesOnSettingsProperties

### Ueba
#### Properties
* **kind**: 'Ueba' (Required)
* **properties**: UebaProperties


## EntityAnalytics
### Properties
* **kind**: 'EntityAnalytics' (Required)
* **properties**: EntityAnalyticsProperties

## EntityAnalyticsProperties
### Properties
* **isEnabled**: bool (ReadOnly)

## EyesOn
### Properties
* **kind**: 'EyesOn' (Required)
* **properties**: EyesOnSettingsProperties

## EyesOnSettingsProperties
### Properties
* **isEnabled**: bool (ReadOnly)

## Ueba
### Properties
* **kind**: 'Ueba' (Required)
* **properties**: UebaProperties

## UebaProperties
### Properties
* **dataSources**: 'AuditLogs' | 'AzureActivity' | 'SecurityEvent' | 'SigninLogs'[]

## Microsoft.SecurityInsights/threatIntelligence/indicators
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (Required, WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ThreatIntelligenceIndicatorProperties (WriteOnly)
* **type**: 'Microsoft.SecurityInsights/threatIntelligence/indicators' (ReadOnly, DeployTimeConstant)

## ThreatIntelligenceIndicatorProperties
### Properties
* **additionalData**: Dictionary<string,Object> (ReadOnly, WriteOnly)
* **confidence**: int (WriteOnly)
* **created**: string (WriteOnly)
* **createdByRef**: string (WriteOnly)
* **description**: string (WriteOnly)
* **displayName**: string (WriteOnly)
* **externalId**: string (WriteOnly)
* **externalReferences**: string[] (WriteOnly)
* **friendlyName**: string (ReadOnly, WriteOnly)
* **granularMarkings**: ThreatIntelligenceGranularMarkingModel[] (WriteOnly)
* **indicatorTypes**: string[] (WriteOnly)
* **killChainPhases**: ThreatIntelligenceKillChainPhase[] (WriteOnly)
* **labels**: string[] (WriteOnly)
* **lastUpdatedTimeUtc**: string (WriteOnly)
* **modified**: string (WriteOnly)
* **pattern**: string (WriteOnly)
* **patternType**: string (WriteOnly)
* **revoked**: bool (WriteOnly)
* **source**: string (WriteOnly)
* **threatIntelligenceTags**: string[] (WriteOnly)
* **threatTypes**: string[] (WriteOnly)
* **validFrom**: string (WriteOnly)
* **validUntil**: string (WriteOnly)

## Dictionary<string,Object>
### Additional Properties
* **Additional Properties Type**: any

## ThreatIntelligenceGranularMarkingModel
### Properties
* **language**: string (WriteOnly)
* **markingRef**: int (WriteOnly)
* **selectors**: string[] (WriteOnly)

## ThreatIntelligenceKillChainPhase
### Properties
* **killChainName**: string (WriteOnly)
* **phaseName**: int (WriteOnly)

## Microsoft.SecurityInsights/watchlists
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WatchlistProperties
* **type**: 'Microsoft.SecurityInsights/watchlists' (ReadOnly, DeployTimeConstant)

## WatchlistProperties
### Properties
* **createdBy**: UserInfo
* **createdTimeUtc**: string
* **defaultDuration**: string
* **description**: string
* **displayName**: string (Required)
* **labels**: string[]
* **lastUpdatedTimeUtc**: string
* **notes**: string
* **provider**: string (Required)
* **source**: 'Local file' | 'Remote storage' (Required)
* **tenantId**: string
* **updatedBy**: UserInfo
* **watchlistItems**: WatchlistItem[]
* **watchlistType**: string
* **workspaceId**: string

## WatchlistItem
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: WatchlistItemProperties
* **type**: string (ReadOnly)

## WatchlistItemProperties
### Properties
* **createdBy**: UserInfo
* **createdTimeUtc**: string
* **entityMapping**: any
* **lastUpdatedTimeUtc**: string
* **tenantId**: string
* **timeToLiveUtc**: string
* **updatedBy**: UserInfo
* **watchlistId**: string (Required)
* **watchlistItemName**: string
* **watchlistItemPair**: any (Required)
* **watchlistItemType**: string

