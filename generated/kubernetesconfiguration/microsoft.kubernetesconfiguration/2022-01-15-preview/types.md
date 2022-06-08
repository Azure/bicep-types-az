# Microsoft.KubernetesConfiguration @ 2022-01-15-preview

## Resource Microsoft.KubernetesConfiguration/extensionTypes@2022-01-15-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2022-01-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExtensionTypeProperties](#extensiontypeproperties) (ReadOnly): Properties of the connected cluster.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.KubernetesConfiguration/extensionTypes' (ReadOnly, DeployTimeConstant): The resource type

## ClusterScopeSettings
### Properties
* **allowMultipleInstances**: bool (ReadOnly): Describes if multiple instances of the extension are allowed
* **defaultReleaseNamespace**: string (ReadOnly): Default extension release namespace

## ExtensionTypeProperties
### Properties
* **clusterTypes**: string[] (ReadOnly): Cluster types
* **releaseTrains**: string[] (ReadOnly): Extension release train: preview or stable
* **supportedScopes**: [SupportedScopes](#supportedscopes) (ReadOnly): Extension scopes

## SupportedScopes
### Properties
* **clusterScopeSettings**: [ClusterScopeSettings](#clusterscopesettings) (ReadOnly): Extension scope settings
* **defaultScope**: string (ReadOnly): Default extension scopes: cluster or namespace

## SystemData
### Properties
* **createdAt**: string (ReadOnly): The timestamp of resource creation (UTC).
* **createdBy**: string (ReadOnly): The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string (ReadOnly): The type of identity that created the resource.
* **lastModifiedAt**: string (ReadOnly): The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string (ReadOnly): The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string (ReadOnly): The type of identity that created the resource.

