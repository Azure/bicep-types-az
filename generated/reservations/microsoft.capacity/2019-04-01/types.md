# Microsoft.Capacity @ 2019-04-01

## Resource Microsoft.Capacity/reservationOrders@2019-04-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PurchaseRequestProperties
* **type**: 'Microsoft.Capacity/reservationOrders' (ReadOnly, DeployTimeConstant)

## PurchaseRequestProperties
### Properties
* **billingPlan**: 'Monthly' | 'Upfront'
* **displayName**: string
* **term**: 'P1Y' | 'P3Y'

