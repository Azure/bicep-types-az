# Microsoft.Subscription @ 2020-09-01

## Resource Microsoft.Subscription/aliases@2020-09-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PutAliasRequestProperties](#putaliasrequestproperties) (Required): Put subscription creation result properties.
* **type**: 'Microsoft.Subscription/aliases' (ReadOnly, DeployTimeConstant): The resource type

## PutAliasRequestProperties
### Properties
* **billingScope**: string (WriteOnly)
* **displayName**: string (WriteOnly)
* **provisioningState**: 'Accepted' | 'Failed' | 'Succeeded' (ReadOnly): The provisioning state of the resource.
* **resellerId**: string (WriteOnly)
* **subscriptionId**: string: Newly created subscription Id.
* **workload**: 'DevTest' | 'Production' (WriteOnly)

