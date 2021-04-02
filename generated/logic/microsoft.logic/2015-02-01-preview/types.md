# Microsoft.Logic @ 2015-02-01-preview

## Resource Microsoft.Logic/workflows@2015-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Gets or sets the resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowProperties](#workflowproperties):
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Gets or sets the resource tags.
* **type**: 'Microsoft.Logic/workflows' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/workflows/accessKeys@2015-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowAccessKeyProperties](#workflowaccesskeyproperties):
* **type**: 'Microsoft.Logic/workflows/accessKeys' (ReadOnly, DeployTimeConstant): The resource type

## WorkflowProperties
### Properties
* **accessEndpoint**: string (ReadOnly): Gets the access endpoint.
* **changedTime**: string (ReadOnly): Gets the changed time.
* **createdTime**: string (ReadOnly): Gets the created time.
* **definition**: any:
* **definitionLink**: [ContentLink](#contentlink):
* **parameters**: [Dictionary<string,WorkflowParameter>](#dictionarystringworkflowparameter): Gets or sets the parameters.
* **parametersLink**: [ContentLink](#contentlink):
* **provisioningState**: 'Moving' | 'NotSpecified' | 'Succeeded' (ReadOnly): Gets the provisioning state.
* **sku**: [Sku](#sku):
* **state**: 'Deleted' | 'Disabled' | 'Enabled' | 'NotSpecified' | 'Suspended': Gets or sets the state.
* **version**: string (ReadOnly): Gets the version.

## ContentLink
### Properties
* **contentHash**: [ContentHash](#contenthash):
* **contentSize**: int: Gets or sets the content size.
* **contentVersion**: string: Gets or sets the content version.
* **metadata**: any:
* **uri**: string: Gets or sets the content link URI.

## ContentHash
### Properties
* **algorithm**: string: Gets or sets the algorithm.
* **value**: string: Gets or sets the value.

## Dictionary<string,WorkflowParameter>
### Properties
### Additional Properties
* **Additional Properties Type**: [WorkflowParameter](#workflowparameter)

## WorkflowParameter
### Properties
* **metadata**: any:
* **type**: 'Array' | 'Bool' | 'Float' | 'Int' | 'NotSpecified' | 'Object' | 'SecureObject' | 'SecureString' | 'String': Gets or sets the type.
* **value**: any:

## Sku
### Properties
* **name**: 'Basic' | 'Free' | 'NotSpecified' | 'Premium' | 'Shared' | 'Standard': Gets or sets the name.
* **plan**: [ResourceReference](#resourcereference):

## ResourceReference
### Properties
* **id**: string: Gets or sets the resource id.
* **name**: string (ReadOnly): Gets the resource name.
* **type**: string (ReadOnly): Gets the resource type.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkflowAccessKeyProperties
### Properties
* **notAfter**: string: Gets or sets the not-after time.
* **notBefore**: string: Gets or sets the not-before time.

