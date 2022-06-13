# Microsoft.Capacity @ 2019-07-19-preview

## Resource Microsoft.Capacity/resourceProviders/locations/serviceLimits@2019-07-19-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-07-19-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [QuotaProperties](#quotaproperties): Quota properties for the resource.
* **type**: 'Microsoft.Capacity/resourceProviders/locations/serviceLimits' (ReadOnly, DeployTimeConstant): The resource type

## QuotaProperties
### Properties
* **currentValue**: int (ReadOnly): The current resource usages information.
* **limit**: int: The quota limit.
* **name**: [ResourceName](#resourcename): Name of the resource provide by the resource Provider. Please use this name property for quotaRequests.
* **properties**: any: Additional properties for the specific resource provider.
* **quotaPeriod**: string (ReadOnly): The quota period over which the usage values are summarized, such as - P1D (Per one day), PT1M (Per one minute), PT1S (Per one second). This parameter is optional because, for some resources like compute, the period doesn’t matter.
* **resourceType**: 'dedicated' | 'lowPriority' | 'serviceSpecific' | 'shared' | 'standard' | string: The Resource Type Name.
* **unit**: string: The units of the limit, such as - Count, Bytes, etc. Use the unit field provided in the Get quota response.

## ResourceName
### Properties
* **localizedValue**: string (ReadOnly): Resource display name.
* **value**: string: Resource name.

