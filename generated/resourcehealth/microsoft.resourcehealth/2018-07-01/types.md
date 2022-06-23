# Microsoft.ResourceHealth @ 2018-07-01

## Resource Microsoft.ResourceHealth/emergingIssues@2018-07-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [EmergingIssue](#emergingissue) (ReadOnly): The emerging issue entity properties.
* **type**: 'Microsoft.ResourceHealth/emergingIssues' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ResourceHealth/metadata@2018-07-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MetadataEntityProperties](#metadataentityproperties) (ReadOnly): The metadata entity properties.
* **type**: 'Microsoft.ResourceHealth/metadata' (ReadOnly, DeployTimeConstant): The resource type

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

## ImpactedRegion
### Properties
* **id**: string: The impacted region id.
* **name**: string: The impacted region name.

## MetadataEntityProperties
### Properties
* **applicableScenarios**: 'Alerts' | string[]: The list of scenarios applicable to this metadata entity.
* **dependsOn**: string[]: The list of keys on which this entity depends on.
* **displayName**: string: The display name.
* **supportedValues**: [MetadataSupportedValueDetail](#metadatasupportedvaluedetail)[]: The list of supported values.

## MetadataSupportedValueDetail
### Properties
* **displayName**: string: The display name.
* **id**: string: The id.

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

