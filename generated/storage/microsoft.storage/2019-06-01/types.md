# Microsoft.Storage @ 2019-06-01

## Resource Microsoft.Storage/storageAccounts@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **kind**: 'BlobStorage' | 'BlockBlobStorage' | 'FileStorage' | 'Storage' | 'StorageV2' (Required): Required. Indicates the type of storage account.
* **location**: string (Required): Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageAccountPropertiesCreateParameters](#storageaccountpropertiescreateparameters): The parameters used to create the storage account.
* **sku**: [Sku](#sku) (Required): The SKU of the storage account.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.
* **type**: 'Microsoft.Storage/storageAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/blobServices@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:90_properties](#schemas90properties): The properties of a storage account’s Blob service.
* **sku**: [Sku](#sku) (ReadOnly): The SKU of the storage account.
* **type**: 'Microsoft.Storage/storageAccounts/blobServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/blobServices/containers@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContainerProperties](#containerproperties): The properties of a container.
* **type**: 'Microsoft.Storage/storageAccounts/blobServices/containers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ImmutabilityPolicyProperty](#immutabilitypolicyproperty) (Required): The properties of an ImmutabilityPolicy of a blob container.
* **type**: 'Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/encryptionScopes@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EncryptionScopeProperties](#encryptionscopeproperties): Properties of the encryption scope.
* **type**: 'Microsoft.Storage/storageAccounts/encryptionScopes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/fileServices@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:98_properties](#schemas98properties): The properties of File services in storage account.
* **sku**: [Sku](#sku) (ReadOnly): The SKU of the storage account.
* **type**: 'Microsoft.Storage/storageAccounts/fileServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/fileServices/shares@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FileShareProperties](#fileshareproperties): The properties of the file share.
* **type**: 'Microsoft.Storage/storageAccounts/fileServices/shares' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/inventoryPolicies@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BlobInventoryPolicyProperties](#blobinventorypolicyproperties): The storage account blob inventory policy properties.
* **systemData**: [systemData](#systemdata): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Storage/storageAccounts/inventoryPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/managementPolicies@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagementPolicyProperties](#managementpolicyproperties): The Storage Account ManagementPolicy properties.
* **type**: 'Microsoft.Storage/storageAccounts/managementPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/objectReplicationPolicies@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ObjectReplicationPolicyProperties](#objectreplicationpolicyproperties): The Storage Account ObjectReplicationPolicy properties.
* **type**: 'Microsoft.Storage/storageAccounts/objectReplicationPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/privateEndpointConnections@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnectProperties.
* **type**: 'Microsoft.Storage/storageAccounts/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/queueServices@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:107_properties](#schemas107properties): The properties of a storage account’s Queue service.
* **type**: 'Microsoft.Storage/storageAccounts/queueServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/queueServices/queues@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [QueueProperties](#queueproperties):
* **type**: 'Microsoft.Storage/storageAccounts/queueServices/queues' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/tableServices@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:114_properties](#schemas114properties): The properties of a storage account’s Table service.
* **type**: 'Microsoft.Storage/storageAccounts/tableServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage/storageAccounts/tableServices/tables@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TableProperties](#tableproperties) (ReadOnly):
* **type**: 'Microsoft.Storage/storageAccounts/tableServices/tables' (ReadOnly, DeployTimeConstant): The resource type

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: string (Required): The identity type.

## StorageAccountPropertiesCreateParameters
### Properties
* **accessTier**: 'Cool' | 'Hot': Required for storage accounts where kind = BlobStorage. The access tier used for billing.
* **allowBlobPublicAccess**: bool: Allow or disallow public access to all blobs or containers in the storage account. The default interpretation is true for this property.
* **allowSharedKeyAccess**: bool: Indicates whether the storage account permits requests to be authorized with the account access key via Shared Key. If false, then all requests, including shared access signatures, must be authorized with Azure Active Directory (Azure AD). The default value is null, which is equivalent to true.
* **azureFilesIdentityBasedAuthentication**: [AzureFilesIdentityBasedAuthentication](#azurefilesidentitybasedauthentication): Settings for Azure Files identity based authentication.
* **blobRestoreStatus**: [BlobRestoreStatus](#blobrestorestatus) (ReadOnly): Blob restore status.
* **creationTime**: string (ReadOnly): Gets the creation date and time of the storage account in UTC.
* **customDomain**: [CustomDomain](#customdomain): The custom domain assigned to this storage account. This can be set via Update.
* **encryption**: [Encryption](#encryption): The encryption settings on the storage account.
* **failoverInProgress**: bool (ReadOnly): If the failover is in progress, the value will be true, otherwise, it will be null.
* **geoReplicationStats**: [GeoReplicationStats](#georeplicationstats) (ReadOnly): Statistics related to replication for storage account's Blob, Table, Queue and File services. It is only available when geo-redundant replication is enabled for the storage account.
* **isHnsEnabled**: bool: Account HierarchicalNamespace enabled if sets to true.
* **largeFileSharesState**: 'Disabled' | 'Enabled': Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled.
* **lastGeoFailoverTime**: string (ReadOnly): Gets the timestamp of the most recent instance of a failover to the secondary location. Only the most recent timestamp is retained. This element is not returned if there has never been a failover instance. Only available if the accountType is Standard_GRS or Standard_RAGRS.
* **minimumTlsVersion**: 'TLS1_0' | 'TLS1_1' | 'TLS1_2': Set the minimum TLS version to be permitted on requests to storage. The default interpretation is TLS 1.0 for this property.
* **networkAcls**: [NetworkRuleSet](#networkruleset): Network rule set
* **primaryEndpoints**: [Endpoints](#endpoints) (ReadOnly): The URIs that are used to perform a retrieval of a public blob, queue, table, web or dfs object.
* **primaryLocation**: string (ReadOnly): Gets the location of the primary data center for the storage account.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connection associated with the specified storage account
* **provisioningState**: 'Creating' | 'ResolvingDNS' | 'Succeeded' (ReadOnly): Gets the status of the storage account at the time the operation was called.
* **routingPreference**: [RoutingPreference](#routingpreference): Routing preference defines the type of network, either microsoft or internet routing to be used to deliver the user data, the default option is microsoft routing
* **secondaryEndpoints**: [Endpoints](#endpoints) (ReadOnly): The URIs that are used to perform a retrieval of a public blob, queue, table, web or dfs object.
* **secondaryLocation**: string (ReadOnly): Gets the location of the geo-replicated secondary for the storage account. Only available if the accountType is Standard_GRS or Standard_RAGRS.
* **statusOfPrimary**: 'available' | 'unavailable' (ReadOnly): Gets the status indicating whether the primary location of the storage account is available or unavailable.
* **statusOfSecondary**: 'available' | 'unavailable' (ReadOnly): Gets the status indicating whether the secondary location of the storage account is available or unavailable. Only available if the SKU name is Standard_GRS or Standard_RAGRS.
* **supportsHttpsTrafficOnly**: bool: Allows https traffic only to storage service if sets to true. The default value is true since API version 2019-04-01.

## AzureFilesIdentityBasedAuthentication
### Properties
* **activeDirectoryProperties**: [ActiveDirectoryProperties](#activedirectoryproperties): Settings properties for Active Directory (AD).
* **directoryServiceOptions**: 'AADDS' | 'AD' | 'None' (Required): Indicates the directory service used.

## ActiveDirectoryProperties
### Properties
* **azureStorageSid**: string (Required): Specifies the security identifier (SID) for Azure Storage.
* **domainGuid**: string (Required): Specifies the domain GUID.
* **domainName**: string (Required): Specifies the primary domain that the AD DNS server is authoritative for.
* **domainSid**: string (Required): Specifies the security identifier (SID).
* **forestName**: string (Required): Specifies the Active Directory forest to get.
* **netBiosDomainName**: string (Required): Specifies the NetBIOS domain name.

## BlobRestoreStatus
### Properties
* **failureReason**: string (ReadOnly): Failure reason when blob restore is failed.
* **parameters**: [BlobRestoreParameters](#blobrestoreparameters) (ReadOnly): Blob restore parameters
* **restoreId**: string (ReadOnly): Id for tracking blob restore request.
* **status**: 'Complete' | 'Failed' | 'InProgress' (ReadOnly): The status of blob restore progress. Possible values are: - InProgress: Indicates that blob restore is ongoing. - Complete: Indicates that blob restore has been completed successfully. - Failed: Indicates that blob restore is failed.

## BlobRestoreParameters
### Properties
* **blobRanges**: [BlobRestoreRange](#blobrestorerange)[] (ReadOnly): Blob ranges to restore.
* **timeToRestore**: string (ReadOnly): Restore blob to the specified time.

## BlobRestoreRange
### Properties
* **endRange**: string (ReadOnly): Blob end range. This is exclusive. Empty means account end.
* **startRange**: string (ReadOnly): Blob start range. This is inclusive. Empty means account start.

## CustomDomain
### Properties
* **name**: string (Required): Gets or sets the custom domain name assigned to the storage account. Name is the CNAME source.
* **useSubDomainName**: bool: Indicates whether indirect CName validation is enabled. Default value is false. This should only be set on updates.

## Encryption
### Properties
* **keySource**: 'Microsoft.Keyvault' | 'Microsoft.Storage' (Required): The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Storage, Microsoft.Keyvault.
* **keyvaultproperties**: [KeyVaultProperties](#keyvaultproperties): Properties of key vault.
* **requireInfrastructureEncryption**: bool: A boolean indicating whether or not the service applies a secondary layer of encryption with platform managed keys for data at rest.
* **services**: [EncryptionServices](#encryptionservices): A list of services that support encryption.

## KeyVaultProperties
### Properties
* **currentVersionedKeyIdentifier**: string (ReadOnly): The object identifier of the current versioned Key Vault Key in use.
* **keyname**: string: The name of KeyVault key.
* **keyvaulturi**: string: The Uri of KeyVault.
* **keyversion**: string: The version of KeyVault key.
* **lastKeyRotationTimestamp**: string (ReadOnly): Timestamp of last rotation of the Key Vault Key.

## EncryptionServices
### Properties
* **blob**: [EncryptionService](#encryptionservice): A service that allows server-side encryption to be used.
* **file**: [EncryptionService](#encryptionservice): A service that allows server-side encryption to be used.
* **queue**: [EncryptionService](#encryptionservice): A service that allows server-side encryption to be used.
* **table**: [EncryptionService](#encryptionservice): A service that allows server-side encryption to be used.

## EncryptionService
### Properties
* **enabled**: bool: A boolean indicating whether or not the service encrypts the data as it is stored.
* **keyType**: 'Account' | 'Service': Encryption key type to be used for the encryption service. 'Account' key type implies that an account-scoped encryption key will be used. 'Service' key type implies that a default service key is used.
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
* **action**: 'Allow': The action of IP ACL rule.
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
* **internetEndpoints**: [StorageAccountInternetEndpoints](#storageaccountinternetendpoints) (ReadOnly): The URIs that are used to perform a retrieval of a public blob, file, web or dfs object via a internet routing endpoint.
* **microsoftEndpoints**: [StorageAccountMicrosoftEndpoints](#storageaccountmicrosoftendpoints) (ReadOnly): The URIs that are used to perform a retrieval of a public blob, queue, table, web or dfs object via a microsoft routing endpoint.
* **queue**: string (ReadOnly): Gets the queue endpoint.
* **table**: string (ReadOnly): Gets the table endpoint.
* **web**: string (ReadOnly): Gets the web endpoint.

## StorageAccountInternetEndpoints
### Properties
* **blob**: string (ReadOnly): Gets the blob endpoint.
* **dfs**: string (ReadOnly): Gets the dfs endpoint.
* **file**: string (ReadOnly): Gets the file endpoint.
* **web**: string (ReadOnly): Gets the web endpoint.

## StorageAccountMicrosoftEndpoints
### Properties
* **blob**: string (ReadOnly): Gets the blob endpoint.
* **dfs**: string (ReadOnly): Gets the dfs endpoint.
* **file**: string (ReadOnly): Gets the file endpoint.
* **queue**: string (ReadOnly): Gets the queue endpoint.
* **table**: string (ReadOnly): Gets the table endpoint.
* **web**: string (ReadOnly): Gets the web endpoint.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (ReadOnly): Properties of the PrivateEndpointConnectProperties.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint) (ReadOnly): The Private Endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (ReadOnly): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

## PrivateLinkServiceConnectionState
### Properties
* **actionRequired**: string (ReadOnly): A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string (ReadOnly): The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' (ReadOnly): Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## RoutingPreference
### Properties
* **publishInternetEndpoints**: bool: A boolean flag which indicates whether internet routing storage endpoints are to be published
* **publishMicrosoftEndpoints**: bool: A boolean flag which indicates whether microsoft routing storage endpoints are to be published
* **routingChoice**: 'InternetRouting' | 'MicrosoftRouting': Routing Choice defines the kind of network routing opted by the user.

## Sku
### Properties
* **name**: 'Premium_LRS' | 'Premium_ZRS' | 'Standard_GRS' | 'Standard_GZRS' | 'Standard_LRS' | 'Standard_RAGRS' | 'Standard_RAGZRS' | 'Standard_ZRS' (Required):
* **tier**: 'Premium' | 'Standard':

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:90_properties
### Properties
* **automaticSnapshotPolicyEnabled**: bool: Deprecated in favor of isVersioningEnabled property.
* **changeFeed**: [ChangeFeed](#changefeed): The blob service properties for change feed events.
* **containerDeleteRetentionPolicy**: [DeleteRetentionPolicy](#deleteretentionpolicy): The service properties for soft delete.
* **cors**: [CorsRules](#corsrules): Sets the CORS rules. You can include up to five CorsRule elements in the request.
* **defaultServiceVersion**: string: DefaultServiceVersion indicates the default version to use for requests to the Blob service if an incoming request’s version is not specified. Possible values include version 2008-10-27 and all more recent versions.
* **deleteRetentionPolicy**: [DeleteRetentionPolicy](#deleteretentionpolicy): The service properties for soft delete.
* **isVersioningEnabled**: bool: Versioning is enabled if set to true.
* **lastAccessTimeTrackingPolicy**: [LastAccessTimeTrackingPolicy](#lastaccesstimetrackingpolicy): The blob service properties for Last access time based tracking policy.
* **restorePolicy**: [RestorePolicyProperties](#restorepolicyproperties): The blob service properties for blob restore policy

## ChangeFeed
### Properties
* **enabled**: bool: Indicates whether change feed event logging is enabled for the Blob service.
* **retentionInDays**: int: Indicates the duration of changeFeed retention in days. Minimum value is 1 day and maximum value is 146000 days (400 years). A null value indicates an infinite retention of the change feed.

## DeleteRetentionPolicy
### Properties
* **days**: int: Indicates the number of days that the deleted item should be retained. The minimum specified value can be 1 and the maximum value can be 365.
* **enabled**: bool: Indicates whether DeleteRetentionPolicy is enabled.

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

## LastAccessTimeTrackingPolicy
### Properties
* **blobType**: string[]: An array of predefined supported blob types. Only blockBlob is the supported value. This field is currently read only
* **enable**: bool (Required): When set to true last access time based tracking is enabled.
* **name**: 'AccessTimeTracking': Name of the policy. The valid value is AccessTimeTracking. This field is currently read only.
* **trackingGranularityInDays**: int: The field specifies blob object tracking granularity in days, typically how often the blob object should be tracked.This field is currently read only with value as 1

## RestorePolicyProperties
### Properties
* **days**: int: how long this blob can be restored. It should be great than zero and less than DeleteRetentionPolicy.days.
* **enabled**: bool (Required): Blob restore is enabled if set to true.
* **lastEnabledTime**: string (ReadOnly): Deprecated in favor of minRestoreTime property.
* **minRestoreTime**: string (ReadOnly): Returns the minimum date and time that the restore can be started.

## ContainerProperties
### Properties
* **defaultEncryptionScope**: string: Default the container to use specified encryption scope for all writes.
* **deleted**: bool (ReadOnly): Indicates whether the blob container was deleted.
* **deletedTime**: string (ReadOnly): Blob container deletion time.
* **denyEncryptionScopeOverride**: bool: Block override of encryption scope from the container default.
* **hasImmutabilityPolicy**: bool (ReadOnly): The hasImmutabilityPolicy public property is set to true by SRP if ImmutabilityPolicy has been created for this container. The hasImmutabilityPolicy public property is set to false by SRP if ImmutabilityPolicy has not been created for this container.
* **hasLegalHold**: bool (ReadOnly): The hasLegalHold public property is set to true by SRP if there are at least one existing tag. The hasLegalHold public property is set to false by SRP if all existing legal hold tags are cleared out. There can be a maximum of 1000 blob containers with hasLegalHold=true for a given account.
* **immutabilityPolicy**: [ImmutabilityPolicyProperties](#immutabilitypolicyproperties) (ReadOnly): The properties of an ImmutabilityPolicy of a blob container.
* **lastModifiedTime**: string (ReadOnly): Returns the date and time the container was last modified.
* **leaseDuration**: 'Fixed' | 'Infinite' (ReadOnly): Specifies whether the lease on a container is of infinite or fixed duration, only when the container is leased.
* **leaseState**: 'Available' | 'Breaking' | 'Broken' | 'Expired' | 'Leased' (ReadOnly): Lease state of the container.
* **leaseStatus**: 'Locked' | 'Unlocked' (ReadOnly): The lease status of the container.
* **legalHold**: [LegalHoldProperties](#legalholdproperties) (ReadOnly): The LegalHold property of a blob container.
* **metadata**: [Dictionary<string,String>](#dictionarystringstring): A name-value pair to associate with the container as metadata.
* **publicAccess**: 'Blob' | 'Container' | 'None': Specifies whether data in the container may be accessed publicly and the level of access.
* **remainingRetentionDays**: int (ReadOnly): Remaining retention days for soft deleted blob container.
* **version**: string (ReadOnly): The version of the deleted blob container.

## ImmutabilityPolicyProperties
### Properties
* **etag**: string (ReadOnly): ImmutabilityPolicy Etag.
* **properties**: [ImmutabilityPolicyProperty](#immutabilitypolicyproperty): The properties of an ImmutabilityPolicy of a blob container.
* **updateHistory**: [UpdateHistoryProperty](#updatehistoryproperty)[] (ReadOnly): The ImmutabilityPolicy update history of the blob container.

## ImmutabilityPolicyProperty
### Properties
* **allowProtectedAppendWrites**: bool: This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to an append blob while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API
* **immutabilityPeriodSinceCreationInDays**: int: The immutability period for the blobs in the container since the policy creation, in days.
* **state**: 'Locked' | 'Unlocked' (ReadOnly): The ImmutabilityPolicy state of a blob container,

## UpdateHistoryProperty
### Properties
* **immutabilityPeriodSinceCreationInDays**: int (ReadOnly): The immutability period for the blobs in the container since the policy creation, in days.
* **objectIdentifier**: string (ReadOnly): Returns the Object ID of the user who updated the ImmutabilityPolicy.
* **tenantId**: string (ReadOnly): Returns the Tenant ID that issued the token for the user who updated the ImmutabilityPolicy.
* **timestamp**: string (ReadOnly): Returns the date and time the ImmutabilityPolicy was updated.
* **update**: 'extend' | 'lock' | 'put' (ReadOnly): The ImmutabilityPolicy update type of a blob container,
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EncryptionScopeProperties
### Properties
* **creationTime**: string (ReadOnly): Gets the creation date and time of the encryption scope in UTC.
* **keyVaultProperties**: [EncryptionScopeKeyVaultProperties](#encryptionscopekeyvaultproperties): The key vault properties for the encryption scope. This is a required field if encryption scope 'source' attribute is set to 'Microsoft.KeyVault'.
* **lastModifiedTime**: string (ReadOnly): Gets the last modification date and time of the encryption scope in UTC.
* **source**: 'Microsoft.KeyVault' | 'Microsoft.Storage': The provider for the encryption scope. Possible values (case-insensitive):  Microsoft.Storage, Microsoft.KeyVault.
* **state**: 'Disabled' | 'Enabled': The state of the encryption scope. Possible values (case-insensitive):  Enabled, Disabled.

## EncryptionScopeKeyVaultProperties
### Properties
* **keyUri**: string: The object identifier for a key vault key object. When applied, the encryption scope will use the key referenced by the identifier to enable customer-managed key support on this encryption scope.

## schemas:98_properties
### Properties
* **cors**: [CorsRules](#corsrules): Sets the CORS rules. You can include up to five CorsRule elements in the request.
* **shareDeleteRetentionPolicy**: [DeleteRetentionPolicy](#deleteretentionpolicy): The service properties for soft delete.

## FileShareProperties
### Properties
* **accessTier**: 'Cool' | 'Hot' | 'Premium' | 'TransactionOptimized': Access tier for specific share. GpV2 account can choose between TransactionOptimized (default), Hot, and Cool. FileStorage account can choose Premium.
* **accessTierChangeTime**: string (ReadOnly): Indicates the last modification time for share access tier.
* **accessTierStatus**: string (ReadOnly): Indicates if there is a pending transition for access tier.
* **deleted**: bool (ReadOnly): Indicates whether the share was deleted.
* **deletedTime**: string (ReadOnly): The deleted time if the share was deleted.
* **enabledProtocols**: 'NFS' | 'SMB': The authentication protocol that is used for the file share. Can only be specified when creating a share.
* **lastModifiedTime**: string (ReadOnly): Returns the date and time the share was last modified.
* **metadata**: [Dictionary<string,String>](#dictionarystringstring): A name-value pair to associate with the share as metadata.
* **remainingRetentionDays**: int (ReadOnly): Remaining retention days for share that was soft deleted.
* **rootSquash**: 'AllSquash' | 'NoRootSquash' | 'RootSquash': The property is for NFS share only. The default is NoRootSquash.
* **shareQuota**: int: The maximum size of the share, in gigabytes. Must be greater than 0, and less than or equal to 5TB (5120). For Large File Shares, the maximum size is 102400.
* **shareUsageBytes**: int (ReadOnly): The approximate size of the data stored on the share. Note that this value may not include all recently created or recently resized files.
* **version**: string (ReadOnly): The version of the share.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BlobInventoryPolicyProperties
### Properties
* **lastModifiedTime**: string (ReadOnly): Returns the last modified date and time of the blob inventory policy.
* **policy**: [BlobInventoryPolicySchema](#blobinventorypolicyschema) (Required): The storage account blob inventory policy rules.

## BlobInventoryPolicySchema
### Properties
* **destination**: string (Required): Container name where blob inventory files are stored. Must be pre-created.
* **enabled**: bool (Required): Policy is enabled if set to true.
* **rules**: [BlobInventoryPolicyRule](#blobinventorypolicyrule)[] (Required): The storage account blob inventory policy rules. The rule is applied when it is enabled.
* **type**: string (Required): The valid value is Inventory

## BlobInventoryPolicyRule
### Properties
* **definition**: [BlobInventoryPolicyDefinition](#blobinventorypolicydefinition) (Required): An object that defines the blob inventory rule. Each definition consists of a set of filters.
* **enabled**: bool (Required): Rule is enabled when set to true.
* **name**: string (Required): A rule name can contain any combination of alpha numeric characters. Rule name is case-sensitive. It must be unique within a policy.

## BlobInventoryPolicyDefinition
### Properties
* **filters**: [BlobInventoryPolicyFilter](#blobinventorypolicyfilter) (Required): An object that defines the blob inventory rule filter conditions.

## BlobInventoryPolicyFilter
### Properties
* **blobTypes**: string[] (Required): An array of predefined enum values. Valid values include blockBlob, appendBlob, pageBlob. Hns accounts does not support pageBlobs.
* **includeBlobVersions**: bool: Includes blob versions in blob inventory when value set to true.
* **includeSnapshots**: bool: Includes blob snapshots in blob inventory when value set to true.
* **prefixMatch**: string[]: An array of strings for blob prefixes to be matched.

## systemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource.

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
* **type**: string (Required): The valid value is Lifecycle

## ManagementPolicyDefinition
### Properties
* **actions**: [ManagementPolicyAction](#managementpolicyaction) (Required): Actions are applied to the filtered blobs when the execution condition is met.
* **filters**: [ManagementPolicyFilter](#managementpolicyfilter): Filters limit rule actions to a subset of blobs within the storage account. If multiple filters are defined, a logical AND is performed on all filters.

## ManagementPolicyAction
### Properties
* **baseBlob**: [ManagementPolicyBaseBlob](#managementpolicybaseblob): Management policy action for base blob.
* **snapshot**: [ManagementPolicySnapShot](#managementpolicysnapshot): Management policy action for snapshot.
* **version**: [ManagementPolicyVersion](#managementpolicyversion): Management policy action for blob version.

## ManagementPolicyBaseBlob
### Properties
* **delete**: [DateAfterModification](#dateaftermodification): Object to define the number of days after object last modification Or last access. Properties daysAfterModificationGreaterThan and daysAfterLastAccessTimeGreaterThan are mutually exclusive.
* **enableAutoTierToHotFromCool**: bool: This property enables auto tiering of a blob from cool to hot on a blob access. This property requires tierToCool.daysAfterLastAccessTimeGreaterThan.
* **tierToArchive**: [DateAfterModification](#dateaftermodification): Object to define the number of days after object last modification Or last access. Properties daysAfterModificationGreaterThan and daysAfterLastAccessTimeGreaterThan are mutually exclusive.
* **tierToCool**: [DateAfterModification](#dateaftermodification): Object to define the number of days after object last modification Or last access. Properties daysAfterModificationGreaterThan and daysAfterLastAccessTimeGreaterThan are mutually exclusive.

## DateAfterModification
### Properties
* **daysAfterLastAccessTimeGreaterThan**: int: Value indicating the age in days after last blob access. This property can only be used in conjunction with last access time tracking policy
* **daysAfterModificationGreaterThan**: int: Value indicating the age in days after last modification

## ManagementPolicySnapShot
### Properties
* **delete**: [DateAfterCreation](#dateaftercreation): Object to define the number of days after creation.
* **tierToArchive**: [DateAfterCreation](#dateaftercreation): Object to define the number of days after creation.
* **tierToCool**: [DateAfterCreation](#dateaftercreation): Object to define the number of days after creation.

## DateAfterCreation
### Properties
* **daysAfterCreationGreaterThan**: int (Required): Value indicating the age in days after creation

## ManagementPolicyVersion
### Properties
* **delete**: [DateAfterCreation](#dateaftercreation): Object to define the number of days after creation.
* **tierToArchive**: [DateAfterCreation](#dateaftercreation): Object to define the number of days after creation.
* **tierToCool**: [DateAfterCreation](#dateaftercreation): Object to define the number of days after creation.

## ManagementPolicyFilter
### Properties
* **blobIndexMatch**: [TagFilter](#tagfilter)[]: An array of blob index tag based filters, there can be at most 10 tag filters
* **blobTypes**: string[] (Required): An array of predefined enum values. Currently blockBlob supports all tiering and delete actions. Only delete actions are supported for appendBlob.
* **prefixMatch**: string[]: An array of strings for prefixes to be match.

## TagFilter
### Properties
* **name**: string (Required): This is the filter tag name, it can have 1 - 128 characters
* **op**: string (Required): This is the comparison operator which is used for object comparison and filtering. Only == (equality operator) is currently supported
* **value**: string (Required): This is the filter tag value field used for tag based filtering, it can have 0 - 256 characters

## ObjectReplicationPolicyProperties
### Properties
* **destinationAccount**: string (Required): Required. Destination account name.
* **enabledTime**: string (ReadOnly): Indicates when the policy is enabled on the source account.
* **policyId**: string (ReadOnly): A unique id for object replication policy.
* **rules**: [ObjectReplicationPolicyRule](#objectreplicationpolicyrule)[]: The storage account object replication rules.
* **sourceAccount**: string (Required): Required. Source account name.

## ObjectReplicationPolicyRule
### Properties
* **destinationContainer**: string (Required): Required. Destination container name.
* **filters**: [ObjectReplicationPolicyFilter](#objectreplicationpolicyfilter): Filters limit replication to a subset of blobs within the storage account. A logical OR is performed on values in the filter. If multiple filters are defined, a logical AND is performed on all filters.
* **ruleId**: string: Rule Id is auto-generated for each new rule on destination account. It is required for put policy on source account.
* **sourceContainer**: string (Required): Required. Source container name.

## ObjectReplicationPolicyFilter
### Properties
* **minCreationTime**: string: Blobs created after the time will be replicated to the destination. It must be in datetime format 'yyyy-MM-ddTHH:mm:ssZ'. Example: 2020-02-19T16:05:00Z
* **prefixMatch**: string[]: Optional. Filters the results to replicate only blobs whose names begin with the specified prefix.

## schemas:107_properties
### Properties
* **cors**: [CorsRules](#corsrules): Sets the CORS rules. You can include up to five CorsRule elements in the request.

## QueueProperties
### Properties
* **approximateMessageCount**: int (ReadOnly): Integer indicating an approximate number of messages in the queue. This number is not lower than the actual number of messages in the queue, but could be higher.
* **metadata**: [Dictionary<string,String>](#dictionarystringstring): A name-value pair that represents queue metadata.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:114_properties
### Properties
* **cors**: [CorsRules](#corsrules): Sets the CORS rules. You can include up to five CorsRule elements in the request.

## TableProperties
### Properties
* **tableName**: string (ReadOnly): Table name under the specified account

