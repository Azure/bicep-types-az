# Microsoft.Resources @ 2017-05-10

## Resource Microsoft.Resources/deployments@2017-05-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-05-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentProperties](#deploymentproperties) (Required): Deployment properties.
* **type**: 'Microsoft.Resources/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Resources/resourceGroups@2017-05-10
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2017-05-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource group. It cannot be changed after the resource group has been created. It must be one of the supported Azure locations.
* **managedBy**: string: The ID of the resource that manages this resource group.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ResourceGroupProperties](#resourcegroupproperties): The resource group properties.
* **tags**: [ResourceGroupTags](#resourcegrouptags): The tags attached to the resource group.
* **type**: 'Microsoft.Resources/resourceGroups' (ReadOnly, DeployTimeConstant): The resource type

## DeploymentProperties
### Properties
* **correlationId**: string (ReadOnly): The correlation ID of the deployment.
* **debugSetting**: [DebugSetting](#debugsetting)
* **dependencies**: [Dependency](#dependency)[] (ReadOnly): The list of deployment dependencies.
* **mode**: 'Complete' | 'Incremental' (Required): The mode that is used to deploy resources. This value can be either Incremental or Complete. In Incremental mode, resources are deployed without deleting existing resources that are not included in the template. In Complete mode, resources are deployed and existing resources in the resource group that are not included in the template are deleted. Be careful when using Complete mode as you may unintentionally delete resources.
* **outputs**: any (ReadOnly): Any object
* **parameters**: any: Any object
* **parametersLink**: [ParametersLink](#parameterslink): Entity representing the reference to the deployment parameters.
* **providers**: [Provider](#provider)[] (ReadOnly): The list of resource providers needed for the deployment.
* **provisioningState**: string (ReadOnly): The state of the provisioning.
* **template**: any: Any object
* **templateLink**: [TemplateLink](#templatelink): Entity representing the reference to the template.
* **timestamp**: string (ReadOnly): The timestamp of the template deployment.

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

## ParametersLink
### Properties
* **contentVersion**: string: If included, must match the ContentVersion in the template.
* **uri**: string (Required): The URI of the parameters file.

## Provider
### Properties
* **id**: string (ReadOnly): The provider ID.
* **namespace**: string (ReadOnly): The namespace of the resource provider.
* **registrationState**: string (ReadOnly): The registration state of the provider.
* **resourceTypes**: [ProviderResourceType](#providerresourcetype)[] (ReadOnly): The collection of provider resource types.

## ProviderResourceType
### Properties
* **aliases**: [AliasType](#aliastype)[] (ReadOnly): The aliases that are supported by this resource type.
* **apiVersions**: string[] (ReadOnly): The API version.
* **locations**: string[] (ReadOnly): The collection of locations where this resource type can be created.
* **properties**: [ProviderResourceTypeProperties](#providerresourcetypeproperties) (ReadOnly): The properties.
* **resourceType**: string (ReadOnly): The resource type.
* **zoneMappings**: [ZoneMapping](#zonemapping)[] (ReadOnly): Array of ZoneMapping

## AliasType
### Properties
* **name**: string (ReadOnly): The alias name.
* **paths**: [AliasPathType](#aliaspathtype)[] (ReadOnly): The paths for an alias.

## AliasPathType
### Properties
* **apiVersions**: string[] (ReadOnly): The API versions.
* **path**: string (ReadOnly): The path of an alias.

## ProviderResourceTypeProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ZoneMapping
### Properties
* **location**: string (ReadOnly): The location of the zone mapping.
* **zones**: string[] (ReadOnly): Array of ZoneMappingZonesItem

## TemplateLink
### Properties
* **contentVersion**: string: If included, must match the ContentVersion in the template.
* **uri**: string (Required): The URI of the template to deploy.

## ResourceGroupProperties
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state.

## ResourceGroupTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

