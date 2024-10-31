# Microsoft.Maps @ 2024-07-01-preview

## Resource Microsoft.Maps/accounts@2024-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **kind**: 'Gen2' | string: Get or Set Kind property.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, pattern: "^[^%&:\\/#?]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MapsAccountProperties](#mapsaccountproperties): The map account properties.
* **sku**: [Sku](#sku) (Required): The SKU of this account.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Maps/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Maps/accounts/creators@2024-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, pattern: "^[^%&:\\/#?]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CreatorProperties](#creatorproperties) (Required): The Creator resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Maps/accounts/creators' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.Maps/accounts@2024-07-01-preview)
* **Resource**: Microsoft.Maps/accounts
* **ApiVersion**: 2024-07-01-preview
* **Output**: [MapsAccountKeys](#mapsaccountkeys)

## Function listSas (Microsoft.Maps/accounts@2024-07-01-preview)
* **Resource**: Microsoft.Maps/accounts
* **ApiVersion**: 2024-07-01-preview
* **Input**: [AccountSasParameters](#accountsasparameters)
* **Output**: [MapsAccountSasToken](#mapsaccountsastoken)

## AccountSasParameters
### Properties
* **expiry**: string (Required): The date time offset of when the token validity expires. For example "2017-05-24T10:42:03.1567373Z". Maximum duration allowed is 24 hours between `start` and `expiry`.
* **maxRatePerSecond**: int {minValue: 1, maxValue: 500} (Required): Required parameter which represents the desired maximum request per second to allowed for the given SAS token. This does not guarantee perfect accuracy in measurements but provides application safe guards of abuse with eventual enforcement.
* **principalId**: string (Required): The principal Id also known as the object Id of a User Assigned Managed Identity currently assigned to the Maps Account. To assign a Managed Identity of the account, use operation Create or Update an assign a User Assigned Identity resource Id.
* **regions**: string[]: Optional, allows control of which region locations are permitted access to Azure Maps REST APIs with the SAS token. Example: "eastus", "westus2". Omitting this parameter will allow all region locations to be accessible.
* **signingKey**: 'managedIdentity' | 'primaryKey' | 'secondaryKey' | string (Required): The Maps account key to use for signing. Picking `primaryKey` or `secondaryKey` will use the Maps account Shared Keys, and using `managedIdentity` will use the auto-renewed private key to sign the SAS.
* **start**: string (Required): The date time offset of when the token validity begins. For example "2017-05-24T10:42:03.1567373Z". Maximum duration allowed is 24 hours between `start` and `expiry`.

## CorsRule
### Properties
* **allowedOrigins**: string[] (Required): Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or "*" to allow all domains

## CorsRules
### Properties
* **corsRules**: [CorsRule](#corsrule)[] {maxLength: 5}: The list of CORS rules. You can include up to five CorsRule elements in the request.

## CreatorProperties
### Properties
* **consumedStorageUnitSizeInBytes**: int: The consumed storage unit size in bytes for the creator resource.
* **provisioningState**: string (ReadOnly): The state of the resource provisioning, terminal states: Succeeded, Failed, Canceled
* **storageUnits**: int {minValue: 1, maxValue: 100} (Required): The storage units to be allocated. Integer values from 1 to 100, inclusive.
* **totalStorageUnitSizeInBytes**: int: The total allocated storage unit size in bytes for the creator resource.

## Encryption
### Properties
* **customerManagedKeyEncryption**: [EncryptionCustomerManagedKeyEncryption](#encryptioncustomermanagedkeyencryption): All Customer-managed key encryption properties for the resource.
* **infrastructureEncryption**: 'disabled' | 'enabled' | string: (Optional) Discouraged to include in resource definition. Only needed where it is possible to disable platform (AKA infrastructure) encryption. Azure SQL TDE is an example of this. Values are enabled and disabled.

## EncryptionCustomerManagedKeyEncryption
### Properties
* **keyEncryptionKeyIdentity**: [EncryptionCustomerManagedKeyEncryptionKeyIdentity](#encryptioncustomermanagedkeyencryptionkeyidentity): All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
* **keyEncryptionKeyUrl**: string: key encryption key Url, versioned or unversioned. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 or https://contosovault.vault.azure.net/keys/contosokek.

## EncryptionCustomerManagedKeyEncryptionKeyIdentity
### Properties
* **delegatedIdentityClientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: delegated identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. Mutually exclusive with identityType systemAssignedIdentity and userAssignedIdentity - internal use only.
* **federatedClientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: application client identity to use for accessing key encryption key Url in a different tenant. Ex: f83c6b1b-4d34-47e4-bb34-9d83df58b540
* **identityType**: 'delegatedResourceIdentity' | 'systemAssignedIdentity' | 'userAssignedIdentity' | string: The type of identity to use. Values can be systemAssignedIdentity, userAssignedIdentity, or delegatedResourceIdentity.
* **userAssignedIdentityResourceId**: string: User assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. Mutually exclusive with identityType systemAssignedIdentity.

## LinkedResource
### Properties
* **id**: string (Required): ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/accounts/{storageName}'.
* **uniqueName**: string (Required): A provided name which uniquely identifies the linked resource.

## LocationsItem
### Properties
* **locationName**: string (Required): The location name.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## MapsAccountKeys
### Properties
* **primaryKey**: string (ReadOnly): The primary key for accessing the Maps REST APIs.
* **primaryKeyLastUpdated**: string (ReadOnly): The last updated date and time of the primary key.
* **secondaryKey**: string (ReadOnly): The secondary key for accessing the Maps REST APIs.
* **secondaryKeyLastUpdated**: string (ReadOnly): The last updated date and time of the secondary key.

## MapsAccountProperties
### Properties
* **cors**: [CorsRules](#corsrules): Specifies CORS rules for the Blob service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Blob service.
* **disableLocalAuth**: bool: Allows toggle functionality on Azure Policy to disable Azure Maps local authentication support. This will disable Shared Keys and Shared Access Signature Token authentication from any usage.
* **encryption**: [Encryption](#encryption): All encryption configuration for a resource.
* **linkedResources**: [LinkedResource](#linkedresource)[] {maxLength: 10}: The array of associated resources to the Maps account. Linked resource in the array cannot individually update, you must update all linked resources in the array together. These resources may be used on operations on the Azure Maps REST API. Access is controlled by the Maps Account Managed Identity(s) permissions to those resource(s).
* **locations**: [LocationsItem](#locationsitem)[]: List of additional data processing regions for the Maps Account, which may result in requests being processed in another geography. Some features or results may be restricted to specific regions. By default, Maps REST APIs process requests according to the account location or the [geographic scope](https://learn.microsoft.com/azure/azure-maps/geographic-scope).
* **provisioningState**: string (ReadOnly): The provisioning state of the Maps account resource, Account updates can only be performed on terminal states. Terminal states: `Succeeded` and `Failed`
* **uniqueId**: string (ReadOnly): A unique identifier for the Maps Account

## MapsAccountSasToken
### Properties
* **accountSasToken**: string (ReadOnly): The shared access signature access token.

## Sku
### Properties
* **name**: 'G2' | string (Required): The name of the SKU, in standard format (such as G2).
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

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

