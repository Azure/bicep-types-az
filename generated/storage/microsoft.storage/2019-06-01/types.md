# Microsoft.Storage @ 2019-06-01

## Resource Microsoft.Storage/storageAccounts@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **kind**: 'BlobStorage' | 'BlockBlobStorage' | 'FileStorage' | 'Storage' | 'StorageV2' (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StorageAccountPropertiesCreateParameters](#storageaccountpropertiescreateparameters)
* **sku**: [Sku](#sku) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Storage/storageAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/blobServices@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:90_properties](#schemas90properties)
* **sku**: [Sku](#sku) (ReadOnly)
* **type**: 'Microsoft.Storage/storageAccounts/blobServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/blobServices/containers@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ContainerProperties](#containerproperties)
* **type**: 'Microsoft.Storage/storageAccounts/blobServices/containers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ImmutabilityPolicyProperty](#immutabilitypolicyproperty) (Required)
* **type**: 'Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/encryptionScopes@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [EncryptionScopeProperties](#encryptionscopeproperties)
* **type**: 'Microsoft.Storage/storageAccounts/encryptionScopes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/fileServices@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:98_properties](#schemas98properties)
* **sku**: [Sku](#sku) (ReadOnly)
* **type**: 'Microsoft.Storage/storageAccounts/fileServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/fileServices/shares@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FileShareProperties](#fileshareproperties)
* **type**: 'Microsoft.Storage/storageAccounts/fileServices/shares' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/inventoryPolicies@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BlobInventoryPolicyProperties](#blobinventorypolicyproperties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Storage/storageAccounts/inventoryPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/managementPolicies@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagementPolicyProperties](#managementpolicyproperties)
* **type**: 'Microsoft.Storage/storageAccounts/managementPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/objectReplicationPolicies@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ObjectReplicationPolicyProperties](#objectreplicationpolicyproperties)
* **type**: 'Microsoft.Storage/storageAccounts/objectReplicationPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/privateEndpointConnections@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: 'Microsoft.Storage/storageAccounts/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/queueServices@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:107_properties](#schemas107properties)
* **type**: 'Microsoft.Storage/storageAccounts/queueServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/queueServices/queues@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [QueueProperties](#queueproperties)
* **type**: 'Microsoft.Storage/storageAccounts/queueServices/queues' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/tableServices@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:114_properties](#schemas114properties)
* **type**: 'Microsoft.Storage/storageAccounts/tableServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/tableServices/tables@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TableProperties](#tableproperties) (ReadOnly)
* **type**: 'Microsoft.Storage/storageAccounts/tableServices/tables' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: string (Required)

## StorageAccountPropertiesCreateParameters
### Properties
* **accessTier**: 'Cool' | 'Hot'
* **allowBlobPublicAccess**: bool
* **allowSharedKeyAccess**: bool
* **azureFilesIdentityBasedAuthentication**: [AzureFilesIdentityBasedAuthentication](#azurefilesidentitybasedauthentication)
* **blobRestoreStatus**: [BlobRestoreStatus](#blobrestorestatus) (ReadOnly)
* **creationTime**: string (ReadOnly)
* **customDomain**: [CustomDomain](#customdomain)
* **encryption**: [Encryption](#encryption)
* **failoverInProgress**: bool (ReadOnly)
* **geoReplicationStats**: [GeoReplicationStats](#georeplicationstats) (ReadOnly)
* **isHnsEnabled**: bool
* **largeFileSharesState**: 'Disabled' | 'Enabled'
* **lastGeoFailoverTime**: string (ReadOnly)
* **minimumTlsVersion**: 'TLS1_0' | 'TLS1_1' | 'TLS1_2'
* **networkAcls**: [NetworkRuleSet](#networkruleset)
* **primaryEndpoints**: [Endpoints](#endpoints) (ReadOnly)
* **primaryLocation**: string (ReadOnly)
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly)
* **provisioningState**: 'Creating' | 'ResolvingDNS' | 'Succeeded' (ReadOnly)
* **routingPreference**: [RoutingPreference](#routingpreference)
* **secondaryEndpoints**: [Endpoints](#endpoints) (ReadOnly)
* **secondaryLocation**: string (ReadOnly)
* **statusOfPrimary**: 'available' | 'unavailable' (ReadOnly)
* **statusOfSecondary**: 'available' | 'unavailable' (ReadOnly)
* **supportsHttpsTrafficOnly**: bool

## AzureFilesIdentityBasedAuthentication
### Properties
* **activeDirectoryProperties**: [ActiveDirectoryProperties](#activedirectoryproperties)
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
* **parameters**: [BlobRestoreParameters](#blobrestoreparameters) (ReadOnly)
* **restoreId**: string (ReadOnly)
* **status**: 'Complete' | 'Failed' | 'InProgress' (ReadOnly)

## BlobRestoreParameters
### Properties
* **blobRanges**: [BlobRestoreRange](#blobrestorerange)[] (ReadOnly)
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
* **keyvaultproperties**: [KeyVaultProperties](#keyvaultproperties)
* **requireInfrastructureEncryption**: bool
* **services**: [EncryptionServices](#encryptionservices)

## KeyVaultProperties
### Properties
* **currentVersionedKeyIdentifier**: string (ReadOnly)
* **keyname**: string
* **keyvaulturi**: string
* **keyversion**: string
* **lastKeyRotationTimestamp**: string (ReadOnly)

## EncryptionServices
### Properties
* **blob**: [EncryptionService](#encryptionservice)
* **file**: [EncryptionService](#encryptionservice)
* **queue**: [EncryptionService](#encryptionservice)
* **table**: [EncryptionService](#encryptionservice)

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
* **ipRules**: [IPRule](#iprule)[]
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[]

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
* **internetEndpoints**: [StorageAccountInternetEndpoints](#storageaccountinternetendpoints) (ReadOnly)
* **microsoftEndpoints**: [StorageAccountMicrosoftEndpoints](#storageaccountmicrosoftendpoints) (ReadOnly)
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
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (ReadOnly)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint) (ReadOnly)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (ReadOnly)
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

## schemas:90_properties
### Properties
* **automaticSnapshotPolicyEnabled**: bool
* **changeFeed**: [ChangeFeed](#changefeed)
* **containerDeleteRetentionPolicy**: [DeleteRetentionPolicy](#deleteretentionpolicy)
* **cors**: [CorsRules](#corsrules)
* **defaultServiceVersion**: string
* **deleteRetentionPolicy**: [DeleteRetentionPolicy](#deleteretentionpolicy)
* **isVersioningEnabled**: bool
* **lastAccessTimeTrackingPolicy**: [LastAccessTimeTrackingPolicy](#lastaccesstimetrackingpolicy)
* **restorePolicy**: [RestorePolicyProperties](#restorepolicyproperties)

## ChangeFeed
### Properties
* **enabled**: bool
* **retentionInDays**: int

## DeleteRetentionPolicy
### Properties
* **days**: int
* **enabled**: bool

## CorsRules
### Properties
* **corsRules**: [CorsRule](#corsrule)[]

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
* **immutabilityPolicy**: [ImmutabilityPolicyProperties](#immutabilitypolicyproperties) (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **leaseDuration**: 'Fixed' | 'Infinite' (ReadOnly)
* **leaseState**: 'Available' | 'Breaking' | 'Broken' | 'Expired' | 'Leased' (ReadOnly)
* **leaseStatus**: 'Locked' | 'Unlocked' (ReadOnly)
* **legalHold**: [LegalHoldProperties](#legalholdproperties) (ReadOnly)
* **metadata**: [Dictionary<string,String>](#dictionarystringstring)
* **publicAccess**: 'Blob' | 'Container' | 'None'
* **remainingRetentionDays**: int (ReadOnly)
* **version**: string (ReadOnly)

## ImmutabilityPolicyProperties
### Properties
* **etag**: string (ReadOnly)
* **properties**: [ImmutabilityPolicyProperty](#immutabilitypolicyproperty)
* **updateHistory**: [UpdateHistoryProperty](#updatehistoryproperty)[] (ReadOnly)

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
* **tags**: [TagProperty](#tagproperty)[]

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
* **keyVaultProperties**: [EncryptionScopeKeyVaultProperties](#encryptionscopekeyvaultproperties)
* **lastModifiedTime**: string (ReadOnly)
* **source**: 'Microsoft.KeyVault' | 'Microsoft.Storage'
* **state**: 'Disabled' | 'Enabled'

## EncryptionScopeKeyVaultProperties
### Properties
* **keyUri**: string

## schemas:98_properties
### Properties
* **cors**: [CorsRules](#corsrules)
* **shareDeleteRetentionPolicy**: [DeleteRetentionPolicy](#deleteretentionpolicy)

## FileShareProperties
### Properties
* **accessTier**: 'Cool' | 'Hot' | 'Premium' | 'TransactionOptimized'
* **accessTierChangeTime**: string (ReadOnly)
* **accessTierStatus**: string (ReadOnly)
* **deleted**: bool (ReadOnly)
* **deletedTime**: string (ReadOnly)
* **enabledProtocols**: 'NFS' | 'SMB'
* **lastModifiedTime**: string (ReadOnly)
* **metadata**: [Dictionary<string,String>](#dictionarystringstring)
* **remainingRetentionDays**: int (ReadOnly)
* **rootSquash**: 'AllSquash' | 'NoRootSquash' | 'RootSquash'
* **shareQuota**: int
* **shareUsageBytes**: int (ReadOnly)
* **version**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BlobInventoryPolicyProperties
### Properties
* **lastModifiedTime**: string (ReadOnly)
* **policy**: [BlobInventoryPolicySchema](#blobinventorypolicyschema) (Required)

## BlobInventoryPolicySchema
### Properties
* **destination**: string (Required)
* **enabled**: bool (Required)
* **rules**: [BlobInventoryPolicyRule](#blobinventorypolicyrule)[] (Required)
* **type**: string (Required)

## BlobInventoryPolicyRule
### Properties
* **definition**: [BlobInventoryPolicyDefinition](#blobinventorypolicydefinition) (Required)
* **enabled**: bool (Required)
* **name**: string (Required)

## BlobInventoryPolicyDefinition
### Properties
* **filters**: [BlobInventoryPolicyFilter](#blobinventorypolicyfilter) (Required)

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
* **policy**: [ManagementPolicySchema](#managementpolicyschema) (Required)

## ManagementPolicySchema
### Properties
* **rules**: [ManagementPolicyRule](#managementpolicyrule)[] (Required)

## ManagementPolicyRule
### Properties
* **definition**: [ManagementPolicyDefinition](#managementpolicydefinition) (Required)
* **enabled**: bool
* **name**: string (Required)
* **type**: string (Required)

## ManagementPolicyDefinition
### Properties
* **actions**: [ManagementPolicyAction](#managementpolicyaction) (Required)
* **filters**: [ManagementPolicyFilter](#managementpolicyfilter)

## ManagementPolicyAction
### Properties
* **baseBlob**: [ManagementPolicyBaseBlob](#managementpolicybaseblob)
* **snapshot**: [ManagementPolicySnapShot](#managementpolicysnapshot)
* **version**: [ManagementPolicyVersion](#managementpolicyversion)

## ManagementPolicyBaseBlob
### Properties
* **delete**: [DateAfterModification](#dateaftermodification)
* **enableAutoTierToHotFromCool**: bool
* **tierToArchive**: [DateAfterModification](#dateaftermodification)
* **tierToCool**: [DateAfterModification](#dateaftermodification)

## DateAfterModification
### Properties
* **daysAfterLastAccessTimeGreaterThan**: int
* **daysAfterModificationGreaterThan**: int

## ManagementPolicySnapShot
### Properties
* **delete**: [DateAfterCreation](#dateaftercreation)
* **tierToArchive**: [DateAfterCreation](#dateaftercreation)
* **tierToCool**: [DateAfterCreation](#dateaftercreation)

## DateAfterCreation
### Properties
* **daysAfterCreationGreaterThan**: int (Required)

## ManagementPolicyVersion
### Properties
* **delete**: [DateAfterCreation](#dateaftercreation)
* **tierToArchive**: [DateAfterCreation](#dateaftercreation)
* **tierToCool**: [DateAfterCreation](#dateaftercreation)

## ManagementPolicyFilter
### Properties
* **blobIndexMatch**: [TagFilter](#tagfilter)[]
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
* **rules**: [ObjectReplicationPolicyRule](#objectreplicationpolicyrule)[]
* **sourceAccount**: string (Required)

## ObjectReplicationPolicyRule
### Properties
* **destinationContainer**: string (Required)
* **filters**: [ObjectReplicationPolicyFilter](#objectreplicationpolicyfilter)
* **ruleId**: string
* **sourceContainer**: string (Required)

## ObjectReplicationPolicyFilter
### Properties
* **minCreationTime**: string
* **prefixMatch**: string[]

## schemas:107_properties
### Properties
* **cors**: [CorsRules](#corsrules)

## QueueProperties
### Properties
* **approximateMessageCount**: int (ReadOnly)
* **metadata**: [Dictionary<string,String>](#dictionarystringstring)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:114_properties
### Properties
* **cors**: [CorsRules](#corsrules)

## TableProperties
### Properties
* **tableName**: string (ReadOnly)

