# Microsoft.AzureActiveDirectory @ 2019-01-01-preview

## Resource Microsoft.AzureActiveDirectory/b2cDirectories@2019-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateTenantRequestBodyProperties (Required)
* **sku**: B2CResourceSKU (Required)
* **tags**: CreateTenantRequestBodyTags
* **type**: 'Microsoft.AzureActiveDirectory/b2cDirectories' (ReadOnly, DeployTimeConstant)

## CreateTenantRequestBodyProperties
### Properties
* **billingConfig**: B2CTenantResourcePropertiesBillingConfig (ReadOnly)
* **createTenantProperties**: CreateTenantProperties (WriteOnly)
* **tenantId**: string (ReadOnly)

## B2CTenantResourcePropertiesBillingConfig
### Properties
* **effectiveStartDateUtc**: string (ReadOnly)

## CreateTenantProperties
### Properties
* **countryCode**: string (WriteOnly)
* **displayName**: string (WriteOnly)

## B2CResourceSKU
### Properties

## CreateTenantRequestBodyTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

