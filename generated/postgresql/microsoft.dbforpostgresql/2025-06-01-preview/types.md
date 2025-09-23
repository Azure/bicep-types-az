# Microsoft.DBforPostgreSQL @ 2025-06-01-preview

## Resource Microsoft.DBforPostgreSQL/flexibleServers@2025-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [UserAssignedIdentity](#userassignedidentity): User assigned managed identities assigned to the server.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*"} (Required, DeployTimeConstant): The resource name
* **properties**: [ServerProperties](#serverproperties): Properties of a server.
* **sku**: [Sku](#sku): Compute tier and size of a server.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/administrators@2025-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AdministratorMicrosoftEntraPropertiesForAddOrAdministratorMicrosoftEntraProperties](#administratormicrosoftentrapropertiesforaddoradministratormicrosoftentraproperties): Properties of the server administrator associated to a Microsoft Entra principal.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/administrators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/advancedThreatProtectionSettings@2025-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [AdvancedThreatProtectionSettingsProperties](#advancedthreatprotectionsettingsproperties): Advanced threat protection properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/advancedThreatProtectionSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/backups@2025-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 128, pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BackupAutomaticAndOnDemandProperties](#backupautomaticandondemandproperties) (ReadOnly): Properties of a backup.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/backups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/configurations@2025-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 256, pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProperties](#configurationproperties): Properties of a configuration (also known as server parameter).
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/configurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/databases@2025-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-zA-Z_][\w\-]{0,62}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseProperties](#databaseproperties): Properties of a database.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/firewallRules@2025-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 80, pattern: "^[a-zA-Z0-9][-_a-zA-Z0-9]{0,79}(?<!-)$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallRuleProperties](#firewallruleproperties) (Required): Properties of a firewall rule.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/ltrBackupOperations@2025-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*"} (Required, DeployTimeConstant): The resource name
* **properties**: [LtrBackupOperationResponseProperties](#ltrbackupoperationresponseproperties) (ReadOnly): Long Term Retention Backup Operation Resource Properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/ltrBackupOperations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/migrations@2025-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-z][a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MigrationProperties](#migrationproperties): Migration properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/migrations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/privateEndpointConnections@2025-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z0-9-]*\.[a-fA-F0-9\-]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/privateLinkResources@2025-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^.*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/tuningOptions@2025-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'index' | 'table' | string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/tuningOptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/virtualendpoints@2025-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[A-Za-z0-9][A-Za-z0-9-]{0,62}(?<!-)$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualEndpointResourceProperties](#virtualendpointresourceproperties): Properties of the pair of virtual endpoints.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/virtualendpoints' (ReadOnly, DeployTimeConstant): The resource type

## AdminCredentials
### Properties
* **sourceServerPassword**: string {sensitive} (Required, WriteOnly): Password for the user of the source server.
* **targetServerPassword**: string {sensitive} (Required, WriteOnly): Password for the user of the target server.

## AdministratorMicrosoftEntraPropertiesForAddOrAdministratorMicrosoftEntraProperties
### Properties
* **objectId**: string (ReadOnly): Object identifier of the Microsoft Entra principal.
* **principalName**: string: Name of the Microsoft Entra principal.
* **principalType**: 'Group' | 'ServicePrincipal' | 'Unknown' | 'User' | string: Type of Microsoft Entra principal to which the server administrator is associated.
* **tenantId**: string (WriteOnly): Identifier of the tenant in which the Microsoft Entra principal exists.

## AdvancedThreatProtectionSettingsProperties
### Properties
* **creationTime**: string (ReadOnly): Specifies the creation time (UTC) of the policy.
* **state**: 'Disabled' | 'Enabled' (Required): Specifies the state of the advanced threat protection, whether it is enabled, disabled, or a state has not been applied yet on the server.

## AuthConfig
### Properties
* **activeDirectoryAuth**: 'Disabled' | 'Enabled' | string: Indicates if the server supports Microsoft Entra authentication.
* **passwordAuth**: 'Disabled' | 'Enabled' | string: Indicates if the server supports password based authentication.
* **tenantId**: string: Identifier of the tenant of the delegated resource.

## Backup
### Properties
* **backupRetentionDays**: int: Backup retention days for the server.
* **earliestRestoreDate**: string (ReadOnly): Earliest restore point time (ISO8601 format) for a server.
* **geoRedundantBackup**: 'Disabled' | 'Enabled' | string: Indicates if the server is configured to create geographically redundant backups.

## BackupAutomaticAndOnDemandProperties
### Properties
* **backupType**: 'Customer On-Demand' | 'Full' | string: Type of backup.
* **completedTime**: string: Time(ISO8601 format) at which the backup was completed.
* **source**: string: Source of the backup.

## Cluster
### Properties
* **clusterSize**: int: Number of nodes assigned to the elastic cluster.
* **defaultDatabaseName**: string: Default database name for the elastic cluster.

## ConfigurationProperties
### Properties
* **allowedValues**: string (ReadOnly): Allowed values of the configuration (also known as server parameter).
* **dataType**: 'Boolean' | 'Enumeration' | 'Integer' | 'Numeric' | 'Set' | 'String' | string (ReadOnly): Data type of the configuration (also known as server parameter).
* **defaultValue**: string (ReadOnly): Value assigned by default to the configuration (also known as server parameter).
* **description**: string (ReadOnly): Description of the configuration (also known as server parameter).
* **documentationLink**: string (ReadOnly): Link pointing to the documentation of the configuration (also known as server parameter).
* **isConfigPendingRestart**: bool (ReadOnly): Indicates if the value assigned to the configuration (also known as server parameter) is pending a server restart for it to take effect.
* **isDynamicConfig**: bool (ReadOnly): Indicates if it's a dynamic (true) or static (false) configuration (also known as server parameter). Static server parameters require a server restart after changing the value assigned to them, for the change to take effect. Dynamic server parameters do not require a server restart after changing the value assigned to them, for the change to take effect.
* **isReadOnly**: bool (ReadOnly): Indicates if it's a read-only (true) or modifiable (false) configuration (also known as server parameter).
* **source**: string: Source of the value assigned to the configuration (also known as server parameter). Required to update the value assigned to a specific modifiable configuration.
* **unit**: string (ReadOnly): Units in which the configuration (also known as server parameter) value is expressed.
* **value**: string: Value of the configuration (also known as server parameter). Required to update the value assigned to a specific modifiable configuration.

## DatabaseMigrationState
### Properties
* **appliedChanges**: int: Change Data Capture applied changes counter.
* **cdcDeleteCounter**: int: Change Data Capture delete counter.
* **cdcInsertCounter**: int: Change Data Capture insert counter.
* **cdcUpdateCounter**: int: Change Data Capture update counter.
* **databaseName**: string: Name of database.
* **endedOn**: string: End time of a migration state.
* **fullLoadCompletedTables**: int: Number of tables loaded during the migration of a database.
* **fullLoadErroredTables**: int: Number of tables encountering errors during the migration of a database.
* **fullLoadLoadingTables**: int: Number of tables loading during the migration of a database.
* **fullLoadQueuedTables**: int: Number of tables queued for the migration of a database.
* **incomingChanges**: int: Change Data Capture incoming changes counter.
* **latency**: int: Lag in seconds between source and target during online phase.
* **message**: string: Error message, if any, for the migration state.
* **migrationOperation**: string: Migration operation of a database.
* **migrationState**: 'Canceled' | 'Canceling' | 'Failed' | 'InProgress' | 'Succeeded' | 'WaitingForCutoverTrigger' | string: Migration state of a database.
* **startedOn**: string: Start time of a migration state.

## DatabaseProperties
### Properties
* **charset**: string {pattern: "^[a-zA-Z]+\w*$"}: Character set of the database.
* **collation**: string {pattern: "^[a-zA-Z\-]+([. ]|\w)*$"}: Collation of the database.

## DataEncryption
### Properties
* **geoBackupEncryptionKeyStatus**: 'Invalid' | 'Valid' | string (ReadOnly): Status of key used by a server configured with data encryption based on customer managed key, to encrypt the geographically redundant storage associated to the server when it is configured to support geographically redundant backups.
* **geoBackupKeyURI**: string: Identifier of the user assigned managed identity used to access the key in Azure Key Vault for data encryption of the geographically redundant storage associated to a server that is configured to support geographically redundant backups.
* **geoBackupUserAssignedIdentityId**: string: Identifier of the user assigned managed identity used to access the key in Azure Key Vault for data encryption of the geographically redundant storage associated to a server that is configured to support geographically redundant backups.
* **primaryEncryptionKeyStatus**: 'Invalid' | 'Valid' | string (ReadOnly): Status of key used by a server configured with data encryption based on customer managed key, to encrypt the primary storage associated to the server.
* **primaryKeyURI**: string: URI of the key in Azure Key Vault used for data encryption of the primary storage associated to a server.
* **primaryUserAssignedIdentityId**: string: Identifier of the user assigned managed identity used to access the key in Azure Key Vault for data encryption of the primary storage associated to a server.
* **type**: 'AzureKeyVault' | 'SystemManaged' | string: Data encryption type used by a server.

## DbLevelValidationStatus
### Properties
* **databaseName**: string: Name of database.
* **endedOn**: string: End time of a database level validation.
* **startedOn**: string: Start time of a database level validation.
* **summary**: [ValidationSummaryItem](#validationsummaryitem)[]: Summary of database level validations.

## DbServerMetadata
### Properties
* **location**: string (ReadOnly): Location of database server.
* **sku**: [ServerSku](#serversku): Compute tier and size of the database server. This object is empty for an Azure Database for PostgreSQL single server.
* **storageMb**: int: Storage size (in MB) for database server.
* **version**: string: Major version of PostgreSQL database engine.

## FirewallRuleProperties
### Properties
* **endIpAddress**: string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"} (Required): IP address defining the end of the range of addresses of a firewall rule. Must be expressed in IPv4 format.
* **startIpAddress**: string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"} (Required): IP address defining the start of the range of addresses of a firewall rule. Must be expressed in IPv4 format.

## HighAvailability
### Properties
* **mode**: 'SameZone' | 'ZoneRedundant' | string: High availability mode for a server.
* **standbyAvailabilityZone**: string: Availability zone associated to the standby server created when high availability is set to SameZone or ZoneRedundant.
* **state**: 'CreatingStandby' | 'FailingOver' | 'Healthy' | 'NotEnabled' | 'RemovingStandby' | 'ReplicatingData' | string (ReadOnly): Possible states of the standby server created when high availability is set to SameZone or ZoneRedundant.

## LtrBackupOperationResponseProperties
### Properties
* **backupMetadata**: string: Metadata to be stored in RP. Store everything that will be required to perform a successful restore using this Recovery point. e.g. Versions, DataFormat etc
* **backupName**: string: Name of Backup operation
* **datasourceSizeInBytes**: int: Size of datasource in bytes
* **dataTransferredInBytes**: int: Data transferred in bytes
* **endTime**: string: End time of the operation.
* **errorCode**: string (ReadOnly): The error code.
* **errorMessage**: string (ReadOnly): The error message.
* **percentComplete**: int {minValue: 0, maxValue: 100}: PercentageCompleted
* **startTime**: string (Required): Start time of the operation.
* **status**: 'Cancelled' | 'Failed' | 'Running' | 'Succeeded' | string (Required): Service-set extensible enum indicating the status of operation

## MaintenanceWindow
### Properties
* **customWindow**: string: Indicates whether custom window is enabled or disabled.
* **dayOfWeek**: int: Day of the week to be used for maintenance window.
* **startHour**: int: Start hour to be used for maintenance window.
* **startMinute**: int: Start minute to be used for maintenance window.

## MigrationProperties
### Properties
* **cancel**: 'False' | 'True' | string: Indicates if cancel must be triggered for the entire migration.
* **currentStatus**: [MigrationStatus](#migrationstatus) (ReadOnly): Current status of a migration.
* **dbsToCancelMigrationOn**: string[]: When you want to trigger cancel for specific databases set 'triggerCutover' to 'True' and the names of the specific databases in this array.
* **dbsToMigrate**: string[] {maxLength: 50}: Names of databases to migrate.
* **dbsToTriggerCutoverOn**: string[]: When you want to trigger cutover for specific databases set 'triggerCutover' to 'True' and the names of the specific databases in this array.
* **migrateRoles**: 'False' | 'True' | string: Indicates if roles and permissions must be migrated.
* **migrationId**: string (ReadOnly): Identifier of a migration.
* **migrationInstanceResourceId**: string: Identifier of the private endpoint migration instance.
* **migrationMode**: 'Offline' | 'Online' | string: Mode used to perform the migration: Online or Offline.
* **migrationOption**: 'Migrate' | 'Validate' | 'ValidateAndMigrate' | string: Supported option for a migration.
* **migrationWindowEndTimeInUtc**: string: End time (UTC) for migration window.
* **migrationWindowStartTimeInUtc**: string: Start time (UTC) for migration window.
* **overwriteDbsInTarget**: 'False' | 'True' | string: Indicates if databases on the target server can be overwritten when already present. If set to 'False', when the migration workflow detects that the database already exists on the target server, it will wait for a confirmation.
* **secretParameters**: [MigrationSecretParameters](#migrationsecretparameters): Migration secret parameters.
* **setupLogicalReplicationOnSourceDbIfNeeded**: 'False' | 'True' | string: Indicates whether to setup logical replication on source server, if needed.
* **sourceDbServerFullyQualifiedDomainName**: string: Fully qualified domain name (FQDN) or IP address of the source server. This property is optional. When provided, the migration service will always use it to connect to the source server.
* **sourceDbServerMetadata**: [DbServerMetadata](#dbservermetadata) (ReadOnly): Metadata of source database server.
* **sourceDbServerResourceId**: string: Identifier of the source database server resource, when 'sourceType' is 'PostgreSQLSingleServer'. For other source types this must be set to ipaddress:port@username or hostname:port@username.
* **sourceType**: 'AWS' | 'AWS_AURORA' | 'AWS_EC2' | 'AWS_RDS' | 'ApsaraDB_RDS' | 'AzureVM' | 'Crunchy_PostgreSQL' | 'Digital_Ocean_Droplets' | 'Digital_Ocean_PostgreSQL' | 'EDB' | 'EDB_Oracle_Server' | 'EDB_PostgreSQL' | 'GCP' | 'GCP_AlloyDB' | 'GCP_CloudSQL' | 'GCP_Compute' | 'Heroku_PostgreSQL' | 'Huawei_Compute' | 'Huawei_RDS' | 'OnPremises' | 'PostgreSQLCosmosDB' | 'PostgreSQLFlexibleServer' | 'PostgreSQLSingleServer' | 'Supabase_PostgreSQL' | string: Source server type used for the migration: ApsaraDB_RDS, AWS, AWS_AURORA, AWS_EC2, AWS_RDS, AzureVM, Crunchy_PostgreSQL, Digital_Ocean_Droplets, Digital_Ocean_PostgreSQL, EDB, EDB_Oracle_Server, EDB_PostgreSQL, GCP, GCP_AlloyDB, GCP_CloudSQL, GCP_Compute, Heroku_PostgreSQL, Huawei_Compute, Huawei_RDS, OnPremises, PostgreSQLCosmosDB, PostgreSQLFlexibleServer, PostgreSQLSingleServer, or Supabase_PostgreSQL
* **sslMode**: 'Prefer' | 'Require' | 'VerifyCA' | 'VerifyFull' | string: SSL mode used by a migration. Default SSL mode for 'PostgreSQLSingleServer' is 'VerifyFull'. Default SSL mode for other source types is 'Prefer'.
* **startDataMigration**: 'False' | 'True' | string: Indicates if data migration must start right away.
* **targetDbServerFullyQualifiedDomainName**: string: Fully qualified domain name (FQDN) or IP address of the target server. This property is optional. When provided, the migration service will always use it to connect to the target server.
* **targetDbServerMetadata**: [DbServerMetadata](#dbservermetadata) (ReadOnly): Metadata of target database server.
* **targetDbServerResourceId**: string (ReadOnly): Identifier of the target database server resource.
* **triggerCutover**: 'False' | 'True' | string: Indicates if cutover must be triggered for the entire migration.

## MigrationSecretParameters
### Properties
* **adminCredentials**: [AdminCredentials](#admincredentials) (Required): Credentials of administrator users for source and target servers.
* **sourceServerUsername**: string (WriteOnly): Gets or sets the name of the user for the source server. This user doesn't need to be an administrator.
* **targetServerUsername**: string (WriteOnly): Gets or sets the name of the user for the target server. This user doesn't need to be an administrator.

## MigrationStatus
### Properties
* **currentSubStateDetails**: [MigrationSubstateDetails](#migrationsubstatedetails) (ReadOnly): Current migration sub state details.
* **error**: string (ReadOnly): Error message, if any, for the migration state.
* **state**: 'Canceled' | 'CleaningUp' | 'Failed' | 'InProgress' | 'Succeeded' | 'ValidationFailed' | 'WaitingForUserAction' | string (ReadOnly): State of migration.

## MigrationSubstateDetails
### Properties
* **currentSubState**: 'CancelingRequestedDBMigrations' | 'Completed' | 'CompletingMigration' | 'MigratingData' | 'PerformingPreRequisiteSteps' | 'ValidationInProgress' | 'WaitingForCutoverTrigger' | 'WaitingForDBsToMigrateSpecification' | 'WaitingForDataMigrationScheduling' | 'WaitingForDataMigrationWindow' | 'WaitingForLogicalReplicationSetupRequestOnSourceDB' | 'WaitingForTargetDBOverwriteConfirmation' | string (ReadOnly): Substate of migration.
* **dbDetails**: [MigrationSubstateDetailsDbDetails](#migrationsubstatedetailsdbdetails): Dictionary of <DatabaseMigrationState>
* **validationDetails**: [ValidationDetails](#validationdetails): Details for the validation for migration.

## MigrationSubstateDetailsDbDetails
### Properties
### Additional Properties
* **Additional Properties Type**: [DatabaseMigrationState](#databasemigrationstate)

## Network
### Properties
* **delegatedSubnetResourceId**: string: Resource identifier of the delegated subnet. Required during creation of a new server, in case you want the server to be integrated into your own virtual network. For an update operation, you only have to provide this property if you want to change the value assigned for the private DNS zone.
* **privateDnsZoneArmResourceId**: string: Identifier of the private DNS zone. Required during creation of a new server, in case you want the server to be integrated into your own virtual network. For an update operation, you only have to provide this property if you want to change the value assigned for the private DNS zone.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Indicates if public network access is enabled or not. This is only supported for servers that are not integrated into a virtual network which is owned and provided by customer when server is deployed.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for private endpoint.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): The group ids for the private endpoint resource.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The private endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.
* **requiredZoneNames**: string[]: The private link resource private link DNS zone name.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## Replica
### Properties
* **capacity**: int (ReadOnly): Maximum number of read replicas allowed for a server.
* **promoteMode**: 'Standalone' | 'Switchover' | string (WriteOnly): Type of operation to apply on the read replica. This property is write only. Standalone means that the read replica will be promoted to a standalone server, and will become a completely independent entity from the replication set. Switchover means that the read replica will roles with the primary server.
* **promoteOption**: 'Forced' | 'Planned' | string (WriteOnly): Data synchronization option to use when processing the operation specified in the promoteMode property. This property is write only.
* **replicationState**: 'Active' | 'Broken' | 'Catchup' | 'Provisioning' | 'Reconfiguring' | 'Updating' | string (ReadOnly): Indicates the replication state of a read replica. This property is returned only when the target server is a read replica. Possible  values are Active, Broken, Catchup, Provisioning, Reconfiguring, and Updating
* **role**: 'AsyncReplica' | 'GeoAsyncReplica' | 'None' | 'Primary' | string: Role of the server in a replication set.

## ServerProperties
### Properties
* **administratorLogin**: string: Name of the login designated as the first password based administrator assigned to your instance of PostgreSQL. Must be specified the first time that you enable password based authentication on a server. Once set to a given value, it cannot be changed for the rest of the life of a server. If you disable password based authentication on a server which had it enabled, this password based role isn't deleted.
* **administratorLoginPassword**: string {sensitive} (WriteOnly): Password assigned to the administrator login. As long as password authentication is enabled, this password can be changed at any time.
* **authConfig**: [AuthConfig](#authconfig): Authentication configuration properties of a server.
* **availabilityZone**: string: Availability zone of a server.
* **backup**: [Backup](#backup): Backup properties of a server.
* **cluster**: [Cluster](#cluster): Cluster properties of a server.
* **createMode**: 'Create' | 'Default' | 'GeoRestore' | 'PointInTimeRestore' | 'Replica' | 'ReviveDropped' | 'Update' | string (WriteOnly): Creation mode of a new server.
* **dataEncryption**: [DataEncryption](#dataencryption): Data encryption properties of a server.
* **fullyQualifiedDomainName**: string (ReadOnly): Fully qualified domain name of a server.
* **highAvailability**: [HighAvailability](#highavailability): High availability properties of a server.
* **maintenanceWindow**: [MaintenanceWindow](#maintenancewindow): Maintenance window properties of a server.
* **minorVersion**: string (ReadOnly): Minor version of PostgreSQL database engine.
* **network**: [Network](#network): Network properties of a server. Only required if you want your server to be integrated into a virtual network provided by customer.
* **pointInTimeUTC**: string (WriteOnly): Creation time (in ISO8601 format) of the backup which you want to restore in the new server. It's required when 'createMode' is 'PointInTimeRestore', 'GeoRestore', or 'ReviveDropped'.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connections associated with the specified server.
* **replica**: [Replica](#replica): Read replica properties of a server. Required only in case that you want to promote a server.
* **replicaCapacity**: int (ReadOnly): Maximum number of read replicas allowed for a server.
* **replicationRole**: 'AsyncReplica' | 'GeoAsyncReplica' | 'None' | 'Primary' | string: Role of the server in a replication set.
* **sourceServerResourceId**: string: Identifier of the server to be used as the source of the new server. Required when 'createMode' is 'PointInTimeRestore', 'GeoRestore', 'Replica', or 'ReviveDropped'. This property is returned only when the target server is a read replica.
* **state**: 'Disabled' | 'Dropping' | 'Inaccessible' | 'Provisioning' | 'Ready' | 'Restarting' | 'Starting' | 'Stopped' | 'Stopping' | 'Updating' | string (ReadOnly): Possible states of a server.
* **storage**: [Storage](#storage): Storage properties of a server.
* **version**: '11' | '12' | '13' | '14' | '15' | '16' | '17' | string: Major version of PostgreSQL database engine.

## ServerSku
### Properties
* **name**: string: Compute tier and size of the database server. This object is empty for an Azure Database for PostgreSQL single server.
* **tier**: 'Burstable' | 'GeneralPurpose' | 'MemoryOptimized' | string: Tier of the compute assigned to a server.

## Sku
### Properties
* **name**: string (Required): Name by which is known a given compute size assigned to a server.
* **tier**: 'Burstable' | 'GeneralPurpose' | 'MemoryOptimized' | string (Required): Tier of the compute assigned to a server.

## Storage
### Properties
* **autoGrow**: 'Disabled' | 'Enabled' | string: Flag to enable or disable the automatic growth of storage size of a server when available space is nearing zero and conditions allow for automatically growing storage size.
* **iops**: int: Maximum IOPS supported for storage. Required when type of storage is PremiumV2_LRS or UltraSSD_LRS.
* **storageSizeGB**: int: Size of storage assigned to a server.
* **throughput**: int: Maximum throughput supported for storage. Required when type of storage is PremiumV2_LRS or UltraSSD_LRS.
* **tier**: 'P1' | 'P10' | 'P15' | 'P2' | 'P20' | 'P3' | 'P30' | 'P4' | 'P40' | 'P50' | 'P6' | 'P60' | 'P70' | 'P80' | string: Storage tier of a server.
* **type**: 'PremiumV2_LRS' | 'Premium_LRS' | 'UltraSSD_LRS' | string: Type of storage assigned to a server. Allowed values are Premium_LRS, PremiumV2_LRS, or UltraSSD_LRS. If not specified, it defaults to Premium_LRS.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentity
### Properties
* **principalId**: string: Identifier of the object of the service principal associated to the user assigned managed identity.
* **tenantId**: string (ReadOnly): Identifier of the tenant of a server.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Types of identities associated with a server.
* **userAssignedIdentities**: [UserAssignedIdentityMap](#userassignedidentitymap): Map of user assigned managed identities.

## UserAssignedIdentityMap
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentity](#useridentity)

## UserIdentity
### Properties
* **clientId**: string: Identifier of the client of the service principal associated to the user assigned managed identity.
* **principalId**: string: Identifier of the object of the service principal associated to the user assigned managed identity.

## ValidationDetails
### Properties
* **dbLevelValidationDetails**: [DbLevelValidationStatus](#dblevelvalidationstatus)[]: Details of server level validations.
* **serverLevelValidationDetails**: [ValidationSummaryItem](#validationsummaryitem)[]: Details of server level validations.
* **status**: 'Failed' | 'Succeeded' | 'Warning' | string: Validation status for migration.
* **validationEndTimeInUtc**: string: End time (UTC) for validation.
* **validationStartTimeInUtc**: string: Start time (UTC) for validation.

## ValidationMessage
### Properties
* **message**: string: Validation message string.
* **state**: 'Failed' | 'Succeeded' | 'Warning' | string: Severity of validation message.

## ValidationSummaryItem
### Properties
* **messages**: [ValidationMessage](#validationmessage)[]: Validation messages.
* **state**: 'Failed' | 'Succeeded' | 'Warning' | string: Validation status for migration.
* **type**: string: Validation type.

## VirtualEndpointResourceProperties
### Properties
* **endpointType**: 'ReadWrite' | string: Type of endpoint for the virtual endpoints.
* **members**: string[]: List of servers that one of the virtual endpoints can refer to.
* **virtualEndpoints**: string[] (ReadOnly): List of virtual endpoints for a server.

