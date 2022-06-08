# microsoft.Compute @ 2019-02-01

## Resource microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces@2019-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat) (ReadOnly): NetworkInterface properties.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipConfigurations@2019-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkInterfaceIPConfigurationPropertiesFormat](#networkinterfaceipconfigurationpropertiesformat) (ReadOnly): Properties of IP configuration.
* **type**: 'microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipconfigurations/publicipaddresses@2019-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat) (ReadOnly): Public IP address properties.
* **sku**: [PublicIPAddressSku](#publicipaddresssku) (ReadOnly): SKU of a public IP address
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipconfigurations/publicipaddresses' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[] (ReadOnly): A list of availability zones denoting the IP allocated for the resource needs to come from.

## ApplicationGatewayBackendAddress
### Properties
* **fqdn**: string (ReadOnly): Fully qualified domain name (FQDN).
* **ipAddress**: string (ReadOnly): IP address

## ApplicationGatewayBackendAddressPool
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): Name of the backend address pool that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayBackendAddressPoolPropertiesFormat](#applicationgatewaybackendaddresspoolpropertiesformat) (ReadOnly): Properties of Backend Address Pool of an application gateway.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayBackendAddressPoolPropertiesFormat
### Properties
* **backendAddresses**: [ApplicationGatewayBackendAddress](#applicationgatewaybackendaddress)[] (ReadOnly): Backend addresses
* **backendIPConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[] (ReadOnly): Collection of references to IPs defined in network interfaces.
* **provisioningState**: string (ReadOnly): Provisioning state of the backend address pool resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## ApplicationSecurityGroup
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **location**: string (ReadOnly): Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [ApplicationSecurityGroupPropertiesFormat](#applicationsecuritygrouppropertiesformat) (ReadOnly): Application security group properties.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: string (ReadOnly): Resource type.

## ApplicationSecurityGroupPropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state of the application security group resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.

## BackendAddressPool
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [BackendAddressPoolPropertiesFormat](#backendaddresspoolpropertiesformat) (ReadOnly): Properties of the backend address pool.

## BackendAddressPoolPropertiesFormat
### Properties
* **backendIPConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[] (ReadOnly): Gets collection of references to IP addresses defined in network interfaces.
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly): Gets load balancing rules that use this backend address pool.
* **outboundRule**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.
* **outboundRules**: [SubResource](#subresource)[] (ReadOnly): Gets outbound rules that use this backend address pool.
* **provisioningState**: string (ReadOnly): Get provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## DdosSettings
### Properties
* **ddosCustomPolicy**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.
* **protectionCoverage**: 'Basic' | 'Standard' | string (ReadOnly): The DDoS protection policy customizability of the public IP. Only standard coverage will have the ability to be customized.

## Delegation
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): The name of the resource that is unique within a subnet. This name can be used to access the resource.
* **properties**: [ServiceDelegationPropertiesFormat](#servicedelegationpropertiesformat) (ReadOnly): Properties of a service delegation.

## EndpointService
### Properties
* **id**: string (ReadOnly): A unique identifier of the service being referenced by the interface endpoint.

## FrontendIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [FrontendIPConfigurationPropertiesFormat](#frontendipconfigurationpropertiesformat) (ReadOnly): Properties of Frontend IP Configuration of the load balancer.
* **zones**: string[] (ReadOnly): A list of availability zones denoting the IP allocated for the resource needs to come from.

## FrontendIPConfigurationPropertiesFormat
### Properties
* **inboundNatPools**: [SubResource](#subresource)[] (ReadOnly): Read only. Inbound pools URIs that use this frontend IP.
* **inboundNatRules**: [SubResource](#subresource)[] (ReadOnly): Read only. Inbound rules URIs that use this frontend IP.
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly): Gets load balancing rules URIs that use this frontend IP.
* **outboundRules**: [SubResource](#subresource)[] (ReadOnly): Read only. Outbound rules URIs that use this frontend IP.
* **privateIPAddress**: string (ReadOnly): The private IP address of the IP configuration.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string (ReadOnly): IP address allocation method.
* **provisioningState**: string (ReadOnly): Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicIPAddress**: [PublicIPAddress](#publicipaddress) (ReadOnly): Public IP address resource.
* **publicIPPrefix**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.
* **subnet**: [Subnet](#subnet) (ReadOnly): Subnet in a virtual network resource.

## InboundNatRule
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [InboundNatRulePropertiesFormat](#inboundnatrulepropertiesformat) (ReadOnly): Properties of the inbound NAT rule.

## InboundNatRulePropertiesFormat
### Properties
* **backendIPConfiguration**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration) (ReadOnly): IPConfiguration in a network interface.
* **backendPort**: int (ReadOnly): The port used for the internal endpoint. Acceptable values range from 1 to 65535.
* **enableFloatingIP**: bool (ReadOnly): Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
* **enableTcpReset**: bool (ReadOnly): Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
* **frontendIPConfiguration**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.
* **frontendPort**: int (ReadOnly): The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
* **idleTimeoutInMinutes**: int (ReadOnly): The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
* **protocol**: 'All' | 'Tcp' | 'Udp' | string (ReadOnly): The transport protocol for the endpoint. Possible values are 'Udp' or 'Tcp' or 'All'.
* **provisioningState**: string (ReadOnly): Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## InterfaceEndpoint
### Properties
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **location**: string (ReadOnly): Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [InterfaceEndpointProperties](#interfaceendpointproperties) (ReadOnly): Properties of the interface endpoint.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: string (ReadOnly): Resource type.

## InterfaceEndpointProperties
### Properties
* **endpointService**: [EndpointService](#endpointservice) (ReadOnly): Identifies the service being brought into the virtual network.
* **fqdn**: string (ReadOnly): A first-party service's FQDN that is mapped to the private IP allocated via this interface endpoint.
* **networkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly): Gets an array of references to the network interfaces created for this interface endpoint.
* **owner**: string (ReadOnly): A read-only property that identifies who created this interface endpoint.
* **provisioningState**: string (ReadOnly): The provisioning state of the interface endpoint. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **subnet**: [Subnet](#subnet) (ReadOnly): Subnet in a virtual network resource.

## IPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [IPConfigurationPropertiesFormat](#ipconfigurationpropertiesformat) (ReadOnly): Properties of IP configuration.

## IPConfigurationProfile
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): The name of the resource. This name can be used to access the resource.
* **properties**: [IPConfigurationProfilePropertiesFormat](#ipconfigurationprofilepropertiesformat) (ReadOnly): IP configuration profile properties.
* **type**: string (ReadOnly): Sub Resource type.

## IPConfigurationProfilePropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.
* **subnet**: [Subnet](#subnet) (ReadOnly): Subnet in a virtual network resource.

## IPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string (ReadOnly): The private IP address of the IP configuration.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string (ReadOnly): IP address allocation method.
* **provisioningState**: string (ReadOnly): Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicIPAddress**: [PublicIPAddress](#publicipaddress) (ReadOnly): Public IP address resource.
* **subnet**: [Subnet](#subnet) (ReadOnly): Subnet in a virtual network resource.

## IpTag
### Properties
* **ipTagType**: string (ReadOnly): Gets or sets the ipTag type: Example FirstPartyUsage.
* **tag**: string (ReadOnly): Gets or sets value of the IpTag associated with the public IP. Example SQL, Storage etc

## NetworkInterface
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **location**: string (ReadOnly): Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat) (ReadOnly): NetworkInterface properties.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: string (ReadOnly): Resource type.

## NetworkInterfaceDnsSettings
### Properties
* **appliedDnsServers**: string[] (ReadOnly): If the VM that uses this NIC is part of an Availability Set, then this list will have the union of all DNS servers from all NICs that are part of the Availability Set. This property is what is configured on each of those VMs.
* **dnsServers**: string[] (ReadOnly): List of DNS servers IP addresses. Use 'AzureProvidedDNS' to switch to azure provided DNS resolution. 'AzureProvidedDNS' value cannot be combined with other IPs, it must be the only value in dnsServers collection.
* **internalDnsNameLabel**: string (ReadOnly): Relative DNS name for this NIC used for internal communications between VMs in the same virtual network.
* **internalDomainNameSuffix**: string (ReadOnly): Even if internalDnsNameLabel is not specified, a DNS entry is created for the primary NIC of the VM. This DNS name can be constructed by concatenating the VM name with the value of internalDomainNameSuffix.
* **internalFqdn**: string (ReadOnly): Fully qualified DNS name supporting internal communications between VMs in the same virtual network.

## NetworkInterfaceIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [NetworkInterfaceIPConfigurationPropertiesFormat](#networkinterfaceipconfigurationpropertiesformat) (ReadOnly): Properties of IP configuration.

## NetworkInterfaceIPConfigurationPropertiesFormat
### Properties
* **applicationGatewayBackendAddressPools**: [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)[] (ReadOnly): The reference of ApplicationGatewayBackendAddressPool resource.
* **applicationSecurityGroups**: [ApplicationSecurityGroup](#applicationsecuritygroup)[] (ReadOnly): Application security groups in which the IP configuration is included.
* **loadBalancerBackendAddressPools**: [BackendAddressPool](#backendaddresspool)[] (ReadOnly): The reference of LoadBalancerBackendAddressPool resource.
* **loadBalancerInboundNatRules**: [InboundNatRule](#inboundnatrule)[] (ReadOnly): A list of references of LoadBalancerInboundNatRules.
* **primary**: bool (ReadOnly): Gets whether this is a primary customer address on the network interface.
* **privateIPAddress**: string (ReadOnly): Private IP address of the IP configuration.
* **privateIPAddressVersion**: 'IPv4' | 'IPv6' | string (ReadOnly): IP address version.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string (ReadOnly): IP address allocation method.
* **provisioningState**: string (ReadOnly): The provisioning state of the network interface IP configuration. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicIPAddress**: [PublicIPAddress](#publicipaddress) (ReadOnly): Public IP address resource.
* **subnet**: [Subnet](#subnet) (ReadOnly): Subnet in a virtual network resource.
* **virtualNetworkTaps**: [VirtualNetworkTap](#virtualnetworktap)[] (ReadOnly): The reference to Virtual Network Taps.

## NetworkInterfacePropertiesFormat
### Properties
* **dnsSettings**: [NetworkInterfaceDnsSettings](#networkinterfacednssettings) (ReadOnly): DNS settings of a network interface.
* **enableAcceleratedNetworking**: bool (ReadOnly): If the network interface is accelerated networking enabled.
* **enableIPForwarding**: bool (ReadOnly): Indicates whether IP forwarding is enabled on this network interface.
* **hostedWorkloads**: string[] (ReadOnly): A list of references to linked BareMetal resources
* **interfaceEndpoint**: [InterfaceEndpoint](#interfaceendpoint) (ReadOnly): Interface endpoint resource.
* **ipConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[] (ReadOnly): A list of IPConfigurations of the network interface.
* **macAddress**: string (ReadOnly): The MAC address of the network interface.
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup) (ReadOnly): NetworkSecurityGroup resource.
* **primary**: bool (ReadOnly): Gets whether this is a primary network interface on a virtual machine.
* **provisioningState**: string (ReadOnly): The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the network interface resource.
* **tapConfigurations**: [NetworkInterfaceTapConfiguration](#networkinterfacetapconfiguration)[] (ReadOnly): A list of TapConfigurations of the network interface.
* **virtualMachine**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.

## NetworkInterfaceTapConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [NetworkInterfaceTapConfigurationPropertiesFormat](#networkinterfacetapconfigurationpropertiesformat) (ReadOnly): Properties of Virtual Network Tap configuration.
* **type**: string (ReadOnly): Sub Resource type.

## NetworkInterfaceTapConfigurationPropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state of the network interface tap configuration. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **virtualNetworkTap**: [VirtualNetworkTap](#virtualnetworktap) (ReadOnly): Virtual Network Tap resource

## NetworkSecurityGroup
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **location**: string (ReadOnly): Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [NetworkSecurityGroupPropertiesFormat](#networksecuritygrouppropertiesformat) (ReadOnly): Network Security Group resource.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: string (ReadOnly): Resource type.

## NetworkSecurityGroupPropertiesFormat
### Properties
* **defaultSecurityRules**: [SecurityRule](#securityrule)[] (ReadOnly): The default security rules of network security group.
* **networkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly): A collection of references to network interfaces.
* **provisioningState**: string (ReadOnly): The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the network security group resource.
* **securityRules**: [SecurityRule](#securityrule)[] (ReadOnly): A collection of security rules of the network security group.
* **subnets**: [Subnet](#subnet)[] (ReadOnly): A collection of references to subnets.

## PublicIPAddress
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **location**: string (ReadOnly): Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat) (ReadOnly): Public IP address properties.
* **sku**: [PublicIPAddressSku](#publicipaddresssku) (ReadOnly): SKU of a public IP address
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: string (ReadOnly): Resource type.
* **zones**: string[] (ReadOnly): A list of availability zones denoting the IP allocated for the resource needs to come from.

## PublicIPAddressDnsSettings
### Properties
* **domainNameLabel**: string (ReadOnly): Gets or sets the Domain name label.The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
* **fqdn**: string (ReadOnly): Gets the FQDN, Fully qualified domain name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone.
* **reverseFqdn**: string (ReadOnly): Gets or Sets the Reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.

## PublicIPAddressPropertiesFormat
### Properties
* **ddosSettings**: [DdosSettings](#ddossettings) (ReadOnly): Contains the DDoS protection settings of the public IP.
* **dnsSettings**: [PublicIPAddressDnsSettings](#publicipaddressdnssettings) (ReadOnly): Contains FQDN of the DNS record associated with the public IP address
* **idleTimeoutInMinutes**: int (ReadOnly): The idle timeout of the public IP address.
* **ipAddress**: string (ReadOnly): The IP address associated with the public IP address resource.
* **ipConfiguration**: [IPConfiguration](#ipconfiguration) (ReadOnly): IP configuration
* **ipTags**: [IpTag](#iptag)[] (ReadOnly): The list of tags associated with the public IP address.
* **provisioningState**: string (ReadOnly): The provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **publicIPAddressVersion**: 'IPv4' | 'IPv6' | string (ReadOnly): IP address version.
* **publicIPAllocationMethod**: 'Dynamic' | 'Static' | string (ReadOnly): IP address allocation method.
* **publicIPPrefix**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the public IP resource.

## PublicIPAddressSku
### Properties
* **name**: 'Basic' | 'Standard' | string (ReadOnly): Name of a public IP address SKU.

## ResourceNavigationLink
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ResourceNavigationLinkFormat](#resourcenavigationlinkformat) (ReadOnly): Properties of ResourceNavigationLink.

## ResourceNavigationLinkFormat
### Properties
* **link**: string (ReadOnly): Link to the external resource
* **linkedResourceType**: string (ReadOnly): Resource type of the linked resource.
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
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [RoutePropertiesFormat](#routepropertiesformat) (ReadOnly): Route resource

## RoutePropertiesFormat
### Properties
* **addressPrefix**: string (ReadOnly): The destination CIDR to which the route applies.
* **nextHopIpAddress**: string (ReadOnly): The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
* **nextHopType**: 'Internet' | 'None' | 'VirtualAppliance' | 'VirtualNetworkGateway' | 'VnetLocal' | string (ReadOnly): The type of Azure hop the packet should be sent to.
* **provisioningState**: string (ReadOnly): The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

## RouteTable
### Properties
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **location**: string (ReadOnly): Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [RouteTablePropertiesFormat](#routetablepropertiesformat) (ReadOnly): Route Table resource
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: string (ReadOnly): Resource type.

## RouteTablePropertiesFormat
### Properties
* **disableBgpRoutePropagation**: bool (ReadOnly): Gets or sets whether to disable the routes learned by BGP on that route table. True means disable.
* **provisioningState**: string (ReadOnly): The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **routes**: [Route](#route)[] (ReadOnly): Collection of routes contained within a route table.
* **subnets**: [Subnet](#subnet)[] (ReadOnly): A collection of references to subnets.

## SecurityRule
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [SecurityRulePropertiesFormat](#securityrulepropertiesformat) (ReadOnly): Security rule resource.

## SecurityRulePropertiesFormat
### Properties
* **access**: 'Allow' | 'Deny' | string (ReadOnly): Whether network traffic is allowed or denied.
* **description**: string (ReadOnly): A description for this rule. Restricted to 140 chars.
* **destinationAddressPrefix**: string (ReadOnly): The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
* **destinationAddressPrefixes**: string[] (ReadOnly): The destination address prefixes. CIDR or destination IP ranges.
* **destinationApplicationSecurityGroups**: [ApplicationSecurityGroup](#applicationsecuritygroup)[] (ReadOnly): The application security group specified as destination.
* **destinationPortRange**: string (ReadOnly): The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
* **destinationPortRanges**: string[] (ReadOnly): The destination port ranges.
* **direction**: 'Inbound' | 'Outbound' | string (ReadOnly): The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
* **priority**: int (ReadOnly): The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
* **protocol**: '*' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' | string (ReadOnly): Network protocol this rule applies to. Possible values are 'Tcp', 'Udp', 'Icmp', 'Esp', and '*'.
* **provisioningState**: string (ReadOnly): The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **sourceAddressPrefix**: string (ReadOnly): The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
* **sourceAddressPrefixes**: string[] (ReadOnly): The CIDR or source IP ranges.
* **sourceApplicationSecurityGroups**: [ApplicationSecurityGroup](#applicationsecuritygroup)[] (ReadOnly): The application security group specified as source.
* **sourcePortRange**: string (ReadOnly): The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
* **sourcePortRanges**: string[] (ReadOnly): The source port ranges.

## ServiceAssociationLink
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ServiceAssociationLinkPropertiesFormat](#serviceassociationlinkpropertiesformat) (ReadOnly): Properties of ServiceAssociationLink.

## ServiceAssociationLinkPropertiesFormat
### Properties
* **link**: string (ReadOnly): Link to the external resource.
* **linkedResourceType**: string (ReadOnly): Resource type of the linked resource.
* **provisioningState**: string (ReadOnly): Provisioning state of the ServiceAssociationLink resource.

## ServiceDelegationPropertiesFormat
### Properties
* **actions**: string[] (ReadOnly): Describes the actions permitted to the service upon delegation
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.
* **serviceName**: string (ReadOnly): The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers)

## ServiceEndpointPolicy
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **location**: string (ReadOnly): Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [ServiceEndpointPolicyPropertiesFormat](#serviceendpointpolicypropertiesformat) (ReadOnly): Service Endpoint Policy resource.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: string (ReadOnly): Resource type.

## ServiceEndpointPolicyDefinition
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ServiceEndpointPolicyDefinitionPropertiesFormat](#serviceendpointpolicydefinitionpropertiesformat) (ReadOnly): Service Endpoint policy definition resource.

## ServiceEndpointPolicyDefinitionPropertiesFormat
### Properties
* **description**: string (ReadOnly): A description for this rule. Restricted to 140 chars.
* **provisioningState**: string (ReadOnly): The provisioning state of the service end point policy definition. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **service**: string (ReadOnly): Service endpoint name.
* **serviceResources**: string[] (ReadOnly): A list of service resources.

## ServiceEndpointPolicyPropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state of the service endpoint policy. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the service endpoint policy resource.
* **serviceEndpointPolicyDefinitions**: [ServiceEndpointPolicyDefinition](#serviceendpointpolicydefinition)[] (ReadOnly): A collection of service endpoint policy definitions of the service endpoint policy.
* **subnets**: [Subnet](#subnet)[] (ReadOnly): A collection of references to subnets.

## ServiceEndpointPropertiesFormat
### Properties
* **locations**: string[] (ReadOnly): A list of locations.
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.
* **service**: string (ReadOnly): The type of the endpoint service.

## Subnet
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [SubnetPropertiesFormat](#subnetpropertiesformat) (ReadOnly): Properties of the subnet.

## SubnetPropertiesFormat
### Properties
* **addressPrefix**: string (ReadOnly): The address prefix for the subnet.
* **addressPrefixes**: string[] (ReadOnly): List of  address prefixes for the subnet.
* **delegations**: [Delegation](#delegation)[] (ReadOnly): Gets an array of references to the delegations on the subnet.
* **interfaceEndpoints**: [InterfaceEndpoint](#interfaceendpoint)[] (ReadOnly): An array of references to interface endpoints
* **ipConfigurationProfiles**: [IPConfigurationProfile](#ipconfigurationprofile)[] (ReadOnly): Array of IP configuration profiles which reference this subnet.
* **ipConfigurations**: [IPConfiguration](#ipconfiguration)[] (ReadOnly): Gets an array of references to the network interface IP configurations using subnet.
* **natGateway**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup) (ReadOnly): NetworkSecurityGroup resource.
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.
* **purpose**: string (ReadOnly): A read-only string identifying the intention of use for this subnet based on delegations and other user-defined properties.
* **resourceNavigationLinks**: [ResourceNavigationLink](#resourcenavigationlink)[] (ReadOnly): Gets an array of references to the external resources using subnet.
* **routeTable**: [RouteTable](#routetable) (ReadOnly): Route table resource.
* **serviceAssociationLinks**: [ServiceAssociationLink](#serviceassociationlink)[] (ReadOnly): Gets an array of references to services injecting into this subnet.
* **serviceEndpointPolicies**: [ServiceEndpointPolicy](#serviceendpointpolicy)[] (ReadOnly): An array of service endpoint policies.
* **serviceEndpoints**: [ServiceEndpointPropertiesFormat](#serviceendpointpropertiesformat)[] (ReadOnly): An array of service endpoints.

## SubResource
### Properties
* **id**: string (ReadOnly): Resource ID.

## VirtualNetworkTap
### Properties
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **location**: string (ReadOnly): Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [VirtualNetworkTapPropertiesFormat](#virtualnetworktappropertiesformat) (ReadOnly): Virtual Network Tap properties.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: string (ReadOnly): Resource type.

## VirtualNetworkTapPropertiesFormat
### Properties
* **destinationLoadBalancerFrontEndIPConfiguration**: [FrontendIPConfiguration](#frontendipconfiguration) (ReadOnly): Frontend IP address of the load balancer.
* **destinationNetworkInterfaceIPConfiguration**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration) (ReadOnly): IPConfiguration in a network interface.
* **destinationPort**: int (ReadOnly): The VXLAN destination port that will receive the tapped traffic.
* **networkInterfaceTapConfigurations**: [NetworkInterfaceTapConfiguration](#networkinterfacetapconfiguration)[] (ReadOnly): Specifies the list of resource IDs for the network interface IP configuration that needs to be tapped.
* **provisioningState**: string (ReadOnly): The provisioning state of the virtual network tap. Possible values are: 'Updating', 'Deleting', and 'Failed'.
* **resourceGuid**: string (ReadOnly): The resourceGuid property of the virtual network tap.

