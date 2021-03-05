# Microsoft.DesktopVirtualization @ 2019-12-10-preview

## Resource Microsoft.DesktopVirtualization/applicationGroups@2019-12-10-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-10-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationGroupProperties (Required)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.DesktopVirtualization/applicationGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DesktopVirtualization/applicationGroups/applications@2019-12-10-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-10-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationProperties (Required)
* **type**: 'Microsoft.DesktopVirtualization/applicationGroups/applications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DesktopVirtualization/hostPools@2019-12-10-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-10-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: HostPoolProperties (Required)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.DesktopVirtualization/hostPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DesktopVirtualization/workspaces@2019-12-10-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-10-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkspaceProperties
* **tags**: TrackedResourceTags
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
* **commandLineArguments**: string
* **commandLineSetting**: 'Allow' | 'DoNotAllow' | 'Require' (Required)
* **description**: string
* **filePath**: string
* **friendlyName**: string
* **iconContent**: any (ReadOnly)
* **iconHash**: string (ReadOnly)
* **iconIndex**: int
* **iconPath**: string
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

## WorkspaceProperties
### Properties
* **applicationGroupReferences**: string[]
* **description**: string
* **friendlyName**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

