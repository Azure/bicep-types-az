# Microsoft.DataMigration @ 2018-07-15-preview

## Resource Microsoft.DataMigration/services@2018-07-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-15-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DataMigrationServiceProperties](#datamigrationserviceproperties)
* **sku**: [ServiceSku](#servicesku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DataMigration/services' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataMigration/services/projects@2018-07-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProjectProperties](#projectproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DataMigration/services/projects' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataMigration/services/projects/files@2018-07-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-15-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProjectFileProperties](#projectfileproperties)
* **type**: 'Microsoft.DataMigration/services/projects/files' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataMigration/services/projects/tasks@2018-07-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-15-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProjectTaskProperties](#projecttaskproperties)
* **type**: 'Microsoft.DataMigration/services/projects/tasks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataMigration/services/serviceTasks@2018-07-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-15-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProjectTaskProperties](#projecttaskproperties)
* **type**: 'Microsoft.DataMigration/services/serviceTasks' (ReadOnly, DeployTimeConstant)

## DataMigrationServiceProperties
### Properties
* **provisioningState**: 'Accepted' | 'Deleting' | 'Deploying' | 'Failed' | 'FailedToStart' | 'FailedToStop' | 'Starting' | 'Stopped' | 'Stopping' | 'Succeeded' (ReadOnly)
* **publicKey**: string
* **virtualNicId**: string
* **virtualSubnetId**: string (Required)

## ServiceSku
### Properties
* **capacity**: int
* **family**: string
* **name**: string
* **size**: string
* **tier**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProjectProperties
### Properties
* **creationTime**: string (ReadOnly)
* **databasesInfo**: [DatabaseInfo](#databaseinfo)[]
* **provisioningState**: 'Deleting' | 'Succeeded' (ReadOnly)
* **sourceConnectionInfo**: [ConnectionInfo](#connectioninfo)
* **sourcePlatform**: 'MongoDb' | 'MySQL' | 'PostgreSql' | 'SQL' | 'Unknown' (Required)
* **targetConnectionInfo**: [ConnectionInfo](#connectioninfo)
* **targetPlatform**: 'AzureDbForMySql' | 'AzureDbForPostgreSql' | 'MongoDb' | 'SQLDB' | 'SQLMI' | 'Unknown' (Required)

## DatabaseInfo
### Properties
* **sourceDatabaseName**: string (Required)

## ConnectionInfo
* **Discriminator**: type
### Base Properties
* **password**: string
* **userName**: string
### MiSqlConnectionInfo
#### Properties
* **managedInstanceResourceId**: string (Required)
* **password**: string
* **type**: 'MiSqlConnectionInfo' (Required)
* **userName**: string

### MongoDbConnectionInfo
#### Properties
* **connectionString**: string (Required)
* **password**: string
* **type**: 'MongoDbConnectionInfo' (Required)
* **userName**: string

### MySqlConnectionInfo
#### Properties
* **password**: string
* **port**: int (Required)
* **serverName**: string (Required)
* **type**: 'MySqlConnectionInfo' (Required)
* **userName**: string

### OracleConnectionInfo
#### Properties
* **dataSource**: string (Required)
* **password**: string
* **type**: 'OracleConnectionInfo' (Required)
* **userName**: string

### PostgreSqlConnectionInfo
#### Properties
* **databaseName**: string
* **encryptConnection**: bool
* **password**: string
* **port**: int (Required)
* **serverName**: string (Required)
* **trustServerCertificate**: bool
* **type**: 'PostgreSqlConnectionInfo' (Required)
* **userName**: string

### SqlConnectionInfo
#### Properties
* **additionalSettings**: string
* **authentication**: 'ActiveDirectoryIntegrated' | 'ActiveDirectoryPassword' | 'None' | 'SqlAuthentication' | 'WindowsAuthentication'
* **dataSource**: string (Required)
* **encryptConnection**: bool
* **password**: string
* **platform**: 'SqlOnPrem'
* **trustServerCertificate**: bool
* **type**: 'SqlConnectionInfo' (Required)
* **userName**: string


## MiSqlConnectionInfo
### Properties
* **managedInstanceResourceId**: string (Required)
* **password**: string
* **type**: 'MiSqlConnectionInfo' (Required)
* **userName**: string

## MongoDbConnectionInfo
### Properties
* **connectionString**: string (Required)
* **password**: string
* **type**: 'MongoDbConnectionInfo' (Required)
* **userName**: string

## MySqlConnectionInfo
### Properties
* **password**: string
* **port**: int (Required)
* **serverName**: string (Required)
* **type**: 'MySqlConnectionInfo' (Required)
* **userName**: string

## OracleConnectionInfo
### Properties
* **dataSource**: string (Required)
* **password**: string
* **type**: 'OracleConnectionInfo' (Required)
* **userName**: string

## PostgreSqlConnectionInfo
### Properties
* **databaseName**: string
* **encryptConnection**: bool
* **password**: string
* **port**: int (Required)
* **serverName**: string (Required)
* **trustServerCertificate**: bool
* **type**: 'PostgreSqlConnectionInfo' (Required)
* **userName**: string

## SqlConnectionInfo
### Properties
* **additionalSettings**: string
* **authentication**: 'ActiveDirectoryIntegrated' | 'ActiveDirectoryPassword' | 'None' | 'SqlAuthentication' | 'WindowsAuthentication'
* **dataSource**: string (Required)
* **encryptConnection**: bool
* **password**: string
* **platform**: 'SqlOnPrem'
* **trustServerCertificate**: bool
* **type**: 'SqlConnectionInfo' (Required)
* **userName**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProjectFileProperties
### Properties
* **extension**: string
* **filePath**: string
* **lastModified**: string (ReadOnly)
* **mediaType**: string
* **size**: int (ReadOnly)

## ProjectTaskProperties
* **Discriminator**: taskType
### Base Properties
* **clientData**: [Dictionary<string,String>](#dictionarystringstring)
* **commands**: [CommandProperties](#commandproperties)[] (ReadOnly)
* **errors**: [ODataError](#odataerror)[] (ReadOnly)
* **state**: 'Canceled' | 'Failed' | 'FailedInputValidation' | 'Faulted' | 'Queued' | 'Running' | 'Succeeded' | 'Unknown' (ReadOnly)
### Connect.MongoDb
#### Properties
* **input**: [MongoDbConnectionInfo](#mongodbconnectioninfo)
* **output**: [MongoDbClusterInfo](#mongodbclusterinfo)[] (ReadOnly)
* **taskType**: 'Connect.MongoDb' (Required)

### ConnectToSource.MySql
#### Properties
* **input**: [ConnectToSourceMySqlTaskInput](#connecttosourcemysqltaskinput)
* **output**: [ConnectToSourceNonSqlTaskOutput](#connecttosourcenonsqltaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToSource.MySql' (Required)

### ConnectToSource.Oracle.Sync
#### Properties
* **input**: [ConnectToSourceOracleSyncTaskInput](#connecttosourceoraclesynctaskinput)
* **output**: [ConnectToSourceOracleSyncTaskOutput](#connecttosourceoraclesynctaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToSource.Oracle.Sync' (Required)

### ConnectToSource.PostgreSql.Sync
#### Properties
* **input**: [ConnectToSourcePostgreSqlSyncTaskInput](#connecttosourcepostgresqlsynctaskinput)
* **output**: [ConnectToSourcePostgreSqlSyncTaskOutput](#connecttosourcepostgresqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToSource.PostgreSql.Sync' (Required)

### ConnectToSource.SqlServer
#### Properties
* **input**: [ConnectToSourceSqlServerTaskInput](#connecttosourcesqlservertaskinput)
* **output**: [ConnectToSourceSqlServerTaskOutput](#connecttosourcesqlservertaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToSource.SqlServer' (Required)

### ConnectToSource.SqlServer.Sync
#### Properties
* **input**: [ConnectToSourceSqlServerTaskInput](#connecttosourcesqlservertaskinput)
* **output**: [ConnectToSourceSqlServerTaskOutput](#connecttosourcesqlservertaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToSource.SqlServer.Sync' (Required)

### ConnectToTarget.AzureDbForMySql
#### Properties
* **input**: [ConnectToTargetAzureDbForMySqlTaskInput](#connecttotargetazuredbformysqltaskinput)
* **output**: [ConnectToTargetAzureDbForMySqlTaskOutput](#connecttotargetazuredbformysqltaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToTarget.AzureDbForMySql' (Required)

### ConnectToTarget.AzureDbForPostgreSql.Sync
#### Properties
* **input**: [ConnectToTargetAzureDbForPostgreSqlSyncTaskInput](#connecttotargetazuredbforpostgresqlsynctaskinput)
* **output**: [ConnectToTargetAzureDbForPostgreSqlSyncTaskOutput](#connecttotargetazuredbforpostgresqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToTarget.AzureDbForPostgreSql.Sync' (Required)

### ConnectToTarget.AzureSqlDbMI
#### Properties
* **input**: [ConnectToTargetSqlMITaskInput](#connecttotargetsqlmitaskinput)
* **output**: [ConnectToTargetSqlMITaskOutput](#connecttotargetsqlmitaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToTarget.AzureSqlDbMI' (Required)

### ConnectToTarget.AzureSqlDbMI.Sync.LRS
#### Properties
* **input**: [ConnectToTargetSqlMISyncTaskInput](#connecttotargetsqlmisynctaskinput)
* **output**: [ConnectToTargetSqlMISyncTaskOutput](#connecttotargetsqlmisynctaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToTarget.AzureSqlDbMI.Sync.LRS' (Required)

### ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync
#### Properties
* **input**: [ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInput](#connecttotargetoracleazuredbforpostgresqlsynctaskinput)
* **output**: [ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutput](#connecttotargetoracleazuredbforpostgresqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync' (Required)

### ConnectToTarget.SqlDb
#### Properties
* **input**: [ConnectToTargetSqlDbTaskInput](#connecttotargetsqldbtaskinput)
* **output**: [ConnectToTargetSqlDbTaskOutput](#connecttotargetsqldbtaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToTarget.SqlDb' (Required)

### ConnectToTarget.SqlDb.Sync
#### Properties
* **input**: [ConnectToTargetSqlSqlDbSyncTaskInput](#connecttotargetsqlsqldbsynctaskinput)
* **output**: [ConnectToTargetSqlDbTaskOutput](#connecttotargetsqldbtaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToTarget.SqlDb.Sync' (Required)

### GetTDECertificates.Sql
#### Properties
* **input**: [GetTdeCertificatesSqlTaskInput](#gettdecertificatessqltaskinput)
* **output**: [GetTdeCertificatesSqlTaskOutput](#gettdecertificatessqltaskoutput)[] (ReadOnly)
* **taskType**: 'GetTDECertificates.Sql' (Required)

### GetUserTables.AzureSqlDb.Sync
#### Properties
* **input**: [GetUserTablesSqlSyncTaskInput](#getusertablessqlsynctaskinput)
* **output**: [GetUserTablesSqlSyncTaskOutput](#getusertablessqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'GetUserTables.AzureSqlDb.Sync' (Required)

### GetUserTables.Sql
#### Properties
* **input**: [GetUserTablesSqlTaskInput](#getusertablessqltaskinput)
* **output**: [GetUserTablesSqlTaskOutput](#getusertablessqltaskoutput)[] (ReadOnly)
* **taskType**: 'GetUserTables.Sql' (Required)

### GetUserTablesOracle
#### Properties
* **input**: [GetUserTablesOracleTaskInput](#getusertablesoracletaskinput)
* **output**: [GetUserTablesOracleTaskOutput](#getusertablesoracletaskoutput)[] (ReadOnly)
* **taskType**: 'GetUserTablesOracle' (Required)

### GetUserTablesPostgreSql
#### Properties
* **input**: [GetUserTablesPostgreSqlTaskInput](#getusertablespostgresqltaskinput)
* **output**: [GetUserTablesPostgreSqlTaskOutput](#getusertablespostgresqltaskoutput)[] (ReadOnly)
* **taskType**: 'GetUserTablesPostgreSql' (Required)

### Migrate.MongoDb
#### Properties
* **input**: [MongoDbMigrationSettings](#mongodbmigrationsettings)
* **output**: [MongoDbProgress](#mongodbprogress)[] (ReadOnly)
* **taskType**: 'Migrate.MongoDb' (Required)

### Migrate.MySql.AzureDbForMySql.Sync
#### Properties
* **input**: [MigrateMySqlAzureDbForMySqlSyncTaskInput](#migratemysqlazuredbformysqlsynctaskinput)
* **output**: [MigrateMySqlAzureDbForMySqlSyncTaskOutput](#migratemysqlazuredbformysqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.MySql.AzureDbForMySql.Sync' (Required)

### Migrate.Oracle.AzureDbForPostgreSql.Sync
#### Properties
* **input**: [MigrateOracleAzureDbPostgreSqlSyncTaskInput](#migrateoracleazuredbpostgresqlsynctaskinput)
* **output**: [MigrateOracleAzureDbPostgreSqlSyncTaskOutput](#migrateoracleazuredbpostgresqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.Oracle.AzureDbForPostgreSql.Sync' (Required)

### Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2
#### Properties
* **input**: [MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput](#migratepostgresqlazuredbforpostgresqlsynctaskinput)
* **output**: [MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput](#migratepostgresqlazuredbforpostgresqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2' (Required)

### Migrate.SqlServer.AzureSqlDb.Sync
#### Properties
* **input**: [MigrateSqlServerSqlDbSyncTaskInput](#migratesqlserversqldbsynctaskinput)
* **output**: [MigrateSqlServerSqlDbSyncTaskOutput](#migratesqlserversqldbsynctaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.AzureSqlDb.Sync' (Required)

### Migrate.SqlServer.AzureSqlDbMI
#### Properties
* **input**: [MigrateSqlServerSqlMITaskInput](#migratesqlserversqlmitaskinput)
* **output**: [MigrateSqlServerSqlMITaskOutput](#migratesqlserversqlmitaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.AzureSqlDbMI' (Required)

### Migrate.SqlServer.AzureSqlDbMI.Sync.LRS
#### Properties
* **input**: [MigrateSqlServerSqlMISyncTaskInput](#migratesqlserversqlmisynctaskinput)
* **output**: [MigrateSqlServerSqlMISyncTaskOutput](#migratesqlserversqlmisynctaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.AzureSqlDbMI.Sync.LRS' (Required)

### Migrate.SqlServer.SqlDb
#### Properties
* **input**: [MigrateSqlServerSqlDbTaskInput](#migratesqlserversqldbtaskinput)
* **output**: [MigrateSqlServerSqlDbTaskOutput](#migratesqlserversqldbtaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.SqlDb' (Required)

### Migrate.Ssis
#### Properties
* **input**: [MigrateSsisTaskInput](#migratessistaskinput)
* **output**: [MigrateSsisTaskOutput](#migratessistaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.Ssis' (Required)

### MigrateSchemaSqlServerSqlDb
#### Properties
* **input**: [MigrateSchemaSqlServerSqlDbTaskInput](#migrateschemasqlserversqldbtaskinput)
* **output**: [MigrateSchemaSqlServerSqlDbTaskOutput](#migrateschemasqlserversqldbtaskoutput)[] (ReadOnly)
* **taskType**: 'MigrateSchemaSqlServerSqlDb' (Required)

### Service.Check.OCI
#### Properties
* **input**: [CheckOCIDriverTaskInput](#checkocidrivertaskinput)
* **output**: [CheckOCIDriverTaskOutput](#checkocidrivertaskoutput)[] (ReadOnly)
* **taskType**: 'Service.Check.OCI' (Required)

### Service.Install.OCI
#### Properties
* **input**: [InstallOCIDriverTaskInput](#installocidrivertaskinput)
* **output**: [InstallOCIDriverTaskOutput](#installocidrivertaskoutput)[] (ReadOnly)
* **taskType**: 'Service.Install.OCI' (Required)

### Service.Upload.OCI
#### Properties
* **input**: [UploadOCIDriverTaskInput](#uploadocidrivertaskinput)
* **output**: [UploadOCIDriverTaskOutput](#uploadocidrivertaskoutput)[] (ReadOnly)
* **taskType**: 'Service.Upload.OCI' (Required)

### Validate.MongoDb
#### Properties
* **input**: [MongoDbMigrationSettings](#mongodbmigrationsettings)
* **output**: [Migration](#migration)[] (ReadOnly)
* **taskType**: 'Validate.MongoDb' (Required)

### Validate.Oracle.AzureDbPostgreSql.Sync
#### Properties
* **input**: [MigrateOracleAzureDbPostgreSqlSyncTaskInput](#migrateoracleazuredbpostgresqlsynctaskinput)
* **output**: [ValidateOracleAzureDbPostgreSqlSyncTaskOutput](#validateoracleazuredbpostgresqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'Validate.Oracle.AzureDbPostgreSql.Sync' (Required)

### ValidateMigrationInput.SqlServer.AzureSqlDbMI
#### Properties
* **input**: [ValidateMigrationInputSqlServerSqlMITaskInput](#validatemigrationinputsqlserversqlmitaskinput)
* **output**: [ValidateMigrationInputSqlServerSqlMITaskOutput](#validatemigrationinputsqlserversqlmitaskoutput)[] (ReadOnly)
* **taskType**: 'ValidateMigrationInput.SqlServer.AzureSqlDbMI' (Required)

### ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS
#### Properties
* **input**: [ValidateMigrationInputSqlServerSqlMISyncTaskInput](#validatemigrationinputsqlserversqlmisynctaskinput)
* **output**: [ValidateMigrationInputSqlServerSqlMISyncTaskOutput](#validatemigrationinputsqlserversqlmisynctaskoutput)[] (ReadOnly)
* **taskType**: 'ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS' (Required)

### ValidateMigrationInput.SqlServer.SqlDb.Sync
#### Properties
* **input**: [ValidateSyncMigrationInputSqlServerTaskInput](#validatesyncmigrationinputsqlservertaskinput)
* **output**: [ValidateSyncMigrationInputSqlServerTaskOutput](#validatesyncmigrationinputsqlservertaskoutput)[] (ReadOnly)
* **taskType**: 'ValidateMigrationInput.SqlServer.SqlDb.Sync' (Required)


## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CommandProperties
* **Discriminator**: commandType
### Base Properties
* **errors**: [ODataError](#odataerror)[] (ReadOnly)
* **state**: 'Accepted' | 'Failed' | 'Running' | 'Succeeded' | 'Unknown' (ReadOnly)
### cancel
#### Properties
* **commandType**: 'cancel' (Required)
* **input**: [MongoDbCommandInput](#mongodbcommandinput)

### finish
#### Properties
* **commandType**: 'finish' (Required)
* **input**: [MongoDbFinishCommandInput](#mongodbfinishcommandinput)

### Migrate.SqlServer.AzureDbSqlMi.Complete
#### Properties
* **commandType**: 'Migrate.SqlServer.AzureDbSqlMi.Complete' (Required)
* **input**: [MigrateMISyncCompleteCommandInput](#migratemisynccompletecommandinput)
* **output**: [MigrateMISyncCompleteCommandOutput](#migratemisynccompletecommandoutput) (ReadOnly)

### Migrate.Sync.Complete.Database
#### Properties
* **commandType**: 'Migrate.Sync.Complete.Database' (Required)
* **input**: [MigrateSyncCompleteCommandInput](#migratesynccompletecommandinput)
* **output**: [MigrateSyncCompleteCommandOutput](#migratesynccompletecommandoutput) (ReadOnly)

### restart
#### Properties
* **commandType**: 'restart' (Required)
* **input**: [MongoDbCommandInput](#mongodbcommandinput)


## ODataError
### Properties
* **code**: string
* **details**: [ODataError](#odataerror)[]
* **message**: string

## cancel
### Properties
* **commandType**: 'cancel' (Required)
* **input**: [MongoDbCommandInput](#mongodbcommandinput)

## MongoDbCommandInput
### Properties
* **objectName**: string

## finish
### Properties
* **commandType**: 'finish' (Required)
* **input**: [MongoDbFinishCommandInput](#mongodbfinishcommandinput)

## MongoDbFinishCommandInput
### Properties
* **immediate**: bool (Required)
* **objectName**: string

## Migrate.SqlServer.AzureDbSqlMi.Complete
### Properties
* **commandType**: 'Migrate.SqlServer.AzureDbSqlMi.Complete' (Required)
* **input**: [MigrateMISyncCompleteCommandInput](#migratemisynccompletecommandinput)
* **output**: [MigrateMISyncCompleteCommandOutput](#migratemisynccompletecommandoutput) (ReadOnly)

## MigrateMISyncCompleteCommandInput
### Properties
* **sourceDatabaseName**: string (Required)

## MigrateMISyncCompleteCommandOutput
### Properties
* **errors**: [ReportableException](#reportableexception)[]

## ReportableException
### Properties
* **actionableMessage**: string
* **filePath**: string
* **hResult**: int
* **lineNumber**: string
* **message**: string
* **stackTrace**: string

## Migrate.Sync.Complete.Database
### Properties
* **commandType**: 'Migrate.Sync.Complete.Database' (Required)
* **input**: [MigrateSyncCompleteCommandInput](#migratesynccompletecommandinput)
* **output**: [MigrateSyncCompleteCommandOutput](#migratesynccompletecommandoutput) (ReadOnly)

## MigrateSyncCompleteCommandInput
### Properties
* **commitTimeStamp**: string
* **databaseName**: string (Required)

## MigrateSyncCompleteCommandOutput
### Properties
* **errors**: [ReportableException](#reportableexception)[] (ReadOnly)
* **id**: string (ReadOnly)

## restart
### Properties
* **commandType**: 'restart' (Required)
* **input**: [MongoDbCommandInput](#mongodbcommandinput)

## Connect.MongoDb
### Properties
* **input**: [MongoDbConnectionInfo](#mongodbconnectioninfo)
* **output**: [MongoDbClusterInfo](#mongodbclusterinfo)[] (ReadOnly)
* **taskType**: 'Connect.MongoDb' (Required)

## MongoDbClusterInfo
### Properties
* **databases**: [MongoDbDatabaseInfo](#mongodbdatabaseinfo)[] (Required)
* **supportsSharding**: bool (Required)
* **type**: 'BlobContainer' | 'CosmosDb' | 'MongoDb' (Required)
* **version**: string (Required)

## MongoDbDatabaseInfo
### Properties
* **averageDocumentSize**: int (Required)
* **collections**: [MongoDbCollectionInfo](#mongodbcollectioninfo)[] (Required)
* **dataSize**: int (Required)
* **documentCount**: int (Required)
* **name**: string (Required)
* **qualifiedName**: string (Required)
* **supportsSharding**: bool (Required)

## MongoDbCollectionInfo
### Properties
* **averageDocumentSize**: int (Required)
* **databaseName**: string (Required)
* **dataSize**: int (Required)
* **documentCount**: int (Required)
* **isCapped**: bool (Required)
* **isSystemCollection**: bool (Required)
* **isView**: bool (Required)
* **name**: string (Required)
* **qualifiedName**: string (Required)
* **shardKey**: [MongoDbShardKeyInfo](#mongodbshardkeyinfo)
* **supportsSharding**: bool (Required)
* **viewOf**: string

## MongoDbShardKeyInfo
### Properties
* **fields**: [MongoDbShardKeyField](#mongodbshardkeyfield)[] (Required)
* **isUnique**: bool (Required)

## MongoDbShardKeyField
### Properties
* **name**: string (Required)
* **order**: 'Forward' | 'Hashed' | 'Reverse' (Required)

## ConnectToSource.MySql
### Properties
* **input**: [ConnectToSourceMySqlTaskInput](#connecttosourcemysqltaskinput)
* **output**: [ConnectToSourceNonSqlTaskOutput](#connecttosourcenonsqltaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToSource.MySql' (Required)

## ConnectToSourceMySqlTaskInput
### Properties
* **checkPermissionsGroup**: 'Default' | 'MigrationFromMySQLToAzureDBForMySQL' | 'MigrationFromSqlServerToAzureDB' | 'MigrationFromSqlServerToAzureMI'
* **sourceConnectionInfo**: [MySqlConnectionInfo](#mysqlconnectioninfo) (Required)
* **targetPlatform**: 'AzureDbForMySQL' | 'SqlServer'

## ConnectToSourceNonSqlTaskOutput
### Properties
* **databases**: string[] (ReadOnly)
* **id**: string (ReadOnly)
* **serverProperties**: [ServerProperties](#serverproperties) (ReadOnly)
* **sourceServerBrandVersion**: string (ReadOnly)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

## ServerProperties
### Properties
* **serverDatabaseCount**: int (ReadOnly)
* **serverEdition**: string (ReadOnly)
* **serverName**: string (ReadOnly)
* **serverOperatingSystemVersion**: string (ReadOnly)
* **serverPlatform**: string (ReadOnly)
* **serverVersion**: string (ReadOnly)

## ConnectToSource.Oracle.Sync
### Properties
* **input**: [ConnectToSourceOracleSyncTaskInput](#connecttosourceoraclesynctaskinput)
* **output**: [ConnectToSourceOracleSyncTaskOutput](#connecttosourceoraclesynctaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToSource.Oracle.Sync' (Required)

## ConnectToSourceOracleSyncTaskInput
### Properties
* **sourceConnectionInfo**: [OracleConnectionInfo](#oracleconnectioninfo) (Required)

## ConnectToSourceOracleSyncTaskOutput
### Properties
* **databases**: string[] (ReadOnly)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

## ConnectToSource.PostgreSql.Sync
### Properties
* **input**: [ConnectToSourcePostgreSqlSyncTaskInput](#connecttosourcepostgresqlsynctaskinput)
* **output**: [ConnectToSourcePostgreSqlSyncTaskOutput](#connecttosourcepostgresqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToSource.PostgreSql.Sync' (Required)

## ConnectToSourcePostgreSqlSyncTaskInput
### Properties
* **sourceConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required)

## ConnectToSourcePostgreSqlSyncTaskOutput
### Properties
* **databases**: string[] (ReadOnly)
* **id**: string (ReadOnly)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

## ConnectToSource.SqlServer
### Properties
* **input**: [ConnectToSourceSqlServerTaskInput](#connecttosourcesqlservertaskinput)
* **output**: [ConnectToSourceSqlServerTaskOutput](#connecttosourcesqlservertaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToSource.SqlServer' (Required)

## ConnectToSourceSqlServerTaskInput
### Properties
* **checkPermissionsGroup**: 'Default' | 'MigrationFromMySQLToAzureDBForMySQL' | 'MigrationFromSqlServerToAzureDB' | 'MigrationFromSqlServerToAzureMI'
* **collectAgentJobs**: bool
* **collectDatabases**: bool
* **collectLogins**: bool
* **collectTdeCertificateInfo**: bool
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)
* **validateSsisCatalogOnly**: bool

## ConnectToSourceSqlServerTaskOutput
* **Discriminator**: resultType
### Base Properties
* **id**: string (ReadOnly)
### AgentJobLevelOutput
#### Properties
* **isEnabled**: bool (ReadOnly)
* **jobCategory**: string (ReadOnly)
* **jobOwner**: string (ReadOnly)
* **lastExecutedOn**: string (ReadOnly)
* **migrationEligibility**: [MigrationEligibilityInfo](#migrationeligibilityinfo) (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'AgentJobLevelOutput' (Required)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

### DatabaseLevelOutput
#### Properties
* **databaseErrorResultPrefix**: string (ReadOnly)
* **databaseName**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **fileId**: string (ReadOnly)
* **numberOfFailedOperations**: int (ReadOnly)
* **numberOfSuccessfulOperations**: int (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **schemaErrorResultPrefix**: string (ReadOnly)
* **stage**: 'CollectingObjects' | 'Completed' | 'CompletedWithWarnings' | 'DeployingSchema' | 'DownloadingScript' | 'Failed' | 'GeneratingScript' | 'NotStarted' | 'UploadingScript' | 'ValidatingInputs' (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

### LoginLevelOutput
#### Properties
* **defaultDatabase**: string (ReadOnly)
* **isEnabled**: bool (ReadOnly)
* **loginType**: 'AsymmetricKey' | 'Certificate' | 'ExternalGroup' | 'ExternalUser' | 'SqlLogin' | 'WindowsGroup' | 'WindowsUser' (ReadOnly)
* **migrationEligibility**: [MigrationEligibilityInfo](#migrationeligibilityinfo) (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'LoginLevelOutput' (Required)

### TaskLevelOutput
#### Properties
* **agentJobs**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **databases**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **databaseTdeCertificateMapping**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **logins**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **resultType**: 'TaskLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)


## AgentJobLevelOutput
### Properties
* **isEnabled**: bool (ReadOnly)
* **jobCategory**: string (ReadOnly)
* **jobOwner**: string (ReadOnly)
* **lastExecutedOn**: string (ReadOnly)
* **migrationEligibility**: [MigrationEligibilityInfo](#migrationeligibilityinfo) (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'AgentJobLevelOutput' (Required)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

## MigrationEligibilityInfo
### Properties
* **isEligibleForMigration**: bool (ReadOnly)
* **validationMessages**: string[] (ReadOnly)

## DatabaseLevelOutput
### Properties
* **databaseErrorResultPrefix**: string (ReadOnly)
* **databaseName**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **fileId**: string (ReadOnly)
* **numberOfFailedOperations**: int (ReadOnly)
* **numberOfSuccessfulOperations**: int (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **schemaErrorResultPrefix**: string (ReadOnly)
* **stage**: 'CollectingObjects' | 'Completed' | 'CompletedWithWarnings' | 'DeployingSchema' | 'DownloadingScript' | 'Failed' | 'GeneratingScript' | 'NotStarted' | 'UploadingScript' | 'ValidatingInputs' (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

## LoginLevelOutput
### Properties
* **defaultDatabase**: string (ReadOnly)
* **isEnabled**: bool (ReadOnly)
* **loginType**: 'AsymmetricKey' | 'Certificate' | 'ExternalGroup' | 'ExternalUser' | 'SqlLogin' | 'WindowsGroup' | 'WindowsUser' (ReadOnly)
* **migrationEligibility**: [MigrationEligibilityInfo](#migrationeligibilityinfo) (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'LoginLevelOutput' (Required)

## TaskLevelOutput
### Properties
* **agentJobs**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **databases**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **databaseTdeCertificateMapping**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **logins**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **resultType**: 'TaskLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

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

## ConnectToSource.SqlServer.Sync
### Properties
* **input**: [ConnectToSourceSqlServerTaskInput](#connecttosourcesqlservertaskinput)
* **output**: [ConnectToSourceSqlServerTaskOutput](#connecttosourcesqlservertaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToSource.SqlServer.Sync' (Required)

## ConnectToTarget.AzureDbForMySql
### Properties
* **input**: [ConnectToTargetAzureDbForMySqlTaskInput](#connecttotargetazuredbformysqltaskinput)
* **output**: [ConnectToTargetAzureDbForMySqlTaskOutput](#connecttotargetazuredbformysqltaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToTarget.AzureDbForMySql' (Required)

## ConnectToTargetAzureDbForMySqlTaskInput
### Properties
* **sourceConnectionInfo**: [MySqlConnectionInfo](#mysqlconnectioninfo) (Required)
* **targetConnectionInfo**: [MySqlConnectionInfo](#mysqlconnectioninfo) (Required)

## ConnectToTargetAzureDbForMySqlTaskOutput
### Properties
* **databases**: string[] (ReadOnly)
* **id**: string (ReadOnly)
* **serverVersion**: string (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

## ConnectToTarget.AzureDbForPostgreSql.Sync
### Properties
* **input**: [ConnectToTargetAzureDbForPostgreSqlSyncTaskInput](#connecttotargetazuredbforpostgresqlsynctaskinput)
* **output**: [ConnectToTargetAzureDbForPostgreSqlSyncTaskOutput](#connecttotargetazuredbforpostgresqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToTarget.AzureDbForPostgreSql.Sync' (Required)

## ConnectToTargetAzureDbForPostgreSqlSyncTaskInput
### Properties
* **sourceConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required)
* **targetConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required)

## ConnectToTargetAzureDbForPostgreSqlSyncTaskOutput
### Properties
* **databases**: string[] (ReadOnly)
* **id**: string (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

## ConnectToTarget.AzureSqlDbMI
### Properties
* **input**: [ConnectToTargetSqlMITaskInput](#connecttotargetsqlmitaskinput)
* **output**: [ConnectToTargetSqlMITaskOutput](#connecttotargetsqlmitaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToTarget.AzureSqlDbMI' (Required)

## ConnectToTargetSqlMITaskInput
### Properties
* **collectAgentJobs**: bool
* **collectLogins**: bool
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)
* **validateSsisCatalogOnly**: bool

## ConnectToTargetSqlMITaskOutput
### Properties
* **agentJobs**: string[] (ReadOnly)
* **id**: string (ReadOnly)
* **logins**: string[] (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

## ConnectToTarget.AzureSqlDbMI.Sync.LRS
### Properties
* **input**: [ConnectToTargetSqlMISyncTaskInput](#connecttotargetsqlmisynctaskinput)
* **output**: [ConnectToTargetSqlMISyncTaskOutput](#connecttotargetsqlmisynctaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToTarget.AzureSqlDbMI.Sync.LRS' (Required)

## ConnectToTargetSqlMISyncTaskInput
### Properties
* **azureApp**: [AzureActiveDirectoryApp](#azureactivedirectoryapp) (Required)
* **targetConnectionInfo**: [MiSqlConnectionInfo](#misqlconnectioninfo) (Required)

## AzureActiveDirectoryApp
### Properties
* **appKey**: string (Required)
* **applicationId**: string (Required)
* **tenantId**: string (Required)

## ConnectToTargetSqlMISyncTaskOutput
### Properties
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

## ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync
### Properties
* **input**: [ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInput](#connecttotargetoracleazuredbforpostgresqlsynctaskinput)
* **output**: [ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutput](#connecttotargetoracleazuredbforpostgresqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync' (Required)

## ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInput
### Properties
* **targetConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required)

## ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutput
### Properties
* **databases**: string[] (ReadOnly)
* **databaseSchemaMap**: [schemas:160_databaseSchemaMapItem](#schemas160databaseschemamapitem)[]
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

## schemas:160_databaseSchemaMapItem
### Properties
* **database**: string
* **schemas**: string[]

## ConnectToTarget.SqlDb
### Properties
* **input**: [ConnectToTargetSqlDbTaskInput](#connecttotargetsqldbtaskinput)
* **output**: [ConnectToTargetSqlDbTaskOutput](#connecttotargetsqldbtaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToTarget.SqlDb' (Required)

## ConnectToTargetSqlDbTaskInput
### Properties
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)

## ConnectToTargetSqlDbTaskOutput
### Properties
* **databases**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **id**: string (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConnectToTarget.SqlDb.Sync
### Properties
* **input**: [ConnectToTargetSqlSqlDbSyncTaskInput](#connecttotargetsqlsqldbsynctaskinput)
* **output**: [ConnectToTargetSqlDbTaskOutput](#connecttotargetsqldbtaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToTarget.SqlDb.Sync' (Required)

## ConnectToTargetSqlSqlDbSyncTaskInput
### Properties
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)

## GetTDECertificates.Sql
### Properties
* **input**: [GetTdeCertificatesSqlTaskInput](#gettdecertificatessqltaskinput)
* **output**: [GetTdeCertificatesSqlTaskOutput](#gettdecertificatessqltaskoutput)[] (ReadOnly)
* **taskType**: 'GetTDECertificates.Sql' (Required)

## GetTdeCertificatesSqlTaskInput
### Properties
* **backupFileShare**: [FileShare](#fileshare) (Required)
* **connectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)
* **selectedCertificates**: [SelectedCertificateInput](#selectedcertificateinput)[] (Required)

## FileShare
### Properties
* **password**: string
* **path**: string (Required)
* **userName**: string

## SelectedCertificateInput
### Properties
* **certificateName**: string (Required)
* **password**: string (Required)

## GetTdeCertificatesSqlTaskOutput
### Properties
* **base64EncodedCertificates**: [Dictionary<string,IList<String>>](#dictionarystringiliststring) (ReadOnly)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

## Dictionary<string,IList<String>>
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

## GetUserTables.AzureSqlDb.Sync
### Properties
* **input**: [GetUserTablesSqlSyncTaskInput](#getusertablessqlsynctaskinput)
* **output**: [GetUserTablesSqlSyncTaskOutput](#getusertablessqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'GetUserTables.AzureSqlDb.Sync' (Required)

## GetUserTablesSqlSyncTaskInput
### Properties
* **selectedSourceDatabases**: string[] (Required)
* **selectedTargetDatabases**: string[] (Required)
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)

## GetUserTablesSqlSyncTaskOutput
### Properties
* **databasesToSourceTables**: [Dictionary<string,IList<DatabaseTable>>](#dictionarystringilistdatabasetable) (ReadOnly)
* **databasesToTargetTables**: [Dictionary<string,IList<DatabaseTable>>](#dictionarystringilistdatabasetable) (ReadOnly)
* **tableValidationErrors**: [Dictionary<string,IList<String>>](#dictionarystringiliststring) (ReadOnly)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

## Dictionary<string,IList<DatabaseTable>>
### Properties
### Additional Properties
* **Additional Properties Type**: [DatabaseTable](#databasetable)[]

## DatabaseTable
### Properties
* **hasRows**: bool (ReadOnly)
* **name**: string (ReadOnly)

## Dictionary<string,IList<DatabaseTable>>
### Properties
### Additional Properties
* **Additional Properties Type**: [DatabaseTable](#databasetable)[]

## Dictionary<string,IList<String>>
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

## GetUserTables.Sql
### Properties
* **input**: [GetUserTablesSqlTaskInput](#getusertablessqltaskinput)
* **output**: [GetUserTablesSqlTaskOutput](#getusertablessqltaskoutput)[] (ReadOnly)
* **taskType**: 'GetUserTables.Sql' (Required)

## GetUserTablesSqlTaskInput
### Properties
* **connectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)
* **selectedDatabases**: string[] (Required)

## GetUserTablesSqlTaskOutput
### Properties
* **databasesToTables**: [Dictionary<string,IList<DatabaseTable>>](#dictionarystringilistdatabasetable) (ReadOnly)
* **id**: string (ReadOnly)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

## Dictionary<string,IList<DatabaseTable>>
### Properties
### Additional Properties
* **Additional Properties Type**: [DatabaseTable](#databasetable)[]

## GetUserTablesOracle
### Properties
* **input**: [GetUserTablesOracleTaskInput](#getusertablesoracletaskinput)
* **output**: [GetUserTablesOracleTaskOutput](#getusertablesoracletaskoutput)[] (ReadOnly)
* **taskType**: 'GetUserTablesOracle' (Required)

## GetUserTablesOracleTaskInput
### Properties
* **connectionInfo**: [OracleConnectionInfo](#oracleconnectioninfo) (Required)
* **selectedSchemas**: string[] (Required)

## GetUserTablesOracleTaskOutput
### Properties
* **schemaName**: string (ReadOnly)
* **tables**: [DatabaseTable](#databasetable)[] (ReadOnly)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

## GetUserTablesPostgreSql
### Properties
* **input**: [GetUserTablesPostgreSqlTaskInput](#getusertablespostgresqltaskinput)
* **output**: [GetUserTablesPostgreSqlTaskOutput](#getusertablespostgresqltaskoutput)[] (ReadOnly)
* **taskType**: 'GetUserTablesPostgreSql' (Required)

## GetUserTablesPostgreSqlTaskInput
### Properties
* **connectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required)
* **selectedDatabases**: string[] (Required)

## GetUserTablesPostgreSqlTaskOutput
### Properties
* **databaseName**: string (ReadOnly)
* **tables**: [DatabaseTable](#databasetable)[] (ReadOnly)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

## Migrate.MongoDb
### Properties
* **input**: [MongoDbMigrationSettings](#mongodbmigrationsettings)
* **output**: [MongoDbProgress](#mongodbprogress)[] (ReadOnly)
* **taskType**: 'Migrate.MongoDb' (Required)

## MongoDbMigrationSettings
### Properties
* **boostRUs**: int
* **databases**: [Dictionary<string,MongoDbDatabaseSettings>](#dictionarystringmongodbdatabasesettings) (Required)
* **replication**: 'Continuous' | 'Disabled' | 'OneTime'
* **source**: [MongoDbConnectionInfo](#mongodbconnectioninfo) (Required)
* **target**: [MongoDbConnectionInfo](#mongodbconnectioninfo) (Required)
* **throttling**: [MongoDbThrottlingSettings](#mongodbthrottlingsettings)

## Dictionary<string,MongoDbDatabaseSettings>
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbDatabaseSettings](#mongodbdatabasesettings)

## MongoDbDatabaseSettings
### Properties
* **collections**: [Dictionary<string,MongoDbCollectionSettings>](#dictionarystringmongodbcollectionsettings) (Required)
* **targetRUs**: int

## Dictionary<string,MongoDbCollectionSettings>
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbCollectionSettings](#mongodbcollectionsettings)

## MongoDbCollectionSettings
### Properties
* **canDelete**: bool
* **shardKey**: [MongoDbShardKeySetting](#mongodbshardkeysetting)
* **targetRUs**: int

## MongoDbShardKeySetting
### Properties
* **fields**: [MongoDbShardKeyField](#mongodbshardkeyfield)[] (Required)
* **isUnique**: bool (Required)

## MongoDbThrottlingSettings
### Properties
* **maxParallelism**: int
* **minFreeCpu**: int
* **minFreeMemoryMb**: int

## MongoDbProgress
* **Discriminator**: resultType
### Base Properties
* **bytesCopied**: int (Required)
* **documentsCopied**: int (Required)
* **elapsedTime**: string (Required)
* **errors**: [Dictionary<string,MongoDbError>](#dictionarystringmongodberror) (Required)
* **eventsPending**: int (Required)
* **eventsReplayed**: int (Required)
* **lastEventTime**: string
* **lastReplayTime**: string
* **name**: string
* **qualifiedName**: string
* **state**: 'Canceled' | 'Complete' | 'Copying' | 'Failed' | 'Finalizing' | 'Initializing' | 'InitialReplay' | 'NotStarted' | 'Replaying' | 'Restarting' | 'ValidatingInput' (Required)
* **totalBytes**: int (Required)
* **totalDocuments**: int (Required)
### Collection
#### Properties
* **resultType**: 'Collection' (Required)

### Database
#### Properties
* **collections**: [Dictionary<string,MongoDbCollectionProgress>](#dictionarystringmongodbcollectionprogress)
* **resultType**: 'Database' (Required)

### Migration
#### Properties
* **databases**: [Dictionary<string,MongoDbDatabaseProgress>](#dictionarystringmongodbdatabaseprogress)
* **resultType**: 'Migration' (Required)


## Dictionary<string,MongoDbError>
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbError](#mongodberror)

## MongoDbError
### Properties
* **code**: string
* **count**: int
* **message**: string
* **type**: 'Error' | 'ValidationError' | 'Warning'

## Collection
### Properties
* **resultType**: 'Collection' (Required)

## Database
### Properties
* **collections**: [Dictionary<string,MongoDbCollectionProgress>](#dictionarystringmongodbcollectionprogress)
* **resultType**: 'Database' (Required)

## Dictionary<string,MongoDbCollectionProgress>
### Properties
### Additional Properties
* **Additional Properties Type**: [Collection](#collection)

## Migration
### Properties
* **databases**: [Dictionary<string,MongoDbDatabaseProgress>](#dictionarystringmongodbdatabaseprogress)
* **resultType**: 'Migration' (Required)

## Dictionary<string,MongoDbDatabaseProgress>
### Properties
### Additional Properties
* **Additional Properties Type**: [Database](#database)

## Migrate.MySql.AzureDbForMySql.Sync
### Properties
* **input**: [MigrateMySqlAzureDbForMySqlSyncTaskInput](#migratemysqlazuredbformysqlsynctaskinput)
* **output**: [MigrateMySqlAzureDbForMySqlSyncTaskOutput](#migratemysqlazuredbformysqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.MySql.AzureDbForMySql.Sync' (Required)

## MigrateMySqlAzureDbForMySqlSyncTaskInput
### Properties
* **selectedDatabases**: [MigrateMySqlAzureDbForMySqlSyncDatabaseInput](#migratemysqlazuredbformysqlsyncdatabaseinput)[] (Required)
* **sourceConnectionInfo**: [MySqlConnectionInfo](#mysqlconnectioninfo) (Required)
* **targetConnectionInfo**: [MySqlConnectionInfo](#mysqlconnectioninfo) (Required)

## MigrateMySqlAzureDbForMySqlSyncDatabaseInput
### Properties
* **migrationSetting**: [Dictionary<string,String>](#dictionarystringstring)
* **name**: string
* **sourceSetting**: [Dictionary<string,String>](#dictionarystringstring)
* **tableMap**: [Dictionary<string,String>](#dictionarystringstring)
* **targetDatabaseName**: string
* **targetSetting**: [Dictionary<string,String>](#dictionarystringstring)

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

## MigrateMySqlAzureDbForMySqlSyncTaskOutput
* **Discriminator**: resultType
### Base Properties
* **id**: string (ReadOnly)
### DatabaseLevelErrorOutput
#### Properties
* **errorMessage**: string
* **events**: [SyncMigrationDatabaseErrorEvent](#syncmigrationdatabaseerrorevent)[]
* **resultType**: 'DatabaseLevelErrorOutput' (Required)

### DatabaseLevelOutput
#### Properties
* **databaseErrorResultPrefix**: string (ReadOnly)
* **databaseName**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **fileId**: string (ReadOnly)
* **numberOfFailedOperations**: int (ReadOnly)
* **numberOfSuccessfulOperations**: int (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **schemaErrorResultPrefix**: string (ReadOnly)
* **stage**: 'CollectingObjects' | 'Completed' | 'CompletedWithWarnings' | 'DeployingSchema' | 'DownloadingScript' | 'Failed' | 'GeneratingScript' | 'NotStarted' | 'UploadingScript' | 'ValidatingInputs' (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

### ErrorOutput
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

### MigrationLevelOutput
#### Properties
* **endedOn**: string (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

### TableLevelOutput
#### Properties
* **endedOn**: string (ReadOnly)
* **errorPrefix**: string (ReadOnly)
* **itemsCompletedCount**: int (ReadOnly)
* **itemsCount**: int (ReadOnly)
* **objectName**: string (ReadOnly)
* **resultPrefix**: string (ReadOnly)
* **resultType**: 'TableLevelOutput' (Required)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **statusMessage**: string (ReadOnly)


## DatabaseLevelErrorOutput
### Properties
* **errorMessage**: string
* **events**: [SyncMigrationDatabaseErrorEvent](#syncmigrationdatabaseerrorevent)[]
* **resultType**: 'DatabaseLevelErrorOutput' (Required)

## SyncMigrationDatabaseErrorEvent
### Properties
* **eventText**: string (ReadOnly)
* **eventTypeString**: string (ReadOnly)
* **timestampString**: string (ReadOnly)

## ErrorOutput
### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

## MigrationLevelOutput
### Properties
* **endedOn**: string (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

## TableLevelOutput
### Properties
* **endedOn**: string (ReadOnly)
* **errorPrefix**: string (ReadOnly)
* **itemsCompletedCount**: int (ReadOnly)
* **itemsCount**: int (ReadOnly)
* **objectName**: string (ReadOnly)
* **resultPrefix**: string (ReadOnly)
* **resultType**: 'TableLevelOutput' (Required)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **statusMessage**: string (ReadOnly)

## Migrate.Oracle.AzureDbForPostgreSql.Sync
### Properties
* **input**: [MigrateOracleAzureDbPostgreSqlSyncTaskInput](#migrateoracleazuredbpostgresqlsynctaskinput)
* **output**: [MigrateOracleAzureDbPostgreSqlSyncTaskOutput](#migrateoracleazuredbpostgresqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.Oracle.AzureDbForPostgreSql.Sync' (Required)

## MigrateOracleAzureDbPostgreSqlSyncTaskInput
### Properties
* **selectedDatabases**: [MigrateOracleAzureDbPostgreSqlSyncDatabaseInput](#migrateoracleazuredbpostgresqlsyncdatabaseinput)[] (Required)
* **sourceConnectionInfo**: [OracleConnectionInfo](#oracleconnectioninfo) (Required)
* **targetConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required)

## MigrateOracleAzureDbPostgreSqlSyncDatabaseInput
### Properties
* **caseManipulation**: string
* **migrationSetting**: [Dictionary<string,String>](#dictionarystringstring)
* **name**: string
* **schemaName**: string
* **sourceSetting**: [Dictionary<string,String>](#dictionarystringstring)
* **tableMap**: [Dictionary<string,String>](#dictionarystringstring)
* **targetDatabaseName**: string
* **targetSetting**: [Dictionary<string,String>](#dictionarystringstring)

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

## MigrateOracleAzureDbPostgreSqlSyncTaskOutput
* **Discriminator**: resultType
### Base Properties
* **id**: string (ReadOnly)
### DatabaseLevelErrorOutput
#### Properties
* **errorMessage**: string
* **events**: [SyncMigrationDatabaseErrorEvent](#syncmigrationdatabaseerrorevent)[]
* **resultType**: 'DatabaseLevelErrorOutput' (Required)

### DatabaseLevelOutput
#### Properties
* **databaseErrorResultPrefix**: string (ReadOnly)
* **databaseName**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **fileId**: string (ReadOnly)
* **numberOfFailedOperations**: int (ReadOnly)
* **numberOfSuccessfulOperations**: int (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **schemaErrorResultPrefix**: string (ReadOnly)
* **stage**: 'CollectingObjects' | 'Completed' | 'CompletedWithWarnings' | 'DeployingSchema' | 'DownloadingScript' | 'Failed' | 'GeneratingScript' | 'NotStarted' | 'UploadingScript' | 'ValidatingInputs' (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

### ErrorOutput
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

### MigrationLevelOutput
#### Properties
* **endedOn**: string (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

### TableLevelOutput
#### Properties
* **endedOn**: string (ReadOnly)
* **errorPrefix**: string (ReadOnly)
* **itemsCompletedCount**: int (ReadOnly)
* **itemsCount**: int (ReadOnly)
* **objectName**: string (ReadOnly)
* **resultPrefix**: string (ReadOnly)
* **resultType**: 'TableLevelOutput' (Required)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **statusMessage**: string (ReadOnly)


## Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2
### Properties
* **input**: [MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput](#migratepostgresqlazuredbforpostgresqlsynctaskinput)
* **output**: [MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput](#migratepostgresqlazuredbforpostgresqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2' (Required)

## MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput
### Properties
* **selectedDatabases**: [MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput](#migratepostgresqlazuredbforpostgresqlsyncdatabaseinput)[] (Required)
* **sourceConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required)
* **targetConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required)

## MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput
### Properties
* **migrationSetting**: [Dictionary<string,String>](#dictionarystringstring)
* **name**: string
* **selectedTables**: [MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseTableInput](#migratepostgresqlazuredbforpostgresqlsyncdatabasetableinput)[]
* **sourceSetting**: [Dictionary<string,String>](#dictionarystringstring)
* **targetDatabaseName**: string
* **targetSetting**: [Dictionary<string,String>](#dictionarystringstring)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseTableInput
### Properties
* **name**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput
* **Discriminator**: resultType
### Base Properties
* **id**: string (ReadOnly)
### DatabaseLevelErrorOutput
#### Properties
* **errorMessage**: string
* **events**: [SyncMigrationDatabaseErrorEvent](#syncmigrationdatabaseerrorevent)[]
* **resultType**: 'DatabaseLevelErrorOutput' (Required)

### DatabaseLevelOutput
#### Properties
* **databaseErrorResultPrefix**: string (ReadOnly)
* **databaseName**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **fileId**: string (ReadOnly)
* **numberOfFailedOperations**: int (ReadOnly)
* **numberOfSuccessfulOperations**: int (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **schemaErrorResultPrefix**: string (ReadOnly)
* **stage**: 'CollectingObjects' | 'Completed' | 'CompletedWithWarnings' | 'DeployingSchema' | 'DownloadingScript' | 'Failed' | 'GeneratingScript' | 'NotStarted' | 'UploadingScript' | 'ValidatingInputs' (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

### ErrorOutput
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

### MigrationLevelOutput
#### Properties
* **endedOn**: string (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

### TableLevelOutput
#### Properties
* **endedOn**: string (ReadOnly)
* **errorPrefix**: string (ReadOnly)
* **itemsCompletedCount**: int (ReadOnly)
* **itemsCount**: int (ReadOnly)
* **objectName**: string (ReadOnly)
* **resultPrefix**: string (ReadOnly)
* **resultType**: 'TableLevelOutput' (Required)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **statusMessage**: string (ReadOnly)


## Migrate.SqlServer.AzureSqlDb.Sync
### Properties
* **input**: [MigrateSqlServerSqlDbSyncTaskInput](#migratesqlserversqldbsynctaskinput)
* **output**: [MigrateSqlServerSqlDbSyncTaskOutput](#migratesqlserversqldbsynctaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.AzureSqlDb.Sync' (Required)

## MigrateSqlServerSqlDbSyncTaskInput
### Properties
* **selectedDatabases**: [MigrateSqlServerSqlDbSyncDatabaseInput](#migratesqlserversqldbsyncdatabaseinput)[] (Required)
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)
* **validationOptions**: [MigrationValidationOptions](#migrationvalidationoptions)

## MigrateSqlServerSqlDbSyncDatabaseInput
### Properties
* **id**: string
* **migrationSetting**: [Dictionary<string,String>](#dictionarystringstring)
* **name**: string
* **schemaName**: string
* **sourceSetting**: [Dictionary<string,String>](#dictionarystringstring)
* **tableMap**: [Dictionary<string,String>](#dictionarystringstring)
* **targetDatabaseName**: string
* **targetSetting**: [Dictionary<string,String>](#dictionarystringstring)

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

## MigrationValidationOptions
### Properties
* **enableDataIntegrityValidation**: bool
* **enableQueryAnalysisValidation**: bool
* **enableSchemaValidation**: bool

## MigrateSqlServerSqlDbSyncTaskOutput
* **Discriminator**: resultType
### Base Properties
* **id**: string (ReadOnly)
### DatabaseLevelErrorOutput
#### Properties
* **errorMessage**: string
* **events**: [SyncMigrationDatabaseErrorEvent](#syncmigrationdatabaseerrorevent)[]
* **resultType**: 'DatabaseLevelErrorOutput' (Required)

### DatabaseLevelOutput
#### Properties
* **databaseErrorResultPrefix**: string (ReadOnly)
* **databaseName**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **fileId**: string (ReadOnly)
* **numberOfFailedOperations**: int (ReadOnly)
* **numberOfSuccessfulOperations**: int (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **schemaErrorResultPrefix**: string (ReadOnly)
* **stage**: 'CollectingObjects' | 'Completed' | 'CompletedWithWarnings' | 'DeployingSchema' | 'DownloadingScript' | 'Failed' | 'GeneratingScript' | 'NotStarted' | 'UploadingScript' | 'ValidatingInputs' (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

### ErrorOutput
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

### MigrationLevelOutput
#### Properties
* **endedOn**: string (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

### TableLevelOutput
#### Properties
* **endedOn**: string (ReadOnly)
* **errorPrefix**: string (ReadOnly)
* **itemsCompletedCount**: int (ReadOnly)
* **itemsCount**: int (ReadOnly)
* **objectName**: string (ReadOnly)
* **resultPrefix**: string (ReadOnly)
* **resultType**: 'TableLevelOutput' (Required)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **statusMessage**: string (ReadOnly)


## Migrate.SqlServer.AzureSqlDbMI
### Properties
* **input**: [MigrateSqlServerSqlMITaskInput](#migratesqlserversqlmitaskinput)
* **output**: [MigrateSqlServerSqlMITaskOutput](#migratesqlserversqlmitaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.AzureSqlDbMI' (Required)

## MigrateSqlServerSqlMITaskInput
### Properties
* **aadDomainName**: string
* **backupBlobShare**: [BlobShare](#blobshare) (Required)
* **backupFileShare**: [FileShare](#fileshare)
* **backupMode**: 'CreateBackup' | 'ExistingBackup'
* **selectedAgentJobs**: string[]
* **selectedDatabases**: [MigrateSqlServerSqlMIDatabaseInput](#migratesqlserversqlmidatabaseinput)[] (Required)
* **selectedLogins**: string[]
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)

## BlobShare
### Properties
* **sasUri**: string (Required)

## MigrateSqlServerSqlMIDatabaseInput
### Properties
* **backupFilePaths**: string[]
* **backupFileShare**: [FileShare](#fileshare)
* **name**: string (Required)
* **restoreDatabaseName**: string (Required)

## MigrateSqlServerSqlMITaskOutput
* **Discriminator**: resultType
### Base Properties
* **id**: string (ReadOnly)
### AgentJobLevelOutput
#### Properties
* **isEnabled**: bool (ReadOnly)
* **jobCategory**: string (ReadOnly)
* **jobOwner**: string (ReadOnly)
* **lastExecutedOn**: string (ReadOnly)
* **migrationEligibility**: [MigrationEligibilityInfo](#migrationeligibilityinfo) (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'AgentJobLevelOutput' (Required)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

### DatabaseLevelOutput
#### Properties
* **databaseErrorResultPrefix**: string (ReadOnly)
* **databaseName**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **fileId**: string (ReadOnly)
* **numberOfFailedOperations**: int (ReadOnly)
* **numberOfSuccessfulOperations**: int (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **schemaErrorResultPrefix**: string (ReadOnly)
* **stage**: 'CollectingObjects' | 'Completed' | 'CompletedWithWarnings' | 'DeployingSchema' | 'DownloadingScript' | 'Failed' | 'GeneratingScript' | 'NotStarted' | 'UploadingScript' | 'ValidatingInputs' (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

### ErrorOutput
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

### LoginLevelOutput
#### Properties
* **defaultDatabase**: string (ReadOnly)
* **isEnabled**: bool (ReadOnly)
* **loginType**: 'AsymmetricKey' | 'Certificate' | 'ExternalGroup' | 'ExternalUser' | 'SqlLogin' | 'WindowsGroup' | 'WindowsUser' (ReadOnly)
* **migrationEligibility**: [MigrationEligibilityInfo](#migrationeligibilityinfo) (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'LoginLevelOutput' (Required)

### MigrationLevelOutput
#### Properties
* **endedOn**: string (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)


## Migrate.SqlServer.AzureSqlDbMI.Sync.LRS
### Properties
* **input**: [MigrateSqlServerSqlMISyncTaskInput](#migratesqlserversqlmisynctaskinput)
* **output**: [MigrateSqlServerSqlMISyncTaskOutput](#migratesqlserversqlmisynctaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.AzureSqlDbMI.Sync.LRS' (Required)

## MigrateSqlServerSqlMISyncTaskInput
### Properties
* **azureApp**: [AzureActiveDirectoryApp](#azureactivedirectoryapp) (Required)
* **backupFileShare**: [FileShare](#fileshare)
* **selectedDatabases**: [MigrateSqlServerSqlMIDatabaseInput](#migratesqlserversqlmidatabaseinput)[] (Required)
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)
* **storageResourceId**: string (Required)
* **targetConnectionInfo**: [MiSqlConnectionInfo](#misqlconnectioninfo) (Required)

## MigrateSqlServerSqlMISyncTaskOutput
* **Discriminator**: resultType
### Base Properties
* **id**: string (ReadOnly)
### DatabaseLevelOutput
#### Properties
* **databaseErrorResultPrefix**: string (ReadOnly)
* **databaseName**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **fileId**: string (ReadOnly)
* **numberOfFailedOperations**: int (ReadOnly)
* **numberOfSuccessfulOperations**: int (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **schemaErrorResultPrefix**: string (ReadOnly)
* **stage**: 'CollectingObjects' | 'Completed' | 'CompletedWithWarnings' | 'DeployingSchema' | 'DownloadingScript' | 'Failed' | 'GeneratingScript' | 'NotStarted' | 'UploadingScript' | 'ValidatingInputs' (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

### ErrorOutput
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

### MigrationLevelOutput
#### Properties
* **endedOn**: string (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)


## Migrate.SqlServer.SqlDb
### Properties
* **input**: [MigrateSqlServerSqlDbTaskInput](#migratesqlserversqldbtaskinput)
* **output**: [MigrateSqlServerSqlDbTaskOutput](#migratesqlserversqldbtaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.SqlDb' (Required)

## MigrateSqlServerSqlDbTaskInput
### Properties
* **selectedDatabases**: [MigrateSqlServerSqlDbDatabaseInput](#migratesqlserversqldbdatabaseinput)[] (Required)
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)
* **validationOptions**: [MigrationValidationOptions](#migrationvalidationoptions)

## MigrateSqlServerSqlDbDatabaseInput
### Properties
* **makeSourceDbReadOnly**: bool
* **name**: string
* **tableMap**: [Dictionary<string,String>](#dictionarystringstring)
* **targetDatabaseName**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MigrateSqlServerSqlDbTaskOutput
* **Discriminator**: resultType
### Base Properties
* **id**: string (ReadOnly)
### DatabaseLevelOutput
#### Properties
* **databaseErrorResultPrefix**: string (ReadOnly)
* **databaseName**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **fileId**: string (ReadOnly)
* **numberOfFailedOperations**: int (ReadOnly)
* **numberOfSuccessfulOperations**: int (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **schemaErrorResultPrefix**: string (ReadOnly)
* **stage**: 'CollectingObjects' | 'Completed' | 'CompletedWithWarnings' | 'DeployingSchema' | 'DownloadingScript' | 'Failed' | 'GeneratingScript' | 'NotStarted' | 'UploadingScript' | 'ValidatingInputs' (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

### ErrorOutput
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

### MigrationLevelOutput
#### Properties
* **endedOn**: string (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

### TableLevelOutput
#### Properties
* **endedOn**: string (ReadOnly)
* **errorPrefix**: string (ReadOnly)
* **itemsCompletedCount**: int (ReadOnly)
* **itemsCount**: int (ReadOnly)
* **objectName**: string (ReadOnly)
* **resultPrefix**: string (ReadOnly)
* **resultType**: 'TableLevelOutput' (Required)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **statusMessage**: string (ReadOnly)


## Migrate.Ssis
### Properties
* **input**: [MigrateSsisTaskInput](#migratessistaskinput)
* **output**: [MigrateSsisTaskOutput](#migratessistaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.Ssis' (Required)

## MigrateSsisTaskInput
### Properties
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)
* **ssisMigrationInfo**: [SsisMigrationInfo](#ssismigrationinfo) (Required)
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)

## SsisMigrationInfo
### Properties
* **environmentOverwriteOption**: 'Ignore' | 'Overwrite'
* **projectOverwriteOption**: 'Ignore' | 'Overwrite'
* **ssisStoreType**: 'SsisCatalog'

## MigrateSsisTaskOutput
* **Discriminator**: resultType
### Base Properties
* **id**: string (ReadOnly)
### MigrationLevelOutput
#### Properties
* **endedOn**: string (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

### SsisProjectLevelOutput
#### Properties
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **folderName**: string (ReadOnly)
* **message**: string (ReadOnly)
* **projectName**: string (ReadOnly)
* **resultType**: 'SsisProjectLevelOutput' (Required)
* **stage**: 'Completed' | 'Initialize' | 'InProgress' | 'None' (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)


## SsisProjectLevelOutput
### Properties
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **folderName**: string (ReadOnly)
* **message**: string (ReadOnly)
* **projectName**: string (ReadOnly)
* **resultType**: 'SsisProjectLevelOutput' (Required)
* **stage**: 'Completed' | 'Initialize' | 'InProgress' | 'None' (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

## MigrateSchemaSqlServerSqlDb
### Properties
* **input**: [MigrateSchemaSqlServerSqlDbTaskInput](#migrateschemasqlserversqldbtaskinput)
* **output**: [MigrateSchemaSqlServerSqlDbTaskOutput](#migrateschemasqlserversqldbtaskoutput)[] (ReadOnly)
* **taskType**: 'MigrateSchemaSqlServerSqlDb' (Required)

## MigrateSchemaSqlServerSqlDbTaskInput
### Properties
* **selectedDatabases**: [MigrateSchemaSqlServerSqlDbDatabaseInput](#migrateschemasqlserversqldbdatabaseinput)[] (Required)
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)

## MigrateSchemaSqlServerSqlDbDatabaseInput
### Properties
* **name**: string
* **schemaSetting**: [SchemaMigrationSetting](#schemamigrationsetting)
* **targetDatabaseName**: string

## SchemaMigrationSetting
### Properties
* **fileId**: string
* **schemaOption**: 'ExtractFromSource' | 'None' | 'UseStorageFile'

## MigrateSchemaSqlServerSqlDbTaskOutput
* **Discriminator**: resultType
### Base Properties
* **id**: string (ReadOnly)
### DatabaseLevelOutput
#### Properties
* **databaseErrorResultPrefix**: string (ReadOnly)
* **databaseName**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **fileId**: string (ReadOnly)
* **numberOfFailedOperations**: int (ReadOnly)
* **numberOfSuccessfulOperations**: int (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **schemaErrorResultPrefix**: string (ReadOnly)
* **stage**: 'CollectingObjects' | 'Completed' | 'CompletedWithWarnings' | 'DeployingSchema' | 'DownloadingScript' | 'Failed' | 'GeneratingScript' | 'NotStarted' | 'UploadingScript' | 'ValidatingInputs' (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

### ErrorOutput
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

### MigrationLevelOutput
#### Properties
* **endedOn**: string (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

### SchemaErrorOutput
#### Properties
* **commandText**: string (ReadOnly)
* **errorText**: string (ReadOnly)
* **resultType**: 'SchemaErrorOutput' (Required)


## SchemaErrorOutput
### Properties
* **commandText**: string (ReadOnly)
* **errorText**: string (ReadOnly)
* **resultType**: 'SchemaErrorOutput' (Required)

## Service.Check.OCI
### Properties
* **input**: [CheckOCIDriverTaskInput](#checkocidrivertaskinput)
* **output**: [CheckOCIDriverTaskOutput](#checkocidrivertaskoutput)[] (ReadOnly)
* **taskType**: 'Service.Check.OCI' (Required)

## CheckOCIDriverTaskInput
### Properties
* **serverVersion**: string

## CheckOCIDriverTaskOutput
### Properties
* **installedDriver**: [OracleOCIDriverInfo](#oracleocidriverinfo)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

## OracleOCIDriverInfo
### Properties
* **archiveChecksum**: string (ReadOnly)
* **assemblyVersion**: string (ReadOnly)
* **driverName**: string (ReadOnly)
* **driverSize**: string (ReadOnly)
* **oracleChecksum**: string (ReadOnly)
* **supportedOracleVersions**: string[] (ReadOnly)

## Service.Install.OCI
### Properties
* **input**: [InstallOCIDriverTaskInput](#installocidrivertaskinput)
* **output**: [InstallOCIDriverTaskOutput](#installocidrivertaskoutput)[] (ReadOnly)
* **taskType**: 'Service.Install.OCI' (Required)

## InstallOCIDriverTaskInput
### Properties
* **driverPackageName**: string

## InstallOCIDriverTaskOutput
### Properties
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

## Service.Upload.OCI
### Properties
* **input**: [UploadOCIDriverTaskInput](#uploadocidrivertaskinput)
* **output**: [UploadOCIDriverTaskOutput](#uploadocidrivertaskoutput)[] (ReadOnly)
* **taskType**: 'Service.Upload.OCI' (Required)

## UploadOCIDriverTaskInput
### Properties
* **driverShare**: [FileShare](#fileshare)

## UploadOCIDriverTaskOutput
### Properties
* **driverPackageName**: string (ReadOnly)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

## Validate.MongoDb
### Properties
* **input**: [MongoDbMigrationSettings](#mongodbmigrationsettings)
* **output**: [Migration](#migration)[] (ReadOnly)
* **taskType**: 'Validate.MongoDb' (Required)

## Validate.Oracle.AzureDbPostgreSql.Sync
### Properties
* **input**: [MigrateOracleAzureDbPostgreSqlSyncTaskInput](#migrateoracleazuredbpostgresqlsynctaskinput)
* **output**: [ValidateOracleAzureDbPostgreSqlSyncTaskOutput](#validateoracleazuredbpostgresqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'Validate.Oracle.AzureDbPostgreSql.Sync' (Required)

## ValidateOracleAzureDbPostgreSqlSyncTaskOutput
### Properties
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

## ValidateMigrationInput.SqlServer.AzureSqlDbMI
### Properties
* **input**: [ValidateMigrationInputSqlServerSqlMITaskInput](#validatemigrationinputsqlserversqlmitaskinput)
* **output**: [ValidateMigrationInputSqlServerSqlMITaskOutput](#validatemigrationinputsqlserversqlmitaskoutput)[] (ReadOnly)
* **taskType**: 'ValidateMigrationInput.SqlServer.AzureSqlDbMI' (Required)

## ValidateMigrationInputSqlServerSqlMITaskInput
### Properties
* **backupBlobShare**: [BlobShare](#blobshare) (Required)
* **backupFileShare**: [FileShare](#fileshare)
* **backupMode**: 'CreateBackup' | 'ExistingBackup'
* **selectedDatabases**: [MigrateSqlServerSqlMIDatabaseInput](#migratesqlserversqlmidatabaseinput)[] (Required)
* **selectedLogins**: string[]
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)

## ValidateMigrationInputSqlServerSqlMITaskOutput
### Properties
* **backupFolderErrors**: [ReportableException](#reportableexception)[] (ReadOnly)
* **backupShareCredentialsErrors**: [ReportableException](#reportableexception)[] (ReadOnly)
* **backupStorageAccountErrors**: [ReportableException](#reportableexception)[] (ReadOnly)
* **databaseBackupInfo**: [DatabaseBackupInfo](#databasebackupinfo)
* **existingBackupErrors**: [ReportableException](#reportableexception)[] (ReadOnly)
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **restoreDatabaseNameErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

## DatabaseBackupInfo
### Properties
* **backupFiles**: string[] (ReadOnly)
* **backupFinishDate**: string (ReadOnly)
* **backupType**: 'Database' | 'DifferentialDatabase' | 'DifferentialFile' | 'DifferentialPartial' | 'File' | 'Partial' | 'TransactionLog' (ReadOnly)
* **databaseName**: string (ReadOnly)
* **familyCount**: int (ReadOnly)
* **isCompressed**: bool (ReadOnly)
* **isDamaged**: bool (ReadOnly)
* **position**: int (ReadOnly)

## ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS
### Properties
* **input**: [ValidateMigrationInputSqlServerSqlMISyncTaskInput](#validatemigrationinputsqlserversqlmisynctaskinput)
* **output**: [ValidateMigrationInputSqlServerSqlMISyncTaskOutput](#validatemigrationinputsqlserversqlmisynctaskoutput)[] (ReadOnly)
* **taskType**: 'ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS' (Required)

## ValidateMigrationInputSqlServerSqlMISyncTaskInput
### Properties
* **azureApp**: [AzureActiveDirectoryApp](#azureactivedirectoryapp) (Required)
* **backupFileShare**: [FileShare](#fileshare)
* **selectedDatabases**: [MigrateSqlServerSqlMIDatabaseInput](#migratesqlserversqlmidatabaseinput)[] (Required)
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)
* **storageResourceId**: string (Required)
* **targetConnectionInfo**: [MiSqlConnectionInfo](#misqlconnectioninfo) (Required)

## ValidateMigrationInputSqlServerSqlMISyncTaskOutput
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

## ValidateMigrationInput.SqlServer.SqlDb.Sync
### Properties
* **input**: [ValidateSyncMigrationInputSqlServerTaskInput](#validatesyncmigrationinputsqlservertaskinput)
* **output**: [ValidateSyncMigrationInputSqlServerTaskOutput](#validatesyncmigrationinputsqlservertaskoutput)[] (ReadOnly)
* **taskType**: 'ValidateMigrationInput.SqlServer.SqlDb.Sync' (Required)

## ValidateSyncMigrationInputSqlServerTaskInput
### Properties
* **selectedDatabases**: [MigrateSqlServerSqlDbSyncDatabaseInput](#migratesqlserversqldbsyncdatabaseinput)[] (Required)
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)

## ValidateSyncMigrationInputSqlServerTaskOutput
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

