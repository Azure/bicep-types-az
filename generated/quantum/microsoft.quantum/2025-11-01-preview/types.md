# Microsoft.Quantum @ 2025-11-01-preview

## Resource Microsoft.Quantum/workspaces@2025-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9]+(-*[a-zA-Z0-9])*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceResourceProperties](#workspaceresourceproperties): Gets or sets the properties. Define quantum workspace's specific properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Quantum/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.Quantum/workspaces@2025-11-01-preview)
* **Resource**: Microsoft.Quantum/workspaces
* **ApiVersion**: 2025-11-01-preview
* **Output**: [ListKeysResult](#listkeysresult)

## ApiKey
### Properties
* **createdAt**: string: The creation time of the api key.
* **key**: string (ReadOnly): The Api key.

## ListKeysResult
### Properties
* **apiKeyEnabled**: bool: Indicator of enablement of the Quantum workspace Api keys.
* **primaryConnectionString**: string (ReadOnly): The connection string of the primary api key.
* **primaryKey**: [ApiKey](#apikey): The quantum workspace primary api key.
* **secondaryConnectionString**: string (ReadOnly): The connection string of the secondary api key.
* **secondaryKey**: [ApiKey](#apikey): The quantum workspace secondary api key.

## ManagedOnBehalfOfConfiguration
### Properties
* **moboBrokerResources**: [MoboBrokerResource](#mobobrokerresource)[]: Managed-On-Behalf-Of broker resources

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## MoboBrokerResource
### Properties
* **id**: string: Resource identifier of a Managed-On-Behalf-Of broker resource

## Provider
### Properties
* **applicationName**: string: The provider's marketplace application display name.
* **instanceUri**: string: A Uri identifying the specific instance of this provider.
* **providerId**: string: Unique id of this provider.
* **providerSku**: string: The sku associated with pricing information for this provider.
* **provisioningState**: 'Deleted' | 'Deleting' | 'Failed' | 'Launching' | 'Succeeded' | 'Updating' | string: Provisioning status field
* **resourceUsageId**: string: Id to track resource usage for the provider.

## QuotaAllocations
### Properties
* **highMinutesLifetime**: int {minValue: 0}: Lifetime limit for high priority jobs execution in minutes.
* **standardMinutesLifetime**: int {minValue: 0} (Required): Lifetime limit for standard priority jobs execution in minutes.

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

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## WorkspaceResourceProperties
### Properties
* **apiKeyEnabled**: bool: Indicator of enablement of the Quantum workspace Api keys.
* **endpointUri**: string (ReadOnly): The URI of the workspace endpoint.
* **managedOnBehalfOfConfiguration**: [ManagedOnBehalfOfConfiguration](#managedonbehalfofconfiguration) (ReadOnly): Managed On Behalf Of configuration.
* **managedStorageAccount**: string (ReadOnly): ARM Resource Id of the managed storage account associated with this workspace.
* **providers**: [Provider](#provider)[]: List of Providers selected for this Workspace
* **provisioningState**: 'Canceled' | 'Failed' | 'ProviderDeleting' | 'ProviderLaunching' | 'ProviderProvisioning' | 'ProviderUpdating' | 'Succeeded' | string (ReadOnly): Provisioning status field
* **quotas**: [QuotaAllocations](#quotaallocations): DEPRECATED: This field is deprecated and will be removed in future versions. Please use the quotas under providers instead.
* **storageAccount**: string: ARM Resource Id of the storage account associated with this workspace.
* **usable**: 'No' | 'Partial' | 'Yes' | string (ReadOnly): Whether the current workspace is ready to accept Jobs.
* **workspaceKind**: 'V1' | 'V2' | string: Whether this workspace is V1 or V2.

