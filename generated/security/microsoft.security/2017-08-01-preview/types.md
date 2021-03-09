# Microsoft.Security @ 2017-08-01-preview

## Resource Microsoft.Security/advancedThreatProtectionSettings@2017-08-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'current' (Required, DeployTimeConstant)
* **properties**: AdvancedThreatProtectionProperties
* **type**: 'Microsoft.Security/advancedThreatProtectionSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Security/autoProvisioningSettings@2017-08-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AutoProvisioningSettingProperties
* **type**: 'Microsoft.Security/autoProvisioningSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Security/deviceSecurityGroups@2017-08-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DeviceSecurityGroupProperties
* **type**: 'Microsoft.Security/deviceSecurityGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Security/informationProtectionPolicies@2017-08-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'custom' | 'effective' (Required, DeployTimeConstant)
* **properties**: InformationProtectionPolicyProperties
* **type**: 'Microsoft.Security/informationProtectionPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Security/iotSecuritySolutions@2017-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IoTSecuritySolutionProperties
* **tags**: TagsResourceTags
* **type**: 'Microsoft.Security/iotSecuritySolutions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Security/pricings@2017-08-01-preview
* **Valid Scope(s)**: Subscription, ResourceGroup
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PricingProperties
* **type**: 'Microsoft.Security/pricings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Security/securityContacts@2017-08-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SecurityContactProperties
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
* **properties**: DataExportSettingProperties


## Resource Microsoft.Security/workspaceSettings@2017-08-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkspaceSettingProperties
* **type**: 'Microsoft.Security/workspaceSettings' (ReadOnly, DeployTimeConstant)

## AdvancedThreatProtectionProperties
### Properties
* **isEnabled**: bool

## AutoProvisioningSettingProperties
### Properties
* **autoProvision**: 'Off' | 'On' (Required)

## DeviceSecurityGroupProperties
### Properties
* **allowlistRules**: AllowlistCustomAlertRule[]
* **denylistRules**: DenylistCustomAlertRule[]
* **thresholdRules**: ThresholdCustomAlertRule[]
* **timeWindowRules**: TimeWindowCustomAlertRule[]

## AllowlistCustomAlertRule
* **Discriminator**: ruleType

### Base Properties
* **allowlistValues**: string[] (Required)
* **description**: string (ReadOnly)
* **displayName**: string (ReadOnly)
* **isEnabled**: bool (Required)
* **valueType**: 'IpCidr' | 'String' (ReadOnly)
### ConnectionToIpNotAllowed
#### Properties
* **ruleType**: 'ConnectionToIpNotAllowed' (Required)

### LocalUserNotAllowed
#### Properties
* **ruleType**: 'LocalUserNotAllowed' (Required)

### ProcessNotAllowed
#### Properties
* **ruleType**: 'ProcessNotAllowed' (Required)


## ConnectionToIpNotAllowed
### Properties
* **ruleType**: 'ConnectionToIpNotAllowed' (Required)

## LocalUserNotAllowed
### Properties
* **ruleType**: 'LocalUserNotAllowed' (Required)

## ProcessNotAllowed
### Properties
* **ruleType**: 'ProcessNotAllowed' (Required)

## DenylistCustomAlertRule
### Properties
* **denylistValues**: string[] (Required)
* **description**: string (ReadOnly)
* **displayName**: string (ReadOnly)
* **isEnabled**: bool (Required)
* **ruleType**: string (Required)
* **valueType**: 'IpCidr' | 'String' (ReadOnly)

## ThresholdCustomAlertRule
* **Discriminator**: ruleType

### Base Properties
* **description**: string (ReadOnly)
* **displayName**: string (ReadOnly)
* **isEnabled**: bool (Required)
* **maxThreshold**: int (Required)
* **minThreshold**: int (Required)
### ActiveConnectionsNotInAllowedRange
#### Properties
* **ruleType**: 'ActiveConnectionsNotInAllowedRange' (Required)

### AmqpC2DMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'AmqpC2DMessagesNotInAllowedRange' (Required)

### AmqpC2DRejectedMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'AmqpC2DRejectedMessagesNotInAllowedRange' (Required)

