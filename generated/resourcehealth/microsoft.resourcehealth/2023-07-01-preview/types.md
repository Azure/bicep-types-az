# Microsoft.ResourceHealth @ 2023-07-01-preview

## Resource Microsoft.ResourceHealth/emergingIssues@2023-07-01-preview
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [EmergingIssue](#emergingissue) (ReadOnly): The emerging issue entity properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ResourceHealth/emergingIssues' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ResourceHealth/events@2023-07-01-preview
* **Readable Scope(s)**: Tenant, Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EventProperties](#eventproperties) (ReadOnly): Properties of event.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ResourceHealth/events' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ResourceHealth/events/impactedResources@2023-07-01-preview
* **Readable Scope(s)**: Tenant, Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^*#&+:<>%?]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EventImpactedResourceProperties](#eventimpactedresourceproperties) (ReadOnly): Properties of impacted resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ResourceHealth/events/impactedResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ResourceHealth/metadata@2023-07-01-preview
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MetadataEntityProperties](#metadataentityproperties) (ReadOnly): The metadata entity properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ResourceHealth/metadata' (ReadOnly, DeployTimeConstant): The resource type

## Function fetchEventDetails (Microsoft.ResourceHealth/events@2023-07-01-preview)
* **Resource**: Microsoft.ResourceHealth/events
* **ApiVersion**: 2023-07-01-preview
* **Output**: [Event](#event)

## Function listSecurityAdvisoryImpactedResources (Microsoft.ResourceHealth/events@2023-07-01-preview)
* **Resource**: Microsoft.ResourceHealth/events
* **ApiVersion**: 2023-07-01-preview
* **Output**: [EventImpactedResourceListResult](#eventimpactedresourcelistresult)

## EmergingIssue
### Properties
* **refreshTimestamp**: string: Timestamp for when last time refreshed for ongoing emerging issue.
* **statusActiveEvents**: [StatusActiveEvent](#statusactiveevent)[]: The list of emerging issues of active event type.
* **statusBanners**: [StatusBanner](#statusbanner)[]: The list of emerging issues of banner type.

## EmergingIssueImpact
### Properties
* **id**: string: The impacted service id.
* **name**: string: The impacted service name.
* **regions**: [ImpactedRegion](#impactedregion)[]: The list of impacted regions for corresponding emerging issues.

## Event
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [EventProperties](#eventproperties): Properties of event.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## EventImpactedResource
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [EventImpactedResourceProperties](#eventimpactedresourceproperties): Properties of impacted resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## EventImpactedResourceListResult
### Properties
* **nextLink**: string: The URI to fetch the next page of events. Call ListNext() with this URI to fetch the next page of impacted resource.
* **value**: [EventImpactedResource](#eventimpactedresource)[] (Required): The list of eventImpactedResources.

## EventImpactedResourceProperties
### Properties
* **info**: [KeyValueItem](#keyvalueitem)[]: Additional information.
* **maintenanceEndTime**: string (ReadOnly): End time of maintenance for the impacted resource.
* **maintenanceStartTime**: string (ReadOnly): Start time of maintenance for the impacted resource.
* **resourceGroup**: string (ReadOnly): Resource group name of the impacted resource.
* **resourceName**: string (ReadOnly): Resource name of the impacted resource.
* **status**: string (ReadOnly): Status of the impacted resource.
* **targetRegion**: string (ReadOnly): Impacted resource region name.
* **targetResourceId**: string (ReadOnly): Identity for resource within Microsoft cloud.
* **targetResourceType**: string (ReadOnly): Resource type within Microsoft cloud.

## EventProperties
### Properties
* **additionalInformation**: [EventPropertiesAdditionalInformation](#eventpropertiesadditionalinformation): Additional information
* **argQuery**: string: Azure Resource Graph query to fetch the affected resources from their existing Azure Resource Graph locations.
* **article**: [EventPropertiesArticle](#eventpropertiesarticle): Article of event.
* **description**: string: Contains the communication message for the event, that could include summary, root cause and other details.
* **duration**: int: duration in seconds
* **enableChatWithUs**: bool: Tells if we want to enable or disable Microsoft Support for this event.
* **enableMicrosoftSupport**: bool: Tells if we want to enable or disable Microsoft Support for this event.
* **eventLevel**: 'Critical' | 'Error' | 'Informational' | 'Warning' | string: Level of event.
* **eventSource**: 'ResourceHealth' | 'ServiceHealth' | string: Source of event.
* **eventSubType**: 'Retirement' | string: Sub type of the event. Currently used to determine retirement communications for health advisory events
* **eventType**: 'EmergingIssues' | 'HealthAdvisory' | 'PlannedMaintenance' | 'RCA' | 'SecurityAdvisory' | 'ServiceIssue' | string: Type of event.
* **externalIncidentId**: string: The id of the Incident
* **faqs**: [Faq](#faq)[]: Frequently asked questions for the service health event.
* **header**: string: Header text of event.
* **hirStage**: string: Stage for HIR Document
* **impact**: [Impact](#impact)[]: List services impacted by the service health event.
* **impactMitigationTime**: string: It provides the Timestamp for when the health impacting event resolved.
* **impactStartTime**: string: It provides the Timestamp for when the health impacting event started.
* **impactType**: string: The type of the impact
* **isHIR**: bool: It provides information if the event is High incident rate event or not.
* **lastUpdateTime**: string: It provides the Timestamp for when the health impacting event was last updated.
* **level**: 'Critical' | 'Warning' | string: Level of insight.
* **links**: [Link](#link)[]: Useful links of event.
* **maintenanceId**: string: Unique identifier for planned maintenance event.
* **maintenanceType**: string: The type of planned maintenance event.
* **platformInitiated**: bool: Is true if the event is platform initiated.
* **priority**: int: Priority level of the event. Has value from 0 to 23. 0 is the highest priority. Service issue events have higher priority followed by planned maintenance and health advisory. Critical events have higher priority followed by error, warning and informational. Furthermore, active events have higher priority than resolved.
* **reason**: string: The reason for the Incident
* **recommendedActions**: [EventPropertiesRecommendedActions](#eventpropertiesrecommendedactions): Recommended actions of event.
* **status**: 'Active' | 'Resolved' | string: Current status of event.
* **summary**: string: Summary text of event.
* **title**: string: Title text of event.

## EventPropertiesAdditionalInformation
### Properties
* **message**: string: Additional information Message

## EventPropertiesArticle
### Properties
* **articleContent**: string: Article content of event.
* **articleId**: string: Article Id
* **parameters**: any: It provides a map of parameter name and value

## EventPropertiesRecommendedActions
### Properties
* **actions**: [EventPropertiesRecommendedActionsItem](#eventpropertiesrecommendedactionsitem)[]: Recommended actions for the service health event.
* **localeCode**: string: Recommended action locale for the service health event.
* **message**: string: Recommended action title for the service health event.

## EventPropertiesRecommendedActionsItem
### Properties
* **actionText**: string: Recommended action text
* **groupId**: int: Recommended action group Id for the service health event.

## Faq
### Properties
* **answer**: string: FAQ answer for the service health event.
* **localeCode**: string: FAQ locale for the service health event.
* **question**: string: FAQ question for the service health event.

## Impact
### Properties
* **impactedRegions**: [ImpactedServiceRegion](#impactedserviceregion)[]: List regions impacted by the service health event.
* **impactedService**: string: Impacted service name.

## ImpactedRegion
### Properties
* **id**: string: The impacted region id.
* **name**: string: The impacted region name.

## ImpactedServiceRegion
### Properties
* **impactedRegion**: string: Impacted region name.
* **impactedSubscriptions**: string[]: List subscription impacted by the service health event.
* **impactedTenants**: string[]: List tenant impacted by the service health event.
* **lastUpdateTime**: string: It provides the Timestamp for when the last update for the service health event.
* **status**: 'Active' | 'Resolved' | string: Current status of event in the region.
* **updates**: [Update](#update)[]: List of updates for given service health event.

## KeyValueItem
### Properties
* **key**: string (ReadOnly): Key of tuple.
* **value**: string (ReadOnly): Value of tuple.

## Link
### Properties
* **bladeName**: string: It provides the name of portal extension blade to produce link for given service health event.
* **displayText**: [LinkDisplayText](#linkdisplaytext): Display text of link.
* **extensionName**: string: It provides the name of portal extension to produce link for given service health event.
* **parameters**: any: It provides a map of parameter name and value for portal extension blade to produce lik for given service health event.
* **type**: 'Button' | 'Hyperlink' | string: Type of link.

## LinkDisplayText
### Properties
* **localizedValue**: string: Localized display text of link.
* **value**: string: Display text of link.

## MetadataEntityProperties
### Properties
* **applicableScenarios**: ('Alerts' | string)[]: The list of scenarios applicable to this metadata entity.
* **dependsOn**: string[]: The list of keys on which this entity depends on.
* **displayName**: string: The display name.
* **supportedValues**: [MetadataSupportedValueDetail](#metadatasupportedvaluedetail)[]: The list of supported values.

## MetadataSupportedValueDetail
### Properties
* **displayName**: string: The display name.
* **id**: string: The id.
* **resourceTypes**: string[]: The list of associated resource types.

## StatusActiveEvent
### Properties
* **cloud**: string: The cloud type of this active event.
* **description**: string: The details of active event.
* **impacts**: [EmergingIssueImpact](#emergingissueimpact)[]: The list of emerging issues impacts.
* **lastModifiedTime**: string: The last time modified on this banner.
* **published**: bool: The boolean value of this active event if published or not.
* **severity**: 'Error' | 'Information' | 'Warning' | string: The severity level of this active event.
* **stage**: 'Active' | 'Archived' | 'Resolve' | string: The stage of this active event.
* **startTime**: string: The impact start time on this active event.
* **title**: string: The active event title.
* **trackingId**: string: The tracking id of this active event.

## StatusBanner
### Properties
* **cloud**: string: The cloud type of this banner.
* **lastModifiedTime**: string: The last time modified on this banner.
* **message**: string: The details of banner.
* **title**: string: The banner title.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## Update
### Properties
* **summary**: string: Summary text for the given update for the service health event.
* **updateDateTime**: string: It provides the Timestamp for the given update for the service health event.

