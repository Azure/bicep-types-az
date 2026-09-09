# Microsoft.EdgeOrderPartner @ 2020-12-01-preview

## Function manageInventoryMetadata (Microsoft.EdgeOrderPartner/locations/productFamilies/inventories@2020-12-01-preview)
* **Resource**: Microsoft.EdgeOrderPartner/locations/productFamilies/inventories
* **ApiVersion**: 2020-12-01-preview
* **Input**: [ManageInventoryMetadataRequest](#manageinventorymetadatarequest)
* **Output**: any

## Function manageLink (Microsoft.EdgeOrderPartner/locations/productFamilies/inventories@2020-12-01-preview)
* **Resource**: Microsoft.EdgeOrderPartner/locations/productFamilies/inventories
* **ApiVersion**: 2020-12-01-preview
* **Input**: [ManageLinkRequest](#managelinkrequest)
* **Output**: any

## Function searchInventories (Microsoft.EdgeOrderPartner@2020-12-01-preview)
* **Resource**: Microsoft.EdgeOrderPartner
* **ApiVersion**: 2020-12-01-preview
* **Input**: [SearchInventoriesRequest](#searchinventoriesrequest)
* **Output**: [PartnerInventoryList](#partnerinventorylist)

## AdditionalInventoryDetails
### Properties
* **additionalData**: [AdditionalInventoryDetailsAdditionalData](#additionalinventorydetailsadditionaldata) (ReadOnly): Additional Data

## AdditionalInventoryDetailsAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AdditionalOrderItemDetails
### Properties
* **status**: [StageDetails](#stagedetails) (ReadOnly): Order item status
* **subscription**: [SubscriptionDetails](#subscriptiondetails) (ReadOnly): Subscription details

## BillingDetails
### Properties
* **billingType**: string (ReadOnly): Billing type for the inventory
* **status**: string (ReadOnly): Billing status for the inventory

## ConfigurationData
### Properties
* **configurationIdentifier**: string (ReadOnly): Configuration identifier of inventory
* **configurationIdentifierOnDevice**: string (ReadOnly): Configuration identifier on device - this is used in case of any mismatch
between actual configuration on inventory and configuration stored in service
* **familyIdentifier**: string (ReadOnly): Family identifier of inventory
* **productIdentifier**: string (ReadOnly): Product identifier of inventory
* **productLineIdentifier**: string (ReadOnly): Product Line identifier of inventory

## ConfigurationDetails
### Properties
* **specifications**: [SpecificationDetails](#specificationdetails)[] (ReadOnly): Collection of specification details about the inventory

## ConfigurationOnDevice
### Properties
* **configurationIdentifier**: string (Required): Configuration identifier on device

## InventoryAdditionalDetails
### Properties
* **billing**: [BillingDetails](#billingdetails) (ReadOnly): Represents additional details about billing for the inventory
* **configuration**: [ConfigurationDetails](#configurationdetails) (ReadOnly): Represents additional details about the configuration
* **inventory**: [AdditionalInventoryDetails](#additionalinventorydetails) (ReadOnly): Represents additional data about the inventory
* **inventoryMetadata**: string (ReadOnly): Contains inventory metadata
* **inventorySecrets**: [InventoryAdditionalDetailsInventorySecrets](#inventoryadditionaldetailsinventorysecrets) (ReadOnly): Represents secrets on the inventory
* **orderItem**: [AdditionalOrderItemDetails](#additionalorderitemdetails): Represents additional details about the order item

## InventoryAdditionalDetailsInventorySecrets
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InventoryData
### Properties
* **location**: string (ReadOnly): Inventory location
* **registrationAllowed**: bool (ReadOnly): Boolean flag to indicate if registration is allowed
* **status**: string (ReadOnly): Inventory status

## InventoryProperties
### Properties
* **configuration**: [ConfigurationData](#configurationdata) (ReadOnly): Represents basic configuration data.
* **details**: [InventoryAdditionalDetails](#inventoryadditionaldetails) (ReadOnly): Represents additional details of inventory
* **inventory**: [InventoryData](#inventorydata) (ReadOnly): Represents basic inventory data.
* **location**: string (ReadOnly): Location of inventory
* **managementResource**: [ManagementResourceData](#managementresourcedata) (ReadOnly): Represents management resource data associated with inventory.
* **orderItem**: [OrderItemData](#orderitemdata) (ReadOnly): Represents basic order item data.
* **serialNumber**: string (ReadOnly): Serial number of the device.

## ManageInventoryMetadataRequest
### Properties
* **configurationOnDevice**: [ConfigurationOnDevice](#configurationondevice): Inventory configuration to be updated
* **inventoryMetadata**: string (Required): Inventory metadata to be updated

## ManageLinkRequest
### Properties
* **managementResourceArmId**: string (Required): Arm Id of the management resource to which inventory is to be linked
For unlink operation, enter empty string
* **operation**: 'Link' | 'Relink' | 'Unlink' (Required): Operation to be performed - Link, Unlink, Relink
* **tenantId**: string (Required): Tenant ID of management resource associated with inventory

## ManagementResourceData
### Properties
* **armId**: string (ReadOnly): Arm ID of management resource associated with inventory
* **tenantId**: string (ReadOnly): Tenant ID of management resource associated with inventory

## OrderItemData
### Properties
* **armId**: string (ReadOnly): Arm ID of order item
* **orderItemType**: 'Purchase' | 'Rental' (ReadOnly): Order item type - purchase or rental

## PartnerInventory
### Properties
* **properties**: [InventoryProperties](#inventoryproperties) (ReadOnly): Inventory properties

## PartnerInventoryList
### Properties
* **nextLink**: string: Link for the next set of partner inventories.
* **value**: [PartnerInventory](#partnerinventory)[] (ReadOnly): List of partner inventories

## SearchInventoriesRequest
### Properties
* **familyIdentifier**: string (Required): Family identifier for inventory
* **serialNumber**: string (Required): Serial number of the inventory

## SpecificationDetails
### Properties
* **name**: string (ReadOnly): Name of the specification property
* **value**: string (ReadOnly): Value of the specification property

## StageDetails
### Properties
* **displayName**: string (ReadOnly): Display name of the resource stage.
* **stageName**: 'Aborted' | 'AtAzureDC' | 'Cancelled' | 'Completed' | 'CompletedWithErrors' | 'CompletedWithWarnings' | 'Confirmed' | 'Current' | 'DataCopy' | 'Delivered' | 'DeviceOrdered' | 'DevicePrepared' | 'InReview' | 'InUse' | 'PickedUp' | 'Placed' | 'ReadyForDispatch' | 'ReadyToDispatchFromAzureDC' | 'ReadyToReceiveAtAzureDC' | 'Shipped' (ReadOnly): Stage name
* **stageStatus**: 'Cancelled' | 'Cancelling' | 'Failed' | 'InProgress' | 'None' | 'Succeeded' (ReadOnly): Stage status.
* **startTime**: string (ReadOnly): Stage start time

## SubscriptionDetails
### Properties
* **id**: string (ReadOnly): Subscription Id
* **quotaId**: string (ReadOnly): Subscription QuotaId
* **state**: string (ReadOnly): Subscription State

