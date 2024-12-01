# Microsoft.Kusto @ 2024-04-13

## Resource Microsoft.Kusto/clusters@2024-04-13
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-13' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the cluster, if configured.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^.*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): The cluster properties.
* **sku**: [AzureSku](#azuresku) (Required): The SKU of the cluster.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Kusto/clusters' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: The availability zones of the cluster.

## Resource Microsoft.Kusto/clusters/attachedDatabaseConfigurations@2024-04-13
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-13' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string {pattern: "^.*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AttachedDatabaseConfigurationProperties](#attacheddatabaseconfigurationproperties): The properties of the attached database configuration.
* **type**: 'Microsoft.Kusto/clusters/attachedDatabaseConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Kusto/clusters/databases@2024-04-13
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2024-04-13' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string {pattern: "^.*$"} (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Kusto/clusters/databases' (ReadOnly, DeployTimeConstant): The resource type

### ReadOnlyFollowingDatabase
#### Properties
* **kind**: 'ReadOnlyFollowing' (Required): Kind of the database
* **properties**: [ReadOnlyFollowingDatabaseProperties](#readonlyfollowingdatabaseproperties): The database properties.

### ReadWriteDatabase
#### Properties
* **kind**: 'ReadWrite' (Required): Kind of the database
* **properties**: [ReadWriteDatabaseProperties](#readwritedatabaseproperties): The database properties.


## Resource Microsoft.Kusto/clusters/databases/dataConnections@2024-04-13
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2024-04-13' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string {pattern: "^.*$"} (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Kusto/clusters/databases/dataConnections' (ReadOnly, DeployTimeConstant): The resource type

### CosmosDbDataConnection
#### Properties
* **kind**: 'CosmosDb' (Required): Kind of the endpoint for the data connection
* **properties**: [CosmosDbDataConnectionProperties](#cosmosdbdataconnectionproperties): The properties of the CosmosDb data connection.

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


## Resource Microsoft.Kusto/clusters/databases/principalAssignments@2024-04-13
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-13' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^.*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DatabasePrincipalProperties](#databaseprincipalproperties): The database principal.
* **type**: 'Microsoft.Kusto/clusters/databases/principalAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Kusto/clusters/databases/scripts@2024-04-13
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-13' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^.*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ScriptProperties](#scriptproperties): The database script.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Kusto/clusters/databases/scripts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Kusto/clusters/managedPrivateEndpoints@2024-04-13
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-13' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^.*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedPrivateEndpointProperties](#managedprivateendpointproperties): A managed private endpoint.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Kusto/clusters/managedPrivateEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Kusto/clusters/principalAssignments@2024-04-13
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-13' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^.*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterPrincipalProperties](#clusterprincipalproperties): The cluster principal.
* **type**: 'Microsoft.Kusto/clusters/principalAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Kusto/clusters/privateEndpointConnections@2024-04-13
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-13' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^.*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Kusto/clusters/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Kusto/clusters/privateLinkResources@2024-04-13 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-13' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^.*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Kusto/clusters/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Kusto/clusters/sandboxCustomImages@2024-04-13
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-13' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^.*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SandboxCustomImageProperties](#sandboxcustomimageproperties): A sandbox custom image.
* **type**: 'Microsoft.Kusto/clusters/sandboxCustomImages' (ReadOnly, DeployTimeConstant): The resource type

## Function listCalloutPolicies (Microsoft.Kusto/clusters@2024-04-13)
* **Resource**: Microsoft.Kusto/clusters
* **ApiVersion**: 2024-04-13
* **Output**: [CalloutPoliciesList](#calloutpolicieslist)

## Function listFollowerDatabases (Microsoft.Kusto/clusters@2024-04-13)
* **Resource**: Microsoft.Kusto/clusters
* **ApiVersion**: 2024-04-13
* **Output**: [FollowerDatabaseListResult](#followerdatabaselistresult)

## Function listLanguageExtensions (Microsoft.Kusto/clusters@2024-04-13)
* **Resource**: Microsoft.Kusto/clusters
* **ApiVersion**: 2024-04-13
* **Output**: [LanguageExtensionsList](#languageextensionslist)

## Function listPrincipals (Microsoft.Kusto/clusters/databases@2024-04-13)
* **Resource**: Microsoft.Kusto/clusters/databases
* **ApiVersion**: 2024-04-13
* **Output**: [DatabasePrincipalListResult](#databaseprincipallistresult)

## AcceptedAudiences
### Properties
* **value**: string: GUID or valid URL representing an accepted audience.

## AttachedDatabaseConfigurationProperties
### Properties
* **attachedDatabaseNames**: string[] (ReadOnly): The list of databases from the clusterResourceId which are currently attached to the cluster.
* **clusterResourceId**: string (Required): The resource id of the cluster where the databases you would like to attach reside.
* **databaseName**: string (Required): The name of the database which you would like to attach, use * if you want to follow all current and future databases.
* **databaseNameOverride**: string: Overrides the original database name. Relevant only when attaching to a specific database.
* **databaseNamePrefix**: string: Adds a prefix to the attached databases name. When following an entire cluster, that prefix would be added to all of the databases original names from leader cluster.
* **defaultPrincipalsModificationKind**: 'None' | 'Replace' | 'Union' | string (Required): The default principals modification kind
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioned state of the resource.
* **tableLevelSharingProperties**: [TableLevelSharingProperties](#tablelevelsharingproperties): Table level sharing specifications

## AzureSku
### Properties
* **capacity**: int: The number of instances of the cluster.
* **name**: 'Dev(No SLA)_Standard_D11_v2' | 'Dev(No SLA)_Standard_E2a_v4' | 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_D13_v2' | 'Standard_D14_v2' | 'Standard_D16d_v5' | 'Standard_D32d_v4' | 'Standard_D32d_v5' | 'Standard_DS13_v2+1TB_PS' | 'Standard_DS13_v2+2TB_PS' | 'Standard_DS14_v2+3TB_PS' | 'Standard_DS14_v2+4TB_PS' | 'Standard_E16a_v4' | 'Standard_E16ads_v5' | 'Standard_E16as_v4+3TB_PS' | 'Standard_E16as_v4+4TB_PS' | 'Standard_E16as_v5+3TB_PS' | 'Standard_E16as_v5+4TB_PS' | 'Standard_E16d_v4' | 'Standard_E16d_v5' | 'Standard_E16s_v4+3TB_PS' | 'Standard_E16s_v4+4TB_PS' | 'Standard_E16s_v5+3TB_PS' | 'Standard_E16s_v5+4TB_PS' | 'Standard_E2a_v4' | 'Standard_E2ads_v5' | 'Standard_E2d_v4' | 'Standard_E2d_v5' | 'Standard_E4a_v4' | 'Standard_E4ads_v5' | 'Standard_E4d_v4' | 'Standard_E4d_v5' | 'Standard_E64i_v3' | 'Standard_E80ids_v4' | 'Standard_E8a_v4' | 'Standard_E8ads_v5' | 'Standard_E8as_v4+1TB_PS' | 'Standard_E8as_v4+2TB_PS' | 'Standard_E8as_v5+1TB_PS' | 'Standard_E8as_v5+2TB_PS' | 'Standard_E8d_v4' | 'Standard_E8d_v5' | 'Standard_E8s_v4+1TB_PS' | 'Standard_E8s_v4+2TB_PS' | 'Standard_E8s_v5+1TB_PS' | 'Standard_E8s_v5+2TB_PS' | 'Standard_EC16ads_v5' | 'Standard_EC16as_v5+3TB_PS' | 'Standard_EC16as_v5+4TB_PS' | 'Standard_EC8ads_v5' | 'Standard_EC8as_v5+1TB_PS' | 'Standard_EC8as_v5+2TB_PS' | 'Standard_L16as_v3' | 'Standard_L16s' | 'Standard_L16s_v2' | 'Standard_L16s_v3' | 'Standard_L32as_v3' | 'Standard_L32s_v3' | 'Standard_L4s' | 'Standard_L8as_v3' | 'Standard_L8s' | 'Standard_L8s_v2' | 'Standard_L8s_v3' | string (Required): SKU name.
* **tier**: 'Basic' | 'Standard' | string (Required): SKU tier.

## CalloutPoliciesList
### Properties
* **nextLink**: string: The URL to get the next set of callout policies list results if there are any.
* **value**: [CalloutPolicy](#calloutpolicy)[]: A list of the service's callout policies.

## CalloutPolicy
### Properties
* **calloutId**: string (ReadOnly): Unique identifier for the callout configuration.
* **calloutType**: 'azure_digital_twins' | 'azure_openai' | 'cosmosdb' | 'external_data' | 'genevametrics' | 'kusto' | 'mysql' | 'postgresql' | 'sandbox_artifacts' | 'sql' | 'webapi' | string: Type of the callout service, specifying the kind of external resource or service being accessed.
* **calloutUriRegex**: string: Regular expression or FQDN pattern for the callout URI.
* **outboundAccess**: 'Allow' | 'Deny' | string: Indicates whether outbound access is permitted for the specified URI pattern.

## ClusterPrincipalProperties
### Properties
* **aadObjectId**: string (ReadOnly): The service principal object id in AAD (Azure active directory)
* **principalId**: string (Required): The principal ID assigned to the cluster principal. It can be a user email, application ID, or security group name.
* **principalName**: string (ReadOnly): The principal name
* **principalType**: 'App' | 'Group' | 'User' | string (Required): Principal type.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioned state of the resource.
* **role**: 'AllDatabasesAdmin' | 'AllDatabasesMonitor' | 'AllDatabasesViewer' | string (Required): Cluster principal role.
* **tenantId**: string: The tenant id of the principal
* **tenantName**: string (ReadOnly): The tenant name of the principal

## ClusterProperties
### Properties
* **acceptedAudiences**: [AcceptedAudiences](#acceptedaudiences)[]: The cluster's accepted audiences.
* **allowedFqdnList**: string[]: List of allowed FQDNs(Fully Qualified Domain Name) for egress from Cluster.
* **allowedIpRangeList**: string[]: The list of ips in the format of CIDR allowed to connect to the cluster.
* **calloutPolicies**: [CalloutPolicy](#calloutpolicy)[]: List of callout policies for egress from Cluster.
* **dataIngestionUri**: string (ReadOnly): The cluster data ingestion URI.
* **enableAutoStop**: bool: A boolean value that indicates if the cluster could be automatically stopped (due to lack of data or no activity for many days).
* **enableDiskEncryption**: bool: A boolean value that indicates if the cluster's disks are encrypted.
* **enableDoubleEncryption**: bool: A boolean value that indicates if double encryption is enabled.
* **enablePurge**: bool: A boolean value that indicates if the purge operations are enabled.
* **enableStreamingIngest**: bool: A boolean value that indicates if the streaming ingest is enabled.
* **engineType**: 'V2' | 'V3' | string: The engine type
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): KeyVault properties for the cluster encryption.
* **languageExtensions**: [LanguageExtensionsList](#languageextensionslist): List of the cluster's language extensions.
* **migrationCluster**: [MigrationClusterProperties](#migrationclusterproperties) (ReadOnly): Properties of the peer cluster involved in a migration to/from this cluster.
* **optimizedAutoscale**: [OptimizedAutoscale](#optimizedautoscale): Optimized auto scale definition.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): A list of private endpoint connections.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioned state of the resource.
* **publicIPType**: 'DualStack' | 'IPv4' | string: Indicates what public IP type to create - IPv4 (default), or DualStack (both IPv4 and IPv6)
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Public network access to the cluster is enabled by default. When disabled, only private endpoint connection to the cluster is allowed
* **restrictOutboundNetworkAccess**: 'Disabled' | 'Enabled' | string: Whether or not to restrict outbound network access.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'
* **state**: 'Creating' | 'Deleted' | 'Deleting' | 'Migrated' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | 'Unavailable' | 'Updating' | string (ReadOnly): The state of the resource.
* **stateReason**: string (ReadOnly): The reason for the cluster's current state.
* **trustedExternalTenants**: [TrustedExternalTenant](#trustedexternaltenant)[]: The cluster's external tenants.
* **uri**: string (ReadOnly): The cluster URI.
* **virtualClusterGraduationProperties**: string {sensitive} (WriteOnly): Virtual Cluster graduation properties
* **virtualNetworkConfiguration**: [VirtualNetworkConfiguration](#virtualnetworkconfiguration): Virtual network definition.
* **zoneStatus**: 'NonZonal' | 'Zonal' | 'ZonalInconsistency' | string (ReadOnly): Indicates whether the cluster is zonal or non-zonal.

## ComponentsSgqdofSchemasIdentityPropertiesUserassignedidentitiesAdditionalproperties
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## CosmosDbDataConnectionProperties
### Properties
* **cosmosDbAccountResourceId**: string (Required): The resource ID of the Cosmos DB account used to create the data connection.
* **cosmosDbContainer**: string (Required): The name of an existing container in the Cosmos DB database.
* **cosmosDbDatabase**: string (Required): The name of an existing database in the Cosmos DB account.
* **managedIdentityObjectId**: string (ReadOnly): The object ID of the managed identity resource.
* **managedIdentityResourceId**: string (Required): The resource ID of a managed system or user-assigned identity. The identity is used to authenticate with Cosmos DB.
* **mappingRuleName**: string: The name of an existing mapping rule to use when ingesting the retrieved data.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioned state of the resource.
* **retrievalStartDate**: string: Optional. If defined, the data connection retrieves Cosmos DB documents created or updated after the specified retrieval start date.
* **tableName**: string (Required): The case-sensitive name of the existing target table in your cluster. Retrieved data is ingested into this table.

## DatabasePrincipal
### Properties
* **appId**: string: Application id - relevant only for application principal type.
* **email**: string: Database principal email if exists.
* **fqn**: string: Database principal fully qualified name.
* **name**: string (Required): Database principal name.
* **role**: 'Admin' | 'Ingestor' | 'Monitor' | 'UnrestrictedViewer' | 'User' | 'Viewer' | string (Required): Database principal role.
* **tenantName**: string (ReadOnly): The tenant name of the principal
* **type**: 'App' | 'Group' | 'User' | string (Required): Database principal type.

## DatabasePrincipalListResult
### Properties
* **value**: [DatabasePrincipal](#databaseprincipal)[]: The list of Kusto database principals.

## DatabasePrincipalProperties
### Properties
* **aadObjectId**: string (ReadOnly): The service principal object id in AAD (Azure active directory)
* **principalId**: string (Required): The principal ID assigned to the database principal. It can be a user email, application ID, or security group name.
* **principalName**: string (ReadOnly): The principal name
* **principalType**: 'App' | 'Group' | 'User' | string (Required): Principal type.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioned state of the resource.
* **role**: 'Admin' | 'Ingestor' | 'Monitor' | 'UnrestrictedViewer' | 'User' | 'Viewer' | string (Required): Database principal role.
* **tenantId**: string: The tenant id of the principal
* **tenantName**: string (ReadOnly): The tenant name of the principal

## DatabaseStatistics
### Properties
* **size**: int: The database size - the total size of compressed data and index in bytes.

## EventGridConnectionProperties
### Properties
* **blobStorageEventType**: 'Microsoft.Storage.BlobCreated' | 'Microsoft.Storage.BlobRenamed' | string: The name of blob storage event type to process.
* **consumerGroup**: string (Required): The event hub consumer group.
* **databaseRouting**: 'Multi' | 'Single' | string: Indication for database routing information from the data connection, by default only database routing information is allowed
* **dataFormat**: 'APACHEAVRO' | 'AVRO' | 'CSV' | 'JSON' | 'MULTIJSON' | 'ORC' | 'PARQUET' | 'PSV' | 'RAW' | 'SCSV' | 'SINGLEJSON' | 'SOHSV' | 'TSV' | 'TSVE' | 'TXT' | 'W3CLOGFILE' | string: The data format of the message. Optionally the data format can be added to each message.
* **eventGridResourceId**: string: The resource ID of the event grid that is subscribed to the storage account events.
* **eventHubResourceId**: string (Required): The resource ID where the event grid is configured to send events.
* **ignoreFirstRecord**: bool: A Boolean value that, if set to true, indicates that ingestion should ignore the first record of every file
* **managedIdentityObjectId**: string (ReadOnly): The object ID of managedIdentityResourceId
* **managedIdentityResourceId**: string: The resource ID of a managed identity (system or user assigned) to be used to authenticate with event hub and storage account.
* **mappingRuleName**: string: The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioned state of the resource.
* **storageAccountResourceId**: string (Required): The resource ID of the storage account where the data resides.
* **tableName**: string: The table where the data should be ingested. Optionally the table information can be added to each message.

## EventHubConnectionProperties
### Properties
* **compression**: 'GZip' | 'None' | string: The event hub messages compression type
* **consumerGroup**: string (Required): The event hub consumer group.
* **databaseRouting**: 'Multi' | 'Single' | string: Indication for database routing information from the data connection, by default only database routing information is allowed
* **dataFormat**: 'APACHEAVRO' | 'AVRO' | 'CSV' | 'JSON' | 'MULTIJSON' | 'ORC' | 'PARQUET' | 'PSV' | 'RAW' | 'SCSV' | 'SINGLEJSON' | 'SOHSV' | 'TSV' | 'TSVE' | 'TXT' | 'W3CLOGFILE' | string: The data format of the message. Optionally the data format can be added to each message.
* **eventHubResourceId**: string (Required): The resource ID of the event hub to be used to create a data connection.
* **eventSystemProperties**: string[]: System properties of the event hub
* **managedIdentityObjectId**: string (ReadOnly): The object ID of the managedIdentityResourceId
* **managedIdentityResourceId**: string: The resource ID of a managed identity (system or user assigned) to be used to authenticate with event hub.
* **mappingRuleName**: string: The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioned state of the resource.
* **retrievalStartDate**: string: When defined, the data connection retrieves existing Event hub events created since the Retrieval start date. It can only retrieve events retained by the Event hub, based on its retention period.
* **tableName**: string: The table where the data should be ingested. Optionally the table information can be added to each message.

## FollowerDatabaseDefinition
### Properties
* **attachedDatabaseConfigurationName**: string (Required): Resource name of the attached database configuration in the follower cluster.
* **clusterResourceId**: string (Required): Resource id of the cluster that follows a database owned by this cluster.
* **databaseName**: string (ReadOnly): The database name owned by this cluster that was followed. * in case following all databases.
* **databaseShareOrigin**: 'DataShare' | 'Direct' | 'Other' | string (ReadOnly): The origin of the following setup.
* **tableLevelSharingProperties**: [TableLevelSharingProperties](#tablelevelsharingproperties) (ReadOnly): Table level sharing specifications

## FollowerDatabaseListResult
### Properties
* **value**: [FollowerDatabaseDefinition](#followerdatabasedefinition)[]: The list of follower database result.

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' | string (Required): The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove all identities.
* **userAssignedIdentities**: [IdentityUserAssignedIdentities](#identityuserassignedidentities): The list of user identities associated with the Kusto cluster. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## IdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [ComponentsSgqdofSchemasIdentityPropertiesUserassignedidentitiesAdditionalproperties](#componentssgqdofschemasidentitypropertiesuserassignedidentitiesadditionalproperties)

## IotHubConnectionProperties
### Properties
* **consumerGroup**: string (Required): The iot hub consumer group.
* **databaseRouting**: 'Multi' | 'Single' | string: Indication for database routing information from the data connection, by default only database routing information is allowed
* **dataFormat**: 'APACHEAVRO' | 'AVRO' | 'CSV' | 'JSON' | 'MULTIJSON' | 'ORC' | 'PARQUET' | 'PSV' | 'RAW' | 'SCSV' | 'SINGLEJSON' | 'SOHSV' | 'TSV' | 'TSVE' | 'TXT' | 'W3CLOGFILE' | string: The data format of the message. Optionally the data format can be added to each message.
* **eventSystemProperties**: string[]: System properties of the iot hub
* **iotHubResourceId**: string (Required): The resource ID of the Iot hub to be used to create a data connection.
* **mappingRuleName**: string: The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioned state of the resource.
* **retrievalStartDate**: string: When defined, the data connection retrieves existing Event hub events created since the Retrieval start date. It can only retrieve events retained by the Event hub, based on its retention period.
* **sharedAccessPolicyName**: string (Required): The name of the share access policy
* **tableName**: string: The table where the data should be ingested. Optionally the table information can be added to each message.

## KeyVaultProperties
### Properties
* **keyName**: string: The name of the key vault key.
* **keyVaultUri**: string: The Uri of the key vault.
* **keyVersion**: string: The version of the key vault key.
* **userIdentity**: string: The user assigned identity (ARM resource id) that has access to the key.

## LanguageExtension
### Properties
* **languageExtensionCustomImageName**: string: The language extension custom image name.
* **languageExtensionImageName**: 'Python3_10_8' | 'Python3_10_8_DL' | 'Python3_11_7' | 'Python3_11_7_DL' | 'Python3_6_5' | 'PythonCustomImage' | 'R' | string: The language extension image name.
* **languageExtensionName**: 'PYTHON' | 'R' | string: The language extension name.

## LanguageExtensionsList
### Properties
* **value**: [LanguageExtension](#languageextension)[]: The list of language extensions.

## LanguageExtensionsList
### Properties
* **value**: [LanguageExtension](#languageextension)[]: The list of language extensions.

## ManagedPrivateEndpointProperties
### Properties
* **groupId**: string (Required): The groupId in which the managed private endpoint is created.
* **privateLinkResourceId**: string (Required): The ARM resource ID of the resource for which the managed private endpoint is created.
* **privateLinkResourceRegion**: string: The region of the resource to which the managed private endpoint is created.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioned state of the resource.
* **requestMessage**: string: The user request message.

## MigrationClusterProperties
### Properties
* **dataIngestionUri**: string (ReadOnly): The public data ingestion URL of the cluster.
* **id**: string (ReadOnly): The resource ID of the cluster.
* **role**: 'Destination' | 'Source' | string (ReadOnly): The role of the cluster in the migration process.
* **uri**: string (ReadOnly): The public URL of the cluster.

## OptimizedAutoscale
### Properties
* **isEnabled**: bool (Required): A boolean value that indicate if the optimized autoscale feature is enabled or not.
* **maximum**: int (Required): Maximum allowed instances count.
* **minimum**: int (Required): Minimum allowed instances count.
* **version**: int (Required): The version of the template defined, for instance 1.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupId**: string (ReadOnly): Group id of the private endpoint.
* **privateEndpoint**: [PrivateEndpointProperty](#privateendpointproperty) (ReadOnly): Private endpoint which the connection belongs to.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionStateProperty](#privatelinkserviceconnectionstateproperty) (Required): Connection State of the Private Endpoint Connection.
* **provisioningState**: string (ReadOnly): Provisioning state of the private endpoint.

## PrivateEndpointProperty
### Properties
* **id**: string (ReadOnly): Resource id of the private endpoint.

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.
* **requiredZoneNames**: string[] (ReadOnly): The private link resource required zone names.

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: string (ReadOnly): Any action that is required beyond basic workflow (approve/ reject/ disconnect)
* **description**: string: The private link service connection description.
* **status**: string: The private link service connection status.

## ReadOnlyFollowingDatabaseProperties
### Properties
* **attachedDatabaseConfigurationName**: string (ReadOnly): The name of the attached database configuration cluster
* **databaseShareOrigin**: 'DataShare' | 'Direct' | 'Other' | string (ReadOnly): The origin of the following setup.
* **hotCachePeriod**: string: The time the data should be kept in cache for fast queries in TimeSpan.
* **leaderClusterResourceId**: string (ReadOnly): The name of the leader cluster
* **originalDatabaseName**: string (ReadOnly): The original database name, before databaseNameOverride or databaseNamePrefix where applied.
* **principalsModificationKind**: 'None' | 'Replace' | 'Union' | string (ReadOnly): The principals modification kind of the database
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioned state of the resource.
* **softDeletePeriod**: string (ReadOnly): The time the data should be kept before it stops being accessible to queries in TimeSpan.
* **statistics**: [DatabaseStatistics](#databasestatistics) (ReadOnly): The statistics of the database.
* **suspensionDetails**: [SuspensionDetails](#suspensiondetails) (ReadOnly): The database suspension details. If the database is suspended, this object contains information related to the database's suspension state.
* **tableLevelSharingProperties**: [TableLevelSharingProperties](#tablelevelsharingproperties) (ReadOnly): Table level sharing specifications

## ReadWriteDatabaseProperties
### Properties
* **hotCachePeriod**: string: The time the data should be kept in cache for fast queries in TimeSpan.
* **isFollowed**: bool (ReadOnly): Indicates whether the database is followed.
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): KeyVault properties for the database encryption.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioned state of the resource.
* **softDeletePeriod**: string: The time the data should be kept before it stops being accessible to queries in TimeSpan.
* **statistics**: [DatabaseStatistics](#databasestatistics) (ReadOnly): The statistics of the database.
* **suspensionDetails**: [SuspensionDetails](#suspensiondetails) (ReadOnly): The database suspension details. If the database is suspended, this object contains information related to the database's suspension state.

## SandboxCustomImageProperties
### Properties
* **baseImageName**: string: The base image name on which the custom image is built on top of. It can be one of the LanguageExtensionImageName (e.g.: 'Python3_10_8', 'Python3_10_8_DL') or the name of an existing custom image. Either this property or languageVersion should be specified.
* **language**: 'Python' | string (Required): The language name, for example Python.
* **languageVersion**: string: The version of the language. Either this property or baseImageName should be specified.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioned state of the resource.
* **requirementsFileContent**: string: The requirements file content.

## ScriptProperties
### Properties
* **continueOnErrors**: bool: Flag that indicates whether to continue if one of the command fails.
* **forceUpdateTag**: string: A unique string. If changed the script will be applied again.
* **principalPermissionsAction**: 'RemovePermissionOnScriptCompletion' | 'RetainPermissionOnScriptCompletion' | string: Indicates if the permissions for the script caller are kept following completion of the script.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioned state of the resource.
* **scriptContent**: string {sensitive} (WriteOnly): The script content. This property should be used when the script is provide inline and not through file in a SA. Must not be used together with scriptUrl and scriptUrlSasToken properties.
* **scriptLevel**: 'Cluster' | 'Database' | string: Differentiates between the type of script commands included - Database or Cluster. The default is Database.
* **scriptUrl**: string: The url to the KQL script blob file. Must not be used together with scriptContent property
* **scriptUrlSasToken**: string {sensitive} (WriteOnly): The SaS token that provide read access to the file which contain the script. Must be provided when using scriptUrl property.

## SuspensionDetails
### Properties
* **suspensionStartDate**: string: The starting date and time of the suspension state.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TableLevelSharingProperties
### Properties
* **externalTablesToExclude**: string[]: List of external tables to exclude from the follower database
* **externalTablesToInclude**: string[]: List of external tables to include in the follower database
* **functionsToExclude**: string[]: List of functions to exclude from the follower database
* **functionsToInclude**: string[]: List of functions to include in the follower database
* **materializedViewsToExclude**: string[]: List of materialized views to exclude from the follower database
* **materializedViewsToInclude**: string[]: List of materialized views to include in the follower database
* **tablesToExclude**: string[]: List of tables to exclude from the follower database
* **tablesToInclude**: string[]: List of tables to include in the follower database

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
* **state**: 'Disabled' | 'Enabled' | string: When enabled, the cluster is deployed into the configured subnet, when disabled it will be removed from the subnet.
* **subnetId**: string (Required): The subnet resource id.

