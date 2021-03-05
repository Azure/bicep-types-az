# Microsoft.Storage @ 2017-10-01

## Resource Microsoft.Storage/storageAccounts@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
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

## StorageAccountPropertiesCreateParameters
### Properties
* **customDomain**: CustomDomain
* **enableHttpsTrafficOnly**: bool
* **encryption**: Encryption
* **networkRuleSet**: NetworkRuleSet

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
* **ipRules**: IPRule[]
* **virtualNetworkRules**: VirtualNetworkRule[]

## IPRule
### Properties
* **IPAddressOrRange**: string (Required)

## VirtualNetworkRule
### Properties
* **virtualNetworkResourceId**: string (Required)

## Sku
### Properties
* **capabilities**: SKUCapability[] (ReadOnly)
* **locations**: string[] (ReadOnly)
* **resourceType**: string (ReadOnly)
* **restrictions**: Restriction[]

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

