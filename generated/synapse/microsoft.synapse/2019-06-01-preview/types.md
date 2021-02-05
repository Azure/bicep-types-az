# Microsoft.Synapse @ 2019-06-01-preview

## Resource Microsoft.Synapse/privateLinkHubs@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateLinkHubProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Synapse/privateLinkHubs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ManagedIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkspaceProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Synapse/workspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/administrators@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AadAdminProperties
* **type**: 'Microsoft.Synapse/workspaces/administrators' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/auditingSettings@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServerBlobAuditingPolicyProperties
* **type**: 'Microsoft.Synapse/workspaces/auditingSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/bigDataPools@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BigDataPoolResourceProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Synapse/workspaces/bigDataPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/extendedAuditingSettings@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExtendedServerBlobAuditingPolicyProperties
* **type**: 'Microsoft.Synapse/workspaces/extendedAuditingSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/firewallRules@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IpFirewallRuleProperties
* **type**: 'Microsoft.Synapse/workspaces/firewallRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/integrationRuntimes@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationRuntime (Required)
* **type**: 'Microsoft.Synapse/workspaces/integrationRuntimes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/keys@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: KeyProperties
* **type**: 'Microsoft.Synapse/workspaces/keys' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/managedIdentitySqlControlSettings@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:129_properties
* **type**: 'Microsoft.Synapse/workspaces/managedIdentitySqlControlSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/privateEndpointConnections@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.Synapse/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/securityAlertPolicies@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServerSecurityAlertPolicyProperties
* **type**: 'Microsoft.Synapse/workspaces/securityAlertPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlAdministrators@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AadAdminProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlAdministrators' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SqlPoolResourceProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Synapse/workspaces/sqlPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/auditingSettings@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SqlPoolBlobAuditingPolicyProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/auditingSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **managedBy**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DataMaskingPolicyProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies/rules@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DataMaskingRuleProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies/rules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/extendedAuditingSettings@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExtendedSqlPoolBlobAuditingPolicyProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/extendedAuditingSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/geoBackupPolicies@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: GeoBackupPolicyProperties (Required)
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/geoBackupPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/maintenancewindows@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MaintenanceWindowsProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/maintenancewindows' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/metadataSync@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:28_properties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/metadataSync' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/schemas/tables/columns/sensitivityLabels@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **managedBy**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SensitivityLabelProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/schemas/tables/columns/sensitivityLabels' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/securityAlertPolicies@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SecurityAlertPolicyProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/securityAlertPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/transparentDataEncryption@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: TransparentDataEncryptionProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/transparentDataEncryption' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SqlPoolVulnerabilityAssessmentProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments/rules/baselines@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' | 'master' (Required, DeployTimeConstant)
* **properties**: SqlPoolVulnerabilityAssessmentRuleBaselineProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments/rules/baselines' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/workloadGroups@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkloadGroupProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/workloadGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools/workloadGroups/workloadClassifiers@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkloadClassifierProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/workloadGroups/workloadClassifiers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/vulnerabilityAssessments@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
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

## Dictionary<string,String>
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
* **connectivityEndpoints**: Dictionary<string,String>
* **defaultDataLakeStorage**: DataLakeStorageAccountDetails
* **encryption**: EncryptionDetails
* **extraProperties**: Dictionary<string,Object> (ReadOnly)
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

## Dictionary<string,String>
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

## Dictionary<string,Object>
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

## Dictionary<string,String>
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
* **autoPause**: AutoPauseProperties
* **autoScale**: AutoScaleProperties
* **cacheSize**: int
* **creationDate**: string
* **customLibraries**: LibraryResourceProperties[]
* **defaultSparkLogFolder**: string
* **dynamicExecutorAllocation**: DynamicExecutorAllocation
* **isComputeIsolationEnabled**: bool
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

