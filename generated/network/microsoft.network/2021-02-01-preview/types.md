# Microsoft.Network @ 2021-02-01-preview

## Resource Microsoft.Network/networkManagers@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkManagerProperties](#networkmanagerproperties): Properties of Managed Network
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Network/networkManagers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/connectivityConfigurations@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectivityConfigurationProperties](#connectivityconfigurationproperties): Properties of network manager connectivity configuration
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Network/networkManagers/connectivityConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/networkGroups@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkGroupProperties](#networkgroupproperties): Properties of network group
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Network/networkManagers/networkGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityConfigurations@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityConfigurationPropertiesFormat](#securityconfigurationpropertiesformat): Defines the security Configuration properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Network/networkManagers/securityConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityConfigurations/adminRules@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AdminPropertiesFormat](#adminpropertiesformat): Security rule resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Network/networkManagers/securityConfigurations/adminRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityConfigurations/userRules@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UserRulePropertiesFormat](#userrulepropertiesformat): Security rule resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Network/networkManagers/securityConfigurations/userRules' (ReadOnly, DeployTimeConstant): The resource type

## NetworkManagerProperties
### Properties
* **description**: string: A description of the network manager.
* **displayName**: string: A friendly name for the network manager.
* **networkManagerScopeAccesses**: 'Connectivity' | 'Routing' | 'Security'[]: Scope Access.
* **networkManagerScopes**: [schemas:20_networkManagerScopes](#schemas20networkmanagerscopes): Scope of Network Manager.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of the scope assignment resource. Possible values include: 'Succeeded', 'Updating', 'Deleting', 'Failed'

## schemas:20_networkManagerScopes
### Properties
* **managementGroups**: string[]: List of management groups.
* **subscriptions**: string[]: List of subscriptions.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource. Possible values include: 'User', 'Application', 'ManagedIdentity', 'Key'
* **lastModifiedAt**: string: The type of identity that last modified the resource.
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource. Possible values include: 'User', 'Application', 'ManagedIdentity', 'Key'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConnectivityConfigurationProperties
### Properties
* **appliesToGroups**: [connectivityGroupItem](#connectivitygroupitem)[]: Groups for configuration
* **connectivityTopology**: 'HubAndSpokeTopology' | 'MeshTopology' (Required): Connectivity topology type. Possible values include: 'HubAndSpokeTopology', 'MeshTopology'
* **deleteExistingPeering**: bool: Flag if need to remove current existing peerings.
* **description**: string: A description of the connectivity configuration.
* **displayName**: string: A friendly name for the resource.
* **hubId**: string: The hub vnet Id.
* **isGlobal**: bool: Flag if global mesh is supported.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of the connectivity configuration resource. Possible values include: 'Succeeded', 'Updating', 'Deleting', 'Failed'

## connectivityGroupItem
### Properties
* **groupConnectivity**: 'DirectlyConnected' | 'None': Group connectivity type. Possible values include: 'None', 'DirectlyConnected'
* **isGlobal**: bool: Flag if global is supported.
* **networkGroupId**: string: Network group Id.
* **useHubGateway**: bool: Flag if need to use hub gateway.

## NetworkGroupProperties
### Properties
* **conditionalMembership**: string: Network group conditional filter.
* **description**: string: A description of the network group.
* **displayName**: string: A friendly name for the network group.
* **groupMembers**: [groupMembersItem](#groupmembersitem)[]: Group members of network group.
* **memberType**: 'Subnet' | 'VirtualNetwork': Group member type. Possible values include: 'VirtualNetwork', 'Subnet'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of the scope assignment resource. Possible values include: 'Succeeded', 'Updating', 'Deleting', 'Failed'

## groupMembersItem
### Properties
* **resourceId**: string: Resource Id.

## SecurityConfigurationPropertiesFormat
### Properties
* **appliesToGroups**: [NetworkManagerSecurityGroupItem](#networkmanagersecuritygroupitem)[]: Groups for configuration
* **deleteExistingNSGs**: bool: Flag if need to delete existing network security groups.
* **description**: string: A description of the security Configuration.
* **displayName**: string: A display name of the security Configuration.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of the scope assignment resource. Possible values include: 'Succeeded', 'Updating', 'Deleting', 'Failed'
* **securityType**: 'AdminPolicy' | 'UserPolicy': Security Type. Possible values include: 'AdminPolicy', 'UserPolicy'

## NetworkManagerSecurityGroupItem
### Properties
* **networkGroupId**: string: Network manager group Id.

## AdminPropertiesFormat
### Properties
* **access**: 'Allow' | 'AlwaysAllow' | 'Deny' (Required): Indicates the access allowed for this particular rule. Possible values include: 'Allow', 'Deny', 'AlwaysAllow'
* **appliesToGroups**: [NetworkManagerSecurityGroupItem](#networkmanagersecuritygroupitem)[]: Groups for configuration
* **description**: string: A description for this rule.
* **destination**: [AddressPrefixItem](#addressprefixitem)[]: The destination address prefixes. CIDR or destination IP ranges.
* **destinationPortRanges**: string[]: The destination port ranges.
* **direction**: 'Inbound' | 'Outbound' (Required): Indicates if the traffic matched against the rule in inbound or outbound. Possible values include: 'Inbound', 'Outbound'
* **displayName**: string: A friendly name for the rule.
* **priority**: int: The priority of the rule. The value can be between 1 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
* **protocol**: 'Ah' | 'Any' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' (Required): Network protocol this rule applies to. Possible values include: 'Tcp', 'Udp', 'Icmp', 'Esp', 'Any', 'Ah'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of the security Configuration resource. Possible values include: 'Succeeded', 'Updating', 'Deleting', 'Failed'
* **source**: [AddressPrefixItem](#addressprefixitem)[]: The CIDR or source IP ranges.
* **sourcePortRanges**: string[]: The source port ranges.

## AddressPrefixItem
### Properties
* **addressPrefix**: string: Address prefix.
* **addressPrefixType**: 'IPPrefix' | 'ServiceTag': Address prefix type. Possible values include: 'IPPrefix', 'ServiceTag'

## UserRulePropertiesFormat
### Properties
* **description**: string: A description for this rule. Restricted to 140 chars.
* **destination**: [AddressPrefixItem](#addressprefixitem)[]: The destination address prefixes. CIDR or destination IP ranges.
* **destinationPortRanges**: string[]: The destination port ranges.
* **direction**: 'Inbound' | 'Outbound' (Required): Indicates if the traffic matched against the rule in inbound or outbound. Possible values include: 'Inbound', 'Outbound'
* **displayName**: string: A friendly name for the rule.
* **protocol**: 'Ah' | 'Any' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' (Required): Network protocol this rule applies to. Possible values include: 'Tcp', 'Udp', 'Icmp', 'Esp', 'Any', 'Ah'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of the security Configuration resource. Possible values include: 'Succeeded', 'Updating', 'Deleting', 'Failed'
* **source**: [AddressPrefixItem](#addressprefixitem)[]: The CIDR or source IP ranges.
* **sourcePortRanges**: string[]: The source port ranges.

