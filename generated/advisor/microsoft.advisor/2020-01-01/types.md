# Microsoft.Advisor @ 2020-01-01

## Resource Microsoft.Advisor/configurations@2020-01-01
* **Valid Scope(s)**: Subscription, ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: ConfigDataProperties (WriteOnly)
* **type**: 'Microsoft.Advisor/configurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Advisor/recommendations/suppressions@2020-01-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SuppressionProperties
* **type**: 'Microsoft.Advisor/recommendations/suppressions' (ReadOnly, DeployTimeConstant)

## ConfigDataProperties
### Properties
* **digests**: DigestConfig[] (WriteOnly)
* **exclude**: bool (WriteOnly)
* **lowCpuThreshold**: '10' | '15' | '20' | '5' (WriteOnly)

## DigestConfig
### Properties
* **actionGroupResourceId**: string (WriteOnly)
* **categories**: 'Cost' | 'HighAvailability' | 'OperationalExcellence' | 'Performance' | 'Security'[] (WriteOnly)
* **frequency**: int (WriteOnly)
* **language**: string (WriteOnly)
* **name**: string (WriteOnly)
* **state**: 'Active' | 'Disabled' (WriteOnly)

## SuppressionProperties
### Properties
* **expirationTimeStamp**: string (ReadOnly)
* **suppressionId**: string
* **ttl**: string

