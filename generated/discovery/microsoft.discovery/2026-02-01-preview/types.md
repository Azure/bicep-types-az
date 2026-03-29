# Microsoft.Discovery @ 2026-02-01-preview

## Resource Microsoft.Discovery/bookshelves@2026-02-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BookshelfProperties](#bookshelfproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Discovery/bookshelves' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Discovery/bookshelves/privateEndpointConnections@2026-02-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Discovery/bookshelves/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Discovery/bookshelves/privateLinkResources@2026-02-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Discovery/bookshelves/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Discovery/storageContainers@2026-02-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [StorageContainerProperties](#storagecontainerproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Discovery/storageContainers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Discovery/storageContainers/storageAssets@2026-02-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [StorageAssetProperties](#storageassetproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Discovery/storageContainers/storageAssets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Discovery/supercomputers@2026-02-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SupercomputerProperties](#supercomputerproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Discovery/supercomputers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Discovery/supercomputers/nodePools@2026-02-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NodePoolProperties](#nodepoolproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Discovery/supercomputers/nodePools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Discovery/tools@2026-02-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ToolProperties](#toolproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Discovery/tools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Discovery/workspaces@2026-02-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Discovery/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Discovery/workspaces/chatModelDeployments@2026-02-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ChatModelDeploymentProperties](#chatmodeldeploymentproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Discovery/workspaces/chatModelDeployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Discovery/workspaces/privateEndpointConnections@2026-02-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Discovery/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Discovery/workspaces/privateLinkResources@2026-02-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Discovery/workspaces/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Discovery/workspaces/projects@2026-02-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectProperties](#projectproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Discovery/workspaces/projects' (ReadOnly, DeployTimeConstant): The resource type

## BookshelfKeyVaultProperties
### Properties
* **identityClientId**: string (Required): The client ID of the identity to use for accessing the Key Vault. Must be a workload identity assigned to the Bookshelf resource.
* **keyName**: string (Required): The Key Name in Key Vault
* **keyVaultUri**: string (Required): The Key Vault URI
* **keyVersion**: string: The Key Version in Key Vault

