# Microsoft.Resources @ 2020-10-01

## Resource Microsoft.Resources/deployments@2020-10-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location to store the deployment data.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentProperties](#deploymentproperties) (Required): The deployment properties.
* **tags**: [DeploymentTags](#deploymenttags): Deployment tags
* **type**: 'Microsoft.Resources/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Resources/deploymentScripts@2020-10-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Optional property. Managed identity to be used for this deployment script. Currently, only user-assigned MSI is supported.
* **location**: string (Required): The location of the ACI and the storage account for the deployment script.
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
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


## Resource Microsoft.Resources/resourceGroups@2020-10-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource group. It cannot be changed after the resource group has been created. It must be one of the supported Azure locations.
* **managedBy**: string: The ID of the resource that manages this resource group.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ResourceGroupProperties](#resourcegroupproperties): The resource group properties.
* **tags**: [ResourceGroupTags](#resourcegrouptags): The tags attached to the resource group.
* **type**: 'Microsoft.Resources/resourceGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Resources/tags@2020-10-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [Tags](#tags) (Required): The set of tags.
* **type**: 'Microsoft.Resources/tags' (ReadOnly, DeployTimeConstant): The resource type

## Alias
### Properties
* **defaultMetadata**: [AliasPathMetadata](#aliaspathmetadata) (ReadOnly): The default alias path metadata. Applies to the default path and to any alias path that doesn't have metadata
* **defaultPath**: string (ReadOnly): The default path for an alias.
* **defaultPattern**: [AliasPattern](#aliaspattern) (ReadOnly): The default pattern for an alias.
* **name**: string (ReadOnly): The alias name.
* **paths**: [AliasPath](#aliaspath)[] (ReadOnly): The paths for an alias.
* **type**: 'Mask' | 'NotSpecified' | 'PlainText' (ReadOnly): The type of the alias.

## AliasPath
### Properties
* **apiVersions**: string[] (ReadOnly): The API versions.
* **metadata**: [AliasPathMetadata](#aliaspathmetadata) (ReadOnly): The metadata of the alias path. If missing, fall back to the default metadata of the alias.
* **path**: string (ReadOnly): The path of an alias.
* **pattern**: [AliasPattern](#aliaspattern) (ReadOnly): The pattern for an alias path.

## AliasPathMetadata
### Properties
* **attributes**: 'Modifiable' | 'None' | string (ReadOnly): The attributes of the token that the alias path is referring to.
* **type**: 'Any' | 'Array' | 'Boolean' | 'Integer' | 'NotSpecified' | 'Number' | 'Object' | 'String' | string (ReadOnly): The type of the token that the alias path is referring to.

## AliasPattern
### Properties
* **phrase**: string (ReadOnly): The alias pattern phrase.
* **type**: 'Extract' | 'NotSpecified' (ReadOnly): The type of alias pattern
* **variable**: string (ReadOnly): The alias pattern variable.

## ApiProfile
### Properties
* **apiVersion**: string (ReadOnly): The API version.
* **profileVersion**: string (ReadOnly): The profile version.

## AzureCliScriptProperties
### Properties
* **arguments**: string: Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location 'West US 2'
* **azCliVersion**: string (Required): Azure CLI module version to be used.
* **cleanupPreference**: 'Always' | 'OnExpiration' | 'OnSuccess' | string: The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'.
* **containerSettings**: [ContainerConfiguration](#containerconfiguration): Container settings.
* **environmentVariables**: [EnvironmentVariable](#environmentvariable)[]: The environment variables to pass over to the script.
* **forceUpdateTag**: string: Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID.
* **outputs**: [DeploymentScriptPropertiesBaseOutputs](#deploymentscriptpropertiesbaseoutputs) (ReadOnly): List of script outputs.
* **primaryScriptUri**: string: Uri for the script. This is the entry point for the external script.
* **provisioningState**: 'Canceled' | 'Creating' | 'Failed' | 'ProvisioningResources' | 'Running' | 'Succeeded' | string (ReadOnly): State of the script execution. This only appears in the response.
* **retentionInterval**: string (Required): Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P1D means one day).
* **scriptContent**: string: Script body.
* **status**: [ScriptStatus](#scriptstatus) (ReadOnly): Contains the results of script execution.
* **storageAccountSettings**: [StorageAccountConfiguration](#storageaccountconfiguration): Storage Account settings.
* **supportingScriptUris**: string[]: Supporting files for the external script.
* **timeout**: string: Maximum allowed script execution time specified in ISO 8601 format. Default value is P1D

## AzurePowerShellScriptProperties
### Properties
* **arguments**: string: Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location 'West US 2'
* **azPowerShellVersion**: string (Required): Azure PowerShell module version to be used.
* **cleanupPreference**: 'Always' | 'OnExpiration' | 'OnSuccess' | string: The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'.
* **containerSettings**: [ContainerConfiguration](#containerconfiguration): Container settings.
* **environmentVariables**: [EnvironmentVariable](#environmentvariable)[]: The environment variables to pass over to the script.
* **forceUpdateTag**: string: Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID.
* **outputs**: [DeploymentScriptPropertiesBaseOutputs](#deploymentscriptpropertiesbaseoutputs) (ReadOnly): List of script outputs.
* **primaryScriptUri**: string: Uri for the script. This is the entry point for the external script.
* **provisioningState**: 'Canceled' | 'Creating' | 'Failed' | 'ProvisioningResources' | 'Running' | 'Succeeded' | string (ReadOnly): State of the script execution. This only appears in the response.
* **retentionInterval**: string (Required): Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P1D means one day).
* **scriptContent**: string: Script body.
* **status**: [ScriptStatus](#scriptstatus) (ReadOnly): Contains the results of script execution.
* **storageAccountSettings**: [StorageAccountConfiguration](#storageaccountconfiguration): Storage Account settings.
* **supportingScriptUris**: string[]: Supporting files for the external script.
* **timeout**: string: Maximum allowed script execution time specified in ISO 8601 format. Default value is P1D

## BasicDependency
### Properties
* **id**: string (ReadOnly): The ID of the dependency.
* **resourceName**: string (ReadOnly): The dependency resource name.
* **resourceType**: string (ReadOnly): The dependency resource type.

## ContainerConfiguration
### Properties
* **containerGroupName**: string: Container group name, if not specified then the name will get auto-generated. Not specifying a 'containerGroupName' indicates the system to generate a unique name which might end up flagging an Azure Policy as non-compliant. Use 'containerGroupName' when you have an Azure Policy that expects a specific naming convention or when you want to fully control the name. 'containerGroupName' property must be between 1 and 63 characters long, must contain only lowercase letters, numbers, and dashes and it cannot start or end with a dash and consecutive dashes are not allowed. To specify a 'containerGroupName', add the following object to properties: { "containerSettings": { "containerGroupName": "contoso-container" } }. If you do not want to specify a 'containerGroupName' then do not add 'containerSettings' property.

## DebugSetting
### Properties
* **detailLevel**: string: Specifies the type of information to log for debugging. The permitted values are none, requestContent, responseContent, or both requestContent and responseContent separated by a comma. The default is none. When setting this value, carefully consider the type of information you are passing in during deployment. By logging information about the request or response, you could potentially expose sensitive data that is retrieved through the deployment operations.

## Dependency
### Properties
* **dependsOn**: [BasicDependency](#basicdependency)[] (ReadOnly): The list of dependencies.
* **id**: string (ReadOnly): The ID of the dependency.
* **resourceName**: string (ReadOnly): The dependency resource name.
* **resourceType**: string (ReadOnly): The dependency resource type.

## DeploymentProperties
### Properties
* **correlationId**: string (ReadOnly): The correlation ID of the deployment.
* **debugSetting**: [DebugSetting](#debugsetting): The debug setting of the deployment.
* **dependencies**: [Dependency](#dependency)[] (ReadOnly): The list of deployment dependencies.
* **duration**: string (ReadOnly): The duration of the template deployment.
* **error**: [ErrorResponse](#errorresponse) (ReadOnly): The deployment error.
* **expressionEvaluationOptions**: [ExpressionEvaluationOptions](#expressionevaluationoptions) (WriteOnly): Specifies whether template expressions are evaluated within the scope of the parent template or nested template. Only applicable to nested templates. If not specified, default value is outer.
* **mode**: 'Complete' | 'Incremental' (Required): The mode that is used to deploy resources. This value can be either Incremental or Complete. In Incremental mode, resources are deployed without deleting existing resources that are not included in the template. In Complete mode, resources are deployed and existing resources in the resource group that are not included in the template are deleted. Be careful when using Complete mode as you may unintentionally delete resources.
* **onErrorDeployment**: [OnErrorDeployment](#onerrordeployment): The deployment on error behavior.
* **outputResources**: [ResourceReference](#resourcereference)[] (ReadOnly): Array of provisioned resources.
* **outputs**: any (ReadOnly): Key/value pairs that represent deployment output.
* **parameters**: any: Name and value pairs that define the deployment parameters for the template. You use this element when you want to provide the parameter values directly in the request rather than link to an existing parameter file. Use either the parametersLink property or the parameters property, but not both. It can be a JObject or a well formed JSON string.
* **parametersLink**: [ParametersLink](#parameterslink): The URI of parameters file. You use this element to link to an existing parameters file. Use either the parametersLink property or the parameters property, but not both.
* **providers**: [Provider](#provider)[] (ReadOnly): The list of resource providers needed for the deployment.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Denotes the state of provisioning.
* **template**: any (WriteOnly): The template content. You use this element when you want to pass the template syntax directly in the request rather than link to an existing template. It can be a JObject or well-formed JSON string. Use either the templateLink property or the template property, but not both.
* **templateHash**: string (ReadOnly): The hash produced for the template.
* **templateLink**: [TemplateLink](#templatelink): The URI of the template. Use either the templateLink property or the template property, but not both.
* **timestamp**: string (ReadOnly): The timestamp of the template deployment.
* **validatedResources**: [ResourceReference](#resourcereference)[] (ReadOnly): Array of validated resources.

## DeploymentScriptPropertiesBaseOutputs
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DeploymentScriptPropertiesBaseOutputs
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DeploymentScriptTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DeploymentTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EnvironmentVariable
### Properties
* **name**: string (Required): The name of the environment variable.
* **secureValue**: string: The value of the secure environment variable.
* **value**: string: The value of the environment variable.

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): The additional info.
* **type**: string (ReadOnly): The additional info type.

## ErrorResponse
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorResponse](#errorresponse)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## ExpressionEvaluationOptions
### Properties
* **scope**: 'Inner' | 'NotSpecified' | 'Outer' | string (WriteOnly): The scope to be used for evaluation of parameters, variables and functions in a nested template.

## ManagedServiceIdentity
### Properties
* **tenantId**: string (ReadOnly): ID of the Azure Active Directory.
* **type**: 'UserAssigned' | string: Type of the managed identity.
* **userAssignedIdentities**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities): The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity.

## ManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## OnErrorDeployment
### Properties
* **deploymentName**: string: The deployment to be used on error case.
* **provisioningState**: string (ReadOnly): The state of the provisioning for the on error deployment.
* **type**: 'LastSuccessful' | 'SpecificDeployment': The deployment on error behavior type. Possible values are LastSuccessful and SpecificDeployment.

## ParametersLink
### Properties
* **contentVersion**: string: If included, must match the ContentVersion in the template.
* **uri**: string (Required): The URI of the parameters file.

## Provider
### Properties
* **id**: string (ReadOnly): The provider ID.
* **namespace**: string (ReadOnly): The namespace of the resource provider.
* **registrationPolicy**: string (ReadOnly): The registration policy of the resource provider.
* **registrationState**: string (ReadOnly): The registration state of the resource provider.
* **resourceTypes**: [ProviderResourceType](#providerresourcetype)[] (ReadOnly): The collection of provider resource types.

## ProviderExtendedLocation
### Properties
* **extendedLocations**: string[] (ReadOnly): The extended locations for the azure location.
* **location**: string (ReadOnly): The azure location.
* **type**: string (ReadOnly): The extended location type.

## ProviderResourceType
### Properties
* **aliases**: [Alias](#alias)[] (ReadOnly): The aliases that are supported by this resource type.
* **apiProfiles**: [ApiProfile](#apiprofile)[] (ReadOnly): The API profiles for the resource provider.
* **apiVersions**: string[] (ReadOnly): The API version.
* **capabilities**: string (ReadOnly): The additional capabilities offered by this resource type.
* **defaultApiVersion**: string (ReadOnly): The default API version.
* **locationMappings**: [ProviderExtendedLocation](#providerextendedlocation)[] (ReadOnly): The location mappings that are supported by this resource type.
* **locations**: string[] (ReadOnly): The collection of locations where this resource type can be created.
* **properties**: [ProviderResourceTypeProperties](#providerresourcetypeproperties) (ReadOnly): The properties.
* **resourceType**: string (ReadOnly): The resource type.
* **zoneMappings**: [ZoneMapping](#zonemapping)[] (ReadOnly)

## ProviderResourceTypeProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceGroupProperties
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state.

## ResourceGroupTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceReference
### Properties
* **id**: string (ReadOnly): The fully qualified resource Id.

## ScriptStatus
### Properties
* **containerInstanceId**: string (ReadOnly): ACI resource Id.
* **endTime**: string (ReadOnly): End time of the script execution.
* **error**: [ErrorResponse](#errorresponse): Error that is relayed from the script execution.
* **expirationTime**: string (ReadOnly): Time the deployment script resource will expire.
* **startTime**: string (ReadOnly): Start time of the script execution.
* **storageAccountId**: string (ReadOnly): Storage account resource Id.

## StorageAccountConfiguration
### Properties
* **storageAccountKey**: string: The storage account access key.
* **storageAccountName**: string: The storage account name.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## Tags
### Properties
* **tags**: [Tags](#tags): Dictionary of <string>

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TemplateLink
### Properties
* **contentVersion**: string: If included, must match the ContentVersion in the template.
* **id**: string: The resource id of a Template Spec. Use either the id or uri property, but not both.
* **queryString**: string: The query string (for example, a SAS token) to be used with the templateLink URI.
* **relativePath**: string: The relativePath property can be used to deploy a linked template at a location relative to the parent. If the parent template was linked with a TemplateSpec, this will reference an artifact in the TemplateSpec.  If the parent was linked with a URI, the child deployment will be a combination of the parent and relativePath URIs
* **uri**: string: The URI of the template to deploy. Use either the uri or id property, but not both.

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): Client App Id associated with this identity.
* **principalId**: string (ReadOnly): Azure Active Directory principal ID associated with this identity.

## ZoneMapping
### Properties
* **location**: string (ReadOnly): The location of the zone mapping.
* **zones**: string[] (ReadOnly)

