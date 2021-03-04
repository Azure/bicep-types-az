# Microsoft.HealthBot @ 2020-12-08-preview

## Resource Microsoft.HealthBot/healthBots@2020-12-08-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-08-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: HealthBotProperties
* **sku**: Sku
* **systemData**: SystemData (ReadOnly)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.HealthBot/healthBots' (ReadOnly, DeployTimeConstant)

## HealthBotProperties
### Properties
* **botManagementPortalLink**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)

## Sku
### Properties
* **capacity**: int
* **family**: string
* **size**: string

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

