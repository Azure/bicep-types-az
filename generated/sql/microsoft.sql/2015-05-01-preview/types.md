# Microsoft.Sql @ 2015-05-01-preview

## Resource Microsoft.Sql/managedInstances@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ResourceIdentity](#resourceidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagedInstanceProperties](#managedinstanceproperties)
* **sku**: [Sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Sql/managedInstances' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ResourceIdentity](#resourceidentity)
* **kind**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerProperties](#serverproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Sql/servers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/auditingSettings@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DatabaseBlobAuditingPolicyProperties](#databaseblobauditingpolicyproperties)
* **type**: 'Microsoft.Sql/servers/databases/auditingSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/syncGroups@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SyncGroupProperties](#syncgroupproperties)
* **type**: 'Microsoft.Sql/servers/databases/syncGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/syncGroups/syncMembers@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SyncMemberProperties](#syncmemberproperties)
* **type**: 'Microsoft.Sql/servers/databases/syncGroups/syncMembers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/encryptionProtector@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [EncryptionProtectorProperties](#encryptionprotectorproperties)
* **type**: 'Microsoft.Sql/servers/encryptionProtector' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/failoverGroups@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FailoverGroupProperties](#failovergroupproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Sql/servers/failoverGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/firewallRules@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerFirewallRuleProperties](#serverfirewallruleproperties)
* **type**: 'Microsoft.Sql/servers/firewallRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/keys@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerKeyProperties](#serverkeyproperties)
* **type**: 'Microsoft.Sql/servers/keys' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/syncAgents@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SyncAgentProperties](#syncagentproperties)
* **type**: 'Microsoft.Sql/servers/syncAgents' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/virtualNetworkRules@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualNetworkRuleProperties](#virtualnetworkruleproperties)
* **type**: 'Microsoft.Sql/servers/virtualNetworkRules' (ReadOnly, DeployTimeConstant)

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
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServerProperties
### Properties
* **administratorLogin**: string
* **administratorLoginPassword**: string
* **fullyQualifiedDomainName**: string (ReadOnly)
* **state**: string (ReadOnly)
* **version**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## SyncGroupProperties
### Properties
* **conflictResolutionPolicy**: 'HubWin' | 'MemberWin'
* **hubDatabasePassword**: string
* **hubDatabaseUserName**: string
* **interval**: int
* **lastSyncTime**: string (ReadOnly)
* **schema**: [SyncGroupSchema](#syncgroupschema)
* **syncDatabaseId**: string
* **syncState**: 'Error' | 'Good' | 'NotReady' | 'Progressing' | 'Warning' (ReadOnly)

## SyncGroupSchema
### Properties
* **masterSyncMemberName**: string
* **tables**: [SyncGroupSchemaTable](#syncgroupschematable)[]

## SyncGroupSchemaTable
### Properties
* **columns**: [SyncGroupSchemaTableColumn](#syncgroupschematablecolumn)[]
* **quotedName**: string

## SyncGroupSchemaTableColumn
### Properties
* **dataSize**: string
* **dataType**: string
* **quotedName**: string

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

## EncryptionProtectorProperties
### Properties
* **serverKeyName**: string
* **serverKeyType**: 'AzureKeyVault' | 'ServiceManaged' (Required)
* **subregion**: string (ReadOnly)
* **thumbprint**: string (ReadOnly)
* **uri**: string (ReadOnly)

## FailoverGroupProperties
### Properties
* **databases**: string[]
* **partnerServers**: [PartnerInfo](#partnerinfo)[] (Required)
* **readOnlyEndpoint**: [FailoverGroupReadOnlyEndpoint](#failovergroupreadonlyendpoint)
* **readWriteEndpoint**: [FailoverGroupReadWriteEndpoint](#failovergroupreadwriteendpoint) (Required)
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
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServerFirewallRuleProperties
### Properties
* **endIpAddress**: string
* **startIpAddress**: string

## ServerKeyProperties
### Properties
* **creationDate**: string
* **serverKeyType**: 'AzureKeyVault' | 'ServiceManaged' (Required)
* **subregion**: string (ReadOnly)
* **thumbprint**: string
* **uri**: string

## SyncAgentProperties
### Properties
* **expiryTime**: string (ReadOnly)
* **isUpToDate**: bool (ReadOnly)
* **lastAliveTime**: string (ReadOnly)
* **name**: string (ReadOnly)
* **state**: 'NeverConnected' | 'Offline' | 'Online' (ReadOnly)
* **syncDatabaseId**: string
* **version**: string (ReadOnly)

## VirtualNetworkRuleProperties
### Properties
* **ignoreMissingVnetServiceEndpoint**: bool
* **state**: 'Deleting' | 'Initializing' | 'InProgress' | 'Ready' | 'Unknown' (ReadOnly)
* **virtualNetworkSubnetId**: string (Required)

