# Microsoft.DataCatalog @ 2016-03-30

## Microsoft.DataCatalog/catalogs
### Properties
* **apiVersion**: '2016-03-30' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ADCCatalogProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DataCatalog/catalogs' (ReadOnly, DeployTimeConstant)

## ADCCatalogProperties
### Properties
* **admins**: Principals[]
* **enableAutomaticUnitAdjustment**: bool
* **sku**: 'Free' | 'Standard'
* **successfullyProvisioned**: bool
* **units**: int
* **users**: Principals[]

## Principals
### Properties
* **objectId**: string
* **upn**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

