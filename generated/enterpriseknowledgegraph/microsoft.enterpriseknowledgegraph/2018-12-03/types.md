# Microsoft.EnterpriseKnowledgeGraph @ 2018-12-03

## Resource Microsoft.EnterpriseKnowledgeGraph/services@2018-12-03
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-12-03' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnterpriseKnowledgeGraphProperties](#enterpriseknowledgegraphproperties): The set of properties specific to EnterpriseKnowledgeGraph resource
* **sku**: [Sku](#sku): Gets or sets the SKU of the resource.
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.EnterpriseKnowledgeGraph/services' (ReadOnly, DeployTimeConstant): The resource type

## EnterpriseKnowledgeGraphProperties
### Properties
* **description**: string: The description of the EnterpriseKnowledgeGraph
* **metadata**: any: Specifies the metadata  of the resource.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string: The state of EnterpriseKnowledgeGraph provisioning

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Sku
### Properties
* **name**: 'F0' | 'S1' | string (Required): The sku name

