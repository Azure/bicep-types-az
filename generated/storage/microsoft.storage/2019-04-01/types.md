# Microsoft.Storage @ 2019-04-01

## Resource Microsoft.Storage/storageAccounts@2019-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **kind**: 'BlobStorage' | 'BlockBlobStorage' | 'FileStorage' | 'Storage' | 'StorageV2' (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageAccountPropertiesCreateParameters
* **sku**: Sku (Required)
* **tags**: StorageAccountCreateParametersTags
* **type**: 'Microsoft.Storage/storageAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/blobServices/containers@2019-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant)
* **containerProperties**: ContainerProperties
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Storage/storageAccounts/blobServices/containers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/fileServices/shares@2019-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **fileShareProperties**: FileShareProperties
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Storage/storageAccounts/fileServices/shares' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/managementPolicies@2019-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: ManagementPolicyProperties
* **type**: 'Microsoft.Storage/storageAccounts/managementPolicies' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)

## StorageAccountPropertiesCreateParameters
### Properties
* **allowBlobPublicAccess**: bool
* **allowSharedKeyAccess**: bool
* **azureFilesIdentityBasedAuthentication**: AzureFilesIdentityBasedAuthentication
* **customDomain**: CustomDomain
* **enableHttpsTrafficOnly**: bool
* **encryption**: Encryption
* **IsHnsEnabled**: bool
* **largeFileSharesState**: 'Disabled' | 'Enabled'
* **minimumTlsVersion**: 'TLS1_0' | 'TLS1_1' | 'TLS1_2'
* **networkRuleSet**: NetworkRuleSet

## AzureFilesIdentityBasedAuthentication
### Properties
* **activeDirectoryProperties**: ActiveDirectoryProperties
* **directoryServiceOptions**: 'AADDS' | 'AD' | 'None' (Required)

## ActiveDirectoryProperties
### Properties
* **azureStorageSid**: string (Required)
* **domainGuid**: string (Required)
* **domainName**: string (Required)
* **domainSid**: string (Required)
* **forestName**: string (Required)
* **netBiosDomainName**: string (Required)

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
* **kind**: 'BlobStorage' | 'BlockBlobStorage' | 'FileStorage' | 'Storage' | 'StorageV2' (ReadOnly)
* **locations**: string[] (ReadOnly)
* **name**: 'Premium_LRS' | 'Premium_ZRS' | 'Standard_GRS' | 'Standard_GZRS' | 'Standard_LRS' | 'Standard_RAGRS' | 'Standard_RAGZRS' | 'Standard_ZRS' (Required)
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

## FileShareProperties
### Properties
* **lastModifiedTime**: string (ReadOnly)
* **metadata**: FileSharePropertiesMetadata
* **shareQuota**: int

## FileSharePropertiesMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagementPolicyProperties
### Properties
* **lastModifiedTime**: string (ReadOnly)
* **policy**: ManagementPolicySchema (Required)

## ManagementPolicySchema
### Properties
* **rules**: ManagementPolicyRule[] (Required)

## ManagementPolicyRule
### Properties
* **definition**: ManagementPolicyDefinition (Required)
* **enabled**: bool
* **name**: string (Required)
* **type**: 'Lifecycle' (Required)

## ManagementPolicyDefinition
### Properties
* **actions**: ManagementPolicyAction (Required)
* **filters**: ManagementPolicyFilter

## ManagementPolicyAction
### Properties
* **baseBlob**: ManagementPolicyBaseBlob
* **snapshot**: ManagementPolicySnapShot

## ManagementPolicyBaseBlob
### Properties
* **delete**: DateAfterModification
* **tierToArchive**: DateAfterModification
* **tierToCool**: DateAfterModification

## DateAfterModification
### Properties
* **daysAfterModificationGreaterThan**: int (Required)

## ManagementPolicySnapShot
### Properties
* **delete**: DateAfterCreation

## DateAfterCreation
### Properties
* **daysAfterCreationGreaterThan**: int (Required)

## ManagementPolicyFilter
### Properties
* **blobTypes**: string[] (Required)
* **prefixMatch**: string[]

