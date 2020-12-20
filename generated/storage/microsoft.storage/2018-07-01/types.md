# Microsoft.Storage @ 2018-07-01

## Resource Microsoft.Storage/storageAccounts@2018-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **kind**: 'BlobStorage' | 'BlockBlobStorage' | 'FileStorage' | 'Storage' | 'StorageV2' (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageAccountPropertiesCreateParameters
* **sku**: Sku (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Storage/storageAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/blobServices@2018-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:51_properties
* **type**: 'Microsoft.Storage/storageAccounts/blobServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/blobServices/containers@2018-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ContainerProperties
* **type**: 'Microsoft.Storage/storageAccounts/blobServices/containers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies@2018-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ImmutabilityPolicyProperty (Required)
* **type**: 'Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies' (ReadOnly, DeployTimeConstant)

## Function listAccountSas (Microsoft.Storage/storageAccounts@2018-07-01
* **Resource**: Microsoft.Storage/storageAccounts@2018-07-01
* **Input**: AccountSasParameters
* **Output**: ListAccountSasResponse

## Function listKeys (Microsoft.Storage/storageAccounts@2018-07-01
* **Resource**: Microsoft.Storage/storageAccounts@2018-07-01
* **Output**: StorageAccountListKeysResult

## Function listServiceSas (Microsoft.Storage/storageAccounts@2018-07-01
* **Resource**: Microsoft.Storage/storageAccounts@2018-07-01
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
* **azureFilesAadIntegration**: bool
* **creationTime**: string (ReadOnly)
* **customDomain**: CustomDomain
* **encryption**: Encryption
* **failoverInProgress**: bool (ReadOnly)
* **geoReplicationStats**: GeoReplicationStats (ReadOnly)
* **isHnsEnabled**: bool
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

## GeoReplicationStats
### Properties
* **canFailover**: bool (ReadOnly)
* **lastSyncTime**: string (ReadOnly)
* **status**: 'Bootstrap' | 'Live' | 'Unavailable' (ReadOnly)

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
* **dfs**: string (ReadOnly)
* **file**: string (ReadOnly)
* **queue**: string (ReadOnly)
* **table**: string (ReadOnly)
* **web**: string (ReadOnly)

## Sku
### Properties
* **capabilities**: SKUCapability[] (ReadOnly)
* **kind**: 'BlobStorage' | 'BlockBlobStorage' | 'FileStorage' | 'Storage' | 'StorageV2' (ReadOnly)
* **locations**: string[] (ReadOnly)
* **name**: 'Premium_LRS' | 'Premium_ZRS' | 'Standard_GRS' | 'Standard_LRS' | 'Standard_RAGRS' | 'Standard_ZRS' (Required)
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

## schemas:51_properties
### Properties
* **cors**: CorsRules
* **defaultServiceVersion**: string
* **deleteRetentionPolicy**: DeleteRetentionPolicy

## CorsRules
### Properties
* **corsRules**: CorsRule[]

## CorsRule
### Properties
* **allowedHeaders**: string[] (Required)
* **allowedMethods**: 'DELETE' | 'GET' | 'HEAD' | 'MERGE' | 'OPTIONS' | 'POST' | 'PUT'[] (Required)
* **allowedOrigins**: string[] (Required)
* **exposedHeaders**: string[] (Required)
* **maxAgeInSeconds**: int (Required)

## DeleteRetentionPolicy
### Properties
* **days**: int
* **enabled**: bool

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
* **metadata**: Dictionary<string,String>
* **publicAccess**: 'Blob' | 'Container' | 'None'

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
* **signedResource**: 'b' | 'c' | 'f' | 's' (WriteOnly)
* **signedStart**: string (WriteOnly)
* **startPk**: string (WriteOnly)
* **startRk**: string (WriteOnly)

## ListServiceSasResponse
### Properties
* **serviceSasToken**: string (ReadOnly)

