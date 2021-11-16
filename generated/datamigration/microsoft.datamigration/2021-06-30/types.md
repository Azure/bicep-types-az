# Microsoft.DataMigration @ 2021-06-30

## Resource Microsoft.DataMigration/services@2021-06-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-30' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: HTTP strong entity tag value. Ignored if submitted
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: The resource kind. Only 'vm' (the default) is supported.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataMigrationServiceProperties](#datamigrationserviceproperties): Properties of the Database Migration Service instance
* **sku**: [ServiceSku](#servicesku): An Azure SKU instance
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DataMigration/services' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataMigration/services/projects@2021-06-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-30' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectProperties](#projectproperties): Project-specific properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DataMigration/services/projects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataMigration/services/projects/files@2021-06-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-30' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: HTTP strong entity tag value. This is ignored if submitted.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectFileProperties](#projectfileproperties): Base class for file properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataMigration/services/projects/files' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataMigration/services/projects/tasks@2021-06-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-30' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: HTTP strong entity tag value. This is ignored if submitted.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectTaskProperties](#projecttaskproperties): Base class for all types of DMS task properties. If task is not supported by current client, this object is returned.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataMigration/services/projects/tasks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataMigration/services/serviceTasks@2021-06-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-30' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: HTTP strong entity tag value. This is ignored if submitted.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectTaskProperties](#projecttaskproperties): Base class for all types of DMS task properties. If task is not supported by current client, this object is returned.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataMigration/services/serviceTasks' (ReadOnly, DeployTimeConstant): The resource type

## DataMigrationServiceProperties
### Properties
* **provisioningState**: 'Accepted' | 'Deleting' | 'Deploying' | 'Failed' | 'FailedToStart' | 'FailedToStop' | 'Starting' | 'Stopped' | 'Stopping' | 'Succeeded' (ReadOnly): The resource's provisioning state
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

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProjectProperties
### Properties
* **creationTime**: string (ReadOnly): UTC Date and time when project was created
* **databasesInfo**: [DatabaseInfo](#databaseinfo)[]: List of DatabaseInfo
* **provisioningState**: 'Deleting' | 'Succeeded' (ReadOnly): The project's provisioning state
* **sourceConnectionInfo**: [ConnectionInfo](#connectioninfo): Defines the connection properties of a server
* **sourcePlatform**: 'MongoDb' | 'MySQL' | 'PostgreSql' | 'SQL' | 'Unknown' (Required): Source platform of the project
* **targetConnectionInfo**: [ConnectionInfo](#connectioninfo): Defines the connection properties of a server
* **targetPlatform**: 'AzureDbForMySql' | 'AzureDbForPostgreSql' | 'MongoDb' | 'SQLDB' | 'SQLMI' | 'Unknown' (Required): Target platform of the project

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
* **type**: 'MiSqlConnectionInfo' (Required): Type of connection info

### MongoDbConnectionInfo
#### Properties
* **connectionString**: string (Required): A MongoDB connection string or blob container URL. The user name and password can be specified here or in the userName and password properties
* **type**: 'MongoDbConnectionInfo' (Required): Type of connection info

### MySqlConnectionInfo
#### Properties
* **encryptConnection**: bool: Whether to encrypt the connection
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
* **authentication**: 'ActiveDirectoryIntegrated' | 'ActiveDirectoryPassword' | 'None' | 'SqlAuthentication' | 'WindowsAuthentication': An enumeration of possible authentication types when connecting
* **dataSource**: string (Required): Data source in the format Protocol:MachineName\SQLServerInstanceName,PortNumber
* **encryptConnection**: bool: Whether to encrypt the connection
* **platform**: 'SqlOnPrem': An enumeration of source platform types
* **trustServerCertificate**: bool: Whether to trust the server certificate
* **type**: 'SqlConnectionInfo' (Required): Type of connection info


## TrackedResourceTags
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
* **clientData**: [ProjectTaskPropertiesClientData](#projecttaskpropertiesclientdata): Key value pairs of client data to attach meta data information to task
* **commands**: [CommandProperties](#commandproperties)[] (ReadOnly): Array of command properties.
* **errors**: [ODataError](#odataerror)[] (ReadOnly): Array of errors. This is ignored if submitted.
* **state**: 'Canceled' | 'Failed' | 'FailedInputValidation' | 'Faulted' | 'Queued' | 'Running' | 'Succeeded' | 'Unknown' (ReadOnly): The state of the task. This is ignored if submitted.
### ConnectToMongoDbTaskProperties
#### Properties
* **input**: [MongoDbConnectionInfo](#mongodbconnectioninfo): Describes a connection to a MongoDB data source
* **output**: [MongoDbClusterInfo](#mongodbclusterinfo)[] (ReadOnly): An array containing a single MongoDbClusterInfo object
* **taskType**: 'Connect.MongoDb' (Required): Task type.

### ConnectToSourceMySqlTaskProperties
#### Properties
* **input**: [ConnectToSourceMySqlTaskInput](#connecttosourcemysqltaskinput): Input for the task that validates MySQL database connection
* **output**: [ConnectToSourceNonSqlTaskOutput](#connecttosourcenonsqltaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToSource.MySql' (Required): Task type.

### ConnectToSourceOracleSyncTaskProperties
#### Properties
* **input**: [ConnectToSourceOracleSyncTaskInput](#connecttosourceoraclesynctaskinput): Input for the task that validates Oracle database connection
* **output**: [ConnectToSourceOracleSyncTaskOutput](#connecttosourceoraclesynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToSource.Oracle.Sync' (Required): Task type.

### ConnectToSourcePostgreSqlSyncTaskProperties
#### Properties
* **input**: [ConnectToSourcePostgreSqlSyncTaskInput](#connecttosourcepostgresqlsynctaskinput): Input for the task that validates connection to PostgreSQL and source server requirements
* **output**: [ConnectToSourcePostgreSqlSyncTaskOutput](#connecttosourcepostgresqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToSource.PostgreSql.Sync' (Required): Task type.

### ConnectToSourceSqlServerTaskProperties
#### Properties
* **input**: [ConnectToSourceSqlServerTaskInput](#connecttosourcesqlservertaskinput): Input for the task that validates connection to SQL Server and also validates source server requirements
* **output**: [ConnectToSourceSqlServerTaskOutput](#connecttosourcesqlservertaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToSource.SqlServer' (Required): Task type.

### ConnectToSourceSqlServerSyncTaskProperties
#### Properties
* **input**: [ConnectToSourceSqlServerTaskInput](#connecttosourcesqlservertaskinput): Input for the task that validates connection to SQL Server and also validates source server requirements
* **output**: [ConnectToSourceSqlServerTaskOutput](#connecttosourcesqlservertaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToSource.SqlServer.Sync' (Required): Task type.

### ConnectToTargetAzureDbForMySqlTaskProperties
#### Properties
* **input**: [ConnectToTargetAzureDbForMySqlTaskInput](#connecttotargetazuredbformysqltaskinput): Input for the task that validates connection to Azure Database for MySQL and target server requirements
* **output**: [ConnectToTargetAzureDbForMySqlTaskOutput](#connecttotargetazuredbformysqltaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.AzureDbForMySql' (Required): Task type.

### ConnectToTargetAzureDbForPostgreSqlSyncTaskProperties
#### Properties
* **input**: [ConnectToTargetAzureDbForPostgreSqlSyncTaskInput](#connecttotargetazuredbforpostgresqlsynctaskinput): Input for the task that validates connection to Azure Database for PostgreSQL and target server requirements
* **output**: [ConnectToTargetAzureDbForPostgreSqlSyncTaskOutput](#connecttotargetazuredbforpostgresqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.AzureDbForPostgreSql.Sync' (Required): Task type.

### ConnectToTargetSqlMITaskProperties
#### Properties
* **input**: [ConnectToTargetSqlMITaskInput](#connecttotargetsqlmitaskinput): Input for the task that validates connection to Azure SQL Database Managed Instance.
* **output**: [ConnectToTargetSqlMITaskOutput](#connecttotargetsqlmitaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.AzureSqlDbMI' (Required): Task type.

### ConnectToTargetSqlMISyncTaskProperties
#### Properties
* **input**: [ConnectToTargetSqlMISyncTaskInput](#connecttotargetsqlmisynctaskinput): Input for the task that validates connection to Azure SQL Database Managed Instance online scenario.
* **output**: [ConnectToTargetSqlMISyncTaskOutput](#connecttotargetsqlmisynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.AzureSqlDbMI.Sync.LRS' (Required): Task type.

### ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskProperties
#### Properties
* **input**: [ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInput](#connecttotargetoracleazuredbforpostgresqlsynctaskinput): Input for the task that validates connection to Azure Database for PostgreSQL and target server requirements for Oracle source.
* **output**: [ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutput](#connecttotargetoracleazuredbforpostgresqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync' (Required): Task type.

### ConnectToTargetSqlDbTaskProperties
#### Properties
* **input**: [ConnectToTargetSqlDbTaskInput](#connecttotargetsqldbtaskinput): Input for the task that validates connection to SQL DB and target server requirements
* **output**: [ConnectToTargetSqlDbTaskOutput](#connecttotargetsqldbtaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.SqlDb' (Required): Task type.

### ConnectToTargetSqlDbSyncTaskProperties
#### Properties
* **input**: [ConnectToTargetSqlDbSyncTaskInput](#connecttotargetsqldbsynctaskinput): Input for the task that validates connection to Azure SQL DB and target server requirements
* **output**: [ConnectToTargetSqlDbTaskOutput](#connecttotargetsqldbtaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ConnectToTarget.SqlDb.Sync' (Required): Task type.

### GetTdeCertificatesSqlTaskProperties
#### Properties
* **input**: [GetTdeCertificatesSqlTaskInput](#gettdecertificatessqltaskinput): Input for the task that gets TDE certificates in Base64 encoded format.
* **output**: [GetTdeCertificatesSqlTaskOutput](#gettdecertificatessqltaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'GetTDECertificates.Sql' (Required): Task type.

### GetUserTablesSqlSyncTaskProperties
#### Properties
* **input**: [GetUserTablesSqlSyncTaskInput](#getusertablessqlsynctaskinput): Input for the task that collects user tables for the given list of databases
* **output**: [GetUserTablesSqlSyncTaskOutput](#getusertablessqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'GetUserTables.AzureSqlDb.Sync' (Required): Task type.

### GetUserTablesSqlTaskProperties
#### Properties
* **input**: [GetUserTablesSqlTaskInput](#getusertablessqltaskinput): Input for the task that collects user tables for the given list of databases
* **output**: [GetUserTablesSqlTaskOutput](#getusertablessqltaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'GetUserTables.Sql' (Required): Task type.

### GetUserTablesMySqlTaskProperties
#### Properties
* **input**: [GetUserTablesMySqlTaskInput](#getusertablesmysqltaskinput): Input for the task that collects user tables for the given list of databases
* **output**: [GetUserTablesMySqlTaskOutput](#getusertablesmysqltaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'GetUserTablesMySql' (Required): Task type.

### GetUserTablesOracleTaskProperties
#### Properties
* **input**: [GetUserTablesOracleTaskInput](#getusertablesoracletaskinput): Input for the task that gets the list of tables contained within a provided list of Oracle schemas.
* **output**: [GetUserTablesOracleTaskOutput](#getusertablesoracletaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'GetUserTablesOracle' (Required): Task type.

### GetUserTablesPostgreSqlTaskProperties
#### Properties
* **input**: [GetUserTablesPostgreSqlTaskInput](#getusertablespostgresqltaskinput): Input for the task that gets the list of tables for a provided list of PostgreSQL databases.
* **output**: [GetUserTablesPostgreSqlTaskOutput](#getusertablespostgresqltaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'GetUserTablesPostgreSql' (Required): Task type.

### MigrateMongoDbTaskProperties
#### Properties
* **input**: [MongoDbMigrationSettings](#mongodbmigrationsettings): Describes how a MongoDB data migration should be performed
* **output**: [MongoDbProgress](#mongodbprogress)[] (ReadOnly): Array of MongoDbProgress
* **taskType**: 'Migrate.MongoDb' (Required): Task type.

### MigrateMySqlAzureDbForMySqlOfflineTaskProperties
#### Properties
* **input**: [MigrateMySqlAzureDbForMySqlOfflineTaskInput](#migratemysqlazuredbformysqlofflinetaskinput): Input for the task that migrates MySQL databases to Azure Database for MySQL for offline migrations
* **output**: [MigrateMySqlAzureDbForMySqlOfflineTaskOutput](#migratemysqlazuredbformysqlofflinetaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.MySql.AzureDbForMySql' (Required): Task type.

### MigrateMySqlAzureDbForMySqlSyncTaskProperties
#### Properties
* **input**: [MigrateMySqlAzureDbForMySqlSyncTaskInput](#migratemysqlazuredbformysqlsynctaskinput): Input for the task that migrates MySQL databases to Azure Database for MySQL for online migrations
* **output**: [MigrateMySqlAzureDbForMySqlSyncTaskOutput](#migratemysqlazuredbformysqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.MySql.AzureDbForMySql.Sync' (Required): Task type.

### MigrateOracleAzureDbForPostgreSqlSyncTaskProperties
#### Properties
* **input**: [MigrateOracleAzureDbPostgreSqlSyncTaskInput](#migrateoracleazuredbpostgresqlsynctaskinput): Input for the task that migrates Oracle databases to Azure Database for PostgreSQL for online migrations
* **output**: [MigrateOracleAzureDbPostgreSqlSyncTaskOutput](#migrateoracleazuredbpostgresqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.Oracle.AzureDbForPostgreSql.Sync' (Required): Task type.

### MigratePostgreSqlAzureDbForPostgreSqlSyncTaskProperties
#### Properties
* **input**: [MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput](#migratepostgresqlazuredbforpostgresqlsynctaskinput): Input for the task that migrates PostgreSQL databases to Azure Database for PostgreSQL for online migrations
* **output**: [MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput](#migratepostgresqlazuredbforpostgresqlsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2' (Required): Task type.

### MigrateSqlServerSqlDbSyncTaskProperties
#### Properties
* **input**: [MigrateSqlServerSqlDbSyncTaskInput](#migratesqlserversqldbsynctaskinput): Input for the task that migrates on-prem SQL Server databases to Azure SQL Database for online migrations
* **output**: [MigrateSqlServerSqlDbSyncTaskOutput](#migratesqlserversqldbsynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.SqlServer.AzureSqlDb.Sync' (Required): Task type.

### MigrateSqlServerSqlMITaskProperties
#### Properties
* **input**: [MigrateSqlServerSqlMITaskInput](#migratesqlserversqlmitaskinput): Input for task that migrates SQL Server databases to Azure SQL Database Managed Instance.
* **output**: [MigrateSqlServerSqlMITaskOutput](#migratesqlserversqlmitaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.SqlServer.AzureSqlDbMI' (Required): Task type.

### MigrateSqlServerSqlMISyncTaskProperties
#### Properties
* **input**: [MigrateSqlServerSqlMISyncTaskInput](#migratesqlserversqlmisynctaskinput): Input for task that migrates SQL Server databases to Azure SQL Database Managed Instance online scenario.
* **output**: [MigrateSqlServerSqlMISyncTaskOutput](#migratesqlserversqlmisynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.SqlServer.AzureSqlDbMI.Sync.LRS' (Required): Task type.

### MigrateSqlServerSqlDbTaskProperties
#### Properties
* **input**: [MigrateSqlServerSqlDbTaskInput](#migratesqlserversqldbtaskinput): Input for the task that migrates on-prem SQL Server databases to Azure SQL Database
* **output**: [MigrateSqlServerSqlDbTaskOutput](#migratesqlserversqldbtaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.SqlServer.SqlDb' (Required): Task type.

### MigrateSsisTaskProperties
#### Properties
* **input**: [MigrateSsisTaskInput](#migratessistaskinput): Input for task that migrates SSIS packages from SQL Server to Azure SQL Database Managed Instance.
* **output**: [MigrateSsisTaskOutput](#migratessistaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'Migrate.Ssis' (Required): Task type.

### MigrateSchemaSqlServerSqlDbTaskProperties
#### Properties
* **input**: [MigrateSchemaSqlServerSqlDbTaskInput](#migrateschemasqlserversqldbtaskinput): Input for task that migrates Schema for SQL Server databases to Azure SQL databases
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
* **input**: [ValidateMigrationInputSqlServerSqlMITaskInput](#validatemigrationinputsqlserversqlmitaskinput): Input for task that validates migration input for SQL to Azure SQL Managed Instance
* **output**: [ValidateMigrationInputSqlServerSqlMITaskOutput](#validatemigrationinputsqlserversqlmitaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ValidateMigrationInput.SqlServer.AzureSqlDbMI' (Required): Task type.

### ValidateMigrationInputSqlServerSqlMISyncTaskProperties
#### Properties
* **input**: [ValidateMigrationInputSqlServerSqlMISyncTaskInput](#validatemigrationinputsqlserversqlmisynctaskinput): Input for task that migrates SQL Server databases to Azure SQL Database Managed Instance online scenario.
* **output**: [ValidateMigrationInputSqlServerSqlMISyncTaskOutput](#validatemigrationinputsqlserversqlmisynctaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS' (Required): Task type.

### ValidateMigrationInputSqlServerSqlDbSyncTaskProperties
#### Properties
* **input**: [ValidateSyncMigrationInputSqlServerTaskInput](#validatesyncmigrationinputsqlservertaskinput): Input for task that validates migration input for SQL sync migrations
* **output**: [ValidateSyncMigrationInputSqlServerTaskOutput](#validatesyncmigrationinputsqlservertaskoutput)[] (ReadOnly): Task output. This is ignored if submitted.
* **taskType**: 'ValidateMigrationInput.SqlServer.SqlDb.Sync' (Required): Task type.


## ProjectTaskPropertiesClientData
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CommandProperties
* **Discriminator**: commandType

### Base Properties
* **errors**: [ODataError](#odataerror)[] (ReadOnly): Array of errors. This is ignored if submitted.
* **state**: 'Accepted' | 'Failed' | 'Running' | 'Succeeded' | 'Unknown' (ReadOnly): The state of the command. This is ignored if submitted.
### MongoDbCancelCommand
#### Properties
* **commandType**: 'cancel' (Required): Command type.
* **input**: [MongoDbCommandInput](#mongodbcommandinput): Describes the input to the 'cancel' and 'restart' MongoDB migration commands

### MongoDbFinishCommand
#### Properties
* **commandType**: 'finish' (Required): Command type.
* **input**: [MongoDbFinishCommandInput](#mongodbfinishcommandinput): Describes the input to the 'finish' MongoDB migration command

### MigrateMISyncCompleteCommandProperties
#### Properties
* **commandType**: 'Migrate.SqlServer.AzureDbSqlMi.Complete' (Required): Command type.
* **input**: [MigrateMISyncCompleteCommandInput](#migratemisynccompletecommandinput): Input for command that completes online migration for an Azure SQL Database Managed Instance.
* **output**: [MigrateMISyncCompleteCommandOutput](#migratemisynccompletecommandoutput) (ReadOnly): Output for command that completes online migration for an Azure SQL Database Managed Instance.

### MigrateSyncCompleteCommandProperties
#### Properties
* **commandType**: 'Migrate.Sync.Complete.Database' (Required): Command type.
* **input**: [MigrateSyncCompleteCommandInput](#migratesynccompletecommandinput): Input for command that completes sync migration for a database.
* **output**: [MigrateSyncCompleteCommandOutput](#migratesynccompletecommandoutput) (ReadOnly): Output for command that completes sync migration for a database.

### MongoDbRestartCommand
#### Properties
* **commandType**: 'restart' (Required): Command type.
* **input**: [MongoDbCommandInput](#mongodbcommandinput): Describes the input to the 'cancel' and 'restart' MongoDB migration commands


## ODataError
### Properties
* **code**: string: The machine-readable description of the error, such as 'InvalidRequest' or 'InternalServerError'
* **details**: [ODataError](#odataerror)[]: Inner errors that caused this error
* **message**: string: The human-readable description of the error

## MongoDbCommandInput
### Properties
* **objectName**: string: The qualified name of a database or collection to act upon, or null to act upon the entire migration

## MongoDbFinishCommandInput
### Properties
* **immediate**: bool (Required): If true, replication for the affected objects will be stopped immediately. If false, the migrator will finish replaying queued events before finishing the replication.
* **objectName**: string: The qualified name of a database or collection to act upon, or null to act upon the entire migration

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

## MigrateSyncCompleteCommandInput
### Properties
* **commitTimeStamp**: string: Time stamp to complete
* **databaseName**: string (Required): Name of database

## MigrateSyncCompleteCommandOutput
### Properties
* **errors**: [ReportableException](#reportableexception)[] (ReadOnly): List of errors that happened during the command execution
* **id**: string (ReadOnly): Result identifier

## MongoDbConnectionInfo
### Properties
* **connectionString**: string (Required): A MongoDB connection string or blob container URL. The user name and password can be specified here or in the userName and password properties
* **password**: string: Password credential.
* **type**: string (Required): Type of connection info
* **userName**: string: User name

## MongoDbClusterInfo
### Properties
* **databases**: [MongoDbDatabaseInfo](#mongodbdatabaseinfo)[] (Required): A list of non-system databases in the cluster
* **supportsSharding**: bool (Required): Whether the cluster supports sharded collections
* **type**: 'BlobContainer' | 'CosmosDb' | 'MongoDb' (Required): The type of data source
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
* **order**: 'Forward' | 'Hashed' | 'Reverse' (Required): The field ordering

## ConnectToSourceMySqlTaskInput
### Properties
* **checkPermissionsGroup**: 'Default' | 'MigrationFromMySQLToAzureDBForMySQL' | 'MigrationFromSqlServerToAzureDB' | 'MigrationFromSqlServerToAzureMI': Permission group for validations. These groups will run a set of permissions for validating user activity. Select the permission group for the activity that you are performing.
* **isOfflineMigration**: bool: Flag for whether or not the migration is offline
* **sourceConnectionInfo**: [MySqlConnectionInfo](#mysqlconnectioninfo) (Required): Information for connecting to MySQL server
* **targetPlatform**: 'AzureDbForMySQL' | 'SqlServer': An enumeration of possible target types when migrating from MySQL

## MySqlConnectionInfo
### Properties
* **encryptConnection**: bool: Whether to encrypt the connection
* **password**: string: Password credential.
* **port**: int (Required): Port for Server
* **serverName**: string (Required): Name of the server
* **type**: string (Required): Type of connection info
* **userName**: string: User name

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

## ConnectToSourceOracleSyncTaskInput
### Properties
* **sourceConnectionInfo**: [OracleConnectionInfo](#oracleconnectioninfo) (Required): Information for connecting to Oracle server

## OracleConnectionInfo
### Properties
* **dataSource**: string (Required): EZConnect or TNSName connection string.
* **password**: string: Password credential.
* **type**: string (Required): Type of connection info
* **userName**: string: User name

## ConnectToSourceOracleSyncTaskOutput
### Properties
* **databases**: string[] (ReadOnly): List of schemas on source server
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Version of the source server
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors associated with the task

## ConnectToSourcePostgreSqlSyncTaskInput
### Properties
* **sourceConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required): Information for connecting to PostgreSQL server

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

## ConnectToSourcePostgreSqlSyncTaskOutput
### Properties
* **databases**: string[] (ReadOnly): List of databases on source server
* **id**: string (ReadOnly): Result identifier
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Version of the source server
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors associated with the task

## ConnectToSourceSqlServerTaskInput
### Properties
* **checkPermissionsGroup**: 'Default' | 'MigrationFromMySQLToAzureDBForMySQL' | 'MigrationFromSqlServerToAzureDB' | 'MigrationFromSqlServerToAzureMI': Permission group for validations. These groups will run a set of permissions for validating user activity. Select the permission group for the activity that you are performing.
* **collectAgentJobs**: bool: Flag for whether to collect agent jobs from source server.
* **collectDatabases**: bool: Flag for whether to collect databases from source server.
* **collectLogins**: bool: Flag for whether to collect logins from source server.
* **collectTdeCertificateInfo**: bool: Flag for whether to collect TDE Certificate names from source server.
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
* **validateSsisCatalogOnly**: bool: Flag for whether to validate SSIS catalog is reachable on the source server.

## SqlConnectionInfo
### Properties
* **additionalSettings**: string: Additional connection settings
* **authentication**: 'ActiveDirectoryIntegrated' | 'ActiveDirectoryPassword' | 'None' | 'SqlAuthentication' | 'WindowsAuthentication': An enumeration of possible authentication types when connecting
* **dataSource**: string (Required): Data source in the format Protocol:MachineName\SQLServerInstanceName,PortNumber
* **encryptConnection**: bool: Whether to encrypt the connection
* **password**: string: Password credential.
* **platform**: 'SqlOnPrem': An enumeration of source platform types
* **trustServerCertificate**: bool: Whether to trust the server certificate
* **type**: string (Required): Type of connection info
* **userName**: string: User name

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
* **migrationEligibility**: [MigrationEligibilityInfo](#migrationeligibilityinfo) (ReadOnly): Information about migration eligibility of a server object
* **name**: string (ReadOnly): Agent Job name
* **resultType**: 'AgentJobLevelOutput' (Required): Type of result - database level or task level
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

### ConnectToSourceSqlServerTaskOutputDatabaseLevel
#### Properties
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly): An enumeration of SQL Server database compatibility levels
* **databaseFiles**: [DatabaseFileInfo](#databasefileinfo)[] (ReadOnly): The list of database files
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly): An enumeration of SQL Server Database states
* **name**: string (ReadOnly): Database name
* **resultType**: 'DatabaseLevelOutput' (Required): Type of result - database level or task level
* **sizeMB**: int (ReadOnly): Size of the file in megabytes

### ConnectToSourceSqlServerTaskOutputLoginLevel
#### Properties
* **defaultDatabase**: string (ReadOnly): The default database for the login.
* **isEnabled**: bool (ReadOnly): The state of the login.
* **loginType**: 'AsymmetricKey' | 'Certificate' | 'ExternalGroup' | 'ExternalUser' | 'SqlLogin' | 'WindowsGroup' | 'WindowsUser' (ReadOnly): Enum mapping of SMO LoginType.
* **migrationEligibility**: [MigrationEligibilityInfo](#migrationeligibilityinfo) (ReadOnly): Information about migration eligibility of a server object
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


## MigrationEligibilityInfo
### Properties
* **isEligibleForMigration**: bool (ReadOnly): Whether object is eligible for migration or not.
* **validationMessages**: string[] (ReadOnly): Information about eligibility failure for the server object.

## DatabaseFileInfo
### Properties
* **databaseName**: string: Name of the database
* **fileType**: 'Filestream' | 'Fulltext' | 'Log' | 'NotSupported' | 'Rows': An enumeration of SQL Server database file types
* **id**: string: Unique identifier for database file
* **logicalName**: string: Logical name of the file
* **physicalFullName**: string: Operating-system full path of the file
* **restoreFullName**: string: Suggested full path of the file for restoring
* **sizeMB**: int: Size of the file in megabytes

## ConnectToTargetAzureDbForMySqlTaskInput
### Properties
* **isOfflineMigration**: bool: Flag for whether or not the migration is offline
* **sourceConnectionInfo**: [MySqlConnectionInfo](#mysqlconnectioninfo) (Required): Information for connecting to MySQL server
* **targetConnectionInfo**: [MySqlConnectionInfo](#mysqlconnectioninfo) (Required): Information for connecting to MySQL server

## ConnectToTargetAzureDbForMySqlTaskOutput
### Properties
* **databases**: string[] (ReadOnly): List of databases on target server
* **id**: string (ReadOnly): Result identifier
* **serverVersion**: string (ReadOnly): Version of the target server
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors associated with the task

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

## ConnectToTargetSqlMISyncTaskInput
### Properties
* **azureApp**: [AzureActiveDirectoryApp](#azureactivedirectoryapp) (Required): Azure Active Directory Application
* **targetConnectionInfo**: [MiSqlConnectionInfo](#misqlconnectioninfo) (Required): Properties required to create a connection to Azure SQL database Managed instance

## AzureActiveDirectoryApp
### Properties
* **appKey**: string (Required): Key used to authenticate to the Azure Active Directory Application
* **applicationId**: string (Required): Application ID of the Azure Active Directory Application
* **tenantId**: string (Required): Tenant id of the customer

## MiSqlConnectionInfo
### Properties
* **managedInstanceResourceId**: string (Required): Resource id for Azure SQL database Managed instance
* **password**: string: Password credential.
* **type**: string (Required): Type of connection info
* **userName**: string: User name

## ConnectToTargetSqlMISyncTaskOutput
### Properties
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Target server version
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

## ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInput
### Properties
* **targetConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required): Information for connecting to PostgreSQL server

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
* **schemas**: string[]: Array of ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutputDatabaseSchemaMapPropertiesItemsItem

## ConnectToTargetSqlDbTaskInput
### Properties
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server

## ConnectToTargetSqlDbTaskOutput
### Properties
* **databases**: string (ReadOnly): Source databases as a map from database name to database id
* **id**: string (ReadOnly): Result identifier
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Version of the target server

## ConnectToTargetSqlDbSyncTaskInput
### Properties
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server

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
* **base64EncodedCertificates**: string (ReadOnly): Mapping from certificate name to base 64 encoded format.
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

## GetUserTablesSqlSyncTaskInput
### Properties
* **selectedSourceDatabases**: string[] (Required): List of source database names to collect tables for
* **selectedTargetDatabases**: string[] (Required): List of target database names to collect tables for
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server

## GetUserTablesSqlSyncTaskOutput
### Properties
* **databasesToSourceTables**: string (ReadOnly): Mapping from database name to list of source tables
* **databasesToTargetTables**: string (ReadOnly): Mapping from database name to list of target tables
* **tableValidationErrors**: string (ReadOnly): Mapping from database name to list of validation errors
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

## GetUserTablesSqlTaskInput
### Properties
* **connectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
* **selectedDatabases**: string[] (Required): List of database names to collect tables for

## GetUserTablesSqlTaskOutput
### Properties
* **databasesToTables**: string (ReadOnly): Mapping from database name to list of tables
* **id**: string (ReadOnly): Result identifier
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

## GetUserTablesMySqlTaskInput
### Properties
* **connectionInfo**: [MySqlConnectionInfo](#mysqlconnectioninfo) (Required): Information for connecting to MySQL server
* **selectedDatabases**: string[] (Required): List of database names to collect tables for

## GetUserTablesMySqlTaskOutput
### Properties
* **databasesToTables**: string (ReadOnly): Mapping from database name to list of tables
* **id**: string (ReadOnly): Result identifier
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

## GetUserTablesOracleTaskInput
### Properties
* **connectionInfo**: [OracleConnectionInfo](#oracleconnectioninfo) (Required): Information for connecting to Oracle server
* **selectedSchemas**: string[] (Required): List of Oracle schemas for which to collect tables

## GetUserTablesOracleTaskOutput
### Properties
* **schemaName**: string (ReadOnly): The schema this result is for
* **tables**: [DatabaseTable](#databasetable)[] (ReadOnly): List of valid tables found for this schema
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors associated with the task

## DatabaseTable
### Properties
* **hasRows**: bool (ReadOnly): Indicates whether table is empty or not
* **name**: string (ReadOnly): Schema-qualified name of the table

## GetUserTablesPostgreSqlTaskInput
### Properties
* **connectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required): Information for connecting to PostgreSQL server
* **selectedDatabases**: string[] (Required): List of PostgreSQL databases for which to collect tables

## GetUserTablesPostgreSqlTaskOutput
### Properties
* **databaseName**: string (ReadOnly): The database this result is for
* **tables**: [DatabaseTable](#databasetable)[] (ReadOnly): List of valid tables found for this database
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors associated with the task

## MongoDbMigrationSettings
### Properties
* **boostRUs**: int: The RU limit on a CosmosDB target that collections will be temporarily increased to (if lower) during the initial copy of a migration, from 10,000 to 1,000,000, or 0 to use the default boost (which is generally the maximum), or null to not boost the RUs. This setting has no effect on non-CosmosDB targets.
* **databases**: [MongoDbMigrationSettingsDatabases](#mongodbmigrationsettingsdatabases) (Required): The databases on the source cluster to migrate to the target. The keys are the names of the databases.
* **replication**: 'Continuous' | 'Disabled' | 'OneTime': Describes how changes will be replicated from the source to the target. The default is OneTime.
* **source**: [MongoDbConnectionInfo](#mongodbconnectioninfo) (Required): Describes a connection to a MongoDB data source
* **target**: [MongoDbConnectionInfo](#mongodbconnectioninfo) (Required): Describes a connection to a MongoDB data source
* **throttling**: [MongoDbThrottlingSettings](#mongodbthrottlingsettings): Specifies resource limits for the migration

## MongoDbMigrationSettingsDatabases
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbDatabaseSettings](#mongodbdatabasesettings)

## MongoDbDatabaseSettings
### Properties
* **collections**: [MongoDbDatabaseSettingsCollections](#mongodbdatabasesettingscollections) (Required): The collections on the source database to migrate to the target. The keys are the unqualified names of the collections.
* **targetRUs**: int: The RUs that should be configured on a CosmosDB target, or null to use the default, or 0 if throughput should not be provisioned for the database. This has no effect on non-CosmosDB targets.

## MongoDbDatabaseSettingsCollections
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
* **errors**: [MongoDbProgressErrors](#mongodbprogresserrors) (Required): The errors and warnings that have occurred for the current object. The keys are the error codes.
* **eventsPending**: int (Required): The number of oplog events awaiting replay
* **eventsReplayed**: int (Required): The number of oplog events replayed so far
* **lastEventTime**: string: The timestamp of the last oplog event received, or null if no oplog event has been received yet
* **lastReplayTime**: string: The timestamp of the last oplog event replayed, or null if no oplog event has been replayed yet
* **name**: string: The name of the progress object. For a collection, this is the unqualified collection name. For a database, this is the database name. For the overall migration, this is null.
* **qualifiedName**: string: The qualified name of the progress object. For a collection, this is the database-qualified name. For a database, this is the database name. For the overall migration, this is null.
* **state**: 'Canceled' | 'Complete' | 'Copying' | 'Failed' | 'Finalizing' | 'InitialReplay' | 'Initializing' | 'NotStarted' | 'Replaying' | 'Restarting' | 'ValidatingInput' (Required)
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

## MongoDbError
### Properties
* **code**: string: The non-localized, machine-readable code that describes the error or warning
* **count**: int: The number of times the error or warning has occurred
* **message**: string: The localized, human-readable message that describes the error or warning
* **type**: 'Error' | 'ValidationError' | 'Warning': The type of error or warning

## MongoDbDatabaseProgressCollections
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbCollectionProgress](#mongodbcollectionprogress)

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
* **resultType**: 'Collection' | 'Database' | 'Migration' (Required): The type of progress object
* **state**: 'Canceled' | 'Complete' | 'Copying' | 'Failed' | 'Finalizing' | 'InitialReplay' | 'Initializing' | 'NotStarted' | 'Replaying' | 'Restarting' | 'ValidatingInput' (Required)
* **totalBytes**: int (Required): The total number of document bytes on the source at the beginning of the Copying stage, or -1 if the total size was unknown
* **totalDocuments**: int (Required): The total number of documents on the source at the beginning of the Copying stage, or -1 if the total count was unknown

## MongoDbProgressErrors
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbError](#mongodberror)

## MongoDbMigrationProgressDatabases
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbDatabaseProgress](#mongodbdatabaseprogress)

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
* **resultType**: 'Collection' | 'Database' | 'Migration' (Required): The type of progress object
* **state**: 'Canceled' | 'Complete' | 'Copying' | 'Failed' | 'Finalizing' | 'InitialReplay' | 'Initializing' | 'NotStarted' | 'Replaying' | 'Restarting' | 'ValidatingInput' (Required)
* **totalBytes**: int (Required): The total number of document bytes on the source at the beginning of the Copying stage, or -1 if the total size was unknown
* **totalDocuments**: int (Required): The total number of documents on the source at the beginning of the Copying stage, or -1 if the total count was unknown

## MongoDbDatabaseProgressCollections
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbCollectionProgress](#mongodbcollectionprogress)

## MongoDbProgressErrors
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbError](#mongodberror)

## MigrateMySqlAzureDbForMySqlOfflineTaskInput
### Properties
* **makeSourceServerReadOnly**: bool: Setting to set the source server read only
* **optionalAgentSettings**: [MigrateMySqlAzureDbForMySqlOfflineTaskInputOptionalAgentSettings](#migratemysqlazuredbformysqlofflinetaskinputoptionalagentsettings): Optional parameters for fine tuning the data transfer rate during migration
* **selectedDatabases**: [MigrateMySqlAzureDbForMySqlOfflineDatabaseInput](#migratemysqlazuredbformysqlofflinedatabaseinput)[] (Required): Databases to migrate
* **sourceConnectionInfo**: [MySqlConnectionInfo](#mysqlconnectioninfo) (Required): Information for connecting to MySQL server
* **startedOn**: string: Parameter to specify when the migration started
* **targetConnectionInfo**: [MySqlConnectionInfo](#mysqlconnectioninfo) (Required): Information for connecting to MySQL server

## MigrateMySqlAzureDbForMySqlOfflineTaskInputOptionalAgentSettings
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MigrateMySqlAzureDbForMySqlOfflineDatabaseInput
### Properties
* **name**: string: Name of the database
* **tableMap**: [MigrateMySqlAzureDbForMySqlOfflineDatabaseInputTableMap](#migratemysqlazuredbformysqlofflinedatabaseinputtablemap): Mapping of source to target tables
* **targetDatabaseName**: string: Name of target database. Note: Target database will be truncated before starting migration.

## MigrateMySqlAzureDbForMySqlOfflineDatabaseInputTableMap
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MigrateMySqlAzureDbForMySqlOfflineTaskOutput
* **Discriminator**: resultType

### Base Properties
* **id**: string (ReadOnly): Result identifier
### MigrateMySqlAzureDbForMySqlOfflineTaskOutputDatabaseLevel
#### Properties
* **databaseName**: string (ReadOnly): Name of the database
* **endedOn**: string (ReadOnly): Migration end time
* **errorCount**: int (ReadOnly): Number of database/object errors.
* **errorPrefix**: string (ReadOnly): Wildcard string prefix to use for querying all errors of the item
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly): Migration exceptions and warnings.
* **lastStorageUpdate**: string (ReadOnly): Last time the storage was updated
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

### MigrateMySqlAzureDbForMySqlOfflineTaskOutputError
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Exception object for all custom exceptions
* **resultType**: 'ErrorOutput' (Required): Result type

### MigrateMySqlAzureDbForMySqlOfflineTaskOutputMigrationLevel
#### Properties
* **databases**: string: Selected databases as a map from database name to database id
* **databaseSummary**: string (ReadOnly): Summary of database results in the migration
* **durationInSeconds**: int (ReadOnly): Duration of task execution in seconds.
* **endedOn**: string (ReadOnly): Migration end time
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly): Migration exceptions and warnings.
* **lastStorageUpdate**: string (ReadOnly): Last time the storage was updated
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

### MigrateMySqlAzureDbForMySqlOfflineTaskOutputTableLevel
#### Properties
* **endedOn**: string (ReadOnly): Migration end time
* **errorPrefix**: string (ReadOnly): Wildcard string prefix to use for querying all errors of the item
* **itemsCompletedCount**: int (ReadOnly): Number of successfully completed items
* **itemsCount**: int (ReadOnly): Number of items
* **lastStorageUpdate**: string (ReadOnly): Last time the storage was updated
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

## MigrateMySqlAzureDbForMySqlSyncTaskInput
### Properties
* **selectedDatabases**: [MigrateMySqlAzureDbForMySqlSyncDatabaseInput](#migratemysqlazuredbformysqlsyncdatabaseinput)[] (Required): Databases to migrate
* **sourceConnectionInfo**: [MySqlConnectionInfo](#mysqlconnectioninfo) (Required): Information for connecting to MySQL server
* **targetConnectionInfo**: [MySqlConnectionInfo](#mysqlconnectioninfo) (Required): Information for connecting to MySQL server

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
* **migrationState**: 'BACKUP_COMPLETED' | 'BACKUP_IN_PROGRESS' | 'CANCELLED' | 'CANCELLING' | 'COMPLETE' | 'COMPLETING' | 'CONFIGURING' | 'FAILED' | 'INITIALIAZING' | 'READY_TO_COMPLETE' | 'RESTORE_COMPLETED' | 'RESTORE_IN_PROGRESS' | 'RUNNING' | 'STARTING' | 'UNDEFINED' | 'VALIDATING' | 'VALIDATION_COMPLETE' | 'VALIDATION_FAILED' (ReadOnly): Enum of the different state of database level online migration.
* **resultType**: 'DatabaseLevelOutput' (Required): Result type
* **startedOn**: string (ReadOnly): Migration start time

### MigrateMySqlAzureDbForMySqlSyncTaskOutputError
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Exception object for all custom exceptions
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
* **state**: 'BEFORE_LOAD' | 'CANCELED' | 'COMPLETED' | 'ERROR' | 'FAILED' | 'FULL_LOAD' (ReadOnly): Enum of the different state of table level online migration.
* **tableName**: string (ReadOnly): Name of the table
* **totalChangesApplied**: int (ReadOnly): Total number of applied changes


## SyncMigrationDatabaseErrorEvent
### Properties
* **eventText**: string (ReadOnly): Event text.
* **eventTypeString**: string (ReadOnly): Event type.
* **timestampString**: string (ReadOnly): String value of timestamp.

## MigrateOracleAzureDbPostgreSqlSyncTaskInput
### Properties
* **selectedDatabases**: [MigrateOracleAzureDbPostgreSqlSyncDatabaseInput](#migrateoracleazuredbpostgresqlsyncdatabaseinput)[] (Required): Databases to migrate
* **sourceConnectionInfo**: [OracleConnectionInfo](#oracleconnectioninfo) (Required): Information for connecting to Oracle server
* **targetConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required): Information for connecting to PostgreSQL server

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
* **migrationState**: 'BACKUP_COMPLETED' | 'BACKUP_IN_PROGRESS' | 'CANCELLED' | 'CANCELLING' | 'COMPLETE' | 'COMPLETING' | 'CONFIGURING' | 'FAILED' | 'INITIALIAZING' | 'READY_TO_COMPLETE' | 'RESTORE_COMPLETED' | 'RESTORE_IN_PROGRESS' | 'RUNNING' | 'STARTING' | 'UNDEFINED' | 'VALIDATING' | 'VALIDATION_COMPLETE' | 'VALIDATION_FAILED' (ReadOnly): Enum of the different state of database level online migration.
* **resultType**: 'DatabaseLevelOutput' (Required): Result type
* **startedOn**: string (ReadOnly): Migration start time

### MigrateOracleAzureDbPostgreSqlSyncTaskOutputError
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Exception object for all custom exceptions
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
* **state**: 'BEFORE_LOAD' | 'CANCELED' | 'COMPLETED' | 'ERROR' | 'FAILED' | 'FULL_LOAD' (ReadOnly): Enum of the different state of table level online migration.
* **tableName**: string (ReadOnly): Name of the table
* **totalChangesApplied**: int (ReadOnly): Total number of applied changes


## MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput
### Properties
* **selectedDatabases**: [MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput](#migratepostgresqlazuredbforpostgresqlsyncdatabaseinput)[] (Required): Databases to migrate
* **sourceConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required): Information for connecting to PostgreSQL server
* **targetConnectionInfo**: [PostgreSqlConnectionInfo](#postgresqlconnectioninfo) (Required): Information for connecting to PostgreSQL server

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

## MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseTableInput
### Properties
* **name**: string: Name of the table to migrate

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
* **migrationState**: 'BACKUP_COMPLETED' | 'BACKUP_IN_PROGRESS' | 'CANCELLED' | 'CANCELLING' | 'COMPLETE' | 'COMPLETING' | 'CONFIGURING' | 'FAILED' | 'INITIALIAZING' | 'READY_TO_COMPLETE' | 'RESTORE_COMPLETED' | 'RESTORE_IN_PROGRESS' | 'RUNNING' | 'STARTING' | 'UNDEFINED' | 'VALIDATING' | 'VALIDATION_COMPLETE' | 'VALIDATION_FAILED' (ReadOnly): Enum of the different state of database level online migration.
* **resultType**: 'DatabaseLevelOutput' (Required): Result type
* **startedOn**: string (ReadOnly): Migration start time

### MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputError
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Exception object for all custom exceptions
* **resultType**: 'ErrorOutput' (Required): Result type

### MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputMigrationLevel
#### Properties
* **endedOn**: string (ReadOnly): Migration end time
* **resultType**: 'MigrationLevelOutput' (Required): Result type
* **sourceServer**: string (ReadOnly): Source server name
* **sourceServerType**: 'Access' | 'DB2' | 'MongoDB' | 'MySQL' | 'MySQLRDS' | 'Oracle' | 'PostgreSQL' | 'PostgreSQLRDS' | 'SQL' | 'SQLRDS' | 'Sybase' (ReadOnly): An enumeration of source type
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'ACTION_REQUIRED' | 'COMPLETE' | 'FAILED' | 'PENDING' | 'UNDEFINED' | 'VALIDATING' (ReadOnly): Wrapper for replicate reported migration states.
* **targetServer**: string (ReadOnly): Target server name
* **targetServerType**: 'AzureDBForMySql' | 'AzureDBForPostgresSQL' | 'MongoDB' | 'SQLDB' | 'SQLDW' | 'SQLMI' | 'SQLServer' (ReadOnly): An enumeration of target type
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
* **state**: 'BEFORE_LOAD' | 'CANCELED' | 'COMPLETED' | 'ERROR' | 'FAILED' | 'FULL_LOAD' (ReadOnly): Enum of the different state of table level online migration.
* **tableName**: string (ReadOnly): Name of the table
* **totalChangesApplied**: int (ReadOnly): Total number of applied changes


## MigrateSqlServerSqlDbSyncTaskInput
### Properties
* **selectedDatabases**: [MigrateSqlServerSqlDbSyncDatabaseInput](#migratesqlserversqldbsyncdatabaseinput)[] (Required): Databases to migrate
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
* **validationOptions**: [MigrationValidationOptions](#migrationvalidationoptions): Types of validations to run after the migration

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

## MigrationValidationOptions
### Properties
* **enableDataIntegrityValidation**: bool: Allows to perform a checksum based data integrity validation between source and target for the selected database / tables .
* **enableQueryAnalysisValidation**: bool: Allows to perform a quick and intelligent query analysis by retrieving queries from the source database and executes them in the target. The result will have execution statistics for executions in source and target databases for the extracted queries.
* **enableSchemaValidation**: bool: Allows to compare the schema information between source and target.

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
* **migrationState**: 'BACKUP_COMPLETED' | 'BACKUP_IN_PROGRESS' | 'CANCELLED' | 'CANCELLING' | 'COMPLETE' | 'COMPLETING' | 'CONFIGURING' | 'FAILED' | 'INITIALIAZING' | 'READY_TO_COMPLETE' | 'RESTORE_COMPLETED' | 'RESTORE_IN_PROGRESS' | 'RUNNING' | 'STARTING' | 'UNDEFINED' | 'VALIDATING' | 'VALIDATION_COMPLETE' | 'VALIDATION_FAILED' (ReadOnly): Enum of the different state of database level online migration.
* **resultType**: 'DatabaseLevelOutput' (Required): Result type
* **startedOn**: string (ReadOnly): Migration start time

### MigrateSqlServerSqlDbSyncTaskOutputError
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Exception object for all custom exceptions
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
* **state**: 'BEFORE_LOAD' | 'CANCELED' | 'COMPLETED' | 'ERROR' | 'FAILED' | 'FULL_LOAD' (ReadOnly): Enum of the different state of table level online migration.
* **tableName**: string (ReadOnly): Name of the table
* **totalChangesApplied**: int (ReadOnly): Total number of applied changes


## MigrateSqlServerSqlMITaskInput
### Properties
* **aadDomainName**: string: Azure Active Directory domain name in the format of 'contoso.com' for federated Azure AD or 'contoso.onmicrosoft.com' for managed domain, required if and only if Windows logins are selected
* **backupBlobShare**: [BlobShare](#blobshare) (Required): Blob container storage information.
* **backupFileShare**: [FileShare](#fileshare): File share information with Path, Username, and Password.
* **backupMode**: 'CreateBackup' | 'ExistingBackup': An enumeration of backup modes
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
### MigrateSqlServerSqlMITaskOutputAgentJobLevel
#### Properties
* **endedOn**: string (ReadOnly): Migration end time
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly): Migration errors and warnings per job
* **isEnabled**: bool (ReadOnly): The state of the original Agent Job.
* **message**: string (ReadOnly): Migration progress message
* **name**: string (ReadOnly): Agent Job name.
* **resultType**: 'AgentJobLevelOutput' (Required): Result type
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration

### MigrateSqlServerSqlMITaskOutputDatabaseLevel
#### Properties
* **databaseName**: string (ReadOnly): Name of the database
* **endedOn**: string (ReadOnly): Migration end time
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly): Migration exceptions and warnings
* **message**: string (ReadOnly): Migration progress message
* **resultType**: 'DatabaseLevelOutput' (Required): Result type
* **sizeMB**: int (ReadOnly): Size of the database in megabytes
* **stage**: 'Backup' | 'Completed' | 'FileCopy' | 'Initialize' | 'None' | 'Restore' (ReadOnly): Current stage of migration
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration

### MigrateSqlServerSqlMITaskOutputError
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Exception object for all custom exceptions
* **resultType**: 'ErrorOutput' (Required): Result type

### MigrateSqlServerSqlMITaskOutputLoginLevel
#### Properties
* **endedOn**: string (ReadOnly): Login migration end time
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly): Login migration errors and warnings per login
* **loginName**: string (ReadOnly): Login name.
* **message**: string (ReadOnly): Login migration progress message
* **resultType**: 'LoginLevelOutput' (Required): Result type
* **stage**: 'AssignRoleMembership' | 'AssignRoleOwnership' | 'Completed' | 'EstablishObjectPermissions' | 'EstablishServerPermissions' | 'EstablishUserMapping' | 'Initialize' | 'LoginMigration' | 'None' (ReadOnly): Enum of the different stage of login migration.
* **startedOn**: string (ReadOnly): Login migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration

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
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly): Current status of migration
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Target server version


## OrphanedUserInfo
### Properties
* **databaseName**: string: Parent database of the user
* **name**: string: Name of the orphaned user

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
### MigrateSqlServerSqlMISyncTaskOutputDatabaseLevel
#### Properties
* **activeBackupSets**: [BackupSetInfo](#backupsetinfo)[] (ReadOnly): Backup sets that are currently active (Either being uploaded or getting restored)
* **containerName**: string (ReadOnly): Name of container created in the Azure Storage account where backups are copied to
* **endedOn**: string (ReadOnly): Database migration end time
* **errorPrefix**: string (ReadOnly): prefix string to use for querying errors for this database
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly): Migration exceptions and warnings
* **fullBackupSetInfo**: [BackupSetInfo](#backupsetinfo) (ReadOnly): Information of backup set
* **isFullBackupRestored**: bool (ReadOnly): Whether full backup has been applied to the target database or not
* **lastRestoredBackupSetInfo**: [BackupSetInfo](#backupsetinfo) (ReadOnly): Information of backup set
* **migrationState**: 'CANCELLED' | 'COMPLETED' | 'CUTOVER_START' | 'FAILED' | 'FULL_BACKUP_UPLOAD_START' | 'INITIAL' | 'LOG_SHIPPING_START' | 'POST_CUTOVER_COMPLETE' | 'UNDEFINED' | 'UPLOAD_LOG_FILES_START' (ReadOnly): Database level migration state.
* **resultType**: 'DatabaseLevelOutput' (Required): Result type
* **sourceDatabaseName**: string (ReadOnly): Name of the database
* **startedOn**: string (ReadOnly): Database migration start time

### MigrateSqlServerSqlMISyncTaskOutputError
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Exception object for all custom exceptions
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
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerName**: string (ReadOnly): Target server name
* **targetServerVersion**: string (ReadOnly): Target server version


## BackupSetInfo
### Properties
* **backupFinishedDate**: string: Date and time that the backup operation finished
* **backupSetId**: string: Id for the set of backup files
* **backupStartDate**: string: Date and time that the backup operation began
* **backupType**: 'Database' | 'DifferentialDatabase' | 'DifferentialFile' | 'DifferentialPartial' | 'File' | 'Partial' | 'TransactionLog': Enum of the different backup types.
* **databaseName**: string: Name of the database to which the backup set belongs
* **firstLsn**: string: First log sequence number of the backup file
* **isBackupRestored**: bool: Whether the backup set is restored or not
* **lastLsn**: string: Last log sequence number of the backup file
* **lastModifiedTime**: string: Last modified time of the backup file in share location
* **listOfBackupFiles**: [BackupFileInfo](#backupfileinfo)[]: List of files in the backup set

## BackupFileInfo
### Properties
* **familySequenceNumber**: int: Sequence number of the backup file in the backup set
* **fileLocation**: string: Location of the backup file in shared folder
* **status**: 'Arrived' | 'Cancelled' | 'Queued' | 'Restored' | 'Restoring' | 'Uploaded' | 'Uploading': An enumeration of Status of the log backup file.

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
* **tableMap**: [MigrateSqlServerSqlDbDatabaseInputTableMap](#migratesqlserversqldbdatabaseinputtablemap): Mapping of source to target tables
* **targetDatabaseName**: string: Name of target database. Note: Target database will be truncated before starting migration.

## MigrateSqlServerSqlDbDatabaseInputTableMap
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

### MigrateSqlServerSqlDbTaskOutputDatabaseLevelValidationResult
#### Properties
* **resultType**: 'MigrationDatabaseLevelValidationOutput' (Required): Result type

### MigrateSqlServerSqlDbTaskOutputMigrationLevel
#### Properties
* **databases**: string (ReadOnly): Selected databases as a map from database name to database id
* **databaseSummary**: string (ReadOnly): Summary of database results in the migration
* **durationInSeconds**: int (ReadOnly): Duration of task execution in seconds.
* **endedOn**: string (ReadOnly): Migration end time
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly): Migration exceptions and warnings.
* **message**: string (ReadOnly): Migration progress message
* **migrationReportResult**: [MigrationReportResult](#migrationreportresult): Migration validation report result, contains the url for downloading the generated report.
* **migrationValidationResult**: [MigrationValidationResult](#migrationvalidationresult): Migration Validation Result
* **resultType**: 'MigrationLevelOutput' (Required): Result type
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly): Current status of migration
* **statusMessage**: string (ReadOnly): Migration status message
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Target server version

### MigrateSqlServerSqlDbTaskOutputValidationResult
#### Properties
* **resultType**: 'MigrationValidationOutput' (Required): Result type

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


## MigrationValidationResult
### Properties
* **id**: string (ReadOnly): Migration validation result identifier
* **migrationId**: string (ReadOnly): Migration Identifier
* **status**: 'Completed' | 'CompletedWithIssues' | 'Default' | 'Failed' | 'InProgress' | 'Initialized' | 'NotStarted' | 'Stopped' (ReadOnly): Current status of the validation
* **summaryResults**: [MigrationValidationResultSummaryResults](#migrationvalidationresultsummaryresults): Validation summary results for each database

## MigrationValidationResultSummaryResults
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
* **status**: 'Completed' | 'CompletedWithIssues' | 'Default' | 'Failed' | 'InProgress' | 'Initialized' | 'NotStarted' | 'Stopped' (ReadOnly): Current status of the validation
* **targetDatabaseName**: string (ReadOnly): Name of the target database

## MigrateSsisTaskInput
### Properties
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server
* **ssisMigrationInfo**: [SsisMigrationInfo](#ssismigrationinfo) (Required): SSIS migration info with SSIS store type, overwrite policy.
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required): Information for connecting to SQL database server

## SsisMigrationInfo
### Properties
* **environmentOverwriteOption**: 'Ignore' | 'Overwrite': The overwrite option for SSIS object migration, only ignore and overwrite are supported in DMS now and future may add Reuse option for container object
* **projectOverwriteOption**: 'Ignore' | 'Overwrite': The overwrite option for SSIS object migration, only ignore and overwrite are supported in DMS now and future may add Reuse option for container object
* **ssisStoreType**: 'SsisCatalog': An enumeration of supported source SSIS store type in DMS

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
* **stage**: 'Completed' | 'InProgress' | 'Initialize' | 'None' (ReadOnly): Current stage of SSIS migration
* **startedOn**: string (ReadOnly): Migration start time
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly): Current status of migration
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
* **stage**: 'Completed' | 'InProgress' | 'Initialize' | 'None' (ReadOnly): Current stage of SSIS migration
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration


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
* **schemaOption**: 'ExtractFromSource' | 'None' | 'UseStorageFile': Option for how schema is extracted and applied to target

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
* **stage**: 'CollectingObjects' | 'Completed' | 'CompletedWithWarnings' | 'DeployingSchema' | 'DownloadingScript' | 'Failed' | 'GeneratingScript' | 'NotStarted' | 'UploadingScript' | 'ValidatingInputs' (ReadOnly): Current stage of schema migration
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration

### MigrateSchemaSqlTaskOutputError
#### Properties
* **error**: [ReportableException](#reportableexception) (ReadOnly): Exception object for all custom exceptions
* **resultType**: 'ErrorOutput' (Required): Result type

### MigrateSchemaSqlServerSqlDbTaskOutputMigrationLevel
#### Properties
* **endedOn**: string (ReadOnly): Migration end time
* **resultType**: 'MigrationLevelOutput' (Required): Result type
* **sourceServerBrandVersion**: string (ReadOnly): Source server brand version
* **sourceServerVersion**: string (ReadOnly): Source server version
* **startedOn**: string (ReadOnly): Migration start time
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly): Current state of migration
* **targetServerBrandVersion**: string (ReadOnly): Target server brand version
* **targetServerVersion**: string (ReadOnly): Target server version

### MigrateSchemaSqlServerSqlDbTaskOutputError
#### Properties
* **commandText**: string (ReadOnly): Schema command which failed
* **errorText**: string (ReadOnly): Reason of failure
* **resultType**: 'SchemaErrorOutput' (Required): Result type


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

## InstallOCIDriverTaskInput
### Properties
* **driverPackageName**: string: Name of the uploaded driver package to install.

## InstallOCIDriverTaskOutput
### Properties
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

## UploadOCIDriverTaskInput
### Properties
* **driverShare**: [FileShare](#fileshare): File share information with Path, Username, and Password.

## UploadOCIDriverTaskOutput
### Properties
* **driverPackageName**: string (ReadOnly): The name of the driver package that was validated and uploaded.
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Validation errors

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
* **resultType**: 'Collection' | 'Database' | 'Migration' (Required): The type of progress object
* **state**: 'Canceled' | 'Complete' | 'Copying' | 'Failed' | 'Finalizing' | 'InitialReplay' | 'Initializing' | 'NotStarted' | 'Replaying' | 'Restarting' | 'ValidatingInput' (Required)
* **totalBytes**: int (Required): The total number of document bytes on the source at the beginning of the Copying stage, or -1 if the total size was unknown
* **totalDocuments**: int (Required): The total number of documents on the source at the beginning of the Copying stage, or -1 if the total count was unknown

## MongoDbMigrationProgressDatabases
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbDatabaseProgress](#mongodbdatabaseprogress)

## MongoDbProgressErrors
### Properties
### Additional Properties
* **Additional Properties Type**: [MongoDbError](#mongodberror)

## ValidateOracleAzureDbPostgreSqlSyncTaskOutput
### Properties
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly): Errors associated with a selected database object

## ValidateMigrationInputSqlServerSqlMITaskInput
### Properties
* **backupBlobShare**: [BlobShare](#blobshare) (Required): Blob container storage information.
* **backupFileShare**: [FileShare](#fileshare): File share information with Path, Username, and Password.
* **backupMode**: 'CreateBackup' | 'ExistingBackup': An enumeration of backup modes
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
* **backupType**: 'Database' | 'DifferentialDatabase' | 'DifferentialFile' | 'DifferentialPartial' | 'File' | 'Partial' | 'TransactionLog' (ReadOnly): Enum of the different backup types.
* **databaseName**: string (ReadOnly): Database name.
* **familyCount**: int (ReadOnly): Number of files in the backup set.
* **isCompressed**: bool (ReadOnly): Whether the backup set is compressed
* **isDamaged**: bool (ReadOnly): Database was damaged when backed up, but the backup operation was requested to continue despite errors.
* **position**: int (ReadOnly): Position of current database backup in the file.

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

