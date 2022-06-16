# Microsoft.FluidRelay @ 2022-02-15

## Resource Microsoft.FluidRelay/fluidRelayServers@2022-02-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The type of identity used for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FluidRelayServerProperties](#fluidrelayserverproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): System meta data for this resource, including creation and modification information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.FluidRelay/fluidRelayServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.FluidRelay/fluidRelayServers/fluidRelayContainers@2022-02-15 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FluidRelayContainerProperties](#fluidrelaycontainerproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): System meta data for this resource, including creation and modification information.
* **type**: 'Microsoft.FluidRelay/fluidRelayServers/fluidRelayContainers' (ReadOnly, DeployTimeConstant): The resource type

## FluidRelayContainerProperties
### Properties
* **frsContainerId**: string (ReadOnly): The frsContainerId for this container
* **frsTenantId**: string (ReadOnly): The Fluid tenantId for this container
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provision states for FluidRelay RP

## FluidRelayEndpoints
### Properties
* **ordererEndpoints**: string[] (ReadOnly): The Fluid Relay Orderer endpoints.
* **storageEndpoints**: string[] (ReadOnly): The Fluid Relay storage endpoints.

## FluidRelayServerProperties
### Properties
* **fluidRelayEndpoints**: [FluidRelayEndpoints](#fluidrelayendpoints) (ReadOnly): The Fluid Relay Service endpoints for this server.
* **frsTenantId**: string (ReadOnly): The Fluid tenantId for this server
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string: Provision states for FluidRelay RP

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

