# Microsoft.Network @ 2016-09-01

## Resource Microsoft.Network/applicationGateways@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationGatewayPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/applicationGateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/connections@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualNetworkGatewayConnectionPropertiesFormat (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/connections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCircuits@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExpressRouteCircuitPropertiesFormat
* **sku**: ExpressRouteCircuitSku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/expressRouteCircuits' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCircuits/authorizations@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AuthorizationPropertiesFormat
* **type**: 'Microsoft.Network/expressRouteCircuits/authorizations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCircuits/peerings@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExpressRouteCircuitPeeringPropertiesFormat
* **type**: 'Microsoft.Network/expressRouteCircuits/peerings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/loadBalancers@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: LoadBalancerPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/loadBalancers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/localNetworkGateways@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: LocalNetworkGatewayPropertiesFormat (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/localNetworkGateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkInterfaces@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: NetworkInterfacePropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/networkInterfaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkSecurityGroups@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: NetworkSecurityGroupPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/networkSecurityGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkSecurityGroups/securityRules@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SecurityRulePropertiesFormat
* **type**: 'Microsoft.Network/networkSecurityGroups/securityRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkWatchers@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: NetworkWatcherPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/networkWatchers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkWatchers/packetCaptures@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PacketCaptureParameters (Required)
* **type**: 'Microsoft.Network/networkWatchers/packetCaptures' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/publicIPAddresses@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PublicIPAddressPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/publicIPAddresses' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/routeTables@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: RouteTablePropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/routeTables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/routeTables/routes@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RoutePropertiesFormat
* **type**: 'Microsoft.Network/routeTables/routes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualNetworkGateways@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualNetworkGatewayPropertiesFormat (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/virtualNetworkGateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualNetworks@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualNetworkPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/virtualNetworks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualNetworks/subnets@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SubnetPropertiesFormat
* **type**: 'Microsoft.Network/virtualNetworks/subnets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualNetworks/virtualNetworkPeerings@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualNetworkPeeringPropertiesFormat
* **type**: 'Microsoft.Network/virtualNetworks/virtualNetworkPeerings' (ReadOnly, DeployTimeConstant)

## ApplicationGatewayPropertiesFormat
### Properties
* **authenticationCertificates**: ApplicationGatewayAuthenticationCertificate[]
* **backendAddressPools**: ApplicationGatewayBackendAddressPool[]
* **backendHttpSettingsCollection**: ApplicationGatewayBackendHttpSettings[]
* **frontendIPConfigurations**: ApplicationGatewayFrontendIPConfiguration[]
* **frontendPorts**: ApplicationGatewayFrontendPort[]
* **gatewayIPConfigurations**: ApplicationGatewayIPConfiguration[]
* **httpListeners**: ApplicationGatewayHttpListener[]
* **operationalState**: 'Running' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **probes**: ApplicationGatewayProbe[]
* **provisioningState**: string
* **requestRoutingRules**: ApplicationGatewayRequestRoutingRule[]
* **resourceGuid**: string
* **sku**: ApplicationGatewaySku
* **sslCertificates**: ApplicationGatewaySslCertificate[]
* **sslPolicy**: ApplicationGatewaySslPolicy
* **urlPathMaps**: ApplicationGatewayUrlPathMap[]
* **webApplicationFirewallConfiguration**: ApplicationGatewayWebApplicationFirewallConfiguration

## ApplicationGatewayAuthenticationCertificate
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayAuthenticationCertificatePropertiesFormat

## ApplicationGatewayAuthenticationCertificatePropertiesFormat
### Properties
* **data**: string
* **provisioningState**: string

## ApplicationGatewayBackendAddressPool
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayBackendAddressPoolPropertiesFormat

## ApplicationGatewayBackendAddressPoolPropertiesFormat
### Properties
* **backendAddresses**: ApplicationGatewayBackendAddress[]
* **backendIPConfigurations**: NetworkInterfaceIPConfiguration[]
* **provisioningState**: string

## ApplicationGatewayBackendAddress
### Properties
* **fqdn**: string
* **ipAddress**: string

## NetworkInterfaceIPConfiguration
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: NetworkInterfaceIPConfigurationPropertiesFormat

