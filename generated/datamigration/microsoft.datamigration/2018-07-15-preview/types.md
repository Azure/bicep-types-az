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
* **properties**: [DataMigrationServiceProperties](#datamigrationserviceproperties): Properties of the Database Migration Service instance
* **sku**: [ServiceSku](#servicesku): An Azure SKU instance
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.DataMigration/services' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataMigration/services/projects@2018-07-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectProperties](#projectproperties): Project-specific properties
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.DataMigration/services/projects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataMigration/services/projects/files@2018-07-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: HTTP strong entity tag value. This is ignored if submitted.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectFileProperties](#projectfileproperties): Base class for file properties.
* **type**: 'Microsoft.DataMigration/services/projects/files' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataMigration/services/projects/tasks@2018-07-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: HTTP strong entity tag value. This is ignored if submitted.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectTaskProperties](#projecttaskproperties): Base class for all types of DMS task properties. If task is not supported by current client, this object is returned.
* **type**: 'Microsoft.DataMigration/services/projects/tasks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataMigration/services/serviceTasks@2018-07-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: HTTP strong entity tag value. This is ignored if submitted.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectTaskProperties](#projecttaskproperties): Base class for all types of DMS task properties. If task is not supported by current client, this object is returned.
* **type**: 'Microsoft.DataMigration/services/serviceTasks' (ReadOnly, DeployTimeConstant): The resource type

## DataMigrationServiceProperties
### Properties
* **provisioningState**: 'Accepted' | 'Deleting' | 'Deploying' | 'Failed' | 'FailedToStart' | 'FailedToStop' | 'Starting' | 'Stopped' | 'Stopping' | 'Succeeded' (ReadOnly): The resource's provisioning state.
* **publicKey**: string: The public key of the service, used to encrypt secrets sent to the service
* **virtualNicId**: string: The ID of the Microsoft.Network/networkInterfaces resource which the service have
* **virtualSubnetId**: string (Required): The ID of the Microsoft.Network/virtualNetworks/subnets resource to which the service should be joined

## ServiceSku
### Properties
* **capacity**: int: The capacity of the SKU, if it supports scaling
* **family**: string: The SKU family, used when the service has multiple performance classes within a tier, such as 'A', 'D', etc. for virtual machines
* **name**: string: The unique name of the SKU, such as 'P3'
* **size**: string: The size of the SKU, used when the name alone does not denote a service size or when a SKU has multiple performance classes within a family, e.g. 'A1' for virtual machines
* **tier**: string: The tier of the SKU, such as 'Basic', 'General Purpose', or 'Business Critical'

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
* **sourcePlatform**: 'MongoDb' | 'MySQL' | 'PostgreSql' | 'SQL' | 'Unknown' (Required): Source platform for the project.
* **targetConnectionInfo**: [ConnectionInfo](#connectioninfo): Defines the connection properties of a server
* **targetPlatform**: 'AzureDbForMySql' | 'AzureDbForPostgreSql' | 'MongoDb' | 'SQLDB' | 'SQLMI' | 'Unknown' (Required): Target platform for the project.

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

### MongoDbConnectionInfo
#### Properties
* **connectionString**: string (Required): A MongoDB connection string or blob container URL. The user name and password can be specified here or in the userName and password properties
* **password**: string: Password credential.
* **type**: 'MongoDbConnectionInfo' (Required): Describes a connection to a MongoDB data source
* **userName**: string: User name

### MySqlConnectionInfo
#### Properties
* **password**: string: Password credential.
* **port**: int (Required): Port for Server
* **serverName**: string (Required): Name of the server
* **type**: 'MySqlConnectionInfo' (Required): Information for connecting to MySQL server
* **userName**: string: User name

### OracleConnectionInfo
#### Properties
* **dataSource**: string (Required): EZConnect or TNSName connection string.
* **password**: string: Password credential.
* **type**: 'OracleConnectionInfo' (Required): Information for connecting to Oracle server
* **userName**: string: User name

### PostgreSqlConnectionInfo
#### Properties
* **databaseName**: string: Name of the database
* **encryptConnection**: bool: Whether to encrypt the connection
* **password**: string: Password credential.
* **port**: int (Required): Port for Server
* **serverName**: string (Required): Name of the server
* **trustServerCertificate**: bool: Whether to trust the server certificate
* **type**: 'PostgreSqlConnectionInfo' (Required): Information for connecting to PostgreSQL server
* **userName**: string: User name

### SqlConnectionInfo
#### Properties
* **additionalSettings**: string: Additional connection settings
* **authentication**: 'ActiveDirectoryIntegrated' | 'ActiveDirectoryPassword' | 'None' | 'SqlAuthentication' | 'WindowsAuthentication': Authentication type to use for connection.
* **dataSource**: string (Required): Data source in the format Protocol:MachineName\SQLServerInstanceName,PortNumber
* **encryptConnection**: bool: Whether to encrypt the connection
* **password**: string: Password credential.
* **platform**: 'SqlOnPrem': Server platform type for connection.
* **trustServerCertificate**: bool: Whether to trust the server certificate
* **type**: 'SqlConnectionInfo' (Required): Information for connecting to SQL database server
* **userName**: string: User name


## MiSqlConnectionInfo
### Properties
* **managedInstanceResourceId**: string (Required): Resource id for Azure SQL database Managed instance
* **password**: string: Password credential.
* **type**: 'MiSqlConnectionInfo' (Required): Properties required to create a connection to Azure SQL database Managed instance
* **userName**: string: User name

## MongoDbConnectionInfo
### Properties
* **connectionString**: string (Required): A MongoDB connection string or blob container URL. The user name and password can be specified here or in the userName and password properties
* **password**: string: Password credential.
* **type**: 'MongoDbConnectionInfo' (Required): Describes a connection to a MongoDB data source
* **userName**: string: User name

## MySqlConnectionInfo
### Properties
* **password**: string: Password credential.
* **port**: int (Required): Port for Server
* **serverName**: string (Required): Name of the server
* **type**: 'MySqlConnectionInfo' (Required): Information for connecting to MySQL server
* **userName**: string: User name

## OracleConnectionInfo
### Properties
* **dataSource**: string (Required): EZConnect or TNSName connection string.
* **password**: string: Password credential.
* **type**: 'OracleConnectionInfo' (Required): Information for connecting to Oracle server
* **userName**: string: User name

## PostgreSqlConnectionInfo
### Properties
* **databaseName**: string: Name of the database
* **encryptConnection**: bool: Whether to encrypt the connection
* **password**: string: Password credential.
* **port**: int (Required): Port for Server
* **serverName**: string (Required): Name of the server
* **trustServerCertificate**: bool: Whether to trust the server certificate
* **type**: 'PostgreSqlConnectionInfo' (Required): Information for connecting to PostgreSQL server
* **userName**: string: User name

## SqlConnectionInfo
### Properties
* **additionalSettings**: string: Additional connection settings
* **authentication**: 'ActiveDirectoryIntegrated' | 'ActiveDirectoryPassword' | 'None' | 'SqlAuthentication' | 'WindowsAuthentication': Authentication type to use for connection.
* **dataSource**: string (Required): Data source in the format Protocol:MachineName\SQLServerInstanceName,PortNumber
* **encryptConnection**: bool: Whether to encrypt the connection
* **password**: string: Password credential.
* **platform**: 'SqlOnPrem': Server platform type for connection.
* **trustServerCertificate**: bool: Whether to trust the server certificate
* **type**: 'SqlConnectionInfo' (Required): Information for connecting to SQL database server
* **userName**: string: User name

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProjectFileProperties
### Properties
* **extension**: string: Optional File extension. If submitted it should not have a leading period and must match the extension from filePath.
* **filePath**: string: Relative path of this file resource. This property can be set when creating or updating the file resource.
* **lastModified**: string (ReadOnly): Modification DateTime.
* **mediaType**: string: File content type. This property can be modified to reflect the file content type.
* **size**: int (ReadOnly): File size.

## ProjectTaskProperties
* **Discriminator**: taskType
### Base Properties
* **clientData**: [Dictionary<string,String>](#dictionarystringstring): Key value pairs of client data to attach meta data information to task
* **commands**: [CommandProperties](#commandproperties)[] (ReadOnly): Array of command properties.
* **errors**: [ODataError](#odataerror)[] (ReadOnly): Array of errors. This is ignored if submitted.
* **state**: 'Canceled' | 'Failed' | 'FailedInputValidation' | 'Faulted' | 'Queued' | 'Running' | 'Succeeded' | 'Unknown' (ReadOnly): The state of the task. This is ignored if submitted.
### Connect.MongoDb
#### Properties
* **input**: [MongoDbConnectionInfo](#mongodbconnectioninfo): Describes a connection to a MongoDB data source
* **output**: [MongoDbClusterInfo](#mongodbclusterinfo)[] (ReadOnly): An array containing a single MongoDbClusterInfo object
* **taskType**: 'Connect.MongoDb' (Required): Properties for the task that validates the connection to and provides information about a MongoDB server

### ConnectToSource.MySql
#### Properties
* **input**: [ConnectToSourceMySqlTaskInput](#connecttosourcemysqltaskinput): Input for the task that validates MySQL database connection
* **output**: [ConnectToSourceNonSqlTaskOutput](#connecttosourcenonsqltaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToSource.MySql' (Required): Properties for the task that validates MySQL database connection

### ConnectToSource.Oracle.Sync
#### Properties
* **input**: [ConnectToSourceOracleSyncTaskInput](#connecttosourceoraclesynctaskinput): Input for the task that validates Oracle database connection
* **output**: [ConnectToSourceOracleSyncTaskOutput](#connecttosourceoraclesynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToSource.Oracle.Sync' (Required): Properties for the task that validates Oracle database connection

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

### ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync
#### Properties
* **input**: [ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInput](#connecttotargetoracleazuredbforpostgresqlsynctaskinput): Input for the task that validates connection to Azure Database for PostgreSQL and target server requirements for Oracle source.
* **output**: [ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutput](#connecttotargetoracleazuredbforpostgresqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync' (Required): Properties for the task that validates connection to Azure Database For PostgreSQL server and target server requirements for online migration for Oracle source.

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

### GetUserTablesOracle
#### Properties
* **input**: [GetUserTablesOracleTaskInput](#getusertablesoracletaskinput): Input for the task that gets the list of tables contained within a provided list of Oracle schemas.
* **output**: [GetUserTablesOracleTaskOutput](#getusertablesoracletaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'GetUserTablesOracle' (Required): Properties for the task that collects user tables for the given list of Oracle schemas

### GetUserTablesPostgreSql
#### Properties
* **input**: [GetUserTablesPostgreSqlTaskInput](#getusertablespostgresqltaskinput): Input for the task that gets the list of tables for a provided list of PostgreSQL databases.
* **output**: [GetUserTablesPostgreSqlTaskOutput](#getusertablespostgresqltaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'GetUserTablesPostgreSql' (Required): Properties for the task that collects user tables for the given list of databases

### Migrate.MongoDb
#### Properties
* **input**: [MongoDbMigrationSettings](#mongodbmigrationsettings): Describes how a MongoDB data migration should be performed
* **output**: [MongoDbProgress](#mongodbprogress)[] (ReadOnly):
* **taskType**: 'Migrate.MongoDb' (Required): Properties for the task that migrates data between MongoDB data sources

### Migrate.MySql.AzureDbForMySql.Sync
#### Properties
* **input**: [MigrateMySqlAzureDbForMySqlSyncTaskInput](#migratemysqlazuredbformysqlsynctaskinput): Input for the task that migrates MySQL databases to Azure Database for MySQL for online migrations
* **output**: [MigrateMySqlAzureDbForMySqlSyncTaskOutput](#migratemysqlazuredbformysqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.MySql.AzureDbForMySql.Sync' (Required): Properties for the task that migrates MySQL databases to Azure Database for MySQL for online migrations

### Migrate.Oracle.AzureDbForPostgreSql.Sync
#### Properties
* **input**: [MigrateOracleAzureDbPostgreSqlSyncTaskInput](#migrateoracleazuredbpostgresqlsynctaskinput): Input for the task that migrates Oracle databases to Azure Database for PostgreSQL for online migrations
* **output**: [MigrateOracleAzureDbPostgreSqlSyncTaskOutput](#migrateoracleazuredbpostgresqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.Oracle.AzureDbForPostgreSql.Sync' (Required): Properties for the task that migrates Oracle to Azure Database for PostgreSQL for online migrations

### Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2
#### Properties
* **input**: [MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput](#migratepostgresqlazuredbforpostgresqlsynctaskinput): Input for the task that migrates PostgreSQL databases to Azure Database for PostgreSQL for online migrations
* **output**: [MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput](#migratepostgresqlazuredbforpostgresqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2' (Required): Properties for the task that migrates PostgreSQL databases to Azure Database for PostgreSQL for online migrations

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

### Migrate.Ssis
#### Properties
* **input**: [MigrateSsisTaskInput](#migratessistaskinput): Input for task that migrates SSIS packages from SQL Server to Azure SQL Database Managed Instance.
* **output**: [MigrateSsisTaskOutput](#migratessistaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.Ssis' (Required): Properties for task that migrates SSIS packages from SQL Server databases to Azure SQL Database Managed Instance.

### MigrateSchemaSqlServerSqlDb
#### Properties
* **input**: [MigrateSchemaSqlServerSqlDbTaskInput](#migrateschemasqlserversqldbtaskinput): Input for task that migrates Schema for SQL Server databases to Azure SQL databases
* **output**: [MigrateSchemaSqlServerSqlDbTaskOutput](#migrateschemasqlserversqldbtaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'MigrateSchemaSqlServerSqlDb' (Required): Properties for task that migrates Schema for SQL Server databases to Azure SQL databases

### Service.Check.OCI
#### Properties
* **input**: [CheckOCIDriverTaskInput](#checkocidrivertaskinput): Input for the service task to check for OCI drivers.
* **output**: [CheckOCIDriverTaskOutput](#checkocidrivertaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Service.Check.OCI' (Required): Properties for the task that checks for OCI drivers.

### Service.Install.OCI
#### Properties
* **input**: [InstallOCIDriverTaskInput](#installocidrivertaskinput): Input for the service task to install an OCI driver.
* **output**: [InstallOCIDriverTaskOutput](#installocidrivertaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Service.Install.OCI' (Required): Properties for the task that installs an OCI driver.

### Service.Upload.OCI
#### Properties
* **input**: [UploadOCIDriverTaskInput](#uploadocidrivertaskinput): Input for the service task to upload an OCI driver.
* **output**: [UploadOCIDriverTaskOutput](#uploadocidrivertaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Service.Upload.OCI' (Required): Properties for the task that uploads an OCI driver.

### Validate.MongoDb
#### Properties
* **input**: [MongoDbMigrationSettings](#mongodbmigrationsettings): Describes how a MongoDB data migration should be performed
* **output**: [Migration](#migration)[] (ReadOnly): An array containing a single MongoDbMigrationProgress object
* **taskType**: 'Validate.MongoDb' (Required): Properties for the task that validates a migration between MongoDB data sources

### Validate.Oracle.AzureDbPostgreSql.Sync
#### Properties
* **input**: [MigrateOracleAzureDbPostgreSqlSyncTaskInput](#migrateoracleazuredbpostgresqlsynctaskinput): Input for the task that migrates Oracle databases to Azure Database for PostgreSQL for online migrations
* **output**: [ValidateOracleAzureDbPostgreSqlSyncTaskOutput](#validateoracleazuredbpostgresqlsynctaskoutput)[] (ReadOnly): An array containing a single validation error response object
* **taskType**: 'Validate.Oracle.AzureDbPostgreSql.Sync' (Required): Properties for the task that validates a migration for Oracle to Azure Database for PostgreSQL for online migrations

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


## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CommandProperties
* **Discriminator**: commandType
### Base Properties
* **errors**: [ODataError](#odataerror)[] (ReadOnly): Array of errors. This is ignored if submitted.
* **state**: 'Accepted' | 'Failed' | 'Running' | 'Succeeded' | 'Unknown' (ReadOnly): The state of the command. This is ignored if submitted.
### cancel
#### Properties
* **commandType**: 'cancel' (Required): Properties for the command that cancels a migration in whole or in part
* **input**: [MongoDbCommandInput](#mongodbcommandinput): Describes the input to the 'cancel' and 'restart' MongoDB migration commands

### finish
#### Properties
* **commandType**: 'finish' (Required): Properties for the command that finishes a migration in whole or in part
* **input**: [MongoDbFinishCommandInput](#mongodbfinishcommandinput): Describes the input to the 'finish' MongoDB migration command

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

### restart
#### Properties
* **commandType**: 'restart' (Required): Properties for the command that restarts a migration in whole or in part
* **input**: [MongoDbCommandInput](#mongodbcommandinput): Describes the input to the 'cancel' and 'restart' MongoDB migration commands


## ODataError
### Properties
* **code**: string: The machine-readable description of the error, such as 'InvalidRequest' or 'InternalServerError'
* **details**: [ODataError](#odataerror)[]: Inner errors that caused this error
* **message**: string: The human-readable description of the error

## cancel
### Properties
* **commandType**: 'cancel' (Required): Properties for the command that cancels a migration in whole or in part
* **input**: [MongoDbCommandInput](#mongodbcommandinput): Describes the input to the 'cancel' and 'restart' MongoDB migration commands

## MongoDbCommandInput
### Properties
* **objectName**: string: The qualified name of a database or collection to act upon, or null to act upon the entire migration

## finish
### Properties
* **commandType**: 'finish' (Required): Properties for the command that finishes a migration in whole or in part
* **input**: [MongoDbFinishCommandInput](#mongodbfinishcommandinput): Describes the input to the 'finish' MongoDB migration command

## MongoDbFinishCommandInput
### Properties
* **immediate**: bool (Required): If true, replication for the affected objects will be stopped immediately. If false, the migrator will finish replaying queued events before finishing the replication.
* **objectName**: string: The qualified name of a database or collection to act upon, or null to act upon the entire migration

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
* **filePath**: string: The path to the file where exception occurred
* **hResult**: int: Coded numerical value that is assigned to a specific exception
* **lineNumber**: string: The line number where exception occurred
* **message**: string: Error message
* **stackTrace**: string: Stack trace

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

## restart
### Properties
* **commandType**: 'restart' (Required): Properties for the command that restarts a migration in whole or in part
* **input**: [MongoDbCommandInput](#mongodbcommandinput): Describes the input to the 'cancel' and 'restart' MongoDB migration commands

## Connect.MongoDb
### Properties
* **input**: [MongoDbConnectionInfo](#mongodbconnectioninfo): Describes a connection to a MongoDB data source
* **output**: [MongoDbClusterInfo](#mongodbclusterinfo)[] (ReadOnly): An array containing a single MongoDbClusterInfo object
* **taskType**: 'Connect.MongoDb' (Required): Properties for the task that validates the connection to and provides information about a MongoDB server

## MongoDbClusterInfo
### Properties
* **databases**: [MongoDbDatabaseInfo](#mongodbdatabaseinfo)[] (Required): A list of non-system databases in the cluster
* **supportsSharding**: bool (Required): Whether the cluster supports sharded collections
* **type**: 'BlobContainer' | 'CosmosDb' | 'MongoDb' (Required): The type of data source.
* **version**: string (Required): The version of the data source in the form x.y.z (e.g. 3.6.7). Not used if Type is BlobContainer.

## MongoDbDatabaseInfo
### Properties
* **averageDocumentSize**: int (Required): The average document size, or -1 if the average size is unknown
* **collections**: [MongoDbCollectionInfo](#mongodbcollectioninfo)[] (Required): A list of supported collections in a MongoDB database
* **dataSize**: int (Required): The estimated total data size, in bytes, or -1 if the size is unknown.
* **documentCount**: int (Required): The estimated total number of documents, or -1 if the document count is unknown
* **name**: string (Required): The unqualified name of the database or collection
* **qualifiedName**: string (Required): The qualified name of the database or collection. For a collection, this is the database-qualified name.
* **supportsSharding**: bool (Required): Whether the database has sharding enabled. Note that the migration task will enable sharding on the target if necessary.

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
* **shardKey**: [MongoDbShardKeyInfo](#mongodbshardkeyinfo): Describes a MongoDB shard key
* **supportsSharding**: bool (Required): Whether the database has sharding enabled. Note that the migration task will enable sharding on the target if necessary.
* **viewOf**: string: The name of the collection that this is a view of, if IsView is true

## MongoDbShardKeyInfo
### Properties
* **fields**: [MongoDbShardKeyField](#mongodbshardkeyfield)[] (Required): The fields within the shard key
* **isUnique**: bool (Required): Whether the shard key is unique

## MongoDbShardKeyField
### Properties
* **name**: string (Required): The name of the field
* **order**: 'Forward' | 'Hashed' | 'Reverse' (Required): The field ordering.

## ConnectToSource.MySql
### Properties
* **input**: [ConnectToSourceMySqlTaskInput](#connecttosourcemysqltaskinput): Input for the task that validates MySQL database connection
* **output**: [ConnectToSourceNonSqlTaskOutput](#connecttosourcenonsqltaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToSource.MySql' (Required): Properties for the task that validates MySQL database connection

## ConnectToSourceMySqlTaskInput
### Properties
* **checkPermissionsGroup**: 'Default' | 'MigrationFromMySQLToAzureDBForMySQL' | 'MigrationFromSqlServerToAzureDB' | 'MigrationFromSqlServerToAzureMI': Permission group for validations.
* **sourceConnectionInfo**: [MySqlConnectionInfo](#mysqlconnectioninfo) (Required): Information for connecting to MySQL server
* **targetPlatform**: 'AzureDbForMySQL' | 'SqlServer': Target Platform for the migration.

## ConnectToSourceNonSqlTaskOutput
### Properties
* **databases**: string[] (ReadOnly): List of databases on the server
* **id**: string (ReadOnly): Result identifier
* **serverProperties**: [ServerProperties](#serverproperties) (ReadOnly): Server properties for MySQL type source
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

## ConnectToSource.Oracle.Sync
### Properties
* **input**: [ConnectToSourceOracleSyncTaskInput](#connecttosourceoraclesynctaskinput): Input for the task that validates Oracle database connection
* **output**: [ConnectToSourceOracleSyncTaskOutput](#connecttosourceoraclesynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToSource.Oracle.Sync' (Required): Properties for the task that validates Oracle database connection

## ConnectToSourceOracleSyncTaskInput
### Properties
* **sourceConnectionInfo**: [OracleConnectionInfo](#oracleconnectioninfo) (Required): Information for connecting to Oracle server

## ConnectToSourceOracleSyncTaskOutput
### Properties
* **databases**: string[] (ReadOnly): List of schemas on source server
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Version of the source server
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors associated with the task

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
* **checkPermissionsGroup**: 'Default' | 'MigrationFromMySQLToAzureDBForMySQL' | 'MigrationFromSqlServerToAzureDB' | 'MigrationFromSqlServerToAzureMI': Permission group for validations.
* **collectAgentJobs**: bool: Flag for whether to collect agent jobs from source server.
* **collectDatabases**: bool: Flag for whether to collect databases from source server.
* **collectLogins**: bool: Flag for whether to collect logins from source server.
* **collectTdeCertificateInfo**: bool: Flag for whether to collect TDE Certificate names from source server.
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
* **validateSsisCatalogOnly**: bool: Flag for whether to validate SSIS catalog is reachable on the source server.

## ConnectToSourceSqlServerTaskOutput
* **Discriminator**: resultType
### Base Properties
* **id**: string (ReadOnly): Result identifier
### AgentJobLevelOutput
#### Properties
* **isEnabled**: bool (ReadOnly): The state of the original Agent Job.
* **jobCategory**: string (ReadOnly): The type of Agent Job.
* **jobOwner**: string (ReadOnly): The owner of the Agent Job
* **lastExecutedOn**: string (ReadOnly): UTC Date and time when the Agent Job was last executed.
* **migrationEligibility**: [MigrationEligibilityInfo](#migrationeligibilityinfo) (ReadOnly): Information about migration eligibility of a server object
* **name**: string (ReadOnly): Agent Job name
* **resultType**: 'AgentJobLevelOutput' (Required):
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

### DatabaseLevelOutput
#### Properties
* **databaseErrorResultPrefix**: string (ReadOnly): Prefix string to use for querying errors for this database
* **databaseName**: string (ReadOnly): The name of the database
* **endedOn**: string (ReadOnly): Migration end time
* **fileId**: string (ReadOnly): Identifier for the file resource containing the schema of this database
* **numberOfFailedOperations**: int (ReadOnly): Number of failed operations for this database
* **numberOfSuccessfulOperations**: int (ReadOnly): Number of successful operations for this database
* **resultType**: 'DatabaseLevelOutput' (Required):
* **schemaErrorResultPrefix**: string (ReadOnly): Prefix string to use for querying schema errors for this database
* **stage**: 'CollectingObjects' | 'Completed' | 'CompletedWithWarnings' | 'DeployingSchema' | 'DownloadingScript' | 'Failed' | 'GeneratingScript' | 'NotStarted' | 'UploadingScript' | 'ValidatingInputs' (ReadOnly): Schema migration stage for this database.
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): State of the schema migration for this database.

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
* **agentJobs**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Source agent jobs as a map from agent job name to id.
* **databases**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Source databases as a map from database name to database id
* **databaseTdeCertificateMapping**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Mapping from database name to TDE certificate name, if applicable
* **logins**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Source logins as a map from login name to login id.
* **resultType**: 'TaskLevelOutput' (Required): Task level output for the task that validates connection to SQL Server and also validates source server requirements
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors


## AgentJobLevelOutput
### Properties
* **isEnabled**: bool (ReadOnly): The state of the original Agent Job.
* **jobCategory**: string (ReadOnly): The type of Agent Job.
* **jobOwner**: string (ReadOnly): The owner of the Agent Job
* **lastExecutedOn**: string (ReadOnly): UTC Date and time when the Agent Job was last executed.
* **migrationEligibility**: [MigrationEligibilityInfo](#migrationeligibilityinfo) (ReadOnly): Information about migration eligibility of a server object
* **name**: string (ReadOnly): Agent Job name
* **resultType**: 'AgentJobLevelOutput' (Required):
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

## MigrationEligibilityInfo
### Properties
* **isEligibleForMigration**: bool (ReadOnly): Whether object is eligible for migration or not.
* **validationMessages**: string[] (ReadOnly): Information about eligibility failure for the server object.

## DatabaseLevelOutput
### Properties
* **databaseErrorResultPrefix**: string (ReadOnly): Prefix string to use for querying errors for this database
* **databaseName**: string (ReadOnly): The name of the database
* **endedOn**: string (ReadOnly): Migration end time
* **fileId**: string (ReadOnly): Identifier for the file resource containing the schema of this database
* **numberOfFailedOperations**: int (ReadOnly): Number of failed operations for this database
* **numberOfSuccessfulOperations**: int (ReadOnly): Number of successful operations for this database
* **resultType**: 'DatabaseLevelOutput' (Required):
* **schemaErrorResultPrefix**: string (ReadOnly): Prefix string to use for querying schema errors for this database
* **stage**: 'CollectingObjects' | 'Completed' | 'CompletedWithWarnings' | 'DeployingSchema' | 'DownloadingScript' | 'Failed' | 'GeneratingScript' | 'NotStarted' | 'UploadingScript' | 'ValidatingInputs' (ReadOnly): Schema migration stage for this database.
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): State of the schema migration for this database.

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
* **agentJobs**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Source agent jobs as a map from agent job name to id.
* **databases**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Source databases as a map from database name to database id
* **databaseTdeCertificateMapping**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Mapping from database name to TDE certificate name, if applicable
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
* **collectAgentJobs**: bool: Flag for whether to collect agent jobs from target SQL MI server.
* **collectLogins**: bool: Flag for whether to collect logins from target SQL MI server.
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
* **validateSsisCatalogOnly**: bool: Flag for whether to validate SSIS catalog is reachable on the target SQL MI server.

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

## ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync
### Properties
* **input**: [ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInput](#connecttotargetoracleazuredbforpostgresqlsynctaskinput): Input for the task that validates connection to Azure Database for PostgreSQL and target server requirements for Oracle source.
* **output**: [ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutput](#connecttotargetoracleazuredbforpostgresqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync' (Required): Properties for the task that validates connection to Azure Database For PostgreSQL server and target server requirements for online migration for Oracle source.

## ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInput
### Properties
* **targetConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required): Information for connecting to PostgreSQL server

## ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutput
### Properties
* **databases**: string[] (ReadOnly): List of databases on target server
* **databaseSchemaMap**: [schemas:160_databaseSchemaMapItem](#schemas160databaseschemamapitem)[]: Mapping of schemas per database
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Version of the target server
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors associated with the task

## schemas:160_databaseSchemaMapItem
### Properties
* **database**: string:
* **schemas**: string[]:

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

## GetUserTablesOracle
### Properties
* **input**: [GetUserTablesOracleTaskInput](#getusertablesoracletaskinput): Input for the task that gets the list of tables contained within a provided list of Oracle schemas.
* **output**: [GetUserTablesOracleTaskOutput](#getusertablesoracletaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'GetUserTablesOracle' (Required): Properties for the task that collects user tables for the given list of Oracle schemas

## GetUserTablesOracleTaskInput
### Properties
* **connectionInfo**: [OracleConnectionInfo](#oracleconnectioninfo) (Required): Information for connecting to Oracle server
* **selectedSchemas**: string[] (Required): List of Oracle schemas for which to collect tables

## GetUserTablesOracleTaskOutput
### Properties
* **schemaName**: string (ReadOnly): The schema this result is for
* **tables**: [DatabaseTable](#databasetable)[] (ReadOnly): List of valid tables found for this schema
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors associated with the task

## GetUserTablesPostgreSql
### Properties
* **input**: [GetUserTablesPostgreSqlTaskInput](#getusertablespostgresqltaskinput): Input for the task that gets the list of tables for a provided list of PostgreSQL databases.
* **output**: [GetUserTablesPostgreSqlTaskOutput](#getusertablespostgresqltaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'GetUserTablesPostgreSql' (Required): Properties for the task that collects user tables for the given list of databases

## GetUserTablesPostgreSqlTaskInput
### Properties
* **connectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required): Information for connecting to PostgreSQL server
* **selectedDatabases**: string[] (Required): List of PostgreSQL databases for which to collect tables

## GetUserTablesPostgreSqlTaskOutput
### Properties
* **databaseName**: string (ReadOnly): The database this result is for
* **tables**: [DatabaseTable](#databasetable)[] (ReadOnly): List of valid tables found for this database
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors associated with the task

## Migrate.MongoDb
### Properties
* **input**: [MongoDbMigrationSettings](#mongodbmigrationsettings): Describes how a MongoDB data migration should be performed
* **output**: [MongoDbProgress](#mongodbprogress)[] (ReadOnly):
* **taskType**: 'Migrate.MongoDb' (Required): Properties for the task that migrates data between MongoDB data sources

## MongoDbMigrationSettings
### Properties
* **boostRUs**: int: The RU limit on a CosmosDB target that collections will be temporarily increased to (if lower) during the initial copy of a migration, from 10,000 to 1,000,000, or 0 to use the default boost (which is generally the maximum), or null to not boost the RUs. This setting has no effect on non-CosmosDB targets.
* **databases**: [Dictionary<string,MongoDbDatabaseSettings>](#dictionarystringmongodbdatabasesettings) (Required): The databases on the source cluster to migrate to the target. The keys are the names of the databases.
* **replication**: 'Continuous' | 'Disabled' | 'OneTime': Describes how changes will be replicated from the source to the target. The default is OneTime.
* **source**: [MongoDbConnectionInfo](#mongodbconnectioninfo) (Required): Describes a connection to a MongoDB data source
* **target**: [MongoDbConnectionInfo](#mongodbconnectioninfo) (Required): Describes a connection to a MongoDB data source
* **throttling**: [MongoDbThrottlingSettings](#mongodbthrottlingsettings): Specifies resource limits for the migration

## Dictionary<string,MongoDbDatabaseSettings>
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbDatabaseSettings](#mongodbdatabasesettings)

## MongoDbDatabaseSettings
### Properties
* **collections**: [Dictionary<string,MongoDbCollectionSettings>](#dictionarystringmongodbcollectionsettings) (Required): The collections on the source database to migrate to the target. The keys are the unqualified names of the collections.
* **targetRUs**: int: The RUs that should be configured on a CosmosDB target, or null to use the default, or 0 if throughput should not be provisioned for the database. This has no effect on non-CosmosDB targets.

## Dictionary<string,MongoDbCollectionSettings>
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbCollectionSettings](#mongodbcollectionsettings)

## MongoDbCollectionSettings
### Properties
* **canDelete**: bool: Whether the migrator is allowed to drop the target collection in the course of performing a migration. The default is true.
* **shardKey**: [MongoDbShardKeySetting](#mongodbshardkeysetting): Describes a MongoDB shard key
* **targetRUs**: int: The RUs that should be configured on a CosmosDB target, or null to use the default. This has no effect on non-CosmosDB targets.

## MongoDbShardKeySetting
### Properties
* **fields**: [MongoDbShardKeyField](#mongodbshardkeyfield)[] (Required): The fields within the shard key
* **isUnique**: bool (Required): Whether the shard key is unique

## MongoDbThrottlingSettings
### Properties
* **maxParallelism**: int: The maximum number of work items (e.g. collection copies) that will be processed in parallel
* **minFreeCpu**: int: The percentage of CPU time that the migrator will try to avoid using, from 0 to 100
* **minFreeMemoryMb**: int: The number of megabytes of RAM that the migrator will try to avoid using

## MongoDbProgress
* **Discriminator**: resultType
### Base Properties
* **bytesCopied**: int (Required): The number of document bytes copied during the Copying stage
* **documentsCopied**: int (Required): The number of documents copied during the Copying stage
* **elapsedTime**: string (Required): The elapsed time in the format [ddd.]hh:mm:ss[.fffffff] (i.e. TimeSpan format)
* **errors**: [Dictionary<string,MongoDbError>](#dictionarystringmongodberror) (Required): The errors and warnings that have occurred for the current object. The keys are the error codes.
* **eventsPending**: int (Required): The number of oplog events awaiting replay
* **eventsReplayed**: int (Required): The number of oplog events replayed so far
* **lastEventTime**: string: The timestamp of the last oplog event received, or null if no oplog event has been received yet
* **lastReplayTime**: string: The timestamp of the last oplog event replayed, or null if no oplog event has been replayed yet
* **name**: string: The name of the progress object. For a collection, this is the unqualified collection name. For a database, this is the database name. For the overall migration, this is null.
* **qualifiedName**: string: The qualified name of the progress object. For a collection, this is the database-qualified name. For a database, this is the database name. For the overall migration, this is null.
* **state**: 'Canceled' | 'Complete' | 'Copying' | 'Failed' | 'Finalizing' | 'Initializing' | 'InitialReplay' | 'NotStarted' | 'Replaying' | 'Restarting' | 'ValidatingInput' (Required):
* **totalBytes**: int (Required): The total number of document bytes on the source at the beginning of the Copying stage, or -1 if the total size was unknown
* **totalDocuments**: int (Required): The total number of documents on the source at the beginning of the Copying stage, or -1 if the total count was unknown
### Collection
#### Properties
* **resultType**: 'Collection' (Required): Describes the progress of a collection

### Database
#### Properties
* **collections**: [Dictionary<string,MongoDbCollectionProgress>](#dictionarystringmongodbcollectionprogress): The progress of the collections in the database. The keys are the unqualified names of the collections
* **resultType**: 'Database' (Required): Describes the progress of a database

### Migration
#### Properties
* **databases**: [Dictionary<string,MongoDbDatabaseProgress>](#dictionarystringmongodbdatabaseprogress): The progress of the databases in the migration. The keys are the names of the databases
* **resultType**: 'Migration' (Required): Describes the progress of the overall migration


## Dictionary<string,MongoDbError>
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbError](#mongodberror)

## MongoDbError
### Properties
* **code**: string: The non-localized, machine-readable code that describes the error or warning
* **count**: int: The number of times the error or warning has occurred
* **message**: string: The localized, human-readable message that describes the error or warning
* **type**: 'Error' | 'ValidationError' | 'Warning': The type of error or warning.

## Collection
### Properties
* **resultType**: 'Collection' (Required): Describes the progress of a collection

## Database
### Properties
* **collections**: [Dictionary<string,MongoDbCollectionProgress>](#dictionarystringmongodbcollectionprogress): The progress of the collections in the database. The keys are the unqualified names of the collections
* **resultType**: 'Database' (Required): Describes the progress of a database

## Dictionary<string,MongoDbCollectionProgress>
### Properties
### Additional Properties
* **Additional Properties Type**: [Collection](#collection)

## Migration
### Properties
* **databases**: [Dictionary<string,MongoDbDatabaseProgress>](#dictionarystringmongodbdatabaseprogress): The progress of the databases in the migration. The keys are the names of the databases
* **resultType**: 'Migration' (Required): Describes the progress of the overall migration

## Dictionary<string,MongoDbDatabaseProgress>
### Properties
### Additional Properties
* **Additional Properties Type**: [Database](#database)

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
* **tableMap**: [Dictionary<string,String>](#dictionarystringstring): Mapping of source to target tables
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
* **databaseErrorResultPrefix**: string (ReadOnly): Prefix string to use for querying errors for this database
* **databaseName**: string (ReadOnly): The name of the database
* **endedOn**: string (ReadOnly): Migration end time
* **fileId**: string (ReadOnly): Identifier for the file resource containing the schema of this database
* **numberOfFailedOperations**: int (ReadOnly): Number of failed operations for this database
* **numberOfSuccessfulOperations**: int (ReadOnly): Number of successful operations for this database
* **resultType**: 'DatabaseLevelOutput' (Required):
* **schemaErrorResultPrefix**: string (ReadOnly): Prefix string to use for querying schema errors for this database
* **stage**: 'CollectingObjects' | 'Completed' | 'CompletedWithWarnings' | 'DeployingSchema' | 'DownloadingScript' | 'Failed' | 'GeneratingScript' | 'NotStarted' | 'UploadingScript' | 'ValidatingInputs' (ReadOnly): Schema migration stage for this database.
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): State of the schema migration for this database.

### ErrorOutput
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Exception object for all custom exceptions
* **resultType**: 'ErrorOutput' (Required):

### MigrationLevelOutput
#### Properties
* **endedOn**: string (ReadOnly): Migration end time
* **resultType**: 'MigrationLevelOutput' (Required):
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Overall state of the schema migration.
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
* **endedOn**: string (ReadOnly): Migration end time
* **resultType**: 'MigrationLevelOutput' (Required):
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Overall state of the schema migration.
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Target server version

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

## Migrate.Oracle.AzureDbForPostgreSql.Sync
### Properties
* **input**: [MigrateOracleAzureDbPostgreSqlSyncTaskInput](#migrateoracleazuredbpostgresqlsynctaskinput): Input for the task that migrates Oracle databases to Azure Database for PostgreSQL for online migrations
* **output**: [MigrateOracleAzureDbPostgreSqlSyncTaskOutput](#migrateoracleazuredbpostgresqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.Oracle.AzureDbForPostgreSql.Sync' (Required): Properties for the task that migrates Oracle to Azure Database for PostgreSQL for online migrations

## MigrateOracleAzureDbPostgreSqlSyncTaskInput
### Properties
* **selectedDatabases**: [MigrateOracleAzureDbPostgreSqlSyncDatabaseInput](#migrateoracleazuredbpostgresqlsyncdatabaseinput)[] (Required): Databases to migrate
* **sourceConnectionInfo**: [OracleConnectionInfo](#oracleconnectioninfo) (Required): Information for connecting to Oracle server
* **targetConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required): Information for connecting to PostgreSQL server

## MigrateOracleAzureDbPostgreSqlSyncDatabaseInput
### Properties
* **caseManipulation**: string: How to handle object name casing: either Preserve or ToLower
* **migrationSetting**: [Dictionary<string,String>](#dictionarystringstring): Migration settings which tune the migration behavior
* **name**: string: Name of the migration pipeline
* **schemaName**: string: Name of the source schema
* **sourceSetting**: [Dictionary<string,String>](#dictionarystringstring): Source settings to tune source endpoint migration behavior
* **tableMap**: [Dictionary<string,String>](#dictionarystringstring): Mapping of source to target tables
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MigrateOracleAzureDbPostgreSqlSyncTaskOutput
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
* **databaseErrorResultPrefix**: string (ReadOnly): Prefix string to use for querying errors for this database
* **databaseName**: string (ReadOnly): The name of the database
* **endedOn**: string (ReadOnly): Migration end time
* **fileId**: string (ReadOnly): Identifier for the file resource containing the schema of this database
* **numberOfFailedOperations**: int (ReadOnly): Number of failed operations for this database
* **numberOfSuccessfulOperations**: int (ReadOnly): Number of successful operations for this database
* **resultType**: 'DatabaseLevelOutput' (Required):
* **schemaErrorResultPrefix**: string (ReadOnly): Prefix string to use for querying schema errors for this database
* **stage**: 'CollectingObjects' | 'Completed' | 'CompletedWithWarnings' | 'DeployingSchema' | 'DownloadingScript' | 'Failed' | 'GeneratingScript' | 'NotStarted' | 'UploadingScript' | 'ValidatingInputs' (ReadOnly): Schema migration stage for this database.
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): State of the schema migration for this database.

### ErrorOutput
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Exception object for all custom exceptions
* **resultType**: 'ErrorOutput' (Required):

### MigrationLevelOutput
#### Properties
* **endedOn**: string (ReadOnly): Migration end time
* **resultType**: 'MigrationLevelOutput' (Required):
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Overall state of the schema migration.
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


## Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2
### Properties
* **input**: [MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput](#migratepostgresqlazuredbforpostgresqlsynctaskinput): Input for the task that migrates PostgreSQL databases to Azure Database for PostgreSQL for online migrations
* **output**: [MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput](#migratepostgresqlazuredbforpostgresqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2' (Required): Properties for the task that migrates PostgreSQL databases to Azure Database for PostgreSQL for online migrations

## MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput
### Properties
* **selectedDatabases**: [MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput](#migratepostgresqlazuredbforpostgresqlsyncdatabaseinput)[] (Required): Databases to migrate
* **sourceConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required): Information for connecting to PostgreSQL server
* **targetConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required): Information for connecting to PostgreSQL server

## MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput
### Properties
* **migrationSetting**: [Dictionary<string,String>](#dictionarystringstring): Migration settings which tune the migration behavior
* **name**: string: Name of the database
* **selectedTables**: [MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseTableInput](#migratepostgresqlazuredbforpostgresqlsyncdatabasetableinput)[]: Tables selected for migration
* **sourceSetting**: [Dictionary<string,String>](#dictionarystringstring): Source settings to tune source endpoint migration behavior
* **targetDatabaseName**: string: Name of target database. Note: Target database will be truncated before starting migration.
* **targetSetting**: [Dictionary<string,String>](#dictionarystringstring): Target settings to tune target endpoint migration behavior

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseTableInput
### Properties
* **name**: string: Name of the table to migrate

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
* **databaseErrorResultPrefix**: string (ReadOnly): Prefix string to use for querying errors for this database
* **databaseName**: string (ReadOnly): The name of the database
* **endedOn**: string (ReadOnly): Migration end time
* **fileId**: string (ReadOnly): Identifier for the file resource containing the schema of this database
* **numberOfFailedOperations**: int (ReadOnly): Number of failed operations for this database
* **numberOfSuccessfulOperations**: int (ReadOnly): Number of successful operations for this database
* **resultType**: 'DatabaseLevelOutput' (Required):
* **schemaErrorResultPrefix**: string (ReadOnly): Prefix string to use for querying schema errors for this database
* **stage**: 'CollectingObjects' | 'Completed' | 'CompletedWithWarnings' | 'DeployingSchema' | 'DownloadingScript' | 'Failed' | 'GeneratingScript' | 'NotStarted' | 'UploadingScript' | 'ValidatingInputs' (ReadOnly): Schema migration stage for this database.
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): State of the schema migration for this database.

### ErrorOutput
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Exception object for all custom exceptions
* **resultType**: 'ErrorOutput' (Required):

### MigrationLevelOutput
#### Properties
* **endedOn**: string (ReadOnly): Migration end time
* **resultType**: 'MigrationLevelOutput' (Required):
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Overall state of the schema migration.
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
* **databaseErrorResultPrefix**: string (ReadOnly): Prefix string to use for querying errors for this database
* **databaseName**: string (ReadOnly): The name of the database
* **endedOn**: string (ReadOnly): Migration end time
* **fileId**: string (ReadOnly): Identifier for the file resource containing the schema of this database
* **numberOfFailedOperations**: int (ReadOnly): Number of failed operations for this database
* **numberOfSuccessfulOperations**: int (ReadOnly): Number of successful operations for this database
* **resultType**: 'DatabaseLevelOutput' (Required):
* **schemaErrorResultPrefix**: string (ReadOnly): Prefix string to use for querying schema errors for this database
* **stage**: 'CollectingObjects' | 'Completed' | 'CompletedWithWarnings' | 'DeployingSchema' | 'DownloadingScript' | 'Failed' | 'GeneratingScript' | 'NotStarted' | 'UploadingScript' | 'ValidatingInputs' (ReadOnly): Schema migration stage for this database.
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): State of the schema migration for this database.

### ErrorOutput
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Exception object for all custom exceptions
* **resultType**: 'ErrorOutput' (Required):

### MigrationLevelOutput
#### Properties
* **endedOn**: string (ReadOnly): Migration end time
* **resultType**: 'MigrationLevelOutput' (Required):
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Overall state of the schema migration.
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


## Migrate.SqlServer.AzureSqlDbMI
### Properties
* **input**: [MigrateSqlServerSqlMITaskInput](#migratesqlserversqlmitaskinput): Input for task that migrates SQL Server databases to Azure SQL Database Managed Instance.
* **output**: [MigrateSqlServerSqlMITaskOutput](#migratesqlserversqlmitaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.SqlServer.AzureSqlDbMI' (Required): Properties for task that migrates SQL Server databases to Azure SQL Database Managed Instance

## MigrateSqlServerSqlMITaskInput
### Properties
* **aadDomainName**: string: Azure Active Directory domain name in the format of 'contoso.com' for federated Azure AD or 'contoso.onmicrosoft.com' for managed domain, required if and only if Windows logins are selected
* **backupBlobShare**: [BlobShare](#blobshare) (Required): Blob container storage information.
* **backupFileShare**: [FileShare](#fileshare): File share information with Path, Username, and Password.
* **backupMode**: 'CreateBackup' | 'ExistingBackup': Backup Mode to specify whether to use existing backup or create new backup. If using existing backups, backup file paths are required to be provided in selectedDatabases.
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
* **isEnabled**: bool (ReadOnly): The state of the original Agent Job.
* **jobCategory**: string (ReadOnly): The type of Agent Job.
* **jobOwner**: string (ReadOnly): The owner of the Agent Job
* **lastExecutedOn**: string (ReadOnly): UTC Date and time when the Agent Job was last executed.
* **migrationEligibility**: [MigrationEligibilityInfo](#migrationeligibilityinfo) (ReadOnly): Information about migration eligibility of a server object
* **name**: string (ReadOnly): Agent Job name
* **resultType**: 'AgentJobLevelOutput' (Required):
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

### DatabaseLevelOutput
#### Properties
* **databaseErrorResultPrefix**: string (ReadOnly): Prefix string to use for querying errors for this database
* **databaseName**: string (ReadOnly): The name of the database
* **endedOn**: string (ReadOnly): Migration end time
* **fileId**: string (ReadOnly): Identifier for the file resource containing the schema of this database
* **numberOfFailedOperations**: int (ReadOnly): Number of failed operations for this database
* **numberOfSuccessfulOperations**: int (ReadOnly): Number of successful operations for this database
* **resultType**: 'DatabaseLevelOutput' (Required):
* **schemaErrorResultPrefix**: string (ReadOnly): Prefix string to use for querying schema errors for this database
* **stage**: 'CollectingObjects' | 'Completed' | 'CompletedWithWarnings' | 'DeployingSchema' | 'DownloadingScript' | 'Failed' | 'GeneratingScript' | 'NotStarted' | 'UploadingScript' | 'ValidatingInputs' (ReadOnly): Schema migration stage for this database.
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): State of the schema migration for this database.

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
* **endedOn**: string (ReadOnly): Migration end time
* **resultType**: 'MigrationLevelOutput' (Required):
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Overall state of the schema migration.
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
* **databaseErrorResultPrefix**: string (ReadOnly): Prefix string to use for querying errors for this database
* **databaseName**: string (ReadOnly): The name of the database
* **endedOn**: string (ReadOnly): Migration end time
* **fileId**: string (ReadOnly): Identifier for the file resource containing the schema of this database
* **numberOfFailedOperations**: int (ReadOnly): Number of failed operations for this database
* **numberOfSuccessfulOperations**: int (ReadOnly): Number of successful operations for this database
* **resultType**: 'DatabaseLevelOutput' (Required):
* **schemaErrorResultPrefix**: string (ReadOnly): Prefix string to use for querying schema errors for this database
* **stage**: 'CollectingObjects' | 'Completed' | 'CompletedWithWarnings' | 'DeployingSchema' | 'DownloadingScript' | 'Failed' | 'GeneratingScript' | 'NotStarted' | 'UploadingScript' | 'ValidatingInputs' (ReadOnly): Schema migration stage for this database.
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): State of the schema migration for this database.

### ErrorOutput
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Exception object for all custom exceptions
* **resultType**: 'ErrorOutput' (Required):

### MigrationLevelOutput
#### Properties
* **endedOn**: string (ReadOnly): Migration end time
* **resultType**: 'MigrationLevelOutput' (Required):
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Overall state of the schema migration.
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
* **databaseErrorResultPrefix**: string (ReadOnly): Prefix string to use for querying errors for this database
* **databaseName**: string (ReadOnly): The name of the database
* **endedOn**: string (ReadOnly): Migration end time
* **fileId**: string (ReadOnly): Identifier for the file resource containing the schema of this database
* **numberOfFailedOperations**: int (ReadOnly): Number of failed operations for this database
* **numberOfSuccessfulOperations**: int (ReadOnly): Number of successful operations for this database
* **resultType**: 'DatabaseLevelOutput' (Required):
* **schemaErrorResultPrefix**: string (ReadOnly): Prefix string to use for querying schema errors for this database
* **stage**: 'CollectingObjects' | 'Completed' | 'CompletedWithWarnings' | 'DeployingSchema' | 'DownloadingScript' | 'Failed' | 'GeneratingScript' | 'NotStarted' | 'UploadingScript' | 'ValidatingInputs' (ReadOnly): Schema migration stage for this database.
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): State of the schema migration for this database.

### ErrorOutput
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Exception object for all custom exceptions
* **resultType**: 'ErrorOutput' (Required):

### MigrationLevelOutput
#### Properties
* **endedOn**: string (ReadOnly): Migration end time
* **resultType**: 'MigrationLevelOutput' (Required):
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Overall state of the schema migration.
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


## Migrate.Ssis
### Properties
* **input**: [MigrateSsisTaskInput](#migratessistaskinput): Input for task that migrates SSIS packages from SQL Server to Azure SQL Database Managed Instance.
* **output**: [MigrateSsisTaskOutput](#migratessistaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.Ssis' (Required): Properties for task that migrates SSIS packages from SQL Server databases to Azure SQL Database Managed Instance.

## MigrateSsisTaskInput
### Properties
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
* **ssisMigrationInfo**: [SsisMigrationInfo](#ssismigrationinfo) (Required): SSIS migration info with SSIS store type, overwrite policy.
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server

## SsisMigrationInfo
### Properties
* **environmentOverwriteOption**: 'Ignore' | 'Overwrite': The overwrite option for the SSIS environment migration.
* **projectOverwriteOption**: 'Ignore' | 'Overwrite': The overwrite option for the SSIS project migration.
* **ssisStoreType**: 'SsisCatalog': The SSIS store type of source, only SSIS catalog is supported now in DMS.

## MigrateSsisTaskOutput
* **Discriminator**: resultType
### Base Properties
* **id**: string (ReadOnly): Result identifier
### MigrationLevelOutput
#### Properties
* **endedOn**: string (ReadOnly): Migration end time
* **resultType**: 'MigrationLevelOutput' (Required):
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Overall state of the schema migration.
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Target server version

### SsisProjectLevelOutput
#### Properties
* **endedOn**: string (ReadOnly): Migration end time
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly): Migration exceptions and warnings
* **folderName**: string (ReadOnly): Name of the folder
* **message**: string (ReadOnly): Migration progress message
* **projectName**: string (ReadOnly): Name of the project
* **resultType**: 'SsisProjectLevelOutput' (Required):
* **stage**: 'Completed' | 'Initialize' | 'InProgress' | 'None' (ReadOnly): Stage of SSIS migration.
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration.


## SsisProjectLevelOutput
### Properties
* **endedOn**: string (ReadOnly): Migration end time
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly): Migration exceptions and warnings
* **folderName**: string (ReadOnly): Name of the folder
* **message**: string (ReadOnly): Migration progress message
* **projectName**: string (ReadOnly): Name of the project
* **resultType**: 'SsisProjectLevelOutput' (Required):
* **stage**: 'Completed' | 'Initialize' | 'InProgress' | 'None' (ReadOnly): Stage of SSIS migration.
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration.

## MigrateSchemaSqlServerSqlDb
### Properties
* **input**: [MigrateSchemaSqlServerSqlDbTaskInput](#migrateschemasqlserversqldbtaskinput): Input for task that migrates Schema for SQL Server databases to Azure SQL databases
* **output**: [MigrateSchemaSqlServerSqlDbTaskOutput](#migrateschemasqlserversqldbtaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'MigrateSchemaSqlServerSqlDb' (Required): Properties for task that migrates Schema for SQL Server databases to Azure SQL databases

## MigrateSchemaSqlServerSqlDbTaskInput
### Properties
* **selectedDatabases**: [MigrateSchemaSqlServerSqlDbDatabaseInput](#migrateschemasqlserversqldbdatabaseinput)[] (Required): Databases to migrate
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server

## MigrateSchemaSqlServerSqlDbDatabaseInput
### Properties
* **name**: string: Name of source database
* **schemaSetting**: [SchemaMigrationSetting](#schemamigrationsetting): Settings for migrating schema from source to target
* **targetDatabaseName**: string: Name of target database

## SchemaMigrationSetting
### Properties
* **fileId**: string: Resource Identifier of a file resource containing the uploaded schema file
* **schemaOption**: 'ExtractFromSource' | 'None' | 'UseStorageFile': Option on how to migrate the schema.

## MigrateSchemaSqlServerSqlDbTaskOutput
* **Discriminator**: resultType
### Base Properties
* **id**: string (ReadOnly): Result identifier
### DatabaseLevelOutput
#### Properties
* **databaseErrorResultPrefix**: string (ReadOnly): Prefix string to use for querying errors for this database
* **databaseName**: string (ReadOnly): The name of the database
* **endedOn**: string (ReadOnly): Migration end time
* **fileId**: string (ReadOnly): Identifier for the file resource containing the schema of this database
* **numberOfFailedOperations**: int (ReadOnly): Number of failed operations for this database
* **numberOfSuccessfulOperations**: int (ReadOnly): Number of successful operations for this database
* **resultType**: 'DatabaseLevelOutput' (Required):
* **schemaErrorResultPrefix**: string (ReadOnly): Prefix string to use for querying schema errors for this database
* **stage**: 'CollectingObjects' | 'Completed' | 'CompletedWithWarnings' | 'DeployingSchema' | 'DownloadingScript' | 'Failed' | 'GeneratingScript' | 'NotStarted' | 'UploadingScript' | 'ValidatingInputs' (ReadOnly): Schema migration stage for this database.
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): State of the schema migration for this database.

### ErrorOutput
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Exception object for all custom exceptions
* **resultType**: 'ErrorOutput' (Required):

### MigrationLevelOutput
#### Properties
* **endedOn**: string (ReadOnly): Migration end time
* **resultType**: 'MigrationLevelOutput' (Required):
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Overall state of the schema migration.
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Target server version

### SchemaErrorOutput
#### Properties
* **commandText**: string (ReadOnly): Schema command which failed
* **errorText**: string (ReadOnly): Reason of failure
* **resultType**: 'SchemaErrorOutput' (Required):


## SchemaErrorOutput
### Properties
* **commandText**: string (ReadOnly): Schema command which failed
* **errorText**: string (ReadOnly): Reason of failure
* **resultType**: 'SchemaErrorOutput' (Required):

## Service.Check.OCI
### Properties
* **input**: [CheckOCIDriverTaskInput](#checkocidrivertaskinput): Input for the service task to check for OCI drivers.
* **output**: [CheckOCIDriverTaskOutput](#checkocidrivertaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Service.Check.OCI' (Required): Properties for the task that checks for OCI drivers.

## CheckOCIDriverTaskInput
### Properties
* **serverVersion**: string: Version of the source server to check against.  Optional.

## CheckOCIDriverTaskOutput
### Properties
* **installedDriver**: [OracleOCIDriverInfo](#oracleocidriverinfo): Information about an Oracle OCI driver.
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

## OracleOCIDriverInfo
### Properties
* **archiveChecksum**: string (ReadOnly): The MD5 Base64 encoded checksum for the driver package.
* **assemblyVersion**: string (ReadOnly): Version listed in the OCI assembly 'oci.dll'
* **driverName**: string (ReadOnly): The name of the driver package
* **driverSize**: string (ReadOnly): The size in bytes of the driver package
* **oracleChecksum**: string (ReadOnly): The checksum for the driver package provided by Oracle.
* **supportedOracleVersions**: string[] (ReadOnly): List of Oracle database versions supported by this driver. Only major minor of the version is listed.

## Service.Install.OCI
### Properties
* **input**: [InstallOCIDriverTaskInput](#installocidrivertaskinput): Input for the service task to install an OCI driver.
* **output**: [InstallOCIDriverTaskOutput](#installocidrivertaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Service.Install.OCI' (Required): Properties for the task that installs an OCI driver.

## InstallOCIDriverTaskInput
### Properties
* **driverPackageName**: string: Name of the uploaded driver package to install.

## InstallOCIDriverTaskOutput
### Properties
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

## Service.Upload.OCI
### Properties
* **input**: [UploadOCIDriverTaskInput](#uploadocidrivertaskinput): Input for the service task to upload an OCI driver.
* **output**: [UploadOCIDriverTaskOutput](#uploadocidrivertaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Service.Upload.OCI' (Required): Properties for the task that uploads an OCI driver.

## UploadOCIDriverTaskInput
### Properties
* **driverShare**: [FileShare](#fileshare): File share information with Path, Username, and Password.

## UploadOCIDriverTaskOutput
### Properties
* **driverPackageName**: string (ReadOnly): The name of the driver package that was validated and uploaded.
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

## Validate.MongoDb
### Properties
* **input**: [MongoDbMigrationSettings](#mongodbmigrationsettings): Describes how a MongoDB data migration should be performed
* **output**: [Migration](#migration)[] (ReadOnly): An array containing a single MongoDbMigrationProgress object
* **taskType**: 'Validate.MongoDb' (Required): Properties for the task that validates a migration between MongoDB data sources

## Validate.Oracle.AzureDbPostgreSql.Sync
### Properties
* **input**: [MigrateOracleAzureDbPostgreSqlSyncTaskInput](#migrateoracleazuredbpostgresqlsynctaskinput): Input for the task that migrates Oracle databases to Azure Database for PostgreSQL for online migrations
* **output**: [ValidateOracleAzureDbPostgreSqlSyncTaskOutput](#validateoracleazuredbpostgresqlsynctaskoutput)[] (ReadOnly): An array containing a single validation error response object
* **taskType**: 'Validate.Oracle.AzureDbPostgreSql.Sync' (Required): Properties for the task that validates a migration for Oracle to Azure Database for PostgreSQL for online migrations

## ValidateOracleAzureDbPostgreSqlSyncTaskOutput
### Properties
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Errors associated with a selected database object

## ValidateMigrationInput.SqlServer.AzureSqlDbMI
### Properties
* **input**: [ValidateMigrationInputSqlServerSqlMITaskInput](#validatemigrationinputsqlserversqlmitaskinput): Input for task that validates migration input for SQL to Azure SQL Managed Instance
* **output**: [ValidateMigrationInputSqlServerSqlMITaskOutput](#validatemigrationinputsqlserversqlmitaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ValidateMigrationInput.SqlServer.AzureSqlDbMI' (Required): Properties for task that validates migration input for SQL to Azure SQL Database Managed Instance

## ValidateMigrationInputSqlServerSqlMITaskInput
### Properties
* **backupBlobShare**: [BlobShare](#blobshare) (Required): Blob container storage information.
* **backupFileShare**: [FileShare](#fileshare): File share information with Path, Username, and Password.
* **backupMode**: 'CreateBackup' | 'ExistingBackup': Backup Mode to specify whether to use existing backup or create new backup.
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
* **backupType**: 'Database' | 'DifferentialDatabase' | 'DifferentialFile' | 'DifferentialPartial' | 'File' | 'Partial' | 'TransactionLog' (ReadOnly): Backup Type.
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

