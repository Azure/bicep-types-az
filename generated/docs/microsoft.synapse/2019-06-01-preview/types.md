# Microsoft.Synapse @ 2019-06-01-preview

## Microsoft.Synapse/privateLinkHubs
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateLinkHubProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Synapse/privateLinkHubs' (ReadOnly, DeployTimeConstant)

## PrivateLinkHubProperties
### Properties
* **provisioningState**: 'Failed' | 'Succeeded' (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Synapse/workspaces/administrators
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AadAdminProperties
* **type**: 'Microsoft.Synapse/workspaces/administrators' (ReadOnly, DeployTimeConstant)

## AadAdminProperties
### Properties
* **administratorType**: string
* **login**: string
* **sid**: string
* **tenantId**: string

## Microsoft.Synapse/workspaces/bigDataPools
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BigDataPoolResourceProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Synapse/workspaces/bigDataPools' (ReadOnly, DeployTimeConstant)

## BigDataPoolResourceProperties
### Properties
* **autoPause**: AutoPauseProperties
* **autoScale**: AutoScaleProperties
* **creationDate**: string
* **defaultSparkLogFolder**: string
* **isComputeIsolationEnabled**: bool
* **libraryRequirements**: LibraryRequirements
* **nodeCount**: int
* **nodeSize**: 'Large' | 'Medium' | 'None' | 'Small' | 'XLarge' | 'XXLarge'
* **nodeSizeFamily**: 'MemoryOptimized' | 'None'
* **provisioningState**: string
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

## LibraryRequirements
### Properties
* **content**: string
* **filename**: string
* **time**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Synapse/workspaces/firewallRules
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IpFirewallRuleProperties
* **type**: 'Microsoft.Synapse/workspaces/firewallRules' (ReadOnly, DeployTimeConstant)

## IpFirewallRuleProperties
### Properties
* **endIpAddress**: string
* **provisioningState**: 'DeleteError' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **startIpAddress**: string

## Microsoft.Synapse/workspaces/integrationRuntimes
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationRuntime (Required)
* **type**: 'Microsoft.Synapse/workspaces/integrationRuntimes' (ReadOnly, DeployTimeConstant)

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

## Microsoft.Synapse/workspaces/managedIdentitySqlControlSettings
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:93_properties
* **type**: 'Microsoft.Synapse/workspaces/managedIdentitySqlControlSettings' (ReadOnly, DeployTimeConstant)

## schemas:93_properties
### Properties
* **grantSqlControlToManagedIdentity**: schemas:93_properties_grantSqlControlToManagedIdentity

## schemas:93_properties_grantSqlControlToManagedIdentity
### Properties
* **actualState**: 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | 'Unknown' (ReadOnly)
* **desiredState**: 'Disabled' | 'Enabled'

## Microsoft.Synapse/workspaces/sqlPools/auditingSettings
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SqlPoolBlobAuditingPolicyProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/auditingSettings' (ReadOnly, DeployTimeConstant)

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

## Microsoft.Synapse/workspaces/sqlPools/metadataSync
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:27_properties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/metadataSync' (ReadOnly, DeployTimeConstant)

## schemas:27_properties
### Properties
* **enabled**: bool

## Microsoft.Synapse/workspaces/sqlPools/schemas/tables/columns/sensitivityLabels
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SensitivityLabelProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/schemas/tables/columns/sensitivityLabels' (ReadOnly, DeployTimeConstant)

## SensitivityLabelProperties
### Properties
* **informationType**: string
* **informationTypeId**: string
* **isDisabled**: bool (ReadOnly)
* **labelId**: string
* **labelName**: string

## Microsoft.Synapse/workspaces/sqlPools/securityAlertPolicies
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SecurityAlertPolicyProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/securityAlertPolicies' (ReadOnly, DeployTimeConstant)

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

## Microsoft.Synapse/workspaces/sqlPools/transparentDataEncryption
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: TransparentDataEncryptionProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/transparentDataEncryption' (ReadOnly, DeployTimeConstant)

## TransparentDataEncryptionProperties
### Properties
* **status**: 'Disabled' | 'Enabled'

## Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments/rules/baselines
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' | 'master' (Required, DeployTimeConstant)
* **properties**: SqlPoolVulnerabilityAssessmentRuleBaselineProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments/rules/baselines' (ReadOnly, DeployTimeConstant)

## SqlPoolVulnerabilityAssessmentRuleBaselineProperties
### Properties
* **baselineResults**: SqlPoolVulnerabilityAssessmentRuleBaselineItem[] (Required)

## SqlPoolVulnerabilityAssessmentRuleBaselineItem
### Properties
* **result**: string[] (Required)

## Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SqlPoolVulnerabilityAssessmentProperties
* **type**: 'Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant)

## SqlPoolVulnerabilityAssessmentProperties
### Properties
* **recurringScans**: VulnerabilityAssessmentRecurringScansProperties
* **storageAccountAccessKey**: string
* **storageContainerPath**: string
* **storageContainerSasKey**: string

## VulnerabilityAssessmentRecurringScansProperties
### Properties
* **emailSubscriptionAdmins**: bool
* **emails**: string[]
* **isEnabled**: bool

## Microsoft.Synapse/workspaces/sqlPools
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SqlPoolResourceProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Synapse/workspaces/sqlPools' (ReadOnly, DeployTimeConstant)

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
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Synapse/workspaces
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ManagedIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkspaceProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Synapse/workspaces' (ReadOnly, DeployTimeConstant)

## ManagedIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned'

## WorkspaceProperties
### Properties
* **connectivityEndpoints**: Dictionary<string,String>
* **defaultDataLakeStorage**: DataLakeStorageAccountDetails
* **extraProperties**: Dictionary<string,Object> (ReadOnly)
* **managedResourceGroupName**: string
* **managedVirtualNetwork**: string
* **privateEndpointConnections**: PrivateEndpointConnection[]
* **provisioningState**: string (ReadOnly)
* **sqlAdministratorLogin**: string
* **sqlAdministratorLoginPassword**: string
* **virtualNetworkProfile**: VirtualNetworkProfile

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## DataLakeStorageAccountDetails
### Properties
* **accountUrl**: string
* **filesystem**: string

## Dictionary<string,Object>
### Additional Properties
* **Additional Properties Type**: any

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: PrivateEndpointConnectionProperties
* **type**: string (ReadOnly)

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
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected'

## VirtualNetworkProfile
### Properties
* **computeSubnetId**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

