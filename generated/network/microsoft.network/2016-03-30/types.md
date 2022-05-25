# Microsoft.Network @ 2016-03-30

## Resource Microsoft.Network/applicationGateways@2016-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-30' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationGatewayPropertiesFormat](#applicationgatewaypropertiesformat): Properties of Application Gateway
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/applicationGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/connections@2016-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-30' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkGatewayConnectionPropertiesFormat](#virtualnetworkgatewayconnectionpropertiesformat): VirtualNetworkGatewayConnection properties
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/connections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits@2016-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-30' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteCircuitPropertiesFormat](#expressroutecircuitpropertiesformat): Properties of ExpressRouteCircuit
* **sku**: [ExpressRouteCircuitSku](#expressroutecircuitsku): Contains sku in an ExpressRouteCircuit
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/expressRouteCircuits' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits/authorizations@2016-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-30' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationPropertiesFormat](#authorizationpropertiesformat)
* **type**: 'Microsoft.Network/expressRouteCircuits/authorizations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/expressRouteCircuits/peerings@2016-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-30' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteCircuitPeeringPropertiesFormat](#expressroutecircuitpeeringpropertiesformat)
* **type**: 'Microsoft.Network/expressRouteCircuits/peerings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/loadBalancers@2016-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-30' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LoadBalancerPropertiesFormat](#loadbalancerpropertiesformat): Properties of Load Balancer
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/loadBalancers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/localNetworkGateways@2016-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-30' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LocalNetworkGatewayPropertiesFormat](#localnetworkgatewaypropertiesformat): LocalNetworkGateway properties
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/localNetworkGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkInterfaces@2016-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-30' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat): NetworkInterface properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/networkInterfaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityGroups@2016-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-30' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkSecurityGroupPropertiesFormat](#networksecuritygrouppropertiesformat): Network Security Group resource
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/networkSecurityGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityGroups/securityRules@2016-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-30' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityRulePropertiesFormat](#securityrulepropertiesformat)
* **type**: 'Microsoft.Network/networkSecurityGroups/securityRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/publicIPAddresses@2016-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-30' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat): PublicIpAddress properties
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/publicIPAddresses' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/routeTables@2016-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-30' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RouteTablePropertiesFormat](#routetablepropertiesformat): Route Table resource
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/routeTables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/routeTables/routes@2016-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-30' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoutePropertiesFormat](#routepropertiesformat): Route resource
* **type**: 'Microsoft.Network/routeTables/routes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworkGateways@2016-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-30' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkGatewayPropertiesFormat](#virtualnetworkgatewaypropertiesformat): VirtualNetworkGateway properties
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/virtualNetworkGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworks@2016-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-30' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkPropertiesFormat](#virtualnetworkpropertiesformat)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Network/virtualNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/virtualNetworks/subnets@2016-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-30' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SubnetPropertiesFormat](#subnetpropertiesformat)
* **type**: 'Microsoft.Network/virtualNetworks/subnets' (ReadOnly, DeployTimeConstant): The resource type

## ApplicationGatewayPropertiesFormat
### Properties
* **backendAddressPools**: [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)[]: Gets or sets backend address pool of application gateway resource
* **backendHttpSettingsCollection**: [ApplicationGatewayBackendHttpSettings](#applicationgatewaybackendhttpsettings)[]: Gets or sets backend http settings of application gateway resource
* **frontendIPConfigurations**: [ApplicationGatewayFrontendIPConfiguration](#applicationgatewayfrontendipconfiguration)[]: Gets or sets frontend IP addresses of application gateway resource
* **frontendPorts**: [ApplicationGatewayFrontendPort](#applicationgatewayfrontendport)[]: Gets or sets frontend ports of application gateway resource
* **gatewayIPConfigurations**: [ApplicationGatewayIPConfiguration](#applicationgatewayipconfiguration)[]: Gets or sets subnets of application gateway resource
* **httpListeners**: [ApplicationGatewayHttpListener](#applicationgatewayhttplistener)[]: Gets or sets HTTP listeners of application gateway resource
* **operationalState**: 'Running' | 'Starting' | 'Stopped' | 'Stopping' | string (ReadOnly): Gets operational state of application gateway resource
* **probes**: [ApplicationGatewayProbe](#applicationgatewayprobe)[]: Gets or sets probes of application gateway resource
* **provisioningState**: string: Gets or sets Provisioning state of the ApplicationGateway resource Updating/Deleting/Failed
* **requestRoutingRules**: [ApplicationGatewayRequestRoutingRule](#applicationgatewayrequestroutingrule)[]: Gets or sets request routing rules of application gateway resource
* **resourceGuid**: string: Gets or sets resource GUID property of the ApplicationGateway resource
* **sku**: [ApplicationGatewaySku](#applicationgatewaysku): SKU of application gateway
* **sslCertificates**: [ApplicationGatewaySslCertificate](#applicationgatewaysslcertificate)[]: Gets or sets ssl certificates of application gateway resource
* **urlPathMaps**: [ApplicationGatewayUrlPathMap](#applicationgatewayurlpathmap)[]: Gets or sets URL path map of application gateway resource

## ApplicationGatewayBackendAddressPool
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewayBackendAddressPoolPropertiesFormat](#applicationgatewaybackendaddresspoolpropertiesformat): Properties of Backend Address Pool of application gateway

## ApplicationGatewayBackendAddressPoolPropertiesFormat
### Properties
* **backendAddresses**: [ApplicationGatewayBackendAddress](#applicationgatewaybackendaddress)[]: Gets or sets the backend addresses
* **backendIPConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[]: Gets collection of references to IPs defined in NICs
* **provisioningState**: string: Gets or sets Provisioning state of the backend address pool resource Updating/Deleting/Failed

## ApplicationGatewayBackendAddress
### Properties
* **fqdn**: string: Gets or sets the dns name
* **ipAddress**: string: Gets or sets the ip address

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
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: Gets or sets PrivateIP allocation method (Static/Dynamic)
* **provisioningState**: string
* **publicIPAddress**: [PublicIPAddress](#publicipaddress): PublicIPAddress resource
* **subnet**: [Subnet](#subnet): Subnet in a VirtualNetwork resource

## BackendAddressPool
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [BackendAddressPoolPropertiesFormat](#backendaddresspoolpropertiesformat): Properties of BackendAddressPool

## BackendAddressPoolPropertiesFormat
### Properties
* **backendIPConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[]: Gets collection of references to IPs defined in NICs
* **loadBalancingRules**: [SubResource](#subresource)[]: Gets Load Balancing rules that use this Backend Address Pool
* **outboundNatRule**: [SubResource](#subresource)
* **provisioningState**: string: Provisioning state of the PublicIP resource Updating/Deleting/Failed

## SubResource
### Properties
* **id**: string: Resource Id

## InboundNatRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [InboundNatRulePropertiesFormat](#inboundnatrulepropertiesformat): Properties of Inbound NAT rule

## InboundNatRulePropertiesFormat
### Properties
* **backendIPConfiguration**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration): IPConfiguration in a NetworkInterface
* **backendPort**: int: Gets or sets a port used for internal connections on the endpoint. The localPort attribute maps the eternal port of the endpoint to an internal port on a role. This is useful in scenarios where a role must communicate to an internal component on a port that is different from the one that is exposed externally. If not specified, the value of localPort is the same as the port attribute. Set the value of localPort to '*' to automatically assign an unallocated port that is discoverable using the runtime API
* **enableFloatingIP**: bool: Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn availability Group. This setting is required when using the SQL Always ON availability Groups in SQL server. This setting can't be changed after you create the endpoint
* **frontendIPConfiguration**: [SubResource](#subresource)
* **frontendPort**: int: Gets or sets the port for the external endpoint. You can specify any port number you choose, but the port numbers specified for each role in the service must be unique. Possible values range between 1 and 65535, inclusive
* **idleTimeoutInMinutes**: int: Gets or sets the timeout for the Tcp idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to Tcp
* **protocol**: 'Tcp' | 'Udp' | string: Gets or sets the transport protocol for the external endpoint. Possible values are Udp or Tcp
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed

## PublicIPAddress
### Properties
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **location**: string: Resource location
* **name**: string (ReadOnly): Resource name
* **properties**: [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat): PublicIpAddress properties
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string (ReadOnly): Resource type

## PublicIPAddressPropertiesFormat
### Properties
* **dnsSettings**: [PublicIPAddressDnsSettings](#publicipaddressdnssettings): Contains FQDN of the DNS record associated with the public IP address
* **idleTimeoutInMinutes**: int: Gets or sets the idle timeout of the public IP address
* **ipAddress**: string
* **ipConfiguration**: [IPConfiguration](#ipconfiguration): IPConfiguration
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **publicIPAddressVersion**: 'IPv4' | 'IPv6' | string: Gets or sets PrivateIP address version (IPv4/IPv6)
* **publicIPAllocationMethod**: 'Dynamic' | 'Static' | string: Gets or sets PrivateIP allocation method (Static/Dynamic)
* **resourceGuid**: string: Gets or sets resource GUID property of the PublicIP resource

## PublicIPAddressDnsSettings
### Properties
* **domainNameLabel**: string: Gets or sets the Domain name label.The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
* **fqdn**: string: Gets the FQDN, Fully qualified domain name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone.
* **reverseFqdn**: string: Gets or Sets the Reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.

## IPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [IPConfigurationPropertiesFormat](#ipconfigurationpropertiesformat): Properties of IPConfiguration

## IPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string: Gets or sets the privateIPAddress of the IP Configuration
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: Gets or sets PrivateIP allocation method (Static/Dynamic)
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **publicIPAddress**: [PublicIPAddress](#publicipaddress): PublicIPAddress resource
* **subnet**: [Subnet](#subnet): Subnet in a VirtualNetwork resource

## Subnet
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [SubnetPropertiesFormat](#subnetpropertiesformat)

## SubnetPropertiesFormat
### Properties
* **addressPrefix**: string: Gets or sets Address prefix for the subnet.
* **ipConfigurations**: [IPConfiguration](#ipconfiguration)[]: Gets array of references to the network interface IP configurations using subnet
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup): NetworkSecurityGroup resource
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **routeTable**: [RouteTable](#routetable): RouteTable resource

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
* **defaultSecurityRules**: [SecurityRule](#securityrule)[]: Gets or sets Default security rules of network security group
* **networkInterfaces**: [NetworkInterface](#networkinterface)[]: Gets collection of references to Network Interfaces
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **resourceGuid**: string: Gets or sets resource GUID property of the network security group resource
* **securityRules**: [SecurityRule](#securityrule)[]: Gets or sets Security rules of network security group
* **subnets**: [Subnet](#subnet)[]: Gets collection of references to subnets

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

## NetworkInterface
### Properties
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **location**: string: Resource location
* **name**: string (ReadOnly): Resource name
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat): NetworkInterface properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string (ReadOnly): Resource type

## NetworkInterfacePropertiesFormat
### Properties
* **dnsSettings**: [NetworkInterfaceDnsSettings](#networkinterfacednssettings): Dns Settings of a network interface
* **enableIPForwarding**: bool: Gets or sets whether IPForwarding is enabled on the NIC
* **ipConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[]: Gets or sets list of IPConfigurations of the NetworkInterface
* **macAddress**: string: Gets the MAC Address of the network interface
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup): NetworkSecurityGroup resource
* **primary**: bool: Gets whether this is a primary NIC on a virtual machine
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **resourceGuid**: string: Gets or sets resource GUID property of the network interface resource
* **virtualMachine**: [SubResource](#subresource)

## NetworkInterfaceDnsSettings
### Properties
* **appliedDnsServers**: string[]: Gets or sets list of Applied DNS servers IP addresses
* **dnsServers**: string[]: Gets or sets list of DNS servers IP addresses
* **internalDnsNameLabel**: string: Gets or sets the Internal DNS name
* **internalDomainNameSuffix**: string: Gets or sets internal domain name suffix of the NIC.
* **internalFqdn**: string: Gets or sets the internal FQDN.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **provisioningState**: string: Gets or sets Provisioning state of the resource Updating/Deleting/Failed
* **routes**: [Route](#route)[]: Gets or sets Routes in a Route Table
* **subnets**: [Subnet](#subnet)[]: Gets collection of references to subnets

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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **probe**: [SubResource](#subresource)
* **protocol**: 'Http' | 'Https' | string: Gets or sets the protocol
* **provisioningState**: string: Gets or sets Provisioning state of the backend http settings resource Updating/Deleting/Failed
* **requestTimeout**: int: Gets or sets request timeout

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
* **publicIPAddress**: [SubResource](#subresource)
* **subnet**: [SubResource](#subresource)

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

## ApplicationGatewayIPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewayIPConfigurationPropertiesFormat](#applicationgatewayipconfigurationpropertiesformat): Properties of IP configuration of application gateway

## ApplicationGatewayIPConfigurationPropertiesFormat
### Properties
* **provisioningState**: string: Gets or sets Provisioning state of the application gateway subnet resource Updating/Deleting/Failed
* **subnet**: [SubResource](#subresource)

## ApplicationGatewayHttpListener
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewayHttpListenerPropertiesFormat](#applicationgatewayhttplistenerpropertiesformat): Properties of Http listener of application gateway

## ApplicationGatewayHttpListenerPropertiesFormat
### Properties
* **frontendIPConfiguration**: [SubResource](#subresource)
* **frontendPort**: [SubResource](#subresource)
* **hostName**: string: Gets or sets the host name of http listener
* **protocol**: 'Http' | 'Https' | string: Gets or sets the protocol
* **provisioningState**: string: Gets or sets Provisioning state of the http listener resource Updating/Deleting/Failed
* **requireServerNameIndication**: bool: Gets or sets the requireServerNameIndication of http listener
* **sslCertificate**: [SubResource](#subresource)

## ApplicationGatewayProbe
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewayProbePropertiesFormat](#applicationgatewayprobepropertiesformat): Properties of probe of application gateway

## ApplicationGatewayProbePropertiesFormat
### Properties
* **host**: string: Gets or sets the host to send probe to
* **interval**: int: Gets or sets probing interval in seconds
* **path**: string: Gets or sets the relative path of probe
* **protocol**: 'Http' | 'Https' | string: Gets or sets the protocol
* **provisioningState**: string: Gets or sets Provisioning state of the backend http settings resource Updating/Deleting/Failed
* **timeout**: int: Gets or sets probing timeout in seconds
* **unhealthyThreshold**: int: Gets or sets probing unhealthy threshold

## ApplicationGatewayRequestRoutingRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewayRequestRoutingRulePropertiesFormat](#applicationgatewayrequestroutingrulepropertiesformat): Properties of Request routing rule of application gateway

## ApplicationGatewayRequestRoutingRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource)
* **backendHttpSettings**: [SubResource](#subresource)
* **httpListener**: [SubResource](#subresource)
* **provisioningState**: string: Gets or sets Provisioning state of the request routing rule resource Updating/Deleting/Failed
* **ruleType**: 'Basic' | 'PathBasedRouting' | string: Gets or sets the rule type
* **urlPathMap**: [SubResource](#subresource)

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

## ApplicationGatewayUrlPathMap
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewayUrlPathMapPropertiesFormat](#applicationgatewayurlpathmappropertiesformat): Properties of probe of application gateway

## ApplicationGatewayUrlPathMapPropertiesFormat
### Properties
* **defaultBackendAddressPool**: [SubResource](#subresource)
* **defaultBackendHttpSettings**: [SubResource](#subresource)
* **pathRules**: [ApplicationGatewayPathRule](#applicationgatewaypathrule)[]: Gets or sets path rule of URL path map resource
* **provisioningState**: string: Gets or sets Provisioning state of the backend http settings resource Updating/Deleting/Failed

## ApplicationGatewayPathRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewayPathRulePropertiesFormat](#applicationgatewaypathrulepropertiesformat): Properties of probe of application gateway

## ApplicationGatewayPathRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource)
* **backendHttpSettings**: [SubResource](#subresource)
* **paths**: string[]: Gets or sets the path rules of URL path map
* **provisioningState**: string: Gets or sets path rule of URL path map resource Updating/Deleting/Failed

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualNetworkGatewayConnectionPropertiesFormat
### Properties
* **authorizationKey**: string: The authorizationKey.
* **connectionStatus**: 'Connected' | 'Connecting' | 'NotConnected' | 'Unknown' | string: Virtual network Gateway connection status
* **connectionType**: 'ExpressRoute' | 'IPsec' | 'VPNClient' | 'Vnet2Vnet' | string: Gateway connection type IPsec/Dedicated/VpnClient/Vnet2Vnet
* **egressBytesTransferred**: int: The Egress Bytes Transferred in this connection
* **enableBgp**: bool: EnableBgp Flag
* **ingressBytesTransferred**: int: The Ingress Bytes Transferred in this connection
* **localNetworkGateway2**: [LocalNetworkGateway](#localnetworkgateway): A common class for general resource information
* **peer**: [SubResource](#subresource)
* **provisioningState**: string: Gets or sets Provisioning state of the VirtualNetworkGatewayConnection resource Updating/Deleting/Failed
* **resourceGuid**: string: Gets or sets resource GUID property of the VirtualNetworkGatewayConnection resource
* **routingWeight**: int: The Routing weight.
* **sharedKey**: string: The IPsec share key.
* **virtualNetworkGateway1**: [VirtualNetworkGateway](#virtualnetworkgateway): A common class for general resource information
* **virtualNetworkGateway2**: [VirtualNetworkGateway](#virtualnetworkgateway): A common class for general resource information

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
* **bgpSettings**: [BgpSettings](#bgpsettings)
* **gatewayIpAddress**: string: IP address of local network gateway.
* **localNetworkAddressSpace**: [AddressSpace](#addressspace): AddressSpace contains an array of IP address ranges that can be used by subnets
* **provisioningState**: string: Gets or sets Provisioning state of the LocalNetworkGateway resource Updating/Deleting/Failed
* **resourceGuid**: string: Gets or sets resource GUID property of the LocalNetworkGateway resource

## BgpSettings
### Properties
* **asn**: int: Gets or sets this BGP speaker's ASN
* **bgpPeeringAddress**: string: Gets or sets the BGP peering address and BGP identifier of this BGP speaker
* **peerWeight**: int: Gets or sets the weight added to routes learned from this BGP speaker

## AddressSpace
### Properties
* **addressPrefixes**: string[]: Gets or sets List of address blocks reserved for this virtual network in CIDR notation

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualNetworkGateway
### Properties
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **location**: string: Resource location
* **name**: string (ReadOnly): Resource name
* **properties**: [VirtualNetworkGatewayPropertiesFormat](#virtualnetworkgatewaypropertiesformat): VirtualNetworkGateway properties
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string (ReadOnly): Resource type

## VirtualNetworkGatewayPropertiesFormat
### Properties
* **bgpSettings**: [BgpSettings](#bgpsettings)
* **enableBgp**: bool: EnableBgp Flag
* **gatewayDefaultSite**: [SubResource](#subresource)
* **gatewayType**: 'ExpressRoute' | 'Vpn' | string: The type of this virtual network gateway.
* **ipConfigurations**: [VirtualNetworkGatewayIPConfiguration](#virtualnetworkgatewayipconfiguration)[]: IpConfigurations for Virtual network gateway.
* **provisioningState**: string: Gets or sets Provisioning state of the VirtualNetworkGateway resource Updating/Deleting/Failed
* **resourceGuid**: string: Gets or sets resource GUID property of the VirtualNetworkGateway resource
* **sku**: [VirtualNetworkGatewaySku](#virtualnetworkgatewaysku): VirtualNetworkGatewaySku details
* **vpnClientConfiguration**: [VpnClientConfiguration](#vpnclientconfiguration): VpnClientConfiguration for P2S client
* **vpnType**: 'PolicyBased' | 'RouteBased' | string: The type of this virtual network gateway.

## VirtualNetworkGatewayIPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [VirtualNetworkGatewayIPConfigurationPropertiesFormat](#virtualnetworkgatewayipconfigurationpropertiesformat): Properties of VirtualNetworkGatewayIPConfiguration

## VirtualNetworkGatewayIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string: Gets or sets the privateIPAddress of the IP Configuration
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: Gets or sets PrivateIP allocation method (Static/Dynamic)
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **publicIPAddress**: [SubResource](#subresource)
* **subnet**: [SubResource](#subresource)

## VirtualNetworkGatewaySku
### Properties
* **capacity**: int: The capacity
* **name**: 'Basic' | 'HighPerformance' | 'Standard' | string: Gateway sku name -Basic/HighPerformance/Standard
* **tier**: 'Basic' | 'HighPerformance' | 'Standard' | string: Gateway sku tier -Basic/HighPerformance/Standard

## VpnClientConfiguration
### Properties
* **vpnClientAddressPool**: [AddressSpace](#addressspace): AddressSpace contains an array of IP address ranges that can be used by subnets
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
* **provisioningState**: string: Gets or sets Provisioning state of the VPN client revoked certificate resource Updating/Deleting/Failed
* **thumbprint**: string: Gets or sets the revoked Vpn client certificate thumbprint

## VpnClientRootCertificate
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [VpnClientRootCertificatePropertiesFormat](#vpnclientrootcertificatepropertiesformat): Properties of SSL certificates of application gateway

## VpnClientRootCertificatePropertiesFormat
### Properties
* **provisioningState**: string: Gets or sets Provisioning state of the VPN client root certificate resource Updating/Deleting/Failed
* **publicCertData**: string: Gets or sets the certificate public data

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExpressRouteCircuitPropertiesFormat
### Properties
* **allowClassicOperations**: bool: allow classic operations
* **authorizations**: [ExpressRouteCircuitAuthorization](#expressroutecircuitauthorization)[]: Gets or sets list of authorizations
* **circuitProvisioningState**: string: Gets or sets CircuitProvisioningState state of the resource
* **peerings**: [ExpressRouteCircuitPeering](#expressroutecircuitpeering)[]: Gets or sets list of peerings
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **serviceKey**: string: Gets or sets ServiceKey
* **serviceProviderNotes**: string: Gets or sets ServiceProviderNotes
* **serviceProviderProperties**: [ExpressRouteCircuitServiceProviderProperties](#expressroutecircuitserviceproviderproperties): Contains ServiceProviderProperties in an ExpressRouteCircuit
* **serviceProviderProvisioningState**: 'Deprovisioning' | 'NotProvisioned' | 'Provisioned' | 'Provisioning' | string: Gets or sets ServiceProviderProvisioningState state of the resource

## ExpressRouteCircuitAuthorization
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [AuthorizationPropertiesFormat](#authorizationpropertiesformat)

## AuthorizationPropertiesFormat
### Properties
* **authorizationKey**: string: Gets or sets the authorization key
* **authorizationUseStatus**: 'Available' | 'InUse' | string: Gets or sets AuthorizationUseStatus
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed

## ExpressRouteCircuitPeering
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ExpressRouteCircuitPeeringPropertiesFormat](#expressroutecircuitpeeringpropertiesformat)

## ExpressRouteCircuitPeeringPropertiesFormat
### Properties
* **azureASN**: int: Gets or sets the azure ASN
* **microsoftPeeringConfig**: [ExpressRouteCircuitPeeringConfig](#expressroutecircuitpeeringconfig): Specifies the peering config
* **peerASN**: int: Gets or sets the peer ASN
* **peeringType**: 'AzurePrivatePeering' | 'AzurePublicPeering' | 'MicrosoftPeering' | string: Gets or sets PeeringType
* **primaryAzurePort**: string: Gets or sets the primary port
* **primaryPeerAddressPrefix**: string: Gets or sets the primary address prefix
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **secondaryAzurePort**: string: Gets or sets the secondary port
* **secondaryPeerAddressPrefix**: string: Gets or sets the secondary address prefix
* **sharedKey**: string: Gets or sets the shared key
* **state**: 'Disabled' | 'Enabled' | string: Gets or sets state of Peering
* **stats**: [ExpressRouteCircuitStats](#expressroutecircuitstats): Contains Stats associated with the peering
* **vlanId**: int: Gets or sets the vlan id

## ExpressRouteCircuitPeeringConfig
### Properties
* **advertisedPublicPrefixes**: string[]: Gets or sets the reference of AdvertisedPublicPrefixes
* **advertisedPublicPrefixesState**: 'Configured' | 'Configuring' | 'NotConfigured' | 'ValidationNeeded' | string: Gets or sets AdvertisedPublicPrefixState of the Peering resource
* **customerASN**: int: Gets or Sets CustomerAsn of the peering.
* **routingRegistryName**: string: Gets or Sets RoutingRegistryName of the config.

## ExpressRouteCircuitStats
### Properties
* **primarybytesIn**: int: Gets BytesIn of the peering.
* **primarybytesOut**: int: Gets BytesOut of the peering.
* **secondarybytesIn**: int: Gets BytesIn of the peering.
* **secondarybytesOut**: int: Gets BytesOut of the peering.

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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LoadBalancerPropertiesFormat
### Properties
* **backendAddressPools**: [BackendAddressPool](#backendaddresspool)[]: Gets or sets Pools of backend IP addresses
* **frontendIPConfigurations**: [FrontendIPConfiguration](#frontendipconfiguration)[]: Gets or sets frontend IP addresses of the load balancer
* **inboundNatPools**: [InboundNatPool](#inboundnatpool)[]: Gets or sets inbound NAT pools
* **inboundNatRules**: [InboundNatRule](#inboundnatrule)[]: Gets or sets list of inbound rules
* **loadBalancingRules**: [LoadBalancingRule](#loadbalancingrule)[]: Gets or sets load balancing rules
* **outboundNatRules**: [OutboundNatRule](#outboundnatrule)[]: Gets or sets outbound NAT rules
* **probes**: [Probe](#probe)[]: Gets or sets list of Load balancer probes
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **resourceGuid**: string: Gets or sets resource GUID property of the Load balancer resource

## FrontendIPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [FrontendIPConfigurationPropertiesFormat](#frontendipconfigurationpropertiesformat): Properties of Frontend IP Configuration of the load balancer

## FrontendIPConfigurationPropertiesFormat
### Properties
* **inboundNatPools**: [SubResource](#subresource)[]: Read only.Inbound pools URIs that use this frontend IP
* **inboundNatRules**: [SubResource](#subresource)[]: Read only.Inbound rules URIs that use this frontend IP
* **loadBalancingRules**: [SubResource](#subresource)[]: Gets Load Balancing rules URIs that use this frontend IP
* **outboundNatRules**: [SubResource](#subresource)[]: Read only.Outbound rules URIs that use this frontend IP
* **privateIPAddress**: string: Gets or sets the privateIPAddress of the IP Configuration
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: Gets or sets PrivateIP allocation method (Static/Dynamic)
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **publicIPAddress**: [PublicIPAddress](#publicipaddress): PublicIPAddress resource
* **subnet**: [Subnet](#subnet): Subnet in a VirtualNetwork resource

## InboundNatPool
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [InboundNatPoolPropertiesFormat](#inboundnatpoolpropertiesformat): Properties of Inbound NAT pool

## InboundNatPoolPropertiesFormat
### Properties
* **backendPort**: int (Required): Gets or sets a port used for internal connections on the endpoint. The localPort attribute maps the eternal port of the endpoint to an internal port on a role. This is useful in scenarios where a role must communicate to an internal component on a port that is different from the one that is exposed externally. If not specified, the value of localPort is the same as the port attribute. Set the value of localPort to '*' to automatically assign an unallocated port that is discoverable using the runtime API
* **frontendIPConfiguration**: [SubResource](#subresource)
* **frontendPortRangeEnd**: int (Required): Gets or sets the ending port range for the NAT pool. You can specify any port number you choose, but the port numbers specified for each role in the service must be unique. Possible values range between 1 and 65535, inclusive
* **frontendPortRangeStart**: int (Required): Gets or sets the starting port range for the NAT pool. You can specify any port number you choose, but the port numbers specified for each role in the service must be unique. Possible values range between 1 and 65535, inclusive
* **protocol**: 'Tcp' | 'Udp' | string (Required): Gets or sets the transport protocol for the external endpoint. Possible values are Udp or Tcp
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed

## LoadBalancingRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [LoadBalancingRulePropertiesFormat](#loadbalancingrulepropertiesformat): Properties of the load balancer

## LoadBalancingRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource)
* **backendPort**: int: Gets or sets a port used for internal connections on the endpoint. The localPort attribute maps the eternal port of the endpoint to an internal port on a role. This is useful in scenarios where a role must communicate to an internal component on a port that is different from the one that is exposed externally. If not specified, the value of localPort is the same as the port attribute. Set the value of localPort to '*' to automatically assign an unallocated port that is discoverable using the runtime API
* **enableFloatingIP**: bool: Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn availability Group. This setting is required when using the SQL Always ON availability Groups in SQL server. This setting can't be changed after you create the endpoint
* **frontendIPConfiguration**: [SubResource](#subresource)
* **frontendPort**: int (Required): Gets or sets the port for the external endpoint. You can specify any port number you choose, but the port numbers specified for each role in the service must be unique. Possible values range between 1 and 65535, inclusive
* **idleTimeoutInMinutes**: int: Gets or sets the timeout for the Tcp idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to Tcp
* **loadDistribution**: 'Default' | 'SourceIP' | 'SourceIPProtocol' | string: Gets or sets the load distribution policy for this rule
* **probe**: [SubResource](#subresource)
* **protocol**: 'Tcp' | 'Udp' | string (Required): Gets or sets the transport protocol for the external endpoint. Possible values are Udp or Tcp
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed

## OutboundNatRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [OutboundNatRulePropertiesFormat](#outboundnatrulepropertiesformat): Outbound NAT pool of the loadbalancer

## OutboundNatRulePropertiesFormat
### Properties
* **allocatedOutboundPorts**: int: Gets or sets the number of outbound ports to be used for SNAT
* **backendAddressPool**: [SubResource](#subresource) (Required)
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

## VirtualNetworkPropertiesFormat
### Properties
* **addressSpace**: [AddressSpace](#addressspace): AddressSpace contains an array of IP address ranges that can be used by subnets
* **dhcpOptions**: [DhcpOptions](#dhcpoptions): DHCPOptions contains an array of DNS servers available to VMs deployed in the virtual networkStandard DHCP option for a subnet overrides VNET DHCP options.
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **resourceGuid**: string: Gets or sets resource GUID property of the VirtualNetwork resource
* **subnets**: [Subnet](#subnet)[]: Gets or sets List of subnets in a VirtualNetwork

## DhcpOptions
### Properties
* **dnsServers**: string[]: Gets or sets list of DNS servers IP addresses

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

