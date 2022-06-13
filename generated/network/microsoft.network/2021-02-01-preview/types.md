# Microsoft.Network @ 2021-02-01-preview

## Resource Microsoft.Network/networkManagers@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkManagerProperties](#networkmanagerproperties): The network manager properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkManagers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/connectivityConfigurations@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectivityConfigurationProperties](#connectivityconfigurationproperties): Properties of a network manager connectivity configuration
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **type**: 'Microsoft.Network/networkManagers/connectivityConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/networkGroups@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkGroupProperties](#networkgroupproperties): The Network Group properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **type**: 'Microsoft.Network/networkManagers/networkGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityAdminConfigurations@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityConfigurationPropertiesFormat](#securityconfigurationpropertiesformat): Indicates the properties for the network manager security Configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **type**: 'Microsoft.Network/networkManagers/securityAdminConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RuleCollectionPropertiesFormat](#rulecollectionpropertiesformat): Indicates the properties for the network manager rule collection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **type**: 'Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
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


## Resource Microsoft.Network/networkManagers/securityUserConfigurations@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityConfigurationPropertiesFormat](#securityconfigurationpropertiesformat): Indicates the properties for the network manager security Configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **type**: 'Microsoft.Network/networkManagers/securityUserConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RuleCollectionPropertiesFormat](#rulecollectionpropertiesformat): Indicates the properties for the network manager rule collection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **type**: 'Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections/rules@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
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


## Resource Microsoft.Network/networkSecurityPerimeters@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkSecurityPerimeterProperties](#networksecurityperimeterproperties): The network security perimeter properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkSecurityPerimeters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityPerimeters/profiles@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NspProfileProperties](#nspprofileproperties): Properties of the network security perimeter profile
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkSecurityPerimeters/profiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityPerimeters/profiles/accessRules@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NspAccessRuleProperties](#nspaccessruleproperties): Properties of the NSP access rule.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkSecurityPerimeters/profiles/accessRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityPerimeters/resourceAssociationProxies@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NspAssociationProperties](#nspassociationproperties): Properties of the NSP resource association.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkSecurityPerimeters/resourceAssociationProxies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityPerimeters/resourceAssociations@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NspAssociationProperties](#nspassociationproperties): Properties of the NSP resource association.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkSecurityPerimeters/resourceAssociations' (ReadOnly, DeployTimeConstant): The resource type

## Function listActiveConnectivityConfigurations (Microsoft.Network/networkManagers@2021-02-01-preview)
* **Resource**: Microsoft.Network/networkManagers
* **ApiVersion**: 2021-02-01-preview
* **Input**: [ActiveConfigurationParameter](#activeconfigurationparameter)
* **Output**: [ActiveConnectivityConfigurationsListResult](#activeconnectivityconfigurationslistresult)

## Function listActiveSecurityAdminRules (Microsoft.Network/networkManagers@2021-02-01-preview)
* **Resource**: Microsoft.Network/networkManagers
* **ApiVersion**: 2021-02-01-preview
* **Input**: [ActiveConfigurationParameter](#activeconfigurationparameter)
* **Output**: [ActiveSecurityAdminRulesListResult](#activesecurityadminruleslistresult)

## Function listActiveSecurityUserRules (Microsoft.Network/networkManagers@2021-02-01-preview)
* **Resource**: Microsoft.Network/networkManagers
* **ApiVersion**: 2021-02-01-preview
* **Input**: [ActiveConfigurationParameter](#activeconfigurationparameter)
* **Output**: [ActiveSecurityUserRulesListResult](#activesecurityuserruleslistresult)

## Function listDeploymentStatus (Microsoft.Network/networkManagers@2021-02-01-preview)
* **Resource**: Microsoft.Network/networkManagers
* **ApiVersion**: 2021-02-01-preview
* **Input**: [NetworkManagerDeploymentStatusParameter](#networkmanagerdeploymentstatusparameter)
* **Output**: [NetworkManagerDeploymentStatusListResult](#networkmanagerdeploymentstatuslistresult)

## Function listEffectiveVirtualNetworks (Microsoft.Network/networkManagers@2021-02-01-preview)
* **Resource**: Microsoft.Network/networkManagers
* **ApiVersion**: 2021-02-01-preview
* **Input**: [EffectiveVirtualNetworksParameter](#effectivevirtualnetworksparameter)
* **Output**: [EffectiveVirtualNetworksListResult](#effectivevirtualnetworkslistresult)

## Function listEffectiveVirtualNetworks (Microsoft.Network/networkManagers/networkGroups@2021-02-01-preview)
* **Resource**: Microsoft.Network/networkManagers/networkGroups
* **ApiVersion**: 2021-02-01-preview
* **Input**: [QueryRequestOptions](#queryrequestoptions)
* **Output**: [EffectiveVirtualNetworksListResult](#effectivevirtualnetworkslistresult)

## Function listNetworkManagerEffectiveConnectivityConfigurations (Microsoft.Network/virtualNetworks@2021-02-01-preview)
* **Resource**: Microsoft.Network/virtualNetworks
* **ApiVersion**: 2021-02-01-preview
* **Input**: [QueryRequestOptions](#queryrequestoptions)
* **Output**: [NetworkManagerEffectiveConnectivityConfigurationListResult](#networkmanagereffectiveconnectivityconfigurationlistresult)

## Function listNetworkManagerEffectiveSecurityAdminRules (Microsoft.Network/virtualNetworks@2021-02-01-preview)
* **Resource**: Microsoft.Network/virtualNetworks
* **ApiVersion**: 2021-02-01-preview
* **Input**: [QueryRequestOptions](#queryrequestoptions)
* **Output**: [NetworkManagerEffectiveSecurityAdminRulesListResult](#networkmanagereffectivesecurityadminruleslistresult)

## ActiveBaseSecurityAdminRule
* **Discriminator**: kind

### Base Properties
* **commitTime**: string (ReadOnly): Deployment time string.
* **configurationDescription**: string (ReadOnly): A description of the security admin configuration.
* **configurationDisplayName**: string (ReadOnly): A display name of the security admin configuration.
* **id**: string (ReadOnly): Resource ID.
* **region**: string (ReadOnly): Deployment region.
* **ruleCollectionAppliesToGroups**: [NetworkManagerSecurityGroupItem](#networkmanagersecuritygroupitem)[] (ReadOnly): Groups for rule collection
* **ruleCollectionDescription**: string (ReadOnly): A description of the rule collection.
* **ruleCollectionDisplayName**: string (ReadOnly): A display name of the rule collection.
* **ruleGroups**: [ConfigurationGroup](#configurationgroup)[] (ReadOnly): Effective configuration groups.
### ActiveSecurityAdminRule
#### Properties
* **kind**: 'Custom' (Required): Whether the rule is custom or default.
* **properties**: [AdminPropertiesFormat](#adminpropertiesformat) (ReadOnly): Indicates the properties of the security admin rule

### ActiveDefaultSecurityAdminRule
#### Properties
* **kind**: 'Default' (Required): Whether the rule is custom or default.
* **properties**: [DefaultAdminPropertiesFormat](#defaultadminpropertiesformat) (ReadOnly): Indicates the properties of the default security admin rule


## ActiveBaseSecurityUserRule
* **Discriminator**: kind

### Base Properties
* **commitTime**: string (ReadOnly): Deployment time string.
* **configurationDescription**: string (ReadOnly): A description of the security user configuration.
* **configurationDisplayName**: string (ReadOnly): A display name of the security user configuration.
* **id**: string (ReadOnly): Resource ID.
* **region**: string (ReadOnly): Deployment region.
* **ruleCollectionAppliesToGroups**: [NetworkManagerSecurityGroupItem](#networkmanagersecuritygroupitem)[] (ReadOnly): Groups for rule collection
* **ruleCollectionDescription**: string (ReadOnly): A description of the rule collection.
* **ruleCollectionDisplayName**: string (ReadOnly): A display name of the rule collection.
* **ruleGroups**: [ConfigurationGroup](#configurationgroup)[] (ReadOnly): Effective configuration groups.
### ActiveSecurityUserRule
#### Properties
* **kind**: 'Custom' (Required): Whether the rule is custom or default.
* **properties**: [UserRulePropertiesFormat](#userrulepropertiesformat) (ReadOnly): Indicates the properties of the security user rule

### ActiveDefaultSecurityUserRule
#### Properties
* **kind**: 'Default' (Required): Whether the rule is custom or default.
* **properties**: [DefaultUserRulePropertiesFormat](#defaultuserrulepropertiesformat) (ReadOnly): Indicates the properties of the security default user rule


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
* **properties**: [ConnectivityConfigurationProperties](#connectivityconfigurationproperties) (ReadOnly): Properties of a network manager connectivity configuration
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
* **access**: 'Allow' | 'AlwaysAllow' | 'Deny' | string (Required): Indicates the access allowed for this particular rule
* **description**: string: A description for this rule. Restricted to 140 chars.
* **destinationPortRanges**: string[]: The destination port ranges.
* **destinations**: [AddressPrefixItem](#addressprefixitem)[]: The destination address prefixes. CIDR or destination IP ranges.
* **direction**: 'Inbound' | 'Outbound' | string (Required): Indicates if the traffic matched against the rule in inbound or outbound.
* **displayName**: string: A friendly name for the rule.
* **priority**: int: The priority of the rule. The value can be between 1 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
* **protocol**: 'Ah' | 'Any' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' | string (Required): Network protocol this rule applies to.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **sourcePortRanges**: string[]: The source port ranges.
* **sources**: [AddressPrefixItem](#addressprefixitem)[]: The CIDR or source IP ranges.

## ConfigurationGroup
### Properties
* **id**: string (ReadOnly): Resource ID.
* **properties**: [NetworkGroupProperties](#networkgroupproperties) (ReadOnly): The network configuration group properties

## ConnectivityConfigurationProperties
### Properties
* **appliesToGroups**: [ConnectivityGroupItem](#connectivitygroupitem)[]: Groups for configuration
* **connectivityTopology**: 'HubAndSpoke' | 'Mesh' | string (Required): Connectivity topology type.
* **deleteExistingPeering**: 'False' | 'True' | string: Flag if need to remove current existing peerings.
* **description**: string: A description of the connectivity configuration.
* **displayName**: string: A friendly name for the resource.
* **hubs**: [Hub](#hub)[]: List of hubItems
* **isGlobal**: 'False' | 'True' | string: Flag if global mesh is supported.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the connectivity configuration resource.

## ConnectivityGroupItem
### Properties
* **groupConnectivity**: 'DirectlyConnected' | 'None' | string: Group connectivity type.
* **isGlobal**: 'False' | 'True' | string: Flag if global is supported.
* **networkGroupId**: string: Network group Id.
* **useHubGateway**: 'False' | 'True' | string: Flag if need to use hub gateway.

## DefaultAdminPropertiesFormat
### Properties
* **access**: 'Allow' | 'AlwaysAllow' | 'Deny' | string (ReadOnly): Indicates the access allowed for this particular rule
* **description**: string (ReadOnly): A description for this rule. Restricted to 140 chars.
* **destinationPortRanges**: string[] (ReadOnly): The destination port ranges.
* **destinations**: [AddressPrefixItem](#addressprefixitem)[] (ReadOnly): The destination address prefixes. CIDR or destination IP ranges.
* **direction**: 'Inbound' | 'Outbound' | string (ReadOnly): Indicates if the traffic matched against the rule in inbound or outbound.
* **displayName**: string (ReadOnly): A friendly name for the rule.
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
* **displayName**: string (ReadOnly): A friendly name for the rule.
* **flag**: string: Default rule flag.
* **protocol**: 'Ah' | 'Any' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' | string (ReadOnly): Network protocol this rule applies to.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the security configuration user rule resource.
* **sourcePortRanges**: string[] (ReadOnly): The source port ranges.
* **sources**: [AddressPrefixItem](#addressprefixitem)[] (ReadOnly): The CIDR or source IP ranges.

## EffectiveBaseSecurityAdminRule
* **Discriminator**: kind

### Base Properties
* **configurationDescription**: string (ReadOnly): A description of the security admin configuration.
* **configurationDisplayName**: string (ReadOnly): A display name of the security admin configuration.
* **id**: string (ReadOnly): Resource ID.
* **ruleCollectionAppliesToGroups**: [NetworkManagerSecurityGroupItem](#networkmanagersecuritygroupitem)[] (ReadOnly): Groups for rule collection
* **ruleCollectionDescription**: string (ReadOnly): A description of the rule collection.
* **ruleCollectionDisplayName**: string (ReadOnly): A display name of the rule collection.
* **ruleGroups**: [ConfigurationGroup](#configurationgroup)[] (ReadOnly): Effective configuration groups.
### EffectiveSecurityAdminRule
#### Properties
* **kind**: 'Custom' (Required): Whether the rule is custom or default.
* **properties**: [AdminPropertiesFormat](#adminpropertiesformat) (ReadOnly): Indicates the properties of the security admin rule

### EffectiveDefaultSecurityAdminRule
#### Properties
* **kind**: 'Default' (Required): Whether the rule is custom or default.
* **properties**: [DefaultAdminPropertiesFormat](#defaultadminpropertiesformat) (ReadOnly): Indicates the properties of the default security admin rule


## EffectiveConnectivityConfiguration
### Properties
* **configurationGroups**: [ConfigurationGroup](#configurationgroup)[] (ReadOnly): Effective configuration groups.
* **id**: string (ReadOnly): Resource ID.
* **properties**: [ConnectivityConfigurationProperties](#connectivityconfigurationproperties) (ReadOnly): Properties of a network manager connectivity configuration

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

## GroupMembersItem
### Properties
* **resourceId**: string: Resource Id.

## Hub
### Properties
* **resourceId**: string: Resource Id.
* **resourceType**: string: Resource Type.

## NetworkGroupProperties
### Properties
* **conditionalMembership**: string: Network group conditional filter.
* **description**: string: A description of the network group.
* **displayName**: string: A friendly name for the network group.
* **groupMembers**: [GroupMembersItem](#groupmembersitem)[]: Group members of network group.
* **memberType**: string: Group member type.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the scope assignment resource.

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
* **displayName**: string: A friendly name for the network manager.
* **networkManagerScopeAccesses**: 'Connectivity' | 'SecurityAdmin' | 'SecurityUser' | string[]: Scope Access.
* **networkManagerScopes**: [NetworkManagerPropertiesNetworkManagerScopes](#networkmanagerpropertiesnetworkmanagerscopes): Scope of Network Manager.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the scope assignment resource.

## NetworkManagerPropertiesNetworkManagerScopes
### Properties
* **managementGroups**: string[]: List of management groups.
* **subscriptions**: string[]: List of subscriptions.

## NetworkManagerSecurityGroupItem
### Properties
* **networkGroupId**: string: Network manager group Id.

## NetworkSecurityPerimeterProperties
### Properties
* **perimeterGuid**: string: perimeter guid of the network security perimeter.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the scope assignment resource.

## NspAccessRuleProperties
### Properties
* **addressPrefixes**: string[]: Inbound address prefixes (IPv4/IPv6)
* **direction**: 'Inbound' | 'Outbound' | string: Direction that specifies whether the access rules is inbound/outbound.
* **fullyQualifiedDomainNames**: string[]: Outbound rules fully qualified domain name format.
* **networkSecurityPerimeters**: [PerimeterBasedAccessRule](#perimeterbasedaccessrule)[]: Inbound rule specified by the perimeter id.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the scope assignment resource.
* **subscriptions**: string[]: Subscription id in the ARM id format.

## NspAssociationProperties
### Properties
* **accessMode**: 'Audit' | 'Enforced' | 'Learning' | string: Access mode on the association.
* **hasProvisioningIssues**: string (ReadOnly): Specifies if there are provisioning issues
* **privateLinkResource**: [SubResource](#subresource): The PaaS resource to be associated.
* **profile**: [SubResource](#subresource): Profile id to which the PaaS resource is associated.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource  association resource.

## NspProfileProperties
### Properties
* **accessRulesVersion**: string (ReadOnly): Version number that increases with every update to access rules within the profile.

## PerimeterBasedAccessRule
### Properties
* **id**: string: NSP id in the ARM id format.
* **location**: string (ReadOnly): Location of the NSP supplied.
* **perimeterGuid**: string (ReadOnly): Resource guid of the NSP supplied.

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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RuleCollectionPropertiesFormat
### Properties
* **appliesToGroups**: [NetworkManagerSecurityGroupItem](#networkmanagersecuritygroupitem)[]: Groups for configuration
* **description**: string: A description of the rule collection.
* **displayName**: string: A display name of the rule collection.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## SecurityConfigurationPropertiesFormat
### Properties
* **deleteExistingNSGs**: 'False' | 'True' | string: Flag if need to delete existing network security groups.
* **description**: string: A description of the security configuration.
* **displayName**: string: A display name of the security configuration.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **securityType**: 'AdminPolicy' | 'UserPolicy' | string: Security Type.

## SubResource
### Properties
* **id**: string: Resource ID.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The type of identity that last modified the resource.
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## UserRulePropertiesFormat
### Properties
* **description**: string: A description for this rule.
* **destinationPortRanges**: string[]: The destination port ranges.
* **destinations**: [AddressPrefixItem](#addressprefixitem)[]: The destination address prefixes. CIDR or destination IP ranges.
* **direction**: 'Inbound' | 'Outbound' | string (Required): Indicates if the traffic matched against the rule in inbound or outbound.
* **displayName**: string: A friendly name for the rule.
* **protocol**: 'Ah' | 'Any' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' | string (Required): Network protocol this rule applies to.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the security configuration user rule resource.
* **sourcePortRanges**: string[]: The source port ranges.
* **sources**: [AddressPrefixItem](#addressprefixitem)[]: The CIDR or source IP ranges.

