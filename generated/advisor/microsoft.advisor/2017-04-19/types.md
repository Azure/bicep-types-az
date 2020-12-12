# Microsoft.Advisor @ 2017-04-19

## Resource Microsoft.Advisor/configurations@2017-04-19
* **Valid Scope(s)**: Subscription, ResourceGroup
### Properties
* **apiVersion**: '2017-04-19' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'configurations' (Required, DeployTimeConstant)
* **nextLink**: string (ReadOnly)
* **properties**: schemas:5_properties (WriteOnly)
* **type**: 'Microsoft.Advisor/configurations' (ReadOnly, DeployTimeConstant)
* **value**: ConfigData[] (ReadOnly)

## Resource Microsoft.Advisor/recommendations/suppressions@2017-04-19
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-04-19' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SuppressionProperties
* **type**: 'Microsoft.Advisor/recommendations/suppressions' (ReadOnly, DeployTimeConstant)

## schemas:5_properties
### Properties
* **exclude**: bool (WriteOnly)
* **low_cpu_threshold**: string (WriteOnly)
### Additional Properties
* **Additional Properties Type**: any

## ConfigData
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: schemas:5_properties (ReadOnly)
* **type**: string (ReadOnly)

## SuppressionProperties
### Properties
* **suppressionId**: string
* **ttl**: string

