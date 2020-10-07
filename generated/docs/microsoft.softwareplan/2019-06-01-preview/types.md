# Microsoft.SoftwarePlan @ 2019-06-01-preview

## Microsoft.SoftwarePlan/hybridUseBenefits
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: int (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: HybridUseBenefitProperties
* **sku**: Sku (Required)
* **type**: 'Microsoft.SoftwarePlan/hybridUseBenefits' (ReadOnly, DeployTimeConstant)

## HybridUseBenefitProperties
### Properties
* **createdDate**: string (ReadOnly)
* **lastUpdatedDate**: string (ReadOnly)
* **provisioningState**: 'Cancelled' | 'Failed' | 'Succeeded' (ReadOnly)

## Sku
### Properties
* **name**: string

