# Microsoft.DataMigration @ 2018-04-19

## Resource Microsoft.DataMigration/services@2018-04-19
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-19' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DataMigrationServiceProperties](#datamigrationserviceproperties)
* **sku**: [ServiceSku](#servicesku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DataMigration/services' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataMigration/services/projects@2018-04-19
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-19' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProjectProperties](#projectproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DataMigration/services/projects' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataMigration/services/projects/tasks@2018-04-19
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-19' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProjectTaskProperties](#projecttaskproperties)
* **type**: 'Microsoft.DataMigration/services/projects/tasks' (ReadOnly, DeployTimeConstant)

## DataMigrationServiceProperties
### Properties
* **provisioningState**: 'Accepted' | 'Deleting' | 'Deploying' | 'Failed' | 'FailedToStart' | 'FailedToStop' | 'Starting' | 'Stopped' | 'Stopping' | 'Succeeded' (ReadOnly)
* **publicKey**: string
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
* **sourcePlatform**: 'SQL' | 'Unknown' (Required)
* **targetConnectionInfo**: [ConnectionInfo](#connectioninfo)
* **targetPlatform**: 'SQLDB' | 'Unknown' (Required)

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

### MySqlConnectionInfo
#### Properties
* **password**: string
* **port**: int (Required)
* **serverName**: string (Required)
* **type**: 'MySqlConnectionInfo' (Required)
* **userName**: string

### PostgreSqlConnectionInfo
#### Properties
* **databaseName**: string
* **password**: string
* **port**: int (Required)
* **serverName**: string (Required)
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

## MySqlConnectionInfo
### Properties
* **password**: string
* **port**: int (Required)
* **serverName**: string (Required)
* **type**: 'MySqlConnectionInfo' (Required)
* **userName**: string

## PostgreSqlConnectionInfo
### Properties
* **databaseName**: string
* **password**: string
* **port**: int (Required)
* **serverName**: string (Required)
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

## ProjectTaskProperties
* **Discriminator**: taskType
### Base Properties
* **commands**: [CommandProperties](#commandproperties)[] (ReadOnly)
* **errors**: [ODataError](#odataerror)[] (ReadOnly)
* **state**: 'Canceled' | 'Failed' | 'FailedInputValidation' | 'Faulted' | 'Queued' | 'Running' | 'Succeeded' | 'Unknown' (ReadOnly)
### ConnectToSource.MySql
#### Properties
* **input**: [ConnectToSourceMySqlTaskInput](#connecttosourcemysqltaskinput)
* **output**: [ConnectToSourceNonSqlTaskOutput](#connecttosourcenonsqltaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToSource.MySql' (Required)

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

### Migrate.MySql.AzureDbForMySql.Sync
#### Properties
* **input**: [MigrateMySqlAzureDbForMySqlSyncTaskInput](#migratemysqlazuredbformysqlsynctaskinput)
* **output**: [MigrateMySqlAzureDbForMySqlSyncTaskOutput](#migratemysqlazuredbformysqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.MySql.AzureDbForMySql.Sync' (Required)

### Migrate.PostgreSql.AzureDbForPostgreSql.Sync
#### Properties
* **input**: [MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput](#migratepostgresqlazuredbforpostgresqlsynctaskinput)
* **output**: [MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput](#migratepostgresqlazuredbforpostgresqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.PostgreSql.AzureDbForPostgreSql.Sync' (Required)

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


## CommandProperties
* **Discriminator**: commandType
### Base Properties
* **errors**: [ODataError](#odataerror)[] (ReadOnly)
* **state**: 'Accepted' | 'Failed' | 'Running' | 'Succeeded' | 'Unknown' (ReadOnly)
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


## ODataError
### Properties
* **code**: string (ReadOnly)
* **details**: [ODataError](#odataerror)[] (ReadOnly)
* **message**: string (ReadOnly)

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
* **filePath**: string (ReadOnly)
* **hResult**: int (ReadOnly)
* **lineNumber**: string (ReadOnly)
* **message**: string (ReadOnly)
* **stackTrace**: string (ReadOnly)

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
* **collectLogins**: bool
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)

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

### DatabaseLevelOutput
#### Properties
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly)
* **databaseFiles**: [DatabaseFileInfo](#databasefileinfo)[] (ReadOnly)
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **sizeMB**: int (ReadOnly)

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

## MigrationEligibilityInfo
### Properties
* **isEligibleForMigration**: bool (ReadOnly)
* **validationMessages**: string[] (ReadOnly)

## DatabaseLevelOutput
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
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)

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
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly)
* **databaseFiles**: [DatabaseFileInfo](#databasefileinfo)[] (ReadOnly)
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **sizeMB**: int (ReadOnly)

### ErrorOutput
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

### MigrationLevelOutput
#### Properties
* **agentJobs**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **databases**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **logins**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **message**: string (ReadOnly)
* **orphanedUsersInfo**: [OrphanedUserInfo](#orphaneduserinfo)[] (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **serverRoleResults**: [Dictionary<string,StartMigrationScenarioServerRoleResult>](#dictionarystringstartmigrationscenarioserverroleresult) (ReadOnly)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly)
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
* **agentJobs**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **databases**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **logins**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **message**: string (ReadOnly)
* **orphanedUsersInfo**: [OrphanedUserInfo](#orphaneduserinfo)[] (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **serverRoleResults**: [Dictionary<string,StartMigrationScenarioServerRoleResult>](#dictionarystringstartmigrationscenarioserverroleresult) (ReadOnly)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

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

## OrphanedUserInfo
### Properties
* **databaseName**: string
* **name**: string

## Dictionary<string,StartMigrationScenarioServerRoleResult>
### Properties
### Additional Properties
* **Additional Properties Type**: [StartMigrationScenarioServerRoleResult](#startmigrationscenarioserverroleresult)

## StartMigrationScenarioServerRoleResult
### Properties
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **name**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

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

## Migrate.PostgreSql.AzureDbForPostgreSql.Sync
### Properties
* **input**: [MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput](#migratepostgresqlazuredbforpostgresqlsynctaskinput)
* **output**: [MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput](#migratepostgresqlazuredbforpostgresqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.PostgreSql.AzureDbForPostgreSql.Sync' (Required)

## MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput
### Properties
* **selectedDatabases**: [MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput](#migratepostgresqlazuredbforpostgresqlsyncdatabaseinput)[] (Required)
* **sourceConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required)
* **targetConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required)

## MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput
### Properties
* **migrationSetting**: [Dictionary<string,String>](#dictionarystringstring)
* **name**: string
* **sourceSetting**: [Dictionary<string,String>](#dictionarystringstring)
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
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly)
* **databaseFiles**: [DatabaseFileInfo](#databasefileinfo)[] (ReadOnly)
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **sizeMB**: int (ReadOnly)

### ErrorOutput
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

### MigrationLevelOutput
#### Properties
* **agentJobs**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **databases**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **logins**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **message**: string (ReadOnly)
* **orphanedUsersInfo**: [OrphanedUserInfo](#orphaneduserinfo)[] (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **serverRoleResults**: [Dictionary<string,StartMigrationScenarioServerRoleResult>](#dictionarystringstartmigrationscenarioserverroleresult) (ReadOnly)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly)
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
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly)
* **databaseFiles**: [DatabaseFileInfo](#databasefileinfo)[] (ReadOnly)
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **sizeMB**: int (ReadOnly)

### ErrorOutput
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

### MigrationLevelOutput
#### Properties
* **agentJobs**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **databases**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **logins**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **message**: string (ReadOnly)
* **orphanedUsersInfo**: [OrphanedUserInfo](#orphaneduserinfo)[] (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **serverRoleResults**: [Dictionary<string,StartMigrationScenarioServerRoleResult>](#dictionarystringstartmigrationscenarioserverroleresult) (ReadOnly)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly)
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

### DatabaseLevelOutput
#### Properties
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly)
* **databaseFiles**: [DatabaseFileInfo](#databasefileinfo)[] (ReadOnly)
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **sizeMB**: int (ReadOnly)

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
* **agentJobs**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **databases**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **logins**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **message**: string (ReadOnly)
* **orphanedUsersInfo**: [OrphanedUserInfo](#orphaneduserinfo)[] (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **serverRoleResults**: [Dictionary<string,StartMigrationScenarioServerRoleResult>](#dictionarystringstartmigrationscenarioserverroleresult) (ReadOnly)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly)
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
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly)
* **databaseFiles**: [DatabaseFileInfo](#databasefileinfo)[] (ReadOnly)
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **sizeMB**: int (ReadOnly)

### ErrorOutput
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

### MigrationLevelOutput
#### Properties
* **agentJobs**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **databases**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **logins**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **message**: string (ReadOnly)
* **orphanedUsersInfo**: [OrphanedUserInfo](#orphaneduserinfo)[] (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **serverRoleResults**: [Dictionary<string,StartMigrationScenarioServerRoleResult>](#dictionarystringstartmigrationscenarioserverroleresult) (ReadOnly)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly)
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
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly)
* **databaseFiles**: [DatabaseFileInfo](#databasefileinfo)[] (ReadOnly)
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **sizeMB**: int (ReadOnly)

### ErrorOutput
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

### MigrationDatabaseLevelValidationOutput
#### Properties
* **dataIntegrityValidationResult**: [DataIntegrityValidationResult](#dataintegrityvalidationresult) (ReadOnly)
* **endedOn**: string (ReadOnly)
* **migrationId**: string (ReadOnly)
* **queryAnalysisValidationResult**: [QueryAnalysisValidationResult](#queryanalysisvalidationresult) (ReadOnly)
* **resultType**: 'MigrationDatabaseLevelValidationOutput' (Required)
* **schemaValidationResult**: [SchemaComparisonValidationResult](#schemacomparisonvalidationresult) (ReadOnly)
* **sourceDatabaseName**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **status**: 'Completed' | 'CompletedWithIssues' | 'Default' | 'Failed' | 'Initialized' | 'InProgress' | 'NotStarted' | 'Stopped' (ReadOnly)
* **targetDatabaseName**: string (ReadOnly)

### MigrationLevelOutput
#### Properties
* **agentJobs**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **databases**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **logins**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **message**: string (ReadOnly)
* **orphanedUsersInfo**: [OrphanedUserInfo](#orphaneduserinfo)[] (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **serverRoleResults**: [Dictionary<string,StartMigrationScenarioServerRoleResult>](#dictionarystringstartmigrationscenarioserverroleresult) (ReadOnly)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

### MigrationValidationOutput
#### Properties
* **migrationId**: string (ReadOnly)
* **resultType**: 'MigrationValidationOutput' (Required)
* **status**: 'Completed' | 'CompletedWithIssues' | 'Default' | 'Failed' | 'Initialized' | 'InProgress' | 'NotStarted' | 'Stopped' (ReadOnly)
* **summaryResults**: [Dictionary<string,MigrationValidationDatabaseSummaryResult>](#dictionarystringmigrationvalidationdatabasesummaryresult)

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


## MigrationDatabaseLevelValidationOutput
### Properties
* **dataIntegrityValidationResult**: [DataIntegrityValidationResult](#dataintegrityvalidationresult) (ReadOnly)
* **endedOn**: string (ReadOnly)
* **migrationId**: string (ReadOnly)
* **queryAnalysisValidationResult**: [QueryAnalysisValidationResult](#queryanalysisvalidationresult) (ReadOnly)
* **resultType**: 'MigrationDatabaseLevelValidationOutput' (Required)
* **schemaValidationResult**: [SchemaComparisonValidationResult](#schemacomparisonvalidationresult) (ReadOnly)
* **sourceDatabaseName**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **status**: 'Completed' | 'CompletedWithIssues' | 'Default' | 'Failed' | 'Initialized' | 'InProgress' | 'NotStarted' | 'Stopped' (ReadOnly)
* **targetDatabaseName**: string (ReadOnly)

## DataIntegrityValidationResult
### Properties
* **failedObjects**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **validationErrors**: [ValidationError](#validationerror) (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ValidationError
### Properties
* **severity**: 'Error' | 'Message' | 'Warning' (ReadOnly)
* **text**: string (ReadOnly)

## QueryAnalysisValidationResult
### Properties
* **queryResults**: [QueryExecutionResult](#queryexecutionresult) (ReadOnly)
* **validationErrors**: [ValidationError](#validationerror) (ReadOnly)

## QueryExecutionResult
### Properties
* **queryText**: string (ReadOnly)
* **sourceResult**: [ExecutionStatistics](#executionstatistics) (ReadOnly)
* **statementsInBatch**: int (ReadOnly)
* **targetResult**: [ExecutionStatistics](#executionstatistics) (ReadOnly)

## ExecutionStatistics
### Properties
* **cpuTimeMs**: int (ReadOnly)
* **elapsedTimeMs**: int (ReadOnly)
* **executionCount**: int (ReadOnly)
* **hasErrors**: bool (ReadOnly)
* **sqlErrors**: string[] (ReadOnly)
* **waitStats**: [Dictionary<string,WaitStatistics>](#dictionarystringwaitstatistics)

## Dictionary<string,WaitStatistics>
### Properties
### Additional Properties
* **Additional Properties Type**: [WaitStatistics](#waitstatistics)

## WaitStatistics
### Properties
* **waitCount**: int (ReadOnly)
* **waitTimeMs**: int (ReadOnly)
* **waitType**: string (ReadOnly)

## SchemaComparisonValidationResult
### Properties
* **schemaDifferences**: [SchemaComparisonValidationResultType](#schemacomparisonvalidationresulttype) (ReadOnly)
* **sourceDatabaseObjectCount**: [Dictionary<string,Long>](#dictionarystringlong)
* **targetDatabaseObjectCount**: [Dictionary<string,Long>](#dictionarystringlong)
* **validationErrors**: [ValidationError](#validationerror) (ReadOnly)

## SchemaComparisonValidationResultType
### Properties
* **objectName**: string (ReadOnly)
* **objectType**: 'Function' | 'StoredProcedures' | 'Table' | 'User' | 'View' (ReadOnly)
* **updateAction**: 'AddedOnTarget' | 'ChangedOnTarget' | 'DeletedOnTarget' (ReadOnly)

## Dictionary<string,Long>
### Properties
### Additional Properties
* **Additional Properties Type**: int

## Dictionary<string,Long>
### Properties
### Additional Properties
* **Additional Properties Type**: int

## MigrationValidationOutput
### Properties
* **migrationId**: string (ReadOnly)
* **resultType**: 'MigrationValidationOutput' (Required)
* **status**: 'Completed' | 'CompletedWithIssues' | 'Default' | 'Failed' | 'Initialized' | 'InProgress' | 'NotStarted' | 'Stopped' (ReadOnly)
* **summaryResults**: [Dictionary<string,MigrationValidationDatabaseSummaryResult>](#dictionarystringmigrationvalidationdatabasesummaryresult)

## Dictionary<string,MigrationValidationDatabaseSummaryResult>
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
* **status**: 'Completed' | 'CompletedWithIssues' | 'Default' | 'Failed' | 'Initialized' | 'InProgress' | 'NotStarted' | 'Stopped' (ReadOnly)
* **targetDatabaseName**: string (ReadOnly)

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

