# Microsoft.Network @ 2015-05-01-preview

## Resource Microsoft.Network/applicationGateways@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationGatewayPropertiesFormat](#applicationgatewaypropertiesformat): Properties of Application Gateway
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/applicationGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/connections@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkGatewayConnectionPropertiesFormat](#virtualnetworkgatewayconnectionpropertiesformat): VirtualNetworkGatewayConnection properties
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/connections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteCircuitPropertiesFormat](#expressroutecircuitpropertiesformat): Properties of ExpressRouteCircuit
* **sku**: [ExpressRouteCircuitSku](#expressroutecircuitsku): Gets or sets sku
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/expressRouteCircuits' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits/authorizations@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationPropertiesFormat](#authorizationpropertiesformat)
* **type**: 'Microsoft.Network/expressRouteCircuits/authorizations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits/peerings@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteCircuitPeeringPropertiesFormat](#expressroutecircuitpeeringpropertiesformat)
* **type**: 'Microsoft.Network/expressRouteCircuits/peerings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/loadBalancers@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LoadBalancerPropertiesFormat](#loadbalancerpropertiesformat): Properties of Load Balancer
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/loadBalancers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/localNetworkGateways@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LocalNetworkGatewayPropertiesFormat](#localnetworkgatewaypropertiesformat): LocalNetworkGateway properties
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/localNetworkGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkInterfaces@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat): NetworkInterface properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/networkInterfaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityGroups@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkSecurityGroupPropertiesFormat](#networksecuritygrouppropertiesformat): Network Security Group resource
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/networkSecurityGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityGroups/securityRules@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityRulePropertiesFormat](#securityrulepropertiesformat)
* **type**: 'Microsoft.Network/networkSecurityGroups/securityRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/publicIPAddresses@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublicIpAddressPropertiesFormat](#publicipaddresspropertiesformat): PublicIpAddress properties
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/publicIPAddresses' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/routeTables@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RouteTablePropertiesFormat](#routetablepropertiesformat): Route Table resource
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/routeTables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/routeTables/routes@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoutePropertiesFormat](#routepropertiesformat): Route resource
* **type**: 'Microsoft.Network/routeTables/routes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualnetworkgateways@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkGatewayPropertiesFormat](#virtualnetworkgatewaypropertiesformat): VirtualNetworkGateway properties
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/virtualnetworkgateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualnetworks@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkPropertiesFormat](#virtualnetworkpropertiesformat)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/virtualnetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualnetworks/subnets@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SubnetPropertiesFormat](#subnetpropertiesformat)
* **type**: 'Microsoft.Network/virtualnetworks/subnets' (ReadOnly, DeployTimeConstant): The resource type

## AddressSpace
### Properties
* **addressPrefixes**: string[]: Gets or sets List of address blocks reserved for this virtual network in CIDR notation

## ApplicationGatewayBackendAddress
### Properties
* **fqdn**: string: Gets or sets the dns name
* **ipAddress**: string: Gets or sets the ip address

## ApplicationGatewayBackendAddressPool
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewayBackendAddressPoolPropertiesFormat](#applicationgatewaybackendaddresspoolpropertiesformat): Properties of Backend Address Pool of application gateway

## ApplicationGatewayBackendAddressPoolPropertiesFormat
### Properties
* **backendAddresses**: [ApplicationGatewayBackendAddress](#applicationgatewaybackendaddress)[]: Gets or sets the backend addresses
* **backendIPConfigurations**: [SubResource](#subresource)[]: Gets or sets backendIPConfiguration of application gateway
* **provisioningState**: string: Gets or sets Provisioning state of the backend address pool resource Updating/Deleting/Failed

## ApplicationGatewayBackendHttpSettings
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewayBackendHttpSettingsPropertiesFormat](#applicationgatewaybackendhttpsettingspropertiesformat): Properties of Backend address pool settings of application gateway

## ApplicationGatewayBackendHttpSettingsPropertiesFormat
### Properties
* **cookieBasedAffinity**: 'Disabled' | 'Enabled' | string: Gets or sets the cookie affinity
* **port**: int: Gets or sets the port
* **protocol**: 'Http' | 'Https' | string: Gets or sets the protocol
* **provisioningState**: string: Gets or sets Provisioning state of the backend http settings resource Updating/Deleting/Failed

## ApplicationGatewayFrontendIPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewayFrontendIPConfigurationPropertiesFormat](#applicationgatewayfrontendipconfigurationpropertiesformat): Properties of Frontend IP configuration of application gateway

## ApplicationGatewayFrontendIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string: Gets or sets the privateIPAddress of the Network Interface IP Configuration
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: Gets or sets PrivateIP allocation method (Static/Dynamic)
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **publicIPAddress**: [SubResource](#subresource): Gets or sets the reference of the PublicIP resource
* **subnet**: [SubResource](#subresource): Gets or sets the reference of the subnet resource

## ApplicationGatewayFrontendPort
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewayFrontendPortPropertiesFormat](#applicationgatewayfrontendportpropertiesformat): Properties of Frontend Port of application gateway

## ApplicationGatewayFrontendPortPropertiesFormat
### Properties
* **port**: int: Gets or sets the frontend port
* **provisioningState**: string: Gets or sets Provisioning state of the frontend port resource Updating/Deleting/Failed

## ApplicationGatewayHttpListener
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewayHttpListenerPropertiesFormat](#applicationgatewayhttplistenerpropertiesformat): Properties of Http listener of application gateway

## ApplicationGatewayHttpListenerPropertiesFormat
### Properties
* **frontendIPConfiguration**: [SubResource](#subresource): Gets or sets frontend IP configuration resource of application gateway
* **frontendPort**: [SubResource](#subresource): Gets or sets frontend port resource of application gateway
* **protocol**: 'Http' | 'Https' | string: Gets or sets the protocol
* **provisioningState**: string: Gets or sets Provisioning state of the http listener resource Updating/Deleting/Failed
* **sslCertificate**: [SubResource](#subresource): Gets or sets ssl certificate resource of application gateway

## ApplicationGatewayIPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewayIPConfigurationPropertiesFormat](#applicationgatewayipconfigurationpropertiesformat): Properties of IP configuration of application gateway

## ApplicationGatewayIPConfigurationPropertiesFormat
### Properties
* **provisioningState**: string: Gets or sets Provisioning state of the application gateway subnet resource Updating/Deleting/Failed
* **subnet**: [SubResource](#subresource): Gets or sets the reference of the subnet resource.A subnet from where application gateway gets its private address

## ApplicationGatewayPropertiesFormat
### Properties
* **backendAddressPools**: [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)[]: Gets or sets backend address pool of application gateway resource
* **backendHttpSettingsCollection**: [ApplicationGatewayBackendHttpSettings](#applicationgatewaybackendhttpsettings)[]: Gets or sets backend http settings of application gateway resource
* **frontendIPConfigurations**: [ApplicationGatewayFrontendIPConfiguration](#applicationgatewayfrontendipconfiguration)[]: Gets or sets frontend IP addresses of application gateway resource
* **frontendPorts**: [ApplicationGatewayFrontendPort](#applicationgatewayfrontendport)[]: Gets or sets frontend ports of application gateway resource
* **gatewayIPConfigurations**: [ApplicationGatewayIPConfiguration](#applicationgatewayipconfiguration)[]: Gets or sets subnets of application gateway resource
* **httpListeners**: [ApplicationGatewayHttpListener](#applicationgatewayhttplistener)[]: Gets or sets HTTP listeners of application gateway resource
* **operationalState**: 'Running' | 'Starting' | 'Stopped' | 'Stopping' | string (ReadOnly): Gets operational state of application gateway resource
* **provisioningState**: string: Gets or sets Provisioning state of the ApplicationGateway resource Updating/Deleting/Failed
* **requestRoutingRules**: [ApplicationGatewayRequestRoutingRule](#applicationgatewayrequestroutingrule)[]: Gets or sets request routing rules of application gateway resource
* **resourceGuid**: string: Gets or sets resource guid property of the ApplicationGateway resource
* **sku**: [ApplicationGatewaySku](#applicationgatewaysku): Gets or sets sku of application gateway resource
* **sslCertificates**: [ApplicationGatewaySslCertificate](#applicationgatewaysslcertificate)[]: Gets or sets ssl certificates of application gateway resource

## ApplicationGatewayRequestRoutingRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewayRequestRoutingRulePropertiesFormat](#applicationgatewayrequestroutingrulepropertiesformat): Properties of Request routing rule of application gateway

## ApplicationGatewayRequestRoutingRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource): Gets or sets backend address pool resource of application gateway
* **backendHttpSettings**: [SubResource](#subresource): Gets or sets frontend port resource of application gateway
* **httpListener**: [SubResource](#subresource): Gets or sets http listener resource of application gateway
* **provisioningState**: string: Gets or sets Provisioning state of the request routing rule resource Updating/Deleting/Failed
* **ruleType**: 'Basic' | string: Gets or sets the rule type

## ApplicationGatewaySku
### Properties
* **capacity**: int: Gets or sets capacity (instance count) of application gateway
* **name**: 'Standard_Large' | 'Standard_Medium' | 'Standard_Small' | string: Gets or sets name of application gateway SKU
* **tier**: 'Standard' | string: Gets or sets tier of application gateway

## ApplicationGatewaySslCertificate
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewaySslCertificatePropertiesFormat](#applicationgatewaysslcertificatepropertiesformat): Properties of SSL certificates of application gateway

## ApplicationGatewaySslCertificatePropertiesFormat
### Properties
* **data**: string: Gets or sets the certificate data
* **password**: string: Gets or sets the certificate password
* **provisioningState**: string: Gets or sets Provisioning state of the ssl certificate resource Updating/Deleting/Failed
* **publicCertData**: string: Gets or sets the certificate public data

## AuthorizationPropertiesFormat
### Properties
* **authorizationKey**: string: Gets or sets the authorization key
* **authorizationUseStatus**: 'Available' | 'InUse' | string: Gets or sets AuthorizationUseStatus
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed

## BackendAddressPool
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [BackendAddressPoolPropertiesFormat](#backendaddresspoolpropertiesformat): Properties of BackendAddressPool

## BackendAddressPoolPropertiesFormat
### Properties
* **backendIPConfigurations**: [SubResource](#subresource)[]: Gets collection of references to IPs defined in NICs
* **loadBalancingRules**: [SubResource](#subresource)[]: Gets Load Balancing rules that use this Backend Address Pool
* **outboundNatRule**: [SubResource](#subresource): Gets outbound rules that use this Backend Address Pool
* **provisioningState**: string: Provisioning state of the PublicIP resource Updating/Deleting/Failed

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
* **microsoftPeeringConfig**: [ExpressRouteCircuitPeeringConfig](#expressroutecircuitpeeringconfig): Gets or sets the Microsoft peering config
* **peerASN**: int: Gets or sets the peer ASN
* **peeringType**: 'AzurePrivatePeering' | 'AzurePublicPeering' | 'MicrosoftPeering' | string: Gets or sets PeeringType
* **primaryAzurePort**: string: Gets or sets the primary port
* **primaryPeerAddressPrefix**: string: Gets or sets the primary address prefix
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **secondaryAzurePort**: string: Gets or sets the secondary port
* **secondaryPeerAddressPrefix**: string: Gets or sets the secondary address prefix
* **sharedKey**: string: Gets or sets the shared key
* **state**: 'Disabled' | 'Enabled' | string: Gets or sets state of Peering
* **stats**: [ExpressRouteCircuitStats](#expressroutecircuitstats): Gets or peering stats
* **vlanId**: int: Gets or sets the vlan id

## ExpressRouteCircuitPropertiesFormat
### Properties
* **authorizations**: [ExpressRouteCircuitAuthorization](#expressroutecircuitauthorization)[]: Gets or sets list of authorizations
* **circuitProvisioningState**: string: Gets or sets CircuitProvisioningState state of the resource
* **peerings**: [ExpressRouteCircuitPeering](#expressroutecircuitpeering)[]: Gets or sets list of peerings
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
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
* **bytesIn**: int: Gets BytesIn of the peering.
* **bytesOut**: int: Gets BytesOut of the peering.

## FrontendIpConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [FrontendIpConfigurationPropertiesFormat](#frontendipconfigurationpropertiesformat): Properties of Frontend IP Configuration of the load balancer

## FrontendIpConfigurationPropertiesFormat
### Properties
* **inboundNatPools**: [SubResource](#subresource)[]: Read only.Inbound pools URIs that use this frontend IP
* **inboundNatRules**: [SubResource](#subresource)[]: Read only.Inbound rules URIs that use this frontend IP
* **loadBalancingRules**: [SubResource](#subresource)[]: Gets Load Balancing rules URIs that use this frontend IP
* **outboundNatRules**: [SubResource](#subresource)[]: Read only.Outbound rules URIs that use this frontend IP
* **privateIPAddress**: string: Gets or sets the IP address of the Load Balancer.This is only specified if a specific private IP address shall be allocated from the subnet specified in subnetRef
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: Gets or sets PrivateIP allocation method (Static/Dynamic)
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **publicIPAddress**: [SubResource](#subresource): Gets or sets the reference of the PublicIP resource
* **subnet**: [SubResource](#subresource): Gets or sets the reference of the subnet resource.A subnet from where the load balancer gets its private frontend address

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
* **protocol**: 'Tcp' | 'Udp' | string (Required): Gets or sets the transport protocol for the external endpoint. Possible values are Udp or Tcp
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed

## InboundNatRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [InboundNatRulePropertiesFormat](#inboundnatrulepropertiesformat): Properties of Inbound NAT rule

## InboundNatRulePropertiesFormat
### Properties
* **backendIPConfiguration**: [SubResource](#subresource): Gets or sets a reference to a private ip address defined on a NetworkInterface of a VM. Traffic sent to frontendPort of each of the frontendIPConfigurations is forwarded to the backed IP
* **backendPort**: int: Gets or sets a port used for internal connections on the endpoint. The localPort attribute maps the eternal port of the endpoint to an internal port on a role. This is useful in scenarios where a role must communicate to an internal component on a port that is different from the one that is exposed externally. If not specified, the value of localPort is the same as the port attribute. Set the value of localPort to '*' to automatically assign an unallocated port that is discoverable using the runtime API
* **enableFloatingIP**: bool (Required): Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn availability Group. This setting is required when using the SQL Always ON availability Groups in SQL server. This setting can't be changed after you create the endpoint
* **frontendIPConfiguration**: [SubResource](#subresource): Gets or sets a reference to frontend IP Addresses
* **frontendPort**: int (Required): Gets or sets the port for the external endpoint. You can specify any port number you choose, but the port numbers specified for each role in the service must be unique. Possible values range between 1 and 65535, inclusive
* **idleTimeoutInMinutes**: int: Gets or sets the timeout for the Tcp idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to Tcp
* **protocol**: 'Tcp' | 'Udp' | string (Required): Gets or sets the transport protocol for the external endpoint. Possible values are Udp or Tcp
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed

## LoadBalancerPropertiesFormat
### Properties
* **backendAddressPools**: [BackendAddressPool](#backendaddresspool)[]: Gets or sets Pools of backend IP addresses
* **frontendIPConfigurations**: [FrontendIpConfiguration](#frontendipconfiguration)[]: Gets or sets frontend IP addresses of the load balancer
* **inboundNatPools**: [InboundNatPool](#inboundnatpool)[]: Gets or sets inbound NAT pools
* **inboundNatRules**: [InboundNatRule](#inboundnatrule)[]: Gets or sets list of inbound rules
* **loadBalancingRules**: [LoadBalancingRule](#loadbalancingrule)[]: Gets or sets load balancing rules
* **outboundNatRules**: [OutboundNatRule](#outboundnatrule)[]: Gets or sets outbound NAT rules
* **probes**: [Probe](#probe)[]: Gets or sets list of Load balancer probes
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **resourceGuid**: string: Gets or sets resource guid property of the Load balancer resource

## LoadBalancingRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [LoadBalancingRulePropertiesFormat](#loadbalancingrulepropertiesformat): Properties of the load balancer

## LoadBalancingRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource) (Required): Gets or sets  a reference to a pool of DIPs. Inbound traffic is randomly load balanced across IPs in the backend IPs
* **backendPort**: int: Gets or sets a port used for internal connections on the endpoint. The localPort attribute maps the eternal port of the endpoint to an internal port on a role. This is useful in scenarios where a role must communicate to an internal component on a port that is different from the one that is exposed externally. If not specified, the value of localPort is the same as the port attribute. Set the value of localPort to '*' to automatically assign an unallocated port that is discoverable using the runtime API
* **enableFloatingIP**: bool (Required): Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn availability Group. This setting is required when using the SQL Always ON availability Groups in SQL server. This setting can't be changed after you create the endpoint
* **frontendIPConfiguration**: [SubResource](#subresource): Gets or sets a reference to frontend IP Addresses
* **frontendPort**: int (Required): Gets or sets the port for the external endpoint. You can specify any port number you choose, but the port numbers specified for each role in the service must be unique. Possible values range between 1 and 65535, inclusive
* **idleTimeoutInMinutes**: int: Gets or sets the timeout for the Tcp idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to Tcp
* **loadDistribution**: 'Default' | 'SourceIP' | 'SourceIPProtocol' | string: Gets or sets the load distribution policy for this rule
* **probe**: [SubResource](#subresource): Gets or sets the reference of the load balancer probe used by the Load Balancing rule.
* **protocol**: 'Tcp' | 'Udp' | string (Required): Gets or sets the transport protocol for the external endpoint. Possible values are Udp or Tcp
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed

## LocalNetworkGateway
### Properties
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly): Resource Id
* **location**: string (Required): Resource location
* **name**: string (ReadOnly): Resource name
* **properties**: [LocalNetworkGatewayPropertiesFormat](#localnetworkgatewaypropertiesformat): LocalNetworkGateway properties
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string (ReadOnly): Resource type

## LocalNetworkGatewayPropertiesFormat
### Properties
* **gatewayIpAddress**: string: IP address of local network gateway.
* **localNetworkAddressSpace**: [AddressSpace](#addressspace): Local network site Address space
* **provisioningState**: string: Gets or sets Provisioning state of the LocalNetworkGateway resource Updating/Deleting/Failed
* **resourceGuid**: string: Gets or sets resource guid property of the LocalNetworkGateway resource

## NetworkInterfaceDnsSettings
### Properties
* **appliedDnsServers**: string[]: Gets or sets list of Applied DNS servers IP addresses
* **dnsServers**: string[]: Gets or sets list of DNS servers IP addresses
* **internalDnsNameLabel**: string: Gets or sets the Internal DNS name
* **internalFqdn**: string: Gets or sets full IDNS name in the form, DnsName.VnetId.ZoneId.TopLevelSuffix. This is set when the NIC is associated to a VM

## NetworkInterfaceIpConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [NetworkInterfaceIpConfigurationPropertiesFormat](#networkinterfaceipconfigurationpropertiesformat): Properties of IPConfiguration

## NetworkInterfaceIpConfigurationPropertiesFormat
### Properties
* **loadBalancerBackendAddressPools**: [SubResource](#subresource)[]: Gets or sets the reference of LoadBalancerBackendAddressPool resource
* **loadBalancerInboundNatRules**: [SubResource](#subresource)[]: Gets or sets list of references of LoadBalancerInboundNatRules
* **privateIPAddress**: string: Gets or sets the privateIPAddress of the Network Interface IP Configuration
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: Gets or sets PrivateIP allocation method (Static/Dynamic)
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **publicIPAddress**: [SubResource](#subresource): Gets or sets the reference of the PublicIP resource
* **subnet**: [SubResource](#subresource): Gets or sets the reference of the subnet resource

## NetworkInterfacePropertiesFormat
### Properties
* **dnsSettings**: [NetworkInterfaceDnsSettings](#networkinterfacednssettings): Gets or sets DNS Settings in  NetworkInterface
* **enableIPForwarding**: bool: Gets or sets whether IPForwarding is enabled on the NIC
* **ipConfigurations**: [NetworkInterfaceIpConfiguration](#networkinterfaceipconfiguration)[]: Gets or sets list of IPConfigurations of the NetworkInterface
* **macAddress**: string: Gets the MAC Address of the network interface
* **networkSecurityGroup**: [SubResource](#subresource): Gets or sets the reference of the NetworkSecurityGroup resource
* **primary**: bool: Gets whether this is a primary NIC on a virtual machine
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **resourceGuid**: string: Gets or sets resource guid property of the network interface resource
* **virtualMachine**: [SubResource](#subresource): Gets or sets the reference of a VirtualMachine

## NetworkSecurityGroupPropertiesFormat
### Properties
* **defaultSecurityRules**: [SecurityRule](#securityrule)[]: Gets or sets Default security rules of network security group
* **networkInterfaces**: [SubResource](#subresource)[]: Gets collection of references to Network Interfaces
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **resourceGuid**: string: Gets or sets resource guid property of the network security group resource
* **securityRules**: [SecurityRule](#securityrule)[]: Gets or sets Security rules of network security group
* **subnets**: [SubResource](#subresource)[]: Gets collection of references to subnets

## OutboundNatRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [OutboundNatRulePropertiesFormat](#outboundnatrulepropertiesformat): Outbound NAT pool of the loadbalancer

## OutboundNatRulePropertiesFormat
### Properties
* **allocatedOutboundPorts**: int (Required): Gets or sets the number of outbound ports to be used for SNAT
* **backendAddressPool**: [SubResource](#subresource) (Required): Gets or sets a reference to a pool of DIPs. Outbound traffic is randomly load balanced across IPs in the backend IPs
* **frontendIPConfigurations**: [SubResource](#subresource)[]: Gets or sets Frontend IP addresses of the load balancer
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed

## Probe
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ProbePropertiesFormat](#probepropertiesformat)

## ProbePropertiesFormat
### Properties
* **intervalInSeconds**: int: Gets or sets the interval, in seconds, for how frequently to probe the endpoint for health status. Typically, the interval is slightly less than half the allocated timeout period (in seconds) which allows two full probes before taking the instance out of rotation. The default value is 15, the minimum value is 5
* **loadBalancingRules**: [SubResource](#subresource)[]: Gets Load balancer rules that use this probe
* **numberOfProbes**: int: Gets or sets the number of probes where if no response, will result in stopping further traffic from being delivered to the endpoint. This values allows endpoints to be taken out of rotation faster or slower than the typical times used in Azure.
* **port**: int (Required): Gets or sets Port for communicating the probe. Possible values range from 1 to 65535, inclusive.
* **protocol**: 'Http' | 'Tcp' | string (Required): Gets or sets the protocol of the end point. Possible values are http pr Tcp. If Tcp is specified, a received ACK is required for the probe to be successful. If http is specified,a 200 OK response from the specifies URI is required for the probe to be successful
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **requestPath**: string: Gets or sets the URI used for requesting health status from the VM. Path is required if a protocol is set to http. Otherwise, it is not allowed. There is no default value

## PublicIpAddressDnsSettings
### Properties
* **domainNameLabel**: string: Gets or sets the Domain name label.The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
* **fqdn**: string: Gets the FQDN, Fully qualified domain name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone.
* **reverseFqdn**: string: Gets or Sets the Reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.

## PublicIpAddressPropertiesFormat
### Properties
* **dnsSettings**: [PublicIpAddressDnsSettings](#publicipaddressdnssettings): Gets or sets FQDN of the DNS record associated with the public IP address
* **idleTimeoutInMinutes**: int: Gets or sets the idle timeout of the public IP address
* **ipAddress**: string: Gets the assigned public IP address
* **ipConfiguration**: [SubResource](#subresource): Gets a reference to the network interface IP configurations using this public IP address
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **publicIPAllocationMethod**: 'Dynamic' | 'Static' | string (Required): Gets or sets PublicIP allocation method (Static/Dynamic)
* **resourceGuid**: string: Gets or sets resource guid property of the PublicIP resource

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
* **provisioningState**: string: Gets or sets Provisioning state of the resource Updating/Deleting/Failed

## RouteTablePropertiesFormat
### Properties
* **provisioningState**: string: Gets or sets Provisioning state of the resource Updating/Deleting/Failed
* **routes**: [Route](#route)[]: Gets or sets Routes in a Route Table
* **subnets**: [SubResource](#subresource)[]: Gets collection of references to subnets

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
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **sourceAddressPrefix**: string (Required): Gets or sets source address prefix. CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
* **sourcePortRange**: string: Gets or sets Source Port or Range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.

## Subnet
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [SubnetPropertiesFormat](#subnetpropertiesformat)

## SubnetPropertiesFormat
### Properties
* **addressPrefix**: string (Required): Gets or sets Address prefix for the subnet.
* **ipConfigurations**: [SubResource](#subresource)[]: Gets array of references to the network interface IP configurations using subnet
* **networkSecurityGroup**: [SubResource](#subresource): Gets or sets the reference of the NetworkSecurityGroup resource
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **routeTable**: [SubResource](#subresource): Gets or sets the reference of the RouteTable resource

## SubResource
### Properties
* **id**: string: Resource Id

## VirtualNetworkGateway
### Properties
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly): Resource Id
* **location**: string (Required): Resource location
* **name**: string (ReadOnly): Resource name
* **properties**: [VirtualNetworkGatewayPropertiesFormat](#virtualnetworkgatewaypropertiesformat): VirtualNetworkGateway properties
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string (ReadOnly): Resource type

## VirtualNetworkGatewayConnectionPropertiesFormat
### Properties
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' | string: Virtual network Gateway connection status
* **connectionType**: 'ExpressRoute' | 'IPsec' | 'VPNClient' | 'Vnet2Vnet' | string: Gateway connection type IPsec/Dedicated/VpnClient/Vnet2Vnet
* **egressBytesTransferred**: int: The Egress Bytes Transferred in this connection
* **ingressBytesTransferred**: int: The Ingress Bytes Transferred in this connection
* **localNetworkGateway2**: [LocalNetworkGateway](#localnetworkgateway): A common class for general resource information
* **peer**: [SubResource](#subresource): The reference to peerings resource.
* **provisioningState**: string: Gets or sets Provisioning state of the VirtualNetworkGatewayConnection resource Updating/Deleting/Failed
* **resourceGuid**: string: Gets or sets resource guid property of the VirtualNetworkGatewayConnection resource
* **routingWeight**: int: The Routing weight.
* **sharedKey**: string: The IPsec share key.
* **virtualNetworkGateway1**: [VirtualNetworkGateway](#virtualnetworkgateway): A common class for general resource information
* **virtualNetworkGateway2**: [VirtualNetworkGateway](#virtualnetworkgateway): A common class for general resource information

## VirtualNetworkGatewayIpConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [VirtualNetworkGatewayIpConfigurationPropertiesFormat](#virtualnetworkgatewayipconfigurationpropertiesformat): Properties of VirtualNetworkGatewayIPConfiguration

## VirtualNetworkGatewayIpConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string: Gets or sets the privateIPAddress of the Network Interface IP Configuration
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: Gets or sets PrivateIP allocation method (Static/Dynamic)
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **publicIPAddress**: [SubResource](#subresource): Gets or sets the reference of the PublicIP resource
* **subnet**: [SubResource](#subresource): Gets or sets the reference of the subnet resource

## VirtualNetworkGatewayPropertiesFormat
### Properties
* **enableBgp**: bool: EnableBgp Flag
* **gatewayDefaultSite**: [SubResource](#subresource): Gets or sets the reference of the LocalNetworkGateway resource which represents Local network site having default routes. Assign Null value in case of removing existing default site setting.
* **gatewayType**: 'ExpressRoute' | 'Vpn' | string: The type of this virtual network gateway.
* **ipConfigurations**: [VirtualNetworkGatewayIpConfiguration](#virtualnetworkgatewayipconfiguration)[]: IpConfigurations for Virtual network gateway.
* **provisioningState**: string: Gets or sets Provisioning state of the VirtualNetworkGateway resource Updating/Deleting/Failed
* **resourceGuid**: string: Gets or sets resource guid property of the VirtualNetworkGateway resource
* **vpnType**: 'PolicyBased' | 'RouteBased' | string: The type of this virtual network gateway.

## VirtualNetworkPropertiesFormat
### Properties
* **addressSpace**: [AddressSpace](#addressspace): Gets or sets AddressSpace that contains an array of IP address ranges that can be used by subnets
* **dhcpOptions**: [DhcpOptions](#dhcpoptions): Gets or sets DHCPOptions that contains an array of DNS servers available to VMs deployed in the virtual network
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **resourceGuid**: string: Gets or sets resource guid property of the VirtualNetwork resource
* **subnets**: [Subnet](#subnet)[]: Gets or sets List of subnets in a VirtualNetwork

