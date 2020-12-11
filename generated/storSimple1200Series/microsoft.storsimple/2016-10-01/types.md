# Microsoft.StorSimple @ 2016-10-01

## Microsoft.StorSimple/managers
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagerProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.StorSimple/managers' (ReadOnly, DeployTimeConstant)

## ManagerProperties
### Properties
* **cisIntrinsicSettings**: ManagerIntrinsicSettings
* **provisioningState**: string (ReadOnly)
* **sku**: ManagerSku

## ManagerIntrinsicSettings
### Properties
* **type**: 'GardaV1' | 'HelsinkiV1' (Required)

## ManagerSku
### Properties
* **name**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.StorSimple/managers/accessControlRecords
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AccessControlRecordProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/accessControlRecords' (ReadOnly, DeployTimeConstant)

## AccessControlRecordProperties
### Properties
* **initiatorName**: string (Required)

## Microsoft.StorSimple/managers/certificates
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **contractVersion**: 'InvalidVersion' | 'V2011_09' | 'V2012_02' | 'V2012_05' | 'V2012_12' | 'V2013_04' | 'V2013_10' | 'V2013_11' | 'V2014_04' | 'V2014_06' | 'V2014_07' | 'V2014_09' | 'V2014_10' | 'V2014_12' | 'V2015_01' | 'V2015_02' | 'V2015_04' | 'V2015_05' | 'V2015_06' | 'V2015_07' | 'V2015_08' | 'V2015_10' | 'V2015_12' | 'V2016_01' | 'V2016_02' | 'V2016_04' | 'V2016_05' | 'V2016_07' | 'V2016_08' (ReadOnly)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RawCertificateData (Required)
* **type**: 'Microsoft.StorSimple/managers/certificates' (ReadOnly, DeployTimeConstant)

## RawCertificateData
### Properties
* **authType**: 'AccessControlService' | 'AzureActiveDirectory' | 'Invalid'
* **certificate**: string (Required)

## Microsoft.StorSimple/managers/devices/alertSettings
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AlertSettingsProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/alertSettings' (ReadOnly, DeployTimeConstant)

## AlertSettingsProperties
### Properties
* **additionalRecipientEmailList**: string[]
* **alertNotificationCulture**: string (Required)
* **emailNotification**: 'Disabled' | 'Enabled' (Required)
* **notificationToServiceOwners**: 'Disabled' | 'Enabled' (Required)

## Microsoft.StorSimple/managers/devices/backupScheduleGroups
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BackupScheduleGroupProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/backupScheduleGroups' (ReadOnly, DeployTimeConstant)

## BackupScheduleGroupProperties
### Properties
* **startTime**: Time (Required)

## Time
### Properties
* **hour**: int (Required)
* **minute**: int (Required)

## Microsoft.StorSimple/managers/devices/chapSettings
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ChapProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/chapSettings' (ReadOnly, DeployTimeConstant)

## ChapProperties
### Properties
* **password**: AsymmetricEncryptedSecret (Required)

## AsymmetricEncryptedSecret
### Properties
* **encryptionAlgorithm**: 'AES256' | 'None' | 'RSAES_PKCS1_v_1_5' (Required)
* **encryptionCertificateThumbprint**: string
* **value**: string (Required)

## Microsoft.StorSimple/managers/devices/fileservers
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: FileServerProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/fileservers' (ReadOnly, DeployTimeConstant)

## FileServerProperties
### Properties
* **backupScheduleGroupId**: string (Required)
* **description**: string
* **domainName**: string (Required)
* **storageDomainId**: string (Required)

## Microsoft.StorSimple/managers/devices/fileservers/shares
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: FileShareProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/fileservers/shares' (ReadOnly, DeployTimeConstant)

## FileShareProperties
### Properties
* **adminUser**: string (Required)
* **dataPolicy**: 'Cloud' | 'Invalid' | 'Local' | 'Tiered' (Required)
* **description**: string
* **localUsedCapacityInBytes**: int (ReadOnly)
* **monitoringStatus**: 'Disabled' | 'Enabled' (Required)
* **provisionedCapacityInBytes**: int (Required)
* **shareStatus**: 'Offline' | 'Online' (Required)
* **usedCapacityInBytes**: int (ReadOnly)

## Microsoft.StorSimple/managers/devices/iscsiservers
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ISCSIServerProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/iscsiservers' (ReadOnly, DeployTimeConstant)

## ISCSIServerProperties
### Properties
* **backupScheduleGroupId**: string (Required)
* **chapId**: string
* **description**: string
* **reverseChapId**: string
* **storageDomainId**: string (Required)

## Microsoft.StorSimple/managers/devices/iscsiservers/disks
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ISCSIDiskProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/iscsiservers/disks' (ReadOnly, DeployTimeConstant)

## ISCSIDiskProperties
### Properties
* **accessControlRecords**: string[] (Required)
* **dataPolicy**: 'Cloud' | 'Invalid' | 'Local' | 'Tiered' (Required)
* **description**: string
* **diskStatus**: 'Offline' | 'Online' (Required)
* **localUsedCapacityInBytes**: int (ReadOnly)
* **monitoringStatus**: 'Disabled' | 'Enabled' (Required)
* **provisionedCapacityInBytes**: int (Required)
* **usedCapacityInBytes**: int (ReadOnly)

## Microsoft.StorSimple/managers/extendedInformation
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagerExtendedInfoProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/extendedInformation' (ReadOnly, DeployTimeConstant)

## ManagerExtendedInfoProperties
### Properties
* **algorithm**: string (Required)
* **encryptionKey**: string
* **encryptionKeyThumbprint**: string
* **integrityKey**: string (Required)
* **portalCertificateThumbprint**: string
* **version**: string

## Microsoft.StorSimple/managers/storageAccountCredentials
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageAccountCredentialProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/storageAccountCredentials' (ReadOnly, DeployTimeConstant)

## StorageAccountCredentialProperties
### Properties
* **accessKey**: AsymmetricEncryptedSecret
* **cloudType**: 'Azure' | 'HP' | 'OpenStack' | 'S3_RRS' | 'S3' (Required)
* **enableSSL**: 'Disabled' | 'Enabled' (Required)
* **endPoint**: string (Required)
* **location**: string
* **login**: string (Required)

## Microsoft.StorSimple/managers/storageDomains
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageDomainProperties (Required)
* **type**: 'Microsoft.StorSimple/managers/storageDomains' (ReadOnly, DeployTimeConstant)

## StorageDomainProperties
### Properties
* **encryptionKey**: AsymmetricEncryptedSecret
* **encryptionStatus**: 'Disabled' | 'Enabled' (Required)
* **storageAccountCredentialIds**: string[] (Required)

