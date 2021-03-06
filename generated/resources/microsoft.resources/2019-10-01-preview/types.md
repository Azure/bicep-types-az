# Microsoft.Resources @ 2019-10-01-preview

## Resource Microsoft.Resources/deploymentScripts@2019-10-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity) (Required): Managed identity generic object.
* **location**: string (Required): The location of the ACI and the storage account for the deployment script.
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [DeploymentScriptTags](#deploymentscripttags): Resource tags.
* **type**: 'Microsoft.Resources/deploymentScripts' (ReadOnly, DeployTimeConstant): The resource type
### AzureCliScript
#### Properties
* **kind**: 'AzureCLI' (Required): Type of the script.
* **properties**: [AzureCliScriptProperties](#azurecliscriptproperties) (Required): Properties of the Azure CLI script object.

### AzurePowerShellScript
#### Properties
* **kind**: 'AzurePowerShell' (Required): Type of the script.
* **properties**: [AzurePowerShellScriptProperties](#azurepowershellscriptproperties) (Required): Properties of the Azure PowerShell script object.


## ManagedServiceIdentity
### Properties
* **tenantId**: string (ReadOnly): ID of the Azure Active Directory.
* **type**: 'UserAssigned': Type of the managed identity.
* **userAssignedIdentities**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities): The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity.

## ManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): Client App Id associated with this identity.
* **principalId**: string (ReadOnly): Azure Active Directory principal ID associated with this identity.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## DeploymentScriptTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AzureCliScriptProperties
### Properties
* **arguments**: string: Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location 'West US 2'
* **azCliVersion**: string (Required): Azure CLI module version to be used.
* **cleanupPreference**: 'Always' | 'OnExpiration' | 'OnSuccess': The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'.
* **containerSettings**: [ContainerConfiguration](#containerconfiguration): Settings to customize ACI container instance.
* **environmentVariables**: [EnvironmentVariable](#environmentvariable)[]: The environment variables to pass over to the script.
* **forceUpdateTag**: string: Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID.
* **outputs**: [DeploymentScriptPropertiesBaseOutputs](#deploymentscriptpropertiesbaseoutputs) (ReadOnly): List of script outputs.
* **primaryScriptUri**: string: Uri for the script. This is the entry point for the external script.
* **provisioningState**: 'Canceled' | 'Creating' | 'Failed' | 'ProvisioningResources' | 'Running' | 'Succeeded' (ReadOnly): State of the script execution. This only appears in the response.
* **retentionInterval**: string (Required): Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P1D means one day).
* **scriptContent**: string: Script body.
* **status**: [ScriptStatus](#scriptstatus) (ReadOnly): Generic object modeling results of script execution.
* **storageAccountSettings**: [StorageAccountConfiguration](#storageaccountconfiguration): Settings to use an existing storage account. Valid storage account kinds are: Storage, StorageV2 and FileStorage
* **supportingScriptUris**: string[]: Supporting files for the external script.
* **timeout**: string: Maximum allowed script execution time specified in ISO 8601 format. Default value is P1D

## ContainerConfiguration
### Properties
* **containerGroupName**: string: Container group name, if not specified then the name will get auto-generated. Not specifying a 'containerGroupName' indicates the system to generate a unique name which might end up flagging an Azure Policy as non-compliant. Use 'containerGroupName' when you have an Azure Policy that expects a specific naming convention or when you want to fully control the name. 'containerGroupName' property must be between 1 and 63 characters long, must contain only lowercase letters, numbers, and dashes and it cannot start or end with a dash and consecutive dashes are not allowed. To specify a 'containerGroupName', add the following object to properties: { "containerSettings": { "containerGroupName": "contoso-container" } }. If you do not want to specify a 'containerGroupName' then do not add 'containerSettings' property.

## EnvironmentVariable
### Properties
* **name**: string (Required): The name of the environment variable.
* **secureValue**: string: The value of the secure environment variable.
* **value**: string: The value of the environment variable.

## DeploymentScriptPropertiesBaseOutputs
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ScriptStatus
### Properties
* **containerInstanceId**: string (ReadOnly): ACI resource Id.
* **endTime**: string (ReadOnly): End time of the script execution.
* **error**: [ErrorResponse](#errorresponse): Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.)
* **expirationTime**: string (ReadOnly): Time the deployment script resource will expire.
* **startTime**: string (ReadOnly): Start time of the script execution.
* **storageAccountId**: string (ReadOnly): Storage account resource Id.

## ErrorResponse
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorResponse](#errorresponse)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): Any object
* **type**: string (ReadOnly): The additional info type.

## StorageAccountConfiguration
### Properties
* **storageAccountKey**: string: The storage account access key.
* **storageAccountName**: string: The storage account name.

## AzurePowerShellScriptProperties
### Properties
* **arguments**: string: Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location 'West US 2'
* **azPowerShellVersion**: string (Required): Azure PowerShell module version to be used.
* **cleanupPreference**: 'Always' | 'OnExpiration' | 'OnSuccess': The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'.
* **containerSettings**: [ContainerConfiguration](#containerconfiguration): Settings to customize ACI container instance.
* **environmentVariables**: [EnvironmentVariable](#environmentvariable)[]: The environment variables to pass over to the script.
* **forceUpdateTag**: string: Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID.
* **outputs**: [DeploymentScriptPropertiesBaseOutputs](#deploymentscriptpropertiesbaseoutputs) (ReadOnly): List of script outputs.
* **primaryScriptUri**: string: Uri for the script. This is the entry point for the external script.
* **provisioningState**: 'Canceled' | 'Creating' | 'Failed' | 'ProvisioningResources' | 'Running' | 'Succeeded' (ReadOnly): State of the script execution. This only appears in the response.
* **retentionInterval**: string (Required): Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P1D means one day).
* **scriptContent**: string: Script body.
* **status**: [ScriptStatus](#scriptstatus) (ReadOnly): Generic object modeling results of script execution.
* **storageAccountSettings**: [StorageAccountConfiguration](#storageaccountconfiguration): Settings to use an existing storage account. Valid storage account kinds are: Storage, StorageV2 and FileStorage
* **supportingScriptUris**: string[]: Supporting files for the external script.
* **timeout**: string: Maximum allowed script execution time specified in ISO 8601 format. Default value is P1D

## DeploymentScriptPropertiesBaseOutputs
### Properties
### Additional Properties
* **Additional Properties Type**: any

