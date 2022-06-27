# Microsoft.Sql @ 2018-06-01-preview

## Resource Microsoft.Sql/instancePools@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InstancePoolProperties](#instancepoolproperties): Resource properties.
* **sku**: [Sku](#sku): The name and tier of the SKU.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Sql/instancePools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/locations/longTermRetentionManagedInstances/longTermRetentionDatabases/longTermRetentionManagedInstanceBackups@2018-06-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription, ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstanceLongTermRetentionBackupProperties](#managedinstancelongtermretentionbackupproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/locations/longTermRetentionManagedInstances/longTermRetentionDatabases/longTermRetentionManagedInstanceBackups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceIdentity](#resourceidentity): The Azure Active Directory identity of the managed instance.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstanceProperties](#managedinstanceproperties): Resource properties.
* **sku**: [Sku](#sku): Managed instance SKU. Allowed values for sku.name: GP_Gen4, GP_Gen5, BC_Gen4, BC_Gen5
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Sql/managedInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedDatabaseProperties](#manageddatabaseproperties): Resource properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Sql/managedInstances/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/backupLongTermRetentionPolicies@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [BaseLongTermRetentionPolicyProperties](#baselongtermretentionpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/databases/backupLongTermRetentionPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/restoreDetails@2018-06-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedDatabaseRestoreDetailsProperties](#manageddatabaserestoredetailsproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/databases/restoreDetails' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/schemas/tables/columns/sensitivityLabels@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' | 'recommended' (Required, DeployTimeConstant): The resource name
* **properties**: [SensitivityLabelProperties](#sensitivitylabelproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/databases/schemas/tables/columns/sensitivityLabels' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/operations@2018-06-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstanceOperationProperties](#managedinstanceoperationproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/operations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/vulnerabilityAssessments@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstanceVulnerabilityAssessmentProperties](#managedinstancevulnerabilityassessmentproperties): Resource properties.
* **type**: 'Microsoft.Sql/managedInstances/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/administrators@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'ActiveDirectory' | string (Required, DeployTimeConstant): The resource name
* **properties**: [AdministratorProperties](#administratorproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/administrators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/securityAlertPolicies@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityAlertPolicyProperties](#securityalertpolicyproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/databases/securityAlertPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/privateEndpointConnections@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/privateLinkResources@2018-06-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): The private link resource group id.
* **type**: 'Microsoft.Sql/servers/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/vulnerabilityAssessments@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerVulnerabilityAssessmentProperties](#servervulnerabilityassessmentproperties): Resource properties.
* **type**: 'Microsoft.Sql/servers/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant): The resource type

## AdministratorProperties
### Properties
* **administratorType**: 'ActiveDirectory' | string (Required): Type of the sever administrator.
* **login**: string (Required): Login name of the server administrator.
* **sid**: string (Required): SID (object ID) of the server administrator.
* **tenantId**: string: Tenant ID of the administrator.

## BaseLongTermRetentionPolicyProperties
### Properties
* **monthlyRetention**: string: The monthly retention policy for an LTR backup in an ISO 8601 format.
* **weeklyRetention**: string: The weekly retention policy for an LTR backup in an ISO 8601 format.
* **weekOfYear**: int: The week of year to take the yearly backup in an ISO 8601 format.
* **yearlyRetention**: string: The yearly retention policy for an LTR backup in an ISO 8601 format.

## InstancePoolProperties
### Properties
* **licenseType**: 'BasePrice' | 'LicenseIncluded' | string (Required): The license type. Possible values are 'LicenseIncluded' (price for SQL license is included) and 'BasePrice' (without SQL license price).
* **subnetId**: string (Required): Resource ID of the subnet to place this instance pool in.
* **vCores**: int (Required): Count of vCores belonging to this instance pool.

## ManagedDatabaseProperties
### Properties
* **catalogCollation**: 'DATABASE_DEFAULT' | 'SQL_Latin1_General_CP1_CI_AS' | string: Collation of the metadata catalog.
* **collation**: string: Collation of the managed database.
* **createMode**: 'Default' | 'PointInTimeRestore' | 'Recovery' | 'RestoreExternalBackup' | 'RestoreLongTermRetentionBackup' | string (WriteOnly): Managed database create mode. PointInTimeRestore: Create a database by restoring a point in time backup of an existing database. SourceDatabaseName, SourceManagedInstanceName and PointInTime must be specified. RestoreExternalBackup: Create a database by restoring from external backup files. Collation, StorageContainerUri and StorageContainerSasToken must be specified. Recovery: Creates a database by restoring a geo-replicated backup. RecoverableDatabaseId must be specified as the recoverable database resource ID to restore.
* **creationDate**: string (ReadOnly): Creation date of the database.
* **defaultSecondaryLocation**: string (ReadOnly): Geo paired region.
* **earliestRestorePoint**: string (ReadOnly): Earliest restore point in time for point in time restore.
* **failoverGroupId**: string (ReadOnly): Instance Failover Group resource identifier that this managed database belongs to.
* **longTermRetentionBackupResourceId**: string (WriteOnly): The name of the Long Term Retention backup to be used for restore of this managed database.
* **recoverableDatabaseId**: string (WriteOnly): The resource identifier of the recoverable database associated with create operation of this database.
* **restorableDroppedDatabaseId**: string (WriteOnly): The restorable dropped database resource id to restore when creating this database.
* **restorePointInTime**: string (WriteOnly): Conditional. If createMode is PointInTimeRestore, this value is required. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
* **sourceDatabaseId**: string (WriteOnly): The resource identifier of the source database associated with create operation of this database.
* **status**: 'Creating' | 'Inaccessible' | 'Offline' | 'Online' | 'Restoring' | 'Shutdown' | 'Updating' | string (ReadOnly): Status of the database.
* **storageContainerSasToken**: string (WriteOnly): Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the storage container sas token.
* **storageContainerUri**: string (WriteOnly): Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the uri of the storage container where backups for this restore are stored.

## ManagedDatabaseRestoreDetailsProperties
### Properties
* **blockReason**: string (ReadOnly): The reason why restore is in Blocked state.
* **currentRestoringFileName**: string (ReadOnly): Current restoring file name.
* **lastRestoredFileName**: string (ReadOnly): Last restored file name.
* **lastRestoredFileTime**: string (ReadOnly): Last restored file time.
* **lastUploadedFileName**: string (ReadOnly): Last uploaded file name.
* **lastUploadedFileTime**: string (ReadOnly): Last uploaded file time.
* **numberOfFilesDetected**: int (ReadOnly): Number of files detected.
* **percentCompleted**: int (ReadOnly): Percent completed.
* **status**: string (ReadOnly): Restore status.
* **unrestorableFiles**: string[] (ReadOnly): List of unrestorable files.

## ManagedInstanceLongTermRetentionBackupProperties
### Properties
* **backupExpirationTime**: string (ReadOnly): The time the long term retention backup will expire.
* **backupTime**: string (ReadOnly): The time the backup was taken
* **databaseDeletionTime**: string (ReadOnly): The delete time of the database
* **databaseName**: string (ReadOnly): The name of the database the backup belong to
* **managedInstanceCreateTime**: string (ReadOnly): The create time of the instance.
* **managedInstanceName**: string (ReadOnly): The managed instance that the backup database belongs to.

## ManagedInstanceOperationParametersPair
### Properties
* **currentParameters**: [UpsertManagedServerOperationParameters](#upsertmanagedserveroperationparameters) (ReadOnly): The current parameters.
* **requestedParameters**: [UpsertManagedServerOperationParameters](#upsertmanagedserveroperationparameters) (ReadOnly): The requested parameters.

## ManagedInstanceOperationProperties
### Properties
* **description**: string (ReadOnly): The operation description.
* **errorCode**: int (ReadOnly): The operation error code.
* **errorDescription**: string (ReadOnly): The operation error description.
* **errorSeverity**: int (ReadOnly): The operation error severity.
* **estimatedCompletionTime**: string (ReadOnly): The estimated completion time of the operation.
* **isCancellable**: bool (ReadOnly): Whether the operation can be cancelled.
* **isUserError**: bool (ReadOnly): Whether or not the error is a user error.
* **managedInstanceName**: string (ReadOnly): The name of the managed instance the operation is being performed on.
* **operation**: string (ReadOnly): The name of operation.
* **operationFriendlyName**: string (ReadOnly): The friendly name of operation.
* **operationParameters**: [ManagedInstanceOperationParametersPair](#managedinstanceoperationparameterspair) (ReadOnly): The operation parameters.
* **operationSteps**: [ManagedInstanceOperationSteps](#managedinstanceoperationsteps) (ReadOnly): The operation steps.
* **percentComplete**: int (ReadOnly): The percentage of the operation completed.
* **startTime**: string (ReadOnly): The operation start time.
* **state**: 'CancelInProgress' | 'Cancelled' | 'Failed' | 'InProgress' | 'Pending' | 'Succeeded' | string (ReadOnly): The operation state.

## ManagedInstanceOperationSteps
### Properties
* **currentStep**: int (ReadOnly): The number of current operation steps.
* **stepsList**: [UpsertManagedServerOperationStep](#upsertmanagedserveroperationstep)[] (ReadOnly): The operation steps list.
* **totalSteps**: string (ReadOnly): The total number of operation steps.

## ManagedInstanceProperties
### Properties
* **administratorLogin**: string: Administrator username for the managed instance. Can only be specified when the managed instance is being created (and is required for creation).
* **administratorLoginPassword**: string (WriteOnly): The administrator login password (required for managed instance creation).
* **collation**: string: Collation of the managed instance.
* **dnsZone**: string (ReadOnly): The Dns Zone that the managed instance is in.
* **dnsZonePartner**: string (WriteOnly): The resource id of another managed instance whose DNS zone this managed instance will share after creation.
* **fullyQualifiedDomainName**: string (ReadOnly): The fully qualified domain name of the managed instance.
* **instancePoolId**: string: The Id of the instance pool this managed server belongs to.
* **licenseType**: 'BasePrice' | 'LicenseIncluded' | string: The license type. Possible values are 'LicenseIncluded' (regular price inclusive of a new SQL license) and 'BasePrice' (discounted AHB price for bringing your own SQL licenses).
* **maintenanceConfigurationId**: string: Specifies maintenance configuration id to apply to this managed instance.
* **managedInstanceCreateMode**: 'Default' | 'PointInTimeRestore' | string (WriteOnly): Specifies the mode of database creation.

Default: Regular instance creation.

Restore: Creates an instance by restoring a set of backups to specific point in time. RestorePointInTime and SourceManagedInstanceId must be specified.
* **minimalTlsVersion**: string: Minimal TLS version. Allowed values: 'None', '1.0', '1.1', '1.2'
* **proxyOverride**: 'Default' | 'Proxy' | 'Redirect' | string: Connection type used for connecting to the instance.
* **publicDataEndpointEnabled**: bool: Whether or not the public data endpoint is enabled.
* **restorePointInTime**: string (WriteOnly): Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
* **sourceManagedInstanceId**: string (WriteOnly): The resource identifier of the source managed instance associated with create operation of this instance.
* **state**: string (ReadOnly): The state of the managed instance.
* **storageSizeInGB**: int: Storage size in GB. Minimum value: 32. Maximum value: 8192. Increments of 32 GB allowed only.
* **subnetId**: string: Subnet resource ID for the managed instance.
* **timezoneId**: string: Id of the timezone. Allowed values are timezones supported by Windows.
Windows keeps details on supported timezones, including the id, in registry under
KEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones.
You can get those registry values via SQL Server by querying SELECT name AS timezone_id FROM sys.time_zone_info.
List of Ids can also be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell.
An example of valid timezone id is "Pacific Standard Time" or "W. Europe Standard Time".
* **vCores**: int: The number of vCores. Allowed values: 8, 16, 24, 32, 40, 64, 80.

## ManagedInstanceVulnerabilityAssessmentProperties
### Properties
* **recurringScans**: [VulnerabilityAssessmentRecurringScansProperties](#vulnerabilityassessmentrecurringscansproperties): The recurring scans settings
* **storageAccountAccessKey**: string (WriteOnly): Specifies the identifier key of the storage account for vulnerability assessment scan results. If 'StorageContainerSasKey' isn't specified, storageAccountAccessKey is required.
* **storageContainerPath**: string (Required, WriteOnly): A blob storage container path to hold the scan results (e.g. https://myStorage.blob.core.windows.net/VaScans/).
* **storageContainerSasKey**: string (WriteOnly): A shared access signature (SAS Key) that has read and write access to the blob container specified in 'storageContainerPath' parameter. If 'storageAccountAccessKey' isn't specified, StorageContainerSasKey is required.

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpointProperty](#privateendpointproperty): Private endpoint which the connection belongs to.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionStateProperty](#privatelinkserviceconnectionstateproperty): Connection state of the private endpoint connection.
* **provisioningState**: string (ReadOnly): State of the private endpoint connection.

## PrivateEndpointProperty
### Properties
* **id**: string: Resource id of the private endpoint.

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: string (ReadOnly): The actions required for private link service connection.
* **description**: string (Required): The private link service connection description.
* **status**: string (Required): The private link service connection status.

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly): The Azure Active Directory principal id.
* **tenantId**: string (ReadOnly): The Azure Active Directory tenant id.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string: The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.

## SecurityAlertPolicyProperties
### Properties
* **creationTime**: string (ReadOnly): Specifies the UTC creation time of the policy.
* **disabledAlerts**: string[]: Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly, Data_Exfiltration, Unsafe_Action
* **emailAccountAdmins**: bool: Specifies that the alert is sent to the account administrators.
* **emailAddresses**: string[]: Specifies an array of e-mail addresses to which the alert is sent.
* **retentionDays**: int: Specifies the number of days to keep in the Threat Detection audit logs.
* **state**: 'Disabled' | 'Enabled' | 'New' (Required): Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific database.
* **storageAccountAccessKey**: string: Specifies the identifier key of the Threat Detection audit storage account.
* **storageEndpoint**: string: Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs.

## SensitivityLabelProperties
### Properties
* **informationType**: string: The information type.
* **informationTypeId**: string: The information type ID.
* **isDisabled**: bool (ReadOnly): Is sensitivity recommendation disabled. Applicable for recommended sensitivity label only. Specifies whether the sensitivity recommendation on this column is disabled (dismissed) or not.
* **labelId**: string: The label ID.
* **labelName**: string: The label name.
* **rank**: 'Critical' | 'High' | 'Low' | 'Medium' | 'None'

## ServerVulnerabilityAssessmentProperties
### Properties
* **recurringScans**: [VulnerabilityAssessmentRecurringScansProperties](#vulnerabilityassessmentrecurringscansproperties): The recurring scans settings
* **storageAccountAccessKey**: string (WriteOnly): Specifies the identifier key of the storage account for vulnerability assessment scan results. If 'StorageContainerSasKey' isn't specified, storageAccountAccessKey is required.
* **storageContainerPath**: string (Required, WriteOnly): A blob storage container path to hold the scan results (e.g. https://myStorage.blob.core.windows.net/VaScans/).
* **storageContainerSasKey**: string (WriteOnly): A shared access signature (SAS Key) that has read and write access to the blob container specified in 'storageContainerPath' parameter. If 'storageAccountAccessKey' isn't specified, StorageContainerSasKey is required.

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UpsertManagedServerOperationParameters
### Properties
* **family**: string
* **storageSizeInGB**: int
* **tier**: string
* **vCores**: int

## UpsertManagedServerOperationStep
### Properties
* **name**: string
* **order**: int
* **status**: 'Canceled' | 'Completed' | 'Failed' | 'InProgress' | 'NotStarted' | 'SlowedDown' | string

## VulnerabilityAssessmentRecurringScansProperties
### Properties
* **emails**: string[]: Specifies an array of e-mail addresses to which the scan notification is sent.
* **emailSubscriptionAdmins**: bool: Specifies that the schedule scan notification will be is sent to the subscription administrators.
* **isEnabled**: bool: Recurring scans state.

