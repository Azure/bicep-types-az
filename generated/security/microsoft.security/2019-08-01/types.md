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
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: 'Microsoft.Security/iotSecuritySolutions' (ReadOnly, DeployTimeConstant): The resource type

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
* **valueType**: 'IpCidr' | 'String' (ReadOnly): The value type of the items in the list. Possible values include: 'IpCidr', 'String'

## DenylistCustomAlertRule
### Properties
* **denylistValues**: string[] (Required): The values to deny. The format of the values depends on the rule type.
* **description**: string (ReadOnly): The description of the custom alert.
* **displayName**: string (ReadOnly): The display name of the custom alert.
* **isEnabled**: bool (Required): Status of the custom alert.
* **valueType**: 'IpCidr' | 'String' (ReadOnly): The value type of the items in the list. Possible values include: 'IpCidr', 'String'

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

## IoTSecuritySolutionProperties
### Properties
* **additionalWorkspaces**: [AdditionalWorkspacesProperties](#additionalworkspacesproperties)[]: List of additional workspaces
* **autoDiscoveredResources**: string[] (ReadOnly): List of resources that were automatically discovered as relevant to the security solution.
* **disabledDataSources**: 'TwinData'[]: Disabled data sources. Disabling these data sources compromises the system.
* **displayName**: string (Required): Resource display name.
* **export**: 'RawEvents'[]: List of additional options for exporting to workspace data.
* **iotHubs**: string[] (Required): IoT Hub resource IDs
* **recommendationsConfiguration**: [RecommendationConfigurationProperties](#recommendationconfigurationproperties)[]: List of the configuration status for each recommendation type.
* **status**: 'Disabled' | 'Enabled': Status of the IoT Security solution. Possible values include: 'Enabled', 'Disabled'
* **unmaskedIpLoggingStatus**: 'Disabled' | 'Enabled': Unmasked IP address logging status. Possible values include: 'Disabled', 'Enabled'
* **userDefinedResources**: [UserDefinedResourcesProperties](#userdefinedresourcesproperties): Properties of the IoT Security solution's user defined resources.
* **workspace**: string: Workspace resource ID

## AdditionalWorkspacesProperties
### Properties
* **dataTypes**: 'Alerts' | 'RawEvents'[]: List of data types sent to workspace
* **type**: 'Sentinel': Workspace type. Possible values include: 'Sentinel'
* **workspace**: string: Workspace resource id

## RecommendationConfigurationProperties
### Properties
* **name**: string (ReadOnly):
* **recommendationType**: 'IoT_ACRAuthentication' | 'IoT_AgentSendsUnutilizedMessages' | 'IoT_Baseline' | 'IoT_EdgeHubMemOptimize' | 'IoT_EdgeLoggingOptions' | 'IoT_InconsistentModuleSettings' | 'IoT_InstallAgent' | 'IoT_IPFilter_DenyAll' | 'IoT_IPFilter_PermissiveRule' | 'IoT_OpenPorts' | 'IoT_PermissiveFirewallPolicy' | 'IoT_PermissiveInputFirewallRules' | 'IoT_PermissiveOutputFirewallRules' | 'IoT_PrivilegedDockerOptions' | 'IoT_SharedCredentials' | 'IoT_VulnerableTLSCipherSuite' (Required): The type of IoT Security recommendation. Possible values include: 'IoT_ACRAuthentication', 'IoT_AgentSendsUnutilizedMessages', 'IoT_Baseline', 'IoT_EdgeHubMemOptimize', 'IoT_EdgeLoggingOptions', 'IoT_InconsistentModuleSettings', 'IoT_InstallAgent', 'IoT_IPFilter_DenyAll', 'IoT_IPFilter_PermissiveRule', 'IoT_OpenPorts', 'IoT_PermissiveFirewallPolicy', 'IoT_PermissiveInputFirewallRules', 'IoT_PermissiveOutputFirewallRules', 'IoT_PrivilegedDockerOptions', 'IoT_SharedCredentials', 'IoT_VulnerableTLSCipherSuite'
* **status**: 'Disabled' | 'Enabled' (Required): Recommendation status. When the recommendation status is disabled recommendations are not generated. Possible values include: 'Disabled', 'Enabled'

## UserDefinedResourcesProperties
### Properties
* **query**: string (Required): Azure Resource Graph query which represents the security solution's user defined resources. Required to start with "where type != "Microsoft.Devices/IotHubs""
* **querySubscriptions**: string[] (Required): List of Azure subscription ids on which the user defined resources query should be executed.

## systemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource. Possible values include: 'User', 'Application', 'ManagedIdentity', 'Key'
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource. Possible values include: 'User', 'Application', 'ManagedIdentity', 'Key'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

