# Microsoft.Subscription @ 2018-03-01-preview

## Function createSubscription (Microsoft.Subscription@2018-03-01-preview)
* **Resource**: Microsoft.Subscription
* **ApiVersion**: 2018-03-01-preview
* **Input**: [SubscriptionCreationParameters](#subscriptioncreationparameters)
* **Output**: [SubscriptionCreationResult](#subscriptioncreationresult)

## AdPrincipal
### Properties
* **objectId**: string (Required): Object id of the Principal

## SubscriptionCreationParameters
### Properties
* **additionalParameters**: [SubscriptionCreationParametersAdditionalParameters](#subscriptioncreationparametersadditionalparameters): Additional, untyped parameters to support custom subscription creation scenarios.
* **displayName**: string: The display name of the subscription.
* **offerType**: 'MS-AZR-0017P' | 'MS-AZR-0148P' | string: The offer type of the subscription. For example, MS-AZR-0017P (EnterpriseAgreement) and MS-AZR-0148P (EnterpriseAgreement devTest) are available. Only valid when creating a subscription in a enrollment account scope.
* **owners**: [AdPrincipal](#adprincipal)[]: The list of principals that should be granted Owner access on the subscription. Principals should be of type User, Service Principal or Security Group.

## SubscriptionCreationParametersAdditionalParameters
### Properties
### Additional Properties
* **Additional Properties Type**: any

## SubscriptionCreationResult
### Properties
* **subscriptionLink**: string: The link to the new subscription. Use this link to check the status of subscription creation operation.

