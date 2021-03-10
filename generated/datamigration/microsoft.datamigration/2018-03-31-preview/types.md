# Microsoft.DataMigration @ 2018-03-31-preview

## Resource Microsoft.DataMigration/services@2018-03-31-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-31-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DataMigrationServiceProperties](#datamigrationserviceproperties)
* **sku**: [ServiceSku](#servicesku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DataMigration/services' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataMigration/services/projects@2018-03-31-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-31-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProjectProperties](#projectproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DataMigration/services/projects' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataMigration/services/projects/tasks@2018-03-31-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-31-preview' (ReadOnly, DeployTimeConstant)
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
* **targetPlatform**: 'SQLDB' | 'SQLMI' | 'Unknown' (Required)

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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProjectTaskProperties
* **Discriminator**: taskType
### Base Properties
* **errors**: [ODataError](#odataerror)[] (ReadOnly)
* **state**: 'Canceled' | 'Failed' | 'FailedInputValidation' | 'Faulted' | 'Queued' | 'Running' | 'Succeeded' | 'Unknown' (ReadOnly)
### ConnectToSource.SqlServer
#### Properties
* **input**: [ConnectToSourceSqlServerTaskInput](#connecttosourcesqlservertaskinput)
* **output**: [ConnectToSourceSqlServerTaskOutput](#connecttosourcesqlservertaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToSource.SqlServer' (Required)

### ConnectToTarget.AzureSqlDbMI
#### Properties
* **input**: [ConnectToTargetSqlMITaskInput](#connecttotargetsqlmitaskinput)
* **output**: [ConnectToTargetSqlMITaskOutput](#connecttotargetsqlmitaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToTarget.AzureSqlDbMI' (Required)

### ConnectToTarget.SqlDb
#### Properties
* **input**: [ConnectToTargetSqlDbTaskInput](#connecttotargetsqldbtaskinput)
* **output**: [ConnectToTargetSqlDbTaskOutput](#connecttotargetsqldbtaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToTarget.SqlDb' (Required)

### GetUserTables.Sql
#### Properties
* **input**: [GetUserTablesSqlTaskInput](#getusertablessqltaskinput)
* **output**: [GetUserTablesSqlTaskOutput](#getusertablessqltaskoutput)[] (ReadOnly)
* **taskType**: 'GetUserTables.Sql' (Required)

### Migrate.SqlServer.AzureSqlDbMI
#### Properties
* **input**: [MigrateSqlServerSqlMITaskInput](#migratesqlserversqlmitaskinput)
* **output**: [MigrateSqlServerSqlMITaskOutput](#migratesqlserversqlmitaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.AzureSqlDbMI' (Required)

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


## ODataError
### Properties
* **code**: string
* **details**: [ODataError](#odataerror)[]
* **message**: string

## ConnectToSource.SqlServer
### Properties
* **input**: [ConnectToSourceSqlServerTaskInput](#connecttosourcesqlservertaskinput)
* **output**: [ConnectToSourceSqlServerTaskOutput](#connecttosourcesqlservertaskoutput)[] (ReadOnly)
* **taskType**: 'ConnectToSource.SqlServer' (Required)

## ConnectToSourceSqlServerTaskInput
### Properties
* **checkPermissionsGroup**: 'Default' | 'MigrationFromSqlServerToAzureDB'
* **CollectAgentJobs**: bool
* **CollectLogins**: bool
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
* **AgentJobs**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **databases**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **Logins**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
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
* **AgentJobs**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **databases**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **Logins**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
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

## ReportableException
### Properties
* **filePath**: string
* **hResult**: int
* **lineNumber**: string
* **message**: string
* **stackTrace**: string

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
* **AgentJobs**: string[] (ReadOnly)
* **id**: string (ReadOnly)
* **Logins**: string[] (ReadOnly)
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

## DatabaseTable
### Properties
* **hasRows**: bool (ReadOnly)
* **name**: string (ReadOnly)

## Migrate.SqlServer.AzureSqlDbMI
### Properties
* **input**: [MigrateSqlServerSqlMITaskInput](#migratesqlserversqlmitaskinput)
* **output**: [MigrateSqlServerSqlMITaskOutput](#migratesqlserversqlmitaskoutput)[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.AzureSqlDbMI' (Required)

## MigrateSqlServerSqlMITaskInput
### Properties
* **backupBlobShare**: [BlobShare](#blobshare) (Required)
* **backupFileShare**: [FileShare](#fileshare)
* **selectedAgentJobs**: string[]
* **selectedDatabases**: [MigrateSqlServerSqlMIDatabaseInput](#migratesqlserversqlmidatabaseinput)[] (Required)
* **selectedLogins**: string[]
* **sourceConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)

## BlobShare
### Properties
* **sasUri**: string (Required)

## FileShare
### Properties
* **password**: string
* **path**: string (Required)
* **userName**: string

## MigrateSqlServerSqlMIDatabaseInput
### Properties
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
* **orphanedUsers**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **serverRoleResults**: [Dictionary<string,StartMigrationScenarioServerRoleResult>](#dictionarystringstartmigrationscenarioserverroleresult) (ReadOnly)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)


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
* **orphanedUsers**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
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
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **name**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

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

## MigrationValidationOptions
### Properties
* **enableDataIntegrityValidation**: bool
* **enableQueryAnalysisValidation**: bool
* **enableSchemaValidation**: bool

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

### MigrationLevelOutput
#### Properties
* **agentJobs**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **databases**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: [ReportableException](#reportableexception)[] (ReadOnly)
* **logins**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **message**: string (ReadOnly)
* **orphanedUsers**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
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

## ValidateMigrationInput.SqlServer.AzureSqlDbMI
### Properties
* **input**: [ValidateMigrationInputSqlServerSqlMITaskInput](#validatemigrationinputsqlserversqlmitaskinput)
* **output**: [ValidateMigrationInputSqlServerSqlMITaskOutput](#validatemigrationinputsqlserversqlmitaskoutput)[] (ReadOnly)
* **taskType**: 'ValidateMigrationInput.SqlServer.AzureSqlDbMI' (Required)

## ValidateMigrationInputSqlServerSqlMITaskInput
### Properties
* **backupBlobShare**: [BlobShare](#blobshare) (Required)
* **backupFileShare**: [FileShare](#fileshare)
* **selectedDatabases**: [MigrateSqlServerSqlMIDatabaseInput](#migratesqlserversqlmidatabaseinput)[] (Required)
* **targetConnectionInfo**: [SqlConnectionInfo](#sqlconnectioninfo) (Required)

## ValidateMigrationInputSqlServerSqlMITaskOutput
### Properties
* **backupFolderErrors**: [ReportableException](#reportableexception)[] (ReadOnly)
* **backupShareCredentialsErrors**: [ReportableException](#reportableexception)[] (ReadOnly)
* **backupStorageAccountErrors**: [ReportableException](#reportableexception)[] (ReadOnly)
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **restoreDatabaseNameErrors**: [ReportableException](#reportableexception)[] (ReadOnly)

