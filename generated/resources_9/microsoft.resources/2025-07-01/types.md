# Microsoft.Resources @ 2025-07-01

## Resource Microsoft.Resources/deploymentStacks@2025-07-01
* **Readable Scope(s)**: ManagementGroup, Subscription, ResourceGroup
* **Writable Scope(s)**: ManagementGroup, Subscription, ResourceGroup
### Properties
* **apiVersion**: '2025-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives. Required for subscription and management group scoped stacks. The location is inherited from the resource group for resource group scoped stacks.
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[-\w\._\(\)]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentStackProperties](#deploymentstackproperties): Deployment stack properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [DeploymentStackTags](#deploymentstacktags): Resource tags.
* **type**: 'Microsoft.Resources/deploymentStacks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Resources/deploymentStacksWhatIfResults@2025-07-01
* **Readable Scope(s)**: ManagementGroup, Subscription, ResourceGroup
* **Writable Scope(s)**: ManagementGroup, Subscription, ResourceGroup
### Properties
* **apiVersion**: '2025-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives. Required for subscription and management group scoped stacks. The location is inherited from the resource group for resource group scoped stacks.
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[-\w\._\(\)]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentStacksWhatIfResultProperties](#deploymentstackswhatifresultproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [DeploymentStacksWhatIfResultTags](#deploymentstackswhatifresulttags): Resource tags.
* **type**: 'Microsoft.Resources/deploymentStacksWhatIfResults' (ReadOnly, DeployTimeConstant): The resource type

## ActionOnUnmanage
### Properties
* **managementGroups**: 'delete' | 'detach' | string: Specifies an action for a newly unmanaged resource management group.
* **resourceGroups**: 'delete' | 'detach' | string: Specifies an action for a newly unmanaged resource group.
* **resources**: 'delete' | 'detach' | string (Required): Specifies an action for a newly unmanaged resource.
* **resourcesWithoutDeleteSupport**: 'detach' | 'fail' | string: Some resources do not support deletion.  This flag will denote how the stack should handle those resources.

## DenySettings
### Properties
* **applyToChildScopes**: bool: DenySettings will be applied to child resource scopes of every managed resource with a deny assignment.
* **excludedActions**: string[]: List of role-based management operations that are excluded from the denySettings. Up to 200 actions are permitted. If the denySetting mode is set to 'denyWriteAndDelete', then the following actions are automatically appended to 'excludedActions': '*\/read' and 'Microsoft.Authorization/locks/delete'. If the denySetting mode is set to 'denyDelete', then the following actions are automatically appended to 'excludedActions': 'Microsoft.Authorization/locks/delete'. Duplicate actions will be removed.
* **excludedPrincipals**: string[]: List of AAD principal IDs excluded from the lock. Up to 5 principals are permitted.
* **mode**: 'denyDelete' | 'denyWriteAndDelete' | 'none' | string (Required): denySettings Mode that defines denied actions.

## DeploymentExtension
### Properties
* **config**: [DeploymentExtensionConfig](#deploymentextensionconfig): The configuration used for deployment. The keys of this object should align with the extension config schema.
* **configId**: string: The configuration ID of the extension usage. It uniquely identifies a target the extension deploys to.
* **name**: string (Required): The extension name.
* **version**: string (Required): The extension version.

## DeploymentExtensionConfig
### Properties
### Additional Properties
* **Additional Properties Type**: [DeploymentExtensionConfigItem](#deploymentextensionconfigitem)

## DeploymentExtensionConfig
### Properties
### Additional Properties
* **Additional Properties Type**: [DeploymentExtensionConfigItem](#deploymentextensionconfigitem)

## DeploymentExtensionConfig
### Properties
### Additional Properties
* **Additional Properties Type**: [DeploymentExtensionConfigItem](#deploymentextensionconfigitem)

## DeploymentExtensionConfigItem
### Properties
* **keyVaultReference**: [KeyVaultParameterReference](#keyvaultparameterreference): The key vault reference of the config item.
* **type**: string (ReadOnly): The type of the value.
* **value**: any: The value of the config item. The type is determined by the extension config schema.

## DeploymentExternalInput
### Properties
* **value**: any (Required): External input value.

## DeploymentExternalInputDefinition
### Properties
* **config**: any: Configuration for the external input.
* **kind**: string (Required): The kind of external input.

## DeploymentParameter
### Properties
* **expression**: string (WriteOnly): Input expression to the parameter.
* **reference**: [KeyVaultParameterReference](#keyvaultparameterreference): Azure Key Vault parameter reference.
* **type**: string: Type of the value.
* **value**: any: Input value to the parameter.

## DeploymentStackProperties
### Properties
* **actionOnUnmanage**: [ActionOnUnmanage](#actiononunmanage) (Required): Defines the behavior of resources that are no longer managed after the Deployment stack is updated or deleted.
* **bypassStackOutOfSyncError**: bool (WriteOnly): Flag to bypass service errors that indicate the stack resource list is not correctly synchronized.
* **correlationId**: string (ReadOnly): The correlation id of the last Deployment stack upsert or delete operation. It is in GUID format and is used for tracing.
* **debugSetting**: [DeploymentStacksDebugSetting](#deploymentstacksdebugsetting): The debug setting of the deployment.
* **deletedResources**: [ResourceReference](#resourcereference)[] (ReadOnly): An array of resources that were deleted during the most recent Deployment stack update. Deleted means that the resource was removed from the template and relevant deletion operations were specified.
* **denySettings**: [DenySettings](#denysettings) (Required): Defines how resources deployed by the stack are locked.
* **deploymentExtensions**: [DeploymentExtension](#deploymentextension)[] (ReadOnly): The extensions used during deployment. Contains extension data for all extensible resources managed by the stack.
* **deploymentId**: string (ReadOnly): The resourceId of the deployment resource created by the deployment stack.
* **deploymentScope**: string: The scope at which the initial deployment should be created. If a scope is not specified, it will default to the scope of the deployment stack. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroupId}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}').
* **description**: string {maxLength: 4096}: Deployment stack description. Max length of 4096 characters.
* **detachedResources**: [ResourceReference](#resourcereference)[] (ReadOnly): An array of resources that were detached during the most recent Deployment stack update. Detached means that the resource was removed from the template, but no relevant deletion operations were specified. So, the resource still exists while no longer being associated with the stack.
* **duration**: string (ReadOnly): The duration of the last successful Deployment stack update.
* **error**: [ErrorDetail](#errordetail) (ReadOnly): The error detail.
* **extensionConfigs**: [DeploymentStackPropertiesExtensionConfigs](#deploymentstackpropertiesextensionconfigs) (WriteOnly): The deployment extension configs. Keys of this object are extension aliases as defined in the deployment template.
* **externalInputDefinitions**: [DeploymentStackPropertiesExternalInputDefinitions](#deploymentstackpropertiesexternalinputdefinitions) (WriteOnly): External input definitions, used by external tooling to define expected external input values.
* **externalInputs**: [DeploymentStackPropertiesExternalInputs](#deploymentstackpropertiesexternalinputs) (WriteOnly): External input values, used by external tooling for parameter evaluation.
* **failedResources**: [ResourceReferenceExtended](#resourcereferenceextended)[] (ReadOnly): An array of resources that failed to reach goal state during the most recent update. Each resourceId is accompanied by an error message.
* **outputs**: [DeploymentStackPropertiesOutputs](#deploymentstackpropertiesoutputs) (ReadOnly): The outputs of the deployment resource created by the deployment stack.
* **parameters**: [DeploymentStackPropertiesParameters](#deploymentstackpropertiesparameters): Name and value pairs that define the deployment parameters for the template. Use this element when providing the parameter values directly in the request, rather than linking to an existing parameter file. Use either the parametersLink property or the parameters property, but not both.
* **parametersLink**: [DeploymentStacksParametersLink](#deploymentstacksparameterslink): The URI of parameters file. Use this element to link to an existing parameters file. Use either the parametersLink property or the parameters property, but not both.
* **provisioningState**: 'canceled' | 'canceling' | 'creating' | 'deleting' | 'deletingResources' | 'deploying' | 'failed' | 'initializing' | 'running' | 'succeeded' | 'updatingDenyAssignments' | 'validating' | 'waiting' | string (ReadOnly): State of the deployment stack.
* **resources**: [ManagedResourceReference](#managedresourcereference)[] (ReadOnly): An array of resources currently managed by the deployment stack.
* **template**: [DeploymentStackPropertiesTemplate](#deploymentstackpropertiestemplate) (WriteOnly): The template content. You use this element when you want to pass the template syntax directly in the request rather than link to an existing template. It can be a JObject or well-formed JSON string. Use either the templateLink property or the template property, but not both.
* **templateLink**: [DeploymentStacksTemplateLink](#deploymentstackstemplatelink) (WriteOnly): The URI of the template. Use either the templateLink property or the template property, but not both.
* **validationLevel**: 'Provider' | 'ProviderNoRbac' | 'Template' | string: The validation level of the deployment stack

## DeploymentStackPropertiesExtensionConfigs
### Properties
### Additional Properties
* **Additional Properties Type**: [DeploymentExtensionConfig](#deploymentextensionconfig)

## DeploymentStackPropertiesExternalInputDefinitions
### Properties
### Additional Properties
* **Additional Properties Type**: [DeploymentExternalInputDefinition](#deploymentexternalinputdefinition)

## DeploymentStackPropertiesExternalInputs
### Properties
### Additional Properties
* **Additional Properties Type**: [DeploymentExternalInput](#deploymentexternalinput)

## DeploymentStackPropertiesOutputs
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DeploymentStackPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [DeploymentParameter](#deploymentparameter)

## DeploymentStackPropertiesTemplate
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DeploymentStacksDebugSetting
### Properties
* **detailLevel**: string: Specifies the type of information to log for debugging. The permitted values are none, requestContent, responseContent, or both requestContent and responseContent separated by a comma. The default is none. When setting this value, carefully consider the type of information that is being passed in during deployment. By logging information about the request or response, sensitive data that is retrieved through the deployment operations could potentially be exposed.

## DeploymentStacksDiagnostic
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[]: Additional error information.
* **code**: string (Required): The error code.
* **level**: 'error' | 'info' | 'warning' | string (Required): Denotes the additional response level.
* **message**: string (Required): The error message.
* **target**: string: The error target.

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

## DeploymentStacksWhatIfChange
### Properties
* **denySettingsChange**: [DeploymentStacksWhatIfChangeDenySettingsChange](#deploymentstackswhatifchangedenysettingschange) (Required): Predicted changes to the deployment stack deny settings.
* **deploymentScopeChange**: [DeploymentStacksWhatIfChangeDeploymentScopeChange](#deploymentstackswhatifchangedeploymentscopechange): Predicted changes to the deployment scope for the deployment stack.
* **resourceChanges**: [DeploymentStacksWhatIfResourceChange](#deploymentstackswhatifresourcechange)[] (Required): List of resource changes predicted by What-If operation.

## DeploymentStacksWhatIfChangeDenySettingsChange
### Properties
* **after**: [DenySettings](#denysettings): The predicted value after the deployment is executed.
* **before**: [DenySettings](#denysettings): The predicted value before the deployment is executed.
* **delta**: [DeploymentStacksWhatIfPropertyChange](#deploymentstackswhatifpropertychange)[]: The predicted changes to the properties."

## DeploymentStacksWhatIfChangeDeploymentScopeChange
### Properties
* **after**: string: The predicted value after the deployment is executed.
* **before**: string: The predicted value before the deployment is executed.

## DeploymentStacksWhatIfPropertyChange
### Properties
* **after**: any: The predicted value after the deployment is executed.
* **before**: any: The predicted value before the deployment is executed.
* **changeType**: 'array' | 'create' | 'delete' | 'modify' | 'noEffect' | string (Required): Type of change that will be made to the resource when the deployment is executed.
* **children**: [DeploymentStacksWhatIfPropertyChange](#deploymentstackswhatifpropertychange)[]: Nested property changes.
* **path**: string (Required): Type of change that will be made to the resource when the deployment is executed.

## DeploymentStacksWhatIfResourceChange
### Properties
* **apiVersion**: string (ReadOnly): The API version the resource was deployed with
* **changeCertainty**: 'definite' | 'potential' | string (Required): The confidence level of the predicted change.
* **changeType**: 'create' | 'delete' | 'detach' | 'modify' | 'noChange' | 'unsupported' | string (Required): Type of change that will be made to the resource when the deployment is executed.
* **denyStatusChange**: [DeploymentStacksWhatIfResourceChangeDenyStatusChange](#deploymentstackswhatifresourcechangedenystatuschange): The predicted changes to the deployment stack deny status of the resource.
* **deploymentId**: string: The resource id of the Deployment responsible for this change.
* **extension**: [DeploymentExtension](#deploymentextension) (ReadOnly): The extension the resource was deployed with.
* **id**: string (ReadOnly): The ARM Resource ID of a resource managed by the deployment stack.
* **identifiers**: [DeploymentStacksWhatIfResourceChangeIdentifiers](#deploymentstackswhatifresourcechangeidentifiers) (ReadOnly): The extensible resource identifiers.
* **managementStatusChange**: [DeploymentStacksWhatIfResourceChangeManagementStatusChange](#deploymentstackswhatifresourcechangemanagementstatuschange): The predicted changes to the deployment stack management status of the resource.
* **resourceConfigurationChanges**: [DeploymentStacksWhatIfResourceChangeResourceConfigurationChanges](#deploymentstackswhatifresourcechangeresourceconfigurationchanges): The predicted changes to the resource configuration.
* **symbolicName**: string: The symbolic name of the resource being changed.
* **type**: string (ReadOnly): The resource type.
* **unsupportedReason**: string: The explanation about why the resource is unsupported by What-If.

## DeploymentStacksWhatIfResourceChangeDenyStatusChange
### Properties
* **after**: 'denyDelete' | 'denyWriteAndDelete' | 'inapplicable' | 'none' | 'notSupported' | 'removedBySystem' | 'unknown' | string: The predicted value after the deployment is executed.
* **before**: 'denyDelete' | 'denyWriteAndDelete' | 'inapplicable' | 'none' | 'notSupported' | 'removedBySystem' | 'unknown' | string: The predicted value before the deployment is executed.

## DeploymentStacksWhatIfResourceChangeIdentifiers
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DeploymentStacksWhatIfResourceChangeManagementStatusChange
### Properties
* **after**: 'managed' | 'unknown' | 'unmanaged' | string: The predicted value after the deployment is executed.
* **before**: 'managed' | 'unknown' | 'unmanaged' | string: The predicted value before the deployment is executed.

## DeploymentStacksWhatIfResourceChangeResourceConfigurationChanges
### Properties
* **after**: [DeploymentStacksWhatIfResourceChangeResourceConfigurationChangesAfter](#deploymentstackswhatifresourcechangeresourceconfigurationchangesafter): The predicted value after the deployment is executed.
* **before**: [DeploymentStacksWhatIfResourceChangeResourceConfigurationChangesBefore](#deploymentstackswhatifresourcechangeresourceconfigurationchangesbefore): The predicted value before the deployment is executed.
* **delta**: [DeploymentStacksWhatIfPropertyChange](#deploymentstackswhatifpropertychange)[]: The predicted changes to the properties."

## DeploymentStacksWhatIfResourceChangeResourceConfigurationChangesAfter
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DeploymentStacksWhatIfResourceChangeResourceConfigurationChangesBefore
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DeploymentStacksWhatIfResultProperties
### Properties
* **actionOnUnmanage**: [ActionOnUnmanage](#actiononunmanage) (Required): Defines the behavior of resources that are no longer managed after the Deployment stack is updated or deleted.
* **changes**: [DeploymentStacksWhatIfChange](#deploymentstackswhatifchange) (ReadOnly): All of the changes predicted by the deployment stack what-if operation.
* **correlationId**: string (ReadOnly): The correlation id of the last Deployment stack upsert or delete operation. It is in GUID format and is used for tracing.
* **debugSetting**: [DeploymentStacksDebugSetting](#deploymentstacksdebugsetting): The debug setting of the deployment.
* **denySettings**: [DenySettings](#denysettings) (Required): Defines how resources deployed by the stack are locked.
* **deploymentScope**: string: The scope at which the initial deployment should be created. If a scope is not specified, it will default to the scope of the deployment stack. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroupId}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}').
* **deploymentStackLastModified**: string (ReadOnly): The timestamp for when the deployment stack was last modified. This can be used to determine if the what-if data is still current.
* **deploymentStackResourceId**: string (Required): The deployment stack id to use as the basis for comparison.
* **description**: string {maxLength: 4096}: Deployment stack description. Max length of 4096 characters.
* **diagnostics**: [DeploymentStacksDiagnostic](#deploymentstacksdiagnostic)[] (ReadOnly): List of resource diagnostics detected by What-If operation.
* **error**: [ErrorDetail](#errordetail) (ReadOnly): The error detail.
* **extensionConfigs**: [DeploymentStacksWhatIfResultPropertiesExtensionConfigs](#deploymentstackswhatifresultpropertiesextensionconfigs) (WriteOnly): The deployment extension configs. Keys of this object are extension aliases as defined in the deployment template.
* **externalInputDefinitions**: [DeploymentStacksWhatIfResultPropertiesExternalInputDefinitions](#deploymentstackswhatifresultpropertiesexternalinputdefinitions) (WriteOnly): External input definitions, used by external tooling to define expected external input values.
* **externalInputs**: [DeploymentStacksWhatIfResultPropertiesExternalInputs](#deploymentstackswhatifresultpropertiesexternalinputs) (WriteOnly): External input values, used by external tooling for parameter evaluation.
* **parameters**: [DeploymentStacksWhatIfResultPropertiesParameters](#deploymentstackswhatifresultpropertiesparameters): Name and value pairs that define the deployment parameters for the template. Use this element when providing the parameter values directly in the request, rather than linking to an existing parameter file. Use either the parametersLink property or the parameters property, but not both.
* **parametersLink**: [DeploymentStacksParametersLink](#deploymentstacksparameterslink): The URI of parameters file. Use this element to link to an existing parameters file. Use either the parametersLink property or the parameters property, but not both.
* **provisioningState**: 'canceled' | 'canceling' | 'creating' | 'deleting' | 'deletingResources' | 'deploying' | 'failed' | 'initializing' | 'running' | 'succeeded' | 'updatingDenyAssignments' | 'validating' | 'waiting' | string (ReadOnly): State of the deployment stack.
* **retentionInterval**: string (Required): The interval to persist the deployment stack what-if result in ISO 8601 format.
* **template**: [DeploymentStacksWhatIfResultPropertiesTemplate](#deploymentstackswhatifresultpropertiestemplate) (WriteOnly): The template content. You use this element when you want to pass the template syntax directly in the request rather than link to an existing template. It can be a JObject or well-formed JSON string. Use either the templateLink property or the template property, but not both.
* **templateLink**: [DeploymentStacksTemplateLink](#deploymentstackstemplatelink) (WriteOnly): The URI of the template. Use either the templateLink property or the template property, but not both.
* **validationLevel**: 'Provider' | 'ProviderNoRbac' | 'Template' | string: The validation level of the deployment stack

## DeploymentStacksWhatIfResultPropertiesExtensionConfigs
### Properties
### Additional Properties
* **Additional Properties Type**: [DeploymentExtensionConfig](#deploymentextensionconfig)

## DeploymentStacksWhatIfResultPropertiesExternalInputDefinitions
### Properties
### Additional Properties
* **Additional Properties Type**: [DeploymentExternalInputDefinition](#deploymentexternalinputdefinition)

## DeploymentStacksWhatIfResultPropertiesExternalInputs
### Properties
### Additional Properties
* **Additional Properties Type**: [DeploymentExternalInput](#deploymentexternalinput)

## DeploymentStacksWhatIfResultPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [DeploymentParameter](#deploymentparameter)

## DeploymentStacksWhatIfResultPropertiesTemplate
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DeploymentStacksWhatIfResultTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DeploymentStackTags
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

## KeyVaultParameterReference
### Properties
* **keyVault**: [KeyVaultReference](#keyvaultreference) (Required): Azure Key Vault reference.
* **secretName**: string (Required): Azure Key Vault secret name.
* **secretVersion**: string: Azure Key Vault secret version.

## KeyVaultReference
### Properties
* **id**: string (Required): Azure Key Vault resourceId.

## ManagedResourceReference
### Properties
* **apiVersion**: string (ReadOnly): The API version the resource was deployed with
* **denyStatus**: 'denyDelete' | 'denyWriteAndDelete' | 'inapplicable' | 'none' | 'notSupported' | 'removedBySystem' | 'unknown' | string: denyAssignment settings applied to the resource.
* **extension**: [DeploymentExtension](#deploymentextension) (ReadOnly): The extension the resource was deployed with.
* **id**: string (ReadOnly): The ARM Resource ID of a resource managed by the deployment stack.
* **identifiers**: [ResourceReferenceIdentifiers](#resourcereferenceidentifiers) (ReadOnly): The extensible resource identifiers.
* **status**: 'deleteFailed' | 'managed' | 'removeDenyFailed' | string: Current management state of the resource in the deployment stack.
* **type**: string (ReadOnly): The resource type.

## ResourceReference
### Properties
* **apiVersion**: string (ReadOnly): The API version the resource was deployed with
* **extension**: [DeploymentExtension](#deploymentextension) (ReadOnly): The extension the resource was deployed with.
* **id**: string (ReadOnly): The ARM Resource ID of a resource managed by the deployment stack.
* **identifiers**: [ResourceReferenceIdentifiers](#resourcereferenceidentifiers) (ReadOnly): The extensible resource identifiers.
* **type**: string (ReadOnly): The resource type.

## ResourceReferenceExtended
### Properties
* **apiVersion**: string (ReadOnly): The API version the resource was deployed with
* **error**: [ErrorDetail](#errordetail) (ReadOnly): The error detail.
* **extension**: [DeploymentExtension](#deploymentextension) (ReadOnly): The extension the resource was deployed with.
* **id**: string (ReadOnly): The ARM Resource ID of a resource managed by the deployment stack.
* **identifiers**: [ResourceReferenceExtendedIdentifiers](#resourcereferenceextendedidentifiers) (ReadOnly): The extensible resource identifiers.
* **type**: string (ReadOnly): The resource type.

## ResourceReferenceExtendedIdentifiers
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ResourceReferenceIdentifiers
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ResourceReferenceIdentifiers
### Properties
### Additional Properties
* **Additional Properties Type**: any

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

