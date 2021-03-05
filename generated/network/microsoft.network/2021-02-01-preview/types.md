# Microsoft.Network @ 2021-02-01-preview

## Resource Microsoft.Network/networkManagers@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: NetworkManagerProperties
* **systemData**: SystemData (ReadOnly)
* **tags**: ResourceTags
* **type**: 'Microsoft.Network/networkManagers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkManagers/connectivityConfigurations@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConnectivityConfigurationProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.Network/networkManagers/connectivityConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkManagers/networkGroups@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: NetworkGroupProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.Network/networkManagers/networkGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkManagers/securityConfigurations@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SecurityConfigurationPropertiesFormat
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.Network/networkManagers/securityConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkManagers/securityConfigurations/adminRules@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AdminPropertiesFormat
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.Network/networkManagers/securityConfigurations/adminRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkManagers/securityConfigurations/userRules@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: UserRulePropertiesFormat
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.Network/networkManagers/securityConfigurations/userRules' (ReadOnly, DeployTimeConstant)

## NetworkManagerProperties
### Properties
* **description**: string
* **displayName**: string
* **networkManagerScopeAccesses**: 'Connectivity' | 'Routing' | 'Security'[]
* **networkManagerScopes**: NetworkManagerPropertiesNetworkManagerScopes
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
* **appliesToGroups**: ConnectivityGroupItem[]
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
* **groupMembers**: GroupMembersItem[]
* **memberType**: 'Subnet' | 'VirtualNetwork'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## GroupMembersItem
### Properties
* **resourceId**: string

## SecurityConfigurationPropertiesFormat
### Properties
* **appliesToGroups**: NetworkManagerSecurityGroupItem[]
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
* **appliesToGroups**: NetworkManagerSecurityGroupItem[]
* **description**: string
* **destination**: AddressPrefixItem[]
* **destinationPortRanges**: string[]
* **direction**: 'Inbound' | 'Outbound' (Required)
* **displayName**: string
* **priority**: int
* **protocol**: 'Ah' | 'Any' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' (Required)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **source**: AddressPrefixItem[]
* **sourcePortRanges**: string[]

## AddressPrefixItem
### Properties
* **addressPrefix**: string
* **addressPrefixType**: 'IPPrefix' | 'ServiceTag'

## UserRulePropertiesFormat
### Properties
* **description**: string
* **destination**: AddressPrefixItem[]
* **destinationPortRanges**: string[]
* **direction**: 'Inbound' | 'Outbound' (Required)
* **displayName**: string
* **protocol**: 'Ah' | 'Any' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' (Required)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **source**: AddressPrefixItem[]
* **sourcePortRanges**: string[]

