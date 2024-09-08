# Microsoft.Resources @ 2024-08-01

## Resource Microsoft.Resources/dataBoundaries@2024-08-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [DataBoundaryProperties](#databoundaryproperties): Data boundary properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Resources/dataBoundaries' (ReadOnly, DeployTimeConstant): The resource type

## DataBoundaryProperties
### Properties
* **dataBoundary**: 'EU' | 'Global' | 'NotDefined' | string: The data boundary definition.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Failed' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Denotes the state of provisioning.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

