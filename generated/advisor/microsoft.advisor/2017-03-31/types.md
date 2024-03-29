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
* **category**: 'Cost' | 'HighAvailability' | 'OperationalExcellence' | 'Performance' | 'Security' | string: The category of the recommendation.
* **impact**: 'High' | 'Low' | 'Medium' | string: The business impact of the recommendation.
* **impactedField**: string: The resource type identified by Advisor.
* **impactedValue**: string: The resource identified by Advisor.
* **lastUpdated**: string: The most recent time that Advisor checked the validity of the recommendation.
* **metadata**: [RecommendationPropertiesMetadata](#recommendationpropertiesmetadata): The recommendation metadata.
* **recommendationTypeId**: string: The recommendation-type GUID.
* **risk**: 'Error' | 'None' | 'Warning' | string: The potential risk of not implementing the recommendation.
* **shortDescription**: [ShortDescription](#shortdescription): A summary of the recommendation.
* **suppressionIds**: (string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"})[]: The list of snoozed and dismissed rules for the recommendation.

## RecommendationPropertiesMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ShortDescription
### Properties
* **problem**: string: The issue or opportunity identified by the recommendation.
* **solution**: string: The remediation action suggested by the recommendation.

## SuppressionProperties
### Properties
* **suppressionId**: string: The GUID of the suppression.
* **ttl**: string: The duration for which the suppression is valid.

