# Microsoft.Security @ 2017-08-01-preview

## Microsoft.Security/advancedThreatProtectionSettings
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AdvancedThreatProtectionProperties
* **type**: 'Microsoft.Security/advancedThreatProtectionSettings' (ReadOnly, DeployTimeConstant)

## AdvancedThreatProtectionProperties
### Properties
* **isEnabled**: bool

## Microsoft.Security/autoProvisioningSettings
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AutoProvisioningSettingProperties
* **type**: 'Microsoft.Security/autoProvisioningSettings' (ReadOnly, DeployTimeConstant)

## AutoProvisioningSettingProperties
### Properties
* **autoProvision**: 'Off' | 'On' (Required)

## Microsoft.Security/deviceSecurityGroups
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DeviceSecurityGroupProperties
* **type**: 'Microsoft.Security/deviceSecurityGroups' (ReadOnly, DeployTimeConstant)

## DeviceSecurityGroupProperties
### Properties
* **allowlistRules**: AllowlistCustomAlertRule[]
* **denylistRules**: DenylistCustomAlertRule[]
* **thresholdRules**: ThresholdCustomAlertRule[]
* **timeWindowRules**: TimeWindowCustomAlertRule[]

## AllowlistCustomAlertRule
### Properties
* **allowlistValues**: string[] (Required)
* **description**: string (ReadOnly)
* **displayName**: string (ReadOnly)
* **isEnabled**: bool (Required)
* **valueType**: 'IpCidr' | 'String' (ReadOnly)

## DenylistCustomAlertRule
### Properties
* **denylistValues**: string[] (Required)
* **description**: string (ReadOnly)
* **displayName**: string (ReadOnly)
* **isEnabled**: bool (Required)
* **valueType**: 'IpCidr' | 'String' (ReadOnly)

## ThresholdCustomAlertRule
### Properties
* **description**: string (ReadOnly)
* **displayName**: string (ReadOnly)
* **isEnabled**: bool (Required)
* **maxThreshold**: int (Required)
* **minThreshold**: int (Required)

## TimeWindowCustomAlertRule
### Properties
* **description**: string (ReadOnly)
* **displayName**: string (ReadOnly)
* **isEnabled**: bool (Required)
* **maxThreshold**: int (Required)
* **minThreshold**: int (Required)
* **timeWindowSize**: string (Required)

## Microsoft.Security/informationProtectionPolicies
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'custom' | 'effective' (Required, DeployTimeConstant)
* **properties**: InformationProtectionPolicyProperties
* **type**: 'Microsoft.Security/informationProtectionPolicies' (ReadOnly, DeployTimeConstant)

## InformationProtectionPolicyProperties
### Properties
* **informationTypes**: Dictionary<string,InformationType>
* **labels**: Dictionary<string,SensitivityLabel>
* **lastModifiedUtc**: string (ReadOnly)
* **version**: string (ReadOnly)

## Dictionary<string,InformationType>
### Additional Properties
* **Additional Properties Type**: InformationType

## InformationType
### Properties
* **custom**: bool
* **description**: string
* **displayName**: string
* **enabled**: bool
* **keywords**: InformationProtectionKeyword[]
* **order**: int
* **recommendedLabelId**: string

## InformationProtectionKeyword
### Properties
* **canBeNumeric**: bool
* **custom**: bool
* **excluded**: bool
* **pattern**: string

## Dictionary<string,SensitivityLabel>
### Additional Properties
* **Additional Properties Type**: SensitivityLabel

## SensitivityLabel
### Properties
* **description**: string
* **displayName**: string
* **enabled**: bool
* **order**: int
* **rank**: 'Critical' | 'High' | 'Low' | 'Medium' | 'None'

## Microsoft.Security/iotSecuritySolutions
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IoTSecuritySolutionProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Security/iotSecuritySolutions' (ReadOnly, DeployTimeConstant)

## IoTSecuritySolutionProperties
### Properties
* **autoDiscoveredResources**: string[] (ReadOnly)
* **disabledDataSources**: 'TwinData'[]
* **displayName**: string (Required)
* **export**: 'RawEvents'[]
* **iotHubs**: string[] (Required)
* **recommendationsConfiguration**: RecommendationConfigurationProperties[]
* **status**: 'Disabled' | 'Enabled'
* **userDefinedResources**: UserDefinedResourcesProperties
* **workspace**: string (Required)

## RecommendationConfigurationProperties
### Properties
* **name**: string (ReadOnly)
* **recommendationType**: 'IoT_ACRAuthentication' | 'IoT_AgentSendsUnutilizedMessages' | 'IoT_Baseline' | 'IoT_EdgeHubMemOptimize' | 'IoT_EdgeLoggingOptions' | 'IoT_InconsistentModuleSettings' | 'IoT_InstallAgent' | 'IoT_IPFilter_DenyAll' | 'IoT_IPFilter_PermissiveRule' | 'IoT_OpenPorts' | 'IoT_PermissiveFirewallPolicy' | 'IoT_PermissiveInputFirewallRules' | 'IoT_PermissiveOutputFirewallRules' | 'IoT_PrivilegedDockerOptions' | 'IoT_SharedCredentials' | 'IoT_VulnerableTLSCipherSuite' (Required)
* **status**: 'Disabled' | 'Enabled' (Required)

## UserDefinedResourcesProperties
### Properties
* **query**: string (Required)
* **querySubscriptions**: string[] (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Security/pricings
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PricingProperties
* **type**: 'Microsoft.Security/pricings' (ReadOnly, DeployTimeConstant)

## PricingProperties
### Properties
* **pricingTier**: 'Free' | 'Standard' (Required)

## Microsoft.Security/pricings
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PricingProperties
* **type**: 'Microsoft.Security/pricings' (ReadOnly, DeployTimeConstant)

## Microsoft.Security/securityContacts
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SecurityContactProperties
* **type**: 'Microsoft.Security/securityContacts' (ReadOnly, DeployTimeConstant)

## SecurityContactProperties
### Properties
* **alertNotifications**: 'Off' | 'On' (Required)
* **alertsToAdmins**: 'Off' | 'On' (Required)
* **email**: string (Required)
* **phone**: string

## Microsoft.Security/settings
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'MCAS' | 'WDATP' (Required, DeployTimeConstant)
* **type**: 'Microsoft.Security/settings' (ReadOnly, DeployTimeConstant)
### DataExportSetting
#### Properties
* **kind**: 'DataExportSetting' (Required)
* **properties**: DataExportSettingProperties


## DataExportSetting
### Properties
* **kind**: 'DataExportSetting' (Required)
* **properties**: DataExportSettingProperties

## DataExportSettingProperties
### Properties
* **enabled**: bool (Required)

## Microsoft.Security/workspaceSettings
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkspaceSettingProperties
* **type**: 'Microsoft.Security/workspaceSettings' (ReadOnly, DeployTimeConstant)

## WorkspaceSettingProperties
### Properties
* **scope**: string (Required)
* **workspaceId**: string (Required)

