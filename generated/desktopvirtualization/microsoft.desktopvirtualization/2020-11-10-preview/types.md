# Microsoft.DesktopVirtualization @ 2020-11-10-preview

## Resource Microsoft.DesktopVirtualization/applicationGroups@2020-11-10-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-10-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationGroupProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DesktopVirtualization/applicationGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DesktopVirtualization/applicationGroups/applications@2020-11-10-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-10-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationProperties (Required)
* **type**: 'Microsoft.DesktopVirtualization/applicationGroups/applications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DesktopVirtualization/hostPools@2020-11-10-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-10-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: HostPoolProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DesktopVirtualization/hostPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DesktopVirtualization/hostPools/msixPackages@2020-11-10-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-10-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MSIXPackageProperties (Required)
* **type**: 'Microsoft.DesktopVirtualization/hostPools/msixPackages' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DesktopVirtualization/scalingPlans@2020-11-10-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-10-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ScalingPlanProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DesktopVirtualization/scalingPlans' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DesktopVirtualization/workspaces@2020-11-10-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-10-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkspaceProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DesktopVirtualization/workspaces' (ReadOnly, DeployTimeConstant)

## ApplicationGroupProperties
### Properties
* **applicationGroupType**: 'Desktop' | 'RemoteApp' (Required)
* **description**: string
* **friendlyName**: string
* **hostPoolArmPath**: string (Required)
* **workspaceArmPath**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationProperties
### Properties
* **applicationType**: 'InBuilt' | 'MsixApplication'
* **commandLineArguments**: string
* **commandLineSetting**: 'Allow' | 'DoNotAllow' | 'Require' (Required)
* **description**: string
* **filePath**: string
* **friendlyName**: string
* **iconContent**: array (ReadOnly)
* **iconHash**: string (ReadOnly)
* **iconIndex**: int
* **iconPath**: string
* **msixPackageApplicationId**: string
* **msixPackageFamilyName**: string
* **showInPortal**: bool

## HostPoolProperties
### Properties
* **applicationGroupReferences**: string[] (ReadOnly)
* **customRdpProperty**: string
* **description**: string
* **friendlyName**: string
* **hostPoolType**: 'Personal' | 'Pooled' (Required)
* **loadBalancerType**: 'BreadthFirst' | 'DepthFirst' | 'Persistent' (Required)
* **maxSessionLimit**: int
* **personalDesktopAssignmentType**: 'Automatic' | 'Direct'
* **preferredAppGroupType**: 'Desktop' | 'None' | 'RailApplications' (Required)
* **registrationInfo**: RegistrationInfo
* **ring**: int
* **ssoadfsAuthority**: string
* **ssoClientId**: string
* **ssoClientSecretKeyVaultPath**: string
* **ssoSecretType**: 'Certificate' | 'CertificateInKeyVault' | 'SharedKey' | 'SharedKeyInKeyVault'
* **startVMOnConnect**: bool
* **validationEnvironment**: bool
* **vmTemplate**: string

## RegistrationInfo
### Properties
* **expirationTime**: string
* **registrationTokenOperation**: 'Delete' | 'None' | 'Update'
* **token**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MSIXPackageProperties
### Properties
* **displayName**: string
* **imagePath**: string
* **isActive**: bool
* **isRegularRegistration**: bool
* **lastUpdated**: string
* **packageApplications**: MsixPackageApplications[]
* **packageDependencies**: MsixPackageDependencies[]
* **packageFamilyName**: string
* **packageName**: string
* **packageRelativePath**: string
* **version**: string

## MsixPackageApplications
### Properties
* **appId**: string
* **appUserModelID**: string
* **description**: string
* **friendlyName**: string
* **iconImageName**: string
* **rawIcon**: array
* **rawPng**: array

## MsixPackageDependencies
### Properties
* **dependencyName**: string
* **minVersion**: string
* **publisher**: string

## ScalingPlanProperties
### Properties
* **description**: string
* **exclusionTag**: string
* **friendlyName**: string
* **hostPoolReferences**: ScalingHostPoolReference[]
* **hostPoolType**: 'Personal' | 'Pooled'
* **schedules**: ScalingSchedule[]
* **timeZone**: string

## ScalingHostPoolReference
### Properties
* **hostPoolArmPath**: string
* **scalingPlanEnabled**: bool

## ScalingSchedule
### Properties
* **daysOfWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]
* **name**: string
* **offPeakLoadBalancingAlgorithm**: 'BreadthFirst' | 'DepthFirst'
* **offPeakStartTime**: string
* **peakLoadBalancingAlgorithm**: 'BreadthFirst' | 'DepthFirst'
* **peakStartTime**: string
* **rampDownCapacityThresholdPct**: int
* **rampDownForceLogoffUsers**: bool
* **rampDownLoadBalancingAlgorithm**: 'BreadthFirst' | 'DepthFirst'
* **rampDownMinimumHostsPct**: int
* **rampDownNotificationMessage**: string
* **rampDownStartTime**: string
* **rampDownStopHostsWhen**: 'ZeroActiveSessions' | 'ZeroSessions'
* **rampDownWaitTimeMinutes**: int
* **rampUpCapacityThresholdPct**: int
* **rampUpLoadBalancingAlgorithm**: 'BreadthFirst' | 'DepthFirst'
* **rampUpMinimumHostsPct**: int
* **rampUpStartTime**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkspaceProperties
### Properties
* **applicationGroupReferences**: string[]
* **description**: string
* **friendlyName**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

