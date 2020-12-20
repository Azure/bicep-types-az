# Microsoft.Storage @ 2020-08-01-preview

## Resource Microsoft.Storage/storageAccounts@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **extendedLocation**: ExtendedLocation
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **kind**: 'BlobStorage' | 'BlockBlobStorage' | 'FileStorage' | 'Storage' | 'StorageV2' (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageAccountPropertiesCreateParameters
* **sku**: Sku (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Storage/storageAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/blobServices@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:95_properties
* **sku**: Sku (ReadOnly)
* **type**: 'Microsoft.Storage/storageAccounts/blobServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/blobServices/containers@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ContainerProperties
* **type**: 'Microsoft.Storage/storageAccounts/blobServices/containers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ImmutabilityPolicyProperty (Required)
* **type**: 'Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/encryptionScopes@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EncryptionScopeProperties
* **type**: 'Microsoft.Storage/storageAccounts/encryptionScopes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/fileServices@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:103_properties
* **sku**: Sku (ReadOnly)
* **type**: 'Microsoft.Storage/storageAccounts/fileServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/fileServices/shares@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: FileShareProperties
* **type**: 'Microsoft.Storage/storageAccounts/fileServices/shares' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/inventoryPolicies@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BlobInventoryPolicyProperties
* **systemData**: systemData
* **type**: 'Microsoft.Storage/storageAccounts/inventoryPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/managementPolicies@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagementPolicyProperties
* **type**: 'Microsoft.Storage/storageAccounts/managementPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/objectReplicationPolicies@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ObjectReplicationPolicyProperties
* **type**: 'Microsoft.Storage/storageAccounts/objectReplicationPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/privateEndpointConnections@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.Storage/storageAccounts/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/queueServices@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:115_properties
* **type**: 'Microsoft.Storage/storageAccounts/queueServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/queueServices/queues@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: QueueProperties
* **type**: 'Microsoft.Storage/storageAccounts/queueServices/queues' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/tableServices@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:122_properties
* **type**: 'Microsoft.Storage/storageAccounts/tableServices' (ReadOnly, DeployTimeConstant)

## Function listAccountSas (Microsoft.Storage/storageAccounts@2020-08-01-preview
* **Resource**: Microsoft.Storage/storageAccounts@2020-08-01-preview
* **Input**: AccountSasParameters
* **Output**: ListAccountSasResponse

## Function listKeys (Microsoft.Storage/storageAccounts@2020-08-01-preview
* **Resource**: Microsoft.Storage/storageAccounts@2020-08-01-preview
* **Output**: StorageAccountListKeysResult

## Function listServiceSas (Microsoft.Storage/storageAccounts@2020-08-01-preview
* **Resource**: Microsoft.Storage/storageAccounts@2020-08-01-preview
* **Input**: ServiceSasParameters
* **Output**: ListServiceSasResponse

## ExtendedLocation
### Properties
* **name**: string
* **type**: 'EdgeZone'

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: string (Required)

## StorageAccountPropertiesCreateParameters
### Properties
* **accessTier**: 'Cool' | 'Hot'
* **allowBlobPublicAccess**: bool
* **azureFilesIdentityBasedAuthentication**: AzureFilesIdentityBasedAuthentication
* **blobRestoreStatus**: BlobRestoreStatus (ReadOnly)
* **creationTime**: string (ReadOnly)
* **customDomain**: CustomDomain
* **encryption**: Encryption
* **failoverInProgress**: bool (ReadOnly)
* **geoReplicationStats**: GeoReplicationStats (ReadOnly)
* **isHnsEnabled**: bool
* **largeFileSharesState**: 'Disabled' | 'Enabled'
* **lastGeoFailoverTime**: string (ReadOnly)
* **minimumTlsVersion**: 'TLS1_0' | 'TLS1_1' | 'TLS1_2'
* **networkAcls**: NetworkRuleSet
* **primaryEndpoints**: Endpoints (ReadOnly)
* **primaryLocation**: string (ReadOnly)
* **privateEndpointConnections**: PrivateEndpointConnection[] (ReadOnly)
* **provisioningState**: 'Creating' | 'ResolvingDNS' | 'Succeeded' (ReadOnly)
* **routingPreference**: RoutingPreference
* **secondaryEndpoints**: Endpoints (ReadOnly)
* **secondaryLocation**: string (ReadOnly)
* **statusOfPrimary**: 'available' | 'unavailable' (ReadOnly)
* **statusOfSecondary**: 'available' | 'unavailable' (ReadOnly)
* **supportsHttpsTrafficOnly**: bool

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

## BlobRestoreStatus
### Properties
* **failureReason**: string (ReadOnly)
* **parameters**: BlobRestoreParameters (ReadOnly)
* **restoreId**: string (ReadOnly)
* **status**: 'Complete' | 'Failed' | 'InProgress' (ReadOnly)

## BlobRestoreParameters
### Properties
* **blobRanges**: BlobRestoreRange[] (ReadOnly)
* **timeToRestore**: string (ReadOnly)

## BlobRestoreRange
### Properties
* **endRange**: string (ReadOnly)
* **startRange**: string (ReadOnly)

## CustomDomain
### Properties
* **name**: string (Required)
* **useSubDomainName**: bool

## Encryption
### Properties
* **keySource**: 'Microsoft.Keyvault' | 'Microsoft.Storage' (Required)
* **keyvaultproperties**: KeyVaultProperties
* **requireInfrastructureEncryption**: bool
* **services**: EncryptionServices

## KeyVaultProperties
### Properties
* **currentVersionedKeyIdentifier**: string (ReadOnly)
* **keyname**: string
* **keyvaulturi**: string
* **keyversion**: string
* **lastKeyRotationTimestamp**: string (ReadOnly)

## EncryptionServices
### Properties
* **blob**: EncryptionService
* **file**: EncryptionService
* **queue**: EncryptionService
* **table**: EncryptionService

## EncryptionService
### Properties
* **enabled**: bool
* **keyType**: 'Account' | 'Service'
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
* **resourceAccessRules**: ResourceAccessRule[]
* **virtualNetworkRules**: VirtualNetworkRule[]

## IPRule
### Properties
* **action**: 'Allow'
* **value**: string (Required)

## ResourceAccessRule
### Properties
* **resourceId**: string
* **tenantId**: string

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
* **internetEndpoints**: StorageAccountInternetEndpoints (ReadOnly)
* **microsoftEndpoints**: StorageAccountMicrosoftEndpoints (ReadOnly)
* **queue**: string (ReadOnly)
* **table**: string (ReadOnly)
* **web**: string (ReadOnly)

## StorageAccountInternetEndpoints
### Properties
* **blob**: string (ReadOnly)
* **dfs**: string (ReadOnly)
* **file**: string (ReadOnly)
* **web**: string (ReadOnly)

## StorageAccountMicrosoftEndpoints
### Properties
* **blob**: string (ReadOnly)
* **dfs**: string (ReadOnly)
* **file**: string (ReadOnly)
* **queue**: string (ReadOnly)
* **table**: string (ReadOnly)
* **web**: string (ReadOnly)

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: PrivateEndpointConnectionProperties (ReadOnly)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: PrivateEndpoint (ReadOnly)
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionState (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly)

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly)

## PrivateLinkServiceConnectionState
### Properties
* **actionRequired**: string (ReadOnly)
* **description**: string (ReadOnly)
* **status**: 'Approved' | 'Pending' | 'Rejected' (ReadOnly)

## RoutingPreference
### Properties
* **publishInternetEndpoints**: bool
* **publishMicrosoftEndpoints**: bool
* **routingChoice**: 'InternetRouting' | 'MicrosoftRouting'

## Sku
### Properties
* **name**: 'Premium_LRS' | 'Premium_ZRS' | 'Standard_GRS' | 'Standard_GZRS' | 'Standard_LRS' | 'Standard_RAGRS' | 'Standard_RAGZRS' | 'Standard_ZRS' (Required)
* **tier**: 'Premium' | 'Standard'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:95_properties
### Properties
* **automaticSnapshotPolicyEnabled**: bool
* **changeFeed**: ChangeFeed
* **containerDeleteRetentionPolicy**: DeleteRetentionPolicy
* **cors**: CorsRules
* **defaultServiceVersion**: string
* **deleteRetentionPolicy**: DeleteRetentionPolicy
* **isVersioningEnabled**: bool
* **lastAccessTimeTrackingPolicy**: LastAccessTimeTrackingPolicy
* **restorePolicy**: RestorePolicyProperties

## ChangeFeed
### Properties
* **enabled**: bool

## DeleteRetentionPolicy
### Properties
* **days**: int
* **enabled**: bool

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

## LastAccessTimeTrackingPolicy
### Properties
* **blobType**: string[]
* **enable**: bool (Required)
* **name**: 'AccessTimeTracking'
* **trackingGranularityInDays**: int

## RestorePolicyProperties
### Properties
* **days**: int
* **enabled**: bool (Required)
* **lastEnabledTime**: string (ReadOnly)
* **minRestoreTime**: string (ReadOnly)

## ContainerProperties
### Properties
* **defaultEncryptionScope**: string
* **deleted**: bool (ReadOnly)
* **deletedTime**: string (ReadOnly)
* **denyEncryptionScopeOverride**: bool
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
* **remainingRetentionDays**: int (ReadOnly)
* **version**: string (ReadOnly)

## ImmutabilityPolicyProperties
### Properties
* **etag**: string (ReadOnly)
* **properties**: ImmutabilityPolicyProperty
* **updateHistory**: UpdateHistoryProperty[] (ReadOnly)

## ImmutabilityPolicyProperty
### Properties
* **allowProtectedAppendWrites**: bool
* **immutabilityPeriodSinceCreationInDays**: int
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

## EncryptionScopeProperties
### Properties
* **creationTime**: string (ReadOnly)
* **keyVaultProperties**: EncryptionScopeKeyVaultProperties
* **lastModifiedTime**: string (ReadOnly)
* **source**: 'Microsoft.KeyVault' | 'Microsoft.Storage'
* **state**: 'Disabled' | 'Enabled'

## EncryptionScopeKeyVaultProperties
### Properties
* **keyUri**: string

## schemas:103_properties
### Properties
* **cors**: CorsRules
* **protocolSettings**: ProtocolSettings
* **shareDeleteRetentionPolicy**: DeleteRetentionPolicy

## ProtocolSettings
### Properties
* **smb**: SmbSetting

## SmbSetting
### Properties
* **multichannel**: Multichannel

## Multichannel
### Properties
* **enabled**: bool

## FileShareProperties
### Properties
* **accessTier**: 'Cool' | 'Hot' | 'Premium' | 'TransactionOptimized'
* **accessTierChangeTime**: string (ReadOnly)
* **accessTierStatus**: string (ReadOnly)
* **deleted**: bool (ReadOnly)
* **deletedTime**: string (ReadOnly)
* **enabledProtocols**: 'NFS' | 'SMB'
* **lastModifiedTime**: string (ReadOnly)
* **metadata**: Dictionary<string,String>
* **remainingRetentionDays**: int (ReadOnly)
* **rootSquash**: 'AllSquash' | 'NoRootSquash' | 'RootSquash'
* **shareQuota**: int
* **shareUsageBytes**: int (ReadOnly)
* **snapshotTime**: string (ReadOnly)
* **version**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BlobInventoryPolicyProperties
### Properties
* **lastModifiedTime**: string (ReadOnly)
* **policy**: BlobInventoryPolicySchema (Required)

## BlobInventoryPolicySchema
### Properties
* **destination**: string (Required)
* **enabled**: bool (Required)
* **rules**: BlobInventoryPolicyRule[] (Required)
* **type**: string (Required)

## BlobInventoryPolicyRule
### Properties
* **definition**: BlobInventoryPolicyDefinition (Required)
* **enabled**: bool (Required)
* **name**: string (Required)

## BlobInventoryPolicyDefinition
### Properties
* **filters**: BlobInventoryPolicyFilter (Required)

## BlobInventoryPolicyFilter
### Properties
* **blobTypes**: string[] (Required)
* **includeBlobVersions**: bool
* **includeSnapshots**: bool
* **prefixMatch**: string[]

## systemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

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
* **type**: string (Required)

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
* **enableAutoTierToHotFromCool**: bool
* **tierToArchive**: DateAfterModification
* **tierToCool**: DateAfterModification

## DateAfterModification
### Properties
* **daysAfterLastAccessTimeGreaterThan**: int
* **daysAfterModificationGreaterThan**: int

## ManagementPolicySnapShot
### Properties
* **delete**: DateAfterCreation

## DateAfterCreation
### Properties
* **daysAfterCreationGreaterThan**: int (Required)

## ManagementPolicyFilter
### Properties
* **blobIndexMatch**: TagFilter[]
* **blobTypes**: string[] (Required)
* **prefixMatch**: string[]

## TagFilter
### Properties
* **name**: string (Required)
* **op**: string (Required)
* **value**: string (Required)

## ObjectReplicationPolicyProperties
### Properties
* **destinationAccount**: string (Required)
* **enabledTime**: string (ReadOnly)
* **policyId**: string (ReadOnly)
* **rules**: ObjectReplicationPolicyRule[]
* **sourceAccount**: string (Required)

## ObjectReplicationPolicyRule
### Properties
* **destinationContainer**: string (Required)
* **filters**: ObjectReplicationPolicyFilter
* **ruleId**: string
* **sourceContainer**: string (Required)

## ObjectReplicationPolicyFilter
### Properties
* **minCreationTime**: string
* **prefixMatch**: string[]

## schemas:115_properties
### Properties
* **cors**: CorsRules

## QueueProperties
### Properties
* **approximateMessageCount**: int (ReadOnly)
* **metadata**: Dictionary<string,String>

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:122_properties
### Properties
* **cors**: CorsRules

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

