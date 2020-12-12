# Microsoft.DataMigration @ 2018-03-31-preview

## Resource Microsoft.DataMigration/services@2018-03-31-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-31-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DataMigrationServiceProperties
* **sku**: ServiceSku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DataMigration/services' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataMigration/services/projects@2018-03-31-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-31-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProjectProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DataMigration/services/projects' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataMigration/services/projects/tasks@2018-03-31-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-31-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProjectTaskProperties
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
### Additional Properties
* **Additional Properties Type**: string

## ProjectProperties
### Properties
* **creationTime**: string (ReadOnly)
* **databasesInfo**: DatabaseInfo[]
* **provisioningState**: 'Deleting' | 'Succeeded' (ReadOnly)
* **sourceConnectionInfo**: ConnectionInfo
* **sourcePlatform**: 'SQL' | 'Unknown' (Required)
* **targetConnectionInfo**: ConnectionInfo
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
### Additional Properties
* **Additional Properties Type**: string

## ProjectTaskProperties
* **Discriminator**: taskType
### Base Properties
* **errors**: ODataError[] (ReadOnly)
* **state**: 'Canceled' | 'Failed' | 'FailedInputValidation' | 'Faulted' | 'Queued' | 'Running' | 'Succeeded' | 'Unknown' (ReadOnly)
### ConnectToSource.SqlServer
#### Properties
* **input**: ConnectToSourceSqlServerTaskInput
* **output**: ConnectToSourceSqlServerTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToSource.SqlServer' (Required)

### ConnectToTarget.AzureSqlDbMI
#### Properties
* **input**: ConnectToTargetSqlMITaskInput
* **output**: ConnectToTargetSqlMITaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToTarget.AzureSqlDbMI' (Required)

### ConnectToTarget.SqlDb
#### Properties
* **input**: ConnectToTargetSqlDbTaskInput
* **output**: ConnectToTargetSqlDbTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToTarget.SqlDb' (Required)

### GetUserTables.Sql
#### Properties
* **input**: GetUserTablesSqlTaskInput
* **output**: GetUserTablesSqlTaskOutput[] (ReadOnly)
* **taskType**: 'GetUserTables.Sql' (Required)

