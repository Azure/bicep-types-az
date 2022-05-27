# Microsoft.DesktopVirtualization @ 2019-01-23-preview

## Resource Microsoft.DesktopVirtualization/applicationGroups@2019-01-23-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-01-23-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationGroupProperties](#applicationgroupproperties) (Required): Schema for ApplicationGroup properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DesktopVirtualization/applicationGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/applicationGroups/applications@2019-01-23-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-01-23-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationProperties](#applicationproperties) (Required): Schema for Application properties.
* **type**: 'Microsoft.DesktopVirtualization/applicationGroups/applications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/applicationGroups/desktops@2019-01-23-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-01-23-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DesktopProperties](#desktopproperties) (ReadOnly): Schema for Desktop properties.
* **type**: 'Microsoft.DesktopVirtualization/applicationGroups/desktops' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/hostPools@2019-01-23-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-01-23-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HostPoolProperties](#hostpoolproperties) (Required): Properties of HostPool.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DesktopVirtualization/hostPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/hostPools/sessionHosts@2019-01-23-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-01-23-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SessionHostProperties](#sessionhostproperties) (ReadOnly): Schema for SessionHost properties.
* **type**: 'Microsoft.DesktopVirtualization/hostPools/sessionHosts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/hostPools/sessionHosts/userSessions@2019-01-23-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-01-23-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UserSessionProperties](#usersessionproperties) (ReadOnly): Schema for UserSession properties.
* **type**: 'Microsoft.DesktopVirtualization/hostPools/sessionHosts/userSessions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/workspaces@2019-01-23-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-01-23-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): Schema for Workspace properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DesktopVirtualization/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## ApplicationGroupProperties
### Properties
* **applicationGroupType**: 'Desktop' | 'RemoteApp' | string (Required): Resource Type of ApplicationGroup.
* **description**: string: Description of ApplicationGroup.
* **friendlyName**: string: Friendly name of ApplicationGroup.
* **hostPoolArmPath**: string (Required): HostPool arm path of ApplicationGroup.
* **workspaceArmPath**: string (ReadOnly): Workspace arm path of ApplicationGroup.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationProperties
### Properties
* **commandLineArguments**: string: Command Line Arguments for Application.
* **commandLineSetting**: 'Allow' | 'DoNotAllow' | 'Require' | string (Required): Specifies whether this published application can be launched with command line arguments provided by the client, command line arguments specified at publish time, or no command line arguments at all.
* **description**: string: Description of Application.
* **filePath**: string: Specifies a path for the executable file for the application.
* **friendlyName**: string: Friendly name of Application.
* **iconContent**: any (ReadOnly): the icon a 64 bit string as a byte array.
* **iconHash**: string (ReadOnly): Hash of the icon.
* **iconIndex**: int: Index of the icon.
* **iconPath**: string: Path to icon.
* **showInPortal**: bool: Specifies whether to show the RemoteApp program in the RD Web Access server.

## DesktopProperties
### Properties
* **description**: string (ReadOnly): Description of Desktop.
* **friendlyName**: string (ReadOnly): Friendly name of Desktop.
* **iconContent**: any (ReadOnly): The icon a 64 bit string as a byte array.
* **iconHash**: string (ReadOnly): Hash of the icon.

## HostPoolProperties
### Properties
* **applicationGroupReferences**: string[] (ReadOnly): List of applicationGroup links.
* **customRdpProperty**: string: Custom rdp property of HostPool.
* **description**: string: Description of HostPool.
* **friendlyName**: string: Friendly name of HostPool.
* **hostPoolType**: 'Personal' | 'Shared' | string (Required): HostPool type for desktop.
* **loadBalancerType**: 'BreadthFirst' | 'DepthFirst' | 'Persistent' | string (Required): The type of the load balancer.
* **maxSessionLimit**: int: The max session limit of HostPool.
* **personalDesktopAssignmentType**: 'Automatic' | 'Direct' | string: PersonalDesktopAssignment type for HostPool.
* **preferredAppGroupType**: 'Desktop' | 'None' | 'RailApplications' | string (Required): The type of preferred application group type, default to Desktop Application Group
* **registrationInfo**: [RegistrationInfo](#registrationinfo): Represents a RegistrationInfo definition.
* **ring**: int: The ring number of HostPool.
* **ssoContext**: string: Path to keyvault containing ssoContext secret.
* **validationEnvironment**: bool: Is validation environment.
* **vmTemplate**: string: VM template for sessionhosts configuration within hostpool.

## RegistrationInfo
### Properties
* **expirationTime**: string: Expiration time of registration token.
* **resetToken**: bool: Update registration token.
* **token**: string: The registration token base64 encoded string.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SessionHostProperties
### Properties
* **agentVersion**: string (ReadOnly): Version of agent on SessionHost.
* **allowNewSession**: bool (ReadOnly): Allow a new session.
* **assignedUser**: string (ReadOnly): User assigned to SessionHost.
* **lastHeartBeat**: string (ReadOnly): Last heart beat from SessionHost.
* **lastUpdateTime**: string (ReadOnly): The timestamp of the last update.
* **osVersion**: string (ReadOnly): The version of the OS on the session host.
* **resourceId**: string (ReadOnly): Resource Id of SessionHost's underlying virtual machine.
* **sessions**: int (ReadOnly): Number of sessions on SessionHost.
* **status**: 'Available' | 'Disconnected' | 'Shutdown' | 'Unavailable' | 'UpgradeFailed' | 'Upgrading' | string (ReadOnly): Status for a SessionHost.
* **statusTimestamp**: string (ReadOnly): The timestamp of the status.
* **sxSStackVersion**: string (ReadOnly): The version of the side by side stack on the session host.
* **updateErrorMessage**: string (ReadOnly): The error message.
* **updateState**: 'Failed' | 'Initial' | 'Pending' | 'Started' | 'Succeeded' | string (ReadOnly): Update state of a SessionHost.
* **virtualMachineId**: string (ReadOnly): Virtual Machine Id of SessionHost's underlying virtual machine.

## UserSessionProperties
### Properties
* **activeDirectoryUserName**: string (ReadOnly): The active directory user name.
* **applicationType**: 'Desktop' | 'RemoteApp' | string (ReadOnly): Application type of application.
* **createTime**: string (ReadOnly): The timestamp of the user session create.
* **sessionState**: 'Active' | 'Disconnected' | 'LogOff' | 'Pending' | 'Unknown' | 'UserProfileDiskMounted' | string (ReadOnly): State of user session.
* **userPrincipalName**: string (ReadOnly): The user principal name.

## WorkspaceProperties
### Properties
* **applicationGroupReferences**: string[]: List of applicationGroup resource Ids.
* **description**: string: Description of Workspace.
* **friendlyName**: string: Friendly name of Workspace.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

