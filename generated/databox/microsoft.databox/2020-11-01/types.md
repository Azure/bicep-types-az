# Microsoft.DataBox @ 2020-11-01

## Resource Microsoft.DataBox/jobs@2020-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ResourceIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: JobProperties (Required)
* **sku**: Sku (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DataBox/jobs' (ReadOnly, DeployTimeConstant)

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: string
* **userAssignedIdentities**: Dictionary<string,UserAssignedIdentity>

## Dictionary<string,UserAssignedIdentity>
### Properties
### Additional Properties
* **Additional Properties Type**: UserAssignedIdentity

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## JobProperties
### Properties
* **cancellationReason**: string (ReadOnly)
* **deliveryInfo**: JobDeliveryInfo
* **deliveryType**: 'NonScheduled' | 'Scheduled'
* **details**: JobDetails
* **error**: CloudError (ReadOnly)
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
* **contactDetails**: ContactDetails (Required)
* **copyLogDetails**: CopyLogDetails[] (ReadOnly)
* **dataExportDetails**: DataExportDetails[]
* **dataImportDetails**: DataImportDetails[]
* **deliveryPackage**: PackageShippingDetails (ReadOnly)
* **expectedDataSizeInTeraBytes**: int
* **jobStages**: JobStages[] (ReadOnly)
* **keyEncryptionKey**: KeyEncryptionKey
* **preferences**: Preferences
* **returnPackage**: PackageShippingDetails (ReadOnly)
* **reverseShipmentLabelSasKey**: string (ReadOnly)
* **shippingAddress**: ShippingAddress
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
* **accountDetails**: DataAccountDetails (Required)
* **logCollectionLevel**: 'Error' | 'Verbose'
* **transferConfiguration**: TransferConfiguration (Required)

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
* **transferAllDetails**: schemas:87_transferAllDetails
* **transferConfigurationType**: 'TransferAll' | 'TransferUsingFilter' (Required)
* **transferFilterDetails**: schemas:87_transferFilterDetails

## schemas:87_transferAllDetails
### Properties
* **include**: TransferAllDetails

## TransferAllDetails
### Properties
* **dataAccountType**: 'ManagedDisk' | 'StorageAccount' (Required)
* **transferAllBlobs**: bool
* **transferAllFiles**: bool

## schemas:87_transferFilterDetails
### Properties
* **include**: TransferFilterDetails

## TransferFilterDetails
### Properties
* **azureFileFilterDetails**: AzureFileFilterDetails
* **blobFilterDetails**: BlobFilterDetails
* **dataAccountType**: 'ManagedDisk' | 'StorageAccount' (Required)
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
* **filterFileType**: 'AzureBlob' | 'AzureFile' (Required)

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
* **jobStageDetails**: any (ReadOnly)
* **stageName**: 'Aborted' | 'AtAzureDC' | 'Cancelled' | 'Completed' | 'CompletedWithErrors' | 'CompletedWithWarnings' | 'DataCopy' | 'Delivered' | 'DeviceOrdered' | 'DevicePrepared' | 'Dispatched' | 'Failed_IssueDetectedAtAzureDC' | 'Failed_IssueReportedAtCustomer' | 'PickedUp' | 'ReadyToDispatchFromAzureDC' | 'ReadyToReceiveAtAzureDC' (ReadOnly)
* **stageStatus**: 'Cancelled' | 'Cancelling' | 'Failed' | 'InProgress' | 'None' | 'Succeeded' | 'SucceededWithErrors' | 'SucceededWithWarnings' | 'WaitingForCustomerAction' (ReadOnly)
* **stageTime**: string (ReadOnly)

## KeyEncryptionKey
### Properties
* **identityProperties**: IdentityProperties
* **kekType**: 'CustomerManaged' | 'MicrosoftManaged' (Required)
* **kekUrl**: string
* **kekVaultResourceID**: string

## IdentityProperties
### Properties
* **type**: string
* **userAssigned**: UserAssignedProperties

## UserAssignedProperties
### Properties
* **resourceId**: string

## Preferences
### Properties
* **encryptionPreferences**: EncryptionPreferences
* **preferredDataCenterRegion**: string[]
* **transportPreferences**: TransportPreferences

## EncryptionPreferences
### Properties
* **doubleEncryption**: 'Disabled' | 'Enabled'

## TransportPreferences
### Properties
* **preferredShipmentType**: 'CustomerManaged' | 'MicrosoftManaged' (Required)

## ShippingAddress
### Properties
* **addressType**: 'Commercial' | 'None' | 'Residential'
* **city**: string
* **companyName**: string
* **country**: string (Required)
* **postalCode**: string
* **stateOrProvince**: string
* **streetAddress1**: string (Required)
* **streetAddress2**: string
* **streetAddress3**: string
* **zipExtendedCode**: string

## CloudError
### Properties
* **additionalInfo**: AdditionalErrorInfo[] (ReadOnly)
* **code**: string
* **details**: CloudError[] (ReadOnly)
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

