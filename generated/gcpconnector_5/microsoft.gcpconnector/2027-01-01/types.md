# Microsoft.GcpConnector @ 2027-01-01

## Resource Microsoft.GcpConnector/sqlAdminInstances@2027-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2027-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^(?=.{0,259}[^\s.]$)(?!.*[<>%&\?/#])"} (Required, DeployTimeConstant): The resource name
* **properties**: [SQLAdminInstanceProperties](#sqladmininstanceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.GcpConnector/sqlAdminInstances' (ReadOnly, DeployTimeConstant): The resource type

## AclEntry
### Properties
* **expirationTime**: string: The time when this access control entry expires in RFC 3339 format.
* **kind**: string: This is always sql#aclEntry.
* **name**: string: A label to identify this entry.
* **value**: string: The allowlisted value for the access control list.

## AvailableDatabaseVersion
### Properties
* **supportedEditions**: string[]: List of database editions supported.
* **version**: string: The database engine version.

## BackupConfiguration
### Properties
* **backupRetentionSettings**: [BackupRetentionSettings](#backupretentionsettings): Backup retention settings.
* **enabled**: bool: Whether backup configuration is enabled.
* **kind**: string: This is always sql#backupConfiguration.
* **location**: string: Location of the backup.
* **pointInTimeRecoveryEnabled**: bool: True if Point-in-time recovery is enabled.
* **replicationLogArchivingEnabled**: bool: Reserved for future use.
* **startTime**: string: Start time for the daily backup configuration in UTC timezone.
* **transactionLogRetentionDays**: int: The number of days of transaction logs we retain for point in time restore.

## BackupRetentionSettings
### Properties
* **retainedBackups**: int: Number of backup runs to retain.
* **retentionUnit**: 'COUNT' | 'RETENTION_UNIT_UNSPECIFIED' | string: The unit that 'retainedBackups' represents.

## DatabaseFlags
### Properties
* **name**: string: The name of the flag.
* **value**: string: The value of the flag.

## DiskEncryptionConfiguration
### Properties
* **kind**: string: This is always sql#diskEncryptionConfiguration.
* **kmsKeyName**: string: KMS key resource name.

## DiskEncryptionStatus
### Properties
* **kind**: string: This is always sql#diskEncryptionStatus.
* **kmsKeyVersionName**: string: KMS key version used to encrypt the Cloud SQL instance.

## DnsNameMapping
### Properties
* **name**: string: The DNS record name.
* **type**: string: The type of DNS record.
* **value**: string: The value of the DNS record.

## GcpSqlAdminInstanceProperties
### Properties
* **availableMaintenanceVersions**: string[]: List of maintenance versions available for this instance.
* **backendType**: string: FIRST_GEN: First Generation instance. V1 is a legacy version and should not be used for new instances.
* **connectionName**: string: Connection name of the Cloud SQL instance used in connection strings.
* **createTime**: string: The time when the instance was created in RFC 3339 format.
* **currentDiskSize**: string: The current disk size of the instance in bytes.
* **databaseInstalledVersion**: string: The database engine version currently installed on the instance.
* **databaseVersion**: string: The database engine type and version.
* **diskEncryptionConfiguration**: [DiskEncryptionConfiguration](#diskencryptionconfiguration): Disk encryption configuration specific to an instance.
* **diskEncryptionStatus**: [DiskEncryptionStatus](#diskencryptionstatus): Disk encryption status specific to an instance.
* **dnsName**: string: DNS name of the instance.
* **dnsNames**: [DnsNameMapping](#dnsnamemapping)[]: List of DNS mappings configured for the instance.
* **etag**: string: This field is deprecated and will be removed from a future version of the API.
* **failoverReplica**: [GcpSqlAdminInstancePropertiesFailoverReplica](#gcpsqladmininstancepropertiesfailoverreplica): The name and status of the failover replica.
* **gceZone**: string: The Compute Engine zone that the instance is serving from.
* **geminiConfig**: [GeminiInstanceConfig](#geminiinstanceconfig): Gemini instance configuration.
* **instanceType**: string: The instance type.
* **ipAddresses**: [IpMapping](#ipmapping)[]: The assigned IP addresses for the instance.
* **ipv6Address**: string: The IPv6 address assigned to the instance.
* **kind**: string: This is always sql#instance.
* **maintenanceVersion**: string: The current software version on the instance.
* **masterInstanceName**: string: The name of the instance which will act as primary in the replication setup.
* **maxDiskSize**: string: The maximum disk size in bytes.
* **name**: string: Name of the Cloud SQL instance.
* **nodeCount**: int: Number of nodes in the instance.
* **nodes**: [PoolNodeConfig](#poolnodeconfig)[]: List of nodes in the instance.
* **onPremisesConfiguration**: [OnPremisesConfiguration](#onpremisesconfiguration): The on-premises instance configuration.
* **outOfDiskReport**: [SqlOutOfDiskReport](#sqloutofdiskreport): Report for out of disk conditions.
* **primaryDnsName**: string: Primary DNS name of the instance.
* **project**: string: The project ID of the project containing the Cloud SQL instance.
* **pscServiceAttachmentLink**: string: PSC service attachment link.
* **region**: string: The geographical region.
* **replicaConfiguration**: [ReplicaConfiguration](#replicaconfiguration): The replica configuration.
* **replicaNames**: string[]: The replicas of the instance.
* **replicationCluster**: [ReplicationCluster](#replicationcluster): Replication cluster configuration.
* **rootPassword**: string {sensitive}: Initial root password.
* **satisfiesPzs**: bool: The status indicating if instance satisfies physical zone separation.
* **scheduledMaintenance**: [SqlScheduledMaintenance](#sqlscheduledmaintenance): The scheduled maintenance for the instance.
* **secondaryGceZone**: string: The Compute Engine zone that the failover instance is currently serving from.
* **selfLink**: string: The URI of this resource.
* **serverCaCert**: [SslCert](#sslcert): The server CA certificate used to connect to the instance via SSL.
* **serviceAccountEmailAddress**: string: The service account email address assigned to the instance.
* **settings**: [Settings](#settings): The settings for the instance.
* **sqlNetworkArchitecture**: string: The network architecture of the instance.
* **state**: string: The current serving state of the Cloud SQL instance.
* **suspensionReason**: string[]: If the instance state is SUSPENDED, the reason for the suspension.
* **switchTransactionLogsToCloudStorageEnabled**: bool: Whether transaction logs switch to cloud storage is enabled.
* **upgradableDatabaseVersions**: [AvailableDatabaseVersion](#availabledatabaseversion)[]: List of database versions to which this instance could be upgraded.
* **writeEndpoint**: string: Write endpoint for the instance.

## GcpSqlAdminInstancePropertiesFailoverReplica
### Properties
* **available**: bool: The availability status of the failover replica. A false status indicates that the failover replica is out of sync. The primary instance can only failover to the failover replica when the status is true.
* **name**: string: The name of the failover replica. This property is applicable only if the instance has a failover replica.

## GeminiInstanceConfig
### Properties
* **configVersion**: string: Version of the configuration.
* **tier**: string: The tier of the Gemini instance.

## IpConfiguration
### Properties
* **allocatedIpRange**: string: The name of the allocated IP range for the private IP Cloud SQL instance.
* **authorizedNetworks**: [AclEntry](#aclentry)[]: The list of external networks that are allowed to connect to the instance using the IP.
* **ipv4Enabled**: bool: Whether the instance is assigned a public IP address or not.
* **privateNetwork**: string: The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP.
* **requireSsl**: bool: Whether SSL connections over IP are enforced or not.

## IpMapping
### Properties
* **ipAddress**: string: The IP address assigned.
* **timeToRetire**: string: The due time for this IP to be retired in RFC 3339 format.
* **type**: 'MIGRATED_1ST_GEN' | 'OUTGOING' | 'PRIMARY' | 'PRIVATE' | 'SQL_IP_ADDRESS_TYPE_UNSPECIFIED' | string: The type of this IP address.

## LocationPreference
### Properties
* **followGaeApplication**: string: The App Engine application to follow.
* **kind**: string: This is always sql#locationPreference.
* **secondaryZone**: string: The preferred Compute Engine zone for the secondary/failover.
* **zone**: string: The preferred Compute Engine zone for the instance.

## MaintenanceWindow
### Properties
* **day**: int: Day of week (1-7), starting on Monday.
* **hour**: int: Hour of day (0-23).
* **kind**: string: This is always sql#maintenanceWindow.
* **updateTrack**: 'SQL_UPDATE_TRACK_UNSPECIFIED' | 'canary' | 'stable' | 'week5' | string: Maintenance timing setting.

## MySqlReplicaConfiguration
### Properties
* **caCertificate**: string: PEM representation of the trusted CA's x509 certificate.
* **clientCertificate**: string: PEM representation of the replica's x509 certificate.
* **clientKey**: string {sensitive}: PEM representation of the replica's private key.
* **connectRetryInterval**: int: Seconds to wait between connect retries.
* **dumpFilePath**: string: Path to a SQL dump file in Google Cloud Storage.
* **kind**: string: This is always sql#mysqlReplicaConfiguration.
* **masterHeartbeatPeriod**: string: Interval in milliseconds between replication heartbeats.
* **password**: string {sensitive}: The password for the replication connection.
* **sslCipher**: string: A list of permissible ciphers to use for SSL encryption.
* **username**: string: The username for the replication connection.
* **verifyServerCertificate**: bool: Whether or not to check the primary instance's Common Name value.

## OnPremisesConfiguration
### Properties
* **caCertificate**: string: PEM representation of the trusted CA's x509 certificate.
* **clientCertificate**: string: PEM representation of the replica's x509 certificate.
* **clientKey**: string {sensitive}: PEM representation of the replica's private key.
* **dumpFilePath**: string: The dump file to create the Cloud SQL replica.
* **hostPort**: string: The host and port of the on-premises instance in host:port format.
* **kind**: string: This is always sql#onPremisesConfiguration.
* **password**: string {sensitive}: The password for connecting to on-premises instance.
* **username**: string: The username for connecting to on-premises instance.

## PoolNodeConfig
### Properties
* **id**: string: The ID of the node.
* **ipAddress**: string: IP address of the node.
* **name**: string: The name of the node.
* **state**: 'FAILED' | 'MAINTENANCE' | 'ONLINE_MAINTENANCE' | 'PENDING_CREATE' | 'PENDING_DELETE' | 'REPAIRING' | 'RUNNABLE' | 'SQL_INSTANCE_STATE_UNSPECIFIED' | 'SUSPENDED' | string: Current state of the node.
* **zone**: string: The zone where the node is located.

## ReplicaConfiguration
### Properties
* **failoverTarget**: bool: Whether this replica can be used as a failover target.
* **kind**: string: This is always sql#replicaConfiguration.
* **mysqlReplicaConfiguration**: [MySqlReplicaConfiguration](#mysqlreplicaconfiguration): MySQL specific configuration when replicating from a MySQL primary instance.

## ReplicationCluster
### Properties
* **clusterId**: string: ID of the replication cluster.
* **leaderInstanceName**: string: Name of the leader instance.
* **status**: string: Status of the replication cluster.

## Settings
### Properties
* **activationPolicy**: 'ALWAYS' | 'NEVER' | 'ON_DEMAND' | 'SQL_ACTIVATION_POLICY_UNSPECIFIED' | string: The activation policy specifies when the instance is activated.
* **activeDirectoryConfig**: [SqlActiveDirectoryConfig](#sqlactivedirectoryconfig): Active Directory configuration.
* **authorizedGaeApplications**: string[]: The App Engine app IDs that can access this instance.
* **availabilityType**: 'REGIONAL' | 'SQL_AVAILABILITY_TYPE_UNSPECIFIED' | 'ZONAL' | string: Availability type.
* **backupConfiguration**: [BackupConfiguration](#backupconfiguration): Database instance backup configuration.
* **collation**: string: The name of server Instance collation.
* **crashSafeReplicationEnabled**: bool: Configuration specific to read replicas replication.
* **databaseFlags**: [DatabaseFlags](#databaseflags)[]: The database flags passed to the instance at startup.
* **dataDiskSizeGb**: string: The size of data disk, in GB.
* **dataDiskType**: 'HYPERDISK_BALANCED' | 'OBSOLETE_LOCAL_SSD' | 'PD_HDD' | 'PD_SSD' | 'SQL_DATA_DISK_TYPE_UNSPECIFIED' | string: The type of data disk.
* **ipConfiguration**: [IpConfiguration](#ipconfiguration): The default IAM policy for new databases created in the instance.
* **kind**: string: This is always sql#settings.
* **locationPreference**: [LocationPreference](#locationpreference): The location preference for the instance.
* **maintenanceWindow**: [MaintenanceWindow](#maintenancewindow): Maintenance window for the instance.
* **pricingPlan**: 'PACKAGE' | 'PER_USE' | 'SQL_PRICING_PLAN_UNSPECIFIED' | string: The pricing plan for this instance.
* **replicationType**: 'ASYNCHRONOUS' | 'SQL_REPLICATION_TYPE_UNSPECIFIED' | 'SYNCHRONOUS' | string: The type of replication this instance uses.
* **settingsVersion**: string: The version of instance settings.
* **storageAutoResize**: bool: Configuration to increase storage size automatically.
* **storageAutoResizeLimit**: string: The maximum size to which storage capacity can be automatically increased.
* **tier**: string: The tier of service for this instance.
* **userLabels**: [SettingsUserLabels](#settingsuserlabels): User-provided labels, represented as a dictionary.
* **version**: int: The version of instance settings.

## SettingsUserLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlActiveDirectoryConfig
### Properties
* **domain**: string: The name of the domain directory.
* **kind**: string: This is always sql#activeDirectoryConfig.

## SQLAdminInstanceProperties
### Properties
* **gcpProjectId**: string: GCP Project Id
* **gcpProjectNumber**: string: GCP Project Number
* **gcpProperties**: [GcpSqlAdminInstanceProperties](#gcpsqladmininstanceproperties): GCP Properties
* **gcpRegion**: string: GCP Region
* **gcpSourceSchema**: string: GCP Source Schema
* **gcpTags**: [SQLAdminInstancePropertiesGcpTags](#sqladmininstancepropertiesgcptags): GCP Tags
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **publicCloudConnectorsResourceId**: string: Public Cloud Connectors Resource ID
* **publicCloudResourceName**: string: Public Cloud Resource Name
* **resourceName**: string: Fully qualified resource name of the GCP resource

## SQLAdminInstancePropertiesGcpTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlOutOfDiskReport
### Properties
* **sqlMinRecommendedIncreaseSizeGb**: int: Minimum recommended increase size in GB.
* **sqlOutOfDiskState**: 'NORMAL' | 'SOFT_SHUTDOWN' | 'SQL_OUT_OF_DISK_STATE_UNSPECIFIED' | string: Current out of disk state.

## SqlScheduledMaintenance
### Properties
* **canDefer**: bool: If the scheduled maintenance can be deferred.
* **canReschedule**: bool: If the scheduled maintenance can be rescheduled.
* **startTime**: string: The start time of any upcoming scheduled maintenance for this instance.

## SslCert
### Properties
* **cert**: string: PEM representation of the X.509 certificate.
* **certSerialNumber**: string: Serial number, as extracted from the certificate.
* **commonName**: string: User supplied name. Constrained to [a-zA-Z.-_ ]+.
* **createTime**: string: The time when the certificate was created in RFC 3339 format.
* **expirationTime**: string: The time when the certificate expires in RFC 3339 format.
* **instance**: string: Name of the database instance.
* **kind**: string: This is always sql#sslCert.
* **selfLink**: string: The URI of this resource.
* **sha1Fingerprint**: string: SHA-1 fingerprint of the certificate.

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

