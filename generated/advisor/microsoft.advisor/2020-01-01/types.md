# Microsoft.Advisor @ 2020-01-01

## Resource Microsoft.Advisor/configurations@2020-01-01
* **Valid Scope(s)**: Subscription, ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigDataProperties](#configdataproperties): The Advisor configuration data structure.
* **type**: 'Microsoft.Advisor/configurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Advisor/recommendations@2020-01-01 (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecommendationProperties](#recommendationproperties) (ReadOnly): The properties of the recommendation.
* **type**: 'Microsoft.Advisor/recommendations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Advisor/recommendations/suppressions@2020-01-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SuppressionProperties](#suppressionproperties): The properties of the suppression.
* **type**: 'Microsoft.Advisor/recommendations/suppressions' (ReadOnly, DeployTimeConstant): The resource type

## ConfigDataProperties
### Properties
* **digests**: [DigestConfig](#digestconfig)[]: Advisor digest configuration. Valid only for subscriptions
* **exclude**: bool: Exclude the resource from Advisor evaluations. Valid values: False (default) or True.
* **lowCpuThreshold**: '10' | '15' | '20' | '5' | string: Minimum percentage threshold for Advisor low CPU utilization evaluation. Valid only for subscriptions. Valid values: 5 (default), 10, 15 or 20.

## DigestConfig
### Properties
* **actionGroupResourceId**: string: Action group resource id used by digest.
* **categories**: 'Cost' | 'HighAvailability' | 'OperationalExcellence' | 'Performance' | 'Security' | string[]: Categories to send digest for. If categories are not provided, then digest will be sent for all categories.
* **frequency**: int: Frequency that digest will be triggered, in days. Value must be between 7 and 30 days inclusive.
* **language**: string: Language for digest content body. Value must be ISO 639-1 code for one of Azure portal supported languages. Otherwise, it will be converted into one. Default value is English (en).
* **name**: string: Name of digest configuration. Value is case-insensitive and must be unique within a subscription.
* **state**: 'Active' | 'Disabled' | string: State of digest configuration.

## RecommendationProperties
### Properties
* **actions**: [RecommendationPropertiesActionsItem](#recommendationpropertiesactionsitem)[]: The list of recommended actions to implement recommendation.
* **category**: 'Cost' | 'HighAvailability' | 'OperationalExcellence' | 'Performance' | 'Security' | string: The category of the recommendation.
* **description**: string: The detailed description of recommendation.
* **exposedMetadataProperties**: [RecommendationPropertiesExposedMetadataProperties](#recommendationpropertiesexposedmetadataproperties): The recommendation metadata properties exposed to customer to provide additional information.
* **extendedProperties**: [RecommendationPropertiesExtendedProperties](#recommendationpropertiesextendedproperties): Extended properties
* **impact**: 'High' | 'Low' | 'Medium' | string: The business impact of the recommendation.
* **impactedField**: string: The resource type identified by Advisor.
* **impactedValue**: string: The resource identified by Advisor.
* **label**: string: The label of recommendation.
* **lastUpdated**: string: The most recent time that Advisor checked the validity of the recommendation.
* **learnMoreLink**: string: The link to learn more about recommendation and generation logic.
* **metadata**: [RecommendationPropertiesMetadata](#recommendationpropertiesmetadata): The recommendation metadata.
* **potentialBenefits**: string: The potential benefit of implementing recommendation.
* **recommendationTypeId**: string: The recommendation-type GUID.
* **remediation**: [RecommendationPropertiesRemediation](#recommendationpropertiesremediation): The automated way to apply recommendation.
* **resourceMetadata**: [ResourceMetadata](#resourcemetadata): Metadata of resource that was assessed
* **risk**: 'Error' | 'None' | 'Warning' | string: The potential risk of not implementing the recommendation.
* **shortDescription**: [ShortDescription](#shortdescription): A summary of the recommendation.
* **suppressionIds**: string[]: The list of snoozed and dismissed rules for the recommendation.

## RecommendationPropertiesActionsItem
### Properties
### Additional Properties
* **Additional Properties Type**: any

## RecommendationPropertiesExposedMetadataProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## RecommendationPropertiesExtendedProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RecommendationPropertiesMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: any

## RecommendationPropertiesRemediation
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ResourceMetadata
### Properties
* **action**: [ResourceMetadataAction](#resourcemetadataaction): The action to view resource.
* **plural**: string: The plural user friendly name of resource type. eg: virtual machines
* **resourceId**: string: Azure resource Id of the assessed resource
* **singular**: string: The singular user friendly name of resource type. eg: virtual machine
* **source**: string: Source from which recommendation is generated

## ResourceMetadataAction
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ShortDescription
### Properties
* **problem**: string: The issue or opportunity identified by the recommendation.
* **solution**: string: The remediation action suggested by the recommendation.

## SuppressionProperties
### Properties
* **expirationTimeStamp**: string (ReadOnly): Gets or sets the expiration time stamp.
* **suppressionId**: string: The GUID of the suppression.
* **ttl**: string: The duration for which the suppression is valid.

