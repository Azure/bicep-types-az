# Microsoft.ImportExport @ 2021-01-01

## Resource Microsoft.ImportExport/jobs@2021-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: JobDetails
* **type**: 'Microsoft.ImportExport/jobs' (ReadOnly, DeployTimeConstant)

## JobDetails
### Properties
* **backupDriveManifest**: bool
* **cancelRequested**: bool
* **deliveryPackage**: DeliveryPackageInformation
* **diagnosticsPath**: string
* **driveList**: DriveStatus[]
* **encryptionKey**: EncryptionKeyDetails
* **export**: Export
* **incompleteBlobListUri**: string
* **jobType**: string
* **logLevel**: string
* **percentComplete**: int
* **provisioningState**: string
* **returnAddress**: ReturnAddress
* **returnPackage**: PackageInformation
* **returnShipping**: ReturnShipping
* **shippingInformation**: ShippingInformation
* **state**: string
* **storageAccountId**: string

## DeliveryPackageInformation
### Properties
* **carrierName**: string (Required)
* **driveCount**: int
* **shipDate**: string
* **trackingNumber**: string (Required)

## DriveStatus
### Properties
* **bitLockerKey**: string
* **bytesSucceeded**: int
* **copyStatus**: string
* **driveHeaderHash**: string
* **driveId**: string
* **errorLogUri**: string
* **manifestFile**: string
* **manifestHash**: string
* **manifestUri**: string
* **percentComplete**: int
* **state**: 'Completed' | 'CompletedMoreInfo' | 'NeverReceived' | 'Received' | 'ShippedBack' | 'Specified' | 'Transferring'
* **verboseLogUri**: string

## EncryptionKeyDetails
### Properties
* **kekType**: 'CustomerManaged' | 'MicrosoftManaged'
* **kekUrl**: string
* **kekVaultResourceID**: string

## Export
### Properties
* **blobList**: ExportBlobList
* **blobListBlobPath**: string

## ExportBlobList
### Properties
* **blobPath**: string[]
* **blobPathPrefix**: string[]

## ReturnAddress
### Properties
* **city**: string (Required)
* **countryOrRegion**: string (Required)
* **email**: string (Required)
* **phone**: string (Required)
* **postalCode**: string (Required)
* **recipientName**: string (Required)
* **stateOrProvince**: string
* **streetAddress1**: string (Required)
* **streetAddress2**: string

## PackageInformation
### Properties
* **carrierName**: string (Required)
* **driveCount**: int (Required)
* **shipDate**: string (Required)
* **trackingNumber**: string (Required)

## ReturnShipping
### Properties
* **carrierAccountNumber**: string (Required)
* **carrierName**: string (Required)

## ShippingInformation
### Properties
* **additionalInformation**: string (ReadOnly)
* **city**: string
* **countryOrRegion**: string
* **phone**: string
* **postalCode**: string
* **recipientName**: string
* **stateOrProvince**: string
* **streetAddress1**: string
* **streetAddress2**: string

