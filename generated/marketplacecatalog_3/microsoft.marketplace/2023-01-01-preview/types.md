# Microsoft.Marketplace @ 2023-01-01-preview

## Function checkUserHasReview (Microsoft.Marketplace/products@2023-01-01-preview)
* **Resource**: Microsoft.Marketplace/products
* **ApiVersion**: 2023-01-01-preview
* **Output**: [UserHasReview](#userhasreview)

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## UserHasReview
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [UserHasReviewProperties](#userhasreviewproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## UserHasReviewProperties
### Properties
* **hasReview**: bool (Required): Indicates whether user has already submitted a review.
* **updatedAt**: string (Required): The date and time when the review was last updated.

