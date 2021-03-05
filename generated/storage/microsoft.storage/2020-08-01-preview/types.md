# Microsoft.Storage @ 2020-08-01-preview

## Resource Microsoft.Storage/storageAccounts@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **extendedLocation**: ExtendedLocation
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **kind**: 'BlobStorage' | 'BlockBlobStorage' | 'FileStorage' | 'Storage' | 'StorageV2' (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageAccountPropertiesCreateParameters
* **sku**: Sku (Required)
* **tags**: StorageAccountCreateParametersTags
* **type**: 'Microsoft.Storage/storageAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/blobServices/containers@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **containerProperties**: ContainerProperties
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Storage/storageAccounts/blobServices/containers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/encryptionScopes@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **encryptionScopeProperties**: EncryptionScopeProperties
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Storage/storageAccounts/encryptionScopes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/fileServices/shares@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **fileShareProperties**: FileShareProperties
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Storage/storageAccounts/fileServices/shares' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/inventoryPolicies@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: BlobInventoryPolicyProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.Storage/storageAccounts/inventoryPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/managementPolicies@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: ManagementPolicyProperties
* **type**: 'Microsoft.Storage/storageAccounts/managementPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/objectReplicationPolicies@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ObjectReplicationPolicyProperties
* **type**: 'Microsoft.Storage/storageAccounts/objectReplicationPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/privateEndpointConnections@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.Storage/storageAccounts/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/queueServices/queues@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **queueProperties**: QueueProperties
* **type**: 'Microsoft.Storage/storageAccounts/queueServices/queues' (ReadOnly, DeployTimeConstant)

## ExtendedLocation
### Properties
* **name**: string
* **type**: 'EdgeZone'

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)

## StorageAccountPropertiesCreateParameters
### Properties
* **allowBlobPublicAccess**: bool
* **allowSharedKeyAccess**: bool
* **azureFilesIdentityBasedAuthentication**: AzureFilesIdentityBasedAuthentication
* **blobRestoreStatus**: BlobRestoreStatus (ReadOnly)
* **creationTime**: string (ReadOnly)
* **customDomain**: CustomDomain
* **enableHttpsTrafficOnly**: bool
* **encryption**: Encryption
* **failoverInProgress**: bool (ReadOnly)
* **geoReplicationStats**: GeoReplicationStats (ReadOnly)
* **IsHnsEnabled**: bool
* **largeFileSharesState**: 'Disabled' | 'Enabled'
* **lastGeoFailoverTime**: string (ReadOnly)
* **minimumTlsVersion**: 'TLS1_0' | 'TLS1_1' | 'TLS1_2'
* **networkRuleSet**: NetworkRuleSet
* **primaryEndpoints**: Endpoints (ReadOnly)
* **primaryLocation**: string (ReadOnly)
* **privateEndpointConnections**: PrivateEndpointConnection[] (ReadOnly)
* **routingPreference**: RoutingPreference
* **secondaryEndpoints**: Endpoints (ReadOnly)
* **secondaryLocation**: string (ReadOnly)

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
* **keyVaultProperties**: KeyVaultProperties
* **requireInfrastructureEncryption**: bool
* **services**: EncryptionServices

## KeyVaultProperties
### Properties
* **currentVersionedKeyIdentifier**: string (ReadOnly)
* **keyName**: string
* **keyVaultUri**: string
* **keyVersion**: string
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
* **ipRules**: IPRule[]
* **resourceAccessRules**: ResourceAccessRule[]
* **virtualNetworkRules**: VirtualNetworkRule[]

## IPRule
### Properties
* **IPAddressOrRange**: string (Required)

## ResourceAccessRule
### Properties
* **resourceId**: string
* **tenantId**: string

## VirtualNetworkRule
### Properties
* **virtualNetworkResourceId**: string (Required)

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

## StorageAccountCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **metadata**: ContainerPropertiesMetadata
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

## ContainerPropertiesMetadata
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

## FileShareProperties
### Properties
* **accessTier**: 'Cool' | 'Hot' | 'Premium' | 'TransactionOptimized'
* **accessTierChangeTime**: string (ReadOnly)
* **accessTierStatus**: string (ReadOnly)
* **deleted**: bool (ReadOnly)
* **deletedTime**: string (ReadOnly)
* **enabledProtocols**: 'NFS' | 'SMB'
* **lastModifiedTime**: string (ReadOnly)
* **metadata**: FileSharePropertiesMetadata
* **remainingRetentionDays**: int (ReadOnly)
* **rootSquash**: 'AllSquash' | 'NoRootSquash' | 'RootSquash'
* **shareQuota**: int
* **shareUsageBytes**: int (ReadOnly)
* **snapshotTime**: string (ReadOnly)
* **version**: string (ReadOnly)

## FileSharePropertiesMetadata
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
* **type**: 'Inventory' (Required)

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

## SystemData
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
* **type**: 'Lifecycle' (Required)

## ManagementPolicyDefinition
### Properties
* **actions**: ManagementPolicyAction (Required)
* **filters**: ManagementPolicyFilter

## ManagementPolicyAction
### Properties
* **baseBlob**: ManagementPolicyBaseBlob
* **snapshot**: ManagementPolicySnapShot
* **version**: ManagementPolicyVersion

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
* **tierToArchive**: DateAfterCreation
* **tierToCool**: DateAfterCreation

## DateAfterCreation
### Properties
* **daysAfterCreationGreaterThan**: int (Required)

## ManagementPolicyVersion
### Properties
* **delete**: DateAfterCreation
* **tierToArchive**: DateAfterCreation
* **tierToCool**: DateAfterCreation

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

## QueueProperties
### Properties
* **approximateMessageCount**: int (ReadOnly)
* **metadata**: QueuePropertiesMetadata

## QueuePropertiesMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

