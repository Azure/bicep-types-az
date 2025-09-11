# Microsoft.Mission @ 2024-06-01-preview

## Resource Microsoft.Mission/approvals@2024-06-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ApprovalProperties](#approvalproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Mission/approvals' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Mission/communities@2024-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CommunityProperties](#communityproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Mission/communities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Mission/communities/communityEndpoints@2024-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CommunityEndpointProperties](#communityendpointproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Mission/communities/communityEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Mission/communities/transitHubs@2024-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TransitHubProperties](#transithubproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Mission/communities/transitHubs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Mission/enclaveConnections@2024-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EnclaveConnectionProperties](#enclaveconnectionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Mission/enclaveConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Mission/virtualEnclaves@2024-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualEnclaveProperties](#virtualenclaveproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Mission/virtualEnclaves' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Mission/virtualEnclaves/enclaveEndpoints@2024-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EnclaveEndpointProperties](#enclaveendpointproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Mission/virtualEnclaves/enclaveEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Mission/virtualEnclaves/workloads@2024-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadProperties](#workloadproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Mission/virtualEnclaves/workloads' (ReadOnly, DeployTimeConstant): The resource type

## ApprovalProperties
### Properties
* **parent1**: string: Parameter for optimizing query results
* **parent2**: string: Parameter for optimizing query results
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State.
* **requestMetadata**: [RequestMetadata](#requestmetadata) (Required): Request metadata for the approval request.

## CommunityEndpointDestinationRule
### Properties
* **destination**: string: Destination address. Can include multiple CIDR/IP Addresses or fqdn tags or fqdns (for community endpoint) separated by commas.
* **destinationType**: 'FQDN' | 'FQDNTag' | 'IPAddress' | 'PrivateNetwork' | string: Destination Type.
* **name**: string: Endpoint Rule Name.
* **port**: string: Port. Can include multiple ports separated by commas or a range indicated by a hyphen.
* **protocols**: ('AH' | 'ANY' | 'ESP' | 'HTTP' | 'HTTPS' | 'ICMP' | 'TCP' | 'UDP' | string)[]: Protocols. Options specified by Endpoint Protocol Enum.
* **transitHubResourceId**: string: Transit Hub Resource Id.

## CommunityEndpointProperties
### Properties
* **approvalRequired**: bool: Whether approval is needed for the connection (True or False).
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State.
* **resourceCollection**: string[] (ReadOnly): List of resource ids created by community endpoint.
* **ruleCollection**: [CommunityEndpointDestinationRule](#communityendpointdestinationrule)[] (Required): Community Endpoint Rule Collection.

## CommunityProperties
### Properties
* **addressSpace**: string: Address Space.
* **dnsServers**: string[]: DNS Servers.
* **governedServiceList**: [GovernedServiceItem](#governedserviceitem)[]: List of services governed by a community.
* **managedResourceGroupConfiguration**: [ManagedResourceGroupConfiguration](#managedresourcegroupconfiguration) (ReadOnly): Managed resource group name.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State.
* **resourceCollection**: string[] (ReadOnly): List of resource ids created by communities.

## EnclaveAddressSpacesModel
### Properties
* **enclaveAddressSpace**: string: Enclave Address Space
* **managedAddressSpace**: string: Managed Address Space

## EnclaveConnectionProperties
### Properties
* **communityResourceId**: string (Required): Community Resource Id.
* **destinationEndpointId**: string (Required): Destination Endpoint Resource Id.
* **ipGroup**: string: Source IP group Resource Id.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State.
* **resourceCollection**: string[] (ReadOnly): List of resource ids modified by enclave Connections.
* **sourceCidr**: string: Source CIDR.
* **sourceResourceId**: string (Required): Source Resource Id.
* **state**: 'Active' | 'Approved' | 'Connected' | 'Disconnected' | 'Failed' | 'PendingApproval' | 'PendingUpdate' | string (ReadOnly): The state of the enclaveConnection.

## EnclaveDefaultSettingsModel
### Properties
* **diagnosticDestination**: 'Both' | 'CommunityOnly' | 'EnclaveOnly' | string: Diagnostic Destination.
* **keyVaultResourceId**: string (ReadOnly): Key Vault Resource Id.
* **logAnalyticsResourceIdCollection**: string[] (ReadOnly): Log Analytics Resource Ids.
* **storageAccountResourceId**: string (ReadOnly): Storage Account Resource Id.

## EnclaveEndpointDestinationRule
### Properties
* **destination**: string: Destination address. Can include multiple CIDR/IP Addresses or fqdn tags or fqdns (for community endpoint) separated by commas.
* **name**: string: Endpoint Rule Name.
* **port**: string: Port. Can include multiple ports separated by commas or a range indicated by a hyphen.
* **protocols**: ('AH' | 'ANY' | 'ESP' | 'ICMP' | 'TCP' | 'UDP' | string)[]: Protocols. Options specified by Endpoint Protocol Enum.

## EnclaveEndpointProperties
### Properties
* **approvalRequired**: bool: Whether approval is needed for the connection (True or False).
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State.
* **resourceCollection**: string[] (ReadOnly): List of resource ids created by community endpoint.
* **ruleCollection**: [EnclaveEndpointDestinationRule](#enclaveendpointdestinationrule)[] (Required): Enclave Endpoint Rule Collection.

## EnclaveVirtualNetworkModel
### Properties
* **allowSubnetCommunication**: bool: Allow Subnet Communication.
* **connectToAzureServices**: bool: Connect to Azure Services (True or False).
* **customCidrRange**: string: Custom CIDR Range.
* **name**: string: Network Name.
* **networkSize**: string: Network Size.
* **subnetConfigurations**: [SubnetConfiguration](#subnetconfiguration)[]: Subnet Configurations.

## GovernedServiceItem
### Properties
* **auditOnly**: bool: Policies set to auditOnly (True or False).
* **enforcement**: 'Disabled' | 'Enabled' | string: Initiative enforcement (Enabled or Disabled).
* **id**: 'AKS' | 'AppService' | 'AzureFirewalls' | 'ContainerRegistry' | 'CosmosDB' | 'DataConnectors' | 'Insights' | 'KeyVault' | 'Logic' | 'MicrosoftSQL' | 'Monitoring' | 'PostgreSQL' | 'PrivateDNSZones' | 'ServiceBus' | 'Storage' | string (Required): Service ID
* **initiatives**: string[] (ReadOnly): Initiatives associated with this service.
* **name**: string (ReadOnly): Service name.
* **option**: 'Allow' | 'Deny' | 'ExceptionOnly' | 'NotApplicable' | string: Governance option for this service (Allow, Deny, ExceptionOnly, or NotApplicable).

## MaintenanceModeConfigurationModel
### Properties
* **justification**: 'Governance' | 'Networking' | 'Off' | string: Justification for entering or exiting Maintenance Mode
* **mode**: 'Advanced' | 'CanNotDelete' | 'General' | 'Off' | 'On' | string (Required): Current mode of Maintenance Mode Configuration
* **principals**: [Principal](#principal)[]: The user, group or service principal object affected by Maintenance Mode

## ManagedResourceGroupConfiguration
### Properties
* **location**: string: The geo-location where the resource lives
* **name**: string: Name of managed resource group

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## Principal
### Properties
* **id**: string (Required): The object id associated with the principal
* **type**: 'Group' | 'ServicePrincipal' | 'User' | string (Required): The type of the object id. We currently allow users, groups, and service principals

## RequestMetadata
### Properties
* **approvalStatus**: 'Approved' | 'Pending' | 'Rejected' | string: Status of the approval. Uses ApprovalStatus enum.
* **resourceAction**: string (Required): Resource Action of the item being approved or declined.

## SubnetConfiguration
### Properties
* **addressPrefix**: string (ReadOnly): Address prefix.
* **id**: string (ReadOnly): Subnet Resource ID.
* **name**: string (Required): Subnet name.
* **networkPrefixSize**: int (Required): Network prefix size.
* **networkSecurityGroupId**: string (ReadOnly): Network security group ID.
* **subnetDelegation**: string: Subnet delegation.

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

## TransitHubProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **resourceCollection**: string[] (ReadOnly): List of resource ids modified by transitHubs.
* **state**: 'Active' | 'Approved' | 'Failed' | 'PendingApproval' | 'PendingUpdate' | string: The state of the transitHub.
* **transitOption**: [TransitOption](#transitoption): The TransitOption of the transitHub.

## TransitOption
### Properties
* **params**: [TransitOptionParams](#transitoptionparams): Transit Option Params
* **type**: 'ExpressRoute' | 'Gateway' | 'Peering' | string: Transit Option Type.

## TransitOptionParams
### Properties
* **remoteVirtualNetworkId**: string: Transit Option Params remoteVirtualNetworkId.
* **scaleUnits**: int: Transit Option Params scaleUnits.

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## VirtualEnclaveProperties
### Properties
* **bastionEnabled**: bool: Deploy Bastion service (True or False).
* **communityResourceId**: string (Required): Community Resource Id.
* **enclaveAddressSpaces**: [EnclaveAddressSpacesModel](#enclaveaddressspacesmodel) (ReadOnly): Enclave Address Spaces
* **enclaveDefaultSettings**: [EnclaveDefaultSettingsModel](#enclavedefaultsettingsmodel): Enclave default settings.
* **enclaveVirtualNetwork**: [EnclaveVirtualNetworkModel](#enclavevirtualnetworkmodel) (Required): Virtual Network.
* **maintenanceModeConfiguration**: [MaintenanceModeConfigurationModel](#maintenancemodeconfigurationmodel): Maintenance Mode configuration.
* **managedResourceGroupConfiguration**: [ManagedResourceGroupConfiguration](#managedresourcegroupconfiguration) (ReadOnly): Managed resource group name.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State.
* **resourceCollection**: string[] (ReadOnly): List of resource ids created by Virtual Enclave.

## WorkloadProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State.
* **resourceGroupCollection**: string[]: List of resource group ids.