## NetworkInterfaceIPConfigurationPropertiesFormat
### Properties
* **applicationGatewayBackendAddressPools**: ApplicationGatewayBackendAddressPool[]
* **loadBalancerBackendAddressPools**: BackendAddressPool[]
* **loadBalancerInboundNatRules**: InboundNatRule[]
* **primary**: bool
* **privateIPAddress**: string
* **privateIPAddressVersion**: 'IPv4' | 'IPv6'
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: string
* **publicIPAddress**: PublicIPAddress
* **subnet**: Subnet

## BackendAddressPool
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: BackendAddressPoolPropertiesFormat

## BackendAddressPoolPropertiesFormat
### Properties
* **backendIPConfigurations**: NetworkInterfaceIPConfiguration[] (ReadOnly)
* **loadBalancingRules**: SubResource[] (ReadOnly)
* **outboundNatRule**: SubResource (ReadOnly)
* **provisioningState**: string

## SubResource
### Properties
* **id**: string

## InboundNatRule
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: InboundNatRulePropertiesFormat

## InboundNatRulePropertiesFormat
### Properties
* **backendIPConfiguration**: NetworkInterfaceIPConfiguration (ReadOnly)
* **backendPort**: int
* **enableFloatingIP**: bool
* **frontendIPConfiguration**: SubResource
* **frontendPort**: int
* **idleTimeoutInMinutes**: int
* **protocol**: 'Tcp' | 'Udp'
* **provisioningState**: string

## PublicIPAddress
### Properties
* **etag**: string
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: PublicIPAddressPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## PublicIPAddressPropertiesFormat
### Properties
* **dnsSettings**: PublicIPAddressDnsSettings
* **idleTimeoutInMinutes**: int
* **ipAddress**: string
* **ipConfiguration**: IPConfiguration (ReadOnly)
* **provisioningState**: string
* **publicIPAddressVersion**: 'IPv4' | 'IPv6'
* **publicIPAllocationMethod**: 'Dynamic' | 'Static'
* **resourceGuid**: string

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
* **properties**: IPConfigurationPropertiesFormat

## IPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: string
* **publicIPAddress**: PublicIPAddress
* **subnet**: Subnet

## Subnet
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: SubnetPropertiesFormat

## SubnetPropertiesFormat
### Properties
* **addressPrefix**: string
* **ipConfigurations**: IPConfiguration[] (ReadOnly)
* **networkSecurityGroup**: NetworkSecurityGroup
* **provisioningState**: string
* **resourceNavigationLinks**: ResourceNavigationLink[]
* **routeTable**: RouteTable

## NetworkSecurityGroup
### Properties
* **etag**: string
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: NetworkSecurityGroupPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## NetworkSecurityGroupPropertiesFormat
### Properties
* **defaultSecurityRules**: SecurityRule[]
* **networkInterfaces**: NetworkInterface[] (ReadOnly)
* **provisioningState**: string
* **resourceGuid**: string
* **securityRules**: SecurityRule[]
* **subnets**: Subnet[] (ReadOnly)

## SecurityRule
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: SecurityRulePropertiesFormat

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

## NetworkInterface
### Properties
* **etag**: string
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: NetworkInterfacePropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## NetworkInterfacePropertiesFormat
### Properties
* **dnsSettings**: NetworkInterfaceDnsSettings
* **enableAcceleratedNetworking**: bool
* **enableIPForwarding**: bool
* **ipConfigurations**: NetworkInterfaceIPConfiguration[]
* **macAddress**: string
* **networkSecurityGroup**: NetworkSecurityGroup
* **primary**: bool
* **provisioningState**: string
* **resourceGuid**: string
* **virtualMachine**: SubResource

## NetworkInterfaceDnsSettings
### Properties
* **appliedDnsServers**: string[]
* **dnsServers**: string[]
* **internalDnsNameLabel**: string
* **internalDomainNameSuffix**: string
* **internalFqdn**: string

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
* **properties**: ResourceNavigationLinkFormat

## ResourceNavigationLinkFormat
### Properties
* **link**: string
* **linkedResourceType**: string
* **provisioningState**: string (ReadOnly)

## RouteTable
### Properties
* **etag**: string
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: RouteTablePropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## RouteTablePropertiesFormat
### Properties
* **provisioningState**: string
* **routes**: Route[]
* **subnets**: Subnet[] (ReadOnly)

## Route
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: RoutePropertiesFormat

## RoutePropertiesFormat
### Properties
* **addressPrefix**: string
* **nextHopIpAddress**: string
* **nextHopType**: 'Internet' | 'None' | 'VirtualAppliance' | 'VirtualNetworkGateway' | 'VnetLocal' (Required)
* **provisioningState**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationGatewayBackendHttpSettings
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayBackendHttpSettingsPropertiesFormat

