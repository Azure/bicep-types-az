# Microsoft.Subscription @ 2019-10-01-preview

## Resource Microsoft.Subscription/aliases@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PutAliasRequestPropertiesOrPutAliasResponseProperties](#putaliasrequestpropertiesorputaliasresponseproperties): Put alias request properties.
* **type**: 'Microsoft.Subscription/aliases' (ReadOnly, DeployTimeConstant): The resource type

## PutAliasRequestPropertiesOrPutAliasResponseProperties
### Properties
* **billingScope**: string (Required, WriteOnly): Determines whether subscription is fieldLed, partnerLed or LegacyEA
* **displayName**: string (Required, WriteOnly): The friendly name of the subscription.
* **provisioningState**: 'Accepted' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource.
* **subscriptionId**: string: This parameter can be used to create alias for existing subscription Id
* **workload**: 'DevTest' | 'Production' | string (Required, WriteOnly): The workload type of the subscription. It can be either Production or DevTest.

