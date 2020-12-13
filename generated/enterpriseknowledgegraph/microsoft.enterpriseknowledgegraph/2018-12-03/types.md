# Microsoft.EnterpriseKnowledgeGraph @ 2018-12-03

## Resource Microsoft.EnterpriseKnowledgeGraph/services@2018-12-03
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-12-03' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: EnterpriseKnowledgeGraphProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.EnterpriseKnowledgeGraph/services' (ReadOnly, DeployTimeConstant)

## EnterpriseKnowledgeGraphProperties
### Properties
* **description**: string
* **metadata**: any
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded'

## Sku
### Properties
* **name**: 'F0' | 'S1' (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

