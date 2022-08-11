# Microsoft.DataMigration @ 2018-03-15-preview

## Resource Microsoft.DataMigration/services@2018-03-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: HTTP strong entity tag value. Ignored if submitted
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: The resource kind. Only 'vm' (the default) is supported.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataMigrationServiceProperties](#datamigrationserviceproperties): Custom service properties
* **sku**: [ServiceSku](#servicesku): Service SKU
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DataMigration/services' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataMigration/services/projects@2018-03-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectProperties](#projectproperties): Project properties
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DataMigration/services/projects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataMigration/services/projects/tasks@2018-03-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: HTTP strong entity tag value. This is ignored if submitted.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectTaskProperties](#projecttaskproperties): Custom task properties
* **type**: 'Microsoft.DataMigration/services/projects/tasks' (ReadOnly, DeployTimeConstant): The resource type

## BlobShare
### Properties
* **sasUri**: string (Required): SAS URI of Azure Storage Account Container.

## ConnectionInfo
* **Discriminator**: type

### Base Properties
* **password**: string: Password credential.
* **userName**: string: User name

### SqlConnectionInfo
#### Properties
* **additionalSettings**: string: Additional connection settings
* **authentication**: 'ActiveDirectoryIntegrated' | 'ActiveDirectoryPassword' | 'None' | 'SqlAuthentication' | 'WindowsAuthentication' | string: Authentication type to use for connection
* **dataSource**: string (Required): Data source in the format Protocol:MachineName\SQLServerInstanceName,PortNumber
* **encryptConnection**: bool: Whether to encrypt the connection
* **trustServerCertificate**: bool: Whether to trust the server certificate
* **type**: 'SqlConnectionInfo' (Required): Type of connection info


## ConnectToSourceSqlServerTaskInput
### Properties
* **checkPermissionsGroup**: 'Default' | 'MigrationFromSqlServerToAzureDB' | string: Permission group for validations
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Connection information for Source SQL Server

## ConnectToSourceSqlServerTaskOutput
* **Discriminator**: resultType

### Base Properties
* **id**: string (ReadOnly): Result identifier

### ConnectToSourceSqlServerTaskOutputDatabaseLevel
#### Properties
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' | string (ReadOnly): SQL Server compatibility level of database
* **databaseFiles**: [DatabaseFileInfo](#databasefileinfo)[] (ReadOnly): The list of database files
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' | string (ReadOnly): State of the database
* **name**: string (ReadOnly): Database name
* **resultType**: 'DatabaseLevelOutput' (Required): Type of result - database level or task level
* **sizeMB**: int (ReadOnly): Size of the file in megabytes

### ConnectToSourceSqlServerTaskOutputTaskLevel
#### Properties
* **databases**: string (ReadOnly): Source databases as a map from database name to database id
* **resultType**: 'TaskLevelOutput' (Required): Type of result - database level or task level
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors


## ConnectToTargetSqlDbTaskInput
### Properties
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Connection information for target SQL DB

## ConnectToTargetSqlDbTaskOutput
### Properties
* **databases**: string (ReadOnly): Source databases as a map from database name to database id
* **id**: string (ReadOnly): Result identifier
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Version of the target server

## ConnectToTargetSqlMITaskInput
### Properties
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Connection information for target SQL Server

## ConnectToTargetSqlMITaskOutput
### Properties
* **id**: string (ReadOnly): Result identifier
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Target server version
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

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

## DataMigrationServiceProperties
### Properties
* **provisioningState**: 'Accepted' | 'Deleting' | 'Deploying' | 'Failed' | 'FailedToStart' | 'FailedToStop' | 'Starting' | 'Stopped' | 'Stopping' | 'Succeeded' | string (ReadOnly): The resource's provisioning state
* **publicKey**: string: The public key of the service, used to encrypt secrets sent to the service
* **virtualSubnetId**: string (Required): The ID of the Microsoft.Network/virtualNetworks/subnets resource to which the service should be joined

## FileShare
### Properties
* **password**: string: Password credential used to connect to the share location.
* **path**: string (Required): The folder path for this share.
* **userName**: string: User name credential to connect to the share location

## GetUserTablesSqlTaskInput
### Properties
* **connectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Connection information for SQL Server
* **selectedDatabases**: string[] (Required): List of database names to collect tables for

## GetUserTablesSqlTaskOutput
### Properties
* **databasesToTables**: string (ReadOnly): Mapping from database name to list of tables
* **id**: string (ReadOnly): Result identifier
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

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
* **backupFileShare**: [FileShare](#fileshare): Backup file share information for backing up this database.
* **name**: string (Required): Name of the database
* **restoreDatabaseName**: string (Required): Name of the database at destination

## MigrateSqlServerSqlMITaskInput
### Properties
* **backupBlobShare**: [BlobShare](#blobshare) (Required): SAS URI of Azure Storage Account Container to be used for storing backup files.
* **backupFileShare**: [FileShare](#fileshare): Backup file share information for all selected databases.
* **selectedDatabases**: [MigrateSqlServerSqlMIDatabaseInput](#migratesqlserversqlmidatabaseinput)[] (Required): Databases to migrate
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to source
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to target

## MigrateSqlServerSqlMITaskOutput
* **Discriminator**: resultType

### Base Properties
* **id**: string (ReadOnly): Result identifier

### MigrateSqlServerSqlMITaskOutputDatabaseLevel
#### Properties
* **databaseName**: string (ReadOnly): Name of the database
* **endedOn**: string (ReadOnly): Migration end time
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly): Migration exceptions and warnings
* **message**: string (ReadOnly): Migration progress message
* **resultType**: 'DatabaseLevelOutput' (Required): Result type
* **stage**: 'Backup' | 'Completed' | 'FileCopy' | 'Initialize' | 'None' | 'Restore' | string (ReadOnly): Current stage of migration
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' | string (ReadOnly): Current state of migration

### MigrateSqlServerSqlMITaskOutputError
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Migration error
* **resultType**: 'ErrorOutput' (Required): Result type

### MigrateSqlServerSqlMITaskOutputMigrationLevel
#### Properties
* **databases**: string (ReadOnly): Selected databases as a map from database name to database id
* **endedOn**: string (ReadOnly): Migration end time
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly): Migration exceptions and warnings.
* **message**: string (ReadOnly): Migration progress message
* **resultType**: 'MigrationLevelOutput' (Required): Result type
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' | string (ReadOnly): Current state of migration
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' | string (ReadOnly): Current status of migration
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Target server version


## MigrationReportResult
### Properties
* **id**: string: Migration validation result identifier
* **reportUrl**: string: The url of the report.

## MigrationValidationOptions
### Properties
* **enableDataIntegrityValidation**: bool: Allows to perform a checksum based data integrity validation between source and target for the selected database / tables .
* **enableQueryAnalysisValidation**: bool: Allows to perform a quick and intelligent query analysis by retrieving queries from the source database and executes them in the target. The result will have execution statistics for executions in source and target databases for the extracted queries.
* **enableSchemaValidation**: bool: Allows to compare the schema information between source and target.

## ODataError
### Properties
* **code**: string: The machine-readable description of the error, such as 'InvalidRequest' or 'InternalServerError'
* **details**: [ODataError](#odataerror)[]: Inner errors that caused this error
* **message**: string: The human-readable description of the error

## ProjectProperties
### Properties
* **creationTime**: string (ReadOnly): UTC Date and time when project was created
* **databasesInfo**: [DatabaseInfo](#databaseinfo)[]: List of DatabaseInfo
* **provisioningState**: 'Deleting' | 'Succeeded' | string (ReadOnly): The project's provisioning state
* **sourceConnectionInfo**: [ConnectionInfo](#connectioninfo): Information for connecting to source
* **sourcePlatform**: 'SQL' | 'Unknown' | string (Required): Source platform for the project
* **targetConnectionInfo**: [ConnectionInfo](#connectioninfo): Information for connecting to target
* **targetPlatform**: 'SQLDB' | 'Unknown' | string (Required): Target platform for the project

## ProjectTaskProperties
* **Discriminator**: taskType

### Base Properties
* **errors**: [ODataError](#odataerror)[] (ReadOnly): Array of errors. This is ignored if submitted.
* **state**: 'Canceled' | 'Failed' | 'FailedInputValidation' | 'Faulted' | 'Queued' | 'Running' | 'Succeeded' | 'Unknown' | string (ReadOnly): The state of the task. This is ignored if submitted.

### ConnectToSourceSqlServerTaskProperties
#### Properties
* **input**: [ConnectToSourceSqlServerTaskInput](#connecttosourcesqlservertaskinput): Task input
* **output**: [ConnectToSourceSqlServerTaskOutput](#connecttosourcesqlservertaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToSource.SqlServer' (Required): Task type.

### ConnectToTargetSqlMITaskProperties
#### Properties
* **input**: [ConnectToTargetSqlMITaskInput](#connecttotargetsqlmitaskinput): Task input
* **output**: [ConnectToTargetSqlMITaskOutput](#connecttotargetsqlmitaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.AzureSqlDbMI' (Required): Task type.

### ConnectToTargetSqlDbTaskProperties
#### Properties
* **input**: [ConnectToTargetSqlDbTaskInput](#connecttotargetsqldbtaskinput): Task input
* **output**: [ConnectToTargetSqlDbTaskOutput](#connecttotargetsqldbtaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.SqlDb' (Required): Task type.

### GetUserTablesSqlTaskProperties
#### Properties
* **input**: [GetUserTablesSqlTaskInput](#getusertablessqltaskinput): Task input
* **output**: [GetUserTablesSqlTaskOutput](#getusertablessqltaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'GetUserTables.Sql' (Required): Task type.

### MigrateSqlServerSqlMITaskProperties
#### Properties
* **input**: [MigrateSqlServerSqlMITaskInput](#migratesqlserversqlmitaskinput): Task input
* **output**: [MigrateSqlServerSqlMITaskOutput](#migratesqlserversqlmitaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.SqlServer.AzureSqlDbMI' (Required): Task type.

### MigrateSqlServerSqlDbTaskProperties
#### Properties
* **input**: [MigrateSqlServerSqlDbTaskInput](#migratesqlserversqldbtaskinput): Task input
* **output**: [MigrateSqlServerSqlDbTaskOutput](#migratesqlserversqldbtaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.SqlServer.SqlDb' (Required): Task type.

### ValidateMigrationInputSqlServerSqlMITaskProperties
#### Properties
* **input**: [ValidateMigrationInputSqlServerSqlMITaskInput](#validatemigrationinputsqlserversqlmitaskinput): Task input
* **output**: [ValidateMigrationInputSqlServerSqlMITaskOutput](#validatemigrationinputsqlserversqlmitaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ValidateMigrationInput.SqlServer.AzureSqlDbMI' (Required): Task type.


## ReportableException
### Properties
* **filePath**: string: The path to the file where exception occurred
* **hResult**: int: Coded numerical value that is assigned to a specific exception
* **lineNumber**: string: The line number where exception occurred
* **message**: string: Error message
* **stackTrace**: string: Stack trace

## ServiceSku
### Properties
* **capacity**: int: The capacity of the SKU, if it supports scaling
* **family**: string: The SKU family, used when the service has multiple performance classes within a tier, such as 'A', 'D', etc. for virtual machines
* **name**: string: The unique name of the SKU, such as 'P3'
* **size**: string: The size of the SKU, used when the name alone does not denote a service size or when a SKU has multiple performance classes within a family, e.g. 'A1' for virtual machines
* **tier**: string: The tier of the SKU, such as 'Free', 'Basic', 'Standard', or 'Premium'

## SqlConnectionInfo
### Properties
* **additionalSettings**: string: Additional connection settings
* **authentication**: 'ActiveDirectoryIntegrated' | 'ActiveDirectoryPassword' | 'None' | 'SqlAuthentication' | 'WindowsAuthentication' | string: Authentication type to use for connection
* **dataSource**: string (Required): Data source in the format Protocol:MachineName\SQLServerInstanceName,PortNumber
* **encryptConnection**: bool: Whether to encrypt the connection
* **password**: string: Password credential.
* **trustServerCertificate**: bool: Whether to trust the server certificate
* **type**: string (Required): Type of connection info
* **userName**: string: User name

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ValidateMigrationInputSqlServerSqlMITaskInput
### Properties
* **backupBlobShare**: [BlobShare](#blobshare) (Required): SAS URI of Azure Storage Account Container to be used for storing backup files.
* **backupFileShare**: [FileShare](#fileshare): Backup file share information for all selected databases.
* **selectedDatabases**: [MigrateSqlServerSqlMIDatabaseInput](#migratesqlserversqlmidatabaseinput)[] (Required): Databases to migrate
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to target

## ValidateMigrationInputSqlServerSqlMITaskOutput
### Properties
* **backupFolderErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Errors associated with the BackupFolder path
* **backupShareCredentialsErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Errors associated with backup share user name and password credentials
* **backupStorageAccountErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Errors associated with the storage account provided.
* **id**: string (ReadOnly): Result identifier
* **name**: string (ReadOnly): Name of database
* **restoreDatabaseNameErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Errors associated with the RestoreDatabaseName

