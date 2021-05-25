# Microsoft.Security @ 2017-08-01-preview

## Resource Microsoft.Security/advancedThreatProtectionSettings@2017-08-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AdvancedThreatProtectionProperties](#advancedthreatprotectionproperties): The Advanced Threat Protection settings.
* **type**: 'Microsoft.Security/advancedThreatProtectionSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/autoProvisioningSettings@2017-08-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AutoProvisioningSettingProperties](#autoprovisioningsettingproperties): describes properties of an auto provisioning setting
* **type**: 'Microsoft.Security/autoProvisioningSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/deviceSecurityGroups@2017-08-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeviceSecurityGroupProperties](#devicesecuritygroupproperties): describes properties of a security group.
* **type**: 'Microsoft.Security/deviceSecurityGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/informationProtectionPolicies@2017-08-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'custom' | 'effective' (Required, DeployTimeConstant): The resource name
* **properties**: [InformationProtectionPolicyProperties](#informationprotectionpolicyproperties): describes properties of an information protection policy.
* **type**: 'Microsoft.Security/informationProtectionPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/iotSecuritySolutions@2017-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IoTSecuritySolutionProperties](#iotsecuritysolutionproperties): Security Solution setting data
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
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
* **properties**: [SecurityContactProperties](#securitycontactproperties): describes security contact properties
* **type**: 'Microsoft.Security/securityContacts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/settings@2017-08-01-preview
* **Valid Scope(s)**: Subscription
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'MCAS' | 'WDATP' (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Security/settings' (ReadOnly, DeployTimeConstant): The resource type
### DataExportSetting
#### Properties
* **kind**: 'DataExportSetting' (Required): Represents a data export setting
* **properties**: [DataExportSettingProperties](#dataexportsettingproperties): The data export setting properties


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

## AutoProvisioningSettingProperties
### Properties
* **autoProvision**: 'Off' | 'On' (Required): Describes what kind of security agent provisioning action to take.

## DeviceSecurityGroupProperties
### Properties
* **allowlistRules**: [AllowlistCustomAlertRule](#allowlistcustomalertrule)[]: The allow-list custom alert rules.
* **denylistRules**: [DenylistCustomAlertRule](#denylistcustomalertrule)[]: The deny-list custom alert rules.
* **thresholdRules**: [ThresholdCustomAlertRule](#thresholdcustomalertrule)[]: The list of custom alert threshold rules.
* **timeWindowRules**: [TimeWindowCustomAlertRule](#timewindowcustomalertrule)[]: The list of custom alert time-window rules.

## AllowlistCustomAlertRule
### Properties
* **allowlistValues**: string[] (Required): The values to allow. The format of the values depends on the rule type.
* **description**: string (ReadOnly): The description of the custom alert.
* **displayName**: string (ReadOnly): The display name of the custom alert.
* **isEnabled**: bool (Required): Status of the custom alert.
* **valueType**: 'IpCidr' | 'String' (ReadOnly): The value type of the items in the list.

## DenylistCustomAlertRule
### Properties
* **denylistValues**: string[] (Required): The values to deny. The format of the values depends on the rule type.
* **description**: string (ReadOnly): The description of the custom alert.
* **displayName**: string (ReadOnly): The display name of the custom alert.
* **isEnabled**: bool (Required): Status of the custom alert.
* **valueType**: 'IpCidr' | 'String' (ReadOnly): The value type of the items in the list.

## ThresholdCustomAlertRule
### Properties
* **description**: string (ReadOnly): The description of the custom alert.
* **displayName**: string (ReadOnly): The display name of the custom alert.
* **isEnabled**: bool (Required): Status of the custom alert.
* **maxThreshold**: int (Required): The maximum threshold.
* **minThreshold**: int (Required): The minimum threshold.

## TimeWindowCustomAlertRule
### Properties
* **description**: string (ReadOnly): The description of the custom alert.
* **displayName**: string (ReadOnly): The display name of the custom alert.
* **isEnabled**: bool (Required): Status of the custom alert.
* **maxThreshold**: int (Required): The maximum threshold.
* **minThreshold**: int (Required): The minimum threshold.
* **timeWindowSize**: string (Required): The time window size in iso8601 format.

## InformationProtectionPolicyProperties
### Properties
* **informationTypes**: [Dictionary<string,InformationType>](#dictionarystringinformationtype): The sensitivity information types.
* **labels**: [Dictionary<string,SensitivityLabel>](#dictionarystringsensitivitylabel): Dictionary of sensitivity labels.
* **lastModifiedUtc**: string (ReadOnly): Describes the last UTC time the policy was modified.
* **version**: string (ReadOnly): Describes the version of the policy.

## Dictionary<string,InformationType>
### Properties
### Additional Properties
* **Additional Properties Type**: [InformationType](#informationtype)

## InformationType
### Properties
* **custom**: bool: Indicates whether the information type is custom or not.
* **description**: string: The description of the information type.
* **displayName**: string: The name of the information type.
* **enabled**: bool: Indicates whether the information type is enabled or not.
* **keywords**: [InformationProtectionKeyword](#informationprotectionkeyword)[]: The information type keywords.
* **order**: int: The order of the information type.
* **recommendedLabelId**: string: The recommended label id to be associated with this information type.

## InformationProtectionKeyword
### Properties
* **canBeNumeric**: bool: Indicates whether the keyword can be applied on numeric types or not.
* **custom**: bool: Indicates whether the keyword is custom or not.
* **excluded**: bool: Indicates whether the keyword is excluded or not.
* **pattern**: string: The keyword pattern.

## Dictionary<string,SensitivityLabel>
### Properties
### Additional Properties
* **Additional Properties Type**: [SensitivityLabel](#sensitivitylabel)

## SensitivityLabel
### Properties
* **description**: string: The description of the sensitivity label.
* **displayName**: string: The name of the sensitivity label.
* **enabled**: bool: Indicates whether the label is enabled or not.
* **order**: int: The order of the sensitivity label.
* **rank**: 'Critical' | 'High' | 'Low' | 'Medium' | 'None': The rank of the sensitivity label.

## IoTSecuritySolutionProperties
### Properties
* **autoDiscoveredResources**: string[] (ReadOnly): List of resources that were automatically discovered as relevant to the security solution.
* **disabledDataSources**: 'TwinData'[]: Disabled data sources. Disabling these data sources compromises the system.
* **displayName**: string (Required): Resource display name.
* **export**: 'RawEvents'[]: List of additional export to workspace data options
* **iotHubs**: string[] (Required): IoT Hub resource IDs
* **recommendationsConfiguration**: [RecommendationConfigurationProperties](#recommendationconfigurationproperties)[]: List of recommendation configuration
* **status**: 'Disabled' | 'Enabled': Security solution status.
* **userDefinedResources**: [UserDefinedResourcesProperties](#userdefinedresourcesproperties): Properties of the solution's user defined resources.
* **workspace**: string (Required): Workspace resource ID

## RecommendationConfigurationProperties
### Properties
* **name**: string (ReadOnly)
* **recommendationType**: 'IoT_ACRAuthentication' | 'IoT_AgentSendsUnutilizedMessages' | 'IoT_Baseline' | 'IoT_EdgeHubMemOptimize' | 'IoT_EdgeLoggingOptions' | 'IoT_InconsistentModuleSettings' | 'IoT_InstallAgent' | 'IoT_IPFilter_DenyAll' | 'IoT_IPFilter_PermissiveRule' | 'IoT_OpenPorts' | 'IoT_PermissiveFirewallPolicy' | 'IoT_PermissiveInputFirewallRules' | 'IoT_PermissiveOutputFirewallRules' | 'IoT_PrivilegedDockerOptions' | 'IoT_SharedCredentials' | 'IoT_VulnerableTLSCipherSuite' (Required): The recommendation type.
* **status**: 'Disabled' | 'Enabled' (Required): Recommendation status. The recommendation is not generated when the status is disabled.

## UserDefinedResourcesProperties
### Properties
* **query**: string (Required): Azure Resource Graph query which represents the security solution's user defined resources. Required to start with "where type != "Microsoft.Devices/IotHubs""
* **querySubscriptions**: string[] (Required): List of Azure subscription ids on which the user defined resources query should be executed.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PricingProperties
### Properties
* **pricingTier**: 'Free' | 'Standard' (Required): Pricing tier type.

## SecurityContactProperties
### Properties
* **alertNotifications**: 'Off' | 'On' (Required): Whether to send security alerts notifications to the security contact.
* **alertsToAdmins**: 'Off' | 'On' (Required): Whether to send security alerts notifications to subscription admins.
* **email**: string (Required): The email of this security contact
* **phone**: string: The phone number of this security contact

## DataExportSetting
### Properties
* **kind**: 'DataExportSetting' (Required): Represents a data export setting
* **properties**: [DataExportSettingProperties](#dataexportsettingproperties): The data export setting properties

## DataExportSettingProperties
### Properties
* **enabled**: bool (Required): Is the data export setting is enabled

## WorkspaceSettingProperties
### Properties
* **scope**: string (Required): All the VMs in this scope will send their security data to the mentioned workspace unless overridden by a setting with more specific scope
* **workspaceId**: string (Required): The full Azure ID of the workspace to save the data in

