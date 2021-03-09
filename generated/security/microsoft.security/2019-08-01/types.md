# Microsoft.Security @ 2019-08-01

## Resource Microsoft.Security/deviceSecurityGroups@2019-08-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DeviceSecurityGroupProperties
* **type**: 'Microsoft.Security/deviceSecurityGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Security/iotSecuritySolutions@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IoTSecuritySolutionProperties
* **systemData**: SystemData (ReadOnly)
* **tags**: TagsResourceTags
* **type**: 'Microsoft.Security/iotSecuritySolutions' (ReadOnly, DeployTimeConstant)

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
### ConnectionFromIpNotAllowed
#### Properties
* **ruleType**: 'ConnectionFromIpNotAllowed' (Required)

### ConnectionToIpNotAllowed
#### Properties
* **ruleType**: 'ConnectionToIpNotAllowed' (Required)

### LocalUserNotAllowed
#### Properties
* **ruleType**: 'LocalUserNotAllowed' (Required)

### ProcessNotAllowed
#### Properties
* **ruleType**: 'ProcessNotAllowed' (Required)


## ConnectionFromIpNotAllowed
### Properties
* **ruleType**: 'ConnectionFromIpNotAllowed' (Required)

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


## IoTSecuritySolutionProperties
### Properties
* **additionalWorkspaces**: AdditionalWorkspacesProperties[]
* **autoDiscoveredResources**: string[] (ReadOnly)
* **disabledDataSources**: 'TwinData'[]
* **displayName**: string (Required)
* **export**: 'RawEvents'[]
* **iotHubs**: string[] (Required)
* **recommendationsConfiguration**: RecommendationConfigurationProperties[]
* **status**: 'Disabled' | 'Enabled'
* **unmaskedIpLoggingStatus**: 'Disabled' | 'Enabled'
* **userDefinedResources**: UserDefinedResourcesProperties
* **workspace**: string

## AdditionalWorkspacesProperties
### Properties
* **dataTypes**: 'Alerts' | 'RawEvents'[]
* **type**: 'Sentinel'
* **workspace**: string

## RecommendationConfigurationProperties
### Properties
* **name**: string (ReadOnly)
* **recommendationType**: 'IoT_ACRAuthentication' | 'IoT_AgentSendsUnutilizedMessages' | 'IoT_Baseline' | 'IoT_EdgeHubMemOptimize' | 'IoT_EdgeLoggingOptions' | 'IoT_IPFilter_DenyAll' | 'IoT_IPFilter_PermissiveRule' | 'IoT_InconsistentModuleSettings' | 'IoT_InstallAgent' | 'IoT_OpenPorts' | 'IoT_PermissiveFirewallPolicy' | 'IoT_PermissiveInputFirewallRules' | 'IoT_PermissiveOutputFirewallRules' | 'IoT_PrivilegedDockerOptions' | 'IoT_SharedCredentials' | 'IoT_VulnerableTLSCipherSuite' (Required)
* **status**: 'Disabled' | 'Enabled' (Required)

## UserDefinedResourcesProperties
### Properties
* **query**: string (Required)
* **querySubscriptions**: string[] (Required)

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## TagsResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

