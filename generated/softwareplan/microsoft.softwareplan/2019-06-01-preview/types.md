# Microsoft.SoftwarePlan @ 2019-06-01-preview

## Resource Microsoft.SoftwarePlan/hybridUseBenefits@2019-06-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: int (ReadOnly): Indicates the revision of the hybrid use benefit
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridUseBenefitProperties](#hybridusebenefitproperties): Property bag for a hybrid use benefit response
* **sku**: [Sku](#sku) (Required): Hybrid use benefit SKU
* **type**: 'Microsoft.SoftwarePlan/hybridUseBenefits' (ReadOnly, DeployTimeConstant): The resource type

## HybridUseBenefitProperties
### Properties
* **createdDate**: string (ReadOnly): Created date
* **lastUpdatedDate**: string (ReadOnly): Last updated date
* **provisioningState**: 'Cancelled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state

## Sku
### Properties
* **name**: string: Name of the SKU to be applied

