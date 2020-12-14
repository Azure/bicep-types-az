# Microsoft.DataBox @ 2018-01-01

## Resource Microsoft.DataBox/jobs@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: JobProperties (Required)
* **sku**: Sku (Required)
* **tags**: Dictionary<string,String>
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
* **status**: 'Aborted' | 'AtAzureDC' | 'Cancelled' | 'Completed' | 'CompletedWithErrors' | 'DataCopy' | 'Delivered' | 'DeviceOrdered' | 'DevicePrepared' | 'Dispatched' | 'Failed_IssueDetectedAtAzureDC' | 'Failed_IssueReportedAtCustomer' | 'PickedUp' (ReadOnly)

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
### DataBox
#### Properties
* **accountName**: string (ReadOnly)
* **copyLogDetailsType**: 'DataBox' (Required)
* **copyLogLink**: string (ReadOnly)
* **jobDetailsType**: 'DataBox' (Required)

### DataBoxDisk
#### Properties
* **copyLogDetailsType**: 'DataBoxDisk' (Required)
* **diskSerialNumber**: string (ReadOnly)
* **errorLogLink**: string (ReadOnly)
* **jobDetailsType**: 'DataBoxDisk' (Required)
* **verboseLogLink**: string (ReadOnly)

### DataBoxHeavy
#### Properties
* **accountName**: string (ReadOnly)
* **copyLogDetailsType**: 'DataBoxHeavy' (Required)
* **copyLogLink**: string[] (ReadOnly)
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
* **stageName**: 'AtAzureDC' | 'DataCopy' | 'Delivered' | 'DevicePrepared' | 'Dispatched' | 'PickedUp' (Required)

## CopyLogDetails
* **Discriminator**: copyLogDetailsType
### Base Properties
### DataBox
#### Properties
* **accountName**: string (ReadOnly)
* **copyLogDetailsType**: 'DataBox' (Required)
* **copyLogLink**: string (ReadOnly)
* **jobDetailsType**: 'DataBox' (Required)

### DataBoxDisk
#### Properties
* **copyLogDetailsType**: 'DataBoxDisk' (Required)
* **diskSerialNumber**: string (ReadOnly)
* **errorLogLink**: string (ReadOnly)
* **jobDetailsType**: 'DataBoxDisk' (Required)
* **verboseLogLink**: string (ReadOnly)

### DataBoxHeavy
#### Properties
* **accountName**: string (ReadOnly)
* **copyLogDetailsType**: 'DataBoxHeavy' (Required)
* **copyLogLink**: string[] (ReadOnly)
* **jobDetailsType**: 'DataBoxHeavy' (Required)


## DataBox
### Properties
* **accountName**: string (ReadOnly)
* **copyLogDetailsType**: 'DataBox' (Required)
* **copyLogLink**: string (ReadOnly)
* **jobDetailsType**: 'DataBox' (Required)

## DataBoxDisk
### Properties
* **copyLogDetailsType**: 'DataBoxDisk' (Required)
* **diskSerialNumber**: string (ReadOnly)
* **errorLogLink**: string (ReadOnly)
* **jobDetailsType**: 'DataBoxDisk' (Required)
* **verboseLogLink**: string (ReadOnly)

## DataBoxHeavy
### Properties
* **accountName**: string (ReadOnly)
* **copyLogDetailsType**: 'DataBoxHeavy' (Required)
* **copyLogLink**: string[] (ReadOnly)
* **jobDetailsType**: 'DataBoxHeavy' (Required)

## PackageShippingDetails
### Properties
* **carrierName**: string (ReadOnly)
* **trackingId**: string (ReadOnly)
* **trackingUrl**: string (ReadOnly)

## DestinationAccountDetails
* **Discriminator**: dataDestinationType
### Base Properties
* **accountId**: string
### ManagedDisk
#### Properties
* **dataDestinationType**: 'ManagedDisk' (Required)
* **resourceGroupId**: string (Required)
* **stagingStorageAccountId**: string (Required)

### StorageAccount
#### Properties
* **dataDestinationType**: 'StorageAccount' (Required)
* **storageAccountId**: string (Required)


## ManagedDisk
### Properties
* **dataDestinationType**: 'ManagedDisk' (Required)
* **resourceGroupId**: string (Required)
* **stagingStorageAccountId**: string (Required)

## StorageAccount
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
* **jobStageDetails**: any (ReadOnly)
* **stageName**: 'Aborted' | 'AtAzureDC' | 'Cancelled' | 'Completed' | 'CompletedWithErrors' | 'DataCopy' | 'Delivered' | 'DeviceOrdered' | 'DevicePrepared' | 'Dispatched' | 'Failed_IssueDetectedAtAzureDC' | 'Failed_IssueReportedAtCustomer' | 'PickedUp' (ReadOnly)
* **stageStatus**: 'Cancelled' | 'Cancelling' | 'Failed' | 'InProgress' | 'None' | 'Succeeded' | 'SucceededWithErrors' (ReadOnly)
* **stageTime**: string (ReadOnly)

## Preferences
### Properties
* **preferredDataCenterRegion**: string[]

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

## Error
### Properties
* **code**: string (ReadOnly)
* **message**: string (ReadOnly)

## Sku
### Properties
* **displayName**: string
* **family**: string
* **name**: 'DataBox' | 'DataBoxDisk' | 'DataBoxHeavy' (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

