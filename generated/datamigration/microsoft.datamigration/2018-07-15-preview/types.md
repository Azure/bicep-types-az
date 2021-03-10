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
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.DataMigration/services' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataMigration/services/projects@2018-07-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProjectProperties](#projectproperties)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
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

## TrackedResourceTags
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

## TrackedResourceTags
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
* **clientData**: [ProjectTaskPropertiesClientData](#projecttaskpropertiesclientdata)
* **commands**: [CommandProperties](#commandproperties)[] (ReadOnly)
* **errors**: [ODataError](#odataerror)[] (ReadOnly)
* **state**: 'Canceled' | 'Failed' | 'FailedInputValidation' | 'Faulted' | 'Queued' | 'Running' | 'Succeeded' | 'Unknown' (ReadOnly)
### ConnectToMongoDbTaskProperties
#### Properties
* **input**: [MongoDbConnectionInfo](#mongodbconnectioninfo)
* **output**: [MongoDbClusterInfo](#mongodbclusterinfo)[] (ReadOnly)
* **taskType**: 'Connect.MongoDb' (Required)

### ConnectToSourceMySqlTaskProperties
#### Properties
* **input**: [ConnectToSourceMySqlTaskInput](#connecttosourcemysqltaskinput)
* **output**: [ConnectToSourceNonSqlTaskOutput](#connecttosourcenonsqltaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToSource.MySql' (Required)

### ConnectToSourceOracleSyncTaskProperties
#### Properties
* **input**: [ConnectToSourceOracleSyncTaskInput](#connecttosourceoraclesynctaskinput)
* **output**: [ConnectToSourceOracleSyncTaskOutput](#connecttosourceoraclesynctaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToSource.Oracle.Sync' (Required)

### ConnectToSourcePostgreSqlSyncTaskProperties
#### Properties
* **input**: [ConnectToSourcePostgreSqlSyncTaskInput](#connecttosourcepostgresqlsynctaskinput)
* **output**: [ConnectToSourcePostgreSqlSyncTaskOutput](#connecttosourcepostgresqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToSource.PostgreSql.Sync' (Required)

### ConnectToSourceSqlServerTaskProperties
#### Properties
* **input**: [ConnectToSourceSqlServerTaskInput](#connecttosourcesqlservertaskinput)
* **output**: [ConnectToSourceSqlServerTaskOutput](#connecttosourcesqlservertaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToSource.SqlServer' (Required)

### ConnectToSourceSqlServerSyncTaskProperties
#### Properties
* **input**: [ConnectToSourceSqlServerTaskInput](#connecttosourcesqlservertaskinput)
* **output**: [ConnectToSourceSqlServerTaskOutput](#connecttosourcesqlservertaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToSource.SqlServer.Sync' (Required)

### ConnectToTargetAzureDbForMySqlTaskProperties
#### Properties
* **input**: [ConnectToTargetAzureDbForMySqlTaskInput](#connecttotargetazuredbformysqltaskinput)
* **output**: [ConnectToTargetAzureDbForMySqlTaskOutput](#connecttotargetazuredbformysqltaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToTarget.AzureDbForMySql' (Required)

### ConnectToTargetAzureDbForPostgreSqlSyncTaskProperties
#### Properties
* **input**: [ConnectToTargetAzureDbForPostgreSqlSyncTaskInput](#connecttotargetazuredbforpostgresqlsynctaskinput)
* **output**: [ConnectToTargetAzureDbForPostgreSqlSyncTaskOutput](#connecttotargetazuredbforpostgresqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToTarget.AzureDbForPostgreSql.Sync' (Required)

### ConnectToTargetSqlMITaskProperties
#### Properties
* **input**: [ConnectToTargetSqlMITaskInput](#connecttotargetsqlmitaskinput)
* **output**: [ConnectToTargetSqlMITaskOutput](#connecttotargetsqlmitaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToTarget.AzureSqlDbMI' (Required)

### ConnectToTargetSqlMISyncTaskProperties
#### Properties
* **input**: [ConnectToTargetSqlMISyncTaskInput](#connecttotargetsqlmisynctaskinput)
* **output**: [ConnectToTargetSqlMISyncTaskOutput](#connecttotargetsqlmisynctaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToTarget.AzureSqlDbMI.Sync.LRS' (Required)

### ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskProperties
#### Properties
* **input**: [ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInput](#connecttotargetoracleazuredbforpostgresqlsynctaskinput)
* **output**: [ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutput](#connecttotargetoracleazuredbforpostgresqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync' (Required)

### ConnectToTargetSqlDbTaskProperties
#### Properties
* **input**: [ConnectToTargetSqlDbTaskInput](#connecttotargetsqldbtaskinput)
* **output**: [ConnectToTargetSqlDbTaskOutput](#connecttotargetsqldbtaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToTarget.SqlDb' (Required)

### ConnectToTargetSqlDbSyncTaskProperties
#### Properties
* **input**: [ConnectToTargetSqlDbSyncTaskInput](#connecttotargetsqldbsynctaskinput)
* **output**: [ConnectToTargetSqlDbTaskOutput](#connecttotargetsqldbtaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToTarget.SqlDb.Sync' (Required)

### GetTdeCertificatesSqlTaskProperties
#### Properties
* **input**: [GetTdeCertificatesSqlTaskInput](#gettdecertificatessqltaskinput)
* **output**: [GetTdeCertificatesSqlTaskOutput](#gettdecertificatessqltaskoutput)[] (ReadOnly)
* **taskType**: 'GetTDECertificates.Sql' (Required)

### GetUserTablesSqlSyncTaskProperties
#### Properties
* **input**: [GetUserTablesSqlSyncTaskInput](#getusertablessqlsynctaskinput)
* **output**: [GetUserTablesSqlSyncTaskOutput](#getusertablessqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'GetUserTables.AzureSqlDb.Sync' (Required)

### GetUserTablesSqlTaskProperties
#### Properties
* **input**: [GetUserTablesSqlTaskInput](#getusertablessqltaskinput)
* **output**: [GetUserTablesSqlTaskOutput](#getusertablessqltaskoutput)[] (ReadOnly)
* **taskType**: 'GetUserTables.Sql' (Required)

### GetUserTablesOracleTaskProperties
#### Properties
* **input**: [GetUserTablesOracleTaskInput](#getusertablesoracletaskinput)
* **output**: [GetUserTablesOracleTaskOutput](#getusertablesoracletaskoutput)[] (ReadOnly)
* **taskType**: 'GetUserTablesOracle' (Required)

### GetUserTablesPostgreSqlTaskProperties
#### Properties
* **input**: [GetUserTablesPostgreSqlTaskInput](#getusertablespostgresqltaskinput)
* **output**: [GetUserTablesPostgreSqlTaskOutput](#getusertablespostgresqltaskoutput)[] (ReadOnly)
* **taskType**: 'GetUserTablesPostgreSql' (Required)

### MigrateMongoDbTaskProperties
#### Properties
* **input**: [MongoDbMigrationSettings](#mongodbmigrationsettings)
* **output**: [MongoDbProgress](#mongodbprogress)[] (ReadOnly)
* **taskType**: 'Migrate.MongoDb' (Required)

### MigrateMySqlAzureDbForMySqlSyncTaskProperties
#### Properties
* **input**: [MigrateMySqlAzureDbForMySqlSyncTaskInput](#migratemysqlazuredbformysqlsynctaskinput)
* **output**: [MigrateMySqlAzureDbForMySqlSyncTaskOutput](#migratemysqlazuredbformysqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.MySql.AzureDbForMySql.Sync' (Required)

### MigrateOracleAzureDbForPostgreSqlSyncTaskProperties
#### Properties
* **input**: [MigrateOracleAzureDbPostgreSqlSyncTaskInput](#migrateoracleazuredbpostgresqlsynctaskinput)
* **output**: [MigrateOracleAzureDbPostgreSqlSyncTaskOutput](#migrateoracleazuredbpostgresqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.Oracle.AzureDbForPostgreSql.Sync' (Required)

### MigratePostgreSqlAzureDbForPostgreSqlSyncTaskProperties
#### Properties
* **input**: [MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput](#migratepostgresqlazuredbforpostgresqlsynctaskinput)
* **output**: [MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput](#migratepostgresqlazuredbforpostgresqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2' (Required)

### MigrateSqlServerSqlDbSyncTaskProperties
#### Properties
* **input**: [MigrateSqlServerSqlDbSyncTaskInput](#migratesqlserversqldbsynctaskinput)
* **output**: [MigrateSqlServerSqlDbSyncTaskOutput](#migratesqlserversqldbsynctaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.AzureSqlDb.Sync' (Required)

### MigrateSqlServerSqlMITaskProperties
#### Properties
* **input**: [MigrateSqlServerSqlMITaskInput](#migratesqlserversqlmitaskinput)
* **output**: [MigrateSqlServerSqlMITaskOutput](#migratesqlserversqlmitaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.AzureSqlDbMI' (Required)

### MigrateSqlServerSqlMISyncTaskProperties
#### Properties
* **input**: [MigrateSqlServerSqlMISyncTaskInput](#migratesqlserversqlmisynctaskinput)
* **output**: [MigrateSqlServerSqlMISyncTaskOutput](#migratesqlserversqlmisynctaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.AzureSqlDbMI.Sync.LRS' (Required)

### MigrateSqlServerSqlDbTaskProperties
#### Properties
* **input**: [MigrateSqlServerSqlDbTaskInput](#migratesqlserversqldbtaskinput)
* **output**: [MigrateSqlServerSqlDbTaskOutput](#migratesqlserversqldbtaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.SqlDb' (Required)

### MigrateSsisTaskProperties
#### Properties
* **input**: [MigrateSsisTaskInput](#migratessistaskinput)
* **output**: [MigrateSsisTaskOutput](#migratessistaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.Ssis' (Required)

### MigrateSchemaSqlServerSqlDbTaskProperties
#### Properties
* **input**: [MigrateSchemaSqlServerSqlDbTaskInput](#migrateschemasqlserversqldbtaskinput)
* **output**: [MigrateSchemaSqlServerSqlDbTaskOutput](#migrateschemasqlserversqldbtaskoutput)[] (ReadOnly)
* **taskType**: 'MigrateSchemaSqlServerSqlDb' (Required)

### CheckOCIDriverTaskProperties
#### Properties
* **input**: [CheckOCIDriverTaskInput](#checkocidrivertaskinput)
* **output**: [CheckOCIDriverTaskOutput](#checkocidrivertaskoutput)[] (ReadOnly)
* **taskType**: 'Service.Check.OCI' (Required)

### InstallOCIDriverTaskProperties
#### Properties
* **input**: [InstallOCIDriverTaskInput](#installocidrivertaskinput)
* **output**: [InstallOCIDriverTaskOutput](#installocidrivertaskoutput)[] (ReadOnly)
* **taskType**: 'Service.Install.OCI' (Required)

### UploadOCIDriverTaskProperties
#### Properties
* **input**: [UploadOCIDriverTaskInput](#uploadocidrivertaskinput)
* **output**: [UploadOCIDriverTaskOutput](#uploadocidrivertaskoutput)[] (ReadOnly)
* **taskType**: 'Service.Upload.OCI' (Required)

### ValidateMongoDbTaskProperties
#### Properties
* **input**: [MongoDbMigrationSettings](#mongodbmigrationsettings)
* **output**: [MongoDbMigrationProgress](#mongodbmigrationprogress)[] (ReadOnly)
* **taskType**: 'Validate.MongoDb' (Required)

### ValidateOracleAzureDbForPostgreSqlSyncTaskProperties
#### Properties
* **input**: [MigrateOracleAzureDbPostgreSqlSyncTaskInput](#migrateoracleazuredbpostgresqlsynctaskinput)
* **output**: [ValidateOracleAzureDbPostgreSqlSyncTaskOutput](#validateoracleazuredbpostgresqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'Validate.Oracle.AzureDbPostgreSql.Sync' (Required)

### ValidateMigrationInputSqlServerSqlMITaskProperties
#### Properties
* **input**: [ValidateMigrationInputSqlServerSqlMITaskInput](#validatemigrationinputsqlserversqlmitaskinput)
* **output**: [ValidateMigrationInputSqlServerSqlMITaskOutput](#validatemigrationinputsqlserversqlmitaskoutput)[] (ReadOnly)
* **taskType**: 'ValidateMigrationInput.SqlServer.AzureSqlDbMI' (Required)

### ValidateMigrationInputSqlServerSqlMISyncTaskProperties
#### Properties
* **input**: [ValidateMigrationInputSqlServerSqlMISyncTaskInput](#validatemigrationinputsqlserversqlmisynctaskinput)
* **output**: [ValidateMigrationInputSqlServerSqlMISyncTaskOutput](#validatemigrationinputsqlserversqlmisynctaskoutput)[] (ReadOnly)
* **taskType**: 'ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS' (Required)

### ValidateMigrationInputSqlServerSqlDbSyncTaskProperties
#### Properties
* **input**: [ValidateSyncMigrationInputSqlServerTaskInput](#validatesyncmigrationinputsqlservertaskinput)
* **output**: [ValidateSyncMigrationInputSqlServerTaskOutput](#validatesyncmigrationinputsqlservertaskoutput)[] (ReadOnly)
* **taskType**: 'ValidateMigrationInput.SqlServer.SqlDb.Sync' (Required)


## ProjectTaskPropertiesClientData
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CommandProperties
* **Discriminator**: commandType

### Base Properties
* **errors**: [ODataError](#odataerror)[] (ReadOnly)
* **state**: 'Accepted' | 'Failed' | 'Running' | 'Succeeded' | 'Unknown' (ReadOnly)
### MongoDbCancelCommand
#### Properties
* **commandType**: 'cancel' (Required)
* **input**: [MongoDbCommandInput](#mongodbcommandinput)

### MongoDbFinishCommand
#### Properties
* **commandType**: 'finish' (Required)
* **input**: [MongoDbFinishCommandInput](#mongodbfinishcommandinput)

### MigrateMISyncCompleteCommandProperties
#### Properties
* **commandType**: 'Migrate.SqlServer.AzureDbSqlMi.Complete' (Required)
* **input**: [MigrateMISyncCompleteCommandInput](#migratemisynccompletecommandinput)
* **output**: [MigrateMISyncCompleteCommandOutput](#migratemisynccompletecommandoutput) (ReadOnly)

### MigrateSyncCompleteCommandProperties
#### Properties
* **commandType**: 'Migrate.Sync.Complete.Database' (Required)
* **input**: [MigrateSyncCompleteCommandInput](#migratesynccompletecommandinput)
* **output**: [MigrateSyncCompleteCommandOutput](#migratesynccompletecommandoutput) (ReadOnly)

### MongoDbRestartCommand
#### Properties
* **commandType**: 'restart' (Required)
* **input**: [MongoDbCommandInput](#mongodbcommandinput)


## ODataError
### Properties
* **code**: string
* **details**: [ODataError](#odataerror)[]
* **message**: string

## MongoDbCancelCommand
### Properties
* **commandType**: 'cancel' (Required)
* **input**: [MongoDbCommandInput](#mongodbcommandinput)

## MongoDbCommandInput
### Properties
* **objectName**: string

## MongoDbFinishCommand
### Properties
* **commandType**: 'finish' (Required)
* **input**: [MongoDbFinishCommandInput](#mongodbfinishcommandinput)

## MongoDbFinishCommandInput
### Properties
* **immediate**: bool (Required)
* **objectName**: string

## MigrateMISyncCompleteCommandProperties
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

## MigrateSyncCompleteCommandProperties
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

## MongoDbRestartCommand
### Properties
* **commandType**: 'restart' (Required)
* **input**: [MongoDbCommandInput](#mongodbcommandinput)

## ConnectToMongoDbTaskProperties
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

## ConnectToSourceMySqlTaskProperties
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

## ConnectToSourceOracleSyncTaskProperties
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

## ConnectToSourcePostgreSqlSyncTaskProperties
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

## ConnectToSourceSqlServerTaskProperties
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
### ConnectToSourceSqlServerTaskOutputAgentJobLevel
#### Properties
* **isEnabled**: bool (ReadOnly)
* **jobCategory**: string (ReadOnly)
* **jobOwner**: string (ReadOnly)
* **lastExecutedOn**: string (ReadOnly)
* **migrationEligibility**: [MigrationEligibilityInfo](#migrationeligibilityinfo) (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'AgentJobLevelOutput' (Required)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

### ConnectToSourceSqlServerTaskOutputDatabaseLevel
#### Properties
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly)
* **databaseFiles**: [DatabaseFileInfo](#databasefileinfo)[] (ReadOnly)
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **sizeMB**: int (ReadOnly)

### ConnectToSourceSqlServerTaskOutputLoginLevel
#### Properties
* **defaultDatabase**: string (ReadOnly)
* **isEnabled**: bool (ReadOnly)
* **loginType**: 'AsymmetricKey' | 'Certificate' | 'ExternalGroup' | 'ExternalUser' | 'SqlLogin' | 'WindowsGroup' | 'WindowsUser' (ReadOnly)
* **migrationEligibility**: [MigrationEligibilityInfo](#migrationeligibilityinfo) (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'LoginLevelOutput' (Required)

### ConnectToSourceSqlServerTaskOutputTaskLevel
#### Properties
* **agentJobs**: string (ReadOnly)
* **databases**: string (ReadOnly)
* **databaseTdeCertificateMapping**: string (ReadOnly)
* **logins**: string (ReadOnly)
* **resultType**: 'TaskLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)


## ConnectToSourceSqlServerTaskOutputAgentJobLevel
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

## ConnectToSourceSqlServerTaskOutputDatabaseLevel
### Properties
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly)
* **databaseFiles**: [DatabaseFileInfo](#databasefileinfo)[] (ReadOnly)
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **sizeMB**: int (ReadOnly)

## DatabaseFileInfo
### Properties
* **databaseName**: string
* **fileType**: 'Filestream' | 'Fulltext' | 'Log' | 'NotSupported' | 'Rows'
* **id**: string
* **logicalName**: string
* **physicalFullName**: string
* **restoreFullName**: string
* **sizeMB**: int

## ConnectToSourceSqlServerTaskOutputLoginLevel
### Properties
* **defaultDatabase**: string (ReadOnly)
* **isEnabled**: bool (ReadOnly)
* **loginType**: 'AsymmetricKey' | 'Certificate' | 'ExternalGroup' | 'ExternalUser' | 'SqlLogin' | 'WindowsGroup' | 'WindowsUser' (ReadOnly)
* **migrationEligibility**: [MigrationEligibilityInfo](#migrationeligibilityinfo) (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'LoginLevelOutput' (Required)

## ConnectToSourceSqlServerTaskOutputTaskLevel
### Properties
* **agentJobs**: string (ReadOnly)
* **databases**: string (ReadOnly)
* **databaseTdeCertificateMapping**: string (ReadOnly)
* **logins**: string (ReadOnly)
* **resultType**: 'TaskLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

## ConnectToSourceSqlServerSyncTaskProperties
### Properties
* **input**: [ConnectToSourceSqlServerTaskInput](#connecttosourcesqlservertaskinput)
* **output**: [ConnectToSourceSqlServerTaskOutput](#connecttosourcesqlservertaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToSource.SqlServer.Sync' (Required)

## ConnectToTargetAzureDbForMySqlTaskProperties
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

## ConnectToTargetAzureDbForPostgreSqlSyncTaskProperties
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

## ConnectToTargetSqlMITaskProperties
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

## ConnectToTargetSqlMISyncTaskProperties
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

## ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskProperties
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
* **databaseSchemaMap**: [ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutputDatabaseSchemaMapItem](#connecttotargetoracleazuredbforpostgresqlsynctaskoutputdatabaseschemamapitem)[]
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

## ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutputDatabaseSchemaMapItem
### Properties
* **database**: string
* **schemas**: string[]

## ConnectToTargetSqlDbTaskProperties
### Properties
* **input**: [ConnectToTargetSqlDbTaskInput](#connecttotargetsqldbtaskinput)
* **output**: [ConnectToTargetSqlDbTaskOutput](#connecttotargetsqldbtaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToTarget.SqlDb' (Required)

## ConnectToTargetSqlDbTaskInput
### Properties
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)

## ConnectToTargetSqlDbTaskOutput
### Properties
* **databases**: string (ReadOnly)
* **id**: string (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

## ConnectToTargetSqlDbSyncTaskProperties
### Properties
* **input**: [ConnectToTargetSqlDbSyncTaskInput](#connecttotargetsqldbsynctaskinput)
* **output**: [ConnectToTargetSqlDbTaskOutput](#connecttotargetsqldbtaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToTarget.SqlDb.Sync' (Required)

## ConnectToTargetSqlDbSyncTaskInput
### Properties
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)

## GetTdeCertificatesSqlTaskProperties
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
* **base64EncodedCertificates**: string (ReadOnly)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

## GetUserTablesSqlSyncTaskProperties
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
* **databasesToSourceTables**: string (ReadOnly)
* **databasesToTargetTables**: string (ReadOnly)
* **tableValidationErrors**: string (ReadOnly)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

## GetUserTablesSqlTaskProperties
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
* **databasesToTables**: string (ReadOnly)
* **id**: string (ReadOnly)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

## GetUserTablesOracleTaskProperties
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

## DatabaseTable
### Properties
* **hasRows**: bool (ReadOnly)
* **name**: string (ReadOnly)

## GetUserTablesPostgreSqlTaskProperties
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

## MigrateMongoDbTaskProperties
### Properties
* **input**: [MongoDbMigrationSettings](#mongodbmigrationsettings)
* **output**: [MongoDbProgress](#mongodbprogress)[] (ReadOnly)
* **taskType**: 'Migrate.MongoDb' (Required)

## MongoDbMigrationSettings
### Properties
* **boostRUs**: int
* **databases**: [MongoDbMigrationSettingsDatabases](#mongodbmigrationsettingsdatabases) (Required)
* **replication**: 'Continuous' | 'Disabled' | 'OneTime'
* **source**: [MongoDbConnectionInfo](#mongodbconnectioninfo) (Required)
* **target**: [MongoDbConnectionInfo](#mongodbconnectioninfo) (Required)
* **throttling**: [MongoDbThrottlingSettings](#mongodbthrottlingsettings)

## MongoDbMigrationSettingsDatabases
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbDatabaseSettings](#mongodbdatabasesettings)

## MongoDbDatabaseSettings
### Properties
* **collections**: [MongoDbDatabaseSettingsCollections](#mongodbdatabasesettingscollections) (Required)
* **targetRUs**: int

## MongoDbDatabaseSettingsCollections
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
* **errors**: [MongoDbProgressErrors](#mongodbprogresserrors) (Required)
* **eventsPending**: int (Required)
* **eventsReplayed**: int (Required)
* **lastEventTime**: string
* **lastReplayTime**: string
* **name**: string
* **qualifiedName**: string
* **state**: 'Canceled' | 'Complete' | 'Copying' | 'Failed' | 'Finalizing' | 'InitialReplay' | 'Initializing' | 'NotStarted' | 'Replaying' | 'Restarting' | 'ValidatingInput' (Required)
* **totalBytes**: int (Required)
* **totalDocuments**: int (Required)
### MongoDbCollectionProgress
#### Properties
* **resultType**: 'Collection' (Required)

### MongoDbDatabaseProgress
#### Properties
* **collections**: [MongoDbDatabaseProgressCollections](#mongodbdatabaseprogresscollections)
* **resultType**: 'Database' (Required)

### MongoDbMigrationProgress
#### Properties
* **databases**: [MongoDbMigrationProgressDatabases](#mongodbmigrationprogressdatabases)
* **resultType**: 'Migration' (Required)


## MongoDbProgressErrors
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbError](#mongodberror)

## MongoDbError
### Properties
* **code**: string
* **count**: int
* **message**: string
* **type**: 'Error' | 'ValidationError' | 'Warning'

## MongoDbCollectionProgress
### Properties
* **resultType**: 'Collection' (Required)

## MongoDbDatabaseProgress
### Properties
* **collections**: [MongoDbDatabaseProgressCollections](#mongodbdatabaseprogresscollections)
* **resultType**: 'Database' (Required)

## MongoDbDatabaseProgressCollections
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbCollectionProgress](#mongodbcollectionprogress)

## MongoDbMigrationProgress
### Properties
* **databases**: [MongoDbMigrationProgressDatabases](#mongodbmigrationprogressdatabases)
* **resultType**: 'Migration' (Required)

## MongoDbMigrationProgressDatabases
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbDatabaseProgress](#mongodbdatabaseprogress)

## MigrateMySqlAzureDbForMySqlSyncTaskProperties
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
* **migrationSetting**: [MigrateMySqlAzureDbForMySqlSyncDatabaseInputMigrationSetting](#migratemysqlazuredbformysqlsyncdatabaseinputmigrationsetting)
* **name**: string
* **sourceSetting**: [MigrateMySqlAzureDbForMySqlSyncDatabaseInputSourceSetting](#migratemysqlazuredbformysqlsyncdatabaseinputsourcesetting)
* **tableMap**: [MigrateMySqlAzureDbForMySqlSyncDatabaseInputTableMap](#migratemysqlazuredbformysqlsyncdatabaseinputtablemap)
* **targetDatabaseName**: string
* **targetSetting**: [MigrateMySqlAzureDbForMySqlSyncDatabaseInputTargetSetting](#migratemysqlazuredbformysqlsyncdatabaseinputtargetsetting)

## MigrateMySqlAzureDbForMySqlSyncDatabaseInputMigrationSetting
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MigrateMySqlAzureDbForMySqlSyncDatabaseInputSourceSetting
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MigrateMySqlAzureDbForMySqlSyncDatabaseInputTableMap
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MigrateMySqlAzureDbForMySqlSyncDatabaseInputTargetSetting
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MigrateMySqlAzureDbForMySqlSyncTaskOutput
* **Discriminator**: resultType

### Base Properties
* **id**: string (ReadOnly)
### MigrateMySqlAzureDbForMySqlSyncTaskOutputDatabaseError
#### Properties
* **errorMessage**: string
* **events**: [SyncMigrationDatabaseErrorEvent](#syncmigrationdatabaseerrorevent)[]
* **resultType**: 'DatabaseLevelErrorOutput' (Required)

### MigrateMySqlAzureDbForMySqlSyncTaskOutputDatabaseLevel
#### Properties
* **appliedChanges**: int (ReadOnly)
* **cdcDeleteCounter**: int (ReadOnly)
* **cdcInsertCounter**: int (ReadOnly)
* **cdcUpdateCounter**: int (ReadOnly)
* **databaseName**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **fullLoadCompletedTables**: int (ReadOnly)
* **fullLoadErroredTables**: int (ReadOnly)
* **fullLoadLoadingTables**: int (ReadOnly)
* **fullLoadQueuedTables**: int (ReadOnly)
* **incomingChanges**: int (ReadOnly)
* **initializationCompleted**: bool (ReadOnly)
* **latency**: int (ReadOnly)
* **migrationState**: 'BACKUP_COMPLETED' | 'BACKUP_IN_PROGRESS' | 'CANCELLED' | 'CANCELLING' | 'COMPLETE' | 'COMPLETING' | 'CONFIGURING' | 'FAILED' | 'INITIALIAZING' | 'READY_TO_COMPLETE' | 'RESTORE_COMPLETED' | 'RESTORE_IN_PROGRESS' | 'RUNNING' | 'STARTING' | 'UNDEFINED' | 'VALIDATING' | 'VALIDATION_COMPLETE' | 'VALIDATION_FAILED' (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **startedOn**: string (ReadOnly)

### MigrateMySqlAzureDbForMySqlSyncTaskOutputError
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

### MigrateMySqlAzureDbForMySqlSyncTaskOutputMigrationLevel
#### Properties
* **endedOn**: string (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServer**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **targetServer**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

### MigrateMySqlAzureDbForMySqlSyncTaskOutputTableLevel
#### Properties
* **cdcDeleteCounter**: string (ReadOnly)
* **cdcInsertCounter**: string (ReadOnly)
* **cdcUpdateCounter**: string (ReadOnly)
* **databaseName**: string (ReadOnly)
* **dataErrorsCounter**: int (ReadOnly)
* **fullLoadEndedOn**: string (ReadOnly)
* **fullLoadEstFinishTime**: string (ReadOnly)
* **fullLoadStartedOn**: string (ReadOnly)
* **fullLoadTotalRows**: int (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **resultType**: 'TableLevelOutput' (Required)
* **state**: 'BEFORE_LOAD' | 'CANCELED' | 'COMPLETED' | 'ERROR' | 'FAILED' | 'FULL_LOAD' (ReadOnly)
* **tableName**: string (ReadOnly)
* **totalChangesApplied**: int (ReadOnly)


## MigrateMySqlAzureDbForMySqlSyncTaskOutputDatabaseError
### Properties
* **errorMessage**: string
* **events**: [SyncMigrationDatabaseErrorEvent](#syncmigrationdatabaseerrorevent)[]
* **resultType**: 'DatabaseLevelErrorOutput' (Required)

## SyncMigrationDatabaseErrorEvent
### Properties
* **eventText**: string (ReadOnly)
* **eventTypeString**: string (ReadOnly)
* **timestampString**: string (ReadOnly)

## MigrateMySqlAzureDbForMySqlSyncTaskOutputDatabaseLevel
### Properties
* **appliedChanges**: int (ReadOnly)
* **cdcDeleteCounter**: int (ReadOnly)
* **cdcInsertCounter**: int (ReadOnly)
* **cdcUpdateCounter**: int (ReadOnly)
* **databaseName**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **fullLoadCompletedTables**: int (ReadOnly)
* **fullLoadErroredTables**: int (ReadOnly)
* **fullLoadLoadingTables**: int (ReadOnly)
* **fullLoadQueuedTables**: int (ReadOnly)
* **incomingChanges**: int (ReadOnly)
* **initializationCompleted**: bool (ReadOnly)
* **latency**: int (ReadOnly)
* **migrationState**: 'BACKUP_COMPLETED' | 'BACKUP_IN_PROGRESS' | 'CANCELLED' | 'CANCELLING' | 'COMPLETE' | 'COMPLETING' | 'CONFIGURING' | 'FAILED' | 'INITIALIAZING' | 'READY_TO_COMPLETE' | 'RESTORE_COMPLETED' | 'RESTORE_IN_PROGRESS' | 'RUNNING' | 'STARTING' | 'UNDEFINED' | 'VALIDATING' | 'VALIDATION_COMPLETE' | 'VALIDATION_FAILED' (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **startedOn**: string (ReadOnly)

## MigrateMySqlAzureDbForMySqlSyncTaskOutputError
### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

## MigrateMySqlAzureDbForMySqlSyncTaskOutputMigrationLevel
### Properties
* **endedOn**: string (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServer**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **targetServer**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

## MigrateMySqlAzureDbForMySqlSyncTaskOutputTableLevel
### Properties
* **cdcDeleteCounter**: string (ReadOnly)
* **cdcInsertCounter**: string (ReadOnly)
* **cdcUpdateCounter**: string (ReadOnly)
* **databaseName**: string (ReadOnly)
* **dataErrorsCounter**: int (ReadOnly)
* **fullLoadEndedOn**: string (ReadOnly)
* **fullLoadEstFinishTime**: string (ReadOnly)
* **fullLoadStartedOn**: string (ReadOnly)
* **fullLoadTotalRows**: int (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **resultType**: 'TableLevelOutput' (Required)
* **state**: 'BEFORE_LOAD' | 'CANCELED' | 'COMPLETED' | 'ERROR' | 'FAILED' | 'FULL_LOAD' (ReadOnly)
* **tableName**: string (ReadOnly)
* **totalChangesApplied**: int (ReadOnly)

## MigrateOracleAzureDbForPostgreSqlSyncTaskProperties
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
* **migrationSetting**: [MigrateOracleAzureDbPostgreSqlSyncDatabaseInputMigrationSetting](#migrateoracleazuredbpostgresqlsyncdatabaseinputmigrationsetting)
* **name**: string
* **schemaName**: string
* **sourceSetting**: [MigrateOracleAzureDbPostgreSqlSyncDatabaseInputSourceSetting](#migrateoracleazuredbpostgresqlsyncdatabaseinputsourcesetting)
* **tableMap**: [MigrateOracleAzureDbPostgreSqlSyncDatabaseInputTableMap](#migrateoracleazuredbpostgresqlsyncdatabaseinputtablemap)
* **targetDatabaseName**: string
* **targetSetting**: [MigrateOracleAzureDbPostgreSqlSyncDatabaseInputTargetSetting](#migrateoracleazuredbpostgresqlsyncdatabaseinputtargetsetting)

## MigrateOracleAzureDbPostgreSqlSyncDatabaseInputMigrationSetting
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MigrateOracleAzureDbPostgreSqlSyncDatabaseInputSourceSetting
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MigrateOracleAzureDbPostgreSqlSyncDatabaseInputTableMap
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MigrateOracleAzureDbPostgreSqlSyncDatabaseInputTargetSetting
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MigrateOracleAzureDbPostgreSqlSyncTaskOutput
* **Discriminator**: resultType

### Base Properties
* **id**: string (ReadOnly)
### MigrateOracleAzureDbPostgreSqlSyncTaskOutputDatabaseError
#### Properties
* **errorMessage**: string
* **events**: [SyncMigrationDatabaseErrorEvent](#syncmigrationdatabaseerrorevent)[]
* **resultType**: 'DatabaseLevelErrorOutput' (Required)

### MigrateOracleAzureDbPostgreSqlSyncTaskOutputDatabaseLevel
#### Properties
* **appliedChanges**: int (ReadOnly)
* **cdcDeleteCounter**: int (ReadOnly)
* **cdcInsertCounter**: int (ReadOnly)
* **cdcUpdateCounter**: int (ReadOnly)
* **databaseName**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **fullLoadCompletedTables**: int (ReadOnly)
* **fullLoadErroredTables**: int (ReadOnly)
* **fullLoadLoadingTables**: int (ReadOnly)
* **fullLoadQueuedTables**: int (ReadOnly)
* **incomingChanges**: int (ReadOnly)
* **initializationCompleted**: bool (ReadOnly)
* **latency**: int (ReadOnly)
* **migrationState**: 'BACKUP_COMPLETED' | 'BACKUP_IN_PROGRESS' | 'CANCELLED' | 'CANCELLING' | 'COMPLETE' | 'COMPLETING' | 'CONFIGURING' | 'FAILED' | 'INITIALIAZING' | 'READY_TO_COMPLETE' | 'RESTORE_COMPLETED' | 'RESTORE_IN_PROGRESS' | 'RUNNING' | 'STARTING' | 'UNDEFINED' | 'VALIDATING' | 'VALIDATION_COMPLETE' | 'VALIDATION_FAILED' (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **startedOn**: string (ReadOnly)

### MigrateOracleAzureDbPostgreSqlSyncTaskOutputError
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

### MigrateOracleAzureDbPostgreSqlSyncTaskOutputMigrationLevel
#### Properties
* **endedOn**: string (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServer**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **targetServer**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

### MigrateOracleAzureDbPostgreSqlSyncTaskOutputTableLevel
#### Properties
* **cdcDeleteCounter**: int (ReadOnly)
* **cdcInsertCounter**: int (ReadOnly)
* **cdcUpdateCounter**: int (ReadOnly)
* **databaseName**: string (ReadOnly)
* **dataErrorsCounter**: int (ReadOnly)
* **fullLoadEndedOn**: string (ReadOnly)
* **fullLoadEstFinishTime**: string (ReadOnly)
* **fullLoadStartedOn**: string (ReadOnly)
* **fullLoadTotalRows**: int (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **resultType**: 'TableLevelOutput' (Required)
* **state**: 'BEFORE_LOAD' | 'CANCELED' | 'COMPLETED' | 'ERROR' | 'FAILED' | 'FULL_LOAD' (ReadOnly)
* **tableName**: string (ReadOnly)
* **totalChangesApplied**: int (ReadOnly)


## MigrateOracleAzureDbPostgreSqlSyncTaskOutputDatabaseError
### Properties
* **errorMessage**: string
* **events**: [SyncMigrationDatabaseErrorEvent](#syncmigrationdatabaseerrorevent)[]
* **resultType**: 'DatabaseLevelErrorOutput' (Required)

## MigrateOracleAzureDbPostgreSqlSyncTaskOutputDatabaseLevel
### Properties
* **appliedChanges**: int (ReadOnly)
* **cdcDeleteCounter**: int (ReadOnly)
* **cdcInsertCounter**: int (ReadOnly)
* **cdcUpdateCounter**: int (ReadOnly)
* **databaseName**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **fullLoadCompletedTables**: int (ReadOnly)
* **fullLoadErroredTables**: int (ReadOnly)
* **fullLoadLoadingTables**: int (ReadOnly)
* **fullLoadQueuedTables**: int (ReadOnly)
* **incomingChanges**: int (ReadOnly)
* **initializationCompleted**: bool (ReadOnly)
* **latency**: int (ReadOnly)
* **migrationState**: 'BACKUP_COMPLETED' | 'BACKUP_IN_PROGRESS' | 'CANCELLED' | 'CANCELLING' | 'COMPLETE' | 'COMPLETING' | 'CONFIGURING' | 'FAILED' | 'INITIALIAZING' | 'READY_TO_COMPLETE' | 'RESTORE_COMPLETED' | 'RESTORE_IN_PROGRESS' | 'RUNNING' | 'STARTING' | 'UNDEFINED' | 'VALIDATING' | 'VALIDATION_COMPLETE' | 'VALIDATION_FAILED' (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **startedOn**: string (ReadOnly)

## MigrateOracleAzureDbPostgreSqlSyncTaskOutputError
### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

## MigrateOracleAzureDbPostgreSqlSyncTaskOutputMigrationLevel
### Properties
* **endedOn**: string (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServer**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **targetServer**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

## MigrateOracleAzureDbPostgreSqlSyncTaskOutputTableLevel
### Properties
* **cdcDeleteCounter**: int (ReadOnly)
* **cdcInsertCounter**: int (ReadOnly)
* **cdcUpdateCounter**: int (ReadOnly)
* **databaseName**: string (ReadOnly)
* **dataErrorsCounter**: int (ReadOnly)
* **fullLoadEndedOn**: string (ReadOnly)
* **fullLoadEstFinishTime**: string (ReadOnly)
* **fullLoadStartedOn**: string (ReadOnly)
* **fullLoadTotalRows**: int (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **resultType**: 'TableLevelOutput' (Required)
* **state**: 'BEFORE_LOAD' | 'CANCELED' | 'COMPLETED' | 'ERROR' | 'FAILED' | 'FULL_LOAD' (ReadOnly)
* **tableName**: string (ReadOnly)
* **totalChangesApplied**: int (ReadOnly)

## MigratePostgreSqlAzureDbForPostgreSqlSyncTaskProperties
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
* **migrationSetting**: [MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputMigrationSetting](#migratepostgresqlazuredbforpostgresqlsyncdatabaseinputmigrationsetting)
* **name**: string
* **selectedTables**: [MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseTableInput](#migratepostgresqlazuredbforpostgresqlsyncdatabasetableinput)[]
* **sourceSetting**: [MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputSourceSetting](#migratepostgresqlazuredbforpostgresqlsyncdatabaseinputsourcesetting)
* **targetDatabaseName**: string
* **targetSetting**: [MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputTargetSetting](#migratepostgresqlazuredbforpostgresqlsyncdatabaseinputtargetsetting)

## MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputMigrationSetting
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseTableInput
### Properties
* **name**: string

## MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputSourceSetting
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputTargetSetting
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput
* **Discriminator**: resultType

### Base Properties
* **id**: string (ReadOnly)
### MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputDatabaseError
#### Properties
* **errorMessage**: string
* **events**: [SyncMigrationDatabaseErrorEvent](#syncmigrationdatabaseerrorevent)[]
* **resultType**: 'DatabaseLevelErrorOutput' (Required)

### MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputDatabaseLevel
#### Properties
* **appliedChanges**: int (ReadOnly)
* **cdcDeleteCounter**: int (ReadOnly)
* **cdcInsertCounter**: int (ReadOnly)
* **cdcUpdateCounter**: int (ReadOnly)
* **databaseName**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **fullLoadCompletedTables**: int (ReadOnly)
* **fullLoadErroredTables**: int (ReadOnly)
* **fullLoadLoadingTables**: int (ReadOnly)
* **fullLoadQueuedTables**: int (ReadOnly)
* **incomingChanges**: int (ReadOnly)
* **initializationCompleted**: bool (ReadOnly)
* **latency**: int (ReadOnly)
* **migrationState**: 'BACKUP_COMPLETED' | 'BACKUP_IN_PROGRESS' | 'CANCELLED' | 'CANCELLING' | 'COMPLETE' | 'COMPLETING' | 'CONFIGURING' | 'FAILED' | 'INITIALIAZING' | 'READY_TO_COMPLETE' | 'RESTORE_COMPLETED' | 'RESTORE_IN_PROGRESS' | 'RUNNING' | 'STARTING' | 'UNDEFINED' | 'VALIDATING' | 'VALIDATION_COMPLETE' | 'VALIDATION_FAILED' (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **startedOn**: string (ReadOnly)

### MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputError
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

### MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputMigrationLevel
#### Properties
* **endedOn**: string (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServer**: string (ReadOnly)
* **sourceServerType**: 'Access' | 'DB2' | 'MongoDB' | 'MySQL' | 'MySQLRDS' | 'Oracle' | 'PostgreSQL' | 'PostgreSQLRDS' | 'SQL' | 'SQLRDS' | 'Sybase' (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'ACTION_REQUIRED' | 'COMPLETE' | 'FAILED' | 'PENDING' | 'UNDEFINED' | 'VALIDATING' (ReadOnly)
* **targetServer**: string (ReadOnly)
* **targetServerType**: 'AzureDBForMySql' | 'AzureDBForPostgresSQL' | 'MongoDB' | 'SQLDB' | 'SQLDW' | 'SQLMI' | 'SQLServer' (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

### MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputTableLevel
#### Properties
* **cdcDeleteCounter**: int (ReadOnly)
* **cdcInsertCounter**: int (ReadOnly)
* **cdcUpdateCounter**: int (ReadOnly)
* **databaseName**: string (ReadOnly)
* **dataErrorsCounter**: int (ReadOnly)
* **fullLoadEndedOn**: string (ReadOnly)
* **fullLoadEstFinishTime**: string (ReadOnly)
* **fullLoadStartedOn**: string (ReadOnly)
* **fullLoadTotalRows**: int (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **resultType**: 'TableLevelOutput' (Required)
* **state**: 'BEFORE_LOAD' | 'CANCELED' | 'COMPLETED' | 'ERROR' | 'FAILED' | 'FULL_LOAD' (ReadOnly)
* **tableName**: string (ReadOnly)
* **totalChangesApplied**: int (ReadOnly)


## MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputDatabaseError
### Properties
* **errorMessage**: string
* **events**: [SyncMigrationDatabaseErrorEvent](#syncmigrationdatabaseerrorevent)[]
* **resultType**: 'DatabaseLevelErrorOutput' (Required)

## MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputDatabaseLevel
### Properties
* **appliedChanges**: int (ReadOnly)
* **cdcDeleteCounter**: int (ReadOnly)
* **cdcInsertCounter**: int (ReadOnly)
* **cdcUpdateCounter**: int (ReadOnly)
* **databaseName**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **fullLoadCompletedTables**: int (ReadOnly)
* **fullLoadErroredTables**: int (ReadOnly)
* **fullLoadLoadingTables**: int (ReadOnly)
* **fullLoadQueuedTables**: int (ReadOnly)
* **incomingChanges**: int (ReadOnly)
* **initializationCompleted**: bool (ReadOnly)
* **latency**: int (ReadOnly)
* **migrationState**: 'BACKUP_COMPLETED' | 'BACKUP_IN_PROGRESS' | 'CANCELLED' | 'CANCELLING' | 'COMPLETE' | 'COMPLETING' | 'CONFIGURING' | 'FAILED' | 'INITIALIAZING' | 'READY_TO_COMPLETE' | 'RESTORE_COMPLETED' | 'RESTORE_IN_PROGRESS' | 'RUNNING' | 'STARTING' | 'UNDEFINED' | 'VALIDATING' | 'VALIDATION_COMPLETE' | 'VALIDATION_FAILED' (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **startedOn**: string (ReadOnly)

## MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputError
### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

## MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputMigrationLevel
### Properties
* **endedOn**: string (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServer**: string (ReadOnly)
* **sourceServerType**: 'Access' | 'DB2' | 'MongoDB' | 'MySQL' | 'MySQLRDS' | 'Oracle' | 'PostgreSQL' | 'PostgreSQLRDS' | 'SQL' | 'SQLRDS' | 'Sybase' (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'ACTION_REQUIRED' | 'COMPLETE' | 'FAILED' | 'PENDING' | 'UNDEFINED' | 'VALIDATING' (ReadOnly)
* **targetServer**: string (ReadOnly)
* **targetServerType**: 'AzureDBForMySql' | 'AzureDBForPostgresSQL' | 'MongoDB' | 'SQLDB' | 'SQLDW' | 'SQLMI' | 'SQLServer' (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

## MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputTableLevel
### Properties
* **cdcDeleteCounter**: int (ReadOnly)
* **cdcInsertCounter**: int (ReadOnly)
* **cdcUpdateCounter**: int (ReadOnly)
* **databaseName**: string (ReadOnly)
* **dataErrorsCounter**: int (ReadOnly)
* **fullLoadEndedOn**: string (ReadOnly)
* **fullLoadEstFinishTime**: string (ReadOnly)
* **fullLoadStartedOn**: string (ReadOnly)
* **fullLoadTotalRows**: int (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **resultType**: 'TableLevelOutput' (Required)
* **state**: 'BEFORE_LOAD' | 'CANCELED' | 'COMPLETED' | 'ERROR' | 'FAILED' | 'FULL_LOAD' (ReadOnly)
* **tableName**: string (ReadOnly)
* **totalChangesApplied**: int (ReadOnly)

## MigrateSqlServerSqlDbSyncTaskProperties
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
* **migrationSetting**: [MigrateSqlServerSqlDbSyncDatabaseInputMigrationSetting](#migratesqlserversqldbsyncdatabaseinputmigrationsetting)
* **name**: string
* **schemaName**: string
* **sourceSetting**: [MigrateSqlServerSqlDbSyncDatabaseInputSourceSetting](#migratesqlserversqldbsyncdatabaseinputsourcesetting)
* **tableMap**: [MigrateSqlServerSqlDbSyncDatabaseInputTableMap](#migratesqlserversqldbsyncdatabaseinputtablemap)
* **targetDatabaseName**: string
* **targetSetting**: [MigrateSqlServerSqlDbSyncDatabaseInputTargetSetting](#migratesqlserversqldbsyncdatabaseinputtargetsetting)

## MigrateSqlServerSqlDbSyncDatabaseInputMigrationSetting
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MigrateSqlServerSqlDbSyncDatabaseInputSourceSetting
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MigrateSqlServerSqlDbSyncDatabaseInputTableMap
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MigrateSqlServerSqlDbSyncDatabaseInputTargetSetting
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
### MigrateSqlServerSqlDbSyncTaskOutputDatabaseError
#### Properties
* **errorMessage**: string
* **events**: [SyncMigrationDatabaseErrorEvent](#syncmigrationdatabaseerrorevent)[]
* **resultType**: 'DatabaseLevelErrorOutput' (Required)

### MigrateSqlServerSqlDbSyncTaskOutputDatabaseLevel
#### Properties
* **appliedChanges**: int (ReadOnly)
* **cdcDeleteCounter**: int (ReadOnly)
* **cdcInsertCounter**: int (ReadOnly)
* **cdcUpdateCounter**: int (ReadOnly)
* **databaseName**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **fullLoadCompletedTables**: int (ReadOnly)
* **fullLoadErroredTables**: int (ReadOnly)
* **fullLoadLoadingTables**: int (ReadOnly)
* **fullLoadQueuedTables**: int (ReadOnly)
* **incomingChanges**: int (ReadOnly)
* **initializationCompleted**: bool (ReadOnly)
* **latency**: int (ReadOnly)
* **migrationState**: 'BACKUP_COMPLETED' | 'BACKUP_IN_PROGRESS' | 'CANCELLED' | 'CANCELLING' | 'COMPLETE' | 'COMPLETING' | 'CONFIGURING' | 'FAILED' | 'INITIALIAZING' | 'READY_TO_COMPLETE' | 'RESTORE_COMPLETED' | 'RESTORE_IN_PROGRESS' | 'RUNNING' | 'STARTING' | 'UNDEFINED' | 'VALIDATING' | 'VALIDATION_COMPLETE' | 'VALIDATION_FAILED' (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **startedOn**: string (ReadOnly)

### MigrateSqlServerSqlDbSyncTaskOutputError
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

### MigrateSqlServerSqlDbSyncTaskOutputMigrationLevel
#### Properties
* **databaseCount**: int (ReadOnly)
* **endedOn**: string (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServer**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **targetServer**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

### MigrateSqlServerSqlDbSyncTaskOutputTableLevel
#### Properties
* **cdcDeleteCounter**: int (ReadOnly)
* **cdcInsertCounter**: int (ReadOnly)
* **cdcUpdateCounter**: int (ReadOnly)
* **databaseName**: string (ReadOnly)
* **dataErrorsCounter**: int (ReadOnly)
* **fullLoadEndedOn**: string (ReadOnly)
* **fullLoadEstFinishTime**: string (ReadOnly)
* **fullLoadStartedOn**: string (ReadOnly)
* **fullLoadTotalRows**: int (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **resultType**: 'TableLevelOutput' (Required)
* **state**: 'BEFORE_LOAD' | 'CANCELED' | 'COMPLETED' | 'ERROR' | 'FAILED' | 'FULL_LOAD' (ReadOnly)
* **tableName**: string (ReadOnly)
* **totalChangesApplied**: int (ReadOnly)


## MigrateSqlServerSqlDbSyncTaskOutputDatabaseError
### Properties
* **errorMessage**: string
* **events**: [SyncMigrationDatabaseErrorEvent](#syncmigrationdatabaseerrorevent)[]
* **resultType**: 'DatabaseLevelErrorOutput' (Required)

## MigrateSqlServerSqlDbSyncTaskOutputDatabaseLevel
### Properties
* **appliedChanges**: int (ReadOnly)
* **cdcDeleteCounter**: int (ReadOnly)
* **cdcInsertCounter**: int (ReadOnly)
* **cdcUpdateCounter**: int (ReadOnly)
* **databaseName**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **fullLoadCompletedTables**: int (ReadOnly)
* **fullLoadErroredTables**: int (ReadOnly)
* **fullLoadLoadingTables**: int (ReadOnly)
* **fullLoadQueuedTables**: int (ReadOnly)
* **incomingChanges**: int (ReadOnly)
* **initializationCompleted**: bool (ReadOnly)
* **latency**: int (ReadOnly)
* **migrationState**: 'BACKUP_COMPLETED' | 'BACKUP_IN_PROGRESS' | 'CANCELLED' | 'CANCELLING' | 'COMPLETE' | 'COMPLETING' | 'CONFIGURING' | 'FAILED' | 'INITIALIAZING' | 'READY_TO_COMPLETE' | 'RESTORE_COMPLETED' | 'RESTORE_IN_PROGRESS' | 'RUNNING' | 'STARTING' | 'UNDEFINED' | 'VALIDATING' | 'VALIDATION_COMPLETE' | 'VALIDATION_FAILED' (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **startedOn**: string (ReadOnly)

## MigrateSqlServerSqlDbSyncTaskOutputError
### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

## MigrateSqlServerSqlDbSyncTaskOutputMigrationLevel
### Properties
* **databaseCount**: int (ReadOnly)
* **endedOn**: string (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServer**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **targetServer**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

## MigrateSqlServerSqlDbSyncTaskOutputTableLevel
### Properties
* **cdcDeleteCounter**: int (ReadOnly)
* **cdcInsertCounter**: int (ReadOnly)
* **cdcUpdateCounter**: int (ReadOnly)
* **databaseName**: string (ReadOnly)
* **dataErrorsCounter**: int (ReadOnly)
* **fullLoadEndedOn**: string (ReadOnly)
* **fullLoadEstFinishTime**: string (ReadOnly)
* **fullLoadStartedOn**: string (ReadOnly)
* **fullLoadTotalRows**: int (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **resultType**: 'TableLevelOutput' (Required)
* **state**: 'BEFORE_LOAD' | 'CANCELED' | 'COMPLETED' | 'ERROR' | 'FAILED' | 'FULL_LOAD' (ReadOnly)
* **tableName**: string (ReadOnly)
* **totalChangesApplied**: int (ReadOnly)

## MigrateSqlServerSqlMITaskProperties
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
### MigrateSqlServerSqlMITaskOutputAgentJobLevel
#### Properties
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **isEnabled**: bool (ReadOnly)
* **message**: string (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'AgentJobLevelOutput' (Required)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

### MigrateSqlServerSqlMITaskOutputDatabaseLevel
#### Properties
* **databaseName**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **message**: string (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **sizeMB**: int (ReadOnly)
* **stage**: 'Backup' | 'Completed' | 'FileCopy' | 'Initialize' | 'None' | 'Restore' (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

### MigrateSqlServerSqlMITaskOutputError
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

### MigrateSqlServerSqlMITaskOutputLoginLevel
#### Properties
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **loginName**: string (ReadOnly)
* **message**: string (ReadOnly)
* **resultType**: 'LoginLevelOutput' (Required)
* **stage**: 'AssignRoleMembership' | 'AssignRoleOwnership' | 'Completed' | 'EstablishObjectPermissions' | 'EstablishServerPermissions' | 'EstablishUserMapping' | 'Initialize' | 'LoginMigration' | 'None' (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

### MigrateSqlServerSqlMITaskOutputMigrationLevel
#### Properties
* **agentJobs**: string (ReadOnly)
* **databases**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **logins**: string (ReadOnly)
* **message**: string (ReadOnly)
* **orphanedUsersInfo**: [OrphanedUserInfo](#orphaneduserinfo)[] (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **serverRoleResults**: string (ReadOnly)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)


## MigrateSqlServerSqlMITaskOutputAgentJobLevel
### Properties
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **isEnabled**: bool (ReadOnly)
* **message**: string (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'AgentJobLevelOutput' (Required)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

## MigrateSqlServerSqlMITaskOutputDatabaseLevel
### Properties
* **databaseName**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **message**: string (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **sizeMB**: int (ReadOnly)
* **stage**: 'Backup' | 'Completed' | 'FileCopy' | 'Initialize' | 'None' | 'Restore' (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

## MigrateSqlServerSqlMITaskOutputError
### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

## MigrateSqlServerSqlMITaskOutputLoginLevel
### Properties
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **loginName**: string (ReadOnly)
* **message**: string (ReadOnly)
* **resultType**: 'LoginLevelOutput' (Required)
* **stage**: 'AssignRoleMembership' | 'AssignRoleOwnership' | 'Completed' | 'EstablishObjectPermissions' | 'EstablishServerPermissions' | 'EstablishUserMapping' | 'Initialize' | 'LoginMigration' | 'None' (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

## MigrateSqlServerSqlMITaskOutputMigrationLevel
### Properties
* **agentJobs**: string (ReadOnly)
* **databases**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **logins**: string (ReadOnly)
* **message**: string (ReadOnly)
* **orphanedUsersInfo**: [OrphanedUserInfo](#orphaneduserinfo)[] (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **serverRoleResults**: string (ReadOnly)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

## OrphanedUserInfo
### Properties
* **databaseName**: string
* **name**: string

## MigrateSqlServerSqlMISyncTaskProperties
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
### MigrateSqlServerSqlMISyncTaskOutputDatabaseLevel
#### Properties
* **activeBackupSets**: [BackupSetInfo](#backupsetinfo)[] (ReadOnly)
* **containerName**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **errorPrefix**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **fullBackupSetInfo**: [BackupSetInfo](#backupsetinfo) (ReadOnly)
* **isFullBackupRestored**: bool (ReadOnly)
* **lastRestoredBackupSetInfo**: [BackupSetInfo](#backupsetinfo) (ReadOnly)
* **migrationState**: 'CANCELLED' | 'COMPLETED' | 'CUTOVER_START' | 'FAILED' | 'FULL_BACKUP_UPLOAD_START' | 'INITIAL' | 'LOG_SHIPPING_START' | 'POST_CUTOVER_COMPLETE' | 'UNDEFINED' | 'UPLOAD_LOG_FILES_START' (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **sourceDatabaseName**: string (ReadOnly)
* **startedOn**: string (ReadOnly)

### MigrateSqlServerSqlMISyncTaskOutputError
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

### MigrateSqlServerSqlMISyncTaskOutputMigrationLevel
#### Properties
* **databaseCount**: int (ReadOnly)
* **databaseErrorCount**: int (ReadOnly)
* **endedOn**: string (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerName**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerName**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)


## MigrateSqlServerSqlMISyncTaskOutputDatabaseLevel
### Properties
* **activeBackupSets**: [BackupSetInfo](#backupsetinfo)[] (ReadOnly)
* **containerName**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **errorPrefix**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **fullBackupSetInfo**: [BackupSetInfo](#backupsetinfo) (ReadOnly)
* **isFullBackupRestored**: bool (ReadOnly)
* **lastRestoredBackupSetInfo**: [BackupSetInfo](#backupsetinfo) (ReadOnly)
* **migrationState**: 'CANCELLED' | 'COMPLETED' | 'CUTOVER_START' | 'FAILED' | 'FULL_BACKUP_UPLOAD_START' | 'INITIAL' | 'LOG_SHIPPING_START' | 'POST_CUTOVER_COMPLETE' | 'UNDEFINED' | 'UPLOAD_LOG_FILES_START' (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **sourceDatabaseName**: string (ReadOnly)
* **startedOn**: string (ReadOnly)

## BackupSetInfo
### Properties
* **backupFinishedDate**: string
* **backupSetId**: string
* **backupStartDate**: string
* **backupType**: 'Database' | 'DifferentialDatabase' | 'DifferentialFile' | 'DifferentialPartial' | 'File' | 'Partial' | 'TransactionLog'
* **databaseName**: string
* **firstLsn**: string
* **isBackupRestored**: bool
* **lastLsn**: string
* **lastModifiedTime**: string
* **listOfBackupFiles**: [BackupFileInfo](#backupfileinfo)[]

## BackupFileInfo
### Properties
* **familySequenceNumber**: int
* **fileLocation**: string
* **status**: 'Arrived' | 'Cancelled' | 'Queued' | 'Restored' | 'Restoring' | 'Uploaded' | 'Uploading'

## MigrateSqlServerSqlMISyncTaskOutputError
### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

## MigrateSqlServerSqlMISyncTaskOutputMigrationLevel
### Properties
* **databaseCount**: int (ReadOnly)
* **databaseErrorCount**: int (ReadOnly)
* **endedOn**: string (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerName**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerName**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

## MigrateSqlServerSqlDbTaskProperties
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
* **tableMap**: [MigrateSqlServerSqlDbDatabaseInputTableMap](#migratesqlserversqldbdatabaseinputtablemap)
* **targetDatabaseName**: string

## MigrateSqlServerSqlDbDatabaseInputTableMap
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MigrateSqlServerSqlDbTaskOutput
* **Discriminator**: resultType

### Base Properties
* **id**: string (ReadOnly)
### MigrateSqlServerSqlDbTaskOutputDatabaseLevel
#### Properties
* **databaseName**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **errorCount**: int (ReadOnly)
* **errorPrefix**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **message**: string (ReadOnly)
* **numberOfObjects**: int (ReadOnly)
* **numberOfObjectsCompleted**: int (ReadOnly)
* **objectSummary**: string (ReadOnly)
* **resultPrefix**: string (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **stage**: 'Backup' | 'Completed' | 'FileCopy' | 'Initialize' | 'None' | 'Restore' (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **statusMessage**: string (ReadOnly)

### MigrateSqlServerSqlDbTaskOutputError
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

### MigrateSqlServerSqlDbTaskOutputMigrationLevel
#### Properties
* **databases**: string (ReadOnly)
* **databaseSummary**: string (ReadOnly)
* **durationInSeconds**: int (ReadOnly)
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **message**: string (ReadOnly)
* **migrationReportResult**: [MigrationReportResult](#migrationreportresult)
* **migrationValidationResult**: [MigrationValidationResult](#migrationvalidationresult)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly)
* **statusMessage**: string (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

### MigrateSqlServerSqlDbTaskOutputTableLevel
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


## MigrateSqlServerSqlDbTaskOutputDatabaseLevel
### Properties
* **databaseName**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **errorCount**: int (ReadOnly)
* **errorPrefix**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **message**: string (ReadOnly)
* **numberOfObjects**: int (ReadOnly)
* **numberOfObjectsCompleted**: int (ReadOnly)
* **objectSummary**: string (ReadOnly)
* **resultPrefix**: string (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **stage**: 'Backup' | 'Completed' | 'FileCopy' | 'Initialize' | 'None' | 'Restore' (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **statusMessage**: string (ReadOnly)

## MigrateSqlServerSqlDbTaskOutputError
### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

## MigrateSqlServerSqlDbTaskOutputMigrationLevel
### Properties
* **databases**: string (ReadOnly)
* **databaseSummary**: string (ReadOnly)
* **durationInSeconds**: int (ReadOnly)
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **message**: string (ReadOnly)
* **migrationReportResult**: [MigrationReportResult](#migrationreportresult)
* **migrationValidationResult**: [MigrationValidationResult](#migrationvalidationresult)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly)
* **statusMessage**: string (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

## MigrationReportResult
### Properties
* **id**: string
* **reportUrl**: string

## MigrationValidationResult
### Properties
* **id**: string (ReadOnly)
* **migrationId**: string (ReadOnly)
* **status**: 'Completed' | 'CompletedWithIssues' | 'Default' | 'Failed' | 'InProgress' | 'Initialized' | 'NotStarted' | 'Stopped' (ReadOnly)
* **summaryResults**: [MigrationValidationResultSummaryResults](#migrationvalidationresultsummaryresults)

## MigrationValidationResultSummaryResults
### Properties
### Additional Properties
* **Additional Properties Type**: [MigrationValidationDatabaseSummaryResult](#migrationvalidationdatabasesummaryresult)

## MigrationValidationDatabaseSummaryResult
### Properties
* **endedOn**: string (ReadOnly)
* **id**: string (ReadOnly)
* **migrationId**: string (ReadOnly)
* **sourceDatabaseName**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **status**: 'Completed' | 'CompletedWithIssues' | 'Default' | 'Failed' | 'InProgress' | 'Initialized' | 'NotStarted' | 'Stopped' (ReadOnly)
* **targetDatabaseName**: string (ReadOnly)

## MigrateSqlServerSqlDbTaskOutputTableLevel
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

## MigrateSsisTaskProperties
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
### MigrateSsisTaskOutputMigrationLevel
#### Properties
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **message**: string (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **stage**: 'Completed' | 'InProgress' | 'Initialize' | 'None' (ReadOnly)
* **startedOn**: string (ReadOnly)
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

### MigrateSsisTaskOutputProjectLevel
#### Properties
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **folderName**: string (ReadOnly)
* **message**: string (ReadOnly)
* **projectName**: string (ReadOnly)
* **resultType**: 'SsisProjectLevelOutput' (Required)
* **stage**: 'Completed' | 'InProgress' | 'Initialize' | 'None' (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)


## MigrateSsisTaskOutputMigrationLevel
### Properties
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **message**: string (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **stage**: 'Completed' | 'InProgress' | 'Initialize' | 'None' (ReadOnly)
* **startedOn**: string (ReadOnly)
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

## MigrateSsisTaskOutputProjectLevel
### Properties
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **folderName**: string (ReadOnly)
* **message**: string (ReadOnly)
* **projectName**: string (ReadOnly)
* **resultType**: 'SsisProjectLevelOutput' (Required)
* **stage**: 'Completed' | 'InProgress' | 'Initialize' | 'None' (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

## MigrateSchemaSqlServerSqlDbTaskProperties
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
### MigrateSchemaSqlServerSqlDbTaskOutputDatabaseLevel
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

### MigrateSchemaSqlTaskOutputError
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

### MigrateSchemaSqlServerSqlDbTaskOutputMigrationLevel
#### Properties
* **endedOn**: string (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

### MigrateSchemaSqlServerSqlDbTaskOutputError
#### Properties
* **commandText**: string (ReadOnly)
* **errorText**: string (ReadOnly)
* **resultType**: 'SchemaErrorOutput' (Required)


## MigrateSchemaSqlServerSqlDbTaskOutputDatabaseLevel
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

## MigrateSchemaSqlTaskOutputError
### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

## MigrateSchemaSqlServerSqlDbTaskOutputMigrationLevel
### Properties
* **endedOn**: string (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

## MigrateSchemaSqlServerSqlDbTaskOutputError
### Properties
* **commandText**: string (ReadOnly)
* **errorText**: string (ReadOnly)
* **resultType**: 'SchemaErrorOutput' (Required)

## CheckOCIDriverTaskProperties
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

## InstallOCIDriverTaskProperties
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

## UploadOCIDriverTaskProperties
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

## ValidateMongoDbTaskProperties
### Properties
* **input**: [MongoDbMigrationSettings](#mongodbmigrationsettings)
* **output**: [MongoDbMigrationProgress](#mongodbmigrationprogress)[] (ReadOnly)
* **taskType**: 'Validate.MongoDb' (Required)

## ValidateOracleAzureDbForPostgreSqlSyncTaskProperties
### Properties
* **input**: [MigrateOracleAzureDbPostgreSqlSyncTaskInput](#migrateoracleazuredbpostgresqlsynctaskinput)
* **output**: [ValidateOracleAzureDbPostgreSqlSyncTaskOutput](#validateoracleazuredbpostgresqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'Validate.Oracle.AzureDbPostgreSql.Sync' (Required)

## ValidateOracleAzureDbPostgreSqlSyncTaskOutput
### Properties
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

## ValidateMigrationInputSqlServerSqlMITaskProperties
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

## ValidateMigrationInputSqlServerSqlMISyncTaskProperties
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

## ValidateMigrationInputSqlServerSqlDbSyncTaskProperties
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

