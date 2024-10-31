# Microsoft.Network @ 2023-04-01

## Resource Microsoft.Network/applicationGatewayAvailableSslOptions@2023-04-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationGatewayAvailableSslOptionsPropertiesFormat](#applicationgatewayavailablessloptionspropertiesformat) (ReadOnly): Properties of the application gateway available SSL options.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Network/applicationGatewayAvailableSslOptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/applicationGatewayAvailableSslOptions/predefinedPolicies@2023-04-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationGatewaySslPredefinedPolicyPropertiesFormat](#applicationgatewaysslpredefinedpolicypropertiesformat) (ReadOnly): Properties of the application gateway SSL predefined policy.
* **type**: 'Microsoft.Network/applicationGatewayAvailableSslOptions/predefinedPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/applicationGateways@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The identity of the application gateway, if configured.
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationGatewayPropertiesFormat](#applicationgatewaypropertiesformat): Properties of the application gateway.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/applicationGateways' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: A list of availability zones denoting where the resource needs to come from.

## Resource Microsoft.Network/applicationGateways/privateEndpointConnections@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationGatewayPrivateEndpointConnectionProperties](#applicationgatewayprivateendpointconnectionproperties): Properties of the application gateway private endpoint connection.
* **type**: 'Microsoft.Network/applicationGateways/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string {maxLength: 128} (Required, DeployTimeConstant): The resource name
* **properties**: [WebApplicationFirewallPolicyPropertiesFormat](#webapplicationfirewallpolicypropertiesformat): Properties of the web application firewall policy.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/applicationSecurityGroups@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationSecurityGroupPropertiesFormat](#applicationsecuritygrouppropertiesformat): Properties of the application security group.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/applicationSecurityGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/azureFirewalls@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string {minLength: 1, maxLength: 56} (Required, DeployTimeConstant): The resource name
* **properties**: [AzureFirewallPropertiesFormat](#azurefirewallpropertiesformat): Properties of the azure firewall.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/azureFirewalls' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: A list of availability zones denoting where the resource needs to come from.

## Resource Microsoft.Network/bastionHosts@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BastionHostPropertiesFormat](#bastionhostpropertiesformat): Represents the bastion host resource.
* **sku**: [Sku](#sku): The sku of this Bastion Host.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/bastionHosts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/cloudServiceSlots@2023-04-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'swap' (Required, DeployTimeConstant): The resource name
* **properties**: [SwapResourceProperties](#swapresourceproperties): Swap resource properties
* **type**: 'Microsoft.Network/cloudServiceSlots' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/connections@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkGatewayConnectionPropertiesFormat](#virtualnetworkgatewayconnectionpropertiesformat) (Required): Properties of the virtual network gateway connection.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/connections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/customIpPrefixes@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location of the custom IP prefix.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomIpPrefixPropertiesFormat](#customipprefixpropertiesformat): Custom IP prefix properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/customIpPrefixes' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: A list of availability zones denoting the IP allocated for the resource needs to come from.

## Resource Microsoft.Network/ddosCustomPolicies@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DdosCustomPolicyPropertiesFormat](#ddoscustompolicypropertiesformat): Properties of the DDoS custom policy.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/ddosCustomPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/ddosProtectionPlans@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DdosProtectionPlanPropertiesFormat](#ddosprotectionplanpropertiesformat): Properties of the DDoS protection plan.
* **tags**: [DdosProtectionPlanTags](#ddosprotectionplantags): Resource tags.
* **type**: 'Microsoft.Network/ddosProtectionPlans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dscpConfigurations@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DscpConfigurationPropertiesFormat](#dscpconfigurationpropertiesformat): Properties of the network interface.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/dscpConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteCircuitPropertiesFormat](#expressroutecircuitpropertiesformat): Properties of the express route circuit.
* **sku**: [ExpressRouteCircuitSku](#expressroutecircuitsku): The SKU.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/expressRouteCircuits' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits/authorizations@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationPropertiesFormat](#authorizationpropertiesformat): Properties of the express route circuit authorization.
* **type**: 'Microsoft.Network/expressRouteCircuits/authorizations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits/peerings@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteCircuitPeeringPropertiesFormat](#expressroutecircuitpeeringpropertiesformat): Properties of the express route circuit peering.
* **type**: 'Microsoft.Network/expressRouteCircuits/peerings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits/peerings/connections@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteCircuitConnectionPropertiesFormat](#expressroutecircuitconnectionpropertiesformat): Properties of the express route circuit connection.
* **type**: 'Microsoft.Network/expressRouteCircuits/peerings/connections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits/peerings/peerConnections@2023-04-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PeerExpressRouteCircuitConnectionPropertiesFormat](#peerexpressroutecircuitconnectionpropertiesformat) (ReadOnly): Properties of the peer express route circuit connection.
* **type**: 'Microsoft.Network/expressRouteCircuits/peerings/peerConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCrossConnections@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteCrossConnectionProperties](#expressroutecrossconnectionproperties): Properties of the express route cross connection.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/expressRouteCrossConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCrossConnections/peerings@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteCrossConnectionPeeringProperties](#expressroutecrossconnectionpeeringproperties): Properties of the express route cross connection peering.
* **type**: 'Microsoft.Network/expressRouteCrossConnections/peerings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteGateways@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteGatewayProperties](#expressroutegatewayproperties): Properties of the express route gateway.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/expressRouteGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteGateways/expressRouteConnections@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteConnectionProperties](#expressrouteconnectionproperties): Properties of the express route connection.
* **type**: 'Microsoft.Network/expressRouteGateways/expressRouteConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/ExpressRoutePorts@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The identity of ExpressRoutePort, if configured.
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRoutePortPropertiesFormat](#expressrouteportpropertiesformat): ExpressRoutePort properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/ExpressRoutePorts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRoutePorts/authorizations@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRoutePortAuthorizationPropertiesFormat](#expressrouteportauthorizationpropertiesformat): ExpressRoutePort properties.
* **type**: 'Microsoft.Network/expressRoutePorts/authorizations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/ExpressRoutePorts/links@2023-04-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteLinkPropertiesFormat](#expressroutelinkpropertiesformat) (ReadOnly): ExpressRouteLink properties.
* **type**: 'Microsoft.Network/ExpressRoutePorts/links' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/ExpressRoutePortsLocations@2023-04-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRoutePortsLocationPropertiesFormat](#expressrouteportslocationpropertiesformat) (ReadOnly): ExpressRoutePort peering location properties.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Network/ExpressRoutePortsLocations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteProviderPorts@2023-04-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteProviderPortProperties](#expressrouteproviderportproperties) (ReadOnly): Properties of the express route Service Provider Port.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Network/expressRouteProviderPorts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/firewallPolicies@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The identity of the firewall policy.
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallPolicyPropertiesFormat](#firewallpolicypropertiesformat): Properties of the firewall policy.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/firewallPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/firewallPolicies/ruleCollectionGroups@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallPolicyRuleCollectionGroupProperties](#firewallpolicyrulecollectiongroupproperties): The properties of the firewall policy rule collection group.
* **type**: 'Microsoft.Network/firewallPolicies/ruleCollectionGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/firewallPolicies/signatureOverrides@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [SignaturesOverridesProperties](#signaturesoverridesproperties): Will contain the properties of the resource (the actual signature overrides)
* **type**: 'Microsoft.Network/firewallPolicies/signatureOverrides' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/IpAllocations@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IpAllocationPropertiesFormat](#ipallocationpropertiesformat): Properties of the IpAllocation.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/IpAllocations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/ipGroups@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IpGroupPropertiesFormat](#ipgrouppropertiesformat): Properties of the IpGroups.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/ipGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/loadBalancers@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location of the load balancer.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LoadBalancerPropertiesFormat](#loadbalancerpropertiesformat): Properties of load balancer.
* **sku**: [LoadBalancerSku](#loadbalancersku): The load balancer SKU.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/loadBalancers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/loadBalancers/backendAddressPools@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackendAddressPoolPropertiesFormat](#backendaddresspoolpropertiesformat): Properties of load balancer backend address pool.
* **type**: 'Microsoft.Network/loadBalancers/backendAddressPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/loadBalancers/frontendIPConfigurations@2023-04-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FrontendIPConfigurationPropertiesFormat](#frontendipconfigurationpropertiesformat) (ReadOnly): Properties of the load balancer probe.
* **type**: 'Microsoft.Network/loadBalancers/frontendIPConfigurations' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[] (ReadOnly): A list of availability zones denoting the IP allocated for the resource needs to come from.

## Resource Microsoft.Network/loadBalancers/inboundNatRules@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InboundNatRulePropertiesFormat](#inboundnatrulepropertiesformat): Properties of load balancer inbound NAT rule.
* **type**: 'Microsoft.Network/loadBalancers/inboundNatRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/loadBalancers/loadBalancingRules@2023-04-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LoadBalancingRulePropertiesFormat](#loadbalancingrulepropertiesformat) (ReadOnly): Properties of load balancer load balancing rule.
* **type**: 'Microsoft.Network/loadBalancers/loadBalancingRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/loadBalancers/outboundRules@2023-04-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OutboundRulePropertiesFormat](#outboundrulepropertiesformat) (ReadOnly): Properties of load balancer outbound rule.
* **type**: 'Microsoft.Network/loadBalancers/outboundRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/loadBalancers/probes@2023-04-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProbePropertiesFormat](#probepropertiesformat) (ReadOnly): Properties of load balancer probe.
* **type**: 'Microsoft.Network/loadBalancers/probes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/localNetworkGateways@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string {minLength: 1} (Required, DeployTimeConstant): The resource name
* **properties**: [LocalNetworkGatewayPropertiesFormat](#localnetworkgatewaypropertiesformat) (Required): Properties of the local network gateway.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/localNetworkGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/natGateways@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NatGatewayPropertiesFormat](#natgatewaypropertiesformat): Nat Gateway properties.
* **sku**: [NatGatewaySku](#natgatewaysku): The nat gateway SKU.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/natGateways' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: A list of availability zones denoting the zone in which Nat Gateway should be deployed.

## Resource Microsoft.Network/networkInterfaces@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location of the network interface.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat): Properties of the network interface.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkInterfaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkInterfaces/ipConfigurations@2023-04-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkInterfaceIPConfigurationPropertiesFormat](#networkinterfaceipconfigurationpropertiesformat) (ReadOnly): Network interface IP configuration properties.
* **type**: 'Microsoft.Network/networkInterfaces/ipConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkInterfaces/tapConfigurations@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkInterfaceTapConfigurationPropertiesFormat](#networkinterfacetapconfigurationpropertiesformat): Properties of the Virtual Network Tap configuration.
* **type**: 'Microsoft.Network/networkInterfaces/tapConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagerConnections@2023-04-01
* **Valid Scope(s)**: ManagementGroup, Subscription
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkManagerConnectionProperties](#networkmanagerconnectionproperties): The scope connection properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **type**: 'Microsoft.Network/networkManagerConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkManagerProperties](#networkmanagerproperties): The network manager properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkManagers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/connectivityConfigurations@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectivityConfigurationProperties](#connectivityconfigurationproperties): Properties of a network manager connectivity configuration
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **type**: 'Microsoft.Network/networkManagers/connectivityConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/networkGroups@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkGroupProperties](#networkgroupproperties): The Network Group properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **type**: 'Microsoft.Network/networkManagers/networkGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/networkGroups/staticMembers@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StaticMemberProperties](#staticmemberproperties): The Static Member properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **type**: 'Microsoft.Network/networkManagers/networkGroups/staticMembers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/scopeConnections@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScopeConnectionProperties](#scopeconnectionproperties): The scope connection properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **type**: 'Microsoft.Network/networkManagers/scopeConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityAdminConfigurations@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityAdminConfigurationPropertiesFormat](#securityadminconfigurationpropertiesformat): Indicates the properties for the network manager security admin configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **type**: 'Microsoft.Network/networkManagers/securityAdminConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AdminRuleCollectionPropertiesFormat](#adminrulecollectionpropertiesformat): Indicates the properties for the network manager admin rule collection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **type**: 'Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules@2023-04-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
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


## Resource Microsoft.Network/networkProfiles@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkProfilePropertiesFormat](#networkprofilepropertiesformat): Network profile properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityGroups@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkSecurityGroupPropertiesFormat](#networksecuritygrouppropertiesformat): Properties of the network security group.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkSecurityGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityGroups/defaultSecurityRules@2023-04-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityRulePropertiesFormat](#securityrulepropertiesformat) (ReadOnly): Properties of the security rule.
* **type**: 'Microsoft.Network/networkSecurityGroups/defaultSecurityRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityGroups/securityRules@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityRulePropertiesFormat](#securityrulepropertiesformat): Properties of the security rule.
* **type**: 'Microsoft.Network/networkSecurityGroups/securityRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkVirtualAppliances@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The service principal that has read access to cloud-init and config blob.
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkVirtualAppliancePropertiesFormat](#networkvirtualappliancepropertiesformat): Properties of the Network Virtual Appliance.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkVirtualAppliances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkVirtualAppliances/inboundSecurityRules@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InboundSecurityRuleProperties](#inboundsecurityruleproperties): The properties of the Inbound Security Rules.
* **type**: 'Microsoft.Network/networkVirtualAppliances/inboundSecurityRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkVirtualAppliances/virtualApplianceSites@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualApplianceSiteProperties](#virtualappliancesiteproperties): The properties of the Virtual Appliance Sites.
* **type**: 'Microsoft.Network/networkVirtualAppliances/virtualApplianceSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkVirtualApplianceSkus@2023-04-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkVirtualApplianceSkuPropertiesFormat](#networkvirtualapplianceskupropertiesformat) (ReadOnly): NetworkVirtualApplianceSku properties.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Network/networkVirtualApplianceSkus' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkWatchers@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkWatcherPropertiesFormat](#networkwatcherpropertiesformat): Properties of the network watcher.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkWatchers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkWatchers/connectionMonitors@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Connection monitor location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionMonitorParametersOrConnectionMonitorResultProperties](#connectionmonitorparametersorconnectionmonitorresultproperties) (Required): Properties of the connection monitor.
* **tags**: [ConnectionMonitorTags](#connectionmonitortags): Connection monitor tags.
* **type**: 'Microsoft.Network/networkWatchers/connectionMonitors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkWatchers/flowLogs@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FlowLogPropertiesFormat](#flowlogpropertiesformat): Properties of the flow log.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkWatchers/flowLogs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkWatchers/packetCaptures@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PacketCaptureParametersOrPacketCaptureResultProperties](#packetcaptureparametersorpacketcaptureresultproperties) (Required): Properties of the packet capture.
* **type**: 'Microsoft.Network/networkWatchers/packetCaptures' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/p2svpnGateways@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [P2SVpnGatewayProperties](#p2svpngatewayproperties): Properties of the P2SVpnGateway.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/p2svpnGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/privateEndpoints@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location of the load balancer.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointProperties](#privateendpointproperties): Properties of the private endpoint.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/privateEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/privateEndpoints/privateDnsZoneGroups@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateDnsZoneGroupPropertiesFormat](#privatednszonegrouppropertiesformat): Properties of the private dns zone group.
* **type**: 'Microsoft.Network/privateEndpoints/privateDnsZoneGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/privateLinkServices@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location of the load balancer.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkServiceProperties](#privatelinkserviceproperties): Properties of the private link service.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/privateLinkServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/privateLinkServices/privateEndpointConnections@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the private end point connection.
* **type**: 'Microsoft.Network/privateLinkServices/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/publicIPAddresses@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location of the public ip address.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat): Public IP address properties.
* **sku**: [PublicIPAddressSku](#publicipaddresssku): The public IP address SKU.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/publicIPAddresses' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: A list of availability zones denoting the IP allocated for the resource needs to come from.

## Resource Microsoft.Network/publicIPPrefixes@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location of the public ip address.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublicIPPrefixPropertiesFormat](#publicipprefixpropertiesformat): Public IP prefix properties.
* **sku**: [PublicIPPrefixSku](#publicipprefixsku): The public IP prefix SKU.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/publicIPPrefixes' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: A list of availability zones denoting the IP allocated for the resource needs to come from.

## Resource Microsoft.Network/routeFilters@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RouteFilterPropertiesFormat](#routefilterpropertiesformat): Properties of the route filter.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/routeFilters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/routeFilters/routeFilterRules@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RouteFilterRulePropertiesFormat](#routefilterrulepropertiesformat): Properties of the route filter rule.
* **type**: 'Microsoft.Network/routeFilters/routeFilterRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/routeTables@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RouteTablePropertiesFormat](#routetablepropertiesformat): Properties of the route table.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/routeTables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/routeTables/routes@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoutePropertiesFormat](#routepropertiesformat): Properties of the route.
* **type**: 'Microsoft.Network/routeTables/routes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/securityPartnerProviders@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityPartnerProviderPropertiesFormat](#securitypartnerproviderpropertiesformat): Properties of the Security Partner Provider.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/securityPartnerProviders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/serviceEndpointPolicies@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of service endpoint policy. This is metadata used for the Azure portal experience.
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceEndpointPolicyPropertiesFormat](#serviceendpointpolicypropertiesformat): Properties of the service end point policy.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/serviceEndpointPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceEndpointPolicyDefinitionPropertiesFormat](#serviceendpointpolicydefinitionpropertiesformat): Properties of the service endpoint policy definition.
* **type**: 'Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualHubs@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of service virtual hub. This is metadata used for the Azure portal experience for Route Server.
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualHubProperties](#virtualhubproperties): Properties of the virtual hub.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/virtualHubs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualHubs/bgpConnections@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BgpConnectionProperties](#bgpconnectionproperties): The properties of the Bgp connections.
* **type**: 'Microsoft.Network/virtualHubs/bgpConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualHubs/hubRouteTables@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HubRouteTableProperties](#hubroutetableproperties): Properties of the RouteTable resource.
* **type**: 'Microsoft.Network/virtualHubs/hubRouteTables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualHubs/hubVirtualNetworkConnections@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HubVirtualNetworkConnectionProperties](#hubvirtualnetworkconnectionproperties): Properties of the hub virtual network connection.
* **type**: 'Microsoft.Network/virtualHubs/hubVirtualNetworkConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualHubs/ipConfigurations@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HubIPConfigurationPropertiesFormat](#hubipconfigurationpropertiesformat): The properties of the Virtual Hub IPConfigurations.
* **type**: 'Microsoft.Network/virtualHubs/ipConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualHubs/routeMaps@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RouteMapProperties](#routemapproperties): Properties of the RouteMap resource.
* **type**: 'Microsoft.Network/virtualHubs/routeMaps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualHubs/routeTables@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualHubRouteTableV2Properties](#virtualhubroutetablev2properties): Properties of the virtual hub route table v2.
* **type**: 'Microsoft.Network/virtualHubs/routeTables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualHubs/routingIntent@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoutingIntentProperties](#routingintentproperties): Properties of the RoutingIntent resource.
* **type**: 'Microsoft.Network/virtualHubs/routingIntent' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworkGateways@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location of type local virtual network gateway.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkGatewayPropertiesFormat](#virtualnetworkgatewaypropertiesformat) (Required): Properties of the virtual network gateway.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/virtualNetworkGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworkGateways/natRules@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkGatewayNatRuleProperties](#virtualnetworkgatewaynatruleproperties): Properties of the Virtual Network Gateway NAT rule.
* **type**: 'Microsoft.Network/virtualNetworkGateways/natRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworks@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location of the virtual network.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkPropertiesFormat](#virtualnetworkpropertiesformat): Properties of the virtual network.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/virtualNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworks/subnets@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SubnetPropertiesFormat](#subnetpropertiesformat): Properties of the subnet.
* **type**: 'Microsoft.Network/virtualNetworks/subnets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworks/virtualNetworkPeerings@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkPeeringPropertiesFormat](#virtualnetworkpeeringpropertiesformat): Properties of the virtual network peering.
* **type**: 'Microsoft.Network/virtualNetworks/virtualNetworkPeerings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworkTaps@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkTapPropertiesFormat](#virtualnetworktappropertiesformat): Virtual Network Tap Properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/virtualNetworkTaps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualRouters@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualRouterPropertiesFormat](#virtualrouterpropertiesformat): Properties of the Virtual Router.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/virtualRouters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualRouters/peerings@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualRouterPeeringProperties](#virtualrouterpeeringproperties): The properties of the Virtual Router Peering.
* **type**: 'Microsoft.Network/virtualRouters/peerings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualWans@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualWanProperties](#virtualwanproperties): Properties of the virtual WAN.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/virtualWans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/vpnGateways@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VpnGatewayProperties](#vpngatewayproperties): Properties of the VPN gateway.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/vpnGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/vpnGateways/natRules@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VpnGatewayNatRuleProperties](#vpngatewaynatruleproperties): Properties of the VpnGateway NAT rule.
* **type**: 'Microsoft.Network/vpnGateways/natRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/vpnGateways/vpnConnections@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VpnConnectionProperties](#vpnconnectionproperties): Properties of the VPN connection.
* **type**: 'Microsoft.Network/vpnGateways/vpnConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/vpnGateways/vpnConnections/vpnLinkConnections@2023-04-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VpnSiteLinkConnectionProperties](#vpnsitelinkconnectionproperties) (ReadOnly): Properties of the VPN site link connection.
* **type**: 'Microsoft.Network/vpnGateways/vpnConnections/vpnLinkConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/vpnServerConfigurations@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VpnServerConfigurationProperties](#vpnserverconfigurationproperties): Properties of the P2SVpnServer configuration.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/vpnServerConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/vpnServerConfigurations/configurationPolicyGroups@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VpnServerConfigurationPolicyGroupProperties](#vpnserverconfigurationpolicygroupproperties): Properties of the VpnServerConfigurationPolicyGroup.
* **type**: 'Microsoft.Network/vpnServerConfigurations/configurationPolicyGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/vpnSites@2023-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VpnSiteProperties](#vpnsiteproperties): Properties of the VPN site.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/vpnSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/vpnSites/vpnSiteLinks@2023-04-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VpnSiteLinkProperties](#vpnsitelinkproperties) (ReadOnly): Properties of the VPN site link.
* **type**: 'Microsoft.Network/vpnSites/vpnSiteLinks' (ReadOnly, DeployTimeConstant): The resource type

## Function listActiveConnectivityConfigurations (Microsoft.Network/networkManagers@2023-04-01)
* **Resource**: Microsoft.Network/networkManagers
* **ApiVersion**: 2023-04-01
* **Input**: [ActiveConfigurationParameter](#activeconfigurationparameter)
* **Output**: [ActiveConnectivityConfigurationsListResult](#activeconnectivityconfigurationslistresult)

## Function listActiveSecurityAdminRules (Microsoft.Network/networkManagers@2023-04-01)
* **Resource**: Microsoft.Network/networkManagers
* **ApiVersion**: 2023-04-01
* **Input**: [ActiveConfigurationParameter](#activeconfigurationparameter)
* **Output**: [ActiveSecurityAdminRulesListResult](#activesecurityadminruleslistresult)

## Function listDeploymentStatus (Microsoft.Network/networkManagers@2023-04-01)
* **Resource**: Microsoft.Network/networkManagers
* **ApiVersion**: 2023-04-01
* **Input**: [NetworkManagerDeploymentStatusParameter](#networkmanagerdeploymentstatusparameter)
* **Output**: [NetworkManagerDeploymentStatusListResult](#networkmanagerdeploymentstatuslistresult)

## Function listIdpsFilterOptions (Microsoft.Network/firewallPolicies@2023-04-01)
* **Resource**: Microsoft.Network/firewallPolicies
* **ApiVersion**: 2023-04-01
* **Input**: [SignatureOverridesFilterValuesQuery](#signatureoverridesfiltervaluesquery)
* **Output**: [SignatureOverridesFilterValuesResponse](#signatureoverridesfiltervaluesresponse)

## Function listIdpsSignatures (Microsoft.Network/firewallPolicies@2023-04-01)
* **Resource**: Microsoft.Network/firewallPolicies
* **ApiVersion**: 2023-04-01
* **Input**: [IdpsQueryObject](#idpsqueryobject)
* **Output**: [QueryResults](#queryresults)

## Function listNetworkManagerEffectiveConnectivityConfigurations (Microsoft.Network/virtualNetworks@2023-04-01)
* **Resource**: Microsoft.Network/virtualNetworks
* **ApiVersion**: 2023-04-01
* **Input**: [QueryRequestOptions](#queryrequestoptions)
* **Output**: [NetworkManagerEffectiveConnectivityConfigurationListResult](#networkmanagereffectiveconnectivityconfigurationlistresult)

## Function listNetworkManagerEffectiveSecurityAdminRules (Microsoft.Network/virtualNetworks@2023-04-01)
* **Resource**: Microsoft.Network/virtualNetworks
* **ApiVersion**: 2023-04-01
* **Input**: [QueryRequestOptions](#queryrequestoptions)
* **Output**: [NetworkManagerEffectiveSecurityAdminRulesListResult](#networkmanagereffectivesecurityadminruleslistresult)

## AadAuthenticationParameters
### Properties
* **aadAudience**: string: AAD Vpn authentication parameter AAD audience.
* **aadIssuer**: string: AAD Vpn authentication parameter AAD issuer.
* **aadTenant**: string: AAD Vpn authentication parameter AAD tenant.

## Action
### Properties
* **parameters**: [Parameter](#parameter)[]: List of parameters relevant to the action.For instance if type is drop then parameters has list of prefixes to be dropped.If type is add, parameters would have list of ASN numbers to be added
* **type**: 'Add' | 'Drop' | 'Remove' | 'Replace' | 'Unknown' | string: Type of action to be taken. Supported types are 'Remove', 'Add', 'Replace', and 'Drop.'

## ActiveBaseSecurityAdminRule
* **Discriminator**: kind

### Base Properties
* **commitTime**: string: Deployment time string.
* **configurationDescription**: string: A description of the security admin configuration.
* **id**: string: Resource ID.
* **region**: string: Deployment region.
* **ruleCollectionAppliesToGroups**: [NetworkManagerSecurityGroupItem](#networkmanagersecuritygroupitem)[]: Groups for rule collection
* **ruleCollectionDescription**: string: A description of the rule collection.
* **ruleGroups**: [ConfigurationGroup](#configurationgroup)[]: Effective configuration groups.

### ActiveSecurityAdminRule
#### Properties
* **kind**: 'Custom' (Required): Whether the rule is custom or default.
* **properties**: [AdminPropertiesFormat](#adminpropertiesformat): Indicates the properties of the security admin rule

### ActiveDefaultSecurityAdminRule
#### Properties
* **kind**: 'Default' (Required): Whether the rule is custom or default.
* **properties**: [DefaultAdminPropertiesFormat](#defaultadminpropertiesformat): Indicates the properties of the default security admin rule


## ActiveConfigurationParameter
### Properties
* **regions**: string[]: List of regions.
* **skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.

## ActiveConfigurationParameter
### Properties
* **regions**: string[]: List of regions.
* **skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.

## ActiveConnectivityConfiguration
### Properties
* **commitTime**: string: Deployment time string.
* **configurationGroups**: [ConfigurationGroup](#configurationgroup)[]: Effective configuration groups.
* **id**: string: Connectivity configuration ID.
* **properties**: [ConnectivityConfigurationProperties](#connectivityconfigurationproperties): Properties of a network manager connectivity configuration
* **region**: string: Deployment region.

## ActiveConnectivityConfigurationsListResult
### Properties
* **skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [ActiveConnectivityConfiguration](#activeconnectivityconfiguration)[]: Gets a page of active connectivity configurations.

## ActiveSecurityAdminRulesListResult
### Properties
* **skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [ActiveBaseSecurityAdminRule](#activebasesecurityadminrule)[]: Gets a page of active security admin rules.

## AddressPrefixItem
### Properties
* **addressPrefix**: string: Address prefix.
* **addressPrefixType**: 'IPPrefix' | 'ServiceTag' | string: Address prefix type.

## AddressSpace
### Properties
* **addressPrefixes**: string[]: A list of address blocks reserved for this virtual network in CIDR notation.

## AdminPropertiesFormat
### Properties
* **access**: 'Allow' | 'AlwaysAllow' | 'Deny' | string (Required): Indicates the access allowed for this particular rule
* **description**: string: A description for this rule. Restricted to 140 chars.
* **destinationPortRanges**: string[]: The destination port ranges.
* **destinations**: [AddressPrefixItem](#addressprefixitem)[]: The destination address prefixes. CIDR or destination IP ranges.
* **direction**: 'Inbound' | 'Outbound' | string (Required): Indicates if the traffic matched against the rule in inbound or outbound.
* **priority**: int {minValue: 1, maxValue: 4096} (Required): The priority of the rule. The value can be between 1 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
* **protocol**: 'Ah' | 'Any' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' | string (Required): Network protocol this rule applies to.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **resourceGuid**: string (ReadOnly): Unique identifier for this resource.
* **sourcePortRanges**: string[]: The source port ranges.
* **sources**: [AddressPrefixItem](#addressprefixitem)[]: The CIDR or source IP ranges.

## AdminRuleCollectionPropertiesFormat
### Properties
* **appliesToGroups**: [NetworkManagerSecurityGroupItem](#networkmanagersecuritygroupitem)[] (Required): Groups for configuration
* **description**: string: A description of the admin rule collection.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **resourceGuid**: string (ReadOnly): Unique identifier for this resource.

## ApplicationGateway
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The identity of the application gateway, if configured.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [ApplicationGatewayPropertiesFormat](#applicationgatewaypropertiesformat): Properties of the application gateway.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.
* **zones**: string[]: A list of availability zones denoting where the resource needs to come from.

## ApplicationGatewayAuthenticationCertificate
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the authentication certificate that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayAuthenticationCertificatePropertiesFormat](#applicationgatewayauthenticationcertificatepropertiesformat): Properties of the application gateway authentication certificate.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayAuthenticationCertificatePropertiesFormat
### Properties
* **data**: string: Certificate public data.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the authentication certificate resource.

## ApplicationGatewayAutoscaleConfiguration
### Properties
* **maxCapacity**: int {minValue: 2}: Upper bound on number of Application Gateway capacity.
* **minCapacity**: int {minValue: 0} (Required): Lower bound on number of Application Gateway capacity.

## ApplicationGatewayAvailableSslOptionsPropertiesFormat
### Properties
* **availableCipherSuites**: ('TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA256' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA256' | 'TLS_DHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_DHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_RSA_WITH_3DES_EDE_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_RSA_WITH_AES_256_CBC_SHA' | 'TLS_RSA_WITH_AES_256_CBC_SHA256' | 'TLS_RSA_WITH_AES_256_GCM_SHA384' | string)[]: List of available Ssl cipher suites.
* **availableProtocols**: ('TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3' | string)[]: List of available Ssl protocols.
* **defaultPolicy**: 'AppGwSslPolicy20150501' | 'AppGwSslPolicy20170401' | 'AppGwSslPolicy20170401S' | 'AppGwSslPolicy20220101' | 'AppGwSslPolicy20220101S' | string: Name of the Ssl predefined policy applied by default to application gateway.
* **predefinedPolicies**: [SubResource](#subresource)[]: List of available Ssl predefined policy.

## ApplicationGatewayBackendAddress
### Properties
* **fqdn**: string: Fully qualified domain name (FQDN).
* **ipAddress**: string: IP address.

## ApplicationGatewayBackendAddressPool
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the backend address pool that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayBackendAddressPoolPropertiesFormat](#applicationgatewaybackendaddresspoolpropertiesformat): Properties of the application gateway backend address pool.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayBackendAddressPoolPropertiesFormat
### Properties
* **backendAddresses**: [ApplicationGatewayBackendAddress](#applicationgatewaybackendaddress)[]: Backend addresses.
* **backendIPConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[] (ReadOnly): Collection of references to IPs defined in network interfaces.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the backend address pool resource.

## ApplicationGatewayBackendHttpSettings
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the backend http settings that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayBackendHttpSettingsPropertiesFormat](#applicationgatewaybackendhttpsettingspropertiesformat): Properties of the application gateway backend HTTP settings.
* **type**: string (ReadOnly): Type of the resource.

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
* **protocol**: 'Http' | 'Https' | 'Tcp' | 'Tls' | string: The protocol used to communicate with the backend.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the backend HTTP settings resource.
* **requestTimeout**: int: Request timeout in seconds. Application Gateway will fail the request if response is not received within RequestTimeout. Acceptable values are from 1 second to 86400 seconds.
* **trustedRootCertificates**: [SubResource](#subresource)[]: Array of references to application gateway trusted root certificates.

## ApplicationGatewayBackendSettings
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the backend settings that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayBackendSettingsPropertiesFormat](#applicationgatewaybackendsettingspropertiesformat): Properties of the application gateway backend settings.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayBackendSettingsPropertiesFormat
### Properties
* **hostName**: string: Server name indication to be sent to the backend servers for Tls protocol.
* **pickHostNameFromBackendAddress**: bool: Whether to pick server name indication from the host name of the backend server for Tls protocol. Default value is false.
* **port**: int: The destination port on the backend.
* **probe**: [SubResource](#subresource): Probe resource of an application gateway.
* **protocol**: 'Http' | 'Https' | 'Tcp' | 'Tls' | string: The protocol used to communicate with the backend.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the backend HTTP settings resource.
* **timeout**: int: Connection timeout in seconds. Application Gateway will fail the request if response is not received within ConnectionTimeout. Acceptable values are from 1 second to 86400 seconds.
* **trustedRootCertificates**: [SubResource](#subresource)[]: Array of references to application gateway trusted root certificates.

## ApplicationGatewayClientAuthConfiguration
### Properties
* **verifyClientCertIssuerDN**: bool: Verify client certificate issuer name on the application gateway.
* **verifyClientRevocation**: 'None' | 'OCSP' | string: Verify client certificate revocation status.

## ApplicationGatewayConnectionDraining
### Properties
* **drainTimeoutInSec**: int {minValue: 1, maxValue: 3600} (Required): The number of seconds connection draining is active. Acceptable values are from 1 second to 3600 seconds.
* **enabled**: bool (Required): Whether connection draining is enabled or not.

## ApplicationGatewayCustomError
### Properties
* **customErrorPageUrl**: string: Error page URL of the application gateway custom error.
* **statusCode**: 'HttpStatus400' | 'HttpStatus403' | 'HttpStatus404' | 'HttpStatus405' | 'HttpStatus408' | 'HttpStatus500' | 'HttpStatus502' | 'HttpStatus503' | 'HttpStatus504' | string: Status code of the application gateway custom error.

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
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the frontend IP configuration that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayFrontendIPConfigurationPropertiesFormat](#applicationgatewayfrontendipconfigurationpropertiesformat): Properties of the application gateway frontend IP configuration.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayFrontendIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string: PrivateIPAddress of the network interface IP Configuration.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: The private IP address allocation method.
* **privateLinkConfiguration**: [SubResource](#subresource): Reference to the application gateway private link configuration.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the frontend IP configuration resource.
* **publicIPAddress**: [SubResource](#subresource): Reference to the PublicIP resource.
* **subnet**: [SubResource](#subresource): Reference to the subnet resource.

## ApplicationGatewayFrontendPort
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the frontend port that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayFrontendPortPropertiesFormat](#applicationgatewayfrontendportpropertiesformat): Properties of the application gateway frontend port.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayFrontendPortPropertiesFormat
### Properties
* **port**: int: Frontend port.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the frontend port resource.

## ApplicationGatewayGlobalConfiguration
### Properties
* **enableRequestBuffering**: bool: Enable request buffering.
* **enableResponseBuffering**: bool: Enable response buffering.

## ApplicationGatewayHeaderConfiguration
### Properties
* **headerName**: string: Header name of the header configuration.
* **headerValue**: string: Header value of the header configuration.

## ApplicationGatewayHttpListener
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the HTTP listener that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayHttpListenerPropertiesFormat](#applicationgatewayhttplistenerpropertiesformat): Properties of the application gateway HTTP listener.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayHttpListenerPropertiesFormat
### Properties
* **customErrorConfigurations**: [ApplicationGatewayCustomError](#applicationgatewaycustomerror)[]: Custom error configurations of the HTTP listener.
* **firewallPolicy**: [SubResource](#subresource): Reference to the FirewallPolicy resource.
* **frontendIPConfiguration**: [SubResource](#subresource): Frontend IP configuration resource of an application gateway.
* **frontendPort**: [SubResource](#subresource): Frontend port resource of an application gateway.
* **hostName**: string: Host name of HTTP listener.
* **hostNames**: string[]: List of Host names for HTTP Listener that allows special wildcard characters as well.
* **protocol**: 'Http' | 'Https' | 'Tcp' | 'Tls' | string: Protocol of the HTTP listener.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the HTTP listener resource.
* **requireServerNameIndication**: bool: Applicable only if protocol is https. Enables SNI for multi-hosting.
* **sslCertificate**: [SubResource](#subresource): SSL certificate resource of an application gateway.
* **sslProfile**: [SubResource](#subresource): SSL profile resource of the application gateway.

## ApplicationGatewayIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the IP configuration that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayIPConfigurationPropertiesFormat](#applicationgatewayipconfigurationpropertiesformat): Properties of the application gateway IP configuration.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayIPConfigurationPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the application gateway IP configuration resource.
* **subnet**: [SubResource](#subresource): Reference to the subnet resource. A subnet from where application gateway gets its private address.

## ApplicationGatewayListener
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the listener that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayListenerPropertiesFormat](#applicationgatewaylistenerpropertiesformat): Properties of the application gateway listener.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayListenerPropertiesFormat
### Properties
* **frontendIPConfiguration**: [SubResource](#subresource): Frontend IP configuration resource of an application gateway.
* **frontendPort**: [SubResource](#subresource): Frontend port resource of an application gateway.
* **protocol**: 'Http' | 'Https' | 'Tcp' | 'Tls' | string: Protocol of the listener.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the listener resource.
* **sslCertificate**: [SubResource](#subresource): SSL certificate resource of an application gateway.
* **sslProfile**: [SubResource](#subresource): SSL profile resource of the application gateway.

## ApplicationGatewayLoadDistributionPolicy
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the load distribution policy that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayLoadDistributionPolicyPropertiesFormat](#applicationgatewayloaddistributionpolicypropertiesformat): Properties of the application gateway load distribution policy.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayLoadDistributionPolicyPropertiesFormat
### Properties
* **loadDistributionAlgorithm**: 'IpHash' | 'LeastConnections' | 'RoundRobin' | string: Load Distribution Targets resource of an application gateway.
* **loadDistributionTargets**: [ApplicationGatewayLoadDistributionTarget](#applicationgatewayloaddistributiontarget)[]: Load Distribution Targets resource of an application gateway.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the Load Distribution Policy resource.

## ApplicationGatewayLoadDistributionTarget
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the load distribution policy that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayLoadDistributionTargetPropertiesFormat](#applicationgatewayloaddistributiontargetpropertiesformat): Properties of the application gateway load distribution target.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayLoadDistributionTargetPropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource): Backend address pool resource of the application gateway.
* **weightPerServer**: int {minValue: 1, maxValue: 100}: Weight per server. Range between 1 and 100.

## ApplicationGatewayPathRule
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the path rule that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayPathRulePropertiesFormat](#applicationgatewaypathrulepropertiesformat): Properties of the application gateway path rule.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayPathRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource): Backend address pool resource of URL path map path rule.
* **backendHttpSettings**: [SubResource](#subresource): Backend http settings resource of URL path map path rule.
* **firewallPolicy**: [SubResource](#subresource): Reference to the FirewallPolicy resource.
* **loadDistributionPolicy**: [SubResource](#subresource): Load Distribution Policy resource of URL path map path rule.
* **paths**: string[]: Path rules of URL path map.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the path rule resource.
* **redirectConfiguration**: [SubResource](#subresource): Redirect configuration resource of URL path map path rule.
* **rewriteRuleSet**: [SubResource](#subresource): Rewrite rule set resource of URL path map path rule.

## ApplicationGatewayPrivateEndpointConnection
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the private endpoint connection on an application gateway.
* **properties**: [ApplicationGatewayPrivateEndpointConnectionProperties](#applicationgatewayprivateendpointconnectionproperties): Properties of the application gateway private endpoint connection.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayPrivateEndpointConnectionProperties
### Properties
* **linkIdentifier**: string (ReadOnly): The consumer link id.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint) (ReadOnly): The resource of private end point.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the application gateway private endpoint connection resource.

## ApplicationGatewayPrivateLinkConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the private link configuration that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayPrivateLinkConfigurationProperties](#applicationgatewayprivatelinkconfigurationproperties): Properties of the application gateway private link configuration.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayPrivateLinkConfigurationProperties
### Properties
* **ipConfigurations**: [ApplicationGatewayPrivateLinkIpConfiguration](#applicationgatewayprivatelinkipconfiguration)[]: An array of application gateway private link ip configurations.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the application gateway private link configuration.

## ApplicationGatewayPrivateLinkIpConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of application gateway private link ip configuration.
* **properties**: [ApplicationGatewayPrivateLinkIpConfigurationProperties](#applicationgatewayprivatelinkipconfigurationproperties): Properties of an application gateway private link ip configuration.
* **type**: string (ReadOnly): The resource type.

## ApplicationGatewayPrivateLinkIpConfigurationProperties
### Properties
* **primary**: bool: Whether the ip configuration is primary or not.
* **privateIPAddress**: string: The private IP address of the IP configuration.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: The private IP address allocation method.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the application gateway private link IP configuration.
* **subnet**: [SubResource](#subresource): Reference to the subnet resource.

## ApplicationGatewayProbe
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the probe that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayProbePropertiesFormat](#applicationgatewayprobepropertiesformat): Properties of the application gateway probe.
* **type**: string (ReadOnly): Type of the resource.

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
* **path**: string: Relative path of probe. Valid path starts from '/'. Probe is sent to <Protocol>://<host>:<port><path>.
* **pickHostNameFromBackendHttpSettings**: bool: Whether the host header should be picked from the backend http settings. Default value is false.
* **pickHostNameFromBackendSettings**: bool: Whether the server name indication should be picked from the backend settings for Tls protocol. Default value is false.
* **port**: int {minValue: 1, maxValue: 65535}: Custom port which will be used for probing the backend servers. The valid value ranges from 1 to 65535. In case not set, port from http settings will be used. This property is valid for Basic, Standard_v2 and WAF_v2 only.
* **protocol**: 'Http' | 'Https' | 'Tcp' | 'Tls' | string: The protocol used for the probe.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the probe resource.
* **timeout**: int: The probe timeout in seconds. Probe marked as failed if valid response is not received with this timeout period. Acceptable values are from 1 second to 86400 seconds.
* **unhealthyThreshold**: int: The probe retry count. Backend server is marked down after consecutive probe failure count reaches UnhealthyThreshold. Acceptable values are from 1 second to 20.

## ApplicationGatewayPropertiesFormat
### Properties
* **authenticationCertificates**: [ApplicationGatewayAuthenticationCertificate](#applicationgatewayauthenticationcertificate)[]: Authentication certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **autoscaleConfiguration**: [ApplicationGatewayAutoscaleConfiguration](#applicationgatewayautoscaleconfiguration): Autoscale Configuration.
* **backendAddressPools**: [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)[]: Backend address pool of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **backendHttpSettingsCollection**: [ApplicationGatewayBackendHttpSettings](#applicationgatewaybackendhttpsettings)[]: Backend http settings of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **backendSettingsCollection**: [ApplicationGatewayBackendSettings](#applicationgatewaybackendsettings)[]: Backend settings of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **customErrorConfigurations**: [ApplicationGatewayCustomError](#applicationgatewaycustomerror)[]: Custom error configurations of the application gateway resource.
* **defaultPredefinedSslPolicy**: 'AppGwSslPolicy20150501' | 'AppGwSslPolicy20170401' | 'AppGwSslPolicy20170401S' | 'AppGwSslPolicy20220101' | 'AppGwSslPolicy20220101S' | string (ReadOnly): The default predefined SSL Policy applied on the application gateway resource.
* **enableFips**: bool: Whether FIPS is enabled on the application gateway resource.
* **enableHttp2**: bool: Whether HTTP2 is enabled on the application gateway resource.
* **firewallPolicy**: [SubResource](#subresource): Reference to the FirewallPolicy resource.
* **forceFirewallPolicyAssociation**: bool: If true, associates a firewall policy with an application gateway regardless whether the policy differs from the WAF Config.
* **frontendIPConfigurations**: [ApplicationGatewayFrontendIPConfiguration](#applicationgatewayfrontendipconfiguration)[]: Frontend IP addresses of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **frontendPorts**: [ApplicationGatewayFrontendPort](#applicationgatewayfrontendport)[]: Frontend ports of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **gatewayIPConfigurations**: [ApplicationGatewayIPConfiguration](#applicationgatewayipconfiguration)[]: Subnets of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **globalConfiguration**: [ApplicationGatewayGlobalConfiguration](#applicationgatewayglobalconfiguration): Global Configuration.
* **httpListeners**: [ApplicationGatewayHttpListener](#applicationgatewayhttplistener)[]: Http listeners of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **listeners**: [ApplicationGatewayListener](#applicationgatewaylistener)[]: Listeners of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **loadDistributionPolicies**: [ApplicationGatewayLoadDistributionPolicy](#applicationgatewayloaddistributionpolicy)[]: Load distribution policies of the application gateway resource.
* **operationalState**: 'Running' | 'Starting' | 'Stopped' | 'Stopping' | string (ReadOnly): Operational state of the application gateway resource.
* **privateEndpointConnections**: [ApplicationGatewayPrivateEndpointConnection](#applicationgatewayprivateendpointconnection)[] (ReadOnly): Private Endpoint connections on application gateway.
* **privateLinkConfigurations**: [ApplicationGatewayPrivateLinkConfiguration](#applicationgatewayprivatelinkconfiguration)[]: PrivateLink configurations on application gateway.
* **probes**: [ApplicationGatewayProbe](#applicationgatewayprobe)[]: Probes of the application gateway resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the application gateway resource.
* **redirectConfigurations**: [ApplicationGatewayRedirectConfiguration](#applicationgatewayredirectconfiguration)[]: Redirect configurations of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **requestRoutingRules**: [ApplicationGatewayRequestRoutingRule](#applicationgatewayrequestroutingrule)[]: Request routing rules of the application gateway resource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the application gateway resource.
* **rewriteRuleSets**: [ApplicationGatewayRewriteRuleSet](#applicationgatewayrewriteruleset)[]: Rewrite rules for the application gateway resource.
* **routingRules**: [ApplicationGatewayRoutingRule](#applicationgatewayroutingrule)[]: Routing rules of the application gateway resource.
* **sku**: [ApplicationGatewaySku](#applicationgatewaysku): SKU of the application gateway resource.
* **sslCertificates**: [ApplicationGatewaySslCertificate](#applicationgatewaysslcertificate)[]: SSL certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **sslPolicy**: [ApplicationGatewaySslPolicy](#applicationgatewaysslpolicy): SSL policy of the application gateway resource.
* **sslProfiles**: [ApplicationGatewaySslProfile](#applicationgatewaysslprofile)[]: SSL profiles of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **trustedClientCertificates**: [ApplicationGatewayTrustedClientCertificate](#applicationgatewaytrustedclientcertificate)[]: Trusted client certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **trustedRootCertificates**: [ApplicationGatewayTrustedRootCertificate](#applicationgatewaytrustedrootcertificate)[]: Trusted Root certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **urlPathMaps**: [ApplicationGatewayUrlPathMap](#applicationgatewayurlpathmap)[]: URL path map of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
* **webApplicationFirewallConfiguration**: [ApplicationGatewayWebApplicationFirewallConfiguration](#applicationgatewaywebapplicationfirewallconfiguration): Web application firewall configuration.

## ApplicationGatewayRedirectConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the redirect configuration that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayRedirectConfigurationPropertiesFormat](#applicationgatewayredirectconfigurationpropertiesformat): Properties of the application gateway redirect configuration.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayRedirectConfigurationPropertiesFormat
### Properties
* **includePath**: bool: Include path in the redirected url.
* **includeQueryString**: bool: Include query string in the redirected url.
* **pathRules**: [SubResource](#subresource)[]: Path rules specifying redirect configuration.
* **redirectType**: 'Found' | 'Permanent' | 'SeeOther' | 'Temporary' | string: HTTP redirection type.
* **requestRoutingRules**: [SubResource](#subresource)[]: Request routing specifying redirect configuration.
* **targetListener**: [SubResource](#subresource): Reference to a listener to redirect the request to.
* **targetUrl**: string: Url to redirect the request to.
* **urlPathMaps**: [SubResource](#subresource)[]: Url path maps specifying default redirect configuration.

## ApplicationGatewayRequestRoutingRule
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the request routing rule that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayRequestRoutingRulePropertiesFormat](#applicationgatewayrequestroutingrulepropertiesformat): Properties of the application gateway request routing rule.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayRequestRoutingRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource): Backend address pool resource of the application gateway.
* **backendHttpSettings**: [SubResource](#subresource): Backend http settings resource of the application gateway.
* **httpListener**: [SubResource](#subresource): Http listener resource of the application gateway.
* **loadDistributionPolicy**: [SubResource](#subresource): Load Distribution Policy resource of the application gateway.
* **priority**: int {minValue: 1, maxValue: 20000}: Priority of the request routing rule.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the request routing rule resource.
* **redirectConfiguration**: [SubResource](#subresource): Redirect configuration resource of the application gateway.
* **rewriteRuleSet**: [SubResource](#subresource): Rewrite Rule Set resource in Basic rule of the application gateway.
* **ruleType**: 'Basic' | 'PathBasedRouting' | string: Rule type.
* **urlPathMap**: [SubResource](#subresource): URL path map resource of the application gateway.

## ApplicationGatewayRewriteRule
### Properties
* **actionSet**: [ApplicationGatewayRewriteRuleActionSet](#applicationgatewayrewriteruleactionset): Set of actions to be done as part of the rewrite Rule.
* **conditions**: [ApplicationGatewayRewriteRuleCondition](#applicationgatewayrewriterulecondition)[]: Conditions based on which the action set execution will be evaluated.
* **name**: string: Name of the rewrite rule that is unique within an Application Gateway.
* **ruleSequence**: int: Rule Sequence of the rewrite rule that determines the order of execution of a particular rule in a RewriteRuleSet.

## ApplicationGatewayRewriteRuleActionSet
### Properties
* **requestHeaderConfigurations**: [ApplicationGatewayHeaderConfiguration](#applicationgatewayheaderconfiguration)[]: Request Header Actions in the Action Set.
* **responseHeaderConfigurations**: [ApplicationGatewayHeaderConfiguration](#applicationgatewayheaderconfiguration)[]: Response Header Actions in the Action Set.
* **urlConfiguration**: [ApplicationGatewayUrlConfiguration](#applicationgatewayurlconfiguration): Url Configuration Action in the Action Set.

## ApplicationGatewayRewriteRuleCondition
### Properties
* **ignoreCase**: bool: Setting this parameter to truth value with force the pattern to do a case in-sensitive comparison.
* **negate**: bool: Setting this value as truth will force to check the negation of the condition given by the user.
* **pattern**: string: The pattern, either fixed string or regular expression, that evaluates the truthfulness of the condition.
* **variable**: string: The condition parameter of the RewriteRuleCondition.

## ApplicationGatewayRewriteRuleSet
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the rewrite rule set that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayRewriteRuleSetPropertiesFormat](#applicationgatewayrewriterulesetpropertiesformat): Properties of the application gateway rewrite rule set.

## ApplicationGatewayRewriteRuleSetPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the rewrite rule set resource.
* **rewriteRules**: [ApplicationGatewayRewriteRule](#applicationgatewayrewriterule)[]: Rewrite rules in the rewrite rule set.

## ApplicationGatewayRoutingRule
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the routing rule that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayRoutingRulePropertiesFormat](#applicationgatewayroutingrulepropertiesformat): Properties of the application gateway routing rule.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayRoutingRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource): Backend address pool resource of the application gateway.
* **backendSettings**: [SubResource](#subresource): Backend settings resource of the application gateway.
* **listener**: [SubResource](#subresource): Listener resource of the application gateway.
* **priority**: int {minValue: 1, maxValue: 20000} (Required): Priority of the routing rule.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the request routing rule resource.
* **ruleType**: 'Basic' | 'PathBasedRouting' | string: Rule type.

## ApplicationGatewaySku
### Properties
* **capacity**: int: Capacity (instance count) of an application gateway.
* **name**: 'Basic' | 'Standard_Large' | 'Standard_Medium' | 'Standard_Small' | 'Standard_v2' | 'WAF_Large' | 'WAF_Medium' | 'WAF_v2' | string: Name of an application gateway SKU.
* **tier**: 'Basic' | 'Standard' | 'Standard_v2' | 'WAF' | 'WAF_v2' | string: Tier of an application gateway.

## ApplicationGatewaySslCertificate
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the SSL certificate that is unique within an Application Gateway.
* **properties**: [ApplicationGatewaySslCertificatePropertiesFormat](#applicationgatewaysslcertificatepropertiesformat): Properties of the application gateway SSL certificate.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewaySslCertificatePropertiesFormat
### Properties
* **data**: string: Base-64 encoded pfx certificate. Only applicable in PUT Request.
* **keyVaultSecretId**: string: Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
* **password**: string: Password for the pfx file specified in data. Only applicable in PUT request.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the SSL certificate resource.
* **publicCertData**: string (ReadOnly): Base-64 encoded Public cert data corresponding to pfx specified in data. Only applicable in GET request.

## ApplicationGatewaySslPolicy
### Properties
* **cipherSuites**: ('TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA256' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA256' | 'TLS_DHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_DHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_RSA_WITH_3DES_EDE_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_RSA_WITH_AES_256_CBC_SHA' | 'TLS_RSA_WITH_AES_256_CBC_SHA256' | 'TLS_RSA_WITH_AES_256_GCM_SHA384' | string)[]: Ssl cipher suites to be enabled in the specified order to application gateway.
* **disabledSslProtocols**: ('TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3' | string)[]: Ssl protocols to be disabled on application gateway.
* **minProtocolVersion**: 'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3' | string: Minimum version of Ssl protocol to be supported on application gateway.
* **policyName**: 'AppGwSslPolicy20150501' | 'AppGwSslPolicy20170401' | 'AppGwSslPolicy20170401S' | 'AppGwSslPolicy20220101' | 'AppGwSslPolicy20220101S' | string: Name of Ssl predefined policy.
* **policyType**: 'Custom' | 'CustomV2' | 'Predefined' | string: Type of Ssl Policy.

## ApplicationGatewaySslPredefinedPolicyPropertiesFormat
### Properties
* **cipherSuites**: ('TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA256' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA256' | 'TLS_DHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_DHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_RSA_WITH_3DES_EDE_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_RSA_WITH_AES_256_CBC_SHA' | 'TLS_RSA_WITH_AES_256_CBC_SHA256' | 'TLS_RSA_WITH_AES_256_GCM_SHA384' | string)[]: Ssl cipher suites to be enabled in the specified order for application gateway.
* **minProtocolVersion**: 'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3' | string: Minimum version of Ssl protocol to be supported on application gateway.

## ApplicationGatewaySslProfile
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the SSL profile that is unique within an Application Gateway.
* **properties**: [ApplicationGatewaySslProfilePropertiesFormat](#applicationgatewaysslprofilepropertiesformat): Properties of the application gateway SSL profile.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewaySslProfilePropertiesFormat
### Properties
* **clientAuthConfiguration**: [ApplicationGatewayClientAuthConfiguration](#applicationgatewayclientauthconfiguration): Client authentication configuration of the application gateway resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the HTTP listener resource.
* **sslPolicy**: [ApplicationGatewaySslPolicy](#applicationgatewaysslpolicy): SSL policy of the application gateway resource.
* **trustedClientCertificates**: [SubResource](#subresource)[]: Array of references to application gateway trusted client certificates.

## ApplicationGatewayTrustedClientCertificate
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the trusted client certificate that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayTrustedClientCertificatePropertiesFormat](#applicationgatewaytrustedclientcertificatepropertiesformat): Properties of the application gateway trusted client certificate.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayTrustedClientCertificatePropertiesFormat
### Properties
* **clientCertIssuerDN**: string (ReadOnly): Distinguished name of client certificate issuer.
* **data**: string: Certificate public data.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the trusted client certificate resource.
* **validatedCertData**: string (ReadOnly): Validated certificate data.

## ApplicationGatewayTrustedRootCertificate
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the trusted root certificate that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayTrustedRootCertificatePropertiesFormat](#applicationgatewaytrustedrootcertificatepropertiesformat): Properties of the application gateway trusted root certificate.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayTrustedRootCertificatePropertiesFormat
### Properties
* **data**: string: Certificate public data.
* **keyVaultSecretId**: string: Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the trusted root certificate resource.

## ApplicationGatewayUrlConfiguration
### Properties
* **modifiedPath**: string: Url path which user has provided for url rewrite. Null means no path will be updated. Default value is null.
* **modifiedQueryString**: string: Query string which user has provided for url rewrite. Null means no query string will be updated. Default value is null.
* **reroute**: bool: If set as true, it will re-evaluate the url path map provided in path based request routing rules using modified path. Default value is false.

## ApplicationGatewayUrlPathMap
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the URL path map that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayUrlPathMapPropertiesFormat](#applicationgatewayurlpathmappropertiesformat): Properties of the application gateway URL path map.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayUrlPathMapPropertiesFormat
### Properties
* **defaultBackendAddressPool**: [SubResource](#subresource): Default backend address pool resource of URL path map.
* **defaultBackendHttpSettings**: [SubResource](#subresource): Default backend http settings resource of URL path map.
* **defaultLoadDistributionPolicy**: [SubResource](#subresource): Default Load Distribution Policy resource of URL path map.
* **defaultRedirectConfiguration**: [SubResource](#subresource): Default redirect configuration resource of URL path map.
* **defaultRewriteRuleSet**: [SubResource](#subresource): Default Rewrite rule set resource of URL path map.
* **pathRules**: [ApplicationGatewayPathRule](#applicationgatewaypathrule)[]: Path rule of URL path map resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the URL path map resource.

## ApplicationGatewayWebApplicationFirewallConfiguration
### Properties
* **disabledRuleGroups**: [ApplicationGatewayFirewallDisabledRuleGroup](#applicationgatewayfirewalldisabledrulegroup)[]: The disabled rule groups.
* **enabled**: bool (Required): Whether the web application firewall is enabled or not.
* **exclusions**: [ApplicationGatewayFirewallExclusion](#applicationgatewayfirewallexclusion)[]: The exclusion list.
* **fileUploadLimitInMb**: int {minValue: 0}: Maximum file upload size in Mb for WAF.
* **firewallMode**: 'Detection' | 'Prevention' | string (Required): Web application firewall mode.
* **maxRequestBodySize**: int {minValue: 8, maxValue: 128}: Maximum request body size for WAF.
* **maxRequestBodySizeInKb**: int {minValue: 8, maxValue: 128}: Maximum request body size in Kb for WAF.
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the application security group resource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.

## AuthorizationPropertiesFormat
### Properties
* **authorizationKey**: string: The authorization key.
* **authorizationUseStatus**: 'Available' | 'InUse' | string: The authorization use status.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the authorization resource.

## AzureFirewallAdditionalProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AzureFirewallApplicationRule
### Properties
* **description**: string: Description of the rule.
* **fqdnTags**: string[]: List of FQDN Tags for this rule.
* **name**: string: Name of the application rule.
* **protocols**: [AzureFirewallApplicationRuleProtocol](#azurefirewallapplicationruleprotocol)[]: Array of ApplicationRuleProtocols.
* **sourceAddresses**: string[]: List of source IP addresses for this rule.
* **sourceIpGroups**: string[]: List of source IpGroups for this rule.
* **targetFqdns**: string[]: List of FQDNs for this rule.

## AzureFirewallApplicationRuleCollection
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within the Azure firewall. This name can be used to access the resource.
* **properties**: [AzureFirewallApplicationRuleCollectionPropertiesFormat](#azurefirewallapplicationrulecollectionpropertiesformat): Properties of the azure firewall application rule collection.

## AzureFirewallApplicationRuleCollectionPropertiesFormat
### Properties
* **action**: [AzureFirewallRCAction](#azurefirewallrcaction): The action type of a rule collection.
* **priority**: int {minValue: 100, maxValue: 65000}: Priority of the application rule collection resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the application rule collection resource.
* **rules**: [AzureFirewallApplicationRule](#azurefirewallapplicationrule)[]: Collection of rules used by a application rule collection.

## AzureFirewallApplicationRuleProtocol
### Properties
* **port**: int {minValue: 0, maxValue: 64000}: Port number for the protocol, cannot be greater than 64000. This field is optional.
* **protocolType**: 'Http' | 'Https' | 'Mssql' | string: Protocol type.

## AzureFirewallIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [AzureFirewallIPConfigurationPropertiesFormat](#azurefirewallipconfigurationpropertiesformat): Properties of the azure firewall IP configuration.
* **type**: string (ReadOnly): Type of the resource.

## AzureFirewallIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string (ReadOnly): The Firewall Internal Load Balancer IP to be used as the next hop in User Defined Routes.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the Azure firewall IP configuration resource.
* **publicIPAddress**: [SubResource](#subresource): Reference to the PublicIP resource. This field is a mandatory input if subnet is not null.
* **subnet**: [SubResource](#subresource): Reference to the subnet resource. This resource must be named 'AzureFirewallSubnet' or 'AzureFirewallManagementSubnet'.

## AzureFirewallIpGroups
### Properties
* **changeNumber**: string (ReadOnly): The iteration number.
* **id**: string (ReadOnly): Resource ID.

## AzureFirewallNatRCAction
### Properties
* **type**: 'Dnat' | 'Snat' | string: The type of action.

## AzureFirewallNatRule
### Properties
* **description**: string: Description of the rule.
* **destinationAddresses**: string[]: List of destination IP addresses for this rule. Supports IP ranges, prefixes, and service tags.
* **destinationPorts**: string[]: List of destination ports.
* **name**: string: Name of the NAT rule.
* **protocols**: ('Any' | 'ICMP' | 'TCP' | 'UDP' | string)[]: Array of AzureFirewallNetworkRuleProtocols applicable to this NAT rule.
* **sourceAddresses**: string[]: List of source IP addresses for this rule.
* **sourceIpGroups**: string[]: List of source IpGroups for this rule.
* **translatedAddress**: string: The translated address for this NAT rule.
* **translatedFqdn**: string: The translated FQDN for this NAT rule.
* **translatedPort**: string: The translated port for this NAT rule.

## AzureFirewallNatRuleCollection
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within the Azure firewall. This name can be used to access the resource.
* **properties**: [AzureFirewallNatRuleCollectionProperties](#azurefirewallnatrulecollectionproperties): Properties of the azure firewall NAT rule collection.

## AzureFirewallNatRuleCollectionProperties
### Properties
* **action**: [AzureFirewallNatRCAction](#azurefirewallnatrcaction): The action type of a NAT rule collection.
* **priority**: int {minValue: 100, maxValue: 65000}: Priority of the NAT rule collection resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the NAT rule collection resource.
* **rules**: [AzureFirewallNatRule](#azurefirewallnatrule)[]: Collection of rules used by a NAT rule collection.

## AzureFirewallNetworkRule
### Properties
* **description**: string: Description of the rule.
* **destinationAddresses**: string[]: List of destination IP addresses.
* **destinationFqdns**: string[]: List of destination FQDNs.
* **destinationIpGroups**: string[]: List of destination IpGroups for this rule.
* **destinationPorts**: string[]: List of destination ports.
* **name**: string: Name of the network rule.
* **protocols**: ('Any' | 'ICMP' | 'TCP' | 'UDP' | string)[]: Array of AzureFirewallNetworkRuleProtocols.
* **sourceAddresses**: string[]: List of source IP addresses for this rule.
* **sourceIpGroups**: string[]: List of source IpGroups for this rule.

## AzureFirewallNetworkRuleCollection
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within the Azure firewall. This name can be used to access the resource.
* **properties**: [AzureFirewallNetworkRuleCollectionPropertiesFormat](#azurefirewallnetworkrulecollectionpropertiesformat): Properties of the azure firewall network rule collection.

## AzureFirewallNetworkRuleCollectionPropertiesFormat
### Properties
* **action**: [AzureFirewallRCAction](#azurefirewallrcaction): The action type of a rule collection.
* **priority**: int {minValue: 100, maxValue: 65000}: Priority of the network rule collection resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the network rule collection resource.
* **rules**: [AzureFirewallNetworkRule](#azurefirewallnetworkrule)[]: Collection of rules used by a network rule collection.

## AzureFirewallPropertiesFormat
### Properties
* **additionalProperties**: [AzureFirewallAdditionalProperties](#azurefirewalladditionalproperties): The additional properties used to further config this azure firewall.
* **applicationRuleCollections**: [AzureFirewallApplicationRuleCollection](#azurefirewallapplicationrulecollection)[]: Collection of application rule collections used by Azure Firewall.
* **firewallPolicy**: [SubResource](#subresource): The firewallPolicy associated with this azure firewall.
* **hubIPAddresses**: [HubIPAddresses](#hubipaddresses): IP addresses associated with AzureFirewall.
* **ipConfigurations**: [AzureFirewallIPConfiguration](#azurefirewallipconfiguration)[]: IP configuration of the Azure Firewall resource.
* **ipGroups**: [AzureFirewallIpGroups](#azurefirewallipgroups)[] (ReadOnly): IpGroups associated with AzureFirewall.
* **managementIpConfiguration**: [AzureFirewallIPConfiguration](#azurefirewallipconfiguration): IP configuration of the Azure Firewall used for management traffic.
* **natRuleCollections**: [AzureFirewallNatRuleCollection](#azurefirewallnatrulecollection)[]: Collection of NAT rule collections used by Azure Firewall.
* **networkRuleCollections**: [AzureFirewallNetworkRuleCollection](#azurefirewallnetworkrulecollection)[]: Collection of network rule collections used by Azure Firewall.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the Azure firewall resource.
* **sku**: [AzureFirewallSku](#azurefirewallsku): The Azure Firewall Resource SKU.
* **threatIntelMode**: 'Alert' | 'Deny' | 'Off' | string: The operation mode for Threat Intelligence.
* **virtualHub**: [SubResource](#subresource): The virtualHub to which the firewall belongs.

## AzureFirewallPublicIPAddress
### Properties
* **address**: string: Public IP Address value.

## AzureFirewallRCAction
### Properties
* **type**: 'Allow' | 'Deny' | string: The type of action.

## AzureFirewallSku
### Properties
* **name**: 'AZFW_Hub' | 'AZFW_VNet' | string: Name of an Azure Firewall SKU.
* **tier**: 'Basic' | 'Premium' | 'Standard' | string: Tier of an Azure Firewall.

## BackendAddressPool
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within the set of backend address pools used by the load balancer. This name can be used to access the resource.
* **properties**: [BackendAddressPoolPropertiesFormat](#backendaddresspoolpropertiesformat): Properties of load balancer backend address pool.
* **type**: string (ReadOnly): Type of the resource.

## BackendAddressPoolPropertiesFormat
### Properties
* **backendIPConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[] (ReadOnly): An array of references to IP addresses defined in network interfaces.
* **drainPeriodInSeconds**: int: Amount of seconds Load Balancer waits for before sending RESET to client and backend address.
* **inboundNatRules**: [SubResource](#subresource)[] (ReadOnly): An array of references to inbound NAT rules that use this backend address pool.
* **loadBalancerBackendAddresses**: [LoadBalancerBackendAddress](#loadbalancerbackendaddress)[]: An array of backend addresses.
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly): An array of references to load balancing rules that use this backend address pool.
* **location**: string: The location of the backend address pool.
* **outboundRule**: [SubResource](#subresource) (ReadOnly): A reference to an outbound rule that uses this backend address pool.
* **outboundRules**: [SubResource](#subresource)[] (ReadOnly): An array of references to outbound rules that use this backend address pool.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the backend address pool resource.
* **syncMode**: 'Automatic' | 'Manual' | string: Backend address synchronous mode for the backend pool
* **tunnelInterfaces**: [GatewayLoadBalancerTunnelInterface](#gatewayloadbalancertunnelinterface)[]: An array of gateway load balancer tunnel interfaces.
* **virtualNetwork**: [SubResource](#subresource): A reference to a virtual network.

## BastionHostIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [BastionHostIPConfigurationPropertiesFormat](#bastionhostipconfigurationpropertiesformat): Represents the ip configuration associated with the resource.
* **type**: string (ReadOnly): Ip configuration type.

## BastionHostIPConfigurationPropertiesFormat
### Properties
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: Private IP allocation method.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the bastion host IP configuration resource.
* **publicIPAddress**: [SubResource](#subresource) (Required): Reference of the PublicIP resource.
* **subnet**: [SubResource](#subresource) (Required): Reference of the subnet resource.

## BastionHostPropertiesFormat
### Properties
* **disableCopyPaste**: bool: Enable/Disable Copy/Paste feature of the Bastion Host resource.
* **dnsName**: string: FQDN for the endpoint on which bastion host is accessible.
* **enableFileCopy**: bool: Enable/Disable File Copy feature of the Bastion Host resource.
* **enableIpConnect**: bool: Enable/Disable IP Connect feature of the Bastion Host resource.
* **enableKerberos**: bool: Enable/Disable Kerberos feature of the Bastion Host resource.
* **enableShareableLink**: bool: Enable/Disable Shareable Link of the Bastion Host resource.
* **enableTunneling**: bool: Enable/Disable Tunneling feature of the Bastion Host resource.
* **ipConfigurations**: [BastionHostIPConfiguration](#bastionhostipconfiguration)[]: IP configuration of the Bastion Host resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the bastion host resource.
* **scaleUnits**: int {minValue: 2, maxValue: 50}: The scale units for the Bastion Host resource.

## BgpConnectionProperties
### Properties
* **connectionState**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' | string (ReadOnly): The current state of the VirtualHub to Peer.
* **hubVirtualNetworkConnection**: [SubResource](#subresource): The reference to the HubVirtualNetworkConnection resource.
* **peerAsn**: int {minValue: 0, maxValue: 4294967295}: Peer ASN.
* **peerIp**: string: Peer IP.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## BgpSettings
### Properties
* **asn**: int {minValue: 0, maxValue: 4294967295}: The BGP speaker's ASN.
* **bgpPeeringAddress**: string: The BGP peering address and BGP identifier of this BGP speaker.
* **bgpPeeringAddresses**: [IPConfigurationBgpPeeringAddress](#ipconfigurationbgppeeringaddress)[]: BGP peering address with IP configuration ID for virtual network gateway.
* **peerWeight**: int: The weight added to routes learned from this BGP speaker.

## BreakOutCategoryPolicies
### Properties
* **allow**: bool: Flag to control breakout of o365 allow category.
* **default**: bool: Flag to control breakout of o365 default category.
* **optimize**: bool: Flag to control breakout of o365 optimize category.

## Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## ConfigurationGroup
### Properties
* **id**: string: Network group ID.
* **properties**: [NetworkGroupProperties](#networkgroupproperties): The network configuration group properties

## ConnectionMonitorDestination
### Properties
* **address**: string: Address of the connection monitor destination (IP or domain name).
* **port**: int {minValue: 0, maxValue: 65535}: The destination port used by connection monitor.
* **resourceId**: string: The ID of the resource used as the destination by connection monitor.

## ConnectionMonitorEndpoint
### Properties
* **address**: string: Address of the connection monitor endpoint (IP or domain name).
* **coverageLevel**: 'AboveAverage' | 'Average' | 'BelowAverage' | 'Default' | 'Full' | 'Low' | string: Test coverage for the endpoint.
* **filter**: [ConnectionMonitorEndpointFilter](#connectionmonitorendpointfilter): Filter for sub-items within the endpoint.
* **name**: string (Required): The name of the connection monitor endpoint.
* **resourceId**: string: Resource ID of the connection monitor endpoint.
* **scope**: [ConnectionMonitorEndpointScope](#connectionmonitorendpointscope): Endpoint scope.
* **type**: 'AzureArcVM' | 'AzureSubnet' | 'AzureVM' | 'AzureVMSS' | 'AzureVNet' | 'ExternalAddress' | 'MMAWorkspaceMachine' | 'MMAWorkspaceNetwork' | string: The endpoint type.

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

## ConnectionMonitorHttpConfiguration
### Properties
* **method**: 'Get' | 'Post' | string: The HTTP method to use.
* **path**: string: The path component of the URI. For instance, "/dir1/dir2".
* **port**: int {minValue: 0, maxValue: 65535}: The port to connect to.
* **preferHTTPS**: bool: Value indicating whether HTTPS is preferred over HTTP in cases where the choice is not explicit.
* **requestHeaders**: [HttpHeader](#httpheader)[]: The HTTP headers to transmit with the request.
* **validStatusCodeRanges**: string[]: HTTP status codes to consider successful. For instance, "2xx,301-304,418".

## ConnectionMonitorIcmpConfiguration
### Properties
* **disableTraceRoute**: bool: Value indicating whether path evaluation with trace route should be disabled.

## ConnectionMonitorOutput
### Properties
* **type**: 'Workspace' | string: Connection monitor output destination type. Currently, only "Workspace" is supported.
* **workspaceSettings**: [ConnectionMonitorWorkspaceSettings](#connectionmonitorworkspacesettings): Describes the settings for producing output into a log analytics workspace.

## ConnectionMonitorParametersOrConnectionMonitorResultProperties
### Properties
* **autoStart**: bool: Determines if the connection monitor will start automatically once created.
* **connectionMonitorType**: 'MultiEndpoint' | 'SingleSourceDestination' | string (ReadOnly): Type of connection monitor.
* **destination**: [ConnectionMonitorDestination](#connectionmonitordestination): Describes the destination of connection monitor.
* **endpoints**: [ConnectionMonitorEndpoint](#connectionmonitorendpoint)[]: List of connection monitor endpoints.
* **monitoringIntervalInSeconds**: int {minValue: 30, maxValue: 1800}: Monitoring interval in seconds.
* **monitoringStatus**: string (ReadOnly): The monitoring status of the connection monitor.
* **notes**: string: Optional notes to be associated with the connection monitor.
* **outputs**: [ConnectionMonitorOutput](#connectionmonitoroutput)[]: List of connection monitor outputs.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the connection monitor.
* **source**: [ConnectionMonitorSource](#connectionmonitorsource): Describes the source of connection monitor.
* **startTime**: string (ReadOnly): The date and time when the connection monitor was started.
* **testConfigurations**: [ConnectionMonitorTestConfiguration](#connectionmonitortestconfiguration)[]: List of connection monitor test configurations.
* **testGroups**: [ConnectionMonitorTestGroup](#connectionmonitortestgroup)[]: List of connection monitor test groups.

## ConnectionMonitorSource
### Properties
* **port**: int {minValue: 0, maxValue: 65535}: The source port used by connection monitor.
* **resourceId**: string (Required): The ID of the resource used as the source by connection monitor.

## ConnectionMonitorSuccessThreshold
### Properties
* **checksFailedPercent**: int: The maximum percentage of failed checks permitted for a test to evaluate as successful.
* **roundTripTimeMs**: int: The maximum round-trip time in milliseconds permitted for a test to evaluate as successful.

## ConnectionMonitorTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConnectionMonitorTcpConfiguration
### Properties
* **destinationPortBehavior**: 'ListenIfAvailable' | 'None' | string: Destination port behavior.
* **disableTraceRoute**: bool: Value indicating whether path evaluation with trace route should be disabled.
* **port**: int {minValue: 0, maxValue: 65535}: The port to connect to.

## ConnectionMonitorTestConfiguration
### Properties
* **httpConfiguration**: [ConnectionMonitorHttpConfiguration](#connectionmonitorhttpconfiguration): The parameters used to perform test evaluation over HTTP.
* **icmpConfiguration**: [ConnectionMonitorIcmpConfiguration](#connectionmonitoricmpconfiguration): The parameters used to perform test evaluation over ICMP.
* **name**: string (Required): The name of the connection monitor test configuration.
* **preferredIPVersion**: 'IPv4' | 'IPv6' | string: The preferred IP version to use in test evaluation. The connection monitor may choose to use a different version depending on other parameters.
* **protocol**: 'Http' | 'Icmp' | 'Tcp' | string (Required): The protocol to use in test evaluation.
* **successThreshold**: [ConnectionMonitorSuccessThreshold](#connectionmonitorsuccessthreshold): The threshold for declaring a test successful.
* **tcpConfiguration**: [ConnectionMonitorTcpConfiguration](#connectionmonitortcpconfiguration): The parameters used to perform test evaluation over TCP.
* **testFrequencySec**: int: The frequency of test evaluation, in seconds.

## ConnectionMonitorTestGroup
### Properties
* **destinations**: string[] (Required): List of destination endpoint names.
* **disable**: bool: Value indicating whether test group is disabled.
* **name**: string (Required): The name of the connection monitor test group.
* **sources**: string[] (Required): List of source endpoint names.
* **testConfigurations**: string[] (Required): List of test configuration names.

## ConnectionMonitorWorkspaceSettings
### Properties
* **workspaceResourceId**: string: Log analytics workspace resource ID.

## ConnectivityConfigurationProperties
### Properties
* **appliesToGroups**: [ConnectivityGroupItem](#connectivitygroupitem)[] (Required): Groups for configuration
* **connectivityTopology**: 'HubAndSpoke' | 'Mesh' | string (Required): Connectivity topology type.
* **deleteExistingPeering**: 'False' | 'True' | string: Flag if need to remove current existing peerings.
* **description**: string: A description of the connectivity configuration.
* **hubs**: [Hub](#hub)[]: List of hubItems
* **isGlobal**: 'False' | 'True' | string: Flag if global mesh is supported.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the connectivity configuration resource.
* **resourceGuid**: string (ReadOnly): Unique identifier for this resource.

## ConnectivityGroupItem
### Properties
* **groupConnectivity**: 'DirectlyConnected' | 'None' | string (Required): Group connectivity type.
* **isGlobal**: 'False' | 'True' | string: Flag if global is supported.
* **networkGroupId**: string (Required): Network group Id.
* **useHubGateway**: 'False' | 'True' | string: Flag if need to use hub gateway.

## Container
### Properties
* **id**: string: Resource ID.

## ContainerNetworkInterface
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource. This name can be used to access the resource.
* **properties**: [ContainerNetworkInterfacePropertiesFormat](#containernetworkinterfacepropertiesformat): Container network interface properties.
* **type**: string (ReadOnly): Sub Resource type.

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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the container network interface configuration resource.

## ContainerNetworkInterfaceIpConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **name**: string: The name of the resource. This name can be used to access the resource.
* **properties**: [ContainerNetworkInterfaceIpConfigurationPropertiesFormat](#containernetworkinterfaceipconfigurationpropertiesformat): Properties of the container network interface IP configuration.
* **type**: string (ReadOnly): Sub Resource type.

## ContainerNetworkInterfaceIpConfigurationPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the container network interface IP configuration resource.

## ContainerNetworkInterfacePropertiesFormat
### Properties
* **container**: [Container](#container): Reference to the container to which this container network interface is attached.
* **containerNetworkInterfaceConfiguration**: [ContainerNetworkInterfaceConfiguration](#containernetworkinterfaceconfiguration) (ReadOnly): Container network interface configuration from which this container network interface is created.
* **ipConfigurations**: [ContainerNetworkInterfaceIpConfiguration](#containernetworkinterfaceipconfiguration)[] (ReadOnly): Reference to the ip configuration on this container nic.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the container network interface resource.

## Criterion
### Properties
* **asPath**: string[]: List of AS paths which this criteria matches.
* **community**: string[]: List of BGP communities which this criteria matches.
* **matchCondition**: 'Contains' | 'Equals' | 'NotContains' | 'NotEquals' | 'Unknown' | string: Match condition to apply RouteMap rules.
* **routePrefix**: string[]: List of route prefixes which this criteria matches.

## CrossTenantScopes
### Properties
* **managementGroups**: string[] (ReadOnly): List of management groups.
* **subscriptions**: string[] (ReadOnly): List of subscriptions.
* **tenantId**: string (ReadOnly): Tenant ID.

## CustomDnsConfigPropertiesFormat
### Properties
* **fqdn**: string: Fqdn that resolves to private endpoint ip address.
* **ipAddresses**: string[]: A list of private ip addresses of the private endpoint.

## CustomIpPrefixPropertiesFormat
### Properties
* **asn**: string: The ASN for CIDR advertising. Should be an integer as string.
* **authorizationMessage**: string: Authorization message for WAN validation.
* **childCustomIpPrefixes**: [SubResource](#subresource)[] (ReadOnly): The list of all Children for IPv6 /48 CustomIpPrefix.
* **cidr**: string: The prefix range in CIDR notation. Should include the start address and the prefix length.
* **commissionedState**: 'Commissioned' | 'CommissionedNoInternetAdvertise' | 'Commissioning' | 'Decommissioning' | 'Deprovisioned' | 'Deprovisioning' | 'Provisioned' | 'Provisioning' | string: The commissioned state of the Custom IP Prefix.
* **customIpPrefixParent**: [SubResource](#subresource): The Parent CustomIpPrefix for IPv6 /64 CustomIpPrefix.
* **expressRouteAdvertise**: bool: Whether to do express route advertise.
* **failedReason**: string (ReadOnly): The reason why resource is in failed state.
* **geo**: 'AFRI' | 'APAC' | 'AQ' | 'EURO' | 'GLOBAL' | 'LATAM' | 'ME' | 'NAM' | 'OCEANIA' | string: The Geo for CIDR advertising. Should be an Geo code.
* **noInternetAdvertise**: bool: Whether to Advertise the range to Internet.
* **prefixType**: 'Child' | 'Parent' | 'Singular' | string: Type of custom IP prefix. Should be Singular, Parent, or Child.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the custom IP prefix resource.
* **publicIpPrefixes**: [SubResource](#subresource)[] (ReadOnly): The list of all referenced PublicIpPrefixes.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the custom IP prefix resource.
* **signedMessage**: string: Signed message for WAN validation.

## DdosCustomPolicyPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the DDoS custom policy resource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the DDoS custom policy resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.

## DdosProtectionPlanPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the DDoS protection plan resource.
* **publicIPAddresses**: [SubResource](#subresource)[] (ReadOnly): The list of public IPs associated with the DDoS protection plan resource. This list is read-only.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the DDoS protection plan resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
* **virtualNetworks**: [SubResource](#subresource)[] (ReadOnly): The list of virtual networks associated with the DDoS protection plan resource. This list is read-only.

## DdosProtectionPlanTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DdosSettings
### Properties
* **ddosProtectionPlan**: [SubResource](#subresource): The DDoS protection plan associated with the public IP. Can only be set if ProtectionMode is Enabled
* **protectionMode**: 'Disabled' | 'Enabled' | 'VirtualNetworkInherited' | string: The DDoS protection mode of the public IP

## DefaultAdminPropertiesFormat
### Properties
* **access**: 'Allow' | 'AlwaysAllow' | 'Deny' | string (ReadOnly): Indicates the access allowed for this particular rule
* **description**: string (ReadOnly): A description for this rule. Restricted to 140 chars.
* **destinationPortRanges**: string[] (ReadOnly): The destination port ranges.
* **destinations**: [AddressPrefixItem](#addressprefixitem)[] (ReadOnly): The destination address prefixes. CIDR or destination IP ranges.
* **direction**: 'Inbound' | 'Outbound' | string (ReadOnly): Indicates if the traffic matched against the rule in inbound or outbound.
* **flag**: string: Default rule flag.
* **priority**: int (ReadOnly): The priority of the rule. The value can be between 1 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
* **protocol**: 'Ah' | 'Any' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' | string (ReadOnly): Network protocol this rule applies to.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **resourceGuid**: string (ReadOnly): Unique identifier for this resource.
* **sourcePortRanges**: string[] (ReadOnly): The source port ranges.
* **sources**: [AddressPrefixItem](#addressprefixitem)[] (ReadOnly): The CIDR or source IP ranges.

## Delegation
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a subnet. This name can be used to access the resource.
* **properties**: [ServiceDelegationPropertiesFormat](#servicedelegationpropertiesformat): Properties of the subnet.
* **type**: string: Resource type.

## DelegationProperties
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **serviceName**: string: The service name to which the NVA is delegated.

## DeviceProperties
### Properties
* **deviceModel**: string: Model of the device.
* **deviceVendor**: string: Name of the device Vendor.
* **linkSpeedInMbps**: int: Link speed.

## DhcpOptions
### Properties
* **dnsServers**: string[]: The list of DNS servers IP addresses.

## DnsSettings
### Properties
* **enableProxy**: bool: Enable DNS Proxy on Firewalls attached to the Firewall Policy.
* **requireProxyForNetworkRules**: bool: FQDNs in Network Rules are supported when set to true.
* **servers**: string[]: List of Custom DNS Servers.

## DscpConfigurationPropertiesFormat
### Properties
* **associatedNetworkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly): Associated Network Interfaces to the DSCP Configuration.
* **destinationIpRanges**: [QosIpRange](#qosiprange)[]: Destination IP ranges.
* **destinationPortRanges**: [QosPortRange](#qosportrange)[]: Destination port ranges.
* **markings**: int[]: List of markings to be used in the configuration.
* **protocol**: 'Ah' | 'All' | 'DoNotUse' | 'Esp' | 'Gre' | 'Icmp' | 'Tcp' | 'Udp' | 'Vxlan' | string: RNM supported protocol types.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the DSCP Configuration resource.
* **qosCollectionId**: string (ReadOnly): Qos Collection ID generated by RNM.
* **qosDefinitionCollection**: [QosDefinition](#qosdefinition)[]: QoS object definitions
* **resourceGuid**: string (ReadOnly): The resource GUID property of the DSCP Configuration resource.
* **sourceIpRanges**: [QosIpRange](#qosiprange)[]: Source IP ranges.
* **sourcePortRanges**: [QosPortRange](#qosportrange)[]: Sources port ranges.

## EffectiveBaseSecurityAdminRule
* **Discriminator**: kind

### Base Properties
* **configurationDescription**: string: A description of the security admin configuration.
* **id**: string: Resource ID.
* **ruleCollectionAppliesToGroups**: [NetworkManagerSecurityGroupItem](#networkmanagersecuritygroupitem)[]: Groups for rule collection
* **ruleCollectionDescription**: string: A description of the rule collection.
* **ruleGroups**: [ConfigurationGroup](#configurationgroup)[]: Effective configuration groups.

### EffectiveSecurityAdminRule
#### Properties
* **kind**: 'Custom' (Required): Whether the rule is custom or default.
* **properties**: [AdminPropertiesFormat](#adminpropertiesformat): Indicates the properties of the security admin rule

### EffectiveDefaultSecurityAdminRule
#### Properties
* **kind**: 'Default' (Required): Whether the rule is custom or default.
* **properties**: [DefaultAdminPropertiesFormat](#defaultadminpropertiesformat): Indicates the properties of the default security admin rule


## EffectiveConnectivityConfiguration
### Properties
* **configurationGroups**: [ConfigurationGroup](#configurationgroup)[]: Effective configuration groups.
* **id**: string: Connectivity configuration ID.
* **properties**: [ConnectivityConfigurationProperties](#connectivityconfigurationproperties): Properties of a network manager connectivity configuration

## ExclusionManagedRule
### Properties
* **ruleId**: string (Required): Identifier for the managed rule.

## ExclusionManagedRuleGroup
### Properties
* **ruleGroupName**: string (Required): The managed rule group for exclusion.
* **rules**: [ExclusionManagedRule](#exclusionmanagedrule)[]: List of rules that will be excluded. If none specified, all rules in the group will be excluded.

## ExclusionManagedRuleSet
### Properties
* **ruleGroups**: [ExclusionManagedRuleGroup](#exclusionmanagedrulegroup)[]: Defines the rule groups to apply to the rule set.
* **ruleSetType**: string (Required): Defines the rule set type to use.
* **ruleSetVersion**: string (Required): Defines the version of the rule set to use.

## ExplicitProxy
### Properties
* **enableExplicitProxy**: bool: When set to true, explicit proxy mode is enabled.
* **enablePacFile**: bool: When set to true, pac file port and url needs to be provided.
* **httpPort**: int {minValue: 0, maxValue: 64000}: Port number for explicit proxy http protocol, cannot be greater than 64000.
* **httpsPort**: int {minValue: 0, maxValue: 64000}: Port number for explicit proxy https protocol, cannot be greater than 64000.
* **pacFile**: string: SAS URL for PAC file.
* **pacFilePort**: int {minValue: 0, maxValue: 64000}: Port number for firewall to serve PAC file.

## ExpressRouteCircuitAuthorization
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [AuthorizationPropertiesFormat](#authorizationpropertiesformat): Properties of the express route circuit authorization.
* **type**: string (ReadOnly): Type of the resource.

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
* **expressRouteCircuitPeering**: [SubResource](#subresource): Reference to Express Route Circuit Private Peering Resource of the circuit initiating connection.
* **ipv6CircuitConnectionConfig**: [Ipv6CircuitConnectionConfig](#ipv6circuitconnectionconfig): IPv6 Address PrefixProperties of the express route circuit connection.
* **peerExpressRouteCircuitPeering**: [SubResource](#subresource): Reference to Express Route Circuit Private Peering Resource of the peered circuit.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the express route circuit connection resource.

## ExpressRouteCircuitPeering
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ExpressRouteCircuitPeeringPropertiesFormat](#expressroutecircuitpeeringpropertiesformat): Properties of the express route circuit peering.
* **type**: string (ReadOnly): Type of the resource.

## ExpressRouteCircuitPeeringConfig
### Properties
* **advertisedCommunities**: string[]: The communities of bgp peering. Specified for microsoft peering.
* **advertisedPublicPrefixes**: string[]: The reference to AdvertisedPublicPrefixes.
* **advertisedPublicPrefixesState**: 'Configured' | 'Configuring' | 'NotConfigured' | 'ValidationNeeded' | string (ReadOnly): The advertised public prefix state of the Peering resource.
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
* **lastModifiedBy**: string (ReadOnly): Who was the last to modify the peering.
* **microsoftPeeringConfig**: [ExpressRouteCircuitPeeringConfig](#expressroutecircuitpeeringconfig): The Microsoft peering configuration.
* **peerASN**: int {minValue: 1, maxValue: 4294967295}: The peer ASN.
* **peeredConnections**: [PeerExpressRouteCircuitConnection](#peerexpressroutecircuitconnection)[] (ReadOnly): The list of peered circuit connections associated with Azure Private Peering for this circuit.
* **peeringType**: 'AzurePrivatePeering' | 'AzurePublicPeering' | 'MicrosoftPeering' | string: The peering type.
* **primaryAzurePort**: string: The primary port.
* **primaryPeerAddressPrefix**: string: The primary address prefix.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the express route circuit peering resource.
* **routeFilter**: [SubResource](#subresource): The reference to the RouteFilter resource.
* **secondaryAzurePort**: string: The secondary port.
* **secondaryPeerAddressPrefix**: string: The secondary address prefix.
* **sharedKey**: string: The shared key.
* **state**: 'Disabled' | 'Enabled' | string: The peering state.
* **stats**: [ExpressRouteCircuitStats](#expressroutecircuitstats): The peering stats of express route circuit.
* **vlanId**: int: The VLAN ID.

## ExpressRouteCircuitPropertiesFormat
### Properties
* **allowClassicOperations**: bool: Allow classic operations.
* **authorizationKey**: string: The authorizationKey.
* **authorizations**: [ExpressRouteCircuitAuthorization](#expressroutecircuitauthorization)[]: The list of authorizations.
* **authorizationStatus**: string (ReadOnly): The authorization status of the Circuit.
* **bandwidthInGbps**: int: The bandwidth of the circuit when the circuit is provisioned on an ExpressRoutePort resource.
* **circuitProvisioningState**: string: The CircuitProvisioningState state of the resource.
* **expressRoutePort**: [SubResource](#subresource): The reference to the ExpressRoutePort resource when the circuit is provisioned on an ExpressRoutePort resource.
* **gatewayManagerEtag**: string: The GatewayManager Etag.
* **globalReachEnabled**: bool: Flag denoting global reach status.
* **peerings**: [ExpressRouteCircuitPeering](#expressroutecircuitpeering)[]: The list of peerings.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the express route circuit resource.
* **serviceKey**: string: The ServiceKey.
* **serviceProviderNotes**: string: The ServiceProviderNotes.
* **serviceProviderProperties**: [ExpressRouteCircuitServiceProviderProperties](#expressroutecircuitserviceproviderproperties): The ServiceProviderProperties.
* **serviceProviderProvisioningState**: 'Deprovisioning' | 'NotProvisioned' | 'Provisioned' | 'Provisioning' | string: The ServiceProviderProvisioningState state of the resource.
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
* **family**: 'MeteredData' | 'UnlimitedData' | string: The family of the SKU.
* **name**: string: The name of the SKU.
* **tier**: 'Basic' | 'Local' | 'Premium' | 'Standard' | string: The tier of the SKU.

## ExpressRouteCircuitStats
### Properties
* **primarybytesIn**: int: The Primary BytesIn of the peering.
* **primarybytesOut**: int: The primary BytesOut of the peering.
* **secondarybytesIn**: int: The secondary BytesIn of the peering.
* **secondarybytesOut**: int: The secondary BytesOut of the peering.

## ExpressRouteConnection
### Properties
* **id**: string: Resource ID.
* **name**: string (Required): The name of the resource.
* **properties**: [ExpressRouteConnectionProperties](#expressrouteconnectionproperties): Properties of the express route connection.

## ExpressRouteConnectionId
### Properties
* **id**: string (ReadOnly): The ID of the ExpressRouteConnection.

## ExpressRouteConnectionProperties
### Properties
* **authorizationKey**: string: Authorization key to establish the connection.
* **enableInternetSecurity**: bool: Enable internet security.
* **enablePrivateLinkFastPath**: bool: Bypass the ExpressRoute gateway when accessing private-links. ExpressRoute FastPath (expressRouteGatewayBypass) must be enabled.
* **expressRouteCircuitPeering**: [ExpressRouteCircuitPeeringId](#expressroutecircuitpeeringid) (Required): The ExpressRoute circuit peering.
* **expressRouteGatewayBypass**: bool: Enable FastPath to vWan Firewall hub.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the express route connection resource.
* **routingConfiguration**: [RoutingConfiguration](#routingconfiguration): The Routing Configuration indicating the associated and propagated route tables on this connection.
* **routingWeight**: int: The routing weight associated to the connection.

## ExpressRouteCrossConnectionPeering
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ExpressRouteCrossConnectionPeeringProperties](#expressroutecrossconnectionpeeringproperties): Properties of the express route cross connection peering.

## ExpressRouteCrossConnectionPeeringProperties
### Properties
* **azureASN**: int (ReadOnly): The Azure ASN.
* **gatewayManagerEtag**: string: The GatewayManager Etag.
* **ipv6PeeringConfig**: [Ipv6ExpressRouteCircuitPeeringConfig](#ipv6expressroutecircuitpeeringconfig): The IPv6 peering configuration.
* **lastModifiedBy**: string (ReadOnly): Who was the last to modify the peering.
* **microsoftPeeringConfig**: [ExpressRouteCircuitPeeringConfig](#expressroutecircuitpeeringconfig): The Microsoft peering configuration.
* **peerASN**: int {minValue: 1, maxValue: 4294967295}: The peer ASN.
* **peeringType**: 'AzurePrivatePeering' | 'AzurePublicPeering' | 'MicrosoftPeering' | string: The peering type.
* **primaryAzurePort**: string (ReadOnly): The primary port.
* **primaryPeerAddressPrefix**: string: The primary address prefix.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the express route cross connection peering resource.
* **secondaryAzurePort**: string (ReadOnly): The secondary port.
* **secondaryPeerAddressPrefix**: string: The secondary address prefix.
* **sharedKey**: string: The shared key.
* **state**: 'Disabled' | 'Enabled' | string: The peering state.
* **vlanId**: int: The VLAN ID.

## ExpressRouteCrossConnectionProperties
### Properties
* **bandwidthInMbps**: int (ReadOnly): The circuit bandwidth In Mbps.
* **expressRouteCircuit**: [ExpressRouteCircuitReference](#expressroutecircuitreference): The ExpressRouteCircuit.
* **peeringLocation**: string (ReadOnly): The peering location of the ExpressRoute circuit.
* **peerings**: [ExpressRouteCrossConnectionPeering](#expressroutecrossconnectionpeering)[]: The list of peerings.
* **primaryAzurePort**: string (ReadOnly): The name of the primary port.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the express route cross connection resource.
* **secondaryAzurePort**: string (ReadOnly): The name of the secondary port.
* **serviceProviderNotes**: string: Additional read only notes set by the connectivity provider.
* **serviceProviderProvisioningState**: 'Deprovisioning' | 'NotProvisioned' | 'Provisioned' | 'Provisioning' | string: The provisioning state of the circuit in the connectivity provider system.
* **sTag**: int (ReadOnly): The identifier of the circuit traffic.

## ExpressRouteGatewayProperties
### Properties
* **allowNonVirtualWanTraffic**: bool: Configures this gateway to accept traffic from non Virtual WAN networks.
* **autoScaleConfiguration**: [ExpressRouteGatewayPropertiesAutoScaleConfiguration](#expressroutegatewaypropertiesautoscaleconfiguration): Configuration for auto scaling.
* **expressRouteConnections**: [ExpressRouteConnection](#expressrouteconnection)[]: List of ExpressRoute connections to the ExpressRoute gateway.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the express route gateway resource.
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
* **properties**: [ExpressRouteLinkPropertiesFormat](#expressroutelinkpropertiesformat): ExpressRouteLink properties.

## ExpressRouteLinkMacSecConfig
### Properties
* **cakSecretIdentifier**: string: Keyvault Secret Identifier URL containing Mac security CAK key.
* **cipher**: 'GcmAes128' | 'GcmAes256' | 'GcmAesXpn128' | 'GcmAesXpn256' | string: Mac security cipher.
* **cknSecretIdentifier**: string: Keyvault Secret Identifier URL containing Mac security CKN key.
* **sciState**: 'Disabled' | 'Enabled' | string: Sci mode enabled/disabled.

## ExpressRouteLinkPropertiesFormat
### Properties
* **adminState**: 'Disabled' | 'Enabled' | string: Administrative state of the physical port.
* **coloLocation**: string (ReadOnly): Cololocation for ExpressRoute Hybrid Direct.
* **connectorType**: 'LC' | 'SC' | string (ReadOnly): Physical fiber port type.
* **interfaceName**: string (ReadOnly): Name of Azure router interface.
* **macSecConfig**: [ExpressRouteLinkMacSecConfig](#expressroutelinkmacsecconfig): MacSec configuration.
* **patchPanelId**: string (ReadOnly): Mapping between physical port to patch panel port.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the express route link resource.
* **rackId**: string (ReadOnly): Mapping of physical patch panel to rack.
* **routerName**: string (ReadOnly): Name of Azure router associated with physical port.

## ExpressRoutePortAuthorizationPropertiesFormat
### Properties
* **authorizationKey**: string (ReadOnly): The authorization key.
* **authorizationUseStatus**: 'Available' | 'InUse' | string (ReadOnly): The authorization use status.
* **circuitResourceUri**: string (ReadOnly): The reference to the ExpressRoute circuit resource using the authorization.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the authorization resource.

## ExpressRoutePortPropertiesFormat
### Properties
* **allocationDate**: string (ReadOnly): Date of the physical port allocation to be used in Letter of Authorization.
* **bandwidthInGbps**: int: Bandwidth of procured ports in Gbps.
* **billingType**: 'MeteredData' | 'UnlimitedData' | string: The billing type of the ExpressRoutePort resource.
* **circuits**: [SubResource](#subresource)[] (ReadOnly): Reference the ExpressRoute circuit(s) that are provisioned on this ExpressRoutePort resource.
* **encapsulation**: 'Dot1Q' | 'QinQ' | string: Encapsulation method on physical ports.
* **etherType**: string (ReadOnly): Ether type of the physical port.
* **links**: [ExpressRouteLink](#expressroutelink)[]: The set of physical links of the ExpressRoutePort resource.
* **mtu**: string (ReadOnly): Maximum transmission unit of the physical port pair(s).
* **peeringLocation**: string: The name of the peering location that the ExpressRoutePort is mapped to physically.
* **provisionedBandwidthInGbps**: int (ReadOnly): Aggregate Gbps of associated circuit bandwidths.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the express route port resource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the express route port resource.

## ExpressRoutePortsLocationBandwidths
### Properties
* **offerName**: string (ReadOnly): Bandwidth descriptive name.
* **valueInGbps**: int (ReadOnly): Bandwidth value in Gbps.

## ExpressRoutePortsLocationPropertiesFormat
### Properties
* **address**: string (ReadOnly): Address of peering location.
* **availableBandwidths**: [ExpressRoutePortsLocationBandwidths](#expressrouteportslocationbandwidths)[]: The inventory of available ExpressRoutePort bandwidths.
* **contact**: string (ReadOnly): Contact details of peering locations.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the express route port location resource.

## ExpressRouteProviderPortProperties
### Properties
* **overprovisionFactor**: int: Overprovisioning factor for the port pair.
* **peeringLocation**: string: The peering location of the port pair.
* **portBandwidthInMbps**: int: Bandwidth of the port in Mbps
* **portPairDescriptor**: string (ReadOnly): The name of the port pair.
* **primaryAzurePort**: string (ReadOnly): The name of the primary port.
* **remainingBandwidthInMbps**: int: Remaining Bandwidth of the port in Mbps
* **secondaryAzurePort**: string (ReadOnly): The name of the secondary port.
* **usedBandwidthInMbps**: int: Used Bandwidth of the port in Mbps

## ExtendedLocation
### Properties
* **name**: string: The name of the extended location.
* **type**: 'EdgeZone' | string: The type of the extended location.

## FilterItems
### Properties
* **field**: string: The name of the field we would like to filter
* **values**: string[]: List of values to filter the current field by

## FirewallPolicyCertificateAuthority
### Properties
* **keyVaultSecretId**: string: Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
* **name**: string: Name of the CA certificate.

## FirewallPolicyFilterRuleCollectionAction
### Properties
* **type**: 'Allow' | 'Deny' | string: The type of action.

## FirewallPolicyHttpHeaderToInsert
### Properties
* **headerName**: string: Contains the name of the header
* **headerValue**: string: Contains the value of the header

## FirewallPolicyInsights
### Properties
* **isEnabled**: bool: A flag to indicate if the insights are enabled on the policy.
* **logAnalyticsResources**: [FirewallPolicyLogAnalyticsResources](#firewallpolicyloganalyticsresources): Workspaces needed to configure the Firewall Policy Insights.
* **retentionDays**: int: Number of days the insights should be enabled on the policy.

## FirewallPolicyIntrusionDetection
### Properties
* **configuration**: [FirewallPolicyIntrusionDetectionConfiguration](#firewallpolicyintrusiondetectionconfiguration): Intrusion detection configuration properties.
* **mode**: 'Alert' | 'Deny' | 'Off' | string: Intrusion detection general state.

## FirewallPolicyIntrusionDetectionBypassTrafficSpecifications
### Properties
* **description**: string: Description of the bypass traffic rule.
* **destinationAddresses**: string[]: List of destination IP addresses or ranges for this rule.
* **destinationIpGroups**: string[]: List of destination IpGroups for this rule.
* **destinationPorts**: string[]: List of destination ports or ranges.
* **name**: string: Name of the bypass traffic rule.
* **protocol**: 'ANY' | 'ICMP' | 'TCP' | 'UDP' | string: The rule bypass protocol.
* **sourceAddresses**: string[]: List of source IP addresses or ranges for this rule.
* **sourceIpGroups**: string[]: List of source IpGroups for this rule.

## FirewallPolicyIntrusionDetectionConfiguration
### Properties
* **bypassTrafficSettings**: [FirewallPolicyIntrusionDetectionBypassTrafficSpecifications](#firewallpolicyintrusiondetectionbypasstrafficspecifications)[]: List of rules for traffic to bypass.
* **privateRanges**: string[]: IDPS Private IP address ranges are used to identify traffic direction (i.e. inbound, outbound, etc.). By default, only ranges defined by IANA RFC 1918 are considered private IP addresses. To modify default ranges, specify your Private IP address ranges with this property
* **signatureOverrides**: [FirewallPolicyIntrusionDetectionSignatureSpecification](#firewallpolicyintrusiondetectionsignaturespecification)[]: List of specific signatures states.

## FirewallPolicyIntrusionDetectionSignatureSpecification
### Properties
* **id**: string: Signature id.
* **mode**: 'Alert' | 'Deny' | 'Off' | string: The signature state.

## FirewallPolicyLogAnalyticsResources
### Properties
* **defaultWorkspaceId**: [SubResource](#subresource): The default workspace Id for Firewall Policy Insights.
* **workspaces**: [FirewallPolicyLogAnalyticsWorkspace](#firewallpolicyloganalyticsworkspace)[]: List of workspaces for Firewall Policy Insights.

## FirewallPolicyLogAnalyticsWorkspace
### Properties
* **region**: string: Region to configure the Workspace.
* **workspaceId**: [SubResource](#subresource): The workspace Id for Firewall Policy Insights.

## FirewallPolicyNatRuleCollectionAction
### Properties
* **type**: 'DNAT' | string: The type of action.

## FirewallPolicyPropertiesFormat
### Properties
* **basePolicy**: [SubResource](#subresource): The parent firewall policy from which rules are inherited.
* **childPolicies**: [SubResource](#subresource)[] (ReadOnly): List of references to Child Firewall Policies.
* **dnsSettings**: [DnsSettings](#dnssettings): DNS Proxy Settings definition.
* **explicitProxy**: [ExplicitProxy](#explicitproxy): Explicit Proxy Settings definition.
* **firewalls**: [SubResource](#subresource)[] (ReadOnly): List of references to Azure Firewalls that this Firewall Policy is associated with.
* **insights**: [FirewallPolicyInsights](#firewallpolicyinsights): Insights on Firewall Policy.
* **intrusionDetection**: [FirewallPolicyIntrusionDetection](#firewallpolicyintrusiondetection): The configuration for Intrusion detection.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the firewall policy resource.
* **ruleCollectionGroups**: [SubResource](#subresource)[] (ReadOnly): List of references to FirewallPolicyRuleCollectionGroups.
* **sku**: [FirewallPolicySku](#firewallpolicysku): The Firewall Policy SKU.
* **snat**: [FirewallPolicySnat](#firewallpolicysnat): The private IP addresses/IP ranges to which traffic will not be SNAT.
* **sql**: [FirewallPolicySQL](#firewallpolicysql): SQL Settings definition.
* **threatIntelMode**: 'Alert' | 'Deny' | 'Off' | string: The operation mode for Threat Intelligence.
* **threatIntelWhitelist**: [FirewallPolicyThreatIntelWhitelist](#firewallpolicythreatintelwhitelist): ThreatIntel Whitelist for Firewall Policy.
* **transportSecurity**: [FirewallPolicyTransportSecurity](#firewallpolicytransportsecurity): TLS Configuration definition.

## FirewallPolicyRule
* **Discriminator**: ruleType

### Base Properties
* **description**: string: Description of the rule.
* **name**: string: Name of the rule.

### ApplicationRule
#### Properties
* **destinationAddresses**: string[]: List of destination IP addresses or Service Tags.
* **fqdnTags**: string[]: List of FQDN Tags for this rule.
* **httpHeadersToInsert**: [FirewallPolicyHttpHeaderToInsert](#firewallpolicyhttpheadertoinsert)[]: List of HTTP/S headers to insert.
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
* **ipProtocols**: ('Any' | 'ICMP' | 'TCP' | 'UDP' | string)[]: Array of FirewallPolicyRuleNetworkProtocols.
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
* **ipProtocols**: ('Any' | 'ICMP' | 'TCP' | 'UDP' | string)[]: Array of FirewallPolicyRuleNetworkProtocols.
* **ruleType**: 'NetworkRule' (Required): Rule Type.
* **sourceAddresses**: string[]: List of source IP addresses for this rule.
* **sourceIpGroups**: string[]: List of source IpGroups for this rule.


## FirewallPolicyRuleApplicationProtocol
### Properties
* **port**: int {minValue: 0, maxValue: 64000}: Port number for the protocol, cannot be greater than 64000.
* **protocolType**: 'Http' | 'Https' | string: Protocol type.

## FirewallPolicyRuleCollection
* **Discriminator**: ruleCollectionType

### Base Properties
* **name**: string: The name of the rule collection.
* **priority**: int {minValue: 100, maxValue: 65000}: Priority of the Firewall Policy Rule Collection resource.

### FirewallPolicyFilterRuleCollection
#### Properties
* **action**: [FirewallPolicyFilterRuleCollectionAction](#firewallpolicyfilterrulecollectionaction): The action type of a Filter rule collection.
* **ruleCollectionType**: 'FirewallPolicyFilterRuleCollection' (Required): The type of the rule collection.
* **rules**: [FirewallPolicyRule](#firewallpolicyrule)[]: List of rules included in a rule collection.

### FirewallPolicyNatRuleCollection
#### Properties
* **action**: [FirewallPolicyNatRuleCollectionAction](#firewallpolicynatrulecollectionaction): The action type of a Nat rule collection.
* **ruleCollectionType**: 'FirewallPolicyNatRuleCollection' (Required): The type of the rule collection.
* **rules**: [FirewallPolicyRule](#firewallpolicyrule)[]: List of rules included in a rule collection.


## FirewallPolicyRuleCollectionGroupProperties
### Properties
* **priority**: int {minValue: 100, maxValue: 65000}: Priority of the Firewall Policy Rule Collection Group resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the firewall policy rule collection group resource.
* **ruleCollections**: [FirewallPolicyRuleCollection](#firewallpolicyrulecollection)[]: Group of Firewall Policy rule collections.

## FirewallPolicySku
### Properties
* **tier**: 'Basic' | 'Premium' | 'Standard' | string: Tier of Firewall Policy.

## FirewallPolicySnat
### Properties
* **autoLearnPrivateRanges**: 'Disabled' | 'Enabled' | string: The operation mode for automatically learning private ranges to not be SNAT
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
* **certificateAuthority**: [FirewallPolicyCertificateAuthority](#firewallpolicycertificateauthority): The CA used for intermediate CA generation.

## FlowLog
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [FlowLogPropertiesFormat](#flowlogpropertiesformat): Properties of the flow log.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## FlowLogFormatParameters
### Properties
* **type**: 'JSON' | string: The file type of flow log.
* **version**: int: The version (revision) of the flow log.

## FlowLogPropertiesFormat
### Properties
* **enabled**: bool: Flag to enable/disable flow logging.
* **flowAnalyticsConfiguration**: [TrafficAnalyticsProperties](#trafficanalyticsproperties): Parameters that define the configuration of traffic analytics.
* **format**: [FlowLogFormatParameters](#flowlogformatparameters): Parameters that define the flow log format.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the flow log.
* **retentionPolicy**: [RetentionPolicyParameters](#retentionpolicyparameters): Parameters that define the retention policy for flow log.
* **storageId**: string (Required): ID of the storage account which is used to store the flow log.
* **targetResourceGuid**: string (ReadOnly): Guid of network security group to which flow log will be applied.
* **targetResourceId**: string (Required): ID of network security group to which flow log will be applied.

## FrontendIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within the set of frontend IP configurations used by the load balancer. This name can be used to access the resource.
* **properties**: [FrontendIPConfigurationPropertiesFormat](#frontendipconfigurationpropertiesformat): Properties of the load balancer probe.
* **type**: string (ReadOnly): Type of the resource.
* **zones**: string[]: A list of availability zones denoting the IP allocated for the resource needs to come from.

## FrontendIPConfigurationPropertiesFormat
### Properties
* **gatewayLoadBalancer**: [SubResource](#subresource): The reference to gateway load balancer frontend IP.
* **inboundNatPools**: [SubResource](#subresource)[] (ReadOnly): An array of references to inbound pools that use this frontend IP.
* **inboundNatRules**: [SubResource](#subresource)[] (ReadOnly): An array of references to inbound rules that use this frontend IP.
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly): An array of references to load balancing rules that use this frontend IP.
* **outboundRules**: [SubResource](#subresource)[] (ReadOnly): An array of references to outbound rules that use this frontend IP.
* **privateIPAddress**: string: The private IP address of the IP configuration.
* **privateIPAddressVersion**: 'IPv4' | 'IPv6' | string: Whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: The Private IP allocation method.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the frontend IP configuration resource.
* **publicIPAddress**: [PublicIPAddress](#publicipaddress): The reference to the Public IP resource.
* **publicIPPrefix**: [SubResource](#subresource): The reference to the Public IP Prefix resource.
* **subnet**: [Subnet](#subnet): The reference to the subnet resource.

## GatewayCustomBgpIpAddressIpConfiguration
### Properties
* **customBgpIpAddress**: string (Required): The custom BgpPeeringAddress which belongs to IpconfigurationId.
* **ipConfigurationId**: string (Required): The IpconfigurationId of ipconfiguration which belongs to gateway.

## GatewayLoadBalancerTunnelInterface
### Properties
* **identifier**: int: Identifier of gateway load balancer tunnel interface.
* **port**: int: Port of gateway load balancer tunnel interface.
* **protocol**: 'Native' | 'None' | 'VXLAN' | string: Protocol of gateway load balancer tunnel interface.
* **type**: 'External' | 'Internal' | 'None' | string: Traffic type of gateway load balancer tunnel interface.

## GroupByUserSession
### Properties
* **groupByVariables**: [GroupByVariable](#groupbyvariable)[] (Required): List of group by clause variables.

## GroupByVariable
### Properties
* **variableName**: 'ClientAddr' | 'GeoLocation' | 'None' | string (Required): User Session clause variable.

## HttpHeader
### Properties
* **name**: string: The name in HTTP header.
* **value**: string: The value in HTTP header.

## Hub
### Properties
* **resourceId**: string: Resource Id.
* **resourceType**: string: Resource Type.

## HubIPAddresses
### Properties
* **privateIPAddress**: string: Private IP Address associated with azure firewall.
* **publicIPs**: [HubPublicIPAddresses](#hubpublicipaddresses): Public IP addresses associated with azure firewall.

## HubIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string: The private IP address of the IP configuration.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: The private IP address allocation method.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the IP configuration resource.
* **publicIPAddress**: [PublicIPAddress](#publicipaddress): The reference to the public IP resource.
* **subnet**: [Subnet](#subnet): The reference to the subnet resource.

## HubPublicIPAddresses
### Properties
* **addresses**: [AzureFirewallPublicIPAddress](#azurefirewallpublicipaddress)[]: The list of Public IP addresses associated with azure firewall or IP addresses to be retained.
* **count**: int: The number of Public IP addresses associated with azure firewall.

## HubRoute
### Properties
* **destinations**: string[] (Required): List of all destinations.
* **destinationType**: string (Required): The type of destinations (eg: CIDR, ResourceId, Service).
* **name**: string (Required): The name of the Route that is unique within a RouteTable. This name can be used to access this route.
* **nextHop**: string (Required): NextHop resource ID.
* **nextHopType**: string (Required): The type of next hop (eg: ResourceId).

## HubRouteTableProperties
### Properties
* **associatedConnections**: string[] (ReadOnly): List of all connections associated with this route table.
* **labels**: string[]: List of labels associated with this route table.
* **propagatingConnections**: string[] (ReadOnly): List of all connections that advertise to this route table.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the RouteTable resource.
* **routes**: [HubRoute](#hubroute)[]: List of all routes.

## HubVirtualNetworkConnectionProperties
### Properties
* **allowHubToRemoteVnetTransit**: bool: Deprecated: VirtualHub to RemoteVnet transit to enabled or not.
* **allowRemoteVnetToUseHubVnetGateways**: bool: Deprecated: Allow RemoteVnet to use Virtual Hub's gateways.
* **enableInternetSecurity**: bool: Enable internet security.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the hub virtual network connection resource.
* **remoteVirtualNetwork**: [SubResource](#subresource): Reference to the remote virtual network.
* **routingConfiguration**: [RoutingConfiguration](#routingconfiguration): The Routing Configuration indicating the associated and propagated route tables on this connection.

## IdpsQueryObject
### Properties
* **filters**: [FilterItems](#filteritems)[]: Contain all filters names and values
* **orderBy**: [OrderBy](#orderby): Column to sort response by
* **resultsPerPage**: int {minValue: 1, maxValue: 1000}: The number of the results to return in each page
* **search**: string: Search term in all columns
* **skip**: int: The number of records matching the filter to skip

## InboundNatPool
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within the set of inbound NAT pools used by the load balancer. This name can be used to access the resource.
* **properties**: [InboundNatPoolPropertiesFormat](#inboundnatpoolpropertiesformat): Properties of load balancer inbound nat pool.
* **type**: string (ReadOnly): Type of the resource.

## InboundNatPoolPropertiesFormat
### Properties
* **backendPort**: int (Required): The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
* **enableFloatingIP**: bool: Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
* **enableTcpReset**: bool: Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
* **frontendIPConfiguration**: [SubResource](#subresource): A reference to frontend IP addresses.
* **frontendPortRangeEnd**: int (Required): The last port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65535.
* **frontendPortRangeStart**: int (Required): The first port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65534.
* **idleTimeoutInMinutes**: int: The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
* **protocol**: 'All' | 'Tcp' | 'Udp' | string (Required): The reference to the transport protocol used by the inbound NAT pool.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the inbound NAT pool resource.

## InboundNatRule
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within the set of inbound NAT rules used by the load balancer. This name can be used to access the resource.
* **properties**: [InboundNatRulePropertiesFormat](#inboundnatrulepropertiesformat): Properties of load balancer inbound NAT rule.
* **type**: string (ReadOnly): Type of the resource.

## InboundNatRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource): A reference to backendAddressPool resource.
* **backendIPConfiguration**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration) (ReadOnly): A reference to a private IP address defined on a network interface of a VM. Traffic sent to the frontend port of each of the frontend IP configurations is forwarded to the backend IP.
* **backendPort**: int: The port used for the internal endpoint. Acceptable values range from 1 to 65535.
* **enableFloatingIP**: bool: Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
* **enableTcpReset**: bool: Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
* **frontendIPConfiguration**: [SubResource](#subresource): A reference to frontend IP addresses.
* **frontendPort**: int: The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
* **frontendPortRangeEnd**: int: The port range end for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeStart. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534.
* **frontendPortRangeStart**: int: The port range start for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeEnd. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534.
* **idleTimeoutInMinutes**: int: The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
* **protocol**: 'All' | 'Tcp' | 'Udp' | string: The reference to the transport protocol used by the load balancing rule.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the inbound NAT rule resource.

## InboundSecurityRuleProperties
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **rules**: [InboundSecurityRules](#inboundsecurityrules)[]: List of allowed rules.

## InboundSecurityRules
### Properties
* **destinationPortRange**: int {minValue: 0, maxValue: 65535}: NVA port ranges to be opened up. One needs to provide specific ports.
* **protocol**: 'TCP' | 'UDP' | string: Protocol. This should be either TCP or UDP.
* **sourceAddressPrefix**: string: The CIDR or source IP range. Only /30, /31 and /32 Ip ranges are allowed.

## IpAllocationPropertiesFormat
### Properties
* **allocationTags**: [IpAllocationPropertiesFormatAllocationTags](#ipallocationpropertiesformatallocationtags): IpAllocation tags.
* **ipamAllocationId**: string: The IPAM allocation ID.
* **prefix**: string: The address prefix for the IpAllocation.
* **prefixLength**: int: The address prefix length for the IpAllocation.
* **prefixType**: 'IPv4' | 'IPv6' | string: The address prefix Type for the IpAllocation.
* **subnet**: [SubResource](#subresource) (ReadOnly): The Subnet that using the prefix of this IpAllocation resource.
* **type**: 'Hypernet' | 'Undefined' | string: The type for the IpAllocation.
* **virtualNetwork**: [SubResource](#subresource) (ReadOnly): The VirtualNetwork that using the prefix of this IpAllocation resource.

## IpAllocationPropertiesFormatAllocationTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [IPConfigurationPropertiesFormat](#ipconfigurationpropertiesformat): Properties of the IP configuration.

## IPConfigurationBgpPeeringAddress
### Properties
* **customBgpIpAddresses**: string[]: The list of custom BGP peering addresses which belong to IP configuration.
* **defaultBgpIpAddresses**: string[] (ReadOnly): The list of default BGP peering addresses which belong to IP configuration.
* **ipconfigurationId**: string: The ID of IP configuration which belongs to gateway.
* **tunnelIpAddresses**: string[] (ReadOnly): The list of tunnel public IP addresses which belong to IP configuration.

## IPConfigurationProfile
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource. This name can be used to access the resource.
* **properties**: [IPConfigurationProfilePropertiesFormat](#ipconfigurationprofilepropertiesformat): Properties of the IP configuration profile.
* **type**: string (ReadOnly): Sub Resource type.

## IPConfigurationProfilePropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the IP configuration profile resource.
* **subnet**: [Subnet](#subnet): The reference to the subnet resource to create a container network interface ip configuration.

## IPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string: The private IP address of the IP configuration.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: The private IP address allocation method.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the IP configuration resource.
* **publicIPAddress**: [PublicIPAddress](#publicipaddress): The reference to the public IP resource.
* **subnet**: [Subnet](#subnet): The reference to the subnet resource.

## IpGroupPropertiesFormat
### Properties
* **firewallPolicies**: [SubResource](#subresource)[] (ReadOnly): List of references to Firewall Policies resources that this IpGroups is associated with.
* **firewalls**: [SubResource](#subresource)[] (ReadOnly): List of references to Firewall resources that this IpGroups is associated with.
* **ipAddresses**: string[]: IpAddresses/IpAddressPrefixes in the IpGroups resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the IpGroups resource.

## IpsecPolicy
### Properties
* **dhGroup**: 'DHGroup1' | 'DHGroup14' | 'DHGroup2' | 'DHGroup2048' | 'DHGroup24' | 'ECP256' | 'ECP384' | 'None' | string (Required): The DH Group used in IKE Phase 1 for initial SA.
* **ikeEncryption**: 'AES128' | 'AES192' | 'AES256' | 'DES' | 'DES3' | 'GCMAES128' | 'GCMAES256' | string (Required): The IKE encryption algorithm (IKE phase 2).
* **ikeIntegrity**: 'GCMAES128' | 'GCMAES256' | 'MD5' | 'SHA1' | 'SHA256' | 'SHA384' | string (Required): The IKE integrity algorithm (IKE phase 2).
* **ipsecEncryption**: 'AES128' | 'AES192' | 'AES256' | 'DES' | 'DES3' | 'GCMAES128' | 'GCMAES192' | 'GCMAES256' | 'None' | string (Required): The IPSec encryption algorithm (IKE phase 1).
* **ipsecIntegrity**: 'GCMAES128' | 'GCMAES192' | 'GCMAES256' | 'MD5' | 'SHA1' | 'SHA256' | string (Required): The IPSec integrity algorithm (IKE phase 1).
* **pfsGroup**: 'ECP256' | 'ECP384' | 'None' | 'PFS1' | 'PFS14' | 'PFS2' | 'PFS2048' | 'PFS24' | 'PFSMM' | string (Required): The Pfs Group used in IKE Phase 2 for new child SA.
* **saDataSizeKilobytes**: int (Required): The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for a site to site VPN tunnel.
* **saLifeTimeSeconds**: int (Required): The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for a site to site VPN tunnel.

## IpTag
### Properties
* **ipTagType**: string: The IP tag type. Example: FirstPartyUsage.
* **tag**: string: The value of the IP tag associated with the public IP. Example: SQL.

## Ipv6CircuitConnectionConfig
### Properties
* **addressPrefix**: string: /125 IP address space to carve out customer addresses for global reach.
* **circuitConnectionStatus**: 'Connected' | 'Connecting' | 'Disconnected' | string (ReadOnly): Express Route Circuit connection state.

## Ipv6ExpressRouteCircuitPeeringConfig
### Properties
* **microsoftPeeringConfig**: [ExpressRouteCircuitPeeringConfig](#expressroutecircuitpeeringconfig): The Microsoft peering configuration.
* **primaryPeerAddressPrefix**: string: The primary address prefix.
* **routeFilter**: [SubResource](#subresource): The reference to the RouteFilter resource.
* **secondaryPeerAddressPrefix**: string: The secondary address prefix.
* **state**: 'Disabled' | 'Enabled' | string: The state of peering.

## LoadBalancerBackendAddress
### Properties
* **name**: string: Name of the backend address.
* **properties**: [LoadBalancerBackendAddressPropertiesFormat](#loadbalancerbackendaddresspropertiesformat): Properties of load balancer backend address pool.

## LoadBalancerBackendAddressPropertiesFormat
### Properties
* **adminState**: 'Down' | 'None' | 'Up' | string: A list of administrative states which once set can override health probe so that Load Balancer will always forward new connections to backend, or deny new connections and reset existing connections.
* **inboundNatRulesPortMapping**: [NatRulePortMapping](#natruleportmapping)[] (ReadOnly): Collection of inbound NAT rule port mappings.
* **ipAddress**: string: IP Address belonging to the referenced virtual network.
* **loadBalancerFrontendIPConfiguration**: [SubResource](#subresource): Reference to the frontend ip address configuration defined in regional loadbalancer.
* **networkInterfaceIPConfiguration**: [SubResource](#subresource) (ReadOnly): Reference to IP address defined in network interfaces.
* **subnet**: [SubResource](#subresource): Reference to an existing subnet.
* **virtualNetwork**: [SubResource](#subresource): Reference to an existing virtual network.

## LoadBalancerPropertiesFormat
### Properties
* **backendAddressPools**: [BackendAddressPool](#backendaddresspool)[]: Collection of backend address pools used by a load balancer.
* **frontendIPConfigurations**: [FrontendIPConfiguration](#frontendipconfiguration)[]: Object representing the frontend IPs to be used for the load balancer.
* **inboundNatPools**: [InboundNatPool](#inboundnatpool)[]: Defines an external port range for inbound NAT to a single backend port on NICs associated with a load balancer. Inbound NAT rules are created automatically for each NIC associated with the Load Balancer using an external port from this range. Defining an Inbound NAT pool on your Load Balancer is mutually exclusive with defining inbound NAT rules. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an inbound NAT pool. They have to reference individual inbound NAT rules.
* **inboundNatRules**: [InboundNatRule](#inboundnatrule)[]: Collection of inbound NAT Rules used by a load balancer. Defining inbound NAT rules on your load balancer is mutually exclusive with defining an inbound NAT pool. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an Inbound NAT pool. They have to reference individual inbound NAT rules.
* **loadBalancingRules**: [LoadBalancingRule](#loadbalancingrule)[]: Object collection representing the load balancing rules Gets the provisioning.
* **outboundRules**: [OutboundRule](#outboundrule)[]: The outbound rules.
* **probes**: [Probe](#probe)[]: Collection of probe objects used in the load balancer.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the load balancer resource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the load balancer resource.

## LoadBalancerSku
### Properties
* **name**: 'Basic' | 'Gateway' | 'Standard' | string: Name of a load balancer SKU.
* **tier**: 'Global' | 'Regional' | string: Tier of a load balancer SKU.

## LoadBalancingRule
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within the set of load balancing rules used by the load balancer. This name can be used to access the resource.
* **properties**: [LoadBalancingRulePropertiesFormat](#loadbalancingrulepropertiesformat): Properties of load balancer load balancing rule.
* **type**: string (ReadOnly): Type of the resource.

## LoadBalancingRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource): A reference to a pool of DIPs. Inbound traffic is randomly load balanced across IPs in the backend IPs.
* **backendAddressPools**: [SubResource](#subresource)[]: An array of references to pool of DIPs.
* **backendPort**: int: The port used for internal connections on the endpoint. Acceptable values are between 0 and 65535. Note that value 0 enables "Any Port".
* **disableOutboundSnat**: bool: Configures SNAT for the VMs in the backend pool to use the publicIP address specified in the frontend of the load balancing rule.
* **enableFloatingIP**: bool: Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
* **enableTcpReset**: bool: Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
* **frontendIPConfiguration**: [SubResource](#subresource): A reference to frontend IP addresses.
* **frontendPort**: int (Required): The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 0 and 65534. Note that value 0 enables "Any Port".
* **idleTimeoutInMinutes**: int: The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
* **loadDistribution**: 'Default' | 'SourceIP' | 'SourceIPProtocol' | string: The load distribution policy for this rule.
* **probe**: [SubResource](#subresource): The reference to the load balancer probe used by the load balancing rule.
* **protocol**: 'All' | 'Tcp' | 'Udp' | string (Required): The reference to the transport protocol used by the load balancing rule.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the load balancing rule resource.

## LocalNetworkGateway
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [LocalNetworkGatewayPropertiesFormat](#localnetworkgatewaypropertiesformat) (Required): Properties of the local network gateway.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## LocalNetworkGatewayPropertiesFormat
### Properties
* **bgpSettings**: [BgpSettings](#bgpsettings): Local network gateway's BGP speaker settings.
* **fqdn**: string: FQDN of local network gateway.
* **gatewayIpAddress**: string: IP address of local network gateway.
* **localNetworkAddressSpace**: [AddressSpace](#addressspace): Local network site address space.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the local network gateway resource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the local network gateway resource.

## ManagedRuleGroupOverride
### Properties
* **ruleGroupName**: string (Required): The managed rule group to override.
* **rules**: [ManagedRuleOverride](#managedruleoverride)[]: List of rules that will be disabled. If none specified, all rules in the group will be disabled.

## ManagedRuleOverride
### Properties
* **action**: 'Allow' | 'AnomalyScoring' | 'Block' | 'Log' | string: Describes the override action to be applied when rule matches.
* **ruleId**: string (Required): Identifier for the managed rule.
* **state**: 'Disabled' | 'Enabled' | string: The state of the managed rule. Defaults to Disabled if not specified.

## ManagedRulesDefinition
### Properties
* **exclusions**: [OwaspCrsExclusionEntry](#owaspcrsexclusionentry)[]: The Exclusions that are applied on the policy.
* **managedRuleSets**: [ManagedRuleSet](#managedruleset)[] (Required): The managed rule sets that are associated with the policy.

## ManagedRuleSet
### Properties
* **ruleGroupOverrides**: [ManagedRuleGroupOverride](#managedrulegroupoverride)[]: Defines the rule group overrides to apply to the rule set.
* **ruleSetType**: string (Required): Defines the rule set type to use.
* **ruleSetVersion**: string (Required): Defines the version of the rule set to use.

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

## MatchCondition
### Properties
* **matchValues**: string[] (Required): Match value.
* **matchVariables**: [MatchVariable](#matchvariable)[] (Required): List of match variables.
* **negationConditon**: bool: Whether this is negate condition or not.
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GeoMatch' | 'GreaterThan' | 'GreaterThanOrEqual' | 'IPMatch' | 'LessThan' | 'LessThanOrEqual' | 'Regex' | string (Required): The operator to be matched.
* **transforms**: ('HtmlEntityDecode' | 'Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode' | string)[]: List of transforms.

## MatchVariable
### Properties
* **selector**: string: The selector of match variable.
* **variableName**: 'PostArgs' | 'QueryString' | 'RemoteAddr' | 'RequestBody' | 'RequestCookies' | 'RequestHeaders' | 'RequestMethod' | 'RequestUri' | string (Required): Match Variable.

## NatGateway
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [NatGatewayPropertiesFormat](#natgatewaypropertiesformat): Nat Gateway properties.
* **sku**: [NatGatewaySku](#natgatewaysku): The nat gateway SKU.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.
* **zones**: string[]: A list of availability zones denoting the zone in which Nat Gateway should be deployed.

## NatGatewayPropertiesFormat
### Properties
* **idleTimeoutInMinutes**: int: The idle timeout of the nat gateway.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the NAT gateway resource.
* **publicIpAddresses**: [SubResource](#subresource)[]: An array of public ip addresses associated with the nat gateway resource.
* **publicIpPrefixes**: [SubResource](#subresource)[]: An array of public ip prefixes associated with the nat gateway resource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the NAT gateway resource.
* **subnets**: [SubResource](#subresource)[] (ReadOnly): An array of references to the subnets using this nat gateway resource.

## NatGatewaySku
### Properties
* **name**: 'Standard' | string: Name of Nat Gateway SKU.

## NatRulePortMapping
### Properties
* **backendPort**: int: Backend port.
* **frontendPort**: int: Frontend port.
* **inboundNatRuleName**: string: Name of inbound NAT rule.

## NetworkGroupProperties
### Properties
* **description**: string: A description of the network group.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the scope assignment resource.
* **resourceGuid**: string (ReadOnly): Unique identifier for this resource.

## NetworkInterface
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location of the network interface.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat): Properties of the network interface.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## NetworkInterfaceDnsSettings
### Properties
* **appliedDnsServers**: string[] (ReadOnly): If the VM that uses this NIC is part of an Availability Set, then this list will have the union of all DNS servers from all NICs that are part of the Availability Set. This property is what is configured on each of those VMs.
* **dnsServers**: string[]: List of DNS servers IP addresses. Use 'AzureProvidedDNS' to switch to azure provided DNS resolution. 'AzureProvidedDNS' value cannot be combined with other IPs, it must be the only value in dnsServers collection.
* **internalDnsNameLabel**: string: Relative DNS name for this NIC used for internal communications between VMs in the same virtual network.
* **internalDomainNameSuffix**: string (ReadOnly): Even if internalDnsNameLabel is not specified, a DNS entry is created for the primary NIC of the VM. This DNS name can be constructed by concatenating the VM name with the value of internalDomainNameSuffix.
* **internalFqdn**: string (ReadOnly): Fully qualified DNS name supporting internal communications between VMs in the same virtual network.

## NetworkInterfaceIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [NetworkInterfaceIPConfigurationPropertiesFormat](#networkinterfaceipconfigurationpropertiesformat): Network interface IP configuration properties.
* **type**: string: Resource type.

## NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties
### Properties
* **fqdns**: string[] (ReadOnly): List of FQDNs for current private link connection.
* **groupId**: string (ReadOnly): The group ID for current private link connection.
* **requiredMemberName**: string (ReadOnly): The required member name for current private link connection.

## NetworkInterfaceIPConfigurationPropertiesFormat
### Properties
* **applicationGatewayBackendAddressPools**: [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)[]: The reference to ApplicationGatewayBackendAddressPool resource.
* **applicationSecurityGroups**: [ApplicationSecurityGroup](#applicationsecuritygroup)[]: Application security groups in which the IP configuration is included.
* **gatewayLoadBalancer**: [SubResource](#subresource): The reference to gateway load balancer frontend IP.
* **loadBalancerBackendAddressPools**: [BackendAddressPool](#backendaddresspool)[]: The reference to LoadBalancerBackendAddressPool resource.
* **loadBalancerInboundNatRules**: [InboundNatRule](#inboundnatrule)[]: A list of references of LoadBalancerInboundNatRules.
* **primary**: bool: Whether this is a primary customer address on the network interface.
* **privateIPAddress**: string: Private IP address of the IP configuration.
* **privateIPAddressVersion**: 'IPv4' | 'IPv6' | string: Whether the specific IP configuration is IPv4 or IPv6. Default is IPv4.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: The private IP address allocation method.
* **privateLinkConnectionProperties**: [NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties](#networkinterfaceipconfigurationprivatelinkconnectionproperties) (ReadOnly): PrivateLinkConnection properties for the network interface.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the network interface IP configuration.
* **publicIPAddress**: [PublicIPAddress](#publicipaddress): Public IP address bound to the IP configuration.
* **subnet**: [Subnet](#subnet): Subnet bound to the IP configuration.
* **virtualNetworkTaps**: [VirtualNetworkTap](#virtualnetworktap)[]: The reference to Virtual Network Taps.

## NetworkInterfacePropertiesFormat
### Properties
* **auxiliaryMode**: 'AcceleratedConnections' | 'Floating' | 'MaxConnections' | 'None' | string: Auxiliary mode of Network Interface resource.
* **auxiliarySku**: 'A1' | 'A2' | 'A4' | 'A8' | 'None' | string: Auxiliary sku of Network Interface resource.
* **disableTcpStateTracking**: bool: Indicates whether to disable tcp state tracking.
* **dnsSettings**: [NetworkInterfaceDnsSettings](#networkinterfacednssettings): The DNS settings in network interface.
* **dscpConfiguration**: [SubResource](#subresource) (ReadOnly): A reference to the dscp configuration to which the network interface is linked.
* **enableAcceleratedNetworking**: bool: If the network interface is configured for accelerated networking. Not applicable to VM sizes which require accelerated networking.
* **enableIPForwarding**: bool: Indicates whether IP forwarding is enabled on this network interface.
* **hostedWorkloads**: string[] (ReadOnly): A list of references to linked BareMetal resources.
* **ipConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[]: A list of IPConfigurations of the network interface.
* **macAddress**: string (ReadOnly): The MAC address of the network interface.
* **migrationPhase**: 'Abort' | 'Commit' | 'Committed' | 'None' | 'Prepare' | string: Migration phase of Network Interface resource.
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup): The reference to the NetworkSecurityGroup resource.
* **nicType**: 'Elastic' | 'Standard' | string: Type of Network Interface resource.
* **primary**: bool (ReadOnly): Whether this is a primary network interface on a virtual machine.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint) (ReadOnly): A reference to the private endpoint to which the network interface is linked.
* **privateLinkService**: [PrivateLinkService](#privatelinkservice): Privatelinkservice of the network interface resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the network interface resource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the network interface resource.
* **tapConfigurations**: [NetworkInterfaceTapConfiguration](#networkinterfacetapconfiguration)[] (ReadOnly): A list of TapConfigurations of the network interface.
* **virtualMachine**: [SubResource](#subresource) (ReadOnly): The reference to a virtual machine.
* **vnetEncryptionSupported**: bool (ReadOnly): Whether the virtual machine this nic is attached to supports encryption.
* **workloadType**: string: WorkloadType of the NetworkInterface for BareMetal resources

## NetworkInterfaceTapConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [NetworkInterfaceTapConfigurationPropertiesFormat](#networkinterfacetapconfigurationpropertiesformat): Properties of the Virtual Network Tap configuration.
* **type**: string (ReadOnly): Sub Resource type.

## NetworkInterfaceTapConfigurationPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the network interface tap configuration resource.
* **virtualNetworkTap**: [VirtualNetworkTap](#virtualnetworktap): The reference to the Virtual Network Tap resource.

## NetworkManagerConnectionProperties
### Properties
* **connectionState**: 'Conflict' | 'Connected' | 'Pending' | 'Rejected' | 'Revoked' | string (ReadOnly): Connection state.
* **description**: string: A description of the network manager connection.
* **networkManagerId**: string: Network Manager Id.

## NetworkManagerDeploymentStatus
### Properties
* **commitTime**: string: Commit Time.
* **configurationIds**: string[]: List of configuration ids.
* **deploymentStatus**: 'Deployed' | 'Deploying' | 'Failed' | 'NotStarted' | string: Deployment Status.
* **deploymentType**: 'Connectivity' | 'SecurityAdmin' | string: Configuration Deployment Type.
* **errorMessage**: string: Error Message.
* **region**: string: Region Name.

## NetworkManagerDeploymentStatusListResult
### Properties
* **skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [NetworkManagerDeploymentStatus](#networkmanagerdeploymentstatus)[]: Gets a page of Network Manager Deployment Status

## NetworkManagerDeploymentStatusParameter
### Properties
* **deploymentTypes**: ('Connectivity' | 'SecurityAdmin' | string)[]: List of deployment types.
* **regions**: string[]: List of locations.
* **skipToken**: string: Continuation token for pagination, capturing the next page size and offset, as well as the context of the query.

## NetworkManagerEffectiveConnectivityConfigurationListResult
### Properties
* **skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [EffectiveConnectivityConfiguration](#effectiveconnectivityconfiguration)[]: Gets a page of NetworkManagerEffectiveConnectivityConfiguration

## NetworkManagerEffectiveSecurityAdminRulesListResult
### Properties
* **skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
* **value**: [EffectiveBaseSecurityAdminRule](#effectivebasesecurityadminrule)[]: Gets a page of NetworkManagerEffectiveSecurityAdminRules

## NetworkManagerProperties
### Properties
* **description**: string: A description of the network manager.
* **networkManagerScopeAccesses**: ('Connectivity' | 'SecurityAdmin' | string)[] (Required): Scope Access.
* **networkManagerScopes**: [NetworkManagerPropertiesNetworkManagerScopes](#networkmanagerpropertiesnetworkmanagerscopes) (Required): Scope of Network Manager.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the network manager resource.
* **resourceGuid**: string (ReadOnly): Unique identifier for this resource.

## NetworkManagerPropertiesNetworkManagerScopes
### Properties
* **crossTenantScopes**: [CrossTenantScopes](#crosstenantscopes)[] (ReadOnly): List of cross tenant scopes.
* **managementGroups**: string[]: List of management groups.
* **subscriptions**: string[]: List of subscriptions.

## NetworkManagerSecurityGroupItem
### Properties
* **networkGroupId**: string (Required): Network manager group Id.

## NetworkProfilePropertiesFormat
### Properties
* **containerNetworkInterfaceConfigurations**: [ContainerNetworkInterfaceConfiguration](#containernetworkinterfaceconfiguration)[]: List of chid container network interface configurations.
* **containerNetworkInterfaces**: [ContainerNetworkInterface](#containernetworkinterface)[] (ReadOnly): List of child container network interfaces.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the network profile resource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the network profile resource.

## NetworkSecurityGroup
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [NetworkSecurityGroupPropertiesFormat](#networksecuritygrouppropertiesformat): Properties of the network security group.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## NetworkSecurityGroupPropertiesFormat
### Properties
* **defaultSecurityRules**: [SecurityRule](#securityrule)[] (ReadOnly): The default security rules of network security group.
* **flowLogs**: [FlowLog](#flowlog)[] (ReadOnly): A collection of references to flow log resources.
* **flushConnection**: bool: When enabled, flows created from Network Security Group connections will be re-evaluated when rules are updates. Initial enablement will trigger re-evaluation.
* **networkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly): A collection of references to network interfaces.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the network security group resource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the network security group resource.
* **securityRules**: [SecurityRule](#securityrule)[]: A collection of security rules of the network security group.
* **subnets**: [Subnet](#subnet)[] (ReadOnly): A collection of references to subnets.

## NetworkVirtualAppliancePropertiesFormat
### Properties
* **additionalNics**: [VirtualApplianceAdditionalNicProperties](#virtualapplianceadditionalnicproperties)[]: Details required for Additional Network Interface.
* **addressPrefix**: string (ReadOnly): Address Prefix.
* **bootStrapConfigurationBlobs**: string[]: BootStrapConfigurationBlobs storage URLs.
* **cloudInitConfiguration**: string: CloudInitConfiguration string in plain text.
* **cloudInitConfigurationBlobs**: string[]: CloudInitConfigurationBlob storage URLs.
* **delegation**: [DelegationProperties](#delegationproperties): The delegation for the Virtual Appliance
* **deploymentType**: string (ReadOnly): The deployment type. PartnerManaged for the SaaS NVA
* **inboundSecurityRules**: [SubResource](#subresource)[] (ReadOnly): List of references to InboundSecurityRules.
* **nvaSku**: [VirtualApplianceSkuProperties](#virtualapplianceskuproperties): Network Virtual Appliance SKU.
* **partnerManagedResource**: [PartnerManagedResourceProperties](#partnermanagedresourceproperties): The delegation for the Virtual Appliance
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **sshPublicKey**: string: Public key for SSH login.
* **virtualApplianceAsn**: int {minValue: 0, maxValue: 4294967295}: VirtualAppliance ASN. Microsoft private, public and IANA reserved ASN are not supported.
* **virtualApplianceNics**: [VirtualApplianceNicProperties](#virtualappliancenicproperties)[] (ReadOnly): List of Virtual Appliance Network Interfaces.
* **virtualApplianceSites**: [SubResource](#subresource)[] (ReadOnly): List of references to VirtualApplianceSite.
* **virtualHub**: [SubResource](#subresource): The Virtual Hub where Network Virtual Appliance is being deployed.

## NetworkVirtualApplianceSkuInstances
### Properties
* **instanceCount**: int (ReadOnly): Instance Count.
* **scaleUnit**: string (ReadOnly): Scale Unit.

## NetworkVirtualApplianceSkuPropertiesFormat
### Properties
* **availableScaleUnits**: [NetworkVirtualApplianceSkuInstances](#networkvirtualapplianceskuinstances)[]: The list of scale units available.
* **availableVersions**: string[] (ReadOnly): Available Network Virtual Appliance versions.
* **vendor**: string (ReadOnly): Network Virtual Appliance Sku vendor.

## NetworkWatcherPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the network watcher resource.

## O365BreakOutCategoryPolicies
### Properties
* **allow**: bool: Flag to control allow category.
* **default**: bool: Flag to control default category.
* **optimize**: bool: Flag to control optimize category.

## O365PolicyProperties
### Properties
* **breakOutCategories**: [O365BreakOutCategoryPolicies](#o365breakoutcategorypolicies): Office365 breakout categories.

## Office365PolicyProperties
### Properties
* **breakOutCategories**: [BreakOutCategoryPolicies](#breakoutcategorypolicies): Office 365 breakout categories.

## OrderBy
### Properties
* **field**: string: Describes the actual column name to sort by
* **order**: 'Ascending' | 'Descending' | string: Describes if results should be in ascending/descending order

## OutboundRule
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within the set of outbound rules used by the load balancer. This name can be used to access the resource.
* **properties**: [OutboundRulePropertiesFormat](#outboundrulepropertiesformat): Properties of load balancer outbound rule.
* **type**: string (ReadOnly): Type of the resource.

## OutboundRulePropertiesFormat
### Properties
* **allocatedOutboundPorts**: int: The number of outbound ports to be used for NAT.
* **backendAddressPool**: [SubResource](#subresource) (Required): A reference to a pool of DIPs. Outbound traffic is randomly load balanced across IPs in the backend IPs.
* **enableTcpReset**: bool: Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
* **frontendIPConfigurations**: [SubResource](#subresource)[] (Required): The Frontend IP addresses of the load balancer.
* **idleTimeoutInMinutes**: int: The timeout for the TCP idle connection.
* **protocol**: 'All' | 'Tcp' | 'Udp' | string (Required): The protocol for the outbound rule in load balancer.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the outbound rule resource.

## OwaspCrsExclusionEntry
### Properties
* **exclusionManagedRuleSets**: [ExclusionManagedRuleSet](#exclusionmanagedruleset)[]: The managed rule sets that are associated with the exclusion.
* **matchVariable**: 'RequestArgKeys' | 'RequestArgNames' | 'RequestArgValues' | 'RequestCookieKeys' | 'RequestCookieNames' | 'RequestCookieValues' | 'RequestHeaderKeys' | 'RequestHeaderNames' | 'RequestHeaderValues' | string (Required): The variable to be excluded.
* **selector**: string (Required): When matchVariable is a collection, operator used to specify which elements in the collection this exclusion applies to.
* **selectorMatchOperator**: 'Contains' | 'EndsWith' | 'Equals' | 'EqualsAny' | 'StartsWith' | string (Required): When matchVariable is a collection, operate on the selector to specify which elements in the collection this exclusion applies to.

## P2SConnectionConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [P2SConnectionConfigurationProperties](#p2sconnectionconfigurationproperties): Properties of the P2S connection configuration.

## P2SConnectionConfigurationProperties
### Properties
* **configurationPolicyGroupAssociations**: [SubResource](#subresource)[] (ReadOnly): List of Configuration Policy Groups that this P2SConnectionConfiguration is attached to.
* **enableInternetSecurity**: bool: Flag indicating whether the enable internet security flag is turned on for the P2S Connections or not.
* **previousConfigurationPolicyGroupAssociations**: [VpnServerConfigurationPolicyGroup](#vpnserverconfigurationpolicygroup)[] (ReadOnly): List of previous Configuration Policy Groups that this P2SConnectionConfiguration was attached to.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the P2SConnectionConfiguration resource.
* **routingConfiguration**: [RoutingConfiguration](#routingconfiguration): The Routing Configuration indicating the associated and propagated route tables on this connection.
* **vpnClientAddressPool**: [AddressSpace](#addressspace): The reference to the address space resource which represents Address space for P2S VpnClient.

## P2SVpnGateway
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [P2SVpnGatewayProperties](#p2svpngatewayproperties): Properties of the P2SVpnGateway.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## P2SVpnGatewayProperties
### Properties
* **customDnsServers**: string[]: List of all customer specified DNS servers IP addresses.
* **isRoutingPreferenceInternet**: bool: Enable Routing Preference property for the Public IP Interface of the P2SVpnGateway.
* **p2SConnectionConfigurations**: [P2SConnectionConfiguration](#p2sconnectionconfiguration)[]: List of all p2s connection configurations of the gateway.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the P2S VPN gateway resource.
* **virtualHub**: [SubResource](#subresource): The VirtualHub to which the gateway belongs.
* **vpnClientConnectionHealth**: [VpnClientConnectionHealth](#vpnclientconnectionhealth) (ReadOnly): All P2S VPN clients' connection health status.
* **vpnGatewayScaleUnit**: int: The scale unit for this p2s vpn gateway.
* **vpnServerConfiguration**: [SubResource](#subresource): The VpnServerConfiguration to which the p2sVpnGateway is attached to.

## PacketCaptureFilter
### Properties
* **localIPAddress**: string: Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5"? for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
* **localPort**: string: Local port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
* **protocol**: 'Any' | 'TCP' | 'UDP' | string: Protocol to be filtered on.
* **remoteIPAddress**: string: Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
* **remotePort**: string: Remote port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.

## PacketCaptureMachineScope
### Properties
* **exclude**: string[]: List of AzureVMSS instances which has to be excluded from the AzureVMSS from running packet capture.
* **include**: string[]: List of AzureVMSS instances to run packet capture on.

## PacketCaptureParametersOrPacketCaptureResultProperties
### Properties
* **bytesToCapturePerPacket**: int {minValue: 0, maxValue: 4294967295}: Number of bytes captured per packet, the remaining bytes are truncated.
* **filters**: [PacketCaptureFilter](#packetcapturefilter)[]: A list of packet capture filters.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the packet capture session.
* **scope**: [PacketCaptureMachineScope](#packetcapturemachinescope): A list of AzureVMSS instances which can be included or excluded to run packet capture. If both included and excluded are empty, then the packet capture will run on all instances of AzureVMSS.
* **storageLocation**: [PacketCaptureStorageLocation](#packetcapturestoragelocation) (Required): The storage location for a packet capture session.
* **target**: string (Required): The ID of the targeted resource, only AzureVM and AzureVMSS as target type are currently supported.
* **targetType**: 'AzureVM' | 'AzureVMSS': Target type of the resource provided.
* **timeLimitInSeconds**: int {minValue: 0, maxValue: 18000}: Maximum duration of the capture session in seconds.
* **totalBytesPerSession**: int {minValue: 0, maxValue: 4294967295}: Maximum size of the capture output.

## PacketCaptureStorageLocation
### Properties
* **filePath**: string: A valid local path on the targeting VM. Must include the name of the capture file (*.cap). For linux virtual machine it must start with /var/captures. Required if no storage ID is provided, otherwise optional.
* **storageId**: string: The ID of the storage account to save the packet capture session. Required if no local file path is provided.
* **storagePath**: string: The URI of the storage path to save the packet capture. Must be a well-formed URI describing the location to save the packet capture.

## Parameter
### Properties
* **asPath**: string[]: List of AS paths.
* **community**: string[]: List of BGP communities.
* **routePrefix**: string[]: List of route prefixes.

## PartnerManagedResourceProperties
### Properties
* **id**: string (ReadOnly): The partner managed resource id.
* **internalLoadBalancerId**: string (ReadOnly): The partner managed ILB resource id
* **standardLoadBalancerId**: string (ReadOnly): The partner managed SLB resource id

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
* **expressRouteCircuitPeering**: [SubResource](#subresource): Reference to Express Route Circuit Private Peering Resource of the circuit.
* **peerExpressRouteCircuitPeering**: [SubResource](#subresource): Reference to Express Route Circuit Private Peering Resource of the peered circuit.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the peer express route circuit connection resource.

## PolicySettings
### Properties
* **customBlockResponseBody**: string {maxLength: 32768, pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$"}: If the action type is block, customer can override the response body. The body must be specified in base64 encoding.
* **customBlockResponseStatusCode**: int {minValue: 0}: If the action type is block, customer can override the response status code.
* **fileUploadEnforcement**: bool: Whether allow WAF to enforce file upload limits.
* **fileUploadLimitInMb**: int {minValue: 0}: Maximum file upload size in Mb for WAF.
* **logScrubbing**: [PolicySettingsLogScrubbing](#policysettingslogscrubbing): To scrub sensitive log fields
* **maxRequestBodySizeInKb**: int {minValue: 8}: Maximum request body size in Kb for WAF.
* **mode**: 'Detection' | 'Prevention' | string: The mode of the policy.
* **requestBodyCheck**: bool: Whether to allow WAF to check request Body.
* **requestBodyEnforcement**: bool: Whether allow WAF to enforce request body limits.
* **requestBodyInspectLimitInKB**: int: Max inspection limit in KB for request body inspection for WAF.
* **state**: 'Disabled' | 'Enabled' | string: The state of the policy.

## PolicySettingsLogScrubbing
### Properties
* **scrubbingRules**: [WebApplicationFirewallScrubbingRules](#webapplicationfirewallscrubbingrules)[]: The rules that are applied to the logs for scrubbing.
* **state**: 'Disabled' | 'Enabled' | string: State of the log scrubbing config. Default value is Enabled.

## PrivateDnsZoneConfig
### Properties
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [PrivateDnsZonePropertiesFormat](#privatednszonepropertiesformat): Properties of the private dns zone configuration.

## PrivateDnsZoneGroupPropertiesFormat
### Properties
* **privateDnsZoneConfigs**: [PrivateDnsZoneConfig](#privatednszoneconfig)[]: A collection of private dns zone configurations of the private dns zone group.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the private dns zone group resource.

## PrivateDnsZonePropertiesFormat
### Properties
* **privateDnsZoneId**: string: The resource id of the private dns zone.
* **recordSets**: [RecordSet](#recordset)[] (ReadOnly): A collection of information regarding a recordSet, holding information to identify private resources.

## PrivateEndpoint
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location of the load balancer.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [PrivateEndpointProperties](#privateendpointproperties): Properties of the private endpoint.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## PrivateEndpointConnection
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the private end point connection.
* **type**: string (ReadOnly): The resource type.

## PrivateEndpointConnectionProperties
### Properties
* **linkIdentifier**: string (ReadOnly): The consumer link id.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint) (ReadOnly): The resource of private end point.
* **privateEndpointLocation**: string (ReadOnly): The location of the private endpoint.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateEndpointIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **name**: string: The name of the resource that is unique within a resource group.
* **properties**: [PrivateEndpointIPConfigurationProperties](#privateendpointipconfigurationproperties): Properties of private endpoint IP configurations.
* **type**: string (ReadOnly): The resource type.

## PrivateEndpointIPConfigurationProperties
### Properties
* **groupId**: string: The ID of a group obtained from the remote resource that this private endpoint should connect to.
* **memberName**: string: The member name of a group obtained from the remote resource that this private endpoint should connect to.
* **privateIPAddress**: string: A private ip address obtained from the private endpoint's subnet.

## PrivateEndpointProperties
### Properties
* **applicationSecurityGroups**: [ApplicationSecurityGroup](#applicationsecuritygroup)[]: Application security groups in which the private endpoint IP configuration is included.
* **customDnsConfigs**: [CustomDnsConfigPropertiesFormat](#customdnsconfigpropertiesformat)[]: An array of custom dns configurations.
* **customNetworkInterfaceName**: string: The custom name of the network interface attached to the private endpoint.
* **ipConfigurations**: [PrivateEndpointIPConfiguration](#privateendpointipconfiguration)[]: A list of IP configurations of the private endpoint. This will be used to map to the First Party Service's endpoints.
* **manualPrivateLinkServiceConnections**: [PrivateLinkServiceConnection](#privatelinkserviceconnection)[]: A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource.
* **networkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly): An array of references to the network interfaces created for this private endpoint.
* **privateLinkServiceConnections**: [PrivateLinkServiceConnection](#privatelinkserviceconnection)[]: A grouping of information about the connection to the remote resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the private endpoint resource.
* **subnet**: [Subnet](#subnet): The ID of the subnet from which the private IP will be allocated.

## PrivateLinkService
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location of the load balancer.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [PrivateLinkServiceProperties](#privatelinkserviceproperties): Properties of the private link service.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## PrivateLinkServiceConnection
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [PrivateLinkServiceConnectionProperties](#privatelinkserviceconnectionproperties): Properties of the private link service connection.
* **type**: string (ReadOnly): The resource type.

## PrivateLinkServiceConnectionProperties
### Properties
* **groupIds**: string[]: The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): A collection of read-only information about the state of the connection to the remote resource.
* **privateLinkServiceId**: string: The resource id of private link service.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the private link service connection resource.
* **requestMessage**: string: A message passed to the owner of the remote resource with this connection request. Restricted to 140 chars.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## PrivateLinkServiceIpConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of private link service ip configuration.
* **properties**: [PrivateLinkServiceIpConfigurationProperties](#privatelinkserviceipconfigurationproperties): Properties of the private link service ip configuration.
* **type**: string (ReadOnly): The resource type.

## PrivateLinkServiceIpConfigurationProperties
### Properties
* **primary**: bool: Whether the ip configuration is primary or not.
* **privateIPAddress**: string: The private IP address of the IP configuration.
* **privateIPAddressVersion**: 'IPv4' | 'IPv6' | string: Whether the specific IP configuration is IPv4 or IPv6. Default is IPv4.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: The private IP address allocation method.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the private link service IP configuration resource.
* **subnet**: [Subnet](#subnet): The reference to the subnet resource.

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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the private link service resource.
* **visibility**: [PrivateLinkServicePropertiesVisibility](#privatelinkservicepropertiesvisibility): The visibility list of the private link service.

## PrivateLinkServicePropertiesAutoApproval
### Properties
* **subscriptions**: string[]: The list of subscriptions.

## PrivateLinkServicePropertiesVisibility
### Properties
* **subscriptions**: string[]: The list of subscriptions.

## Probe
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within the set of probes used by the load balancer. This name can be used to access the resource.
* **properties**: [ProbePropertiesFormat](#probepropertiesformat): Properties of load balancer probe.
* **type**: string (ReadOnly): Type of the resource.

## ProbePropertiesFormat
### Properties
* **intervalInSeconds**: int: The interval, in seconds, for how frequently to probe the endpoint for health status. Typically, the interval is slightly less than half the allocated timeout period (in seconds) which allows two full probes before taking the instance out of rotation. The default value is 15, the minimum value is 5.
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly): The load balancer rules that use this probe.
* **numberOfProbes**: int: The number of probes where if no response, will result in stopping further traffic from being delivered to the endpoint. This values allows endpoints to be taken out of rotation faster or slower than the typical times used in Azure.
* **port**: int (Required): The port for communicating the probe. Possible values range from 1 to 65535, inclusive.
* **probeThreshold**: int: The number of consecutive successful or failed probes in order to allow or deny traffic from being delivered to this endpoint. After failing the number of consecutive probes equal to this value, the endpoint will be taken out of rotation and require the same number of successful consecutive probes to be placed back in rotation.
* **protocol**: 'Http' | 'Https' | 'Tcp' | string (Required): The protocol of the end point. If 'Tcp' is specified, a received ACK is required for the probe to be successful. If 'Http' or 'Https' is specified, a 200 OK response from the specifies URI is required for the probe to be successful.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the probe resource.
* **requestPath**: string: The URI used for requesting health status from the VM. Path is required if a protocol is set to http. Otherwise, it is not allowed. There is no default value.

## PropagatedRouteTable
### Properties
* **ids**: [SubResource](#subresource)[]: The list of resource ids of all the RouteTables.
* **labels**: string[]: The list of labels.

## PublicIPAddress
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location of the public ip address.
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
* **domainNameLabel**: string: The domain name label. The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
* **domainNameLabelScope**: 'NoReuse' | 'ResourceGroupReuse' | 'SubscriptionReuse' | 'TenantReuse': The domain name label scope. If a domain name label and a domain name label scope are specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system with a hashed value includes in FQDN.
* **fqdn**: string: The Fully Qualified Domain Name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone.
* **reverseFqdn**: string: The reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.

## PublicIPAddressPropertiesFormat
### Properties
* **ddosSettings**: [DdosSettings](#ddossettings): The DDoS protection custom policy associated with the public IP address.
* **deleteOption**: 'Delete' | 'Detach' | string: Specify what happens to the public IP address when the VM using it is deleted
* **dnsSettings**: [PublicIPAddressDnsSettings](#publicipaddressdnssettings): The FQDN of the DNS record associated with the public IP address.
* **idleTimeoutInMinutes**: int: The idle timeout of the public IP address.
* **ipAddress**: string: The IP address associated with the public IP address resource.
* **ipConfiguration**: [IPConfiguration](#ipconfiguration) (ReadOnly): The IP configuration associated with the public IP address.
* **ipTags**: [IpTag](#iptag)[]: The list of tags associated with the public IP address.
* **linkedPublicIPAddress**: [PublicIPAddress](#publicipaddress): The linked public IP address of the public IP address resource.
* **migrationPhase**: 'Abort' | 'Commit' | 'Committed' | 'None' | 'Prepare' | string: Migration phase of Public IP Address.
* **natGateway**: [NatGateway](#natgateway): The NatGateway for the Public IP address.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the public IP address resource.
* **publicIPAddressVersion**: 'IPv4' | 'IPv6' | string: The public IP address version.
* **publicIPAllocationMethod**: 'Dynamic' | 'Static' | string: The public IP address allocation method.
* **publicIPPrefix**: [SubResource](#subresource): The Public IP Prefix this Public IP Address should be allocated from.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the public IP address resource.
* **servicePublicIPAddress**: [PublicIPAddress](#publicipaddress): The service public IP address of the public IP address resource.

## PublicIPAddressSku
### Properties
* **name**: 'Basic' | 'Standard' | string: Name of a public IP address SKU.
* **tier**: 'Global' | 'Regional' | string: Tier of a public IP address SKU.

## PublicIPPrefixPropertiesFormat
### Properties
* **customIPPrefix**: [SubResource](#subresource): The customIpPrefix that this prefix is associated with.
* **ipPrefix**: string (ReadOnly): The allocated Prefix.
* **ipTags**: [IpTag](#iptag)[]: The list of tags associated with the public IP prefix.
* **loadBalancerFrontendIpConfiguration**: [SubResource](#subresource) (ReadOnly): The reference to load balancer frontend IP configuration associated with the public IP prefix.
* **natGateway**: [NatGateway](#natgateway): NatGateway of Public IP Prefix.
* **prefixLength**: int: The Length of the Public IP Prefix.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the public IP prefix resource.
* **publicIPAddresses**: [ReferencedPublicIpAddress](#referencedpublicipaddress)[] (ReadOnly): The list of all referenced PublicIPAddresses.
* **publicIPAddressVersion**: 'IPv4' | 'IPv6' | string: The public IP address version.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the public IP prefix resource.

## PublicIPPrefixSku
### Properties
* **name**: 'Standard' | string: Name of a public IP prefix SKU.
* **tier**: 'Global' | 'Regional' | string: Tier of a public IP prefix SKU.

## QosDefinition
### Properties
* **destinationIpRanges**: [QosIpRange](#qosiprange)[]: Destination IP ranges.
* **destinationPortRanges**: [QosPortRange](#qosportrange)[]: Destination port ranges.
* **markings**: int[]: List of markings to be used in the configuration.
* **protocol**: 'Ah' | 'All' | 'DoNotUse' | 'Esp' | 'Gre' | 'Icmp' | 'Tcp' | 'Udp' | 'Vxlan' | string: RNM supported protocol types.
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

## QueryRequestOptions
### Properties
* **skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.

## QueryRequestOptions
### Properties
* **skipToken**: string: When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.

## QueryResults
### Properties
* **matchingRecordsCount**: int: Number of total records matching the query.
* **signatures**: [SingleQueryResult](#singlequeryresult)[]: Array containing the results of the query

## RadiusServer
### Properties
* **radiusServerAddress**: string (Required): The address of this radius server.
* **radiusServerScore**: int: The initial score assigned to this radius server.
* **radiusServerSecret**: string: The secret used for this radius server.

## RecordSet
### Properties
* **fqdn**: string: Fqdn that resolves to private endpoint ip address.
* **ipAddresses**: string[]: The private ip address of the private endpoint.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the recordset.
* **recordSetName**: string: Recordset name.
* **recordType**: string: Resource record type.
* **ttl**: int: Recordset time to live.

## ReferencedPublicIpAddress
### Properties
* **id**: string: The PublicIPAddress Reference.

## ResourceNavigationLink
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ResourceNavigationLinkFormat](#resourcenavigationlinkformat): Resource navigation link properties format.
* **type**: string (ReadOnly): Resource type.

## ResourceNavigationLinkFormat
### Properties
* **link**: string: Link to the external resource.
* **linkedResourceType**: string: Resource type of the linked resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource navigation link resource.

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

## RetentionPolicyParameters
### Properties
* **days**: int: Number of days to retain flow log records.
* **enabled**: bool: Flag to enable/disable retention.

## Route
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [RoutePropertiesFormat](#routepropertiesformat): Properties of the route.
* **type**: string: The type of the resource.

## RouteFilterPropertiesFormat
### Properties
* **ipv6Peerings**: [ExpressRouteCircuitPeering](#expressroutecircuitpeering)[] (ReadOnly): A collection of references to express route circuit ipv6 peerings.
* **peerings**: [ExpressRouteCircuitPeering](#expressroutecircuitpeering)[] (ReadOnly): A collection of references to express route circuit peerings.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the route filter resource.
* **rules**: [RouteFilterRule](#routefilterrule)[]: Collection of RouteFilterRules contained within a route filter.

## RouteFilterRule
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [RouteFilterRulePropertiesFormat](#routefilterrulepropertiesformat): Properties of the route filter rule.

## RouteFilterRulePropertiesFormat
### Properties
* **access**: 'Allow' | 'Deny' | string (Required): The access type of the rule.
* **communities**: string[] (Required): The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020'].
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the route filter rule resource.
* **routeFilterRuleType**: 'Community' | string (Required): The rule type of the rule.

## RouteMapProperties
### Properties
* **associatedInboundConnections**: string[]: List of connections which have this RoutMap associated for inbound traffic.
* **associatedOutboundConnections**: string[]: List of connections which have this RoutMap associated for outbound traffic.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the RouteMap resource.
* **rules**: [RouteMapRule](#routemaprule)[]: List of RouteMap rules to be applied.

## RouteMapRule
### Properties
* **actions**: [Action](#action)[]: List of actions which will be applied on a match.
* **matchCriteria**: [Criterion](#criterion)[]: List of matching criterion which will be applied to traffic.
* **name**: string: The unique name for the rule.
* **nextStepIfMatched**: 'Continue' | 'Terminate' | 'Unknown' | string: Next step after rule is evaluated. Current supported behaviors are 'Continue'(to next rule) and 'Terminate'.

## RoutePropertiesFormat
### Properties
* **addressPrefix**: string: The destination CIDR to which the route applies.
* **hasBgpOverride**: bool (ReadOnly): A value indicating whether this route overrides overlapping BGP routes regardless of LPM.
* **nextHopIpAddress**: string: The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
* **nextHopType**: 'Internet' | 'None' | 'VirtualAppliance' | 'VirtualNetworkGateway' | 'VnetLocal' | string (Required): The type of Azure hop the packet should be sent to.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the route resource.

## RouteTable
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [RouteTablePropertiesFormat](#routetablepropertiesformat): Properties of the route table.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## RouteTablePropertiesFormat
### Properties
* **disableBgpRoutePropagation**: bool: Whether to disable the routes learned by BGP on that route table. True means disable.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the route table resource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the route table.
* **routes**: [Route](#route)[]: Collection of routes contained within a route table.
* **subnets**: [Subnet](#subnet)[] (ReadOnly): A collection of references to subnets.

## RoutingConfiguration
### Properties
* **associatedRouteTable**: [SubResource](#subresource): The resource id RouteTable associated with this RoutingConfiguration.
* **inboundRouteMap**: [SubResource](#subresource): The resource id of the RouteMap associated with this RoutingConfiguration for inbound learned routes.
* **outboundRouteMap**: [SubResource](#subresource): The resource id of theRouteMap associated with this RoutingConfiguration for outbound advertised routes.
* **propagatedRouteTables**: [PropagatedRouteTable](#propagatedroutetable): The list of RouteTables to advertise the routes to.
* **vnetRoutes**: [VnetRoute](#vnetroute): List of routes that control routing from VirtualHub into a virtual network connection.

## RoutingIntentProperties
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the RoutingIntent resource.
* **routingPolicies**: [RoutingPolicy](#routingpolicy)[]: List of routing policies.

## RoutingPolicy
### Properties
* **destinations**: string[] (Required): List of all destinations which this routing policy is applicable to (for example: Internet, PrivateTraffic).
* **name**: string (Required): The unique name for the routing policy.
* **nextHop**: string (Required): The next hop resource id on which this routing policy is applicable to.

## ScopeConnectionProperties
### Properties
* **connectionState**: 'Conflict' | 'Connected' | 'Pending' | 'Rejected' | 'Revoked' | string (ReadOnly): Connection State
* **description**: string: A description of the scope connection.
* **resourceId**: string: Resource ID.
* **tenantId**: string: Tenant ID.

## SecurityAdminConfigurationPropertiesFormat
### Properties
* **applyOnNetworkIntentPolicyBasedServices**: ('All' | 'AllowRulesOnly' | 'None' | string)[]: Enum list of network intent policy based services.
* **description**: string: A description of the security configuration.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **resourceGuid**: string (ReadOnly): Unique identifier for this resource.

## SecurityPartnerProviderPropertiesFormat
### Properties
* **connectionStatus**: 'Connected' | 'NotConnected' | 'PartiallyConnected' | 'Unknown' | string (ReadOnly): The connection status with the Security Partner Provider.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the Security Partner Provider resource.
* **securityProviderName**: 'Checkpoint' | 'IBoss' | 'ZScaler' | string: The security provider name.
* **virtualHub**: [SubResource](#subresource): The virtualHub to which the Security Partner Provider belongs.

## SecurityRule
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [SecurityRulePropertiesFormat](#securityrulepropertiesformat): Properties of the security rule.
* **type**: string: The type of the resource.

## SecurityRulePropertiesFormat
### Properties
* **access**: 'Allow' | 'Deny' | string (Required): The network traffic is allowed or denied.
* **description**: string: A description for this rule. Restricted to 140 chars.
* **destinationAddressPrefix**: string: The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
* **destinationAddressPrefixes**: string[]: The destination address prefixes. CIDR or destination IP ranges.
* **destinationApplicationSecurityGroups**: [ApplicationSecurityGroup](#applicationsecuritygroup)[]: The application security group specified as destination.
* **destinationPortRange**: string: The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
* **destinationPortRanges**: string[]: The destination port ranges.
* **direction**: 'Inbound' | 'Outbound' | string (Required): The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
* **priority**: int (Required): The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
* **protocol**: '*' | 'Ah' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' | string (Required): Network protocol this rule applies to.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the security rule resource.
* **sourceAddressPrefix**: string: The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
* **sourceAddressPrefixes**: string[]: The CIDR or source IP ranges.
* **sourceApplicationSecurityGroups**: [ApplicationSecurityGroup](#applicationsecuritygroup)[]: The application security group specified as source.
* **sourcePortRange**: string: The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
* **sourcePortRanges**: string[]: The source port ranges.

## ServiceAssociationLink
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ServiceAssociationLinkPropertiesFormat](#serviceassociationlinkpropertiesformat): Resource navigation link properties format.
* **type**: string (ReadOnly): Resource type.

## ServiceAssociationLinkPropertiesFormat
### Properties
* **allowDelete**: bool: If true, the resource can be deleted.
* **link**: string: Link to the external resource.
* **linkedResourceType**: string: Resource type of the linked resource.
* **locations**: string[]: A list of locations.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the service association link resource.

## ServiceDelegationPropertiesFormat
### Properties
* **actions**: string[] (ReadOnly): The actions permitted to the service upon delegation.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the service delegation resource.
* **serviceName**: string: The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers).

## ServiceEndpointPolicy
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **kind**: string (ReadOnly): Kind of service endpoint policy. This is metadata used for the Azure portal experience.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [ServiceEndpointPolicyPropertiesFormat](#serviceendpointpolicypropertiesformat): Properties of the service end point policy.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## ServiceEndpointPolicyDefinition
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ServiceEndpointPolicyDefinitionPropertiesFormat](#serviceendpointpolicydefinitionpropertiesformat): Properties of the service endpoint policy definition.
* **type**: string: The type of the resource.

## ServiceEndpointPolicyDefinitionPropertiesFormat
### Properties
* **description**: string: A description for this rule. Restricted to 140 chars.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the service endpoint policy definition resource.
* **service**: string: Service endpoint name.
* **serviceResources**: string[]: A list of service resources.

## ServiceEndpointPolicyPropertiesFormat
### Properties
* **contextualServiceEndpointPolicies**: string[]: A collection of contextual service endpoint policy.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the service endpoint policy resource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the service endpoint policy resource.
* **serviceAlias**: string: The alias indicating if the policy belongs to a service
* **serviceEndpointPolicyDefinitions**: [ServiceEndpointPolicyDefinition](#serviceendpointpolicydefinition)[]: A collection of service endpoint policy definitions of the service endpoint policy.
* **subnets**: [Subnet](#subnet)[] (ReadOnly): A collection of references to subnets.

## ServiceEndpointPropertiesFormat
### Properties
* **locations**: string[]: A list of locations.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the service endpoint resource.
* **service**: string: The type of the endpoint service.

## SignatureOverridesFilterValuesQuery
### Properties
* **filterName**: string: Describes the name of the column which values will be returned

## SignatureOverridesFilterValuesResponse
### Properties
* **filterValues**: string[]: Describes the possible values

## Signatures
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SignaturesOverridesProperties
### Properties
* **signatures**: [Signatures](#signatures): Dictionary of <string>

## SingleQueryResult
### Properties
* **description**: string: Describes what is the signature enforces
* **destinationPorts**: string[]: Describes the list of destination ports related to this signature
* **direction**: int: Describes in which direction signature is being enforced: 0 - Inbound, 1 - OutBound, 2 - Bidirectional
* **group**: string: Describes the groups the signature belongs to
* **inheritedFromParentPolicy**: bool: Describes if this override is inherited from base policy or not
* **lastUpdated**: string: Describes the last updated time of the signature (provided from 3rd party vendor)
* **mode**: int: The current mode enforced, 0 - Disabled, 1 - Alert, 2 -Deny
* **protocol**: string: Describes the protocol the signatures is being enforced in
* **severity**: int: Describes the severity of signature: 1 - Low, 2 - Medium, 3 - High
* **signatureId**: int: The ID of the signature
* **sourcePorts**: string[]: Describes the list of source ports related to this signature

## Sku
### Properties
* **name**: 'Basic' | 'Standard' | string: The name of this Bastion Host.

## StaticMemberProperties
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the scope assignment resource.
* **region**: string (ReadOnly): Resource region.
* **resourceId**: string: Resource Id.

## StaticRoute
### Properties
* **addressPrefixes**: string[]: List of all address prefixes.
* **name**: string: The name of the StaticRoute that is unique within a VnetRoute.
* **nextHopIpAddress**: string: The ip address of the next hop.

## StaticRoutesConfig
### Properties
* **propagateStaticRoutes**: bool (ReadOnly): Boolean indicating whether static routes on this connection are automatically propagate to route tables which this connection propagates to.
* **vnetLocalRouteOverrideCriteria**: 'Contains' | 'Equal' | string: Parameter determining whether NVA in spoke vnet is bypassed for traffic with destination in spoke.

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
* **applicationGatewayIPConfigurations**: [ApplicationGatewayIPConfiguration](#applicationgatewayipconfiguration)[]: Application gateway IP configurations of virtual network resource.
* **delegations**: [Delegation](#delegation)[]: An array of references to the delegations on the subnet.
* **ipAllocations**: [SubResource](#subresource)[]: Array of IpAllocation which reference this subnet.
* **ipConfigurationProfiles**: [IPConfigurationProfile](#ipconfigurationprofile)[] (ReadOnly): Array of IP configuration profiles which reference this subnet.
* **ipConfigurations**: [IPConfiguration](#ipconfiguration)[] (ReadOnly): An array of references to the network interface IP configurations using subnet.
* **natGateway**: [SubResource](#subresource): Nat gateway associated with this subnet.
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup): The reference to the NetworkSecurityGroup resource.
* **privateEndpointNetworkPolicies**: 'Disabled' | 'Enabled' | string: Enable or Disable apply network policies on private end point in the subnet.
* **privateEndpoints**: [PrivateEndpoint](#privateendpoint)[] (ReadOnly): An array of references to private endpoints.
* **privateLinkServiceNetworkPolicies**: 'Disabled' | 'Enabled' | string: Enable or Disable apply network policies on private link service in the subnet.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the subnet resource.
* **purpose**: string (ReadOnly): A read-only string identifying the intention of use for this subnet based on delegations and other user-defined properties.
* **resourceNavigationLinks**: [ResourceNavigationLink](#resourcenavigationlink)[] (ReadOnly): An array of references to the external resources using subnet.
* **routeTable**: [RouteTable](#routetable): The reference to the RouteTable resource.
* **serviceAssociationLinks**: [ServiceAssociationLink](#serviceassociationlink)[] (ReadOnly): An array of references to services injecting into this subnet.
* **serviceEndpointPolicies**: [ServiceEndpointPolicy](#serviceendpointpolicy)[]: An array of service endpoint policies.
* **serviceEndpoints**: [ServiceEndpointPropertiesFormat](#serviceendpointpropertiesformat)[]: An array of service endpoints.

## SubResource
### Properties
* **id**: string: Resource ID.

## SwapResourceProperties
### Properties
* **slotType**: 'Production' | 'Staging': Specifies slot info on a cloud service

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The type of identity that last modified the resource.
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrafficAnalyticsConfigurationProperties
### Properties
* **enabled**: bool: Flag to enable/disable traffic analytics.
* **trafficAnalyticsInterval**: int: The interval in minutes which would decide how frequently TA service should do flow analytics.
* **workspaceId**: string: The resource guid of the attached workspace.
* **workspaceRegion**: string: The location of the attached workspace.
* **workspaceResourceId**: string: Resource Id of the attached workspace.

## TrafficAnalyticsProperties
### Properties
* **networkWatcherFlowAnalyticsConfiguration**: [TrafficAnalyticsConfigurationProperties](#trafficanalyticsconfigurationproperties): Parameters that define the configuration of traffic analytics.

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

## VirtualApplianceAdditionalNicProperties
### Properties
* **hasPublicIp**: bool: Flag (true or false) for Intent for Public Ip on additional nic
* **name**: string: Name of additional nic

## VirtualApplianceNicProperties
### Properties
* **instanceName**: string (ReadOnly): Instance on which nic is attached.
* **name**: string (ReadOnly): NIC name.
* **privateIpAddress**: string (ReadOnly): Private IP address.
* **publicIpAddress**: string (ReadOnly): Public IP address.

## VirtualApplianceSiteProperties
### Properties
* **addressPrefix**: string: Address Prefix.
* **o365Policy**: [Office365PolicyProperties](#office365policyproperties): Office 365 Policy.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## VirtualApplianceSkuProperties
### Properties
* **bundledScaleUnit**: string: Virtual Appliance Scale Unit.
* **marketPlaceVersion**: string: Virtual Appliance Version.
* **vendor**: string: Virtual Appliance Vendor.

## VirtualHubId
### Properties
* **id**: string: The resource URI for the Virtual Hub where the ExpressRoute gateway is or will be deployed. The Virtual Hub resource and the ExpressRoute gateway resource reside in the same subscription.

## VirtualHubProperties
### Properties
* **addressPrefix**: string: Address-prefix for this VirtualHub.
* **allowBranchToBranchTraffic**: bool: Flag to control transit for VirtualRouter hub.
* **azureFirewall**: [SubResource](#subresource): The azureFirewall associated with this VirtualHub.
* **bgpConnections**: [SubResource](#subresource)[] (ReadOnly): List of references to Bgp Connections.
* **expressRouteGateway**: [SubResource](#subresource): The expressRouteGateway associated with this VirtualHub.
* **hubRoutingPreference**: 'ASPath' | 'ExpressRoute' | 'VpnGateway' | string: The hubRoutingPreference of this VirtualHub.
* **ipConfigurations**: [SubResource](#subresource)[] (ReadOnly): List of references to IpConfigurations.
* **p2SVpnGateway**: [SubResource](#subresource): The P2SVpnGateway associated with this VirtualHub.
* **preferredRoutingGateway**: 'ExpressRoute' | 'None' | 'VpnGateway' | string: The preferred gateway to route on-prem traffic
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the virtual hub resource.
* **routeMaps**: [SubResource](#subresource)[] (ReadOnly): List of references to RouteMaps.
* **routeTable**: [VirtualHubRouteTable](#virtualhubroutetable): The routeTable associated with this virtual hub.
* **routingState**: 'Failed' | 'None' | 'Provisioned' | 'Provisioning' | string (ReadOnly): The routing state.
* **securityPartnerProvider**: [SubResource](#subresource): The securityPartnerProvider associated with this VirtualHub.
* **securityProviderName**: string: The Security Provider name.
* **sku**: string: The sku of this VirtualHub.
* **virtualHubRouteTableV2s**: [VirtualHubRouteTableV2](#virtualhubroutetablev2)[]: List of all virtual hub route table v2s associated with this VirtualHub.
* **virtualRouterAsn**: int {minValue: 0, maxValue: 4294967295}: VirtualRouter ASN.
* **virtualRouterAutoScaleConfiguration**: [VirtualRouterAutoScaleConfiguration](#virtualrouterautoscaleconfiguration): The VirtualHub Router autoscale configuration.
* **virtualRouterIps**: string[]: VirtualRouter IPs.
* **virtualWan**: [SubResource](#subresource): The VirtualWAN to which the VirtualHub belongs.
* **vpnGateway**: [SubResource](#subresource): The VpnGateway associated with this VirtualHub.

## VirtualHubRoute
### Properties
* **addressPrefixes**: string[]: List of all addressPrefixes.
* **nextHopIpAddress**: string: NextHop ip address.

## VirtualHubRouteTable
### Properties
* **routes**: [VirtualHubRoute](#virtualhubroute)[]: List of all routes.

## VirtualHubRouteTableV2
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VirtualHubRouteTableV2Properties](#virtualhubroutetablev2properties): Properties of the virtual hub route table v2.

## VirtualHubRouteTableV2Properties
### Properties
* **attachedConnections**: string[]: List of all connections attached to this route table v2.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the virtual hub route table v2 resource.
* **routes**: [VirtualHubRouteV2](#virtualhubroutev2)[]: List of all routes.

## VirtualHubRouteV2
### Properties
* **destinations**: string[]: List of all destinations.
* **destinationType**: string: The type of destinations.
* **nextHops**: string[]: NextHops ip address.
* **nextHopType**: string: The type of next hops.

## VirtualNetworkBgpCommunities
### Properties
* **regionalCommunity**: string (ReadOnly): The BGP community associated with the region of the virtual network.
* **virtualNetworkCommunity**: string (Required): The BGP community associated with the virtual network.

## VirtualNetworkEncryption
### Properties
* **enabled**: bool (Required): Indicates if encryption is enabled on the virtual network.
* **enforcement**: 'AllowUnencrypted' | 'DropUnencrypted' | string: If the encrypted VNet allows VM that does not support encryption

## VirtualNetworkGateway
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location of type local virtual network gateway.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [VirtualNetworkGatewayPropertiesFormat](#virtualnetworkgatewaypropertiesformat) (Required): Properties of the virtual network gateway.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## VirtualNetworkGatewayConnectionPropertiesFormat
### Properties
* **authorizationKey**: string: The authorizationKey.
* **connectionMode**: 'Default' | 'InitiatorOnly' | 'ResponderOnly' | string: The connection mode for this connection.
* **connectionProtocol**: 'IKEv1' | 'IKEv2' | string: Connection protocol used for this connection.
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' | string (ReadOnly): Virtual Network Gateway connection status.
* **connectionType**: 'ExpressRoute' | 'IPsec' | 'VPNClient' | 'Vnet2Vnet' | string (Required): Gateway connection type.
* **dpdTimeoutSeconds**: int: The dead peer detection timeout of this connection in seconds.
* **egressBytesTransferred**: int (ReadOnly): The egress bytes transferred in this connection.
* **egressNatRules**: [SubResource](#subresource)[]: List of egress NatRules.
* **enableBgp**: bool: EnableBgp flag.
* **enablePrivateLinkFastPath**: bool: Bypass the ExpressRoute gateway when accessing private-links. ExpressRoute FastPath (expressRouteGatewayBypass) must be enabled.
* **expressRouteGatewayBypass**: bool: Bypass ExpressRoute Gateway for data forwarding.
* **gatewayCustomBgpIpAddresses**: [GatewayCustomBgpIpAddressIpConfiguration](#gatewaycustombgpipaddressipconfiguration)[]: GatewayCustomBgpIpAddresses to be used for virtual network gateway Connection.
* **ingressBytesTransferred**: int (ReadOnly): The ingress bytes transferred in this connection.
* **ingressNatRules**: [SubResource](#subresource)[]: List of ingress NatRules.
* **ipsecPolicies**: [IpsecPolicy](#ipsecpolicy)[]: The IPSec Policies to be considered by this connection.
* **localNetworkGateway2**: [LocalNetworkGateway](#localnetworkgateway): The reference to local network gateway resource.
* **peer**: [SubResource](#subresource): The reference to peerings resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the virtual network gateway connection resource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the virtual network gateway connection resource.
* **routingWeight**: int: The routing weight.
* **sharedKey**: string: The IPSec shared key.
* **trafficSelectorPolicies**: [TrafficSelectorPolicy](#trafficselectorpolicy)[]: The Traffic Selector Policies to be considered by this connection.
* **tunnelConnectionStatus**: [TunnelConnectionHealth](#tunnelconnectionhealth)[] (ReadOnly): Collection of all tunnels' connection health status.
* **useLocalAzureIpAddress**: bool: Use private local Azure IP for the connection.
* **usePolicyBasedTrafficSelectors**: bool: Enable policy-based traffic selectors.
* **virtualNetworkGateway1**: [VirtualNetworkGateway](#virtualnetworkgateway) (Required): The reference to virtual network gateway resource.
* **virtualNetworkGateway2**: [VirtualNetworkGateway](#virtualnetworkgateway): The reference to virtual network gateway resource.

## VirtualNetworkGatewayIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VirtualNetworkGatewayIPConfigurationPropertiesFormat](#virtualnetworkgatewayipconfigurationpropertiesformat): Properties of the virtual network gateway ip configuration.

## VirtualNetworkGatewayIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string (ReadOnly): Private IP Address for this gateway.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: The private IP address allocation method.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the virtual network gateway IP configuration resource.
* **publicIPAddress**: [SubResource](#subresource): The reference to the public IP resource.
* **subnet**: [SubResource](#subresource): The reference to the subnet resource.

## VirtualNetworkGatewayNatRule
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VirtualNetworkGatewayNatRuleProperties](#virtualnetworkgatewaynatruleproperties): Properties of the Virtual Network Gateway NAT rule.
* **type**: string (ReadOnly): Resource type.

## VirtualNetworkGatewayNatRuleProperties
### Properties
* **externalMappings**: [VpnNatRuleMapping](#vpnnatrulemapping)[]: The private IP address external mapping for NAT.
* **internalMappings**: [VpnNatRuleMapping](#vpnnatrulemapping)[]: The private IP address internal mapping for NAT.
* **ipConfigurationId**: string: The IP Configuration ID this NAT rule applies to.
* **mode**: 'EgressSnat' | 'IngressSnat' | string: The Source NAT direction of a VPN NAT.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the NAT Rule resource.
* **type**: 'Dynamic' | 'Static' | string: The type of NAT rule for VPN NAT.

## VirtualNetworkGatewayPolicyGroup
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VirtualNetworkGatewayPolicyGroupProperties](#virtualnetworkgatewaypolicygroupproperties): Properties of tVirtualNetworkGatewayPolicyGroup.

## VirtualNetworkGatewayPolicyGroupMember
### Properties
* **attributeType**: 'AADGroupId' | 'CertificateGroupId' | 'RadiusAzureGroupId' | string: The Vpn Policy member attribute type.
* **attributeValue**: string: The value of Attribute used for this VirtualNetworkGatewayPolicyGroupMember.
* **name**: string: Name of the VirtualNetworkGatewayPolicyGroupMember.

## VirtualNetworkGatewayPolicyGroupProperties
### Properties
* **isDefault**: bool (Required): Shows if this is a Default VirtualNetworkGatewayPolicyGroup or not.
* **policyMembers**: [VirtualNetworkGatewayPolicyGroupMember](#virtualnetworkgatewaypolicygroupmember)[] (Required): Multiple PolicyMembers for VirtualNetworkGatewayPolicyGroup.
* **priority**: int (Required): Priority for VirtualNetworkGatewayPolicyGroup.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the VirtualNetworkGatewayPolicyGroup resource.
* **vngClientConnectionConfigurations**: [SubResource](#subresource)[] (ReadOnly): List of references to vngClientConnectionConfigurations.

## VirtualNetworkGatewayPropertiesFormat
### Properties
* **activeActive**: bool: ActiveActive flag.
* **adminState**: 'Disabled' | 'Enabled' | string: Property to indicate if the Express Route Gateway serves traffic when there are multiple Express Route Gateways in the vnet
* **allowRemoteVnetTraffic**: bool: Configure this gateway to accept traffic from other Azure Virtual Networks. This configuration does not support connectivity to Azure Virtual WAN.
* **allowVirtualWanTraffic**: bool: Configures this gateway to accept traffic from remote Virtual WAN networks.
* **bgpSettings**: [BgpSettings](#bgpsettings): Virtual network gateway's BGP speaker settings.
* **customRoutes**: [AddressSpace](#addressspace): The reference to the address space resource which represents the custom routes address space specified by the customer for virtual network gateway and VpnClient.
* **disableIPSecReplayProtection**: bool: disableIPSecReplayProtection flag.
* **enableBgp**: bool: Whether BGP is enabled for this virtual network gateway or not.
* **enableBgpRouteTranslationForNat**: bool: EnableBgpRouteTranslationForNat flag.
* **enableDnsForwarding**: bool: Whether dns forwarding is enabled or not.
* **enablePrivateIpAddress**: bool: Whether private IP needs to be enabled on this gateway for connections or not.
* **gatewayDefaultSite**: [SubResource](#subresource): The reference to the LocalNetworkGateway resource which represents local network site having default routes. Assign Null value in case of removing existing default site setting.
* **gatewayType**: 'ExpressRoute' | 'LocalGateway' | 'Vpn' | string: The type of this virtual network gateway.
* **inboundDnsForwardingEndpoint**: string (ReadOnly): The IP address allocated by the gateway to which dns requests can be sent.
* **ipConfigurations**: [VirtualNetworkGatewayIPConfiguration](#virtualnetworkgatewayipconfiguration)[]: IP configurations for virtual network gateway.
* **natRules**: [VirtualNetworkGatewayNatRule](#virtualnetworkgatewaynatrule)[]: NatRules for virtual network gateway.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the virtual network gateway resource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the virtual network gateway resource.
* **sku**: [VirtualNetworkGatewaySku](#virtualnetworkgatewaysku): The reference to the VirtualNetworkGatewaySku resource which represents the SKU selected for Virtual network gateway.
* **virtualNetworkGatewayPolicyGroups**: [VirtualNetworkGatewayPolicyGroup](#virtualnetworkgatewaypolicygroup)[]: The reference to the VirtualNetworkGatewayPolicyGroup resource which represents the available VirtualNetworkGatewayPolicyGroup for the gateway.
* **vNetExtendedLocationResourceId**: string: Customer vnet resource id. VirtualNetworkGateway of type local gateway is associated with the customer vnet.
* **vpnClientConfiguration**: [VpnClientConfiguration](#vpnclientconfiguration): The reference to the VpnClientConfiguration resource which represents the P2S VpnClient configurations.
* **vpnGatewayGeneration**: 'Generation1' | 'Generation2' | 'None' | string: The generation for this VirtualNetworkGateway. Must be None if gatewayType is not VPN.
* **vpnType**: 'PolicyBased' | 'RouteBased' | string: The type of this virtual network gateway.

## VirtualNetworkGatewaySku
### Properties
* **capacity**: int (ReadOnly): The capacity.
* **name**: 'Basic' | 'ErGw1AZ' | 'ErGw2AZ' | 'ErGw3AZ' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | 'VpnGw1' | 'VpnGw1AZ' | 'VpnGw2' | 'VpnGw2AZ' | 'VpnGw3' | 'VpnGw3AZ' | 'VpnGw4' | 'VpnGw4AZ' | 'VpnGw5' | 'VpnGw5AZ' | string: Gateway SKU name.
* **tier**: 'Basic' | 'ErGw1AZ' | 'ErGw2AZ' | 'ErGw3AZ' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | 'VpnGw1' | 'VpnGw1AZ' | 'VpnGw2' | 'VpnGw2AZ' | 'VpnGw3' | 'VpnGw3AZ' | 'VpnGw4' | 'VpnGw4AZ' | 'VpnGw5' | 'VpnGw5AZ' | string: Gateway SKU tier.

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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the virtual network peering resource.
* **remoteAddressSpace**: [AddressSpace](#addressspace): The reference to the address space peered with the remote virtual network.
* **remoteBgpCommunities**: [VirtualNetworkBgpCommunities](#virtualnetworkbgpcommunities): The reference to the remote virtual network's Bgp Communities.
* **remoteVirtualNetwork**: [SubResource](#subresource): The reference to the remote virtual network. The remote virtual network can be in the same or different region (preview). See here to register for the preview and learn more (https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-create-peering).
* **remoteVirtualNetworkAddressSpace**: [AddressSpace](#addressspace): The reference to the current address space of the remote virtual network.
* **remoteVirtualNetworkEncryption**: [VirtualNetworkEncryption](#virtualnetworkencryption) (ReadOnly): The reference to the remote virtual network's encryption
* **resourceGuid**: string (ReadOnly): The resourceGuid property of the Virtual Network peering resource.
* **useRemoteGateways**: bool: If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.

## VirtualNetworkPropertiesFormat
### Properties
* **addressSpace**: [AddressSpace](#addressspace): The AddressSpace that contains an array of IP address ranges that can be used by subnets.
* **bgpCommunities**: [VirtualNetworkBgpCommunities](#virtualnetworkbgpcommunities): Bgp Communities sent over ExpressRoute with each route corresponding to a prefix in this VNET.
* **ddosProtectionPlan**: [SubResource](#subresource): The DDoS protection plan associated with the virtual network.
* **dhcpOptions**: [DhcpOptions](#dhcpoptions): The dhcpOptions that contains an array of DNS servers available to VMs deployed in the virtual network.
* **enableDdosProtection**: bool: Indicates if DDoS protection is enabled for all the protected resources in the virtual network. It requires a DDoS protection plan associated with the resource.
* **enableVmProtection**: bool: Indicates if VM protection is enabled for all the subnets in the virtual network.
* **encryption**: [VirtualNetworkEncryption](#virtualnetworkencryption): Indicates if encryption is enabled on virtual network and if VM without encryption is allowed in encrypted VNet.
* **flowLogs**: [FlowLog](#flowlog)[] (ReadOnly): A collection of references to flow log resources.
* **flowTimeoutInMinutes**: int: The FlowTimeout value (in minutes) for the Virtual Network
* **ipAllocations**: [SubResource](#subresource)[]: Array of IpAllocation which reference this VNET.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the virtual network resource.
* **resourceGuid**: string (ReadOnly): The resourceGuid property of the Virtual Network resource.
* **subnets**: [Subnet](#subnet)[]: A list of subnets in a Virtual Network.
* **virtualNetworkPeerings**: [VirtualNetworkPeering](#virtualnetworkpeering)[]: A list of peerings in a Virtual Network.

## VirtualNetworkTap
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [VirtualNetworkTapPropertiesFormat](#virtualnetworktappropertiesformat): Virtual Network Tap Properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## VirtualNetworkTapPropertiesFormat
### Properties
* **destinationLoadBalancerFrontEndIPConfiguration**: [FrontendIPConfiguration](#frontendipconfiguration): The reference to the private IP address on the internal Load Balancer that will receive the tap.
* **destinationNetworkInterfaceIPConfiguration**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration): The reference to the private IP Address of the collector nic that will receive the tap.
* **destinationPort**: int: The VXLAN destination port that will receive the tapped traffic.
* **networkInterfaceTapConfigurations**: [NetworkInterfaceTapConfiguration](#networkinterfacetapconfiguration)[] (ReadOnly): Specifies the list of resource IDs for the network interface IP configuration that needs to be tapped.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the virtual network tap resource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the virtual network tap resource.

## VirtualRouterAutoScaleConfiguration
### Properties
* **minCapacity**: int {minValue: 0}: The minimum number of scale units for VirtualHub Router.

## VirtualRouterPeeringProperties
### Properties
* **peerAsn**: int {minValue: 0, maxValue: 4294967295}: Peer ASN.
* **peerIp**: string: Peer IP.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## VirtualRouterPropertiesFormat
### Properties
* **hostedGateway**: [SubResource](#subresource): The Gateway on which VirtualRouter is hosted.
* **hostedSubnet**: [SubResource](#subresource): The Subnet on which VirtualRouter is hosted.
* **peerings**: [SubResource](#subresource)[] (ReadOnly): List of references to VirtualRouterPeerings.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **virtualRouterAsn**: int {minValue: 0, maxValue: 4294967295}: VirtualRouter ASN.
* **virtualRouterIps**: string[]: VirtualRouter IPs.

## VirtualWanProperties
### Properties
* **allowBranchToBranchTraffic**: bool: True if branch to branch traffic is allowed.
* **allowVnetToVnetTraffic**: bool: True if Vnet to Vnet traffic is allowed.
* **disableVpnEncryption**: bool: Vpn encryption to be disabled or not.
* **office365LocalBreakoutCategory**: 'All' | 'None' | 'Optimize' | 'OptimizeAndAllow' | string (ReadOnly): The office local breakout category.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the virtual WAN resource.
* **type**: string: The type of the VirtualWAN.
* **virtualHubs**: [SubResource](#subresource)[] (ReadOnly): List of VirtualHubs in the VirtualWAN.
* **vpnSites**: [SubResource](#subresource)[] (ReadOnly): List of VpnSites in the VirtualWAN.

## VnetRoute
### Properties
* **bgpConnections**: [SubResource](#subresource)[] (ReadOnly): The list of references to HubBgpConnection objects.
* **staticRoutes**: [StaticRoute](#staticroute)[]: List of all Static Routes.
* **staticRoutesConfig**: [StaticRoutesConfig](#staticroutesconfig): Configuration for static routes on this HubVnetConnection.

## VngClientConnectionConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VngClientConnectionConfigurationProperties](#vngclientconnectionconfigurationproperties): Properties of the vpn client root certificate.

## VngClientConnectionConfigurationProperties
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the VngClientConnectionConfiguration resource.
* **virtualNetworkGatewayPolicyGroups**: [SubResource](#subresource)[] (Required): List of references to virtualNetworkGatewayPolicyGroups
* **vpnClientAddressPool**: [AddressSpace](#addressspace) (Required): The reference to the address space resource which represents Address space for P2S VpnClient.

## VpnClientConfiguration
### Properties
* **aadAudience**: string: The AADAudience property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication.
* **aadIssuer**: string: The AADIssuer property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication.
* **aadTenant**: string: The AADTenant property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication.
* **radiusServerAddress**: string: The radius server address property of the VirtualNetworkGateway resource for vpn client connection.
* **radiusServers**: [RadiusServer](#radiusserver)[]: The radiusServers property for multiple radius server configuration.
* **radiusServerSecret**: string: The radius secret property of the VirtualNetworkGateway resource for vpn client connection.
* **vngClientConnectionConfigurations**: [VngClientConnectionConfiguration](#vngclientconnectionconfiguration)[]: per ip address pool connection policy for virtual network gateway P2S client.
* **vpnAuthenticationTypes**: ('AAD' | 'Certificate' | 'Radius' | string)[]: VPN authentication types for the virtual network gateway..
* **vpnClientAddressPool**: [AddressSpace](#addressspace): The reference to the address space resource which represents Address space for P2S VpnClient.
* **vpnClientIpsecPolicies**: [IpsecPolicy](#ipsecpolicy)[]: VpnClientIpsecPolicies for virtual network gateway P2S client.
* **vpnClientProtocols**: ('IkeV2' | 'OpenVPN' | 'SSTP' | string)[]: VpnClientProtocols for Virtual network gateway.
* **vpnClientRevokedCertificates**: [VpnClientRevokedCertificate](#vpnclientrevokedcertificate)[]: VpnClientRevokedCertificate for Virtual network gateway.
* **vpnClientRootCertificates**: [VpnClientRootCertificate](#vpnclientrootcertificate)[]: VpnClientRootCertificate for virtual network gateway.

## VpnClientConnectionHealth
### Properties
* **allocatedIpAddresses**: string[]: List of allocated ip addresses to the connected p2s vpn clients.
* **totalEgressBytesTransferred**: int (ReadOnly): Total of the Egress Bytes Transferred in this connection.
* **totalIngressBytesTransferred**: int (ReadOnly): Total of the Ingress Bytes Transferred in this P2S Vpn connection.
* **vpnClientConnectionsCount**: int: The total of p2s vpn clients connected at this time to this P2SVpnGateway.

## VpnClientRevokedCertificate
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VpnClientRevokedCertificatePropertiesFormat](#vpnclientrevokedcertificatepropertiesformat): Properties of the vpn client revoked certificate.

## VpnClientRevokedCertificatePropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the VPN client revoked certificate resource.
* **thumbprint**: string: The revoked VPN client certificate thumbprint.

## VpnClientRootCertificate
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VpnClientRootCertificatePropertiesFormat](#vpnclientrootcertificatepropertiesformat) (Required): Properties of the vpn client root certificate.

## VpnClientRootCertificatePropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the VPN client root certificate resource.
* **publicCertData**: string (Required): The certificate public data.

## VpnConnection
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VpnConnectionProperties](#vpnconnectionproperties): Properties of the VPN connection.

## VpnConnectionProperties
### Properties
* **connectionBandwidth**: int: Expected bandwidth in MBPS.
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' | string (ReadOnly): The connection status.
* **dpdTimeoutSeconds**: int: DPD timeout in seconds for vpn connection.
* **egressBytesTransferred**: int (ReadOnly): Egress bytes transferred.
* **enableBgp**: bool: EnableBgp flag.
* **enableInternetSecurity**: bool: Enable internet security.
* **enableRateLimiting**: bool: EnableBgp flag.
* **ingressBytesTransferred**: int (ReadOnly): Ingress bytes transferred.
* **ipsecPolicies**: [IpsecPolicy](#ipsecpolicy)[]: The IPSec Policies to be considered by this connection.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the VPN connection resource.
* **remoteVpnSite**: [SubResource](#subresource): Id of the connected vpn site.
* **routingConfiguration**: [RoutingConfiguration](#routingconfiguration): The Routing Configuration indicating the associated and propagated route tables on this connection.
* **routingWeight**: int: Routing weight for vpn connection.
* **sharedKey**: string: SharedKey for the vpn connection.
* **trafficSelectorPolicies**: [TrafficSelectorPolicy](#trafficselectorpolicy)[]: The Traffic Selector Policies to be considered by this connection.
* **useLocalAzureIpAddress**: bool: Use local azure ip to initiate connection.
* **usePolicyBasedTrafficSelectors**: bool: Enable policy-based traffic selectors.
* **vpnConnectionProtocolType**: 'IKEv1' | 'IKEv2' | string: Connection protocol used for this connection.
* **vpnLinkConnections**: [VpnSiteLinkConnection](#vpnsitelinkconnection)[]: List of all vpn site link connections to the gateway.

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
* **properties**: [VpnGatewayNatRuleProperties](#vpngatewaynatruleproperties): Properties of the VpnGateway NAT rule.
* **type**: string (ReadOnly): Resource type.

## VpnGatewayNatRuleProperties
### Properties
* **egressVpnSiteLinkConnections**: [SubResource](#subresource)[] (ReadOnly): List of egress VpnSiteLinkConnections.
* **externalMappings**: [VpnNatRuleMapping](#vpnnatrulemapping)[]: The private IP address external mapping for NAT.
* **ingressVpnSiteLinkConnections**: [SubResource](#subresource)[] (ReadOnly): List of ingress VpnSiteLinkConnections.
* **internalMappings**: [VpnNatRuleMapping](#vpnnatrulemapping)[]: The private IP address internal mapping for NAT.
* **ipConfigurationId**: string: The IP Configuration ID this NAT rule applies to.
* **mode**: 'EgressSnat' | 'IngressSnat' | string: The Source NAT direction of a VPN NAT.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the NAT Rule resource.
* **type**: 'Dynamic' | 'Static' | string: The type of NAT rule for VPN NAT.

## VpnGatewayProperties
### Properties
* **bgpSettings**: [BgpSettings](#bgpsettings): Local network gateway's BGP speaker settings.
* **connections**: [VpnConnection](#vpnconnection)[]: List of all vpn connections to the gateway.
* **enableBgpRouteTranslationForNat**: bool: Enable BGP routes translation for NAT on this VpnGateway.
* **ipConfigurations**: [VpnGatewayIpConfiguration](#vpngatewayipconfiguration)[] (ReadOnly): List of all IPs configured on the gateway.
* **isRoutingPreferenceInternet**: bool: Enable Routing Preference property for the Public IP Interface of the VpnGateway.
* **natRules**: [VpnGatewayNatRule](#vpngatewaynatrule)[]: List of all the nat Rules associated with the gateway.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the VPN gateway resource.
* **virtualHub**: [SubResource](#subresource): The VirtualHub to which the gateway belongs.
* **vpnGatewayScaleUnit**: int: The scale unit for this vpn gateway.

## VpnLinkBgpSettings
### Properties
* **asn**: int: The BGP speaker's ASN.
* **bgpPeeringAddress**: string: The BGP peering address and BGP identifier of this BGP speaker.

## VpnLinkProviderProperties
### Properties
* **linkProviderName**: string: Name of the link provider.
* **linkSpeedInMbps**: int: Link speed.

## VpnNatRuleMapping
### Properties
* **addressSpace**: string: Address space for Vpn NatRule mapping.
* **portRange**: string: Port range for Vpn NatRule mapping.

## VpnServerConfigRadiusClientRootCertificate
### Properties
* **name**: string: The certificate name.
* **thumbprint**: string: The Radius client root certificate thumbprint.

## VpnServerConfigRadiusServerRootCertificate
### Properties
* **name**: string: The certificate name.
* **publicCertData**: string: The certificate public data.

## VpnServerConfigurationPolicyGroup
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VpnServerConfigurationPolicyGroupProperties](#vpnserverconfigurationpolicygroupproperties): Properties of the VpnServerConfigurationPolicyGroup.
* **type**: string (ReadOnly): Resource type.

## VpnServerConfigurationPolicyGroupMember
### Properties
* **attributeType**: 'AADGroupId' | 'CertificateGroupId' | 'RadiusAzureGroupId' | string: The Vpn Policy member attribute type.
* **attributeValue**: string: The value of Attribute used for this VpnServerConfigurationPolicyGroupMember.
* **name**: string: Name of the VpnServerConfigurationPolicyGroupMember.

## VpnServerConfigurationPolicyGroupProperties
### Properties
* **isDefault**: bool: Shows if this is a Default VpnServerConfigurationPolicyGroup or not.
* **p2SConnectionConfigurations**: [SubResource](#subresource)[] (ReadOnly): List of references to P2SConnectionConfigurations.
* **policyMembers**: [VpnServerConfigurationPolicyGroupMember](#vpnserverconfigurationpolicygroupmember)[]: Multiple PolicyMembers for VpnServerConfigurationPolicyGroup.
* **priority**: int: Priority for VpnServerConfigurationPolicyGroup.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the VpnServerConfigurationPolicyGroup resource.

## VpnServerConfigurationProperties
### Properties
* **aadAuthenticationParameters**: [AadAuthenticationParameters](#aadauthenticationparameters): The set of aad vpn authentication parameters.
* **configurationPolicyGroups**: [VpnServerConfigurationPolicyGroup](#vpnserverconfigurationpolicygroup)[]: List of all VpnServerConfigurationPolicyGroups.
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **name**: string: The name of the VpnServerConfiguration that is unique within a resource group.
* **p2SVpnGateways**: [P2SVpnGateway](#p2svpngateway)[] (ReadOnly): List of references to P2SVpnGateways.
* **provisioningState**: string (ReadOnly): The provisioning state of the VpnServerConfiguration resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **radiusClientRootCertificates**: [VpnServerConfigRadiusClientRootCertificate](#vpnserverconfigradiusclientrootcertificate)[]: Radius client root certificate of VpnServerConfiguration.
* **radiusServerAddress**: string: The radius server address property of the VpnServerConfiguration resource for point to site client connection.
* **radiusServerRootCertificates**: [VpnServerConfigRadiusServerRootCertificate](#vpnserverconfigradiusserverrootcertificate)[]: Radius Server root certificate of VpnServerConfiguration.
* **radiusServers**: [RadiusServer](#radiusserver)[]: Multiple Radius Server configuration for VpnServerConfiguration.
* **radiusServerSecret**: string: The radius secret property of the VpnServerConfiguration resource for point to site client connection.
* **vpnAuthenticationTypes**: ('AAD' | 'Certificate' | 'Radius' | string)[]: VPN authentication types for the VpnServerConfiguration.
* **vpnClientIpsecPolicies**: [IpsecPolicy](#ipsecpolicy)[]: VpnClientIpsecPolicies for VpnServerConfiguration.
* **vpnClientRevokedCertificates**: [VpnServerConfigVpnClientRevokedCertificate](#vpnserverconfigvpnclientrevokedcertificate)[]: VPN client revoked certificate of VpnServerConfiguration.
* **vpnClientRootCertificates**: [VpnServerConfigVpnClientRootCertificate](#vpnserverconfigvpnclientrootcertificate)[]: VPN client root certificate of VpnServerConfiguration.
* **vpnProtocols**: ('IkeV2' | 'OpenVPN' | string)[]: VPN protocols for the VpnServerConfiguration.

## VpnServerConfigVpnClientRevokedCertificate
### Properties
* **name**: string: The certificate name.
* **thumbprint**: string: The revoked VPN client certificate thumbprint.

## VpnServerConfigVpnClientRootCertificate
### Properties
* **name**: string: The certificate name.
* **publicCertData**: string: The certificate public data.

## VpnSiteLink
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VpnSiteLinkProperties](#vpnsitelinkproperties): Properties of the VPN site link.
* **type**: string (ReadOnly): Resource type.

## VpnSiteLinkConnection
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VpnSiteLinkConnectionProperties](#vpnsitelinkconnectionproperties): Properties of the VPN site link connection.
* **type**: string (ReadOnly): Resource type.

## VpnSiteLinkConnectionProperties
### Properties
* **connectionBandwidth**: int: Expected bandwidth in MBPS.
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' | string (ReadOnly): The connection status.
* **egressBytesTransferred**: int (ReadOnly): Egress bytes transferred.
* **egressNatRules**: [SubResource](#subresource)[]: List of egress NatRules.
* **enableBgp**: bool: EnableBgp flag.
* **enableRateLimiting**: bool: EnableBgp flag.
* **ingressBytesTransferred**: int (ReadOnly): Ingress bytes transferred.
* **ingressNatRules**: [SubResource](#subresource)[]: List of ingress NatRules.
* **ipsecPolicies**: [IpsecPolicy](#ipsecpolicy)[]: The IPSec Policies to be considered by this connection.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the VPN site link connection resource.
* **routingWeight**: int: Routing weight for vpn connection.
* **sharedKey**: string: SharedKey for the vpn connection.
* **useLocalAzureIpAddress**: bool: Use local azure ip to initiate connection.
* **usePolicyBasedTrafficSelectors**: bool: Enable policy-based traffic selectors.
* **vpnConnectionProtocolType**: 'IKEv1' | 'IKEv2' | string: Connection protocol used for this connection.
* **vpnGatewayCustomBgpAddresses**: [GatewayCustomBgpIpAddressIpConfiguration](#gatewaycustombgpipaddressipconfiguration)[]: vpnGatewayCustomBgpAddresses used by this connection.
* **vpnLinkConnectionMode**: 'Default' | 'InitiatorOnly' | 'ResponderOnly' | string: Vpn link connection mode.
* **vpnSiteLink**: [SubResource](#subresource): Id of the connected vpn site link.

## VpnSiteLinkProperties
### Properties
* **bgpProperties**: [VpnLinkBgpSettings](#vpnlinkbgpsettings): The set of bgp properties.
* **fqdn**: string: FQDN of vpn-site-link.
* **ipAddress**: string: The ip-address for the vpn-site-link.
* **linkProperties**: [VpnLinkProviderProperties](#vpnlinkproviderproperties): The link provider properties.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the VPN site link resource.

## VpnSiteProperties
### Properties
* **addressSpace**: [AddressSpace](#addressspace): The AddressSpace that contains an array of IP address ranges.
* **bgpProperties**: [BgpSettings](#bgpsettings): The set of bgp properties.
* **deviceProperties**: [DeviceProperties](#deviceproperties): The device properties.
* **ipAddress**: string: The ip-address for the vpn-site.
* **isSecuritySite**: bool: IsSecuritySite flag.
* **o365Policy**: [O365PolicyProperties](#o365policyproperties): Office365 Policy.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the VPN site resource.
* **siteKey**: string: The key for vpn-site that can be used for connections.
* **virtualWan**: [SubResource](#subresource): The VirtualWAN to which the vpnSite belongs.
* **vpnSiteLinks**: [VpnSiteLink](#vpnsitelink)[]: List of all vpn site links.

## WebApplicationFirewallCustomRule
### Properties
* **action**: 'Allow' | 'Block' | 'Log' | string (Required): Type of Actions.
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **groupByUserSession**: [GroupByUserSession](#groupbyusersession)[]: List of user session identifier group by clauses.
* **matchConditions**: [MatchCondition](#matchcondition)[] (Required): List of match conditions.
* **name**: string {maxLength: 128}: The name of the resource that is unique within a policy. This name can be used to access the resource.
* **priority**: int (Required): Priority of the rule. Rules with a lower value will be evaluated before rules with a higher value.
* **rateLimitDuration**: 'FiveMins' | 'OneMin' | string: Duration over which Rate Limit policy will be applied. Applies only when ruleType is RateLimitRule.
* **rateLimitThreshold**: int: Rate Limit threshold to apply in case ruleType is RateLimitRule. Must be greater than or equal to 1
* **ruleType**: 'Invalid' | 'MatchRule' | 'RateLimitRule' | string (Required): The rule type.
* **state**: 'Disabled' | 'Enabled' | string: Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified.

## WebApplicationFirewallPolicyPropertiesFormat
### Properties
* **applicationGateways**: [ApplicationGateway](#applicationgateway)[] (ReadOnly): A collection of references to application gateways.
* **customRules**: [WebApplicationFirewallCustomRule](#webapplicationfirewallcustomrule)[]: The custom rules inside the policy.
* **httpListeners**: [SubResource](#subresource)[] (ReadOnly): A collection of references to application gateway http listeners.
* **managedRules**: [ManagedRulesDefinition](#managedrulesdefinition) (Required): Describes the managedRules structure.
* **pathBasedRules**: [SubResource](#subresource)[] (ReadOnly): A collection of references to application gateway path rules.
* **policySettings**: [PolicySettings](#policysettings): The PolicySettings for policy.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the web application firewall policy resource.
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | string (ReadOnly): Resource status of the policy.

## WebApplicationFirewallScrubbingRules
### Properties
* **matchVariable**: 'RequestArgNames' | 'RequestCookieNames' | 'RequestHeaderNames' | 'RequestIPAddress' | 'RequestJSONArgNames' | 'RequestPostArgNames' | string (Required): The variable to be scrubbed from the logs.
* **selector**: string: When matchVariable is a collection, operator used to specify which elements in the collection this rule applies to.
* **selectorMatchOperator**: 'Equals' | 'EqualsAny' | string (Required): When matchVariable is a collection, operate on the selector to specify which elements in the collection this rule applies to.
* **state**: 'Disabled' | 'Enabled' | string: Defines the state of log scrubbing rule. Default value is Enabled.

