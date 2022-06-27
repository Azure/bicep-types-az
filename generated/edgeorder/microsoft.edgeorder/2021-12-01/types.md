# Microsoft.EdgeOrder @ 2021-12-01

## Resource Microsoft.EdgeOrder/addresses@2021-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AddressProperties](#addressproperties) (Required): Properties of an address.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Represents resource creation and update time
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.EdgeOrder/addresses' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EdgeOrder/locations/orders@2021-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OrderProperties](#orderproperties) (ReadOnly): Order properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Represents resource creation and update time
* **type**: 'Microsoft.EdgeOrder/locations/orders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EdgeOrder/orderItems@2021-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OrderItemProperties](#orderitemproperties) (Required): Order item properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Represents resource creation and update time
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.EdgeOrder/orderItems' (ReadOnly, DeployTimeConstant): The resource type

## AddressDetails
### Properties
* **forwardAddress**: [AddressProperties](#addressproperties) (Required): Customer address and contact details. It should be address resource
* **returnAddress**: [AddressProperties](#addressproperties) (ReadOnly): Return shipping address

## AddressProperties
### Properties
* **addressValidationStatus**: 'Ambiguous' | 'Invalid' | 'Valid' | string (ReadOnly): Status of address validation
* **contactDetails**: [ContactDetails](#contactdetails) (Required): Contact details for the address
* **shippingAddress**: [ShippingAddress](#shippingaddress): Shipping details for the address

## ContactDetails
### Properties
* **contactName**: string (Required): Contact name of the person.
* **emailList**: string[] (Required): List of Email-ids to be notified about job progress.
* **mobile**: string: Mobile number of the contact person.
* **phone**: string (Required): Phone number of the contact person.
* **phoneExtension**: string: Phone extension number of the contact person.

## DeviceDetails
### Properties
* **managementResourceId**: string (ReadOnly): Management Resource Id
* **managementResourceTenantId**: string (ReadOnly): Management Resource Tenant ID
* **serialNumber**: string (ReadOnly): device serial number

## DisplayInfo
### Properties
* **configurationDisplayName**: string (ReadOnly): Configuration display name
* **productFamilyDisplayName**: string (ReadOnly): Product family display name

## EncryptionPreferences
### Properties
* **doubleEncryptionStatus**: 'Disabled' | 'Enabled' | string: Double encryption status as entered by the customer. It is compulsory to give this parameter if the 'Deny' or 'Disabled' policy is configured.

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): The additional info.
* **type**: string (ReadOnly): The additional info type.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## ForwardShippingDetails
### Properties
* **carrierDisplayName**: string (ReadOnly): Carrier Name for display purpose. Not to be used for any processing.
* **carrierName**: string (ReadOnly): Name of the carrier.
* **trackingId**: string (ReadOnly): TrackingId of the package
* **trackingUrl**: string (ReadOnly): TrackingUrl of the package.

## HierarchyInformation
### Properties
* **configurationName**: string: Represents configuration name that uniquely identifies configuration
* **productFamilyName**: string: Represents product family name that uniquely identifies product family
* **productLineName**: string: Represents product line name that uniquely identifies product line
* **productName**: string: Represents product name that uniquely identifies product

## ManagementResourcePreferences
### Properties
* **preferredManagementResourceId**: string: Customer preferred Management resource ARM ID

## NotificationPreference
### Properties
* **sendNotification**: bool (Required): Notification is required or not.
* **stageName**: 'Delivered' | 'Shipped' | string (Required): Name of the stage.

## OrderItemDetails
### Properties
* **cancellationReason**: string (ReadOnly): Cancellation reason.
* **cancellationStatus**: 'Cancellable' | 'CancellableWithFee' | 'NotCancellable' | string (ReadOnly): Describes whether the order item is cancellable or not.
* **currentStage**: [StageDetails](#stagedetails) (ReadOnly): Current Order item Status
* **deletionStatus**: 'Allowed' | 'NotAllowed' | string (ReadOnly): Describes whether the order item is deletable or not.
* **error**: [ErrorDetail](#errordetail) (ReadOnly): Top level error for the job.
* **forwardShippingDetails**: [ForwardShippingDetails](#forwardshippingdetails) (ReadOnly): Forward Package Shipping details
* **managementRpDetails**: [ResourceProviderDetails](#resourceproviderdetails) (ReadOnly): Parent RP details - this returns only the first or default parent RP from the entire list
* **managementRpDetailsList**: [ResourceProviderDetails](#resourceproviderdetails)[] (ReadOnly): List of parent RP details supported for configuration.
* **notificationEmailList**: string[]: Additional notification email list
* **orderItemStageHistory**: [StageDetails](#stagedetails)[] (ReadOnly): Order item status history
* **orderItemType**: 'Purchase' | 'Rental' | string (Required): Order item type.
* **preferences**: [Preferences](#preferences): Customer notification Preferences
* **productDetails**: [ProductDetails](#productdetails) (Required): Unique identifier for configuration.
* **returnReason**: string (ReadOnly): Return reason.
* **returnStatus**: 'NotReturnable' | 'Returnable' | 'ReturnableWithFee' | string (ReadOnly): Describes whether the order item is returnable or not.
* **reverseShippingDetails**: [ReverseShippingDetails](#reverseshippingdetails) (ReadOnly): Reverse Package Shipping details

## OrderItemProperties
### Properties
* **addressDetails**: [AddressDetails](#addressdetails) (Required): Represents shipping and return address for order item
* **orderId**: string (Required): Id of the order to which order item belongs to
* **orderItemDetails**: [OrderItemDetails](#orderitemdetails) (Required): Represents order item details.
* **startTime**: string (ReadOnly): Start time of order item

## OrderProperties
### Properties
* **currentStage**: [StageDetails](#stagedetails) (ReadOnly): Order current status.
* **orderItemIds**: string[] (ReadOnly): List of order item ARM Ids which are part of an order.
* **orderStageHistory**: [StageDetails](#stagedetails)[] (ReadOnly): Order status history.

## Preferences
### Properties
* **encryptionPreferences**: [EncryptionPreferences](#encryptionpreferences): Preferences related to the Encryption.
* **managementResourcePreferences**: [ManagementResourcePreferences](#managementresourcepreferences): Preferences related to the Management resource.
* **notificationPreferences**: [NotificationPreference](#notificationpreference)[]: Notification preferences.
* **transportPreferences**: [TransportPreferences](#transportpreferences): Preferences related to the shipment logistics of the order.

## ProductDetails
### Properties
* **count**: int (ReadOnly): Quantity of the product
* **deviceDetails**: [DeviceDetails](#devicedetails)[] (ReadOnly): list of device details
* **displayInfo**: [DisplayInfo](#displayinfo): Display details of the product
* **hierarchyInformation**: [HierarchyInformation](#hierarchyinformation) (Required): Hierarchy of the product which uniquely identifies the product
* **productDoubleEncryptionStatus**: 'Disabled' | 'Enabled' | string (ReadOnly): Double encryption status of the configuration. Read-only field.

## ResourceProviderDetails
### Properties
* **resourceProviderNamespace**: string (ReadOnly): Resource provider namespace

## ReverseShippingDetails
### Properties
* **carrierDisplayName**: string (ReadOnly): Carrier Name for display purpose. Not to be used for any processing.
* **carrierName**: string (ReadOnly): Name of the carrier.
* **sasKeyForLabel**: string (ReadOnly): SAS key to download the reverse shipment label of the package.
* **trackingId**: string (ReadOnly): TrackingId of the package
* **trackingUrl**: string (ReadOnly): TrackingUrl of the package.

## ShippingAddress
### Properties
* **addressType**: 'Commercial' | 'None' | 'Residential' | string: Type of address.
* **city**: string: Name of the City.
* **companyName**: string: Name of the company.
* **country**: string (Required): Name of the Country.
* **postalCode**: string: Postal code.
* **stateOrProvince**: string: Name of the State or Province.
* **streetAddress1**: string (Required): Street Address line 1.
* **streetAddress2**: string: Street Address line 2.
* **streetAddress3**: string: Street Address line 3.
* **zipExtendedCode**: string: Extended Zip Code.

## StageDetails
### Properties
* **displayName**: string (ReadOnly): Display name of the resource stage.
* **stageName**: 'Cancelled' | 'Confirmed' | 'Delivered' | 'InReview' | 'InUse' | 'Placed' | 'ReadyToShip' | 'ReturnCompleted' | 'ReturnInitiated' | 'ReturnPickedUp' | 'ReturnedToMicrosoft' | 'Shipped' | string (ReadOnly): Stage name
* **stageStatus**: 'Cancelled' | 'Cancelling' | 'Failed' | 'InProgress' | 'None' | 'Succeeded' | string (ReadOnly): Stage status.
* **startTime**: string (ReadOnly): Stage start time

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TransportPreferences
### Properties
* **preferredShipmentType**: 'CustomerManaged' | 'MicrosoftManaged' | string (Required): Indicates Shipment Logistics type that the customer preferred.

