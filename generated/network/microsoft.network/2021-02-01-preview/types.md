# Microsoft.Network @ 2021-02-01-preview

## Resource Microsoft.Network/networkManagers@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NetworkManagerProperties](#networkmanagerproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/networkManagers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkManagers/connectivityConfigurations@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConnectivityConfigurationProperties](#connectivityconfigurationproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Network/networkManagers/connectivityConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkManagers/networkGroups@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NetworkGroupProperties](#networkgroupproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Network/networkManagers/networkGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkManagers/securityConfigurations@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SecurityConfigurationPropertiesFormat](#securityconfigurationpropertiesformat)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Network/networkManagers/securityConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkManagers/securityConfigurations/adminRules@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AdminPropertiesFormat](#adminpropertiesformat)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Network/networkManagers/securityConfigurations/adminRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkManagers/securityConfigurations/userRules@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [UserRulePropertiesFormat](#userrulepropertiesformat)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Network/networkManagers/securityConfigurations/userRules' (ReadOnly, DeployTimeConstant)

## NetworkManagerProperties
### Properties
* **description**: string
* **displayName**: string
* **networkManagerScopeAccesses**: 'Connectivity' | 'Routing' | 'Security'[]
* **networkManagerScopes**: [NetworkManagerPropertiesNetworkManagerScopes](#networkmanagerpropertiesnetworkmanagerscopes)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## NetworkManagerPropertiesNetworkManagerScopes
### Properties
* **managementGroups**: string[]
* **subscriptions**: string[]

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConnectivityConfigurationProperties
### Properties
* **appliesToGroups**: [ConnectivityGroupItem](#connectivitygroupitem)[]
* **connectivityTopology**: 'HubAndSpokeTopology' | 'MeshTopology' (Required)
* **deleteExistingPeering**: bool
* **description**: string
* **displayName**: string
* **hubId**: string
* **isGlobal**: bool
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ConnectivityGroupItem
### Properties
* **groupConnectivity**: 'DirectlyConnected' | 'None'
* **isGlobal**: bool
* **networkGroupId**: string
* **useHubGateway**: bool

## NetworkGroupProperties
### Properties
* **conditionalMembership**: string
* **description**: string
* **displayName**: string
* **groupMembers**: [GroupMembersItem](#groupmembersitem)[]
* **memberType**: 'Subnet' | 'VirtualNetwork'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## GroupMembersItem
### Properties
* **resourceId**: string

## SecurityConfigurationPropertiesFormat
### Properties
* **appliesToGroups**: [NetworkManagerSecurityGroupItem](#networkmanagersecuritygroupitem)[]
* **deleteExistingNSGs**: bool
* **description**: string
* **displayName**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **securityType**: 'AdminPolicy' | 'UserPolicy'

## NetworkManagerSecurityGroupItem
### Properties
* **networkGroupId**: string

## AdminPropertiesFormat
### Properties
* **access**: 'Allow' | 'AlwaysAllow' | 'Deny' (Required)
* **appliesToGroups**: [NetworkManagerSecurityGroupItem](#networkmanagersecuritygroupitem)[]
* **description**: string
* **destination**: [AddressPrefixItem](#addressprefixitem)[]
* **destinationPortRanges**: string[]
* **direction**: 'Inbound' | 'Outbound' (Required)
* **displayName**: string
* **priority**: int
* **protocol**: 'Ah' | 'Any' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' (Required)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **source**: [AddressPrefixItem](#addressprefixitem)[]
* **sourcePortRanges**: string[]

## AddressPrefixItem
### Properties
* **addressPrefix**: string
* **addressPrefixType**: 'IPPrefix' | 'ServiceTag'

## UserRulePropertiesFormat
### Properties
* **description**: string
* **destination**: [AddressPrefixItem](#addressprefixitem)[]
* **destinationPortRanges**: string[]
* **direction**: 'Inbound' | 'Outbound' (Required)
* **displayName**: string
* **protocol**: 'Ah' | 'Any' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' (Required)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **source**: [AddressPrefixItem](#addressprefixitem)[]
* **sourcePortRanges**: string[]

