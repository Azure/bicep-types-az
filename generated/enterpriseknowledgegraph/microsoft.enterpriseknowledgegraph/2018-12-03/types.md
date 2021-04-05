# Microsoft.EnterpriseKnowledgeGraph @ 2018-12-03

## Resource Microsoft.EnterpriseKnowledgeGraph/services@2018-12-03
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-12-03' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnterpriseKnowledgeGraphProperties](#enterpriseknowledgegraphproperties): The parameters to provide for the EnterpriseKnowledgeGraph.
* **sku**: [Sku](#sku): The SKU of the EnterpriseKnowledgeGraph service account.
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.EnterpriseKnowledgeGraph/services' (ReadOnly, DeployTimeConstant): The resource type

## EnterpriseKnowledgeGraphProperties
### Properties
* **description**: string: The description of the EnterpriseKnowledgeGraph
* **metadata**: any: Any object
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded': The state of EnterpriseKnowledgeGraph provisioning

## Sku
### Properties
* **name**: 'F0' | 'S1' (Required): The name of SKU.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

