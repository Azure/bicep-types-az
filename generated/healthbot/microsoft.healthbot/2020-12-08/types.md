# Microsoft.HealthBot @ 2020-12-08

## Resource Microsoft.HealthBot/healthBots@2020-12-08
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-08' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: HealthBotProperties
* **sku**: Sku
* **systemData**: SystemData (ReadOnly)
* **tags**: Dictionary<string,String>
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

