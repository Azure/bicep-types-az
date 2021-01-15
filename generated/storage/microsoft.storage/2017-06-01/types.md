# Microsoft.Storage @ 2017-06-01

## Resource Microsoft.Storage/storageAccounts@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **kind**: 'BlobStorage' | 'Storage' (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageAccountPropertiesCreateParameters
* **sku**: Sku (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Storage/storageAccounts' (ReadOnly, DeployTimeConstant)

## Function listAccountSas (Microsoft.Storage/storageAccounts@2017-06-01)
* **Resource**: Microsoft.Storage/storageAccounts
* **ApiVersion**: 2017-06-01
* **Input**: AccountSasParameters
* **Output**: ListAccountSasResponse

## Function listKeys (Microsoft.Storage/storageAccounts@2017-06-01)
* **Resource**: Microsoft.Storage/storageAccounts
* **ApiVersion**: 2017-06-01
* **Output**: StorageAccountListKeysResult

## Function listServiceSas (Microsoft.Storage/storageAccounts@2017-06-01)
* **Resource**: Microsoft.Storage/storageAccounts
* **ApiVersion**: 2017-06-01
* **Input**: ServiceSasParameters
* **Output**: ListServiceSasResponse

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: string (Required)

## StorageAccountPropertiesCreateParameters
### Properties
* **accessTier**: 'Cool' | 'Hot'
* **creationTime**: string (ReadOnly)
* **customDomain**: CustomDomain
* **encryption**: Encryption
* **lastGeoFailoverTime**: string (ReadOnly)
* **networkAcls**: NetworkRuleSet
* **primaryEndpoints**: Endpoints (ReadOnly)
* **primaryLocation**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'ResolvingDNS' | 'Succeeded' (ReadOnly)
* **secondaryEndpoints**: Endpoints (ReadOnly)
* **secondaryLocation**: string (ReadOnly)
* **statusOfPrimary**: 'available' | 'unavailable' (ReadOnly)
* **statusOfSecondary**: 'available' | 'unavailable' (ReadOnly)
* **supportsHttpsTrafficOnly**: bool

## CustomDomain
### Properties
* **name**: string (Required)
* **useSubDomainName**: bool

## Encryption
### Properties
* **keySource**: 'Microsoft.Keyvault' | 'Microsoft.Storage' (Required)
* **keyvaultproperties**: KeyVaultProperties
* **services**: EncryptionServices

## KeyVaultProperties
### Properties
* **keyname**: string
* **keyvaulturi**: string
* **keyversion**: string

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
* **action**: 'Allow'
* **value**: string (Required)

## VirtualNetworkRule
### Properties
* **action**: 'Allow'
* **id**: string (Required)
* **state**: 'deprovisioning' | 'failed' | 'networkSourceDeleted' | 'provisioning' | 'succeeded'

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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AccountSasParameters
### Properties
* **keyToSign**: string (WriteOnly)
* **signedExpiry**: string (Required, WriteOnly)
* **signedIp**: string (WriteOnly)
* **signedPermission**: 'a' | 'c' | 'd' | 'l' | 'p' | 'r' | 'u' | 'w' (Required, WriteOnly)
* **signedProtocol**: 'https,http' | 'https' (WriteOnly)
* **signedResourceTypes**: 'c' | 'o' | 's' (Required, WriteOnly)
* **signedServices**: 'b' | 'f' | 'q' | 't' (Required, WriteOnly)
* **signedStart**: string (WriteOnly)

## ListAccountSasResponse
### Properties
* **accountSasToken**: string (ReadOnly)

## StorageAccountListKeysResult
### Properties
* **keys**: StorageAccountKey[] (ReadOnly)

## StorageAccountKey
### Properties
* **keyName**: string (ReadOnly)
* **permissions**: 'Full' | 'Read' (ReadOnly)
* **value**: string (ReadOnly)

## ServiceSasParameters
### Properties
* **canonicalizedResource**: string (Required, WriteOnly)
* **endPk**: string (WriteOnly)
* **endRk**: string (WriteOnly)
* **keyToSign**: string (WriteOnly)
* **rscc**: string (WriteOnly)
* **rscd**: string (WriteOnly)
* **rsce**: string (WriteOnly)
* **rscl**: string (WriteOnly)
* **rsct**: string (WriteOnly)
* **signedExpiry**: string (WriteOnly)
* **signedIdentifier**: string (WriteOnly)
* **signedIp**: string (WriteOnly)
* **signedPermission**: 'a' | 'c' | 'd' | 'l' | 'p' | 'r' | 'u' | 'w' (WriteOnly)
* **signedProtocol**: 'https,http' | 'https' (WriteOnly)
* **signedResource**: 'b' | 'c' | 'f' | 's' (Required, WriteOnly)
* **signedStart**: string (WriteOnly)
* **startPk**: string (WriteOnly)
* **startRk**: string (WriteOnly)

## ListServiceSasResponse
### Properties
* **serviceSasToken**: string (ReadOnly)

