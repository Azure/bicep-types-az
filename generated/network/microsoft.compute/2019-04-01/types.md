# microsoft.Compute @ 2019-04-01

## Resource microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces@2019-04-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat) (ReadOnly): Properties of the network interface.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipConfigurations@2019-04-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkInterfaceIPConfigurationPropertiesFormat](#networkinterfaceipconfigurationpropertiesformat) (ReadOnly): Network interface IP configuration properties.
* **type**: 'microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipconfigurations/publicipaddresses@2019-04-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat) (ReadOnly): Public IP address properties.
* **sku**: [PublicIPAddressSku](#publicipaddresssku) (ReadOnly): The public IP address SKU.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipconfigurations/publicipaddresses' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[] (ReadOnly): A list of availability zones denoting the IP allocated for the resource needs to come from.

## ApplicationGatewayBackendAddress
### Properties
* **fqdn**: string: Fully qualified domain name (FQDN).
* **ipAddress**: string: IP address.

## ApplicationGatewayBackendAddressPool
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the backend address pool that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayBackendAddressPoolPropertiesFormat](#applicationgatewaybackendaddresspoolpropertiesformat): Properties of the application gateway backend address pool.
* **type**: string: Type of the resource.

## ApplicationGatewayBackendAddressPoolPropertiesFormat
### Properties
* **backendAddresses**: [ApplicationGatewayBackendAddress](#applicationgatewaybackendaddress)[]: Backend addresses.
* **backendIPConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[]: Collection of references to IPs defined in network interfaces.
* **provisioningState**: string: Provisioning state of the backend address pool resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## ApplicationSecurityGroup
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [ApplicationSecurityGroupPropertiesFormat](#applicationsecuritygrouppropertiesformat): Properties of the application security group.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## ApplicationSecurityGroupPropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state of the application security group resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.

## BackendAddressPool
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [BackendAddressPoolPropertiesFormat](#backendaddresspoolpropertiesformat): Properties of load balancer backend address pool.

## BackendAddressPoolPropertiesFormat
### Properties
* **backendIPConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[] (ReadOnly): Gets collection of references to IP addresses defined in network interfaces.
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly): Gets load balancing rules that use this backend address pool.
* **outboundRule**: [SubResource](#subresource) (ReadOnly): Gets outbound rules that use this backend address pool.
* **outboundRules**: [SubResource](#subresource)[] (ReadOnly): Gets outbound rules that use this backend address pool.
* **provisioningState**: string: Get provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## DdosSettings
### Properties
* **ddosCustomPolicy**: [SubResource](#subresource): The DDoS custom policy associated with the public IP.
* **protectionCoverage**: 'Basic' | 'Standard' | string: The DDoS protection policy customizability of the public IP. Only standard coverage will have the ability to be customized.

## Delegation
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a subnet. This name can be used to access the resource.
* **properties**: [ServiceDelegationPropertiesFormat](#servicedelegationpropertiesformat): Properties of the subnet.

## FrontendIPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [FrontendIPConfigurationPropertiesFormat](#frontendipconfigurationpropertiesformat): Properties of the load balancer probe.
* **zones**: string[]: A list of availability zones denoting the IP allocated for the resource needs to come from.

## FrontendIPConfigurationPropertiesFormat
### Properties
* **inboundNatPools**: [SubResource](#subresource)[] (ReadOnly): Read only. Inbound pools URIs that use this frontend IP.
* **inboundNatRules**: [SubResource](#subresource)[] (ReadOnly): Read only. Inbound rules URIs that use this frontend IP.
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly): Gets load balancing rules URIs that use this frontend IP.
* **outboundRules**: [SubResource](#subresource)[] (ReadOnly): Read only. Outbound rules URIs that use this frontend IP.
* **privateIPAddress**: string: The private IP address of the IP configuration.
* **privateIPAddressVersion**: 'IPv4' | 'IPv6' | string: It represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: The Private IP allocation method.
* **provisioningState**: string: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicIPAddress**: [PublicIPAddress](#publicipaddress): The reference of the Public IP resource.
* **publicIPPrefix**: [SubResource](#subresource): The reference of the Public IP Prefix resource.
* **subnet**: [Subnet](#subnet): The reference of the subnet resource.

## InboundNatRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [InboundNatRulePropertiesFormat](#inboundnatrulepropertiesformat): Properties of load balancer inbound nat rule.

## InboundNatRulePropertiesFormat
### Properties
* **backendIPConfiguration**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration) (ReadOnly): A reference to a private IP address defined on a network interface of a VM. Traffic sent to the frontend port of each of the frontend IP configurations is forwarded to the backend IP.
* **backendPort**: int: The port used for the internal endpoint. Acceptable values range from 1 to 65535.
* **enableFloatingIP**: bool: Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
* **enableTcpReset**: bool: Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
* **frontendIPConfiguration**: [SubResource](#subresource): A reference to frontend IP addresses.
* **frontendPort**: int: The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
* **idleTimeoutInMinutes**: int: The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
* **protocol**: 'All' | 'Tcp' | 'Udp' | string: The reference to the transport protocol used by the load balancing rule.
* **provisioningState**: string: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## IPConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [IPConfigurationPropertiesFormat](#ipconfigurationpropertiesformat): Properties of the IP configuration.

## IPConfigurationProfile
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource. This name can be used to access the resource.
* **properties**: [IPConfigurationProfilePropertiesFormat](#ipconfigurationprofilepropertiesformat): Properties of the IP configuration profile.
* **type**: string (ReadOnly): Sub Resource type.

## IPConfigurationProfilePropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.
* **subnet**: [Subnet](#subnet): The reference of the subnet resource to create a container network interface ip configuration.

## IPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string: The private IP address of the IP configuration.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: The private IP address allocation method.
* **provisioningState**: string: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicIPAddress**: [PublicIPAddress](#publicipaddress): The reference of the public IP resource.
* **subnet**: [Subnet](#subnet): The reference of the subnet resource.

## IpTag
### Properties
* **ipTagType**: string: Gets or sets the ipTag type: Example FirstPartyUsage.
* **tag**: string: Gets or sets value of the IpTag associated with the public IP. Example SQL, Storage etc.

## NetworkInterface
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat): Properties of the network interface.
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
* **properties**: [NetworkInterfaceIPConfigurationPropertiesFormat](#networkinterfaceipconfigurationpropertiesformat): Network interface IP configuration properties.

## NetworkInterfaceIPConfigurationPropertiesFormat
### Properties
* **applicationGatewayBackendAddressPools**: [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)[]: The reference of ApplicationGatewayBackendAddressPool resource.
* **applicationSecurityGroups**: [ApplicationSecurityGroup](#applicationsecuritygroup)[]: Application security groups in which the IP configuration is included.
* **loadBalancerBackendAddressPools**: [BackendAddressPool](#backendaddresspool)[]: The reference of LoadBalancerBackendAddressPool resource.
* **loadBalancerInboundNatRules**: [InboundNatRule](#inboundnatrule)[]: A list of references of LoadBalancerInboundNatRules.
* **primary**: bool: Gets whether this is a primary customer address on the network interface.
* **privateIPAddress**: string: Private IP address of the IP configuration.
* **privateIPAddressVersion**: 'IPv4' | 'IPv6' | string: Available from Api-Version 2016-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: The private IP address allocation method.
* **provisioningState**: string: The provisioning state of the network interface IP configuration. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicIPAddress**: [PublicIPAddress](#publicipaddress): Public IP address bound to the IP configuration.
* **subnet**: [Subnet](#subnet): Subnet bound to the IP configuration.
* **virtualNetworkTaps**: [VirtualNetworkTap](#virtualnetworktap)[]: The reference to Virtual Network Taps.

## NetworkInterfacePropertiesFormat
### Properties
* **dnsSettings**: [NetworkInterfaceDnsSettings](#networkinterfacednssettings): The DNS settings in network interface.
* **enableAcceleratedNetworking**: bool: If the network interface is accelerated networking enabled.
* **enableIPForwarding**: bool: Indicates whether IP forwarding is enabled on this network interface.
* **hostedWorkloads**: string[] (ReadOnly): A list of references to linked BareMetal resources.
* **ipConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[]: A list of IPConfigurations of the network interface.
* **macAddress**: string: The MAC address of the network interface.
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup): The reference of the NetworkSecurityGroup resource.
* **primary**: bool: Gets whether this is a primary network interface on a virtual machine.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint) (ReadOnly): A reference to the private endpoint to which the network interface is linked.
* **provisioningState**: string: The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string: The resource GUID property of the network interface resource.
* **tapConfigurations**: [NetworkInterfaceTapConfiguration](#networkinterfacetapconfiguration)[]: A list of TapConfigurations of the network interface.
* **virtualMachine**: [SubResource](#subresource) (ReadOnly): The reference of a virtual machine.

## NetworkInterfaceTapConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [NetworkInterfaceTapConfigurationPropertiesFormat](#networkinterfacetapconfigurationpropertiesformat): Properties of the Virtual Network Tap configuration.
* **type**: string (ReadOnly): Sub Resource type.

## NetworkInterfaceTapConfigurationPropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state of the network interface tap configuration. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **virtualNetworkTap**: [VirtualNetworkTap](#virtualnetworktap): The reference of the Virtual Network Tap resource.

## NetworkSecurityGroup
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [NetworkSecurityGroupPropertiesFormat](#networksecuritygrouppropertiesformat): Properties of the network security group.
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

## PrivateEndpoint
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [PrivateEndpointProperties](#privateendpointproperties): Properties of the private endpoint.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## PrivateEndpointProperties
### Properties
* **manualPrivateLinkServiceConnections**: [PrivateLinkServiceConnection](#privatelinkserviceconnection)[]: A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource.
* **networkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly): Gets an array of references to the network interfaces created for this private endpoint.
* **privateLinkServiceConnections**: [PrivateLinkServiceConnection](#privatelinkserviceconnection)[]: A grouping of information about the connection to the remote resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the private endpoint.
* **subnet**: [Subnet](#subnet): The ID of the subnet from which the private IP will be allocated.

## PrivateLinkServiceConnection
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [PrivateLinkServiceConnectionProperties](#privatelinkserviceconnectionproperties): Properties of the private link service connection.
* **type**: string (ReadOnly): The resource type.

## PrivateLinkServiceConnectionProperties
### Properties
* **groupIds**: string[]: The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): A collection of read-only information about the state of the connection to the remote resource.
* **privateLinkServiceId**: string: The resource id of private link service.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the private link service connection.
* **requestMessage**: string: A message passed to the owner of the remote resource with this connection request. Restricted to 140 chars.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## PublicIPAddress
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat): Public IP address properties.
* **sku**: [PublicIPAddressSku](#publicipaddresssku): The public IP address SKU.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.
* **zones**: string[]: A list of availability zones denoting the IP allocated for the resource needs to come from.

## PublicIPAddressDnsSettings
### Properties
* **domainNameLabel**: string: Gets or sets the Domain name label.The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
* **fqdn**: string: Gets the FQDN, Fully qualified domain name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone.
* **reverseFqdn**: string: Gets or Sets the Reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.

## PublicIPAddressPropertiesFormat
### Properties
* **ddosSettings**: [DdosSettings](#ddossettings): The DDoS protection custom policy associated with the public IP address.
* **dnsSettings**: [PublicIPAddressDnsSettings](#publicipaddressdnssettings): The FQDN of the DNS record associated with the public IP address.
* **idleTimeoutInMinutes**: int: The idle timeout of the public IP address.
* **ipAddress**: string: The IP address associated with the public IP address resource.
* **ipConfiguration**: [IPConfiguration](#ipconfiguration) (ReadOnly): The IP configuration associated with the public IP address.
* **ipTags**: [IpTag](#iptag)[]: The list of tags associated with the public IP address.
* **provisioningState**: string: The provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicIPAddressVersion**: 'IPv4' | 'IPv6' | string: The public IP address version.
* **publicIPAllocationMethod**: 'Dynamic' | 'Static' | string: The public IP address allocation method.
* **publicIPPrefix**: [SubResource](#subresource): The Public IP Prefix this Public IP Address should be allocated from.
* **resourceGuid**: string: The resource GUID property of the public IP resource.

## PublicIPAddressSku
### Properties
* **name**: 'Basic' | 'Standard' | string: Name of a public IP address SKU.

## ResourceNavigationLink
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ResourceNavigationLinkFormat](#resourcenavigationlinkformat): Resource navigation link properties format.
* **type**: string (ReadOnly): Resource type.

## ResourceNavigationLinkFormat
### Properties
* **link**: string: Link to the external resource.
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

## Route
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [RoutePropertiesFormat](#routepropertiesformat): Properties of the route.

## RoutePropertiesFormat
### Properties
* **addressPrefix**: string: The destination CIDR to which the route applies.
* **nextHopIpAddress**: string: The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
* **nextHopType**: 'Internet' | 'None' | 'VirtualAppliance' | 'VirtualNetworkGateway' | 'VnetLocal' | string (Required): The type of Azure hop the packet should be sent to.
* **provisioningState**: string: The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## RouteTable
### Properties
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [RouteTablePropertiesFormat](#routetablepropertiesformat): Properties of the route table.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## RouteTablePropertiesFormat
### Properties
* **disableBgpRoutePropagation**: bool: Gets or sets whether to disable the routes learned by BGP on that route table. True means disable.
* **provisioningState**: string: The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **routes**: [Route](#route)[]: Collection of routes contained within a route table.
* **subnets**: [Subnet](#subnet)[] (ReadOnly): A collection of references to subnets.

## SecurityRule
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [SecurityRulePropertiesFormat](#securityrulepropertiesformat): Properties of the security rule.

## SecurityRulePropertiesFormat
### Properties
* **access**: 'Allow' | 'Deny' | string (Required): The network traffic is allowed or denied.
* **description**: string: A description for this rule. Restricted to 140 chars.
* **destinationAddressPrefix**: string: The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
* **destinationAddressPrefixes**: string[]: The destination address prefixes. CIDR or destination IP ranges.
* **destinationApplicationSecurityGroups**: [ApplicationSecurityGroup](#applicationsecuritygroup)[]: The application security group specified as destination.
* **destinationPortRange**: string: The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
* **destinationPortRanges**: string[]: The destination port ranges.
* **direction**: 'Inbound' | 'Outbound' | string (Required): The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
* **priority**: int: The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
* **protocol**: '*' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' | string (Required): Network protocol this rule applies to.
* **provisioningState**: string: The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **sourceAddressPrefix**: string: The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
* **sourceAddressPrefixes**: string[]: The CIDR or source IP ranges.
* **sourceApplicationSecurityGroups**: [ApplicationSecurityGroup](#applicationsecuritygroup)[]: The application security group specified as source.
* **sourcePortRange**: string: The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
* **sourcePortRanges**: string[]: The source port ranges.

## ServiceAssociationLink
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ServiceAssociationLinkPropertiesFormat](#serviceassociationlinkpropertiesformat): Resource navigation link properties format.
* **type**: string: Resource type.

## ServiceAssociationLinkPropertiesFormat
### Properties
* **allowDelete**: bool: If true, the resource can be deleted.
* **link**: string: Link to the external resource.
* **linkedResourceType**: string: Resource type of the linked resource.
* **locations**: string[]: A list of locations.
* **provisioningState**: string (ReadOnly): Provisioning state of the ServiceAssociationLink resource.

## ServiceDelegationPropertiesFormat
### Properties
* **actions**: string[]: Describes the actions permitted to the service upon delegation.
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.
* **serviceName**: string: The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers).

## ServiceEndpointPolicy
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [ServiceEndpointPolicyPropertiesFormat](#serviceendpointpolicypropertiesformat): Properties of the service end point policy.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## ServiceEndpointPolicyDefinition
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ServiceEndpointPolicyDefinitionPropertiesFormat](#serviceendpointpolicydefinitionpropertiesformat): Properties of the service endpoint policy definition.

## ServiceEndpointPolicyDefinitionPropertiesFormat
### Properties
* **description**: string: A description for this rule. Restricted to 140 chars.
* **provisioningState**: string (ReadOnly): The provisioning state of the service end point policy definition. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **service**: string: Service endpoint name.
* **serviceResources**: string[]: A list of service resources.

## ServiceEndpointPolicyPropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state of the service endpoint policy. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the service endpoint policy resource.
* **serviceEndpointPolicyDefinitions**: [ServiceEndpointPolicyDefinition](#serviceendpointpolicydefinition)[]: A collection of service endpoint policy definitions of the service endpoint policy.
* **subnets**: [Subnet](#subnet)[] (ReadOnly): A collection of references to subnets.

## ServiceEndpointPropertiesFormat
### Properties
* **locations**: string[]: A list of locations.
* **provisioningState**: string: The provisioning state of the resource.
* **service**: string: The type of the endpoint service.

## Subnet
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [SubnetPropertiesFormat](#subnetpropertiesformat): Properties of the subnet.

## SubnetPropertiesFormat
### Properties
* **addressPrefix**: string: The address prefix for the subnet.
* **addressPrefixes**: string[]: List of address prefixes for the subnet.
* **delegations**: [Delegation](#delegation)[]: Gets an array of references to the delegations on the subnet.
* **ipConfigurationProfiles**: [IPConfigurationProfile](#ipconfigurationprofile)[] (ReadOnly): Array of IP configuration profiles which reference this subnet.
* **ipConfigurations**: [IPConfiguration](#ipconfiguration)[] (ReadOnly): Gets an array of references to the network interface IP configurations using subnet.
* **natGateway**: [SubResource](#subresource): Nat gateway associated with this subnet.
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup): The reference of the NetworkSecurityGroup resource.
* **privateEndpointNetworkPolicies**: string: Enable or Disable private end point on the subnet.
* **privateEndpoints**: [PrivateEndpoint](#privateendpoint)[] (ReadOnly): An array of references to private endpoints.
* **privateLinkServiceNetworkPolicies**: string: Enable or Disable private link service on the subnet.
* **provisioningState**: string: The provisioning state of the resource.
* **purpose**: string (ReadOnly): A read-only string identifying the intention of use for this subnet based on delegations and other user-defined properties.
* **resourceNavigationLinks**: [ResourceNavigationLink](#resourcenavigationlink)[]: Gets an array of references to the external resources using subnet.
* **routeTable**: [RouteTable](#routetable): The reference of the RouteTable resource.
* **serviceAssociationLinks**: [ServiceAssociationLink](#serviceassociationlink)[]: Gets an array of references to services injecting into this subnet.
* **serviceEndpointPolicies**: [ServiceEndpointPolicy](#serviceendpointpolicy)[]: An array of service endpoint policies.
* **serviceEndpoints**: [ServiceEndpointPropertiesFormat](#serviceendpointpropertiesformat)[]: An array of service endpoints.

## SubResource
### Properties
* **id**: string: Resource ID.

## VirtualNetworkTap
### Properties
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [VirtualNetworkTapPropertiesFormat](#virtualnetworktappropertiesformat): Virtual Network Tap Properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## VirtualNetworkTapPropertiesFormat
### Properties
* **destinationLoadBalancerFrontEndIPConfiguration**: [FrontendIPConfiguration](#frontendipconfiguration): The reference to the private IP address on the internal Load Balancer that will receive the tap.
* **destinationNetworkInterfaceIPConfiguration**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration): The reference to the private IP Address of the collector nic that will receive the tap.
* **destinationPort**: int: The VXLAN destination port that will receive the tapped traffic.
* **networkInterfaceTapConfigurations**: [NetworkInterfaceTapConfiguration](#networkinterfacetapconfiguration)[] (ReadOnly): Specifies the list of resource IDs for the network interface IP configuration that needs to be tapped.
* **provisioningState**: string (ReadOnly): The provisioning state of the virtual network tap. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string (ReadOnly): The resourceGuid property of the virtual network tap.

