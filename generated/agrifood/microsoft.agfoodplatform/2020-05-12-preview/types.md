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

## FarmBeatsProperties
### Properties
* **instanceUri**: string (ReadOnly): Uri of the FarmBeats instance.
* **provisioningState**: 'Failed' | 'Succeeded' (ReadOnly): FarmBeats instance provisioning state.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

