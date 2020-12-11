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
* **properties**: DataMigrationServiceProperties
* **sku**: ServiceSku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DataMigration/services' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataMigration/services/projects@2018-07-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProjectProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DataMigration/services/projects' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataMigration/services/projects/files@2018-07-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-15-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProjectFileProperties
* **type**: 'Microsoft.DataMigration/services/projects/files' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataMigration/services/projects/tasks@2018-07-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-15-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProjectTaskProperties
* **type**: 'Microsoft.DataMigration/services/projects/tasks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataMigration/services/serviceTasks@2018-07-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-15-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProjectTaskProperties
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
### Additional Properties
* **Additional Properties Type**: string

## ProjectProperties
### Properties
* **creationTime**: string (ReadOnly)
* **databasesInfo**: DatabaseInfo[]
* **provisioningState**: 'Deleting' | 'Succeeded' (ReadOnly)
* **sourceConnectionInfo**: ConnectionInfo
* **sourcePlatform**: 'MongoDb' | 'MySQL' | 'PostgreSql' | 'SQL' | 'Unknown' (Required)
* **targetConnectionInfo**: ConnectionInfo
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
* **clientData**: Dictionary<string,String>
* **commands**: CommandProperties[] (ReadOnly)
* **errors**: ODataError[] (ReadOnly)
* **state**: 'Canceled' | 'Failed' | 'FailedInputValidation' | 'Faulted' | 'Queued' | 'Running' | 'Succeeded' | 'Unknown' (ReadOnly)
### Connect.MongoDb
#### Properties
* **input**: MongoDbConnectionInfo
* **output**: MongoDbClusterInfo[] (ReadOnly)
* **taskType**: 'Connect.MongoDb' (Required)

### ConnectToSource.MySql
#### Properties
* **input**: ConnectToSourceMySqlTaskInput
* **output**: ConnectToSourceNonSqlTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToSource.MySql' (Required)

### ConnectToSource.Oracle.Sync
#### Properties
* **input**: ConnectToSourceOracleSyncTaskInput
* **output**: ConnectToSourceOracleSyncTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToSource.Oracle.Sync' (Required)

### ConnectToSource.PostgreSql.Sync
#### Properties
* **input**: ConnectToSourcePostgreSqlSyncTaskInput
* **output**: ConnectToSourcePostgreSqlSyncTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToSource.PostgreSql.Sync' (Required)

### ConnectToSource.SqlServer
#### Properties
* **input**: ConnectToSourceSqlServerTaskInput
* **output**: ConnectToSourceSqlServerTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToSource.SqlServer' (Required)

### ConnectToSource.SqlServer.Sync
#### Properties
* **input**: ConnectToSourceSqlServerTaskInput
* **output**: ConnectToSourceSqlServerTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToSource.SqlServer.Sync' (Required)

### ConnectToTarget.AzureDbForMySql
#### Properties
* **input**: ConnectToTargetAzureDbForMySqlTaskInput
* **output**: ConnectToTargetAzureDbForMySqlTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToTarget.AzureDbForMySql' (Required)

### ConnectToTarget.AzureDbForPostgreSql.Sync
#### Properties
* **input**: ConnectToTargetAzureDbForPostgreSqlSyncTaskInput
* **output**: ConnectToTargetAzureDbForPostgreSqlSyncTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToTarget.AzureDbForPostgreSql.Sync' (Required)

### ConnectToTarget.AzureSqlDbMI
#### Properties
* **input**: ConnectToTargetSqlMITaskInput
* **output**: ConnectToTargetSqlMITaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToTarget.AzureSqlDbMI' (Required)

### ConnectToTarget.AzureSqlDbMI.Sync.LRS
#### Properties
* **input**: ConnectToTargetSqlMISyncTaskInput
* **output**: ConnectToTargetSqlMISyncTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToTarget.AzureSqlDbMI.Sync.LRS' (Required)

### ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync
#### Properties
* **input**: ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInput
* **output**: ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync' (Required)

### ConnectToTarget.SqlDb
#### Properties
* **input**: ConnectToTargetSqlDbTaskInput
* **output**: ConnectToTargetSqlDbTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToTarget.SqlDb' (Required)

### ConnectToTarget.SqlDb.Sync
#### Properties
* **input**: ConnectToTargetSqlSqlDbSyncTaskInput
* **output**: ConnectToTargetSqlDbTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToTarget.SqlDb.Sync' (Required)

### GetTDECertificates.Sql
#### Properties
* **input**: GetTdeCertificatesSqlTaskInput
* **output**: GetTdeCertificatesSqlTaskOutput[] (ReadOnly)
* **taskType**: 'GetTDECertificates.Sql' (Required)

### GetUserTables.AzureSqlDb.Sync
#### Properties
* **input**: GetUserTablesSqlSyncTaskInput
* **output**: GetUserTablesSqlSyncTaskOutput[] (ReadOnly)
* **taskType**: 'GetUserTables.AzureSqlDb.Sync' (Required)

### GetUserTables.Sql
#### Properties
* **input**: GetUserTablesSqlTaskInput
* **output**: GetUserTablesSqlTaskOutput[] (ReadOnly)
* **taskType**: 'GetUserTables.Sql' (Required)

### GetUserTablesOracle
#### Properties
* **input**: GetUserTablesOracleTaskInput
* **output**: GetUserTablesOracleTaskOutput[] (ReadOnly)
* **taskType**: 'GetUserTablesOracle' (Required)

### GetUserTablesPostgreSql
#### Properties
* **input**: GetUserTablesPostgreSqlTaskInput
* **output**: GetUserTablesPostgreSqlTaskOutput[] (ReadOnly)
* **taskType**: 'GetUserTablesPostgreSql' (Required)

