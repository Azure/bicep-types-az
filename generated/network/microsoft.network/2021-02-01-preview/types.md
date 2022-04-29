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


## Resource Microsoft.Network/networkSecurityPerimeters@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkSecurityPerimeterProperties](#networksecurityperimeterproperties): Properties of network security perimeter.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkSecurityPerimeters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityPerimeters/profiles@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NspProfileProperties](#nspprofileproperties): Properties of NSP profile.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkSecurityPerimeters/profiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityPerimeters/profiles/accessRules@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NspAccessRuleProperties](#nspaccessruleproperties): Properties of NSP access rule.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkSecurityPerimeters/profiles/accessRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityPerimeters/resourceAssociations@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NspAssociationProperties](#nspassociationproperties)
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

## NetworkManagerProperties
### Properties
* **description**: string: A description of the network manager.
* **displayName**: string: A friendly name for the network manager.
* **networkManagerScopeAccesses**: 'Connectivity' | 'SecurityAdmin' | 'SecurityUser'[]: Scope Access.
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
* **hubs**: [Hub](#hub)[]: List of hubItems
* **isGlobal**: 'False' | 'True': Flag if global mesh is supported.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The current provisioning state.

## ConnectivityGroupItem
### Properties
* **groupConnectivity**: 'DirectlyConnected' | 'None': Group connectivity type.
* **isGlobal**: 'False' | 'True': Flag if global mesh is supported.
* **networkGroupId**: string: Network group Id.
* **useHubGateway**: 'False' | 'True': Flag if need to use hub gateway.

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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The current provisioning state.

## GroupMembersItem
### Properties
* **resourceId**: string: Resource Id.

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

## NetworkSecurityPerimeterProperties
### Properties
* **description**: string: A description of the network security perimeter.
* **displayName**: string: A friendly name for the network security perimeter.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The current provisioning state.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NspProfileProperties
### Properties
* **accessRulesVersion**: string (ReadOnly): Version number that increases with every update to access rules within the profile.
* **enabledLogCategories**: [LoggingCategory](#loggingcategory)[]: Gets the enabled log categories.

## LoggingCategory
### Properties
* **name**: string: The name of the logging category.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NspAccessRuleProperties
### Properties
* **addressPrefixes**: string[]: Inbound address prefixes (IPv4/IPv6)
* **direction**: 'Inbound' | 'Outbound': Direction that specifies whether the access rules is inbound/outbound.
* **fullyQualifiedDomainNames**: string[]: Outbound rules fully qualified domain name format.
* **networkSecurityPerimeters**: [PerimeterBasedAccessRule](#perimeterbasedaccessrule)[]: Inbound rule specified by the perimeter id.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The current provisioning state.
* **subscriptions**: string[]: Subscription id in the ARM id format.

## PerimeterBasedAccessRule
### Properties
* **id**: string: NSP id in the ARM id format.
* **location**: string (ReadOnly): Location of the NSP supplied.
* **perimeterGuid**: string (ReadOnly): Resource guid of the NSP supplied.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NspAssociationProperties
### Properties
* **accessMode**: 'Audit' | 'Enforced' | 'Learning': Access mode on the association.
* **hasProvisioningIssues**: string (ReadOnly): Specifies if there are provisioning issues
* **privateLinkResource**: [SubResource](#subresource): Reference to another subresource.
* **profile**: [SubResource](#subresource): Reference to another subresource.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The current provisioning state.

## SubResource
### Properties
* **id**: string: Resource ID.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ActiveConfigurationParameter
### Properties
* **regions**: string[] (WriteOnly): List of regions.
* **skipToken**: string (WriteOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.

## ActiveConnectivityConfigurationsListResult
### Properties
* **skipToken**: string (ReadOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [ActiveConnectivityConfiguration](#activeconnectivityconfiguration)[] (ReadOnly): Gets a page of active connectivity configurations.

## ActiveConnectivityConfiguration
### Properties
* **commitTime**: string (ReadOnly): Deployment time string.
* **configurationGroups**: [ConfigurationGroup](#configurationgroup)[] (ReadOnly): Effective configuration groups.
* **id**: string (ReadOnly): Resource ID.
* **properties**: [ConnectivityConfigurationProperties](#connectivityconfigurationproperties) (ReadOnly): Properties of network manager connectivity configuration
* **region**: string (ReadOnly): Deployment region.

## ConfigurationGroup
### Properties
* **id**: string (ReadOnly): Resource ID.
* **properties**: [NetworkGroupProperties](#networkgroupproperties) (ReadOnly): Properties of network group

## ActiveConfigurationParameter
### Properties
* **regions**: string[] (WriteOnly): List of regions.
* **skipToken**: string (WriteOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.

## ActiveSecurityAdminRulesListResult
### Properties
* **skipToken**: string (ReadOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [ActiveBaseSecurityAdminRule](#activebasesecurityadminrule)[] (ReadOnly): Gets a page of active security admin rules.

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
* **properties**: [AdminPropertiesFormat](#adminpropertiesformat) (ReadOnly): Security admin rule resource.

### ActiveDefaultSecurityAdminRule
#### Properties
* **kind**: 'Default' (Required): Whether the rule is custom or default.
* **properties**: [DefaultAdminPropertiesFormat](#defaultadminpropertiesformat) (ReadOnly): Security default admin rule resource.


## ActiveConfigurationParameter
### Properties
* **regions**: string[] (WriteOnly): List of regions.
* **skipToken**: string (WriteOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.

## ActiveSecurityUserRulesListResult
### Properties
* **skipToken**: string (ReadOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [ActiveBaseSecurityUserRule](#activebasesecurityuserrule)[] (ReadOnly): Gets a page of active security user rules.

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
* **properties**: [UserRulePropertiesFormat](#userrulepropertiesformat) (ReadOnly): Security rule resource.

### ActiveDefaultSecurityUserRule
#### Properties
* **kind**: 'Default' (Required): Whether the rule is custom or default.
* **properties**: [DefaultUserRulePropertiesFormat](#defaultuserrulepropertiesformat) (ReadOnly): Security default user rule resource.


## NetworkManagerDeploymentStatusParameter
### Properties
* **deploymentTypes**: 'Connectivity' | 'SecurityAdmin' | 'SecurityUser'[] (WriteOnly): List of deployment types.
* **regions**: string[] (WriteOnly): List of locations.
* **skipToken**: string (WriteOnly): Continuation token for pagination, capturing the next page size and offset, as well as the context of the query.

## NetworkManagerDeploymentStatusListResult
### Properties
* **skipToken**: string (ReadOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [NetworkManagerDeploymentStatus](#networkmanagerdeploymentstatus)[] (ReadOnly): Gets a page of Network Manager Deployment Status

## NetworkManagerDeploymentStatus
### Properties
* **commitTime**: string (ReadOnly): Commit Time.
* **configurationIds**: string[] (ReadOnly): List of configuration ids.
* **deploymentStatus**: 'Deployed' | 'Deploying' | 'Failed' | 'NotStarted' (ReadOnly): Deployment Status.
* **deploymentType**: 'Connectivity' | 'SecurityAdmin' | 'SecurityUser' (ReadOnly): Configuration Deployment Type.
* **errorMessage**: string (ReadOnly): Error Message.
* **region**: string (ReadOnly): Region Name.

## EffectiveVirtualNetworksParameter
### Properties
* **conditionalMembers**: string (WriteOnly): Conditional Members.
* **skipToken**: string (WriteOnly): Continuation token for pagination, capturing the next page size and offset, as well as the context of the query.

## EffectiveVirtualNetworksListResult
### Properties
* **skipToken**: string (ReadOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [EffectiveVirtualNetwork](#effectivevirtualnetwork)[] (ReadOnly): Gets a page of EffectiveVirtualNetwork

## EffectiveVirtualNetwork
### Properties
* **id**: string (ReadOnly): Effective vnet Id.
* **location**: string (ReadOnly): Location of vnet.
* **membershipType**: 'Dynamic' | 'Static' (ReadOnly): Membership Type.

## QueryRequestOptions
### Properties
* **skipToken**: string (WriteOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.

## EffectiveVirtualNetworksListResult
### Properties
* **skipToken**: string (ReadOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [EffectiveVirtualNetwork](#effectivevirtualnetwork)[] (ReadOnly): Gets a page of EffectiveVirtualNetwork

## QueryRequestOptions
### Properties
* **skipToken**: string (WriteOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.

## NetworkManagerEffectiveConnectivityConfigurationListResult
### Properties
* **skipToken**: string (ReadOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [EffectiveConnectivityConfiguration](#effectiveconnectivityconfiguration)[] (ReadOnly): Gets a page of NetworkManagerEffectiveConnectivityConfiguration

## EffectiveConnectivityConfiguration
### Properties
* **configurationGroups**: [ConfigurationGroup](#configurationgroup)[] (ReadOnly): Effective configuration groups.
* **id**: string (ReadOnly): Resource ID.
* **properties**: [ConnectivityConfigurationProperties](#connectivityconfigurationproperties) (ReadOnly): Properties of network manager connectivity configuration

## QueryRequestOptions
### Properties
* **skipToken**: string (WriteOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.

## NetworkManagerEffectiveSecurityAdminRulesListResult
### Properties
* **skipToken**: string (ReadOnly): When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [EffectiveBaseSecurityAdminRule](#effectivebasesecurityadminrule)[] (ReadOnly): Gets a page of NetworkManagerEffectiveSecurityAdminRules

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
* **properties**: [AdminPropertiesFormat](#adminpropertiesformat) (ReadOnly): Security admin rule resource.

### EffectiveDefaultSecurityAdminRule
#### Properties
* **kind**: 'Default' (Required): Whether the rule is custom or default.
* **properties**: [DefaultAdminPropertiesFormat](#defaultadminpropertiesformat) (ReadOnly): Security default admin rule resource.


