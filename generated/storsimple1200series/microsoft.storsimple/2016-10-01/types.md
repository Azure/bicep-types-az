# Microsoft.StorSimple @ 2016-10-01

## Resource Microsoft.StorSimple/managers@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagerProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.StorSimple/managers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/accessControlRecords@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AccessControlRecordProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/accessControlRecords' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/certificates@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.StorSimple/managers/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/devices/alertSettings@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AlertSettingsProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/alertSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/devices/backupScheduleGroups@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BackupScheduleGroupProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/backupScheduleGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/devices/chapSettings@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ChapProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/chapSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/devices/fileservers@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: FileServerProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/fileservers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/devices/fileservers/shares@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: FileShareProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/fileservers/shares' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/devices/iscsiservers@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IscsiServerProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/iscsiservers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/devices/iscsiservers/disks@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IscsiDiskProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/iscsiservers/disks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/extendedInformation@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagerExtendedInfoProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/extendedInformation' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/storageAccountCredentials@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageAccountCredentialProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/storageAccountCredentials' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/storageDomains@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageDomainProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/storageDomains' (ReadOnly, DeployTimeConstant)

## ManagerProperties
### Properties
* **cisIntrinsicSettings**: ManagerIntrinsicSettings
* **provisioningState**: string (ReadOnly)
* **sku**: ManagerSku

## ManagerIntrinsicSettings
### Properties

## ManagerSku
### Properties

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AccessControlRecordProperties
### Properties
* **initiatorName**: string (Required)

## AlertSettingsProperties
### Properties
* **additionalRecipientEmailList**: string[]
* **alertNotificationCulture**: string (Required)

## BackupScheduleGroupProperties
### Properties
* **startTime**: Time (Required)

## Time
### Properties
* **hour**: int (Required)
* **minute**: int (Required)

## ChapProperties
### Properties
* **password**: AsymmetricEncryptedSecret (Required)

## AsymmetricEncryptedSecret
### Properties
* **encryptionCertificateThumbprint**: string
* **value**: string (Required)

## FileServerProperties
### Properties
* **backupScheduleGroupId**: string (Required)
* **description**: string
* **domainName**: string (Required)
* **storageDomainId**: string (Required)

## FileShareProperties
### Properties
* **adminUser**: string (Required)
* **description**: string
* **localUsedCapacityInBytes**: int (ReadOnly)
* **provisionedCapacityInBytes**: int (Required)
* **usedCapacityInBytes**: int (ReadOnly)

## IscsiServerProperties
### Properties
* **backupScheduleGroupId**: string (Required)
* **chapId**: string
* **description**: string
* **reverseChapId**: string
* **storageDomainId**: string (Required)

## IscsiDiskProperties
### Properties
* **accessControlRecords**: string[] (Required)
* **description**: string
* **localUsedCapacityInBytes**: int (ReadOnly)
* **provisionedCapacityInBytes**: int (Required)
* **usedCapacityInBytes**: int (ReadOnly)

## ManagerExtendedInfoProperties
### Properties
* **algorithm**: string (Required)
* **encryptionKey**: string
* **encryptionKeyThumbprint**: string
* **integrityKey**: string (Required)
* **portalCertificateThumbprint**: string
* **version**: string

## StorageAccountCredentialProperties
### Properties
* **accessKey**: AsymmetricEncryptedSecret
* **endPoint**: string (Required)
* **location**: string
* **login**: string (Required)

## StorageDomainProperties
### Properties
* **encryptionKey**: AsymmetricEncryptedSecret
* **storageAccountCredentialIds**: string[] (Required)