### AmqpD2CMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'AmqpD2CMessagesNotInAllowedRange' (Required)

### DirectMethodInvokesNotInAllowedRange
#### Properties
* **ruleType**: 'DirectMethodInvokesNotInAllowedRange' (Required)

### FailedLocalLoginsNotInAllowedRange
#### Properties
* **ruleType**: 'FailedLocalLoginsNotInAllowedRange' (Required)

### FileUploadsNotInAllowedRange
#### Properties
* **ruleType**: 'FileUploadsNotInAllowedRange' (Required)

### HttpC2DMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'HttpC2DMessagesNotInAllowedRange' (Required)

### HttpC2DRejectedMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'HttpC2DRejectedMessagesNotInAllowedRange' (Required)

### HttpD2CMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'HttpD2CMessagesNotInAllowedRange' (Required)

### MqttC2DMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'MqttC2DMessagesNotInAllowedRange' (Required)

### MqttC2DRejectedMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'MqttC2DRejectedMessagesNotInAllowedRange' (Required)

### MqttD2CMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'MqttD2CMessagesNotInAllowedRange' (Required)

### QueuePurgesNotInAllowedRange
#### Properties
* **ruleType**: 'QueuePurgesNotInAllowedRange' (Required)

### TwinUpdatesNotInAllowedRange
#### Properties
* **ruleType**: 'TwinUpdatesNotInAllowedRange' (Required)

### UnauthorizedOperationsNotInAllowedRange
#### Properties
* **ruleType**: 'UnauthorizedOperationsNotInAllowedRange' (Required)


## ActiveConnectionsNotInAllowedRange
### Properties
* **ruleType**: 'ActiveConnectionsNotInAllowedRange' (Required)

## AmqpC2DMessagesNotInAllowedRange
### Properties
* **ruleType**: 'AmqpC2DMessagesNotInAllowedRange' (Required)

## AmqpC2DRejectedMessagesNotInAllowedRange
### Properties
* **ruleType**: 'AmqpC2DRejectedMessagesNotInAllowedRange' (Required)

## AmqpD2CMessagesNotInAllowedRange
### Properties
* **ruleType**: 'AmqpD2CMessagesNotInAllowedRange' (Required)

## DirectMethodInvokesNotInAllowedRange
### Properties
* **ruleType**: 'DirectMethodInvokesNotInAllowedRange' (Required)

## FailedLocalLoginsNotInAllowedRange
### Properties
* **ruleType**: 'FailedLocalLoginsNotInAllowedRange' (Required)

## FileUploadsNotInAllowedRange
### Properties
* **ruleType**: 'FileUploadsNotInAllowedRange' (Required)

## HttpC2DMessagesNotInAllowedRange
### Properties
* **ruleType**: 'HttpC2DMessagesNotInAllowedRange' (Required)

## HttpC2DRejectedMessagesNotInAllowedRange
### Properties
* **ruleType**: 'HttpC2DRejectedMessagesNotInAllowedRange' (Required)

## HttpD2CMessagesNotInAllowedRange
### Properties
* **ruleType**: 'HttpD2CMessagesNotInAllowedRange' (Required)

## MqttC2DMessagesNotInAllowedRange
### Properties
* **ruleType**: 'MqttC2DMessagesNotInAllowedRange' (Required)

## MqttC2DRejectedMessagesNotInAllowedRange
### Properties
* **ruleType**: 'MqttC2DRejectedMessagesNotInAllowedRange' (Required)

## MqttD2CMessagesNotInAllowedRange
### Properties
* **ruleType**: 'MqttD2CMessagesNotInAllowedRange' (Required)

## QueuePurgesNotInAllowedRange
### Properties
* **ruleType**: 'QueuePurgesNotInAllowedRange' (Required)

## TwinUpdatesNotInAllowedRange
### Properties
* **ruleType**: 'TwinUpdatesNotInAllowedRange' (Required)

## UnauthorizedOperationsNotInAllowedRange
### Properties
* **ruleType**: 'UnauthorizedOperationsNotInAllowedRange' (Required)

## TimeWindowCustomAlertRule
* **Discriminator**: ruleType

