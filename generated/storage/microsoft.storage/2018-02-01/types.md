# Microsoft.Storage @ 2018-02-01

## Resource Microsoft.Storage/storageAccounts@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **kind**: 'BlobStorage' | 'Storage' | 'StorageV2' (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StorageAccountPropertiesCreateParameters](#storageaccountpropertiescreateparameters)
* **sku**: [Sku](#sku) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Storage/storageAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/blobServices/containers@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ContainerProperties](#containerproperties)
* **type**: 'Microsoft.Storage/storageAccounts/blobServices/containers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ImmutabilityPolicyProperty](#immutabilitypolicyproperty) (Required)
* **type**: 'Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: string (Required)

## StorageAccountPropertiesCreateParameters
### Properties
* **accessTier**: 'Cool' | 'Hot'
* **creationTime**: string (ReadOnly)
* **customDomain**: [CustomDomain](#customdomain)
* **encryption**: [Encryption](#encryption)
* **isHnsEnabled**: bool
* **lastGeoFailoverTime**: string (ReadOnly)
* **networkAcls**: [NetworkRuleSet](#networkruleset)
* **primaryEndpoints**: [Endpoints](#endpoints) (ReadOnly)
* **primaryLocation**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'ResolvingDNS' | 'Succeeded' (ReadOnly)
* **secondaryEndpoints**: [Endpoints](#endpoints) (ReadOnly)
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
* **kind**: 'BlobStorage' | 'Storage' | 'StorageV2' (ReadOnly)
* **locations**: string[] (ReadOnly)
* **name**: 'Premium_LRS' | 'Standard_GRS' | 'Standard_LRS' | 'Standard_RAGRS' | 'Standard_ZRS' (Required)
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

