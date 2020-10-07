# Microsoft.Subscription @ 2017-11-01-preview

## Microsoft.Subscription/subscriptionDefinitions
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

