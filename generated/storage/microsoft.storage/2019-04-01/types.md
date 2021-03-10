# Microsoft.Storage @ 2019-04-01

## Resource Microsoft.Storage/storageAccounts@2019-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **kind**: 'BlobStorage' | 'BlockBlobStorage' | 'FileStorage' | 'Storage' | 'StorageV2' (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StorageAccountPropertiesCreateParameters](#storageaccountpropertiescreateparameters)
* **sku**: [Sku](#sku) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Storage/storageAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/blobServices@2019-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:64_properties](#schemas64properties)
* **type**: 'Microsoft.Storage/storageAccounts/blobServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/blobServices/containers@2019-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ContainerProperties](#containerproperties)
* **type**: 'Microsoft.Storage/storageAccounts/blobServices/containers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies@2019-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ImmutabilityPolicyProperty](#immutabilitypolicyproperty) (Required)
* **type**: 'Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/fileServices@2019-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:73_properties](#schemas73properties)
* **type**: 'Microsoft.Storage/storageAccounts/fileServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/fileServices/shares@2019-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FileShareProperties](#fileshareproperties)
* **type**: 'Microsoft.Storage/storageAccounts/fileServices/shares' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/managementPolicies@2019-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagementPolicyProperties](#managementpolicyproperties)
* **type**: 'Microsoft.Storage/storageAccounts/managementPolicies' (ReadOnly, DeployTimeConstant)

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
* **provisioningState**: 'Creating' | 'ResolvingDNS' | 'Succeeded' (ReadOnly)
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

## CustomDomain
### Properties
* **name**: string (Required)
* **useSubDomainName**: bool

## Encryption
### Properties
* **keySource**: 'Microsoft.Keyvault' | 'Microsoft.Storage' (Required)
* **keyvaultproperties**: [KeyVaultProperties](#keyvaultproperties)
* **services**: [EncryptionServices](#encryptionservices)

## KeyVaultProperties
### Properties
* **keyname**: string
* **keyvaulturi**: string
* **keyversion**: string

## EncryptionServices
### Properties
* **blob**: [EncryptionService](#encryptionservice)
* **file**: [EncryptionService](#encryptionservice)
* **queue**: [EncryptionService](#encryptionservice) (ReadOnly)
* **table**: [EncryptionService](#encryptionservice) (ReadOnly)

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
* **queue**: string (ReadOnly)
* **table**: string (ReadOnly)
* **web**: string (ReadOnly)

## Sku
### Properties
* **capabilities**: [SKUCapability](#skucapability)[] (ReadOnly)
* **kind**: 'BlobStorage' | 'BlockBlobStorage' | 'FileStorage' | 'Storage' | 'StorageV2' (ReadOnly)
* **locations**: string[] (ReadOnly)
* **name**: 'Premium_LRS' | 'Premium_ZRS' | 'Standard_GRS' | 'Standard_GZRS' | 'Standard_LRS' | 'Standard_RAGRS' | 'Standard_RAGZRS' | 'Standard_ZRS' (Required)
* **resourceType**: string (ReadOnly)
* **restrictions**: [Restriction](#restriction)[]
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

## schemas:64_properties
### Properties
* **automaticSnapshotPolicyEnabled**: bool
* **changeFeed**: [ChangeFeed](#changefeed)
* **cors**: [CorsRules](#corsrules)
* **defaultServiceVersion**: string
* **deleteRetentionPolicy**: [DeleteRetentionPolicy](#deleteretentionpolicy)

## ChangeFeed
### Properties
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

## DeleteRetentionPolicy
### Properties
* **days**: int
* **enabled**: bool

## ContainerProperties
### Properties
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

## ImmutabilityPolicyProperties
### Properties
* **etag**: string (ReadOnly)
* **properties**: [ImmutabilityPolicyProperty](#immutabilitypolicyproperty)
* **updateHistory**: [UpdateHistoryProperty](#updatehistoryproperty)[] (ReadOnly)

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

## schemas:73_properties
### Properties
* **cors**: [CorsRules](#corsrules)

## FileShareProperties
### Properties
* **lastModifiedTime**: string (ReadOnly)
* **metadata**: [Dictionary<string,String>](#dictionarystringstring)
* **shareQuota**: int

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## ManagementPolicyBaseBlob
### Properties
* **delete**: [DateAfterModification](#dateaftermodification)
* **tierToArchive**: [DateAfterModification](#dateaftermodification)
* **tierToCool**: [DateAfterModification](#dateaftermodification)

## DateAfterModification
### Properties
* **daysAfterModificationGreaterThan**: int (Required)

## ManagementPolicySnapShot
### Properties
* **delete**: [DateAfterCreation](#dateaftercreation)

## DateAfterCreation
### Properties
* **daysAfterCreationGreaterThan**: int (Required)

## ManagementPolicyFilter
### Properties
* **blobTypes**: string[] (Required)
* **prefixMatch**: string[]

