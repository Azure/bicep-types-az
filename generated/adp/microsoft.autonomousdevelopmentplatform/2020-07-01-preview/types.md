# Microsoft.AutonomousDevelopmentPlatform @ 2020-07-01-preview

## Resource Microsoft.AutonomousDevelopmentPlatform/accounts@2020-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AccountProperties
* **systemData**: systemData (ReadOnly)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.AutonomousDevelopmentPlatform/accounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AutonomousDevelopmentPlatform/accounts/dataPools@2020-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DataPoolProperties
* **type**: 'Microsoft.AutonomousDevelopmentPlatform/accounts/dataPools' (ReadOnly, DeployTimeConstant)

## AccountProperties
### Properties
* **accountId**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' (ReadOnly)

## systemData
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

## DataPoolProperties
### Properties
* **dataPoolId**: string (ReadOnly)
* **locations**: DataPoolLocation[]
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **systemData**: systemData (ReadOnly)

## DataPoolLocation
### Properties
* **name**: string (Required)

