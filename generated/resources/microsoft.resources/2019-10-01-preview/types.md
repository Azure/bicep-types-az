# Microsoft.Resources @ 2019-10-01-preview

## Resource Microsoft.Resources/deploymentScripts@2019-10-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity) (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [DeploymentScriptTags](#deploymentscripttags)
* **type**: 'Microsoft.Resources/deploymentScripts' (ReadOnly, DeployTimeConstant)
### AzureCliScript
#### Properties
* **kind**: 'AzureCLI' (Required)
* **properties**: [AzureCliScriptProperties](#azurecliscriptproperties) (Required)

### AzurePowerShellScript
#### Properties
* **kind**: 'AzurePowerShell' (Required)
* **properties**: [AzurePowerShellScriptProperties](#azurepowershellscriptproperties) (Required)


## ManagedServiceIdentity
### Properties
* **tenantId**: string
* **type**: 'UserAssigned'
* **userAssignedIdentities**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities)

## ManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## DeploymentScriptTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AzureCliScript
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
* **outputs**: [DeploymentScriptPropertiesBaseOutputs](#deploymentscriptpropertiesbaseoutputs) (ReadOnly)
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

## DeploymentScriptPropertiesBaseOutputs
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

## StorageAccountConfiguration
### Properties
* **storageAccountKey**: string
* **storageAccountName**: string

## AzurePowerShellScript
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
* **outputs**: [DeploymentScriptPropertiesBaseOutputs](#deploymentscriptpropertiesbaseoutputs) (ReadOnly)
* **primaryScriptUri**: string
* **provisioningState**: 'Canceled' | 'Creating' | 'Failed' | 'ProvisioningResources' | 'Running' | 'Succeeded' (ReadOnly)
* **retentionInterval**: string (Required)
* **scriptContent**: string
* **status**: [ScriptStatus](#scriptstatus) (ReadOnly)
* **storageAccountSettings**: [StorageAccountConfiguration](#storageaccountconfiguration)
* **supportingScriptUris**: string[]
* **timeout**: string

## DeploymentScriptPropertiesBaseOutputs
### Properties
### Additional Properties
* **Additional Properties Type**: any