### Base Properties
* **description**: string (ReadOnly)
* **displayName**: string (ReadOnly)
* **isEnabled**: bool (Required)
* **maxThreshold**: int (Required)
* **minThreshold**: int (Required)
* **timeWindowSize**: string (Required)
### ActiveConnectionsNotInAllowedRange
#### Properties
* **ruleType**: 'ActiveConnectionsNotInAllowedRange' (Required)

### AmqpC2DMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'AmqpC2DMessagesNotInAllowedRange' (Required)

### AmqpC2DRejectedMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'AmqpC2DRejectedMessagesNotInAllowedRange' (Required)

### AmqpD2CMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'AmqpD2CMessagesNotInAllowedRange' (Required)

### DirectMethodInvokesNotInAllowedRange
#### Properties
* **ruleType**: 'DirectMethodInvokesNotInAllowedRange' (Required)

### FailedLocalLoginsNotInAllowedRange
#### Properties
* **ruleType**: 'FailedLocalLoginsNotInAllowedRange' (Required)

### FileUploadsNotInAllowedRange
#### Properties
* **ruleType**: 'FileUploadsNotInAllowedRange' (Required)

### HttpC2DMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'HttpC2DMessagesNotInAllowedRange' (Required)

### HttpC2DRejectedMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'HttpC2DRejectedMessagesNotInAllowedRange' (Required)

### HttpD2CMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'HttpD2CMessagesNotInAllowedRange' (Required)

### MqttC2DMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'MqttC2DMessagesNotInAllowedRange' (Required)

### MqttC2DRejectedMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'MqttC2DRejectedMessagesNotInAllowedRange' (Required)

### MqttD2CMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'MqttD2CMessagesNotInAllowedRange' (Required)

### QueuePurgesNotInAllowedRange
#### Properties
* **ruleType**: 'QueuePurgesNotInAllowedRange' (Required)

### TwinUpdatesNotInAllowedRange
#### Properties
* **ruleType**: 'TwinUpdatesNotInAllowedRange' (Required)

### UnauthorizedOperationsNotInAllowedRange
#### Properties
* **ruleType**: 'UnauthorizedOperationsNotInAllowedRange' (Required)


## InformationProtectionPolicyProperties
### Properties
* **informationTypes**: InformationProtectionPolicyPropertiesInformationTypes
* **labels**: InformationProtectionPolicyPropertiesLabels
* **lastModifiedUtc**: string (ReadOnly)
* **version**: string (ReadOnly)

## InformationProtectionPolicyPropertiesInformationTypes
### Properties
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

## InformationProtectionPolicyPropertiesLabels
### Properties
### Additional Properties
* **Additional Properties Type**: SensitivityLabel

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
* **recommendationsConfiguration**: RecommendationConfigurationProperties[]
* **status**: 'Disabled' | 'Enabled'
* **userDefinedResources**: UserDefinedResourcesProperties
* **workspace**: string (Required)

## RecommendationConfigurationProperties
### Properties
* **name**: string (ReadOnly)
* **recommendationType**: 'IoT_ACRAuthentication' | 'IoT_AgentSendsUnutilizedMessages' | 'IoT_Baseline' | 'IoT_EdgeHubMemOptimize' | 'IoT_EdgeLoggingOptions' | 'IoT_IPFilter_DenyAll' | 'IoT_IPFilter_PermissiveRule' | 'IoT_InconsistentModuleSettings' | 'IoT_InstallAgent' | 'IoT_OpenPorts' | 'IoT_PermissiveFirewallPolicy' | 'IoT_PermissiveInputFirewallRules' | 'IoT_PermissiveOutputFirewallRules' | 'IoT_PrivilegedDockerOptions' | 'IoT_SharedCredentials' | 'IoT_VulnerableTLSCipherSuite' (Required)
* **status**: 'Disabled' | 'Enabled' (Required)

## UserDefinedResourcesProperties
### Properties
* **query**: string (Required)
* **querySubscriptions**: string[] (Required)

## TagsResourceTags
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
* **properties**: DataExportSettingProperties

## DataExportSettingProperties
### Properties
* **enabled**: bool (Required)

## WorkspaceSettingProperties
### Properties
* **scope**: string (Required)
* **workspaceId**: string (Required)

