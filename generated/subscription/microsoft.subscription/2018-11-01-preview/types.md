# Microsoft.Subscription @ 2018-11-01-preview

## Function createSubscription (Microsoft.Subscription@2018-11-01-preview)
* **Resource**: Microsoft.Subscription
* **ApiVersion**: 2018-11-01-preview
* **Input**: [ModernSubscriptionCreationParameters](#modernsubscriptioncreationparameters)
* **Output**: [SubscriptionCreationResult](#subscriptioncreationresult)

## AdPrincipal
### Properties
* **objectId**: string (Required): Object id of the Principal

## ModernSubscriptionCreationParameters
### Properties
* **additionalParameters**: [ModernSubscriptionCreationParametersAdditionalParameters](#modernsubscriptioncreationparametersadditionalparameters): Additional, untyped parameters to support custom subscription creation scenarios.
* **billingProfileId**: string (Required): The ARM ID of the billing profile for which you want to create the subscription.
* **costCenter**: string: If set, the cost center will show up on the Azure usage and charges file.
* **displayName**: string (Required): The friendly name of the subscription.
* **managementGroupId**: string: The identifier of the management group to which this subscription will be associated.
* **owner**: [AdPrincipal](#adprincipal): If specified, the AD principal will get owner access to the subscription, along with the user who is performing the create subscription operation
* **skuId**: string (Required): The SKU ID of the Azure plan. Azure plan determines the pricing and service-level agreement of the subscription.  Use 001 for Microsoft Azure Plan and 002 for Microsoft Azure Plan for DevTest.

## ModernSubscriptionCreationParametersAdditionalParameters
### Properties
### Additional Properties
* **Additional Properties Type**: any

## SubscriptionCreationResult
### Properties
* **subscriptionLink**: string: The link to the new subscription. Use this link to check the status of subscription creation operation.

