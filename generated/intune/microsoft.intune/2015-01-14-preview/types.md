# Microsoft.Intune @ 2015-01-14-preview

## Resource Microsoft.Intune/locations/androidPolicies@2015-01-14-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: AndroidMAMPolicyProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Intune/locations/androidPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Intune/locations/androidPolicies/apps@2015-01-14-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Intune/locations/androidPolicies/apps' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Intune/locations/androidPolicies/groups@2015-01-14-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Intune/locations/androidPolicies/groups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Intune/locations/iosPolicies@2015-01-14-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IOsmamPolicyProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Intune/locations/iosPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Intune/locations/iosPolicies/apps@2015-01-14-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Intune/locations/iosPolicies/apps' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Intune/locations/iosPolicies/groups@2015-01-14-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Intune/locations/iosPolicies/groups' (ReadOnly, DeployTimeConstant)

## AndroidMAMPolicyProperties
### Properties
* **accessRecheckOfflineTimeout**: any
* **accessRecheckOnlineTimeout**: any
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
* **offlineWipeTimeout**: any
* **pin**: 'notRequired' | 'required'
* **pinNumRetry**: int
* **screenCapture**: 'allow' | 'block'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IOsmamPolicyProperties
### Properties
* **accessRecheckOfflineTimeout**: any
* **accessRecheckOnlineTimeout**: any
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
* **offlineWipeTimeout**: any
* **pin**: 'notRequired' | 'required'
* **pinNumRetry**: int
* **touchId**: 'disable' | 'enable'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

