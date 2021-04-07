# Microsoft.Subscription @ 2019-10-01-preview

## Resource Microsoft.Subscription/aliases@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PutAliasRequestProperties](#putaliasrequestproperties): Put subscription creation result properties.
* **type**: 'Microsoft.Subscription/aliases' (ReadOnly, DeployTimeConstant): The resource type

## PutAliasRequestProperties
### Properties
* **billingScope**: string (Required, WriteOnly)
* **displayName**: string (Required, WriteOnly)
* **provisioningState**: 'Accepted' | 'Failed' | 'Succeeded' (ReadOnly): The provisioning state of the resource.
* **subscriptionId**: string: Newly created subscription Id.
* **workload**: 'DevTest' | 'Production' (Required, WriteOnly)

