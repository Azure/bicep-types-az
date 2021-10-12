# Microsoft.SecurityInsights @ 2021-04-01

## Resource Microsoft.SecurityInsights/incidents@2021-04-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IncidentProperties](#incidentproperties): Describes incident properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SecurityInsights/incidents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/incidents/comments@2021-04-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IncidentCommentProperties](#incidentcommentproperties): Incident comment property bag.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SecurityInsights/incidents/comments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/incidents/relations@2021-04-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelationProperties](#relationproperties): Relation property bag.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SecurityInsights/incidents/relations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/threatIntelligence/indicators@2021-04-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'indicator' (Required): The kind of the threat intelligence entity
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ThreatIntelligenceIndicatorProperties](#threatintelligenceindicatorproperties) (WriteOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SecurityInsights/threatIntelligence/indicators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/watchlists@2021-04-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WatchlistProperties](#watchlistproperties): Describes watchlist properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SecurityInsights/watchlists' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/watchlists/watchlistItems@2021-04-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WatchlistItemProperties](#watchlistitemproperties): Describes watchlist item properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SecurityInsights/watchlists/watchlistItems' (ReadOnly, DeployTimeConstant): The resource type

## IncidentProperties
### Properties
* **additionalData**: [IncidentAdditionalData](#incidentadditionaldata) (ReadOnly): Incident additional data property bag.
* **classification**: 'BenignPositive' | 'FalsePositive' | 'TruePositive' | 'Undetermined': The reason the incident was closed
* **classificationComment**: string: Describes the reason the incident was closed
* **classificationReason**: 'InaccurateData' | 'IncorrectAlertLogic' | 'SuspiciousActivity' | 'SuspiciousButExpected': The classification reason the incident was closed with
* **createdTimeUtc**: string (ReadOnly): The time the incident was created
* **description**: string: The description of the incident
* **firstActivityTimeUtc**: string: The time of the first activity in the incident
* **incidentNumber**: int (ReadOnly): A sequential number
* **incidentUrl**: string (ReadOnly): The deep-link url to the incident in Azure portal
* **labels**: [IncidentLabel](#incidentlabel)[]: List of labels relevant to this incident
* **lastActivityTimeUtc**: string: The time of the last activity in the incident
* **lastModifiedTimeUtc**: string (ReadOnly): The last time the incident was updated
* **owner**: [IncidentOwnerInfo](#incidentownerinfo): Information on the user an incident is assigned to
* **relatedAnalyticRuleIds**: string[] (ReadOnly): List of resource ids of Analytic rules related to the incident
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' (Required): The severity of the incident
* **status**: 'Active' | 'Closed' | 'New' (Required): The status of the incident
* **title**: string (Required): The title of the incident

## IncidentAdditionalData
### Properties
* **alertProductNames**: string[] (ReadOnly): List of product names of alerts in the incident
* **alertsCount**: int (ReadOnly): The number of alerts in the incident
* **bookmarksCount**: int (ReadOnly): The number of bookmarks in the incident
* **commentsCount**: int (ReadOnly): The number of comments in the incident
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PrivilegeEscalation'[] (ReadOnly): The tactics associated with incident

## IncidentLabel
### Properties
* **labelName**: string (Required): The name of the label
* **labelType**: 'System' | 'User' (ReadOnly): The type of the label

## IncidentOwnerInfo
### Properties
* **assignedTo**: string: The name of the user the incident is assigned to.
* **email**: string: The email of the user the incident is assigned to.
* **objectId**: string: The object id of the user the incident is assigned to.
* **userPrincipalName**: string: The user principal name of the user the incident is assigned to.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

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

## RelationProperties
### Properties
* **relatedResourceId**: string (Required): The resource ID of the related resource
* **relatedResourceKind**: string (ReadOnly): The resource kind of the related resource
* **relatedResourceName**: string (ReadOnly): The name of the related resource
* **relatedResourceType**: string (ReadOnly): The resource type of the related resource

## ThreatIntelligenceIndicatorProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly, WriteOnly)
* **confidence**: int (WriteOnly)
* **created**: string (WriteOnly)
* **createdByRef**: string (WriteOnly)
* **defanged**: bool (WriteOnly)
* **description**: string (WriteOnly)
* **displayName**: string (WriteOnly)
* **extensions**: [ThreatIntelligenceIndicatorPropertiesExtensions](#threatintelligenceindicatorpropertiesextensions) (WriteOnly)
* **externalId**: string (WriteOnly)
* **externalLastUpdatedTimeUtc**: string (WriteOnly)
* **externalReferences**: [ThreatIntelligenceExternalReference](#threatintelligenceexternalreference)[] (WriteOnly)
* **friendlyName**: string (ReadOnly, WriteOnly)
* **granularMarkings**: [ThreatIntelligenceGranularMarkingModel](#threatintelligencegranularmarkingmodel)[] (WriteOnly)
* **indicatorTypes**: string[] (WriteOnly)
* **killChainPhases**: [ThreatIntelligenceKillChainPhase](#threatintelligencekillchainphase)[] (WriteOnly)
* **labels**: string[] (WriteOnly)
* **language**: string (WriteOnly)
* **lastUpdatedTimeUtc**: string (WriteOnly)
* **modified**: string (WriteOnly)
* **objectMarkingRefs**: string[] (WriteOnly)
* **parsedPattern**: [ThreatIntelligenceParsedPattern](#threatintelligenceparsedpattern)[] (WriteOnly)
* **pattern**: string (WriteOnly)
* **patternType**: string (WriteOnly)
* **patternVersion**: string (WriteOnly)
* **revoked**: bool (WriteOnly)
* **source**: string (WriteOnly)
* **threatIntelligenceTags**: string[] (WriteOnly)
* **threatTypes**: string[] (WriteOnly)
* **validFrom**: string (WriteOnly)
* **validUntil**: string (WriteOnly)

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ThreatIntelligenceIndicatorPropertiesExtensions
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ThreatIntelligenceExternalReference
### Properties
* **description**: string (WriteOnly)
* **externalId**: string (WriteOnly)
* **hashes**: [ThreatIntelligenceExternalReferenceHashes](#threatintelligenceexternalreferencehashes) (WriteOnly)
* **sourceName**: string (WriteOnly)
* **url**: string (WriteOnly)

## ThreatIntelligenceExternalReferenceHashes
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ThreatIntelligenceGranularMarkingModel
### Properties
* **language**: string (WriteOnly)
* **markingRef**: int (WriteOnly)
* **selectors**: string[] (WriteOnly)

## ThreatIntelligenceKillChainPhase
### Properties
* **killChainName**: string (WriteOnly)
* **phaseName**: string (WriteOnly)

## ThreatIntelligenceParsedPattern
### Properties
* **patternTypeKey**: string (WriteOnly)
* **patternTypeValues**: [ThreatIntelligenceParsedPatternTypeValue](#threatintelligenceparsedpatterntypevalue)[] (WriteOnly)

## ThreatIntelligenceParsedPatternTypeValue
### Properties
* **value**: string (WriteOnly)
* **valueType**: string (WriteOnly)

## WatchlistProperties
### Properties
* **contentType**: string: The content type of the raw content. For now, only text/csv is valid
* **created**: string: The time the watchlist was created
* **createdBy**: [UserInfo](#userinfo): User information that made some action
* **defaultDuration**: string: The default duration of a watchlist (in ISO 8601 duration format)
* **description**: string: A description of the watchlist
* **displayName**: string (Required): The display name of the watchlist
* **isDeleted**: bool: A flag that indicates if the watchlist is deleted or not
* **itemsSearchKey**: string (Required): The search key is used to optimize query performance when using watchlists for joins with other data. For example, enable a column with IP addresses to be the designated SearchKey field, then use this field as the key field when joining to other event data by IP address.
* **labels**: string[]: List of labels relevant to this watchlist
* **numberOfLinesToSkip**: int: The number of lines in a csv content to skip before the header
* **provider**: string (Required): The provider of the watchlist
* **rawContent**: string: The raw content that represents to watchlist items to create. Example : This line will be skipped
header1,header2
value1,value2
* **source**: 'Local file' | 'Remote storage' (Required): The source of the watchlist
* **tenantId**: string: The tenantId where the watchlist belongs to
* **updated**: string: The last time the watchlist was updated
* **updatedBy**: [UserInfo](#userinfo): User information that made some action
* **uploadStatus**: string: The status of the Watchlist upload : New, InProgress or Complete. **Note** : When a Watchlist upload status is InProgress, the Watchlist cannot be deleted
* **watchlistAlias**: string: The alias of the watchlist
* **watchlistId**: string: The id (a Guid) of the watchlist
* **watchlistType**: string: The type of the watchlist

## UserInfo
### Properties
* **email**: string (ReadOnly): The email of the user.
* **name**: string (ReadOnly): The name of the user.
* **objectId**: string: The object id of the user.

## WatchlistItemProperties
### Properties
* **created**: string: The time the watchlist item was created
* **createdBy**: [UserInfo](#userinfo): User information that made some action
* **entityMapping**: any: Any object
* **isDeleted**: bool: A flag that indicates if the watchlist item is deleted or not
* **itemsKeyValue**: any (Required): Any object
* **tenantId**: string: The tenantId to which the watchlist item belongs to
* **updated**: string: The last time the watchlist item was updated
* **updatedBy**: [UserInfo](#userinfo): User information that made some action
* **watchlistItemId**: string: The id (a Guid) of the watchlist item
* **watchlistItemType**: string: The type of the watchlist item