### Migrate.MongoDb
#### Properties
* **input**: MongoDbMigrationSettings
* **output**: MongoDbProgress[] (ReadOnly)
* **taskType**: 'Migrate.MongoDb' (Required)

### Migrate.MySql.AzureDbForMySql.Sync
#### Properties
* **input**: MigrateMySqlAzureDbForMySqlSyncTaskInput
* **output**: MigrateMySqlAzureDbForMySqlSyncTaskOutput[] (ReadOnly)
* **taskType**: 'Migrate.MySql.AzureDbForMySql.Sync' (Required)

### Migrate.Oracle.AzureDbForPostgreSql.Sync
#### Properties
* **input**: MigrateOracleAzureDbPostgreSqlSyncTaskInput
* **output**: MigrateOracleAzureDbPostgreSqlSyncTaskOutput[] (ReadOnly)
* **taskType**: 'Migrate.Oracle.AzureDbForPostgreSql.Sync' (Required)

### Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2
#### Properties
* **input**: MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput
* **output**: MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput[] (ReadOnly)
* **taskType**: 'Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2' (Required)

### Migrate.SqlServer.AzureSqlDb.Sync
#### Properties
* **input**: MigrateSqlServerSqlDbSyncTaskInput
* **output**: MigrateSqlServerSqlDbSyncTaskOutput[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.AzureSqlDb.Sync' (Required)

### Migrate.SqlServer.AzureSqlDbMI
#### Properties
* **input**: MigrateSqlServerSqlMITaskInput
* **output**: MigrateSqlServerSqlMITaskOutput[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.AzureSqlDbMI' (Required)

### Migrate.SqlServer.AzureSqlDbMI.Sync.LRS
#### Properties
* **input**: MigrateSqlServerSqlMISyncTaskInput
* **output**: MigrateSqlServerSqlMISyncTaskOutput[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.AzureSqlDbMI.Sync.LRS' (Required)

### Migrate.SqlServer.SqlDb
#### Properties
* **input**: MigrateSqlServerSqlDbTaskInput
* **output**: MigrateSqlServerSqlDbTaskOutput[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.SqlDb' (Required)

### Migrate.Ssis
#### Properties
* **input**: MigrateSsisTaskInput
* **output**: MigrateSsisTaskOutput[] (ReadOnly)
* **taskType**: 'Migrate.Ssis' (Required)

### MigrateSchemaSqlServerSqlDb
#### Properties
* **input**: MigrateSchemaSqlServerSqlDbTaskInput
* **output**: MigrateSchemaSqlServerSqlDbTaskOutput[] (ReadOnly)
* **taskType**: 'MigrateSchemaSqlServerSqlDb' (Required)

### Service.Check.OCI
#### Properties
* **input**: CheckOCIDriverTaskInput
* **output**: CheckOCIDriverTaskOutput[] (ReadOnly)
* **taskType**: 'Service.Check.OCI' (Required)

### Service.Install.OCI
#### Properties
* **input**: InstallOCIDriverTaskInput
* **output**: InstallOCIDriverTaskOutput[] (ReadOnly)
* **taskType**: 'Service.Install.OCI' (Required)

### Service.Upload.OCI
#### Properties
* **input**: UploadOCIDriverTaskInput
* **output**: UploadOCIDriverTaskOutput[] (ReadOnly)
* **taskType**: 'Service.Upload.OCI' (Required)

### Validate.MongoDb
#### Properties
* **input**: MongoDbMigrationSettings
* **output**: Migration[] (ReadOnly)
* **taskType**: 'Validate.MongoDb' (Required)

### Validate.Oracle.AzureDbPostgreSql.Sync
#### Properties
* **input**: MigrateOracleAzureDbPostgreSqlSyncTaskInput
* **output**: ValidateOracleAzureDbPostgreSqlSyncTaskOutput[] (ReadOnly)
* **taskType**: 'Validate.Oracle.AzureDbPostgreSql.Sync' (Required)

### ValidateMigrationInput.SqlServer.AzureSqlDbMI
#### Properties
* **input**: ValidateMigrationInputSqlServerSqlMITaskInput
* **output**: ValidateMigrationInputSqlServerSqlMITaskOutput[] (ReadOnly)
* **taskType**: 'ValidateMigrationInput.SqlServer.AzureSqlDbMI' (Required)

### ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS
#### Properties
* **input**: ValidateMigrationInputSqlServerSqlMISyncTaskInput
* **output**: ValidateMigrationInputSqlServerSqlMISyncTaskOutput[] (ReadOnly)
* **taskType**: 'ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS' (Required)

### ValidateMigrationInput.SqlServer.SqlDb.Sync
#### Properties
* **input**: ValidateSyncMigrationInputSqlServerTaskInput
* **output**: ValidateSyncMigrationInputSqlServerTaskOutput[] (ReadOnly)
* **taskType**: 'ValidateMigrationInput.SqlServer.SqlDb.Sync' (Required)


## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## CommandProperties
* **Discriminator**: commandType
### Base Properties
* **errors**: ODataError[] (ReadOnly)
* **state**: 'Accepted' | 'Failed' | 'Running' | 'Succeeded' | 'Unknown' (ReadOnly)
### cancel
#### Properties
* **commandType**: 'cancel' (Required)
* **input**: MongoDbCommandInput

### finish
#### Properties
* **commandType**: 'finish' (Required)
* **input**: MongoDbFinishCommandInput

### Migrate.SqlServer.AzureDbSqlMi.Complete
#### Properties
* **commandType**: 'Migrate.SqlServer.AzureDbSqlMi.Complete' (Required)
* **input**: MigrateMISyncCompleteCommandInput
* **output**: MigrateMISyncCompleteCommandOutput (ReadOnly)

### Migrate.Sync.Complete.Database
#### Properties
* **commandType**: 'Migrate.Sync.Complete.Database' (Required)
* **input**: MigrateSyncCompleteCommandInput
* **output**: MigrateSyncCompleteCommandOutput (ReadOnly)

### restart
#### Properties
* **commandType**: 'restart' (Required)
* **input**: MongoDbCommandInput


## ODataError
### Properties
* **code**: string
* **details**: ODataError[]
* **message**: string

## cancel
### Properties
* **commandType**: 'cancel' (Required)
* **input**: MongoDbCommandInput

## MongoDbCommandInput
### Properties
* **objectName**: string

## finish
### Properties
* **commandType**: 'finish' (Required)
* **input**: MongoDbFinishCommandInput

## MongoDbFinishCommandInput
### Properties
* **immediate**: bool (Required)
* **objectName**: string

## Migrate.SqlServer.AzureDbSqlMi.Complete
### Properties
* **commandType**: 'Migrate.SqlServer.AzureDbSqlMi.Complete' (Required)
* **input**: MigrateMISyncCompleteCommandInput
* **output**: MigrateMISyncCompleteCommandOutput (ReadOnly)

## MigrateMISyncCompleteCommandInput
### Properties
* **sourceDatabaseName**: string (Required)

## MigrateMISyncCompleteCommandOutput
### Properties
* **errors**: ReportableException[]

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
* **input**: MigrateSyncCompleteCommandInput
* **output**: MigrateSyncCompleteCommandOutput (ReadOnly)

## MigrateSyncCompleteCommandInput
### Properties
* **commitTimeStamp**: string
* **databaseName**: string (Required)

## MigrateSyncCompleteCommandOutput
### Properties
* **errors**: ReportableException[] (ReadOnly)
* **id**: string (ReadOnly)

## restart
### Properties
* **commandType**: 'restart' (Required)
* **input**: MongoDbCommandInput

## Connect.MongoDb
### Properties
* **input**: MongoDbConnectionInfo
* **output**: MongoDbClusterInfo[] (ReadOnly)
* **taskType**: 'Connect.MongoDb' (Required)

## MongoDbClusterInfo
### Properties
* **databases**: MongoDbDatabaseInfo[] (Required)
* **supportsSharding**: bool (Required)
* **type**: 'BlobContainer' | 'CosmosDb' | 'MongoDb' (Required)
* **version**: string (Required)

## MongoDbDatabaseInfo
### Properties
* **averageDocumentSize**: int (Required)
* **collections**: MongoDbCollectionInfo[] (Required)
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
* **shardKey**: MongoDbShardKeyInfo
* **supportsSharding**: bool (Required)
* **viewOf**: string

## MongoDbShardKeyInfo
### Properties
* **fields**: MongoDbShardKeyField[] (Required)
* **isUnique**: bool (Required)

## MongoDbShardKeyField
### Properties
* **name**: string (Required)
* **order**: 'Forward' | 'Hashed' | 'Reverse' (Required)

## ConnectToSource.MySql
### Properties
* **input**: ConnectToSourceMySqlTaskInput
* **output**: ConnectToSourceNonSqlTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToSource.MySql' (Required)

## ConnectToSourceMySqlTaskInput
### Properties
* **checkPermissionsGroup**: 'Default' | 'MigrationFromMySQLToAzureDBForMySQL' | 'MigrationFromSqlServerToAzureDB' | 'MigrationFromSqlServerToAzureMI'
* **sourceConnectionInfo**: MySqlConnectionInfo (Required)
* **targetPlatform**: 'AzureDbForMySQL' | 'SqlServer'

## ConnectToSourceNonSqlTaskOutput
### Properties
* **databases**: string[] (ReadOnly)
* **id**: string (ReadOnly)
* **serverProperties**: ServerProperties (ReadOnly)
* **sourceServerBrandVersion**: string (ReadOnly)
* **validationErrors**: ReportableException[] (ReadOnly)

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
* **input**: ConnectToSourceOracleSyncTaskInput
* **output**: ConnectToSourceOracleSyncTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToSource.Oracle.Sync' (Required)

## ConnectToSourceOracleSyncTaskInput
### Properties
* **sourceConnectionInfo**: OracleConnectionInfo (Required)

## ConnectToSourceOracleSyncTaskOutput
### Properties
* **databases**: string[] (ReadOnly)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **validationErrors**: ReportableException[] (ReadOnly)

## ConnectToSource.PostgreSql.Sync
### Properties
* **input**: ConnectToSourcePostgreSqlSyncTaskInput
* **output**: ConnectToSourcePostgreSqlSyncTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToSource.PostgreSql.Sync' (Required)

## ConnectToSourcePostgreSqlSyncTaskInput
### Properties
* **sourceConnectionInfo**: PostgreSqlConnectionInfo (Required)

## ConnectToSourcePostgreSqlSyncTaskOutput
### Properties
* **databases**: string[] (ReadOnly)
* **id**: string (ReadOnly)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **validationErrors**: ReportableException[] (ReadOnly)

## ConnectToSource.SqlServer
### Properties
* **input**: ConnectToSourceSqlServerTaskInput
* **output**: ConnectToSourceSqlServerTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToSource.SqlServer' (Required)

## ConnectToSourceSqlServerTaskInput
### Properties
* **checkPermissionsGroup**: 'Default' | 'MigrationFromMySQLToAzureDBForMySQL' | 'MigrationFromSqlServerToAzureDB' | 'MigrationFromSqlServerToAzureMI'
* **collectAgentJobs**: bool
* **collectDatabases**: bool
* **collectLogins**: bool
* **collectTdeCertificateInfo**: bool
* **sourceConnectionInfo**: SqlConnectionInfo (Required)
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
* **migrationEligibility**: MigrationEligibilityInfo (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'AgentJobLevelOutput' (Required)
* **validationErrors**: ReportableException[] (ReadOnly)

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
* **migrationEligibility**: MigrationEligibilityInfo (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'LoginLevelOutput' (Required)

### TaskLevelOutput
#### Properties
* **agentJobs**: Dictionary<string,String> (ReadOnly)
* **databases**: Dictionary<string,String> (ReadOnly)
* **databaseTdeCertificateMapping**: Dictionary<string,String> (ReadOnly)
* **logins**: Dictionary<string,String> (ReadOnly)
* **resultType**: 'TaskLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **validationErrors**: ReportableException[] (ReadOnly)


## AgentJobLevelOutput
### Properties
* **isEnabled**: bool (ReadOnly)
* **jobCategory**: string (ReadOnly)
* **jobOwner**: string (ReadOnly)
* **lastExecutedOn**: string (ReadOnly)
* **migrationEligibility**: MigrationEligibilityInfo (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'AgentJobLevelOutput' (Required)
* **validationErrors**: ReportableException[] (ReadOnly)

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
* **migrationEligibility**: MigrationEligibilityInfo (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'LoginLevelOutput' (Required)

## TaskLevelOutput
### Properties
* **agentJobs**: Dictionary<string,String> (ReadOnly)
* **databases**: Dictionary<string,String> (ReadOnly)
* **databaseTdeCertificateMapping**: Dictionary<string,String> (ReadOnly)
* **logins**: Dictionary<string,String> (ReadOnly)
* **resultType**: 'TaskLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **validationErrors**: ReportableException[] (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ConnectToSource.SqlServer.Sync
### Properties
* **input**: ConnectToSourceSqlServerTaskInput
* **output**: ConnectToSourceSqlServerTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToSource.SqlServer.Sync' (Required)

## ConnectToTarget.AzureDbForMySql
### Properties
* **input**: ConnectToTargetAzureDbForMySqlTaskInput
* **output**: ConnectToTargetAzureDbForMySqlTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToTarget.AzureDbForMySql' (Required)

## ConnectToTargetAzureDbForMySqlTaskInput
### Properties
* **sourceConnectionInfo**: MySqlConnectionInfo (Required)
* **targetConnectionInfo**: MySqlConnectionInfo (Required)

## ConnectToTargetAzureDbForMySqlTaskOutput
### Properties
* **databases**: string[] (ReadOnly)
* **id**: string (ReadOnly)
* **serverVersion**: string (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **validationErrors**: ReportableException[] (ReadOnly)

## ConnectToTarget.AzureDbForPostgreSql.Sync
### Properties
* **input**: ConnectToTargetAzureDbForPostgreSqlSyncTaskInput
* **output**: ConnectToTargetAzureDbForPostgreSqlSyncTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToTarget.AzureDbForPostgreSql.Sync' (Required)

## ConnectToTargetAzureDbForPostgreSqlSyncTaskInput
### Properties
* **sourceConnectionInfo**: PostgreSqlConnectionInfo (Required)
* **targetConnectionInfo**: PostgreSqlConnectionInfo (Required)

## ConnectToTargetAzureDbForPostgreSqlSyncTaskOutput
### Properties
* **databases**: string[] (ReadOnly)
* **id**: string (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)
* **validationErrors**: ReportableException[] (ReadOnly)

## ConnectToTarget.AzureSqlDbMI
### Properties
* **input**: ConnectToTargetSqlMITaskInput
* **output**: ConnectToTargetSqlMITaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToTarget.AzureSqlDbMI' (Required)

## ConnectToTargetSqlMITaskInput
### Properties
* **collectAgentJobs**: bool
* **collectLogins**: bool
* **targetConnectionInfo**: SqlConnectionInfo (Required)
* **validateSsisCatalogOnly**: bool

## ConnectToTargetSqlMITaskOutput
### Properties
* **agentJobs**: string[] (ReadOnly)
* **id**: string (ReadOnly)
* **logins**: string[] (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)
* **validationErrors**: ReportableException[] (ReadOnly)

## ConnectToTarget.AzureSqlDbMI.Sync.LRS
### Properties
* **input**: ConnectToTargetSqlMISyncTaskInput
* **output**: ConnectToTargetSqlMISyncTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToTarget.AzureSqlDbMI.Sync.LRS' (Required)

## ConnectToTargetSqlMISyncTaskInput
### Properties
* **azureApp**: AzureActiveDirectoryApp (Required)
* **targetConnectionInfo**: MiSqlConnectionInfo (Required)

## AzureActiveDirectoryApp
### Properties
* **appKey**: string (Required)
* **applicationId**: string (Required)
* **tenantId**: string (Required)

## ConnectToTargetSqlMISyncTaskOutput
### Properties
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)
* **validationErrors**: ReportableException[] (ReadOnly)

## ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync
### Properties
* **input**: ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInput
* **output**: ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync' (Required)

## ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInput
### Properties
* **targetConnectionInfo**: PostgreSqlConnectionInfo (Required)

## ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutput
### Properties
* **databases**: string[] (ReadOnly)
* **databaseSchemaMap**: schemas:160_databaseSchemaMapItem[]
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)
* **validationErrors**: ReportableException[] (ReadOnly)

## schemas:160_databaseSchemaMapItem
### Properties
* **database**: string
* **schemas**: string[]

## ConnectToTarget.SqlDb
### Properties
* **input**: ConnectToTargetSqlDbTaskInput
* **output**: ConnectToTargetSqlDbTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToTarget.SqlDb' (Required)

## ConnectToTargetSqlDbTaskInput
### Properties
* **targetConnectionInfo**: SqlConnectionInfo (Required)

## ConnectToTargetSqlDbTaskOutput
### Properties
* **databases**: Dictionary<string,String> (ReadOnly)
* **id**: string (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ConnectToTarget.SqlDb.Sync
### Properties
* **input**: ConnectToTargetSqlSqlDbSyncTaskInput
* **output**: ConnectToTargetSqlDbTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToTarget.SqlDb.Sync' (Required)

## ConnectToTargetSqlSqlDbSyncTaskInput
### Properties
* **sourceConnectionInfo**: SqlConnectionInfo (Required)
* **targetConnectionInfo**: SqlConnectionInfo (Required)

## GetTDECertificates.Sql
### Properties
* **input**: GetTdeCertificatesSqlTaskInput
* **output**: GetTdeCertificatesSqlTaskOutput[] (ReadOnly)
* **taskType**: 'GetTDECertificates.Sql' (Required)

## GetTdeCertificatesSqlTaskInput
### Properties
* **backupFileShare**: FileShare (Required)
* **connectionInfo**: SqlConnectionInfo (Required)
* **selectedCertificates**: SelectedCertificateInput[] (Required)

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
* **base64EncodedCertificates**: Dictionary<string,IList<String>> (ReadOnly)
* **validationErrors**: ReportableException[] (ReadOnly)

## Dictionary<string,IList<String>>
### Additional Properties
* **Additional Properties Type**: string[]

## GetUserTables.AzureSqlDb.Sync
### Properties
* **input**: GetUserTablesSqlSyncTaskInput
* **output**: GetUserTablesSqlSyncTaskOutput[] (ReadOnly)
* **taskType**: 'GetUserTables.AzureSqlDb.Sync' (Required)

## GetUserTablesSqlSyncTaskInput
### Properties
* **selectedSourceDatabases**: string[] (Required)
* **selectedTargetDatabases**: string[] (Required)
* **sourceConnectionInfo**: SqlConnectionInfo (Required)
* **targetConnectionInfo**: SqlConnectionInfo (Required)

## GetUserTablesSqlSyncTaskOutput
### Properties
* **databasesToSourceTables**: Dictionary<string,IList<DatabaseTable>> (ReadOnly)
* **databasesToTargetTables**: Dictionary<string,IList<DatabaseTable>> (ReadOnly)
* **tableValidationErrors**: Dictionary<string,IList<String>> (ReadOnly)
* **validationErrors**: ReportableException[] (ReadOnly)

## Dictionary<string,IList<DatabaseTable>>
### Additional Properties
* **Additional Properties Type**: DatabaseTable[]

## DatabaseTable
### Properties
* **hasRows**: bool (ReadOnly)
* **name**: string (ReadOnly)

## Dictionary<string,IList<DatabaseTable>>
### Additional Properties
* **Additional Properties Type**: DatabaseTable[]

## Dictionary<string,IList<String>>
### Additional Properties
* **Additional Properties Type**: string[]

## GetUserTables.Sql
### Properties
* **input**: GetUserTablesSqlTaskInput
* **output**: GetUserTablesSqlTaskOutput[] (ReadOnly)
* **taskType**: 'GetUserTables.Sql' (Required)

## GetUserTablesSqlTaskInput
### Properties
* **connectionInfo**: SqlConnectionInfo (Required)
* **selectedDatabases**: string[] (Required)

## GetUserTablesSqlTaskOutput
### Properties
* **databasesToTables**: Dictionary<string,IList<DatabaseTable>> (ReadOnly)
* **id**: string (ReadOnly)
* **validationErrors**: ReportableException[] (ReadOnly)

## Dictionary<string,IList<DatabaseTable>>
### Additional Properties
* **Additional Properties Type**: DatabaseTable[]

## GetUserTablesOracle
### Properties
* **input**: GetUserTablesOracleTaskInput
* **output**: GetUserTablesOracleTaskOutput[] (ReadOnly)
* **taskType**: 'GetUserTablesOracle' (Required)

## GetUserTablesOracleTaskInput
### Properties
* **connectionInfo**: OracleConnectionInfo (Required)
* **selectedSchemas**: string[] (Required)

## GetUserTablesOracleTaskOutput
### Properties
* **schemaName**: string (ReadOnly)
* **tables**: DatabaseTable[] (ReadOnly)
* **validationErrors**: ReportableException[] (ReadOnly)

## GetUserTablesPostgreSql
### Properties
* **input**: GetUserTablesPostgreSqlTaskInput
* **output**: GetUserTablesPostgreSqlTaskOutput[] (ReadOnly)
* **taskType**: 'GetUserTablesPostgreSql' (Required)

## GetUserTablesPostgreSqlTaskInput
### Properties
* **connectionInfo**: PostgreSqlConnectionInfo (Required)
* **selectedDatabases**: string[] (Required)

## GetUserTablesPostgreSqlTaskOutput
### Properties
* **databaseName**: string (ReadOnly)
* **tables**: DatabaseTable[] (ReadOnly)
* **validationErrors**: ReportableException[] (ReadOnly)

## Migrate.MongoDb
### Properties
* **input**: MongoDbMigrationSettings
* **output**: MongoDbProgress[] (ReadOnly)
* **taskType**: 'Migrate.MongoDb' (Required)

## MongoDbMigrationSettings
### Properties
* **boostRUs**: int
* **databases**: Dictionary<string,MongoDbDatabaseSettings> (Required)
* **replication**: 'Continuous' | 'Disabled' | 'OneTime'
* **source**: MongoDbConnectionInfo (Required)
* **target**: MongoDbConnectionInfo (Required)
* **throttling**: MongoDbThrottlingSettings

## Dictionary<string,MongoDbDatabaseSettings>
### Additional Properties
* **Additional Properties Type**: MongoDbDatabaseSettings

## MongoDbDatabaseSettings
### Properties
* **collections**: Dictionary<string,MongoDbCollectionSettings> (Required)
* **targetRUs**: int

## Dictionary<string,MongoDbCollectionSettings>
### Additional Properties
* **Additional Properties Type**: MongoDbCollectionSettings

## MongoDbCollectionSettings
### Properties
* **canDelete**: bool
* **shardKey**: MongoDbShardKeySetting
* **targetRUs**: int

## MongoDbShardKeySetting
### Properties
* **fields**: MongoDbShardKeyField[] (Required)
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
* **errors**: Dictionary<string,MongoDbError> (Required)
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
* **collections**: Dictionary<string,MongoDbCollectionProgress>
* **resultType**: 'Database' (Required)

### Migration
#### Properties
* **databases**: Dictionary<string,MongoDbDatabaseProgress>
* **resultType**: 'Migration' (Required)


## Dictionary<string,MongoDbError>
### Additional Properties
* **Additional Properties Type**: MongoDbError

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
* **collections**: Dictionary<string,MongoDbCollectionProgress>
* **resultType**: 'Database' (Required)

## Dictionary<string,MongoDbCollectionProgress>
### Additional Properties
* **Additional Properties Type**: Collection

## Migration
### Properties
* **databases**: Dictionary<string,MongoDbDatabaseProgress>
* **resultType**: 'Migration' (Required)

## Dictionary<string,MongoDbDatabaseProgress>
### Additional Properties
* **Additional Properties Type**: Database

## Migrate.MySql.AzureDbForMySql.Sync
### Properties
* **input**: MigrateMySqlAzureDbForMySqlSyncTaskInput
* **output**: MigrateMySqlAzureDbForMySqlSyncTaskOutput[] (ReadOnly)
* **taskType**: 'Migrate.MySql.AzureDbForMySql.Sync' (Required)

## MigrateMySqlAzureDbForMySqlSyncTaskInput
### Properties
* **selectedDatabases**: MigrateMySqlAzureDbForMySqlSyncDatabaseInput[] (Required)
* **sourceConnectionInfo**: MySqlConnectionInfo (Required)
* **targetConnectionInfo**: MySqlConnectionInfo (Required)

## MigrateMySqlAzureDbForMySqlSyncDatabaseInput
### Properties
* **migrationSetting**: Dictionary<string,String>
* **name**: string
* **sourceSetting**: Dictionary<string,String>
* **tableMap**: Dictionary<string,String>
* **targetDatabaseName**: string
* **targetSetting**: Dictionary<string,String>

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## MigrateMySqlAzureDbForMySqlSyncTaskOutput
* **Discriminator**: resultType
### Base Properties
* **id**: string (ReadOnly)
### DatabaseLevelErrorOutput
#### Properties
* **errorMessage**: string
* **events**: SyncMigrationDatabaseErrorEvent[]
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
* **error**: ReportableException (ReadOnly)
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
* **events**: SyncMigrationDatabaseErrorEvent[]
* **resultType**: 'DatabaseLevelErrorOutput' (Required)

## SyncMigrationDatabaseErrorEvent
### Properties
* **eventText**: string (ReadOnly)
* **eventTypeString**: string (ReadOnly)
* **timestampString**: string (ReadOnly)

## ErrorOutput
### Properties
* **error**: ReportableException (ReadOnly)
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
* **input**: MigrateOracleAzureDbPostgreSqlSyncTaskInput
* **output**: MigrateOracleAzureDbPostgreSqlSyncTaskOutput[] (ReadOnly)
* **taskType**: 'Migrate.Oracle.AzureDbForPostgreSql.Sync' (Required)

## MigrateOracleAzureDbPostgreSqlSyncTaskInput
### Properties
* **selectedDatabases**: MigrateOracleAzureDbPostgreSqlSyncDatabaseInput[] (Required)
* **sourceConnectionInfo**: OracleConnectionInfo (Required)
* **targetConnectionInfo**: PostgreSqlConnectionInfo (Required)

## MigrateOracleAzureDbPostgreSqlSyncDatabaseInput
### Properties
* **caseManipulation**: string
* **migrationSetting**: Dictionary<string,String>
* **name**: string
* **schemaName**: string
* **sourceSetting**: Dictionary<string,String>
* **tableMap**: Dictionary<string,String>
* **targetDatabaseName**: string
* **targetSetting**: Dictionary<string,String>

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## MigrateOracleAzureDbPostgreSqlSyncTaskOutput
* **Discriminator**: resultType
### Base Properties
* **id**: string (ReadOnly)
### DatabaseLevelErrorOutput
#### Properties
* **errorMessage**: string
* **events**: SyncMigrationDatabaseErrorEvent[]
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
* **error**: ReportableException (ReadOnly)
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
* **input**: MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput
* **output**: MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput[] (ReadOnly)
* **taskType**: 'Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2' (Required)

## MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput
### Properties
* **selectedDatabases**: MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput[] (Required)
* **sourceConnectionInfo**: PostgreSqlConnectionInfo (Required)
* **targetConnectionInfo**: PostgreSqlConnectionInfo (Required)

## MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput
### Properties
* **migrationSetting**: Dictionary<string,String>
* **name**: string
* **selectedTables**: MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseTableInput[]
* **sourceSetting**: Dictionary<string,String>
* **targetDatabaseName**: string
* **targetSetting**: Dictionary<string,String>

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseTableInput
### Properties
* **name**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput
* **Discriminator**: resultType
### Base Properties
* **id**: string (ReadOnly)
### DatabaseLevelErrorOutput
#### Properties
* **errorMessage**: string
* **events**: SyncMigrationDatabaseErrorEvent[]
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
* **error**: ReportableException (ReadOnly)
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
* **input**: MigrateSqlServerSqlDbSyncTaskInput
* **output**: MigrateSqlServerSqlDbSyncTaskOutput[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.AzureSqlDb.Sync' (Required)

## MigrateSqlServerSqlDbSyncTaskInput
### Properties
* **selectedDatabases**: MigrateSqlServerSqlDbSyncDatabaseInput[] (Required)
* **sourceConnectionInfo**: SqlConnectionInfo (Required)
* **targetConnectionInfo**: SqlConnectionInfo (Required)
* **validationOptions**: MigrationValidationOptions

## MigrateSqlServerSqlDbSyncDatabaseInput
### Properties
* **id**: string
* **migrationSetting**: Dictionary<string,String>
* **name**: string
* **schemaName**: string
* **sourceSetting**: Dictionary<string,String>
* **tableMap**: Dictionary<string,String>
* **targetDatabaseName**: string
* **targetSetting**: Dictionary<string,String>

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
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
* **events**: SyncMigrationDatabaseErrorEvent[]
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
* **error**: ReportableException (ReadOnly)
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
* **input**: MigrateSqlServerSqlMITaskInput
* **output**: MigrateSqlServerSqlMITaskOutput[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.AzureSqlDbMI' (Required)

## MigrateSqlServerSqlMITaskInput
### Properties
* **aadDomainName**: string
* **backupBlobShare**: BlobShare (Required)
* **backupFileShare**: FileShare
* **backupMode**: 'CreateBackup' | 'ExistingBackup'
* **selectedAgentJobs**: string[]
* **selectedDatabases**: MigrateSqlServerSqlMIDatabaseInput[] (Required)
* **selectedLogins**: string[]
* **sourceConnectionInfo**: SqlConnectionInfo (Required)
* **targetConnectionInfo**: SqlConnectionInfo (Required)

## BlobShare
### Properties
* **sasUri**: string (Required)

## MigrateSqlServerSqlMIDatabaseInput
### Properties
* **backupFilePaths**: string[]
* **backupFileShare**: FileShare
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
* **migrationEligibility**: MigrationEligibilityInfo (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'AgentJobLevelOutput' (Required)
* **validationErrors**: ReportableException[] (ReadOnly)

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
* **error**: ReportableException (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

### LoginLevelOutput
#### Properties
* **defaultDatabase**: string (ReadOnly)
* **isEnabled**: bool (ReadOnly)
* **loginType**: 'AsymmetricKey' | 'Certificate' | 'ExternalGroup' | 'ExternalUser' | 'SqlLogin' | 'WindowsGroup' | 'WindowsUser' (ReadOnly)
* **migrationEligibility**: MigrationEligibilityInfo (ReadOnly)
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
* **input**: MigrateSqlServerSqlMISyncTaskInput
* **output**: MigrateSqlServerSqlMISyncTaskOutput[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.AzureSqlDbMI.Sync.LRS' (Required)

## MigrateSqlServerSqlMISyncTaskInput
### Properties
* **azureApp**: AzureActiveDirectoryApp (Required)
* **backupFileShare**: FileShare
* **selectedDatabases**: MigrateSqlServerSqlMIDatabaseInput[] (Required)
* **sourceConnectionInfo**: SqlConnectionInfo (Required)
* **storageResourceId**: string (Required)
* **targetConnectionInfo**: MiSqlConnectionInfo (Required)

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
* **error**: ReportableException (ReadOnly)
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
* **input**: MigrateSqlServerSqlDbTaskInput
* **output**: MigrateSqlServerSqlDbTaskOutput[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.SqlDb' (Required)

## MigrateSqlServerSqlDbTaskInput
### Properties
* **selectedDatabases**: MigrateSqlServerSqlDbDatabaseInput[] (Required)
* **sourceConnectionInfo**: SqlConnectionInfo (Required)
* **targetConnectionInfo**: SqlConnectionInfo (Required)
* **validationOptions**: MigrationValidationOptions

## MigrateSqlServerSqlDbDatabaseInput
### Properties
* **makeSourceDbReadOnly**: bool
* **name**: string
* **tableMap**: Dictionary<string,String>
* **targetDatabaseName**: string

## Dictionary<string,String>
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
* **error**: ReportableException (ReadOnly)
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
* **input**: MigrateSsisTaskInput
* **output**: MigrateSsisTaskOutput[] (ReadOnly)
* **taskType**: 'Migrate.Ssis' (Required)

## MigrateSsisTaskInput
### Properties
* **sourceConnectionInfo**: SqlConnectionInfo (Required)
* **ssisMigrationInfo**: SsisMigrationInfo (Required)
* **targetConnectionInfo**: SqlConnectionInfo (Required)

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
* **exceptionsAndWarnings**: ReportableException[] (ReadOnly)
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
* **exceptionsAndWarnings**: ReportableException[] (ReadOnly)
* **folderName**: string (ReadOnly)
* **message**: string (ReadOnly)
* **projectName**: string (ReadOnly)
* **resultType**: 'SsisProjectLevelOutput' (Required)
* **stage**: 'Completed' | 'Initialize' | 'InProgress' | 'None' (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

## MigrateSchemaSqlServerSqlDb
### Properties
* **input**: MigrateSchemaSqlServerSqlDbTaskInput
* **output**: MigrateSchemaSqlServerSqlDbTaskOutput[] (ReadOnly)
* **taskType**: 'MigrateSchemaSqlServerSqlDb' (Required)

## MigrateSchemaSqlServerSqlDbTaskInput
### Properties
* **selectedDatabases**: MigrateSchemaSqlServerSqlDbDatabaseInput[] (Required)
* **sourceConnectionInfo**: SqlConnectionInfo (Required)
* **targetConnectionInfo**: SqlConnectionInfo (Required)

## MigrateSchemaSqlServerSqlDbDatabaseInput
### Properties
* **name**: string
* **schemaSetting**: SchemaMigrationSetting
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
* **error**: ReportableException (ReadOnly)
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
* **input**: CheckOCIDriverTaskInput
* **output**: CheckOCIDriverTaskOutput[] (ReadOnly)
* **taskType**: 'Service.Check.OCI' (Required)

## CheckOCIDriverTaskInput
### Properties
* **serverVersion**: string

## CheckOCIDriverTaskOutput
### Properties
* **installedDriver**: OracleOCIDriverInfo
* **validationErrors**: ReportableException[] (ReadOnly)

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
* **input**: InstallOCIDriverTaskInput
* **output**: InstallOCIDriverTaskOutput[] (ReadOnly)
* **taskType**: 'Service.Install.OCI' (Required)

## InstallOCIDriverTaskInput
### Properties
* **driverPackageName**: string

## InstallOCIDriverTaskOutput
### Properties
* **validationErrors**: ReportableException[] (ReadOnly)

## Service.Upload.OCI
### Properties
* **input**: UploadOCIDriverTaskInput
* **output**: UploadOCIDriverTaskOutput[] (ReadOnly)
* **taskType**: 'Service.Upload.OCI' (Required)

## UploadOCIDriverTaskInput
### Properties
* **driverShare**: FileShare

## UploadOCIDriverTaskOutput
### Properties
* **driverPackageName**: string (ReadOnly)
* **validationErrors**: ReportableException[] (ReadOnly)

## Validate.MongoDb
### Properties
* **input**: MongoDbMigrationSettings
* **output**: Migration[] (ReadOnly)
* **taskType**: 'Validate.MongoDb' (Required)

## Validate.Oracle.AzureDbPostgreSql.Sync
### Properties
* **input**: MigrateOracleAzureDbPostgreSqlSyncTaskInput
* **output**: ValidateOracleAzureDbPostgreSqlSyncTaskOutput[] (ReadOnly)
* **taskType**: 'Validate.Oracle.AzureDbPostgreSql.Sync' (Required)

## ValidateOracleAzureDbPostgreSqlSyncTaskOutput
### Properties
* **validationErrors**: ReportableException[] (ReadOnly)

## ValidateMigrationInput.SqlServer.AzureSqlDbMI
### Properties
* **input**: ValidateMigrationInputSqlServerSqlMITaskInput
* **output**: ValidateMigrationInputSqlServerSqlMITaskOutput[] (ReadOnly)
* **taskType**: 'ValidateMigrationInput.SqlServer.AzureSqlDbMI' (Required)

## ValidateMigrationInputSqlServerSqlMITaskInput
### Properties
* **backupBlobShare**: BlobShare (Required)
* **backupFileShare**: FileShare
* **backupMode**: 'CreateBackup' | 'ExistingBackup'
* **selectedDatabases**: MigrateSqlServerSqlMIDatabaseInput[] (Required)
* **selectedLogins**: string[]
* **sourceConnectionInfo**: SqlConnectionInfo (Required)
* **targetConnectionInfo**: SqlConnectionInfo (Required)

## ValidateMigrationInputSqlServerSqlMITaskOutput
### Properties
* **backupFolderErrors**: ReportableException[] (ReadOnly)
* **backupShareCredentialsErrors**: ReportableException[] (ReadOnly)
* **backupStorageAccountErrors**: ReportableException[] (ReadOnly)
* **databaseBackupInfo**: DatabaseBackupInfo
* **existingBackupErrors**: ReportableException[] (ReadOnly)
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **restoreDatabaseNameErrors**: ReportableException[] (ReadOnly)

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
* **input**: ValidateMigrationInputSqlServerSqlMISyncTaskInput
* **output**: ValidateMigrationInputSqlServerSqlMISyncTaskOutput[] (ReadOnly)
* **taskType**: 'ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS' (Required)

## ValidateMigrationInputSqlServerSqlMISyncTaskInput
### Properties
* **azureApp**: AzureActiveDirectoryApp (Required)
* **backupFileShare**: FileShare
* **selectedDatabases**: MigrateSqlServerSqlMIDatabaseInput[] (Required)
* **sourceConnectionInfo**: SqlConnectionInfo (Required)
* **storageResourceId**: string (Required)
* **targetConnectionInfo**: MiSqlConnectionInfo (Required)

## ValidateMigrationInputSqlServerSqlMISyncTaskOutput
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **validationErrors**: ReportableException[] (ReadOnly)

## ValidateMigrationInput.SqlServer.SqlDb.Sync
### Properties
* **input**: ValidateSyncMigrationInputSqlServerTaskInput
* **output**: ValidateSyncMigrationInputSqlServerTaskOutput[] (ReadOnly)
* **taskType**: 'ValidateMigrationInput.SqlServer.SqlDb.Sync' (Required)

## ValidateSyncMigrationInputSqlServerTaskInput
### Properties
* **selectedDatabases**: MigrateSqlServerSqlDbSyncDatabaseInput[] (Required)
* **sourceConnectionInfo**: SqlConnectionInfo (Required)
* **targetConnectionInfo**: SqlConnectionInfo (Required)

## ValidateSyncMigrationInputSqlServerTaskOutput
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **validationErrors**: ReportableException[] (ReadOnly)

