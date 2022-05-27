# Microsoft.Network @ 2021-03-01

## Resource Microsoft.Network/applicationGatewayAvailableSslOptions@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationGatewayAvailableSslOptionsPropertiesFormat](#applicationgatewayavailablessloptionspropertiesformat) (ReadOnly): Properties of ApplicationGatewayAvailableSslOptions.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Network/applicationGatewayAvailableSslOptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/applicationGatewayAvailableSslOptions/predefinedPolicies@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationGatewaySslPredefinedPolicyPropertiesFormat](#applicationgatewaysslpredefinedpolicypropertiesformat) (ReadOnly): Properties of ApplicationGatewaySslPredefinedPolicy.
* **type**: 'Microsoft.Network/applicationGatewayAvailableSslOptions/predefinedPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/applicationGateways@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationGatewayPropertiesFormat](#applicationgatewaypropertiesformat): Properties of the application gateway.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/applicationGateways' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: A list of availability zones denoting where the resource needs to come from.

## Resource Microsoft.Network/applicationGateways/privateEndpointConnections@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationGatewayPrivateEndpointConnectionProperties](#applicationgatewayprivateendpointconnectionproperties): Properties of Private Link Resource of an application gateway.
* **type**: 'Microsoft.Network/applicationGateways/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebApplicationFirewallPolicyPropertiesFormat](#webapplicationfirewallpolicypropertiesformat): Defines web application firewall policy properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/applicationSecurityGroups@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationSecurityGroupPropertiesFormat](#applicationsecuritygrouppropertiesformat): Application security group properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/applicationSecurityGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/azureFirewalls@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AzureFirewallPropertiesFormat](#azurefirewallpropertiesformat): Properties of the Azure Firewall.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/azureFirewalls' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: A list of availability zones denoting where the resource needs to come from.

