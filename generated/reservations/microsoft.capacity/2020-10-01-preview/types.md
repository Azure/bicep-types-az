# Microsoft.Capacity @ 2020-10-01-preview

## Resource Microsoft.Capacity/reservationOrders@2020-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PurchaseRequestProperties
* **type**: 'Microsoft.Capacity/reservationOrders' (ReadOnly, DeployTimeConstant)

## PurchaseRequestProperties
### Properties
* **billingPlan**: 'Monthly' | 'Upfront'
* **displayName**: string
* **term**: 'P1Y' | 'P3Y'

