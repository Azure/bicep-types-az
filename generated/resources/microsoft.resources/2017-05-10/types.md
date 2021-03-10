# Microsoft.Resources @ 2017-05-10

## Resource Microsoft.Resources/deployments@2017-05-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-05-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DeploymentProperties](#deploymentproperties) (Required)
* **type**: 'Microsoft.Resources/deployments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Resources/resourceGroups@2017-05-10
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2017-05-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **managedBy**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ResourceGroupProperties](#resourcegroupproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Resources/resourceGroups' (ReadOnly, DeployTimeConstant)

## DeploymentProperties
### Properties
* **correlationId**: string (ReadOnly)
* **debugSetting**: [DebugSetting](#debugsetting)
* **dependencies**: [Dependency](#dependency)[] (ReadOnly)
* **mode**: 'Complete' | 'Incremental' (Required)
* **outputs**: any (ReadOnly)
* **parameters**: any
* **parametersLink**: [ParametersLink](#parameterslink)
* **providers**: [Provider](#provider)[] (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **template**: any
* **templateLink**: [TemplateLink](#templatelink)
* **timestamp**: string (ReadOnly)

## DebugSetting
### Properties
* **detailLevel**: string

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
* **aliases**: [AliasType](#aliastype)[] (ReadOnly)
* **apiVersions**: string[] (ReadOnly)
* **locations**: string[] (ReadOnly)
* **properties**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **resourceType**: string (ReadOnly)

## AliasType
### Properties
* **name**: string (ReadOnly)
* **paths**: [AliasPathType](#aliaspathtype)[] (ReadOnly)

## AliasPathType
### Properties
* **apiVersions**: string[] (ReadOnly)
* **path**: string (ReadOnly)

## Dictionary<string,String>
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

