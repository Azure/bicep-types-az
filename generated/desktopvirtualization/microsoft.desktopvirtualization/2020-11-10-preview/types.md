# Microsoft.DesktopVirtualization @ 2020-11-10-preview

## Resource Microsoft.DesktopVirtualization/applicationGroups@2020-11-10-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-10-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationGroupProperties](#applicationgroupproperties) (Required): Schema for ApplicationGroup properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DesktopVirtualization/applicationGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/applicationGroups/applications@2020-11-10-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-10-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationProperties](#applicationproperties) (Required): Schema for Application properties.
* **type**: 'Microsoft.DesktopVirtualization/applicationGroups/applications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/hostPools@2020-11-10-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-10-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HostPoolProperties](#hostpoolproperties) (Required): Properties of HostPool.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DesktopVirtualization/hostPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/hostPools/msixPackages@2020-11-10-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-10-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MsixPackageProperties](#msixpackageproperties) (Required): Schema for MSIX Package properties.
* **type**: 'Microsoft.DesktopVirtualization/hostPools/msixPackages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/scalingPlans@2020-11-10-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-10-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScalingPlanProperties](#scalingplanproperties): Scaling plan properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DesktopVirtualization/scalingPlans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/workspaces@2020-11-10-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-10-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): Schema for Workspace properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DesktopVirtualization/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## ApplicationGroupProperties
### Properties
* **applicationGroupType**: 'Desktop' | 'RemoteApp' (Required): Resource Type of ApplicationGroup.
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
* **applicationType**: 'InBuilt' | 'MsixApplication': Resource Type of Application.
* **commandLineArguments**: string: Command Line Arguments for Application.
* **commandLineSetting**: 'Allow' | 'DoNotAllow' | 'Require' (Required): Specifies whether this published application can be launched with command line arguments provided by the client, command line arguments specified at publish time, or no command line arguments at all.
* **description**: string: Description of Application.
* **filePath**: string: Specifies a path for the executable file for the application.
* **friendlyName**: string: Friendly name of Application.
* **iconContent**: any (ReadOnly): the icon a 64 bit string as a byte array.
* **iconHash**: string (ReadOnly): Hash of the icon.
* **iconIndex**: int: Index of the icon.
* **iconPath**: string: Path to icon.
* **msixPackageApplicationId**: string: Specifies the package application Id for MSIX applications
* **msixPackageFamilyName**: string: Specifies the package family name for MSIX applications
* **showInPortal**: bool: Specifies whether to show the RemoteApp program in the RD Web Access server.

