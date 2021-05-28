# Microsoft.AutonomousDevelopmentPlatform @ 2021-02-01-preview

## Resource Microsoft.AutonomousDevelopmentPlatform/accounts@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccountProperties](#accountproperties): ADP account properties
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.AutonomousDevelopmentPlatform/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AutonomousDevelopmentPlatform/accounts/dataPools@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataPoolProperties](#datapoolproperties): Data Pool properties
* **type**: 'Microsoft.AutonomousDevelopmentPlatform/accounts/dataPools' (ReadOnly, DeployTimeConstant): The resource type

## AccountProperties
### Properties
* **accountId**: string (ReadOnly): The account's data-plane ID
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' (ReadOnly): Gets the status of the account at the time the operation was called.

## systemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DataPoolProperties
### Properties
* **dataPoolId**: string (ReadOnly): The Data Pool's data-plane ID
* **locations**: [DataPoolLocation](#datapoollocation)[]: Gets or sets the collection of locations where Data Pool resources should be created
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' (ReadOnly): Gets the status of the data pool at the time the operation was called.
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.

## DataPoolLocation
### Properties
* **encryption**: [DataPoolEncryption](#datapoolencryption): Encryption properties of a Data Pool
* **name**: string (Required): The location name

## DataPoolEncryption
### Properties
* **keyName**: string (Required): The name of Key Vault key
* **keyVaultUri**: string (Required): The URI of a soft delete-enabled Key Vault that is in the same location as the Data Pool location
* **keyVersion**: string: The version of Key Vault key
* **userAssignedIdentity**: string (Required): The resource ID of a user-assigned Managed Identity used to access the encryption key in the Key Vault. Requires access to the key operations get, wrap, unwrap, and recover

