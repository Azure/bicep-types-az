# Microsoft.Resources @ 2024-03-01

## Resource Microsoft.Resources/deployments@2024-03-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location to store the deployment data.
* **name**: string {minLength: 1, maxLength: 64, pattern: "^[-\w\._\(\)]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentPropertiesOrDeploymentPropertiesExtended](#deploymentpropertiesordeploymentpropertiesextended) (Required): The deployment properties.
* **tags**: [DeploymentTags](#deploymenttags): Deployment tags
* **type**: 'Microsoft.Resources/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Resources/deploymentStacks@2024-03-01
* **Valid Scope(s)**: ManagementGroup, Subscription, ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the Deployment stack. It cannot be changed after creation. It must be one of the supported Azure locations.
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[-\w\._\(\)]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentStackProperties](#deploymentstackproperties): Deployment stack properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [DeploymentStackTags](#deploymentstacktags): Deployment stack resource tags.
* **type**: 'Microsoft.Resources/deploymentStacks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Resources/resourceGroups@2024-03-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource group. It cannot be changed after the resource group has been created. It must be one of the supported Azure locations.
* **managedBy**: string: The ID of the resource that manages this resource group.
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[-\w\._\(\)]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ResourceGroupProperties](#resourcegroupproperties): The resource group properties.
* **tags**: [ResourceGroupTags](#resourcegrouptags): The tags attached to the resource group.
* **type**: 'Microsoft.Resources/resourceGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Resources/tags@2024-03-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [Tags](#tags) (Required): The set of tags.
* **type**: 'Microsoft.Resources/tags' (ReadOnly, DeployTimeConstant): The resource type

## ActionOnUnmanage
### Properties
* **managementGroups**: 'delete' | 'detach' | string: Specifies an action for a newly unmanaged resource. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state.
* **resourceGroups**: 'delete' | 'detach' | string: Specifies an action for a newly unmanaged resource. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state.
* **resources**: 'delete' | 'detach' | string (Required): Specifies an action for a newly unmanaged resource. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state.

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

## DenySettings
### Properties
* **applyToChildScopes**: bool: DenySettings will be applied to child resource scopes of every managed resource with a deny assignment.
* **excludedActions**: string[]: List of role-based management operations that are excluded from the denySettings. Up to 200 actions are permitted. If the denySetting mode is set to 'denyWriteAndDelete', then the following actions are automatically appended to 'excludedActions': '*\/read' and 'Microsoft.Authorization/locks/delete'. If the denySetting mode is set to 'denyDelete', then the following actions are automatically appended to 'excludedActions': 'Microsoft.Authorization/locks/delete'. Duplicate actions will be removed.
* **excludedPrincipals**: string[]: List of AAD principal IDs excluded from the lock. Up to 5 principals are permitted.
* **mode**: 'denyDelete' | 'denyWriteAndDelete' | 'none' | string (Required): denySettings Mode that defines denied actions.

## Dependency
### Properties
* **dependsOn**: [BasicDependency](#basicdependency)[]: The list of dependencies.
* **id**: string: The ID of the dependency.
* **resourceName**: string: The dependency resource name.
* **resourceType**: string: The dependency resource type.

## DeploymentParameter
### Properties
* **reference**: [KeyVaultParameterReference](#keyvaultparameterreference): Azure Key Vault parameter reference.
* **value**: any: Input value to the parameter .

## DeploymentParameterAutoGenerated
### Properties
* **reference**: [KeyVaultParameterReferenceAutoGenerated](#keyvaultparameterreferenceautogenerated): Azure Key Vault parameter reference.
* **type**: string: Type of the value.
* **value**: any: Input value to the parameter.

## DeploymentPropertiesOrDeploymentPropertiesExtended
### Properties
* **correlationId**: string (ReadOnly): The correlation ID of the deployment.
* **debugSetting**: [DebugSetting](#debugsetting): The debug setting of the deployment.
* **dependencies**: [Dependency](#dependency)[] (ReadOnly): The list of deployment dependencies.
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

## DeploymentStackProperties
### Properties
* **actionOnUnmanage**: [ActionOnUnmanage](#actiononunmanage) (Required): Defines the behavior of resources that are no longer managed after the Deployment stack is updated or deleted.
* **bypassStackOutOfSyncError**: bool (WriteOnly): Flag to bypass service errors that indicate the stack resource list is not correctly synchronized.
* **correlationId**: string (ReadOnly): The correlation id of the last Deployment stack upsert or delete operation. It is in GUID format and is used for tracing.
* **debugSetting**: [DeploymentStacksDebugSetting](#deploymentstacksdebugsetting): The debug setting of the deployment.
* **deletedResources**: [ResourceReferenceAutoGenerated](#resourcereferenceautogenerated)[] (ReadOnly): An array of resources that were deleted during the most recent Deployment stack update. Deleted means that the resource was removed from the template and relevant deletion operations were specified.
* **denySettings**: [DenySettings](#denysettings) (Required): Defines how resources deployed by the stack are locked.
* **deploymentId**: string (ReadOnly): The resourceId of the deployment resource created by the deployment stack.
* **deploymentScope**: string: The scope at which the initial deployment should be created. If a scope is not specified, it will default to the scope of the deployment stack. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroupId}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}').
* **description**: string {maxLength: 4096}: Deployment stack description. Max length of 4096 characters.
* **detachedResources**: [ResourceReferenceAutoGenerated](#resourcereferenceautogenerated)[] (ReadOnly): An array of resources that were detached during the most recent Deployment stack update. Detached means that the resource was removed from the template, but no relevant deletion operations were specified. So, the resource still exists while no longer being associated with the stack.
* **duration**: string (ReadOnly): The duration of the last successful Deployment stack update.
* **error**: [ErrorDetail](#errordetail): The error detail.
* **failedResources**: [ResourceReferenceExtended](#resourcereferenceextended)[] (ReadOnly): An array of resources that failed to reach goal state during the most recent update. Each resourceId is accompanied by an error message.
* **outputs**: any (ReadOnly): The outputs of the deployment resource created by the deployment stack.
* **parameters**: [DeploymentStackPropertiesParameters](#deploymentstackpropertiesparameters): Name and value pairs that define the deployment parameters for the template. Use this element when providing the parameter values directly in the request, rather than linking to an existing parameter file. Use either the parametersLink property or the parameters property, but not both.
* **parametersLink**: [DeploymentStacksParametersLink](#deploymentstacksparameterslink): The URI of parameters file. Use this element to link to an existing parameters file. Use either the parametersLink property or the parameters property, but not both.
* **provisioningState**: 'canceled' | 'canceling' | 'creating' | 'deleting' | 'deletingResources' | 'deploying' | 'failed' | 'succeeded' | 'updatingDenyAssignments' | 'validating' | 'waiting' | string (ReadOnly): State of the deployment stack.
* **resources**: [ManagedResourceReference](#managedresourcereference)[] (ReadOnly): An array of resources currently managed by the deployment stack.
* **template**: any (WriteOnly): The template content. You use this element when you want to pass the template syntax directly in the request rather than link to an existing template. It can be a JObject or well-formed JSON string. Use either the templateLink property or the template property, but not both.
* **templateLink**: [DeploymentStacksTemplateLink](#deploymentstackstemplatelink) (WriteOnly): The URI of the template. Use either the templateLink property or the template property, but not both.

## DeploymentStackPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [DeploymentParameterAutoGenerated](#deploymentparameterautogenerated)

## DeploymentStacksDebugSetting
### Properties
* **detailLevel**: string: Specifies the type of information to log for debugging. The permitted values are none, requestContent, responseContent, or both requestContent and responseContent separated by a comma. The default is none. When setting this value, carefully consider the type of information that is being passed in during deployment. By logging information about the request or response, sensitive data that is retrieved through the deployment operations could potentially be exposed.

## DeploymentStacksParametersLink
### Properties
* **contentVersion**: string: If included, must match the ContentVersion in the template.
* **uri**: string (Required): The URI of the parameters file.

## DeploymentStacksTemplateLink
### Properties
* **contentVersion**: string: If included, must match the ContentVersion in the template.
* **id**: string: The resourceId of a Template Spec. Use either the id or uri property, but not both.
* **queryString**: string: The query string (for example, a SAS token) to be used with the templateLink URI.
* **relativePath**: string: The relativePath property can be used to deploy a linked template at a location relative to the parent. If the parent template was linked with a TemplateSpec, this will reference an artifact in the TemplateSpec.  If the parent was linked with a URI, the child deployment will be a combination of the parent and relativePath URIs.
* **uri**: string: The URI of the template to deploy. Use either the uri or id property, but not both.

## DeploymentStackTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DeploymentTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): The additional info.
* **type**: string (ReadOnly): The additional info type.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

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

## KeyVaultParameterReferenceAutoGenerated
### Properties
* **keyVault**: [KeyVaultReferenceAutoGenerated](#keyvaultreferenceautogenerated) (Required): Azure Key Vault reference.
* **secretName**: string (Required): Azure Key Vault secret name.
* **secretVersion**: string: Azure Key Vault secret version.

## KeyVaultReference
### Properties
* **id**: string (Required): Azure Key Vault resource id.

## KeyVaultReferenceAutoGenerated
### Properties
* **id**: string (Required): Azure Key Vault resourceId.

## ManagedResourceReference
### Properties
* **denyStatus**: 'denyDelete' | 'denyWriteAndDelete' | 'inapplicable' | 'none' | 'notSupported' | 'removedBySystem' | string: denyAssignment settings applied to the resource.
* **id**: string (ReadOnly): The resourceId of a resource managed by the deployment stack.
* **status**: 'deleteFailed' | 'managed' | 'removeDenyFailed' | string: Current management state of the resource in the deployment stack.

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

## ResourceReferenceAutoGenerated
### Properties
* **id**: string (ReadOnly): The resourceId of a resource managed by the deployment stack.

## ResourceReferenceExtended
### Properties
* **error**: [ErrorDetail](#errordetail): The error detail.
* **id**: string (ReadOnly): The resourceId of a resource managed by the deployment stack.

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

## ZoneMapping
### Properties
* **location**: string: The location of the zone mapping.
* **zones**: string[]

