# Microsoft.DBforPostgreSQL @ 2023-03-02-preview

## Resource Microsoft.DBforPostgreSQL/serverGroupsv2@2023-03-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityProperties](#identityproperties): Describes the identity of the cluster.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 40, pattern: "^(?![0-9]+$)(?!-)[a-z0-9-]{3,40}(?<!-)$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): Properties of the cluster.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DBforPostgreSQL/serverGroupsv2' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/serverGroupsv2/configurations@2023-03-02-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProperties](#configurationproperties) (ReadOnly): The properties of configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/serverGroupsv2/configurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/serverGroupsv2/coordinatorConfigurations@2023-03-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ServerConfigurationProperties](#serverconfigurationproperties): The properties of a configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/serverGroupsv2/coordinatorConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/serverGroupsv2/firewallRules@2023-03-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallRuleProperties](#firewallruleproperties) (Required): The properties of a firewall rule.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/serverGroupsv2/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/serverGroupsv2/nodeConfigurations@2023-03-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ServerConfigurationProperties](#serverconfigurationproperties): The properties of a configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/serverGroupsv2/nodeConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/serverGroupsv2/privateEndpointConnections@2023-03-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/serverGroupsv2/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/serverGroupsv2/privateLinkResources@2023-03-02-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/serverGroupsv2/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/serverGroupsv2/roles@2023-03-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RoleProperties](#roleproperties) (Required): The properties of a role.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/serverGroupsv2/roles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/serverGroupsv2/servers@2023-03-02-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterServerProperties](#clusterserverproperties) (ReadOnly): The properties of a server in a cluster.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/serverGroupsv2/servers' (ReadOnly, DeployTimeConstant): The resource type

## AuthConfig
### Properties
* **activeDirectoryAuth**: 'disabled' | 'enabled' | string
* **passwordAuth**: 'disabled' | 'enabled' | string

