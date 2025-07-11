# Microsoft.Resources @ 2015-11-01

## Resource Microsoft.Resources/deployments@2015-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentPropertiesOrDeploymentPropertiesExtended](#deploymentpropertiesordeploymentpropertiesextended): Gets or sets the deployment properties.
* **type**: 'Microsoft.Resources/deployments' (ReadOnly, DeployTimeConstant): The resource type

## BasicDependency
### Properties
* **id**: string: Gets or sets the ID of the dependency.
* **resourceName**: string: Gets or sets the dependency resource name.
* **resourceType**: string: Gets or sets the dependency resource type.

## Dependency
### Properties
* **dependsOn**: [BasicDependency](#basicdependency)[]: Gets the list of dependencies.
* **id**: string: Gets or sets the ID of the dependency.
* **resourceName**: string: Gets or sets the dependency resource name.
* **resourceType**: string: Gets or sets the dependency resource type.

## DeploymentPropertiesOrDeploymentPropertiesExtended
### Properties
* **correlationId**: string (ReadOnly): Gets or sets the correlation ID of the deployment.
* **dependencies**: [Dependency](#dependency)[] (ReadOnly): Gets the list of deployment dependencies.
* **error**: [ErrorResponse](#errorresponse) (ReadOnly): The deployment error.
* **mode**: 'Complete' | 'Incremental': Gets or sets the deployment mode.
* **outputs**: any (ReadOnly): Gets or sets key/value pairs that represent deployment output.
* **parameters**: any: Deployment parameters. Use only one of Parameters or ParametersLink.
* **parametersLink**: [ParametersLink](#parameterslink): Gets or sets the URI referencing the parameters. Use only one of Parameters or ParametersLink.
* **providers**: [Provider](#provider)[] (ReadOnly): Gets the list of resource providers needed for the deployment.
* **provisioningState**: string (ReadOnly): Gets or sets the state of the provisioning.
* **template**: any: Gets or sets the template content. Use only one of Template or TemplateLink.
* **templateLink**: [TemplateLink](#templatelink): Gets or sets the URI referencing the template. Use only one of Template or TemplateLink.
* **timestamp**: string (ReadOnly): Gets or sets the timestamp of the template deployment.

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
* **id**: string: Gets or sets the provider id.
* **namespace**: string: Gets or sets the namespace of the provider.
* **registrationState**: string: Gets or sets the registration state of the provider.
* **resourceTypes**: [ProviderResourceType](#providerresourcetype)[]: Gets or sets the collection of provider resource types.

## ProviderResourceType
### Properties
* **apiVersions**: string[]: Gets or sets the api version.
* **locations**: string[]: Gets or sets the collection of locations where this resource type can be created in.
* **properties**: [ProviderResourceTypeProperties](#providerresourcetypeproperties): Gets or sets the properties.
* **resourceType**: string: Gets or sets the resource type.

## ProviderResourceTypeProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TemplateLink
### Properties
* **contentVersion**: string: If included it must match the ContentVersion in the template.
* **uri**: string (Required): URI referencing the template.

