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
* **accessRecheckOfflineTimeout**: string:
* **accessRecheckOnlineTimeout**: string:
* **appSharingFromLevel**: 'allApps' | 'none' | 'policyManagedApps': Possible values include: 'none', 'policyManagedApps', 'allApps'
* **appSharingToLevel**: 'allApps' | 'none' | 'policyManagedApps': Possible values include: 'none', 'policyManagedApps', 'allApps'
* **authentication**: 'notRequired' | 'required': Possible values include: 'required', 'notRequired'
* **clipboardSharingLevel**: 'allApps' | 'blocked' | 'policyManagedApps' | 'policyManagedAppsWithPasteIn': Possible values include: 'blocked', 'policyManagedApps', 'policyManagedAppsWithPasteIn', 'allApps'
* **dataBackup**: 'allow' | 'block': Possible values include: 'allow', 'block'
* **description**: string:
* **deviceCompliance**: 'disable' | 'enable': Possible values include: 'enable', 'disable'
* **fileEncryption**: 'notRequired' | 'required': Possible values include: 'required', 'notRequired'
* **fileSharingSaveAs**: 'allow' | 'block': Possible values include: 'allow', 'block'
* **friendlyName**: string (Required):
* **groupStatus**: 'notTargeted' | 'targeted' (ReadOnly): Possible values include: 'notTargeted', 'targeted'
* **lastModifiedTime**: string (ReadOnly):
* **managedBrowser**: 'notRequired' | 'required': Possible values include: 'required', 'notRequired'
* **numOfApps**: int (ReadOnly):
* **offlineWipeTimeout**: string:
* **pin**: 'notRequired' | 'required': Possible values include: 'required', 'notRequired'
* **pinNumRetry**: int:
* **screenCapture**: 'allow' | 'block': Possible values include: 'allow', 'block'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MAMPolicyAppOrGroupIdProperties
### Properties
* **url**: string (Required):

## iOSMAMPolicyProperties
### Properties
* **accessRecheckOfflineTimeout**: string:
* **accessRecheckOnlineTimeout**: string:
* **appSharingFromLevel**: 'allApps' | 'none' | 'policyManagedApps': Possible values include: 'none', 'policyManagedApps', 'allApps'
* **appSharingToLevel**: 'allApps' | 'none' | 'policyManagedApps': Possible values include: 'none', 'policyManagedApps', 'allApps'
* **authentication**: 'notRequired' | 'required': Possible values include: 'required', 'notRequired'
* **clipboardSharingLevel**: 'allApps' | 'blocked' | 'policyManagedApps' | 'policyManagedAppsWithPasteIn': Possible values include: 'blocked', 'policyManagedApps', 'policyManagedAppsWithPasteIn', 'allApps'
* **dataBackup**: 'allow' | 'block': Possible values include: 'allow', 'block'
* **description**: string:
* **deviceCompliance**: 'disable' | 'enable': Possible values include: 'enable', 'disable'
* **fileEncryptionLevel**: 'afterDeviceRestart' | 'deviceLocked' | 'deviceLockedExceptFilesOpen' | 'useDeviceSettings': Possible values include: 'deviceLocked', 'deviceLockedExceptFilesOpen', 'afterDeviceRestart', 'useDeviceSettings'
* **fileSharingSaveAs**: 'allow' | 'block': Possible values include: 'allow', 'block'
* **friendlyName**: string (Required):
* **groupStatus**: 'notTargeted' | 'targeted' (ReadOnly): Possible values include: 'notTargeted', 'targeted'
* **lastModifiedTime**: string (ReadOnly):
* **managedBrowser**: 'notRequired' | 'required': Possible values include: 'required', 'notRequired'
* **numOfApps**: int (ReadOnly):
* **offlineWipeTimeout**: string:
* **pin**: 'notRequired' | 'required': Possible values include: 'required', 'notRequired'
* **pinNumRetry**: int:
* **touchId**: 'disable' | 'enable': Possible values include: 'enable', 'disable'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

