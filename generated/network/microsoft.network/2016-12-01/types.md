# Microsoft.Network @ 2016-12-01

## Resource Microsoft.Network/applicationGateways@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationGatewayPropertiesFormat](#applicationgatewaypropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/applicationGateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/connections@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualNetworkGatewayConnectionPropertiesFormat](#virtualnetworkgatewayconnectionpropertiesformat) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/connections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCircuits@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExpressRouteCircuitPropertiesFormat](#expressroutecircuitpropertiesformat)
* **sku**: [ExpressRouteCircuitSku](#expressroutecircuitsku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/expressRouteCircuits' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCircuits/authorizations@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AuthorizationPropertiesFormat](#authorizationpropertiesformat)
* **type**: 'Microsoft.Network/expressRouteCircuits/authorizations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCircuits/peerings@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExpressRouteCircuitPeeringPropertiesFormat](#expressroutecircuitpeeringpropertiesformat)
* **type**: 'Microsoft.Network/expressRouteCircuits/peerings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/loadBalancers@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LoadBalancerPropertiesFormat](#loadbalancerpropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/loadBalancers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/localNetworkGateways@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LocalNetworkGatewayPropertiesFormat](#localnetworkgatewaypropertiesformat) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/localNetworkGateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkInterfaces@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/networkInterfaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkSecurityGroups@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NetworkSecurityGroupPropertiesFormat](#networksecuritygrouppropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/networkSecurityGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkSecurityGroups/securityRules@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SecurityRulePropertiesFormat](#securityrulepropertiesformat)
* **type**: 'Microsoft.Network/networkSecurityGroups/securityRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkWatchers@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NetworkWatcherPropertiesFormat](#networkwatcherpropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/networkWatchers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkWatchers/packetCaptures@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PacketCaptureParameters](#packetcaptureparameters) (Required)
* **type**: 'Microsoft.Network/networkWatchers/packetCaptures' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/publicIPAddresses@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/publicIPAddresses' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/routeFilters@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RouteFilterPropertiesFormat](#routefilterpropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/routeFilters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/routeFilters/routeFilterRules@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RouteFilterRulePropertiesFormat](#routefilterrulepropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/routeFilters/routeFilterRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/routeTables@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RouteTablePropertiesFormat](#routetablepropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/routeTables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/routeTables/routes@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RoutePropertiesFormat](#routepropertiesformat)
* **type**: 'Microsoft.Network/routeTables/routes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualNetworkGateways@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualNetworkGatewayPropertiesFormat](#virtualnetworkgatewaypropertiesformat) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/virtualNetworkGateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualNetworks@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualNetworkPropertiesFormat](#virtualnetworkpropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/virtualNetworks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualNetworks/subnets@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SubnetPropertiesFormat](#subnetpropertiesformat)
* **type**: 'Microsoft.Network/virtualNetworks/subnets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualNetworks/virtualNetworkPeerings@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualNetworkPeeringPropertiesFormat](#virtualnetworkpeeringpropertiesformat)
* **type**: 'Microsoft.Network/virtualNetworks/virtualNetworkPeerings' (ReadOnly, DeployTimeConstant)

## ApplicationGatewayPropertiesFormat
### Properties
* **authenticationCertificates**: [ApplicationGatewayAuthenticationCertificate](#applicationgatewayauthenticationcertificate)[]
* **backendAddressPools**: [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)[]
* **backendHttpSettingsCollection**: [ApplicationGatewayBackendHttpSettings](#applicationgatewaybackendhttpsettings)[]
* **frontendIPConfigurations**: [ApplicationGatewayFrontendIPConfiguration](#applicationgatewayfrontendipconfiguration)[]
* **frontendPorts**: [ApplicationGatewayFrontendPort](#applicationgatewayfrontendport)[]
* **gatewayIPConfigurations**: [ApplicationGatewayIPConfiguration](#applicationgatewayipconfiguration)[]
* **httpListeners**: [ApplicationGatewayHttpListener](#applicationgatewayhttplistener)[]
* **operationalState**: 'Running' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **probes**: [ApplicationGatewayProbe](#applicationgatewayprobe)[]
* **provisioningState**: string
* **requestRoutingRules**: [ApplicationGatewayRequestRoutingRule](#applicationgatewayrequestroutingrule)[]
* **resourceGuid**: string
* **sku**: [ApplicationGatewaySku](#applicationgatewaysku)
* **sslCertificates**: [ApplicationGatewaySslCertificate](#applicationgatewaysslcertificate)[]
* **sslPolicy**: [ApplicationGatewaySslPolicy](#applicationgatewaysslpolicy)
* **urlPathMaps**: [ApplicationGatewayUrlPathMap](#applicationgatewayurlpathmap)[]
* **webApplicationFirewallConfiguration**: [ApplicationGatewayWebApplicationFirewallConfiguration](#applicationgatewaywebapplicationfirewallconfiguration)

## ApplicationGatewayAuthenticationCertificate
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayAuthenticationCertificatePropertiesFormat](#applicationgatewayauthenticationcertificatepropertiesformat)

## ApplicationGatewayAuthenticationCertificatePropertiesFormat
### Properties
* **data**: string
* **provisioningState**: string

## ApplicationGatewayBackendAddressPool
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayBackendAddressPoolPropertiesFormat](#applicationgatewaybackendaddresspoolpropertiesformat)

## ApplicationGatewayBackendAddressPoolPropertiesFormat
### Properties
* **backendAddresses**: [ApplicationGatewayBackendAddress](#applicationgatewaybackendaddress)[]
* **backendIPConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[]
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
* **properties**: [NetworkInterfaceIPConfigurationPropertiesFormat](#networkinterfaceipconfigurationpropertiesformat)

## NetworkInterfaceIPConfigurationPropertiesFormat
### Properties
* **applicationGatewayBackendAddressPools**: [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)[]
* **loadBalancerBackendAddressPools**: [BackendAddressPool](#backendaddresspool)[]
* **loadBalancerInboundNatRules**: [InboundNatRule](#inboundnatrule)[]
* **primary**: bool
* **privateIPAddress**: string
* **privateIPAddressVersion**: 'IPv4' | 'IPv6'
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: string
* **publicIPAddress**: [PublicIPAddress](#publicipaddress)
* **subnet**: [Subnet](#subnet)

## BackendAddressPool
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [BackendAddressPoolPropertiesFormat](#backendaddresspoolpropertiesformat)

## BackendAddressPoolPropertiesFormat
### Properties
* **backendIPConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[] (ReadOnly)
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly)
* **outboundNatRule**: [SubResource](#subresource) (ReadOnly)
* **provisioningState**: string

## SubResource
### Properties
* **id**: string

## InboundNatRule
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [InboundNatRulePropertiesFormat](#inboundnatrulepropertiesformat)

## InboundNatRulePropertiesFormat
### Properties
* **backendIPConfiguration**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration) (ReadOnly)
* **backendPort**: int
* **enableFloatingIP**: bool
* **frontendIPConfiguration**: [SubResource](#subresource)
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
* **properties**: [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: string (ReadOnly)

## PublicIPAddressPropertiesFormat
### Properties
* **dnsSettings**: [PublicIPAddressDnsSettings](#publicipaddressdnssettings)
* **idleTimeoutInMinutes**: int
* **ipAddress**: string
* **ipConfiguration**: [IPConfiguration](#ipconfiguration) (ReadOnly)
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
* **properties**: [IPConfigurationPropertiesFormat](#ipconfigurationpropertiesformat)

## IPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: string
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
* **ipConfigurations**: [IPConfiguration](#ipconfiguration)[] (ReadOnly)
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup)
* **provisioningState**: string
* **resourceNavigationLinks**: [ResourceNavigationLink](#resourcenavigationlink)[]
* **routeTable**: [RouteTable](#routetable)

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
* **provisioningState**: string
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
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: string (ReadOnly)

## NetworkInterfacePropertiesFormat
### Properties
* **dnsSettings**: [NetworkInterfaceDnsSettings](#networkinterfacednssettings)
* **enableAcceleratedNetworking**: bool
* **enableIPForwarding**: bool
* **ipConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[]
* **macAddress**: string
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup)
* **primary**: bool
* **provisioningState**: string
* **resourceGuid**: string
* **virtualMachine**: [SubResource](#subresource)

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
* **properties**: [ResourceNavigationLinkFormat](#resourcenavigationlinkformat)

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
* **properties**: [RouteTablePropertiesFormat](#routetablepropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: string (ReadOnly)

## RouteTablePropertiesFormat
### Properties
* **provisioningState**: string
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
* **properties**: [ApplicationGatewayBackendHttpSettingsPropertiesFormat](#applicationgatewaybackendhttpsettingspropertiesformat)

## ApplicationGatewayBackendHttpSettingsPropertiesFormat
### Properties
* **authenticationCertificates**: [SubResource](#subresource)[]
* **connectionDraining**: [ApplicationGatewayConnectionDraining](#applicationgatewayconnectiondraining)
* **cookieBasedAffinity**: 'Disabled' | 'Enabled'
* **port**: int
* **probe**: [SubResource](#subresource)
* **protocol**: 'Http' | 'Https'
* **provisioningState**: string
* **requestTimeout**: int

## ApplicationGatewayConnectionDraining
### Properties
* **drainTimeoutInSec**: int (Required)
* **enabled**: bool (Required)

## ApplicationGatewayFrontendIPConfiguration
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayFrontendIPConfigurationPropertiesFormat](#applicationgatewayfrontendipconfigurationpropertiesformat)

## ApplicationGatewayFrontendIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: string
* **publicIPAddress**: [SubResource](#subresource)
* **subnet**: [SubResource](#subresource)

## ApplicationGatewayFrontendPort
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayFrontendPortPropertiesFormat](#applicationgatewayfrontendportpropertiesformat)

## ApplicationGatewayFrontendPortPropertiesFormat
### Properties
* **port**: int
* **provisioningState**: string

## ApplicationGatewayIPConfiguration
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayIPConfigurationPropertiesFormat](#applicationgatewayipconfigurationpropertiesformat)

## ApplicationGatewayIPConfigurationPropertiesFormat
### Properties
* **provisioningState**: string
* **subnet**: [SubResource](#subresource)

## ApplicationGatewayHttpListener
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayHttpListenerPropertiesFormat](#applicationgatewayhttplistenerpropertiesformat)

## ApplicationGatewayHttpListenerPropertiesFormat
### Properties
* **frontendIPConfiguration**: [SubResource](#subresource)
* **frontendPort**: [SubResource](#subresource)
* **hostName**: string
* **protocol**: 'Http' | 'Https'
* **provisioningState**: string
* **requireServerNameIndication**: bool
* **sslCertificate**: [SubResource](#subresource)

## ApplicationGatewayProbe
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayProbePropertiesFormat](#applicationgatewayprobepropertiesformat)

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
* **properties**: [ApplicationGatewayRequestRoutingRulePropertiesFormat](#applicationgatewayrequestroutingrulepropertiesformat)

## ApplicationGatewayRequestRoutingRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource)
* **backendHttpSettings**: [SubResource](#subresource)
* **httpListener**: [SubResource](#subresource)
* **provisioningState**: string
* **ruleType**: 'Basic' | 'PathBasedRouting'
* **urlPathMap**: [SubResource](#subresource)

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
* **properties**: [ApplicationGatewaySslCertificatePropertiesFormat](#applicationgatewaysslcertificatepropertiesformat)

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
* **properties**: [ApplicationGatewayUrlPathMapPropertiesFormat](#applicationgatewayurlpathmappropertiesformat)

## ApplicationGatewayUrlPathMapPropertiesFormat
### Properties
* **defaultBackendAddressPool**: [SubResource](#subresource)
* **defaultBackendHttpSettings**: [SubResource](#subresource)
* **pathRules**: [ApplicationGatewayPathRule](#applicationgatewaypathrule)[]
* **provisioningState**: string

## ApplicationGatewayPathRule
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayPathRulePropertiesFormat](#applicationgatewaypathrulepropertiesformat)

## ApplicationGatewayPathRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource)
* **backendHttpSettings**: [SubResource](#subresource)
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
* **localNetworkGateway2**: [LocalNetworkGateway](#localnetworkgateway)
* **peer**: [SubResource](#subresource)
* **provisioningState**: string (ReadOnly)
* **resourceGuid**: string
* **routingWeight**: int
* **sharedKey**: string
* **tunnelConnectionStatus**: [TunnelConnectionHealth](#tunnelconnectionhealth)[] (ReadOnly)
* **virtualNetworkGateway1**: [VirtualNetworkGateway](#virtualnetworkgateway) (Required)
* **virtualNetworkGateway2**: [VirtualNetworkGateway](#virtualnetworkgateway)

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
* **properties**: [VirtualNetworkGatewayPropertiesFormat](#virtualnetworkgatewaypropertiesformat) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: string (ReadOnly)

## VirtualNetworkGatewayPropertiesFormat
### Properties
* **activeActive**: bool
* **bgpSettings**: [BgpSettings](#bgpsettings)
* **enableBgp**: bool
* **gatewayDefaultSite**: [SubResource](#subresource)
* **gatewayType**: 'ExpressRoute' | 'Vpn'
* **ipConfigurations**: [VirtualNetworkGatewayIPConfiguration](#virtualnetworkgatewayipconfiguration)[]
* **provisioningState**: string (ReadOnly)
* **resourceGuid**: string
* **sku**: [VirtualNetworkGatewaySku](#virtualnetworkgatewaysku)
* **vpnClientConfiguration**: [VpnClientConfiguration](#vpnclientconfiguration)
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
* **provisioningState**: string (ReadOnly)
* **publicIPAddress**: [SubResource](#subresource)
* **subnet**: [SubResource](#subresource)

## VirtualNetworkGatewaySku
### Properties
* **capacity**: int
* **name**: 'Basic' | 'HighPerformance' | 'Standard' | 'UltraPerformance'
* **tier**: 'Basic' | 'HighPerformance' | 'Standard' | 'UltraPerformance'

## VpnClientConfiguration
### Properties
* **vpnClientAddressPool**: [AddressSpace](#addressspace)
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
* **provisioningState**: string (ReadOnly)
* **thumbprint**: string

## VpnClientRootCertificate
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [VpnClientRootCertificatePropertiesFormat](#vpnclientrootcertificatepropertiesformat) (Required)

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
* **authorizations**: [ExpressRouteCircuitAuthorization](#expressroutecircuitauthorization)[]
* **circuitProvisioningState**: string
* **gatewayManagerEtag**: string
* **peerings**: [ExpressRouteCircuitPeering](#expressroutecircuitpeering)[]
* **provisioningState**: string
* **serviceKey**: string
* **serviceProviderNotes**: string
* **serviceProviderProperties**: [ExpressRouteCircuitServiceProviderProperties](#expressroutecircuitserviceproviderproperties)
* **serviceProviderProvisioningState**: 'Deprovisioning' | 'NotProvisioned' | 'Provisioned' | 'Provisioning'

## ExpressRouteCircuitAuthorization
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [AuthorizationPropertiesFormat](#authorizationpropertiesformat)

## AuthorizationPropertiesFormat
### Properties
* **authorizationKey**: string
* **authorizationUseStatus**: 'Available' | 'InUse'
* **provisioningState**: string

## ExpressRouteCircuitPeering
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: [ExpressRouteCircuitPeeringPropertiesFormat](#expressroutecircuitpeeringpropertiesformat)

## ExpressRouteCircuitPeeringPropertiesFormat
### Properties
* **azureASN**: int
* **gatewayManagerEtag**: string
* **lastModifiedBy**: string
* **microsoftPeeringConfig**: [ExpressRouteCircuitPeeringConfig](#expressroutecircuitpeeringconfig)
* **peerASN**: int
* **peeringType**: 'AzurePrivatePeering' | 'AzurePublicPeering' | 'MicrosoftPeering'
* **primaryAzurePort**: string
* **primaryPeerAddressPrefix**: string
* **provisioningState**: string
* **routeFilter**: [RouteFilter](#routefilter)
* **secondaryAzurePort**: string
* **secondaryPeerAddressPrefix**: string
* **sharedKey**: string
* **state**: 'Disabled' | 'Enabled'
* **stats**: [ExpressRouteCircuitStats](#expressroutecircuitstats)
* **vlanId**: int

## ExpressRouteCircuitPeeringConfig
### Properties
* **advertisedPublicPrefixes**: string[]
* **advertisedPublicPrefixesState**: 'Configured' | 'Configuring' | 'NotConfigured' | 'ValidationNeeded'
* **customerASN**: int
* **routingRegistryName**: string

## RouteFilter
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: [RouteFilterPropertiesFormat](#routefilterpropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: string (ReadOnly)

## RouteFilterPropertiesFormat
### Properties
* **peerings**: [ExpressRouteCircuitPeering](#expressroutecircuitpeering)[] (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **rules**: [RouteFilterRule](#routefilterrule)[]

## RouteFilterRule
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: [RouteFilterRulePropertiesFormat](#routefilterrulepropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)

## RouteFilterRulePropertiesFormat
### Properties
* **access**: 'Allow' | 'Deny' (Required)
* **communities**: string[] (Required)
* **provisioningState**: string (ReadOnly)
* **routeFilterRuleType**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **backendAddressPools**: [BackendAddressPool](#backendaddresspool)[]
* **frontendIPConfigurations**: [FrontendIPConfiguration](#frontendipconfiguration)[]
* **inboundNatPools**: [InboundNatPool](#inboundnatpool)[]
* **inboundNatRules**: [InboundNatRule](#inboundnatrule)[]
* **loadBalancingRules**: [LoadBalancingRule](#loadbalancingrule)[]
* **outboundNatRules**: [OutboundNatRule](#outboundnatrule)[]
* **probes**: [Probe](#probe)[]
* **provisioningState**: string
* **resourceGuid**: string

## FrontendIPConfiguration
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [FrontendIPConfigurationPropertiesFormat](#frontendipconfigurationpropertiesformat)

## FrontendIPConfigurationPropertiesFormat
### Properties
* **inboundNatPools**: [SubResource](#subresource)[] (ReadOnly)
* **inboundNatRules**: [SubResource](#subresource)[] (ReadOnly)
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly)
* **outboundNatRules**: [SubResource](#subresource)[] (ReadOnly)
* **privateIPAddress**: string
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: string
* **publicIPAddress**: [PublicIPAddress](#publicipaddress)
* **subnet**: [Subnet](#subnet)

## InboundNatPool
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [InboundNatPoolPropertiesFormat](#inboundnatpoolpropertiesformat)

## InboundNatPoolPropertiesFormat
### Properties
* **backendPort**: int (Required)
* **frontendIPConfiguration**: [SubResource](#subresource)
* **frontendPortRangeEnd**: int (Required)
* **frontendPortRangeStart**: int (Required)
* **protocol**: 'Tcp' | 'Udp' (Required)
* **provisioningState**: string

## LoadBalancingRule
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [LoadBalancingRulePropertiesFormat](#loadbalancingrulepropertiesformat)

## LoadBalancingRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource)
* **backendPort**: int
* **enableFloatingIP**: bool
* **frontendIPConfiguration**: [SubResource](#subresource)
* **frontendPort**: int (Required)
* **idleTimeoutInMinutes**: int
* **loadDistribution**: 'Default' | 'SourceIP' | 'SourceIPProtocol'
* **probe**: [SubResource](#subresource)
* **protocol**: 'Tcp' | 'Udp' (Required)
* **provisioningState**: string

## OutboundNatRule
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [OutboundNatRulePropertiesFormat](#outboundnatrulepropertiesformat)

## OutboundNatRulePropertiesFormat
### Properties
* **allocatedOutboundPorts**: int
* **backendAddressPool**: [SubResource](#subresource) (Required)
* **frontendIPConfigurations**: [SubResource](#subresource)[]
* **provisioningState**: string

## Probe
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ProbePropertiesFormat](#probepropertiesformat)

## ProbePropertiesFormat
### Properties
* **intervalInSeconds**: int
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly)
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualNetworkPropertiesFormat
### Properties
* **addressSpace**: [AddressSpace](#addressspace)
* **dhcpOptions**: [DhcpOptions](#dhcpoptions)
* **provisioningState**: string
* **resourceGuid**: string
* **subnets**: [Subnet](#subnet)[]
* **virtualNetworkPeerings**: [VirtualNetworkPeering](#virtualnetworkpeering)[]

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
* **provisioningState**: string
* **remoteVirtualNetwork**: [SubResource](#subresource)
* **useRemoteGateways**: bool

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

