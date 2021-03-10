# Microsoft.Resources @ 2020-10-01

## Resource Microsoft.Resources/deployments@2020-10-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DeploymentProperties](#deploymentproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Resources/deployments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Resources/deploymentScripts@2020-10-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **systemData**: [systemData](#systemdata) (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Resources/deploymentScripts' (ReadOnly, DeployTimeConstant)
### AzureCLI
#### Properties
* **kind**: 'AzureCLI' (Required)
* **properties**: [AzureCliScriptProperties](#azurecliscriptproperties) (Required)

### AzurePowerShell
#### Properties
* **kind**: 'AzurePowerShell' (Required)
* **properties**: [AzurePowerShellScriptProperties](#azurepowershellscriptproperties) (Required)


## Resource Microsoft.Resources/resourceGroups@2020-10-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **managedBy**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ResourceGroupProperties](#resourcegroupproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Resources/resourceGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Resources/tags@2020-10-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant)
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
* **locationMappings**: [ProviderExtendedLocation](#providerextendedlocation)[] (ReadOnly)
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

## ProviderExtendedLocation
### Properties
* **extendedLocations**: string[] (ReadOnly)
* **location**: string (ReadOnly)
* **type**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TemplateLink
### Properties
* **contentVersion**: string
* **id**: string
* **queryString**: string
* **relativePath**: string
* **uri**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedServiceIdentity
### Properties
* **type**: 'UserAssigned'
* **userAssignedIdentities**: [Dictionary<string,UserAssignedIdentity>](#dictionarystringuserassignedidentity)

## Dictionary<string,UserAssignedIdentity>
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## systemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AzureCLI
### Properties
* **kind**: 'AzureCLI' (Required)
* **properties**: [AzureCliScriptProperties](#azurecliscriptproperties) (Required)

## AzureCliScriptProperties
### Properties
* **arguments**: string
* **azCliVersion**: string (Required)
* **cleanupPreference**: 'Always' | 'OnExpiration' | 'OnSuccess'
* **containerSettings**: [ContainerConfiguration](#containerconfiguration)
* **environmentVariables**: [EnvironmentVariable](#environmentvariable)[]
* **forceUpdateTag**: string
* **outputs**: [Dictionary<string,Object>](#dictionarystringobject) (ReadOnly)
* **primaryScriptUri**: string
* **provisioningState**: 'Canceled' | 'Creating' | 'Failed' | 'ProvisioningResources' | 'Running' | 'Succeeded' (ReadOnly)
* **retentionInterval**: string (Required)
* **scriptContent**: string
* **status**: [ScriptStatus](#scriptstatus) (ReadOnly)
* **storageAccountSettings**: [StorageAccountConfiguration](#storageaccountconfiguration)
* **supportingScriptUris**: string[]
* **timeout**: string

## ContainerConfiguration
### Properties
* **containerGroupName**: string

## EnvironmentVariable
### Properties
* **name**: string (Required)
* **secureValue**: string
* **value**: string

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ScriptStatus
### Properties
* **containerInstanceId**: string (ReadOnly)
* **endTime**: string (ReadOnly)
* **error**: [ErrorResponse](#errorresponse)
* **expirationTime**: string (ReadOnly)
* **startTime**: string (ReadOnly)
* **storageAccountId**: string (ReadOnly)

## StorageAccountConfiguration
### Properties
* **storageAccountKey**: string
* **storageAccountName**: string

## AzurePowerShell
### Properties
* **kind**: 'AzurePowerShell' (Required)
* **properties**: [AzurePowerShellScriptProperties](#azurepowershellscriptproperties) (Required)

## AzurePowerShellScriptProperties
### Properties
* **arguments**: string
* **azPowerShellVersion**: string (Required)
* **cleanupPreference**: 'Always' | 'OnExpiration' | 'OnSuccess'
* **containerSettings**: [ContainerConfiguration](#containerconfiguration)
* **environmentVariables**: [EnvironmentVariable](#environmentvariable)[]
* **forceUpdateTag**: string
* **outputs**: [Dictionary<string,Object>](#dictionarystringobject) (ReadOnly)
* **primaryScriptUri**: string
* **provisioningState**: 'Canceled' | 'Creating' | 'Failed' | 'ProvisioningResources' | 'Running' | 'Succeeded' (ReadOnly)
* **retentionInterval**: string (Required)
* **scriptContent**: string
* **status**: [ScriptStatus](#scriptstatus) (ReadOnly)
* **storageAccountSettings**: [StorageAccountConfiguration](#storageaccountconfiguration)
* **supportingScriptUris**: string[]
* **timeout**: string

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

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

