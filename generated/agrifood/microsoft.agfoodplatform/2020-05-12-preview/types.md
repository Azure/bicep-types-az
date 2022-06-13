# Microsoft.AgFoodPlatform @ 2020-05-12-preview

## Resource Microsoft.AgFoodPlatform/farmBeats@2020-05-12-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-12-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FarmBeatsProperties](#farmbeatsproperties): FarmBeats ARM Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AgFoodPlatform/farmBeats' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AgFoodPlatform/farmBeats/extensions@2020-05-12-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-12-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): The ETag value to implement optimistic concurrency.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExtensionProperties](#extensionproperties) (ReadOnly): Extension resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AgFoodPlatform/farmBeats/extensions' (ReadOnly, DeployTimeConstant): The resource type

## ExtensionProperties
### Properties
* **extensionApiDocsLink**: string (ReadOnly): Extension api docs link.
* **extensionAuthLink**: string (ReadOnly): Extension auth link.
* **extensionCategory**: string (ReadOnly): Extension category. e.g. weather/sensor/satellite.
* **extensionId**: string (ReadOnly): Extension Id.
* **installedExtensionVersion**: string (ReadOnly): Installed extension version.

## FarmBeatsProperties
### Properties
* **instanceUri**: string (ReadOnly): Uri of the FarmBeats instance.
* **provisioningState**: 'Failed' | 'Succeeded' | string (ReadOnly): FarmBeats instance provisioning state.

## SystemData
### Properties
* **createdAt**: string (ReadOnly): The timestamp of resource creation (UTC).
* **createdBy**: string (ReadOnly): The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string (ReadOnly): The type of identity that created the resource.
* **lastModifiedAt**: string (ReadOnly): The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string (ReadOnly): The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string (ReadOnly): The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

