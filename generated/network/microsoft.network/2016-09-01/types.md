# Microsoft.Network @ 2016-09-01

## Resource Microsoft.Network/applicationGateways@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationGatewayPropertiesFormat](#applicationgatewaypropertiesformat): Properties of the application gateway.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/applicationGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/connections@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkGatewayConnectionPropertiesFormat](#virtualnetworkgatewayconnectionpropertiesformat) (Required): VirtualNetworkGatewayConnection properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/connections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteCircuitPropertiesFormat](#expressroutecircuitpropertiesformat): Properties of ExpressRouteCircuit.
* **sku**: [ExpressRouteCircuitSku](#expressroutecircuitsku): The SKU.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/expressRouteCircuits' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits/authorizations@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationPropertiesFormat](#authorizationpropertiesformat)
* **type**: 'Microsoft.Network/expressRouteCircuits/authorizations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits/peerings@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteCircuitPeeringPropertiesFormat](#expressroutecircuitpeeringpropertiesformat)
* **type**: 'Microsoft.Network/expressRouteCircuits/peerings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/loadBalancers@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LoadBalancerPropertiesFormat](#loadbalancerpropertiesformat): Properties of the load balancer.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/loadBalancers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/localNetworkGateways@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LocalNetworkGatewayPropertiesFormat](#localnetworkgatewaypropertiesformat) (Required): LocalNetworkGateway properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/localNetworkGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkInterfaces@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat): NetworkInterface properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkInterfaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityGroups@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkSecurityGroupPropertiesFormat](#networksecuritygrouppropertiesformat): Network Security Group resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkSecurityGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityGroups/securityRules@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityRulePropertiesFormat](#securityrulepropertiesformat)
* **type**: 'Microsoft.Network/networkSecurityGroups/securityRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkWatchers@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkWatcherPropertiesFormat](#networkwatcherpropertiesformat): The network watcher properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkWatchers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkWatchers/packetCaptures@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PacketCaptureParametersOrPacketCaptureResultProperties](#packetcaptureparametersorpacketcaptureresultproperties) (Required): Parameters that define the create packet capture operation.
* **type**: 'Microsoft.Network/networkWatchers/packetCaptures' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/publicIPAddresses@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat): Public IP address properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/publicIPAddresses' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/routeTables@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RouteTablePropertiesFormat](#routetablepropertiesformat): Route Table resource
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/routeTables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/routeTables/routes@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoutePropertiesFormat](#routepropertiesformat): Route resource
* **type**: 'Microsoft.Network/routeTables/routes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworkGateways@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkGatewayPropertiesFormat](#virtualnetworkgatewaypropertiesformat) (Required): VirtualNetworkGateway properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/virtualNetworkGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworks@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkPropertiesFormat](#virtualnetworkpropertiesformat)
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/virtualNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworks/subnets@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SubnetPropertiesFormat](#subnetpropertiesformat)
* **type**: 'Microsoft.Network/virtualNetworks/subnets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworks/virtualNetworkPeerings@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkPeeringPropertiesFormat](#virtualnetworkpeeringpropertiesformat)
* **type**: 'Microsoft.Network/virtualNetworks/virtualNetworkPeerings' (ReadOnly, DeployTimeConstant): The resource type

## AddressSpace
### Properties
* **addressPrefixes**: string[]: A list of address blocks reserved for this virtual network in CIDR notation.

## ApplicationGatewayAuthenticationCertificate
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ApplicationGatewayAuthenticationCertificatePropertiesFormat](#applicationgatewayauthenticationcertificatepropertiesformat): Authentication certificates properties of an application gateway.

## ApplicationGatewayAuthenticationCertificatePropertiesFormat
### Properties
* **data**: string: Certificate public data.
* **provisioningState**: string: Provisioning state of the authentication certificate resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## ApplicationGatewayBackendAddress
### Properties
* **fqdn**: string: Fully qualified domain name (FQDN).
* **ipAddress**: string: IP address

## ApplicationGatewayBackendAddressPool
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ApplicationGatewayBackendAddressPoolPropertiesFormat](#applicationgatewaybackendaddresspoolpropertiesformat): Properties of Backend Address Pool of an application gateway.

## ApplicationGatewayBackendAddressPoolPropertiesFormat
### Properties
* **backendAddresses**: [ApplicationGatewayBackendAddress](#applicationgatewaybackendaddress)[]: Backend addresses
* **backendIPConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[]: Collection of references to IPs defined in network interfaces.
* **provisioningState**: string: Provisioning state of the backend address pool resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## ApplicationGatewayBackendHttpSettings
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ApplicationGatewayBackendHttpSettingsPropertiesFormat](#applicationgatewaybackendhttpsettingspropertiesformat): Properties of Backend address pool settings of an application gateway.

## ApplicationGatewayBackendHttpSettingsPropertiesFormat
### Properties
* **authenticationCertificates**: [SubResource](#subresource)[]: Array of references to application gateway authentication certificates.
* **cookieBasedAffinity**: 'Disabled' | 'Enabled' | string: Cookie based affinity. Possible values are: 'Enabled' and 'Disabled'.
* **port**: int: Port
* **probe**: [SubResource](#subresource): Probe resource of an application gateway.
* **protocol**: 'Http' | 'Https' | string: Protocol. Possible values are: 'Http' and 'Https'.
* **provisioningState**: string: Provisioning state of the backend http settings resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **requestTimeout**: int: Request timeout in seconds. Application Gateway will fail the request if response is not received within RequestTimeout. Acceptable values are from 1 second to 86400 seconds.

## ApplicationGatewayFrontendIPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ApplicationGatewayFrontendIPConfigurationPropertiesFormat](#applicationgatewayfrontendipconfigurationpropertiesformat): Properties of Frontend IP configuration of an application gateway.

## ApplicationGatewayFrontendIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string: PrivateIPAddress of the network interface IP Configuration.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: PrivateIP allocation method. Possible values are: 'Static' and 'Dynamic'.
* **provisioningState**: string: Provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicIPAddress**: [SubResource](#subresource): Reference of the PublicIP resource.
* **subnet**: [SubResource](#subresource): Reference of the subnet resource.

## ApplicationGatewayFrontendPort
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ApplicationGatewayFrontendPortPropertiesFormat](#applicationgatewayfrontendportpropertiesformat): Properties of Frontend port of an application gateway.

## ApplicationGatewayFrontendPortPropertiesFormat
### Properties
* **port**: int: Frontend port
* **provisioningState**: string: Provisioning state of the frontend port resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## ApplicationGatewayHttpListener
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ApplicationGatewayHttpListenerPropertiesFormat](#applicationgatewayhttplistenerpropertiesformat): Properties of HTTP listener of an application gateway.

## ApplicationGatewayHttpListenerPropertiesFormat
### Properties
* **frontendIPConfiguration**: [SubResource](#subresource): Frontend IP configuration resource of an application gateway.
* **frontendPort**: [SubResource](#subresource): Frontend port resource of an application gateway.
* **hostName**: string: Host name of HTTP listener.
* **protocol**: 'Http' | 'Https' | string: Protocol. Possible values are: 'Http' and 'Https'.
* **provisioningState**: string: Provisioning state of the HTTP listener resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **requireServerNameIndication**: bool: Applicable only if protocol is https. Enables SNI for multi-hosting.
* **sslCertificate**: [SubResource](#subresource): SSL certificate resource of an application gateway.

## ApplicationGatewayIPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ApplicationGatewayIPConfigurationPropertiesFormat](#applicationgatewayipconfigurationpropertiesformat): Properties of IP configuration of an application gateway.

## ApplicationGatewayIPConfigurationPropertiesFormat
### Properties
* **provisioningState**: string: Provisioning state of the application gateway subnet resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **subnet**: [SubResource](#subresource): Reference of the subnet resource. A subnet from where application gateway gets its private address.

## ApplicationGatewayPathRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ApplicationGatewayPathRulePropertiesFormat](#applicationgatewaypathrulepropertiesformat): Properties of probe of an application gateway.

## ApplicationGatewayPathRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource): Backend address pool resource of URL path map.
* **backendHttpSettings**: [SubResource](#subresource): Backend http settings resource of URL path map.
* **paths**: string[]: Path rules of URL path map.
* **provisioningState**: string: Path rule of URL path map resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## ApplicationGatewayProbe
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ApplicationGatewayProbePropertiesFormat](#applicationgatewayprobepropertiesformat): Properties of probe of an application gateway.

## ApplicationGatewayProbePropertiesFormat
### Properties
* **host**: string: Host name to send the probe to.
* **interval**: int: The probing interval in seconds. This is the time interval between two consecutive probes. Acceptable values are from 1 second to 86400 seconds.
* **path**: string: Relative path of probe. Valid path starts from '/'. Probe is sent to <Protocol>://<host>:<port><path>
* **protocol**: 'Http' | 'Https' | string: Protocol. Possible values are: 'Http' and 'Https'.
* **provisioningState**: string: Provisioning state of the backend http settings resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **timeout**: int: the probe timeout in seconds. Probe marked as failed if valid response is not received with this timeout period. Acceptable values are from 1 second to 86400 seconds.
* **unhealthyThreshold**: int: The probe retry count. Backend server is marked down after consecutive probe failure count reaches UnhealthyThreshold. Acceptable values are from 1 second to 20.

## ApplicationGatewayPropertiesFormat
### Properties
* **authenticationCertificates**: [ApplicationGatewayAuthenticationCertificate](#applicationgatewayauthenticationcertificate)[]: Authentication certificates of the application gateway resource.
* **backendAddressPools**: [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)[]: Backend address pool of the application gateway resource.
* **backendHttpSettingsCollection**: [ApplicationGatewayBackendHttpSettings](#applicationgatewaybackendhttpsettings)[]: Backend http settings of the application gateway resource.
* **frontendIPConfigurations**: [ApplicationGatewayFrontendIPConfiguration](#applicationgatewayfrontendipconfiguration)[]: Frontend IP addresses of the application gateway resource.
* **frontendPorts**: [ApplicationGatewayFrontendPort](#applicationgatewayfrontendport)[]: Frontend ports of the application gateway resource.
* **gatewayIPConfigurations**: [ApplicationGatewayIPConfiguration](#applicationgatewayipconfiguration)[]: Subnets of application the gateway resource.
* **httpListeners**: [ApplicationGatewayHttpListener](#applicationgatewayhttplistener)[]: Http listeners of the application gateway resource.
* **operationalState**: 'Running' | 'Starting' | 'Stopped' | 'Stopping' | string (ReadOnly): Operational state of the application gateway resource. Possible values are: 'Stopped', 'Started', 'Running', and 'Stopping'.
* **probes**: [ApplicationGatewayProbe](#applicationgatewayprobe)[]: Probes of the application gateway resource.
* **provisioningState**: string: Provisioning state of the application gateway resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **requestRoutingRules**: [ApplicationGatewayRequestRoutingRule](#applicationgatewayrequestroutingrule)[]: Request routing rules of the application gateway resource.
* **resourceGuid**: string: Resource GUID property of the application gateway resource.
* **sku**: [ApplicationGatewaySku](#applicationgatewaysku): SKU of the application gateway resource.
* **sslCertificates**: [ApplicationGatewaySslCertificate](#applicationgatewaysslcertificate)[]: SSL certificates of the application gateway resource.
* **sslPolicy**: [ApplicationGatewaySslPolicy](#applicationgatewaysslpolicy): SSL policy of the application gateway resource.
* **urlPathMaps**: [ApplicationGatewayUrlPathMap](#applicationgatewayurlpathmap)[]: URL path map of the application gateway resource.
* **webApplicationFirewallConfiguration**: [ApplicationGatewayWebApplicationFirewallConfiguration](#applicationgatewaywebapplicationfirewallconfiguration): Web application firewall configuration.

## ApplicationGatewayRequestRoutingRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ApplicationGatewayRequestRoutingRulePropertiesFormat](#applicationgatewayrequestroutingrulepropertiesformat): Properties of request routing rule of the application gateway.

## ApplicationGatewayRequestRoutingRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource): Backend address pool resource of the application gateway.
* **backendHttpSettings**: [SubResource](#subresource): Frontend port resource of the application gateway.
* **httpListener**: [SubResource](#subresource): Http listener resource of the application gateway.
* **provisioningState**: string: Provisioning state of the request routing rule resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **ruleType**: 'Basic' | 'PathBasedRouting' | string: Rule type. Possible values are: 'Basic' and 'PathBasedRouting'.
* **urlPathMap**: [SubResource](#subresource): URL path map resource of the application gateway.

## ApplicationGatewaySku
### Properties
* **capacity**: int: Capacity (instance count) of an application gateway.
* **name**: 'Standard_Large' | 'Standard_Medium' | 'Standard_Small' | 'WAF_Large' | 'WAF_Medium' | string: Name of an application gateway SKU. Possible values are: 'Standard_Small', 'Standard_Medium', 'Standard_Large', 'WAF_Medium', and 'WAF_Large'.
* **tier**: 'Standard' | 'WAF' | string: Tier of an application gateway. Possible values are: 'Standard' and 'WAF'.

## ApplicationGatewaySslCertificate
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ApplicationGatewaySslCertificatePropertiesFormat](#applicationgatewaysslcertificatepropertiesformat): Properties of SSL certificates of an application gateway.

## ApplicationGatewaySslCertificatePropertiesFormat
### Properties
* **data**: string: Base-64 encoded pfx certificate. Only applicable in PUT Request.
* **password**: string: Password for the pfx file specified in data. Only applicable in PUT request.
* **provisioningState**: string: Provisioning state of the SSL certificate resource Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicCertData**: string: Base-64 encoded Public cert data corresponding to pfx specified in data. Only applicable in GET request.

## ApplicationGatewaySslPolicy
### Properties
* **disabledSslProtocols**: 'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | string[]: SSL protocols to be disabled on application gateway. Possible values are: 'TLSv1_0', 'TLSv1_1', and 'TLSv1_2'.

## ApplicationGatewayUrlPathMap
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ApplicationGatewayUrlPathMapPropertiesFormat](#applicationgatewayurlpathmappropertiesformat): Properties of UrlPathMap of the application gateway.

## ApplicationGatewayUrlPathMapPropertiesFormat
### Properties
* **defaultBackendAddressPool**: [SubResource](#subresource): Default backend address pool resource of URL path map.
* **defaultBackendHttpSettings**: [SubResource](#subresource): Default backend http settings resource of URL path map.
* **pathRules**: [ApplicationGatewayPathRule](#applicationgatewaypathrule)[]: Path rule of URL path map resource.
* **provisioningState**: string: Provisioning state of the backend http settings resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## ApplicationGatewayWebApplicationFirewallConfiguration
### Properties
* **enabled**: bool (Required): Whether the web application firewall is enabled.
* **firewallMode**: 'Detection' | 'Prevention' | string: Web application firewall mode. Possible values are: 'Detection' and 'Prevention'.

## AuthorizationPropertiesFormat
### Properties
* **authorizationKey**: string: The authorization key.
* **authorizationUseStatus**: 'Available' | 'InUse' | string: AuthorizationUseStatus. Possible values are: 'Available' and 'InUse'.
* **provisioningState**: string: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## BackendAddressPool
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [BackendAddressPoolPropertiesFormat](#backendaddresspoolpropertiesformat): Properties of the backend address pool.

## BackendAddressPoolPropertiesFormat
### Properties
* **backendIPConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[] (ReadOnly): Gets collection of references to IP addresses defined in network interfaces.
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly): Gets load balancing rules that use this backend address pool.
* **outboundNatRule**: [SubResource](#subresource) (ReadOnly): Gets outbound rules that use this backend address pool.
* **provisioningState**: string: Get provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## BgpSettings
### Properties
* **asn**: int: The BGP speaker's ASN.
* **bgpPeeringAddress**: string: The BGP peering address and BGP identifier of this BGP speaker.
* **peerWeight**: int: The weight added to routes learned from this BGP speaker.

## DhcpOptions
### Properties
* **dnsServers**: string[]: The list of DNS servers IP addresses.

## ExpressRouteCircuitAuthorization
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [AuthorizationPropertiesFormat](#authorizationpropertiesformat)

## ExpressRouteCircuitPeering
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ExpressRouteCircuitPeeringPropertiesFormat](#expressroutecircuitpeeringpropertiesformat)

## ExpressRouteCircuitPeeringConfig
### Properties
* **advertisedPublicPrefixes**: string[]: The reference of AdvertisedPublicPrefixes.
* **advertisedPublicPrefixesState**: 'Configured' | 'Configuring' | 'NotConfigured' | 'ValidationNeeded' | string: AdvertisedPublicPrefixState of the Peering resource. Possible values are 'NotConfigured', 'Configuring', 'Configured', and 'ValidationNeeded'.
* **customerASN**: int: The CustomerASN of the peering.
* **routingRegistryName**: string: The RoutingRegistryName of the configuration.

## ExpressRouteCircuitPeeringPropertiesFormat
### Properties
* **azureASN**: int: The Azure ASN.
* **gatewayManagerEtag**: string: The GatewayManager Etag.
* **lastModifiedBy**: string: Gets whether the provider or the customer last modified the peering.
* **microsoftPeeringConfig**: [ExpressRouteCircuitPeeringConfig](#expressroutecircuitpeeringconfig): The Microsoft peering configuration.
* **peerASN**: int: The peer ASN.
* **peeringType**: 'AzurePrivatePeering' | 'AzurePublicPeering' | 'MicrosoftPeering' | string: The PeeringType. Possible values are: 'AzurePublicPeering', 'AzurePrivatePeering', and 'MicrosoftPeering'.
* **primaryAzurePort**: string: The primary port.
* **primaryPeerAddressPrefix**: string: The primary address prefix.
* **provisioningState**: string: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **secondaryAzurePort**: string: The secondary port.
* **secondaryPeerAddressPrefix**: string: The secondary address prefix.
* **sharedKey**: string: The shared key.
* **state**: 'Disabled' | 'Enabled' | string: The state of peering. Possible values are: 'Disabled' and 'Enabled'
* **stats**: [ExpressRouteCircuitStats](#expressroutecircuitstats): Gets peering stats.
* **vlanId**: int: The VLAN ID.

## ExpressRouteCircuitPropertiesFormat
### Properties
* **allowClassicOperations**: bool: Allow classic operations
* **authorizations**: [ExpressRouteCircuitAuthorization](#expressroutecircuitauthorization)[]: The list of authorizations.
* **circuitProvisioningState**: string: The CircuitProvisioningState state of the resource.
* **gatewayManagerEtag**: string: The GatewayManager Etag.
* **peerings**: [ExpressRouteCircuitPeering](#expressroutecircuitpeering)[]: The list of peerings.
* **provisioningState**: string: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **serviceKey**: string: The ServiceKey.
* **serviceProviderNotes**: string: The ServiceProviderNotes.
* **serviceProviderProperties**: [ExpressRouteCircuitServiceProviderProperties](#expressroutecircuitserviceproviderproperties): The ServiceProviderProperties.
* **serviceProviderProvisioningState**: 'Deprovisioning' | 'NotProvisioned' | 'Provisioned' | 'Provisioning' | string: The ServiceProviderProvisioningState state of the resource. Possible values are 'NotProvisioned', 'Provisioning', 'Provisioned', and 'Deprovisioning'.

## ExpressRouteCircuitServiceProviderProperties
### Properties
* **bandwidthInMbps**: int: The BandwidthInMbps.
* **peeringLocation**: string: The peering location.
* **serviceProviderName**: string: The serviceProviderName.

## ExpressRouteCircuitSku
### Properties
* **family**: 'MeteredData' | 'UnlimitedData' | string: The family of the SKU. Possible values are: 'UnlimitedData' and 'MeteredData'.
* **name**: string: The name of the SKU.
* **tier**: 'Premium' | 'Standard' | string: The tier of the SKU. Possible values are 'Standard' and 'Premium'.

## ExpressRouteCircuitStats
### Properties
* **primarybytesIn**: int: Gets BytesIn of the peering.
* **primarybytesOut**: int: Gets BytesOut of the peering.
* **secondarybytesIn**: int: Gets BytesIn of the peering.
* **secondarybytesOut**: int: Gets BytesOut of the peering.

## FrontendIPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [FrontendIPConfigurationPropertiesFormat](#frontendipconfigurationpropertiesformat): Properties of Frontend IP Configuration of the load balancer.

## FrontendIPConfigurationPropertiesFormat
### Properties
* **inboundNatPools**: [SubResource](#subresource)[] (ReadOnly): Read only. Inbound pools URIs that use this frontend IP.
* **inboundNatRules**: [SubResource](#subresource)[] (ReadOnly): Read only. Inbound rules URIs that use this frontend IP.
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly): Gets load balancing rules URIs that use this frontend IP.
* **outboundNatRules**: [SubResource](#subresource)[] (ReadOnly): Read only. Outbound rules URIs that use this frontend IP.
* **privateIPAddress**: string: The private IP address of the IP configuration.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: The Private IP allocation method. Possible values are: 'Static' and 'Dynamic'.
* **provisioningState**: string: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicIPAddress**: [PublicIPAddress](#publicipaddress): The reference of the Public IP resource.
* **subnet**: [Subnet](#subnet): The reference of the subnet resource.

## InboundNatPool
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [InboundNatPoolPropertiesFormat](#inboundnatpoolpropertiesformat): Properties of Inbound NAT pool.

## InboundNatPoolPropertiesFormat
### Properties
* **backendPort**: int (Required): The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
* **frontendIPConfiguration**: [SubResource](#subresource): A reference to frontend IP addresses.
* **frontendPortRangeEnd**: int (Required): The last port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65535.
* **frontendPortRangeStart**: int (Required): The first port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65534.
* **protocol**: 'Tcp' | 'Udp' | string (Required): The transport protocol for the endpoint. Possible values are: 'Udp' or 'Tcp'.
* **provisioningState**: string: Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## InboundNatRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [InboundNatRulePropertiesFormat](#inboundnatrulepropertiesformat): Properties of the inbound NAT rule.

## InboundNatRulePropertiesFormat
### Properties
* **backendIPConfiguration**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration) (ReadOnly): A reference to a private IP address defined on a network interface of a VM. Traffic sent to the frontend port of each of the frontend IP configurations is forwarded to the backed IP.
* **backendPort**: int: The port used for the internal endpoint. Acceptable values range from 1 to 65535.
* **enableFloatingIP**: bool: Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
* **frontendIPConfiguration**: [SubResource](#subresource): A reference to frontend IP addresses.
* **frontendPort**: int: The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
* **idleTimeoutInMinutes**: int: The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
* **protocol**: 'Tcp' | 'Udp' | string: The transport protocol for the endpoint. Possible values are: 'Udp' or 'Tcp'
* **provisioningState**: string: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## IPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [IPConfigurationPropertiesFormat](#ipconfigurationpropertiesformat): Properties of IP configuration.

## IPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string: The private IP address of the IP configuration.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: The private IP allocation method. Possible values are 'Static' and 'Dynamic'.
* **provisioningState**: string: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicIPAddress**: [PublicIPAddress](#publicipaddress): The reference of the public IP resource.
* **subnet**: [Subnet](#subnet): The reference of the subnet resource.

## LoadBalancerPropertiesFormat
### Properties
* **backendAddressPools**: [BackendAddressPool](#backendaddresspool)[]: Collection of backend address pools used by a load balancer
* **frontendIPConfigurations**: [FrontendIPConfiguration](#frontendipconfiguration)[]: Object representing the frontend IPs to be used for the load balancer
* **inboundNatPools**: [InboundNatPool](#inboundnatpool)[]: Defines an external port range for inbound NAT to a single backend port on NICs associated with a load balancer. Inbound NAT rules are created automatically for each NIC associated with the Load Balancer using an external port from this range. Defining an Inbound NAT pool on your Load Balancer is mutually exclusive with defining inbound Nat rules. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an inbound NAT pool. They have to reference individual inbound NAT rules.
* **inboundNatRules**: [InboundNatRule](#inboundnatrule)[]: Collection of inbound NAT Rules used by a load balancer. Defining inbound NAT rules on your load balancer is mutually exclusive with defining an inbound NAT pool. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an Inbound NAT pool. They have to reference individual inbound NAT rules.
* **loadBalancingRules**: [LoadBalancingRule](#loadbalancingrule)[]: Object collection representing the load balancing rules Gets the provisioning
* **outboundNatRules**: [OutboundNatRule](#outboundnatrule)[]: The outbound NAT rules.
* **probes**: [Probe](#probe)[]: Collection of probe objects used in the load balancer
* **provisioningState**: string: Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string: The resource GUID property of the load balancer resource.

## LoadBalancingRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [LoadBalancingRulePropertiesFormat](#loadbalancingrulepropertiesformat): Properties of the load balancer.

## LoadBalancingRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource): A reference to a pool of DIPs. Inbound traffic is randomly load balanced across IPs in the backend IPs.
* **backendPort**: int: The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
* **enableFloatingIP**: bool: Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
* **frontendIPConfiguration**: [SubResource](#subresource): A reference to frontend IP addresses.
* **frontendPort**: int (Required): The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 1 and 65534.
* **idleTimeoutInMinutes**: int: The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
* **loadDistribution**: 'Default' | 'SourceIP' | 'SourceIPProtocol' | string: The load distribution policy for this rule. Possible values are 'Default', 'SourceIP', and 'SourceIPProtocol'.
* **probe**: [SubResource](#subresource): The reference of the load balancer probe used by the load balancing rule.
* **protocol**: 'Tcp' | 'Udp' | string (Required): The transport protocol for the external endpoint. Possible values are 'Udp' or 'Tcp'
* **provisioningState**: string: Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## LocalNetworkGateway
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [LocalNetworkGatewayPropertiesFormat](#localnetworkgatewaypropertiesformat) (Required): LocalNetworkGateway properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## LocalNetworkGatewayPropertiesFormat
### Properties
* **bgpSettings**: [BgpSettings](#bgpsettings): Local network gateway's BGP speaker settings.
* **gatewayIpAddress**: string: IP address of local network gateway.
* **localNetworkAddressSpace**: [AddressSpace](#addressspace) (Required): Local network site address space.
* **provisioningState**: string (ReadOnly): The provisioning state of the LocalNetworkGateway resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string: The resource GUID property of the LocalNetworkGateway resource.

## NetworkInterface
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat): NetworkInterface properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## NetworkInterfaceDnsSettings
### Properties
* **appliedDnsServers**: string[]: If the VM that uses this NIC is part of an Availability Set, then this list will have the union of all DNS servers from all NICs that are part of the Availability Set. This property is what is configured on each of those VMs.
* **dnsServers**: string[]: List of DNS servers IP addresses. Use 'AzureProvidedDNS' to switch to azure provided DNS resolution. 'AzureProvidedDNS' value cannot be combined with other IPs, it must be the only value in dnsServers collection.
* **internalDnsNameLabel**: string: Relative DNS name for this NIC used for internal communications between VMs in the same virtual network.
* **internalDomainNameSuffix**: string: Even if internalDnsNameLabel is not specified, a DNS entry is created for the primary NIC of the VM. This DNS name can be constructed by concatenating the VM name with the value of internalDomainNameSuffix.
* **internalFqdn**: string: Fully qualified DNS name supporting internal communications between VMs in the same virtual network.

## NetworkInterfaceIPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [NetworkInterfaceIPConfigurationPropertiesFormat](#networkinterfaceipconfigurationpropertiesformat): Properties of IP configuration.

## NetworkInterfaceIPConfigurationPropertiesFormat
### Properties
* **applicationGatewayBackendAddressPools**: [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)[]: The reference of ApplicationGatewayBackendAddressPool resource.
* **loadBalancerBackendAddressPools**: [BackendAddressPool](#backendaddresspool)[]: The reference of LoadBalancerBackendAddressPool resource.
* **loadBalancerInboundNatRules**: [InboundNatRule](#inboundnatrule)[]: A list of references of LoadBalancerInboundNatRules.
* **primary**: bool: Gets whether this is a primary customer address on the network interface.
* **privateIPAddress**: string
* **privateIPAddressVersion**: 'IPv4' | 'IPv6' | string: Available from Api-Version 2016-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: Defines how a private IP address is assigned. Possible values are: 'Static' and 'Dynamic'.
* **provisioningState**: string
* **publicIPAddress**: [PublicIPAddress](#publicipaddress): Public IP address resource.
* **subnet**: [Subnet](#subnet): Subnet in a virtual network resource.

## NetworkInterfacePropertiesFormat
### Properties
* **dnsSettings**: [NetworkInterfaceDnsSettings](#networkinterfacednssettings): The DNS settings in network interface.
* **enableAcceleratedNetworking**: bool: If the network interface is accelerated networking enabled.
* **enableIPForwarding**: bool: Indicates whether IP forwarding is enabled on this network interface.
* **ipConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[]: A list of IPConfigurations of the network interface.
* **macAddress**: string: The MAC address of the network interface.
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup): The reference of the NetworkSecurityGroup resource.
* **primary**: bool: Gets whether this is a primary network interface on a virtual machine.
* **provisioningState**: string: The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string: The resource GUID property of the network interface resource.
* **virtualMachine**: [SubResource](#subresource): The reference of a virtual machine.

## NetworkSecurityGroup
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [NetworkSecurityGroupPropertiesFormat](#networksecuritygrouppropertiesformat): Network Security Group resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## NetworkSecurityGroupPropertiesFormat
### Properties
* **defaultSecurityRules**: [SecurityRule](#securityrule)[]: The default security rules of network security group.
* **networkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly): A collection of references to network interfaces.
* **provisioningState**: string: The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string: The resource GUID property of the network security group resource.
* **securityRules**: [SecurityRule](#securityrule)[]: A collection of security rules of the network security group.
* **subnets**: [Subnet](#subnet)[] (ReadOnly): A collection of references to subnets.

## NetworkWatcherPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## OutboundNatRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [OutboundNatRulePropertiesFormat](#outboundnatrulepropertiesformat): Outbound NAT pool of the load balancer.

## OutboundNatRulePropertiesFormat
### Properties
* **allocatedOutboundPorts**: int: The number of outbound ports to be used for NAT.
* **backendAddressPool**: [SubResource](#subresource) (Required): A reference to a pool of DIPs. Outbound traffic is randomly load balanced across IPs in the backend IPs.
* **frontendIPConfigurations**: [SubResource](#subresource)[]: The Frontend IP addresses of the load balancer.
* **provisioningState**: string: Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## PacketCaptureFilter
### Properties
* **localIPAddress**: string: Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5"? for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
* **localPort**: string: Local port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
* **protocol**: 'Any' | 'TCP' | 'UDP' | string: Protocol to be filtered on.
* **remoteIPAddress**: string: Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
* **remotePort**: string: Remote port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.

## PacketCaptureParametersOrPacketCaptureResultProperties
### Properties
* **bytesToCapturePerPacket**: int: Number of bytes captured per packet, the remaining bytes are truncated.
* **filters**: [PacketCaptureFilter](#packetcapturefilter)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the packet capture session.
* **storageLocation**: [PacketCaptureStorageLocation](#packetcapturestoragelocation) (Required): Describes the storage location for a packet capture session.
* **target**: string (Required): The ID of the targeted resource, only VM is currently supported.
* **timeLimitInSeconds**: int: Maximum duration of the capture session in seconds.
* **totalBytesPerSession**: int: Maximum size of the capture output.

## PacketCaptureStorageLocation
### Properties
* **filePath**: string: A valid local path on the targeting VM. Must include the name of the capture file (*.cap). For linux virtual machine it must start with /var/captures. Required if no storage ID is provided, otherwise optional.
* **storageId**: string: The ID of the storage account to save the packet capture session. Required if no local file path is provided.
* **storagePath**: string: The URI of the storage path to save the packet capture. Must be a well-formed URI describing the location to save the packet capture.

## Probe
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ProbePropertiesFormat](#probepropertiesformat)

## ProbePropertiesFormat
### Properties
* **intervalInSeconds**: int: The interval, in seconds, for how frequently to probe the endpoint for health status. Typically, the interval is slightly less than half the allocated timeout period (in seconds) which allows two full probes before taking the instance out of rotation. The default value is 15, the minimum value is 5.
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly): The load balancer rules that use this probe.
* **numberOfProbes**: int: The number of probes where if no response, will result in stopping further traffic from being delivered to the endpoint. This values allows endpoints to be taken out of rotation faster or slower than the typical times used in Azure.
* **port**: int (Required): The port for communicating the probe. Possible values range from 1 to 65535, inclusive.
* **protocol**: 'Http' | 'Tcp' | string (Required): The protocol of the end point. Possible values are: 'Http' or 'Tcp'. If 'Tcp' is specified, a received ACK is required for the probe to be successful. If 'Http' is specified, a 200 OK response from the specifies URI is required for the probe to be successful.
* **provisioningState**: string: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **requestPath**: string: The URI used for requesting health status from the VM. Path is required if a protocol is set to http. Otherwise, it is not allowed. There is no default value.

## PublicIPAddress
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat): Public IP address properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## PublicIPAddressDnsSettings
### Properties
* **domainNameLabel**: string: Gets or sets the Domain name label.The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
* **fqdn**: string: Gets the FQDN, Fully qualified domain name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone.
* **reverseFqdn**: string: Gets or Sets the Reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.

## PublicIPAddressPropertiesFormat
### Properties
* **dnsSettings**: [PublicIPAddressDnsSettings](#publicipaddressdnssettings): The FQDN of the DNS record associated with the public IP address.
* **idleTimeoutInMinutes**: int: The idle timeout of the public IP address.
* **ipAddress**: string
* **ipConfiguration**: [IPConfiguration](#ipconfiguration) (ReadOnly): IPConfiguration
* **provisioningState**: string: The provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicIPAddressVersion**: 'IPv4' | 'IPv6' | string: The public IP address version. Possible values are: 'IPv4' and 'IPv6'.
* **publicIPAllocationMethod**: 'Dynamic' | 'Static' | string: The public IP allocation method. Possible values are: 'Static' and 'Dynamic'.
* **resourceGuid**: string: The resource GUID property of the public IP resource.

## ResourceNavigationLink
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ResourceNavigationLinkFormat](#resourcenavigationlinkformat): Properties of ResourceNavigationLink.

## ResourceNavigationLinkFormat
### Properties
* **link**: string: Link to the external resource
* **linkedResourceType**: string: Resource type of the linked resource.
* **provisioningState**: string (ReadOnly): Provisioning state of the ResourceNavigationLink resource.

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

## Route
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [RoutePropertiesFormat](#routepropertiesformat): Route resource

## RoutePropertiesFormat
### Properties
* **addressPrefix**: string: The destination CIDR to which the route applies.
* **nextHopIpAddress**: string: The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
* **nextHopType**: 'Internet' | 'None' | 'VirtualAppliance' | 'VirtualNetworkGateway' | 'VnetLocal' | string (Required): The type of Azure hop the packet should be sent to. Possible values are: 'VirtualNetworkGateway', 'VnetLocal', 'Internet', 'VirtualAppliance', and 'None'
* **provisioningState**: string: The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## RouteTable
### Properties
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [RouteTablePropertiesFormat](#routetablepropertiesformat): Route Table resource
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## RouteTablePropertiesFormat
### Properties
* **provisioningState**: string: The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **routes**: [Route](#route)[]: Collection of routes contained within a route table.
* **subnets**: [Subnet](#subnet)[] (ReadOnly): A collection of references to subnets.

## SecurityRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [SecurityRulePropertiesFormat](#securityrulepropertiesformat)

## SecurityRulePropertiesFormat
### Properties
* **access**: 'Allow' | 'Deny' | string (Required): The network traffic is allowed or denied. Possible values are: 'Allow' and 'Deny'.
* **description**: string: A description for this rule. Restricted to 140 chars.
* **destinationAddressPrefix**: string (Required): The destination address prefix. CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
* **destinationPortRange**: string: The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
* **direction**: 'Inbound' | 'Outbound' | string (Required): The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic. Possible values are: 'Inbound' and 'Outbound'.
* **priority**: int: The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
* **protocol**: '*' | 'Tcp' | 'Udp' | string (Required): Network protocol this rule applies to. Possible values are 'Tcp', 'Udp', and '*'.
* **provisioningState**: string: The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **sourceAddressPrefix**: string (Required): The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
* **sourcePortRange**: string: The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.

## Subnet
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [SubnetPropertiesFormat](#subnetpropertiesformat)

## SubnetPropertiesFormat
### Properties
* **addressPrefix**: string: The address prefix for the subnet.
* **ipConfigurations**: [IPConfiguration](#ipconfiguration)[] (ReadOnly): Gets an array of references to the network interface IP configurations using subnet.
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup): The reference of the NetworkSecurityGroup resource.
* **provisioningState**: string: The provisioning state of the resource.
* **resourceNavigationLinks**: [ResourceNavigationLink](#resourcenavigationlink)[]: Gets an array of references to the external resources using subnet.
* **routeTable**: [RouteTable](#routetable): The reference of the RouteTable resource.

## SubResource
### Properties
* **id**: string: Resource ID.

## TunnelConnectionHealth
### Properties
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' | string (ReadOnly): Virtual network Gateway connection status
* **egressBytesTransferred**: int (ReadOnly): The Egress Bytes Transferred in this connection
* **ingressBytesTransferred**: int (ReadOnly): The Ingress Bytes Transferred in this connection
* **lastConnectionEstablishedUtcTime**: string (ReadOnly): The time at which connection was established in Utc format.
* **tunnel**: string (ReadOnly): Tunnel name.

## VirtualNetworkGateway
### Properties
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [VirtualNetworkGatewayPropertiesFormat](#virtualnetworkgatewaypropertiesformat) (Required): VirtualNetworkGateway properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## VirtualNetworkGatewayConnectionPropertiesFormat
### Properties
* **authorizationKey**: string: The authorizationKey.
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' | string (ReadOnly): Virtual network Gateway connection status. Possible values are 'Unknown', 'Connecting', 'Connected' and 'NotConnected'.
* **connectionType**: 'ExpressRoute' | 'IPsec' | 'VPNClient' | 'Vnet2Vnet' | string (Required): Gateway connection type. Possible values are: 'IPsec','Vnet2Vnet','ExpressRoute', and 'VPNClient.
* **egressBytesTransferred**: int (ReadOnly): The egress bytes transferred in this connection.
* **enableBgp**: bool: EnableBgp flag
* **ingressBytesTransferred**: int (ReadOnly): The ingress bytes transferred in this connection.
* **localNetworkGateway2**: [LocalNetworkGateway](#localnetworkgateway): A common class for general resource information
* **peer**: [SubResource](#subresource): The reference to peerings resource.
* **provisioningState**: string (ReadOnly): The provisioning state of the VirtualNetworkGatewayConnection resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string: The resource GUID property of the VirtualNetworkGatewayConnection resource.
* **routingWeight**: int: The routing weight.
* **sharedKey**: string: The IPSec shared key.
* **tunnelConnectionStatus**: [TunnelConnectionHealth](#tunnelconnectionhealth)[] (ReadOnly): Collection of all tunnels' connection health status.
* **virtualNetworkGateway1**: [VirtualNetworkGateway](#virtualnetworkgateway) (Required): A common class for general resource information
* **virtualNetworkGateway2**: [VirtualNetworkGateway](#virtualnetworkgateway): A common class for general resource information

## VirtualNetworkGatewayIPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VirtualNetworkGatewayIPConfigurationPropertiesFormat](#virtualnetworkgatewayipconfigurationpropertiesformat): Properties of VirtualNetworkGatewayIPConfiguration

## VirtualNetworkGatewayIPConfigurationPropertiesFormat
### Properties
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: The private IP allocation method. Possible values are: 'Static' and 'Dynamic'.
* **provisioningState**: string (ReadOnly): The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicIPAddress**: [SubResource](#subresource) (Required): The reference of the public IP resource.
* **subnet**: [SubResource](#subresource) (Required): The reference of the subnet resource.

## VirtualNetworkGatewayPropertiesFormat
### Properties
* **activeActive**: bool: ActiveActive flag
* **bgpSettings**: [BgpSettings](#bgpsettings): Virtual network gateway's BGP speaker settings.
* **enableBgp**: bool: Whether BGP is enabled for this virtual network gateway or not.
* **gatewayDefaultSite**: [SubResource](#subresource): The reference of the LocalNetworkGateway resource which represents local network site having default routes. Assign Null value in case of removing existing default site setting.
* **gatewayType**: 'ExpressRoute' | 'Vpn' | string (Required): The type of this virtual network gateway. Possible values are: 'Vpn' and 'ExpressRoute'.
* **ipConfigurations**: [VirtualNetworkGatewayIPConfiguration](#virtualnetworkgatewayipconfiguration)[] (Required): IP configurations for virtual network gateway.
* **provisioningState**: string (ReadOnly): The provisioning state of the VirtualNetworkGateway resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string: The resource GUID property of the VirtualNetworkGateway resource.
* **sku**: [VirtualNetworkGatewaySku](#virtualnetworkgatewaysku): The reference of the VirtualNetworkGatewaySku resource which represents the SKU selected for Virtual network gateway.
* **vpnClientConfiguration**: [VpnClientConfiguration](#vpnclientconfiguration): The reference of the VpnClientConfiguration resource which represents the P2S VpnClient configurations.
* **vpnType**: 'PolicyBased' | 'RouteBased' | string (Required): The type of this virtual network gateway. Possible values are: 'PolicyBased' and 'RouteBased'.

## VirtualNetworkGatewaySku
### Properties
* **capacity**: int: The capacity.
* **name**: 'Basic' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | string (Required): Gateway SKU name. Possible values are: 'Basic', 'HighPerformance','Standard', and 'UltraPerformance'.
* **tier**: 'Basic' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | string (Required): Gateway SKU tier. Possible values are: 'Basic', 'HighPerformance','Standard', and 'UltraPerformance'.

## VirtualNetworkPeering
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VirtualNetworkPeeringPropertiesFormat](#virtualnetworkpeeringpropertiesformat)

## VirtualNetworkPeeringPropertiesFormat
### Properties
* **allowForwardedTraffic**: bool: Whether the forwarded traffic from the VMs in the remote virtual network will be allowed/disallowed.
* **allowGatewayTransit**: bool: If gateway links can be used in remote virtual networking to link to this virtual network.
* **allowVirtualNetworkAccess**: bool: Whether the VMs in the linked virtual network space would be able to access all the VMs in local Virtual network space.
* **peeringState**: 'Connected' | 'Disconnected' | 'Initiated' | string: The status of the virtual network peering. Possible values are 'Initiated', 'Connected', and 'Disconnected'.
* **provisioningState**: string: The provisioning state of the resource.
* **remoteVirtualNetwork**: [SubResource](#subresource): The reference of the remote virtual network.
* **useRemoteGateways**: bool: If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.

## VirtualNetworkPropertiesFormat
### Properties
* **addressSpace**: [AddressSpace](#addressspace): The AddressSpace that contains an array of IP address ranges that can be used by subnets.
* **dhcpOptions**: [DhcpOptions](#dhcpoptions): The dhcpOptions that contains an array of DNS servers available to VMs deployed in the virtual network.
* **provisioningState**: string: The provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string: The resourceGuid property of the Virtual Network resource.
* **subnets**: [Subnet](#subnet)[]: A list of subnets in a Virtual Network.
* **virtualNetworkPeerings**: [VirtualNetworkPeering](#virtualnetworkpeering)[]: A list of peerings in a Virtual Network.

## VpnClientConfiguration
### Properties
* **vpnClientAddressPool**: [AddressSpace](#addressspace): The reference of the address space resource which represents Address space for P2S VpnClient.
* **vpnClientRevokedCertificates**: [VpnClientRevokedCertificate](#vpnclientrevokedcertificate)[]: VpnClientRevokedCertificate for Virtual network gateway.
* **vpnClientRootCertificates**: [VpnClientRootCertificate](#vpnclientrootcertificate)[]: VpnClientRootCertificate for virtual network gateway.

## VpnClientRevokedCertificate
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VpnClientRevokedCertificatePropertiesFormat](#vpnclientrevokedcertificatepropertiesformat): Properties of the revoked VPN client certificate of virtual network gateway.

## VpnClientRevokedCertificatePropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state of the VPN client revoked certificate resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **thumbprint**: string: The revoked VPN client certificate thumbprint.

## VpnClientRootCertificate
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VpnClientRootCertificatePropertiesFormat](#vpnclientrootcertificatepropertiesformat) (Required): Properties of SSL certificates of application gateway

## VpnClientRootCertificatePropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state of the VPN client root certificate resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicCertData**: string (Required): The certificate public data.

