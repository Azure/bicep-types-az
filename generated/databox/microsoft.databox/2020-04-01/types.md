# Microsoft.DataBox @ 2020-04-01

## Resource Microsoft.DataBox/jobs@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ResourceIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: JobProperties (Required)
* **sku**: Sku (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.DataBox/jobs' (ReadOnly, DeployTimeConstant)

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: string

## JobProperties
### Properties
* **cancellationReason**: string (ReadOnly)
* **deliveryInfo**: JobDeliveryInfo
* **details**: JobDetails
* **error**: CloudError (ReadOnly)
* **isCancellable**: bool (ReadOnly)
* **isCancellableWithoutFee**: bool (ReadOnly)
* **isDeletable**: bool (ReadOnly)
* **isPrepareToShipEnabled**: bool (ReadOnly)
* **isShippingAddressEditable**: bool (ReadOnly)
* **startTime**: string (ReadOnly)

## JobDeliveryInfo
### Properties
* **scheduledDateTime**: string

## JobDetails
* **Discriminator**: jobDetailsType

### Base Properties
* **chainOfCustodySasKey**: string (ReadOnly)
* **contactDetails**: ContactDetails (Required)
* **copyLogDetails**: CopyLogDetails[] (ReadOnly)
* **dataExportDetails**: DataExportDetails[]
* **dataImportDetails**: DataImportDetails[]
* **deliveryPackage**: PackageShippingDetails (ReadOnly)
* **expectedDataSizeInTerabytes**: int
* **jobStages**: JobStages[] (ReadOnly)
* **keyEncryptionKey**: KeyEncryptionKey (ReadOnly)
* **preferences**: Preferences
* **returnPackage**: PackageShippingDetails (ReadOnly)
* **reverseShipmentLabelSasKey**: string (ReadOnly)
* **shippingAddress**: ShippingAddress
### DataBoxJobDetails
#### Properties
* **copyProgress**: CopyProgress[] (ReadOnly)
* **devicePassword**: string
* **jobDetailsType**: 'DataBox' (Required)

### DataBoxDiskJobDetails
#### Properties
* **copyProgress**: DataBoxDiskCopyProgress[] (ReadOnly)
* **disksAndSizeDetails**: DataBoxDiskJobDetailsDisksAndSizeDetails (ReadOnly)
* **jobDetailsType**: 'DataBoxDisk' (Required)
* **passkey**: string
* **preferredDisks**: DataBoxDiskJobDetailsPreferredDisks

### DataBoxHeavyJobDetails
#### Properties
* **copyProgress**: CopyProgress[] (ReadOnly)
* **devicePassword**: string
* **jobDetailsType**: 'DataBoxHeavy' (Required)


## ContactDetails
### Properties
* **contactName**: string (Required)
* **emailList**: string[] (Required)
* **mobile**: string
* **notificationPreference**: NotificationPreference[]
* **phone**: string (Required)
* **phoneExtension**: string

## NotificationPreference
### Properties
* **sendNotification**: bool (Required)

## CopyLogDetails
* **Discriminator**: copyLogDetailsType

### Base Properties
### DataBoxAccountCopyLogDetails
#### Properties
* **accountName**: string (ReadOnly)
* **copyLogDetailsType**: 'DataBox' (Required)
* **copyLogLink**: string (ReadOnly)
* **copyVerboseLogLink**: string (ReadOnly)

### DataBoxDiskCopyLogDetails
#### Properties
* **copyLogDetailsType**: 'DataBoxDisk' (Required)
* **diskSerialNumber**: string (ReadOnly)
* **errorLogLink**: string (ReadOnly)
* **verboseLogLink**: string (ReadOnly)

### DataBoxHeavyAccountCopyLogDetails
#### Properties
* **accountName**: string (ReadOnly)
* **copyLogDetailsType**: 'DataBoxHeavy' (Required)
* **copyLogLink**: string[] (ReadOnly)
* **copyVerboseLogLink**: string[] (ReadOnly)


## DataBoxAccountCopyLogDetails
### Properties
* **accountName**: string (ReadOnly)
* **copyLogDetailsType**: 'DataBox' (Required)
* **copyLogLink**: string (ReadOnly)
* **copyVerboseLogLink**: string (ReadOnly)

## DataBoxDiskCopyLogDetails
### Properties
* **copyLogDetailsType**: 'DataBoxDisk' (Required)
* **diskSerialNumber**: string (ReadOnly)
* **errorLogLink**: string (ReadOnly)
* **verboseLogLink**: string (ReadOnly)

## DataBoxHeavyAccountCopyLogDetails
### Properties
* **accountName**: string (ReadOnly)
* **copyLogDetailsType**: 'DataBoxHeavy' (Required)
* **copyLogLink**: string[] (ReadOnly)
* **copyVerboseLogLink**: string[] (ReadOnly)

## DataExportDetails
### Properties
* **accountDetails**: DataAccountDetails (Required)
* **transferConfiguration**: TransferConfiguration (Required)

## DataAccountDetails
* **Discriminator**: dataAccountType

### Base Properties
* **sharePassword**: string
### ManagedDiskDetails
#### Properties
* **dataAccountType**: 'ManagedDisk' (Required)
* **resourceGroupId**: string (Required)
* **stagingStorageAccountId**: string (Required)

### StorageAccountDetails
#### Properties
* **dataAccountType**: 'StorageAccount' (Required)
* **storageAccountId**: string (Required)


## ManagedDiskDetails
### Properties
* **dataAccountType**: 'ManagedDisk' (Required)
* **resourceGroupId**: string (Required)
* **stagingStorageAccountId**: string (Required)

## StorageAccountDetails
### Properties
* **dataAccountType**: 'StorageAccount' (Required)
* **storageAccountId**: string (Required)

## TransferConfiguration
### Properties
* **transferAllDetails**: TransferConfigurationTransferAllDetails
* **transferFilterDetails**: TransferConfigurationTransferFilterDetails

## TransferConfigurationTransferAllDetails
### Properties
* **include**: TransferAllDetails

## TransferAllDetails
### Properties
* **transferAllBlobs**: bool
* **transferAllFiles**: bool

## TransferConfigurationTransferFilterDetails
### Properties
* **include**: TransferFilterDetails

## TransferFilterDetails
### Properties
* **azureFileFilterDetails**: AzureFileFilterDetails
* **blobFilterDetails**: BlobFilterDetails
* **filterFileDetails**: FilterFileDetails[]

## AzureFileFilterDetails
### Properties
* **filePathList**: string[]
* **filePrefixList**: string[]
* **fileShareList**: string[]

## BlobFilterDetails
### Properties
* **blobPathList**: string[]
* **blobPrefixList**: string[]
* **containerList**: string[]

## FilterFileDetails
### Properties
* **filterFilePath**: string (Required)

## DataImportDetails
### Properties
* **accountDetails**: DataAccountDetails (Required)

## PackageShippingDetails
### Properties
* **carrierName**: string (ReadOnly)
* **trackingId**: string (ReadOnly)
* **trackingUrl**: string (ReadOnly)

## JobStages
### Properties
* **displayName**: string (ReadOnly)
* **stageTime**: string (ReadOnly)

## KeyEncryptionKey
### Properties
* **kekUrl**: string
* **kekVaultResourceID**: string

## Preferences
### Properties
* **preferredDataCenterRegion**: string[]
* **transportPreferences**: TransportPreferences

## TransportPreferences
### Properties

## ShippingAddress
### Properties
* **city**: string
* **companyName**: string
* **country**: string (Required)
* **postalCode**: string (Required)
* **stateOrProvince**: string
* **streetAddress1**: string (Required)
* **streetAddress2**: string
* **streetAddress3**: string
* **zipExtendedCode**: string

## DataBoxJobDetails
### Properties
* **copyProgress**: CopyProgress[] (ReadOnly)
* **devicePassword**: string
* **jobDetailsType**: 'DataBox' (Required)

## CopyProgress
### Properties
* **accountId**: string (ReadOnly)
* **bytesProcessed**: int (ReadOnly)
* **directoriesErroredOut**: int (ReadOnly)
* **filesErroredOut**: int (ReadOnly)
* **filesProcessed**: int (ReadOnly)
* **invalidDirectoriesProcessed**: int (ReadOnly)
* **invalidFileBytesUploaded**: int (ReadOnly)
* **invalidFilesProcessed**: int (ReadOnly)
* **isEnumerationInProgress**: bool (ReadOnly)
* **renamedContainerCount**: int (ReadOnly)
* **storageAccountName**: string (ReadOnly)
* **totalBytesToProcess**: int (ReadOnly)
* **totalFilesToProcess**: int (ReadOnly)

## DataBoxDiskJobDetails
### Properties
* **copyProgress**: DataBoxDiskCopyProgress[] (ReadOnly)
* **disksAndSizeDetails**: DataBoxDiskJobDetailsDisksAndSizeDetails (ReadOnly)
* **jobDetailsType**: 'DataBoxDisk' (Required)
* **passkey**: string
* **preferredDisks**: DataBoxDiskJobDetailsPreferredDisks

## DataBoxDiskCopyProgress
### Properties
* **bytesCopied**: int (ReadOnly)
* **percentComplete**: int (ReadOnly)
* **serialNumber**: string (ReadOnly)

## DataBoxDiskJobDetailsDisksAndSizeDetails
### Properties
### Additional Properties
* **Additional Properties Type**: int

## DataBoxDiskJobDetailsPreferredDisks
### Properties
### Additional Properties
* **Additional Properties Type**: int

## DataBoxHeavyJobDetails
### Properties
* **copyProgress**: CopyProgress[] (ReadOnly)
* **devicePassword**: string
* **jobDetailsType**: 'DataBoxHeavy' (Required)

## CloudError
### Properties
* **additionalInfo**: AdditionalErrorInfo[] (ReadOnly)
* **code**: string
* **details**: CloudError[] (ReadOnly)
* **message**: string
* **target**: string

## AdditionalErrorInfo
### Properties
* **type**: string

## Sku
### Properties
* **displayName**: string
* **family**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

