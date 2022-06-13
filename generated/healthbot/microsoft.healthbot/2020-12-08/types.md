# Microsoft.HealthBot @ 2020-12-08

## Resource Microsoft.HealthBot/healthBots@2020-12-08
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-08' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HealthBotProperties](#healthbotproperties): The set of properties specific to Healthbot resource.
* **sku**: [Sku](#sku) (Required): SKU of the HealthBot.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HealthBot/healthBots' (ReadOnly, DeployTimeConstant): The resource type

## HealthBotProperties
### Properties
* **botManagementPortalLink**: string (ReadOnly): The link.
* **provisioningState**: string (ReadOnly): The provisioning state of the Healthbot resource.

## Sku
### Properties
* **name**: 'C0' | 'F0' | 'S1' (Required): The name of the HealthBot SKU

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC)
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

