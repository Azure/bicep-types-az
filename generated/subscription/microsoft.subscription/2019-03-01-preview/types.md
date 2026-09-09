# Microsoft.Subscription @ 2019-03-01-preview

## Function cancel (Microsoft.Subscription@2019-03-01-preview)
* **Resource**: Microsoft.Subscription
* **ApiVersion**: 2019-03-01-preview
* **Output**: [CanceledSubscriptionId](#canceledsubscriptionid)

## Function enable (Microsoft.Subscription@2019-03-01-preview)
* **Resource**: Microsoft.Subscription
* **ApiVersion**: 2019-03-01-preview
* **Output**: [EnabledSubscriptionId](#enabledsubscriptionid)

## Function rename (Microsoft.Subscription@2019-03-01-preview)
* **Resource**: Microsoft.Subscription
* **ApiVersion**: 2019-03-01-preview
* **Input**: [SubscriptionName](#subscriptionname)
* **Output**: [RenamedSubscriptionId](#renamedsubscriptionid)

## CanceledSubscriptionId
### Properties
* **subscriptionId**: string (ReadOnly): The ID of the canceled subscription

## EnabledSubscriptionId
### Properties
* **subscriptionId**: string (ReadOnly): The ID of the subscriptions that is being enabled

## RenamedSubscriptionId
### Properties
* **subscriptionId**: string (ReadOnly): The ID of the subscriptions that is being renamed

## SubscriptionName
### Properties
* **subscriptionName**: string: New subscription name

