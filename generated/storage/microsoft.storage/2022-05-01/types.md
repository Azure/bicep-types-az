# Microsoft.Storage @ 2022-05-01

## Resource Microsoft.Storage/locations/deletedAccounts@2022-05-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeletedAccountProperties](#deletedaccountproperties) (ReadOnly): Properties of the deleted account.
* **type**: 'Microsoft.Storage/locations/deletedAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts@2022-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Optional. Set the extended location of the resource. If not set, the storage account will be created in Azure main region. Otherwise it will be created in the specified extended location
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the resource.
* **kind**: 'BlobStorage' | 'BlockBlobStorage' | 'FileStorage' | 'Storage' | 'StorageV2' | string (Required): Required. Indicates the type of storage account.
* **location**: string (Required): Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageAccountPropertiesCreateParametersOrStorageAccountProperties](#storageaccountpropertiescreateparametersorstorageaccountproperties): The parameters used to create the storage account.
* **sku**: [Sku](#sku) (Required): Required. Gets or sets the SKU name.
* **tags**: [StorageAccountCreateParametersTags](#storageaccountcreateparameterstags): Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.
* **type**: 'Microsoft.Storage/storageAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/blobServices@2022-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [BlobServicePropertiesProperties](#blobservicepropertiesproperties): The properties of a storage account’s Blob service.
* **sku**: [Sku](#sku) (ReadOnly): Sku name and tier.
* **type**: 'Microsoft.Storage/storageAccounts/blobServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/blobServices/containers@2022-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContainerProperties](#containerproperties): Properties of the blob container.
* **type**: 'Microsoft.Storage/storageAccounts/blobServices/containers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies@2022-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ImmutabilityPolicyProperty](#immutabilitypolicyproperty) (Required): The properties of an ImmutabilityPolicy of a blob container.
* **type**: 'Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/encryptionScopes@2022-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EncryptionScopeProperties](#encryptionscopeproperties): Properties of the encryption scope.
* **type**: 'Microsoft.Storage/storageAccounts/encryptionScopes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/fileServices@2022-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [FileServicePropertiesProperties](#fileservicepropertiesproperties): The properties of File services in storage account.
* **sku**: [Sku](#sku) (ReadOnly): Sku name and tier.
* **type**: 'Microsoft.Storage/storageAccounts/fileServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/fileServices/shares@2022-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FileShareProperties](#fileshareproperties): Properties of the file share.
* **type**: 'Microsoft.Storage/storageAccounts/fileServices/shares' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/inventoryPolicies@2022-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [BlobInventoryPolicyProperties](#blobinventorypolicyproperties): Returns the storage account blob inventory policy rules.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Storage/storageAccounts/inventoryPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/localUsers@2022-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LocalUserProperties](#localuserproperties): Storage account local user properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Storage/storageAccounts/localUsers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/managementPolicies@2022-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagementPolicyProperties](#managementpolicyproperties): Returns the Storage Account Data Policies Rules.
* **type**: 'Microsoft.Storage/storageAccounts/managementPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/objectReplicationPolicies@2022-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ObjectReplicationPolicyProperties](#objectreplicationpolicyproperties): Returns the Storage Account Object Replication Policy.
* **type**: 'Microsoft.Storage/storageAccounts/objectReplicationPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/privateEndpointConnections@2022-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **type**: 'Microsoft.Storage/storageAccounts/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/queueServices@2022-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [QueueServicePropertiesProperties](#queueservicepropertiesproperties): The properties of a storage account’s Queue service.
* **type**: 'Microsoft.Storage/storageAccounts/queueServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/queueServices/queues@2022-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [QueueProperties](#queueproperties): Queue resource properties.
* **type**: 'Microsoft.Storage/storageAccounts/queueServices/queues' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/tableServices@2022-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [TableServicePropertiesProperties](#tableservicepropertiesproperties): The properties of a storage account’s Table service.
* **type**: 'Microsoft.Storage/storageAccounts/tableServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/tableServices/tables@2022-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TableProperties](#tableproperties): Table resource properties.
* **type**: 'Microsoft.Storage/storageAccounts/tableServices/tables' (ReadOnly, DeployTimeConstant): The resource type

## Function listAccountSas (Microsoft.Storage/storageAccounts@2022-05-01)
* **Resource**: Microsoft.Storage/storageAccounts
* **ApiVersion**: 2022-05-01
* **Input**: [AccountSasParameters](#accountsasparameters)
* **Output**: [ListAccountSasResponse](#listaccountsasresponse)

## Function listKeys (Microsoft.Storage/storageAccounts@2022-05-01)
* **Resource**: Microsoft.Storage/storageAccounts
* **ApiVersion**: 2022-05-01
* **Output**: [StorageAccountListKeysResult](#storageaccountlistkeysresult)

## Function listKeys (Microsoft.Storage/storageAccounts/localUsers@2022-05-01)
* **Resource**: Microsoft.Storage/storageAccounts/localUsers
* **ApiVersion**: 2022-05-01
* **Output**: [LocalUserKeys](#localuserkeys)

## Function listServiceSas (Microsoft.Storage/storageAccounts@2022-05-01)
* **Resource**: Microsoft.Storage/storageAccounts
* **ApiVersion**: 2022-05-01
* **Input**: [ServiceSasParameters](#servicesasparameters)
* **Output**: [ListServiceSasResponse](#listservicesasresponse)

## AccessPolicy
### Properties
* **expiryTime**: string: Expiry time of the access policy
* **permission**: string: List of abbreviated permissions.
* **startTime**: string: Start time of the access policy

## AccountImmutabilityPolicyProperties
### Properties
* **allowProtectedAppendWrites**: bool: This property can only be changed for disabled and unlocked time-based retention policies. When enabled, new blocks can be written to an append blob while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted.
* **immutabilityPeriodSinceCreationInDays**: int: The immutability period for the blobs in the container since the policy creation, in days.
* **state**: 'Disabled' | 'Locked' | 'Unlocked' | string: The ImmutabilityPolicy state defines the mode of the policy. Disabled state disables the policy, Unlocked state allows increase and decrease of immutability retention time and also allows toggling allowProtectedAppendWrites property, Locked state only allows the increase of the immutability retention time. A policy can only be created in a Disabled or Unlocked state and can be toggled between the two states. Only a policy in an Unlocked state can transition to a Locked state which cannot be reverted.

## AccountSasParameters
### Properties
* **keyToSign**: string: The key to sign the account SAS token with.
* **signedExpiry**: string (Required): The time at which the shared access signature becomes invalid.
* **signedIp**: string: An IP address or a range of IP addresses from which to accept requests.
* **signedPermission**: 'a' | 'c' | 'd' | 'l' | 'p' | 'r' | 'u' | 'w' | string (Required): The signed permissions for the account SAS. Possible values include: Read (r), Write (w), Delete (d), List (l), Add (a), Create (c), Update (u) and Process (p).
* **signedProtocol**: 'https' | 'https,http': The protocol permitted for a request made with the account SAS.
* **signedResourceTypes**: 'c' | 'o' | 's' | string (Required): The signed resource types that are accessible with the account SAS. Service (s): Access to service-level APIs; Container (c): Access to container-level APIs; Object (o): Access to object-level APIs for blobs, queue messages, table entities, and files.
* **signedServices**: 'b' | 'f' | 'q' | 't' | string (Required): The signed services accessible with the account SAS. Possible values include: Blob (b), Queue (q), Table (t), File (f).
* **signedStart**: string: The time at which the SAS becomes valid.

## ActiveDirectoryProperties
### Properties
* **accountType**: 'Computer' | 'User' | string: Specifies the Active Directory account type for Azure Storage.
* **azureStorageSid**: string: Specifies the security identifier (SID) for Azure Storage.
* **domainGuid**: string (Required): Specifies the domain GUID.
* **domainName**: string (Required): Specifies the primary domain that the AD DNS server is authoritative for.
* **domainSid**: string: Specifies the security identifier (SID).
* **forestName**: string: Specifies the Active Directory forest to get.
* **netBiosDomainName**: string: Specifies the NetBIOS domain name.
* **samAccountName**: string: Specifies the Active Directory SAMAccountName for Azure Storage.

## AzureFilesIdentityBasedAuthentication
### Properties
* **activeDirectoryProperties**: [ActiveDirectoryProperties](#activedirectoryproperties): Required if directoryServiceOptions are AD, optional if they are AADKERB.
* **defaultSharePermission**: 'None' | 'StorageFileDataSmbShareContributor' | 'StorageFileDataSmbShareElevatedContributor' | 'StorageFileDataSmbShareReader' | string: Default share permission for users using Kerberos authentication if RBAC role is not assigned.
* **directoryServiceOptions**: 'AADDS' | 'AADKERB' | 'AD' | 'None' | string (Required): Indicates the directory service used. Note that this enum may be extended in the future.

## BlobInventoryPolicyDefinition
### Properties
* **filters**: [BlobInventoryPolicyFilter](#blobinventorypolicyfilter): An object that defines the filter set.
* **format**: 'Csv' | 'Parquet' | string (Required): This is a required field, it specifies the format for the inventory files.
* **objectType**: 'Blob' | 'Container' | string (Required): This is a required field. This field specifies the scope of the inventory created either at the blob or container level.
* **schedule**: 'Daily' | 'Weekly' | string (Required): This is a required field. This field is used to schedule an inventory formation.
* **schemaFields**: string[] (Required): This is a required field. This field specifies the fields and properties of the object to be included in the inventory. The Schema field value 'Name' is always required. The valid values for this field for the 'Blob' definition.objectType include 'Name, Creation-Time, Last-Modified, Content-Length, Content-MD5, BlobType, AccessTier, AccessTierChangeTime, AccessTierInferred, Tags, Expiry-Time, hdi_isfolder, Owner, Group, Permissions, Acl, Snapshot, VersionId, IsCurrentVersion, Metadata, LastAccessTime, Tags, Etag, ContentType, ContentEncoding, ContentLanguage, ContentCRC64, CacheControl, ContentDisposition, LeaseStatus, LeaseState, LeaseDuration, ServerEncrypted, Deleted, DeletionId, DeletedTime, RemainingRetentionDays, ImmutabilityPolicyUntilDate, ImmutabilityPolicyMode, LegalHold, CopyId, CopyStatus, CopySource, CopyProgress, CopyCompletionTime, CopyStatusDescription, CustomerProvidedKeySha256, RehydratePriority, ArchiveStatus, XmsBlobSequenceNumber, EncryptionScope, IncrementalCopy, TagCount'. For Blob object type schema field value 'DeletedTime' is applicable only for Hns enabled accounts. The valid values for 'Container' definition.objectType include 'Name, Last-Modified, Metadata, LeaseStatus, LeaseState, LeaseDuration, PublicAccess, HasImmutabilityPolicy, HasLegalHold, Etag, DefaultEncryptionScope, DenyEncryptionScopeOverride, ImmutableStorageWithVersioningEnabled, Deleted, Version, DeletedTime, RemainingRetentionDays'. Schema field values 'Expiry-Time, hdi_isfolder, Owner, Group, Permissions, Acl, DeletionId' are valid only for Hns enabled accounts.Schema field values 'Tags, TagCount' are only valid for Non-Hns accounts.

## BlobInventoryPolicyFilter
### Properties
* **blobTypes**: string[]: An array of predefined enum values. Valid values include blockBlob, appendBlob, pageBlob. Hns accounts does not support pageBlobs. This field is required when definition.objectType property is set to 'Blob'.
* **excludePrefix**: string[]: An array of strings with maximum 10 blob prefixes to be excluded from the inventory.
* **includeBlobVersions**: bool: Includes blob versions in blob inventory when value is set to true. The definition.schemaFields values 'VersionId and IsCurrentVersion' are required if this property is set to true, else they must be excluded.
* **includeDeleted**: bool: For 'Container' definition.objectType the definition.schemaFields must include 'Deleted, Version, DeletedTime and RemainingRetentionDays'. For 'Blob' definition.objectType and HNS enabled storage accounts the definition.schemaFields must include 'DeletionId, Deleted, DeletedTime and RemainingRetentionDays' and for Hns disabled accounts the definition.schemaFields must include 'Deleted and RemainingRetentionDays', else it must be excluded.
* **includeSnapshots**: bool: Includes blob snapshots in blob inventory when value is set to true. The definition.schemaFields value 'Snapshot' is required if this property is set to true, else it must be excluded.
* **prefixMatch**: string[]: An array of strings with maximum 10 blob prefixes to be included in the inventory.

## BlobInventoryPolicyProperties
### Properties
* **lastModifiedTime**: string (ReadOnly): Returns the last modified date and time of the blob inventory policy.
* **policy**: [BlobInventoryPolicySchema](#blobinventorypolicyschema) (Required): The storage account blob inventory policy object. It is composed of policy rules.

## BlobInventoryPolicyRule
### Properties
* **definition**: [BlobInventoryPolicyDefinition](#blobinventorypolicydefinition) (Required): An object that defines the blob inventory policy rule.
* **destination**: string (Required): Container name where blob inventory files are stored. Must be pre-created.
* **enabled**: bool (Required): Rule is enabled when set to true.
* **name**: string (Required): A rule name can contain any combination of alpha numeric characters. Rule name is case-sensitive. It must be unique within a policy.

## BlobInventoryPolicySchema
### Properties
* **destination**: string (ReadOnly): Deprecated Property from API version 2021-04-01 onwards, the required destination container name must be specified at the rule level 'policy.rule.destination'
* **enabled**: bool (Required): Policy is enabled if set to true.
* **rules**: [BlobInventoryPolicyRule](#blobinventorypolicyrule)[] (Required): The storage account blob inventory policy rules. The rule is applied when it is enabled.
* **type**: 'Inventory' | string (Required): The valid value is Inventory

## BlobRestoreParameters
### Properties
* **blobRanges**: [BlobRestoreRange](#blobrestorerange)[] (Required): Blob ranges to restore.
* **timeToRestore**: string (Required): Restore blob to the specified time.

## BlobRestoreRange
### Properties
* **endRange**: string (Required): Blob end range. This is exclusive. Empty means account end.
* **startRange**: string (Required): Blob start range. This is inclusive. Empty means account start.

## BlobRestoreStatus
### Properties
* **failureReason**: string (ReadOnly): Failure reason when blob restore is failed.
* **parameters**: [BlobRestoreParameters](#blobrestoreparameters) (ReadOnly): Blob restore request parameters.
* **restoreId**: string (ReadOnly): Id for tracking blob restore request.
* **status**: 'Complete' | 'Failed' | 'InProgress' | string (ReadOnly): The status of blob restore progress. Possible values are: - InProgress: Indicates that blob restore is ongoing. - Complete: Indicates that blob restore has been completed successfully. - Failed: Indicates that blob restore is failed.

## BlobServicePropertiesProperties
### Properties
* **automaticSnapshotPolicyEnabled**: bool: Deprecated in favor of isVersioningEnabled property.
* **changeFeed**: [ChangeFeed](#changefeed): The blob service properties for change feed events.
* **containerDeleteRetentionPolicy**: [DeleteRetentionPolicy](#deleteretentionpolicy): The blob service properties for container soft delete.
* **cors**: [CorsRules](#corsrules): Specifies CORS rules for the Blob service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Blob service.
* **defaultServiceVersion**: string: DefaultServiceVersion indicates the default version to use for requests to the Blob service if an incoming request’s version is not specified. Possible values include version 2008-10-27 and all more recent versions.
* **deleteRetentionPolicy**: [DeleteRetentionPolicy](#deleteretentionpolicy): The blob service properties for blob soft delete.
* **isVersioningEnabled**: bool: Versioning is enabled if set to true.
* **lastAccessTimeTrackingPolicy**: [LastAccessTimeTrackingPolicy](#lastaccesstimetrackingpolicy): The blob service property to configure last access time based tracking policy.
* **restorePolicy**: [RestorePolicyProperties](#restorepolicyproperties): The blob service properties for blob restore policy.

## ChangeFeed
### Properties
* **enabled**: bool: Indicates whether change feed event logging is enabled for the Blob service.
* **retentionInDays**: int: Indicates the duration of changeFeed retention in days. Minimum value is 1 day and maximum value is 146000 days (400 years). A null value indicates an infinite retention of the change feed.

## ContainerProperties
### Properties
* **defaultEncryptionScope**: string: Default the container to use specified encryption scope for all writes.
* **deleted**: bool (ReadOnly): Indicates whether the blob container was deleted.
* **deletedTime**: string (ReadOnly): Blob container deletion time.
* **denyEncryptionScopeOverride**: bool: Block override of encryption scope from the container default.
* **enableNfsV3AllSquash**: bool: Enable NFSv3 all squash on blob container.
* **enableNfsV3RootSquash**: bool: Enable NFSv3 root squash on blob container.
* **hasImmutabilityPolicy**: bool (ReadOnly): The hasImmutabilityPolicy public property is set to true by SRP if ImmutabilityPolicy has been created for this container. The hasImmutabilityPolicy public property is set to false by SRP if ImmutabilityPolicy has not been created for this container.
* **hasLegalHold**: bool (ReadOnly): The hasLegalHold public property is set to true by SRP if there are at least one existing tag. The hasLegalHold public property is set to false by SRP if all existing legal hold tags are cleared out. There can be a maximum of 1000 blob containers with hasLegalHold=true for a given account.
* **immutabilityPolicy**: [ImmutabilityPolicyProperties](#immutabilitypolicyproperties) (ReadOnly): The ImmutabilityPolicy property of the container.
* **immutableStorageWithVersioning**: [ImmutableStorageWithVersioning](#immutablestoragewithversioning): The object level immutability property of the container. The property is immutable and can only be set to true at the container creation time. Existing containers must undergo a migration process.
* **lastModifiedTime**: string (ReadOnly): Returns the date and time the container was last modified.
* **leaseDuration**: 'Fixed' | 'Infinite' | string (ReadOnly): Specifies whether the lease on a container is of infinite or fixed duration, only when the container is leased.
* **leaseState**: 'Available' | 'Breaking' | 'Broken' | 'Expired' | 'Leased' | string (ReadOnly): Lease state of the container.
* **leaseStatus**: 'Locked' | 'Unlocked' | string (ReadOnly): The lease status of the container.
* **legalHold**: [LegalHoldProperties](#legalholdproperties) (ReadOnly): The LegalHold property of the container.
* **metadata**: [ContainerPropertiesMetadata](#containerpropertiesmetadata): A name-value pair to associate with the container as metadata.
* **publicAccess**: 'Blob' | 'Container' | 'None': Specifies whether data in the container may be accessed publicly and the level of access.
* **remainingRetentionDays**: int (ReadOnly): Remaining retention days for soft deleted blob container.
* **version**: string (ReadOnly): The version of the deleted blob container.

## ContainerPropertiesMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CorsRule
### Properties
* **allowedHeaders**: string[] (Required): Required if CorsRule element is present. A list of headers allowed to be part of the cross-origin request.
* **allowedMethods**: 'DELETE' | 'GET' | 'HEAD' | 'MERGE' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT' | string[] (Required): Required if CorsRule element is present. A list of HTTP methods that are allowed to be executed by the origin.
* **allowedOrigins**: string[] (Required): Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or "*" to allow all domains
* **exposedHeaders**: string[] (Required): Required if CorsRule element is present. A list of response headers to expose to CORS clients.
* **maxAgeInSeconds**: int (Required): Required if CorsRule element is present. The number of seconds that the client/browser should cache a preflight response.

## CorsRules
### Properties
* **corsRules**: [CorsRule](#corsrule)[]: The List of CORS rules. You can include up to five CorsRule elements in the request.

## CustomDomain
### Properties
* **name**: string (Required): Gets or sets the custom domain name assigned to the storage account. Name is the CNAME source.
* **useSubDomainName**: bool: Indicates whether indirect CName validation is enabled. Default value is false. This should only be set on updates.

## DateAfterCreation
### Properties
* **daysAfterCreationGreaterThan**: int (Required): Value indicating the age in days after creation
* **daysAfterLastTierChangeGreaterThan**: int: Value indicating the age in days after last blob tier change time. This property is only applicable for tierToArchive actions and requires daysAfterCreationGreaterThan to be set for snapshots and blob version based actions. The blob will be archived if both the conditions are satisfied.

## DateAfterModification
### Properties
* **daysAfterCreationGreaterThan**: int: Value indicating the age in days after blob creation.
* **daysAfterLastAccessTimeGreaterThan**: int: Value indicating the age in days after last blob access. This property can only be used in conjunction with last access time tracking policy
* **daysAfterLastTierChangeGreaterThan**: int: Value indicating the age in days after last blob tier change time. This property is only applicable for tierToArchive actions and requires daysAfterModificationGreaterThan to be set for baseBlobs based actions. The blob will be archived if both the conditions are satisfied.
* **daysAfterModificationGreaterThan**: int: Value indicating the age in days after last modification

## DeletedAccountProperties
### Properties
* **creationTime**: string (ReadOnly): Creation time of the deleted account.
* **deletionTime**: string (ReadOnly): Deletion time of the deleted account.
* **location**: string (ReadOnly): Location of the deleted account.
* **restoreReference**: string (ReadOnly): Can be used to attempt recovering this deleted account via PutStorageAccount API.
* **storageAccountResourceId**: string (ReadOnly): Full resource id of the original storage account.

## DeleteRetentionPolicy
### Properties
* **allowPermanentDelete**: bool: This property when set to true allows deletion of the soft deleted blob versions and snapshots. This property cannot be used blob restore policy. This property only applies to blob service and does not apply to containers or file share.
* **days**: int: Indicates the number of days that the deleted item should be retained. The minimum specified value can be 1 and the maximum value can be 365.
* **enabled**: bool: Indicates whether DeleteRetentionPolicy is enabled.

## Encryption
### Properties
* **identity**: [EncryptionIdentity](#encryptionidentity): The identity to be used with service-side encryption at rest.
* **keySource**: 'Microsoft.Keyvault' | 'Microsoft.Storage' | string: The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Storage, Microsoft.Keyvault
* **keyvaultproperties**: [KeyVaultProperties](#keyvaultproperties): Properties provided by key vault.
* **requireInfrastructureEncryption**: bool: A boolean indicating whether or not the service applies a secondary layer of encryption with platform managed keys for data at rest.
* **services**: [EncryptionServices](#encryptionservices): List of services which support encryption.

## EncryptionIdentity
### Properties
* **federatedIdentityClientId**: string: ClientId of the multi-tenant application to be used in conjunction with the user-assigned identity for cross-tenant customer-managed-keys server-side encryption on the storage account.
* **userAssignedIdentity**: string: Resource identifier of the UserAssigned identity to be associated with server-side encryption on the storage account.

## EncryptionScopeKeyVaultProperties
### Properties
* **currentVersionedKeyIdentifier**: string (ReadOnly): The object identifier of the current versioned Key Vault Key in use.
* **keyUri**: string: The object identifier for a key vault key object. When applied, the encryption scope will use the key referenced by the identifier to enable customer-managed key support on this encryption scope.
* **lastKeyRotationTimestamp**: string (ReadOnly): Timestamp of last rotation of the Key Vault Key.

## EncryptionScopeProperties
### Properties
* **creationTime**: string (ReadOnly): Gets the creation date and time of the encryption scope in UTC.
* **keyVaultProperties**: [EncryptionScopeKeyVaultProperties](#encryptionscopekeyvaultproperties): The key vault properties for the encryption scope. This is a required field if encryption scope 'source' attribute is set to 'Microsoft.KeyVault'.
* **lastModifiedTime**: string (ReadOnly): Gets the last modification date and time of the encryption scope in UTC.
* **requireInfrastructureEncryption**: bool: A boolean indicating whether or not the service applies a secondary layer of encryption with platform managed keys for data at rest.
* **source**: 'Microsoft.KeyVault' | 'Microsoft.Storage' | string: The provider for the encryption scope. Possible values (case-insensitive):  Microsoft.Storage, Microsoft.KeyVault.
* **state**: 'Disabled' | 'Enabled' | string: The state of the encryption scope. Possible values (case-insensitive):  Enabled, Disabled.

## EncryptionService
### Properties
* **enabled**: bool: A boolean indicating whether or not the service encrypts the data as it is stored. Encryption at rest is enabled by default today and cannot be disabled.
* **keyType**: 'Account' | 'Service' | string: Encryption key type to be used for the encryption service. 'Account' key type implies that an account-scoped encryption key will be used. 'Service' key type implies that a default service key is used.
* **lastEnabledTime**: string (ReadOnly): Gets a rough estimate of the date/time when the encryption was last enabled by the user. Data is encrypted at rest by default today and cannot be disabled.

## EncryptionServices
### Properties
* **blob**: [EncryptionService](#encryptionservice): The encryption function of the blob storage service.
* **file**: [EncryptionService](#encryptionservice): The encryption function of the file storage service.
* **queue**: [EncryptionService](#encryptionservice): The encryption function of the queue storage service.
* **table**: [EncryptionService](#encryptionservice): The encryption function of the table storage service.

## Endpoints
### Properties
* **blob**: string (ReadOnly): Gets the blob endpoint.
* **dfs**: string (ReadOnly): Gets the dfs endpoint.
* **file**: string (ReadOnly): Gets the file endpoint.
* **internetEndpoints**: [StorageAccountInternetEndpoints](#storageaccountinternetendpoints): Gets the internet routing storage endpoints
* **microsoftEndpoints**: [StorageAccountMicrosoftEndpoints](#storageaccountmicrosoftendpoints): Gets the microsoft routing storage endpoints.
* **queue**: string (ReadOnly): Gets the queue endpoint.
* **table**: string (ReadOnly): Gets the table endpoint.
* **web**: string (ReadOnly): Gets the web endpoint.

## ExtendedLocation
### Properties
* **name**: string: The name of the extended location.
* **type**: 'EdgeZone' | string: The type of the extended location.

## FileServicePropertiesProperties
### Properties
* **cors**: [CorsRules](#corsrules): Specifies CORS rules for the File service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the File service.
* **protocolSettings**: [ProtocolSettings](#protocolsettings): Protocol settings for file service
* **shareDeleteRetentionPolicy**: [DeleteRetentionPolicy](#deleteretentionpolicy): The file service properties for share soft delete.

## FileShareProperties
### Properties
* **accessTier**: 'Cool' | 'Hot' | 'Premium' | 'TransactionOptimized' | string: Access tier for specific share. GpV2 account can choose between TransactionOptimized (default), Hot, and Cool. FileStorage account can choose Premium.
* **accessTierChangeTime**: string (ReadOnly): Indicates the last modification time for share access tier.
* **accessTierStatus**: string (ReadOnly): Indicates if there is a pending transition for access tier.
* **deleted**: bool (ReadOnly): Indicates whether the share was deleted.
* **deletedTime**: string (ReadOnly): The deleted time if the share was deleted.
* **enabledProtocols**: 'NFS' | 'SMB' | string: The authentication protocol that is used for the file share. Can only be specified when creating a share.
* **lastModifiedTime**: string (ReadOnly): Returns the date and time the share was last modified.
* **leaseDuration**: 'Fixed' | 'Infinite' | string (ReadOnly): Specifies whether the lease on a share is of infinite or fixed duration, only when the share is leased.
* **leaseState**: 'Available' | 'Breaking' | 'Broken' | 'Expired' | 'Leased' | string (ReadOnly): Lease state of the share.
* **leaseStatus**: 'Locked' | 'Unlocked' | string (ReadOnly): The lease status of the share.
* **metadata**: [FileSharePropertiesMetadata](#filesharepropertiesmetadata): A name-value pair to associate with the share as metadata.
* **remainingRetentionDays**: int (ReadOnly): Remaining retention days for share that was soft deleted.
* **rootSquash**: 'AllSquash' | 'NoRootSquash' | 'RootSquash' | string: The property is for NFS share only. The default is NoRootSquash.
* **shareQuota**: int: The maximum size of the share, in gigabytes. Must be greater than 0, and less than or equal to 5TB (5120). For Large File Shares, the maximum size is 102400.
* **shareUsageBytes**: int (ReadOnly): The approximate size of the data stored on the share. Note that this value may not include all recently created or recently resized files.
* **signedIdentifiers**: [SignedIdentifier](#signedidentifier)[]: List of stored access policies specified on the share.
* **snapshotTime**: string (ReadOnly): Creation time of share snapshot returned in the response of list shares with expand param "snapshots".
* **version**: string (ReadOnly): The version of the share.

## FileSharePropertiesMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GeoReplicationStats
### Properties
* **canFailover**: bool (ReadOnly): A boolean flag which indicates whether or not account failover is supported for the account.
* **lastSyncTime**: string (ReadOnly): All primary writes preceding this UTC date/time value are guaranteed to be available for read operations. Primary writes following this point in time may or may not be available for reads. Element may be default value if value of LastSyncTime is not available, this can happen if secondary is offline or we are in bootstrap.
* **status**: 'Bootstrap' | 'Live' | 'Unavailable' | string (ReadOnly): The status of the secondary location. Possible values are: - Live: Indicates that the secondary location is active and operational. - Bootstrap: Indicates initial synchronization from the primary location to the secondary location is in progress.This typically occurs when replication is first enabled. - Unavailable: Indicates that the secondary location is temporarily unavailable.

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): The identity type.
* **userAssignedIdentities**: [IdentityUserAssignedIdentities](#identityuserassignedidentities): Gets or sets a list of key value pairs that describe the set of User Assigned identities that will be used with this storage account. The key is the ARM resource identifier of the identity. Only 1 User Assigned identity is permitted here.

## IdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## ImmutabilityPolicyProperties
### Properties
* **etag**: string (ReadOnly): ImmutabilityPolicy Etag.
* **properties**: [ImmutabilityPolicyProperty](#immutabilitypolicyproperty): The properties of an ImmutabilityPolicy of a blob container.
* **updateHistory**: [UpdateHistoryProperty](#updatehistoryproperty)[] (ReadOnly): The ImmutabilityPolicy update history of the blob container.

## ImmutabilityPolicyProperty
### Properties
* **allowProtectedAppendWrites**: bool: This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to an append blob while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API.
* **allowProtectedAppendWritesAll**: bool: This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to both 'Append and Bock Blobs' while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API. The 'allowProtectedAppendWrites' and 'allowProtectedAppendWritesAll' properties are mutually exclusive.
* **immutabilityPeriodSinceCreationInDays**: int: The immutability period for the blobs in the container since the policy creation, in days.
* **state**: 'Locked' | 'Unlocked' | string (ReadOnly): The ImmutabilityPolicy state of a blob container, possible values include: Locked and Unlocked.

## ImmutableStorageAccount
### Properties
* **enabled**: bool: A boolean flag which enables account-level immutability. All the containers under such an account have object-level immutability enabled by default.
* **immutabilityPolicy**: [AccountImmutabilityPolicyProperties](#accountimmutabilitypolicyproperties): Specifies the default account-level immutability policy which is inherited and applied to objects that do not possess an explicit immutability policy at the object level. The object-level immutability policy has higher precedence than the container-level immutability policy, which has a higher precedence than the account-level immutability policy.

## ImmutableStorageWithVersioning
### Properties
* **enabled**: bool: This is an immutable property, when set to true it enables object level immutability at the container level.
* **migrationState**: 'Completed' | 'InProgress' | string (ReadOnly): This property denotes the container level immutability to object level immutability migration state.
* **timeStamp**: string (ReadOnly): Returns the date and time the object level immutability was enabled.

## IPRule
### Properties
* **action**: 'Allow': The action of IP ACL rule.
* **value**: string (Required): Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed.

## KeyCreationTime
### Properties
* **key1**: string
* **key2**: string

## KeyPolicy
### Properties
* **keyExpirationPeriodInDays**: int (Required): The key expiration period in days.

## KeyVaultProperties
### Properties
* **currentVersionedKeyExpirationTimestamp**: string (ReadOnly): This is a read only property that represents the expiration time of the current version of the customer managed key used for encryption.
* **currentVersionedKeyIdentifier**: string (ReadOnly): The object identifier of the current versioned Key Vault Key in use.
* **keyname**: string: The name of KeyVault key.
* **keyvaulturi**: string: The Uri of KeyVault.
* **keyversion**: string: The version of KeyVault key.
* **lastKeyRotationTimestamp**: string (ReadOnly): Timestamp of last rotation of the Key Vault Key.

## LastAccessTimeTrackingPolicy
### Properties
* **blobType**: string[]: An array of predefined supported blob types. Only blockBlob is the supported value. This field is currently read only
* **enable**: bool (Required): When set to true last access time based tracking is enabled.
* **name**: 'AccessTimeTracking' | string: Name of the policy. The valid value is AccessTimeTracking. This field is currently read only
* **trackingGranularityInDays**: int: The field specifies blob object tracking granularity in days, typically how often the blob object should be tracked.This field is currently read only with value as 1

## LegalHoldProperties
### Properties
* **hasLegalHold**: bool (ReadOnly): The hasLegalHold public property is set to true by SRP if there are at least one existing tag. The hasLegalHold public property is set to false by SRP if all existing legal hold tags are cleared out. There can be a maximum of 1000 blob containers with hasLegalHold=true for a given account.
* **protectedAppendWritesHistory**: [ProtectedAppendWritesHistory](#protectedappendwriteshistory): Protected append blob writes history.
* **tags**: [TagProperty](#tagproperty)[]: The list of LegalHold tags of a blob container.

## ListAccountSasResponse
### Properties
* **accountSasToken**: string (ReadOnly): List SAS credentials of storage account.

## ListServiceSasResponse
### Properties
* **serviceSasToken**: string (ReadOnly): List service SAS credentials of specific resource.

## LocalUserKeys
### Properties
* **sharedKey**: string (ReadOnly): Auto generated by the server for SMB authentication.
* **sshAuthorizedKeys**: [SshPublicKey](#sshpublickey)[]: Optional, local user ssh authorized keys for SFTP.

## LocalUserProperties
### Properties
* **hasSharedKey**: bool: Indicates whether shared key exists. Set it to false to remove existing shared key.
* **hasSshKey**: bool: Indicates whether ssh key exists. Set it to false to remove existing SSH key.
* **hasSshPassword**: bool: Indicates whether ssh password exists. Set it to false to remove existing SSH password.
* **homeDirectory**: string: Optional, local user home directory.
* **permissionScopes**: [PermissionScope](#permissionscope)[]: The permission scopes of the local user.
* **sid**: string (ReadOnly): A unique Security Identifier that is generated by the server.
* **sshAuthorizedKeys**: [SshPublicKey](#sshpublickey)[]: Optional, local user ssh authorized keys for SFTP.

## ManagementPolicyAction
### Properties
* **baseBlob**: [ManagementPolicyBaseBlob](#managementpolicybaseblob): The management policy action for base blob
* **snapshot**: [ManagementPolicySnapShot](#managementpolicysnapshot): The management policy action for snapshot
* **version**: [ManagementPolicyVersion](#managementpolicyversion): The management policy action for version

## ManagementPolicyBaseBlob
### Properties
* **delete**: [DateAfterModification](#dateaftermodification): The function to delete the blob
* **enableAutoTierToHotFromCool**: bool: This property enables auto tiering of a blob from cool to hot on a blob access. This property requires tierToCool.daysAfterLastAccessTimeGreaterThan.
* **tierToArchive**: [DateAfterModification](#dateaftermodification): The function to tier blobs to archive storage. Support blobs currently at Hot or Cool tier
* **tierToCool**: [DateAfterModification](#dateaftermodification): The function to tier blobs to cool storage. Support blobs currently at Hot tier

## ManagementPolicyDefinition
### Properties
* **actions**: [ManagementPolicyAction](#managementpolicyaction) (Required): An object that defines the action set.
* **filters**: [ManagementPolicyFilter](#managementpolicyfilter): An object that defines the filter set.

## ManagementPolicyFilter
### Properties
* **blobIndexMatch**: [TagFilter](#tagfilter)[]: An array of blob index tag based filters, there can be at most 10 tag filters
* **blobTypes**: string[] (Required): An array of predefined enum values. Currently blockBlob supports all tiering and delete actions. Only delete actions are supported for appendBlob.
* **prefixMatch**: string[]: An array of strings for prefixes to be match.

## ManagementPolicyProperties
### Properties
* **lastModifiedTime**: string (ReadOnly): Returns the date and time the ManagementPolicies was last modified.
* **policy**: [ManagementPolicySchema](#managementpolicyschema) (Required): The Storage Account ManagementPolicy, in JSON format. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts.

## ManagementPolicyRule
### Properties
* **definition**: [ManagementPolicyDefinition](#managementpolicydefinition) (Required): An object that defines the Lifecycle rule.
* **enabled**: bool: Rule is enabled if set to true.
* **name**: string (Required): A rule name can contain any combination of alpha numeric characters. Rule name is case-sensitive. It must be unique within a policy.
* **type**: 'Lifecycle' | string (Required): The valid value is Lifecycle

## ManagementPolicySchema
### Properties
* **rules**: [ManagementPolicyRule](#managementpolicyrule)[] (Required): The Storage Account ManagementPolicies Rules. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts.

## ManagementPolicySnapShot
### Properties
* **delete**: [DateAfterCreation](#dateaftercreation): The function to delete the blob snapshot
* **tierToArchive**: [DateAfterCreation](#dateaftercreation): The function to tier blob snapshot to archive storage. Support blob snapshot currently at Hot or Cool tier
* **tierToCool**: [DateAfterCreation](#dateaftercreation): The function to tier blob snapshot to cool storage. Support blob snapshot currently at Hot tier

## ManagementPolicyVersion
### Properties
* **delete**: [DateAfterCreation](#dateaftercreation): The function to delete the blob version
* **tierToArchive**: [DateAfterCreation](#dateaftercreation): The function to tier blob version to archive storage. Support blob version currently at Hot or Cool tier
* **tierToCool**: [DateAfterCreation](#dateaftercreation): The function to tier blob version to cool storage. Support blob version currently at Hot tier

## Multichannel
### Properties
* **enabled**: bool: Indicates whether multichannel is enabled

## NetworkRuleSet
### Properties
* **bypass**: 'AzureServices' | 'Logging' | 'Metrics' | 'None' | string: Specifies whether traffic is bypassed for Logging/Metrics/AzureServices. Possible values are any combination of Logging|Metrics|AzureServices (For example, "Logging, Metrics"), or None to bypass none of those traffics.
* **defaultAction**: 'Allow' | 'Deny' (Required): Specifies the default action of allow or deny when no other rules match.
* **ipRules**: [IPRule](#iprule)[]: Sets the IP ACL rules
* **resourceAccessRules**: [ResourceAccessRule](#resourceaccessrule)[]: Sets the resource access rules
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[]: Sets the virtual network rules

## ObjectReplicationPolicyFilter
### Properties
* **minCreationTime**: string: Blobs created after the time will be replicated to the destination. It must be in datetime format 'yyyy-MM-ddTHH:mm:ssZ'. Example: 2020-02-19T16:05:00Z
* **prefixMatch**: string[]: Optional. Filters the results to replicate only blobs whose names begin with the specified prefix.

## ObjectReplicationPolicyProperties
### Properties
* **destinationAccount**: string (Required): Required. Destination account name. It should be full resource id if allowCrossTenantReplication set to false.
* **enabledTime**: string (ReadOnly): Indicates when the policy is enabled on the source account.
* **policyId**: string (ReadOnly): A unique id for object replication policy.
* **rules**: [ObjectReplicationPolicyRule](#objectreplicationpolicyrule)[]: The storage account object replication rules.
* **sourceAccount**: string (Required): Required. Source account name. It should be full resource id if allowCrossTenantReplication set to false.

## ObjectReplicationPolicyRule
### Properties
* **destinationContainer**: string (Required): Required. Destination container name.
* **filters**: [ObjectReplicationPolicyFilter](#objectreplicationpolicyfilter): Optional. An object that defines the filter set.
* **ruleId**: string: Rule Id is auto-generated for each new rule on destination account. It is required for put policy on source account.
* **sourceContainer**: string (Required): Required. Source container name.

## PermissionScope
### Properties
* **permissions**: string (Required): The permissions for the local user. Possible values include: Read (r), Write (w), Delete (d), List (l), and Create (c).
* **resourceName**: string (Required): The name of resource, normally the container name or the file share name, used by the local user.
* **service**: string (Required): The service used by the local user, e.g. blob, file.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The resource of private end point.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkServiceConnectionState
### Properties
* **actionRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## ProtectedAppendWritesHistory
### Properties
* **allowProtectedAppendWritesAll**: bool: When enabled, new blocks can be written to both 'Append and Bock Blobs' while maintaining legal hold protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted.
* **timestamp**: string (ReadOnly): Returns the date and time the tag was added.

## ProtocolSettings
### Properties
* **smb**: [SmbSetting](#smbsetting): Setting for SMB protocol

## QueueProperties
### Properties
* **approximateMessageCount**: int (ReadOnly): Integer indicating an approximate number of messages in the queue. This number is not lower than the actual number of messages in the queue, but could be higher.
* **metadata**: [QueuePropertiesMetadata](#queuepropertiesmetadata): A name-value pair that represents queue metadata.

## QueuePropertiesMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## QueueServicePropertiesProperties
### Properties
* **cors**: [CorsRules](#corsrules): Specifies CORS rules for the Queue service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Queue service.

## ResourceAccessRule
### Properties
* **resourceId**: string: Resource Id
* **tenantId**: string: Tenant Id

## RestorePolicyProperties
### Properties
* **days**: int: how long this blob can be restored. It should be great than zero and less than DeleteRetentionPolicy.days.
* **enabled**: bool (Required): Blob restore is enabled if set to true.
* **lastEnabledTime**: string (ReadOnly): Deprecated in favor of minRestoreTime property.
* **minRestoreTime**: string (ReadOnly): Returns the minimum date and time that the restore can be started.

## RoutingPreference
### Properties
* **publishInternetEndpoints**: bool: A boolean flag which indicates whether internet routing storage endpoints are to be published
* **publishMicrosoftEndpoints**: bool: A boolean flag which indicates whether microsoft routing storage endpoints are to be published
* **routingChoice**: 'InternetRouting' | 'MicrosoftRouting' | string: Routing Choice defines the kind of network routing opted by the user.

## SasPolicy
### Properties
* **expirationAction**: 'Log' | string (Required): The SAS expiration action. Can only be Log.
* **sasExpirationPeriod**: string (Required): The SAS expiration period, DD.HH:MM:SS.

## ServiceSasParameters
### Properties
* **canonicalizedResource**: string (Required): The canonical path to the signed resource.
* **endPk**: string: The end of partition key.
* **endRk**: string: The end of row key.
* **keyToSign**: string: The key to sign the account SAS token with.
* **rscc**: string: The response header override for cache control.
* **rscd**: string: The response header override for content disposition.
* **rsce**: string: The response header override for content encoding.
* **rscl**: string: The response header override for content language.
* **rsct**: string: The response header override for content type.
* **signedExpiry**: string: The time at which the shared access signature becomes invalid.
* **signedIdentifier**: string: A unique value up to 64 characters in length that correlates to an access policy specified for the container, queue, or table.
* **signedIp**: string: An IP address or a range of IP addresses from which to accept requests.
* **signedPermission**: 'a' | 'c' | 'd' | 'l' | 'p' | 'r' | 'u' | 'w' | string: The signed permissions for the service SAS. Possible values include: Read (r), Write (w), Delete (d), List (l), Add (a), Create (c), Update (u) and Process (p).
* **signedProtocol**: 'https' | 'https,http': The protocol permitted for a request made with the account SAS.
* **signedResource**: 'b' | 'c' | 'f' | 's' | string: The signed services accessible with the service SAS. Possible values include: Blob (b), Container (c), File (f), Share (s).
* **signedStart**: string: The time at which the SAS becomes valid.
* **startPk**: string: The start of partition key.
* **startRk**: string: The start of row key.

## SignedIdentifier
### Properties
* **accessPolicy**: [AccessPolicy](#accesspolicy): Access policy
* **id**: string: An unique identifier of the stored access policy.

## Sku
### Properties
* **name**: 'Premium_LRS' | 'Premium_ZRS' | 'Standard_GRS' | 'Standard_GZRS' | 'Standard_LRS' | 'Standard_RAGRS' | 'Standard_RAGZRS' | 'Standard_ZRS' | string (Required): The SKU name. Required for account creation; optional for update. Note that in older versions, SKU name was called accountType.
* **tier**: 'Premium' | 'Standard' (ReadOnly): The SKU tier. This is based on the SKU name.

## SmbSetting
### Properties
* **authenticationMethods**: string: SMB authentication methods supported by server. Valid values are NTLMv2, Kerberos. Should be passed as a string with delimiter ';'.
* **channelEncryption**: string: SMB channel encryption supported by server. Valid values are AES-128-CCM, AES-128-GCM, AES-256-GCM. Should be passed as a string with delimiter ';'.
* **kerberosTicketEncryption**: string: Kerberos ticket encryption supported by server. Valid values are RC4-HMAC, AES-256. Should be passed as a string with delimiter ';'
* **multichannel**: [Multichannel](#multichannel): Multichannel setting. Applies to Premium FileStorage only.
* **versions**: string: SMB protocol versions supported by server. Valid values are SMB2.1, SMB3.0, SMB3.1.1. Should be passed as a string with delimiter ';'.

## SshPublicKey
### Properties
* **description**: string: Optional. It is used to store the function/usage of the key
* **key**: string: Ssh public key base64 encoded. The format should be: '<keyType> <keyData>', e.g. ssh-rsa AAAABBBB

## StorageAccountCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StorageAccountInternetEndpoints
### Properties
* **blob**: string (ReadOnly): Gets the blob endpoint.
* **dfs**: string (ReadOnly): Gets the dfs endpoint.
* **file**: string (ReadOnly): Gets the file endpoint.
* **web**: string (ReadOnly): Gets the web endpoint.

## StorageAccountKey
### Properties
* **creationTime**: string (ReadOnly): Creation time of the key, in round trip date format.
* **keyName**: string (ReadOnly): Name of the key.
* **permissions**: 'Full' | 'Read' (ReadOnly): Permissions for the key -- read-only or full permissions.
* **value**: string (ReadOnly): Base 64-encoded value of the key.

## StorageAccountListKeysResult
### Properties
* **keys**: [StorageAccountKey](#storageaccountkey)[] (ReadOnly): Gets the list of storage account keys and their properties for the specified storage account.

## StorageAccountMicrosoftEndpoints
### Properties
* **blob**: string (ReadOnly): Gets the blob endpoint.
* **dfs**: string (ReadOnly): Gets the dfs endpoint.
* **file**: string (ReadOnly): Gets the file endpoint.
* **queue**: string (ReadOnly): Gets the queue endpoint.
* **table**: string (ReadOnly): Gets the table endpoint.
* **web**: string (ReadOnly): Gets the web endpoint.

## StorageAccountPropertiesCreateParametersOrStorageAccountProperties
### Properties
* **accessTier**: 'Cool' | 'Hot' | 'Premium': Required for storage accounts where kind = BlobStorage. The access tier is used for billing. The 'Premium' access tier is the default value for premium block blobs storage account type and it cannot be changed for the premium block blobs storage account type.
* **allowBlobPublicAccess**: bool: Allow or disallow public access to all blobs or containers in the storage account. The default interpretation is true for this property.
* **allowCrossTenantReplication**: bool: Allow or disallow cross AAD tenant object replication. The default interpretation is true for this property.
* **allowedCopyScope**: 'AAD' | 'PrivateLink' | string: Restrict copy to and from Storage Accounts within an AAD tenant or with Private Links to the same VNet.
* **allowSharedKeyAccess**: bool: Indicates whether the storage account permits requests to be authorized with the account access key via Shared Key. If false, then all requests, including shared access signatures, must be authorized with Azure Active Directory (Azure AD). The default value is null, which is equivalent to true.
* **azureFilesIdentityBasedAuthentication**: [AzureFilesIdentityBasedAuthentication](#azurefilesidentitybasedauthentication): Provides the identity based authentication settings for Azure Files.
* **blobRestoreStatus**: [BlobRestoreStatus](#blobrestorestatus) (ReadOnly): Blob restore status
* **creationTime**: string (ReadOnly): Gets the creation date and time of the storage account in UTC.
* **customDomain**: [CustomDomain](#customdomain): User domain assigned to the storage account. Name is the CNAME source. Only one custom domain is supported per storage account at this time. To clear the existing custom domain, use an empty string for the custom domain name property.
* **defaultToOAuthAuthentication**: bool: A boolean flag which indicates whether the default authentication is OAuth or not. The default interpretation is false for this property.
* **dnsEndpointType**: 'AzureDnsZone' | 'Standard' | string: Allows you to specify the type of endpoint. Set this to AzureDNSZone to create a large number of accounts in a single subscription, which creates accounts in an Azure DNS Zone and the endpoint URL will have an alphanumeric DNS Zone identifier.
* **encryption**: [Encryption](#encryption): Encryption settings to be used for server-side encryption for the storage account.
* **failoverInProgress**: bool (ReadOnly): If the failover is in progress, the value will be true, otherwise, it will be null.
* **geoReplicationStats**: [GeoReplicationStats](#georeplicationstats) (ReadOnly): Geo Replication Stats
* **immutableStorageWithVersioning**: [ImmutableStorageAccount](#immutablestorageaccount): The property is immutable and can only be set to true at the account creation time. When set to true, it enables object level immutability for all the new containers in the account by default.
* **isHnsEnabled**: bool: Account HierarchicalNamespace enabled if sets to true.
* **isLocalUserEnabled**: bool: Enables local users feature, if set to true
* **isNfsV3Enabled**: bool: NFS 3.0 protocol support enabled if set to true.
* **isSftpEnabled**: bool: Enables Secure File Transfer Protocol, if set to true
* **keyCreationTime**: [KeyCreationTime](#keycreationtime) (ReadOnly): Storage account keys creation time.
* **keyPolicy**: [KeyPolicy](#keypolicy): KeyPolicy assigned to the storage account.
* **largeFileSharesState**: 'Disabled' | 'Enabled' | string: Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled.
* **lastGeoFailoverTime**: string (ReadOnly): Gets the timestamp of the most recent instance of a failover to the secondary location. Only the most recent timestamp is retained. This element is not returned if there has never been a failover instance. Only available if the accountType is Standard_GRS or Standard_RAGRS.
* **minimumTlsVersion**: 'TLS1_0' | 'TLS1_1' | 'TLS1_2' | string: Set the minimum TLS version to be permitted on requests to storage. The default interpretation is TLS 1.0 for this property.
* **networkAcls**: [NetworkRuleSet](#networkruleset): Network rule set
* **primaryEndpoints**: [Endpoints](#endpoints) (ReadOnly): Gets the URLs that are used to perform a retrieval of a public blob, queue, or table object. Note that Standard_ZRS and Premium_LRS accounts only return the blob endpoint.
* **primaryLocation**: string (ReadOnly): Gets the location of the primary data center for the storage account.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connection associated with the specified storage account
* **provisioningState**: 'Creating' | 'ResolvingDNS' | 'Succeeded' (ReadOnly): Gets the status of the storage account at the time the operation was called.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Allow or disallow public network access to Storage Account. Value is optional but if passed in, must be 'Enabled' or 'Disabled'.
* **routingPreference**: [RoutingPreference](#routingpreference): Maintains information about the network routing choice opted by the user for data transfer
* **sasPolicy**: [SasPolicy](#saspolicy): SasPolicy assigned to the storage account.
* **secondaryEndpoints**: [Endpoints](#endpoints) (ReadOnly): Gets the URLs that are used to perform a retrieval of a public blob, queue, or table object from the secondary location of the storage account. Only available if the SKU name is Standard_RAGRS.
* **secondaryLocation**: string (ReadOnly): Gets the location of the geo-replicated secondary for the storage account. Only available if the accountType is Standard_GRS or Standard_RAGRS.
* **statusOfPrimary**: 'available' | 'unavailable' (ReadOnly): Gets the status indicating whether the primary location of the storage account is available or unavailable.
* **statusOfSecondary**: 'available' | 'unavailable' (ReadOnly): Gets the status indicating whether the secondary location of the storage account is available or unavailable. Only available if the SKU name is Standard_GRS or Standard_RAGRS.
* **storageAccountSkuConversionStatus**: [StorageAccountSkuConversionStatus](#storageaccountskuconversionstatus) (ReadOnly): This property is readOnly and is set by server during asynchronous storage account sku conversion operations.
* **supportsHttpsTrafficOnly**: bool: Allows https traffic only to storage service if sets to true. The default value is true since API version 2019-04-01.

## StorageAccountSkuConversionStatus
### Properties
* **endTime**: string (ReadOnly): This property represents the sku conversion end time.
* **skuConversionStatus**: 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): This property indicates the current sku conversion status.
* **startTime**: string (ReadOnly): This property represents the sku conversion start time.
* **targetSkuName**: 'Premium_LRS' | 'Premium_ZRS' | 'Standard_GRS' | 'Standard_GZRS' | 'Standard_LRS' | 'Standard_RAGRS' | 'Standard_RAGZRS' | 'Standard_ZRS' | string: This property represents the target sku name to which the account sku is being converted asynchronously.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TableAccessPolicy
### Properties
* **expiryTime**: string: Expiry time of the access policy
* **permission**: string (Required): Required. List of abbreviated permissions. Supported permission values include 'r','a','u','d'
* **startTime**: string: Start time of the access policy

## TableProperties
### Properties
* **signedIdentifiers**: [TableSignedIdentifier](#tablesignedidentifier)[]: List of stored access policies specified on the table.
* **tableName**: string (ReadOnly): Table name under the specified account

## TableServicePropertiesProperties
### Properties
* **cors**: [CorsRules](#corsrules): Specifies CORS rules for the Table service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Table service.

## TableSignedIdentifier
### Properties
* **accessPolicy**: [TableAccessPolicy](#tableaccesspolicy): Access policy
* **id**: string (Required): unique-64-character-value of the stored access policy.

## TagFilter
### Properties
* **name**: string (Required): This is the filter tag name, it can have 1 - 128 characters
* **op**: string (Required): This is the comparison operator which is used for object comparison and filtering. Only == (equality operator) is currently supported
* **value**: string (Required): This is the filter tag value field used for tag based filtering, it can have 0 - 256 characters

## TagProperty
### Properties
* **objectIdentifier**: string (ReadOnly): Returns the Object ID of the user who added the tag.
* **tag**: string (ReadOnly): The tag value.
* **tenantId**: string (ReadOnly): Returns the Tenant ID that issued the token for the user who added the tag.
* **timestamp**: string (ReadOnly): Returns the date and time the tag was added.
* **upn**: string (ReadOnly): Returns the User Principal Name of the user who added the tag.

## UpdateHistoryProperty
### Properties
* **allowProtectedAppendWrites**: bool: This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to an append blob while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API.
* **allowProtectedAppendWritesAll**: bool: This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to both 'Append and Bock Blobs' while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API. The 'allowProtectedAppendWrites' and 'allowProtectedAppendWritesAll' properties are mutually exclusive.
* **immutabilityPeriodSinceCreationInDays**: int (ReadOnly): The immutability period for the blobs in the container since the policy creation, in days.
* **objectIdentifier**: string (ReadOnly): Returns the Object ID of the user who updated the ImmutabilityPolicy.
* **tenantId**: string (ReadOnly): Returns the Tenant ID that issued the token for the user who updated the ImmutabilityPolicy.
* **timestamp**: string (ReadOnly): Returns the date and time the ImmutabilityPolicy was updated.
* **update**: 'extend' | 'lock' | 'put' | string (ReadOnly): The ImmutabilityPolicy update type of a blob container, possible values include: put, lock and extend.
* **upn**: string (ReadOnly): Returns the User Principal Name of the user who updated the ImmutabilityPolicy.

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): The client ID of the identity.
* **principalId**: string (ReadOnly): The principal ID of the identity.

## VirtualNetworkRule
### Properties
* **action**: 'Allow': The action of virtual network rule.
* **id**: string (Required): Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
* **state**: 'Deprovisioning' | 'Failed' | 'NetworkSourceDeleted' | 'Provisioning' | 'Succeeded' | string: Gets the state of virtual network rule.

