# Microsoft.Storage @ 2018-11-01

## Resource Microsoft.Storage/storageAccounts@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **kind**: 'BlobStorage' | 'BlockBlobStorage' | 'FileStorage' | 'Storage' | 'StorageV2' (Required): Indicates the type of storage account.
* **location**: string (Required): Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageAccountPropertiesCreateParameters](#storageaccountpropertiescreateparameters): The parameters used to create the storage account.
* **sku**: [Sku](#sku) (Required): The SKU of the storage account.
* **tags**: [StorageAccountCreateParametersTags](#storageaccountcreateparameterstags): Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.
* **type**: 'Microsoft.Storage/storageAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/blobServices@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [BlobServicePropertiesProperties](#blobservicepropertiesproperties): The properties of a storage account’s Blob service.
* **type**: 'Microsoft.Storage/storageAccounts/blobServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/blobServices/containers@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContainerProperties](#containerproperties): The properties of a container.
* **type**: 'Microsoft.Storage/storageAccounts/blobServices/containers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ImmutabilityPolicyProperty](#immutabilitypolicyproperty) (Required): The properties of an ImmutabilityPolicy of a blob container.
* **type**: 'Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/managementPolicies@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ManagementPolicyProperties](#managementpolicyproperties) (ReadOnly): The Storage Account ManagementPolicy properties.
* **type**: 'Microsoft.Storage/storageAccounts/managementPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned' (Required): The identity type.

## StorageAccountPropertiesCreateParameters
### Properties
* **accessTier**: 'Cool' | 'Hot': Required for storage accounts where kind = BlobStorage. The access tier used for billing.
* **azureFilesAadIntegration**: bool: Enables Azure Files AAD Integration for SMB if sets to true.
* **creationTime**: string (ReadOnly): Gets the creation date and time of the storage account in UTC.
* **customDomain**: [CustomDomain](#customdomain): The custom domain assigned to this storage account. This can be set via Update.
* **encryption**: [Encryption](#encryption): The encryption settings on the storage account.
* **failoverInProgress**: bool (ReadOnly): If the failover is in progress, the value will be true, otherwise, it will be null.
* **geoReplicationStats**: [GeoReplicationStats](#georeplicationstats) (ReadOnly): Statistics related to replication for storage account's Blob, Table, Queue and File services. It is only available when geo-redundant replication is enabled for the storage account.
* **isHnsEnabled**: bool: Account HierarchicalNamespace enabled if sets to true.
* **lastGeoFailoverTime**: string (ReadOnly): Gets the timestamp of the most recent instance of a failover to the secondary location. Only the most recent timestamp is retained. This element is not returned if there has never been a failover instance. Only available if the accountType is Standard_GRS or Standard_RAGRS.
* **networkAcls**: [NetworkRuleSet](#networkruleset): Network rule set
* **primaryEndpoints**: [Endpoints](#endpoints) (ReadOnly): The URIs that are used to perform a retrieval of a public blob, queue, table, web or dfs object.
* **primaryLocation**: string (ReadOnly): Gets the location of the primary data center for the storage account.
* **provisioningState**: 'Creating' | 'ResolvingDNS' | 'Succeeded' (ReadOnly): Gets the status of the storage account at the time the operation was called.
* **secondaryEndpoints**: [Endpoints](#endpoints) (ReadOnly): The URIs that are used to perform a retrieval of a public blob, queue, table, web or dfs object.
* **secondaryLocation**: string (ReadOnly): Gets the location of the geo-replicated secondary for the storage account. Only available if the accountType is Standard_GRS or Standard_RAGRS.
* **statusOfPrimary**: 'available' | 'unavailable' (ReadOnly): Gets the status indicating whether the primary location of the storage account is available or unavailable.
* **statusOfSecondary**: 'available' | 'unavailable' (ReadOnly): Gets the status indicating whether the primary location of the storage account is available or unavailable.
* **supportsHttpsTrafficOnly**: bool: Allows https traffic only to storage service if sets to true.

## CustomDomain
### Properties
* **name**: string (Required): Gets or sets the custom domain name assigned to the storage account. Name is the CNAME source.
* **useSubDomainName**: bool: Indicates whether indirect CName validation is enabled. Default value is false. This should only be set on updates.

## Encryption
### Properties
* **keySource**: 'Microsoft.Keyvault' | 'Microsoft.Storage' (Required): The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Storage, Microsoft.Keyvault
* **keyvaultproperties**: [KeyVaultProperties](#keyvaultproperties): Properties of key vault.
* **services**: [EncryptionServices](#encryptionservices): A list of services that support encryption.

## KeyVaultProperties
### Properties
* **keyname**: string: The name of KeyVault key.
* **keyvaulturi**: string: The Uri of KeyVault.
* **keyversion**: string: The version of KeyVault key.

## EncryptionServices
### Properties
* **blob**: [EncryptionService](#encryptionservice): A service that allows server-side encryption to be used.
* **file**: [EncryptionService](#encryptionservice): A service that allows server-side encryption to be used.
* **queue**: [EncryptionService](#encryptionservice) (ReadOnly): A service that allows server-side encryption to be used.
* **table**: [EncryptionService](#encryptionservice) (ReadOnly): A service that allows server-side encryption to be used.

## EncryptionService
### Properties
* **enabled**: bool: A boolean indicating whether or not the service encrypts the data as it is stored.
* **lastEnabledTime**: string (ReadOnly): Gets a rough estimate of the date/time when the encryption was last enabled by the user. Only returned when encryption is enabled. There might be some unencrypted blobs which were written after this time, as it is just a rough estimate.

## GeoReplicationStats
### Properties
* **canFailover**: bool (ReadOnly): A boolean flag which indicates whether or not account failover is supported for the account.
* **lastSyncTime**: string (ReadOnly): All primary writes preceding this UTC date/time value are guaranteed to be available for read operations. Primary writes following this point in time may or may not be available for reads. Element may be default value if value of LastSyncTime is not available, this can happen if secondary is offline or we are in bootstrap.
* **status**: 'Bootstrap' | 'Live' | 'Unavailable' (ReadOnly): The status of the secondary location. Possible values are: - Live: Indicates that the secondary location is active and operational. - Bootstrap: Indicates initial synchronization from the primary location to the secondary location is in progress.This typically occurs when replication is first enabled. - Unavailable: Indicates that the secondary location is temporarily unavailable.

## NetworkRuleSet
### Properties
* **bypass**: 'AzureServices' | 'Logging' | 'Metrics' | 'None': Specifies whether traffic is bypassed for Logging/Metrics/AzureServices. Possible values are any combination of Logging|Metrics|AzureServices (For example, "Logging, Metrics"), or None to bypass none of those traffics.
* **defaultAction**: 'Allow' | 'Deny' (Required): Specifies the default action of allow or deny when no other rules match.
* **ipRules**: [IPRule](#iprule)[]: Sets the IP ACL rules
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[]: Sets the virtual network rules

## IPRule
### Properties
* **action**: 'Allow': The action of virtual network rule.
* **value**: string (Required): Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed.

## VirtualNetworkRule
### Properties
* **action**: 'Allow': The action of virtual network rule.
* **id**: string (Required): Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
* **state**: 'deprovisioning' | 'failed' | 'networkSourceDeleted' | 'provisioning' | 'succeeded': Gets the state of virtual network rule.

## Endpoints
### Properties
* **blob**: string (ReadOnly): Gets the blob endpoint.
* **dfs**: string (ReadOnly): Gets the dfs endpoint.
* **file**: string (ReadOnly): Gets the file endpoint.
* **queue**: string (ReadOnly): Gets the queue endpoint.
* **table**: string (ReadOnly): Gets the table endpoint.
* **web**: string (ReadOnly): Gets the web endpoint.

## Sku
### Properties
* **capabilities**: [SKUCapability](#skucapability)[] (ReadOnly): The capability information in the specified SKU, including file encryption, network ACLs, change notification, etc.
* **kind**: 'BlobStorage' | 'BlockBlobStorage' | 'FileStorage' | 'Storage' | 'StorageV2' (ReadOnly): Indicates the type of storage account.
* **locations**: string[] (ReadOnly): The set of locations that the SKU is available. This will be supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.).
* **name**: 'Premium_LRS' | 'Premium_ZRS' | 'Standard_GRS' | 'Standard_LRS' | 'Standard_RAGRS' | 'Standard_ZRS' (Required): Gets or sets the SKU name. Required for account creation; optional for update. Note that in older versions, SKU name was called accountType.
* **resourceType**: string (ReadOnly): The type of the resource, usually it is 'storageAccounts'.
* **restrictions**: [Restriction](#restriction)[]: The restrictions because of which SKU cannot be used. This is empty if there are no restrictions.
* **tier**: 'Premium' | 'Standard' (ReadOnly): Gets the SKU tier. This is based on the SKU name.

## SKUCapability
### Properties
* **name**: string (ReadOnly): The name of capability, The capability information in the specified SKU, including file encryption, network ACLs, change notification, etc.
* **value**: string (ReadOnly): A string value to indicate states of given capability. Possibly 'true' or 'false'.

## Restriction
### Properties
* **reasonCode**: 'NotAvailableForSubscription' | 'QuotaId': The reason for the restriction. As of now this can be "QuotaId" or "NotAvailableForSubscription". Quota Id is set when the SKU has requiredQuotas parameter as the subscription does not belong to that quota. The "NotAvailableForSubscription" is related to capacity at DC.
* **type**: string (ReadOnly): The type of restrictions. As of now only possible value for this is location.
* **values**: string[] (ReadOnly): The value of restrictions. If the restriction type is set to location. This would be different locations where the SKU is restricted.

## StorageAccountCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BlobServicePropertiesProperties
### Properties
* **cors**: [CorsRules](#corsrules): Sets the CORS rules. You can include up to five CorsRule elements in the request.
* **defaultServiceVersion**: string: DefaultServiceVersion indicates the default version to use for requests to the Blob service if an incoming request’s version is not specified. Possible values include version 2008-10-27 and all more recent versions.
* **deleteRetentionPolicy**: [DeleteRetentionPolicy](#deleteretentionpolicy): The blob service properties for soft delete.

## CorsRules
### Properties
* **corsRules**: [CorsRule](#corsrule)[]: The List of CORS rules. You can include up to five CorsRule elements in the request.

## CorsRule
### Properties
* **allowedHeaders**: string[] (Required): Required if CorsRule element is present. A list of headers allowed to be part of the cross-origin request.
* **allowedMethods**: 'DELETE' | 'GET' | 'HEAD' | 'MERGE' | 'OPTIONS' | 'POST' | 'PUT'[] (Required): Required if CorsRule element is present. A list of HTTP methods that are allowed to be executed by the origin.
* **allowedOrigins**: string[] (Required): Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or "*" to allow all domains
* **exposedHeaders**: string[] (Required): Required if CorsRule element is present. A list of response headers to expose to CORS clients.
* **maxAgeInSeconds**: int (Required): Required if CorsRule element is present. The number of seconds that the client/browser should cache a preflight response.

## DeleteRetentionPolicy
### Properties
* **days**: int: Indicates the number of days that the deleted blob should be retained. The minimum specified value can be 1 and the maximum value can be 365.
* **enabled**: bool: Indicates whether DeleteRetentionPolicy is enabled for the Blob service.

## ContainerProperties
### Properties
* **hasImmutabilityPolicy**: bool (ReadOnly): The hasImmutabilityPolicy public property is set to true by SRP if ImmutabilityPolicy has been created for this container. The hasImmutabilityPolicy public property is set to false by SRP if ImmutabilityPolicy has not been created for this container.
* **hasLegalHold**: bool (ReadOnly): The hasLegalHold public property is set to true by SRP if there are at least one existing tag. The hasLegalHold public property is set to false by SRP if all existing legal hold tags are cleared out. There can be a maximum of 1000 blob containers with hasLegalHold=true for a given account.
* **immutabilityPolicy**: [ImmutabilityPolicyProperties](#immutabilitypolicyproperties) (ReadOnly): The properties of an ImmutabilityPolicy of a blob container.
* **lastModifiedTime**: string (ReadOnly): Returns the date and time the container was last modified.
* **leaseDuration**: 'Fixed' | 'Infinite' (ReadOnly): Specifies whether the lease on a container is of infinite or fixed duration, only when the container is leased.
* **leaseState**: 'Available' | 'Breaking' | 'Broken' | 'Expired' | 'Leased' (ReadOnly): Lease state of the container.
* **leaseStatus**: 'Locked' | 'Unlocked' (ReadOnly): The lease status of the container.
* **legalHold**: [LegalHoldProperties](#legalholdproperties) (ReadOnly): The LegalHold property of a blob container.
* **metadata**: [ContainerPropertiesMetadata](#containerpropertiesmetadata): A name-value pair to associate with the container as metadata.
* **publicAccess**: 'Blob' | 'Container' | 'None': Specifies whether data in the container may be accessed publicly and the level of access.

## ImmutabilityPolicyProperties
### Properties
* **etag**: string (ReadOnly): ImmutabilityPolicy Etag.
* **properties**: [ImmutabilityPolicyProperty](#immutabilitypolicyproperty): The properties of an ImmutabilityPolicy of a blob container.
* **updateHistory**: [UpdateHistoryProperty](#updatehistoryproperty)[] (ReadOnly): The ImmutabilityPolicy update history of the blob container.

## ImmutabilityPolicyProperty
### Properties
* **immutabilityPeriodSinceCreationInDays**: int (Required): The immutability period for the blobs in the container since the policy creation, in days.
* **state**: 'Locked' | 'Unlocked' (ReadOnly): The ImmutabilityPolicy state of a blob container, possible values include: Locked and Unlocked.

## UpdateHistoryProperty
### Properties
* **immutabilityPeriodSinceCreationInDays**: int (ReadOnly): The immutability period for the blobs in the container since the policy creation, in days.
* **objectIdentifier**: string (ReadOnly): Returns the Object ID of the user who updated the ImmutabilityPolicy.
* **tenantId**: string (ReadOnly): Returns the Tenant ID that issued the token for the user who updated the ImmutabilityPolicy.
* **timestamp**: string (ReadOnly): Returns the date and time the ImmutabilityPolicy was updated.
* **update**: 'extend' | 'lock' | 'put' (ReadOnly): The ImmutabilityPolicy update type of a blob container, possible values include: put, lock and extend.
* **upn**: string (ReadOnly): Returns the User Principal Name of the user who updated the ImmutabilityPolicy.

## LegalHoldProperties
### Properties
* **hasLegalHold**: bool (ReadOnly): The hasLegalHold public property is set to true by SRP if there are at least one existing tag. The hasLegalHold public property is set to false by SRP if all existing legal hold tags are cleared out. There can be a maximum of 1000 blob containers with hasLegalHold=true for a given account.
* **tags**: [TagProperty](#tagproperty)[]: The list of LegalHold tags of a blob container.

## TagProperty
### Properties
* **objectIdentifier**: string (ReadOnly): Returns the Object ID of the user who added the tag.
* **tag**: string (ReadOnly): The tag value.
* **tenantId**: string (ReadOnly): Returns the Tenant ID that issued the token for the user who added the tag.
* **timestamp**: string (ReadOnly): Returns the date and time the tag was added.
* **upn**: string (ReadOnly): Returns the User Principal Name of the user who added the tag.

## ContainerPropertiesMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagementPolicyProperties
### Properties
* **lastModifiedTime**: string (ReadOnly): Returns the date and time the ManagementPolicies was last modified.
* **policy**: [ManagementPolicySchema](#managementpolicyschema) (Required): The Storage Account ManagementPolicies Rules. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts.

## ManagementPolicySchema
### Properties
* **rules**: [ManagementPolicyRule](#managementpolicyrule)[] (Required): The Storage Account ManagementPolicies Rules. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts.

## ManagementPolicyRule
### Properties
* **definition**: [ManagementPolicyDefinition](#managementpolicydefinition) (Required): An object that defines the Lifecycle rule. Each definition is made up with a filters set and an actions set.
* **enabled**: bool: Rule is enabled if set to true.
* **name**: string (Required): A rule name can contain any combination of alpha numeric characters. Rule name is case-sensitive. It must be unique within a policy.
* **type**: 'Lifecycle' (Required): The valid value is Lifecycle

## ManagementPolicyDefinition
### Properties
* **actions**: [ManagementPolicyAction](#managementpolicyaction) (Required): Actions are applied to the filtered blobs when the execution condition is met.
* **filters**: [ManagementPolicyFilter](#managementpolicyfilter): Filters limit rule actions to a subset of blobs within the storage account. If multiple filters are defined, a logical AND is performed on all filters.

## ManagementPolicyAction
### Properties
* **baseBlob**: [ManagementPolicyBaseBlob](#managementpolicybaseblob): Management policy action for base blob.
* **snapshot**: [ManagementPolicySnapShot](#managementpolicysnapshot): Management policy action for snapshot.

## ManagementPolicyBaseBlob
### Properties
* **delete**: [DateAfterModification](#dateaftermodification): Object to define the number of days after last modification.
* **tierToArchive**: [DateAfterModification](#dateaftermodification): Object to define the number of days after last modification.
* **tierToCool**: [DateAfterModification](#dateaftermodification): Object to define the number of days after last modification.

## DateAfterModification
### Properties
* **daysAfterModificationGreaterThan**: int (Required): Integer value indicating the age in days after last modification

## ManagementPolicySnapShot
### Properties
* **delete**: [DateAfterCreation](#dateaftercreation): Object to define the number of days after creation.

## DateAfterCreation
### Properties
* **daysAfterCreationGreaterThan**: int (Required): Integer value indicating the age in days after creation

## ManagementPolicyFilter
### Properties
* **blobTypes**: string[] (Required): An array of predefined enum values. Only blockBlob is supported.
* **prefixMatch**: string[]: An array of strings for prefixes to be match.

