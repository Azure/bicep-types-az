# Microsoft.Network @ 2015-05-01-preview

## Microsoft.Network/applicationGateways
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationGatewayPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/applicationGateways' (ReadOnly, DeployTimeConstant)

## ApplicationGatewayPropertiesFormat
### Properties
* **backendAddressPools**: ApplicationGatewayBackendAddressPool[]
* **backendHttpSettingsCollection**: ApplicationGatewayBackendHttpSettings[]
* **frontendIPConfigurations**: ApplicationGatewayFrontendIPConfiguration[]
* **frontendPorts**: ApplicationGatewayFrontendPort[]
* **gatewayIPConfigurations**: ApplicationGatewayIPConfiguration[]
* **httpListeners**: ApplicationGatewayHttpListener[]
* **operationalState**: 'Running' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **provisioningState**: string
* **requestRoutingRules**: ApplicationGatewayRequestRoutingRule[]
* **resourceGuid**: string
* **sku**: ApplicationGatewaySku
* **sslCertificates**: ApplicationGatewaySslCertificate[]

## ApplicationGatewayBackendAddressPool
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayBackendAddressPoolPropertiesFormat

## ApplicationGatewayBackendAddressPoolPropertiesFormat
### Properties
* **backendAddresses**: ApplicationGatewayBackendAddress[]
* **backendIPConfigurations**: SubResource[]
* **provisioningState**: string

## ApplicationGatewayBackendAddress
### Properties
* **fqdn**: string
* **ipAddress**: string

## SubResource
### Properties
* **id**: string

## ApplicationGatewayBackendHttpSettings
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayBackendHttpSettingsPropertiesFormat

## ApplicationGatewayBackendHttpSettingsPropertiesFormat
### Properties
* **cookieBasedAffinity**: 'Disabled' | 'Enabled'
* **port**: int
* **protocol**: 'Http' | 'Https'
* **provisioningState**: string

## ApplicationGatewayFrontendIPConfiguration
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayFrontendIPConfigurationPropertiesFormat

## ApplicationGatewayFrontendIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: string
* **publicIPAddress**: SubResource
* **subnet**: SubResource

## ApplicationGatewayFrontendPort
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayFrontendPortPropertiesFormat

## ApplicationGatewayFrontendPortPropertiesFormat
### Properties
* **port**: int
* **provisioningState**: string

## ApplicationGatewayIPConfiguration
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayIPConfigurationPropertiesFormat

## ApplicationGatewayIPConfigurationPropertiesFormat
### Properties
* **provisioningState**: string
* **subnet**: SubResource

## ApplicationGatewayHttpListener
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayHttpListenerPropertiesFormat

## ApplicationGatewayHttpListenerPropertiesFormat
### Properties
* **frontendIPConfiguration**: SubResource
* **frontendPort**: SubResource
* **protocol**: 'Http' | 'Https'
* **provisioningState**: string
* **sslCertificate**: SubResource

## ApplicationGatewayRequestRoutingRule
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayRequestRoutingRulePropertiesFormat

## ApplicationGatewayRequestRoutingRulePropertiesFormat
### Properties
* **backendAddressPool**: SubResource
* **backendHttpSettings**: SubResource
* **httpListener**: SubResource
* **provisioningState**: string
* **ruleType**: 'Basic'

## ApplicationGatewaySku
### Properties
* **capacity**: int
* **name**: 'Standard_Large' | 'Standard_Medium' | 'Standard_Small'
* **tier**: 'Standard'

## ApplicationGatewaySslCertificate
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ApplicationGatewaySslCertificatePropertiesFormat

## ApplicationGatewaySslCertificatePropertiesFormat
### Properties
* **data**: string
* **password**: string
* **provisioningState**: string
* **publicCertData**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/connections/sharedkey
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Network/connections/sharedkey' (ReadOnly, DeployTimeConstant)
* **value**: string

## Microsoft.Network/connections
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualNetworkGatewayConnectionPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/connections' (ReadOnly, DeployTimeConstant)

## VirtualNetworkGatewayConnectionPropertiesFormat
### Properties
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown'
* **connectionType**: 'ExpressRoute' | 'IPsec' | 'VPNClient' | 'Vnet2Vnet'
* **egressBytesTransferred**: int
* **ingressBytesTransferred**: int
* **localNetworkGateway2**: LocalNetworkGateway
* **peer**: SubResource
* **provisioningState**: string
* **resourceGuid**: string
* **routingWeight**: int
* **sharedKey**: string
* **virtualNetworkGateway1**: VirtualNetworkGateway
* **virtualNetworkGateway2**: VirtualNetworkGateway

