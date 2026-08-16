# Microsoft.Intune @ 2015-01-14-preview

## Resource Microsoft.Intune/locations@2015-01-14-preview
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: 'hostName' (Required, DeployTimeConstant): The resource name
* **properties**: [LocationProperties](#locationproperties) (ReadOnly)
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource Tags
* **type**: 'Microsoft.Intune/locations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Intune/locations/androidPolicies@2015-01-14-preview
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AndroidMAMPolicyProperties](#androidmampolicyproperties): Intune MAM iOS Policy Properties.
* **tags**: [ResourceTags](#resourcetags): Resource Tags
* **type**: 'Microsoft.Intune/locations/androidPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Intune/locations/androidPolicies/apps@2015-01-14-preview
* **Readable Scope(s)**: None
* **Writable Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MAMPolicyAppOrGroupIdProperties](#mampolicyapporgroupidproperties): Android Policy request body for Intune MAM.
* **type**: 'Microsoft.Intune/locations/androidPolicies/apps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Intune/locations/androidPolicies/groups@2015-01-14-preview
* **Readable Scope(s)**: None
* **Writable Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MAMPolicyAppOrGroupIdProperties](#mampolicyapporgroupidproperties): Android Policy request body for Intune MAM.
* **type**: 'Microsoft.Intune/locations/androidPolicies/groups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Intune/locations/flaggedUsers@2015-01-14-preview
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FlaggedUserProperties](#flaggeduserproperties) (ReadOnly)
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource Tags
* **type**: 'Microsoft.Intune/locations/flaggedUsers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Intune/locations/iosPolicies@2015-01-14-preview
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IOsmamPolicyProperties](#iosmampolicyproperties): Intune MAM iOS Policy Properties.
* **tags**: [ResourceTags](#resourcetags): Resource Tags
* **type**: 'Microsoft.Intune/locations/iosPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Intune/locations/iosPolicies/apps@2015-01-14-preview
* **Readable Scope(s)**: None
* **Writable Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MAMPolicyAppOrGroupIdProperties](#mampolicyapporgroupidproperties): Android Policy request body for Intune MAM.
* **type**: 'Microsoft.Intune/locations/iosPolicies/apps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Intune/locations/iosPolicies/groups@2015-01-14-preview
* **Readable Scope(s)**: None
* **Writable Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MAMPolicyAppOrGroupIdProperties](#mampolicyapporgroupidproperties): Android Policy request body for Intune MAM.
* **type**: 'Microsoft.Intune/locations/iosPolicies/groups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Intune/locations/statuses@2015-01-14-preview
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **nextlink**: string (ReadOnly): Gets the URL to get the next set of results.
* **properties**: [StatusesProperties](#statusesproperties) (ReadOnly)
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource Tags
* **type**: 'Microsoft.Intune/locations/statuses' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Intune/locations/users/devices@2015-01-14-preview
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeviceProperties](#deviceproperties) (ReadOnly)
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource Tags
* **type**: 'Microsoft.Intune/locations/users/devices' (ReadOnly, DeployTimeConstant): The resource type

## Function wipe (Microsoft.Intune/locations/users/devices@2015-01-14-preview)
* **Resource**: Microsoft.Intune/locations/users/devices
* **ApiVersion**: 2015-01-14-preview
* **Output**: [WipeDeviceOperationResult](#wipedeviceoperationresult)

## AndroidMAMPolicyProperties
### Properties
* **accessRecheckOfflineTimeout**: string
* **accessRecheckOnlineTimeout**: string
* **appSharingFromLevel**: 'allApps' | 'none' | 'policyManagedApps' | string
* **appSharingToLevel**: 'allApps' | 'none' | 'policyManagedApps' | string
* **authentication**: 'notRequired' | 'required' | string
* **clipboardSharingLevel**: 'allApps' | 'blocked' | 'policyManagedApps' | 'policyManagedAppsWithPasteIn' | string
* **dataBackup**: 'allow' | 'block' | string
* **description**: string
* **deviceCompliance**: 'disable' | 'enable' | string
* **fileEncryption**: 'notRequired' | 'required' | string
* **fileSharingSaveAs**: 'allow' | 'block' | string
* **friendlyName**: string (Required)
* **groupStatus**: 'notTargeted' | 'targeted' | string (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **managedBrowser**: 'notRequired' | 'required' | string
* **numOfApps**: int (ReadOnly)
* **offlineWipeTimeout**: string
* **pin**: 'notRequired' | 'required' | string
* **pinNumRetry**: int
* **screenCapture**: 'allow' | 'block' | string

## DeviceProperties
### Properties
* **deviceType**: string (Required)
* **friendlyName**: string (Required)
* **platform**: string (Required)
* **platformVersion**: string (Required)
* **userId**: string (Required)

## FlaggedUserProperties
### Properties
* **errorCount**: int (ReadOnly)
* **friendlyName**: string (ReadOnly)

## IOsmamPolicyProperties
### Properties
* **accessRecheckOfflineTimeout**: string
* **accessRecheckOnlineTimeout**: string
* **appSharingFromLevel**: 'allApps' | 'none' | 'policyManagedApps' | string
* **appSharingToLevel**: 'allApps' | 'none' | 'policyManagedApps' | string
* **authentication**: 'notRequired' | 'required' | string
* **clipboardSharingLevel**: 'allApps' | 'blocked' | 'policyManagedApps' | 'policyManagedAppsWithPasteIn' | string
* **dataBackup**: 'allow' | 'block' | string
* **description**: string
* **deviceCompliance**: 'disable' | 'enable' | string
* **fileEncryptionLevel**: 'afterDeviceRestart' | 'deviceLocked' | 'deviceLockedExceptFilesOpen' | 'useDeviceSettings' | string
* **fileSharingSaveAs**: 'allow' | 'block' | string
* **friendlyName**: string (Required)
* **groupStatus**: 'notTargeted' | 'targeted' | string (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **managedBrowser**: 'notRequired' | 'required' | string
* **numOfApps**: int (ReadOnly)
* **offlineWipeTimeout**: string
* **pin**: 'notRequired' | 'required' | string
* **pinNumRetry**: int
* **touchId**: 'disable' | 'enable' | string

## LocationProperties
### Properties
* **hostName**: string (Required)

## MAMPolicyAppOrGroupIdProperties
### Properties
* **url**: string (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## WipeDeviceOperationResult
### Properties
* **id**: string (ReadOnly): Resource Id
* **location**: string: Resource Location
* **name**: string (ReadOnly): Resource name
* **properties**: [WipeDeviceOperationResultProperties](#wipedeviceoperationresultproperties)
* **tags**: [ResourceTags](#resourcetags): Resource Tags
* **type**: string (ReadOnly): Resource type

## WipeDeviceOperationResultProperties
### Properties
* **value**: string (Required)

