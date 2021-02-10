# Microsoft.AzureActiveDirectory @ 2019-01-01-preview

## Resource Microsoft.AzureActiveDirectory/b2cDirectories@2019-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:11_properties (Required)
* **sku**: B2CResourceSKU (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.AzureActiveDirectory/b2cDirectories' (ReadOnly, DeployTimeConstant)

## schemas:11_properties
### Properties
* **billingConfig**: schemas:3_billingConfig (ReadOnly)
* **createTenantProperties**: CreateTenantProperties (WriteOnly)
* **tenantId**: string (ReadOnly)

## schemas:3_billingConfig
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

