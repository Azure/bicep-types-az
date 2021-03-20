# Microsoft.StorSimple @ 2016-10-01

## Resource Microsoft.StorSimple/managers@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagerProperties](#managerproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.StorSimple/managers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/accessControlRecords@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AccessControlRecordProperties](#accesscontrolrecordproperties) (Required)
* **type**: 'Microsoft.StorSimple/managers/accessControlRecords' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/certificates@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **contractVersion**: 'InvalidVersion' | 'V2011_09' | 'V2012_02' | 'V2012_05' | 'V2012_12' | 'V2013_04' | 'V2013_10' | 'V2013_11' | 'V2014_04' | 'V2014_06' | 'V2014_07' | 'V2014_09' | 'V2014_10' | 'V2014_12' | 'V2015_01' | 'V2015_02' | 'V2015_04' | 'V2015_05' | 'V2015_06' | 'V2015_07' | 'V2015_08' | 'V2015_10' | 'V2015_12' | 'V2016_01' | 'V2016_02' | 'V2016_04' | 'V2016_05' | 'V2016_07' | 'V2016_08' (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RawCertificateData](#rawcertificatedata) (Required)
* **type**: 'Microsoft.StorSimple/managers/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/devices/alertSettings@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [AlertSettingsProperties](#alertsettingsproperties) (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/alertSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/devices/backupScheduleGroups@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BackupScheduleGroupProperties](#backupschedulegroupproperties) (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/backupScheduleGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/devices/chapSettings@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ChapProperties](#chapproperties) (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/chapSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/devices/fileservers@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FileServerProperties](#fileserverproperties) (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/fileservers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/devices/fileservers/shares@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FileShareProperties](#fileshareproperties) (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/fileservers/shares' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/devices/iscsiservers@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ISCSIServerProperties](#iscsiserverproperties) (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/iscsiservers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/devices/iscsiservers/disks@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ISCSIDiskProperties](#iscsidiskproperties) (Required)
* **type**: 'Microsoft.StorSimple/managers/devices/iscsiservers/disks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/extendedInformation@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'vaultExtendedInfo' (Required, DeployTimeConstant)
* **properties**: [ManagerExtendedInfoProperties](#managerextendedinfoproperties) (Required)
* **type**: 'Microsoft.StorSimple/managers/extendedInformation' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/storageAccountCredentials@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StorageAccountCredentialProperties](#storageaccountcredentialproperties) (Required)
* **type**: 'Microsoft.StorSimple/managers/storageAccountCredentials' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StorSimple/managers/storageDomains@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StorageDomainProperties](#storagedomainproperties) (Required)
* **type**: 'Microsoft.StorSimple/managers/storageDomains' (ReadOnly, DeployTimeConstant)

## ManagerProperties
### Properties
* **cisIntrinsicSettings**: [ManagerIntrinsicSettings](#managerintrinsicsettings)
* **provisioningState**: string (ReadOnly)
* **sku**: [ManagerSku](#managersku)

## ManagerIntrinsicSettings
### Properties
* **type**: 'GardaV1' | 'HelsinkiV1' (Required)

## ManagerSku
### Properties
* **name**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AccessControlRecordProperties
### Properties
* **initiatorName**: string (Required)

## RawCertificateData
### Properties
* **authType**: 'AccessControlService' | 'AzureActiveDirectory' | 'Invalid'
* **certificate**: string (Required)

## AlertSettingsProperties
### Properties
* **additionalRecipientEmailList**: string[]
* **alertNotificationCulture**: string (Required)
* **emailNotification**: 'Disabled' | 'Enabled' (Required)
* **notificationToServiceOwners**: 'Disabled' | 'Enabled' (Required)

## BackupScheduleGroupProperties
### Properties
* **startTime**: [Time](#time) (Required)

## Time
### Properties
* **hour**: int (Required)
* **minute**: int (Required)

## ChapProperties
### Properties
* **password**: [AsymmetricEncryptedSecret](#asymmetricencryptedsecret) (Required)

## AsymmetricEncryptedSecret
### Properties
* **encryptionAlgorithm**: 'AES256' | 'None' | 'RSAES_PKCS1_v_1_5' (Required)
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
* **dataPolicy**: 'Cloud' | 'Invalid' | 'Local' | 'Tiered' (Required)
* **description**: string
* **localUsedCapacityInBytes**: int (ReadOnly)
* **monitoringStatus**: 'Disabled' | 'Enabled' (Required)
* **provisionedCapacityInBytes**: int (Required)
* **shareStatus**: 'Offline' | 'Online' (Required)
* **usedCapacityInBytes**: int (ReadOnly)

## ISCSIServerProperties
### Properties
* **backupScheduleGroupId**: string (Required)
* **chapId**: string
* **description**: string
* **reverseChapId**: string
* **storageDomainId**: string (Required)

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
* **accessKey**: [AsymmetricEncryptedSecret](#asymmetricencryptedsecret)
* **cloudType**: 'Azure' | 'HP' | 'OpenStack' | 'S3_RRS' | 'S3' (Required)
* **enableSSL**: 'Disabled' | 'Enabled' (Required)
* **endPoint**: string (Required)
* **location**: string
* **login**: string (Required)

## StorageDomainProperties
### Properties
* **encryptionKey**: [AsymmetricEncryptedSecret](#asymmetricencryptedsecret)
* **encryptionStatus**: 'Disabled' | 'Enabled' (Required)
* **storageAccountCredentialIds**: string[] (Required)

