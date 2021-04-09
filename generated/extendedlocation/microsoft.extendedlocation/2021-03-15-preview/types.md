# Microsoft.ExtendedLocation @ 2021-03-15-preview

## Resource Microsoft.ExtendedLocation/customLocations@2021-03-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [customLocationProperties](#customlocationproperties): Properties for a custom location.
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.ExtendedLocation/customLocations' (ReadOnly, DeployTimeConstant): The resource type

## customLocationProperties
### Properties
* **authentication**: [schemas:8_authentication](#schemas8authentication): This is optional input that contains the authentication that should be used to generate the namespace.
* **clusterExtensionIds**: string[]: Contains the reference to the add-on that contains charts to deploy CRDs and operators.
* **displayName**: string: Display name for the Custom Locations location.
* **hostResourceId**: string: Connected Cluster or AKS Cluster. The Custom Locations RP will perform a checkAccess API for listAdminCredentials permissions.
* **hostType**: 'Kubernetes': Type of host the Custom Locations is referencing (Kubernetes, etc...).
* **namespace**: string: Kubernetes namespace that will be created on the specified cluster.
* **provisioningState**: string: Provisioning State for the Custom Location.

## schemas:8_authentication
### Properties
* **type**: string: The type of the Custom Locations authentication
* **value**: string: The kubeconfig value.

## systemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

