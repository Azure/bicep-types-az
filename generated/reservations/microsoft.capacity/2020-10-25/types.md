# Microsoft.Capacity @ 2020-10-25

## Resource Microsoft.Capacity/resourceProviders/locations/serviceLimits@2020-10-25
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-10-25' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [QuotaProperties](#quotaproperties)
* **type**: 'Microsoft.Capacity/resourceProviders/locations/serviceLimits' (ReadOnly, DeployTimeConstant)

## QuotaProperties
### Properties
* **currentValue**: int (ReadOnly)
* **limit**: int
* **name**: [ResourceName](#resourcename)
* **properties**: any
* **quotaPeriod**: string (ReadOnly)
* **resourceType**: any
* **unit**: string

## ResourceName
### Properties
* **localizedValue**: string (ReadOnly)
* **value**: string

