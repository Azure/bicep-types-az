# Microsoft.DataBox @ 2019-09-01

## Resource Microsoft.DataBox/jobs@2019-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource. This will be one of the supported and registered Azure Regions (e.g. West US, East US, Southeast Asia, etc.). The region of a resource cannot be changed once it is created, but if an identical region is specified on update the request will succeed.
* **name**: string {minLength: 3, maxLength: 24, pattern: "^[-\w\.]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [JobProperties](#jobproperties) (Required): Properties of a job.
* **sku**: [Sku](#sku) (Required): The sku type.
* **tags**: [ResourceTags](#resourcetags): The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups).
* **type**: 'Microsoft.DataBox/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Function availableSkus (Microsoft.DataBox/locations@2019-09-01)
* **Resource**: Microsoft.DataBox/locations
* **ApiVersion**: 2019-09-01
* **Input**: [AvailableSkuRequest](#availableskurequest)
* **Output**: [AvailableSkusResult](#availableskusresult)

## Function bookShipmentPickUp (Microsoft.DataBox/jobs@2019-09-01)
* **Resource**: Microsoft.DataBox/jobs
* **ApiVersion**: 2019-09-01
* **Input**: [ShipmentPickUpRequest](#shipmentpickuprequest)
* **Output**: [ShipmentPickUpResponse](#shipmentpickupresponse)

## Function listCredentials (Microsoft.DataBox/jobs@2019-09-01)
* **Resource**: Microsoft.DataBox/jobs
* **ApiVersion**: 2019-09-01
* **Output**: [UnencryptedCredentialsList](#unencryptedcredentialslist)

## Function regionConfiguration (Microsoft.DataBox/locations@2019-09-01)
* **Resource**: Microsoft.DataBox/locations
* **ApiVersion**: 2019-09-01
* **Input**: [RegionConfigurationRequest](#regionconfigurationrequest)
* **Output**: [RegionConfigurationResponse](#regionconfigurationresponse)

## Function validateAddress (Microsoft.DataBox/locations@2019-09-01)
* **Resource**: Microsoft.DataBox/locations
* **ApiVersion**: 2019-09-01
* **Input**: [ValidateAddress](#validateaddress)
* **Output**: [AddressValidationOutput](#addressvalidationoutput)

## Function validateInputs (Microsoft.DataBox/locations@2019-09-01)
* **Resource**: Microsoft.DataBox/locations
* **ApiVersion**: 2019-09-01
* **Input**: [ValidationRequest](#validationrequest)
* **Output**: [ValidationResponse](#validationresponse)

## AccountCredentialDetails
### Properties
* **accountConnectionString**: string (ReadOnly): Connection string of the account endpoint to use the account as a storage endpoint on the device.
* **accountName**: string (ReadOnly): Name of the account.
* **dataDestinationType**: 'ManagedDisk' | 'StorageAccount' (ReadOnly): Data Destination Type.
* **shareCredentialDetails**: [ShareCredentialDetails](#sharecredentialdetails)[] (ReadOnly): Per share level unencrypted access credentials.

## AddressValidationOutput
### Properties
* **properties**: [AddressValidationProperties](#addressvalidationproperties) (ReadOnly): The address validation properties.

## AddressValidationProperties
### Properties
* **alternateAddresses**: [ShippingAddress](#shippingaddress)[] (ReadOnly): List of alternate addresses.
* **error**: [Error](#error) (ReadOnly): Error code and message of validation response.
* **validationStatus**: 'Ambiguous' | 'Invalid' | 'Valid' (ReadOnly): The address validation status.
* **validationType**: 'ValidateAddress' | 'ValidateCreateOrderLimit' | 'ValidateDataDestinationDetails' | 'ValidatePreferences' | 'ValidateSkuAvailability' | 'ValidateSubscriptionIsAllowedToCreateJob' (Required): Identifies the type of validation response.

## ApplianceNetworkConfiguration
### Properties
* **macAddress**: string (ReadOnly): Mac Address.
* **name**: string (ReadOnly): Name of the network.

## AvailableSkuRequest
### Properties
* **country**: string (Required): ISO country code. Country for hardware shipment. For codes check: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
* **location**: string (Required): Location for data transfer. For locations check: https://management.azure.com/subscriptions/SUBSCRIPTIONID/locations?api-version=2018-01-01
* **skuNames**: ('DataBox' | 'DataBoxDisk' | 'DataBoxHeavy')[]: Sku Names to filter for available skus
* **transferType**: 'ImportToAzure' (Required): Type of the transfer.

## AvailableSkusResult
### Properties
* **nextLink**: string: Link for the next set of skus.
* **value**: [SkuInformation](#skuinformation)[] (ReadOnly): List of available skus.

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
* **dataDestinationType**: 'ManagedDisk' | 'StorageAccount' (ReadOnly): Data Destination Type.
* **filesErroredOut**: int (ReadOnly): Number of files which could not be copied
* **filesProcessed**: int (ReadOnly): Number of files processed by the job as of now.
* **invalidFileBytesUploaded**: int (ReadOnly): Total amount of data not adhering to azure naming conventions which were processed by automatic renaming
* **invalidFilesProcessed**: int (ReadOnly): Number of files not adhering to azure naming conventions which were processed by automatic renaming
* **renamedContainerCount**: int (ReadOnly): Number of folders not adhering to azure naming conventions which were processed by automatic renaming
* **storageAccountName**: string (ReadOnly): Name of the storage account where the data needs to be uploaded.
* **totalBytesToProcess**: int (ReadOnly): Total amount of data to be processed by the job.
* **totalFilesToProcess**: int (ReadOnly): Total number of files to be processed by the job.

## DataBoxDiskCopyProgress
### Properties
* **bytesCopied**: int (ReadOnly): Bytes copied during the copy of disk.
* **percentComplete**: int (ReadOnly): Indicates the percentage completed for the copy of the disk.
* **serialNumber**: string (ReadOnly): The serial number of the disk
* **status**: 'Completed' | 'CompletedWithErrors' | 'DeviceFormatted' | 'DeviceMetadataModified' | 'Failed' | 'HardwareError' | 'InProgress' | 'NotReturned' | 'NotStarted' | 'StorageAccountNotAccessible' | 'UnsupportedData' (ReadOnly): The Status of the copy

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

## DcAccessSecurityCode
### Properties
* **forwardDCAccessCode**: string: Dc Access Code for dispatching from DC.
* **reverseDCAccessCode**: string: Dc Access code for dropping off at DC.

## DestinationAccountDetails
* **Discriminator**: dataDestinationType

### Base Properties
* **accountId**: string: Arm Id of the destination where the data has to be moved.
* **sharePassword**: string: Share password to be shared by all shares in SA.

### DestinationManagedDiskDetails
#### Properties
* **dataDestinationType**: 'ManagedDisk' (Required): Data Destination Type.
* **resourceGroupId**: string (Required): Destination Resource Group Id where the Compute disks should be created.
* **stagingStorageAccountId**: string (Required): Arm Id of the storage account that can be used to copy the vhd for staging.

### DestinationStorageAccountDetails
#### Properties
* **dataDestinationType**: 'StorageAccount' (Required): Data Destination Type.
* **storageAccountId**: string (Required): Destination Storage Account Arm Id.


## DestinationToServiceLocationMap
### Properties
* **destinationLocation**: string (ReadOnly): Location of the destination.
* **serviceLocation**: string (ReadOnly): Location of the service.

## DiskSecret
### Properties
* **bitLockerKey**: string (ReadOnly): Bit Locker key of the disk which can be used to unlock the disk to copy data.
* **diskSerialNumber**: string (ReadOnly): Serial number of the assigned disk.

## Error
### Properties
* **code**: string (ReadOnly): Error code that can be used to programmatically identify the error.
* **message**: string (ReadOnly): Describes the error in detail and provides debugging information.

## JobDeliveryInfo
### Properties
* **scheduledDateTime**: string: Scheduled date time.

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
* **devicePassword**: string: Set Device password for unlocking Databox
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
* **devicePassword**: string: Set Device password for unlocking Databox Heavy
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
* **deliveryInfo**: [JobDeliveryInfo](#jobdeliveryinfo): Delivery Info of Job.
* **deliveryType**: 'NonScheduled' | 'Scheduled': Delivery type of Job.
* **details**: [JobDetails](#jobdetails): Details of a job run. This field will only be sent for expand details filter.
* **error**: [Error](#error) (ReadOnly): Top level error for the job.
* **isCancellable**: bool (ReadOnly): Describes whether the job is cancellable or not.
* **isCancellableWithoutFee**: bool (ReadOnly): Flag to indicate cancellation of scheduled job.
* **isDeletable**: bool (ReadOnly): Describes whether the job is deletable or not.
* **isShippingAddressEditable**: bool (ReadOnly): Describes whether the shipping address is editable or not.
* **startTime**: string (ReadOnly): Time at which the job was started in UTC ISO 8601 format.
* **status**: 'Aborted' | 'AtAzureDC' | 'Cancelled' | 'Completed' | 'CompletedWithErrors' | 'CompletedWithWarnings' | 'DataCopy' | 'Delivered' | 'DeviceOrdered' | 'DevicePrepared' | 'Dispatched' | 'Failed_IssueDetectedAtAzureDC' | 'Failed_IssueReportedAtCustomer' | 'PickedUp' | 'ReadyToDispatchFromAzureDC' | 'ReadyToReceiveAtAzureDC' (ReadOnly): Name of the stage which is in progress.

## JobSecrets
* **Discriminator**: jobSecretsType

### Base Properties
* **dcAccessSecurityCode**: [DcAccessSecurityCode](#dcaccesssecuritycode): Dc Access Security Code for Customer Managed Shipping

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
* **cabinetPodSecrets**: [DataBoxHeavySecret](#databoxheavysecret)[] (ReadOnly): Contains the list of secret objects for a databox heavy job.
* **jobSecretsType**: 'DataBoxHeavy' (Required): Used to indicate what type of job secrets object.


## JobStages
### Properties
* **displayName**: string (ReadOnly): Display name of the job stage.
* **errorDetails**: [JobErrorDetails](#joberrordetails)[] (ReadOnly): Error details for the stage.
* **jobStageDetails**: any (ReadOnly): Job Stage Details
* **stageName**: 'Aborted' | 'AtAzureDC' | 'Cancelled' | 'Completed' | 'CompletedWithErrors' | 'CompletedWithWarnings' | 'DataCopy' | 'Delivered' | 'DeviceOrdered' | 'DevicePrepared' | 'Dispatched' | 'Failed_IssueDetectedAtAzureDC' | 'Failed_IssueReportedAtCustomer' | 'PickedUp' | 'ReadyToDispatchFromAzureDC' | 'ReadyToReceiveAtAzureDC' (ReadOnly): Name of the job stage.
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
* **preferredDataCenterRegion**: string[]: Preferred Data Center Region.
* **transportPreferences**: [TransportPreferences](#transportpreferences): Preferences related to the shipment logistics of the sku.

## RegionConfigurationRequest
### Properties
* **scheduleAvailabilityRequest**: [ScheduleAvailabilityRequest](#scheduleavailabilityrequest): Request body to get the availability for scheduling orders.
* **transportAvailabilityRequest**: [TransportAvailabilityRequest](#transportavailabilityrequest): Request body to get the transport availability for given sku.

## RegionConfigurationResponse
### Properties
* **scheduleAvailabilityResponse**: [ScheduleAvailabilityResponse](#scheduleavailabilityresponse) (ReadOnly): Schedule availability for given sku in a region.
* **transportAvailabilityResponse**: [TransportAvailabilityResponse](#transportavailabilityresponse) (ReadOnly): Transport options available for given sku in a region.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScheduleAvailabilityRequest
* **Discriminator**: skuName

### Base Properties
* **storageLocation**: string (Required): Location for data transfer. 
For locations check: https://management.azure.com/subscriptions/SUBSCRIPTIONID/locations?api-version=2018-01-01

### DataBoxScheduleAvailabilityRequest
#### Properties
* **skuName**: 'DataBox' (Required): Sku Name for which the order is to be scheduled.

### DiskScheduleAvailabilityRequest
#### Properties
* **expectedDataSizeInTeraBytes**: int (Required): The expected size of the data, which needs to be transferred in this job, in terabytes.
* **skuName**: 'DataBoxDisk' (Required): Sku Name for which the order is to be scheduled.

### HeavyScheduleAvailabilityRequest
#### Properties
* **skuName**: 'DataBoxHeavy' (Required): Sku Name for which the order is to be scheduled.


## ScheduleAvailabilityResponse
### Properties
* **availableDates**: string[] (ReadOnly): List of dates available to schedule

## ShareCredentialDetails
### Properties
* **password**: string (ReadOnly): Password for the share.
* **shareName**: string (ReadOnly): Name of the share.
* **shareType**: 'AzureFile' | 'BlockBlob' | 'HCS' | 'ManagedDisk' | 'PageBlob' | 'UnknownType' (ReadOnly): Type of the share.
* **supportedAccessProtocols**: ('NFS' | 'SMB')[] (ReadOnly): Access protocols supported on the device.
* **userName**: string (ReadOnly): User name for the share.

## ShipmentPickUpRequest
### Properties
* **endTime**: string (Required): Maximum date before which the pick up should commence, this must be in local time of pick up area.
* **shipmentLocation**: string (Required): Shipment Location in the pickup place. Eg.front desk
* **startTime**: string (Required): Minimum date after which the pick up should commence, this must be in local time of pick up area.

## ShipmentPickUpResponse
### Properties
* **confirmationNumber**: string (ReadOnly): Confirmation number for the pick up request.
* **readyByTime**: string (ReadOnly): Time by which shipment should be ready for pick up, this is in local time of pick up area.

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

## SkuCapacity
### Properties
* **maximum**: string (ReadOnly): Maximum capacity in TB.
* **usable**: string (ReadOnly): Usable capacity in TB.

## SkuCost
### Properties
* **meterId**: string (ReadOnly): Meter id of the Sku.
* **meterType**: string (ReadOnly): The type of the meter.

## SkuInformation
### Properties
* **enabled**: bool (ReadOnly): The sku is enabled or not.
* **properties**: [SkuProperties](#skuproperties) (ReadOnly): Properties of the sku.
* **sku**: [Sku](#sku) (ReadOnly): The Sku.

## SkuProperties
### Properties
* **apiVersions**: string[] (ReadOnly): Api versions that support this Sku.
* **capacity**: [SkuCapacity](#skucapacity) (ReadOnly): Capacity of the Sku.
* **costs**: [SkuCost](#skucost)[] (ReadOnly): Cost of the Sku.
* **destinationToServiceLocationMap**: [DestinationToServiceLocationMap](#destinationtoservicelocationmap)[] (ReadOnly): The map of destination location to service location.
* **disabledReason**: 'Country' | 'Feature' | 'NoSubscriptionInfo' | 'None' | 'OfferType' | 'Region' (ReadOnly): Reason why the Sku is disabled.
* **disabledReasonMessage**: string (ReadOnly): Message for why the Sku is disabled.
* **requiredFeature**: string (ReadOnly): Required feature to access the sku.

## TransportAvailabilityDetails
### Properties
* **shipmentType**: 'CustomerManaged' | 'MicrosoftManaged' (ReadOnly): Transport Shipment Type supported for given region.

## TransportAvailabilityRequest
### Properties
* **skuName**: 'DataBox' | 'DataBoxDisk' | 'DataBoxHeavy': Type of the device.

## TransportAvailabilityResponse
### Properties
* **transportAvailabilityDetails**: [TransportAvailabilityDetails](#transportavailabilitydetails)[] (ReadOnly): List of transport availability details for given region

## TransportPreferences
### Properties
* **preferredShipmentType**: 'CustomerManaged' | 'MicrosoftManaged' (Required): Indicates Shipment Logistics type that the customer preferred.

## UnencryptedCredentials
### Properties
* **jobName**: string (ReadOnly): Name of the job.
* **jobSecrets**: [JobSecrets](#jobsecrets) (ReadOnly): Secrets related to this job.

## UnencryptedCredentialsList
### Properties
* **nextLink**: string: Link for the next set of unencrypted credentials.
* **value**: [UnencryptedCredentials](#unencryptedcredentials)[]: List of unencrypted credentials.

## ValidateAddress
### Properties
* **deviceType**: 'DataBox' | 'DataBoxDisk' | 'DataBoxHeavy' (Required): Device type to be used for the job.
* **shippingAddress**: [ShippingAddress](#shippingaddress) (Required): Shipping address of the customer.
* **transportPreferences**: [TransportPreferences](#transportpreferences): Preferences related to the shipment logistics of the sku.
* **validationType**: 'ValidateAddress' | 'ValidateCreateOrderLimit' | 'ValidateDataDestinationDetails' | 'ValidatePreferences' | 'ValidateSkuAvailability' | 'ValidateSubscriptionIsAllowedToCreateJob' (Required): Identifies the type of validation request.

## ValidationInputRequest
* **Discriminator**: validationType

### Base Properties

### ValidateAddress
#### Properties
* **deviceType**: 'DataBox' | 'DataBoxDisk' | 'DataBoxHeavy' (Required): Device type to be used for the job.
* **shippingAddress**: [ShippingAddress](#shippingaddress) (Required): Shipping address of the customer.
* **transportPreferences**: [TransportPreferences](#transportpreferences): Preferences related to the shipment logistics of the sku.
* **validationType**: 'ValidateAddress' (Required): Identifies the type of validation request.

### CreateOrderLimitForSubscriptionValidationRequest
#### Properties
* **deviceType**: 'DataBox' | 'DataBoxDisk' | 'DataBoxHeavy' (Required): Device type to be used for the job.
* **validationType**: 'ValidateCreateOrderLimit' (Required): Identifies the type of validation request.

### DataDestinationDetailsValidationRequest
#### Properties
* **destinationAccountDetails**: [DestinationAccountDetails](#destinationaccountdetails)[] (Required): Destination account details list.
* **location**: string (Required): Location of stamp or geo.
* **validationType**: 'ValidateDataDestinationDetails' (Required): Identifies the type of validation request.

### PreferencesValidationRequest
#### Properties
* **deviceType**: 'DataBox' | 'DataBoxDisk' | 'DataBoxHeavy' (Required): Device type to be used for the job.
* **preference**: [Preferences](#preferences): Preference requested with respect to transport type and data center
* **validationType**: 'ValidatePreferences' (Required): Identifies the type of validation request.

### SkuAvailabilityValidationRequest
#### Properties
* **country**: string (Required): ISO country code. Country for hardware shipment. For codes check: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
* **deviceType**: 'DataBox' | 'DataBoxDisk' | 'DataBoxHeavy' (Required): Device type to be used for the job.
* **location**: string (Required): Location for data transfer. For locations check: https://management.azure.com/subscriptions/SUBSCRIPTIONID/locations?api-version=2018-01-01
* **transferType**: 'ImportToAzure' (Required): Type of the transfer.
* **validationType**: 'ValidateSkuAvailability' (Required): Identifies the type of validation request.

### SubscriptionIsAllowedToCreateJobValidationRequest
#### Properties
* **validationType**: 'ValidateSubscriptionIsAllowedToCreateJob' (Required): Identifies the type of validation request.


## ValidationInputResponse
* **Discriminator**: validationType

### Base Properties
* **error**: [Error](#error) (ReadOnly): Error code and message of validation response.

### AddressValidationProperties
#### Properties
* **alternateAddresses**: [ShippingAddress](#shippingaddress)[] (ReadOnly): List of alternate addresses.
* **validationStatus**: 'Ambiguous' | 'Invalid' | 'Valid' (ReadOnly): The address validation status.
* **validationType**: 'ValidateAddress' (Required): Identifies the type of validation response.

### CreateOrderLimitForSubscriptionValidationResponseProperties
#### Properties
* **status**: 'Invalid' | 'Skipped' | 'Valid' (ReadOnly): Create order limit validation status.
* **validationType**: 'ValidateCreateOrderLimit' (Required): Identifies the type of validation response.

### DataDestinationDetailsValidationResponseProperties
#### Properties
* **status**: 'Invalid' | 'Skipped' | 'Valid' (ReadOnly): Data destination details validation status.
* **validationType**: 'ValidateDataDestinationDetails' (Required): Identifies the type of validation response.

### PreferencesValidationResponseProperties
#### Properties
* **status**: 'Invalid' | 'Skipped' | 'Valid' (ReadOnly): Validation status of requested data center and transport.
* **validationType**: 'ValidatePreferences' (Required): Identifies the type of validation response.

### SkuAvailabilityValidationResponseProperties
#### Properties
* **status**: 'Invalid' | 'Skipped' | 'Valid' (ReadOnly): Sku availability validation status.
* **validationType**: 'ValidateSkuAvailability' (Required): Identifies the type of validation response.

### SubscriptionIsAllowedToCreateJobValidationResponseProperties
#### Properties
* **status**: 'Invalid' | 'Skipped' | 'Valid' (ReadOnly): Validation status of subscription permission to create job.
* **validationType**: 'ValidateSubscriptionIsAllowedToCreateJob' (Required): Identifies the type of validation response.


## ValidationRequest
* **Discriminator**: validationCategory

### Base Properties
* **individualRequestDetails**: [ValidationInputRequest](#validationinputrequest)[] (Required): List of request details contain validationType and its request as key and value respectively.

### CreateJobValidations
#### Properties
* **validationCategory**: 'JobCreationValidation' (Required): Identify the nature of validation.


## ValidationResponse
### Properties
* **properties**: [ValidationResponseProperties](#validationresponseproperties) (ReadOnly): Properties of pre job creation validation response.

## ValidationResponseProperties
### Properties
* **individualResponseDetails**: [ValidationInputResponse](#validationinputresponse)[] (ReadOnly): List of response details contain validationType and its response as key and value respectively.
* **status**: 'AllValidToProceed' | 'CertainInputValidationsSkipped' | 'InputsRevisitRequired' (ReadOnly): Overall validation status.

