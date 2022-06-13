# Microsoft.Network @ 2018-11-01

## Resource Microsoft.Network/applicationGateways@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The identity of the application gateway, if configured.
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationGatewayPropertiesFormat](#applicationgatewaypropertiesformat): Properties of the application gateway.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/applicationGateways' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: A list of availability zones denoting where the resource needs to come from.

## Resource Microsoft.Network/applicationSecurityGroups@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationSecurityGroupPropertiesFormat](#applicationsecuritygrouppropertiesformat): Properties of the application security group.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/applicationSecurityGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/azureFirewalls@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AzureFirewallPropertiesFormat](#azurefirewallpropertiesformat): Properties of the Azure Firewall.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/azureFirewalls' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/connections@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkGatewayConnectionPropertiesFormat](#virtualnetworkgatewayconnectionpropertiesformat) (Required): Properties of the virtual network gateway connection.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/connections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/ddosCustomPolicies@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DdosCustomPolicyPropertiesFormat](#ddoscustompolicypropertiesformat): Properties of the DDoS custom policy.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/ddosCustomPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/ddosProtectionPlans@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DdosProtectionPlanPropertiesFormat](#ddosprotectionplanpropertiesformat): Properties of the DDoS protection plan.
* **tags**: [DdosProtectionPlanTags](#ddosprotectionplantags): Resource tags.
* **type**: 'Microsoft.Network/ddosProtectionPlans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteCircuitPropertiesFormat](#expressroutecircuitpropertiesformat): Properties of ExpressRouteCircuit.
* **sku**: [ExpressRouteCircuitSku](#expressroutecircuitsku): The SKU.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/expressRouteCircuits' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits/authorizations@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationPropertiesFormat](#authorizationpropertiesformat)
* **type**: 'Microsoft.Network/expressRouteCircuits/authorizations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits/peerings@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteCircuitPeeringPropertiesFormat](#expressroutecircuitpeeringpropertiesformat)
* **type**: 'Microsoft.Network/expressRouteCircuits/peerings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits/peerings/connections@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteCircuitConnectionPropertiesFormat](#expressroutecircuitconnectionpropertiesformat)
* **type**: 'Microsoft.Network/expressRouteCircuits/peerings/connections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCrossConnections@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteCrossConnectionProperties](#expressroutecrossconnectionproperties): Properties of ExpressRouteCrossConnection.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/expressRouteCrossConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCrossConnections/peerings@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteCrossConnectionPeeringProperties](#expressroutecrossconnectionpeeringproperties)
* **type**: 'Microsoft.Network/expressRouteCrossConnections/peerings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteGateways@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteGatewayProperties](#expressroutegatewayproperties): ExpressRoute gateway resource properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/expressRouteGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteGateways/expressRouteConnections@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteConnectionProperties](#expressrouteconnectionproperties): Properties of the ExpressRouteConnection subresource.
* **type**: 'Microsoft.Network/expressRouteGateways/expressRouteConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/ExpressRoutePorts@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRoutePortPropertiesFormat](#expressrouteportpropertiesformat): ExpressRoutePort properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/ExpressRoutePorts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/interfaceEndpoints@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InterfaceEndpointProperties](#interfaceendpointproperties): Properties of the interface endpoint.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/interfaceEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/loadBalancers@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LoadBalancerPropertiesFormat](#loadbalancerpropertiesformat): Properties of load balancer.
* **sku**: [LoadBalancerSku](#loadbalancersku): The load balancer SKU.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/loadBalancers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/loadBalancers/inboundNatRules@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InboundNatRulePropertiesFormat](#inboundnatrulepropertiesformat): Properties of load balancer inbound nat rule.
* **type**: 'Microsoft.Network/loadBalancers/inboundNatRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/localNetworkGateways@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LocalNetworkGatewayPropertiesFormat](#localnetworkgatewaypropertiesformat) (Required): Properties of the local network gateway.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/localNetworkGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkInterfaces@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat): Properties of the network interface.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkInterfaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkInterfaces/tapConfigurations@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkInterfaceTapConfigurationPropertiesFormat](#networkinterfacetapconfigurationpropertiesformat): Properties of the Virtual Network Tap configuration
* **type**: 'Microsoft.Network/networkInterfaces/tapConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkProfiles@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkProfilePropertiesFormat](#networkprofilepropertiesformat): Network profile properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityGroups@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkSecurityGroupPropertiesFormat](#networksecuritygrouppropertiesformat): Properties of the network security group
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkSecurityGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityGroups/securityRules@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityRulePropertiesFormat](#securityrulepropertiesformat): Properties of the security rule
* **type**: 'Microsoft.Network/networkSecurityGroups/securityRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkWatchers@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkWatcherPropertiesFormat](#networkwatcherpropertiesformat): The network watcher properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkWatchers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkWatchers/connectionMonitors@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Connection monitor location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionMonitorParameters](#connectionmonitorparameters) (Required): Parameters that define the operation to create a connection monitor.
* **tags**: [ConnectionMonitorTags](#connectionmonitortags): Connection monitor tags.
* **type**: 'Microsoft.Network/networkWatchers/connectionMonitors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkWatchers/packetCaptures@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PacketCaptureParameters](#packetcaptureparameters) (Required): Parameters that define the create packet capture operation.
* **type**: 'Microsoft.Network/networkWatchers/packetCaptures' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/p2svpnGateways@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [P2SVpnGatewayProperties](#p2svpngatewayproperties): Parameters for P2SVpnGateway
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/p2svpnGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/publicIPAddresses@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat): Public IP address properties.
* **sku**: [PublicIPAddressSku](#publicipaddresssku): The public IP address SKU.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/publicIPAddresses' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: A list of availability zones denoting the IP allocated for the resource needs to come from.

## Resource Microsoft.Network/publicIPPrefixes@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublicIPPrefixPropertiesFormat](#publicipprefixpropertiesformat): Public IP prefix properties.
* **sku**: [PublicIPPrefixSku](#publicipprefixsku): The public IP prefix SKU.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/publicIPPrefixes' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: A list of availability zones denoting the IP allocated for the resource needs to come from.

## Resource Microsoft.Network/routeFilters@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RouteFilterPropertiesFormat](#routefilterpropertiesformat): Route Filter Resource
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/routeFilters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/routeFilters/routeFilterRules@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RouteFilterRulePropertiesFormat](#routefilterrulepropertiesformat): Route Filter Rule Resource
* **type**: 'Microsoft.Network/routeFilters/routeFilterRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/routeTables@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RouteTablePropertiesFormat](#routetablepropertiesformat): Properties of the route table.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/routeTables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/routeTables/routes@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoutePropertiesFormat](#routepropertiesformat): Properties of the route.
* **type**: 'Microsoft.Network/routeTables/routes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/serviceEndpointPolicies@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceEndpointPolicyPropertiesFormat](#serviceendpointpolicypropertiesformat): Properties of the service end point policy
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/serviceEndpointPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceEndpointPolicyDefinitionPropertiesFormat](#serviceendpointpolicydefinitionpropertiesformat): Properties of the service endpoint policy definition
* **type**: 'Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualHubs@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualHubProperties](#virtualhubproperties): Parameters for VirtualHub
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/virtualHubs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworkGateways@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkGatewayPropertiesFormat](#virtualnetworkgatewaypropertiesformat) (Required): Properties of the virtual network gateway.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/virtualNetworkGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworks@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkPropertiesFormat](#virtualnetworkpropertiesformat): Properties of the virtual network.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/virtualNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworks/subnets@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SubnetPropertiesFormat](#subnetpropertiesformat): Properties of the subnet.
* **type**: 'Microsoft.Network/virtualNetworks/subnets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworks/virtualNetworkPeerings@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkPeeringPropertiesFormat](#virtualnetworkpeeringpropertiesformat): Properties of the virtual network peering.
* **type**: 'Microsoft.Network/virtualNetworks/virtualNetworkPeerings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworkTaps@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkTapPropertiesFormat](#virtualnetworktappropertiesformat): Virtual Network Tap Properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/virtualNetworkTaps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualWans@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualWanProperties](#virtualwanproperties): Parameters for VirtualWAN
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/virtualWans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualWans/p2sVpnServerConfigurations@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [P2SVpnServerConfigurationProperties](#p2svpnserverconfigurationproperties): Parameters for P2SVpnServerConfiguration
* **type**: 'Microsoft.Network/virtualWans/p2sVpnServerConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/vpnGateways@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VpnGatewayProperties](#vpngatewayproperties): Parameters for VpnGateway
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/vpnGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/vpnGateways/vpnConnections@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VpnConnectionProperties](#vpnconnectionproperties): Parameters for VpnConnection
* **type**: 'Microsoft.Network/vpnGateways/vpnConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/vpnSites@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VpnSiteProperties](#vpnsiteproperties): Parameters for VpnSite
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/vpnSites' (ReadOnly, DeployTimeConstant): The resource type

## AddressSpace
### Properties
* **addressPrefixes**: string[]: A list of address blocks reserved for this virtual network in CIDR notation.

## ApplicationGatewayAuthenticationCertificate
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the authentication certificate that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayAuthenticationCertificatePropertiesFormat](#applicationgatewayauthenticationcertificatepropertiesformat): Authentication certificates properties of an application gateway.
* **type**: string: Type of the resource.

## ApplicationGatewayAuthenticationCertificatePropertiesFormat
### Properties
* **data**: string: Certificate public data.
* **provisioningState**: string: Provisioning state of the authentication certificate resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## ApplicationGatewayAutoscaleConfiguration
### Properties
* **maxCapacity**: int: Upper bound on number of Application Gateway capacity
* **minCapacity**: int (Required): Lower bound on number of Application Gateway capacity

## ApplicationGatewayBackendAddress
### Properties
* **fqdn**: string: Fully qualified domain name (FQDN).
* **ipAddress**: string: IP address

## ApplicationGatewayBackendAddressPool
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the backend address pool that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayBackendAddressPoolPropertiesFormat](#applicationgatewaybackendaddresspoolpropertiesformat): Properties of Backend Address Pool of an application gateway.
* **type**: string: Type of the resource.

## ApplicationGatewayBackendAddressPoolPropertiesFormat
### Properties
* **backendAddresses**: [ApplicationGatewayBackendAddress](#applicationgatewaybackendaddress)[]: Backend addresses
* **backendIPConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[]: Collection of references to IPs defined in network interfaces.
* **provisioningState**: string: Provisioning state of the backend address pool resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## ApplicationGatewayBackendHttpSettings
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the backend http settings that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayBackendHttpSettingsPropertiesFormat](#applicationgatewaybackendhttpsettingspropertiesformat): Properties of Backend address pool settings of an application gateway.
* **type**: string: Type of the resource.

## ApplicationGatewayBackendHttpSettingsPropertiesFormat
### Properties
* **affinityCookieName**: string: Cookie name to use for the affinity cookie.
* **authenticationCertificates**: [SubResource](#subresource)[]: Array of references to application gateway authentication certificates.
* **connectionDraining**: [ApplicationGatewayConnectionDraining](#applicationgatewayconnectiondraining): Connection draining of the backend http settings resource.
* **cookieBasedAffinity**: 'Disabled' | 'Enabled' | string: Cookie based affinity.
* **hostName**: string: Host header to be sent to the backend servers.
* **path**: string: Path which should be used as a prefix for all HTTP requests. Null means no path will be prefixed. Default value is null.
* **pickHostNameFromBackendAddress**: bool: Whether to pick host header should be picked from the host name of the backend server. Default value is false.
* **port**: int: The destination port on the backend.
* **probe**: [SubResource](#subresource): Probe resource of an application gateway.
* **probeEnabled**: bool: Whether the probe is enabled. Default value is false.
* **protocol**: 'Http' | 'Https' | string: The protocol used to communicate with the backend. Possible values are 'Http' and 'Https'.
* **provisioningState**: string: Provisioning state of the backend http settings resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **requestTimeout**: int: Request timeout in seconds. Application Gateway will fail the request if response is not received within RequestTimeout. Acceptable values are from 1 second to 86400 seconds.
* **trustedRootCertificates**: [SubResource](#subresource)[]: Array of references to application gateway trusted root certificates.

## ApplicationGatewayConnectionDraining
### Properties
* **drainTimeoutInSec**: int (Required): The number of seconds connection draining is active. Acceptable values are from 1 second to 3600 seconds.
* **enabled**: bool (Required): Whether connection draining is enabled or not.

## ApplicationGatewayCustomError
### Properties
* **customErrorPageUrl**: string: Error page URL of the application gateway customer error.
* **statusCode**: 'HttpStatus403' | 'HttpStatus502' | string: Status code of the application gateway customer error.

## ApplicationGatewayFirewallDisabledRuleGroup
### Properties
* **ruleGroupName**: string (Required): The name of the rule group that will be disabled.
* **rules**: int[]: The list of rules that will be disabled. If null, all rules of the rule group will be disabled.

## ApplicationGatewayFirewallExclusion
### Properties
* **matchVariable**: string (Required): The variable to be excluded.
* **selector**: string (Required): When matchVariable is a collection, operator used to specify which elements in the collection this exclusion applies to.
* **selectorMatchOperator**: string (Required): When matchVariable is a collection, operate on the selector to specify which elements in the collection this exclusion applies to.

## ApplicationGatewayFrontendIPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the frontend IP configuration that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayFrontendIPConfigurationPropertiesFormat](#applicationgatewayfrontendipconfigurationpropertiesformat): Properties of Frontend IP configuration of an application gateway.
* **type**: string: Type of the resource.

## ApplicationGatewayFrontendIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string: PrivateIPAddress of the network interface IP Configuration.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: PrivateIP allocation method.
* **provisioningState**: string: Provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicIPAddress**: [SubResource](#subresource): Reference of the PublicIP resource.
* **subnet**: [SubResource](#subresource): Reference of the subnet resource.

## ApplicationGatewayFrontendPort
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the frontend port that is unique within an Application Gateway
* **properties**: [ApplicationGatewayFrontendPortPropertiesFormat](#applicationgatewayfrontendportpropertiesformat): Properties of Frontend port of an application gateway.
* **type**: string: Type of the resource.

## ApplicationGatewayFrontendPortPropertiesFormat
### Properties
* **port**: int: Frontend port
* **provisioningState**: string: Provisioning state of the frontend port resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## ApplicationGatewayHeaderConfiguration
### Properties
* **headerName**: string: Header name of the header configuration
* **headerValue**: string: Header value of the header configuration

## ApplicationGatewayHttpListener
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the HTTP listener that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayHttpListenerPropertiesFormat](#applicationgatewayhttplistenerpropertiesformat): Properties of HTTP listener of an application gateway.
* **type**: string: Type of the resource.

## ApplicationGatewayHttpListenerPropertiesFormat
### Properties
* **customErrorConfigurations**: [ApplicationGatewayCustomError](#applicationgatewaycustomerror)[]: Custom error configurations of the HTTP listener.
* **frontendIPConfiguration**: [SubResource](#subresource): Frontend IP configuration resource of an application gateway.
* **frontendPort**: [SubResource](#subresource): Frontend port resource of an application gateway.
* **hostName**: string: Host name of HTTP listener.
* **protocol**: 'Http' | 'Https' | string: Protocol of the HTTP listener. Possible values are 'Http' and 'Https'.
* **provisioningState**: string: Provisioning state of the HTTP listener resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **requireServerNameIndication**: bool: Applicable only if protocol is https. Enables SNI for multi-hosting.
* **sslCertificate**: [SubResource](#subresource): SSL certificate resource of an application gateway.

## ApplicationGatewayIPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the IP configuration that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayIPConfigurationPropertiesFormat](#applicationgatewayipconfigurationpropertiesformat): Properties of IP configuration of an application gateway.
* **type**: string: Type of the resource.

## ApplicationGatewayIPConfigurationPropertiesFormat
### Properties
* **provisioningState**: string: Provisioning state of the application gateway subnet resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **subnet**: [SubResource](#subresource): Reference of the subnet resource. A subnet from where application gateway gets its private address.

## ApplicationGatewayPathRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the path rule that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayPathRulePropertiesFormat](#applicationgatewaypathrulepropertiesformat): Properties of path rule of an application gateway.
* **type**: string: Type of the resource.

## ApplicationGatewayPathRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource): Backend address pool resource of URL path map path rule.
* **backendHttpSettings**: [SubResource](#subresource): Backend http settings resource of URL path map path rule.
* **paths**: string[]: Path rules of URL path map.
* **provisioningState**: string: Path rule of URL path map resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **redirectConfiguration**: [SubResource](#subresource): Redirect configuration resource of URL path map path rule.
* **rewriteRuleSet**: [SubResource](#subresource): Rewrite rule set resource of URL path map path rule.

## ApplicationGatewayProbe
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the probe that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayProbePropertiesFormat](#applicationgatewayprobepropertiesformat): Properties of probe of an application gateway.
* **type**: string: Type of the resource.

## ApplicationGatewayProbeHealthResponseMatch
### Properties
* **body**: string: Body that must be contained in the health response. Default value is empty.
* **statusCodes**: string[]: Allowed ranges of healthy status codes. Default range of healthy status codes is 200-399.

## ApplicationGatewayProbePropertiesFormat
### Properties
* **host**: string: Host name to send the probe to.
* **interval**: int: The probing interval in seconds. This is the time interval between two consecutive probes. Acceptable values are from 1 second to 86400 seconds.
* **match**: [ApplicationGatewayProbeHealthResponseMatch](#applicationgatewayprobehealthresponsematch): Criterion for classifying a healthy probe response.
* **minServers**: int: Minimum number of servers that are always marked healthy. Default value is 0.
* **path**: string: Relative path of probe. Valid path starts from '/'. Probe is sent to <Protocol>://<host>:<port><path>
* **pickHostNameFromBackendHttpSettings**: bool: Whether the host header should be picked from the backend http settings. Default value is false.
* **protocol**: 'Http' | 'Https' | string: The protocol used for the probe. Possible values are 'Http' and 'Https'.
* **provisioningState**: string: Provisioning state of the backend http settings resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **timeout**: int: the probe timeout in seconds. Probe marked as failed if valid response is not received with this timeout period. Acceptable values are from 1 second to 86400 seconds.
* **unhealthyThreshold**: int: The probe retry count. Backend server is marked down after consecutive probe failure count reaches UnhealthyThreshold. Acceptable values are from 1 second to 20.

## ApplicationGatewayPropertiesFormat
### Properties
* **authenticationCertificates**: [ApplicationGatewayAuthenticationCertificate](#applicationgatewayauthenticationcertificate)[]: Authentication certificates of the application gateway resource.
* **autoscaleConfiguration**: [ApplicationGatewayAutoscaleConfiguration](#applicationgatewayautoscaleconfiguration): Autoscale Configuration.
* **backendAddressPools**: [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)[]: Backend address pool of the application gateway resource.
* **backendHttpSettingsCollection**: [ApplicationGatewayBackendHttpSettings](#applicationgatewaybackendhttpsettings)[]: Backend http settings of the application gateway resource.
* **customErrorConfigurations**: [ApplicationGatewayCustomError](#applicationgatewaycustomerror)[]: Custom error configurations of the application gateway resource.
* **enableFips**: bool: Whether FIPS is enabled on the application gateway resource.
* **enableHttp2**: bool: Whether HTTP2 is enabled on the application gateway resource.
* **frontendIPConfigurations**: [ApplicationGatewayFrontendIPConfiguration](#applicationgatewayfrontendipconfiguration)[]: Frontend IP addresses of the application gateway resource.
* **frontendPorts**: [ApplicationGatewayFrontendPort](#applicationgatewayfrontendport)[]: Frontend ports of the application gateway resource.
* **gatewayIPConfigurations**: [ApplicationGatewayIPConfiguration](#applicationgatewayipconfiguration)[]: Subnets of application the gateway resource.
* **httpListeners**: [ApplicationGatewayHttpListener](#applicationgatewayhttplistener)[]: Http listeners of the application gateway resource.
* **operationalState**: 'Running' | 'Starting' | 'Stopped' | 'Stopping' | string (ReadOnly): Operational state of the application gateway resource.
* **probes**: [ApplicationGatewayProbe](#applicationgatewayprobe)[]: Probes of the application gateway resource.
* **provisioningState**: string: Provisioning state of the application gateway resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **redirectConfigurations**: [ApplicationGatewayRedirectConfiguration](#applicationgatewayredirectconfiguration)[]: Redirect configurations of the application gateway resource.
* **requestRoutingRules**: [ApplicationGatewayRequestRoutingRule](#applicationgatewayrequestroutingrule)[]: Request routing rules of the application gateway resource.
* **resourceGuid**: string: Resource GUID property of the application gateway resource.
* **rewriteRuleSets**: [ApplicationGatewayRewriteRuleSet](#applicationgatewayrewriteruleset)[]: Rewrite rules for the application gateway resource.
* **sku**: [ApplicationGatewaySku](#applicationgatewaysku): SKU of the application gateway resource.
* **sslCertificates**: [ApplicationGatewaySslCertificate](#applicationgatewaysslcertificate)[]: SSL certificates of the application gateway resource.
* **sslPolicy**: [ApplicationGatewaySslPolicy](#applicationgatewaysslpolicy): SSL policy of the application gateway resource.
* **trustedRootCertificates**: [ApplicationGatewayTrustedRootCertificate](#applicationgatewaytrustedrootcertificate)[]: Trusted Root certificates of the application gateway resource.
* **urlPathMaps**: [ApplicationGatewayUrlPathMap](#applicationgatewayurlpathmap)[]: URL path map of the application gateway resource.
* **webApplicationFirewallConfiguration**: [ApplicationGatewayWebApplicationFirewallConfiguration](#applicationgatewaywebapplicationfirewallconfiguration): Web application firewall configuration.

## ApplicationGatewayRedirectConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the redirect configuration that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayRedirectConfigurationPropertiesFormat](#applicationgatewayredirectconfigurationpropertiesformat): Properties of redirect configuration of the application gateway.
* **type**: string: Type of the resource.

## ApplicationGatewayRedirectConfigurationPropertiesFormat
### Properties
* **includePath**: bool: Include path in the redirected url.
* **includeQueryString**: bool: Include query string in the redirected url.
* **pathRules**: [SubResource](#subresource)[]: Path rules specifying redirect configuration.
* **redirectType**: 'Found' | 'Permanent' | 'SeeOther' | 'Temporary' | string: Supported http redirection types - Permanent, Temporary, Found, SeeOther.
* **requestRoutingRules**: [SubResource](#subresource)[]: Request routing specifying redirect configuration.
* **targetListener**: [SubResource](#subresource): Reference to a listener to redirect the request to.
* **targetUrl**: string: Url to redirect the request to.
* **urlPathMaps**: [SubResource](#subresource)[]: Url path maps specifying default redirect configuration.

## ApplicationGatewayRequestRoutingRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the request routing rule that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayRequestRoutingRulePropertiesFormat](#applicationgatewayrequestroutingrulepropertiesformat): Properties of request routing rule of the application gateway.
* **type**: string: Type of the resource.

## ApplicationGatewayRequestRoutingRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource): Backend address pool resource of the application gateway.
* **backendHttpSettings**: [SubResource](#subresource): Backend http settings resource of the application gateway.
* **httpListener**: [SubResource](#subresource): Http listener resource of the application gateway.
* **provisioningState**: string: Provisioning state of the request routing rule resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **redirectConfiguration**: [SubResource](#subresource): Redirect configuration resource of the application gateway.
* **rewriteRuleSet**: [SubResource](#subresource): Rewrite Rule Set resource in Basic rule of the application gateway.
* **ruleType**: 'Basic' | 'PathBasedRouting' | string: Rule type.
* **urlPathMap**: [SubResource](#subresource): URL path map resource of the application gateway.

## ApplicationGatewayRewriteRule
### Properties
* **actionSet**: [ApplicationGatewayRewriteRuleActionSet](#applicationgatewayrewriteruleactionset): Set of actions to be done as part of the rewrite Rule.
* **name**: string: Name of the rewrite rule that is unique within an Application Gateway.

## ApplicationGatewayRewriteRuleActionSet
### Properties
* **requestHeaderConfigurations**: [ApplicationGatewayHeaderConfiguration](#applicationgatewayheaderconfiguration)[]: Request Header Actions in the Action Set
* **responseHeaderConfigurations**: [ApplicationGatewayHeaderConfiguration](#applicationgatewayheaderconfiguration)[]: Response Header Actions in the Action Set

## ApplicationGatewayRewriteRuleSet
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the rewrite rule set that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayRewriteRuleSetPropertiesFormat](#applicationgatewayrewriterulesetpropertiesformat): Properties of rewrite rule set of the application gateway.

## ApplicationGatewayRewriteRuleSetPropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly): Provisioning state of the rewrite rule set resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **rewriteRules**: [ApplicationGatewayRewriteRule](#applicationgatewayrewriterule)[]: Rewrite rules in the rewrite rule set.

## ApplicationGatewaySku
### Properties
* **capacity**: int: Capacity (instance count) of an application gateway.
* **name**: 'Standard_Large' | 'Standard_Medium' | 'Standard_Small' | 'Standard_v2' | 'WAF_Large' | 'WAF_Medium' | 'WAF_v2' | string: Name of an application gateway SKU.
* **tier**: 'Standard' | 'Standard_v2' | 'WAF' | 'WAF_v2' | string: Tier of an application gateway.

## ApplicationGatewaySslCertificate
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the SSL certificate that is unique within an Application Gateway.
* **properties**: [ApplicationGatewaySslCertificatePropertiesFormat](#applicationgatewaysslcertificatepropertiesformat): Properties of SSL certificates of an application gateway.
* **type**: string: Type of the resource.

## ApplicationGatewaySslCertificatePropertiesFormat
### Properties
* **data**: string: Base-64 encoded pfx certificate. Only applicable in PUT Request.
* **keyVaultSecretId**: string: Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
* **password**: string: Password for the pfx file specified in data. Only applicable in PUT request.
* **provisioningState**: string: Provisioning state of the SSL certificate resource Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicCertData**: string: Base-64 encoded Public cert data corresponding to pfx specified in data. Only applicable in GET request.

## ApplicationGatewaySslPolicy
### Properties
* **cipherSuites**: 'TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA256' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA256' | 'TLS_DHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_DHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_RSA_WITH_3DES_EDE_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_RSA_WITH_AES_256_CBC_SHA' | 'TLS_RSA_WITH_AES_256_CBC_SHA256' | 'TLS_RSA_WITH_AES_256_GCM_SHA384' | string[]: Ssl cipher suites to be enabled in the specified order to application gateway.
* **disabledSslProtocols**: 'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | string[]: Ssl protocols to be disabled on application gateway.
* **minProtocolVersion**: 'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | string: Minimum version of Ssl protocol to be supported on application gateway.
* **policyName**: 'AppGwSslPolicy20150501' | 'AppGwSslPolicy20170401' | 'AppGwSslPolicy20170401S' | string: Name of Ssl predefined policy
* **policyType**: 'Custom' | 'Predefined' | string: Type of Ssl Policy

## ApplicationGatewayTrustedRootCertificate
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the trusted root certificate that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayTrustedRootCertificatePropertiesFormat](#applicationgatewaytrustedrootcertificatepropertiesformat): Trusted Root certificates properties of an application gateway.
* **type**: string: Type of the resource.

## ApplicationGatewayTrustedRootCertificatePropertiesFormat
### Properties
* **data**: string: Certificate public data.
* **keyVaultSecretId**: string: Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
* **provisioningState**: string: Provisioning state of the trusted root certificate resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## ApplicationGatewayUrlPathMap
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the URL path map that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayUrlPathMapPropertiesFormat](#applicationgatewayurlpathmappropertiesformat): Properties of UrlPathMap of the application gateway.
* **type**: string: Type of the resource.

## ApplicationGatewayUrlPathMapPropertiesFormat
### Properties
* **defaultBackendAddressPool**: [SubResource](#subresource): Default backend address pool resource of URL path map.
* **defaultBackendHttpSettings**: [SubResource](#subresource): Default backend http settings resource of URL path map.
* **defaultRedirectConfiguration**: [SubResource](#subresource): Default redirect configuration resource of URL path map.
* **defaultRewriteRuleSet**: [SubResource](#subresource): Default Rewrite rule set resource of URL path map.
* **pathRules**: [ApplicationGatewayPathRule](#applicationgatewaypathrule)[]: Path rule of URL path map resource.
* **provisioningState**: string: Provisioning state of the backend http settings resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## ApplicationGatewayWebApplicationFirewallConfiguration
### Properties
* **disabledRuleGroups**: [ApplicationGatewayFirewallDisabledRuleGroup](#applicationgatewayfirewalldisabledrulegroup)[]: The disabled rule groups.
* **enabled**: bool (Required): Whether the web application firewall is enabled or not.
* **exclusions**: [ApplicationGatewayFirewallExclusion](#applicationgatewayfirewallexclusion)[]: The exclusion list.
* **fileUploadLimitInMb**: int: Maximum file upload size in Mb for WAF.
* **firewallMode**: 'Detection' | 'Prevention' | string (Required): Web application firewall mode.
* **maxRequestBodySize**: int: Maximum request body size for WAF.
* **maxRequestBodySizeInKb**: int: Maximum request body size in Kb for WAF.
* **requestBodyCheck**: bool: Whether allow WAF to check request Body.
* **ruleSetType**: string (Required): The type of the web application firewall rule set. Possible values are: 'OWASP'.
* **ruleSetVersion**: string (Required): The version of the rule set type.

## ApplicationSecurityGroup
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [ApplicationSecurityGroupPropertiesFormat](#applicationsecuritygrouppropertiesformat): Properties of the application security group.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## ApplicationSecurityGroupPropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state of the application security group resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.

## AuthorizationPropertiesFormat
### Properties
* **authorizationKey**: string: The authorization key.
* **authorizationUseStatus**: 'Available' | 'InUse' | string: AuthorizationUseStatus. Possible values are: 'Available' and 'InUse'.
* **provisioningState**: string: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## AzureFirewallApplicationRule
### Properties
* **description**: string: Description of the rule.
* **fqdnTags**: string[]: List of FQDN Tags for this rule.
* **name**: string: Name of the application rule.
* **protocols**: [AzureFirewallApplicationRuleProtocol](#azurefirewallapplicationruleprotocol)[]: Array of ApplicationRuleProtocols.
* **sourceAddresses**: string[]: List of source IP addresses for this rule.
* **targetFqdns**: string[]: List of FQDNs for this rule.

## AzureFirewallApplicationRuleCollection
### Properties
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [AzureFirewallApplicationRuleCollectionPropertiesFormat](#azurefirewallapplicationrulecollectionpropertiesformat): Properties of the application rule collection.

## AzureFirewallApplicationRuleCollectionPropertiesFormat
### Properties
* **action**: [AzureFirewallRCAction](#azurefirewallrcaction): The action type of a rule collection
* **priority**: int: Priority of the application rule collection resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: The provisioning state of the resource.
* **rules**: [AzureFirewallApplicationRule](#azurefirewallapplicationrule)[]: Collection of rules used by a application rule collection.

## AzureFirewallApplicationRuleProtocol
### Properties
* **port**: int: Port number for the protocol, cannot be greater than 64000. This field is optional.
* **protocolType**: 'Http' | 'Https' | string: Protocol type

## AzureFirewallIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [AzureFirewallIPConfigurationPropertiesFormat](#azurefirewallipconfigurationpropertiesformat): Properties of IP configuration of an Azure Firewall.

## AzureFirewallIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string (ReadOnly): The Firewall Internal Load Balancer IP to be used as the next hop in User Defined Routes.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: The provisioning state of the resource.
* **publicIPAddress**: [SubResource](#subresource): Reference of the PublicIP resource. This field is a mandatory input if subnet is not null.
* **subnet**: [SubResource](#subresource): Reference of the subnet resource. This resource must be named 'AzureFirewallSubnet'.

## AzureFirewallNatRCAction
### Properties
* **type**: 'Dnat' | 'Snat' | string: The type of action.

## AzureFirewallNatRule
### Properties
* **description**: string: Description of the rule.
* **destinationAddresses**: string[]: List of destination IP addresses for this rule.
* **destinationPorts**: string[]: List of destination ports.
* **name**: string: Name of the NAT rule.
* **protocols**: 'Any' | 'ICMP' | 'TCP' | 'UDP' | string[]: Array of AzureFirewallNetworkRuleProtocols applicable to this NAT rule.
* **sourceAddresses**: string[]: List of source IP addresses for this rule.
* **translatedAddress**: string: The translated address for this NAT rule.
* **translatedPort**: string: The translated port for this NAT rule.

## AzureFirewallNatRuleCollection
### Properties
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [AzureFirewallNatRuleCollectionProperties](#azurefirewallnatrulecollectionproperties): Properties of the NAT rule collection.

## AzureFirewallNatRuleCollectionProperties
### Properties
* **action**: [AzureFirewallNatRCAction](#azurefirewallnatrcaction): The action type of a NAT rule collection
* **priority**: int: Priority of the NAT rule collection resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: The provisioning state of the resource.
* **rules**: [AzureFirewallNatRule](#azurefirewallnatrule)[]: Collection of rules used by a NAT rule collection.

## AzureFirewallNetworkRule
### Properties
* **description**: string: Description of the rule.
* **destinationAddresses**: string[]: List of destination IP addresses.
* **destinationPorts**: string[]: List of destination ports.
* **name**: string: Name of the network rule.
* **protocols**: 'Any' | 'ICMP' | 'TCP' | 'UDP' | string[]: Array of AzureFirewallNetworkRuleProtocols.
* **sourceAddresses**: string[]: List of source IP addresses for this rule.

## AzureFirewallNetworkRuleCollection
### Properties
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [AzureFirewallNetworkRuleCollectionPropertiesFormat](#azurefirewallnetworkrulecollectionpropertiesformat): Properties of the network rule collection.

## AzureFirewallNetworkRuleCollectionPropertiesFormat
### Properties
* **action**: [AzureFirewallRCAction](#azurefirewallrcaction): The action type of a rule collection
* **priority**: int: Priority of the network rule collection resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: The provisioning state of the resource.
* **rules**: [AzureFirewallNetworkRule](#azurefirewallnetworkrule)[]: Collection of rules used by a network rule collection.

## AzureFirewallPropertiesFormat
### Properties
* **applicationRuleCollections**: [AzureFirewallApplicationRuleCollection](#azurefirewallapplicationrulecollection)[]: Collection of application rule collections used by Azure Firewall.
* **ipConfigurations**: [AzureFirewallIPConfiguration](#azurefirewallipconfiguration)[]: IP configuration of the Azure Firewall resource.
* **natRuleCollections**: [AzureFirewallNatRuleCollection](#azurefirewallnatrulecollection)[]: Collection of NAT rule collections used by Azure Firewall.
* **networkRuleCollections**: [AzureFirewallNetworkRuleCollection](#azurefirewallnetworkrulecollection)[]: Collection of network rule collections used by Azure Firewall.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: The provisioning state of the resource.

## AzureFirewallRCAction
### Properties
* **type**: 'Allow' | 'Deny' | string: The type of action.

## BackendAddressPool
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [BackendAddressPoolPropertiesFormat](#backendaddresspoolpropertiesformat): Properties of load balancer backend address pool.

## BackendAddressPoolPropertiesFormat
### Properties
* **backendIPConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[] (ReadOnly): Gets collection of references to IP addresses defined in network interfaces.
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly): Gets load balancing rules that use this backend address pool.
* **outboundRule**: [SubResource](#subresource) (ReadOnly): Gets outbound rules that use this backend address pool.
* **outboundRules**: [SubResource](#subresource)[] (ReadOnly): Gets outbound rules that use this backend address pool.
* **provisioningState**: string: Get provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## BgpSettings
### Properties
* **asn**: int: The BGP speaker's ASN.
* **bgpPeeringAddress**: string: The BGP peering address and BGP identifier of this BGP speaker.
* **peerWeight**: int: The weight added to routes learned from this BGP speaker.

## Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## ConnectionMonitorDestination
### Properties
* **address**: string: Address of the connection monitor destination (IP or domain name).
* **port**: int: The destination port used by connection monitor.
* **resourceId**: string: The ID of the resource used as the destination by connection monitor.

## ConnectionMonitorParameters
### Properties
* **autoStart**: bool: Determines if the connection monitor will start automatically once created.
* **destination**: [ConnectionMonitorDestination](#connectionmonitordestination) (Required): Describes the destination of connection monitor.
* **monitoringIntervalInSeconds**: int: Monitoring interval in seconds.
* **monitoringStatus**: string (ReadOnly): The monitoring status of the connection monitor.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the connection monitor.
* **source**: [ConnectionMonitorSource](#connectionmonitorsource) (Required): Describes the source of connection monitor.
* **startTime**: string (ReadOnly): The date and time when the connection monitor was started.

## ConnectionMonitorSource
### Properties
* **port**: int: The source port used by connection monitor.
* **resourceId**: string (Required): The ID of the resource used as the source by connection monitor.

## ConnectionMonitorTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Container
### Properties
* **id**: string: Resource ID.

## ContainerNetworkInterface
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource. This name can be used to access the resource.
* **properties**: [ContainerNetworkInterfacePropertiesFormat](#containernetworkinterfacepropertiesformat): Container network interface properties.
* **type**: string (ReadOnly): Sub Resource type.

## ContainerNetworkInterfaceConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource. This name can be used to access the resource.
* **properties**: [ContainerNetworkInterfaceConfigurationPropertiesFormat](#containernetworkinterfaceconfigurationpropertiesformat): Container network interface configuration properties.
* **type**: string (ReadOnly): Sub Resource type.

## ContainerNetworkInterfaceConfigurationPropertiesFormat
### Properties
* **containerNetworkInterfaces**: [SubResource](#subresource)[]: A list of container network interfaces created from this container network interface configuration.
* **ipConfigurations**: [IPConfigurationProfile](#ipconfigurationprofile)[]: A list of ip configurations of the container network interface configuration.
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.

## ContainerNetworkInterfaceIpConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **name**: string: The name of the resource. This name can be used to access the resource.
* **properties**: [ContainerNetworkInterfaceIpConfigurationPropertiesFormat](#containernetworkinterfaceipconfigurationpropertiesformat): Properties of the container network interface IP configuration.
* **type**: string (ReadOnly): Sub Resource type.

## ContainerNetworkInterfaceIpConfigurationPropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.

## ContainerNetworkInterfacePropertiesFormat
### Properties
* **container**: [Container](#container): Reference to the container to which this container network interface is attached.
* **containerNetworkInterfaceConfiguration**: [ContainerNetworkInterfaceConfiguration](#containernetworkinterfaceconfiguration): Container network interface configuration from which this container network interface is created.
* **ipConfigurations**: [ContainerNetworkInterfaceIpConfiguration](#containernetworkinterfaceipconfiguration)[]: Reference to the ip configuration on this container nic.
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.

## DdosCustomPolicyPropertiesFormat
### Properties
* **protocolCustomSettings**: [ProtocolCustomSettingsFormat](#protocolcustomsettingsformat)[]: The protocol-specific DDoS policy customization parameters.
* **provisioningState**: string (ReadOnly): The provisioning state of the DDoS custom policy resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
* **publicIPAddresses**: [SubResource](#subresource)[] (ReadOnly): The list of public IPs associated with the DDoS custom policy resource. This list is read-only.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the DDoS custom policy resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.

## DdosProtectionPlanPropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state of the DDoS protection plan resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the DDoS protection plan resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
* **virtualNetworks**: [SubResource](#subresource)[] (ReadOnly): The list of virtual networks associated with the DDoS protection plan resource. This list is read-only.

## DdosProtectionPlanTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DdosSettings
### Properties
* **ddosCustomPolicy**: [SubResource](#subresource): The DDoS custom policy associated with the public IP.
* **protectionCoverage**: 'Basic' | 'Standard' | string: The DDoS protection policy customizability of the public IP. Only standard coverage will have the ability to be customized.

## Delegation
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a subnet. This name can be used to access the resource.
* **properties**: [ServiceDelegationPropertiesFormat](#servicedelegationpropertiesformat): Properties of the subnet.

## DeviceProperties
### Properties
* **deviceModel**: string: Model of the device.
* **deviceVendor**: string: Name of the device Vendor.
* **linkSpeedInMbps**: int: Link speed.

## DhcpOptions
### Properties
* **dnsServers**: string[]: The list of DNS servers IP addresses.

## EndpointService
### Properties
* **id**: string: A unique identifier of the service being referenced by the interface endpoint.

## ExpressRouteCircuitAuthorization
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [AuthorizationPropertiesFormat](#authorizationpropertiesformat)

## ExpressRouteCircuitConnection
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ExpressRouteCircuitConnectionPropertiesFormat](#expressroutecircuitconnectionpropertiesformat)

## ExpressRouteCircuitConnectionPropertiesFormat
### Properties
* **addressPrefix**: string: /29 IP address space to carve out Customer addresses for tunnels.
* **authorizationKey**: string: The authorization key.
* **circuitConnectionStatus**: 'Connected' | 'Connecting' | 'Disconnected' | string (ReadOnly): Express Route Circuit Connection State. Possible values are: 'Connected' and 'Disconnected'.
* **expressRouteCircuitPeering**: [SubResource](#subresource): Reference to Express Route Circuit Private Peering Resource of the circuit initiating connection.
* **peerExpressRouteCircuitPeering**: [SubResource](#subresource): Reference to Express Route Circuit Private Peering Resource of the peered circuit.
* **provisioningState**: string (ReadOnly): Provisioning state of the circuit connection resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.

## ExpressRouteCircuitPeering
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ExpressRouteCircuitPeeringPropertiesFormat](#expressroutecircuitpeeringpropertiesformat)

## ExpressRouteCircuitPeeringConfig
### Properties
* **advertisedCommunities**: string[]: The communities of bgp peering. Specified for microsoft peering
* **advertisedPublicPrefixes**: string[]: The reference of AdvertisedPublicPrefixes.
* **advertisedPublicPrefixesState**: 'Configured' | 'Configuring' | 'NotConfigured' | 'ValidationNeeded' | string: AdvertisedPublicPrefixState of the Peering resource. Possible values are 'NotConfigured', 'Configuring', 'Configured', and 'ValidationNeeded'.
* **customerASN**: int: The CustomerASN of the peering.
* **legacyMode**: int: The legacy mode of the peering.
* **routingRegistryName**: string: The RoutingRegistryName of the configuration.

## ExpressRouteCircuitPeeringId
### Properties
* **id**: string: The ID of the ExpressRoute circuit peering.

## ExpressRouteCircuitPeeringPropertiesFormat
### Properties
* **azureASN**: int: The Azure ASN.
* **connections**: [ExpressRouteCircuitConnection](#expressroutecircuitconnection)[]: The list of circuit connections associated with Azure Private Peering for this circuit.
* **expressRouteConnection**: [ExpressRouteConnectionId](#expressrouteconnectionid): The ExpressRoute connection.
* **gatewayManagerEtag**: string: The GatewayManager Etag.
* **ipv6PeeringConfig**: [Ipv6ExpressRouteCircuitPeeringConfig](#ipv6expressroutecircuitpeeringconfig): The IPv6 peering configuration.
* **lastModifiedBy**: string: Gets whether the provider or the customer last modified the peering.
* **microsoftPeeringConfig**: [ExpressRouteCircuitPeeringConfig](#expressroutecircuitpeeringconfig): The Microsoft peering configuration.
* **peerASN**: int: The peer ASN.
* **peeringType**: 'AzurePrivatePeering' | 'AzurePublicPeering' | 'MicrosoftPeering' | string: The peering type.
* **primaryAzurePort**: string: The primary port.
* **primaryPeerAddressPrefix**: string: The primary address prefix.
* **provisioningState**: string: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **routeFilter**: [RouteFilter](#routefilter): The reference of the RouteFilter resource.
* **secondaryAzurePort**: string: The secondary port.
* **secondaryPeerAddressPrefix**: string: The secondary address prefix.
* **sharedKey**: string: The shared key.
* **state**: 'Disabled' | 'Enabled' | string: The peering state.
* **stats**: [ExpressRouteCircuitStats](#expressroutecircuitstats): Gets peering stats.
* **vlanId**: int: The VLAN ID.

## ExpressRouteCircuitPropertiesFormat
### Properties
* **allowClassicOperations**: bool: Allow classic operations
* **allowGlobalReach**: bool: Flag to enable Global Reach on the circuit.
* **authorizations**: [ExpressRouteCircuitAuthorization](#expressroutecircuitauthorization)[]: The list of authorizations.
* **bandwidthInGbps**: int: The bandwidth of the circuit when the circuit is provisioned on an ExpressRoutePort resource.
* **circuitProvisioningState**: string: The CircuitProvisioningState state of the resource.
* **expressRoutePort**: [SubResource](#subresource): The reference to the ExpressRoutePort resource when the circuit is provisioned on an ExpressRoutePort resource.
* **gatewayManagerEtag**: string: The GatewayManager Etag.
* **peerings**: [ExpressRouteCircuitPeering](#expressroutecircuitpeering)[]: The list of peerings.
* **provisioningState**: string: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **serviceKey**: string: The ServiceKey.
* **serviceProviderNotes**: string: The ServiceProviderNotes.
* **serviceProviderProperties**: [ExpressRouteCircuitServiceProviderProperties](#expressroutecircuitserviceproviderproperties): The ServiceProviderProperties.
* **serviceProviderProvisioningState**: 'Deprovisioning' | 'NotProvisioned' | 'Provisioned' | 'Provisioning' | string: The ServiceProviderProvisioningState state of the resource. Possible values are 'NotProvisioned', 'Provisioning', 'Provisioned', and 'Deprovisioning'.
* **stag**: int (ReadOnly): The identifier of the circuit traffic. Outer tag for QinQ encapsulation.

## ExpressRouteCircuitReference
### Properties
* **id**: string: Corresponding Express Route Circuit Id.

## ExpressRouteCircuitServiceProviderProperties
### Properties
* **bandwidthInMbps**: int: The BandwidthInMbps.
* **peeringLocation**: string: The peering location.
* **serviceProviderName**: string: The serviceProviderName.

## ExpressRouteCircuitSku
### Properties
* **family**: 'MeteredData' | 'UnlimitedData' | string: The family of the SKU. Possible values are: 'UnlimitedData' and 'MeteredData'.
* **name**: string: The name of the SKU.
* **tier**: 'Basic' | 'Premium' | 'Standard' | string: The tier of the SKU. Possible values are 'Standard', 'Premium' or 'Basic'.

## ExpressRouteCircuitStats
### Properties
* **primarybytesIn**: int: Gets BytesIn of the peering.
* **primarybytesOut**: int: Gets BytesOut of the peering.
* **secondarybytesIn**: int: Gets BytesIn of the peering.
* **secondarybytesOut**: int: Gets BytesOut of the peering.

## ExpressRouteConnection
### Properties
* **id**: string: Resource ID.
* **name**: string (Required): The name of the resource.
* **properties**: [ExpressRouteConnectionProperties](#expressrouteconnectionproperties): Properties of the ExpressRouteConnection subresource.

## ExpressRouteConnectionId
### Properties
* **id**: string (ReadOnly): The ID of the ExpressRouteConnection.

## ExpressRouteConnectionProperties
### Properties
* **authorizationKey**: string: Authorization key to establish the connection.
* **expressRouteCircuitPeering**: [ExpressRouteCircuitPeeringId](#expressroutecircuitpeeringid) (Required): The ExpressRoute circuit peering.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **routingWeight**: int: The routing weight associated to the connection.

## ExpressRouteCrossConnectionPeering
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ExpressRouteCrossConnectionPeeringProperties](#expressroutecrossconnectionpeeringproperties)

## ExpressRouteCrossConnectionPeeringProperties
### Properties
* **azureASN**: int (ReadOnly): The Azure ASN.
* **gatewayManagerEtag**: string: The GatewayManager Etag.
* **ipv6PeeringConfig**: [Ipv6ExpressRouteCircuitPeeringConfig](#ipv6expressroutecircuitpeeringconfig): The IPv6 peering configuration.
* **lastModifiedBy**: string: Gets whether the provider or the customer last modified the peering.
* **microsoftPeeringConfig**: [ExpressRouteCircuitPeeringConfig](#expressroutecircuitpeeringconfig): The Microsoft peering configuration.
* **peerASN**: int: The peer ASN.
* **peeringType**: 'AzurePrivatePeering' | 'AzurePublicPeering' | 'MicrosoftPeering' | string: The peering type.
* **primaryAzurePort**: string (ReadOnly): The primary port.
* **primaryPeerAddressPrefix**: string: The primary address prefix.
* **provisioningState**: string (ReadOnly): Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **secondaryAzurePort**: string (ReadOnly): The secondary port.
* **secondaryPeerAddressPrefix**: string: The secondary address prefix.
* **sharedKey**: string: The shared key.
* **state**: 'Disabled' | 'Enabled' | string: The peering state.
* **vlanId**: int: The VLAN ID.

## ExpressRouteCrossConnectionProperties
### Properties
* **bandwidthInMbps**: int: The circuit bandwidth In Mbps.
* **expressRouteCircuit**: [ExpressRouteCircuitReference](#expressroutecircuitreference): The ExpressRouteCircuit
* **peeringLocation**: string: The peering location of the ExpressRoute circuit.
* **peerings**: [ExpressRouteCrossConnectionPeering](#expressroutecrossconnectionpeering)[]: The list of peerings.
* **primaryAzurePort**: string (ReadOnly): The name of the primary  port.
* **provisioningState**: string (ReadOnly): Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **secondaryAzurePort**: string (ReadOnly): The name of the secondary  port.
* **serviceProviderNotes**: string: Additional read only notes set by the connectivity provider.
* **serviceProviderProvisioningState**: 'Deprovisioning' | 'NotProvisioned' | 'Provisioned' | 'Provisioning' | string: The provisioning state of the circuit in the connectivity provider system. Possible values are 'NotProvisioned', 'Provisioning', 'Provisioned'.
* **sTag**: int (ReadOnly): The identifier of the circuit traffic.

## ExpressRouteGatewayProperties
### Properties
* **autoScaleConfiguration**: [ExpressRouteGatewayPropertiesAutoScaleConfiguration](#expressroutegatewaypropertiesautoscaleconfiguration): Configuration for auto scaling.
* **expressRouteConnections**: [ExpressRouteConnection](#expressrouteconnection)[] (ReadOnly): List of ExpressRoute connections to the ExpressRoute gateway.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **virtualHub**: [VirtualHubId](#virtualhubid) (Required): The Virtual Hub where the ExpressRoute gateway is or will be deployed.

## ExpressRouteGatewayPropertiesAutoScaleConfiguration
### Properties
* **bounds**: [ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds](#expressroutegatewaypropertiesautoscaleconfigurationbounds): Minimum and maximum number of scale units to deploy.

## ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds
### Properties
* **max**: int: Maximum number of scale units deployed for ExpressRoute gateway.
* **min**: int: Minimum number of scale units deployed for ExpressRoute gateway.

## ExpressRouteLink
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of child port resource that is unique among child port resources of the parent.
* **properties**: [ExpressRouteLinkPropertiesFormat](#expressroutelinkpropertiesformat): ExpressRouteLink properties

## ExpressRouteLinkPropertiesFormat
### Properties
* **adminState**: 'Disabled' | 'Enabled' | string: Administrative state of the physical port
* **connectorType**: 'LC' | 'SC' | string (ReadOnly): Physical fiber port type.
* **interfaceName**: string (ReadOnly): Name of Azure router interface.
* **patchPanelId**: string (ReadOnly): Mapping between physical port to patch panel port.
* **provisioningState**: string (ReadOnly): The provisioning state of the ExpressRouteLink resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
* **rackId**: string (ReadOnly): Mapping of physical patch panel to rack.
* **routerName**: string (ReadOnly): Name of Azure router associated with physical port.

## ExpressRoutePortPropertiesFormat
### Properties
* **allocationDate**: string (ReadOnly): Date of the physical port allocation to be used in Letter of Authorization.
* **bandwidthInGbps**: int: Bandwidth of procured ports in Gbps
* **circuits**: [SubResource](#subresource)[] (ReadOnly): Reference the ExpressRoute circuit(s) that are provisioned on this ExpressRoutePort resource.
* **encapsulation**: 'Dot1Q' | 'QinQ' | string: Encapsulation method on physical ports.
* **etherType**: string (ReadOnly): Ether type of the physical port.
* **links**: [ExpressRouteLink](#expressroutelink)[]: The set of physical links of the ExpressRoutePort resource
* **mtu**: string (ReadOnly): Maximum transmission unit of the physical port pair(s)
* **peeringLocation**: string: The name of the peering location that the ExpressRoutePort is mapped to physically.
* **provisionedBandwidthInGbps**: int (ReadOnly): Aggregate Gbps of associated circuit bandwidths.
* **provisioningState**: string (ReadOnly): The provisioning state of the ExpressRoutePort resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string: The resource GUID property of the ExpressRoutePort resource.

## FrontendIPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [FrontendIPConfigurationPropertiesFormat](#frontendipconfigurationpropertiesformat): Properties of the load balancer probe.
* **zones**: string[]: A list of availability zones denoting the IP allocated for the resource needs to come from.

## FrontendIPConfigurationPropertiesFormat
### Properties
* **inboundNatPools**: [SubResource](#subresource)[] (ReadOnly): Read only. Inbound pools URIs that use this frontend IP.
* **inboundNatRules**: [SubResource](#subresource)[] (ReadOnly): Read only. Inbound rules URIs that use this frontend IP.
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly): Gets load balancing rules URIs that use this frontend IP.
* **outboundRules**: [SubResource](#subresource)[] (ReadOnly): Read only. Outbound rules URIs that use this frontend IP.
* **privateIPAddress**: string: The private IP address of the IP configuration.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: The Private IP allocation method. Possible values are: 'Static' and 'Dynamic'.
* **provisioningState**: string: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicIPAddress**: [PublicIPAddress](#publicipaddress): The reference of the Public IP resource.
* **publicIPPrefix**: [SubResource](#subresource): The reference of the Public IP Prefix resource.
* **subnet**: [Subnet](#subnet): The reference of the subnet resource.

## HubVirtualNetworkConnection
### Properties
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [HubVirtualNetworkConnectionProperties](#hubvirtualnetworkconnectionproperties): Parameters for HubVirtualNetworkConnection

## HubVirtualNetworkConnectionProperties
### Properties
* **allowHubToRemoteVnetTransit**: bool: VirtualHub to RemoteVnet transit to enabled or not.
* **allowRemoteVnetToUseHubVnetGateways**: bool: Allow RemoteVnet to use Virtual Hub's gateways.
* **enableInternetSecurity**: bool: Enable internet security
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: The provisioning state of the resource.
* **remoteVirtualNetwork**: [SubResource](#subresource): Reference to the remote virtual network.

## InboundNatPool
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [InboundNatPoolPropertiesFormat](#inboundnatpoolpropertiesformat): Properties of load balancer inbound nat pool.

## InboundNatPoolPropertiesFormat
### Properties
* **backendPort**: int (Required): The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
* **enableFloatingIP**: bool: Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
* **enableTcpReset**: bool: Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
* **frontendIPConfiguration**: [SubResource](#subresource): A reference to frontend IP addresses.
* **frontendPortRangeEnd**: int (Required): The last port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65535.
* **frontendPortRangeStart**: int (Required): The first port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65534.
* **idleTimeoutInMinutes**: int: The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
* **protocol**: 'All' | 'Tcp' | 'Udp' | string (Required): The transport protocol for the endpoint. Possible values are 'Udp' or 'Tcp' or 'All'.
* **provisioningState**: string: Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## InboundNatRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [InboundNatRulePropertiesFormat](#inboundnatrulepropertiesformat): Properties of load balancer inbound nat rule.

## InboundNatRulePropertiesFormat
### Properties
* **backendIPConfiguration**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration) (ReadOnly): A reference to a private IP address defined on a network interface of a VM. Traffic sent to the frontend port of each of the frontend IP configurations is forwarded to the backend IP.
* **backendPort**: int: The port used for the internal endpoint. Acceptable values range from 1 to 65535.
* **enableFloatingIP**: bool: Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
* **enableTcpReset**: bool: Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
* **frontendIPConfiguration**: [SubResource](#subresource): A reference to frontend IP addresses.
* **frontendPort**: int: The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
* **idleTimeoutInMinutes**: int: The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
* **protocol**: 'All' | 'Tcp' | 'Udp' | string: The transport protocol for the endpoint. Possible values are 'Udp' or 'Tcp' or 'All'.
* **provisioningState**: string: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## InterfaceEndpoint
### Properties
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [InterfaceEndpointProperties](#interfaceendpointproperties): Properties of the interface endpoint.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## InterfaceEndpointProperties
### Properties
* **endpointService**: [EndpointService](#endpointservice): A reference to the service being brought into the virtual network.
* **fqdn**: string: A first-party service's FQDN that is mapped to the private IP allocated via this interface endpoint.
* **networkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly): Gets an array of references to the network interfaces created for this interface endpoint.
* **owner**: string (ReadOnly): A read-only property that identifies who created this interface endpoint.
* **provisioningState**: string (ReadOnly): The provisioning state of the interface endpoint. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **subnet**: [Subnet](#subnet): The ID of the subnet from which the private IP will be allocated.

## IPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [IPConfigurationPropertiesFormat](#ipconfigurationpropertiesformat): Properties of the IP configuration

## IPConfigurationProfile
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource. This name can be used to access the resource.
* **properties**: [IPConfigurationProfilePropertiesFormat](#ipconfigurationprofilepropertiesformat): Properties of the IP configuration profile.
* **type**: string (ReadOnly): Sub Resource type.

## IPConfigurationProfilePropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.
* **subnet**: [Subnet](#subnet): The reference of the subnet resource to create a container network interface ip configuration.

## IPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string: The private IP address of the IP configuration.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: The private IP allocation method. Possible values are 'Static' and 'Dynamic'.
* **provisioningState**: string: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicIPAddress**: [PublicIPAddress](#publicipaddress): The reference of the public IP resource.
* **subnet**: [Subnet](#subnet): The reference of the subnet resource.

## IpsecPolicy
### Properties
* **dhGroup**: 'DHGroup1' | 'DHGroup14' | 'DHGroup2' | 'DHGroup2048' | 'DHGroup24' | 'ECP256' | 'ECP384' | 'None' | string (Required): The DH Groups used in IKE Phase 1 for initial SA.
* **ikeEncryption**: 'AES128' | 'AES192' | 'AES256' | 'DES' | 'DES3' | 'GCMAES128' | 'GCMAES256' | string (Required): The IKE encryption algorithm (IKE phase 2).
* **ikeIntegrity**: 'GCMAES128' | 'GCMAES256' | 'MD5' | 'SHA1' | 'SHA256' | 'SHA384' | string (Required): The IKE integrity algorithm (IKE phase 2).
* **ipsecEncryption**: 'AES128' | 'AES192' | 'AES256' | 'DES' | 'DES3' | 'GCMAES128' | 'GCMAES192' | 'GCMAES256' | 'None' | string (Required): The IPSec encryption algorithm (IKE phase 1).
* **ipsecIntegrity**: 'GCMAES128' | 'GCMAES192' | 'GCMAES256' | 'MD5' | 'SHA1' | 'SHA256' | string (Required): The IPSec integrity algorithm (IKE phase 1).
* **pfsGroup**: 'ECP256' | 'ECP384' | 'None' | 'PFS1' | 'PFS14' | 'PFS2' | 'PFS2048' | 'PFS24' | 'PFSMM' | string (Required): The Pfs Groups used in IKE Phase 2 for new child SA.
* **saDataSizeKilobytes**: int (Required): The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for a site to site VPN tunnel.
* **saLifeTimeSeconds**: int (Required): The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for a site to site VPN tunnel.

## IpTag
### Properties
* **ipTagType**: string: Gets or sets the ipTag type: Example FirstPartyUsage.
* **tag**: string: Gets or sets value of the IpTag associated with the public IP. Example SQL, Storage etc

## Ipv6ExpressRouteCircuitPeeringConfig
### Properties
* **microsoftPeeringConfig**: [ExpressRouteCircuitPeeringConfig](#expressroutecircuitpeeringconfig): The Microsoft peering configuration.
* **primaryPeerAddressPrefix**: string: The primary address prefix.
* **routeFilter**: [RouteFilter](#routefilter): The reference of the RouteFilter resource.
* **secondaryPeerAddressPrefix**: string: The secondary address prefix.
* **state**: 'Disabled' | 'Enabled' | string: The state of peering. Possible values are: 'Disabled' and 'Enabled'

## LoadBalancerPropertiesFormat
### Properties
* **backendAddressPools**: [BackendAddressPool](#backendaddresspool)[]: Collection of backend address pools used by a load balancer
* **frontendIPConfigurations**: [FrontendIPConfiguration](#frontendipconfiguration)[]: Object representing the frontend IPs to be used for the load balancer
* **inboundNatPools**: [InboundNatPool](#inboundnatpool)[]: Defines an external port range for inbound NAT to a single backend port on NICs associated with a load balancer. Inbound NAT rules are created automatically for each NIC associated with the Load Balancer using an external port from this range. Defining an Inbound NAT pool on your Load Balancer is mutually exclusive with defining inbound Nat rules. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an inbound NAT pool. They have to reference individual inbound NAT rules.
* **inboundNatRules**: [InboundNatRule](#inboundnatrule)[]: Collection of inbound NAT Rules used by a load balancer. Defining inbound NAT rules on your load balancer is mutually exclusive with defining an inbound NAT pool. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an Inbound NAT pool. They have to reference individual inbound NAT rules.
* **loadBalancingRules**: [LoadBalancingRule](#loadbalancingrule)[]: Object collection representing the load balancing rules Gets the provisioning
* **outboundRules**: [OutboundRule](#outboundrule)[]: The outbound rules.
* **probes**: [Probe](#probe)[]: Collection of probe objects used in the load balancer
* **provisioningState**: string: Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string: The resource GUID property of the load balancer resource.

## LoadBalancerSku
### Properties
* **name**: 'Basic' | 'Standard' | string: Name of a load balancer SKU.

## LoadBalancingRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [LoadBalancingRulePropertiesFormat](#loadbalancingrulepropertiesformat): Properties of load balancer load balancing rule.

## LoadBalancingRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource): A reference to a pool of DIPs. Inbound traffic is randomly load balanced across IPs in the backend IPs.
* **backendPort**: int: The port used for internal connections on the endpoint. Acceptable values are between 0 and 65535. Note that value 0 enables "Any Port"
* **disableOutboundSnat**: bool: Configures SNAT for the VMs in the backend pool to use the publicIP address specified in the frontend of the load balancing rule.
* **enableFloatingIP**: bool: Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
* **enableTcpReset**: bool: Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
* **frontendIPConfiguration**: [SubResource](#subresource): A reference to frontend IP addresses.
* **frontendPort**: int (Required): The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 0 and 65534. Note that value 0 enables "Any Port"
* **idleTimeoutInMinutes**: int: The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
* **loadDistribution**: 'Default' | 'SourceIP' | 'SourceIPProtocol' | string: The load distribution policy for this rule. Possible values are 'Default', 'SourceIP', and 'SourceIPProtocol'.
* **probe**: [SubResource](#subresource): The reference of the load balancer probe used by the load balancing rule.
* **protocol**: 'All' | 'Tcp' | 'Udp' | string (Required): The transport protocol for the endpoint. Possible values are 'Udp' or 'Tcp' or 'All'.
* **provisioningState**: string: Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## LocalNetworkGateway
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [LocalNetworkGatewayPropertiesFormat](#localnetworkgatewaypropertiesformat) (Required): Properties of the local network gateway.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## LocalNetworkGatewayPropertiesFormat
### Properties
* **bgpSettings**: [BgpSettings](#bgpsettings): Local network gateway's BGP speaker settings.
* **gatewayIpAddress**: string: IP address of local network gateway.
* **localNetworkAddressSpace**: [AddressSpace](#addressspace): Local network site address space.
* **provisioningState**: string (ReadOnly): The provisioning state of the LocalNetworkGateway resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string: The resource GUID property of the LocalNetworkGateway resource.

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant id of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.
* **userAssignedIdentities**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities): The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## ManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties](#components1jq1t4ischemasmanagedserviceidentitypropertiesuserassignedidentitiesadditionalproperties)

## NetworkInterface
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat): Properties of the network interface.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## NetworkInterfaceDnsSettings
### Properties
* **appliedDnsServers**: string[]: If the VM that uses this NIC is part of an Availability Set, then this list will have the union of all DNS servers from all NICs that are part of the Availability Set. This property is what is configured on each of those VMs.
* **dnsServers**: string[]: List of DNS servers IP addresses. Use 'AzureProvidedDNS' to switch to azure provided DNS resolution. 'AzureProvidedDNS' value cannot be combined with other IPs, it must be the only value in dnsServers collection.
* **internalDnsNameLabel**: string: Relative DNS name for this NIC used for internal communications between VMs in the same virtual network.
* **internalDomainNameSuffix**: string: Even if internalDnsNameLabel is not specified, a DNS entry is created for the primary NIC of the VM. This DNS name can be constructed by concatenating the VM name with the value of internalDomainNameSuffix.
* **internalFqdn**: string: Fully qualified DNS name supporting internal communications between VMs in the same virtual network.

## NetworkInterfaceIPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [NetworkInterfaceIPConfigurationPropertiesFormat](#networkinterfaceipconfigurationpropertiesformat): Network interface IP configuration properties.

## NetworkInterfaceIPConfigurationPropertiesFormat
### Properties
* **applicationGatewayBackendAddressPools**: [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)[]: The reference of ApplicationGatewayBackendAddressPool resource.
* **applicationSecurityGroups**: [ApplicationSecurityGroup](#applicationsecuritygroup)[]: Application security groups in which the IP configuration is included.
* **loadBalancerBackendAddressPools**: [BackendAddressPool](#backendaddresspool)[]: The reference of LoadBalancerBackendAddressPool resource.
* **loadBalancerInboundNatRules**: [InboundNatRule](#inboundnatrule)[]: A list of references of LoadBalancerInboundNatRules.
* **primary**: bool: Gets whether this is a primary customer address on the network interface.
* **privateIPAddress**: string: Private IP address of the IP configuration.
* **privateIPAddressVersion**: 'IPv4' | 'IPv6' | string: Available from Api-Version 2016-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: Defines how a private IP address is assigned. Possible values are: 'Static' and 'Dynamic'.
* **provisioningState**: string: The provisioning state of the network interface IP configuration. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicIPAddress**: [PublicIPAddress](#publicipaddress): Public IP address bound to the IP configuration.
* **subnet**: [Subnet](#subnet): Subnet bound to the IP configuration.
* **virtualNetworkTaps**: [VirtualNetworkTap](#virtualnetworktap)[]: The reference to Virtual Network Taps.

## NetworkInterfacePropertiesFormat
### Properties
* **dnsSettings**: [NetworkInterfaceDnsSettings](#networkinterfacednssettings): The DNS settings in network interface.
* **enableAcceleratedNetworking**: bool: If the network interface is accelerated networking enabled.
* **enableIPForwarding**: bool: Indicates whether IP forwarding is enabled on this network interface.
* **hostedWorkloads**: string[] (ReadOnly): A list of references to linked BareMetal resources
* **interfaceEndpoint**: [InterfaceEndpoint](#interfaceendpoint) (ReadOnly): A reference to the interface endpoint to which the network interface is linked.
* **ipConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[]: A list of IPConfigurations of the network interface.
* **macAddress**: string: The MAC address of the network interface.
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup): The reference of the NetworkSecurityGroup resource.
* **primary**: bool: Gets whether this is a primary network interface on a virtual machine.
* **provisioningState**: string: The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string: The resource GUID property of the network interface resource.
* **tapConfigurations**: [NetworkInterfaceTapConfiguration](#networkinterfacetapconfiguration)[]: A list of TapConfigurations of the network interface.
* **virtualMachine**: [SubResource](#subresource) (ReadOnly): The reference of a virtual machine.

## NetworkInterfaceTapConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [NetworkInterfaceTapConfigurationPropertiesFormat](#networkinterfacetapconfigurationpropertiesformat): Properties of the Virtual Network Tap configuration
* **type**: string (ReadOnly): Sub Resource type.

## NetworkInterfaceTapConfigurationPropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state of the network interface tap configuration. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **virtualNetworkTap**: [VirtualNetworkTap](#virtualnetworktap): The reference of the Virtual Network Tap resource.

## NetworkProfilePropertiesFormat
### Properties
* **containerNetworkInterfaceConfigurations**: [ContainerNetworkInterfaceConfiguration](#containernetworkinterfaceconfiguration)[]: List of chid container network interface configurations.
* **containerNetworkInterfaces**: [ContainerNetworkInterface](#containernetworkinterface)[]: List of child container network interfaces.
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the network interface resource.

## NetworkSecurityGroup
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [NetworkSecurityGroupPropertiesFormat](#networksecuritygrouppropertiesformat): Properties of the network security group
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## NetworkSecurityGroupPropertiesFormat
### Properties
* **defaultSecurityRules**: [SecurityRule](#securityrule)[]: The default security rules of network security group.
* **networkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly): A collection of references to network interfaces.
* **provisioningState**: string: The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string: The resource GUID property of the network security group resource.
* **securityRules**: [SecurityRule](#securityrule)[]: A collection of security rules of the network security group.
* **subnets**: [Subnet](#subnet)[] (ReadOnly): A collection of references to subnets.

## NetworkWatcherPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## OutboundRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [OutboundRulePropertiesFormat](#outboundrulepropertiesformat): Properties of load balancer outbound rule.

## OutboundRulePropertiesFormat
### Properties
* **allocatedOutboundPorts**: int: The number of outbound ports to be used for NAT.
* **backendAddressPool**: [SubResource](#subresource) (Required): A reference to a pool of DIPs. Outbound traffic is randomly load balanced across IPs in the backend IPs.
* **enableTcpReset**: bool: Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
* **frontendIPConfigurations**: [SubResource](#subresource)[] (Required): The Frontend IP addresses of the load balancer.
* **idleTimeoutInMinutes**: int: The timeout for the TCP idle connection
* **protocol**: 'All' | 'Tcp' | 'Udp' | string (Required): Protocol - TCP, UDP or All
* **provisioningState**: string: Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## P2SVpnGatewayProperties
### Properties
* **p2SVpnServerConfiguration**: [SubResource](#subresource): The P2SVpnServerConfiguration to which the p2sVpnGateway is attached to.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: The provisioning state of the resource.
* **virtualHub**: [SubResource](#subresource): The VirtualHub to which the gateway belongs
* **vpnClientAddressPool**: [AddressSpace](#addressspace): The reference of the address space resource which represents Address space for P2S VpnClient.
* **vpnClientConnectionHealth**: [VpnClientConnectionHealth](#vpnclientconnectionhealth) (ReadOnly): All P2S VPN clients' connection health status.
* **vpnGatewayScaleUnit**: int: The scale unit for this p2s vpn gateway.

## P2SVpnServerConfigRadiusClientRootCertificate
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [P2SVpnServerConfigRadiusClientRootCertificatePropertiesFormat](#p2svpnserverconfigradiusclientrootcertificatepropertiesformat): Properties of the Radius client root certificate.

## P2SVpnServerConfigRadiusClientRootCertificatePropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state of the Radius client root certificate resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **thumbprint**: string: The Radius client root certificate thumbprint.

## P2SVpnServerConfigRadiusServerRootCertificate
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [P2SVpnServerConfigRadiusServerRootCertificatePropertiesFormat](#p2svpnserverconfigradiusserverrootcertificatepropertiesformat) (Required): Properties of the P2SVpnServerConfiguration Radius Server root certificate.

## P2SVpnServerConfigRadiusServerRootCertificatePropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state of the P2SVpnServerConfiguration Radius Server root certificate resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicCertData**: string (Required): The certificate public data.

## P2SVpnServerConfiguration
### Properties
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [P2SVpnServerConfigurationProperties](#p2svpnserverconfigurationproperties): Parameters for P2SVpnServerConfiguration

## P2SVpnServerConfigurationProperties
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **name**: string: The name of the P2SVpnServerConfiguration that is unique within a VirtualWan in a resource group. This name can be used to access the resource along with Paren VirtualWan resource name.
* **p2SVpnGateways**: [SubResource](#subresource)[] (ReadOnly)
* **p2SVpnServerConfigRadiusClientRootCertificates**: [P2SVpnServerConfigRadiusClientRootCertificate](#p2svpnserverconfigradiusclientrootcertificate)[]: Radius client root certificate of P2SVpnServerConfiguration.
* **p2SVpnServerConfigRadiusServerRootCertificates**: [P2SVpnServerConfigRadiusServerRootCertificate](#p2svpnserverconfigradiusserverrootcertificate)[]: Radius Server root certificate of P2SVpnServerConfiguration.
* **p2SVpnServerConfigVpnClientRevokedCertificates**: [P2SVpnServerConfigVpnClientRevokedCertificate](#p2svpnserverconfigvpnclientrevokedcertificate)[]: VPN client revoked certificate of P2SVpnServerConfiguration.
* **p2SVpnServerConfigVpnClientRootCertificates**: [P2SVpnServerConfigVpnClientRootCertificate](#p2svpnserverconfigvpnclientrootcertificate)[]: VPN client root certificate of P2SVpnServerConfiguration.
* **provisioningState**: string (ReadOnly): The provisioning state of the P2SVpnServerConfiguration resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **radiusServerAddress**: string: The radius server address property of the P2SVpnServerConfiguration resource for point to site client connection.
* **radiusServerSecret**: string: The radius secret property of the P2SVpnServerConfiguration resource for point to site client connection.
* **vpnClientIpsecPolicies**: [IpsecPolicy](#ipsecpolicy)[]: VpnClientIpsecPolicies for P2SVpnServerConfiguration.
* **vpnProtocols**: 'IkeV2' | 'OpenVPN' | string[]: vpnProtocols for the P2SVpnServerConfiguration.

## P2SVpnServerConfigVpnClientRevokedCertificate
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [P2SVpnServerConfigVpnClientRevokedCertificatePropertiesFormat](#p2svpnserverconfigvpnclientrevokedcertificatepropertiesformat): Properties of the vpn client revoked certificate.

## P2SVpnServerConfigVpnClientRevokedCertificatePropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state of the VPN client revoked certificate resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **thumbprint**: string: The revoked VPN client certificate thumbprint.

## P2SVpnServerConfigVpnClientRootCertificate
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [P2SVpnServerConfigVpnClientRootCertificatePropertiesFormat](#p2svpnserverconfigvpnclientrootcertificatepropertiesformat) (Required): Properties of the P2SVpnServerConfiguration VPN client root certificate.

## P2SVpnServerConfigVpnClientRootCertificatePropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state of the P2SVpnServerConfiguration VPN client root certificate resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicCertData**: string (Required): The certificate public data.

## PacketCaptureFilter
### Properties
* **localIPAddress**: string: Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5"? for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
* **localPort**: string: Local port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
* **protocol**: 'Any' | 'TCP' | 'UDP' | string: Protocol to be filtered on.
* **remoteIPAddress**: string: Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
* **remotePort**: string: Remote port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.

## PacketCaptureParameters
### Properties
* **bytesToCapturePerPacket**: int: Number of bytes captured per packet, the remaining bytes are truncated.
* **filters**: [PacketCaptureFilter](#packetcapturefilter)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the packet capture session.
* **storageLocation**: [PacketCaptureStorageLocation](#packetcapturestoragelocation) (Required): Describes the storage location for a packet capture session.
* **target**: string (Required): The ID of the targeted resource, only VM is currently supported.
* **timeLimitInSeconds**: int: Maximum duration of the capture session in seconds.
* **totalBytesPerSession**: int: Maximum size of the capture output.

## PacketCaptureStorageLocation
### Properties
* **filePath**: string: A valid local path on the targeting VM. Must include the name of the capture file (*.cap). For linux virtual machine it must start with /var/captures. Required if no storage ID is provided, otherwise optional.
* **storageId**: string: The ID of the storage account to save the packet capture session. Required if no local file path is provided.
* **storagePath**: string: The URI of the storage path to save the packet capture. Must be a well-formed URI describing the location to save the packet capture.

## Probe
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ProbePropertiesFormat](#probepropertiesformat): Properties of load balancer probe.

## ProbePropertiesFormat
### Properties
* **intervalInSeconds**: int: The interval, in seconds, for how frequently to probe the endpoint for health status. Typically, the interval is slightly less than half the allocated timeout period (in seconds) which allows two full probes before taking the instance out of rotation. The default value is 15, the minimum value is 5.
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly): The load balancer rules that use this probe.
* **numberOfProbes**: int: The number of probes where if no response, will result in stopping further traffic from being delivered to the endpoint. This values allows endpoints to be taken out of rotation faster or slower than the typical times used in Azure.
* **port**: int (Required): The port for communicating the probe. Possible values range from 1 to 65535, inclusive.
* **protocol**: 'Http' | 'Https' | 'Tcp' | string (Required): The protocol of the end point. Possible values are: 'Http', 'Tcp', or 'Https'. If 'Tcp' is specified, a received ACK is required for the probe to be successful. If 'Http' or 'Https' is specified, a 200 OK response from the specifies URI is required for the probe to be successful.
* **provisioningState**: string: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **requestPath**: string: The URI used for requesting health status from the VM. Path is required if a protocol is set to http. Otherwise, it is not allowed. There is no default value.

## ProtocolCustomSettingsFormat
### Properties
* **protocol**: 'Syn' | 'Tcp' | 'Udp' | string: The protocol for which the DDoS protection policy is being customized.
* **sourceRateOverride**: string: The customized DDoS protection source rate.
* **triggerRateOverride**: string: The customized DDoS protection trigger rate.
* **triggerSensitivityOverride**: 'Default' | 'High' | 'Low' | 'Relaxed' | string: The customized DDoS protection trigger rate sensitivity degrees. High: Trigger rate set with most sensitivity w.r.t. normal traffic. Default: Trigger rate set with moderate sensitivity w.r.t. normal traffic. Low: Trigger rate set with less sensitivity w.r.t. normal traffic. Relaxed: Trigger rate set with least sensitivity w.r.t. normal traffic.

## PublicIPAddress
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat): Public IP address properties.
* **sku**: [PublicIPAddressSku](#publicipaddresssku): The public IP address SKU.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.
* **zones**: string[]: A list of availability zones denoting the IP allocated for the resource needs to come from.

## PublicIPAddressDnsSettings
### Properties
* **domainNameLabel**: string: Gets or sets the Domain name label.The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
* **fqdn**: string: Gets the FQDN, Fully qualified domain name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone.
* **reverseFqdn**: string: Gets or Sets the Reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.

## PublicIPAddressPropertiesFormat
### Properties
* **ddosSettings**: [DdosSettings](#ddossettings): The DDoS protection custom policy associated with the public IP address.
* **dnsSettings**: [PublicIPAddressDnsSettings](#publicipaddressdnssettings): The FQDN of the DNS record associated with the public IP address.
* **idleTimeoutInMinutes**: int: The idle timeout of the public IP address.
* **ipAddress**: string: The IP address associated with the public IP address resource.
* **ipConfiguration**: [IPConfiguration](#ipconfiguration) (ReadOnly): The IP configuration associated with the public IP address.
* **ipTags**: [IpTag](#iptag)[]: The list of tags associated with the public IP address.
* **provisioningState**: string: The provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicIPAddressVersion**: 'IPv4' | 'IPv6' | string: The public IP address version. Possible values are: 'IPv4' and 'IPv6'.
* **publicIPAllocationMethod**: 'Dynamic' | 'Static' | string: The public IP allocation method. Possible values are: 'Static' and 'Dynamic'.
* **publicIPPrefix**: [SubResource](#subresource): The Public IP Prefix this Public IP Address should be allocated from.
* **resourceGuid**: string: The resource GUID property of the public IP resource.

## PublicIPAddressSku
### Properties
* **name**: 'Basic' | 'Standard' | string: Name of a public IP address SKU.

## PublicIPPrefixPropertiesFormat
### Properties
* **ipPrefix**: string: The allocated Prefix
* **ipTags**: [IpTag](#iptag)[]: The list of tags associated with the public IP prefix.
* **loadBalancerFrontendIpConfiguration**: [SubResource](#subresource) (ReadOnly): The reference to load balancer frontend IP configuration associated with the public IP prefix.
* **prefixLength**: int: The Length of the Public IP Prefix.
* **provisioningState**: string: The provisioning state of the Public IP prefix resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicIPAddresses**: [ReferencedPublicIpAddress](#referencedpublicipaddress)[]: The list of all referenced PublicIPAddresses
* **publicIPAddressVersion**: 'IPv4' | 'IPv6' | string: The public IP address version. Possible values are: 'IPv4' and 'IPv6'.
* **resourceGuid**: string: The resource GUID property of the public IP prefix resource.

## PublicIPPrefixSku
### Properties
* **name**: 'Standard' | string: Name of a public IP prefix SKU.

## ReferencedPublicIpAddress
### Properties
* **id**: string: The PublicIPAddress Reference

## ResourceNavigationLink
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ResourceNavigationLinkFormat](#resourcenavigationlinkformat): Resource navigation link properties format.

## ResourceNavigationLinkFormat
### Properties
* **link**: string: Link to the external resource
* **linkedResourceType**: string: Resource type of the linked resource.
* **provisioningState**: string (ReadOnly): Provisioning state of the ResourceNavigationLink resource.

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

## Route
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [RoutePropertiesFormat](#routepropertiesformat): Properties of the route.

## RouteFilter
### Properties
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [RouteFilterPropertiesFormat](#routefilterpropertiesformat): Route Filter Resource
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## RouteFilterPropertiesFormat
### Properties
* **peerings**: [ExpressRouteCircuitPeering](#expressroutecircuitpeering)[]: A collection of references to express route circuit peerings.
* **provisioningState**: string (ReadOnly): The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', 'Succeeded' and 'Failed'.
* **rules**: [RouteFilterRule](#routefilterrule)[]: Collection of RouteFilterRules contained within a route filter.

## RouteFilterRule
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [RouteFilterRulePropertiesFormat](#routefilterrulepropertiesformat): Route Filter Rule Resource

## RouteFilterRulePropertiesFormat
### Properties
* **access**: 'Allow' | 'Deny' | string (Required): The access type of the rule. Valid values are: 'Allow', 'Deny'
* **communities**: string[] (Required): The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020']
* **provisioningState**: string (ReadOnly): The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', 'Succeeded' and 'Failed'.
* **routeFilterRuleType**: 'Community' | string (Required): The rule type of the rule. Valid value is: 'Community'

## RoutePropertiesFormat
### Properties
* **addressPrefix**: string: The destination CIDR to which the route applies.
* **nextHopIpAddress**: string: The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
* **nextHopType**: 'Internet' | 'None' | 'VirtualAppliance' | 'VirtualNetworkGateway' | 'VnetLocal' | string (Required): The type of Azure hop the packet should be sent to. Possible values are: 'VirtualNetworkGateway', 'VnetLocal', 'Internet', 'VirtualAppliance', and 'None'
* **provisioningState**: string: The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## RouteTable
### Properties
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [RouteTablePropertiesFormat](#routetablepropertiesformat): Properties of the route table.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## RouteTablePropertiesFormat
### Properties
* **disableBgpRoutePropagation**: bool: Gets or sets whether to disable the routes learned by BGP on that route table. True means disable.
* **provisioningState**: string: The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **routes**: [Route](#route)[]: Collection of routes contained within a route table.
* **subnets**: [Subnet](#subnet)[] (ReadOnly): A collection of references to subnets.

## SecurityRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [SecurityRulePropertiesFormat](#securityrulepropertiesformat): Properties of the security rule

## SecurityRulePropertiesFormat
### Properties
* **access**: 'Allow' | 'Deny' | string (Required): The network traffic is allowed or denied. Possible values are: 'Allow' and 'Deny'.
* **description**: string: A description for this rule. Restricted to 140 chars.
* **destinationAddressPrefix**: string: The destination address prefix. CIDR or destination IP range. Asterisks '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
* **destinationAddressPrefixes**: string[]: The destination address prefixes. CIDR or destination IP ranges.
* **destinationApplicationSecurityGroups**: [ApplicationSecurityGroup](#applicationsecuritygroup)[]: The application security group specified as destination.
* **destinationPortRange**: string: The destination port or range. Integer or range between 0 and 65535. Asterisks '*' can also be used to match all ports.
* **destinationPortRanges**: string[]: The destination port ranges.
* **direction**: 'Inbound' | 'Outbound' | string (Required): The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic. Possible values are: 'Inbound' and 'Outbound'.
* **priority**: int: The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
* **protocol**: '*' | 'Tcp' | 'Udp' | string (Required): Network protocol this rule applies to. Possible values are 'Tcp', 'Udp', and '*'.
* **provisioningState**: string: The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **sourceAddressPrefix**: string: The CIDR or source IP range. Asterisks '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
* **sourceAddressPrefixes**: string[]: The CIDR or source IP ranges.
* **sourceApplicationSecurityGroups**: [ApplicationSecurityGroup](#applicationsecuritygroup)[]: The application security group specified as source.
* **sourcePortRange**: string: The source port or range. Integer or range between 0 and 65535. Asterisks '*' can also be used to match all ports.
* **sourcePortRanges**: string[]: The source port ranges.

## ServiceAssociationLink
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ServiceAssociationLinkPropertiesFormat](#serviceassociationlinkpropertiesformat): Resource navigation link properties format.

## ServiceAssociationLinkPropertiesFormat
### Properties
* **link**: string: Link to the external resource.
* **linkedResourceType**: string: Resource type of the linked resource.
* **provisioningState**: string (ReadOnly): Provisioning state of the ServiceAssociationLink resource.

## ServiceDelegationPropertiesFormat
### Properties
* **actions**: string[]: Describes the actions permitted to the service upon delegation
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.
* **serviceName**: string: The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers)

## ServiceEndpointPolicy
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [ServiceEndpointPolicyPropertiesFormat](#serviceendpointpolicypropertiesformat): Properties of the service end point policy
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## ServiceEndpointPolicyDefinition
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ServiceEndpointPolicyDefinitionPropertiesFormat](#serviceendpointpolicydefinitionpropertiesformat): Properties of the service endpoint policy definition

## ServiceEndpointPolicyDefinitionPropertiesFormat
### Properties
* **description**: string: A description for this rule. Restricted to 140 chars.
* **provisioningState**: string (ReadOnly): The provisioning state of the service end point policy definition. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **service**: string: service endpoint name.
* **serviceResources**: string[]: A list of service resources.

## ServiceEndpointPolicyPropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state of the service endpoint policy. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the service endpoint policy resource.
* **serviceEndpointPolicyDefinitions**: [ServiceEndpointPolicyDefinition](#serviceendpointpolicydefinition)[]: A collection of service endpoint policy definitions of the service endpoint policy.
* **subnets**: [Subnet](#subnet)[] (ReadOnly): A collection of references to subnets.

## ServiceEndpointPropertiesFormat
### Properties
* **locations**: string[]: A list of locations.
* **provisioningState**: string: The provisioning state of the resource.
* **service**: string: The type of the endpoint service.

## Subnet
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [SubnetPropertiesFormat](#subnetpropertiesformat): Properties of the subnet.

## SubnetPropertiesFormat
### Properties
* **addressPrefix**: string: The address prefix for the subnet.
* **addressPrefixes**: string[]: List of  address prefixes for the subnet.
* **delegations**: [Delegation](#delegation)[]: Gets an array of references to the delegations on the subnet.
* **interfaceEndpoints**: [InterfaceEndpoint](#interfaceendpoint)[] (ReadOnly): An array of references to interface endpoints
* **ipConfigurationProfiles**: [IPConfigurationProfile](#ipconfigurationprofile)[] (ReadOnly): Array of IP configuration profiles which reference this subnet.
* **ipConfigurations**: [IPConfiguration](#ipconfiguration)[] (ReadOnly): Gets an array of references to the network interface IP configurations using subnet.
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup): The reference of the NetworkSecurityGroup resource.
* **provisioningState**: string: The provisioning state of the resource.
* **purpose**: string (ReadOnly): A read-only string identifying the intention of use for this subnet based on delegations and other user-defined properties.
* **resourceNavigationLinks**: [ResourceNavigationLink](#resourcenavigationlink)[]: Gets an array of references to the external resources using subnet.
* **routeTable**: [RouteTable](#routetable): The reference of the RouteTable resource.
* **serviceAssociationLinks**: [ServiceAssociationLink](#serviceassociationlink)[]: Gets an array of references to services injecting into this subnet.
* **serviceEndpointPolicies**: [ServiceEndpointPolicy](#serviceendpointpolicy)[]: An array of service endpoint policies.
* **serviceEndpoints**: [ServiceEndpointPropertiesFormat](#serviceendpointpropertiesformat)[]: An array of service endpoints.

## SubResource
### Properties
* **id**: string: Resource ID.

## TunnelConnectionHealth
### Properties
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' | string (ReadOnly): Virtual network Gateway connection status
* **egressBytesTransferred**: int (ReadOnly): The Egress Bytes Transferred in this connection
* **ingressBytesTransferred**: int (ReadOnly): The Ingress Bytes Transferred in this connection
* **lastConnectionEstablishedUtcTime**: string (ReadOnly): The time at which connection was established in Utc format.
* **tunnel**: string (ReadOnly): Tunnel name.

## VirtualHubId
### Properties
* **id**: string: The resource URI for the Virtual Hub where the ExpressRoute gateway is or will be deployed. The Virtual Hub resource and the ExpressRoute gateway resource reside in the same subscription.

## VirtualHubProperties
### Properties
* **addressPrefix**: string: Address-prefix for this VirtualHub.
* **expressRouteGateway**: [SubResource](#subresource): The expressRouteGateway associated with this VirtualHub
* **p2SVpnGateway**: [SubResource](#subresource): The P2SVpnGateway associated with this VirtualHub
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: The provisioning state of the resource.
* **routeTable**: [VirtualHubRouteTable](#virtualhubroutetable): The routeTable associated with this virtual hub.
* **virtualNetworkConnections**: [HubVirtualNetworkConnection](#hubvirtualnetworkconnection)[]: list of all vnet connections with this VirtualHub.
* **virtualWan**: [SubResource](#subresource): The VirtualWAN to which the VirtualHub belongs
* **vpnGateway**: [SubResource](#subresource): The VpnGateway associated with this VirtualHub

## VirtualHubRoute
### Properties
* **addressPrefixes**: string[]: list of all addressPrefixes.
* **nextHopIpAddress**: string: NextHop ip address.

## VirtualHubRouteTable
### Properties
* **routes**: [VirtualHubRoute](#virtualhubroute)[]: list of all routes.

## VirtualNetworkGateway
### Properties
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [VirtualNetworkGatewayPropertiesFormat](#virtualnetworkgatewaypropertiesformat) (Required): Properties of the virtual network gateway.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## VirtualNetworkGatewayConnectionPropertiesFormat
### Properties
* **authorizationKey**: string: The authorizationKey.
* **connectionProtocol**: 'IKEv1' | 'IKEv2' | string: Connection protocol used for this connection
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' | string (ReadOnly): Virtual network Gateway connection status. Possible values are 'Unknown', 'Connecting', 'Connected' and 'NotConnected'.
* **connectionType**: 'ExpressRoute' | 'IPsec' | 'VPNClient' | 'Vnet2Vnet' | string (Required): Gateway connection type. Possible values are: 'Ipsec','Vnet2Vnet','ExpressRoute', and 'VPNClient.
* **egressBytesTransferred**: int (ReadOnly): The egress bytes transferred in this connection.
* **enableBgp**: bool: EnableBgp flag
* **expressRouteGatewayBypass**: bool: Bypass ExpressRoute Gateway for data forwarding
* **ingressBytesTransferred**: int (ReadOnly): The ingress bytes transferred in this connection.
* **ipsecPolicies**: [IpsecPolicy](#ipsecpolicy)[]: The IPSec Policies to be considered by this connection.
* **localNetworkGateway2**: [LocalNetworkGateway](#localnetworkgateway): The reference to local network gateway resource.
* **peer**: [SubResource](#subresource): The reference to peerings resource.
* **provisioningState**: string (ReadOnly): The provisioning state of the VirtualNetworkGatewayConnection resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string: The resource GUID property of the VirtualNetworkGatewayConnection resource.
* **routingWeight**: int: The routing weight.
* **sharedKey**: string: The IPSec shared key.
* **tunnelConnectionStatus**: [TunnelConnectionHealth](#tunnelconnectionhealth)[] (ReadOnly): Collection of all tunnels' connection health status.
* **usePolicyBasedTrafficSelectors**: bool: Enable policy-based traffic selectors.
* **virtualNetworkGateway1**: [VirtualNetworkGateway](#virtualnetworkgateway) (Required): The reference to virtual network gateway resource.
* **virtualNetworkGateway2**: [VirtualNetworkGateway](#virtualnetworkgateway): The reference to virtual network gateway resource.

## VirtualNetworkGatewayIPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VirtualNetworkGatewayIPConfigurationPropertiesFormat](#virtualnetworkgatewayipconfigurationpropertiesformat): Properties of the virtual network gateway ip configuration.

## VirtualNetworkGatewayIPConfigurationPropertiesFormat
### Properties
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: The private IP allocation method. Possible values are: 'Static' and 'Dynamic'.
* **provisioningState**: string (ReadOnly): The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicIPAddress**: [SubResource](#subresource): The reference of the public IP resource.
* **subnet**: [SubResource](#subresource): The reference of the subnet resource.

## VirtualNetworkGatewayPropertiesFormat
### Properties
* **activeActive**: bool: ActiveActive flag
* **bgpSettings**: [BgpSettings](#bgpsettings): Virtual network gateway's BGP speaker settings.
* **enableBgp**: bool: Whether BGP is enabled for this virtual network gateway or not.
* **gatewayDefaultSite**: [SubResource](#subresource): The reference of the LocalNetworkGateway resource which represents local network site having default routes. Assign Null value in case of removing existing default site setting.
* **gatewayType**: 'ExpressRoute' | 'Vpn' | string: The type of this virtual network gateway. Possible values are: 'Vpn' and 'ExpressRoute'.
* **ipConfigurations**: [VirtualNetworkGatewayIPConfiguration](#virtualnetworkgatewayipconfiguration)[]: IP configurations for virtual network gateway.
* **provisioningState**: string (ReadOnly): The provisioning state of the VirtualNetworkGateway resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string: The resource GUID property of the VirtualNetworkGateway resource.
* **sku**: [VirtualNetworkGatewaySku](#virtualnetworkgatewaysku): The reference of the VirtualNetworkGatewaySku resource which represents the SKU selected for Virtual network gateway.
* **vpnClientConfiguration**: [VpnClientConfiguration](#vpnclientconfiguration): The reference of the VpnClientConfiguration resource which represents the P2S VpnClient configurations.
* **vpnType**: 'PolicyBased' | 'RouteBased' | string: The type of this virtual network gateway. Possible values are: 'PolicyBased' and 'RouteBased'.

## VirtualNetworkGatewaySku
### Properties
* **capacity**: int: The capacity.
* **name**: 'Basic' | 'ErGw1AZ' | 'ErGw2AZ' | 'ErGw3AZ' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | 'VpnGw1' | 'VpnGw1AZ' | 'VpnGw2' | 'VpnGw2AZ' | 'VpnGw3' | 'VpnGw3AZ' | string: Gateway SKU name.
* **tier**: 'Basic' | 'ErGw1AZ' | 'ErGw2AZ' | 'ErGw3AZ' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | 'VpnGw1' | 'VpnGw1AZ' | 'VpnGw2' | 'VpnGw2AZ' | 'VpnGw3' | 'VpnGw3AZ' | string: Gateway SKU tier.

## VirtualNetworkPeering
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VirtualNetworkPeeringPropertiesFormat](#virtualnetworkpeeringpropertiesformat): Properties of the virtual network peering.

## VirtualNetworkPeeringPropertiesFormat
### Properties
* **allowForwardedTraffic**: bool: Whether the forwarded traffic from the VMs in the remote virtual network will be allowed/disallowed.
* **allowGatewayTransit**: bool: If gateway links can be used in remote virtual networking to link to this virtual network.
* **allowVirtualNetworkAccess**: bool: Whether the VMs in the linked virtual network space would be able to access all the VMs in local Virtual network space.
* **peeringState**: 'Connected' | 'Disconnected' | 'Initiated' | string: The status of the virtual network peering. Possible values are 'Initiated', 'Connected', and 'Disconnected'.
* **provisioningState**: string: The provisioning state of the resource.
* **remoteAddressSpace**: [AddressSpace](#addressspace): The reference of the remote virtual network address space.
* **remoteVirtualNetwork**: [SubResource](#subresource): The reference of the remote virtual network. The remote virtual network can be in the same or different region (preview). See here to register for the preview and learn more (https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-create-peering).
* **useRemoteGateways**: bool: If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.

## VirtualNetworkPropertiesFormat
### Properties
* **addressSpace**: [AddressSpace](#addressspace): The AddressSpace that contains an array of IP address ranges that can be used by subnets.
* **ddosProtectionPlan**: [SubResource](#subresource): The DDoS protection plan associated with the virtual network.
* **dhcpOptions**: [DhcpOptions](#dhcpoptions): The dhcpOptions that contains an array of DNS servers available to VMs deployed in the virtual network.
* **enableDdosProtection**: bool: Indicates if DDoS protection is enabled for all the protected resources in the virtual network. It requires a DDoS protection plan associated with the resource.
* **enableVmProtection**: bool: Indicates if VM protection is enabled for all the subnets in the virtual network.
* **provisioningState**: string: The provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string: The resourceGuid property of the Virtual Network resource.
* **subnets**: [Subnet](#subnet)[]: A list of subnets in a Virtual Network.
* **virtualNetworkPeerings**: [VirtualNetworkPeering](#virtualnetworkpeering)[]: A list of peerings in a Virtual Network.

## VirtualNetworkTap
### Properties
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [VirtualNetworkTapPropertiesFormat](#virtualnetworktappropertiesformat): Virtual Network Tap Properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## VirtualNetworkTapPropertiesFormat
### Properties
* **destinationLoadBalancerFrontEndIPConfiguration**: [FrontendIPConfiguration](#frontendipconfiguration): The reference to the private IP address on the internal Load Balancer that will receive the tap
* **destinationNetworkInterfaceIPConfiguration**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration): The reference to the private IP Address of the collector nic that will receive the tap
* **destinationPort**: int: The VXLAN destination port that will receive the tapped traffic.
* **networkInterfaceTapConfigurations**: [NetworkInterfaceTapConfiguration](#networkinterfacetapconfiguration)[] (ReadOnly): Specifies the list of resource IDs for the network interface IP configuration that needs to be tapped.
* **provisioningState**: string (ReadOnly): The provisioning state of the virtual network tap. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string (ReadOnly): The resourceGuid property of the virtual network tap.

## VirtualWanProperties
### Properties
* **allowBranchToBranchTraffic**: bool: True if branch to branch traffic is allowed.
* **allowVnetToVnetTraffic**: bool: True if Vnet to Vnet traffic is allowed.
* **disableVpnEncryption**: bool: Vpn encryption to be disabled or not.
* **office365LocalBreakoutCategory**: 'All' | 'None' | 'Optimize' | 'OptimizeAndAllow' | string (ReadOnly): The office local breakout category.
* **p2SVpnServerConfigurations**: [P2SVpnServerConfiguration](#p2svpnserverconfiguration)[]: list of all P2SVpnServerConfigurations associated with the virtual wan.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: The provisioning state of the resource.
* **securityProviderName**: string: The Security Provider name.
* **virtualHubs**: [SubResource](#subresource)[] (ReadOnly): List of VirtualHubs in the VirtualWAN.
* **vpnSites**: [SubResource](#subresource)[] (ReadOnly)

## VpnClientConfiguration
### Properties
* **radiusServerAddress**: string: The radius server address property of the VirtualNetworkGateway resource for vpn client connection.
* **radiusServerSecret**: string: The radius secret property of the VirtualNetworkGateway resource for vpn client connection.
* **vpnClientAddressPool**: [AddressSpace](#addressspace): The reference of the address space resource which represents Address space for P2S VpnClient.
* **vpnClientIpsecPolicies**: [IpsecPolicy](#ipsecpolicy)[]: VpnClientIpsecPolicies for virtual network gateway P2S client.
* **vpnClientProtocols**: 'IkeV2' | 'OpenVPN' | 'SSTP' | string[]: VpnClientProtocols for Virtual network gateway.
* **vpnClientRevokedCertificates**: [VpnClientRevokedCertificate](#vpnclientrevokedcertificate)[]: VpnClientRevokedCertificate for Virtual network gateway.
* **vpnClientRootCertificates**: [VpnClientRootCertificate](#vpnclientrootcertificate)[]: VpnClientRootCertificate for virtual network gateway.

## VpnClientConnectionHealth
### Properties
* **allocatedIpAddresses**: string[]: List of allocated ip addresses to the connected p2s vpn clients.
* **totalEgressBytesTransferred**: int (ReadOnly): Total of the Egress Bytes Transferred in this connection
* **totalIngressBytesTransferred**: int (ReadOnly): Total of the Ingress Bytes Transferred in this P2S Vpn connection
* **vpnClientConnectionsCount**: int: The total of p2s vpn clients connected at this time to this P2SVpnGateway.

## VpnClientRevokedCertificate
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VpnClientRevokedCertificatePropertiesFormat](#vpnclientrevokedcertificatepropertiesformat): Properties of the vpn client revoked certificate.

## VpnClientRevokedCertificatePropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state of the VPN client revoked certificate resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **thumbprint**: string: The revoked VPN client certificate thumbprint.

## VpnClientRootCertificate
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VpnClientRootCertificatePropertiesFormat](#vpnclientrootcertificatepropertiesformat) (Required): Properties of the vpn client root certificate.

## VpnClientRootCertificatePropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state of the VPN client root certificate resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicCertData**: string (Required): The certificate public data.

## VpnConnection
### Properties
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VpnConnectionProperties](#vpnconnectionproperties): Parameters for VpnConnection

## VpnConnectionProperties
### Properties
* **connectionBandwidth**: int: Expected bandwidth in MBPS.
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' | string (ReadOnly): The connection status.
* **egressBytesTransferred**: int (ReadOnly): Egress bytes transferred.
* **enableBgp**: bool: EnableBgp flag
* **enableInternetSecurity**: bool: Enable internet security
* **enableRateLimiting**: bool: EnableBgp flag
* **ingressBytesTransferred**: int (ReadOnly): Ingress bytes transferred.
* **ipsecPolicies**: [IpsecPolicy](#ipsecpolicy)[]: The IPSec Policies to be considered by this connection.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: The provisioning state of the resource.
* **remoteVpnSite**: [SubResource](#subresource): Id of the connected vpn site.
* **routingWeight**: int: routing weight for vpn connection.
* **sharedKey**: string: SharedKey for the vpn connection.
* **vpnConnectionProtocolType**: 'IKEv1' | 'IKEv2' | string: Connection protocol used for this connection

## VpnGatewayProperties
### Properties
* **bgpSettings**: [BgpSettings](#bgpsettings): Local network gateway's BGP speaker settings.
* **connections**: [VpnConnection](#vpnconnection)[]: list of all vpn connections to the gateway.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: The provisioning state of the resource.
* **virtualHub**: [SubResource](#subresource): The VirtualHub to which the gateway belongs
* **vpnGatewayScaleUnit**: int: The scale unit for this vpn gateway.

## VpnSiteProperties
### Properties
* **addressSpace**: [AddressSpace](#addressspace): The AddressSpace that contains an array of IP address ranges.
* **bgpProperties**: [BgpSettings](#bgpsettings): The set of bgp properties.
* **deviceProperties**: [DeviceProperties](#deviceproperties): The device properties
* **ipAddress**: string: The ip-address for the vpn-site.
* **isSecuritySite**: bool: IsSecuritySite flag
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: The provisioning state of the resource.
* **siteKey**: string: The key for vpn-site that can be used for connections.
* **virtualWan**: [SubResource](#subresource): The VirtualWAN to which the vpnSite belongs

