# Microsoft.Solutions @ 2016-09-01-preview

## Resource Microsoft.Solutions/applianceDefinitions@2016-09-01-preview (Async)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string: Resource location
* **managedBy**: string: ID of the resource that manages this resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplianceDefinitionProperties](#appliancedefinitionproperties) (Required): The appliance definition properties.
* **sku**: [Sku](#sku): SKU for the resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Solutions/applianceDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Solutions/appliances@2016-09-01-preview (Async)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **kind**: string: The kind of the appliance. Allowed values are MarketPlace and ServiceCatalog.
* **location**: string: Resource location
* **managedBy**: string: ID of the resource that manages this resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan): Plan for the appliance.
* **properties**: [ApplianceProperties](#applianceproperties): The appliance properties.
* **sku**: [Sku](#sku): SKU for the resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Solutions/appliances' (ReadOnly, DeployTimeConstant): The resource type

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned': The identity type.

## ApplianceDefinitionProperties
### Properties
* **artifacts**: [ApplianceArtifact](#applianceartifact)[]: The collection of appliance artifacts. The portal will use the files specified as artifacts to construct the user experience of creating an appliance from an appliance definition.
* **authorizations**: [ApplianceProviderAuthorization](#applianceproviderauthorization)[] (Required): The appliance provider authorizations.
* **description**: string: The appliance definition description.
* **displayName**: string: The appliance definition display name.
* **lockLevel**: 'CanNotDelete' | 'None' | 'ReadOnly' (Required): The appliance lock level.
* **packageFileUri**: string (Required): The appliance definition package file Uri.

## ApplianceArtifact
### Properties
* **name**: string: The appliance artifact name.
* **type**: 'Custom' | 'Template': The appliance artifact type.
* **uri**: string: The appliance artifact blob uri.

## ApplianceProviderAuthorization
### Properties
* **principalId**: string (Required): The provider's principal identifier. This is the identity that the provider will use to call ARM to manage the appliance resources.
* **roleDefinitionId**: string (Required): The provider's role definition identifier. This role will define all the permissions that the provider must have on the appliance's container resource group. This role definition cannot have permission to delete the resource group.

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

## ApplianceProperties
### Properties
* **applianceDefinitionId**: string: The fully qualified path of appliance definition Id.
* **managedResourceGroupId**: string (Required): The managed resource group Id.
* **outputs**: any (ReadOnly): Any object
* **parameters**: any: Any object
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning status of the appliance.
* **uiDefinitionUri**: string: The blob URI where the UI definition file is located.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

