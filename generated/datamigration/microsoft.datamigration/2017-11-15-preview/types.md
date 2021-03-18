# Microsoft.DataMigration @ 2017-11-15-preview

## Resource Microsoft.DataMigration/services@2017-11-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-11-15-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DataMigrationServiceProperties](#datamigrationserviceproperties)
* **sku**: [ServiceSku](#servicesku)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.DataMigration/services' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataMigration/services/projects@2017-11-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-11-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProjectProperties](#projectproperties)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.DataMigration/services/projects' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataMigration/services/projects/tasks@2017-11-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-11-15-preview' (ReadOnly, DeployTimeConstant)
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
### SqlConnectionInfo
#### Properties
* **additionalSettings**: string
* **authentication**: 'ActiveDirectoryIntegrated' | 'ActiveDirectoryPassword' | 'None' | 'SqlAuthentication' | 'WindowsAuthentication'
* **dataSource**: string (Required)
* **encryptConnection**: bool
* **password**: string
* **trustServerCertificate**: bool
* **type**: 'SqlConnectionInfo' (Required)
* **userName**: string


## SqlConnectionInfo
### Properties
* **additionalSettings**: string
* **authentication**: 'ActiveDirectoryIntegrated' | 'ActiveDirectoryPassword' | 'None' | 'SqlAuthentication' | 'WindowsAuthentication'
* **dataSource**: string (Required)
* **encryptConnection**: bool
* **password**: string
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
* **errors**: [ODataError](#odataerror)[] (ReadOnly)
* **state**: 'Canceled' | 'Failed' | 'FailedInputValidation' | 'Faulted' | 'Queued' | 'Running' | 'Succeeded' | 'Unknown' (ReadOnly)
### ConnectToSourceSqlServerTaskProperties
#### Properties
* **input**: [ConnectToSourceSqlServerTaskInput](#connecttosourcesqlservertaskinput)
* **output**: [ConnectToSourceSqlServerTaskOutput](#connecttosourcesqlservertaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToSource.SqlServer' (Required)

### ConnectToTargetSqlDbTaskProperties
#### Properties
* **input**: [ConnectToTargetSqlDbTaskInput](#connecttotargetsqldbtaskinput)
* **output**: [ConnectToTargetSqlDbTaskOutput](#connecttotargetsqldbtaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToTarget.SqlDb' (Required)

### GetUserTablesSqlTaskProperties
#### Properties
* **input**: [GetUserTablesSqlTaskInput](#getusertablessqltaskinput)
* **output**: [GetUserTablesSqlTaskOutput](#getusertablessqltaskoutput)[] (ReadOnly)
* **taskType**: 'GetUserTables.Sql' (Required)

### MigrateSqlServerSqlDbTaskProperties
#### Properties
* **input**: [MigrateSqlServerSqlDbTaskInput](#migratesqlserversqldbtaskinput)
* **output**: [MigrateSqlServerSqlDbTaskOutput](#migratesqlserversqldbtaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.SqlDb' (Required)


## ODataError
### Properties
* **code**: string
* **details**: [ODataError](#odataerror)[]
* **message**: string

## ConnectToSourceSqlServerTaskProperties
### Properties
* **input**: [ConnectToSourceSqlServerTaskInput](#connecttosourcesqlservertaskinput)
* **output**: [ConnectToSourceSqlServerTaskOutput](#connecttosourcesqlservertaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToSource.SqlServer' (Required)

## ConnectToSourceSqlServerTaskInput
### Properties
* **checkPermissionsGroup**: 'Default' | 'MigrationFromSqlServerToAzureDB'
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)

## ConnectToSourceSqlServerTaskOutput
* **Discriminator**: resultType

### Base Properties
* **id**: string (ReadOnly)
### ConnectToSourceSqlServerTaskOutputDatabaseLevel
#### Properties
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly)
* **databaseFiles**: [DatabaseFileInfo](#databasefileinfo)[] (ReadOnly)
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **sizeMB**: int (ReadOnly)

### ConnectToSourceSqlServerTaskOutputTaskLevel
#### Properties
* **databases**: string (ReadOnly)
* **resultType**: 'TaskLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)


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

## ConnectToSourceSqlServerTaskOutputTaskLevel
### Properties
* **databases**: string (ReadOnly)
* **resultType**: 'TaskLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **validationErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

## ReportableException
### Properties
* **filePath**: string
* **hResult**: int
* **lineNumber**: string
* **message**: string
* **stackTrace**: string

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

## MigrationValidationOptions
### Properties
* **enableDataIntegrityValidation**: bool
* **enableQueryAnalysisValidation**: bool
* **enableSchemaValidation**: bool

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

### MigrateSqlServerSqlDbTaskOutputMigrationLevel
#### Properties
* **databases**: string (ReadOnly)
* **databaseSummary**: string (ReadOnly)
* **durationInSeconds**: int (ReadOnly)
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **message**: string (ReadOnly)
* **migrationReportResult**: [MigrationReportResult](#migrationreportresult)
* **resultType**: 'MigrationLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly)
* **statusMessage**: string (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

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

## MigrateSqlServerSqlDbTaskOutputMigrationLevel
### Properties
* **databases**: string (ReadOnly)
* **databaseSummary**: string (ReadOnly)
* **durationInSeconds**: int (ReadOnly)
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **message**: string (ReadOnly)
* **migrationReportResult**: [MigrationReportResult](#migrationreportresult)
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
* **id**: string
* **reportUrl**: string

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

