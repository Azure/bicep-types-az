# Microsoft.Resources @ 2015-11-01

## Microsoft.Resources/deployments
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DeploymentProperties
* **type**: 'Microsoft.Resources/deployments' (ReadOnly, DeployTimeConstant)

## DeploymentProperties
### Properties
* **correlationId**: string (ReadOnly)
* **dependencies**: Dependency[] (ReadOnly)
* **mode**: 'Complete' | 'Incremental'
* **outputs**: any (ReadOnly)
* **parameters**: any
* **parametersLink**: ParametersLink
* **providers**: Provider[] (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **template**: any
* **templateLink**: TemplateLink
* **timestamp**: string (ReadOnly)

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
* **apiVersions**: string[] (ReadOnly)
* **locations**: string[] (ReadOnly)
* **properties**: Dictionary<string,String> (ReadOnly)
* **resourceType**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## TemplateLink
### Properties
* **contentVersion**: string
* **uri**: string (Required)

