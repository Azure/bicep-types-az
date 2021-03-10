# Microsoft.AzureActiveDirectory @ 2019-01-01-preview

## Resource Microsoft.AzureActiveDirectory/b2cDirectories@2019-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CreateTenantRequestBodyProperties](#createtenantrequestbodyproperties) (Required)
* **sku**: [B2CResourceSKU](#b2cresourcesku) (Required)
* **tags**: [CreateTenantRequestBodyTags](#createtenantrequestbodytags)
* **type**: 'Microsoft.AzureActiveDirectory/b2cDirectories' (ReadOnly, DeployTimeConstant)

## CreateTenantRequestBodyProperties
### Properties
* **billingConfig**: [B2CTenantResourcePropertiesBillingConfig](#b2ctenantresourcepropertiesbillingconfig) (ReadOnly)
* **createTenantProperties**: [CreateTenantProperties](#createtenantproperties) (WriteOnly)
* **tenantId**: string (ReadOnly)

## B2CTenantResourcePropertiesBillingConfig
### Properties
* **billingType**: 'Auths' | 'MAU' (ReadOnly)
* **effectiveStartDateUtc**: string (ReadOnly)

## CreateTenantProperties
### Properties
* **countryCode**: string (WriteOnly)
* **displayName**: string (WriteOnly)

## B2CResourceSKU
### Properties
* **name**: 'PremiumP1' | 'PremiumP2' | 'Standard'
* **tier**: 'A0'

## CreateTenantRequestBodyTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

