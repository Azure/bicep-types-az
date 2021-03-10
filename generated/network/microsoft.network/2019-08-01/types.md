# Microsoft.Network @ 2019-08-01

## Resource Microsoft.Network/applicationGateways@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationGatewayPropertiesFormat](#applicationgatewaypropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/applicationGateways' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WebApplicationFirewallPolicyPropertiesFormat](#webapplicationfirewallpolicypropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/applicationSecurityGroups@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationSecurityGroupPropertiesFormat](#applicationsecuritygrouppropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/applicationSecurityGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/azureFirewalls@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AzureFirewallPropertiesFormat](#azurefirewallpropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/azureFirewalls' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Network/bastionHosts@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BastionHostPropertiesFormat](#bastionhostpropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/bastionHosts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/connections@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualNetworkGatewayConnectionPropertiesFormat](#virtualnetworkgatewayconnectionpropertiesformat) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/connections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/ddosCustomPolicies@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DdosCustomPolicyPropertiesFormat](#ddoscustompolicypropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/ddosCustomPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/ddosProtectionPlans@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DdosProtectionPlanPropertiesFormat](#ddosprotectionplanpropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/ddosProtectionPlans' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCircuits@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExpressRouteCircuitPropertiesFormat](#expressroutecircuitpropertiesformat)
* **sku**: [ExpressRouteCircuitSku](#expressroutecircuitsku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/expressRouteCircuits' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCircuits/authorizations@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AuthorizationPropertiesFormat](#authorizationpropertiesformat)
* **type**: 'Microsoft.Network/expressRouteCircuits/authorizations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCircuits/peerings@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExpressRouteCircuitPeeringPropertiesFormat](#expressroutecircuitpeeringpropertiesformat)
* **type**: 'Microsoft.Network/expressRouteCircuits/peerings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCircuits/peerings/connections@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExpressRouteCircuitConnectionPropertiesFormat](#expressroutecircuitconnectionpropertiesformat)
* **type**: 'Microsoft.Network/expressRouteCircuits/peerings/connections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCrossConnections@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExpressRouteCrossConnectionProperties](#expressroutecrossconnectionproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/expressRouteCrossConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCrossConnections/peerings@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExpressRouteCrossConnectionPeeringProperties](#expressroutecrossconnectionpeeringproperties)
* **type**: 'Microsoft.Network/expressRouteCrossConnections/peerings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteGateways@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExpressRouteGatewayProperties](#expressroutegatewayproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/expressRouteGateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteGateways/expressRouteConnections@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExpressRouteConnectionProperties](#expressrouteconnectionproperties)
* **type**: 'Microsoft.Network/expressRouteGateways/expressRouteConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/ExpressRoutePorts@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExpressRoutePortPropertiesFormat](#expressrouteportpropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/ExpressRoutePorts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/firewallPolicies@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FirewallPolicyPropertiesFormat](#firewallpolicypropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/firewallPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/firewallPolicies/ruleGroups@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FirewallPolicyRuleGroupProperties](#firewallpolicyrulegroupproperties)
* **type**: 'Microsoft.Network/firewallPolicies/ruleGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/loadBalancers@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LoadBalancerPropertiesFormat](#loadbalancerpropertiesformat)
* **sku**: [LoadBalancerSku](#loadbalancersku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/loadBalancers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/loadBalancers/inboundNatRules@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [InboundNatRulePropertiesFormat](#inboundnatrulepropertiesformat)
* **type**: 'Microsoft.Network/loadBalancers/inboundNatRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/localNetworkGateways@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LocalNetworkGatewayPropertiesFormat](#localnetworkgatewaypropertiesformat) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/localNetworkGateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/natGateways@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NatGatewayPropertiesFormat](#natgatewaypropertiesformat)
* **sku**: [NatGatewaySku](#natgatewaysku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/natGateways' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Network/networkInterfaces@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/networkInterfaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkInterfaces/tapConfigurations@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NetworkInterfaceTapConfigurationPropertiesFormat](#networkinterfacetapconfigurationpropertiesformat)
* **type**: 'Microsoft.Network/networkInterfaces/tapConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkProfiles@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NetworkProfilePropertiesFormat](#networkprofilepropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/networkProfiles' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkSecurityGroups@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NetworkSecurityGroupPropertiesFormat](#networksecuritygrouppropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/networkSecurityGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkSecurityGroups/securityRules@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SecurityRulePropertiesFormat](#securityrulepropertiesformat)
* **type**: 'Microsoft.Network/networkSecurityGroups/securityRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkWatchers@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NetworkWatcherPropertiesFormat](#networkwatcherpropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/networkWatchers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkWatchers/connectionMonitors@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConnectionMonitorParameters](#connectionmonitorparameters) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/networkWatchers/connectionMonitors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkWatchers/packetCaptures@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PacketCaptureParameters](#packetcaptureparameters) (Required)
* **type**: 'Microsoft.Network/networkWatchers/packetCaptures' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/p2svpnGateways@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [P2SVpnGatewayProperties](#p2svpngatewayproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/p2svpnGateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateEndpoints@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointProperties](#privateendpointproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/privateEndpoints' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateLinkServices@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateLinkServiceProperties](#privatelinkserviceproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/privateLinkServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateLinkServices/privateEndpointConnections@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: 'Microsoft.Network/privateLinkServices/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/publicIPAddresses@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat)
* **sku**: [PublicIPAddressSku](#publicipaddresssku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/publicIPAddresses' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Network/publicIPPrefixes@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PublicIPPrefixPropertiesFormat](#publicipprefixpropertiesformat)
* **sku**: [PublicIPPrefixSku](#publicipprefixsku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/publicIPPrefixes' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Network/routeFilters@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RouteFilterPropertiesFormat](#routefilterpropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/routeFilters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/routeFilters/routeFilterRules@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RouteFilterRulePropertiesFormat](#routefilterrulepropertiesformat)
* **type**: 'Microsoft.Network/routeFilters/routeFilterRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/routeTables@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RouteTablePropertiesFormat](#routetablepropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/routeTables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/routeTables/routes@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RoutePropertiesFormat](#routepropertiesformat)
* **type**: 'Microsoft.Network/routeTables/routes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/serviceEndpointPolicies@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServiceEndpointPolicyPropertiesFormat](#serviceendpointpolicypropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/serviceEndpointPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServiceEndpointPolicyDefinitionPropertiesFormat](#serviceendpointpolicydefinitionpropertiesformat)
* **type**: 'Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualHubs@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualHubProperties](#virtualhubproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/virtualHubs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualNetworkGateways@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualNetworkGatewayPropertiesFormat](#virtualnetworkgatewaypropertiesformat) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/virtualNetworkGateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualNetworks@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualNetworkPropertiesFormat](#virtualnetworkpropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/virtualNetworks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualNetworks/subnets@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SubnetPropertiesFormat](#subnetpropertiesformat)
* **type**: 'Microsoft.Network/virtualNetworks/subnets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualNetworks/virtualNetworkPeerings@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualNetworkPeeringPropertiesFormat](#virtualnetworkpeeringpropertiesformat)
* **type**: 'Microsoft.Network/virtualNetworks/virtualNetworkPeerings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualNetworkTaps@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualNetworkTapPropertiesFormat](#virtualnetworktappropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/virtualNetworkTaps' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualRouters@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualRouterPropertiesFormat](#virtualrouterpropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/virtualRouters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualRouters/peerings@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualRouterPeeringProperties](#virtualrouterpeeringproperties)
* **type**: 'Microsoft.Network/virtualRouters/peerings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualWans@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualWanProperties](#virtualwanproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/virtualWans' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/vpnGateways@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VpnGatewayProperties](#vpngatewayproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/vpnGateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/vpnGateways/vpnConnections@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VpnConnectionProperties](#vpnconnectionproperties)
* **type**: 'Microsoft.Network/vpnGateways/vpnConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/vpnServerConfigurations@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VpnServerConfigurationProperties](#vpnserverconfigurationproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/vpnServerConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/vpnSites@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VpnSiteProperties](#vpnsiteproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/vpnSites' (ReadOnly, DeployTimeConstant)

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned'
* **userAssignedIdentities**: [Dictionary<string,Schemas239UserAssignedIdentitiesValue>](#dictionarystringschemas239userassignedidentitiesvalue)

## Dictionary<string,Schemas239UserAssignedIdentitiesValue>
### Properties
### Additional Properties
* **Additional Properties Type**: [schemas:239_userAssignedIdentitiesValue](#schemas239userassignedidentitiesvalue)

## schemas:239_userAssignedIdentitiesValue
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
* **frontendIPConfigurations**: [ApplicationGatewayFrontendIPConfiguration](#applicationgatewayfrontendipconfiguration)[]
* **frontendPorts**: [ApplicationGatewayFrontendPort](#applicationgatewayfrontendport)[]
* **gatewayIPConfigurations**: [ApplicationGatewayIPConfiguration](#applicationgatewayipconfiguration)[]
* **httpListeners**: [ApplicationGatewayHttpListener](#applicationgatewayhttplistener)[]
* **operationalState**: 'Running' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **probes**: [ApplicationGatewayProbe](#applicationgatewayprobe)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **redirectConfigurations**: [ApplicationGatewayRedirectConfiguration](#applicationgatewayredirectconfiguration)[]
* **requestRoutingRules**: [ApplicationGatewayRequestRoutingRule](#applicationgatewayrequestroutingrule)[]
* **resourceGuid**: string
* **rewriteRuleSets**: [ApplicationGatewayRewriteRuleSet](#applicationgatewayrewriteruleset)[]
* **sku**: [ApplicationGatewaySku](#applicationgatewaysku)
* **sslCertificates**: [ApplicationGatewaySslCertificate](#applicationgatewaysslcertificate)[]
* **sslPolicy**: [ApplicationGatewaySslPolicy](#applicationgatewaysslpolicy)
* **trustedRootCertificates**: [ApplicationGatewayTrustedRootCertificate](#applicationgatewaytrustedrootcertificate)[]
* **urlPathMaps**: [ApplicationGatewayUrlPathMap](#applicationgatewayurlpathmap)[]
* **webApplicationFirewallConfiguration**: [ApplicationGatewayWebApplicationFirewallConfiguration](#applicationgatewaywebapplicationfirewallconfiguration)

## ApplicationGatewayAuthenticationCertificate
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayAuthenticationCertificatePropertiesFormat](#applicationgatewayauthenticationcertificatepropertiesformat)
* **type**: string

## ApplicationGatewayAuthenticationCertificatePropertiesFormat
### Properties
* **data**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## ApplicationGatewayAutoscaleConfiguration
### Properties
* **maxCapacity**: int
* **minCapacity**: int (Required)

## ApplicationGatewayBackendAddressPool
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayBackendAddressPoolPropertiesFormat](#applicationgatewaybackendaddresspoolpropertiesformat)
* **type**: string

## ApplicationGatewayBackendAddressPoolPropertiesFormat
### Properties
* **backendAddresses**: [ApplicationGatewayBackendAddress](#applicationgatewaybackendaddress)[]
* **backendIPConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## ApplicationGatewayBackendAddress
### Properties
* **fqdn**: string
* **ipAddress**: string

## NetworkInterfaceIPConfiguration
### Properties
* **etag**: string
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
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
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: string (ReadOnly)

## ApplicationSecurityGroupPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BackendAddressPool
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [BackendAddressPoolPropertiesFormat](#backendaddresspoolpropertiesformat)
* **type**: string (ReadOnly)

## BackendAddressPoolPropertiesFormat
### Properties
* **backendIPConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[] (ReadOnly)
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly)
* **outboundRule**: [SubResource](#subresource) (ReadOnly)
* **outboundRules**: [SubResource](#subresource)[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## SubResource
### Properties
* **id**: string

## InboundNatRule
### Properties
* **etag**: string
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties
### Properties
* **fqdns**: string[] (ReadOnly)
* **groupId**: string (ReadOnly)
* **requiredMemberName**: string (ReadOnly)

## PublicIPAddress
### Properties
* **etag**: string
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat)
* **sku**: [PublicIPAddressSku](#publicipaddresssku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **publicIPAddressVersion**: 'IPv4' | 'IPv6'
* **publicIPAllocationMethod**: 'Dynamic' | 'Static'
* **publicIPPrefix**: [SubResource](#subresource)
* **resourceGuid**: string

## DdosSettings
### Properties
* **ddosCustomPolicy**: [SubResource](#subresource)
* **protectionCoverage**: 'Basic' | 'Standard'

## PublicIPAddressDnsSettings
### Properties
* **domainNameLabel**: string
* **fqdn**: string
* **reverseFqdn**: string

## IPConfiguration
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [IPConfigurationPropertiesFormat](#ipconfigurationpropertiesformat)

## IPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **publicIPAddress**: [PublicIPAddress](#publicipaddress)
* **subnet**: [Subnet](#subnet)

## Subnet
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [SubnetPropertiesFormat](#subnetpropertiesformat)

## SubnetPropertiesFormat
### Properties
* **addressPrefix**: string
* **addressPrefixes**: string[]
* **delegations**: [Delegation](#delegation)[]
* **ipConfigurationProfiles**: [IPConfigurationProfile](#ipconfigurationprofile)[] (ReadOnly)
* **ipConfigurations**: [IPConfiguration](#ipconfiguration)[] (ReadOnly)
* **natGateway**: [SubResource](#subresource)
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup)
* **privateEndpointNetworkPolicies**: string
* **privateEndpoints**: [PrivateEndpoint](#privateendpoint)[] (ReadOnly)
* **privateLinkServiceNetworkPolicies**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **purpose**: string (ReadOnly)
* **resourceNavigationLinks**: [ResourceNavigationLink](#resourcenavigationlink)[]
* **routeTable**: [RouteTable](#routetable)
* **serviceAssociationLinks**: [ServiceAssociationLink](#serviceassociationlink)[]
* **serviceEndpointPolicies**: [ServiceEndpointPolicy](#serviceendpointpolicy)[]
* **serviceEndpoints**: [ServiceEndpointPropertiesFormat](#serviceendpointpropertiesformat)[]

## Delegation
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ServiceDelegationPropertiesFormat](#servicedelegationpropertiesformat)

## ServiceDelegationPropertiesFormat
### Properties
* **actions**: string[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **serviceName**: string

## IPConfigurationProfile
### Properties
* **etag**: string
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
* **etag**: string
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: [NetworkSecurityGroupPropertiesFormat](#networksecuritygrouppropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: string (ReadOnly)

## NetworkSecurityGroupPropertiesFormat
### Properties
* **defaultSecurityRules**: [SecurityRule](#securityrule)[]
* **networkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **resourceGuid**: string
* **securityRules**: [SecurityRule](#securityrule)[]
* **subnets**: [Subnet](#subnet)[] (ReadOnly)

## SecurityRule
### Properties
* **etag**: string
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **sourceAddressPrefix**: string
* **sourceAddressPrefixes**: string[]
* **sourceApplicationSecurityGroups**: [ApplicationSecurityGroup](#applicationsecuritygroup)[]
* **sourcePortRange**: string
* **sourcePortRanges**: string[]

## NetworkInterface
### Properties
* **etag**: string
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: string (ReadOnly)

## NetworkInterfacePropertiesFormat
### Properties
* **dnsSettings**: [NetworkInterfaceDnsSettings](#networkinterfacednssettings)
* **enableAcceleratedNetworking**: bool
* **enableIPForwarding**: bool
* **hostedWorkloads**: string[] (ReadOnly)
* **ipConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[]
* **macAddress**: string
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup)
* **primary**: bool
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint) (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **resourceGuid**: string
* **tapConfigurations**: [NetworkInterfaceTapConfiguration](#networkinterfacetapconfiguration)[]
* **virtualMachine**: [SubResource](#subresource) (ReadOnly)

## NetworkInterfaceDnsSettings
### Properties
* **appliedDnsServers**: string[]
* **dnsServers**: string[]
* **internalDnsNameLabel**: string
* **internalDomainNameSuffix**: string
* **internalFqdn**: string

## PrivateEndpoint
### Properties
* **etag**: string
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: [PrivateEndpointProperties](#privateendpointproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: string (ReadOnly)

## PrivateEndpointProperties
### Properties
* **manualPrivateLinkServiceConnections**: [PrivateLinkServiceConnection](#privatelinkserviceconnection)[]
* **networkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly)
* **privateLinkServiceConnections**: [PrivateLinkServiceConnection](#privatelinkserviceconnection)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **subnet**: [Subnet](#subnet)

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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **requestMessage**: string

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string
* **description**: string
* **status**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NetworkInterfaceTapConfiguration
### Properties
* **etag**: string
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
* **etag**: string
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: [VirtualNetworkTapPropertiesFormat](#virtualnetworktappropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
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
* **etag**: string
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **publicIPAddress**: [PublicIPAddress](#publicipaddress)
* **publicIPPrefix**: [SubResource](#subresource)
* **subnet**: [Subnet](#subnet)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
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
* **etag**: string
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: [RouteTablePropertiesFormat](#routetablepropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: string (ReadOnly)

## RouteTablePropertiesFormat
### Properties
* **disableBgpRoutePropagation**: bool
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **routes**: [Route](#route)[]
* **subnets**: [Subnet](#subnet)[] (ReadOnly)

## Route
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [RoutePropertiesFormat](#routepropertiesformat)

## RoutePropertiesFormat
### Properties
* **addressPrefix**: string
* **nextHopIpAddress**: string
* **nextHopType**: 'Internet' | 'None' | 'VirtualAppliance' | 'VirtualNetworkGateway' | 'VnetLocal' (Required)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceAssociationLink
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [ServiceAssociationLinkPropertiesFormat](#serviceassociationlinkpropertiesformat)
* **type**: string

## ServiceAssociationLinkPropertiesFormat
### Properties
* **allowDelete**: bool
* **link**: string
* **linkedResourceType**: string
* **locations**: string[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ServiceEndpointPolicy
### Properties
* **etag**: string
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: [ServiceEndpointPolicyPropertiesFormat](#serviceendpointpolicypropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: string (ReadOnly)

## ServiceEndpointPolicyPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)
* **serviceEndpointPolicyDefinitions**: [ServiceEndpointPolicyDefinition](#serviceendpointpolicydefinition)[]
* **subnets**: [Subnet](#subnet)[] (ReadOnly)

## ServiceEndpointPolicyDefinition
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ServiceEndpointPolicyDefinitionPropertiesFormat](#serviceendpointpolicydefinitionpropertiesformat)

## ServiceEndpointPolicyDefinitionPropertiesFormat
### Properties
* **description**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **service**: string
* **serviceResources**: string[]

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceEndpointPropertiesFormat
### Properties
* **locations**: string[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **service**: string

## IpTag
### Properties
* **ipTagType**: string
* **tag**: string

## PublicIPAddressSku
### Properties
* **name**: 'Basic' | 'Standard'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationGatewayBackendHttpSettings
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayBackendHttpSettingsPropertiesFormat](#applicationgatewaybackendhttpsettingspropertiesformat)
* **type**: string

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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
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
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayFrontendIPConfigurationPropertiesFormat](#applicationgatewayfrontendipconfigurationpropertiesformat)
* **type**: string

## ApplicationGatewayFrontendIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **publicIPAddress**: [SubResource](#subresource)
* **subnet**: [SubResource](#subresource)

## ApplicationGatewayFrontendPort
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayFrontendPortPropertiesFormat](#applicationgatewayfrontendportpropertiesformat)
* **type**: string

## ApplicationGatewayFrontendPortPropertiesFormat
### Properties
* **port**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## ApplicationGatewayIPConfiguration
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayIPConfigurationPropertiesFormat](#applicationgatewayipconfigurationpropertiesformat)
* **type**: string

## ApplicationGatewayIPConfigurationPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **subnet**: [SubResource](#subresource)

## ApplicationGatewayHttpListener
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayHttpListenerPropertiesFormat](#applicationgatewayhttplistenerpropertiesformat)
* **type**: string

## ApplicationGatewayHttpListenerPropertiesFormat
### Properties
* **customErrorConfigurations**: [ApplicationGatewayCustomError](#applicationgatewaycustomerror)[]
* **frontendIPConfiguration**: [SubResource](#subresource)
* **frontendPort**: [SubResource](#subresource)
* **hostName**: string
* **protocol**: 'Http' | 'Https'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **requireServerNameIndication**: bool
* **sslCertificate**: [SubResource](#subresource)

## ApplicationGatewayProbe
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayProbePropertiesFormat](#applicationgatewayprobepropertiesformat)
* **type**: string

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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **timeout**: int
* **unhealthyThreshold**: int

## ApplicationGatewayProbeHealthResponseMatch
### Properties
* **body**: string
* **statusCodes**: string[]

## ApplicationGatewayRedirectConfiguration
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayRedirectConfigurationPropertiesFormat](#applicationgatewayredirectconfigurationpropertiesformat)
* **type**: string

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
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayRequestRoutingRulePropertiesFormat](#applicationgatewayrequestroutingrulepropertiesformat)
* **type**: string

## ApplicationGatewayRequestRoutingRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource)
* **backendHttpSettings**: [SubResource](#subresource)
* **httpListener**: [SubResource](#subresource)
* **priority**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
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

## ApplicationGatewayHeaderConfiguration
### Properties
* **headerName**: string
* **headerValue**: string

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
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewaySslCertificatePropertiesFormat](#applicationgatewaysslcertificatepropertiesformat)
* **type**: string

## ApplicationGatewaySslCertificatePropertiesFormat
### Properties
* **data**: string
* **keyVaultSecretId**: string
* **password**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **publicCertData**: string

## ApplicationGatewaySslPolicy
### Properties
* **cipherSuites**: 'TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA256' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA256' | 'TLS_DHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_DHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_RSA_WITH_3DES_EDE_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_RSA_WITH_AES_256_CBC_SHA' | 'TLS_RSA_WITH_AES_256_CBC_SHA256' | 'TLS_RSA_WITH_AES_256_GCM_SHA384'[]
* **disabledSslProtocols**: 'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2'[]
* **minProtocolVersion**: 'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2'
* **policyName**: 'AppGwSslPolicy20150501' | 'AppGwSslPolicy20170401' | 'AppGwSslPolicy20170401S'
* **policyType**: 'Custom' | 'Predefined'

## ApplicationGatewayTrustedRootCertificate
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayTrustedRootCertificatePropertiesFormat](#applicationgatewaytrustedrootcertificatepropertiesformat)
* **type**: string

## ApplicationGatewayTrustedRootCertificatePropertiesFormat
### Properties
* **data**: string
* **keyVaultSecretId**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## ApplicationGatewayUrlPathMap
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayUrlPathMapPropertiesFormat](#applicationgatewayurlpathmappropertiesformat)
* **type**: string

## ApplicationGatewayUrlPathMapPropertiesFormat
### Properties
* **defaultBackendAddressPool**: [SubResource](#subresource)
* **defaultBackendHttpSettings**: [SubResource](#subresource)
* **defaultRedirectConfiguration**: [SubResource](#subresource)
* **defaultRewriteRuleSet**: [SubResource](#subresource)
* **pathRules**: [ApplicationGatewayPathRule](#applicationgatewaypathrule)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## ApplicationGatewayPathRule
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayPathRulePropertiesFormat](#applicationgatewaypathrulepropertiesformat)
* **type**: string

## ApplicationGatewayPathRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource)
* **backendHttpSettings**: [SubResource](#subresource)
* **paths**: string[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebApplicationFirewallPolicyPropertiesFormat
### Properties
* **applicationGateways**: [ApplicationGateway](#applicationgateway)[] (ReadOnly)
* **customRules**: [WebApplicationFirewallCustomRule](#webapplicationfirewallcustomrule)[]
* **managedRules**: [ManagedRulesDefinition](#managedrulesdefinition) (Required)
* **policySettings**: [PolicySettings](#policysettings)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly)

## ApplicationGateway
### Properties
* **etag**: string
* **id**: string
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **location**: string
* **name**: string (ReadOnly)
* **properties**: [ApplicationGatewayPropertiesFormat](#applicationgatewaypropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: string (ReadOnly)
* **zones**: string[]

## Dictionary<string,String>
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
* **operator**: 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'IPMatch' | 'LessThan' | 'LessThanOrEqual' | 'Regex' (Required)
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AzureFirewallPropertiesFormat
### Properties
* **applicationRuleCollections**: [AzureFirewallApplicationRuleCollection](#azurefirewallapplicationrulecollection)[]
* **firewallPolicy**: [SubResource](#subresource)
* **hubIpAddresses**: [HubIPAddresses](#hubipaddresses) (ReadOnly)
* **ipConfigurations**: [AzureFirewallIPConfiguration](#azurefirewallipconfiguration)[]
* **natRuleCollections**: [AzureFirewallNatRuleCollection](#azurefirewallnatrulecollection)[]
* **networkRuleCollections**: [AzureFirewallNetworkRuleCollection](#azurefirewallnetworkrulecollection)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **sku**: [AzureFirewallSku](#azurefirewallsku)
* **threatIntelMode**: 'Alert' | 'Deny' | 'Off'
* **virtualHub**: [SubResource](#subresource)

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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
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

## AzureFirewallIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **publicIPAddress**: [SubResource](#subresource)
* **subnet**: [SubResource](#subresource)

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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
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
* **translatedAddress**: string
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **rules**: [AzureFirewallNetworkRule](#azurefirewallnetworkrule)[]

## AzureFirewallNetworkRule
### Properties
* **description**: string
* **destinationAddresses**: string[]
* **destinationPorts**: string[]
* **name**: string
* **protocols**: 'Any' | 'ICMP' | 'TCP' | 'UDP'[]
* **sourceAddresses**: string[]

## AzureFirewallSku
### Properties
* **name**: 'AZFW_Hub' | 'AZFW_VNet'
* **tier**: 'Standard'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BastionHostPropertiesFormat
### Properties
* **dnsName**: string
* **ipConfigurations**: [BastionHostIPConfiguration](#bastionhostipconfiguration)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **publicIPAddress**: [SubResource](#subresource) (Required)
* **subnet**: [SubResource](#subresource) (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualNetworkGatewayConnectionPropertiesFormat
### Properties
* **authorizationKey**: string
* **connectionProtocol**: 'IKEv1' | 'IKEv2'
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' (ReadOnly)
* **connectionType**: 'ExpressRoute' | 'IPsec' | 'Vnet2Vnet' | 'VPNClient' (Required)
* **egressBytesTransferred**: int (ReadOnly)
* **enableBgp**: bool
* **expressRouteGatewayBypass**: bool
* **ingressBytesTransferred**: int (ReadOnly)
* **ipsecPolicies**: [IpsecPolicy](#ipsecpolicy)[]
* **localNetworkGateway2**: [LocalNetworkGateway](#localnetworkgateway)
* **peer**: [SubResource](#subresource)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string
* **routingWeight**: int
* **sharedKey**: string
* **trafficSelectorPolicies**: [TrafficSelectorPolicy](#trafficselectorpolicy)[]
* **tunnelConnectionStatus**: [TunnelConnectionHealth](#tunnelconnectionhealth)[] (ReadOnly)
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
* **etag**: string
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: [LocalNetworkGatewayPropertiesFormat](#localnetworkgatewaypropertiesformat) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: string (ReadOnly)

## LocalNetworkGatewayPropertiesFormat
### Properties
* **bgpSettings**: [BgpSettings](#bgpsettings)
* **gatewayIpAddress**: string
* **localNetworkAddressSpace**: [AddressSpace](#addressspace)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string

## BgpSettings
### Properties
* **asn**: int
* **bgpPeeringAddress**: string
* **peerWeight**: int

## AddressSpace
### Properties
* **addressPrefixes**: string[]

## Dictionary<string,String>
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
* **etag**: string
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: [VirtualNetworkGatewayPropertiesFormat](#virtualnetworkgatewaypropertiesformat) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: string (ReadOnly)

## VirtualNetworkGatewayPropertiesFormat
### Properties
* **activeActive**: bool
* **bgpSettings**: [BgpSettings](#bgpsettings)
* **customRoutes**: [AddressSpace](#addressspace)
* **enableBgp**: bool
* **enableDnsForwarding**: bool
* **gatewayDefaultSite**: [SubResource](#subresource)
* **gatewayType**: 'ExpressRoute' | 'Vpn'
* **inboundDnsForwardingEndpoint**: string (ReadOnly)
* **ipConfigurations**: [VirtualNetworkGatewayIPConfiguration](#virtualnetworkgatewayipconfiguration)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string
* **sku**: [VirtualNetworkGatewaySku](#virtualnetworkgatewaysku)
* **vpnClientConfiguration**: [VpnClientConfiguration](#vpnclientconfiguration)
* **vpnGatewayGeneration**: 'Generation1' | 'Generation2' | 'None'
* **vpnType**: 'PolicyBased' | 'RouteBased'

## VirtualNetworkGatewayIPConfiguration
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [VirtualNetworkGatewayIPConfigurationPropertiesFormat](#virtualnetworkgatewayipconfigurationpropertiesformat)

## VirtualNetworkGatewayIPConfigurationPropertiesFormat
### Properties
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicIPAddress**: [SubResource](#subresource)
* **subnet**: [SubResource](#subresource)

## VirtualNetworkGatewaySku
### Properties
* **capacity**: int
* **name**: 'Basic' | 'ErGw1AZ' | 'ErGw2AZ' | 'ErGw3AZ' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | 'VpnGw1' | 'VpnGw1AZ' | 'VpnGw2' | 'VpnGw2AZ' | 'VpnGw3' | 'VpnGw3AZ' | 'VpnGw4' | 'VpnGw4AZ' | 'VpnGw5' | 'VpnGw5AZ'
* **tier**: 'Basic' | 'ErGw1AZ' | 'ErGw2AZ' | 'ErGw3AZ' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | 'VpnGw1' | 'VpnGw1AZ' | 'VpnGw2' | 'VpnGw2AZ' | 'VpnGw3' | 'VpnGw3AZ' | 'VpnGw4' | 'VpnGw4AZ' | 'VpnGw5' | 'VpnGw5AZ'

## VpnClientConfiguration
### Properties
* **aadAudience**: string
* **aadIssuer**: string
* **aadTenant**: string
* **radiusServerAddress**: string
* **radiusServerSecret**: string
* **vpnClientAddressPool**: [AddressSpace](#addressspace)
* **vpnClientIpsecPolicies**: [IpsecPolicy](#ipsecpolicy)[]
* **vpnClientProtocols**: 'IkeV2' | 'OpenVPN' | 'SSTP'[]
* **vpnClientRevokedCertificates**: [VpnClientRevokedCertificate](#vpnclientrevokedcertificate)[]
* **vpnClientRootCertificates**: [VpnClientRootCertificate](#vpnclientrootcertificate)[]

## VpnClientRevokedCertificate
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [VpnClientRevokedCertificatePropertiesFormat](#vpnclientrevokedcertificatepropertiesformat)

## VpnClientRevokedCertificatePropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **thumbprint**: string

## VpnClientRootCertificate
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [VpnClientRootCertificatePropertiesFormat](#vpnclientrootcertificatepropertiesformat) (Required)

## VpnClientRootCertificatePropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicCertData**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DdosProtectionPlanPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)
* **virtualNetworks**: [SubResource](#subresource)[] (ReadOnly)

## Dictionary<string,String>
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

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
* **lastModifiedBy**: string
* **microsoftPeeringConfig**: [ExpressRouteCircuitPeeringConfig](#expressroutecircuitpeeringconfig)
* **peerASN**: int
* **peeredConnections**: [PeerExpressRouteCircuitConnection](#peerexpressroutecircuitconnection)[] (ReadOnly)
* **peeringType**: 'AzurePrivatePeering' | 'AzurePublicPeering' | 'MicrosoftPeering'
* **primaryAzurePort**: string
* **primaryPeerAddressPrefix**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
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
* **circuitConnectionStatus**: 'Connected' | 'Connecting' | 'Disconnected'
* **expressRouteCircuitPeering**: [SubResource](#subresource)
* **peerExpressRouteCircuitPeering**: [SubResource](#subresource)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

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
* **advertisedPublicPrefixesState**: 'Configured' | 'Configuring' | 'NotConfigured' | 'ValidationNeeded'
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
* **circuitConnectionStatus**: 'Connected' | 'Connecting' | 'Disconnected'
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

## Dictionary<string,String>
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
* **lastModifiedBy**: string
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExpressRouteGatewayProperties
### Properties
* **autoScaleConfiguration**: [schemas:168_autoScaleConfiguration](#schemas168autoscaleconfiguration)
* **expressRouteConnections**: [ExpressRouteConnection](#expressrouteconnection)[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **virtualHub**: [VirtualHubId](#virtualhubid) (Required)

## schemas:168_autoScaleConfiguration
### Properties
* **bounds**: [schemas:168_autoScaleConfiguration_bounds](#schemas168autoscaleconfigurationbounds)

## schemas:168_autoScaleConfiguration_bounds
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
* **expressRouteCircuitPeering**: [ExpressRouteCircuitPeeringId](#expressroutecircuitpeeringid) (Required)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **routingWeight**: int

## ExpressRouteCircuitPeeringId
### Properties
* **id**: string

## VirtualHubId
### Properties
* **id**: string

## Dictionary<string,String>
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
* **resourceGuid**: string

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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FirewallPolicyPropertiesFormat
### Properties
* **basePolicy**: [SubResource](#subresource)
* **childPolicies**: [SubResource](#subresource)[] (ReadOnly)
* **firewalls**: [SubResource](#subresource)[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **ruleGroups**: [SubResource](#subresource)[] (ReadOnly)
* **threatIntelMode**: 'Alert' | 'Deny' | 'Off'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FirewallPolicyRuleGroupProperties
### Properties
* **priority**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
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
* **targetFqdns**: string[]

### NetworkRuleCondition
#### Properties
* **destinationAddresses**: string[]
* **destinationPorts**: string[]
* **ipProtocols**: 'Any' | 'ICMP' | 'TCP' | 'UDP'[]
* **ruleConditionType**: 'NetworkRuleCondition' (Required)
* **sourceAddresses**: string[]


## ApplicationRuleCondition
### Properties
* **destinationAddresses**: string[]
* **fqdnTags**: string[]
* **protocols**: [FirewallPolicyRuleConditionApplicationProtocol](#firewallpolicyruleconditionapplicationprotocol)[]
* **ruleConditionType**: 'ApplicationRuleCondition' (Required)
* **sourceAddresses**: string[]
* **targetFqdns**: string[]

## FirewallPolicyRuleConditionApplicationProtocol
### Properties
* **port**: int
* **protocolType**: 'Http' | 'Https'

## NetworkRuleCondition
### Properties
* **destinationAddresses**: string[]
* **destinationPorts**: string[]
* **ipProtocols**: 'Any' | 'ICMP' | 'TCP' | 'UDP'[]
* **ruleConditionType**: 'NetworkRuleCondition' (Required)
* **sourceAddresses**: string[]

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

## LoadBalancerPropertiesFormat
### Properties
* **backendAddressPools**: [BackendAddressPool](#backendaddresspool)[]
* **frontendIPConfigurations**: [FrontendIPConfiguration](#frontendipconfiguration)[]
* **inboundNatPools**: [InboundNatPool](#inboundnatpool)[]
* **inboundNatRules**: [InboundNatRule](#inboundnatrule)[]
* **loadBalancingRules**: [LoadBalancingRule](#loadbalancingrule)[]
* **outboundRules**: [OutboundRule](#outboundrule)[]
* **probes**: [Probe](#probe)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **resourceGuid**: string

## InboundNatPool
### Properties
* **etag**: string
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## LoadBalancingRule
### Properties
* **etag**: string
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## OutboundRule
### Properties
* **etag**: string
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## Probe
### Properties
* **etag**: string
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **requestPath**: string

## LoadBalancerSku
### Properties
* **name**: 'Basic' | 'Standard'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NatGatewayPropertiesFormat
### Properties
* **idleTimeoutInMinutes**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **publicIpAddresses**: [SubResource](#subresource)[]
* **publicIpPrefixes**: [SubResource](#subresource)[]
* **resourceGuid**: string
* **subnets**: [SubResource](#subresource)[] (ReadOnly)

## NatGatewaySku
### Properties
* **name**: 'Standard'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NetworkProfilePropertiesFormat
### Properties
* **containerNetworkInterfaceConfigurations**: [ContainerNetworkInterfaceConfiguration](#containernetworkinterfaceconfiguration)[]
* **containerNetworkInterfaces**: [ContainerNetworkInterface](#containernetworkinterface)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)

## ContainerNetworkInterfaceConfiguration
### Properties
* **etag**: string
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
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ContainerNetworkInterfacePropertiesFormat](#containernetworkinterfacepropertiesformat)
* **type**: string (ReadOnly)

## ContainerNetworkInterfacePropertiesFormat
### Properties
* **container**: [Container](#container)
* **containerNetworkInterfaceConfiguration**: [ContainerNetworkInterfaceConfiguration](#containernetworkinterfaceconfiguration)
* **ipConfigurations**: [ContainerNetworkInterfaceIpConfiguration](#containernetworkinterfaceipconfiguration)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Container
### Properties
* **id**: string

## ContainerNetworkInterfaceIpConfiguration
### Properties
* **etag**: string
* **name**: string
* **properties**: [ContainerNetworkInterfaceIpConfigurationPropertiesFormat](#containernetworkinterfaceipconfigurationpropertiesformat)
* **type**: string (ReadOnly)

## ContainerNetworkInterfaceIpConfigurationPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NetworkWatcherPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConnectionMonitorParameters
### Properties
* **autoStart**: bool
* **destination**: [ConnectionMonitorDestination](#connectionmonitordestination) (Required)
* **monitoringIntervalInSeconds**: int
* **monitoringStatus**: string (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **source**: [ConnectionMonitorSource](#connectionmonitorsource) (Required)
* **startTime**: string (ReadOnly)

## ConnectionMonitorDestination
### Properties
* **address**: string
* **port**: int
* **resourceId**: string

## ConnectionMonitorSource
### Properties
* **port**: int
* **resourceId**: string (Required)

## Dictionary<string,String>
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **vpnClientAddressPool**: [AddressSpace](#addressspace)

## VpnClientConnectionHealth
### Properties
* **allocatedIpAddresses**: string[]
* **totalEgressBytesTransferred**: int (ReadOnly)
* **totalIngressBytesTransferred**: int (ReadOnly)
* **vpnClientConnectionsCount**: int

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateLinkServiceProperties
### Properties
* **alias**: string (ReadOnly)
* **autoApproval**: [schemas:377_autoApproval](#schemas377autoapproval)
* **fqdns**: string[]
* **ipConfigurations**: [PrivateLinkServiceIpConfiguration](#privatelinkserviceipconfiguration)[]
* **loadBalancerFrontendIpConfigurations**: [FrontendIPConfiguration](#frontendipconfiguration)[]
* **networkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly)
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **visibility**: [schemas:377_visibility](#schemas377visibility)

## schemas:377_autoApproval
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
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
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## schemas:377_visibility
### Properties
* **subscriptions**: string[]

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PublicIPPrefixPropertiesFormat
### Properties
* **ipPrefix**: string
* **ipTags**: [IpTag](#iptag)[]
* **loadBalancerFrontendIpConfiguration**: [SubResource](#subresource) (ReadOnly)
* **prefixLength**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **publicIPAddresses**: [ReferencedPublicIpAddress](#referencedpublicipaddress)[]
* **publicIPAddressVersion**: 'IPv4' | 'IPv6'
* **resourceGuid**: string

## ReferencedPublicIpAddress
### Properties
* **id**: string

## PublicIPPrefixSku
### Properties
* **name**: 'Standard'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RouteFilterPropertiesFormat
### Properties
* **ipv6Peerings**: [ExpressRouteCircuitPeering](#expressroutecircuitpeering)[]
* **peerings**: [ExpressRouteCircuitPeering](#expressroutecircuitpeering)[]
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
* **routeFilterRuleType**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualHubProperties
### Properties
* **addressPrefix**: string
* **azureFirewall**: [SubResource](#subresource)
* **expressRouteGateway**: [SubResource](#subresource)
* **p2SVpnGateway**: [SubResource](#subresource)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **routeTable**: [VirtualHubRouteTable](#virtualhubroutetable)
* **securityProviderName**: string
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **remoteVirtualNetwork**: [SubResource](#subresource)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **resourceGuid**: string
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
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [VirtualNetworkPeeringPropertiesFormat](#virtualnetworkpeeringpropertiesformat)

## VirtualNetworkPeeringPropertiesFormat
### Properties
* **allowForwardedTraffic**: bool
* **allowGatewayTransit**: bool
* **allowVirtualNetworkAccess**: bool
* **peeringState**: 'Connected' | 'Disconnected' | 'Initiated'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **remoteAddressSpace**: [AddressSpace](#addressspace)
* **remoteVirtualNetwork**: [SubResource](#subresource)
* **useRemoteGateways**: bool

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
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

## Dictionary<string,String>
### Properties
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **virtualHubs**: [SubResource](#subresource)[] (ReadOnly)
* **vpnSites**: [SubResource](#subresource)[] (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VpnGatewayProperties
### Properties
* **bgpSettings**: [BgpSettings](#bgpsettings)
* **connections**: [VpnConnection](#vpnconnection)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
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
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown'
* **egressBytesTransferred**: int (ReadOnly)
* **enableBgp**: bool
* **enableInternetSecurity**: bool
* **enableRateLimiting**: bool
* **ingressBytesTransferred**: int (ReadOnly)
* **ipsecPolicies**: [IpsecPolicy](#ipsecpolicy)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **remoteVpnSite**: [SubResource](#subresource)
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
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown'
* **egressBytesTransferred**: int (ReadOnly)
* **enableBgp**: bool
* **enableRateLimiting**: bool
* **ingressBytesTransferred**: int (ReadOnly)
* **ipsecPolicies**: [IpsecPolicy](#ipsecpolicy)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **routingWeight**: int
* **sharedKey**: string
* **useLocalAzureIpAddress**: bool
* **usePolicyBasedTrafficSelectors**: bool
* **vpnConnectionProtocolType**: 'IKEv1' | 'IKEv2'
* **vpnSiteLink**: [SubResource](#subresource)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VpnServerConfigurationProperties
### Properties
* **aadAuthenticationParameters**: [AadAuthenticationParameters](#aadauthenticationparameters)
* **etag**: string
* **name**: string
* **p2SVpnGateways**: [P2SVpnGateway](#p2svpngateway)[] (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **radiusClientRootCertificates**: [VpnServerConfigRadiusClientRootCertificate](#vpnserverconfigradiusclientrootcertificate)[]
* **radiusServerAddress**: string
* **radiusServerRootCertificates**: [VpnServerConfigRadiusServerRootCertificate](#vpnserverconfigradiusserverrootcertificate)[]
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
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: string (ReadOnly)

## Dictionary<string,String>
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

## Dictionary<string,String>
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
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
* **ipAddress**: string
* **linkProperties**: [VpnLinkProviderProperties](#vpnlinkproviderproperties)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## VpnLinkBgpSettings
### Properties
* **asn**: int
* **bgpPeeringAddress**: string

## VpnLinkProviderProperties
### Properties
* **linkProviderName**: string
* **linkSpeedInMbps**: int

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

