# Microsoft.Solutions @ 2017-09-01

## Resource Microsoft.Solutions/applicationDefinitions@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string: Resource location
* **managedBy**: string: ID of the resource that manages this resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationDefinitionProperties](#applicationdefinitionproperties) (Required): The managed application definition properties.
* **sku**: [Sku](#sku): SKU for the resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Solutions/applicationDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Solutions/applications@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **kind**: string (Required): The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog.
* **location**: string: Resource location
* **managedBy**: string: ID of the resource that manages this resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan): Plan for the managed application.
* **properties**: [ApplicationProperties](#applicationproperties) (Required): The managed application properties.
* **sku**: [Sku](#sku): SKU for the resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Solutions/applications' (ReadOnly, DeployTimeConstant): The resource type

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned': The identity type.

## ApplicationDefinitionProperties
### Properties
* **artifacts**: [ApplicationArtifact](#applicationartifact)[]: The collection of managed application artifacts. The portal will use the files specified as artifacts to construct the user experience of creating a managed application from a managed application definition.
* **authorizations**: [ApplicationProviderAuthorization](#applicationproviderauthorization)[] (Required): The managed application provider authorizations.
* **createUiDefinition**: any: Any object
* **description**: string: The managed application definition description.
* **displayName**: string: The managed application definition display name.
* **isEnabled**: string: A value indicating whether the package is enabled or not.
* **lockLevel**: 'CanNotDelete' | 'None' | 'ReadOnly' (Required): The managed application lock level.
* **mainTemplate**: any: Any object
* **packageFileUri**: string: The managed application definition package file Uri. Use this element

## ApplicationArtifact
### Properties
* **name**: string: The managed application artifact name.
* **type**: 'Custom' | 'Template': The managed application artifact type.
* **uri**: string: The managed application artifact blob uri.

## ApplicationProviderAuthorization
### Properties
* **principalId**: string (Required): The provider's principal identifier. This is the identity that the provider will use to call ARM to manage the managed application resources.
* **roleDefinitionId**: string (Required): The provider's role definition identifier. This role will define all the permissions that the provider must have on the managed application's container resource group. This role definition cannot have permission to delete the resource group.

## Sku
### Properties
* **capacity**: int: The SKU capacity.
* **family**: string: The SKU family.
* **model**: string: The SKU model.
* **name**: string (Required): The SKU name.
* **size**: string: The SKU size.
* **tier**: string: The SKU tier.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Plan
### Properties
* **name**: string (Required): The plan name.
* **product**: string (Required): The product code.
* **promotionCode**: string: The promotion code.
* **publisher**: string (Required): The publisher ID.
* **version**: string (Required): The plan's version.

## ApplicationProperties
### Properties
* **applicationDefinitionId**: string: The fully qualified path of managed application definition Id.
* **managedResourceGroupId**: string (Required): The managed resource group Id.
* **outputs**: any (ReadOnly): Any object
* **parameters**: any: Any object
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning status of the managed application.
* **uiDefinitionUri**: string: The blob URI where the UI definition file is located.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

