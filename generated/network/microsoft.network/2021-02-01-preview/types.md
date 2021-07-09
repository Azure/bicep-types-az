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
* **tags**: [ResourceTags](#resourcetags): Resource tags.
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

## Resource Microsoft.Network/networkManagers/securityAdminConfigurations@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityConfigurationPropertiesFormat](#securityconfigurationpropertiesformat): Defines the security Configuration properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Network/networkManagers/securityAdminConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RuleCollectionPropertiesFormat](#rulecollectionpropertiesformat): Defines the rule collection properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules' (ReadOnly, DeployTimeConstant): The resource type
### AdminRule
#### Properties
* **kind**: 'Custom' (Required): Whether the rule is custom or default.
* **properties**: [AdminPropertiesFormat](#adminpropertiesformat): Security admin rule resource.

### DefaultAdminRule
#### Properties
* **kind**: 'Default' (Required): Whether the rule is custom or default.
* **properties**: [DefaultAdminPropertiesFormat](#defaultadminpropertiesformat): Security default admin rule resource.


## Resource Microsoft.Network/networkManagers/securityUserConfigurations@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityConfigurationPropertiesFormat](#securityconfigurationpropertiesformat): Defines the security Configuration properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Network/networkManagers/securityUserConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RuleCollectionPropertiesFormat](#rulecollectionpropertiesformat): Defines the rule collection properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections/rules@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections/rules' (ReadOnly, DeployTimeConstant): The resource type
### UserRule
#### Properties
* **kind**: 'Custom' (Required): Whether the rule is custom or default.
* **properties**: [UserRulePropertiesFormat](#userrulepropertiesformat): Security rule resource.

### DefaultUserRule
#### Properties
* **kind**: 'Default' (Required): Whether the rule is custom or default.
* **properties**: [DefaultUserRulePropertiesFormat](#defaultuserrulepropertiesformat): Security default user rule resource.


## NetworkManagerProperties
### Properties
* **description**: string: A description of the network manager.
* **displayName**: string: A friendly name for the network manager.
* **networkManagerScopeAccesses**: 'AdminSecurity' | 'Connectivity' | 'UserSecurity'[]: Scope Access.
* **networkManagerScopes**: [NetworkManagerPropertiesNetworkManagerScopes](#networkmanagerpropertiesnetworkmanagerscopes): Scope of Network Manager.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The current provisioning state.

## NetworkManagerPropertiesNetworkManagerScopes
### Properties
* **managementGroups**: string[]: List of management groups.
* **subscriptions**: string[]: List of subscriptions.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The type of identity that last modified the resource.
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConnectivityConfigurationProperties
### Properties
* **appliesToGroups**: [ConnectivityGroupItem](#connectivitygroupitem)[]: Groups for configuration
* **connectivityTopology**: 'HubAndSpoke' | 'Mesh' (Required): Connectivity topology type.
* **deleteExistingPeering**: 'False' | 'True': Flag if need to remove current existing peerings.
* **description**: string: A description of the connectivity configuration.
* **displayName**: string: A friendly name for the resource.
* **hubId**: string: The hub vnet Id.
* **isGlobal**: 'False' | 'True': Flag if global mesh is supported.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The current provisioning state.

## ConnectivityGroupItem
### Properties
* **groupConnectivity**: 'DirectlyConnected' | 'None': Group connectivity type.
* **isGlobal**: 'False' | 'True': Flag if global mesh is supported.
* **networkGroupId**: string: Network group Id.
* **useHubGateway**: 'False' | 'True': Flag if need to use hub gateway.

## NetworkGroupProperties
### Properties
* **conditionalMembership**: string: Network group conditional filter.
* **description**: string: A description of the network group.
* **displayName**: string: A friendly name for the network group.
* **groupMembers**: [GroupMembersItem](#groupmembersitem)[]: Group members of network group.
* **memberType**: 'Subnet' | 'VirtualNetwork': Group member type.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The current provisioning state.

## GroupMembersItem
### Properties
* **subnetId**: string: Subnet Id.
* **vnetId**: string: Vnet Id.

## SecurityConfigurationPropertiesFormat
### Properties
* **deleteExistingNSGs**: 'False' | 'True': Flag if need to delete existing network security groups.
* **description**: string: A description of the security configuration.
* **displayName**: string: A display name of the security configuration.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The current provisioning state.
* **securityType**: 'AdminPolicy' | 'UserPolicy': Security Type.

## RuleCollectionPropertiesFormat
### Properties
* **appliesToGroups**: [NetworkManagerSecurityGroupItem](#networkmanagersecuritygroupitem)[]: Groups for configuration
* **description**: string: A description of the rule collection.
* **displayName**: string: A display name of the rule collection.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The current provisioning state.

## NetworkManagerSecurityGroupItem
### Properties
* **networkGroupId**: string: Network manager group Id.

## AdminRule
### Properties
* **kind**: 'Custom' (Required): Whether the rule is custom or default.
* **properties**: [AdminPropertiesFormat](#adminpropertiesformat): Security admin rule resource.

## AdminPropertiesFormat
### Properties
* **access**: 'Allow' | 'AlwaysAllow' | 'Deny' (Required): Whether network traffic is allowed or denied.
* **description**: string: A description for this rule. Restricted to 140 chars.
* **destinationPortRanges**: string[]: The destination port ranges.
* **destinations**: [AddressPrefixItem](#addressprefixitem)[]: The destination address prefixes. CIDR or destination IP ranges.
* **direction**: 'Inbound' | 'Outbound' (Required): The direction of the rule. The direction specifies if the rule will be evaluated on incoming or outgoing traffic.
* **displayName**: string: A friendly name for the rule.
* **priority**: int: The priority of the rule. The value can be between 1 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
* **protocol**: 'Ah' | 'Any' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' (Required): Network protocol this rule applies to.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The current provisioning state.
* **sourcePortRanges**: string[]: The source port ranges.
* **sources**: [AddressPrefixItem](#addressprefixitem)[]: The CIDR or source IP ranges.

## AddressPrefixItem
### Properties
* **addressPrefix**: string: Address prefix.
* **addressPrefixType**: 'IPPrefix' | 'ServiceTag': Address prefix type.

## DefaultAdminRule
### Properties
* **kind**: 'Default' (Required): Whether the rule is custom or default.
* **properties**: [DefaultAdminPropertiesFormat](#defaultadminpropertiesformat): Security default admin rule resource.

## DefaultAdminPropertiesFormat
### Properties
* **access**: 'Allow' | 'AlwaysAllow' | 'Deny' (ReadOnly): Whether network traffic is allowed or denied.
* **description**: string (ReadOnly): A description for this rule. Restricted to 140 chars.
* **destinationPortRanges**: string[] (ReadOnly): The destination port ranges.
* **destinations**: [AddressPrefixItem](#addressprefixitem)[] (ReadOnly): The destination address prefixes. CIDR or destination IP ranges.
* **direction**: 'Inbound' | 'Outbound' (ReadOnly): The direction of the rule. The direction specifies if the rule will be evaluated on incoming or outgoing traffic.
* **displayName**: string (ReadOnly): A friendly name for the rule.
* **flag**: string: Default rule flag.
* **priority**: int (ReadOnly): The priority of the rule. The value can be between 1 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
* **protocol**: 'Ah' | 'Any' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' (ReadOnly): Network protocol this rule applies to.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The current provisioning state.
* **sourcePortRanges**: string[] (ReadOnly): The source port ranges.
* **sources**: [AddressPrefixItem](#addressprefixitem)[] (ReadOnly): The CIDR or source IP ranges.

## UserRule
### Properties
* **kind**: 'Custom' (Required): Whether the rule is custom or default.
* **properties**: [UserRulePropertiesFormat](#userrulepropertiesformat): Security rule resource.

## UserRulePropertiesFormat
### Properties
* **description**: string: A description for this rule.
* **destinationPortRanges**: string[]: The destination port ranges.
* **destinations**: [AddressPrefixItem](#addressprefixitem)[]: The destination address prefixes. CIDR or destination IP ranges.
* **direction**: 'Inbound' | 'Outbound' (Required): The direction of the rule. The direction specifies if the rule will be evaluated on incoming or outgoing traffic.
* **displayName**: string: A friendly name for the rule.
* **protocol**: 'Ah' | 'Any' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' (Required): Network protocol this rule applies to.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The current provisioning state.
* **sourcePortRanges**: string[]: The source port ranges.
* **sources**: [AddressPrefixItem](#addressprefixitem)[]: The CIDR or source IP ranges.

## DefaultUserRule
### Properties
* **kind**: 'Default' (Required): Whether the rule is custom or default.
* **properties**: [DefaultUserRulePropertiesFormat](#defaultuserrulepropertiesformat): Security default user rule resource.

## DefaultUserRulePropertiesFormat
### Properties
* **description**: string (ReadOnly): A description for this rule. Restricted to 140 chars.
* **destinationPortRanges**: string[] (ReadOnly): The destination port ranges.
* **destinations**: [AddressPrefixItem](#addressprefixitem)[] (ReadOnly): The destination address prefixes. CIDR or destination IP ranges.
* **direction**: 'Inbound' | 'Outbound' (ReadOnly): The direction of the rule. The direction specifies if the rule will be evaluated on incoming or outgoing traffic.
* **displayName**: string (ReadOnly): A friendly name for the rule.
* **flag**: string: Default rule flag.
* **protocol**: 'Ah' | 'Any' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' (ReadOnly): Network protocol this rule applies to.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The current provisioning state.
* **sourcePortRanges**: string[] (ReadOnly): The source port ranges.
* **sources**: [AddressPrefixItem](#addressprefixitem)[] (ReadOnly): The CIDR or source IP ranges.

