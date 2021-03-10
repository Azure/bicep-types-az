# microsoft.visualstudio @ 2014-04-01-preview

## Resource microsoft.visualstudio/account@2014-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **accountName**: string (WriteOnly)
* **apiVersion**: '2014-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **operationType**: 'create' | 'link' | 'unknown' | 'update' (WriteOnly)
* **properties**: [AccountResourceRequestProperties](#accountresourcerequestproperties)
* **tags**: [AccountResourceRequestTags](#accountresourcerequesttags)
* **type**: 'microsoft.visualstudio/account' (ReadOnly, DeployTimeConstant)

## Resource microsoft.visualstudio/account/extension@2014-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **plan**: [ExtensionResourcePlan](#extensionresourceplan)
* **properties**: [ExtensionResourceRequestProperties](#extensionresourcerequestproperties)
* **tags**: [ExtensionResourceRequestTags](#extensionresourcerequesttags)
* **type**: 'microsoft.visualstudio/account/extension' (ReadOnly, DeployTimeConstant)

## Resource microsoft.visualstudio/account/project@2014-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProjectResourceProperties](#projectresourceproperties)
* **tags**: [ResourceTags](#resourcetags)
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

