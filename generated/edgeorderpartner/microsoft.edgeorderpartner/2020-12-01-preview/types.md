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

## ConfigurationOnDevice
### Properties
* **configurationIdentifier**: string (Required): Configuration identifier on device

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

