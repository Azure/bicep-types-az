# Microsoft.Resources @ 2015-11-01

## Resource Microsoft.Resources/deployments@2015-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentProperties](#deploymentproperties): Deployment properties.
* **type**: 'Microsoft.Resources/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Resources/resourceGroups@2015-11-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Gets or sets the location of the resource group. It cannot be changed after the resource group has been created. Has to be one of the supported Azure Locations, such as West US, East US, West Europe, East Asia, etc.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ResourceGroupProperties](#resourcegroupproperties): The resource group properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Gets or sets the tags attached to the resource group.
* **type**: 'Microsoft.Resources/resourceGroups' (ReadOnly, DeployTimeConstant): The resource type

## DeploymentProperties
### Properties
* **correlationId**: string (ReadOnly): Gets or sets the correlation ID of the deployment.
* **dependencies**: [Dependency](#dependency)[] (ReadOnly): Gets the list of deployment dependencies.
* **mode**: 'Complete' | 'Incremental': Gets or sets the deployment mode. Possible values include: 'Incremental', 'Complete'
* **outputs**: any (ReadOnly): Gets or sets key/value pairs that represent deployment output.
* **parameters**: any: Deployment parameters. Use only one of Parameters or ParametersLink.
* **parametersLink**: [ParametersLink](#parameterslink): Entity representing the reference to the deployment parameters.
* **providers**: [Provider](#provider)[] (ReadOnly): Gets the list of resource providers needed for the deployment.
* **provisioningState**: string (ReadOnly): Gets or sets the state of the provisioning.
* **template**: any: Gets or sets the template content. Use only one of Template or TemplateLink.
* **templateLink**: [TemplateLink](#templatelink): Entity representing the reference to the template.
* **timestamp**: string (ReadOnly): Gets or sets the timestamp of the template deployment.

## Dependency
### Properties
* **dependsOn**: [BasicDependency](#basicdependency)[] (ReadOnly): Gets the list of dependencies.
* **id**: string (ReadOnly): Gets or sets the ID of the dependency.
* **resourceName**: string (ReadOnly): Gets or sets the dependency resource name.
* **resourceType**: string (ReadOnly): Gets or sets the dependency resource type.

## BasicDependency
### Properties
* **id**: string (ReadOnly): Gets or sets the ID of the dependency.
* **resourceName**: string (ReadOnly): Gets or sets the dependency resource name.
* **resourceType**: string (ReadOnly): Gets or sets the dependency resource type.

## ParametersLink
### Properties
* **contentVersion**: string: If included it must match the ContentVersion in the template.
* **uri**: string (Required): URI referencing the template.

## Provider
### Properties
* **id**: string (ReadOnly): Gets or sets the provider id.
* **namespace**: string (ReadOnly): Gets or sets the namespace of the provider.
* **registrationState**: string (ReadOnly): Gets or sets the registration state of the provider.
* **resourceTypes**: [ProviderResourceType](#providerresourcetype)[] (ReadOnly): Gets or sets the collection of provider resource types.

## ProviderResourceType
### Properties
* **apiVersions**: string[] (ReadOnly): Gets or sets the api version.
* **locations**: string[] (ReadOnly): Gets or sets the collection of locations where this resource type can be created in.
* **properties**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Gets or sets the properties.
* **resourceType**: string (ReadOnly): Gets or sets the resource type.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TemplateLink
### Properties
* **contentVersion**: string: If included it must match the ContentVersion in the template.
* **uri**: string (Required): URI referencing the template.

## ResourceGroupProperties
### Properties
* **provisioningState**: string (ReadOnly): Gets resource group provisioning state.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

