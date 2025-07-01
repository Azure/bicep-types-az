# Microsoft.Resources @ 2024-03-01

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

## ActionOnUnmanage
### Properties
* **managementGroups**: 'delete' | 'detach' | string: Specifies an action for a newly unmanaged resource. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state.
* **resourceGroups**: 'delete' | 'detach' | string: Specifies an action for a newly unmanaged resource. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state.
* **resources**: 'delete' | 'detach' | string (Required): Specifies an action for a newly unmanaged resource. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state.

## DenySettings
### Properties
* **applyToChildScopes**: bool: DenySettings will be applied to child resource scopes of every managed resource with a deny assignment.
* **excludedActions**: string[]: List of role-based management operations that are excluded from the denySettings. Up to 200 actions are permitted. If the denySetting mode is set to 'denyWriteAndDelete', then the following actions are automatically appended to 'excludedActions': '*\/read' and 'Microsoft.Authorization/locks/delete'. If the denySetting mode is set to 'denyDelete', then the following actions are automatically appended to 'excludedActions': 'Microsoft.Authorization/locks/delete'. Duplicate actions will be removed.
* **excludedPrincipals**: string[]: List of AAD principal IDs excluded from the lock. Up to 5 principals are permitted.
* **mode**: 'denyDelete' | 'denyWriteAndDelete' | 'none' | string (Required): denySettings Mode that defines denied actions.

## DeploymentParameter
### Properties
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
* **deploymentId**: string (ReadOnly): The resourceId of the deployment resource created by the deployment stack.
* **deploymentScope**: string: The scope at which the initial deployment should be created. If a scope is not specified, it will default to the scope of the deployment stack. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroupId}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}').
* **description**: string {maxLength: 4096}: Deployment stack description. Max length of 4096 characters.
* **detachedResources**: [ResourceReference](#resourcereference)[] (ReadOnly): An array of resources that were detached during the most recent Deployment stack update. Detached means that the resource was removed from the template, but no relevant deletion operations were specified. So, the resource still exists while no longer being associated with the stack.
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
* **Additional Properties Type**: [DeploymentParameter](#deploymentparameter)

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
* **denyStatus**: 'denyDelete' | 'denyWriteAndDelete' | 'inapplicable' | 'none' | 'notSupported' | 'removedBySystem' | string: denyAssignment settings applied to the resource.
* **id**: string (ReadOnly): The resourceId of a resource managed by the deployment stack.
* **status**: 'deleteFailed' | 'managed' | 'removeDenyFailed' | string: Current management state of the resource in the deployment stack.

## ResourceReference
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

