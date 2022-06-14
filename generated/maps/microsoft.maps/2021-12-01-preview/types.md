# Microsoft.Maps @ 2021-12-01-preview

## Resource Microsoft.Maps/accounts@2021-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
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

## Resource Microsoft.Maps/accounts/creators@2021-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreatorProperties](#creatorproperties) (Required): The Creator resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Maps/accounts/creators' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.Maps/accounts@2021-12-01-preview)
* **Resource**: Microsoft.Maps/accounts
* **ApiVersion**: 2021-12-01-preview
* **Output**: [MapsAccountKeys](#mapsaccountkeys)

## Function listSas (Microsoft.Maps/accounts@2021-12-01-preview)
* **Resource**: Microsoft.Maps/accounts
* **ApiVersion**: 2021-12-01-preview
* **Input**: [AccountSasParameters](#accountsasparameters)
* **Output**: [MapsAccountSasToken](#mapsaccountsastoken)

## AccountSasParameters
### Properties
* **expiry**: string (Required): The date time offset of when the token validity expires. For example "2017-05-24T10:42:03.1567373Z"
* **maxRatePerSecond**: int (Required): Required parameter which represents the desired maximum request per second to allowed for the given SAS token. This does not guarantee perfect accuracy in measurements but provides application safe guards of abuse with eventual enforcement.
* **principalId**: string (Required): The principal Id also known as the object Id of a User Assigned Managed Identity currently assigned to the Map Account. To assign a Managed Identity of the account, use operation Create or Update an assign a User Assigned Identity resource Id.
* **regions**: string[]: Optional, allows control of which region locations are permitted access to Azure Maps REST APIs with the SAS token. Example: "eastus", "westus2". Omitting this parameter will allow all region locations to be accessible.
* **signingKey**: 'primaryKey' | 'secondaryKey' | string (Required): The Map account key to use for signing.
* **start**: string (Required): The date time offset of when the token validity begins. For example "2017-05-24T10:42:03.1567373Z".

## Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## CorsRule
### Properties
* **allowedOrigins**: string[] (Required): Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or "*" to allow all domains

## CorsRules
### Properties
* **corsRules**: [CorsRule](#corsrule)[]: The list of CORS rules. You can include up to five CorsRule elements in the request.

## CreatorProperties
### Properties
* **provisioningState**: string (ReadOnly): The state of the resource provisioning, terminal states: Succeeded, Failed, Canceled
* **storageUnits**: int (Required): The storage units to be allocated. Integer values from 1 to 100, inclusive.

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
* **cors**: [CorsRules](#corsrules): Specifies CORS rules for the Blob service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Blob service.
* **disableLocalAuth**: bool: Allows toggle functionality on Azure Policy to disable Azure Maps local authentication support. This will disable Shared Keys authentication from any usage.
* **linkedResources**: [LinkedResource](#linkedresource)[]: Sets the resources to be used for Managed Identities based operations for the Map account resource.
* **provisioningState**: string (ReadOnly): The provisioning state of the Map account resource.
* **uniqueId**: string (ReadOnly): A unique identifier for the maps account

## MapsAccountSasToken
### Properties
* **accountSasToken**: string (ReadOnly): The shared access signature access token.

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

