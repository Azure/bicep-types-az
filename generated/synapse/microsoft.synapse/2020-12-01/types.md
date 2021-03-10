# Microsoft.Synapse @ 2020-12-01

## Resource Microsoft.Synapse/privateLinkHubs@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateLinkHubProperties](#privatelinkhubproperties)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.Synapse/privateLinkHubs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedIdentity](#managedidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkspaceProperties](#workspaceproperties)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.Synapse/workspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/administrators@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AadAdminProperties](#aadadminproperties)
* **type**: 'Microsoft.Synapse/workspaces/administrators' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/auditingSettings@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ServerBlobAuditingPolicyProperties](#serverblobauditingpolicyproperties)
* **type**: 'Microsoft.Synapse/workspaces/auditingSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/bigDataPools@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BigDataPoolResourceProperties](#bigdatapoolresourceproperties)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.Synapse/workspaces/bigDataPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/encryptionProtector@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: 'current' (Required, DeployTimeConstant)
* **properties**: [EncryptionProtectorProperties](#encryptionprotectorproperties)
* **type**: 'Microsoft.Synapse/workspaces/encryptionProtector' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/extendedAuditingSettings@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ExtendedServerBlobAuditingPolicyProperties](#extendedserverblobauditingpolicyproperties)
* **type**: 'Microsoft.Synapse/workspaces/extendedAuditingSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/firewallRules@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IpFirewallRuleProperties](#ipfirewallruleproperties)
* **type**: 'Microsoft.Synapse/workspaces/firewallRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/integrationRuntimes@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IntegrationRuntime](#integrationruntime) (Required)
* **type**: 'Microsoft.Synapse/workspaces/integrationRuntimes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/keys@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [KeyProperties](#keyproperties)
* **type**: 'Microsoft.Synapse/workspaces/keys' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/managedIdentitySqlControlSettings@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagedIdentitySqlControlSettingsModelProperties](#managedidentitysqlcontrolsettingsmodelproperties)
* **type**: 'Microsoft.Synapse/workspaces/managedIdentitySqlControlSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/privateEndpointConnections@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: 'Microsoft.Synapse/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/securityAlertPolicies@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'Default' (Required, DeployTimeConstant)
* **properties**: [ServerSecurityAlertPolicyProperties](#serversecurityalertpolicyproperties)
* **type**: 'Microsoft.Synapse/workspaces/securityAlertPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlAdministrators@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AadAdminProperties](#aadadminproperties)
* **type**: 'Microsoft.Synapse/workspaces/sqlAdministrators' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlPoolResourceProperties](#sqlpoolresourceproperties)
* **sku**: [Sku](#sku)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.Synapse/workspaces/sqlPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/auditingSettings@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [SqlPoolBlobAuditingPolicyProperties](#sqlpoolblobauditingpolicyproperties)
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/auditingSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **managedBy**: string (ReadOnly)
* **name**: 'Default' (Required, DeployTimeConstant)
* **properties**: [DataMaskingPolicyProperties](#datamaskingpolicyproperties)
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies/rules@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DataMaskingRuleProperties](#datamaskingruleproperties)
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies/rules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/extendedAuditingSettings@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ExtendedSqlPoolBlobAuditingPolicyProperties](#extendedsqlpoolblobauditingpolicyproperties)
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/extendedAuditingSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/geoBackupPolicies@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: 'Default' (Required, DeployTimeConstant)
* **properties**: [GeoBackupPolicyProperties](#geobackuppolicyproperties) (Required)
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/geoBackupPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/maintenancewindows@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MaintenanceWindowsProperties](#maintenancewindowsproperties)
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/maintenancewindows' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/metadataSync@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MetadataSyncConfigProperties](#metadatasyncconfigproperties)
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/metadataSync' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/schemas/tables/columns/sensitivityLabels@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **managedBy**: string (ReadOnly)
* **name**: 'current' (Required, DeployTimeConstant)
* **properties**: [SensitivityLabelProperties](#sensitivitylabelproperties)
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/schemas/tables/columns/sensitivityLabels' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/securityAlertPolicies@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [SecurityAlertPolicyProperties](#securityalertpolicyproperties)
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/securityAlertPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/transparentDataEncryption@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: 'current' (Required, DeployTimeConstant)
* **properties**: [TransparentDataEncryptionProperties](#transparentdataencryptionproperties)
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/transparentDataEncryption' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [SqlPoolVulnerabilityAssessmentProperties](#sqlpoolvulnerabilityassessmentproperties)
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments/rules/baselines@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' | 'master' (Required, DeployTimeConstant)
* **properties**: [SqlPoolVulnerabilityAssessmentRuleBaselineProperties](#sqlpoolvulnerabilityassessmentrulebaselineproperties)
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments/rules/baselines' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/workloadGroups@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkloadGroupProperties](#workloadgroupproperties)
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/workloadGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/workloadGroups/workloadClassifiers@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkloadClassifierProperties](#workloadclassifierproperties)
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/workloadGroups/workloadClassifiers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/vulnerabilityAssessments@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ServerVulnerabilityAssessmentProperties](#servervulnerabilityassessmentproperties)
* **type**: 'Microsoft.Synapse/workspaces/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant)

## PrivateLinkHubProperties
### Properties
* **privateEndpointConnections**: [PrivateEndpointConnectionForPrivateLinkHubBasic](#privateendpointconnectionforprivatelinkhubbasic)[] (ReadOnly)
* **provisioningState**: string

## PrivateEndpointConnectionForPrivateLinkHubBasic
### Properties
* **id**: string (ReadOnly)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate)
* **provisioningState**: string (ReadOnly)

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly)

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string (ReadOnly)
* **description**: string
* **status**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned'

## WorkspaceProperties
### Properties
* **adlaResourceId**: string (ReadOnly)
* **connectivityEndpoints**: [WorkspacePropertiesConnectivityEndpoints](#workspacepropertiesconnectivityendpoints)
* **defaultDataLakeStorage**: [DataLakeStorageAccountDetails](#datalakestorageaccountdetails)
* **encryption**: [EncryptionDetails](#encryptiondetails)
* **extraProperties**: [WorkspacePropertiesExtraProperties](#workspacepropertiesextraproperties) (ReadOnly)
* **managedResourceGroupName**: string
* **managedVirtualNetwork**: string
* **managedVirtualNetworkSettings**: [ManagedVirtualNetworkSettings](#managedvirtualnetworksettings)
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[]
* **provisioningState**: string (ReadOnly)
* **purviewConfiguration**: [PurviewConfiguration](#purviewconfiguration)
* **sqlAdministratorLogin**: string
* **sqlAdministratorLoginPassword**: string
* **virtualNetworkProfile**: [VirtualNetworkProfile](#virtualnetworkprofile)
* **workspaceRepositoryConfiguration**: [WorkspaceRepositoryConfiguration](#workspacerepositoryconfiguration)
* **workspaceUID**: string (ReadOnly)

## WorkspacePropertiesConnectivityEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DataLakeStorageAccountDetails
### Properties
* **accountUrl**: string
* **filesystem**: string

## EncryptionDetails
### Properties
* **cmk**: [CustomerManagedKeyDetails](#customermanagedkeydetails)
* **doubleEncryptionEnabled**: bool (ReadOnly)

## CustomerManagedKeyDetails
### Properties
* **key**: [WorkspaceKeyDetails](#workspacekeydetails)
* **status**: string (ReadOnly)

## WorkspaceKeyDetails
### Properties
* **keyVaultUrl**: string
* **name**: string

## WorkspacePropertiesExtraProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ManagedVirtualNetworkSettings
### Properties
* **allowedAadTenantIdsForLinking**: string[]
* **linkedAccessCheckOnTargetResource**: bool
* **preventDataExfiltration**: bool

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: string (ReadOnly)

## PurviewConfiguration
### Properties
* **purviewResourceId**: string

## VirtualNetworkProfile
### Properties
* **computeSubnetId**: string

## WorkspaceRepositoryConfiguration
### Properties
* **accountName**: string
* **collaborationBranch**: string
* **hostName**: string
* **lastCommitId**: string
* **projectName**: string
* **repositoryName**: string
* **rootFolder**: string
* **tenantId**: string
* **type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AadAdminProperties
### Properties
* **administratorType**: string
* **login**: string
* **sid**: string
* **tenantId**: string

## ServerBlobAuditingPolicyProperties
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

## BigDataPoolResourceProperties
### Properties
* **autoPause**: [AutoPauseProperties](#autopauseproperties)
* **autoScale**: [AutoScaleProperties](#autoscaleproperties)
* **cacheSize**: int
* **creationDate**: string
* **customLibraries**: [LibraryInfo](#libraryinfo)[]
* **defaultSparkLogFolder**: string
* **dynamicExecutorAllocation**: [DynamicExecutorAllocation](#dynamicexecutorallocation)
* **isComputeIsolationEnabled**: bool
* **lastSucceededTimestamp**: string (ReadOnly)
* **libraryRequirements**: [LibraryRequirements](#libraryrequirements)
* **nodeCount**: int
* **nodeSize**: 'Large' | 'Medium' | 'None' | 'Small' | 'XLarge' | 'XXLarge' | 'XXXLarge'
* **nodeSizeFamily**: 'MemoryOptimized' | 'None'
* **provisioningState**: string
* **sessionLevelPackagesEnabled**: bool
* **sparkConfigProperties**: [LibraryRequirements](#libraryrequirements)
* **sparkEventsFolder**: string
* **sparkVersion**: string

## AutoPauseProperties
### Properties
* **delayInMinutes**: int
* **enabled**: bool

## AutoScaleProperties
### Properties
* **enabled**: bool
* **maxNodeCount**: int
* **minNodeCount**: int

## LibraryInfo
### Properties
* **containerName**: string
* **creatorId**: string (ReadOnly)
* **name**: string
* **path**: string
* **provisioningStatus**: string (ReadOnly)
* **type**: string
* **uploadedTimestamp**: string (ReadOnly)

## DynamicExecutorAllocation
### Properties
* **enabled**: bool

## LibraryRequirements
### Properties
* **content**: string
* **filename**: string
* **time**: string (ReadOnly)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EncryptionProtectorProperties
### Properties
* **serverKeyName**: string
* **serverKeyType**: 'AzureKeyVault' | 'ServiceManaged' (Required)
* **subregion**: string (ReadOnly)
* **thumbprint**: string (ReadOnly)
* **uri**: string (ReadOnly)

## ExtendedServerBlobAuditingPolicyProperties
### Properties
* **auditActionsAndGroups**: string[]
* **isAzureMonitorTargetEnabled**: bool
* **isStorageSecondaryKeyInUse**: bool
* **predicateExpression**: string
* **queueDelayMs**: int
* **retentionDays**: int
* **state**: 'Disabled' | 'Enabled' (Required)
* **storageAccountAccessKey**: string
* **storageAccountSubscriptionId**: string
* **storageEndpoint**: string

## IpFirewallRuleProperties
### Properties
* **endIpAddress**: string
* **provisioningState**: 'DeleteError' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **startIpAddress**: string

## IntegrationRuntime
* **Discriminator**: type

### Base Properties
* **description**: string
### ManagedIntegrationRuntime
#### Properties
* **state**: 'AccessDenied' | 'Initial' | 'Limited' | 'NeedRegistration' | 'Offline' | 'Online' | 'Started' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **type**: 'Managed' (Required)
* **typeProperties**: [ManagedIntegrationRuntimeTypeProperties](#managedintegrationruntimetypeproperties) (Required)

### SelfHostedIntegrationRuntime
#### Properties
* **type**: 'SelfHosted' (Required)
* **typeProperties**: [SelfHostedIntegrationRuntimeTypeProperties](#selfhostedintegrationruntimetypeproperties)


## ManagedIntegrationRuntime
### Properties
* **state**: 'AccessDenied' | 'Initial' | 'Limited' | 'NeedRegistration' | 'Offline' | 'Online' | 'Started' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **type**: 'Managed' (Required)
* **typeProperties**: [ManagedIntegrationRuntimeTypeProperties](#managedintegrationruntimetypeproperties) (Required)

## ManagedIntegrationRuntimeTypeProperties
### Properties
* **computeProperties**: [IntegrationRuntimeComputeProperties](#integrationruntimecomputeproperties)
* **ssisProperties**: [IntegrationRuntimeSsisProperties](#integrationruntimessisproperties)

## IntegrationRuntimeComputeProperties
### Properties
* **dataFlowProperties**: [IntegrationRuntimeDataFlowProperties](#integrationruntimedataflowproperties)
* **location**: string
* **maxParallelExecutionsPerNode**: int
* **nodeSize**: string
* **numberOfNodes**: int
* **vNetProperties**: [IntegrationRuntimeVNetProperties](#integrationruntimevnetproperties)

## IntegrationRuntimeDataFlowProperties
### Properties
* **computeType**: 'ComputeOptimized' | 'General' | 'MemoryOptimized'
* **coreCount**: int
* **timeToLive**: int

## IntegrationRuntimeVNetProperties
### Properties
* **publicIPs**: string[]
* **subnet**: string
* **vNetId**: string

## IntegrationRuntimeSsisProperties
### Properties
* **catalogInfo**: [IntegrationRuntimeSsisCatalogInfo](#integrationruntimessiscataloginfo)
* **customSetupScriptProperties**: [IntegrationRuntimeCustomSetupScriptProperties](#integrationruntimecustomsetupscriptproperties)
* **dataProxyProperties**: [IntegrationRuntimeDataProxyProperties](#integrationruntimedataproxyproperties)
* **edition**: 'Enterprise' | 'Standard'
* **expressCustomSetupProperties**: [CustomSetupBase](#customsetupbase)[]
* **licenseType**: 'BasePrice' | 'LicenseIncluded'

## IntegrationRuntimeSsisCatalogInfo
### Properties
* **catalogAdminPassword**: [SecureString](#securestring)
* **catalogAdminUserName**: string
* **catalogPricingTier**: 'Basic' | 'Premium' | 'PremiumRS' | 'Standard'
* **catalogServerEndpoint**: string

## SecureString
### Properties
* **type**: 'SecureString' (Required)
* **value**: string (Required)

## IntegrationRuntimeCustomSetupScriptProperties
### Properties
* **blobContainerUri**: string
* **sasToken**: [SecureString](#securestring)

## IntegrationRuntimeDataProxyProperties
### Properties
* **connectVia**: [EntityReference](#entityreference)
* **path**: string
* **stagingLinkedService**: [EntityReference](#entityreference)

## EntityReference
### Properties
* **referenceName**: string
* **type**: 'IntegrationRuntimeReference' | 'LinkedServiceReference'

## CustomSetupBase
* **Discriminator**: type

### Base Properties
### CmdkeySetup
#### Properties
* **type**: 'CmdkeySetup' (Required)
* **typeProperties**: [CmdkeySetupTypeProperties](#cmdkeysetuptypeproperties) (Required)

### ComponentSetup
#### Properties
* **type**: 'ComponentSetup' (Required)
* **typeProperties**: [LicensedComponentSetupTypeProperties](#licensedcomponentsetuptypeproperties) (Required)

### EnvironmentVariableSetup
#### Properties
* **type**: 'EnvironmentVariableSetup' (Required)
* **typeProperties**: [EnvironmentVariableSetupTypeProperties](#environmentvariablesetuptypeproperties) (Required)


## CmdkeySetup
### Properties
* **type**: 'CmdkeySetup' (Required)
* **typeProperties**: [CmdkeySetupTypeProperties](#cmdkeysetuptypeproperties) (Required)

## CmdkeySetupTypeProperties
### Properties
* **password**: [SecretBase](#secretbase) (Required)
* **targetName**: any (Required)
* **userName**: any (Required)

## SecretBase
* **Discriminator**: type

### Base Properties
### SecureString
#### Properties
* **type**: 'SecureString' (Required)
* **value**: string (Required)


## ComponentSetup
### Properties
* **type**: 'ComponentSetup' (Required)
* **typeProperties**: [LicensedComponentSetupTypeProperties](#licensedcomponentsetuptypeproperties) (Required)

## LicensedComponentSetupTypeProperties
### Properties
* **componentName**: string (Required)
* **licenseKey**: [SecretBase](#secretbase)

## EnvironmentVariableSetup
### Properties
* **type**: 'EnvironmentVariableSetup' (Required)
* **typeProperties**: [EnvironmentVariableSetupTypeProperties](#environmentvariablesetuptypeproperties) (Required)

## EnvironmentVariableSetupTypeProperties
### Properties
* **variableName**: string (Required)
* **variableValue**: string (Required)

## SelfHostedIntegrationRuntime
### Properties
* **type**: 'SelfHosted' (Required)
* **typeProperties**: [SelfHostedIntegrationRuntimeTypeProperties](#selfhostedintegrationruntimetypeproperties)

## SelfHostedIntegrationRuntimeTypeProperties
### Properties
* **linkedInfo**: [LinkedIntegrationRuntimeType](#linkedintegrationruntimetype)

## LinkedIntegrationRuntimeType
* **Discriminator**: authorizationType

### Base Properties
### LinkedIntegrationRuntimeKeyAuthorization
#### Properties
* **authorizationType**: 'Key' (Required)
* **key**: [SecureString](#securestring) (Required)

### LinkedIntegrationRuntimeRbacAuthorization
#### Properties
* **authorizationType**: 'RBAC' (Required)
* **resourceId**: string (Required)


## LinkedIntegrationRuntimeKeyAuthorization
### Properties
* **authorizationType**: 'Key' (Required)
* **key**: [SecureString](#securestring) (Required)

## LinkedIntegrationRuntimeRbacAuthorization
### Properties
* **authorizationType**: 'RBAC' (Required)
* **resourceId**: string (Required)

## KeyProperties
### Properties
* **isActiveCMK**: bool
* **keyVaultUrl**: string

## ManagedIdentitySqlControlSettingsModelProperties
### Properties
* **grantSqlControlToManagedIdentity**: [ManagedIdentitySqlControlSettingsModelPropertiesGrantSqlControlToManagedIdentity](#managedidentitysqlcontrolsettingsmodelpropertiesgrantsqlcontroltomanagedidentity)

## ManagedIdentitySqlControlSettingsModelPropertiesGrantSqlControlToManagedIdentity
### Properties
* **actualState**: 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | 'Unknown' (ReadOnly)
* **desiredState**: 'Disabled' | 'Enabled'

## ServerSecurityAlertPolicyProperties
### Properties
* **creationTime**: string (ReadOnly)
* **disabledAlerts**: string[]
* **emailAccountAdmins**: bool
* **emailAddresses**: string[]
* **retentionDays**: int
* **state**: 'Disabled' | 'Enabled' | 'New' (Required)
* **storageAccountAccessKey**: string
* **storageEndpoint**: string

## SqlPoolResourceProperties
### Properties
* **collation**: string
* **createMode**: string
* **creationDate**: string
* **maxSizeBytes**: int
* **provisioningState**: string
* **recoverableDatabaseId**: string
* **restorePointInTime**: string
* **sourceDatabaseId**: string
* **status**: string
* **storageAccountType**: 'GRS' | 'LRS' | 'ZRS'

## Sku
### Properties
* **capacity**: int
* **name**: string
* **tier**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlPoolBlobAuditingPolicyProperties
### Properties
* **auditActionsAndGroups**: string[]
* **isAzureMonitorTargetEnabled**: bool
* **isStorageSecondaryKeyInUse**: bool
* **retentionDays**: int
* **state**: 'Disabled' | 'Enabled' (Required)
* **storageAccountAccessKey**: string
* **storageAccountSubscriptionId**: string
* **storageEndpoint**: string

## DataMaskingPolicyProperties
### Properties
* **applicationPrincipals**: string (ReadOnly)
* **dataMaskingState**: 'Disabled' | 'Enabled' (Required)
* **exemptPrincipals**: string
* **maskingLevel**: string (ReadOnly)

## DataMaskingRuleProperties
### Properties
* **aliasName**: string
* **columnName**: string (Required)
* **id**: string (ReadOnly)
* **maskingFunction**: 'CCN' | 'Default' | 'Email' | 'Number' | 'SSN' | 'Text' (Required)
* **numberFrom**: string
* **numberTo**: string
* **prefixSize**: string
* **replacementString**: string
* **ruleState**: 'Disabled' | 'Enabled'
* **schemaName**: string (Required)
* **suffixSize**: string
* **tableName**: string (Required)

## ExtendedSqlPoolBlobAuditingPolicyProperties
### Properties
* **auditActionsAndGroups**: string[]
* **isAzureMonitorTargetEnabled**: bool
* **isStorageSecondaryKeyInUse**: bool
* **predicateExpression**: string
* **queueDelayMs**: int
* **retentionDays**: int
* **state**: 'Disabled' | 'Enabled' (Required)
* **storageAccountAccessKey**: string
* **storageAccountSubscriptionId**: string
* **storageEndpoint**: string

## GeoBackupPolicyProperties
### Properties
* **state**: 'Disabled' | 'Enabled' (Required)
* **storageType**: string (ReadOnly)

## MaintenanceWindowsProperties
### Properties
* **timeRanges**: [MaintenanceWindowTimeRange](#maintenancewindowtimerange)[]

## MaintenanceWindowTimeRange
### Properties
* **dayOfWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'
* **duration**: string
* **startTime**: string

## MetadataSyncConfigProperties
### Properties
* **enabled**: bool
* **syncIntervalInMinutes**: int

## SensitivityLabelProperties
### Properties
* **columnName**: string (ReadOnly)
* **informationType**: string
* **informationTypeId**: string
* **isDisabled**: bool (ReadOnly)
* **labelId**: string
* **labelName**: string
* **rank**: 'Critical' | 'High' | 'Low' | 'Medium' | 'None'
* **schemaName**: string (ReadOnly)
* **tableName**: string (ReadOnly)

## SecurityAlertPolicyProperties
### Properties
* **creationTime**: string (ReadOnly)
* **disabledAlerts**: string[]
* **emailAccountAdmins**: bool
* **emailAddresses**: string[]
* **retentionDays**: int
* **state**: 'Disabled' | 'Enabled' | 'New' (Required)
* **storageAccountAccessKey**: string
* **storageEndpoint**: string

## TransparentDataEncryptionProperties
### Properties
* **status**: 'Disabled' | 'Enabled'

## SqlPoolVulnerabilityAssessmentProperties
### Properties
* **recurringScans**: [VulnerabilityAssessmentRecurringScansProperties](#vulnerabilityassessmentrecurringscansproperties)
* **storageAccountAccessKey**: string
* **storageContainerPath**: string
* **storageContainerSasKey**: string

## VulnerabilityAssessmentRecurringScansProperties
### Properties
* **emails**: string[]
* **emailSubscriptionAdmins**: bool
* **isEnabled**: bool

## SqlPoolVulnerabilityAssessmentRuleBaselineProperties
### Properties
* **baselineResults**: [SqlPoolVulnerabilityAssessmentRuleBaselineItem](#sqlpoolvulnerabilityassessmentrulebaselineitem)[] (Required)

## SqlPoolVulnerabilityAssessmentRuleBaselineItem
### Properties
* **result**: string[] (Required)

## WorkloadGroupProperties
### Properties
* **importance**: string
* **maxResourcePercent**: int (Required)
* **maxResourcePercentPerRequest**: int
* **minResourcePercent**: int (Required)
* **minResourcePercentPerRequest**: int (Required)
* **queryExecutionTimeout**: int

## WorkloadClassifierProperties
### Properties
* **context**: string
* **endTime**: string
* **importance**: string
* **label**: string
* **memberName**: string (Required)
* **startTime**: string

## ServerVulnerabilityAssessmentProperties
### Properties
* **recurringScans**: [VulnerabilityAssessmentRecurringScansProperties](#vulnerabilityassessmentrecurringscansproperties)
* **storageAccountAccessKey**: string
* **storageContainerPath**: string (Required)
* **storageContainerSasKey**: string

