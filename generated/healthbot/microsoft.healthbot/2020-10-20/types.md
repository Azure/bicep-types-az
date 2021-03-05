# Microsoft.HealthBot @ 2020-10-20

## Resource Microsoft.HealthBot/healthBots@2020-10-20
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-20' (ReadOnly, DeployTimeConstant)
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
* **name**: 'F0' | 'S1' (Required)
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

