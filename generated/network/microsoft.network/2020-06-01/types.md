# Microsoft.Network @ 2020-06-01

## Resource Microsoft.Network/applicationGateways@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ManagedServiceIdentity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationGatewayPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/applicationGateways' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Network/applicationGateways/privateEndpointConnections@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationGatewayPrivateEndpointConnectionProperties
* **type**: 'Microsoft.Network/applicationGateways/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: WebApplicationFirewallPolicyPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/applicationSecurityGroups@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationSecurityGroupPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/applicationSecurityGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/azureFirewalls@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: AzureFirewallPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/azureFirewalls' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Network/bastionHosts@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: BastionHostPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/bastionHosts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/connections@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualNetworkGatewayConnectionPropertiesFormat (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/connections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/connections/sharedkey@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Network/connections/sharedkey' (ReadOnly, DeployTimeConstant)
* **value**: string (Required)

## Resource Microsoft.Network/customIpPrefixes@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: CustomIpPrefixPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/customIpPrefixes' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Network/ddosCustomPolicies@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: DdosCustomPolicyPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/ddosCustomPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/ddosProtectionPlans@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: DdosProtectionPlanPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/ddosProtectionPlans' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dscpConfigurations@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: DscpConfigurationPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/dscpConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCircuits@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExpressRouteCircuitPropertiesFormat
* **sku**: ExpressRouteCircuitSku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/expressRouteCircuits' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCircuits/authorizations@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AuthorizationPropertiesFormat
* **type**: 'Microsoft.Network/expressRouteCircuits/authorizations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCircuits/peerings@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExpressRouteCircuitPeeringPropertiesFormat
* **type**: 'Microsoft.Network/expressRouteCircuits/peerings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCircuits/peerings/connections@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExpressRouteCircuitConnectionPropertiesFormat
* **type**: 'Microsoft.Network/expressRouteCircuits/peerings/connections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCrossConnections@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExpressRouteCrossConnectionProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/expressRouteCrossConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCrossConnections/peerings@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExpressRouteCrossConnectionPeeringProperties
* **type**: 'Microsoft.Network/expressRouteCrossConnections/peerings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteGateways@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExpressRouteGatewayProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/expressRouteGateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteGateways/expressRouteConnections@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExpressRouteConnectionProperties
* **type**: 'Microsoft.Network/expressRouteGateways/expressRouteConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/ExpressRoutePorts@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ManagedServiceIdentity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExpressRoutePortPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/ExpressRoutePorts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/firewallPolicies@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: FirewallPolicyPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/firewallPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/firewallPolicies/ruleCollectionGroups@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: FirewallPolicyRuleCollectionGroupProperties
* **type**: 'Microsoft.Network/firewallPolicies/ruleCollectionGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/IpAllocations@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IpAllocationPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/IpAllocations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/ipGroups@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IpGroupPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/ipGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/loadBalancers@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: LoadBalancerPropertiesFormat
* **sku**: LoadBalancerSku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/loadBalancers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/loadBalancers/backendAddressPools@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BackendAddressPoolPropertiesFormat
* **type**: 'Microsoft.Network/loadBalancers/backendAddressPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/loadBalancers/inboundNatRules@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: InboundNatRulePropertiesFormat
* **type**: 'Microsoft.Network/loadBalancers/inboundNatRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/localNetworkGateways@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: LocalNetworkGatewayPropertiesFormat (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/localNetworkGateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/natGateways@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: NatGatewayPropertiesFormat
* **sku**: NatGatewaySku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/natGateways' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Network/networkInterfaces@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: NetworkInterfacePropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/networkInterfaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkInterfaces/tapConfigurations@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: NetworkInterfaceTapConfigurationPropertiesFormat
* **type**: 'Microsoft.Network/networkInterfaces/tapConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkProfiles@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: NetworkProfilePropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/networkProfiles' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkSecurityGroups@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: NetworkSecurityGroupPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/networkSecurityGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkSecurityGroups/securityRules@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SecurityRulePropertiesFormat
* **type**: 'Microsoft.Network/networkSecurityGroups/securityRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkVirtualAppliances@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ManagedServiceIdentity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: NetworkVirtualAppliancePropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/networkVirtualAppliances' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkVirtualAppliances/inboundSecurityRules@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: InboundSecurityRuleProperties
* **type**: 'Microsoft.Network/networkVirtualAppliances/inboundSecurityRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkVirtualAppliances/virtualApplianceSites@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualApplianceSiteProperties
* **type**: 'Microsoft.Network/networkVirtualAppliances/virtualApplianceSites' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkWatchers@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: NetworkWatcherPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/networkWatchers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkWatchers/connectionMonitors@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConnectionMonitorParameters (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/networkWatchers/connectionMonitors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkWatchers/flowLogs@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: FlowLogPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/networkWatchers/flowLogs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkWatchers/packetCaptures@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PacketCaptureParameters (Required)
* **type**: 'Microsoft.Network/networkWatchers/packetCaptures' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/p2svpnGateways@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: P2SVpnGatewayProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/p2svpnGateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateEndpoints@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/privateEndpoints' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateEndpoints/privateDnsZoneGroups@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateDnsZoneGroupPropertiesFormat
* **type**: 'Microsoft.Network/privateEndpoints/privateDnsZoneGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateLinkServices@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateLinkServiceProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/privateLinkServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateLinkServices/privateEndpointConnections@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.Network/privateLinkServices/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/publicIPAddresses@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PublicIPAddressPropertiesFormat
* **sku**: PublicIPAddressSku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/publicIPAddresses' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Network/publicIPPrefixes@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PublicIPPrefixPropertiesFormat
* **sku**: PublicIPPrefixSku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/publicIPPrefixes' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Network/routeFilters@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: RouteFilterPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/routeFilters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/routeFilters/routeFilterRules@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: RouteFilterRulePropertiesFormat
* **type**: 'Microsoft.Network/routeFilters/routeFilterRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/routeTables@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: RouteTablePropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/routeTables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/routeTables/routes@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RoutePropertiesFormat
* **type**: 'Microsoft.Network/routeTables/routes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/securityPartnerProviders@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: SecurityPartnerProviderPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/securityPartnerProviders' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/serviceEndpointPolicies@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServiceEndpointPolicyPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/serviceEndpointPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServiceEndpointPolicyDefinitionPropertiesFormat
* **type**: 'Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualHubs@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualHubProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/virtualHubs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualHubs/bgpConnections@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BgpConnectionProperties
* **type**: 'Microsoft.Network/virtualHubs/bgpConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualHubs/hubRouteTables@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: HubRouteTableProperties
* **type**: 'Microsoft.Network/virtualHubs/hubRouteTables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualHubs/hubVirtualNetworkConnections@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: HubVirtualNetworkConnectionProperties
* **type**: 'Microsoft.Network/virtualHubs/hubVirtualNetworkConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualHubs/ipConfigurations@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: HubIPConfigurationPropertiesFormat
* **type**: 'Microsoft.Network/virtualHubs/ipConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualHubs/routeTables@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualHubRouteTableV2Properties
* **type**: 'Microsoft.Network/virtualHubs/routeTables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualNetworkGateways@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualNetworkGatewayPropertiesFormat (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/virtualNetworkGateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualNetworks@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualNetworkPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/virtualNetworks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualNetworks/subnets@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SubnetPropertiesFormat
* **type**: 'Microsoft.Network/virtualNetworks/subnets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualNetworks/virtualNetworkPeerings@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualNetworkPeeringPropertiesFormat
* **type**: 'Microsoft.Network/virtualNetworks/virtualNetworkPeerings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualNetworkTaps@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualNetworkTapPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/virtualNetworkTaps' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualRouters@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualRouterPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/virtualRouters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualRouters/peerings@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualRouterPeeringProperties
* **type**: 'Microsoft.Network/virtualRouters/peerings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualWans@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualWanProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/virtualWans' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/vpnGateways@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VpnGatewayProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/vpnGateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/vpnGateways/vpnConnections@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VpnConnectionProperties
* **type**: 'Microsoft.Network/vpnGateways/vpnConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/vpnServerConfigurations@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VpnServerConfigurationProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/vpnServerConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/vpnSites@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VpnSiteProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/vpnSites' (ReadOnly, DeployTimeConstant)

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned'
* **userAssignedIdentities**: Dictionary<string,Schemas282UserAssignedIdentitiesValue>

## Dictionary<string,Schemas282UserAssignedIdentitiesValue>
### Additional Properties
* **Additional Properties Type**: schemas:282_userAssignedIdentitiesValue

## schemas:282_userAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## ApplicationGatewayPropertiesFormat
### Properties
* **authenticationCertificates**: ApplicationGatewayAuthenticationCertificate[]
* **autoscaleConfiguration**: ApplicationGatewayAutoscaleConfiguration
* **backendAddressPools**: ApplicationGatewayBackendAddressPool[]
* **backendHttpSettingsCollection**: ApplicationGatewayBackendHttpSettings[]
* **customErrorConfigurations**: ApplicationGatewayCustomError[]
* **enableFips**: bool
* **enableHttp2**: bool
* **firewallPolicy**: SubResource
* **forceFirewallPolicyAssociation**: bool
* **frontendIPConfigurations**: ApplicationGatewayFrontendIPConfiguration[]
* **frontendPorts**: ApplicationGatewayFrontendPort[]
* **gatewayIPConfigurations**: ApplicationGatewayIPConfiguration[]
* **httpListeners**: ApplicationGatewayHttpListener[]
* **operationalState**: 'Running' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **privateEndpointConnections**: ApplicationGatewayPrivateEndpointConnection[] (ReadOnly)
* **privateLinkConfigurations**: ApplicationGatewayPrivateLinkConfiguration[]
* **probes**: ApplicationGatewayProbe[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **redirectConfigurations**: ApplicationGatewayRedirectConfiguration[]
* **requestRoutingRules**: ApplicationGatewayRequestRoutingRule[]
* **resourceGuid**: string (ReadOnly)
* **rewriteRuleSets**: ApplicationGatewayRewriteRuleSet[]
* **sku**: ApplicationGatewaySku
* **sslCertificates**: ApplicationGatewaySslCertificate[]
* **sslPolicy**: ApplicationGatewaySslPolicy
* **sslProfiles**: ApplicationGatewaySslProfile[]
* **trustedClientCertificates**: ApplicationGatewayTrustedClientCertificate[]
* **trustedRootCertificates**: ApplicationGatewayTrustedRootCertificate[]
* **urlPathMaps**: ApplicationGatewayUrlPathMap[]
* **webApplicationFirewallConfiguration**: ApplicationGatewayWebApplicationFirewallConfiguration

## ApplicationGatewayAuthenticationCertificate
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayAuthenticationCertificatePropertiesFormat
* **type**: string (ReadOnly)

## ApplicationGatewayAuthenticationCertificatePropertiesFormat
### Properties
* **data**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ApplicationGatewayAutoscaleConfiguration
### Properties
* **maxCapacity**: int
* **minCapacity**: int (Required)

## ApplicationGatewayBackendAddressPool
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayBackendAddressPoolPropertiesFormat
* **type**: string (ReadOnly)

## ApplicationGatewayBackendAddressPoolPropertiesFormat
### Properties
* **backendAddresses**: ApplicationGatewayBackendAddress[]
* **backendIPConfigurations**: NetworkInterfaceIPConfiguration[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ApplicationGatewayBackendAddress
### Properties
* **fqdn**: string
* **ipAddress**: string

## NetworkInterfaceIPConfiguration
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: NetworkInterfaceIPConfigurationPropertiesFormat

## NetworkInterfaceIPConfigurationPropertiesFormat
### Properties
* **applicationGatewayBackendAddressPools**: ApplicationGatewayBackendAddressPool[]
* **applicationSecurityGroups**: ApplicationSecurityGroup[]
* **loadBalancerBackendAddressPools**: BackendAddressPool[]
* **loadBalancerInboundNatRules**: InboundNatRule[]
* **primary**: bool
* **privateIPAddress**: string
* **privateIPAddressVersion**: 'IPv4' | 'IPv6'
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **privateLinkConnectionProperties**: NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicIPAddress**: PublicIPAddress
* **subnet**: Subnet
* **virtualNetworkTaps**: VirtualNetworkTap[]

## ApplicationSecurityGroup
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: ApplicationSecurityGroupPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## ApplicationSecurityGroupPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## BackendAddressPool
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: BackendAddressPoolPropertiesFormat
* **type**: string (ReadOnly)

## BackendAddressPoolPropertiesFormat
### Properties
* **backendIPConfigurations**: NetworkInterfaceIPConfiguration[] (ReadOnly)
* **loadBalancerBackendAddresses**: LoadBalancerBackendAddress[]
* **loadBalancingRules**: SubResource[] (ReadOnly)
* **outboundRule**: SubResource (ReadOnly)
* **outboundRules**: SubResource[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## LoadBalancerBackendAddress
### Properties
* **name**: string
* **properties**: LoadBalancerBackendAddressPropertiesFormat

## LoadBalancerBackendAddressPropertiesFormat
### Properties
* **ipAddress**: string
* **networkInterfaceIPConfiguration**: SubResource (ReadOnly)
* **virtualNetwork**: SubResource

## SubResource
### Properties
* **id**: string

## InboundNatRule
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: InboundNatRulePropertiesFormat
* **type**: string (ReadOnly)

## InboundNatRulePropertiesFormat
### Properties
* **backendIPConfiguration**: NetworkInterfaceIPConfiguration (ReadOnly)
* **backendPort**: int
* **enableFloatingIP**: bool
* **enableTcpReset**: bool
* **frontendIPConfiguration**: SubResource
* **frontendPort**: int
* **idleTimeoutInMinutes**: int
* **protocol**: 'All' | 'Tcp' | 'Udp'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties
### Properties
* **fqdns**: string[] (ReadOnly)
* **groupId**: string (ReadOnly)
* **requiredMemberName**: string (ReadOnly)

## PublicIPAddress
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: PublicIPAddressPropertiesFormat
* **sku**: PublicIPAddressSku
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)
* **zones**: string[]

## PublicIPAddressPropertiesFormat
### Properties
* **ddosSettings**: DdosSettings
* **dnsSettings**: PublicIPAddressDnsSettings
* **idleTimeoutInMinutes**: int
* **ipAddress**: string
* **ipConfiguration**: IPConfiguration (ReadOnly)
* **ipTags**: IpTag[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicIPAddressVersion**: 'IPv4' | 'IPv6'
* **publicIPAllocationMethod**: 'Dynamic' | 'Static'
* **publicIPPrefix**: SubResource
* **resourceGuid**: string (ReadOnly)

## DdosSettings
### Properties
* **ddosCustomPolicy**: SubResource
* **protectedIP**: bool
* **protectionCoverage**: 'Basic' | 'Standard'

## PublicIPAddressDnsSettings
### Properties
* **domainNameLabel**: string
* **fqdn**: string
* **reverseFqdn**: string

## IPConfiguration
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: IPConfigurationPropertiesFormat

## IPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicIPAddress**: PublicIPAddress
* **subnet**: Subnet

## Subnet
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: SubnetPropertiesFormat

## SubnetPropertiesFormat
### Properties
* **addressPrefix**: string
* **addressPrefixes**: string[]
* **delegations**: Delegation[]
* **ipAllocations**: SubResource[]
* **ipConfigurationProfiles**: IPConfigurationProfile[] (ReadOnly)
* **ipConfigurations**: IPConfiguration[] (ReadOnly)
* **natGateway**: SubResource
* **networkSecurityGroup**: NetworkSecurityGroup
* **privateEndpointNetworkPolicies**: string
* **privateEndpoints**: PrivateEndpoint[] (ReadOnly)
* **privateLinkServiceNetworkPolicies**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **purpose**: string (ReadOnly)
* **resourceNavigationLinks**: ResourceNavigationLink[] (ReadOnly)
* **routeTable**: RouteTable
* **serviceAssociationLinks**: ServiceAssociationLink[] (ReadOnly)
* **serviceEndpointPolicies**: ServiceEndpointPolicy[]
* **serviceEndpoints**: ServiceEndpointPropertiesFormat[]

## Delegation
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ServiceDelegationPropertiesFormat

## ServiceDelegationPropertiesFormat
### Properties
* **actions**: string[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **serviceName**: string

## IPConfigurationProfile
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: IPConfigurationProfilePropertiesFormat
* **type**: string (ReadOnly)

## IPConfigurationProfilePropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **subnet**: Subnet

## NetworkSecurityGroup
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: NetworkSecurityGroupPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## NetworkSecurityGroupPropertiesFormat
### Properties
* **defaultSecurityRules**: SecurityRule[] (ReadOnly)
* **flowLogs**: FlowLog[] (ReadOnly)
* **networkInterfaces**: NetworkInterface[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)
* **securityRules**: SecurityRule[]
* **subnets**: Subnet[] (ReadOnly)

## SecurityRule
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: SecurityRulePropertiesFormat

## SecurityRulePropertiesFormat
### Properties
* **access**: 'Allow' | 'Deny' (Required)
* **description**: string
* **destinationAddressPrefix**: string
* **destinationAddressPrefixes**: string[]
* **destinationApplicationSecurityGroups**: ApplicationSecurityGroup[]
* **destinationPortRange**: string
* **destinationPortRanges**: string[]
* **direction**: 'Inbound' | 'Outbound' (Required)
* **priority**: int
* **protocol**: '*' | 'Ah' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' (Required)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **sourceAddressPrefix**: string
* **sourceAddressPrefixes**: string[]
* **sourceApplicationSecurityGroups**: ApplicationSecurityGroup[]
* **sourcePortRange**: string
* **sourcePortRanges**: string[]

## FlowLog
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: FlowLogPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## FlowLogPropertiesFormat
### Properties
* **enabled**: bool
* **flowAnalyticsConfiguration**: TrafficAnalyticsProperties
* **format**: FlowLogFormatParameters
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **retentionPolicy**: RetentionPolicyParameters
* **storageId**: string (Required)
* **targetResourceGuid**: string (ReadOnly)
* **targetResourceId**: string (Required)

## TrafficAnalyticsProperties
### Properties
* **networkWatcherFlowAnalyticsConfiguration**: TrafficAnalyticsConfigurationProperties

## TrafficAnalyticsConfigurationProperties
### Properties
* **enabled**: bool
* **trafficAnalyticsInterval**: int
* **workspaceId**: string
* **workspaceRegion**: string
* **workspaceResourceId**: string

## FlowLogFormatParameters
### Properties
* **type**: 'JSON'
* **version**: int

## RetentionPolicyParameters
### Properties
* **days**: int
* **enabled**: bool

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## NetworkInterface
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: NetworkInterfacePropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## NetworkInterfacePropertiesFormat
### Properties
* **dnsSettings**: NetworkInterfaceDnsSettings
* **dscpConfiguration**: SubResource (ReadOnly)
* **enableAcceleratedNetworking**: bool
* **enableIPForwarding**: bool
* **hostedWorkloads**: string[] (ReadOnly)
* **ipConfigurations**: NetworkInterfaceIPConfiguration[]
* **macAddress**: string (ReadOnly)
* **networkSecurityGroup**: NetworkSecurityGroup
* **primary**: bool (ReadOnly)
* **privateEndpoint**: PrivateEndpoint (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)
* **tapConfigurations**: NetworkInterfaceTapConfiguration[] (ReadOnly)
* **virtualMachine**: SubResource (ReadOnly)

## NetworkInterfaceDnsSettings
### Properties
* **appliedDnsServers**: string[] (ReadOnly)
* **dnsServers**: string[]
* **internalDnsNameLabel**: string
* **internalDomainNameSuffix**: string (ReadOnly)
* **internalFqdn**: string (ReadOnly)

## PrivateEndpoint
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: PrivateEndpointProperties
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## PrivateEndpointProperties
### Properties
* **customDnsConfigs**: CustomDnsConfigPropertiesFormat[]
* **manualPrivateLinkServiceConnections**: PrivateLinkServiceConnection[]
* **networkInterfaces**: NetworkInterface[] (ReadOnly)
* **privateLinkServiceConnections**: PrivateLinkServiceConnection[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **subnet**: Subnet

## CustomDnsConfigPropertiesFormat
### Properties
* **fqdn**: string
* **ipAddresses**: string[]

## PrivateLinkServiceConnection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: PrivateLinkServiceConnectionProperties
* **type**: string (ReadOnly)

## PrivateLinkServiceConnectionProperties
### Properties
* **groupIds**: string[]
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionState
* **privateLinkServiceId**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **requestMessage**: string

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string
* **description**: string
* **status**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## NetworkInterfaceTapConfiguration
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: NetworkInterfaceTapConfigurationPropertiesFormat
* **type**: string (ReadOnly)

## NetworkInterfaceTapConfigurationPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **virtualNetworkTap**: VirtualNetworkTap

## VirtualNetworkTap
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: VirtualNetworkTapPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## VirtualNetworkTapPropertiesFormat
### Properties
* **destinationLoadBalancerFrontEndIPConfiguration**: FrontendIPConfiguration
* **destinationNetworkInterfaceIPConfiguration**: NetworkInterfaceIPConfiguration
* **destinationPort**: int
* **networkInterfaceTapConfigurations**: NetworkInterfaceTapConfiguration[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)

## FrontendIPConfiguration
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: FrontendIPConfigurationPropertiesFormat
* **type**: string (ReadOnly)
* **zones**: string[]

## FrontendIPConfigurationPropertiesFormat
### Properties
* **inboundNatPools**: SubResource[] (ReadOnly)
* **inboundNatRules**: SubResource[] (ReadOnly)
* **loadBalancingRules**: SubResource[] (ReadOnly)
* **outboundRules**: SubResource[] (ReadOnly)
* **privateIPAddress**: string
* **privateIPAddressVersion**: 'IPv4' | 'IPv6'
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicIPAddress**: PublicIPAddress
* **publicIPPrefix**: SubResource
* **subnet**: Subnet

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ResourceNavigationLink
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ResourceNavigationLinkFormat
* **type**: string (ReadOnly)

## ResourceNavigationLinkFormat
### Properties
* **link**: string
* **linkedResourceType**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## RouteTable
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: RouteTablePropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## RouteTablePropertiesFormat
### Properties
* **disableBgpRoutePropagation**: bool
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **routes**: Route[]
* **subnets**: Subnet[] (ReadOnly)

## Route
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: RoutePropertiesFormat

## RoutePropertiesFormat
### Properties
* **addressPrefix**: string
* **nextHopIpAddress**: string
* **nextHopType**: 'Internet' | 'None' | 'VirtualAppliance' | 'VirtualNetworkGateway' | 'VnetLocal' (Required)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ServiceAssociationLink
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ServiceAssociationLinkPropertiesFormat
* **type**: string (ReadOnly)

## ServiceAssociationLinkPropertiesFormat
### Properties
* **allowDelete**: bool
* **link**: string
* **linkedResourceType**: string
* **locations**: string[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ServiceEndpointPolicy
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: ServiceEndpointPolicyPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## ServiceEndpointPolicyPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)
* **serviceEndpointPolicyDefinitions**: ServiceEndpointPolicyDefinition[]
* **subnets**: Subnet[] (ReadOnly)

## ServiceEndpointPolicyDefinition
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ServiceEndpointPolicyDefinitionPropertiesFormat

## ServiceEndpointPolicyDefinitionPropertiesFormat
### Properties
* **description**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **service**: string
* **serviceResources**: string[]

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ServiceEndpointPropertiesFormat
### Properties
* **locations**: string[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **service**: string

## IpTag
### Properties
* **ipTagType**: string
* **tag**: string

## PublicIPAddressSku
### Properties
* **name**: 'Basic' | 'Standard'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ApplicationGatewayBackendHttpSettings
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayBackendHttpSettingsPropertiesFormat
* **type**: string (ReadOnly)

## ApplicationGatewayBackendHttpSettingsPropertiesFormat
### Properties
* **affinityCookieName**: string
* **authenticationCertificates**: SubResource[]
* **connectionDraining**: ApplicationGatewayConnectionDraining
* **cookieBasedAffinity**: 'Disabled' | 'Enabled'
* **hostName**: string
* **path**: string
* **pickHostNameFromBackendAddress**: bool
* **port**: int
* **probe**: SubResource
* **probeEnabled**: bool
* **protocol**: 'Http' | 'Https'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **requestTimeout**: int
* **trustedRootCertificates**: SubResource[]

## ApplicationGatewayConnectionDraining
### Properties
* **drainTimeoutInSec**: int (Required)
* **enabled**: bool (Required)

## ApplicationGatewayCustomError
### Properties
* **customErrorPageUrl**: string
* **statusCode**: 'HttpStatus403' | 'HttpStatus502'

## ApplicationGatewayFrontendIPConfiguration
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayFrontendIPConfigurationPropertiesFormat
* **type**: string (ReadOnly)

## ApplicationGatewayFrontendIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **privateLinkConfiguration**: SubResource
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicIPAddress**: SubResource
* **subnet**: SubResource

## ApplicationGatewayFrontendPort
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayFrontendPortPropertiesFormat
* **type**: string (ReadOnly)

## ApplicationGatewayFrontendPortPropertiesFormat
### Properties
* **port**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ApplicationGatewayIPConfiguration
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayIPConfigurationPropertiesFormat
* **type**: string (ReadOnly)

## ApplicationGatewayIPConfigurationPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **subnet**: SubResource

## ApplicationGatewayHttpListener
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayHttpListenerPropertiesFormat
* **type**: string (ReadOnly)

## ApplicationGatewayHttpListenerPropertiesFormat
### Properties
* **customErrorConfigurations**: ApplicationGatewayCustomError[]
* **firewallPolicy**: SubResource
* **frontendIPConfiguration**: SubResource
* **frontendPort**: SubResource
* **hostName**: string
* **hostNames**: string[]
* **protocol**: 'Http' | 'Https'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **requireServerNameIndication**: bool
* **sslCertificate**: SubResource
* **sslProfile**: SubResource

## ApplicationGatewayPrivateEndpointConnection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayPrivateEndpointConnectionProperties
* **type**: string (ReadOnly)

## ApplicationGatewayPrivateEndpointConnectionProperties
### Properties
* **linkIdentifier**: string (ReadOnly)
* **privateEndpoint**: PrivateEndpoint (ReadOnly)
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionState
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ApplicationGatewayPrivateLinkConfiguration
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayPrivateLinkConfigurationProperties
* **type**: string (ReadOnly)

## ApplicationGatewayPrivateLinkConfigurationProperties
### Properties
* **ipConfigurations**: ApplicationGatewayPrivateLinkIpConfiguration[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ApplicationGatewayPrivateLinkIpConfiguration
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayPrivateLinkIpConfigurationProperties
* **type**: string (ReadOnly)

## ApplicationGatewayPrivateLinkIpConfigurationProperties
### Properties
* **primary**: bool
* **privateIPAddress**: string
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **subnet**: SubResource

## ApplicationGatewayProbe
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayProbePropertiesFormat
* **type**: string (ReadOnly)

## ApplicationGatewayProbePropertiesFormat
### Properties
* **host**: string
* **interval**: int
* **match**: ApplicationGatewayProbeHealthResponseMatch
* **minServers**: int
* **path**: string
* **pickHostNameFromBackendHttpSettings**: bool
* **port**: int
* **protocol**: 'Http' | 'Https'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **timeout**: int
* **unhealthyThreshold**: int

## ApplicationGatewayProbeHealthResponseMatch
### Properties
* **body**: string
* **statusCodes**: string[]

## ApplicationGatewayRedirectConfiguration
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayRedirectConfigurationPropertiesFormat
* **type**: string (ReadOnly)

## ApplicationGatewayRedirectConfigurationPropertiesFormat
### Properties
* **includePath**: bool
* **includeQueryString**: bool
* **pathRules**: SubResource[]
* **redirectType**: 'Found' | 'Permanent' | 'SeeOther' | 'Temporary'
* **requestRoutingRules**: SubResource[]
* **targetListener**: SubResource
* **targetUrl**: string
* **urlPathMaps**: SubResource[]

## ApplicationGatewayRequestRoutingRule
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayRequestRoutingRulePropertiesFormat
* **type**: string (ReadOnly)

## ApplicationGatewayRequestRoutingRulePropertiesFormat
### Properties
* **backendAddressPool**: SubResource
* **backendHttpSettings**: SubResource
* **httpListener**: SubResource
* **priority**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **redirectConfiguration**: SubResource
* **rewriteRuleSet**: SubResource
* **ruleType**: 'Basic' | 'PathBasedRouting'
* **urlPathMap**: SubResource

## ApplicationGatewayRewriteRuleSet
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayRewriteRuleSetPropertiesFormat

## ApplicationGatewayRewriteRuleSetPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **rewriteRules**: ApplicationGatewayRewriteRule[]

## ApplicationGatewayRewriteRule
### Properties
* **actionSet**: ApplicationGatewayRewriteRuleActionSet
* **conditions**: ApplicationGatewayRewriteRuleCondition[]
* **name**: string
* **ruleSequence**: int

## ApplicationGatewayRewriteRuleActionSet
### Properties
* **requestHeaderConfigurations**: ApplicationGatewayHeaderConfiguration[]
* **responseHeaderConfigurations**: ApplicationGatewayHeaderConfiguration[]
* **urlConfiguration**: ApplicationGatewayUrlConfiguration

## ApplicationGatewayHeaderConfiguration
### Properties
* **headerName**: string
* **headerValue**: string

## ApplicationGatewayUrlConfiguration
### Properties
* **modifiedPath**: string
* **modifiedQueryString**: string
* **reroute**: bool

## ApplicationGatewayRewriteRuleCondition
### Properties
* **ignoreCase**: bool
* **negate**: bool
* **pattern**: string
* **variable**: string

## ApplicationGatewaySku
### Properties
* **capacity**: int
* **name**: 'Standard_Large' | 'Standard_Medium' | 'Standard_Small' | 'Standard_v2' | 'WAF_Large' | 'WAF_Medium' | 'WAF_v2'
* **tier**: 'Standard_v2' | 'Standard' | 'WAF_v2' | 'WAF'

## ApplicationGatewaySslCertificate
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ApplicationGatewaySslCertificatePropertiesFormat
* **type**: string (ReadOnly)

## ApplicationGatewaySslCertificatePropertiesFormat
### Properties
* **data**: string
* **keyVaultSecretId**: string
* **password**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicCertData**: string (ReadOnly)

## ApplicationGatewaySslPolicy
### Properties
* **cipherSuites**: 'TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA256' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA256' | 'TLS_DHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_DHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_RSA_WITH_3DES_EDE_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_RSA_WITH_AES_256_CBC_SHA' | 'TLS_RSA_WITH_AES_256_CBC_SHA256' | 'TLS_RSA_WITH_AES_256_GCM_SHA384'[]
* **disabledSslProtocols**: 'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2'[]
* **minProtocolVersion**: 'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2'
* **policyName**: 'AppGwSslPolicy20150501' | 'AppGwSslPolicy20170401' | 'AppGwSslPolicy20170401S'
* **policyType**: 'Custom' | 'Predefined'

## ApplicationGatewaySslProfile
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ApplicationGatewaySslProfilePropertiesFormat
* **type**: string (ReadOnly)

## ApplicationGatewaySslProfilePropertiesFormat
### Properties
* **clientAuthConfiguration**: ApplicationGatewayClientAuthConfiguration
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **sslPolicy**: ApplicationGatewaySslPolicy
* **trustedClientCertificates**: SubResource[]

## ApplicationGatewayClientAuthConfiguration
### Properties
* **verifyClientCertIssuerDN**: bool

## ApplicationGatewayTrustedClientCertificate
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayTrustedClientCertificatePropertiesFormat
* **type**: string (ReadOnly)

## ApplicationGatewayTrustedClientCertificatePropertiesFormat
### Properties
* **data**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ApplicationGatewayTrustedRootCertificate
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayTrustedRootCertificatePropertiesFormat
* **type**: string (ReadOnly)

## ApplicationGatewayTrustedRootCertificatePropertiesFormat
### Properties
* **data**: string
* **keyVaultSecretId**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ApplicationGatewayUrlPathMap
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayUrlPathMapPropertiesFormat
* **type**: string (ReadOnly)

## ApplicationGatewayUrlPathMapPropertiesFormat
### Properties
* **defaultBackendAddressPool**: SubResource
* **defaultBackendHttpSettings**: SubResource
* **defaultRedirectConfiguration**: SubResource
* **defaultRewriteRuleSet**: SubResource
* **pathRules**: ApplicationGatewayPathRule[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ApplicationGatewayPathRule
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayPathRulePropertiesFormat
* **type**: string (ReadOnly)

## ApplicationGatewayPathRulePropertiesFormat
### Properties
* **backendAddressPool**: SubResource
* **backendHttpSettings**: SubResource
* **firewallPolicy**: SubResource
* **paths**: string[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **redirectConfiguration**: SubResource
* **rewriteRuleSet**: SubResource

## ApplicationGatewayWebApplicationFirewallConfiguration
### Properties
* **disabledRuleGroups**: ApplicationGatewayFirewallDisabledRuleGroup[]
* **enabled**: bool (Required)
* **exclusions**: ApplicationGatewayFirewallExclusion[]
* **fileUploadLimitInMb**: int
* **firewallMode**: 'Detection' | 'Prevention' (Required)
* **maxRequestBodySize**: int
* **maxRequestBodySizeInKb**: int
* **requestBodyCheck**: bool
* **ruleSetType**: string (Required)
* **ruleSetVersion**: string (Required)

## ApplicationGatewayFirewallDisabledRuleGroup
### Properties
* **ruleGroupName**: string (Required)
* **rules**: int[]

## ApplicationGatewayFirewallExclusion
### Properties
* **matchVariable**: string (Required)
* **selector**: string (Required)
* **selectorMatchOperator**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## WebApplicationFirewallPolicyPropertiesFormat
### Properties
* **applicationGateways**: ApplicationGateway[] (ReadOnly)
* **customRules**: WebApplicationFirewallCustomRule[]
* **httpListeners**: SubResource[] (ReadOnly)
* **managedRules**: ManagedRulesDefinition (Required)
* **pathBasedRules**: SubResource[] (ReadOnly)
* **policySettings**: PolicySettings
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly)

## ApplicationGateway
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **identity**: ManagedServiceIdentity
* **location**: string
* **name**: string (ReadOnly)
* **properties**: ApplicationGatewayPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)
* **zones**: string[]

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## WebApplicationFirewallCustomRule
### Properties
* **action**: 'Allow' | 'Block' | 'Log' (Required)
* **etag**: string (ReadOnly)
* **matchConditions**: MatchCondition[] (Required)
* **name**: string
* **priority**: int (Required)
* **ruleType**: 'Invalid' | 'MatchRule' (Required)

## MatchCondition
### Properties
* **matchValues**: string[] (Required)
* **matchVariables**: MatchVariable[] (Required)
* **negationConditon**: bool
* **operator**: 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GeoMatch' | 'GreaterThan' | 'GreaterThanOrEqual' | 'IPMatch' | 'LessThan' | 'LessThanOrEqual' | 'Regex' (Required)
* **transforms**: 'HtmlEntityDecode' | 'Lowercase' | 'RemoveNulls' | 'Trim' | 'UrlDecode' | 'UrlEncode'[]

## MatchVariable
### Properties
* **selector**: string
* **variableName**: 'PostArgs' | 'QueryString' | 'RemoteAddr' | 'RequestBody' | 'RequestCookies' | 'RequestHeaders' | 'RequestMethod' | 'RequestUri' (Required)

## ManagedRulesDefinition
### Properties
* **exclusions**: OwaspCrsExclusionEntry[]
* **managedRuleSets**: ManagedRuleSet[] (Required)

## OwaspCrsExclusionEntry
### Properties
* **matchVariable**: 'RequestArgNames' | 'RequestCookieNames' | 'RequestHeaderNames' (Required)
* **selector**: string (Required)
* **selectorMatchOperator**: 'Contains' | 'EndsWith' | 'Equals' | 'EqualsAny' | 'StartsWith' (Required)

## ManagedRuleSet
### Properties
* **ruleGroupOverrides**: ManagedRuleGroupOverride[]
* **ruleSetType**: string (Required)
* **ruleSetVersion**: string (Required)

## ManagedRuleGroupOverride
### Properties
* **ruleGroupName**: string (Required)
* **rules**: ManagedRuleOverride[]

## ManagedRuleOverride
### Properties
* **ruleId**: string (Required)
* **state**: 'Disabled'

## PolicySettings
### Properties
* **fileUploadLimitInMb**: int
* **maxRequestBodySizeInKb**: int
* **mode**: 'Detection' | 'Prevention'
* **requestBodyCheck**: bool
* **state**: 'Disabled' | 'Enabled'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## AzureFirewallPropertiesFormat
### Properties
* **additionalProperties**: Dictionary<string,String>
* **applicationRuleCollections**: AzureFirewallApplicationRuleCollection[]
* **firewallPolicy**: SubResource
* **hubIPAddresses**: HubIPAddresses
* **ipConfigurations**: AzureFirewallIPConfiguration[]
* **ipGroups**: AzureFirewallIpGroups[] (ReadOnly)
* **managementIpConfiguration**: AzureFirewallIPConfiguration
* **natRuleCollections**: AzureFirewallNatRuleCollection[]
* **networkRuleCollections**: AzureFirewallNetworkRuleCollection[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **sku**: AzureFirewallSku
* **threatIntelMode**: 'Alert' | 'Deny' | 'Off'
* **virtualHub**: SubResource

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## AzureFirewallApplicationRuleCollection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: AzureFirewallApplicationRuleCollectionPropertiesFormat

## AzureFirewallApplicationRuleCollectionPropertiesFormat
### Properties
* **action**: AzureFirewallRCAction
* **priority**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **rules**: AzureFirewallApplicationRule[]

## AzureFirewallRCAction
### Properties
* **type**: 'Allow' | 'Deny'

## AzureFirewallApplicationRule
### Properties
* **description**: string
* **fqdnTags**: string[]
* **name**: string
* **protocols**: AzureFirewallApplicationRuleProtocol[]
* **sourceAddresses**: string[]
* **sourceIpGroups**: string[]
* **targetFqdns**: string[]

## AzureFirewallApplicationRuleProtocol
### Properties
* **port**: int
* **protocolType**: 'Http' | 'Https' | 'Mssql'

## HubIPAddresses
### Properties
* **privateIPAddress**: string
* **publicIPs**: HubPublicIPAddresses

## HubPublicIPAddresses
### Properties
* **addresses**: AzureFirewallPublicIPAddress[]
* **count**: int

## AzureFirewallPublicIPAddress
### Properties
* **address**: string

## AzureFirewallIPConfiguration
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: AzureFirewallIPConfigurationPropertiesFormat
* **type**: string (ReadOnly)

## AzureFirewallIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicIPAddress**: SubResource
* **subnet**: SubResource

## AzureFirewallIpGroups
### Properties
* **changeNumber**: string (ReadOnly)
* **id**: string (ReadOnly)

## AzureFirewallNatRuleCollection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: AzureFirewallNatRuleCollectionProperties

## AzureFirewallNatRuleCollectionProperties
### Properties
* **action**: AzureFirewallNatRCAction
* **priority**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **rules**: AzureFirewallNatRule[]

## AzureFirewallNatRCAction
### Properties
* **type**: 'Dnat' | 'Snat'

## AzureFirewallNatRule
### Properties
* **description**: string
* **destinationAddresses**: string[]
* **destinationPorts**: string[]
* **name**: string
* **protocols**: 'Any' | 'ICMP' | 'TCP' | 'UDP'[]
* **sourceAddresses**: string[]
* **sourceIpGroups**: string[]
* **translatedAddress**: string
* **translatedFqdn**: string
* **translatedPort**: string

## AzureFirewallNetworkRuleCollection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: AzureFirewallNetworkRuleCollectionPropertiesFormat

## AzureFirewallNetworkRuleCollectionPropertiesFormat
### Properties
* **action**: AzureFirewallRCAction
* **priority**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **rules**: AzureFirewallNetworkRule[]

## AzureFirewallNetworkRule
### Properties
* **description**: string
* **destinationAddresses**: string[]
* **destinationFqdns**: string[]
* **destinationIpGroups**: string[]
* **destinationPorts**: string[]
* **name**: string
* **protocols**: 'Any' | 'ICMP' | 'TCP' | 'UDP'[]
* **sourceAddresses**: string[]
* **sourceIpGroups**: string[]

## AzureFirewallSku
### Properties
* **name**: 'AZFW_Hub' | 'AZFW_VNet'
* **tier**: 'Premium' | 'Standard'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## BastionHostPropertiesFormat
### Properties
* **dnsName**: string
* **ipConfigurations**: BastionHostIPConfiguration[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## BastionHostIPConfiguration
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: BastionHostIPConfigurationPropertiesFormat
* **type**: string (ReadOnly)

## BastionHostIPConfigurationPropertiesFormat
### Properties
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicIPAddress**: SubResource (Required)
* **subnet**: SubResource (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## VirtualNetworkGatewayConnectionPropertiesFormat
### Properties
* **authorizationKey**: string
* **connectionProtocol**: 'IKEv1' | 'IKEv2'
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' (ReadOnly)
* **connectionType**: 'ExpressRoute' | 'IPsec' | 'Vnet2Vnet' | 'VPNClient' (Required)
* **dpdTimeoutSeconds**: int
* **egressBytesTransferred**: int (ReadOnly)
* **enableBgp**: bool
* **expressRouteGatewayBypass**: bool
* **ingressBytesTransferred**: int (ReadOnly)
* **ipsecPolicies**: IpsecPolicy[]
* **localNetworkGateway2**: LocalNetworkGateway
* **peer**: SubResource
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)
* **routingWeight**: int
* **sharedKey**: string
* **trafficSelectorPolicies**: TrafficSelectorPolicy[]
* **tunnelConnectionStatus**: TunnelConnectionHealth[] (ReadOnly)
* **useLocalAzureIpAddress**: bool
* **usePolicyBasedTrafficSelectors**: bool
* **virtualNetworkGateway1**: VirtualNetworkGateway (Required)
* **virtualNetworkGateway2**: VirtualNetworkGateway

## IpsecPolicy
### Properties
* **dhGroup**: 'DHGroup1' | 'DHGroup14' | 'DHGroup2' | 'DHGroup2048' | 'DHGroup24' | 'ECP256' | 'ECP384' | 'None' (Required)
* **ikeEncryption**: 'AES128' | 'AES192' | 'AES256' | 'DES' | 'DES3' | 'GCMAES128' | 'GCMAES256' (Required)
* **ikeIntegrity**: 'GCMAES128' | 'GCMAES256' | 'MD5' | 'SHA1' | 'SHA256' | 'SHA384' (Required)
* **ipsecEncryption**: 'AES128' | 'AES192' | 'AES256' | 'DES' | 'DES3' | 'GCMAES128' | 'GCMAES192' | 'GCMAES256' | 'None' (Required)
* **ipsecIntegrity**: 'GCMAES128' | 'GCMAES192' | 'GCMAES256' | 'MD5' | 'SHA1' | 'SHA256' (Required)
* **pfsGroup**: 'ECP256' | 'ECP384' | 'None' | 'PFS1' | 'PFS14' | 'PFS2' | 'PFS2048' | 'PFS24' | 'PFSMM' (Required)
* **saDataSizeKilobytes**: int (Required)
* **saLifeTimeSeconds**: int (Required)

## LocalNetworkGateway
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: LocalNetworkGatewayPropertiesFormat (Required)
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## LocalNetworkGatewayPropertiesFormat
### Properties
* **bgpSettings**: BgpSettings
* **fqdn**: string
* **gatewayIpAddress**: string
* **localNetworkAddressSpace**: AddressSpace
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)

## BgpSettings
### Properties
* **asn**: int
* **bgpPeeringAddress**: string
* **bgpPeeringAddresses**: IPConfigurationBgpPeeringAddress[]
* **peerWeight**: int

## IPConfigurationBgpPeeringAddress
### Properties
* **customBgpIpAddresses**: string[]
* **defaultBgpIpAddresses**: string[] (ReadOnly)
* **ipconfigurationId**: string
* **tunnelIpAddresses**: string[] (ReadOnly)

## AddressSpace
### Properties
* **addressPrefixes**: string[]

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## TrafficSelectorPolicy
### Properties
* **localAddressRanges**: string[] (Required)
* **remoteAddressRanges**: string[] (Required)

## TunnelConnectionHealth
### Properties
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' (ReadOnly)
* **egressBytesTransferred**: int (ReadOnly)
* **ingressBytesTransferred**: int (ReadOnly)
* **lastConnectionEstablishedUtcTime**: string (ReadOnly)
* **tunnel**: string (ReadOnly)

## VirtualNetworkGateway
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: VirtualNetworkGatewayPropertiesFormat (Required)
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## VirtualNetworkGatewayPropertiesFormat
### Properties
* **activeActive**: bool
* **bgpSettings**: BgpSettings
* **customRoutes**: AddressSpace
* **enableBgp**: bool
* **enableDnsForwarding**: bool
* **enablePrivateIpAddress**: bool
* **gatewayDefaultSite**: SubResource
* **gatewayType**: 'ExpressRoute' | 'Vpn'
* **inboundDnsForwardingEndpoint**: string (ReadOnly)
* **ipConfigurations**: VirtualNetworkGatewayIPConfiguration[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)
* **sku**: VirtualNetworkGatewaySku
* **vpnClientConfiguration**: VpnClientConfiguration
* **vpnGatewayGeneration**: 'Generation1' | 'Generation2' | 'None'
* **vpnType**: 'PolicyBased' | 'RouteBased'

## VirtualNetworkGatewayIPConfiguration
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: VirtualNetworkGatewayIPConfigurationPropertiesFormat

## VirtualNetworkGatewayIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string (ReadOnly)
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicIPAddress**: SubResource
* **subnet**: SubResource

## VirtualNetworkGatewaySku
### Properties
* **capacity**: int (ReadOnly)
* **name**: 'Basic' | 'ErGw1AZ' | 'ErGw2AZ' | 'ErGw3AZ' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | 'VpnGw1' | 'VpnGw1AZ' | 'VpnGw2' | 'VpnGw2AZ' | 'VpnGw3' | 'VpnGw3AZ' | 'VpnGw4' | 'VpnGw4AZ' | 'VpnGw5' | 'VpnGw5AZ'
* **tier**: 'Basic' | 'ErGw1AZ' | 'ErGw2AZ' | 'ErGw3AZ' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | 'VpnGw1' | 'VpnGw1AZ' | 'VpnGw2' | 'VpnGw2AZ' | 'VpnGw3' | 'VpnGw3AZ' | 'VpnGw4' | 'VpnGw4AZ' | 'VpnGw5' | 'VpnGw5AZ'

## VpnClientConfiguration
### Properties
* **aadAudience**: string
* **aadIssuer**: string
* **aadTenant**: string
* **radiusServerAddress**: string
* **radiusServers**: RadiusServer[]
* **radiusServerSecret**: string
* **vpnClientAddressPool**: AddressSpace
* **vpnClientIpsecPolicies**: IpsecPolicy[]
* **vpnClientProtocols**: 'IkeV2' | 'OpenVPN' | 'SSTP'[]
* **vpnClientRevokedCertificates**: VpnClientRevokedCertificate[]
* **vpnClientRootCertificates**: VpnClientRootCertificate[]

## RadiusServer
### Properties
* **radiusServerAddress**: string (Required)
* **radiusServerScore**: int
* **radiusServerSecret**: string

## VpnClientRevokedCertificate
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: VpnClientRevokedCertificatePropertiesFormat

## VpnClientRevokedCertificatePropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **thumbprint**: string

## VpnClientRootCertificate
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: VpnClientRootCertificatePropertiesFormat (Required)

## VpnClientRootCertificatePropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicCertData**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## CustomIpPrefixPropertiesFormat
### Properties
* **cidr**: string
* **commissionedState**: 'Commissioned' | 'Commissioning' | 'Decommissioning' | 'Deprovisioning' | 'Provisioned' | 'Provisioning'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicIpPrefixes**: SubResource[] (ReadOnly)
* **resourceGuid**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## DdosCustomPolicyPropertiesFormat
### Properties
* **protocolCustomSettings**: ProtocolCustomSettingsFormat[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicIPAddresses**: SubResource[] (ReadOnly)
* **resourceGuid**: string (ReadOnly)

## ProtocolCustomSettingsFormat
### Properties
* **protocol**: 'Syn' | 'Tcp' | 'Udp'
* **sourceRateOverride**: string
* **triggerRateOverride**: string
* **triggerSensitivityOverride**: 'Default' | 'High' | 'Low' | 'Relaxed'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## DdosProtectionPlanPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)
* **virtualNetworks**: SubResource[] (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## DscpConfigurationPropertiesFormat
### Properties
* **associatedNetworkInterfaces**: NetworkInterface[] (ReadOnly)
* **destinationIpRanges**: QosIpRange[]
* **destinationPortRanges**: QosPortRange[]
* **markings**: int[]
* **protocol**: 'Ah' | 'All' | 'DoNotUse' | 'Esp' | 'Gre' | 'Icmp' | 'Tcp' | 'Udp' | 'Vxlan'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **qosCollectionId**: string (ReadOnly)
* **resourceGuid**: string (ReadOnly)
* **sourceIpRanges**: QosIpRange[]
* **sourcePortRanges**: QosPortRange[]

## QosIpRange
### Properties
* **endIP**: string
* **startIP**: string

## QosPortRange
### Properties
* **end**: int
* **start**: int

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ExpressRouteCircuitPropertiesFormat
### Properties
* **allowClassicOperations**: bool
* **authorizations**: ExpressRouteCircuitAuthorization[]
* **bandwidthInGbps**: int
* **circuitProvisioningState**: string
* **expressRoutePort**: SubResource
* **gatewayManagerEtag**: string
* **globalReachEnabled**: bool
* **peerings**: ExpressRouteCircuitPeering[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **serviceKey**: string
* **serviceProviderNotes**: string
* **serviceProviderProperties**: ExpressRouteCircuitServiceProviderProperties
* **serviceProviderProvisioningState**: 'Deprovisioning' | 'NotProvisioned' | 'Provisioned' | 'Provisioning'
* **stag**: int (ReadOnly)

## ExpressRouteCircuitAuthorization
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: AuthorizationPropertiesFormat
* **type**: string (ReadOnly)

## AuthorizationPropertiesFormat
### Properties
* **authorizationKey**: string
* **authorizationUseStatus**: 'Available' | 'InUse'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ExpressRouteCircuitPeering
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ExpressRouteCircuitPeeringPropertiesFormat
* **type**: string (ReadOnly)

## ExpressRouteCircuitPeeringPropertiesFormat
### Properties
* **azureASN**: int
* **connections**: ExpressRouteCircuitConnection[]
* **expressRouteConnection**: ExpressRouteConnectionId
* **gatewayManagerEtag**: string
* **ipv6PeeringConfig**: Ipv6ExpressRouteCircuitPeeringConfig
* **lastModifiedBy**: string (ReadOnly)
* **microsoftPeeringConfig**: ExpressRouteCircuitPeeringConfig
* **peerASN**: int
* **peeredConnections**: PeerExpressRouteCircuitConnection[] (ReadOnly)
* **peeringType**: 'AzurePrivatePeering' | 'AzurePublicPeering' | 'MicrosoftPeering'
* **primaryAzurePort**: string
* **primaryPeerAddressPrefix**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **routeFilter**: SubResource
* **secondaryAzurePort**: string
* **secondaryPeerAddressPrefix**: string
* **sharedKey**: string
* **state**: 'Disabled' | 'Enabled'
* **stats**: ExpressRouteCircuitStats
* **vlanId**: int

## ExpressRouteCircuitConnection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ExpressRouteCircuitConnectionPropertiesFormat
* **type**: string (ReadOnly)

## ExpressRouteCircuitConnectionPropertiesFormat
### Properties
* **addressPrefix**: string
* **authorizationKey**: string
* **circuitConnectionStatus**: 'Connected' | 'Connecting' | 'Disconnected'
* **expressRouteCircuitPeering**: SubResource
* **ipv6CircuitConnectionConfig**: Ipv6CircuitConnectionConfig
* **peerExpressRouteCircuitPeering**: SubResource
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Ipv6CircuitConnectionConfig
### Properties
* **addressPrefix**: string
* **circuitConnectionStatus**: 'Connected' | 'Connecting' | 'Disconnected' (ReadOnly)

## ExpressRouteConnectionId
### Properties
* **id**: string (ReadOnly)

## Ipv6ExpressRouteCircuitPeeringConfig
### Properties
* **microsoftPeeringConfig**: ExpressRouteCircuitPeeringConfig
* **primaryPeerAddressPrefix**: string
* **routeFilter**: SubResource
* **secondaryPeerAddressPrefix**: string
* **state**: 'Disabled' | 'Enabled'

## ExpressRouteCircuitPeeringConfig
### Properties
* **advertisedCommunities**: string[]
* **advertisedPublicPrefixes**: string[]
* **advertisedPublicPrefixesState**: 'Configured' | 'Configuring' | 'NotConfigured' | 'ValidationNeeded' (ReadOnly)
* **customerASN**: int
* **legacyMode**: int
* **routingRegistryName**: string

## PeerExpressRouteCircuitConnection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: PeerExpressRouteCircuitConnectionPropertiesFormat
* **type**: string (ReadOnly)

## PeerExpressRouteCircuitConnectionPropertiesFormat
### Properties
* **addressPrefix**: string
* **authResourceGuid**: string
* **circuitConnectionStatus**: 'Connected' | 'Connecting' | 'Disconnected'
* **connectionName**: string
* **expressRouteCircuitPeering**: SubResource
* **peerExpressRouteCircuitPeering**: SubResource
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ExpressRouteCircuitStats
### Properties
* **primarybytesIn**: int
* **primarybytesOut**: int
* **secondarybytesIn**: int
* **secondarybytesOut**: int

## ExpressRouteCircuitServiceProviderProperties
### Properties
* **bandwidthInMbps**: int
* **peeringLocation**: string
* **serviceProviderName**: string

## ExpressRouteCircuitSku
### Properties
* **family**: 'MeteredData' | 'UnlimitedData'
* **name**: string
* **tier**: 'Basic' | 'Local' | 'Premium' | 'Standard'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ExpressRouteCrossConnectionProperties
### Properties
* **bandwidthInMbps**: int (ReadOnly)
* **expressRouteCircuit**: ExpressRouteCircuitReference
* **peeringLocation**: string (ReadOnly)
* **peerings**: ExpressRouteCrossConnectionPeering[]
* **primaryAzurePort**: string (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **secondaryAzurePort**: string (ReadOnly)
* **serviceProviderNotes**: string
* **serviceProviderProvisioningState**: 'Deprovisioning' | 'NotProvisioned' | 'Provisioned' | 'Provisioning'
* **sTag**: int (ReadOnly)

## ExpressRouteCircuitReference
### Properties
* **id**: string

## ExpressRouteCrossConnectionPeering
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ExpressRouteCrossConnectionPeeringProperties

## ExpressRouteCrossConnectionPeeringProperties
### Properties
* **azureASN**: int (ReadOnly)
* **gatewayManagerEtag**: string
* **ipv6PeeringConfig**: Ipv6ExpressRouteCircuitPeeringConfig
* **lastModifiedBy**: string (ReadOnly)
* **microsoftPeeringConfig**: ExpressRouteCircuitPeeringConfig
* **peerASN**: int
* **peeringType**: 'AzurePrivatePeering' | 'AzurePublicPeering' | 'MicrosoftPeering'
* **primaryAzurePort**: string (ReadOnly)
* **primaryPeerAddressPrefix**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **secondaryAzurePort**: string (ReadOnly)
* **secondaryPeerAddressPrefix**: string
* **sharedKey**: string
* **state**: 'Disabled' | 'Enabled'
* **vlanId**: int

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ExpressRouteGatewayProperties
### Properties
* **autoScaleConfiguration**: schemas:692_autoScaleConfiguration
* **expressRouteConnections**: ExpressRouteConnection[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **virtualHub**: VirtualHubId (Required)

## schemas:692_autoScaleConfiguration
### Properties
* **bounds**: schemas:692_autoScaleConfiguration_bounds

## schemas:692_autoScaleConfiguration_bounds
### Properties
* **max**: int
* **min**: int

## ExpressRouteConnection
### Properties
* **id**: string
* **name**: string (Required)
* **properties**: ExpressRouteConnectionProperties

## ExpressRouteConnectionProperties
### Properties
* **authorizationKey**: string
* **enableInternetSecurity**: bool
* **expressRouteCircuitPeering**: ExpressRouteCircuitPeeringId (Required)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **routingConfiguration**: RoutingConfiguration
* **routingWeight**: int

## ExpressRouteCircuitPeeringId
### Properties
* **id**: string

## RoutingConfiguration
### Properties
* **associatedRouteTable**: SubResource
* **propagatedRouteTables**: PropagatedRouteTable
* **vnetRoutes**: VnetRoute

## PropagatedRouteTable
### Properties
* **ids**: SubResource[]
* **labels**: string[]

## VnetRoute
### Properties
* **staticRoutes**: StaticRoute[]

## StaticRoute
### Properties
* **addressPrefixes**: string[]
* **name**: string
* **nextHopIpAddress**: string

## VirtualHubId
### Properties
* **id**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ExpressRoutePortPropertiesFormat
### Properties
* **allocationDate**: string (ReadOnly)
* **bandwidthInGbps**: int
* **circuits**: SubResource[] (ReadOnly)
* **encapsulation**: 'Dot1Q' | 'QinQ'
* **etherType**: string (ReadOnly)
* **links**: ExpressRouteLink[]
* **mtu**: string (ReadOnly)
* **peeringLocation**: string
* **provisionedBandwidthInGbps**: int (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)

## ExpressRouteLink
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ExpressRouteLinkPropertiesFormat

## ExpressRouteLinkPropertiesFormat
### Properties
* **adminState**: 'Disabled' | 'Enabled'
* **connectorType**: 'LC' | 'SC' (ReadOnly)
* **interfaceName**: string (ReadOnly)
* **macSecConfig**: ExpressRouteLinkMacSecConfig
* **patchPanelId**: string (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **rackId**: string (ReadOnly)
* **routerName**: string (ReadOnly)

## ExpressRouteLinkMacSecConfig
### Properties
* **cakSecretIdentifier**: string
* **cipher**: 'GcmAes128' | 'GcmAes256' | 'GcmAesXpn128' | 'GcmAesXpn256'
* **cknSecretIdentifier**: string
* **sciState**: 'Disabled' | 'Enabled'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## FirewallPolicyPropertiesFormat
### Properties
* **basePolicy**: SubResource
* **childPolicies**: SubResource[] (ReadOnly)
* **dnsSettings**: DnsSettings
* **firewalls**: SubResource[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **ruleCollectionGroups**: SubResource[] (ReadOnly)
* **threatIntelMode**: 'Alert' | 'Deny' | 'Off'
* **threatIntelWhitelist**: FirewallPolicyThreatIntelWhitelist

## DnsSettings
### Properties
* **enableProxy**: bool
* **requireProxyForNetworkRules**: bool
* **servers**: string[]

## FirewallPolicyThreatIntelWhitelist
### Properties
* **fqdns**: string[]
* **ipAddresses**: string[]

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## FirewallPolicyRuleCollectionGroupProperties
### Properties
* **priority**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **ruleCollections**: FirewallPolicyRuleCollection[]

## FirewallPolicyRuleCollection
* **Discriminator**: ruleCollectionType
### Base Properties
* **name**: string
* **priority**: int
### FirewallPolicyFilterRuleCollection
#### Properties
* **action**: FirewallPolicyFilterRuleCollectionAction
* **ruleCollectionType**: 'FirewallPolicyFilterRuleCollection' (Required)
* **rules**: FirewallPolicyRule[]

### FirewallPolicyNatRuleCollection
#### Properties
* **action**: FirewallPolicyNatRuleCollectionAction
* **ruleCollectionType**: 'FirewallPolicyNatRuleCollection' (Required)
* **rules**: FirewallPolicyRule[]


## FirewallPolicyFilterRuleCollection
### Properties
* **action**: FirewallPolicyFilterRuleCollectionAction
* **ruleCollectionType**: 'FirewallPolicyFilterRuleCollection' (Required)
* **rules**: FirewallPolicyRule[]

## FirewallPolicyFilterRuleCollectionAction
### Properties
* **type**: 'Allow' | 'Deny'

## FirewallPolicyRule
* **Discriminator**: ruleType
### Base Properties
* **description**: string
* **name**: string
### ApplicationRule
#### Properties
* **destinationAddresses**: string[]
* **fqdnTags**: string[]
* **protocols**: FirewallPolicyRuleApplicationProtocol[]
* **ruleType**: 'ApplicationRule' (Required)
* **sourceAddresses**: string[]
* **sourceIpGroups**: string[]
* **targetFqdns**: string[]

### NatRule
#### Properties
* **destinationAddresses**: string[]
* **destinationPorts**: string[]
* **ipProtocols**: 'Any' | 'ICMP' | 'TCP' | 'UDP'[]
* **ruleType**: 'NatRule' (Required)
* **sourceAddresses**: string[]
* **sourceIpGroups**: string[]
* **translatedAddress**: string
* **translatedPort**: string

### NetworkRule
#### Properties
* **destinationAddresses**: string[]
* **destinationFqdns**: string[]
* **destinationIpGroups**: string[]
* **destinationPorts**: string[]
* **ipProtocols**: 'Any' | 'ICMP' | 'TCP' | 'UDP'[]
* **ruleType**: 'NetworkRule' (Required)
* **sourceAddresses**: string[]
* **sourceIpGroups**: string[]


## ApplicationRule
### Properties
* **destinationAddresses**: string[]
* **fqdnTags**: string[]
* **protocols**: FirewallPolicyRuleApplicationProtocol[]
* **ruleType**: 'ApplicationRule' (Required)
* **sourceAddresses**: string[]
* **sourceIpGroups**: string[]
* **targetFqdns**: string[]

## FirewallPolicyRuleApplicationProtocol
### Properties
* **port**: int
* **protocolType**: 'Http' | 'Https'

## NatRule
### Properties
* **destinationAddresses**: string[]
* **destinationPorts**: string[]
* **ipProtocols**: 'Any' | 'ICMP' | 'TCP' | 'UDP'[]
* **ruleType**: 'NatRule' (Required)
* **sourceAddresses**: string[]
* **sourceIpGroups**: string[]
* **translatedAddress**: string
* **translatedPort**: string

## NetworkRule
### Properties
* **destinationAddresses**: string[]
* **destinationFqdns**: string[]
* **destinationIpGroups**: string[]
* **destinationPorts**: string[]
* **ipProtocols**: 'Any' | 'ICMP' | 'TCP' | 'UDP'[]
* **ruleType**: 'NetworkRule' (Required)
* **sourceAddresses**: string[]
* **sourceIpGroups**: string[]

## FirewallPolicyNatRuleCollection
### Properties
* **action**: FirewallPolicyNatRuleCollectionAction
* **ruleCollectionType**: 'FirewallPolicyNatRuleCollection' (Required)
* **rules**: FirewallPolicyRule[]

## FirewallPolicyNatRuleCollectionAction
### Properties
* **type**: 'DNAT'

## IpAllocationPropertiesFormat
### Properties
* **allocationTags**: Dictionary<string,String>
* **ipamAllocationId**: string
* **prefix**: string
* **prefixLength**: int
* **prefixType**: 'IPv4' | 'IPv6'
* **subnet**: SubResource (ReadOnly)
* **type**: 'Hypernet' | 'Undefined'
* **virtualNetwork**: SubResource (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## IpGroupPropertiesFormat
### Properties
* **firewalls**: SubResource[] (ReadOnly)
* **ipAddresses**: string[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## LoadBalancerPropertiesFormat
### Properties
* **backendAddressPools**: BackendAddressPool[]
* **frontendIPConfigurations**: FrontendIPConfiguration[]
* **inboundNatPools**: InboundNatPool[]
* **inboundNatRules**: InboundNatRule[]
* **loadBalancingRules**: LoadBalancingRule[]
* **outboundRules**: OutboundRule[]
* **probes**: Probe[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)

## InboundNatPool
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: InboundNatPoolPropertiesFormat
* **type**: string (ReadOnly)

## InboundNatPoolPropertiesFormat
### Properties
* **backendPort**: int (Required)
* **enableFloatingIP**: bool
* **enableTcpReset**: bool
* **frontendIPConfiguration**: SubResource
* **frontendPortRangeEnd**: int (Required)
* **frontendPortRangeStart**: int (Required)
* **idleTimeoutInMinutes**: int
* **protocol**: 'All' | 'Tcp' | 'Udp' (Required)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## LoadBalancingRule
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: LoadBalancingRulePropertiesFormat
* **type**: string (ReadOnly)

## LoadBalancingRulePropertiesFormat
### Properties
* **backendAddressPool**: SubResource
* **backendPort**: int
* **disableOutboundSnat**: bool
* **enableFloatingIP**: bool
* **enableTcpReset**: bool
* **frontendIPConfiguration**: SubResource
* **frontendPort**: int (Required)
* **idleTimeoutInMinutes**: int
* **loadDistribution**: 'Default' | 'SourceIP' | 'SourceIPProtocol'
* **probe**: SubResource
* **protocol**: 'All' | 'Tcp' | 'Udp' (Required)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## OutboundRule
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: OutboundRulePropertiesFormat
* **type**: string (ReadOnly)

## OutboundRulePropertiesFormat
### Properties
* **allocatedOutboundPorts**: int
* **backendAddressPool**: SubResource (Required)
* **enableTcpReset**: bool
* **frontendIPConfigurations**: SubResource[] (Required)
* **idleTimeoutInMinutes**: int
* **protocol**: 'All' | 'Tcp' | 'Udp' (Required)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Probe
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ProbePropertiesFormat
* **type**: string (ReadOnly)

## ProbePropertiesFormat
### Properties
* **intervalInSeconds**: int
* **loadBalancingRules**: SubResource[] (ReadOnly)
* **numberOfProbes**: int
* **port**: int (Required)
* **protocol**: 'Http' | 'Https' | 'Tcp' (Required)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **requestPath**: string

## LoadBalancerSku
### Properties
* **name**: 'Basic' | 'Standard'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## NatGatewayPropertiesFormat
### Properties
* **idleTimeoutInMinutes**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicIpAddresses**: SubResource[]
* **publicIpPrefixes**: SubResource[]
* **resourceGuid**: string (ReadOnly)
* **subnets**: SubResource[] (ReadOnly)

## NatGatewaySku
### Properties
* **name**: 'Standard'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## NetworkProfilePropertiesFormat
### Properties
* **containerNetworkInterfaceConfigurations**: ContainerNetworkInterfaceConfiguration[]
* **containerNetworkInterfaces**: ContainerNetworkInterface[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)

## ContainerNetworkInterfaceConfiguration
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ContainerNetworkInterfaceConfigurationPropertiesFormat
* **type**: string (ReadOnly)

## ContainerNetworkInterfaceConfigurationPropertiesFormat
### Properties
* **containerNetworkInterfaces**: SubResource[]
* **ipConfigurations**: IPConfigurationProfile[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ContainerNetworkInterface
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ContainerNetworkInterfacePropertiesFormat
* **type**: string (ReadOnly)

## ContainerNetworkInterfacePropertiesFormat
### Properties
* **container**: Container
* **containerNetworkInterfaceConfiguration**: ContainerNetworkInterfaceConfiguration (ReadOnly)
* **ipConfigurations**: ContainerNetworkInterfaceIpConfiguration[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Container
### Properties
* **id**: string

## ContainerNetworkInterfaceIpConfiguration
### Properties
* **etag**: string (ReadOnly)
* **name**: string
* **properties**: ContainerNetworkInterfaceIpConfigurationPropertiesFormat
* **type**: string (ReadOnly)

## ContainerNetworkInterfaceIpConfigurationPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## NetworkVirtualAppliancePropertiesFormat
### Properties
* **addressPrefix**: string (ReadOnly)
* **bootStrapConfigurationBlobs**: string[]
* **cloudInitConfiguration**: string
* **cloudInitConfigurationBlobs**: string[]
* **inboundSecurityRules**: SubResource[] (ReadOnly)
* **nvaSku**: VirtualApplianceSkuProperties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **virtualApplianceAsn**: int
* **virtualApplianceNics**: VirtualApplianceNicProperties[] (ReadOnly)
* **virtualApplianceSites**: SubResource[] (ReadOnly)
* **virtualHub**: SubResource

## VirtualApplianceSkuProperties
### Properties
* **bundledScaleUnit**: string
* **marketPlaceVersion**: string
* **vendor**: string

## VirtualApplianceNicProperties
### Properties
* **name**: string (ReadOnly)
* **privateIpAddress**: string (ReadOnly)
* **publicIpAddress**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## InboundSecurityRuleProperties
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **rules**: InboundSecurityRules[]

## InboundSecurityRules
### Properties
* **destinationPortRange**: int
* **protocol**: 'TCP' | 'UDP'
* **sourceAddressPrefix**: string

## VirtualApplianceSiteProperties
### Properties
* **addressPrefix**: string
* **o365Policy**: Office365PolicyProperties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Office365PolicyProperties
### Properties
* **breakOutCategories**: BreakOutCategoryPolicies

## BreakOutCategoryPolicies
### Properties
* **allow**: bool
* **default**: bool
* **optimize**: bool

## NetworkWatcherPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ConnectionMonitorParameters
### Properties
* **autoStart**: bool
* **connectionMonitorType**: 'MultiEndpoint' | 'SingleSourceDestination' (ReadOnly)
* **destination**: ConnectionMonitorDestination
* **endpoints**: ConnectionMonitorEndpoint[]
* **monitoringIntervalInSeconds**: int
* **monitoringStatus**: string (ReadOnly)
* **notes**: string
* **outputs**: ConnectionMonitorOutput[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **source**: ConnectionMonitorSource
* **startTime**: string (ReadOnly)
* **testConfigurations**: ConnectionMonitorTestConfiguration[]
* **testGroups**: ConnectionMonitorTestGroup[]

## ConnectionMonitorDestination
### Properties
* **address**: string
* **port**: int
* **resourceId**: string

## ConnectionMonitorEndpoint
### Properties
* **address**: string
* **coverageLevel**: 'AboveAverage' | 'Average' | 'BelowAverage' | 'Default' | 'Full' | 'Low'
* **filter**: ConnectionMonitorEndpointFilter
* **name**: string (Required)
* **resourceId**: string
* **scope**: ConnectionMonitorEndpointScope
* **type**: 'AzureSubnet' | 'AzureVM' | 'AzureVNet' | 'ExternalAddress' | 'MMAWorkspaceMachine' | 'MMAWorkspaceNetwork'

## ConnectionMonitorEndpointFilter
### Properties
* **items**: ConnectionMonitorEndpointFilterItem[]
* **type**: 'Include'

## ConnectionMonitorEndpointFilterItem
### Properties
* **address**: string
* **type**: 'AgentAddress'

## ConnectionMonitorEndpointScope
### Properties
* **exclude**: ConnectionMonitorEndpointScopeItem[]
* **include**: ConnectionMonitorEndpointScopeItem[]

## ConnectionMonitorEndpointScopeItem
### Properties
* **address**: string

## ConnectionMonitorOutput
### Properties
* **type**: 'Workspace'
* **workspaceSettings**: ConnectionMonitorWorkspaceSettings

## ConnectionMonitorWorkspaceSettings
### Properties
* **workspaceResourceId**: string

## ConnectionMonitorSource
### Properties
* **port**: int
* **resourceId**: string (Required)

## ConnectionMonitorTestConfiguration
### Properties
* **httpConfiguration**: ConnectionMonitorHttpConfiguration
* **icmpConfiguration**: ConnectionMonitorIcmpConfiguration
* **name**: string (Required)
* **preferredIPVersion**: 'IPv4' | 'IPv6'
* **protocol**: 'Http' | 'Icmp' | 'Tcp' (Required)
* **successThreshold**: ConnectionMonitorSuccessThreshold
* **tcpConfiguration**: ConnectionMonitorTcpConfiguration
* **testFrequencySec**: int

## ConnectionMonitorHttpConfiguration
### Properties
* **method**: 'Get' | 'Post'
* **path**: string
* **port**: int
* **preferHTTPS**: bool
* **requestHeaders**: HTTPHeader[]
* **validStatusCodeRanges**: string[]

## HTTPHeader
### Properties
* **name**: string
* **value**: string

## ConnectionMonitorIcmpConfiguration
### Properties
* **disableTraceRoute**: bool

## ConnectionMonitorSuccessThreshold
### Properties
* **checksFailedPercent**: int
* **roundTripTimeMs**: int

## ConnectionMonitorTcpConfiguration
### Properties
* **destinationPortBehavior**: 'ListenIfAvailable' | 'None'
* **disableTraceRoute**: bool
* **port**: int

## ConnectionMonitorTestGroup
### Properties
* **destinations**: string[] (Required)
* **disable**: bool
* **name**: string (Required)
* **sources**: string[] (Required)
* **testConfigurations**: string[] (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## PacketCaptureParameters
### Properties
* **bytesToCapturePerPacket**: int
* **filters**: PacketCaptureFilter[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **storageLocation**: PacketCaptureStorageLocation (Required)
* **target**: string (Required)
* **timeLimitInSeconds**: int
* **totalBytesPerSession**: int

## PacketCaptureFilter
### Properties
* **localIPAddress**: string
* **localPort**: string
* **protocol**: 'Any' | 'TCP' | 'UDP'
* **remoteIPAddress**: string
* **remotePort**: string

## PacketCaptureStorageLocation
### Properties
* **filePath**: string
* **storageId**: string
* **storagePath**: string

## P2SVpnGatewayProperties
### Properties
* **customDnsServers**: string[]
* **p2SConnectionConfigurations**: P2SConnectionConfiguration[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **virtualHub**: SubResource
* **vpnClientConnectionHealth**: VpnClientConnectionHealth (ReadOnly)
* **vpnGatewayScaleUnit**: int
* **vpnServerConfiguration**: SubResource

## P2SConnectionConfiguration
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: P2SConnectionConfigurationProperties

## P2SConnectionConfigurationProperties
### Properties
* **enableInternetSecurity**: bool
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **routingConfiguration**: RoutingConfiguration
* **vpnClientAddressPool**: AddressSpace

## VpnClientConnectionHealth
### Properties
* **allocatedIpAddresses**: string[]
* **totalEgressBytesTransferred**: int (ReadOnly)
* **totalIngressBytesTransferred**: int (ReadOnly)
* **vpnClientConnectionsCount**: int

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## PrivateDnsZoneGroupPropertiesFormat
### Properties
* **privateDnsZoneConfigs**: PrivateDnsZoneConfig[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## PrivateDnsZoneConfig
### Properties
* **name**: string
* **properties**: PrivateDnsZonePropertiesFormat

## PrivateDnsZonePropertiesFormat
### Properties
* **privateDnsZoneId**: string
* **recordSets**: RecordSet[] (ReadOnly)

## RecordSet
### Properties
* **fqdn**: string
* **ipAddresses**: string[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **recordSetName**: string
* **recordType**: string
* **ttl**: int

## PrivateLinkServiceProperties
### Properties
* **alias**: string (ReadOnly)
* **autoApproval**: schemas:462_autoApproval
* **enableProxyProtocol**: bool
* **fqdns**: string[]
* **ipConfigurations**: PrivateLinkServiceIpConfiguration[]
* **loadBalancerFrontendIpConfigurations**: FrontendIPConfiguration[]
* **networkInterfaces**: NetworkInterface[] (ReadOnly)
* **privateEndpointConnections**: PrivateEndpointConnection[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **visibility**: schemas:462_visibility

## schemas:462_autoApproval
### Properties
* **subscriptions**: string[]

## PrivateLinkServiceIpConfiguration
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: PrivateLinkServiceIpConfigurationProperties
* **type**: string (ReadOnly)

## PrivateLinkServiceIpConfigurationProperties
### Properties
* **primary**: bool
* **privateIPAddress**: string
* **privateIPAddressVersion**: 'IPv4' | 'IPv6'
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **subnet**: Subnet

## PrivateEndpointConnection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: PrivateEndpointConnectionProperties
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **linkIdentifier**: string (ReadOnly)
* **privateEndpoint**: PrivateEndpoint (ReadOnly)
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionState
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## schemas:462_visibility
### Properties
* **subscriptions**: string[]

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## PublicIPPrefixPropertiesFormat
### Properties
* **customIPPrefix**: SubResource
* **ipPrefix**: string (ReadOnly)
* **ipTags**: IpTag[]
* **loadBalancerFrontendIpConfiguration**: SubResource (ReadOnly)
* **prefixLength**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicIPAddresses**: ReferencedPublicIpAddress[] (ReadOnly)
* **publicIPAddressVersion**: 'IPv4' | 'IPv6'
* **resourceGuid**: string (ReadOnly)

## ReferencedPublicIpAddress
### Properties
* **id**: string

## PublicIPPrefixSku
### Properties
* **name**: 'Standard'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## RouteFilterPropertiesFormat
### Properties
* **ipv6Peerings**: ExpressRouteCircuitPeering[] (ReadOnly)
* **peerings**: ExpressRouteCircuitPeering[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **rules**: RouteFilterRule[]

## RouteFilterRule
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **location**: string
* **name**: string
* **properties**: RouteFilterRulePropertiesFormat

## RouteFilterRulePropertiesFormat
### Properties
* **access**: 'Allow' | 'Deny' (Required)
* **communities**: string[] (Required)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **routeFilterRuleType**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## SecurityPartnerProviderPropertiesFormat
### Properties
* **connectionStatus**: 'Connected' | 'NotConnected' | 'PartiallyConnected' | 'Unknown' (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **securityProviderName**: 'Checkpoint' | 'IBoss' | 'ZScaler'
* **virtualHub**: SubResource

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## VirtualHubProperties
### Properties
* **addressPrefix**: string
* **azureFirewall**: SubResource
* **bgpConnections**: SubResource[] (ReadOnly)
* **enableVirtualRouterRoutePropogation**: bool
* **expressRouteGateway**: SubResource
* **ipConfigurations**: SubResource[] (ReadOnly)
* **p2SVpnGateway**: SubResource
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **routeTable**: VirtualHubRouteTable
* **routingState**: 'Failed' | 'None' | 'Provisioned' | 'Provisioning'
* **securityPartnerProvider**: SubResource
* **securityProviderName**: string
* **sku**: string
* **virtualHubRouteTableV2s**: VirtualHubRouteTableV2[]
* **virtualRouterAsn**: int
* **virtualRouterIps**: string[]
* **virtualWan**: SubResource
* **vpnGateway**: SubResource

## VirtualHubRouteTable
### Properties
* **routes**: VirtualHubRoute[]

## VirtualHubRoute
### Properties
* **addressPrefixes**: string[]
* **nextHopIpAddress**: string

## VirtualHubRouteTableV2
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: VirtualHubRouteTableV2Properties

## VirtualHubRouteTableV2Properties
### Properties
* **attachedConnections**: string[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **routes**: VirtualHubRouteV2[]

## VirtualHubRouteV2
### Properties
* **destinations**: string[]
* **destinationType**: string
* **nextHops**: string[]
* **nextHopType**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## BgpConnectionProperties
### Properties
* **connectionState**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' (ReadOnly)
* **peerAsn**: int
* **peerIp**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## HubRouteTableProperties
### Properties
* **associatedConnections**: string[] (ReadOnly)
* **labels**: string[]
* **propagatingConnections**: string[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **routes**: HubRoute[]

## HubRoute
### Properties
* **destinations**: string[] (Required)
* **destinationType**: string (Required)
* **name**: string (Required)
* **nextHop**: string (Required)
* **nextHopType**: string (Required)

## HubVirtualNetworkConnectionProperties
### Properties
* **allowHubToRemoteVnetTransit**: bool
* **allowRemoteVnetToUseHubVnetGateways**: bool
* **enableInternetSecurity**: bool
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **remoteVirtualNetwork**: SubResource
* **routingConfiguration**: RoutingConfiguration

## HubIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicIPAddress**: PublicIPAddress
* **subnet**: Subnet

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## VirtualNetworkPropertiesFormat
### Properties
* **addressSpace**: AddressSpace
* **bgpCommunities**: VirtualNetworkBgpCommunities
* **ddosProtectionPlan**: SubResource
* **dhcpOptions**: DhcpOptions
* **enableDdosProtection**: bool
* **enableVmProtection**: bool
* **ipAllocations**: SubResource[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)
* **subnets**: Subnet[]
* **virtualNetworkPeerings**: VirtualNetworkPeering[]

## VirtualNetworkBgpCommunities
### Properties
* **regionalCommunity**: string (ReadOnly)
* **virtualNetworkCommunity**: string (Required)

## DhcpOptions
### Properties
* **dnsServers**: string[]

## VirtualNetworkPeering
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: VirtualNetworkPeeringPropertiesFormat

## VirtualNetworkPeeringPropertiesFormat
### Properties
* **allowForwardedTraffic**: bool
* **allowGatewayTransit**: bool
* **allowVirtualNetworkAccess**: bool
* **peeringState**: 'Connected' | 'Disconnected' | 'Initiated'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **remoteAddressSpace**: AddressSpace
* **remoteBgpCommunities**: VirtualNetworkBgpCommunities
* **remoteVirtualNetwork**: SubResource
* **useRemoteGateways**: bool

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## VirtualRouterPropertiesFormat
### Properties
* **hostedGateway**: SubResource
* **hostedSubnet**: SubResource
* **peerings**: SubResource[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **virtualRouterAsn**: int
* **virtualRouterIps**: string[]

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## VirtualRouterPeeringProperties
### Properties
* **peerAsn**: int
* **peerIp**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## VirtualWanProperties
### Properties
* **allowBranchToBranchTraffic**: bool
* **allowVnetToVnetTraffic**: bool
* **disableVpnEncryption**: bool
* **office365LocalBreakoutCategory**: 'All' | 'None' | 'Optimize' | 'OptimizeAndAllow'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **type**: string
* **virtualHubs**: SubResource[] (ReadOnly)
* **vpnSites**: SubResource[] (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## VpnGatewayProperties
### Properties
* **bgpSettings**: BgpSettings
* **connections**: VpnConnection[]
* **ipConfigurations**: VpnGatewayIpConfiguration[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **virtualHub**: SubResource
* **vpnGatewayScaleUnit**: int

## VpnConnection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: VpnConnectionProperties

## VpnConnectionProperties
### Properties
* **connectionBandwidth**: int
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown'
* **dpdTimeoutSeconds**: int
* **egressBytesTransferred**: int (ReadOnly)
* **enableBgp**: bool
* **enableInternetSecurity**: bool
* **enableRateLimiting**: bool
* **ingressBytesTransferred**: int (ReadOnly)
* **ipsecPolicies**: IpsecPolicy[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **remoteVpnSite**: SubResource
* **routingConfiguration**: RoutingConfiguration
* **routingWeight**: int
* **sharedKey**: string
* **useLocalAzureIpAddress**: bool
* **usePolicyBasedTrafficSelectors**: bool
* **vpnConnectionProtocolType**: 'IKEv1' | 'IKEv2'
* **vpnLinkConnections**: VpnSiteLinkConnection[]

## VpnSiteLinkConnection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: VpnSiteLinkConnectionProperties
* **type**: string (ReadOnly)

## VpnSiteLinkConnectionProperties
### Properties
* **connectionBandwidth**: int
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown'
* **egressBytesTransferred**: int (ReadOnly)
* **enableBgp**: bool
* **enableRateLimiting**: bool
* **ingressBytesTransferred**: int (ReadOnly)
* **ipsecPolicies**: IpsecPolicy[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **routingWeight**: int
* **sharedKey**: string
* **useLocalAzureIpAddress**: bool
* **usePolicyBasedTrafficSelectors**: bool
* **vpnConnectionProtocolType**: 'IKEv1' | 'IKEv2'
* **vpnSiteLink**: SubResource

## VpnGatewayIpConfiguration
### Properties
* **id**: string
* **privateIpAddress**: string
* **publicIpAddress**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## VpnServerConfigurationProperties
### Properties
* **aadAuthenticationParameters**: AadAuthenticationParameters
* **etag**: string (ReadOnly)
* **name**: string
* **p2SVpnGateways**: P2SVpnGateway[] (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **radiusClientRootCertificates**: VpnServerConfigRadiusClientRootCertificate[]
* **radiusServerAddress**: string
* **radiusServerRootCertificates**: VpnServerConfigRadiusServerRootCertificate[]
* **radiusServers**: RadiusServer[]
* **radiusServerSecret**: string
* **vpnAuthenticationTypes**: 'AAD' | 'Certificate' | 'Radius'[]
* **vpnClientIpsecPolicies**: IpsecPolicy[]
* **vpnClientRevokedCertificates**: VpnServerConfigVpnClientRevokedCertificate[]
* **vpnClientRootCertificates**: VpnServerConfigVpnClientRootCertificate[]
* **vpnProtocols**: 'IkeV2' | 'OpenVPN'[]

## AadAuthenticationParameters
### Properties
* **aadAudience**: string
* **aadIssuer**: string
* **aadTenant**: string

## P2SVpnGateway
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: P2SVpnGatewayProperties
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## VpnServerConfigRadiusClientRootCertificate
### Properties
* **name**: string
* **thumbprint**: string

## VpnServerConfigRadiusServerRootCertificate
### Properties
* **name**: string
* **publicCertData**: string

## VpnServerConfigVpnClientRevokedCertificate
### Properties
* **name**: string
* **thumbprint**: string

## VpnServerConfigVpnClientRootCertificate
### Properties
* **name**: string
* **publicCertData**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## VpnSiteProperties
### Properties
* **addressSpace**: AddressSpace
* **bgpProperties**: BgpSettings
* **deviceProperties**: DeviceProperties
* **ipAddress**: string
* **isSecuritySite**: bool
* **o365Policy**: O365PolicyProperties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **siteKey**: string
* **virtualWan**: SubResource
* **vpnSiteLinks**: VpnSiteLink[]

## DeviceProperties
### Properties
* **deviceModel**: string
* **deviceVendor**: string
* **linkSpeedInMbps**: int

## O365PolicyProperties
### Properties
* **breakOutCategories**: O365BreakOutCategoryPolicies

## O365BreakOutCategoryPolicies
### Properties
* **allow**: bool
* **default**: bool
* **optimize**: bool

## VpnSiteLink
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: VpnSiteLinkProperties
* **type**: string (ReadOnly)

## VpnSiteLinkProperties
### Properties
* **bgpProperties**: VpnLinkBgpSettings
* **fqdn**: string
* **ipAddress**: string
* **linkProperties**: VpnLinkProviderProperties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## VpnLinkBgpSettings
### Properties
* **asn**: int
* **bgpPeeringAddress**: string

## VpnLinkProviderProperties
### Properties
* **linkProviderName**: string
* **linkSpeedInMbps**: int

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

