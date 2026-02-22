# Microsoft.Sql @ 2015-05-01

## Resource Microsoft.Sql/locations/usages@2015-05-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SubscriptionUsageProperties](#subscriptionusageproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/locations/usages' (ReadOnly, DeployTimeConstant): The resource type

## SubscriptionUsageProperties
### Properties
* **currentValue**: int (ReadOnly): Current value of the metric.
* **displayName**: string (ReadOnly): User-readable name of the metric.
* **limit**: int (ReadOnly): Boundary value of the metric.
* **unit**: string (ReadOnly): Unit of the metric.

