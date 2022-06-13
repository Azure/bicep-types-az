# Microsoft.MixedReality @ 2021-03-01-preview

## Resource Microsoft.MixedReality/objectAnchorsAccounts@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ObjectAnchorsAccountIdentity](#objectanchorsaccountidentity)
* **kind**: [Sku](#sku): The kind of account, if supported
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [Identity](#identity): The plan associated with this account
* **properties**: [MixedRealityAccountProperties](#mixedrealityaccountproperties): Property bag.
* **sku**: [Sku](#sku): The sku associated with this account
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to an object anchors account.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MixedReality/objectAnchorsAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MixedReality/remoteRenderingAccounts@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity associated with this account
* **kind**: [Sku](#sku): The kind of account, if supported
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [Identity](#identity): The plan associated with this account
* **properties**: [MixedRealityAccountProperties](#mixedrealityaccountproperties): Property bag.
* **sku**: [Sku](#sku): The sku associated with this account
* **systemData**: [SystemData](#systemdata) (ReadOnly): System metadata for this account
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MixedReality/remoteRenderingAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MixedReality/spatialAnchorsAccounts@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity associated with this account
* **kind**: [Sku](#sku): The kind of account, if supported
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [Identity](#identity): The plan associated with this account
* **properties**: [MixedRealityAccountProperties](#mixedrealityaccountproperties): Property bag.
* **sku**: [Sku](#sku): The sku associated with this account
* **systemData**: [SystemData](#systemdata) (ReadOnly): System metadata for this account
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MixedReality/spatialAnchorsAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.MixedReality/spatialAnchorsAccounts@2021-03-01-preview)
* **Resource**: Microsoft.MixedReality/spatialAnchorsAccounts
* **ApiVersion**: 2021-03-01-preview
* **Output**: [AccountKeys](#accountkeys)

## Function listKeys (Microsoft.MixedReality/remoteRenderingAccounts@2021-03-01-preview)
* **Resource**: Microsoft.MixedReality/remoteRenderingAccounts
* **ApiVersion**: 2021-03-01-preview
* **Output**: [AccountKeys](#accountkeys)

## Function listKeys (Microsoft.MixedReality/objectAnchorsAccounts@2021-03-01-preview)
* **Resource**: Microsoft.MixedReality/objectAnchorsAccounts
* **ApiVersion**: 2021-03-01-preview
* **Output**: [AccountKeys](#accountkeys)

## AccountKeys
### Properties
* **primaryKey**: string (ReadOnly): value of primary key.
* **secondaryKey**: string (ReadOnly): value of secondary key.

## AccountKeys
### Properties
* **primaryKey**: string (ReadOnly): value of primary key.
* **secondaryKey**: string (ReadOnly): value of secondary key.

## AccountKeys
### Properties
* **primaryKey**: string (ReadOnly): value of primary key.
* **secondaryKey**: string (ReadOnly): value of secondary key.

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned': The identity type.

## MixedRealityAccountProperties
### Properties
* **accountDomain**: string (ReadOnly): Correspond domain name of certain Spatial Anchors Account
* **accountId**: string (ReadOnly): unique id of certain account.
* **storageAccountName**: string: The name of the storage account associated with this accountId

## ObjectAnchorsAccountIdentity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned': The identity type.

## Sku
### Properties
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU. Ex - P3. It is typically a letter+number code
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard': This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

