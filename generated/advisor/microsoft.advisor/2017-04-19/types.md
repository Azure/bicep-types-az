# Microsoft.Advisor @ 2017-04-19

## Microsoft.Advisor/configurations
### Properties
* **apiVersion**: '2017-04-19' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'configurations' (Required, DeployTimeConstant)
* **nextLink**: string (ReadOnly)
* **properties**: schemas:5_properties (WriteOnly)
* **type**: 'Microsoft.Advisor/configurations' (ReadOnly, DeployTimeConstant)
* **value**: ConfigData[] (ReadOnly)

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

## Microsoft.Advisor/configurations
### Properties
* **apiVersion**: '2017-04-19' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'configurations' (Required, DeployTimeConstant)
* **nextLink**: string (ReadOnly)
* **properties**: schemas:5_properties (WriteOnly)
* **type**: 'Microsoft.Advisor/configurations' (ReadOnly, DeployTimeConstant)
* **value**: ConfigData[] (ReadOnly)

## Microsoft.Advisor/recommendations/suppressions
### Properties
* **apiVersion**: '2017-04-19' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SuppressionProperties
* **type**: 'Microsoft.Advisor/recommendations/suppressions' (ReadOnly, DeployTimeConstant)

## SuppressionProperties
### Properties
* **suppressionId**: string
* **ttl**: string

