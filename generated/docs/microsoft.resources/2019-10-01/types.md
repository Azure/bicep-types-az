# Microsoft.Resources @ 2019-10-01

## Microsoft.Resources/deployments
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: DeploymentProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Resources/deployments' (ReadOnly, DeployTimeConstant)

## DeploymentProperties
### Properties
* **correlationId**: string (ReadOnly)
* **debugSetting**: DebugSetting
* **dependencies**: Dependency[] (ReadOnly)
* **duration**: string (ReadOnly)
* **error**: ErrorResponse (ReadOnly)
* **mode**: 'Complete' | 'Incremental' (Required)
* **onErrorDeployment**: OnErrorDeployment
* **outputResources**: ResourceReference[] (ReadOnly)
* **outputs**: any (ReadOnly)
* **parameters**: any
* **parametersLink**: ParametersLink
* **providers**: Provider[] (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **template**: any (WriteOnly)
* **templateHash**: string (ReadOnly)
* **templateLink**: TemplateLink
* **timestamp**: string (ReadOnly)
* **validatedResources**: ResourceReference[] (ReadOnly)

## DebugSetting
### Properties
* **detailLevel**: string

## Dependency
### Properties
* **dependsOn**: BasicDependency[] (ReadOnly)
* **id**: string (ReadOnly)
* **resourceName**: string (ReadOnly)
* **resourceType**: string (ReadOnly)

## BasicDependency
### Properties
* **id**: string (ReadOnly)
* **resourceName**: string (ReadOnly)
* **resourceType**: string (ReadOnly)

## ErrorResponse
### Properties
* **additionalInfo**: ErrorAdditionalInfo[] (ReadOnly)
* **code**: string (ReadOnly)
* **details**: ErrorResponse[] (ReadOnly)
* **message**: string (ReadOnly)
* **target**: string (ReadOnly)

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly)
* **type**: string (ReadOnly)

## OnErrorDeployment
### Properties
* **deploymentName**: string
* **provisioningState**: string (ReadOnly)
* **type**: 'LastSuccessful' | 'SpecificDeployment'

## ResourceReference
### Properties
* **id**: string (ReadOnly)

## ParametersLink
### Properties
* **contentVersion**: string
* **uri**: string (Required)

## Provider
### Properties
* **id**: string (ReadOnly)
* **namespace**: string (ReadOnly)
* **registrationPolicy**: string (ReadOnly)
* **registrationState**: string (ReadOnly)
* **resourceTypes**: ProviderResourceType[] (ReadOnly)

## ProviderResourceType
### Properties
* **aliases**: Alias[] (ReadOnly)
* **apiVersions**: string[] (ReadOnly)
* **capabilities**: string (ReadOnly)
* **locations**: string[] (ReadOnly)
* **properties**: Dictionary<string,String> (ReadOnly)
* **resourceType**: string (ReadOnly)

## Alias
### Properties
* **defaultPath**: string (ReadOnly)
* **defaultPattern**: AliasPattern (ReadOnly)
* **name**: string (ReadOnly)
* **paths**: AliasPath[] (ReadOnly)
* **type**: 'Mask' | 'NotSpecified' | 'PlainText' (ReadOnly)

## AliasPattern
### Properties
* **phrase**: string (ReadOnly)
* **type**: 'Extract' | 'NotSpecified' (ReadOnly)
* **variable**: string (ReadOnly)

## AliasPath
### Properties
* **apiVersions**: string[] (ReadOnly)
* **path**: string (ReadOnly)
* **pattern**: AliasPattern (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## TemplateLink
### Properties
* **contentVersion**: string
* **uri**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Resources/deployments
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DeploymentProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Resources/deployments' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Resources/deployments
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DeploymentProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Resources/deployments' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Resources/deployments
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: DeploymentProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Resources/deployments' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Resources/deployments
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: DeploymentProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Resources/deployments' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Resources/tags
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: Tags (Required)
* **type**: 'Microsoft.Resources/tags' (ReadOnly, DeployTimeConstant)

## Tags
### Properties
* **tags**: Dictionary<string,String>

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

