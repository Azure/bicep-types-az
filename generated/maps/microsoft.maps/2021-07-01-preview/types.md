# Microsoft.Maps @ 2021-07-01-preview

## Resource Microsoft.Maps/accounts@2021-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Sets the identity property for maps account.
* **kind**: 'Gen1' | 'Gen2' | string: Get or Set Kind property.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MapsAccountProperties](#mapsaccountproperties): The map account properties.
* **sku**: [Sku](#sku) (Required): The SKU of this account.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Maps/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Maps/accounts/creators@2021-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreatorProperties](#creatorproperties) (Required): The Creator resource properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Maps/accounts/creators' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.Maps/accounts@2021-07-01-preview)
* **Resource**: Microsoft.Maps/accounts
* **ApiVersion**: 2021-07-01-preview
* **Output**: [MapsAccountKeys](#mapsaccountkeys)

## Function regenerateKey (Microsoft.Maps/accounts@2021-07-01-preview)
* **Resource**: Microsoft.Maps/accounts
* **ApiVersion**: 2021-07-01-preview
* **Input**: [MapsKeySpecification](#mapskeyspecification)
* **Output**: [MapsAccountKeys](#mapsaccountkeys)

## Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## CreatorProperties
### Properties
* **provisioningState**: string (ReadOnly): The state of the resource provisioning, terminal states: Succeeded, Failed, Canceled
* **storageUnits**: int {minValue: 1, maxValue: 100} (Required): The storage units to be allocated. Integer values from 1 to 100, inclusive.

## LinkedResource
### Properties
* **id**: string (Required): ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/accounts/{storageName}'.
* **uniqueName**: string (Required): A provided name which uniquely identifies the linked resource.

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The identity type.
* **userAssignedIdentities**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities): The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## ManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties](#components1jq1t4ischemasmanagedserviceidentitypropertiesuserassignedidentitiesadditionalproperties)

## MapsAccountKeys
### Properties
* **primaryKey**: string (ReadOnly): The primary key for accessing the Maps REST APIs.
* **primaryKeyLastUpdated**: string (ReadOnly): The last updated date and time of the primary key.
* **secondaryKey**: string (ReadOnly): The secondary key for accessing the Maps REST APIs.
* **secondaryKeyLastUpdated**: string (ReadOnly): The last updated date and time of the secondary key.

## MapsAccountProperties
### Properties
* **disableLocalAuth**: bool: Allows toggle functionality on Azure Policy to disable Azure Maps local authentication support. This will disable Shared Keys authentication from any usage.
* **linkedResources**: [LinkedResource](#linkedresource)[] {maxLength: 10}: Sets the resources to be used for Managed Identities based operations for the Map account resource.
* **provisioningState**: string (ReadOnly): The provisioning state of the Map account resource.
* **uniqueId**: string (ReadOnly): A unique identifier for the maps account

## MapsKeySpecification
### Properties
* **keyType**: 'primary' | 'secondary' | string (Required): Whether the operation refers to the primary or secondary key.

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

