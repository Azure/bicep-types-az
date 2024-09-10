# Microsoft.DocumentDB @ 2024-06-01-preview

## Resource Microsoft.DocumentDB/mongoClusters@2024-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 40, pattern: "^[a-z0-9]+(-[a-z0-9]+)*"} (Required, DeployTimeConstant): The resource name
* **properties**: [MongoClusterProperties](#mongoclusterproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DocumentDB/mongoClusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/mongoClusters/firewallRules@2024-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 80, pattern: "^[a-zA-Z0-9][-_.a-zA-Z0-9]*"} (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallRuleProperties](#firewallruleproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DocumentDB/mongoClusters/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DocumentDB/mongoClusters/privateEndpointConnections@2024-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DocumentDB/mongoClusters/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Function listConnectionStrings (Microsoft.DocumentDB/mongoClusters@2024-06-01-preview)
* **Resource**: Microsoft.DocumentDB/mongoClusters
* **ApiVersion**: 2024-06-01-preview
* **Output**: [ListConnectionStringsResult](#listconnectionstringsresult)

## ConnectionString
### Properties
* **connectionString**: string (ReadOnly): Value of the connection string
* **description**: string (ReadOnly): Description of the connection string

## FirewallRuleProperties
### Properties
* **endIpAddress**: string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"} (Required): The end IP address of the mongo cluster firewall rule. Must be IPv4 format.
* **provisioningState**: 'Canceled' | 'Dropping' | 'Failed' | 'InProgress' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the firewall rule.
* **startIpAddress**: string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"} (Required): The start IP address of the mongo cluster firewall rule. Must be IPv4 format.

## ListConnectionStringsResult
### Properties
* **connectionStrings**: [ConnectionString](#connectionstring)[] (ReadOnly): An array that contains the connection strings for a mongo cluster.

## MongoClusterProperties
### Properties
* **administratorLogin**: string: The administrator's login for the mongo cluster.
* **administratorLoginPassword**: string {sensitive} (WriteOnly): The password of the administrator login.
* **clusterStatus**: 'Dropping' | 'Provisioning' | 'Ready' | 'Starting' | 'Stopped' | 'Stopping' | 'Updating' | string (ReadOnly): The status of the mongo cluster.
* **connectionString**: string (ReadOnly): The default mongo connection string for the cluster.
* **createMode**: 'Default' | 'GeoReplica' | 'PointInTimeRestore' | 'Replica' | string (WriteOnly): The mode to create a mongo cluster.
* **earliestRestoreTime**: string (ReadOnly): Earliest restore timestamp in UTC ISO8601 format.
* **infrastructureVersion**: string (ReadOnly): The infrastructure version the cluster is provisioned on.
* **nodeGroupSpecs**: [NodeGroupSpec](#nodegroupspec)[]: The list of node group specs in the cluster.
* **previewFeatures**: ('GeoReplicas' | string)[]: List of private endpoint connections.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connections.
* **provisioningState**: 'Canceled' | 'Dropping' | 'Failed' | 'InProgress' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the mongo cluster.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Whether or not public endpoint access is allowed for this mongo cluster.
* **replica**: [ReplicationProperties](#replicationproperties) (ReadOnly): The replication properties for the mongo cluster
* **replicaParameters**: [MongoClusterReplicaParameters](#mongoclusterreplicaparameters) (WriteOnly): The parameters to create a replica mongo cluster.
* **restoreParameters**: [MongoClusterRestoreParameters](#mongoclusterrestoreparameters) (WriteOnly): The parameters to create a point-in-time restore mongo cluster.
* **serverVersion**: string: The Mongo DB server version. Defaults to the latest available version if not specified.

## MongoClusterReplicaParameters
### Properties
* **sourceLocation**: string (Required): The location of the source cluster
* **sourceResourceId**: string (Required): The id of the replication source cluster.

## MongoClusterRestoreParameters
### Properties
* **pointInTimeUTC**: string: UTC point in time to restore a mongo cluster
* **sourceResourceId**: string: Resource ID to locate the source cluster to restore

## NodeGroupSpec
### Properties
* **diskSizeGB**: int: The disk storage size for the node group in GB. Example values: 128, 256, 512, 1024.
* **enableHa**: bool: Whether high availability is enabled on the node group.
* **kind**: 'Shard' | string: The node type deployed in the node group.
* **nodeCount**: int: The number of nodes in the node group.
* **sku**: string: The resource sku for the node group. This defines the size of CPU and memory that is provisioned for each node. Example values: 'M30', 'M40'.

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

