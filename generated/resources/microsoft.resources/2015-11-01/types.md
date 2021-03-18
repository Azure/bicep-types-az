# Microsoft.Resources @ 2015-11-01

## Resource Microsoft.Resources/deployments@2015-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DeploymentProperties](#deploymentproperties)
* **type**: 'Microsoft.Resources/deployments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Resources/resourceGroups@2015-11-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ResourceGroupProperties](#resourcegroupproperties)
* **tags**: [ResourceGroupTags](#resourcegrouptags)
* **type**: 'Microsoft.Resources/resourceGroups' (ReadOnly, DeployTimeConstant)

## DeploymentProperties
### Properties
* **correlationId**: string (ReadOnly)
* **dependencies**: [Dependency](#dependency)[] (ReadOnly)
* **mode**: 'Complete' | 'Incremental'
* **outputs**: any (ReadOnly)
* **parameters**: any
* **parametersLink**: [ParametersLink](#parameterslink)
* **providers**: [Provider](#provider)[] (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **template**: any
* **templateLink**: [TemplateLink](#templatelink)
* **timestamp**: string (ReadOnly)

## Dependency
### Properties
* **dependsOn**: [BasicDependency](#basicdependency)[] (ReadOnly)
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
* **resourceTypes**: [ProviderResourceType](#providerresourcetype)[] (ReadOnly)

## ProviderResourceType
### Properties
* **apiVersions**: string[] (ReadOnly)
* **locations**: string[] (ReadOnly)
* **properties**: [ProviderResourceTypeProperties](#providerresourcetypeproperties) (ReadOnly)
* **resourceType**: string (ReadOnly)

## ProviderResourceTypeProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TemplateLink
### Properties
* **contentVersion**: string
* **uri**: string (Required)

## ResourceGroupProperties
### Properties
* **provisioningState**: string (ReadOnly)

## ResourceGroupTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

