# Microsoft.Advisor @ 2017-03-31

## Resource Microsoft.Advisor/recommendations@2017-03-31 (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-03-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecommendationProperties](#recommendationproperties) (ReadOnly): The properties of the recommendation.
* **type**: 'Microsoft.Advisor/recommendations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Advisor/recommendations/suppressions@2017-03-31
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-03-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SuppressionProperties](#suppressionproperties): The properties of the suppression.
* **type**: 'Microsoft.Advisor/recommendations/suppressions' (ReadOnly, DeployTimeConstant): The resource type

## RecommendationProperties
### Properties
* **category**: 'Cost' | 'HighAvailability' | 'OperationalExcellence' | 'Performance' | 'Security' | string (ReadOnly): The category of the recommendation.
* **impact**: 'High' | 'Low' | 'Medium' | string (ReadOnly): The business impact of the recommendation.
* **impactedField**: string (ReadOnly): The resource type identified by Advisor.
* **impactedValue**: string (ReadOnly): The resource identified by Advisor.
* **lastUpdated**: string (ReadOnly): The most recent time that Advisor checked the validity of the recommendation.
* **metadata**: [RecommendationPropertiesMetadata](#recommendationpropertiesmetadata) (ReadOnly): The recommendation metadata.
* **recommendationTypeId**: string (ReadOnly): The recommendation-type GUID.
* **risk**: 'Error' | 'None' | 'Warning' | string (ReadOnly): The potential risk of not implementing the recommendation.
* **shortDescription**: [ShortDescription](#shortdescription) (ReadOnly): A summary of the recommendation.
* **suppressionIds**: string[] (ReadOnly): The list of snoozed and dismissed rules for the recommendation.

## RecommendationPropertiesMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ShortDescription
### Properties
* **problem**: string (ReadOnly): The issue or opportunity identified by the recommendation.
* **solution**: string (ReadOnly): The remediation action suggested by the recommendation.

## SuppressionProperties
### Properties
* **suppressionId**: string: The GUID of the suppression.
* **ttl**: string: The duration for which the suppression is valid.

