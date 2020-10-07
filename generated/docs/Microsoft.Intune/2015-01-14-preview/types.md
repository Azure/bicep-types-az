# Microsoft.Intune @ 2015-01-14-preview

## Microsoft.Intune/locations/androidPolicies/apps
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MAMPolicyAppOrGroupIdProperties
* **type**: 'Microsoft.Intune/locations/androidPolicies/apps' (ReadOnly, DeployTimeConstant)

## MAMPolicyAppOrGroupIdProperties
### Properties
* **url**: string (Required)

## Microsoft.Intune/locations/androidPolicies/groups
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MAMPolicyAppOrGroupIdProperties
* **type**: 'Microsoft.Intune/locations/androidPolicies/groups' (ReadOnly, DeployTimeConstant)

## Microsoft.Intune/locations/androidPolicies
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: AndroidMAMPolicyProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Intune/locations/androidPolicies' (ReadOnly, DeployTimeConstant)

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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Intune/locations/iosPolicies/apps
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MAMPolicyAppOrGroupIdProperties
* **type**: 'Microsoft.Intune/locations/iosPolicies/apps' (ReadOnly, DeployTimeConstant)

## Microsoft.Intune/locations/iosPolicies/groups
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MAMPolicyAppOrGroupIdProperties
* **type**: 'Microsoft.Intune/locations/iosPolicies/groups' (ReadOnly, DeployTimeConstant)

## Microsoft.Intune/locations/iosPolicies
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: iOSMAMPolicyProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Intune/locations/iosPolicies' (ReadOnly, DeployTimeConstant)

## iOSMAMPolicyProperties
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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

