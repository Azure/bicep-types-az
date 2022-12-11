# Microsoft.ResourceHealth @ 2022-05-01

## Resource Microsoft.ResourceHealth/events@2022-05-01 (ReadOnly)
* **Valid Scope(s)**: Tenant, Subscription
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EventProperties](#eventproperties) (ReadOnly): Properties of event.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ResourceHealth/events' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ResourceHealth/events/impactedResources@2022-05-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EventImpactedResourceProperties](#eventimpactedresourceproperties) (ReadOnly): Properties of impacted resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ResourceHealth/events/impactedResources' (ReadOnly, DeployTimeConstant): The resource type

## EventImpactedResourceProperties
### Properties
* **info**: [KeyValueItem](#keyvalueitem)[]: Additional information.
* **targetRegion**: string (ReadOnly): Impacted resource region name.
* **targetResourceId**: string (ReadOnly): Identity for resource within Microsoft cloud.
* **targetResourceType**: string (ReadOnly): Resource type within Microsoft cloud.

## EventProperties
### Properties
* **additionalInformation**: [EventPropertiesAdditionalInformation](#eventpropertiesadditionalinformation): Additional information
* **article**: [EventPropertiesArticle](#eventpropertiesarticle): Article of event.
* **description**: string: Contains the communication message for the event, that could include summary, root cause and other details.
* **duration**: int: duration in seconds
* **enableChatWithUs**: bool: Tells if we want to enable or disable Microsoft Support for this event.
* **enableMicrosoftSupport**: bool: Tells if we want to enable or disable Microsoft Support for this event.
* **eventLevel**: 'Critical' | 'Error' | 'Informational' | 'Warning' | string: Level of event.
* **eventSource**: 'ResourceHealth' | 'ServiceHealth' | string: Source of event.
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
* **platformInitiated**: bool: Is true if the event is platform initiated.
* **priority**: int: Priority level of the event. Has value from 0 to 23. 0 is the highest priority. Service issue events have higher priority followed by planned maintenance and health advisory. Critical events have higher priority followed by error, warning and informational. Furthermore, active events have higher priority than resolved.
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

