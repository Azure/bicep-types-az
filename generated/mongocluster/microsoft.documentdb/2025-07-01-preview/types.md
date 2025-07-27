# Microsoft.DocumentDB @ 2025-07-01-preview

## Resource Microsoft.DocumentDB/mongoClusters@2025-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 40, pattern: "^[a-z0-9]+(-[a-z0-9]+)*"} (Required, DeployTimeConstant): The resource name
* **properties**: [MongoClusterProperties](#mongoclusterproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DocumentDB/mongoClusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/mongoClusters/firewallRules@2025-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 80, pattern: "^[a-zA-Z0-9][-_.a-zA-Z0-9]*"} (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallRuleProperties](#firewallruleproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DocumentDB/mongoClusters/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/mongoClusters/privateEndpointConnections@2025-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DocumentDB/mongoClusters/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/mongoClusters/users@2025-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-zA-Z0-9\-]*"} (Required, DeployTimeConstant): The resource name
* **properties**: [UserProperties](#userproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DocumentDB/mongoClusters/users' (ReadOnly, DeployTimeConstant): The resource type

## Function listConnectionStrings (Microsoft.DocumentDB/mongoClusters@2025-07-01-preview)
* **Resource**: Microsoft.DocumentDB/mongoClusters
* **ApiVersion**: 2025-07-01-preview
* **Output**: [ListConnectionStringsResult](#listconnectionstringsresult)

## AdministratorProperties
### Properties
* **password**: string {sensitive} (WriteOnly): The administrator password.
* **userName**: string: The administrator user name.

## AuthConfigProperties
### Properties
* **allowedModes**: ('MicrosoftEntraID' | 'NativeAuth' | string)[]: Allowed authentication modes for data access on the cluster.

## BackupProperties
### Properties
* **earliestRestoreTime**: string (ReadOnly): Earliest restore timestamp in UTC ISO8601 format.

## ComputeProperties
### Properties
* **tier**: string: The compute tier to assign to the cluster, where each tier maps to a virtual-core and memory size. Example values: 'M30', 'M40'.

## ConnectionString
### Properties
* **connectionString**: string (ReadOnly): Value of the connection string
* **description**: string (ReadOnly): Description of the connection string
* **name**: string (ReadOnly): Name of the connection string.

## CustomerManagedKeyEncryptionProperties
### Properties
* **keyEncryptionKeyIdentity**: [KeyEncryptionKeyIdentity](#keyencryptionkeyidentity) (Required): The identity used to access the key encryption key.
* **keyEncryptionKeyUrl**: string (Required): The URI of the key vault key used for encryption.

## DataApiProperties
### Properties
* **mode**: 'Disabled' | 'Enabled' | string: The mode to indicate whether the Mongo Data API is enabled for a cluster.

## DatabaseRole
### Properties
* **db**: string (Required): Database scope that the role is assigned to.
* **role**: 'root' | string (Required): The role that is assigned to the user on the database scope.

## EncryptionProperties
### Properties
* **customerManagedKeyEncryption**: [CustomerManagedKeyEncryptionProperties](#customermanagedkeyencryptionproperties): Customer managed key encryption settings.

## EntraIdentityProviderProperties
### Properties
* **principalType**: 'servicePrincipal' | 'user' | string (Required): The principal type of the user.

## FirewallRuleProperties
### Properties
* **endIpAddress**: string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"} (Required): The end IP address of the mongo cluster firewall rule. Must be IPv4 format.
* **provisioningState**: 'Canceled' | 'Dropping' | 'Failed' | 'InProgress' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the firewall rule.
* **startIpAddress**: string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"} (Required): The start IP address of the mongo cluster firewall rule. Must be IPv4 format.

## HighAvailabilityProperties
### Properties
* **targetMode**: 'Disabled' | 'SameZone' | 'ZoneRedundantPreferred' | string: The target high availability mode requested for the cluster.

## IdentityProvider
* **Discriminator**: type

### Base Properties

### EntraIdentityProvider
#### Properties
* **properties**: [EntraIdentityProviderProperties](#entraidentityproviderproperties) (Required): The Entra identity properties for the user.
* **type**: 'MicrosoftEntraID' (Required): The type of identity provider that the user belongs to.


## KeyEncryptionKeyIdentity
### Properties
* **identityType**: 'UserAssignedIdentity' | string (Required): The type of identity. Only 'UserAssignedIdentity' is supported.
* **userAssignedIdentityResourceId**: string (Required): The user assigned identity resource id.

## ListConnectionStringsResult
### Properties
* **connectionStrings**: [ConnectionString](#connectionstring)[] (ReadOnly): An array that contains the connection strings for a mongo cluster.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## MongoClusterProperties
### Properties
* **administrator**: [AdministratorProperties](#administratorproperties): The local administrator properties for the mongo cluster.
* **authConfig**: [AuthConfigProperties](#authconfigproperties): The authentication configuration for the cluster.
* **backup**: [BackupProperties](#backupproperties): The backup properties of the mongo cluster.
* **clusterStatus**: 'Dropping' | 'Provisioning' | 'Ready' | 'Starting' | 'Stopped' | 'Stopping' | 'Updating' | string (ReadOnly): The status of the mongo cluster.
* **compute**: [ComputeProperties](#computeproperties): The compute properties of the mongo cluster.
* **connectionString**: string (ReadOnly): The default mongo connection string for the cluster.
* **createMode**: 'Default' | 'GeoReplica' | 'PointInTimeRestore' | 'Replica' | string: The mode to create a mongo cluster.
* **dataApi**: [DataApiProperties](#dataapiproperties): The Data API properties of the mongo cluster.
* **encryption**: [EncryptionProperties](#encryptionproperties): The encryption configuration for the cluster. Depends on identity being configured.
* **highAvailability**: [HighAvailabilityProperties](#highavailabilityproperties): The high availability properties of the mongo cluster.
* **infrastructureVersion**: string (ReadOnly): The infrastructure version the cluster is provisioned on.
* **previewFeatures**: ('GeoReplicas' | string)[]: List of private endpoint connections.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connections.
* **provisioningState**: 'Canceled' | 'Dropping' | 'Failed' | 'InProgress' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the mongo cluster.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Whether or not public endpoint access is allowed for this mongo cluster.
* **replica**: [ReplicationProperties](#replicationproperties) (ReadOnly): The replication properties for the mongo cluster
* **replicaParameters**: [MongoClusterReplicaParameters](#mongoclusterreplicaparameters): The parameters to create a replica mongo cluster.
* **restoreParameters**: [MongoClusterRestoreParameters](#mongoclusterrestoreparameters): The parameters to create a point-in-time restore mongo cluster.
* **serverVersion**: string: The Mongo DB server version. Defaults to the latest available version if not specified.
* **sharding**: [ShardingProperties](#shardingproperties): The sharding properties of the mongo cluster.
* **storage**: [StorageProperties](#storageproperties): The storage properties of the mongo cluster.

## MongoClusterReplicaParameters
### Properties
* **sourceLocation**: string (Required): The location of the source cluster
* **sourceResourceId**: string (Required): The id of the replication source cluster.

## MongoClusterRestoreParameters
### Properties
* **pointInTimeUTC**: string: UTC point in time to restore a mongo cluster
* **sourceResourceId**: string: Resource ID to locate the source cluster to restore

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for private endpoint.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): The group ids for the private endpoint resource.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The private endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## ReplicationProperties
### Properties
* **replicationState**: 'Active' | 'Broken' | 'Catchup' | 'Provisioning' | 'Reconfiguring' | 'Updating' | string (ReadOnly): The replication link state of the replica cluster.
* **role**: 'AsyncReplica' | 'GeoAsyncReplica' | 'Primary' | string (ReadOnly): The replication role of the cluster
* **sourceResourceId**: string (ReadOnly): The resource id the source cluster for the replica cluster.

## ShardingProperties
### Properties
* **shardCount**: int: Number of shards to provision on the cluster.

## StorageProperties
### Properties
* **iops**: int: The IOPs of the storage assigned to each server. Only applicable if the type is 'PremiumSSDv2'.
* **sizeGb**: int: The size of the data disk assigned to each server.
* **throughput**: int: The throughput of the storage assigned to each server. Only applicable if the type is 'PremiumSSDv2'.
* **type**: 'PremiumSSD' | 'PremiumSSDv2' | string: The type of storage to provision the cluster servers with.

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

## UserProperties
### Properties
* **identityProvider**: [IdentityProvider](#identityprovider): The user's identity provider definition.
* **provisioningState**: 'Canceled' | 'Dropping' | 'Failed' | 'InProgress' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the user.
* **roles**: [DatabaseRole](#databaserole)[]: Database roles that are assigned to the user.

