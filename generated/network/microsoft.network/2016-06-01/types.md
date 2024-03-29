# Microsoft.Network @ 2016-06-01

## Resource Microsoft.Network/applicationGateways@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationGatewayPropertiesFormat](#applicationgatewaypropertiesformat): Properties of Application Gateway
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/applicationGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/connections@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkGatewayConnectionPropertiesFormat](#virtualnetworkgatewayconnectionpropertiesformat): VirtualNetworkGatewayConnection properties
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/connections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteCircuitPropertiesFormat](#expressroutecircuitpropertiesformat): Properties of ExpressRouteCircuit
* **sku**: [ExpressRouteCircuitSku](#expressroutecircuitsku): Gets or sets sku
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/expressRouteCircuits' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits/authorizations@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationPropertiesFormat](#authorizationpropertiesformat)
* **type**: 'Microsoft.Network/expressRouteCircuits/authorizations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits/peerings@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteCircuitPeeringPropertiesFormat](#expressroutecircuitpeeringpropertiesformat)
* **type**: 'Microsoft.Network/expressRouteCircuits/peerings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/loadBalancers@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LoadBalancerPropertiesFormat](#loadbalancerpropertiesformat): Properties of Load Balancer
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/loadBalancers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/localNetworkGateways@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LocalNetworkGatewayPropertiesFormat](#localnetworkgatewaypropertiesformat): LocalNetworkGateway properties
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/localNetworkGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkInterfaces@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat): NetworkInterface properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/networkInterfaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityGroups@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkSecurityGroupPropertiesFormat](#networksecuritygrouppropertiesformat): Network Security Group resource
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/networkSecurityGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityGroups/securityRules@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityRulePropertiesFormat](#securityrulepropertiesformat)
* **type**: 'Microsoft.Network/networkSecurityGroups/securityRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/publicIPAddresses@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat): PublicIpAddress properties
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/publicIPAddresses' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/routeTables@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RouteTablePropertiesFormat](#routetablepropertiesformat): Route Table resource
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/routeTables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/routeTables/routes@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoutePropertiesFormat](#routepropertiesformat): Route resource
* **type**: 'Microsoft.Network/routeTables/routes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworkGateways@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkGatewayPropertiesFormat](#virtualnetworkgatewaypropertiesformat): VirtualNetworkGateway properties
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/virtualNetworkGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworks@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkPropertiesFormat](#virtualnetworkpropertiesformat)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/virtualNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworks/subnets@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SubnetPropertiesFormat](#subnetpropertiesformat)
* **type**: 'Microsoft.Network/virtualNetworks/subnets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworks/virtualNetworkPeerings@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkPeeringPropertiesFormat](#virtualnetworkpeeringpropertiesformat)
* **type**: 'Microsoft.Network/virtualNetworks/virtualNetworkPeerings' (ReadOnly, DeployTimeConstant): The resource type

## AddressSpace
### Properties
* **addressPrefixes**: string[]: Gets or sets list of address blocks reserved for this virtual network in CIDR notation

## ApplicationGatewayAuthenticationCertificate
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewayAuthenticationCertificatePropertiesFormat](#applicationgatewayauthenticationcertificatepropertiesformat): Properties of Authentication certificates of application gateway

## ApplicationGatewayAuthenticationCertificatePropertiesFormat
### Properties
* **data**: string: Certificate public data
* **provisioningState**: string: Provisioning state of the authentication certificate resource Updating/Deleting/Failed

## ApplicationGatewayBackendAddress
### Properties
* **fqdn**: string: Dns name
* **ipAddress**: string: Ip address

## ApplicationGatewayBackendAddressPool
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewayBackendAddressPoolPropertiesFormat](#applicationgatewaybackendaddresspoolpropertiesformat): Properties of Backend Address Pool of application gateway

## ApplicationGatewayBackendAddressPoolPropertiesFormat
### Properties
* **backendAddresses**: [ApplicationGatewayBackendAddress](#applicationgatewaybackendaddress)[]: Backend addresses
* **backendIPConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[]: Collection of references to IPs defined in NICs
* **provisioningState**: string: Provisioning state of the backend address pool resource Updating/Deleting/Failed

## ApplicationGatewayBackendHttpSettings
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewayBackendHttpSettingsPropertiesFormat](#applicationgatewaybackendhttpsettingspropertiesformat): Properties of Backend address pool settings of application gateway

## ApplicationGatewayBackendHttpSettingsPropertiesFormat
### Properties
* **authenticationCertificates**: [SubResource](#subresource)[]: Array of references to Application Gateway Authentication Certificates
* **cookieBasedAffinity**: 'Disabled' | 'Enabled' | string: Cookie affinity
* **port**: int: Port
* **probe**: [SubResource](#subresource): Probe resource of application gateway
* **protocol**: 'Http' | 'Https' | string: Protocol
* **provisioningState**: string: Provisioning state of the backend http settings resource Updating/Deleting/Failed
* **requestTimeout**: int: Request timeout

## ApplicationGatewayFrontendIPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewayFrontendIPConfigurationPropertiesFormat](#applicationgatewayfrontendipconfigurationpropertiesformat): Properties of Frontend IP configuration of application gateway

## ApplicationGatewayFrontendIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string: PrivateIPAddress of the Network Interface IP Configuration
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: PrivateIP allocation method (Static/Dynamic)
* **provisioningState**: string: Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **publicIPAddress**: [SubResource](#subresource): Reference of the PublicIP resource
* **subnet**: [SubResource](#subresource): Reference of the subnet resource

## ApplicationGatewayFrontendPort
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewayFrontendPortPropertiesFormat](#applicationgatewayfrontendportpropertiesformat): Properties of Frontend Port of application gateway

## ApplicationGatewayFrontendPortPropertiesFormat
### Properties
* **port**: int: Frontend port
* **provisioningState**: string: Provisioning state of the frontend port resource Updating/Deleting/Failed

## ApplicationGatewayHttpListener
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewayHttpListenerPropertiesFormat](#applicationgatewayhttplistenerpropertiesformat): Properties of Http listener of application gateway

## ApplicationGatewayHttpListenerPropertiesFormat
### Properties
* **frontendIPConfiguration**: [SubResource](#subresource): Frontend IP configuration resource of application gateway
* **frontendPort**: [SubResource](#subresource): Frontend port resource of application gateway
* **hostName**: string: Host name of http listener
* **protocol**: 'Http' | 'Https' | string: Protocol
* **provisioningState**: string: Provisioning state of the http listener resource Updating/Deleting/Failed
* **requireServerNameIndication**: bool: RequireServerNameIndication of http listener
* **sslCertificate**: [SubResource](#subresource): Ssl certificate resource of application gateway

## ApplicationGatewayIPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewayIPConfigurationPropertiesFormat](#applicationgatewayipconfigurationpropertiesformat): Properties of IP configuration of application gateway

## ApplicationGatewayIPConfigurationPropertiesFormat
### Properties
* **provisioningState**: string: Provisioning state of the application gateway subnet resource Updating/Deleting/Failed
* **subnet**: [SubResource](#subresource): Reference of the subnet resource. A subnet from where application gateway gets its private address

## ApplicationGatewayPathRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewayPathRulePropertiesFormat](#applicationgatewaypathrulepropertiesformat): Properties of probe of application gateway

## ApplicationGatewayPathRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource): Backend address pool resource of URL path map
* **backendHttpSettings**: [SubResource](#subresource): Backend http settings resource of URL path map
* **paths**: string[]: Path rules of URL path map
* **provisioningState**: string: Path rule of URL path map resource Updating/Deleting/Failed

## ApplicationGatewayProbe
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewayProbePropertiesFormat](#applicationgatewayprobepropertiesformat): Properties of probe of application gateway

## ApplicationGatewayProbePropertiesFormat
### Properties
* **host**: string: Host to send probe to
* **interval**: int: Probing interval in seconds
* **path**: string: Relative path of probe
* **protocol**: 'Http' | 'Https' | string: Protocol
* **provisioningState**: string: Provisioning state of the backend http settings resource Updating/Deleting/Failed
* **timeout**: int: Probing timeout in seconds
* **unhealthyThreshold**: int: Probing unhealthy threshold

## ApplicationGatewayPropertiesFormat
### Properties
* **authenticationCertificates**: [ApplicationGatewayAuthenticationCertificate](#applicationgatewayauthenticationcertificate)[]: Authentication certificates of application gateway resource
* **backendAddressPools**: [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)[]: Backend address pool of application gateway resource
* **backendHttpSettingsCollection**: [ApplicationGatewayBackendHttpSettings](#applicationgatewaybackendhttpsettings)[]: Backend http settings of application gateway resource
* **frontendIPConfigurations**: [ApplicationGatewayFrontendIPConfiguration](#applicationgatewayfrontendipconfiguration)[]: Frontend IP addresses of application gateway resource
* **frontendPorts**: [ApplicationGatewayFrontendPort](#applicationgatewayfrontendport)[]: Frontend ports of application gateway resource
* **gatewayIPConfigurations**: [ApplicationGatewayIPConfiguration](#applicationgatewayipconfiguration)[]: Subnets of application gateway resource
* **httpListeners**: [ApplicationGatewayHttpListener](#applicationgatewayhttplistener)[]: HTTP listeners of application gateway resource
* **operationalState**: 'Running' | 'Starting' | 'Stopped' | 'Stopping' | string (ReadOnly): Operational state of application gateway resource
* **probes**: [ApplicationGatewayProbe](#applicationgatewayprobe)[]: Probes of application gateway resource
* **provisioningState**: string: Provisioning state of the ApplicationGateway resource Updating/Deleting/Failed
* **requestRoutingRules**: [ApplicationGatewayRequestRoutingRule](#applicationgatewayrequestroutingrule)[]: Request routing rules of application gateway resource
* **resourceGuid**: string: Resource guid property of the ApplicationGateway resource
* **sku**: [ApplicationGatewaySku](#applicationgatewaysku): Sku of application gateway resource
* **sslCertificates**: [ApplicationGatewaySslCertificate](#applicationgatewaysslcertificate)[]: SSL certificates of application gateway resource
* **sslPolicy**: [ApplicationGatewaySslPolicy](#applicationgatewaysslpolicy): SSL policy of application gateway resource
* **urlPathMaps**: [ApplicationGatewayUrlPathMap](#applicationgatewayurlpathmap)[]: URL path map of application gateway resource

## ApplicationGatewayRequestRoutingRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewayRequestRoutingRulePropertiesFormat](#applicationgatewayrequestroutingrulepropertiesformat): Properties of Request routing rule of application gateway

## ApplicationGatewayRequestRoutingRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource): Backend address pool resource of application gateway
* **backendHttpSettings**: [SubResource](#subresource): Frontend port resource of application gateway
* **httpListener**: [SubResource](#subresource): Http listener resource of application gateway
* **provisioningState**: string: Provisioning state of the request routing rule resource Updating/Deleting/Failed
* **ruleType**: 'Basic' | 'PathBasedRouting' | string: Rule type
* **urlPathMap**: [SubResource](#subresource): Url path map resource of application gateway

## ApplicationGatewaySku
### Properties
* **capacity**: int: Capacity (instance count) of application gateway
* **name**: 'Standard_Large' | 'Standard_Medium' | 'Standard_Small' | string: Name of application gateway SKU
* **tier**: 'Standard' | string: Tier of application gateway

## ApplicationGatewaySslCertificate
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewaySslCertificatePropertiesFormat](#applicationgatewaysslcertificatepropertiesformat): Properties of SSL certificates of application gateway

## ApplicationGatewaySslCertificatePropertiesFormat
### Properties
* **data**: string: SSL Certificate data
* **password**: string: SSL Certificate password
* **provisioningState**: string: Provisioning state of the ssl certificate resource Updating/Deleting/Failed
* **publicCertData**: string: SSL Certificate public data

## ApplicationGatewaySslPolicy
### Properties
* **disabledSslProtocols**: ('TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | string)[]: SSL protocols to be disabled on Application Gateway

## ApplicationGatewayUrlPathMap
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewayUrlPathMapPropertiesFormat](#applicationgatewayurlpathmappropertiesformat): Properties of UrlPathMap of application gateway

## ApplicationGatewayUrlPathMapPropertiesFormat
### Properties
* **defaultBackendAddressPool**: [SubResource](#subresource): Default backend address pool resource of URL path map
* **defaultBackendHttpSettings**: [SubResource](#subresource): Default backend http settings resource of URL path map
* **pathRules**: [ApplicationGatewayPathRule](#applicationgatewaypathrule)[]: Path rule of URL path map resource
* **provisioningState**: string: Provisioning state of the backend http settings resource Updating/Deleting/Failed

## AuthorizationPropertiesFormat
### Properties
* **authorizationKey**: string: Gets or sets the authorization key
* **authorizationUseStatus**: 'Available' | 'InUse' | string: Gets or sets AuthorizationUseStatus
* **provisioningState**: string: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed

## BackendAddressPool
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [BackendAddressPoolPropertiesFormat](#backendaddresspoolpropertiesformat): Properties of BackendAddressPool

## BackendAddressPoolPropertiesFormat
### Properties
* **backendIPConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[] (ReadOnly): Gets collection of references to IPs defined in NICs
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly): Gets Load Balancing rules that use this Backend Address Pool
* **outboundNatRule**: [SubResource](#subresource) (ReadOnly): Gets outbound rules that use this Backend Address Pool
* **provisioningState**: string: Get provisioning state of the PublicIP resource Updating/Deleting/Failed

## BgpSettings
### Properties
* **asn**: int: Gets or sets this BGP speaker's ASN
* **bgpPeeringAddress**: string: Gets or sets the BGP peering address and BGP identifier of this BGP speaker
* **peerWeight**: int: Gets or sets the weight added to routes learned from this BGP speaker

## DhcpOptions
### Properties
* **dnsServers**: string[]: Gets or sets list of DNS servers IP addresses

## ExpressRouteCircuitAuthorization
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [AuthorizationPropertiesFormat](#authorizationpropertiesformat)

## ExpressRouteCircuitPeering
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ExpressRouteCircuitPeeringPropertiesFormat](#expressroutecircuitpeeringpropertiesformat)

## ExpressRouteCircuitPeeringConfig
### Properties
* **advertisedPublicPrefixes**: string[]: Gets or sets the reference of AdvertisedPublicPrefixes
* **advertisedPublicPrefixesState**: 'Configured' | 'Configuring' | 'NotConfigured' | 'ValidationNeeded' | string: Gets or sets AdvertisedPublicPrefixState of the Peering resource
* **customerASN**: int: Gets or Sets CustomerAsn of the peering.
* **routingRegistryName**: string: Gets or Sets RoutingRegistryName of the config.

## ExpressRouteCircuitPeeringPropertiesFormat
### Properties
* **azureASN**: int: Gets or sets the azure ASN
* **gatewayManagerEtag**: string: Gets or sets the GatewayManager Etag
* **lastModifiedBy**: string: Gets whether the provider or the customer last modified the peering
* **microsoftPeeringConfig**: [ExpressRouteCircuitPeeringConfig](#expressroutecircuitpeeringconfig): Gets or sets the Microsoft peering config
* **peerASN**: int: Gets or sets the peer ASN
* **peeringType**: 'AzurePrivatePeering' | 'AzurePublicPeering' | 'MicrosoftPeering' | string: Gets or sets PeeringType
* **primaryAzurePort**: string: Gets or sets the primary port
* **primaryPeerAddressPrefix**: string: Gets or sets the primary address prefix
* **provisioningState**: string: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
* **secondaryAzurePort**: string: Gets or sets the secondary port
* **secondaryPeerAddressPrefix**: string: Gets or sets the secondary address prefix
* **sharedKey**: string: Gets or sets the shared key
* **state**: 'Disabled' | 'Enabled' | string: Gets or sets state of Peering
* **stats**: [ExpressRouteCircuitStats](#expressroutecircuitstats): Gets or peering stats
* **vlanId**: int: Gets or sets the vlan id

## ExpressRouteCircuitPropertiesFormat
### Properties
* **allowClassicOperations**: bool: allow classic operations
* **authorizations**: [ExpressRouteCircuitAuthorization](#expressroutecircuitauthorization)[]: Gets or sets list of authorizations
* **circuitProvisioningState**: string: Gets or sets CircuitProvisioningState state of the resource
* **gatewayManagerEtag**: string: Gets or sets the GatewayManager Etag
* **peerings**: [ExpressRouteCircuitPeering](#expressroutecircuitpeering)[]: Gets or sets list of peerings
* **provisioningState**: string: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
* **serviceKey**: string: Gets or sets ServiceKey
* **serviceProviderNotes**: string: Gets or sets ServiceProviderNotes
* **serviceProviderProperties**: [ExpressRouteCircuitServiceProviderProperties](#expressroutecircuitserviceproviderproperties): Gets or sets ServiceProviderProperties
* **serviceProviderProvisioningState**: 'Deprovisioning' | 'NotProvisioned' | 'Provisioned' | 'Provisioning' | string: Gets or sets ServiceProviderProvisioningState state of the resource

## ExpressRouteCircuitServiceProviderProperties
### Properties
* **bandwidthInMbps**: int: Gets or sets BandwidthInMbps.
* **peeringLocation**: string: Gets or sets peering location.
* **serviceProviderName**: string: Gets or sets serviceProviderName.

## ExpressRouteCircuitSku
### Properties
* **family**: 'MeteredData' | 'UnlimitedData' | string: Gets or sets family of the sku.
* **name**: string: Gets or sets name of the sku.
* **tier**: 'Premium' | 'Standard' | string: Gets or sets tier of the sku.

## ExpressRouteCircuitStats
### Properties
* **primarybytesIn**: int: Gets BytesIn of the peering.
* **primarybytesOut**: int: Gets BytesOut of the peering.
* **secondarybytesIn**: int: Gets BytesIn of the peering.
* **secondarybytesOut**: int: Gets BytesOut of the peering.

## FrontendIPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [FrontendIPConfigurationPropertiesFormat](#frontendipconfigurationpropertiesformat): Properties of Frontend IP Configuration of the load balancer

## FrontendIPConfigurationPropertiesFormat
### Properties
* **inboundNatPools**: [SubResource](#subresource)[] (ReadOnly): Read only. Inbound pools URIs that use this frontend IP
* **inboundNatRules**: [SubResource](#subresource)[] (ReadOnly): Read only. Inbound rules URIs that use this frontend IP
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly): Gets Load Balancing rules URIs that use this frontend IP
* **outboundNatRules**: [SubResource](#subresource)[] (ReadOnly): Read only. Outbound rules URIs that use this frontend IP
* **privateIPAddress**: string: Gets or sets the privateIPAddress of the IP Configuration
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: Gets or sets PrivateIP allocation method
* **provisioningState**: string: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
* **publicIPAddress**: [PublicIPAddress](#publicipaddress): Gets or sets the reference of the PublicIP resource
* **subnet**: [Subnet](#subnet): Gets or sets the reference of the subnet resource

## InboundNatPool
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [InboundNatPoolPropertiesFormat](#inboundnatpoolpropertiesformat): Properties of Inbound NAT pool

## InboundNatPoolPropertiesFormat
### Properties
* **backendPort**: int (Required): Gets or sets a port used for internal connections on the endpoint. The localPort attribute maps the eternal port of the endpoint to an internal port on a role. This is useful in scenarios where a role must communicate to an internal component on a port that is different from the one that is exposed externally. If not specified, the value of localPort is the same as the port attribute. Set the value of localPort to '*' to automatically assign an unallocated port that is discoverable using the runtime API
* **frontendIPConfiguration**: [SubResource](#subresource): Gets or sets a reference to frontend IP Addresses
* **frontendPortRangeEnd**: int (Required): Gets or sets the ending port range for the NAT pool. You can specify any port number you choose, but the port numbers specified for each role in the service must be unique. Possible values range between 1 and 65535, inclusive
* **frontendPortRangeStart**: int (Required): Gets or sets the starting port range for the NAT pool. You can specify any port number you choose, but the port numbers specified for each role in the service must be unique. Possible values range between 1 and 65535, inclusive
* **protocol**: 'Tcp' | 'Udp' | string (Required): Gets or sets the transport protocol for the endpoint. Possible values are Udp or Tcp
* **provisioningState**: string: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed

## InboundNatRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [InboundNatRulePropertiesFormat](#inboundnatrulepropertiesformat): Properties of Inbound NAT rule

## InboundNatRulePropertiesFormat
### Properties
* **backendIPConfiguration**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration) (ReadOnly): Gets or sets a reference to a private ip address defined on a NetworkInterface of a VM. Traffic sent to frontendPort of each of the frontendIPConfigurations is forwarded to the backed IP
* **backendPort**: int: Gets or sets a port used for internal connections on the endpoint. The localPort attribute maps the eternal port of the endpoint to an internal port on a role. This is useful in scenarios where a role must communicate to an internal component on a port that is different from the one that is exposed externally. If not specified, the value of localPort is the same as the port attribute. Set the value of localPort to '*' to automatically assign an unallocated port that is discoverable using the runtime API
* **enableFloatingIP**: bool: Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn availability Group. This setting is required when using the SQL Always ON availability Groups in SQL server. This setting can't be changed after you create the endpoint
* **frontendIPConfiguration**: [SubResource](#subresource): Gets or sets a reference to frontend IP Addresses
* **frontendPort**: int: Gets or sets the port for the external endpoint. You can specify any port number you choose, but the port numbers specified for each role in the service must be unique. Possible values range between 1 and 65535, inclusive
* **idleTimeoutInMinutes**: int: Gets or sets the timeout for the Tcp idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to Tcp
* **protocol**: 'Tcp' | 'Udp' | string: Gets or sets the transport protocol for the endpoint. Possible values are Udp or Tcp
* **provisioningState**: string: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed

## IPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [IPConfigurationPropertiesFormat](#ipconfigurationpropertiesformat): Properties of IPConfiguration

## IPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string: Gets or sets the privateIPAddress of the IP Configuration
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: Gets or sets PrivateIP allocation method
* **provisioningState**: string: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
* **publicIPAddress**: [PublicIPAddress](#publicipaddress): Gets or sets the reference of the PublicIP resource
* **subnet**: [Subnet](#subnet): Gets or sets the reference of the subnet resource

## LoadBalancerPropertiesFormat
### Properties
* **backendAddressPools**: [BackendAddressPool](#backendaddresspool)[]: Gets or sets Pools of backend IP addresses
* **frontendIPConfigurations**: [FrontendIPConfiguration](#frontendipconfiguration)[]: Gets or sets frontend IP addresses of the load balancer
* **inboundNatPools**: [InboundNatPool](#inboundnatpool)[]: Gets or sets inbound NAT pools
* **inboundNatRules**: [InboundNatRule](#inboundnatrule)[]: Gets or sets list of inbound rules
* **loadBalancingRules**: [LoadBalancingRule](#loadbalancingrule)[]: Gets or sets load balancing rules
* **outboundNatRules**: [OutboundNatRule](#outboundnatrule)[]: Gets or sets outbound NAT rules
* **probes**: [Probe](#probe)[]: Gets or sets list of Load balancer probes
* **provisioningState**: string: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
* **resourceGuid**: string: Gets or sets resource guid property of the Load balancer resource

## LoadBalancingRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [LoadBalancingRulePropertiesFormat](#loadbalancingrulepropertiesformat): Properties of the load balancer

## LoadBalancingRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource): Gets or sets  a reference to a pool of DIPs. Inbound traffic is randomly load balanced across IPs in the backend IPs
* **backendPort**: int: Gets or sets a port used for internal connections on the endpoint. The localPort attribute maps the eternal port of the endpoint to an internal port on a role. This is useful in scenarios where a role must communicate to an internal component on a port that is different from the one that is exposed externally. If not specified, the value of localPort is the same as the port attribute. Set the value of localPort to '*' to automatically assign an unallocated port that is discoverable using the runtime API
* **enableFloatingIP**: bool: Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn availability Group. This setting is required when using the SQL Always ON availability Groups in SQL server. This setting can't be changed after you create the endpoint
* **frontendIPConfiguration**: [SubResource](#subresource): Gets or sets a reference to frontend IP Addresses
* **frontendPort**: int (Required): Gets or sets the port for the external endpoint. You can specify any port number you choose, but the port numbers specified for each role in the service must be unique. Possible values range between 1 and 65535, inclusive
* **idleTimeoutInMinutes**: int: Gets or sets the timeout for the Tcp idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to Tcp
* **loadDistribution**: 'Default' | 'SourceIP' | 'SourceIPProtocol' | string: Gets or sets the load distribution policy for this rule
* **probe**: [SubResource](#subresource): Gets or sets the reference of the load balancer probe used by the Load Balancing rule.
* **protocol**: 'Tcp' | 'Udp' | string (Required): Gets or sets the transport protocol for the external endpoint. Possible values are Udp or Tcp
* **provisioningState**: string: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed

## LocalNetworkGateway
### Properties
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **location**: string: Resource location
* **name**: string (ReadOnly): Resource name
* **properties**: [LocalNetworkGatewayPropertiesFormat](#localnetworkgatewaypropertiesformat): LocalNetworkGateway properties
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string (ReadOnly): Resource type

## LocalNetworkGatewayPropertiesFormat
### Properties
* **bgpSettings**: [BgpSettings](#bgpsettings): Local network gateway's BGP speaker settings
* **gatewayIpAddress**: string: IP address of local network gateway.
* **localNetworkAddressSpace**: [AddressSpace](#addressspace): Local network site Address space
* **provisioningState**: string: Gets provisioning state of the LocalNetworkGateway resource Updating/Deleting/Failed
* **resourceGuid**: string: Gets or sets resource guid property of the LocalNetworkGateway resource

## NetworkInterface
### Properties
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **location**: string: Resource location
* **name**: string (ReadOnly): Resource name
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat): NetworkInterface properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string (ReadOnly): Resource type

## NetworkInterfaceDnsSettings
### Properties
* **appliedDnsServers**: string[]: Gets or sets list of Applied DNS servers IP addresses
* **dnsServers**: string[]: Gets or sets list of DNS servers IP addresses
* **internalDnsNameLabel**: string: Gets or sets the internal DNS name
* **internalDomainNameSuffix**: string: Gets or sets internal domain name suffix of the NIC.
* **internalFqdn**: string: Gets or sets the internal fqdn.

## NetworkInterfaceIPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [NetworkInterfaceIPConfigurationPropertiesFormat](#networkinterfaceipconfigurationpropertiesformat): Properties of IPConfiguration

## NetworkInterfaceIPConfigurationPropertiesFormat
### Properties
* **applicationGatewayBackendAddressPools**: [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)[]: Gets or sets the reference of ApplicationGatewayBackendAddressPool resource
* **loadBalancerBackendAddressPools**: [BackendAddressPool](#backendaddresspool)[]: Gets or sets the reference of LoadBalancerBackendAddressPool resource
* **loadBalancerInboundNatRules**: [InboundNatRule](#inboundnatrule)[]: Gets or sets list of references of LoadBalancerInboundNatRules
* **primary**: bool: Gets whether this is a primary customer address on the NIC
* **privateIPAddress**: string
* **privateIPAddressVersion**: 'IPv4' | 'IPv6' | string: Gets or sets PrivateIP address version (IPv4/IPv6)
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: Gets or sets PrivateIP allocation method
* **provisioningState**: string
* **publicIPAddress**: [PublicIPAddress](#publicipaddress): PublicIPAddress resource
* **subnet**: [Subnet](#subnet): Subnet in a VirtualNetwork resource

## NetworkInterfacePropertiesFormat
### Properties
* **dnsSettings**: [NetworkInterfaceDnsSettings](#networkinterfacednssettings): Gets or sets DNS settings in network interface
* **enableIPForwarding**: bool: Gets or sets whether IPForwarding is enabled on the NIC
* **ipConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[]: Gets or sets list of IPConfigurations of the network interface
* **macAddress**: string: Gets the MAC address of the network interface
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup): Gets or sets the reference of the NetworkSecurityGroup resource
* **primary**: bool: Gets whether this is a primary NIC on a virtual machine
* **provisioningState**: string: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
* **resourceGuid**: string: Gets or sets resource guid property of the network interface resource
* **virtualMachine**: [SubResource](#subresource): Gets or sets the reference of a VirtualMachine

## NetworkSecurityGroup
### Properties
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **location**: string: Resource location
* **name**: string (ReadOnly): Resource name
* **properties**: [NetworkSecurityGroupPropertiesFormat](#networksecuritygrouppropertiesformat): Network Security Group resource
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string (ReadOnly): Resource type

## NetworkSecurityGroupPropertiesFormat
### Properties
* **defaultSecurityRules**: [SecurityRule](#securityrule)[]: Gets or default security rules of network security group
* **networkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly): Gets collection of references to Network Interfaces
* **provisioningState**: string: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
* **resourceGuid**: string: Gets or sets resource guid property of the network security group resource
* **securityRules**: [SecurityRule](#securityrule)[]: Gets or sets security rules of network security group
* **subnets**: [Subnet](#subnet)[] (ReadOnly): Gets collection of references to subnets

## OutboundNatRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [OutboundNatRulePropertiesFormat](#outboundnatrulepropertiesformat): Outbound NAT pool of the load balancer

## OutboundNatRulePropertiesFormat
### Properties
* **allocatedOutboundPorts**: int: Gets or sets the number of outbound ports to be used for SNAT
* **backendAddressPool**: [SubResource](#subresource) (Required): Gets or sets a reference to a pool of DIPs. Outbound traffic is randomly load balanced across IPs in the backend IPs
* **frontendIPConfigurations**: [SubResource](#subresource)[]: Gets or sets Frontend IP addresses of the load balancer
* **provisioningState**: string: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed

## Probe
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ProbePropertiesFormat](#probepropertiesformat)

## ProbePropertiesFormat
### Properties
* **intervalInSeconds**: int: Gets or sets the interval, in seconds, for how frequently to probe the endpoint for health status. Typically, the interval is slightly less than half the allocated timeout period (in seconds) which allows two full probes before taking the instance out of rotation. The default value is 15, the minimum value is 5
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly): Gets Load balancer rules that use this probe
* **numberOfProbes**: int: Gets or sets the number of probes where if no response, will result in stopping further traffic from being delivered to the endpoint. This values allows endpoints to be taken out of rotation faster or slower than the typical times used in Azure.
* **port**: int (Required): Gets or sets Port for communicating the probe. Possible values range from 1 to 65535, inclusive.
* **protocol**: 'Http' | 'Tcp' | string (Required): Gets or sets the protocol of the end point. Possible values are http or Tcp. If Tcp is specified, a received ACK is required for the probe to be successful. If http is specified,a 200 OK response from the specifies URI is required for the probe to be successful
* **provisioningState**: string: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
* **requestPath**: string: Gets or sets the URI used for requesting health status from the VM. Path is required if a protocol is set to http. Otherwise, it is not allowed. There is no default value

## PublicIPAddress
### Properties
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **location**: string: Resource location
* **name**: string (ReadOnly): Resource name
* **properties**: [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat): PublicIpAddress properties
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string (ReadOnly): Resource type

## PublicIPAddressDnsSettings
### Properties
* **domainNameLabel**: string: Gets or sets the Domain name label.The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
* **fqdn**: string: Gets the FQDN, Fully qualified domain name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone.
* **reverseFqdn**: string: Gets or Sets the Reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.

## PublicIPAddressPropertiesFormat
### Properties
* **dnsSettings**: [PublicIPAddressDnsSettings](#publicipaddressdnssettings): Gets or sets FQDN of the DNS record associated with the public IP address
* **idleTimeoutInMinutes**: int: Gets or sets the idle timeout of the public IP address
* **ipAddress**: string
* **ipConfiguration**: [IPConfiguration](#ipconfiguration) (ReadOnly): IPConfiguration
* **provisioningState**: string: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
* **publicIPAddressVersion**: 'IPv4' | 'IPv6' | string: Gets or sets PublicIP address version (IPv4/IPv6)
* **publicIPAllocationMethod**: 'Dynamic' | 'Static' | string: Gets or sets PublicIP allocation method (Static/Dynamic)
* **resourceGuid**: string: Gets or sets resource guid property of the PublicIP resource

## ResourceNavigationLink
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ResourceNavigationLinkFormat](#resourcenavigationlinkformat): Properties of ResourceNavigationLink

## ResourceNavigationLinkFormat
### Properties
* **link**: string: Link to the external resource
* **linkedResourceType**: string: Resource type of the linked resource
* **provisioningState**: string (ReadOnly): Provisioning state of the ResourceNavigationLink resource

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

## Route
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [RoutePropertiesFormat](#routepropertiesformat): Route resource

## RoutePropertiesFormat
### Properties
* **addressPrefix**: string: Gets or sets the destination CIDR to which the route applies.
* **nextHopIpAddress**: string: Gets or sets the IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
* **nextHopType**: 'Internet' | 'None' | 'VirtualAppliance' | 'VirtualNetworkGateway' | 'VnetLocal' | string (Required): Gets or sets the type of Azure hop the packet should be sent to.
* **provisioningState**: string: Gets provisioning state of the resource Updating/Deleting/Failed

## RouteTable
### Properties
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **location**: string: Resource location
* **name**: string (ReadOnly): Resource name
* **properties**: [RouteTablePropertiesFormat](#routetablepropertiesformat): Route Table resource
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string (ReadOnly): Resource type

## RouteTablePropertiesFormat
### Properties
* **provisioningState**: string: Gets provisioning state of the resource Updating/Deleting/Failed
* **routes**: [Route](#route)[]: Gets or sets Routes in a Route Table
* **subnets**: [Subnet](#subnet)[] (ReadOnly): Gets collection of references to subnets

## SecurityRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [SecurityRulePropertiesFormat](#securityrulepropertiesformat)

## SecurityRulePropertiesFormat
### Properties
* **access**: 'Allow' | 'Deny' | string (Required): Gets or sets network traffic is allowed or denied. Possible values are 'Allow' and 'Deny'
* **description**: string: Gets or sets a description for this rule. Restricted to 140 chars.
* **destinationAddressPrefix**: string (Required): Gets or sets destination address prefix. CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
* **destinationPortRange**: string: Gets or sets Destination Port or Range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
* **direction**: 'Inbound' | 'Outbound' | string (Required): Gets or sets the direction of the rule.InBound or Outbound. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
* **priority**: int: Gets or sets the priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
* **protocol**: '*' | 'Tcp' | 'Udp' | string (Required): Gets or sets Network protocol this rule applies to. Can be Tcp, Udp or All(*).
* **provisioningState**: string: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
* **sourceAddressPrefix**: string (Required): Gets or sets source address prefix. CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
* **sourcePortRange**: string: Gets or sets Source Port or Range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.

## Subnet
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets or sets the name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [SubnetPropertiesFormat](#subnetpropertiesformat)

## SubnetPropertiesFormat
### Properties
* **addressPrefix**: string: Gets or sets Address prefix for the subnet.
* **ipConfigurations**: [IPConfiguration](#ipconfiguration)[] (ReadOnly): Gets array of references to the network interface IP configurations using subnet
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup): Gets or sets the reference of the NetworkSecurityGroup resource
* **provisioningState**: string: Gets provisioning state of the resource
* **resourceNavigationLinks**: [ResourceNavigationLink](#resourcenavigationlink)[]: Gets array of references to the external resources using subnet
* **routeTable**: [RouteTable](#routetable): Gets or sets the reference of the RouteTable resource

## SubResource
### Properties
* **id**: string: Resource Id

## VirtualNetworkGateway
### Properties
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **location**: string: Resource location
* **name**: string (ReadOnly): Resource name
* **properties**: [VirtualNetworkGatewayPropertiesFormat](#virtualnetworkgatewaypropertiesformat): VirtualNetworkGateway properties
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string (ReadOnly): Resource type

## VirtualNetworkGatewayConnectionPropertiesFormat
### Properties
* **authorizationKey**: string: The authorizationKey.
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' | string: Virtual network Gateway connection status
* **connectionType**: 'ExpressRoute' | 'IPsec' | 'VPNClient' | 'Vnet2Vnet' | string: Gateway connection type IPsec/Dedicated/VpnClient/Vnet2Vnet
* **egressBytesTransferred**: int: The Egress Bytes Transferred in this connection
* **enableBgp**: bool: EnableBgp Flag
* **ingressBytesTransferred**: int: The Ingress Bytes Transferred in this connection
* **localNetworkGateway2**: [LocalNetworkGateway](#localnetworkgateway): A common class for general resource information
* **peer**: [SubResource](#subresource): The reference to peerings resource.
* **provisioningState**: string: Gets provisioning state of the VirtualNetworkGatewayConnection resource Updating/Deleting/Failed
* **resourceGuid**: string: Gets or sets resource guid property of the VirtualNetworkGatewayConnection resource
* **routingWeight**: int: The Routing weight.
* **sharedKey**: string: The IPsec share key.
* **virtualNetworkGateway1**: [VirtualNetworkGateway](#virtualnetworkgateway): A common class for general resource information
* **virtualNetworkGateway2**: [VirtualNetworkGateway](#virtualnetworkgateway): A common class for general resource information

## VirtualNetworkGatewayIPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [VirtualNetworkGatewayIPConfigurationPropertiesFormat](#virtualnetworkgatewayipconfigurationpropertiesformat): Properties of VirtualNetworkGatewayIPConfiguration

## VirtualNetworkGatewayIPConfigurationPropertiesFormat
### Properties
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: Gets or sets PrivateIP allocation method
* **provisioningState**: string: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
* **publicIPAddress**: [SubResource](#subresource): Gets or sets the reference of the PublicIP resource
* **subnet**: [SubResource](#subresource): Gets or sets the reference of the subnet resource

## VirtualNetworkGatewayPropertiesFormat
### Properties
* **activeActive**: bool: ActiveActive flag
* **bgpSettings**: [BgpSettings](#bgpsettings): Virtual network gateway's BGP speaker settings
* **enableBgp**: bool: EnableBgp Flag
* **gatewayDefaultSite**: [SubResource](#subresource): Gets or sets the reference of the LocalNetworkGateway resource which represents Local network site having default routes. Assign Null value in case of removing existing default site setting.
* **gatewayType**: 'ExpressRoute' | 'Vpn' | string: The type of this virtual network gateway.
* **ipConfigurations**: [VirtualNetworkGatewayIPConfiguration](#virtualnetworkgatewayipconfiguration)[]: IpConfigurations for Virtual network gateway.
* **provisioningState**: string: Gets provisioning state of the VirtualNetworkGateway resource Updating/Deleting/Failed
* **resourceGuid**: string: Gets or sets resource guid property of the VirtualNetworkGateway resource
* **sku**: [VirtualNetworkGatewaySku](#virtualnetworkgatewaysku): Gets or sets the reference of the VirtualNetworkGatewaySku resource which represents the sku selected for Virtual network gateway.
* **vpnClientConfiguration**: [VpnClientConfiguration](#vpnclientconfiguration): Gets or sets the reference of the VpnClientConfiguration resource which represents the P2S VpnClient configurations.
* **vpnType**: 'PolicyBased' | 'RouteBased' | string: The type of this virtual network gateway.

## VirtualNetworkGatewaySku
### Properties
* **capacity**: int: The capacity
* **name**: 'Basic' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | string: Gateway sku name -Basic/HighPerformance/Standard/UltraPerformance
* **tier**: 'Basic' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | string: Gateway sku tier -Basic/HighPerformance/Standard/UltraPerformance

## VirtualNetworkPeering
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets or sets the name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [VirtualNetworkPeeringPropertiesFormat](#virtualnetworkpeeringpropertiesformat)

## VirtualNetworkPeeringPropertiesFormat
### Properties
* **allowForwardedTraffic**: bool: Gets or sets whether the forwarded traffic from the VMs in the remote virtual network will be allowed/disallowed
* **allowGatewayTransit**: bool: Gets or sets if gatewayLinks can be used in remote virtual network’s link to this virtual network
* **allowVirtualNetworkAccess**: bool: Gets or sets whether the VMs in the linked virtual network space would be able to access all the VMs in local Virtual network space
* **peeringState**: 'Connected' | 'Disconnected' | 'Initiated' | string: Gets the status of the virtual network peering
* **provisioningState**: string: Gets provisioning state of the resource
* **remoteVirtualNetwork**: [SubResource](#subresource): Gets or sets the reference of the remote virtual network
* **useRemoteGateways**: bool: Gets or sets if remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only 1 peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.

## VirtualNetworkPropertiesFormat
### Properties
* **addressSpace**: [AddressSpace](#addressspace): Gets or sets AddressSpace that contains an array of IP address ranges that can be used by subnets
* **dhcpOptions**: [DhcpOptions](#dhcpoptions): Gets or sets DHCPOptions that contains an array of DNS servers available to VMs deployed in the virtual network
* **provisioningState**: string: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
* **resourceGuid**: string: Gets or sets resource guid property of the VirtualNetwork resource
* **subnets**: [Subnet](#subnet)[]: Gets or sets list of subnets in a VirtualNetwork
* **VirtualNetworkPeerings**: [VirtualNetworkPeering](#virtualnetworkpeering)[]: Gets or sets list of peerings in a VirtualNetwork

## VpnClientConfiguration
### Properties
* **vpnClientAddressPool**: [AddressSpace](#addressspace): Gets or sets the reference of the Address space resource which represents Address space for P2S VpnClient.
* **vpnClientRevokedCertificates**: [VpnClientRevokedCertificate](#vpnclientrevokedcertificate)[]: VpnClientRevokedCertificate for Virtual network gateway.
* **vpnClientRootCertificates**: [VpnClientRootCertificate](#vpnclientrootcertificate)[]: VpnClientRootCertificate for Virtual network gateway.

## VpnClientRevokedCertificate
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [VpnClientRevokedCertificatePropertiesFormat](#vpnclientrevokedcertificatepropertiesformat): Properties of the revoked VPN client certificate of virtual network gateway

## VpnClientRevokedCertificatePropertiesFormat
### Properties
* **provisioningState**: string: Gets provisioning state of the VPN client revoked certificate resource Updating/Deleting/Failed
* **thumbprint**: string: Gets or sets the revoked Vpn client certificate thumbprint

## VpnClientRootCertificate
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [VpnClientRootCertificatePropertiesFormat](#vpnclientrootcertificatepropertiesformat): Properties of SSL certificates of application gateway

## VpnClientRootCertificatePropertiesFormat
### Properties
* **provisioningState**: string: Gets provisioning state of the VPN client root certificate resource Updating/Deleting/Failed
* **publicCertData**: string: Gets or sets the certificate public data

