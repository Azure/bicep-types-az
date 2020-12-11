# Microsoft.ImportExport @ 2020-08-01

## Resource Microsoft.ImportExport/jobs@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: IdentityDetails (ReadOnly)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: JobDetails
* **tags**: any
* **type**: 'Microsoft.ImportExport/jobs' (ReadOnly, DeployTimeConstant)

## IdentityDetails
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned' (ReadOnly)

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
* **blobList**: schemas:16_blobList
* **blobListBlobPath**: string

## schemas:16_blobList
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
* **city**: string (Required)
* **countryOrRegion**: string (Required)
* **phone**: string
* **postalCode**: string (Required)
* **recipientName**: string (Required)
* **stateOrProvince**: string (Required)
* **streetAddress1**: string (Required)
* **streetAddress2**: string

