# Microsoft.ExtendedLocation @ 2021-03-15-preview

## Resource Microsoft.ExtendedLocation/customLocations@2021-03-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomLocationProperties](#customlocationproperties): The set of properties specific to a Custom Location
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ExtendedLocation/customLocations' (ReadOnly, DeployTimeConstant): The resource type

## CustomLocationProperties
### Properties
* **authentication**: [CustomLocationPropertiesAuthentication](#customlocationpropertiesauthentication): This is optional input that contains the authentication that should be used to generate the namespace.
* **clusterExtensionIds**: string[]: Contains the reference to the add-on that contains charts to deploy CRDs and operators.
* **displayName**: string: Display name for the Custom Locations location.
* **hostResourceId**: string: Connected Cluster or AKS Cluster. The Custom Locations RP will perform a checkAccess API for listAdminCredentials permissions.
* **hostType**: 'Kubernetes' | string: Type of host the Custom Locations is referencing (Kubernetes, etc...).
* **namespace**: string: Kubernetes namespace that will be created on the specified cluster.
* **provisioningState**: string: Provisioning State for the Custom Location.

## CustomLocationPropertiesAuthentication
### Properties
* **type**: string: The type of the Custom Locations authentication
* **value**: string (WriteOnly): The kubeconfig value.

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

