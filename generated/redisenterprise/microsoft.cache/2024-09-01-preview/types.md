# Microsoft.Cache @ 2024-09-01-preview

## Resource Microsoft.Cache/redisEnterprise@2024-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The identity of the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[A-Za-z0-9]{1,60}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): Other properties of the cluster.
* **sku**: [Sku](#sku) (Required): The SKU to create, which affects price, performance, and features.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Cache/redisEnterprise' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: The Availability Zones where this cluster will be deployed.

## Resource Microsoft.Cache/redisEnterprise/databases@2024-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z0-9]{1,60}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseProperties](#databaseproperties): Other properties of the database.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Cache/redisEnterprise/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cache/redisEnterprise/databases/accessPolicyAssignments@2024-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z0-9]{1,60}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AccessPolicyAssignmentProperties](#accesspolicyassignmentproperties): Properties of the access policy assignment.
* **type**: 'Microsoft.Cache/redisEnterprise/databases/accessPolicyAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cache/redisEnterprise/privateEndpointConnections@2024-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **type**: 'Microsoft.Cache/redisEnterprise/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.Cache/redisEnterprise/databases@2024-09-01-preview)
* **Resource**: Microsoft.Cache/redisEnterprise/databases
* **ApiVersion**: 2024-09-01-preview
* **Output**: [AccessKeys](#accesskeys)

## AccessKeys
### Properties
* **primaryKey**: string (ReadOnly): The current primary key that clients can use to authenticate
* **secondaryKey**: string (ReadOnly): The current secondary key that clients can use to authenticate

## AccessPolicyAssignmentProperties
### Properties
* **accessPolicyName**: string {pattern: "^([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]|[a-zA-Z0-9])$"} (Required): Name of access policy under specific access policy assignment. Only "default" policy is supported for now.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Current provisioning status of the access policy assignment.
* **user**: [AccessPolicyAssignmentPropertiesUser](#accesspolicyassignmentpropertiesuser) (Required): The user associated with the access policy.

## AccessPolicyAssignmentPropertiesUser
### Properties
* **objectId**: string: The object ID of the user.

## ClusterProperties
### Properties
* **encryption**: [ClusterPropertiesEncryption](#clusterpropertiesencryption): Encryption-at-rest configuration for the cluster.
* **highAvailability**: 'Disabled' | 'Enabled' | string: Enabled by default. If highAvailability is disabled, the data set is not replicated. This affects the availability SLA, and increases the risk of data loss.
* **hostName**: string (ReadOnly): DNS name of the cluster endpoint
* **minimumTlsVersion**: '1.0' | '1.1' | '1.2' | string: The minimum TLS version for the cluster to support, e.g. '1.2'. Newer versions can be added in the future. Note that TLS 1.0 and TLS 1.1 are now completely obsolete -- you cannot use them. They are mentioned only for the sake of consistency with old API versions.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connections associated with the specified Redis Enterprise cluster
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Current provisioning status of the cluster
* **redisVersion**: string (ReadOnly): Version of redis the cluster supports, e.g. '6'
* **redundancyMode**: 'LR' | 'None' | 'ZR' | string (ReadOnly): Explains the current redundancy strategy of the cluster, which affects the expected SLA.
* **resourceState**: 'CreateFailed' | 'Creating' | 'DeleteFailed' | 'Deleting' | 'DisableFailed' | 'Disabled' | 'Disabling' | 'EnableFailed' | 'Enabling' | 'Running' | 'Scaling' | 'ScalingFailed' | 'UpdateFailed' | 'Updating' | string (ReadOnly): Current resource status of the cluster

## ClusterPropertiesEncryption
### Properties
* **customerManagedKeyEncryption**: [ClusterPropertiesEncryptionCustomerManagedKeyEncryption](#clusterpropertiesencryptioncustomermanagedkeyencryption): All Customer-managed key encryption properties for the resource. Set this to an empty object to use Microsoft-managed key encryption.

## ClusterPropertiesEncryptionCustomerManagedKeyEncryption
### Properties
* **keyEncryptionKeyIdentity**: [ClusterPropertiesEncryptionCustomerManagedKeyEncryptionKeyIdentity](#clusterpropertiesencryptioncustomermanagedkeyencryptionkeyidentity): All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
* **keyEncryptionKeyUrl**: string: Key encryption key Url, versioned only. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78

## ClusterPropertiesEncryptionCustomerManagedKeyEncryptionKeyIdentity
### Properties
* **identityType**: 'systemAssignedIdentity' | 'userAssignedIdentity' | string: Only userAssignedIdentity is supported in this API version; other types may be supported in the future
* **userAssignedIdentityResourceId**: string: User assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/<sub uuid>/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId.

## DatabaseProperties
### Properties
* **accessKeysAuthentication**: 'Disabled' | 'Enabled' | string: This property can be Enabled/Disabled to allow or deny access with the current access keys. Can be updated even after database is created.
* **clientProtocol**: 'Encrypted' | 'Plaintext' | string: Specifies whether redis clients can connect using TLS-encrypted or plaintext redis protocols. Default is TLS-encrypted.
* **clusteringPolicy**: 'EnterpriseCluster' | 'OSSCluster' | string: Clustering policy - default is OSSCluster. This property must be chosen at create time, and cannot be changed without deleting the database.
* **deferUpgrade**: 'Deferred' | 'NotDeferred' | string: Option to defer upgrade when newest version is released - default is NotDeferred. Learn more: https://aka.ms/redisversionupgrade
* **evictionPolicy**: 'AllKeysLFU' | 'AllKeysLRU' | 'AllKeysRandom' | 'NoEviction' | 'VolatileLFU' | 'VolatileLRU' | 'VolatileRandom' | 'VolatileTTL' | string: Redis eviction policy - default is VolatileLRU
* **geoReplication**: [DatabasePropertiesGeoReplication](#databasepropertiesgeoreplication): Optional set of properties to configure geo replication for this database.
* **modules**: [Module](#module)[]: Optional set of redis modules to enable in this database - modules can only be added at creation time.
* **persistence**: [Persistence](#persistence): Persistence settings
* **port**: int: TCP port of the database endpoint. Specified at create time. Defaults to an available port.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Current provisioning status of the database
* **redisVersion**: string (ReadOnly): Version of Redis the database is running on, e.g. '6.0'
* **resourceState**: 'CreateFailed' | 'Creating' | 'DeleteFailed' | 'Deleting' | 'DisableFailed' | 'Disabled' | 'Disabling' | 'EnableFailed' | 'Enabling' | 'Running' | 'Scaling' | 'ScalingFailed' | 'UpdateFailed' | 'Updating' | string (ReadOnly): Current resource status of the database

## DatabasePropertiesGeoReplication
### Properties
* **groupNickname**: string: Name for the group of linked database resources
* **linkedDatabases**: [LinkedDatabase](#linkeddatabase)[]: List of database resources to link with this database

## LinkedDatabase
### Properties
* **id**: string: Resource ID of a database resource to link with this database.
* **state**: 'LinkFailed' | 'Linked' | 'Linking' | 'UnlinkFailed' | 'Unlinking' | string (ReadOnly): State of the link between the database resources.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## Module
### Properties
* **args**: string: Configuration options for the module, e.g. 'ERROR_RATE 0.01 INITIAL_SIZE 400'.
* **name**: string (Required): The name of the module, e.g. 'RedisBloom', 'RediSearch', 'RedisTimeSeries'
* **version**: string (ReadOnly): The version of the module, e.g. '1.0'.

## Persistence
### Properties
* **aofEnabled**: bool: Sets whether AOF is enabled. Note that at most one of AOF or RDB persistence may be enabled.
* **aofFrequency**: '1s' | 'always' | string: Sets the frequency at which data is written to disk. Defaults to '1s', meaning 'every second'. Note that the 'always' setting is deprecated, because of its performance impact.
* **rdbEnabled**: bool: Sets whether RDB is enabled. Note that at most one of AOF or RDB persistence may be enabled.
* **rdbFrequency**: '12h' | '1h' | '6h' | string: Sets the frequency at which a snapshot of the database is created.

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
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## Sku
### Properties
* **capacity**: int: This property is only used with Enterprise and EnterpriseFlash SKUs. Determines the size of the cluster. Valid values are (2, 4, 6, ...) for Enterprise SKUs and (3, 9, 15, ...) for EnterpriseFlash SKUs.
* **name**: 'Balanced_B0' | 'Balanced_B1' | 'Balanced_B10' | 'Balanced_B100' | 'Balanced_B1000' | 'Balanced_B150' | 'Balanced_B20' | 'Balanced_B250' | 'Balanced_B3' | 'Balanced_B350' | 'Balanced_B5' | 'Balanced_B50' | 'Balanced_B500' | 'Balanced_B700' | 'ComputeOptimized_X10' | 'ComputeOptimized_X100' | 'ComputeOptimized_X150' | 'ComputeOptimized_X20' | 'ComputeOptimized_X250' | 'ComputeOptimized_X3' | 'ComputeOptimized_X350' | 'ComputeOptimized_X5' | 'ComputeOptimized_X50' | 'ComputeOptimized_X500' | 'ComputeOptimized_X700' | 'EnterpriseFlash_F1500' | 'EnterpriseFlash_F300' | 'EnterpriseFlash_F700' | 'Enterprise_E1' | 'Enterprise_E10' | 'Enterprise_E100' | 'Enterprise_E20' | 'Enterprise_E200' | 'Enterprise_E400' | 'Enterprise_E5' | 'Enterprise_E50' | 'FlashOptimized_A1000' | 'FlashOptimized_A1500' | 'FlashOptimized_A2000' | 'FlashOptimized_A250' | 'FlashOptimized_A4500' | 'FlashOptimized_A500' | 'FlashOptimized_A700' | 'MemoryOptimized_M10' | 'MemoryOptimized_M100' | 'MemoryOptimized_M1000' | 'MemoryOptimized_M150' | 'MemoryOptimized_M1500' | 'MemoryOptimized_M20' | 'MemoryOptimized_M2000' | 'MemoryOptimized_M250' | 'MemoryOptimized_M350' | 'MemoryOptimized_M50' | 'MemoryOptimized_M500' | 'MemoryOptimized_M700' | string (Required): The level of Redis Enterprise cluster to deploy. Possible values: ('Balanced_B5', 'MemoryOptimized_M10', 'ComputeOptimized_X5', etc.). For more information on SKUs see the latest pricing documentation. Note that additional SKUs may become supported in the future.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

