# Microsoft.HorizonDb @ 2026-01-20-preview

## Resource Microsoft.HorizonDb/clusters@2026-01-20-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-01-20-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-zA-Z0-9][-a-zA-Z0-9]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HorizonDbClusterProperties](#horizondbclusterproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HorizonDb/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/clusters/pools@2026-01-20-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-01-20-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-zA-Z0-9][-a-zA-Z0-9]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HorizonDbPoolProperties](#horizondbpoolproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [HorizonDbPoolTags](#horizondbpooltags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.HorizonDb/clusters/pools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/clusters/pools/firewallRules@2026-01-20-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-01-20-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 128, pattern: "^[a-zA-Z0-9][-a-zA-Z0-9]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HorizonDbFirewallRuleProperties](#horizondbfirewallruleproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HorizonDb/clusters/pools/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/clusters/pools/replicas@2026-01-20-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-01-20-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-zA-Z0-9][-a-zA-Z0-9]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HorizonDbReplicaProperties](#horizondbreplicaproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HorizonDb/clusters/pools/replicas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/clusters/privateEndpointConnections@2026-01-20-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-01-20-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HorizonDb/clusters/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/clusters/privateLinkResources@2026-01-20-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-01-20-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 128, pattern: "^.*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HorizonDb/clusters/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/parameterGroups@2026-01-20-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-01-20-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-zA-Z0-9][-a-zA-Z0-9]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HorizonDbParameterGroupProperties](#horizondbparametergroupproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HorizonDb/parameterGroups' (ReadOnly, DeployTimeConstant): The resource type

## HorizonDbClusterParameterGroupConnectionProperties
### Properties
* **applyImmediately**: bool: Indicates whether the parameters should be applied immediately.
* **id**: string: The resource ID of the connected parameter group.
* **syncStatus**: string (ReadOnly): Indication of if parameter group is applied on HorizonDb resource.

## HorizonDbClusterProperties
### Properties
* **administratorLogin**: string {minLength: 1, maxLength: 63} (Required): The administrator login name.
* **administratorLoginPassword**: string {sensitive, minLength: 8, maxLength: 128} (WriteOnly): The administrator login password.
* **createMode**: 'Create' | 'PointInTimeRestore' | 'Update' | string: The mode to create a new HorizonDb cluster.
* **fullyQualifiedDomainName**: string (ReadOnly): The fully qualified domain name of the cluster.
* **network**: [Network](#network): The network related info.
* **parameterGroup**: [HorizonDbClusterParameterGroupConnectionProperties](#horizondbclusterparametergroupconnectionproperties): Defines connection to a parameter group.
* **pointInTimeUTC**: string: Restore point creation time specifying the time to restore from.
* **poolName**: string: The pool name for restore or replica operations.
* **processorType**: string: The processor type for the HorizonDb cluster.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the cluster.
* **readonlyEndpoint**: string (ReadOnly): The fully qualified domain name used for readonly endpoint for the cluster.
* **replicaCount**: int {minValue: 1}: Number of replicas.
* **sourceClusterResourceId**: string: The source cluster resource ID for restore or replica creation.
* **state**: 'Disabled' | 'Dropping' | 'Healthy' | 'Ready' | 'Starting' | 'Stopped' | 'Stopping' | 'Updating' | string (ReadOnly): Current state of the cluster.
* **vCores**: int {minValue: 1, maxValue: 96}: Number of vCores.
* **version**: string: The version of the HorizonDb cluster.
* **zonePlacementPolicy**: 'BestEffort' | 'Strict' | string: Defines how replicas are placed across availability zones.

## HorizonDbFirewallRuleProperties
### Properties
* **description**: string: The description of the HorizonDb firewall rule.
* **endIpAddress**: string (Required): The end IP address of the firewall rule (IPv4).
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the firewall rule.
* **startIpAddress**: string (Required): The start IP address of the firewall rule (IPv4).

## HorizonDbParameterGroupProperties
### Properties
* **applyImmediately**: bool: Indicates whether the parameters should be applied immediately.
* **description**: string: Description of the parameter group.
* **parameters**: [ParameterProperties](#parameterproperties)[]: Parameters in the parameter group.
* **pgVersion**: int: PostgreSQL version for the parameter group.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the parameter group.
* **version**: int (ReadOnly): Current version of the parameter group.

## HorizonDbPoolProperties
### Properties
* **createMode**: 'Create' | 'Update' | string (ReadOnly): The create mode for the pool.
* **location**: string: The location of the HorizonDb pool.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the pool.
* **replicaCount**: int (ReadOnly): Number of replicas in the pool.
* **state**: 'Disabled' | 'Dropping' | 'Healthy' | 'Ready' | 'Starting' | 'Stopped' | 'Stopping' | 'Updating' | string (ReadOnly): Current state of the pool.
* **version**: string (ReadOnly): The version of the HorizonDb pool.

## HorizonDbPoolTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HorizonDbReplicaProperties
### Properties
* **availabilityZone**: string: The availability zone of the replica.
* **fullyQualifiedDomainName**: string (ReadOnly): The fully qualified domain name of the replica.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the replica.
* **role**: 'Read' | 'ReadWrite' | string: Role of the replica.
* **status**: 'Disabled' | 'Dropping' | 'Healthy' | 'Ready' | 'Starting' | 'Stopped' | 'Stopping' | 'Updating' | string (ReadOnly): Current status of the replica.

## Network
### Properties
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string (ReadOnly): The flag indicating whether public ip is requested.

## ParameterProperties
### Properties
* **allowedValues**: string (ReadOnly): The allowed values for the parameter.
* **dataType**: string (ReadOnly): The data type of the parameter.
* **description**: string (ReadOnly): The description of the parameter.
* **documentationLink**: string (ReadOnly): Link to parameter documentation.
* **isDynamic**: bool (ReadOnly): Whether the parameter can be changed dynamically.
* **isReadOnly**: bool (ReadOnly): Whether the parameter is a read-only parameter.
* **name**: string: The name of the parameter.
* **unit**: string (ReadOnly): The unit of measurement for the parameter.
* **value**: string: The value of the configuration.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for private endpoint.

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): The group ids for the private endpoint resource.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The private endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.
* **requiredZoneNames**: string[]: The private link resource private link DNS zone name.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

