# Microsoft.DataCatalog @ 2016-03-30

## Resource Microsoft.DataCatalog/catalogs@2016-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-30' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Resource etag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ADCCatalogProperties](#adccatalogproperties): Azure Data Catalog properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.DataCatalog/catalogs' (ReadOnly, DeployTimeConstant): The resource type

## ADCCatalogProperties
### Properties
* **admins**: [Principals](#principals)[]: Azure data catalog admin list.
* **enableAutomaticUnitAdjustment**: bool: Automatic unit adjustment enabled or not.
* **sku**: 'Free' | 'Standard' | string: Azure data catalog SKU.
* **successfullyProvisioned**: bool: Azure data catalog provision status.
* **units**: int: Azure data catalog units.
* **users**: [Principals](#principals)[]: Azure data catalog user list.

## Principals
### Properties
* **objectId**: string: Object Id for the user
* **upn**: string: UPN of the user.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

