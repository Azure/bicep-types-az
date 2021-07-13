# Microsoft.EdgeOrder @ 2020-12-01-preview

## Resource Microsoft.EdgeOrder/addresses@2020-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AddressProperties](#addressproperties) (Required): Address Properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.EdgeOrder/addresses' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EdgeOrder/orderItems@2020-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OrderItemProperties](#orderitemproperties) (Required): Represents order item details.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.EdgeOrder/orderItems' (ReadOnly, DeployTimeConstant): The resource type

## AddressProperties
### Properties
* **contactDetails**: [ContactDetails](#contactdetails) (Required): Contact Details.
* **shippingAddress**: [ShippingAddress](#shippingaddress): Shipping address where customer wishes to receive the device.

## ContactDetails
### Properties
* **contactName**: string (Required): Contact name of the person.
* **emailList**: string[] (Required): List of Email-ids to be notified about job progress.
* **mobile**: string: Mobile number of the contact person.
* **phone**: string (Required): Phone number of the contact person.
* **phoneExtension**: string: Phone extension number of the contact person.

## ShippingAddress
### Properties
* **addressType**: 'Commercial' | 'None' | 'Residential': Type of address.
* **city**: string: Name of the City.
* **companyName**: string: Name of the company.
* **country**: string (Required): Name of the Country.
* **postalCode**: string: Postal code.
* **stateOrProvince**: string: Name of the State or Province.
* **streetAddress1**: string (Required): Street Address line 1.
* **streetAddress2**: string: Street Address line 2.
* **streetAddress3**: string: Street Address line 3.
* **zipExtendedCode**: string: Extended Zip Code.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OrderItemProperties
### Properties
* **addressDetails**: [AddressDetails](#addressdetails) (Required): Address details for an order item.
* **orderId**: string (Required): Id of the order to which order item belongs to
* **orderItemDetails**: [OrderItemDetails](#orderitemdetails) (Required): Order item details
* **startTime**: string (ReadOnly): Start time of order item

## AddressDetails
### Properties
* **forwardAddress**: [AddressProperties](#addressproperties) (Required): Address Properties
* **returnAddress**: [AddressProperties](#addressproperties) (ReadOnly): Address Properties

## OrderItemDetails
### Properties
* **cancellationReason**: string (ReadOnly): Cancellation reason.
* **cancellationStatus**: 'Cancellable' | 'CancellableWithFee' | 'NotCancellable' (ReadOnly): Describes whether the orderItem is cancellable or not.
* **currentStage**: [StageDetails](#stagedetails) (ReadOnly): Resource stage details.
* **deletionStatus**: 'Allowed' | 'NotAllowed' (ReadOnly): Describes whether the order item is deletable or not.
* **error**: [ErrorDetail](#errordetail) (ReadOnly): The error detail.
* **forwardShippingDetails**: [ShippingDetails](#shippingdetails) (ReadOnly): Package shipping details
* **managementRpDetails**: any (ReadOnly): Any object
* **notificationEmailList**: string[]: Additional notification email list
* **orderItemStageHistory**: [StageDetails](#stagedetails)[] (ReadOnly): Order item status history
* **orderItemType**: 'Purchase' | 'Rental' (Required): Order item type.
* **preferences**: [Preferences](#preferences): Preferences related to the order
* **productDetails**: [ProductDetails](#productdetails) (Required): Represents product details
* **returnReason**: string (ReadOnly): Return reason.
* **returnStatus**: 'NotReturnable' | 'Returnable' | 'ReturnableWithFee' (ReadOnly): Describes whether the orderItem is returnable or not.
* **reverseShippingDetails**: [ShippingDetails](#shippingdetails) (ReadOnly): Package shipping details

## StageDetails
### Properties
* **displayName**: string (ReadOnly): Display name of the resource stage.
* **stageName**: 'Cancelled' | 'Confirmed' | 'Delivered' | 'InReview' | 'InUse' | 'Placed' | 'ReadyToShip' | 'ReturnCompleted' | 'ReturnInitiated' | 'ReturnPickedUp' | 'ReturnedToMicrosoft' | 'Shipped' (ReadOnly): Stage name
* **stageStatus**: 'Cancelled' | 'Cancelling' | 'Failed' | 'InProgress' | 'None' | 'Succeeded' (ReadOnly): Stage status.
* **startTime**: string (ReadOnly): Stage start time

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): Any object
* **type**: string (ReadOnly): The additional info type.

## ShippingDetails
### Properties
* **carrierDisplayName**: string (ReadOnly): Carrier Name for display purpose. Not to be used for any processing.
* **carrierName**: string (ReadOnly): Name of the carrier.
* **trackingId**: string (ReadOnly): TrackingId of the package
* **trackingUrl**: string (ReadOnly): TrackingUrl of the package.

## Preferences
### Properties
* **encryptionPreferences**: [EncryptionPreferences](#encryptionpreferences): Preferences related to the double encryption
* **managementResourcePreferences**: [ManagementResourcePreferences](#managementresourcepreferences): Management resource preference to link device
* **notificationPreferences**: [NotificationPreference](#notificationpreference)[]: Notification preferences.
* **transportPreferences**: [TransportPreferences](#transportpreferences): Preferences related to the shipment logistics of the sku

## EncryptionPreferences
### Properties
* **doubleEncryptionStatus**: 'Disabled' | 'Enabled': Defines secondary layer of software-based encryption enablement.

## ManagementResourcePreferences
### Properties
* **preferredManagementResourceId**: string: Customer preferred Management resource ARM ID

## NotificationPreference
### Properties
* **sendNotification**: bool (Required): Notification is required or not.
* **stageName**: 'Delivered' | 'Shipped' (Required): Name of the stage.

## TransportPreferences
### Properties
* **preferredShipmentType**: 'CustomerManaged' | 'MicrosoftManaged' (Required): Indicates Shipment Logistics type that the customer preferred.

## ProductDetails
### Properties
* **count**: int: Quantity of the product
* **deviceDetails**: [DeviceDetails](#devicedetails)[] (ReadOnly): list of device details
* **displayInfo**: [DisplayInfo](#displayinfo): Describes product display information
* **hierarchyInformation**: [HierarchyInformation](#hierarchyinformation) (Required): Holds details about product hierarchy information

## DeviceDetails
### Properties
* **managementResourceId**: string (ReadOnly): Management Resource Id
* **serialNumber**: string (ReadOnly): device serial number

## DisplayInfo
### Properties
* **configurationDisplayName**: string (ReadOnly): Configuration display name
* **productFamilyDisplayName**: string (ReadOnly): Product family display name

## HierarchyInformation
### Properties
* **configurationName**: string: Represents configuration name that uniquely identifies configuration
* **productFamilyName**: string: Represents product family name that uniquely identifies product family
* **productLineName**: string: Represents product line name that uniquely identifies product line
* **productName**: string: Represents product name that uniquely identifies product

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