## ApplicationGatewayBackendHttpSettingsPropertiesFormat
### Properties
* **authenticationCertificates**: SubResource[]
* **cookieBasedAffinity**: 'Disabled' | 'Enabled'
* **port**: int
* **probe**: SubResource
* **protocol**: 'Http' | 'Https'
* **provisioningState**: string
* **requestTimeout**: int

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
* **hostName**: string
* **protocol**: 'Http' | 'Https'
* **provisioningState**: string
* **requireServerNameIndication**: bool
* **sslCertificate**: SubResource

## ApplicationGatewayProbe
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayProbePropertiesFormat

## ApplicationGatewayProbePropertiesFormat
### Properties
* **host**: string
* **interval**: int
* **path**: string
* **protocol**: 'Http' | 'Https'
* **provisioningState**: string
* **timeout**: int
* **unhealthyThreshold**: int

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
* **ruleType**: 'Basic' | 'PathBasedRouting'
* **urlPathMap**: SubResource

## ApplicationGatewaySku
### Properties
* **capacity**: int
* **name**: 'Standard_Large' | 'Standard_Medium' | 'Standard_Small' | 'WAF_Large' | 'WAF_Medium'
* **tier**: 'Standard' | 'WAF'

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

## ApplicationGatewaySslPolicy
### Properties
* **disabledSslProtocols**: 'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2'[]

## ApplicationGatewayUrlPathMap
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayUrlPathMapPropertiesFormat

## ApplicationGatewayUrlPathMapPropertiesFormat
### Properties
* **defaultBackendAddressPool**: SubResource
* **defaultBackendHttpSettings**: SubResource
* **pathRules**: ApplicationGatewayPathRule[]
* **provisioningState**: string

## ApplicationGatewayPathRule
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayPathRulePropertiesFormat

## ApplicationGatewayPathRulePropertiesFormat
### Properties
* **backendAddressPool**: SubResource
* **backendHttpSettings**: SubResource
* **paths**: string[]
* **provisioningState**: string

## ApplicationGatewayWebApplicationFirewallConfiguration
### Properties
* **enabled**: bool (Required)
* **firewallMode**: 'Detection' | 'Prevention'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualNetworkGatewayConnectionPropertiesFormat
### Properties
* **authorizationKey**: string
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' (ReadOnly)
* **connectionType**: 'ExpressRoute' | 'IPsec' | 'Vnet2Vnet' | 'VPNClient' (Required)
* **egressBytesTransferred**: int (ReadOnly)
* **enableBgp**: bool
* **ingressBytesTransferred**: int (ReadOnly)
* **localNetworkGateway2**: LocalNetworkGateway
* **peer**: SubResource
* **provisioningState**: string (ReadOnly)
* **resourceGuid**: string
* **routingWeight**: int
* **sharedKey**: string
* **tunnelConnectionStatus**: TunnelConnectionHealth[] (ReadOnly)
* **virtualNetworkGateway1**: VirtualNetworkGateway (Required)
* **virtualNetworkGateway2**: VirtualNetworkGateway

## LocalNetworkGateway
### Properties
* **etag**: string
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: LocalNetworkGatewayPropertiesFormat (Required)
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## LocalNetworkGatewayPropertiesFormat
### Properties
* **bgpSettings**: BgpSettings
* **gatewayIpAddress**: string
* **localNetworkAddressSpace**: AddressSpace (Required)
* **provisioningState**: string (ReadOnly)
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
* **properties**: VirtualNetworkGatewayPropertiesFormat (Required)
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## VirtualNetworkGatewayPropertiesFormat
### Properties
* **activeActive**: bool
* **bgpSettings**: BgpSettings
* **enableBgp**: bool
* **gatewayDefaultSite**: SubResource
* **gatewayType**: 'ExpressRoute' | 'Vpn' (Required)
* **ipConfigurations**: VirtualNetworkGatewayIPConfiguration[] (Required)
* **provisioningState**: string (ReadOnly)
* **resourceGuid**: string
* **sku**: VirtualNetworkGatewaySku
* **vpnClientConfiguration**: VpnClientConfiguration
* **vpnType**: 'PolicyBased' | 'RouteBased' (Required)

## VirtualNetworkGatewayIPConfiguration
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: VirtualNetworkGatewayIPConfigurationPropertiesFormat

