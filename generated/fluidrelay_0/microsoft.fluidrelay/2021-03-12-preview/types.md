# Microsoft.FluidRelay @ 2021-03-12-preview

## Resource Microsoft.FluidRelay/fluidRelayServers@2021-03-12-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-12-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FluidRelayServerProperties](#fluidrelayserverproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): System meta data for this resource, including creation and modification information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.FluidRelay/fluidRelayServers' (ReadOnly, DeployTimeConstant): The resource type

## Function getKeys (Microsoft.FluidRelay/fluidRelayServers@2021-03-12-preview)
* **Resource**: Microsoft.FluidRelay/fluidRelayServers
* **ApiVersion**: 2021-03-12-preview
* **Output**: [FluidRelayServerKeys](#fluidrelayserverkeys)

## Function regenerateKey (Microsoft.FluidRelay/fluidRelayServers@2021-03-12-preview)
* **Resource**: Microsoft.FluidRelay/fluidRelayServers
* **ApiVersion**: 2021-03-12-preview
* **Input**: [RegenerateKeyRequest](#regeneratekeyrequest)
* **Output**: [FluidRelayServerKeys](#fluidrelayserverkeys)

## FluidRelayEndpoints
### Properties
* **ordererEndpoints**: string[] (ReadOnly): The Fluid Relay Orderer endpoints.
* **storageEndpoints**: string[] (ReadOnly): The Fluid Relay storage endpoints.

## FluidRelayServerKeys
### Properties
* **key1**: string (ReadOnly): The primary key for this server
* **key2**: string (ReadOnly): The secondary key for this server

## FluidRelayServerProperties
### Properties
* **fluidRelayEndpoints**: [FluidRelayEndpoints](#fluidrelayendpoints) (ReadOnly): The Fluid Relay Service endpoints for this server.
* **frsTenantId**: string (ReadOnly): The Fluid tenantId for this server
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string: Provision states for FluidRelay RP

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

