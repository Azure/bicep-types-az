# Microsoft.Storage @ 2018-03-01-preview

## Resource Microsoft.Storage/storageAccounts@2018-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageAccountPropertiesCreateParameters
* **sku**: Sku (Required)
* **tags**: StorageAccountCreateParametersTags
* **type**: 'Microsoft.Storage/storageAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/blobServices/containers@2018-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-01-preview' (ReadOnly, DeployTimeConstant)
* **containerProperties**: ContainerProperties
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Storage/storageAccounts/blobServices/containers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/managementPolicies@2018-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: ManagementPoliciesRules
* **type**: 'Microsoft.Storage/storageAccounts/managementPolicies' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)

## StorageAccountPropertiesCreateParameters
### Properties
* **customDomain**: CustomDomain
* **enableHttpsTrafficOnly**: bool
* **encryption**: Encryption
* **IsHnsEnabled**: bool
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

## ContainerProperties
### Properties
* **hasImmutabilityPolicy**: bool (ReadOnly)
* **hasLegalHold**: bool (ReadOnly)
* **immutabilityPolicy**: ImmutabilityPolicyProperties (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **leaseDuration**: 'Fixed' | 'Infinite' (ReadOnly)
* **leaseState**: 'Available' | 'Breaking' | 'Broken' | 'Expired' | 'Leased' (ReadOnly)
* **leaseStatus**: 'Locked' | 'Unlocked' (ReadOnly)
* **legalHold**: LegalHoldProperties (ReadOnly)
* **metadata**: ContainerPropertiesMetadata

## ImmutabilityPolicyProperties
### Properties
* **etag**: string (ReadOnly)
* **properties**: ImmutabilityPolicyProperty
* **updateHistory**: UpdateHistoryProperty[] (ReadOnly)

## ImmutabilityPolicyProperty
### Properties
* **immutabilityPeriodSinceCreationInDays**: int (Required)
* **state**: 'Locked' | 'Unlocked' (ReadOnly)

## UpdateHistoryProperty
### Properties
* **immutabilityPeriodSinceCreationInDays**: int (ReadOnly)
* **objectIdentifier**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **timestamp**: string (ReadOnly)
* **update**: 'extend' | 'lock' | 'put' (ReadOnly)
* **upn**: string (ReadOnly)

## LegalHoldProperties
### Properties
* **hasLegalHold**: bool (ReadOnly)
* **tags**: TagProperty[]

## TagProperty
### Properties
* **objectIdentifier**: string (ReadOnly)
* **tag**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **timestamp**: string (ReadOnly)
* **upn**: string (ReadOnly)

## ContainerPropertiesMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagementPoliciesRules
### Properties

