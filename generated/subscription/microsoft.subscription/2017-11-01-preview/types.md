# Microsoft.Subscription @ 2017-11-01-preview

## Resource Microsoft.Subscription/subscriptionDefinitions@2017-11-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2017-11-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SubscriptionDefinitionProperties
* **type**: 'Microsoft.Subscription/subscriptionDefinitions' (ReadOnly, DeployTimeConstant)

## SubscriptionDefinitionProperties
### Properties
* **etag**: string
* **offerType**: string
* **subscriptionDisplayName**: string
* **subscriptionId**: string (ReadOnly)

