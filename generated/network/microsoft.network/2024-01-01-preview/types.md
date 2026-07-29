# Microsoft.Network @ 2024-01-01-preview

## Resource Microsoft.Network/networkManagers@2024-01-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string {pattern: "^[a-zA-Z0-9-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkManagerProperties](#networkmanagerproperties): The network manager properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkManagers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/ipamPools@2024-01-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [IpamPoolProperties](#ipampoolproperties) (Required): Properties of IpamPool resource properties which are specific to the Pool resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [CommonTrackedResourceTags](#commontrackedresourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkManagers/ipamPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/ipamPools/staticCidrs@2024-01-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [StaticCidrProperties](#staticcidrproperties): Properties of static CIDR resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Network/networkManagers/ipamPools/staticCidrs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityAdminConfigurations@2024-01-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityAdminConfigurationPropertiesFormat](#securityadminconfigurationpropertiesformat): Indicates the properties for the network manager security admin configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Network/networkManagers/securityAdminConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections@2024-01-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AdminRuleCollectionPropertiesFormat](#adminrulecollectionpropertiesformat): Indicates the properties for the network manager admin rule collection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules@2024-01-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2024-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules' (ReadOnly, DeployTimeConstant): The resource type

### AdminRule
#### Properties
* **kind**: 'Custom' (Required): Whether the rule is custom or default.
* **properties**: [AdminPropertiesFormat](#adminpropertiesformat): Indicates the properties of the security admin rule

### DefaultAdminRule
#### Properties
* **kind**: 'Default' (Required): Whether the rule is custom or default.
* **properties**: [DefaultAdminPropertiesFormat](#defaultadminpropertiesformat): Indicates the properties of the security admin rule


## Resource Microsoft.Network/networkManagers/verifierWorkspaces@2024-01-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VerifierWorkspaceProperties](#verifierworkspaceproperties): Properties of Verifier Workspace resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [CommonTrackedResourceTags](#commontrackedresourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkManagers/verifierWorkspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/verifierWorkspaces/reachabilityAnalysisIntents@2024-01-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ReachabilityAnalysisIntentProperties](#reachabilityanalysisintentproperties) (Required): Represents the Reachability Analysis Intent properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Network/networkManagers/verifierWorkspaces/reachabilityAnalysisIntents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/verifierWorkspaces/reachabilityAnalysisRuns@2024-01-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ReachabilityAnalysisRunProperties](#reachabilityanalysisrunproperties) (Required): Represents the Reachability Analysis Run properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Network/networkManagers/verifierWorkspaces/reachabilityAnalysisRuns' (ReadOnly, DeployTimeConstant): The resource type

## Function commit (Microsoft.Network/networkManagers@2024-01-01-preview)
* **Resource**: Microsoft.Network/networkManagers
* **ApiVersion**: 2024-01-01-preview
* **Input**: [NetworkManagerCommit](#networkmanagercommit)
* **Output**: [NetworkManagerCommit](#networkmanagercommit)

## Function getPoolUsage (Microsoft.Network/networkManagers/ipamPools@2024-01-01-preview)
* **Resource**: Microsoft.Network/networkManagers/ipamPools
* **ApiVersion**: 2024-01-01-preview
* **Output**: [PoolUsage](#poolusage)

## Function listAssociatedResources (Microsoft.Network/networkManagers/ipamPools@2024-01-01-preview)
* **Resource**: Microsoft.Network/networkManagers/ipamPools
* **ApiVersion**: 2024-01-01-preview
* **Output**: [PoolAssociationList](#poolassociationlist)

## Function listDeploymentStatus (Microsoft.Network/networkManagers@2024-01-01-preview)
* **Resource**: Microsoft.Network/networkManagers
* **ApiVersion**: 2024-01-01-preview
* **Input**: [NetworkManagerDeploymentStatusParameter](#networkmanagerdeploymentstatusparameter)
* **Output**: [NetworkManagerDeploymentStatusListResult](#networkmanagerdeploymentstatuslistresult)

## AddressPrefixItem
### Properties
* **addressPrefix**: string: Address prefix.
* **addressPrefixType**: 'IPPrefix' | 'NetworkGroup' | 'ServiceTag' | string: Address prefix type.

## AdminPropertiesFormat
### Properties
* **access**: 'Allow' | 'AlwaysAllow' | 'Deny' | string (Required): Indicates the access allowed for this particular rule
* **description**: string: A description for this rule. Restricted to 140 chars.
* **destinationPortRanges**: string[]: The destination port ranges.
* **destinations**: [AddressPrefixItem](#addressprefixitem)[]: The destination address prefixes. CIDR or destination IP ranges.
* **direction**: 'Inbound' | 'Outbound' | string (Required): Indicates if the traffic matched against the rule in inbound or outbound.
* **priority**: int {minValue: 1, maxValue: 4096} (Required): The priority of the rule. The value can be between 1 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
* **protocol**: 'Ah' | 'Any' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' | string (Required): Network protocol this rule applies to.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **resourceGuid**: string (ReadOnly): Unique identifier for this resource.
* **sourcePortRanges**: string[]: The source port ranges.
* **sources**: [AddressPrefixItem](#addressprefixitem)[]: The CIDR or source IP ranges.

## AdminRuleCollectionPropertiesFormat
### Properties
* **appliesToGroups**: [NetworkManagerSecurityGroupItem](#networkmanagersecuritygroupitem)[] (Required): Groups for configuration
* **description**: string: A description of the admin rule collection.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **resourceGuid**: string (ReadOnly): Unique identifier for this resource.

## CommonTrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CommonTrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CrossTenantScopes
### Properties
* **managementGroups**: string[] (ReadOnly): List of management groups.
* **subscriptions**: string[] (ReadOnly): List of subscriptions.
* **tenantId**: string (ReadOnly): Tenant ID.

## DefaultAdminPropertiesFormat
### Properties
* **access**: 'Allow' | 'AlwaysAllow' | 'Deny' | string (ReadOnly): Indicates the access allowed for this particular rule
* **description**: string (ReadOnly): A description for this rule. Restricted to 140 chars.
* **destinationPortRanges**: string[] (ReadOnly): The destination port ranges.
* **destinations**: [AddressPrefixItem](#addressprefixitem)[] (ReadOnly): The destination address prefixes. CIDR or destination IP ranges.
* **direction**: 'Inbound' | 'Outbound' | string (ReadOnly): Indicates if the traffic matched against the rule in inbound or outbound.
* **flag**: string: Default rule flag.
* **priority**: int (ReadOnly): The priority of the rule. The value can be between 1 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
* **protocol**: 'Ah' | 'Any' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' | string (ReadOnly): Network protocol this rule applies to.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **resourceGuid**: string (ReadOnly): Unique identifier for this resource.
* **sourcePortRanges**: string[] (ReadOnly): The source port ranges.
* **sources**: [AddressPrefixItem](#addressprefixitem)[] (ReadOnly): The CIDR or source IP ranges.

## IntentContent
### Properties
* **description**: string
* **destinationResourceId**: string (Required): Destination resource id of the intent.
* **ipTraffic**: [IPTraffic](#iptraffic) (Required): IP traffic information.
* **sourceResourceId**: string (Required): Source resource id of the intent.

## IpamPoolProperties
### Properties
* **addressPrefixes**: string[] (Required): List of IP address prefixes of the resource.
* **description**: string
* **displayName**: string: String representing a friendly name for the resource.
* **ipAddressType**: ('IPv4' | 'IPv6' | string)[] (ReadOnly): List of IP address type for the IpamPool.
* **parentPoolName**: string: String representing parent IpamPool resource name. If empty the IpamPool will be a root pool.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: Provisioning states of a resource.

## IPTraffic
### Properties
* **destinationIps**: string[] (Required): List of destination IP addresses of the traffic..
* **destinationPorts**: string[] (Required): The destination ports of the traffic.
* **protocols**: ('Any' | 'ICMP' | 'TCP' | 'UDP' | string)[] (Required)
* **sourceIps**: string[] (Required): List of source IP addresses of the traffic..
* **sourcePorts**: string[] (Required): The source ports of the traffic.

## NetworkManagerCommit
### Properties
* **commitId**: string (ReadOnly): Commit Id.
* **commitType**: 'Connectivity' | 'SecurityAdmin' | string (Required): Commit Type.
* **configurationIds**: string[]: List of configuration ids.
* **targetLocations**: string[] (Required): List of target locations.

## NetworkManagerDeploymentStatus
### Properties
* **commitTime**: string: Commit Time.
* **configurationIds**: string[]: List of configuration ids.
* **deploymentStatus**: 'Deployed' | 'Deploying' | 'Failed' | 'NotStarted' | string: Deployment Status.
* **deploymentType**: 'Connectivity' | 'SecurityAdmin' | string: Configuration Deployment Type.
* **errorMessage**: string: Error Message.
* **region**: string: Region Name.

## NetworkManagerDeploymentStatusListResult
### Properties
* **skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [NetworkManagerDeploymentStatus](#networkmanagerdeploymentstatus)[]: Gets a page of Network Manager Deployment Status

## NetworkManagerDeploymentStatusParameter
### Properties
* **deploymentTypes**: ('Connectivity' | 'SecurityAdmin' | string)[]: List of deployment types.
* **regions**: string[]: List of locations.
* **skipToken**: string: Continuation token for pagination, capturing the next page size and offset, as well as the context of the query.

## NetworkManagerProperties
### Properties
* **description**: string: A description of the network manager.
* **networkManagerScopeAccesses**: ('Connectivity' | 'SecurityAdmin' | string)[] (Required): Scope Access.
* **networkManagerScopes**: [NetworkManagerPropertiesNetworkManagerScopes](#networkmanagerpropertiesnetworkmanagerscopes) (Required): Scope of Network Manager.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the network manager resource.
* **resourceGuid**: string (ReadOnly): Unique identifier for this resource.

## NetworkManagerPropertiesNetworkManagerScopes
### Properties
* **crossTenantScopes**: [CrossTenantScopes](#crosstenantscopes)[] (ReadOnly): List of cross tenant scopes.
* **managementGroups**: string[]: List of management groups.
* **subscriptions**: string[]: List of subscriptions.

## NetworkManagerSecurityGroupItem
### Properties
* **networkGroupId**: string (Required): Network manager group Id.

## PoolAssociation
### Properties
* **addressPrefixes**: string[] (ReadOnly): List of assigned IP address prefixes in the IpamPool of the associated resource.
* **createdAt**: string (ReadOnly): Creation time of the association.
* **description**: string
* **numberOfReservedIPAddresses**: string (ReadOnly): Total number of reserved IP addresses of the association.
* **poolId**: string: IpamPool id for which the resource is associated to.
* **reservationExpiresAt**: string (ReadOnly): Expire time for IP addresses reserved.
* **reservedPrefixes**: string[] (ReadOnly): List of reserved IP address prefixes in the IpamPool of the associated resource.
* **resourceId**: string (Required): Resource id of the associated Azure resource.
* **totalNumberOfIPAddresses**: string (ReadOnly): Total number of assigned IP addresses of the association.

## PoolAssociationList
### Properties
* **nextLink**: string: The link used to get the next page of operations.
* **value**: [PoolAssociation](#poolassociation)[]

## PoolUsage
### Properties
* **addressPrefixes**: string[] (ReadOnly): List of IP address prefixes of the resource.
* **allocatedAddressPrefixes**: string[] (ReadOnly): List of assigned IP address prefixes.
* **availableAddressPrefixes**: string[] (ReadOnly): List of available IP address prefixes.
* **childPools**: [ResourceBasics](#resourcebasics)[] (ReadOnly): List of IpamPool that are children of this IpamPool.
* **numberOfAllocatedIPAddresses**: string (ReadOnly): Total number of assigned IP addresses in the IpamPool.
* **numberOfAvailableIPAddresses**: string (ReadOnly): Total number of available IP addresses in the IpamPool.
* **numberOfReservedIPAddresses**: string (ReadOnly): Total number of reserved IP addresses in the IpamPool.
* **reservedAddressPrefixes**: string[] (ReadOnly): List of reserved IP address prefixes. These IP addresses could be reclaimed if not assigned in the given time.
* **totalNumberOfIPAddresses**: string (ReadOnly): Total number of IP addresses managed in the IpamPool.

## ReachabilityAnalysisIntentProperties
### Properties
* **description**: string
* **destinationResourceId**: string (Required): Destination resource id to verify the reachability path of.
* **ipTraffic**: [IPTraffic](#iptraffic) (Required): IP traffic information.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: Provisioning states of a resource.
* **sourceResourceId**: string (Required): Source resource id to verify the reachability path of.

## ReachabilityAnalysisRunProperties
### Properties
* **analysisResult**: string (ReadOnly)
* **description**: string
* **errorMessage**: string (ReadOnly)
* **intentContent**: [IntentContent](#intentcontent) (ReadOnly): Intent information.
* **intentId**: string (Required): Id of the intent resource to run analysis on.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: Provisioning states of a resource.

## ResourceBasics
### Properties
* **addressPrefixes**: string[]: List of IP address prefixes of the resource.
* **resourceId**: string: ResourceId of the Azure resource.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SecurityAdminConfigurationPropertiesFormat
### Properties
* **applyOnNetworkIntentPolicyBasedServices**: ('All' | 'AllowRulesOnly' | 'None' | string)[]: Enum list of network intent policy based services.
* **description**: string: A description of the security configuration.
* **networkGroupAddressSpaceAggregationOption**: 'Manual' | 'None' | string: Determine update behavior for changes to network groups referenced within the rules in this configuration.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **resourceGuid**: string (ReadOnly): Unique identifier for this resource.

## StaticCidrProperties
### Properties
* **addressPrefixes**: string[]: List of IP address prefixes of the resource.
* **description**: string
* **numberOfIPAddressesToAllocate**: string: Number of IP addresses to allocate for a static CIDR resource. The IP addresses will be assigned based on IpamPools available space.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: Provisioning states of a resource.
* **totalNumberOfIPAddresses**: string (ReadOnly): Total number of IP addresses allocated for the static CIDR resource.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The type of identity that last modified the resource.
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## VerifierWorkspaceProperties
### Properties
* **description**: string
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: Provisioning states of a resource.

