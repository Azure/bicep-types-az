# Microsoft.Network @ 2015-05-01-preview

## Resource Microsoft.Network/applicationGateways@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationGatewayPropertiesFormat](#applicationgatewaypropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/applicationGateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/connections@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualNetworkGatewayConnectionPropertiesFormat](#virtualnetworkgatewayconnectionpropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/connections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCircuits@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: '' (Required, DeployTimeConstant)
* **properties**: [ExpressRouteCircuitPropertiesFormat](#expressroutecircuitpropertiesformat)
* **sku**: [ExpressRouteCircuitSku](#expressroutecircuitsku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/expressRouteCircuits' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCircuits/authorizations@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AuthorizationPropertiesFormat](#authorizationpropertiesformat)
* **type**: 'Microsoft.Network/expressRouteCircuits/authorizations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/expressRouteCircuits/peerings@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExpressRouteCircuitPeeringPropertiesFormat](#expressroutecircuitpeeringpropertiesformat)
* **type**: 'Microsoft.Network/expressRouteCircuits/peerings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/loadBalancers@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LoadBalancerPropertiesFormat](#loadbalancerpropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/loadBalancers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/localNetworkGateways@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LocalNetworkGatewayPropertiesFormat](#localnetworkgatewaypropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/localNetworkGateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkInterfaces@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/networkInterfaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkSecurityGroups@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NetworkSecurityGroupPropertiesFormat](#networksecuritygrouppropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/networkSecurityGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/networkSecurityGroups/securityRules@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SecurityRulePropertiesFormat](#securityrulepropertiesformat)
* **type**: 'Microsoft.Network/networkSecurityGroups/securityRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/publicIPAddresses@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: '' (Required, DeployTimeConstant)
* **properties**: [PublicIpAddressPropertiesFormat](#publicipaddresspropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/publicIPAddresses' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/routeTables@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RouteTablePropertiesFormat](#routetablepropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/routeTables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/routeTables/routes@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RoutePropertiesFormat](#routepropertiesformat)
* **type**: 'Microsoft.Network/routeTables/routes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualnetworkgateways@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualNetworkGatewayPropertiesFormat](#virtualnetworkgatewaypropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/virtualnetworkgateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualnetworks@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualNetworkPropertiesFormat](#virtualnetworkpropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/virtualnetworks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/virtualnetworks/subnets@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SubnetPropertiesFormat](#subnetpropertiesformat)
* **type**: 'Microsoft.Network/virtualnetworks/subnets' (ReadOnly, DeployTimeConstant)

## ApplicationGatewayPropertiesFormat
### Properties
* **backendAddressPools**: [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)[]
* **backendHttpSettingsCollection**: [ApplicationGatewayBackendHttpSettings](#applicationgatewaybackendhttpsettings)[]
* **frontendIPConfigurations**: [ApplicationGatewayFrontendIPConfiguration](#applicationgatewayfrontendipconfiguration)[]
* **frontendPorts**: [ApplicationGatewayFrontendPort](#applicationgatewayfrontendport)[]
* **gatewayIPConfigurations**: [ApplicationGatewayIPConfiguration](#applicationgatewayipconfiguration)[]
* **httpListeners**: [ApplicationGatewayHttpListener](#applicationgatewayhttplistener)[]
* **operationalState**: 'Running' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **provisioningState**: string
* **requestRoutingRules**: [ApplicationGatewayRequestRoutingRule](#applicationgatewayrequestroutingrule)[]
* **resourceGuid**: string
* **sku**: [ApplicationGatewaySku](#applicationgatewaysku)
* **sslCertificates**: [ApplicationGatewaySslCertificate](#applicationgatewaysslcertificate)[]

## ApplicationGatewayBackendAddressPool
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ApplicationGatewayBackendAddressPoolPropertiesFormat](#applicationgatewaybackendaddresspoolpropertiesformat)

## ApplicationGatewayBackendAddressPoolPropertiesFormat
### Properties
* **backendAddresses**: [ApplicationGatewayBackendAddress](#applicationgatewaybackendaddress)[]
* **backendIPConfigurations**: [SubResource](#subresource)[]
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
* **properties**: [ApplicationGatewayBackendHttpSettingsPropertiesFormat](#applicationgatewaybackendhttpsettingspropertiesformat)

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
* **protocol**: 'Http' | 'Https'
* **provisioningState**: string
* **sslCertificate**: [SubResource](#subresource)

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
* **properties**: [ApplicationGatewaySslCertificatePropertiesFormat](#applicationgatewaysslcertificatepropertiesformat)

## ApplicationGatewaySslCertificatePropertiesFormat
### Properties
* **data**: string
* **password**: string
* **provisioningState**: string
* **publicCertData**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualNetworkGatewayConnectionPropertiesFormat
### Properties
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown'
* **connectionType**: 'ExpressRoute' | 'IPsec' | 'Vnet2Vnet' | 'VPNClient'
* **egressBytesTransferred**: int
* **ingressBytesTransferred**: int
* **localNetworkGateway2**: [LocalNetworkGateway](#localnetworkgateway)
* **peer**: [SubResource](#subresource)
* **provisioningState**: string
* **resourceGuid**: string
* **routingWeight**: int
* **sharedKey**: string
* **virtualNetworkGateway1**: [VirtualNetworkGateway](#virtualnetworkgateway)
* **virtualNetworkGateway2**: [VirtualNetworkGateway](#virtualnetworkgateway)

## LocalNetworkGateway
### Properties
* **etag**: string
* **id**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (ReadOnly)
* **properties**: [LocalNetworkGatewayPropertiesFormat](#localnetworkgatewaypropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: string (ReadOnly)

## LocalNetworkGatewayPropertiesFormat
### Properties
* **gatewayIpAddress**: string
* **localNetworkAddressSpace**: [AddressSpace](#addressspace)
* **provisioningState**: string
* **resourceGuid**: string

## AddressSpace
### Properties
* **addressPrefixes**: string[]

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualNetworkGateway
### Properties
* **etag**: string
* **id**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (ReadOnly)
* **properties**: [VirtualNetworkGatewayPropertiesFormat](#virtualnetworkgatewaypropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: string (ReadOnly)

## VirtualNetworkGatewayPropertiesFormat
### Properties
* **enableBgp**: bool
* **gatewayDefaultSite**: [SubResource](#subresource)
* **gatewayType**: 'ExpressRoute' | 'Vpn'
* **ipConfigurations**: [VirtualNetworkGatewayIpConfiguration](#virtualnetworkgatewayipconfiguration)[]
* **provisioningState**: string
* **resourceGuid**: string
* **vpnType**: 'PolicyBased' | 'RouteBased'

## VirtualNetworkGatewayIpConfiguration
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [VirtualNetworkGatewayIpConfigurationPropertiesFormat](#virtualnetworkgatewayipconfigurationpropertiesformat)

## VirtualNetworkGatewayIpConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: string
* **publicIPAddress**: [SubResource](#subresource)
* **subnet**: [SubResource](#subresource)

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
* **authorizations**: [ExpressRouteCircuitAuthorization](#expressroutecircuitauthorization)[]
* **circuitProvisioningState**: string
* **peerings**: [ExpressRouteCircuitPeering](#expressroutecircuitpeering)[]
* **provisioningState**: string
* **serviceKey**: string
* **serviceProviderNotes**: string
* **serviceProviderProperties**: [ExpressRouteCircuitServiceProviderProperties](#expressroutecircuitserviceproviderproperties)
* **serviceProviderProvisioningState**: 'Deprovisioning' | 'NotProvisioned' | 'Provisioned' | 'Provisioning'

## ExpressRouteCircuitAuthorization
### Properties
* **etag**: string
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
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [ExpressRouteCircuitPeeringPropertiesFormat](#expressroutecircuitpeeringpropertiesformat)

## ExpressRouteCircuitPeeringPropertiesFormat
### Properties
* **azureASN**: int
* **microsoftPeeringConfig**: [ExpressRouteCircuitPeeringConfig](#expressroutecircuitpeeringconfig)
* **peerASN**: int
* **peeringType**: 'AzurePrivatePeering' | 'AzurePublicPeering' | 'MicrosoftPeering'
* **primaryAzurePort**: string
* **primaryPeerAddressPrefix**: string
* **provisioningState**: string
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

## ExpressRouteCircuitStats
### Properties
* **bytesIn**: int
* **bytesOut**: int

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
* **frontendIPConfigurations**: [FrontendIpConfiguration](#frontendipconfiguration)[]
* **inboundNatPools**: [InboundNatPool](#inboundnatpool)[]
* **inboundNatRules**: [InboundNatRule](#inboundnatrule)[]
* **loadBalancingRules**: [LoadBalancingRule](#loadbalancingrule)[]
* **outboundNatRules**: [OutboundNatRule](#outboundnatrule)[]
* **probes**: [Probe](#probe)[]
* **provisioningState**: string
* **resourceGuid**: string

## BackendAddressPool
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [BackendAddressPoolPropertiesFormat](#backendaddresspoolpropertiesformat)

## BackendAddressPoolPropertiesFormat
### Properties
* **backendIPConfigurations**: [SubResource](#subresource)[]
* **loadBalancingRules**: [SubResource](#subresource)[]
* **outboundNatRule**: [SubResource](#subresource)
* **provisioningState**: string

## FrontendIpConfiguration
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [FrontendIpConfigurationPropertiesFormat](#frontendipconfigurationpropertiesformat)

## FrontendIpConfigurationPropertiesFormat
### Properties
* **inboundNatPools**: [SubResource](#subresource)[]
* **inboundNatRules**: [SubResource](#subresource)[]
* **loadBalancingRules**: [SubResource](#subresource)[]
* **outboundNatRules**: [SubResource](#subresource)[]
* **privateIPAddress**: string
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: string
* **publicIPAddress**: [SubResource](#subresource)
* **subnet**: [SubResource](#subresource)

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

## InboundNatRule
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [InboundNatRulePropertiesFormat](#inboundnatrulepropertiesformat)

## InboundNatRulePropertiesFormat
### Properties
* **backendIPConfiguration**: [SubResource](#subresource)
* **backendPort**: int
* **enableFloatingIP**: bool (Required)
* **frontendIPConfiguration**: [SubResource](#subresource)
* **frontendPort**: int (Required)
* **idleTimeoutInMinutes**: int
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
* **backendAddressPool**: [SubResource](#subresource) (Required)
* **backendPort**: int
* **enableFloatingIP**: bool (Required)
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
* **allocatedOutboundPorts**: int (Required)
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
* **loadBalancingRules**: [SubResource](#subresource)[]
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

## NetworkInterfacePropertiesFormat
### Properties
* **dnsSettings**: [NetworkInterfaceDnsSettings](#networkinterfacednssettings)
* **enableIPForwarding**: bool
* **ipConfigurations**: [NetworkInterfaceIpConfiguration](#networkinterfaceipconfiguration)[]
* **macAddress**: string
* **networkSecurityGroup**: [SubResource](#subresource)
* **primary**: bool
* **provisioningState**: string
* **resourceGuid**: string
* **virtualMachine**: [SubResource](#subresource)

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
* **properties**: [NetworkInterfaceIpConfigurationPropertiesFormat](#networkinterfaceipconfigurationpropertiesformat)

## NetworkInterfaceIpConfigurationPropertiesFormat
### Properties
* **loadBalancerBackendAddressPools**: [SubResource](#subresource)[]
* **loadBalancerInboundNatRules**: [SubResource](#subresource)[]
* **privateIPAddress**: string
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: string
* **publicIPAddress**: [SubResource](#subresource)
* **subnet**: [SubResource](#subresource)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NetworkSecurityGroupPropertiesFormat
### Properties
* **defaultSecurityRules**: [SecurityRule](#securityrule)[]
* **networkInterfaces**: [SubResource](#subresource)[]
* **provisioningState**: string
* **resourceGuid**: string
* **securityRules**: [SecurityRule](#securityrule)[]
* **subnets**: [SubResource](#subresource)[]

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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PublicIpAddressPropertiesFormat
### Properties
* **dnsSettings**: [PublicIpAddressDnsSettings](#publicipaddressdnssettings)
* **idleTimeoutInMinutes**: int
* **ipAddress**: string
* **ipConfiguration**: [SubResource](#subresource)
* **provisioningState**: string
* **publicIPAllocationMethod**: 'Dynamic' | 'Static' (Required)
* **resourceGuid**: string

## PublicIpAddressDnsSettings
### Properties
* **domainNameLabel**: string
* **fqdn**: string
* **reverseFqdn**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RouteTablePropertiesFormat
### Properties
* **provisioningState**: string
* **routes**: [Route](#route)[]
* **subnets**: [SubResource](#subresource)[]

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

## VirtualNetworkPropertiesFormat
### Properties
* **addressSpace**: [AddressSpace](#addressspace)
* **dhcpOptions**: [DhcpOptions](#dhcpoptions)
* **provisioningState**: string
* **resourceGuid**: string
* **subnets**: [Subnet](#subnet)[]

## DhcpOptions
### Properties
* **dnsServers**: string[]

## Subnet
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: [SubnetPropertiesFormat](#subnetpropertiesformat)

## SubnetPropertiesFormat
### Properties
* **addressPrefix**: string (Required)
* **ipConfigurations**: [SubResource](#subresource)[]
* **networkSecurityGroup**: [SubResource](#subresource)
* **provisioningState**: string
* **routeTable**: [SubResource](#subresource)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

