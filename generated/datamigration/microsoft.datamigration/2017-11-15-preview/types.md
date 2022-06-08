# Microsoft.DataMigration @ 2017-11-15-preview

## Resource Microsoft.DataMigration/services@2017-11-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-11-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: HTTP strong entity tag value. Ignored if submitted
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: The resource kind. Only 'vm' (the default) is supported.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataMigrationServiceProperties](#datamigrationserviceproperties): Properties of the Data Migration service instance
* **sku**: [ServiceSku](#servicesku): An Azure SKU instance
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DataMigration/services' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataMigration/services/projects@2017-11-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-11-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectProperties](#projectproperties): Project-specific properties
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DataMigration/services/projects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataMigration/services/projects/tasks@2017-11-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-11-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: HTTP strong entity tag value. This is ignored if submitted.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectTaskProperties](#projecttaskproperties): Base class for all types of DMS task properties. If task is not supported by current client, this object is returned.
* **type**: 'Microsoft.DataMigration/services/projects/tasks' (ReadOnly, DeployTimeConstant): The resource type

## ConnectionInfo
* **Discriminator**: type

### Base Properties
* **password**: string: Password credential.
* **userName**: string: User name
### SqlConnectionInfo
#### Properties
* **additionalSettings**: string: Additional connection settings
* **authentication**: 'ActiveDirectoryIntegrated' | 'ActiveDirectoryPassword' | 'None' | 'SqlAuthentication' | 'WindowsAuthentication': An enumeration of possible authentication types when connecting
* **dataSource**: string (Required): Data source in the format Protocol:MachineName\SQLServerInstanceName,PortNumber
* **encryptConnection**: bool: Whether to encrypt the connection
* **trustServerCertificate**: bool: Whether to trust the server certificate
* **type**: 'SqlConnectionInfo' (Required): Type of connection info


## ConnectToSourceSqlServerTaskInput
### Properties
* **checkPermissionsGroup**: 'Default' | 'MigrationFromSqlServerToAzureDB': Permission group for validations. These groups will run a set of permissions for validating user activity. Select the permission group for the activity that you are performing.
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server

## ConnectToSourceSqlServerTaskOutput
* **Discriminator**: resultType

### Base Properties
* **id**: string (ReadOnly): Result identifier
### ConnectToSourceSqlServerTaskOutputDatabaseLevel
#### Properties
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly): An enumeration of SQL Server database compatibility levels
* **databaseFiles**: [DatabaseFileInfo](#databasefileinfo)[] (ReadOnly): The list of database files
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly): An enumeration of SQL Server Database states
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
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server

## ConnectToTargetSqlDbTaskOutput
### Properties
* **databases**: string (ReadOnly): Source databases as a map from database name to database id
* **id**: string (ReadOnly): Result identifier
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Version of the target server

## DatabaseFileInfo
### Properties
* **databaseName**: string: Name of the database
* **fileType**: 'Filestream' | 'Fulltext' | 'Log' | 'NotSupported' | 'Rows': An enumeration of SQL Server database file types
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
* **provisioningState**: 'Accepted' | 'Deleting' | 'Deploying' | 'Failed' | 'FailedToStart' | 'FailedToStop' | 'Starting' | 'Stopped' | 'Stopping' | 'Succeeded' (ReadOnly): The resource's provisioning state
* **publicKey**: string: The public key of the service, used to encrypt secrets sent to the service
* **virtualSubnetId**: string (Required): The ID of the Microsoft.Network/virtualNetworks/subnets resource to which the service should be joined

## GetUserTablesSqlTaskInput
### Properties
* **connectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
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
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
* **validationOptions**: [MigrationValidationOptions](#migrationvalidationoptions): Types of validations to run after the migration

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
* **stage**: 'Backup' | 'Completed' | 'FileCopy' | 'Initialize' | 'None' | 'Restore' (ReadOnly): Current stage of migration
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration
* **statusMessage**: string (ReadOnly): Status message

### MigrateSqlServerSqlDbTaskOutputError
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Exception object for all custom exceptions
* **resultType**: 'ErrorOutput' (Required): Result type

### MigrateSqlServerSqlDbTaskOutputMigrationLevel
#### Properties
* **databases**: string (ReadOnly): Selected databases as a map from database name to database id
* **databaseSummary**: string (ReadOnly): Summary of database results in the migration
* **durationInSeconds**: int (ReadOnly): Duration of task execution in seconds.
* **endedOn**: string (ReadOnly): Migration end time
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly): Migration exceptions and warnings.
* **message**: string (ReadOnly): Migration progress message
* **migrationReportResult**: [MigrationReportResult](#migrationreportresult): Migration validation report result, contains the url for downloading the generated report.
* **resultType**: 'MigrationLevelOutput' (Required): Result type
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly): Current status of migration
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
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration
* **statusMessage**: string (ReadOnly): Status message


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
* **provisioningState**: 'Deleting' | 'Succeeded' (ReadOnly): The project's provisioning state
* **sourceConnectionInfo**: [ConnectionInfo](#connectioninfo): Defines the connection properties of a server
* **sourcePlatform**: 'SQL' | 'Unknown' (Required): Source platform of the project
* **targetConnectionInfo**: [ConnectionInfo](#connectioninfo): Defines the connection properties of a server
* **targetPlatform**: 'SQLDB' | 'Unknown' (Required): Target platform of the project

## ProjectTaskProperties
* **Discriminator**: taskType

### Base Properties
* **errors**: [ODataError](#odataerror)[] (ReadOnly): Array of errors. This is ignored if submitted.
* **state**: 'Canceled' | 'Failed' | 'FailedInputValidation' | 'Faulted' | 'Queued' | 'Running' | 'Succeeded' | 'Unknown' (ReadOnly): The state of the task. This is ignored if submitted.
### ConnectToSourceSqlServerTaskProperties
#### Properties
* **input**: [ConnectToSourceSqlServerTaskInput](#connecttosourcesqlservertaskinput): Input for the task that validates connection to SQL Server and also validates source server requirements
* **output**: [ConnectToSourceSqlServerTaskOutput](#connecttosourcesqlservertaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToSource.SqlServer' (Required): Task type.

### ConnectToTargetSqlDbTaskProperties
#### Properties
* **input**: [ConnectToTargetSqlDbTaskInput](#connecttotargetsqldbtaskinput): Input for the task that validates connection to SQL DB and target server requirements
* **output**: [ConnectToTargetSqlDbTaskOutput](#connecttotargetsqldbtaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.SqlDb' (Required): Task type.

### GetUserTablesSqlTaskProperties
#### Properties
* **input**: [GetUserTablesSqlTaskInput](#getusertablessqltaskinput): Input for the task that collects user tables for the given list of databases
* **output**: [GetUserTablesSqlTaskOutput](#getusertablessqltaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'GetUserTables.Sql' (Required): Task type.

### MigrateSqlServerSqlDbTaskProperties
#### Properties
* **input**: [MigrateSqlServerSqlDbTaskInput](#migratesqlserversqldbtaskinput): Input for the task that migrates on-prem SQL Server databases to Azure SQL Database
* **output**: [MigrateSqlServerSqlDbTaskOutput](#migratesqlserversqldbtaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.SqlServer.SqlDb' (Required): Task type.


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
* **authentication**: 'ActiveDirectoryIntegrated' | 'ActiveDirectoryPassword' | 'None' | 'SqlAuthentication' | 'WindowsAuthentication': An enumeration of possible authentication types when connecting
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

