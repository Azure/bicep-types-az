# Microsoft.Subscription @ 2019-10-01-preview

## Resource Microsoft.Subscription/aliases@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PutAliasRequestProperties](#putaliasrequestproperties)
* **type**: 'Microsoft.Subscription/aliases' (ReadOnly, DeployTimeConstant)

## PutAliasRequestProperties
### Properties
* **billingScope**: string (Required, WriteOnly)
* **displayName**: string (Required, WriteOnly)
* **provisioningState**: 'Accepted' | 'Failed' | 'Succeeded' (ReadOnly)
* **subscriptionId**: string
* **workload**: 'DevTest' | 'Production' (Required, WriteOnly)

