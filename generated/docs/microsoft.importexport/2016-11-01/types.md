# Microsoft.ImportExport @ 2016-11-01

## Resource Microsoft.ImportExport/jobs@2016-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: JobDetails
* **tags**: any
* **type**: 'Microsoft.ImportExport/jobs' (ReadOnly, DeployTimeConstant)

## JobDetails
### Properties
* **backupDriveManifest**: bool
* **cancelRequested**: bool
* **deliveryPackage**: PackageInfomation
* **diagnosticsPath**: string
* **driveList**: DriveStatus[]
* **export**: Export
* **incompleteBlobListUri**: string
* **jobType**: string
* **logLevel**: string
* **percentComplete**: int
* **provisioningState**: string
* **returnAddress**: ReturnAddress
* **returnPackage**: PackageInfomation
* **returnShipping**: ReturnShipping
* **shippingInformation**: ShippingInformation
* **state**: string
* **storageAccountId**: string

## PackageInfomation
### Properties
* **carrierName**: string (Required)
* **driveCount**: int (Required)
* **shipDate**: string (Required)
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

## Export
### Properties
* **blobList**: schemas:13_blobList
* **blobListblobPath**: string

## schemas:13_blobList
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

## ReturnShipping
### Properties
* **carrierAccountNumber**: string (Required)
* **carrierName**: string (Required)

## ShippingInformation
### Properties
* **city**: string (Required)
* **countryOrRegion**: string (Required)
* **phone**: string
* **postalCode**: string (Required)
* **recipientName**: string (Required)
* **stateOrProvince**: string (Required)
* **streetAddress1**: string (Required)
* **streetAddress2**: string