## LocalNetworkGateway
### Properties
* **etag**: string
* **id**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (ReadOnly)
* **properties**: LocalNetworkGatewayPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## LocalNetworkGatewayPropertiesFormat
### Properties
* **gatewayIpAddress**: string
* **localNetworkAddressSpace**: AddressSpace
* **provisioningState**: string
* **resourceGuid**: string

## AddressSpace
### Properties
* **addressPrefixes**: string[]

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## VirtualNetworkGateway
### Properties
* **etag**: string
* **id**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (ReadOnly)
* **properties**: VirtualNetworkGatewayPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## VirtualNetworkGatewayPropertiesFormat
### Properties
* **enableBgp**: bool
* **gatewayDefaultSite**: SubResource
* **gatewayType**: 'ExpressRoute' | 'Vpn'
* **ipConfigurations**: VirtualNetworkGatewayIpConfiguration[]
* **provisioningState**: string
* **resourceGuid**: string
* **vpnType**: 'PolicyBased' | 'RouteBased'

## VirtualNetworkGatewayIpConfiguration
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: VirtualNetworkGatewayIpConfigurationPropertiesFormat

## VirtualNetworkGatewayIpConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: string
* **publicIPAddress**: SubResource
* **subnet**: SubResource

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/expressRouteCircuits/authorizations
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AuthorizationPropertiesFormat
* **type**: 'Microsoft.Network/expressRouteCircuits/authorizations' (ReadOnly, DeployTimeConstant)

## AuthorizationPropertiesFormat
### Properties
* **authorizationKey**: string
* **authorizationUseStatus**: 'Available' | 'InUse'
* **provisioningState**: string

## Microsoft.Network/expressRouteCircuits/peerings
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExpressRouteCircuitPeeringPropertiesFormat
* **type**: 'Microsoft.Network/expressRouteCircuits/peerings' (ReadOnly, DeployTimeConstant)

## ExpressRouteCircuitPeeringPropertiesFormat
### Properties
* **azureASN**: int
* **microsoftPeeringConfig**: ExpressRouteCircuitPeeringConfig
* **peerASN**: int
* **peeringType**: 'AzurePrivatePeering' | 'AzurePublicPeering' | 'MicrosoftPeering'
* **primaryAzurePort**: string
* **primaryPeerAddressPrefix**: string
* **provisioningState**: string
* **secondaryAzurePort**: string
* **secondaryPeerAddressPrefix**: string
* **sharedKey**: string
* **state**: 'Disabled' | 'Enabled'
* **stats**: ExpressRouteCircuitStats
* **vlanId**: int

## ExpressRouteCircuitPeeringConfig
### Properties
* **advertisedPublicPrefixes**: string[]
* **advertisedPublicPrefixesState**: 'Configured' | 'Configuring' | 'NotConfigured' | 'ValidationNeeded'
* **customerASN**: int
* **routingRegistryName**: string

## ExpressRouteCircuitStats
### Properties
* **bytesIn**: int
* **bytesOut**: int

## Microsoft.Network/expressRouteCircuits
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: '' (Required, DeployTimeConstant)
* **properties**: ExpressRouteCircuitPropertiesFormat
* **sku**: ExpressRouteCircuitSku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/expressRouteCircuits' (ReadOnly, DeployTimeConstant)

## ExpressRouteCircuitPropertiesFormat
### Properties
* **authorizations**: ExpressRouteCircuitAuthorization[]
* **circuitProvisioningState**: string
* **peerings**: ExpressRouteCircuitPeering[]
* **provisioningState**: string
* **serviceKey**: string
* **serviceProviderNotes**: string
* **serviceProviderProperties**: ExpressRouteCircuitServiceProviderProperties
* **serviceProviderProvisioningState**: 'Deprovisioning' | 'NotProvisioned' | 'Provisioned' | 'Provisioning'

## ExpressRouteCircuitAuthorization
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: AuthorizationPropertiesFormat

## ExpressRouteCircuitPeering
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ExpressRouteCircuitPeeringPropertiesFormat

## ExpressRouteCircuitServiceProviderProperties
### Properties
* **bandwidthInMbps**: int
* **peeringLocation**: string
* **serviceProviderName**: string