## HostPoolProperties
### Properties
* **applicationGroupReferences**: string[] (ReadOnly): List of applicationGroup links.
* **customRdpProperty**: string: Custom rdp property of HostPool.
* **description**: string: Description of HostPool.
* **friendlyName**: string: Friendly name of HostPool.
* **hostPoolType**: 'Personal' | 'Pooled' (Required): HostPool type for desktop.
* **loadBalancerType**: 'BreadthFirst' | 'DepthFirst' | 'Persistent' (Required): The type of the load balancer.
* **maxSessionLimit**: int: The max session limit of HostPool.
* **personalDesktopAssignmentType**: 'Automatic' | 'Direct': PersonalDesktopAssignment type for HostPool.
* **preferredAppGroupType**: 'Desktop' | 'None' | 'RailApplications' (Required): The type of preferred application group type, default to Desktop Application Group
* **registrationInfo**: [RegistrationInfo](#registrationinfo): Represents a RegistrationInfo definition.
* **ring**: int: The ring number of HostPool.
* **ssoadfsAuthority**: string: URL to customer ADFS server for signing WVD SSO certificates.
* **ssoClientId**: string: ClientId for the registered Relying Party used to issue WVD SSO certificates.
* **ssoClientSecretKeyVaultPath**: string: Path to Azure KeyVault storing the secret used for communication to ADFS.
* **ssoSecretType**: 'Certificate' | 'CertificateInKeyVault' | 'SharedKey' | 'SharedKeyInKeyVault': The type of single sign on Secret Type.
* **startVMOnConnect**: bool: The flag to turn on/off StartVMOnConnect feature.
* **validationEnvironment**: bool: Is validation environment.
* **vmTemplate**: string: VM template for sessionhosts configuration within hostpool.

## RegistrationInfo
### Properties
* **expirationTime**: string: Expiration time of registration token.
* **registrationTokenOperation**: 'Delete' | 'None' | 'Update': The type of resetting the token.
* **token**: string: The registration token base64 encoded string.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MsixPackageProperties
### Properties
* **displayName**: string: User friendly Name to be displayed in the portal.
* **imagePath**: string: VHD/CIM image path on Network Share.
* **isActive**: bool: Make this version of the package the active one across the hostpool.
* **isRegularRegistration**: bool: Specifies how to register Package in feed.
* **lastUpdated**: string: Date Package was last updated, found in the appxmanifest.xml.
* **packageApplications**: [MsixPackageApplications](#msixpackageapplications)[]: List of package applications.
* **packageDependencies**: [MsixPackageDependencies](#msixpackagedependencies)[]: List of package dependencies.
* **packageFamilyName**: string: Package Family Name from appxmanifest.xml. Contains Package Name and Publisher name.
* **packageName**: string: Package Name from appxmanifest.xml.
* **packageRelativePath**: string: Relative Path to the package inside the image.
* **version**: string: Package Version found in the appxmanifest.xml.

## MsixPackageApplications
### Properties
* **appId**: string: Package Application Id, found in appxmanifest.xml.
* **appUserModelID**: string: Used to activate Package Application. Consists of Package Name and ApplicationID. Found in appxmanifest.xml.
* **description**: string: Description of Package Application.
* **friendlyName**: string: User friendly name.
* **iconImageName**: string: User friendly name.
* **rawIcon**: any: the icon a 64 bit string as a byte array.
* **rawPng**: any: the icon a 64 bit string as a byte array.

## MsixPackageDependencies
### Properties
* **dependencyName**: string: Name of package dependency.
* **minVersion**: string: Dependency version required.
* **publisher**: string: Name of dependency publisher.

## ScalingPlanProperties
### Properties
* **description**: string: Description of scaling plan.
* **exclusionTag**: string: Exclusion tag for scaling plan.
* **friendlyName**: string: User friendly name of scaling plan.
* **hostPoolReferences**: [ScalingHostPoolReference](#scalinghostpoolreference)[]: List of ScalingHostPoolReference definitions.
* **hostPoolType**: 'Personal' | 'Pooled': HostPool type for desktop.
* **schedules**: [ScalingSchedule](#scalingschedule)[]: List of ScalingSchedule definitions.
* **timeZone**: string: Timezone of the scaling plan.

## ScalingHostPoolReference
### Properties
* **hostPoolArmPath**: string: Arm path of referenced hostpool.
* **scalingPlanEnabled**: bool: Is the scaling plan enabled for this hostpool.

## ScalingSchedule
### Properties
* **daysOfWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]: Set of days of the week on which this schedule is active.
* **name**: string: Name of the scaling schedule.
* **offPeakLoadBalancingAlgorithm**: 'BreadthFirst' | 'DepthFirst': Load balancing algorithm for ramp up period.
* **offPeakStartTime**: string: Starting time for off-peak period.
* **peakLoadBalancingAlgorithm**: 'BreadthFirst' | 'DepthFirst': Load balancing algorithm for ramp up period.
* **peakStartTime**: string: Starting time for peak period.
* **rampDownCapacityThresholdPct**: int: Capacity threshold for ramp down period.
* **rampDownForceLogoffUsers**: bool: Should users be logged off forcefully from hosts.
* **rampDownLoadBalancingAlgorithm**: 'BreadthFirst' | 'DepthFirst': Load balancing algorithm for ramp up period.
* **rampDownMinimumHostsPct**: int: Minimum host percentage for ramp down period.
* **rampDownNotificationMessage**: string: Notification message for users during ramp down period.
* **rampDownStartTime**: string: Starting time for ramp down period.
* **rampDownStopHostsWhen**: 'ZeroActiveSessions' | 'ZeroSessions': Specifies when to stop hosts during ramp down period.
* **rampDownWaitTimeMinutes**: int: Number of minutes to wait to stop hosts during ramp down period.
* **rampUpCapacityThresholdPct**: int: Capacity threshold for ramp up period.
* **rampUpLoadBalancingAlgorithm**: 'BreadthFirst' | 'DepthFirst': Load balancing algorithm for ramp up period.
* **rampUpMinimumHostsPct**: int: Minimum host percentage for ramp up period.
* **rampUpStartTime**: string: Starting time for ramp up period.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkspaceProperties
### Properties
* **applicationGroupReferences**: string[]: List of applicationGroup resource Ids.
* **description**: string: Description of Workspace.
* **friendlyName**: string: Friendly name of Workspace.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

