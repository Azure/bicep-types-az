# Microsoft.Logic @ 2015-02-01-preview

## Resource Microsoft.Logic/workflows@2015-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Gets or sets the resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowProperties](#workflowproperties)
* **tags**: [ResourceTags](#resourcetags): Gets or sets the resource tags.
* **type**: 'Microsoft.Logic/workflows' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/workflows/accessKeys@2015-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowAccessKeyProperties](#workflowaccesskeyproperties)
* **type**: 'Microsoft.Logic/workflows/accessKeys' (ReadOnly, DeployTimeConstant): The resource type

## Function list (Microsoft.Logic/workflows/accessKeys@2015-02-01-preview)
* **Resource**: Microsoft.Logic/workflows/accessKeys
* **ApiVersion**: 2015-02-01-preview
* **Output**: [WorkflowSecretKeys](#workflowsecretkeys)

## WorkflowProperties
### Properties
* **accessEndpoint**: string (ReadOnly): Gets the access endpoint.
* **changedTime**: string (ReadOnly): Gets the changed time.
* **createdTime**: string (ReadOnly): Gets the created time.
* **definition**: any: Any object
* **definitionLink**: [ContentLink](#contentlink)
* **parameters**: [WorkflowPropertiesParameters](#workflowpropertiesparameters): Gets or sets the parameters.
* **parametersLink**: [ContentLink](#contentlink)
* **provisioningState**: 'Moving' | 'NotSpecified' | 'Succeeded' (ReadOnly)
* **sku**: [Sku](#sku)
* **state**: 'Deleted' | 'Disabled' | 'Enabled' | 'NotSpecified' | 'Suspended'
* **version**: string (ReadOnly): Gets the version.

## ContentLink
### Properties
* **contentHash**: [ContentHash](#contenthash)
* **contentSize**: int: Gets or sets the content size.
* **contentVersion**: string: Gets or sets the content version.
* **metadata**: any: Any object
* **uri**: string: Gets or sets the content link URI.

## ContentHash
### Properties
* **algorithm**: string: Gets or sets the algorithm.
* **value**: string: Gets or sets the value.

## WorkflowPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [WorkflowParameter](#workflowparameter)

## WorkflowParameter
### Properties
* **metadata**: any: Any object
* **type**: 'Array' | 'Bool' | 'Float' | 'Int' | 'NotSpecified' | 'Object' | 'SecureObject' | 'SecureString' | 'String'
* **value**: any: Any object

## Sku
### Properties
* **name**: 'Basic' | 'Free' | 'NotSpecified' | 'Premium' | 'Shared' | 'Standard'
* **plan**: [ResourceReference](#resourcereference)

## ResourceReference
### Properties
* **id**: string: Gets or sets the resource id.
* **name**: string (ReadOnly): Gets the resource name.
* **type**: string (ReadOnly): Gets the resource type.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkflowAccessKeyProperties
### Properties
* **notAfter**: string: Gets or sets the not-after time.
* **notBefore**: string: Gets or sets the not-before time.

## WorkflowSecretKeys
### Properties
* **primarySecretKey**: string (ReadOnly): Gets the primary secret key.
* **secondarySecretKey**: string (ReadOnly): Gets the secondary secret key.

