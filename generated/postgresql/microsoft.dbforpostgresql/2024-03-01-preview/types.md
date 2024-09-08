# Microsoft.DBforPostgreSQL @ 2024-03-01-preview

## Resource Microsoft.DBforPostgreSQL/flexibleServers@2024-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [UserAssignedIdentity](#userassignedidentity): Describes the identity of the application.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*"} (Required, DeployTimeConstant): The resource name
* **properties**: [ServerProperties](#serverproperties): Properties of the server.
* **sku**: [Sku](#sku): The SKU (pricing tier) of the server.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/administrators@2024-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AdministratorPropertiesForAddOrAdministratorProperties](#administratorpropertiesforaddoradministratorproperties): Properties of the active directory administrator.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/administrators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/advancedThreatProtectionSettings@2024-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerThreatProtectionProperties](#serverthreatprotectionproperties): Advanced Threat Protection properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/advancedThreatProtectionSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/backups@2024-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ServerBackupProperties](#serverbackupproperties) (ReadOnly): The properties of a server backup.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/backups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/configurations@2024-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProperties](#configurationproperties): The properties of a configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/configurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/databases@2024-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseProperties](#databaseproperties): The properties of a database.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/firewallRules@2024-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallRuleProperties](#firewallruleproperties) (Required): The properties of a firewall rule.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/ltrBackupOperations@2024-03-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*"} (Required, DeployTimeConstant): The resource name
* **properties**: [LtrBackupOperationResponseProperties](#ltrbackupoperationresponseproperties) (ReadOnly): Long Term Retention Backup Operation Resource Properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/ltrBackupOperations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/migrations@2024-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-z][a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MigrationResourceProperties](#migrationresourceproperties): Migration resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/migrations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/privateEndpointConnections@2024-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z0-9-]*\.[a-fA-F0-9\-]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/privateLinkResources@2024-03-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^.*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforPostgreSQL/flexibleServers/virtualendpoints@2024-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[A-Za-z0-9][A-Za-z0-9-]{0,62}(?<!-)$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualEndpointResourceProperties](#virtualendpointresourceproperties): Properties of the virtual endpoint resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/virtualendpoints' (ReadOnly, DeployTimeConstant): The resource type

## AdminCredentials
### Properties
* **sourceServerPassword**: string {sensitive} (Required, WriteOnly): Password for source server.
* **targetServerPassword**: string {sensitive} (Required, WriteOnly): Password for target server.

## AdministratorPropertiesForAddOrAdministratorProperties
### Properties
* **objectId**: string (ReadOnly): The objectId of the Active Directory administrator.
* **principalName**: string: Active Directory administrator principal name.
* **principalType**: 'Group' | 'ServicePrincipal' | 'Unknown' | 'User' | string: The principal type used to represent the type of Active Directory Administrator.
* **tenantId**: string (WriteOnly): The tenantId of the Active Directory administrator.

## AuthConfig
### Properties
* **activeDirectoryAuth**: 'Disabled' | 'Enabled' | string: If Enabled, Azure Active Directory authentication is enabled.
* **passwordAuth**: 'Disabled' | 'Enabled' | string: If Enabled, Password authentication is enabled.
* **tenantId**: string: Tenant id of the server.

## Backup
### Properties
* **backupRetentionDays**: int: Backup retention days for the server.
* **earliestRestoreDate**: string (ReadOnly): The earliest restore point time (ISO8601 format) for server.
* **geoRedundantBackup**: 'Disabled' | 'Enabled' | string: A value indicating whether Geo-Redundant backup is enabled on the server.

## ConfigurationProperties
### Properties
* **allowedValues**: string (ReadOnly): Allowed values of the configuration.
* **dataType**: 'Boolean' | 'Enumeration' | 'Integer' | 'Numeric' | string (ReadOnly): Data type of the configuration.
* **defaultValue**: string (ReadOnly): Default value of the configuration.
* **description**: string (ReadOnly): Description of the configuration.
* **documentationLink**: string (ReadOnly): Configuration documentation link.
* **isConfigPendingRestart**: bool (ReadOnly): Configuration is pending restart or not.
* **isDynamicConfig**: bool (ReadOnly): Configuration dynamic or static.
* **isReadOnly**: bool (ReadOnly): Configuration read-only or not.
* **source**: string: Source of the configuration.
* **unit**: string (ReadOnly): Configuration unit.
* **value**: string: Value of the configuration.

## DatabaseProperties
### Properties
* **charset**: string {pattern: "^[a-zA-Z]+\w*$"}: The charset of the database.
* **collation**: string {pattern: "^[a-zA-Z\-]+([. ]|\w)*$"}: The collation of the database.

## DataEncryption
### Properties
* **geoBackupEncryptionKeyStatus**: 'Invalid' | 'Valid' | string (ReadOnly): Geo-backup encryption key status for Data encryption enabled server.
* **geoBackupKeyURI**: string: URI for the key in keyvault for data encryption for geo-backup of server.
* **geoBackupUserAssignedIdentityId**: string: Resource Id for the User assigned identity to be used for data encryption for geo-backup of server.
* **primaryEncryptionKeyStatus**: 'Invalid' | 'Valid' | string (ReadOnly): Primary encryption key status for Data encryption enabled server.
* **primaryKeyURI**: string: URI for the key in keyvault for data encryption of the primary server.
* **primaryUserAssignedIdentityId**: string: Resource Id for the User assigned identity to be used for data encryption of the primary server.
* **type**: 'AzureKeyVault' | 'SystemManaged' | string: Data encryption type to depict if it is System Managed vs Azure Key vault.

## DbLevelValidationStatus
### Properties
* **databaseName**: string: Name of the database
* **endedOn**: string: End date-time of a database level validation
* **startedOn**: string: Start date-time of a database level validation
* **summary**: [ValidationSummaryItem](#validationsummaryitem)[]: Summary of database level validations

## DbMigrationStatus
### Properties
* **appliedChanges**: int: CDC applied changes counter
* **cdcDeleteCounter**: int: CDC delete counter
* **cdcInsertCounter**: int: CDC insert counter
* **cdcUpdateCounter**: int: CDC update counter
* **databaseName**: string: Name of the database
* **endedOn**: string: End date-time of a migration state
* **fullLoadCompletedTables**: int: Number of tables loaded during the migration of a DB
* **fullLoadErroredTables**: int: Number of tables errored out during the migration of a DB
* **fullLoadLoadingTables**: int: Number of tables loading during the migration of a DB
* **fullLoadQueuedTables**: int: Number of tables queued for the migration of a DB
* **incomingChanges**: int: CDC incoming changes counter
* **latency**: int: Lag in seconds between source and target during online phase
* **message**: string: Error message, if any, for the migration state
* **migrationOperation**: string: Migration operation of an individual database
* **migrationState**: 'Canceled' | 'Canceling' | 'Failed' | 'InProgress' | 'Succeeded' | 'WaitingForCutoverTrigger' | string: Migration db state of an individual database
* **startedOn**: string: Start date-time of a migration state

## DbServerMetadata
### Properties
* **location**: string (ReadOnly): Location of database server
* **sku**: [ServerSku](#serversku): SKU for the database server. This object is empty for PG single server
* **storageMb**: int: Storage size in MB for database server
* **version**: string: Version for database engine

## FirewallRuleProperties
### Properties
* **endIpAddress**: string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"} (Required): The end IP address of the server firewall rule. Must be IPv4 format.
* **startIpAddress**: string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"} (Required): The start IP address of the server firewall rule. Must be IPv4 format.

## HighAvailability
### Properties
* **mode**: 'Disabled' | 'SameZone' | 'ZoneRedundant' | string: The HA mode for the server.
* **standbyAvailabilityZone**: string: availability zone information of the standby.
* **state**: 'CreatingStandby' | 'FailingOver' | 'Healthy' | 'NotEnabled' | 'RemovingStandby' | 'ReplicatingData' | string (ReadOnly): A state of a HA server that is visible to user.

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
* **customWindow**: string: indicates whether custom window is enabled or disabled
* **dayOfWeek**: int: day of week for maintenance window
* **startHour**: int: start hour for maintenance window
* **startMinute**: int: start minute for maintenance window

## MigrationResourceProperties
### Properties
* **cancel**: 'False' | 'True' | string: To trigger cancel for entire migration we need to send this flag as True
* **currentStatus**: [MigrationStatus](#migrationstatus) (ReadOnly): Current status of migration
* **dbsToCancelMigrationOn**: string[]: When you want to trigger cancel for specific databases send cancel flag as True and database names in this array
* **dbsToMigrate**: string[] {maxLength: 50}: Number of databases to migrate
* **dbsToTriggerCutoverOn**: string[]: When you want to trigger cutover for specific databases send triggerCutover flag as True and database names in this array
* **migrateRoles**: 'False' | 'True' | string: To migrate roles and permissions we need to send this flag as True
* **migrationId**: string (ReadOnly): ID for migration, a GUID.
* **migrationInstanceResourceId**: string: ResourceId of the private endpoint migration instance
* **migrationMode**: 'Offline' | 'Online' | string: There are two types of migration modes Online and Offline
* **migrationOption**: 'Migrate' | 'Validate' | 'ValidateAndMigrate' | string: This indicates the supported Migration option for the migration
* **migrationWindowEndTimeInUtc**: string: End time in UTC for migration window
* **migrationWindowStartTimeInUtc**: string: Start time in UTC for migration window
* **overwriteDbsInTarget**: 'False' | 'True' | string: Indicates whether the databases on the target server can be overwritten, if already present. If set to False, the migration workflow will wait for a confirmation, if it detects that the database already exists.
* **secretParameters**: [MigrationSecretParameters](#migrationsecretparameters): Migration secret parameters
* **setupLogicalReplicationOnSourceDbIfNeeded**: 'False' | 'True' | string: Indicates whether to setup LogicalReplicationOnSourceDb, if needed
* **sourceDbServerFullyQualifiedDomainName**: string: Source server fully qualified domain name (FQDN) or IP address. It is a optional value, if customer provide it, migration service will always use it for connection
* **sourceDbServerMetadata**: [DbServerMetadata](#dbservermetadata) (ReadOnly): Metadata of the source database server
* **sourceDbServerResourceId**: string: ResourceId of the source database server in case the sourceType is PostgreSQLSingleServer. For other source types this should be ipaddress:port@username or hostname:port@username
* **sourceType**: 'AWS' | 'AWS_AURORA' | 'AWS_EC2' | 'AWS_RDS' | 'AzureVM' | 'EDB' | 'GCP' | 'GCP_AlloyDB' | 'GCP_CloudSQL' | 'GCP_Compute' | 'OnPremises' | 'PostgreSQLSingleServer' | string: migration source server type : OnPremises, AWS, GCP, AzureVM, PostgreSQLSingleServer, AWS_RDS, AWS_AURORA, AWS_EC2, GCP_CloudSQL, GCP_AlloyDB, GCP_Compute, or EDB
* **sslMode**: 'Prefer' | 'Require' | 'VerifyCA' | 'VerifyFull' | string: SSL modes for migration. Default SSL mode for PostgreSQLSingleServer is VerifyFull and Prefer for other source types
* **startDataMigration**: 'False' | 'True' | string: Indicates whether the data migration should start right away
* **targetDbServerFullyQualifiedDomainName**: string: Target server fully qualified domain name (FQDN) or IP address. It is a optional value, if customer provide it, migration service will always use it for connection
* **targetDbServerMetadata**: [DbServerMetadata](#dbservermetadata) (ReadOnly): Metadata of the target database server
* **targetDbServerResourceId**: string (ReadOnly): ResourceId of the source database server
* **triggerCutover**: 'False' | 'True' | string: To trigger cutover for entire migration we need to send this flag as True

## MigrationSecretParameters
### Properties
* **adminCredentials**: [AdminCredentials](#admincredentials) (Required): Admin credentials for source and target servers
* **sourceServerUsername**: string (WriteOnly): Gets or sets the username for the source server. This user need not be an admin.
* **targetServerUsername**: string (WriteOnly): Gets or sets the username for the target server. This user need not be an admin.

## MigrationStatus
### Properties
* **currentSubStateDetails**: [MigrationSubStateDetails](#migrationsubstatedetails) (ReadOnly): Current Migration sub state details.
* **error**: string (ReadOnly): Error message, if any, for the migration state
* **state**: 'Canceled' | 'CleaningUp' | 'Failed' | 'InProgress' | 'Succeeded' | 'ValidationFailed' | 'WaitingForUserAction' | string (ReadOnly): State of migration

## MigrationSubStateDetails
### Properties
* **currentSubState**: 'CancelingRequestedDBMigrations' | 'Completed' | 'CompletingMigration' | 'MigratingData' | 'PerformingPreRequisiteSteps' | 'ValidationInProgress' | 'WaitingForCutoverTrigger' | 'WaitingForDBsToMigrateSpecification' | 'WaitingForDataMigrationScheduling' | 'WaitingForDataMigrationWindow' | 'WaitingForLogicalReplicationSetupRequestOnSourceDB' | 'WaitingForTargetDBOverwriteConfirmation' | string (ReadOnly): Migration sub state.
* **dbDetails**: [MigrationSubStateDetailsDbDetails](#migrationsubstatedetailsdbdetails): Dictionary of <DbMigrationStatus>
* **validationDetails**: [ValidationDetails](#validationdetails): Details for the validation for migration

## MigrationSubStateDetailsDbDetails
### Properties
### Additional Properties
* **Additional Properties Type**: [DbMigrationStatus](#dbmigrationstatus)

## Network
### Properties
* **delegatedSubnetResourceId**: string: Delegated subnet arm resource id. This is required to be passed during create, in case we want the server to be VNET injected, i.e. Private access server. During update, pass this only if we want to update the value for Private DNS zone.
* **privateDnsZoneArmResourceId**: string: Private dns zone arm resource id. This is required to be passed during create, in case we want the server to be VNET injected, i.e. Private access server. During update, pass this only if we want to update the value for Private DNS zone.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: public network access is enabled or not

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
* **capacity**: int (ReadOnly): Replicas allowed for a server.
* **promoteMode**: 'standalone' | 'switchover' | string (WriteOnly): Sets the promote mode for a replica server. This is a write only property.
* **promoteOption**: 'forced' | 'planned' | string (WriteOnly): Sets the promote options for a replica server. This is a write only property.
* **replicationState**: 'Active' | 'Broken' | 'Catchup' | 'Provisioning' | 'Reconfiguring' | 'Updating' | string (ReadOnly): Gets the replication state of a replica server. This property is returned only for replicas api call. Supported values are Active, Catchup, Provisioning, Updating, Broken, Reconfiguring
* **role**: 'AsyncReplica' | 'GeoAsyncReplica' | 'None' | 'Primary' | string: Used to indicate role of the server in replication set.

## ServerBackupProperties
### Properties
* **backupType**: 'Customer On-Demand' | 'Full' | string: Backup type.
* **completedTime**: string: Backup completed time (ISO8601 format).
* **source**: string: Backup source

## ServerProperties
### Properties
* **administratorLogin**: string: The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation).
* **administratorLoginPassword**: string {sensitive} (WriteOnly): The administrator login password (required for server creation).
* **authConfig**: [AuthConfig](#authconfig): AuthConfig properties of a server.
* **availabilityZone**: string: availability zone information of the server.
* **backup**: [Backup](#backup): Backup properties of a server.
* **createMode**: 'Create' | 'Default' | 'GeoRestore' | 'PointInTimeRestore' | 'Replica' | 'ReviveDropped' | 'Update' | string (WriteOnly): The mode to create a new PostgreSQL server.
* **dataEncryption**: [DataEncryption](#dataencryption): Data encryption properties of a server.
* **fullyQualifiedDomainName**: string (ReadOnly): The fully qualified domain name of a server.
* **highAvailability**: [HighAvailability](#highavailability): High availability properties of a server.
* **maintenanceWindow**: [MaintenanceWindow](#maintenancewindow): Maintenance window properties of a server.
* **minorVersion**: string (ReadOnly): The minor version of the server.
* **network**: [Network](#network): Network properties of a server. This Network property is required to be passed only in case you want the server to be Private access server.
* **pointInTimeUTC**: string (WriteOnly): Restore point creation time (ISO8601 format), specifying the time to restore from. It's required when 'createMode' is 'PointInTimeRestore' or 'GeoRestore' or 'ReviveDropped'.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connections associated with the specified resource.
* **replica**: [Replica](#replica): Replica properties of a server. These Replica properties are required to be passed only in case you want to Promote a server.
* **replicaCapacity**: int (ReadOnly): Replicas allowed for a server.
* **replicationRole**: 'AsyncReplica' | 'GeoAsyncReplica' | 'None' | 'Primary' | string: Replication role of the server
* **sourceServerResourceId**: string: The source server resource ID to restore from. It's required when 'createMode' is 'PointInTimeRestore' or 'GeoRestore' or 'Replica' or 'ReviveDropped'. This property is returned only for Replica server
* **state**: 'Disabled' | 'Dropping' | 'Ready' | 'Starting' | 'Stopped' | 'Stopping' | 'Updating' | string (ReadOnly): A state of a server that is visible to user.
* **storage**: [Storage](#storage): Storage properties of a server.
* **version**: '11' | '12' | '13' | '14' | '15' | '16' | string: PostgreSQL Server version.

## ServerSku
### Properties
* **name**: string: The name of the sku, typically, tier + family + cores, e.g. Standard_D4s_v3.
* **tier**: 'Burstable' | 'GeneralPurpose' | 'MemoryOptimized' | string: The tier of the particular SKU, e.g. Burstable.

## ServerThreatProtectionProperties
### Properties
* **creationTime**: string (ReadOnly): Specifies the UTC creation time of the policy.
* **state**: 'Disabled' | 'Enabled' (Required): Specifies the state of the Threat Protection, whether it is enabled or disabled or a state has not been applied yet on the specific server.

## Sku
### Properties
* **name**: string (Required): The name of the sku, typically, tier + family + cores, e.g. Standard_D4s_v3.
* **tier**: 'Burstable' | 'GeneralPurpose' | 'MemoryOptimized' | string (Required): The tier of the particular SKU, e.g. Burstable.

## Storage
### Properties
* **autoGrow**: 'Disabled' | 'Enabled' | string: Flag to enable / disable Storage Auto grow for flexible server.
* **iops**: int: Storage tier IOPS quantity. This property is required to be set for storage Type PremiumV2_LRS
* **storageSizeGB**: int: Max storage allowed for a server.
* **throughput**: int: Storage throughput for the server. This is required to be set for storage Type PremiumV2_LRS
* **tier**: 'P1' | 'P10' | 'P15' | 'P2' | 'P20' | 'P3' | 'P30' | 'P4' | 'P40' | 'P50' | 'P6' | 'P60' | 'P70' | 'P80' | string: Name of storage tier for IOPS.
* **type**: 'PremiumV2_LRS' | 'Premium_LRS' | string: Storage type for the server. Allowed values are Premium_LRS and PremiumV2_LRS, and default is Premium_LRS if not specified

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
* **tenantId**: string (ReadOnly): Tenant id of the server.
* **type**: 'None' | 'UserAssigned' | string (Required): the types of identities associated with this resource; currently restricted to 'None and UserAssigned'
* **userAssignedIdentities**: [UserAssignedIdentityMap](#userassignedidentitymap): represents user assigned identities map.

## UserAssignedIdentityMap
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentity](#useridentity)

## UserIdentity
### Properties
* **clientId**: string: the client identifier of the Service Principal which this identity represents.
* **principalId**: string: the object identifier of the Service Principal which this identity represents.

## ValidationDetails
### Properties
* **dbLevelValidationDetails**: [DbLevelValidationStatus](#dblevelvalidationstatus)[]: Details of server level validations
* **serverLevelValidationDetails**: [ValidationSummaryItem](#validationsummaryitem)[]: Details of server level validations
* **status**: 'Failed' | 'Succeeded' | 'Warning' | string: Validation status for migration
* **validationEndTimeInUtc**: string: Validation End date-time in UTC
* **validationStartTimeInUtc**: string: Validation Start date-time in UTC

## ValidationMessage
### Properties
* **message**: string: Validation message string
* **state**: 'Failed' | 'Succeeded' | 'Warning' | string: Severity of validation message

## ValidationSummaryItem
### Properties
* **messages**: [ValidationMessage](#validationmessage)[]: Validation messages
* **state**: 'Failed' | 'Succeeded' | 'Warning' | string: Validation status for migration
* **type**: string: Validation type

## VirtualEndpointResourceProperties
### Properties
* **endpointType**: 'ReadWrite' | string: The endpoint type for the virtual endpoint.
* **members**: string[]: List of members for a virtual endpoint
* **virtualEndpoints**: string[] (ReadOnly): List of virtual endpoints for a server

