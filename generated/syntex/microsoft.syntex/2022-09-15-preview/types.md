# Microsoft.Syntex @ 2022-09-15-preview

## Resource Microsoft.Syntex/documentProcessors@2022-09-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DocumentProcessorProperties](#documentprocessorproperties): Document processor properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Syntex/documentProcessors' (ReadOnly, DeployTimeConstant): The resource type

## DocumentProcessorProperties
### Properties
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The managed resource provisioning state.
* **spoTenantId**: string (Required): The ID (GUID) of an SharePoint Online (SPO) tenant associated with this document processor resource
* **spoTenantUrl**: string (Required): The URL of an SharePoint Online (SPO) tenant associated with this document processor resource

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

