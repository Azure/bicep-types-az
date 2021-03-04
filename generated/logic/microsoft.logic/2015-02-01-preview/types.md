# Microsoft.Logic @ 2015-02-01-preview

## Resource Microsoft.Logic/workflows@2015-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkflowProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Logic/workflows' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/workflows/accessKeys@2015-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkflowAccessKeyProperties
* **type**: 'Microsoft.Logic/workflows/accessKeys' (ReadOnly, DeployTimeConstant)

## WorkflowProperties
### Properties
* **accessEndpoint**: string (ReadOnly)
* **changedTime**: string (ReadOnly)
* **createdTime**: string (ReadOnly)
* **definitionLink**: ContentLink
* **parameters**: WorkflowPropertiesParameters
* **parametersLink**: ContentLink
* **sku**: Sku
* **version**: string (ReadOnly)

## ContentLink
### Properties
* **contentHash**: ContentHash
* **contentSize**: int
* **contentVersion**: string
* **uri**: string

## ContentHash
### Properties
* **algorithm**: string
* **value**: string

## WorkflowPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: WorkflowParameter

## WorkflowParameter
### Properties

## Sku
### Properties
* **plan**: ResourceReference

## ResourceReference
### Properties
* **id**: string
* **name**: string (ReadOnly)
* **type**: string (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkflowAccessKeyProperties
### Properties
* **notAfter**: string
* **notBefore**: string

