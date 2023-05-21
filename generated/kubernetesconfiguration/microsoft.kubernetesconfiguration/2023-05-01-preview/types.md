# Microsoft.KubernetesConfiguration @ 2023-05-01-preview

## Resource Microsoft.KubernetesConfiguration/extensionTypes@2023-05-01-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExtensionTypeProperties](#extensiontypeproperties) (ReadOnly)
* **type**: 'Microsoft.KubernetesConfiguration/extensionTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KubernetesConfiguration/extensionTypes/versions@2023-05-01-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExtensionTypeVersionForReleaseTrainProperties](#extensiontypeversionforreleasetrainproperties) (ReadOnly)
* **type**: 'Microsoft.KubernetesConfiguration/extensionTypes/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KubernetesConfiguration/locations/extensionTypes@2023-05-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExtensionTypeProperties](#extensiontypeproperties) (ReadOnly)
* **type**: 'Microsoft.KubernetesConfiguration/locations/extensionTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KubernetesConfiguration/locations/extensionTypes/versions@2023-05-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExtensionTypeVersionForReleaseTrainProperties](#extensiontypeversionforreleasetrainproperties) (ReadOnly)
* **type**: 'Microsoft.KubernetesConfiguration/locations/extensionTypes/versions' (ReadOnly, DeployTimeConstant): The resource type

## ClusterScopeSettings
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [ClusterScopeSettingsProperties](#clusterscopesettingsproperties): Extension scope settings
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## ClusterScopeSettingsProperties
### Properties
* **allowMultipleInstances**: bool: Describes if multiple instances of the extension are allowed
* **defaultReleaseNamespace**: string: Default extension release namespace

## ExtensionTypeProperties
### Properties
* **description**: string: Description of the extension type
* **isManagedIdentityRequired**: bool: Should an identity for this cluster resource be created
* **isSystemExtension**: bool: Is this Extension Type a system extension.
* **planInfo**: [ExtensionTypePropertiesPlanInfo](#extensiontypepropertiesplaninfo): Plan information only for the Marketplace Extension Type.
* **publisher**: string: Name of the publisher for the Extension Type
* **supportedClusterTypes**: string[]: Cluster Types supported for this Extension Type.
* **supportedScopes**: [ExtensionTypePropertiesSupportedScopes](#extensiontypepropertiessupportedscopes): Supported Kubernetes Scopes for this Extension Type.

## ExtensionTypePropertiesPlanInfo
### Properties
* **offerId**: string: Offer or Product ID of the Marketplace Extension Type.
* **planId**: string: Plan ID of the Marketplace Extension Type.
* **publisherId**: string: Publisher ID of the Marketplace Extension Type.

## ExtensionTypePropertiesSupportedScopes
### Properties
* **clusterScopeSettings**: [ClusterScopeSettings](#clusterscopesettings): Extension scope settings
* **defaultScope**: string: The default scope of the extension type. This scope will be used if the user does not provide a scope while creating an extension.

## ExtensionTypeVersionForReleaseTrainProperties
### Properties
* **supportedClusterTypes**: string[]: A list of supported cluster types for this version of the Extension Type
* **unsupportedKubernetesVersions**: [ExtensionTypeVersionForReleaseTrainPropertiesUnsupportedKubernetesVersions](#extensiontypeversionforreleasetrainpropertiesunsupportedkubernetesversions): The list of supported Kubernetes cluster versions for this extension type
* **version**: string: The version number for the extension type

## ExtensionTypeVersionForReleaseTrainPropertiesUnsupportedKubernetesVersions
### Properties
* **appliances**: [ExtensionTypeVersionUnsupportedKubernetesMatrixItem](#extensiontypeversionunsupportedkubernetesmatrixitem)[]
* **connectedCluster**: [ExtensionTypeVersionUnsupportedKubernetesMatrixItem](#extensiontypeversionunsupportedkubernetesmatrixitem)[]
* **managedCluster**: [ExtensionTypeVersionUnsupportedKubernetesMatrixItem](#extensiontypeversionunsupportedkubernetesmatrixitem)[]
* **provisionedCluster**: [ExtensionTypeVersionUnsupportedKubernetesMatrixItem](#extensiontypeversionunsupportedkubernetesmatrixitem)[]

## ExtensionTypeVersionUnsupportedKubernetesMatrixItem
### Properties
* **distributions**: string[]: The list of Kubernetes Cluster Distribution Names not supported
* **unsupportedVersions**: string[]: The list of Kubernetes Versions not supported by the list of Kubernetes Cluster Distribution names in this object

