# Microsoft.Synapse @ 2020-12-01

## Resource Microsoft.Synapse/privateLinkHubs@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateLinkHubProperties
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Synapse/privateLinkHubs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ManagedIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkspaceProperties
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Synapse/workspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/administrators@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AadAdminProperties
* **type**: 'Microsoft.Synapse/workspaces/administrators' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/auditingSettings@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: ServerBlobAuditingPolicyProperties
* **type**: 'Microsoft.Synapse/workspaces/auditingSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/bigDataPools@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BigDataPoolResourceProperties
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Synapse/workspaces/bigDataPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/encryptionProtector@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: 'current' (Required, DeployTimeConstant)
* **properties**: EncryptionProtectorProperties
* **type**: 'Microsoft.Synapse/workspaces/encryptionProtector' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/extendedAuditingSettings@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: ExtendedServerBlobAuditingPolicyProperties
* **type**: 'Microsoft.Synapse/workspaces/extendedAuditingSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/firewallRules@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IpFirewallRuleProperties
* **type**: 'Microsoft.Synapse/workspaces/firewallRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/integrationRuntimes@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationRuntime (Required)
* **type**: 'Microsoft.Synapse/workspaces/integrationRuntimes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/keys@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: KeyProperties
* **type**: 'Microsoft.Synapse/workspaces/keys' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/managedIdentitySqlControlSettings@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagedIdentitySqlControlSettingsModelProperties
* **type**: 'Microsoft.Synapse/workspaces/managedIdentitySqlControlSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/privateEndpointConnections@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.Synapse/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/securityAlertPolicies@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'Default' (Required, DeployTimeConstant)
* **properties**: ServerSecurityAlertPolicyProperties
* **type**: 'Microsoft.Synapse/workspaces/securityAlertPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlAdministrators@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AadAdminProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlAdministrators' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SqlPoolResourceProperties
* **sku**: Sku
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Synapse/workspaces/sqlPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies/rules@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DataMaskingRuleProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies/rules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/geoBackupPolicies@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: 'Default' (Required, DeployTimeConstant)
* **properties**: GeoBackupPolicyProperties (Required)
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/geoBackupPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/maintenancewindows@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MaintenanceWindowsProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/maintenancewindows' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/metadataSync@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MetadataSyncConfigProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/metadataSync' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/securityAlertPolicies@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: SecurityAlertPolicyProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/securityAlertPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/transparentDataEncryption@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: 'current' (Required, DeployTimeConstant)
* **properties**: TransparentDataEncryptionProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/transparentDataEncryption' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: SqlPoolVulnerabilityAssessmentProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/workloadGroups@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkloadGroupProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/workloadGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/workloadGroups/workloadClassifiers@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkloadClassifierProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/workloadGroups/workloadClassifiers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/vulnerabilityAssessments@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: ServerVulnerabilityAssessmentProperties
* **type**: 'Microsoft.Synapse/workspaces/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant)

## PrivateLinkHubProperties
### Properties
* **privateEndpointConnections**: PrivateEndpointConnectionForPrivateLinkHubBasic[] (ReadOnly)
* **provisioningState**: string

## PrivateEndpointConnectionForPrivateLinkHubBasic
### Properties
* **id**: string (ReadOnly)
* **properties**: PrivateEndpointConnectionProperties

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: PrivateEndpoint
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionState
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

## WorkspaceProperties
### Properties
* **adlaResourceId**: string (ReadOnly)
* **connectivityEndpoints**: WorkspacePropertiesConnectivityEndpoints
* **defaultDataLakeStorage**: DataLakeStorageAccountDetails
* **encryption**: EncryptionDetails
* **extraProperties**: WorkspacePropertiesExtraProperties (ReadOnly)
* **managedResourceGroupName**: string
* **managedVirtualNetwork**: string
* **managedVirtualNetworkSettings**: ManagedVirtualNetworkSettings
* **privateEndpointConnections**: PrivateEndpointConnection[]
* **provisioningState**: string (ReadOnly)
* **purviewConfiguration**: PurviewConfiguration
* **sqlAdministratorLogin**: string
* **sqlAdministratorLoginPassword**: string
* **virtualNetworkProfile**: VirtualNetworkProfile
* **workspaceRepositoryConfiguration**: WorkspaceRepositoryConfiguration
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
* **cmk**: CustomerManagedKeyDetails
* **doubleEncryptionEnabled**: bool (ReadOnly)

