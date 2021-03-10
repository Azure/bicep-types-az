# Microsoft.Network @ 2020-04-01

## Resource Microsoft.Network/applicationGateways@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationGatewayPropertiesFormat](#applicationgatewaypropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/applicationGateways' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WebApplicationFirewallPolicyPropertiesFormat](#webapplicationfirewallpolicypropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/applicationSecurityGroups@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationSecurityGroupPropertiesFormat](#applicationsecuritygrouppropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/applicationSecurityGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/azureFirewalls@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AzureFirewallPropertiesFormat](#azurefirewallpropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/azureFirewalls' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Network/bastionHosts@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BastionHostPropertiesFormat](#bastionhostpropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/bastionHosts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/connections@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualNetworkGatewayConnectionPropertiesFormat](#virtualnetworkgatewayconnectionpropertiesformat) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/connections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/ddosCustomPolicies@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DdosCustomPolicyPropertiesFormat](#ddoscustompolicypropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/ddosCustomPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/ddosProtectionPlans@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DdosProtectionPlanPropertiesFormat](#ddosprotectionplanpropertiesformat)
* **tags**: [DdosProtectionPlanTags](#ddosprotectionplantags)
* **type**: 'Microsoft.Network/ddosProtectionPlans' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCircuits@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExpressRouteCircuitPropertiesFormat](#expressroutecircuitpropertiesformat)
* **sku**: [ExpressRouteCircuitSku](#expressroutecircuitsku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/expressRouteCircuits' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCircuits/authorizations@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AuthorizationPropertiesFormat](#authorizationpropertiesformat)
* **type**: 'Microsoft.Network/expressRouteCircuits/authorizations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCircuits/peerings@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExpressRouteCircuitPeeringPropertiesFormat](#expressroutecircuitpeeringpropertiesformat)
* **type**: 'Microsoft.Network/expressRouteCircuits/peerings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCircuits/peerings/connections@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExpressRouteCircuitConnectionPropertiesFormat](#expressroutecircuitconnectionpropertiesformat)
* **type**: 'Microsoft.Network/expressRouteCircuits/peerings/connections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCrossConnections@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExpressRouteCrossConnectionProperties](#expressroutecrossconnectionproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/expressRouteCrossConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCrossConnections/peerings@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExpressRouteCrossConnectionPeeringProperties](#expressroutecrossconnectionpeeringproperties)
* **type**: 'Microsoft.Network/expressRouteCrossConnections/peerings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteGateways@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExpressRouteGatewayProperties](#expressroutegatewayproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/expressRouteGateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteGateways/expressRouteConnections@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExpressRouteConnectionProperties](#expressrouteconnectionproperties)
* **type**: 'Microsoft.Network/expressRouteGateways/expressRouteConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/ExpressRoutePorts@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExpressRoutePortPropertiesFormat](#expressrouteportpropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/ExpressRoutePorts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/firewallPolicies@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FirewallPolicyPropertiesFormat](#firewallpolicypropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/firewallPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/firewallPolicies/ruleGroups@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FirewallPolicyRuleGroupProperties](#firewallpolicyrulegroupproperties)
* **type**: 'Microsoft.Network/firewallPolicies/ruleGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/IpAllocations@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IpAllocationPropertiesFormat](#ipallocationpropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/IpAllocations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/ipGroups@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IpGroupPropertiesFormat](#ipgrouppropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/ipGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/loadBalancers@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LoadBalancerPropertiesFormat](#loadbalancerpropertiesformat)
* **sku**: [LoadBalancerSku](#loadbalancersku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/loadBalancers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/loadBalancers/backendAddressPools@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BackendAddressPoolPropertiesFormat](#backendaddresspoolpropertiesformat)
* **type**: 'Microsoft.Network/loadBalancers/backendAddressPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/loadBalancers/inboundNatRules@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [InboundNatRulePropertiesFormat](#inboundnatrulepropertiesformat)
* **type**: 'Microsoft.Network/loadBalancers/inboundNatRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/localNetworkGateways@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LocalNetworkGatewayPropertiesFormat](#localnetworkgatewaypropertiesformat) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/localNetworkGateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/natGateways@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NatGatewayPropertiesFormat](#natgatewaypropertiesformat)
* **sku**: [NatGatewaySku](#natgatewaysku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/natGateways' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Network/networkInterfaces@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/networkInterfaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkInterfaces/tapConfigurations@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NetworkInterfaceTapConfigurationPropertiesFormat](#networkinterfacetapconfigurationpropertiesformat)
* **type**: 'Microsoft.Network/networkInterfaces/tapConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkProfiles@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NetworkProfilePropertiesFormat](#networkprofilepropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/networkProfiles' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkSecurityGroups@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NetworkSecurityGroupPropertiesFormat](#networksecuritygrouppropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/networkSecurityGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkSecurityGroups/securityRules@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SecurityRulePropertiesFormat](#securityrulepropertiesformat)
* **type**: 'Microsoft.Network/networkSecurityGroups/securityRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkVirtualAppliances@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NetworkVirtualAppliancePropertiesFormat](#networkvirtualappliancepropertiesformat)
* **sku**: [VirtualApplianceSkuProperties](#virtualapplianceskuproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/networkVirtualAppliances' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkWatchers@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NetworkWatcherPropertiesFormat](#networkwatcherpropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/networkWatchers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkWatchers/connectionMonitors@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConnectionMonitorParameters](#connectionmonitorparameters) (Required)
* **tags**: [ConnectionMonitorTags](#connectionmonitortags)
* **type**: 'Microsoft.Network/networkWatchers/connectionMonitors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkWatchers/flowLogs@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FlowLogPropertiesFormat](#flowlogpropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/networkWatchers/flowLogs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkWatchers/packetCaptures@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PacketCaptureParameters](#packetcaptureparameters) (Required)
* **type**: 'Microsoft.Network/networkWatchers/packetCaptures' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/p2svpnGateways@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [P2SVpnGatewayProperties](#p2svpngatewayproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/p2svpnGateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateEndpoints@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointProperties](#privateendpointproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/privateEndpoints' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateEndpoints/privateDnsZoneGroups@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateDnsZoneGroupPropertiesFormat](#privatednszonegrouppropertiesformat)
* **type**: 'Microsoft.Network/privateEndpoints/privateDnsZoneGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateLinkServices@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateLinkServiceProperties](#privatelinkserviceproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/privateLinkServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateLinkServices/privateEndpointConnections@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: 'Microsoft.Network/privateLinkServices/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/publicIPAddresses@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat)
* **sku**: [PublicIPAddressSku](#publicipaddresssku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/publicIPAddresses' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Network/publicIPPrefixes@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PublicIPPrefixPropertiesFormat](#publicipprefixpropertiesformat)
* **sku**: [PublicIPPrefixSku](#publicipprefixsku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/publicIPPrefixes' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Network/routeFilters@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RouteFilterPropertiesFormat](#routefilterpropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/routeFilters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/routeFilters/routeFilterRules@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RouteFilterRulePropertiesFormat](#routefilterrulepropertiesformat)
* **type**: 'Microsoft.Network/routeFilters/routeFilterRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/routeTables@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RouteTablePropertiesFormat](#routetablepropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/routeTables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/routeTables/routes@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RoutePropertiesFormat](#routepropertiesformat)
* **type**: 'Microsoft.Network/routeTables/routes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/securityPartnerProviders@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SecurityPartnerProviderPropertiesFormat](#securitypartnerproviderpropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/securityPartnerProviders' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/serviceEndpointPolicies@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServiceEndpointPolicyPropertiesFormat](#serviceendpointpolicypropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/serviceEndpointPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServiceEndpointPolicyDefinitionPropertiesFormat](#serviceendpointpolicydefinitionpropertiesformat)
* **type**: 'Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualHubs@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualHubProperties](#virtualhubproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/virtualHubs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualHubs/hubRouteTables@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [HubRouteTableProperties](#hubroutetableproperties)
* **type**: 'Microsoft.Network/virtualHubs/hubRouteTables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualHubs/routeTables@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualHubRouteTableV2Properties](#virtualhubroutetablev2properties)
* **type**: 'Microsoft.Network/virtualHubs/routeTables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualNetworkGateways@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualNetworkGatewayPropertiesFormat](#virtualnetworkgatewaypropertiesformat) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/virtualNetworkGateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualNetworks@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualNetworkPropertiesFormat](#virtualnetworkpropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/virtualNetworks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualNetworks/subnets@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SubnetPropertiesFormat](#subnetpropertiesformat)
* **type**: 'Microsoft.Network/virtualNetworks/subnets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualNetworks/virtualNetworkPeerings@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualNetworkPeeringPropertiesFormat](#virtualnetworkpeeringpropertiesformat)
* **type**: 'Microsoft.Network/virtualNetworks/virtualNetworkPeerings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualNetworkTaps@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualNetworkTapPropertiesFormat](#virtualnetworktappropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/virtualNetworkTaps' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualRouters@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualRouterPropertiesFormat](#virtualrouterpropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/virtualRouters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualRouters/peerings@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualRouterPeeringProperties](#virtualrouterpeeringproperties)
* **type**: 'Microsoft.Network/virtualRouters/peerings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/vpnGateways@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VpnGatewayProperties](#vpngatewayproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/vpnGateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/vpnGateways/vpnConnections@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VpnConnectionProperties](#vpnconnectionproperties)
* **type**: 'Microsoft.Network/vpnGateways/vpnConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/vpnServerConfigurations@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VpnServerConfigurationProperties](#vpnserverconfigurationproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/vpnServerConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/vpnSites@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VpnSiteProperties](#vpnsiteproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/vpnSites' (ReadOnly, DeployTimeConstant)

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned'
* **userAssignedIdentities**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities)

## ManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties](#components1jq1t4ischemasmanagedserviceidentitypropertiesuserassignedidentitiesadditionalproperties)

## Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## ApplicationGatewayPropertiesFormat
### Properties
* **authenticationCertificates**: [ApplicationGatewayAuthenticationCertificate](#applicationgatewayauthenticationcertificate)[]
* **autoscaleConfiguration**: [ApplicationGatewayAutoscaleConfiguration](#applicationgatewayautoscaleconfiguration)
* **backendAddressPools**: [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)[]
* **backendHttpSettingsCollection**: [ApplicationGatewayBackendHttpSettings](#applicationgatewaybackendhttpsettings)[]
* **customErrorConfigurations**: [ApplicationGatewayCustomError](#applicationgatewaycustomerror)[]
* **enableFips**: bool
* **enableHttp2**: bool
* **firewallPolicy**: [SubResource](#subresource)
* **forceFirewallPolicyAssociation**: bool
* **frontendIPConfigurations**: [ApplicationGatewayFrontendIPConfiguration](#applicationgatewayfrontendipconfiguration)[]
* **frontendPorts**: [ApplicationGatewayFrontendPort](#applicationgatewayfrontendport)[]
* **gatewayIPConfigurations**: [ApplicationGatewayIPConfiguration](#applicationgatewayipconfiguration)[]
* **httpListeners**: [ApplicationGatewayHttpListener](#applicationgatewayhttplistener)[]
* **operationalState**: 'Running' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **probes**: [ApplicationGatewayProbe](#applicationgatewayprobe)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **redirectConfigurations**: [ApplicationGatewayRedirectConfiguration](#applicationgatewayredirectconfiguration)[]
* **requestRoutingRules**: [ApplicationGatewayRequestRoutingRule](#applicationgatewayrequestroutingrule)[]
* **resourceGuid**: string (ReadOnly)
* **rewriteRuleSets**: [ApplicationGatewayRewriteRuleSet](#applicationgatewayrewriteruleset)[]
* **sku**: [ApplicationGatewaySku](#applicationgatewaysku)
* **sslCertificates**: [ApplicationGatewaySslCertificate](#applicationgatewaysslcertificate)[]
* **sslPolicy**: [ApplicationGatewaySslPolicy](#applicationgatewaysslpolicy)
* **trustedRootCertificates**: [ApplicationGatewayTrustedRootCertificate](#applicationgatewaytrustedrootcertificate)[]
* **urlPathMaps**: [ApplicationGatewayUrlPathMap](#applicationgatewayurlpathmap)[]
* **webApplicationFirewallConfiguration**: [ApplicationGatewayWebApplicationFirewallConfiguration](#applicationgatewaywebapplicationfirewallconfiguration)

## ApplicationGatewayAuthenticationCertificate
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayAuthenticationCertificatePropertiesFormat](#applicationgatewayauthenticationcertificatepropertiesformat)
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
* **properties**: [ApplicationGatewayBackendAddressPoolPropertiesFormat](#applicationgatewaybackendaddresspoolpropertiesformat)
* **type**: string (ReadOnly)

## ApplicationGatewayBackendAddressPoolPropertiesFormat
### Properties
* **backendAddresses**: [ApplicationGatewayBackendAddress](#applicationgatewaybackendaddress)[]
* **backendIPConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[] (ReadOnly)
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
* **properties**: [NetworkInterfaceIPConfigurationPropertiesFormat](#networkinterfaceipconfigurationpropertiesformat)

## NetworkInterfaceIPConfigurationPropertiesFormat
### Properties
* **applicationGatewayBackendAddressPools**: [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)[]
* **applicationSecurityGroups**: [ApplicationSecurityGroup](#applicationsecuritygroup)[]
* **loadBalancerBackendAddressPools**: [BackendAddressPool](#backendaddresspool)[]
* **loadBalancerInboundNatRules**: [InboundNatRule](#inboundnatrule)[]
* **primary**: bool
* **privateIPAddress**: string
* **privateIPAddressVersion**: 'IPv4' | 'IPv6'
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **privateLinkConnectionProperties**: [NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties](#networkinterfaceipconfigurationprivatelinkconnectionproperties) (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicIPAddress**: [PublicIPAddress](#publicipaddress)
* **subnet**: [Subnet](#subnet)
* **virtualNetworkTaps**: [VirtualNetworkTap](#virtualnetworktap)[]

## ApplicationSecurityGroup
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: [ApplicationSecurityGroupPropertiesFormat](#applicationsecuritygrouppropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: string (ReadOnly)

## ApplicationSecurityGroupPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BackendAddressPool
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [BackendAddressPoolPropertiesFormat](#backendaddresspoolpropertiesformat)
* **type**: string (ReadOnly)

## BackendAddressPoolPropertiesFormat
### Properties
* **backendIPConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[] (ReadOnly)
* **loadBalancerBackendAddresses**: [LoadBalancerBackendAddress](#loadbalancerbackendaddress)[]
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly)
* **outboundRule**: [SubResource](#subresource) (ReadOnly)
* **outboundRules**: [SubResource](#subresource)[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## LoadBalancerBackendAddress
### Properties
* **name**: string
* **properties**: [LoadBalancerBackendAddressPropertiesFormat](#loadbalancerbackendaddresspropertiesformat)

## LoadBalancerBackendAddressPropertiesFormat
### Properties
* **ipAddress**: string
* **networkInterfaceIPConfiguration**: [SubResource](#subresource) (ReadOnly)
* **virtualNetwork**: [SubResource](#subresource)

## SubResource
### Properties
* **id**: string

## InboundNatRule
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [InboundNatRulePropertiesFormat](#inboundnatrulepropertiesformat)
* **type**: string (ReadOnly)

## InboundNatRulePropertiesFormat
### Properties
* **backendIPConfiguration**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration) (ReadOnly)
* **backendPort**: int
* **enableFloatingIP**: bool
* **enableTcpReset**: bool
* **frontendIPConfiguration**: [SubResource](#subresource)
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
* **properties**: [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat)
* **sku**: [PublicIPAddressSku](#publicipaddresssku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: string (ReadOnly)
* **zones**: string[]

## PublicIPAddressPropertiesFormat
### Properties
* **ddosSettings**: [DdosSettings](#ddossettings)
* **dnsSettings**: [PublicIPAddressDnsSettings](#publicipaddressdnssettings)
* **idleTimeoutInMinutes**: int
* **ipAddress**: string
* **ipConfiguration**: [IPConfiguration](#ipconfiguration) (ReadOnly)
* **ipTags**: [IpTag](#iptag)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicIPAddressVersion**: 'IPv4' | 'IPv6'
* **publicIPAllocationMethod**: 'Dynamic' | 'Static'
* **publicIPPrefix**: [SubResource](#subresource)
* **resourceGuid**: string (ReadOnly)

## DdosSettings
### Properties
* **ddosCustomPolicy**: [SubResource](#subresource)
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
* **properties**: [IPConfigurationPropertiesFormat](#ipconfigurationpropertiesformat)

## IPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicIPAddress**: [PublicIPAddress](#publicipaddress)
* **subnet**: [Subnet](#subnet)

## Subnet
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [SubnetPropertiesFormat](#subnetpropertiesformat)

## SubnetPropertiesFormat
### Properties
* **addressPrefix**: string
* **addressPrefixes**: string[]
* **delegations**: [Delegation](#delegation)[]
* **ipAllocations**: [SubResource](#subresource)[]
* **ipConfigurationProfiles**: [IPConfigurationProfile](#ipconfigurationprofile)[] (ReadOnly)
* **ipConfigurations**: [IPConfiguration](#ipconfiguration)[] (ReadOnly)
* **natGateway**: [SubResource](#subresource)
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup)
* **privateEndpointNetworkPolicies**: string
* **privateEndpoints**: [PrivateEndpoint](#privateendpoint)[] (ReadOnly)
* **privateLinkServiceNetworkPolicies**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **purpose**: string (ReadOnly)
* **resourceNavigationLinks**: [ResourceNavigationLink](#resourcenavigationlink)[] (ReadOnly)
* **routeTable**: [RouteTable](#routetable)
* **serviceAssociationLinks**: [ServiceAssociationLink](#serviceassociationlink)[] (ReadOnly)
* **serviceEndpointPolicies**: [ServiceEndpointPolicy](#serviceendpointpolicy)[]
* **serviceEndpoints**: [ServiceEndpointPropertiesFormat](#serviceendpointpropertiesformat)[]

## Delegation
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [ServiceDelegationPropertiesFormat](#servicedelegationpropertiesformat)

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
* **properties**: [IPConfigurationProfilePropertiesFormat](#ipconfigurationprofilepropertiesformat)
* **type**: string (ReadOnly)

## IPConfigurationProfilePropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **subnet**: [Subnet](#subnet)

## NetworkSecurityGroup
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: [NetworkSecurityGroupPropertiesFormat](#networksecuritygrouppropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: string (ReadOnly)

## NetworkSecurityGroupPropertiesFormat
### Properties
* **defaultSecurityRules**: [SecurityRule](#securityrule)[] (ReadOnly)
* **flowLogs**: [FlowLog](#flowlog)[] (ReadOnly)
* **networkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)
* **securityRules**: [SecurityRule](#securityrule)[]
* **subnets**: [Subnet](#subnet)[] (ReadOnly)

## SecurityRule
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [SecurityRulePropertiesFormat](#securityrulepropertiesformat)

## SecurityRulePropertiesFormat
### Properties
* **access**: 'Allow' | 'Deny' (Required)
* **description**: string
* **destinationAddressPrefix**: string
* **destinationAddressPrefixes**: string[]
* **destinationApplicationSecurityGroups**: [ApplicationSecurityGroup](#applicationsecuritygroup)[]
* **destinationPortRange**: string
* **destinationPortRanges**: string[]
* **direction**: 'Inbound' | 'Outbound' (Required)
* **priority**: int
* **protocol**: '*' | 'Ah' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' (Required)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **sourceAddressPrefix**: string
* **sourceAddressPrefixes**: string[]
* **sourceApplicationSecurityGroups**: [ApplicationSecurityGroup](#applicationsecuritygroup)[]
* **sourcePortRange**: string
* **sourcePortRanges**: string[]

## FlowLog
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: [FlowLogPropertiesFormat](#flowlogpropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: string (ReadOnly)

## FlowLogPropertiesFormat
### Properties
* **enabled**: bool
* **flowAnalyticsConfiguration**: [TrafficAnalyticsProperties](#trafficanalyticsproperties)
* **format**: [FlowLogFormatParameters](#flowlogformatparameters)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **retentionPolicy**: [RetentionPolicyParameters](#retentionpolicyparameters)
* **storageId**: string (Required)
* **targetResourceGuid**: string (ReadOnly)
* **targetResourceId**: string (Required)

## TrafficAnalyticsProperties
### Properties
* **networkWatcherFlowAnalyticsConfiguration**: [TrafficAnalyticsConfigurationProperties](#trafficanalyticsconfigurationproperties)

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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NetworkInterface
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: string (ReadOnly)

## NetworkInterfacePropertiesFormat
### Properties
* **dnsSettings**: [NetworkInterfaceDnsSettings](#networkinterfacednssettings)
* **enableAcceleratedNetworking**: bool
* **enableIPForwarding**: bool
* **hostedWorkloads**: string[] (ReadOnly)
* **ipConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[]
* **macAddress**: string (ReadOnly)
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup)
* **primary**: bool (ReadOnly)
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint) (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)
* **tapConfigurations**: [NetworkInterfaceTapConfiguration](#networkinterfacetapconfiguration)[] (ReadOnly)
* **virtualMachine**: [SubResource](#subresource) (ReadOnly)

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
* **properties**: [PrivateEndpointProperties](#privateendpointproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: string (ReadOnly)

## PrivateEndpointProperties
### Properties
* **customDnsConfigs**: [CustomDnsConfigPropertiesFormat](#customdnsconfigpropertiesformat)[]
* **manualPrivateLinkServiceConnections**: [PrivateLinkServiceConnection](#privatelinkserviceconnection)[]
* **networkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly)
* **privateLinkServiceConnections**: [PrivateLinkServiceConnection](#privatelinkserviceconnection)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **subnet**: [Subnet](#subnet)

## CustomDnsConfigPropertiesFormat
### Properties
* **fqdn**: string
* **ipAddresses**: string[]

## PrivateLinkServiceConnection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [PrivateLinkServiceConnectionProperties](#privatelinkserviceconnectionproperties)
* **type**: string (ReadOnly)

## PrivateLinkServiceConnectionProperties
### Properties
* **groupIds**: string[]
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate)
* **privateLinkServiceId**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **requestMessage**: string

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string
* **description**: string
* **status**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NetworkInterfaceTapConfiguration
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [NetworkInterfaceTapConfigurationPropertiesFormat](#networkinterfacetapconfigurationpropertiesformat)
* **type**: string (ReadOnly)

## NetworkInterfaceTapConfigurationPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **virtualNetworkTap**: [VirtualNetworkTap](#virtualnetworktap)

## VirtualNetworkTap
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: [VirtualNetworkTapPropertiesFormat](#virtualnetworktappropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: string (ReadOnly)

## VirtualNetworkTapPropertiesFormat
### Properties
* **destinationLoadBalancerFrontEndIPConfiguration**: [FrontendIPConfiguration](#frontendipconfiguration)
* **destinationNetworkInterfaceIPConfiguration**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)
* **destinationPort**: int
* **networkInterfaceTapConfigurations**: [NetworkInterfaceTapConfiguration](#networkinterfacetapconfiguration)[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)

## FrontendIPConfiguration
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [FrontendIPConfigurationPropertiesFormat](#frontendipconfigurationpropertiesformat)
* **type**: string (ReadOnly)
* **zones**: string[]

## FrontendIPConfigurationPropertiesFormat
### Properties
* **inboundNatPools**: [SubResource](#subresource)[] (ReadOnly)
* **inboundNatRules**: [SubResource](#subresource)[] (ReadOnly)
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly)
* **outboundRules**: [SubResource](#subresource)[] (ReadOnly)
* **privateIPAddress**: string
* **privateIPAddressVersion**: 'IPv4' | 'IPv6'
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicIPAddress**: [PublicIPAddress](#publicipaddress)
* **publicIPPrefix**: [SubResource](#subresource)
* **subnet**: [Subnet](#subnet)

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

## ResourceNavigationLink
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [ResourceNavigationLinkFormat](#resourcenavigationlinkformat)
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
* **properties**: [RouteTablePropertiesFormat](#routetablepropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: string (ReadOnly)

## RouteTablePropertiesFormat
### Properties
* **disableBgpRoutePropagation**: bool
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **routes**: [Route](#route)[]
* **subnets**: [Subnet](#subnet)[] (ReadOnly)

## Route
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [RoutePropertiesFormat](#routepropertiesformat)

## RoutePropertiesFormat
### Properties
* **addressPrefix**: string
* **nextHopIpAddress**: string
* **nextHopType**: 'Internet' | 'None' | 'VirtualAppliance' | 'VirtualNetworkGateway' | 'VnetLocal' (Required)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceAssociationLink
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [ServiceAssociationLinkPropertiesFormat](#serviceassociationlinkpropertiesformat)
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
* **properties**: [ServiceEndpointPolicyPropertiesFormat](#serviceendpointpolicypropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: string (ReadOnly)

## ServiceEndpointPolicyPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)
* **serviceEndpointPolicyDefinitions**: [ServiceEndpointPolicyDefinition](#serviceendpointpolicydefinition)[]
* **subnets**: [Subnet](#subnet)[] (ReadOnly)

## ServiceEndpointPolicyDefinition
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [ServiceEndpointPolicyDefinitionPropertiesFormat](#serviceendpointpolicydefinitionpropertiesformat)

## ServiceEndpointPolicyDefinitionPropertiesFormat
### Properties
* **description**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **service**: string
* **serviceResources**: string[]

## ResourceTags
### Properties
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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationGatewayBackendHttpSettings
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayBackendHttpSettingsPropertiesFormat](#applicationgatewaybackendhttpsettingspropertiesformat)
* **type**: string (ReadOnly)

## ApplicationGatewayBackendHttpSettingsPropertiesFormat
### Properties
* **affinityCookieName**: string
* **authenticationCertificates**: [SubResource](#subresource)[]
* **connectionDraining**: [ApplicationGatewayConnectionDraining](#applicationgatewayconnectiondraining)
* **cookieBasedAffinity**: 'Disabled' | 'Enabled'
* **hostName**: string
* **path**: string
* **pickHostNameFromBackendAddress**: bool
* **port**: int
* **probe**: [SubResource](#subresource)
* **probeEnabled**: bool
* **protocol**: 'Http' | 'Https'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **requestTimeout**: int
* **trustedRootCertificates**: [SubResource](#subresource)[]

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
* **properties**: [ApplicationGatewayFrontendIPConfigurationPropertiesFormat](#applicationgatewayfrontendipconfigurationpropertiesformat)
* **type**: string (ReadOnly)

## ApplicationGatewayFrontendIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicIPAddress**: [SubResource](#subresource)
* **subnet**: [SubResource](#subresource)

## ApplicationGatewayFrontendPort
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayFrontendPortPropertiesFormat](#applicationgatewayfrontendportpropertiesformat)
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
* **properties**: [ApplicationGatewayIPConfigurationPropertiesFormat](#applicationgatewayipconfigurationpropertiesformat)
* **type**: string (ReadOnly)

## ApplicationGatewayIPConfigurationPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **subnet**: [SubResource](#subresource)

## ApplicationGatewayHttpListener
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayHttpListenerPropertiesFormat](#applicationgatewayhttplistenerpropertiesformat)
* **type**: string (ReadOnly)

## ApplicationGatewayHttpListenerPropertiesFormat
### Properties
* **customErrorConfigurations**: [ApplicationGatewayCustomError](#applicationgatewaycustomerror)[]
* **firewallPolicy**: [SubResource](#subresource)
* **frontendIPConfiguration**: [SubResource](#subresource)
* **frontendPort**: [SubResource](#subresource)
* **hostName**: string
* **hostNames**: string[]
* **protocol**: 'Http' | 'Https'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **requireServerNameIndication**: bool
* **sslCertificate**: [SubResource](#subresource)

## ApplicationGatewayProbe
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayProbePropertiesFormat](#applicationgatewayprobepropertiesformat)
* **type**: string (ReadOnly)

## ApplicationGatewayProbePropertiesFormat
### Properties
* **host**: string
* **interval**: int
* **match**: [ApplicationGatewayProbeHealthResponseMatch](#applicationgatewayprobehealthresponsematch)
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
* **properties**: [ApplicationGatewayRedirectConfigurationPropertiesFormat](#applicationgatewayredirectconfigurationpropertiesformat)
* **type**: string (ReadOnly)

## ApplicationGatewayRedirectConfigurationPropertiesFormat
### Properties
* **includePath**: bool
* **includeQueryString**: bool
* **pathRules**: [SubResource](#subresource)[]
* **redirectType**: 'Found' | 'Permanent' | 'SeeOther' | 'Temporary'
* **requestRoutingRules**: [SubResource](#subresource)[]
* **targetListener**: [SubResource](#subresource)
* **targetUrl**: string
* **urlPathMaps**: [SubResource](#subresource)[]

## ApplicationGatewayRequestRoutingRule
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayRequestRoutingRulePropertiesFormat](#applicationgatewayrequestroutingrulepropertiesformat)
* **type**: string (ReadOnly)

## ApplicationGatewayRequestRoutingRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource)
* **backendHttpSettings**: [SubResource](#subresource)
* **httpListener**: [SubResource](#subresource)
* **priority**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **redirectConfiguration**: [SubResource](#subresource)
* **rewriteRuleSet**: [SubResource](#subresource)
* **ruleType**: 'Basic' | 'PathBasedRouting'
* **urlPathMap**: [SubResource](#subresource)

## ApplicationGatewayRewriteRuleSet
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayRewriteRuleSetPropertiesFormat](#applicationgatewayrewriterulesetpropertiesformat)

## ApplicationGatewayRewriteRuleSetPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **rewriteRules**: [ApplicationGatewayRewriteRule](#applicationgatewayrewriterule)[]

## ApplicationGatewayRewriteRule
### Properties
* **actionSet**: [ApplicationGatewayRewriteRuleActionSet](#applicationgatewayrewriteruleactionset)
* **conditions**: [ApplicationGatewayRewriteRuleCondition](#applicationgatewayrewriterulecondition)[]
* **name**: string
* **ruleSequence**: int

## ApplicationGatewayRewriteRuleActionSet
### Properties
* **requestHeaderConfigurations**: [ApplicationGatewayHeaderConfiguration](#applicationgatewayheaderconfiguration)[]
* **responseHeaderConfigurations**: [ApplicationGatewayHeaderConfiguration](#applicationgatewayheaderconfiguration)[]
* **urlConfiguration**: [ApplicationGatewayUrlConfiguration](#applicationgatewayurlconfiguration)

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
* **tier**: 'Standard' | 'Standard_v2' | 'WAF' | 'WAF_v2'

## ApplicationGatewaySslCertificate
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewaySslCertificatePropertiesFormat](#applicationgatewaysslcertificatepropertiesformat)
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

## ApplicationGatewayTrustedRootCertificate
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayTrustedRootCertificatePropertiesFormat](#applicationgatewaytrustedrootcertificatepropertiesformat)
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
* **properties**: [ApplicationGatewayUrlPathMapPropertiesFormat](#applicationgatewayurlpathmappropertiesformat)
* **type**: string (ReadOnly)

## ApplicationGatewayUrlPathMapPropertiesFormat
### Properties
* **defaultBackendAddressPool**: [SubResource](#subresource)
* **defaultBackendHttpSettings**: [SubResource](#subresource)
* **defaultRedirectConfiguration**: [SubResource](#subresource)
* **defaultRewriteRuleSet**: [SubResource](#subresource)
* **pathRules**: [ApplicationGatewayPathRule](#applicationgatewaypathrule)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ApplicationGatewayPathRule
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayPathRulePropertiesFormat](#applicationgatewaypathrulepropertiesformat)
* **type**: string (ReadOnly)

## ApplicationGatewayPathRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource)
* **backendHttpSettings**: [SubResource](#subresource)
* **firewallPolicy**: [SubResource](#subresource)
* **paths**: string[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **redirectConfiguration**: [SubResource](#subresource)
* **rewriteRuleSet**: [SubResource](#subresource)

## ApplicationGatewayWebApplicationFirewallConfiguration
### Properties
* **disabledRuleGroups**: [ApplicationGatewayFirewallDisabledRuleGroup](#applicationgatewayfirewalldisabledrulegroup)[]
* **enabled**: bool (Required)
* **exclusions**: [ApplicationGatewayFirewallExclusion](#applicationgatewayfirewallexclusion)[]
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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebApplicationFirewallPolicyPropertiesFormat
### Properties
* **applicationGateways**: [ApplicationGateway](#applicationgateway)[] (ReadOnly)
* **customRules**: [WebApplicationFirewallCustomRule](#webapplicationfirewallcustomrule)[]
* **httpListeners**: [SubResource](#subresource)[] (ReadOnly)
* **managedRules**: [ManagedRulesDefinition](#managedrulesdefinition) (Required)
* **pathBasedRules**: [SubResource](#subresource)[] (ReadOnly)
* **policySettings**: [PolicySettings](#policysettings)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly)

## ApplicationGateway
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (ReadOnly)
* **properties**: [ApplicationGatewayPropertiesFormat](#applicationgatewaypropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: string (ReadOnly)
* **zones**: string[]

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebApplicationFirewallCustomRule
### Properties
* **action**: 'Allow' | 'Block' | 'Log' (Required)
* **etag**: string (ReadOnly)
* **matchConditions**: [MatchCondition](#matchcondition)[] (Required)
* **name**: string
* **priority**: int (Required)
* **ruleType**: 'Invalid' | 'MatchRule' (Required)

## MatchCondition
### Properties
* **matchValues**: string[] (Required)
* **matchVariables**: [MatchVariable](#matchvariable)[] (Required)
* **negationConditon**: bool
* **operator**: 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GeoMatch' | 'GreaterThan' | 'GreaterThanOrEqual' | 'IPMatch' | 'LessThan' | 'LessThanOrEqual' | 'Regex' (Required)
* **transforms**: 'HtmlEntityDecode' | 'Lowercase' | 'RemoveNulls' | 'Trim' | 'UrlDecode' | 'UrlEncode'[]

## MatchVariable
### Properties
* **selector**: string
* **variableName**: 'PostArgs' | 'QueryString' | 'RemoteAddr' | 'RequestBody' | 'RequestCookies' | 'RequestHeaders' | 'RequestMethod' | 'RequestUri' (Required)

## ManagedRulesDefinition
### Properties
* **exclusions**: [OwaspCrsExclusionEntry](#owaspcrsexclusionentry)[]
* **managedRuleSets**: [ManagedRuleSet](#managedruleset)[] (Required)

## OwaspCrsExclusionEntry
### Properties
* **matchVariable**: 'RequestArgNames' | 'RequestCookieNames' | 'RequestHeaderNames' (Required)
* **selector**: string (Required)
* **selectorMatchOperator**: 'Contains' | 'EndsWith' | 'Equals' | 'EqualsAny' | 'StartsWith' (Required)

## ManagedRuleSet
### Properties
* **ruleGroupOverrides**: [ManagedRuleGroupOverride](#managedrulegroupoverride)[]
* **ruleSetType**: string (Required)
* **ruleSetVersion**: string (Required)

## ManagedRuleGroupOverride
### Properties
* **ruleGroupName**: string (Required)
* **rules**: [ManagedRuleOverride](#managedruleoverride)[]

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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AzureFirewallPropertiesFormat
### Properties
* **additionalProperties**: [AzureFirewallAdditionalProperties](#azurefirewalladditionalproperties)
* **applicationRuleCollections**: [AzureFirewallApplicationRuleCollection](#azurefirewallapplicationrulecollection)[]
* **firewallPolicy**: [SubResource](#subresource)
* **hubIpAddresses**: [HubIPAddresses](#hubipaddresses) (ReadOnly)
* **ipConfigurations**: [AzureFirewallIPConfiguration](#azurefirewallipconfiguration)[]
* **ipGroups**: [AzureFirewallIpGroups](#azurefirewallipgroups)[] (ReadOnly)
* **managementIpConfiguration**: [AzureFirewallIPConfiguration](#azurefirewallipconfiguration)
* **natRuleCollections**: [AzureFirewallNatRuleCollection](#azurefirewallnatrulecollection)[]
* **networkRuleCollections**: [AzureFirewallNetworkRuleCollection](#azurefirewallnetworkrulecollection)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **sku**: [AzureFirewallSku](#azurefirewallsku)
* **threatIntelMode**: 'Alert' | 'Deny' | 'Off'
* **virtualHub**: [SubResource](#subresource)

## AzureFirewallAdditionalProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AzureFirewallApplicationRuleCollection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [AzureFirewallApplicationRuleCollectionPropertiesFormat](#azurefirewallapplicationrulecollectionpropertiesformat)

## AzureFirewallApplicationRuleCollectionPropertiesFormat
### Properties
* **action**: [AzureFirewallRCAction](#azurefirewallrcaction)
* **priority**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **rules**: [AzureFirewallApplicationRule](#azurefirewallapplicationrule)[]

## AzureFirewallRCAction
### Properties
* **type**: 'Allow' | 'Deny'

## AzureFirewallApplicationRule
### Properties
* **description**: string
* **fqdnTags**: string[]
* **name**: string
* **protocols**: [AzureFirewallApplicationRuleProtocol](#azurefirewallapplicationruleprotocol)[]
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
* **publicIPAddresses**: [AzureFirewallPublicIPAddress](#azurefirewallpublicipaddress)[]

## AzureFirewallPublicIPAddress
### Properties
* **address**: string

## AzureFirewallIPConfiguration
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [AzureFirewallIPConfigurationPropertiesFormat](#azurefirewallipconfigurationpropertiesformat)
* **type**: string (ReadOnly)

## AzureFirewallIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicIPAddress**: [SubResource](#subresource)
* **subnet**: [SubResource](#subresource)

## AzureFirewallIpGroups
### Properties
* **changeNumber**: string (ReadOnly)
* **id**: string (ReadOnly)

## AzureFirewallNatRuleCollection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [AzureFirewallNatRuleCollectionProperties](#azurefirewallnatrulecollectionproperties)

## AzureFirewallNatRuleCollectionProperties
### Properties
* **action**: [AzureFirewallNatRCAction](#azurefirewallnatrcaction)
* **priority**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **rules**: [AzureFirewallNatRule](#azurefirewallnatrule)[]

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
* **properties**: [AzureFirewallNetworkRuleCollectionPropertiesFormat](#azurefirewallnetworkrulecollectionpropertiesformat)

## AzureFirewallNetworkRuleCollectionPropertiesFormat
### Properties
* **action**: [AzureFirewallRCAction](#azurefirewallrcaction)
* **priority**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **rules**: [AzureFirewallNetworkRule](#azurefirewallnetworkrule)[]

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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BastionHostPropertiesFormat
### Properties
* **dnsName**: string
* **ipConfigurations**: [BastionHostIPConfiguration](#bastionhostipconfiguration)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## BastionHostIPConfiguration
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [BastionHostIPConfigurationPropertiesFormat](#bastionhostipconfigurationpropertiesformat)
* **type**: string (ReadOnly)

## BastionHostIPConfigurationPropertiesFormat
### Properties
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicIPAddress**: [SubResource](#subresource) (Required)
* **subnet**: [SubResource](#subresource) (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualNetworkGatewayConnectionPropertiesFormat
### Properties
* **authorizationKey**: string
* **connectionProtocol**: 'IKEv1' | 'IKEv2'
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' (ReadOnly)
* **connectionType**: 'ExpressRoute' | 'IPsec' | 'VPNClient' | 'Vnet2Vnet' (Required)
* **dpdTimeoutSeconds**: int
* **egressBytesTransferred**: int (ReadOnly)
* **enableBgp**: bool
* **expressRouteGatewayBypass**: bool
* **ingressBytesTransferred**: int (ReadOnly)
* **ipsecPolicies**: [IpsecPolicy](#ipsecpolicy)[]
* **localNetworkGateway2**: [LocalNetworkGateway](#localnetworkgateway)
* **peer**: [SubResource](#subresource)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)
* **routingWeight**: int
* **sharedKey**: string
* **trafficSelectorPolicies**: [TrafficSelectorPolicy](#trafficselectorpolicy)[]
* **tunnelConnectionStatus**: [TunnelConnectionHealth](#tunnelconnectionhealth)[] (ReadOnly)
* **useLocalAzureIpAddress**: bool
* **usePolicyBasedTrafficSelectors**: bool
* **virtualNetworkGateway1**: [VirtualNetworkGateway](#virtualnetworkgateway) (Required)
* **virtualNetworkGateway2**: [VirtualNetworkGateway](#virtualnetworkgateway)

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
* **properties**: [LocalNetworkGatewayPropertiesFormat](#localnetworkgatewaypropertiesformat) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: string (ReadOnly)

## LocalNetworkGatewayPropertiesFormat
### Properties
* **bgpSettings**: [BgpSettings](#bgpsettings)
* **fqdn**: string
* **gatewayIpAddress**: string
* **localNetworkAddressSpace**: [AddressSpace](#addressspace)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)

## BgpSettings
### Properties
* **asn**: int
* **bgpPeeringAddress**: string
* **bgpPeeringAddresses**: [IPConfigurationBgpPeeringAddress](#ipconfigurationbgppeeringaddress)[]
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

## ResourceTags
### Properties
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
* **properties**: [VirtualNetworkGatewayPropertiesFormat](#virtualnetworkgatewaypropertiesformat) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: string (ReadOnly)

## VirtualNetworkGatewayPropertiesFormat
### Properties
* **activeActive**: bool
* **bgpSettings**: [BgpSettings](#bgpsettings)
* **customRoutes**: [AddressSpace](#addressspace)
* **enableBgp**: bool
* **enableDnsForwarding**: bool
* **enablePrivateIpAddress**: bool
* **gatewayDefaultSite**: [SubResource](#subresource)
* **gatewayType**: 'ExpressRoute' | 'Vpn'
* **inboundDnsForwardingEndpoint**: string (ReadOnly)
* **ipConfigurations**: [VirtualNetworkGatewayIPConfiguration](#virtualnetworkgatewayipconfiguration)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)
* **sku**: [VirtualNetworkGatewaySku](#virtualnetworkgatewaysku)
* **vpnClientConfiguration**: [VpnClientConfiguration](#vpnclientconfiguration)
* **vpnGatewayGeneration**: 'Generation1' | 'Generation2' | 'None'
* **vpnType**: 'PolicyBased' | 'RouteBased'

## VirtualNetworkGatewayIPConfiguration
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [VirtualNetworkGatewayIPConfigurationPropertiesFormat](#virtualnetworkgatewayipconfigurationpropertiesformat)

## VirtualNetworkGatewayIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string (ReadOnly)
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicIPAddress**: [SubResource](#subresource)
* **subnet**: [SubResource](#subresource)

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
* **radiusServers**: [RadiusServer](#radiusserver)[]
* **radiusServerSecret**: string
* **vpnClientAddressPool**: [AddressSpace](#addressspace)
* **vpnClientIpsecPolicies**: [IpsecPolicy](#ipsecpolicy)[]
* **vpnClientProtocols**: 'IkeV2' | 'OpenVPN' | 'SSTP'[]
* **vpnClientRevokedCertificates**: [VpnClientRevokedCertificate](#vpnclientrevokedcertificate)[]
* **vpnClientRootCertificates**: [VpnClientRootCertificate](#vpnclientrootcertificate)[]

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
* **properties**: [VpnClientRevokedCertificatePropertiesFormat](#vpnclientrevokedcertificatepropertiesformat)

## VpnClientRevokedCertificatePropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **thumbprint**: string

## VpnClientRootCertificate
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [VpnClientRootCertificatePropertiesFormat](#vpnclientrootcertificatepropertiesformat) (Required)

## VpnClientRootCertificatePropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicCertData**: string (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DdosCustomPolicyPropertiesFormat
### Properties
* **protocolCustomSettings**: [ProtocolCustomSettingsFormat](#protocolcustomsettingsformat)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicIPAddresses**: [SubResource](#subresource)[] (ReadOnly)
* **resourceGuid**: string (ReadOnly)

## ProtocolCustomSettingsFormat
### Properties
* **protocol**: 'Syn' | 'Tcp' | 'Udp'
* **sourceRateOverride**: string
* **triggerRateOverride**: string
* **triggerSensitivityOverride**: 'Default' | 'High' | 'Low' | 'Relaxed'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DdosProtectionPlanPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)
* **virtualNetworks**: [SubResource](#subresource)[] (ReadOnly)

## DdosProtectionPlanTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExpressRouteCircuitPropertiesFormat
### Properties
* **allowClassicOperations**: bool
* **authorizations**: [ExpressRouteCircuitAuthorization](#expressroutecircuitauthorization)[]
* **bandwidthInGbps**: int
* **circuitProvisioningState**: string
* **expressRoutePort**: [SubResource](#subresource)
* **gatewayManagerEtag**: string
* **globalReachEnabled**: bool
* **peerings**: [ExpressRouteCircuitPeering](#expressroutecircuitpeering)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **serviceKey**: string
* **serviceProviderNotes**: string
* **serviceProviderProperties**: [ExpressRouteCircuitServiceProviderProperties](#expressroutecircuitserviceproviderproperties)
* **serviceProviderProvisioningState**: 'Deprovisioning' | 'NotProvisioned' | 'Provisioned' | 'Provisioning'
* **stag**: int (ReadOnly)

## ExpressRouteCircuitAuthorization
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [AuthorizationPropertiesFormat](#authorizationpropertiesformat)
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
* **properties**: [ExpressRouteCircuitPeeringPropertiesFormat](#expressroutecircuitpeeringpropertiesformat)
* **type**: string (ReadOnly)

## ExpressRouteCircuitPeeringPropertiesFormat
### Properties
* **azureASN**: int
* **connections**: [ExpressRouteCircuitConnection](#expressroutecircuitconnection)[]
* **expressRouteConnection**: [ExpressRouteConnectionId](#expressrouteconnectionid)
* **gatewayManagerEtag**: string
* **ipv6PeeringConfig**: [Ipv6ExpressRouteCircuitPeeringConfig](#ipv6expressroutecircuitpeeringconfig)
* **lastModifiedBy**: string (ReadOnly)
* **microsoftPeeringConfig**: [ExpressRouteCircuitPeeringConfig](#expressroutecircuitpeeringconfig)
* **peerASN**: int
* **peeredConnections**: [PeerExpressRouteCircuitConnection](#peerexpressroutecircuitconnection)[] (ReadOnly)
* **peeringType**: 'AzurePrivatePeering' | 'AzurePublicPeering' | 'MicrosoftPeering'
* **primaryAzurePort**: string
* **primaryPeerAddressPrefix**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **routeFilter**: [SubResource](#subresource)
* **secondaryAzurePort**: string
* **secondaryPeerAddressPrefix**: string
* **sharedKey**: string
* **state**: 'Disabled' | 'Enabled'
* **stats**: [ExpressRouteCircuitStats](#expressroutecircuitstats)
* **vlanId**: int

## ExpressRouteCircuitConnection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [ExpressRouteCircuitConnectionPropertiesFormat](#expressroutecircuitconnectionpropertiesformat)
* **type**: string (ReadOnly)

## ExpressRouteCircuitConnectionPropertiesFormat
### Properties
* **addressPrefix**: string
* **authorizationKey**: string
* **circuitConnectionStatus**: 'Connected' | 'Connecting' | 'Disconnected' (ReadOnly)
* **expressRouteCircuitPeering**: [SubResource](#subresource)
* **ipv6CircuitConnectionConfig**: [Ipv6CircuitConnectionConfig](#ipv6circuitconnectionconfig)
* **peerExpressRouteCircuitPeering**: [SubResource](#subresource)
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
* **microsoftPeeringConfig**: [ExpressRouteCircuitPeeringConfig](#expressroutecircuitpeeringconfig)
* **primaryPeerAddressPrefix**: string
* **routeFilter**: [SubResource](#subresource)
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
* **properties**: [PeerExpressRouteCircuitConnectionPropertiesFormat](#peerexpressroutecircuitconnectionpropertiesformat)
* **type**: string (ReadOnly)

## PeerExpressRouteCircuitConnectionPropertiesFormat
### Properties
* **addressPrefix**: string
* **authResourceGuid**: string
* **circuitConnectionStatus**: 'Connected' | 'Connecting' | 'Disconnected' (ReadOnly)
* **connectionName**: string
* **expressRouteCircuitPeering**: [SubResource](#subresource)
* **peerExpressRouteCircuitPeering**: [SubResource](#subresource)
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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExpressRouteCrossConnectionProperties
### Properties
* **bandwidthInMbps**: int
* **expressRouteCircuit**: [ExpressRouteCircuitReference](#expressroutecircuitreference)
* **peeringLocation**: string
* **peerings**: [ExpressRouteCrossConnectionPeering](#expressroutecrossconnectionpeering)[]
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
* **properties**: [ExpressRouteCrossConnectionPeeringProperties](#expressroutecrossconnectionpeeringproperties)

## ExpressRouteCrossConnectionPeeringProperties
### Properties
* **azureASN**: int (ReadOnly)
* **gatewayManagerEtag**: string
* **ipv6PeeringConfig**: [Ipv6ExpressRouteCircuitPeeringConfig](#ipv6expressroutecircuitpeeringconfig)
* **lastModifiedBy**: string (ReadOnly)
* **microsoftPeeringConfig**: [ExpressRouteCircuitPeeringConfig](#expressroutecircuitpeeringconfig)
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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExpressRouteGatewayProperties
### Properties
* **autoScaleConfiguration**: [ExpressRouteGatewayPropertiesAutoScaleConfiguration](#expressroutegatewaypropertiesautoscaleconfiguration)
* **expressRouteConnections**: [ExpressRouteConnection](#expressrouteconnection)[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **virtualHub**: [VirtualHubId](#virtualhubid) (Required)

## ExpressRouteGatewayPropertiesAutoScaleConfiguration
### Properties
* **bounds**: [ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds](#expressroutegatewaypropertiesautoscaleconfigurationbounds)

## ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds
### Properties
* **max**: int
* **min**: int

## ExpressRouteConnection
### Properties
* **id**: string
* **name**: string (Required)
* **properties**: [ExpressRouteConnectionProperties](#expressrouteconnectionproperties)

## ExpressRouteConnectionProperties
### Properties
* **authorizationKey**: string
* **enableInternetSecurity**: bool
* **expressRouteCircuitPeering**: [ExpressRouteCircuitPeeringId](#expressroutecircuitpeeringid) (Required)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **routingConfiguration**: [RoutingConfiguration](#routingconfiguration)
* **routingWeight**: int

## ExpressRouteCircuitPeeringId
### Properties
* **id**: string

## RoutingConfiguration
### Properties
* **associatedRouteTable**: [SubResource](#subresource)
* **propagatedRouteTables**: [PropagatedRouteTable](#propagatedroutetable)
* **vnetRoutes**: [VnetRoute](#vnetroute)

## PropagatedRouteTable
### Properties
* **ids**: [SubResource](#subresource)[]
* **labels**: string[]

## VnetRoute
### Properties
* **staticRoutes**: [StaticRoute](#staticroute)[]

## StaticRoute
### Properties
* **addressPrefixes**: string[]
* **name**: string
* **nextHopIpAddress**: string

## VirtualHubId
### Properties
* **id**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExpressRoutePortPropertiesFormat
### Properties
* **allocationDate**: string (ReadOnly)
* **bandwidthInGbps**: int
* **circuits**: [SubResource](#subresource)[] (ReadOnly)
* **encapsulation**: 'Dot1Q' | 'QinQ'
* **etherType**: string (ReadOnly)
* **links**: [ExpressRouteLink](#expressroutelink)[]
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
* **properties**: [ExpressRouteLinkPropertiesFormat](#expressroutelinkpropertiesformat)

## ExpressRouteLinkPropertiesFormat
### Properties
* **adminState**: 'Disabled' | 'Enabled'
* **connectorType**: 'LC' | 'SC' (ReadOnly)
* **interfaceName**: string (ReadOnly)
* **macSecConfig**: [ExpressRouteLinkMacSecConfig](#expressroutelinkmacsecconfig)
* **patchPanelId**: string (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **rackId**: string (ReadOnly)
* **routerName**: string (ReadOnly)

## ExpressRouteLinkMacSecConfig
### Properties
* **cakSecretIdentifier**: string
* **cipher**: 'gcm-aes-128' | 'gcm-aes-256'
* **cknSecretIdentifier**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FirewallPolicyPropertiesFormat
### Properties
* **basePolicy**: [SubResource](#subresource)
* **childPolicies**: [SubResource](#subresource)[] (ReadOnly)
* **firewalls**: [SubResource](#subresource)[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **ruleGroups**: [SubResource](#subresource)[] (ReadOnly)
* **threatIntelMode**: 'Alert' | 'Deny' | 'Off'
* **threatIntelWhitelist**: [FirewallPolicyThreatIntelWhitelist](#firewallpolicythreatintelwhitelist)

## FirewallPolicyThreatIntelWhitelist
### Properties
* **fqdns**: string[]
* **ipAddresses**: string[]

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FirewallPolicyRuleGroupProperties
### Properties
* **priority**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **rules**: [FirewallPolicyRule](#firewallpolicyrule)[]

## FirewallPolicyRule
* **Discriminator**: ruleType

### Base Properties
* **name**: string
* **priority**: int
### FirewallPolicyFilterRule
#### Properties
* **action**: [FirewallPolicyFilterRuleAction](#firewallpolicyfilterruleaction)
* **ruleConditions**: [FirewallPolicyRuleCondition](#firewallpolicyrulecondition)[]
* **ruleType**: 'FirewallPolicyFilterRule' (Required)

### FirewallPolicyNatRule
#### Properties
* **action**: [FirewallPolicyNatRuleAction](#firewallpolicynatruleaction)
* **ruleCondition**: [FirewallPolicyRuleCondition](#firewallpolicyrulecondition)
* **ruleType**: 'FirewallPolicyNatRule' (Required)
* **translatedAddress**: string
* **translatedPort**: string


## FirewallPolicyFilterRule
### Properties
* **action**: [FirewallPolicyFilterRuleAction](#firewallpolicyfilterruleaction)
* **ruleConditions**: [FirewallPolicyRuleCondition](#firewallpolicyrulecondition)[]
* **ruleType**: 'FirewallPolicyFilterRule' (Required)

## FirewallPolicyFilterRuleAction
### Properties
* **type**: 'Allow' | 'Deny'

## FirewallPolicyRuleCondition
* **Discriminator**: ruleConditionType

### Base Properties
* **description**: string
* **name**: string
### ApplicationRuleCondition
#### Properties
* **destinationAddresses**: string[]
* **fqdnTags**: string[]
* **protocols**: [FirewallPolicyRuleConditionApplicationProtocol](#firewallpolicyruleconditionapplicationprotocol)[]
* **ruleConditionType**: 'ApplicationRuleCondition' (Required)
* **sourceAddresses**: string[]
* **sourceIpGroups**: string[]
* **targetFqdns**: string[]

### NatRuleCondition
#### Properties
* **destinationAddresses**: string[]
* **destinationPorts**: string[]
* **ipProtocols**: 'Any' | 'ICMP' | 'TCP' | 'UDP'[]
* **ruleConditionType**: 'NatRuleCondition' (Required)
* **sourceAddresses**: string[]
* **sourceIpGroups**: string[]

### NetworkRuleCondition
#### Properties
* **destinationAddresses**: string[]
* **destinationIpGroups**: string[]
* **destinationPorts**: string[]
* **ipProtocols**: 'Any' | 'ICMP' | 'TCP' | 'UDP'[]
* **ruleConditionType**: 'NetworkRuleCondition' (Required)
* **sourceAddresses**: string[]
* **sourceIpGroups**: string[]


## ApplicationRuleCondition
### Properties
* **destinationAddresses**: string[]
* **fqdnTags**: string[]
* **protocols**: [FirewallPolicyRuleConditionApplicationProtocol](#firewallpolicyruleconditionapplicationprotocol)[]
* **ruleConditionType**: 'ApplicationRuleCondition' (Required)
* **sourceAddresses**: string[]
* **sourceIpGroups**: string[]
* **targetFqdns**: string[]

## FirewallPolicyRuleConditionApplicationProtocol
### Properties
* **port**: int
* **protocolType**: 'Http' | 'Https'

## NatRuleCondition
### Properties
* **destinationAddresses**: string[]
* **destinationPorts**: string[]
* **ipProtocols**: 'Any' | 'ICMP' | 'TCP' | 'UDP'[]
* **ruleConditionType**: 'NatRuleCondition' (Required)
* **sourceAddresses**: string[]
* **sourceIpGroups**: string[]

## NetworkRuleCondition
### Properties
* **destinationAddresses**: string[]
* **destinationIpGroups**: string[]
* **destinationPorts**: string[]
* **ipProtocols**: 'Any' | 'ICMP' | 'TCP' | 'UDP'[]
* **ruleConditionType**: 'NetworkRuleCondition' (Required)
* **sourceAddresses**: string[]
* **sourceIpGroups**: string[]

## FirewallPolicyNatRule
### Properties
* **action**: [FirewallPolicyNatRuleAction](#firewallpolicynatruleaction)
* **ruleCondition**: [FirewallPolicyRuleCondition](#firewallpolicyrulecondition)
* **ruleType**: 'FirewallPolicyNatRule' (Required)
* **translatedAddress**: string
* **translatedPort**: string

## FirewallPolicyNatRuleAction
### Properties
* **type**: 'DNAT'

## IpAllocationPropertiesFormat
### Properties
* **allocationTags**: [IpAllocationPropertiesFormatAllocationTags](#ipallocationpropertiesformatallocationtags)
* **ipamAllocationId**: string
* **prefix**: string
* **prefixLength**: int
* **prefixType**: 'IPv4' | 'IPv6'
* **subnet**: [SubResource](#subresource) (ReadOnly)
* **type**: 'Hypernet' | 'Undefined'
* **virtualNetwork**: [SubResource](#subresource) (ReadOnly)

## IpAllocationPropertiesFormatAllocationTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IpGroupPropertiesFormat
### Properties
* **firewalls**: [SubResource](#subresource)[] (ReadOnly)
* **ipAddresses**: string[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LoadBalancerPropertiesFormat
### Properties
* **backendAddressPools**: [BackendAddressPool](#backendaddresspool)[]
* **frontendIPConfigurations**: [FrontendIPConfiguration](#frontendipconfiguration)[]
* **inboundNatPools**: [InboundNatPool](#inboundnatpool)[]
* **inboundNatRules**: [InboundNatRule](#inboundnatrule)[]
* **loadBalancingRules**: [LoadBalancingRule](#loadbalancingrule)[]
* **outboundRules**: [OutboundRule](#outboundrule)[]
* **probes**: [Probe](#probe)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)

## InboundNatPool
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [InboundNatPoolPropertiesFormat](#inboundnatpoolpropertiesformat)
* **type**: string (ReadOnly)

## InboundNatPoolPropertiesFormat
### Properties
* **backendPort**: int (Required)
* **enableFloatingIP**: bool
* **enableTcpReset**: bool
* **frontendIPConfiguration**: [SubResource](#subresource)
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
* **properties**: [LoadBalancingRulePropertiesFormat](#loadbalancingrulepropertiesformat)
* **type**: string (ReadOnly)

## LoadBalancingRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource)
* **backendPort**: int
* **disableOutboundSnat**: bool
* **enableFloatingIP**: bool
* **enableTcpReset**: bool
* **frontendIPConfiguration**: [SubResource](#subresource)
* **frontendPort**: int (Required)
* **idleTimeoutInMinutes**: int
* **loadDistribution**: 'Default' | 'SourceIP' | 'SourceIPProtocol'
* **probe**: [SubResource](#subresource)
* **protocol**: 'All' | 'Tcp' | 'Udp' (Required)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## OutboundRule
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [OutboundRulePropertiesFormat](#outboundrulepropertiesformat)
* **type**: string (ReadOnly)

## OutboundRulePropertiesFormat
### Properties
* **allocatedOutboundPorts**: int
* **backendAddressPool**: [SubResource](#subresource) (Required)
* **enableTcpReset**: bool
* **frontendIPConfigurations**: [SubResource](#subresource)[] (Required)
* **idleTimeoutInMinutes**: int
* **protocol**: 'All' | 'Tcp' | 'Udp' (Required)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Probe
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [ProbePropertiesFormat](#probepropertiesformat)
* **type**: string (ReadOnly)

## ProbePropertiesFormat
### Properties
* **intervalInSeconds**: int
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly)
* **numberOfProbes**: int
* **port**: int (Required)
* **protocol**: 'Http' | 'Https' | 'Tcp' (Required)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **requestPath**: string

## LoadBalancerSku
### Properties
* **name**: 'Basic' | 'Standard'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NatGatewayPropertiesFormat
### Properties
* **idleTimeoutInMinutes**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicIpAddresses**: [SubResource](#subresource)[]
* **publicIpPrefixes**: [SubResource](#subresource)[]
* **resourceGuid**: string (ReadOnly)
* **subnets**: [SubResource](#subresource)[] (ReadOnly)

## NatGatewaySku
### Properties
* **name**: 'Standard'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NetworkProfilePropertiesFormat
### Properties
* **containerNetworkInterfaceConfigurations**: [ContainerNetworkInterfaceConfiguration](#containernetworkinterfaceconfiguration)[]
* **containerNetworkInterfaces**: [ContainerNetworkInterface](#containernetworkinterface)[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)

## ContainerNetworkInterfaceConfiguration
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [ContainerNetworkInterfaceConfigurationPropertiesFormat](#containernetworkinterfaceconfigurationpropertiesformat)
* **type**: string (ReadOnly)

## ContainerNetworkInterfaceConfigurationPropertiesFormat
### Properties
* **containerNetworkInterfaces**: [SubResource](#subresource)[]
* **ipConfigurations**: [IPConfigurationProfile](#ipconfigurationprofile)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ContainerNetworkInterface
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [ContainerNetworkInterfacePropertiesFormat](#containernetworkinterfacepropertiesformat)
* **type**: string (ReadOnly)

## ContainerNetworkInterfacePropertiesFormat
### Properties
* **container**: [Container](#container)
* **containerNetworkInterfaceConfiguration**: [ContainerNetworkInterfaceConfiguration](#containernetworkinterfaceconfiguration) (ReadOnly)
* **ipConfigurations**: [ContainerNetworkInterfaceIpConfiguration](#containernetworkinterfaceipconfiguration)[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Container
### Properties
* **id**: string

## ContainerNetworkInterfaceIpConfiguration
### Properties
* **etag**: string (ReadOnly)
* **name**: string
* **properties**: [ContainerNetworkInterfaceIpConfigurationPropertiesFormat](#containernetworkinterfaceipconfigurationpropertiesformat)
* **type**: string (ReadOnly)

## ContainerNetworkInterfaceIpConfigurationPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NetworkVirtualAppliancePropertiesFormat
### Properties
* **bootStrapConfigurationBlob**: string[]
* **cloudInitConfigurationBlob**: string[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **virtualApplianceAsn**: int
* **virtualApplianceNics**: [VirtualApplianceNicProperties](#virtualappliancenicproperties)[] (ReadOnly)
* **virtualHub**: [SubResource](#subresource)

## VirtualApplianceNicProperties
### Properties
* **name**: string (ReadOnly)
* **privateIpAddress**: string (ReadOnly)
* **publicIpAddress**: string (ReadOnly)

## VirtualApplianceSkuProperties
### Properties
* **bundledScaleUnit**: string
* **marketPlaceVersion**: string
* **vendor**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NetworkWatcherPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConnectionMonitorParameters
### Properties
* **autoStart**: bool
* **connectionMonitorType**: 'MultiEndpoint' | 'SingleSourceDestination' (ReadOnly)
* **destination**: [ConnectionMonitorDestination](#connectionmonitordestination)
* **endpoints**: [ConnectionMonitorEndpoint](#connectionmonitorendpoint)[]
* **monitoringIntervalInSeconds**: int
* **monitoringStatus**: string (ReadOnly)
* **notes**: string
* **outputs**: [ConnectionMonitorOutput](#connectionmonitoroutput)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **source**: [ConnectionMonitorSource](#connectionmonitorsource)
* **startTime**: string (ReadOnly)
* **testConfigurations**: [ConnectionMonitorTestConfiguration](#connectionmonitortestconfiguration)[]
* **testGroups**: [ConnectionMonitorTestGroup](#connectionmonitortestgroup)[]

## ConnectionMonitorDestination
### Properties
* **address**: string
* **port**: int
* **resourceId**: string

## ConnectionMonitorEndpoint
### Properties
* **address**: string
* **filter**: [ConnectionMonitorEndpointFilter](#connectionmonitorendpointfilter)
* **name**: string (Required)
* **resourceId**: string

## ConnectionMonitorEndpointFilter
### Properties
* **items**: [ConnectionMonitorEndpointFilterItem](#connectionmonitorendpointfilteritem)[]
* **type**: 'Include'

## ConnectionMonitorEndpointFilterItem
### Properties
* **address**: string
* **type**: 'AgentAddress'

## ConnectionMonitorOutput
### Properties
* **type**: 'Workspace'
* **workspaceSettings**: [ConnectionMonitorWorkspaceSettings](#connectionmonitorworkspacesettings)

## ConnectionMonitorWorkspaceSettings
### Properties
* **workspaceResourceId**: string

## ConnectionMonitorSource
### Properties
* **port**: int
* **resourceId**: string (Required)

## ConnectionMonitorTestConfiguration
### Properties
* **httpConfiguration**: [ConnectionMonitorHttpConfiguration](#connectionmonitorhttpconfiguration)
* **icmpConfiguration**: [ConnectionMonitorIcmpConfiguration](#connectionmonitoricmpconfiguration)
* **name**: string (Required)
* **preferredIPVersion**: 'IPv4' | 'IPv6'
* **protocol**: 'Http' | 'Icmp' | 'Tcp' (Required)
* **successThreshold**: [ConnectionMonitorSuccessThreshold](#connectionmonitorsuccessthreshold)
* **tcpConfiguration**: [ConnectionMonitorTcpConfiguration](#connectionmonitortcpconfiguration)
* **testFrequencySec**: int

## ConnectionMonitorHttpConfiguration
### Properties
* **method**: 'Get' | 'Post'
* **path**: string
* **port**: int
* **preferHTTPS**: bool
* **requestHeaders**: [HttpHeader](#httpheader)[]
* **validStatusCodeRanges**: string[]

## HttpHeader
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
* **disableTraceRoute**: bool
* **port**: int

## ConnectionMonitorTestGroup
### Properties
* **destinations**: string[] (Required)
* **disable**: bool
* **name**: string (Required)
* **sources**: string[] (Required)
* **testConfigurations**: string[] (Required)

## ConnectionMonitorTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PacketCaptureParameters
### Properties
* **bytesToCapturePerPacket**: int
* **filters**: [PacketCaptureFilter](#packetcapturefilter)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **storageLocation**: [PacketCaptureStorageLocation](#packetcapturestoragelocation) (Required)
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
* **p2SConnectionConfigurations**: [P2SConnectionConfiguration](#p2sconnectionconfiguration)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **virtualHub**: [SubResource](#subresource)
* **vpnClientConnectionHealth**: [VpnClientConnectionHealth](#vpnclientconnectionhealth) (ReadOnly)
* **vpnGatewayScaleUnit**: int
* **vpnServerConfiguration**: [SubResource](#subresource)

## P2SConnectionConfiguration
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [P2SConnectionConfigurationProperties](#p2sconnectionconfigurationproperties)

## P2SConnectionConfigurationProperties
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **routingConfiguration**: [RoutingConfiguration](#routingconfiguration)
* **vpnClientAddressPool**: [AddressSpace](#addressspace)

## VpnClientConnectionHealth
### Properties
* **allocatedIpAddresses**: string[]
* **totalEgressBytesTransferred**: int (ReadOnly)
* **totalIngressBytesTransferred**: int (ReadOnly)
* **vpnClientConnectionsCount**: int

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateDnsZoneGroupPropertiesFormat
### Properties
* **privateDnsZoneConfigs**: [PrivateDnsZoneConfig](#privatednszoneconfig)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## PrivateDnsZoneConfig
### Properties
* **name**: string
* **properties**: [PrivateDnsZonePropertiesFormat](#privatednszonepropertiesformat)

## PrivateDnsZonePropertiesFormat
### Properties
* **privateDnsZoneId**: string
* **recordSets**: [RecordSet](#recordset)[] (ReadOnly)

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
* **autoApproval**: [PrivateLinkServicePropertiesAutoApproval](#privatelinkservicepropertiesautoapproval)
* **enableProxyProtocol**: bool
* **fqdns**: string[]
* **ipConfigurations**: [PrivateLinkServiceIpConfiguration](#privatelinkserviceipconfiguration)[]
* **loadBalancerFrontendIpConfigurations**: [FrontendIPConfiguration](#frontendipconfiguration)[]
* **networkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly)
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **visibility**: [PrivateLinkServicePropertiesVisibility](#privatelinkservicepropertiesvisibility)

## PrivateLinkServicePropertiesAutoApproval
### Properties
* **subscriptions**: string[]

## PrivateLinkServiceIpConfiguration
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [PrivateLinkServiceIpConfigurationProperties](#privatelinkserviceipconfigurationproperties)
* **type**: string (ReadOnly)

## PrivateLinkServiceIpConfigurationProperties
### Properties
* **primary**: bool
* **privateIPAddress**: string
* **privateIPAddressVersion**: 'IPv4' | 'IPv6'
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **subnet**: [Subnet](#subnet)

## PrivateEndpointConnection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **linkIdentifier**: string (ReadOnly)
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint) (ReadOnly)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## PrivateLinkServicePropertiesVisibility
### Properties
* **subscriptions**: string[]

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PublicIPPrefixPropertiesFormat
### Properties
* **ipPrefix**: string (ReadOnly)
* **ipTags**: [IpTag](#iptag)[]
* **loadBalancerFrontendIpConfiguration**: [SubResource](#subresource) (ReadOnly)
* **prefixLength**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicIPAddresses**: [ReferencedPublicIpAddress](#referencedpublicipaddress)[] (ReadOnly)
* **publicIPAddressVersion**: 'IPv4' | 'IPv6'
* **resourceGuid**: string (ReadOnly)

## ReferencedPublicIpAddress
### Properties
* **id**: string

## PublicIPPrefixSku
### Properties
* **name**: 'Standard'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RouteFilterPropertiesFormat
### Properties
* **ipv6Peerings**: [ExpressRouteCircuitPeering](#expressroutecircuitpeering)[] (ReadOnly)
* **peerings**: [ExpressRouteCircuitPeering](#expressroutecircuitpeering)[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **rules**: [RouteFilterRule](#routefilterrule)[]

## RouteFilterRule
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **location**: string
* **name**: string
* **properties**: [RouteFilterRulePropertiesFormat](#routefilterrulepropertiesformat)

## RouteFilterRulePropertiesFormat
### Properties
* **access**: 'Allow' | 'Deny' (Required)
* **communities**: string[] (Required)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **routeFilterRuleType**: 'Community' (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SecurityPartnerProviderPropertiesFormat
### Properties
* **connectionStatus**: 'Connected' | 'NotConnected' | 'PartiallyConnected' | 'Unknown' (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **securityProviderName**: 'Checkpoint' | 'IBoss' | 'ZScaler'
* **virtualHub**: [SubResource](#subresource)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualHubProperties
### Properties
* **addressPrefix**: string
* **azureFirewall**: [SubResource](#subresource)
* **expressRouteGateway**: [SubResource](#subresource)
* **p2SVpnGateway**: [SubResource](#subresource)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **routeTable**: [VirtualHubRouteTable](#virtualhubroutetable)
* **securityPartnerProvider**: [SubResource](#subresource)
* **securityProviderName**: string
* **sku**: string
* **virtualHubRouteTableV2s**: [VirtualHubRouteTableV2](#virtualhubroutetablev2)[]
* **virtualNetworkConnections**: [HubVirtualNetworkConnection](#hubvirtualnetworkconnection)[]
* **virtualWan**: [SubResource](#subresource)
* **vpnGateway**: [SubResource](#subresource)

## VirtualHubRouteTable
### Properties
* **routes**: [VirtualHubRoute](#virtualhubroute)[]

## VirtualHubRoute
### Properties
* **addressPrefixes**: string[]
* **nextHopIpAddress**: string

## VirtualHubRouteTableV2
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [VirtualHubRouteTableV2Properties](#virtualhubroutetablev2properties)

## VirtualHubRouteTableV2Properties
### Properties
* **attachedConnections**: string[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **routes**: [VirtualHubRouteV2](#virtualhubroutev2)[]

## VirtualHubRouteV2
### Properties
* **destinations**: string[]
* **destinationType**: string
* **nextHops**: string[]
* **nextHopType**: string

## HubVirtualNetworkConnection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [HubVirtualNetworkConnectionProperties](#hubvirtualnetworkconnectionproperties)

## HubVirtualNetworkConnectionProperties
### Properties
* **allowHubToRemoteVnetTransit**: bool
* **allowRemoteVnetToUseHubVnetGateways**: bool
* **enableInternetSecurity**: bool
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **remoteVirtualNetwork**: [SubResource](#subresource)
* **routingConfiguration**: [RoutingConfiguration](#routingconfiguration)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HubRouteTableProperties
### Properties
* **associatedConnections**: string[] (ReadOnly)
* **labels**: string[]
* **propagatingConnections**: string[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **routes**: [HubRoute](#hubroute)[]

## HubRoute
### Properties
* **destinations**: string[] (Required)
* **destinationType**: string (Required)
* **name**: string (Required)
* **nextHop**: string (Required)
* **nextHopType**: string (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualNetworkPropertiesFormat
### Properties
* **addressSpace**: [AddressSpace](#addressspace)
* **bgpCommunities**: [VirtualNetworkBgpCommunities](#virtualnetworkbgpcommunities)
* **ddosProtectionPlan**: [SubResource](#subresource)
* **dhcpOptions**: [DhcpOptions](#dhcpoptions)
* **enableDdosProtection**: bool
* **enableVmProtection**: bool
* **ipAllocations**: [SubResource](#subresource)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)
* **subnets**: [Subnet](#subnet)[]
* **virtualNetworkPeerings**: [VirtualNetworkPeering](#virtualnetworkpeering)[]

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
* **properties**: [VirtualNetworkPeeringPropertiesFormat](#virtualnetworkpeeringpropertiesformat)

## VirtualNetworkPeeringPropertiesFormat
### Properties
* **allowForwardedTraffic**: bool
* **allowGatewayTransit**: bool
* **allowVirtualNetworkAccess**: bool
* **peeringState**: 'Connected' | 'Disconnected' | 'Initiated'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **remoteAddressSpace**: [AddressSpace](#addressspace)
* **remoteVirtualNetwork**: [SubResource](#subresource)
* **useRemoteGateways**: bool

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualRouterPropertiesFormat
### Properties
* **hostedGateway**: [SubResource](#subresource)
* **hostedSubnet**: [SubResource](#subresource)
* **peerings**: [SubResource](#subresource)[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **virtualRouterAsn**: int
* **virtualRouterIps**: string[]

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualRouterPeeringProperties
### Properties
* **peerAsn**: int
* **peerIp**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## VpnGatewayProperties
### Properties
* **bgpSettings**: [BgpSettings](#bgpsettings)
* **connections**: [VpnConnection](#vpnconnection)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **virtualHub**: [SubResource](#subresource)
* **vpnGatewayScaleUnit**: int

## VpnConnection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [VpnConnectionProperties](#vpnconnectionproperties)

## VpnConnectionProperties
### Properties
* **connectionBandwidth**: int
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' (ReadOnly)
* **dpdTimeoutSeconds**: int
* **egressBytesTransferred**: int (ReadOnly)
* **enableBgp**: bool
* **enableInternetSecurity**: bool
* **enableRateLimiting**: bool
* **ingressBytesTransferred**: int (ReadOnly)
* **ipsecPolicies**: [IpsecPolicy](#ipsecpolicy)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **remoteVpnSite**: [SubResource](#subresource)
* **routingConfiguration**: [RoutingConfiguration](#routingconfiguration)
* **routingWeight**: int
* **sharedKey**: string
* **useLocalAzureIpAddress**: bool
* **usePolicyBasedTrafficSelectors**: bool
* **vpnConnectionProtocolType**: 'IKEv1' | 'IKEv2'
* **vpnLinkConnections**: [VpnSiteLinkConnection](#vpnsitelinkconnection)[]

## VpnSiteLinkConnection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [VpnSiteLinkConnectionProperties](#vpnsitelinkconnectionproperties)
* **type**: string (ReadOnly)

## VpnSiteLinkConnectionProperties
### Properties
* **connectionBandwidth**: int
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' (ReadOnly)
* **egressBytesTransferred**: int (ReadOnly)
* **enableBgp**: bool
* **enableRateLimiting**: bool
* **ingressBytesTransferred**: int (ReadOnly)
* **ipsecPolicies**: [IpsecPolicy](#ipsecpolicy)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **routingWeight**: int
* **sharedKey**: string
* **useLocalAzureIpAddress**: bool
* **usePolicyBasedTrafficSelectors**: bool
* **vpnConnectionProtocolType**: 'IKEv1' | 'IKEv2'
* **vpnSiteLink**: [SubResource](#subresource)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VpnServerConfigurationProperties
### Properties
* **aadAuthenticationParameters**: [AadAuthenticationParameters](#aadauthenticationparameters)
* **etag**: string (ReadOnly)
* **name**: string
* **p2SVpnGateways**: [P2SVpnGateway](#p2svpngateway)[] (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **radiusClientRootCertificates**: [VpnServerConfigRadiusClientRootCertificate](#vpnserverconfigradiusclientrootcertificate)[]
* **radiusServerAddress**: string
* **radiusServerRootCertificates**: [VpnServerConfigRadiusServerRootCertificate](#vpnserverconfigradiusserverrootcertificate)[]
* **radiusServers**: [RadiusServer](#radiusserver)[]
* **radiusServerSecret**: string
* **vpnAuthenticationTypes**: 'AAD' | 'Certificate' | 'Radius'[]
* **vpnClientIpsecPolicies**: [IpsecPolicy](#ipsecpolicy)[]
* **vpnClientRevokedCertificates**: [VpnServerConfigVpnClientRevokedCertificate](#vpnserverconfigvpnclientrevokedcertificate)[]
* **vpnClientRootCertificates**: [VpnServerConfigVpnClientRootCertificate](#vpnserverconfigvpnclientrootcertificate)[]
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
* **properties**: [P2SVpnGatewayProperties](#p2svpngatewayproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: string (ReadOnly)

## ResourceTags
### Properties
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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VpnSiteProperties
### Properties
* **addressSpace**: [AddressSpace](#addressspace)
* **bgpProperties**: [BgpSettings](#bgpsettings)
* **deviceProperties**: [DeviceProperties](#deviceproperties)
* **ipAddress**: string
* **isSecuritySite**: bool
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **siteKey**: string
* **virtualWan**: [SubResource](#subresource)
* **vpnSiteLinks**: [VpnSiteLink](#vpnsitelink)[]

## DeviceProperties
### Properties
* **deviceModel**: string
* **deviceVendor**: string
* **linkSpeedInMbps**: int

## VpnSiteLink
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [VpnSiteLinkProperties](#vpnsitelinkproperties)
* **type**: string (ReadOnly)

## VpnSiteLinkProperties
### Properties
* **bgpProperties**: [VpnLinkBgpSettings](#vpnlinkbgpsettings)
* **fqdn**: string
* **ipAddress**: string
* **linkProperties**: [VpnLinkProviderProperties](#vpnlinkproviderproperties)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## VpnLinkBgpSettings
### Properties
* **asn**: int
* **bgpPeeringAddress**: string

## VpnLinkProviderProperties
### Properties
* **linkProviderName**: string
* **linkSpeedInMbps**: int

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

