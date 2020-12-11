# Microsoft.Resources @ 2016-02-01

## Resource Microsoft.Resources/deployments@2016-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DeploymentProperties
* **type**: 'Microsoft.Resources/deployments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Resources/resourceGroups@2016-02-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2016-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ResourceGroupProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Resources/resourceGroups' (ReadOnly, DeployTimeConstant)

## DeploymentProperties
### Properties
* **correlationId**: string (ReadOnly)
* **debugSetting**: DebugSetting
* **dependencies**: Dependency[] (ReadOnly)
* **mode**: 'Complete' | 'Incremental' (Required)
* **outputs**: any (ReadOnly)
* **parameters**: any
* **parametersLink**: ParametersLink
* **providers**: Provider[] (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **template**: any
* **templateLink**: TemplateLink
* **timestamp**: string (ReadOnly)

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

## ParametersLink
### Properties
* **contentVersion**: string
* **uri**: string (Required)

## Provider
### Properties
* **id**: string (ReadOnly)
* **namespace**: string (ReadOnly)
* **registrationState**: string (ReadOnly)
* **resourceTypes**: ProviderResourceType[] (ReadOnly)

## ProviderResourceType
### Properties
* **aliases**: AliasType[] (ReadOnly)
* **apiVersions**: string[] (ReadOnly)
* **locations**: string[] (ReadOnly)
* **properties**: Dictionary<string,String> (ReadOnly)
* **resourceType**: string (ReadOnly)

## AliasType
### Properties
* **name**: string (ReadOnly)
* **paths**: AliasPathType[] (ReadOnly)

## AliasPathType
### Properties
* **apiVersions**: string[] (ReadOnly)
* **path**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## TemplateLink
### Properties
* **contentVersion**: string
* **uri**: string (Required)

## ResourceGroupProperties
### Properties
* **provisioningState**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

