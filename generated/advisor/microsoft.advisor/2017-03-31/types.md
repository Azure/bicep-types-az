# Microsoft.Advisor @ 2017-03-31

## Resource Microsoft.Advisor/recommendations/suppressions@2017-03-31
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-03-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SuppressionProperties](#suppressionproperties): The properties of the suppression.
* **type**: 'Microsoft.Advisor/recommendations/suppressions' (ReadOnly, DeployTimeConstant): The resource type

## SuppressionProperties
### Properties
* **suppressionId**: string: The GUID of the suppression.
* **ttl**: string: The duration for which the suppression is valid.

