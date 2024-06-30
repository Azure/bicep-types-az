# Oracle.Database @ 2023-09-01-preview

## Resource Oracle.Database/autonomousDatabases@2023-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 30, pattern: ".*"} (Required, DeployTimeConstant): The resource name
* **properties**: [AutonomousDatabaseBaseProperties](#autonomousdatabasebaseproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Oracle.Database/autonomousDatabases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Oracle.Database/autonomousDatabases/autonomousDatabaseBackups@2023-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: ".*"} (Required, DeployTimeConstant): The resource name
* **properties**: [AutonomousDatabaseBackupProperties](#autonomousdatabasebackupproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Oracle.Database/autonomousDatabases/autonomousDatabaseBackups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Oracle.Database/cloudExadataInfrastructures@2023-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: ".*"} (Required, DeployTimeConstant): The resource name
* **properties**: [CloudExadataInfrastructureProperties](#cloudexadatainfrastructureproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Oracle.Database/cloudExadataInfrastructures' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[] (Required): CloudExadataInfrastructure zones

## Resource Oracle.Database/cloudExadataInfrastructures/dbServers@2023-09-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 255, pattern: ".*"} (Required, DeployTimeConstant): The resource name
* **properties**: [DbServerProperties](#dbserverproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Oracle.Database/cloudExadataInfrastructures/dbServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Oracle.Database/cloudVmClusters@2023-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: ".*"} (Required, DeployTimeConstant): The resource name
* **properties**: [CloudVmClusterProperties](#cloudvmclusterproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Oracle.Database/cloudVmClusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Oracle.Database/cloudVmClusters/dbNodes@2023-09-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 255, pattern: ".*"} (Required, DeployTimeConstant): The resource name
* **properties**: [DbNodeProperties](#dbnodeproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Oracle.Database/cloudVmClusters/dbNodes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Oracle.Database/cloudVmClusters/virtualNetworkAddresses@2023-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 63, pattern: ".*"} (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkAddressProperties](#virtualnetworkaddressproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Oracle.Database/cloudVmClusters/virtualNetworkAddresses' (ReadOnly, DeployTimeConstant): The resource type

## Resource Oracle.Database/locations/autonomousDatabaseCharacterSets@2023-09-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: ".*"} (Required, DeployTimeConstant): The resource name
* **properties**: [AutonomousDatabaseCharacterSetProperties](#autonomousdatabasecharactersetproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Oracle.Database/locations/autonomousDatabaseCharacterSets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Oracle.Database/locations/autonomousDatabaseNationalCharacterSets@2023-09-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: ".*"} (Required, DeployTimeConstant): The resource name
* **properties**: [AutonomousDatabaseNationalCharacterSetProperties](#autonomousdatabasenationalcharactersetproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Oracle.Database/locations/autonomousDatabaseNationalCharacterSets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Oracle.Database/locations/autonomousDbVersions@2023-09-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: ".*"} (Required, DeployTimeConstant): The resource name
* **properties**: [AutonomousDbVersionProperties](#autonomousdbversionproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Oracle.Database/locations/autonomousDbVersions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Oracle.Database/locations/dbSystemShapes@2023-09-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: ".*"} (Required, DeployTimeConstant): The resource name
* **properties**: [DbSystemShapeProperties](#dbsystemshapeproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Oracle.Database/locations/dbSystemShapes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Oracle.Database/locations/dnsPrivateViews@2023-09-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 255, pattern: ".*"} (Required, DeployTimeConstant): The resource name
* **properties**: [DnsPrivateViewProperties](#dnsprivateviewproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Oracle.Database/locations/dnsPrivateViews' (ReadOnly, DeployTimeConstant): The resource type

## Resource Oracle.Database/locations/dnsPrivateZones@2023-09-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: ".*"} (Required, DeployTimeConstant): The resource name
* **properties**: [DnsPrivateZoneProperties](#dnsprivatezoneproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Oracle.Database/locations/dnsPrivateZones' (ReadOnly, DeployTimeConstant): The resource type

## Resource Oracle.Database/locations/giVersions@2023-09-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: ".*"} (Required, DeployTimeConstant): The resource name
* **properties**: [GiVersionProperties](#giversionproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Oracle.Database/locations/giVersions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Oracle.Database/locations/systemVersions@2023-09-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: ".*"} (Required, DeployTimeConstant): The resource name
* **properties**: [SystemVersionProperties](#systemversionproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Oracle.Database/locations/systemVersions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Oracle.Database/oracleSubscriptions@2023-09-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan): Details of the resource plan.
* **properties**: [OracleSubscriptionProperties](#oraclesubscriptionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Oracle.Database/oracleSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Function listActivationLinks (Oracle.Database/oracleSubscriptions@2023-09-01-preview)
* **Resource**: Oracle.Database/oracleSubscriptions
* **ApiVersion**: 2023-09-01-preview
* **Output**: [ActivationLinks](#activationlinks)

## Function listCloudAccountDetails (Oracle.Database/oracleSubscriptions@2023-09-01-preview)
* **Resource**: Oracle.Database/oracleSubscriptions
* **ApiVersion**: 2023-09-01-preview
* **Output**: [CloudAccountDetails](#cloudaccountdetails)

## Function listPrivateIpAddresses (Oracle.Database/cloudVmClusters@2023-09-01-preview)
* **Resource**: Oracle.Database/cloudVmClusters
* **ApiVersion**: 2023-09-01-preview
* **Input**: [PrivateIpAddressesFilter](#privateipaddressesfilter)
* **Output**: [PrivateIpAddressProperties](#privateipaddressproperties)[]

## Function listSaasSubscriptionDetails (Oracle.Database/oracleSubscriptions@2023-09-01-preview)
* **Resource**: Oracle.Database/oracleSubscriptions
* **ApiVersion**: 2023-09-01-preview
* **Output**: [SaasSubscriptionDetails](#saassubscriptiondetails)

## ActivationLinks
### Properties
* **existingCloudAccountActivationLink**: string (ReadOnly): Existing Cloud Account Activation Link
* **newCloudAccountActivationLink**: string (ReadOnly): New Cloud Account Activation Link

## AllConnectionStringType
### Properties
* **high**: string {minLength: 10, maxLength: 255}: The High database service provides the highest level of resources to each SQL statement resulting in the highest performance, but supports the fewest number of concurrent SQL statements.
* **low**: string {minLength: 10, maxLength: 255}: The Low database service provides the least level of resources to each SQL statement, but supports the most number of concurrent SQL statements.
* **medium**: string {minLength: 10, maxLength: 255}: The Medium database service provides a lower level of resources to each SQL statement potentially resulting a lower level of performance, but supports more concurrent SQL statements.

## ApexDetailsType
### Properties
* **apexVersion**: string: The Oracle APEX Application Development version.
* **ordsVersion**: string: The Oracle REST Data Services (ORDS) version.

## AutonomousDatabaseBackupProperties
### Properties
* **autonomousDatabaseOcid**: string {minLength: 1, maxLength: 255} (ReadOnly): The OCID of the Autonomous Database.
* **backupType**: 'Full' | 'Incremental' | 'LongTerm' | string (ReadOnly): The type of backup.
* **databaseSizeInTbs**: int (ReadOnly): The size of the database in terabytes at the time the backup was taken.
* **dbVersion**: string (ReadOnly): A valid Oracle Database version for Autonomous Database.
* **displayName**: string: The user-friendly name for the backup. The name does not have to be unique.
* **isAutomatic**: bool (ReadOnly): Indicates whether the backup is user-initiated or automatic.
* **isRestorable**: bool (ReadOnly): Indicates whether the backup can be used to restore the associated Autonomous Database.
* **lifecycleDetails**: string (ReadOnly): Additional information about the current lifecycle state.
* **lifecycleState**: 'Active' | 'Creating' | 'Deleting' | 'Failed' | 'Updating' | string (ReadOnly): The current state of the backup.
* **ocid**: string {minLength: 1, maxLength: 255} (ReadOnly): The OCID of the Autonomous Database backup.
* **provisioningState**: 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Azure resource provisioning state.
* **retentionPeriodInDays**: int {minValue: 60, maxValue: 3650}: Retention period, in days, for long-term backups.
* **sizeInTbs**: int (ReadOnly): The backup size in terabytes (TB).
* **timeAvailableTil**: string (ReadOnly): Timestamp until when the backup will be available.
* **timeEnded**: string (ReadOnly): The date and time the backup completed.
* **timeStarted**: string (ReadOnly): The date and time the backup started.

## AutonomousDatabaseBaseProperties
* **Discriminator**: dataBaseType

### Base Properties
* **actualUsedDataStorageSizeInTbs**: int (ReadOnly): The current amount of storage in use for user and system data, in terabytes (TB).
* **adminPassword**: string {sensitive} (WriteOnly): Admin password.
* **allocatedStorageSizeInTbs**: int (ReadOnly): The amount of storage currently allocated for the database tables and billed for, rounded up.
* **apexDetails**: [ApexDetailsType](#apexdetailstype) (ReadOnly): Information about Oracle APEX Application Development.
* **autonomousDatabaseId**: string: Autonomous Database ID
* **autonomousMaintenanceScheduleType**: 'Early' | 'Regular' | string: The maintenance schedule type of the Autonomous Database Serverless.
* **availableUpgradeVersions**: string[] (ReadOnly): List of Oracle Database versions available for a database upgrade. If there are no version upgrades available, this list is empty.
* **backupRetentionPeriodInDays**: int: Retention period, in days, for long-term backups
* **characterSet**: string {minLength: 1, maxLength: 255}: The character set for the autonomous database.
* **computeCount**: int {minValue: 1, maxValue: 512}: The compute amount (CPUs) available to the database.
* **computeModel**: 'ECPU' | 'OCPU' | string: The compute model of the Autonomous Database.
* **connectionStrings**: [ConnectionStringType](#connectionstringtype) (ReadOnly): The connection string used to connect to the Autonomous Database.
* **connectionUrls**: [ConnectionUrlType](#connectionurltype) (ReadOnly): The URLs for accessing Oracle Application Express (APEX) and SQL Developer Web with a browser from a Compute instance within your VCN or that has a direct connection to your VCN.
* **cpuCoreCount**: int {minValue: 1, maxValue: 128}: The number of CPU cores to be made available to the database.
* **customerContacts**: [CustomerContact](#customercontact)[]: Customer Contacts.
* **databaseEdition**: 'EnterpriseEdition' | 'StandardEdition' | string: The Oracle Database Edition that applies to the Autonomous databases.
* **dataSafeStatus**: 'Deregistering' | 'Failed' | 'NotRegistered' | 'Registered' | 'Registering' | string (ReadOnly): Status of the Data Safe registration for this Autonomous Database.
* **dataStorageSizeInGbs**: int {minValue: 20, maxValue: 393216}: The size, in gigabytes, of the data volume that will be created and attached to the database.
* **dataStorageSizeInTbs**: int {minValue: 1, maxValue: 384}: The quantity of data in the database, in terabytes.
* **dbVersion**: string {minLength: 1, maxLength: 255}: A valid Oracle Database version for Autonomous Database.
* **dbWorkload**: 'AJD' | 'APEX' | 'DW' | 'OLTP' | string: The Autonomous Database workload type
* **displayName**: string {minLength: 1, maxLength: 255}: The user-friendly name for the Autonomous Database.
* **failedDataRecoveryInSeconds**: int (ReadOnly): Indicates the number of seconds of data loss for a Data Guard failover.
* **inMemoryAreaInGbs**: int (ReadOnly): The area assigned to In-Memory tables in Autonomous Database.
* **isAutoScalingEnabled**: bool: Indicates if auto scaling is enabled for the Autonomous Database CPU core count.
* **isAutoScalingForStorageEnabled**: bool: Indicates if auto scaling is enabled for the Autonomous Database storage.
* **isLocalDataGuardEnabled**: bool: Indicates whether the Autonomous Database has local or called in-region Data Guard enabled.
* **isMtlsConnectionRequired**: bool: Specifies if the Autonomous Database requires mTLS connections.
* **isPreview**: bool (ReadOnly): Indicates if the Autonomous Database version is a preview version.
* **isPreviewVersionWithServiceTermsAccepted**: bool (WriteOnly): Specifies if the Autonomous Database preview version is being provisioned.
* **isRemoteDataGuardEnabled**: bool (ReadOnly): Indicates whether the Autonomous Database has Cross Region Data Guard enabled.
* **licenseModel**: 'BringYourOwnLicense' | 'LicenseIncluded' | string: The Oracle license model that applies to the Oracle Autonomous Database. The default is LICENSE_INCLUDED.
* **lifecycleDetails**: string (ReadOnly): Additional information about the current lifecycle state.
* **lifecycleState**: 'Available' | 'AvailableNeedsAttention' | 'BackupInProgress' | 'Inaccessible' | 'MaintenanceInProgress' | 'Provisioning' | 'Recreating' | 'Restarting' | 'RestoreFailed' | 'RestoreInProgress' | 'RoleChangeInProgress' | 'ScaleInProgress' | 'Standby' | 'Starting' | 'Stopped' | 'Stopping' | 'Terminated' | 'Terminating' | 'Unavailable' | 'Updating' | 'Upgrading' | string (ReadOnly): Views lifecycleState
* **localAdgAutoFailoverMaxDataLossLimit**: int {minValue: 0, maxValue: 3600}: Parameter that allows users to select an acceptable maximum data loss limit in seconds, up to which Automatic Failover will be triggered when necessary for a Local Autonomous Data Guard
* **localDisasterRecoveryType**: 'Adg' | 'BackupBased' | string (ReadOnly): Indicates the local disaster recovery (DR) type of the Autonomous Database Serverless instance.Autonomous Data Guard (ADG) DR type provides business critical DR with a faster recovery time objective (RTO) during failover or switchover.Backup-based DR type provides lower cost DR with a slower RTO during failover or switchover.
* **localStandbyDb**: [AutonomousDatabaseStandbySummary](#autonomousdatabasestandbysummary) (ReadOnly): Local Autonomous Disaster Recovery standby database details.
* **longTermBackupSchedule**: [LongTermBackUpScheduleDetails](#longtermbackupscheduledetails): Details for the long-term backup schedule.
* **memoryPerOracleComputeUnitInGbs**: int (ReadOnly): The amount of memory (in GBs) enabled per ECPU or OCPU.
* **ncharacterSet**: string {minLength: 1, maxLength: 255}: The character set for the Autonomous Database.
* **nextLongTermBackupTimeStamp**: string (ReadOnly): The date and time when the next long-term backup would be created.
* **ocid**: string {minLength: 1, maxLength: 255} (ReadOnly): Database ocid
* **ociUrl**: string (ReadOnly): HTTPS link to OCI resources exposed to Azure Customer via Azure Interface.
* **openMode**: 'ReadOnly' | 'ReadWrite' | string: Indicates the Autonomous Database mode.
* **operationsInsightsStatus**: 'Disabling' | 'Enabled' | 'Enabling' | 'FailedDisabling' | 'FailedEnabling' | 'NotEnabled' | string (ReadOnly): Status of Operations Insights for this Autonomous Database.
* **peerDbId**: string {minLength: 1, maxLength: 255} (WriteOnly): The database OCID of the Disaster Recovery peer database, which is located in a different region from the current peer database.
* **peerDbIds**: string[] (ReadOnly): The list of [OCIDs](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of standby databases located in Autonomous Data Guard remote regions that are associated with the source database. Note that for Autonomous Database Serverless instances, standby databases located in the same region as the source primary database do not have OCIDs.
* **permissionLevel**: 'Restricted' | 'Unrestricted' | string: The Autonomous Database permission level.
* **privateEndpoint**: string (ReadOnly): The private endpoint for the resource.
* **privateEndpointIp**: string: The private endpoint Ip address for the resource.
* **privateEndpointLabel**: string: The resource's private endpoint label.
* **provisionableCpus**: int[] (ReadOnly): An array of CPU values that an Autonomous Database can be scaled to.
* **provisioningState**: 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Azure resource provisioning state.
* **role**: 'BackupCopy' | 'DisabledStandby' | 'Primary' | 'SnapshotStandby' | 'Standby' | string: The Data Guard role of the Autonomous Container Database or Autonomous Database, if Autonomous Data Guard is enabled.
* **scheduledOperations**: [ScheduledOperationsType](#scheduledoperationstype): The list of scheduled operations.
* **serviceConsoleUrl**: string {minLength: 10, maxLength: 255} (ReadOnly): The URL of the Service Console for the Autonomous Database.
* **sqlWebDeveloperUrl**: string {minLength: 10, maxLength: 2048} (ReadOnly): The SQL Web Developer URL for the Oracle Autonomous Database.
* **subnetId**: string: Client subnet
* **supportedRegionsToCloneTo**: string[] {maxLength: 50} (ReadOnly): The list of regions that support the creation of an Autonomous Database clone or an Autonomous Data Guard standby database.
* **timeCreated**: string (ReadOnly): The date and time that the database was created.
* **timeDataGuardRoleChanged**: string (ReadOnly): The date and time the Autonomous Data Guard role was switched for the Autonomous Database.
* **timeDeletionOfFreeAutonomousDatabase**: string (ReadOnly): The date and time the Always Free database will be automatically deleted because of inactivity.
* **timeLocalDataGuardEnabled**: string (ReadOnly): The date and time that Autonomous Data Guard was enabled for an Autonomous Database where the standby was provisioned in the same region as the primary database.
* **timeMaintenanceBegin**: string (ReadOnly): The date and time when maintenance will begin.
* **timeMaintenanceEnd**: string (ReadOnly): The date and time when maintenance will end.
* **timeOfLastFailover**: string (ReadOnly): The timestamp of the last failover operation.
* **timeOfLastRefresh**: string (ReadOnly): The date and time when last refresh happened.
* **timeOfLastRefreshPoint**: string (ReadOnly): The refresh point timestamp (UTC).
* **timeOfLastSwitchover**: string (ReadOnly): The timestamp of the last switchover operation for the Autonomous Database.
* **timeReclamationOfFreeAutonomousDatabase**: string (ReadOnly): The date and time the Always Free database will be stopped because of inactivity.
* **usedDataStorageSizeInGbs**: int (ReadOnly): The storage space consumed by Autonomous Database in GBs.
* **usedDataStorageSizeInTbs**: int (ReadOnly): The amount of storage that has been used, in terabytes.
* **vnetId**: string: VNET for network connectivity
* **whitelistedIps**: (string {minLength: 1, maxLength: 1024})[]: The client IP access control list (ACL). This is an array of CIDR notations and/or IP addresses. Values should be separate strings, separated by commas. Example: ['1.1.1.1','1.1.1.0/24','1.1.2.25']

### AutonomousDatabaseCloneProperties
#### Properties
* **cloneType**: 'Full' | 'Metadata' | string (Required, WriteOnly): The Autonomous Database clone type.
* **dataBaseType**: 'Clone' (Required): Database type to be created.
* **isReconnectCloneEnabled**: bool (ReadOnly): Indicates if the refreshable clone can be reconnected to its source database.
* **isRefreshableClone**: bool (ReadOnly): Indicates if the Autonomous Database is a refreshable clone.
* **refreshableModel**: 'Automatic' | 'Manual' | string (WriteOnly): The refresh mode of the clone.
* **refreshableStatus**: 'NotRefreshing' | 'Refreshing' | string (ReadOnly): The refresh status of the clone.
* **source**: 'BackupFromId' | 'BackupFromTimestamp' | 'CloneToRefreshable' | 'CrossRegionDataguard' | 'CrossRegionDisasterRecovery' | 'Database' | 'None' | string (WriteOnly): The source of the database.
* **sourceId**: string (Required): The Azure ID of the Autonomous Database that was cloned to create the current Autonomous Database.
* **timeUntilReconnectCloneEnabled**: string: The time and date as an RFC3339 formatted string, e.g., 2022-01-01T12:00:00.000Z, to set the limit for a refreshable clone to be reconnected to its source database.

### AutonomousDatabaseProperties
#### Properties
* **dataBaseType**: 'Regular' (Required): Database type to be created.


## AutonomousDatabaseCharacterSetProperties
### Properties
* **characterSet**: string {minLength: 1, maxLength: 255} (ReadOnly): The Oracle Autonomous Database supported character sets.

## AutonomousDatabaseNationalCharacterSetProperties
### Properties
* **characterSet**: string {minLength: 1, maxLength: 255} (ReadOnly): The Oracle Autonomous Database supported national character sets.

## AutonomousDatabaseStandbySummary
### Properties
* **lagTimeInSeconds**: int: The amount of time, in seconds, that the data of the standby database lags the data of the primary database. Can be used to determine the potential data loss in the event of a failover.
* **lifecycleDetails**: string: Additional information about the current lifecycle state.
* **lifecycleState**: 'Available' | 'AvailableNeedsAttention' | 'BackupInProgress' | 'Inaccessible' | 'MaintenanceInProgress' | 'Provisioning' | 'Recreating' | 'Restarting' | 'RestoreFailed' | 'RestoreInProgress' | 'RoleChangeInProgress' | 'ScaleInProgress' | 'Standby' | 'Starting' | 'Stopped' | 'Stopping' | 'Terminated' | 'Terminating' | 'Unavailable' | 'Updating' | 'Upgrading' | string: The current state of the Autonomous Database.
* **timeDataGuardRoleChanged**: string: The date and time the Autonomous Data Guard role was switched for the standby Autonomous Database.
* **timeDisasterRecoveryRoleChanged**: string: The date and time the Disaster Recovery role was switched for the standby Autonomous Database.

## AutonomousDbVersionProperties
### Properties
* **dbWorkload**: 'AJD' | 'APEX' | 'DW' | 'OLTP' | string (ReadOnly): The Autonomous Database workload type
* **isDefaultForFree**: bool (ReadOnly): True if this version of the Oracle Database software's default is free.
* **isDefaultForPaid**: bool (ReadOnly): True if this version of the Oracle Database software's default is paid.
* **isFreeTierEnabled**: bool (ReadOnly): True if this version of the Oracle Database software can be used for Always-Free Autonomous Databases.
* **isPaidEnabled**: bool (ReadOnly): True if this version of the Oracle Database software has payments enabled.
* **version**: string {minLength: 1, maxLength: 255} (ReadOnly): Supported Autonomous Db versions.

## CloudAccountDetails
### Properties
* **cloudAccountHomeRegion**: string (ReadOnly): Cloud Account Home region
* **cloudAccountName**: string (ReadOnly): Cloud Account name

## CloudExadataInfrastructureProperties
### Properties
* **activatedStorageCount**: int (ReadOnly): The requested number of additional storage servers activated for the Exadata infrastructure.
* **additionalStorageCount**: int (ReadOnly): The requested number of additional storage servers for the Exadata infrastructure.
* **availableStorageSizeInGbs**: int (ReadOnly): The available storage can be allocated to the cloud Exadata infrastructure resource, in gigabytes (GB).
* **computeCount**: int: The number of compute servers for the cloud Exadata infrastructure.
* **cpuCount**: int (ReadOnly): The total number of CPU cores allocated.
* **customerContacts**: [CustomerContact](#customercontact)[]: The list of customer email addresses that receive information from Oracle about the specified OCI Database service resource. Oracle uses these email addresses to send notifications about planned and unplanned software maintenance updates, information about system hardware, and other information needed by administrators. Up to 10 email addresses can be added to the customer contacts for a cloud Exadata infrastructure instance.
* **dataStorageSizeInTbs**: int (ReadOnly): The quantity of data in the database, in terabytes.
* **dbNodeStorageSizeInGbs**: int (ReadOnly): The local node storage to be allocated in GBs.
* **dbServerVersion**: string (ReadOnly): The software version of the database servers (dom0) in the Exadata infrastructure.
* **displayName**: string {minLength: 1, maxLength: 255} (Required): The name for the Exadata infrastructure.
* **estimatedPatchingTime**: [EstimatedPatchingTime](#estimatedpatchingtime) (ReadOnly): The estimated total time required in minutes for all patching operations (database server, storage server, and network switch patching).
* **lastMaintenanceRunId**: string {minLength: 1, maxLength: 255} (ReadOnly): The OCID of the last maintenance run.
* **lifecycleDetails**: string (ReadOnly): Additional information about the current lifecycle state.
* **lifecycleState**: 'Available' | 'Failed' | 'MaintenanceInProgress' | 'Provisioning' | 'Terminated' | 'Terminating' | 'Updating' | string (ReadOnly): CloudExadataInfrastructure lifecycle state
* **maintenanceWindow**: [MaintenanceWindow](#maintenancewindow): maintenanceWindow property
* **maxCpuCount**: int (ReadOnly): The total number of CPU cores available.
* **maxDataStorageInTbs**: int (ReadOnly): The total available DATA disk group size.
* **maxDbNodeStorageSizeInGbs**: int (ReadOnly): The total local node storage available in GBs.
* **maxMemoryInGbs**: int (ReadOnly): The total memory available in GBs.
* **memorySizeInGbs**: int (ReadOnly): The memory allocated in GBs.
* **monthlyDbServerVersion**: string (ReadOnly): Monthly Db Server version
* **monthlyStorageServerVersion**: string (ReadOnly): Monthly Storage Server version
* **nextMaintenanceRunId**: string {minLength: 1, maxLength: 255} (ReadOnly): The OCID of the next maintenance run.
* **ocid**: string {minLength: 1, maxLength: 255} (ReadOnly): Exadata infra ocid
* **ociUrl**: string (ReadOnly): HTTPS link to OCI resources exposed to Azure Customer via Azure Interface.
* **provisioningState**: 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): CloudExadataInfrastructure provisioning state
* **shape**: string (Required): The model name of the cloud Exadata infrastructure resource.
* **storageCount**: int: The number of storage servers for the cloud Exadata infrastructure.
* **storageServerVersion**: string (ReadOnly): The software version of the storage servers (cells) in the Exadata infrastructure.
* **timeCreated**: string (ReadOnly): The date and time the cloud Exadata infrastructure resource was created.
* **totalStorageSizeInGbs**: int (ReadOnly): The total storage allocated to the cloud Exadata infrastructure resource, in gigabytes (GB).

## CloudVmClusterProperties
### Properties
* **backupSubnetCidr**: string {minLength: 1, maxLength: 32}: Client OCI backup subnet CIDR, default is 192.168.252.0/22
* **cloudExadataInfrastructureId**: string (Required): Cloud Exadata Infrastructure ID
* **clusterName**: string {minLength: 1, maxLength: 11}: The cluster name for cloud VM cluster. The cluster name must begin with an alphabetic character, and may contain hyphens (-). Underscores (_) are not permitted. The cluster name can be no longer than 11 characters and is not case sensitive.
* **compartmentId**: string {minLength: 1, maxLength: 255} (ReadOnly): Cluster compartmentId
* **computeNodes**: (string {minLength: 1, maxLength: 255})[] (WriteOnly): The list of compute servers to be added to the cloud VM cluster.
* **cpuCoreCount**: int (Required): The number of CPU cores enabled on the cloud VM cluster.
* **dataCollectionOptions**: [DataCollectionOptions](#datacollectionoptions): Indicates user preferences for the various diagnostic collection options for the VM cluster/Cloud VM cluster/VMBM DBCS.
* **dataStoragePercentage**: int: The percentage assigned to DATA storage (user data and database files). The remaining percentage is assigned to RECO storage (database redo logs, archive logs, and recovery manager backups). Accepted values are 35, 40, 60 and 80. The default is 80 percent assigned to DATA storage. See [Storage Configuration](/Content/Database/Concepts/exaoverview.htm#Exadata) in the Exadata documentation for details on the impact of the configuration settings on storage.
* **dataStorageSizeInTbs**: int: The data disk group size to be allocated in TBs.
* **dbNodeStorageSizeInGbs**: int: The local node storage to be allocated in GBs.
* **dbServers**: (string {minLength: 1, maxLength: 255})[]: The list of DB servers.
* **diskRedundancy**: 'High' | 'Normal' | string (ReadOnly): The type of redundancy configured for the cloud Vm cluster. NORMAL is 2-way redundancy. HIGH is 3-way redundancy.
* **displayName**: string {minLength: 1, maxLength: 255} (Required): Display Name
* **domain**: string: The domain name for the cloud VM cluster.
* **giVersion**: string (Required): Oracle Grid Infrastructure (GI) software version
* **hostname**: string {minLength: 1, maxLength: 23} (Required): The hostname for the cloud VM cluster.
* **iormConfigCache**: [ExadataIormConfig](#exadataiormconfig) (ReadOnly): iormConfigCache details for cloud VM cluster.
* **isLocalBackupEnabled**: bool: If true, database backup on local Exadata storage is configured for the cloud VM cluster. If false, database backup on local Exadata storage is not available in the cloud VM cluster.
* **isSparseDiskgroupEnabled**: bool: If true, sparse disk group is configured for the cloud VM cluster. If false, sparse disk group is not created.
* **lastUpdateHistoryEntryId**: string {minLength: 1, maxLength: 255} (ReadOnly): The OCID of the last maintenance update history entry.
* **licenseModel**: 'BringYourOwnLicense' | 'LicenseIncluded' | string: The Oracle license model that applies to the cloud VM cluster. The default is LICENSE_INCLUDED.
* **lifecycleDetails**: string (ReadOnly): Additional information about the current lifecycle state.
* **lifecycleState**: 'Available' | 'Failed' | 'MaintenanceInProgress' | 'Provisioning' | 'Terminated' | 'Terminating' | 'Updating' | string (ReadOnly): CloudVmCluster lifecycle state
* **listenerPort**: int (ReadOnly): The port number configured for the listener on the cloud VM cluster.
* **memorySizeInGbs**: int: The memory to be allocated in GBs.
* **nodeCount**: int (ReadOnly): The number of nodes in the cloud VM cluster.
* **nsgCidrs**: [NsgCidr](#nsgcidr)[]: CIDR blocks for additional NSG ingress rules. The VNET CIDRs used to provision the VM Cluster will be added by default.
* **nsgUrl**: string (ReadOnly): HTTPS link to OCI Network Security Group exposed to Azure Customer via the Azure Interface.
* **ocid**: string {minLength: 1, maxLength: 255} (ReadOnly): Cloud VM Cluster ocid
* **ociUrl**: string (ReadOnly): HTTPS link to OCI resources exposed to Azure Customer via Azure Interface.
* **ocpuCount**: int: The number of OCPU cores to enable on the cloud VM cluster. Only 1 decimal place is allowed for the fractional part.
* **provisioningState**: 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): CloudVmCluster provisioning state
* **scanDnsName**: string {minLength: 1, maxLength: 72} (ReadOnly): The FQDN of the DNS record for the SCAN IP addresses that are associated with the cloud VM cluster.
* **scanDnsRecordId**: string {minLength: 1, maxLength: 255} (ReadOnly): The OCID of the DNS record for the SCAN IP addresses that are associated with the cloud VM cluster.
* **scanIpIds**: string[] (ReadOnly): The Single Client Access Name (SCAN) IP addresses associated with the cloud VM cluster. SCAN IP addresses are typically used for load balancing and are not assigned to any interface. Oracle Clusterware directs the requests to the appropriate nodes in the cluster. **Note:** For a single-node DB system, this list is empty.
* **scanListenerPortTcp**: int: The TCP Single Client Access Name (SCAN) port. The default port is 1521.
* **scanListenerPortTcpSsl**: int: The TCPS Single Client Access Name (SCAN) port. The default port is 2484.
* **shape**: string {minLength: 1, maxLength: 255} (ReadOnly): The model name of the Exadata hardware running the cloud VM cluster.
* **sshPublicKeys**: string[] (Required): The public key portion of one or more key pairs used for SSH access to the cloud VM cluster.
* **storageSizeInGbs**: int: The data disk group size to be allocated in GBs per VM.
* **subnetId**: string (Required): Client subnet
* **subnetOcid**: string {minLength: 1, maxLength: 255} (ReadOnly): Cluster subnet ocid
* **systemVersion**: string {minLength: 1, maxLength: 255}: Operating system version of the image.
* **timeCreated**: string (ReadOnly): The date and time that the cloud VM cluster was created.
* **timeZone**: string {minLength: 1, maxLength: 255}: The time zone of the cloud VM cluster. For details, see [Exadata Infrastructure Time Zones](/Content/Database/References/timezones.htm).
* **vipIds**: string[] (ReadOnly): The virtual IP (VIP) addresses associated with the cloud VM cluster. The Cluster Ready Services (CRS) creates and maintains one VIP address for each node in the Exadata Cloud Service instance to enable failover. If one node fails, the VIP is reassigned to another active node in the cluster. **Note:** For a single-node DB system, this list is empty.
* **vnetId**: string (Required): VNET for network connectivity
* **zoneId**: string {minLength: 1, maxLength: 255}: The OCID of the zone the cloud VM cluster is associated with.

## ConnectionStringType
### Properties
* **allConnectionStrings**: [AllConnectionStringType](#allconnectionstringtype): Returns all connection strings that can be used to connect to the Autonomous Database.
* **dedicated**: string {minLength: 10, maxLength: 255}: The database service provides the least level of resources to each SQL statement, but supports the most number of concurrent SQL statements.
* **high**: string {minLength: 10, maxLength: 255}: The High database service provides the highest level of resources to each SQL statement resulting in the highest performance, but supports the fewest number of concurrent SQL statements.
* **low**: string {minLength: 10, maxLength: 255}: The Low database service provides the least level of resources to each SQL statement, but supports the most number of concurrent SQL statements.
* **medium**: string {minLength: 10, maxLength: 255}: The Medium database service provides a lower level of resources to each SQL statement potentially resulting a lower level of performance, but supports more concurrent SQL statements.
* **profiles**: [ProfileType](#profiletype)[]: A list of connection string profiles to allow clients to group, filter and select connection string values based on structured metadata.

## ConnectionUrlType
### Properties
* **apexUrl**: string {minLength: 10, maxLength: 512}: Oracle Application Express (APEX) URL.
* **databaseTransformsUrl**: string {minLength: 10, maxLength: 512}: The URL of the Database Transforms for the Autonomous Database.
* **graphStudioUrl**: string {minLength: 10, maxLength: 512}: The URL of the Graph Studio for the Autonomous Database.
* **machineLearningNotebookUrl**: string {minLength: 10, maxLength: 512}: The URL of the Oracle Machine Learning (OML) Notebook for the Autonomous Database.
* **mongoDbUrl**: string {minLength: 10, maxLength: 512}: The URL of the MongoDB API for the Autonomous Database.
* **ordsUrl**: string {minLength: 10, maxLength: 512}: The Oracle REST Data Services (ORDS) URL of the Web Access for the Autonomous Database.
* **sqlDevWebUrl**: string {minLength: 10, maxLength: 512}: Oracle SQL Developer Web URL.

## CustomerContact
### Properties
* **email**: string {minLength: 1, maxLength: 320} (Required): The email address used by Oracle to send notifications regarding databases and infrastructure.

## DataCollectionOptions
### Properties
* **isDiagnosticsEventsEnabled**: bool: Indicates whether diagnostic collection is enabled for the VM cluster/Cloud VM cluster/VMBM DBCS.
* **isHealthMonitoringEnabled**: bool: Indicates whether health monitoring is enabled for the VM cluster / Cloud VM cluster / VMBM DBCS.
* **isIncidentLogsEnabled**: bool: Indicates whether incident logs and trace collection are enabled for the VM cluster / Cloud VM cluster / VMBM DBCS.

## DayOfWeek
### Properties
* **name**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string (Required): Name of the day of the week.

## DbIormConfig
### Properties
* **dbName**: string: The database name. For the default DbPlan, the dbName is default.
* **flashCacheLimit**: string: The flash cache limit for this database. This value is internally configured based on the share value assigned to the database.
* **share**: int {minValue: 1, maxValue: 32}: The relative priority of this database.

## DbNodeProperties
### Properties
* **additionalDetails**: string (ReadOnly): Additional information about the planned maintenance.
* **backupIpId**: string {minLength: 1, maxLength: 255} (ReadOnly): The OCID of the backup IP address associated with the database node.
* **backupVnic2Id**: string {minLength: 1, maxLength: 255} (ReadOnly): The OCID of the second backup VNIC.
* **backupVnicId**: string {minLength: 1, maxLength: 255} (ReadOnly): The OCID of the backup VNIC.
* **cpuCoreCount**: int (ReadOnly): The number of CPU cores enabled on the Db node.
* **dbNodeStorageSizeInGbs**: int (ReadOnly): The allocated local node storage in GBs on the Db node.
* **dbServerId**: string {minLength: 1, maxLength: 255} (ReadOnly): The OCID of the Exacc Db server associated with the database node.
* **dbSystemId**: string {minLength: 1, maxLength: 255} (ReadOnly): The OCID of the DB system.
* **faultDomain**: string {minLength: 1, maxLength: 255} (ReadOnly): The name of the Fault Domain the instance is contained in.
* **hostIpId**: string {minLength: 1, maxLength: 255} (ReadOnly): The OCID of the host IP address associated with the database node.
* **hostname**: string (ReadOnly): The host name for the database node.
* **lifecycleDetails**: string (ReadOnly): Lifecycle details of Db Node.
* **lifecycleState**: 'Available' | 'Failed' | 'Provisioning' | 'Starting' | 'Stopped' | 'Stopping' | 'Terminated' | 'Terminating' | 'Updating' | string (ReadOnly): The current state of the database node.
* **maintenanceType**: 'VmdbRebootMigration' | string (ReadOnly): The type of database node maintenance.
* **memorySizeInGbs**: int (ReadOnly): The allocated memory in GBs on the Db node.
* **ocid**: string {minLength: 1, maxLength: 255} (ReadOnly): DbNode OCID
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Azure resource provisioning state.
* **softwareStorageSizeInGb**: int (ReadOnly): The size (in GB) of the block storage volume allocation for the DB system. This attribute applies only for virtual machine DB systems.
* **timeCreated**: string (ReadOnly): The date and time that the database node was created.
* **timeMaintenanceWindowEnd**: string (ReadOnly): End date and time of maintenance window.
* **timeMaintenanceWindowStart**: string (ReadOnly): Start date and time of maintenance window.
* **vnic2Id**: string {minLength: 1, maxLength: 255} (ReadOnly): The OCID of the second VNIC.
* **vnicId**: string {minLength: 1, maxLength: 255} (ReadOnly): The OCID of the VNIC.

## DbServerPatchingDetails
### Properties
* **estimatedPatchDuration**: int {minValue: 1, maxValue: 3000} (ReadOnly): Estimated Patch Duration
* **patchingStatus**: 'Complete' | 'Failed' | 'MaintenanceInProgress' | 'Scheduled' | string (ReadOnly): Patching Status
* **timePatchingEnded**: string (ReadOnly): Time Patching Ended
* **timePatchingStarted**: string (ReadOnly): Time Patching Started

## DbServerProperties
### Properties
* **autonomousVirtualMachineIds**: (string {minLength: 1, maxLength: 255})[] (ReadOnly): The list of OCIDs of the Autonomous Virtual Machines associated with the Db server.
* **autonomousVmClusterIds**: (string {minLength: 1, maxLength: 255})[] (ReadOnly): The list of OCIDs of the Autonomous VM Clusters associated with the Db server.
* **compartmentId**: string {minLength: 1, maxLength: 255} (ReadOnly): The OCID of the compartment.
* **cpuCoreCount**: int (ReadOnly): The number of CPU cores enabled on the Db server.
* **dbNodeIds**: (string {minLength: 1, maxLength: 255})[] (ReadOnly): The OCID of the Db nodes associated with the Db server.
* **dbNodeStorageSizeInGbs**: int (ReadOnly): The allocated local node storage in GBs on the Db server.
* **dbServerPatchingDetails**: [DbServerPatchingDetails](#dbserverpatchingdetails) (ReadOnly): dbServerPatching details of the Db server.
* **displayName**: string {minLength: 1, maxLength: 255} (ReadOnly): The name for the Db Server.
* **exadataInfrastructureId**: string {minLength: 1, maxLength: 255} (ReadOnly): The OCID of the Exadata infrastructure.
* **lifecycleDetails**: string (ReadOnly): Lifecycle details of dbServer.
* **lifecycleState**: 'Available' | 'Creating' | 'Deleted' | 'Deleting' | 'MaintenanceInProgress' | 'Unavailable' | string (ReadOnly): DbServer provisioning state.
* **maxCpuCount**: int (ReadOnly): The total number of CPU cores available.
* **maxDbNodeStorageInGbs**: int (ReadOnly): The total max dbNode storage in GBs.
* **maxMemoryInGbs**: int (ReadOnly): The total memory available in GBs.
* **memorySizeInGbs**: int (ReadOnly): The total memory size in GBs.
* **ocid**: string {minLength: 1, maxLength: 255} (ReadOnly): Db server name.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Azure resource provisioning state.
* **shape**: string {minLength: 1, maxLength: 255} (ReadOnly): The shape of the Db server. The shape determines the amount of CPU, storage, and memory resources available.
* **timeCreated**: string (ReadOnly): The date and time that the Db Server was created.
* **vmClusterIds**: (string {minLength: 1, maxLength: 255})[] (ReadOnly): The OCID of the VM Clusters associated with the Db server.

## DbSystemShapeProperties
### Properties
* **availableCoreCount**: int (ReadOnly): The maximum number of CPU cores that can be enabled on the DB system for this shape.
* **availableCoreCountPerNode**: int (ReadOnly): The maximum number of CPU cores per database node that can be enabled for this shape. Only applicable to the flex Exadata shape and ExaCC Elastic shapes.
* **availableDataStorageInTbs**: int (ReadOnly): The maximum DATA storage that can be enabled for this shape.
* **availableDataStoragePerServerInTbs**: int (ReadOnly): The maximum data storage available per storage server for this shape. Only applicable to ExaCC Elastic shapes.
* **availableDbNodePerNodeInGbs**: int (ReadOnly): The maximum Db Node storage available per database node for this shape. Only applicable to ExaCC Elastic shapes.
* **availableDbNodeStorageInGbs**: int (ReadOnly): The maximum Db Node storage that can be enabled for this shape.
* **availableMemoryInGbs**: int (ReadOnly): The maximum memory that can be enabled for this shape.
* **availableMemoryPerNodeInGbs**: int (ReadOnly): The maximum memory available per database node for this shape. Only applicable to ExaCC Elastic shapes.
* **coreCountIncrement**: int (ReadOnly): The discrete number by which the CPU core count for this shape can be increased or decreased.
* **maximumNodeCount**: int (ReadOnly): The maximum number of database nodes available for this shape.
* **maxStorageCount**: int (ReadOnly): The maximum number of Exadata storage servers available for the Exadata infrastructure.
* **minCoreCountPerNode**: int (ReadOnly): The minimum number of CPU cores that can be enabled per node for this shape.
* **minDataStorageInTbs**: int (ReadOnly): The minimum data storage that need be allocated for this shape.
* **minDbNodeStoragePerNodeInGbs**: int (ReadOnly): The minimum Db Node storage that need be allocated per node for this shape.
* **minimumCoreCount**: int (ReadOnly): The minimum number of CPU cores that can be enabled on the DB system for this shape.
* **minimumNodeCount**: int (ReadOnly): The minimum number of database nodes available for this shape.
* **minMemoryPerNodeInGbs**: int (ReadOnly): The minimum memory that need be allocated per node for this shape.
* **minStorageCount**: int (ReadOnly): The minimum number of Exadata storage servers available for the Exadata infrastructure.
* **runtimeMinimumCoreCount**: int (ReadOnly): The runtime minimum number of CPU cores that can be enabled on the DB system for this shape.
* **shapeFamily**: string {minLength: 1, maxLength: 255} (ReadOnly): The family of the shape used for the DB system.

## DnsPrivateViewProperties
### Properties
* **displayName**: string (ReadOnly): The display name of the view resource
* **isProtected**: bool (ReadOnly): A Boolean flag indicating whether or not parts of the resource are unable to be explicitly managed.
* **lifecycleState**: 'Active' | 'Deleted' | 'Deleting' | 'Updating' | string (ReadOnly): Views lifecycleState
* **ocid**: string {minLength: 1, maxLength: 255} (ReadOnly): The OCID of the view
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Azure resource provisioning state.
* **self**: string (ReadOnly): The canonical absolute URL of the resource.
* **timeCreated**: string (ReadOnly): views timeCreated
* **timeUpdated**: string (ReadOnly): views timeCreated

## DnsPrivateZoneProperties
### Properties
* **isProtected**: bool (ReadOnly): A Boolean flag indicating whether or not parts of the resource are unable to be explicitly managed.
* **lifecycleState**: 'Active' | 'Creating' | 'Deleted' | 'Deleting' | 'Updating' | string (ReadOnly): Zones lifecycleState
* **ocid**: string {minLength: 1, maxLength: 255} (ReadOnly): The OCID of the Zone
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Azure resource provisioning state.
* **self**: string (ReadOnly): The canonical absolute URL of the resource.
* **serial**: int (ReadOnly): The current serial of the zone. As seen in the zone's SOA record.
* **timeCreated**: string (ReadOnly): Zones timeCreated
* **version**: string (ReadOnly): Version is the never-repeating, totally-orderable, version of the zone, from which the serial field of the zone's SOA record is derived.
* **viewId**: string {minLength: 1, maxLength: 255} (ReadOnly): The OCID of the private view containing the zone. This value will be null for zones in the global DNS, which are publicly resolvable and not part of a private view.
* **zoneType**: 'Primary' | 'Secondary' | string (ReadOnly): The type of the zone. Must be either PRIMARY or SECONDARY. SECONDARY is only supported for GLOBAL zones.

## EstimatedPatchingTime
### Properties
* **estimatedDbServerPatchingTime**: int {minValue: 1, maxValue: 3000} (ReadOnly): The estimated time required in minutes for database server patching.
* **estimatedNetworkSwitchesPatchingTime**: int {minValue: 1, maxValue: 3000} (ReadOnly): The estimated time required in minutes for network switch patching.
* **estimatedStorageServerPatchingTime**: int {minValue: 1, maxValue: 3000} (ReadOnly): The estimated time required in minutes for storage server patching.
* **totalEstimatedPatchingTime**: int {minValue: 1, maxValue: 3000} (ReadOnly): The estimated total time required in minutes for all patching operations.

## ExadataIormConfig
### Properties
* **dbPlans**: [DbIormConfig](#dbiormconfig)[]: An array of IORM settings for all the database in the Exadata DB system.
* **lifecycleDetails**: string: Additional information about the current lifecycleState.
* **lifecycleState**: 'BootStrapping' | 'Disabled' | 'Enabled' | 'Failed' | 'Updating' | string: The current state of IORM configuration for the Exadata DB system.
* **objective**: 'Auto' | 'Balanced' | 'Basic' | 'HighThroughput' | 'LowLatency' | string: The current value for the IORM objective. The default is AUTO.

## GiVersionProperties
### Properties
* **version**: string {minLength: 1, maxLength: 255} (ReadOnly): A valid Oracle Grid Infrastructure (GI) software version.

## LongTermBackUpScheduleDetails
### Properties
* **isDisabled**: bool: Indicates if the long-term backup schedule should be deleted. The default value is `FALSE`.
* **repeatCadence**: 'Monthly' | 'OneTime' | 'Weekly' | 'Yearly' | string: The frequency of the long-term backup schedule
* **retentionPeriodInDays**: int {minValue: 90, maxValue: 2558}: Retention period, in days, for backups.
* **timeOfBackup**: string: The timestamp for the long-term backup schedule. For a MONTHLY cadence, months having fewer days than the provided date will have the backup taken on the last day of that month.

## MaintenanceWindow
### Properties
* **customActionTimeoutInMins**: int {minValue: 0, maxValue: 120}: Determines the amount of time the system will wait before the start of each database server patching operation. Custom action timeout is in minutes and valid value is between 15 to 120 (inclusive).
* **daysOfWeek**: [DayOfWeek](#dayofweek)[]: Days during the week when maintenance should be performed.
* **hoursOfDay**: int[]: The window of hours during the day when maintenance should be performed. The window is a 4 hour slot. Valid values are - 0 - represents time slot 0:00 - 3:59 UTC - 4 - represents time slot 4:00 - 7:59 UTC - 8 - represents time slot 8:00 - 11:59 UTC - 12 - represents time slot 12:00 - 15:59 UTC - 16 - represents time slot 16:00 - 19:59 UTC - 20 - represents time slot 20:00 - 23:59 UTC
* **isCustomActionTimeoutEnabled**: bool: If true, enables the configuration of a custom action timeout (waiting period) between database server patching operations.
* **isMonthlyPatchingEnabled**: bool: is Monthly Patching Enabled
* **leadTimeInWeeks**: int: Lead time window allows user to set a lead time to prepare for a down time. The lead time is in weeks and valid value is between 1 to 4.
* **months**: [Month](#month)[]: Months during the year when maintenance should be performed.
* **patchingMode**: 'NonRolling' | 'Rolling' | string: Cloud Exadata infrastructure node patching method.
* **preference**: 'CustomPreference' | 'NoPreference' | string: The maintenance window scheduling preference.
* **weeksOfMonth**: int[]: Weeks during the month when maintenance should be performed. Weeks start on the 1st, 8th, 15th, and 22nd days of the month, and have a duration of 7 days. Weeks start and end based on calendar dates, not days of the week. For example, to allow maintenance during the 2nd week of the month (from the 8th day to the 14th day of the month), use the value 2. Maintenance cannot be scheduled for the fifth week of months that contain more than 28 days. Note that this parameter works in conjunction with the  daysOfWeek and hoursOfDay parameters to allow you to specify specific days of the week and hours that maintenance will be performed.

## Month
### Properties
* **name**: 'April' | 'August' | 'December' | 'February' | 'January' | 'July' | 'June' | 'March' | 'May' | 'November' | 'October' | 'September' | string (Required): Name of the month of the year.

## NsgCidr
### Properties
* **destinationPortRange**: [PortRange](#portrange): Destination port range to specify particular destination ports for TCP rules.
* **source**: string {minLength: 1, maxLength: 128} (Required): Conceptually, this is the range of IP addresses that a packet coming into the instance can come from.

## OracleSubscriptionProperties
### Properties
* **cloudAccountId**: string {minLength: 1, maxLength: 255} (ReadOnly): Cloud Account Id
* **cloudAccountState**: 'Available' | 'Pending' | 'Provisioning' | string (ReadOnly): Cloud Account provisioning state.
* **intent**: 'Reset' | 'Retain' | string (WriteOnly): Intent for the update operation
* **productCode**: string (WriteOnly): Product code for the term unit
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): OracleSubscriptionProvisioningState provisioning state
* **saasSubscriptionId**: string (ReadOnly): SAAS subscription ID generated by Marketplace
* **termUnit**: string: Term Unit. P1Y, P3Y, etc, see Durations https://en.wikipedia.org/wiki/ISO_8601

## Plan
### Properties
* **name**: string (Required): A user defined name of the 3rd Party Artifact that is being procured.
* **product**: string (Required): The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding.
* **promotionCode**: string: A publisher provided promotion code as provisioned in Data Market for the said product/artifact.
* **publisher**: string (Required): The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
* **version**: string: The version of the desired product/artifact.

## PortRange
### Properties
* **max**: int {minValue: 1, maxValue: 65535} (Required): The maximum port number, which must not be less than the minimum port number. To specify a single port number, set both the min and max to the same value.
* **min**: int {minValue: 1, maxValue: 65535} (Required): The minimum port number, which must not be greater than the maximum port number.

## PrivateIpAddressesFilter
### Properties
* **subnetId**: string {minLength: 1, maxLength: 255} (Required): Subnet OCID
* **vnicId**: string {minLength: 1, maxLength: 255} (Required): VCN OCID

## PrivateIpAddressProperties
### Properties
* **displayName**: string (Required): PrivateIpAddresses displayName
* **hostnameLabel**: string (Required): PrivateIpAddresses hostnameLabel
* **ipAddress**: string (Required): PrivateIpAddresses ipAddress
* **ocid**: string {minLength: 1, maxLength: 255} (Required): PrivateIpAddresses Id
* **subnetId**: string {minLength: 1, maxLength: 255} (Required): PrivateIpAddresses subnetId

## ProfileType
### Properties
* **consumerGroup**: 'High' | 'Low' | 'Medium' | 'Tp' | 'Tpurgent' | string: Consumer group used by the connection.
* **displayName**: string {minLength: 1, maxLength: 255} (Required): A user-friendly name for the connection.
* **hostFormat**: 'Fqdn' | 'Ip' | string (Required): Host format used in connection string.
* **isRegional**: bool: True for a regional connection string, applicable to cross-region DG only.
* **protocol**: 'TCP' | 'TCPS' | string (Required): Protocol used by the connection.
* **sessionMode**: 'Direct' | 'Redirect' | string (Required): Specifies whether the listener performs a direct hand-off of the session, or redirects the session.
* **syntaxFormat**: 'Ezconnect' | 'Ezconnectplus' | 'Long' | string (Required): Specifies whether the connection string is using the long (LONG), Easy Connect (EZCONNECT), or Easy Connect Plus (EZCONNECTPLUS) format.
* **tlsAuthentication**: 'Mutual' | 'Server' | string: Specifies whether the TLS handshake is using one-way (SERVER) or mutual (MUTUAL) authentication.
* **value**: string (Required): Connection string value.

## SaasSubscriptionDetails
### Properties
* **id**: string (ReadOnly): Purchased SaaS subscription ID
* **isAutoRenew**: bool (ReadOnly): AutoRenew flag
* **isFreeTrial**: bool (ReadOnly): FreeTrial flag
* **offerId**: string (ReadOnly): Purchased offer ID
* **planId**: string (ReadOnly): Purchased offer's plan ID
* **publisherId**: string (ReadOnly): Publisher ID
* **purchaserEmailId**: string (ReadOnly): Purchaser Email ID
* **purchaserTenantId**: string (ReadOnly): Purchaser Tenant ID
* **saasSubscriptionStatus**: string (ReadOnly): Indicates the status of the Subscription.
* **subscriptionName**: string (ReadOnly): SaaS subscription name
* **termUnit**: string (ReadOnly): Purchase Term Unit
* **timeCreated**: string (ReadOnly): Creation Date and Time

## ScheduledOperationsType
### Properties
* **dayOfWeek**: [DayOfWeek](#dayofweek) (Required): Day of week
* **scheduledStartTime**: string {minLength: 1, maxLength: 50}: auto start time. value must be of ISO-8601 format HH:mm
* **scheduledStopTime**: string {minLength: 1, maxLength: 50}: auto stop time. value must be of ISO-8601 format HH:mm

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## SystemVersionProperties
### Properties
* **systemVersion**: string (ReadOnly): A valid Oracle System Version

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

## VirtualNetworkAddressProperties
### Properties
* **domain**: string (ReadOnly): Virtual network address fully qualified domain name.
* **ipAddress**: string: Virtual network Address address.
* **lifecycleDetails**: string (ReadOnly): Additional information about the current lifecycle state of the application virtual IP (VIP) address.
* **lifecycleState**: 'Available' | 'Failed' | 'Provisioning' | 'Terminated' | 'Terminating' | string (ReadOnly): virtual network address lifecycle state.
* **ocid**: string {minLength: 1, maxLength: 255} (ReadOnly): Application VIP OCID.
* **provisioningState**: 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Azure resource provisioning state.
* **timeAssigned**: string (ReadOnly): The date and time when the create operation for the application virtual IP (VIP) address completed.
* **vmOcid**: string {minLength: 1, maxLength: 255}: Virtual Machine OCID.

