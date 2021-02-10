# Microsoft.Resources @ 2020-10-01

## Resource Microsoft.Resources/deployments@2020-10-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: DeploymentProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Resources/deployments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Resources/deploymentScripts@2020-10-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ManagedServiceIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **systemData**: systemData (ReadOnly)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Resources/deploymentScripts' (ReadOnly, DeployTimeConstant)
### AzureCLI
#### Properties
* **kind**: 'AzureCLI' (Required)
* **properties**: AzureCliScriptProperties (Required)

### AzurePowerShell
#### Properties
* **kind**: 'AzurePowerShell' (Required)
* **properties**: AzurePowerShellScriptProperties (Required)


## Resource Microsoft.Resources/resourceGroups@2020-10-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **managedBy**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ResourceGroupProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Resources/resourceGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Resources/tags@2020-10-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: Tags (Required)
* **type**: 'Microsoft.Resources/tags' (ReadOnly, DeployTimeConstant)

## DeploymentProperties
### Properties
* **correlationId**: string (ReadOnly)
* **debugSetting**: DebugSetting
* **dependencies**: Dependency[] (ReadOnly)
* **duration**: string (ReadOnly)
* **error**: ErrorResponse (ReadOnly)
* **expressionEvaluationOptions**: ExpressionEvaluationOptions (WriteOnly)
* **mode**: 'Complete' | 'Incremental' (Required)
* **onErrorDeployment**: OnErrorDeployment
* **outputResources**: ResourceReference[] (ReadOnly)
* **outputs**: any (ReadOnly)
* **parameters**: any
* **parametersLink**: ParametersLink
* **providers**: Provider[] (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' (ReadOnly)
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
* **resourceTypes**: ProviderResourceType[] (ReadOnly)

## ProviderResourceType
### Properties
* **aliases**: Alias[] (ReadOnly)
* **apiProfiles**: ApiProfile[] (ReadOnly)
* **apiVersions**: string[] (ReadOnly)
* **capabilities**: string (ReadOnly)
* **defaultApiVersion**: string (ReadOnly)
* **locationMappings**: ProviderExtendedLocation[] (ReadOnly)
* **locations**: string[] (ReadOnly)
* **properties**: Dictionary<string,String> (ReadOnly)
* **resourceType**: string (ReadOnly)

## Alias
### Properties
* **defaultMetadata**: AliasPathMetadata (ReadOnly)
* **defaultPath**: string (ReadOnly)
* **defaultPattern**: AliasPattern (ReadOnly)
* **name**: string (ReadOnly)
* **paths**: AliasPath[] (ReadOnly)
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
* **metadata**: AliasPathMetadata (ReadOnly)
* **path**: string (ReadOnly)
* **pattern**: AliasPattern (ReadOnly)

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
* **userAssignedIdentities**: Dictionary<string,UserAssignedIdentity>

## Dictionary<string,UserAssignedIdentity>
### Properties
### Additional Properties
* **Additional Properties Type**: UserAssignedIdentity

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
* **properties**: AzureCliScriptProperties (Required)

## AzureCliScriptProperties
### Properties
* **arguments**: string
* **azCliVersion**: string (Required)
* **cleanupPreference**: 'Always' | 'OnExpiration' | 'OnSuccess'
* **containerSettings**: ContainerConfiguration
* **environmentVariables**: EnvironmentVariable[]
* **forceUpdateTag**: string
* **outputs**: Dictionary<string,Object> (ReadOnly)
* **primaryScriptUri**: string
* **provisioningState**: 'Canceled' | 'Creating' | 'Failed' | 'ProvisioningResources' | 'Running' | 'Succeeded' (ReadOnly)
* **retentionInterval**: string (Required)
* **scriptContent**: string
* **status**: ScriptStatus (ReadOnly)
* **storageAccountSettings**: StorageAccountConfiguration
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
* **error**: ErrorResponse
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
* **properties**: AzurePowerShellScriptProperties (Required)

## AzurePowerShellScriptProperties
### Properties
* **arguments**: string
* **azPowerShellVersion**: string (Required)
* **cleanupPreference**: 'Always' | 'OnExpiration' | 'OnSuccess'
* **containerSettings**: ContainerConfiguration
* **environmentVariables**: EnvironmentVariable[]
* **forceUpdateTag**: string
* **outputs**: Dictionary<string,Object> (ReadOnly)
* **primaryScriptUri**: string
* **provisioningState**: 'Canceled' | 'Creating' | 'Failed' | 'ProvisioningResources' | 'Running' | 'Succeeded' (ReadOnly)
* **retentionInterval**: string (Required)
* **scriptContent**: string
* **status**: ScriptStatus (ReadOnly)
* **storageAccountSettings**: StorageAccountConfiguration
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
* **tags**: Dictionary<string,String>

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

