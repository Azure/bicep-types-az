# Microsoft.Network @ 2018-07-01

## Microsoft.Network/applicationGateways
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationGatewayPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/applicationGateways' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## ApplicationGatewayPropertiesFormat
### Properties
* **authenticationCertificates**: ApplicationGatewayAuthenticationCertificate[]
* **autoscaleConfiguration**: ApplicationGatewayAutoscaleConfiguration
* **backendAddressPools**: ApplicationGatewayBackendAddressPool[]
* **backendHttpSettingsCollection**: ApplicationGatewayBackendHttpSettings[]
* **enableFips**: bool
* **enableHttp2**: bool
* **frontendIPConfigurations**: ApplicationGatewayFrontendIPConfiguration[]
* **frontendPorts**: ApplicationGatewayFrontendPort[]
* **gatewayIPConfigurations**: ApplicationGatewayIPConfiguration[]
* **httpListeners**: ApplicationGatewayHttpListener[]
* **operationalState**: 'Running' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **probes**: ApplicationGatewayProbe[]
* **provisioningState**: string
* **redirectConfigurations**: ApplicationGatewayRedirectConfiguration[]
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
* **type**: string

## ApplicationGatewayAuthenticationCertificatePropertiesFormat
### Properties
* **data**: string
* **provisioningState**: string

## ApplicationGatewayAutoscaleConfiguration
### Properties
* **bounds**: ApplicationGatewayAutoscaleBounds (Required)

## ApplicationGatewayAutoscaleBounds
### Properties
* **max**: int (Required)
* **min**: int (Required)

## ApplicationGatewayBackendAddressPool
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayBackendAddressPoolPropertiesFormat
* **type**: string

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
* **applicationSecurityGroups**: ApplicationSecurityGroup[]
* **loadBalancerBackendAddressPools**: BackendAddressPool[]
* **loadBalancerInboundNatRules**: InboundNatRule[]
* **primary**: bool
* **privateIPAddress**: string
* **privateIPAddressVersion**: 'IPv4' | 'IPv6'
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: string
* **publicIPAddress**: PublicIPAddress
* **subnet**: Subnet

## ApplicationSecurityGroup
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: ApplicationSecurityGroupPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## ApplicationSecurityGroupPropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly)
* **resourceGuid**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

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
* **outboundRule**: SubResource (ReadOnly)
* **outboundRules**: SubResource[] (ReadOnly)
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
* **enableTcpReset**: bool
* **frontendIPConfiguration**: SubResource
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
* **properties**: PublicIPAddressPropertiesFormat
* **sku**: PublicIPAddressSku
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)
* **zones**: string[]

## PublicIPAddressPropertiesFormat
### Properties
* **dnsSettings**: PublicIPAddressDnsSettings
* **idleTimeoutInMinutes**: int
* **ipAddress**: string
* **ipConfiguration**: IPConfiguration (ReadOnly)
* **ipTags**: IpTag[]
* **provisioningState**: string
* **publicIPAddressVersion**: 'IPv4' | 'IPv6'
* **publicIPAllocationMethod**: 'Dynamic' | 'Static'
* **publicIPPrefix**: SubResource
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
* **serviceEndpointPolicies**: ServiceEndpointPolicy[]
* **serviceEndpoints**: ServiceEndpointPropertiesFormat[]

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
* **destinationAddressPrefix**: string
* **destinationAddressPrefixes**: string[]
* **destinationApplicationSecurityGroups**: ApplicationSecurityGroup[]
* **destinationPortRange**: string
* **destinationPortRanges**: string[]
* **direction**: 'Inbound' | 'Outbound' (Required)
* **priority**: int
* **protocol**: '*' | 'Tcp' | 'Udp' (Required)
* **provisioningState**: string
* **sourceAddressPrefix**: string
* **sourceAddressPrefixes**: string[]
* **sourceApplicationSecurityGroups**: ApplicationSecurityGroup[]
* **sourcePortRange**: string
* **sourcePortRanges**: string[]

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
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
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
* **disableBgpRoutePropagation**: bool
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
### Additional Properties
* **Additional Properties Type**: string

## ServiceEndpointPolicy
### Properties
* **etag**: string
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: ServiceEndpointPolicyPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## ServiceEndpointPolicyPropertiesFormat
### Properties
* **provisioningState**: string
* **resourceGuid**: string
* **serviceEndpointPolicyDefinitions**: ServiceEndpointPolicyDefinition[]

