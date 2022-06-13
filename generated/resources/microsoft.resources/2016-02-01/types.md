# Microsoft.Resources @ 2016-02-01

## Resource Microsoft.Resources/deployments@2016-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentProperties](#deploymentproperties): The deployment properties.
* **type**: 'Microsoft.Resources/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Resources/resourceGroups@2016-02-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2016-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource group. It cannot be changed after the resource group has been created. Has to be one of the supported Azure Locations, such as West US, East US, West Europe, East Asia, etc.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ResourceGroupProperties](#resourcegroupproperties): The resource group properties.
* **tags**: [ResourceGroupTags](#resourcegrouptags): The tags attached to the resource group.
* **type**: 'Microsoft.Resources/resourceGroups' (ReadOnly, DeployTimeConstant): The resource type

## AliasPathType
### Properties
* **apiVersions**: string[] (ReadOnly): The api versions.
* **path**: string (ReadOnly): The path of an alias.

## AliasType
### Properties
* **name**: string (ReadOnly): The alias name.
* **paths**: [AliasPathType](#aliaspathtype)[] (ReadOnly): The paths for an alias.

## BasicDependency
### Properties
* **id**: string (ReadOnly): The ID of the dependency.
* **resourceName**: string (ReadOnly): The dependency resource name.
* **resourceType**: string (ReadOnly): The dependency resource type.

## DebugSetting
### Properties
* **detailLevel**: string: The debug detail level.

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
* **error**: [ErrorResponse](#errorresponse) (ReadOnly): The deployment error.
* **mode**: 'Complete' | 'Incremental' (Required): The deployment mode.
* **outputs**: any (ReadOnly): Key/value pairs that represent deployment output.
* **parameters**: any: Deployment parameters. It can be a JObject or a well formed JSON string. Use only one of Parameters or ParametersLink.
* **parametersLink**: [ParametersLink](#parameterslink): The parameters URI. Use only one of Parameters or ParametersLink.
* **providers**: [Provider](#provider)[] (ReadOnly): The list of resource providers needed for the deployment.
* **provisioningState**: string (ReadOnly): The state of the provisioning.
* **template**: any: The template content. It can be a JObject or a well formed JSON string. Use only one of Template or TemplateLink.
* **templateLink**: [TemplateLink](#templatelink): The template URI. Use only one of Template or TemplateLink.
* **timestamp**: string (ReadOnly): The timestamp of the template deployment.

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

## ParametersLink
### Properties
* **contentVersion**: string: If included it must match the ContentVersion in the template.
* **uri**: string (Required): URI referencing the template.

## Provider
### Properties
* **id**: string (ReadOnly): The provider id.
* **namespace**: string (ReadOnly): The namespace of the provider.
* **registrationState**: string (ReadOnly): The registration state of the provider.
* **resourceTypes**: [ProviderResourceType](#providerresourcetype)[] (ReadOnly): The collection of provider resource types.

## ProviderResourceType
### Properties
* **aliases**: [AliasType](#aliastype)[] (ReadOnly): The aliases that are supported by this resource type.
* **apiVersions**: string[] (ReadOnly): The api version.
* **locations**: string[] (ReadOnly): The collection of locations where this resource type can be created in.
* **properties**: [ProviderResourceTypeProperties](#providerresourcetypeproperties) (ReadOnly): The properties.
* **resourceType**: string (ReadOnly): The resource type.

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

## TemplateLink
### Properties
* **contentVersion**: string: If included it must match the ContentVersion in the template.
* **uri**: string (Required): URI referencing the template.