## ExpressRouteCircuitSku
### Properties
* **family**: 'MeteredData' | 'UnlimitedData'
* **name**: string
* **tier**: 'Premium' | 'Standard'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/loadBalancers
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: LoadBalancerPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/loadBalancers' (ReadOnly, DeployTimeConstant)

## LoadBalancerPropertiesFormat
### Properties
* **backendAddressPools**: BackendAddressPool[]
* **frontendIPConfigurations**: FrontendIpConfiguration[]
* **inboundNatPools**: InboundNatPool[]
* **inboundNatRules**: InboundNatRule[]
* **loadBalancingRules**: LoadBalancingRule[]
* **outboundNatRules**: OutboundNatRule[]
* **probes**: Probe[]
* **provisioningState**: string
* **resourceGuid**: string

## BackendAddressPool
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: BackendAddressPoolPropertiesFormat

## BackendAddressPoolPropertiesFormat
### Properties
* **backendIPConfigurations**: SubResource[]
* **loadBalancingRules**: SubResource[]
* **outboundNatRule**: SubResource
* **provisioningState**: string

## FrontendIpConfiguration
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: FrontendIpConfigurationPropertiesFormat

## FrontendIpConfigurationPropertiesFormat
### Properties
* **inboundNatPools**: SubResource[]
* **inboundNatRules**: SubResource[]
* **loadBalancingRules**: SubResource[]
* **outboundNatRules**: SubResource[]
* **privateIPAddress**: string
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: string
* **publicIPAddress**: SubResource
* **subnet**: SubResource

## InboundNatPool
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: InboundNatPoolPropertiesFormat

## InboundNatPoolPropertiesFormat
### Properties
* **backendPort**: int (Required)
* **frontendIPConfiguration**: SubResource
* **frontendPortRangeEnd**: int (Required)
* **frontendPortRangeStart**: int (Required)
* **protocol**: 'Tcp' | 'Udp' (Required)
* **provisioningState**: string

## InboundNatRule
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: InboundNatRulePropertiesFormat

## InboundNatRulePropertiesFormat
### Properties
* **backendIPConfiguration**: SubResource
* **backendPort**: int
* **enableFloatingIP**: bool (Required)
* **frontendIPConfiguration**: SubResource
* **frontendPort**: int (Required)
* **idleTimeoutInMinutes**: int
* **protocol**: 'Tcp' | 'Udp' (Required)
* **provisioningState**: string

## LoadBalancingRule
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: LoadBalancingRulePropertiesFormat

## LoadBalancingRulePropertiesFormat
### Properties
* **backendAddressPool**: SubResource (Required)
* **backendPort**: int
* **enableFloatingIP**: bool (Required)
* **frontendIPConfiguration**: SubResource
* **frontendPort**: int (Required)
* **idleTimeoutInMinutes**: int
* **loadDistribution**: 'Default' | 'SourceIP' | 'SourceIPProtocol'
* **probe**: SubResource
* **protocol**: 'Tcp' | 'Udp' (Required)
* **provisioningState**: string

## OutboundNatRule
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: OutboundNatRulePropertiesFormat

## OutboundNatRulePropertiesFormat
### Properties
* **allocatedOutboundPorts**: int (Required)
* **backendAddressPool**: SubResource (Required)
* **frontendIPConfigurations**: SubResource[]
* **provisioningState**: string

## Probe
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ProbePropertiesFormat

## ProbePropertiesFormat
### Properties
* **intervalInSeconds**: int
* **loadBalancingRules**: SubResource[]
* **numberOfProbes**: int
* **port**: int (Required)
* **protocol**: 'Http' | 'Tcp' (Required)
* **provisioningState**: string
* **requestPath**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/localNetworkGateways
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: LocalNetworkGatewayPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/localNetworkGateways' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/networkInterfaces
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: NetworkInterfacePropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/networkInterfaces' (ReadOnly, DeployTimeConstant)

## NetworkInterfacePropertiesFormat
### Properties
* **dnsSettings**: NetworkInterfaceDnsSettings
* **enableIPForwarding**: bool
* **ipConfigurations**: NetworkInterfaceIpConfiguration[]
* **macAddress**: string
* **networkSecurityGroup**: SubResource
* **primary**: bool
* **provisioningState**: string
* **resourceGuid**: string
* **virtualMachine**: SubResource

