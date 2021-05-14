# Microsoft.Sql @ 2021-02-01-preview

## Resource Microsoft.Sql/servers/databases@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of database. This is metadata used for the Azure portal experience.
* **location**: string (Required): Resource location.
* **managedBy**: string (ReadOnly): Resource that manages the database.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseProperties](#databaseproperties): The database's properties.
* **sku**: [Sku](#sku): An ARM Resource SKU.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Sql/servers/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/extensions@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseExtensionsProperties](#databaseextensionsproperties): Contains the database information after successful export.
* **type**: 'Microsoft.Sql/servers/databases/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/ledgerDigestUploads@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LedgerDigestUploadsProperties](#ledgerdigestuploadsproperties): The properties of a database ledger digest upload settings.
* **type**: 'Microsoft.Sql/servers/databases/ledgerDigestUploads' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/outboundFirewallRules@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OutboundFirewallRuleProperties](#outboundfirewallruleproperties): The properties of an outbound firewall rule.
* **type**: 'Microsoft.Sql/servers/outboundFirewallRules' (ReadOnly, DeployTimeConstant): The resource type

## DatabaseProperties
### Properties
* **autoPauseDelay**: int: Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled
* **catalogCollation**: 'DATABASE_DEFAULT' | 'SQL_Latin1_General_CP1_CI_AS': Collation of the metadata catalog.
* **collation**: string: The collation of the database.
* **createMode**: 'Copy' | 'Default' | 'OnlineSecondary' | 'PointInTimeRestore' | 'Recovery' | 'Restore' | 'RestoreExternalBackup' | 'RestoreExternalBackupSecondary' | 'RestoreLongTermRetentionBackup' | 'Secondary': Specifies the mode of database creation.

Default: regular database creation.

Copy: creates a database as a copy of an existing database. sourceDatabaseId must be specified as the resource ID of the source database.

Secondary: creates a database as a secondary replica of an existing database. sourceDatabaseId must be specified as the resource ID of the existing primary database.

PointInTimeRestore: Creates a database by restoring a point in time backup of an existing database. sourceDatabaseId must be specified as the resource ID of the existing database, and restorePointInTime must be specified.

Recovery: Creates a database by restoring a geo-replicated backup. sourceDatabaseId must be specified as the recoverable database resource ID to restore.

Restore: Creates a database by restoring a backup of a deleted database. sourceDatabaseId must be specified. If sourceDatabaseId is the database's original resource ID, then sourceDatabaseDeletionDate must be specified. Otherwise sourceDatabaseId must be the restorable dropped database resource ID and sourceDatabaseDeletionDate is ignored. restorePointInTime may also be specified to restore from an earlier point in time.

RestoreLongTermRetentionBackup: Creates a database by restoring from a long term retention vault. recoveryServicesRecoveryPointResourceId must be specified as the recovery point resource ID.

Copy, Secondary, and RestoreLongTermRetentionBackup are not supported for DataWarehouse edition.
* **creationDate**: string (ReadOnly): The creation date of the database (ISO8601 format).
* **currentBackupStorageRedundancy**: 'Geo' | 'Local' | 'Zone' (ReadOnly): The storage account type used to store backups for this database.
* **currentServiceObjectiveName**: string (ReadOnly): The current service level objective name of the database.
* **currentSku**: [Sku](#sku) (ReadOnly): An ARM Resource SKU.
* **databaseId**: string (ReadOnly): The ID of the database.
* **defaultSecondaryLocation**: string (ReadOnly): The default secondary region for this database.
* **earliestRestoreDate**: string (ReadOnly): This records the earliest start date and time that restore is available for this database (ISO8601 format).
* **elasticPoolId**: string: The resource identifier of the elastic pool containing this database.
* **failoverGroupId**: string (ReadOnly): Failover Group resource identifier that this database belongs to.
* **highAvailabilityReplicaCount**: int: The number of secondary replicas associated with the database that are used to provide high availability.
* **isInfraEncryptionEnabled**: bool (ReadOnly): Infra encryption is enabled for this database.
* **isLedgerOn**: bool: Whether or not this database is a ledger database, which means all tables in the database are ledger tables. Note: the value of this property cannot be changed after the database has been created.
* **licenseType**: 'BasePrice' | 'LicenseIncluded': The license type to apply for this database. `LicenseIncluded` if you need a license, or `BasePrice` if you have a license and are eligible for the Azure Hybrid Benefit.
* **longTermRetentionBackupResourceId**: string: The resource identifier of the long term retention backup associated with create operation of this database.
* **maintenanceConfigurationId**: string: Maintenance configuration id assigned to the database. This configuration defines the period when the maintenance updates will occur.
* **maxLogSizeBytes**: int (ReadOnly): The max log size for this database.
* **maxSizeBytes**: int: The max size of the database expressed in bytes.
* **minCapacity**: int: Minimal capacity that database will always have allocated, if not paused
* **pausedDate**: string (ReadOnly): The date when database was paused by user configuration or action(ISO8601 format). Null if the database is ready.
* **readScale**: 'Disabled' | 'Enabled': The state of read-only routing. If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica in the same region.
* **recoverableDatabaseId**: string: The resource identifier of the recoverable database associated with create operation of this database.
* **recoveryServicesRecoveryPointId**: string: The resource identifier of the recovery point associated with create operation of this database.
* **requestedBackupStorageRedundancy**: 'Geo' | 'Local' | 'Zone': The storage account type to be used to store backups for this database.
* **requestedServiceObjectiveName**: string (ReadOnly): The requested service level objective name of the database.
* **restorableDroppedDatabaseId**: string: The resource identifier of the restorable dropped database associated with create operation of this database.
* **restorePointInTime**: string: Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
* **resumedDate**: string (ReadOnly): The date when database was resumed by user action or database login (ISO8601 format). Null if the database is paused.
* **sampleName**: 'AdventureWorksLT' | 'WideWorldImportersFull' | 'WideWorldImportersStd': The name of the sample schema to apply when creating this database.
* **secondaryType**: 'Geo' | 'Named': The secondary type of the database if it is a secondary.  Valid values are Geo and Named.
* **sourceDatabaseDeletionDate**: string: Specifies the time that the database was deleted.
* **sourceDatabaseId**: string: The resource identifier of the source database associated with create operation of this database.
* **status**: 'AutoClosed' | 'Copying' | 'Creating' | 'Disabled' | 'EmergencyMode' | 'Inaccessible' | 'Offline' | 'OfflineChangingDwPerformanceTiers' | 'OfflineSecondary' | 'Online' | 'OnlineChangingDwPerformanceTiers' | 'Paused' | 'Pausing' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Resuming' | 'Scaling' | 'Shutdown' | 'Standby' | 'Suspect' (ReadOnly): The status of the database.
* **zoneRedundant**: bool: Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones.

## Sku
### Properties
* **capacity**: int: Capacity of the particular SKU.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU, typically, a letter + Number code, e.g. P3.
* **size**: string: Size of the particular SKU
* **tier**: string: The tier or edition of the particular SKU, e.g. Basic, Premium.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatabaseExtensionsProperties
### Properties
* **operationMode**: string (Required): Operation Mode.
* **storageKey**: string (Required): Storage key.
* **storageKeyType**: 'SharedAccessKey' | 'StorageAccessKey' (Required): Storage key type.
* **storageUri**: string (Required): Storage Uri.

## LedgerDigestUploadsProperties
### Properties
* **digestStorageEndpoint**: string: The digest storage endpoint, which must be either an Azure blob storage endpoint or an URI for Azure Confidential Ledger.
* **state**: 'Disabled' | 'Enabled' (ReadOnly): Specifies the state of ledger digest upload.

## OutboundFirewallRuleProperties
### Properties
* **provisioningState**: string (ReadOnly): The state of the outbound rule.

