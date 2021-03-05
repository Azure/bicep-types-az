# Microsoft.EdgeOrder @ 2020-12-01-preview

## Resource Microsoft.EdgeOrder/addresses@2020-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AddressProperties (Required)
* **systemData**: SystemData (ReadOnly)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.EdgeOrder/addresses' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EdgeOrder/orderCollections@2020-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: OrderCollectionProperties (Required)
* **systemData**: SystemData (ReadOnly)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.EdgeOrder/orderCollections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EdgeOrder/orders@2020-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: OrderProperties (Required)
* **systemData**: SystemData (ReadOnly)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.EdgeOrder/orders' (ReadOnly, DeployTimeConstant)

## AddressProperties
### Properties
* **contactDetails**: ContactDetails (Required)
* **shippingAddress**: ShippingAddress

## ContactDetails
### Properties
* **contactName**: string (Required)
* **mobile**: string
* **phone**: string (Required)
* **phoneExtension**: string

## ShippingAddress
### Properties
* **addressType**: 'Commercial' | 'None' | 'Residential'
* **city**: string
* **companyName**: string
* **country**: string (Required)
* **postalCode**: string
* **stateOrProvince**: string
* **streetAddress1**: string (Required)
* **streetAddress2**: string
* **streetAddress3**: string
* **zipExtendedCode**: string

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OrderCollectionProperties
### Properties
* **orderIds**: string[] (Required)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OrderProperties
### Properties
* **addressDetails**: AddressDetails (Required)
* **orderCollectionId**: string (ReadOnly)
* **orderDetails**: OrderDetails (Required)
* **startTime**: string (ReadOnly)

## AddressDetails
### Properties
* **returnAddress**: AddressProperties (ReadOnly)
* **shippingAddress**: AddressProperties (Required)

## OrderDetails
### Properties
* **cancellationReason**: string (ReadOnly)
* **cancellationStatus**: 'Cancellable' | 'CancellableWithFee' | 'NotCancellable' (ReadOnly)
* **currentStatus**: OrderStatusDetails (ReadOnly)
* **deletionStatus**: 'Allowed' | 'NotAllowed' (ReadOnly)
* **error**: CloudError (ReadOnly)
* **forwardShippingDetails**: ShippingDetails (ReadOnly)
* **managementRpDetails**: any (ReadOnly)
* **notificationEmailList**: string[]
* **orderStatusHistory**: OrderStatusDetails[] (ReadOnly)
* **orderType**: 'Purchase' | 'Rental' (Required)
* **preferences**: Preferences
* **productDetails**: ProductDetails (Required)
* **returnReason**: string (ReadOnly)
* **returnStatus**: 'NotReturnable' | 'Returnable' | 'ReturnableWithFee' (ReadOnly)
* **reverseShippingDetails**: ShippingDetails (ReadOnly)

## OrderStatusDetails
### Properties
* **lastUpdatedTime**: string
* **orderStatus**: string (ReadOnly)

## CloudError
### Properties
* **additionalInfo**: AdditionalErrorInfo[] (ReadOnly)
* **code**: string
* **details**: CloudError[] (ReadOnly)
* **message**: string
* **target**: string

## AdditionalErrorInfo
### Properties
* **info**: any
* **type**: string

## ShippingDetails
### Properties
* **carrierDisplayName**: string (ReadOnly)
* **carrierName**: string (ReadOnly)
* **trackingId**: string (ReadOnly)
* **trackingUrl**: string (ReadOnly)

## Preferences
### Properties
* **notificationPreferences**: NotificationPreference[]
* **transportPreferences**: TransportPreferences

## NotificationPreference
### Properties
* **sendNotification**: bool (Required)
* **stageName**: 'AtAzureDC' | 'DataCopy' | 'Delivered' | 'DevicePrepared' | 'Dispatched' | 'PickedUp' (Required)

## TransportPreferences
### Properties
* **preferredShipmentType**: 'CustomerManaged' | 'MicrosoftManaged' (Required)

## ProductDetails
### Properties
* **count**: int
* **deviceDetails**: DeviceDetails[] (ReadOnly)
* **hierarchyInformation**: HierarchyInformation (Required)

## DeviceDetails
### Properties
* **deviceHistory**: string[] (ReadOnly)
* **serialNumber**: string (ReadOnly)

## HierarchyInformation
### Properties
* **configurationName**: string
* **productFamilyName**: string
* **productLineName**: string
* **productName**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

