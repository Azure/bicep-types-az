# Microsoft.Capacity @ 2020-10-25

## Resource Microsoft.Capacity/resourceProviders/locations/serviceLimits@2020-10-25
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-10-25' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [QuotaProperties](#quotaproperties): Quota properties for the resource.
* **type**: 'Microsoft.Capacity/resourceProviders/locations/serviceLimits' (ReadOnly, DeployTimeConstant): The resource type

## QuotaProperties
### Properties
* **currentValue**: int (ReadOnly): Current usage value for the resource.
* **limit**: int: Quota properties.
* **name**: [ResourceName](#resourcename): Name of the resource provide by the resource provider. Use this property for quotaRequests resource operations.
* **properties**: any: Additional properties for the specified resource provider.
* **quotaPeriod**: string (ReadOnly): The time period over which the quota usage values are summarized. For example, P1D (per one day), PT1M (per one minute), and PT1S (per one second). This parameter is optional because, for some resources such as compute, the time period is irrelevant.
* **resourceType**: 'dedicated' | 'lowPriority' | 'serviceSpecific' | 'shared' | 'standard' | string: The name of the resource type.
* **unit**: string: The limit units, such as **count** and **bytes**. Use the unit field provided in the response of the GET quota operation.

## ResourceName
### Properties
* **localizedValue**: string (ReadOnly): Resource display localized name.
* **value**: string: Resource name.

