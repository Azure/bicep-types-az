# Microsoft.HealthBot @ 2020-12-08-preview

## Resource Microsoft.HealthBot/healthBots@2020-12-08-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-08-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [HealthBotProperties](#healthbotproperties)
* **sku**: [Sku](#sku)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.HealthBot/healthBots' (ReadOnly, DeployTimeConstant)

## HealthBotProperties
### Properties
* **botManagementPortalLink**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)

## Sku
### Properties
* **capacity**: int
* **family**: string
* **name**: 'C0' | 'F0' | 'S1' (Required)
* **size**: string
* **tier**: 'Free' | 'Standard'

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

