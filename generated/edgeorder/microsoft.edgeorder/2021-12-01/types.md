# Microsoft.EdgeOrder @ 2021-12-01

## Resource Microsoft.EdgeOrder/addresses@2021-12-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 24, pattern: "^[-\w\.]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AddressProperties](#addressproperties) (Required): Properties of an address.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Represents resource creation and update time
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.EdgeOrder/addresses' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EdgeOrder/locations/orders@2021-12-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2021-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OrderProperties](#orderproperties) (ReadOnly): Order properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Represents resource creation and update time
* **type**: 'Microsoft.EdgeOrder/locations/orders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EdgeOrder/orderItems@2021-12-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OrderItemProperties](#orderitemproperties) (Required): Order item properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Represents resource creation and update time
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.EdgeOrder/orderItems' (ReadOnly, DeployTimeConstant): The resource type

## Function cancel (Microsoft.EdgeOrder/orderItems@2021-12-01)
* **Resource**: Microsoft.EdgeOrder/orderItems
* **ApiVersion**: 2021-12-01
* **Input**: [CancellationReason](#cancellationreason)
* **Output**: any

## Function listConfigurations (Microsoft.EdgeOrder@2021-12-01)
* **Resource**: Microsoft.EdgeOrder
* **ApiVersion**: 2021-12-01
* **Input**: [ConfigurationsRequest](#configurationsrequest)
* **Output**: [Configurations](#configurations)

## Function listProductFamilies (Microsoft.EdgeOrder@2021-12-01)
* **Resource**: Microsoft.EdgeOrder
* **ApiVersion**: 2021-12-01
* **Input**: [ProductFamiliesRequest](#productfamiliesrequest)
* **Output**: [ProductFamilies](#productfamilies)

## Function productFamiliesMetadata (Microsoft.EdgeOrder@2021-12-01)
* **Resource**: Microsoft.EdgeOrder
* **ApiVersion**: 2021-12-01
* **Output**: [ProductFamiliesMetadata](#productfamiliesmetadata)

## Function return (Microsoft.EdgeOrder/orderItems@2021-12-01)
* **Resource**: Microsoft.EdgeOrder/orderItems
* **ApiVersion**: 2021-12-01
* **Input**: [ReturnOrderItemDetails](#returnorderitemdetails)
* **Output**: any

## AddressDetails
### Properties
* **forwardAddress**: [AddressProperties](#addressproperties) (Required): Customer address and contact details. It should be address resource
* **returnAddress**: [AddressProperties](#addressproperties) (ReadOnly): Return shipping address

## AddressProperties
### Properties
* **addressValidationStatus**: 'Ambiguous' | 'Invalid' | 'Valid' | string (ReadOnly): Status of address validation
* **contactDetails**: [ContactDetails](#contactdetails) (Required): Contact details for the address
* **shippingAddress**: [ShippingAddress](#shippingaddress): Shipping details for the address

## AvailabilityInformation
### Properties
* **availabilityStage**: 'Available' | 'ComingSoon' | 'Deprecated' | 'Preview' | 'Signup' | 'Unavailable' | string (ReadOnly): Current availability stage of the product. Availability stage
* **disabledReason**: 'Country' | 'Feature' | 'NoSubscriptionInfo' | 'None' | 'NotAvailable' | 'OfferType' | 'OutOfStock' | 'Region' | string (ReadOnly): Reason why the product is disabled.
* **disabledReasonMessage**: string (ReadOnly): Message for why the product is disabled.

## BillingMeterDetails
### Properties
* **frequency**: string (ReadOnly): Frequency of recurrence
* **meterDetails**: [MeterDetails](#meterdetails) (ReadOnly): Represents MeterDetails
* **meteringType**: 'Adhoc' | 'OneTime' | 'Recurring' | string (ReadOnly): Represents Metering type (eg one-time or recurrent)
* **name**: string (ReadOnly): Represents Billing type name

## CancellationReason
### Properties
* **reason**: string (Required): Reason for cancellation.

## Configuration
### Properties
* **properties**: [ConfigurationProperties](#configurationproperties) (ReadOnly): Properties of configuration

## ConfigurationFilters
### Properties
* **filterableProperty**: [FilterableProperty](#filterableproperty)[]: Filters specific to product
* **hierarchyInformation**: [HierarchyInformation](#hierarchyinformation) (Required): Product hierarchy information

## ConfigurationProperties
### Properties
* **availabilityInformation**: [AvailabilityInformation](#availabilityinformation) (ReadOnly): Availability information of the product system.
* **costInformation**: [CostInformation](#costinformation) (ReadOnly): Cost information for the product system.
* **description**: [Description](#description) (ReadOnly): Description related to the product system.
* **dimensions**: [Dimensions](#dimensions) (ReadOnly): Dimensions of the configuration
* **displayName**: string (ReadOnly): Display Name for the product system.
* **filterableProperties**: [FilterableProperty](#filterableproperty)[] (ReadOnly): list of filters supported for a product
* **hierarchyInformation**: [HierarchyInformation](#hierarchyinformation) (ReadOnly): Hierarchy information of a product.
* **imageInformation**: [ImageInformation](#imageinformation)[] (ReadOnly): Image information for the product system.
* **specifications**: [Specification](#specification)[] (ReadOnly): Specifications of the configuration

## Configurations
### Properties
* **nextLink**: string: Link for the next set of configurations.
* **value**: [Configuration](#configuration)[] (ReadOnly): List of configurations.

## ConfigurationsRequest
### Properties
* **configurationFilters**: [ConfigurationFilters](#configurationfilters)[] (Required): Holds details about product hierarchy information and filterable property.
* **customerSubscriptionDetails**: [CustomerSubscriptionDetails](#customersubscriptiondetails): Customer subscription properties. Clients can display available products to unregistered customers by explicitly passing subscription details

## ContactDetails
### Properties
* **contactName**: string (Required): Contact name of the person.
* **emailList**: string[] (Required): List of Email-ids to be notified about job progress.
* **mobile**: string: Mobile number of the contact person.
* **phone**: string (Required): Phone number of the contact person.
* **phoneExtension**: string: Phone extension number of the contact person.

## CostInformation
### Properties
* **billingInfoUrl**: string (ReadOnly): Default url to display billing information
* **billingMeterDetails**: [BillingMeterDetails](#billingmeterdetails)[] (ReadOnly): Details on the various billing aspects for the product system.

## CustomerSubscriptionDetails
### Properties
* **locationPlacementId**: string: Location placement Id of a subscription
* **quotaId**: string (Required): Quota ID of a subscription
* **registeredFeatures**: [CustomerSubscriptionRegisteredFeatures](#customersubscriptionregisteredfeatures)[]: List of registered feature flags for subscription

## CustomerSubscriptionRegisteredFeatures
### Properties
* **name**: string: Name of subscription registered feature
* **state**: string: State of subscription registered feature

## Description
### Properties
* **attributes**: string[] (ReadOnly): Attributes for the product system.
* **descriptionType**: 'Base' | string (ReadOnly): Type of description.
* **keywords**: string[] (ReadOnly): Keywords for the product system.
* **links**: [Link](#link)[] (ReadOnly): Links for the product system.
* **longDescription**: string (ReadOnly): Long description of the product system.
* **shortDescription**: string (ReadOnly): Short description of the product system.

## DeviceDetails
### Properties
* **managementResourceId**: string (ReadOnly): Management Resource Id
* **managementResourceTenantId**: string (ReadOnly): Management Resource Tenant ID
* **serialNumber**: string (ReadOnly): device serial number

## Dimensions
### Properties
* **depth**: int (ReadOnly): Depth of the device.
* **height**: int (ReadOnly): Height of the device.
* **length**: int (ReadOnly): Length of the device.
* **lengthHeightUnit**: 'CM' | 'IN' | string (ReadOnly): Unit for the dimensions of length, height and width.
* **weight**: int (ReadOnly): Weight of the device.
* **weightUnit**: 'KGS' | 'LBS' | string (ReadOnly): Unit for the dimensions of weight.
* **width**: int (ReadOnly): Width of the device.

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

## FilterableProperty
### Properties
* **supportedValues**: string[] (Required): Values to be filtered.
* **type**: 'DoubleEncryptionStatus' | 'ShipToCountries' | string (Required): Type of product filter.

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

## ImageInformation
### Properties
* **imageType**: 'BulletImage' | 'GenericImage' | 'MainImage' | string (ReadOnly): Type of the image
* **imageUrl**: string (ReadOnly): Url of the image

## Link
### Properties
* **linkType**: 'Documentation' | 'Generic' | 'KnowMore' | 'SignUp' | 'Specification' | 'TermsAndConditions' | string (ReadOnly): Type of link
* **linkUrl**: string (ReadOnly): Url of the link

## ManagementResourcePreferences
### Properties
* **preferredManagementResourceId**: string: Customer preferred Management resource ARM ID

## MeterDetails
* **Discriminator**: billingType

### Base Properties
* **chargingType**: 'PerDevice' | 'PerOrder' | string (ReadOnly): Charging type.
* **multiplier**: int (ReadOnly): Billing unit applicable for Pav2 billing

### Pav2MeterDetails
#### Properties
* **billingType**: 'Pav2' (Required): Represents billing type.
* **meterGuid**: string (ReadOnly): Validation status of requested data center and transport.

### PurchaseMeterDetails
#### Properties
* **billingType**: 'Purchase' (Required): Represents billing type.
* **productId**: string (ReadOnly): Product Id
* **skuId**: string (ReadOnly): Sku Id
* **termId**: string (ReadOnly): Term Id


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

## Product
### Properties
* **properties**: [ProductProperties](#productproperties) (ReadOnly): Properties of product

## ProductDetails
### Properties
* **count**: int (ReadOnly): Quantity of the product
* **deviceDetails**: [DeviceDetails](#devicedetails)[] (ReadOnly): list of device details
* **displayInfo**: [DisplayInfo](#displayinfo): Display details of the product
* **hierarchyInformation**: [HierarchyInformation](#hierarchyinformation) (Required): Hierarchy of the product which uniquely identifies the product
* **productDoubleEncryptionStatus**: 'Disabled' | 'Enabled' | string (ReadOnly): Double encryption status of the configuration. Read-only field.

## ProductFamilies
### Properties
* **nextLink**: string: Link for the next set of product families.
* **value**: [ProductFamily](#productfamily)[] (ReadOnly): List of product families.

## ProductFamiliesMetadata
### Properties
* **nextLink**: string (ReadOnly): Link for the next set of product families.
* **value**: [ProductFamiliesMetadataDetails](#productfamiliesmetadatadetails)[] (ReadOnly): List of product family metadata details.

## ProductFamiliesMetadataDetails
### Properties
* **properties**: [ProductFamilyProperties](#productfamilyproperties) (ReadOnly): Product family properties

## ProductFamiliesRequest
### Properties
* **customerSubscriptionDetails**: [CustomerSubscriptionDetails](#customersubscriptiondetails): Customer subscription properties. Clients can display available products to unregistered customers by explicitly passing subscription details
* **filterableProperties**: [ProductFamiliesRequestFilterableProperties](#productfamiliesrequestfilterableproperties) (Required): Dictionary of filterable properties on product family.

## ProductFamiliesRequestFilterableProperties
### Properties
### Additional Properties
* **Additional Properties Type**: [FilterableProperty](#filterableproperty)[]

## ProductFamily
### Properties
* **properties**: [ProductFamilyProperties](#productfamilyproperties) (ReadOnly): Properties of product family

## ProductFamilyProperties
### Properties
* **availabilityInformation**: [AvailabilityInformation](#availabilityinformation) (ReadOnly): Availability information of the product system.
* **costInformation**: [CostInformation](#costinformation) (ReadOnly): Cost information for the product system.
* **description**: [Description](#description) (ReadOnly): Description related to the product system.
* **displayName**: string (ReadOnly): Display Name for the product system.
* **filterableProperties**: [FilterableProperty](#filterableproperty)[] (ReadOnly): list of filters supported for a product
* **hierarchyInformation**: [HierarchyInformation](#hierarchyinformation) (ReadOnly): Hierarchy information of a product.
* **imageInformation**: [ImageInformation](#imageinformation)[] (ReadOnly): Image information for the product system.
* **productLines**: [ProductLine](#productline)[] (ReadOnly): List of product lines supported in the product family
* **resourceProviderDetails**: [ResourceProviderDetails](#resourceproviderdetails)[]: Contains details related to resource provider

## ProductLine
### Properties
* **properties**: [ProductLineProperties](#productlineproperties) (ReadOnly): Properties of product line

## ProductLineProperties
### Properties
* **availabilityInformation**: [AvailabilityInformation](#availabilityinformation) (ReadOnly): Availability information of the product system.
* **costInformation**: [CostInformation](#costinformation) (ReadOnly): Cost information for the product system.
* **description**: [Description](#description) (ReadOnly): Description related to the product system.
* **displayName**: string (ReadOnly): Display Name for the product system.
* **filterableProperties**: [FilterableProperty](#filterableproperty)[] (ReadOnly): list of filters supported for a product
* **hierarchyInformation**: [HierarchyInformation](#hierarchyinformation) (ReadOnly): Hierarchy information of a product.
* **imageInformation**: [ImageInformation](#imageinformation)[] (ReadOnly): Image information for the product system.
* **products**: [Product](#product)[] (ReadOnly): List of products in the product line

## ProductProperties
### Properties
* **availabilityInformation**: [AvailabilityInformation](#availabilityinformation) (ReadOnly): Availability information of the product system.
* **configurations**: [Configuration](#configuration)[] (ReadOnly): List of configurations for the product
* **costInformation**: [CostInformation](#costinformation) (ReadOnly): Cost information for the product system.
* **description**: [Description](#description) (ReadOnly): Description related to the product system.
* **displayName**: string (ReadOnly): Display Name for the product system.
* **filterableProperties**: [FilterableProperty](#filterableproperty)[] (ReadOnly): list of filters supported for a product
* **hierarchyInformation**: [HierarchyInformation](#hierarchyinformation) (ReadOnly): Hierarchy information of a product.
* **imageInformation**: [ImageInformation](#imageinformation)[] (ReadOnly): Image information for the product system.

## ResourceProviderDetails
### Properties
* **resourceProviderNamespace**: string (ReadOnly): Resource provider namespace

## ReturnOrderItemDetails
### Properties
* **returnAddress**: [AddressProperties](#addressproperties): customer return address.
* **returnReason**: string (Required): Return Reason.
* **serviceTag**: string: Service tag (located on the bottom-right corner of the device)
* **shippingBoxRequired**: bool: Shipping Box required

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

## Specification
### Properties
* **name**: string (ReadOnly): Name of the specification
* **value**: string (ReadOnly): Value of the specification

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

