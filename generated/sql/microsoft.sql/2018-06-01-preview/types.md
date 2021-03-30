# Microsoft.Sql @ 2018-06-01-preview

## Resource Microsoft.Sql/instancePools@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InstancePoolProperties](#instancepoolproperties): Properties of an instance pool.
* **sku**: [Sku](#sku): An ARM Resource SKU.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Sql/instancePools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceIdentity](#resourceidentity): Azure Active Directory identity configuration for a resource.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstanceProperties](#managedinstanceproperties): The properties of a managed instance.
* **sku**: [Sku](#sku): An ARM Resource SKU.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Sql/managedInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedDatabaseProperties](#manageddatabaseproperties): The managed database's properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Sql/managedInstances/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/backupLongTermRetentionPolicies@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BaseLongTermRetentionPolicyProperties](#baselongtermretentionpolicyproperties): Properties of a long term retention policy
* **type**: 'Microsoft.Sql/managedInstances/databases/backupLongTermRetentionPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/databases/schemas/tables/columns/sensitivityLabels@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SensitivityLabelProperties](#sensitivitylabelproperties): Properties of a sensitivity label.
* **type**: 'Microsoft.Sql/managedInstances/databases/schemas/tables/columns/sensitivityLabels' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/managedInstances/vulnerabilityAssessments@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedInstanceVulnerabilityAssessmentProperties](#managedinstancevulnerabilityassessmentproperties): Properties of a managed instance vulnerability assessment.
* **type**: 'Microsoft.Sql/managedInstances/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/administrators@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AdministratorProperties](#administratorproperties): Properties of a active directory administrator.
* **type**: 'Microsoft.Sql/servers/administrators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/securityAlertPolicies@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityAlertPolicyProperties](#securityalertpolicyproperties): Properties of a security alert policy.
* **type**: 'Microsoft.Sql/servers/databases/securityAlertPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/privateEndpointConnections@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of a private endpoint connection.
* **type**: 'Microsoft.Sql/servers/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/vulnerabilityAssessments@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerVulnerabilityAssessmentProperties](#servervulnerabilityassessmentproperties): Properties of a server Vulnerability Assessment.
* **type**: 'Microsoft.Sql/servers/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant): The resource type

## InstancePoolProperties
### Properties
* **licenseType**: 'BasePrice' | 'LicenseIncluded' (Required): The license type. Possible values are 'LicenseIncluded' (price for SQL license is included) and 'BasePrice' (without SQL license price). Possible values include: 'LicenseIncluded', 'BasePrice'
* **subnetId**: string (Required): Resource ID of the subnet to place this instance pool in.
* **vCores**: int (Required): Count of vCores belonging to this instance pool.

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

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly): The Azure Active Directory principal id.
* **tenantId**: string (ReadOnly): The Azure Active Directory tenant id.
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned': The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource. Possible values include: 'None', 'SystemAssigned', 'UserAssigned'

## ManagedInstanceProperties
### Properties
* **administratorLogin**: string: Administrator username for the managed instance. Can only be specified when the managed instance is being created (and is required for creation).
* **administratorLoginPassword**: string: The administrator login password (required for managed instance creation).
* **collation**: string: Collation of the managed instance.
* **dnsZone**: string (ReadOnly): The Dns Zone that the managed instance is in.
* **dnsZonePartner**: string: The resource id of another managed instance whose DNS zone this managed instance will share after creation.
* **fullyQualifiedDomainName**: string (ReadOnly): The fully qualified domain name of the managed instance.
* **instancePoolId**: string: The Id of the instance pool this managed server belongs to.
* **licenseType**: 'BasePrice' | 'LicenseIncluded': The license type. Possible values are 'LicenseIncluded' (regular price inclusive of a new SQL license) and 'BasePrice' (discounted AHB price for bringing your own SQL licenses). Possible values include: 'LicenseIncluded', 'BasePrice'
* **maintenanceConfigurationId**: string: Specifies maintenance configuration id to apply to this managed instance.
* **managedInstanceCreateMode**: 'Default' | 'PointInTimeRestore': Specifies the mode of database creation.

Default: Regular instance creation.

Restore: Creates an instance by restoring a set of backups to specific point in time. RestorePointInTime and SourceManagedInstanceId must be specified. Possible values include: 'Default', 'PointInTimeRestore'
* **minimalTlsVersion**: string: Minimal TLS version. Allowed values: 'None', '1.0', '1.1', '1.2'
* **proxyOverride**: 'Default' | 'Proxy' | 'Redirect': Connection type used for connecting to the instance. Possible values include: 'Proxy', 'Redirect', 'Default'
* **publicDataEndpointEnabled**: bool: Whether or not the public data endpoint is enabled.
* **restorePointInTime**: string: Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
* **sourceManagedInstanceId**: string: The resource identifier of the source managed instance associated with create operation of this instance.
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedDatabaseProperties
### Properties
* **catalogCollation**: 'DATABASE_DEFAULT' | 'SQL_Latin1_General_CP1_CI_AS': Collation of the metadata catalog. Possible values include: 'DATABASE_DEFAULT', 'SQL_Latin1_General_CP1_CI_AS'
* **collation**: string: Collation of the managed database.
* **createMode**: 'Default' | 'PointInTimeRestore' | 'Recovery' | 'RestoreExternalBackup' | 'RestoreLongTermRetentionBackup': Managed database create mode. PointInTimeRestore: Create a database by restoring a point in time backup of an existing database. SourceDatabaseName, SourceManagedInstanceName and PointInTime must be specified. RestoreExternalBackup: Create a database by restoring from external backup files. Collation, StorageContainerUri and StorageContainerSasToken must be specified. Recovery: Creates a database by restoring a geo-replicated backup. RecoverableDatabaseId must be specified as the recoverable database resource ID to restore. Possible values include: 'Default', 'RestoreExternalBackup', 'PointInTimeRestore', 'Recovery', 'RestoreLongTermRetentionBackup'
* **creationDate**: string (ReadOnly): Creation date of the database.
* **defaultSecondaryLocation**: string (ReadOnly): Geo paired region.
* **earliestRestorePoint**: string (ReadOnly): Earliest restore point in time for point in time restore.
* **failoverGroupId**: string (ReadOnly): Instance Failover Group resource identifier that this managed database belongs to.
* **longTermRetentionBackupResourceId**: string: The name of the Long Term Retention backup to be used for restore of this managed database.
* **recoverableDatabaseId**: string: The resource identifier of the recoverable database associated with create operation of this database.
* **restorableDroppedDatabaseId**: string: The restorable dropped database resource id to restore when creating this database.
* **restorePointInTime**: string: Conditional. If createMode is PointInTimeRestore, this value is required. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
* **sourceDatabaseId**: string: The resource identifier of the source database associated with create operation of this database.
* **status**: 'Creating' | 'Inaccessible' | 'Offline' | 'Online' | 'Restoring' | 'Shutdown' | 'Updating' (ReadOnly): Status of the database. Possible values include: 'Online', 'Offline', 'Shutdown', 'Creating', 'Inaccessible', 'Restoring', 'Updating'
* **storageContainerSasToken**: string: Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the storage container sas token.
* **storageContainerUri**: string: Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the uri of the storage container where backups for this restore are stored.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BaseLongTermRetentionPolicyProperties
### Properties
* **monthlyRetention**: string: The monthly retention policy for an LTR backup in an ISO 8601 format.
* **weeklyRetention**: string: The weekly retention policy for an LTR backup in an ISO 8601 format.
* **weekOfYear**: int: The week of year to take the yearly backup in an ISO 8601 format.
* **yearlyRetention**: string: The yearly retention policy for an LTR backup in an ISO 8601 format.

## SensitivityLabelProperties
### Properties
* **informationType**: string: The information type.
* **informationTypeId**: string: The information type ID.
* **isDisabled**: bool (ReadOnly): Is sensitivity recommendation disabled. Applicable for recommended sensitivity label only. Specifies whether the sensitivity recommendation on this column is disabled (dismissed) or not.
* **labelId**: string: The label ID.
* **labelName**: string: The label name.
* **rank**: 'Critical' | 'High' | 'Low' | 'Medium' | 'None': Possible values include: 'None', 'Low', 'Medium', 'High', 'Critical'

## ManagedInstanceVulnerabilityAssessmentProperties
### Properties
* **recurringScans**: [VulnerabilityAssessmentRecurringScansProperties](#vulnerabilityassessmentrecurringscansproperties): Properties of a Vulnerability Assessment recurring scans.
* **storageAccountAccessKey**: string: Specifies the identifier key of the storage account for vulnerability assessment scan results. If 'StorageContainerSasKey' isn't specified, storageAccountAccessKey is required.
* **storageContainerPath**: string (Required): A blob storage container path to hold the scan results (e.g. https://myStorage.blob.core.windows.net/VaScans/).
* **storageContainerSasKey**: string: A shared access signature (SAS Key) that has read and write access to the blob container specified in 'storageContainerPath' parameter. If 'storageAccountAccessKey' isn't specified, StorageContainerSasKey is required.

## VulnerabilityAssessmentRecurringScansProperties
### Properties
* **emails**: string[]: Specifies an array of e-mail addresses to which the scan notification is sent.
* **emailSubscriptionAdmins**: bool: Specifies that the schedule scan notification will be is sent to the subscription administrators.
* **isEnabled**: bool: Recurring scans state.

## AdministratorProperties
### Properties
* **administratorType**: string (Required): Type of the sever administrator.
* **login**: string (Required): Login name of the server administrator.
* **sid**: string (Required): SID (object ID) of the server administrator.
* **tenantId**: string: Tenant ID of the administrator.

## SecurityAlertPolicyProperties
### Properties
* **creationTime**: string (ReadOnly): Specifies the UTC creation time of the policy.
* **disabledAlerts**: string[]: Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly, Data_Exfiltration, Unsafe_Action
* **emailAccountAdmins**: bool: Specifies that the alert is sent to the account administrators.
* **emailAddresses**: string[]: Specifies an array of e-mail addresses to which the alert is sent.
* **retentionDays**: int: Specifies the number of days to keep in the Threat Detection audit logs.
* **state**: 'Disabled' | 'Enabled' | 'New' (Required): Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific database. Possible values include: 'New', 'Enabled', 'Disabled'
* **storageAccountAccessKey**: string: Specifies the identifier key of the Threat Detection audit storage account.
* **storageEndpoint**: string: Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs.

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpointProperty](#privateendpointproperty):
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionStateProperty](#privatelinkserviceconnectionstateproperty):
* **provisioningState**: string (ReadOnly): State of the private endpoint connection.

## PrivateEndpointProperty
### Properties
* **id**: string: Resource id of the private endpoint.

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: string (ReadOnly): The actions required for private link service connection.
* **description**: string (Required): The private link service connection description.
* **status**: string (Required): The private link service connection status.

## ServerVulnerabilityAssessmentProperties
### Properties
* **recurringScans**: [VulnerabilityAssessmentRecurringScansProperties](#vulnerabilityassessmentrecurringscansproperties): Properties of a Vulnerability Assessment recurring scans.
* **storageAccountAccessKey**: string: Specifies the identifier key of the storage account for vulnerability assessment scan results. If 'StorageContainerSasKey' isn't specified, storageAccountAccessKey is required.
* **storageContainerPath**: string (Required): A blob storage container path to hold the scan results (e.g. https://myStorage.blob.core.windows.net/VaScans/).
* **storageContainerSasKey**: string: A shared access signature (SAS Key) that has read and write access to the blob container specified in 'storageContainerPath' parameter. If 'storageAccountAccessKey' isn't specified, StorageContainerSasKey is required.