## ServiceEndpointPolicyDefinition
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ServiceEndpointPolicyDefinitionPropertiesFormat

## ServiceEndpointPolicyDefinitionPropertiesFormat
### Properties
* **description**: string
* **provisioningState**: string
* **service**: string
* **serviceResources**: string[]

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ServiceEndpointPropertiesFormat
### Properties
* **locations**: string[]
* **provisioningState**: string
* **service**: string

## IpTag
### Properties
* **ipTagType**: string
* **tag**: string

## PublicIPAddressSku
### Properties
* **name**: 'Basic' | 'Standard'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ApplicationGatewayBackendHttpSettings
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayBackendHttpSettingsPropertiesFormat
* **type**: string

## ApplicationGatewayBackendHttpSettingsPropertiesFormat
### Properties
* **affinityCookieName**: string
* **authenticationCertificates**: SubResource[]
* **connectionDraining**: ApplicationGatewayConnectionDraining
* **cookieBasedAffinity**: 'Disabled' | 'Enabled'
* **hostName**: string
* **path**: string
* **pickHostNameFromBackendAddress**: bool
* **port**: int
* **probe**: SubResource
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
* **properties**: ApplicationGatewayFrontendIPConfigurationPropertiesFormat
* **type**: string

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
* **properties**: ApplicationGatewayIPConfigurationPropertiesFormat
* **type**: string

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
* **type**: string

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
* **type**: string

## ApplicationGatewayProbePropertiesFormat
### Properties
* **host**: string
* **interval**: int
* **match**: ApplicationGatewayProbeHealthResponseMatch
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
* **properties**: ApplicationGatewayRedirectConfigurationPropertiesFormat
* **type**: string

## ApplicationGatewayRedirectConfigurationPropertiesFormat
### Properties
* **includePath**: bool
* **includeQueryString**: bool
* **pathRules**: SubResource[]
* **redirectType**: 'Found' | 'Permanent' | 'SeeOther' | 'Temporary'
* **requestRoutingRules**: SubResource[]
* **targetListener**: SubResource
* **targetUrl**: string
* **urlPathMaps**: SubResource[]

## ApplicationGatewayRequestRoutingRule
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayRequestRoutingRulePropertiesFormat
* **type**: string

## ApplicationGatewayRequestRoutingRulePropertiesFormat
### Properties
* **backendAddressPool**: SubResource
* **backendHttpSettings**: SubResource
* **httpListener**: SubResource
* **provisioningState**: string
* **redirectConfiguration**: SubResource
* **ruleType**: 'Basic' | 'PathBasedRouting'
* **urlPathMap**: SubResource

## ApplicationGatewaySku
### Properties
* **capacity**: int
* **name**: 'Standard_Large' | 'Standard_Medium' | 'Standard_Small' | 'Standard_v2' | 'WAF_Large' | 'WAF_Medium' | 'WAF_v2'
* **tier**: 'Standard' | 'Standard_v2' | 'WAF' | 'WAF_v2'

## ApplicationGatewaySslCertificate
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ApplicationGatewaySslCertificatePropertiesFormat
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
* **properties**: ApplicationGatewayUrlPathMapPropertiesFormat
* **type**: string

## ApplicationGatewayUrlPathMapPropertiesFormat
### Properties
* **defaultBackendAddressPool**: SubResource
* **defaultBackendHttpSettings**: SubResource
* **defaultRedirectConfiguration**: SubResource
* **pathRules**: ApplicationGatewayPathRule[]
* **provisioningState**: string

## ApplicationGatewayPathRule
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayPathRulePropertiesFormat
* **type**: string

## ApplicationGatewayPathRulePropertiesFormat
### Properties
* **backendAddressPool**: SubResource
* **backendHttpSettings**: SubResource
* **paths**: string[]
* **provisioningState**: string
* **redirectConfiguration**: SubResource

## ApplicationGatewayWebApplicationFirewallConfiguration
### Properties
* **disabledRuleGroups**: ApplicationGatewayFirewallDisabledRuleGroup[]
* **enabled**: bool (Required)
* **firewallMode**: 'Detection' | 'Prevention' (Required)
* **maxRequestBodySize**: int
* **requestBodyCheck**: bool
* **ruleSetType**: string (Required)
* **ruleSetVersion**: string (Required)

