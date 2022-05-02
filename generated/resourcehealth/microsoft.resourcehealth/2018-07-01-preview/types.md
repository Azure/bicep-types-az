# Microsoft.ResourceHealth @ 2018-07-01-preview

## Resource Microsoft.ResourceHealth/emergingIssues@2018-07-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [EmergingIssue](#emergingissue) (ReadOnly): On-going emerging issue from azure status.
* **type**: 'Microsoft.ResourceHealth/emergingIssues' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ResourceHealth/metadata@2018-07-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MetadataEntityProperties](#metadataentityproperties) (ReadOnly): The metadata entity properties
* **type**: 'Microsoft.ResourceHealth/metadata' (ReadOnly, DeployTimeConstant): The resource type

## EmergingIssue
### Properties
* **refreshTimestamp**: string (ReadOnly): Timestamp for when last time refreshed for ongoing emerging issue.
* **statusActiveEvents**: [StatusActiveEvent](#statusactiveevent)[] (ReadOnly): The list of emerging issues of active event type.
* **statusBanners**: [StatusBanner](#statusbanner)[] (ReadOnly): The list of emerging issues of banner type.

## StatusActiveEvent
### Properties
* **cloud**: string (ReadOnly): The cloud type of this active event.
* **description**: string (ReadOnly): The details of active event.
* **impacts**: [EmergingIssueImpact](#emergingissueimpact)[] (ReadOnly): The list of emerging issues impacts.
* **lastModifiedTime**: string (ReadOnly): The last time modified on this banner.
* **published**: bool (ReadOnly): The boolean value of this active event if published or not.
* **severity**: 'Error' | 'Information' | 'Warning' (ReadOnly): The severity level of this active event.
* **stage**: 'Active' | 'Archived' | 'Resolve' (ReadOnly): The stage of this active event.
* **startTime**: string (ReadOnly): The impact start time on this active event.
* **title**: string (ReadOnly): The active event title.
* **trackingId**: string (ReadOnly): The tracking id of this active event.

## EmergingIssueImpact
### Properties
* **id**: string (ReadOnly): The impacted service id.
* **name**: string (ReadOnly): The impacted service name.
* **regions**: [ImpactedRegion](#impactedregion)[] (ReadOnly): The list of impacted regions for corresponding emerging issues.

## ImpactedRegion
### Properties
* **id**: string (ReadOnly): The impacted region id.
* **name**: string (ReadOnly): The impacted region name.

## StatusBanner
### Properties
* **cloud**: string (ReadOnly): The cloud type of this banner.
* **lastModifiedTime**: string (ReadOnly): The last time modified on this banner.
* **message**: string (ReadOnly): The details of banner.
* **title**: string (ReadOnly): The banner title.

## MetadataEntityProperties
### Properties
* **applicableScenarios**: 'Alerts'[] (ReadOnly): The list of scenarios applicable to this metadata entity.
* **dependsOn**: string[] (ReadOnly): The list of keys on which this entity depends on.
* **displayName**: string (ReadOnly): The display name.
* **supportedValues**: [MetadataSupportedValueDetail](#metadatasupportedvaluedetail)[] (ReadOnly): The list of supported values.

## MetadataSupportedValueDetail
### Properties
* **displayName**: string (ReadOnly): The display name.
* **id**: string (ReadOnly): The id.

