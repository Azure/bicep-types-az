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
* **properties**: DataMigrationServiceProperties
* **sku**: ServiceSku
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.DataMigration/services' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataMigration/services/projects@2018-03-31-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-31-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProjectProperties
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.DataMigration/services/projects' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataMigration/services/projects/tasks@2018-03-31-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-31-preview' (ReadOnly, DeployTimeConstant)
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

## TrackedResourceTags
### Properties
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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProjectTaskProperties
* **Discriminator**: taskType

### Base Properties
* **errors**: ODataError[] (ReadOnly)
* **state**: 'Canceled' | 'Failed' | 'FailedInputValidation' | 'Faulted' | 'Queued' | 'Running' | 'Succeeded' | 'Unknown' (ReadOnly)
### ConnectToSourceSqlServerTaskProperties
#### Properties
* **input**: ConnectToSourceSqlServerTaskInput
* **output**: ConnectToSourceSqlServerTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToSource.SqlServer' (Required)

### ConnectToTargetSqlMITaskProperties
#### Properties
* **input**: ConnectToTargetSqlMITaskInput
* **output**: ConnectToTargetSqlMITaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToTarget.AzureSqlDbMI' (Required)

### ConnectToTargetSqlDbTaskProperties
#### Properties
* **input**: ConnectToTargetSqlDbTaskInput
* **output**: ConnectToTargetSqlDbTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToTarget.SqlDb' (Required)

### GetUserTablesSqlTaskProperties
#### Properties
* **input**: GetUserTablesSqlTaskInput
* **output**: GetUserTablesSqlTaskOutput[] (ReadOnly)
* **taskType**: 'GetUserTables.Sql' (Required)