## CustomerManagedKeyDetails
### Properties
* **key**: WorkspaceKeyDetails
* **status**: string (ReadOnly)

## WorkspaceKeyDetails
### Properties
* **keyVaultUrl**: string
* **name**: string

## WorkspacePropertiesExtraProperties
### Properties

## ManagedVirtualNetworkSettings
### Properties
* **allowedAadTenantIdsForLinking**: string[]
* **linkedAccessCheckOnTargetResource**: bool
* **preventDataExfiltration**: bool

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: PrivateEndpointConnectionProperties
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
* **storageAccountAccessKey**: string
* **storageAccountSubscriptionId**: string
* **storageEndpoint**: string

## BigDataPoolResourceProperties
### Properties
* **autoPause**: AutoPauseProperties
* **autoScale**: AutoScaleProperties
* **cacheSize**: int
* **creationDate**: string
* **customLibraries**: LibraryInfo[]
* **defaultSparkLogFolder**: string
* **dynamicExecutorAllocation**: DynamicExecutorAllocation
* **isComputeIsolationEnabled**: bool
* **lastSucceededTimestamp**: string (ReadOnly)
* **libraryRequirements**: LibraryRequirements
* **nodeCount**: int
* **nodeSize**: 'Large' | 'Medium' | 'None' | 'Small' | 'XLarge' | 'XXLarge' | 'XXXLarge'
* **nodeSizeFamily**: 'MemoryOptimized' | 'None'
* **provisioningState**: string
* **sessionLevelPackagesEnabled**: bool
* **sparkConfigProperties**: LibraryRequirements
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
* **typeProperties**: ManagedIntegrationRuntimeTypeProperties (Required)

### SelfHostedIntegrationRuntime
#### Properties
* **type**: 'SelfHosted' (Required)
* **typeProperties**: SelfHostedIntegrationRuntimeTypeProperties


## ManagedIntegrationRuntime
### Properties
* **state**: 'AccessDenied' | 'Initial' | 'Limited' | 'NeedRegistration' | 'Offline' | 'Online' | 'Started' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **type**: 'Managed' (Required)
* **typeProperties**: ManagedIntegrationRuntimeTypeProperties (Required)

## ManagedIntegrationRuntimeTypeProperties
### Properties
* **computeProperties**: IntegrationRuntimeComputeProperties
* **ssisProperties**: IntegrationRuntimeSsisProperties

## IntegrationRuntimeComputeProperties
### Properties
* **dataFlowProperties**: IntegrationRuntimeDataFlowProperties
* **location**: string
* **maxParallelExecutionsPerNode**: int
* **nodeSize**: string
* **numberOfNodes**: int
* **vNetProperties**: IntegrationRuntimeVNetProperties

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
* **catalogInfo**: IntegrationRuntimeSsisCatalogInfo
* **customSetupScriptProperties**: IntegrationRuntimeCustomSetupScriptProperties
* **dataProxyProperties**: IntegrationRuntimeDataProxyProperties
* **edition**: 'Enterprise' | 'Standard'
* **expressCustomSetupProperties**: CustomSetupBase[]
* **licenseType**: 'BasePrice' | 'LicenseIncluded'

## IntegrationRuntimeSsisCatalogInfo
### Properties
* **catalogAdminPassword**: SecureString
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
* **sasToken**: SecureString

## IntegrationRuntimeDataProxyProperties
### Properties
* **connectVia**: EntityReference
* **path**: string
* **stagingLinkedService**: EntityReference

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
* **typeProperties**: CmdkeySetupTypeProperties (Required)

