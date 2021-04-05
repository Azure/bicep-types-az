# microsoft.visualstudio @ 2014-04-01-preview

## Resource microsoft.visualstudio/account@2014-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **accountName**: string (WriteOnly)
* **apiVersion**: '2014-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **operationType**: 'create' | 'link' | 'unknown' | 'update' (WriteOnly)
* **properties**: [AccountResourceRequestProperties](#accountresourcerequestproperties): Resource properties.
* **tags**: [AccountResourceRequestTags](#accountresourcerequesttags): Resource tags.
* **type**: 'microsoft.visualstudio/account' (ReadOnly, DeployTimeConstant): The resource type

## Resource microsoft.visualstudio/account/extension@2014-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [ExtensionResourcePlan](#extensionresourceplan): Plan data for an extension resource.
* **properties**: [ExtensionResourceRequestProperties](#extensionresourcerequestproperties): Resource properties.
* **tags**: [ExtensionResourceRequestTags](#extensionresourcerequesttags): Resource tags.
* **type**: 'microsoft.visualstudio/account/extension' (ReadOnly, DeployTimeConstant): The resource type

## Resource microsoft.visualstudio/account/project@2014-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectResourceProperties](#projectresourceproperties): Key/value pair of resource properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'microsoft.visualstudio/account/project' (ReadOnly, DeployTimeConstant): The resource type

## AccountResourceRequestProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AccountResourceRequestTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExtensionResourcePlan
### Properties
* **name**: string: Name of the plan.
* **product**: string: Product name.
* **promotionCode**: string: Optional: the promotion code associated with the plan.
* **publisher**: string: Name of the extension publisher.
* **version**: string: A string that uniquely identifies the plan version.

## ExtensionResourceRequestProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExtensionResourceRequestTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProjectResourceProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

