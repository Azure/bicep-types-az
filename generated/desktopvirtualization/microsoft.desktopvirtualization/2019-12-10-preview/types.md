# Microsoft.DesktopVirtualization @ 2019-12-10-preview

## Resource Microsoft.DesktopVirtualization/applicationGroups@2019-12-10-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-10-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationGroupProperties](#applicationgroupproperties) (Required): Detailed properties for ApplicationGroup
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DesktopVirtualization/applicationGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/applicationGroups/applications@2019-12-10-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-10-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationProperties](#applicationproperties) (Required): Detailed properties for Application
* **type**: 'Microsoft.DesktopVirtualization/applicationGroups/applications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/hostPools@2019-12-10-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-10-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HostPoolProperties](#hostpoolproperties) (Required): Detailed properties for HostPool
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DesktopVirtualization/hostPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/workspaces@2019-12-10-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-10-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): Detailed properties for Workspace
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DesktopVirtualization/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## ApplicationGroupProperties
### Properties
* **applicationGroupType**: 'Desktop' | 'RemoteApp' | string (Required): Resource Type of ApplicationGroup.
* **description**: string: Description of ApplicationGroup.
* **friendlyName**: string: Friendly name of ApplicationGroup.
* **hostPoolArmPath**: string (Required): HostPool arm path of ApplicationGroup.
* **workspaceArmPath**: string (ReadOnly): Workspace arm path of ApplicationGroup.

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

## HostPoolProperties
### Properties
* **applicationGroupReferences**: string[] (ReadOnly): List of applicationGroup links.
* **customRdpProperty**: string: Custom rdp property of HostPool.
* **description**: string: Description of HostPool.
* **friendlyName**: string: Friendly name of HostPool.
* **hostPoolType**: 'Personal' | 'Pooled' | string (Required): HostPool type for desktop.
* **loadBalancerType**: 'BreadthFirst' | 'DepthFirst' | 'Persistent' | string (Required): The type of the load balancer.
* **maxSessionLimit**: int: The max session limit of HostPool.
* **personalDesktopAssignmentType**: 'Automatic' | 'Direct' | string: PersonalDesktopAssignment type for HostPool.
* **preferredAppGroupType**: 'Desktop' | 'None' | 'RailApplications' | string (Required): The type of preferred application group type, default to Desktop Application Group
* **registrationInfo**: [RegistrationInfo](#registrationinfo): The registration info of HostPool.
* **ring**: int: The ring number of HostPool.
* **ssoContext**: string: Path to keyvault containing ssoContext secret.
* **validationEnvironment**: bool: Is validation environment.
* **vmTemplate**: string: VM template for sessionhosts configuration within hostpool.

## RegistrationInfo
### Properties
* **expirationTime**: string: Expiration time of registration token.
* **registrationTokenOperation**: 'Delete' | 'None' | 'Update' | string: The type of resetting the token.
* **token**: string: The registration token base64 encoded string.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkspaceProperties
### Properties
* **applicationGroupReferences**: string[]: List of applicationGroup resource Ids.
* **description**: string: Description of Workspace.
* **friendlyName**: string: Friendly name of Workspace.

