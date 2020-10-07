# Microsoft.Sql @ 2019-06-01-preview

## Microsoft.Sql/managedInstances/databases
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagedDatabaseProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Sql/managedInstances/databases' (ReadOnly, DeployTimeConstant)

## ManagedDatabaseProperties
### Properties
* **catalogCollation**: 'DATABASE_DEFAULT' | 'SQL_Latin1_General_CP1_CI_AS'
* **collation**: string
* **createMode**: 'Default' | 'PointInTimeRestore' | 'Recovery' | 'RestoreExternalBackup' | 'RestoreLongTermRetentionBackup'
* **creationDate**: string (ReadOnly)
* **defaultSecondaryLocation**: string (ReadOnly)
* **earliestRestorePoint**: string (ReadOnly)
* **failoverGroupId**: string (ReadOnly)
* **longTermRetentionBackupResourceId**: string
* **recoverableDatabaseId**: string
* **restorableDroppedDatabaseId**: string
* **restorePointInTime**: string
* **sourceDatabaseId**: string
* **status**: 'Creating' | 'Inaccessible' | 'Offline' | 'Online' | 'Restoring' | 'Shutdown' | 'Updating' (ReadOnly)
* **storageContainerSasToken**: string
* **storageContainerUri**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Sql/servers/administrators
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AdministratorProperties
* **type**: 'Microsoft.Sql/servers/administrators' (ReadOnly, DeployTimeConstant)

## AdministratorProperties
### Properties
* **administratorType**: string (Required)
* **azureADOnlyAuthentication**: bool (ReadOnly)
* **login**: string (Required)
* **sid**: string (Required)
* **tenantId**: string

## Microsoft.Sql/servers/databases/syncGroups/syncMembers
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SyncMemberProperties
* **type**: 'Microsoft.Sql/servers/databases/syncGroups/syncMembers' (ReadOnly, DeployTimeConstant)

## SyncMemberProperties
### Properties
* **databaseName**: string
* **databaseType**: 'AzureSqlDatabase' | 'SqlServerDatabase'
* **password**: string
* **privateEndpointName**: string (ReadOnly)
* **serverName**: string
* **sqlServerDatabaseId**: string
* **syncAgentId**: string
* **syncDirection**: 'Bidirectional' | 'OneWayHubToMember' | 'OneWayMemberToHub'
* **syncMemberAzureDatabaseResourceId**: string
* **syncState**: 'DeProvisionFailed' | 'DeProvisioned' | 'DeProvisioning' | 'DisabledBackupRestore' | 'DisabledTombstoneCleanup' | 'ProvisionFailed' | 'Provisioned' | 'Provisioning' | 'ReprovisionFailed' | 'Reprovisioning' | 'SyncCancelled' | 'SyncCancelling' | 'SyncFailed' | 'SyncInProgress' | 'SyncSucceeded' | 'SyncSucceededWithWarnings' | 'UnProvisioned' | 'UnReprovisioned' (ReadOnly)
* **usePrivateLinkConnection**: bool
* **userName**: string

## Microsoft.Sql/servers/databases/syncGroups
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SyncGroupProperties
* **type**: 'Microsoft.Sql/servers/databases/syncGroups' (ReadOnly, DeployTimeConstant)

## SyncGroupProperties
### Properties
* **conflictResolutionPolicy**: 'HubWin' | 'MemberWin'
* **hubDatabasePassword**: string
* **hubDatabaseUserName**: string
* **interval**: int
* **lastSyncTime**: string (ReadOnly)
* **privateEndpointName**: string (ReadOnly)
* **schema**: SyncGroupSchema
* **syncDatabaseId**: string
* **syncState**: 'Error' | 'Good' | 'NotReady' | 'Progressing' | 'Warning' (ReadOnly)
* **usePrivateLinkConnection**: bool

## SyncGroupSchema
### Properties
* **masterSyncMemberName**: string
* **tables**: SyncGroupSchemaTable[]

## SyncGroupSchemaTable
### Properties
* **columns**: SyncGroupSchemaTableColumn[]
* **quotedName**: string

## SyncGroupSchemaTableColumn
### Properties
* **dataSize**: string
* **dataType**: string
* **quotedName**: string

## Microsoft.Sql/servers/databases/workloadGroups/workloadClassifiers
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkloadClassifierProperties
* **type**: 'Microsoft.Sql/servers/databases/workloadGroups/workloadClassifiers' (ReadOnly, DeployTimeConstant)

