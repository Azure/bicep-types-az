# Microsoft.DataBox @ 2020-04-01

## Resource Microsoft.DataBox/jobs@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ResourceIdentity](#resourceidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [JobProperties](#jobproperties) (Required)
* **sku**: [Sku](#sku) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DataBox/jobs' (ReadOnly, DeployTimeConstant)

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: string

## JobProperties
### Properties
* **cancellationReason**: string (ReadOnly)
* **deliveryInfo**: [JobDeliveryInfo](#jobdeliveryinfo)
* **deliveryType**: 'NonScheduled' | 'Scheduled'
* **details**: [JobDetails](#jobdetails)
* **error**: [CloudError](#clouderror) (ReadOnly)
* **isCancellable**: bool (ReadOnly)
* **isCancellableWithoutFee**: bool (ReadOnly)
* **isDeletable**: bool (ReadOnly)
* **isPrepareToShipEnabled**: bool (ReadOnly)
* **isShippingAddressEditable**: bool (ReadOnly)
* **startTime**: string (ReadOnly)
* **status**: 'Aborted' | 'AtAzureDC' | 'Cancelled' | 'Completed' | 'CompletedWithErrors' | 'CompletedWithWarnings' | 'DataCopy' | 'Delivered' | 'DeviceOrdered' | 'DevicePrepared' | 'Dispatched' | 'Failed_IssueDetectedAtAzureDC' | 'Failed_IssueReportedAtCustomer' | 'PickedUp' | 'ReadyToDispatchFromAzureDC' | 'ReadyToReceiveAtAzureDC' (ReadOnly)
* **transferType**: 'ExportFromAzure' | 'ImportToAzure' (Required)

## JobDeliveryInfo
### Properties
* **scheduledDateTime**: string

## JobDetails
* **Discriminator**: jobDetailsType
### Base Properties
* **chainOfCustodySasKey**: string (ReadOnly)
* **contactDetails**: [ContactDetails](#contactdetails) (Required)
* **copyLogDetails**: [CopyLogDetails](#copylogdetails)[] (ReadOnly)
* **dataExportDetails**: [DataExportDetails](#dataexportdetails)[]
* **dataImportDetails**: [DataImportDetails](#dataimportdetails)[]
* **deliveryPackage**: [PackageShippingDetails](#packageshippingdetails) (ReadOnly)
* **expectedDataSizeInTeraBytes**: int
* **jobStages**: [JobStages](#jobstages)[] (ReadOnly)
* **keyEncryptionKey**: [KeyEncryptionKey](#keyencryptionkey) (ReadOnly)
* **preferences**: [Preferences](#preferences)
* **returnPackage**: [PackageShippingDetails](#packageshippingdetails) (ReadOnly)
* **reverseShipmentLabelSasKey**: string (ReadOnly)
* **shippingAddress**: [ShippingAddress](#shippingaddress)
### DataBox
#### Properties
* **accountName**: string (ReadOnly)
* **copyLogDetailsType**: 'DataBox' (Required)
* **copyLogLink**: string (ReadOnly)
* **copyVerboseLogLink**: string (ReadOnly)
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
* **copyVerboseLogLink**: string[] (ReadOnly)
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
### DataBox
#### Properties
* **accountName**: string (ReadOnly)
* **copyLogDetailsType**: 'DataBox' (Required)
* **copyLogLink**: string (ReadOnly)
* **copyVerboseLogLink**: string (ReadOnly)
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
* **copyVerboseLogLink**: string[] (ReadOnly)
* **jobDetailsType**: 'DataBoxHeavy' (Required)


## DataBox
### Properties
* **accountName**: string (ReadOnly)
* **copyLogDetailsType**: 'DataBox' (Required)
* **copyLogLink**: string (ReadOnly)
* **copyVerboseLogLink**: string (ReadOnly)
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
* **copyVerboseLogLink**: string[] (ReadOnly)
* **jobDetailsType**: 'DataBoxHeavy' (Required)

## DataExportDetails
### Properties
* **accountDetails**: [DataAccountDetails](#dataaccountdetails) (Required)
* **logCollectionLevel**: 'Error' | 'Verbose'
* **transferConfiguration**: [TransferConfiguration](#transferconfiguration) (Required)

## DataAccountDetails
* **Discriminator**: dataAccountType
### Base Properties
* **sharePassword**: string
### ManagedDisk
#### Properties
* **dataAccountType**: 'ManagedDisk' (Required)
* **resourceGroupId**: string (Required)
* **stagingStorageAccountId**: string (Required)

### StorageAccount
#### Properties
* **dataAccountType**: 'StorageAccount' (Required)
* **storageAccountId**: string (Required)


## ManagedDisk
### Properties
* **dataAccountType**: 'ManagedDisk' (Required)
* **resourceGroupId**: string (Required)
* **stagingStorageAccountId**: string (Required)

## StorageAccount
### Properties
* **dataAccountType**: 'StorageAccount' (Required)
* **storageAccountId**: string (Required)

## TransferConfiguration
### Properties
* **transferAllDetails**: [schemas:85_transferAllDetails](#schemas85transferalldetails)
* **transferConfigurationType**: 'TransferAll' | 'TransferUsingFilter' (Required)
* **transferFilterDetails**: [schemas:85_transferFilterDetails](#schemas85transferfilterdetails)

## schemas:85_transferAllDetails
### Properties
* **include**: [TransferAllDetails](#transferalldetails)

## TransferAllDetails
### Properties
* **dataAccountType**: 'ManagedDisk' | 'StorageAccount' (Required)
* **transferAllBlobs**: bool
* **transferAllFiles**: bool

## schemas:85_transferFilterDetails
### Properties
* **include**: [TransferFilterDetails](#transferfilterdetails)

## TransferFilterDetails
### Properties
* **azureFileFilterDetails**: [AzureFileFilterDetails](#azurefilefilterdetails)
* **blobFilterDetails**: [BlobFilterDetails](#blobfilterdetails)
* **dataAccountType**: 'ManagedDisk' | 'StorageAccount' (Required)
* **filterFileDetails**: [FilterFileDetails](#filterfiledetails)[]

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
* **filterFileType**: 'AzureBlob' | 'AzureFile' (Required)

## DataImportDetails
### Properties
* **accountDetails**: [DataAccountDetails](#dataaccountdetails) (Required)

## PackageShippingDetails
### Properties
* **carrierName**: string (ReadOnly)
* **trackingId**: string (ReadOnly)
* **trackingUrl**: string (ReadOnly)

## JobStages
### Properties
* **displayName**: string (ReadOnly)
* **jobStageDetails**: any (ReadOnly)
* **stageName**: 'Aborted' | 'AtAzureDC' | 'Cancelled' | 'Completed' | 'CompletedWithErrors' | 'CompletedWithWarnings' | 'DataCopy' | 'Delivered' | 'DeviceOrdered' | 'DevicePrepared' | 'Dispatched' | 'Failed_IssueDetectedAtAzureDC' | 'Failed_IssueReportedAtCustomer' | 'PickedUp' | 'ReadyToDispatchFromAzureDC' | 'ReadyToReceiveAtAzureDC' (ReadOnly)
* **stageStatus**: 'Cancelled' | 'Cancelling' | 'Failed' | 'InProgress' | 'None' | 'Succeeded' | 'SucceededWithErrors' | 'SucceededWithWarnings' | 'WaitingForCustomerAction' (ReadOnly)
* **stageTime**: string (ReadOnly)

## KeyEncryptionKey
### Properties
* **kekType**: 'CustomerManaged' | 'MicrosoftManaged' (Required)
* **kekUrl**: string
* **kekVaultResourceID**: string

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

## CloudError
### Properties
* **additionalInfo**: [AdditionalErrorInfo](#additionalerrorinfo)[] (ReadOnly)
* **code**: string
* **details**: [CloudError](#clouderror)[] (ReadOnly)
* **message**: string
* **target**: string

## AdditionalErrorInfo
### Properties
* **info**: any
* **type**: string

## Sku
### Properties
* **displayName**: string
* **family**: string
* **name**: 'DataBox' | 'DataBoxDisk' | 'DataBoxHeavy' (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

