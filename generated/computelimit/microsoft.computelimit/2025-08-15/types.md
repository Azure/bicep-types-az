# Microsoft.ComputeLimit @ 2025-08-15

## Resource Microsoft.ComputeLimit/locations/guestSubscriptions@2025-08-15
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2025-08-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9a-fA-F]{8}(-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GuestSubscriptionProperties](#guestsubscriptionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ComputeLimit/locations/guestSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ComputeLimit/locations/sharedLimits@2025-08-15
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2025-08-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SharedLimitProperties](#sharedlimitproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ComputeLimit/locations/sharedLimits' (ReadOnly, DeployTimeConstant): The resource type

## GuestSubscriptionProperties
### Properties
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource.

## LimitName
### Properties
* **localizedValue**: string (ReadOnly): The localized limit name.
* **value**: string (Required): The limit name.

## SharedLimitProperties
### Properties
* **limit**: int (ReadOnly): The maximum permitted usage of the resource.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource.
* **resourceName**: [LimitName](#limitname) (ReadOnly): The limit name properties.
* **unit**: string (ReadOnly): The quota units, such as Count.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

