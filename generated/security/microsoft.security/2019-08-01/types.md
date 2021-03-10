# Microsoft.Security @ 2019-08-01

## Resource Microsoft.Security/deviceSecurityGroups@2019-08-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DeviceSecurityGroupProperties](#devicesecuritygroupproperties)
* **type**: 'Microsoft.Security/deviceSecurityGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Security/iotSecuritySolutions@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IoTSecuritySolutionProperties](#iotsecuritysolutionproperties)
* **systemData**: [systemData](#systemdata) (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Security/iotSecuritySolutions' (ReadOnly, DeployTimeConstant)

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

## IoTSecuritySolutionProperties
### Properties
* **additionalWorkspaces**: [AdditionalWorkspacesProperties](#additionalworkspacesproperties)[]
* **autoDiscoveredResources**: string[] (ReadOnly)
* **disabledDataSources**: 'TwinData'[]
* **displayName**: string (Required)
* **export**: 'RawEvents'[]
* **iotHubs**: string[] (Required)
* **recommendationsConfiguration**: [RecommendationConfigurationProperties](#recommendationconfigurationproperties)[]
* **status**: 'Disabled' | 'Enabled'
* **unmaskedIpLoggingStatus**: 'Disabled' | 'Enabled'
* **userDefinedResources**: [UserDefinedResourcesProperties](#userdefinedresourcesproperties)
* **workspace**: string

## AdditionalWorkspacesProperties
### Properties
* **dataTypes**: 'Alerts' | 'RawEvents'[]
* **type**: 'Sentinel'
* **workspace**: string

## RecommendationConfigurationProperties
### Properties
* **name**: string (ReadOnly)
* **recommendationType**: 'IoT_ACRAuthentication' | 'IoT_AgentSendsUnutilizedMessages' | 'IoT_Baseline' | 'IoT_EdgeHubMemOptimize' | 'IoT_EdgeLoggingOptions' | 'IoT_InconsistentModuleSettings' | 'IoT_InstallAgent' | 'IoT_IPFilter_DenyAll' | 'IoT_IPFilter_PermissiveRule' | 'IoT_OpenPorts' | 'IoT_PermissiveFirewallPolicy' | 'IoT_PermissiveInputFirewallRules' | 'IoT_PermissiveOutputFirewallRules' | 'IoT_PrivilegedDockerOptions' | 'IoT_SharedCredentials' | 'IoT_VulnerableTLSCipherSuite' (Required)
* **status**: 'Disabled' | 'Enabled' (Required)

## UserDefinedResourcesProperties
### Properties
* **query**: string (Required)
* **querySubscriptions**: string[] (Required)

## systemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

