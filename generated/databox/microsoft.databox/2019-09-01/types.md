# Microsoft.DataBox @ 2019-09-01

## Resource Microsoft.DataBox/jobs@2019-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource. This will be one of the supported and registered Azure Regions (e.g. West US, East US, Southeast Asia, etc.). The region of a resource cannot be changed once it is created, but if an identical region is specified on update the request will succeed.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobProperties](#jobproperties) (Required): Job Properties
* **sku**: [Sku](#sku) (Required): The Sku.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups).
* **type**: 'Microsoft.DataBox/jobs' (ReadOnly, DeployTimeConstant): The resource type

## JobProperties
### Properties
* **cancellationReason**: string (ReadOnly): Reason for cancellation.
* **deliveryInfo**: [JobDeliveryInfo](#jobdeliveryinfo): Additional delivery info.
* **deliveryType**: 'NonScheduled' | 'Scheduled': Delivery type of Job.
* **details**: [JobDetails](#jobdetails): Job details.
* **error**: [Error](#error) (ReadOnly): Top level error for the job.
* **isCancellable**: bool (ReadOnly): Describes whether the job is cancellable or not.
* **isCancellableWithoutFee**: bool (ReadOnly): Flag to indicate cancellation of scheduled job.
* **isDeletable**: bool (ReadOnly): Describes whether the job is deletable or not.
* **isShippingAddressEditable**: bool (ReadOnly): Describes whether the shipping address is editable or not.
* **startTime**: string (ReadOnly): Time at which the job was started in UTC ISO 8601 format.
* **status**: 'Aborted' | 'AtAzureDC' | 'Cancelled' | 'Completed' | 'CompletedWithErrors' | 'CompletedWithWarnings' | 'DataCopy' | 'Delivered' | 'DeviceOrdered' | 'DevicePrepared' | 'Dispatched' | 'Failed_IssueDetectedAtAzureDC' | 'Failed_IssueReportedAtCustomer' | 'PickedUp' | 'ReadyToDispatchFromAzureDC' | 'ReadyToReceiveAtAzureDC' (ReadOnly): Name of the stage which is in progress.

## JobDeliveryInfo
### Properties
* **scheduledDateTime**: string: Scheduled date time.

## JobDetails
* **Discriminator**: jobDetailsType
### Base Properties
* **chainOfCustodySasKey**: string (ReadOnly): Shared access key to download the chain of custody logs
* **contactDetails**: [ContactDetails](#contactdetails) (Required): Contact Details.
* **copyLogDetails**: [CopyLogDetails](#copylogdetails)[] (ReadOnly): List of copy log details.
* **deliveryPackage**: [PackageShippingDetails](#packageshippingdetails) (ReadOnly): Shipping details.
* **destinationAccountDetails**: [DestinationAccountDetails](#destinationaccountdetails)[] (Required): Destination account details.
* **errorDetails**: [JobErrorDetails](#joberrordetails)[] (ReadOnly): Error details for failure. This is optional.
* **expectedDataSizeInTeraBytes**: int: The expected size of the data, which needs to be transferred in this job, in terabytes.
* **jobStages**: [JobStages](#jobstages)[] (ReadOnly): List of stages that run in the job.
* **preferences**: [Preferences](#preferences): Preferences related to the order
* **returnPackage**: [PackageShippingDetails](#packageshippingdetails) (ReadOnly): Shipping details.
* **reverseShipmentLabelSasKey**: string (ReadOnly): Shared access key to download the return shipment label
* **shippingAddress**: [ShippingAddress](#shippingaddress) (Required): Shipping address where customer wishes to receive the device.
### DataBox
#### Properties
* **accountName**: string (ReadOnly): Destination account name.
* **copyLogDetailsType**: 'DataBox' (Required): Copy log details for a storage account of a DataBox job
* **copyLogLink**: string (ReadOnly): Link for copy logs.
* **jobDetailsType**: 'DataBox' (Required): Databox Job Details

### DataBoxDisk
#### Properties
* **copyLogDetailsType**: 'DataBoxDisk' (Required): Copy Log Details for a disk
* **diskSerialNumber**: string (ReadOnly): Disk Serial Number.
* **errorLogLink**: string (ReadOnly): Link for copy error logs.
* **jobDetailsType**: 'DataBoxDisk' (Required): DataBox Disk Job Details.
* **verboseLogLink**: string (ReadOnly): Link for copy verbose logs.

### DataBoxHeavy
#### Properties
* **accountName**: string (ReadOnly): Destination account name.
* **copyLogDetailsType**: 'DataBoxHeavy' (Required): Copy log details for a storage account for Databox heavy
* **copyLogLink**: string[] (ReadOnly): Link for copy logs.
* **jobDetailsType**: 'DataBoxHeavy' (Required): Databox Heavy Device Job Details


## ContactDetails
### Properties
* **contactName**: string (Required): Contact name of the person.
* **emailList**: string[] (Required): List of Email-ids to be notified about job progress.
* **mobile**: string: Mobile number of the contact person.
* **notificationPreference**: [NotificationPreference](#notificationpreference)[]: Notification preference for a job stage.
* **phone**: string (Required): Phone number of the contact person.
* **phoneExtension**: string: Phone extension number of the contact person.

## NotificationPreference
### Properties
* **sendNotification**: bool (Required): Notification is required or not.
* **stageName**: 'AtAzureDC' | 'DataCopy' | 'Delivered' | 'DevicePrepared' | 'Dispatched' | 'PickedUp' (Required): Name of the stage.

## CopyLogDetails
* **Discriminator**: copyLogDetailsType
### Base Properties
### DataBox
#### Properties
* **accountName**: string (ReadOnly): Destination account name.
* **copyLogDetailsType**: 'DataBox' (Required): Copy log details for a storage account of a DataBox job
* **copyLogLink**: string (ReadOnly): Link for copy logs.
* **jobDetailsType**: 'DataBox' (Required): Databox Job Details

### DataBoxDisk
#### Properties
* **copyLogDetailsType**: 'DataBoxDisk' (Required): Copy Log Details for a disk
* **diskSerialNumber**: string (ReadOnly): Disk Serial Number.
* **errorLogLink**: string (ReadOnly): Link for copy error logs.
* **jobDetailsType**: 'DataBoxDisk' (Required): DataBox Disk Job Details.
* **verboseLogLink**: string (ReadOnly): Link for copy verbose logs.

### DataBoxHeavy
#### Properties
* **accountName**: string (ReadOnly): Destination account name.
* **copyLogDetailsType**: 'DataBoxHeavy' (Required): Copy log details for a storage account for Databox heavy
* **copyLogLink**: string[] (ReadOnly): Link for copy logs.
* **jobDetailsType**: 'DataBoxHeavy' (Required): Databox Heavy Device Job Details


## DataBox
### Properties
* **accountName**: string (ReadOnly): Destination account name.
* **copyLogDetailsType**: 'DataBox' (Required): Copy log details for a storage account of a DataBox job
* **copyLogLink**: string (ReadOnly): Link for copy logs.
* **jobDetailsType**: 'DataBox' (Required): Databox Job Details

## DataBoxDisk
### Properties
* **copyLogDetailsType**: 'DataBoxDisk' (Required): Copy Log Details for a disk
* **diskSerialNumber**: string (ReadOnly): Disk Serial Number.
* **errorLogLink**: string (ReadOnly): Link for copy error logs.
* **jobDetailsType**: 'DataBoxDisk' (Required): DataBox Disk Job Details.
* **verboseLogLink**: string (ReadOnly): Link for copy verbose logs.

## DataBoxHeavy
### Properties
* **accountName**: string (ReadOnly): Destination account name.
* **copyLogDetailsType**: 'DataBoxHeavy' (Required): Copy log details for a storage account for Databox heavy
* **copyLogLink**: string[] (ReadOnly): Link for copy logs.
* **jobDetailsType**: 'DataBoxHeavy' (Required): Databox Heavy Device Job Details

## PackageShippingDetails
### Properties
* **carrierName**: string (ReadOnly): Name of the carrier.
* **trackingId**: string (ReadOnly): Tracking Id of shipment.
* **trackingUrl**: string (ReadOnly): Url where shipment can be tracked.

## DestinationAccountDetails
* **Discriminator**: dataDestinationType
### Base Properties
* **accountId**: string: Arm Id of the destination where the data has to be moved.
* **sharePassword**: string: Share password to be shared by all shares in SA.
### ManagedDisk
#### Properties
* **dataDestinationType**: 'ManagedDisk' (Required): Details for the destination compute disks.
* **resourceGroupId**: string (Required): Destination Resource Group Id where the Compute disks should be created.
* **stagingStorageAccountId**: string (Required): Arm Id of the storage account that can be used to copy the vhd for staging.

### StorageAccount
#### Properties
* **dataDestinationType**: 'StorageAccount' (Required): Details for the destination storage account.
* **storageAccountId**: string (Required): Destination Storage Account Arm Id.


## ManagedDisk
### Properties
* **dataDestinationType**: 'ManagedDisk' (Required): Details for the destination compute disks.
* **resourceGroupId**: string (Required): Destination Resource Group Id where the Compute disks should be created.
* **stagingStorageAccountId**: string (Required): Arm Id of the storage account that can be used to copy the vhd for staging.

## StorageAccount
### Properties
* **dataDestinationType**: 'StorageAccount' (Required): Details for the destination storage account.
* **storageAccountId**: string (Required): Destination Storage Account Arm Id.

## JobErrorDetails
### Properties
* **errorCode**: int (ReadOnly): Code for the error.
* **errorMessage**: string (ReadOnly): Message for the error.
* **exceptionMessage**: string (ReadOnly): Contains the non localized exception message
* **recommendedAction**: string (ReadOnly): Recommended action for the error.

## JobStages
### Properties
* **displayName**: string (ReadOnly): Display name of the job stage.
* **errorDetails**: [JobErrorDetails](#joberrordetails)[] (ReadOnly): Error details for the stage.
* **jobStageDetails**: any (ReadOnly): Job Stage Details
* **stageName**: 'Aborted' | 'AtAzureDC' | 'Cancelled' | 'Completed' | 'CompletedWithErrors' | 'CompletedWithWarnings' | 'DataCopy' | 'Delivered' | 'DeviceOrdered' | 'DevicePrepared' | 'Dispatched' | 'Failed_IssueDetectedAtAzureDC' | 'Failed_IssueReportedAtCustomer' | 'PickedUp' | 'ReadyToDispatchFromAzureDC' | 'ReadyToReceiveAtAzureDC' (ReadOnly): Name of the job stage.
* **stageStatus**: 'Cancelled' | 'Cancelling' | 'Failed' | 'InProgress' | 'None' | 'Succeeded' | 'SucceededWithErrors' (ReadOnly): Status of the job stage.
* **stageTime**: string (ReadOnly): Time for the job stage in UTC ISO 8601 format.

## Preferences
### Properties
* **preferredDataCenterRegion**: string[]: Preferred Data Center Region.
* **transportPreferences**: [TransportPreferences](#transportpreferences): Preferences related to the shipment logistics of the sku

## TransportPreferences
### Properties
* **preferredShipmentType**: 'CustomerManaged' | 'MicrosoftManaged' (Required): Indicates Shipment Logistics type that the customer preferred.

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

## Error
### Properties
* **code**: string (ReadOnly): Error code that can be used to programmatically identify the error.
* **message**: string (ReadOnly): Describes the error in detail and provides debugging information.

## Sku
### Properties
* **displayName**: string: The display name of the sku.
* **family**: string: The sku family.
* **name**: 'DataBox' | 'DataBoxDisk' | 'DataBoxHeavy' (Required): The sku name.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

