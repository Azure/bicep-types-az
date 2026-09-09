# Microsoft.Subscription @ 2020-01-01

## Function cancel (Microsoft.Subscription@2020-01-01)
* **Resource**: Microsoft.Subscription
* **ApiVersion**: 2020-01-01
* **Output**: [CanceledSubscriptionId](#canceledsubscriptionid)

## Function createSubscription (Microsoft.Subscription@2020-01-01)
* **Resource**: Microsoft.Subscription
* **ApiVersion**: 2020-01-01
* **Input**: [SubscriptionCreationParameters](#subscriptioncreationparameters)
* **Output**: [SubscriptionCreationResult](#subscriptioncreationresult)

## Function enable (Microsoft.Subscription@2020-01-01)
* **Resource**: Microsoft.Subscription
* **ApiVersion**: 2020-01-01
* **Output**: [EnabledSubscriptionId](#enabledsubscriptionid)

## Function rename (Microsoft.Subscription@2020-01-01)
* **Resource**: Microsoft.Subscription
* **ApiVersion**: 2020-01-01
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

## RenamedSubscriptionId
### Properties
* **value**: string (ReadOnly): The ID of the subscriptions that is being renamed

## SubscriptionCreationParameters
### Properties
* **displayName**: string: The display name of the subscription.
* **managementGroupId**: string: The Management Group Id.
* **offerType**: 'MS-AZR-0017P' | 'MS-AZR-0148P' | string: The offer type of the subscription. For example, MS-AZR-0017P (EnterpriseAgreement) and MS-AZR-0148P (EnterpriseAgreement devTest) are available. Only valid when creating a subscription in a enrollment account scope.
* **owners**: [AdPrincipal](#adprincipal)[]: The list of principals that should be granted Owner access on the subscription. Principals should be of type User, Service Principal or Security Group.

## SubscriptionCreationResult
### Properties
* **subscriptionLink**: string: The link to the new subscription. Use this link to check the status of subscription creation operation.

## SubscriptionName
### Properties
* **subscriptionName**: string: New subscription name

