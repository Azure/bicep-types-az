# Microsoft.Network @ 2022-04-01-preview

## Resource Microsoft.Network/networkManagerConnections@2022-04-01-preview
* **Valid Scope(s)**: ManagementGroup, Subscription
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkManagerConnectionProperties](#networkmanagerconnectionproperties): The scope connection properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **type**: 'Microsoft.Network/networkManagerConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkManagerProperties](#networkmanagerproperties): The network manager properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkManagers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/connectivityConfigurations@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectivityConfigurationProperties](#connectivityconfigurationproperties): Properties of a network manager connectivity configuration
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **type**: 'Microsoft.Network/networkManagers/connectivityConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/networkGroups@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkGroupProperties](#networkgroupproperties): The Network Group properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **type**: 'Microsoft.Network/networkManagers/networkGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/networkGroups/staticMembers@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StaticMemberProperties](#staticmemberproperties): The Static Member properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **type**: 'Microsoft.Network/networkManagers/networkGroups/staticMembers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/scopeConnections@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScopeConnectionProperties](#scopeconnectionproperties): The scope connection properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **type**: 'Microsoft.Network/networkManagers/scopeConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityAdminConfigurations@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityAdminConfigurationPropertiesFormat](#securityadminconfigurationpropertiesformat): Indicates the properties for the network manager security admin configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **type**: 'Microsoft.Network/networkManagers/securityAdminConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AdminRuleCollectionPropertiesFormat](#adminrulecollectionpropertiesformat): Indicates the properties for the network manager admin rule collection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **type**: 'Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **type**: 'Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules' (ReadOnly, DeployTimeConstant): The resource type

### AdminRule
#### Properties
* **kind**: 'Custom' (Required): Whether the rule is custom or default.
* **properties**: [AdminPropertiesFormat](#adminpropertiesformat): Indicates the properties of the security admin rule

### DefaultAdminRule
#### Properties
* **kind**: 'Default' (Required): Whether the rule is custom or default.
* **properties**: [DefaultAdminPropertiesFormat](#defaultadminpropertiesformat): Indicates the properties of the security admin rule


## Resource Microsoft.Network/networkManagers/securityUserConfigurations@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityUserConfigurationPropertiesFormat](#securityuserconfigurationpropertiesformat): Indicates the properties for the network manager security user configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **type**: 'Microsoft.Network/networkManagers/securityUserConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UserRuleCollectionPropertiesFormat](#userrulecollectionpropertiesformat): Indicates the properties for the network manager user rule collection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **type**: 'Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections/rules@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **type**: 'Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections/rules' (ReadOnly, DeployTimeConstant): The resource type

### UserRule
#### Properties
* **kind**: 'Custom' (Required): Whether the rule is custom or default.
* **properties**: [UserRulePropertiesFormat](#userrulepropertiesformat): Indicates the properties of the security user rule

### DefaultUserRule
#### Properties
* **kind**: 'Default' (Required): Whether the rule is custom or default.
* **properties**: [DefaultUserRulePropertiesFormat](#defaultuserrulepropertiesformat): Indicates the properties of the security default user rule


## Function listActiveConnectivityConfigurations (Microsoft.Network/networkManagers@2022-04-01-preview)
* **Resource**: Microsoft.Network/networkManagers
* **ApiVersion**: 2022-04-01-preview
* **Input**: [ActiveConfigurationParameter](#activeconfigurationparameter)
* **Output**: [ActiveConnectivityConfigurationsListResult](#activeconnectivityconfigurationslistresult)

## Function listActiveSecurityAdminRules (Microsoft.Network/networkManagers@2022-04-01-preview)
* **Resource**: Microsoft.Network/networkManagers
* **ApiVersion**: 2022-04-01-preview
* **Input**: [ActiveConfigurationParameter](#activeconfigurationparameter)
* **Output**: [ActiveSecurityAdminRulesListResult](#activesecurityadminruleslistresult)

## Function listActiveSecurityUserRules (Microsoft.Network/networkManagers@2022-04-01-preview)
* **Resource**: Microsoft.Network/networkManagers
* **ApiVersion**: 2022-04-01-preview
* **Input**: [ActiveConfigurationParameter](#activeconfigurationparameter)
* **Output**: [ActiveSecurityUserRulesListResult](#activesecurityuserruleslistresult)

## Function listDeploymentStatus (Microsoft.Network/networkManagers@2022-04-01-preview)
* **Resource**: Microsoft.Network/networkManagers
* **ApiVersion**: 2022-04-01-preview
* **Input**: [NetworkManagerDeploymentStatusParameter](#networkmanagerdeploymentstatusparameter)
* **Output**: [NetworkManagerDeploymentStatusListResult](#networkmanagerdeploymentstatuslistresult)

## Function listEffectiveVirtualNetworks (Microsoft.Network/networkManagers@2022-04-01-preview)
* **Resource**: Microsoft.Network/networkManagers
* **ApiVersion**: 2022-04-01-preview
* **Input**: [EffectiveVirtualNetworksParameter](#effectivevirtualnetworksparameter)
* **Output**: [EffectiveVirtualNetworksListResult](#effectivevirtualnetworkslistresult)

## Function listEffectiveVirtualNetworks (Microsoft.Network/networkManagers/networkGroups@2022-04-01-preview)
* **Resource**: Microsoft.Network/networkManagers/networkGroups
* **ApiVersion**: 2022-04-01-preview
* **Input**: [QueryRequestOptions](#queryrequestoptions)
* **Output**: [EffectiveVirtualNetworksListResult](#effectivevirtualnetworkslistresult)

## Function listNetworkManagerEffectiveConnectivityConfigurations (Microsoft.Network/virtualNetworks@2022-04-01-preview)
* **Resource**: Microsoft.Network/virtualNetworks
* **ApiVersion**: 2022-04-01-preview
* **Input**: [QueryRequestOptions](#queryrequestoptions)
* **Output**: [NetworkManagerEffectiveConnectivityConfigurationListResult](#networkmanagereffectiveconnectivityconfigurationlistresult)

## Function listNetworkManagerEffectiveSecurityAdminRules (Microsoft.Network/virtualNetworks@2022-04-01-preview)
* **Resource**: Microsoft.Network/virtualNetworks
* **ApiVersion**: 2022-04-01-preview
* **Input**: [QueryRequestOptions](#queryrequestoptions)
* **Output**: [NetworkManagerEffectiveSecurityAdminRulesListResult](#networkmanagereffectivesecurityadminruleslistresult)

## ActiveBaseSecurityAdminRule
* **Discriminator**: kind

### Base Properties
* **commitTime**: string: Deployment time string.
* **configurationDescription**: string: A description of the security admin configuration.
* **id**: string: Resource ID.
* **region**: string: Deployment region.
* **ruleCollectionAppliesToGroups**: [NetworkManagerSecurityGroupItem](#networkmanagersecuritygroupitem)[]: Groups for rule collection
* **ruleCollectionDescription**: string: A description of the rule collection.
* **ruleGroups**: [ConfigurationGroup](#configurationgroup)[]: Effective configuration groups.

### ActiveSecurityAdminRule
#### Properties
* **kind**: 'Custom' (Required): Whether the rule is custom or default.
* **properties**: [AdminPropertiesFormat](#adminpropertiesformat): Indicates the properties of the security admin rule

### ActiveDefaultSecurityAdminRule
#### Properties
* **kind**: 'Default' (Required): Whether the rule is custom or default.
* **properties**: [DefaultAdminPropertiesFormat](#defaultadminpropertiesformat): Indicates the properties of the default security admin rule


## ActiveBaseSecurityUserRule
* **Discriminator**: kind

### Base Properties
* **commitTime**: string: Deployment time string.
* **configurationDescription**: string: A description of the security user configuration.
* **id**: string: Resource ID.
* **region**: string: Deployment region.
* **ruleCollectionAppliesToGroups**: [NetworkManagerSecurityGroupItem](#networkmanagersecuritygroupitem)[]: Groups for rule collection
* **ruleCollectionDescription**: string: A description of the rule collection.
* **ruleGroups**: [ConfigurationGroup](#configurationgroup)[]: Effective configuration groups.

### ActiveSecurityUserRule
#### Properties
* **kind**: 'Custom' (Required): Whether the rule is custom or default.
* **properties**: [UserRulePropertiesFormat](#userrulepropertiesformat): Indicates the properties of the security user rule

### ActiveDefaultSecurityUserRule
#### Properties
* **kind**: 'Default' (Required): Whether the rule is custom or default.
* **properties**: [DefaultUserRulePropertiesFormat](#defaultuserrulepropertiesformat): Indicates the properties of the security default user rule


## ActiveConfigurationParameter
### Properties
* **regions**: string[]: List of regions.
* **skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.

## ActiveConfigurationParameter
### Properties
* **regions**: string[]: List of regions.
* **skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.

## ActiveConfigurationParameter
### Properties
* **regions**: string[]: List of regions.
* **skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.

## ActiveConnectivityConfiguration
### Properties
* **commitTime**: string: Deployment time string.
* **configurationGroups**: [ConfigurationGroup](#configurationgroup)[]: Effective configuration groups.
* **id**: string: Resource ID.
* **properties**: [ConnectivityConfigurationProperties](#connectivityconfigurationproperties): Properties of a network manager connectivity configuration
* **region**: string: Deployment region.

## ActiveConnectivityConfigurationsListResult
### Properties
* **skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [ActiveConnectivityConfiguration](#activeconnectivityconfiguration)[]: Gets a page of active connectivity configurations.

## ActiveSecurityAdminRulesListResult
### Properties
* **skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [ActiveBaseSecurityAdminRule](#activebasesecurityadminrule)[]: Gets a page of active security admin rules.

## ActiveSecurityUserRulesListResult
### Properties
* **skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [ActiveBaseSecurityUserRule](#activebasesecurityuserrule)[]: Gets a page of active security user rules.

## AddressPrefixItem
### Properties
* **addressPrefix**: string: Address prefix.
* **addressPrefixType**: 'IPPrefix' | 'ServiceTag' | string: Address prefix type.

## AdminPropertiesFormat
### Properties
* **access**: 'Allow' | 'AlwaysAllow' | 'Deny' | string (Required): Indicates the access allowed for this particular rule
* **description**: string: A description for this rule. Restricted to 140 chars.
* **destinationPortRanges**: string[]: The destination port ranges.
* **destinations**: [AddressPrefixItem](#addressprefixitem)[]: The destination address prefixes. CIDR or destination IP ranges.
* **direction**: 'Inbound' | 'Outbound' | string (Required): Indicates if the traffic matched against the rule in inbound or outbound.
* **priority**: int (Required): The priority of the rule. The value can be between 1 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
* **protocol**: 'Ah' | 'Any' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' | string (Required): Network protocol this rule applies to.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **sourcePortRanges**: string[]: The source port ranges.
* **sources**: [AddressPrefixItem](#addressprefixitem)[]: The CIDR or source IP ranges.

## AdminRuleCollectionPropertiesFormat
### Properties
* **appliesToGroups**: [NetworkManagerSecurityGroupItem](#networkmanagersecuritygroupitem)[] (Required): Groups for configuration
* **description**: string: A description of the admin rule collection.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## ConfigurationGroup
### Properties
* **id**: string: Resource ID.
* **properties**: [NetworkGroupProperties](#networkgroupproperties): The network configuration group properties

## ConnectivityConfigurationProperties
### Properties
* **appliesToGroups**: [ConnectivityGroupItem](#connectivitygroupitem)[] (Required): Groups for configuration
* **connectivityTopology**: 'HubAndSpoke' | 'Mesh' | string (Required): Connectivity topology type.
* **deleteExistingPeering**: 'False' | 'True' | string: Flag if need to remove current existing peerings.
* **description**: string: A description of the connectivity configuration.
* **hubs**: [Hub](#hub)[]: List of hubItems
* **isGlobal**: 'False' | 'True' | string: Flag if global mesh is supported.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the connectivity configuration resource.

## ConnectivityGroupItem
### Properties
* **groupConnectivity**: 'DirectlyConnected' | 'None' | string (Required): Group connectivity type.
* **isGlobal**: 'False' | 'True' | string: Flag if global is supported.
* **networkGroupId**: string (Required): Network group Id.
* **useHubGateway**: 'False' | 'True' | string: Flag if need to use hub gateway.

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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **sourcePortRanges**: string[] (ReadOnly): The source port ranges.
* **sources**: [AddressPrefixItem](#addressprefixitem)[] (ReadOnly): The CIDR or source IP ranges.

## DefaultUserRulePropertiesFormat
### Properties
* **description**: string (ReadOnly): A description for this rule. Restricted to 140 chars.
* **destinationPortRanges**: string[] (ReadOnly): The destination port ranges.
* **destinations**: [AddressPrefixItem](#addressprefixitem)[] (ReadOnly): The destination address prefixes. CIDR or destination IP ranges.
* **direction**: 'Inbound' | 'Outbound' | string (ReadOnly): Indicates if the traffic matched against the rule in inbound or outbound.
* **flag**: string: Default rule flag.
* **protocol**: 'Ah' | 'Any' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' | string (ReadOnly): Network protocol this rule applies to.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the security configuration user rule resource.
* **sourcePortRanges**: string[] (ReadOnly): The source port ranges.
* **sources**: [AddressPrefixItem](#addressprefixitem)[] (ReadOnly): The CIDR or source IP ranges.

## EffectiveBaseSecurityAdminRule
* **Discriminator**: kind

### Base Properties
* **configurationDescription**: string: A description of the security admin configuration.
* **id**: string: Resource ID.
* **ruleCollectionAppliesToGroups**: [NetworkManagerSecurityGroupItem](#networkmanagersecuritygroupitem)[]: Groups for rule collection
* **ruleCollectionDescription**: string: A description of the rule collection.
* **ruleGroups**: [ConfigurationGroup](#configurationgroup)[]: Effective configuration groups.

### EffectiveSecurityAdminRule
#### Properties
* **kind**: 'Custom' (Required): Whether the rule is custom or default.
* **properties**: [AdminPropertiesFormat](#adminpropertiesformat): Indicates the properties of the security admin rule

### EffectiveDefaultSecurityAdminRule
#### Properties
* **kind**: 'Default' (Required): Whether the rule is custom or default.
* **properties**: [DefaultAdminPropertiesFormat](#defaultadminpropertiesformat): Indicates the properties of the default security admin rule


## EffectiveConnectivityConfiguration
### Properties
* **configurationGroups**: [ConfigurationGroup](#configurationgroup)[]: Effective configuration groups.
* **id**: string: Resource ID.
* **properties**: [ConnectivityConfigurationProperties](#connectivityconfigurationproperties): Properties of a network manager connectivity configuration

## EffectiveVirtualNetwork
### Properties
* **id**: string: Effective vnet Id.
* **location**: string: Location of vnet.
* **membershipType**: 'Dynamic' | 'Static' | string: Membership Type.

## EffectiveVirtualNetworksListResult
### Properties
* **skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [EffectiveVirtualNetwork](#effectivevirtualnetwork)[]: Gets a page of EffectiveVirtualNetwork

## EffectiveVirtualNetworksListResult
### Properties
* **skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [EffectiveVirtualNetwork](#effectivevirtualnetwork)[]: Gets a page of EffectiveVirtualNetwork

## EffectiveVirtualNetworksParameter
### Properties
* **conditionalMembers**: string: Conditional Members.
* **skipToken**: string: Continuation token for pagination, capturing the next page size and offset, as well as the context of the query.

## Hub
### Properties
* **resourceId**: string: Resource Id.
* **resourceType**: string: Resource Type.

## NetworkGroupProperties
### Properties
* **description**: string: A description of the network group.
* **memberType**: string (Required): Group member type.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the scope assignment resource.

## NetworkManagerConnectionProperties
### Properties
* **connectionState**: 'Conflict' | 'Connected' | 'Pending' | 'Rejected' | 'Revoked' | string (ReadOnly): Connection state.
* **description**: string: A description of the scope connection.
* **networkManagerId**: string: Network Manager Id.

## NetworkManagerDeploymentStatus
### Properties
* **commitTime**: string: Commit Time.
* **configurationIds**: string[]: List of configuration ids.
* **deploymentStatus**: 'Deployed' | 'Deploying' | 'Failed' | 'NotStarted' | string: Deployment Status.
* **deploymentType**: 'Connectivity' | 'SecurityAdmin' | 'SecurityUser' | string: Configuration Deployment Type.
* **errorMessage**: string: Error Message.
* **region**: string: Region Name.

## NetworkManagerDeploymentStatusListResult
### Properties
* **skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [NetworkManagerDeploymentStatus](#networkmanagerdeploymentstatus)[]: Gets a page of Network Manager Deployment Status

## NetworkManagerDeploymentStatusParameter
### Properties
* **deploymentTypes**: 'Connectivity' | 'SecurityAdmin' | 'SecurityUser' | string[]: List of deployment types.
* **regions**: string[]: List of locations.
* **skipToken**: string: Continuation token for pagination, capturing the next page size and offset, as well as the context of the query.

## NetworkManagerEffectiveConnectivityConfigurationListResult
### Properties
* **skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [EffectiveConnectivityConfiguration](#effectiveconnectivityconfiguration)[]: Gets a page of NetworkManagerEffectiveConnectivityConfiguration

## NetworkManagerEffectiveSecurityAdminRulesListResult
### Properties
* **skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [EffectiveBaseSecurityAdminRule](#effectivebasesecurityadminrule)[]: Gets a page of NetworkManagerEffectiveSecurityAdminRules

## NetworkManagerProperties
### Properties
* **description**: string: A description of the network manager.
* **networkManagerScopeAccesses**: 'Connectivity' | 'SecurityAdmin' | 'SecurityUser' | string[] (Required): Scope Access.
* **networkManagerScopes**: [NetworkManagerPropertiesNetworkManagerScopes](#networkmanagerpropertiesnetworkmanagerscopes) (Required): Scope of Network Manager.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the scope assignment resource.

## NetworkManagerPropertiesNetworkManagerScopes
### Properties
* **crossTenantScopes**: [CrossTenantScopes](#crosstenantscopes)[] (ReadOnly): List of cross tenant scopes.
* **managementGroups**: string[]: List of management groups.
* **subscriptions**: string[]: List of subscriptions.

## NetworkManagerSecurityGroupItem
### Properties
* **networkGroupId**: string (Required): Network manager group Id.

## QueryRequestOptions
### Properties
* **skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.

## QueryRequestOptions
### Properties
* **skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.

## QueryRequestOptions
### Properties
* **skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScopeConnectionProperties
### Properties
* **connectionState**: 'Conflict' | 'Connected' | 'Pending' | 'Rejected' | 'Revoked' | string (ReadOnly): Connection State
* **description**: string: A description of the scope connection.
* **resourceId**: string: Resource ID.
* **tenantId**: string: Tenant ID.

## SecurityAdminConfigurationPropertiesFormat
### Properties
* **applyOnNetworkIntentPolicyBasedServices**: 'All' | 'None' | string[]: Enum list of network intent policy based services.
* **description**: string: A description of the security configuration.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## SecurityUserConfigurationPropertiesFormat
### Properties
* **deleteExistingNSGs**: 'False' | 'True' | string: Flag if need to delete existing network security groups.
* **description**: string: A description of the security user configuration.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## StaticMemberProperties
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the scope assignment resource.
* **region**: string (ReadOnly): Resource region.
* **resourceId**: string: Resource Id.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The type of identity that last modified the resource.
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## UserRuleCollectionPropertiesFormat
### Properties
* **appliesToGroups**: [NetworkManagerSecurityGroupItem](#networkmanagersecuritygroupitem)[] (Required): Groups for configuration
* **description**: string: A description of the user rule collection.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## UserRulePropertiesFormat
### Properties
* **description**: string: A description for this rule.
* **destinationPortRanges**: string[]: The destination port ranges.
* **destinations**: [AddressPrefixItem](#addressprefixitem)[]: The destination address prefixes. CIDR or destination IP ranges.
* **direction**: 'Inbound' | 'Outbound' | string (Required): Indicates if the traffic matched against the rule in inbound or outbound.
* **protocol**: 'Ah' | 'Any' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' | string (Required): Network protocol this rule applies to.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the security configuration user rule resource.
* **sourcePortRanges**: string[]: The source port ranges.
* **sources**: [AddressPrefixItem](#addressprefixitem)[]: The CIDR or source IP ranges.