### Migrate.SqlServer.AzureSqlDbMI
#### Properties
* **input**: MigrateSqlServerSqlMITaskInput
* **output**: MigrateSqlServerSqlMITaskOutput[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.AzureSqlDbMI' (Required)

### Migrate.SqlServer.SqlDb
#### Properties
* **input**: MigrateSqlServerSqlDbTaskInput
* **output**: MigrateSqlServerSqlDbTaskOutput[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.SqlDb' (Required)

### ValidateMigrationInput.SqlServer.AzureSqlDbMI
#### Properties
* **input**: ValidateMigrationInputSqlServerSqlMITaskInput
* **output**: ValidateMigrationInputSqlServerSqlMITaskOutput[] (ReadOnly)
* **taskType**: 'ValidateMigrationInput.SqlServer.AzureSqlDbMI' (Required)


## ODataError
### Properties
* **code**: string
* **details**: ODataError[]
* **message**: string

## ConnectToSource.SqlServer
### Properties
* **input**: ConnectToSourceSqlServerTaskInput
* **output**: ConnectToSourceSqlServerTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToSource.SqlServer' (Required)

## ConnectToSourceSqlServerTaskInput
### Properties
* **checkPermissionsGroup**: 'Default' | 'MigrationFromSqlServerToAzureDB'
* **CollectAgentJobs**: bool
* **CollectLogins**: bool
* **sourceConnectionInfo**: SqlConnectionInfo (Required)

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
* **migrationEligibility**: MigrationEligibilityInfo (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'AgentJobLevelOutput' (Required)

### DatabaseLevelOutput
#### Properties
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly)
* **databaseFiles**: DatabaseFileInfo[] (ReadOnly)
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **sizeMB**: int (ReadOnly)

### LoginLevelOutput
#### Properties
* **defaultDatabase**: string (ReadOnly)
* **isEnabled**: bool (ReadOnly)
* **loginType**: 'AsymmetricKey' | 'Certificate' | 'ExternalGroup' | 'ExternalUser' | 'SqlLogin' | 'WindowsGroup' | 'WindowsUser' (ReadOnly)
* **migrationEligibility**: MigrationEligibilityInfo (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'LoginLevelOutput' (Required)

### TaskLevelOutput
#### Properties
* **AgentJobs**: Dictionary<string,String> (ReadOnly)
* **databases**: Dictionary<string,String> (ReadOnly)
* **Logins**: Dictionary<string,String> (ReadOnly)
* **resultType**: 'TaskLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **validationErrors**: ReportableException[] (ReadOnly)


## AgentJobLevelOutput
### Properties
* **isEnabled**: bool (ReadOnly)
* **jobCategory**: string (ReadOnly)
* **jobOwner**: string (ReadOnly)
* **lastExecutedOn**: string (ReadOnly)
* **migrationEligibility**: MigrationEligibilityInfo (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'AgentJobLevelOutput' (Required)

## MigrationEligibilityInfo
### Properties
* **isEligibleForMigration**: bool (ReadOnly)
* **validationMessages**: string[] (ReadOnly)

## DatabaseLevelOutput
### Properties
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly)
* **databaseFiles**: DatabaseFileInfo[] (ReadOnly)
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
* **migrationEligibility**: MigrationEligibilityInfo (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'LoginLevelOutput' (Required)

## TaskLevelOutput
### Properties
* **AgentJobs**: Dictionary<string,String> (ReadOnly)
* **databases**: Dictionary<string,String> (ReadOnly)
* **Logins**: Dictionary<string,String> (ReadOnly)
* **resultType**: 'TaskLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **validationErrors**: ReportableException[] (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
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
* **input**: ConnectToTargetSqlMITaskInput
* **output**: ConnectToTargetSqlMITaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToTarget.AzureSqlDbMI' (Required)

## ConnectToTargetSqlMITaskInput
### Properties
* **targetConnectionInfo**: SqlConnectionInfo (Required)

## ConnectToTargetSqlMITaskOutput
### Properties
* **AgentJobs**: string[] (ReadOnly)
* **id**: string (ReadOnly)
* **Logins**: string[] (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)
* **validationErrors**: ReportableException[] (ReadOnly)

## ConnectToTarget.SqlDb
### Properties
* **input**: ConnectToTargetSqlDbTaskInput
* **output**: ConnectToTargetSqlDbTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToTarget.SqlDb' (Required)

## ConnectToTargetSqlDbTaskInput
### Properties
* **targetConnectionInfo**: SqlConnectionInfo (Required)

## ConnectToTargetSqlDbTaskOutput
### Properties
* **databases**: Dictionary<string,String> (ReadOnly)
* **id**: string (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## GetUserTables.Sql
### Properties
* **input**: GetUserTablesSqlTaskInput
* **output**: GetUserTablesSqlTaskOutput[] (ReadOnly)
* **taskType**: 'GetUserTables.Sql' (Required)

## GetUserTablesSqlTaskInput
### Properties
* **connectionInfo**: SqlConnectionInfo (Required)
* **selectedDatabases**: string[] (Required)

## GetUserTablesSqlTaskOutput
### Properties
* **databasesToTables**: Dictionary<string,IList<DatabaseTable>> (ReadOnly)
* **id**: string (ReadOnly)
* **validationErrors**: ReportableException[] (ReadOnly)

## Dictionary<string,IList<DatabaseTable>>
### Additional Properties
* **Additional Properties Type**: DatabaseTable[]

## DatabaseTable
### Properties
* **hasRows**: bool (ReadOnly)
* **name**: string (ReadOnly)

## Migrate.SqlServer.AzureSqlDbMI
### Properties
* **input**: MigrateSqlServerSqlMITaskInput
* **output**: MigrateSqlServerSqlMITaskOutput[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.AzureSqlDbMI' (Required)

## MigrateSqlServerSqlMITaskInput
### Properties
* **backupBlobShare**: BlobShare (Required)
* **backupFileShare**: FileShare
* **selectedAgentJobs**: string[]
* **selectedDatabases**: MigrateSqlServerSqlMIDatabaseInput[] (Required)
* **selectedLogins**: string[]
* **sourceConnectionInfo**: SqlConnectionInfo (Required)
* **targetConnectionInfo**: SqlConnectionInfo (Required)

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
* **backupFileShare**: FileShare
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
* **migrationEligibility**: MigrationEligibilityInfo (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'AgentJobLevelOutput' (Required)

### DatabaseLevelOutput
#### Properties
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly)
* **databaseFiles**: DatabaseFileInfo[] (ReadOnly)
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **sizeMB**: int (ReadOnly)

### ErrorOutput
#### Properties
* **error**: ReportableException (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

### LoginLevelOutput
#### Properties
* **defaultDatabase**: string (ReadOnly)
* **isEnabled**: bool (ReadOnly)
* **loginType**: 'AsymmetricKey' | 'Certificate' | 'ExternalGroup' | 'ExternalUser' | 'SqlLogin' | 'WindowsGroup' | 'WindowsUser' (ReadOnly)
* **migrationEligibility**: MigrationEligibilityInfo (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'LoginLevelOutput' (Required)

### MigrationLevelOutput
#### Properties
* **agentJobs**: Dictionary<string,String> (ReadOnly)
* **databases**: Dictionary<string,String> (ReadOnly)
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: ReportableException[] (ReadOnly)
* **logins**: Dictionary<string,String> (ReadOnly)
* **message**: string (ReadOnly)
* **orphanedUsers**: Dictionary<string,String> (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **serverRoleResults**: Dictionary<string,StartMigrationScenarioServerRoleResult> (ReadOnly)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)


## ErrorOutput
### Properties
* **error**: ReportableException (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

## MigrationLevelOutput
### Properties
* **agentJobs**: Dictionary<string,String> (ReadOnly)
* **databases**: Dictionary<string,String> (ReadOnly)
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: ReportableException[] (ReadOnly)
* **logins**: Dictionary<string,String> (ReadOnly)
* **message**: string (ReadOnly)
* **orphanedUsers**: Dictionary<string,String> (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **serverRoleResults**: Dictionary<string,StartMigrationScenarioServerRoleResult> (ReadOnly)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,StartMigrationScenarioServerRoleResult>
### Additional Properties
* **Additional Properties Type**: StartMigrationScenarioServerRoleResult

## StartMigrationScenarioServerRoleResult
### Properties
* **exceptionsAndWarnings**: ReportableException[] (ReadOnly)
* **name**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

## Migrate.SqlServer.SqlDb
### Properties
* **input**: MigrateSqlServerSqlDbTaskInput
* **output**: MigrateSqlServerSqlDbTaskOutput[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.SqlDb' (Required)

## MigrateSqlServerSqlDbTaskInput
### Properties
* **selectedDatabases**: MigrateSqlServerSqlDbDatabaseInput[] (Required)
* **sourceConnectionInfo**: SqlConnectionInfo (Required)
* **targetConnectionInfo**: SqlConnectionInfo (Required)
* **validationOptions**: MigrationValidationOptions

## MigrateSqlServerSqlDbDatabaseInput
### Properties
* **makeSourceDbReadOnly**: bool
* **name**: string
* **tableMap**: Dictionary<string,String>
* **targetDatabaseName**: string

## Dictionary<string,String>
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
* **databaseFiles**: DatabaseFileInfo[] (ReadOnly)
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **sizeMB**: int (ReadOnly)

### ErrorOutput
#### Properties
* **error**: ReportableException (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

### MigrationLevelOutput
#### Properties
* **agentJobs**: Dictionary<string,String> (ReadOnly)
* **databases**: Dictionary<string,String> (ReadOnly)
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: ReportableException[] (ReadOnly)
* **logins**: Dictionary<string,String> (ReadOnly)
* **message**: string (ReadOnly)
* **orphanedUsers**: Dictionary<string,String> (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **serverRoleResults**: Dictionary<string,StartMigrationScenarioServerRoleResult> (ReadOnly)
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
* **input**: ValidateMigrationInputSqlServerSqlMITaskInput
* **output**: ValidateMigrationInputSqlServerSqlMITaskOutput[] (ReadOnly)
* **taskType**: 'ValidateMigrationInput.SqlServer.AzureSqlDbMI' (Required)

## ValidateMigrationInputSqlServerSqlMITaskInput
### Properties
* **backupBlobShare**: BlobShare (Required)
* **backupFileShare**: FileShare
* **selectedDatabases**: MigrateSqlServerSqlMIDatabaseInput[] (Required)
* **targetConnectionInfo**: SqlConnectionInfo (Required)

## ValidateMigrationInputSqlServerSqlMITaskOutput
### Properties
* **backupFolderErrors**: ReportableException[] (ReadOnly)
* **backupShareCredentialsErrors**: ReportableException[] (ReadOnly)
* **backupStorageAccountErrors**: ReportableException[] (ReadOnly)
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **restoreDatabaseNameErrors**: ReportableException[] (ReadOnly)

