# Microsoft.Security @ 2017-08-01-preview

## Resource Microsoft.Security/advancedThreatProtectionSettings@2017-08-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' | string (Required, DeployTimeConstant): The resource name
* **properties**: [AdvancedThreatProtectionProperties](#advancedthreatprotectionproperties): The Advanced Threat Protection settings.
* **type**: 'Microsoft.Security/advancedThreatProtectionSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/autoProvisioningSettings@2017-08-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AutoProvisioningSettingProperties](#autoprovisioningsettingproperties): Auto provisioning setting data
* **type**: 'Microsoft.Security/autoProvisioningSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/deviceSecurityGroups@2017-08-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeviceSecurityGroupProperties](#devicesecuritygroupproperties): Device Security group data
* **type**: 'Microsoft.Security/deviceSecurityGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/informationProtectionPolicies@2017-08-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'custom' | 'effective' | string (Required, DeployTimeConstant): The resource name
* **properties**: [InformationProtectionPolicyProperties](#informationprotectionpolicyproperties): Information protection policy data
* **type**: 'Microsoft.Security/informationProtectionPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/iotSecuritySolutions@2017-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IoTSecuritySolutionProperties](#iotsecuritysolutionproperties): Security Solution data
* **tags**: [TagsResourceTags](#tagsresourcetags): Resource tags
* **type**: 'Microsoft.Security/iotSecuritySolutions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/pricings@2017-08-01-preview
* **Valid Scope(s)**: Subscription, ResourceGroup
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PricingProperties](#pricingproperties): Pricing data
* **type**: 'Microsoft.Security/pricings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/securityContacts@2017-08-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityContactProperties](#securitycontactproperties): Security contact data
* **type**: 'Microsoft.Security/securityContacts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/settings@2017-08-01-preview
* **Valid Scope(s)**: Subscription
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'MCAS' | 'WDATP' | string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Security/settings' (ReadOnly, DeployTimeConstant): The resource type
### DataExportSetting
#### Properties
* **kind**: 'DataExportSetting' (Required): the kind of the settings string (DataExportSetting)
* **properties**: [DataExportSettingProperties](#dataexportsettingproperties): Data export setting data


## Resource Microsoft.Security/workspaceSettings@2017-08-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceSettingProperties](#workspacesettingproperties): Workspace setting data
* **type**: 'Microsoft.Security/workspaceSettings' (ReadOnly, DeployTimeConstant): The resource type

## AdvancedThreatProtectionProperties
### Properties
* **isEnabled**: bool: Indicates whether Advanced Threat Protection is enabled.

## AllowlistCustomAlertRule
* **Discriminator**: ruleType

### Base Properties
* **allowlistValues**: string[] (Required): The values to allow. The format of the values depends on the rule type.
* **description**: string (ReadOnly): The description of the custom alert.
* **displayName**: string (ReadOnly): The display name of the custom alert.
* **isEnabled**: bool (Required): Status of the custom alert.
* **valueType**: 'IpCidr' | 'String' | string (ReadOnly): The value type of the items in the list.
### ConnectionToIpNotAllowed
#### Properties
* **ruleType**: 'ConnectionToIpNotAllowed' (Required): The type of the custom alert rule.

### LocalUserNotAllowed
#### Properties
* **ruleType**: 'LocalUserNotAllowed' (Required): The type of the custom alert rule.

### ProcessNotAllowed
#### Properties
* **ruleType**: 'ProcessNotAllowed' (Required): The type of the custom alert rule.


## AutoProvisioningSettingProperties
### Properties
* **autoProvision**: 'Off' | 'On' | string (Required): Describes what kind of security agent provisioning action to take

## DataExportSettingProperties
### Properties
* **enabled**: bool (Required): Is the data export setting is enabled

## DenylistCustomAlertRule
### Properties
* **denylistValues**: string[] (Required): The values to deny. The format of the values depends on the rule type.
* **description**: string (ReadOnly): The description of the custom alert.
* **displayName**: string (ReadOnly): The display name of the custom alert.
* **isEnabled**: bool (Required): Status of the custom alert.
* **ruleType**: string (Required): The type of the custom alert rule.
* **valueType**: 'IpCidr' | 'String' | string (ReadOnly): The value type of the items in the list.

## DeviceSecurityGroupProperties
### Properties
* **allowlistRules**: [AllowlistCustomAlertRule](#allowlistcustomalertrule)[]: The allow-list custom alert rules.
* **denylistRules**: [DenylistCustomAlertRule](#denylistcustomalertrule)[]: The deny-list custom alert rules.
* **thresholdRules**: [ThresholdCustomAlertRule](#thresholdcustomalertrule)[]: The list of custom alert threshold rules.
* **timeWindowRules**: [TimeWindowCustomAlertRule](#timewindowcustomalertrule)[]: The list of custom alert time-window rules.

## InformationProtectionKeyword
### Properties
* **canBeNumeric**: bool: Indicates whether the keyword can be applied on numeric types or not.
* **custom**: bool: Indicates whether the keyword is custom or not.
* **excluded**: bool: Indicates whether the keyword is excluded or not.
* **pattern**: string: The keyword pattern.

## InformationProtectionPolicyProperties
### Properties
* **informationTypes**: [InformationProtectionPolicyPropertiesInformationTypes](#informationprotectionpolicypropertiesinformationtypes): The sensitivity information types.
* **labels**: [InformationProtectionPolicyPropertiesLabels](#informationprotectionpolicypropertieslabels): Dictionary of sensitivity labels.
* **lastModifiedUtc**: string (ReadOnly): Describes the last UTC time the policy was modified.
* **version**: string (ReadOnly): Describes the version of the policy.

## InformationProtectionPolicyPropertiesInformationTypes
### Properties
### Additional Properties
* **Additional Properties Type**: [InformationType](#informationtype)

## InformationProtectionPolicyPropertiesLabels
### Properties
### Additional Properties
* **Additional Properties Type**: [SensitivityLabel](#sensitivitylabel)

## InformationType
### Properties
* **custom**: bool: Indicates whether the information type is custom or not.
* **description**: string: The description of the information type.
* **displayName**: string: The name of the information type.
* **enabled**: bool: Indicates whether the information type is enabled or not.
* **keywords**: [InformationProtectionKeyword](#informationprotectionkeyword)[]: The information type keywords.
* **order**: int: The order of the information type.
* **recommendedLabelId**: string: The recommended label id to be associated with this information type.

## IoTSecuritySolutionProperties
### Properties
* **autoDiscoveredResources**: string[] (ReadOnly): List of resources that were automatically discovered as relevant to the security solution.
* **disabledDataSources**: 'TwinData' | string[]: Disabled data sources. Disabling these data sources compromises the system.
* **displayName**: string (Required): Resource display name.
* **export**: 'RawEvents' | string[]: List of additional export to workspace data options
* **iotHubs**: string[] (Required): IoT Hub resource IDs
* **recommendationsConfiguration**: [RecommendationConfigurationProperties](#recommendationconfigurationproperties)[]: List of recommendation configuration
* **status**: 'Disabled' | 'Enabled' | string: Security solution status
* **userDefinedResources**: [UserDefinedResourcesProperties](#userdefinedresourcesproperties): Properties of the solution's user defined resources.
* **workspace**: string (Required): Workspace resource ID

## PricingProperties
### Properties
* **pricingTier**: 'Free' | 'Standard' | string (Required): Pricing tier type

## RecommendationConfigurationProperties
### Properties
* **name**: string (ReadOnly)
* **recommendationType**: 'IoT_ACRAuthentication' | 'IoT_AgentSendsUnutilizedMessages' | 'IoT_Baseline' | 'IoT_EdgeHubMemOptimize' | 'IoT_EdgeLoggingOptions' | 'IoT_IPFilter_DenyAll' | 'IoT_IPFilter_PermissiveRule' | 'IoT_InconsistentModuleSettings' | 'IoT_InstallAgent' | 'IoT_OpenPorts' | 'IoT_PermissiveFirewallPolicy' | 'IoT_PermissiveInputFirewallRules' | 'IoT_PermissiveOutputFirewallRules' | 'IoT_PrivilegedDockerOptions' | 'IoT_SharedCredentials' | 'IoT_VulnerableTLSCipherSuite' | string (Required): The recommendation type.
* **status**: 'Disabled' | 'Enabled' | string (Required): Recommendation status. The recommendation is not generated when the status is disabled

## SecurityContactProperties
### Properties
* **alertNotifications**: 'Off' | 'On' | string (Required): Whether to send security alerts notifications to the security contact
* **alertsToAdmins**: 'Off' | 'On' | string (Required): Whether to send security alerts notifications to subscription admins
* **email**: string (Required): The email of this security contact
* **phone**: string: The phone number of this security contact

## SensitivityLabel
### Properties
* **description**: string: The description of the sensitivity label.
* **displayName**: string: The name of the sensitivity label.
* **enabled**: bool: Indicates whether the label is enabled or not.
* **order**: int: The order of the sensitivity label.
* **rank**: 'Critical' | 'High' | 'Low' | 'Medium' | 'None': The rank of the sensitivity label.

## TagsResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ThresholdCustomAlertRule
* **Discriminator**: ruleType

### Base Properties
* **description**: string (ReadOnly): The description of the custom alert.
* **displayName**: string (ReadOnly): The display name of the custom alert.
* **isEnabled**: bool (Required): Status of the custom alert.
* **maxThreshold**: int (Required): The maximum threshold.
* **minThreshold**: int (Required): The minimum threshold.
### ActiveConnectionsNotInAllowedRange
#### Properties
* **ruleType**: 'ActiveConnectionsNotInAllowedRange' (Required): The type of the custom alert rule.

### AmqpC2DMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'AmqpC2DMessagesNotInAllowedRange' (Required): The type of the custom alert rule.

### AmqpC2DRejectedMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'AmqpC2DRejectedMessagesNotInAllowedRange' (Required): The type of the custom alert rule.

### AmqpD2CMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'AmqpD2CMessagesNotInAllowedRange' (Required): The type of the custom alert rule.

### DirectMethodInvokesNotInAllowedRange
#### Properties
* **ruleType**: 'DirectMethodInvokesNotInAllowedRange' (Required): The type of the custom alert rule.

### FailedLocalLoginsNotInAllowedRange
#### Properties
* **ruleType**: 'FailedLocalLoginsNotInAllowedRange' (Required): The type of the custom alert rule.

### FileUploadsNotInAllowedRange
#### Properties
* **ruleType**: 'FileUploadsNotInAllowedRange' (Required): The type of the custom alert rule.

### HttpC2DMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'HttpC2DMessagesNotInAllowedRange' (Required): The type of the custom alert rule.

### HttpC2DRejectedMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'HttpC2DRejectedMessagesNotInAllowedRange' (Required): The type of the custom alert rule.

### HttpD2CMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'HttpD2CMessagesNotInAllowedRange' (Required): The type of the custom alert rule.

### MqttC2DMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'MqttC2DMessagesNotInAllowedRange' (Required): The type of the custom alert rule.

### MqttC2DRejectedMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'MqttC2DRejectedMessagesNotInAllowedRange' (Required): The type of the custom alert rule.

### MqttD2CMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'MqttD2CMessagesNotInAllowedRange' (Required): The type of the custom alert rule.

### QueuePurgesNotInAllowedRange
#### Properties
* **ruleType**: 'QueuePurgesNotInAllowedRange' (Required): The type of the custom alert rule.

### TwinUpdatesNotInAllowedRange
#### Properties
* **ruleType**: 'TwinUpdatesNotInAllowedRange' (Required): The type of the custom alert rule.

### UnauthorizedOperationsNotInAllowedRange
#### Properties
* **ruleType**: 'UnauthorizedOperationsNotInAllowedRange' (Required): The type of the custom alert rule.


## TimeWindowCustomAlertRule
* **Discriminator**: ruleType

### Base Properties
* **description**: string (ReadOnly): The description of the custom alert.
* **displayName**: string (ReadOnly): The display name of the custom alert.
* **isEnabled**: bool (Required): Status of the custom alert.
* **maxThreshold**: int (Required): The maximum threshold.
* **minThreshold**: int (Required): The minimum threshold.
* **timeWindowSize**: string (Required): The time window size in iso8601 format.
### ActiveConnectionsNotInAllowedRange
#### Properties
* **ruleType**: 'ActiveConnectionsNotInAllowedRange' (Required): The type of the custom alert rule.

### AmqpC2DMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'AmqpC2DMessagesNotInAllowedRange' (Required): The type of the custom alert rule.

### AmqpC2DRejectedMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'AmqpC2DRejectedMessagesNotInAllowedRange' (Required): The type of the custom alert rule.

### AmqpD2CMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'AmqpD2CMessagesNotInAllowedRange' (Required): The type of the custom alert rule.

### DirectMethodInvokesNotInAllowedRange
#### Properties
* **ruleType**: 'DirectMethodInvokesNotInAllowedRange' (Required): The type of the custom alert rule.

### FailedLocalLoginsNotInAllowedRange
#### Properties
* **ruleType**: 'FailedLocalLoginsNotInAllowedRange' (Required): The type of the custom alert rule.

### FileUploadsNotInAllowedRange
#### Properties
* **ruleType**: 'FileUploadsNotInAllowedRange' (Required): The type of the custom alert rule.

### HttpC2DMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'HttpC2DMessagesNotInAllowedRange' (Required): The type of the custom alert rule.

### HttpC2DRejectedMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'HttpC2DRejectedMessagesNotInAllowedRange' (Required): The type of the custom alert rule.

### HttpD2CMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'HttpD2CMessagesNotInAllowedRange' (Required): The type of the custom alert rule.

### MqttC2DMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'MqttC2DMessagesNotInAllowedRange' (Required): The type of the custom alert rule.

### MqttC2DRejectedMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'MqttC2DRejectedMessagesNotInAllowedRange' (Required): The type of the custom alert rule.

### MqttD2CMessagesNotInAllowedRange
#### Properties
* **ruleType**: 'MqttD2CMessagesNotInAllowedRange' (Required): The type of the custom alert rule.

### QueuePurgesNotInAllowedRange
#### Properties
* **ruleType**: 'QueuePurgesNotInAllowedRange' (Required): The type of the custom alert rule.

### TwinUpdatesNotInAllowedRange
#### Properties
* **ruleType**: 'TwinUpdatesNotInAllowedRange' (Required): The type of the custom alert rule.

### UnauthorizedOperationsNotInAllowedRange
#### Properties
* **ruleType**: 'UnauthorizedOperationsNotInAllowedRange' (Required): The type of the custom alert rule.


## UserDefinedResourcesProperties
### Properties
* **query**: string (Required): Azure Resource Graph query which represents the security solution's user defined resources. Required to start with "where type != "Microsoft.Devices/IotHubs""
* **querySubscriptions**: string[] (Required): List of Azure subscription ids on which the user defined resources query should be executed.

## WorkspaceSettingProperties
### Properties
* **scope**: string (Required): All the VMs in this scope will send their security data to the mentioned workspace unless overridden by a setting with more specific scope
* **workspaceId**: string (Required): The full Azure ID of the workspace to save the data in

