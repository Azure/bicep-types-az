# Microsoft.Network @ 2019-08-01

## Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: WebApplicationFirewallPolicyPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies' (ReadOnly, DeployTimeConstant)

## WebApplicationFirewallPolicyPropertiesFormat
### Properties
* **applicationGateways**: ApplicationGateway[] (ReadOnly)
* **customRules**: WebApplicationFirewallCustomRule[]
* **managedRules**: ManagedRulesDefinition (Required)
* **policySettings**: PolicySettings
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly)

## ApplicationGateway
### Properties
* **etag**: string
* **id**: string
* **identity**: ManagedServiceIdentity
* **location**: string
* **name**: string (ReadOnly)
* **properties**: ApplicationGatewayPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)
* **zones**: string[]

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned'
* **userAssignedIdentities**: Dictionary<string,Schemas239UserAssignedIdentitiesValue>

## Dictionary<string,Schemas239UserAssignedIdentitiesValue>
### Additional Properties
* **Additional Properties Type**: schemas:239_userAssignedIdentitiesValue

## schemas:239_userAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## ApplicationGatewayPropertiesFormat
### Properties
* **authenticationCertificates**: ApplicationGatewayAuthenticationCertificate[]
* **autoscaleConfiguration**: ApplicationGatewayAutoscaleConfiguration
* **backendAddressPools**: ApplicationGatewayBackendAddressPool[]
* **backendHttpSettingsCollection**: ApplicationGatewayBackendHttpSettings[]
* **customErrorConfigurations**: ApplicationGatewayCustomError[]
* **enableFips**: bool
* **enableHttp2**: bool
* **firewallPolicy**: SubResource
* **frontendIPConfigurations**: ApplicationGatewayFrontendIPConfiguration[]
* **frontendPorts**: ApplicationGatewayFrontendPort[]
* **gatewayIPConfigurations**: ApplicationGatewayIPConfiguration[]
* **httpListeners**: ApplicationGatewayHttpListener[]
* **operationalState**: 'Running' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **probes**: ApplicationGatewayProbe[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **redirectConfigurations**: ApplicationGatewayRedirectConfiguration[]
* **requestRoutingRules**: ApplicationGatewayRequestRoutingRule[]
* **resourceGuid**: string
* **rewriteRuleSets**: ApplicationGatewayRewriteRuleSet[]
* **sku**: ApplicationGatewaySku
* **sslCertificates**: ApplicationGatewaySslCertificate[]
* **sslPolicy**: ApplicationGatewaySslPolicy
* **trustedRootCertificates**: ApplicationGatewayTrustedRootCertificate[]
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## ApplicationGatewayAutoscaleConfiguration
### Properties
* **maxCapacity**: int
* **minCapacity**: int (Required)

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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

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
* **privateLinkConnectionProperties**: NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **publicIPAddress**: PublicIPAddress
* **subnet**: Subnet
* **virtualNetworkTaps**: VirtualNetworkTap[]

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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
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
* **type**: string (ReadOnly)

## BackendAddressPoolPropertiesFormat
### Properties
* **backendIPConfigurations**: NetworkInterfaceIPConfiguration[] (ReadOnly)
* **loadBalancingRules**: SubResource[] (ReadOnly)
* **outboundRule**: SubResource (ReadOnly)
* **outboundRules**: SubResource[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## SubResource
### Properties
* **id**: string

## InboundNatRule
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: InboundNatRulePropertiesFormat
* **type**: string (ReadOnly)

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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties
### Properties
* **fqdns**: string[] (ReadOnly)
* **groupId**: string (ReadOnly)
* **requiredMemberName**: string (ReadOnly)

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
* **ddosSettings**: DdosSettings
* **dnsSettings**: PublicIPAddressDnsSettings
* **idleTimeoutInMinutes**: int
* **ipAddress**: string
* **ipConfiguration**: IPConfiguration (ReadOnly)
* **ipTags**: IpTag[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **publicIPAddressVersion**: 'IPv4' | 'IPv6'
* **publicIPAllocationMethod**: 'Dynamic' | 'Static'
* **publicIPPrefix**: SubResource
* **resourceGuid**: string

## DdosSettings
### Properties
* **ddosCustomPolicy**: SubResource
* **protectionCoverage**: 'Basic' | 'Standard'

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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
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
* **addressPrefixes**: string[]
* **delegations**: Delegation[]
* **ipConfigurationProfiles**: IPConfigurationProfile[] (ReadOnly)
* **ipConfigurations**: IPConfiguration[] (ReadOnly)
* **natGateway**: SubResource
* **networkSecurityGroup**: NetworkSecurityGroup
* **privateEndpointNetworkPolicies**: string
* **privateEndpoints**: PrivateEndpoint[] (ReadOnly)
* **privateLinkServiceNetworkPolicies**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **purpose**: string (ReadOnly)
* **resourceNavigationLinks**: ResourceNavigationLink[]
* **routeTable**: RouteTable
* **serviceAssociationLinks**: ServiceAssociationLink[]
* **serviceEndpointPolicies**: ServiceEndpointPolicy[]
* **serviceEndpoints**: ServiceEndpointPropertiesFormat[]

## Delegation
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ServiceDelegationPropertiesFormat

## ServiceDelegationPropertiesFormat
### Properties
* **actions**: string[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **serviceName**: string

## IPConfigurationProfile
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: IPConfigurationProfilePropertiesFormat
* **type**: string (ReadOnly)

## IPConfigurationProfilePropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **subnet**: Subnet

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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
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
* **protocol**: '*' | 'Ah' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' (Required)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
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
* **hostedWorkloads**: string[] (ReadOnly)
* **ipConfigurations**: NetworkInterfaceIPConfiguration[]
* **macAddress**: string
* **networkSecurityGroup**: NetworkSecurityGroup
* **primary**: bool
* **privateEndpoint**: PrivateEndpoint (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **resourceGuid**: string
* **tapConfigurations**: NetworkInterfaceTapConfiguration[]
* **virtualMachine**: SubResource (ReadOnly)

## NetworkInterfaceDnsSettings
### Properties
* **appliedDnsServers**: string[]
* **dnsServers**: string[]
* **internalDnsNameLabel**: string
* **internalDomainNameSuffix**: string
* **internalFqdn**: string

## PrivateEndpoint
### Properties
* **etag**: string
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: PrivateEndpointProperties
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## PrivateEndpointProperties
### Properties
* **manualPrivateLinkServiceConnections**: PrivateLinkServiceConnection[]
* **networkInterfaces**: NetworkInterface[] (ReadOnly)
* **privateLinkServiceConnections**: PrivateLinkServiceConnection[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **subnet**: Subnet

## PrivateLinkServiceConnection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: PrivateLinkServiceConnectionProperties
* **type**: string (ReadOnly)

## PrivateLinkServiceConnectionProperties
### Properties
* **groupIds**: string[]
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionState
* **privateLinkServiceId**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **requestMessage**: string

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string
* **description**: string
* **status**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## NetworkInterfaceTapConfiguration
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: NetworkInterfaceTapConfigurationPropertiesFormat
* **type**: string (ReadOnly)

## NetworkInterfaceTapConfigurationPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **virtualNetworkTap**: VirtualNetworkTap

## VirtualNetworkTap
### Properties
* **etag**: string
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: VirtualNetworkTapPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## VirtualNetworkTapPropertiesFormat
### Properties
* **destinationLoadBalancerFrontEndIPConfiguration**: FrontendIPConfiguration
* **destinationNetworkInterfaceIPConfiguration**: NetworkInterfaceIPConfiguration
* **destinationPort**: int
* **networkInterfaceTapConfigurations**: NetworkInterfaceTapConfiguration[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)

## FrontendIPConfiguration
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: FrontendIPConfigurationPropertiesFormat
* **type**: string (ReadOnly)
* **zones**: string[]

## FrontendIPConfigurationPropertiesFormat
### Properties
* **inboundNatPools**: SubResource[] (ReadOnly)
* **inboundNatRules**: SubResource[] (ReadOnly)
* **loadBalancingRules**: SubResource[] (ReadOnly)
* **outboundRules**: SubResource[] (ReadOnly)
* **privateIPAddress**: string
* **privateIPAddressVersion**: 'IPv4' | 'IPv6'
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **publicIPAddress**: PublicIPAddress
* **publicIPPrefix**: SubResource
* **subnet**: Subnet

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

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
* **type**: string (ReadOnly)

## ResourceNavigationLinkFormat
### Properties
* **link**: string
* **linkedResourceType**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ServiceAssociationLink
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ServiceAssociationLinkPropertiesFormat
* **type**: string

## ServiceAssociationLinkPropertiesFormat
### Properties
* **allowDelete**: bool
* **link**: string
* **linkedResourceType**: string
* **locations**: string[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)
* **serviceEndpointPolicyDefinitions**: ServiceEndpointPolicyDefinition[]
* **subnets**: Subnet[] (ReadOnly)

## ServiceEndpointPolicyDefinition
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ServiceEndpointPolicyDefinitionPropertiesFormat

## ServiceEndpointPolicyDefinitionPropertiesFormat
### Properties
* **description**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **service**: string
* **serviceResources**: string[]

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ServiceEndpointPropertiesFormat
### Properties
* **locations**: string[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **requestTimeout**: int
* **trustedRootCertificates**: SubResource[]

## ApplicationGatewayConnectionDraining
### Properties
* **drainTimeoutInSec**: int (Required)
* **enabled**: bool (Required)

## ApplicationGatewayCustomError
### Properties
* **customErrorPageUrl**: string
* **statusCode**: 'HttpStatus403' | 'HttpStatus502'

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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## ApplicationGatewayIPConfiguration
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayIPConfigurationPropertiesFormat
* **type**: string

## ApplicationGatewayIPConfigurationPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
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
* **customErrorConfigurations**: ApplicationGatewayCustomError[]
* **frontendIPConfiguration**: SubResource
* **frontendPort**: SubResource
* **hostName**: string
* **protocol**: 'Http' | 'Https'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
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
* **port**: int
* **protocol**: 'Http' | 'Https'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
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
* **priority**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **redirectConfiguration**: SubResource
* **rewriteRuleSet**: SubResource
* **ruleType**: 'Basic' | 'PathBasedRouting'
* **urlPathMap**: SubResource

## ApplicationGatewayRewriteRuleSet
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayRewriteRuleSetPropertiesFormat

## ApplicationGatewayRewriteRuleSetPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **rewriteRules**: ApplicationGatewayRewriteRule[]

## ApplicationGatewayRewriteRule
### Properties
* **actionSet**: ApplicationGatewayRewriteRuleActionSet
* **conditions**: ApplicationGatewayRewriteRuleCondition[]
* **name**: string
* **ruleSequence**: int

## ApplicationGatewayRewriteRuleActionSet
### Properties
* **requestHeaderConfigurations**: ApplicationGatewayHeaderConfiguration[]
* **responseHeaderConfigurations**: ApplicationGatewayHeaderConfiguration[]

## ApplicationGatewayHeaderConfiguration
### Properties
* **headerName**: string
* **headerValue**: string

## ApplicationGatewayRewriteRuleCondition
### Properties
* **ignoreCase**: bool
* **negate**: bool
* **pattern**: string
* **variable**: string

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
* **keyVaultSecretId**: string
* **password**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **publicCertData**: string

## ApplicationGatewaySslPolicy
### Properties
* **cipherSuites**: 'TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA256' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA256' | 'TLS_DHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_DHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_RSA_WITH_3DES_EDE_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_RSA_WITH_AES_256_CBC_SHA' | 'TLS_RSA_WITH_AES_256_CBC_SHA256' | 'TLS_RSA_WITH_AES_256_GCM_SHA384'[]
* **disabledSslProtocols**: 'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2'[]
* **minProtocolVersion**: 'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2'
* **policyName**: 'AppGwSslPolicy20150501' | 'AppGwSslPolicy20170401' | 'AppGwSslPolicy20170401S'
* **policyType**: 'Custom' | 'Predefined'

## ApplicationGatewayTrustedRootCertificate
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ApplicationGatewayTrustedRootCertificatePropertiesFormat
* **type**: string

## ApplicationGatewayTrustedRootCertificatePropertiesFormat
### Properties
* **data**: string
* **keyVaultSecretId**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

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
* **defaultRewriteRuleSet**: SubResource
* **pathRules**: ApplicationGatewayPathRule[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **redirectConfiguration**: SubResource
* **rewriteRuleSet**: SubResource

## ApplicationGatewayWebApplicationFirewallConfiguration
### Properties
* **disabledRuleGroups**: ApplicationGatewayFirewallDisabledRuleGroup[]
* **enabled**: bool (Required)
* **exclusions**: ApplicationGatewayFirewallExclusion[]
* **fileUploadLimitInMb**: int
* **firewallMode**: 'Detection' | 'Prevention' (Required)
* **maxRequestBodySize**: int
* **maxRequestBodySizeInKb**: int
* **requestBodyCheck**: bool
* **ruleSetType**: string (Required)
* **ruleSetVersion**: string (Required)

## ApplicationGatewayFirewallDisabledRuleGroup
### Properties
* **ruleGroupName**: string (Required)
* **rules**: int[]

## ApplicationGatewayFirewallExclusion
### Properties
* **matchVariable**: string (Required)
* **selector**: string (Required)
* **selectorMatchOperator**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## WebApplicationFirewallCustomRule
### Properties
* **action**: 'Allow' | 'Block' | 'Log' (Required)
* **etag**: string (ReadOnly)
* **matchConditions**: MatchCondition[] (Required)
* **name**: string
* **priority**: int (Required)
* **ruleType**: 'Invalid' | 'MatchRule' (Required)

## MatchCondition
### Properties
* **matchValues**: string[] (Required)
* **matchVariables**: MatchVariable[] (Required)
* **negationConditon**: bool
* **operator**: 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'IPMatch' | 'LessThan' | 'LessThanOrEqual' | 'Regex' (Required)
* **transforms**: 'HtmlEntityDecode' | 'Lowercase' | 'RemoveNulls' | 'Trim' | 'UrlDecode' | 'UrlEncode'[]

## MatchVariable
### Properties
* **selector**: string
* **variableName**: 'PostArgs' | 'QueryString' | 'RemoteAddr' | 'RequestBody' | 'RequestCookies' | 'RequestHeaders' | 'RequestMethod' | 'RequestUri' (Required)

## ManagedRulesDefinition
### Properties
* **exclusions**: OwaspCrsExclusionEntry[]
* **managedRuleSets**: ManagedRuleSet[] (Required)

## OwaspCrsExclusionEntry
### Properties
* **matchVariable**: 'RequestArgNames' | 'RequestCookieNames' | 'RequestHeaderNames' (Required)
* **selector**: string (Required)
* **selectorMatchOperator**: 'Contains' | 'EndsWith' | 'Equals' | 'EqualsAny' | 'StartsWith' (Required)

## ManagedRuleSet
### Properties
* **ruleGroupOverrides**: ManagedRuleGroupOverride[]
* **ruleSetType**: string (Required)
* **ruleSetVersion**: string (Required)

## ManagedRuleGroupOverride
### Properties
* **ruleGroupName**: string (Required)
* **rules**: ManagedRuleOverride[]

## ManagedRuleOverride
### Properties
* **ruleId**: string (Required)
* **state**: 'Disabled'

## PolicySettings
### Properties
* **fileUploadLimitInMb**: int
* **maxRequestBodySizeInKb**: int
* **mode**: 'Detection' | 'Prevention'
* **requestBodyCheck**: bool
* **state**: 'Disabled' | 'Enabled'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/ExpressRoutePorts
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ManagedServiceIdentity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExpressRoutePortPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/ExpressRoutePorts' (ReadOnly, DeployTimeConstant)

## ExpressRoutePortPropertiesFormat
### Properties
* **allocationDate**: string (ReadOnly)
* **bandwidthInGbps**: int
* **circuits**: SubResource[] (ReadOnly)
* **encapsulation**: 'Dot1Q' | 'QinQ'
* **etherType**: string (ReadOnly)
* **links**: ExpressRouteLink[]
* **mtu**: string (ReadOnly)
* **peeringLocation**: string
* **provisionedBandwidthInGbps**: int (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string

## ExpressRouteLink
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ExpressRouteLinkPropertiesFormat

## ExpressRouteLinkPropertiesFormat
### Properties
* **adminState**: 'Disabled' | 'Enabled'
* **connectorType**: 'LC' | 'SC' (ReadOnly)
* **interfaceName**: string (ReadOnly)
* **macSecConfig**: ExpressRouteLinkMacSecConfig
* **patchPanelId**: string (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **rackId**: string (ReadOnly)
* **routerName**: string (ReadOnly)

## ExpressRouteLinkMacSecConfig
### Properties
* **cakSecretIdentifier**: string
* **cipher**: 'gcm-aes-128' | 'gcm-aes-256'
* **cknSecretIdentifier**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/applicationGateways
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ManagedServiceIdentity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationGatewayPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/applicationGateways' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/applicationSecurityGroups
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
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
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: AzureFirewallPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/azureFirewalls' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## AzureFirewallPropertiesFormat
### Properties
* **applicationRuleCollections**: AzureFirewallApplicationRuleCollection[]
* **firewallPolicy**: SubResource
* **hubIpAddresses**: HubIPAddresses (ReadOnly)
* **ipConfigurations**: AzureFirewallIPConfiguration[]
* **natRuleCollections**: AzureFirewallNatRuleCollection[]
* **networkRuleCollections**: AzureFirewallNetworkRuleCollection[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **sku**: AzureFirewallSku
* **threatIntelMode**: 'Alert' | 'Deny' | 'Off'
* **virtualHub**: SubResource

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
* **fqdnTags**: string[]
* **name**: string
* **protocols**: AzureFirewallApplicationRuleProtocol[]
* **sourceAddresses**: string[]
* **targetFqdns**: string[]

## AzureFirewallApplicationRuleProtocol
### Properties
* **port**: int
* **protocolType**: 'Http' | 'Https' | 'Mssql'

## HubIPAddresses
### Properties
* **privateIPAddress**: string
* **publicIPAddresses**: AzureFirewallPublicIPAddress[]

## AzureFirewallPublicIPAddress
### Properties
* **address**: string

## AzureFirewallIPConfiguration
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: AzureFirewallIPConfigurationPropertiesFormat

## AzureFirewallIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **publicIPAddress**: SubResource
* **subnet**: SubResource

## AzureFirewallNatRuleCollection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: AzureFirewallNatRuleCollectionProperties

## AzureFirewallNatRuleCollectionProperties
### Properties
* **action**: AzureFirewallNatRCAction
* **priority**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **rules**: AzureFirewallNatRule[]

## AzureFirewallNatRCAction
### Properties
* **type**: 'Dnat' | 'Snat'

## AzureFirewallNatRule
### Properties
* **description**: string
* **destinationAddresses**: string[]
* **destinationPorts**: string[]
* **name**: string
* **protocols**: 'Any' | 'ICMP' | 'TCP' | 'UDP'[]
* **sourceAddresses**: string[]
* **translatedAddress**: string
* **translatedPort**: string

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

## AzureFirewallSku
### Properties
* **name**: 'AZFW_Hub' | 'AZFW_VNet'
* **tier**: 'Standard'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/bastionHosts
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: BastionHostPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/bastionHosts' (ReadOnly, DeployTimeConstant)

## BastionHostPropertiesFormat
### Properties
* **dnsName**: string
* **ipConfigurations**: BastionHostIPConfiguration[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## BastionHostIPConfiguration
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: BastionHostIPConfigurationPropertiesFormat
* **type**: string (ReadOnly)

## BastionHostIPConfigurationPropertiesFormat
### Properties
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **publicIPAddress**: SubResource (Required)
* **subnet**: SubResource (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/connections/sharedkey
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Network/connections/sharedkey' (ReadOnly, DeployTimeConstant)
* **value**: string (Required)

## Microsoft.Network/connections
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
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
* **connectionProtocol**: 'IKEv1' | 'IKEv2'
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' (ReadOnly)
* **connectionType**: 'ExpressRoute' | 'IPsec' | 'VPNClient' | 'Vnet2Vnet' (Required)
* **egressBytesTransferred**: int (ReadOnly)
* **enableBgp**: bool
* **expressRouteGatewayBypass**: bool
* **ingressBytesTransferred**: int (ReadOnly)
* **ipsecPolicies**: IpsecPolicy[]
* **localNetworkGateway2**: LocalNetworkGateway
* **peer**: SubResource
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string
* **routingWeight**: int
* **sharedKey**: string
* **trafficSelectorPolicies**: TrafficSelectorPolicy[]
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
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

## TrafficSelectorPolicy
### Properties
* **localAddressRanges**: string[] (Required)
* **remoteAddressRanges**: string[] (Required)

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
* **customRoutes**: AddressSpace
* **enableBgp**: bool
* **enableDnsForwarding**: bool
* **gatewayDefaultSite**: SubResource
* **gatewayType**: 'ExpressRoute' | 'Vpn'
* **inboundDnsForwardingEndpoint**: string (ReadOnly)
* **ipConfigurations**: VirtualNetworkGatewayIPConfiguration[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string
* **sku**: VirtualNetworkGatewaySku
* **vpnClientConfiguration**: VpnClientConfiguration
* **vpnGatewayGeneration**: 'Generation1' | 'Generation2' | 'None'
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicIPAddress**: SubResource
* **subnet**: SubResource

## VirtualNetworkGatewaySku
### Properties
* **capacity**: int
* **name**: 'Basic' | 'ErGw1AZ' | 'ErGw2AZ' | 'ErGw3AZ' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | 'VpnGw1' | 'VpnGw1AZ' | 'VpnGw2' | 'VpnGw2AZ' | 'VpnGw3' | 'VpnGw3AZ' | 'VpnGw4' | 'VpnGw4AZ' | 'VpnGw5' | 'VpnGw5AZ'
* **tier**: 'Basic' | 'ErGw1AZ' | 'ErGw2AZ' | 'ErGw3AZ' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | 'VpnGw1' | 'VpnGw1AZ' | 'VpnGw2' | 'VpnGw2AZ' | 'VpnGw3' | 'VpnGw3AZ' | 'VpnGw4' | 'VpnGw4AZ' | 'VpnGw5' | 'VpnGw5AZ'

## VpnClientConfiguration
### Properties
* **aadAudience**: string
* **aadIssuer**: string
* **aadTenant**: string
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **thumbprint**: string

## VpnClientRootCertificate
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: VpnClientRootCertificatePropertiesFormat (Required)

## VpnClientRootCertificatePropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicCertData**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/ddosCustomPolicies
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: DdosCustomPolicyPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/ddosCustomPolicies' (ReadOnly, DeployTimeConstant)

## DdosCustomPolicyPropertiesFormat
### Properties
* **protocolCustomSettings**: ProtocolCustomSettingsFormat[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicIPAddresses**: SubResource[] (ReadOnly)
* **resourceGuid**: string (ReadOnly)

## ProtocolCustomSettingsFormat
### Properties
* **protocol**: 'Syn' | 'Tcp' | 'Udp'
* **sourceRateOverride**: string
* **triggerRateOverride**: string
* **triggerSensitivityOverride**: 'Default' | 'High' | 'Low' | 'Relaxed'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/ddosProtectionPlans
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)
* **virtualNetworks**: SubResource[] (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/expressRouteCircuits/authorizations
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## Microsoft.Network/expressRouteCircuits/peerings/connections
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
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
* **circuitConnectionStatus**: 'Connected' | 'Connecting' | 'Disconnected'
* **expressRouteCircuitPeering**: SubResource
* **peerExpressRouteCircuitPeering**: SubResource
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Microsoft.Network/expressRouteCircuits/peerings
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
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
* **expressRouteConnection**: ExpressRouteConnectionId
* **gatewayManagerEtag**: string
* **ipv6PeeringConfig**: Ipv6ExpressRouteCircuitPeeringConfig
* **lastModifiedBy**: string
* **microsoftPeeringConfig**: ExpressRouteCircuitPeeringConfig
* **peerASN**: int
* **peeredConnections**: PeerExpressRouteCircuitConnection[] (ReadOnly)
* **peeringType**: 'AzurePrivatePeering' | 'AzurePublicPeering' | 'MicrosoftPeering'
* **primaryAzurePort**: string
* **primaryPeerAddressPrefix**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **routeFilter**: SubResource
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
* **type**: string (ReadOnly)

## ExpressRouteConnectionId
### Properties
* **id**: string (ReadOnly)

## Ipv6ExpressRouteCircuitPeeringConfig
### Properties
* **microsoftPeeringConfig**: ExpressRouteCircuitPeeringConfig
* **primaryPeerAddressPrefix**: string
* **routeFilter**: SubResource
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

## PeerExpressRouteCircuitConnection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: PeerExpressRouteCircuitConnectionPropertiesFormat
* **type**: string (ReadOnly)

## PeerExpressRouteCircuitConnectionPropertiesFormat
### Properties
* **addressPrefix**: string
* **authResourceGuid**: string
* **circuitConnectionStatus**: 'Connected' | 'Connecting' | 'Disconnected'
* **connectionName**: string
* **expressRouteCircuitPeering**: SubResource
* **peerExpressRouteCircuitPeering**: SubResource
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ExpressRouteCircuitStats
### Properties
* **primarybytesIn**: int
* **primarybytesOut**: int
* **secondarybytesIn**: int
* **secondarybytesOut**: int

## Microsoft.Network/expressRouteCircuits
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
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
* **authorizations**: ExpressRouteCircuitAuthorization[]
* **bandwidthInGbps**: int
* **circuitProvisioningState**: string
* **expressRoutePort**: SubResource
* **gatewayManagerEtag**: string
* **globalReachEnabled**: bool
* **peerings**: ExpressRouteCircuitPeering[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **serviceKey**: string
* **serviceProviderNotes**: string
* **serviceProviderProperties**: ExpressRouteCircuitServiceProviderProperties
* **serviceProviderProvisioningState**: 'Deprovisioning' | 'NotProvisioned' | 'Provisioned' | 'Provisioning'
* **stag**: int (ReadOnly)

## ExpressRouteCircuitAuthorization
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: AuthorizationPropertiesFormat
* **type**: string (ReadOnly)

## ExpressRouteCircuitPeering
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: ExpressRouteCircuitPeeringPropertiesFormat
* **type**: string (ReadOnly)

## ExpressRouteCircuitServiceProviderProperties
### Properties
* **bandwidthInMbps**: int
* **peeringLocation**: string
* **serviceProviderName**: string

## ExpressRouteCircuitSku
### Properties
* **family**: 'MeteredData' | 'UnlimitedData'
* **name**: string
* **tier**: 'Basic' | 'Local' | 'Premium' | 'Standard'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/expressRouteCrossConnections/peerings
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **secondaryAzurePort**: string (ReadOnly)
* **secondaryPeerAddressPrefix**: string
* **sharedKey**: string
* **state**: 'Disabled' | 'Enabled'
* **vlanId**: int

## Microsoft.Network/expressRouteCrossConnections
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
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

## Microsoft.Network/expressRouteGateways/expressRouteConnections
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExpressRouteConnectionProperties
* **type**: 'Microsoft.Network/expressRouteGateways/expressRouteConnections' (ReadOnly, DeployTimeConstant)

## ExpressRouteConnectionProperties
### Properties
* **authorizationKey**: string
* **expressRouteCircuitPeering**: ExpressRouteCircuitPeeringId (Required)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **routingWeight**: int

## ExpressRouteCircuitPeeringId
### Properties
* **id**: string

## Microsoft.Network/expressRouteGateways
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExpressRouteGatewayProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/expressRouteGateways' (ReadOnly, DeployTimeConstant)

## ExpressRouteGatewayProperties
### Properties
* **autoScaleConfiguration**: schemas:168_autoScaleConfiguration
* **expressRouteConnections**: ExpressRouteConnection[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **virtualHub**: VirtualHubId (Required)

## schemas:168_autoScaleConfiguration
### Properties
* **bounds**: schemas:168_autoScaleConfiguration_bounds

## schemas:168_autoScaleConfiguration_bounds
### Properties
* **max**: int
* **min**: int

## ExpressRouteConnection
### Properties
* **id**: string
* **name**: string (Required)
* **properties**: ExpressRouteConnectionProperties

## VirtualHubId
### Properties
* **id**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/firewallPolicies/ruleGroups
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: FirewallPolicyRuleGroupProperties
* **type**: 'Microsoft.Network/firewallPolicies/ruleGroups' (ReadOnly, DeployTimeConstant)

## FirewallPolicyRuleGroupProperties
### Properties
* **priority**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **rules**: FirewallPolicyRule[]

## FirewallPolicyRule
* **Discriminator**: ruleType
### Base Properties
* **name**: string
* **priority**: int
### FirewallPolicyFilterRule
#### Properties
* **action**: FirewallPolicyFilterRuleAction
* **ruleConditions**: FirewallPolicyRuleCondition[]
* **ruleType**: 'FirewallPolicyFilterRule' (Required)

### FirewallPolicyNatRule
#### Properties
* **action**: FirewallPolicyNatRuleAction
* **ruleCondition**: FirewallPolicyRuleCondition
* **ruleType**: 'FirewallPolicyNatRule' (Required)
* **translatedAddress**: string
* **translatedPort**: string


## FirewallPolicyFilterRule
### Properties
* **action**: FirewallPolicyFilterRuleAction
* **ruleConditions**: FirewallPolicyRuleCondition[]
* **ruleType**: 'FirewallPolicyFilterRule' (Required)

## FirewallPolicyFilterRuleAction
### Properties
* **type**: 'Allow' | 'Deny'

## FirewallPolicyRuleCondition
* **Discriminator**: ruleConditionType
### Base Properties
* **description**: string
* **name**: string
### ApplicationRuleCondition
#### Properties
* **destinationAddresses**: string[]
* **fqdnTags**: string[]
* **protocols**: FirewallPolicyRuleConditionApplicationProtocol[]
* **ruleConditionType**: 'ApplicationRuleCondition' (Required)
* **sourceAddresses**: string[]
* **targetFqdns**: string[]

### NetworkRuleCondition
#### Properties
* **destinationAddresses**: string[]
* **destinationPorts**: string[]
* **ipProtocols**: 'Any' | 'ICMP' | 'TCP' | 'UDP'[]
* **ruleConditionType**: 'NetworkRuleCondition' (Required)
* **sourceAddresses**: string[]


## ApplicationRuleCondition
### Properties
* **destinationAddresses**: string[]
* **fqdnTags**: string[]
* **protocols**: FirewallPolicyRuleConditionApplicationProtocol[]
* **ruleConditionType**: 'ApplicationRuleCondition' (Required)
* **sourceAddresses**: string[]
* **targetFqdns**: string[]

## FirewallPolicyRuleConditionApplicationProtocol
### Properties
* **port**: int
* **protocolType**: 'Http' | 'Https'

## NetworkRuleCondition
### Properties
* **destinationAddresses**: string[]
* **destinationPorts**: string[]
* **ipProtocols**: 'Any' | 'ICMP' | 'TCP' | 'UDP'[]
* **ruleConditionType**: 'NetworkRuleCondition' (Required)
* **sourceAddresses**: string[]

## FirewallPolicyNatRule
### Properties
* **action**: FirewallPolicyNatRuleAction
* **ruleCondition**: FirewallPolicyRuleCondition
* **ruleType**: 'FirewallPolicyNatRule' (Required)
* **translatedAddress**: string
* **translatedPort**: string

## FirewallPolicyNatRuleAction
### Properties
* **type**: 'DNAT'

## Microsoft.Network/firewallPolicies
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: FirewallPolicyPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/firewallPolicies' (ReadOnly, DeployTimeConstant)

## FirewallPolicyPropertiesFormat
### Properties
* **basePolicy**: SubResource
* **childPolicies**: SubResource[] (ReadOnly)
* **firewalls**: SubResource[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **ruleGroups**: SubResource[] (ReadOnly)
* **threatIntelMode**: 'Alert' | 'Deny' | 'Off'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/loadBalancers/inboundNatRules
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: InboundNatRulePropertiesFormat
* **type**: 'Microsoft.Network/loadBalancers/inboundNatRules' (ReadOnly, DeployTimeConstant)

## Microsoft.Network/loadBalancers
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **resourceGuid**: string

## InboundNatPool
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: InboundNatPoolPropertiesFormat
* **type**: string (ReadOnly)

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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## LoadBalancingRule
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: LoadBalancingRulePropertiesFormat
* **type**: string (ReadOnly)

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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## OutboundRule
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: OutboundRulePropertiesFormat
* **type**: string (ReadOnly)

## OutboundRulePropertiesFormat
### Properties
* **allocatedOutboundPorts**: int
* **backendAddressPool**: SubResource (Required)
* **enableTcpReset**: bool
* **frontendIPConfigurations**: SubResource[] (Required)
* **idleTimeoutInMinutes**: int
* **protocol**: 'All' | 'Tcp' | 'Udp' (Required)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## Probe
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ProbePropertiesFormat
* **type**: string (ReadOnly)

## ProbePropertiesFormat
### Properties
* **intervalInSeconds**: int
* **loadBalancingRules**: SubResource[] (ReadOnly)
* **numberOfProbes**: int
* **port**: int (Required)
* **protocol**: 'Http' | 'Https' | 'Tcp' (Required)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **requestPath**: string

## LoadBalancerSku
### Properties
* **name**: 'Basic' | 'Standard'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/localNetworkGateways
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
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

## Microsoft.Network/natGateways
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: NatGatewayPropertiesFormat
* **sku**: NatGatewaySku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/natGateways' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## NatGatewayPropertiesFormat
### Properties
* **idleTimeoutInMinutes**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **publicIpAddresses**: SubResource[]
* **publicIpPrefixes**: SubResource[]
* **resourceGuid**: string
* **subnets**: SubResource[] (ReadOnly)

## NatGatewaySku
### Properties
* **name**: 'Standard'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/networkInterfaces/tapConfigurations
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: NetworkInterfaceTapConfigurationPropertiesFormat
* **type**: 'Microsoft.Network/networkInterfaces/tapConfigurations' (ReadOnly, DeployTimeConstant)

## Microsoft.Network/networkInterfaces
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
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

## Microsoft.Network/networkProfiles
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: NetworkProfilePropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/networkProfiles' (ReadOnly, DeployTimeConstant)

## NetworkProfilePropertiesFormat
### Properties
* **containerNetworkInterfaceConfigurations**: ContainerNetworkInterfaceConfiguration[]
* **containerNetworkInterfaces**: ContainerNetworkInterface[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **resourceGuid**: string (ReadOnly)

## ContainerNetworkInterfaceConfiguration
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ContainerNetworkInterfaceConfigurationPropertiesFormat
* **type**: string (ReadOnly)

## ContainerNetworkInterfaceConfigurationPropertiesFormat
### Properties
* **containerNetworkInterfaces**: SubResource[]
* **ipConfigurations**: IPConfigurationProfile[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ContainerNetworkInterface
### Properties
* **etag**: string
* **id**: string
* **name**: string
* **properties**: ContainerNetworkInterfacePropertiesFormat
* **type**: string (ReadOnly)

## ContainerNetworkInterfacePropertiesFormat
### Properties
* **container**: Container
* **containerNetworkInterfaceConfiguration**: ContainerNetworkInterfaceConfiguration
* **ipConfigurations**: ContainerNetworkInterfaceIpConfiguration[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Container
### Properties
* **id**: string

## ContainerNetworkInterfaceIpConfiguration
### Properties
* **etag**: string
* **name**: string
* **properties**: ContainerNetworkInterfaceIpConfigurationPropertiesFormat
* **type**: string (ReadOnly)

## ContainerNetworkInterfaceIpConfigurationPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/networkSecurityGroups/securityRules
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SecurityRulePropertiesFormat
* **type**: 'Microsoft.Network/networkSecurityGroups/securityRules' (ReadOnly, DeployTimeConstant)

## Microsoft.Network/networkSecurityGroups
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
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
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
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
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
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
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/p2svpnGateways
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: P2SVpnGatewayProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/p2svpnGateways' (ReadOnly, DeployTimeConstant)

## P2SVpnGatewayProperties
### Properties
* **p2SConnectionConfigurations**: P2SConnectionConfiguration[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **virtualHub**: SubResource
* **vpnClientConnectionHealth**: VpnClientConnectionHealth (ReadOnly)
* **vpnGatewayScaleUnit**: int
* **vpnServerConfiguration**: SubResource

## P2SConnectionConfiguration
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: P2SConnectionConfigurationProperties

## P2SConnectionConfigurationProperties
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **vpnClientAddressPool**: AddressSpace

## VpnClientConnectionHealth
### Properties
* **allocatedIpAddresses**: string[]
* **totalEgressBytesTransferred**: int (ReadOnly)
* **totalIngressBytesTransferred**: int (ReadOnly)
* **vpnClientConnectionsCount**: int

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/privateEndpoints
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/privateEndpoints' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/privateLinkServices/privateEndpointConnections
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.Network/privateLinkServices/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: PrivateEndpoint
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionState
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## Microsoft.Network/privateLinkServices
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateLinkServiceProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/privateLinkServices' (ReadOnly, DeployTimeConstant)

## PrivateLinkServiceProperties
### Properties
* **alias**: string (ReadOnly)
* **autoApproval**: schemas:377_autoApproval
* **fqdns**: string[]
* **ipConfigurations**: PrivateLinkServiceIpConfiguration[]
* **loadBalancerFrontendIpConfigurations**: FrontendIPConfiguration[]
* **networkInterfaces**: NetworkInterface[] (ReadOnly)
* **privateEndpointConnections**: PrivateEndpointConnection[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **visibility**: schemas:377_visibility

## schemas:377_autoApproval
### Properties
* **subscriptions**: string[]

## PrivateLinkServiceIpConfiguration
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: PrivateLinkServiceIpConfigurationProperties
* **type**: string (ReadOnly)

## PrivateLinkServiceIpConfigurationProperties
### Properties
* **primary**: bool
* **privateIPAddress**: string
* **privateIPAddressVersion**: 'IPv4' | 'IPv6'
* **privateIPAllocationMethod**: 'Dynamic' | 'Static'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **subnet**: Subnet

## PrivateEndpointConnection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: PrivateEndpointConnectionProperties
* **type**: string (ReadOnly)

## schemas:377_visibility
### Properties
* **subscriptions**: string[]

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/publicIPAddresses
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
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
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
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
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: RouteFilterRulePropertiesFormat
* **type**: 'Microsoft.Network/routeFilters/routeFilterRules' (ReadOnly, DeployTimeConstant)

## RouteFilterRulePropertiesFormat
### Properties
* **access**: 'Allow' | 'Deny' (Required)
* **communities**: string[] (Required)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **routeFilterRuleType**: string (Required)

## Microsoft.Network/routeFilters
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: RouteFilterPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/routeFilters' (ReadOnly, DeployTimeConstant)

## RouteFilterPropertiesFormat
### Properties
* **ipv6Peerings**: ExpressRouteCircuitPeering[]
* **peerings**: ExpressRouteCircuitPeering[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **rules**: RouteFilterRule[]

## RouteFilterRule
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **location**: string
* **name**: string
* **properties**: RouteFilterRulePropertiesFormat

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/routeTables/routes
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RoutePropertiesFormat
* **type**: 'Microsoft.Network/routeTables/routes' (ReadOnly, DeployTimeConstant)

## Microsoft.Network/routeTables
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
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
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServiceEndpointPolicyDefinitionPropertiesFormat
* **type**: 'Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions' (ReadOnly, DeployTimeConstant)

## Microsoft.Network/serviceEndpointPolicies
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
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
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
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
* **azureFirewall**: SubResource
* **expressRouteGateway**: SubResource
* **p2SVpnGateway**: SubResource
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **routeTable**: VirtualHubRouteTable
* **securityProviderName**: string
* **virtualNetworkConnections**: HubVirtualNetworkConnection[]
* **virtualWan**: SubResource
* **vpnGateway**: SubResource

## VirtualHubRouteTable
### Properties
* **routes**: VirtualHubRoute[]

## VirtualHubRoute
### Properties
* **addressPrefixes**: string[]
* **nextHopIpAddress**: string

## HubVirtualNetworkConnection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: HubVirtualNetworkConnectionProperties

## HubVirtualNetworkConnectionProperties
### Properties
* **allowHubToRemoteVnetTransit**: bool
* **allowRemoteVnetToUseHubVnetGateways**: bool
* **enableInternetSecurity**: bool
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **remoteVirtualNetwork**: SubResource

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/virtualNetworkGateways
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
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

## Microsoft.Network/virtualNetworkTaps
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualNetworkTapPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/virtualNetworkTaps' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/virtualNetworks/subnets
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SubnetPropertiesFormat
* **type**: 'Microsoft.Network/virtualNetworks/subnets' (ReadOnly, DeployTimeConstant)

## Microsoft.Network/virtualNetworks/virtualNetworkPeerings
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **remoteAddressSpace**: AddressSpace
* **remoteVirtualNetwork**: SubResource
* **useRemoteGateways**: bool

## Microsoft.Network/virtualNetworks
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
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
* **bgpCommunities**: VirtualNetworkBgpCommunities
* **ddosProtectionPlan**: SubResource
* **dhcpOptions**: DhcpOptions
* **enableDdosProtection**: bool
* **enableVmProtection**: bool
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **resourceGuid**: string
* **subnets**: Subnet[]
* **virtualNetworkPeerings**: VirtualNetworkPeering[]

## VirtualNetworkBgpCommunities
### Properties
* **regionalCommunity**: string (ReadOnly)
* **virtualNetworkCommunity**: string (Required)

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

## Microsoft.Network/virtualRouters/peerings
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualRouterPeeringProperties
* **type**: 'Microsoft.Network/virtualRouters/peerings' (ReadOnly, DeployTimeConstant)

## VirtualRouterPeeringProperties
### Properties
* **peerAsn**: int
* **peerIp**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Microsoft.Network/virtualRouters
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualRouterPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/virtualRouters' (ReadOnly, DeployTimeConstant)

## VirtualRouterPropertiesFormat
### Properties
* **hostedGateway**: SubResource
* **hostedSubnet**: SubResource
* **peerings**: SubResource[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **virtualRouterAsn**: int
* **virtualRouterIps**: string[]

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/virtualWans
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
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
* **allowBranchToBranchTraffic**: bool
* **allowVnetToVnetTraffic**: bool
* **disableVpnEncryption**: bool
* **office365LocalBreakoutCategory**: 'All' | 'None' | 'Optimize' | 'OptimizeAndAllow'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **virtualHubs**: SubResource[] (ReadOnly)
* **vpnSites**: SubResource[] (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/vpnGateways/vpnConnections
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VpnConnectionProperties
* **type**: 'Microsoft.Network/vpnGateways/vpnConnections' (ReadOnly, DeployTimeConstant)

## VpnConnectionProperties
### Properties
* **connectionBandwidth**: int
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown'
* **egressBytesTransferred**: int (ReadOnly)
* **enableBgp**: bool
* **enableInternetSecurity**: bool
* **enableRateLimiting**: bool
* **ingressBytesTransferred**: int (ReadOnly)
* **ipsecPolicies**: IpsecPolicy[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **remoteVpnSite**: SubResource
* **routingWeight**: int
* **sharedKey**: string
* **useLocalAzureIpAddress**: bool
* **usePolicyBasedTrafficSelectors**: bool
* **vpnConnectionProtocolType**: 'IKEv1' | 'IKEv2'
* **vpnLinkConnections**: VpnSiteLinkConnection[]

## VpnSiteLinkConnection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: VpnSiteLinkConnectionProperties
* **type**: string (ReadOnly)

## VpnSiteLinkConnectionProperties
### Properties
* **connectionBandwidth**: int
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown'
* **egressBytesTransferred**: int (ReadOnly)
* **enableBgp**: bool
* **enableRateLimiting**: bool
* **ingressBytesTransferred**: int (ReadOnly)
* **ipsecPolicies**: IpsecPolicy[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **routingWeight**: int
* **sharedKey**: string
* **useLocalAzureIpAddress**: bool
* **usePolicyBasedTrafficSelectors**: bool
* **vpnConnectionProtocolType**: 'IKEv1' | 'IKEv2'
* **vpnSiteLink**: SubResource

## Microsoft.Network/vpnGateways
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **virtualHub**: SubResource
* **vpnGatewayScaleUnit**: int

## VpnConnection
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: VpnConnectionProperties

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/vpnServerConfigurations
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VpnServerConfigurationProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/vpnServerConfigurations' (ReadOnly, DeployTimeConstant)

## VpnServerConfigurationProperties
### Properties
* **aadAuthenticationParameters**: AadAuthenticationParameters
* **etag**: string
* **name**: string
* **p2SVpnGateways**: P2SVpnGateway[] (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **radiusClientRootCertificates**: VpnServerConfigRadiusClientRootCertificate[]
* **radiusServerAddress**: string
* **radiusServerRootCertificates**: VpnServerConfigRadiusServerRootCertificate[]
* **radiusServerSecret**: string
* **vpnAuthenticationTypes**: 'AAD' | 'Certificate' | 'Radius'[]
* **vpnClientIpsecPolicies**: IpsecPolicy[]
* **vpnClientRevokedCertificates**: VpnServerConfigVpnClientRevokedCertificate[]
* **vpnClientRootCertificates**: VpnServerConfigVpnClientRootCertificate[]
* **vpnProtocols**: 'IkeV2' | 'OpenVPN'[]

## AadAuthenticationParameters
### Properties
* **aadAudience**: string
* **aadIssuer**: string
* **aadTenant**: string

## P2SVpnGateway
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **location**: string
* **name**: string (ReadOnly)
* **properties**: P2SVpnGatewayProperties
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## VpnServerConfigRadiusClientRootCertificate
### Properties
* **name**: string
* **thumbprint**: string

## VpnServerConfigRadiusServerRootCertificate
### Properties
* **name**: string
* **publicCertData**: string

## VpnServerConfigVpnClientRevokedCertificate
### Properties
* **name**: string
* **thumbprint**: string

## VpnServerConfigVpnClientRootCertificate
### Properties
* **name**: string
* **publicCertData**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/vpnSites
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
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
* **isSecuritySite**: bool
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **siteKey**: string
* **virtualWan**: SubResource
* **vpnSiteLinks**: VpnSiteLink[]

## DeviceProperties
### Properties
* **deviceModel**: string
* **deviceVendor**: string
* **linkSpeedInMbps**: int

## VpnSiteLink
### Properties
* **etag**: string (ReadOnly)
* **id**: string
* **name**: string
* **properties**: VpnSiteLinkProperties
* **type**: string (ReadOnly)

## VpnSiteLinkProperties
### Properties
* **bgpProperties**: VpnLinkBgpSettings
* **ipAddress**: string
* **linkProperties**: VpnLinkProviderProperties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## VpnLinkBgpSettings
### Properties
* **asn**: int
* **bgpPeeringAddress**: string

## VpnLinkProviderProperties
### Properties
* **linkProviderName**: string
* **linkSpeedInMbps**: int

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

