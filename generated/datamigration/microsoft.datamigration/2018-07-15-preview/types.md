# Microsoft.DataMigration @ 2018-07-15-preview

## Resource Microsoft.DataMigration/services@2018-07-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: HTTP strong entity tag value. Ignored if submitted
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: The resource kind. Only 'vm' (the default) is supported.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataMigrationServiceProperties](#datamigrationserviceproperties): Custom service properties
* **sku**: [ServiceSku](#servicesku): Service SKU
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DataMigration/services' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataMigration/services/projects@2018-07-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectProperties](#projectproperties): Project properties
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DataMigration/services/projects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataMigration/services/projects/files@2018-07-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: HTTP strong entity tag value. This is ignored if submitted.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectFileProperties](#projectfileproperties): Custom file properties
* **type**: 'Microsoft.DataMigration/services/projects/files' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataMigration/services/projects/tasks@2018-07-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: HTTP strong entity tag value. This is ignored if submitted.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectTaskProperties](#projecttaskproperties): Custom task properties
* **type**: 'Microsoft.DataMigration/services/projects/tasks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataMigration/services/serviceTasks@2018-07-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: HTTP strong entity tag value. This is ignored if submitted.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectTaskProperties](#projecttaskproperties): Custom task properties
* **type**: 'Microsoft.DataMigration/services/serviceTasks' (ReadOnly, DeployTimeConstant): The resource type

## AzureActiveDirectoryApp
### Properties
* **appKey**: string (Required): Key used to authenticate to the Azure Active Directory Application
* **applicationId**: string (Required): Application ID of the Azure Active Directory Application
* **tenantId**: string (Required): Tenant id of the customer

## BackupFileInfo
### Properties
* **familySequenceNumber**: int: Sequence number of the backup file in the backup set
* **fileLocation**: string: Location of the backup file in shared folder
* **status**: 'Arrived' | 'Cancelled' | 'Queued' | 'Restored' | 'Restoring' | 'Uploaded' | 'Uploading' | string: Status of the backup file during migration

## BackupSetInfo
### Properties
* **backupFinishedDate**: string: Date and time that the backup operation finished
* **backupSetId**: string: Id for the set of backup files
* **backupStartDate**: string: Date and time that the backup operation began
* **backupType**: 'Database' | 'DifferentialDatabase' | 'DifferentialFile' | 'DifferentialPartial' | 'File' | 'Partial' | 'TransactionLog' | string: Enum of the different backup types
* **databaseName**: string: Name of the database to which the backup set belongs
* **firstLsn**: string: First log sequence number of the backup file
* **isBackupRestored**: bool: Whether the backup set is restored or not
* **lastLsn**: string: Last log sequence number of the backup file
* **lastModifiedTime**: string: Last modified time of the backup file in share location
* **listOfBackupFiles**: [BackupFileInfo](#backupfileinfo)[]: List of files in the backup set

## BlobShare
### Properties
* **sasUri**: string (Required): SAS URI of Azure Storage Account Container.

## CheckOCIDriverTaskInput
### Properties
* **serverVersion**: string: Version of the source server to check against.  Optional.

## CheckOCIDriverTaskOutput
### Properties
* **installedDriver**: [OracleOCIDriverInfo](#oracleocidriverinfo): Information about the installed driver if found and valid.
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

## CommandProperties
* **Discriminator**: commandType

### Base Properties
* **errors**: [ODataError](#odataerror)[] (ReadOnly): Array of errors. This is ignored if submitted.
* **state**: 'Accepted' | 'Failed' | 'Running' | 'Succeeded' | 'Unknown' | string (ReadOnly): The state of the command. This is ignored if submitted.

### MongoDbCancelCommand
#### Properties
* **commandType**: 'cancel' (Required): Command type.
* **input**: [MongoDbCommandInput](#mongodbcommandinput): Command input

### MongoDbFinishCommand
#### Properties
* **commandType**: 'finish' (Required): Command type.
* **input**: [MongoDbFinishCommandInput](#mongodbfinishcommandinput): Command input

### MigrateMISyncCompleteCommandProperties
#### Properties
* **commandType**: 'Migrate.SqlServer.AzureDbSqlMi.Complete' (Required): Command type.
* **input**: [MigrateMISyncCompleteCommandInput](#migratemisynccompletecommandinput): Command input
* **output**: [MigrateMISyncCompleteCommandOutput](#migratemisynccompletecommandoutput) (ReadOnly): Command output. This is ignored if submitted.

### MigrateSyncCompleteCommandProperties
#### Properties
* **commandType**: 'Migrate.Sync.Complete.Database' (Required): Command type.
* **input**: [MigrateSyncCompleteCommandInput](#migratesynccompletecommandinput): Command input
* **output**: [MigrateSyncCompleteCommandOutput](#migratesynccompletecommandoutput) (ReadOnly): Command output. This is ignored if submitted.

### MongoDbRestartCommand
#### Properties
* **commandType**: 'restart' (Required): Command type.
* **input**: [MongoDbCommandInput](#mongodbcommandinput): Command input


## ConnectionInfo
* **Discriminator**: type

### Base Properties
* **password**: string: Password credential.
* **userName**: string: User name

### MiSqlConnectionInfo
#### Properties
* **managedInstanceResourceId**: string (Required): Resource id for Azure SQL database Managed instance
* **type**: 'MiSqlConnectionInfo' (Required): Type of connection info

### MongoDbConnectionInfo
#### Properties
* **connectionString**: string (Required): A MongoDB connection string or blob container URL. The user name and password can be specified here or in the userName and password properties
* **type**: 'MongoDbConnectionInfo' (Required): Type of connection info

### MySqlConnectionInfo
#### Properties
* **port**: int (Required): Port for Server
* **serverName**: string (Required): Name of the server
* **type**: 'MySqlConnectionInfo' (Required): Type of connection info

### OracleConnectionInfo
#### Properties
* **dataSource**: string (Required): EZConnect or TNSName connection string.
* **type**: 'OracleConnectionInfo' (Required): Type of connection info

### PostgreSqlConnectionInfo
#### Properties
* **databaseName**: string: Name of the database
* **encryptConnection**: bool: Whether to encrypt the connection
* **port**: int (Required): Port for Server
* **serverName**: string (Required): Name of the server
* **trustServerCertificate**: bool: Whether to trust the server certificate
* **type**: 'PostgreSqlConnectionInfo' (Required): Type of connection info

### SqlConnectionInfo
#### Properties
* **additionalSettings**: string: Additional connection settings
* **authentication**: 'ActiveDirectoryIntegrated' | 'ActiveDirectoryPassword' | 'None' | 'SqlAuthentication' | 'WindowsAuthentication' | string: Authentication type to use for connection
* **dataSource**: string (Required): Data source in the format Protocol:MachineName\SQLServerInstanceName,PortNumber
* **encryptConnection**: bool: Whether to encrypt the connection
* **platform**: 'SqlOnPrem' | string: Server platform type for connection
* **trustServerCertificate**: bool: Whether to trust the server certificate
* **type**: 'SqlConnectionInfo' (Required): Type of connection info


## ConnectToSourceMySqlTaskInput
### Properties
* **checkPermissionsGroup**: 'Default' | 'MigrationFromMySQLToAzureDBForMySQL' | 'MigrationFromSqlServerToAzureDB' | 'MigrationFromSqlServerToAzureMI': Permission group for validations
* **sourceConnectionInfo**: [MySqlConnectionInfo](#mysqlconnectioninfo) (Required): Information for connecting to MySQL source
* **targetPlatform**: 'AzureDbForMySQL' | 'SqlServer' | string: Target Platform for the migration

## ConnectToSourceNonSqlTaskOutput
### Properties
* **databases**: string[] (ReadOnly): List of databases on the server
* **id**: string (ReadOnly): Result identifier
* **serverProperties**: [ServerProperties](#serverproperties) (ReadOnly): Server properties
* **sourceServerBrandVersion**: string (ReadOnly): Server brand version
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors associated with the task

## ConnectToSourceOracleSyncTaskInput
### Properties
* **sourceConnectionInfo**: [OracleConnectionInfo](#oracleconnectioninfo) (Required): Information for connecting to Oracle source

## ConnectToSourceOracleSyncTaskOutput
### Properties
* **databases**: string[] (ReadOnly): List of schemas on source server
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Version of the source server
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors associated with the task

## ConnectToSourcePostgreSqlSyncTaskInput
### Properties
* **sourceConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required): Connection information for source PostgreSQL server

## ConnectToSourcePostgreSqlSyncTaskOutput
### Properties
* **databases**: string[] (ReadOnly): List of databases on source server
* **id**: string (ReadOnly): Result identifier
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Version of the source server
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors associated with the task

## ConnectToSourceSqlServerTaskInput
### Properties
* **checkPermissionsGroup**: 'Default' | 'MigrationFromMySQLToAzureDBForMySQL' | 'MigrationFromSqlServerToAzureDB' | 'MigrationFromSqlServerToAzureMI': Permission group for validations
* **collectAgentJobs**: bool: Flag for whether to collect agent jobs from source server.
* **collectDatabases**: bool: Flag for whether to collect databases from source server.
* **collectLogins**: bool: Flag for whether to collect logins from source server.
* **collectTdeCertificateInfo**: bool: Flag for whether to collect TDE Certificate names from source server.
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Connection information for Source SQL Server
* **validateSsisCatalogOnly**: bool: Flag for whether to validate SSIS catalog is reachable on the source server.

## ConnectToSourceSqlServerTaskOutput
* **Discriminator**: resultType

### Base Properties
* **id**: string (ReadOnly): Result identifier

### ConnectToSourceSqlServerTaskOutputAgentJobLevel
#### Properties
* **isEnabled**: bool (ReadOnly): The state of the original Agent Job.
* **jobCategory**: string (ReadOnly): The type of Agent Job.
* **jobOwner**: string (ReadOnly): The owner of the Agent Job
* **lastExecutedOn**: string (ReadOnly): UTC Date and time when the Agent Job was last executed.
* **migrationEligibility**: [MigrationEligibilityInfo](#migrationeligibilityinfo) (ReadOnly): Information about eligibility of agent job for migration.
* **name**: string (ReadOnly): Agent Job name
* **resultType**: 'AgentJobLevelOutput' (Required): Type of result - database level or task level
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

### ConnectToSourceSqlServerTaskOutputDatabaseLevel
#### Properties
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' | string (ReadOnly): SQL Server compatibility level of database
* **databaseFiles**: [DatabaseFileInfo](#databasefileinfo)[] (ReadOnly): The list of database files
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' | string (ReadOnly): State of the database
* **name**: string (ReadOnly): Database name
* **resultType**: 'DatabaseLevelOutput' (Required): Type of result - database level or task level
* **sizeMB**: int (ReadOnly): Size of the file in megabytes

### ConnectToSourceSqlServerTaskOutputLoginLevel
#### Properties
* **defaultDatabase**: string (ReadOnly): The default database for the login.
* **isEnabled**: bool (ReadOnly): The state of the login.
* **loginType**: 'AsymmetricKey' | 'Certificate' | 'ExternalGroup' | 'ExternalUser' | 'SqlLogin' | 'WindowsGroup' | 'WindowsUser' | string (ReadOnly): The type of login.
* **migrationEligibility**: [MigrationEligibilityInfo](#migrationeligibilityinfo) (ReadOnly): Information about eligibility of login for migration.
* **name**: string (ReadOnly): Login name.
* **resultType**: 'LoginLevelOutput' (Required): Type of result - database level or task level

### ConnectToSourceSqlServerTaskOutputTaskLevel
#### Properties
* **agentJobs**: string (ReadOnly): Source agent jobs as a map from agent job name to id.
* **databases**: string (ReadOnly): Source databases as a map from database name to database id
* **databaseTdeCertificateMapping**: string (ReadOnly): Mapping from database name to TDE certificate name, if applicable
* **logins**: string (ReadOnly): Source logins as a map from login name to login id.
* **resultType**: 'TaskLevelOutput' (Required): Type of result - database level or task level
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors


## ConnectToTargetAzureDbForMySqlTaskInput
### Properties
* **sourceConnectionInfo**: [MySqlConnectionInfo](#mysqlconnectioninfo) (Required): Connection information for source MySQL server
* **targetConnectionInfo**: [MySqlConnectionInfo](#mysqlconnectioninfo) (Required): Connection information for target Azure Database for MySQL server

## ConnectToTargetAzureDbForMySqlTaskOutput
### Properties
* **databases**: string[] (ReadOnly): List of databases on target server
* **id**: string (ReadOnly): Result identifier
* **serverVersion**: string (ReadOnly): Version of the target server
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors associated with the task

## ConnectToTargetAzureDbForPostgreSqlSyncTaskInput
### Properties
* **sourceConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required): Connection information for source PostgreSQL server
* **targetConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required): Connection information for target Azure Database for PostgreSQL server

## ConnectToTargetAzureDbForPostgreSqlSyncTaskOutput
### Properties
* **databases**: string[] (ReadOnly): List of databases on target server
* **id**: string (ReadOnly): Result identifier
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Version of the target server
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors associated with the task

## ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInput
### Properties
* **targetConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required): Connection information for target Azure Database for PostgreSQL server

## ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutput
### Properties
* **databases**: string[] (ReadOnly): List of databases on target server
* **databaseSchemaMap**: [ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutputDatabaseSchemaMapItem](#connecttotargetoracleazuredbforpostgresqlsynctaskoutputdatabaseschemamapitem)[]: Mapping of schemas per database
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Version of the target server
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors associated with the task

## ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutputDatabaseSchemaMapItem
### Properties
* **database**: string
* **schemas**: string[]

## ConnectToTargetSqlDbSyncTaskInput
### Properties
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Connection information for source SQL Server
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Connection information for target SQL DB

## ConnectToTargetSqlDbTaskInput
### Properties
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Connection information for target SQL DB

## ConnectToTargetSqlDbTaskOutput
### Properties
* **databases**: string (ReadOnly): Source databases as a map from database name to database id
* **id**: string (ReadOnly): Result identifier
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Version of the target server

## ConnectToTargetSqlMISyncTaskInput
### Properties
* **azureApp**: [AzureActiveDirectoryApp](#azureactivedirectoryapp) (Required): Azure Active Directory Application the DMS instance will use to connect to the target instance of Azure SQL Database Managed Instance and the Azure Storage Account
* **targetConnectionInfo**: [MiSqlConnectionInfo](#misqlconnectioninfo) (Required): Connection information for Azure SQL Database Managed Instance

## ConnectToTargetSqlMISyncTaskOutput
### Properties
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Target server version
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

## ConnectToTargetSqlMITaskInput
### Properties
* **collectAgentJobs**: bool: Flag for whether to collect agent jobs from target SQL MI server.
* **collectLogins**: bool: Flag for whether to collect logins from target SQL MI server.
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Connection information for target SQL Server
* **validateSsisCatalogOnly**: bool: Flag for whether to validate SSIS catalog is reachable on the target SQL MI server.

## ConnectToTargetSqlMITaskOutput
### Properties
* **agentJobs**: string[] (ReadOnly): List of agent jobs on the target server.
* **id**: string (ReadOnly): Result identifier
* **logins**: string[] (ReadOnly): List of logins on the target server.
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Target server version
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

## DatabaseBackupInfo
### Properties
* **backupFiles**: string[] (ReadOnly): The list of backup files for the current database.
* **backupFinishDate**: string (ReadOnly): Date and time when the backup operation finished.
* **backupType**: 'Database' | 'DifferentialDatabase' | 'DifferentialFile' | 'DifferentialPartial' | 'File' | 'Partial' | 'TransactionLog' | string (ReadOnly): Backup Type.
* **databaseName**: string (ReadOnly): Database name.
* **familyCount**: int (ReadOnly): Number of files in the backup set.
* **isCompressed**: bool (ReadOnly): Whether the backup set is compressed
* **isDamaged**: bool (ReadOnly): Database was damaged when backed up, but the backup operation was requested to continue despite errors.
* **position**: int (ReadOnly): Position of current database backup in the file.

## DatabaseFileInfo
### Properties
* **databaseName**: string: Name of the database
* **fileType**: 'Filestream' | 'Fulltext' | 'Log' | 'NotSupported' | 'Rows' | string: Database file type
* **id**: string: Unique identifier for database file
* **logicalName**: string: Logical name of the file
* **physicalFullName**: string: Operating-system full path of the file
* **restoreFullName**: string: Suggested full path of the file for restoring
* **sizeMB**: int: Size of the file in megabytes

## DatabaseInfo
### Properties
* **sourceDatabaseName**: string (Required): Name of the database

## DatabaseTable
### Properties
* **hasRows**: bool (ReadOnly): Indicates whether table is empty or not
* **name**: string (ReadOnly): Schema-qualified name of the table

## DataMigrationServiceProperties
### Properties
* **provisioningState**: 'Accepted' | 'Deleting' | 'Deploying' | 'Failed' | 'FailedToStart' | 'FailedToStop' | 'Starting' | 'Stopped' | 'Stopping' | 'Succeeded' | string (ReadOnly): The resource's provisioning state
* **publicKey**: string: The public key of the service, used to encrypt secrets sent to the service
* **virtualNicId**: string: The ID of the Microsoft.Network/networkInterfaces resource which the service have
* **virtualSubnetId**: string (Required): The ID of the Microsoft.Network/virtualNetworks/subnets resource to which the service should be joined

## FileShare
### Properties
* **password**: string: Password credential used to connect to the share location.
* **path**: string (Required): The folder path for this share.
* **userName**: string: User name credential to connect to the share location

## GetTdeCertificatesSqlTaskInput
### Properties
* **backupFileShare**: [FileShare](#fileshare) (Required): Backup file share information for file share to be used for temporarily storing files.
* **connectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Connection information for SQL Server
* **selectedCertificates**: [SelectedCertificateInput](#selectedcertificateinput)[] (Required): List containing certificate names and corresponding password to use for encrypting the exported certificate.

## GetTdeCertificatesSqlTaskOutput
### Properties
* **base64EncodedCertificates**: string (ReadOnly): Mapping from certificate name to base 64 encoded format.
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

## GetUserTablesOracleTaskInput
### Properties
* **connectionInfo**: [OracleConnectionInfo](#oracleconnectioninfo) (Required): Information for connecting to Oracle source
* **selectedSchemas**: string[] (Required): List of Oracle schemas for which to collect tables

## GetUserTablesOracleTaskOutput
### Properties
* **schemaName**: string (ReadOnly): The schema this result is for
* **tables**: [DatabaseTable](#databasetable)[] (ReadOnly): List of valid tables found for this schema
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors associated with the task

## GetUserTablesPostgreSqlTaskInput
### Properties
* **connectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required): Information for connecting to PostgreSQL source
* **selectedDatabases**: string[] (Required): List of PostgreSQL databases for which to collect tables

## GetUserTablesPostgreSqlTaskOutput
### Properties
* **databaseName**: string (ReadOnly): The database this result is for
* **tables**: [DatabaseTable](#databasetable)[] (ReadOnly): List of valid tables found for this database
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors associated with the task

## GetUserTablesSqlSyncTaskInput
### Properties
* **selectedSourceDatabases**: string[] (Required): List of source database names to collect tables for
* **selectedTargetDatabases**: string[] (Required): List of target database names to collect tables for
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Connection information for SQL Server
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Connection information for SQL DB

## GetUserTablesSqlSyncTaskOutput
### Properties
* **databasesToSourceTables**: string (ReadOnly): Mapping from database name to list of source tables
* **databasesToTargetTables**: string (ReadOnly): Mapping from database name to list of target tables
* **tableValidationErrors**: string (ReadOnly): Mapping from database name to list of validation errors
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

## GetUserTablesSqlTaskInput
### Properties
* **connectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Connection information for SQL Server
* **selectedDatabases**: string[] (Required): List of database names to collect tables for

## GetUserTablesSqlTaskOutput
### Properties
* **databasesToTables**: string (ReadOnly): Mapping from database name to list of tables
* **id**: string (ReadOnly): Result identifier
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

## InstallOCIDriverTaskInput
### Properties
* **driverPackageName**: string: Name of the uploaded driver package to install.

## InstallOCIDriverTaskOutput
### Properties
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

## MigrateMISyncCompleteCommandInput
### Properties
* **sourceDatabaseName**: string (Required): Name of managed instance database

## MigrateMISyncCompleteCommandOutput
### Properties
* **errors**: [ReportableException](#reportableexception)[]: List of errors that happened during the command execution

## MigrateMySqlAzureDbForMySqlSyncDatabaseInput
### Properties
* **migrationSetting**: [MigrateMySqlAzureDbForMySqlSyncDatabaseInputMigrationSetting](#migratemysqlazuredbformysqlsyncdatabaseinputmigrationsetting): Migration settings which tune the migration behavior
* **name**: string: Name of the database
* **sourceSetting**: [MigrateMySqlAzureDbForMySqlSyncDatabaseInputSourceSetting](#migratemysqlazuredbformysqlsyncdatabaseinputsourcesetting): Source settings to tune source endpoint migration behavior
* **tableMap**: [MigrateMySqlAzureDbForMySqlSyncDatabaseInputTableMap](#migratemysqlazuredbformysqlsyncdatabaseinputtablemap): Mapping of source to target tables
* **targetDatabaseName**: string: Name of target database. Note: Target database will be truncated before starting migration.
* **targetSetting**: [MigrateMySqlAzureDbForMySqlSyncDatabaseInputTargetSetting](#migratemysqlazuredbformysqlsyncdatabaseinputtargetsetting): Target settings to tune target endpoint migration behavior

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

## MigrateMySqlAzureDbForMySqlSyncTaskInput
### Properties
* **selectedDatabases**: [MigrateMySqlAzureDbForMySqlSyncDatabaseInput](#migratemysqlazuredbformysqlsyncdatabaseinput)[] (Required): Databases to migrate
* **sourceConnectionInfo**: [MySqlConnectionInfo](#mysqlconnectioninfo) (Required): Connection information for source MySQL
* **targetConnectionInfo**: [MySqlConnectionInfo](#mysqlconnectioninfo) (Required): Connection information for target Azure Database for MySQL

## MigrateMySqlAzureDbForMySqlSyncTaskOutput
* **Discriminator**: resultType

### Base Properties
* **id**: string (ReadOnly): Result identifier

### MigrateMySqlAzureDbForMySqlSyncTaskOutputDatabaseError
#### Properties
* **errorMessage**: string: Error message
* **events**: [SyncMigrationDatabaseErrorEvent](#syncmigrationdatabaseerrorevent)[]: List of error events.
* **resultType**: 'DatabaseLevelErrorOutput' (Required): Result type

### MigrateMySqlAzureDbForMySqlSyncTaskOutputDatabaseLevel
#### Properties
* **appliedChanges**: int (ReadOnly): Number of applied changes
* **cdcDeleteCounter**: int (ReadOnly): Number of cdc deletes
* **cdcInsertCounter**: int (ReadOnly): Number of cdc inserts
* **cdcUpdateCounter**: int (ReadOnly): Number of cdc updates
* **databaseName**: string (ReadOnly): Name of the database
* **endedOn**: string (ReadOnly): Migration end time
* **fullLoadCompletedTables**: int (ReadOnly): Number of tables completed in full load
* **fullLoadErroredTables**: int (ReadOnly): Number of tables errored in full load
* **fullLoadLoadingTables**: int (ReadOnly): Number of tables loading in full load
* **fullLoadQueuedTables**: int (ReadOnly): Number of tables queued in full load
* **incomingChanges**: int (ReadOnly): Number of incoming changes
* **initializationCompleted**: bool (ReadOnly): Indicates if initial load (full load) has been completed
* **latency**: int (ReadOnly): CDC apply latency
* **migrationState**: 'BACKUP_COMPLETED' | 'BACKUP_IN_PROGRESS' | 'CANCELLED' | 'CANCELLING' | 'COMPLETE' | 'COMPLETING' | 'CONFIGURING' | 'FAILED' | 'INITIALIAZING' | 'READY_TO_COMPLETE' | 'RESTORE_COMPLETED' | 'RESTORE_IN_PROGRESS' | 'RUNNING' | 'STARTING' | 'UNDEFINED' | 'VALIDATING' | 'VALIDATION_COMPLETE' | 'VALIDATION_FAILED' | string (ReadOnly): Migration state that this database is in
* **resultType**: 'DatabaseLevelOutput' (Required): Result type
* **startedOn**: string (ReadOnly): Migration start time

### MigrateMySqlAzureDbForMySqlSyncTaskOutputError
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Migration error
* **resultType**: 'ErrorOutput' (Required): Result type

### MigrateMySqlAzureDbForMySqlSyncTaskOutputMigrationLevel
#### Properties
* **endedOn**: string (ReadOnly): Migration end time
* **resultType**: 'MigrationLevelOutput' (Required): Result type
* **sourceServer**: string (ReadOnly): Source server name
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **targetServer**: string (ReadOnly): Target server name
* **targetServerVersion**: string (ReadOnly): Target server version

### MigrateMySqlAzureDbForMySqlSyncTaskOutputTableLevel
#### Properties
* **cdcDeleteCounter**: string (ReadOnly): Number of applied deletes
* **cdcInsertCounter**: string (ReadOnly): Number of applied inserts
* **cdcUpdateCounter**: string (ReadOnly): Number of applied updates
* **databaseName**: string (ReadOnly): Name of the database
* **dataErrorsCounter**: int (ReadOnly): Number of data errors occurred
* **fullLoadEndedOn**: string (ReadOnly): Full load end time
* **fullLoadEstFinishTime**: string (ReadOnly): Estimate to finish full load
* **fullLoadStartedOn**: string (ReadOnly): Full load start time
* **fullLoadTotalRows**: int (ReadOnly): Number of rows applied in full load
* **lastModifiedTime**: string (ReadOnly): Last modified time on target
* **resultType**: 'TableLevelOutput' (Required): Result type
* **state**: 'BEFORE_LOAD' | 'CANCELED' | 'COMPLETED' | 'ERROR' | 'FAILED' | 'FULL_LOAD' | string (ReadOnly): Current state of the table migration
* **tableName**: string (ReadOnly): Name of the table
* **totalChangesApplied**: int (ReadOnly): Total number of applied changes


## MigrateOracleAzureDbPostgreSqlSyncDatabaseInput
### Properties
* **caseManipulation**: string: How to handle object name casing: either Preserve or ToLower
* **migrationSetting**: [MigrateOracleAzureDbPostgreSqlSyncDatabaseInputMigrationSetting](#migrateoracleazuredbpostgresqlsyncdatabaseinputmigrationsetting): Migration settings which tune the migration behavior
* **name**: string: Name of the migration pipeline
* **schemaName**: string: Name of the source schema
* **sourceSetting**: [MigrateOracleAzureDbPostgreSqlSyncDatabaseInputSourceSetting](#migrateoracleazuredbpostgresqlsyncdatabaseinputsourcesetting): Source settings to tune source endpoint migration behavior
* **tableMap**: [MigrateOracleAzureDbPostgreSqlSyncDatabaseInputTableMap](#migrateoracleazuredbpostgresqlsyncdatabaseinputtablemap): Mapping of source to target tables
* **targetDatabaseName**: string: Name of target database. Note: Target database will be truncated before starting migration.
* **targetSetting**: [MigrateOracleAzureDbPostgreSqlSyncDatabaseInputTargetSetting](#migrateoracleazuredbpostgresqlsyncdatabaseinputtargetsetting): Target settings to tune target endpoint migration behavior

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

## MigrateOracleAzureDbPostgreSqlSyncTaskInput
### Properties
* **selectedDatabases**: [MigrateOracleAzureDbPostgreSqlSyncDatabaseInput](#migrateoracleazuredbpostgresqlsyncdatabaseinput)[] (Required): Databases to migrate
* **sourceConnectionInfo**: [OracleConnectionInfo](#oracleconnectioninfo) (Required): Connection information for source Oracle
* **targetConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required): Connection information for target Azure Database for PostgreSQL

## MigrateOracleAzureDbPostgreSqlSyncTaskOutput
* **Discriminator**: resultType

### Base Properties
* **id**: string (ReadOnly): Result identifier

### MigrateOracleAzureDbPostgreSqlSyncTaskOutputDatabaseError
#### Properties
* **errorMessage**: string: Error message
* **events**: [SyncMigrationDatabaseErrorEvent](#syncmigrationdatabaseerrorevent)[]: List of error events.
* **resultType**: 'DatabaseLevelErrorOutput' (Required): Result type

### MigrateOracleAzureDbPostgreSqlSyncTaskOutputDatabaseLevel
#### Properties
* **appliedChanges**: int (ReadOnly): Number of applied changes
* **cdcDeleteCounter**: int (ReadOnly): Number of cdc deletes
* **cdcInsertCounter**: int (ReadOnly): Number of cdc inserts
* **cdcUpdateCounter**: int (ReadOnly): Number of cdc updates
* **databaseName**: string (ReadOnly): Name of the database
* **endedOn**: string (ReadOnly): Migration end time
* **fullLoadCompletedTables**: int (ReadOnly): Number of tables completed in full load
* **fullLoadErroredTables**: int (ReadOnly): Number of tables errored in full load
* **fullLoadLoadingTables**: int (ReadOnly): Number of tables loading in full load
* **fullLoadQueuedTables**: int (ReadOnly): Number of tables queued in full load
* **incomingChanges**: int (ReadOnly): Number of incoming changes
* **initializationCompleted**: bool (ReadOnly): Indicates if initial load (full load) has been completed
* **latency**: int (ReadOnly): CDC apply latency
* **migrationState**: 'BACKUP_COMPLETED' | 'BACKUP_IN_PROGRESS' | 'CANCELLED' | 'CANCELLING' | 'COMPLETE' | 'COMPLETING' | 'CONFIGURING' | 'FAILED' | 'INITIALIAZING' | 'READY_TO_COMPLETE' | 'RESTORE_COMPLETED' | 'RESTORE_IN_PROGRESS' | 'RUNNING' | 'STARTING' | 'UNDEFINED' | 'VALIDATING' | 'VALIDATION_COMPLETE' | 'VALIDATION_FAILED' | string (ReadOnly): Migration state that this database is in
* **resultType**: 'DatabaseLevelOutput' (Required): Result type
* **startedOn**: string (ReadOnly): Migration start time

### MigrateOracleAzureDbPostgreSqlSyncTaskOutputError
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Migration error
* **resultType**: 'ErrorOutput' (Required): Result type

### MigrateOracleAzureDbPostgreSqlSyncTaskOutputMigrationLevel
#### Properties
* **endedOn**: string (ReadOnly): Migration end time
* **resultType**: 'MigrationLevelOutput' (Required): Result type
* **sourceServer**: string (ReadOnly): Source server name
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **targetServer**: string (ReadOnly): Target server name
* **targetServerVersion**: string (ReadOnly): Target server version

### MigrateOracleAzureDbPostgreSqlSyncTaskOutputTableLevel
#### Properties
* **cdcDeleteCounter**: int (ReadOnly): Number of applied deletes
* **cdcInsertCounter**: int (ReadOnly): Number of applied inserts
* **cdcUpdateCounter**: int (ReadOnly): Number of applied updates
* **databaseName**: string (ReadOnly): Name of the database
* **dataErrorsCounter**: int (ReadOnly): Number of data errors occurred
* **fullLoadEndedOn**: string (ReadOnly): Full load end time
* **fullLoadEstFinishTime**: string (ReadOnly): Estimate to finish full load
* **fullLoadStartedOn**: string (ReadOnly): Full load start time
* **fullLoadTotalRows**: int (ReadOnly): Number of rows applied in full load
* **lastModifiedTime**: string (ReadOnly): Last modified time on target
* **resultType**: 'TableLevelOutput' (Required): Result type
* **state**: 'BEFORE_LOAD' | 'CANCELED' | 'COMPLETED' | 'ERROR' | 'FAILED' | 'FULL_LOAD' | string (ReadOnly): Current state of the table migration
* **tableName**: string (ReadOnly): Name of the table
* **totalChangesApplied**: int (ReadOnly): Total number of applied changes


## MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput
### Properties
* **migrationSetting**: [MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputMigrationSetting](#migratepostgresqlazuredbforpostgresqlsyncdatabaseinputmigrationsetting): Migration settings which tune the migration behavior
* **name**: string: Name of the database
* **selectedTables**: [MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseTableInput](#migratepostgresqlazuredbforpostgresqlsyncdatabasetableinput)[]: Tables selected for migration
* **sourceSetting**: [MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputSourceSetting](#migratepostgresqlazuredbforpostgresqlsyncdatabaseinputsourcesetting): Source settings to tune source endpoint migration behavior
* **targetDatabaseName**: string: Name of target database. Note: Target database will be truncated before starting migration.
* **targetSetting**: [MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputTargetSetting](#migratepostgresqlazuredbforpostgresqlsyncdatabaseinputtargetsetting): Target settings to tune target endpoint migration behavior

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

## MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseTableInput
### Properties
* **name**: string: Name of the table to migrate

## MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput
### Properties
* **selectedDatabases**: [MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput](#migratepostgresqlazuredbforpostgresqlsyncdatabaseinput)[] (Required): Databases to migrate
* **sourceConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required): Connection information for source PostgreSQL
* **targetConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required): Connection information for target Azure Database for PostgreSQL

## MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput
* **Discriminator**: resultType

### Base Properties
* **id**: string (ReadOnly): Result identifier

### MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputDatabaseError
#### Properties
* **errorMessage**: string: Error message
* **events**: [SyncMigrationDatabaseErrorEvent](#syncmigrationdatabaseerrorevent)[]: List of error events.
* **resultType**: 'DatabaseLevelErrorOutput' (Required): Result type

### MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputDatabaseLevel
#### Properties
* **appliedChanges**: int (ReadOnly): Number of applied changes
* **cdcDeleteCounter**: int (ReadOnly): Number of cdc deletes
* **cdcInsertCounter**: int (ReadOnly): Number of cdc inserts
* **cdcUpdateCounter**: int (ReadOnly): Number of cdc updates
* **databaseName**: string (ReadOnly): Name of the database
* **endedOn**: string (ReadOnly): Migration end time
* **fullLoadCompletedTables**: int (ReadOnly): Number of tables completed in full load
* **fullLoadErroredTables**: int (ReadOnly): Number of tables errored in full load
* **fullLoadLoadingTables**: int (ReadOnly): Number of tables loading in full load
* **fullLoadQueuedTables**: int (ReadOnly): Number of tables queued in full load
* **incomingChanges**: int (ReadOnly): Number of incoming changes
* **initializationCompleted**: bool (ReadOnly): Indicates if initial load (full load) has been completed
* **latency**: int (ReadOnly): CDC apply latency
* **migrationState**: 'BACKUP_COMPLETED' | 'BACKUP_IN_PROGRESS' | 'CANCELLED' | 'CANCELLING' | 'COMPLETE' | 'COMPLETING' | 'CONFIGURING' | 'FAILED' | 'INITIALIAZING' | 'READY_TO_COMPLETE' | 'RESTORE_COMPLETED' | 'RESTORE_IN_PROGRESS' | 'RUNNING' | 'STARTING' | 'UNDEFINED' | 'VALIDATING' | 'VALIDATION_COMPLETE' | 'VALIDATION_FAILED' | string (ReadOnly): Migration state that this database is in
* **resultType**: 'DatabaseLevelOutput' (Required): Result type
* **startedOn**: string (ReadOnly): Migration start time

### MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputError
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Migration error
* **resultType**: 'ErrorOutput' (Required): Result type

### MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputMigrationLevel
#### Properties
* **endedOn**: string (ReadOnly): Migration end time
* **resultType**: 'MigrationLevelOutput' (Required): Result type
* **sourceServer**: string (ReadOnly): Source server name
* **sourceServerType**: 'Access' | 'DB2' | 'MongoDB' | 'MySQL' | 'MySQLRDS' | 'Oracle' | 'PostgreSQL' | 'PostgreSQLRDS' | 'SQL' | 'SQLRDS' | 'Sybase' | string (ReadOnly): Source server type.
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'ACTION_REQUIRED' | 'COMPLETE' | 'FAILED' | 'PENDING' | 'UNDEFINED' | 'VALIDATING' | string (ReadOnly): Migration status
* **targetServer**: string (ReadOnly): Target server name
* **targetServerType**: 'AzureDBForMySql' | 'AzureDBForPostgresSQL' | 'MongoDB' | 'SQLDB' | 'SQLDW' | 'SQLMI' | 'SQLServer' | string (ReadOnly): Target server type.
* **targetServerVersion**: string (ReadOnly): Target server version

### MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputTableLevel
#### Properties
* **cdcDeleteCounter**: int (ReadOnly): Number of applied deletes
* **cdcInsertCounter**: int (ReadOnly): Number of applied inserts
* **cdcUpdateCounter**: int (ReadOnly): Number of applied updates
* **databaseName**: string (ReadOnly): Name of the database
* **dataErrorsCounter**: int (ReadOnly): Number of data errors occurred
* **fullLoadEndedOn**: string (ReadOnly): Full load end time
* **fullLoadEstFinishTime**: string (ReadOnly): Estimate to finish full load
* **fullLoadStartedOn**: string (ReadOnly): Full load start time
* **fullLoadTotalRows**: int (ReadOnly): Number of rows applied in full load
* **lastModifiedTime**: string (ReadOnly): Last modified time on target
* **resultType**: 'TableLevelOutput' (Required): Result type
* **state**: 'BEFORE_LOAD' | 'CANCELED' | 'COMPLETED' | 'ERROR' | 'FAILED' | 'FULL_LOAD' | string (ReadOnly): Current state of the table migration
* **tableName**: string (ReadOnly): Name of the table
* **totalChangesApplied**: int (ReadOnly): Total number of applied changes


## MigrateSchemaSqlServerSqlDbDatabaseInput
### Properties
* **name**: string: Name of source database
* **schemaSetting**: [SchemaMigrationSetting](#schemamigrationsetting): Database schema migration settings
* **targetDatabaseName**: string: Name of target database

## MigrateSchemaSqlServerSqlDbTaskInput
### Properties
* **selectedDatabases**: [MigrateSchemaSqlServerSqlDbDatabaseInput](#migrateschemasqlserversqldbdatabaseinput)[] (Required): Databases to migrate
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to source
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to target

## MigrateSchemaSqlServerSqlDbTaskOutput
* **Discriminator**: resultType

### Base Properties
* **id**: string (ReadOnly): Result identifier

### MigrateSchemaSqlServerSqlDbTaskOutputDatabaseLevel
#### Properties
* **databaseErrorResultPrefix**: string (ReadOnly): Prefix string to use for querying errors for this database
* **databaseName**: string (ReadOnly): The name of the database
* **endedOn**: string (ReadOnly): Migration end time
* **fileId**: string (ReadOnly): Identifier for the file resource containing the schema of this database
* **numberOfFailedOperations**: int (ReadOnly): Number of failed operations for this database
* **numberOfSuccessfulOperations**: int (ReadOnly): Number of successful operations for this database
* **resultType**: 'DatabaseLevelOutput' (Required): Result type
* **schemaErrorResultPrefix**: string (ReadOnly): Prefix string to use for querying schema errors for this database
* **stage**: 'CollectingObjects' | 'Completed' | 'CompletedWithWarnings' | 'DeployingSchema' | 'DownloadingScript' | 'Failed' | 'GeneratingScript' | 'NotStarted' | 'UploadingScript' | 'ValidatingInputs' | string (ReadOnly): Schema migration stage for this database
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' | string (ReadOnly): State of the schema migration for this database

### MigrateSchemaSqlTaskOutputError
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Migration error
* **resultType**: 'ErrorOutput' (Required): Result type

### MigrateSchemaSqlServerSqlDbTaskOutputMigrationLevel
#### Properties
* **endedOn**: string (ReadOnly): Migration end time
* **resultType**: 'MigrationLevelOutput' (Required): Result type
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' | string (ReadOnly): Overall state of the schema migration
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Target server version

### MigrateSchemaSqlServerSqlDbTaskOutputError
#### Properties
* **commandText**: string (ReadOnly): Schema command which failed
* **errorText**: string (ReadOnly): Reason of failure
* **resultType**: 'SchemaErrorOutput' (Required): Result type


## MigrateSqlServerSqlDbDatabaseInput
### Properties
* **makeSourceDbReadOnly**: bool: Whether to set database read only before migration
* **name**: string: Name of the database
* **tableMap**: [MigrateSqlServerSqlDbDatabaseInputTableMap](#migratesqlserversqldbdatabaseinputtablemap): Mapping of source to target tables
* **targetDatabaseName**: string: Name of target database. Note: Target database will be truncated before starting migration.

## MigrateSqlServerSqlDbDatabaseInputTableMap
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MigrateSqlServerSqlDbSyncDatabaseInput
### Properties
* **id**: string: Unique identifier for database
* **migrationSetting**: [MigrateSqlServerSqlDbSyncDatabaseInputMigrationSetting](#migratesqlserversqldbsyncdatabaseinputmigrationsetting): Migration settings which tune the migration behavior
* **name**: string: Name of database
* **schemaName**: string: Schema name to be migrated
* **sourceSetting**: [MigrateSqlServerSqlDbSyncDatabaseInputSourceSetting](#migratesqlserversqldbsyncdatabaseinputsourcesetting): Source settings to tune source endpoint migration behavior
* **tableMap**: [MigrateSqlServerSqlDbSyncDatabaseInputTableMap](#migratesqlserversqldbsyncdatabaseinputtablemap): Mapping of source to target tables
* **targetDatabaseName**: string: Target database name
* **targetSetting**: [MigrateSqlServerSqlDbSyncDatabaseInputTargetSetting](#migratesqlserversqldbsyncdatabaseinputtargetsetting): Target settings to tune target endpoint migration behavior

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

## MigrateSqlServerSqlDbSyncTaskInput
### Properties
* **selectedDatabases**: [MigrateSqlServerSqlDbSyncDatabaseInput](#migratesqlserversqldbsyncdatabaseinput)[] (Required): Databases to migrate
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to source
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to target
* **validationOptions**: [MigrationValidationOptions](#migrationvalidationoptions): Validation options

## MigrateSqlServerSqlDbSyncTaskOutput
* **Discriminator**: resultType

### Base Properties
* **id**: string (ReadOnly): Result identifier

### MigrateSqlServerSqlDbSyncTaskOutputDatabaseError
#### Properties
* **errorMessage**: string: Error message
* **events**: [SyncMigrationDatabaseErrorEvent](#syncmigrationdatabaseerrorevent)[]: List of error events.
* **resultType**: 'DatabaseLevelErrorOutput' (Required): Result type

### MigrateSqlServerSqlDbSyncTaskOutputDatabaseLevel
#### Properties
* **appliedChanges**: int (ReadOnly): Number of applied changes
* **cdcDeleteCounter**: int (ReadOnly): Number of cdc deletes
* **cdcInsertCounter**: int (ReadOnly): Number of cdc inserts
* **cdcUpdateCounter**: int (ReadOnly): Number of cdc updates
* **databaseName**: string (ReadOnly): Name of the database
* **endedOn**: string (ReadOnly): Migration end time
* **fullLoadCompletedTables**: int (ReadOnly): Number of tables completed in full load
* **fullLoadErroredTables**: int (ReadOnly): Number of tables errored in full load
* **fullLoadLoadingTables**: int (ReadOnly): Number of tables loading in full load
* **fullLoadQueuedTables**: int (ReadOnly): Number of tables queued in full load
* **incomingChanges**: int (ReadOnly): Number of incoming changes
* **initializationCompleted**: bool (ReadOnly): Indicates if initial load (full load) has been completed
* **latency**: int (ReadOnly): CDC apply latency
* **migrationState**: 'BACKUP_COMPLETED' | 'BACKUP_IN_PROGRESS' | 'CANCELLED' | 'CANCELLING' | 'COMPLETE' | 'COMPLETING' | 'CONFIGURING' | 'FAILED' | 'INITIALIAZING' | 'READY_TO_COMPLETE' | 'RESTORE_COMPLETED' | 'RESTORE_IN_PROGRESS' | 'RUNNING' | 'STARTING' | 'UNDEFINED' | 'VALIDATING' | 'VALIDATION_COMPLETE' | 'VALIDATION_FAILED' | string (ReadOnly): Migration state that this database is in
* **resultType**: 'DatabaseLevelOutput' (Required): Result type
* **startedOn**: string (ReadOnly): Migration start time

### MigrateSqlServerSqlDbSyncTaskOutputError
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Migration error
* **resultType**: 'ErrorOutput' (Required): Result type

### MigrateSqlServerSqlDbSyncTaskOutputMigrationLevel
#### Properties
* **databaseCount**: int (ReadOnly): Count of databases
* **endedOn**: string (ReadOnly): Migration end time
* **resultType**: 'MigrationLevelOutput' (Required): Result type
* **sourceServer**: string (ReadOnly): Source server name
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **targetServer**: string (ReadOnly): Target server name
* **targetServerVersion**: string (ReadOnly): Target server version

### MigrateSqlServerSqlDbSyncTaskOutputTableLevel
#### Properties
* **cdcDeleteCounter**: int (ReadOnly): Number of applied deletes
* **cdcInsertCounter**: int (ReadOnly): Number of applied inserts
* **cdcUpdateCounter**: int (ReadOnly): Number of applied updates
* **databaseName**: string (ReadOnly): Name of the database
* **dataErrorsCounter**: int (ReadOnly): Number of data errors occurred
* **fullLoadEndedOn**: string (ReadOnly): Full load end time
* **fullLoadEstFinishTime**: string (ReadOnly): Estimate to finish full load
* **fullLoadStartedOn**: string (ReadOnly): Full load start time
* **fullLoadTotalRows**: int (ReadOnly): Number of rows applied in full load
* **lastModifiedTime**: string (ReadOnly): Last modified time on target
* **resultType**: 'TableLevelOutput' (Required): Result type
* **state**: 'BEFORE_LOAD' | 'CANCELED' | 'COMPLETED' | 'ERROR' | 'FAILED' | 'FULL_LOAD' | string (ReadOnly): Current state of the table migration
* **tableName**: string (ReadOnly): Name of the table
* **totalChangesApplied**: int (ReadOnly): Total number of applied changes


## MigrateSqlServerSqlDbTaskInput
### Properties
* **selectedDatabases**: [MigrateSqlServerSqlDbDatabaseInput](#migratesqlserversqldbdatabaseinput)[] (Required): Databases to migrate
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to source
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to target
* **validationOptions**: [MigrationValidationOptions](#migrationvalidationoptions): Options for enabling various post migration validations. Available options, 
 1.) Data Integrity Check: Performs a checksum based comparison on source and target tables after the migration to ensure the correctness of the data. 
 2.) Schema Validation: Performs a thorough schema comparison between the source and target tables and provides a list of differences between the source and target database, 3.) Query Analysis: Executes a set of queries picked up automatically either from the Query Plan Cache or Query Store and execute them and compares the execution time between the source and target database.

## MigrateSqlServerSqlDbTaskOutput
* **Discriminator**: resultType

### Base Properties
* **id**: string (ReadOnly): Result identifier

### MigrateSqlServerSqlDbTaskOutputDatabaseLevel
#### Properties
* **databaseName**: string (ReadOnly): Name of the item
* **endedOn**: string (ReadOnly): Migration end time
* **errorCount**: int (ReadOnly): Number of database/object errors.
* **errorPrefix**: string (ReadOnly): Wildcard string prefix to use for querying all errors of the item
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly): Migration exceptions and warnings.
* **message**: string (ReadOnly): Migration progress message
* **numberOfObjects**: int (ReadOnly): Number of objects
* **numberOfObjectsCompleted**: int (ReadOnly): Number of successfully completed objects
* **objectSummary**: string (ReadOnly): Summary of object results in the migration
* **resultPrefix**: string (ReadOnly): Wildcard string prefix to use for querying all sub-tem results of the item
* **resultType**: 'DatabaseLevelOutput' (Required): Result type
* **stage**: 'Backup' | 'Completed' | 'FileCopy' | 'Initialize' | 'None' | 'Restore' | string (ReadOnly): Migration stage that this database is in
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' | string (ReadOnly): Current state of migration
* **statusMessage**: string (ReadOnly): Status message

### MigrateSqlServerSqlDbTaskOutputError
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Migration error
* **resultType**: 'ErrorOutput' (Required): Result type

### MigrateSqlServerSqlDbTaskOutputMigrationLevel
#### Properties
* **databases**: string (ReadOnly): Selected databases as a map from database name to database id
* **databaseSummary**: string (ReadOnly): Summary of database results in the migration
* **durationInSeconds**: int (ReadOnly): Duration of task execution in seconds.
* **endedOn**: string (ReadOnly): Migration end time
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly): Migration exceptions and warnings.
* **message**: string (ReadOnly): Migration progress message
* **migrationReportResult**: [MigrationReportResult](#migrationreportresult): Migration Report Result, provides unique url for downloading your migration report.
* **migrationValidationResult**: [MigrationValidationResult](#migrationvalidationresult): Migration Validation Results
* **resultType**: 'MigrationLevelOutput' (Required): Result type
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' | string (ReadOnly): Current status of migration
* **statusMessage**: string (ReadOnly): Migration status message
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Target server version

### MigrateSqlServerSqlDbTaskOutputTableLevel
#### Properties
* **endedOn**: string (ReadOnly): Migration end time
* **errorPrefix**: string (ReadOnly): Wildcard string prefix to use for querying all errors of the item
* **itemsCompletedCount**: int (ReadOnly): Number of successfully completed items
* **itemsCount**: int (ReadOnly): Number of items
* **objectName**: string (ReadOnly): Name of the item
* **resultPrefix**: string (ReadOnly): Wildcard string prefix to use for querying all sub-tem results of the item
* **resultType**: 'TableLevelOutput' (Required): Result type
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' | string (ReadOnly): Current state of migration
* **statusMessage**: string (ReadOnly): Status message


## MigrateSqlServerSqlMIDatabaseInput
### Properties
* **backupFilePaths**: string[]: The list of backup files to be used in case of existing backups.
* **backupFileShare**: [FileShare](#fileshare): Backup file share information for backing up this database.
* **name**: string (Required): Name of the database
* **restoreDatabaseName**: string (Required): Name of the database at destination

## MigrateSqlServerSqlMISyncTaskInput
### Properties
* **azureApp**: [AzureActiveDirectoryApp](#azureactivedirectoryapp) (Required): Azure Active Directory Application the DMS instance will use to connect to the target instance of Azure SQL Database Managed Instance and the Azure Storage Account
* **backupFileShare**: [FileShare](#fileshare): Backup file share information for all selected databases.
* **selectedDatabases**: [MigrateSqlServerSqlMIDatabaseInput](#migratesqlserversqlmidatabaseinput)[] (Required): Databases to migrate
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Connection information for source SQL Server
* **storageResourceId**: string (Required): Fully qualified resourceId of storage
* **targetConnectionInfo**: [MiSqlConnectionInfo](#misqlconnectioninfo) (Required): Connection information for Azure SQL Database Managed Instance

## MigrateSqlServerSqlMISyncTaskOutput
* **Discriminator**: resultType

### Base Properties
* **id**: string (ReadOnly): Result identifier

### MigrateSqlServerSqlMISyncTaskOutputDatabaseLevel
#### Properties
* **activeBackupSets**: [BackupSetInfo](#backupsetinfo)[] (ReadOnly): Backup sets that are currently active (Either being uploaded or getting restored)
* **containerName**: string (ReadOnly): Name of container created in the Azure Storage account where backups are copied to
* **endedOn**: string (ReadOnly): Database migration end time
* **errorPrefix**: string (ReadOnly): prefix string to use for querying errors for this database
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly): Migration exceptions and warnings
* **fullBackupSetInfo**: [BackupSetInfo](#backupsetinfo) (ReadOnly): Details of full backup set
* **isFullBackupRestored**: bool (ReadOnly): Whether full backup has been applied to the target database or not
* **lastRestoredBackupSetInfo**: [BackupSetInfo](#backupsetinfo) (ReadOnly): Last applied backup set information
* **migrationState**: 'CANCELLED' | 'COMPLETED' | 'CUTOVER_START' | 'FAILED' | 'FULL_BACKUP_UPLOAD_START' | 'INITIAL' | 'LOG_SHIPPING_START' | 'POST_CUTOVER_COMPLETE' | 'UNDEFINED' | 'UPLOAD_LOG_FILES_START' | string (ReadOnly): Current state of database
* **resultType**: 'DatabaseLevelOutput' (Required): Result type
* **sourceDatabaseName**: string (ReadOnly): Name of the database
* **startedOn**: string (ReadOnly): Database migration start time

### MigrateSqlServerSqlMISyncTaskOutputError
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Migration error
* **resultType**: 'ErrorOutput' (Required): Result type

### MigrateSqlServerSqlMISyncTaskOutputMigrationLevel
#### Properties
* **databaseCount**: int (ReadOnly): Count of databases
* **databaseErrorCount**: int (ReadOnly): Number of database level errors
* **endedOn**: string (ReadOnly): Migration end time
* **resultType**: 'MigrationLevelOutput' (Required): Result type
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerName**: string (ReadOnly): Source server name
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' | string (ReadOnly): Current state of migration
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerName**: string (ReadOnly): Target server name
* **targetServerVersion**: string (ReadOnly): Target server version


## MigrateSqlServerSqlMITaskInput
### Properties
* **aadDomainName**: string: Azure Active Directory domain name in the format of 'contoso.com' for federated Azure AD or 'contoso.onmicrosoft.com' for managed domain, required if and only if Windows logins are selected
* **backupBlobShare**: [BlobShare](#blobshare) (Required): SAS URI of Azure Storage Account Container to be used for storing backup files.
* **backupFileShare**: [FileShare](#fileshare): Backup file share information for all selected databases.
* **backupMode**: 'CreateBackup' | 'ExistingBackup' | string: Backup Mode to specify whether to use existing backup or create new backup. If using existing backups, backup file paths are required to be provided in selectedDatabases.
* **selectedAgentJobs**: string[]: Agent Jobs to migrate.
* **selectedDatabases**: [MigrateSqlServerSqlMIDatabaseInput](#migratesqlserversqlmidatabaseinput)[] (Required): Databases to migrate
* **selectedLogins**: string[]: Logins to migrate.
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to source
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to target

## MigrateSqlServerSqlMITaskOutput
* **Discriminator**: resultType

### Base Properties
* **id**: string (ReadOnly): Result identifier

### MigrateSqlServerSqlMITaskOutputAgentJobLevel
#### Properties
* **endedOn**: string (ReadOnly): Migration end time
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly): Migration errors and warnings per job
* **isEnabled**: bool (ReadOnly): The state of the original Agent Job.
* **message**: string (ReadOnly): Migration progress message
* **name**: string (ReadOnly): Agent Job name.
* **resultType**: 'AgentJobLevelOutput' (Required): Result type
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' | string (ReadOnly): Current state of migration

### MigrateSqlServerSqlMITaskOutputDatabaseLevel
#### Properties
* **databaseName**: string (ReadOnly): Name of the database
* **endedOn**: string (ReadOnly): Migration end time
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly): Migration exceptions and warnings
* **message**: string (ReadOnly): Migration progress message
* **resultType**: 'DatabaseLevelOutput' (Required): Result type
* **sizeMB**: int (ReadOnly): Size of the database in megabytes
* **stage**: 'Backup' | 'Completed' | 'FileCopy' | 'Initialize' | 'None' | 'Restore' | string (ReadOnly): Current stage of migration
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' | string (ReadOnly): Current state of migration

### MigrateSqlServerSqlMITaskOutputError
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Migration error
* **resultType**: 'ErrorOutput' (Required): Result type

### MigrateSqlServerSqlMITaskOutputLoginLevel
#### Properties
* **endedOn**: string (ReadOnly): Login migration end time
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly): Login migration errors and warnings per login
* **loginName**: string (ReadOnly): Login name.
* **message**: string (ReadOnly): Login migration progress message
* **resultType**: 'LoginLevelOutput' (Required): Result type
* **stage**: 'AssignRoleMembership' | 'AssignRoleOwnership' | 'Completed' | 'EstablishObjectPermissions' | 'EstablishServerPermissions' | 'EstablishUserMapping' | 'Initialize' | 'LoginMigration' | 'None' | string (ReadOnly): Current stage of login
* **startedOn**: string (ReadOnly): Login migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' | string (ReadOnly): Current state of login

### MigrateSqlServerSqlMITaskOutputMigrationLevel
#### Properties
* **agentJobs**: string (ReadOnly): Selected agent jobs as a map from name to id
* **databases**: string (ReadOnly): Selected databases as a map from database name to database id
* **endedOn**: string (ReadOnly): Migration end time
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly): Migration exceptions and warnings.
* **logins**: string (ReadOnly): Selected logins as a map from name to id
* **message**: string (ReadOnly): Migration progress message
* **orphanedUsersInfo**: [OrphanedUserInfo](#orphaneduserinfo)[] (ReadOnly): List of orphaned users.
* **resultType**: 'MigrationLevelOutput' (Required): Result type
* **serverRoleResults**: string (ReadOnly): Map of server role migration results.
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' | string (ReadOnly): Current state of migration
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' | string (ReadOnly): Current status of migration
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Target server version


## MigrateSsisTaskInput
### Properties
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to source
* **ssisMigrationInfo**: [SsisMigrationInfo](#ssismigrationinfo) (Required): SSIS package migration information.
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to target

## MigrateSsisTaskOutput
* **Discriminator**: resultType

### Base Properties
* **id**: string (ReadOnly): Result identifier

### MigrateSsisTaskOutputMigrationLevel
#### Properties
* **endedOn**: string (ReadOnly): Migration end time
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly): Migration exceptions and warnings.
* **message**: string (ReadOnly): Migration progress message
* **resultType**: 'MigrationLevelOutput' (Required): Result type
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **stage**: 'Completed' | 'InProgress' | 'Initialize' | 'None' | string (ReadOnly): Stage of SSIS migration.
* **startedOn**: string (ReadOnly): Migration start time
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' | string (ReadOnly): Current status of migration
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Target server version

### MigrateSsisTaskOutputProjectLevel
#### Properties
* **endedOn**: string (ReadOnly): Migration end time
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly): Migration exceptions and warnings
* **folderName**: string (ReadOnly): Name of the folder
* **message**: string (ReadOnly): Migration progress message
* **projectName**: string (ReadOnly): Name of the project
* **resultType**: 'SsisProjectLevelOutput' (Required): Result type
* **stage**: 'Completed' | 'InProgress' | 'Initialize' | 'None' | string (ReadOnly): Stage of SSIS migration.
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' | string (ReadOnly): Current state of migration


## MigrateSyncCompleteCommandInput
### Properties
* **commitTimeStamp**: string: Time stamp to complete
* **databaseName**: string (Required): Name of database

## MigrateSyncCompleteCommandOutput
### Properties
* **errors**: [ReportableException](#reportableexception)[] (ReadOnly): List of errors that happened during the command execution
* **id**: string (ReadOnly): Result identifier

## MigrationEligibilityInfo
### Properties
* **isEligibleForMigration**: bool (ReadOnly): Whether object is eligible for migration or not.
* **validationMessages**: string[] (ReadOnly): Information about eligibility failure for the server object.

## MigrationReportResult
### Properties
* **id**: string: Migration validation result identifier
* **reportUrl**: string: The url of the report.

## MigrationValidationDatabaseSummaryResult
### Properties
* **endedOn**: string (ReadOnly): Validation end time
* **id**: string (ReadOnly): Result identifier
* **migrationId**: string (ReadOnly): Migration Identifier
* **sourceDatabaseName**: string (ReadOnly): Name of the source database
* **startedOn**: string (ReadOnly): Validation start time
* **status**: 'Completed' | 'CompletedWithIssues' | 'Default' | 'Failed' | 'InProgress' | 'Initialized' | 'NotStarted' | 'Stopped' | string (ReadOnly): Current status of validation at the database level
* **targetDatabaseName**: string (ReadOnly): Name of the target database

## MigrationValidationOptions
### Properties
* **enableDataIntegrityValidation**: bool: Allows to perform a checksum based data integrity validation between source and target for the selected database / tables .
* **enableQueryAnalysisValidation**: bool: Allows to perform a quick and intelligent query analysis by retrieving queries from the source database and executes them in the target. The result will have execution statistics for executions in source and target databases for the extracted queries.
* **enableSchemaValidation**: bool: Allows to compare the schema information between source and target.

## MigrationValidationResult
### Properties
* **id**: string (ReadOnly): Migration validation result identifier
* **migrationId**: string (ReadOnly): Migration Identifier
* **status**: 'Completed' | 'CompletedWithIssues' | 'Default' | 'Failed' | 'InProgress' | 'Initialized' | 'NotStarted' | 'Stopped' | string (ReadOnly): Current status of validation at the migration level. Status from the database validation result status will be aggregated here.
* **summaryResults**: [MigrationValidationResultSummaryResults](#migrationvalidationresultsummaryresults): Validation summary results for each database

## MigrationValidationResultSummaryResults
### Properties
### Additional Properties
* **Additional Properties Type**: [MigrationValidationDatabaseSummaryResult](#migrationvalidationdatabasesummaryresult)

## MiSqlConnectionInfo
### Properties
* **managedInstanceResourceId**: string (Required): Resource id for Azure SQL database Managed instance
* **password**: string: Password credential.
* **type**: string (Required): Type of connection info
* **userName**: string: User name

## MongoDbClusterInfo
### Properties
* **databases**: [MongoDbDatabaseInfo](#mongodbdatabaseinfo)[] (Required): A list of non-system databases in the cluster
* **supportsSharding**: bool (Required): Whether the cluster supports sharded collections
* **type**: 'BlobContainer' | 'CosmosDb' | 'MongoDb' | string (Required): The type of data source
* **version**: string (Required): The version of the data source in the form x.y.z (e.g. 3.6.7). Not used if Type is BlobContainer.

## MongoDbCollectionInfo
### Properties
* **averageDocumentSize**: int (Required): The average document size, or -1 if the average size is unknown
* **databaseName**: string (Required): The name of the database containing the collection
* **dataSize**: int (Required): The estimated total data size, in bytes, or -1 if the size is unknown.
* **documentCount**: int (Required): The estimated total number of documents, or -1 if the document count is unknown
* **isCapped**: bool (Required): Whether the collection is a capped collection (i.e. whether it has a fixed size and acts like a circular buffer)
* **isSystemCollection**: bool (Required): Whether the collection is system collection
* **isView**: bool (Required): Whether the collection is a view of another collection
* **name**: string (Required): The unqualified name of the database or collection
* **qualifiedName**: string (Required): The qualified name of the database or collection. For a collection, this is the database-qualified name.
* **shardKey**: [MongoDbShardKeyInfo](#mongodbshardkeyinfo): The shard key on the collection, or null if the collection is not sharded
* **supportsSharding**: bool (Required): Whether the database has sharding enabled. Note that the migration task will enable sharding on the target if necessary.
* **viewOf**: string: The name of the collection that this is a view of, if IsView is true

## MongoDbCollectionProgress
### Properties
* **bytesCopied**: int (Required): The number of document bytes copied during the Copying stage
* **documentsCopied**: int (Required): The number of documents copied during the Copying stage
* **elapsedTime**: string (Required): The elapsed time in the format [ddd.]hh:mm:ss[.fffffff] (i.e. TimeSpan format)
* **errors**: [MongoDbProgressErrors](#mongodbprogresserrors) (Required): The errors and warnings that have occurred for the current object. The keys are the error codes.
* **eventsPending**: int (Required): The number of oplog events awaiting replay
* **eventsReplayed**: int (Required): The number of oplog events replayed so far
* **lastEventTime**: string: The timestamp of the last oplog event received, or null if no oplog event has been received yet
* **lastReplayTime**: string: The timestamp of the last oplog event replayed, or null if no oplog event has been replayed yet
* **name**: string: The name of the progress object. For a collection, this is the unqualified collection name. For a database, this is the database name. For the overall migration, this is null.
* **qualifiedName**: string: The qualified name of the progress object. For a collection, this is the database-qualified name. For a database, this is the database name. For the overall migration, this is null.
* **resultType**: 'Collection' | 'Database' | 'Migration' | string (Required): The type of progress object
* **state**: 'Canceled' | 'Complete' | 'Copying' | 'Failed' | 'Finalizing' | 'InitialReplay' | 'Initializing' | 'NotStarted' | 'Replaying' | 'Restarting' | 'ValidatingInput' | string (Required)
* **totalBytes**: int (Required): The total number of document bytes on the source at the beginning of the Copying stage, or -1 if the total size was unknown
* **totalDocuments**: int (Required): The total number of documents on the source at the beginning of the Copying stage, or -1 if the total count was unknown

## MongoDbCollectionSettings
### Properties
* **canDelete**: bool: Whether the migrator is allowed to drop the target collection in the course of performing a migration. The default is true.
* **shardKey**: [MongoDbShardKeySetting](#mongodbshardkeysetting): Describes a MongoDB shard key
* **targetRUs**: int: The RUs that should be configured on a CosmosDB target, or null to use the default. This has no effect on non-CosmosDB targets.

## MongoDbCommandInput
### Properties
* **objectName**: string: The qualified name of a database or collection to act upon, or null to act upon the entire migration

## MongoDbConnectionInfo
### Properties
* **connectionString**: string (Required): A MongoDB connection string or blob container URL. The user name and password can be specified here or in the userName and password properties
* **password**: string: Password credential.
* **type**: string (Required): Type of connection info
* **userName**: string: User name

## MongoDbDatabaseInfo
### Properties
* **averageDocumentSize**: int (Required): The average document size, or -1 if the average size is unknown
* **collections**: [MongoDbCollectionInfo](#mongodbcollectioninfo)[] (Required): A list of supported collections in a MongoDB database
* **dataSize**: int (Required): The estimated total data size, in bytes, or -1 if the size is unknown.
* **documentCount**: int (Required): The estimated total number of documents, or -1 if the document count is unknown
* **name**: string (Required): The unqualified name of the database or collection
* **qualifiedName**: string (Required): The qualified name of the database or collection. For a collection, this is the database-qualified name.
* **supportsSharding**: bool (Required): Whether the database has sharding enabled. Note that the migration task will enable sharding on the target if necessary.

## MongoDbDatabaseProgress
### Properties
* **bytesCopied**: int (Required): The number of document bytes copied during the Copying stage
* **collections**: [MongoDbDatabaseProgressCollections](#mongodbdatabaseprogresscollections): The progress of the collections in the database. The keys are the unqualified names of the collections
* **documentsCopied**: int (Required): The number of documents copied during the Copying stage
* **elapsedTime**: string (Required): The elapsed time in the format [ddd.]hh:mm:ss[.fffffff] (i.e. TimeSpan format)
* **errors**: [MongoDbProgressErrors](#mongodbprogresserrors) (Required): The errors and warnings that have occurred for the current object. The keys are the error codes.
* **eventsPending**: int (Required): The number of oplog events awaiting replay
* **eventsReplayed**: int (Required): The number of oplog events replayed so far
* **lastEventTime**: string: The timestamp of the last oplog event received, or null if no oplog event has been received yet
* **lastReplayTime**: string: The timestamp of the last oplog event replayed, or null if no oplog event has been replayed yet
* **name**: string: The name of the progress object. For a collection, this is the unqualified collection name. For a database, this is the database name. For the overall migration, this is null.
* **qualifiedName**: string: The qualified name of the progress object. For a collection, this is the database-qualified name. For a database, this is the database name. For the overall migration, this is null.
* **resultType**: 'Collection' | 'Database' | 'Migration' | string (Required): The type of progress object
* **state**: 'Canceled' | 'Complete' | 'Copying' | 'Failed' | 'Finalizing' | 'InitialReplay' | 'Initializing' | 'NotStarted' | 'Replaying' | 'Restarting' | 'ValidatingInput' | string (Required)
* **totalBytes**: int (Required): The total number of document bytes on the source at the beginning of the Copying stage, or -1 if the total size was unknown
* **totalDocuments**: int (Required): The total number of documents on the source at the beginning of the Copying stage, or -1 if the total count was unknown

## MongoDbDatabaseProgressCollections
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbCollectionProgress](#mongodbcollectionprogress)

## MongoDbDatabaseProgressCollections
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbCollectionProgress](#mongodbcollectionprogress)

## MongoDbDatabaseSettings
### Properties
* **collections**: [MongoDbDatabaseSettingsCollections](#mongodbdatabasesettingscollections) (Required): The collections on the source database to migrate to the target. The keys are the unqualified names of the collections.
* **targetRUs**: int: The RUs that should be configured on a CosmosDB target, or null to use the default, or 0 if throughput should not be provisioned for the database. This has no effect on non-CosmosDB targets.

## MongoDbDatabaseSettingsCollections
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbCollectionSettings](#mongodbcollectionsettings)

## MongoDbError
### Properties
* **code**: string: The non-localized, machine-readable code that describes the error or warning
* **count**: int: The number of times the error or warning has occurred
* **message**: string: The localized, human-readable message that describes the error or warning
* **type**: 'Error' | 'ValidationError' | 'Warning' | string: The type of error or warning

## MongoDbFinishCommandInput
### Properties
* **immediate**: bool (Required): If true, replication for the affected objects will be stopped immediately. If false, the migrator will finish replaying queued events before finishing the replication.
* **objectName**: string: The qualified name of a database or collection to act upon, or null to act upon the entire migration

## MongoDbMigrationProgress
### Properties
* **bytesCopied**: int (Required): The number of document bytes copied during the Copying stage
* **databases**: [MongoDbMigrationProgressDatabases](#mongodbmigrationprogressdatabases): The progress of the databases in the migration. The keys are the names of the databases
* **documentsCopied**: int (Required): The number of documents copied during the Copying stage
* **elapsedTime**: string (Required): The elapsed time in the format [ddd.]hh:mm:ss[.fffffff] (i.e. TimeSpan format)
* **errors**: [MongoDbProgressErrors](#mongodbprogresserrors) (Required): The errors and warnings that have occurred for the current object. The keys are the error codes.
* **eventsPending**: int (Required): The number of oplog events awaiting replay
* **eventsReplayed**: int (Required): The number of oplog events replayed so far
* **lastEventTime**: string: The timestamp of the last oplog event received, or null if no oplog event has been received yet
* **lastReplayTime**: string: The timestamp of the last oplog event replayed, or null if no oplog event has been replayed yet
* **name**: string: The name of the progress object. For a collection, this is the unqualified collection name. For a database, this is the database name. For the overall migration, this is null.
* **qualifiedName**: string: The qualified name of the progress object. For a collection, this is the database-qualified name. For a database, this is the database name. For the overall migration, this is null.
* **resultType**: 'Collection' | 'Database' | 'Migration' | string (Required): The type of progress object
* **state**: 'Canceled' | 'Complete' | 'Copying' | 'Failed' | 'Finalizing' | 'InitialReplay' | 'Initializing' | 'NotStarted' | 'Replaying' | 'Restarting' | 'ValidatingInput' | string (Required)
* **totalBytes**: int (Required): The total number of document bytes on the source at the beginning of the Copying stage, or -1 if the total size was unknown
* **totalDocuments**: int (Required): The total number of documents on the source at the beginning of the Copying stage, or -1 if the total count was unknown

## MongoDbMigrationProgressDatabases
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbDatabaseProgress](#mongodbdatabaseprogress)

## MongoDbMigrationProgressDatabases
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbDatabaseProgress](#mongodbdatabaseprogress)

## MongoDbMigrationSettings
### Properties
* **boostRUs**: int: The RU limit on a CosmosDB target that collections will be temporarily increased to (if lower) during the initial copy of a migration, from 10,000 to 1,000,000, or 0 to use the default boost (which is generally the maximum), or null to not boost the RUs. This setting has no effect on non-CosmosDB targets.
* **databases**: [MongoDbMigrationSettingsDatabases](#mongodbmigrationsettingsdatabases) (Required): The databases on the source cluster to migrate to the target. The keys are the names of the databases.
* **replication**: 'Continuous' | 'Disabled' | 'OneTime' | string: Describes how changes will be replicated from the source to the target. The default is OneTime.
* **source**: [MongoDbConnectionInfo](#mongodbconnectioninfo) (Required): Settings used to connect to the source cluster
* **target**: [MongoDbConnectionInfo](#mongodbconnectioninfo) (Required): Settings used to connect to the target cluster
* **throttling**: [MongoDbThrottlingSettings](#mongodbthrottlingsettings): Settings used to limit the resource usage of the migration

## MongoDbMigrationSettingsDatabases
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbDatabaseSettings](#mongodbdatabasesettings)

## MongoDbProgress
* **Discriminator**: resultType

### Base Properties
* **bytesCopied**: int (Required): The number of document bytes copied during the Copying stage
* **documentsCopied**: int (Required): The number of documents copied during the Copying stage
* **elapsedTime**: string (Required): The elapsed time in the format [ddd.]hh:mm:ss[.fffffff] (i.e. TimeSpan format)
* **errors**: [MongoDbProgressErrors](#mongodbprogresserrors) (Required): The errors and warnings that have occurred for the current object. The keys are the error codes.
* **eventsPending**: int (Required): The number of oplog events awaiting replay
* **eventsReplayed**: int (Required): The number of oplog events replayed so far
* **lastEventTime**: string: The timestamp of the last oplog event received, or null if no oplog event has been received yet
* **lastReplayTime**: string: The timestamp of the last oplog event replayed, or null if no oplog event has been replayed yet
* **name**: string: The name of the progress object. For a collection, this is the unqualified collection name. For a database, this is the database name. For the overall migration, this is null.
* **qualifiedName**: string: The qualified name of the progress object. For a collection, this is the database-qualified name. For a database, this is the database name. For the overall migration, this is null.
* **state**: 'Canceled' | 'Complete' | 'Copying' | 'Failed' | 'Finalizing' | 'InitialReplay' | 'Initializing' | 'NotStarted' | 'Replaying' | 'Restarting' | 'ValidatingInput' | string (Required)
* **totalBytes**: int (Required): The total number of document bytes on the source at the beginning of the Copying stage, or -1 if the total size was unknown
* **totalDocuments**: int (Required): The total number of documents on the source at the beginning of the Copying stage, or -1 if the total count was unknown

### MongoDbCollectionProgress
#### Properties
* **resultType**: 'Collection' (Required): The type of progress object

### MongoDbDatabaseProgress
#### Properties
* **collections**: [MongoDbDatabaseProgressCollections](#mongodbdatabaseprogresscollections): The progress of the collections in the database. The keys are the unqualified names of the collections
* **resultType**: 'Database' (Required): The type of progress object

### MongoDbMigrationProgress
#### Properties
* **databases**: [MongoDbMigrationProgressDatabases](#mongodbmigrationprogressdatabases): The progress of the databases in the migration. The keys are the names of the databases
* **resultType**: 'Migration' (Required): The type of progress object


## MongoDbProgressErrors
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbError](#mongodberror)

## MongoDbProgressErrors
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbError](#mongodberror)

## MongoDbProgressErrors
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbError](#mongodberror)

## MongoDbProgressErrors
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbError](#mongodberror)

## MongoDbShardKeyField
### Properties
* **name**: string (Required): The name of the field
* **order**: 'Forward' | 'Hashed' | 'Reverse' | string (Required): The field ordering

## MongoDbShardKeyInfo
### Properties
* **fields**: [MongoDbShardKeyField](#mongodbshardkeyfield)[] (Required): The fields within the shard key
* **isUnique**: bool (Required): Whether the shard key is unique

## MongoDbShardKeySetting
### Properties
* **fields**: [MongoDbShardKeyField](#mongodbshardkeyfield)[] (Required): The fields within the shard key
* **isUnique**: bool (Required): Whether the shard key is unique

## MongoDbThrottlingSettings
### Properties
* **maxParallelism**: int: The maximum number of work items (e.g. collection copies) that will be processed in parallel
* **minFreeCpu**: int: The percentage of CPU time that the migrator will try to avoid using, from 0 to 100
* **minFreeMemoryMb**: int: The number of megabytes of RAM that the migrator will try to avoid using

## MySqlConnectionInfo
### Properties
* **password**: string: Password credential.
* **port**: int (Required): Port for Server
* **serverName**: string (Required): Name of the server
* **type**: string (Required): Type of connection info
* **userName**: string: User name

## ODataError
### Properties
* **code**: string: The machine-readable description of the error, such as 'InvalidRequest' or 'InternalServerError'
* **details**: [ODataError](#odataerror)[]: Inner errors that caused this error
* **message**: string: The human-readable description of the error

## OracleConnectionInfo
### Properties
* **dataSource**: string (Required): EZConnect or TNSName connection string.
* **password**: string: Password credential.
* **type**: string (Required): Type of connection info
* **userName**: string: User name

## OracleOCIDriverInfo
### Properties
* **archiveChecksum**: string (ReadOnly): The MD5 Base64 encoded checksum for the driver package.
* **assemblyVersion**: string (ReadOnly): Version listed in the OCI assembly 'oci.dll'
* **driverName**: string (ReadOnly): The name of the driver package
* **driverSize**: string (ReadOnly): The size in bytes of the driver package
* **oracleChecksum**: string (ReadOnly): The checksum for the driver package provided by Oracle.
* **supportedOracleVersions**: string[] (ReadOnly): List of Oracle database versions supported by this driver. Only major minor of the version is listed.

## OrphanedUserInfo
### Properties
* **databaseName**: string: Parent database of the user
* **name**: string: Name of the orphaned user

## PostgreSqlConnectionInfo
### Properties
* **databaseName**: string: Name of the database
* **encryptConnection**: bool: Whether to encrypt the connection
* **password**: string: Password credential.
* **port**: int (Required): Port for Server
* **serverName**: string (Required): Name of the server
* **trustServerCertificate**: bool: Whether to trust the server certificate
* **type**: string (Required): Type of connection info
* **userName**: string: User name

## ProjectFileProperties
### Properties
* **extension**: string: Optional File extension. If submitted it should not have a leading period and must match the extension from filePath.
* **filePath**: string: Relative path of this file resource. This property can be set when creating or updating the file resource.
* **lastModified**: string (ReadOnly): Modification DateTime.
* **mediaType**: string: File content type. This property can be modified to reflect the file content type.
* **size**: int (ReadOnly): File size.

## ProjectProperties
### Properties
* **creationTime**: string (ReadOnly): UTC Date and time when project was created
* **databasesInfo**: [DatabaseInfo](#databaseinfo)[]: List of DatabaseInfo
* **provisioningState**: 'Deleting' | 'Succeeded' | string (ReadOnly): The project's provisioning state
* **sourceConnectionInfo**: [ConnectionInfo](#connectioninfo): Information for connecting to source
* **sourcePlatform**: 'MongoDb' | 'MySQL' | 'PostgreSql' | 'SQL' | 'Unknown' | string (Required): Source platform for the project
* **targetConnectionInfo**: [ConnectionInfo](#connectioninfo): Information for connecting to target
* **targetPlatform**: 'AzureDbForMySql' | 'AzureDbForPostgreSql' | 'MongoDb' | 'SQLDB' | 'SQLMI' | 'Unknown' | string (Required): Target platform for the project

## ProjectTaskProperties
* **Discriminator**: taskType

### Base Properties
* **clientData**: [ProjectTaskPropertiesClientData](#projecttaskpropertiesclientdata): Key value pairs of client data to attach meta data information to task
* **commands**: [CommandProperties](#commandproperties)[] (ReadOnly): Array of command properties.
* **errors**: [ODataError](#odataerror)[] (ReadOnly): Array of errors. This is ignored if submitted.
* **state**: 'Canceled' | 'Failed' | 'FailedInputValidation' | 'Faulted' | 'Queued' | 'Running' | 'Succeeded' | 'Unknown' | string (ReadOnly): The state of the task. This is ignored if submitted.

### ConnectToMongoDbTaskProperties
#### Properties
* **input**: [MongoDbConnectionInfo](#mongodbconnectioninfo): Describes a connection to a MongoDB data source
* **output**: [MongoDbClusterInfo](#mongodbclusterinfo)[] (ReadOnly): An array containing a single MongoDbClusterInfo object
* **taskType**: 'Connect.MongoDb' (Required): Task type.

### ConnectToSourceMySqlTaskProperties
#### Properties
* **input**: [ConnectToSourceMySqlTaskInput](#connecttosourcemysqltaskinput): Task input
* **output**: [ConnectToSourceNonSqlTaskOutput](#connecttosourcenonsqltaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToSource.MySql' (Required): Task type.

### ConnectToSourceOracleSyncTaskProperties
#### Properties
* **input**: [ConnectToSourceOracleSyncTaskInput](#connecttosourceoraclesynctaskinput): Task input
* **output**: [ConnectToSourceOracleSyncTaskOutput](#connecttosourceoraclesynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToSource.Oracle.Sync' (Required): Task type.

### ConnectToSourcePostgreSqlSyncTaskProperties
#### Properties
* **input**: [ConnectToSourcePostgreSqlSyncTaskInput](#connecttosourcepostgresqlsynctaskinput): Task input
* **output**: [ConnectToSourcePostgreSqlSyncTaskOutput](#connecttosourcepostgresqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToSource.PostgreSql.Sync' (Required): Task type.

### ConnectToSourceSqlServerTaskProperties
#### Properties
* **input**: [ConnectToSourceSqlServerTaskInput](#connecttosourcesqlservertaskinput): Task input
* **output**: [ConnectToSourceSqlServerTaskOutput](#connecttosourcesqlservertaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToSource.SqlServer' (Required): Task type.

### ConnectToSourceSqlServerSyncTaskProperties
#### Properties
* **input**: [ConnectToSourceSqlServerTaskInput](#connecttosourcesqlservertaskinput): Task input
* **output**: [ConnectToSourceSqlServerTaskOutput](#connecttosourcesqlservertaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToSource.SqlServer.Sync' (Required): Task type.

### ConnectToTargetAzureDbForMySqlTaskProperties
#### Properties
* **input**: [ConnectToTargetAzureDbForMySqlTaskInput](#connecttotargetazuredbformysqltaskinput): Task input
* **output**: [ConnectToTargetAzureDbForMySqlTaskOutput](#connecttotargetazuredbformysqltaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.AzureDbForMySql' (Required): Task type.

### ConnectToTargetAzureDbForPostgreSqlSyncTaskProperties
#### Properties
* **input**: [ConnectToTargetAzureDbForPostgreSqlSyncTaskInput](#connecttotargetazuredbforpostgresqlsynctaskinput): Task input
* **output**: [ConnectToTargetAzureDbForPostgreSqlSyncTaskOutput](#connecttotargetazuredbforpostgresqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.AzureDbForPostgreSql.Sync' (Required): Task type.

### ConnectToTargetSqlMITaskProperties
#### Properties
* **input**: [ConnectToTargetSqlMITaskInput](#connecttotargetsqlmitaskinput): Task input
* **output**: [ConnectToTargetSqlMITaskOutput](#connecttotargetsqlmitaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.AzureSqlDbMI' (Required): Task type.

### ConnectToTargetSqlMISyncTaskProperties
#### Properties
* **input**: [ConnectToTargetSqlMISyncTaskInput](#connecttotargetsqlmisynctaskinput): Task input
* **output**: [ConnectToTargetSqlMISyncTaskOutput](#connecttotargetsqlmisynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.AzureSqlDbMI.Sync.LRS' (Required): Task type.

### ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskProperties
#### Properties
* **input**: [ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInput](#connecttotargetoracleazuredbforpostgresqlsynctaskinput): Task input
* **output**: [ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutput](#connecttotargetoracleazuredbforpostgresqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync' (Required): Task type.

### ConnectToTargetSqlDbTaskProperties
#### Properties
* **input**: [ConnectToTargetSqlDbTaskInput](#connecttotargetsqldbtaskinput): Task input
* **output**: [ConnectToTargetSqlDbTaskOutput](#connecttotargetsqldbtaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.SqlDb' (Required): Task type.

### ConnectToTargetSqlDbSyncTaskProperties
#### Properties
* **input**: [ConnectToTargetSqlDbSyncTaskInput](#connecttotargetsqldbsynctaskinput): Task input
* **output**: [ConnectToTargetSqlDbTaskOutput](#connecttotargetsqldbtaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.SqlDb.Sync' (Required): Task type.

### GetTdeCertificatesSqlTaskProperties
#### Properties
* **input**: [GetTdeCertificatesSqlTaskInput](#gettdecertificatessqltaskinput): Task input
* **output**: [GetTdeCertificatesSqlTaskOutput](#gettdecertificatessqltaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'GetTDECertificates.Sql' (Required): Task type.

### GetUserTablesSqlSyncTaskProperties
#### Properties
* **input**: [GetUserTablesSqlSyncTaskInput](#getusertablessqlsynctaskinput): Task input
* **output**: [GetUserTablesSqlSyncTaskOutput](#getusertablessqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'GetUserTables.AzureSqlDb.Sync' (Required): Task type.

### GetUserTablesSqlTaskProperties
#### Properties
* **input**: [GetUserTablesSqlTaskInput](#getusertablessqltaskinput): Task input
* **output**: [GetUserTablesSqlTaskOutput](#getusertablessqltaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'GetUserTables.Sql' (Required): Task type.

### GetUserTablesOracleTaskProperties
#### Properties
* **input**: [GetUserTablesOracleTaskInput](#getusertablesoracletaskinput): Task input
* **output**: [GetUserTablesOracleTaskOutput](#getusertablesoracletaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'GetUserTablesOracle' (Required): Task type.

### GetUserTablesPostgreSqlTaskProperties
#### Properties
* **input**: [GetUserTablesPostgreSqlTaskInput](#getusertablespostgresqltaskinput): Task input
* **output**: [GetUserTablesPostgreSqlTaskOutput](#getusertablespostgresqltaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'GetUserTablesPostgreSql' (Required): Task type.

### MigrateMongoDbTaskProperties
#### Properties
* **input**: [MongoDbMigrationSettings](#mongodbmigrationsettings): Describes how a MongoDB data migration should be performed
* **output**: [MongoDbProgress](#mongodbprogress)[] (ReadOnly)
* **taskType**: 'Migrate.MongoDb' (Required): Task type.

### MigrateMySqlAzureDbForMySqlSyncTaskProperties
#### Properties
* **input**: [MigrateMySqlAzureDbForMySqlSyncTaskInput](#migratemysqlazuredbformysqlsynctaskinput): Task input
* **output**: [MigrateMySqlAzureDbForMySqlSyncTaskOutput](#migratemysqlazuredbformysqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.MySql.AzureDbForMySql.Sync' (Required): Task type.

### MigrateOracleAzureDbForPostgreSqlSyncTaskProperties
#### Properties
* **input**: [MigrateOracleAzureDbPostgreSqlSyncTaskInput](#migrateoracleazuredbpostgresqlsynctaskinput): Task input
* **output**: [MigrateOracleAzureDbPostgreSqlSyncTaskOutput](#migrateoracleazuredbpostgresqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.Oracle.AzureDbForPostgreSql.Sync' (Required): Task type.

### MigratePostgreSqlAzureDbForPostgreSqlSyncTaskProperties
#### Properties
* **input**: [MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput](#migratepostgresqlazuredbforpostgresqlsynctaskinput): Task input
* **output**: [MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput](#migratepostgresqlazuredbforpostgresqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2' (Required): Task type.

### MigrateSqlServerSqlDbSyncTaskProperties
#### Properties
* **input**: [MigrateSqlServerSqlDbSyncTaskInput](#migratesqlserversqldbsynctaskinput): Task input
* **output**: [MigrateSqlServerSqlDbSyncTaskOutput](#migratesqlserversqldbsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.SqlServer.AzureSqlDb.Sync' (Required): Task type.

### MigrateSqlServerSqlMITaskProperties
#### Properties
* **input**: [MigrateSqlServerSqlMITaskInput](#migratesqlserversqlmitaskinput): Task input
* **output**: [MigrateSqlServerSqlMITaskOutput](#migratesqlserversqlmitaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.SqlServer.AzureSqlDbMI' (Required): Task type.

### MigrateSqlServerSqlMISyncTaskProperties
#### Properties
* **input**: [MigrateSqlServerSqlMISyncTaskInput](#migratesqlserversqlmisynctaskinput): Task input
* **output**: [MigrateSqlServerSqlMISyncTaskOutput](#migratesqlserversqlmisynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.SqlServer.AzureSqlDbMI.Sync.LRS' (Required): Task type.

### MigrateSqlServerSqlDbTaskProperties
#### Properties
* **input**: [MigrateSqlServerSqlDbTaskInput](#migratesqlserversqldbtaskinput): Task input
* **output**: [MigrateSqlServerSqlDbTaskOutput](#migratesqlserversqldbtaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.SqlServer.SqlDb' (Required): Task type.

### MigrateSsisTaskProperties
#### Properties
* **input**: [MigrateSsisTaskInput](#migratessistaskinput): Task input
* **output**: [MigrateSsisTaskOutput](#migratessistaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.Ssis' (Required): Task type.

### MigrateSchemaSqlServerSqlDbTaskProperties
#### Properties
* **input**: [MigrateSchemaSqlServerSqlDbTaskInput](#migrateschemasqlserversqldbtaskinput): Task input
* **output**: [MigrateSchemaSqlServerSqlDbTaskOutput](#migrateschemasqlserversqldbtaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'MigrateSchemaSqlServerSqlDb' (Required): Task type.

### CheckOCIDriverTaskProperties
#### Properties
* **input**: [CheckOCIDriverTaskInput](#checkocidrivertaskinput): Input for the service task to check for OCI drivers.
* **output**: [CheckOCIDriverTaskOutput](#checkocidrivertaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Service.Check.OCI' (Required): Task type.

### InstallOCIDriverTaskProperties
#### Properties
* **input**: [InstallOCIDriverTaskInput](#installocidrivertaskinput): Input for the service task to install an OCI driver.
* **output**: [InstallOCIDriverTaskOutput](#installocidrivertaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Service.Install.OCI' (Required): Task type.

### UploadOCIDriverTaskProperties
#### Properties
* **input**: [UploadOCIDriverTaskInput](#uploadocidrivertaskinput): Input for the service task to upload an OCI driver.
* **output**: [UploadOCIDriverTaskOutput](#uploadocidrivertaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Service.Upload.OCI' (Required): Task type.

### ValidateMongoDbTaskProperties
#### Properties
* **input**: [MongoDbMigrationSettings](#mongodbmigrationsettings): Describes how a MongoDB data migration should be performed
* **output**: [MongoDbMigrationProgress](#mongodbmigrationprogress)[] (ReadOnly): An array containing a single MongoDbMigrationProgress object
* **taskType**: 'Validate.MongoDb' (Required): Task type.

### ValidateOracleAzureDbForPostgreSqlSyncTaskProperties
#### Properties
* **input**: [MigrateOracleAzureDbPostgreSqlSyncTaskInput](#migrateoracleazuredbpostgresqlsynctaskinput): Input for the task that migrates Oracle databases to Azure Database for PostgreSQL for online migrations
* **output**: [ValidateOracleAzureDbPostgreSqlSyncTaskOutput](#validateoracleazuredbpostgresqlsynctaskoutput)[] (ReadOnly): An array containing a single validation error response object
* **taskType**: 'Validate.Oracle.AzureDbPostgreSql.Sync' (Required): Task type.

### ValidateMigrationInputSqlServerSqlMITaskProperties
#### Properties
* **input**: [ValidateMigrationInputSqlServerSqlMITaskInput](#validatemigrationinputsqlserversqlmitaskinput): Task input
* **output**: [ValidateMigrationInputSqlServerSqlMITaskOutput](#validatemigrationinputsqlserversqlmitaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ValidateMigrationInput.SqlServer.AzureSqlDbMI' (Required): Task type.

### ValidateMigrationInputSqlServerSqlMISyncTaskProperties
#### Properties
* **input**: [ValidateMigrationInputSqlServerSqlMISyncTaskInput](#validatemigrationinputsqlserversqlmisynctaskinput): Task input
* **output**: [ValidateMigrationInputSqlServerSqlMISyncTaskOutput](#validatemigrationinputsqlserversqlmisynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS' (Required): Task type.

### ValidateMigrationInputSqlServerSqlDbSyncTaskProperties
#### Properties
* **input**: [ValidateSyncMigrationInputSqlServerTaskInput](#validatesyncmigrationinputsqlservertaskinput): Task input
* **output**: [ValidateSyncMigrationInputSqlServerTaskOutput](#validatesyncmigrationinputsqlservertaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ValidateMigrationInput.SqlServer.SqlDb.Sync' (Required): Task type.


## ProjectTaskPropertiesClientData
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ReportableException
### Properties
* **actionableMessage**: string: Actionable steps for this exception
* **filePath**: string: The path to the file where exception occurred
* **hResult**: int: Coded numerical value that is assigned to a specific exception
* **lineNumber**: string: The line number where exception occurred
* **message**: string: Error message
* **stackTrace**: string: Stack trace

## SchemaMigrationSetting
### Properties
* **fileId**: string: Resource Identifier of a file resource containing the uploaded schema file
* **schemaOption**: 'ExtractFromSource' | 'None' | 'UseStorageFile' | string: Option on how to migrate the schema

## SelectedCertificateInput
### Properties
* **certificateName**: string (Required): Name of certificate to be exported.
* **password**: string (Required): Password to use for encrypting the exported certificate.

## ServerProperties
### Properties
* **serverDatabaseCount**: int (ReadOnly): Number of databases in the server
* **serverEdition**: string (ReadOnly): Edition of the database server
* **serverName**: string (ReadOnly): Name of the server
* **serverOperatingSystemVersion**: string (ReadOnly): Version of the operating system
* **serverPlatform**: string (ReadOnly): Name of the server platform
* **serverVersion**: string (ReadOnly): Version of the database server

## ServiceSku
### Properties
* **capacity**: int: The capacity of the SKU, if it supports scaling
* **family**: string: The SKU family, used when the service has multiple performance classes within a tier, such as 'A', 'D', etc. for virtual machines
* **name**: string: The unique name of the SKU, such as 'P3'
* **size**: string: The size of the SKU, used when the name alone does not denote a service size or when a SKU has multiple performance classes within a family, e.g. 'A1' for virtual machines
* **tier**: string: The tier of the SKU, such as 'Basic', 'General Purpose', or 'Business Critical'

## SqlConnectionInfo
### Properties
* **additionalSettings**: string: Additional connection settings
* **authentication**: 'ActiveDirectoryIntegrated' | 'ActiveDirectoryPassword' | 'None' | 'SqlAuthentication' | 'WindowsAuthentication' | string: Authentication type to use for connection
* **dataSource**: string (Required): Data source in the format Protocol:MachineName\SQLServerInstanceName,PortNumber
* **encryptConnection**: bool: Whether to encrypt the connection
* **password**: string: Password credential.
* **platform**: 'SqlOnPrem' | string: Server platform type for connection
* **trustServerCertificate**: bool: Whether to trust the server certificate
* **type**: string (Required): Type of connection info
* **userName**: string: User name

## SsisMigrationInfo
### Properties
* **environmentOverwriteOption**: 'Ignore' | 'Overwrite' | string: The overwrite option for the SSIS environment migration
* **projectOverwriteOption**: 'Ignore' | 'Overwrite' | string: The overwrite option for the SSIS project migration
* **ssisStoreType**: 'SsisCatalog' | string: The SSIS store type of source, only SSIS catalog is supported now in DMS

## SyncMigrationDatabaseErrorEvent
### Properties
* **eventText**: string (ReadOnly): Event text.
* **eventTypeString**: string (ReadOnly): Event type.
* **timestampString**: string (ReadOnly): String value of timestamp.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UploadOCIDriverTaskInput
### Properties
* **driverShare**: [FileShare](#fileshare): File share information for the OCI driver archive.

## UploadOCIDriverTaskOutput
### Properties
* **driverPackageName**: string (ReadOnly): The name of the driver package that was validated and uploaded.
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

## ValidateMigrationInputSqlServerSqlMISyncTaskInput
### Properties
* **azureApp**: [AzureActiveDirectoryApp](#azureactivedirectoryapp) (Required): Azure Active Directory Application the DMS instance will use to connect to the target instance of Azure SQL Database Managed Instance and the Azure Storage Account
* **backupFileShare**: [FileShare](#fileshare): Backup file share information for all selected databases.
* **selectedDatabases**: [MigrateSqlServerSqlMIDatabaseInput](#migratesqlserversqlmidatabaseinput)[] (Required): Databases to migrate
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Connection information for source SQL Server
* **storageResourceId**: string (Required): Fully qualified resourceId of storage
* **targetConnectionInfo**: [MiSqlConnectionInfo](#misqlconnectioninfo) (Required): Connection information for Azure SQL Database Managed Instance

## ValidateMigrationInputSqlServerSqlMISyncTaskOutput
### Properties
* **id**: string (ReadOnly): Database identifier
* **name**: string (ReadOnly): Name of database
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Errors associated with a selected database object

## ValidateMigrationInputSqlServerSqlMITaskInput
### Properties
* **backupBlobShare**: [BlobShare](#blobshare) (Required): SAS URI of Azure Storage Account Container to be used for storing backup files.
* **backupFileShare**: [FileShare](#fileshare): Backup file share information for all selected databases.
* **backupMode**: 'CreateBackup' | 'ExistingBackup' | string: Backup Mode to specify whether to use existing backup or create new backup.
* **selectedDatabases**: [MigrateSqlServerSqlMIDatabaseInput](#migratesqlserversqlmidatabaseinput)[] (Required): Databases to migrate
* **selectedLogins**: string[]: Logins to migrate
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to source
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to target

## ValidateMigrationInputSqlServerSqlMITaskOutput
### Properties
* **backupFolderErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Errors associated with the BackupFolder path
* **backupShareCredentialsErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Errors associated with backup share user name and password credentials
* **backupStorageAccountErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Errors associated with the storage account provided.
* **databaseBackupInfo**: [DatabaseBackupInfo](#databasebackupinfo): Information about backup files when existing backup mode is used.
* **existingBackupErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Errors associated with existing backup files.
* **id**: string (ReadOnly): Result identifier
* **name**: string (ReadOnly): Name of database
* **restoreDatabaseNameErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Errors associated with the RestoreDatabaseName

## ValidateOracleAzureDbPostgreSqlSyncTaskOutput
### Properties
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Errors associated with a selected database object

## ValidateSyncMigrationInputSqlServerTaskInput
### Properties
* **selectedDatabases**: [MigrateSqlServerSqlDbSyncDatabaseInput](#migratesqlserversqldbsyncdatabaseinput)[] (Required): Databases to migrate
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to source SQL server
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to target

## ValidateSyncMigrationInputSqlServerTaskOutput
### Properties
* **id**: string (ReadOnly): Database identifier
* **name**: string (ReadOnly): Name of database
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Errors associated with a selected database object

