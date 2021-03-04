# Microsoft.Advisor @ 2020-01-01

## Resource Microsoft.Advisor/configurations@2020-01-01
* **Valid Scope(s)**: Subscription, ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **type**: 'Microsoft.Advisor/configurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Advisor/recommendations/suppressions@2020-01-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SuppressionProperties
* **type**: 'Microsoft.Advisor/recommendations/suppressions' (ReadOnly, DeployTimeConstant)

## SuppressionProperties
### Properties
* **expirationTimeStamp**: string (ReadOnly)
* **suppressionId**: string
* **ttl**: string

