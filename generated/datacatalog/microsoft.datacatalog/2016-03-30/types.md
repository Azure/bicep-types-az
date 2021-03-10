# Microsoft.DataCatalog @ 2016-03-30

## Resource Microsoft.DataCatalog/catalogs@2016-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-30' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ADCCatalogProperties](#adccatalogproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DataCatalog/catalogs' (ReadOnly, DeployTimeConstant)

## ADCCatalogProperties
### Properties
* **admins**: [Principals](#principals)[]
* **enableAutomaticUnitAdjustment**: bool
* **sku**: 'Free' | 'Standard'
* **successfullyProvisioned**: bool
* **units**: int
* **users**: [Principals](#principals)[]

## Principals
### Properties
* **objectId**: string
* **upn**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

