# Microsoft.AzureActiveDirectory @ 2023-05-17-preview

## Resource Microsoft.AzureActiveDirectory/b2cDirectories@2023-05-17-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-17-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location in which the resource is hosted and data resides. Can be one of 'United States', 'Europe', 'Asia Pacific', or 'Australia'. Refer to [this documentation](https://aka.ms/B2CDataResidency) for more information.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateTenantRequestBodyPropertiesOrB2CTenantResourceProperties](#createtenantrequestbodypropertiesorb2ctenantresourceproperties) (Required)
* **sku**: [B2CResourceSKU](#b2cresourcesku) (Required): SKU properties of the Azure AD B2C tenant. Learn more about Azure AD B2C billing at [aka.ms/b2cBilling](https://aka.ms/b2cBilling).
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [CreateTenantRequestBodyTags](#createtenantrequestbodytags): Resource Tags
* **type**: 'Microsoft.AzureActiveDirectory/b2cDirectories' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureActiveDirectory/ciamDirectories@2023-05-17-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-17-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location in which the resource is hosted and data resides. Can be one of 'United States', 'Europe', 'Asia Pacific', or 'Australia'. Refer to [this documentation](https://aka.ms/ciam-data-location) for more information.
* **name**: string {maxLength: 26, pattern: "^[a-zA-Z0-9]{1,26}"} (Required, DeployTimeConstant): The resource name
* **properties**: [CiamTenantResourceProperties](#ciamtenantresourceproperties) (Required): The Azure AD for customers tenant resource properties
* **sku**: [CiamResourceSKU](#ciamresourcesku) (Required): SKU properties of the Azure AD for customers tenant. Learn more about Azure AD for customers billing at [https://aka.ms/ciambilling](https://aka.ms/ciambilling).
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [CiamTenantResourceTags](#ciamtenantresourcetags): Resource Tags
* **type**: 'Microsoft.AzureActiveDirectory/ciamDirectories' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureActiveDirectory/guestUsages@2023-05-17-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-17-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of the Guest Usages resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GuestUsagesResourceProperties](#guestusagesresourceproperties): The Guest Usages Resource Properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [GuestUsagesResourceTags](#guestusagesresourcetags): Key-value pairs of additional resource provisioning properties.
* **type**: 'Microsoft.AzureActiveDirectory/guestUsages' (ReadOnly, DeployTimeConstant): The resource type

## B2CResourceSKU
### Properties
* **name**: 'PremiumP1' | 'PremiumP2' | 'Standard' | string: The name of the SKU for the tenant.
* **tier**: 'A0' | string: The tier of the tenant.

## B2CTenantResourcePropertiesBillingConfig
### Properties
* **billingType**: 'Auths' | 'MAU' | string: The type of billing. Will be MAU for all new customers. If 'Auths', it can be updated to 'MAU'. Cannot be changed if value is 'MAU'. Learn more about Azure AD B2C billing at [aka.ms/b2cBilling](https://aka.ms/b2cbilling).
* **effectiveStartDateUtc**: string (ReadOnly): The data from which the billing type took effect

## CiamResourceSKU
### Properties
* **name**: 'PremiumP1' | 'PremiumP2' | 'Standard' | string (Required): The name of the SKU for the tenant.
* **tier**: 'A0' | string (Required): The tier of the tenant.

## CiamTenantResourceProperties
### Properties
* **billingConfig**: [CiamTenantResourcePropertiesBillingConfig](#ciamtenantresourcepropertiesbillingconfig) (ReadOnly): The billing configuration for the tenant.
* **createTenantProperties**: [CreateCiamTenantProperties](#createciamtenantproperties) (Required): These properties are used to create the Azure AD for customers tenant. These properties are not part of the Azure resource.
* **domainName**: string (ReadOnly): The domain name of the tenant
* **provisioningState**: 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Provisioning State
* **tenantId**: string: An identifier of the Azure AD for customers tenant.

## CiamTenantResourcePropertiesBillingConfig
### Properties
* **billingType**: 'MAU' | string (ReadOnly): The type of billing. Will be MAU for all new customers. Cannot be changed if value is 'MAU'. Learn more about Azure AD for customers billing at [aka.ms/b2cBilling](https://aka.ms/b2cbilling).
* **effectiveStartDateUtc**: string (ReadOnly): The data from which the billing type took effect

## CiamTenantResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CreateCiamTenantProperties
### Properties
* **countryCode**: string (Required): Country code of Azure tenant (e.g. 'US'). Refer to [https://aka.ms/ciam-data-location](https://aka.ms/ciam-data-location) to see valid country codes and corresponding data residency locations. If you do not see a country code in an valid data residency location, choose one from the list.
* **displayName**: string (Required): The display name of the Azure AD for customers tenant.

## CreateTenantProperties
### Properties
* **countryCode**: string: Country code of Azure tenant (e.g. 'US'). Refer to [aka.ms/B2CDataResidency](https://aka.ms/B2CDataResidency) to see valid country codes and corresponding data residency locations. If you do not see a country code in an valid data residency location, choose one from the list.
* **displayName**: string: The display name of the Azure AD B2C tenant.
* **isGoLocalTenant**: bool: Enable GoLocal add-on to store data at rest in the specific Geo. Refer to [aka.ms/B2CDataResidency](https://aka.ms/B2CDataResidency) to see local data residency options.

## CreateTenantRequestBodyPropertiesOrB2CTenantResourceProperties
### Properties
* **billingConfig**: [B2CTenantResourcePropertiesBillingConfig](#b2ctenantresourcepropertiesbillingconfig) (ReadOnly): The billing configuration for the tenant.
* **createTenantProperties**: [CreateTenantProperties](#createtenantproperties) (WriteOnly): These properties are used to create the Azure AD B2C tenant. These properties are not part of the Azure resource.
* **isGoLocalTenant**: bool (ReadOnly): Enable GoLocal add-on to store data at rest in the specific Geo. Refer to [aka.ms/B2CDataResidency](https://aka.ms/B2CDataResidency) to see local data residency options.
* **tenantId**: string (ReadOnly): An identifier of the Azure AD B2C tenant.

## CreateTenantRequestBodyTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GuestUsagesResourceProperties
### Properties
* **tenantId**: string: An identifier for the tenant for which the resource is being created

## GuestUsagesResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

