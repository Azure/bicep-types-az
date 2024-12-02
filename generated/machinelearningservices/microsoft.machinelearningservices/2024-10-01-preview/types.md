# Microsoft.MachineLearningServices @ 2024-10-01-preview

## Resource Microsoft.MachineLearningServices/registries@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{2,32}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RegistryProperties](#registryproperties) (Required): [Required] Additional attributes of the entity.
* **sku**: [Sku](#sku): Sku details required for ARM contract for Autoscaling.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MachineLearningServices/registries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/registries/codes@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,254}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CodeContainerProperties](#codecontainerproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/registries/codes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/registries/codes/versions@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CodeVersionProperties](#codeversionproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/registries/codes/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/registries/components@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,254}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ComponentContainerProperties](#componentcontainerproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/registries/components' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/registries/components/versions@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ComponentVersionProperties](#componentversionproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/registries/components/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/registries/data@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,254}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DataContainerProperties](#datacontainerproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/registries/data' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/registries/data/versions@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataVersionBaseProperties](#dataversionbaseproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/registries/data/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/registries/environments@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,254}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EnvironmentContainerProperties](#environmentcontainerproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/registries/environments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/registries/environments/versions@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnvironmentVersionProperties](#environmentversionproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/registries/environments/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/registries/models@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,254}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ModelContainerProperties](#modelcontainerproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/registries/models' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/registries/models/versions@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ModelVersionProperties](#modelversionproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/registries/models/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **kind**: string
* **location**: string
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]{2,32}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties) (Required): Additional attributes of the entity.
* **sku**: [Sku](#sku): Optional. This field is required to be implemented by the RP because AML is supporting more than one tier
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [WorkspaceTags](#workspacetags): Dictionary of <string>
* **type**: 'Microsoft.MachineLearningServices/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/batchEndpoints@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,254}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BatchEndpointProperties](#batchendpointproperties) (Required): [Required] Additional attributes of the entity.
* **sku**: [Sku](#sku): Sku details required for ARM contract for Autoscaling.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MachineLearningServices/workspaces/batchEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/batchEndpoints/deployments@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,254}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BatchDeploymentProperties](#batchdeploymentproperties) (Required): [Required] Additional attributes of the entity.
* **sku**: [Sku](#sku): Sku details required for ARM contract for Autoscaling.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MachineLearningServices/workspaces/batchEndpoints/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/capabilityHosts@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,254}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CapabilityHostProperties](#capabilityhostproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/capabilityHosts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/codes@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,254}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CodeContainerProperties](#codecontainerproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/codes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/codes/versions@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CodeVersionProperties](#codeversionproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/codes/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/components@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,254}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ComponentContainerProperties](#componentcontainerproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/components' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/components/versions@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ComponentVersionProperties](#componentversionproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/components/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/computes@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The identity of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string {pattern: "^[a-zA-Z](?![a-zA-Z0-9-]*-\d+$)[a-zA-Z0-9\-]{2,23}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [Compute](#compute): Compute properties
* **sku**: [Sku](#sku): The sku of the workspace.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ComputeResourceTags](#computeresourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces/computes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/connections@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]{2,32}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceConnectionPropertiesV2](#workspaceconnectionpropertiesv2) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/connections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/connections/deployments@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]{2,32}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EndpointDeploymentResourceProperties](#endpointdeploymentresourceproperties) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/connections/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/connections/raiBlocklists@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RaiBlocklistProperties](#raiblocklistproperties) (Required): RAI Custom Blocklist properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/connections/raiBlocklists' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/connections/raiBlocklists/raiBlocklistItems@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RaiBlocklistItemProperties](#raiblocklistitemproperties) (Required): RAI Custom Blocklist Item properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/connections/raiBlocklists/raiBlocklistItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/connections/raiPolicies@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RaiPolicyProperties](#raipolicyproperties) (Required): Azure OpenAI Content Filters properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/connections/raiPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/data@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,254}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DataContainerProperties](#datacontainerproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/data' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/data/versions@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataVersionBaseProperties](#dataversionbaseproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/data/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/datastores@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,254}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DatastoreProperties](#datastoreproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/datastores' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/endpoints@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]{2,32}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EndpointResourceProperties](#endpointresourceproperties) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/endpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/endpoints/deployments@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]{2,32}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EndpointDeploymentResourceProperties](#endpointdeploymentresourceproperties) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/endpoints/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/endpoints/raiPolicies@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RaiPolicyProperties](#raipolicyproperties) (Required): Azure OpenAI Content Filters properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/endpoints/raiPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/environments@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,254}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EnvironmentContainerProperties](#environmentcontainerproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/environments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/environments/versions@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnvironmentVersionProperties](#environmentversionproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/environments/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/featuresets@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,254}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FeaturesetContainerProperties](#featuresetcontainerproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/featuresets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/featuresets/versions@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FeaturesetVersionProperties](#featuresetversionproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/featuresets/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/featuresets/versions/features@2024-10-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,254}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FeatureProperties](#featureproperties) (ReadOnly): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/featuresets/versions/features' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/featurestoreEntities@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,254}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FeaturestoreEntityContainerProperties](#featurestoreentitycontainerproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/featurestoreEntities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/featurestoreEntities/versions@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FeaturestoreEntityVersionProperties](#featurestoreentityversionproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/featurestoreEntities/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/inferencePools@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,254}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [InferencePoolProperties](#inferencepoolproperties) (Required): [Required] Additional attributes of the entity.
* **sku**: [Sku](#sku): Sku details required for ARM contract for Autoscaling.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MachineLearningServices/workspaces/inferencePools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/inferencePools/endpoints@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,254}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [InferenceEndpointProperties](#inferenceendpointproperties) (Required): [Required] Additional attributes of the entity.
* **sku**: [Sku](#sku): Sku details required for ARM contract for Autoscaling.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MachineLearningServices/workspaces/inferencePools/endpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/inferencePools/groups@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,254}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [InferenceGroupProperties](#inferencegroupproperties) (Required): [Required] Additional attributes of the entity.
* **sku**: [Sku](#sku): Sku details required for ARM contract for Autoscaling.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MachineLearningServices/workspaces/inferencePools/groups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/jobs@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,254}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [JobBaseProperties](#jobbaseproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/marketplaceSubscriptions@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,254}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MarketplaceSubscriptionProperties](#marketplacesubscriptionproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/marketplaceSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/models@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,254}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ModelContainerProperties](#modelcontainerproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/models' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/models/versions@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ModelVersionProperties](#modelversionproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/models/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/onlineEndpoints@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,254}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [OnlineEndpointProperties](#onlineendpointproperties) (Required): [Required] Additional attributes of the entity.
* **sku**: [Sku](#sku): Sku details required for ARM contract for Autoscaling.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MachineLearningServices/workspaces/onlineEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/onlineEndpoints/deployments@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,254}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [OnlineDeploymentProperties](#onlinedeploymentproperties) (Required): [Required] Additional attributes of the entity.
* **sku**: [Sku](#sku): Sku details required for ARM contract for Autoscaling.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MachineLearningServices/workspaces/onlineEndpoints/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/outboundRules@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]{2,32}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [OutboundRule](#outboundrule) (Required): Outbound Rule for the managed network of a machine learning workspace.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/outboundRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **location**: string: Same as workspace location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Private endpoint connection properties.
* **sku**: [Sku](#sku): Optional. This field is required to be implemented by the RP because AML is supporting more than one tier
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [PrivateEndpointConnectionTags](#privateendpointconnectiontags): Dictionary of <string>
* **type**: 'Microsoft.MachineLearningServices/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/schedules@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9\-_]{0,254}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ScheduleProperties](#scheduleproperties) (Required): [Required] Additional attributes of the entity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MachineLearningServices/workspaces/schedules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/serverlessEndpoints@2024-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z0-9-]{0,51}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ServerlessEndpointProperties](#serverlessendpointproperties) (Required): [Required] Additional attributes of the entity.
* **sku**: [Sku](#sku): Sku details required for ARM contract for Autoscaling.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MachineLearningServices/workspaces/serverlessEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Function listConnectionModels (Microsoft.MachineLearningServices/workspaces@2024-10-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces
* **ApiVersion**: 2024-10-01-preview
* **Output**: [EndpointModels](#endpointmodels)

## Function listKeys (Microsoft.MachineLearningServices/workspaces/computes@2024-10-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces/computes
* **ApiVersion**: 2024-10-01-preview
* **Output**: [ComputeSecrets](#computesecrets)

## Function listkeys (Microsoft.MachineLearningServices/workspaces/batchEndpoints@2024-10-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces/batchEndpoints
* **ApiVersion**: 2024-10-01-preview
* **Output**: [EndpointAuthKeys](#endpointauthkeys)

## Function listKeys (Microsoft.MachineLearningServices/workspaces/onlineEndpoints@2024-10-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces/onlineEndpoints
* **ApiVersion**: 2024-10-01-preview
* **Output**: [EndpointAuthKeys](#endpointauthkeys)

## Function listKeys (Microsoft.MachineLearningServices/workspaces/serverlessEndpoints@2024-10-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces/serverlessEndpoints
* **ApiVersion**: 2024-10-01-preview
* **Output**: [EndpointAuthKeys](#endpointauthkeys)

## Function listKeys (Microsoft.MachineLearningServices/workspaces@2024-10-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces
* **ApiVersion**: 2024-10-01-preview
* **Output**: [ListWorkspaceKeysResult](#listworkspacekeysresult)

## Function listKeys (Microsoft.MachineLearningServices/workspaces/endpoints@2024-10-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces/endpoints
* **ApiVersion**: 2024-10-01-preview
* **Output**: [EndpointKeys](#endpointkeys)

## Function listNodes (Microsoft.MachineLearningServices/workspaces/computes@2024-10-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces/computes
* **ApiVersion**: 2024-10-01-preview
* **Output**: [AmlComputeNodesInformation](#amlcomputenodesinformation)

## Function listNotebookAccessToken (Microsoft.MachineLearningServices/workspaces@2024-10-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces
* **ApiVersion**: 2024-10-01-preview
* **Output**: [NotebookAccessTokenResult](#notebookaccesstokenresult)

## Function listNotebookKeys (Microsoft.MachineLearningServices/workspaces@2024-10-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces
* **ApiVersion**: 2024-10-01-preview
* **Output**: [ListNotebookKeysResult](#listnotebookkeysresult)

## Function listSecrets (Microsoft.MachineLearningServices/workspaces/datastores@2024-10-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces/datastores
* **ApiVersion**: 2024-10-01-preview
* **Input**: [SecretExpiry](#secretexpiry)
* **Output**: [DatastoreSecrets](#datastoresecrets)

## Function listsecrets (Microsoft.MachineLearningServices/workspaces/connections@2024-10-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces/connections
* **ApiVersion**: 2024-10-01-preview
* **Output**: [WorkspaceConnectionPropertiesV2BasicResource](#workspaceconnectionpropertiesv2basicresource)

## Function listStorageAccountKeys (Microsoft.MachineLearningServices/workspaces@2024-10-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces
* **ApiVersion**: 2024-10-01-preview
* **Output**: [ListStorageAccountKeysResult](#liststorageaccountkeysresult)

## AccountApiKeys
### Properties
* **key1**: string {sensitive}
* **key2**: string {sensitive}

## AccountKeyDatastoreSecrets
### Properties
* **key**: string: Storage account key.
* **secretsType**: 'AccountKey' | 'Certificate' | 'Sas' | 'ServicePrincipal' | string (Required): [Required] Credential type used to authentication with storage.

## AcrDetails
### Properties
* **systemCreatedAcrAccount**: [SystemCreatedAcrAccount](#systemcreatedacraccount): Details of system created ACR account to be used for the Registry
* **userCreatedAcrAccount**: [UserCreatedAcrAccount](#usercreatedacraccount): Details of user created ACR account to be used for the Registry

## AksNetworkingConfiguration
### Properties
* **dnsServiceIP**: string {pattern: "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"}: An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
* **dockerBridgeCidr**: string {pattern: "^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$"}: A CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the Kubernetes service address range.
* **serviceCidr**: string {pattern: "^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$"}: A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
* **subnetId**: string: Virtual network subnet resource ID the compute nodes belong to

## AKSSchemaProperties
### Properties
* **agentCount**: int {minValue: 0}: Number of agents
* **agentVmSize**: string: Agent virtual machine size
* **aksNetworkingConfiguration**: [AksNetworkingConfiguration](#aksnetworkingconfiguration): AKS networking configuration for vnet
* **clusterFqdn**: string: Cluster full qualified domain name
* **clusterPurpose**: 'DenseProd' | 'DevTest' | 'FastProd' | string: Intended usage of the cluster
* **loadBalancerSubnet**: string: Load Balancer Subnet
* **loadBalancerType**: 'InternalLoadBalancer' | 'PublicIp' | string: Load Balancer Type
* **sslConfiguration**: [SslConfiguration](#sslconfiguration): SSL configuration
* **systemServices**: [SystemService](#systemservice)[] (ReadOnly): System services

## AmlComputeNodeInformation
### Properties
* **nodeId**: string (ReadOnly): ID of the compute node.
* **nodeState**: 'idle' | 'leaving' | 'preempted' | 'preparing' | 'running' | 'unusable' | string (ReadOnly): State of the compute node. Values are idle, running, preparing, unusable, leaving and preempted.
* **port**: int (ReadOnly): SSH port number of the node.
* **privateIpAddress**: string (ReadOnly): Private IP address of the compute node.
* **publicIpAddress**: string (ReadOnly): Public IP address of the compute node.
* **runId**: string (ReadOnly): ID of the Experiment running on the node, if any else null.

## AmlComputeNodesInformation
### Properties
* **nextLink**: string (ReadOnly): The continuation token.
* **nodes**: [AmlComputeNodeInformation](#amlcomputenodeinformation)[] (ReadOnly): The collection of returned AmlCompute nodes details.

## AmlComputeProperties
### Properties
* **allocationState**: 'Resizing' | 'Steady' | string (ReadOnly): Allocation state of the compute. Possible values are: steady - Indicates that the compute is not resizing. There are no changes to the number of compute nodes in the compute in progress. A compute enters this state when it is created and when no operations are being performed on the compute to change the number of compute nodes. resizing - Indicates that the compute is resizing; that is, compute nodes are being added to or removed from the compute.
* **allocationStateTransitionTime**: string (ReadOnly): The time at which the compute entered its current allocation state.
* **currentNodeCount**: int (ReadOnly): The number of compute nodes currently assigned to the compute.
* **enableNodePublicIp**: bool: Enable or disable node public IP address provisioning. Possible values are: Possible values are: true - Indicates that the compute nodes will have public IPs provisioned. false - Indicates that the compute nodes will have a private endpoint and no public IPs.
* **errors**: [ErrorResponse](#errorresponse)[] (ReadOnly): Collection of errors encountered by various compute nodes during node setup.
* **isolatedNetwork**: bool: Network is isolated or not
* **nodeStateCounts**: [NodeStateCounts](#nodestatecounts) (ReadOnly): Counts of various node states on the compute.
* **osType**: 'Linux' | 'Windows' | string: Compute OS Type
* **propertyBag**: any: A property bag containing additional properties.
* **remoteLoginPortPublicAccess**: 'Disabled' | 'Enabled' | 'NotSpecified' | string: State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on all nodes of the cluster. Enabled - Indicates that the public ssh port is open on all nodes of the cluster. NotSpecified - Indicates that the public ssh port is closed on all nodes of the cluster if VNet is defined, else is open all public nodes. It can be default only during cluster creation time, after creation it will be either enabled or disabled.
* **scaleSettings**: [ScaleSettings](#scalesettings): Scale settings for AML Compute
* **subnet**: [ResourceId](#resourceid): Virtual network subnet resource ID the compute nodes belong to.
* **targetNodeCount**: int (ReadOnly): The target number of compute nodes for the compute. If the allocationState is resizing, this property denotes the target node count for the ongoing resize operation. If the allocationState is steady, this property denotes the target node count for the previous resize operation.
* **userAccountCredentials**: [UserAccountCredentials](#useraccountcredentials): Credentials for an administrator user account that will be created on each compute node.
* **virtualMachineImage**: [VirtualMachineImage](#virtualmachineimage): Virtual Machine image for AML Compute - windows only
* **vmPriority**: 'Dedicated' | 'LowPriority' | string: Virtual Machine priority
* **vmSize**: string: Virtual Machine Size

## ArmResourceId
### Properties
* **resourceId**: string: Arm ResourceId is in the format "/subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.Storage/storageAccounts/{StorageAccountName}"
or "/subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{AcrName}"

## AssetReferenceBase
* **Discriminator**: referenceType

### Base Properties

### DataPathAssetReference
#### Properties
* **datastoreId**: string: ARM resource ID of the datastore where the asset is located.
* **path**: string: The path of the file/directory in the datastore.
* **referenceType**: 'DataPath' (Required): [Required] Specifies the type of asset reference.

### IdAssetReference
#### Properties
* **assetId**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] ARM resource ID of the asset.
* **referenceType**: 'Id' (Required): [Required] Specifies the type of asset reference.

### OutputPathAssetReference
#### Properties
* **jobId**: string: ARM resource ID of the job.
* **path**: string: The path of the file/directory in the job output.
* **referenceType**: 'OutputPath' (Required): [Required] Specifies the type of asset reference.


## AssignedUser
### Properties
* **objectId**: string (Required): User’s AAD Object Id.
* **tenantId**: string (Required): User’s AAD Tenant Id.

## AutoMLJobEnvironmentVariables
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AutoMLJobOutputs
### Properties
### Additional Properties
* **Additional Properties Type**: [JobOutput](#joboutput)

## AutoMLVertical
* **Discriminator**: taskType

### Base Properties
* **logVerbosity**: 'Critical' | 'Debug' | 'Error' | 'Info' | 'NotSet' | 'Warning' | string: Log verbosity for the job.
* **targetColumnName**: string: Target column name: This is prediction values column.
Also known as label column name in context of classification tasks.
* **trainingData**: [MLTableJobInput](#mltablejobinput) (Required): [Required] Training data input.

### Classification
#### Properties
* **cvSplitColumnNames**: string[]: Columns to use for CVSplit data.
* **featurizationSettings**: [TableVerticalFeaturizationSettings](#tableverticalfeaturizationsettings): Featurization inputs needed for AutoML job.
* **limitSettings**: [TableVerticalLimitSettings](#tableverticallimitsettings): Execution constraints for AutoMLJob.
* **nCrossValidations**: [NCrossValidations](#ncrossvalidations): Number of cross validation folds to be applied on training dataset
when validation dataset is not provided.
* **positiveLabel**: string: Positive label for binary metrics calculation.
* **primaryMetric**: 'AUCWeighted' | 'Accuracy' | 'AveragePrecisionScoreWeighted' | 'NormMacroRecall' | 'PrecisionScoreWeighted' | string: Primary metric for the task.
* **taskType**: 'Classification' (Required): [Required] Task type for AutoMLJob.
* **testData**: [MLTableJobInput](#mltablejobinput): Test data input.
* **testDataSize**: int: The fraction of test dataset that needs to be set aside for validation purpose.
Values between (0.0 , 1.0)
Applied when validation dataset is not provided.
* **trainingSettings**: [ClassificationTrainingSettings](#classificationtrainingsettings): Inputs for training phase for an AutoML Job.
* **validationData**: [MLTableJobInput](#mltablejobinput): Validation data inputs.
* **validationDataSize**: int: The fraction of training dataset that needs to be set aside for validation purpose.
Values between (0.0 , 1.0)
Applied when validation dataset is not provided.
* **weightColumnName**: string: The name of the sample weight column. Automated ML supports a weighted column as an input, causing rows in the data to be weighted up or down.

### Forecasting
#### Properties
* **cvSplitColumnNames**: string[]: Columns to use for CVSplit data.
* **featurizationSettings**: [TableVerticalFeaturizationSettings](#tableverticalfeaturizationsettings): Featurization inputs needed for AutoML job.
* **forecastingSettings**: [ForecastingSettings](#forecastingsettings): Forecasting task specific inputs.
* **limitSettings**: [TableVerticalLimitSettings](#tableverticallimitsettings): Execution constraints for AutoMLJob.
* **nCrossValidations**: [NCrossValidations](#ncrossvalidations): Number of cross validation folds to be applied on training dataset
when validation dataset is not provided.
* **primaryMetric**: 'NormalizedMeanAbsoluteError' | 'NormalizedRootMeanSquaredError' | 'R2Score' | 'SpearmanCorrelation' | string: Primary metric for forecasting task.
* **taskType**: 'Forecasting' (Required): [Required] Task type for AutoMLJob.
* **testData**: [MLTableJobInput](#mltablejobinput): Test data input.
* **testDataSize**: int: The fraction of test dataset that needs to be set aside for validation purpose.
Values between (0.0 , 1.0)
Applied when validation dataset is not provided.
* **trainingSettings**: [ForecastingTrainingSettings](#forecastingtrainingsettings): Inputs for training phase for an AutoML Job.
* **validationData**: [MLTableJobInput](#mltablejobinput): Validation data inputs.
* **validationDataSize**: int: The fraction of training dataset that needs to be set aside for validation purpose.
Values between (0.0 , 1.0)
Applied when validation dataset is not provided.
* **weightColumnName**: string: The name of the sample weight column. Automated ML supports a weighted column as an input, causing rows in the data to be weighted up or down.

### ImageClassification
#### Properties
* **limitSettings**: [ImageLimitSettings](#imagelimitsettings) (Required): [Required] Limit settings for the AutoML job.
* **modelSettings**: [ImageModelSettingsClassification](#imagemodelsettingsclassification): Settings used for training the model.
* **primaryMetric**: 'AUCWeighted' | 'Accuracy' | 'AveragePrecisionScoreWeighted' | 'NormMacroRecall' | 'PrecisionScoreWeighted' | string: Primary metric to optimize for this task.
* **searchSpace**: [ImageModelDistributionSettingsClassification](#imagemodeldistributionsettingsclassification)[]: Search space for sampling different combinations of models and their hyperparameters.
* **sweepSettings**: [ImageSweepSettings](#imagesweepsettings): Model sweeping and hyperparameter sweeping related settings.
* **taskType**: 'ImageClassification' (Required): [Required] Task type for AutoMLJob.
* **validationData**: [MLTableJobInput](#mltablejobinput): Validation data inputs.
* **validationDataSize**: int: The fraction of training dataset that needs to be set aside for validation purpose.
Values between (0.0 , 1.0)
Applied when validation dataset is not provided.

### ImageClassificationMultilabel
#### Properties
* **limitSettings**: [ImageLimitSettings](#imagelimitsettings) (Required): [Required] Limit settings for the AutoML job.
* **modelSettings**: [ImageModelSettingsClassification](#imagemodelsettingsclassification): Settings used for training the model.
* **primaryMetric**: 'AUCWeighted' | 'Accuracy' | 'AveragePrecisionScoreWeighted' | 'IOU' | 'NormMacroRecall' | 'PrecisionScoreWeighted' | string: Primary metric to optimize for this task.
* **searchSpace**: [ImageModelDistributionSettingsClassification](#imagemodeldistributionsettingsclassification)[]: Search space for sampling different combinations of models and their hyperparameters.
* **sweepSettings**: [ImageSweepSettings](#imagesweepsettings): Model sweeping and hyperparameter sweeping related settings.
* **taskType**: 'ImageClassificationMultilabel' (Required): [Required] Task type for AutoMLJob.
* **validationData**: [MLTableJobInput](#mltablejobinput): Validation data inputs.
* **validationDataSize**: int: The fraction of training dataset that needs to be set aside for validation purpose.
Values between (0.0 , 1.0)
Applied when validation dataset is not provided.

### ImageInstanceSegmentation
#### Properties
* **limitSettings**: [ImageLimitSettings](#imagelimitsettings) (Required): [Required] Limit settings for the AutoML job.
* **modelSettings**: [ImageModelSettingsObjectDetection](#imagemodelsettingsobjectdetection): Settings used for training the model.
* **primaryMetric**: 'MeanAveragePrecision' | string: Primary metric to optimize for this task.
* **searchSpace**: [ImageModelDistributionSettingsObjectDetection](#imagemodeldistributionsettingsobjectdetection)[]: Search space for sampling different combinations of models and their hyperparameters.
* **sweepSettings**: [ImageSweepSettings](#imagesweepsettings): Model sweeping and hyperparameter sweeping related settings.
* **taskType**: 'ImageInstanceSegmentation' (Required): [Required] Task type for AutoMLJob.
* **validationData**: [MLTableJobInput](#mltablejobinput): Validation data inputs.
* **validationDataSize**: int: The fraction of training dataset that needs to be set aside for validation purpose.
Values between (0.0 , 1.0)
Applied when validation dataset is not provided.

### ImageObjectDetection
#### Properties
* **limitSettings**: [ImageLimitSettings](#imagelimitsettings) (Required): [Required] Limit settings for the AutoML job.
* **modelSettings**: [ImageModelSettingsObjectDetection](#imagemodelsettingsobjectdetection): Settings used for training the model.
* **primaryMetric**: 'MeanAveragePrecision' | string: Primary metric to optimize for this task.
* **searchSpace**: [ImageModelDistributionSettingsObjectDetection](#imagemodeldistributionsettingsobjectdetection)[]: Search space for sampling different combinations of models and their hyperparameters.
* **sweepSettings**: [ImageSweepSettings](#imagesweepsettings): Model sweeping and hyperparameter sweeping related settings.
* **taskType**: 'ImageObjectDetection' (Required): [Required] Task type for AutoMLJob.
* **validationData**: [MLTableJobInput](#mltablejobinput): Validation data inputs.
* **validationDataSize**: int: The fraction of training dataset that needs to be set aside for validation purpose.
Values between (0.0 , 1.0)
Applied when validation dataset is not provided.

### Regression
#### Properties
* **cvSplitColumnNames**: string[]: Columns to use for CVSplit data.
* **featurizationSettings**: [TableVerticalFeaturizationSettings](#tableverticalfeaturizationsettings): Featurization inputs needed for AutoML job.
* **limitSettings**: [TableVerticalLimitSettings](#tableverticallimitsettings): Execution constraints for AutoMLJob.
* **nCrossValidations**: [NCrossValidations](#ncrossvalidations): Number of cross validation folds to be applied on training dataset
when validation dataset is not provided.
* **primaryMetric**: 'NormalizedMeanAbsoluteError' | 'NormalizedRootMeanSquaredError' | 'R2Score' | 'SpearmanCorrelation' | string: Primary metric for regression task.
* **taskType**: 'Regression' (Required): [Required] Task type for AutoMLJob.
* **testData**: [MLTableJobInput](#mltablejobinput): Test data input.
* **testDataSize**: int: The fraction of test dataset that needs to be set aside for validation purpose.
Values between (0.0 , 1.0)
Applied when validation dataset is not provided.
* **trainingSettings**: [RegressionTrainingSettings](#regressiontrainingsettings): Inputs for training phase for an AutoML Job.
* **validationData**: [MLTableJobInput](#mltablejobinput): Validation data inputs.
* **validationDataSize**: int: The fraction of training dataset that needs to be set aside for validation purpose.
Values between (0.0 , 1.0)
Applied when validation dataset is not provided.
* **weightColumnName**: string: The name of the sample weight column. Automated ML supports a weighted column as an input, causing rows in the data to be weighted up or down.

### TextClassification
#### Properties
* **featurizationSettings**: [NlpVerticalFeaturizationSettings](#nlpverticalfeaturizationsettings): Featurization inputs needed for AutoML job.
* **limitSettings**: [NlpVerticalLimitSettings](#nlpverticallimitsettings): Execution constraints for AutoMLJob.
* **primaryMetric**: 'AUCWeighted' | 'Accuracy' | 'AveragePrecisionScoreWeighted' | 'NormMacroRecall' | 'PrecisionScoreWeighted' | string: Primary metric for Text-Classification task.
* **taskType**: 'TextClassification' (Required): [Required] Task type for AutoMLJob.
* **validationData**: [MLTableJobInput](#mltablejobinput): Validation data inputs.

### TextClassificationMultilabel
#### Properties
* **featurizationSettings**: [NlpVerticalFeaturizationSettings](#nlpverticalfeaturizationsettings): Featurization inputs needed for AutoML job.
* **limitSettings**: [NlpVerticalLimitSettings](#nlpverticallimitsettings): Execution constraints for AutoMLJob.
* **primaryMetric**: 'AUCWeighted' | 'Accuracy' | 'AveragePrecisionScoreWeighted' | 'IOU' | 'NormMacroRecall' | 'PrecisionScoreWeighted' | string (ReadOnly): Primary metric for Text-Classification-Multilabel task.
Currently only Accuracy is supported as primary metric, hence user need not set it explicitly.
* **taskType**: 'TextClassificationMultilabel' (Required): [Required] Task type for AutoMLJob.
* **validationData**: [MLTableJobInput](#mltablejobinput): Validation data inputs.

### TextNer
#### Properties
* **featurizationSettings**: [NlpVerticalFeaturizationSettings](#nlpverticalfeaturizationsettings): Featurization inputs needed for AutoML job.
* **limitSettings**: [NlpVerticalLimitSettings](#nlpverticallimitsettings): Execution constraints for AutoMLJob.
* **primaryMetric**: 'AUCWeighted' | 'Accuracy' | 'AveragePrecisionScoreWeighted' | 'NormMacroRecall' | 'PrecisionScoreWeighted' | string (ReadOnly): Primary metric for Text-NER task.
Only 'Accuracy' is supported for Text-NER, so user need not set this explicitly.
* **taskType**: 'TextNER' (Required): [Required] Task type for AutoMLJob.
* **validationData**: [MLTableJobInput](#mltablejobinput): Validation data inputs.


## AutoPauseProperties
### Properties
* **delayInMinutes**: int
* **enabled**: bool

## AutoScaleProperties
### Properties
* **enabled**: bool
* **maxNodeCount**: int
* **minNodeCount**: int

## AzureOpenAiHyperParameters
### Properties
* **batchSize**: int: Number of examples in each batch. A larger batch size means that model parameters are updated less frequently, but with lower variance.
* **learningRateMultiplier**: int: Scaling factor for the learning rate. A smaller learning rate may be useful to avoid over fitting.
* **nEpochs**: int: The number of epochs to train the model for. An epoch refers to one full cycle through the training dataset.

## BatchDeploymentConfiguration
* **Discriminator**: deploymentConfigurationType

### Base Properties

### BatchPipelineComponentDeploymentConfiguration
#### Properties
* **componentId**: [IdAssetReference](#idassetreference): The ARM id of the component to be run.
* **deploymentConfigurationType**: 'PipelineComponent' (Required): [Required] The type of the deployment
* **description**: string: The description which will be applied to the job.
* **settings**: [BatchPipelineComponentDeploymentConfigurationSettings](#batchpipelinecomponentdeploymentconfigurationsettings): Run-time settings for the pipeline job.
* **tags**: [BatchPipelineComponentDeploymentConfigurationTags](#batchpipelinecomponentdeploymentconfigurationtags): The tags which will be applied to the job.


## BatchDeploymentProperties
### Properties
* **codeConfiguration**: [CodeConfiguration](#codeconfiguration): Code configuration for the endpoint deployment.
* **compute**: string: Compute target for batch inference operation.
* **deploymentConfiguration**: [BatchDeploymentConfiguration](#batchdeploymentconfiguration): Properties relevant to different deployment types.
* **description**: string: Description of the endpoint deployment.
* **environmentId**: string: ARM resource ID or AssetId of the environment specification for the endpoint deployment.
* **environmentVariables**: [EndpointDeploymentPropertiesBaseEnvironmentVariables](#endpointdeploymentpropertiesbaseenvironmentvariables): Environment variables configuration for the deployment.
* **errorThreshold**: int: Error threshold, if the error count for the entire input goes above this value,
the batch inference will be aborted. Range is [-1, int.MaxValue].
For FileDataset, this value is the count of file failures.
For TabularDataset, this value is the count of record failures.
If set to -1 (the lower bound), all failures during batch inference will be ignored.
* **loggingLevel**: 'Debug' | 'Info' | 'Warning' | string: Logging level for batch inference operation.
* **maxConcurrencyPerInstance**: int: Indicates maximum number of parallelism per instance.
* **miniBatchSize**: int: Size of the mini-batch passed to each batch invocation.
For FileDataset, this is the number of files per mini-batch.
For TabularDataset, this is the size of the records in bytes, per mini-batch.
* **model**: [AssetReferenceBase](#assetreferencebase): Reference to the model asset for the endpoint deployment.
* **outputAction**: 'AppendRow' | 'SummaryOnly' | string: Indicates how the output will be organized.
* **outputFileName**: string: Customized output file name for append_row output action.
* **properties**: [EndpointDeploymentPropertiesBaseProperties](#endpointdeploymentpropertiesbaseproperties): Property dictionary. Properties can be added, but not removed or altered.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Scaling' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state for the endpoint deployment.
* **resources**: [DeploymentResourceConfiguration](#deploymentresourceconfiguration): Indicates compute configuration for the job.
If not provided, will default to the defaults defined in ResourceConfiguration.
* **retrySettings**: [BatchRetrySettings](#batchretrysettings): Retry Settings for the batch inference operation.
If not provided, will default to the defaults defined in BatchRetrySettings.

## BatchEndpointDefaults
### Properties
* **deploymentName**: string: Name of the deployment that will be default for the endpoint.
This deployment will end up getting 100% traffic when the endpoint scoring URL is invoked.

## BatchEndpointProperties
### Properties
* **authMode**: 'AADToken' | 'AMLToken' | 'Key' | string (Required): [Required] The authentication method for invoking the endpoint (data plane operation). Use 'Key' for key-based authentication. Use 'AMLToken' for Azure Machine Learning token-based authentication. Use 'AADToken' for Microsoft Entra token-based authentication.
* **defaults**: [BatchEndpointDefaults](#batchendpointdefaults): Default values for Batch Endpoint
* **description**: string: Description of the inference endpoint.
* **keys**: [EndpointAuthKeys](#endpointauthkeys) (WriteOnly): EndpointAuthKeys to set initially on an Endpoint.
This property will always be returned as null. AuthKey values must be retrieved using the ListKeys API.
* **properties**: [EndpointPropertiesBaseProperties](#endpointpropertiesbaseproperties): Property dictionary. Properties can be added, but not removed or altered.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state for the endpoint.
* **scoringUri**: string (ReadOnly): Endpoint URI.
* **swaggerUri**: string (ReadOnly): Endpoint Swagger URI.

## BatchPipelineComponentDeploymentConfigurationSettings
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BatchPipelineComponentDeploymentConfigurationTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BatchRetrySettings
### Properties
* **maxRetries**: int: Maximum retry count for a mini-batch
* **timeout**: string: Invocation timeout for a mini-batch, in ISO 8601 format.

## BindOptions
### Properties
* **createHostPath**: bool: Indicate whether to create host path.
* **propagation**: string: Type of Bind Option
* **selinux**: string: Mention the selinux options.

## BuildContext
### Properties
* **contextUri**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] URI of the Docker build context used to build the image. Supports blob URIs on environment creation and may return blob or Git URIs.
<seealso href="https://docs.docker.com/engine/reference/commandline/build/#extended-description" />
* **dockerfilePath**: string: Path to the Dockerfile in the build context.
<seealso href="https://docs.docker.com/engine/reference/builder/" />

## CapabilityHostProperties
### Properties
* **aiServicesConnections**: string[]: List of AI services connections.
* **capabilityHostKind**: 'Agents' | string: Kind of this capability host.
* **customerSubnet**: string: Customer subnet info to help set up this capability host.
* **description**: string: The asset description text.
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state for the CapabilityHost.
* **storageConnections**: string[]: List of Storage connections.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.
* **vectorStoreConnections**: string[]: List of VectorStore connections.

## CertificateDatastoreSecrets
### Properties
* **certificate**: string: Service principal certificate.
* **secretsType**: 'AccountKey' | 'Certificate' | 'Sas' | 'ServicePrincipal' | string (Required): [Required] Credential type used to authentication with storage.

## ClassificationTrainingSettings
### Properties
* **allowedTrainingAlgorithms**: ('BernoulliNaiveBayes' | 'DecisionTree' | 'ExtremeRandomTrees' | 'GradientBoosting' | 'KNN' | 'LightGBM' | 'LinearSVM' | 'LogisticRegression' | 'MultinomialNaiveBayes' | 'RandomForest' | 'SGD' | 'SVM' | 'XGBoostClassifier' | string)[]: Allowed models for classification task.
* **blockedTrainingAlgorithms**: ('BernoulliNaiveBayes' | 'DecisionTree' | 'ExtremeRandomTrees' | 'GradientBoosting' | 'KNN' | 'LightGBM' | 'LinearSVM' | 'LogisticRegression' | 'MultinomialNaiveBayes' | 'RandomForest' | 'SGD' | 'SVM' | 'XGBoostClassifier' | string)[]: Blocked models for classification task.
* **enableDnnTraining**: bool: Enable recommendation of DNN models.
* **enableModelExplainability**: bool: Flag to turn on explainability on best model.
* **enableOnnxCompatibleModels**: bool: Flag for enabling onnx compatible models.
* **enableStackEnsemble**: bool: Enable stack ensemble run.
* **enableVoteEnsemble**: bool: Enable voting ensemble run.
* **ensembleModelDownloadTimeout**: string: During VotingEnsemble and StackEnsemble model generation, multiple fitted models from the previous child runs are downloaded.
Configure this parameter with a higher value than 300 secs, if more time is needed.
* **stackEnsembleSettings**: [StackEnsembleSettings](#stackensemblesettings): Stack ensemble settings for stack ensemble run.

## CodeConfiguration
### Properties
* **codeId**: string: ARM resource ID of the code asset.
* **scoringScript**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] The script to execute on startup. eg. "score.py"

## CodeContainerProperties
### Properties
* **description**: string: The asset description text.
* **isArchived**: bool: Is the asset archived?
* **latestVersion**: string (ReadOnly): The latest version inside this container.
* **nextVersion**: string (ReadOnly): The next auto incremental version
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state for the code container.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.

## CodeVersionProperties
### Properties
* **codeUri**: string: Uri where code is located
* **description**: string: The asset description text.
* **isAnonymous**: bool: If the name version are system generated (anonymous registration).
* **isArchived**: bool: Is the asset archived?
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state for the code version.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.

## CognitiveServicesSku
### Properties
* **capacity**: int
* **family**: string
* **name**: string
* **size**: string
* **tier**: string

## Collection
### Properties
* **clientId**: string: The msi client id used to collect logging to blob storage. If it's null,backend will pick a registered endpoint identity to auth.
* **dataCollectionMode**: 'Disabled' | 'Enabled' | string: Enable or disable data collection.
* **dataId**: string: The data asset arm resource id. Client side will ensure data asset is pointing to the blob storage, and backend will collect data to the blob storage.
* **samplingRate**: int: The sampling rate for collection. Sampling rate 1.0 means we collect 100% of data by default.

## ColumnTransformer
### Properties
* **fields**: string[]: Fields to apply transformer logic on.
* **parameters**: any: Different properties to be passed to transformer.
Input expected is dictionary of key,value pairs in JSON format.

## CommandJobEnvironmentVariables
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CommandJobInputs
### Properties
### Additional Properties
* **Additional Properties Type**: [JobInput](#jobinput)

## CommandJobLimits
### Properties
* **jobLimitsType**: 'Command' | 'Sweep' | string (Required): [Required] JobLimit type.
* **timeout**: string: The max run duration in ISO 8601 format, after which the job will be cancelled. Only supports duration with precision as low as Seconds.

## CommandJobOutputs
### Properties
### Additional Properties
* **Additional Properties Type**: [JobOutput](#joboutput)

## ComponentContainerProperties
### Properties
* **description**: string: The asset description text.
* **isArchived**: bool: Is the asset archived?
* **latestVersion**: string (ReadOnly): The latest version inside this container.
* **nextVersion**: string (ReadOnly): The next auto incremental version
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state for the component container.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.

## ComponentVersionProperties
### Properties
* **componentSpec**: any: Defines Component definition details.
<see href="https://docs.microsoft.com/en-us/azure/machine-learning/reference-yaml-component-command" />
* **description**: string: The asset description text.
* **isAnonymous**: bool: If the name version are system generated (anonymous registration).
* **isArchived**: bool: Is the asset archived?
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state for the component version.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.

## Compute
* **Discriminator**: computeType

### Base Properties
* **computeLocation**: string: Location for the underlying compute
* **createdOn**: string (ReadOnly): The time at which the compute was created.
* **description**: string: The description of the Machine Learning compute.
* **disableLocalAuth**: bool: Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
* **isAttachedCompute**: bool (ReadOnly): Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false.
* **modifiedOn**: string (ReadOnly): The time at which the compute was last modified.
* **provisioningErrors**: [ErrorResponse](#errorresponse)[] (ReadOnly): Errors during provisioning
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
* **resourceId**: string: ARM resource id of the underlying compute

### AKS
#### Properties
* **computeType**: 'AKS' (Required): The type of compute
* **properties**: [AKSSchemaProperties](#aksschemaproperties): AKS properties

### AmlCompute
#### Properties
* **computeType**: 'AmlCompute' (Required): The type of compute
* **properties**: [AmlComputeProperties](#amlcomputeproperties): Properties of AmlCompute

### ComputeInstance
#### Properties
* **computeType**: 'ComputeInstance' (Required): The type of compute
* **properties**: [ComputeInstanceProperties](#computeinstanceproperties): Properties of ComputeInstance

### Databricks
#### Properties
* **computeType**: 'Databricks' (Required): The type of compute
* **properties**: [DatabricksProperties](#databricksproperties): Properties of Databricks

### DataFactory
#### Properties
* **computeType**: 'DataFactory' (Required): The type of compute

### DataLakeAnalytics
#### Properties
* **computeType**: 'DataLakeAnalytics' (Required): The type of compute
* **properties**: [DataLakeAnalyticsSchemaProperties](#datalakeanalyticsschemaproperties)

### HDInsight
#### Properties
* **computeType**: 'HDInsight' (Required): The type of compute
* **properties**: [HDInsightProperties](#hdinsightproperties): HDInsight compute properties

### Kubernetes
#### Properties
* **computeType**: 'Kubernetes' (Required): The type of compute
* **properties**: [KubernetesProperties](#kubernetesproperties): Properties of Kubernetes

### SynapseSpark
#### Properties
* **computeType**: 'SynapseSpark' (Required): The type of compute
* **properties**: [SynapseSparkProperties](#synapsesparkproperties)

### VirtualMachine
#### Properties
* **computeType**: 'VirtualMachine' (Required): The type of compute
* **properties**: [VirtualMachineSchemaProperties](#virtualmachineschemaproperties)


## ComputeInstanceApplication
### Properties
* **displayName**: string: Name of the ComputeInstance application.
* **endpointUri**: string: Application' endpoint URI.

## ComputeInstanceAutologgerSettings
### Properties
* **mlflowAutologger**: 'Disabled' | 'Enabled' | string: Indicates whether mlflow autologger is enabled for notebooks.

## ComputeInstanceConnectivityEndpoints
### Properties
* **privateIpAddress**: string (ReadOnly): Private IP Address of this ComputeInstance (local to the VNET in which the compute instance is deployed).
* **publicIpAddress**: string (ReadOnly): Public IP Address of this ComputeInstance.

## ComputeInstanceContainer
### Properties
* **autosave**: 'Local' | 'None' | 'Remote' | string: Auto save settings.
* **environment**: [ComputeInstanceEnvironmentInfo](#computeinstanceenvironmentinfo): Environment information of this container.
* **gpu**: string: Information of GPU.
* **name**: string: Name of the ComputeInstance container.
* **network**: 'Bridge' | 'Host' | string: network of this container.
* **services**: any[] (ReadOnly): services of this containers.

## ComputeInstanceCreatedBy
### Properties
* **userId**: string (ReadOnly): Uniquely identifies the user within his/her organization.
* **userName**: string (ReadOnly): Name of the user.
* **userOrgId**: string (ReadOnly): Uniquely identifies user' Azure Active Directory organization.

## ComputeInstanceDataDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite' | string: Caching type of Data Disk.
* **diskSizeGB**: int: The initial disk size in gigabytes.
* **lun**: int: The lun is used to uniquely identify each data disk. If attaching multiple disks, each should have a distinct lun.
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS' | string: type of this storage account.

## ComputeInstanceDataMount
### Properties
* **createdBy**: string: who this data mount created by.
* **error**: string: Error of this data mount.
* **mountAction**: 'Mount' | 'Unmount' | string: Mount Action.
* **mountedOn**: string: The time when the disk mounted.
* **mountMode**: 'ReadOnly' | 'ReadWrite' | string: Mount Mode.
* **mountName**: string: name of the ComputeInstance data mount.
* **mountPath**: string: Path of this data mount.
* **mountState**: 'MountFailed' | 'MountRequested' | 'Mounted' | 'UnmountFailed' | 'UnmountRequested' | 'Unmounted' | string: Mount state.
* **source**: string: Source of the ComputeInstance data mount.
* **sourceType**: 'Dataset' | 'Datastore' | 'URI' | string: Data source type.

## ComputeInstanceEnvironmentInfo
### Properties
* **name**: string: name of environment.
* **version**: string: version of environment.

## ComputeInstanceLastOperation
### Properties
* **operationName**: 'Create' | 'Delete' | 'Reimage' | 'Resize' | 'Restart' | 'Start' | 'Stop' | string: Name of the last operation.
* **operationStatus**: 'CreateFailed' | 'DeleteFailed' | 'InProgress' | 'ReimageFailed' | 'ResizeFailed' | 'RestartFailed' | 'StartFailed' | 'StopFailed' | 'Succeeded' | string: Operation status.
* **operationTime**: string: Time of the last operation.
* **operationTrigger**: 'IdleShutdown' | 'Schedule' | 'User' | string: Trigger of operation.

## ComputeInstanceProperties
### Properties
* **applications**: [ComputeInstanceApplication](#computeinstanceapplication)[] (ReadOnly): Describes available applications and their endpoints on this ComputeInstance.
* **applicationSharingPolicy**: 'Personal' | 'Shared' | string: Policy for sharing applications on this compute instance among users of parent workspace. If Personal, only the creator can access applications on this compute instance. When Shared, any workspace user can access applications on this instance depending on his/her assigned role.
* **autologgerSettings**: [ComputeInstanceAutologgerSettings](#computeinstanceautologgersettings): Specifies settings for autologger.
* **computeInstanceAuthorizationType**: 'personal' | string: The Compute Instance Authorization type. Available values are personal (default).
* **connectivityEndpoints**: [ComputeInstanceConnectivityEndpoints](#computeinstanceconnectivityendpoints) (ReadOnly): Describes all connectivity endpoints available for this ComputeInstance.
* **containers**: [ComputeInstanceContainer](#computeinstancecontainer)[] (ReadOnly): Describes informations of containers on this ComputeInstance.
* **createdBy**: [ComputeInstanceCreatedBy](#computeinstancecreatedby) (ReadOnly): Describes information on user who created this ComputeInstance.
* **customServices**: [CustomService](#customservice)[]: List of Custom Services added to the compute.
* **dataDisks**: [ComputeInstanceDataDisk](#computeinstancedatadisk)[] (ReadOnly): Describes informations of dataDisks on this ComputeInstance.
* **dataMounts**: [ComputeInstanceDataMount](#computeinstancedatamount)[] (ReadOnly): Describes informations of dataMounts on this ComputeInstance.
* **enableNodePublicIp**: bool: Enable or disable node public IP address provisioning. Possible values are: Possible values are: true - Indicates that the compute nodes will have public IPs provisioned. false - Indicates that the compute nodes will have a private endpoint and no public IPs.
* **enableOSPatching**: bool: Enable Auto OS Patching. Possible values are: true, false.
* **enableRootAccess**: bool: Enable root access. Possible values are: true, false.
* **enableSSO**: bool: Enable SSO (single sign on). Possible values are: true, false.
* **errors**: [ErrorResponse](#errorresponse)[] (ReadOnly): Collection of errors encountered on this ComputeInstance.
* **idleTimeBeforeShutdown**: string: Stops compute instance after user defined period of inactivity. Time is defined in ISO8601 format. Minimum is 15 min, maximum is 3 days.
* **lastOperation**: [ComputeInstanceLastOperation](#computeinstancelastoperation) (ReadOnly): The last operation on ComputeInstance.
* **osImageMetadata**: [ImageMetadata](#imagemetadata) (ReadOnly): Returns metadata about the operating system image for this compute instance.
* **personalComputeInstanceSettings**: [PersonalComputeInstanceSettings](#personalcomputeinstancesettings): Settings for a personal compute instance.
* **releaseQuotaOnStop**: bool: Release quota if compute instance stopped. Possible values are: true - release quota if compute instance stopped. false - don't release quota when compute instance stopped.
* **schedules**: [ComputeSchedules](#computeschedules): The list of schedules to be applied on the computes.
* **setupScripts**: [SetupScripts](#setupscripts): Details of customized scripts to execute for setting up the cluster.
* **sshSettings**: [ComputeInstanceSshSettings](#computeinstancesshsettings): Specifies policy and settings for SSH access.
* **state**: 'CreateFailed' | 'Creating' | 'Deleting' | 'JobRunning' | 'Resizing' | 'Restarting' | 'Running' | 'SettingUp' | 'SetupFailed' | 'Starting' | 'Stopped' | 'Stopping' | 'Unknown' | 'Unusable' | 'UserSettingUp' | 'UserSetupFailed' | string (ReadOnly): The current state of this ComputeInstance.
* **subnet**: [ResourceId](#resourceid): Virtual network subnet resource ID the compute nodes belong to.
* **versions**: [ComputeInstanceVersion](#computeinstanceversion) (ReadOnly): ComputeInstance version.
* **vmSize**: string: Virtual Machine Size

## ComputeInstanceSshSettings
### Properties
* **adminPublicKey**: string: Specifies the SSH rsa public key file as a string. Use "ssh-keygen -t rsa -b 2048" to generate your SSH key pairs.
* **adminUserName**: string (ReadOnly): Describes the admin user name.
* **sshPort**: int (ReadOnly): Describes the port for connecting through SSH.
* **sshPublicAccess**: 'Disabled' | 'Enabled' | string: State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on this instance. Enabled - Indicates that the public ssh port is open and accessible according to the VNet/subnet policy if applicable.

## ComputeInstanceVersion
### Properties
* **runtime**: string: Runtime of compute instance.

## ComputeRecurrenceSchedule
### Properties
* **hours**: int[] (Required): [Required] List of hours for the schedule.
* **minutes**: int[] (Required): [Required] List of minutes for the schedule.
* **monthDays**: int[]: List of month days for the schedule
* **weekDays**: ('Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string)[]: List of days for the schedule.

## ComputeResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ComputeRuntimeDto
### Properties
* **sparkRuntimeVersion**: string

## ComputeSchedules
### Properties
* **computeStartStop**: [ComputeStartStopSchedule](#computestartstopschedule)[]: The list of compute start stop schedules to be applied.

## ComputeSecrets
* **Discriminator**: computeType

### Base Properties

### AksComputeSecrets
#### Properties
* **adminKubeConfig**: string: Content of kubeconfig file that can be used to connect to the Kubernetes cluster.
* **computeType**: 'AKS' (Required): The type of compute
* **imagePullSecretName**: string: Image registry pull secret.
* **userKubeConfig**: string: Content of kubeconfig file that can be used to connect to the Kubernetes cluster.

### DatabricksComputeSecrets
#### Properties
* **computeType**: 'Databricks' (Required): The type of compute
* **databricksAccessToken**: string: access token for databricks account.

### VirtualMachineSecrets
#### Properties
* **administratorAccount**: [VirtualMachineSshCredentials](#virtualmachinesshcredentials): Admin credentials for virtual machine.
* **computeType**: 'VirtualMachine' (Required): The type of compute


## ComputeStartStopSchedule
### Properties
* **action**: 'Start' | 'Stop' | string: [Required] The compute power action.
* **cron**: [Cron](#cron): Required if triggerType is Cron.
* **id**: string (ReadOnly): A system assigned id for the schedule.
* **provisioningStatus**: 'Completed' | 'Failed' | 'Provisioning' | string (ReadOnly): The current deployment state of schedule.
* **recurrence**: [Recurrence](#recurrence): Required if triggerType is Recurrence.
* **schedule**: [ScheduleBase](#schedulebase): [Deprecated] Not used any more.
* **status**: 'Disabled' | 'Enabled' | string: Is the schedule enabled or disabled?
* **triggerType**: 'Cron' | 'Recurrence' | string: [Required] The schedule trigger type.

## ContainerResourceRequirements
### Properties
* **containerResourceLimits**: [ContainerResourceSettings](#containerresourcesettings): Container resource limit info:
* **containerResourceRequests**: [ContainerResourceSettings](#containerresourcesettings): Container resource request info:

## ContainerResourceSettings
### Properties
* **cpu**: string: Number of vCPUs request/limit for container. More info:
https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
* **gpu**: string: Number of Nvidia GPU cards request/limit for container. More info:
https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
* **memory**: string: Memory size request/limit for container. More info:
https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/

## ContentSafety
### Properties
* **contentSafetyStatus**: 'Disabled' | 'Enabled' | string (Required): [Required] Specifies the status of content safety.

## CosmosDbSettings
### Properties
* **collectionsThroughput**: int

## Cron
### Properties
* **expression**: string: [Required] Specifies cron expression of schedule.
The expression should follow NCronTab format.
* **startTime**: string: The start time in yyyy-MM-ddTHH:mm:ss format.
* **timeZone**: string: Specifies time zone in which the schedule runs.
TimeZone should follow Windows time zone format. Refer: https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/default-time-zones?view=windows-11

## CustomKeys
### Properties
* **keys**: [CustomKeys](#customkeys): Dictionary of <string>

## CustomKeys
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CustomMetricThreshold
### Properties
* **metric**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] The user-defined metric to calculate.
* **threshold**: [MonitoringThreshold](#monitoringthreshold): The threshold value. If null, a default value will be set depending on the selected metric.

## CustomModelFineTuningHyperParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CustomMonitoringSignalInputAssets
### Properties
### Additional Properties
* **Additional Properties Type**: [MonitoringInputDataBase](#monitoringinputdatabase)

## CustomMonitoringSignalInputs
### Properties
### Additional Properties
* **Additional Properties Type**: [JobInput](#jobinput)

## CustomService
### Properties
* **docker**: [Docker](#docker): Describes the docker settings for the image
* **endpoints**: [Endpoint](#endpoint)[]: Configuring the endpoints for the container
* **environmentVariables**: [CustomServiceEnvironmentVariables](#customserviceenvironmentvariables): Environment Variable for the container
* **image**: [Image](#image): Describes the Image Specifications
* **kernel**: [JupyterKernelConfig](#jupyterkernelconfig): Describes the jupyter kernel settings for the image if its a custom environment
* **name**: string: Name of the Custom Service
* **volumes**: [VolumeDefinition](#volumedefinition)[]: Configuring the volumes for the container
### Additional Properties
* **Additional Properties Type**: any

## CustomServiceEnvironmentVariables
### Properties
### Additional Properties
* **Additional Properties Type**: [EnvironmentVariable](#environmentvariable)

## DatabricksProperties
### Properties
* **databricksAccessToken**: string: Databricks access token
* **workspaceUrl**: string: Workspace Url

## DataCollector
### Properties
* **collections**: [DataCollectorCollections](#datacollectorcollections) (Required): [Required] The collection configuration. Each collection has it own configuration to collect model data and the name of collection can be arbitrary string.
Model data collector can be used for either payload logging or custom logging or both of them. Collection request and response are reserved for payload logging, others are for custom logging.
* **requestLogging**: [RequestLogging](#requestlogging): The request logging configuration for mdc, it includes advanced logging settings for all collections. It's optional.
* **rollingRate**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'Year' | string: When model data is collected to blob storage, we need to roll the data to different path to avoid logging all of them in a single blob file.
If the rolling rate is hour, all data will be collected in the blob path /yyyy/MM/dd/HH/.
If it's day, all data will be collected in blob path /yyyy/MM/dd/.
The other benefit of rolling path is that model monitoring ui is able to select a time range of data very quickly.

## DataCollectorCollections
### Properties
### Additional Properties
* **Additional Properties Type**: [Collection](#collection)

## DataContainerProperties
### Properties
* **dataType**: 'mltable' | 'uri_file' | 'uri_folder' | string (Required): [Required] Specifies the type of data.
* **description**: string: The asset description text.
* **isArchived**: bool: Is the asset archived?
* **latestVersion**: string (ReadOnly): The latest version inside this container.
* **nextVersion**: string (ReadOnly): The next auto incremental version
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.

## DataDriftMetricThresholdBase
* **Discriminator**: dataType

### Base Properties
* **threshold**: [MonitoringThreshold](#monitoringthreshold): The threshold value. If null, a default value will be set depending on the selected metric.

### CategoricalDataDriftMetricThreshold
#### Properties
* **dataType**: 'Categorical' (Required): [Required] Specifies the data type of the metric threshold.
* **metric**: 'JensenShannonDistance' | 'PearsonsChiSquaredTest' | 'PopulationStabilityIndex' | string (Required): [Required] The categorical data drift metric to calculate.

### NumericalDataDriftMetricThreshold
#### Properties
* **dataType**: 'Numerical' (Required): [Required] Specifies the data type of the metric threshold.
* **metric**: 'JensenShannonDistance' | 'NormalizedWassersteinDistance' | 'PopulationStabilityIndex' | 'TwoSampleKolmogorovSmirnovTest' | string (Required): [Required] The numerical data drift metric to calculate.


## DataDriftMonitoringSignalFeatureDataTypeOverride
### Properties
### Additional Properties
* **Additional Properties Type**: 'Categorical' | 'Numerical' | string

## DataLakeAnalyticsSchemaProperties
### Properties
* **dataLakeStoreAccountName**: string: DataLake Store Account Name

## DataQualityMetricThresholdBase
* **Discriminator**: dataType

### Base Properties
* **threshold**: [MonitoringThreshold](#monitoringthreshold): The threshold value. If null, a default value will be set depending on the selected metric.

### CategoricalDataQualityMetricThreshold
#### Properties
* **dataType**: 'Categorical' (Required): [Required] Specifies the data type of the metric threshold.
* **metric**: 'DataTypeErrorRate' | 'NullValueRate' | 'OutOfBoundsRate' | string (Required): [Required] The categorical data quality metric to calculate.

### NumericalDataQualityMetricThreshold
#### Properties
* **dataType**: 'Numerical' (Required): [Required] Specifies the data type of the metric threshold.
* **metric**: 'DataTypeErrorRate' | 'NullValueRate' | 'OutOfBoundsRate' | string (Required): [Required] The numerical data quality metric to calculate.


## DataQualityMonitoringSignalFeatureDataTypeOverride
### Properties
### Additional Properties
* **Additional Properties Type**: 'Categorical' | 'Numerical' | string

## DatastoreCredentials
* **Discriminator**: credentialsType

### Base Properties

### AccountKeyDatastoreCredentials
#### Properties
* **credentialsType**: 'AccountKey' (Required): [Required] Credential type used to authentication with storage.
* **secrets**: [AccountKeyDatastoreSecrets](#accountkeydatastoresecrets) (Required, WriteOnly): [Required] Storage account secrets.

### CertificateDatastoreCredentials
#### Properties
* **authorityUrl**: string: Authority URL used for authentication.
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required): [Required] Service principal client ID.
* **credentialsType**: 'Certificate' (Required): [Required] Credential type used to authentication with storage.
* **resourceUrl**: string: Resource the service principal has access to.
* **secrets**: [CertificateDatastoreSecrets](#certificatedatastoresecrets) (Required, WriteOnly): [Required] Service principal secrets.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required): [Required] ID of the tenant to which the service principal belongs.
* **thumbprint**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] Thumbprint of the certificate used for authentication.

### NoneDatastoreCredentials
#### Properties
* **credentialsType**: 'None' (Required): [Required] Credential type used to authentication with storage.

### SasDatastoreCredentials
#### Properties
* **credentialsType**: 'Sas' (Required): [Required] Credential type used to authentication with storage.
* **secrets**: [SasDatastoreSecrets](#sasdatastoresecrets) (Required, WriteOnly): [Required] Storage container secrets.

### ServicePrincipalDatastoreCredentials
#### Properties
* **authorityUrl**: string: Authority URL used for authentication.
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required): [Required] Service principal client ID.
* **credentialsType**: 'ServicePrincipal' (Required): [Required] Credential type used to authentication with storage.
* **resourceUrl**: string: Resource the service principal has access to.
* **secrets**: [ServicePrincipalDatastoreSecrets](#serviceprincipaldatastoresecrets) (Required, WriteOnly): [Required] Service principal secrets.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required): [Required] ID of the tenant to which the service principal belongs.


## DatastoreProperties
* **Discriminator**: datastoreType

### Base Properties
* **credentials**: [DatastoreCredentials](#datastorecredentials) (Required): [Required] Account credentials.
* **description**: string: The asset description text.
* **isDefault**: bool (ReadOnly): Readonly property to indicate if datastore is the workspace default datastore
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.

### AzureBlobDatastore
#### Properties
* **accountName**: string: Storage account name.
* **containerName**: string: Storage account container name.
* **datastoreType**: 'AzureBlob' (Required): [Required] Storage type backing the datastore.
* **endpoint**: string: Azure cloud endpoint for the storage account.
* **protocol**: string: Protocol used to communicate with the storage account.
* **resourceGroup**: string: Azure Resource Group name
* **serviceDataAccessAuthIdentity**: 'None' | 'WorkspaceSystemAssignedIdentity' | 'WorkspaceUserAssignedIdentity' | string: Indicates which identity to use to authenticate service data access to customer's storage.
* **subscriptionId**: string: Azure Subscription Id

### AzureDataLakeGen1Datastore
#### Properties
* **datastoreType**: 'AzureDataLakeGen1' (Required): [Required] Storage type backing the datastore.
* **resourceGroup**: string: Azure Resource Group name
* **serviceDataAccessAuthIdentity**: 'None' | 'WorkspaceSystemAssignedIdentity' | 'WorkspaceUserAssignedIdentity' | string: Indicates which identity to use to authenticate service data access to customer's storage.
* **storeName**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] Azure Data Lake store name.
* **subscriptionId**: string: Azure Subscription Id

### AzureDataLakeGen2Datastore
#### Properties
* **accountName**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] Storage account name.
* **datastoreType**: 'AzureDataLakeGen2' (Required): [Required] Storage type backing the datastore.
* **endpoint**: string: Azure cloud endpoint for the storage account.
* **filesystem**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] The name of the Data Lake Gen2 filesystem.
* **protocol**: string: Protocol used to communicate with the storage account.
* **resourceGroup**: string: Azure Resource Group name
* **serviceDataAccessAuthIdentity**: 'None' | 'WorkspaceSystemAssignedIdentity' | 'WorkspaceUserAssignedIdentity' | string: Indicates which identity to use to authenticate service data access to customer's storage.
* **subscriptionId**: string: Azure Subscription Id

### AzureFileDatastore
#### Properties
* **accountName**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] Storage account name.
* **datastoreType**: 'AzureFile' (Required): [Required] Storage type backing the datastore.
* **endpoint**: string: Azure cloud endpoint for the storage account.
* **fileShareName**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] The name of the Azure file share that the datastore points to.
* **protocol**: string: Protocol used to communicate with the storage account.
* **resourceGroup**: string: Azure Resource Group name
* **serviceDataAccessAuthIdentity**: 'None' | 'WorkspaceSystemAssignedIdentity' | 'WorkspaceUserAssignedIdentity' | string: Indicates which identity to use to authenticate service data access to customer's storage.
* **subscriptionId**: string: Azure Subscription Id

### OneLakeDatastore
#### Properties
* **artifact**: [OneLakeArtifact](#onelakeartifact) (Required): [Required] OneLake artifact backing the datastore.
* **datastoreType**: 'OneLake' (Required): [Required] Storage type backing the datastore.
* **endpoint**: string: OneLake endpoint to use for the datastore.
* **oneLakeWorkspaceName**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] OneLake workspace name.
* **serviceDataAccessAuthIdentity**: 'None' | 'WorkspaceSystemAssignedIdentity' | 'WorkspaceUserAssignedIdentity' | string: Indicates which identity to use to authenticate service data access to customer's storage.


## DatastoreSecrets
* **Discriminator**: secretsType

### Base Properties

### AccountKeyDatastoreSecrets
#### Properties
* **key**: string: Storage account key.
* **secretsType**: 'AccountKey' (Required): [Required] Credential type used to authentication with storage.

### CertificateDatastoreSecrets
#### Properties
* **certificate**: string: Service principal certificate.
* **secretsType**: 'Certificate' (Required): [Required] Credential type used to authentication with storage.

### SasDatastoreSecrets
#### Properties
* **sasToken**: string: Storage container SAS token.
* **secretsType**: 'Sas' (Required): [Required] Credential type used to authentication with storage.

### ServicePrincipalDatastoreSecrets
#### Properties
* **clientSecret**: string: Service principal secret.
* **secretsType**: 'ServicePrincipal' (Required): [Required] Credential type used to authentication with storage.


## DataVersionBaseProperties
* **Discriminator**: dataType

### Base Properties
* **dataUri**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] Uri of the data. Example: https://go.microsoft.com/fwlink/?linkid=2202330
* **description**: string: The asset description text.
* **isAnonymous**: bool: If the name version are system generated (anonymous registration).
* **isArchived**: bool: Is the asset archived?
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.

### MLTableData
#### Properties
* **dataType**: 'mltable' (Required): [Required] Specifies the type of data.
* **referencedUris**: string[]: Uris referenced in the MLTable definition (required for lineage)

### UriFileDataVersion
#### Properties
* **dataType**: 'uri_file' (Required): [Required] Specifies the type of data.

### UriFolderDataVersion
#### Properties
* **dataType**: 'uri_folder' (Required): [Required] Specifies the type of data.


## DeploymentResourceConfiguration
### Properties
* **instanceCount**: int: Optional number of instances or nodes used by the compute target.
* **instanceType**: string: Optional type of VM used as supported by the compute target.
* **properties**: [ResourceConfigurationProperties](#resourceconfigurationproperties): Additional properties bag.

## DistributionConfiguration
* **Discriminator**: distributionType

### Base Properties

### Mpi
#### Properties
* **distributionType**: 'Mpi' (Required): [Required] Specifies the type of distribution framework.
* **processCountPerInstance**: int: Number of processes per MPI node.

### PyTorch
#### Properties
* **distributionType**: 'PyTorch' (Required): [Required] Specifies the type of distribution framework.
* **processCountPerInstance**: int: Number of processes per node.

### TensorFlow
#### Properties
* **distributionType**: 'TensorFlow' (Required): [Required] Specifies the type of distribution framework.
* **parameterServerCount**: int: Number of parameter server tasks.
* **workerCount**: int: Number of workers. If not specified, will default to the instance count.


## Docker
### Properties
* **privileged**: bool: Indicate whether container shall run in privileged or non-privileged mode.
### Additional Properties
* **Additional Properties Type**: any

## EarlyTerminationPolicy
* **Discriminator**: policyType

### Base Properties
* **delayEvaluation**: int: Number of intervals by which to delay the first evaluation.
* **evaluationInterval**: int: Interval (number of runs) between policy evaluations.

### BanditPolicy
#### Properties
* **policyType**: 'Bandit' (Required): [Required] Name of policy configuration
* **slackAmount**: int: Absolute distance allowed from the best performing run.
* **slackFactor**: int: Ratio of the allowed distance from the best performing run.

### MedianStoppingPolicy
#### Properties
* **policyType**: 'MedianStopping' (Required): [Required] Name of policy configuration

### TruncationSelectionPolicy
#### Properties
* **policyType**: 'TruncationSelection' (Required): [Required] Name of policy configuration
* **truncationPercentage**: int: The percentage of runs to cancel at each evaluation interval.


## EncryptionProperty
### Properties
* **cosmosDbResourceId**: string: The byok cosmosdb account that customer brings to store customer's data
with encryption
* **identity**: [IdentityForCmk](#identityforcmk): Identity to be used with the keyVault
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties) (Required): KeyVault details to do the encryption
* **searchAccountResourceId**: string: The byok search account that customer brings to store customer's data
with encryption
* **status**: 'Disabled' | 'Enabled' | string (Required): Indicates whether or not the encryption is enabled for the workspace.
* **storageAccountResourceId**: string: The byok storage account that customer brings to store customer's data
with encryption

## Endpoint
### Properties
* **hostIp**: string: Host IP over which the application is exposed from the container
* **name**: string: Name of the Endpoint
* **protocol**: 'http' | 'tcp' | 'udp' | string: Protocol over which communication will happen over this endpoint
* **published**: int: Port over which the application is exposed from container.
* **target**: int: Application port inside the container.

## EndpointAuthKeys
### Properties
* **primaryKey**: string: The primary key.
* **secondaryKey**: string: The secondary key.

## EndpointAuthKeys
### Properties
* **primaryKey**: string: The primary key.
* **secondaryKey**: string: The secondary key.

## EndpointAuthKeys
### Properties
* **primaryKey**: string: The primary key.
* **secondaryKey**: string: The secondary key.

## EndpointAuthKeys
### Properties
* **primaryKey**: string: The primary key.
* **secondaryKey**: string: The secondary key.

## EndpointDeploymentModel
### Properties
* **format**: string: Model format
* **name**: string: Model name.
* **source**: string: Optional. Deployment model source ARM resource ID.
* **version**: string: Model version.

## EndpointDeploymentPropertiesBaseEnvironmentVariables
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EndpointDeploymentPropertiesBaseEnvironmentVariables
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EndpointDeploymentPropertiesBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EndpointDeploymentPropertiesBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EndpointDeploymentResourceProperties
* **Discriminator**: type

### Base Properties
* **failureReason**: string: The failure reason if the creation failed.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Disabled' | 'Failed' | 'NotStarted' | 'Scaling' | 'Succeeded' | 'Updating' | string (ReadOnly): Read-only provision state status property.

### ContentSafetyEndpointDeploymentResourceProperties
#### Properties
* **model**: [EndpointDeploymentModel](#endpointdeploymentmodel) (Required): Model used for the endpoint deployment.
* **raiPolicyName**: string: The name of RAI policy.
* **sku**: [CognitiveServicesSku](#cognitiveservicessku)
* **type**: 'Azure.ContentSafety' (Required): Kind of the deployment.
* **versionUpgradeOption**: 'NoAutoUpgrade' | 'OnceCurrentVersionExpired' | 'OnceNewDefaultVersionAvailable' | string: Deployment model version upgrade option.

### OpenAIEndpointDeploymentResourceProperties
#### Properties
* **model**: [EndpointDeploymentModel](#endpointdeploymentmodel) (Required): Model used for the endpoint deployment.
* **raiPolicyName**: string: The name of RAI policy.
* **sku**: [CognitiveServicesSku](#cognitiveservicessku)
* **type**: 'Azure.OpenAI' (Required): Kind of the deployment.
* **versionUpgradeOption**: 'NoAutoUpgrade' | 'OnceCurrentVersionExpired' | 'OnceNewDefaultVersionAvailable' | string: Deployment model version upgrade option.

### SpeechEndpointDeploymentResourceProperties
#### Properties
* **model**: [EndpointDeploymentModel](#endpointdeploymentmodel) (Required): Model used for the endpoint deployment.
* **raiPolicyName**: string: The name of RAI policy.
* **sku**: [CognitiveServicesSku](#cognitiveservicessku)
* **type**: 'Azure.Speech' (Required): Kind of the deployment.
* **versionUpgradeOption**: 'NoAutoUpgrade' | 'OnceCurrentVersionExpired' | 'OnceNewDefaultVersionAvailable' | string: Deployment model version upgrade option.

### ManagedOnlineEndpointDeploymentResourceProperties
#### Properties
* **endpointComputeType**: 'AzureMLCompute' | 'Kubernetes' | 'Managed' | string: Enum to determine endpoint compute type.
* **model**: string
* **type**: 'managedOnlineEndpoint' (Required): Kind of the deployment.


## EndpointDeploymentResourcePropertiesBasicResource
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [EndpointDeploymentResourceProperties](#endpointdeploymentresourceproperties) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## EndpointKeys
### Properties
* **keys**: [AccountApiKeys](#accountapikeys): Dictionary of Keys for the endpoint.

## EndpointModelDeprecationProperties
### Properties
* **fineTune**: string: The datetime of deprecation of the fineTune Model.
* **inference**: string: The datetime of deprecation of the inference Model.

## EndpointModelProperties
### Properties
* **capabilities**: [EndpointModelPropertiesCapabilities](#endpointmodelpropertiescapabilities): The capabilities.
* **deprecation**: [EndpointModelDeprecationProperties](#endpointmodeldeprecationproperties)
* **finetuneCapabilities**: [EndpointModelPropertiesFinetuneCapabilities](#endpointmodelpropertiesfinetunecapabilities): The capabilities for finetune models.
* **format**: string: Deployment model format.
* **isDefaultVersion**: bool: If the model is default version.
* **lifecycleStatus**: 'GenerallyAvailable' | 'Preview' | string: Model lifecycle status.
* **maxCapacity**: int: The max capacity.
* **name**: string: Deployment model name.
* **skus**: [EndpointModelSkuProperties](#endpointmodelskuproperties)[]: The list of Model Sku.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **version**: string: Optional. Deployment model version. If version is not specified, a default version will be assigned. The default version is different for different models and might change when there is new version available for a model. Default version for a model could be found from list models API.

## EndpointModelPropertiesCapabilities
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EndpointModelPropertiesFinetuneCapabilities
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EndpointModels
### Properties
* **nextLink**: string: The link to the next page constructed using the continuationToken.  If null, there are no additional pages.
* **value**: [EndpointModelProperties](#endpointmodelproperties)[]: List of models.

## EndpointModelSkuCapacityProperties
### Properties
* **default**: int: The default capacity.
* **maximum**: int: The maximum capacity.

## EndpointModelSkuProperties
### Properties
* **capacity**: [EndpointModelSkuCapacityProperties](#endpointmodelskucapacityproperties)
* **connectionIds**: string[]: The list of ARM id for the connection support this SKU.
* **deprecationDate**: string: The datetime of deprecation of the model SKU.
* **name**: string: The name of the model SKU.
* **rateLimits**: [EndpointModelSkuRateLimitProperties](#endpointmodelskuratelimitproperties)[]
* **usageName**: string: The usage name of the model SKU.

## EndpointModelSkuRateLimitProperties
### Properties
* **count**: int: The count value of Call Rate Limit.
* **renewalPeriod**: int: The renewal period in seconds of Call Rate Limit.
* **rules**: [EndpointModelSkuRateLimitRuleProperties](#endpointmodelskuratelimitruleproperties)[]: The call rate limit for the model.

## EndpointModelSkuRateLimitRulePatternProperties
### Properties
* **method**: string
* **path**: string

## EndpointModelSkuRateLimitRuleProperties
### Properties
* **count**: int
* **dynamicThrottlingEnabled**: bool: If the dynamic throttling is enabled.
* **key**: string
* **matchPatterns**: [EndpointModelSkuRateLimitRulePatternProperties](#endpointmodelskuratelimitrulepatternproperties)[]
* **minCount**: int
* **renewalPeriod**: int

## EndpointPropertiesBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EndpointPropertiesBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EndpointResourceProperties
* **Discriminator**: endpointType

### Base Properties
* **associatedResourceId**: string: Byo resource id for creating the built-in model service endpoints.
* **deployments**: [EndpointDeploymentResourcePropertiesBasicResource](#endpointdeploymentresourcepropertiesbasicresource)[]: Deployments info.
* **endpointUri**: string: Uri of the endpoint.
* **failureReason**: string: The failure reason if the creation failed.
* **location**: string: Location of the endpoint.
Since input dto and when parse endpoint resource share the same contract
this Location field is just for parse the endpoint resource info
we won't let customer specify the endpoint resource location since we will create it the same location as workspace
* **name**: string: Name of the endpoint.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Disabled' | 'Failed' | 'NotStarted' | 'Scaling' | 'Succeeded' | 'Updating' | string (ReadOnly): Read-only provision state status property.
* **shouldCreateAiServicesEndpoint**: bool: Whether the proxy (non-byo) endpoint is a regular endpoint or a OneKeyV2 AI services account endpoint.

### ContentSafetyEndpointResourceProperties
#### Properties
* **endpointType**: 'Azure.ContentSafety' (Required): Type of the endpoint.

### OpenAIEndpointResourceProperties
#### Properties
* **endpointType**: 'Azure.OpenAI' (Required): Type of the endpoint.

### SpeechEndpointResourceProperties
#### Properties
* **endpointType**: 'Azure.Speech' (Required): Type of the endpoint.

### ManagedOnlineEndpointResourceProperties
#### Properties
* **authMode**: 'AADToken' | 'AMLToken' | 'Key' | string: Enum to determine endpoint authentication mode.
* **compute**: string
* **description**: string
* **endpointType**: 'managedOnlineEndpoint' (Required): Type of the endpoint.
* **mirrorTraffic**: [ManagedOnlineEndpointResourcePropertiesMirrorTraffic](#managedonlineendpointresourcepropertiesmirrortraffic): Dictionary of <integer>
* **scoringUri**: string
* **traffic**: [ManagedOnlineEndpointResourcePropertiesTraffic](#managedonlineendpointresourcepropertiestraffic): Dictionary of <integer>

### ServerlessEndpointResourceProperties
#### Properties
* **authMode**: 'Key' | string
* **capacityReservation**: [ServerlessEndpointCapacityReservation](#serverlessendpointcapacityreservation)
* **contentSafety**: [ServerlessEndpointContentSafety](#serverlessendpointcontentsafety)
* **endpointState**: 'Creating' | 'CreationFailed' | 'Deleting' | 'DeletionFailed' | 'Online' | 'Reinstating' | 'Suspended' | 'Suspending' | 'Unknown' | string: State of the Serverless Endpoint.
* **endpointType**: 'serverlessEndpoint' (Required): Type of the endpoint.
* **inferenceEndpoint**: [ServerlessEndpointInferenceEndpoint](#serverlessendpointinferenceendpoint)
* **marketplaceSubscriptionId**: string
* **metadata**: any: Anything
* **modelSettings**: [ServerlessEndpointModelSettings](#serverlessendpointmodelsettings)
* **offer**: [ServerlessOffer](#serverlessoffer)


## EnvironmentContainerProperties
### Properties
* **description**: string: The asset description text.
* **isArchived**: bool: Is the asset archived?
* **latestVersion**: string (ReadOnly): The latest version inside this container.
* **nextVersion**: string (ReadOnly): The next auto incremental version
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state for the environment container.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.

## EnvironmentVariable
### Properties
* **type**: 'local' | string: Type of the Environment Variable. Possible values are: local - For local variable
* **value**: string: Value of the Environment variable
### Additional Properties
* **Additional Properties Type**: any

## EnvironmentVersionProperties
### Properties
* **autoRebuild**: 'Disabled' | 'OnBaseImageUpdate' | string: Defines if image needs to be rebuilt based on base image changes.
* **build**: [BuildContext](#buildcontext): Configuration settings for Docker build context.
* **condaFile**: string: Standard configuration file used by Conda that lets you install any kind of package, including Python, R, and C/C++ packages.
<see href="https://repo2docker.readthedocs.io/en/latest/config_files.html#environment-yml-install-a-conda-environment" />
* **description**: string: The asset description text.
* **environmentType**: 'Curated' | 'UserCreated' | string (ReadOnly): Environment type is either user managed or curated by the Azure ML service
<see href="https://docs.microsoft.com/en-us/azure/machine-learning/resource-curated-environments" />
* **image**: string: Name of the image that will be used for the environment.
<seealso href="https://docs.microsoft.com/en-us/azure/machine-learning/how-to-deploy-custom-docker-image#use-a-custom-base-image" />
* **inferenceConfig**: [InferenceContainerProperties](#inferencecontainerproperties): Defines configuration specific to inference.
* **isAnonymous**: bool: If the name version are system generated (anonymous registration).
* **isArchived**: bool: Is the asset archived?
* **osType**: 'Linux' | 'Windows' | string: The OS type of the environment.
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state for the environment version.
* **stage**: string: Stage in the environment lifecycle assigned to this environment
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): The additional info.
* **type**: string (ReadOnly): The additional info type.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## ErrorResponse
### Properties
* **error**: [ErrorDetail](#errordetail): The error object.

## FeatureAttributionDriftMonitoringSignalFeatureDataTypeOverride
### Properties
### Additional Properties
* **Additional Properties Type**: 'Categorical' | 'Numerical' | string

## FeatureAttributionMetricThreshold
### Properties
* **metric**: 'NormalizedDiscountedCumulativeGain' | string (Required): [Required] The feature attribution metric to calculate.
* **threshold**: [MonitoringThreshold](#monitoringthreshold): The threshold value. If null, a default value will be set depending on the selected metric.

## FeatureImportanceSettings
### Properties
* **mode**: 'Disabled' | 'Enabled' | string: The mode of operation for computing feature importance.
* **targetColumn**: string: The name of the target column within the input data asset.

## FeatureProperties
### Properties
* **dataType**: 'Binary' | 'Boolean' | 'Datetime' | 'Double' | 'Float' | 'Integer' | 'Long' | 'String' | string: Specifies type
* **description**: string: The asset description text.
* **featureName**: string: Specifies name
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.

## FeaturesetContainerProperties
### Properties
* **description**: string: The asset description text.
* **isArchived**: bool: Is the asset archived?
* **latestVersion**: string (ReadOnly): The latest version inside this container.
* **nextVersion**: string (ReadOnly): The next auto incremental version
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state for the featureset container.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.

## FeaturesetSpecification
### Properties
* **path**: string: Specifies the spec path

## FeaturesetVersionProperties
### Properties
* **description**: string: The asset description text.
* **entities**: string[]: Specifies list of entities
* **isAnonymous**: bool: If the name version are system generated (anonymous registration).
* **isArchived**: bool: Is the asset archived?
* **materializationSettings**: [MaterializationSettings](#materializationsettings): Specifies the materialization settings
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state for the featureset version container.
* **specification**: [FeaturesetSpecification](#featuresetspecification): Specifies the feature spec details
* **stage**: string: Specifies the asset stage
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.

## FeaturestoreEntityContainerProperties
### Properties
* **description**: string: The asset description text.
* **isArchived**: bool: Is the asset archived?
* **latestVersion**: string (ReadOnly): The latest version inside this container.
* **nextVersion**: string (ReadOnly): The next auto incremental version
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state for the featurestore entity container.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.

## FeaturestoreEntityVersionProperties
### Properties
* **description**: string: The asset description text.
* **indexColumns**: [IndexColumn](#indexcolumn)[]: Specifies index columns
* **isAnonymous**: bool: If the name version are system generated (anonymous registration).
* **isArchived**: bool: Is the asset archived?
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state for the featurestore entity version.
* **stage**: string: Specifies the asset stage
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.

## FeatureStoreSettings
### Properties
* **computeRuntime**: [ComputeRuntimeDto](#computeruntimedto)
* **offlineStoreConnectionName**: string
* **onlineStoreConnectionName**: string

## FineTuningJobOutputs
### Properties
### Additional Properties
* **Additional Properties Type**: [JobOutput](#joboutput)

## FineTuningVertical
* **Discriminator**: modelProvider

### Base Properties
* **model**: [JobInput](#jobinput) (Required): [Required] Input model for fine tuning.
* **taskType**: 'ChatCompletion' | 'ImageClassification' | 'ImageInstanceSegmentation' | 'ImageObjectDetection' | 'QuestionAnswering' | 'TextClassification' | 'TextCompletion' | 'TextSummarization' | 'TextTranslation' | 'TokenClassification' | 'VideoMultiObjectTracking' | string (Required): [Required] Fine tuning task type.
* **trainingData**: [JobInput](#jobinput) (Required): [Required] Training data for fine tuning.
* **validationData**: [JobInput](#jobinput): Validation data for fine tuning.

### AzureOpenAiFineTuning
#### Properties
* **hyperParameters**: [AzureOpenAiHyperParameters](#azureopenaihyperparameters): HyperParameters for fine tuning Azure Open AI model.
* **modelProvider**: 'AzureOpenAI' (Required): [Required] Enum to determine the type of fine tuning.

### CustomModelFineTuning
#### Properties
* **hyperParameters**: [CustomModelFineTuningHyperParameters](#custommodelfinetuninghyperparameters): HyperParameters for fine tuning custom model.
* **modelProvider**: 'Custom' (Required): [Required] Enum to determine the type of fine tuning.


## FlavorData
### Properties
* **data**: [FlavorData](#flavordata): Model flavor-specific data.

## FlavorData
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ForecastHorizon
* **Discriminator**: mode

### Base Properties

### AutoForecastHorizon
#### Properties
* **mode**: 'Auto' (Required): [Required] Set forecast horizon value selection mode.

### CustomForecastHorizon
#### Properties
* **mode**: 'Custom' (Required): [Required] Set forecast horizon value selection mode.
* **value**: int (Required): [Required] Forecast horizon value.


## ForecastingSettings
### Properties
* **countryOrRegionForHolidays**: string: Country or region for holidays for forecasting tasks.
These should be ISO 3166 two-letter country/region codes, for example 'US' or 'GB'.
* **cvStepSize**: int: Number of periods between the origin time of one CV fold and the next fold. For
example, if `CVStepSize` = 3 for daily data, the origin time for each fold will be
three days apart.
* **featureLags**: 'Auto' | 'None' | string: Flag for generating lags for the numeric features with 'auto' or null.
* **forecastHorizon**: [ForecastHorizon](#forecasthorizon): The desired maximum forecast horizon in units of time-series frequency.
* **frequency**: string: When forecasting, this parameter represents the period with which the forecast is desired, for example daily, weekly, yearly, etc. The forecast frequency is dataset frequency by default.
* **seasonality**: [Seasonality](#seasonality): Set time series seasonality as an integer multiple of the series frequency.
If seasonality is set to 'auto', it will be inferred.
* **shortSeriesHandlingConfig**: 'Auto' | 'Drop' | 'None' | 'Pad' | string: The parameter defining how if AutoML should handle short time series.
* **targetAggregateFunction**: 'Max' | 'Mean' | 'Min' | 'None' | 'Sum' | string: The function to be used to aggregate the time series target column to conform to a user specified frequency.
If the TargetAggregateFunction is set i.e. not 'None', but the freq parameter is not set, the error is raised. The possible target aggregation functions are: "sum", "max", "min" and "mean".
* **targetLags**: [TargetLags](#targetlags): The number of past periods to lag from the target column.
* **targetRollingWindowSize**: [TargetRollingWindowSize](#targetrollingwindowsize): The number of past periods used to create a rolling window average of the target column.
* **timeColumnName**: string: The name of the time column. This parameter is required when forecasting to specify the datetime column in the input data used for building the time series and inferring its frequency.
* **timeSeriesIdColumnNames**: string[]: The names of columns used to group a timeseries. It can be used to create multiple series.
If grain is not defined, the data set is assumed to be one time-series. This parameter is used with task type forecasting.
* **useStl**: 'None' | 'Season' | 'SeasonTrend' | string: Configure STL Decomposition of the time-series target column.

## ForecastingTrainingSettings
### Properties
* **allowedTrainingAlgorithms**: ('Arimax' | 'AutoArima' | 'Average' | 'DecisionTree' | 'ElasticNet' | 'ExponentialSmoothing' | 'ExtremeRandomTrees' | 'GradientBoosting' | 'KNN' | 'LassoLars' | 'LightGBM' | 'Naive' | 'Prophet' | 'RandomForest' | 'SGD' | 'SeasonalAverage' | 'SeasonalNaive' | 'TCNForecaster' | 'XGBoostRegressor' | string)[]: Allowed models for forecasting task.
* **blockedTrainingAlgorithms**: ('Arimax' | 'AutoArima' | 'Average' | 'DecisionTree' | 'ElasticNet' | 'ExponentialSmoothing' | 'ExtremeRandomTrees' | 'GradientBoosting' | 'KNN' | 'LassoLars' | 'LightGBM' | 'Naive' | 'Prophet' | 'RandomForest' | 'SGD' | 'SeasonalAverage' | 'SeasonalNaive' | 'TCNForecaster' | 'XGBoostRegressor' | string)[]: Blocked models for forecasting task.
* **enableDnnTraining**: bool: Enable recommendation of DNN models.
* **enableModelExplainability**: bool: Flag to turn on explainability on best model.
* **enableOnnxCompatibleModels**: bool: Flag for enabling onnx compatible models.
* **enableStackEnsemble**: bool: Enable stack ensemble run.
* **enableVoteEnsemble**: bool: Enable voting ensemble run.
* **ensembleModelDownloadTimeout**: string: During VotingEnsemble and StackEnsemble model generation, multiple fitted models from the previous child runs are downloaded.
Configure this parameter with a higher value than 300 secs, if more time is needed.
* **stackEnsembleSettings**: [StackEnsembleSettings](#stackensemblesettings): Stack ensemble settings for stack ensemble run.

## GroupEnvironmentConfiguration
### Properties
* **environmentId**: string: ARM resource ID of the environment specification for the inference pool.
* **environmentVariables**: [StringKeyValuePair](#stringkeyvaluepair)[]: Environment variables configuration for the inference pool.
* **livenessProbe**: [ProbeSettings](#probesettings): Liveness probe monitors the health of the container regularly.
* **readinessProbe**: [ProbeSettings](#probesettings): Readiness probe validates if the container is ready to serve traffic. The properties and defaults are the same as liveness probe.
* **startupProbe**: [ProbeSettings](#probesettings): This verifies whether the application within a container is started. Startup probes run before any other probe, and, unless it finishes successfully, disables other probes.

## GroupModelConfiguration
### Properties
* **modelId**: string: The URI path to the model.

## HDInsightProperties
### Properties
* **address**: string: Public IP address of the master node of the cluster.
* **administratorAccount**: [VirtualMachineSshCredentials](#virtualmachinesshcredentials): Admin credentials for master node of the cluster
* **sshPort**: int: Port open for ssh connections on the master node of the cluster.

## IdAssetReference
### Properties
* **assetId**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] ARM resource ID of the asset.
* **referenceType**: 'DataPath' | 'Id' | 'OutputPath' | string (Required): [Required] Specifies the type of asset reference.

## IdentityConfiguration
* **Discriminator**: identityType

### Base Properties

### AmlToken
#### Properties
* **identityType**: 'AMLToken' (Required): [Required] Specifies the type of identity framework.

### ManagedIdentity
#### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Specifies a user-assigned identity by client ID. For system-assigned, do not set this field.
* **identityType**: 'Managed' (Required): [Required] Specifies the type of identity framework.
* **objectId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Specifies a user-assigned identity by object ID. For system-assigned, do not set this field.
* **resourceId**: string: Specifies a user-assigned identity by ARM resource ID. For system-assigned, do not set this field.

### UserIdentity
#### Properties
* **identityType**: 'UserIdentity' (Required): [Required] Specifies the type of identity framework.


## IdentityForCmk
### Properties
* **userAssignedIdentity**: string: UserAssignedIdentity to be used to fetch the encryption key from keyVault

## Image
### Properties
* **reference**: string: Image reference URL if type is docker. Environment name if type is azureml
* **type**: 'azureml' | 'docker' | string: Type of the image. Possible values are: docker - For docker images. azureml - For AzureML Environment images (custom and curated)
* **version**: string: Version of image being used. If latest then skip this field
### Additional Properties
* **Additional Properties Type**: any

## ImageLimitSettings
### Properties
* **maxConcurrentTrials**: int: Maximum number of concurrent AutoML iterations.
* **maxTrials**: int: Maximum number of AutoML iterations.
* **timeout**: string: AutoML job timeout.

## ImageMetadata
### Properties
* **currentImageVersion**: string: Specifies the current operating system image version this compute instance is running on.
* **isLatestOsImageVersion**: bool: Specifies whether this compute instance is running on the latest operating system image.
* **latestImageVersion**: string: Specifies the latest available operating system image version.
* **osPatchingStatus**: [OsPatchingStatus](#ospatchingstatus) (ReadOnly): Metadata about the os patching.

## ImageModelDistributionSettingsClassification
### Properties
* **amsGradient**: string: Enable AMSGrad when optimizer is 'adam' or 'adamw'.
* **augmentations**: string: Settings for using Augmentations.
* **beta1**: string: Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
* **beta2**: string: Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
* **distributed**: string: Whether to use distributer training.
* **earlyStopping**: string: Enable early stopping logic during training.
* **earlyStoppingDelay**: string: Minimum number of epochs or validation evaluations to wait before primary metric improvement
is tracked for early stopping. Must be a positive integer.
* **earlyStoppingPatience**: string: Minimum number of epochs or validation evaluations with no primary metric improvement before
the run is stopped. Must be a positive integer.
* **enableOnnxNormalization**: string: Enable normalization when exporting ONNX model.
* **evaluationFrequency**: string: Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
* **gradientAccumulationStep**: string: Gradient accumulation means running a configured number of "GradAccumulationStep" steps without
updating the model weights while accumulating the gradients of those steps, and then using
the accumulated gradients to compute the weight updates. Must be a positive integer.
* **layersToFreeze**: string: Number of layers to freeze for the model. Must be a positive integer.
For instance, passing 2 as value for 'seresnext' means
freezing layer0 and layer1. For a full list of models supported and details on layer freeze, please
see: https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
* **learningRate**: string: Initial learning rate. Must be a float in the range [0, 1].
* **learningRateScheduler**: string: Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'.
* **modelName**: string: Name of the model to use for training.
For more information on the available models please visit the official documentation:
https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
* **momentum**: string: Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
* **nesterov**: string: Enable nesterov when optimizer is 'sgd'.
* **numberOfEpochs**: string: Number of training epochs. Must be a positive integer.
* **numberOfWorkers**: string: Number of data loader workers. Must be a non-negative integer.
* **optimizer**: string: Type of optimizer. Must be either 'sgd', 'adam', or 'adamw'.
* **randomSeed**: string: Random seed to be used when using deterministic training.
* **stepLRGamma**: string: Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
* **stepLRStepSize**: string: Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
* **trainingBatchSize**: string: Training batch size. Must be a positive integer.
* **trainingCropSize**: string: Image crop size that is input to the neural network for the training dataset. Must be a positive integer.
* **validationBatchSize**: string: Validation batch size. Must be a positive integer.
* **validationCropSize**: string: Image crop size that is input to the neural network for the validation dataset. Must be a positive integer.
* **validationResizeSize**: string: Image size to which to resize before cropping for validation dataset. Must be a positive integer.
* **warmupCosineLRCycles**: string: Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
* **warmupCosineLRWarmupEpochs**: string: Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
* **weightDecay**: string: Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].
* **weightedLoss**: string: Weighted loss. The accepted values are 0 for no weighted loss.
1 for weighted loss with sqrt.(class_weights). 2 for weighted loss with class_weights. Must be 0 or 1 or 2.

## ImageModelDistributionSettingsObjectDetection
### Properties
* **amsGradient**: string: Enable AMSGrad when optimizer is 'adam' or 'adamw'.
* **augmentations**: string: Settings for using Augmentations.
* **beta1**: string: Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
* **beta2**: string: Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
* **boxDetectionsPerImage**: string: Maximum number of detections per image, for all classes. Must be a positive integer.
Note: This settings is not supported for the 'yolov5' algorithm.
* **boxScoreThreshold**: string: During inference, only return proposals with a classification score greater than
BoxScoreThreshold. Must be a float in the range[0, 1].
* **distributed**: string: Whether to use distributer training.
* **earlyStopping**: string: Enable early stopping logic during training.
* **earlyStoppingDelay**: string: Minimum number of epochs or validation evaluations to wait before primary metric improvement
is tracked for early stopping. Must be a positive integer.
* **earlyStoppingPatience**: string: Minimum number of epochs or validation evaluations with no primary metric improvement before
the run is stopped. Must be a positive integer.
* **enableOnnxNormalization**: string: Enable normalization when exporting ONNX model.
* **evaluationFrequency**: string: Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
* **gradientAccumulationStep**: string: Gradient accumulation means running a configured number of "GradAccumulationStep" steps without
updating the model weights while accumulating the gradients of those steps, and then using
the accumulated gradients to compute the weight updates. Must be a positive integer.
* **imageSize**: string: Image size for train and validation. Must be a positive integer.
Note: The training run may get into CUDA OOM if the size is too big.
Note: This settings is only supported for the 'yolov5' algorithm.
* **layersToFreeze**: string: Number of layers to freeze for the model. Must be a positive integer.
For instance, passing 2 as value for 'seresnext' means
freezing layer0 and layer1. For a full list of models supported and details on layer freeze, please
see: https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
* **learningRate**: string: Initial learning rate. Must be a float in the range [0, 1].
* **learningRateScheduler**: string: Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'.
* **maxSize**: string: Maximum size of the image to be rescaled before feeding it to the backbone.
Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.
Note: This settings is not supported for the 'yolov5' algorithm.
* **minSize**: string: Minimum size of the image to be rescaled before feeding it to the backbone.
Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.
Note: This settings is not supported for the 'yolov5' algorithm.
* **modelName**: string: Name of the model to use for training.
For more information on the available models please visit the official documentation:
https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
* **modelSize**: string: Model size. Must be 'small', 'medium', 'large', or 'xlarge'.
Note: training run may get into CUDA OOM if the model size is too big.
Note: This settings is only supported for the 'yolov5' algorithm.
* **momentum**: string: Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
* **multiScale**: string: Enable multi-scale image by varying image size by +/- 50%.
Note: training run may get into CUDA OOM if no sufficient GPU memory.
Note: This settings is only supported for the 'yolov5' algorithm.
* **nesterov**: string: Enable nesterov when optimizer is 'sgd'.
* **nmsIouThreshold**: string: IOU threshold used during inference in NMS post processing. Must be float in the range [0, 1].
* **numberOfEpochs**: string: Number of training epochs. Must be a positive integer.
* **numberOfWorkers**: string: Number of data loader workers. Must be a non-negative integer.
* **optimizer**: string: Type of optimizer. Must be either 'sgd', 'adam', or 'adamw'.
* **randomSeed**: string: Random seed to be used when using deterministic training.
* **stepLRGamma**: string: Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
* **stepLRStepSize**: string: Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
* **tileGridSize**: string: The grid size to use for tiling each image. Note: TileGridSize must not be
None to enable small object detection logic. A string containing two integers in mxn format.
Note: This settings is not supported for the 'yolov5' algorithm.
* **tileOverlapRatio**: string: Overlap ratio between adjacent tiles in each dimension. Must be float in the range [0, 1).
Note: This settings is not supported for the 'yolov5' algorithm.
* **tilePredictionsNmsThreshold**: string: The IOU threshold to use to perform NMS while merging predictions from tiles and image.
Used in validation/ inference. Must be float in the range [0, 1].
Note: This settings is not supported for the 'yolov5' algorithm.
NMS: Non-maximum suppression
* **trainingBatchSize**: string: Training batch size. Must be a positive integer.
* **validationBatchSize**: string: Validation batch size. Must be a positive integer.
* **validationIouThreshold**: string: IOU threshold to use when computing validation metric. Must be float in the range [0, 1].
* **validationMetricType**: string: Metric computation method to use for validation metrics. Must be 'none', 'coco', 'voc', or 'coco_voc'.
* **warmupCosineLRCycles**: string: Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
* **warmupCosineLRWarmupEpochs**: string: Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
* **weightDecay**: string: Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].

## ImageModelSettingsClassification
### Properties
* **advancedSettings**: string: Settings for advanced scenarios.
* **amsGradient**: bool: Enable AMSGrad when optimizer is 'adam' or 'adamw'.
* **augmentations**: string: Settings for using Augmentations.
* **beta1**: int: Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
* **beta2**: int: Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
* **checkpointFrequency**: int: Frequency to store model checkpoints. Must be a positive integer.
* **checkpointModel**: [MLFlowModelJobInput](#mlflowmodeljobinput): The pretrained checkpoint model for incremental training.
* **checkpointRunId**: string: The id of a previous run that has a pretrained checkpoint for incremental training.
* **distributed**: bool: Whether to use distributed training.
* **earlyStopping**: bool: Enable early stopping logic during training.
* **earlyStoppingDelay**: int: Minimum number of epochs or validation evaluations to wait before primary metric improvement
is tracked for early stopping. Must be a positive integer.
* **earlyStoppingPatience**: int: Minimum number of epochs or validation evaluations with no primary metric improvement before
the run is stopped. Must be a positive integer.
* **enableOnnxNormalization**: bool: Enable normalization when exporting ONNX model.
* **evaluationFrequency**: int: Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
* **gradientAccumulationStep**: int: Gradient accumulation means running a configured number of "GradAccumulationStep" steps without
updating the model weights while accumulating the gradients of those steps, and then using
the accumulated gradients to compute the weight updates. Must be a positive integer.
* **layersToFreeze**: int: Number of layers to freeze for the model. Must be a positive integer.
For instance, passing 2 as value for 'seresnext' means
freezing layer0 and layer1. For a full list of models supported and details on layer freeze, please
see: https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
* **learningRate**: int: Initial learning rate. Must be a float in the range [0, 1].
* **learningRateScheduler**: 'None' | 'Step' | 'WarmupCosine' | string: Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'.
* **modelName**: string: Name of the model to use for training.
For more information on the available models please visit the official documentation:
https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
* **momentum**: int: Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
* **nesterov**: bool: Enable nesterov when optimizer is 'sgd'.
* **numberOfEpochs**: int: Number of training epochs. Must be a positive integer.
* **numberOfWorkers**: int: Number of data loader workers. Must be a non-negative integer.
* **optimizer**: 'Adam' | 'Adamw' | 'None' | 'Sgd' | string: Type of optimizer.
* **randomSeed**: int: Random seed to be used when using deterministic training.
* **stepLRGamma**: int: Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
* **stepLRStepSize**: int: Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
* **trainingBatchSize**: int: Training batch size. Must be a positive integer.
* **trainingCropSize**: int: Image crop size that is input to the neural network for the training dataset. Must be a positive integer.
* **validationBatchSize**: int: Validation batch size. Must be a positive integer.
* **validationCropSize**: int: Image crop size that is input to the neural network for the validation dataset. Must be a positive integer.
* **validationResizeSize**: int: Image size to which to resize before cropping for validation dataset. Must be a positive integer.
* **warmupCosineLRCycles**: int: Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
* **warmupCosineLRWarmupEpochs**: int: Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
* **weightDecay**: int: Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].
* **weightedLoss**: int: Weighted loss. The accepted values are 0 for no weighted loss.
1 for weighted loss with sqrt.(class_weights). 2 for weighted loss with class_weights. Must be 0 or 1 or 2.

## ImageModelSettingsObjectDetection
### Properties
* **advancedSettings**: string: Settings for advanced scenarios.
* **amsGradient**: bool: Enable AMSGrad when optimizer is 'adam' or 'adamw'.
* **augmentations**: string: Settings for using Augmentations.
* **beta1**: int: Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
* **beta2**: int: Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
* **boxDetectionsPerImage**: int: Maximum number of detections per image, for all classes. Must be a positive integer.
Note: This settings is not supported for the 'yolov5' algorithm.
* **boxScoreThreshold**: int: During inference, only return proposals with a classification score greater than
BoxScoreThreshold. Must be a float in the range[0, 1].
* **checkpointFrequency**: int: Frequency to store model checkpoints. Must be a positive integer.
* **checkpointModel**: [MLFlowModelJobInput](#mlflowmodeljobinput): The pretrained checkpoint model for incremental training.
* **checkpointRunId**: string: The id of a previous run that has a pretrained checkpoint for incremental training.
* **distributed**: bool: Whether to use distributed training.
* **earlyStopping**: bool: Enable early stopping logic during training.
* **earlyStoppingDelay**: int: Minimum number of epochs or validation evaluations to wait before primary metric improvement
is tracked for early stopping. Must be a positive integer.
* **earlyStoppingPatience**: int: Minimum number of epochs or validation evaluations with no primary metric improvement before
the run is stopped. Must be a positive integer.
* **enableOnnxNormalization**: bool: Enable normalization when exporting ONNX model.
* **evaluationFrequency**: int: Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
* **gradientAccumulationStep**: int: Gradient accumulation means running a configured number of "GradAccumulationStep" steps without
updating the model weights while accumulating the gradients of those steps, and then using
the accumulated gradients to compute the weight updates. Must be a positive integer.
* **imageSize**: int: Image size for train and validation. Must be a positive integer.
Note: The training run may get into CUDA OOM if the size is too big.
Note: This settings is only supported for the 'yolov5' algorithm.
* **layersToFreeze**: int: Number of layers to freeze for the model. Must be a positive integer.
For instance, passing 2 as value for 'seresnext' means
freezing layer0 and layer1. For a full list of models supported and details on layer freeze, please
see: https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
* **learningRate**: int: Initial learning rate. Must be a float in the range [0, 1].
* **learningRateScheduler**: 'None' | 'Step' | 'WarmupCosine' | string: Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'.
* **maxSize**: int: Maximum size of the image to be rescaled before feeding it to the backbone.
Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.
Note: This settings is not supported for the 'yolov5' algorithm.
* **minSize**: int: Minimum size of the image to be rescaled before feeding it to the backbone.
Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.
Note: This settings is not supported for the 'yolov5' algorithm.
* **modelName**: string: Name of the model to use for training.
For more information on the available models please visit the official documentation:
https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
* **modelSize**: 'ExtraLarge' | 'Large' | 'Medium' | 'None' | 'Small' | string: Model size. Must be 'small', 'medium', 'large', or 'xlarge'.
Note: training run may get into CUDA OOM if the model size is too big.
Note: This settings is only supported for the 'yolov5' algorithm.
* **momentum**: int: Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
* **multiScale**: bool: Enable multi-scale image by varying image size by +/- 50%.
Note: training run may get into CUDA OOM if no sufficient GPU memory.
Note: This settings is only supported for the 'yolov5' algorithm.
* **nesterov**: bool: Enable nesterov when optimizer is 'sgd'.
* **nmsIouThreshold**: int: IOU threshold used during inference in NMS post processing. Must be a float in the range [0, 1].
* **numberOfEpochs**: int: Number of training epochs. Must be a positive integer.
* **numberOfWorkers**: int: Number of data loader workers. Must be a non-negative integer.
* **optimizer**: 'Adam' | 'Adamw' | 'None' | 'Sgd' | string: Type of optimizer.
* **randomSeed**: int: Random seed to be used when using deterministic training.
* **stepLRGamma**: int: Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
* **stepLRStepSize**: int: Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
* **tileGridSize**: string: The grid size to use for tiling each image. Note: TileGridSize must not be
None to enable small object detection logic. A string containing two integers in mxn format.
Note: This settings is not supported for the 'yolov5' algorithm.
* **tileOverlapRatio**: int: Overlap ratio between adjacent tiles in each dimension. Must be float in the range [0, 1).
Note: This settings is not supported for the 'yolov5' algorithm.
* **tilePredictionsNmsThreshold**: int: The IOU threshold to use to perform NMS while merging predictions from tiles and image.
Used in validation/ inference. Must be float in the range [0, 1].
Note: This settings is not supported for the 'yolov5' algorithm.
* **trainingBatchSize**: int: Training batch size. Must be a positive integer.
* **validationBatchSize**: int: Validation batch size. Must be a positive integer.
* **validationIouThreshold**: int: IOU threshold to use when computing validation metric. Must be float in the range [0, 1].
* **validationMetricType**: 'Coco' | 'CocoVoc' | 'None' | 'Voc' | string: Metric computation method to use for validation metrics.
* **warmupCosineLRCycles**: int: Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
* **warmupCosineLRWarmupEpochs**: int: Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
* **weightDecay**: int: Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].

## ImageSweepSettings
### Properties
* **earlyTermination**: [EarlyTerminationPolicy](#earlyterminationpolicy): Type of early termination policy.
* **samplingAlgorithm**: 'Bayesian' | 'Grid' | 'Random' | string (Required): [Required] Type of the hyperparameter sampling algorithms.

## IndexColumn
### Properties
* **columnName**: string: Specifies the column name
* **dataType**: 'Binary' | 'Boolean' | 'Datetime' | 'Double' | 'Float' | 'Integer' | 'Long' | 'String' | string: Specifies the data type

## InferenceContainerProperties
### Properties
* **livenessRoute**: [Route](#route): The route to check the liveness of the inference server container.
* **readinessRoute**: [Route](#route): The route to check the readiness of the inference server container.
* **scoringRoute**: [Route](#route): The port to send the scoring requests to, within the inference server container.

## InferenceEndpointProperties
### Properties
* **authMode**: 'AAD' | string (Required): [Required] Authentication mode for the endpoint.
* **description**: string: Description of the resource.
* **endpointUri**: string (ReadOnly): Endpoint URI for the inference endpoint.
* **groupName**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] Group within the same pool with which this endpoint needs to be associated with.
* **properties**: [StringKeyValuePair](#stringkeyvaluepair)[]: Property dictionary. Properties can be added, but not removed or altered.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state for the endpoint.
* **requestConfiguration**: [RequestConfiguration](#requestconfiguration): RequestConfiguration for endpoint.

## InferenceGroupProperties
### Properties
* **description**: string: Description of the resource.
* **environmentConfiguration**: [GroupEnvironmentConfiguration](#groupenvironmentconfiguration): Gets or sets environment configuration for the inference group. Used if PoolType=ScaleUnit.
* **modelConfiguration**: [GroupModelConfiguration](#groupmodelconfiguration): Gets or sets model configuration for the inference group. Used if PoolType=ScaleUnit.
* **nodeSkuType**: string: Gets or sets compute instance type.
* **properties**: [StringKeyValuePair](#stringkeyvaluepair)[]: Property dictionary. Properties can be added, but not removed or altered.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state for the inference group.
* **scaleUnitSize**: int: Gets or sets Scale Unit size.

## InferencePoolProperties
### Properties
* **description**: string: Description of the resource.
* **properties**: [StringKeyValuePair](#stringkeyvaluepair)[]: Property dictionary. Properties can be added, but not removed or altered.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state for the pool.
* **scaleUnitConfiguration**: [ScaleUnitConfiguration](#scaleunitconfiguration): Gets or sets ScaleUnitConfiguration for the inference pool. Used if PoolType=ScaleUnit.

## InstanceResourceSchema
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InstanceResourceSchema
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InstanceTypeSchema
### Properties
* **nodeSelector**: [InstanceTypeSchemaNodeSelector](#instancetypeschemanodeselector): Node Selector
* **resources**: [InstanceTypeSchemaResources](#instancetypeschemaresources): Resource requests/limits for this instance type

## InstanceTypeSchemaNodeSelector
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InstanceTypeSchemaResources
### Properties
* **limits**: [InstanceResourceSchema](#instanceresourceschema): Resource limits for this instance type
* **requests**: [InstanceResourceSchema](#instanceresourceschema): Resource requests for this instance type

## IPRule
### Properties
* **value**: string: An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78). Value could be 'Allow' or  'Deny'.

## JobBaseProperties
* **Discriminator**: jobType

### Base Properties
* **componentId**: string: ARM resource ID of the component resource.
* **computeId**: string: ARM resource ID of the compute resource.
* **description**: string: The asset description text.
* **displayName**: string: Display name of job.
* **experimentName**: string: The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
* **identity**: [IdentityConfiguration](#identityconfiguration): Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.
Defaults to AmlToken if null.
* **isArchived**: bool: Is the asset archived?
* **notificationSetting**: [NotificationSetting](#notificationsetting): Notification setting for the job
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **services**: [JobBaseServices](#jobbaseservices): List of JobEndpoints.
For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
* **status**: 'CancelRequested' | 'Canceled' | 'Completed' | 'Failed' | 'Finalizing' | 'NotResponding' | 'NotStarted' | 'Paused' | 'Preparing' | 'Provisioning' | 'Queued' | 'Running' | 'Starting' | 'Unknown' | string (ReadOnly): Status of the job.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.

### AutoMLJob
#### Properties
* **environmentId**: string: The ARM resource ID of the Environment specification for the job.
This is optional value to provide, if not provided, AutoML will default this to Production AutoML curated environment version when running the job.
* **environmentVariables**: [AutoMLJobEnvironmentVariables](#automljobenvironmentvariables): Environment variables included in the job.
* **jobType**: 'AutoML' (Required): [Required] Specifies the type of job.
* **outputs**: [AutoMLJobOutputs](#automljoboutputs): Mapping of output data bindings used in the job.
* **queueSettings**: [QueueSettings](#queuesettings): Queue settings for the job
* **resources**: [JobResourceConfiguration](#jobresourceconfiguration): Compute Resource configuration for the job.
* **taskDetails**: [AutoMLVertical](#automlvertical) (Required): [Required] This represents scenario which can be one of Tables/NLP/Image

### CommandJob
#### Properties
* **codeId**: string: ARM resource ID of the code asset.
* **command**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] The command to execute on startup of the job. eg. "python train.py"
* **distribution**: [DistributionConfiguration](#distributionconfiguration): Distribution configuration of the job. If set, this should be one of Mpi, Tensorflow, PyTorch, or null.
* **environmentId**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] The ARM resource ID of the Environment specification for the job.
* **environmentVariables**: [CommandJobEnvironmentVariables](#commandjobenvironmentvariables): Environment variables included in the job.
* **inputs**: [CommandJobInputs](#commandjobinputs): Mapping of input data bindings used in the job.
* **jobType**: 'Command' (Required): [Required] Specifies the type of job.
* **limits**: [CommandJobLimits](#commandjoblimits): Command Job limit.
* **outputs**: [CommandJobOutputs](#commandjoboutputs): Mapping of output data bindings used in the job.
* **parameters**: any (ReadOnly): Input parameters.
* **queueSettings**: [QueueSettings](#queuesettings): Queue settings for the job
* **resources**: [JobResourceConfiguration](#jobresourceconfiguration): Compute Resource configuration for the job.

### FineTuningJob
#### Properties
* **fineTuningDetails**: [FineTuningVertical](#finetuningvertical) (Required): [Required]
* **jobType**: 'FineTuning' (Required): [Required] Specifies the type of job.
* **outputs**: [FineTuningJobOutputs](#finetuningjoboutputs) (Required): [Required]
* **queueSettings**: [QueueSettings](#queuesettings): Queue settings for the job
* **resources**: [JobResources](#jobresources): Instance types and other resources for the job

### PipelineJob
#### Properties
* **inputs**: [PipelineJobInputs](#pipelinejobinputs): Inputs for the pipeline job.
* **jobs**: [PipelineJobJobs](#pipelinejobjobs): Jobs construct the Pipeline Job.
* **jobType**: 'Pipeline' (Required): [Required] Specifies the type of job.
* **outputs**: [PipelineJobOutputs](#pipelinejoboutputs): Outputs for the pipeline job
* **settings**: any: Pipeline settings, for things like ContinueRunOnStepFailure etc.
* **sourceJobId**: string: ARM resource ID of source job.

### SparkJob
#### Properties
* **archives**: string[]: Archive files used in the job.
* **args**: string: Arguments for the job.
* **codeId**: string (Required): [Required] arm-id of the code asset.
* **conf**: [SparkJobConf](#sparkjobconf): Spark configured properties.
* **entry**: [SparkJobEntry](#sparkjobentry) (Required): [Required] The entry to execute on startup of the job.
* **environmentId**: string: The ARM resource ID of the Environment specification for the job.
* **environmentVariables**: [SparkJobEnvironmentVariables](#sparkjobenvironmentvariables): Environment variables included in the job.
* **files**: string[]: Files used in the job.
* **inputs**: [SparkJobInputs](#sparkjobinputs): Mapping of input data bindings used in the job.
* **jars**: string[]: Jar files used in the job.
* **jobType**: 'Spark' (Required): [Required] Specifies the type of job.
* **outputs**: [SparkJobOutputs](#sparkjoboutputs): Mapping of output data bindings used in the job.
* **pyFiles**: string[]: Python files used in the job.
* **queueSettings**: [QueueSettings](#queuesettings): Queue settings for the job
* **resources**: [SparkResourceConfiguration](#sparkresourceconfiguration): Compute Resource configuration for the job.

### SweepJob
#### Properties
* **earlyTermination**: [EarlyTerminationPolicy](#earlyterminationpolicy): Early termination policies enable canceling poor-performing runs before they complete
* **inputs**: [SweepJobInputs](#sweepjobinputs): Mapping of input data bindings used in the job.
* **jobType**: 'Sweep' (Required): [Required] Specifies the type of job.
* **limits**: [SweepJobLimits](#sweepjoblimits): Sweep Job limit.
* **objective**: [Objective](#objective) (Required): [Required] Optimization objective.
* **outputs**: [SweepJobOutputs](#sweepjoboutputs): Mapping of output data bindings used in the job.
* **queueSettings**: [QueueSettings](#queuesettings): Queue settings for the job
* **samplingAlgorithm**: [SamplingAlgorithm](#samplingalgorithm) (Required): [Required] The hyperparameter sampling algorithm
* **searchSpace**: any (Required): [Required] A dictionary containing each parameter and its distribution. The dictionary key is the name of the parameter
* **trial**: [TrialComponent](#trialcomponent) (Required): [Required] Trial component definition.


## JobBaseServices
### Properties
### Additional Properties
* **Additional Properties Type**: [JobService](#jobservice)

## JobInput
* **Discriminator**: jobInputType

### Base Properties
* **description**: string: Description for the input.

### CustomModelJobInput
#### Properties
* **jobInputType**: 'custom_model' (Required): [Required] Specifies the type of job.
* **mode**: 'Direct' | 'Download' | 'EvalDownload' | 'EvalMount' | 'ReadOnlyMount' | 'ReadWriteMount' | string: Input Asset Delivery Mode.
* **uri**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] Input Asset URI.

### LiteralJobInput
#### Properties
* **jobInputType**: 'literal' (Required): [Required] Specifies the type of job.
* **value**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] Literal value for the input.

### MLFlowModelJobInput
#### Properties
* **jobInputType**: 'mlflow_model' (Required): [Required] Specifies the type of job.
* **mode**: 'Direct' | 'Download' | 'EvalDownload' | 'EvalMount' | 'ReadOnlyMount' | 'ReadWriteMount' | string: Input Asset Delivery Mode.
* **uri**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] Input Asset URI.

### MLTableJobInput
#### Properties
* **jobInputType**: 'mltable' (Required): [Required] Specifies the type of job.
* **mode**: 'Direct' | 'Download' | 'EvalDownload' | 'EvalMount' | 'ReadOnlyMount' | 'ReadWriteMount' | string: Input Asset Delivery Mode.
* **uri**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] Input Asset URI.

### TritonModelJobInput
#### Properties
* **jobInputType**: 'triton_model' (Required): [Required] Specifies the type of job.
* **mode**: 'Direct' | 'Download' | 'EvalDownload' | 'EvalMount' | 'ReadOnlyMount' | 'ReadWriteMount' | string: Input Asset Delivery Mode.
* **uri**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] Input Asset URI.

### UriFileJobInput
#### Properties
* **jobInputType**: 'uri_file' (Required): [Required] Specifies the type of job.
* **mode**: 'Direct' | 'Download' | 'EvalDownload' | 'EvalMount' | 'ReadOnlyMount' | 'ReadWriteMount' | string: Input Asset Delivery Mode.
* **uri**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] Input Asset URI.

### UriFolderJobInput
#### Properties
* **jobInputType**: 'uri_folder' (Required): [Required] Specifies the type of job.
* **mode**: 'Direct' | 'Download' | 'EvalDownload' | 'EvalMount' | 'ReadOnlyMount' | 'ReadWriteMount' | string: Input Asset Delivery Mode.
* **uri**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] Input Asset URI.


## JobOutput
* **Discriminator**: jobOutputType

### Base Properties
* **description**: string: Description for the output.

### CustomModelJobOutput
#### Properties
* **assetName**: string: Output Asset Name.
* **jobOutputType**: 'custom_model' (Required): [Required] Specifies the type of job.
* **mode**: 'Direct' | 'ReadWriteMount' | 'Upload' | string: Output Asset Delivery Mode.
* **uri**: string: Output Asset URI.

### MLFlowModelJobOutput
#### Properties
* **assetName**: string: Output Asset Name.
* **jobOutputType**: 'mlflow_model' (Required): [Required] Specifies the type of job.
* **mode**: 'Direct' | 'ReadWriteMount' | 'Upload' | string: Output Asset Delivery Mode.
* **uri**: string: Output Asset URI.

### MLTableJobOutput
#### Properties
* **assetName**: string: Output Asset Name.
* **jobOutputType**: 'mltable' (Required): [Required] Specifies the type of job.
* **mode**: 'Direct' | 'ReadWriteMount' | 'Upload' | string: Output Asset Delivery Mode.
* **uri**: string: Output Asset URI.

### TritonModelJobOutput
#### Properties
* **assetName**: string: Output Asset Name.
* **jobOutputType**: 'triton_model' (Required): [Required] Specifies the type of job.
* **mode**: 'Direct' | 'ReadWriteMount' | 'Upload' | string: Output Asset Delivery Mode.
* **uri**: string: Output Asset URI.

### UriFileJobOutput
#### Properties
* **assetName**: string: Output Asset Name.
* **jobOutputType**: 'uri_file' (Required): [Required] Specifies the type of job.
* **mode**: 'Direct' | 'ReadWriteMount' | 'Upload' | string: Output Asset Delivery Mode.
* **uri**: string: Output Asset URI.

### UriFolderJobOutput
#### Properties
* **assetName**: string: Output Asset Name.
* **jobOutputType**: 'uri_folder' (Required): [Required] Specifies the type of job.
* **mode**: 'Direct' | 'ReadWriteMount' | 'Upload' | string: Output Asset Delivery Mode.
* **uri**: string: Output Asset URI.


## JobResourceConfiguration
### Properties
* **dockerArgs**: string: Extra arguments to pass to the Docker run command. This would override any parameters that have already been set by the system, or in this section. This parameter is only supported for Azure ML compute types.
* **dockerArgsList**: string[]: Extra arguments to pass to the Docker run command, as a collection. This would override any parameters that have already been set by the system, or in this section. This parameter is only supported for Azure ML compute types.
* **instanceCount**: int: Optional number of instances or nodes used by the compute target.
* **instanceType**: string: Optional type of VM used as supported by the compute target.
* **properties**: [ResourceConfigurationProperties](#resourceconfigurationproperties): Additional properties bag.
* **shmSize**: string {pattern: "\d+[bBkKmMgG]"}: Size of the docker container's shared memory block. This should be in the format of (number)(unit) where number as to be greater than 0 and the unit can be one of b(bytes), k(kilobytes), m(megabytes), or g(gigabytes).

## JobResources
### Properties
* **instanceTypes**: string[]: List of instance types to choose from.

## JobService
### Properties
* **endpoint**: string: Url for endpoint.
* **errorMessage**: string (ReadOnly): Any error in the service.
* **jobServiceType**: string: Endpoint type.
* **nodes**: [Nodes](#nodes): Nodes that user would like to start the service on.
If Nodes is not set or set to null, the service will only be started on leader node.
* **port**: int: Port for endpoint.
* **properties**: [JobServiceProperties](#jobserviceproperties): Additional properties to set on the endpoint.
* **status**: string (ReadOnly): Status of endpoint.

## JobServiceProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JupyterKernelConfig
### Properties
* **argv**: string[]: Argument to the the runtime
* **displayName**: string: Display name of the kernel
* **language**: string: Language of the kernel [Example value: python]

## KeyVaultProperties
### Properties
* **identityClientId**: string: Currently, we support only SystemAssigned MSI.
We need this when we support UserAssignedIdentities
* **keyIdentifier**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): KeyVault key identifier to encrypt the data
* **keyVaultArmId**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): KeyVault Arm Id that contains the data encryption key

## KubernetesProperties
### Properties
* **defaultInstanceType**: string: Default instance type
* **extensionInstanceReleaseTrain**: string: Extension instance release train.
* **extensionPrincipalId**: string: Extension principal-id.
* **instanceTypes**: [KubernetesPropertiesInstanceTypes](#kubernetespropertiesinstancetypes): Instance Type Schema
* **namespace**: string: Compute namespace
* **relayConnectionString**: string {sensitive}: Relay connection string.
* **serviceBusConnectionString**: string {sensitive}: ServiceBus connection string.
* **vcName**: string: VC name.

## KubernetesPropertiesInstanceTypes
### Properties
### Additional Properties
* **Additional Properties Type**: [InstanceTypeSchema](#instancetypeschema)

## ListNotebookKeysResult
### Properties
* **primaryAccessKey**: string {sensitive} (ReadOnly): The primary access key of the Notebook
* **secondaryAccessKey**: string {sensitive} (ReadOnly): The secondary access key of the Notebook

## ListNotebookKeysResult
### Properties
* **primaryAccessKey**: string {sensitive} (ReadOnly): The primary access key of the Notebook
* **secondaryAccessKey**: string {sensitive} (ReadOnly): The secondary access key of the Notebook

## ListStorageAccountKeysResult
### Properties
* **userStorageKey**: string {sensitive} (ReadOnly): The access key of the storage

## ListWorkspaceKeysResult
### Properties
* **appInsightsInstrumentationKey**: string {sensitive} (ReadOnly): The access key of the workspace app insights
* **containerRegistryCredentials**: [RegistryListCredentialsResult](#registrylistcredentialsresult)
* **notebookAccessKeys**: [ListNotebookKeysResult](#listnotebookkeysresult)
* **userStorageArmId**: string (ReadOnly): The arm Id key of the workspace storage
* **userStorageKey**: string {sensitive} (ReadOnly): The access key of the workspace storage

## ManagedNetworkProvisionStatus
### Properties
* **sparkReady**: bool
* **status**: 'Active' | 'Inactive' | string: Status for the managed network of a machine learning workspace.

## ManagedNetworkSettings
### Properties
* **changeableIsolationModes**: ('AllowInternetOutbound' | 'AllowOnlyApprovedOutbound' | 'Disabled' | string)[] (ReadOnly)
* **firewallSku**: 'Basic' | 'Standard' | string: Firewall Sku used for FQDN Rules
* **isolationMode**: 'AllowInternetOutbound' | 'AllowOnlyApprovedOutbound' | 'Disabled' | string: Isolation mode for the managed network of a machine learning workspace.
* **networkId**: string (ReadOnly)
* **outboundRules**: [ManagedNetworkSettingsOutboundRules](#managednetworksettingsoutboundrules): Dictionary of <OutboundRule>
* **status**: [ManagedNetworkProvisionStatus](#managednetworkprovisionstatus): Status of the Provisioning for the managed network of a machine learning workspace.

## ManagedNetworkSettingsOutboundRules
### Properties
### Additional Properties
* **Additional Properties Type**: [OutboundRule](#outboundrule)

## ManagedOnlineEndpointResourcePropertiesMirrorTraffic
### Properties
### Additional Properties
* **Additional Properties Type**: int

## ManagedOnlineEndpointResourcePropertiesTraffic
### Properties
### Additional Properties
* **Additional Properties Type**: int

## ManagedResourceGroupAssignedIdentities
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): Identity principal Id

## ManagedResourceGroupSettings
### Properties
* **assignedIdentities**: [ManagedResourceGroupAssignedIdentities](#managedresourcegroupassignedidentities)[]: List of assigned identities for the managed resource group

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## MarketplacePlan
### Properties
* **offerId**: string (ReadOnly): The identifying name of the Offer of the Marketplace Plan.
* **planId**: string (ReadOnly): The identifying name of the Plan of the Marketplace Plan.
* **publisherId**: string (ReadOnly): The identifying name of the Publisher of the Marketplace Plan.

## MarketplaceSubscriptionProperties
### Properties
* **marketplacePlan**: [MarketplacePlan](#marketplaceplan) (ReadOnly): Marketplace Plan associated with the Marketplace Subscription.
* **marketplaceSubscriptionStatus**: 'Subscribed' | 'Suspended' | 'Unsubscribed' | string (ReadOnly): Current status of the Marketplace Subscription.
* **modelId**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] Target Marketplace Model ID to create a Marketplace Subscription for.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State of the Marketplace Subscription.

## MaterializationComputeResource
### Properties
* **instanceType**: string: Specifies the instance type

## MaterializationSettings
### Properties
* **notification**: [NotificationSetting](#notificationsetting): Specifies the notification details
* **resource**: [MaterializationComputeResource](#materializationcomputeresource): Specifies the compute resource settings
* **schedule**: [RecurrenceTrigger](#recurrencetrigger): Specifies the schedule details
* **sparkConfiguration**: [MaterializationSettingsSparkConfiguration](#materializationsettingssparkconfiguration): Specifies the spark compute settings
* **storeType**: 'None' | 'Offline' | 'Online' | 'OnlineAndOffline' | string: Specifies the stores to which materialization should happen

## MaterializationSettingsSparkConfiguration
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MLFlowModelJobInput
### Properties
* **description**: string: Description for the input.
* **jobInputType**: 'custom_model' | 'literal' | 'mlflow_model' | 'mltable' | 'triton_model' | 'uri_file' | 'uri_folder' | string (Required): [Required] Specifies the type of job.
* **mode**: 'Direct' | 'Download' | 'EvalDownload' | 'EvalMount' | 'ReadOnlyMount' | 'ReadWriteMount' | string: Input Asset Delivery Mode.
* **uri**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] Input Asset URI.

## MLTableJobInput
### Properties
* **description**: string: Description for the input.
* **jobInputType**: 'custom_model' | 'literal' | 'mlflow_model' | 'mltable' | 'triton_model' | 'uri_file' | 'uri_folder' | string (Required): [Required] Specifies the type of job.
* **mode**: 'Direct' | 'Download' | 'EvalDownload' | 'EvalMount' | 'ReadOnlyMount' | 'ReadWriteMount' | string: Input Asset Delivery Mode.
* **uri**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] Input Asset URI.

## ModelContainerProperties
### Properties
* **description**: string: The asset description text.
* **isArchived**: bool: Is the asset archived?
* **latestVersion**: string (ReadOnly): The latest version inside this container.
* **nextVersion**: string (ReadOnly): The next auto incremental version
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state for the model container.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.

## ModelSettings
### Properties
* **modelId**: string: The unique model identifier that this ServerlessEndpoint should provision.

## ModelVersionFlavors
### Properties
### Additional Properties
* **Additional Properties Type**: [FlavorData](#flavordata)

## ModelVersionProperties
### Properties
* **description**: string: The asset description text.
* **flavors**: [ModelVersionFlavors](#modelversionflavors): Mapping of model flavors to their properties.
* **isAnonymous**: bool: If the name version are system generated (anonymous registration).
* **isArchived**: bool: Is the asset archived?
* **jobName**: string: Name of the training job which produced this model
* **modelType**: string: The storage format for this entity. Used for NCD.
* **modelUri**: string: The URI path to the model contents.
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state for the model version.
* **stage**: string: Stage in the model lifecycle assigned to this model
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.

## MonitorComputeConfigurationBase
* **Discriminator**: computeType

### Base Properties

### MonitorServerlessSparkCompute
#### Properties
* **computeIdentity**: [MonitorComputeIdentityBase](#monitorcomputeidentitybase) (Required): [Required] The identity scheme leveraged to by the spark jobs running on serverless Spark.
* **computeType**: 'ServerlessSpark' (Required): [Required] Specifies the type of signal to monitor.
* **instanceType**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] The instance type running the Spark job.
* **runtimeVersion**: string {minLength: 1, pattern: "^[0-9]+\.[0-9]+$"} (Required): [Required] The Spark runtime version.


## MonitorComputeIdentityBase
* **Discriminator**: computeIdentityType

### Base Properties

### AmlTokenComputeIdentity
#### Properties
* **computeIdentityType**: 'AmlToken' (Required): [Required] Specifies the type of identity to use within the monitoring jobs.

### ManagedComputeIdentity
#### Properties
* **computeIdentityType**: 'ManagedIdentity' (Required): [Required] Specifies the type of identity to use within the monitoring jobs.
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The identity which will be leveraged by the monitoring jobs.


## MonitorDefinition
### Properties
* **alertNotificationSettings**: [MonitorNotificationSettings](#monitornotificationsettings): The monitor's notification settings.
* **computeConfiguration**: [MonitorComputeConfigurationBase](#monitorcomputeconfigurationbase) (Required): [Required] The ARM resource ID of the compute resource to run the monitoring job on.
* **monitoringTarget**: [MonitoringTarget](#monitoringtarget): The entities targeted by the monitor.
* **signals**: [MonitorDefinitionSignals](#monitordefinitionsignals) (Required): [Required] The signals to monitor.

## MonitorDefinitionSignals
### Properties
### Additional Properties
* **Additional Properties Type**: [MonitoringSignalBase](#monitoringsignalbase)

## MonitorEmailNotificationSettings
### Properties
* **emails**: string[]: The email recipient list which has a limitation of 499 characters in total.

## MonitoringFeatureFilterBase
* **Discriminator**: filterType

### Base Properties

### AllFeatures
#### Properties
* **filterType**: 'AllFeatures' (Required): [Required] Specifies the feature filter to leverage when selecting features to calculate metrics over.

### FeatureSubset
#### Properties
* **features**: string[] (Required): [Required] The list of features to include.
* **filterType**: 'FeatureSubset' (Required): [Required] Specifies the feature filter to leverage when selecting features to calculate metrics over.

### TopNFeaturesByAttribution
#### Properties
* **filterType**: 'TopNByAttribution' (Required): [Required] Specifies the feature filter to leverage when selecting features to calculate metrics over.
* **top**: int: The number of top features to include.


## MonitoringInputDataBase
* **Discriminator**: inputDataType

### Base Properties
* **columns**: [MonitoringInputDataBaseColumns](#monitoringinputdatabasecolumns): Mapping of column names to special uses.
* **dataContext**: string: The context metadata of the data source.
* **jobInputType**: 'custom_model' | 'literal' | 'mlflow_model' | 'mltable' | 'triton_model' | 'uri_file' | 'uri_folder' | string (Required): [Required] Specifies the type of job.
* **uri**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] Input Asset URI.

### FixedInputData
#### Properties
* **inputDataType**: 'Fixed' (Required): [Required] Specifies the type of signal to monitor.

### RollingInputData
#### Properties
* **inputDataType**: 'Rolling' (Required): [Required] Specifies the type of signal to monitor.
* **preprocessingComponentId**: string: Reference to the component asset used to preprocess the data.
* **windowOffset**: string (Required): [Required] The time offset between the end of the data window and the monitor's current run time.
* **windowSize**: string (Required): [Required] The size of the rolling data window.

### StaticInputData
#### Properties
* **inputDataType**: 'Static' (Required): [Required] Specifies the type of signal to monitor.
* **preprocessingComponentId**: string: Reference to the component asset used to preprocess the data.
* **windowEnd**: string (Required): [Required] The end date of the data window.
* **windowStart**: string (Required): [Required] The start date of the data window.


## MonitoringInputDataBaseColumns
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MonitoringSignalBase
* **Discriminator**: signalType

### Base Properties
* **notificationTypes**: ('AmlNotification' | string)[]: The current notification mode for this signal.
* **properties**: [MonitoringSignalBaseProperties](#monitoringsignalbaseproperties): Property dictionary. Properties can be added, but not removed or altered.

### CustomMonitoringSignal
#### Properties
* **componentId**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] Reference to the component asset used to calculate the custom metrics.
* **inputAssets**: [CustomMonitoringSignalInputAssets](#custommonitoringsignalinputassets): Monitoring assets to take as input. Key is the component input port name, value is the data asset.
* **inputs**: [CustomMonitoringSignalInputs](#custommonitoringsignalinputs): Extra component parameters to take as input. Key is the component literal input port name, value is the parameter value.
* **metricThresholds**: [CustomMetricThreshold](#custommetricthreshold)[] (Required): [Required] A list of metrics to calculate and their associated thresholds.
* **signalType**: 'Custom' (Required): [Required] Specifies the type of signal to monitor.

### DataDriftMonitoringSignal
#### Properties
* **featureDataTypeOverride**: [DataDriftMonitoringSignalFeatureDataTypeOverride](#datadriftmonitoringsignalfeaturedatatypeoverride): A dictionary that maps feature names to their respective data types.
* **featureImportanceSettings**: [FeatureImportanceSettings](#featureimportancesettings): The settings for computing feature importance.
* **features**: [MonitoringFeatureFilterBase](#monitoringfeaturefilterbase): The feature filter which identifies which feature to calculate drift over.
* **metricThresholds**: [DataDriftMetricThresholdBase](#datadriftmetricthresholdbase)[] (Required): [Required] A list of metrics to calculate and their associated thresholds.
* **productionData**: [MonitoringInputDataBase](#monitoringinputdatabase) (Required): [Required] The data which drift will be calculated for.
* **referenceData**: [MonitoringInputDataBase](#monitoringinputdatabase) (Required): [Required] The data to calculate drift against.
* **signalType**: 'DataDrift' (Required): [Required] Specifies the type of signal to monitor.

### DataQualityMonitoringSignal
#### Properties
* **featureDataTypeOverride**: [DataQualityMonitoringSignalFeatureDataTypeOverride](#dataqualitymonitoringsignalfeaturedatatypeoverride): A dictionary that maps feature names to their respective data types.
* **featureImportanceSettings**: [FeatureImportanceSettings](#featureimportancesettings): The settings for computing feature importance.
* **features**: [MonitoringFeatureFilterBase](#monitoringfeaturefilterbase): The features to calculate drift over.
* **metricThresholds**: [DataQualityMetricThresholdBase](#dataqualitymetricthresholdbase)[] (Required): [Required] A list of metrics to calculate and their associated thresholds.
* **productionData**: [MonitoringInputDataBase](#monitoringinputdatabase) (Required): [Required] The data produced by the production service which drift will be calculated for.
* **referenceData**: [MonitoringInputDataBase](#monitoringinputdatabase) (Required): [Required] The data to calculate drift against.
* **signalType**: 'DataQuality' (Required): [Required] Specifies the type of signal to monitor.

### FeatureAttributionDriftMonitoringSignal
#### Properties
* **featureDataTypeOverride**: [FeatureAttributionDriftMonitoringSignalFeatureDataTypeOverride](#featureattributiondriftmonitoringsignalfeaturedatatypeoverride): A dictionary that maps feature names to their respective data types.
* **featureImportanceSettings**: [FeatureImportanceSettings](#featureimportancesettings) (Required): [Required] The settings for computing feature importance.
* **metricThreshold**: [FeatureAttributionMetricThreshold](#featureattributionmetricthreshold) (Required): [Required] A list of metrics to calculate and their associated thresholds.
* **productionData**: [MonitoringInputDataBase](#monitoringinputdatabase)[] (Required): [Required] The data which drift will be calculated for.
* **referenceData**: [MonitoringInputDataBase](#monitoringinputdatabase) (Required): [Required] The data to calculate drift against.
* **signalType**: 'FeatureAttributionDrift' (Required): [Required] Specifies the type of signal to monitor.

### PredictionDriftMonitoringSignal
#### Properties
* **featureDataTypeOverride**: [PredictionDriftMonitoringSignalFeatureDataTypeOverride](#predictiondriftmonitoringsignalfeaturedatatypeoverride): A dictionary that maps feature names to their respective data types.
* **metricThresholds**: [PredictionDriftMetricThresholdBase](#predictiondriftmetricthresholdbase)[] (Required): [Required] A list of metrics to calculate and their associated thresholds.
* **productionData**: [MonitoringInputDataBase](#monitoringinputdatabase) (Required): [Required] The data which drift will be calculated for.
* **referenceData**: [MonitoringInputDataBase](#monitoringinputdatabase) (Required): [Required] The data to calculate drift against.
* **signalType**: 'PredictionDrift' (Required): [Required] Specifies the type of signal to monitor.


## MonitoringSignalBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MonitoringTarget
### Properties
* **deploymentId**: string: Reference to the deployment asset targeted by this monitor.
* **modelId**: string: Reference to the model asset targeted by this monitor.
* **taskType**: 'Classification' | 'Regression' | string (Required): [Required] The machine learning task type of the monitored model.

## MonitoringThreshold
### Properties
* **value**: int: The threshold value. If null, the set default is dependent on the metric type.

## MonitorNotificationSettings
### Properties
* **emailNotificationSettings**: [MonitorEmailNotificationSettings](#monitoremailnotificationsettings): The AML notification email settings.

## NCrossValidations
* **Discriminator**: mode

### Base Properties

### AutoNCrossValidations
#### Properties
* **mode**: 'Auto' (Required): [Required] Mode for determining N-Cross validations.

### CustomNCrossValidations
#### Properties
* **mode**: 'Custom' (Required): [Required] Mode for determining N-Cross validations.
* **value**: int (Required): [Required] N-Cross validations value.


## NetworkAcls
### Properties
* **defaultAction**: 'Allow' | 'Deny' | string: The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated.
* **ipRules**: [IPRule](#iprule)[]: Rules governing the accessibility of a resource from a specific ip address or ip range.

## NlpVerticalFeaturizationSettings
### Properties
* **datasetLanguage**: string: Dataset language, useful for the text data.

## NlpVerticalLimitSettings
### Properties
* **maxConcurrentTrials**: int: Maximum Concurrent AutoML iterations.
* **maxTrials**: int: Number of AutoML iterations.
* **timeout**: string: AutoML job timeout.

## Nodes
* **Discriminator**: nodesValueType

### Base Properties

### AllNodes
#### Properties
* **nodesValueType**: 'All' (Required): [Required] Type of the Nodes value


## NodeStateCounts
### Properties
* **idleNodeCount**: int (ReadOnly): Number of compute nodes in idle state.
* **leavingNodeCount**: int (ReadOnly): Number of compute nodes which are leaving the amlCompute.
* **preemptedNodeCount**: int (ReadOnly): Number of compute nodes which are in preempted state.
* **preparingNodeCount**: int (ReadOnly): Number of compute nodes which are being prepared.
* **runningNodeCount**: int (ReadOnly): Number of compute nodes which are running jobs.
* **unusableNodeCount**: int (ReadOnly): Number of compute nodes which are in unusable state.

## NotebookAccessTokenResult
### Properties
* **accessToken**: string {sensitive} (ReadOnly)
* **expiresIn**: int (ReadOnly)
* **hostName**: string (ReadOnly)
* **notebookResourceId**: string (ReadOnly)
* **publicDns**: string (ReadOnly)
* **refreshToken**: string {sensitive} (ReadOnly)
* **scope**: string (ReadOnly)
* **tokenType**: string (ReadOnly)

## NotebookPreparationError
### Properties
* **errorMessage**: string
* **statusCode**: int

## NotebookResourceInfo
### Properties
* **fqdn**: string
* **isPrivateLinkEnabled**: bool
* **notebookPreparationError**: [NotebookPreparationError](#notebookpreparationerror): The error that occurs when preparing notebook.
* **resourceId**: string: the data plane resourceId that used to initialize notebook component

## NotificationSetting
### Properties
* **emailOn**: ('JobCancelled' | 'JobCompleted' | 'JobFailed' | string)[]: Send email notification to user on specified notification type
* **emails**: string[]: This is the email recipient list which has a limitation of 499 characters in total concat with comma separator
* **webhooks**: [NotificationSettingWebhooks](#notificationsettingwebhooks): Send webhook callback to a service. Key is a user-provided name for the webhook.

## NotificationSettingWebhooks
### Properties
### Additional Properties
* **Additional Properties Type**: [Webhook](#webhook)

## Objective
### Properties
* **goal**: 'Maximize' | 'Minimize' | string (Required): [Required] Defines supported metric goals for hyperparameter tuning
* **primaryMetric**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] Name of the metric to optimize.

## OneLakeArtifact
* **Discriminator**: artifactType

### Base Properties
* **artifactName**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] OneLake artifact name

### LakeHouseArtifact
#### Properties
* **artifactType**: 'LakeHouse' (Required): [Required] OneLake artifact type


## OnlineDeploymentProperties
* **Discriminator**: endpointComputeType

### Base Properties
* **appInsightsEnabled**: bool: If true, enables Application Insights logging.
* **codeConfiguration**: [CodeConfiguration](#codeconfiguration): Code configuration for the endpoint deployment.
* **dataCollector**: [DataCollector](#datacollector): The mdc configuration, we disable mdc when it's null.
* **description**: string: Description of the endpoint deployment.
* **egressPublicNetworkAccess**: 'Disabled' | 'Enabled' | string: If Enabled, allow egress public network access. If Disabled, this will create secure egress. Default: Enabled.
* **environmentId**: string: ARM resource ID or AssetId of the environment specification for the endpoint deployment.
* **environmentVariables**: [EndpointDeploymentPropertiesBaseEnvironmentVariables](#endpointdeploymentpropertiesbaseenvironmentvariables): Environment variables configuration for the deployment.
* **instanceType**: string: Compute instance type. Default: Standard_F4s_v2.
* **livenessProbe**: [ProbeSettings](#probesettings): Liveness probe monitors the health of the container regularly.
* **model**: string: The URI path to the model.
* **modelMountPath**: string: The path to mount the model in custom container.
* **properties**: [EndpointDeploymentPropertiesBaseProperties](#endpointdeploymentpropertiesbaseproperties): Property dictionary. Properties can be added, but not removed or altered.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Scaling' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state for the endpoint deployment.
* **readinessProbe**: [ProbeSettings](#probesettings): Readiness probe validates if the container is ready to serve traffic. The properties and defaults are the same as liveness probe.
* **requestSettings**: [OnlineRequestSettings](#onlinerequestsettings): Request settings for the deployment.
* **scaleSettings**: [OnlineScaleSettings](#onlinescalesettings): Scale settings for the deployment.
If it is null or not provided,
it defaults to TargetUtilizationScaleSettings for KubernetesOnlineDeployment
and to DefaultScaleSettings for ManagedOnlineDeployment.

### KubernetesOnlineDeployment
#### Properties
* **containerResourceRequirements**: [ContainerResourceRequirements](#containerresourcerequirements): The resource requirements for the container (cpu and memory).
* **endpointComputeType**: 'Kubernetes' (Required): [Required] The compute type of the endpoint.

### ManagedOnlineDeployment
#### Properties
* **endpointComputeType**: 'Managed' (Required): [Required] The compute type of the endpoint.


## OnlineEndpointMirrorTraffic
### Properties
### Additional Properties
* **Additional Properties Type**: int

## OnlineEndpointProperties
### Properties
* **authMode**: 'AADToken' | 'AMLToken' | 'Key' | string (Required): [Required] The authentication method for invoking the endpoint (data plane operation). Use 'Key' for key-based authentication. Use 'AMLToken' for Azure Machine Learning token-based authentication. Use 'AADToken' for Microsoft Entra token-based authentication.
* **compute**: string: ARM resource ID of the compute if it exists.
optional
* **description**: string: Description of the inference endpoint.
* **keys**: [EndpointAuthKeys](#endpointauthkeys) (WriteOnly): EndpointAuthKeys to set initially on an Endpoint.
This property will always be returned as null. AuthKey values must be retrieved using the ListKeys API.
* **mirrorTraffic**: [OnlineEndpointMirrorTraffic](#onlineendpointmirrortraffic): Percentage of traffic to be mirrored to each deployment without using returned scoring. Traffic values need to sum to utmost 50.
* **properties**: [EndpointPropertiesBaseProperties](#endpointpropertiesbaseproperties): Property dictionary. Properties can be added, but not removed or altered.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state for the endpoint.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Set to "Enabled" for endpoints that should allow public access when Private Link is enabled.
* **scoringUri**: string (ReadOnly): Endpoint URI.
* **swaggerUri**: string (ReadOnly): Endpoint Swagger URI.
* **traffic**: [OnlineEndpointTraffic](#onlineendpointtraffic): Percentage of traffic from endpoint to divert to each deployment. Traffic values need to sum to 100.

## OnlineEndpointTraffic
### Properties
### Additional Properties
* **Additional Properties Type**: int

## OnlineRequestSettings
### Properties
* **maxConcurrentRequestsPerInstance**: int: The number of maximum concurrent requests per node allowed per deployment. Defaults to 1.
* **maxQueueWait**: string: (Deprecated for Managed Online Endpoints) The maximum amount of time a request will stay in the queue in ISO 8601 format.
Defaults to 500ms.
(Now increase `request_timeout_ms` to account for any networking/queue delays)
* **requestTimeout**: string: The scoring timeout in ISO 8601 format.
Defaults to 5000ms.

## OnlineScaleSettings
* **Discriminator**: scaleType

### Base Properties

### DefaultScaleSettings
#### Properties
* **scaleType**: 'Default' (Required): [Required] Type of deployment scaling algorithm

### TargetUtilizationScaleSettings
#### Properties
* **maxInstances**: int: The maximum number of instances that the deployment can scale to. The quota will be reserved for max_instances.
* **minInstances**: int: The minimum number of instances to always be present.
* **pollingInterval**: string: The polling interval in ISO 8691 format. Only supports duration with precision as low as Seconds.
* **scaleType**: 'TargetUtilization' (Required): [Required] Type of deployment scaling algorithm
* **targetUtilizationPercentage**: int: Target CPU usage for the autoscaler.


## OsPatchingStatus
### Properties
* **latestPatchTime**: string: Time of the latest os patching.
* **osPatchingErrors**: [ErrorResponse](#errorresponse)[]: Collection of errors encountered when doing os patching.
* **patchStatus**: 'CompletedWithWarnings' | 'Failed' | 'InProgress' | 'Succeeded' | 'Unknown' | string: The os patching status.
* **rebootPending**: bool: Specifies whether this compute instance is pending for reboot to finish os patching.
* **scheduledRebootTime**: string: Time of scheduled reboot.

## OutboundRule
* **Discriminator**: type

### Base Properties
* **category**: 'Dependency' | 'Recommended' | 'Required' | 'UserDefined' | string: Category of a managed network Outbound Rule of a machine learning workspace.
* **parentRuleNames**: string[] (ReadOnly)
* **status**: 'Active' | 'Inactive' | string: Type of a managed network Outbound Rule of a machine learning workspace.

### FqdnOutboundRule
#### Properties
* **destination**: string
* **type**: 'FQDN' (Required): Type of a managed network Outbound Rule of a machine learning workspace.

### PrivateEndpointOutboundRule
#### Properties
* **destination**: [PrivateEndpointDestination](#privateendpointdestination): Private Endpoint destination for a Private Endpoint Outbound Rule for the managed network of a machine learning workspace.
* **fqdns**: string[]
* **type**: 'PrivateEndpoint' (Required): Type of a managed network Outbound Rule of a machine learning workspace.

### ServiceTagOutboundRule
#### Properties
* **destination**: [ServiceTagDestination](#servicetagdestination): Service Tag destination for a Service Tag Outbound Rule for the managed network of a machine learning workspace.
* **type**: 'ServiceTag' (Required): Type of a managed network Outbound Rule of a machine learning workspace.


## Password
### Properties
* **name**: string {sensitive} (ReadOnly)
* **value**: string {sensitive} (ReadOnly)

## PersonalComputeInstanceSettings
### Properties
* **assignedUser**: [AssignedUser](#assigneduser): A user explicitly assigned to a personal compute instance.

## PipelineJobInputs
### Properties
### Additional Properties
* **Additional Properties Type**: [JobInput](#jobinput)

## PipelineJobJobs
### Properties
### Additional Properties
* **Additional Properties Type**: any

## PipelineJobOutputs
### Properties
### Additional Properties
* **Additional Properties Type**: [JobOutput](#joboutput)

## PredictionDriftMetricThresholdBase
* **Discriminator**: dataType

### Base Properties
* **threshold**: [MonitoringThreshold](#monitoringthreshold): The threshold value. If null, a default value will be set depending on the selected metric.

### CategoricalPredictionDriftMetricThreshold
#### Properties
* **dataType**: 'Categorical' (Required): [Required] Specifies the data type of the metric threshold.
* **metric**: 'JensenShannonDistance' | 'PearsonsChiSquaredTest' | 'PopulationStabilityIndex' | string (Required): [Required] The categorical prediction drift metric to calculate.

### NumericalPredictionDriftMetricThreshold
#### Properties
* **dataType**: 'Numerical' (Required): [Required] Specifies the data type of the metric threshold.
* **metric**: 'JensenShannonDistance' | 'NormalizedWassersteinDistance' | 'PopulationStabilityIndex' | 'TwoSampleKolmogorovSmirnovTest' | string (Required): [Required] The numerical prediction drift metric to calculate.


## PredictionDriftMonitoringSignalFeatureDataTypeOverride
### Properties
### Additional Properties
* **Additional Properties Type**: 'Categorical' | 'Numerical' | string

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **location**: string: Same as workspace location.
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Private endpoint connection properties.
* **sku**: [Sku](#sku): Optional. This field is required to be implemented by the RP because AML is supporting more than one tier
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [PrivateEndpointConnectionTags](#privateendpointconnectiontags): Dictionary of <string>
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [WorkspacePrivateEndpointResource](#workspaceprivateendpointresource): The Private Endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): The connection state.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string: The current provisioning state.

## PrivateEndpointConnectionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateEndpointConnectionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateEndpointDestination
### Properties
* **serviceResourceId**: string
* **sparkEnabled**: bool
* **sparkStatus**: 'Active' | 'Inactive' | string: Type of a managed network Outbound Rule of a machine learning workspace.
* **subresourceTarget**: string

## PrivateEndpointResource
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint
* **subnetArmId**: string: The subnetId that the private endpoint is connected to.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: Some RP chose "None". Other RPs use this for region expansion.
* **description**: string: User-defined message that, per NRP doc, may be used for approval-related message.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout' | string: Connection status of the service consumer with the service provider

## ProbeSettings
### Properties
* **failureThreshold**: int: The number of failures to allow before returning an unhealthy status.
* **initialDelay**: string: The delay before the first probe in ISO 8601 format.
* **period**: string: The length of time between probes in ISO 8601 format.
* **successThreshold**: int: The number of successful probes before returning a healthy status.
* **timeout**: string: The probe timeout in ISO 8601 format.

## QueueSettings
### Properties
* **jobTier**: 'Basic' | 'Null' | 'Premium' | 'Spot' | 'Standard' | string: Controls the compute job tier

## RaiBlocklistConfig
### Properties
* **blocking**: bool: If blocking would occur.
* **blocklistName**: string: Name of ContentFilter.

## RaiBlocklistItemProperties
### Properties
* **isRegex**: bool: If the pattern is a regex pattern.
* **pattern**: string: Pattern to match against.

## RaiBlocklistProperties
### Properties
* **description**: string: Description of the block list.

## RaiPolicyContentFilter
### Properties
* **allowedContentLevel**: 'High' | 'Low' | 'Medium' | string: Level at which content is filtered.
* **blocking**: bool: If blocking would occur.
* **enabled**: bool: If the ContentFilter is enabled.
* **name**: string: Name of ContentFilter.
* **source**: 'Completion' | 'Prompt' | string: Content source to apply the Content Filters.

## RaiPolicyProperties
### Properties
* **basePolicyName**: string: Name of the base Content Filters.
* **completionBlocklists**: [RaiBlocklistConfig](#raiblocklistconfig)[]
* **contentFilters**: [RaiPolicyContentFilter](#raipolicycontentfilter)[]
* **mode**: 'Blocking' | 'Default' | 'Deferred' | string: Content Filters mode.
* **promptBlocklists**: [RaiBlocklistConfig](#raiblocklistconfig)[]
* **type**: 'SystemManaged' | 'UserManaged' | string: Content Filters policy type.

## Recurrence
### Properties
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'Week' | string: [Required] The frequency to trigger schedule.
* **interval**: int: [Required] Specifies schedule interval in conjunction with frequency
* **schedule**: [ComputeRecurrenceSchedule](#computerecurrenceschedule): [Required] The recurrence schedule.
* **startTime**: string: The start time in yyyy-MM-ddTHH:mm:ss format.
* **timeZone**: string: Specifies time zone in which the schedule runs.
TimeZone should follow Windows time zone format. Refer: https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/default-time-zones?view=windows-11

## RecurrenceSchedule
### Properties
* **hours**: int[] (Required): [Required] List of hours for the schedule.
* **minutes**: int[] (Required): [Required] List of minutes for the schedule.
* **monthDays**: int[]: List of month days for the schedule
* **weekDays**: ('Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string)[]: List of days for the schedule.

## RecurrenceTrigger
### Properties
* **endTime**: string: Specifies end time of schedule in ISO 8601, but without a UTC offset. Refer https://en.wikipedia.org/wiki/ISO_8601.
Recommented format would be "2022-06-01T00:00:01"
If not present, the schedule will run indefinitely
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'Week' | string (Required): [Required] The frequency to trigger schedule.
* **interval**: int (Required): [Required] Specifies schedule interval in conjunction with frequency
* **schedule**: [RecurrenceSchedule](#recurrenceschedule): The recurrence schedule.
* **startTime**: string: Specifies start time of schedule in ISO 8601 format, but without a UTC offset.
* **timeZone**: string: Specifies time zone in which the schedule runs.
TimeZone should follow Windows time zone format. Refer: https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/default-time-zones?view=windows-11
* **triggerType**: 'Cron' | 'Recurrence' | string (Required): [Required]

## RegistryListCredentialsResult
### Properties
* **location**: string (ReadOnly): The location of the workspace ACR
* **passwords**: [Password](#password)[]
* **username**: string (ReadOnly): The username of the workspace ACR

## RegistryPrivateEndpointConnection
### Properties
* **id**: string: This is the private endpoint connection name created on SRP
Full resource id: /subscriptions/{subId}/resourceGroups/{rgName}/providers/Microsoft.MachineLearningServices/{resourceType}/{resourceName}/registryPrivateEndpointConnections/{peConnectionName}
* **location**: string: Same as workspace location.
* **properties**: [RegistryPrivateEndpointConnectionProperties](#registryprivateendpointconnectionproperties): Properties of the Private Endpoint Connection

## RegistryPrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[]: The group ids
* **privateEndpoint**: [PrivateEndpointResource](#privateendpointresource): The PE network resource that is linked to this PE connection.
* **provisioningState**: string: One of null, "Succeeded", "Provisioning", "Failed". While not approved, it's null.
* **registryPrivateLinkServiceConnectionState**: [RegistryPrivateLinkServiceConnectionState](#registryprivatelinkserviceconnectionstate): The connection state.

## RegistryPrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: Some RP chose "None". Other RPs use this for region expansion.
* **description**: string: User-defined message that, per NRP doc, may be used for approval-related message.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout' | string: Connection status of the service consumer with the service provider

## RegistryProperties
### Properties
* **discoveryUrl**: string: Discovery URL for the Registry
* **intellectualPropertyPublisher**: string: IntellectualPropertyPublisher for the registry
* **managedResourceGroup**: [ArmResourceId](#armresourceid): ResourceId of the managed RG if the registry has system created resources
* **managedResourceGroupSettings**: [ManagedResourceGroupSettings](#managedresourcegroupsettings): Managed resource group specific settings
* **mlFlowRegistryUri**: string: MLFlow Registry URI for the Registry
* **publicNetworkAccess**: string: Is the Registry accessible from the internet?
Possible values: "Enabled" or "Disabled"
* **regionDetails**: [RegistryRegionArmDetails](#registryregionarmdetails)[]: Details of each region the registry is in
* **registryPrivateEndpointConnections**: [RegistryPrivateEndpointConnection](#registryprivateendpointconnection)[]: Private endpoint connections info used for pending connections in private link portal

## RegistryRegionArmDetails
### Properties
* **acrDetails**: [AcrDetails](#acrdetails)[]: List of ACR accounts
* **location**: string: The location where the registry exists
* **storageAccountDetails**: [StorageAccountDetails](#storageaccountdetails)[]: List of storage accounts

## RegressionTrainingSettings
### Properties
* **allowedTrainingAlgorithms**: ('DecisionTree' | 'ElasticNet' | 'ExtremeRandomTrees' | 'GradientBoosting' | 'KNN' | 'LassoLars' | 'LightGBM' | 'RandomForest' | 'SGD' | 'XGBoostRegressor' | string)[]: Allowed models for regression task.
* **blockedTrainingAlgorithms**: ('DecisionTree' | 'ElasticNet' | 'ExtremeRandomTrees' | 'GradientBoosting' | 'KNN' | 'LassoLars' | 'LightGBM' | 'RandomForest' | 'SGD' | 'XGBoostRegressor' | string)[]: Blocked models for regression task.
* **enableDnnTraining**: bool: Enable recommendation of DNN models.
* **enableModelExplainability**: bool: Flag to turn on explainability on best model.
* **enableOnnxCompatibleModels**: bool: Flag for enabling onnx compatible models.
* **enableStackEnsemble**: bool: Enable stack ensemble run.
* **enableVoteEnsemble**: bool: Enable voting ensemble run.
* **ensembleModelDownloadTimeout**: string: During VotingEnsemble and StackEnsemble model generation, multiple fitted models from the previous child runs are downloaded.
Configure this parameter with a higher value than 300 secs, if more time is needed.
* **stackEnsembleSettings**: [StackEnsembleSettings](#stackensemblesettings): Stack ensemble settings for stack ensemble run.

## RequestConfiguration
### Properties
* **maxConcurrentRequestsPerInstance**: int: The number of maximum concurrent requests per node allowed per deployment. Defaults to 1.
* **requestTimeout**: string: The scoring timeout in ISO 8601 format.
Defaults to 5000ms.

## RequestLogging
### Properties
* **captureHeaders**: string[]: For payload logging, we only collect payload by default. If customers also want to collect the specified headers, they can set them in captureHeaders so that backend will collect those headers along with payload.

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceConfigurationProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ResourceConfigurationProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ResourceId
### Properties
* **id**: string (Required): The ID of the resource

## Route
### Properties
* **path**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] The path for the route.
* **port**: int (Required): [Required] The port for the route.

## SamplingAlgorithm
* **Discriminator**: samplingAlgorithmType

### Base Properties

### BayesianSamplingAlgorithm
#### Properties
* **samplingAlgorithmType**: 'Bayesian' (Required): [Required] The algorithm used for generating hyperparameter values, along with configuration properties

### GridSamplingAlgorithm
#### Properties
* **samplingAlgorithmType**: 'Grid' (Required): [Required] The algorithm used for generating hyperparameter values, along with configuration properties

### RandomSamplingAlgorithm
#### Properties
* **rule**: 'Random' | 'Sobol' | string: The specific type of random algorithm
* **samplingAlgorithmType**: 'Random' (Required): [Required] The algorithm used for generating hyperparameter values, along with configuration properties
* **seed**: int: An optional integer to use as the seed for random number generation


## SasDatastoreSecrets
### Properties
* **sasToken**: string: Storage container SAS token.
* **secretsType**: 'AccountKey' | 'Certificate' | 'Sas' | 'ServicePrincipal' | string (Required): [Required] Credential type used to authentication with storage.

## ScaleSettings
### Properties
* **maxNodeCount**: int (Required): Max number of nodes to use
* **minNodeCount**: int: Min number of nodes to use
* **nodeIdleTimeBeforeScaleDown**: string: Node Idle Time before scaling down amlCompute. This string needs to be in the RFC Format.

## ScaleUnitConfiguration
### Properties
* **disablePublicEgress**: bool: Gets or sets a value indicating whether PublicEgress is disabled.
* **registries**: string[]: Gets or sets a list of Registry sources that will be used to confirm identity, storage, ACR.

## ScheduleActionBase
* **Discriminator**: actionType

### Base Properties

### JobScheduleAction
#### Properties
* **actionType**: 'CreateJob' (Required): [Required] Specifies the action type of the schedule
* **jobDefinition**: [JobBaseProperties](#jobbaseproperties) (Required): [Required] Defines Schedule action definition details.

### CreateMonitorAction
#### Properties
* **actionType**: 'CreateMonitor' (Required): [Required] Specifies the action type of the schedule
* **monitorDefinition**: [MonitorDefinition](#monitordefinition) (Required): [Required] Defines the monitor.

### EndpointScheduleAction
#### Properties
* **actionType**: 'InvokeBatchEndpoint' (Required): [Required] Specifies the action type of the schedule
* **endpointInvocationDefinition**: any (Required): [Required] Defines Schedule action definition details.
<see href="TBD" />


## ScheduleBase
### Properties
* **id**: string: A system assigned id for the schedule.
* **provisioningStatus**: 'Completed' | 'Failed' | 'Provisioning' | string: The current deployment state of schedule.
* **status**: 'Disabled' | 'Enabled' | string: Is the schedule enabled or disabled?

## ScheduleProperties
### Properties
* **action**: [ScheduleActionBase](#scheduleactionbase) (Required): [Required] Specifies the action of the schedule
* **description**: string: The asset description text.
* **displayName**: string: Display name of schedule.
* **isEnabled**: bool: Is the schedule enabled?
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state for the schedule.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.
* **trigger**: [TriggerBase](#triggerbase) (Required): [Required] Specifies the trigger details

## ScriptReference
### Properties
* **scriptArguments**: string: Optional command line arguments passed to the script to run.
* **scriptData**: string: The location of scripts in the mounted volume.
* **scriptSource**: string: The storage source of the script: inline, workspace.
* **timeout**: string: Optional time period passed to timeout command.

## ScriptsToExecute
### Properties
* **creationScript**: [ScriptReference](#scriptreference): Script that's run only once during provision of the compute.
* **startupScript**: [ScriptReference](#scriptreference): Script that's run every time the machine starts.

## Seasonality
* **Discriminator**: mode

### Base Properties

### AutoSeasonality
#### Properties
* **mode**: 'Auto' (Required): [Required] Seasonality mode.

### CustomSeasonality
#### Properties
* **mode**: 'Custom' (Required): [Required] Seasonality mode.
* **value**: int (Required): [Required] Seasonality value.


## SecretExpiry
### Properties
* **expirableSecret**: bool: Indicates if the secret is expirable.
* **expireAfterHours**: int: Number of hours after which the secret will expire.

## ServerlessComputeSettings
### Properties
* **serverlessComputeCustomSubnet**: string: The resource ID of an existing virtual network subnet in which serverless compute nodes should be deployed
* **serverlessComputeNoPublicIP**: bool: The flag to signal if serverless compute nodes deployed in custom vNet would have no public IP addresses for a workspace with private endpoint

## ServerlessEndpointCapacityReservation
### Properties
* **capacityReservationGroupId**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required)
* **endpointReservedCapacity**: int

## ServerlessEndpointContentSafety
### Properties
* **contentSafetyStatus**: 'Disabled' | 'Enabled' | string (Required): Specifies the status of content safety.

## ServerlessEndpointInferenceEndpoint
### Properties
* **headers**: [ServerlessEndpointInferenceEndpointHeaders](#serverlessendpointinferenceendpointheaders) (ReadOnly): Dictionary of <string>
* **uri**: string (Required, ReadOnly)

## ServerlessEndpointInferenceEndpointHeaders
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServerlessEndpointModelSettings
### Properties
* **modelId**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required)

## ServerlessEndpointProperties
### Properties
* **authMode**: 'Key' | string (Required): [Required] Specifies the authentication mode for the Serverless endpoint.
* **contentSafety**: [ContentSafety](#contentsafety): Specifies the content safety options. If omitted, the default content safety settings will be configured
* **endpointState**: 'Creating' | 'CreationFailed' | 'Deleting' | 'DeletionFailed' | 'Online' | 'Reinstating' | 'Suspended' | 'Suspending' | 'Unknown' | string (ReadOnly): The current state of the ServerlessEndpoint.
* **inferenceEndpoint**: [ServerlessInferenceEndpoint](#serverlessinferenceendpoint) (ReadOnly): The inference uri to target when making requests against the serverless endpoint
* **marketplaceSubscriptionId**: string (ReadOnly): The MarketplaceSubscription Azure ID associated to this ServerlessEndpoint.
* **modelSettings**: [ModelSettings](#modelsettings): The model settings (model id) for the model being serviced on the ServerlessEndpoint.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state for the endpoint.

## ServerlessInferenceEndpoint
### Properties
* **headers**: [ServerlessInferenceEndpointHeaders](#serverlessinferenceendpointheaders) (ReadOnly): Specifies any required headers to target this serverless endpoint.
* **uri**: string (Required, ReadOnly): [Required] The inference uri to target when making requests against the Serverless Endpoint.

## ServerlessInferenceEndpointHeaders
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServerlessOffer
### Properties
* **offerName**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required)
* **publisher**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required)

## ServiceManagedResourcesSettings
### Properties
* **cosmosDb**: [CosmosDbSettings](#cosmosdbsettings)

## ServicePrincipalDatastoreSecrets
### Properties
* **clientSecret**: string: Service principal secret.
* **secretsType**: 'AccountKey' | 'Certificate' | 'Sas' | 'ServicePrincipal' | string (Required): [Required] Credential type used to authentication with storage.

## ServiceTagDestination
### Properties
* **action**: 'Allow' | 'Deny' | string: The action enum for networking rule.
* **addressPrefixes**: string[]: Optional, if provided, the ServiceTag property will be ignored.
* **portRanges**: string
* **protocol**: string
* **serviceTag**: string

## SetupScripts
### Properties
* **scripts**: [ScriptsToExecute](#scriptstoexecute): Customized setup scripts

## SharedPrivateLinkResource
### Properties
* **name**: string: Unique name of the private link
* **properties**: [SharedPrivateLinkResourceProperty](#sharedprivatelinkresourceproperty): Properties of a shared private link resource.

## SharedPrivateLinkResourceProperty
### Properties
* **groupId**: string: group id of the private link
* **privateLinkResourceId**: string: the resource id that private link links to
* **requestMessage**: string: Request message
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout' | string: Connection status of the service consumer with the service provider

## Sku
### Properties
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU. Ex - P3. It is typically a letter+number code
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard': This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.

## SparkJobConf
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SparkJobEntry
* **Discriminator**: sparkJobEntryType

### Base Properties

### SparkJobPythonEntry
#### Properties
* **file**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] Relative python file path for job entry point.
* **sparkJobEntryType**: 'SparkJobPythonEntry' (Required): [Required] Type of the job's entry point.

### SparkJobScalaEntry
#### Properties
* **className**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] Scala class name used as entry point.
* **sparkJobEntryType**: 'SparkJobScalaEntry' (Required): [Required] Type of the job's entry point.


## SparkJobEnvironmentVariables
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SparkJobInputs
### Properties
### Additional Properties
* **Additional Properties Type**: [JobInput](#jobinput)

## SparkJobOutputs
### Properties
### Additional Properties
* **Additional Properties Type**: [JobOutput](#joboutput)

## SparkResourceConfiguration
### Properties
* **instanceType**: string: Optional type of VM used as supported by the compute target.
* **runtimeVersion**: string: Version of spark runtime used for the job.

## SslConfiguration
### Properties
* **cert**: string {sensitive}: Cert data
* **cname**: string: CNAME of the cert
* **key**: string {sensitive}: Key data
* **leafDomainLabel**: string: Leaf domain label of public endpoint
* **overwriteExistingDomain**: bool: Indicates whether to overwrite existing domain label.
* **status**: 'Auto' | 'Disabled' | 'Enabled' | string: Enable or disable ssl for scoring

## StackEnsembleSettings
### Properties
* **stackMetaLearnerKWargs**: any: Optional parameters to pass to the initializer of the meta-learner.
* **stackMetaLearnerTrainPercentage**: int: Specifies the proportion of the training set (when choosing train and validation type of training) to be reserved for training the meta-learner. Default value is 0.2.
* **stackMetaLearnerType**: 'ElasticNet' | 'ElasticNetCV' | 'LightGBMClassifier' | 'LightGBMRegressor' | 'LinearRegression' | 'LogisticRegression' | 'LogisticRegressionCV' | 'None' | string: The meta-learner is a model trained on the output of the individual heterogeneous models.

## StorageAccountDetails
### Properties
* **systemCreatedStorageAccount**: [SystemCreatedStorageAccount](#systemcreatedstorageaccount): Details of system created storage account to be used for the registry
* **userCreatedStorageAccount**: [UserCreatedStorageAccount](#usercreatedstorageaccount): Details of user created storage account to be used for the registry

## StringKeyValuePair
### Properties
* **key**: string
* **value**: string

## SweepJobInputs
### Properties
### Additional Properties
* **Additional Properties Type**: [JobInput](#jobinput)

## SweepJobLimits
### Properties
* **jobLimitsType**: 'Command' | 'Sweep' | string (Required): [Required] JobLimit type.
* **maxConcurrentTrials**: int: Sweep Job max concurrent trials.
* **maxTotalTrials**: int: Sweep Job max total trials.
* **timeout**: string: The max run duration in ISO 8601 format, after which the job will be cancelled. Only supports duration with precision as low as Seconds.
* **trialTimeout**: string: Sweep Job Trial timeout value.

## SweepJobOutputs
### Properties
### Additional Properties
* **Additional Properties Type**: [JobOutput](#joboutput)

## SynapseSparkProperties
### Properties
* **autoPauseProperties**: [AutoPauseProperties](#autopauseproperties): Auto pause properties.
* **autoScaleProperties**: [AutoScaleProperties](#autoscaleproperties): Auto scale properties.
* **nodeCount**: int: The number of compute nodes currently assigned to the compute.
* **nodeSize**: string: Node size.
* **nodeSizeFamily**: string: Node size family.
* **poolName**: string: Pool name.
* **resourceGroup**: string: Name of the resource group in which workspace is located.
* **sparkVersion**: string: Spark version.
* **subscriptionId**: string: Azure subscription identifier.
* **workspaceName**: string: Name of Azure Machine Learning workspace.

## SystemCreatedAcrAccount
### Properties
* **acrAccountName**: string: Name of the ACR account
* **acrAccountSku**: string: SKU of the ACR account
* **armResourceId**: [ArmResourceId](#armresourceid): This is populated once the ACR account is created.

## SystemCreatedStorageAccount
### Properties
* **allowBlobPublicAccess**: bool: Public blob access allowed
* **armResourceId**: [ArmResourceId](#armresourceid): This is populated once the storage account is created.
* **storageAccountHnsEnabled**: bool: HNS enabled for storage account
* **storageAccountName**: string: Name of the storage account
* **storageAccountType**: string: Allowed values:
"Standard_LRS",
"Standard_GRS",
"Standard_RAGRS",
"Standard_ZRS",
"Standard_GZRS",
"Standard_RAGZRS",
"Premium_LRS",
"Premium_ZRS"

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## SystemService
### Properties
* **publicIpAddress**: string (ReadOnly): Public IP address
* **systemServiceType**: string (ReadOnly): The type of this system service.
* **version**: string (ReadOnly): The version for this type.

## TableVerticalFeaturizationSettings
### Properties
* **blockedTransformers**: ('CatTargetEncoder' | 'CountVectorizer' | 'HashOneHotEncoder' | 'LabelEncoder' | 'NaiveBayes' | 'OneHotEncoder' | 'TextTargetEncoder' | 'TfIdf' | 'WoETargetEncoder' | 'WordEmbedding' | string)[]: These transformers shall not be used in featurization.
* **columnNameAndTypes**: [TableVerticalFeaturizationSettingsColumnNameAndTypes](#tableverticalfeaturizationsettingscolumnnameandtypes): Dictionary of column name and its type (int, float, string, datetime etc).
* **datasetLanguage**: string: Dataset language, useful for the text data.
* **enableDnnFeaturization**: bool: Determines whether to use Dnn based featurizers for data featurization.
* **mode**: 'Auto' | 'Custom' | 'Off' | string: Featurization mode - User can keep the default 'Auto' mode and AutoML will take care of necessary transformation of the data in featurization phase.
If 'Off' is selected then no featurization is done.
If 'Custom' is selected then user can specify additional inputs to customize how featurization is done.
* **transformerParams**: [TableVerticalFeaturizationSettingsTransformerParams](#tableverticalfeaturizationsettingstransformerparams): User can specify additional transformers to be used along with the columns to which it would be applied and parameters for the transformer constructor.

## TableVerticalFeaturizationSettingsColumnNameAndTypes
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TableVerticalFeaturizationSettingsTransformerParams
### Properties
### Additional Properties
* **Additional Properties Type**: [ColumnTransformer](#columntransformer)[]

## TableVerticalLimitSettings
### Properties
* **enableEarlyTermination**: bool: Enable early termination, determines whether or not if AutoMLJob will terminate early if there is no score improvement in last 20 iterations.
* **exitScore**: int: Exit score for the AutoML job.
* **maxConcurrentTrials**: int: Maximum Concurrent iterations.
* **maxCoresPerTrial**: int: Max cores per iteration.
* **maxTrials**: int: Number of iterations.
* **timeout**: string: AutoML job timeout.
* **trialTimeout**: string: Iteration timeout.

## TargetLags
* **Discriminator**: mode

### Base Properties

### AutoTargetLags
#### Properties
* **mode**: 'Auto' (Required): [Required] Set target lags mode - Auto/Custom

### CustomTargetLags
#### Properties
* **mode**: 'Custom' (Required): [Required] Set target lags mode - Auto/Custom
* **values**: int[] (Required): [Required] Set target lags values.


## TargetRollingWindowSize
* **Discriminator**: mode

### Base Properties

### AutoTargetRollingWindowSize
#### Properties
* **mode**: 'Auto' (Required): [Required] TargetRollingWindowSiz detection mode.

### CustomTargetRollingWindowSize
#### Properties
* **mode**: 'Custom' (Required): [Required] TargetRollingWindowSiz detection mode.
* **value**: int (Required): [Required] TargetRollingWindowSize value.


## TmpfsOptions
### Properties
* **size**: int: Mention the Tmpfs size

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrialComponent
### Properties
* **codeId**: string: ARM resource ID of the code asset.
* **command**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] The command to execute on startup of the job. eg. "python train.py"
* **distribution**: [DistributionConfiguration](#distributionconfiguration): Distribution configuration of the job. If set, this should be one of Mpi, Tensorflow, PyTorch, or null.
* **environmentId**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] The ARM resource ID of the Environment specification for the job.
* **environmentVariables**: [TrialComponentEnvironmentVariables](#trialcomponentenvironmentvariables): Environment variables included in the job.
* **resources**: [JobResourceConfiguration](#jobresourceconfiguration): Compute Resource configuration for the job.

## TrialComponentEnvironmentVariables
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TriggerBase
* **Discriminator**: triggerType

### Base Properties
* **endTime**: string: Specifies end time of schedule in ISO 8601, but without a UTC offset. Refer https://en.wikipedia.org/wiki/ISO_8601.
Recommented format would be "2022-06-01T00:00:01"
If not present, the schedule will run indefinitely
* **startTime**: string: Specifies start time of schedule in ISO 8601 format, but without a UTC offset.
* **timeZone**: string: Specifies time zone in which the schedule runs.
TimeZone should follow Windows time zone format. Refer: https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/default-time-zones?view=windows-11

### CronTrigger
#### Properties
* **expression**: string {minLength: 1, pattern: "[a-zA-Z0-9_]"} (Required): [Required] Specifies cron expression of schedule.
The expression should follow NCronTab format.
* **triggerType**: 'Cron' (Required): [Required]

### RecurrenceTrigger
#### Properties
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'Week' | string (Required): [Required] The frequency to trigger schedule.
* **interval**: int (Required): [Required] Specifies schedule interval in conjunction with frequency
* **schedule**: [RecurrenceSchedule](#recurrenceschedule): The recurrence schedule.
* **triggerType**: 'Recurrence' (Required): [Required]


## UserAccountCredentials
### Properties
* **adminUserName**: string (Required): Name of the administrator user account which can be used to SSH to nodes.
* **adminUserPassword**: string {sensitive}: Password of the administrator user account.
* **adminUserSshPublicKey**: string {sensitive}: SSH public key of the administrator user account.

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## UserCreatedAcrAccount
### Properties
* **armResourceId**: [ArmResourceId](#armresourceid): ARM ResourceId of a resource

## UserCreatedStorageAccount
### Properties
* **armResourceId**: [ArmResourceId](#armresourceid): ARM ResourceId of a resource

## VirtualMachineImage
### Properties
* **id**: string (Required): Virtual Machine image path

## VirtualMachineSchemaProperties
### Properties
* **address**: string: Public IP address of the virtual machine.
* **administratorAccount**: [VirtualMachineSshCredentials](#virtualmachinesshcredentials): Admin credentials for virtual machine
* **isNotebookInstanceCompute**: bool: Indicates whether this compute will be used for running notebooks.
* **notebookServerPort**: int: Notebook server port open for ssh connections.
* **sshPort**: int: Port open for ssh connections.
* **virtualMachineSize**: string: Virtual Machine size

## VirtualMachineSshCredentials
### Properties
* **password**: string: Password of admin account
* **privateKeyData**: string {sensitive}: Private key data
* **publicKeyData**: string {sensitive}: Public key data
* **username**: string: Username of admin account

## VolumeDefinition
### Properties
* **bind**: [BindOptions](#bindoptions): Bind Options of the mount
* **consistency**: string: Consistency of the volume
* **readOnly**: bool: Indicate whether to mount volume as readOnly. Default value for this is false.
* **source**: string: Source of the mount. For bind mounts this is the host path.
* **target**: string: Target of the mount. For bind mounts this is the path in the container.
* **tmpfs**: [TmpfsOptions](#tmpfsoptions): tmpfs option of the mount
* **type**: 'bind' | 'npipe' | 'tmpfs' | 'volume' | string: Type of Volume Definition. Possible Values: bind,volume,tmpfs,npipe
* **volume**: [VolumeOptions](#volumeoptions): Volume Options of the mount

## VolumeOptions
### Properties
* **nocopy**: bool: Indicate whether volume is nocopy

## Webhook
* **Discriminator**: webhookType

### Base Properties
* **eventType**: string: Send callback on a specified notification event

### AzureDevOpsWebhook
#### Properties
* **webhookType**: 'AzureDevOps' (Required): [Required] Specifies the type of service to send a callback


## WorkspaceConnectionAccessKey
### Properties
* **accessKeyId**: string
* **secretAccessKey**: string

## WorkspaceConnectionAccountKey
### Properties
* **key**: string

## WorkspaceConnectionApiKey
### Properties
* **key**: string

## WorkspaceConnectionManagedIdentity
### Properties
* **clientId**: string
* **resourceId**: string

## WorkspaceConnectionOAuth2
### Properties
* **authUrl**: string: Required by Concur connection category
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Client id in the format of UUID
* **clientSecret**: string {sensitive}
* **developerToken**: string {sensitive}: Required by GoogleAdWords connection category
* **password**: string {sensitive}
* **refreshToken**: string {sensitive}: Required by GoogleBigQuery, GoogleAdWords, Hubspot, QuickBooks, Square, Xero, Zoho
where user needs to get RefreshToken offline
* **tenantId**: string: Required by QuickBooks and Xero connection categories
* **username**: string: Concur, ServiceNow auth server AccessToken grant type is 'Password'
which requires UsernamePassword

## WorkspaceConnectionPersonalAccessToken
### Properties
* **pat**: string

## WorkspaceConnectionPropertiesV2
* **Discriminator**: authType

### Base Properties
* **category**: 'ADLSGen2' | 'AIServices' | 'AmazonMws' | 'AmazonRdsForOracle' | 'AmazonRdsForSqlServer' | 'AmazonRedshift' | 'AmazonS3Compatible' | 'ApiKey' | 'AzureBlob' | 'AzureDataExplorer' | 'AzureDatabricksDeltaLake' | 'AzureMariaDb' | 'AzureMySqlDb' | 'AzureOneLake' | 'AzureOpenAI' | 'AzurePostgresDb' | 'AzureSqlDb' | 'AzureSqlMi' | 'AzureSynapseAnalytics' | 'AzureTableStorage' | 'BingLLMSearch' | 'Cassandra' | 'CognitiveSearch' | 'CognitiveService' | 'Concur' | 'ContainerRegistry' | 'CosmosDb' | 'CosmosDbMongoDbApi' | 'Couchbase' | 'CustomKeys' | 'Db2' | 'Drill' | 'Dynamics' | 'DynamicsAx' | 'DynamicsCrm' | 'Elasticsearch' | 'Eloqua' | 'FileServer' | 'FtpServer' | 'GenericContainerRegistry' | 'GenericHttp' | 'GenericRest' | 'Git' | 'GoogleAdWords' | 'GoogleBigQuery' | 'GoogleCloudStorage' | 'Greenplum' | 'Hbase' | 'Hdfs' | 'Hive' | 'Hubspot' | 'Impala' | 'Informix' | 'Jira' | 'Magento' | 'ManagedOnlineEndpoint' | 'MariaDb' | 'Marketo' | 'MicrosoftAccess' | 'MongoDbAtlas' | 'MongoDbV2' | 'MySql' | 'Netezza' | 'ODataRest' | 'Odbc' | 'Office365' | 'OpenAI' | 'Oracle' | 'OracleCloudStorage' | 'OracleServiceCloud' | 'PayPal' | 'Phoenix' | 'Pinecone' | 'PostgreSql' | 'Presto' | 'PythonFeed' | 'QuickBooks' | 'Redis' | 'Responsys' | 'S3' | 'Salesforce' | 'SalesforceMarketingCloud' | 'SalesforceServiceCloud' | 'SapBw' | 'SapCloudForCustomer' | 'SapEcc' | 'SapHana' | 'SapOpenHub' | 'SapTable' | 'Serp' | 'Serverless' | 'ServiceNow' | 'Sftp' | 'SharePointOnlineList' | 'Shopify' | 'Snowflake' | 'Spark' | 'SqlServer' | 'Square' | 'Sybase' | 'Teradata' | 'Vertica' | 'WebTable' | 'Xero' | 'Zoho' | string: Category of the connection
* **createdByWorkspaceArmId**: string (ReadOnly)
* **error**: string
* **expiryTime**: string
* **group**: 'Azure' | 'AzureAI' | 'Database' | 'File' | 'GenericProtocol' | 'NoSQL' | 'ServicesAndApps' | string (ReadOnly): Group based on connection category
* **isSharedToAll**: bool
* **metadata**: [WorkspaceConnectionPropertiesV2Metadata](#workspaceconnectionpropertiesv2metadata): Store user metadata for this connection
* **peRequirement**: 'NotApplicable' | 'NotRequired' | 'Required' | string
* **peStatus**: 'Active' | 'Inactive' | 'NotApplicable' | string
* **sharedUserList**: string[]
* **target**: string
* **useWorkspaceManagedIdentity**: bool

### AADAuthTypeWorkspaceConnectionProperties
#### Properties
* **authType**: 'AAD' (Required): Authentication type of the connection target

### AccessKeyAuthTypeWorkspaceConnectionProperties
#### Properties
* **authType**: 'AccessKey' (Required): Authentication type of the connection target
* **credentials**: [WorkspaceConnectionAccessKey](#workspaceconnectionaccesskey)

### AccountKeyAuthTypeWorkspaceConnectionProperties
#### Properties
* **authType**: 'AccountKey' (Required): Authentication type of the connection target
* **credentials**: [WorkspaceConnectionAccountKey](#workspaceconnectionaccountkey): Account key object for workspace connection credential.

### ApiKeyAuthWorkspaceConnectionProperties
#### Properties
* **authType**: 'ApiKey' (Required): Authentication type of the connection target
* **credentials**: [WorkspaceConnectionApiKey](#workspaceconnectionapikey): Api key object for workspace connection credential.

### CustomKeysWorkspaceConnectionProperties
#### Properties
* **authType**: 'CustomKeys' (Required): Authentication type of the connection target
* **credentials**: [CustomKeys](#customkeys): Custom Keys credential object

### ManagedIdentityAuthTypeWorkspaceConnectionProperties
#### Properties
* **authType**: 'ManagedIdentity' (Required): Authentication type of the connection target
* **credentials**: [WorkspaceConnectionManagedIdentity](#workspaceconnectionmanagedidentity)

### NoneAuthTypeWorkspaceConnectionProperties
#### Properties
* **authType**: 'None' (Required): Authentication type of the connection target

### OAuth2AuthTypeWorkspaceConnectionProperties
#### Properties
* **authType**: 'OAuth2' (Required): Authentication type of the connection target
* **credentials**: [WorkspaceConnectionOAuth2](#workspaceconnectionoauth2): ClientId and ClientSecret are required. Other properties are optional
depending on each OAuth2 provider's implementation.

### PATAuthTypeWorkspaceConnectionProperties
#### Properties
* **authType**: 'PAT' (Required): Authentication type of the connection target
* **credentials**: [WorkspaceConnectionPersonalAccessToken](#workspaceconnectionpersonalaccesstoken)

### SASAuthTypeWorkspaceConnectionProperties
#### Properties
* **authType**: 'SAS' (Required): Authentication type of the connection target
* **credentials**: [WorkspaceConnectionSharedAccessSignature](#workspaceconnectionsharedaccesssignature)

### ServicePrincipalAuthTypeWorkspaceConnectionProperties
#### Properties
* **authType**: 'ServicePrincipal' (Required): Authentication type of the connection target
* **credentials**: [WorkspaceConnectionServicePrincipal](#workspaceconnectionserviceprincipal)

### UsernamePasswordAuthTypeWorkspaceConnectionProperties
#### Properties
* **authType**: 'UsernamePassword' (Required): Authentication type of the connection target
* **credentials**: [WorkspaceConnectionUsernamePassword](#workspaceconnectionusernamepassword)


## WorkspaceConnectionPropertiesV2BasicResource
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [WorkspaceConnectionPropertiesV2](#workspaceconnectionpropertiesv2) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## WorkspaceConnectionPropertiesV2Metadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkspaceConnectionServicePrincipal
### Properties
* **clientId**: string
* **clientSecret**: string {sensitive}
* **tenantId**: string

## WorkspaceConnectionSharedAccessSignature
### Properties
* **sas**: string

## WorkspaceConnectionUsernamePassword
### Properties
* **password**: string
* **securityToken**: string {sensitive}: Optional, required by connections like SalesForce for extra security in addition to UsernamePassword
* **username**: string

## WorkspaceHubConfig
### Properties
* **additionalWorkspaceStorageAccounts**: string[]
* **defaultWorkspaceResourceGroup**: string

## WorkspacePrivateEndpointResource
### Properties
* **id**: string (ReadOnly): e.g. /subscriptions/{networkSubscriptionId}/resourceGroups/{rgName}/providers/Microsoft.Network/privateEndpoints/{privateEndpointName}
* **subnetArmId**: string (ReadOnly): The subnetId that the private endpoint is connected to.

## WorkspaceProperties
### Properties
* **agentsEndpointUri**: string (ReadOnly): The URI of agents endpoint associated with this workspace.
* **allowPublicAccessWhenBehindVnet**: bool: The flag to indicate whether to allow public access when behind VNet.
* **allowRoleAssignmentOnRG**: bool: The flag to indicate whether we will do role assignment for the workspace MSI on resource group level.
* **applicationInsights**: string: ARM id of the application insights associated with this workspace.
* **associatedWorkspaces**: string[]
* **containerRegistries**: string[]
* **containerRegistry**: string: ARM id of the container registry associated with this workspace.
* **description**: string: The description of this workspace.
* **discoveryUrl**: string: Url for the discovery service to identify regional endpoints for machine learning experimentation services
* **enableDataIsolation**: bool
* **enableServiceSideCMKEncryption**: bool
* **enableSimplifiedCmk**: bool: Flag to tell if simplified CMK should be enabled for this workspace.
* **enableSoftwareBillOfMaterials**: bool: Flag to tell if SoftwareBillOfMaterials should be enabled for this workspace.
* **encryption**: [EncryptionProperty](#encryptionproperty)
* **existingWorkspaces**: string[]
* **featureStoreSettings**: [FeatureStoreSettings](#featurestoresettings): Settings for feature store type workspace.
* **friendlyName**: string: The friendly name for this workspace. This name in mutable
* **hbiWorkspace**: bool: The flag to signal HBI data in the workspace and reduce diagnostic data collected by the service
* **hubResourceId**: string
* **imageBuildCompute**: string: The compute name for image build
* **ipAllowlist**: string[]: The list of IPv4  addresses that are allowed to access the workspace.
* **keyVault**: string: ARM id of the key vault associated with this workspace. This cannot be changed once the workspace has been created
* **keyVaults**: string[]
* **managedNetwork**: [ManagedNetworkSettings](#managednetworksettings): Managed Network settings for a machine learning workspace.
* **mlFlowTrackingUri**: string (ReadOnly): The URI associated with this workspace that machine learning flow must point at to set up tracking.
* **networkAcls**: [NetworkAcls](#networkacls): A set of rules governing the network accessibility of the workspace.
* **notebookInfo**: [NotebookResourceInfo](#notebookresourceinfo) (ReadOnly): The notebook info of Azure ML workspace.
* **primaryUserAssignedIdentity**: string: The user assigned identity resource id that represents the workspace identity.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The list of private endpoint connections in the workspace.
* **privateLinkCount**: int (ReadOnly): Count of private connections in the workspace
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): The current deployment state of workspace resource. The provisioningState is to indicate states for resource provisioning.
* **provisionNetworkNow**: bool: Set to trigger the provisioning of the managed VNet with the default Options when creating a Workspace with the managed VNet enabled, or else it does nothing.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Whether requests from Public Network are allowed.
* **serverlessComputeSettings**: [ServerlessComputeSettings](#serverlesscomputesettings): Settings for serverless compute in a workspace
* **serviceManagedResourcesSettings**: [ServiceManagedResourcesSettings](#servicemanagedresourcessettings): The service managed resource settings.
* **serviceProvisionedResourceGroup**: string (ReadOnly): The name of the managed resource group created by workspace RP in customer subscription if the workspace is CMK workspace
* **sharedPrivateLinkResources**: [SharedPrivateLinkResource](#sharedprivatelinkresource)[]: The list of shared private link resources in this workspace.
* **softDeleteRetentionInDays**: int: Retention time in days after workspace get soft deleted.
* **storageAccount**: string: ARM id of the storage account associated with this workspace. This cannot be changed once the workspace has been created
* **storageAccounts**: string[]
* **storageHnsEnabled**: bool (ReadOnly): If the storage associated with the workspace has hierarchical namespace(HNS) enabled.
* **systemDatastoresAuthMode**: 'AccessKey' | 'Identity' | 'UserDelegationSAS' | string: The auth mode used for accessing the system datastores of the workspace.
* **tenantId**: string (ReadOnly): The tenant id associated with this workspace.
* **v1LegacyMode**: bool: Enabling v1_legacy_mode may prevent you from using features provided by the v2 API.
* **workspaceHubConfig**: [WorkspaceHubConfig](#workspacehubconfig): WorkspaceHub's configuration object.
* **workspaceId**: string (ReadOnly): The immutable id associated with this workspace.

## WorkspaceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

