# Microsoft.Kusto @ 2019-09-07

## Resource Microsoft.Kusto/clusters@2019-09-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-09-07' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): Class representing the Kusto cluster properties.
* **sku**: [AzureSku](#azuresku) (Required): Azure SKU definition.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Kusto/clusters' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: An array represents the availability zones of the cluster.

## Resource Microsoft.Kusto/clusters/attachedDatabaseConfigurations@2019-09-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-09-07' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AttachedDatabaseConfigurationProperties](#attacheddatabaseconfigurationproperties): Class representing the an attached database configuration properties of kind specific.
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
### ReadOnlyFollowing
#### Properties
* **kind**: 'ReadOnlyFollowing' (Required): Class representing a read only following database.
* **properties**: [ReadOnlyFollowingDatabaseProperties](#readonlyfollowingdatabaseproperties): Class representing the Kusto database properties.

### ReadWrite
#### Properties
* **kind**: 'ReadWrite' (Required): Class representing a read write database.
* **properties**: [ReadWriteDatabaseProperties](#readwritedatabaseproperties): Class representing the Kusto database properties.


## Resource Microsoft.Kusto/clusters/databases/dataConnections@2019-09-07
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2019-09-07' (ReadOnly, DeployTimeConstant): The resource api version
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
* **properties**: [IotHubConnectionProperties](#iothubconnectionproperties): Class representing the Kusto iot hub connection properties.


## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' (Required): The identity type. Possible values include: 'None', 'SystemAssigned'
* **userAssignedIdentities**: [Dictionary<string,Schemas50UserAssignedIdentitiesValue>](#dictionarystringschemas50userassignedidentitiesvalue): The list of user identities associated with the Kusto cluster. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## Dictionary<string,Schemas50UserAssignedIdentitiesValue>
### Properties
### Additional Properties
* **Additional Properties Type**: [schemas:50_userAssignedIdentitiesValue](#schemas50userassignedidentitiesvalue)

## schemas:50_userAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## ClusterProperties
### Properties
* **dataIngestionUri**: string (ReadOnly): The cluster data ingestion URI.
* **enableDiskEncryption**: bool: A boolean value that indicates if the cluster's disks are encrypted.
* **enableStreamingIngest**: bool: A boolean value that indicates if the streaming ingest is enabled.
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): Properties of the key vault.
* **optimizedAutoscale**: [OptimizedAutoscale](#optimizedautoscale): A class that contains the optimized auto scale definition.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' (ReadOnly): The provisioned state of the resource. Possible values include: 'Running', 'Creating', 'Deleting', 'Succeeded', 'Failed', 'Moving'
* **state**: 'Creating' | 'Deleted' | 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | 'Unavailable' | 'Updating' (ReadOnly): The state of the resource. Possible values include: 'Creating', 'Unavailable', 'Running', 'Deleting', 'Deleted', 'Stopping', 'Stopped', 'Starting', 'Updating'
* **trustedExternalTenants**: [TrustedExternalTenant](#trustedexternaltenant)[]: The cluster's external tenants.
* **uri**: string (ReadOnly): The cluster URI.
* **virtualNetworkConfiguration**: [VirtualNetworkConfiguration](#virtualnetworkconfiguration): A class that contains virtual network definition.

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
* **name**: 'Dev(No SLA)_Standard_D11_v2' | 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_D13_v2' | 'Standard_D14_v2' | 'Standard_DS13_v2+1TB_PS' | 'Standard_DS13_v2+2TB_PS' | 'Standard_DS14_v2+3TB_PS' | 'Standard_DS14_v2+4TB_PS' | 'Standard_L16s' | 'Standard_L4s' | 'Standard_L8s' (Required): SKU name. Possible values include: 'Standard_DS13_v2+1TB_PS', 'Standard_DS13_v2+2TB_PS', 'Standard_DS14_v2+3TB_PS', 'Standard_DS14_v2+4TB_PS', 'Standard_D13_v2', 'Standard_D14_v2', 'Standard_L8s', 'Standard_L16s', 'Standard_D11_v2', 'Standard_D12_v2', 'Standard_L4s', 'Dev(No SLA)_Standard_D11_v2'
* **tier**: 'Basic' | 'Standard' (Required): SKU tier. Possible values include: 'Basic', 'Standard'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AttachedDatabaseConfigurationProperties
### Properties
* **attachedDatabaseNames**: string[] (ReadOnly): The list of databases from the clusterResourceId which are currently attached to the cluster.
* **clusterResourceId**: string (Required): The resource id of the cluster where the databases you would like to attach reside.
* **databaseName**: string (Required): The name of the database which you would like to attach, use * if you want to follow all current and future databases.
* **defaultPrincipalsModificationKind**: 'None' | 'Replace' | 'Union' (Required): The default principals modification kind. Possible values include: 'Union', 'Replace', 'None'
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' (ReadOnly): The provisioned state of the resource. Possible values include: 'Running', 'Creating', 'Deleting', 'Succeeded', 'Failed', 'Moving'

## ReadOnlyFollowing
### Properties
* **kind**: 'ReadOnlyFollowing' (Required): Class representing a read only following database.
* **properties**: [ReadOnlyFollowingDatabaseProperties](#readonlyfollowingdatabaseproperties): Class representing the Kusto database properties.

## ReadOnlyFollowingDatabaseProperties
### Properties
* **attachedDatabaseConfigurationName**: string (ReadOnly): The name of the attached database configuration cluster
* **hotCachePeriod**: string: The time the data should be kept in cache for fast queries in TimeSpan.
* **leaderClusterResourceId**: string (ReadOnly): The name of the leader cluster
* **principalsModificationKind**: 'None' | 'Replace' | 'Union' (ReadOnly): The principals modification kind of the database. Possible values include: 'Union', 'Replace', 'None'
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' (ReadOnly): The provisioned state of the resource. Possible values include: 'Running', 'Creating', 'Deleting', 'Succeeded', 'Failed', 'Moving'
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
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' (ReadOnly): The provisioned state of the resource. Possible values include: 'Running', 'Creating', 'Deleting', 'Succeeded', 'Failed', 'Moving'
* **softDeletePeriod**: string: The time the data should be kept before it stops being accessible to queries in TimeSpan.
* **statistics**: [DatabaseStatistics](#databasestatistics): A class that contains database statistics information.

## EventGrid
### Properties
* **kind**: 'EventGrid' (Required): Class representing an Event Grid data connection.
* **properties**: [EventGridConnectionProperties](#eventgridconnectionproperties): Class representing the Kusto event grid connection properties.

## EventGridConnectionProperties
### Properties
* **consumerGroup**: string (Required): The event hub consumer group.
* **dataFormat**: 'AVRO' | 'CSV' | 'JSON' | 'MULTIJSON' | 'PSV' | 'RAW' | 'SCSV' | 'SINGLEJSON' | 'SOHSV' | 'TSV' | 'TSVE' | 'TXT' (Required): The data format of the message. Optionally the data format can be added to each message. Possible values include: 'MULTIJSON', 'JSON', 'CSV', 'TSV', 'SCSV', 'SOHSV', 'PSV', 'TXT', 'RAW', 'SINGLEJSON', 'AVRO', 'TSVE'
* **eventHubResourceId**: string (Required): The resource ID where the event grid is configured to send events.
* **mappingRuleName**: string: The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
* **storageAccountResourceId**: string (Required): The resource ID of the storage account where the data resides.
* **tableName**: string (Required): The table where the data should be ingested. Optionally the table information can be added to each message.

## EventHub
### Properties
* **kind**: 'EventHub' (Required): Class representing an event hub data connection.
* **properties**: [EventHubConnectionProperties](#eventhubconnectionproperties): Class representing the Kusto event hub connection properties.

## EventHubConnectionProperties
### Properties
* **consumerGroup**: string (Required): The event hub consumer group.
* **dataFormat**: 'AVRO' | 'CSV' | 'JSON' | 'MULTIJSON' | 'PSV' | 'RAW' | 'SCSV' | 'SINGLEJSON' | 'SOHSV' | 'TSV' | 'TSVE' | 'TXT': The data format of the message. Optionally the data format can be added to each message. Possible values include: 'MULTIJSON', 'JSON', 'CSV', 'TSV', 'SCSV', 'SOHSV', 'PSV', 'TXT', 'RAW', 'SINGLEJSON', 'AVRO', 'TSVE'
* **eventHubResourceId**: string (Required): The resource ID of the event hub to be used to create a data connection.
* **eventSystemProperties**: string[]: System properties of the event hub
* **mappingRuleName**: string: The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
* **tableName**: string: The table where the data should be ingested. Optionally the table information can be added to each message.

## IotHub
### Properties
* **kind**: 'IotHub' (Required): Class representing an iot hub data connection.
* **properties**: [IotHubConnectionProperties](#iothubconnectionproperties): Class representing the Kusto iot hub connection properties.

## IotHubConnectionProperties
### Properties
* **consumerGroup**: string (Required): The iot hub consumer group.
* **dataFormat**: 'AVRO' | 'CSV' | 'JSON' | 'MULTIJSON' | 'PSV' | 'RAW' | 'SCSV' | 'SINGLEJSON' | 'SOHSV' | 'TSV' | 'TSVE' | 'TXT': The data format of the message. Optionally the data format can be added to each message. Possible values include: 'MULTIJSON', 'JSON', 'CSV', 'TSV', 'SCSV', 'SOHSV', 'PSV', 'TXT', 'RAW', 'SINGLEJSON', 'AVRO', 'TSVE'
* **eventSystemProperties**: string[]: System properties of the iot hub
* **iotHubResourceId**: string (Required): The resource ID of the Iot hub to be used to create a data connection.
* **mappingRuleName**: string: The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
* **sharedAccessPolicyName**: string (Required): The name of the share access policy name
* **tableName**: string: The table where the data should be ingested. Optionally the table information can be added to each message.

