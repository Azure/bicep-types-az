# Microsoft.Network @ 2022-02-01-preview

## Resource Microsoft.Network/networkManagerConnections@2022-02-01-preview
* **Valid Scope(s)**: ManagementGroup, Subscription
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkManagerConnectionProperties](#networkmanagerconnectionproperties): Information about the network manager connection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Network/networkManagerConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkManagerProperties](#networkmanagerproperties): Properties of Managed Network
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkManagers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/connectivityConfigurations@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectivityConfigurationProperties](#connectivityconfigurationproperties): Properties of network manager connectivity configuration
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Network/networkManagers/connectivityConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/networkGroups@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkGroupProperties](#networkgroupproperties): Properties of network group
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Network/networkManagers/networkGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/networkGroups/staticMembers@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StaticMemberProperties](#staticmemberproperties): Properties of static member.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Network/networkManagers/networkGroups/staticMembers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/scopeConnections@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScopeConnectionProperties](#scopeconnectionproperties): Scope connection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Network/networkManagers/scopeConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityAdminConfigurations@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityAdminConfigurationPropertiesFormat](#securityadminconfigurationpropertiesformat): Defines the security admin configuration properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Network/networkManagers/securityAdminConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AdminRuleCollectionPropertiesFormat](#adminrulecollectionpropertiesformat): Defines the admin rule collection properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
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


## Resource Microsoft.Network/networkManagers/securityUserConfigurations@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityUserConfigurationPropertiesFormat](#securityuserconfigurationpropertiesformat): Defines the security user configuration properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Network/networkManagers/securityUserConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UserRuleCollectionPropertiesFormat](#userrulecollectionpropertiesformat): Defines the user rule collection properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections/rules@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
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


## Function listActiveConnectivityConfigurations (Microsoft.Network/networkManagers@2022-02-01-preview)
* **Resource**: Microsoft.Network/networkManagers
* **ApiVersion**: 2022-02-01-preview
* **Input**: [ActiveConfigurationParameter](#activeconfigurationparameter)
* **Output**: [ActiveConnectivityConfigurationsListResult](#activeconnectivityconfigurationslistresult)

## Function listActiveSecurityAdminRules (Microsoft.Network/networkManagers@2022-02-01-preview)
* **Resource**: Microsoft.Network/networkManagers
* **ApiVersion**: 2022-02-01-preview
* **Input**: [ActiveConfigurationParameter](#activeconfigurationparameter)
* **Output**: [ActiveSecurityAdminRulesListResult](#activesecurityadminruleslistresult)

## Function listActiveSecurityUserRules (Microsoft.Network/networkManagers@2022-02-01-preview)
* **Resource**: Microsoft.Network/networkManagers
* **ApiVersion**: 2022-02-01-preview
* **Input**: [ActiveConfigurationParameter](#activeconfigurationparameter)
* **Output**: [ActiveSecurityUserRulesListResult](#activesecurityuserruleslistresult)

## Function listDeploymentStatus (Microsoft.Network/networkManagers@2022-02-01-preview)
* **Resource**: Microsoft.Network/networkManagers
* **ApiVersion**: 2022-02-01-preview
* **Input**: [NetworkManagerDeploymentStatusParameter](#networkmanagerdeploymentstatusparameter)
* **Output**: [NetworkManagerDeploymentStatusListResult](#networkmanagerdeploymentstatuslistresult)

## Function listEffectiveVirtualNetworks (Microsoft.Network/networkManagers@2022-02-01-preview)
* **Resource**: Microsoft.Network/networkManagers
* **ApiVersion**: 2022-02-01-preview
* **Input**: [EffectiveVirtualNetworksParameter](#effectivevirtualnetworksparameter)
* **Output**: [EffectiveVirtualNetworksListResult](#effectivevirtualnetworkslistresult)

## Function listEffectiveVirtualNetworks (Microsoft.Network/networkManagers/networkGroups@2022-02-01-preview)
* **Resource**: Microsoft.Network/networkManagers/networkGroups
* **ApiVersion**: 2022-02-01-preview
* **Input**: [QueryRequestOptions](#queryrequestoptions)
* **Output**: [EffectiveVirtualNetworksListResult](#effectivevirtualnetworkslistresult)

## Function listNetworkManagerEffectiveConnectivityConfigurations (Microsoft.Network/virtualNetworks@2022-02-01-preview)
* **Resource**: Microsoft.Network/virtualNetworks
* **ApiVersion**: 2022-02-01-preview
* **Input**: [QueryRequestOptions](#queryrequestoptions)
* **Output**: [NetworkManagerEffectiveConnectivityConfigurationListResult](#networkmanagereffectiveconnectivityconfigurationlistresult)

## Function listNetworkManagerEffectiveSecurityAdminRules (Microsoft.Network/virtualNetworks@2022-02-01-preview)
* **Resource**: Microsoft.Network/virtualNetworks
* **ApiVersion**: 2022-02-01-preview
* **Input**: [QueryRequestOptions](#queryrequestoptions)
* **Output**: [NetworkManagerEffectiveSecurityAdminRulesListResult](#networkmanagereffectivesecurityadminruleslistresult)

## ActiveBaseSecurityAdminRule
* **Discriminator**: kind

### Base Properties
* **commitTime**: string (ReadOnly): Deployment time string.
* **configurationDescription**: string (ReadOnly): A description of the security admin configuration.
* **id**: string (ReadOnly): Resource ID.
* **region**: string (ReadOnly): Deployment region.
* **ruleCollectionAppliesToGroups**: [NetworkManagerSecurityGroupItem](#networkmanagersecuritygroupitem)[] (ReadOnly): Groups for rule collection
* **ruleCollectionDescription**: string (ReadOnly): A description of the rule collection.
* **ruleGroups**: [ConfigurationGroup](#configurationgroup)[] (ReadOnly): Effective configuration groups.
### ActiveSecurityAdminRule
#### Properties
* **kind**: 'Custom' (Required): Whether the rule is custom or default.
* **properties**: [AdminPropertiesFormat](#adminpropertiesformat) (ReadOnly): Security admin rule resource.

### ActiveDefaultSecurityAdminRule
#### Properties
* **kind**: 'Default' (Required): Whether the rule is custom or default.
* **properties**: [DefaultAdminPropertiesFormat](#defaultadminpropertiesformat) (ReadOnly): Security default admin rule resource.


## ActiveBaseSecurityUserRule
* **Discriminator**: kind

### Base Properties
* **commitTime**: string (ReadOnly): Deployment time string.
* **configurationDescription**: string (ReadOnly): A description of the security user configuration.
* **id**: string (ReadOnly): Resource ID.
* **region**: string (ReadOnly): Deployment region.
* **ruleCollectionAppliesToGroups**: [NetworkManagerSecurityGroupItem](#networkmanagersecuritygroupitem)[] (ReadOnly): Groups for rule collection
* **ruleCollectionDescription**: string (ReadOnly): A description of the rule collection.
* **ruleGroups**: [ConfigurationGroup](#configurationgroup)[] (ReadOnly): Effective configuration groups.
### ActiveSecurityUserRule
#### Properties
* **kind**: 'Custom' (Required): Whether the rule is custom or default.
* **properties**: [UserRulePropertiesFormat](#userrulepropertiesformat) (ReadOnly): Security rule resource.

### ActiveDefaultSecurityUserRule
#### Properties
* **kind**: 'Default' (Required): Whether the rule is custom or default.
* **properties**: [DefaultUserRulePropertiesFormat](#defaultuserrulepropertiesformat) (ReadOnly): Security default user rule resource.


## ActiveConfigurationParameter
### Properties
* **regions**: string[] (WriteOnly): List of regions.
* **skipToken**: string (WriteOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.

## ActiveConfigurationParameter
### Properties
* **regions**: string[] (WriteOnly): List of regions.
* **skipToken**: string (WriteOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.

## ActiveConfigurationParameter
### Properties
* **regions**: string[] (WriteOnly): List of regions.
* **skipToken**: string (WriteOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.

## ActiveConnectivityConfiguration
### Properties
* **commitTime**: string (ReadOnly): Deployment time string.
* **configurationGroups**: [ConfigurationGroup](#configurationgroup)[] (ReadOnly): Effective configuration groups.
* **id**: string (ReadOnly): Resource ID.
* **properties**: [ConnectivityConfigurationProperties](#connectivityconfigurationproperties) (ReadOnly): Properties of network manager connectivity configuration
* **region**: string (ReadOnly): Deployment region.

## ActiveConnectivityConfigurationsListResult
### Properties
* **skipToken**: string (ReadOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [ActiveConnectivityConfiguration](#activeconnectivityconfiguration)[] (ReadOnly): Gets a page of active connectivity configurations.

## ActiveSecurityAdminRulesListResult
### Properties
* **skipToken**: string (ReadOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [ActiveBaseSecurityAdminRule](#activebasesecurityadminrule)[] (ReadOnly): Gets a page of active security admin rules.

## ActiveSecurityUserRulesListResult
### Properties
* **skipToken**: string (ReadOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [ActiveBaseSecurityUserRule](#activebasesecurityuserrule)[] (ReadOnly): Gets a page of active security user rules.

## AddressPrefixItem
### Properties
* **addressPrefix**: string: Address prefix.
* **addressPrefixType**: 'IPPrefix' | 'ServiceTag' | string: Address prefix type.

## AdminPropertiesFormat
### Properties
* **access**: 'Allow' | 'AlwaysAllow' | 'Deny' | string (Required): Whether network traffic is allowed or denied.
* **description**: string: A description for this rule. Restricted to 140 chars.
* **destinationPortRanges**: string[]: The destination port ranges.
* **destinations**: [AddressPrefixItem](#addressprefixitem)[]: The destination address prefixes. CIDR or destination IP ranges.
* **direction**: 'Inbound' | 'Outbound' | string (Required): The direction of the rule. The direction specifies if the rule will be evaluated on incoming or outgoing traffic.
* **priority**: int (Required): The priority of the rule. The value can be between 1 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
* **protocol**: 'Ah' | 'Any' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' | string (Required): Network protocol this rule applies to.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **sourcePortRanges**: string[]: The source port ranges.
* **sources**: [AddressPrefixItem](#addressprefixitem)[]: The CIDR or source IP ranges.

## AdminRuleCollectionPropertiesFormat
### Properties
* **appliesToGroups**: [NetworkManagerSecurityGroupItem](#networkmanagersecuritygroupitem)[] (Required): Groups for configuration
* **description**: string: A description of the admin rule collection.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## ConfigurationGroup
### Properties
* **id**: string (ReadOnly): Resource ID.
* **properties**: [NetworkGroupProperties](#networkgroupproperties) (ReadOnly): Properties of network group

## ConnectivityConfigurationProperties
### Properties
* **appliesToGroups**: [ConnectivityGroupItem](#connectivitygroupitem)[] (Required): Groups for configuration
* **connectivityTopology**: 'HubAndSpoke' | 'Mesh' | string (Required): Connectivity topology type.
* **deleteExistingPeering**: 'False' | 'True' | string: Flag if need to remove current existing peerings.
* **description**: string: A description of the connectivity configuration.
* **hubs**: [Hub](#hub)[]: List of hubItems
* **isGlobal**: 'False' | 'True' | string: Flag if global mesh is supported.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## ConnectivityGroupItem
### Properties
* **groupConnectivity**: 'DirectlyConnected' | 'None' | string (Required): Group connectivity type.
* **isGlobal**: 'False' | 'True' | string: Flag if global mesh is supported.
* **networkGroupId**: string (Required): Network group Id.
* **useHubGateway**: 'False' | 'True' | string: Flag if need to use hub gateway.

## CrossTenantScopes
### Properties
* **managementGroups**: string[] (ReadOnly): List of management groups.
* **subscriptions**: string[] (ReadOnly): List of subscriptions.
* **tenantId**: string (ReadOnly): Tenant ID.

## DefaultAdminPropertiesFormat
### Properties
* **access**: 'Allow' | 'AlwaysAllow' | 'Deny' | string (ReadOnly): Whether network traffic is allowed or denied.
* **description**: string (ReadOnly): A description for this rule. Restricted to 140 chars.
* **destinationPortRanges**: string[] (ReadOnly): The destination port ranges.
* **destinations**: [AddressPrefixItem](#addressprefixitem)[] (ReadOnly): The destination address prefixes. CIDR or destination IP ranges.
* **direction**: 'Inbound' | 'Outbound' | string (ReadOnly): The direction of the rule. The direction specifies if the rule will be evaluated on incoming or outgoing traffic.
* **flag**: string: Default rule flag.
* **priority**: int (ReadOnly): The priority of the rule. The value can be between 1 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
* **protocol**: 'Ah' | 'Any' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' | string (ReadOnly): Network protocol this rule applies to.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **sourcePortRanges**: string[] (ReadOnly): The source port ranges.
* **sources**: [AddressPrefixItem](#addressprefixitem)[] (ReadOnly): The CIDR or source IP ranges.

## DefaultUserRulePropertiesFormat
### Properties
* **description**: string (ReadOnly): A description for this rule. Restricted to 140 chars.
* **destinationPortRanges**: string[] (ReadOnly): The destination port ranges.
* **destinations**: [AddressPrefixItem](#addressprefixitem)[] (ReadOnly): The destination address prefixes. CIDR or destination IP ranges.
* **direction**: 'Inbound' | 'Outbound' | string (ReadOnly): The direction of the rule. The direction specifies if the rule will be evaluated on incoming or outgoing traffic.
* **flag**: string: Default rule flag.
* **protocol**: 'Ah' | 'Any' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' | string (ReadOnly): Network protocol this rule applies to.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **sourcePortRanges**: string[] (ReadOnly): The source port ranges.
* **sources**: [AddressPrefixItem](#addressprefixitem)[] (ReadOnly): The CIDR or source IP ranges.

## EffectiveBaseSecurityAdminRule
* **Discriminator**: kind

### Base Properties
* **configurationDescription**: string (ReadOnly): A description of the security admin configuration.
* **id**: string (ReadOnly): Resource ID.
* **ruleCollectionAppliesToGroups**: [NetworkManagerSecurityGroupItem](#networkmanagersecuritygroupitem)[] (ReadOnly): Groups for rule collection
* **ruleCollectionDescription**: string (ReadOnly): A description of the rule collection.
* **ruleGroups**: [ConfigurationGroup](#configurationgroup)[] (ReadOnly): Effective configuration groups.
### EffectiveSecurityAdminRule
#### Properties
* **kind**: 'Custom' (Required): Whether the rule is custom or default.
* **properties**: [AdminPropertiesFormat](#adminpropertiesformat) (ReadOnly): Security admin rule resource.

### EffectiveDefaultSecurityAdminRule
#### Properties
* **kind**: 'Default' (Required): Whether the rule is custom or default.
* **properties**: [DefaultAdminPropertiesFormat](#defaultadminpropertiesformat) (ReadOnly): Security default admin rule resource.


## EffectiveConnectivityConfiguration
### Properties
* **configurationGroups**: [ConfigurationGroup](#configurationgroup)[] (ReadOnly): Effective configuration groups.
* **id**: string (ReadOnly): Resource ID.
* **properties**: [ConnectivityConfigurationProperties](#connectivityconfigurationproperties) (ReadOnly): Properties of network manager connectivity configuration

## EffectiveVirtualNetwork
### Properties
* **id**: string (ReadOnly): Effective vnet Id.
* **location**: string (ReadOnly): Location of vnet.
* **membershipType**: 'Dynamic' | 'Static' | string (ReadOnly): Membership Type.

## EffectiveVirtualNetworksListResult
### Properties
* **skipToken**: string (ReadOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [EffectiveVirtualNetwork](#effectivevirtualnetwork)[] (ReadOnly): Gets a page of EffectiveVirtualNetwork

## EffectiveVirtualNetworksListResult
### Properties
* **skipToken**: string (ReadOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [EffectiveVirtualNetwork](#effectivevirtualnetwork)[] (ReadOnly): Gets a page of EffectiveVirtualNetwork

## EffectiveVirtualNetworksParameter
### Properties
* **conditionalMembers**: string (WriteOnly): Conditional Members.
* **skipToken**: string (WriteOnly): Continuation token for pagination, capturing the next page size and offset, as well as the context of the query.

## Hub
### Properties
* **resourceId**: string: Resource Id.
* **resourceType**: string: Resource Type.

## NetworkGroupProperties
### Properties
* **description**: string: A description of the network group.
* **memberType**: string (Required): Group member type.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## NetworkManagerConnectionProperties
### Properties
* **connectionState**: 'Conflict' | 'Connected' | 'Pending' | 'Rejected' | 'Revoked' | string (ReadOnly): The current scope connection state.
* **description**: string: A description of the scope connection.
* **networkManagerId**: string: Network Manager Id.

## NetworkManagerDeploymentStatus
### Properties
* **commitTime**: string (ReadOnly): Commit Time.
* **configurationIds**: string[] (ReadOnly): List of configuration ids.
* **deploymentStatus**: 'Deployed' | 'Deploying' | 'Failed' | 'NotStarted' | string (ReadOnly): Deployment Status.
* **deploymentType**: 'Connectivity' | 'SecurityAdmin' | 'SecurityUser' | string (ReadOnly): Configuration Deployment Type.
* **errorMessage**: string (ReadOnly): Error Message.
* **region**: string (ReadOnly): Region Name.

## NetworkManagerDeploymentStatusListResult
### Properties
* **skipToken**: string (ReadOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [NetworkManagerDeploymentStatus](#networkmanagerdeploymentstatus)[] (ReadOnly): Gets a page of Network Manager Deployment Status

## NetworkManagerDeploymentStatusParameter
### Properties
* **deploymentTypes**: 'Connectivity' | 'SecurityAdmin' | 'SecurityUser' | string[] (WriteOnly): List of deployment types.
* **regions**: string[] (WriteOnly): List of locations.
* **skipToken**: string (WriteOnly): Continuation token for pagination, capturing the next page size and offset, as well as the context of the query.

## NetworkManagerEffectiveConnectivityConfigurationListResult
### Properties
* **skipToken**: string (ReadOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [EffectiveConnectivityConfiguration](#effectiveconnectivityconfiguration)[] (ReadOnly): Gets a page of NetworkManagerEffectiveConnectivityConfiguration

## NetworkManagerEffectiveSecurityAdminRulesListResult
### Properties
* **skipToken**: string (ReadOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [EffectiveBaseSecurityAdminRule](#effectivebasesecurityadminrule)[] (ReadOnly): Gets a page of NetworkManagerEffectiveSecurityAdminRules

## NetworkManagerProperties
### Properties
* **description**: string: A description of the network manager.
* **networkManagerScopeAccesses**: 'Connectivity' | 'SecurityAdmin' | 'SecurityUser' | string[] (Required): Scope Access.
* **networkManagerScopes**: [NetworkManagerPropertiesNetworkManagerScopes](#networkmanagerpropertiesnetworkmanagerscopes) (Required): Scope of Network Manager.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

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
* **skipToken**: string (WriteOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.

## QueryRequestOptions
### Properties
* **skipToken**: string (WriteOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.

## QueryRequestOptions
### Properties
* **skipToken**: string (WriteOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScopeConnectionProperties
### Properties
* **connectionState**: 'Conflict' | 'Connected' | 'Pending' | 'Rejected' | 'Revoked' | string (ReadOnly): The current scope connection state.
* **description**: string: A description of the scope connection.
* **resourceId**: string: Resource ID.
* **tenantId**: string: Tenant ID.

## SecurityAdminConfigurationPropertiesFormat
### Properties
* **applyOnNetworkIntentPolicyBasedServices**: 'All' | 'None' | string[]: Enum list of network intent policy based services.
* **description**: string: A description of the security configuration.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## SecurityUserConfigurationPropertiesFormat
### Properties
* **deleteExistingNSGs**: 'False' | 'True' | string: Flag if need to delete existing network security groups.
* **description**: string: A description of the security user configuration.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## StaticMemberProperties
### Properties
* **resourceId**: string: Resource Id.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The type of identity that last modified the resource.
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.

## UserRuleCollectionPropertiesFormat
### Properties
* **appliesToGroups**: [NetworkManagerSecurityGroupItem](#networkmanagersecuritygroupitem)[] (Required): Groups for configuration
* **description**: string: A description of the user rule collection.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## UserRulePropertiesFormat
### Properties
* **description**: string: A description for this rule.
* **destinationPortRanges**: string[]: The destination port ranges.
* **destinations**: [AddressPrefixItem](#addressprefixitem)[]: The destination address prefixes. CIDR or destination IP ranges.
* **direction**: 'Inbound' | 'Outbound' | string (Required): The direction of the rule. The direction specifies if the rule will be evaluated on incoming or outgoing traffic.
* **protocol**: 'Ah' | 'Any' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' | string (Required): Network protocol this rule applies to.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **sourcePortRanges**: string[]: The source port ranges.
* **sources**: [AddressPrefixItem](#addressprefixitem)[]: The CIDR or source IP ranges.

