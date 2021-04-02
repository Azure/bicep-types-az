# Microsoft.Kusto @ 2020-06-14

## Resource Microsoft.Kusto/clusters@2020-06-14
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-14' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): Class representing the Kusto cluster properties.
* **sku**: [AzureSku](#azuresku) (Required): Azure SKU definition.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Kusto/clusters' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: An array represents the availability zones of the cluster.

## Resource Microsoft.Kusto/clusters/attachedDatabaseConfigurations@2020-06-14
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-14' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AttachedDatabaseConfigurationProperties](#attacheddatabaseconfigurationproperties): Class representing the an attached database configuration properties of kind specific.
* **type**: 'Microsoft.Kusto/clusters/attachedDatabaseConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Kusto/clusters/databases@2020-06-14
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2020-06-14' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Kusto/clusters/databases' (ReadOnly, DeployTimeConstant): The resource type
### ReadOnlyFollowing
#### Properties
* **kind**: 'ReadOnlyFollowing' (Required): Class representing a read only following database.
* **properties**: [ReadOnlyFollowingDatabaseProperties](#readonlyfollowingdatabaseproperties): Class representing the Kusto database properties.

### ReadWrite
#### Properties
* **kind**: 'ReadWrite' (Required): Class representing a read write database.
* **properties**: [ReadWriteDatabaseProperties](#readwritedatabaseproperties): Class representing the Kusto database properties.


## Resource Microsoft.Kusto/clusters/databases/dataConnections@2020-06-14
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2020-06-14' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Kusto/clusters/databases/dataConnections' (ReadOnly, DeployTimeConstant): The resource type
### EventGrid
#### Properties
* **kind**: 'EventGrid' (Required): Class representing an Event Grid data connection.
* **properties**: [EventGridConnectionProperties](#eventgridconnectionproperties): Class representing the Kusto event grid connection properties.

### EventHub
#### Properties
* **kind**: 'EventHub' (Required): Class representing an event hub data connection.
* **properties**: [EventHubConnectionProperties](#eventhubconnectionproperties): Class representing the Kusto event hub connection properties.

### IotHub
#### Properties
* **kind**: 'IotHub' (Required): Class representing an iot hub data connection.
* **properties**: [IotHubConnectionProperties](#iothubconnectionproperties): Class representing the Kusto Iot hub connection properties.


## Resource Microsoft.Kusto/clusters/databases/principalAssignments@2020-06-14
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-14' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabasePrincipalProperties](#databaseprincipalproperties): A class representing database principal property.
* **type**: 'Microsoft.Kusto/clusters/databases/principalAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Kusto/clusters/principalAssignments@2020-06-14
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-14' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterPrincipalProperties](#clusterprincipalproperties): A class representing cluster principal property.
* **type**: 'Microsoft.Kusto/clusters/principalAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' (Required): The identity type.
* **userAssignedIdentities**: [Dictionary<string,Schemas63UserAssignedIdentitiesValue>](#dictionarystringschemas63userassignedidentitiesvalue): The list of user identities associated with the Kusto cluster. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## Dictionary<string,Schemas63UserAssignedIdentitiesValue>
### Properties
### Additional Properties
* **Additional Properties Type**: [schemas:63_userAssignedIdentitiesValue](#schemas63userassignedidentitiesvalue)

## schemas:63_userAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## ClusterProperties
### Properties
* **dataIngestionUri**: string (ReadOnly): The cluster data ingestion URI.
* **enableDiskEncryption**: bool: A boolean value that indicates if the cluster's disks are encrypted.
* **enableDoubleEncryption**: bool: A boolean value that indicates if double encryption is enabled.
* **enablePurge**: bool: A boolean value that indicates if the purge operations are enabled.
* **enableStreamingIngest**: bool: A boolean value that indicates if the streaming ingest is enabled.
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): Properties of the key vault.
* **languageExtensions**: [LanguageExtensionsList](#languageextensionslist) (ReadOnly): The list of language extension objects.
* **optimizedAutoscale**: [OptimizedAutoscale](#optimizedautoscale): A class that contains the optimized auto scale definition.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' (ReadOnly): The provisioned state of the resource.
* **state**: 'Creating' | 'Deleted' | 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | 'Unavailable' | 'Updating' (ReadOnly): The state of the resource.
* **stateReason**: string (ReadOnly): The reason for the cluster's current state.
* **trustedExternalTenants**: [TrustedExternalTenant](#trustedexternaltenant)[]: The cluster's external tenants.
* **uri**: string (ReadOnly): The cluster URI.
* **virtualNetworkConfiguration**: [VirtualNetworkConfiguration](#virtualnetworkconfiguration): A class that contains virtual network definition.

## KeyVaultProperties
### Properties
* **keyName**: string (Required): The name of the key vault key.
* **keyVaultUri**: string (Required): The Uri of the key vault.
* **keyVersion**: string (Required): The version of the key vault key.

## LanguageExtensionsList
### Properties
* **value**: [LanguageExtension](#languageextension)[]: The list of language extensions.

## LanguageExtension
### Properties
* **languageExtensionName**: 'PYTHON' | 'R': The language extension name.

## OptimizedAutoscale
### Properties
* **isEnabled**: bool (Required): A boolean value that indicate if the optimized autoscale feature is enabled or not.
* **maximum**: int (Required): Maximum allowed instances count.
* **minimum**: int (Required): Minimum allowed instances count.
* **version**: int (Required): The version of the template defined, for instance 1.

## TrustedExternalTenant
### Properties
* **value**: string: GUID representing an external tenant.

## VirtualNetworkConfiguration
### Properties
* **dataManagementPublicIpId**: string (Required): Data management's service public IP address resource id.
* **enginePublicIpId**: string (Required): Engine service's public IP address resource id.
* **subnetId**: string (Required): The subnet resource id.

## AzureSku
### Properties
* **capacity**: int: The number of instances of the cluster.
* **name**: 'Dev(No SLA)_Standard_D11_v2' | 'Dev(No SLA)_Standard_E2a_v4' | 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_D13_v2' | 'Standard_D14_v2' | 'Standard_DS13_v2+1TB_PS' | 'Standard_DS13_v2+2TB_PS' | 'Standard_DS14_v2+3TB_PS' | 'Standard_DS14_v2+4TB_PS' | 'Standard_E16a_v4' | 'Standard_E16as_v4+3TB_PS' | 'Standard_E16as_v4+4TB_PS' | 'Standard_E2a_v4' | 'Standard_E4a_v4' | 'Standard_E8a_v4' | 'Standard_E8as_v4+1TB_PS' | 'Standard_E8as_v4+2TB_PS' | 'Standard_L16s' | 'Standard_L4s' | 'Standard_L8s' (Required): SKU name.
* **tier**: 'Basic' | 'Standard' (Required): SKU tier.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AttachedDatabaseConfigurationProperties
### Properties
* **attachedDatabaseNames**: string[] (ReadOnly): The list of databases from the clusterResourceId which are currently attached to the cluster.
* **clusterResourceId**: string (Required): The resource id of the cluster where the databases you would like to attach reside.
* **databaseName**: string (Required): The name of the database which you would like to attach, use * if you want to follow all current and future databases.
* **defaultPrincipalsModificationKind**: 'None' | 'Replace' | 'Union' (Required): The default principals modification kind.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' (ReadOnly): The provisioned state of the resource.

## ReadOnlyFollowing
### Properties
* **kind**: 'ReadOnlyFollowing' (Required): Class representing a read only following database.
* **properties**: [ReadOnlyFollowingDatabaseProperties](#readonlyfollowingdatabaseproperties): Class representing the Kusto database properties.

## ReadOnlyFollowingDatabaseProperties
### Properties
* **attachedDatabaseConfigurationName**: string (ReadOnly): The name of the attached database configuration cluster
* **hotCachePeriod**: string: The time the data should be kept in cache for fast queries in TimeSpan.
* **leaderClusterResourceId**: string (ReadOnly): The name of the leader cluster
* **principalsModificationKind**: 'None' | 'Replace' | 'Union' (ReadOnly): The principals modification kind of the database.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' (ReadOnly): The provisioned state of the resource.
* **softDeletePeriod**: string (ReadOnly): The time the data should be kept before it stops being accessible to queries in TimeSpan.
* **statistics**: [DatabaseStatistics](#databasestatistics): A class that contains database statistics information.

## DatabaseStatistics
### Properties
* **size**: int: The database size - the total size of compressed data and index in bytes.

## ReadWrite
### Properties
* **kind**: 'ReadWrite' (Required): Class representing a read write database.
* **properties**: [ReadWriteDatabaseProperties](#readwritedatabaseproperties): Class representing the Kusto database properties.

## ReadWriteDatabaseProperties
### Properties
* **hotCachePeriod**: string: The time the data should be kept in cache for fast queries in TimeSpan.
* **isFollowed**: bool (ReadOnly): Indicates whether the database is followed.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' (ReadOnly): The provisioned state of the resource.
* **softDeletePeriod**: string: The time the data should be kept before it stops being accessible to queries in TimeSpan.
* **statistics**: [DatabaseStatistics](#databasestatistics): A class that contains database statistics information.

## EventGrid
### Properties
* **kind**: 'EventGrid' (Required): Class representing an Event Grid data connection.
* **properties**: [EventGridConnectionProperties](#eventgridconnectionproperties): Class representing the Kusto event grid connection properties.

## EventGridConnectionProperties
### Properties
* **blobStorageEventType**: 'Microsoft.Storage.BlobCreated' | 'Microsoft.Storage.BlobRenamed': The name of blob storage event type to process.
* **consumerGroup**: string (Required): The event hub consumer group.
* **dataFormat**: 'APACHEAVRO' | 'AVRO' | 'CSV' | 'JSON' | 'MULTIJSON' | 'ORC' | 'PARQUET' | 'PSV' | 'RAW' | 'SCSV' | 'SINGLEJSON' | 'SOHSV' | 'TSV' | 'TSVE' | 'TXT' | 'W3CLOGFILE': The data format of the message. Optionally the data format can be added to each message.
* **eventHubResourceId**: string (Required): The resource ID where the event grid is configured to send events.
* **ignoreFirstRecord**: bool: A Boolean value that, if set to true, indicates that ingestion should ignore the first record of every file
* **mappingRuleName**: string: The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
* **storageAccountResourceId**: string (Required): The resource ID of the storage account where the data resides.
* **tableName**: string: The table where the data should be ingested. Optionally the table information can be added to each message.

## EventHub
### Properties
* **kind**: 'EventHub' (Required): Class representing an event hub data connection.
* **properties**: [EventHubConnectionProperties](#eventhubconnectionproperties): Class representing the Kusto event hub connection properties.

## EventHubConnectionProperties
### Properties
* **compression**: 'GZip' | 'None': The event hub messages compression type.
* **consumerGroup**: string (Required): The event hub consumer group.
* **dataFormat**: 'APACHEAVRO' | 'AVRO' | 'CSV' | 'JSON' | 'MULTIJSON' | 'ORC' | 'PARQUET' | 'PSV' | 'RAW' | 'SCSV' | 'SINGLEJSON' | 'SOHSV' | 'TSV' | 'TSVE' | 'TXT' | 'W3CLOGFILE': The data format of the message. Optionally the data format can be added to each message.
* **eventHubResourceId**: string (Required): The resource ID of the event hub to be used to create a data connection.
* **eventSystemProperties**: string[]: System properties of the event hub
* **mappingRuleName**: string: The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
* **tableName**: string: The table where the data should be ingested. Optionally the table information can be added to each message.

## IotHub
### Properties
* **kind**: 'IotHub' (Required): Class representing an iot hub data connection.
* **properties**: [IotHubConnectionProperties](#iothubconnectionproperties): Class representing the Kusto Iot hub connection properties.

## IotHubConnectionProperties
### Properties
* **consumerGroup**: string (Required): The iot hub consumer group.
* **dataFormat**: 'APACHEAVRO' | 'AVRO' | 'CSV' | 'JSON' | 'MULTIJSON' | 'ORC' | 'PARQUET' | 'PSV' | 'RAW' | 'SCSV' | 'SINGLEJSON' | 'SOHSV' | 'TSV' | 'TSVE' | 'TXT' | 'W3CLOGFILE': The data format of the message. Optionally the data format can be added to each message.
* **eventSystemProperties**: string[]: System properties of the iot hub
* **iotHubResourceId**: string (Required): The resource ID of the Iot hub to be used to create a data connection.
* **mappingRuleName**: string: The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
* **sharedAccessPolicyName**: string (Required): The name of the share access policy
* **tableName**: string: The table where the data should be ingested. Optionally the table information can be added to each message.

## DatabasePrincipalProperties
### Properties
* **principalId**: string (Required): The principal ID assigned to the database principal. It can be a user email, application ID, or security group name.
* **principalName**: string (ReadOnly): The principal name
* **principalType**: 'App' | 'Group' | 'User' (Required): Principal type.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' (ReadOnly): The provisioned state of the resource.
* **role**: 'Admin' | 'Ingestor' | 'Monitor' | 'UnrestrictedViewers' | 'User' | 'Viewer' (Required): Database principal role.
* **tenantId**: string: The tenant id of the principal
* **tenantName**: string (ReadOnly): The tenant name of the principal

## ClusterPrincipalProperties
### Properties
* **principalId**: string (Required): The principal ID assigned to the cluster principal. It can be a user email, application ID, or security group name.
* **principalName**: string (ReadOnly): The principal name
* **principalType**: 'App' | 'Group' | 'User' (Required): Principal type.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' (ReadOnly): The provisioned state of the resource.
* **role**: 'AllDatabasesAdmin' | 'AllDatabasesViewer' (Required): Cluster principal role.
* **tenantId**: string: The tenant id of the principal
* **tenantName**: string (ReadOnly): The tenant name of the principal

