# Microsoft.Resources @ 2020-06-01

## Resource Microsoft.Resources/deployments@2020-06-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DeploymentProperties](#deploymentproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Resources/deployments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Resources/resourceGroups@2020-06-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **managedBy**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ResourceGroupProperties](#resourcegroupproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Resources/resourceGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Resources/tags@2020-06-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
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
* **expressionEvaluationOptions**: [ExpressionEvaluationOptions](#expressionevaluationoptions) (WriteOnly)
* **mode**: 'Complete' | 'Incremental' (Required)
* **onErrorDeployment**: [OnErrorDeployment](#onerrordeployment)
* **outputResources**: [ResourceReference](#resourcereference)[] (ReadOnly)
* **outputs**: any (ReadOnly)
* **parameters**: any
* **parametersLink**: [ParametersLink](#parameterslink)
* **providers**: [Provider](#provider)[] (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' (ReadOnly)
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

## ExpressionEvaluationOptions
### Properties
* **scope**: 'Inner' | 'NotSpecified' | 'Outer' (WriteOnly)

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
* **apiProfiles**: [ApiProfile](#apiprofile)[] (ReadOnly)
* **apiVersions**: string[] (ReadOnly)
* **capabilities**: string (ReadOnly)
* **defaultApiVersion**: string (ReadOnly)
* **locations**: string[] (ReadOnly)
* **properties**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **resourceType**: string (ReadOnly)

## Alias
### Properties
* **defaultMetadata**: [AliasPathMetadata](#aliaspathmetadata) (ReadOnly)
* **defaultPath**: string (ReadOnly)
* **defaultPattern**: [AliasPattern](#aliaspattern) (ReadOnly)
* **name**: string (ReadOnly)
* **paths**: [AliasPath](#aliaspath)[] (ReadOnly)
* **type**: 'Mask' | 'NotSpecified' | 'PlainText' (ReadOnly)

## AliasPathMetadata
### Properties
* **attributes**: 'Modifiable' | 'None' (ReadOnly)
* **type**: 'Any' | 'Array' | 'Boolean' | 'Integer' | 'NotSpecified' | 'Number' | 'Object' | 'String' (ReadOnly)

## AliasPattern
### Properties
* **phrase**: string (ReadOnly)
* **type**: 'Extract' | 'NotSpecified' (ReadOnly)
* **variable**: string (ReadOnly)

## AliasPath
### Properties
* **apiVersions**: string[] (ReadOnly)
* **metadata**: [AliasPathMetadata](#aliaspathmetadata) (ReadOnly)
* **path**: string (ReadOnly)
* **pattern**: [AliasPattern](#aliaspattern) (ReadOnly)

## ApiProfile
### Properties
* **apiVersion**: string (ReadOnly)
* **profileVersion**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TemplateLink
### Properties
* **contentVersion**: string
* **id**: string
* **relativePath**: string
* **uri**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceGroupProperties
### Properties
* **provisioningState**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
* **tags**: [Dictionary<string,String>](#dictionarystringstring)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

