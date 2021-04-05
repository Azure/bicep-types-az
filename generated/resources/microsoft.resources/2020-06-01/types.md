# Microsoft.Resources @ 2020-06-01

## Resource Microsoft.Resources/deployments@2020-06-01
* **Valid Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: the location of the deployment.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentProperties](#deploymentproperties) (Required): Deployment properties with additional details.
* **tags**: [DeploymentTags](#deploymenttags): Deployment tags
* **type**: 'Microsoft.Resources/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Resources/resourceGroups@2020-06-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource group. It cannot be changed after the resource group has been created. It must be one of the supported Azure locations.
* **managedBy**: string: The ID of the resource that manages this resource group.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ResourceGroupProperties](#resourcegroupproperties): The resource group properties.
* **tags**: [ResourceGroupTags](#resourcegrouptags): The tags attached to the resource group.
* **type**: 'Microsoft.Resources/resourceGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Resources/tags@2020-06-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [Tags](#tags) (Required): A dictionary of name and value pairs.
* **type**: 'Microsoft.Resources/tags' (ReadOnly, DeployTimeConstant): The resource type

## DeploymentProperties
### Properties
* **correlationId**: string (ReadOnly): The correlation ID of the deployment.
* **debugSetting**: [DebugSetting](#debugsetting): The debug setting.
* **dependencies**: [Dependency](#dependency)[] (ReadOnly): The list of deployment dependencies.
* **duration**: string (ReadOnly): The duration of the template deployment.
* **error**: [ErrorResponse](#errorresponse) (ReadOnly): Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.)
* **expressionEvaluationOptions**: [ExpressionEvaluationOptions](#expressionevaluationoptions) (WriteOnly)
* **mode**: 'Complete' | 'Incremental' (Required): The mode that is used to deploy resources. This value can be either Incremental or Complete. In Incremental mode, resources are deployed without deleting existing resources that are not included in the template. In Complete mode, resources are deployed and existing resources in the resource group that are not included in the template are deleted. Be careful when using Complete mode as you may unintentionally delete resources.
* **onErrorDeployment**: [OnErrorDeployment](#onerrordeployment): Deployment on error behavior with additional details.
* **outputResources**: [ResourceReference](#resourcereference)[] (ReadOnly): Array of provisioned resources.
* **outputs**: any (ReadOnly): Any object
* **parameters**: any: Any object
* **parametersLink**: [ParametersLink](#parameterslink): Entity representing the reference to the deployment parameters.
* **providers**: [Provider](#provider)[] (ReadOnly): The list of resource providers needed for the deployment.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' (ReadOnly): Denotes the state of provisioning.
* **template**: any (WriteOnly)
* **templateHash**: string (ReadOnly): The hash produced for the template.
* **templateLink**: [TemplateLink](#templatelink): Entity representing the reference to the template.
* **timestamp**: string (ReadOnly): The timestamp of the template deployment.
* **validatedResources**: [ResourceReference](#resourcereference)[] (ReadOnly): Array of validated resources.

## DebugSetting
### Properties
* **detailLevel**: string: Specifies the type of information to log for debugging. The permitted values are none, requestContent, responseContent, or both requestContent and responseContent separated by a comma. The default is none. When setting this value, carefully consider the type of information you are passing in during deployment. By logging information about the request or response, you could potentially expose sensitive data that is retrieved through the deployment operations.

## Dependency
### Properties
* **dependsOn**: [BasicDependency](#basicdependency)[] (ReadOnly): The list of dependencies.
* **id**: string (ReadOnly): The ID of the dependency.
* **resourceName**: string (ReadOnly): The dependency resource name.
* **resourceType**: string (ReadOnly): The dependency resource type.

## BasicDependency
### Properties
* **id**: string (ReadOnly): The ID of the dependency.
* **resourceName**: string (ReadOnly): The dependency resource name.
* **resourceType**: string (ReadOnly): The dependency resource type.

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

## ExpressionEvaluationOptions
### Properties
* **scope**: 'Inner' | 'NotSpecified' | 'Outer' (WriteOnly)

## OnErrorDeployment
### Properties
* **deploymentName**: string: The deployment to be used on error case.
* **provisioningState**: string (ReadOnly): The state of the provisioning for the on error deployment.
* **type**: 'LastSuccessful' | 'SpecificDeployment': The deployment on error behavior type. Possible values are LastSuccessful and SpecificDeployment.

## ResourceReference
### Properties
* **id**: string (ReadOnly): The fully qualified resource Id.

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

## ProviderResourceType
### Properties
* **aliases**: [Alias](#alias)[] (ReadOnly): The aliases that are supported by this resource type.
* **apiProfiles**: [ApiProfile](#apiprofile)[] (ReadOnly): The API profiles for the resource provider.
* **apiVersions**: string[] (ReadOnly): The API version.
* **capabilities**: string (ReadOnly): The additional capabilities offered by this resource type.
* **defaultApiVersion**: string (ReadOnly): The default API version.
* **locations**: string[] (ReadOnly): The collection of locations where this resource type can be created.
* **properties**: [ProviderResourceTypeProperties](#providerresourcetypeproperties) (ReadOnly): The properties.
* **resourceType**: string (ReadOnly): The resource type.

## Alias
### Properties
* **defaultMetadata**: [AliasPathMetadata](#aliaspathmetadata) (ReadOnly)
* **defaultPath**: string (ReadOnly): The default path for an alias.
* **defaultPattern**: [AliasPattern](#aliaspattern) (ReadOnly): The type of the pattern for an alias path.
* **name**: string (ReadOnly): The alias name.
* **paths**: [AliasPath](#aliaspath)[] (ReadOnly): The paths for an alias.
* **type**: 'Mask' | 'NotSpecified' | 'PlainText' (ReadOnly): The type of the alias.

## AliasPathMetadata
### Properties
* **attributes**: 'Modifiable' | 'None' (ReadOnly): The attributes of the token that the alias path is referring to.
* **type**: 'Any' | 'Array' | 'Boolean' | 'Integer' | 'NotSpecified' | 'Number' | 'Object' | 'String' (ReadOnly): The type of the token that the alias path is referring to.

## AliasPattern
### Properties
* **phrase**: string (ReadOnly): The alias pattern phrase.
* **type**: 'Extract' | 'NotSpecified' (ReadOnly): The type of alias pattern
* **variable**: string (ReadOnly): The alias pattern variable.

## AliasPath
### Properties
* **apiVersions**: string[] (ReadOnly): The API versions.
* **metadata**: [AliasPathMetadata](#aliaspathmetadata) (ReadOnly)
* **path**: string (ReadOnly): The path of an alias.
* **pattern**: [AliasPattern](#aliaspattern) (ReadOnly): The type of the pattern for an alias path.

## ApiProfile
### Properties
* **apiVersion**: string (ReadOnly): The API version.
* **profileVersion**: string (ReadOnly): The profile version.

## ProviderResourceTypeProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TemplateLink
### Properties
* **contentVersion**: string: If included, must match the ContentVersion in the template.
* **id**: string: The resource id of a Template Spec. Use either the id or uri property, but not both.
* **relativePath**: string: Applicable only if this template link references a Template Spec. This relativePath property can optionally be used to reference a Template Spec artifact by path.
* **uri**: string: The URI of the template to deploy. Use either the uri or id property, but not both.

## DeploymentTags
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

## Tags
### Properties
* **tags**: [Tags](#tags): Dictionary of <string>

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

