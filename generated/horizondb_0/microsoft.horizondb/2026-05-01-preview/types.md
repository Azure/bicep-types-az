# Microsoft.HorizonDb @ 2026-05-01-preview

## Resource Microsoft.HorizonDb/clusters@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-zA-Z0-9][-a-zA-Z0-9]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HorizonDbClusterProperties](#horizondbclusterproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HorizonDb/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/clusters/administrators@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HorizonDbAdministratorPropertiesForAddOrHorizonDbAdministratorProperties](#horizondbadministratorpropertiesforaddorhorizondbadministratorproperties) (Required): The properties for adding a HorizonDB administrator.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HorizonDb/clusters/administrators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/clusters/pools@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-zA-Z0-9][-a-zA-Z0-9]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HorizonDbPoolProperties](#horizondbpoolproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [HorizonDbPoolTags](#horizondbpooltags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.HorizonDb/clusters/pools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/clusters/pools/firewallRules@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 128, pattern: "^[a-zA-Z0-9][-a-zA-Z0-9]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HorizonDbFirewallRuleProperties](#horizondbfirewallruleproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HorizonDb/clusters/pools/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/clusters/pools/replicas@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-zA-Z0-9][-a-zA-Z0-9]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HorizonDbReplicaProperties](#horizondbreplicaproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HorizonDb/clusters/pools/replicas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/clusters/privateEndpointConnections@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HorizonDb/clusters/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/clusters/privateLinkResources@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 128, pattern: "^.*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HorizonDb/clusters/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/parameterGroups@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-zA-Z0-9][-a-zA-Z0-9]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HorizonDbParameterGroupProperties](#horizondbparametergroupproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HorizonDb/parameterGroups' (ReadOnly, DeployTimeConstant): The resource type

