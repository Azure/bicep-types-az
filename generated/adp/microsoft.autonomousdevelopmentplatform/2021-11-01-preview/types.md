# Microsoft.AutonomousDevelopmentPlatform @ 2021-11-01-preview

## Resource Microsoft.AutonomousDevelopmentPlatform/accounts@2021-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 50, pattern: "^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*"} (Required, DeployTimeConstant): The resource name
* **properties**: [AccountProperties](#accountproperties): List of account properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AutonomousDevelopmentPlatform/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AutonomousDevelopmentPlatform/accounts/dataPools@2021-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {maxLength: 50, pattern: "^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*"} (Required, DeployTimeConstant): The resource name
* **properties**: [DataPoolProperties](#datapoolproperties): List of data pool properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource
* **type**: 'Microsoft.AutonomousDevelopmentPlatform/accounts/dataPools' (ReadOnly, DeployTimeConstant): The resource type

## AccountProperties
### Properties
* **accountId**: string (ReadOnly): The account's data-plane ID
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Gets the status of the account at the time the operation was called

## DataPoolEncryption
### Properties
* **keyName**: string (Required): The name of Key Vault key
* **keyVaultUri**: string (Required): The URI of a soft delete-enabled Key Vault that is in the same location as the Data Pool location
* **keyVersion**: string: The version of Key Vault key
* **userAssignedIdentity**: string (Required): The resource ID of a user-assigned Managed Identity used to access the encryption key in the Key Vault. Requires access to the key operations get, wrap, unwrap, and recover

## DataPoolLocation
### Properties
* **encryption**: [DataPoolEncryption](#datapoolencryption): Encryption properties of a Data Pool location
* **name**: string (Required): The location name
* **storageAccountCount**: int {minValue: 1}: The amount of storage accounts provisioned per Data Pool. Default: 5
* **storageSku**: [StorageSku](#storagesku): The Storage SKU. Default: Standard_ZRS.

## DataPoolProperties
### Properties
* **dataPoolId**: string (ReadOnly): The Data Pool's data-plane ID
* **locations**: [DataPoolLocation](#datapoollocation)[]: Gets or sets the collection of locations where Data Pool resources should be created
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Gets the status of the data pool at the time the operation was called
* **tags**: [Tags](#tags): Resource tags

## StorageSku
### Properties
* **name**: 'Premium_LRS' | 'Premium_ZRS' | 'Standard_GRS' | 'Standard_Gzrs' | 'Standard_LRS' | 'Standard_Ragrs' | 'Standard_Ragzrs' | 'Standard_ZRS' | string (Required): The SKU name

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

