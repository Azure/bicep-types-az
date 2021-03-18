# Microsoft.Resources @ 2019-07-01

## Resource Microsoft.Resources/deployments@2019-07-01
* **Valid Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup
### Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DeploymentProperties](#deploymentproperties) (Required)
* **type**: 'Microsoft.Resources/deployments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Resources/resourceGroups@2019-07-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **managedBy**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ResourceGroupProperties](#resourcegroupproperties)
* **tags**: [ResourceGroupTags](#resourcegrouptags)
* **type**: 'Microsoft.Resources/resourceGroups' (ReadOnly, DeployTimeConstant)

## DeploymentProperties
### Properties
* **correlationId**: string (ReadOnly)
* **debugSetting**: [DebugSetting](#debugsetting)
* **dependencies**: [Dependency](#dependency)[] (ReadOnly)
* **duration**: string (ReadOnly)
* **mode**: 'Complete' | 'Incremental' (Required)
* **onErrorDeployment**: [OnErrorDeployment](#onerrordeployment)
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

## OnErrorDeployment
### Properties
* **deploymentName**: string
* **provisioningState**: string (ReadOnly)
* **type**: 'LastSuccessful' | 'SpecificDeployment'

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
* **resourceTypes**: [ProviderResourceType](#providerresourcetype)[] (ReadOnly)

## ProviderResourceType
### Properties
* **aliases**: [AliasType](#aliastype)[] (ReadOnly)
* **apiVersions**: string[] (ReadOnly)
* **capabilities**: string (ReadOnly)
* **locations**: string[] (ReadOnly)
* **properties**: [ProviderResourceTypeProperties](#providerresourcetypeproperties) (ReadOnly)
* **resourceType**: string (ReadOnly)

## AliasType
### Properties
* **name**: string (ReadOnly)
* **paths**: [AliasPathType](#aliaspathtype)[] (ReadOnly)

## AliasPathType
### Properties
* **apiVersions**: string[] (ReadOnly)
* **path**: string (ReadOnly)

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

