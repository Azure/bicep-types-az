# Microsoft.Resources @ 2024-07-01

## Resource Microsoft.Resources/deployments@2024-07-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location to store the deployment data.
* **name**: string {minLength: 1, maxLength: 64, pattern: "^[-\w\._\(\)]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentPropertiesOrDeploymentPropertiesExtended](#deploymentpropertiesordeploymentpropertiesextended) (Required): The deployment properties.
* **tags**: [DeploymentTags](#deploymenttags): Deployment tags
* **type**: 'Microsoft.Resources/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Resources/resourceGroups@2024-07-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource group. It cannot be changed after the resource group has been created. It must be one of the supported Azure locations.
* **managedBy**: string: The ID of the resource that manages this resource group.
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[-\w\._\(\)]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ResourceGroupProperties](#resourcegroupproperties): The resource group properties.
* **tags**: [ResourceGroupTags](#resourcegrouptags): The tags attached to the resource group.
* **type**: 'Microsoft.Resources/resourceGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Resources/tags@2024-07-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [Tags](#tags) (Required): The set of tags.
* **type**: 'Microsoft.Resources/tags' (ReadOnly, DeployTimeConstant): The resource type

## Alias
### Properties
* **defaultMetadata**: [AliasPathMetadata](#aliaspathmetadata) (ReadOnly): The default alias path metadata. Applies to the default path and to any alias path that doesn't have metadata
* **defaultPath**: string: The default path for an alias.
* **defaultPattern**: [AliasPattern](#aliaspattern): The default pattern for an alias.
* **name**: string: The alias name.
* **paths**: [AliasPath](#aliaspath)[]: The paths for an alias.
* **type**: 'Mask' | 'NotSpecified' | 'PlainText': The type of the alias.

## AliasPath
### Properties
* **apiVersions**: string[]: The API versions.
* **metadata**: [AliasPathMetadata](#aliaspathmetadata) (ReadOnly): The metadata of the alias path. If missing, fall back to the default metadata of the alias.
* **path**: string: The path of an alias.
* **pattern**: [AliasPattern](#aliaspattern): The pattern for an alias path.

## AliasPathMetadata
### Properties
* **attributes**: 'Modifiable' | 'None' | string (ReadOnly): The attributes of the token that the alias path is referring to.
* **type**: 'Any' | 'Array' | 'Boolean' | 'Integer' | 'NotSpecified' | 'Number' | 'Object' | 'String' | string (ReadOnly): The type of the token that the alias path is referring to.

## AliasPattern
### Properties
* **phrase**: string: The alias pattern phrase.
* **type**: 'Extract' | 'NotSpecified': The type of alias pattern
* **variable**: string: The alias pattern variable.

## ApiProfile
### Properties
* **apiVersion**: string (ReadOnly): The API version.
* **profileVersion**: string (ReadOnly): The profile version.

## BasicDependency
### Properties
* **id**: string: The ID of the dependency.
* **resourceName**: string: The dependency resource name.
* **resourceType**: string: The dependency resource type.

## DebugSetting
### Properties
* **detailLevel**: string: Specifies the type of information to log for debugging. The permitted values are none, requestContent, responseContent, or both requestContent and responseContent separated by a comma. The default is none. When setting this value, carefully consider the type of information you are passing in during deployment. By logging information about the request or response, you could potentially expose sensitive data that is retrieved through the deployment operations.

## Dependency
### Properties
* **dependsOn**: [BasicDependency](#basicdependency)[]: The list of dependencies.
* **id**: string: The ID of the dependency.
* **resourceName**: string: The dependency resource name.
* **resourceType**: string: The dependency resource type.

## DeploymentDiagnosticsDefinition
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (Required, ReadOnly): The error code.
* **level**: 'Error' | 'Info' | 'Warning' | string (Required, ReadOnly): Denotes the additional response level.
* **message**: string (Required, ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## DeploymentParameter
### Properties
* **reference**: [KeyVaultParameterReference](#keyvaultparameterreference): Azure Key Vault parameter reference.
* **value**: any: Input value to the parameter .

## DeploymentPropertiesOrDeploymentPropertiesExtended
### Properties
* **correlationId**: string (ReadOnly): The correlation ID of the deployment.
* **debugSetting**: [DebugSetting](#debugsetting): The debug setting of the deployment.
* **dependencies**: [Dependency](#dependency)[] (ReadOnly): The list of deployment dependencies.
* **diagnostics**: [DeploymentDiagnosticsDefinition](#deploymentdiagnosticsdefinition)[] (ReadOnly): Contains diagnostic information collected during validation process.
* **duration**: string (ReadOnly): The duration of the template deployment.
* **error**: [ErrorResponse](#errorresponse) (ReadOnly): The deployment error.
* **expressionEvaluationOptions**: [ExpressionEvaluationOptions](#expressionevaluationoptions) (WriteOnly): Specifies whether template expressions are evaluated within the scope of the parent template or nested template. Only applicable to nested templates. If not specified, default value is outer.
* **mode**: 'Complete' | 'Incremental' (Required): The mode that is used to deploy resources. This value can be either Incremental or Complete. In Incremental mode, resources are deployed without deleting existing resources that are not included in the template. In Complete mode, resources are deployed and existing resources in the resource group that are not included in the template are deleted. Be careful when using Complete mode as you may unintentionally delete resources.
* **onErrorDeployment**: [OnErrorDeploymentOrOnErrorDeploymentExtended](#onerrordeploymentoronerrordeploymentextended): The deployment on error behavior.
* **outputResources**: [ResourceReference](#resourcereference)[] (ReadOnly): Array of provisioned resources.
* **outputs**: any (ReadOnly): Key/value pairs that represent deployment output.
* **parameters**: [DeploymentPropertiesParameters](#deploymentpropertiesparameters): Name and value pairs that define the deployment parameters for the template. You use this element when you want to provide the parameter values directly in the request rather than link to an existing parameter file. Use either the parametersLink property or the parameters property, but not both. It can be a JObject or a well formed JSON string.
* **parametersLink**: [ParametersLink](#parameterslink): The URI of parameters file. You use this element to link to an existing parameters file. Use either the parametersLink property or the parameters property, but not both.
* **providers**: [Provider](#provider)[] (ReadOnly): The list of resource providers needed for the deployment.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Denotes the state of provisioning.
* **template**: any (WriteOnly): The template content. You use this element when you want to pass the template syntax directly in the request rather than link to an existing template. It can be a JObject or well-formed JSON string. Use either the templateLink property or the template property, but not both.
* **templateHash**: string (ReadOnly): The hash produced for the template.
* **templateLink**: [TemplateLink](#templatelink): The URI of the template. Use either the templateLink property or the template property, but not both.
* **timestamp**: string (ReadOnly): The timestamp of the template deployment.
* **validatedResources**: [ResourceReference](#resourcereference)[] (ReadOnly): Array of validated resources.

## DeploymentPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [DeploymentParameter](#deploymentparameter)

## DeploymentTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **scope**: 'Inner' | 'NotSpecified' | 'Outer' | string: The scope to be used for evaluation of parameters, variables and functions in a nested template.

## KeyVaultParameterReference
### Properties
* **keyVault**: [KeyVaultReference](#keyvaultreference) (Required): Azure Key Vault reference.
* **secretName**: string (Required): Azure Key Vault secret name.
* **secretVersion**: string: Azure Key Vault secret version.

## KeyVaultReference
### Properties
* **id**: string (Required): Azure Key Vault resource id.

## OnErrorDeploymentOrOnErrorDeploymentExtended
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
* **namespace**: string: The namespace of the resource provider.
* **providerAuthorizationConsentState**: 'Consented' | 'NotRequired' | 'NotSpecified' | 'Required' | string: The provider authorization consent state.
* **registrationPolicy**: string (ReadOnly): The registration policy of the resource provider.
* **registrationState**: string (ReadOnly): The registration state of the resource provider.
* **resourceTypes**: [ProviderResourceType](#providerresourcetype)[] (ReadOnly): The collection of provider resource types.

## ProviderExtendedLocation
### Properties
* **extendedLocations**: string[]: The extended locations for the azure location.
* **location**: string: The azure location.
* **type**: string: The extended location type.

## ProviderResourceType
### Properties
* **aliases**: [Alias](#alias)[]: The aliases that are supported by this resource type.
* **apiProfiles**: [ApiProfile](#apiprofile)[] (ReadOnly): The API profiles for the resource provider.
* **apiVersions**: string[]: The API version.
* **capabilities**: string: The additional capabilities offered by this resource type.
* **defaultApiVersion**: string (ReadOnly): The default API version.
* **locationMappings**: [ProviderExtendedLocation](#providerextendedlocation)[]: The location mappings that are supported by this resource type.
* **locations**: string[]: The collection of locations where this resource type can be created.
* **properties**: [ProviderResourceTypeProperties](#providerresourcetypeproperties): The properties.
* **resourceType**: string: The resource type.
* **zoneMappings**: [ZoneMapping](#zonemapping)[]

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

## ZoneMapping
### Properties
* **location**: string: The location of the zone mapping.
* **zones**: string[]

