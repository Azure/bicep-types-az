# Microsoft.Mission @ 2025-05-01-preview

## Resource Microsoft.Mission/approvals@2025-05-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ApprovalProperties](#approvalproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Mission/approvals' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Mission/communities@2025-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CommunityProperties](#communityproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Mission/communities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Mission/communities/communityEndpoints@2025-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CommunityEndpointProperties](#communityendpointproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Mission/communities/communityEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Mission/communities/transitHubs@2025-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TransitHubProperties](#transithubproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Mission/communities/transitHubs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Mission/enclaveConnections@2025-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EnclaveConnectionProperties](#enclaveconnectionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Mission/enclaveConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Mission/virtualEnclaves@2025-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualEnclaveProperties](#virtualenclaveproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Mission/virtualEnclaves' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Mission/virtualEnclaves/enclaveEndpoints@2025-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EnclaveEndpointProperties](#enclaveendpointproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Mission/virtualEnclaves/enclaveEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Mission/virtualEnclaves/workloads@2025-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadProperties](#workloadproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Mission/virtualEnclaves/workloads' (ReadOnly, DeployTimeConstant): The resource type

## Function checkAddressSpaceAvailability (Microsoft.Mission/communities@2025-05-01-preview)
* **Resource**: Microsoft.Mission/communities
* **ApiVersion**: 2025-05-01-preview
* **Input**: [CheckAddressSpaceAvailabilityRequest](#checkaddressspaceavailabilityrequest)
* **Output**: [CheckAddressSpaceAvailabilityResponse](#checkaddressspaceavailabilityresponse)

## Function handleApprovalCreation (Microsoft.Mission/communities/communityEndpoints@2025-05-01-preview)
* **Resource**: Microsoft.Mission/communities/communityEndpoints
* **ApiVersion**: 2025-05-01-preview
* **Input**: [ApprovalCallbackRequest](#approvalcallbackrequest)
* **Output**: [ApprovalActionResponse](#approvalactionresponse)

## Function handleApprovalCreation (Microsoft.Mission/enclaveConnections@2025-05-01-preview)
* **Resource**: Microsoft.Mission/enclaveConnections
* **ApiVersion**: 2025-05-01-preview
* **Input**: [ApprovalCallbackRequest](#approvalcallbackrequest)
* **Output**: [ApprovalActionResponse](#approvalactionresponse)

## Function handleApprovalCreation (Microsoft.Mission/virtualEnclaves@2025-05-01-preview)
* **Resource**: Microsoft.Mission/virtualEnclaves
* **ApiVersion**: 2025-05-01-preview
* **Input**: [ApprovalCallbackRequest](#approvalcallbackrequest)
* **Output**: [ApprovalActionResponse](#approvalactionresponse)

## Function handleApprovalCreation (Microsoft.Mission/virtualEnclaves/enclaveEndpoints@2025-05-01-preview)
* **Resource**: Microsoft.Mission/virtualEnclaves/enclaveEndpoints
* **ApiVersion**: 2025-05-01-preview
* **Input**: [ApprovalCallbackRequest](#approvalcallbackrequest)
* **Output**: [ApprovalActionResponse](#approvalactionresponse)

## Function handleApprovalDeletion (Microsoft.Mission/communities/communityEndpoints@2025-05-01-preview)
* **Resource**: Microsoft.Mission/communities/communityEndpoints
* **ApiVersion**: 2025-05-01-preview
* **Input**: [ApprovalDeletionCallbackRequest](#approvaldeletioncallbackrequest)
* **Output**: [ApprovalActionResponse](#approvalactionresponse)

## Function handleApprovalDeletion (Microsoft.Mission/enclaveConnections@2025-05-01-preview)
* **Resource**: Microsoft.Mission/enclaveConnections
* **ApiVersion**: 2025-05-01-preview
* **Input**: [ApprovalDeletionCallbackRequest](#approvaldeletioncallbackrequest)
* **Output**: [ApprovalActionResponse](#approvalactionresponse)

## Function handleApprovalDeletion (Microsoft.Mission/virtualEnclaves@2025-05-01-preview)
* **Resource**: Microsoft.Mission/virtualEnclaves
* **ApiVersion**: 2025-05-01-preview
* **Input**: [ApprovalDeletionCallbackRequest](#approvaldeletioncallbackrequest)
* **Output**: [ApprovalActionResponse](#approvalactionresponse)

## Function handleApprovalDeletion (Microsoft.Mission/virtualEnclaves/enclaveEndpoints@2025-05-01-preview)
* **Resource**: Microsoft.Mission/virtualEnclaves/enclaveEndpoints
* **ApiVersion**: 2025-05-01-preview
* **Input**: [ApprovalDeletionCallbackRequest](#approvaldeletioncallbackrequest)
* **Output**: [ApprovalActionResponse](#approvalactionresponse)

## Function notifyInitiator (Microsoft.Mission/approvals@2025-05-01-preview)
* **Resource**: Microsoft.Mission/approvals
* **ApiVersion**: 2025-05-01-preview
* **Input**: [ApprovalActionRequest](#approvalactionrequest)
* **Output**: [ApprovalActionResponse](#approvalactionresponse)

## ApprovalActionRequest
### Properties
* **approvalStatus**: 'Approved' | 'Rejected' | string (Required): Approval status indicating 'Approved' or 'Rejected'

## ApprovalActionResponse
### Properties
* **message**: string (Required): Confirmation message indicating the result of the operation.

## ApprovalCallbackRequest
### Properties
* **approvalCallbackPayload**: string: Payload requested by client upon approval action
* **approvalStatus**: 'Approved' | 'Rejected' | string (Required): Approval status indicating 'Approved' or 'Rejected'
* **resourceRequestAction**: 'Create' | 'Delete' | 'Reset' | 'Update' | string (Required): Resource request action indicating action which needed to be performed upon calling approval-callback post action

## ApprovalDeletionCallbackRequest
### Properties
* **resourceRequestAction**: 'Create' | 'Delete' | 'Update' | string (Required): Resource request action indicating action which needed to be performed upon calling approval-deletion-callback post action

## ApprovalProperties
### Properties
* **approvers**: [Approver](#approver)[]: List of approvers for the approval request
* **createdAt**: string: Approval request creation time
* **grandparentResourceId**: string: Parameter for optimizing query results
* **parentResourceId**: string: Parameter for optimizing query results
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State.
* **requestMetadata**: [RequestMetadata](#requestmetadata) (Required): Request metadata for the approval request.
* **stateChangedAt**: string: Approval request state change time, time at which approval request state changed from pending to approved or rejected.
* **ticketId**: string: Ticket ID for the approval request

## ApprovalSettings
### Properties
* **connectionCreation**: 'NotRequired' | 'Required' | string: Approval required for enclave connection creation (Required or NotRequired).
* **connectionDeletion**: 'NotRequired' | 'Required' | string: Approval required for enclave connection deletion (Required or NotRequired).
* **connectionUpdate**: 'NotRequired' | 'Required' | string: Approval required for enclave connection update (Required or NotRequired).
* **enclaveCreation**: 'NotRequired' | 'Required' | string: Approval required for virtual enclave creation (Required or NotRequired).
* **enclaveDeletion**: 'NotRequired' | 'Required' | string: Approval required for virtual enclave deletion (Required or NotRequired).
* **endpointCreation**: 'NotRequired' | 'Required' | string: Approval required for endpoint creation (Required or NotRequired).
* **endpointDeletion**: 'NotRequired' | 'Required' | string: Approval required for endpoint deletion (Required or NotRequired).
* **endpointUpdate**: 'NotRequired' | 'Required' | string: Approval required for endpoint update (Required or NotRequired).
* **maintenanceMode**: 'NotRequired' | 'Required' | string: Approval required for toggling maintenance mode (Required or NotRequired).
* **mandatoryApprovers**: [MandatoryApprover](#mandatoryapprover)[]: List of mandatory approvers for the approval request
* **minimumApproversRequired**: int: Minimum number of approvers required for the approval request
* **notificationOnApprovalAction**: 'NotRequired' | 'Required' | string: Notification will be sent on any action taken (Approve/Reject) on an Approval Request
* **notificationOnApprovalCreation**: 'NotRequired' | 'Required' | string: Notification will be sent on creation of an Approval Request
* **notificationOnApprovalDeletion**: 'NotRequired' | 'Required' | string: Notification will be sent on deletion of an Approval Request
* **serviceCatalogDeployment**: 'NotRequired' | 'Required' | string: Approval required for deploying service catalog templates (Required or NotRequired).

## Approver
### Properties
* **actionPerformed**: 'Approved' | 'Rejected' | string: Action Performed by approver
* **approverEntraId**: string (Required): Entra ObjectID of the approver
* **lastUpdatedAt**: string (Required): approval request last updated at

## CheckAddressSpaceAvailabilityRequest
### Properties
* **communityResourceId**: string (Required): Resource Id of the Community
* **enclaveVirtualNetwork**: [EnclaveVirtualNetworkModel](#enclavevirtualnetworkmodel) (Required): Information about the enclave virtual network

## CheckAddressSpaceAvailabilityResponse
### Properties
* **value**: bool (Required): Boolean representing whether the address space is available.

## CommunityEndpointDestinationRule
### Properties
* **destination**: string: Destination address. Can include multiple CIDR/IP Addresses or fqdn tags or fqdns (for community endpoint) separated by commas.
* **destinationType**: 'FQDN' | 'FQDNTag' | 'IPAddress' | 'PrivateNetwork' | string: Destination Type.
* **endpointRuleName**: string: Endpoint Rule Name.
* **ports**: string: Port. Can include multiple ports separated by commas or a range indicated by a hyphen.
* **protocols**: ('AH' | 'ANY' | 'ESP' | 'HTTP' | 'HTTPS' | 'ICMP' | 'TCP' | 'UDP' | string)[]: Protocols. Options specified by Endpoint Protocol Enum.
* **transitHubResourceId**: string: Transit Hub Resource Id.

## CommunityEndpointProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State.
* **resourceCollection**: string[] (ReadOnly): List of resource ids created by community endpoint.
* **ruleCollection**: [CommunityEndpointDestinationRule](#communityendpointdestinationrule)[] (Required): Community Endpoint Rule Collection.

## CommunityProperties
### Properties
* **addressSpace**: string: Address Space.
* **approvalSettings**: [ApprovalSettings](#approvalsettings): Approval requirements for various actions on the community's resources.
* **communityRoleAssignments**: [RoleAssignmentItem](#roleassignmentitem)[]: Community role assignments
* **dnsServers**: string[]: DNS Servers.
* **firewallSku**: 'Basic' | 'Premium' | 'Standard' | string: SKU of the community's Azure Firewall (Basic, Standard, Premium). Standard is the default
* **governedServiceList**: [GovernedServiceItem](#governedserviceitem)[]: List of services governed by a community.
* **maintenanceModeConfiguration**: [MaintenanceModeConfigurationModel](#maintenancemodeconfigurationmodel): Maintenance Mode configuration.
* **managedOnBehalfOfConfiguration**: [ManagedOnBehalfOfConfiguration](#managedonbehalfofconfiguration) (ReadOnly): Managed On Behalf Of Configuration.
* **managedResourceGroupName**: string (ReadOnly): Managed resource group name.
* **policyOverride**: 'Enclave' | 'None' | string: Policy override setting for the community. Specifies whether to apply enclave-specific policies or disable policy enforcement.
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
* **endpointRuleName**: string: Endpoint Rule Name.
* **ports**: string: Port. Can include multiple ports separated by commas or a range indicated by a hyphen.
* **protocols**: ('AH' | 'ANY' | 'ESP' | 'ICMP' | 'TCP' | 'UDP' | string)[]: Protocols. Options specified by Endpoint Protocol Enum.

## EnclaveEndpointProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State.
* **resourceCollection**: string[] (ReadOnly): List of resource ids created by community endpoint.
* **ruleCollection**: [EnclaveEndpointDestinationRule](#enclaveendpointdestinationrule)[] (Required): Enclave Endpoint Rule Collection.

## EnclaveVirtualNetworkModel
### Properties
* **allowSubnetCommunication**: bool: Allow Subnet Communication.
* **customCidrRange**: string: Custom CIDR Range.
* **networkName**: string: Network Name.
* **networkSize**: string: Network Size.
* **subnetConfigurations**: [SubnetConfiguration](#subnetconfiguration)[]: Subnet Configurations.

## GovernedServiceItem
### Properties
* **enforcement**: 'Disabled' | 'Enabled' | string: Initiative enforcement (Enabled or Disabled).
* **initiatives**: string[] (ReadOnly): Initiatives associated with this service.
* **option**: 'Allow' | 'Deny' | 'ExceptionOnly' | 'NotApplicable' | string: Governance option for this service (Allow, Deny, ExceptionOnly, or NotApplicable).
* **policyAction**: 'AuditOnly' | 'Enforce' | 'None' | string: Enforcement mode for policy. AuditOnly, Enforce, or None.
* **serviceId**: 'AKS' | 'AppService' | 'AzureFirewalls' | 'ContainerRegistry' | 'CosmosDB' | 'DataConnectors' | 'Insights' | 'KeyVault' | 'Logic' | 'MicrosoftSQL' | 'Monitoring' | 'PostgreSQL' | 'PrivateDNSZones' | 'ServiceBus' | 'Storage' | string (Required): Service ID
* **serviceName**: string (ReadOnly): Service name.

## MaintenanceModeConfigurationModel
### Properties
* **justification**: 'Governance' | 'Networking' | 'Off' | string: Justification for entering or exiting Maintenance Mode
* **mode**: 'Advanced' | 'CanNotDelete' | 'General' | 'Off' | 'On' | string (Required): Current mode of Maintenance Mode Configuration
* **principals**: [Principal](#principal)[]: The user, group or service principal object affected by Maintenance Mode

## ManagedOnBehalfOfConfiguration
### Properties
* **moboBrokerResources**: [MoboBrokerResource](#mobobrokerresource)[]: Managed-On-Behalf-Of broker resources

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## MandatoryApprover
### Properties
* **approverEntraId**: string (Required): EntraId of the approver

## MoboBrokerResource
### Properties
* **id**: string: Resource identifier of a Managed-On-Behalf-Of broker resource

## Principal
### Properties
* **id**: string (Required): The object id associated with the principal
* **type**: 'Group' | 'ServicePrincipal' | 'User' | string (Required): The type of the object id. We currently allow users, groups, and service principals

## RequestMetadata
### Properties
* **approvalCallbackPayload**: string: Payload to be sent upon any action on approval request
* **approvalCallbackRoute**: string: Route name for the approval callback
* **approvalStatus**: 'Approved' | 'Deleted' | 'Expired' | 'Pending' | 'Rejected' | string: Status of the approval. Uses ApprovalStatus enum.
* **resourceAction**: string (Required): Resource Action of the item being approved or declined.

## RoleAssignmentItem
### Properties
* **principals**: [Principal](#principal)[]: List of principal IDs to which to assign this role definition
* **roleDefinitionId**: string (Required): Role definition identifier

## SubnetConfiguration
### Properties
* **addressPrefix**: string (ReadOnly): Address prefix.
* **networkPrefixSize**: int (Required): Network prefix size.
* **networkSecurityGroupResourceId**: string (ReadOnly): Network security group ID.
* **subnetDelegation**: string: Subnet delegation.
* **subnetName**: string (Required): Subnet name.
* **subnetResourceId**: string (ReadOnly): Subnet Resource ID.

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
* **enclaveRoleAssignments**: [RoleAssignmentItem](#roleassignmentitem)[]: Enclave role assignments
* **enclaveVirtualNetwork**: [EnclaveVirtualNetworkModel](#enclavevirtualnetworkmodel) (Required): Virtual Network.
* **governedServiceList**: [GovernedServiceItem](#governedserviceitem)[]: Enclave specific policies
* **maintenanceModeConfiguration**: [MaintenanceModeConfigurationModel](#maintenancemodeconfigurationmodel): Maintenance Mode configuration.
* **managedOnBehalfOfConfiguration**: [ManagedOnBehalfOfConfiguration](#managedonbehalfofconfiguration) (ReadOnly): Managed On Behalf Of Configuration.
* **managedResourceGroupName**: string (ReadOnly): Managed resource group name.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State.
* **resourceCollection**: string[] (ReadOnly): List of resource ids created by Virtual Enclave.
* **workloadRoleAssignments**: [RoleAssignmentItem](#roleassignmentitem)[]: Workload role assignments

## WorkloadProperties
### Properties
* **managedOnBehalfOfConfiguration**: [ManagedOnBehalfOfConfiguration](#managedonbehalfofconfiguration) (ReadOnly): Managed On Behalf Of Configuration.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State.
* **resourceGroupCollection**: string[]: List of resource group ids.