## Function restart (Microsoft.HorizonDb/clusters@2026-05-01-preview)
* **Resource**: Microsoft.HorizonDb/clusters
* **ApiVersion**: 2026-05-01-preview
* **Output**: [HorizonDbCluster](#horizondbcluster)

## Function start (Microsoft.HorizonDb/clusters@2026-05-01-preview)
* **Resource**: Microsoft.HorizonDb/clusters
* **ApiVersion**: 2026-05-01-preview
* **Output**: [HorizonDbCluster](#horizondbcluster)

## Function stop (Microsoft.HorizonDb/clusters@2026-05-01-preview)
* **Resource**: Microsoft.HorizonDb/clusters
* **ApiVersion**: 2026-05-01-preview
* **Output**: [HorizonDbCluster](#horizondbcluster)

## HorizonDbAdministratorPropertiesForAddOrHorizonDbAdministratorProperties
### Properties
* **objectId**: string (ReadOnly): The Entra ID object identifier of the principal (an RFC 4122 GUID). On PUT requests, this value comes from the URI path parameter.
* **principalName**: string {maxLength: 256} (Required): The display name or UPN of the Entra ID principal. For users, typically the User Principal Name (e.g., admin@contoso.com). For groups, the group display name. For service principals, the application display name.
* **principalType**: 'Group' | 'ServicePrincipal' | 'Unknown' | 'User' | string (Required): The type of the Entra ID principal.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the administrator.
* **tenantId**: string: The Entra ID tenant identifier (an RFC 4122 GUID). If omitted, defaults to the tenant of the subscription.

## HorizonDbCluster
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (ReadOnly): The name of the resource
* **properties**: [HorizonDbClusterProperties](#horizondbclusterproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## HorizonDbClusterAuthConfig
### Properties
* **entraIdAuth**: 'Disabled' | 'Enabled' | string: Indicates whether Microsoft Entra ID authentication is enabled or disabled.
* **passwordAuth**: 'Disabled' | 'Enabled' | string: Indicates whether password authentication is enabled or disabled.
* **tenantId**: string: The Microsoft Entra tenant ID.

## HorizonDbClusterMirroring
### Properties
* **databaseNames**: string[]: The names of the databases to mirror.
* **userAssignedIdentityId**: string: The resource ID of the user-assigned managed identity used for mirroring.

## HorizonDbClusterParameterGroupConnectionProperties
### Properties
* **applyImmediately**: bool: Indicates whether the parameters should be applied immediately.
* **id**: string: The resource ID of the connected parameter group.
* **syncStatus**: string (ReadOnly): Indication of if parameter group is applied on HorizonDB resource.

## HorizonDbClusterProperties
### Properties
* **administratorLogin**: string {minLength: 1, maxLength: 63} (Required): The administrator login name.
* **administratorLoginPassword**: string {sensitive, minLength: 8, maxLength: 128} (WriteOnly): The administrator login password.
* **authConfig**: [HorizonDbClusterAuthConfig](#horizondbclusterauthconfig): Authentication configuration for the HorizonDB cluster.
* **computeModel**: [HorizonDbComputeModel](#horizondbcomputemodel): The compute model for the cluster.
* **createMode**: 'Create' | 'PointInTimeRestore' | 'Update' | string: The mode to create a new HorizonDB cluster.
* **fullyQualifiedDomainName**: string (ReadOnly): The fully qualified domain name of the cluster.
* **mirroring**: [HorizonDbClusterMirroring](#horizondbclustermirroring): Mirroring configuration for the HorizonDB cluster.
* **network**: [Network](#network): The network related info.
* **parameterGroup**: [HorizonDbClusterParameterGroupConnectionProperties](#horizondbclusterparametergroupconnectionproperties): Defines connection to a parameter group.
* **pointInTimeUTC**: string: Restore point creation time specifying the time to restore from.
* **poolName**: string: The pool name for restore or replica operations.
* **processorType**: string: The processor type for the HorizonDB cluster.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the cluster.
* **readonlyEndpoint**: string (ReadOnly): The fully qualified domain name used for readonly endpoint for the cluster.
* **replicaCount**: int {minValue: 1}: Number of replicas.
* **sourceClusterResourceId**: string: The source cluster resource ID for restore or replica creation.
* **state**: 'Disabled' | 'Dropping' | 'Healthy' | 'Ready' | 'Starting' | 'Stopped' | 'Stopping' | 'Succeeded' | 'Updating' | 'Upgrading' | string (ReadOnly): Current state of the cluster.
* **vCores**: int {minValue: 1, maxValue: 96}: Number of vCores.
* **version**: string: The version of the HorizonDB cluster.
* **zonePlacementPolicy**: 'BestEffort' | 'Strict' | string: Defines how replicas are placed across availability zones.

## HorizonDbComputeModel
### Properties
* **maxvCores**: int: The maximum vCores for Serverless compute. Defines the upper autoscaling bound.
* **minvCores**: int: The minimum vCores for Serverless compute. Defines the lower autoscaling bound.
* **type**: 'Provisioned' | 'Serverless' | string: The compute model type. Supported values: 'Provisioned', 'Serverless'.
* **vCores**: int: The fixed vCore count for Provisioned compute.

## HorizonDbFirewallRuleProperties
### Properties
* **description**: string: The description of the HorizonDB firewall rule.
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
* **location**: string: The location of the HorizonDB pool.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the pool.
* **replicaCount**: int (ReadOnly): Number of replicas in the pool.
* **state**: 'Disabled' | 'Dropping' | 'Healthy' | 'Ready' | 'Starting' | 'Stopped' | 'Stopping' | 'Succeeded' | 'Updating' | 'Upgrading' | string (ReadOnly): Current state of the pool.
* **version**: string (ReadOnly): The version of the HorizonDB pool.

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
* **status**: 'Disabled' | 'Dropping' | 'Healthy' | 'Ready' | 'Starting' | 'Stopped' | 'Stopping' | 'Succeeded' | 'Updating' | 'Upgrading' | string (ReadOnly): Current status of the replica.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## ManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

