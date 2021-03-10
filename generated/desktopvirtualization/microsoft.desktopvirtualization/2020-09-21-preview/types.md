# Microsoft.DesktopVirtualization @ 2020-09-21-preview

## Resource Microsoft.DesktopVirtualization/applicationGroups@2020-09-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-21-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationGroupProperties](#applicationgroupproperties) (Required)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.DesktopVirtualization/applicationGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DesktopVirtualization/applicationGroups/applications@2020-09-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-21-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationProperties](#applicationproperties) (Required)
* **type**: 'Microsoft.DesktopVirtualization/applicationGroups/applications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DesktopVirtualization/hostPools@2020-09-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-21-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [HostPoolProperties](#hostpoolproperties) (Required)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.DesktopVirtualization/hostPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DesktopVirtualization/hostPools/msixPackages@2020-09-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-21-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MsixPackageProperties](#msixpackageproperties) (Required)
* **type**: 'Microsoft.DesktopVirtualization/hostPools/msixPackages' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DesktopVirtualization/workspaces@2020-09-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-21-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkspaceProperties](#workspaceproperties)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.DesktopVirtualization/workspaces' (ReadOnly, DeployTimeConstant)

## ApplicationGroupProperties
### Properties
* **applicationGroupType**: 'Desktop' | 'RemoteApp' (Required)
* **description**: string
* **friendlyName**: string
* **hostPoolArmPath**: string (Required)
* **workspaceArmPath**: string (ReadOnly)

## TrackedResourceTags
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
* **iconContent**: any (ReadOnly)
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
* **registrationInfo**: [RegistrationInfo](#registrationinfo)
* **ring**: int
* **ssoContext**: string
* **validationEnvironment**: bool
* **vmTemplate**: string

## RegistrationInfo
### Properties
* **expirationTime**: string
* **registrationTokenOperation**: 'Delete' | 'None' | 'Update'
* **token**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MsixPackageProperties
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
* **rawIcon**: any
* **rawPng**: any

## MsixPackageDependencies
### Properties
* **dependencyName**: string
* **minVersion**: string
* **publisher**: string

## WorkspaceProperties
### Properties
* **applicationGroupReferences**: string[]
* **description**: string
* **friendlyName**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

