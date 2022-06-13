# Microsoft.SecurityInsights @ 2021-04-01

## Resource Microsoft.SecurityInsights/incidents@2021-04-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IncidentProperties](#incidentproperties): Incident properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/incidents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/incidents/comments@2021-04-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IncidentCommentProperties](#incidentcommentproperties): Incident comment properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/incidents/comments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/incidents/relations@2021-04-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelationProperties](#relationproperties): Relation properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/incidents/relations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/threatIntelligence/indicators@2021-04-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'indicator' | string (Required): The kind of the entity.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ThreatIntelligenceIndicatorProperties](#threatintelligenceindicatorproperties) (WriteOnly): Threat Intelligence Entity properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/threatIntelligence/indicators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/watchlists@2021-04-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WatchlistProperties](#watchlistproperties): Watchlist properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/watchlists' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/watchlists/watchlistItems@2021-04-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WatchlistItemProperties](#watchlistitemproperties): Watchlist Item properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/watchlists/watchlistItems' (ReadOnly, DeployTimeConstant): The resource type

## ClientInfo
### Properties
* **email**: string: The email of the client.
* **name**: string: The name of the client.
* **objectId**: string: The object id of the client.
* **userPrincipalName**: string: The user principal name of the client.

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## IncidentAdditionalData
### Properties
* **alertProductNames**: string[] (ReadOnly): List of product names of alerts in the incident
* **alertsCount**: int (ReadOnly): The number of alerts in the incident
* **bookmarksCount**: int (ReadOnly): The number of bookmarks in the incident
* **commentsCount**: int (ReadOnly): The number of comments in the incident
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PrivilegeEscalation' | string[] (ReadOnly): The tactics associated with incident

## IncidentCommentProperties
### Properties
* **author**: [ClientInfo](#clientinfo) (ReadOnly): Describes the client that created the comment
* **createdTimeUtc**: string (ReadOnly): The time the comment was created
* **lastModifiedTimeUtc**: string (ReadOnly): The time the comment was updated
* **message**: string (Required): The comment message

## IncidentLabel
### Properties
* **labelName**: string (Required): The name of the label
* **labelType**: 'System' | 'User' | string (ReadOnly): The type of the label

## IncidentOwnerInfo
### Properties
* **assignedTo**: string: The name of the user the incident is assigned to.
* **email**: string: The email of the user the incident is assigned to.
* **objectId**: string: The object id of the user the incident is assigned to.
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
* **relatedAnalyticRuleIds**: string[] (ReadOnly): List of resource ids of Analytic rules related to the incident
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (Required): The severity of the incident
* **status**: 'Active' | 'Closed' | 'New' | string (Required): The status of the incident
* **title**: string (Required): The title of the incident

## RelationProperties
### Properties
* **relatedResourceId**: string (Required): The resource ID of the related resource
* **relatedResourceKind**: string (ReadOnly): The resource kind of the related resource
* **relatedResourceName**: string (ReadOnly): The name of the related resource
* **relatedResourceType**: string (ReadOnly): The resource type of the related resource

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
* **description**: string (WriteOnly): External reference description
* **externalId**: string (WriteOnly): External reference ID
* **hashes**: [ThreatIntelligenceExternalReferenceHashes](#threatintelligenceexternalreferencehashes) (WriteOnly): External reference hashes
* **sourceName**: string (WriteOnly): External reference source name
* **url**: string (WriteOnly): External reference URL

## ThreatIntelligenceExternalReferenceHashes
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ThreatIntelligenceGranularMarkingModel
### Properties
* **language**: string (WriteOnly): Language granular marking model
* **markingRef**: int (WriteOnly): marking reference granular marking model
* **selectors**: string[] (WriteOnly): granular marking model selectors

## ThreatIntelligenceIndicatorProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly, WriteOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **confidence**: int (WriteOnly): Confidence of threat intelligence entity
* **created**: string (WriteOnly): Created by
* **createdByRef**: string (WriteOnly): Created by reference of threat intelligence entity
* **defanged**: bool (WriteOnly): Is threat intelligence entity defanged
* **description**: string (WriteOnly): Description of a threat intelligence entity
* **displayName**: string (WriteOnly): Display name of a threat intelligence entity
* **extensions**: [ThreatIntelligenceIndicatorPropertiesExtensions](#threatintelligenceindicatorpropertiesextensions) (WriteOnly): Extensions map
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

## ThreatIntelligenceIndicatorPropertiesExtensions
### Properties
### Additional Properties
* **Additional Properties Type**: any

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

## UserInfo
### Properties
* **email**: string (ReadOnly): The email of the user.
* **name**: string (ReadOnly): The name of the user.
* **objectId**: string: The object id of the user.

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
* **contentType**: string: The content type of the raw content. For now, only text/csv is valid
* **created**: string: The time the watchlist was created
* **createdBy**: [UserInfo](#userinfo): Describes a user that created the watchlist
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
* **source**: 'Local file' | 'Remote storage' | string (Required): The source of the watchlist
* **tenantId**: string: The tenantId where the watchlist belongs to
* **updated**: string: The last time the watchlist was updated
* **updatedBy**: [UserInfo](#userinfo): Describes a user that updated the watchlist
* **uploadStatus**: string: The status of the Watchlist upload : New, InProgress or Complete. **Note** : When a Watchlist upload status is InProgress, the Watchlist cannot be deleted
* **watchlistAlias**: string: The alias of the watchlist
* **watchlistId**: string: The id (a Guid) of the watchlist
* **watchlistType**: string: The type of the watchlist