## ClusterProperties
### Properties
* **aadAuthEnabled**: 'disabled' | 'enabled' | string (ReadOnly): Indicates whether the cluster was created using AAD authentication.
* **administratorLogin**: string (ReadOnly): The administrator's login name of the servers in the cluster.
* **administratorLoginPassword**: string {sensitive} (WriteOnly): The password of the administrator login. Required for creation.
* **authConfig**: [AuthConfig](#authconfig): Authentication configuration of a cluster.
* **citusVersion**: string: The Citus extension version on all cluster servers.
* **coordinatorEnablePublicIpAccess**: bool: If public access is enabled on coordinator.
* **coordinatorServerEdition**: string: The edition of a coordinator server (default: GeneralPurpose). Required for creation.
* **coordinatorStorageQuotaInMb**: int: The storage of a server in MB. Required for creation. See https://learn.microsoft.com/azure/cosmos-db/postgresql/resources-compute for more information.
* **coordinatorVCores**: int: The vCores count of a server (max: 96). Required for creation. See https://learn.microsoft.com/azure/cosmos-db/postgresql/resources-compute for more information.
* **databaseName**: string: The database name of the cluster. Only one database per cluster is supported.
* **dataEncryption**: [DataEncryption](#dataencryption): The data encryption properties of a cluster.
* **earliestRestoreTime**: string (ReadOnly): The earliest restore point time (ISO8601 format) for the cluster.
* **enableGeoBackup**: bool: If cluster backup is stored in another Azure region in addition to the copy of the backup stored in the cluster's region. Enabled only at the time of cluster creation.
* **enableHa**: bool: If high availability (HA) is enabled or not for the cluster.
* **enableShardsOnCoordinator**: bool: If distributed tables are placed on coordinator or not. Should be set to 'true' on single node clusters. Requires shard rebalancing after value is changed.
* **maintenanceWindow**: [MaintenanceWindow](#maintenancewindow): Maintenance window of a cluster.
* **nodeCount**: int: Worker node count of the cluster. When node count is 0, it represents a single node configuration with the ability to create distributed tables on that node. 2 or more worker nodes represent multi-node configuration. Node count value cannot be 1. Required for creation.
* **nodeEnablePublicIpAccess**: bool: If public access is enabled on worker nodes.
* **nodeServerEdition**: string: The edition of a node server (default: MemoryOptimized).
* **nodeStorageQuotaInMb**: int: The storage in MB on each worker node. See https://learn.microsoft.com/azure/cosmos-db/postgresql/resources-compute for more information.
* **nodeVCores**: int: The compute in vCores on each worker node (max: 104). See https://learn.microsoft.com/azure/cosmos-db/postgresql/resources-compute for more information.
* **passwordEnabled**: 'disabled' | 'enabled' | string (ReadOnly): Indicates whether the cluster was created with a password or using AAD authentication.
* **pointInTimeUTC**: string: Date and time in UTC (ISO8601 format) for cluster restore.
* **postgresqlVersion**: string: The major PostgreSQL version on all cluster servers.
* **preferredPrimaryZone**: string: Preferred primary availability zone (AZ) for all cluster servers.
* **privateEndpointConnections**: [SimplePrivateEndpointConnection](#simpleprivateendpointconnection)[] (ReadOnly): The private endpoint connections for a cluster.
* **provisioningState**: string (ReadOnly): Provisioning state of the cluster
* **readReplicas**: string[] (ReadOnly): The array of read replica clusters.
* **serverNames**: [ServerNameItem](#servernameitem)[] (ReadOnly): The list of server names in the cluster
* **sourceLocation**: string: The Azure region of source cluster for read replica clusters.
* **sourceResourceId**: string: The resource id of source cluster for read replica clusters.
* **state**: string (ReadOnly): A state of a cluster/server that is visible to user.

## ClusterServerProperties
### Properties
* **administratorLogin**: string (ReadOnly): The administrator's login name of the servers in the cluster.
* **availabilityZone**: string: Availability Zone information of the server.
* **citusVersion**: string: The Citus extension version of server.
* **enableHa**: bool: If high availability (HA) is enabled or not for the server.
* **enablePublicIpAccess**: bool (ReadOnly): If public access is enabled on server.
* **fullyQualifiedDomainName**: string (ReadOnly): The fully qualified domain name of a server.
* **haState**: string (ReadOnly): A state of HA feature for the cluster.
* **isReadOnly**: bool (ReadOnly): If server database is set to read-only by system maintenance depending on high disk space usage.
* **postgresqlVersion**: string: The major PostgreSQL version of server.
* **role**: 'Coordinator' | 'Worker' | string: The role of server in the cluster.
* **serverEdition**: string: The edition of a server.
* **state**: string (ReadOnly): A state of a cluster/server that is visible to user.
* **storageQuotaInMb**: int: The storage of a server in MB.
* **vCores**: int: The vCores count of a server.

## ConfigurationProperties
### Properties
* **allowedValues**: string (ReadOnly): Allowed values of the configuration.
* **dataType**: 'Boolean' | 'Enumeration' | 'Integer' | 'Numeric' | string (ReadOnly): Data type of the configuration.
* **description**: string (ReadOnly): Description of the configuration.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the configuration
* **requiresRestart**: bool: If configuration change requires restart.
* **serverRoleGroupConfigurations**: [ServerRoleGroupConfiguration](#serverrolegroupconfiguration)[] (Required): The list of server role group configuration values.

## DataEncryption
### Properties
* **primaryKeyUri**: string: URI for the key in keyvault for data encryption of the primary server.
* **primaryUserAssignedIdentityId**: string: Resource Id for the User assigned identity to be used for data encryption of the primary server.
* **type**: 'AzureKeyVault' | 'SystemAssigned' | string

## FirewallRuleProperties
### Properties
* **endIpAddress**: string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"} (Required): The end IP address of the cluster firewall rule. Must be IPv4 format.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the firewall rule.
* **startIpAddress**: string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"} (Required): The start IP address of the cluster firewall rule. Must be IPv4 format.

## IdentityProperties
### Properties
* **type**: 'SystemAssigned' | 'UserAssigned' | string
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## MaintenanceWindow
### Properties
* **customWindow**: string: Indicates whether custom maintenance window is enabled or not.
* **dayOfWeek**: int: Preferred day of the week for maintenance window.
* **startHour**: int: Start hour within preferred day of the week for maintenance window.
* **startMinute**: int: Start minute within the start hour for maintenance window.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for private endpoint.

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): The group ids for the private endpoint resource.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The private endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateEndpointConnectionSimpleProperties
### Properties
* **groupIds**: string[]: Group ids of the private endpoint connection.
* **privateEndpoint**: [PrivateEndpointProperty](#privateendpointproperty): Private endpoint which the connection belongs to.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): A collection of information about the state of the connection between service consumer and provider.

## PrivateEndpointProperty
### Properties
* **id**: string: Resource id of the private endpoint.

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

## RoleProperties
### Properties
* **externalIdentity**: [RolePropertiesExternalIdentity](#rolepropertiesexternalidentity)
* **password**: string {sensitive} (WriteOnly): The password of the cluster role. If an identity is used, password will not be required.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the role
* **roleType**: 'admin' | 'user' | string

## RolePropertiesExternalIdentity
### Properties
* **objectId**: string (Required)
* **principalType**: 'group' | 'servicePrincipal' | 'user' | string (Required)
* **tenantId**: string

## ServerConfigurationProperties
### Properties
* **allowedValues**: string (ReadOnly): Allowed values of the configuration.
* **dataType**: 'Boolean' | 'Enumeration' | 'Integer' | 'Numeric' | string (ReadOnly): Data type of the configuration.
* **defaultValue**: string (ReadOnly): Default value of the configuration.
* **description**: string (ReadOnly): Description of the configuration.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the configuration.
* **requiresRestart**: bool (ReadOnly): If configuration change requires restart.
* **source**: string (ReadOnly): Source of the configuration.
* **value**: string (Required): Value of the configuration.

## ServerNameItem
### Properties
* **fullyQualifiedDomainName**: string (ReadOnly): The fully qualified domain name of a server.
* **name**: string: The name of a server.

## ServerRoleGroupConfiguration
### Properties
* **defaultValue**: string (ReadOnly): Default value of the configuration.
* **role**: 'Coordinator' | 'Worker' | string (Required): The role of servers in the server role group.
* **source**: string (ReadOnly): Source of the configuration.
* **value**: string (Required): Value of the configuration.

## SimplePrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionSimpleProperties](#privateendpointconnectionsimpleproperties): Properties of the private endpoint connection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

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

