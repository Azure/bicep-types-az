# Microsoft.Logic @ 2015-02-01-preview

## Resource Microsoft.Logic/workflows@2015-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Gets or sets the resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowProperties](#workflowproperties): Gets or sets the workflow properties.
* **tags**: [ResourceTags](#resourcetags): Gets or sets the resource tags.
* **type**: 'Microsoft.Logic/workflows' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/workflows/accessKeys@2015-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowAccessKeyProperties](#workflowaccesskeyproperties): Gets or sets the workflow access key properties.
* **type**: 'Microsoft.Logic/workflows/accessKeys' (ReadOnly, DeployTimeConstant): The resource type

## Function list (Microsoft.Logic/workflows/accessKeys@2015-02-01-preview)
* **Resource**: Microsoft.Logic/workflows/accessKeys
* **ApiVersion**: 2015-02-01-preview
* **Output**: [WorkflowSecretKeys](#workflowsecretkeys)

## ContentHash
### Properties
* **algorithm**: string: Gets or sets the algorithm.
* **value**: string: Gets or sets the value.

## ContentLink
### Properties
* **contentHash**: [ContentHash](#contenthash): Gets or sets the content hash.
* **contentSize**: int: Gets or sets the content size.
* **contentVersion**: string: Gets or sets the content version.
* **metadata**: any: Gets or sets the metadata.
* **uri**: string: Gets or sets the content link URI.

## ResourceReference
### Properties
* **id**: string: Gets or sets the resource id.
* **name**: string (ReadOnly): Gets the resource name.
* **type**: string (ReadOnly): Gets the resource type.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Sku
### Properties
* **name**: 'Basic' | 'Free' | 'NotSpecified' | 'Premium' | 'Shared' | 'Standard': Gets or sets the name.
* **plan**: [ResourceReference](#resourcereference): Gets or sets the reference to plan.

## WorkflowAccessKeyProperties
### Properties
* **notAfter**: string: Gets or sets the not-after time.
* **notBefore**: string: Gets or sets the not-before time.

## WorkflowParameter
### Properties
* **metadata**: any: Gets or sets the metadata.
* **type**: 'Array' | 'Bool' | 'Float' | 'Int' | 'NotSpecified' | 'Object' | 'SecureObject' | 'SecureString' | 'String': Gets or sets the type.
* **value**: any: Gets or sets the value.

## WorkflowProperties
### Properties
* **accessEndpoint**: string (ReadOnly): Gets the access endpoint.
* **changedTime**: string (ReadOnly): Gets the changed time.
* **createdTime**: string (ReadOnly): Gets the created time.
* **definition**: any: Gets or sets the definition.
* **definitionLink**: [ContentLink](#contentlink): Gets or sets the link to definition.
* **parameters**: [WorkflowPropertiesParameters](#workflowpropertiesparameters): Gets or sets the parameters.
* **parametersLink**: [ContentLink](#contentlink): Gets or sets the link to parameters.
* **provisioningState**: 'Moving' | 'NotSpecified' | 'Succeeded' (ReadOnly): Gets the provisioning state.
* **sku**: [Sku](#sku): Gets or sets the sku.
* **state**: 'Deleted' | 'Disabled' | 'Enabled' | 'NotSpecified' | 'Suspended': Gets or sets the state.
* **version**: string (ReadOnly): Gets the version.

## WorkflowPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [WorkflowParameter](#workflowparameter)

## WorkflowSecretKeys
### Properties
* **primarySecretKey**: string (ReadOnly): Gets the primary secret key.
* **secondarySecretKey**: string (ReadOnly): Gets the secondary secret key.

