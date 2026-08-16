# Microsoft.Maps @ 2020-02-01-preview

## Resource Microsoft.Maps/accounts@2020-02-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MapsAccountProperties](#mapsaccountproperties) (ReadOnly): The map account properties.
* **sku**: [Sku](#sku) (Required): The SKU of this account.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **tags**: [MapsAccountCreateParametersTags](#mapsaccountcreateparameterstags): Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). Each tag must have a key no greater than 128 characters and value no greater than 256 characters.
* **type**: 'Microsoft.Maps/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Maps/accounts/creators@2020-02-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreatorProperties](#creatorproperties) (ReadOnly): The Creator resource properties.
* **tags**: [CreatorCreateParametersTags](#creatorcreateparameterstags): Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.
* **type**: 'Microsoft.Maps/accounts/creators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Maps/accounts/privateAtlases@2020-02-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateAtlasProperties](#privateatlasproperties) (ReadOnly): The Private Atlas resource properties.
* **tags**: [PrivateAtlasCreateParametersTags](#privateatlascreateparameterstags): Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.
* **type**: 'Microsoft.Maps/accounts/privateAtlases' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.Maps/accounts@2020-02-01-preview)
* **Resource**: Microsoft.Maps/accounts
* **ApiVersion**: 2020-02-01-preview
* **Output**: [MapsAccountKeys](#mapsaccountkeys)

## Function regenerateKey (Microsoft.Maps/accounts@2020-02-01-preview)
* **Resource**: Microsoft.Maps/accounts
* **ApiVersion**: 2020-02-01-preview
* **Input**: [MapsKeySpecification](#mapskeyspecification)
* **Output**: [MapsAccountKeys](#mapsaccountkeys)

## CreatorCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CreatorProperties
### Properties
* **provisioningState**: string: The state of the resource provisioning, terminal states: Succeeded, Failed, Canceled

## MapsAccountCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MapsAccountKeys
### Properties
* **id**: string (ReadOnly): The full Azure resource identifier of the Maps Account.
* **primaryKey**: string (ReadOnly): The primary key for accessing the Maps REST APIs.
* **secondaryKey**: string (ReadOnly): The secondary key for accessing the Maps REST APIs.

## MapsAccountProperties
### Properties
* **x-ms-client-id**: string: A unique identifier for the maps account

## MapsKeySpecification
### Properties
* **keyType**: 'primary' | 'secondary' | string (Required): Whether the operation refers to the primary or secondary key.

## PrivateAtlasCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateAtlasProperties
### Properties
* **provisioningState**: string: The state of the resource provisioning, terminal states: Succeeded, Failed, Canceled

## Sku
### Properties
* **name**: string (Required): The name of the SKU, in standard format (such as S0).
* **tier**: string (ReadOnly): Gets the sku tier. This is based on the SKU name.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

