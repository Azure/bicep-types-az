# Microsoft.Capacity @ 2019-07-19-preview

## Resource Microsoft.Capacity/resourceProviders/locations/serviceLimits@2019-07-19-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-07-19-preview' (ReadOnly, DeployTimeConstant)
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

