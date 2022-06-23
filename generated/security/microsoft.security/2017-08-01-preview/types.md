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

## Resource Microsoft.Security/compliances@2017-08-01-preview (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ComplianceProperties](#complianceproperties) (ReadOnly): Compliance data
* **type**: 'Microsoft.Security/compliances' (ReadOnly, DeployTimeConstant): The resource type

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

## Resource Microsoft.Security/iotSecuritySolutions/analyticsModels@2017-08-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [IoTSecuritySolutionAnalyticsModelProperties](#iotsecuritysolutionanalyticsmodelproperties) (ReadOnly): Security Solution  Aggregated Alert data
* **type**: 'Microsoft.Security/iotSecuritySolutions/analyticsModels' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/iotSecuritySolutions/analyticsModels/aggregatedAlerts@2017-08-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IoTSecurityAggregatedAlertProperties](#iotsecurityaggregatedalertproperties) (ReadOnly): Security Solution  Aggregated Alert data
* **tags**: [TagsResourceTags](#tagsresourcetags) (ReadOnly): Resource tags
* **type**: 'Microsoft.Security/iotSecuritySolutions/analyticsModels/aggregatedAlerts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/iotSecuritySolutions/analyticsModels/aggregatedRecommendations@2017-08-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IoTSecurityAggregatedRecommendationProperties](#iotsecurityaggregatedrecommendationproperties) (ReadOnly): Security Solution data
* **tags**: [TagsResourceTags](#tagsresourcetags) (ReadOnly): Resource tags
* **type**: 'Microsoft.Security/iotSecuritySolutions/analyticsModels/aggregatedRecommendations' (ReadOnly, DeployTimeConstant): The resource type

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

## ComplianceProperties
### Properties
* **assessmentResult**: [ComplianceSegment](#compliancesegment)[] (ReadOnly): An array of segment, which is the actually the compliance assessment.
* **assessmentTimestampUtcDate**: string (ReadOnly): The timestamp when the Compliance calculation was conducted.
* **resourceCount**: int (ReadOnly): The resource count of the given subscription for which the Compliance calculation was conducted (needed for Management Group Compliance calculation).

## ComplianceSegment
### Properties
* **percentage**: int (ReadOnly): The size (%) of the segment.
* **segmentType**: string (ReadOnly): The segment type, e.g. compliant, non-compliance, insufficient coverage, N/A, etc.

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

## IoTSecurityAggregatedAlertProperties
### Properties
* **actionTaken**: string (ReadOnly): The action that was taken as a response to the alert (Active, Blocked etc.)
* **aggregatedDateUtc**: string (ReadOnly): The date the incidents were detected by the vendor
* **alertDisplayName**: string (ReadOnly): Display name of the alert type
* **alertType**: string (ReadOnly): Name of the alert type
* **count**: int (ReadOnly): Occurrence number of the alert within the aggregated date
* **description**: string (ReadOnly): Description of the incident and what it means
* **effectedResourceType**: string (ReadOnly): Azure resource ID of the resource that got the alerts
* **logAnalyticsQuery**: string (ReadOnly): query in log analytics to get the list of affected devices/alerts
* **remediationSteps**: string (ReadOnly): Recommended steps for remediation
* **reportedSeverity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (ReadOnly): Estimated severity of this alert
* **systemSource**: string (ReadOnly): The type of the alerted resource (Azure, Non-Azure)
* **vendorName**: string (ReadOnly): Name of the vendor that discovered the incident

## IoTSecurityAggregatedRecommendationProperties
### Properties
* **description**: string (ReadOnly): Description of the incident and what it means
* **detectedBy**: string (ReadOnly): Name of the vendor that discovered the issue
* **healthyDevices**: int (ReadOnly): the number of the healthy devices within the solution
* **logAnalyticsQuery**: string (ReadOnly): query in log analytics to get the list of affected devices/alerts
* **recommendationDisplayName**: string (ReadOnly): Display name of the recommendation type.
* **recommendationName**: string: Name of the recommendation
* **recommendationTypeId**: string (ReadOnly): The recommendation-type GUID.
* **remediationSteps**: string (ReadOnly): Recommended steps for remediation
* **reportedSeverity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (ReadOnly): Estimated severity of this recommendation
* **unhealthyDeviceCount**: int (ReadOnly): the number of the unhealthy devices within the solution

## IoTSecurityAlertedDevice
### Properties
* **alertsCount**: int (ReadOnly): the number of alerts raised for this device
* **deviceId**: string (ReadOnly): Name of the alert type

## IoTSecurityAlertedDevicesList
### Properties
* **nextLink**: string (ReadOnly): The URI to fetch the next page.
* **value**: [IoTSecurityAlertedDevice](#iotsecurityalerteddevice)[] (Required): List of aggregated alerts data

## IoTSecurityDeviceAlert
### Properties
* **alertDisplayName**: string (ReadOnly): Display name of the alert
* **alertsCount**: int (ReadOnly): the number of alerts raised for this alert type
* **reportedSeverity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (ReadOnly): Estimated severity of this alert

## IoTSecurityDeviceAlertsList
### Properties
* **nextLink**: string (ReadOnly): The URI to fetch the next page.
* **value**: [IoTSecurityDeviceAlert](#iotsecuritydevicealert)[] (Required): List of top alerts data

## IoTSecurityDeviceRecommendation
### Properties
* **devicesCount**: int (ReadOnly): the number of device with this recommendation
* **recommendationDisplayName**: string (ReadOnly): Display name of the recommendation
* **reportedSeverity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (ReadOnly): Estimated severity of this recommendation

## IoTSecurityDeviceRecommendationsList
### Properties
* **nextLink**: string (ReadOnly): The URI to fetch the next page.
* **value**: [IoTSecurityDeviceRecommendation](#iotsecuritydevicerecommendation)[] (Required): List of aggregated recommendation data

## IoTSecuritySolutionAnalyticsModelProperties
### Properties
* **devicesMetrics**: [IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetricsItem](#iotsecuritysolutionanalyticsmodelpropertiesdevicesmetricsitem)[] (ReadOnly): The list of devices metrics by the aggregated date.
* **metrics**: [IoTSeverityMetrics](#iotseveritymetrics) (ReadOnly): Security Analytics of a security solution
* **mostPrevalentDeviceAlerts**: [IoTSecurityDeviceAlertsList](#iotsecuritydevicealertslist): The list of most prevalent 3 alerts.
* **mostPrevalentDeviceRecommendations**: [IoTSecurityDeviceRecommendationsList](#iotsecuritydevicerecommendationslist): The list of most prevalent 3 recommendations.
* **topAlertedDevices**: [IoTSecurityAlertedDevicesList](#iotsecurityalerteddeviceslist): The list of top 3 devices with the most attacked.
* **unhealthyDeviceCount**: int (ReadOnly): number of unhealthy devices

## IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetricsItem
### Properties
* **date**: string: the date of the metrics
* **devicesMetrics**: [IoTSeverityMetrics](#iotseveritymetrics): devices alerts count by severity.

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

## IoTSeverityMetrics
### Properties
* **high**: int: count of high severity items
* **low**: int: count of low severity items
* **medium**: int: count of medium severity items

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

## TagsResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

