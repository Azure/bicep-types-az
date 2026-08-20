# Microsoft.FluidRelay @ 2025-06-20-preview

## Resource Microsoft.FluidRelay/fluidRelayServers@2025-06-20-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-20-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The type of identity used for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FluidRelayServerProperties](#fluidrelayserverproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.FluidRelay/fluidRelayServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.FluidRelay/fluidRelayServers/fluidRelayContainers@2025-06-20-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-06-20-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FluidRelayContainerProperties](#fluidrelaycontainerproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.FluidRelay/fluidRelayServers/fluidRelayContainers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.FluidRelay/fluidRelayServers/privateEndpointConnections@2025-06-20-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-20-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.FluidRelay/fluidRelayServers/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.FluidRelay/fluidRelayServers/privateLinkResources@2025-06-20-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-06-20-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^.{1,50}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Private link resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.FluidRelay/fluidRelayServers/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.FluidRelay/fluidRelayServers@2025-06-20-preview)
* **Resource**: Microsoft.FluidRelay/fluidRelayServers
* **ApiVersion**: 2025-06-20-preview
* **Output**: [FluidRelayServerKeys](#fluidrelayserverkeys)

## Function regenerateKey (Microsoft.FluidRelay/fluidRelayServers@2025-06-20-preview)
* **Resource**: Microsoft.FluidRelay/fluidRelayServers
* **ApiVersion**: 2025-06-20-preview
* **Input**: [RegenerateKeyRequest](#regeneratekeyrequest)
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
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connections.
* **privateKeyAccess**: 'Disabled' | 'Enabled' | string: Indicates the current access status for the server using private keys.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string: Provision states for FluidRelay RP
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Indicates if public network access is enabled.
* **sharedKeyAccess**: 'Disabled' | 'Enabled' | string: Indicates the current access status for the server using shared keys.
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

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for private endpoint.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): The group ids for the private endpoint resource.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The private endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.
* **requiredZoneNames**: string[]: The private link resource private link DNS zone names.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## RegenerateKeyRequest
### Properties
* **keyName**: 'key1' | 'key2' (Required): The key to regenerate.

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

