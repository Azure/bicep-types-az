# microsoft.visualstudio @ 2014-04-01-preview

## Resource microsoft.visualstudio/account@2014-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **accountName**: string (WriteOnly)
* **apiVersion**: '2014-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: AccountResourceRequestProperties
* **tags**: AccountResourceRequestTags
* **type**: 'microsoft.visualstudio/account' (ReadOnly, DeployTimeConstant)

## Resource microsoft.visualstudio/account/extension@2014-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **plan**: ExtensionResourcePlan
* **properties**: ExtensionResourceRequestProperties
* **tags**: ExtensionResourceRequestTags
* **type**: 'microsoft.visualstudio/account/extension' (ReadOnly, DeployTimeConstant)

## Resource microsoft.visualstudio/account/project@2014-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProjectResourceProperties
* **tags**: ResourceTags
* **type**: 'microsoft.visualstudio/account/project' (ReadOnly, DeployTimeConstant)

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
* **name**: string
* **product**: string
* **promotionCode**: string
* **publisher**: string
* **version**: string

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

