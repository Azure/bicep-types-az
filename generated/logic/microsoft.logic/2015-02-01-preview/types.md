# Microsoft.Logic @ 2015-02-01-preview

## Resource Microsoft.Logic/workflows@2015-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkflowProperties](#workflowproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Logic/workflows' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/workflows/accessKeys@2015-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkflowAccessKeyProperties](#workflowaccesskeyproperties)
* **type**: 'Microsoft.Logic/workflows/accessKeys' (ReadOnly, DeployTimeConstant)

## WorkflowProperties
### Properties
* **accessEndpoint**: string (ReadOnly)
* **changedTime**: string (ReadOnly)
* **createdTime**: string (ReadOnly)
* **definition**: any
* **definitionLink**: [ContentLink](#contentlink)
* **parameters**: [Dictionary<string,WorkflowParameter>](#dictionarystringworkflowparameter)
* **parametersLink**: [ContentLink](#contentlink)
* **provisioningState**: 'Moving' | 'NotSpecified' | 'Succeeded' (ReadOnly)
* **sku**: [Sku](#sku)
* **state**: 'Deleted' | 'Disabled' | 'Enabled' | 'NotSpecified' | 'Suspended'
* **version**: string (ReadOnly)

## ContentLink
### Properties
* **contentHash**: [ContentHash](#contenthash)
* **contentSize**: int
* **contentVersion**: string
* **metadata**: any
* **uri**: string

## ContentHash
### Properties
* **algorithm**: string
* **value**: string

## Dictionary<string,WorkflowParameter>
### Properties
### Additional Properties
* **Additional Properties Type**: [WorkflowParameter](#workflowparameter)

## WorkflowParameter
### Properties
* **metadata**: any
* **type**: 'Array' | 'Bool' | 'Float' | 'Int' | 'NotSpecified' | 'Object' | 'SecureObject' | 'SecureString' | 'String'
* **value**: any

## Sku
### Properties
* **name**: 'Basic' | 'Free' | 'NotSpecified' | 'Premium' | 'Shared' | 'Standard'
* **plan**: [ResourceReference](#resourcereference)

## ResourceReference
### Properties
* **id**: string
* **name**: string (ReadOnly)
* **type**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkflowAccessKeyProperties
### Properties
* **notAfter**: string
* **notBefore**: string

