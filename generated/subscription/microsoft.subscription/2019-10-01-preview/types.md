# Microsoft.Subscription @ 2019-10-01-preview

## Resource Microsoft.Subscription/aliases@2019-10-01-preview
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PutAliasRequestPropertiesOrPutAliasResponseProperties](#putaliasrequestpropertiesorputaliasresponseproperties): Put alias request properties.
* **type**: 'Microsoft.Subscription/aliases' (ReadOnly, DeployTimeConstant): The resource type

## Function cancel (Microsoft.Subscription@2019-10-01-preview)
* **Resource**: Microsoft.Subscription
* **ApiVersion**: 2019-10-01-preview
* **Output**: [CanceledSubscriptionId](#canceledsubscriptionid)

## Function createSubscription (Microsoft.Subscription@2019-10-01-preview)
* **Resource**: Microsoft.Subscription
* **ApiVersion**: 2019-10-01-preview
* **Input**: [SubscriptionCreationParameters](#subscriptioncreationparameters)
* **Output**: [SubscriptionCreationResult](#subscriptioncreationresult)

## Function enable (Microsoft.Subscription@2019-10-01-preview)
* **Resource**: Microsoft.Subscription
* **ApiVersion**: 2019-10-01-preview
* **Output**: [EnabledSubscriptionId](#enabledsubscriptionid)

## Function rename (Microsoft.Subscription@2019-10-01-preview)
* **Resource**: Microsoft.Subscription
* **ApiVersion**: 2019-10-01-preview
* **Input**: [SubscriptionName](#subscriptionname)
* **Output**: [RenamedSubscriptionId](#renamedsubscriptionid)

## AdPrincipal
### Properties
* **objectId**: string (Required): Object id of the Principal

## CanceledSubscriptionId
### Properties
* **value**: string (ReadOnly): The ID of the canceled subscription

## EnabledSubscriptionId
### Properties
* **value**: string (ReadOnly): The ID of the subscriptions that is being enabled

## PutAliasRequestPropertiesOrPutAliasResponseProperties
### Properties
* **billingScope**: string (Required, WriteOnly): Determines whether subscription is fieldLed, partnerLed or LegacyEA
* **displayName**: string (Required, WriteOnly): The friendly name of the subscription.
* **provisioningState**: 'Accepted' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource.
* **subscriptionId**: string: This parameter can be used to create alias for existing subscription Id
* **workload**: 'DevTest' | 'Production' | string (Required, WriteOnly): The workload type of the subscription. It can be either Production or DevTest.

## RenamedSubscriptionId
### Properties
* **value**: string (ReadOnly): The ID of the subscriptions that is being renamed

## SubscriptionCreationParameters
### Properties
* **additionalParameters**: [SubscriptionCreationParametersAdditionalParameters](#subscriptioncreationparametersadditionalparameters): Additional, untyped parameters to support custom subscription creation scenarios.
* **displayName**: string: The display name of the subscription.
* **managementGroupId**: string: The Management Group Id.
* **offerType**: 'MS-AZR-0017P' | 'MS-AZR-0148P' | string: The offer type of the subscription. For example, MS-AZR-0017P (EnterpriseAgreement) and MS-AZR-0148P (EnterpriseAgreement devTest) are available. Only valid when creating a subscription in a enrollment account scope.
* **owners**: [AdPrincipal](#adprincipal)[]: The list of principals that should be granted Owner access on the subscription. Principals should be of type User, Service Principal or Security Group.

## SubscriptionCreationParametersAdditionalParameters
### Properties
### Additional Properties
* **Additional Properties Type**: any

## SubscriptionCreationResult
### Properties
* **subscriptionLink**: string: The link to the new subscription. Use this link to check the status of subscription creation operation.

## SubscriptionName
### Properties
* **subscriptionName**: string: New subscription name

