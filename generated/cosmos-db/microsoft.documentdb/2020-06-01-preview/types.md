# Microsoft.DocumentDB @ 2020-06-01-preview

## Resource Microsoft.DocumentDB/databaseAccounts@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **kind**: 'GlobalDocumentDB' | 'MongoDB' | 'Parse'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DatabaseAccountCreateUpdateProperties](#databaseaccountcreateupdateproperties) (Required)
* **systemData**: [systemData](#systemdata) (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CassandraKeyspaceCreateUpdateProperties](#cassandrakeyspacecreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CassandraTableCreateUpdateProperties](#cassandratablecreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables/throughputSettings@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/throughputSettings@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/gremlinDatabases@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GremlinDatabaseCreateUpdateProperties](#gremlindatabasecreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GremlinGraphCreateUpdateProperties](#gremlingraphcreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs/throughputSettings@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/throughputSettings@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbDatabases@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MongoDBDatabaseCreateUpdateProperties](#mongodbdatabasecreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MongoDBCollectionCreateUpdateProperties](#mongodbcollectioncreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections/throughputSettings@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/throughputSettings@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/notebookWorkspaces@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NotebookWorkspaceProperties](#notebookworkspaceproperties) (ReadOnly)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/notebookWorkspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlDatabaseCreateUpdateProperties](#sqldatabasecreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlContainerCreateUpdateProperties](#sqlcontainercreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/storedProcedures@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlStoredProcedureCreateUpdateProperties](#sqlstoredprocedurecreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/storedProcedures' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/throughputSettings@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/triggers@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlTriggerCreateUpdateProperties](#sqltriggercreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/triggers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/userDefinedFunctions@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlUserDefinedFunctionCreateUpdateProperties](#sqluserdefinedfunctioncreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/userDefinedFunctions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlDatabases/throughputSettings@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/throughputSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlRoleAssignments@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlRoleAssignmentResource](#sqlroleassignmentresource)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlRoleAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/sqlRoleDefinitions@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlRoleDefinitionResource](#sqlroledefinitionresource)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/sqlRoleDefinitions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/tables@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TableCreateUpdateProperties](#tablecreateupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/tables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DocumentDB/databaseAccounts/tables/throughputSettings@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DocumentDB/databaseAccounts/tables/throughputSettings' (ReadOnly, DeployTimeConstant)

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned,UserAssigned' | 'SystemAssigned' | 'UserAssigned'
* **userAssignedIdentities**: [Dictionary<string,Schemas26Resource>](#dictionarystringschemas26resource)

## Dictionary<string,Schemas26Resource>
### Properties
### Additional Properties
* **Additional Properties Type**: [schemas:26_resource](#schemas26resource)

## schemas:26_resource
### Properties
* **_colls**: string
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string
* **id**: string (Required)

## DatabaseAccountCreateUpdateProperties
* **Discriminator**: createMode
### Base Properties
* **apiProperties**: [ApiProperties](#apiproperties)
* **backupPolicy**: [BackupPolicy](#backuppolicy)
* **capabilities**: [Capability](#capability)[]
* **connectorOffer**: 'Small'
* **consistencyPolicy**: [ConsistencyPolicy](#consistencypolicy)
* **cors**: [CorsPolicy](#corspolicy)[]
* **createMode**: 'Default' | 'Restore' (ReadOnly)
* **databaseAccountOfferType**: string (Required)
* **disableKeyBasedMetadataWriteAccess**: bool
* **documentEndpoint**: string (ReadOnly)
* **enableAnalyticalStorage**: bool
* **enableAutomaticFailover**: bool
* **enableCassandraConnector**: bool
* **enableFreeTier**: bool
* **enableMultipleWriteLocations**: bool
* **failoverPolicies**: [FailoverPolicy](#failoverpolicy)[] (ReadOnly)
* **instanceId**: string (ReadOnly)
* **ipRules**: [IpAddressOrRange](#ipaddressorrange)[]
* **isVirtualNetworkFilterEnabled**: bool
* **keyVaultKeyUri**: string
* **locations**: [Location](#location)[] (Required)
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled'
* **readLocations**: [Location](#location)[] (ReadOnly)
* **restoreParameters**: [RestoreParameters](#restoreparameters) (ReadOnly)
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[]
* **writeLocations**: [Location](#location)[] (ReadOnly)
### Default
#### Properties
* **createMode**: 'Default' (Required)

### Restore
#### Properties
* **createMode**: 'Restore' (Required)
* **restoreParameters**: [RestoreParameters](#restoreparameters) (WriteOnly)


## ApiProperties
### Properties
* **serverVersion**: '3.2' | '3.6'

## BackupPolicy
* **Discriminator**: type
### Base Properties
### Continuous
#### Properties
* **type**: 'Continuous' (Required)

### Periodic
#### Properties
* **periodicModeProperties**: [PeriodicModeProperties](#periodicmodeproperties)
* **type**: 'Periodic' (Required)


## Continuous
### Properties
* **type**: 'Continuous' (Required)

## Periodic
### Properties
* **periodicModeProperties**: [PeriodicModeProperties](#periodicmodeproperties)
* **type**: 'Periodic' (Required)

## PeriodicModeProperties
### Properties
* **backupIntervalInMinutes**: int
* **backupRetentionIntervalInHours**: int
* **backupStorageRedundancy**: 'Geo' | 'Local' | 'Zone'

## Capability
### Properties
* **name**: string

## ConsistencyPolicy
### Properties
* **defaultConsistencyLevel**: 'BoundedStaleness' | 'ConsistentPrefix' | 'Eventual' | 'Session' | 'Strong' (Required)
* **maxIntervalInSeconds**: int
* **maxStalenessPrefix**: int

## CorsPolicy
### Properties
* **allowedHeaders**: string
* **allowedMethods**: string
* **allowedOrigins**: string (Required)
* **exposedHeaders**: string
* **maxAgeInSeconds**: int

## FailoverPolicy
### Properties
* **failoverPriority**: int (ReadOnly)
* **id**: string (ReadOnly)
* **locationName**: string (ReadOnly)

## IpAddressOrRange
### Properties
* **ipAddressOrRange**: string

## Location
### Properties
* **documentEndpoint**: string (ReadOnly)
* **failoverPriority**: int
* **id**: string (ReadOnly)
* **isZoneRedundant**: bool
* **locationName**: string
* **provisioningState**: string

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (ReadOnly)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpointProperty](#privateendpointproperty) (ReadOnly)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionStateProperty](#privatelinkserviceconnectionstateproperty) (ReadOnly)

## PrivateEndpointProperty
### Properties
* **id**: string (ReadOnly)

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: string (ReadOnly)
* **status**: string (ReadOnly)

## RestoreParameters
### Properties
* **databasesToRestore**: [DatabaseRestoreResource](#databaserestoreresource)[] (ReadOnly)
* **restoreMode**: 'PointInTime' (ReadOnly)
* **restoreSource**: string (ReadOnly)
* **restoreTimestampInUtc**: string (ReadOnly)

## DatabaseRestoreResource
### Properties
* **collectionNames**: string[] (ReadOnly)
* **databaseName**: string (ReadOnly)

## VirtualNetworkRule
### Properties
* **id**: string
* **ignoreMissingVNetServiceEndpoint**: bool

## Default
### Properties
* **createMode**: 'Default' (Required)

## Restore
### Properties
* **createMode**: 'Restore' (Required)
* **restoreParameters**: [RestoreParameters](#restoreparameters) (WriteOnly)

## systemData
### Properties
* **createdAt**: string (ReadOnly)
* **createdBy**: string (ReadOnly)
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly)
* **lastModifiedAt**: string (ReadOnly)
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CassandraKeyspaceCreateUpdateProperties
### Properties
* **options**: [CreateUpdateOptions](#createupdateoptions) (Required)
* **resource**: [CassandraKeyspaceResource](#cassandrakeyspaceresource) (Required)

## CreateUpdateOptions
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **autoscaleSettings**: [AutoscaleSettings](#autoscalesettings) (WriteOnly)
* **id**: string (ReadOnly)
* **throughput**: int (WriteOnly)

## AutoscaleSettings
### Properties
* **maxThroughput**: int (WriteOnly)

## CassandraKeyspaceResource
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **id**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CassandraTableCreateUpdateProperties
### Properties
* **options**: [CreateUpdateOptions](#createupdateoptions) (Required)
* **resource**: [CassandraTableResource](#cassandratableresource) (Required)

## CassandraTableResource
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **analyticalStorageTtl**: int (WriteOnly)
* **defaultTtl**: int (WriteOnly)
* **id**: string (Required)
* **schema**: [CassandraSchema](#cassandraschema) (WriteOnly)

## CassandraSchema
### Properties
* **clusterKeys**: [ClusterKey](#clusterkey)[] (WriteOnly)
* **columns**: [Column](#column)[] (WriteOnly)
* **partitionKeys**: [CassandraPartitionKey](#cassandrapartitionkey)[] (WriteOnly)

## ClusterKey
### Properties
* **name**: string (WriteOnly)
* **orderBy**: string (WriteOnly)

## Column
### Properties
* **name**: string (WriteOnly)
* **type**: string (WriteOnly)

## CassandraPartitionKey
### Properties
* **name**: string (WriteOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ThroughputSettingsUpdateProperties
### Properties
* **resource**: [ThroughputSettingsResource](#throughputsettingsresource) (Required)

## ThroughputSettingsResource
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **autoscaleSettings**: [AutoscaleSettingsResource](#autoscalesettingsresource) (WriteOnly)
* **id**: string (ReadOnly)
* **minimumThroughput**: string (ReadOnly, WriteOnly)
* **offerReplacePending**: string (ReadOnly, WriteOnly)
* **throughput**: int (WriteOnly)

## AutoscaleSettingsResource
### Properties
* **autoUpgradePolicy**: [AutoUpgradePolicyResource](#autoupgradepolicyresource) (WriteOnly)
* **maxThroughput**: int (Required, WriteOnly)
* **targetMaxThroughput**: int (ReadOnly, WriteOnly)

## AutoUpgradePolicyResource
### Properties
* **throughputPolicy**: [ThroughputPolicyResource](#throughputpolicyresource) (WriteOnly)

## ThroughputPolicyResource
### Properties
* **incrementPercent**: int (WriteOnly)
* **isEnabled**: bool (WriteOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GremlinDatabaseCreateUpdateProperties
### Properties
* **options**: [CreateUpdateOptions](#createupdateoptions) (Required)
* **resource**: [GremlinDatabaseResource](#gremlindatabaseresource) (Required)

## GremlinDatabaseResource
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **id**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GremlinGraphCreateUpdateProperties
### Properties
* **options**: [CreateUpdateOptions](#createupdateoptions) (Required)
* **resource**: [GremlinGraphResource](#gremlingraphresource) (Required)

## GremlinGraphResource
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **conflictResolutionPolicy**: [ConflictResolutionPolicy](#conflictresolutionpolicy) (WriteOnly)
* **defaultTtl**: int (WriteOnly)
* **id**: string (Required)
* **indexingPolicy**: [IndexingPolicy](#indexingpolicy) (WriteOnly)
* **partitionKey**: [ContainerPartitionKey](#containerpartitionkey) (WriteOnly)
* **uniqueKeyPolicy**: [UniqueKeyPolicy](#uniquekeypolicy) (WriteOnly)

## ConflictResolutionPolicy
### Properties
* **conflictResolutionPath**: string (WriteOnly)
* **conflictResolutionProcedure**: string (WriteOnly)
* **mode**: 'Custom' | 'LastWriterWins' (WriteOnly)

## IndexingPolicy
### Properties
* **automatic**: bool (WriteOnly)
* **compositeIndexes**: [CompositePath](#compositepath)[][] (WriteOnly)
* **excludedPaths**: [ExcludedPath](#excludedpath)[] (WriteOnly)
* **includedPaths**: [IncludedPath](#includedpath)[] (WriteOnly)
* **indexingMode**: 'Consistent' | 'Lazy' | 'None' (WriteOnly)
* **spatialIndexes**: [SpatialSpec](#spatialspec)[] (WriteOnly)

## CompositePath
### Properties
* **order**: 'Ascending' | 'Descending' (WriteOnly)
* **path**: string (WriteOnly)

## ExcludedPath
### Properties
* **path**: string (WriteOnly)

## IncludedPath
### Properties
* **indexes**: [Indexes](#indexes)[] (WriteOnly)
* **path**: string (WriteOnly)

## Indexes
### Properties
* **dataType**: 'LineString' | 'MultiPolygon' | 'Number' | 'Point' | 'Polygon' | 'String' (WriteOnly)
* **kind**: 'Hash' | 'Range' | 'Spatial' (WriteOnly)
* **precision**: int (WriteOnly)

## SpatialSpec
### Properties
* **path**: string (WriteOnly)
* **types**: 'LineString' | 'MultiPolygon' | 'Point' | 'Polygon'[] (WriteOnly)

## ContainerPartitionKey
### Properties
* **kind**: 'Hash' | 'Range' (WriteOnly)
* **paths**: string[] (WriteOnly)
* **version**: int (WriteOnly)

## UniqueKeyPolicy
### Properties
* **uniqueKeys**: [UniqueKey](#uniquekey)[] (WriteOnly)

## UniqueKey
### Properties
* **paths**: string[] (WriteOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MongoDBDatabaseCreateUpdateProperties
### Properties
* **options**: [CreateUpdateOptions](#createupdateoptions) (Required)
* **resource**: [MongoDBDatabaseResource](#mongodbdatabaseresource) (Required)

## MongoDBDatabaseResource
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **id**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MongoDBCollectionCreateUpdateProperties
### Properties
* **options**: [CreateUpdateOptions](#createupdateoptions) (Required)
* **resource**: [MongoDBCollectionResource](#mongodbcollectionresource) (Required)

## MongoDBCollectionResource
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **analyticalStorageTtl**: int (WriteOnly)
* **id**: string (Required)
* **indexes**: [MongoIndex](#mongoindex)[] (WriteOnly)
* **shardKey**: [Dictionary<string,String>](#dictionarystringstring) (WriteOnly)

## MongoIndex
### Properties
* **key**: [MongoIndexKeys](#mongoindexkeys) (WriteOnly)
* **options**: [MongoIndexOptions](#mongoindexoptions) (WriteOnly)

## MongoIndexKeys
### Properties
* **keys**: string[] (WriteOnly)

## MongoIndexOptions
### Properties
* **expireAfterSeconds**: int (WriteOnly)
* **unique**: bool (WriteOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NotebookWorkspaceProperties
### Properties
* **notebookServerEndpoint**: string (ReadOnly)
* **status**: string (ReadOnly)

## SqlDatabaseCreateUpdateProperties
### Properties
* **options**: [CreateUpdateOptions](#createupdateoptions) (Required)
* **resource**: [SqlDatabaseResource](#sqldatabaseresource) (Required)

## SqlDatabaseResource
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **id**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlContainerCreateUpdateProperties
### Properties
* **options**: [CreateUpdateOptions](#createupdateoptions) (Required)
* **resource**: [SqlContainerResource](#sqlcontainerresource) (Required)

## SqlContainerResource
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **conflictResolutionPolicy**: [ConflictResolutionPolicy](#conflictresolutionpolicy) (WriteOnly)
* **defaultTtl**: int (WriteOnly)
* **id**: string (Required)
* **indexingPolicy**: [IndexingPolicy](#indexingpolicy) (WriteOnly)
* **partitionKey**: [ContainerPartitionKey](#containerpartitionkey) (WriteOnly)
* **uniqueKeyPolicy**: [UniqueKeyPolicy](#uniquekeypolicy) (WriteOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlStoredProcedureCreateUpdateProperties
### Properties
* **options**: [CreateUpdateOptions](#createupdateoptions) (Required, WriteOnly)
* **resource**: [SqlStoredProcedureResource](#sqlstoredprocedureresource) (Required)

## SqlStoredProcedureResource
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **body**: string (WriteOnly)
* **id**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlTriggerCreateUpdateProperties
### Properties
* **options**: [CreateUpdateOptions](#createupdateoptions) (Required, WriteOnly)
* **resource**: [SqlTriggerResource](#sqltriggerresource) (Required)

## SqlTriggerResource
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **body**: string (WriteOnly)
* **id**: string (Required)
* **triggerOperation**: 'All' | 'Create' | 'Delete' | 'Replace' | 'Update' (WriteOnly)
* **triggerType**: 'Post' | 'Pre' (WriteOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlUserDefinedFunctionCreateUpdateProperties
### Properties
* **options**: [CreateUpdateOptions](#createupdateoptions) (Required, WriteOnly)
* **resource**: [SqlUserDefinedFunctionResource](#sqluserdefinedfunctionresource) (Required)

## SqlUserDefinedFunctionResource
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **body**: string (WriteOnly)
* **id**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlRoleAssignmentResource
### Properties
* **principalId**: string
* **roleDefinitionId**: string
* **scope**: string

## SqlRoleDefinitionResource
### Properties
* **assignableScopes**: string[]
* **permissions**: [Permission](#permission)[]
* **roleName**: string
* **type**: 'BuiltInRole' | 'CustomRole'

## Permission
### Properties
* **dataActions**: string[]
* **notDataActions**: string[]

## TableCreateUpdateProperties
### Properties
* **options**: [CreateUpdateOptions](#createupdateoptions) (Required)
* **resource**: [TableResource](#tableresource) (Required)

## TableResource
### Properties
* **_colls**: string (ReadOnly)
* **_etag**: string (ReadOnly)
* **_rid**: string (ReadOnly)
* **_ts**: any (ReadOnly)
* **_users**: string (ReadOnly)
* **id**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

