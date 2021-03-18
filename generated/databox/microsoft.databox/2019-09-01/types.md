# Microsoft.DataBox @ 2019-09-01

## Resource Microsoft.DataBox/jobs@2019-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [JobProperties](#jobproperties) (Required)
* **sku**: [Sku](#sku) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.DataBox/jobs' (ReadOnly, DeployTimeConstant)

## JobProperties
### Properties
* **cancellationReason**: string (ReadOnly)
* **deliveryInfo**: [JobDeliveryInfo](#jobdeliveryinfo)
* **deliveryType**: 'NonScheduled' | 'Scheduled'
* **details**: [JobDetails](#jobdetails)
* **error**: [Error](#error) (ReadOnly)
* **isCancellable**: bool (ReadOnly)
* **isCancellableWithoutFee**: bool (ReadOnly)
* **isDeletable**: bool (ReadOnly)
* **isShippingAddressEditable**: bool (ReadOnly)
* **startTime**: string (ReadOnly)
* **status**: 'Aborted' | 'AtAzureDC' | 'Cancelled' | 'Completed' | 'CompletedWithErrors' | 'CompletedWithWarnings' | 'DataCopy' | 'Delivered' | 'DeviceOrdered' | 'DevicePrepared' | 'Dispatched' | 'Failed_IssueDetectedAtAzureDC' | 'Failed_IssueReportedAtCustomer' | 'PickedUp' | 'ReadyToDispatchFromAzureDC' | 'ReadyToReceiveAtAzureDC' (ReadOnly)

## JobDeliveryInfo
### Properties
* **scheduledDateTime**: string

## JobDetails
* **Discriminator**: jobDetailsType

### Base Properties
* **chainOfCustodySasKey**: string (ReadOnly)
* **contactDetails**: [ContactDetails](#contactdetails) (Required)
* **copyLogDetails**: [CopyLogDetails](#copylogdetails)[] (ReadOnly)
* **deliveryPackage**: [PackageShippingDetails](#packageshippingdetails) (ReadOnly)
* **destinationAccountDetails**: [DestinationAccountDetails](#destinationaccountdetails)[] (Required)
* **errorDetails**: [JobErrorDetails](#joberrordetails)[] (ReadOnly)
* **expectedDataSizeInTerabytes**: int
* **jobStages**: [JobStages](#jobstages)[] (ReadOnly)
* **preferences**: [Preferences](#preferences)
* **returnPackage**: [PackageShippingDetails](#packageshippingdetails) (ReadOnly)
* **reverseShipmentLabelSasKey**: string (ReadOnly)
* **shippingAddress**: [ShippingAddress](#shippingaddress) (Required)
### DataBoxJobDetails
#### Properties
* **copyProgress**: [CopyProgress](#copyprogress)[] (ReadOnly)
* **devicePassword**: string
* **jobDetailsType**: 'DataBox' (Required)

### DataBoxDiskJobDetails
#### Properties
* **copyProgress**: [DataBoxDiskCopyProgress](#databoxdiskcopyprogress)[] (ReadOnly)
* **disksAndSizeDetails**: [DataBoxDiskJobDetailsDisksAndSizeDetails](#databoxdiskjobdetailsdisksandsizedetails) (ReadOnly)
* **jobDetailsType**: 'DataBoxDisk' (Required)
* **passkey**: string
* **preferredDisks**: [DataBoxDiskJobDetailsPreferredDisks](#databoxdiskjobdetailspreferreddisks)

### DataBoxHeavyJobDetails
#### Properties
* **copyProgress**: [CopyProgress](#copyprogress)[] (ReadOnly)
* **devicePassword**: string
* **jobDetailsType**: 'DataBoxHeavy' (Required)


## ContactDetails
### Properties
* **contactName**: string (Required)
* **emailList**: string[] (Required)
* **mobile**: string
* **notificationPreference**: [NotificationPreference](#notificationpreference)[]
* **phone**: string (Required)
* **phoneExtension**: string

## NotificationPreference
### Properties
* **sendNotification**: bool (Required)
* **stageName**: 'AtAzureDC' | 'DataCopy' | 'Delivered' | 'DevicePrepared' | 'Dispatched' | 'PickedUp' (Required)

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
* **sharePassword**: string
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
* **errorDetails**: [JobErrorDetails](#joberrordetails)[] (ReadOnly)
* **jobStageDetails**: any (ReadOnly)
* **stageName**: 'Aborted' | 'AtAzureDC' | 'Cancelled' | 'Completed' | 'CompletedWithErrors' | 'CompletedWithWarnings' | 'DataCopy' | 'Delivered' | 'DeviceOrdered' | 'DevicePrepared' | 'Dispatched' | 'Failed_IssueDetectedAtAzureDC' | 'Failed_IssueReportedAtCustomer' | 'PickedUp' | 'ReadyToDispatchFromAzureDC' | 'ReadyToReceiveAtAzureDC' (ReadOnly)
* **stageStatus**: 'Cancelled' | 'Cancelling' | 'Failed' | 'InProgress' | 'None' | 'Succeeded' | 'SucceededWithErrors' (ReadOnly)
* **stageTime**: string (ReadOnly)

## Preferences
### Properties
* **preferredDataCenterRegion**: string[]
* **transportPreferences**: [TransportPreferences](#transportpreferences)

## TransportPreferences
### Properties
* **preferredShipmentType**: 'CustomerManaged' | 'MicrosoftManaged' (Required)

## ShippingAddress
### Properties
* **addressType**: 'Commercial' | 'None' | 'Residential'
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
* **copyProgress**: [CopyProgress](#copyprogress)[] (ReadOnly)
* **devicePassword**: string
* **jobDetailsType**: 'DataBox' (Required)

## CopyProgress
### Properties
* **accountId**: string (ReadOnly)
* **bytesSentToCloud**: int (ReadOnly)
* **dataDestinationType**: 'ManagedDisk' | 'StorageAccount' (ReadOnly)
* **filesErroredOut**: int (ReadOnly)
* **filesProcessed**: int (ReadOnly)
* **invalidFileBytesUploaded**: int (ReadOnly)
* **invalidFilesProcessed**: int (ReadOnly)
* **renamedContainerCount**: int (ReadOnly)
* **storageAccountName**: string (ReadOnly)
* **totalBytesToProcess**: int (ReadOnly)
* **totalFilesToProcess**: int (ReadOnly)

## DataBoxDiskJobDetails
### Properties
* **copyProgress**: [DataBoxDiskCopyProgress](#databoxdiskcopyprogress)[] (ReadOnly)
* **disksAndSizeDetails**: [DataBoxDiskJobDetailsDisksAndSizeDetails](#databoxdiskjobdetailsdisksandsizedetails) (ReadOnly)
* **jobDetailsType**: 'DataBoxDisk' (Required)
* **passkey**: string
* **preferredDisks**: [DataBoxDiskJobDetailsPreferredDisks](#databoxdiskjobdetailspreferreddisks)

## DataBoxDiskCopyProgress
### Properties
* **bytesCopied**: int (ReadOnly)
* **percentComplete**: int (ReadOnly)
* **serialNumber**: string (ReadOnly)
* **status**: 'Completed' | 'CompletedWithErrors' | 'DeviceFormatted' | 'DeviceMetadataModified' | 'Failed' | 'HardwareError' | 'InProgress' | 'NotReturned' | 'NotStarted' | 'StorageAccountNotAccessible' | 'UnsupportedData' (ReadOnly)

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
* **copyProgress**: [CopyProgress](#copyprogress)[] (ReadOnly)
* **devicePassword**: string
* **jobDetailsType**: 'DataBoxHeavy' (Required)

## Error
### Properties
* **code**: string (ReadOnly)
* **message**: string (ReadOnly)

## Sku
### Properties
* **displayName**: string
* **family**: string
* **name**: 'DataBox' | 'DataBoxDisk' | 'DataBoxHeavy' (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

