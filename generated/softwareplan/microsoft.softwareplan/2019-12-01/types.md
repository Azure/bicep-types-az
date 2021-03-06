# Microsoft.SoftwarePlan @ 2019-12-01

## Resource Microsoft.SoftwarePlan/hybridUseBenefits@2019-12-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: int (ReadOnly): Indicates the revision of the hybrid use benefit
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridUseBenefitProperties](#hybridusebenefitproperties): Hybrid use benefit properties
* **sku**: [Sku](#sku) (Required): The SKU to be applied for this resource
* **type**: 'Microsoft.SoftwarePlan/hybridUseBenefits' (ReadOnly, DeployTimeConstant): The resource type

## HybridUseBenefitProperties
### Properties
* **createdDate**: string (ReadOnly): Created date
* **lastUpdatedDate**: string (ReadOnly): Last updated date
* **provisioningState**: 'Cancelled' | 'Failed' | 'Succeeded' (ReadOnly): Represent the current state of the Reservation.

## Sku
### Properties
* **name**: string: Name of the SKU to be applied

