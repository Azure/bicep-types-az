# Microsoft.Resources @ 2019-10-01-preview

## Resource Microsoft.Resources/deploymentScripts@2019-10-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ManagedServiceIdentity (Required)
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


## ManagedServiceIdentity
### Properties
* **tenantId**: string
* **type**: 'UserAssigned'
* **userAssignedIdentities**: Dictionary<string,UserAssignedIdentity>

## Dictionary<string,UserAssignedIdentity>
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
### Additional Properties
* **Additional Properties Type**: any