## LibraryResourceProperties
### Properties
* **containerName**: string (ReadOnly)
* **creatorId**: string (ReadOnly)
* **name**: string (ReadOnly)
* **path**: string (ReadOnly)
* **provisioningStatus**: string (ReadOnly)
* **type**: string (ReadOnly)
* **uploadedTimestamp**: string (ReadOnly)

## DynamicExecutorAllocation
### Properties
* **enabled**: bool

## LibraryRequirements
### Properties
* **content**: string
* **filename**: string
* **time**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
### Managed
#### Properties
* **state**: 'AccessDenied' | 'Initial' | 'Limited' | 'NeedRegistration' | 'Offline' | 'Online' | 'Started' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **type**: 'Managed' (Required)
* **typeProperties**: ManagedIntegrationRuntimeTypeProperties (Required)

### SelfHosted
#### Properties
* **type**: 'SelfHosted' (Required)
* **typeProperties**: SelfHostedIntegrationRuntimeTypeProperties


## Managed
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
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeDataFlowProperties
### Properties
* **computeType**: 'ComputeOptimized' | 'General' | 'MemoryOptimized'
* **coreCount**: int
* **timeToLive**: int
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeVNetProperties
### Properties
* **publicIPs**: string[]
* **subnet**: string
* **vNetId**: string
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeSsisProperties
### Properties
* **catalogInfo**: IntegrationRuntimeSsisCatalogInfo
* **customSetupScriptProperties**: IntegrationRuntimeCustomSetupScriptProperties
* **dataProxyProperties**: IntegrationRuntimeDataProxyProperties
* **edition**: 'Enterprise' | 'Standard'
* **expressCustomSetupProperties**: CustomSetupBase[]
* **licenseType**: 'BasePrice' | 'LicenseIncluded'
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeSsisCatalogInfo
### Properties
* **catalogAdminPassword**: SecureString
* **catalogAdminUserName**: string
* **catalogPricingTier**: 'Basic' | 'Premium' | 'PremiumRS' | 'Standard'
* **catalogServerEndpoint**: string
### Additional Properties
* **Additional Properties Type**: any

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

## SelfHosted
### Properties
* **type**: 'SelfHosted' (Required)
* **typeProperties**: SelfHostedIntegrationRuntimeTypeProperties

## SelfHostedIntegrationRuntimeTypeProperties
### Properties
* **linkedInfo**: LinkedIntegrationRuntimeType

## LinkedIntegrationRuntimeType
* **Discriminator**: authorizationType
### Base Properties
### Key
#### Properties
* **authorizationType**: 'Key' (Required)
* **key**: SecureString (Required)

### RBAC
#### Properties
* **authorizationType**: 'RBAC' (Required)
* **resourceId**: string (Required)


## Key
### Properties
* **authorizationType**: 'Key' (Required)
* **key**: SecureString (Required)

## RBAC
### Properties
* **authorizationType**: 'RBAC' (Required)
* **resourceId**: string (Required)

## KeyProperties
### Properties
* **isActiveCMK**: bool
* **keyVaultUrl**: string

## schemas:129_properties
### Properties
* **grantSqlControlToManagedIdentity**: schemas:129_properties_grantSqlControlToManagedIdentity

## schemas:129_properties_grantSqlControlToManagedIdentity
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

## Sku
### Properties
* **capacity**: int
* **name**: string
* **tier**: string

## Dictionary<string,String>
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
* **timeRanges**: MaintenanceWindowTimeRange[]

## MaintenanceWindowTimeRange
### Properties
* **dayOfWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'
* **duration**: string
* **startTime**: string

## schemas:28_properties
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
* **recurringScans**: VulnerabilityAssessmentRecurringScansProperties
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
* **baselineResults**: SqlPoolVulnerabilityAssessmentRuleBaselineItem[] (Required)

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
* **recurringScans**: VulnerabilityAssessmentRecurringScansProperties
* **storageAccountAccessKey**: string
* **storageContainerPath**: string (Required)
* **storageContainerSasKey**: string