## ApplicationGatewayFirewallDisabledRuleGroup
### Properties
* **ruleGroupName**: string (Required)
* **rules**: int[]

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/applicationSecurityGroups
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationSecurityGroupPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/applicationSecurityGroups' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/azureFirewalls
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: AzureFirewallPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/azureFirewalls' (ReadOnly, DeployTimeConstant)

## AzureFirewallPropertiesFormat
### Properties
* **applicationRuleCollections**: AzureFirewallApplicationRuleCollection[]
* **ipConfigurations**: AzureFirewallIPConfiguration[]
* **networkRuleCollections**: AzureFirewallNetworkRuleCollection[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## AzureFirewallApplicationRuleCollection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: AzureFirewallApplicationRuleCollectionPropertiesFormat

## AzureFirewallApplicationRuleCollectionPropertiesFormat
### Properties
* **action**: AzureFirewallRCAction
* **priority**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **rules**: AzureFirewallApplicationRule[]

## AzureFirewallRCAction
### Properties
* **type**: 'Allow' | 'Deny'

## AzureFirewallApplicationRule
### Properties
* **description**: string
* **name**: string
* **protocols**: AzureFirewallApplicationRuleProtocol[]
* **sourceAddresses**: string[]
* **targetUrls**: string[]

## AzureFirewallApplicationRuleProtocol
### Properties
* **port**: int
* **protocolType**: 'Http' | 'Https'

## AzureFirewallIPConfiguration
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: AzureFirewallIPConfigurationPropertiesFormat

## AzureFirewallIPConfigurationPropertiesFormat
### Properties
* **internalPublicIpAddress**: SubResource
* **privateIPAddress**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **publicIPAddress**: SubResource
* **subnet**: SubResource

## AzureFirewallNetworkRuleCollection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: AzureFirewallNetworkRuleCollectionPropertiesFormat

## AzureFirewallNetworkRuleCollectionPropertiesFormat
### Properties
* **action**: AzureFirewallRCAction
* **priority**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **rules**: AzureFirewallNetworkRule[]

## AzureFirewallNetworkRule
### Properties
* **description**: string
* **destinationAddresses**: string[]
* **destinationPorts**: string[]
* **name**: string
* **protocols**: 'Any' | 'ICMP' | 'TCP' | 'UDP'[]
* **sourceAddresses**: string[]

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/connections/sharedkey
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Network/connections/sharedkey' (ReadOnly, DeployTimeConstant)
* **value**: string (Required)

## Microsoft.Network/connections
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualNetworkGatewayConnectionPropertiesFormat (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/connections' (ReadOnly, DeployTimeConstant)

## VirtualNetworkGatewayConnectionPropertiesFormat
### Properties
* **authorizationKey**: string
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' (ReadOnly)
* **connectionType**: 'ExpressRoute' | 'IPsec' | 'VPNClient' | 'Vnet2Vnet' (Required)
* **egressBytesTransferred**: int (ReadOnly)
* **enableBgp**: bool
* **expressRouteGatewayBypass**: bool
* **ingressBytesTransferred**: int (ReadOnly)
* **ipsecPolicies**: IpsecPolicy[]
* **localNetworkGateway2**: LocalNetworkGateway
* **peer**: SubResource
* **provisioningState**: string (ReadOnly)
* **resourceGuid**: string
* **routingWeight**: int
* **sharedKey**: string
* **tunnelConnectionStatus**: TunnelConnectionHealth[] (ReadOnly)
* **usePolicyBasedTrafficSelectors**: bool
* **virtualNetworkGateway1**: VirtualNetworkGateway (Required)
* **virtualNetworkGateway2**: VirtualNetworkGateway

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
* **properties**: LocalNetworkGatewayPropertiesFormat (Required)
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## LocalNetworkGatewayPropertiesFormat
### Properties
* **bgpSettings**: BgpSettings
* **gatewayIpAddress**: string
* **localNetworkAddressSpace**: AddressSpace
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
* **gatewayType**: 'ExpressRoute' | 'Vpn'
* **ipConfigurations**: VirtualNetworkGatewayIPConfiguration[]
* **provisioningState**: string (ReadOnly)
* **resourceGuid**: string
* **sku**: VirtualNetworkGatewaySku
* **vpnClientConfiguration**: VpnClientConfiguration
* **vpnType**: 'PolicyBased' | 'RouteBased'

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
* **publicIPAddress**: SubResource
* **subnet**: SubResource

## VirtualNetworkGatewaySku
### Properties
* **capacity**: int
* **name**: 'Basic' | 'ErGw1AZ' | 'ErGw2AZ' | 'ErGw3AZ' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | 'VpnGw1' | 'VpnGw1AZ' | 'VpnGw2' | 'VpnGw2AZ' | 'VpnGw3' | 'VpnGw3AZ'
* **tier**: 'Basic' | 'ErGw1AZ' | 'ErGw2AZ' | 'ErGw3AZ' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | 'VpnGw1' | 'VpnGw1AZ' | 'VpnGw2' | 'VpnGw2AZ' | 'VpnGw3' | 'VpnGw3AZ'

## VpnClientConfiguration
### Properties
* **radiusServerAddress**: string
* **radiusServerSecret**: string
* **vpnClientAddressPool**: AddressSpace
* **vpnClientIpsecPolicies**: IpsecPolicy[]
* **vpnClientProtocols**: 'IkeV2' | 'OpenVPN' | 'SSTP'[]
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
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/ddosProtectionPlans
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: DdosProtectionPlanPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/ddosProtectionPlans' (ReadOnly, DeployTimeConstant)

## DdosProtectionPlanPropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly)
* **resourceGuid**: string (ReadOnly)
* **virtualNetworks**: SubResource[] (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/expressRouteCircuits/authorizations
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AuthorizationPropertiesFormat
* **type**: 'Microsoft.Network/expressRouteCircuits/authorizations' (ReadOnly, DeployTimeConstant)

## AuthorizationPropertiesFormat
### Properties
* **authorizationKey**: string
* **authorizationUseStatus**: 'Available' | 'InUse'
* **provisioningState**: string

## Microsoft.Network/expressRouteCircuits/peerings/connections
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExpressRouteCircuitConnectionPropertiesFormat
* **type**: 'Microsoft.Network/expressRouteCircuits/peerings/connections' (ReadOnly, DeployTimeConstant)

## ExpressRouteCircuitConnectionPropertiesFormat
### Properties
* **addressPrefix**: string
* **authorizationKey**: string
* **circuitConnectionStatus**: 'Connected' | 'Connecting' | 'Disconnected' (ReadOnly)
* **expressRouteCircuitPeering**: SubResource
* **peerExpressRouteCircuitPeering**: SubResource
* **provisioningState**: string (ReadOnly)

## Microsoft.Network/expressRouteCircuits/peerings
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExpressRouteCircuitPeeringPropertiesFormat
* **type**: 'Microsoft.Network/expressRouteCircuits/peerings' (ReadOnly, DeployTimeConstant)

## ExpressRouteCircuitPeeringPropertiesFormat
### Properties
* **azureASN**: int
* **connections**: ExpressRouteCircuitConnection[]
* **gatewayManagerEtag**: string
* **ipv6PeeringConfig**: Ipv6ExpressRouteCircuitPeeringConfig
* **lastModifiedBy**: string
* **microsoftPeeringConfig**: ExpressRouteCircuitPeeringConfig
* **peerASN**: int
* **peeringType**: 'AzurePrivatePeering' | 'AzurePublicPeering' | 'MicrosoftPeering'
* **primaryAzurePort**: string
* **primaryPeerAddressPrefix**: string
* **provisioningState**: string
* **routeFilter**: RouteFilter
* **secondaryAzurePort**: string
* **secondaryPeerAddressPrefix**: string
* **sharedKey**: string
* **state**: 'Disabled' | 'Enabled'
* **stats**: ExpressRouteCircuitStats
* **vlanId**: int

## ExpressRouteCircuitConnection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ExpressRouteCircuitConnectionPropertiesFormat

## Ipv6ExpressRouteCircuitPeeringConfig
### Properties
* **microsoftPeeringConfig**: ExpressRouteCircuitPeeringConfig
* **primaryPeerAddressPrefix**: string
* **routeFilter**: RouteFilter
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
* **properties**: RouteFilterPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## RouteFilterPropertiesFormat
### Properties
* **peerings**: ExpressRouteCircuitPeering[]
* **provisioningState**: string (ReadOnly)
* **rules**: RouteFilterRule[]

## ExpressRouteCircuitPeering
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ExpressRouteCircuitPeeringPropertiesFormat

## RouteFilterRule
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **location**: string
* **name**: string
* **properties**: RouteFilterRulePropertiesFormat

## RouteFilterRulePropertiesFormat
### Properties
* **access**: 'Allow' | 'Deny' (Required)
* **communities**: string[] (Required)
* **provisioningState**: string (ReadOnly)
* **routeFilterRuleType**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ExpressRouteCircuitStats
### Properties
* **primarybytesIn**: int
* **primarybytesOut**: int
* **secondarybytesIn**: int
* **secondarybytesOut**: int

## Microsoft.Network/expressRouteCircuits
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExpressRouteCircuitPropertiesFormat
* **sku**: ExpressRouteCircuitSku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/expressRouteCircuits' (ReadOnly, DeployTimeConstant)

## ExpressRouteCircuitPropertiesFormat
### Properties
* **allowClassicOperations**: bool
* **allowGlobalReach**: bool
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
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: AuthorizationPropertiesFormat

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

## Microsoft.Network/expressRouteCrossConnections/peerings
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExpressRouteCrossConnectionPeeringProperties
* **type**: 'Microsoft.Network/expressRouteCrossConnections/peerings' (ReadOnly, DeployTimeConstant)

## ExpressRouteCrossConnectionPeeringProperties
### Properties
* **azureASN**: int (ReadOnly)
* **gatewayManagerEtag**: string
* **ipv6PeeringConfig**: Ipv6ExpressRouteCircuitPeeringConfig
* **lastModifiedBy**: string
* **microsoftPeeringConfig**: ExpressRouteCircuitPeeringConfig
* **peerASN**: int
* **peeringType**: 'AzurePrivatePeering' | 'AzurePublicPeering' | 'MicrosoftPeering'
* **primaryAzurePort**: string (ReadOnly)
* **primaryPeerAddressPrefix**: string
* **provisioningState**: string (ReadOnly)
* **secondaryAzurePort**: string (ReadOnly)
* **secondaryPeerAddressPrefix**: string
* **sharedKey**: string
* **state**: 'Disabled' | 'Enabled'
* **vlanId**: int

## Microsoft.Network/expressRouteCrossConnections
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExpressRouteCrossConnectionProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/expressRouteCrossConnections' (ReadOnly, DeployTimeConstant)

## ExpressRouteCrossConnectionProperties
### Properties
* **bandwidthInMbps**: int
* **expressRouteCircuit**: ExpressRouteCircuitReference
* **peeringLocation**: string
* **peerings**: ExpressRouteCrossConnectionPeering[]
* **primaryAzurePort**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **sTag**: int (ReadOnly)
* **secondaryAzurePort**: string (ReadOnly)
* **serviceProviderNotes**: string
* **serviceProviderProvisioningState**: 'Deprovisioning' | 'NotProvisioned' | 'Provisioned' | 'Provisioning'

## ExpressRouteCircuitReference
### Properties
* **id**: string

## ExpressRouteCrossConnectionPeering
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ExpressRouteCrossConnectionPeeringProperties

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/loadBalancers/inboundNatRules
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: InboundNatRulePropertiesFormat
* **type**: 'Microsoft.Network/loadBalancers/inboundNatRules' (ReadOnly, DeployTimeConstant)

## Microsoft.Network/loadBalancers
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: LoadBalancerPropertiesFormat
* **sku**: LoadBalancerSku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/loadBalancers' (ReadOnly, DeployTimeConstant)

## LoadBalancerPropertiesFormat
### Properties
* **backendAddressPools**: BackendAddressPool[]
* **frontendIPConfigurations**: FrontendIPConfiguration[]
* **inboundNatPools**: InboundNatPool[]
* **inboundNatRules**: InboundNatRule[]
* **loadBalancingRules**: LoadBalancingRule[]
* **outboundRules**: OutboundRule[]
* **probes**: Probe[]
* **provisioningState**: string
* **resourceGuid**: string

## FrontendIPConfiguration
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: FrontendIPConfigurationPropertiesFormat
* **zones**: string[]

## FrontendIPConfigurationPropertiesFormat
### Properties
* **inboundNatPools**: SubResource[] (ReadOnly)
* **inboundNatRules**: SubResource[] (ReadOnly)
* **loadBalancingRules**: SubResource[] (ReadOnly)
* **outboundRules**: SubResource[] (ReadOnly)
* **privateIPAddress**: string
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: string
* **publicIPAddress**: PublicIPAddress
* **publicIPPrefix**: SubResource
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
* **enableFloatingIP**: bool
* **enableTcpReset**: bool
* **frontendIPConfiguration**: SubResource
* **frontendPortRangeEnd**: int (Required)
* **frontendPortRangeStart**: int (Required)
* **idleTimeoutInMinutes**: int
* **protocol**: 'All' | 'Tcp' | 'Udp' (Required)
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
* **disableOutboundSnat**: bool
* **enableFloatingIP**: bool
* **enableTcpReset**: bool
* **frontendIPConfiguration**: SubResource
* **frontendPort**: int (Required)
* **idleTimeoutInMinutes**: int
* **loadDistribution**: 'Default' | 'SourceIP' | 'SourceIPProtocol'
* **probe**: SubResource
* **protocol**: 'All' | 'Tcp' | 'Udp' (Required)
* **provisioningState**: string

## OutboundRule
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: OutboundRulePropertiesFormat

## OutboundRulePropertiesFormat
### Properties
* **allocatedOutboundPorts**: int
* **backendAddressPool**: SubResource (Required)
* **enableTcpReset**: bool
* **frontendIPConfigurations**: SubResource[] (Required)
* **idleTimeoutInMinutes**: int
* **protocol**: 'All' | 'Tcp' | 'Udp' (Required)
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
* **protocol**: 'Http' | 'Https' | 'Tcp' (Required)
* **provisioningState**: string
* **requestPath**: string

## LoadBalancerSku
### Properties
* **name**: 'Basic' | 'Standard'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/localNetworkGateways
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: LocalNetworkGatewayPropertiesFormat (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/localNetworkGateways' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/networkInterfaces
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: NetworkInterfacePropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/networkInterfaces' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/networkSecurityGroups/securityRules
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SecurityRulePropertiesFormat
* **type**: 'Microsoft.Network/networkSecurityGroups/securityRules' (ReadOnly, DeployTimeConstant)

## Microsoft.Network/networkSecurityGroups
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: NetworkSecurityGroupPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/networkSecurityGroups' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/networkWatchers/connectionMonitors
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConnectionMonitorParameters (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/networkWatchers/connectionMonitors' (ReadOnly, DeployTimeConstant)

## ConnectionMonitorParameters
### Properties
* **autoStart**: bool
* **destination**: ConnectionMonitorDestination (Required)
* **monitoringIntervalInSeconds**: int
* **monitoringStatus**: string (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **source**: ConnectionMonitorSource (Required)
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
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/networkWatchers/packetCaptures
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PacketCaptureParameters (Required)
* **type**: 'Microsoft.Network/networkWatchers/packetCaptures' (ReadOnly, DeployTimeConstant)

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

## Microsoft.Network/networkWatchers
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: NetworkWatcherPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/networkWatchers' (ReadOnly, DeployTimeConstant)

## NetworkWatcherPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/publicIPAddresses
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PublicIPAddressPropertiesFormat
* **sku**: PublicIPAddressSku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/publicIPAddresses' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/publicIPPrefixes
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PublicIPPrefixPropertiesFormat
* **sku**: PublicIPPrefixSku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/publicIPPrefixes' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## PublicIPPrefixPropertiesFormat
### Properties
* **ipPrefix**: string
* **ipTags**: IpTag[]
* **loadBalancerFrontendIpConfiguration**: SubResource (ReadOnly)
* **prefixLength**: int
* **provisioningState**: string
* **publicIPAddressVersion**: 'IPv4' | 'IPv6'
* **publicIPAddresses**: ReferencedPublicIpAddress[]
* **resourceGuid**: string

## ReferencedPublicIpAddress
### Properties
* **id**: string

## PublicIPPrefixSku
### Properties
* **name**: 'Standard'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/routeFilters/routeFilterRules
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: RouteFilterRulePropertiesFormat
* **type**: 'Microsoft.Network/routeFilters/routeFilterRules' (ReadOnly, DeployTimeConstant)

## Microsoft.Network/routeFilters
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: RouteFilterPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/routeFilters' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/routeTables/routes
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RoutePropertiesFormat
* **type**: 'Microsoft.Network/routeTables/routes' (ReadOnly, DeployTimeConstant)

## Microsoft.Network/routeTables
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: RouteTablePropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/routeTables' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServiceEndpointPolicyDefinitionPropertiesFormat
* **type**: 'Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions' (ReadOnly, DeployTimeConstant)

## Microsoft.Network/serviceEndpointPolicies
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServiceEndpointPolicyPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/serviceEndpointPolicies' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/virtualHubs
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualHubProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/virtualHubs' (ReadOnly, DeployTimeConstant)

## VirtualHubProperties
### Properties
* **addressPrefix**: string
* **hubVirtualNetworkConnections**: HubVirtualNetworkConnection[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **virtualWan**: SubResource

## HubVirtualNetworkConnection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: HubVirtualNetworkConnectionProperties
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## HubVirtualNetworkConnectionProperties
### Properties
* **allowHubToRemoteVnetTransit**: bool
* **allowRemoteVnetToUseHubVnetGateways**: bool
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **remoteVirtualNetwork**: SubResource

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/virtualNetworkGateways
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualNetworkGatewayPropertiesFormat (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/virtualNetworkGateways' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/virtualNetworks/subnets
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SubnetPropertiesFormat
* **type**: 'Microsoft.Network/virtualNetworks/subnets' (ReadOnly, DeployTimeConstant)

## Microsoft.Network/virtualNetworks/virtualNetworkPeerings
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualNetworkPeeringPropertiesFormat
* **type**: 'Microsoft.Network/virtualNetworks/virtualNetworkPeerings' (ReadOnly, DeployTimeConstant)

## VirtualNetworkPeeringPropertiesFormat
### Properties
* **allowForwardedTraffic**: bool
* **allowGatewayTransit**: bool
* **allowVirtualNetworkAccess**: bool
* **peeringState**: 'Connected' | 'Disconnected' | 'Initiated'
* **provisioningState**: string
* **remoteAddressSpace**: AddressSpace
* **remoteVirtualNetwork**: SubResource
* **useRemoteGateways**: bool

## Microsoft.Network/virtualNetworks
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualNetworkPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/virtualNetworks' (ReadOnly, DeployTimeConstant)

## VirtualNetworkPropertiesFormat
### Properties
* **addressSpace**: AddressSpace
* **ddosProtectionPlan**: SubResource
* **dhcpOptions**: DhcpOptions
* **enableDdosProtection**: bool
* **enableVmProtection**: bool
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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/virtualWans
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualWanProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/virtualWans' (ReadOnly, DeployTimeConstant)

## VirtualWanProperties
### Properties
* **disableVpnEncryption**: bool
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **virtualHubs**: SubResource[] (ReadOnly)
* **vpnSites**: SubResource[] (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/vpnGateways/vpnConnections
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VpnConnectionProperties
* **type**: 'Microsoft.Network/vpnGateways/vpnConnections' (ReadOnly, DeployTimeConstant)

## VpnConnectionProperties
### Properties
* **connectionBandwidthInMbps**: int (ReadOnly)
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown'
* **egressBytesTransferred**: int (ReadOnly)
* **enableBgp**: bool
* **ingressBytesTransferred**: int (ReadOnly)
* **ipsecPolicies**: IpsecPolicy[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **remoteVpnSite**: SubResource
* **routingWeight**: int
* **sharedKey**: string

## Microsoft.Network/vpnGateways
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VpnGatewayProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/vpnGateways' (ReadOnly, DeployTimeConstant)

## VpnGatewayProperties
### Properties
* **bgpSettings**: BgpSettings
* **connections**: VpnConnection[]
* **policies**: Policies
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **virtualHub**: SubResource

## VpnConnection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: VpnConnectionProperties

## Policies
### Properties
* **allowBranchToBranchTraffic**: bool
* **allowVnetToVnetTraffic**: bool

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/vpnSites
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VpnSiteProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/vpnSites' (ReadOnly, DeployTimeConstant)

## VpnSiteProperties
### Properties
* **addressSpace**: AddressSpace
* **bgpProperties**: BgpSettings
* **deviceProperties**: DeviceProperties
* **ipAddress**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **siteKey**: string
* **virtualWAN**: SubResource

## DeviceProperties
### Properties
* **deviceModel**: string
* **deviceVendor**: string
* **linkSpeedInMbps**: int

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

