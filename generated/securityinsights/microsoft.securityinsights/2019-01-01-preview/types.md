# Microsoft.SecurityInsights @ 2019-01-01-preview

## Resource Microsoft.SecurityInsights/alertRules@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'Anomaly' | 'Fusion' | 'MLBehaviorAnalytics' | 'MicrosoftSecurityIncidentCreation' | 'Scheduled' | 'ThreatIntelligence' (Required)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.SecurityInsights/alertRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityInsights/alertRules/actions@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ActionRequestProperties
* **type**: 'Microsoft.SecurityInsights/alertRules/actions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityInsights/bookmarks@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BookmarkProperties
* **type**: 'Microsoft.SecurityInsights/bookmarks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityInsights/bookmarks/relations@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RelationProperties
* **type**: 'Microsoft.SecurityInsights/bookmarks/relations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityInsights/cases@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CaseProperties
* **type**: 'Microsoft.SecurityInsights/cases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityInsights/cases/comments@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CaseCommentProperties
* **type**: 'Microsoft.SecurityInsights/cases/comments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityInsights/cases/relations@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'CasesToBookmarks' (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RelationsModelInputProperties
* **type**: 'Microsoft.SecurityInsights/cases/relations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityInsights/dataConnectors@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'AmazonWebServicesCloudTrail' | 'AzureActiveDirectory' | 'AzureAdvancedThreatProtection' | 'AzureSecurityCenter' | 'Dynamics365' | 'MicrosoftCloudAppSecurity' | 'MicrosoftDefenderAdvancedThreatProtection' | 'MicrosoftThreatIntelligence' | 'MicrosoftThreatProtection' | 'Office365' | 'OfficeATP' | 'ThreatIntelligence' | 'ThreatIntelligenceTaxii' (Required)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.SecurityInsights/dataConnectors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityInsights/incidents@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IncidentProperties
* **type**: 'Microsoft.SecurityInsights/incidents' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityInsights/incidents/comments@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IncidentCommentProperties
* **type**: 'Microsoft.SecurityInsights/incidents/comments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityInsights/incidents/relations@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RelationProperties
* **type**: 'Microsoft.SecurityInsights/incidents/relations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityInsights/settings@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'EntityAnalytics' | 'EyesOn' | 'Ueba' (Required)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.SecurityInsights/settings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityInsights/threatIntelligence/indicators@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'indicator' (Required)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.SecurityInsights/threatIntelligence/indicators' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityInsights/watchlists@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WatchlistProperties
* **type**: 'Microsoft.SecurityInsights/watchlists' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityInsights/watchlists/watchlistItems@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WatchlistItemProperties
* **type**: 'Microsoft.SecurityInsights/watchlists/watchlistItems' (ReadOnly, DeployTimeConstant)

## ActionRequestProperties
### Properties
* **logicAppResourceId**: string (Required)

## BookmarkProperties
### Properties
* **created**: string
* **createdBy**: UserInfo
* **displayName**: string (Required)
* **eventTime**: string
* **incidentInfo**: IncidentInfo
* **labels**: string[]
* **notes**: string
* **query**: string (Required)
* **queryEndTime**: string
* **queryResult**: string
* **queryStartTime**: string
* **updated**: string
* **updatedBy**: UserInfo

## UserInfo
### Properties
* **email**: string (ReadOnly)
* **name**: string (ReadOnly)
* **objectId**: string

## IncidentInfo
### Properties
* **incidentId**: string
* **relationName**: string
* **severity**: 'Critical' | 'High' | 'Informational' | 'Low' | 'Medium'
* **title**: string

## RelationProperties
### Properties
* **relatedResourceId**: string (Required)
* **relatedResourceKind**: string (ReadOnly)
* **relatedResourceName**: string (ReadOnly)
* **relatedResourceType**: string (ReadOnly)

## CaseProperties
### Properties
* **caseNumber**: int (ReadOnly)
* **closedReasonText**: string
* **closeReason**: 'Dismissed' | 'FalsePositive' | 'Other' | 'Resolved' | 'TruePositive'
* **createdTimeUtc**: string (ReadOnly)
* **description**: string
* **endTimeUtc**: string
* **labels**: string[]
* **lastComment**: string (ReadOnly)
* **lastUpdatedTimeUtc**: string (ReadOnly)
* **metrics**: CasePropertiesMetrics (ReadOnly)
* **owner**: UserInfo
* **relatedAlertIds**: string[] (ReadOnly)
* **relatedAlertProductNames**: string[] (ReadOnly)
* **severity**: 'Critical' | 'High' | 'Informational' | 'Low' | 'Medium' (Required)
* **startTimeUtc**: string
* **status**: 'Closed' | 'Draft' | 'InProgress' | 'New' (Required)
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation'[] (ReadOnly)
* **title**: string (Required)
* **totalComments**: int (ReadOnly)

## CasePropertiesMetrics
### Properties
### Additional Properties
* **Additional Properties Type**: int

## CaseCommentProperties
### Properties
* **createdTimeUtc**: string (ReadOnly)
* **message**: string (Required)
* **userInfo**: UserInfo (ReadOnly)

## RelationsModelInputProperties
### Properties
* **relationName**: string

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
* **providerIncidentId**: string
* **providerName**: string
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

## IncidentCommentProperties
### Properties
* **author**: ClientInfo (ReadOnly)
* **createdTimeUtc**: string (ReadOnly)
* **lastModifiedTimeUtc**: string (ReadOnly)
* **message**: string (Required)

## ClientInfo
### Properties
* **email**: string
* **name**: string
* **objectId**: string
* **userPrincipalName**: string

## WatchlistProperties
### Properties
* **contentType**: string
* **created**: string
* **createdBy**: UserInfo
* **defaultDuration**: any
* **description**: string
* **displayName**: string (Required)
* **isDeleted**: bool
* **labels**: string[]
* **numberOfLinesToSkip**: int
* **provider**: string (Required)
* **rawContent**: string
* **source**: 'Local file' | 'Remote storage' (Required)
* **tenantId**: string
* **updated**: string
* **updatedBy**: UserInfo
* **uploadStatus**: string
* **watchlistAlias**: string
* **watchlistId**: string
* **watchlistItemsCount**: int
* **watchlistType**: string

## WatchlistItemProperties
### Properties
* **created**: string
* **createdBy**: UserInfo
* **isDeleted**: bool
* **tenantId**: string
* **updated**: string
* **updatedBy**: UserInfo
* **watchlistItemId**: string
* **watchlistItemType**: string

