# Microsoft.Sql @ 2020-02-02-preview

## Resource Microsoft.Sql/locations/serverTrustGroups@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerTrustGroupProperties](#servertrustgroupproperties): Properties of a server trust group.
* **type**: 'Microsoft.Sql/locations/serverTrustGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceIdentity](#resourceidentity): Azure Active Directory identity configuration for a resource.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstanceProperties](#managedinstanceproperties): The properties of a managed instance.
* **sku**: [Sku](#sku): An ARM Resource SKU.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Sql/managedInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/azureADOnlyAuthentications@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Default' (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstanceAzureADOnlyAuthProperties](#managedinstanceazureadonlyauthproperties): Properties of a active directory only authentication for Managed Instance.
* **type**: 'Microsoft.Sql/managedInstances/azureADOnlyAuthentications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedDatabaseProperties](#manageddatabaseproperties): The managed database's properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Sql/managedInstances/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/azureADOnlyAuthentications@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Default' (Required, DeployTimeConstant): The resource name
* **properties**: [AzureADOnlyAuthProperties](#azureadonlyauthproperties): Properties of a active directory only authentication.
* **type**: 'Microsoft.Sql/servers/azureADOnlyAuthentications' (ReadOnly, DeployTimeConstant): The resource type

## ServerTrustGroupProperties
### Properties
* **groupMembers**: [ServerInfo](#serverinfo)[] (Required): Group members information for the server trust group.
* **trustScopes**: 'GlobalTransactions'[] (Required): Trust scope of the server trust group.

## ServerInfo
### Properties
* **serverId**: string (Required): Server Id.

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly): The Azure Active Directory principal id.
* **tenantId**: string (ReadOnly): The Azure Active Directory tenant id.
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned': The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.

## ManagedInstanceProperties
### Properties
* **administratorLogin**: string: Administrator username for the managed instance. Can only be specified when the managed instance is being created (and is required for creation).
* **administratorLoginPassword**: string: The administrator login password (required for managed instance creation).
* **collation**: string: Collation of the managed instance.
* **dnsZone**: string (ReadOnly): The Dns Zone that the managed instance is in.
* **dnsZonePartner**: string: The resource id of another managed instance whose DNS zone this managed instance will share after creation.
* **fullyQualifiedDomainName**: string (ReadOnly): The fully qualified domain name of the managed instance.
* **instancePoolId**: string: The Id of the instance pool this managed server belongs to.
* **licenseType**: 'BasePrice' | 'LicenseIncluded': The license type. Possible values are 'LicenseIncluded' (regular price inclusive of a new SQL license) and 'BasePrice' (discounted AHB price for bringing your own SQL licenses).
* **maintenanceConfigurationId**: string: Specifies maintenance configuration id to apply to this managed instance.
* **managedInstanceCreateMode**: 'Default' | 'PointInTimeRestore': Specifies the mode of database creation.

Default: Regular instance creation.

Restore: Creates an instance by restoring a set of backups to specific point in time. RestorePointInTime and SourceManagedInstanceId must be specified.
* **minimalTlsVersion**: string: Minimal TLS version. Allowed values: 'None', '1.0', '1.1', '1.2'
* **privateEndpointConnections**: [ManagedInstancePecProperty](#managedinstancepecproperty)[] (ReadOnly): List of private endpoint connections on a managed instance.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **proxyOverride**: 'Default' | 'Proxy' | 'Redirect': Connection type used for connecting to the instance.
* **publicDataEndpointEnabled**: bool: Whether or not the public data endpoint is enabled.
* **restorePointInTime**: string: Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
* **sourceManagedInstanceId**: string: The resource identifier of the source managed instance associated with create operation of this instance.
* **state**: string (ReadOnly): The state of the managed instance.
* **storageAccountType**: 'GRS' | 'LRS' | 'ZRS': The storage account type used to store backups for this instance. The options are LRS (LocallyRedundantStorage), ZRS (ZoneRedundantStorage) and GRS (GeoRedundantStorage)
* **storageSizeInGB**: int: Storage size in GB. Minimum value: 32. Maximum value: 8192. Increments of 32 GB allowed only.
* **subnetId**: string: Subnet resource ID for the managed instance.
* **timezoneId**: string: Id of the timezone. Allowed values are timezones supported by Windows.
Windows keeps details on supported timezones, including the id, in registry under
KEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones.
You can get those registry values via SQL Server by querying SELECT name AS timezone_id FROM sys.time_zone_info.
List of Ids can also be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell.
An example of valid timezone id is "Pacific Standard Time" or "W. Europe Standard Time".
* **vCores**: int: The number of vCores. Allowed values: 8, 16, 24, 32, 40, 64, 80.
* **zoneRedundant**: bool: Whether or not the multi-az is enabled.

## ManagedInstancePecProperty
### Properties
* **id**: string (ReadOnly): Resource ID.
* **properties**: [ManagedInstancePrivateEndpointConnectionProperties](#managedinstanceprivateendpointconnectionproperties) (ReadOnly): Properties of a private endpoint connection.

## ManagedInstancePrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [ManagedInstancePrivateEndpointProperty](#managedinstanceprivateendpointproperty)
* **privateLinkServiceConnectionState**: [ManagedInstancePrivateLinkServiceConnectionStateProperty](#managedinstanceprivatelinkserviceconnectionstateproperty)
* **provisioningState**: string (ReadOnly): State of the Private Endpoint Connection.

## ManagedInstancePrivateEndpointProperty
### Properties
* **id**: string: Resource id of the private endpoint.

## ManagedInstancePrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: string (ReadOnly): The private link service connection description.
* **description**: string (Required): The private link service connection description.
* **status**: string (Required): The private link service connection status.

## Sku
### Properties
* **capacity**: int: Capacity of the particular SKU.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU, typically, a letter + Number code, e.g. P3.
* **size**: string: Size of the particular SKU
* **tier**: string: The tier or edition of the particular SKU, e.g. Basic, Premium.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedInstanceAzureADOnlyAuthProperties
### Properties
* **azureADOnlyAuthentication**: bool (Required): Azure Active Directory only Authentication enabled.

## ManagedDatabaseProperties
### Properties
* **autoCompleteRestore**: bool: Whether to auto complete restore of this managed database.
* **catalogCollation**: 'DATABASE_DEFAULT' | 'SQL_Latin1_General_CP1_CI_AS': Collation of the metadata catalog.
* **collation**: string: Collation of the managed database.
* **createMode**: 'Default' | 'PointInTimeRestore' | 'Recovery' | 'RestoreExternalBackup' | 'RestoreLongTermRetentionBackup': Managed database create mode. PointInTimeRestore: Create a database by restoring a point in time backup of an existing database. SourceDatabaseName, SourceManagedInstanceName and PointInTime must be specified. RestoreExternalBackup: Create a database by restoring from external backup files. Collation, StorageContainerUri and StorageContainerSasToken must be specified. Recovery: Creates a database by restoring a geo-replicated backup. RecoverableDatabaseId must be specified as the recoverable database resource ID to restore. RestoreLongTermRetentionBackup: Create a database by restoring from a long term retention backup (longTermRetentionBackupResourceId required).
* **creationDate**: string (ReadOnly): Creation date of the database.
* **defaultSecondaryLocation**: string (ReadOnly): Geo paired region.
* **earliestRestorePoint**: string (ReadOnly): Earliest restore point in time for point in time restore.
* **failoverGroupId**: string (ReadOnly): Instance Failover Group resource identifier that this managed database belongs to.
* **lastBackupName**: string: Last backup file name for restore of this managed database.
* **longTermRetentionBackupResourceId**: string: The name of the Long Term Retention backup to be used for restore of this managed database.
* **recoverableDatabaseId**: string: The resource identifier of the recoverable database associated with create operation of this database.
* **restorableDroppedDatabaseId**: string: The restorable dropped database resource id to restore when creating this database.
* **restorePointInTime**: string: Conditional. If createMode is PointInTimeRestore, this value is required. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
* **sourceDatabaseId**: string: The resource identifier of the source database associated with create operation of this database.
* **status**: 'Creating' | 'Inaccessible' | 'Offline' | 'Online' | 'Restoring' | 'Shutdown' | 'Updating' (ReadOnly): Status of the database.
* **storageContainerSasToken**: string: Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the storage container sas token.
* **storageContainerUri**: string: Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the uri of the storage container where backups for this restore are stored.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AzureADOnlyAuthProperties
### Properties
* **azureADOnlyAuthentication**: bool (Required): Azure Active Directory only Authentication enabled.

