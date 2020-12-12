# Microsoft.Security @ 2018-06-01

## Resource Microsoft.Security/pricings@2018-06-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PricingProperties
* **type**: 'Microsoft.Security/pricings' (ReadOnly, DeployTimeConstant)

## PricingProperties
### Properties
* **freeTrialRemainingTime**: string (ReadOnly)
* **pricingTier**: 'Free' | 'Standard' (Required)

