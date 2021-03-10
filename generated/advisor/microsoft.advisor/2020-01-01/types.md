# Microsoft.Advisor @ 2020-01-01

## Resource Microsoft.Advisor/configurations@2020-01-01
* **Valid Scope(s)**: Subscription, ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConfigDataProperties](#configdataproperties)
* **type**: 'Microsoft.Advisor/configurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Advisor/recommendations/suppressions@2020-01-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SuppressionProperties](#suppressionproperties)
* **type**: 'Microsoft.Advisor/recommendations/suppressions' (ReadOnly, DeployTimeConstant)

## ConfigDataProperties
### Properties
* **digests**: [DigestConfig](#digestconfig)[]
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

## SuppressionProperties
### Properties
* **expirationTimeStamp**: string (ReadOnly)
* **suppressionId**: string
* **ttl**: string