## VirtualNetworkGatewayIPConfigurationPropertiesFormat
### Properties
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: string (ReadOnly)
* **publicIPAddress**: SubResource (Required)
* **subnet**: SubResource (Required)

## VirtualNetworkGatewaySku
### Properties
* **capacity**: int
* **name**: 'Basic' | 'HighPerformance' | 'Standard' | 'UltraPerformance' (Required)
* **tier**: 'Basic' | 'HighPerformance' | 'Standard' | 'UltraPerformance' (Required)

## VpnClientConfiguration
### Properties
* **vpnClientAddressPool**: AddressSpace
* **vpnClientRevokedCertificates**: VpnClientRevokedCertificate[]
* **vpnClientRootCertificates**: VpnClientRootCertificate[]

## VpnClientRevokedCertificate
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: VpnClientRevokedCertificatePropertiesFormat

## VpnClientRevokedCertificatePropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly)
* **thumbprint**: string

## VpnClientRootCertificate
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: VpnClientRootCertificatePropertiesFormat (Required)

## VpnClientRootCertificatePropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly)
* **publicCertData**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExpressRouteCircuitPropertiesFormat
### Properties
* **allowClassicOperations**: bool
* **authorizations**: ExpressRouteCircuitAuthorization[]
* **circuitProvisioningState**: string
* **gatewayManagerEtag**: string
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

## AuthorizationPropertiesFormat
### Properties
* **authorizationKey**: string
* **authorizationUseStatus**: 'Available' | 'InUse'
* **provisioningState**: string

## ExpressRouteCircuitPeering
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ExpressRouteCircuitPeeringPropertiesFormat

## ExpressRouteCircuitPeeringPropertiesFormat
### Properties
* **azureASN**: int
* **gatewayManagerEtag**: string
* **lastModifiedBy**: string
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
* **tier**: 'Premium' | 'Standard'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LoadBalancerPropertiesFormat
### Properties
* **backendAddressPools**: BackendAddressPool[]
* **frontendIPConfigurations**: FrontendIPConfiguration[]
* **inboundNatPools**: InboundNatPool[]
* **inboundNatRules**: InboundNatRule[]
* **loadBalancingRules**: LoadBalancingRule[]
* **outboundNatRules**: OutboundNatRule[]
* **probes**: Probe[]
* **provisioningState**: string
* **resourceGuid**: string

## FrontendIPConfiguration
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: FrontendIPConfigurationPropertiesFormat

## FrontendIPConfigurationPropertiesFormat
### Properties
* **inboundNatPools**: SubResource[] (ReadOnly)
* **inboundNatRules**: SubResource[] (ReadOnly)
* **loadBalancingRules**: SubResource[] (ReadOnly)
* **outboundNatRules**: SubResource[] (ReadOnly)
* **privateIPAddress**: string
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: string
* **publicIPAddress**: PublicIPAddress
* **subnet**: Subnet

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

## LoadBalancingRule
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: LoadBalancingRulePropertiesFormat

## LoadBalancingRulePropertiesFormat
### Properties
* **backendAddressPool**: SubResource
* **backendPort**: int
* **enableFloatingIP**: bool
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
* **allocatedOutboundPorts**: int
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
* **loadBalancingRules**: SubResource[] (ReadOnly)
* **numberOfProbes**: int
* **port**: int (Required)
* **protocol**: 'Http' | 'Tcp' (Required)
* **provisioningState**: string
* **requestPath**: string

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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NetworkWatcherPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Dictionary<string,String>
### Properties
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

## VirtualNetworkPropertiesFormat
### Properties
* **addressSpace**: AddressSpace
* **dhcpOptions**: DhcpOptions
* **provisioningState**: string
* **resourceGuid**: string
* **subnets**: Subnet[]
* **virtualNetworkPeerings**: VirtualNetworkPeering[]

## DhcpOptions
### Properties
* **dnsServers**: string[]

## VirtualNetworkPeering
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: VirtualNetworkPeeringPropertiesFormat

## VirtualNetworkPeeringPropertiesFormat
### Properties
* **allowForwardedTraffic**: bool
* **allowGatewayTransit**: bool
* **allowVirtualNetworkAccess**: bool
* **peeringState**: 'Connected' | 'Disconnected' | 'Initiated'
* **provisioningState**: string
* **remoteVirtualNetwork**: SubResource
* **useRemoteGateways**: bool

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

