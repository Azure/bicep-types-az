# microsoft.visualstudio @ 2014-04-01-preview

## Resource microsoft.visualstudio/account@2014-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **accountName**: string (WriteOnly): The account name.
* **apiVersion**: '2014-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure instance location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **operationType**: any (WriteOnly): The type of the operation.
* **properties**: [Dictionary<string,String>](#dictionarystringstring): The custom properties of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The custom tags of the resource.
* **type**: 'microsoft.visualstudio/account' (ReadOnly, DeployTimeConstant): The resource type

## Resource microsoft.visualstudio/account/extension@2014-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure region of the Visual Studio account associated with this request (i.e 'southcentralus'.)
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [ExtensionResourcePlan](#extensionresourceplan): Plan data for an extension resource.
* **properties**: [Dictionary<string,String>](#dictionarystringstring): A dictionary of extended properties. This property is currently unused.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): A dictionary of user-defined tags to be stored with the extension resource.
* **type**: 'microsoft.visualstudio/account/extension' (ReadOnly, DeployTimeConstant): The resource type

## Resource microsoft.visualstudio/account/project@2014-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Dictionary<string,String>](#dictionarystringstring): Key/value pair of resource properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'microsoft.visualstudio/account/project' (ReadOnly, DeployTimeConstant): The resource type

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

