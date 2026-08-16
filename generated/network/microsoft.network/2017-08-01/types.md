# Microsoft.Network @ 2017-08-01

## Resource Microsoft.Network/applicationGatewayAvailableSslOptions@2017-08-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationGatewayAvailableSslOptionsPropertiesFormat](#applicationgatewayavailablessloptionspropertiesformat) (ReadOnly): Properties of ApplicationGatewayAvailableSslOptions
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Network/applicationGatewayAvailableSslOptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/applicationGatewayAvailableSslOptions/predefinedPolicies@2017-08-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationGatewaySslPredefinedPolicyPropertiesFormat](#applicationgatewaysslpredefinedpolicypropertiesformat) (ReadOnly): Properties of ApplicationGatewaySslPredefinedPolicy
* **type**: 'Microsoft.Network/applicationGatewayAvailableSslOptions/predefinedPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/applicationGateways@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationGatewayPropertiesFormat](#applicationgatewaypropertiesformat): Properties of the application gateway.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/applicationGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/connections@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkGatewayConnectionPropertiesFormat](#virtualnetworkgatewayconnectionpropertiesformat) (Required): Properties of the virtual network gateway connection.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/connections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteCircuitPropertiesFormat](#expressroutecircuitpropertiesformat): Properties of ExpressRouteCircuit.
* **sku**: [ExpressRouteCircuitSku](#expressroutecircuitsku): The SKU.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/expressRouteCircuits' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits/authorizations@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationPropertiesFormat](#authorizationpropertiesformat)
* **type**: 'Microsoft.Network/expressRouteCircuits/authorizations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits/peerings@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteCircuitPeeringPropertiesFormat](#expressroutecircuitpeeringpropertiesformat)
* **type**: 'Microsoft.Network/expressRouteCircuits/peerings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/loadBalancers@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LoadBalancerPropertiesFormat](#loadbalancerpropertiesformat): Properties of load balancer.
* **sku**: [LoadBalancerSku](#loadbalancersku): The load balancer SKU.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/loadBalancers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/loadBalancers/backendAddressPools@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackendAddressPoolPropertiesFormat](#backendaddresspoolpropertiesformat) (ReadOnly): Properties of load balancer backend address pool.
* **type**: 'Microsoft.Network/loadBalancers/backendAddressPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/loadBalancers/frontendIPConfigurations@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FrontendIPConfigurationPropertiesFormat](#frontendipconfigurationpropertiesformat) (ReadOnly): Properties of the load balancer probe.
* **type**: 'Microsoft.Network/loadBalancers/frontendIPConfigurations' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[] (ReadOnly): A list of availability zones denoting the IP allocated for the resource needs to come from.

## Resource Microsoft.Network/loadBalancers/inboundNatRules@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InboundNatRulePropertiesFormat](#inboundnatrulepropertiesformat): Properties of load balancer inbound nat rule.
* **type**: 'Microsoft.Network/loadBalancers/inboundNatRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/loadBalancers/loadBalancingRules@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LoadBalancingRulePropertiesFormat](#loadbalancingrulepropertiesformat) (ReadOnly): Properties of load balancer load balancing rule.
* **type**: 'Microsoft.Network/loadBalancers/loadBalancingRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/loadBalancers/probes@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProbePropertiesFormat](#probepropertiesformat) (ReadOnly): Properties of load balancer probe.
* **type**: 'Microsoft.Network/loadBalancers/probes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/localNetworkGateways@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string {minLength: 1} (Required, DeployTimeConstant): The resource name
* **properties**: [LocalNetworkGatewayPropertiesFormat](#localnetworkgatewaypropertiesformat) (Required): Properties of the local network gateway.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/localNetworkGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkInterfaces@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat): Properties of the network interface.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkInterfaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkInterfaces/ipConfigurations@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkInterfaceIPConfigurationPropertiesFormat](#networkinterfaceipconfigurationpropertiesformat) (ReadOnly): Network interface IP configuration properties.
* **type**: 'Microsoft.Network/networkInterfaces/ipConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityGroups@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkSecurityGroupPropertiesFormat](#networksecuritygrouppropertiesformat): Properties of the network security group
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkSecurityGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityGroups/defaultSecurityRules@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityRulePropertiesFormat](#securityrulepropertiesformat) (ReadOnly): Properties of the security rule
* **type**: 'Microsoft.Network/networkSecurityGroups/defaultSecurityRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityGroups/securityRules@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityRulePropertiesFormat](#securityrulepropertiesformat): Properties of the security rule
* **type**: 'Microsoft.Network/networkSecurityGroups/securityRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkWatchers@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkWatcherPropertiesFormat](#networkwatcherpropertiesformat): The network watcher properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkWatchers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkWatchers/packetCaptures@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PacketCaptureParametersOrPacketCaptureResultProperties](#packetcaptureparametersorpacketcaptureresultproperties) (Required): Parameters that define the create packet capture operation.
* **type**: 'Microsoft.Network/networkWatchers/packetCaptures' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/publicIPAddresses@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat): Public IP address properties.
* **sku**: [PublicIPAddressSku](#publicipaddresssku): The public IP address SKU.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/publicIPAddresses' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: A list of availability zones denoting the IP allocated for the resource needs to come from.

## Resource Microsoft.Network/routeFilters@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RouteFilterPropertiesFormat](#routefilterpropertiesformat): Route Filter Resource
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/routeFilters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/routeFilters/routeFilterRules@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RouteFilterRulePropertiesFormat](#routefilterrulepropertiesformat): Route Filter Rule Resource
* **tags**: [RouteFilterRuleTags](#routefilterruletags): Resource tags.
* **type**: 'Microsoft.Network/routeFilters/routeFilterRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/routeTables@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RouteTablePropertiesFormat](#routetablepropertiesformat): Properties of the route table.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/routeTables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/routeTables/routes@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoutePropertiesFormat](#routepropertiesformat): Properties of the route.
* **type**: 'Microsoft.Network/routeTables/routes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworkGateways@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkGatewayPropertiesFormat](#virtualnetworkgatewaypropertiesformat) (Required): Properties of the virtual network gateway.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/virtualNetworkGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworks@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkPropertiesFormat](#virtualnetworkpropertiesformat): Properties of the virtual network.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/virtualNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworks/subnets@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SubnetPropertiesFormat](#subnetpropertiesformat): Properties of the subnet.
* **type**: 'Microsoft.Network/virtualNetworks/subnets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworks/virtualNetworkPeerings@2017-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkPeeringPropertiesFormat](#virtualnetworkpeeringpropertiesformat): Properties of the virtual network peering.
* **type**: 'Microsoft.Network/virtualNetworks/virtualNetworkPeerings' (ReadOnly, DeployTimeConstant): The resource type

## Function backendhealth (Microsoft.Network/applicationGateways@2017-08-01)
* **Resource**: Microsoft.Network/applicationGateways
* **ApiVersion**: 2017-08-01
* **Output**: [ApplicationGatewayBackendHealth](#applicationgatewaybackendhealth)

## Function configureFlowLog (Microsoft.Network/networkWatchers@2017-08-01)
* **Resource**: Microsoft.Network/networkWatchers
* **ApiVersion**: 2017-08-01
* **Input**: [FlowLogInformation](#flowloginformation)
* **Output**: [FlowLogInformation](#flowloginformation)

## Function connectivityCheck (Microsoft.Network/networkWatchers@2017-08-01)
* **Resource**: Microsoft.Network/networkWatchers
* **ApiVersion**: 2017-08-01
* **Input**: [ConnectivityParameters](#connectivityparameters)
* **Output**: [ConnectivityInformation](#connectivityinformation)

## Function effectiveNetworkSecurityGroups (Microsoft.Network/networkInterfaces@2017-08-01)
* **Resource**: Microsoft.Network/networkInterfaces
* **ApiVersion**: 2017-08-01
* **Output**: [EffectiveNetworkSecurityGroupListResult](#effectivenetworksecuritygrouplistresult)

## Function effectiveRouteTable (Microsoft.Network/networkInterfaces@2017-08-01)
* **Resource**: Microsoft.Network/networkInterfaces
* **ApiVersion**: 2017-08-01
* **Output**: [EffectiveRouteListResult](#effectiveroutelistresult)

## Function generatevpnclientpackage (Microsoft.Network/virtualNetworkGateways@2017-08-01)
* **Resource**: Microsoft.Network/virtualNetworkGateways
* **ApiVersion**: 2017-08-01
* **Input**: [VpnClientParameters](#vpnclientparameters)
* **Output**: string

## Function generatevpnprofile (Microsoft.Network/virtualNetworkGateways@2017-08-01)
* **Resource**: Microsoft.Network/virtualNetworkGateways
* **ApiVersion**: 2017-08-01
* **Input**: [VpnClientParameters](#vpnclientparameters)
* **Output**: string

## Function getBgpPeerStatus (Microsoft.Network/virtualNetworkGateways@2017-08-01)
* **Resource**: Microsoft.Network/virtualNetworkGateways
* **ApiVersion**: 2017-08-01
* **Output**: [BgpPeerStatusListResult](#bgppeerstatuslistresult)

## Function getLearnedRoutes (Microsoft.Network/virtualNetworkGateways@2017-08-01)
* **Resource**: Microsoft.Network/virtualNetworkGateways
* **ApiVersion**: 2017-08-01
* **Output**: [GatewayRouteListResult](#gatewayroutelistresult)

## Function getvpnprofilepackageurl (Microsoft.Network/virtualNetworkGateways@2017-08-01)
* **Resource**: Microsoft.Network/virtualNetworkGateways
* **ApiVersion**: 2017-08-01
* **Output**: string

## Function ipFlowVerify (Microsoft.Network/networkWatchers@2017-08-01)
* **Resource**: Microsoft.Network/networkWatchers
* **ApiVersion**: 2017-08-01
* **Input**: [VerificationIPFlowParameters](#verificationipflowparameters)
* **Output**: [VerificationIPFlowResult](#verificationipflowresult)

## Function nextHop (Microsoft.Network/networkWatchers@2017-08-01)
* **Resource**: Microsoft.Network/networkWatchers
* **ApiVersion**: 2017-08-01
* **Input**: [NextHopParameters](#nexthopparameters)
* **Output**: [NextHopResult](#nexthopresult)

## Function queryFlowLogStatus (Microsoft.Network/networkWatchers@2017-08-01)
* **Resource**: Microsoft.Network/networkWatchers
* **ApiVersion**: 2017-08-01
* **Input**: [FlowLogStatusParameters](#flowlogstatusparameters)
* **Output**: [FlowLogInformation](#flowloginformation)

## Function queryStatus (Microsoft.Network/networkWatchers/packetCaptures@2017-08-01)
* **Resource**: Microsoft.Network/networkWatchers/packetCaptures
* **ApiVersion**: 2017-08-01
* **Output**: [PacketCaptureQueryStatusResult](#packetcapturequerystatusresult)

## Function queryTroubleshootResult (Microsoft.Network/networkWatchers@2017-08-01)
* **Resource**: Microsoft.Network/networkWatchers
* **ApiVersion**: 2017-08-01
* **Input**: [QueryTroubleshootingParameters](#querytroubleshootingparameters)
* **Output**: [TroubleshootingResult](#troubleshootingresult)

## Function reset (Microsoft.Network/virtualNetworkGateways@2017-08-01)
* **Resource**: Microsoft.Network/virtualNetworkGateways
* **ApiVersion**: 2017-08-01
* **Output**: [VirtualNetworkGateway](#virtualnetworkgateway)

## Function securityGroupView (Microsoft.Network/networkWatchers@2017-08-01)
* **Resource**: Microsoft.Network/networkWatchers
* **ApiVersion**: 2017-08-01
* **Input**: [SecurityGroupViewParameters](#securitygroupviewparameters)
* **Output**: [SecurityGroupViewResult](#securitygroupviewresult)

## Function topology (Microsoft.Network/networkWatchers@2017-08-01)
* **Resource**: Microsoft.Network/networkWatchers
* **ApiVersion**: 2017-08-01
* **Input**: [TopologyParameters](#topologyparameters)
* **Output**: [Topology](#topology)

## Function troubleshoot (Microsoft.Network/networkWatchers@2017-08-01)
* **Resource**: Microsoft.Network/networkWatchers
* **ApiVersion**: 2017-08-01
* **Input**: [TroubleshootingParameters](#troubleshootingparameters)
* **Output**: [TroubleshootingResult](#troubleshootingresult)

## AddressSpace
### Properties
* **addressPrefixes**: string[]: A list of address blocks reserved for this virtual network in CIDR notation.

## ApplicationGatewayAuthenticationCertificate
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ApplicationGatewayAuthenticationCertificatePropertiesFormat](#applicationgatewayauthenticationcertificatepropertiesformat): Authentication certificates properties of an application gateway.
* **type**: string: Type of the resource.

## ApplicationGatewayAuthenticationCertificatePropertiesFormat
### Properties
* **data**: string: Certificate public data.
* **provisioningState**: string: Provisioning state of the authentication certificate resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## ApplicationGatewayAvailableSslOptionsPropertiesFormat
### Properties
* **availableCipherSuites**: ('TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA256' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA256' | 'TLS_DHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_DHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_RSA_WITH_3DES_EDE_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_RSA_WITH_AES_256_CBC_SHA' | 'TLS_RSA_WITH_AES_256_CBC_SHA256' | 'TLS_RSA_WITH_AES_256_GCM_SHA384' | string)[]: List of available Ssl cipher suites.
* **availableProtocols**: ('TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | string)[]: List of available Ssl protocols.
* **defaultPolicy**: 'AppGwSslPolicy20150501' | 'AppGwSslPolicy20170401' | 'AppGwSslPolicy20170401S' | string: Name of the Ssl predefined policy applied by default to application gateway
* **predefinedPolicies**: [SubResource](#subresource)[]: List of available Ssl predefined policy.

## ApplicationGatewayBackendAddress
### Properties
* **fqdn**: string: Fully qualified domain name (FQDN).
* **ipAddress**: string: IP address

## ApplicationGatewayBackendAddressPool
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ApplicationGatewayBackendAddressPoolPropertiesFormat](#applicationgatewaybackendaddresspoolpropertiesformat): Properties of Backend Address Pool of an application gateway.
* **type**: string: Type of the resource.

## ApplicationGatewayBackendAddressPoolPropertiesFormat
### Properties
* **backendAddresses**: [ApplicationGatewayBackendAddress](#applicationgatewaybackendaddress)[]: Backend addresses
* **backendIPConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[]: Collection of references to IPs defined in network interfaces.
* **provisioningState**: string: Provisioning state of the backend address pool resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## ApplicationGatewayBackendHealth
### Properties
* **backendAddressPools**: [ApplicationGatewayBackendHealthPool](#applicationgatewaybackendhealthpool)[]

## ApplicationGatewayBackendHealthHttpSettings
### Properties
* **backendHttpSettings**: [ApplicationGatewayBackendHttpSettings](#applicationgatewaybackendhttpsettings): Reference of an ApplicationGatewayBackendHttpSettings resource.
* **servers**: [ApplicationGatewayBackendHealthServer](#applicationgatewaybackendhealthserver)[]: List of ApplicationGatewayBackendHealthServer resources.

## ApplicationGatewayBackendHealthPool
### Properties
* **backendAddressPool**: [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool): Reference of an ApplicationGatewayBackendAddressPool resource.
* **backendHttpSettingsCollection**: [ApplicationGatewayBackendHealthHttpSettings](#applicationgatewaybackendhealthhttpsettings)[]: List of ApplicationGatewayBackendHealthHttpSettings resources.

## ApplicationGatewayBackendHealthServer
### Properties
* **address**: string: IP address or FQDN of backend server.
* **health**: 'Down' | 'Draining' | 'Partial' | 'Unknown' | 'Up' | string: Health of backend server.
* **ipConfiguration**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration): Reference of IP configuration of backend server.

## ApplicationGatewayBackendHttpSettings
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
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
* **port**: int: Port
* **probe**: [SubResource](#subresource): Probe resource of an application gateway.
* **probeEnabled**: bool: Whether the probe is enabled. Default value is false.
* **protocol**: 'Http' | 'Https' | string: Protocol.
* **provisioningState**: string: Provisioning state of the backend http settings resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **requestTimeout**: int: Request timeout in seconds. Application Gateway will fail the request if response is not received within RequestTimeout. Acceptable values are from 1 second to 86400 seconds.

## ApplicationGatewayConnectionDraining
### Properties
* **drainTimeoutInSec**: int {minValue: 1, maxValue: 3600} (Required): The number of seconds connection draining is active. Acceptable values are from 1 second to 3600 seconds.
* **enabled**: bool (Required): Whether connection draining is enabled or not.

## ApplicationGatewayFirewallDisabledRuleGroup
### Properties
* **ruleGroupName**: string (Required): The name of the rule group that will be disabled.
* **rules**: int[]: The list of rules that will be disabled. If null, all rules of the rule group will be disabled.

## ApplicationGatewayFrontendIPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
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
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ApplicationGatewayFrontendPortPropertiesFormat](#applicationgatewayfrontendportpropertiesformat): Properties of Frontend port of an application gateway.
* **type**: string: Type of the resource.

## ApplicationGatewayFrontendPortPropertiesFormat
### Properties
* **port**: int: Frontend port
* **provisioningState**: string: Provisioning state of the frontend port resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## ApplicationGatewayHttpListener
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ApplicationGatewayHttpListenerPropertiesFormat](#applicationgatewayhttplistenerpropertiesformat): Properties of HTTP listener of an application gateway.
* **type**: string: Type of the resource.

## ApplicationGatewayHttpListenerPropertiesFormat
### Properties
* **frontendIPConfiguration**: [SubResource](#subresource): Frontend IP configuration resource of an application gateway.
* **frontendPort**: [SubResource](#subresource): Frontend port resource of an application gateway.
* **hostName**: string: Host name of HTTP listener.
* **protocol**: 'Http' | 'Https' | string: Protocol.
* **provisioningState**: string: Provisioning state of the HTTP listener resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **requireServerNameIndication**: bool: Applicable only if protocol is https. Enables SNI for multi-hosting.
* **sslCertificate**: [SubResource](#subresource): SSL certificate resource of an application gateway.

## ApplicationGatewayIPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
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
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ApplicationGatewayPathRulePropertiesFormat](#applicationgatewaypathrulepropertiesformat): Properties of path rule of an application gateway.
* **type**: string: Type of the resource.

## ApplicationGatewayPathRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource): Backend address pool resource of URL path map path rule.
* **backendHttpSettings**: [SubResource](#subresource): Backend http settings resource of URL path map path rule.
* **paths**: string[]: Path rules of URL path map.
* **provisioningState**: string: Path rule of URL path map resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **redirectConfiguration**: [SubResource](#subresource): Redirect configuration resource of URL path map path rule.

## ApplicationGatewayProbe
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
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
* **protocol**: 'Http' | 'Https' | string: Protocol.
* **provisioningState**: string: Provisioning state of the backend http settings resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **timeout**: int: the probe timeout in seconds. Probe marked as failed if valid response is not received with this timeout period. Acceptable values are from 1 second to 86400 seconds.
* **unhealthyThreshold**: int: The probe retry count. Backend server is marked down after consecutive probe failure count reaches UnhealthyThreshold. Acceptable values are from 1 second to 20.

## ApplicationGatewayPropertiesFormat
### Properties
* **authenticationCertificates**: [ApplicationGatewayAuthenticationCertificate](#applicationgatewayauthenticationcertificate)[]: Authentication certificates of the application gateway resource.
* **backendAddressPools**: [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)[]: Backend address pool of the application gateway resource.
* **backendHttpSettingsCollection**: [ApplicationGatewayBackendHttpSettings](#applicationgatewaybackendhttpsettings)[]: Backend http settings of the application gateway resource.
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
* **sku**: [ApplicationGatewaySku](#applicationgatewaysku): SKU of the application gateway resource.
* **sslCertificates**: [ApplicationGatewaySslCertificate](#applicationgatewaysslcertificate)[]: SSL certificates of the application gateway resource.
* **sslPolicy**: [ApplicationGatewaySslPolicy](#applicationgatewaysslpolicy): SSL policy of the application gateway resource.
* **urlPathMaps**: [ApplicationGatewayUrlPathMap](#applicationgatewayurlpathmap)[]: URL path map of the application gateway resource.
* **webApplicationFirewallConfiguration**: [ApplicationGatewayWebApplicationFirewallConfiguration](#applicationgatewaywebapplicationfirewallconfiguration): Web application firewall configuration.

## ApplicationGatewayRedirectConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
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
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ApplicationGatewayRequestRoutingRulePropertiesFormat](#applicationgatewayrequestroutingrulepropertiesformat): Properties of request routing rule of the application gateway.
* **type**: string: Type of the resource.

## ApplicationGatewayRequestRoutingRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource): Backend address pool resource of the application gateway.
* **backendHttpSettings**: [SubResource](#subresource): Frontend port resource of the application gateway.
* **httpListener**: [SubResource](#subresource): Http listener resource of the application gateway.
* **provisioningState**: string: Provisioning state of the request routing rule resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **redirectConfiguration**: [SubResource](#subresource): Redirect configuration resource of the application gateway.
* **ruleType**: 'Basic' | 'PathBasedRouting' | string: Rule type.
* **urlPathMap**: [SubResource](#subresource): URL path map resource of the application gateway.

## ApplicationGatewaySku
### Properties
* **capacity**: int: Capacity (instance count) of an application gateway.
* **name**: 'Standard_Large' | 'Standard_Medium' | 'Standard_Small' | 'WAF_Large' | 'WAF_Medium' | string: Name of an application gateway SKU.
* **tier**: 'Standard' | 'WAF' | string: Tier of an application gateway.

## ApplicationGatewaySslCertificate
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ApplicationGatewaySslCertificatePropertiesFormat](#applicationgatewaysslcertificatepropertiesformat): Properties of SSL certificates of an application gateway.
* **type**: string: Type of the resource.

## ApplicationGatewaySslCertificatePropertiesFormat
### Properties
* **data**: string: Base-64 encoded pfx certificate. Only applicable in PUT Request.
* **password**: string: Password for the pfx file specified in data. Only applicable in PUT request.
* **provisioningState**: string: Provisioning state of the SSL certificate resource Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicCertData**: string: Base-64 encoded Public cert data corresponding to pfx specified in data. Only applicable in GET request.

## ApplicationGatewaySslPolicy
### Properties
* **cipherSuites**: ('TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA256' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA256' | 'TLS_DHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_DHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_RSA_WITH_3DES_EDE_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_RSA_WITH_AES_256_CBC_SHA' | 'TLS_RSA_WITH_AES_256_CBC_SHA256' | 'TLS_RSA_WITH_AES_256_GCM_SHA384' | string)[]: Ssl cipher suites to be enabled in the specified order to application gateway.
* **disabledSslProtocols**: ('TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | string)[]: Ssl protocols to be disabled on application gateway.
* **minProtocolVersion**: 'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | string: Minimum version of Ssl protocol to be supported on application gateway.
* **policyName**: 'AppGwSslPolicy20150501' | 'AppGwSslPolicy20170401' | 'AppGwSslPolicy20170401S' | string: Name of Ssl predefined policy
* **policyType**: 'Custom' | 'Predefined' | string: Type of Ssl Policy

## ApplicationGatewaySslPredefinedPolicyPropertiesFormat
### Properties
* **cipherSuites**: ('TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA256' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA256' | 'TLS_DHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_DHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_RSA_WITH_3DES_EDE_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_RSA_WITH_AES_256_CBC_SHA' | 'TLS_RSA_WITH_AES_256_CBC_SHA256' | 'TLS_RSA_WITH_AES_256_GCM_SHA384' | string)[]: Ssl cipher suites to be enabled in the specified order for application gateway.
* **minProtocolVersion**: 'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | string: Minimum version of Ssl protocol to be supported on application gateway.

## ApplicationGatewayUrlPathMap
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ApplicationGatewayUrlPathMapPropertiesFormat](#applicationgatewayurlpathmappropertiesformat): Properties of UrlPathMap of the application gateway.
* **type**: string: Type of the resource.

## ApplicationGatewayUrlPathMapPropertiesFormat
### Properties
* **defaultBackendAddressPool**: [SubResource](#subresource): Default backend address pool resource of URL path map.
* **defaultBackendHttpSettings**: [SubResource](#subresource): Default backend http settings resource of URL path map.
* **defaultRedirectConfiguration**: [SubResource](#subresource): Default redirect configuration resource of URL path map.
* **pathRules**: [ApplicationGatewayPathRule](#applicationgatewaypathrule)[]: Path rule of URL path map resource.
* **provisioningState**: string: Provisioning state of the backend http settings resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## ApplicationGatewayWebApplicationFirewallConfiguration
### Properties
* **disabledRuleGroups**: [ApplicationGatewayFirewallDisabledRuleGroup](#applicationgatewayfirewalldisabledrulegroup)[]: The disabled rule groups.
* **enabled**: bool (Required): Whether the web application firewall is enabled or not.
* **firewallMode**: 'Detection' | 'Prevention' | string (Required): Web application firewall mode.
* **ruleSetType**: string (Required): The type of the web application firewall rule set. Possible values are: 'OWASP'.
* **ruleSetVersion**: string (Required): The version of the rule set type.

## AuthorizationPropertiesFormat
### Properties
* **authorizationKey**: string: The authorization key.
* **authorizationUseStatus**: 'Available' | 'InUse' | string: AuthorizationUseStatus. Possible values are: 'Available' and 'InUse'.
* **provisioningState**: string: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

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
* **outboundNatRule**: [SubResource](#subresource) (ReadOnly): Gets outbound rules that use this backend address pool.
* **provisioningState**: string: Get provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## BgpPeerStatus
### Properties
* **asn**: int (ReadOnly): The autonomous system number of the remote BGP peer
* **connectedDuration**: string (ReadOnly): For how long the peering has been up
* **localAddress**: string (ReadOnly): The virtual network gateway's local address
* **messagesReceived**: int (ReadOnly): The number of BGP messages received
* **messagesSent**: int (ReadOnly): The number of BGP messages sent
* **neighbor**: string (ReadOnly): The remote BGP peer
* **routesReceived**: int (ReadOnly): The number of routes learned from this peer
* **state**: 'Connected' | 'Connecting' | 'Idle' | 'Stopped' | 'Unknown' | string (ReadOnly): The BGP peer state

## BgpPeerStatusListResult
### Properties
* **value**: [BgpPeerStatus](#bgppeerstatus)[]: List of BGP peers

## BgpSettings
### Properties
* **asn**: int: The BGP speaker's ASN.
* **bgpPeeringAddress**: string: The BGP peering address and BGP identifier of this BGP speaker.
* **peerWeight**: int: The weight added to routes learned from this BGP speaker.

## ConnectivityDestination
### Properties
* **address**: string: The IP address or URI the resource to which a connection attempt will be made.
* **port**: int: Port on which check connectivity will be performed.
* **resourceId**: string: The ID of the resource to which a connection attempt will be made.

## ConnectivityHop
### Properties
* **address**: string (ReadOnly): The IP address of the hop.
* **id**: string (ReadOnly): The ID of the hop.
* **issues**: [ConnectivityIssue](#connectivityissue)[] (ReadOnly): List of issues.
* **nextHopIds**: string[] (ReadOnly): List of next hop identifiers.
* **resourceId**: string (ReadOnly): The ID of the resource corresponding to this hop.
* **type**: string (ReadOnly): The type of the hop.

## ConnectivityInformation
### Properties
* **avgLatencyInMs**: int (ReadOnly): Average latency in milliseconds.
* **connectionStatus**: 'Connected' | 'Degraded' | 'Disconnected' | 'Unknown' | string (ReadOnly): The connection status.
* **hops**: [ConnectivityHop](#connectivityhop)[] (ReadOnly): List of hops between the source and the destination.
* **maxLatencyInMs**: int (ReadOnly): Maximum latency in milliseconds.
* **minLatencyInMs**: int (ReadOnly): Minimum latency in milliseconds.
* **probesFailed**: int (ReadOnly): Number of failed probes.
* **probesSent**: int (ReadOnly): Total number of probes sent.

## ConnectivityIssue
### Properties
* **context**: [IssueContext](#issuecontext)[] (ReadOnly): Provides additional context on the issue.
* **origin**: 'Inbound' | 'Local' | 'Outbound' | string (ReadOnly): The origin of the issue.
* **severity**: 'Error' | 'Warning' | string (ReadOnly): The severity of the issue.
* **type**: 'AgentStopped' | 'DnsResolution' | 'GuestFirewall' | 'NetworkSecurityRule' | 'Platform' | 'PortThrottled' | 'SocketBind' | 'Unknown' | 'UserDefinedRoute' | string (ReadOnly): The type of issue.

## ConnectivityParameters
### Properties
* **destination**: [ConnectivityDestination](#connectivitydestination) (Required): Parameters that define destination of connection.
* **source**: [ConnectivitySource](#connectivitysource) (Required): Parameters that define the source of the connection.

## ConnectivitySource
### Properties
* **port**: int: The source port from which a connectivity check will be performed.
* **resourceId**: string (Required): The ID of the resource from which a connectivity check will be initiated.

## DhcpOptions
### Properties
* **dnsServers**: string[]: The list of DNS servers IP addresses.

## EffectiveNetworkSecurityGroup
### Properties
* **association**: [EffectiveNetworkSecurityGroupAssociation](#effectivenetworksecuritygroupassociation): Associated resources.
* **effectiveSecurityRules**: [EffectiveNetworkSecurityRule](#effectivenetworksecurityrule)[]: A collection of effective security rules.
* **networkSecurityGroup**: [SubResource](#subresource): The ID of network security group that is applied.
* **tagMap**: string: Mapping of tags to list of IP Addresses included within the tag.

## EffectiveNetworkSecurityGroupAssociation
### Properties
* **networkInterface**: [SubResource](#subresource): The ID of the network interface if assigned.
* **subnet**: [SubResource](#subresource): The ID of the subnet if assigned.

## EffectiveNetworkSecurityGroupListResult
### Properties
* **nextLink**: string (ReadOnly): The URL to get the next set of results.
* **value**: [EffectiveNetworkSecurityGroup](#effectivenetworksecuritygroup)[]: A list of effective network security groups.

## EffectiveNetworkSecurityRule
### Properties
* **access**: 'Allow' | 'Deny' | string: Whether network traffic is allowed or denied. Possible values are: 'Allow' and 'Deny'.
* **destinationAddressPrefix**: string: The destination address prefix.
* **destinationAddressPrefixes**: string[]: The destination address prefixes. Expected values include CIDR IP ranges, Default Tags (VirtualNetwork, AzureLoadBalancer, Internet), System Tags, and the asterisk (*).
* **destinationPortRange**: string: The destination port or range.
* **destinationPortRanges**: string[]: The destination port ranges. Expected values include a single integer between 0 and 65535, a range using '-' as separator (e.g. 100-400), or an asterisk (*)
* **direction**: 'Inbound' | 'Outbound' | string: The direction of the rule. Possible values are: 'Inbound and Outbound'.
* **expandedDestinationAddressPrefix**: string[]: Expanded destination address prefix.
* **expandedSourceAddressPrefix**: string[]: The expanded source address prefix.
* **name**: string: The name of the security rule specified by the user (if created by the user).
* **priority**: int: The priority of the rule.
* **protocol**: 'All' | 'Tcp' | 'Udp' | string: The network protocol this rule applies to. Possible values are: 'Tcp', 'Udp', and 'All'.
* **sourceAddressPrefix**: string: The source address prefix.
* **sourceAddressPrefixes**: string[]: The source address prefixes. Expected values include CIDR IP ranges, Default Tags (VirtualNetwork, AzureLoadBalancer, Internet), System Tags, and the asterisk (*).
* **sourcePortRange**: string: The source port or range.
* **sourcePortRanges**: string[]: The source port ranges. Expected values include a single integer between 0 and 65535, a range using '-' as separator (e.g. 100-400), or an asterisk (*)

## EffectiveRoute
### Properties
* **addressPrefix**: string[]: The address prefixes of the effective routes in CIDR notation.
* **name**: string: The name of the user defined route. This is optional.
* **nextHopIpAddress**: string[]: The IP address of the next hop of the effective route.
* **nextHopType**: 'Internet' | 'None' | 'VirtualAppliance' | 'VirtualNetworkGateway' | 'VnetLocal' | string: The type of Azure hop the packet should be sent to. Possible values are: 'VirtualNetworkGateway', 'VnetLocal', 'Internet', 'VirtualAppliance', and 'None'.
* **source**: 'Default' | 'Unknown' | 'User' | 'VirtualNetworkGateway' | string: Who created the route. Possible values are: 'Unknown', 'User', 'VirtualNetworkGateway', and 'Default'.
* **state**: 'Active' | 'Invalid' | string: The value of effective route. Possible values are: 'Active' and 'Invalid'.

## EffectiveRouteListResult
### Properties
* **nextLink**: string (ReadOnly): The URL to get the next set of results.
* **value**: [EffectiveRoute](#effectiveroute)[]: A list of effective routes.

## ExpressRouteCircuitAuthorization
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [AuthorizationPropertiesFormat](#authorizationpropertiesformat)

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

## ExpressRouteCircuitPeeringPropertiesFormat
### Properties
* **azureASN**: int: The Azure ASN.
* **gatewayManagerEtag**: string: The GatewayManager Etag.
* **ipv6PeeringConfig**: [Ipv6ExpressRouteCircuitPeeringConfig](#ipv6expressroutecircuitpeeringconfig): The IPv6 peering configuration.
* **lastModifiedBy**: string: Gets whether the provider or the customer last modified the peering.
* **microsoftPeeringConfig**: [ExpressRouteCircuitPeeringConfig](#expressroutecircuitpeeringconfig): The Microsoft peering configuration.
* **peerASN**: int: The peer ASN.
* **peeringType**: 'AzurePrivatePeering' | 'AzurePublicPeering' | 'MicrosoftPeering' | string: The PeeringType. Possible values are: 'AzurePublicPeering', 'AzurePrivatePeering', and 'MicrosoftPeering'.
* **primaryAzurePort**: string: The primary port.
* **primaryPeerAddressPrefix**: string: The primary address prefix.
* **provisioningState**: string: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **routeFilter**: [RouteFilter](#routefilter): The reference of the RouteFilter resource.
* **secondaryAzurePort**: string: The secondary port.
* **secondaryPeerAddressPrefix**: string: The secondary address prefix.
* **sharedKey**: string: The shared key.
* **state**: 'Disabled' | 'Enabled' | string: The state of peering. Possible values are: 'Disabled' and 'Enabled'
* **stats**: [ExpressRouteCircuitStats](#expressroutecircuitstats): Gets peering stats.
* **vlanId**: int: The VLAN ID.

## ExpressRouteCircuitPropertiesFormat
### Properties
* **allowClassicOperations**: bool: Allow classic operations
* **authorizations**: [ExpressRouteCircuitAuthorization](#expressroutecircuitauthorization)[]: The list of authorizations.
* **circuitProvisioningState**: string: The CircuitProvisioningState state of the resource.
* **gatewayManagerEtag**: string: The GatewayManager Etag.
* **peerings**: [ExpressRouteCircuitPeering](#expressroutecircuitpeering)[]: The list of peerings.
* **provisioningState**: string: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **serviceKey**: string: The ServiceKey.
* **serviceProviderNotes**: string: The ServiceProviderNotes.
* **serviceProviderProperties**: [ExpressRouteCircuitServiceProviderProperties](#expressroutecircuitserviceproviderproperties): The ServiceProviderProperties.
* **serviceProviderProvisioningState**: 'Deprovisioning' | 'NotProvisioned' | 'Provisioned' | 'Provisioning' | string: The ServiceProviderProvisioningState state of the resource. Possible values are 'NotProvisioned', 'Provisioning', 'Provisioned', and 'Deprovisioning'.

## ExpressRouteCircuitServiceProviderProperties
### Properties
* **bandwidthInMbps**: int: The BandwidthInMbps.
* **peeringLocation**: string: The peering location.
* **serviceProviderName**: string: The serviceProviderName.

## ExpressRouteCircuitSku
### Properties
* **family**: 'MeteredData' | 'UnlimitedData' | string: The family of the SKU. Possible values are: 'UnlimitedData' and 'MeteredData'.
* **name**: string: The name of the SKU.
* **tier**: 'Premium' | 'Standard' | string: The tier of the SKU. Possible values are 'Standard' and 'Premium'.

## ExpressRouteCircuitStats
### Properties
* **primarybytesIn**: int: Gets BytesIn of the peering.
* **primarybytesOut**: int: Gets BytesOut of the peering.
* **secondarybytesIn**: int: Gets BytesIn of the peering.
* **secondarybytesOut**: int: Gets BytesOut of the peering.

## FlowLogInformation
### Properties
* **properties**: [FlowLogProperties](#flowlogproperties) (Required): Parameters that define the configuration of flow log.
* **targetResourceId**: string (Required): The ID of the resource to configure for flow logging.

## FlowLogProperties
### Properties
* **enabled**: bool (Required): Flag to enable/disable flow logging.
* **retentionPolicy**: [RetentionPolicyParameters](#retentionpolicyparameters): Parameters that define the retention policy for flow log.
* **storageId**: string (Required): ID of the storage account which is used to store the flow log.

## FlowLogStatusParameters
### Properties
* **targetResourceId**: string (Required): The target resource where getting the flow logging status.

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
* **outboundNatRules**: [SubResource](#subresource)[] (ReadOnly): Read only. Outbound rules URIs that use this frontend IP.
* **privateIPAddress**: string: The private IP address of the IP configuration.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: The Private IP allocation method. Possible values are: 'Static' and 'Dynamic'.
* **provisioningState**: string: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicIPAddress**: [PublicIPAddress](#publicipaddress): The reference of the Public IP resource.
* **subnet**: [Subnet](#subnet): The reference of the subnet resource.

## GatewayRoute
### Properties
* **asPath**: string (ReadOnly): The route's AS path sequence
* **localAddress**: string (ReadOnly): The gateway's local address
* **network**: string (ReadOnly): The route's network prefix
* **nextHop**: string (ReadOnly): The route's next hop
* **origin**: string (ReadOnly): The source this route was learned from
* **sourcePeer**: string (ReadOnly): The peer this route was learned from
* **weight**: int (ReadOnly): The route's weight

## GatewayRouteListResult
### Properties
* **value**: [GatewayRoute](#gatewayroute)[]: List of gateway routes

## InboundNatPool
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [InboundNatPoolPropertiesFormat](#inboundnatpoolpropertiesformat): Properties of load balancer inbound nat pool.

## InboundNatPoolPropertiesFormat
### Properties
* **backendPort**: int (Required): The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
* **frontendIPConfiguration**: [SubResource](#subresource): A reference to frontend IP addresses.
* **frontendPortRangeEnd**: int (Required): The last port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65535.
* **frontendPortRangeStart**: int (Required): The first port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65534.
* **protocol**: 'Tcp' | 'Udp' | string (Required): The transport protocol for the endpoint. Possible values are: 'Udp' or 'Tcp'.
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
* **frontendIPConfiguration**: [SubResource](#subresource): A reference to frontend IP addresses.
* **frontendPort**: int: The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
* **idleTimeoutInMinutes**: int: The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
* **protocol**: 'Tcp' | 'Udp' | string: The transport protocol for the endpoint. Possible values are: 'Udp' or 'Tcp'
* **provisioningState**: string: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## IPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [IPConfigurationPropertiesFormat](#ipconfigurationpropertiesformat): Properties of the IP configuration

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
* **ikeEncryption**: 'AES128' | 'AES192' | 'AES256' | 'DES' | 'DES3' | string (Required): The IKE encryption algorithm (IKE phase 2).
* **ikeIntegrity**: 'MD5' | 'SHA1' | 'SHA256' | 'SHA384' | string (Required): The IKE integrity algorithm (IKE phase 2).
* **ipsecEncryption**: 'AES128' | 'AES192' | 'AES256' | 'DES' | 'DES3' | 'GCMAES128' | 'GCMAES192' | 'GCMAES256' | 'None' | string (Required): The IPSec encryption algorithm (IKE phase 1).
* **ipsecIntegrity**: 'GCMAES128' | 'GCMAES192' | 'GCMAES256' | 'MD5' | 'SHA1' | 'SHA256' | string (Required): The IPSec integrity algorithm (IKE phase 1).
* **pfsGroup**: 'ECP256' | 'ECP384' | 'None' | 'PFS1' | 'PFS2' | 'PFS2048' | 'PFS24' | string (Required): The DH Groups used in IKE Phase 2 for new child SA.
* **saDataSizeKilobytes**: int (Required): The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for a site to site VPN tunnel.
* **saLifeTimeSeconds**: int (Required): The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for a site to site VPN tunnel.

## Ipv6ExpressRouteCircuitPeeringConfig
### Properties
* **microsoftPeeringConfig**: [ExpressRouteCircuitPeeringConfig](#expressroutecircuitpeeringconfig): The Microsoft peering configuration.
* **primaryPeerAddressPrefix**: string: The primary address prefix.
* **routeFilter**: [RouteFilter](#routefilter): The reference of the RouteFilter resource.
* **secondaryPeerAddressPrefix**: string: The secondary address prefix.
* **state**: 'Disabled' | 'Enabled' | string: The state of peering. Possible values are: 'Disabled' and 'Enabled'

## IssueContext
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LoadBalancerPropertiesFormat
### Properties
* **backendAddressPools**: [BackendAddressPool](#backendaddresspool)[]: Collection of backend address pools used by a load balancer
* **frontendIPConfigurations**: [FrontendIPConfiguration](#frontendipconfiguration)[]: Object representing the frontend IPs to be used for the load balancer
* **inboundNatPools**: [InboundNatPool](#inboundnatpool)[]: Defines an external port range for inbound NAT to a single backend port on NICs associated with a load balancer. Inbound NAT rules are created automatically for each NIC associated with the Load Balancer using an external port from this range. Defining an Inbound NAT pool on your Load Balancer is mutually exclusive with defining inbound Nat rules. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an inbound NAT pool. They have to reference individual inbound NAT rules.
* **inboundNatRules**: [InboundNatRule](#inboundnatrule)[]: Collection of inbound NAT Rules used by a load balancer. Defining inbound NAT rules on your load balancer is mutually exclusive with defining an inbound NAT pool. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an Inbound NAT pool. They have to reference individual inbound NAT rules.
* **loadBalancingRules**: [LoadBalancingRule](#loadbalancingrule)[]: Object collection representing the load balancing rules Gets the provisioning
* **outboundNatRules**: [OutboundNatRule](#outboundnatrule)[]: The outbound NAT rules.
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
* **backendPort**: int: The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
* **disableOutboundSnat**: bool: Configures SNAT for the VMs in the backend pool to use the publicIP address specified in the frontend of the load balancing rule.
* **enableFloatingIP**: bool: Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
* **frontendIPConfiguration**: [SubResource](#subresource): A reference to frontend IP addresses.
* **frontendPort**: int (Required): The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 1 and 65534.
* **idleTimeoutInMinutes**: int: The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
* **loadDistribution**: 'Default' | 'SourceIP' | 'SourceIPProtocol' | string: The load distribution policy for this rule. Possible values are 'Default', 'SourceIP', and 'SourceIPProtocol'.
* **probe**: [SubResource](#subresource): The reference of the load balancer probe used by the load balancing rule.
* **protocol**: 'Tcp' | 'Udp' | string (Required): The transport protocol for the external endpoint. Possible values are 'Udp' or 'Tcp'
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

## NetworkInterface
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat): Properties of the network interface.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## NetworkInterfaceAssociation
### Properties
* **id**: string (ReadOnly): Network interface ID.
* **securityRules**: [SecurityRule](#securityrule)[]: Collection of custom security rules.

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
* **loadBalancerBackendAddressPools**: [BackendAddressPool](#backendaddresspool)[]: The reference of LoadBalancerBackendAddressPool resource.
* **loadBalancerInboundNatRules**: [InboundNatRule](#inboundnatrule)[]: A list of references of LoadBalancerInboundNatRules.
* **primary**: bool: Gets whether this is a primary customer address on the network interface.
* **privateIPAddress**: string: Private IP address of the IP configuration.
* **privateIPAddressVersion**: 'IPv4' | 'IPv6' | string: Available from Api-Version 2016-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: Defines how a private IP address is assigned. Possible values are: 'Static' and 'Dynamic'.
* **provisioningState**: string: The provisioning state of the network interface IP configuration. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicIPAddress**: [PublicIPAddress](#publicipaddress): Public IP address bound to the IP configuration.
* **subnet**: [Subnet](#subnet): Subnet bound to the IP configuration.

## NetworkInterfacePropertiesFormat
### Properties
* **dnsSettings**: [NetworkInterfaceDnsSettings](#networkinterfacednssettings): The DNS settings in network interface.
* **enableAcceleratedNetworking**: bool: If the network interface is accelerated networking enabled.
* **enableIPForwarding**: bool: Indicates whether IP forwarding is enabled on this network interface.
* **ipConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[]: A list of IPConfigurations of the network interface.
* **macAddress**: string: The MAC address of the network interface.
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup): The reference of the NetworkSecurityGroup resource.
* **primary**: bool: Gets whether this is a primary network interface on a virtual machine.
* **provisioningState**: string: The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string: The resource GUID property of the network interface resource.
* **virtualMachine**: [SubResource](#subresource): The reference of a virtual machine.

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

## NextHopParameters
### Properties
* **destinationIPAddress**: string (Required): The destination IP address.
* **sourceIPAddress**: string (Required): The source IP address.
* **targetNicResourceId**: string: The NIC ID. (If VM has multiple NICs and IP forwarding is enabled on any of the nics, then this parameter must be specified. Otherwise optional).
* **targetResourceId**: string (Required): The resource identifier of the target resource against which the action is to be performed.

## NextHopResult
### Properties
* **nextHopIpAddress**: string: Next hop IP Address
* **nextHopType**: 'HyperNetGateway' | 'Internet' | 'None' | 'VirtualAppliance' | 'VirtualNetworkGateway' | 'VnetLocal' | string: Next hop type.
* **routeTableId**: string: The resource identifier for the route table associated with the route being returned. If the route being returned does not correspond to any user created routes then this field will be the string 'System Route'.

## OutboundNatRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [OutboundNatRulePropertiesFormat](#outboundnatrulepropertiesformat): Properties of load balancer outbound nat rule.

## OutboundNatRulePropertiesFormat
### Properties
* **allocatedOutboundPorts**: int: The number of outbound ports to be used for NAT.
* **backendAddressPool**: [SubResource](#subresource) (Required): A reference to a pool of DIPs. Outbound traffic is randomly load balanced across IPs in the backend IPs.
* **frontendIPConfigurations**: [SubResource](#subresource)[]: The Frontend IP addresses of the load balancer.
* **provisioningState**: string: Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## PacketCaptureFilter
### Properties
* **localIPAddress**: string: Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5"? for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
* **localPort**: string: Local port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
* **protocol**: 'Any' | 'TCP' | 'UDP' | string: Protocol to be filtered on.
* **remoteIPAddress**: string: Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
* **remotePort**: string: Remote port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.

## PacketCaptureParametersOrPacketCaptureResultProperties
### Properties
* **bytesToCapturePerPacket**: int: Number of bytes captured per packet, the remaining bytes are truncated.
* **filters**: [PacketCaptureFilter](#packetcapturefilter)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the packet capture session.
* **storageLocation**: [PacketCaptureStorageLocation](#packetcapturestoragelocation) (Required): Describes the storage location for a packet capture session.
* **target**: string (Required): The ID of the targeted resource, only VM is currently supported.
* **timeLimitInSeconds**: int: Maximum duration of the capture session in seconds.
* **totalBytesPerSession**: int: Maximum size of the capture output.

## PacketCaptureQueryStatusResult
### Properties
* **captureStartTime**: string: The start time of the packet capture session.
* **id**: string: The ID of the packet capture resource.
* **name**: string: The name of the packet capture resource.
* **packetCaptureError**: ('AgentStopped' | 'CaptureFailed' | 'InternalError' | 'LocalFileFailed' | 'StorageFailed' | string)[]: List of errors of packet capture session.
* **packetCaptureStatus**: 'Error' | 'NotStarted' | 'Running' | 'Stopped' | 'Unknown' | string: The status of the packet capture session.
* **stopReason**: string: The reason the current packet capture session was stopped.

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
* **protocol**: 'Http' | 'Tcp' | string (Required): The protocol of the end point. Possible values are: 'Http' or 'Tcp'. If 'Tcp' is specified, a received ACK is required for the probe to be successful. If 'Http' is specified, a 200 OK response from the specifies URI is required for the probe to be successful.
* **provisioningState**: string: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **requestPath**: string: The URI used for requesting health status from the VM. Path is required if a protocol is set to http. Otherwise, it is not allowed. There is no default value.

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
* **dnsSettings**: [PublicIPAddressDnsSettings](#publicipaddressdnssettings): The FQDN of the DNS record associated with the public IP address.
* **idleTimeoutInMinutes**: int: The idle timeout of the public IP address.
* **ipAddress**: string: The IP address associated with the public IP address resource.
* **ipConfiguration**: [IPConfiguration](#ipconfiguration) (ReadOnly): The IP configuration associated with the public IP address.
* **provisioningState**: string: The provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicIPAddressVersion**: 'IPv4' | 'IPv6' | string: The public IP address version. Possible values are: 'IPv4' and 'IPv6'.
* **publicIPAllocationMethod**: 'Dynamic' | 'Static' | string: The public IP allocation method. Possible values are: 'Static' and 'Dynamic'.
* **resourceGuid**: string: The resource GUID property of the public IP resource.

## PublicIPAddressSku
### Properties
* **name**: 'Basic' | 'Standard' | string: Name of a public IP address SKU.

## QueryTroubleshootingParameters
### Properties
* **targetResourceId**: string (Required): The target resource ID to query the troubleshooting result.

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

## RetentionPolicyParameters
### Properties
* **days**: int: Number of days to retain flow log records.
* **enabled**: bool: Flag to enable/disable retention.

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
* **tags**: [RouteFilterRuleTags](#routefilterruletags): Resource tags.

## RouteFilterRulePropertiesFormat
### Properties
* **access**: 'Allow' | 'Deny' | string (Required): The access type of the rule. Valid values are: 'Allow', 'Deny'
* **communities**: string[] (Required): The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020']
* **provisioningState**: string (ReadOnly): The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', 'Succeeded' and 'Failed'.
* **routeFilterRuleType**: 'Community' | string (Required): The rule type of the rule. Valid value is: 'Community'

## RouteFilterRuleTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RouteFilterRuleTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **provisioningState**: string: The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **routes**: [Route](#route)[]: Collection of routes contained within a route table.
* **subnets**: [Subnet](#subnet)[] (ReadOnly): A collection of references to subnets.

## SecurityGroupNetworkInterface
### Properties
* **id**: string: ID of the network interface.
* **securityRuleAssociations**: [SecurityRuleAssociations](#securityruleassociations): All security rules associated with the network interface.

## SecurityGroupViewParameters
### Properties
* **targetResourceId**: string (Required): ID of the target VM.

## SecurityGroupViewResult
### Properties
* **networkInterfaces**: [SecurityGroupNetworkInterface](#securitygroupnetworkinterface)[]: List of network interfaces on the specified VM.

## SecurityRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [SecurityRulePropertiesFormat](#securityrulepropertiesformat): Properties of the security rule

## SecurityRuleAssociations
### Properties
* **defaultSecurityRules**: [SecurityRule](#securityrule)[]: Collection of default security rules of the network security group.
* **effectiveSecurityRules**: [EffectiveNetworkSecurityRule](#effectivenetworksecurityrule)[]: Collection of effective security rules.
* **networkInterfaceAssociation**: [NetworkInterfaceAssociation](#networkinterfaceassociation): Network interface and its custom security rules.
* **subnetAssociation**: [SubnetAssociation](#subnetassociation): Network interface and its custom security rules.

## SecurityRulePropertiesFormat
### Properties
* **access**: 'Allow' | 'Deny' | string (Required): The network traffic is allowed or denied. Possible values are: 'Allow' and 'Deny'.
* **description**: string: A description for this rule. Restricted to 140 chars.
* **destinationAddressPrefix**: string: The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
* **destinationAddressPrefixes**: string[]: The destination address prefixes. CIDR or destination IP ranges.
* **destinationPortRange**: string: The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
* **destinationPortRanges**: string[]: The destination port ranges.
* **direction**: 'Inbound' | 'Outbound' | string (Required): The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic. Possible values are: 'Inbound' and 'Outbound'.
* **priority**: int: The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
* **protocol**: '*' | 'Tcp' | 'Udp' | string (Required): Network protocol this rule applies to. Possible values are 'Tcp', 'Udp', and '*'.
* **provisioningState**: string: The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **sourceAddressPrefix**: string: The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
* **sourceAddressPrefixes**: string[]: The CIDR or source IP ranges.
* **sourcePortRange**: string: The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
* **sourcePortRanges**: string[]: The source port ranges.

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

## SubnetAssociation
### Properties
* **id**: string (ReadOnly): Subnet ID.
* **securityRules**: [SecurityRule](#securityrule)[]: Collection of custom security rules.

## SubnetPropertiesFormat
### Properties
* **addressPrefix**: string: The address prefix for the subnet.
* **ipConfigurations**: [IPConfiguration](#ipconfiguration)[] (ReadOnly): Gets an array of references to the network interface IP configurations using subnet.
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup): The reference of the NetworkSecurityGroup resource.
* **provisioningState**: string: The provisioning state of the resource.
* **resourceNavigationLinks**: [ResourceNavigationLink](#resourcenavigationlink)[]: Gets an array of references to the external resources using subnet.
* **routeTable**: [RouteTable](#routetable): The reference of the RouteTable resource.
* **serviceEndpoints**: [ServiceEndpointPropertiesFormat](#serviceendpointpropertiesformat)[]: An array of service endpoints.

## SubResource
### Properties
* **id**: string: Resource ID.

## Topology
### Properties
* **createdDateTime**: string (ReadOnly): The datetime when the topology was initially created for the resource group.
* **id**: string (ReadOnly): GUID representing the operation id.
* **lastModified**: string (ReadOnly): The datetime when the topology was last modified.
* **resources**: [TopologyResource](#topologyresource)[]

## TopologyAssociation
### Properties
* **associationType**: 'Associated' | 'Contains' | string: The association type of the child resource to the parent resource.
* **name**: string: The name of the resource that is associated with the parent resource.
* **resourceId**: string: The ID of the resource that is associated with the parent resource.

## TopologyParameters
### Properties
* **targetResourceGroupName**: string (Required): The name of the target resource group to perform topology on.

## TopologyResource
### Properties
* **associations**: [TopologyAssociation](#topologyassociation)[]: Holds the associations the resource has with other resources in the resource group.
* **id**: string: ID of the resource.
* **location**: string: Resource location.
* **name**: string: Name of the resource.

## TroubleshootingDetails
### Properties
* **detail**: string: Details on troubleshooting results.
* **id**: string: The id of the get troubleshoot operation.
* **reasonType**: string: Reason type of failure.
* **recommendedActions**: [TroubleshootingRecommendedActions](#troubleshootingrecommendedactions)[]: List of recommended actions.
* **summary**: string: A summary of troubleshooting.

## TroubleshootingParameters
### Properties
* **properties**: [TroubleshootingProperties](#troubleshootingproperties) (Required): Storage location provided for troubleshoot.
* **targetResourceId**: string (Required): The target resource to troubleshoot.

## TroubleshootingProperties
### Properties
* **storageId**: string (Required): The ID for the storage account to save the troubleshoot result.
* **storagePath**: string (Required): The path to the blob to save the troubleshoot result in.

## TroubleshootingRecommendedActions
### Properties
* **actionId**: string: ID of the recommended action.
* **actionText**: string: Description of recommended actions.
* **actionUri**: string: The uri linking to a documentation for the recommended troubleshooting actions.
* **actionUriText**: string: The information from the URI for the recommended troubleshooting actions.

## TroubleshootingResult
### Properties
* **code**: string: The result code of the troubleshooting.
* **endTime**: string: The end time of the troubleshooting.
* **results**: [TroubleshootingDetails](#troubleshootingdetails)[]: Information from troubleshooting.
* **startTime**: string: The start time of the troubleshooting.

## TunnelConnectionHealth
### Properties
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' | string (ReadOnly): Virtual network Gateway connection status
* **egressBytesTransferred**: int (ReadOnly): The Egress Bytes Transferred in this connection
* **ingressBytesTransferred**: int (ReadOnly): The Ingress Bytes Transferred in this connection
* **lastConnectionEstablishedUtcTime**: string (ReadOnly): The time at which connection was established in Utc format.
* **tunnel**: string (ReadOnly): Tunnel name.

## VerificationIPFlowParameters
### Properties
* **direction**: 'Inbound' | 'Outbound' | string (Required): The direction of the packet represented as a 5-tuple.
* **localIPAddress**: string (Required): The local IP address. Acceptable values are valid IPv4 addresses.
* **localPort**: string (Required): The local port. Acceptable values are a single integer in the range (0-65535). Support for * for the source port, which depends on the direction.
* **protocol**: 'TCP' | 'UDP' | string (Required): Protocol to be verified on.
* **remoteIPAddress**: string (Required): The remote IP address. Acceptable values are valid IPv4 addresses.
* **remotePort**: string (Required): The remote port. Acceptable values are a single integer in the range (0-65535). Support for * for the source port, which depends on the direction.
* **targetNicResourceId**: string: The NIC ID. (If VM has multiple NICs and IP forwarding is enabled on any of them, then this parameter must be specified. Otherwise optional).
* **targetResourceId**: string (Required): The ID of the target resource to perform next-hop on.

## VerificationIPFlowResult
### Properties
* **access**: 'Allow' | 'Deny' | string: Indicates whether the traffic is allowed or denied.
* **ruleName**: string: Name of the rule. If input is not matched against any security rule, it is not displayed.

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
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' | string (ReadOnly): Virtual network Gateway connection status. Possible values are 'Unknown', 'Connecting', 'Connected' and 'NotConnected'.
* **connectionType**: 'ExpressRoute' | 'IPsec' | 'VPNClient' | 'Vnet2Vnet' | string (Required): Gateway connection type. Possible values are: 'IPsec','Vnet2Vnet','ExpressRoute', and 'VPNClient.
* **egressBytesTransferred**: int (ReadOnly): The egress bytes transferred in this connection.
* **enableBgp**: bool: EnableBgp flag
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
* **name**: 'Basic' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | 'VpnGw1' | 'VpnGw2' | 'VpnGw3' | string: Gateway SKU name.
* **tier**: 'Basic' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | 'VpnGw1' | 'VpnGw2' | 'VpnGw3' | string: Gateway SKU tier.

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
* **remoteVirtualNetwork**: [SubResource](#subresource): The reference of the remote virtual network.
* **useRemoteGateways**: bool: If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.

## VirtualNetworkPropertiesFormat
### Properties
* **addressSpace**: [AddressSpace](#addressspace): The AddressSpace that contains an array of IP address ranges that can be used by subnets.
* **dhcpOptions**: [DhcpOptions](#dhcpoptions): The dhcpOptions that contains an array of DNS servers available to VMs deployed in the virtual network.
* **provisioningState**: string: The provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string: The resourceGuid property of the Virtual Network resource.
* **subnets**: [Subnet](#subnet)[]: A list of subnets in a Virtual Network.
* **virtualNetworkPeerings**: [VirtualNetworkPeering](#virtualnetworkpeering)[]: A list of peerings in a Virtual Network.

## VpnClientConfiguration
### Properties
* **radiusServerAddress**: string: The radius server address property of the VirtualNetworkGateway resource for vpn client connection.
* **radiusServerSecret**: string: The radius secret property of the VirtualNetworkGateway resource for vpn client connection.
* **vpnClientAddressPool**: [AddressSpace](#addressspace): The reference of the address space resource which represents Address space for P2S VpnClient.
* **vpnClientProtocols**: ('IkeV2' | 'SSTP' | string)[]: VpnClientProtocols for Virtual network gateway.
* **vpnClientRevokedCertificates**: [VpnClientRevokedCertificate](#vpnclientrevokedcertificate)[]: VpnClientRevokedCertificate for Virtual network gateway.
* **vpnClientRootCertificates**: [VpnClientRootCertificate](#vpnclientrootcertificate)[]: VpnClientRootCertificate for virtual network gateway.

## VpnClientParameters
### Properties
* **authenticationMethod**: 'EAPMSCHAPv2' | 'EAPTLS' | string: VPN client Authentication Method. Possible values are: 'EAPTLS' and 'EAPMSCHAPv2'.
* **clientRootCertificates**: string[]: A list of client root certificates public certificate data encoded as Base-64 strings. Optional parameter for external radius based authentication with EAPTLS.
* **processorArchitecture**: 'Amd64' | 'X86' | string: VPN client Processor Architecture. Possible values are: 'AMD64' and 'X86'.
* **radiusServerAuthCertificate**: string: The public certificate data for the radius server authentication certificate as a Base-64 encoded string. Required only if external radius authentication has been configured with EAPTLS authentication.

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

