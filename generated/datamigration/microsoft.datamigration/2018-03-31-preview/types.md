# Microsoft.DataMigration @ 2018-03-31-preview

## Resource Microsoft.DataMigration/services@2018-03-31-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-31-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: HTTP strong entity tag value. Ignored if submitted
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: The resource kind. Only 'vm' (the default) is supported.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataMigrationServiceProperties](#datamigrationserviceproperties): Properties of the Data Migration service instance
* **sku**: [ServiceSku](#servicesku): An Azure SKU instance
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.DataMigration/services' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataMigration/services/projects@2018-03-31-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-31-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectProperties](#projectproperties): Project-specific properties
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.DataMigration/services/projects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataMigration/services/projects/tasks@2018-03-31-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-31-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: HTTP strong entity tag value. This is ignored if submitted.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectTaskProperties](#projecttaskproperties): Base class for all types of DMS task properties. If task is not supported by current client, this object is returned.
* **type**: 'Microsoft.DataMigration/services/projects/tasks' (ReadOnly, DeployTimeConstant): The resource type

## DataMigrationServiceProperties
### Properties
* **provisioningState**: 'Accepted' | 'Deleting' | 'Deploying' | 'Failed' | 'FailedToStart' | 'FailedToStop' | 'Starting' | 'Stopped' | 'Stopping' | 'Succeeded' (ReadOnly): The resource's provisioning state.
* **publicKey**: string: The public key of the service, used to encrypt secrets sent to the service
* **virtualSubnetId**: string (Required): The ID of the Microsoft.Network/virtualNetworks/subnets resource to which the service should be joined

## ServiceSku
### Properties
* **capacity**: int: The capacity of the SKU, if it supports scaling
* **family**: string: The SKU family, used when the service has multiple performance classes within a tier, such as 'A', 'D', etc. for virtual machines
* **name**: string: The unique name of the SKU, such as 'P3'
* **size**: string: The size of the SKU, used when the name alone does not denote a service size or when a SKU has multiple performance classes within a family, e.g. 'A1' for virtual machines
* **tier**: string: The tier of the SKU, such as 'Free', 'Basic', 'Standard', or 'Premium'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProjectProperties
### Properties
* **creationTime**: string (ReadOnly): UTC Date and time when project was created
* **databasesInfo**: [DatabaseInfo](#databaseinfo)[]: List of DatabaseInfo
* **provisioningState**: 'Deleting' | 'Succeeded' (ReadOnly): The project's provisioning state.
* **sourceConnectionInfo**: [ConnectionInfo](#connectioninfo): Defines the connection properties of a server
* **sourcePlatform**: 'SQL' | 'Unknown' (Required): Source platform for the project.
* **targetConnectionInfo**: [ConnectionInfo](#connectioninfo): Defines the connection properties of a server
* **targetPlatform**: 'SQLDB' | 'SQLMI' | 'Unknown' (Required): Target platform for the project.

## DatabaseInfo
### Properties
* **sourceDatabaseName**: string (Required): Name of the database

## ConnectionInfo
* **Discriminator**: type
### Base Properties
* **password**: string: Password credential.
* **userName**: string: User name
### SqlConnectionInfo
#### Properties
* **additionalSettings**: string: Additional connection settings
* **authentication**: 'ActiveDirectoryIntegrated' | 'ActiveDirectoryPassword' | 'None' | 'SqlAuthentication' | 'WindowsAuthentication': Authentication type to use for connection.
* **dataSource**: string (Required): Data source in the format Protocol:MachineName\SQLServerInstanceName,PortNumber
* **encryptConnection**: bool: Whether to encrypt the connection
* **password**: string: Password credential.
* **trustServerCertificate**: bool: Whether to trust the server certificate
* **type**: 'SqlConnectionInfo' (Required): Information for connecting to SQL database server
* **userName**: string: User name


## SqlConnectionInfo
### Properties
* **additionalSettings**: string: Additional connection settings
* **authentication**: 'ActiveDirectoryIntegrated' | 'ActiveDirectoryPassword' | 'None' | 'SqlAuthentication' | 'WindowsAuthentication': Authentication type to use for connection.
* **dataSource**: string (Required): Data source in the format Protocol:MachineName\SQLServerInstanceName,PortNumber
* **encryptConnection**: bool: Whether to encrypt the connection
* **password**: string: Password credential.
* **trustServerCertificate**: bool: Whether to trust the server certificate
* **type**: 'SqlConnectionInfo' (Required): Information for connecting to SQL database server
* **userName**: string: User name

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProjectTaskProperties
* **Discriminator**: taskType
### Base Properties
* **errors**: [ODataError](#odataerror)[] (ReadOnly): Array of errors. This is ignored if submitted.
* **state**: 'Canceled' | 'Failed' | 'FailedInputValidation' | 'Faulted' | 'Queued' | 'Running' | 'Succeeded' | 'Unknown' (ReadOnly): The state of the task. This is ignored if submitted.
### ConnectToSource.SqlServer
#### Properties
* **input**: [ConnectToSourceSqlServerTaskInput](#connecttosourcesqlservertaskinput): Input for the task that validates connection to SQL Server and also validates source server requirements
* **output**: [ConnectToSourceSqlServerTaskOutput](#connecttosourcesqlservertaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToSource.SqlServer' (Required): Properties for the task that validates connection to SQL Server and also validates source server requirements

### ConnectToTarget.AzureSqlDbMI
#### Properties
* **input**: [ConnectToTargetSqlMITaskInput](#connecttotargetsqlmitaskinput): Input for the task that validates connection to Azure SQL Database Managed Instance.
* **output**: [ConnectToTargetSqlMITaskOutput](#connecttotargetsqlmitaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.AzureSqlDbMI' (Required): Properties for the task that validates connection to Azure SQL Database Managed Instance

### ConnectToTarget.SqlDb
#### Properties
* **input**: [ConnectToTargetSqlDbTaskInput](#connecttotargetsqldbtaskinput): Input for the task that validates connection to SQL DB and target server requirements
* **output**: [ConnectToTargetSqlDbTaskOutput](#connecttotargetsqldbtaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.SqlDb' (Required): Properties for the task that validates connection to SQL DB and target server requirements

### GetUserTables.Sql
#### Properties
* **input**: [GetUserTablesSqlTaskInput](#getusertablessqltaskinput): Input for the task that collects user tables for the given list of databases
* **output**: [GetUserTablesSqlTaskOutput](#getusertablessqltaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'GetUserTables.Sql' (Required): Properties for the task that collects user tables for the given list of databases

### Migrate.SqlServer.AzureSqlDbMI
#### Properties
* **input**: [MigrateSqlServerSqlMITaskInput](#migratesqlserversqlmitaskinput): Input for task that migrates SQL Server databases to Azure SQL Database Managed Instance.
* **output**: [MigrateSqlServerSqlMITaskOutput](#migratesqlserversqlmitaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.SqlServer.AzureSqlDbMI' (Required): Properties for task that migrates SQL Server databases to Azure SQL Database Managed Instance

### Migrate.SqlServer.SqlDb
#### Properties
* **input**: [MigrateSqlServerSqlDbTaskInput](#migratesqlserversqldbtaskinput): Input for the task that migrates on-prem SQL Server databases to Azure SQL Database
* **output**: [MigrateSqlServerSqlDbTaskOutput](#migratesqlserversqldbtaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.SqlServer.SqlDb' (Required): Properties for the task that migrates on-prem SQL Server databases to Azure SQL Database

### ValidateMigrationInput.SqlServer.AzureSqlDbMI
#### Properties
* **input**: [ValidateMigrationInputSqlServerSqlMITaskInput](#validatemigrationinputsqlserversqlmitaskinput): Input for task that validates migration input for SQL to Azure SQL Managed Instance
* **output**: [ValidateMigrationInputSqlServerSqlMITaskOutput](#validatemigrationinputsqlserversqlmitaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ValidateMigrationInput.SqlServer.AzureSqlDbMI' (Required): Properties for task that validates migration input for SQL to Azure SQL Database Managed Instance


## ODataError
### Properties
* **code**: string: The machine-readable description of the error, such as 'InvalidRequest' or 'InternalServerError'
* **details**: [ODataError](#odataerror)[]: Inner errors that caused this error
* **message**: string: The human-readable description of the error

## ConnectToSource.SqlServer
### Properties
* **input**: [ConnectToSourceSqlServerTaskInput](#connecttosourcesqlservertaskinput): Input for the task that validates connection to SQL Server and also validates source server requirements
* **output**: [ConnectToSourceSqlServerTaskOutput](#connecttosourcesqlservertaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToSource.SqlServer' (Required): Properties for the task that validates connection to SQL Server and also validates source server requirements

## ConnectToSourceSqlServerTaskInput
### Properties
* **checkPermissionsGroup**: 'Default' | 'MigrationFromSqlServerToAzureDB': Permission group for validations.
* **CollectAgentJobs**: bool: Flag for whether to collect agent jobs from source server.
* **CollectLogins**: bool: Flag for whether to collect logins from source server.
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server

## ConnectToSourceSqlServerTaskOutput
* **Discriminator**: resultType
### Base Properties
* **id**: string (ReadOnly): Result identifier
### AgentJobLevelOutput
#### Properties
* **isEnabled**: bool (ReadOnly): The state of the original AgentJob.
* **jobCategory**: string (ReadOnly): The type of AgentJob.
* **jobOwner**: string (ReadOnly): The owner of the AgentJob
* **lastExecutedOn**: string (ReadOnly): UTC Date and time when the AgentJob was last executed.
* **migrationEligibility**: [MigrationEligibilityInfo](#migrationeligibilityinfo) (ReadOnly): Information about migration eligibility of a server object
* **name**: string (ReadOnly): AgentJob name
* **resultType**: 'AgentJobLevelOutput' (Required):

### DatabaseLevelOutput
#### Properties
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly): SQL Server compatibility level of database.
* **databaseFiles**: [DatabaseFileInfo](#databasefileinfo)[] (ReadOnly): The list of database files
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly): State of the database.
* **name**: string (ReadOnly): Database name
* **resultType**: 'DatabaseLevelOutput' (Required):
* **sizeMB**: int (ReadOnly): Size of the file in megabytes

### LoginLevelOutput
#### Properties
* **defaultDatabase**: string (ReadOnly): The default database for the login.
* **isEnabled**: bool (ReadOnly): The state of the login.
* **loginType**: 'AsymmetricKey' | 'Certificate' | 'ExternalGroup' | 'ExternalUser' | 'SqlLogin' | 'WindowsGroup' | 'WindowsUser' (ReadOnly): The type of login.
* **migrationEligibility**: [MigrationEligibilityInfo](#migrationeligibilityinfo) (ReadOnly): Information about migration eligibility of a server object
* **name**: string (ReadOnly): Login name.
* **resultType**: 'LoginLevelOutput' (Required):

### TaskLevelOutput
#### Properties
* **AgentJobs**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Source agent jobs as a map from agent job name to id.
* **databases**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Source databases as a map from database name to database id
* **Logins**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Source logins as a map from login name to login id.
* **resultType**: 'TaskLevelOutput' (Required): Task level output for the task that validates connection to SQL Server and also validates source server requirements
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors


## AgentJobLevelOutput
### Properties
* **isEnabled**: bool (ReadOnly): The state of the original AgentJob.
* **jobCategory**: string (ReadOnly): The type of AgentJob.
* **jobOwner**: string (ReadOnly): The owner of the AgentJob
* **lastExecutedOn**: string (ReadOnly): UTC Date and time when the AgentJob was last executed.
* **migrationEligibility**: [MigrationEligibilityInfo](#migrationeligibilityinfo) (ReadOnly): Information about migration eligibility of a server object
* **name**: string (ReadOnly): AgentJob name
* **resultType**: 'AgentJobLevelOutput' (Required):

## MigrationEligibilityInfo
### Properties
* **isEligibleForMigration**: bool (ReadOnly): Whether object is eligible for migration or not.
* **validationMessages**: string[] (ReadOnly): Information about eligibility failure for the server object.

## DatabaseLevelOutput
### Properties
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly): SQL Server compatibility level of database.
* **databaseFiles**: [DatabaseFileInfo](#databasefileinfo)[] (ReadOnly): The list of database files
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly): State of the database.
* **name**: string (ReadOnly): Database name
* **resultType**: 'DatabaseLevelOutput' (Required):
* **sizeMB**: int (ReadOnly): Size of the file in megabytes

## DatabaseFileInfo
### Properties
* **databaseName**: string: Name of the database
* **fileType**: 'Filestream' | 'Fulltext' | 'Log' | 'NotSupported' | 'Rows': Database file type.
* **id**: string: Unique identifier for database file
* **logicalName**: string: Logical name of the file
* **physicalFullName**: string: Operating-system full path of the file
* **restoreFullName**: string: Suggested full path of the file for restoring
* **sizeMB**: int: Size of the file in megabytes

## LoginLevelOutput
### Properties
* **defaultDatabase**: string (ReadOnly): The default database for the login.
* **isEnabled**: bool (ReadOnly): The state of the login.
* **loginType**: 'AsymmetricKey' | 'Certificate' | 'ExternalGroup' | 'ExternalUser' | 'SqlLogin' | 'WindowsGroup' | 'WindowsUser' (ReadOnly): The type of login.
* **migrationEligibility**: [MigrationEligibilityInfo](#migrationeligibilityinfo) (ReadOnly): Information about migration eligibility of a server object
* **name**: string (ReadOnly): Login name.
* **resultType**: 'LoginLevelOutput' (Required):

## TaskLevelOutput
### Properties
* **AgentJobs**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Source agent jobs as a map from agent job name to id.
* **databases**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Source databases as a map from database name to database id
* **Logins**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Source logins as a map from login name to login id.
* **resultType**: 'TaskLevelOutput' (Required): Task level output for the task that validates connection to SQL Server and also validates source server requirements
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

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

## ReportableException
### Properties
* **filePath**: string: The path to the file where exception occurred
* **hResult**: int: Coded numerical value that is assigned to a specific exception
* **lineNumber**: string: The line number where exception occurred
* **message**: string: Error message
* **stackTrace**: string: Stack trace

## ConnectToTarget.AzureSqlDbMI
### Properties
* **input**: [ConnectToTargetSqlMITaskInput](#connecttotargetsqlmitaskinput): Input for the task that validates connection to Azure SQL Database Managed Instance.
* **output**: [ConnectToTargetSqlMITaskOutput](#connecttotargetsqlmitaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.AzureSqlDbMI' (Required): Properties for the task that validates connection to Azure SQL Database Managed Instance

## ConnectToTargetSqlMITaskInput
### Properties
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server

## ConnectToTargetSqlMITaskOutput
### Properties
* **AgentJobs**: string[] (ReadOnly): List of agent jobs on the target server.
* **id**: string (ReadOnly): Result identifier
* **Logins**: string[] (ReadOnly): List of logins on the target server.
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Target server version
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

## ConnectToTarget.SqlDb
### Properties
* **input**: [ConnectToTargetSqlDbTaskInput](#connecttotargetsqldbtaskinput): Input for the task that validates connection to SQL DB and target server requirements
* **output**: [ConnectToTargetSqlDbTaskOutput](#connecttotargetsqldbtaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.SqlDb' (Required): Properties for the task that validates connection to SQL DB and target server requirements

## ConnectToTargetSqlDbTaskInput
### Properties
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server

## ConnectToTargetSqlDbTaskOutput
### Properties
* **databases**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Source databases as a map from database name to database id
* **id**: string (ReadOnly): Result identifier
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Version of the target server

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GetUserTables.Sql
### Properties
* **input**: [GetUserTablesSqlTaskInput](#getusertablessqltaskinput): Input for the task that collects user tables for the given list of databases
* **output**: [GetUserTablesSqlTaskOutput](#getusertablessqltaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'GetUserTables.Sql' (Required): Properties for the task that collects user tables for the given list of databases

## GetUserTablesSqlTaskInput
### Properties
* **connectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
* **selectedDatabases**: string[] (Required): List of database names to collect tables for

## GetUserTablesSqlTaskOutput
### Properties
* **databasesToTables**: [Dictionary<string,IList<DatabaseTable>>](#dictionarystringilistdatabasetable) (ReadOnly): Mapping from database name to list of tables
* **id**: string (ReadOnly): Result identifier
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

## Dictionary<string,IList<DatabaseTable>>
### Properties
### Additional Properties
* **Additional Properties Type**: [DatabaseTable](#databasetable)[]

## DatabaseTable
### Properties
* **hasRows**: bool (ReadOnly): Indicates whether table is empty or not
* **name**: string (ReadOnly): Schema-qualified name of the table

## Migrate.SqlServer.AzureSqlDbMI
### Properties
* **input**: [MigrateSqlServerSqlMITaskInput](#migratesqlserversqlmitaskinput): Input for task that migrates SQL Server databases to Azure SQL Database Managed Instance.
* **output**: [MigrateSqlServerSqlMITaskOutput](#migratesqlserversqlmitaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.SqlServer.AzureSqlDbMI' (Required): Properties for task that migrates SQL Server databases to Azure SQL Database Managed Instance

## MigrateSqlServerSqlMITaskInput
### Properties
* **backupBlobShare**: [BlobShare](#blobshare) (Required): Blob container storage information.
* **backupFileShare**: [FileShare](#fileshare): File share information with Path, Username, and Password.
* **selectedAgentJobs**: string[]: Agent Jobs to migrate.
* **selectedDatabases**: [MigrateSqlServerSqlMIDatabaseInput](#migratesqlserversqlmidatabaseinput)[] (Required): Databases to migrate
* **selectedLogins**: string[]: Logins to migrate.
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server

## BlobShare
### Properties
* **sasUri**: string (Required): SAS URI of Azure Storage Account Container.

## FileShare
### Properties
* **password**: string: Password credential used to connect to the share location.
* **path**: string (Required): The folder path for this share.
* **userName**: string: User name credential to connect to the share location

## MigrateSqlServerSqlMIDatabaseInput
### Properties
* **backupFileShare**: [FileShare](#fileshare): File share information with Path, Username, and Password.
* **name**: string (Required): Name of the database
* **restoreDatabaseName**: string (Required): Name of the database at destination

## MigrateSqlServerSqlMITaskOutput
* **Discriminator**: resultType
### Base Properties
* **id**: string (ReadOnly): Result identifier
### AgentJobLevelOutput
#### Properties
* **isEnabled**: bool (ReadOnly): The state of the original AgentJob.
* **jobCategory**: string (ReadOnly): The type of AgentJob.
* **jobOwner**: string (ReadOnly): The owner of the AgentJob
* **lastExecutedOn**: string (ReadOnly): UTC Date and time when the AgentJob was last executed.
* **migrationEligibility**: [MigrationEligibilityInfo](#migrationeligibilityinfo) (ReadOnly): Information about migration eligibility of a server object
* **name**: string (ReadOnly): AgentJob name
* **resultType**: 'AgentJobLevelOutput' (Required):

### DatabaseLevelOutput
#### Properties
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly): SQL Server compatibility level of database.
* **databaseFiles**: [DatabaseFileInfo](#databasefileinfo)[] (ReadOnly): The list of database files
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly): State of the database.
* **name**: string (ReadOnly): Database name
* **resultType**: 'DatabaseLevelOutput' (Required):
* **sizeMB**: int (ReadOnly): Size of the file in megabytes

### ErrorOutput
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Exception object for all custom exceptions
* **resultType**: 'ErrorOutput' (Required):

### LoginLevelOutput
#### Properties
* **defaultDatabase**: string (ReadOnly): The default database for the login.
* **isEnabled**: bool (ReadOnly): The state of the login.
* **loginType**: 'AsymmetricKey' | 'Certificate' | 'ExternalGroup' | 'ExternalUser' | 'SqlLogin' | 'WindowsGroup' | 'WindowsUser' (ReadOnly): The type of login.
* **migrationEligibility**: [MigrationEligibilityInfo](#migrationeligibilityinfo) (ReadOnly): Information about migration eligibility of a server object
* **name**: string (ReadOnly): Login name.
* **resultType**: 'LoginLevelOutput' (Required):

### MigrationLevelOutput
#### Properties
* **agentJobs**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Selected agent jobs as a map from name to id
* **databases**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Selected databases as a map from database name to database id
* **endedOn**: string (ReadOnly): Migration end time
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly): Migration exceptions and warnings.
* **logins**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Selected logins as a map from name to id
* **message**: string (ReadOnly): Migration progress message
* **orphanedUsers**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Map of users to database name of orphaned users.
* **resultType**: 'MigrationLevelOutput' (Required):
* **serverRoleResults**: [Dictionary<string,StartMigrationScenarioServerRoleResult>](#dictionarystringstartmigrationscenarioserverroleresult) (ReadOnly): Map of server role migration results.
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration.
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly): Current status of migration.
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Target server version


## ErrorOutput
### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Exception object for all custom exceptions
* **resultType**: 'ErrorOutput' (Required):

## MigrationLevelOutput
### Properties
* **agentJobs**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Selected agent jobs as a map from name to id
* **databases**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Selected databases as a map from database name to database id
* **endedOn**: string (ReadOnly): Migration end time
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly): Migration exceptions and warnings.
* **logins**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Selected logins as a map from name to id
* **message**: string (ReadOnly): Migration progress message
* **orphanedUsers**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Map of users to database name of orphaned users.
* **resultType**: 'MigrationLevelOutput' (Required):
* **serverRoleResults**: [Dictionary<string,StartMigrationScenarioServerRoleResult>](#dictionarystringstartmigrationscenarioserverroleresult) (ReadOnly): Map of server role migration results.
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration.
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly): Current status of migration.
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Target server version

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

## Dictionary<string,StartMigrationScenarioServerRoleResult>
### Properties
### Additional Properties
* **Additional Properties Type**: [StartMigrationScenarioServerRoleResult](#startmigrationscenarioserverroleresult)

## StartMigrationScenarioServerRoleResult
### Properties
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly): Migration exceptions and warnings.
* **name**: string (ReadOnly): Name of server role.
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration.

## Migrate.SqlServer.SqlDb
### Properties
* **input**: [MigrateSqlServerSqlDbTaskInput](#migratesqlserversqldbtaskinput): Input for the task that migrates on-prem SQL Server databases to Azure SQL Database
* **output**: [MigrateSqlServerSqlDbTaskOutput](#migratesqlserversqldbtaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.SqlServer.SqlDb' (Required): Properties for the task that migrates on-prem SQL Server databases to Azure SQL Database

## MigrateSqlServerSqlDbTaskInput
### Properties
* **selectedDatabases**: [MigrateSqlServerSqlDbDatabaseInput](#migratesqlserversqldbdatabaseinput)[] (Required): Databases to migrate
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
* **validationOptions**: [MigrationValidationOptions](#migrationvalidationoptions): Types of validations to run after the migration

## MigrateSqlServerSqlDbDatabaseInput
### Properties
* **makeSourceDbReadOnly**: bool: Whether to set database read only before migration
* **name**: string: Name of the database
* **tableMap**: [Dictionary<string,String>](#dictionarystringstring): Mapping of source to target tables
* **targetDatabaseName**: string: Name of target database. Note: Target database will be truncated before starting migration.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MigrationValidationOptions
### Properties
* **enableDataIntegrityValidation**: bool: Allows to perform a checksum based data integrity validation between source and target for the selected database / tables .
* **enableQueryAnalysisValidation**: bool: Allows to perform a quick and intelligent query analysis by retrieving queries from the source database and executes them in the target. The result will have execution statistics for executions in source and target databases for the extracted queries.
* **enableSchemaValidation**: bool: Allows to compare the schema information between source and target.

## MigrateSqlServerSqlDbTaskOutput
* **Discriminator**: resultType
### Base Properties
* **id**: string (ReadOnly): Result identifier
### DatabaseLevelOutput
#### Properties
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly): SQL Server compatibility level of database.
* **databaseFiles**: [DatabaseFileInfo](#databasefileinfo)[] (ReadOnly): The list of database files
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly): State of the database.
* **name**: string (ReadOnly): Database name
* **resultType**: 'DatabaseLevelOutput' (Required):
* **sizeMB**: int (ReadOnly): Size of the file in megabytes

### ErrorOutput
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Exception object for all custom exceptions
* **resultType**: 'ErrorOutput' (Required):

### MigrationLevelOutput
#### Properties
* **agentJobs**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Selected agent jobs as a map from name to id
* **databases**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Selected databases as a map from database name to database id
* **endedOn**: string (ReadOnly): Migration end time
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly): Migration exceptions and warnings.
* **logins**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Selected logins as a map from name to id
* **message**: string (ReadOnly): Migration progress message
* **orphanedUsers**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Map of users to database name of orphaned users.
* **resultType**: 'MigrationLevelOutput' (Required):
* **serverRoleResults**: [Dictionary<string,StartMigrationScenarioServerRoleResult>](#dictionarystringstartmigrationscenarioserverroleresult) (ReadOnly): Map of server role migration results.
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration.
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly): Current status of migration.
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Target server version

### TableLevelOutput
#### Properties
* **endedOn**: string (ReadOnly): Migration end time
* **errorPrefix**: string (ReadOnly): Wildcard string prefix to use for querying all errors of the item
* **itemsCompletedCount**: int (ReadOnly): Number of successfully completed items
* **itemsCount**: int (ReadOnly): Number of items
* **objectName**: string (ReadOnly): Name of the item
* **resultPrefix**: string (ReadOnly): Wildcard string prefix to use for querying all sub-tem results of the item
* **resultType**: 'TableLevelOutput' (Required):
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration.
* **statusMessage**: string (ReadOnly): Status message


## TableLevelOutput
### Properties
* **endedOn**: string (ReadOnly): Migration end time
* **errorPrefix**: string (ReadOnly): Wildcard string prefix to use for querying all errors of the item
* **itemsCompletedCount**: int (ReadOnly): Number of successfully completed items
* **itemsCount**: int (ReadOnly): Number of items
* **objectName**: string (ReadOnly): Name of the item
* **resultPrefix**: string (ReadOnly): Wildcard string prefix to use for querying all sub-tem results of the item
* **resultType**: 'TableLevelOutput' (Required):
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration.
* **statusMessage**: string (ReadOnly): Status message

## ValidateMigrationInput.SqlServer.AzureSqlDbMI
### Properties
* **input**: [ValidateMigrationInputSqlServerSqlMITaskInput](#validatemigrationinputsqlserversqlmitaskinput): Input for task that validates migration input for SQL to Azure SQL Managed Instance
* **output**: [ValidateMigrationInputSqlServerSqlMITaskOutput](#validatemigrationinputsqlserversqlmitaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ValidateMigrationInput.SqlServer.AzureSqlDbMI' (Required): Properties for task that validates migration input for SQL to Azure SQL Database Managed Instance

## ValidateMigrationInputSqlServerSqlMITaskInput
### Properties
* **backupBlobShare**: [BlobShare](#blobshare) (Required): Blob container storage information.
* **backupFileShare**: [FileShare](#fileshare): File share information with Path, Username, and Password.
* **selectedDatabases**: [MigrateSqlServerSqlMIDatabaseInput](#migratesqlserversqlmidatabaseinput)[] (Required): Databases to migrate
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server

## ValidateMigrationInputSqlServerSqlMITaskOutput
### Properties
* **backupFolderErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Errors associated with the BackupFolder path
* **backupShareCredentialsErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Errors associated with backup share user name and password credentials
* **backupStorageAccountErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Errors associated with the storage account provided.
* **id**: string (ReadOnly): Result identifier
* **name**: string (ReadOnly): Name of database
* **restoreDatabaseNameErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Errors associated with the RestoreDatabaseName

