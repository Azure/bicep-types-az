# Microsoft.Sql @ 2015-05-01-preview

## Microsoft.Sql/managedInstances
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ResourceIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagedInstanceProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Sql/managedInstances' (ReadOnly, DeployTimeConstant)

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned'

## ManagedInstanceProperties
### Properties
* **administratorLogin**: string
* **administratorLoginPassword**: string
* **collation**: string
* **dnsZone**: string (ReadOnly)
* **dnsZonePartner**: string
* **fullyQualifiedDomainName**: string (ReadOnly)
* **instancePoolId**: string
* **licenseType**: 'BasePrice' | 'LicenseIncluded'
* **maintenanceConfigurationId**: string
* **managedInstanceCreateMode**: 'Default' | 'PointInTimeRestore'
* **minimalTlsVersion**: string
* **proxyOverride**: 'Default' | 'Proxy' | 'Redirect'
* **publicDataEndpointEnabled**: bool
* **restorePointInTime**: string
* **sourceManagedInstanceId**: string
* **state**: string (ReadOnly)
* **storageSizeInGB**: int
* **subnetId**: string
* **timezoneId**: string
* **vCores**: int

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
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ResourceIdentity
* **kind**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServerProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Sql/servers' (ReadOnly, DeployTimeConstant)

## ServerProperties
### Properties
* **administratorLogin**: string
* **administratorLoginPassword**: string
* **fullyQualifiedDomainName**: string (ReadOnly)
* **state**: string (ReadOnly)
* **version**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Sql/servers/databases/auditingSettings
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DatabaseBlobAuditingPolicyProperties
* **type**: 'Microsoft.Sql/servers/databases/auditingSettings' (ReadOnly, DeployTimeConstant)

## DatabaseBlobAuditingPolicyProperties
### Properties
* **auditActionsAndGroups**: string[]
* **isAzureMonitorTargetEnabled**: bool
* **isStorageSecondaryKeyInUse**: bool
* **queueDelayMs**: int
* **retentionDays**: int
* **state**: 'Disabled' | 'Enabled' (Required)
* **storageAccountAccessKey**: string
* **storageAccountSubscriptionId**: string
* **storageEndpoint**: string

## Microsoft.Sql/servers/databases/syncGroups
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
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
* **schema**: SyncGroupSchema
* **syncDatabaseId**: string
* **syncState**: 'Error' | 'Good' | 'NotReady' | 'Progressing' | 'Warning' (ReadOnly)

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

## Microsoft.Sql/servers/databases/syncGroups/syncMembers
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
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
* **serverName**: string
* **sqlServerDatabaseId**: string
* **syncAgentId**: string
* **syncDirection**: 'Bidirectional' | 'OneWayHubToMember' | 'OneWayMemberToHub'
* **syncState**: 'DeProvisioned' | 'DeProvisionFailed' | 'DeProvisioning' | 'DisabledBackupRestore' | 'DisabledTombstoneCleanup' | 'Provisioned' | 'ProvisionFailed' | 'Provisioning' | 'ReprovisionFailed' | 'Reprovisioning' | 'SyncCancelled' | 'SyncCancelling' | 'SyncFailed' | 'SyncInProgress' | 'SyncSucceeded' | 'SyncSucceededWithWarnings' | 'UnProvisioned' | 'UnReprovisioned' (ReadOnly)
* **userName**: string

## Microsoft.Sql/servers/encryptionProtector
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EncryptionProtectorProperties
* **type**: 'Microsoft.Sql/servers/encryptionProtector' (ReadOnly, DeployTimeConstant)

## EncryptionProtectorProperties
### Properties
* **serverKeyName**: string
* **serverKeyType**: 'AzureKeyVault' | 'ServiceManaged' (Required)
* **subregion**: string (ReadOnly)
* **thumbprint**: string (ReadOnly)
* **uri**: string (ReadOnly)

## Microsoft.Sql/servers/failoverGroups
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: FailoverGroupProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Sql/servers/failoverGroups' (ReadOnly, DeployTimeConstant)

## FailoverGroupProperties
### Properties
* **databases**: string[]
* **partnerServers**: PartnerInfo[] (Required)
* **readOnlyEndpoint**: FailoverGroupReadOnlyEndpoint
* **readWriteEndpoint**: FailoverGroupReadWriteEndpoint (Required)
* **replicationRole**: 'Primary' | 'Secondary' (ReadOnly)
* **replicationState**: string (ReadOnly)

## PartnerInfo
### Properties
* **id**: string (Required)
* **location**: string (ReadOnly)
* **replicationRole**: 'Primary' | 'Secondary' (ReadOnly)

## FailoverGroupReadOnlyEndpoint
### Properties
* **failoverPolicy**: 'Disabled' | 'Enabled'

## FailoverGroupReadWriteEndpoint
### Properties
* **failoverPolicy**: 'Automatic' | 'Manual' (Required)
* **failoverWithDataLossGracePeriodMinutes**: int

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Sql/servers/firewallRules
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServerFirewallRuleProperties
* **type**: 'Microsoft.Sql/servers/firewallRules' (ReadOnly, DeployTimeConstant)

## ServerFirewallRuleProperties
### Properties
* **endIpAddress**: string
* **startIpAddress**: string

## Microsoft.Sql/servers/firewallRules
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **nextLink**: string (ReadOnly)
* **type**: 'Microsoft.Sql/servers/firewallRules' (ReadOnly, DeployTimeConstant)
* **value**: FirewallRule[] (ReadOnly)
* **values**: FirewallRule[] (WriteOnly)

## FirewallRule
### Properties
* **id**: string (ReadOnly, WriteOnly)
* **name**: string (WriteOnly)
* **properties**: ServerFirewallRuleProperties (WriteOnly)
* **type**: string (ReadOnly, WriteOnly)

## Microsoft.Sql/servers/keys
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServerKeyProperties
* **type**: 'Microsoft.Sql/servers/keys' (ReadOnly, DeployTimeConstant)

## ServerKeyProperties
### Properties
* **creationDate**: string
* **serverKeyType**: 'AzureKeyVault' | 'ServiceManaged' (Required)
* **subregion**: string (ReadOnly)
* **thumbprint**: string
* **uri**: string

## Microsoft.Sql/servers/syncAgents
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SyncAgentProperties
* **type**: 'Microsoft.Sql/servers/syncAgents' (ReadOnly, DeployTimeConstant)

## SyncAgentProperties
### Properties
* **expiryTime**: string (ReadOnly)
* **isUpToDate**: bool (ReadOnly)
* **lastAliveTime**: string (ReadOnly)
* **name**: string (ReadOnly)
* **state**: 'NeverConnected' | 'Offline' | 'Online' (ReadOnly)
* **syncDatabaseId**: string
* **version**: string (ReadOnly)

## Microsoft.Sql/servers/virtualNetworkRules
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualNetworkRuleProperties
* **type**: 'Microsoft.Sql/servers/virtualNetworkRules' (ReadOnly, DeployTimeConstant)

## VirtualNetworkRuleProperties
### Properties
* **ignoreMissingVnetServiceEndpoint**: bool
* **state**: 'Deleting' | 'Initializing' | 'InProgress' | 'Ready' | 'Unknown' (ReadOnly)
* **virtualNetworkSubnetId**: string (Required)

