# Microsoft.Storage @ 2017-06-01

## Resource Microsoft.Storage/storageAccounts@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **kind**: 'BlobStorage' | 'Storage' (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageAccountPropertiesCreateParameters
* **sku**: Sku (Required)
* **tags**: StorageAccountCreateParametersTags
* **type**: 'Microsoft.Storage/storageAccounts' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: '[object Object]' (Required)

## StorageAccountPropertiesCreateParameters
### Properties
* **accessTier**: 'Cool' | 'Hot'
* **creationTime**: string (ReadOnly)
* **customDomain**: CustomDomain
* **enableHttpsTrafficOnly**: bool
* **encryption**: Encryption
* **lastGeoFailoverTime**: string (ReadOnly)
* **networkRuleSet**: NetworkRuleSet
* **primaryEndpoints**: Endpoints (ReadOnly)
* **primaryLocation**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'ResolvingDNS' | 'Succeeded' (ReadOnly)
* **secondaryEndpoints**: Endpoints (ReadOnly)
* **secondaryLocation**: string (ReadOnly)
* **statusOfPrimary**: 'available' | 'unavailable' (ReadOnly)
* **statusOfSecondary**: 'available' | 'unavailable' (ReadOnly)

## CustomDomain
### Properties
* **name**: string (Required)
* **useSubDomainName**: bool

## Encryption
### Properties
* **keySource**: 'Microsoft.Keyvault' | 'Microsoft.Storage' (Required)
* **keyVaultProperties**: KeyVaultProperties
* **services**: EncryptionServices

## KeyVaultProperties
### Properties
* **keyName**: string
* **keyVaultUri**: string
* **keyVersion**: string

## EncryptionServices
### Properties
* **blob**: EncryptionService
* **file**: EncryptionService
* **queue**: EncryptionService (ReadOnly)
* **table**: EncryptionService (ReadOnly)

## EncryptionService
### Properties
* **enabled**: bool
* **lastEnabledTime**: string (ReadOnly)

## NetworkRuleSet
### Properties
* **bypass**: 'AzureServices' | 'Logging' | 'Metrics' | 'None'
* **defaultAction**: 'Allow' | 'Deny' (Required)
* **ipRules**: IPRule[]
* **virtualNetworkRules**: VirtualNetworkRule[]

## IPRule
### Properties
* **action**: '[object Object]'
* **IPAddressOrRange**: string (Required)

## VirtualNetworkRule
### Properties
* **action**: '[object Object]'
* **state**: 'deprovisioning' | 'failed' | 'networkSourceDeleted' | 'provisioning' | 'succeeded'
* **virtualNetworkResourceId**: string (Required)

## Endpoints
### Properties
* **blob**: string (ReadOnly)
* **file**: string (ReadOnly)
* **queue**: string (ReadOnly)
* **table**: string (ReadOnly)

## Sku
### Properties
* **capabilities**: SKUCapability[] (ReadOnly)
* **kind**: 'BlobStorage' | 'Storage' (ReadOnly)
* **locations**: string[] (ReadOnly)
* **name**: 'Premium_LRS' | 'Standard_GRS' | 'Standard_LRS' | 'Standard_RAGRS' | 'Standard_ZRS' (Required)
* **resourceType**: string (ReadOnly)
* **restrictions**: Restriction[]
* **tier**: 'Premium' | 'Standard' (ReadOnly)

## SKUCapability
### Properties
* **name**: string (ReadOnly)
* **value**: string (ReadOnly)

## Restriction
### Properties
* **reasonCode**: 'NotAvailableForSubscription' | 'QuotaId'
* **type**: string (ReadOnly)
* **values**: string[] (ReadOnly)

## StorageAccountCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

