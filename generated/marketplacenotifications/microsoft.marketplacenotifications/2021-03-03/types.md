# Microsoft.MarketplaceNotifications @ 2021-03-03

## Resource Microsoft.MarketplaceNotifications/reviewsNotification@2021-03-03 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-03-03' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OfferProperties](#offerproperties) (ReadOnly): The offer data structure.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.MarketplaceNotifications/reviewsNotification' (ReadOnly, DeployTimeConstant): The resource type

## OfferProperties
### Properties
* **createdDate**: string (ReadOnly): date for creating the notification
* **offerDisplayName**: string (ReadOnly): offer display name
* **offerId**: string (ReadOnly): legacy offer id of the notification (publisher.offer)
* **principalId**: string (ReadOnly): user's principal id

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

