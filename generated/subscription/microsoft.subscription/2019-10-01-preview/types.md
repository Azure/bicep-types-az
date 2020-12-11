# Microsoft.Subscription @ 2019-10-01-preview

## Microsoft.Subscription/aliases
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PutAliasRequestProperties
* **type**: 'Microsoft.Subscription/aliases' (ReadOnly, DeployTimeConstant)

## PutAliasRequestProperties
### Properties
* **billingScope**: string (Required, WriteOnly)
* **displayName**: string (Required, WriteOnly)
* **provisioningState**: 'Accepted' | 'Failed' | 'Succeeded' (ReadOnly)
* **subscriptionId**: string
* **workload**: 'DevTest' | 'Production' (Required, WriteOnly)

