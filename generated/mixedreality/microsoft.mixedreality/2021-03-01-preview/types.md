# Microsoft.MixedReality @ 2021-03-01-preview

## Resource Microsoft.MixedReality/objectAnchorsAccounts@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [schemas:15_identity](#schemas15identity):
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MixedRealityAccountProperties](#mixedrealityaccountproperties): Common Properties shared by Mixed Reality Accounts
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.MixedReality/objectAnchorsAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MixedReality/remoteRenderingAccounts@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **kind**: [Sku](#sku): The resource model definition representing SKU
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [Identity](#identity): Identity for the resource.
* **properties**: [MixedRealityAccountProperties](#mixedrealityaccountproperties): Common Properties shared by Mixed Reality Accounts
* **sku**: [Sku](#sku): The resource model definition representing SKU
* **systemData**: [systemData](#systemdata): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.MixedReality/remoteRenderingAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MixedReality/spatialAnchorsAccounts@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **kind**: [Sku](#sku): The resource model definition representing SKU
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [Identity](#identity): Identity for the resource.
* **properties**: [MixedRealityAccountProperties](#mixedrealityaccountproperties): Common Properties shared by Mixed Reality Accounts
* **sku**: [Sku](#sku): The resource model definition representing SKU
* **systemData**: [systemData](#systemdata): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.MixedReality/spatialAnchorsAccounts' (ReadOnly, DeployTimeConstant): The resource type

## schemas:15_identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned': The identity type. Possible values include: 'SystemAssigned'

## MixedRealityAccountProperties
### Properties
* **accountDomain**: string (ReadOnly): Correspond domain name of certain Spatial Anchors Account
* **accountId**: string (ReadOnly): unique id of certain account.
* **storageAccountName**: string: The name of the storage account associated with this accountId

## systemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource. Possible values include: 'User', 'Application', 'ManagedIdentity', 'Key'
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource. Possible values include: 'User', 'Application', 'ManagedIdentity', 'Key'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned': The identity type. Possible values include: 'SystemAssigned'

## Sku
### Properties
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU. Ex - P3. It is typically a letter+number code
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard': This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. Possible values include: 'Free', 'Basic', 'Standard', 'Premium'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

