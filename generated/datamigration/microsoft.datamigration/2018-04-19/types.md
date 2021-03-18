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
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.DataMigration/services' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataMigration/services/projects@2018-04-19
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-19' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProjectProperties](#projectproperties)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProjectTaskProperties
* **Discriminator**: taskType

### Base Properties
* **commands**: [CommandProperties](#commandproperties)[] (ReadOnly)
* **errors**: [ODataError](#odataerror)[] (ReadOnly)
* **state**: 'Canceled' | 'Failed' | 'FailedInputValidation' | 'Faulted' | 'Queued' | 'Running' | 'Succeeded' | 'Unknown' (ReadOnly)
### ConnectToSourceMySqlTaskProperties
#### Properties
* **input**: [ConnectToSourceMySqlTaskInput](#connecttosourcemysqltaskinput)
* **output**: [ConnectToSourceNonSqlTaskOutput](#connecttosourcenonsqltaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToSource.MySql' (Required)

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

### MigrateMySqlAzureDbForMySqlSyncTaskProperties
#### Properties
* **input**: [MigrateMySqlAzureDbForMySqlSyncTaskInput](#migratemysqlazuredbformysqlsynctaskinput)
* **output**: [MigrateMySqlAzureDbForMySqlSyncTaskOutput](#migratemysqlazuredbformysqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.MySql.AzureDbForMySql.Sync' (Required)

### MigratePostgreSqlAzureDbForPostgreSqlSyncTaskProperties
#### Properties
* **input**: [MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput](#migratepostgresqlazuredbforpostgresqlsynctaskinput)
* **output**: [MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput](#migratepostgresqlazuredbforpostgresqlsynctaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.PostgreSql.AzureDbForPostgreSql.Sync' (Required)

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


## CommandProperties
* **Discriminator**: commandType

### Base Properties
* **errors**: [ODataError](#odataerror)[] (ReadOnly)
* **state**: 'Accepted' | 'Failed' | 'Running' | 'Succeeded' | 'Unknown' (ReadOnly)
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


## ODataError
### Properties
* **code**: string (ReadOnly)
* **details**: [ODataError](#odataerror)[] (ReadOnly)
* **message**: string (ReadOnly)

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
* **filePath**: string (ReadOnly)
* **hResult**: int (ReadOnly)
* **lineNumber**: string (ReadOnly)
* **message**: string (ReadOnly)
* **stackTrace**: string (ReadOnly)

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
* **collectLogins**: bool
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)

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
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)

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
* **migrationState**: 'CANCELLED' | 'CANCELLING' | 'COMPLETE' | 'COMPLETING' | 'CONFIGURING' | 'FAILED' | 'INITIALIAZING' | 'READY_TO_COMPLETE' | 'RUNNING' | 'STARTING' | 'UNDEFINED' (ReadOnly)
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
* **migrationState**: 'CANCELLED' | 'CANCELLING' | 'COMPLETE' | 'COMPLETING' | 'CONFIGURING' | 'FAILED' | 'INITIALIAZING' | 'READY_TO_COMPLETE' | 'RUNNING' | 'STARTING' | 'UNDEFINED' (ReadOnly)
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

## MigratePostgreSqlAzureDbForPostgreSqlSyncTaskProperties
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
* **migrationSetting**: [MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputMigrationSetting](#migratepostgresqlazuredbforpostgresqlsyncdatabaseinputmigrationsetting)
* **name**: string
* **sourceSetting**: [MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputSourceSetting](#migratepostgresqlazuredbforpostgresqlsyncdatabaseinputsourcesetting)
* **targetDatabaseName**: string
* **targetSetting**: [MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputTargetSetting](#migratepostgresqlazuredbforpostgresqlsyncdatabaseinputtargetsetting)

## MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputMigrationSetting
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **migrationState**: 'CANCELLED' | 'CANCELLING' | 'COMPLETE' | 'COMPLETING' | 'CONFIGURING' | 'FAILED' | 'INITIALIAZING' | 'READY_TO_COMPLETE' | 'RUNNING' | 'STARTING' | 'UNDEFINED' (ReadOnly)
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
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **targetServer**: string (ReadOnly)
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
* **migrationState**: 'CANCELLED' | 'CANCELLING' | 'COMPLETE' | 'COMPLETING' | 'CONFIGURING' | 'FAILED' | 'INITIALIAZING' | 'READY_TO_COMPLETE' | 'RUNNING' | 'STARTING' | 'UNDEFINED' (ReadOnly)
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
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **targetServer**: string (ReadOnly)
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
* **migrationState**: 'CANCELLED' | 'CANCELLING' | 'COMPLETE' | 'COMPLETING' | 'CONFIGURING' | 'FAILED' | 'INITIALIAZING' | 'READY_TO_COMPLETE' | 'RUNNING' | 'STARTING' | 'UNDEFINED' (ReadOnly)
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
* **migrationState**: 'CANCELLED' | 'CANCELLING' | 'COMPLETE' | 'COMPLETING' | 'CONFIGURING' | 'FAILED' | 'INITIALIAZING' | 'READY_TO_COMPLETE' | 'RUNNING' | 'STARTING' | 'UNDEFINED' (ReadOnly)
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

### MigrateSqlServerSqlDbTaskOutputDatabaseLevelValidationResult
#### Properties
* **dataIntegrityValidationResult**: [DataIntegrityValidationResult](#dataintegrityvalidationresult) (ReadOnly)
* **endedOn**: string (ReadOnly)
* **migrationId**: string (ReadOnly)
* **queryAnalysisValidationResult**: [QueryAnalysisValidationResult](#queryanalysisvalidationresult) (ReadOnly)
* **resultType**: 'MigrationDatabaseLevelValidationOutput' (Required)
* **schemaValidationResult**: [SchemaComparisonValidationResult](#schemacomparisonvalidationresult) (ReadOnly)
* **sourceDatabaseName**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **status**: 'Completed' | 'CompletedWithIssues' | 'Default' | 'Failed' | 'InProgress' | 'Initialized' | 'NotStarted' | 'Stopped' (ReadOnly)
* **targetDatabaseName**: string (ReadOnly)

### MigrateSqlServerSqlDbTaskOutputMigrationLevel
#### Properties
* **databases**: string (ReadOnly)
* **databaseSummary**: string (ReadOnly)
* **durationInSeconds**: int (ReadOnly)
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **message**: string (ReadOnly)
* **migrationReport**: [MigrationReportResult](#migrationreportresult) (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly)
* **statusMessage**: string (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

### MigrateSqlServerSqlDbTaskOutputValidationResult
#### Properties
* **migrationId**: string (ReadOnly)
* **resultType**: 'MigrationValidationOutput' (Required)
* **status**: 'Completed' | 'CompletedWithIssues' | 'Default' | 'Failed' | 'InProgress' | 'Initialized' | 'NotStarted' | 'Stopped' (ReadOnly)
* **summaryResults**: [MigrateSqlServerSqlDbTaskOutputValidationResultSummaryResults](#migratesqlserversqldbtaskoutputvalidationresultsummaryresults)

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

## MigrateSqlServerSqlDbTaskOutputDatabaseLevelValidationResult
### Properties
* **dataIntegrityValidationResult**: [DataIntegrityValidationResult](#dataintegrityvalidationresult) (ReadOnly)
* **endedOn**: string (ReadOnly)
* **migrationId**: string (ReadOnly)
* **queryAnalysisValidationResult**: [QueryAnalysisValidationResult](#queryanalysisvalidationresult) (ReadOnly)
* **resultType**: 'MigrationDatabaseLevelValidationOutput' (Required)
* **schemaValidationResult**: [SchemaComparisonValidationResult](#schemacomparisonvalidationresult) (ReadOnly)
* **sourceDatabaseName**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **status**: 'Completed' | 'CompletedWithIssues' | 'Default' | 'Failed' | 'InProgress' | 'Initialized' | 'NotStarted' | 'Stopped' (ReadOnly)
* **targetDatabaseName**: string (ReadOnly)

## DataIntegrityValidationResult
### Properties
* **failedObjects**: [DataIntegrityValidationResultFailedObjects](#dataintegrityvalidationresultfailedobjects) (ReadOnly)
* **validationErrors**: [ValidationError](#validationerror) (ReadOnly)

## DataIntegrityValidationResultFailedObjects
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
* **waitStats**: [ExecutionStatisticsWaitStats](#executionstatisticswaitstats)

## ExecutionStatisticsWaitStats
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
* **sourceDatabaseObjectCount**: [SchemaComparisonValidationResultSourceDatabaseObjectCount](#schemacomparisonvalidationresultsourcedatabaseobjectcount)
* **targetDatabaseObjectCount**: [SchemaComparisonValidationResultTargetDatabaseObjectCount](#schemacomparisonvalidationresulttargetdatabaseobjectcount)
* **validationErrors**: [ValidationError](#validationerror) (ReadOnly)

## SchemaComparisonValidationResultType
### Properties
* **objectName**: string (ReadOnly)
* **objectType**: 'Function' | 'StoredProcedures' | 'Table' | 'User' | 'View' (ReadOnly)
* **updateAction**: 'AddedOnTarget' | 'ChangedOnTarget' | 'DeletedOnTarget' (ReadOnly)

## SchemaComparisonValidationResultSourceDatabaseObjectCount
### Properties
### Additional Properties
* **Additional Properties Type**: int

## SchemaComparisonValidationResultTargetDatabaseObjectCount
### Properties
### Additional Properties
* **Additional Properties Type**: int

## MigrateSqlServerSqlDbTaskOutputMigrationLevel
### Properties
* **databases**: string (ReadOnly)
* **databaseSummary**: string (ReadOnly)
* **durationInSeconds**: int (ReadOnly)
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **message**: string (ReadOnly)
* **migrationReport**: [MigrationReportResult](#migrationreportresult) (ReadOnly)
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
* **id**: string (ReadOnly)
* **reportUrl**: string (ReadOnly)

## MigrateSqlServerSqlDbTaskOutputValidationResult
### Properties
* **migrationId**: string (ReadOnly)
* **resultType**: 'MigrationValidationOutput' (Required)
* **status**: 'Completed' | 'CompletedWithIssues' | 'Default' | 'Failed' | 'InProgress' | 'Initialized' | 'NotStarted' | 'Stopped' (ReadOnly)
* **summaryResults**: [MigrateSqlServerSqlDbTaskOutputValidationResultSummaryResults](#migratesqlserversqldbtaskoutputvalidationresultsummaryresults)

## MigrateSqlServerSqlDbTaskOutputValidationResultSummaryResults
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

