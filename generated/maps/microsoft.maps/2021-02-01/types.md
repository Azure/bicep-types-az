# Microsoft.Maps @ 2021-02-01

## Resource Microsoft.Maps/accounts@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Gen1' | 'Gen2' | string: Get or Set Kind property.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MapsAccountProperties](#mapsaccountproperties): The map account properties.
* **sku**: [Sku](#sku) (Required): The SKU of this account.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Maps/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Maps/accounts/creators@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreatorProperties](#creatorproperties) (Required): The Creator resource properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Maps/accounts/creators' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.Maps/accounts@2021-02-01)
* **Resource**: Microsoft.Maps/accounts
* **ApiVersion**: 2021-02-01
* **Output**: [MapsAccountKeys](#mapsaccountkeys)

## CreatorProperties
### Properties
* **provisioningState**: string (ReadOnly): The state of the resource provisioning, terminal states: Succeeded, Failed, Canceled
* **storageUnits**: int (Required): The storage units to be allocated. Integer values from 1 to 100, inclusive.

## MapsAccountKeys
### Properties
* **primaryKey**: string (ReadOnly): The primary key for accessing the Maps REST APIs.
* **primaryKeyLastUpdated**: string (ReadOnly): The last updated date and time of the primary key.
* **secondaryKey**: string (ReadOnly): The secondary key for accessing the Maps REST APIs.
* **secondaryKeyLastUpdated**: string (ReadOnly): The last updated date and time of the secondary key.

## MapsAccountProperties
### Properties
* **disableLocalAuth**: bool: Allows toggle functionality on Azure Policy to disable Azure Maps local authentication support. This will disable Shared Keys authentication from any usage.
* **provisioningState**: string (ReadOnly): the state of the provisioning.
* **uniqueId**: string (ReadOnly): A unique identifier for the maps account

## Sku
### Properties
* **name**: 'G2' | 'S0' | 'S1' | string (Required): The name of the SKU, in standard format (such as S0).
* **tier**: string (ReadOnly): Gets the sku tier. This is based on the SKU name.

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

