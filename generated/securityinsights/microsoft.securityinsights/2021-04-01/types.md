# Microsoft.SecurityInsights @ 2021-04-01

## Resource Microsoft.SecurityInsights/incidents@2021-04-01
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IncidentProperties](#incidentproperties): Incident properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/incidents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/incidents/comments@2021-04-01
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IncidentCommentProperties](#incidentcommentproperties): Incident comment properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/incidents/comments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/incidents/relations@2021-04-01
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelationProperties](#relationproperties): Relation properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/incidents/relations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/threatIntelligence/indicators@2021-04-01
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
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
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WatchlistProperties](#watchlistproperties): Watchlist properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/watchlists' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/watchlists/watchlistItems@2021-04-01
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WatchlistItemProperties](#watchlistitemproperties): Watchlist Item properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/watchlists/watchlistItems' (ReadOnly, DeployTimeConstant): The resource type

## Function alerts (Microsoft.SecurityInsights/incidents@2021-04-01)
* **Resource**: Microsoft.SecurityInsights/incidents
* **ApiVersion**: 2021-04-01
* **Output**: [IncidentAlertList](#incidentalertlist)

## Function bookmarks (Microsoft.SecurityInsights/incidents@2021-04-01)
* **Resource**: Microsoft.SecurityInsights/incidents
* **ApiVersion**: 2021-04-01
* **Output**: [IncidentBookmarkList](#incidentbookmarklist)

## Function createIndicator (Microsoft.SecurityInsights/threatIntelligence@2021-04-01)
* **Resource**: Microsoft.SecurityInsights/threatIntelligence
* **ApiVersion**: 2021-04-01
* **Input**: [ThreatIntelligenceIndicatorModelForRequestBody](#threatintelligenceindicatormodelforrequestbody)
* **Output**: [ThreatIntelligenceInformation](#threatintelligenceinformation)

## Function entities (Microsoft.SecurityInsights/incidents@2021-04-01)
* **Resource**: Microsoft.SecurityInsights/incidents
* **ApiVersion**: 2021-04-01
* **Output**: [IncidentEntitiesResponse](#incidententitiesresponse)

## Function queryIndicators (Microsoft.SecurityInsights/threatIntelligence@2021-04-01)
* **Resource**: Microsoft.SecurityInsights/threatIntelligence
* **ApiVersion**: 2021-04-01
* **Input**: [ThreatIntelligenceFilteringCriteria](#threatintelligencefilteringcriteria)
* **Output**: [ThreatIntelligenceInformationList](#threatintelligenceinformationlist)

## Function replaceTags (Microsoft.SecurityInsights/threatIntelligence/indicators@2021-04-01)
* **Resource**: Microsoft.SecurityInsights/threatIntelligence/indicators
* **ApiVersion**: 2021-04-01
* **Input**: [ThreatIntelligenceIndicatorModelForRequestBody](#threatintelligenceindicatormodelforrequestbody)
* **Output**: [ThreatIntelligenceInformation](#threatintelligenceinformation)

## ClientInfo
### Properties
* **email**: string: The email of the client.
* **name**: string: The name of the client.
* **objectId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: The object id of the client.
* **userPrincipalName**: string: The user principal name of the client.

## Entity
### Properties
* **id**: string (ReadOnly): Azure resource Id
* **kind**: 'Account' | 'AzureResource' | 'Bookmark' | 'CloudApplication' | 'DnsResolution' | 'File' | 'FileHash' | 'Host' | 'IoTDevice' | 'Ip' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityAlert' | 'SecurityGroup' | 'SubmissionMail' | 'Url' | string (Required): The kind of the entity.
* **name**: string (ReadOnly): Azure resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
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

## HuntingBookmark
### Properties
* **id**: string (ReadOnly): Azure resource Id
* **kind**: 'Account' | 'AzureResource' | 'Bookmark' | 'CloudApplication' | 'DnsResolution' | 'File' | 'FileHash' | 'Host' | 'IoTDevice' | 'Ip' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityAlert' | 'SecurityGroup' | 'SubmissionMail' | 'Url' | string (Required): The kind of the entity.
* **name**: string (ReadOnly): Azure resource name
* **properties**: [HuntingBookmarkProperties](#huntingbookmarkproperties): HuntingBookmark entity properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
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
* **tactics**: ('Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PrivilegeEscalation' | string)[] (ReadOnly): The tactics associated with incident

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
* **severity**: 'Critical' | 'High' | 'Informational' | 'Low' | 'Medium' | string: The severity of the incident
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

## SecurityAlert
### Properties
* **id**: string (ReadOnly): Azure resource Id
* **kind**: 'Account' | 'AzureResource' | 'Bookmark' | 'CloudApplication' | 'DnsResolution' | 'File' | 'FileHash' | 'Host' | 'IoTDevice' | 'Ip' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityAlert' | 'SecurityGroup' | 'SubmissionMail' | 'Url' | string (Required): The kind of the entity.
* **name**: string (ReadOnly): Azure resource name
* **properties**: [SecurityAlertProperties](#securityalertproperties): SecurityAlert entity properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
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
* **tactics**: ('Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PrivilegeEscalation' | string)[] (ReadOnly): The tactics of the alert
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
* **sortBy**: [ThreatIntelligenceSortingCriteria](#threatintelligencesortingcriteria)[]: Columns to sort by and sorting order
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
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
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

## ThreatIntelligenceSortingCriteria
### Properties
* **itemKey**: string: Column name
* **sortOrder**: 'ascending' | 'descending' | 'unsorted' | string: Sorting order (ascending/descending/unsorted).

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

