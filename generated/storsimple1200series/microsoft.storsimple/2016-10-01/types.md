# Microsoft.StorSimple @ 2016-10-01

## Resource Microsoft.StorSimple/managers@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: ETag of the Manager
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The Geo location of the Manager
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagerProperties](#managerproperties): List of properties of the Manager
* **tags**: [ResourceTags](#resourcetags): Tags attached to the Manager
* **type**: 'Microsoft.StorSimple/managers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorSimple/managers/accessControlRecords@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccessControlRecordProperties](#accesscontrolrecordproperties) (Required): Properties of AccessControlRecord
* **type**: 'Microsoft.StorSimple/managers/accessControlRecords' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorSimple/managers/certificates@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **contractVersion**: 'InvalidVersion' | 'V2011_09' | 'V2012_02' | 'V2012_05' | 'V2012_12' | 'V2013_04' | 'V2013_10' | 'V2013_11' | 'V2014_04' | 'V2014_06' | 'V2014_07' | 'V2014_09' | 'V2014_10' | 'V2014_12' | 'V2015_01' | 'V2015_02' | 'V2015_04' | 'V2015_05' | 'V2015_06' | 'V2015_07' | 'V2015_08' | 'V2015_10' | 'V2015_12' | 'V2016_01' | 'V2016_02' | 'V2016_04' | 'V2016_05' | 'V2016_07' | 'V2016_08' (ReadOnly): Gets ContractVersion
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RawCertificateData](#rawcertificatedata) (Required): Raw Certificate Data From IDM
* **type**: 'Microsoft.StorSimple/managers/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorSimple/managers/devices/alertSettings@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [AlertSettingsProperties](#alertsettingsproperties) (Required): Properties of AlertSettings
* **type**: 'Microsoft.StorSimple/managers/devices/alertSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorSimple/managers/devices/backupScheduleGroups@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackupScheduleGroupProperties](#backupschedulegroupproperties) (Required): Properties of BackupScheduleGroup
* **type**: 'Microsoft.StorSimple/managers/devices/backupScheduleGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorSimple/managers/devices/chapSettings@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ChapProperties](#chapproperties) (Required): Chap properties
* **type**: 'Microsoft.StorSimple/managers/devices/chapSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorSimple/managers/devices/fileservers@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FileServerProperties](#fileserverproperties) (Required): The properties.
* **type**: 'Microsoft.StorSimple/managers/devices/fileservers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorSimple/managers/devices/fileservers/shares@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FileShareProperties](#fileshareproperties) (Required): The properties.
* **type**: 'Microsoft.StorSimple/managers/devices/fileservers/shares' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorSimple/managers/devices/iscsiservers@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IscsiServerProperties](#iscsiserverproperties) (Required): The properties.
* **type**: 'Microsoft.StorSimple/managers/devices/iscsiservers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorSimple/managers/devices/iscsiservers/disks@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IscsiDiskProperties](#iscsidiskproperties) (Required): The properties.
* **type**: 'Microsoft.StorSimple/managers/devices/iscsiservers/disks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorSimple/managers/extendedInformation@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: ETag of the Resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'vaultExtendedInfo' (Required, DeployTimeConstant): The resource name
* **properties**: [ManagerExtendedInfoProperties](#managerextendedinfoproperties) (Required): The extended info properties.
* **type**: 'Microsoft.StorSimple/managers/extendedInformation' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorSimple/managers/storageAccountCredentials@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageAccountCredentialProperties](#storageaccountcredentialproperties) (Required): Credential properties
* **type**: 'Microsoft.StorSimple/managers/storageAccountCredentials' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorSimple/managers/storageDomains@2016-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageDomainProperties](#storagedomainproperties) (Required): The properties.
* **type**: 'Microsoft.StorSimple/managers/storageDomains' (ReadOnly, DeployTimeConstant): The resource type

## AccessControlRecordProperties
### Properties
* **initiatorName**: string (Required): The Iscsi initiator name (IQN)

## AlertSettingsProperties
### Properties
* **additionalRecipientEmailList**: string[]: List of email addresses (apart from admin/co-admin of subscription) to whom the alert emails need to be sent
* **alertNotificationCulture**: string (Required): Culture setting to be used while building alert emails. For eg: "en-US"
* **emailNotification**: 'Disabled' | 'Enabled' (Required): Value indicating whether user/admins will receive emails when an alert condition occurs on the system
* **notificationToServiceOwners**: 'Disabled' | 'Enabled' (Required): Value indicating whether service owners will receive emails when an alert condition occurs on the system. Applicable only if emailNotification flag is Enabled.

## AsymmetricEncryptedSecret
### Properties
* **encryptionAlgorithm**: 'AES256' | 'None' | 'RSAES_PKCS1_v_1_5' (Required): Algorithm used to encrypt "Value"
* **encryptionCertificateThumbprint**: string: Thumbprint certificate that was used to encrypt "Value"
* **value**: string (Required): The value of the secret itself. If the secret is in plaintext then EncryptionAlgorithm will be none and EncryptionCertThumbprint will be null.

## BackupScheduleGroupProperties
### Properties
* **startTime**: [Time](#time) (Required): The start time. When this field is specified we will generate Default GrandFather Father Son Backup Schedules.

## ChapProperties
### Properties
* **password**: [AsymmetricEncryptedSecret](#asymmetricencryptedsecret) (Required): The chap password.

## FileServerProperties
### Properties
* **backupScheduleGroupId**: string (Required): The backup policy id.
* **description**: string: The description of the file server
* **domainName**: string (Required): Domain of the file server
* **storageDomainId**: string (Required): The storage domain id.

## FileShareProperties
### Properties
* **adminUser**: string (Required): The user/group who will have full permission in this share. Active directory email address. Example: xyz@contoso.com or Contoso\xyz.
* **dataPolicy**: 'Cloud' | 'Invalid' | 'Local' | 'Tiered' (Required): The data policy
* **description**: string: Description for file share
* **localUsedCapacityInBytes**: int (ReadOnly): The local used capacity in Bytes.
* **monitoringStatus**: 'Disabled' | 'Enabled' (Required): The monitoring status
* **provisionedCapacityInBytes**: int (Required): The total provisioned capacity in Bytes
* **shareStatus**: 'Offline' | 'Online' (Required): The Share Status
* **usedCapacityInBytes**: int (ReadOnly): The used capacity in Bytes.

## IscsiDiskProperties
### Properties
* **accessControlRecords**: string[] (Required): The access control records.
* **dataPolicy**: 'Cloud' | 'Invalid' | 'Local' | 'Tiered' (Required): The data policy.
* **description**: string: The description.
* **diskStatus**: 'Offline' | 'Online' (Required): The disk status.
* **localUsedCapacityInBytes**: int (ReadOnly): The local used capacity in bytes.
* **monitoringStatus**: 'Disabled' | 'Enabled' (Required): The monitoring.
* **provisionedCapacityInBytes**: int (Required): The provisioned capacity in bytes.
* **usedCapacityInBytes**: int (ReadOnly): The used capacity in bytes.

## IscsiServerProperties
### Properties
* **backupScheduleGroupId**: string (Required): The backup policy id.
* **chapId**: string: The chap id.
* **description**: string: The description.
* **reverseChapId**: string: The reverse chap id.
* **storageDomainId**: string (Required): The storage domain id.

## ManagerExtendedInfoProperties
### Properties
* **algorithm**: string (Required): Represents the encryption algorithm used to encrypt the other keys. None - if EncryptionKey is saved in plain text format. AlgorithmName - if encryption is used
* **encryptionKey**: string: Represents the CEK of the resource
* **encryptionKeyThumbprint**: string: Represents the Cert thumbprint that was used to encrypt the CEK
* **integrityKey**: string (Required): Represents the CIK of the resource
* **portalCertificateThumbprint**: string: Represents the portal thumbprint which can be used optionally to encrypt the entire data before storing it.
* **version**: string: Represents the version of the ExtendedInfo object being persisted

## ManagerIntrinsicSettings
### Properties
* **type**: 'GardaV1' | 'HelsinkiV1' (Required): Refers to the type of the StorSimple Manager

## ManagerProperties
### Properties
* **cisIntrinsicSettings**: [ManagerIntrinsicSettings](#managerintrinsicsettings): Specifies if the Manager is Garda or Helsinki
* **provisioningState**: string (ReadOnly): Specifies the state of the resource as it is getting provisioned. Value of "Succeeded" means the Manager was successfully created
* **sku**: [ManagerSku](#managersku): Specifies the Sku

## ManagerSku
### Properties
* **name**: 'Standard' (Required): Refers to the sku name which should be "Standard"

## RawCertificateData
### Properties
* **authType**: 'AccessControlService' | 'AzureActiveDirectory' | 'Invalid': Specify the Authentication type
* **certificate**: string (Required): Gets or sets the base64 encoded certificate raw data string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StorageAccountCredentialProperties
### Properties
* **accessKey**: [AsymmetricEncryptedSecret](#asymmetricencryptedsecret): The details of the storage account password
* **cloudType**: 'Azure' | 'HP' | 'OpenStack' | 'S3' | 'S3_RRS' (Required): The cloud service provider
* **enableSSL**: 'Disabled' | 'Enabled' (Required): SSL needs to be enabled or not
* **endPoint**: string (Required): The storage endpoint
* **location**: string: The storage account's geo location
* **login**: string (Required): The storage account login

## StorageDomainProperties
### Properties
* **encryptionKey**: [AsymmetricEncryptedSecret](#asymmetricencryptedsecret): The encryption key used to encrypt the data. This is a user secret.
* **encryptionStatus**: 'Disabled' | 'Enabled' (Required): The encryption status "Enabled | Disabled".
* **storageAccountCredentialIds**: string[] (Required): The storage account credentials.

## Time
### Properties
* **hour**: int (Required): The hour.
* **minute**: int (Required): The minute.

