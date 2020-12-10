# Microsoft.Storage @ 2019-06-01

## Resource Microsoft.Storage/storageAccounts@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **kind**: 'BlobStorage' | 'BlockBlobStorage' | 'FileStorage' | 'Storage' | 'StorageV2' (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageAccountPropertiesCreateParameters
* **sku**: Sku (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Storage/storageAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/blobServices@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:81_properties
* **sku**: Sku (ReadOnly)
* **type**: 'Microsoft.Storage/storageAccounts/blobServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/blobServices/containers@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ContainerProperties
* **type**: 'Microsoft.Storage/storageAccounts/blobServices/containers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ImmutabilityPolicyProperty (Required)
* **type**: 'Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/encryptionScopes@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EncryptionScopeProperties
* **type**: 'Microsoft.Storage/storageAccounts/encryptionScopes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/fileServices@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:88_properties
* **sku**: Sku (ReadOnly)
* **type**: 'Microsoft.Storage/storageAccounts/fileServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/fileServices/shares@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: FileShareProperties
* **type**: 'Microsoft.Storage/storageAccounts/fileServices/shares' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/managementPolicies@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagementPolicyProperties
* **type**: 'Microsoft.Storage/storageAccounts/managementPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/objectReplicationPolicies@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ObjectReplicationPolicyProperties
* **type**: 'Microsoft.Storage/storageAccounts/objectReplicationPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/privateEndpointConnections@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.Storage/storageAccounts/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/queueServices@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:97_properties
* **type**: 'Microsoft.Storage/storageAccounts/queueServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/queueServices/queues@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: QueueProperties
* **type**: 'Microsoft.Storage/storageAccounts/queueServices/queues' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/tableServices@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:104_properties
* **type**: 'Microsoft.Storage/storageAccounts/tableServices' (ReadOnly, DeployTimeConstant)

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
### Additional Properties
* **Additional Properties Type**: string

## schemas:81_properties
### Properties
* **automaticSnapshotPolicyEnabled**: bool
* **changeFeed**: ChangeFeed
* **containerDeleteRetentionPolicy**: DeleteRetentionPolicy
* **cors**: CorsRules
* **defaultServiceVersion**: string
* **deleteRetentionPolicy**: DeleteRetentionPolicy
* **isVersioningEnabled**: bool
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

## schemas:88_properties
### Properties
* **cors**: CorsRules
* **shareDeleteRetentionPolicy**: DeleteRetentionPolicy

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
* **version**: string (ReadOnly)

## Dictionary<string,String>
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

## schemas:97_properties
### Properties
* **cors**: CorsRules

## QueueProperties
### Properties
* **approximateMessageCount**: int (ReadOnly)
* **metadata**: Dictionary<string,String>

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## schemas:104_properties
### Properties
* **cors**: CorsRules

