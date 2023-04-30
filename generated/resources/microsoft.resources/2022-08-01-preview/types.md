# Microsoft.Resources @ 2022-08-01-preview

## Resource Microsoft.Resources/deploymentStacks@2022-08-01-preview
* **Valid Scope(s)**: ManagementGroup, Subscription, ResourceGroup
### Properties
* **apiVersion**: '2022-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the deployment stack. It cannot be changed after creation. It must be one of the supported Azure locations.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentStackProperties](#deploymentstackproperties): Deployment stack properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [DeploymentStackTags](#deploymentstacktags): Deployment stack resource tags.
* **type**: 'Microsoft.Resources/deploymentStacks' (ReadOnly, DeployTimeConstant): The resource type

## DenySettings
### Properties
* **applyToChildScopes**: bool: DenySettings will be applied to child scopes.
* **excludedActions**: string[]: List of role-based management operations that are excluded from the denySettings. Up to 200 actions are permitted. If the denySetting mode is set to 'denyWriteAndDelete', then the following actions are automatically appended to 'excludedActions': '*/read' and 'Microsoft.Authorization/locks/delete'. If the denySetting mode is set to 'denyDelete', then the following actions are automatically appended to 'excludedActions': 'Microsoft.Authorization/locks/delete'. Duplicate actions will be removed.
* **excludedPrincipals**: string[]: List of AAD principal IDs excluded from the lock. Up to 5 principals are permitted.
* **mode**: 'denyDelete' | 'denyWriteAndDelete' | 'none' | string: denySettings Mode.

## DeploymentStackProperties
### Properties
* **actionOnUnmanage**: [DeploymentStackPropertiesActionOnUnmanage](#deploymentstackpropertiesactiononunmanage) (Required): Defines the behavior of resources that are not managed immediately after the stack is updated.
* **debugSetting**: [DeploymentStacksDebugSetting](#deploymentstacksdebugsetting): The debug setting of the deployment.
* **deletedResources**: [ResourceReference](#resourcereference)[] (ReadOnly): An array of resources that were deleted during the most recent update.
* **denySettings**: [DenySettings](#denysettings) (Required): Defines how resources deployed by the stack are locked.
* **deploymentId**: string (ReadOnly): The resourceId of the deployment resource created by the deployment stack.
* **deploymentScope**: string: The scope at which the initial deployment should be created. If a scope is not specified, it will default to the scope of the deployment stack. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroupId}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}').
* **description**: string: Deployment stack description.
* **detachedResources**: [ResourceReference](#resourcereference)[] (ReadOnly): An array of resources that were detached during the most recent update.
* **duration**: string (ReadOnly): The duration of the deployment stack update.
* **error**: [ErrorResponse](#errorresponse): Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.).
* **failedResources**: [ResourceReferenceExtended](#resourcereferenceextended)[] (ReadOnly): An array of resources that failed to reach goal state during the most recent update.
* **outputs**: any (ReadOnly): The outputs of the underlying deployment.
* **parameters**: any: Name and value pairs that define the deployment parameters for the template. Use this element when providing the parameter values directly in the request, rather than linking to an existing parameter file. Use either the parametersLink property or the parameters property, but not both. It can be a JObject or a well formed JSON string.
* **parametersLink**: [DeploymentStacksParametersLink](#deploymentstacksparameterslink): The URI of parameters file. Use this element to link to an existing parameters file. Use either the parametersLink property or the parameters property, but not both.
* **provisioningState**: 'Canceled' | 'Canceling' | 'Creating' | 'Deleting' | 'DeletingResources' | 'Deploying' | 'Failed' | 'Locking' | 'Succeeded' | 'Validating' | 'Waiting' | string (ReadOnly): State of the deployment stack.
* **resources**: [ManagedResourceReference](#managedresourcereference)[] (ReadOnly): An array of resources currently managed by the deployment stack.
* **template**: any (WriteOnly): The template content. You use this element when you want to pass the template syntax directly in the request rather than link to an existing template. It can be a JObject or well-formed JSON string. Use either the templateLink property or the template property, but not both.
* **templateLink**: [DeploymentStacksTemplateLink](#deploymentstackstemplatelink) (WriteOnly): The URI of the template. Use either the templateLink property or the template property, but not both.

## DeploymentStackPropertiesActionOnUnmanage
### Properties
* **managementGroups**: 'delete' | 'detach' | string: Specifies the action that should be taken on the resource when the deployment stack is deleted. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state.
* **resourceGroups**: 'delete' | 'detach' | string: Specifies the action that should be taken on the resource when the deployment stack is deleted. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state.
* **resources**: 'delete' | 'detach' | string (Required): Specifies the action that should be taken on the resource when the deployment stack is deleted. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state.

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
* **id**: string: The resource id of a Template Spec. Use either the id or uri property, but not both.
* **queryString**: string: The query string (for example, a SAS token) to be used with the templateLink URI.
* **relativePath**: string: The relativePath property can be used to deploy a linked template at a location relative to the parent. If the parent template was linked with a TemplateSpec, this will reference an artifact in the TemplateSpec.  If the parent was linked with a URI, the child deployment will be a combination of the parent and relativePath URIs
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

## ErrorResponse
### Properties
* **error**: [ErrorDetail](#errordetail): The error object.

## ManagedResourceReference
### Properties
* **denyStatus**: 'None' | 'denyDelete' | 'denyWriteAndDelete' | 'inapplicable' | 'notSupported' | 'removedBySystem' | string: denyAssignment settings applied to the resource.
* **id**: string (ReadOnly): The resourceId of a resource managed by the deployment stack.
* **status**: 'Managed' | 'None' | 'deleteFailed' | 'removeDenyFailed' | string: Current management state of the resource in the deployment stack.

## ResourceReference
### Properties
* **id**: string (ReadOnly): The resourceId of a resource managed by the deployment stack.

## ResourceReferenceExtended
### Properties
* **error**: [ErrorResponse](#errorresponse): Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.).
* **id**: string (ReadOnly): The resourceId of a resource managed by the deployment stack.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