## WorkloadClassifierProperties
### Properties
* **context**: string
* **endTime**: string
* **importance**: string
* **label**: string
* **memberName**: string (Required)
* **startTime**: string

## Microsoft.Sql/servers/databases/workloadGroups
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkloadGroupProperties
* **type**: 'Microsoft.Sql/servers/databases/workloadGroups' (ReadOnly, DeployTimeConstant)

## WorkloadGroupProperties
### Properties
* **importance**: string
* **maxResourcePercent**: int (Required)
* **maxResourcePercentPerRequest**: int
* **minResourcePercent**: int (Required)
* **minResourcePercentPerRequest**: int (Required)
* **queryExecutionTimeout**: int

## Microsoft.Sql/servers/databases
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (Required)
* **managedBy**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DatabaseProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Sql/servers/databases' (ReadOnly, DeployTimeConstant)

## DatabaseProperties
### Properties
* **autoPauseDelay**: int
* **catalogCollation**: 'DATABASE_DEFAULT' | 'SQL_Latin1_General_CP1_CI_AS'
* **collation**: string
* **createMode**: 'Copy' | 'Default' | 'OnlineSecondary' | 'PointInTimeRestore' | 'Recovery' | 'Restore' | 'RestoreExternalBackup' | 'RestoreExternalBackupSecondary' | 'RestoreLongTermRetentionBackup' | 'Secondary'
* **creationDate**: string (ReadOnly)
* **currentServiceObjectiveName**: string (ReadOnly)
* **currentSku**: Sku (ReadOnly)
* **databaseId**: string (ReadOnly)
* **defaultSecondaryLocation**: string (ReadOnly)
* **earliestRestoreDate**: string (ReadOnly)
* **elasticPoolId**: string
* **failoverGroupId**: string (ReadOnly)
* **licenseType**: 'BasePrice' | 'LicenseIncluded'
* **longTermRetentionBackupResourceId**: string
* **maxLogSizeBytes**: int (ReadOnly)
* **maxSizeBytes**: int
* **minCapacity**: int
* **pausedDate**: string (ReadOnly)
* **readReplicaCount**: int
* **readScale**: 'Disabled' | 'Enabled'
* **recoverableDatabaseId**: string
* **recoveryServicesRecoveryPointId**: string
* **requestedServiceObjectiveName**: string (ReadOnly)
* **restorableDroppedDatabaseId**: string
* **restorePointInTime**: string
* **resumedDate**: string (ReadOnly)
* **sampleName**: 'AdventureWorksLT' | 'WideWorldImportersFull' | 'WideWorldImportersStd'
* **sourceDatabaseDeletionDate**: string
* **sourceDatabaseId**: string
* **status**: 'AutoClosed' | 'Copying' | 'Creating' | 'Disabled' | 'EmergencyMode' | 'Inaccessible' | 'Offline' | 'OfflineChangingDwPerformanceTiers' | 'OfflineSecondary' | 'Online' | 'OnlineChangingDwPerformanceTiers' | 'Paused' | 'Pausing' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Resuming' | 'Scaling' | 'Shutdown' | 'Standby' | 'Suspect' (ReadOnly)
* **storageAccountType**: 'GRS' | 'LRS' | 'ZRS'
* **zoneRedundant**: bool

## Sku
### Properties
* **capacity**: int
* **family**: string
* **name**: string (Required)
* **size**: string
* **tier**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Sql/servers
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ResourceIdentity
* **kind**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServerProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Sql/servers' (ReadOnly, DeployTimeConstant)

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned'

## ServerProperties
### Properties
* **administratorLogin**: string
* **administratorLoginPassword**: string
* **fullyQualifiedDomainName**: string (ReadOnly)
* **minimalTlsVersion**: string
* **privateEndpointConnections**: ServerPrivateEndpointConnection[] (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled'
* **state**: string (ReadOnly)
* **version**: string

## ServerPrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **properties**: PrivateEndpointConnectionProperties (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: PrivateEndpointProperty
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionStateProperty
* **provisioningState**: 'Approving' | 'Dropping' | 'Failed' | 'Ready' | 'Rejecting' (ReadOnly)

## PrivateEndpointProperty
### Properties
* **id**: string

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: 'None' (ReadOnly)
* **description**: string (Required)
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

