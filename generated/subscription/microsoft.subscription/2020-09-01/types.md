# Microsoft.Subscription @ 2020-09-01

## Resource Microsoft.Subscription/aliases@2020-09-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PutAliasRequestProperties](#putaliasrequestproperties) (Required): Put subscription properties.
* **type**: 'Microsoft.Subscription/aliases' (ReadOnly, DeployTimeConstant): The resource type

## PutAliasRequestProperties
### Properties
* **billingScope**: string (WriteOnly): Determines whether subscription is fieldLed, partnerLed or LegacyEA
* **displayName**: string (WriteOnly): The friendly name of the subscription.
* **provisioningState**: 'Accepted' | 'Failed' | 'Succeeded' (ReadOnly): The provisioning state of the resource. Possible values include: 'Accepted', 'Succeeded', 'Failed'
* **resellerId**: string (WriteOnly): Reseller ID, basically MPN Id
* **subscriptionId**: string: This parameter can be used to create alias for existing subscription Id
* **workload**: 'DevTest' | 'Production' (WriteOnly): The workload type of the subscription. It can be either Production or DevTest. Possible values include: 'Production', 'DevTest'

