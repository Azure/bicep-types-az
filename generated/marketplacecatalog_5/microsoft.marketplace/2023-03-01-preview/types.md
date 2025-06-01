# Microsoft.Marketplace @ 2023-03-01-preview

## Resource Microsoft.Marketplace/mysolutions@2023-03-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SolutionProperties](#solutionproperties): The Solution data structure
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource
* **type**: 'Microsoft.Marketplace/mysolutions' (ReadOnly, DeployTimeConstant): The resource type

## Product
### Properties
* **description**: string
* **displayName**: string
* **pricingTypes**: string[]
* **productType**: string
* **publisherDisplayName**: string
* **ratingAverage**: int
* **smallIconUri**: string
* **storeFronts**: string[]
* **summary**: string
* **uniqueProductId**: string

## SolutionProperties
### Properties
* **displayName**: string
* **products**: [Product](#product)[]

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC)
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource

