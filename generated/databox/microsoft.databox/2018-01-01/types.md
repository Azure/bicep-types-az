# Microsoft.DataBox @ 2018-01-01

## Resource Microsoft.DataBox/jobs@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: JobProperties (Required)
* **sku**: Sku (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.DataBox/jobs' (ReadOnly, DeployTimeConstant)

## JobProperties
### Properties
* **cancellationReason**: string (ReadOnly)
* **details**: JobDetails
* **error**: Error (ReadOnly)
* **isCancellable**: bool (ReadOnly)
* **isDeletable**: bool (ReadOnly)
* **isShippingAddressEditable**: bool (ReadOnly)
* **startTime**: string (ReadOnly)

## JobDetails
* **Discriminator**: jobDetailsType

### Base Properties
* **chainOfCustodySasKey**: string (ReadOnly)
* **contactDetails**: ContactDetails (Required)
* **copyLogDetails**: CopyLogDetails[] (ReadOnly)
* **deliveryPackage**: PackageShippingDetails (ReadOnly)
* **destinationAccountDetails**: DestinationAccountDetails[] (Required)
* **errorDetails**: JobErrorDetails[] (ReadOnly)
* **expectedDataSizeInTeraBytes**: int
* **jobStages**: JobStages[] (ReadOnly)
* **preferences**: Preferences
* **returnPackage**: PackageShippingDetails (ReadOnly)
* **reverseShipmentLabelSasKey**: string (ReadOnly)
* **shippingAddress**: ShippingAddress (Required)
### DataBoxJobDetails
#### Properties
* **copyProgress**: CopyProgress[] (ReadOnly)
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


## DataBoxAccountCopyLogDetails
### Properties
* **accountName**: string (ReadOnly)
* **copyLogDetailsType**: 'DataBox' (Required)
* **copyLogLink**: string (ReadOnly)

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

## PackageShippingDetails
### Properties
* **carrierName**: string (ReadOnly)
* **trackingId**: string (ReadOnly)
* **trackingUrl**: string (ReadOnly)

## DestinationAccountDetails
* **Discriminator**: dataDestinationType

### Base Properties
* **accountId**: string
### DestinationManagedDiskDetails
#### Properties
* **dataDestinationType**: 'ManagedDisk' (Required)
* **resourceGroupId**: string (Required)
* **stagingStorageAccountId**: string (Required)

### DestinationStorageAccountDetails
#### Properties
* **dataDestinationType**: 'StorageAccount' (Required)
* **storageAccountId**: string (Required)


## DestinationManagedDiskDetails
### Properties
* **dataDestinationType**: 'ManagedDisk' (Required)
* **resourceGroupId**: string (Required)
* **stagingStorageAccountId**: string (Required)

## DestinationStorageAccountDetails
### Properties
* **dataDestinationType**: 'StorageAccount' (Required)
* **storageAccountId**: string (Required)

## JobErrorDetails
### Properties
* **errorCode**: int (ReadOnly)
* **errorMessage**: string (ReadOnly)
* **exceptionMessage**: string (ReadOnly)
* **recommendedAction**: string (ReadOnly)

## JobStages
### Properties
* **displayName**: string (ReadOnly)
* **errorDetails**: JobErrorDetails[] (ReadOnly)
* **stageTime**: string (ReadOnly)

## Preferences
### Properties
* **preferredDataCenterRegion**: string[]

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
* **jobDetailsType**: 'DataBox' (Required)

## CopyProgress
### Properties
* **accountId**: string (ReadOnly)
* **bytesSentToCloud**: int (ReadOnly)
* **filesProcessed**: int (ReadOnly)
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
* **jobDetailsType**: 'DataBoxHeavy' (Required)

## Error
### Properties
* **code**: string (ReadOnly)
* **message**: string (ReadOnly)

## Sku
### Properties
* **displayName**: string
* **family**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

