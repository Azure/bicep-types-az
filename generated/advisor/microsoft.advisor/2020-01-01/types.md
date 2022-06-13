# Microsoft.Advisor @ 2020-01-01

## Resource Microsoft.Advisor/configurations@2020-01-01
* **Valid Scope(s)**: Subscription, ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigDataProperties](#configdataproperties): The Advisor configuration data structure.
* **type**: 'Microsoft.Advisor/configurations' (ReadOnly, DeployTimeConstant): The resource type

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

## SuppressionProperties
### Properties
* **expirationTimeStamp**: string (ReadOnly): Gets or sets the expiration time stamp.
* **suppressionId**: string: The GUID of the suppression.
* **ttl**: string: The duration for which the suppression is valid.

