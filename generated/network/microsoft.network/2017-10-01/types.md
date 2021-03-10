# Microsoft.Network @ 2017-10-01

## Resource Microsoft.Network/applicationGateways@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationGatewayPropertiesFormat](#applicationgatewaypropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/applicationGateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/applicationSecurityGroups@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationSecurityGroupPropertiesFormat](#applicationsecuritygrouppropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/applicationSecurityGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/connections@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualNetworkGatewayConnectionPropertiesFormat](#virtualnetworkgatewayconnectionpropertiesformat) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/connections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCircuits@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExpressRouteCircuitPropertiesFormat](#expressroutecircuitpropertiesformat)
* **sku**: [ExpressRouteCircuitSku](#expressroutecircuitsku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/expressRouteCircuits' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCircuits/authorizations@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AuthorizationPropertiesFormat](#authorizationpropertiesformat)
* **type**: 'Microsoft.Network/expressRouteCircuits/authorizations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCircuits/peerings@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExpressRouteCircuitPeeringPropertiesFormat](#expressroutecircuitpeeringpropertiesformat)
* **type**: 'Microsoft.Network/expressRouteCircuits/peerings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/loadBalancers@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LoadBalancerPropertiesFormat](#loadbalancerpropertiesformat)
* **sku**: [LoadBalancerSku](#loadbalancersku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/loadBalancers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/loadBalancers/inboundNatRules@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [InboundNatRulePropertiesFormat](#inboundnatrulepropertiesformat)
* **type**: 'Microsoft.Network/loadBalancers/inboundNatRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/localNetworkGateways@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LocalNetworkGatewayPropertiesFormat](#localnetworkgatewaypropertiesformat) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/localNetworkGateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkInterfaces@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/networkInterfaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkSecurityGroups@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NetworkSecurityGroupPropertiesFormat](#networksecuritygrouppropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/networkSecurityGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkSecurityGroups/securityRules@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SecurityRulePropertiesFormat](#securityrulepropertiesformat)
* **type**: 'Microsoft.Network/networkSecurityGroups/securityRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkWatchers@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NetworkWatcherPropertiesFormat](#networkwatcherpropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/networkWatchers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkWatchers/connectionMonitors@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConnectionMonitorParameters](#connectionmonitorparameters) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/networkWatchers/connectionMonitors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkWatchers/packetCaptures@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PacketCaptureParameters](#packetcaptureparameters) (Required)
* **type**: 'Microsoft.Network/networkWatchers/packetCaptures' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/publicIPAddresses@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat)
* **sku**: [PublicIPAddressSku](#publicipaddresssku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/publicIPAddresses' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Network/routeFilters@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RouteFilterPropertiesFormat](#routefilterpropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/routeFilters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/routeFilters/routeFilterRules@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RouteFilterRulePropertiesFormat](#routefilterrulepropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/routeFilters/routeFilterRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/routeTables@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RouteTablePropertiesFormat](#routetablepropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/routeTables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/routeTables/routes@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RoutePropertiesFormat](#routepropertiesformat)
* **type**: 'Microsoft.Network/routeTables/routes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualNetworkGateways@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualNetworkGatewayPropertiesFormat](#virtualnetworkgatewaypropertiesformat) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/virtualNetworkGateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualNetworks@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualNetworkPropertiesFormat](#virtualnetworkpropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/virtualNetworks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualNetworks/subnets@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SubnetPropertiesFormat](#subnetpropertiesformat)
* **type**: 'Microsoft.Network/virtualNetworks/subnets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualNetworks/virtualNetworkPeerings@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
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
* **enableHttp2**: bool
* **frontendIPConfigurations**: [ApplicationGatewayFrontendIPConfiguration](#applicationgatewayfrontendipconfiguration)[]
* **frontendPorts**: [ApplicationGatewayFrontendPort](#applicationgatewayfrontendport)[]
* **gatewayIPConfigurations**: [ApplicationGatewayIPConfiguration](#applicationgatewayipconfiguration)[]
* **httpListeners**: [ApplicationGatewayHttpListener](#applicationgatewayhttplistener)[]
* **operationalState**: 'Running' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **probes**: [ApplicationGatewayProbe](#applicationgatewayprobe)[]
* **provisioningState**: string
* **redirectConfigurations**: [ApplicationGatewayRedirectConfiguration](#applicationgatewayredirectconfiguration)[]
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
* **type**: string

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
* **type**: string

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
* **applicationSecurityGroups**: [ApplicationSecurityGroup](#applicationsecuritygroup)[]
* **loadBalancerBackendAddressPools**: [BackendAddressPool](#backendaddresspool)[]
* **loadBalancerInboundNatRules**: [InboundNatRule](#inboundnatrule)[]
* **primary**: bool
* **privateIPAddress**: string
* **privateIPAddressVersion**: 'IPv4' | 'IPv6'
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: string
* **publicIPAddress**: [PublicIPAddress](#publicipaddress)
* **subnet**: [Subnet](#subnet)

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
* **provisioningState**: string (ReadOnly)
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
* **protocol**: 'All' | 'Tcp' | 'Udp'
* **provisioningState**: string

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
* **serviceEndpoints**: [ServiceEndpointPropertiesFormat](#serviceendpointpropertiesformat)[]

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
* **destinationAddressPrefix**: string
* **destinationAddressPrefixes**: string[]
* **destinationApplicationSecurityGroups**: [ApplicationSecurityGroup](#applicationsecuritygroup)[]
* **destinationPortRange**: string
* **destinationPortRanges**: string[]
* **direction**: 'Inbound' | 'Outbound' (Required)
* **priority**: int
* **protocol**: '*' | 'Tcp' | 'Udp' (Required)
* **provisioningState**: string
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
* **disableBgpRoutePropagation**: bool
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

## ServiceEndpointPropertiesFormat
### Properties
* **locations**: string[]
* **provisioningState**: string
* **service**: string

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
* **type**: string

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
* **type**: string

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
* **type**: string

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
* **type**: string

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
* **type**: string

## ApplicationGatewayProbePropertiesFormat
### Properties
* **host**: string
* **interval**: int
* **match**: [ApplicationGatewayProbeHealthResponseMatch](#applicationgatewayprobehealthresponsematch)
* **minServers**: int
* **path**: string
* **pickHostNameFromBackendHttpSettings**: bool
* **protocol**: 'Http' | 'Https'
* **provisioningState**: string
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
* **provisioningState**: string
* **redirectConfiguration**: [SubResource](#subresource)
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
* **type**: string

## ApplicationGatewaySslCertificatePropertiesFormat
### Properties
* **data**: string
* **password**: string
* **provisioningState**: string
* **publicCertData**: string

## ApplicationGatewaySslPolicy
### Properties
* **cipherSuites**: 'TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA256' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA256' | 'TLS_DHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_DHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_RSA_WITH_3DES_EDE_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_RSA_WITH_AES_256_CBC_SHA' | 'TLS_RSA_WITH_AES_256_CBC_SHA256' | 'TLS_RSA_WITH_AES_256_GCM_SHA384'[]
* **disabledSslProtocols**: 'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2'[]
* **minProtocolVersion**: 'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2'
* **policyName**: 'AppGwSslPolicy20150501' | 'AppGwSslPolicy20170401' | 'AppGwSslPolicy20170401S'
* **policyType**: 'Custom' | 'Predefined'

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
* **pathRules**: [ApplicationGatewayPathRule](#applicationgatewaypathrule)[]
* **provisioningState**: string

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
* **provisioningState**: string
* **redirectConfiguration**: [SubResource](#subresource)

## ApplicationGatewayWebApplicationFirewallConfiguration
### Properties
* **disabledRuleGroups**: [ApplicationGatewayFirewallDisabledRuleGroup](#applicationgatewayfirewalldisabledrulegroup)[]
* **enabled**: bool (Required)
* **firewallMode**: 'Detection' | 'Prevention' (Required)
* **ruleSetType**: string (Required)
* **ruleSetVersion**: string (Required)

## ApplicationGatewayFirewallDisabledRuleGroup
### Properties
* **ruleGroupName**: string (Required)
* **rules**: int[]

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **ipsecPolicies**: [IpsecPolicy](#ipsecpolicy)[]
* **localNetworkGateway2**: [LocalNetworkGateway](#localnetworkgateway)
* **peer**: [SubResource](#subresource)
* **provisioningState**: string (ReadOnly)
* **resourceGuid**: string
* **routingWeight**: int
* **sharedKey**: string
* **tunnelConnectionStatus**: [TunnelConnectionHealth](#tunnelconnectionhealth)[] (ReadOnly)
* **usePolicyBasedTrafficSelectors**: bool
* **virtualNetworkGateway1**: [VirtualNetworkGateway](#virtualnetworkgateway) (Required)
* **virtualNetworkGateway2**: [VirtualNetworkGateway](#virtualnetworkgateway)

## IpsecPolicy
### Properties
* **dhGroup**: 'DHGroup1' | 'DHGroup14' | 'DHGroup2' | 'DHGroup2048' | 'DHGroup24' | 'ECP256' | 'ECP384' | 'None' (Required)
* **ikeEncryption**: 'AES128' | 'AES192' | 'AES256' | 'DES' | 'DES3' (Required)
* **ikeIntegrity**: 'MD5' | 'SHA1' | 'SHA256' | 'SHA384' (Required)
* **ipsecEncryption**: 'AES128' | 'AES192' | 'AES256' | 'DES' | 'DES3' | 'GCMAES128' | 'GCMAES192' | 'GCMAES256' | 'None' (Required)
* **ipsecIntegrity**: 'GCMAES128' | 'GCMAES192' | 'GCMAES256' | 'MD5' | 'SHA1' | 'SHA256' (Required)
* **pfsGroup**: 'ECP256' | 'ECP384' | 'None' | 'PFS1' | 'PFS2' | 'PFS2048' | 'PFS24' (Required)
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
* **name**: 'Basic' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | 'VpnGw1' | 'VpnGw2' | 'VpnGw3'
* **tier**: 'Basic' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | 'VpnGw1' | 'VpnGw2' | 'VpnGw3'

## VpnClientConfiguration
### Properties
* **radiusServerAddress**: string
* **radiusServerSecret**: string
* **vpnClientAddressPool**: [AddressSpace](#addressspace)
* **vpnClientProtocols**: 'IkeV2' | 'SSTP'[]
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
* **ipv6PeeringConfig**: [Ipv6ExpressRouteCircuitPeeringConfig](#ipv6expressroutecircuitpeeringconfig)
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

## Ipv6ExpressRouteCircuitPeeringConfig
### Properties
* **microsoftPeeringConfig**: [ExpressRouteCircuitPeeringConfig](#expressroutecircuitpeeringconfig)
* **primaryPeerAddressPrefix**: string
* **routeFilter**: [RouteFilter](#routefilter)
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
* **peerings**: [ExpressRouteCircuitPeering](#expressroutecircuitpeering)[]
* **provisioningState**: string (ReadOnly)
* **rules**: [RouteFilterRule](#routefilterrule)[]

## RouteFilterRule
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **location**: string
* **name**: string
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
* **zones**: string[]

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
* **protocol**: 'All' | 'Tcp' | 'Udp' (Required)
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
* **disableOutboundSnat**: bool
* **enableFloatingIP**: bool
* **frontendIPConfiguration**: [SubResource](#subresource)
* **frontendPort**: int (Required)
* **idleTimeoutInMinutes**: int
* **loadDistribution**: 'Default' | 'SourceIP' | 'SourceIPProtocol'
* **probe**: [SubResource](#subresource)
* **protocol**: 'All' | 'Tcp' | 'Udp' (Required)
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
* **enableDdosProtection**: bool
* **enableVmProtection**: bool
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
* **remoteAddressSpace**: [AddressSpace](#addressspace)
* **remoteVirtualNetwork**: [SubResource](#subresource)
* **useRemoteGateways**: bool

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