## NetworkInterfaceDnsSettings
### Properties
* **appliedDnsServers**: string[]
* **dnsServers**: string[]
* **internalDnsNameLabel**: string
* **internalFqdn**: string

## NetworkInterfaceIpConfiguration
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: NetworkInterfaceIpConfigurationPropertiesFormat

## NetworkInterfaceIpConfigurationPropertiesFormat
### Properties
* **loadBalancerBackendAddressPools**: SubResource[]
* **loadBalancerInboundNatRules**: SubResource[]
* **privateIPAddress**: string
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: string
* **publicIPAddress**: SubResource
* **subnet**: SubResource

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/networkSecurityGroups/securityRules
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SecurityRulePropertiesFormat
* **type**: 'Microsoft.Network/networkSecurityGroups/securityRules' (ReadOnly, DeployTimeConstant)

## SecurityRulePropertiesFormat
### Properties
* **access**: 'Allow' | 'Deny' (Required)
* **description**: string
* **destinationAddressPrefix**: string (Required)
* **destinationPortRange**: string
* **direction**: 'Inbound' | 'Outbound' (Required)
* **priority**: int
* **protocol**: '*' | 'Tcp' | 'Udp' (Required)
* **provisioningState**: string
* **sourceAddressPrefix**: string (Required)
* **sourcePortRange**: string

## Microsoft.Network/networkSecurityGroups
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: NetworkSecurityGroupPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/networkSecurityGroups' (ReadOnly, DeployTimeConstant)

## NetworkSecurityGroupPropertiesFormat
### Properties
* **defaultSecurityRules**: SecurityRule[]
* **networkInterfaces**: SubResource[]
* **provisioningState**: string
* **resourceGuid**: string
* **securityRules**: SecurityRule[]
* **subnets**: SubResource[]

## SecurityRule
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: SecurityRulePropertiesFormat

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/publicIPAddresses
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: '' (Required, DeployTimeConstant)
* **properties**: PublicIpAddressPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/publicIPAddresses' (ReadOnly, DeployTimeConstant)

## PublicIpAddressPropertiesFormat
### Properties
* **dnsSettings**: PublicIpAddressDnsSettings
* **idleTimeoutInMinutes**: int
* **ipAddress**: string
* **ipConfiguration**: SubResource
* **provisioningState**: string
* **publicIPAllocationMethod**: 'Dynamic' | 'Static' (Required)
* **resourceGuid**: string

## PublicIpAddressDnsSettings
### Properties
* **domainNameLabel**: string
* **fqdn**: string
* **reverseFqdn**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/routeTables/routes
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RoutePropertiesFormat
* **type**: 'Microsoft.Network/routeTables/routes' (ReadOnly, DeployTimeConstant)

## RoutePropertiesFormat
### Properties
* **addressPrefix**: string
* **nextHopIpAddress**: string
* **nextHopType**: 'Internet' | 'None' | 'VirtualAppliance' | 'VirtualNetworkGateway' | 'VnetLocal' (Required)
* **provisioningState**: string

## Microsoft.Network/routeTables
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RouteTablePropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/routeTables' (ReadOnly, DeployTimeConstant)

## RouteTablePropertiesFormat
### Properties
* **provisioningState**: string
* **routes**: Route[]
* **subnets**: SubResource[]

## Route
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: RoutePropertiesFormat

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/virtualnetworkgateways
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualNetworkGatewayPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/virtualnetworkgateways' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/virtualnetworks/subnets
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SubnetPropertiesFormat
* **type**: 'Microsoft.Network/virtualnetworks/subnets' (ReadOnly, DeployTimeConstant)

## SubnetPropertiesFormat
### Properties
* **addressPrefix**: string (Required)
* **ipConfigurations**: SubResource[]
* **networkSecurityGroup**: SubResource
* **provisioningState**: string
* **routeTable**: SubResource

## Microsoft.Network/virtualnetworks
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualNetworkPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/virtualnetworks' (ReadOnly, DeployTimeConstant)

## VirtualNetworkPropertiesFormat
### Properties
* **addressSpace**: AddressSpace
* **dhcpOptions**: DhcpOptions
* **provisioningState**: string
* **resourceGuid**: string
* **subnets**: Subnet[]

## DhcpOptions
### Properties
* **dnsServers**: string[]

## Subnet
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: SubnetPropertiesFormat

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

