# Microsoft.Marketplace @ 2020-01-01

## Resource Microsoft.Marketplace/privateStores@2020-01-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateStoreProperties
* **type**: 'Microsoft.Marketplace/privateStores' (ReadOnly, DeployTimeConstant)

## PrivateStoreProperties
### Properties
* **availability**: 'disabled' | 'enabled'
* **customerTag**: string
* **eTag**: string
* **hasCommercialAssociation**: bool
* **hasMultiTenantAssociation**: bool
* **isGov**: bool
* **privateStoreId**: string
* **privateStoreName**: string
* **tenantIds**: string[]
* **tenantTag**: string

