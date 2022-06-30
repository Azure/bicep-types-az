# Microsoft.FluidRelay @ 2022-05-26

## Resource Microsoft.FluidRelay/fluidRelayServers@2022-05-26
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-26' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The type of identity used for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FluidRelayServerProperties](#fluidrelayserverproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): System meta data for this resource, including creation and modification information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.FluidRelay/fluidRelayServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.FluidRelay/fluidRelayServers/fluidRelayContainers@2022-05-26 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-26' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FluidRelayContainerProperties](#fluidrelaycontainerproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): System meta data for this resource, including creation and modification information.
* **type**: 'Microsoft.FluidRelay/fluidRelayServers/fluidRelayContainers' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.FluidRelay/fluidRelayServers@2022-05-26)
* **Resource**: Microsoft.FluidRelay/fluidRelayServers
* **ApiVersion**: 2022-05-26
* **Output**: [FluidRelayServerKeys](#fluidrelayserverkeys)

## CustomerManagedKeyEncryptionProperties
### Properties
* **keyEncryptionKeyIdentity**: [CustomerManagedKeyEncryptionPropertiesKeyEncryptionKeyIdentity](#customermanagedkeyencryptionpropertieskeyencryptionkeyidentity): All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
* **keyEncryptionKeyUrl**: string: key encryption key Url, with or without a version. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 or https://contosovault.vault.azure.net/keys/contosokek. Key auto rotation is enabled by providing a key uri without version. Otherwise, customer is responsible for rotating the key. The keyEncryptionKeyIdentity(either SystemAssigned or UserAssigned) should have permission to access this key url.

## CustomerManagedKeyEncryptionPropertiesKeyEncryptionKeyIdentity
### Properties
* **identityType**: 'SystemAssigned' | 'UserAssigned': Values can be SystemAssigned or UserAssigned
* **userAssignedIdentityResourceId**: string: user assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. Mutually exclusive with identityType systemAssignedIdentity.

## EncryptionProperties
### Properties
* **customerManagedKeyEncryption**: [CustomerManagedKeyEncryptionProperties](#customermanagedkeyencryptionproperties): All Customer-managed key encryption properties for the resource.

## FluidRelayContainerProperties
### Properties
* **creationTime**: string (ReadOnly): The creation time of this resource
* **frsContainerId**: string (ReadOnly): The frsContainerId for this container
* **frsTenantId**: string (ReadOnly): The Fluid tenantId for this container
* **lastAccessTime**: string (ReadOnly): Last time when user access this resource
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provision states for FluidRelay RP

## FluidRelayEndpoints
### Properties
* **ordererEndpoints**: string[] (ReadOnly): The Fluid Relay Orderer endpoints.
* **serviceEndpoints**: string[] (ReadOnly): The Fluid Relay service endpoints.
* **storageEndpoints**: string[] (ReadOnly): The Fluid Relay storage endpoints.

## FluidRelayServerKeys
### Properties
* **key1**: string (ReadOnly): The primary key for this server
* **key2**: string (ReadOnly): The secondary key for this server

## FluidRelayServerProperties
### Properties
* **encryption**: [EncryptionProperties](#encryptionproperties): All encryption configuration for a resource.
* **fluidRelayEndpoints**: [FluidRelayEndpoints](#fluidrelayendpoints) (ReadOnly): The Fluid Relay Service endpoints for this server.
* **frsTenantId**: string (ReadOnly): The Fluid tenantId for this server
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string: Provision states for FluidRelay RP
* **storagesku**: 'basic' | 'standard' | string: Sku of the storage associated with the resource

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The identity type.
* **userAssignedIdentities**: [IdentityUserAssignedIdentities](#identityuserassignedidentities): The list of user identities associated with the resource.

## IdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentitiesValue](#userassignedidentitiesvalue)

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

## UserAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

