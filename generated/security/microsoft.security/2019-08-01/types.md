# Microsoft.Security @ 2019-08-01

## Resource Microsoft.Security/deviceSecurityGroups@2019-08-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeviceSecurityGroupProperties](#devicesecuritygroupproperties): describes properties of a security group.
* **type**: 'Microsoft.Security/deviceSecurityGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/iotSecuritySolutions@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IoTSecuritySolutionProperties](#iotsecuritysolutionproperties): Security Solution setting data
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TagsResourceTags](#tagsresourcetags): Resource tags
* **type**: 'Microsoft.Security/iotSecuritySolutions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/iotSecuritySolutions/analyticsModels@2019-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [IoTSecuritySolutionAnalyticsModelProperties](#iotsecuritysolutionanalyticsmodelproperties) (ReadOnly): Security analytics properties of your IoT Security solution
* **type**: 'Microsoft.Security/iotSecuritySolutions/analyticsModels' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/iotSecuritySolutions/analyticsModels/aggregatedAlerts@2019-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IoTSecurityAggregatedAlertProperties](#iotsecurityaggregatedalertproperties) (ReadOnly): IoT Security solution aggregated alert details.
* **tags**: [TagsResourceTags](#tagsresourcetags) (ReadOnly): Resource tags
* **type**: 'Microsoft.Security/iotSecuritySolutions/analyticsModels/aggregatedAlerts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/iotSecuritySolutions/analyticsModels/aggregatedRecommendations@2019-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IoTSecurityAggregatedRecommendationProperties](#iotsecurityaggregatedrecommendationproperties) (ReadOnly): IoT Security solution aggregated recommendation information
* **tags**: [TagsResourceTags](#tagsresourcetags) (ReadOnly): Resource tags
* **type**: 'Microsoft.Security/iotSecuritySolutions/analyticsModels/aggregatedRecommendations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/iotSecuritySolutions/iotAlerts@2019-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IotAlertProperties](#iotalertproperties) (ReadOnly): IoT alert properties
* **type**: 'Microsoft.Security/iotSecuritySolutions/iotAlerts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/iotSecuritySolutions/iotAlertTypes@2019-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IotAlertTypeProperties](#iotalerttypeproperties) (ReadOnly): IoT alert type information.
* **type**: 'Microsoft.Security/iotSecuritySolutions/iotAlertTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/iotSecuritySolutions/iotRecommendations@2019-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IotRecommendationProperties](#iotrecommendationproperties) (ReadOnly): IoT recommendation properties
* **type**: 'Microsoft.Security/iotSecuritySolutions/iotRecommendations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/iotSecuritySolutions/iotRecommendationTypes@2019-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IotRecommendationTypeProperties](#iotrecommendationtypeproperties) (ReadOnly): IoT recommendation type information.
* **type**: 'Microsoft.Security/iotSecuritySolutions/iotRecommendationTypes' (ReadOnly, DeployTimeConstant): The resource type

## DeviceSecurityGroupProperties
### Properties
* **allowlistRules**: [AllowlistCustomAlertRule](#allowlistcustomalertrule)[]: The allow-list custom alert rules.
* **denylistRules**: [DenylistCustomAlertRule](#denylistcustomalertrule)[]: The deny-list custom alert rules.
* **thresholdRules**: [ThresholdCustomAlertRule](#thresholdcustomalertrule)[]: The list of custom alert threshold rules.
* **timeWindowRules**: [TimeWindowCustomAlertRule](#timewindowcustomalertrule)[]: The list of custom alert time-window rules.

## AllowlistCustomAlertRule
* **Discriminator**: ruleType

### Base Properties
* **allowlistValues**: string[] (Required): The values to allow. The format of the values depends on the rule type.
* **description**: string (ReadOnly): The description of the custom alert.
* **displayName**: string (ReadOnly): The display name of the custom alert.
* **isEnabled**: bool (Required): Status of the custom alert.
* **valueType**: 'IpCidr' | 'String' | string (ReadOnly): The value type of the items in the list.
### ConnectionFromIpNotAllowed
#### Properties
* **ruleType**: 'ConnectionFromIpNotAllowed' (Required): The type of the custom alert rule.

### ConnectionToIpNotAllowed
#### Properties
* **ruleType**: 'ConnectionToIpNotAllowed' (Required): The type of the custom alert rule.

### LocalUserNotAllowed
#### Properties
* **ruleType**: 'LocalUserNotAllowed' (Required): The type of the custom alert rule.

### ProcessNotAllowed
#### Properties
* **ruleType**: 'ProcessNotAllowed' (Required): The type of the custom alert rule.


## DenylistCustomAlertRule
### Properties
* **denylistValues**: string[] (Required): The values to deny. The format of the values depends on the rule type.
* **description**: string (ReadOnly): The description of the custom alert.
* **displayName**: string (ReadOnly): The display name of the custom alert.
* **isEnabled**: bool (Required): Status of the custom alert.
* **ruleType**: string (Required): The type of the custom alert rule.
* **valueType**: 'IpCidr' | 'String' | string (ReadOnly): The value type of the items in the list.

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


## IoTSecuritySolutionProperties
### Properties
* **additionalWorkspaces**: [AdditionalWorkspacesProperties](#additionalworkspacesproperties)[]: List of additional workspaces
* **autoDiscoveredResources**: string[] (ReadOnly): List of resources that were automatically discovered as relevant to the security solution.
* **disabledDataSources**: 'TwinData' | string[]: Disabled data sources. Disabling these data sources compromises the system.
* **displayName**: string (Required): Resource display name.
* **export**: 'RawEvents' | string[]: List of additional options for exporting to workspace data.
* **iotHubs**: string[] (Required): IoT Hub resource IDs
* **recommendationsConfiguration**: [RecommendationConfigurationProperties](#recommendationconfigurationproperties)[]: List of the configuration status for each recommendation type.
* **status**: 'Disabled' | 'Enabled' | string: Status of the IoT Security solution.
* **unmaskedIpLoggingStatus**: 'Disabled' | 'Enabled' | string: Unmasked IP address logging status
* **userDefinedResources**: [UserDefinedResourcesProperties](#userdefinedresourcesproperties): Properties of the IoT Security solution's user defined resources.
* **workspace**: string: Workspace resource ID

## AdditionalWorkspacesProperties
### Properties
* **dataTypes**: 'Alerts' | 'RawEvents' | string[]: List of data types sent to workspace
* **type**: 'Sentinel' | string: Workspace type.
* **workspace**: string: Workspace resource id

## RecommendationConfigurationProperties
### Properties
* **name**: string (ReadOnly)
* **recommendationType**: 'IoT_ACRAuthentication' | 'IoT_AgentSendsUnutilizedMessages' | 'IoT_Baseline' | 'IoT_EdgeHubMemOptimize' | 'IoT_EdgeLoggingOptions' | 'IoT_IPFilter_DenyAll' | 'IoT_IPFilter_PermissiveRule' | 'IoT_InconsistentModuleSettings' | 'IoT_InstallAgent' | 'IoT_OpenPorts' | 'IoT_PermissiveFirewallPolicy' | 'IoT_PermissiveInputFirewallRules' | 'IoT_PermissiveOutputFirewallRules' | 'IoT_PrivilegedDockerOptions' | 'IoT_SharedCredentials' | 'IoT_VulnerableTLSCipherSuite' | string (Required): The type of IoT Security recommendation.
* **status**: 'Disabled' | 'Enabled' | string (Required): Recommendation status. When the recommendation status is disabled recommendations are not generated.

## UserDefinedResourcesProperties
### Properties
* **query**: string (Required): Azure Resource Graph query which represents the security solution's user defined resources. Required to start with "where type != "Microsoft.Devices/IotHubs""
* **querySubscriptions**: string[] (Required): List of Azure subscription ids on which the user defined resources query should be executed.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.

## TagsResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IoTSecuritySolutionAnalyticsModelProperties
### Properties
* **devicesMetrics**: [IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetricsItem](#iotsecuritysolutionanalyticsmodelpropertiesdevicesmetricsitem)[] (ReadOnly): List of device metrics by the aggregation date.
* **metrics**: [IoTSeverityMetrics](#iotseveritymetrics) (ReadOnly): IoT Security solution analytics severity metrics.
* **mostPrevalentDeviceAlerts**: [IoTSecurityDeviceAlert](#iotsecuritydevicealert)[] (ReadOnly): List of alerts with the count of raised alerts
* **mostPrevalentDeviceRecommendations**: [IoTSecurityDeviceRecommendation](#iotsecuritydevicerecommendation)[] (ReadOnly): List of aggregated recommendation data, per recommendation type, per device.
* **topAlertedDevices**: [IoTSecurityAlertedDevice](#iotsecurityalerteddevice)[] (ReadOnly): List of devices with open alerts including the count of alerts per device.
* **unhealthyDeviceCount**: int (ReadOnly): Number of unhealthy devices within your IoT Security solution.

## IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetricsItem
### Properties
* **date**: string (ReadOnly): Aggregation of IoT Security solution device alert metrics by date.
* **devicesMetrics**: [IoTSeverityMetrics](#iotseveritymetrics) (ReadOnly): IoT Security solution analytics severity metrics.

## IoTSeverityMetrics
### Properties
* **high**: int (ReadOnly): Count of high severity alerts/recommendations.
* **low**: int (ReadOnly): Count of low severity alerts/recommendations.
* **medium**: int (ReadOnly): Count of medium severity alerts/recommendations.

## IoTSecurityDeviceAlert
### Properties
* **alertDisplayName**: string (ReadOnly): Display name of the alert
* **alertsCount**: int (ReadOnly): Number of alerts raised for this alert type.
* **reportedSeverity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (ReadOnly): Assessed alert severity.

## IoTSecurityDeviceRecommendation
### Properties
* **devicesCount**: int (ReadOnly): Number of devices with this recommendation.
* **recommendationDisplayName**: string (ReadOnly): Display name of the recommendation.
* **reportedSeverity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (ReadOnly): Assessed alert severity.

## IoTSecurityAlertedDevice
### Properties
* **alertsCount**: int (ReadOnly): Number of alerts raised for this device.
* **deviceId**: string (ReadOnly): Device identifier.

## IoTSecurityAggregatedAlertProperties
### Properties
* **actionTaken**: string (ReadOnly): IoT Security solution alert response.
* **aggregatedDateUtc**: string (ReadOnly): Date of detection.
* **alertDisplayName**: string (ReadOnly): Display name of the alert type.
* **alertType**: string (ReadOnly): Name of the alert type.
* **count**: int (ReadOnly): Number of alerts occurrences within the aggregated time window.
* **description**: string (ReadOnly): Description of the suspected vulnerability and meaning.
* **effectedResourceType**: string (ReadOnly): Azure resource ID of the resource that received the alerts.
* **logAnalyticsQuery**: string (ReadOnly): Log analytics query for getting the list of affected devices/alerts.
* **remediationSteps**: string (ReadOnly): Recommended steps for remediation.
* **reportedSeverity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (ReadOnly): Assessed alert severity.
* **systemSource**: string (ReadOnly): The type of the alerted resource (Azure, Non-Azure).
* **topDevicesList**: [IoTSecurityAggregatedAlertPropertiesTopDevicesListItem](#iotsecurityaggregatedalertpropertiestopdeviceslistitem)[] (ReadOnly): 10 devices with the highest number of occurrences of this alert type, on this day.
* **vendorName**: string (ReadOnly): Name of the organization that raised the alert.

## IoTSecurityAggregatedAlertPropertiesTopDevicesListItem
### Properties
* **alertsCount**: int (ReadOnly): Number of alerts raised for this device.
* **deviceId**: string (ReadOnly): Name of the device.
* **lastOccurrence**: string (ReadOnly): Most recent time this alert was raised for this device, on this day.

## TagsResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IoTSecurityAggregatedRecommendationProperties
### Properties
* **description**: string (ReadOnly): Description of the suspected vulnerability and meaning.
* **detectedBy**: string (ReadOnly): Name of the organization that made the recommendation.
* **healthyDevices**: int (ReadOnly): Number of healthy devices within the IoT Security solution.
* **logAnalyticsQuery**: string (ReadOnly): Log analytics query for getting the list of affected devices/alerts.
* **recommendationDisplayName**: string (ReadOnly): Display name of the recommendation type.
* **recommendationName**: string (ReadOnly): Name of the recommendation.
* **recommendationTypeId**: string (ReadOnly): Recommendation-type GUID.
* **remediationSteps**: string (ReadOnly): Recommended steps for remediation
* **reportedSeverity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (ReadOnly): Assessed alert severity.
* **unhealthyDeviceCount**: int (ReadOnly): Number of unhealthy devices within the IoT Security solution.

## TagsResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IotAlertProperties
### Properties
* **alertType**: string (ReadOnly): The type name of the alert
* **compromisedEntity**: string (ReadOnly): Display name of the main entity being reported on
* **endTimeUtc**: string (ReadOnly): The impact end time of the alert (the time of the last event or activity included in the alert)
* **entities**: any[] (ReadOnly): A list of entities related to the alert
* **extendedProperties**: any (ReadOnly): Any object
* **startTimeUtc**: string (ReadOnly): The impact start time of the alert (the time of the first event or activity included in the alert)
* **systemAlertId**: string (ReadOnly): Holds the product canonical identifier of the alert within the scope of a product

## IotAlertTypeProperties
### Properties
* **alertDisplayName**: string (ReadOnly): The display name of the alert
* **description**: string (ReadOnly): Description of the suspected vulnerability and meaning.
* **intent**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Exploitation' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Probing' | 'Unknown' | string (ReadOnly): Kill chain related intent behind the alert. Could contain multiple enum values (separated by commas)
* **productComponentName**: string (ReadOnly): The name of a component inside the product which generated the alert
* **productName**: string (ReadOnly): The name of the product which published this alert
* **providerName**: string (ReadOnly): The name of the alert provider or internal partner
* **remediationSteps**: string[] (ReadOnly): Manual action items to take to remediate the alert
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (ReadOnly): The severity of the alert
* **vendorName**: string (ReadOnly): The name of the vendor that raise the alert

## IotRecommendationProperties
### Properties
* **deviceId**: string (ReadOnly): Identifier of the device being reported on
* **discoveredTimeUtc**: string (ReadOnly): The discovery time of the recommendation
* **recommendationAdditionalData**: any (ReadOnly): Any object
* **recommendationType**: string (ReadOnly): The type name of the recommendation

## IotRecommendationTypeProperties
### Properties
* **control**: string (ReadOnly): The name of the recommendation's control category
* **dataSource**: string (ReadOnly): The alert's data source
* **description**: string (ReadOnly): Description of the suspected vulnerability and meaning.
* **productComponentName**: string (ReadOnly): The name of a component inside the product which generated the recommendation
* **productName**: string (ReadOnly): The name of the product which published this recommendation
* **recommendationDisplayName**: string (ReadOnly): The display name of the recommendation
* **remediationSteps**: string[] (ReadOnly): Manual action items to take to resolve the recommendation
* **severity**: 'Healthy' | 'High' | 'Low' | 'Medium' | 'NotApplicable' | 'OffByPolicy' | 'Unknown' | string (ReadOnly): The severity of the recommendation
* **vendorName**: string (ReadOnly): The name of the vendor that raised the recommendation

