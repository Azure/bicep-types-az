# Microsoft.Intune @ 2015-01-14-preview

## Resource Microsoft.Intune/locations/androidPolicies@2015-01-14-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AndroidMAMPolicyProperties](#androidmampolicyproperties): Intune MAM iOS Policy Properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource Tags
* **type**: 'Microsoft.Intune/locations/androidPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Intune/locations/androidPolicies/apps@2015-01-14-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MAMPolicyAppOrGroupIdProperties](#mampolicyapporgroupidproperties): Android Policy request body for Intune MAM.
* **type**: 'Microsoft.Intune/locations/androidPolicies/apps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Intune/locations/androidPolicies/groups@2015-01-14-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MAMPolicyAppOrGroupIdProperties](#mampolicyapporgroupidproperties): Android Policy request body for Intune MAM.
* **type**: 'Microsoft.Intune/locations/androidPolicies/groups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Intune/locations/iosPolicies@2015-01-14-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [iOSMAMPolicyProperties](#iosmampolicyproperties): Intune MAM iOS Policy Properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource Tags
* **type**: 'Microsoft.Intune/locations/iosPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Intune/locations/iosPolicies/apps@2015-01-14-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MAMPolicyAppOrGroupIdProperties](#mampolicyapporgroupidproperties): Android Policy request body for Intune MAM.
* **type**: 'Microsoft.Intune/locations/iosPolicies/apps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Intune/locations/iosPolicies/groups@2015-01-14-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-01-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MAMPolicyAppOrGroupIdProperties](#mampolicyapporgroupidproperties): Android Policy request body for Intune MAM.
* **type**: 'Microsoft.Intune/locations/iosPolicies/groups' (ReadOnly, DeployTimeConstant): The resource type

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
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MAMPolicyAppOrGroupIdProperties
### Properties
* **url**: string (Required)

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
### Properties
### Additional Properties
* **Additional Properties Type**: string

