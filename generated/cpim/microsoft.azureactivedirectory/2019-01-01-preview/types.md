# Microsoft.AzureActiveDirectory @ 2019-01-01-preview

## Resource Microsoft.AzureActiveDirectory/b2cDirectories@2019-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location in which the resource is hosted and data resides. Can be one of 'United States', 'Europe', 'Asia Pacific', or 'Australia' (preview). Refer to [this documentation](https://aka.ms/B2CDataResidency) for more information.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateTenantRequestBodyProperties](#createtenantrequestbodyproperties) (Required): Properties of the Azure AD B2C tenant Azure resource.
* **sku**: [B2CResourceSKU](#b2cresourcesku) (Required): SKU properties of the Azure AD B2C tenant. Learn more about Azure AD B2C billing at [aka.ms/b2cBilling](https://aka.ms/b2cBilling).
* **tags**: [CreateTenantRequestBodyTags](#createtenantrequestbodytags): Resource Tags
* **type**: 'Microsoft.AzureActiveDirectory/b2cDirectories' (ReadOnly, DeployTimeConstant): The resource type

## CreateTenantRequestBodyProperties
### Properties
* **billingConfig**: [B2CTenantResourcePropertiesBillingConfig](#b2ctenantresourcepropertiesbillingconfig) (ReadOnly): The billing configuration for the tenant.
* **createTenantProperties**: [CreateTenantProperties](#createtenantproperties) (WriteOnly)
* **tenantId**: string (ReadOnly): An identifier of the B2C tenant.

## B2CTenantResourcePropertiesBillingConfig
### Properties
* **billingType**: 'Auths' | 'MAU' (ReadOnly): The type of billing. Will be MAU for all new customers. If 'Auths', it can be updated to 'MAU'. Cannot be changed if value is 'MAU'. Learn more about Azure AD B2C billing at [aka.ms/b2cBilling](https://aka.ms/b2cbilling).
* **effectiveStartDateUtc**: string (ReadOnly): The data from which the billing type took effect

## CreateTenantProperties
### Properties
* **countryCode**: string (WriteOnly)
* **displayName**: string (WriteOnly)

## B2CResourceSKU
### Properties
* **name**: 'PremiumP1' | 'PremiumP2' | 'Standard': The name of the SKU for the tenant.
* **tier**: 'A0': The tier of the tenant.

## CreateTenantRequestBodyTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

