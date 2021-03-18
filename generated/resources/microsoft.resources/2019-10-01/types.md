# Microsoft.Resources @ 2019-10-01

## Resource Microsoft.Resources/deployments@2019-10-01
* **Valid Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DeploymentProperties](#deploymentproperties) (Required)
* **tags**: [DeploymentTags](#deploymenttags)
* **type**: 'Microsoft.Resources/deployments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Resources/resourceGroups@2019-10-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **managedBy**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ResourceGroupProperties](#resourcegroupproperties)
* **tags**: [ResourceGroupTags](#resourcegrouptags)
* **type**: 'Microsoft.Resources/resourceGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Resources/tags@2019-10-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [Tags](#tags) (Required)
* **type**: 'Microsoft.Resources/tags' (ReadOnly, DeployTimeConstant)

## DeploymentProperties
### Properties
* **correlationId**: string (ReadOnly)
* **debugSetting**: [DebugSetting](#debugsetting)
* **dependencies**: [Dependency](#dependency)[] (ReadOnly)
* **duration**: string (ReadOnly)
* **error**: [ErrorResponse](#errorresponse) (ReadOnly)
* **mode**: 'Complete' | 'Incremental' (Required)
* **onErrorDeployment**: [OnErrorDeployment](#onerrordeployment)
* **outputResources**: [ResourceReference](#resourcereference)[] (ReadOnly)
* **outputs**: any (ReadOnly)
* **parameters**: any
* **parametersLink**: [ParametersLink](#parameterslink)
* **providers**: [Provider](#provider)[] (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **template**: any (WriteOnly)
* **templateHash**: string (ReadOnly)
* **templateLink**: [TemplateLink](#templatelink)
* **timestamp**: string (ReadOnly)
* **validatedResources**: [ResourceReference](#resourcereference)[] (ReadOnly)

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

## ErrorResponse
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly)
* **code**: string (ReadOnly)
* **details**: [ErrorResponse](#errorresponse)[] (ReadOnly)
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
* **resourceTypes**: [ProviderResourceType](#providerresourcetype)[] (ReadOnly)

## ProviderResourceType
### Properties
* **aliases**: [Alias](#alias)[] (ReadOnly)
* **apiVersions**: string[] (ReadOnly)
* **capabilities**: string (ReadOnly)
* **locations**: string[] (ReadOnly)
* **properties**: [ProviderResourceTypeProperties](#providerresourcetypeproperties) (ReadOnly)
* **resourceType**: string (ReadOnly)

## Alias
### Properties
* **defaultPath**: string (ReadOnly)
* **defaultPattern**: [AliasPattern](#aliaspattern) (ReadOnly)
* **name**: string (ReadOnly)
* **paths**: [AliasPath](#aliaspath)[] (ReadOnly)
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
* **pattern**: [AliasPattern](#aliaspattern) (ReadOnly)

## ProviderResourceTypeProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TemplateLink
### Properties
* **contentVersion**: string
* **uri**: string (Required)

## DeploymentTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceGroupProperties
### Properties
* **provisioningState**: string (ReadOnly)

## ResourceGroupTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
* **tags**: [Tags](#tags)

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