### ComponentSetup
#### Properties
* **type**: 'ComponentSetup' (Required)
* **typeProperties**: LicensedComponentSetupTypeProperties (Required)

### EnvironmentVariableSetup
#### Properties
* **type**: 'EnvironmentVariableSetup' (Required)
* **typeProperties**: EnvironmentVariableSetupTypeProperties (Required)


## CmdkeySetup
### Properties
* **type**: 'CmdkeySetup' (Required)
* **typeProperties**: CmdkeySetupTypeProperties (Required)

## CmdkeySetupTypeProperties
### Properties
* **password**: SecretBase (Required)

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
* **typeProperties**: LicensedComponentSetupTypeProperties (Required)

## LicensedComponentSetupTypeProperties
### Properties
* **componentName**: string (Required)
* **licenseKey**: SecretBase

## EnvironmentVariableSetup
### Properties
* **type**: 'EnvironmentVariableSetup' (Required)
* **typeProperties**: EnvironmentVariableSetupTypeProperties (Required)

## EnvironmentVariableSetupTypeProperties
### Properties
* **variableName**: string (Required)
* **variableValue**: string (Required)

## SelfHostedIntegrationRuntime
### Properties
* **type**: 'SelfHosted' (Required)
* **typeProperties**: SelfHostedIntegrationRuntimeTypeProperties

## SelfHostedIntegrationRuntimeTypeProperties
### Properties
* **linkedInfo**: LinkedIntegrationRuntimeType

## LinkedIntegrationRuntimeType
* **Discriminator**: authorizationType

### Base Properties
### LinkedIntegrationRuntimeKeyAuthorization
#### Properties
* **authorizationType**: 'Key' (Required)
* **key**: SecureString (Required)

### LinkedIntegrationRuntimeRbacAuthorization
#### Properties
* **authorizationType**: 'RBAC' (Required)
* **resourceId**: string (Required)


## LinkedIntegrationRuntimeKeyAuthorization
### Properties
* **authorizationType**: 'Key' (Required)
* **key**: SecureString (Required)

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
* **grantSqlControlToManagedIdentity**: ManagedIdentitySqlControlSettingsModelPropertiesGrantSqlControlToManagedIdentity

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

## DataMaskingRuleProperties
### Properties
* **aliasName**: string
* **columnName**: string (Required)
* **id**: string (ReadOnly)
* **numberFrom**: string
* **numberTo**: string
* **prefixSize**: string
* **replacementString**: string
* **schemaName**: string (Required)
* **suffixSize**: string
* **tableName**: string (Required)

## GeoBackupPolicyProperties
### Properties
* **storageType**: string (ReadOnly)

## MaintenanceWindowsProperties
### Properties
* **timeRanges**: MaintenanceWindowTimeRange[]

## MaintenanceWindowTimeRange
### Properties
* **dayOfWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'
* **duration**: string
* **startTime**: string

## MetadataSyncConfigProperties
### Properties
* **enabled**: bool
* **syncIntervalInMinutes**: int

## SecurityAlertPolicyProperties
### Properties
* **creationTime**: string (ReadOnly)
* **disabledAlerts**: string[]
* **emailAccountAdmins**: bool
* **emailAddresses**: string[]
* **retentionDays**: int
* **storageAccountAccessKey**: string
* **storageEndpoint**: string

## TransparentDataEncryptionProperties
### Properties

## SqlPoolVulnerabilityAssessmentProperties
### Properties
* **recurringScans**: VulnerabilityAssessmentRecurringScansProperties
* **storageAccountAccessKey**: string
* **storageContainerPath**: string
* **storageContainerSasKey**: string

## VulnerabilityAssessmentRecurringScansProperties
### Properties
* **emails**: string[]
* **emailSubscriptionAdmins**: bool
* **isEnabled**: bool

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
* **recurringScans**: VulnerabilityAssessmentRecurringScansProperties
* **storageAccountAccessKey**: string
* **storageContainerPath**: string (Required)
* **storageContainerSasKey**: string