## BookshelfProperties
### Properties
* **bookshelfUri**: string (ReadOnly): The bookshelf data plane API URI
* **customerManagedKeys**: 'Disabled' | 'Enabled' | string: Whether or not to use a customer managed key when encrypting data at rest
* **keyVaultProperties**: [BookshelfKeyVaultProperties](#bookshelfkeyvaultproperties): The key to use for encrypting data at rest when customer managed keys are enabled. Required if Customer Managed Keys is enabled.
* **logAnalyticsClusterId**: string: The Log Analytics Cluster to use for debug logs. This is required when Customer Managed Keys are enabled.
* **managedOnBehalfOfConfiguration**: [WithMoboBrokerResources](#withmobobrokerresources) (ReadOnly): Managed-On-Behalf-Of configuration properties. This configuration exists for the resources where a resource provider manages those resources on behalf of the resource owner.
* **managedResourceGroup**: string (ReadOnly): The resource group for resources managed on behalf of customer.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connections.
* **privateEndpointSubnetId**: string: Private Endpoint Subnet ID for private endpoint connections.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Whether or not public network access is allowed for this resource. For security reasons, it is recommended to disable it whenever possible.
* **searchSubnetId**: string: Search Subnet ID for search resources.
* **workloadIdentities**: [BookshelfPropertiesWorkloadIdentities](#bookshelfpropertiesworkloadidentities): User assigned identity IDs to be used by knowledgebase workloads. The key value must be the resource ID of the identity resource.

## BookshelfPropertiesWorkloadIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## ChatModelDeploymentProperties
### Properties
* **modelFormat**: string (Required): Model format as published by the provider. Verify supported formats per region using the Model Catalog API.
* **modelName**: string (Required): Canonical provider model name available in the selected region. Verify supported values per region using the Model Catalog API.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

## Identity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **id**: string (Required): The resource ID of the user assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## KeyVaultProperties
### Properties
* **keyName**: string (Required): The Key Name in Key Vault
* **keyVaultUri**: string (Required): The Key Vault URI
* **keyVersion**: string: The Key Version in Key Vault

## MoboBrokerResource
### Properties
* **id**: string: Resource identifier of a Managed-On-Behalf-Of broker resource

## NodePoolProperties
### Properties
* **maxNodeCount**: int {minValue: 1} (Required): The maximum number of nodes.
* **minNodeCount**: int {minValue: 0}: The minimum number of nodes.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **scaleSetPriority**: 'Regular' | 'Spot' | string: The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
* **subnetId**: string (Required): The node pool subnet.
* **vmSize**: 'Standard_NC16as_T4_v3' | 'Standard_NC24ads_A100_v4' | 'Standard_NC48ads_A100_v4' | 'Standard_NC4as_T4_v3' | 'Standard_NC64as_T4_v3' | 'Standard_NC8as_T4_v3' | 'Standard_NC96ads_A100_v4' | 'Standard_ND40rs_v2' | 'Standard_NV12ads_A10_v5' | 'Standard_NV24ads_A10_v5' | 'Standard_NV36adms_A10_v5' | 'Standard_NV36ads_A10_v5' | 'Standard_NV6ads_A10_v5' | 'Standard_NV72ads_A10_v5' | string (Required): The size of the underlying Azure VM.

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
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.
* **requiredZoneNames**: string[]: The private link resource private link DNS zone name.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## ProjectProperties
### Properties
* **foundryProjectEndpoint**: string (ReadOnly): Foundry project endpoint URI.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **settings**: [ProjectSettings](#projectsettings): Settings for the project.
* **storageContainerIds**: string[]: Allowed StorageContainers (Control plane resource references).

## ProjectSettings
### Properties
* **behaviorPreferences**: string {maxLength: 5000}: Default preferences to guide AI behaviors in this project.

## StorageAssetProperties
### Properties
* **description**: string (Required): The description
* **path**: string: The path to the data within its parent container. This should be relative to the root of the parent container.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

## StorageContainerProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **storageStore**: [StorageStore](#storagestore) (Required): Storage store properties

## StorageStore
* **Discriminator**: kind

### Base Properties

### AzureNetAppFilesStore
#### Properties
* **kind**: 'AzureNetAppFiles' (Required): The storage store kind.
* **netAppVolumeId**: string (Required): The associated Azure NetApp Files volume ID.

### AzureStorageBlobStore
#### Properties
* **kind**: 'AzureStorageBlob' (Required): The storage store kind.
* **storageAccountId**: string (Required): The associated Azure Storage Account ID.


## SupercomputerIdentities
### Properties
* **clusterIdentity**: [Identity](#identity) (Required): Cluster identity ID.
* **kubeletIdentity**: [Identity](#identity) (Required): Kubelet identity ID used by the supercomputer.
      This identity is used by the supercomputer at node level to access Azure resources.
      This identity must have ManagedIdentityOperator role on the clusterIdentity.
* **workloadIdentities**: [SupercomputerIdentitiesWorkloadIdentities](#supercomputeridentitiesworkloadidentities): User assigned identity IDs to be used by workloads as federated credentials running on supercomputer. The key value must be the resource ID of the identity resource.

## SupercomputerIdentitiesWorkloadIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## SupercomputerProperties
### Properties
* **customerManagedKeys**: 'Disabled' | 'Enabled' | string: Whether or not to use a customer managed key when encrypting data at rest
* **diskEncryptionSetId**: string: Disk Encryption Set ID to use for Customer Managed Keys encryption. Required if Customer Managed Keys is enabled.
* **identities**: [SupercomputerIdentities](#supercomputeridentities) (Required): Dictionary of identity properties.
* **logAnalyticsClusterId**: string: The Log Analytics Cluster to use for debug logs. This is required when Customer Managed Keys are enabled.
* **managedOnBehalfOfConfiguration**: [WithMoboBrokerResources](#withmobobrokerresources) (ReadOnly): Managed-On-Behalf-Of configuration properties. This configuration exists for the resources where a resource provider manages those resources on behalf of the resource owner.
* **managedResourceGroup**: string (ReadOnly): The resource group for resources managed on behalf of customer.
* **managementSubnetId**: string: System Subnet ID associated with AKS apiserver. Must be delegated to Microsoft.ContainerService/managedClusters.
    It should have connectivity to the system subnet and nodepool subnets.
* **outboundType**: 'LoadBalancer' | 'None' | string: Network egress type provisioned for the supercomputer workloads.
    Defaults to LoadBalancer if not specified.
    If None is specified, the customer is responsible for providing outbound connectivity for Supercomputer functionality.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **subnetId**: string (Required): System Subnet ID associated with managed NodePool for system resources.
    It should have connectivity to the child NodePool subnets.
* **systemSku**: 'Standard_D4s_v4' | 'Standard_D4s_v5' | 'Standard_D4s_v6' | string: The SKU to use for the system node pool.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## ToolProperties
### Properties
* **definitionContent**: [ToolPropertiesDefinitionContent](#toolpropertiesdefinitioncontent) (Required): The JSON content for defining a resource
* **environmentVariables**: [ToolPropertiesEnvironmentVariables](#toolpropertiesenvironmentvariables): Environment variables to make available
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **version**: string (Required): The version of a resource definition

## ToolPropertiesDefinitionContent
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ToolPropertiesEnvironmentVariables
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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## WithMoboBrokerResources
### Properties
* **moboBrokerResources**: [MoboBrokerResource](#mobobrokerresource)[] (ReadOnly): Managed-On-Behalf-Of broker resources

## WorkspaceProperties
### Properties
* **agentSubnetId**: string: Agent Subnet ID for agent resources.
* **customerManagedKeys**: 'Disabled' | 'Enabled' | string: Whether or not to use a customer managed key when encrypting data at rest
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): The key to use for encrypting data at rest when customer managed keys are enabled.
* **logAnalyticsClusterId**: string: The Log Analytics Cluster to use for debug logs. This is required when Customer Managed Keys are enabled.
* **managedOnBehalfOfConfiguration**: [WithMoboBrokerResources](#withmobobrokerresources) (ReadOnly): Managed-On-Behalf-Of configuration properties. This configuration exists for the resources where a resource provider manages those resources on behalf of the resource owner.
* **managedResourceGroup**: string (ReadOnly): The resource group for resources managed on behalf of customer.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connections.
* **privateEndpointSubnetId**: string: Private Endpoint Subnet ID for private endpoint connections.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Whether or not public network access is allowed for this resource. For security reasons, it is recommended to disable it whenever possible.
* **supercomputerIds**: string[]: List of linked SuperComputers.
* **workspaceApiUri**: string (ReadOnly): workspace API endpoint Uri.
* **workspaceIdentity**: [Identity](#identity) (Required): Identity IDs used for leveraging Workspace resources.
* **workspaceSubnetId**: string: Function Subnet ID for workspace resources.
* **workspaceUiUri**: string (ReadOnly): workspace User Interface Uri.