### MigrateSqlServerSqlMITaskProperties
#### Properties
* **input**: MigrateSqlServerSqlMITaskInput
* **output**: MigrateSqlServerSqlMITaskOutput[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.AzureSqlDbMI' (Required)

### MigrateSqlServerSqlDbTaskProperties
#### Properties
* **input**: MigrateSqlServerSqlDbTaskInput
* **output**: MigrateSqlServerSqlDbTaskOutput[] (ReadOnly)
* **taskType**: 'Migrate.SqlServer.SqlDb' (Required)

### ValidateMigrationInputSqlServerSqlMITaskProperties
#### Properties
* **input**: ValidateMigrationInputSqlServerSqlMITaskInput
* **output**: ValidateMigrationInputSqlServerSqlMITaskOutput[] (ReadOnly)
* **taskType**: 'ValidateMigrationInput.SqlServer.AzureSqlDbMI' (Required)


## ODataError
### Properties
* **code**: string
* **details**: ODataError[]
* **message**: string

## ConnectToSourceSqlServerTaskProperties
### Properties
* **input**: ConnectToSourceSqlServerTaskInput
* **output**: ConnectToSourceSqlServerTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToSource.SqlServer' (Required)

## ConnectToSourceSqlServerTaskInput
### Properties
* **checkPermissionsGroup**: 'Default' | 'MigrationFromSqlServerToAzureDB'
* **collectAgentJobs**: bool
* **collectLogins**: bool
* **sourceConnectionInfo**: SqlConnectionInfo (Required)

## ConnectToSourceSqlServerTaskOutput
* **Discriminator**: resultType

### Base Properties
* **id**: string (ReadOnly)
### ConnectToSourceSqlServerTaskOutputAgentJobLevel
#### Properties
* **isEnabled**: bool (ReadOnly)
* **jobCategory**: string (ReadOnly)
* **jobOwner**: string (ReadOnly)
* **lastExecutedOn**: string (ReadOnly)
* **migrationEligibility**: MigrationEligibilityInfo (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'AgentJobLevelOutput' (Required)

### ConnectToSourceSqlServerTaskOutputDatabaseLevel
#### Properties
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel80' | 'CompatLevel90' (ReadOnly)
* **databaseFiles**: DatabaseFileInfo[] (ReadOnly)
* **databaseState**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **sizeMB**: int (ReadOnly)

### ConnectToSourceSqlServerTaskOutputLoginLevel
#### Properties
* **defaultDatabase**: string (ReadOnly)
* **isEnabled**: bool (ReadOnly)
* **migrationEligibility**: MigrationEligibilityInfo (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'LoginLevelOutput' (Required)

### ConnectToSourceSqlServerTaskOutputTaskLevel
#### Properties
* **agentJobs**: string (ReadOnly)
* **databases**: string (ReadOnly)
* **logins**: string (ReadOnly)
* **resultType**: 'TaskLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **validationErrors**: ReportableException[] (ReadOnly)


## ConnectToSourceSqlServerTaskOutputAgentJobLevel
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

## ConnectToSourceSqlServerTaskOutputDatabaseLevel
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

## ConnectToSourceSqlServerTaskOutputLoginLevel
### Properties
* **defaultDatabase**: string (ReadOnly)
* **isEnabled**: bool (ReadOnly)
* **migrationEligibility**: MigrationEligibilityInfo (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'LoginLevelOutput' (Required)

## ConnectToSourceSqlServerTaskOutputTaskLevel
### Properties
* **agentJobs**: string (ReadOnly)
* **databases**: string (ReadOnly)
* **logins**: string (ReadOnly)
* **resultType**: 'TaskLevelOutput' (Required)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **validationErrors**: ReportableException[] (ReadOnly)

## ReportableException
### Properties
* **filePath**: string
* **hResult**: int
* **lineNumber**: string
* **message**: string
* **stackTrace**: string

## ConnectToTargetSqlMITaskProperties
### Properties
* **input**: ConnectToTargetSqlMITaskInput
* **output**: ConnectToTargetSqlMITaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToTarget.AzureSqlDbMI' (Required)

## ConnectToTargetSqlMITaskInput
### Properties
* **targetConnectionInfo**: SqlConnectionInfo (Required)

## ConnectToTargetSqlMITaskOutput
### Properties
* **agentJobs**: string[] (ReadOnly)
* **id**: string (ReadOnly)
* **logins**: string[] (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)
* **validationErrors**: ReportableException[] (ReadOnly)

## ConnectToTargetSqlDbTaskProperties
### Properties
* **input**: ConnectToTargetSqlDbTaskInput
* **output**: ConnectToTargetSqlDbTaskOutput[] (ReadOnly)
* **taskType**: 'ConnectToTarget.SqlDb' (Required)

## ConnectToTargetSqlDbTaskInput
### Properties
* **targetConnectionInfo**: SqlConnectionInfo (Required)

## ConnectToTargetSqlDbTaskOutput
### Properties
* **databases**: string (ReadOnly)
* **id**: string (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

## GetUserTablesSqlTaskProperties
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
* **databasesToTables**: string (ReadOnly)
* **id**: string (ReadOnly)
* **validationErrors**: ReportableException[] (ReadOnly)

## MigrateSqlServerSqlMITaskProperties
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
### MigrateSqlServerSqlMITaskOutputAgentJobLevel
#### Properties
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: ReportableException[] (ReadOnly)
* **isEnabled**: bool (ReadOnly)
* **message**: string (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'AgentJobLevelOutput' (Required)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

### MigrateSqlServerSqlMITaskOutputDatabaseLevel
#### Properties
* **databaseName**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: ReportableException[] (ReadOnly)
* **message**: string (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **sizeMB**: int (ReadOnly)
* **stage**: 'Backup' | 'Completed' | 'FileCopy' | 'Initialize' | 'None' | 'Restore' (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

### MigrateSqlServerSqlMITaskOutputError
#### Properties
* **error**: ReportableException (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

### MigrateSqlServerSqlMITaskOutputLoginLevel
#### Properties
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: ReportableException[] (ReadOnly)
* **loginName**: string (ReadOnly)
* **message**: string (ReadOnly)
* **resultType**: 'LoginLevelOutput' (Required)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

### MigrateSqlServerSqlMITaskOutputMigrationLevel
#### Properties
* **agentJobs**: string (ReadOnly)
* **databases**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: ReportableException[] (ReadOnly)
* **logins**: string (ReadOnly)
* **message**: string (ReadOnly)
* **orphanedUsers**: string (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **serverRoleResults**: string (ReadOnly)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)


## MigrateSqlServerSqlMITaskOutputAgentJobLevel
### Properties
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: ReportableException[] (ReadOnly)
* **isEnabled**: bool (ReadOnly)
* **message**: string (ReadOnly)
* **name**: string (ReadOnly)
* **resultType**: 'AgentJobLevelOutput' (Required)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

## MigrateSqlServerSqlMITaskOutputDatabaseLevel
### Properties
* **databaseName**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: ReportableException[] (ReadOnly)
* **message**: string (ReadOnly)
* **resultType**: 'DatabaseLevelOutput' (Required)
* **sizeMB**: int (ReadOnly)
* **stage**: 'Backup' | 'Completed' | 'FileCopy' | 'Initialize' | 'None' | 'Restore' (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

## MigrateSqlServerSqlMITaskOutputError
### Properties
* **error**: ReportableException (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

## MigrateSqlServerSqlMITaskOutputLoginLevel
### Properties
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: ReportableException[] (ReadOnly)
* **loginName**: string (ReadOnly)
* **message**: string (ReadOnly)
* **resultType**: 'LoginLevelOutput' (Required)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)

## MigrateSqlServerSqlMITaskOutputMigrationLevel
### Properties
* **agentJobs**: string (ReadOnly)
* **databases**: string (ReadOnly)
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: ReportableException[] (ReadOnly)
* **logins**: string (ReadOnly)
* **message**: string (ReadOnly)
* **orphanedUsers**: string (ReadOnly)
* **resultType**: 'MigrationLevelOutput' (Required)
* **serverRoleResults**: string (ReadOnly)
* **sourceServerBrandVersion**: string (ReadOnly)
* **sourceServerVersion**: string (ReadOnly)
* **startedOn**: string (ReadOnly)
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Skipped' | 'Stopped' | 'Warning' (ReadOnly)
* **status**: 'Completed' | 'CompletedWithWarnings' | 'Configured' | 'Connecting' | 'Default' | 'Error' | 'Running' | 'SelectLogins' | 'SourceAndTargetSelected' | 'Stopped' (ReadOnly)
* **targetServerBrandVersion**: string (ReadOnly)
* **targetServerVersion**: string (ReadOnly)

## MigrateSqlServerSqlDbTaskProperties
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
* **tableMap**: MigrateSqlServerSqlDbDatabaseInputTableMap
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
* **exceptionsAndWarnings**: ReportableException[] (ReadOnly)
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
* **error**: ReportableException (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

### MigrateSqlServerSqlDbTaskOutputMigrationLevel
#### Properties
* **databases**: string (ReadOnly)
* **databaseSummary**: string (ReadOnly)
* **durationInSeconds**: int (ReadOnly)
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: ReportableException[] (ReadOnly)
* **message**: string (ReadOnly)
* **migrationReportResult**: MigrationReportResult
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
* **exceptionsAndWarnings**: ReportableException[] (ReadOnly)
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
* **error**: ReportableException (ReadOnly)
* **resultType**: 'ErrorOutput' (Required)

## MigrateSqlServerSqlDbTaskOutputMigrationLevel
### Properties
* **databases**: string (ReadOnly)
* **databaseSummary**: string (ReadOnly)
* **durationInSeconds**: int (ReadOnly)
* **endedOn**: string (ReadOnly)
* **exceptionsAndWarnings**: ReportableException[] (ReadOnly)
* **message**: string (ReadOnly)
* **migrationReportResult**: MigrationReportResult
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

## ValidateMigrationInputSqlServerSqlMITaskProperties
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

