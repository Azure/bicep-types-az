# Microsoft.DesktopVirtualization @ 2021-02-01-preview

## Resource Microsoft.DesktopVirtualization/applicationGroups@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [schemas:71_identity](#schemas71identity)
* **kind**: string
* **location**: string
* **managedBy**: string
* **name**: string (Required, DeployTimeConstant)
* **plan**: [schemas:71_identity](#schemas71identity)
* **properties**: [ApplicationGroupProperties](#applicationgroupproperties) (Required)
* **sku**: [schemas:71_identity](#schemas71identity)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DesktopVirtualization/applicationGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DesktopVirtualization/applicationGroups/applications@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationProperties](#applicationproperties) (Required)
* **type**: 'Microsoft.DesktopVirtualization/applicationGroups/applications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DesktopVirtualization/hostPools@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [schemas:71_identity](#schemas71identity)
* **kind**: string
* **location**: string
* **managedBy**: string
* **name**: string (Required, DeployTimeConstant)
* **plan**: [schemas:71_identity](#schemas71identity)
* **properties**: [HostPoolProperties](#hostpoolproperties) (Required)
* **sku**: [schemas:71_identity](#schemas71identity)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DesktopVirtualization/hostPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DesktopVirtualization/hostPools/msixPackages@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MSIXPackageProperties](#msixpackageproperties) (Required)
* **type**: 'Microsoft.DesktopVirtualization/hostPools/msixPackages' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DesktopVirtualization/scalingPlans@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [schemas:71_identity](#schemas71identity)
* **kind**: string
* **location**: string
* **managedBy**: string
* **name**: string (Required, DeployTimeConstant)
* **plan**: [schemas:71_identity](#schemas71identity)
* **properties**: [ScalingPlanProperties](#scalingplanproperties)
* **sku**: [schemas:71_identity](#schemas71identity)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DesktopVirtualization/scalingPlans' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DesktopVirtualization/workspaces@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [schemas:71_identity](#schemas71identity)
* **kind**: string
* **location**: string
* **managedBy**: string
* **name**: string (Required, DeployTimeConstant)
* **plan**: [schemas:71_identity](#schemas71identity)
* **properties**: [WorkspaceProperties](#workspaceproperties)
* **sku**: [schemas:71_identity](#schemas71identity)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DesktopVirtualization/workspaces' (ReadOnly, DeployTimeConstant)

## schemas:71_identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned'

## ApplicationGroupProperties
### Properties
* **applicationGroupType**: 'Desktop' | 'RemoteApp' (Required)
* **cloudPcResource**: bool (ReadOnly)
* **description**: string
* **friendlyName**: string
* **hostPoolArmPath**: string (Required)
* **migrationRequest**: [MigrationRequestProperties](#migrationrequestproperties)
* **objectId**: string (ReadOnly)
* **workspaceArmPath**: string (ReadOnly)

## MigrationRequestProperties
### Properties
* **migrationPath**: string
* **operation**: 'Complete' | 'Hide' | 'Revoke' | 'Start' | 'Unhide'

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
* **objectId**: string (ReadOnly)
* **showInPortal**: bool

## HostPoolProperties
### Properties
* **applicationGroupReferences**: string[] (ReadOnly)
* **cloudPcResource**: bool (ReadOnly)
* **customRdpProperty**: string
* **description**: string
* **friendlyName**: string
* **hostPoolType**: 'BYODesktop' | 'Personal' | 'Pooled' (Required)
* **loadBalancerType**: 'BreadthFirst' | 'DepthFirst' | 'Persistent' (Required)
* **maxSessionLimit**: int
* **migrationRequest**: [MigrationRequestProperties](#migrationrequestproperties)
* **objectId**: string (ReadOnly)
* **personalDesktopAssignmentType**: 'Automatic' | 'Direct'
* **preferredAppGroupType**: 'Desktop' | 'None' | 'RailApplications' (Required)
* **registrationInfo**: [RegistrationInfo](#registrationinfo)
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
* **packageApplications**: [MsixPackageApplications](#msixpackageapplications)[]
* **packageDependencies**: [MsixPackageDependencies](#msixpackagedependencies)[]
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
* **hostPoolReferences**: [ScalingHostPoolReference](#scalinghostpoolreference)[]
* **hostPoolType**: 'BYODesktop' | 'Personal' | 'Pooled'
* **objectId**: string (ReadOnly)
* **ring**: int
* **schedules**: [ScalingSchedule](#scalingschedule)[]
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
* **cloudPcResource**: bool (ReadOnly)
* **description**: string
* **friendlyName**: string
* **objectId**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

