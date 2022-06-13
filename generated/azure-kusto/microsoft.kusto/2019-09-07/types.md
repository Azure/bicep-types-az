# Microsoft.Kusto @ 2019-09-07

## Resource Microsoft.Kusto/clusters@2019-09-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-09-07' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the cluster, if configured.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): The cluster properties.
* **sku**: [AzureSku](#azuresku) (Required): The SKU of the cluster.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Kusto/clusters' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: The availability zones of the cluster.

## Resource Microsoft.Kusto/clusters/attachedDatabaseConfigurations@2019-09-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-09-07' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AttachedDatabaseConfigurationProperties](#attacheddatabaseconfigurationproperties): The properties of the attached database configuration.
* **type**: 'Microsoft.Kusto/clusters/attachedDatabaseConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Kusto/clusters/databases@2019-09-07
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2019-09-07' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Kusto/clusters/databases' (ReadOnly, DeployTimeConstant): The resource type
### ReadOnlyFollowingDatabase
#### Properties
* **kind**: 'ReadOnlyFollowing' (Required): Kind of the database
* **properties**: [ReadOnlyFollowingDatabaseProperties](#readonlyfollowingdatabaseproperties): The database properties.

### ReadWriteDatabase
#### Properties
* **kind**: 'ReadWrite' (Required): Kind of the database
* **properties**: [ReadWriteDatabaseProperties](#readwritedatabaseproperties): The database properties.


## Resource Microsoft.Kusto/clusters/databases/dataConnections@2019-09-07
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2019-09-07' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Kusto/clusters/databases/dataConnections' (ReadOnly, DeployTimeConstant): The resource type
### EventGridDataConnection
#### Properties
* **kind**: 'EventGrid' (Required): Kind of the endpoint for the data connection
* **properties**: [EventGridConnectionProperties](#eventgridconnectionproperties): The properties of the Event Grid data connection.

### EventHubDataConnection
#### Properties
* **kind**: 'EventHub' (Required): Kind of the endpoint for the data connection
* **properties**: [EventHubConnectionProperties](#eventhubconnectionproperties): The Event Hub data connection properties to validate.

### IotHubDataConnection
#### Properties
* **kind**: 'IotHub' (Required): Kind of the endpoint for the data connection
* **properties**: [IotHubConnectionProperties](#iothubconnectionproperties): The Iot Hub data connection properties.


## Function listFollowerDatabases (Microsoft.Kusto/clusters@2019-09-07)
* **Resource**: Microsoft.Kusto/clusters
* **ApiVersion**: 2019-09-07
* **Output**: [FollowerDatabaseListResult](#followerdatabaselistresult)

## Function listPrincipals (Microsoft.Kusto/clusters/databases@2019-09-07)
* **Resource**: Microsoft.Kusto/clusters/databases
* **ApiVersion**: 2019-09-07
* **Output**: [DatabasePrincipalListResult](#databaseprincipallistresult)

## AttachedDatabaseConfigurationProperties
### Properties
* **attachedDatabaseNames**: string[] (ReadOnly): The list of databases from the clusterResourceId which are currently attached to the cluster.
* **clusterResourceId**: string (Required): The resource id of the cluster where the databases you would like to attach reside.
* **databaseName**: string (Required): The name of the database which you would like to attach, use * if you want to follow all current and future databases.
* **defaultPrincipalsModificationKind**: 'None' | 'Replace' | 'Union' | string (Required): The default principals modification kind
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioned state of the resource.

## AzureSku
### Properties
* **capacity**: int: The number of instances of the cluster.
* **name**: 'Dev(No SLA)_Standard_D11_v2' | 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_D13_v2' | 'Standard_D14_v2' | 'Standard_DS13_v2+1TB_PS' | 'Standard_DS13_v2+2TB_PS' | 'Standard_DS14_v2+3TB_PS' | 'Standard_DS14_v2+4TB_PS' | 'Standard_L16s' | 'Standard_L4s' | 'Standard_L8s' | string (Required): SKU name.
* **tier**: 'Basic' | 'Standard' | string (Required): SKU tier.

## ClusterProperties
### Properties
* **dataIngestionUri**: string (ReadOnly): The cluster data ingestion URI.
* **enableDiskEncryption**: bool: A boolean value that indicates if the cluster's disks are encrypted.
* **enableStreamingIngest**: bool: A boolean value that indicates if the streaming ingest is enabled.
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): KeyVault properties for the cluster encryption.
* **optimizedAutoscale**: [OptimizedAutoscale](#optimizedautoscale): Optimized auto scale definition.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioned state of the resource.
* **state**: 'Creating' | 'Deleted' | 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | 'Unavailable' | 'Updating' | string (ReadOnly): The state of the resource.
* **trustedExternalTenants**: [TrustedExternalTenant](#trustedexternaltenant)[]: The cluster's external tenants.
* **uri**: string (ReadOnly): The cluster URI.
* **virtualNetworkConfiguration**: [VirtualNetworkConfiguration](#virtualnetworkconfiguration): Virtual network definition.

## ComponentsSgqdofSchemasIdentityPropertiesUserassignedidentitiesAdditionalproperties
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## DatabasePrincipal
### Properties
* **appId**: string (ReadOnly): Application id - relevant only for application principal type.
* **email**: string (ReadOnly): Database principal email if exists.
* **fqn**: string (ReadOnly): Database principal fully qualified name.
* **name**: string (ReadOnly): Database principal name.
* **role**: 'Admin' | 'Ingestor' | 'Monitor' | 'UnrestrictedViewers' | 'User' | 'Viewer' | string (ReadOnly): Database principal role.
* **tenantName**: string (ReadOnly): The tenant name of the principal
* **type**: 'App' | 'Group' | 'User' | string (ReadOnly): Database principal type.

## DatabasePrincipalListResult
### Properties
* **value**: [DatabasePrincipal](#databaseprincipal)[] (ReadOnly): The list of Kusto database principals.

## DatabaseStatistics
### Properties
* **size**: int: The database size - the total size of compressed data and index in bytes.

## EventGridConnectionProperties
### Properties
* **consumerGroup**: string (Required): The event hub consumer group.
* **dataFormat**: 'AVRO' | 'CSV' | 'JSON' | 'MULTIJSON' | 'PSV' | 'RAW' | 'SCSV' | 'SINGLEJSON' | 'SOHSV' | 'TSV' | 'TSVE' | 'TXT' | string (Required): The data format of the message. Optionally the data format can be added to each message.
* **eventHubResourceId**: string (Required): The resource ID where the event grid is configured to send events.
* **mappingRuleName**: string: The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
* **storageAccountResourceId**: string (Required): The resource ID of the storage account where the data resides.
* **tableName**: string (Required): The table where the data should be ingested. Optionally the table information can be added to each message.

## EventHubConnectionProperties
### Properties
* **consumerGroup**: string (Required): The event hub consumer group.
* **dataFormat**: 'AVRO' | 'CSV' | 'JSON' | 'MULTIJSON' | 'PSV' | 'RAW' | 'SCSV' | 'SINGLEJSON' | 'SOHSV' | 'TSV' | 'TSVE' | 'TXT' | string: The data format of the message. Optionally the data format can be added to each message.
* **eventHubResourceId**: string (Required): The resource ID of the event hub to be used to create a data connection.
* **eventSystemProperties**: string[]: System properties of the event hub
* **mappingRuleName**: string: The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
* **tableName**: string: The table where the data should be ingested. Optionally the table information can be added to each message.

## FollowerDatabaseDefinition
### Properties
* **attachedDatabaseConfigurationName**: string (ReadOnly): Resource name of the attached database configuration in the follower cluster.
* **clusterResourceId**: string (ReadOnly): Resource id of the cluster that follows a database owned by this cluster.
* **databaseName**: string (ReadOnly): The database name owned by this cluster that was followed. * in case following all databases.

## FollowerDatabaseListResult
### Properties
* **value**: [FollowerDatabaseDefinition](#followerdatabasedefinition)[] (ReadOnly): The list of follower database result.

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' (Required): The identity type.
* **userAssignedIdentities**: [IdentityUserAssignedIdentities](#identityuserassignedidentities): The list of user identities associated with the Kusto cluster. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## IdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [ComponentsSgqdofSchemasIdentityPropertiesUserassignedidentitiesAdditionalproperties](#componentssgqdofschemasidentitypropertiesuserassignedidentitiesadditionalproperties)

## IotHubConnectionProperties
### Properties
* **consumerGroup**: string (Required): The iot hub consumer group.
* **dataFormat**: 'AVRO' | 'CSV' | 'JSON' | 'MULTIJSON' | 'PSV' | 'RAW' | 'SCSV' | 'SINGLEJSON' | 'SOHSV' | 'TSV' | 'TSVE' | 'TXT' | string: The data format of the message. Optionally the data format can be added to each message.
* **eventSystemProperties**: string[]: System properties of the iot hub
* **iotHubResourceId**: string (Required): The resource ID of the Iot hub to be used to create a data connection.
* **mappingRuleName**: string: The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
* **sharedAccessPolicyName**: string (Required): The name of the share access policy name
* **tableName**: string: The table where the data should be ingested. Optionally the table information can be added to each message.

## KeyVaultProperties
### Properties
* **keyName**: string (Required): The name of the key vault key.
* **keyVaultUri**: string (Required): The Uri of the key vault.
* **keyVersion**: string (Required): The version of the key vault key.

## OptimizedAutoscale
### Properties
* **isEnabled**: bool (Required): A boolean value that indicate if the optimized autoscale feature is enabled or not.
* **maximum**: int (Required): Maximum allowed instances count.
* **minimum**: int (Required): Minimum allowed instances count.
* **version**: int (Required): The version of the template defined, for instance 1.

## ReadOnlyFollowingDatabaseProperties
### Properties
* **attachedDatabaseConfigurationName**: string (ReadOnly): The name of the attached database configuration cluster
* **hotCachePeriod**: string: The time the data should be kept in cache for fast queries in TimeSpan.
* **leaderClusterResourceId**: string (ReadOnly): The name of the leader cluster
* **principalsModificationKind**: 'None' | 'Replace' | 'Union' | string (ReadOnly): The principals modification kind of the database
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioned state of the resource.
* **softDeletePeriod**: string (ReadOnly): The time the data should be kept before it stops being accessible to queries in TimeSpan.
* **statistics**: [DatabaseStatistics](#databasestatistics) (ReadOnly): The statistics of the database.

## ReadWriteDatabaseProperties
### Properties
* **hotCachePeriod**: string: The time the data should be kept in cache for fast queries in TimeSpan.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioned state of the resource.
* **softDeletePeriod**: string: The time the data should be kept before it stops being accessible to queries in TimeSpan.
* **statistics**: [DatabaseStatistics](#databasestatistics) (ReadOnly): The statistics of the database.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrustedExternalTenant
### Properties
* **value**: string: GUID representing an external tenant.

## VirtualNetworkConfiguration
### Properties
* **dataManagementPublicIpId**: string (Required): Data management's service public IP address resource id.
* **enginePublicIpId**: string (Required): Engine service's public IP address resource id.
* **subnetId**: string (Required): The subnet resource id.

