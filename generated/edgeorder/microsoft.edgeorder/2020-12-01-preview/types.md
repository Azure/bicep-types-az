# Microsoft.EdgeOrder @ 2020-12-01-preview

## Resource Microsoft.EdgeOrder/addresses@2020-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AddressProperties](#addressproperties) (Required): Address Properties
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.EdgeOrder/addresses' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EdgeOrder/orderCollections@2020-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OrderCollectionProperties](#ordercollectionproperties) (Required): Represents order collection details.
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.EdgeOrder/orderCollections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EdgeOrder/orders@2020-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OrderProperties](#orderproperties) (Required): Represents order details.
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.EdgeOrder/orders' (ReadOnly, DeployTimeConstant): The resource type

## AddressProperties
### Properties
* **contactDetails**: [ContactDetails](#contactdetails) (Required): Contact Details.
* **shippingAddress**: [ShippingAddress](#shippingaddress): Shipping address where customer wishes to receive the device.

## ContactDetails
### Properties
* **contactName**: string (Required): Contact name of the person.
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

## systemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OrderCollectionProperties
### Properties
* **orderIds**: string[] (Required): List of order ARM Ids which are part of an order collection.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OrderProperties
### Properties
* **addressDetails**: [AddressDetails](#addressdetails) (Required): Address details for an order.
* **orderCollectionId**: string (ReadOnly): Id of the order collection to which order belongs to
* **orderDetails**: [OrderDetails](#orderdetails) (Required): Order details
* **startTime**: string (ReadOnly): Start time of order

## AddressDetails
### Properties
* **returnAddress**: [AddressProperties](#addressproperties) (ReadOnly): Address Properties
* **shippingAddress**: [AddressProperties](#addressproperties) (Required): Address Properties

## OrderDetails
### Properties
* **cancellationReason**: string (ReadOnly): Cancellation reason.
* **cancellationStatus**: 'Cancellable' | 'CancellableWithFee' | 'NotCancellable' (ReadOnly): Describes whether the order is cancellable or not.
* **currentStatus**: [OrderStatusDetails](#orderstatusdetails) (ReadOnly): Order status CurrentStatus
* **deletionStatus**: 'Allowed' | 'NotAllowed' (ReadOnly): Describes whether the order is deletable or not.
* **error**: [CloudError](#clouderror) (ReadOnly):
* **forwardShippingDetails**: [ShippingDetails](#shippingdetails) (ReadOnly): Package shipping details
* **managementRpDetails**: any (ReadOnly): Management RP details
* **notificationEmailList**: string[]: Package Shipping details
* **orderStatusHistory**: [OrderStatusDetails](#orderstatusdetails)[] (ReadOnly): Order history
* **orderType**: 'Purchase' | 'Rental' (Required): Order type.
* **preferences**: [Preferences](#preferences): Preferences related to the order
* **productDetails**: [ProductDetails](#productdetails) (Required): Represents product details
* **returnReason**: string (ReadOnly): Return reason.
* **returnStatus**: 'NotReturnable' | 'Returnable' | 'ReturnableWithFee' (ReadOnly): Describes whether the order is returnable or not.
* **reverseShippingDetails**: [ShippingDetails](#shippingdetails) (ReadOnly): Package shipping details

## OrderStatusDetails
### Properties
* **lastUpdatedTime**: string: last time order was updated
* **orderStatus**: string (ReadOnly): Order status

## CloudError
### Properties
* **additionalInfo**: [AdditionalErrorInfo](#additionalerrorinfo)[] (ReadOnly):
* **code**: string:
* **details**: [CloudError](#clouderror)[] (ReadOnly):
* **message**: string:
* **target**: string:

## AdditionalErrorInfo
### Properties
* **info**: any:
* **type**: string:

## ShippingDetails
### Properties
* **carrierDisplayName**: string (ReadOnly): Carrier Name for display purpose. Not to be used for any processing.
* **carrierName**: string (ReadOnly): Name of the carrier.
* **trackingId**: string (ReadOnly): TrackingId of the package
* **trackingUrl**: string (ReadOnly): TrackingUrl of the package.

## Preferences
### Properties
* **notificationPreferences**: [NotificationPreference](#notificationpreference)[]: Notification preferences.
* **transportPreferences**: [TransportPreferences](#transportpreferences): Preferences related to the shipment logistics of the sku

## NotificationPreference
### Properties
* **sendNotification**: bool (Required): Notification is required or not.
* **stageName**: 'AtAzureDC' | 'DataCopy' | 'Delivered' | 'DevicePrepared' | 'Dispatched' | 'PickedUp' (Required): Name of the stage.

## TransportPreferences
### Properties
* **preferredShipmentType**: 'CustomerManaged' | 'MicrosoftManaged' (Required): Indicates Shipment Logistics type that the customer preferred.

## ProductDetails
### Properties
* **count**: int: Quantity of the product
* **deviceDetails**: [DeviceDetails](#devicedetails)[] (ReadOnly): list of device details
* **hierarchyInformation**: [HierarchyInformation](#hierarchyinformation) (Required): Holds details about product hierarchy information

## DeviceDetails
### Properties
* **deviceHistory**: string[] (ReadOnly): Package Shipping details
* **serialNumber**: string (ReadOnly): device serial number

## HierarchyInformation
### Properties
* **configurationName**: string: Represents configuration name that uniquely identifies configuration
* **productFamilyName**: string: Represents product family name that uniquely identifies product family
* **productLineName**: string: Represents product line name that uniquely identifies product line
* **productName**: string: Represents product name that uniquely identifies product

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