## Resource Microsoft.Network/bastionHosts@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BastionHostPropertiesFormat](#bastionhostpropertiesformat): Properties of the Bastion Host.
* **sku**: [Sku](#sku): The sku of this Bastion Host.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/bastionHosts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/connections@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkGatewayConnectionPropertiesFormat](#virtualnetworkgatewayconnectionpropertiesformat) (Required): VirtualNetworkGatewayConnection properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/connections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/customIpPrefixes@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): ExtendedLocation complex type.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomIpPrefixPropertiesFormat](#customipprefixpropertiesformat): Custom IP prefix properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/customIpPrefixes' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: A list of availability zones denoting the IP allocated for the resource needs to come from.

## Resource Microsoft.Network/ddosCustomPolicies@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DdosCustomPolicyPropertiesFormat](#ddoscustompolicypropertiesformat): DDoS custom policy properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/ddosCustomPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/ddosProtectionPlans@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DdosProtectionPlanPropertiesFormat](#ddosprotectionplanpropertiesformat): DDoS protection plan properties.
* **tags**: [DdosProtectionPlanTags](#ddosprotectionplantags): Resource tags.
* **type**: 'Microsoft.Network/ddosProtectionPlans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dscpConfigurations@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DscpConfigurationPropertiesFormat](#dscpconfigurationpropertiesformat): Differentiated Services Code Point configuration properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/dscpConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteCircuitPropertiesFormat](#expressroutecircuitpropertiesformat): Properties of ExpressRouteCircuit.
* **sku**: [ExpressRouteCircuitSku](#expressroutecircuitsku): Contains SKU in an ExpressRouteCircuit.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/expressRouteCircuits' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits/authorizations@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationPropertiesFormat](#authorizationpropertiesformat): Properties of ExpressRouteCircuitAuthorization.
* **type**: 'Microsoft.Network/expressRouteCircuits/authorizations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits/peerings@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteCircuitPeeringPropertiesFormat](#expressroutecircuitpeeringpropertiesformat): Properties of the express route circuit peering.
* **type**: 'Microsoft.Network/expressRouteCircuits/peerings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits/peerings/connections@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteCircuitConnectionPropertiesFormat](#expressroutecircuitconnectionpropertiesformat): Properties of the express route circuit connection.
* **type**: 'Microsoft.Network/expressRouteCircuits/peerings/connections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits/peerings/peerConnections@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PeerExpressRouteCircuitConnectionPropertiesFormat](#peerexpressroutecircuitconnectionpropertiesformat) (ReadOnly): Properties of the peer express route circuit connection.
* **type**: 'Microsoft.Network/expressRouteCircuits/peerings/peerConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCrossConnections@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteCrossConnectionProperties](#expressroutecrossconnectionproperties): Properties of ExpressRouteCrossConnection.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/expressRouteCrossConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCrossConnections/peerings@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteCrossConnectionPeeringProperties](#expressroutecrossconnectionpeeringproperties): Properties of express route cross connection peering.
* **type**: 'Microsoft.Network/expressRouteCrossConnections/peerings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteGateways@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteGatewayProperties](#expressroutegatewayproperties): ExpressRoute gateway resource properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/expressRouteGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteGateways/expressRouteConnections@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteConnectionProperties](#expressrouteconnectionproperties): Properties of the ExpressRouteConnection subresource.
* **type**: 'Microsoft.Network/expressRouteGateways/expressRouteConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/ExpressRoutePorts@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRoutePortPropertiesFormat](#expressrouteportpropertiesformat): Properties specific to ExpressRoutePort resources.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/ExpressRoutePorts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/ExpressRoutePorts/links@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteLinkPropertiesFormat](#expressroutelinkpropertiesformat) (ReadOnly): Properties specific to ExpressRouteLink resources.
* **type**: 'Microsoft.Network/ExpressRoutePorts/links' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/ExpressRoutePortsLocations@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRoutePortsLocationPropertiesFormat](#expressrouteportslocationpropertiesformat) (ReadOnly): Properties specific to ExpressRoutePorts peering location resources.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Network/ExpressRoutePortsLocations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/firewallPolicies@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallPolicyPropertiesFormat](#firewallpolicypropertiesformat): Firewall Policy definition.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/firewallPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/firewallPolicies/ruleCollectionGroups@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallPolicyRuleCollectionGroupProperties](#firewallpolicyrulecollectiongroupproperties): Properties of the rule collection group.
* **type**: 'Microsoft.Network/firewallPolicies/ruleCollectionGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/IpAllocations@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IpAllocationPropertiesFormat](#ipallocationpropertiesformat): Properties of the IpAllocation.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/IpAllocations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/ipGroups@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IpGroupPropertiesFormat](#ipgrouppropertiesformat): The IpGroups property information.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/ipGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/loadBalancers@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): ExtendedLocation complex type.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LoadBalancerPropertiesFormat](#loadbalancerpropertiesformat): Properties of the load balancer.
* **sku**: [LoadBalancerSku](#loadbalancersku): SKU of a load balancer.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/loadBalancers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/loadBalancers/backendAddressPools@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackendAddressPoolPropertiesFormat](#backendaddresspoolpropertiesformat): Properties of the backend address pool.
* **type**: 'Microsoft.Network/loadBalancers/backendAddressPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/loadBalancers/frontendIPConfigurations@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FrontendIPConfigurationPropertiesFormat](#frontendipconfigurationpropertiesformat) (ReadOnly): Properties of Frontend IP Configuration of the load balancer.
* **type**: 'Microsoft.Network/loadBalancers/frontendIPConfigurations' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[] (ReadOnly): A list of availability zones denoting the IP allocated for the resource needs to come from.

## Resource Microsoft.Network/loadBalancers/inboundNatRules@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InboundNatRulePropertiesFormat](#inboundnatrulepropertiesformat): Properties of the inbound NAT rule.
* **type**: 'Microsoft.Network/loadBalancers/inboundNatRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/loadBalancers/loadBalancingRules@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LoadBalancingRulePropertiesFormat](#loadbalancingrulepropertiesformat) (ReadOnly): Properties of the load balancer.
* **type**: 'Microsoft.Network/loadBalancers/loadBalancingRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/loadBalancers/outboundRules@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OutboundRulePropertiesFormat](#outboundrulepropertiesformat) (ReadOnly): Outbound rule of the load balancer.
* **type**: 'Microsoft.Network/loadBalancers/outboundRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/loadBalancers/probes@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProbePropertiesFormat](#probepropertiesformat) (ReadOnly): Load balancer probe resource.
* **type**: 'Microsoft.Network/loadBalancers/probes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/localNetworkGateways@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LocalNetworkGatewayPropertiesFormat](#localnetworkgatewaypropertiesformat) (Required): LocalNetworkGateway properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/localNetworkGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/natGateways@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NatGatewayPropertiesFormat](#natgatewaypropertiesformat): Nat Gateway properties.
* **sku**: [NatGatewaySku](#natgatewaysku): SKU of nat gateway.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/natGateways' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: A list of availability zones denoting the zone in which Nat Gateway should be deployed.

## Resource Microsoft.Network/networkInterfaces@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): ExtendedLocation complex type.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat): NetworkInterface properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkInterfaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkInterfaces/ipConfigurations@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkInterfaceIPConfigurationPropertiesFormat](#networkinterfaceipconfigurationpropertiesformat) (ReadOnly): Properties of IP configuration.
* **type**: 'Microsoft.Network/networkInterfaces/ipConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkInterfaces/tapConfigurations@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkInterfaceTapConfigurationPropertiesFormat](#networkinterfacetapconfigurationpropertiesformat): Properties of Virtual Network Tap configuration.
* **type**: 'Microsoft.Network/networkInterfaces/tapConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkProfiles@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkProfilePropertiesFormat](#networkprofilepropertiesformat): Network profile properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityGroups@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkSecurityGroupPropertiesFormat](#networksecuritygrouppropertiesformat): Network Security Group resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkSecurityGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityGroups/defaultSecurityRules@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityRulePropertiesFormat](#securityrulepropertiesformat) (ReadOnly): Security rule resource.
* **type**: 'Microsoft.Network/networkSecurityGroups/defaultSecurityRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityGroups/securityRules@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityRulePropertiesFormat](#securityrulepropertiesformat): Security rule resource.
* **type**: 'Microsoft.Network/networkSecurityGroups/securityRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkVirtualAppliances@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkVirtualAppliancePropertiesFormat](#networkvirtualappliancepropertiesformat): Network Virtual Appliance definition.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkVirtualAppliances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkVirtualAppliances/inboundSecurityRules@2021-03-01 (WriteOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InboundSecurityRuleProperties](#inboundsecurityruleproperties): Properties of the Inbound Security Rules resource.
* **type**: 'Microsoft.Network/networkVirtualAppliances/inboundSecurityRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkVirtualAppliances/virtualApplianceSites@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualApplianceSiteProperties](#virtualappliancesiteproperties): Properties of the rule group.
* **type**: 'Microsoft.Network/networkVirtualAppliances/virtualApplianceSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkVirtualApplianceSkus@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkVirtualApplianceSkuPropertiesFormat](#networkvirtualapplianceskupropertiesformat) (ReadOnly): Properties specific to NetworkVirtualApplianceSkus.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Network/networkVirtualApplianceSkus' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkWatchers@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkWatcherPropertiesFormat](#networkwatcherpropertiesformat): The network watcher properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkWatchers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkWatchers/connectionMonitors@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Connection monitor location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionMonitorParameters](#connectionmonitorparameters) (Required): Parameters that define the operation to create a connection monitor.
* **tags**: [ConnectionMonitorTags](#connectionmonitortags): Connection monitor tags.
* **type**: 'Microsoft.Network/networkWatchers/connectionMonitors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkWatchers/flowLogs@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FlowLogPropertiesFormat](#flowlogpropertiesformat): Parameters that define the configuration of flow log.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkWatchers/flowLogs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkWatchers/packetCaptures@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PacketCaptureParameters](#packetcaptureparameters) (Required): Parameters that define the create packet capture operation.
* **type**: 'Microsoft.Network/networkWatchers/packetCaptures' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/p2svpnGateways@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [P2SVpnGatewayProperties](#p2svpngatewayproperties): Parameters for P2SVpnGateway.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/p2svpnGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/privateEndpoints@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): ExtendedLocation complex type.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointProperties](#privateendpointproperties): Properties of the private endpoint.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/privateEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/privateEndpoints/privateDnsZoneGroups@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateDnsZoneGroupPropertiesFormat](#privatednszonegrouppropertiesformat): Properties of the private dns zone group.
* **type**: 'Microsoft.Network/privateEndpoints/privateDnsZoneGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/privateLinkServices@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): ExtendedLocation complex type.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkServiceProperties](#privatelinkserviceproperties): Properties of the private link service.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/privateLinkServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/privateLinkServices/privateEndpointConnections@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnectProperties.
* **type**: 'Microsoft.Network/privateLinkServices/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/publicIPAddresses@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): ExtendedLocation complex type.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat): Public IP address properties.
* **sku**: [PublicIPAddressSku](#publicipaddresssku): SKU of a public IP address.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/publicIPAddresses' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: A list of availability zones denoting the IP allocated for the resource needs to come from.

## Resource Microsoft.Network/publicIPPrefixes@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): ExtendedLocation complex type.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublicIPPrefixPropertiesFormat](#publicipprefixpropertiesformat): Public IP prefix properties.
* **sku**: [PublicIPPrefixSku](#publicipprefixsku): SKU of a public IP prefix.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/publicIPPrefixes' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: A list of availability zones denoting the IP allocated for the resource needs to come from.

## Resource Microsoft.Network/routeFilters@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RouteFilterPropertiesFormat](#routefilterpropertiesformat): Route Filter Resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/routeFilters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/routeFilters/routeFilterRules@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RouteFilterRulePropertiesFormat](#routefilterrulepropertiesformat): Route Filter Rule Resource.
* **type**: 'Microsoft.Network/routeFilters/routeFilterRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/routeTables@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RouteTablePropertiesFormat](#routetablepropertiesformat): Route Table resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/routeTables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/routeTables/routes@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoutePropertiesFormat](#routepropertiesformat): Route resource.
* **type**: 'Microsoft.Network/routeTables/routes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/securityPartnerProviders@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityPartnerProviderPropertiesFormat](#securitypartnerproviderpropertiesformat): Properties of the Security Partner Provider.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/securityPartnerProviders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/serviceEndpointPolicies@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of service endpoint policy. This is metadata used for the Azure portal experience.
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceEndpointPolicyPropertiesFormat](#serviceendpointpolicypropertiesformat): Service Endpoint Policy resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/serviceEndpointPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceEndpointPolicyDefinitionPropertiesFormat](#serviceendpointpolicydefinitionpropertiesformat): Service Endpoint policy definition resource.
* **type**: 'Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualHubs@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of service virtual hub. This is metadata used for the Azure portal experience for Route Server.
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualHubProperties](#virtualhubproperties): Parameters for VirtualHub.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/virtualHubs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualHubs/bgpConnections@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BgpConnectionProperties](#bgpconnectionproperties): Properties of the bgp connection.
* **type**: 'Microsoft.Network/virtualHubs/bgpConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualHubs/hubRouteTables@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HubRouteTableProperties](#hubroutetableproperties): Parameters for RouteTable.
* **type**: 'Microsoft.Network/virtualHubs/hubRouteTables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualHubs/hubVirtualNetworkConnections@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HubVirtualNetworkConnectionProperties](#hubvirtualnetworkconnectionproperties): Parameters for HubVirtualNetworkConnection.
* **type**: 'Microsoft.Network/virtualHubs/hubVirtualNetworkConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualHubs/ipConfigurations@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HubIPConfigurationPropertiesFormat](#hubipconfigurationpropertiesformat): Properties of IP configuration.
* **type**: 'Microsoft.Network/virtualHubs/ipConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualHubs/routeTables@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualHubRouteTableV2Properties](#virtualhubroutetablev2properties): Parameters for VirtualHubRouteTableV2.
* **type**: 'Microsoft.Network/virtualHubs/routeTables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworkGateways@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): ExtendedLocation complex type.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkGatewayPropertiesFormat](#virtualnetworkgatewaypropertiesformat) (Required): VirtualNetworkGateway properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/virtualNetworkGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworkGateways/natRules@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkGatewayNatRuleProperties](#virtualnetworkgatewaynatruleproperties): Parameters for VirtualNetworkGatewayNatRule.
* **type**: 'Microsoft.Network/virtualNetworkGateways/natRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworks@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): ExtendedLocation complex type.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkPropertiesFormat](#virtualnetworkpropertiesformat): Properties of the virtual network.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/virtualNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworks/subnets@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SubnetPropertiesFormat](#subnetpropertiesformat): Properties of the subnet.
* **type**: 'Microsoft.Network/virtualNetworks/subnets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworks/virtualNetworkPeerings@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkPeeringPropertiesFormat](#virtualnetworkpeeringpropertiesformat): Properties of the virtual network peering.
* **type**: 'Microsoft.Network/virtualNetworks/virtualNetworkPeerings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworkTaps@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkTapPropertiesFormat](#virtualnetworktappropertiesformat): Virtual Network Tap properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/virtualNetworkTaps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualRouters@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualRouterPropertiesFormat](#virtualrouterpropertiesformat): Virtual Router definition.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/virtualRouters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualRouters/peerings@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualRouterPeeringProperties](#virtualrouterpeeringproperties): Properties of the rule group.
* **type**: 'Microsoft.Network/virtualRouters/peerings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualWans@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualWanProperties](#virtualwanproperties): Parameters for VirtualWAN.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/virtualWans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/vpnGateways@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VpnGatewayProperties](#vpngatewayproperties): Parameters for VpnGateway.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/vpnGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/vpnGateways/natRules@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VpnGatewayNatRuleProperties](#vpngatewaynatruleproperties): Parameters for VpnGatewayNatRule.
* **type**: 'Microsoft.Network/vpnGateways/natRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/vpnGateways/vpnConnections@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VpnConnectionProperties](#vpnconnectionproperties): Parameters for VpnConnection.
* **type**: 'Microsoft.Network/vpnGateways/vpnConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/vpnGateways/vpnConnections/vpnLinkConnections@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VpnSiteLinkConnectionProperties](#vpnsitelinkconnectionproperties) (ReadOnly): Parameters for VpnConnection.
* **type**: 'Microsoft.Network/vpnGateways/vpnConnections/vpnLinkConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/vpnServerConfigurations@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VpnServerConfigurationProperties](#vpnserverconfigurationproperties): Parameters for VpnServerConfiguration.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/vpnServerConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/vpnSites@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VpnSiteProperties](#vpnsiteproperties): Parameters for VpnSite.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/vpnSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/vpnSites/vpnSiteLinks@2021-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VpnSiteLinkProperties](#vpnsitelinkproperties) (ReadOnly): Parameters for VpnSite.
* **type**: 'Microsoft.Network/vpnSites/vpnSiteLinks' (ReadOnly, DeployTimeConstant): The resource type

## ApplicationGatewayAvailableSslOptionsPropertiesFormat
### Properties
* **availableCipherSuites**: 'TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA256' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA256' | 'TLS_DHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_DHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_RSA_WITH_3DES_EDE_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_RSA_WITH_AES_256_CBC_SHA' | 'TLS_RSA_WITH_AES_256_CBC_SHA256' | 'TLS_RSA_WITH_AES_256_GCM_SHA384' | string[] (ReadOnly): List of available Ssl cipher suites.
* **availableProtocols**: 'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | string[] (ReadOnly): List of available Ssl protocols.
* **defaultPolicy**: 'AppGwSslPolicy20150501' | 'AppGwSslPolicy20170401' | 'AppGwSslPolicy20170401S' | string (ReadOnly): Ssl predefined policy name enums.
* **predefinedPolicies**: [SubResource](#subresource)[] (ReadOnly): List of available Ssl predefined policy.

## SubResource
### Properties
* **id**: string: Resource ID.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationGatewaySslPredefinedPolicyPropertiesFormat
### Properties
* **cipherSuites**: 'TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA256' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA256' | 'TLS_DHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_DHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_RSA_WITH_3DES_EDE_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_RSA_WITH_AES_256_CBC_SHA' | 'TLS_RSA_WITH_AES_256_CBC_SHA256' | 'TLS_RSA_WITH_AES_256_GCM_SHA384' | string[] (ReadOnly): Ssl cipher suites to be enabled in the specified order for application gateway.
* **minProtocolVersion**: 'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | string (ReadOnly): Ssl protocol enums.

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

## Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## ApplicationGatewayPropertiesFormat
### Properties
* **authenticationCertificates**: [ApplicationGatewayAuthenticationCertificate](#applicationgatewayauthenticationcertificate)[]: Authentication certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **autoscaleConfiguration**: [ApplicationGatewayAutoscaleConfiguration](#applicationgatewayautoscaleconfiguration): Application Gateway autoscale configuration.
* **backendAddressPools**: [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)[]: Backend address pool of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **backendHttpSettingsCollection**: [ApplicationGatewayBackendHttpSettings](#applicationgatewaybackendhttpsettings)[]: Backend http settings of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **customErrorConfigurations**: [ApplicationGatewayCustomError](#applicationgatewaycustomerror)[]: Custom error configurations of the application gateway resource.
* **enableFips**: bool: Whether FIPS is enabled on the application gateway resource.
* **enableHttp2**: bool: Whether HTTP2 is enabled on the application gateway resource.
* **firewallPolicy**: [SubResource](#subresource): Reference to another subresource.
* **forceFirewallPolicyAssociation**: bool: If true, associates a firewall policy with an application gateway regardless whether the policy differs from the WAF Config.
* **frontendIPConfigurations**: [ApplicationGatewayFrontendIPConfiguration](#applicationgatewayfrontendipconfiguration)[]: Frontend IP addresses of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **frontendPorts**: [ApplicationGatewayFrontendPort](#applicationgatewayfrontendport)[]: Frontend ports of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **gatewayIPConfigurations**: [ApplicationGatewayIPConfiguration](#applicationgatewayipconfiguration)[]: Subnets of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **globalConfiguration**: [ApplicationGatewayGlobalConfiguration](#applicationgatewayglobalconfiguration): Application Gateway global configuration.
* **httpListeners**: [ApplicationGatewayHttpListener](#applicationgatewayhttplistener)[]: Http listeners of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **loadDistributionPolicies**: [ApplicationGatewayLoadDistributionPolicy](#applicationgatewayloaddistributionpolicy)[]: Load distribution policies of the application gateway resource.
* **operationalState**: 'Running' | 'Starting' | 'Stopped' | 'Stopping' | string (ReadOnly): Operational state of the application gateway resource.
* **privateEndpointConnections**: [ApplicationGatewayPrivateEndpointConnection](#applicationgatewayprivateendpointconnection)[] (ReadOnly): Private Endpoint connections on application gateway.
* **privateLinkConfigurations**: [ApplicationGatewayPrivateLinkConfiguration](#applicationgatewayprivatelinkconfiguration)[]: PrivateLink configurations on application gateway.
* **probes**: [ApplicationGatewayProbe](#applicationgatewayprobe)[]: Probes of the application gateway resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **redirectConfigurations**: [ApplicationGatewayRedirectConfiguration](#applicationgatewayredirectconfiguration)[]: Redirect configurations of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **requestRoutingRules**: [ApplicationGatewayRequestRoutingRule](#applicationgatewayrequestroutingrule)[]: Request routing rules of the application gateway resource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the application gateway resource.
* **rewriteRuleSets**: [ApplicationGatewayRewriteRuleSet](#applicationgatewayrewriteruleset)[]: Rewrite rules for the application gateway resource.
* **sku**: [ApplicationGatewaySku](#applicationgatewaysku): SKU of an application gateway.
* **sslCertificates**: [ApplicationGatewaySslCertificate](#applicationgatewaysslcertificate)[]: SSL certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **sslPolicy**: [ApplicationGatewaySslPolicy](#applicationgatewaysslpolicy): Application Gateway Ssl policy.
* **sslProfiles**: [ApplicationGatewaySslProfile](#applicationgatewaysslprofile)[]: SSL profiles of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **trustedClientCertificates**: [ApplicationGatewayTrustedClientCertificate](#applicationgatewaytrustedclientcertificate)[]: Trusted client certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **trustedRootCertificates**: [ApplicationGatewayTrustedRootCertificate](#applicationgatewaytrustedrootcertificate)[]: Trusted Root certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **urlPathMaps**: [ApplicationGatewayUrlPathMap](#applicationgatewayurlpathmap)[]: URL path map of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **webApplicationFirewallConfiguration**: [ApplicationGatewayWebApplicationFirewallConfiguration](#applicationgatewaywebapplicationfirewallconfiguration): Application gateway web application firewall configuration.

## ApplicationGatewayAuthenticationCertificate
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the authentication certificate that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayAuthenticationCertificatePropertiesFormat](#applicationgatewayauthenticationcertificatepropertiesformat): Authentication certificates properties of an application gateway.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayAuthenticationCertificatePropertiesFormat
### Properties
* **data**: string: Certificate public data.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## ApplicationGatewayAutoscaleConfiguration
### Properties
* **maxCapacity**: int: Upper bound on number of Application Gateway capacity.
* **minCapacity**: int (Required): Lower bound on number of Application Gateway capacity.

## ApplicationGatewayBackendAddressPool
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the backend address pool that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayBackendAddressPoolPropertiesFormat](#applicationgatewaybackendaddresspoolpropertiesformat): Properties of Backend Address Pool of an application gateway.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayBackendAddressPoolPropertiesFormat
### Properties
* **backendAddresses**: [ApplicationGatewayBackendAddress](#applicationgatewaybackendaddress)[]: Backend addresses.
* **backendIPConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[] (ReadOnly): Collection of references to IPs defined in network interfaces.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## ApplicationGatewayBackendAddress
### Properties
* **fqdn**: string: Fully qualified domain name (FQDN).
* **ipAddress**: string: IP address.

## NetworkInterfaceIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [NetworkInterfaceIPConfigurationPropertiesFormat](#networkinterfaceipconfigurationpropertiesformat): Properties of IP configuration.
* **type**: string: Resource type.

## NetworkInterfaceIPConfigurationPropertiesFormat
### Properties
* **applicationGatewayBackendAddressPools**: [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)[]: The reference to ApplicationGatewayBackendAddressPool resource.
* **applicationSecurityGroups**: [ApplicationSecurityGroup](#applicationsecuritygroup)[]: Application security groups in which the IP configuration is included.
* **gatewayLoadBalancer**: [SubResource](#subresource): Reference to another subresource.
* **loadBalancerBackendAddressPools**: [BackendAddressPool](#backendaddresspool)[]: The reference to LoadBalancerBackendAddressPool resource.
* **loadBalancerInboundNatRules**: [InboundNatRule](#inboundnatrule)[]: A list of references of LoadBalancerInboundNatRules.
* **primary**: bool: Whether this is a primary customer address on the network interface.
* **privateIPAddress**: string: Private IP address of the IP configuration.
* **privateIPAddressVersion**: 'IPv4' | 'IPv6' | string: IP address version.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: IP address allocation method.
* **privateLinkConnectionProperties**: [NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties](#networkinterfaceipconfigurationprivatelinkconnectionproperties) (ReadOnly): PrivateLinkConnection properties for the network interface.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **publicIPAddress**: [PublicIPAddress](#publicipaddress): Public IP address resource.
* **subnet**: [Subnet](#subnet): Subnet in a virtual network resource.
* **virtualNetworkTaps**: [VirtualNetworkTap](#virtualnetworktap)[]: The reference to Virtual Network Taps.

## ApplicationSecurityGroup
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [ApplicationSecurityGroupPropertiesFormat](#applicationsecuritygrouppropertiesformat): Application security group properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## ApplicationSecurityGroupPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BackendAddressPool
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within the set of backend address pools used by the load balancer. This name can be used to access the resource.
* **properties**: [BackendAddressPoolPropertiesFormat](#backendaddresspoolpropertiesformat): Properties of the backend address pool.
* **type**: string (ReadOnly): Type of the resource.

## BackendAddressPoolPropertiesFormat
### Properties
* **backendIPConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[] (ReadOnly): An array of references to IP addresses defined in network interfaces.
* **loadBalancerBackendAddresses**: [LoadBalancerBackendAddress](#loadbalancerbackendaddress)[]: An array of backend addresses.
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly): An array of references to load balancing rules that use this backend address pool.
* **location**: string: The location of the backend address pool.
* **outboundRule**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.
* **outboundRules**: [SubResource](#subresource)[] (ReadOnly): An array of references to outbound rules that use this backend address pool.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **tunnelInterfaces**: [GatewayLoadBalancerTunnelInterface](#gatewayloadbalancertunnelinterface)[]: An array of gateway load balancer tunnel interfaces.

## LoadBalancerBackendAddress
### Properties
* **name**: string: Name of the backend address.
* **properties**: [LoadBalancerBackendAddressPropertiesFormat](#loadbalancerbackendaddresspropertiesformat): Properties of the load balancer backend addresses.

## LoadBalancerBackendAddressPropertiesFormat
### Properties
* **ipAddress**: string: IP Address belonging to the referenced virtual network.
* **loadBalancerFrontendIPConfiguration**: [SubResource](#subresource): Reference to another subresource.
* **networkInterfaceIPConfiguration**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.
* **subnet**: [SubResource](#subresource): Reference to another subresource.
* **virtualNetwork**: [SubResource](#subresource): Reference to another subresource.

## GatewayLoadBalancerTunnelInterface
### Properties
* **identifier**: int: Identifier of gateway load balancer tunnel interface.
* **port**: int: Port of gateway load balancer tunnel interface.
* **protocol**: 'Native' | 'None' | 'VXLAN' | string: Protocol of gateway load balancer tunnel interface.
* **type**: 'External' | 'Internal' | 'None' | string: Traffic type of gateway load balancer tunnel interface.

## InboundNatRule
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within the set of inbound NAT rules used by the load balancer. This name can be used to access the resource.
* **properties**: [InboundNatRulePropertiesFormat](#inboundnatrulepropertiesformat): Properties of the inbound NAT rule.
* **type**: string (ReadOnly): Type of the resource.

## InboundNatRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource): Reference to another subresource.
* **backendIPConfiguration**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration) (ReadOnly): IPConfiguration in a network interface.
* **backendPort**: int: The port used for the internal endpoint. Acceptable values range from 1 to 65535.
* **enableFloatingIP**: bool: Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
* **enableTcpReset**: bool: Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
* **frontendIPConfiguration**: [SubResource](#subresource): Reference to another subresource.
* **frontendPort**: int: The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
* **frontendPortRangeEnd**: int: The port range end for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeStart. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534.
* **frontendPortRangeStart**: int: The port range start for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeEnd. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534.
* **idleTimeoutInMinutes**: int: The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
* **protocol**: 'All' | 'Tcp' | 'Udp' | string: The transport protocol for the endpoint.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties
### Properties
* **fqdns**: string[] (ReadOnly): List of FQDNs for current private link connection.
* **groupId**: string (ReadOnly): The group ID for current private link connection.
* **requiredMemberName**: string (ReadOnly): The required member name for current private link connection.

## PublicIPAddress
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): ExtendedLocation complex type.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat): Public IP address properties.
* **sku**: [PublicIPAddressSku](#publicipaddresssku): SKU of a public IP address.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.
* **zones**: string[]: A list of availability zones denoting the IP allocated for the resource needs to come from.

## ExtendedLocation
### Properties
* **name**: string: The name of the extended location.
* **type**: 'EdgeZone' | string: The supported ExtendedLocation types. Currently only EdgeZone is supported in Microsoft.Network resources.

## PublicIPAddressPropertiesFormat
### Properties
* **ddosSettings**: [DdosSettings](#ddossettings): Contains the DDoS protection settings of the public IP.
* **deleteOption**: 'Delete' | 'Detach' | string: Specify what happens to the public IP address when the VM using it is deleted
* **dnsSettings**: [PublicIPAddressDnsSettings](#publicipaddressdnssettings): Contains FQDN of the DNS record associated with the public IP address.
* **idleTimeoutInMinutes**: int: The idle timeout of the public IP address.
* **ipAddress**: string: The IP address associated with the public IP address resource.
* **ipConfiguration**: [IPConfiguration](#ipconfiguration) (ReadOnly): IP configuration.
* **ipTags**: [IpTag](#iptag)[]: The list of tags associated with the public IP address.
* **linkedPublicIPAddress**: [PublicIPAddress](#publicipaddress): Public IP address resource.
* **migrationPhase**: 'Abort' | 'Commit' | 'Committed' | 'None' | 'Prepare' | string: Migration phase of Public IP Address.
* **natGateway**: [NatGateway](#natgateway): Nat Gateway resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **publicIPAddressVersion**: 'IPv4' | 'IPv6' | string: IP address version.
* **publicIPAllocationMethod**: 'Dynamic' | 'Static' | string: IP address allocation method.
* **publicIPPrefix**: [SubResource](#subresource): Reference to another subresource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the public IP address resource.
* **servicePublicIPAddress**: [PublicIPAddress](#publicipaddress): Public IP address resource.

## DdosSettings
### Properties
* **ddosCustomPolicy**: [SubResource](#subresource): Reference to another subresource.
* **protectedIP**: bool: Enables DDoS protection on the public IP.
* **protectionCoverage**: 'Basic' | 'Standard' | string: The DDoS protection policy customizability of the public IP. Only standard coverage will have the ability to be customized.

## PublicIPAddressDnsSettings
### Properties
* **domainNameLabel**: string: The domain name label. The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
* **fqdn**: string: The Fully Qualified Domain Name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone.
* **reverseFqdn**: string: The reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.

## IPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [IPConfigurationPropertiesFormat](#ipconfigurationpropertiesformat): Properties of IP configuration.

## IPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string: The private IP address of the IP configuration.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: IP address allocation method.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **publicIPAddress**: [PublicIPAddress](#publicipaddress): Public IP address resource.
* **subnet**: [Subnet](#subnet): Subnet in a virtual network resource.

## Subnet
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [SubnetPropertiesFormat](#subnetpropertiesformat): Properties of the subnet.
* **type**: string: Resource type.

## SubnetPropertiesFormat
### Properties
* **addressPrefix**: string: The address prefix for the subnet.
* **addressPrefixes**: string[]: List of address prefixes for the subnet.
* **applicationGatewayIpConfigurations**: [ApplicationGatewayIPConfiguration](#applicationgatewayipconfiguration)[]: Application gateway IP configurations of virtual network resource.
* **delegations**: [Delegation](#delegation)[]: An array of references to the delegations on the subnet.
* **ipAllocations**: [SubResource](#subresource)[]: Array of IpAllocation which reference this subnet.
* **ipConfigurationProfiles**: [IPConfigurationProfile](#ipconfigurationprofile)[] (ReadOnly): Array of IP configuration profiles which reference this subnet.
* **ipConfigurations**: [IPConfiguration](#ipconfiguration)[] (ReadOnly): An array of references to the network interface IP configurations using subnet.
* **natGateway**: [SubResource](#subresource): Reference to another subresource.
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup): NetworkSecurityGroup resource.
* **privateEndpointNetworkPolicies**: 'Disabled' | 'Enabled' | string: Enable or Disable apply network policies on private end point in the subnet.
* **privateEndpoints**: [PrivateEndpoint](#privateendpoint)[] (ReadOnly): An array of references to private endpoints.
* **privateLinkServiceNetworkPolicies**: 'Disabled' | 'Enabled' | string: Enable or Disable apply network policies on private link service in the subnet.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **purpose**: string (ReadOnly): A read-only string identifying the intention of use for this subnet based on delegations and other user-defined properties.
* **resourceNavigationLinks**: [ResourceNavigationLink](#resourcenavigationlink)[] (ReadOnly): An array of references to the external resources using subnet.
* **routeTable**: [RouteTable](#routetable): Route table resource.
* **serviceAssociationLinks**: [ServiceAssociationLink](#serviceassociationlink)[] (ReadOnly): An array of references to services injecting into this subnet.
* **serviceEndpointPolicies**: [ServiceEndpointPolicy](#serviceendpointpolicy)[]: An array of service endpoint policies.
* **serviceEndpoints**: [ServiceEndpointPropertiesFormat](#serviceendpointpropertiesformat)[]: An array of service endpoints.

## ApplicationGatewayIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the IP configuration that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayIPConfigurationPropertiesFormat](#applicationgatewayipconfigurationpropertiesformat): Properties of IP configuration of an application gateway.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayIPConfigurationPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **subnet**: [SubResource](#subresource): Reference to another subresource.

## Delegation
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a subnet. This name can be used to access the resource.
* **properties**: [ServiceDelegationPropertiesFormat](#servicedelegationpropertiesformat): Properties of a service delegation.
* **type**: string: Resource type.

## ServiceDelegationPropertiesFormat
### Properties
* **actions**: string[] (ReadOnly): The actions permitted to the service upon delegation.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **serviceName**: string: The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers).

## IPConfigurationProfile
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource. This name can be used to access the resource.
* **properties**: [IPConfigurationProfilePropertiesFormat](#ipconfigurationprofilepropertiesformat): IP configuration profile properties.
* **type**: string (ReadOnly): Sub Resource type.

## IPConfigurationProfilePropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **subnet**: [Subnet](#subnet): Subnet in a virtual network resource.

## NetworkSecurityGroup
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [NetworkSecurityGroupPropertiesFormat](#networksecuritygrouppropertiesformat): Network Security Group resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## NetworkSecurityGroupPropertiesFormat
### Properties
* **defaultSecurityRules**: [SecurityRule](#securityrule)[] (ReadOnly): The default security rules of network security group.
* **flowLogs**: [FlowLog](#flowlog)[] (ReadOnly): A collection of references to flow log resources.
* **networkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly): A collection of references to network interfaces.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the network security group resource.
* **securityRules**: [SecurityRule](#securityrule)[]: A collection of security rules of the network security group.
* **subnets**: [Subnet](#subnet)[] (ReadOnly): A collection of references to subnets.

## SecurityRule
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [SecurityRulePropertiesFormat](#securityrulepropertiesformat): Security rule resource.
* **type**: string: The type of the resource.

## SecurityRulePropertiesFormat
### Properties
* **access**: 'Allow' | 'Deny' | string (Required): Whether network traffic is allowed or denied.
* **description**: string: A description for this rule. Restricted to 140 chars.
* **destinationAddressPrefix**: string: The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
* **destinationAddressPrefixes**: string[]: The destination address prefixes. CIDR or destination IP ranges.
* **destinationApplicationSecurityGroups**: [ApplicationSecurityGroup](#applicationsecuritygroup)[]: The application security group specified as destination.
* **destinationPortRange**: string: The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
* **destinationPortRanges**: string[]: The destination port ranges.
* **direction**: 'Inbound' | 'Outbound' | string (Required): The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
* **priority**: int: The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
* **protocol**: '*' | 'Ah' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' | string (Required): Network protocol this rule applies to.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **sourceAddressPrefix**: string: The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
* **sourceAddressPrefixes**: string[]: The CIDR or source IP ranges.
* **sourceApplicationSecurityGroups**: [ApplicationSecurityGroup](#applicationsecuritygroup)[]: The application security group specified as source.
* **sourcePortRange**: string: The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
* **sourcePortRanges**: string[]: The source port ranges.

## FlowLog
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [FlowLogPropertiesFormat](#flowlogpropertiesformat): Parameters that define the configuration of flow log.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## FlowLogPropertiesFormat
### Properties
* **enabled**: bool: Flag to enable/disable flow logging.
* **flowAnalyticsConfiguration**: [TrafficAnalyticsProperties](#trafficanalyticsproperties): Parameters that define the configuration of traffic analytics.
* **format**: [FlowLogFormatParameters](#flowlogformatparameters): Parameters that define the flow log format.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **retentionPolicy**: [RetentionPolicyParameters](#retentionpolicyparameters): Parameters that define the retention policy for flow log.
* **storageId**: string (Required): ID of the storage account which is used to store the flow log.
* **targetResourceGuid**: string (ReadOnly): Guid of network security group to which flow log will be applied.
* **targetResourceId**: string (Required): ID of network security group to which flow log will be applied.

## TrafficAnalyticsProperties
### Properties
* **networkWatcherFlowAnalyticsConfiguration**: [TrafficAnalyticsConfigurationProperties](#trafficanalyticsconfigurationproperties): Parameters that define the configuration of traffic analytics.

## TrafficAnalyticsConfigurationProperties
### Properties
* **enabled**: bool: Flag to enable/disable traffic analytics.
* **trafficAnalyticsInterval**: int: The interval in minutes which would decide how frequently TA service should do flow analytics.
* **workspaceId**: string: The resource guid of the attached workspace.
* **workspaceRegion**: string: The location of the attached workspace.
* **workspaceResourceId**: string: Resource Id of the attached workspace.

## FlowLogFormatParameters
### Properties
* **type**: 'JSON' | string: The file type of flow log.
* **version**: int: The version (revision) of the flow log.

## RetentionPolicyParameters
### Properties
* **days**: int: Number of days to retain flow log records.
* **enabled**: bool: Flag to enable/disable retention.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NetworkInterface
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): ExtendedLocation complex type.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat): NetworkInterface properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## NetworkInterfacePropertiesFormat
### Properties
* **dnsSettings**: [NetworkInterfaceDnsSettings](#networkinterfacednssettings): DNS settings of a network interface.
* **dscpConfiguration**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.
* **enableAcceleratedNetworking**: bool: If the network interface is accelerated networking enabled.
* **enableIPForwarding**: bool: Indicates whether IP forwarding is enabled on this network interface.
* **hostedWorkloads**: string[] (ReadOnly): A list of references to linked BareMetal resources.
* **ipConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[]: A list of IPConfigurations of the network interface.
* **macAddress**: string (ReadOnly): The MAC address of the network interface.
* **migrationPhase**: 'Abort' | 'Commit' | 'Committed' | 'None' | 'Prepare' | string: Migration phase of Network Interface resource.
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup): NetworkSecurityGroup resource.
* **nicType**: 'Elastic' | 'Standard' | string: Type of Network Interface resource.
* **primary**: bool (ReadOnly): Whether this is a primary network interface on a virtual machine.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint) (ReadOnly): Private endpoint resource.
* **privateLinkService**: [PrivateLinkService](#privatelinkservice): Private link service resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the network interface resource.
* **tapConfigurations**: [NetworkInterfaceTapConfiguration](#networkinterfacetapconfiguration)[] (ReadOnly): A list of TapConfigurations of the network interface.
* **virtualMachine**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.
* **workloadType**: string: WorkloadType of the NetworkInterface for BareMetal resources

## NetworkInterfaceDnsSettings
### Properties
* **appliedDnsServers**: string[] (ReadOnly): If the VM that uses this NIC is part of an Availability Set, then this list will have the union of all DNS servers from all NICs that are part of the Availability Set. This property is what is configured on each of those VMs.
* **dnsServers**: string[]: List of DNS servers IP addresses. Use 'AzureProvidedDNS' to switch to azure provided DNS resolution. 'AzureProvidedDNS' value cannot be combined with other IPs, it must be the only value in dnsServers collection.
* **internalDnsNameLabel**: string: Relative DNS name for this NIC used for internal communications between VMs in the same virtual network.
* **internalDomainNameSuffix**: string (ReadOnly): Even if internalDnsNameLabel is not specified, a DNS entry is created for the primary NIC of the VM. This DNS name can be constructed by concatenating the VM name with the value of internalDomainNameSuffix.
* **internalFqdn**: string (ReadOnly): Fully qualified DNS name supporting internal communications between VMs in the same virtual network.

## PrivateEndpoint
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): ExtendedLocation complex type.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [PrivateEndpointProperties](#privateendpointproperties): Properties of the private endpoint.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## PrivateEndpointProperties
### Properties
* **applicationSecurityGroups**: [ApplicationSecurityGroup](#applicationsecuritygroup)[]: Application security groups in which the private endpoint IP configuration is included.
* **customDnsConfigs**: [CustomDnsConfigPropertiesFormat](#customdnsconfigpropertiesformat)[]: An array of custom dns configurations.
* **customNetworkInterfaceName**: string: The custom name of the network interface attached to the private endpoint.
* **ipConfigurations**: [PrivateEndpointIPConfiguration](#privateendpointipconfiguration)[]: A list of IP configurations of the private endpoint. This will be used to map to the First Party Service's endpoints.
* **manualPrivateLinkServiceConnections**: [PrivateLinkServiceConnection](#privatelinkserviceconnection)[]: A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource.
* **networkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly): An array of references to the network interfaces created for this private endpoint.
* **privateLinkServiceConnections**: [PrivateLinkServiceConnection](#privatelinkserviceconnection)[]: A grouping of information about the connection to the remote resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **subnet**: [Subnet](#subnet): Subnet in a virtual network resource.

## CustomDnsConfigPropertiesFormat
### Properties
* **fqdn**: string: Fqdn that resolves to private endpoint ip address.
* **ipAddresses**: string[]: A list of private ip addresses of the private endpoint.

## PrivateEndpointIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **name**: string: The name of the resource that is unique within a resource group.
* **properties**: [PrivateEndpointIPConfigurationProperties](#privateendpointipconfigurationproperties): Properties of an IP Configuration of the private endpoint.
* **type**: string (ReadOnly): The resource type.

## PrivateEndpointIPConfigurationProperties
### Properties
* **groupId**: string: The ID of a group obtained from the remote resource that this private endpoint should connect to.
* **memberName**: string: The member name of a group obtained from the remote resource that this private endpoint should connect to.
* **privateIPAddress**: string: A private ip address obtained from the private endpoint's subnet.

## PrivateLinkServiceConnection
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [PrivateLinkServiceConnectionProperties](#privatelinkserviceconnectionproperties): Properties of the PrivateLinkServiceConnection.
* **type**: string (ReadOnly): The resource type.

## PrivateLinkServiceConnectionProperties
### Properties
* **groupIds**: string[]: The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): A collection of information about the state of the connection between service consumer and provider.
* **privateLinkServiceId**: string: The resource id of private link service.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **requestMessage**: string: A message passed to the owner of the remote resource with this connection request. Restricted to 140 chars.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateLinkService
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): ExtendedLocation complex type.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [PrivateLinkServiceProperties](#privatelinkserviceproperties): Properties of the private link service.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## PrivateLinkServiceProperties
### Properties
* **alias**: string (ReadOnly): The alias of the private link service.
* **autoApproval**: [PrivateLinkServicePropertiesAutoApproval](#privatelinkservicepropertiesautoapproval): The auto-approval list of the private link service.
* **enableProxyProtocol**: bool: Whether the private link service is enabled for proxy protocol or not.
* **fqdns**: string[]: The list of Fqdn.
* **ipConfigurations**: [PrivateLinkServiceIpConfiguration](#privatelinkserviceipconfiguration)[]: An array of private link service IP configurations.
* **loadBalancerFrontendIpConfigurations**: [FrontendIPConfiguration](#frontendipconfiguration)[]: An array of references to the load balancer IP configurations.
* **networkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly): An array of references to the network interfaces created for this private link service.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): An array of list about connections to the private endpoint.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **visibility**: [PrivateLinkServicePropertiesVisibility](#privatelinkservicepropertiesvisibility): The visibility list of the private link service.

## PrivateLinkServicePropertiesAutoApproval
### Properties
* **subscriptions**: string[]: The list of subscriptions.

## PrivateLinkServiceIpConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of private link service ip configuration.
* **properties**: [PrivateLinkServiceIpConfigurationProperties](#privatelinkserviceipconfigurationproperties): Properties of private link service IP configuration.
* **type**: string (ReadOnly): The resource type.

## PrivateLinkServiceIpConfigurationProperties
### Properties
* **primary**: bool: Whether the ip configuration is primary or not.
* **privateIPAddress**: string: The private IP address of the IP configuration.
* **privateIPAddressVersion**: 'IPv4' | 'IPv6' | string: IP address version.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: IP address allocation method.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **subnet**: [Subnet](#subnet): Subnet in a virtual network resource.

## FrontendIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within the set of frontend IP configurations used by the load balancer. This name can be used to access the resource.
* **properties**: [FrontendIPConfigurationPropertiesFormat](#frontendipconfigurationpropertiesformat): Properties of Frontend IP Configuration of the load balancer.
* **type**: string (ReadOnly): Type of the resource.
* **zones**: string[]: A list of availability zones denoting the IP allocated for the resource needs to come from.

## FrontendIPConfigurationPropertiesFormat
### Properties
* **gatewayLoadBalancer**: [SubResource](#subresource): Reference to another subresource.
* **inboundNatPools**: [SubResource](#subresource)[] (ReadOnly): An array of references to inbound pools that use this frontend IP.
* **inboundNatRules**: [SubResource](#subresource)[] (ReadOnly): An array of references to inbound rules that use this frontend IP.
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly): An array of references to load balancing rules that use this frontend IP.
* **outboundRules**: [SubResource](#subresource)[] (ReadOnly): An array of references to outbound rules that use this frontend IP.
* **privateIPAddress**: string: The private IP address of the IP configuration.
* **privateIPAddressVersion**: 'IPv4' | 'IPv6' | string: IP address version.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: IP address allocation method.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **publicIPAddress**: [PublicIPAddress](#publicipaddress): Public IP address resource.
* **publicIPPrefix**: [SubResource](#subresource): Reference to another subresource.
* **subnet**: [Subnet](#subnet): Subnet in a virtual network resource.

## PrivateEndpointConnection
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnectProperties.
* **type**: string (ReadOnly): The resource type.

## PrivateEndpointConnectionProperties
### Properties
* **linkIdentifier**: string (ReadOnly): The consumer link id.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint) (ReadOnly): Private endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## PrivateLinkServicePropertiesVisibility
### Properties
* **subscriptions**: string[]: The list of subscriptions.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NetworkInterfaceTapConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [NetworkInterfaceTapConfigurationPropertiesFormat](#networkinterfacetapconfigurationpropertiesformat): Properties of Virtual Network Tap configuration.
* **type**: string (ReadOnly): Sub Resource type.

## NetworkInterfaceTapConfigurationPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **virtualNetworkTap**: [VirtualNetworkTap](#virtualnetworktap): Virtual Network Tap resource.

## VirtualNetworkTap
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [VirtualNetworkTapPropertiesFormat](#virtualnetworktappropertiesformat): Virtual Network Tap properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## VirtualNetworkTapPropertiesFormat
### Properties
* **destinationLoadBalancerFrontEndIPConfiguration**: [FrontendIPConfiguration](#frontendipconfiguration): Frontend IP address of the load balancer.
* **destinationNetworkInterfaceIPConfiguration**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration): IPConfiguration in a network interface.
* **destinationPort**: int: The VXLAN destination port that will receive the tapped traffic.
* **networkInterfaceTapConfigurations**: [NetworkInterfaceTapConfiguration](#networkinterfacetapconfiguration)[] (ReadOnly): Specifies the list of resource IDs for the network interface IP configuration that needs to be tapped.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the virtual network tap resource.

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
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ResourceNavigationLinkFormat](#resourcenavigationlinkformat): Properties of ResourceNavigationLink.
* **type**: string (ReadOnly): Resource type.

## ResourceNavigationLinkFormat
### Properties
* **link**: string: Link to the external resource.
* **linkedResourceType**: string: Resource type of the linked resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## RouteTable
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [RouteTablePropertiesFormat](#routetablepropertiesformat): Route Table resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## RouteTablePropertiesFormat
### Properties
* **disableBgpRoutePropagation**: bool: Whether to disable the routes learned by BGP on that route table. True means disable.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the route table.
* **routes**: [Route](#route)[]: Collection of routes contained within a route table.
* **subnets**: [Subnet](#subnet)[] (ReadOnly): A collection of references to subnets.

## Route
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [RoutePropertiesFormat](#routepropertiesformat): Route resource.
* **type**: string: The type of the resource.

## RoutePropertiesFormat
### Properties
* **addressPrefix**: string: The destination CIDR to which the route applies.
* **hasBgpOverride**: bool: A value indicating whether this route overrides overlapping BGP routes regardless of LPM.
* **nextHopIpAddress**: string: The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
* **nextHopType**: 'Internet' | 'None' | 'VirtualAppliance' | 'VirtualNetworkGateway' | 'VnetLocal' | string (Required): The type of Azure hop the packet should be sent to.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceAssociationLink
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ServiceAssociationLinkPropertiesFormat](#serviceassociationlinkpropertiesformat): Properties of ServiceAssociationLink.
* **type**: string (ReadOnly): Resource type.

## ServiceAssociationLinkPropertiesFormat
### Properties
* **allowDelete**: bool: If true, the resource can be deleted.
* **link**: string: Link to the external resource.
* **linkedResourceType**: string: Resource type of the linked resource.
* **locations**: string[]: A list of locations.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## ServiceEndpointPolicy
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **kind**: string (ReadOnly): Kind of service endpoint policy. This is metadata used for the Azure portal experience.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [ServiceEndpointPolicyPropertiesFormat](#serviceendpointpolicypropertiesformat): Service Endpoint Policy resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## ServiceEndpointPolicyPropertiesFormat
### Properties
* **contextualServiceEndpointPolicies**: string[]: A collection of contextual service endpoint policy.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the service endpoint policy resource.
* **serviceAlias**: string: The alias indicating if the policy belongs to a service
* **serviceEndpointPolicyDefinitions**: [ServiceEndpointPolicyDefinition](#serviceendpointpolicydefinition)[]: A collection of service endpoint policy definitions of the service endpoint policy.
* **subnets**: [Subnet](#subnet)[] (ReadOnly): A collection of references to subnets.

## ServiceEndpointPolicyDefinition
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ServiceEndpointPolicyDefinitionPropertiesFormat](#serviceendpointpolicydefinitionpropertiesformat): Service Endpoint policy definition resource.
* **type**: string: The type of the resource.

## ServiceEndpointPolicyDefinitionPropertiesFormat
### Properties
* **description**: string: A description for this rule. Restricted to 140 chars.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **service**: string: Service endpoint name.
* **serviceResources**: string[]: A list of service resources.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceEndpointPropertiesFormat
### Properties
* **locations**: string[]: A list of locations.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **service**: string: The type of the endpoint service.

## IpTag
### Properties
* **ipTagType**: string: The IP tag type. Example: FirstPartyUsage.
* **tag**: string: The value of the IP tag associated with the public IP. Example: SQL.

## NatGateway
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [NatGatewayPropertiesFormat](#natgatewaypropertiesformat): Nat Gateway properties.
* **sku**: [NatGatewaySku](#natgatewaysku): SKU of nat gateway.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.
* **zones**: string[]: A list of availability zones denoting the zone in which Nat Gateway should be deployed.

## NatGatewayPropertiesFormat
### Properties
* **idleTimeoutInMinutes**: int: The idle timeout of the nat gateway.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **publicIpAddresses**: [SubResource](#subresource)[]: An array of public ip addresses associated with the nat gateway resource.
* **publicIpPrefixes**: [SubResource](#subresource)[]: An array of public ip prefixes associated with the nat gateway resource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the NAT gateway resource.
* **subnets**: [SubResource](#subresource)[] (ReadOnly): An array of references to the subnets using this nat gateway resource.

## NatGatewaySku
### Properties
* **name**: 'Standard' | string: Name of Nat Gateway SKU.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PublicIPAddressSku
### Properties
* **name**: 'Basic' | 'Standard' | string: Name of a public IP address SKU.
* **tier**: 'Global' | 'Regional' | string: Tier of a public IP address SKU.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationGatewayBackendHttpSettings
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the backend http settings that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayBackendHttpSettingsPropertiesFormat](#applicationgatewaybackendhttpsettingspropertiesformat): Properties of Backend address pool settings of an application gateway.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayBackendHttpSettingsPropertiesFormat
### Properties
* **affinityCookieName**: string: Cookie name to use for the affinity cookie.
* **authenticationCertificates**: [SubResource](#subresource)[]: Array of references to application gateway authentication certificates.
* **connectionDraining**: [ApplicationGatewayConnectionDraining](#applicationgatewayconnectiondraining): Connection draining allows open connections to a backend server to be active for a specified time after the backend server got removed from the configuration.
* **cookieBasedAffinity**: 'Disabled' | 'Enabled' | string: Cookie based affinity.
* **hostName**: string: Host header to be sent to the backend servers.
* **path**: string: Path which should be used as a prefix for all HTTP requests. Null means no path will be prefixed. Default value is null.
* **pickHostNameFromBackendAddress**: bool: Whether to pick host header should be picked from the host name of the backend server. Default value is false.
* **port**: int: The destination port on the backend.
* **probe**: [SubResource](#subresource): Reference to another subresource.
* **probeEnabled**: bool: Whether the probe is enabled. Default value is false.
* **protocol**: 'Http' | 'Https' | string: Application Gateway protocol.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
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

## ApplicationGatewayFrontendIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the frontend IP configuration that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayFrontendIPConfigurationPropertiesFormat](#applicationgatewayfrontendipconfigurationpropertiesformat): Properties of Frontend IP configuration of an application gateway.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayFrontendIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string: PrivateIPAddress of the network interface IP Configuration.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: IP address allocation method.
* **privateLinkConfiguration**: [SubResource](#subresource): Reference to another subresource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **publicIPAddress**: [SubResource](#subresource): Reference to another subresource.
* **subnet**: [SubResource](#subresource): Reference to another subresource.

## ApplicationGatewayFrontendPort
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the frontend port that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayFrontendPortPropertiesFormat](#applicationgatewayfrontendportpropertiesformat): Properties of Frontend port of an application gateway.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayFrontendPortPropertiesFormat
### Properties
* **port**: int: Frontend port.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## ApplicationGatewayGlobalConfiguration
### Properties
* **enableRequestBuffering**: bool: Enable request buffering.
* **enableResponseBuffering**: bool: Enable response buffering.

## ApplicationGatewayHttpListener
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the HTTP listener that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayHttpListenerPropertiesFormat](#applicationgatewayhttplistenerpropertiesformat): Properties of HTTP listener of an application gateway.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayHttpListenerPropertiesFormat
### Properties
* **customErrorConfigurations**: [ApplicationGatewayCustomError](#applicationgatewaycustomerror)[]: Custom error configurations of the HTTP listener.
* **firewallPolicy**: [SubResource](#subresource): Reference to another subresource.
* **frontendIPConfiguration**: [SubResource](#subresource): Reference to another subresource.
* **frontendPort**: [SubResource](#subresource): Reference to another subresource.
* **hostName**: string: Host name of HTTP listener.
* **hostNames**: string[]: List of Host names for HTTP Listener that allows special wildcard characters as well.
* **protocol**: 'Http' | 'Https' | string: Application Gateway protocol.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **requireServerNameIndication**: bool: Applicable only if protocol is https. Enables SNI for multi-hosting.
* **sslCertificate**: [SubResource](#subresource): Reference to another subresource.
* **sslProfile**: [SubResource](#subresource): Reference to another subresource.

## ApplicationGatewayLoadDistributionPolicy
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the load distribution policy that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayLoadDistributionPolicyPropertiesFormat](#applicationgatewayloaddistributionpolicypropertiesformat): Properties of Load Distribution Policy of an application gateway.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayLoadDistributionPolicyPropertiesFormat
### Properties
* **loadDistributionAlgorithm**: 'IpHash' | 'LeastConnections' | 'RoundRobin' | string: Load Distribution Algorithm enums.
* **loadDistributionTargets**: [ApplicationGatewayLoadDistributionTarget](#applicationgatewayloaddistributiontarget)[]: Load Distribution Targets resource of an application gateway.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## ApplicationGatewayLoadDistributionTarget
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the load distribution policy that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayLoadDistributionTargetPropertiesFormat](#applicationgatewayloaddistributiontargetpropertiesformat)
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayLoadDistributionTargetPropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource): Reference to another subresource.
* **weightPerServer**: int: Weight per server. Range between 1 and 100.

## ApplicationGatewayPrivateEndpointConnection
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the private endpoint connection on an application gateway.
* **properties**: [ApplicationGatewayPrivateEndpointConnectionProperties](#applicationgatewayprivateendpointconnectionproperties): Properties of Private Link Resource of an application gateway.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayPrivateEndpointConnectionProperties
### Properties
* **linkIdentifier**: string (ReadOnly): The consumer link id.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint) (ReadOnly): Private endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## ApplicationGatewayPrivateLinkConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the private link configuration that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayPrivateLinkConfigurationProperties](#applicationgatewayprivatelinkconfigurationproperties): Properties of private link configuration on an application gateway.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayPrivateLinkConfigurationProperties
### Properties
* **ipConfigurations**: [ApplicationGatewayPrivateLinkIpConfiguration](#applicationgatewayprivatelinkipconfiguration)[]: An array of application gateway private link ip configurations.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## ApplicationGatewayPrivateLinkIpConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of application gateway private link ip configuration.
* **properties**: [ApplicationGatewayPrivateLinkIpConfigurationProperties](#applicationgatewayprivatelinkipconfigurationproperties): Properties of an application gateway private link IP configuration.
* **type**: string (ReadOnly): The resource type.

## ApplicationGatewayPrivateLinkIpConfigurationProperties
### Properties
* **primary**: bool: Whether the ip configuration is primary or not.
* **privateIPAddress**: string: The private IP address of the IP configuration.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: IP address allocation method.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **subnet**: [SubResource](#subresource): Reference to another subresource.

## ApplicationGatewayProbe
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the probe that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayProbePropertiesFormat](#applicationgatewayprobepropertiesformat): Properties of probe of an application gateway.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayProbePropertiesFormat
### Properties
* **host**: string: Host name to send the probe to.
* **interval**: int: The probing interval in seconds. This is the time interval between two consecutive probes. Acceptable values are from 1 second to 86400 seconds.
* **match**: [ApplicationGatewayProbeHealthResponseMatch](#applicationgatewayprobehealthresponsematch): Application gateway probe health response match.
* **minServers**: int: Minimum number of servers that are always marked healthy. Default value is 0.
* **path**: string: Relative path of probe. Valid path starts from '/'. Probe is sent to <Protocol>://<host>:<port><path>.
* **pickHostNameFromBackendHttpSettings**: bool: Whether the host header should be picked from the backend http settings. Default value is false.
* **port**: int: Custom port which will be used for probing the backend servers. The valid value ranges from 1 to 65535. In case not set, port from http settings will be used. This property is valid for Standard_v2 and WAF_v2 only.
* **protocol**: 'Http' | 'Https' | string: Application Gateway protocol.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **timeout**: int: The probe timeout in seconds. Probe marked as failed if valid response is not received with this timeout period. Acceptable values are from 1 second to 86400 seconds.
* **unhealthyThreshold**: int: The probe retry count. Backend server is marked down after consecutive probe failure count reaches UnhealthyThreshold. Acceptable values are from 1 second to 20.

## ApplicationGatewayProbeHealthResponseMatch
### Properties
* **body**: string: Body that must be contained in the health response. Default value is empty.
* **statusCodes**: string[]: Allowed ranges of healthy status codes. Default range of healthy status codes is 200-399.

## ApplicationGatewayRedirectConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the redirect configuration that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayRedirectConfigurationPropertiesFormat](#applicationgatewayredirectconfigurationpropertiesformat): Properties of redirect configuration of the application gateway.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayRedirectConfigurationPropertiesFormat
### Properties
* **includePath**: bool: Include path in the redirected url.
* **includeQueryString**: bool: Include query string in the redirected url.
* **pathRules**: [SubResource](#subresource)[]: Path rules specifying redirect configuration.
* **redirectType**: 'Found' | 'Permanent' | 'SeeOther' | 'Temporary' | string: Redirect type enum.
* **requestRoutingRules**: [SubResource](#subresource)[]: Request routing specifying redirect configuration.
* **targetListener**: [SubResource](#subresource): Reference to another subresource.
* **targetUrl**: string: Url to redirect the request to.
* **urlPathMaps**: [SubResource](#subresource)[]: Url path maps specifying default redirect configuration.

## ApplicationGatewayRequestRoutingRule
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the request routing rule that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayRequestRoutingRulePropertiesFormat](#applicationgatewayrequestroutingrulepropertiesformat): Properties of request routing rule of the application gateway.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayRequestRoutingRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource): Reference to another subresource.
* **backendHttpSettings**: [SubResource](#subresource): Reference to another subresource.
* **httpListener**: [SubResource](#subresource): Reference to another subresource.
* **loadDistributionPolicy**: [SubResource](#subresource): Reference to another subresource.
* **priority**: int: Priority of the request routing rule.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **redirectConfiguration**: [SubResource](#subresource): Reference to another subresource.
* **rewriteRuleSet**: [SubResource](#subresource): Reference to another subresource.
* **ruleType**: 'Basic' | 'PathBasedRouting' | string: Rule type.
* **urlPathMap**: [SubResource](#subresource): Reference to another subresource.

## ApplicationGatewayRewriteRuleSet
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the rewrite rule set that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayRewriteRuleSetPropertiesFormat](#applicationgatewayrewriterulesetpropertiesformat): Properties of rewrite rule set of the application gateway.

## ApplicationGatewayRewriteRuleSetPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **rewriteRules**: [ApplicationGatewayRewriteRule](#applicationgatewayrewriterule)[]: Rewrite rules in the rewrite rule set.

## ApplicationGatewayRewriteRule
### Properties
* **actionSet**: [ApplicationGatewayRewriteRuleActionSet](#applicationgatewayrewriteruleactionset): Set of actions in the Rewrite Rule in Application Gateway.
* **conditions**: [ApplicationGatewayRewriteRuleCondition](#applicationgatewayrewriterulecondition)[]: Conditions based on which the action set execution will be evaluated.
* **name**: string: Name of the rewrite rule that is unique within an Application Gateway.
* **ruleSequence**: int: Rule Sequence of the rewrite rule that determines the order of execution of a particular rule in a RewriteRuleSet.

## ApplicationGatewayRewriteRuleActionSet
### Properties
* **requestHeaderConfigurations**: [ApplicationGatewayHeaderConfiguration](#applicationgatewayheaderconfiguration)[]: Request Header Actions in the Action Set.
* **responseHeaderConfigurations**: [ApplicationGatewayHeaderConfiguration](#applicationgatewayheaderconfiguration)[]: Response Header Actions in the Action Set.
* **urlConfiguration**: [ApplicationGatewayUrlConfiguration](#applicationgatewayurlconfiguration): Url configuration of the Actions set in Application Gateway.

## ApplicationGatewayHeaderConfiguration
### Properties
* **headerName**: string: Header name of the header configuration.
* **headerValue**: string: Header value of the header configuration.

## ApplicationGatewayUrlConfiguration
### Properties
* **modifiedPath**: string: Url path which user has provided for url rewrite. Null means no path will be updated. Default value is null.
* **modifiedQueryString**: string: Query string which user has provided for url rewrite. Null means no query string will be updated. Default value is null.
* **reroute**: bool: If set as true, it will re-evaluate the url path map provided in path based request routing rules using modified path. Default value is false.

## ApplicationGatewayRewriteRuleCondition
### Properties
* **ignoreCase**: bool: Setting this parameter to truth value with force the pattern to do a case in-sensitive comparison.
* **negate**: bool: Setting this value as truth will force to check the negation of the condition given by the user.
* **pattern**: string: The pattern, either fixed string or regular expression, that evaluates the truthfulness of the condition.
* **variable**: string: The condition parameter of the RewriteRuleCondition.

## ApplicationGatewaySku
### Properties
* **capacity**: int: Capacity (instance count) of an application gateway.
* **name**: 'Standard_Large' | 'Standard_Medium' | 'Standard_Small' | 'Standard_v2' | 'WAF_Large' | 'WAF_Medium' | 'WAF_v2' | string: Name of an application gateway SKU.
* **tier**: 'Standard' | 'Standard_v2' | 'WAF' | 'WAF_v2' | string: Tier of an application gateway.

## ApplicationGatewaySslCertificate
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the SSL certificate that is unique within an Application Gateway.
* **properties**: [ApplicationGatewaySslCertificatePropertiesFormat](#applicationgatewaysslcertificatepropertiesformat): Properties of SSL certificates of an application gateway.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewaySslCertificatePropertiesFormat
### Properties
* **data**: string: Base-64 encoded pfx certificate. Only applicable in PUT Request.
* **keyVaultSecretId**: string: Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
* **password**: string: Password for the pfx file specified in data. Only applicable in PUT request.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **publicCertData**: string (ReadOnly): Base-64 encoded Public cert data corresponding to pfx specified in data. Only applicable in GET request.

## ApplicationGatewaySslPolicy
### Properties
* **cipherSuites**: 'TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA256' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA256' | 'TLS_DHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_DHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_RSA_WITH_3DES_EDE_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_RSA_WITH_AES_256_CBC_SHA' | 'TLS_RSA_WITH_AES_256_CBC_SHA256' | 'TLS_RSA_WITH_AES_256_GCM_SHA384' | string[]: Ssl cipher suites to be enabled in the specified order to application gateway.
* **disabledSslProtocols**: 'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | string[]: Ssl protocols to be disabled on application gateway.
* **minProtocolVersion**: 'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | string: Ssl protocol enums.
* **policyName**: 'AppGwSslPolicy20150501' | 'AppGwSslPolicy20170401' | 'AppGwSslPolicy20170401S' | string: Ssl predefined policy name enums.
* **policyType**: 'Custom' | 'Predefined' | string: Type of Ssl Policy.

## ApplicationGatewaySslProfile
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the SSL profile that is unique within an Application Gateway.
* **properties**: [ApplicationGatewaySslProfilePropertiesFormat](#applicationgatewaysslprofilepropertiesformat): Properties of SSL profile of an application gateway.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewaySslProfilePropertiesFormat
### Properties
* **clientAuthConfiguration**: [ApplicationGatewayClientAuthConfiguration](#applicationgatewayclientauthconfiguration): Application gateway client authentication configuration.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **sslPolicy**: [ApplicationGatewaySslPolicy](#applicationgatewaysslpolicy): Application Gateway Ssl policy.
* **trustedClientCertificates**: [SubResource](#subresource)[]: Array of references to application gateway trusted client certificates.

## ApplicationGatewayClientAuthConfiguration
### Properties
* **verifyClientCertIssuerDN**: bool: Verify client certificate issuer name on the application gateway.

## ApplicationGatewayTrustedClientCertificate
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the trusted client certificate that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayTrustedClientCertificatePropertiesFormat](#applicationgatewaytrustedclientcertificatepropertiesformat): Trusted client certificates properties of an application gateway.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayTrustedClientCertificatePropertiesFormat
### Properties
* **clientCertIssuerDN**: string (ReadOnly): Distinguished name of client certificate issuer.
* **data**: string: Certificate public data.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **validatedCertData**: string (ReadOnly): Validated certificate data.

## ApplicationGatewayTrustedRootCertificate
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the trusted root certificate that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayTrustedRootCertificatePropertiesFormat](#applicationgatewaytrustedrootcertificatepropertiesformat): Trusted Root certificates properties of an application gateway.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayTrustedRootCertificatePropertiesFormat
### Properties
* **data**: string: Certificate public data.
* **keyVaultSecretId**: string: Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## ApplicationGatewayUrlPathMap
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the URL path map that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayUrlPathMapPropertiesFormat](#applicationgatewayurlpathmappropertiesformat): Properties of UrlPathMap of the application gateway.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayUrlPathMapPropertiesFormat
### Properties
* **defaultBackendAddressPool**: [SubResource](#subresource): Reference to another subresource.
* **defaultBackendHttpSettings**: [SubResource](#subresource): Reference to another subresource.
* **defaultLoadDistributionPolicy**: [SubResource](#subresource): Reference to another subresource.
* **defaultRedirectConfiguration**: [SubResource](#subresource): Reference to another subresource.
* **defaultRewriteRuleSet**: [SubResource](#subresource): Reference to another subresource.
* **pathRules**: [ApplicationGatewayPathRule](#applicationgatewaypathrule)[]: Path rule of URL path map resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## ApplicationGatewayPathRule
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the path rule that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayPathRulePropertiesFormat](#applicationgatewaypathrulepropertiesformat): Properties of path rule of an application gateway.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayPathRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource): Reference to another subresource.
* **backendHttpSettings**: [SubResource](#subresource): Reference to another subresource.
* **firewallPolicy**: [SubResource](#subresource): Reference to another subresource.
* **loadDistributionPolicy**: [SubResource](#subresource): Reference to another subresource.
* **paths**: string[]: Path rules of URL path map.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **redirectConfiguration**: [SubResource](#subresource): Reference to another subresource.
* **rewriteRuleSet**: [SubResource](#subresource): Reference to another subresource.

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

## ApplicationGatewayFirewallDisabledRuleGroup
### Properties
* **ruleGroupName**: string (Required): The name of the rule group that will be disabled.
* **rules**: int[]: The list of rules that will be disabled. If null, all rules of the rule group will be disabled.

## ApplicationGatewayFirewallExclusion
### Properties
* **matchVariable**: string (Required): The variable to be excluded.
* **selector**: string (Required): When matchVariable is a collection, operator used to specify which elements in the collection this exclusion applies to.
* **selectorMatchOperator**: string (Required): When matchVariable is a collection, operate on the selector to specify which elements in the collection this exclusion applies to.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebApplicationFirewallPolicyPropertiesFormat
### Properties
* **applicationGateways**: [ApplicationGateway](#applicationgateway)[] (ReadOnly): A collection of references to application gateways.
* **customRules**: [WebApplicationFirewallCustomRule](#webapplicationfirewallcustomrule)[]: The custom rules inside the policy.
* **httpListeners**: [SubResource](#subresource)[] (ReadOnly): A collection of references to application gateway http listeners.
* **managedRules**: [ManagedRulesDefinition](#managedrulesdefinition) (Required): Allow to exclude some variable satisfy the condition for the WAF check.
* **pathBasedRules**: [SubResource](#subresource)[] (ReadOnly): A collection of references to application gateway path rules.
* **policySettings**: [PolicySettings](#policysettings): Defines contents of a web application firewall global configuration.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | string (ReadOnly): Resource status of the policy.

## ApplicationGateway
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity for the resource.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [ApplicationGatewayPropertiesFormat](#applicationgatewaypropertiesformat): Properties of the application gateway.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.
* **zones**: string[]: A list of availability zones denoting where the resource needs to come from.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebApplicationFirewallCustomRule
### Properties
* **action**: 'Allow' | 'Block' | 'Log' | string (Required): Type of Actions.
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **matchConditions**: [MatchCondition](#matchcondition)[] (Required): List of match conditions.
* **name**: string: The name of the resource that is unique within a policy. This name can be used to access the resource.
* **priority**: int (Required): Priority of the rule. Rules with a lower value will be evaluated before rules with a higher value.
* **ruleType**: 'Invalid' | 'MatchRule' | string (Required): The rule type.

## MatchCondition
### Properties
* **matchValues**: string[] (Required): Match value.
* **matchVariables**: [MatchVariable](#matchvariable)[] (Required): List of match variables.
* **negationConditon**: bool: Whether this is negate condition or not.
* **operator**: 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GeoMatch' | 'GreaterThan' | 'GreaterThanOrEqual' | 'IPMatch' | 'LessThan' | 'LessThanOrEqual' | 'Regex' | string (Required): The operator to be matched.
* **transforms**: 'HtmlEntityDecode' | 'Lowercase' | 'RemoveNulls' | 'Trim' | 'UrlDecode' | 'UrlEncode' | string[]: List of transforms.

## MatchVariable
### Properties
* **selector**: string: The selector of match variable.
* **variableName**: 'PostArgs' | 'QueryString' | 'RemoteAddr' | 'RequestBody' | 'RequestCookies' | 'RequestHeaders' | 'RequestMethod' | 'RequestUri' | string (Required): Match Variable.

## ManagedRulesDefinition
### Properties
* **exclusions**: [OwaspCrsExclusionEntry](#owaspcrsexclusionentry)[]: The Exclusions that are applied on the policy.
* **managedRuleSets**: [ManagedRuleSet](#managedruleset)[] (Required): The managed rule sets that are associated with the policy.

## OwaspCrsExclusionEntry
### Properties
* **matchVariable**: 'RequestArgNames' | 'RequestCookieNames' | 'RequestHeaderNames' | string (Required): The variable to be excluded.
* **selector**: string (Required): When matchVariable is a collection, operator used to specify which elements in the collection this exclusion applies to.
* **selectorMatchOperator**: 'Contains' | 'EndsWith' | 'Equals' | 'EqualsAny' | 'StartsWith' | string (Required): When matchVariable is a collection, operate on the selector to specify which elements in the collection this exclusion applies to.

## ManagedRuleSet
### Properties
* **ruleGroupOverrides**: [ManagedRuleGroupOverride](#managedrulegroupoverride)[]: Defines the rule group overrides to apply to the rule set.
* **ruleSetType**: string (Required): Defines the rule set type to use.
* **ruleSetVersion**: string (Required): Defines the version of the rule set to use.

## ManagedRuleGroupOverride
### Properties
* **ruleGroupName**: string (Required): The managed rule group to override.
* **rules**: [ManagedRuleOverride](#managedruleoverride)[]: List of rules that will be disabled. If none specified, all rules in the group will be disabled.

## ManagedRuleOverride
### Properties
* **ruleId**: string (Required): Identifier for the managed rule.
* **state**: 'Disabled' | string: The state of the managed rule. Defaults to Disabled if not specified.

## PolicySettings
### Properties
* **fileUploadLimitInMb**: int: Maximum file upload size in Mb for WAF.
* **maxRequestBodySizeInKb**: int: Maximum request body size in Kb for WAF.
* **mode**: 'Detection' | 'Prevention' | string: The mode of the policy.
* **requestBodyCheck**: bool: Whether to allow WAF to check request Body.
* **state**: 'Disabled' | 'Enabled' | string: The state of the policy.

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
* **additionalProperties**: [AzureFirewallAdditionalProperties](#azurefirewalladditionalproperties): The additional properties of azure firewall.
* **applicationRuleCollections**: [AzureFirewallApplicationRuleCollection](#azurefirewallapplicationrulecollection)[]: Collection of application rule collections used by Azure Firewall.
* **firewallPolicy**: [SubResource](#subresource): Reference to another subresource.
* **hubIPAddresses**: [HubIPAddresses](#hubipaddresses): IP addresses associated with azure firewall.
* **ipConfigurations**: [AzureFirewallIPConfiguration](#azurefirewallipconfiguration)[]: IP configuration of the Azure Firewall resource.
* **ipGroups**: [AzureFirewallIpGroups](#azurefirewallipgroups)[] (ReadOnly): List of IpGroups associated with azure firewall.
* **managementIpConfiguration**: [AzureFirewallIPConfiguration](#azurefirewallipconfiguration): IP configuration of an Azure Firewall.
* **natRuleCollections**: [AzureFirewallNatRuleCollection](#azurefirewallnatrulecollection)[]: Collection of NAT rule collections used by Azure Firewall.
* **networkRuleCollections**: [AzureFirewallNetworkRuleCollection](#azurefirewallnetworkrulecollection)[]: Collection of network rule collections used by Azure Firewall.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **sku**: [AzureFirewallSku](#azurefirewallsku): SKU of an Azure Firewall.
* **threatIntelMode**: 'Alert' | 'Deny' | 'Off' | string: The operation mode for Threat Intel.
* **virtualHub**: [SubResource](#subresource): Reference to another subresource.

## AzureFirewallAdditionalProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AzureFirewallApplicationRuleCollection
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within the Azure firewall. This name can be used to access the resource.
* **properties**: [AzureFirewallApplicationRuleCollectionPropertiesFormat](#azurefirewallapplicationrulecollectionpropertiesformat): Properties of the application rule collection.

## AzureFirewallApplicationRuleCollectionPropertiesFormat
### Properties
* **action**: [AzureFirewallRCAction](#azurefirewallrcaction): Properties of the AzureFirewallRCAction.
* **priority**: int: Priority of the application rule collection resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **rules**: [AzureFirewallApplicationRule](#azurefirewallapplicationrule)[]: Collection of rules used by a application rule collection.

## AzureFirewallRCAction
### Properties
* **type**: 'Allow' | 'Deny' | string: The action type of a rule collection.

## AzureFirewallApplicationRule
### Properties
* **description**: string: Description of the rule.
* **fqdnTags**: string[]: List of FQDN Tags for this rule.
* **name**: string: Name of the application rule.
* **protocols**: [AzureFirewallApplicationRuleProtocol](#azurefirewallapplicationruleprotocol)[]: Array of ApplicationRuleProtocols.
* **sourceAddresses**: string[]: List of source IP addresses for this rule.
* **sourceIpGroups**: string[]: List of source IpGroups for this rule.
* **targetFqdns**: string[]: List of FQDNs for this rule.

## AzureFirewallApplicationRuleProtocol
### Properties
* **port**: int: Port number for the protocol, cannot be greater than 64000. This field is optional.
* **protocolType**: 'Http' | 'Https' | 'Mssql' | string: The protocol type of a Application Rule resource.

## HubIPAddresses
### Properties
* **privateIPAddress**: string: Private IP Address associated with azure firewall.
* **publicIPs**: [HubPublicIPAddresses](#hubpublicipaddresses): Public IP addresses associated with azure firewall.

## HubPublicIPAddresses
### Properties
* **addresses**: [AzureFirewallPublicIPAddress](#azurefirewallpublicipaddress)[]: The list of Public IP addresses associated with azure firewall or IP addresses to be retained.
* **count**: int: The number of Public IP addresses associated with azure firewall.

## AzureFirewallPublicIPAddress
### Properties
* **address**: string: Public IP Address value.

## AzureFirewallIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [AzureFirewallIPConfigurationPropertiesFormat](#azurefirewallipconfigurationpropertiesformat): Properties of IP configuration of an Azure Firewall.
* **type**: string (ReadOnly): Type of the resource.

## AzureFirewallIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string (ReadOnly): The Firewall Internal Load Balancer IP to be used as the next hop in User Defined Routes.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **publicIPAddress**: [SubResource](#subresource): Reference to another subresource.
* **subnet**: [SubResource](#subresource): Reference to another subresource.

## AzureFirewallIpGroups
### Properties
* **changeNumber**: string (ReadOnly): The iteration number.
* **id**: string (ReadOnly): Resource ID.

## AzureFirewallNatRuleCollection
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within the Azure firewall. This name can be used to access the resource.
* **properties**: [AzureFirewallNatRuleCollectionProperties](#azurefirewallnatrulecollectionproperties): Properties of the NAT rule collection.

## AzureFirewallNatRuleCollectionProperties
### Properties
* **action**: [AzureFirewallNatRCAction](#azurefirewallnatrcaction): AzureFirewall NAT Rule Collection Action.
* **priority**: int: Priority of the NAT rule collection resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **rules**: [AzureFirewallNatRule](#azurefirewallnatrule)[]: Collection of rules used by a NAT rule collection.

## AzureFirewallNatRCAction
### Properties
* **type**: 'Dnat' | 'Snat' | string: The action type of a NAT rule collection.

## AzureFirewallNatRule
### Properties
* **description**: string: Description of the rule.
* **destinationAddresses**: string[]: List of destination IP addresses for this rule. Supports IP ranges, prefixes, and service tags.
* **destinationPorts**: string[]: List of destination ports.
* **name**: string: Name of the NAT rule.
* **protocols**: 'Any' | 'ICMP' | 'TCP' | 'UDP' | string[]: Array of AzureFirewallNetworkRuleProtocols applicable to this NAT rule.
* **sourceAddresses**: string[]: List of source IP addresses for this rule.
* **sourceIpGroups**: string[]: List of source IpGroups for this rule.
* **translatedAddress**: string: The translated address for this NAT rule.
* **translatedFqdn**: string: The translated FQDN for this NAT rule.
* **translatedPort**: string: The translated port for this NAT rule.

## AzureFirewallNetworkRuleCollection
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within the Azure firewall. This name can be used to access the resource.
* **properties**: [AzureFirewallNetworkRuleCollectionPropertiesFormat](#azurefirewallnetworkrulecollectionpropertiesformat): Properties of the network rule collection.

## AzureFirewallNetworkRuleCollectionPropertiesFormat
### Properties
* **action**: [AzureFirewallRCAction](#azurefirewallrcaction): Properties of the AzureFirewallRCAction.
* **priority**: int: Priority of the network rule collection resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **rules**: [AzureFirewallNetworkRule](#azurefirewallnetworkrule)[]: Collection of rules used by a network rule collection.

## AzureFirewallNetworkRule
### Properties
* **description**: string: Description of the rule.
* **destinationAddresses**: string[]: List of destination IP addresses.
* **destinationFqdns**: string[]: List of destination FQDNs.
* **destinationIpGroups**: string[]: List of destination IpGroups for this rule.
* **destinationPorts**: string[]: List of destination ports.
* **name**: string: Name of the network rule.
* **protocols**: 'Any' | 'ICMP' | 'TCP' | 'UDP' | string[]: Array of AzureFirewallNetworkRuleProtocols.
* **sourceAddresses**: string[]: List of source IP addresses for this rule.
* **sourceIpGroups**: string[]: List of source IpGroups for this rule.

## AzureFirewallSku
### Properties
* **name**: 'AZFW_Hub' | 'AZFW_VNet' | string: Name of an Azure Firewall SKU.
* **tier**: 'Premium' | 'Standard' | string: Tier of an Azure Firewall.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BastionHostPropertiesFormat
### Properties
* **disableCopyPaste**: bool: Enable/Disable Copy/Paste feature of the Bastion Host resource.
* **dnsName**: string: FQDN for the endpoint on which bastion host is accessible.
* **enableFileCopy**: bool: Enable/Disable File Copy feature of the Bastion Host resource.
* **enableIpConnect**: bool: Enable/Disable IP Connect feature of the Bastion Host resource.
* **enableShareableLink**: bool: Enable/Disable Shareable Link of the Bastion Host resource.
* **enableTunneling**: bool: Enable/Disable Tunneling feature of the Bastion Host resource.
* **ipConfigurations**: [BastionHostIPConfiguration](#bastionhostipconfiguration)[]: IP configuration of the Bastion Host resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **scaleUnits**: int: The scale units for the Bastion Host resource.

## BastionHostIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [BastionHostIPConfigurationPropertiesFormat](#bastionhostipconfigurationpropertiesformat): Properties of IP configuration of an Bastion Host.
* **type**: string (ReadOnly): Ip configuration type.

## BastionHostIPConfigurationPropertiesFormat
### Properties
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: IP address allocation method.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **publicIPAddress**: [SubResource](#subresource) (Required): Reference to another subresource.
* **subnet**: [SubResource](#subresource) (Required): Reference to another subresource.

## Sku
### Properties
* **name**: 'Basic' | 'Standard' | string: The name of this Bastion Host.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualNetworkGatewayConnectionPropertiesFormat
### Properties
* **authorizationKey**: string: The authorizationKey.
* **connectionMode**: 'Default' | 'InitiatorOnly' | 'ResponderOnly' | string: Gateway connection type.
* **connectionProtocol**: 'IKEv1' | 'IKEv2' | string: Gateway connection protocol.
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' | string (ReadOnly): Virtual Network Gateway connection status.
* **connectionType**: 'ExpressRoute' | 'IPsec' | 'VPNClient' | 'Vnet2Vnet' | string (Required): Gateway connection type.
* **dpdTimeoutSeconds**: int: The dead peer detection timeout of this connection in seconds.
* **egressBytesTransferred**: int (ReadOnly): The egress bytes transferred in this connection.
* **egressNatRules**: [SubResource](#subresource)[]: List of egress NatRules.
* **enableBgp**: bool: EnableBgp flag.
* **expressRouteGatewayBypass**: bool: Bypass ExpressRoute Gateway for data forwarding.
* **ingressBytesTransferred**: int (ReadOnly): The ingress bytes transferred in this connection.
* **ingressNatRules**: [SubResource](#subresource)[]: List of ingress NatRules.
* **ipsecPolicies**: [IpsecPolicy](#ipsecpolicy)[]: The IPSec Policies to be considered by this connection.
* **localNetworkGateway2**: [LocalNetworkGateway](#localnetworkgateway): A common class for general resource information.
* **peer**: [SubResource](#subresource): Reference to another subresource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the virtual network gateway connection resource.
* **routingWeight**: int: The routing weight.
* **sharedKey**: string: The IPSec shared key.
* **trafficSelectorPolicies**: [TrafficSelectorPolicy](#trafficselectorpolicy)[]: The Traffic Selector Policies to be considered by this connection.
* **tunnelConnectionStatus**: [TunnelConnectionHealth](#tunnelconnectionhealth)[] (ReadOnly): Collection of all tunnels' connection health status.
* **useLocalAzureIpAddress**: bool: Use private local Azure IP for the connection.
* **usePolicyBasedTrafficSelectors**: bool: Enable policy-based traffic selectors.
* **virtualNetworkGateway1**: [VirtualNetworkGateway](#virtualnetworkgateway) (Required): A common class for general resource information.
* **virtualNetworkGateway2**: [VirtualNetworkGateway](#virtualnetworkgateway): A common class for general resource information.

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

## LocalNetworkGateway
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [LocalNetworkGatewayPropertiesFormat](#localnetworkgatewaypropertiesformat) (Required): LocalNetworkGateway properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## LocalNetworkGatewayPropertiesFormat
### Properties
* **bgpSettings**: [BgpSettings](#bgpsettings): BGP settings details.
* **fqdn**: string: FQDN of local network gateway.
* **gatewayIpAddress**: string: IP address of local network gateway.
* **localNetworkAddressSpace**: [AddressSpace](#addressspace): AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the local network gateway resource.

## BgpSettings
### Properties
* **asn**: int: The BGP speaker's ASN.
* **bgpPeeringAddress**: string: The BGP peering address and BGP identifier of this BGP speaker.
* **bgpPeeringAddresses**: [IPConfigurationBgpPeeringAddress](#ipconfigurationbgppeeringaddress)[]: BGP peering address with IP configuration ID for virtual network gateway.
* **peerWeight**: int: The weight added to routes learned from this BGP speaker.

## IPConfigurationBgpPeeringAddress
### Properties
* **customBgpIpAddresses**: string[]: The list of custom BGP peering addresses which belong to IP configuration.
* **defaultBgpIpAddresses**: string[] (ReadOnly): The list of default BGP peering addresses which belong to IP configuration.
* **ipconfigurationId**: string: The ID of IP configuration which belongs to gateway.
* **tunnelIpAddresses**: string[] (ReadOnly): The list of tunnel public IP addresses which belong to IP configuration.

## AddressSpace
### Properties
* **addressPrefixes**: string[]: A list of address blocks reserved for this virtual network in CIDR notation.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrafficSelectorPolicy
### Properties
* **localAddressRanges**: string[] (Required): A collection of local address spaces in CIDR format.
* **remoteAddressRanges**: string[] (Required): A collection of remote address spaces in CIDR format.

## TunnelConnectionHealth
### Properties
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' | string (ReadOnly): Virtual Network Gateway connection status.
* **egressBytesTransferred**: int (ReadOnly): The Egress Bytes Transferred in this connection.
* **ingressBytesTransferred**: int (ReadOnly): The Ingress Bytes Transferred in this connection.
* **lastConnectionEstablishedUtcTime**: string (ReadOnly): The time at which connection was established in Utc format.
* **tunnel**: string (ReadOnly): Tunnel name.

## VirtualNetworkGateway
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): ExtendedLocation complex type.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [VirtualNetworkGatewayPropertiesFormat](#virtualnetworkgatewaypropertiesformat) (Required): VirtualNetworkGateway properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## VirtualNetworkGatewayPropertiesFormat
### Properties
* **activeActive**: bool: ActiveActive flag.
* **bgpSettings**: [BgpSettings](#bgpsettings): BGP settings details.
* **customRoutes**: [AddressSpace](#addressspace): AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.
* **enableBgp**: bool: Whether BGP is enabled for this virtual network gateway or not.
* **enableBgpRouteTranslationForNat**: bool: EnableBgpRouteTranslationForNat flag.
* **enableDnsForwarding**: bool: Whether dns forwarding is enabled or not.
* **enablePrivateIpAddress**: bool: Whether private IP needs to be enabled on this gateway for connections or not.
* **gatewayDefaultSite**: [SubResource](#subresource): Reference to another subresource.
* **gatewayType**: 'ExpressRoute' | 'LocalGateway' | 'Vpn' | string: The type of this virtual network gateway.
* **inboundDnsForwardingEndpoint**: string (ReadOnly): The IP address allocated by the gateway to which dns requests can be sent.
* **ipConfigurations**: [VirtualNetworkGatewayIPConfiguration](#virtualnetworkgatewayipconfiguration)[]: IP configurations for virtual network gateway.
* **natRules**: [VirtualNetworkGatewayNatRule](#virtualnetworkgatewaynatrule)[]: NatRules for virtual network gateway.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the virtual network gateway resource.
* **sku**: [VirtualNetworkGatewaySku](#virtualnetworkgatewaysku): VirtualNetworkGatewaySku details.
* **vNetExtendedLocationResourceId**: string: Customer vnet resource id. VirtualNetworkGateway of type local gateway is associated with the customer vnet.
* **vpnClientConfiguration**: [VpnClientConfiguration](#vpnclientconfiguration): VpnClientConfiguration for P2S client.
* **vpnGatewayGeneration**: 'Generation1' | 'Generation2' | 'None' | string: The generation for this VirtualNetworkGateway. Must be None if gatewayType is not VPN.
* **vpnType**: 'PolicyBased' | 'RouteBased' | string: The type of this virtual network gateway.

## VirtualNetworkGatewayIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VirtualNetworkGatewayIPConfigurationPropertiesFormat](#virtualnetworkgatewayipconfigurationpropertiesformat): Properties of VirtualNetworkGatewayIPConfiguration.

## VirtualNetworkGatewayIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string (ReadOnly): Private IP Address for this gateway.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: IP address allocation method.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **publicIPAddress**: [SubResource](#subresource): Reference to another subresource.
* **subnet**: [SubResource](#subresource): Reference to another subresource.

## VirtualNetworkGatewayNatRule
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VirtualNetworkGatewayNatRuleProperties](#virtualnetworkgatewaynatruleproperties): Parameters for VirtualNetworkGatewayNatRule.
* **type**: string (ReadOnly): Resource type.

## VirtualNetworkGatewayNatRuleProperties
### Properties
* **externalMappings**: [VpnNatRuleMapping](#vpnnatrulemapping)[]: The private IP address external mapping for NAT.
* **internalMappings**: [VpnNatRuleMapping](#vpnnatrulemapping)[]: The private IP address internal mapping for NAT.
* **ipConfigurationId**: string: The IP Configuration ID this NAT rule applies to.
* **mode**: 'EgressSnat' | 'IngressSnat' | string: The Source NAT direction of a VPN NAT.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **type**: 'Dynamic' | 'Static' | string: The type of NAT rule for VPN NAT.

## VpnNatRuleMapping
### Properties
* **addressSpace**: string: Address space for Vpn NatRule mapping.

## VirtualNetworkGatewaySku
### Properties
* **capacity**: int (ReadOnly): The capacity.
* **name**: 'Basic' | 'ErGw1AZ' | 'ErGw2AZ' | 'ErGw3AZ' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | 'VpnGw1' | 'VpnGw1AZ' | 'VpnGw2' | 'VpnGw2AZ' | 'VpnGw3' | 'VpnGw3AZ' | 'VpnGw4' | 'VpnGw4AZ' | 'VpnGw5' | 'VpnGw5AZ' | string: Gateway SKU name.
* **tier**: 'Basic' | 'ErGw1AZ' | 'ErGw2AZ' | 'ErGw3AZ' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | 'VpnGw1' | 'VpnGw1AZ' | 'VpnGw2' | 'VpnGw2AZ' | 'VpnGw3' | 'VpnGw3AZ' | 'VpnGw4' | 'VpnGw4AZ' | 'VpnGw5' | 'VpnGw5AZ' | string: Gateway SKU tier.

## VpnClientConfiguration
### Properties
* **aadAudience**: string: The AADAudience property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication.
* **aadIssuer**: string: The AADIssuer property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication.
* **aadTenant**: string: The AADTenant property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication.
* **radiusServerAddress**: string: The radius server address property of the VirtualNetworkGateway resource for vpn client connection.
* **radiusServers**: [RadiusServer](#radiusserver)[]: The radiusServers property for multiple radius server configuration.
* **radiusServerSecret**: string: The radius secret property of the VirtualNetworkGateway resource for vpn client connection.
* **vpnAuthenticationTypes**: 'AAD' | 'Certificate' | 'Radius' | string[]: VPN authentication types for the virtual network gateway..
* **vpnClientAddressPool**: [AddressSpace](#addressspace): AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.
* **vpnClientIpsecPolicies**: [IpsecPolicy](#ipsecpolicy)[]: VpnClientIpsecPolicies for virtual network gateway P2S client.
* **vpnClientProtocols**: 'IkeV2' | 'OpenVPN' | 'SSTP' | string[]: VpnClientProtocols for Virtual network gateway.
* **vpnClientRevokedCertificates**: [VpnClientRevokedCertificate](#vpnclientrevokedcertificate)[]: VpnClientRevokedCertificate for Virtual network gateway.
* **vpnClientRootCertificates**: [VpnClientRootCertificate](#vpnclientrootcertificate)[]: VpnClientRootCertificate for virtual network gateway.

## RadiusServer
### Properties
* **radiusServerAddress**: string (Required): The address of this radius server.
* **radiusServerScore**: int: The initial score assigned to this radius server.
* **radiusServerSecret**: string: The secret used for this radius server.

## VpnClientRevokedCertificate
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VpnClientRevokedCertificatePropertiesFormat](#vpnclientrevokedcertificatepropertiesformat): Properties of the revoked VPN client certificate of virtual network gateway.

## VpnClientRevokedCertificatePropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **thumbprint**: string: The revoked VPN client certificate thumbprint.

## VpnClientRootCertificate
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VpnClientRootCertificatePropertiesFormat](#vpnclientrootcertificatepropertiesformat) (Required): Properties of SSL certificates of application gateway.

## VpnClientRootCertificatePropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **publicCertData**: string (Required): The certificate public data.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CustomIpPrefixPropertiesFormat
### Properties
* **authorizationMessage**: string: Authorization message for WAN validation.
* **childCustomIpPrefixes**: [CustomIpPrefix](#customipprefix)[] (ReadOnly): The list of all Children for IPv6 /48 CustomIpPrefix.
* **cidr**: string: The prefix range in CIDR notation. Should include the start address and the prefix length.
* **commissionedState**: 'Commissioned' | 'Commissioning' | 'Decommissioning' | 'Deprovisioning' | 'Provisioned' | 'Provisioning' | string: The commissioned state of the Custom IP Prefix.
* **customIpPrefixParent**: [CustomIpPrefix](#customipprefix): Custom IP prefix resource.
* **failedReason**: string (ReadOnly): The reason why resource is in failed state.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **publicIpPrefixes**: [SubResource](#subresource)[] (ReadOnly): The list of all referenced PublicIpPrefixes.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the custom IP prefix resource.
* **signedMessage**: string: Signed message for WAN validation.

## CustomIpPrefix
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): ExtendedLocation complex type.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [CustomIpPrefixPropertiesFormat](#customipprefixpropertiesformat): Custom IP prefix properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.
* **zones**: string[]: A list of availability zones denoting the IP allocated for the resource needs to come from.

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
* **protocolCustomSettings**: [ProtocolCustomSettingsFormat](#protocolcustomsettingsformat)[]: The protocol-specific DDoS policy customization parameters.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **publicIPAddresses**: [SubResource](#subresource)[] (ReadOnly): The list of public IPs associated with the DDoS custom policy resource. This list is read-only.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the DDoS custom policy resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.

## ProtocolCustomSettingsFormat
### Properties
* **protocol**: 'Syn' | 'Tcp' | 'Udp' | string: The protocol for which the DDoS protection policy is being customized.
* **sourceRateOverride**: string: The customized DDoS protection source rate.
* **triggerRateOverride**: string: The customized DDoS protection trigger rate.
* **triggerSensitivityOverride**: 'Default' | 'High' | 'Low' | 'Relaxed' | string: The customized DDoS protection trigger rate sensitivity degrees. High: Trigger rate set with most sensitivity w.r.t. normal traffic. Default: Trigger rate set with moderate sensitivity w.r.t. normal traffic. Low: Trigger rate set with less sensitivity w.r.t. normal traffic. Relaxed: Trigger rate set with least sensitivity w.r.t. normal traffic.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DdosProtectionPlanPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the DDoS protection plan resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
* **virtualNetworks**: [SubResource](#subresource)[] (ReadOnly): The list of virtual networks associated with the DDoS protection plan resource. This list is read-only.

## DdosProtectionPlanTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DscpConfigurationPropertiesFormat
### Properties
* **associatedNetworkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly): Associated Network Interfaces to the DSCP Configuration.
* **destinationIpRanges**: [QosIpRange](#qosiprange)[]: Destination IP ranges.
* **destinationPortRanges**: [QosPortRange](#qosportrange)[]: Destination port ranges.
* **markings**: int[]: List of markings to be used in the configuration.
* **protocol**: 'Ah' | 'All' | 'DoNotUse' | 'Esp' | 'Gre' | 'Icmp' | 'Tcp' | 'Udp' | 'Vxlan' | string: RNM supported protocol types.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **qosCollectionId**: string (ReadOnly): Qos Collection ID generated by RNM.
* **qosDefinitionCollection**: [QosDefinition](#qosdefinition)[]: QoS object definitions
* **resourceGuid**: string (ReadOnly): The resource GUID property of the DSCP Configuration resource.
* **sourceIpRanges**: [QosIpRange](#qosiprange)[]: Source IP ranges.
* **sourcePortRanges**: [QosPortRange](#qosportrange)[]: Sources port ranges.

## QosIpRange
### Properties
* **endIP**: string: End IP Address.
* **startIP**: string: Start IP Address.

## QosPortRange
### Properties
* **end**: int: Qos Port Range end.
* **start**: int: Qos Port Range start.

## QosDefinition
### Properties
* **destinationIpRanges**: [QosIpRange](#qosiprange)[]: Destination IP ranges.
* **destinationPortRanges**: [QosPortRange](#qosportrange)[]: Destination port ranges.
* **markings**: int[]: List of markings to be used in the configuration.
* **protocol**: 'Ah' | 'All' | 'DoNotUse' | 'Esp' | 'Gre' | 'Icmp' | 'Tcp' | 'Udp' | 'Vxlan' | string: RNM supported protocol types.
* **sourceIpRanges**: [QosIpRange](#qosiprange)[]: Source IP ranges.
* **sourcePortRanges**: [QosPortRange](#qosportrange)[]: Sources port ranges.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExpressRouteCircuitPropertiesFormat
### Properties
* **allowClassicOperations**: bool: Allow classic operations.
* **authorizations**: [ExpressRouteCircuitAuthorization](#expressroutecircuitauthorization)[]: The list of authorizations.
* **bandwidthInGbps**: int: The bandwidth of the circuit when the circuit is provisioned on an ExpressRoutePort resource.
* **circuitProvisioningState**: string: The CircuitProvisioningState state of the resource.
* **expressRoutePort**: [SubResource](#subresource): Reference to another subresource.
* **gatewayManagerEtag**: string: The GatewayManager Etag.
* **globalReachEnabled**: bool: Flag denoting global reach status.
* **peerings**: [ExpressRouteCircuitPeering](#expressroutecircuitpeering)[]: The list of peerings.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **serviceKey**: string: The ServiceKey.
* **serviceProviderNotes**: string: The ServiceProviderNotes.
* **serviceProviderProperties**: [ExpressRouteCircuitServiceProviderProperties](#expressroutecircuitserviceproviderproperties): Contains ServiceProviderProperties in an ExpressRouteCircuit.
* **serviceProviderProvisioningState**: 'Deprovisioning' | 'NotProvisioned' | 'Provisioned' | 'Provisioning' | string: The ServiceProviderProvisioningState state of the resource.
* **stag**: int (ReadOnly): The identifier of the circuit traffic. Outer tag for QinQ encapsulation.

## ExpressRouteCircuitAuthorization
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [AuthorizationPropertiesFormat](#authorizationpropertiesformat): Properties of ExpressRouteCircuitAuthorization.
* **type**: string (ReadOnly): Type of the resource.

## AuthorizationPropertiesFormat
### Properties
* **authorizationKey**: string: The authorization key.
* **authorizationUseStatus**: 'Available' | 'InUse' | string: The authorization use status.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## ExpressRouteCircuitPeering
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ExpressRouteCircuitPeeringPropertiesFormat](#expressroutecircuitpeeringpropertiesformat): Properties of the express route circuit peering.
* **type**: string (ReadOnly): Type of the resource.

## ExpressRouteCircuitPeeringPropertiesFormat
### Properties
* **azureASN**: int: The Azure ASN.
* **connections**: [ExpressRouteCircuitConnection](#expressroutecircuitconnection)[]: The list of circuit connections associated with Azure Private Peering for this circuit.
* **expressRouteConnection**: [ExpressRouteConnectionId](#expressrouteconnectionid): The ID of the ExpressRouteConnection.
* **gatewayManagerEtag**: string: The GatewayManager Etag.
* **ipv6PeeringConfig**: [Ipv6ExpressRouteCircuitPeeringConfig](#ipv6expressroutecircuitpeeringconfig): Contains IPv6 peering config.
* **lastModifiedBy**: string (ReadOnly): Who was the last to modify the peering.
* **microsoftPeeringConfig**: [ExpressRouteCircuitPeeringConfig](#expressroutecircuitpeeringconfig): Specifies the peering configuration.
* **peerASN**: int: The peer ASN.
* **peeredConnections**: [PeerExpressRouteCircuitConnection](#peerexpressroutecircuitconnection)[] (ReadOnly): The list of peered circuit connections associated with Azure Private Peering for this circuit.
* **peeringType**: 'AzurePrivatePeering' | 'AzurePublicPeering' | 'MicrosoftPeering' | string: The peering type.
* **primaryAzurePort**: string: The primary port.
* **primaryPeerAddressPrefix**: string: The primary address prefix.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **routeFilter**: [SubResource](#subresource): Reference to another subresource.
* **secondaryAzurePort**: string: The secondary port.
* **secondaryPeerAddressPrefix**: string: The secondary address prefix.
* **sharedKey**: string: The shared key.
* **state**: 'Disabled' | 'Enabled' | string: The state of peering.
* **stats**: [ExpressRouteCircuitStats](#expressroutecircuitstats): Contains stats associated with the peering.
* **vlanId**: int: The VLAN ID.

## ExpressRouteCircuitConnection
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ExpressRouteCircuitConnectionPropertiesFormat](#expressroutecircuitconnectionpropertiesformat): Properties of the express route circuit connection.
* **type**: string (ReadOnly): Type of the resource.

## ExpressRouteCircuitConnectionPropertiesFormat
### Properties
* **addressPrefix**: string: /29 IP address space to carve out Customer addresses for tunnels.
* **authorizationKey**: string: The authorization key.
* **circuitConnectionStatus**: 'Connected' | 'Connecting' | 'Disconnected' | string (ReadOnly): Express Route Circuit connection state.
* **expressRouteCircuitPeering**: [SubResource](#subresource): Reference to another subresource.
* **ipv6CircuitConnectionConfig**: [Ipv6CircuitConnectionConfig](#ipv6circuitconnectionconfig): IPv6 Circuit Connection properties for global reach.
* **peerExpressRouteCircuitPeering**: [SubResource](#subresource): Reference to another subresource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## Ipv6CircuitConnectionConfig
### Properties
* **addressPrefix**: string: /125 IP address space to carve out customer addresses for global reach.
* **circuitConnectionStatus**: 'Connected' | 'Connecting' | 'Disconnected' | string (ReadOnly): Express Route Circuit connection state.

## ExpressRouteConnectionId
### Properties
* **id**: string (ReadOnly): The ID of the ExpressRouteConnection.

## Ipv6ExpressRouteCircuitPeeringConfig
### Properties
* **microsoftPeeringConfig**: [ExpressRouteCircuitPeeringConfig](#expressroutecircuitpeeringconfig): Specifies the peering configuration.
* **primaryPeerAddressPrefix**: string: The primary address prefix.
* **routeFilter**: [SubResource](#subresource): Reference to another subresource.
* **secondaryPeerAddressPrefix**: string: The secondary address prefix.
* **state**: 'Disabled' | 'Enabled' | string: The state of peering.

## ExpressRouteCircuitPeeringConfig
### Properties
* **advertisedCommunities**: string[]: The communities of bgp peering. Specified for microsoft peering.
* **advertisedPublicPrefixes**: string[]: The reference to AdvertisedPublicPrefixes.
* **advertisedPublicPrefixesState**: 'Configured' | 'Configuring' | 'NotConfigured' | 'ValidationNeeded' | string (ReadOnly): The advertised public prefix state of the Peering resource.
* **customerASN**: int: The CustomerASN of the peering.
* **legacyMode**: int: The legacy mode of the peering.
* **routingRegistryName**: string: The RoutingRegistryName of the configuration.

## PeerExpressRouteCircuitConnection
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [PeerExpressRouteCircuitConnectionPropertiesFormat](#peerexpressroutecircuitconnectionpropertiesformat): Properties of the peer express route circuit connection.
* **type**: string (ReadOnly): Type of the resource.

## PeerExpressRouteCircuitConnectionPropertiesFormat
### Properties
* **addressPrefix**: string: /29 IP address space to carve out Customer addresses for tunnels.
* **authResourceGuid**: string: The resource guid of the authorization used for the express route circuit connection.
* **circuitConnectionStatus**: 'Connected' | 'Connecting' | 'Disconnected' | string (ReadOnly): Express Route Circuit connection state.
* **connectionName**: string: The name of the express route circuit connection resource.
* **expressRouteCircuitPeering**: [SubResource](#subresource): Reference to another subresource.
* **peerExpressRouteCircuitPeering**: [SubResource](#subresource): Reference to another subresource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## ExpressRouteCircuitStats
### Properties
* **primarybytesIn**: int: The Primary BytesIn of the peering.
* **primarybytesOut**: int: The primary BytesOut of the peering.
* **secondarybytesIn**: int: The secondary BytesIn of the peering.
* **secondarybytesOut**: int: The secondary BytesOut of the peering.

## ExpressRouteCircuitServiceProviderProperties
### Properties
* **bandwidthInMbps**: int: The BandwidthInMbps.
* **peeringLocation**: string: The peering location.
* **serviceProviderName**: string: The serviceProviderName.

## ExpressRouteCircuitSku
### Properties
* **family**: 'MeteredData' | 'UnlimitedData' | string: The family of the SKU.
* **name**: string: The name of the SKU.
* **tier**: 'Basic' | 'Local' | 'Premium' | 'Standard' | string: The tier of the SKU.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExpressRouteCrossConnectionProperties
### Properties
* **bandwidthInMbps**: int (ReadOnly): The circuit bandwidth In Mbps.
* **expressRouteCircuit**: [ExpressRouteCircuitReference](#expressroutecircuitreference): Reference to an express route circuit.
* **peeringLocation**: string (ReadOnly): The peering location of the ExpressRoute circuit.
* **peerings**: [ExpressRouteCrossConnectionPeering](#expressroutecrossconnectionpeering)[]: The list of peerings.
* **primaryAzurePort**: string (ReadOnly): The name of the primary port.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **secondaryAzurePort**: string (ReadOnly): The name of the secondary port.
* **serviceProviderNotes**: string: Additional read only notes set by the connectivity provider.
* **serviceProviderProvisioningState**: 'Deprovisioning' | 'NotProvisioned' | 'Provisioned' | 'Provisioning' | string: The ServiceProviderProvisioningState state of the resource.
* **sTag**: int (ReadOnly): The identifier of the circuit traffic.

## ExpressRouteCircuitReference
### Properties
* **id**: string: Corresponding Express Route Circuit Id.

## ExpressRouteCrossConnectionPeering
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ExpressRouteCrossConnectionPeeringProperties](#expressroutecrossconnectionpeeringproperties): Properties of express route cross connection peering.

## ExpressRouteCrossConnectionPeeringProperties
### Properties
* **azureASN**: int (ReadOnly): The Azure ASN.
* **gatewayManagerEtag**: string: The GatewayManager Etag.
* **ipv6PeeringConfig**: [Ipv6ExpressRouteCircuitPeeringConfig](#ipv6expressroutecircuitpeeringconfig): Contains IPv6 peering config.
* **lastModifiedBy**: string (ReadOnly): Who was the last to modify the peering.
* **microsoftPeeringConfig**: [ExpressRouteCircuitPeeringConfig](#expressroutecircuitpeeringconfig): Specifies the peering configuration.
* **peerASN**: int: The peer ASN.
* **peeringType**: 'AzurePrivatePeering' | 'AzurePublicPeering' | 'MicrosoftPeering' | string: The peering type.
* **primaryAzurePort**: string (ReadOnly): The primary port.
* **primaryPeerAddressPrefix**: string: The primary address prefix.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **secondaryAzurePort**: string (ReadOnly): The secondary port.
* **secondaryPeerAddressPrefix**: string: The secondary address prefix.
* **sharedKey**: string: The shared key.
* **state**: 'Disabled' | 'Enabled' | string: The state of peering.
* **vlanId**: int: The VLAN ID.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExpressRouteGatewayProperties
### Properties
* **autoScaleConfiguration**: [ExpressRouteGatewayPropertiesAutoScaleConfiguration](#expressroutegatewaypropertiesautoscaleconfiguration): Configuration for auto scaling.
* **expressRouteConnections**: [ExpressRouteConnection](#expressrouteconnection)[] (ReadOnly): List of ExpressRoute connections to the ExpressRoute gateway.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **virtualHub**: [VirtualHubId](#virtualhubid) (Required): Virtual Hub identifier.

## ExpressRouteGatewayPropertiesAutoScaleConfiguration
### Properties
* **bounds**: [ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds](#expressroutegatewaypropertiesautoscaleconfigurationbounds): Minimum and maximum number of scale units to deploy.

## ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds
### Properties
* **max**: int: Maximum number of scale units deployed for ExpressRoute gateway.
* **min**: int: Minimum number of scale units deployed for ExpressRoute gateway.

## ExpressRouteConnection
### Properties
* **id**: string: Resource ID.
* **name**: string (Required): The name of the resource.
* **properties**: [ExpressRouteConnectionProperties](#expressrouteconnectionproperties): Properties of the ExpressRouteConnection subresource.

## ExpressRouteConnectionProperties
### Properties
* **authorizationKey**: string: Authorization key to establish the connection.
* **enableInternetSecurity**: bool: Enable internet security.
* **expressRouteCircuitPeering**: [ExpressRouteCircuitPeeringId](#expressroutecircuitpeeringid) (Required): ExpressRoute circuit peering identifier.
* **expressRouteGatewayBypass**: bool: Enable FastPath to vWan Firewall hub.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **routingConfiguration**: [RoutingConfiguration](#routingconfiguration): Routing Configuration indicating the associated and propagated route tables for this connection.
* **routingWeight**: int: The routing weight associated to the connection.

## ExpressRouteCircuitPeeringId
### Properties
* **id**: string: The ID of the ExpressRoute circuit peering.

## RoutingConfiguration
### Properties
* **associatedRouteTable**: [SubResource](#subresource): Reference to another subresource.
* **propagatedRouteTables**: [PropagatedRouteTable](#propagatedroutetable): The list of RouteTables to advertise the routes to.
* **vnetRoutes**: [VnetRoute](#vnetroute): List of routes that control routing from VirtualHub into a virtual network connection.

## PropagatedRouteTable
### Properties
* **ids**: [SubResource](#subresource)[]: The list of resource ids of all the RouteTables.
* **labels**: string[]: The list of labels.

## VnetRoute
### Properties
* **bgpConnections**: [SubResource](#subresource)[] (ReadOnly): The list of references to HubBgpConnection objects.
* **staticRoutes**: [StaticRoute](#staticroute)[]: List of all Static Routes.

## StaticRoute
### Properties
* **addressPrefixes**: string[]: List of all address prefixes.
* **name**: string: The name of the StaticRoute that is unique within a VnetRoute.
* **nextHopIpAddress**: string: The ip address of the next hop.

## VirtualHubId
### Properties
* **id**: string: The resource URI for the Virtual Hub where the ExpressRoute gateway is or will be deployed. The Virtual Hub resource and the ExpressRoute gateway resource reside in the same subscription.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExpressRoutePortPropertiesFormat
### Properties
* **allocationDate**: string (ReadOnly): Date of the physical port allocation to be used in Letter of Authorization.
* **bandwidthInGbps**: int: Bandwidth of procured ports in Gbps.
* **circuits**: [SubResource](#subresource)[] (ReadOnly): Reference the ExpressRoute circuit(s) that are provisioned on this ExpressRoutePort resource.
* **encapsulation**: 'Dot1Q' | 'QinQ' | string: Encapsulation method on physical ports.
* **etherType**: string (ReadOnly): Ether type of the physical port.
* **links**: [ExpressRouteLink](#expressroutelink)[]: The set of physical links of the ExpressRoutePort resource.
* **mtu**: string (ReadOnly): Maximum transmission unit of the physical port pair(s).
* **peeringLocation**: string: The name of the peering location that the ExpressRoutePort is mapped to physically.
* **provisionedBandwidthInGbps**: int (ReadOnly): Aggregate Gbps of associated circuit bandwidths.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the express route port resource.

## ExpressRouteLink
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of child port resource that is unique among child port resources of the parent.
* **properties**: [ExpressRouteLinkPropertiesFormat](#expressroutelinkpropertiesformat): Properties specific to ExpressRouteLink resources.

## ExpressRouteLinkPropertiesFormat
### Properties
* **adminState**: 'Disabled' | 'Enabled' | string: Administrative state of the physical port.
* **connectorType**: 'LC' | 'SC' | string (ReadOnly): Physical fiber port type.
* **interfaceName**: string (ReadOnly): Name of Azure router interface.
* **macSecConfig**: [ExpressRouteLinkMacSecConfig](#expressroutelinkmacsecconfig): ExpressRouteLink Mac Security Configuration.
* **patchPanelId**: string (ReadOnly): Mapping between physical port to patch panel port.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **rackId**: string (ReadOnly): Mapping of physical patch panel to rack.
* **routerName**: string (ReadOnly): Name of Azure router associated with physical port.

## ExpressRouteLinkMacSecConfig
### Properties
* **cakSecretIdentifier**: string: Keyvault Secret Identifier URL containing Mac security CAK key.
* **cipher**: 'GcmAes128' | 'GcmAes256' | 'GcmAesXpn128' | 'GcmAesXpn256' | string: Mac security cipher.
* **cknSecretIdentifier**: string: Keyvault Secret Identifier URL containing Mac security CKN key.
* **sciState**: 'Disabled' | 'Enabled' | string: Sci mode enabled/disabled.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExpressRoutePortsLocationPropertiesFormat
### Properties
* **address**: string (ReadOnly): Address of peering location.
* **availableBandwidths**: [ExpressRoutePortsLocationBandwidths](#expressrouteportslocationbandwidths)[] (ReadOnly): The inventory of available ExpressRoutePort bandwidths.
* **contact**: string (ReadOnly): Contact details of peering locations.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## ExpressRoutePortsLocationBandwidths
### Properties
* **offerName**: string (ReadOnly): Bandwidth descriptive name.
* **valueInGbps**: int (ReadOnly): Bandwidth value in Gbps.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FirewallPolicyPropertiesFormat
### Properties
* **basePolicy**: [SubResource](#subresource): Reference to another subresource.
* **childPolicies**: [SubResource](#subresource)[] (ReadOnly): List of references to Child Firewall Policies.
* **dnsSettings**: [DnsSettings](#dnssettings): DNS Proxy Settings in Firewall Policy.
* **explicitProxySettings**: [ExplicitProxySettings](#explicitproxysettings): Explicit Proxy Settings in Firewall Policy.
* **firewalls**: [SubResource](#subresource)[] (ReadOnly): List of references to Azure Firewalls that this Firewall Policy is associated with.
* **insights**: [FirewallPolicyInsights](#firewallpolicyinsights): Firewall Policy Insights.
* **intrusionDetection**: [FirewallPolicyIntrusionDetection](#firewallpolicyintrusiondetection): Configuration for intrusion detection mode and rules.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **ruleCollectionGroups**: [SubResource](#subresource)[] (ReadOnly): List of references to FirewallPolicyRuleCollectionGroups.
* **sku**: [FirewallPolicySku](#firewallpolicysku): SKU of Firewall policy.
* **snat**: [FirewallPolicySnat](#firewallpolicysnat): The private IP addresses/IP ranges to which traffic will not be SNAT.
* **sql**: [FirewallPolicySQL](#firewallpolicysql): SQL Settings in Firewall Policy.
* **threatIntelMode**: 'Alert' | 'Deny' | 'Off' | string: The operation mode for Threat Intel.
* **threatIntelWhitelist**: [FirewallPolicyThreatIntelWhitelist](#firewallpolicythreatintelwhitelist): ThreatIntel Whitelist for Firewall Policy.
* **transportSecurity**: [FirewallPolicyTransportSecurity](#firewallpolicytransportsecurity): Configuration needed to perform TLS termination & initiation.

## DnsSettings
### Properties
* **enableProxy**: bool: Enable DNS Proxy on Firewalls attached to the Firewall Policy.
* **requireProxyForNetworkRules**: bool: FQDNs in Network Rules are supported when set to true.
* **servers**: string[]: List of Custom DNS Servers.

## ExplicitProxySettings
### Properties
* **enableExplicitProxy**: bool: When set to true, explicit proxy mode is enabled.
* **httpPort**: int: Port number for explicit proxy http protocol, cannot be greater than 64000.
* **httpsPort**: int: Port number for explicit proxy https protocol, cannot be greater than 64000.
* **pacFile**: string: SAS URL for PAC file.
* **pacFilePort**: int: Port number for firewall to serve PAC file.

## FirewallPolicyInsights
### Properties
* **isEnabled**: bool: A flag to indicate if the insights are enabled on the policy.
* **logAnalyticsResources**: [FirewallPolicyLogAnalyticsResources](#firewallpolicyloganalyticsresources): Log Analytics Resources for Firewall Policy Insights.
* **retentionDays**: int: Number of days the insights should be enabled on the policy.

## FirewallPolicyLogAnalyticsResources
### Properties
* **defaultWorkspaceId**: [SubResource](#subresource): Reference to another subresource.
* **workspaces**: [FirewallPolicyLogAnalyticsWorkspace](#firewallpolicyloganalyticsworkspace)[]: List of workspaces for Firewall Policy Insights.

## FirewallPolicyLogAnalyticsWorkspace
### Properties
* **region**: string: Region to configure the Workspace.
* **workspaceId**: [SubResource](#subresource): Reference to another subresource.

## FirewallPolicyIntrusionDetection
### Properties
* **configuration**: [FirewallPolicyIntrusionDetectionConfiguration](#firewallpolicyintrusiondetectionconfiguration): The operation for configuring intrusion detection.
* **mode**: 'Alert' | 'Deny' | 'Off' | string: Possible state values.

## FirewallPolicyIntrusionDetectionConfiguration
### Properties
* **bypassTrafficSettings**: [FirewallPolicyIntrusionDetectionBypassTrafficSpecifications](#firewallpolicyintrusiondetectionbypasstrafficspecifications)[]: List of rules for traffic to bypass.
* **signatureOverrides**: [FirewallPolicyIntrusionDetectionSignatureSpecification](#firewallpolicyintrusiondetectionsignaturespecification)[]: List of specific signatures states.

## FirewallPolicyIntrusionDetectionBypassTrafficSpecifications
### Properties
* **description**: string: Description of the bypass traffic rule.
* **destinationAddresses**: string[]: List of destination IP addresses or ranges for this rule.
* **destinationIpGroups**: string[]: List of destination IpGroups for this rule.
* **destinationPorts**: string[]: List of destination ports or ranges.
* **name**: string: Name of the bypass traffic rule.
* **protocol**: 'ANY' | 'ICMP' | 'TCP' | 'UDP' | string: Possible intrusion detection bypass traffic protocols.
* **sourceAddresses**: string[]: List of source IP addresses or ranges for this rule.
* **sourceIpGroups**: string[]: List of source IpGroups for this rule.

## FirewallPolicyIntrusionDetectionSignatureSpecification
### Properties
* **id**: string: Signature id.
* **mode**: 'Alert' | 'Deny' | 'Off' | string: Possible state values.

## FirewallPolicySku
### Properties
* **tier**: 'Premium' | 'Standard' | string: Tier of Firewall Policy.

## FirewallPolicySnat
### Properties
* **privateRanges**: string[]: List of private IP addresses/IP address ranges to not be SNAT.

## FirewallPolicySQL
### Properties
* **allowSqlRedirect**: bool: A flag to indicate if SQL Redirect traffic filtering is enabled. Turning on the flag requires no rule using port 11000-11999.

## FirewallPolicyThreatIntelWhitelist
### Properties
* **fqdns**: string[]: List of FQDNs for the ThreatIntel Whitelist.
* **ipAddresses**: string[]: List of IP addresses for the ThreatIntel Whitelist.

## FirewallPolicyTransportSecurity
### Properties
* **certificateAuthority**: [FirewallPolicyCertificateAuthority](#firewallpolicycertificateauthority): Trusted Root certificates properties for tls.

## FirewallPolicyCertificateAuthority
### Properties
* **keyVaultSecretId**: string: Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
* **name**: string: Name of the CA certificate.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FirewallPolicyRuleCollectionGroupProperties
### Properties
* **priority**: int: Priority of the Firewall Policy Rule Collection Group resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **ruleCollections**: [FirewallPolicyRuleCollection](#firewallpolicyrulecollection)[]: Group of Firewall Policy rule collections.

## FirewallPolicyRuleCollection
* **Discriminator**: ruleCollectionType

### Base Properties
* **name**: string: The name of the rule collection.
* **priority**: int: Priority of the Firewall Policy Rule Collection resource.
### FirewallPolicyFilterRuleCollection
#### Properties
* **action**: [FirewallPolicyFilterRuleCollectionAction](#firewallpolicyfilterrulecollectionaction): Properties of the FirewallPolicyFilterRuleCollectionAction.
* **ruleCollectionType**: 'FirewallPolicyFilterRuleCollection' (Required): The type of the rule collection.
* **rules**: [FirewallPolicyRule](#firewallpolicyrule)[]: List of rules included in a rule collection.

### FirewallPolicyNatRuleCollection
#### Properties
* **action**: [FirewallPolicyNatRuleCollectionAction](#firewallpolicynatrulecollectionaction): Properties of the FirewallPolicyNatRuleCollectionAction.
* **ruleCollectionType**: 'FirewallPolicyNatRuleCollection' (Required): The type of the rule collection.
* **rules**: [FirewallPolicyRule](#firewallpolicyrule)[]: List of rules included in a rule collection.


## FirewallPolicyFilterRuleCollectionAction
### Properties
* **type**: 'Allow' | 'Deny' | string: The action type of a rule.

## FirewallPolicyRule
* **Discriminator**: ruleType

### Base Properties
* **description**: string: Description of the rule.
* **name**: string: Name of the rule.
### ApplicationRule
#### Properties
* **destinationAddresses**: string[]: List of destination IP addresses or Service Tags.
* **fqdnTags**: string[]: List of FQDN Tags for this rule.
* **protocols**: [FirewallPolicyRuleApplicationProtocol](#firewallpolicyruleapplicationprotocol)[]: Array of Application Protocols.
* **ruleType**: 'ApplicationRule' (Required): Rule Type.
* **sourceAddresses**: string[]: List of source IP addresses for this rule.
* **sourceIpGroups**: string[]: List of source IpGroups for this rule.
* **targetFqdns**: string[]: List of FQDNs for this rule.
* **targetUrls**: string[]: List of Urls for this rule condition.
* **terminateTLS**: bool: Terminate TLS connections for this rule.
* **webCategories**: string[]: List of destination azure web categories.

### NatRule
#### Properties
* **destinationAddresses**: string[]: List of destination IP addresses or Service Tags.
* **destinationPorts**: string[]: List of destination ports.
* **ipProtocols**: 'Any' | 'ICMP' | 'TCP' | 'UDP' | string[]: Array of FirewallPolicyRuleNetworkProtocols.
* **ruleType**: 'NatRule' (Required): Rule Type.
* **sourceAddresses**: string[]: List of source IP addresses for this rule.
* **sourceIpGroups**: string[]: List of source IpGroups for this rule.
* **translatedAddress**: string: The translated address for this NAT rule.
* **translatedFqdn**: string: The translated FQDN for this NAT rule.
* **translatedPort**: string: The translated port for this NAT rule.

### NetworkRule
#### Properties
* **destinationAddresses**: string[]: List of destination IP addresses or Service Tags.
* **destinationFqdns**: string[]: List of destination FQDNs.
* **destinationIpGroups**: string[]: List of destination IpGroups for this rule.
* **destinationPorts**: string[]: List of destination ports.
* **ipProtocols**: 'Any' | 'ICMP' | 'TCP' | 'UDP' | string[]: Array of FirewallPolicyRuleNetworkProtocols.
* **ruleType**: 'NetworkRule' (Required): Rule Type.
* **sourceAddresses**: string[]: List of source IP addresses for this rule.
* **sourceIpGroups**: string[]: List of source IpGroups for this rule.


## FirewallPolicyRuleApplicationProtocol
### Properties
* **port**: int: Port number for the protocol, cannot be greater than 64000.
* **protocolType**: 'Http' | 'Https' | string: The application protocol type of a Rule.

## FirewallPolicyNatRuleCollectionAction
### Properties
* **type**: 'DNAT' | string: The action type of a rule.

## IpAllocationPropertiesFormat
### Properties
* **allocationTags**: [IpAllocationPropertiesFormatAllocationTags](#ipallocationpropertiesformatallocationtags): IpAllocation tags.
* **ipamAllocationId**: string: The IPAM allocation ID.
* **prefix**: string: The address prefix for the IpAllocation.
* **prefixLength**: int: The address prefix length for the IpAllocation.
* **prefixType**: 'IPv4' | 'IPv6' | string: IP address version.
* **subnet**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.
* **type**: 'Hypernet' | 'Undefined' | string: IpAllocation type.
* **virtualNetwork**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.

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
* **firewallPolicies**: [SubResource](#subresource)[] (ReadOnly): List of references to Firewall Policies resources that this IpGroups is associated with.
* **firewalls**: [SubResource](#subresource)[] (ReadOnly): List of references to Firewall resources that this IpGroups is associated with.
* **ipAddresses**: string[]: IpAddresses/IpAddressPrefixes in the IpGroups resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LoadBalancerPropertiesFormat
### Properties
* **backendAddressPools**: [BackendAddressPool](#backendaddresspool)[]: Collection of backend address pools used by a load balancer.
* **frontendIPConfigurations**: [FrontendIPConfiguration](#frontendipconfiguration)[]: Object representing the frontend IPs to be used for the load balancer.
* **inboundNatPools**: [InboundNatPool](#inboundnatpool)[]: Defines an external port range for inbound NAT to a single backend port on NICs associated with a load balancer. Inbound NAT rules are created automatically for each NIC associated with the Load Balancer using an external port from this range. Defining an Inbound NAT pool on your Load Balancer is mutually exclusive with defining inbound Nat rules. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an inbound NAT pool. They have to reference individual inbound NAT rules.
* **inboundNatRules**: [InboundNatRule](#inboundnatrule)[]: Collection of inbound NAT Rules used by a load balancer. Defining inbound NAT rules on your load balancer is mutually exclusive with defining an inbound NAT pool. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an Inbound NAT pool. They have to reference individual inbound NAT rules.
* **loadBalancingRules**: [LoadBalancingRule](#loadbalancingrule)[]: Object collection representing the load balancing rules Gets the provisioning.
* **outboundRules**: [OutboundRule](#outboundrule)[]: The outbound rules.
* **probes**: [Probe](#probe)[]: Collection of probe objects used in the load balancer.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the load balancer resource.

## InboundNatPool
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within the set of inbound NAT pools used by the load balancer. This name can be used to access the resource.
* **properties**: [InboundNatPoolPropertiesFormat](#inboundnatpoolpropertiesformat): Properties of Inbound NAT pool.
* **type**: string (ReadOnly): Type of the resource.

## InboundNatPoolPropertiesFormat
### Properties
* **backendPort**: int (Required): The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
* **enableFloatingIP**: bool: Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
* **enableTcpReset**: bool: Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
* **frontendIPConfiguration**: [SubResource](#subresource): Reference to another subresource.
* **frontendPortRangeEnd**: int (Required): The last port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65535.
* **frontendPortRangeStart**: int (Required): The first port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65534.
* **idleTimeoutInMinutes**: int: The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
* **protocol**: 'All' | 'Tcp' | 'Udp' | string (Required): The transport protocol for the endpoint.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## LoadBalancingRule
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within the set of load balancing rules used by the load balancer. This name can be used to access the resource.
* **properties**: [LoadBalancingRulePropertiesFormat](#loadbalancingrulepropertiesformat): Properties of the load balancer.
* **type**: string (ReadOnly): Type of the resource.

## LoadBalancingRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource): Reference to another subresource.
* **backendAddressPools**: [SubResource](#subresource)[]: An array of references to pool of DIPs.
* **backendPort**: int: The port used for internal connections on the endpoint. Acceptable values are between 0 and 65535. Note that value 0 enables "Any Port".
* **disableOutboundSnat**: bool: Configures SNAT for the VMs in the backend pool to use the publicIP address specified in the frontend of the load balancing rule.
* **enableFloatingIP**: bool: Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
* **enableTcpReset**: bool: Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
* **frontendIPConfiguration**: [SubResource](#subresource): Reference to another subresource.
* **frontendPort**: int (Required): The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 0 and 65534. Note that value 0 enables "Any Port".
* **idleTimeoutInMinutes**: int: The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
* **loadDistribution**: 'Default' | 'SourceIP' | 'SourceIPProtocol' | string: The load distribution policy for this rule.
* **probe**: [SubResource](#subresource): Reference to another subresource.
* **protocol**: 'All' | 'Tcp' | 'Udp' | string (Required): The transport protocol for the endpoint.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## OutboundRule
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within the set of outbound rules used by the load balancer. This name can be used to access the resource.
* **properties**: [OutboundRulePropertiesFormat](#outboundrulepropertiesformat): Outbound rule of the load balancer.
* **type**: string (ReadOnly): Type of the resource.

## OutboundRulePropertiesFormat
### Properties
* **allocatedOutboundPorts**: int: The number of outbound ports to be used for NAT.
* **backendAddressPool**: [SubResource](#subresource) (Required): Reference to another subresource.
* **enableTcpReset**: bool: Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
* **frontendIPConfigurations**: [SubResource](#subresource)[] (Required): The Frontend IP addresses of the load balancer.
* **idleTimeoutInMinutes**: int: The timeout for the TCP idle connection.
* **protocol**: 'All' | 'Tcp' | 'Udp' | string (Required): The protocol for the outbound rule in load balancer.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## Probe
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within the set of probes used by the load balancer. This name can be used to access the resource.
* **properties**: [ProbePropertiesFormat](#probepropertiesformat): Load balancer probe resource.
* **type**: string (ReadOnly): Type of the resource.

## ProbePropertiesFormat
### Properties
* **intervalInSeconds**: int: The interval, in seconds, for how frequently to probe the endpoint for health status. Typically, the interval is slightly less than half the allocated timeout period (in seconds) which allows two full probes before taking the instance out of rotation. The default value is 15, the minimum value is 5.
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly): The load balancer rules that use this probe.
* **numberOfProbes**: int: The number of probes where if no response, will result in stopping further traffic from being delivered to the endpoint. This values allows endpoints to be taken out of rotation faster or slower than the typical times used in Azure.
* **port**: int (Required): The port for communicating the probe. Possible values range from 1 to 65535, inclusive.
* **protocol**: 'Http' | 'Https' | 'Tcp' | string (Required): The protocol of the end point. If 'Tcp' is specified, a received ACK is required for the probe to be successful. If 'Http' or 'Https' is specified, a 200 OK response from the specifies URI is required for the probe to be successful.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **requestPath**: string: The URI used for requesting health status from the VM. Path is required if a protocol is set to http. Otherwise, it is not allowed. There is no default value.

## LoadBalancerSku
### Properties
* **name**: 'Basic' | 'Gateway' | 'Standard' | string: Name of a load balancer SKU.
* **tier**: 'Global' | 'Regional' | string: Tier of a load balancer SKU.

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

## NetworkProfilePropertiesFormat
### Properties
* **containerNetworkInterfaceConfigurations**: [ContainerNetworkInterfaceConfiguration](#containernetworkinterfaceconfiguration)[]: List of chid container network interface configurations.
* **containerNetworkInterfaces**: [ContainerNetworkInterface](#containernetworkinterface)[] (ReadOnly): List of child container network interfaces.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the network profile resource.

## ContainerNetworkInterfaceConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource. This name can be used to access the resource.
* **properties**: [ContainerNetworkInterfaceConfigurationPropertiesFormat](#containernetworkinterfaceconfigurationpropertiesformat): Container network interface configuration properties.
* **type**: string (ReadOnly): Sub Resource type.

## ContainerNetworkInterfaceConfigurationPropertiesFormat
### Properties
* **containerNetworkInterfaces**: [SubResource](#subresource)[]: A list of container network interfaces created from this container network interface configuration.
* **ipConfigurations**: [IPConfigurationProfile](#ipconfigurationprofile)[]: A list of ip configurations of the container network interface configuration.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## ContainerNetworkInterface
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource. This name can be used to access the resource.
* **properties**: [ContainerNetworkInterfacePropertiesFormat](#containernetworkinterfacepropertiesformat): Properties of container network interface.
* **type**: string (ReadOnly): Sub Resource type.

## ContainerNetworkInterfacePropertiesFormat
### Properties
* **container**: [Container](#container): Reference to container resource in remote resource provider.
* **containerNetworkInterfaceConfiguration**: [ContainerNetworkInterfaceConfiguration](#containernetworkinterfaceconfiguration) (ReadOnly): Container network interface configuration child resource.
* **ipConfigurations**: [ContainerNetworkInterfaceIpConfiguration](#containernetworkinterfaceipconfiguration)[] (ReadOnly): Reference to the ip configuration on this container nic.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## Container
### Properties
* **id**: string: Resource ID.

## ContainerNetworkInterfaceIpConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **name**: string: The name of the resource. This name can be used to access the resource.
* **properties**: [ContainerNetworkInterfaceIpConfigurationPropertiesFormat](#containernetworkinterfaceipconfigurationpropertiesformat): Properties of the container network interface IP configuration.
* **type**: string (ReadOnly): Sub Resource type.

## ContainerNetworkInterfaceIpConfigurationPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

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
* **addressPrefix**: string (ReadOnly): Address Prefix.
* **bootStrapConfigurationBlobs**: string[]: BootStrapConfigurationBlobs storage URLs.
* **cloudInitConfiguration**: string: CloudInitConfiguration string in plain text.
* **cloudInitConfigurationBlobs**: string[]: CloudInitConfigurationBlob storage URLs.
* **inboundSecurityRules**: [SubResource](#subresource)[] (ReadOnly): List of references to InboundSecurityRules.
* **nvaSku**: [VirtualApplianceSkuProperties](#virtualapplianceskuproperties): Network Virtual Appliance Sku Properties.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **sshPublicKey**: string: Public key for SSH login.
* **virtualApplianceAsn**: int: VirtualAppliance ASN.
* **virtualApplianceNics**: [VirtualApplianceNicProperties](#virtualappliancenicproperties)[] (ReadOnly): List of Virtual Appliance Network Interfaces.
* **virtualApplianceSites**: [SubResource](#subresource)[] (ReadOnly): List of references to VirtualApplianceSite.
* **virtualHub**: [SubResource](#subresource): Reference to another subresource.

## VirtualApplianceSkuProperties
### Properties
* **bundledScaleUnit**: string: Virtual Appliance Scale Unit.
* **marketPlaceVersion**: string: Virtual Appliance Version.
* **vendor**: string: Virtual Appliance Vendor.

## VirtualApplianceNicProperties
### Properties
* **name**: string (ReadOnly): NIC name.
* **privateIpAddress**: string (ReadOnly): Private IP address.
* **publicIpAddress**: string (ReadOnly): Public IP address.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InboundSecurityRuleProperties
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **rules**: [InboundSecurityRules](#inboundsecurityrules)[]: List of allowed rules.

## InboundSecurityRules
### Properties
* **destinationPortRange**: int: NVA port ranges to be opened up. One needs to provide specific ports.
* **protocol**: 'TCP' | 'UDP' | string: Protocol. This should be either TCP or UDP.
* **sourceAddressPrefix**: string: The CIDR or source IP range. Only /30, /31 and /32 Ip ranges are allowed.

## VirtualApplianceSiteProperties
### Properties
* **addressPrefix**: string: Address Prefix.
* **o365Policy**: [Office365PolicyProperties](#office365policyproperties): Network Virtual Appliance Sku Properties.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## Office365PolicyProperties
### Properties
* **breakOutCategories**: [BreakOutCategoryPolicies](#breakoutcategorypolicies): Network Virtual Appliance Sku Properties.

## BreakOutCategoryPolicies
### Properties
* **allow**: bool: Flag to control breakout of o365 allow category.
* **default**: bool: Flag to control breakout of o365 default category.
* **optimize**: bool: Flag to control breakout of o365 optimize category.

## NetworkVirtualApplianceSkuPropertiesFormat
### Properties
* **availableScaleUnits**: [NetworkVirtualApplianceSkuInstances](#networkvirtualapplianceskuinstances)[] (ReadOnly): The list of scale units available.
* **availableVersions**: string[] (ReadOnly): Available Network Virtual Appliance versions.
* **vendor**: string (ReadOnly): Network Virtual Appliance Sku vendor.

## NetworkVirtualApplianceSkuInstances
### Properties
* **instanceCount**: int (ReadOnly): Instance Count.
* **scaleUnit**: string (ReadOnly): Scale Unit.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NetworkWatcherPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConnectionMonitorParameters
### Properties
* **autoStart**: bool: Determines if the connection monitor will start automatically once created.
* **connectionMonitorType**: 'MultiEndpoint' | 'SingleSourceDestination' | string (ReadOnly): Type of connection monitor.
* **destination**: [ConnectionMonitorDestination](#connectionmonitordestination): Describes the destination of connection monitor.
* **endpoints**: [ConnectionMonitorEndpoint](#connectionmonitorendpoint)[]: List of connection monitor endpoints.
* **monitoringIntervalInSeconds**: int: Monitoring interval in seconds.
* **monitoringStatus**: string (ReadOnly): The monitoring status of the connection monitor.
* **notes**: string: Optional notes to be associated with the connection monitor.
* **outputs**: [ConnectionMonitorOutput](#connectionmonitoroutput)[]: List of connection monitor outputs.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **source**: [ConnectionMonitorSource](#connectionmonitorsource): Describes the source of connection monitor.
* **startTime**: string (ReadOnly): The date and time when the connection monitor was started.
* **testConfigurations**: [ConnectionMonitorTestConfiguration](#connectionmonitortestconfiguration)[]: List of connection monitor test configurations.
* **testGroups**: [ConnectionMonitorTestGroup](#connectionmonitortestgroup)[]: List of connection monitor test groups.

## ConnectionMonitorDestination
### Properties
* **address**: string: Address of the connection monitor destination (IP or domain name).
* **port**: int: The destination port used by connection monitor.
* **resourceId**: string: The ID of the resource used as the destination by connection monitor.

## ConnectionMonitorEndpoint
### Properties
* **address**: string: Address of the connection monitor endpoint (IP or domain name).
* **coverageLevel**: 'AboveAverage' | 'Average' | 'BelowAverage' | 'Default' | 'Full' | 'Low' | string: Test coverage for the endpoint.
* **filter**: [ConnectionMonitorEndpointFilter](#connectionmonitorendpointfilter): Describes the connection monitor endpoint filter.
* **name**: string (Required): The name of the connection monitor endpoint.
* **resourceId**: string: Resource ID of the connection monitor endpoint.
* **scope**: [ConnectionMonitorEndpointScope](#connectionmonitorendpointscope): Describes the connection monitor endpoint scope.
* **type**: 'AzureSubnet' | 'AzureVM' | 'AzureVNet' | 'ExternalAddress' | 'MMAWorkspaceMachine' | 'MMAWorkspaceNetwork' | string: The endpoint type.

## ConnectionMonitorEndpointFilter
### Properties
* **items**: [ConnectionMonitorEndpointFilterItem](#connectionmonitorendpointfilteritem)[]: List of items in the filter.
* **type**: 'Include' | string: The behavior of the endpoint filter. Currently only 'Include' is supported.

## ConnectionMonitorEndpointFilterItem
### Properties
* **address**: string: The address of the filter item.
* **type**: 'AgentAddress' | string: The type of item included in the filter. Currently only 'AgentAddress' is supported.

## ConnectionMonitorEndpointScope
### Properties
* **exclude**: [ConnectionMonitorEndpointScopeItem](#connectionmonitorendpointscopeitem)[]: List of items which needs to be excluded from the endpoint scope.
* **include**: [ConnectionMonitorEndpointScopeItem](#connectionmonitorendpointscopeitem)[]: List of items which needs to be included to the endpoint scope.

## ConnectionMonitorEndpointScopeItem
### Properties
* **address**: string: The address of the endpoint item. Supported types are IPv4/IPv6 subnet mask or IPv4/IPv6 IP address.

## ConnectionMonitorOutput
### Properties
* **type**: 'Workspace' | string: Connection monitor output destination type. Currently, only "Workspace" is supported.
* **workspaceSettings**: [ConnectionMonitorWorkspaceSettings](#connectionmonitorworkspacesettings): Describes the settings for producing output into a log analytics workspace.

## ConnectionMonitorWorkspaceSettings
### Properties
* **workspaceResourceId**: string: Log analytics workspace resource ID.

## ConnectionMonitorSource
### Properties
* **port**: int: The source port used by connection monitor.
* **resourceId**: string (Required): The ID of the resource used as the source by connection monitor.

## ConnectionMonitorTestConfiguration
### Properties
* **httpConfiguration**: [ConnectionMonitorHttpConfiguration](#connectionmonitorhttpconfiguration): Describes the HTTP configuration.
* **icmpConfiguration**: [ConnectionMonitorIcmpConfiguration](#connectionmonitoricmpconfiguration): Describes the ICMP configuration.
* **name**: string (Required): The name of the connection monitor test configuration.
* **preferredIPVersion**: 'IPv4' | 'IPv6' | string: The preferred IP version to use in test evaluation. The connection monitor may choose to use a different version depending on other parameters.
* **protocol**: 'Http' | 'Icmp' | 'Tcp' | string (Required): The protocol to use in test evaluation.
* **successThreshold**: [ConnectionMonitorSuccessThreshold](#connectionmonitorsuccessthreshold): Describes the threshold for declaring a test successful.
* **tcpConfiguration**: [ConnectionMonitorTcpConfiguration](#connectionmonitortcpconfiguration): Describes the TCP configuration.
* **testFrequencySec**: int: The frequency of test evaluation, in seconds.

## ConnectionMonitorHttpConfiguration
### Properties
* **method**: 'Get' | 'Post' | string: The HTTP method to use.
* **path**: string: The path component of the URI. For instance, "/dir1/dir2".
* **port**: int: The port to connect to.
* **preferHTTPS**: bool: Value indicating whether HTTPS is preferred over HTTP in cases where the choice is not explicit.
* **requestHeaders**: [HttpHeader](#httpheader)[]: The HTTP headers to transmit with the request.
* **validStatusCodeRanges**: string[]: HTTP status codes to consider successful. For instance, "2xx,301-304,418".

## HttpHeader
### Properties
* **name**: string: The name in HTTP header.
* **value**: string: The value in HTTP header.

## ConnectionMonitorIcmpConfiguration
### Properties
* **disableTraceRoute**: bool: Value indicating whether path evaluation with trace route should be disabled.

## ConnectionMonitorSuccessThreshold
### Properties
* **checksFailedPercent**: int: The maximum percentage of failed checks permitted for a test to evaluate as successful.
* **roundTripTimeMs**: int: The maximum round-trip time in milliseconds permitted for a test to evaluate as successful.

## ConnectionMonitorTcpConfiguration
### Properties
* **destinationPortBehavior**: 'ListenIfAvailable' | 'None' | string: Destination port behavior.
* **disableTraceRoute**: bool: Value indicating whether path evaluation with trace route should be disabled.
* **port**: int: The port to connect to.

## ConnectionMonitorTestGroup
### Properties
* **destinations**: string[] (Required): List of destination endpoint names.
* **disable**: bool: Value indicating whether test group is disabled.
* **name**: string (Required): The name of the connection monitor test group.
* **sources**: string[] (Required): List of source endpoint names.
* **testConfigurations**: string[] (Required): List of test configuration names.

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
* **bytesToCapturePerPacket**: int: Number of bytes captured per packet, the remaining bytes are truncated.
* **filters**: [PacketCaptureFilter](#packetcapturefilter)[]: A list of packet capture filters.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **storageLocation**: [PacketCaptureStorageLocation](#packetcapturestoragelocation) (Required): The storage location for a packet capture session.
* **target**: string (Required): The ID of the targeted resource, only VM is currently supported.
* **timeLimitInSeconds**: int: Maximum duration of the capture session in seconds.
* **totalBytesPerSession**: int: Maximum size of the capture output.

## PacketCaptureFilter
### Properties
* **localIPAddress**: string: Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5"? for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
* **localPort**: string: Local port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
* **protocol**: 'Any' | 'TCP' | 'UDP' | string: Protocol to be filtered on.
* **remoteIPAddress**: string: Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
* **remotePort**: string: Remote port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.

## PacketCaptureStorageLocation
### Properties
* **filePath**: string: A valid local path on the targeting VM. Must include the name of the capture file (*.cap). For linux virtual machine it must start with /var/captures. Required if no storage ID is provided, otherwise optional.
* **storageId**: string: The ID of the storage account to save the packet capture session. Required if no local file path is provided.
* **storagePath**: string: The URI of the storage path to save the packet capture. Must be a well-formed URI describing the location to save the packet capture.

## P2SVpnGatewayProperties
### Properties
* **customDnsServers**: string[]: List of all customer specified DNS servers IP addresses.
* **isRoutingPreferenceInternet**: bool: Enable Routing Preference property for the Public IP Interface of the P2SVpnGateway.
* **p2SConnectionConfigurations**: [P2SConnectionConfiguration](#p2sconnectionconfiguration)[]: List of all p2s connection configurations of the gateway.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **virtualHub**: [SubResource](#subresource): Reference to another subresource.
* **vpnClientConnectionHealth**: [VpnClientConnectionHealth](#vpnclientconnectionhealth) (ReadOnly): VpnClientConnectionHealth properties.
* **vpnGatewayScaleUnit**: int: The scale unit for this p2s vpn gateway.
* **vpnServerConfiguration**: [SubResource](#subresource): Reference to another subresource.

## P2SConnectionConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [P2SConnectionConfigurationProperties](#p2sconnectionconfigurationproperties): Parameters for P2SConnectionConfiguration.

## P2SConnectionConfigurationProperties
### Properties
* **enableInternetSecurity**: bool: Flag indicating whether the enable internet security flag is turned on for the P2S Connections or not.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **routingConfiguration**: [RoutingConfiguration](#routingconfiguration): Routing Configuration indicating the associated and propagated route tables for this connection.
* **vpnClientAddressPool**: [AddressSpace](#addressspace): AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.

## VpnClientConnectionHealth
### Properties
* **allocatedIpAddresses**: string[]: List of allocated ip addresses to the connected p2s vpn clients.
* **totalEgressBytesTransferred**: int (ReadOnly): Total of the Egress Bytes Transferred in this connection.
* **totalIngressBytesTransferred**: int (ReadOnly): Total of the Ingress Bytes Transferred in this P2S Vpn connection.
* **vpnClientConnectionsCount**: int: The total of p2s vpn clients connected at this time to this P2SVpnGateway.

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
* **privateDnsZoneConfigs**: [PrivateDnsZoneConfig](#privatednszoneconfig)[]: A collection of private dns zone configurations of the private dns zone group.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## PrivateDnsZoneConfig
### Properties
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [PrivateDnsZonePropertiesFormat](#privatednszonepropertiesformat): Properties of the private dns zone configuration resource.

## PrivateDnsZonePropertiesFormat
### Properties
* **privateDnsZoneId**: string: The resource id of the private dns zone.
* **recordSets**: [RecordSet](#recordset)[] (ReadOnly): A collection of information regarding a recordSet, holding information to identify private resources.

## RecordSet
### Properties
* **fqdn**: string: Fqdn that resolves to private endpoint ip address.
* **ipAddresses**: string[]: The private ip address of the private endpoint.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **recordSetName**: string: Recordset name.
* **recordType**: string: Resource record type.
* **ttl**: int: Recordset time to live.

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
* **customIPPrefix**: [SubResource](#subresource): Reference to another subresource.
* **ipPrefix**: string (ReadOnly): The allocated Prefix.
* **ipTags**: [IpTag](#iptag)[]: The list of tags associated with the public IP prefix.
* **loadBalancerFrontendIpConfiguration**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.
* **natGateway**: [NatGateway](#natgateway): Nat Gateway resource.
* **prefixLength**: int: The Length of the Public IP Prefix.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **publicIPAddresses**: [ReferencedPublicIpAddress](#referencedpublicipaddress)[] (ReadOnly): The list of all referenced PublicIPAddresses.
* **publicIPAddressVersion**: 'IPv4' | 'IPv6' | string: IP address version.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the public IP prefix resource.

## ReferencedPublicIpAddress
### Properties
* **id**: string: The PublicIPAddress Reference.

## PublicIPPrefixSku
### Properties
* **name**: 'Standard' | string: Name of a public IP prefix SKU.
* **tier**: 'Global' | 'Regional' | string: Tier of a public IP prefix SKU.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RouteFilterPropertiesFormat
### Properties
* **ipv6Peerings**: [ExpressRouteCircuitPeering](#expressroutecircuitpeering)[] (ReadOnly): A collection of references to express route circuit ipv6 peerings.
* **peerings**: [ExpressRouteCircuitPeering](#expressroutecircuitpeering)[] (ReadOnly): A collection of references to express route circuit peerings.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **rules**: [RouteFilterRule](#routefilterrule)[]: Collection of RouteFilterRules contained within a route filter.

## RouteFilterRule
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [RouteFilterRulePropertiesFormat](#routefilterrulepropertiesformat): Route Filter Rule Resource.

## RouteFilterRulePropertiesFormat
### Properties
* **access**: 'Allow' | 'Deny' | string (Required): Access to be allowed or denied.
* **communities**: string[] (Required): The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020'].
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **routeFilterRuleType**: 'Community' | string (Required): The rule type of the rule.

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
* **connectionStatus**: 'Connected' | 'NotConnected' | 'PartiallyConnected' | 'Unknown' | string (ReadOnly): The current state of the connection with Security Partner Provider.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **securityProviderName**: 'Checkpoint' | 'IBoss' | 'ZScaler' | string: The Security Providers.
* **virtualHub**: [SubResource](#subresource): Reference to another subresource.

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
* **addressPrefix**: string: Address-prefix for this VirtualHub.
* **allowBranchToBranchTraffic**: bool: Flag to control transit for VirtualRouter hub.
* **azureFirewall**: [SubResource](#subresource): Reference to another subresource.
* **bgpConnections**: [SubResource](#subresource)[] (ReadOnly): List of references to Bgp Connections.
* **expressRouteGateway**: [SubResource](#subresource): Reference to another subresource.
* **ipConfigurations**: [SubResource](#subresource)[] (ReadOnly): List of references to IpConfigurations.
* **p2SVpnGateway**: [SubResource](#subresource): Reference to another subresource.
* **preferredRoutingGateway**: 'ExpressRoute' | 'None' | 'VpnGateway' | string: The preferred routing gateway types
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **routeTable**: [VirtualHubRouteTable](#virtualhubroutetable): VirtualHub route table.
* **routingState**: 'Failed' | 'None' | 'Provisioned' | 'Provisioning' | string (ReadOnly): The current routing state of the VirtualHub.
* **securityPartnerProvider**: [SubResource](#subresource): Reference to another subresource.
* **securityProviderName**: string: The Security Provider name.
* **sku**: string: The sku of this VirtualHub.
* **virtualHubRouteTableV2s**: [VirtualHubRouteTableV2](#virtualhubroutetablev2)[]: List of all virtual hub route table v2s associated with this VirtualHub.
* **virtualRouterAsn**: int: VirtualRouter ASN.
* **virtualRouterIps**: string[]: VirtualRouter IPs.
* **virtualWan**: [SubResource](#subresource): Reference to another subresource.
* **vpnGateway**: [SubResource](#subresource): Reference to another subresource.

## VirtualHubRouteTable
### Properties
* **routes**: [VirtualHubRoute](#virtualhubroute)[]: List of all routes.

## VirtualHubRoute
### Properties
* **addressPrefixes**: string[]: List of all addressPrefixes.
* **nextHopIpAddress**: string: NextHop ip address.

## VirtualHubRouteTableV2
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VirtualHubRouteTableV2Properties](#virtualhubroutetablev2properties): Parameters for VirtualHubRouteTableV2.

## VirtualHubRouteTableV2Properties
### Properties
* **attachedConnections**: string[]: List of all connections attached to this route table v2.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **routes**: [VirtualHubRouteV2](#virtualhubroutev2)[]: List of all routes.

## VirtualHubRouteV2
### Properties
* **destinations**: string[]: List of all destinations.
* **destinationType**: string: The type of destinations.
* **nextHops**: string[]: NextHops ip address.
* **nextHopType**: string: The type of next hops.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BgpConnectionProperties
### Properties
* **connectionState**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' | string (ReadOnly): The current state of the VirtualHub to Peer.
* **hubVirtualNetworkConnection**: [SubResource](#subresource): Reference to another subresource.
* **peerAsn**: int: Peer ASN.
* **peerIp**: string: Peer IP.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## HubRouteTableProperties
### Properties
* **associatedConnections**: string[] (ReadOnly): List of all connections associated with this route table.
* **labels**: string[]: List of labels associated with this route table.
* **propagatingConnections**: string[] (ReadOnly): List of all connections that advertise to this route table.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **routes**: [HubRoute](#hubroute)[]: List of all routes.

## HubRoute
### Properties
* **destinations**: string[] (Required): List of all destinations.
* **destinationType**: string (Required): The type of destinations (eg: CIDR, ResourceId, Service).
* **name**: string (Required): The name of the Route that is unique within a RouteTable. This name can be used to access this route.
* **nextHop**: string (Required): NextHop resource ID.
* **nextHopType**: string (Required): The type of next hop (eg: ResourceId).

## HubVirtualNetworkConnectionProperties
### Properties
* **allowHubToRemoteVnetTransit**: bool: Deprecated: VirtualHub to RemoteVnet transit to enabled or not.
* **allowRemoteVnetToUseHubVnetGateways**: bool: Deprecated: Allow RemoteVnet to use Virtual Hub's gateways.
* **enableInternetSecurity**: bool: Enable internet security.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **remoteVirtualNetwork**: [SubResource](#subresource): Reference to another subresource.
* **routingConfiguration**: [RoutingConfiguration](#routingconfiguration): Routing Configuration indicating the associated and propagated route tables for this connection.

## HubIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string: The private IP address of the IP configuration.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: IP address allocation method.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **publicIPAddress**: [PublicIPAddress](#publicipaddress): Public IP address resource.
* **subnet**: [Subnet](#subnet): Subnet in a virtual network resource.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualNetworkPropertiesFormat
### Properties
* **addressSpace**: [AddressSpace](#addressspace): AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.
* **bgpCommunities**: [VirtualNetworkBgpCommunities](#virtualnetworkbgpcommunities): Bgp Communities sent over ExpressRoute with each route corresponding to a prefix in this VNET.
* **ddosProtectionPlan**: [SubResource](#subresource): Reference to another subresource.
* **dhcpOptions**: [DhcpOptions](#dhcpoptions): DhcpOptions contains an array of DNS servers available to VMs deployed in the virtual network. Standard DHCP option for a subnet overrides VNET DHCP options.
* **enableDdosProtection**: bool: Indicates if DDoS protection is enabled for all the protected resources in the virtual network. It requires a DDoS protection plan associated with the resource.
* **enableVmProtection**: bool: Indicates if VM protection is enabled for all the subnets in the virtual network.
* **flowTimeoutInMinutes**: int: The FlowTimeout value (in minutes) for the Virtual Network
* **ipAllocations**: [SubResource](#subresource)[]: Array of IpAllocation which reference this VNET.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **resourceGuid**: string (ReadOnly): The resourceGuid property of the Virtual Network resource.
* **subnets**: [Subnet](#subnet)[]: A list of subnets in a Virtual Network.
* **virtualNetworkPeerings**: [VirtualNetworkPeering](#virtualnetworkpeering)[]: A list of peerings in a Virtual Network.

## VirtualNetworkBgpCommunities
### Properties
* **regionalCommunity**: string (ReadOnly): The BGP community associated with the region of the virtual network.
* **virtualNetworkCommunity**: string (Required): The BGP community associated with the virtual network.

## DhcpOptions
### Properties
* **dnsServers**: string[]: The list of DNS servers IP addresses.

## VirtualNetworkPeering
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VirtualNetworkPeeringPropertiesFormat](#virtualnetworkpeeringpropertiesformat): Properties of the virtual network peering.
* **type**: string: Resource type.

## VirtualNetworkPeeringPropertiesFormat
### Properties
* **allowForwardedTraffic**: bool: Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network.
* **allowGatewayTransit**: bool: If gateway links can be used in remote virtual networking to link to this virtual network.
* **allowVirtualNetworkAccess**: bool: Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space.
* **doNotVerifyRemoteGateways**: bool: If we need to verify the provisioning state of the remote gateway.
* **peeringState**: 'Connected' | 'Disconnected' | 'Initiated' | string: The status of the virtual network peering.
* **peeringSyncLevel**: 'FullyInSync' | 'LocalAndRemoteNotInSync' | 'LocalNotInSync' | 'RemoteNotInSync' | string: The peering sync status of the virtual network peering.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **remoteAddressSpace**: [AddressSpace](#addressspace): AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.
* **remoteBgpCommunities**: [VirtualNetworkBgpCommunities](#virtualnetworkbgpcommunities): Bgp Communities sent over ExpressRoute with each route corresponding to a prefix in this VNET.
* **remoteVirtualNetwork**: [SubResource](#subresource): Reference to another subresource.
* **remoteVirtualNetworkAddressSpace**: [AddressSpace](#addressspace): AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.
* **resourceGuid**: string (ReadOnly): The resourceGuid property of the Virtual Network peering resource.
* **useRemoteGateways**: bool: If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.

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
* **hostedGateway**: [SubResource](#subresource): Reference to another subresource.
* **hostedSubnet**: [SubResource](#subresource): Reference to another subresource.
* **peerings**: [SubResource](#subresource)[] (ReadOnly): List of references to VirtualRouterPeerings.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **virtualRouterAsn**: int: VirtualRouter ASN.
* **virtualRouterIps**: string[]: VirtualRouter IPs.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualRouterPeeringProperties
### Properties
* **peerAsn**: int: Peer ASN.
* **peerIp**: string: Peer IP.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## VirtualWanProperties
### Properties
* **allowBranchToBranchTraffic**: bool: True if branch to branch traffic is allowed.
* **allowVnetToVnetTraffic**: bool: True if Vnet to Vnet traffic is allowed.
* **disableVpnEncryption**: bool: Vpn encryption to be disabled or not.
* **office365LocalBreakoutCategory**: 'All' | 'None' | 'Optimize' | 'OptimizeAndAllow' | string (ReadOnly): The office traffic category.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **type**: string: The type of the VirtualWAN.
* **virtualHubs**: [SubResource](#subresource)[] (ReadOnly): List of VirtualHubs in the VirtualWAN.
* **vpnSites**: [SubResource](#subresource)[] (ReadOnly): List of VpnSites in the VirtualWAN.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VpnGatewayProperties
### Properties
* **bgpSettings**: [BgpSettings](#bgpsettings): BGP settings details.
* **connections**: [VpnConnection](#vpnconnection)[]: List of all vpn connections to the gateway.
* **enableBgpRouteTranslationForNat**: bool: Enable BGP routes translation for NAT on this VpnGateway.
* **ipConfigurations**: [VpnGatewayIpConfiguration](#vpngatewayipconfiguration)[] (ReadOnly): List of all IPs configured on the gateway.
* **isRoutingPreferenceInternet**: bool: Enable Routing Preference property for the Public IP Interface of the VpnGateway.
* **natRules**: [VpnGatewayNatRule](#vpngatewaynatrule)[]: List of all the nat Rules associated with the gateway.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **virtualHub**: [SubResource](#subresource): Reference to another subresource.
* **vpnGatewayScaleUnit**: int: The scale unit for this vpn gateway.

## VpnConnection
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VpnConnectionProperties](#vpnconnectionproperties): Parameters for VpnConnection.

## VpnConnectionProperties
### Properties
* **connectionBandwidth**: int: Expected bandwidth in MBPS.
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' | string (ReadOnly): The current state of the vpn connection.
* **dpdTimeoutSeconds**: int: DPD timeout in seconds for vpn connection.
* **egressBytesTransferred**: int (ReadOnly): Egress bytes transferred.
* **enableBgp**: bool: EnableBgp flag.
* **enableInternetSecurity**: bool: Enable internet security.
* **enableRateLimiting**: bool: EnableBgp flag.
* **ingressBytesTransferred**: int (ReadOnly): Ingress bytes transferred.
* **ipsecPolicies**: [IpsecPolicy](#ipsecpolicy)[]: The IPSec Policies to be considered by this connection.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **remoteVpnSite**: [SubResource](#subresource): Reference to another subresource.
* **routingConfiguration**: [RoutingConfiguration](#routingconfiguration): Routing Configuration indicating the associated and propagated route tables for this connection.
* **routingWeight**: int: Routing weight for vpn connection.
* **sharedKey**: string: SharedKey for the vpn connection.
* **trafficSelectorPolicies**: [TrafficSelectorPolicy](#trafficselectorpolicy)[]: The Traffic Selector Policies to be considered by this connection.
* **useLocalAzureIpAddress**: bool: Use local azure ip to initiate connection.
* **usePolicyBasedTrafficSelectors**: bool: Enable policy-based traffic selectors.
* **vpnConnectionProtocolType**: 'IKEv1' | 'IKEv2' | string: Gateway connection protocol.
* **vpnLinkConnections**: [VpnSiteLinkConnection](#vpnsitelinkconnection)[]: List of all vpn site link connections to the gateway.

## VpnSiteLinkConnection
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VpnSiteLinkConnectionProperties](#vpnsitelinkconnectionproperties): Parameters for VpnConnection.
* **type**: string (ReadOnly): Resource type.

## VpnSiteLinkConnectionProperties
### Properties
* **connectionBandwidth**: int: Expected bandwidth in MBPS.
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' | string (ReadOnly): The current state of the vpn connection.
* **egressBytesTransferred**: int (ReadOnly): Egress bytes transferred.
* **egressNatRules**: [SubResource](#subresource)[]: List of egress NatRules.
* **enableBgp**: bool: EnableBgp flag.
* **enableRateLimiting**: bool: EnableBgp flag.
* **ingressBytesTransferred**: int (ReadOnly): Ingress bytes transferred.
* **ingressNatRules**: [SubResource](#subresource)[]: List of ingress NatRules.
* **ipsecPolicies**: [IpsecPolicy](#ipsecpolicy)[]: The IPSec Policies to be considered by this connection.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **routingWeight**: int: Routing weight for vpn connection.
* **sharedKey**: string: SharedKey for the vpn connection.
* **useLocalAzureIpAddress**: bool: Use local azure ip to initiate connection.
* **usePolicyBasedTrafficSelectors**: bool: Enable policy-based traffic selectors.
* **vpnConnectionProtocolType**: 'IKEv1' | 'IKEv2' | string: Gateway connection protocol.
* **vpnLinkConnectionMode**: 'Default' | 'InitiatorOnly' | 'ResponderOnly' | string: Vpn link connection mode.
* **vpnSiteLink**: [SubResource](#subresource): Reference to another subresource.

## VpnGatewayIpConfiguration
### Properties
* **id**: string: The identifier of the IP configuration for a VPN Gateway.
* **privateIpAddress**: string: The private IP address of this IP configuration.
* **publicIpAddress**: string: The public IP address of this IP configuration.

## VpnGatewayNatRule
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VpnGatewayNatRuleProperties](#vpngatewaynatruleproperties): Parameters for VpnGatewayNatRule.
* **type**: string (ReadOnly): Resource type.

## VpnGatewayNatRuleProperties
### Properties
* **egressVpnSiteLinkConnections**: [SubResource](#subresource)[] (ReadOnly): List of egress VpnSiteLinkConnections.
* **externalMappings**: [VpnNatRuleMapping](#vpnnatrulemapping)[]: The private IP address external mapping for NAT.
* **ingressVpnSiteLinkConnections**: [SubResource](#subresource)[] (ReadOnly): List of ingress VpnSiteLinkConnections.
* **internalMappings**: [VpnNatRuleMapping](#vpnnatrulemapping)[]: The private IP address internal mapping for NAT.
* **ipConfigurationId**: string: The IP Configuration ID this NAT rule applies to.
* **mode**: 'EgressSnat' | 'IngressSnat' | string: The Source NAT direction of a VPN NAT.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **type**: 'Dynamic' | 'Static' | string: The type of NAT rule for VPN NAT.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VpnServerConfigurationProperties
### Properties
* **aadAuthenticationParameters**: [AadAuthenticationParameters](#aadauthenticationparameters): AAD Vpn authentication type related parameters.
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **name**: string: The name of the VpnServerConfiguration that is unique within a resource group.
* **p2SVpnGateways**: [P2SVpnGateway](#p2svpngateway)[] (ReadOnly): List of references to P2SVpnGateways.
* **provisioningState**: string (ReadOnly): The provisioning state of the VpnServerConfiguration resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **radiusClientRootCertificates**: [VpnServerConfigRadiusClientRootCertificate](#vpnserverconfigradiusclientrootcertificate)[]: Radius client root certificate of VpnServerConfiguration.
* **radiusServerAddress**: string: The radius server address property of the VpnServerConfiguration resource for point to site client connection.
* **radiusServerRootCertificates**: [VpnServerConfigRadiusServerRootCertificate](#vpnserverconfigradiusserverrootcertificate)[]: Radius Server root certificate of VpnServerConfiguration.
* **radiusServers**: [RadiusServer](#radiusserver)[]: Multiple Radius Server configuration for VpnServerConfiguration.
* **radiusServerSecret**: string: The radius secret property of the VpnServerConfiguration resource for point to site client connection.
* **vpnAuthenticationTypes**: 'AAD' | 'Certificate' | 'Radius' | string[]: VPN authentication types for the VpnServerConfiguration.
* **vpnClientIpsecPolicies**: [IpsecPolicy](#ipsecpolicy)[]: VpnClientIpsecPolicies for VpnServerConfiguration.
* **vpnClientRevokedCertificates**: [VpnServerConfigVpnClientRevokedCertificate](#vpnserverconfigvpnclientrevokedcertificate)[]: VPN client revoked certificate of VpnServerConfiguration.
* **vpnClientRootCertificates**: [VpnServerConfigVpnClientRootCertificate](#vpnserverconfigvpnclientrootcertificate)[]: VPN client root certificate of VpnServerConfiguration.
* **vpnProtocols**: 'IkeV2' | 'OpenVPN' | string[]: VPN protocols for the VpnServerConfiguration.

## AadAuthenticationParameters
### Properties
* **aadAudience**: string: AAD Vpn authentication parameter AAD audience.
* **aadIssuer**: string: AAD Vpn authentication parameter AAD issuer.
* **aadTenant**: string: AAD Vpn authentication parameter AAD tenant.

## P2SVpnGateway
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [P2SVpnGatewayProperties](#p2svpngatewayproperties): Parameters for P2SVpnGateway.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VpnServerConfigRadiusClientRootCertificate
### Properties
* **name**: string: The certificate name.
* **thumbprint**: string: The Radius client root certificate thumbprint.

## VpnServerConfigRadiusServerRootCertificate
### Properties
* **name**: string: The certificate name.
* **publicCertData**: string: The certificate public data.

## VpnServerConfigVpnClientRevokedCertificate
### Properties
* **name**: string: The certificate name.
* **thumbprint**: string: The revoked VPN client certificate thumbprint.

## VpnServerConfigVpnClientRootCertificate
### Properties
* **name**: string: The certificate name.
* **publicCertData**: string: The certificate public data.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VpnSiteProperties
### Properties
* **addressSpace**: [AddressSpace](#addressspace): AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.
* **bgpProperties**: [BgpSettings](#bgpsettings): BGP settings details.
* **deviceProperties**: [DeviceProperties](#deviceproperties): List of properties of the device.
* **ipAddress**: string: The ip-address for the vpn-site.
* **isSecuritySite**: bool: IsSecuritySite flag.
* **o365Policy**: [O365PolicyProperties](#o365policyproperties): The Office365 breakout policy.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **siteKey**: string: The key for vpn-site that can be used for connections.
* **virtualWan**: [SubResource](#subresource): Reference to another subresource.
* **vpnSiteLinks**: [VpnSiteLink](#vpnsitelink)[]: List of all vpn site links.

## DeviceProperties
### Properties
* **deviceModel**: string: Model of the device.
* **deviceVendor**: string: Name of the device Vendor.
* **linkSpeedInMbps**: int: Link speed.

## O365PolicyProperties
### Properties
* **breakOutCategories**: [O365BreakOutCategoryPolicies](#o365breakoutcategorypolicies): Office365 breakout categories.

## O365BreakOutCategoryPolicies
### Properties
* **allow**: bool: Flag to control allow category.
* **default**: bool: Flag to control default category.
* **optimize**: bool: Flag to control optimize category.

## VpnSiteLink
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VpnSiteLinkProperties](#vpnsitelinkproperties): Parameters for VpnSite.
* **type**: string (ReadOnly): Resource type.

## VpnSiteLinkProperties
### Properties
* **bgpProperties**: [VpnLinkBgpSettings](#vpnlinkbgpsettings): BGP settings details for a link.
* **fqdn**: string: FQDN of vpn-site-link.
* **ipAddress**: string: The ip-address for the vpn-site-link.
* **linkProperties**: [VpnLinkProviderProperties](#vpnlinkproviderproperties): List of properties of a link provider.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## VpnLinkBgpSettings
### Properties
* **asn**: int: The BGP speaker's ASN.
* **bgpPeeringAddress**: string: The BGP peering address and BGP identifier of this BGP speaker.

## VpnLinkProviderProperties
### Properties
* **linkProviderName**: string: Name of the link provider.
* **linkSpeedInMbps**: int: Link speed.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

