# Microsoft.Advisor @ 2020-01-01

## Microsoft.Advisor/configurations
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConfigDataProperties
* **type**: 'Microsoft.Advisor/configurations' (ReadOnly, DeployTimeConstant)

## ConfigDataProperties
### Properties
* **digests**: DigestConfig[]
* **exclude**: bool
* **lowCpuThreshold**: '10' | '15' | '20' | '5'

## DigestConfig
### Properties
* **actionGroupResourceId**: string
* **categories**: 'Cost' | 'HighAvailability' | 'OperationalExcellence' | 'Performance' | 'Security'[]
* **frequency**: int
* **language**: string
* **name**: string
* **state**: 'Active' | 'Disabled'

## Microsoft.Advisor/configurations
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConfigDataProperties
* **type**: 'Microsoft.Advisor/configurations' (ReadOnly, DeployTimeConstant)

## Microsoft.Advisor/recommendations/suppressions
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SuppressionProperties
* **type**: 'Microsoft.Advisor/recommendations/suppressions' (ReadOnly, DeployTimeConstant)

## SuppressionProperties
### Properties
* **suppressionId**: string
* **ttl**: string

