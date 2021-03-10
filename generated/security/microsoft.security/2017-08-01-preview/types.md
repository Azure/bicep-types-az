# Microsoft.Security @ 2017-08-01-preview

## Resource Microsoft.Security/advancedThreatProtectionSettings@2017-08-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AdvancedThreatProtectionProperties](#advancedthreatprotectionproperties)
* **type**: 'Microsoft.Security/advancedThreatProtectionSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Security/autoProvisioningSettings@2017-08-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AutoProvisioningSettingProperties](#autoprovisioningsettingproperties)
* **type**: 'Microsoft.Security/autoProvisioningSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Security/deviceSecurityGroups@2017-08-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DeviceSecurityGroupProperties](#devicesecuritygroupproperties)
* **type**: 'Microsoft.Security/deviceSecurityGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Security/informationProtectionPolicies@2017-08-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'custom' | 'effective' (Required, DeployTimeConstant)
* **properties**: [InformationProtectionPolicyProperties](#informationprotectionpolicyproperties)
* **type**: 'Microsoft.Security/informationProtectionPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Security/iotSecuritySolutions@2017-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IoTSecuritySolutionProperties](#iotsecuritysolutionproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Security/iotSecuritySolutions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Security/pricings@2017-08-01-preview
* **Valid Scope(s)**: Subscription, ResourceGroup
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PricingProperties](#pricingproperties)
* **type**: 'Microsoft.Security/pricings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Security/securityContacts@2017-08-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SecurityContactProperties](#securitycontactproperties)
* **type**: 'Microsoft.Security/securityContacts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Security/settings@2017-08-01-preview
* **Valid Scope(s)**: Subscription
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'MCAS' | 'WDATP' (Required, DeployTimeConstant)
* **type**: 'Microsoft.Security/settings' (ReadOnly, DeployTimeConstant)
### DataExportSetting
#### Properties
* **kind**: 'DataExportSetting' (Required)
* **properties**: [DataExportSettingProperties](#dataexportsettingproperties)


## Resource Microsoft.Security/workspaceSettings@2017-08-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkspaceSettingProperties](#workspacesettingproperties)
* **type**: 'Microsoft.Security/workspaceSettings' (ReadOnly, DeployTimeConstant)

## AdvancedThreatProtectionProperties
### Properties
* **isEnabled**: bool

## AutoProvisioningSettingProperties
### Properties
* **autoProvision**: 'Off' | 'On' (Required)

## DeviceSecurityGroupProperties
### Properties
* **allowlistRules**: [AllowlistCustomAlertRule](#allowlistcustomalertrule)[]
* **denylistRules**: [DenylistCustomAlertRule](#denylistcustomalertrule)[]
* **thresholdRules**: [ThresholdCustomAlertRule](#thresholdcustomalertrule)[]
* **timeWindowRules**: [TimeWindowCustomAlertRule](#timewindowcustomalertrule)[]

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

## InformationProtectionPolicyProperties
### Properties
* **informationTypes**: [Dictionary<string,InformationType>](#dictionarystringinformationtype)
* **labels**: [Dictionary<string,SensitivityLabel>](#dictionarystringsensitivitylabel)
* **lastModifiedUtc**: string (ReadOnly)
* **version**: string (ReadOnly)

## Dictionary<string,InformationType>
### Properties
### Additional Properties
* **Additional Properties Type**: [InformationType](#informationtype)

## InformationType
### Properties
* **custom**: bool
* **description**: string
* **displayName**: string
* **enabled**: bool
* **keywords**: [InformationProtectionKeyword](#informationprotectionkeyword)[]
* **order**: int
* **recommendedLabelId**: string

## InformationProtectionKeyword
### Properties
* **canBeNumeric**: bool
* **custom**: bool
* **excluded**: bool
* **pattern**: string

## Dictionary<string,SensitivityLabel>
### Properties
### Additional Properties
* **Additional Properties Type**: [SensitivityLabel](#sensitivitylabel)

## SensitivityLabel
### Properties
* **description**: string
* **displayName**: string
* **enabled**: bool
* **order**: int
* **rank**: 'Critical' | 'High' | 'Low' | 'Medium' | 'None'

## IoTSecuritySolutionProperties
### Properties
* **autoDiscoveredResources**: string[] (ReadOnly)
* **disabledDataSources**: 'TwinData'[]
* **displayName**: string (Required)
* **export**: 'RawEvents'[]
* **iotHubs**: string[] (Required)
* **recommendationsConfiguration**: [RecommendationConfigurationProperties](#recommendationconfigurationproperties)[]
* **status**: 'Disabled' | 'Enabled'
* **userDefinedResources**: [UserDefinedResourcesProperties](#userdefinedresourcesproperties)
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
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PricingProperties
### Properties
* **pricingTier**: 'Free' | 'Standard' (Required)

## SecurityContactProperties
### Properties
* **alertNotifications**: 'Off' | 'On' (Required)
* **alertsToAdmins**: 'Off' | 'On' (Required)
* **email**: string (Required)
* **phone**: string

## DataExportSetting
### Properties
* **kind**: 'DataExportSetting' (Required)
* **properties**: [DataExportSettingProperties](#dataexportsettingproperties)

## DataExportSettingProperties
### Properties
* **enabled**: bool (Required)

## WorkspaceSettingProperties
### Properties
* **scope**: string (Required)
* **workspaceId**: string (Required)

