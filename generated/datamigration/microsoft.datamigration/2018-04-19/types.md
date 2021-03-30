# Microsoft.DataMigration @ 2018-04-19

## Resource Microsoft.DataMigration/services@2018-04-19
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-19' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: HTTP strong entity tag value. Ignored if submitted
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: The resource kind. Only 'vm' (the default) is supported.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataMigrationServiceProperties](#datamigrationserviceproperties): Properties of the Data Migration service instance
* **sku**: [ServiceSku](#servicesku): An Azure SKU instance
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.DataMigration/services' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataMigration/services/projects@2018-04-19
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-19' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectProperties](#projectproperties): Project-specific properties
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.DataMigration/services/projects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataMigration/services/projects/tasks@2018-04-19
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-19' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: HTTP strong entity tag value. This is ignored if submitted.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectTaskProperties](#projecttaskproperties): Base class for all types of DMS task properties. If task is not supported by current client, this object is returned.
* **type**: 'Microsoft.DataMigration/services/projects/tasks' (ReadOnly, DeployTimeConstant): The resource type

## DataMigrationServiceProperties
### Properties
* **provisioningState**: 'Accepted' | 'Deleting' | 'Deploying' | 'Failed' | 'FailedToStart' | 'FailedToStop' | 'Starting' | 'Stopped' | 'Stopping' | 'Succeeded' (ReadOnly): The resource's provisioning state. Possible values include: 'Accepted', 'Deleting', 'Deploying', 'Stopped', 'Stopping', 'Starting', 'FailedToStart', 'FailedToStop', 'Succeeded', 'Failed'
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
* **provisioningState**: 'Deleting' | 'Succeeded' (ReadOnly): The project's provisioning state. Possible values include: 'Deleting', 'Succeeded'
* **sourceConnectionInfo**: [ConnectionInfo](#connectioninfo): Defines the connection properties of a server
* **sourcePlatform**: 'SQL' | 'Unknown' (Required): Source platform for the project. Possible values include: 'SQL', 'Unknown'
* **targetConnectionInfo**: [ConnectionInfo](#connectioninfo): Defines the connection properties of a server
* **targetPlatform**: 'SQLDB' | 'Unknown' (Required): Target platform for the project. Possible values include: 'SQLDB', 'Unknown'

## DatabaseInfo
### Properties
* **sourceDatabaseName**: string (Required): Name of the database

## ConnectionInfo
* **Discriminator**: type
### Base Properties
* **password**: string: Password credential.
* **userName**: string: User name
### MiSqlConnectionInfo
#### Properties
* **managedInstanceResourceId**: string (Required): Resource id for Azure SQL database Managed instance
* **password**: string: Password credential.
* **type**: 'MiSqlConnectionInfo' (Required): Properties required to create a connection to Azure SQL database Managed instance
* **userName**: string: User name

### MySqlConnectionInfo
#### Properties
* **password**: string: Password credential.
* **port**: int (Required): Port for Server
* **serverName**: string (Required): Name of the server
* **type**: 'MySqlConnectionInfo' (Required): Information for connecting to MySQL server
* **userName**: string: User name

### PostgreSqlConnectionInfo
#### Properties
* **databaseName**: string: Name of the database
* **password**: string: Password credential.
* **port**: int (Required): Port for Server
* **serverName**: string (Required): Name of the server
* **type**: 'PostgreSqlConnectionInfo' (Required): Information for connecting to PostgreSQL server
* **userName**: string: User name

### SqlConnectionInfo
#### Properties
* **additionalSettings**: string: Additional connection settings
* **authentication**: 'ActiveDirectoryIntegrated' | 'ActiveDirectoryPassword' | 'None' | 'SqlAuthentication' | 'WindowsAuthentication': Authentication type to use for connection. Possible values include: 'None', 'WindowsAuthentication', 'SqlAuthentication', 'ActiveDirectoryIntegrated', 'ActiveDirectoryPassword'
* **dataSource**: string (Required): Data source in the format Protocol:MachineName\SQLServerInstanceName,PortNumber
* **encryptConnection**: bool: Whether to encrypt the connection
* **password**: string: Password credential.
* **platform**: 'SqlOnPrem': Server platform type for connection. Possible values include: 'SqlOnPrem'
* **trustServerCertificate**: bool: Whether to trust the server certificate
* **type**: 'SqlConnectionInfo' (Required): Information for connecting to SQL database server
* **userName**: string: User name


## MiSqlConnectionInfo
### Properties
* **managedInstanceResourceId**: string (Required): Resource id for Azure SQL database Managed instance
* **password**: string: Password credential.
* **type**: 'MiSqlConnectionInfo' (Required): Properties required to create a connection to Azure SQL database Managed instance
* **userName**: string: User name

## MySqlConnectionInfo
### Properties
* **password**: string: Password credential.
* **port**: int (Required): Port for Server
* **serverName**: string (Required): Name of the server
* **type**: 'MySqlConnectionInfo' (Required): Information for connecting to MySQL server
* **userName**: string: User name

## PostgreSqlConnectionInfo
### Properties
* **databaseName**: string: Name of the database
* **password**: string: Password credential.
* **port**: int (Required): Port for Server
* **serverName**: string (Required): Name of the server
* **type**: 'PostgreSqlConnectionInfo' (Required): Information for connecting to PostgreSQL server
* **userName**: string: User name

## SqlConnectionInfo
### Properties
* **additionalSettings**: string: Additional connection settings
* **authentication**: 'ActiveDirectoryIntegrated' | 'ActiveDirectoryPassword' | 'None' | 'SqlAuthentication' | 'WindowsAuthentication': Authentication type to use for connection. Possible values include: 'None', 'WindowsAuthentication', 'SqlAuthentication', 'ActiveDirectoryIntegrated', 'ActiveDirectoryPassword'
* **dataSource**: string (Required): Data source in the format Protocol:MachineName\SQLServerInstanceName,PortNumber
* **encryptConnection**: bool: Whether to encrypt the connection
* **password**: string: Password credential.
* **platform**: 'SqlOnPrem': Server platform type for connection. Possible values include: 'SqlOnPrem'
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
* **commands**: [CommandProperties](#commandproperties)[] (ReadOnly): Array of command properties.
* **errors**: [ODataError](#odataerror)[] (ReadOnly): Array of errors. This is ignored if submitted.
* **state**: 'Canceled' | 'Failed' | 'FailedInputValidation' | 'Faulted' | 'Queued' | 'Running' | 'Succeeded' | 'Unknown' (ReadOnly): The state of the task. This is ignored if submitted. Possible values include: 'Unknown', 'Queued', 'Running', 'Canceled', 'Succeeded', 'Failed', 'FailedInputValidation', 'Faulted'
### ConnectToSource.MySql
#### Properties
* **input**: [ConnectToSourceMySqlTaskInput](#connecttosourcemysqltaskinput): Input for the task that validates MySQL database connection
* **output**: [ConnectToSourceNonSqlTaskOutput](#connecttosourcenonsqltaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToSource.MySql' (Required): Properties for the task that validates MySQL database connection

### ConnectToSource.PostgreSql.Sync
#### Properties
* **input**: [ConnectToSourcePostgreSqlSyncTaskInput](#connecttosourcepostgresqlsynctaskinput): Input for the task that validates connection to PostgreSQL and source server requirements
* **output**: [ConnectToSourcePostgreSqlSyncTaskOutput](#connecttosourcepostgresqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToSource.PostgreSql.Sync' (Required): Properties for the task that validates connection to PostgreSQL server and source server requirements for online migration

### ConnectToSource.SqlServer
#### Properties
* **input**: [ConnectToSourceSqlServerTaskInput](#connecttosourcesqlservertaskinput): Input for the task that validates connection to SQL Server and also validates source server requirements
* **output**: [ConnectToSourceSqlServerTaskOutput](#connecttosourcesqlservertaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToSource.SqlServer' (Required): Properties for the task that validates connection to SQL Server and also validates source server requirements

### ConnectToSource.SqlServer.Sync
#### Properties
* **input**: [ConnectToSourceSqlServerTaskInput](#connecttosourcesqlservertaskinput): Input for the task that validates connection to SQL Server and also validates source server requirements
* **output**: [ConnectToSourceSqlServerTaskOutput](#connecttosourcesqlservertaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToSource.SqlServer.Sync' (Required): Properties for the task that validates connection to SQL Server and source server requirements for online migration

### ConnectToTarget.AzureDbForMySql
#### Properties
* **input**: [ConnectToTargetAzureDbForMySqlTaskInput](#connecttotargetazuredbformysqltaskinput): Input for the task that validates connection to Azure Database for MySQL and target server requirements
* **output**: [ConnectToTargetAzureDbForMySqlTaskOutput](#connecttotargetazuredbformysqltaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.AzureDbForMySql' (Required): Properties for the task that validates connection to Azure Database for MySQL and target server requirements

### ConnectToTarget.AzureDbForPostgreSql.Sync
#### Properties
* **input**: [ConnectToTargetAzureDbForPostgreSqlSyncTaskInput](#connecttotargetazuredbforpostgresqlsynctaskinput): Input for the task that validates connection to Azure Database for PostgreSQL and target server requirements
* **output**: [ConnectToTargetAzureDbForPostgreSqlSyncTaskOutput](#connecttotargetazuredbforpostgresqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.AzureDbForPostgreSql.Sync' (Required): Properties for the task that validates connection to Azure Database For PostgreSQL server and target server requirements for online migration

### ConnectToTarget.AzureSqlDbMI
#### Properties
* **input**: [ConnectToTargetSqlMITaskInput](#connecttotargetsqlmitaskinput): Input for the task that validates connection to Azure SQL Database Managed Instance.
* **output**: [ConnectToTargetSqlMITaskOutput](#connecttotargetsqlmitaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.AzureSqlDbMI' (Required): Properties for the task that validates connection to Azure SQL Database Managed Instance

### ConnectToTarget.AzureSqlDbMI.Sync.LRS
#### Properties
* **input**: [ConnectToTargetSqlMISyncTaskInput](#connecttotargetsqlmisynctaskinput): Input for the task that validates connection to Azure SQL Database Managed Instance online scenario.
* **output**: [ConnectToTargetSqlMISyncTaskOutput](#connecttotargetsqlmisynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.AzureSqlDbMI.Sync.LRS' (Required): Properties for the task that validates connection to Azure SQL Database Managed Instance

### ConnectToTarget.SqlDb
#### Properties
* **input**: [ConnectToTargetSqlDbTaskInput](#connecttotargetsqldbtaskinput): Input for the task that validates connection to SQL DB and target server requirements
* **output**: [ConnectToTargetSqlDbTaskOutput](#connecttotargetsqldbtaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.SqlDb' (Required): Properties for the task that validates connection to SQL DB and target server requirements

### ConnectToTarget.SqlDb.Sync
#### Properties
* **input**: [ConnectToTargetSqlSqlDbSyncTaskInput](#connecttotargetsqlsqldbsynctaskinput): Input for the task that validates connection to Azure SQL DB and target server requirements
* **output**: [ConnectToTargetSqlDbTaskOutput](#connecttotargetsqldbtaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.SqlDb.Sync' (Required): Properties for the task that validates connection to SQL DB and target server requirements for online migration

### GetTDECertificates.Sql
#### Properties
* **input**: [GetTdeCertificatesSqlTaskInput](#gettdecertificatessqltaskinput): Input for the task that gets TDE certificates in Base64 encoded format.
* **output**: [GetTdeCertificatesSqlTaskOutput](#gettdecertificatessqltaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'GetTDECertificates.Sql' (Required): Properties for the task that gets TDE certificates in Base64 encoded format.

### GetUserTables.AzureSqlDb.Sync
#### Properties
* **input**: [GetUserTablesSqlSyncTaskInput](#getusertablessqlsynctaskinput): Input for the task that collects user tables for the given list of databases
* **output**: [GetUserTablesSqlSyncTaskOutput](#getusertablessqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'GetUserTables.AzureSqlDb.Sync' (Required): Properties for the task that collects user tables for the given list of databases

### GetUserTables.Sql
#### Properties
* **input**: [GetUserTablesSqlTaskInput](#getusertablessqltaskinput): Input for the task that collects user tables for the given list of databases
* **output**: [GetUserTablesSqlTaskOutput](#getusertablessqltaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'GetUserTables.Sql' (Required): Properties for the task that collects user tables for the given list of databases

### Migrate.MySql.AzureDbForMySql.Sync
#### Properties
* **input**: [MigrateMySqlAzureDbForMySqlSyncTaskInput](#migratemysqlazuredbformysqlsynctaskinput): Input for the task that migrates MySQL databases to Azure Database for MySQL for online migrations
* **output**: [MigrateMySqlAzureDbForMySqlSyncTaskOutput](#migratemysqlazuredbformysqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.MySql.AzureDbForMySql.Sync' (Required): Properties for the task that migrates MySQL databases to Azure Database for MySQL for online migrations

### Migrate.PostgreSql.AzureDbForPostgreSql.Sync
#### Properties
* **input**: [MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput](#migratepostgresqlazuredbforpostgresqlsynctaskinput): Input for the task that migrates PostgreSQL databases to Azure Database for PostgreSQL for online migrations
* **output**: [MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput](#migratepostgresqlazuredbforpostgresqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.PostgreSql.AzureDbForPostgreSql.Sync' (Required): Properties for the task that migrates PostgreSQL databases to Azure Database for PostgreSQL for online migrations

### Migrate.SqlServer.AzureSqlDb.Sync
#### Properties
* **input**: [MigrateSqlServerSqlDbSyncTaskInput](#migratesqlserversqldbsynctaskinput): Input for the task that migrates on-prem SQL Server databases to Azure SQL Database for online migrations
* **output**: [MigrateSqlServerSqlDbSyncTaskOutput](#migratesqlserversqldbsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.SqlServer.AzureSqlDb.Sync' (Required): Properties for the task that migrates on-prem SQL Server databases to Azure SQL Database for online migrations

### Migrate.SqlServer.AzureSqlDbMI
#### Properties
* **input**: [MigrateSqlServerSqlMITaskInput](#migratesqlserversqlmitaskinput): Input for task that migrates SQL Server databases to Azure SQL Database Managed Instance.
* **output**: [MigrateSqlServerSqlMITaskOutput](#migratesqlserversqlmitaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.SqlServer.AzureSqlDbMI' (Required): Properties for task that migrates SQL Server databases to Azure SQL Database Managed Instance

### Migrate.SqlServer.AzureSqlDbMI.Sync.LRS
#### Properties
* **input**: [MigrateSqlServerSqlMISyncTaskInput](#migratesqlserversqlmisynctaskinput): Input for task that migrates SQL Server databases to Azure SQL Database Managed Instance online scenario.
* **output**: [MigrateSqlServerSqlMISyncTaskOutput](#migratesqlserversqlmisynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.SqlServer.AzureSqlDbMI.Sync.LRS' (Required): Properties for task that migrates SQL Server databases to Azure SQL Database Managed Instance sync scenario

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

### ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS
#### Properties
* **input**: [ValidateMigrationInputSqlServerSqlMISyncTaskInput](#validatemigrationinputsqlserversqlmisynctaskinput): Input for task that migrates SQL Server databases to Azure SQL Database Managed Instance online scenario.
* **output**: [ValidateMigrationInputSqlServerSqlMISyncTaskOutput](#validatemigrationinputsqlserversqlmisynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS' (Required): Properties for task that validates migration input for SQL to Azure SQL Database Managed Instance sync scenario

### ValidateMigrationInput.SqlServer.SqlDb.Sync
#### Properties
* **input**: [ValidateSyncMigrationInputSqlServerTaskInput](#validatesyncmigrationinputsqlservertaskinput): Input for task that validates migration input for SQL sync migrations
* **output**: [ValidateSyncMigrationInputSqlServerTaskOutput](#validatesyncmigrationinputsqlservertaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ValidateMigrationInput.SqlServer.SqlDb.Sync' (Required): Properties for task that validates migration input for SQL to Azure SQL DB sync migrations


## CommandProperties
* **Discriminator**: commandType
### Base Properties
* **errors**: [ODataError](#odataerror)[] (ReadOnly): Array of errors. This is ignored if submitted.
* **state**: 'Accepted' | 'Failed' | 'Running' | 'Succeeded' | 'Unknown' (ReadOnly): The state of the command. This is ignored if submitted. Possible values include: 'Unknown', 'Accepted', 'Running', 'Succeeded', 'Failed'
### Migrate.SqlServer.AzureDbSqlMi.Complete
#### Properties
* **commandType**: 'Migrate.SqlServer.AzureDbSqlMi.Complete' (Required): Properties for the command that completes online migration for an Azure SQL Database Managed Instance.
* **input**: [MigrateMISyncCompleteCommandInput](#migratemisynccompletecommandinput): Input for command that completes online migration for an Azure SQL Database Managed Instance.
* **output**: [MigrateMISyncCompleteCommandOutput](#migratemisynccompletecommandoutput) (ReadOnly): Output for command that completes online migration for an Azure SQL Database Managed Instance.

### Migrate.Sync.Complete.Database
#### Properties
* **commandType**: 'Migrate.Sync.Complete.Database' (Required): Properties for the command that completes sync migration for a database.
* **input**: [MigrateSyncCompleteCommandInput](#migratesynccompletecommandinput): Input for command that completes sync migration for a database.
* **output**: [MigrateSyncCompleteCommandOutput](#migratesynccompletecommandoutput) (ReadOnly): Output for command that completes sync migration for a database.


## ODataError
### Properties
* **code**: string (ReadOnly): The machine-readable description of the error, such as 'InvalidRequest' or 'InternalServerError'
* **details**: [ODataError](#odataerror)[] (ReadOnly): Inner errors that caused this error
* **message**: string (ReadOnly): The human-readable description of the error

## Migrate.SqlServer.AzureDbSqlMi.Complete
### Properties
* **commandType**: 'Migrate.SqlServer.AzureDbSqlMi.Complete' (Required): Properties for the command that completes online migration for an Azure SQL Database Managed Instance.
* **input**: [MigrateMISyncCompleteCommandInput](#migratemisynccompletecommandinput): Input for command that completes online migration for an Azure SQL Database Managed Instance.
* **output**: [MigrateMISyncCompleteCommandOutput](#migratemisynccompletecommandoutput) (ReadOnly): Output for command that completes online migration for an Azure SQL Database Managed Instance.

## MigrateMISyncCompleteCommandInput
### Properties
* **sourceDatabaseName**: string (Required): Name of managed instance database

## MigrateMISyncCompleteCommandOutput
### Properties
* **errors**: [ReportableException](#reportableexception)[]: List of errors that happened during the command execution

## ReportableException
### Properties
* **actionableMessage**: string: Actionable steps for this exception
* **filePath**: string (ReadOnly): The path to the file where exception occurred
* **hResult**: int (ReadOnly): Coded numerical value that is assigned to a specific exception
* **lineNumber**: string (ReadOnly): The line number where exception occurred
* **message**: string (ReadOnly): Error message
* **stackTrace**: string (ReadOnly): Stack trace

## Migrate.Sync.Complete.Database
### Properties
* **commandType**: 'Migrate.Sync.Complete.Database' (Required): Properties for the command that completes sync migration for a database.
* **input**: [MigrateSyncCompleteCommandInput](#migratesynccompletecommandinput): Input for command that completes sync migration for a database.
* **output**: [MigrateSyncCompleteCommandOutput](#migratesynccompletecommandoutput) (ReadOnly): Output for command that completes sync migration for a database.

## MigrateSyncCompleteCommandInput
### Properties
* **commitTimeStamp**: string: Time stamp to complete
* **databaseName**: string (Required): Name of database

## MigrateSyncCompleteCommandOutput
### Properties
* **errors**: [ReportableException](#reportableexception)[] (ReadOnly): List of errors that happened during the command execution
* **id**: string (ReadOnly): Result identifier

## ConnectToSource.MySql
### Properties
* **input**: [ConnectToSourceMySqlTaskInput](#connecttosourcemysqltaskinput): Input for the task that validates MySQL database connection
* **output**: [ConnectToSourceNonSqlTaskOutput](#connecttosourcenonsqltaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToSource.MySql' (Required): Properties for the task that validates MySQL database connection

## ConnectToSourceMySqlTaskInput
### Properties
* **checkPermissionsGroup**: 'Default' | 'MigrationFromMySQLToAzureDBForMySQL' | 'MigrationFromSqlServerToAzureDB' | 'MigrationFromSqlServerToAzureMI': Permission group for validations. Possible values include: 'Default', 'MigrationFromSqlServerToAzureDB', 'MigrationFromSqlServerToAzureMI', 'MigrationFromMySQLToAzureDBForMySQL'
* **sourceConnectionInfo**: [MySqlConnectionInfo](#mysqlconnectioninfo) (Required): Information for connecting to MySQL server
* **targetPlatform**: 'AzureDbForMySQL' | 'SqlServer': Target Platform for the migration. Possible values include: 'SqlServer', 'AzureDbForMySQL'

## ConnectToSourceNonSqlTaskOutput
### Properties
* **databases**: string[] (ReadOnly): List of databases on the server
* **id**: string (ReadOnly): Result identifier
* **serverProperties**: [ServerProperties](#serverproperties) (ReadOnly): Server properties for Oracle, MySQL type source
* **sourceServerBrandVersion**: string (ReadOnly): Server brand version
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors associated with the task

## ServerProperties
### Properties
* **serverDatabaseCount**: int (ReadOnly): Number of databases in the server
* **serverEdition**: string (ReadOnly): Edition of the database server
* **serverName**: string (ReadOnly): Name of the server
* **serverOperatingSystemVersion**: string (ReadOnly): Version of the operating system
* **serverPlatform**: string (ReadOnly): Name of the server platform
* **serverVersion**: string (ReadOnly): Version of the database server

## ConnectToSource.PostgreSql.Sync
### Properties
* **input**: [ConnectToSourcePostgreSqlSyncTaskInput](#connecttosourcepostgresqlsynctaskinput): Input for the task that validates connection to PostgreSQL and source server requirements
* **output**: [ConnectToSourcePostgreSqlSyncTaskOutput](#connecttosourcepostgresqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToSource.PostgreSql.Sync' (Required): Properties for the task that validates connection to PostgreSQL server and source server requirements for online migration

## ConnectToSourcePostgreSqlSyncTaskInput
### Properties
* **sourceConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required): Information for connecting to PostgreSQL server

## ConnectToSourcePostgreSqlSyncTaskOutput
### Properties
* **databases**: string[] (ReadOnly): List of databases on source server
* **id**: string (ReadOnly): Result identifier
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Version of the source server
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors associated with the task

## ConnectToSource.SqlServer
### Properties
* **input**: [ConnectToSourceSqlServerTaskInput](#connecttosourcesqlservertaskinput): Input for the task that validates connection to SQL Server and also validates source server requirements
* **output**: [ConnectToSourceSqlServerTaskOutput](#connecttosourcesqlservertaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToSource.SqlServer' (Required): Properties for the task that validates connection to SQL Server and also validates source server requirements

## ConnectToSourceSqlServerTaskInput
### Properties
* **checkPermissionsGroup**: 'Default' | 'MigrationFromMySQLToAzureDBForMySQL' | 'MigrationFromSqlServerToAzureDB' | 'MigrationFromSqlServerToAzureMI': Permission group for validations. Possible values include: 'Default', 'MigrationFromSqlServerToAzureDB', 'MigrationFromSqlServerToAzureMI', 'MigrationFromMySQLToAzureDBForMySQL'
* **collectAgentJobs**: bool: Flag for whether to collect agent jobs from source server.
* **collectLogins**: bool: Flag for whether to collect logins from source server.
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
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly): SQL Server compatibility level of database. Possible values include: 'CompatLevel80', 'CompatLevel90', 'CompatLevel100', 'CompatLevel110', 'CompatLevel120', 'CompatLevel130', 'CompatLevel140'
* **databaseFiles**: [DatabaseFileInfo](#databasefileinfo)[] (ReadOnly): The list of database files
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly): State of the database. Possible values include: 'Online', 'Restoring', 'Recovering', 'RecoveryPending', 'Suspect', 'Emergency', 'Offline', 'Copying', 'OfflineSecondary'
* **name**: string (ReadOnly): Database name
* **resultType**: 'DatabaseLevelOutput' (Required):
* **sizeMB**: int (ReadOnly): Size of the file in megabytes

### LoginLevelOutput
#### Properties
* **defaultDatabase**: string (ReadOnly): The default database for the login.
* **isEnabled**: bool (ReadOnly): The state of the login.
* **loginType**: 'AsymmetricKey' | 'Certificate' | 'ExternalGroup' | 'ExternalUser' | 'SqlLogin' | 'WindowsGroup' | 'WindowsUser' (ReadOnly): The type of login. Possible values include: 'WindowsUser', 'WindowsGroup', 'SqlLogin', 'Certificate', 'AsymmetricKey', 'ExternalUser', 'ExternalGroup'
* **migrationEligibility**: [MigrationEligibilityInfo](#migrationeligibilityinfo) (ReadOnly): Information about migration eligibility of a server object
* **name**: string (ReadOnly): Login name.
* **resultType**: 'LoginLevelOutput' (Required):

### TaskLevelOutput
#### Properties
* **agentJobs**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Source agent jobs as a map from agent job name to id.
* **databases**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Source databases as a map from database name to database id
* **logins**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Source logins as a map from login name to login id.
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
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly): SQL Server compatibility level of database. Possible values include: 'CompatLevel80', 'CompatLevel90', 'CompatLevel100', 'CompatLevel110', 'CompatLevel120', 'CompatLevel130', 'CompatLevel140'
* **databaseFiles**: [DatabaseFileInfo](#databasefileinfo)[] (ReadOnly): The list of database files
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly): State of the database. Possible values include: 'Online', 'Restoring', 'Recovering', 'RecoveryPending', 'Suspect', 'Emergency', 'Offline', 'Copying', 'OfflineSecondary'
* **name**: string (ReadOnly): Database name
* **resultType**: 'DatabaseLevelOutput' (Required):
* **sizeMB**: int (ReadOnly): Size of the file in megabytes

## DatabaseFileInfo
### Properties
* **databaseName**: string: Name of the database
* **fileType**: 'Filestream' | 'Fulltext' | 'Log' | 'NotSupported' | 'Rows': Database file type. Possible values include: 'Rows', 'Log', 'Filestream', 'NotSupported', 'Fulltext'
* **id**: string: Unique identifier for database file
* **logicalName**: string: Logical name of the file
* **physicalFullName**: string: Operating-system full path of the file
* **restoreFullName**: string: Suggested full path of the file for restoring
* **sizeMB**: int: Size of the file in megabytes

## LoginLevelOutput
### Properties
* **defaultDatabase**: string (ReadOnly): The default database for the login.
* **isEnabled**: bool (ReadOnly): The state of the login.
* **loginType**: 'AsymmetricKey' | 'Certificate' | 'ExternalGroup' | 'ExternalUser' | 'SqlLogin' | 'WindowsGroup' | 'WindowsUser' (ReadOnly): The type of login. Possible values include: 'WindowsUser', 'WindowsGroup', 'SqlLogin', 'Certificate', 'AsymmetricKey', 'ExternalUser', 'ExternalGroup'
* **migrationEligibility**: [MigrationEligibilityInfo](#migrationeligibilityinfo) (ReadOnly): Information about migration eligibility of a server object
* **name**: string (ReadOnly): Login name.
* **resultType**: 'LoginLevelOutput' (Required):

## TaskLevelOutput
### Properties
* **agentJobs**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Source agent jobs as a map from agent job name to id.
* **databases**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Source databases as a map from database name to database id
* **logins**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Source logins as a map from login name to login id.
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

## ConnectToSource.SqlServer.Sync
### Properties
* **input**: [ConnectToSourceSqlServerTaskInput](#connecttosourcesqlservertaskinput): Input for the task that validates connection to SQL Server and also validates source server requirements
* **output**: [ConnectToSourceSqlServerTaskOutput](#connecttosourcesqlservertaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToSource.SqlServer.Sync' (Required): Properties for the task that validates connection to SQL Server and source server requirements for online migration

## ConnectToTarget.AzureDbForMySql
### Properties
* **input**: [ConnectToTargetAzureDbForMySqlTaskInput](#connecttotargetazuredbformysqltaskinput): Input for the task that validates connection to Azure Database for MySQL and target server requirements
* **output**: [ConnectToTargetAzureDbForMySqlTaskOutput](#connecttotargetazuredbformysqltaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.AzureDbForMySql' (Required): Properties for the task that validates connection to Azure Database for MySQL and target server requirements

## ConnectToTargetAzureDbForMySqlTaskInput
### Properties
* **sourceConnectionInfo**: [MySqlConnectionInfo](#mysqlconnectioninfo) (Required): Information for connecting to MySQL server
* **targetConnectionInfo**: [MySqlConnectionInfo](#mysqlconnectioninfo) (Required): Information for connecting to MySQL server

## ConnectToTargetAzureDbForMySqlTaskOutput
### Properties
* **databases**: string[] (ReadOnly): List of databases on target server
* **id**: string (ReadOnly): Result identifier
* **serverVersion**: string (ReadOnly): Version of the target server
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors associated with the task

## ConnectToTarget.AzureDbForPostgreSql.Sync
### Properties
* **input**: [ConnectToTargetAzureDbForPostgreSqlSyncTaskInput](#connecttotargetazuredbforpostgresqlsynctaskinput): Input for the task that validates connection to Azure Database for PostgreSQL and target server requirements
* **output**: [ConnectToTargetAzureDbForPostgreSqlSyncTaskOutput](#connecttotargetazuredbforpostgresqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.AzureDbForPostgreSql.Sync' (Required): Properties for the task that validates connection to Azure Database For PostgreSQL server and target server requirements for online migration

## ConnectToTargetAzureDbForPostgreSqlSyncTaskInput
### Properties
* **sourceConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required): Information for connecting to PostgreSQL server
* **targetConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required): Information for connecting to PostgreSQL server

## ConnectToTargetAzureDbForPostgreSqlSyncTaskOutput
### Properties
* **databases**: string[] (ReadOnly): List of databases on target server
* **id**: string (ReadOnly): Result identifier
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Version of the target server
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors associated with the task

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
* **agentJobs**: string[] (ReadOnly): List of agent jobs on the target server.
* **id**: string (ReadOnly): Result identifier
* **logins**: string[] (ReadOnly): List of logins on the target server.
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Target server version
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

## ConnectToTarget.AzureSqlDbMI.Sync.LRS
### Properties
* **input**: [ConnectToTargetSqlMISyncTaskInput](#connecttotargetsqlmisynctaskinput): Input for the task that validates connection to Azure SQL Database Managed Instance online scenario.
* **output**: [ConnectToTargetSqlMISyncTaskOutput](#connecttotargetsqlmisynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.AzureSqlDbMI.Sync.LRS' (Required): Properties for the task that validates connection to Azure SQL Database Managed Instance

## ConnectToTargetSqlMISyncTaskInput
### Properties
* **azureApp**: [AzureActiveDirectoryApp](#azureactivedirectoryapp) (Required): Azure Active Directory Application
* **targetConnectionInfo**: [MiSqlConnectionInfo](#misqlconnectioninfo) (Required): Properties required to create a connection to Azure SQL database Managed instance

## AzureActiveDirectoryApp
### Properties
* **appKey**: string (Required): Key used to authenticate to the Azure Active Directory Application
* **applicationId**: string (Required): Application ID of the Azure Active Directory Application
* **tenantId**: string (Required): Tenant id of the customer

## ConnectToTargetSqlMISyncTaskOutput
### Properties
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

## ConnectToTarget.SqlDb.Sync
### Properties
* **input**: [ConnectToTargetSqlSqlDbSyncTaskInput](#connecttotargetsqlsqldbsynctaskinput): Input for the task that validates connection to Azure SQL DB and target server requirements
* **output**: [ConnectToTargetSqlDbTaskOutput](#connecttotargetsqldbtaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.SqlDb.Sync' (Required): Properties for the task that validates connection to SQL DB and target server requirements for online migration

## ConnectToTargetSqlSqlDbSyncTaskInput
### Properties
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server

## GetTDECertificates.Sql
### Properties
* **input**: [GetTdeCertificatesSqlTaskInput](#gettdecertificatessqltaskinput): Input for the task that gets TDE certificates in Base64 encoded format.
* **output**: [GetTdeCertificatesSqlTaskOutput](#gettdecertificatessqltaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'GetTDECertificates.Sql' (Required): Properties for the task that gets TDE certificates in Base64 encoded format.

## GetTdeCertificatesSqlTaskInput
### Properties
* **backupFileShare**: [FileShare](#fileshare) (Required): File share information with Path, Username, and Password.
* **connectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
* **selectedCertificates**: [SelectedCertificateInput](#selectedcertificateinput)[] (Required): List containing certificate names and corresponding password to use for encrypting the exported certificate.

## FileShare
### Properties
* **password**: string: Password credential used to connect to the share location.
* **path**: string (Required): The folder path for this share.
* **userName**: string: User name credential to connect to the share location

## SelectedCertificateInput
### Properties
* **certificateName**: string (Required): Name of certificate to be exported.
* **password**: string (Required): Password to use for encrypting the exported certificate.

## GetTdeCertificatesSqlTaskOutput
### Properties
* **base64EncodedCertificates**: [Dictionary<string,IList<String>>](#dictionarystringiliststring) (ReadOnly): Mapping from certificate name to base 64 encoded format.
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

## Dictionary<string,IList<String>>
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

## GetUserTables.AzureSqlDb.Sync
### Properties
* **input**: [GetUserTablesSqlSyncTaskInput](#getusertablessqlsynctaskinput): Input for the task that collects user tables for the given list of databases
* **output**: [GetUserTablesSqlSyncTaskOutput](#getusertablessqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'GetUserTables.AzureSqlDb.Sync' (Required): Properties for the task that collects user tables for the given list of databases

## GetUserTablesSqlSyncTaskInput
### Properties
* **selectedSourceDatabases**: string[] (Required): List of source database names to collect tables for
* **selectedTargetDatabases**: string[] (Required): List of target database names to collect tables for
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server

## GetUserTablesSqlSyncTaskOutput
### Properties
* **databasesToSourceTables**: [Dictionary<string,IList<DatabaseTable>>](#dictionarystringilistdatabasetable) (ReadOnly): Mapping from database name to list of source tables
* **databasesToTargetTables**: [Dictionary<string,IList<DatabaseTable>>](#dictionarystringilistdatabasetable) (ReadOnly): Mapping from database name to list of target tables
* **tableValidationErrors**: [Dictionary<string,IList<String>>](#dictionarystringiliststring) (ReadOnly): Mapping from database name to list of validation errors
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

## Dictionary<string,IList<DatabaseTable>>
### Properties
### Additional Properties
* **Additional Properties Type**: [DatabaseTable](#databasetable)[]

## DatabaseTable
### Properties
* **hasRows**: bool (ReadOnly): Indicates whether table is empty or not
* **name**: string (ReadOnly): Schema-qualified name of the table

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

## Migrate.MySql.AzureDbForMySql.Sync
### Properties
* **input**: [MigrateMySqlAzureDbForMySqlSyncTaskInput](#migratemysqlazuredbformysqlsynctaskinput): Input for the task that migrates MySQL databases to Azure Database for MySQL for online migrations
* **output**: [MigrateMySqlAzureDbForMySqlSyncTaskOutput](#migratemysqlazuredbformysqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.MySql.AzureDbForMySql.Sync' (Required): Properties for the task that migrates MySQL databases to Azure Database for MySQL for online migrations

## MigrateMySqlAzureDbForMySqlSyncTaskInput
### Properties
* **selectedDatabases**: [MigrateMySqlAzureDbForMySqlSyncDatabaseInput](#migratemysqlazuredbformysqlsyncdatabaseinput)[] (Required): Databases to migrate
* **sourceConnectionInfo**: [MySqlConnectionInfo](#mysqlconnectioninfo) (Required): Information for connecting to MySQL server
* **targetConnectionInfo**: [MySqlConnectionInfo](#mysqlconnectioninfo) (Required): Information for connecting to MySQL server

## MigrateMySqlAzureDbForMySqlSyncDatabaseInput
### Properties
* **migrationSetting**: [Dictionary<string,String>](#dictionarystringstring): Migration settings which tune the migration behavior
* **name**: string: Name of the database
* **sourceSetting**: [Dictionary<string,String>](#dictionarystringstring): Source settings to tune source endpoint migration behavior
* **targetDatabaseName**: string: Name of target database. Note: Target database will be truncated before starting migration.
* **targetSetting**: [Dictionary<string,String>](#dictionarystringstring): Target settings to tune target endpoint migration behavior

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
* **id**: string (ReadOnly): Result identifier
### DatabaseLevelErrorOutput
#### Properties
* **errorMessage**: string: Error message
* **events**: [SyncMigrationDatabaseErrorEvent](#syncmigrationdatabaseerrorevent)[]: List of error events.
* **resultType**: 'DatabaseLevelErrorOutput' (Required):

### DatabaseLevelOutput
#### Properties
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly): SQL Server compatibility level of database. Possible values include: 'CompatLevel80', 'CompatLevel90', 'CompatLevel100', 'CompatLevel110', 'CompatLevel120', 'CompatLevel130', 'CompatLevel140'
* **databaseFiles**: [DatabaseFileInfo](#databasefileinfo)[] (ReadOnly): The list of database files
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly): State of the database. Possible values include: 'Online', 'Restoring', 'Recovering', 'RecoveryPending', 'Suspect', 'Emergency', 'Offline', 'Copying', 'OfflineSecondary'
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
* **orphanedUsersInfo**: [OrphanedUserInfo](#orphaneduserinfo)[] (ReadOnly): List of orphaned users.
* **resultType**: 'MigrationLevelOutput' (Required):
* **serverRoleResults**: [Dictionary<string,StartMigrationScenarioServerRoleResult>](#dictionarystringstartmigrationscenarioserverroleresult) (ReadOnly): Map of server role migration results.
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration. Possible values include: 'None', 'InProgress', 'Failed', 'Warning', 'Completed', 'Skipped', 'Stopped'
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly): Current status of migration. Possible values include: 'Default', 'Connecting', 'SourceAndTargetSelected', 'SelectLogins', 'Configured', 'Running', 'Error', 'Stopped', 'Completed', 'CompletedWithWarnings'
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
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration. Possible values include: 'None', 'InProgress', 'Failed', 'Warning', 'Completed', 'Skipped', 'Stopped'
* **statusMessage**: string (ReadOnly): Status message


## DatabaseLevelErrorOutput
### Properties
* **errorMessage**: string: Error message
* **events**: [SyncMigrationDatabaseErrorEvent](#syncmigrationdatabaseerrorevent)[]: List of error events.
* **resultType**: 'DatabaseLevelErrorOutput' (Required):

## SyncMigrationDatabaseErrorEvent
### Properties
* **eventText**: string (ReadOnly): Event text.
* **eventTypeString**: string (ReadOnly): Event type.
* **timestampString**: string (ReadOnly): String value of timestamp.

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
* **orphanedUsersInfo**: [OrphanedUserInfo](#orphaneduserinfo)[] (ReadOnly): List of orphaned users.
* **resultType**: 'MigrationLevelOutput' (Required):
* **serverRoleResults**: [Dictionary<string,StartMigrationScenarioServerRoleResult>](#dictionarystringstartmigrationscenarioserverroleresult) (ReadOnly): Map of server role migration results.
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration. Possible values include: 'None', 'InProgress', 'Failed', 'Warning', 'Completed', 'Skipped', 'Stopped'
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly): Current status of migration. Possible values include: 'Default', 'Connecting', 'SourceAndTargetSelected', 'SelectLogins', 'Configured', 'Running', 'Error', 'Stopped', 'Completed', 'CompletedWithWarnings'
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

## OrphanedUserInfo
### Properties
* **databaseName**: string: Parent database of the user
* **name**: string: Name of the orphaned user

## Dictionary<string,StartMigrationScenarioServerRoleResult>
### Properties
### Additional Properties
* **Additional Properties Type**: [StartMigrationScenarioServerRoleResult](#startmigrationscenarioserverroleresult)

## StartMigrationScenarioServerRoleResult
### Properties
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly): Migration exceptions and warnings.
* **name**: string (ReadOnly): Name of server role.
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration. Possible values include: 'None', 'InProgress', 'Failed', 'Warning', 'Completed', 'Skipped', 'Stopped'

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
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration. Possible values include: 'None', 'InProgress', 'Failed', 'Warning', 'Completed', 'Skipped', 'Stopped'
* **statusMessage**: string (ReadOnly): Status message

## Migrate.PostgreSql.AzureDbForPostgreSql.Sync
### Properties
* **input**: [MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput](#migratepostgresqlazuredbforpostgresqlsynctaskinput): Input for the task that migrates PostgreSQL databases to Azure Database for PostgreSQL for online migrations
* **output**: [MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput](#migratepostgresqlazuredbforpostgresqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.PostgreSql.AzureDbForPostgreSql.Sync' (Required): Properties for the task that migrates PostgreSQL databases to Azure Database for PostgreSQL for online migrations

## MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput
### Properties
* **selectedDatabases**: [MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput](#migratepostgresqlazuredbforpostgresqlsyncdatabaseinput)[] (Required): Databases to migrate
* **sourceConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required): Information for connecting to PostgreSQL server
* **targetConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required): Information for connecting to PostgreSQL server

## MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput
### Properties
* **migrationSetting**: [Dictionary<string,String>](#dictionarystringstring): Migration settings which tune the migration behavior
* **name**: string: Name of the database
* **sourceSetting**: [Dictionary<string,String>](#dictionarystringstring): Source settings to tune source endpoint migration behavior
* **targetDatabaseName**: string: Name of target database. Note: Target database will be truncated before starting migration.
* **targetSetting**: [Dictionary<string,String>](#dictionarystringstring): Target settings to tune target endpoint migration behavior

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
* **id**: string (ReadOnly): Result identifier
### DatabaseLevelErrorOutput
#### Properties
* **errorMessage**: string: Error message
* **events**: [SyncMigrationDatabaseErrorEvent](#syncmigrationdatabaseerrorevent)[]: List of error events.
* **resultType**: 'DatabaseLevelErrorOutput' (Required):

### DatabaseLevelOutput
#### Properties
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly): SQL Server compatibility level of database. Possible values include: 'CompatLevel80', 'CompatLevel90', 'CompatLevel100', 'CompatLevel110', 'CompatLevel120', 'CompatLevel130', 'CompatLevel140'
* **databaseFiles**: [DatabaseFileInfo](#databasefileinfo)[] (ReadOnly): The list of database files
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly): State of the database. Possible values include: 'Online', 'Restoring', 'Recovering', 'RecoveryPending', 'Suspect', 'Emergency', 'Offline', 'Copying', 'OfflineSecondary'
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
* **orphanedUsersInfo**: [OrphanedUserInfo](#orphaneduserinfo)[] (ReadOnly): List of orphaned users.
* **resultType**: 'MigrationLevelOutput' (Required):
* **serverRoleResults**: [Dictionary<string,StartMigrationScenarioServerRoleResult>](#dictionarystringstartmigrationscenarioserverroleresult) (ReadOnly): Map of server role migration results.
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration. Possible values include: 'None', 'InProgress', 'Failed', 'Warning', 'Completed', 'Skipped', 'Stopped'
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly): Current status of migration. Possible values include: 'Default', 'Connecting', 'SourceAndTargetSelected', 'SelectLogins', 'Configured', 'Running', 'Error', 'Stopped', 'Completed', 'CompletedWithWarnings'
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
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration. Possible values include: 'None', 'InProgress', 'Failed', 'Warning', 'Completed', 'Skipped', 'Stopped'
* **statusMessage**: string (ReadOnly): Status message


## Migrate.SqlServer.AzureSqlDb.Sync
### Properties
* **input**: [MigrateSqlServerSqlDbSyncTaskInput](#migratesqlserversqldbsynctaskinput): Input for the task that migrates on-prem SQL Server databases to Azure SQL Database for online migrations
* **output**: [MigrateSqlServerSqlDbSyncTaskOutput](#migratesqlserversqldbsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.SqlServer.AzureSqlDb.Sync' (Required): Properties for the task that migrates on-prem SQL Server databases to Azure SQL Database for online migrations

## MigrateSqlServerSqlDbSyncTaskInput
### Properties
* **selectedDatabases**: [MigrateSqlServerSqlDbSyncDatabaseInput](#migratesqlserversqldbsyncdatabaseinput)[] (Required): Databases to migrate
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
* **validationOptions**: [MigrationValidationOptions](#migrationvalidationoptions): Types of validations to run after the migration

## MigrateSqlServerSqlDbSyncDatabaseInput
### Properties
* **id**: string: Unique identifier for database
* **migrationSetting**: [Dictionary<string,String>](#dictionarystringstring): Migration settings which tune the migration behavior
* **name**: string: Name of database
* **schemaName**: string: Schema name to be migrated
* **sourceSetting**: [Dictionary<string,String>](#dictionarystringstring): Source settings to tune source endpoint migration behavior
* **tableMap**: [Dictionary<string,String>](#dictionarystringstring): Mapping of source to target tables
* **targetDatabaseName**: string: Target database name
* **targetSetting**: [Dictionary<string,String>](#dictionarystringstring): Target settings to tune target endpoint migration behavior

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
* **enableDataIntegrityValidation**: bool: Allows to perform a checksum based data integrity validation between source and target for the selected database / tables .
* **enableQueryAnalysisValidation**: bool: Allows to perform a quick and intelligent query analysis by retrieving queries from the source database and executes them in the target. The result will have execution statistics for executions in source and target databases for the extracted queries.
* **enableSchemaValidation**: bool: Allows to compare the schema information between source and target.

## MigrateSqlServerSqlDbSyncTaskOutput
* **Discriminator**: resultType
### Base Properties
* **id**: string (ReadOnly): Result identifier
### DatabaseLevelErrorOutput
#### Properties
* **errorMessage**: string: Error message
* **events**: [SyncMigrationDatabaseErrorEvent](#syncmigrationdatabaseerrorevent)[]: List of error events.
* **resultType**: 'DatabaseLevelErrorOutput' (Required):

### DatabaseLevelOutput
#### Properties
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly): SQL Server compatibility level of database. Possible values include: 'CompatLevel80', 'CompatLevel90', 'CompatLevel100', 'CompatLevel110', 'CompatLevel120', 'CompatLevel130', 'CompatLevel140'
* **databaseFiles**: [DatabaseFileInfo](#databasefileinfo)[] (ReadOnly): The list of database files
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly): State of the database. Possible values include: 'Online', 'Restoring', 'Recovering', 'RecoveryPending', 'Suspect', 'Emergency', 'Offline', 'Copying', 'OfflineSecondary'
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
* **orphanedUsersInfo**: [OrphanedUserInfo](#orphaneduserinfo)[] (ReadOnly): List of orphaned users.
* **resultType**: 'MigrationLevelOutput' (Required):
* **serverRoleResults**: [Dictionary<string,StartMigrationScenarioServerRoleResult>](#dictionarystringstartmigrationscenarioserverroleresult) (ReadOnly): Map of server role migration results.
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration. Possible values include: 'None', 'InProgress', 'Failed', 'Warning', 'Completed', 'Skipped', 'Stopped'
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly): Current status of migration. Possible values include: 'Default', 'Connecting', 'SourceAndTargetSelected', 'SelectLogins', 'Configured', 'Running', 'Error', 'Stopped', 'Completed', 'CompletedWithWarnings'
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
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration. Possible values include: 'None', 'InProgress', 'Failed', 'Warning', 'Completed', 'Skipped', 'Stopped'
* **statusMessage**: string (ReadOnly): Status message


## Migrate.SqlServer.AzureSqlDbMI
### Properties
* **input**: [MigrateSqlServerSqlMITaskInput](#migratesqlserversqlmitaskinput): Input for task that migrates SQL Server databases to Azure SQL Database Managed Instance.
* **output**: [MigrateSqlServerSqlMITaskOutput](#migratesqlserversqlmitaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.SqlServer.AzureSqlDbMI' (Required): Properties for task that migrates SQL Server databases to Azure SQL Database Managed Instance

## MigrateSqlServerSqlMITaskInput
### Properties
* **backupBlobShare**: [BlobShare](#blobshare) (Required): Blob container storage information.
* **backupFileShare**: [FileShare](#fileshare): File share information with Path, Username, and Password.
* **backupMode**: 'CreateBackup' | 'ExistingBackup': Backup Mode to specify whether to use existing backup or create new backup. If using existing backups, backup file paths are required to be provided in selectedDatabases. Possible values include: 'CreateBackup', 'ExistingBackup'
* **selectedAgentJobs**: string[]: Agent Jobs to migrate.
* **selectedDatabases**: [MigrateSqlServerSqlMIDatabaseInput](#migratesqlserversqlmidatabaseinput)[] (Required): Databases to migrate
* **selectedLogins**: string[]: Logins to migrate.
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server

## BlobShare
### Properties
* **sasUri**: string (Required): SAS URI of Azure Storage Account Container.

## MigrateSqlServerSqlMIDatabaseInput
### Properties
* **backupFilePaths**: string[]: The list of backup files to be used in case of existing backups.
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
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly): SQL Server compatibility level of database. Possible values include: 'CompatLevel80', 'CompatLevel90', 'CompatLevel100', 'CompatLevel110', 'CompatLevel120', 'CompatLevel130', 'CompatLevel140'
* **databaseFiles**: [DatabaseFileInfo](#databasefileinfo)[] (ReadOnly): The list of database files
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly): State of the database. Possible values include: 'Online', 'Restoring', 'Recovering', 'RecoveryPending', 'Suspect', 'Emergency', 'Offline', 'Copying', 'OfflineSecondary'
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
* **loginType**: 'AsymmetricKey' | 'Certificate' | 'ExternalGroup' | 'ExternalUser' | 'SqlLogin' | 'WindowsGroup' | 'WindowsUser' (ReadOnly): The type of login. Possible values include: 'WindowsUser', 'WindowsGroup', 'SqlLogin', 'Certificate', 'AsymmetricKey', 'ExternalUser', 'ExternalGroup'
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
* **orphanedUsersInfo**: [OrphanedUserInfo](#orphaneduserinfo)[] (ReadOnly): List of orphaned users.
* **resultType**: 'MigrationLevelOutput' (Required):
* **serverRoleResults**: [Dictionary<string,StartMigrationScenarioServerRoleResult>](#dictionarystringstartmigrationscenarioserverroleresult) (ReadOnly): Map of server role migration results.
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration. Possible values include: 'None', 'InProgress', 'Failed', 'Warning', 'Completed', 'Skipped', 'Stopped'
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly): Current status of migration. Possible values include: 'Default', 'Connecting', 'SourceAndTargetSelected', 'SelectLogins', 'Configured', 'Running', 'Error', 'Stopped', 'Completed', 'CompletedWithWarnings'
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Target server version


## Migrate.SqlServer.AzureSqlDbMI.Sync.LRS
### Properties
* **input**: [MigrateSqlServerSqlMISyncTaskInput](#migratesqlserversqlmisynctaskinput): Input for task that migrates SQL Server databases to Azure SQL Database Managed Instance online scenario.
* **output**: [MigrateSqlServerSqlMISyncTaskOutput](#migratesqlserversqlmisynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.SqlServer.AzureSqlDbMI.Sync.LRS' (Required): Properties for task that migrates SQL Server databases to Azure SQL Database Managed Instance sync scenario

## MigrateSqlServerSqlMISyncTaskInput
### Properties
* **azureApp**: [AzureActiveDirectoryApp](#azureactivedirectoryapp) (Required): Azure Active Directory Application
* **backupFileShare**: [FileShare](#fileshare): File share information with Path, Username, and Password.
* **selectedDatabases**: [MigrateSqlServerSqlMIDatabaseInput](#migratesqlserversqlmidatabaseinput)[] (Required): Databases to migrate
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
* **storageResourceId**: string (Required): Fully qualified resourceId of storage
* **targetConnectionInfo**: [MiSqlConnectionInfo](#misqlconnectioninfo) (Required): Properties required to create a connection to Azure SQL database Managed instance

## MigrateSqlServerSqlMISyncTaskOutput
* **Discriminator**: resultType
### Base Properties
* **id**: string (ReadOnly): Result identifier
### DatabaseLevelOutput
#### Properties
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly): SQL Server compatibility level of database. Possible values include: 'CompatLevel80', 'CompatLevel90', 'CompatLevel100', 'CompatLevel110', 'CompatLevel120', 'CompatLevel130', 'CompatLevel140'
* **databaseFiles**: [DatabaseFileInfo](#databasefileinfo)[] (ReadOnly): The list of database files
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly): State of the database. Possible values include: 'Online', 'Restoring', 'Recovering', 'RecoveryPending', 'Suspect', 'Emergency', 'Offline', 'Copying', 'OfflineSecondary'
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
* **orphanedUsersInfo**: [OrphanedUserInfo](#orphaneduserinfo)[] (ReadOnly): List of orphaned users.
* **resultType**: 'MigrationLevelOutput' (Required):
* **serverRoleResults**: [Dictionary<string,StartMigrationScenarioServerRoleResult>](#dictionarystringstartmigrationscenarioserverroleresult) (ReadOnly): Map of server role migration results.
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration. Possible values include: 'None', 'InProgress', 'Failed', 'Warning', 'Completed', 'Skipped', 'Stopped'
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly): Current status of migration. Possible values include: 'Default', 'Connecting', 'SourceAndTargetSelected', 'SelectLogins', 'Configured', 'Running', 'Error', 'Stopped', 'Completed', 'CompletedWithWarnings'
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Target server version


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

## MigrateSqlServerSqlDbTaskOutput
* **Discriminator**: resultType
### Base Properties
* **id**: string (ReadOnly): Result identifier
### DatabaseLevelOutput
#### Properties
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly): SQL Server compatibility level of database. Possible values include: 'CompatLevel80', 'CompatLevel90', 'CompatLevel100', 'CompatLevel110', 'CompatLevel120', 'CompatLevel130', 'CompatLevel140'
* **databaseFiles**: [DatabaseFileInfo](#databasefileinfo)[] (ReadOnly): The list of database files
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly): State of the database. Possible values include: 'Online', 'Restoring', 'Recovering', 'RecoveryPending', 'Suspect', 'Emergency', 'Offline', 'Copying', 'OfflineSecondary'
* **name**: string (ReadOnly): Database name
* **resultType**: 'DatabaseLevelOutput' (Required):
* **sizeMB**: int (ReadOnly): Size of the file in megabytes

### ErrorOutput
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Exception object for all custom exceptions
* **resultType**: 'ErrorOutput' (Required):

### MigrationDatabaseLevelValidationOutput
#### Properties
* **dataIntegrityValidationResult**: [DataIntegrityValidationResult](#dataintegrityvalidationresult) (ReadOnly): Results for checksum based Data Integrity validation results
* **endedOn**: string (ReadOnly): Validation end time
* **migrationId**: string (ReadOnly): Migration Identifier
* **queryAnalysisValidationResult**: [QueryAnalysisValidationResult](#queryanalysisvalidationresult) (ReadOnly): Results for query analysis comparison between the source and target
* **resultType**: 'MigrationDatabaseLevelValidationOutput' (Required): Database validation result for Sql Server to Azure Sql DB migration.
* **schemaValidationResult**: [SchemaComparisonValidationResult](#schemacomparisonvalidationresult) (ReadOnly): Results for schema comparison between the source and target
* **sourceDatabaseName**: string (ReadOnly): Name of the source database
* **startedOn**: string (ReadOnly): Validation start time
* **status**: 'Completed' | 'CompletedWithIssues' | 'Default' | 'Failed' | 'Initialized' | 'InProgress' | 'NotStarted' | 'Stopped' (ReadOnly): Current status of validation at the database level. Possible values include: 'Default', 'NotStarted', 'Initialized', 'InProgress', 'Completed', 'CompletedWithIssues', 'Failed', 'Stopped'
* **targetDatabaseName**: string (ReadOnly): Name of the target database

### MigrationLevelOutput
#### Properties
* **agentJobs**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Selected agent jobs as a map from name to id
* **databases**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Selected databases as a map from database name to database id
* **endedOn**: string (ReadOnly): Migration end time
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly): Migration exceptions and warnings.
* **logins**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Selected logins as a map from name to id
* **message**: string (ReadOnly): Migration progress message
* **orphanedUsersInfo**: [OrphanedUserInfo](#orphaneduserinfo)[] (ReadOnly): List of orphaned users.
* **resultType**: 'MigrationLevelOutput' (Required):
* **serverRoleResults**: [Dictionary<string,StartMigrationScenarioServerRoleResult>](#dictionarystringstartmigrationscenarioserverroleresult) (ReadOnly): Map of server role migration results.
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration. Possible values include: 'None', 'InProgress', 'Failed', 'Warning', 'Completed', 'Skipped', 'Stopped'
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly): Current status of migration. Possible values include: 'Default', 'Connecting', 'SourceAndTargetSelected', 'SelectLogins', 'Configured', 'Running', 'Error', 'Stopped', 'Completed', 'CompletedWithWarnings'
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Target server version

### MigrationValidationOutput
#### Properties
* **migrationId**: string (ReadOnly): Migration Identifier
* **resultType**: 'MigrationValidationOutput' (Required): Validation result for Sql Server to Azure Sql DB migration.
* **status**: 'Completed' | 'CompletedWithIssues' | 'Default' | 'Failed' | 'Initialized' | 'InProgress' | 'NotStarted' | 'Stopped' (ReadOnly): Current status of validation at the migration level. Status from the database validation result status will be aggregated here. Possible values include: 'Default', 'NotStarted', 'Initialized', 'InProgress', 'Completed', 'CompletedWithIssues', 'Failed', 'Stopped'
* **summaryResults**: [Dictionary<string,MigrationValidationDatabaseSummaryResult>](#dictionarystringmigrationvalidationdatabasesummaryresult): Validation summary results for each database

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
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration. Possible values include: 'None', 'InProgress', 'Failed', 'Warning', 'Completed', 'Skipped', 'Stopped'
* **statusMessage**: string (ReadOnly): Status message


## MigrationDatabaseLevelValidationOutput
### Properties
* **dataIntegrityValidationResult**: [DataIntegrityValidationResult](#dataintegrityvalidationresult) (ReadOnly): Results for checksum based Data Integrity validation results
* **endedOn**: string (ReadOnly): Validation end time
* **migrationId**: string (ReadOnly): Migration Identifier
* **queryAnalysisValidationResult**: [QueryAnalysisValidationResult](#queryanalysisvalidationresult) (ReadOnly): Results for query analysis comparison between the source and target
* **resultType**: 'MigrationDatabaseLevelValidationOutput' (Required): Database validation result for Sql Server to Azure Sql DB migration.
* **schemaValidationResult**: [SchemaComparisonValidationResult](#schemacomparisonvalidationresult) (ReadOnly): Results for schema comparison between the source and target
* **sourceDatabaseName**: string (ReadOnly): Name of the source database
* **startedOn**: string (ReadOnly): Validation start time
* **status**: 'Completed' | 'CompletedWithIssues' | 'Default' | 'Failed' | 'Initialized' | 'InProgress' | 'NotStarted' | 'Stopped' (ReadOnly): Current status of validation at the database level. Possible values include: 'Default', 'NotStarted', 'Initialized', 'InProgress', 'Completed', 'CompletedWithIssues', 'Failed', 'Stopped'
* **targetDatabaseName**: string (ReadOnly): Name of the target database

## DataIntegrityValidationResult
### Properties
* **failedObjects**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): List of failed table names of source and target pair
* **validationErrors**: [ValidationError](#validationerror) (ReadOnly): Description about the errors happen while performing migration validation

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ValidationError
### Properties
* **severity**: 'Error' | 'Message' | 'Warning' (ReadOnly): Severity of the error. Possible values include: 'Message', 'Warning', 'Error'
* **text**: string (ReadOnly): Error Text

## QueryAnalysisValidationResult
### Properties
* **queryResults**: [QueryExecutionResult](#queryexecutionresult) (ReadOnly): Describes query analysis results for execution in source and target
* **validationErrors**: [ValidationError](#validationerror) (ReadOnly): Description about the errors happen while performing migration validation

## QueryExecutionResult
### Properties
* **queryText**: string (ReadOnly): Query text retrieved from the source server
* **sourceResult**: [ExecutionStatistics](#executionstatistics) (ReadOnly): Description about the errors happen while performing migration validation
* **statementsInBatch**: int (ReadOnly): Total no. of statements in the batch
* **targetResult**: [ExecutionStatistics](#executionstatistics) (ReadOnly): Description about the errors happen while performing migration validation

## ExecutionStatistics
### Properties
* **cpuTimeMs**: int (ReadOnly): CPU Time in millisecond(s) for the query execution
* **elapsedTimeMs**: int (ReadOnly): Time taken in millisecond(s) for executing the query
* **executionCount**: int (ReadOnly): No. of query executions
* **hasErrors**: bool (ReadOnly): Indicates whether the query resulted in an error
* **sqlErrors**: string[] (ReadOnly): List of sql Errors
* **waitStats**: [Dictionary<string,WaitStatistics>](#dictionarystringwaitstatistics): Dictionary of sql query execution wait types and the respective statistics

## Dictionary<string,WaitStatistics>
### Properties
### Additional Properties
* **Additional Properties Type**: [WaitStatistics](#waitstatistics)

## WaitStatistics
### Properties
* **waitCount**: int (ReadOnly): Total no. of waits
* **waitTimeMs**: int (ReadOnly): Total wait time in millisecond(s)
* **waitType**: string (ReadOnly): Type of the Wait

## SchemaComparisonValidationResult
### Properties
* **schemaDifferences**: [SchemaComparisonValidationResultType](#schemacomparisonvalidationresulttype) (ReadOnly): Description about the errors happen while performing migration validation
* **sourceDatabaseObjectCount**: [Dictionary<string,Long>](#dictionarystringlong): Count of source database objects
* **targetDatabaseObjectCount**: [Dictionary<string,Long>](#dictionarystringlong): Count of target database objects
* **validationErrors**: [ValidationError](#validationerror) (ReadOnly): Description about the errors happen while performing migration validation

## SchemaComparisonValidationResultType
### Properties
* **objectName**: string (ReadOnly): Name of the object that has the difference
* **objectType**: 'Function' | 'StoredProcedures' | 'Table' | 'User' | 'View' (ReadOnly): Type of the object that has the difference. e.g (Table/View/StoredProcedure). Possible values include: 'StoredProcedures', 'Table', 'User', 'View', 'Function'
* **updateAction**: 'AddedOnTarget' | 'ChangedOnTarget' | 'DeletedOnTarget' (ReadOnly): Update action type with respect to target. Possible values include: 'DeletedOnTarget', 'ChangedOnTarget', 'AddedOnTarget'

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
* **migrationId**: string (ReadOnly): Migration Identifier
* **resultType**: 'MigrationValidationOutput' (Required): Validation result for Sql Server to Azure Sql DB migration.
* **status**: 'Completed' | 'CompletedWithIssues' | 'Default' | 'Failed' | 'Initialized' | 'InProgress' | 'NotStarted' | 'Stopped' (ReadOnly): Current status of validation at the migration level. Status from the database validation result status will be aggregated here. Possible values include: 'Default', 'NotStarted', 'Initialized', 'InProgress', 'Completed', 'CompletedWithIssues', 'Failed', 'Stopped'
* **summaryResults**: [Dictionary<string,MigrationValidationDatabaseSummaryResult>](#dictionarystringmigrationvalidationdatabasesummaryresult): Validation summary results for each database

## Dictionary<string,MigrationValidationDatabaseSummaryResult>
### Properties
### Additional Properties
* **Additional Properties Type**: [MigrationValidationDatabaseSummaryResult](#migrationvalidationdatabasesummaryresult)

## MigrationValidationDatabaseSummaryResult
### Properties
* **endedOn**: string (ReadOnly): Validation end time
* **id**: string (ReadOnly): Result identifier
* **migrationId**: string (ReadOnly): Migration Identifier
* **sourceDatabaseName**: string (ReadOnly): Name of the source database
* **startedOn**: string (ReadOnly): Validation start time
* **status**: 'Completed' | 'CompletedWithIssues' | 'Default' | 'Failed' | 'Initialized' | 'InProgress' | 'NotStarted' | 'Stopped' (ReadOnly): Current status of validation at the database level. Possible values include: 'Default', 'NotStarted', 'Initialized', 'InProgress', 'Completed', 'CompletedWithIssues', 'Failed', 'Stopped'
* **targetDatabaseName**: string (ReadOnly): Name of the target database

## ValidateMigrationInput.SqlServer.AzureSqlDbMI
### Properties
* **input**: [ValidateMigrationInputSqlServerSqlMITaskInput](#validatemigrationinputsqlserversqlmitaskinput): Input for task that validates migration input for SQL to Azure SQL Managed Instance
* **output**: [ValidateMigrationInputSqlServerSqlMITaskOutput](#validatemigrationinputsqlserversqlmitaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ValidateMigrationInput.SqlServer.AzureSqlDbMI' (Required): Properties for task that validates migration input for SQL to Azure SQL Database Managed Instance

## ValidateMigrationInputSqlServerSqlMITaskInput
### Properties
* **backupBlobShare**: [BlobShare](#blobshare) (Required): Blob container storage information.
* **backupFileShare**: [FileShare](#fileshare): File share information with Path, Username, and Password.
* **backupMode**: 'CreateBackup' | 'ExistingBackup': Backup Mode to specify whether to use existing backup or create new backup. Possible values include: 'CreateBackup', 'ExistingBackup'
* **selectedDatabases**: [MigrateSqlServerSqlMIDatabaseInput](#migratesqlserversqlmidatabaseinput)[] (Required): Databases to migrate
* **selectedLogins**: string[]: Logins to migrate
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server

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

## DatabaseBackupInfo
### Properties
* **backupFiles**: string[] (ReadOnly): The list of backup files for the current database.
* **backupFinishDate**: string (ReadOnly): Date and time when the backup operation finished.
* **backupType**: 'Database' | 'DifferentialDatabase' | 'DifferentialFile' | 'DifferentialPartial' | 'File' | 'Partial' | 'TransactionLog' (ReadOnly): Backup Type. Possible values include: 'Database', 'TransactionLog', 'File', 'DifferentialDatabase', 'DifferentialFile', 'Partial', 'DifferentialPartial'
* **databaseName**: string (ReadOnly): Database name.
* **familyCount**: int (ReadOnly): Number of files in the backup set.
* **isCompressed**: bool (ReadOnly): Whether the backup set is compressed
* **isDamaged**: bool (ReadOnly): Database was damaged when backed up, but the backup operation was requested to continue despite errors.
* **position**: int (ReadOnly): Position of current database backup in the file.

## ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS
### Properties
* **input**: [ValidateMigrationInputSqlServerSqlMISyncTaskInput](#validatemigrationinputsqlserversqlmisynctaskinput): Input for task that migrates SQL Server databases to Azure SQL Database Managed Instance online scenario.
* **output**: [ValidateMigrationInputSqlServerSqlMISyncTaskOutput](#validatemigrationinputsqlserversqlmisynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS' (Required): Properties for task that validates migration input for SQL to Azure SQL Database Managed Instance sync scenario

## ValidateMigrationInputSqlServerSqlMISyncTaskInput
### Properties
* **azureApp**: [AzureActiveDirectoryApp](#azureactivedirectoryapp) (Required): Azure Active Directory Application
* **backupFileShare**: [FileShare](#fileshare): File share information with Path, Username, and Password.
* **selectedDatabases**: [MigrateSqlServerSqlMIDatabaseInput](#migratesqlserversqlmidatabaseinput)[] (Required): Databases to migrate
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
* **storageResourceId**: string (Required): Fully qualified resourceId of storage
* **targetConnectionInfo**: [MiSqlConnectionInfo](#misqlconnectioninfo) (Required): Properties required to create a connection to Azure SQL database Managed instance

## ValidateMigrationInputSqlServerSqlMISyncTaskOutput
### Properties
* **id**: string (ReadOnly): Database identifier
* **name**: string (ReadOnly): Name of database
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Errors associated with a selected database object

## ValidateMigrationInput.SqlServer.SqlDb.Sync
### Properties
* **input**: [ValidateSyncMigrationInputSqlServerTaskInput](#validatesyncmigrationinputsqlservertaskinput): Input for task that validates migration input for SQL sync migrations
* **output**: [ValidateSyncMigrationInputSqlServerTaskOutput](#validatesyncmigrationinputsqlservertaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ValidateMigrationInput.SqlServer.SqlDb.Sync' (Required): Properties for task that validates migration input for SQL to Azure SQL DB sync migrations

## ValidateSyncMigrationInputSqlServerTaskInput
### Properties
* **selectedDatabases**: [MigrateSqlServerSqlDbSyncDatabaseInput](#migratesqlserversqldbsyncdatabaseinput)[] (Required): Databases to migrate
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server

## ValidateSyncMigrationInputSqlServerTaskOutput
### Properties
* **id**: string (ReadOnly): Database identifier
* **name**: string (ReadOnly): Name of database
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Errors associated with a selected database object

