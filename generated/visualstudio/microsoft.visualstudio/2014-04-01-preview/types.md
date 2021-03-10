# microsoft.visualstudio @ 2014-04-01-preview

## Resource microsoft.visualstudio/account@2014-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **accountName**: string (WriteOnly)
* **apiVersion**: '2014-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **operationType**: any (WriteOnly)
* **properties**: [Dictionary<string,String>](#dictionarystringstring)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'microsoft.visualstudio/account' (ReadOnly, DeployTimeConstant)

## Resource microsoft.visualstudio/account/extension@2014-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **plan**: [ExtensionResourcePlan](#extensionresourceplan)
* **properties**: [Dictionary<string,String>](#dictionarystringstring)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'microsoft.visualstudio/account/extension' (ReadOnly, DeployTimeConstant)

## Resource microsoft.visualstudio/account/project@2014-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,String>](#dictionarystringstring)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'microsoft.visualstudio/account/project' (ReadOnly, DeployTimeConstant)

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
* **name**: string
* **product**: string
* **promotionCode**: string
* **publisher**: string
* **version**: string

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

