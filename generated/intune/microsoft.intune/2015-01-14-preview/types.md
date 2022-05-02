# Microsoft.Intune @ 2015-01-14-preview

## Resource Microsoft.Intune/locations@2015-01-14-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: 'hostName' (Required, DeployTimeConstant): The resource name
* **properties**: [LocationProperties](#locationproperties) (ReadOnly)
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource Tags
* **type**: 'Microsoft.Intune/locations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Intune/locations/androidPolicies@2015-01-14-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AndroidMAMPolicyProperties](#androidmampolicyproperties): Intune MAM iOS Policy Properties.
* **tags**: [ResourceTags](#resourcetags): Resource Tags
* **type**: 'Microsoft.Intune/locations/androidPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Intune/locations/androidPolicies/apps@2015-01-14-preview (WriteOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MAMPolicyAppOrGroupIdProperties](#mampolicyapporgroupidproperties) (WriteOnly): Android Policy request body for Intune MAM.
* **type**: 'Microsoft.Intune/locations/androidPolicies/apps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Intune/locations/androidPolicies/groups@2015-01-14-preview (WriteOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MAMPolicyAppOrGroupIdProperties](#mampolicyapporgroupidproperties) (WriteOnly): Android Policy request body for Intune MAM.
* **type**: 'Microsoft.Intune/locations/androidPolicies/groups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Intune/locations/flaggedUsers@2015-01-14-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FlaggedUserProperties](#flaggeduserproperties) (ReadOnly)
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource Tags
* **type**: 'Microsoft.Intune/locations/flaggedUsers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Intune/locations/iosPolicies@2015-01-14-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IOsmamPolicyProperties](#iosmampolicyproperties): Intune MAM iOS Policy Properties.
* **tags**: [ResourceTags](#resourcetags): Resource Tags
* **type**: 'Microsoft.Intune/locations/iosPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Intune/locations/iosPolicies/apps@2015-01-14-preview (WriteOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MAMPolicyAppOrGroupIdProperties](#mampolicyapporgroupidproperties) (WriteOnly): Android Policy request body for Intune MAM.
* **type**: 'Microsoft.Intune/locations/iosPolicies/apps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Intune/locations/iosPolicies/groups@2015-01-14-preview (WriteOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MAMPolicyAppOrGroupIdProperties](#mampolicyapporgroupidproperties) (WriteOnly): Android Policy request body for Intune MAM.
* **type**: 'Microsoft.Intune/locations/iosPolicies/groups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Intune/locations/statuses@2015-01-14-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **nextlink**: string (ReadOnly): Gets the URL to get the next set of results.
* **properties**: [StatusesProperties](#statusesproperties) (ReadOnly)
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource Tags
* **type**: 'Microsoft.Intune/locations/statuses' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Intune/locations/users/devices@2015-01-14-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeviceProperties](#deviceproperties) (ReadOnly)
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource Tags
* **type**: 'Microsoft.Intune/locations/users/devices' (ReadOnly, DeployTimeConstant): The resource type

## LocationProperties
### Properties
* **hostName**: string (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AndroidMAMPolicyProperties
### Properties
* **accessRecheckOfflineTimeout**: string
* **accessRecheckOnlineTimeout**: string
* **appSharingFromLevel**: 'allApps' | 'none' | 'policyManagedApps'
* **appSharingToLevel**: 'allApps' | 'none' | 'policyManagedApps'
* **authentication**: 'notRequired' | 'required'
* **clipboardSharingLevel**: 'allApps' | 'blocked' | 'policyManagedApps' | 'policyManagedAppsWithPasteIn'
* **dataBackup**: 'allow' | 'block'
* **description**: string
* **deviceCompliance**: 'disable' | 'enable'
* **fileEncryption**: 'notRequired' | 'required'
* **fileSharingSaveAs**: 'allow' | 'block'
* **friendlyName**: string (Required)
* **groupStatus**: 'notTargeted' | 'targeted' (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **managedBrowser**: 'notRequired' | 'required'
* **numOfApps**: int (ReadOnly)
* **offlineWipeTimeout**: string
* **pin**: 'notRequired' | 'required'
* **pinNumRetry**: int
* **screenCapture**: 'allow' | 'block'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MAMPolicyAppOrGroupIdProperties
### Properties
* **url**: string (Required, WriteOnly)

## FlaggedUserProperties
### Properties
* **errorCount**: int (ReadOnly)
* **friendlyName**: string (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IOsmamPolicyProperties
### Properties
* **accessRecheckOfflineTimeout**: string
* **accessRecheckOnlineTimeout**: string
* **appSharingFromLevel**: 'allApps' | 'none' | 'policyManagedApps'
* **appSharingToLevel**: 'allApps' | 'none' | 'policyManagedApps'
* **authentication**: 'notRequired' | 'required'
* **clipboardSharingLevel**: 'allApps' | 'blocked' | 'policyManagedApps' | 'policyManagedAppsWithPasteIn'
* **dataBackup**: 'allow' | 'block'
* **description**: string
* **deviceCompliance**: 'disable' | 'enable'
* **fileEncryptionLevel**: 'afterDeviceRestart' | 'deviceLocked' | 'deviceLockedExceptFilesOpen' | 'useDeviceSettings'
* **fileSharingSaveAs**: 'allow' | 'block'
* **friendlyName**: string (Required)
* **groupStatus**: 'notTargeted' | 'targeted' (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **managedBrowser**: 'notRequired' | 'required'
* **numOfApps**: int (ReadOnly)
* **offlineWipeTimeout**: string
* **pin**: 'notRequired' | 'required'
* **pinNumRetry**: int
* **touchId**: 'disable' | 'enable'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StatusesProperties
### Properties
* **deployedPolicies**: int (ReadOnly)
* **enrolledUsers**: int (ReadOnly)
* **flaggedUsers**: int (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **policyAppliedUsers**: int (ReadOnly)
* **status**: string (ReadOnly)
* **wipeFailedApps**: int (ReadOnly)
* **wipePendingApps**: int (ReadOnly)
* **wipeSucceededApps**: int (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DeviceProperties
### Properties
* **deviceType**: string (ReadOnly)
* **friendlyName**: string (ReadOnly)
* **platform**: string (ReadOnly)
* **platformVersion**: string (ReadOnly)
* **userId**: string (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

