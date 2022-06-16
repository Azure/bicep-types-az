# Microsoft.DataBox @ 2018-01-01

## Resource Microsoft.DataBox/jobs@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource. This will be one of the supported and registered Azure Regions (e.g. West US, East US, Southeast Asia, etc.). The region of a resource cannot be changed once it is created, but if an identical region is specified on update the request will succeed.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobProperties](#jobproperties) (Required): Properties of a job.
* **sku**: [Sku](#sku) (Required): The sku type.
* **tags**: [ResourceTags](#resourcetags): The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups).
* **type**: 'Microsoft.DataBox/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Function listCredentials (Microsoft.DataBox/jobs@2018-01-01)
* **Resource**: Microsoft.DataBox/jobs
* **ApiVersion**: 2018-01-01
* **Output**: [UnencryptedCredentialsList](#unencryptedcredentialslist)

## AccountCredentialDetails
### Properties
* **accountConnectionString**: string (ReadOnly): Connection string of the account endpoint to use the account as a storage endpoint on the device.
* **accountName**: string (ReadOnly): Name of the account.
* **shareCredentialDetails**: [ShareCredentialDetails](#sharecredentialdetails)[] (ReadOnly): Per share level unencrypted access credentials.

## ApplianceNetworkConfiguration
### Properties
* **macAddress**: string (ReadOnly): Mac Address.
* **name**: string (ReadOnly): Name of the network.

## ContactDetails
### Properties
* **contactName**: string (Required): Contact name of the person.
* **emailList**: string[] (Required): List of Email-ids to be notified about job progress.
* **mobile**: string: Mobile number of the contact person.
* **notificationPreference**: [NotificationPreference](#notificationpreference)[]: Notification preference for a job stage.
* **phone**: string (Required): Phone number of the contact person.
* **phoneExtension**: string: Phone extension number of the contact person.

## CopyLogDetails
* **Discriminator**: copyLogDetailsType

### Base Properties
### DataBoxAccountCopyLogDetails
#### Properties
* **accountName**: string (ReadOnly): Destination account name.
* **copyLogDetailsType**: 'DataBox' (Required): Indicates the type of job details.
* **copyLogLink**: string (ReadOnly): Link for copy logs.

### DataBoxDiskCopyLogDetails
#### Properties
* **copyLogDetailsType**: 'DataBoxDisk' (Required): Indicates the type of job details.
* **diskSerialNumber**: string (ReadOnly): Disk Serial Number.
* **errorLogLink**: string (ReadOnly): Link for copy error logs.
* **verboseLogLink**: string (ReadOnly): Link for copy verbose logs.

### DataBoxHeavyAccountCopyLogDetails
#### Properties
* **accountName**: string (ReadOnly): Destination account name.
* **copyLogDetailsType**: 'DataBoxHeavy' (Required): Indicates the type of job details.
* **copyLogLink**: string[] (ReadOnly): Link for copy logs.


## CopyProgress
### Properties
* **accountId**: string (ReadOnly): Id of the account where the data needs to be uploaded.
* **bytesSentToCloud**: int (ReadOnly): Amount of data uploaded by the job as of now.
* **filesProcessed**: int (ReadOnly): Number of files processed by the job as of now.
* **storageAccountName**: string (ReadOnly): Name of the storage account where the data needs to be uploaded.
* **totalBytesToProcess**: int (ReadOnly): Total amount of data to be processed by the job.
* **totalFilesToProcess**: int (ReadOnly): Total number of files to be processed by the job.

## DataBoxDiskCopyProgress
### Properties
* **bytesCopied**: int (ReadOnly): Bytes copied during the copy of disk.
* **percentComplete**: int (ReadOnly): Indicates the percentage completed for the copy of the disk.
* **serialNumber**: string (ReadOnly): The serial number of the disk
* **status**: 'Completed' | 'CompletedWithErrors' | 'Failed' | 'InProgress' | 'NotReturned' | 'NotStarted' (ReadOnly): The Status of the copy

## DataBoxDiskJobDetailsDisksAndSizeDetails
### Properties
### Additional Properties
* **Additional Properties Type**: int

## DataBoxDiskJobDetailsPreferredDisks
### Properties
### Additional Properties
* **Additional Properties Type**: int

## DataBoxHeavySecret
### Properties
* **accountCredentialDetails**: [AccountCredentialDetails](#accountcredentialdetails)[] (ReadOnly): Per account level access credentials.
* **devicePassword**: string (ReadOnly): Password for out of the box experience on device.
* **deviceSerialNumber**: string (ReadOnly): Serial number of the assigned device.
* **encodedValidationCertPubKey**: string (ReadOnly): The base 64 encoded public key to authenticate with the device
* **networkConfigurations**: [ApplianceNetworkConfiguration](#appliancenetworkconfiguration)[] (ReadOnly): Network configuration of the appliance.

## DataBoxSecret
### Properties
* **accountCredentialDetails**: [AccountCredentialDetails](#accountcredentialdetails)[] (ReadOnly): Per account level access credentials.
* **devicePassword**: string (ReadOnly): Password for out of the box experience on device.
* **deviceSerialNumber**: string (ReadOnly): Serial number of the assigned device.
* **encodedValidationCertPubKey**: string (ReadOnly): The base 64 encoded public key to authenticate with the device
* **networkConfigurations**: [ApplianceNetworkConfiguration](#appliancenetworkconfiguration)[] (ReadOnly): Network configuration of the appliance.

## DestinationAccountDetails
* **Discriminator**: dataDestinationType

### Base Properties
* **accountId**: string: Arm Id of the destination where the data has to be moved.
### DestinationManagedDiskDetails
#### Properties
* **dataDestinationType**: 'ManagedDisk' (Required): Data Destination Type.
* **resourceGroupId**: string (Required): Destination Resource Group Id where the Compute disks should be created.
* **stagingStorageAccountId**: string (Required): Arm Id of the storage account that can be used to copy the vhd for staging.

### DestinationStorageAccountDetails
#### Properties
* **dataDestinationType**: 'StorageAccount' (Required): Data Destination Type.
* **storageAccountId**: string (Required): Destination Storage Account Arm Id.


## DiskSecret
### Properties
* **bitLockerKey**: string (ReadOnly): Bit Locker key of the disk which can be used to unlock the disk to copy data.
* **diskSerialNumber**: string (ReadOnly): Serial number of the assigned disk.

## Error
### Properties
* **code**: string (ReadOnly): Error code that can be used to programmatically identify the error.
* **message**: string (ReadOnly): Describes the error in detail and provides debugging information.

## JobDetails
* **Discriminator**: jobDetailsType

### Base Properties
* **chainOfCustodySasKey**: string (ReadOnly): Shared access key to download the chain of custody logs
* **contactDetails**: [ContactDetails](#contactdetails) (Required): Contact details for notification and shipping.
* **copyLogDetails**: [CopyLogDetails](#copylogdetails)[] (ReadOnly): List of copy log details.
* **deliveryPackage**: [PackageShippingDetails](#packageshippingdetails) (ReadOnly): Delivery package shipping details.
* **destinationAccountDetails**: [DestinationAccountDetails](#destinationaccountdetails)[] (Required): Destination account details.
* **errorDetails**: [JobErrorDetails](#joberrordetails)[] (ReadOnly): Error details for failure. This is optional.
* **expectedDataSizeInTeraBytes**: int: The expected size of the data, which needs to be transferred in this job, in terabytes.
* **jobStages**: [JobStages](#jobstages)[] (ReadOnly): List of stages that run in the job.
* **preferences**: [Preferences](#preferences): Preferences for the order.
* **returnPackage**: [PackageShippingDetails](#packageshippingdetails) (ReadOnly): Return package shipping details.
* **reverseShipmentLabelSasKey**: string (ReadOnly): Shared access key to download the return shipment label
* **shippingAddress**: [ShippingAddress](#shippingaddress) (Required): Shipping address of the customer.
### DataBoxJobDetails
#### Properties
* **copyProgress**: [CopyProgress](#copyprogress)[] (ReadOnly): Copy progress per storage account.
* **jobDetailsType**: 'DataBox' (Required): Indicates the type of job details.

### DataBoxDiskJobDetails
#### Properties
* **copyProgress**: [DataBoxDiskCopyProgress](#databoxdiskcopyprogress)[] (ReadOnly): Copy progress per disk.
* **disksAndSizeDetails**: [DataBoxDiskJobDetailsDisksAndSizeDetails](#databoxdiskjobdetailsdisksandsizedetails) (ReadOnly): Contains the map of disk serial number to the disk size being used for the job. Is returned only after the disks are shipped to the customer.
* **jobDetailsType**: 'DataBoxDisk' (Required): Indicates the type of job details.
* **passkey**: string: User entered passkey for DataBox Disk job.
* **preferredDisks**: [DataBoxDiskJobDetailsPreferredDisks](#databoxdiskjobdetailspreferreddisks): User preference on what size disks are needed for the job. The map is from the disk size in TB to the count. Eg. {2,5} means 5 disks of 2 TB size. Key is string but will be checked against an int.

### DataBoxHeavyJobDetails
#### Properties
* **copyProgress**: [CopyProgress](#copyprogress)[] (ReadOnly): Copy progress per account.
* **jobDetailsType**: 'DataBoxHeavy' (Required): Indicates the type of job details.


## JobErrorDetails
### Properties
* **errorCode**: int (ReadOnly): Code for the error.
* **errorMessage**: string (ReadOnly): Message for the error.
* **exceptionMessage**: string (ReadOnly): Contains the non localized exception message
* **recommendedAction**: string (ReadOnly): Recommended action for the error.

## JobProperties
### Properties
* **cancellationReason**: string (ReadOnly): Reason for cancellation.
* **details**: [JobDetails](#jobdetails): Details of a job run. This field will only be sent for expand details filter.
* **error**: [Error](#error) (ReadOnly): Top level error for the job.
* **isCancellable**: bool (ReadOnly): Describes whether the job is cancellable or not.
* **isDeletable**: bool (ReadOnly): Describes whether the job is deletable or not.
* **isShippingAddressEditable**: bool (ReadOnly): Describes whether the shipping address is editable or not.
* **startTime**: string (ReadOnly): Time at which the job was started in UTC ISO 8601 format.
* **status**: 'Aborted' | 'AtAzureDC' | 'Cancelled' | 'Completed' | 'CompletedWithErrors' | 'DataCopy' | 'Delivered' | 'DeviceOrdered' | 'DevicePrepared' | 'Dispatched' | 'Failed_IssueDetectedAtAzureDC' | 'Failed_IssueReportedAtCustomer' | 'PickedUp' (ReadOnly): Name of the stage which is in progress.

## JobSecrets
* **Discriminator**: jobSecretsType

### Base Properties
### DataboxJobSecrets
#### Properties
* **jobSecretsType**: 'DataBox' (Required): Used to indicate what type of job secrets object.
* **podSecrets**: [DataBoxSecret](#databoxsecret)[]: Contains the list of secret objects for a job.

### DataBoxDiskJobSecrets
#### Properties
* **diskSecrets**: [DiskSecret](#disksecret)[] (ReadOnly): Contains the list of secrets object for that device.
* **isPasskeyUserDefined**: bool (ReadOnly): Whether passkey was provided by user.
* **jobSecretsType**: 'DataBoxDisk' (Required): Used to indicate what type of job secrets object.
* **passKey**: string (ReadOnly): PassKey for the disk Job.

### DataBoxHeavyJobSecrets
#### Properties
* **cabinetPodSecrets**: [DataBoxHeavySecret](#databoxheavysecret)[] (ReadOnly): Contains the list of secret objects for a DataBoxHeavy job.
* **jobSecretsType**: 'DataBoxHeavy' (Required): Used to indicate what type of job secrets object.


## JobStages
### Properties
* **displayName**: string (ReadOnly): Display name of the job stage.
* **errorDetails**: [JobErrorDetails](#joberrordetails)[] (ReadOnly): Error details for the stage.
* **jobStageDetails**: any (ReadOnly): Job Stage Details
* **stageName**: 'Aborted' | 'AtAzureDC' | 'Cancelled' | 'Completed' | 'CompletedWithErrors' | 'DataCopy' | 'Delivered' | 'DeviceOrdered' | 'DevicePrepared' | 'Dispatched' | 'Failed_IssueDetectedAtAzureDC' | 'Failed_IssueReportedAtCustomer' | 'PickedUp' (ReadOnly): Name of the job stage.
* **stageStatus**: 'Cancelled' | 'Cancelling' | 'Failed' | 'InProgress' | 'None' | 'Succeeded' | 'SucceededWithErrors' (ReadOnly): Status of the job stage.
* **stageTime**: string (ReadOnly): Time for the job stage in UTC ISO 8601 format.

## NotificationPreference
### Properties
* **sendNotification**: bool (Required): Notification is required or not.
* **stageName**: 'AtAzureDC' | 'DataCopy' | 'Delivered' | 'DevicePrepared' | 'Dispatched' | 'PickedUp' (Required): Name of the stage.

## PackageShippingDetails
### Properties
* **carrierName**: string (ReadOnly): Name of the carrier.
* **trackingId**: string (ReadOnly): Tracking Id of shipment.
* **trackingUrl**: string (ReadOnly): Url where shipment can be tracked.

## Preferences
### Properties
* **preferredDataCenterRegion**: string[]

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ShareCredentialDetails
### Properties
* **password**: string (ReadOnly): Password for the share.
* **shareName**: string (ReadOnly): Name of the share.
* **shareType**: 'AzureFile' | 'BlockBlob' | 'HCS' | 'ManagedDisk' | 'PageBlob' | 'UnknownType' (ReadOnly): Type of the share.
* **supportedAccessProtocols**: 'NFS' | 'SMB'[] (ReadOnly): Access protocols supported on the device.
* **userName**: string (ReadOnly): User name for the share.

## ShippingAddress
### Properties
* **addressType**: 'Commercial' | 'None' | 'Residential': Type of address.
* **city**: string: Name of the City.
* **companyName**: string: Name of the company.
* **country**: string (Required): Name of the Country.
* **postalCode**: string (Required): Postal code.
* **stateOrProvince**: string: Name of the State or Province.
* **streetAddress1**: string (Required): Street Address line 1.
* **streetAddress2**: string: Street Address line 2.
* **streetAddress3**: string: Street Address line 3.
* **zipExtendedCode**: string: Extended Zip Code.

## Sku
### Properties
* **displayName**: string: The display name of the sku.
* **family**: string: The sku family.
* **name**: 'DataBox' | 'DataBoxDisk' | 'DataBoxHeavy' (Required): The sku name.

## UnencryptedCredentials
### Properties
* **jobName**: string (ReadOnly): Name of the job.
* **jobSecrets**: [JobSecrets](#jobsecrets) (ReadOnly): Secrets related to this job.

## UnencryptedCredentialsList
### Properties
* **nextLink**: string: Link for the next set of unencrypted credentials.
* **value**: [UnencryptedCredentials](#unencryptedcredentials)[]: List of unencrypted credentials.

