# Microsoft.Quantum @ 2023-11-13-preview

## Resource Microsoft.Quantum/workspaces@2023-11-13-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-13-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [QuantumWorkspaceIdentity](#quantumworkspaceidentity): Managed Identity information.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9]+(-*[a-zA-Z0-9])*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceResourceProperties](#workspaceresourceproperties): Gets or sets the properties. Define quantum workspace's specific properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Quantum/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.Quantum/workspaces@2023-11-13-preview)
* **Resource**: Microsoft.Quantum/workspaces
* **ApiVersion**: 2023-11-13-preview
* **Output**: [ListKeysResult](#listkeysresult)

## ApiKey
### Properties
* **createdAt**: string: The creation time of the api key.
* **key**: string {sensitive} (ReadOnly): The Api key.

## ListKeysResult
### Properties
* **apiKeyEnabled**: bool: Indicator of enablement of the Quantum workspace Api keys.
* **primaryConnectionString**: string {sensitive} (ReadOnly): The connection string of the primary api key.
* **primaryKey**: [ApiKey](#apikey): The quantum workspace primary api key.
* **secondaryConnectionString**: string {sensitive} (ReadOnly): The connection string of the secondary api key.
* **secondaryKey**: [ApiKey](#apikey): The quantum workspace secondary api key.

## Provider
### Properties
* **applicationName**: string: The provider's marketplace application display name.
* **instanceUri**: string: A Uri identifying the specific instance of this provider.
* **providerId**: string: Unique id of this provider.
* **providerSku**: string: The sku associated with pricing information for this provider.
* **provisioningState**: 'Deleted' | 'Deleting' | 'Failed' | 'Launching' | 'Succeeded' | 'Updating' | string: Provisioning status field
* **resourceUsageId**: string: Id to track resource usage for the provider.

## QuantumWorkspaceIdentity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' | string: The identity type.

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

## WorkspaceResourceProperties
### Properties
* **apiKeyEnabled**: bool: Indicator of enablement of the Quantum workspace Api keys.
* **endpointUri**: string (ReadOnly): The URI of the workspace endpoint.
* **providers**: [Provider](#provider)[]: List of Providers selected for this Workspace
* **provisioningState**: 'Failed' | 'ProviderDeleting' | 'ProviderLaunching' | 'ProviderProvisioning' | 'ProviderUpdating' | 'Succeeded' | string (ReadOnly): Provisioning status field
* **storageAccount**: string: ARM Resource Id of the storage account associated with this workspace.
* **usable**: 'No' | 'Partial' | 'Yes' | string (ReadOnly): Whether the current workspace is ready to accept Jobs.

