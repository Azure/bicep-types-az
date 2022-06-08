# microsoft.Compute @ 2016-03-30

## Resource microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces@2016-03-30 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-30' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat) (ReadOnly): NetworkInterface properties.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: 'microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces' (ReadOnly, DeployTimeConstant): The resource type

## ApplicationGatewayBackendAddress
### Properties
* **fqdn**: string (ReadOnly): Gets or sets the dns name
* **ipAddress**: string (ReadOnly): Gets or sets the ip address

## ApplicationGatewayBackendAddressPool
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly): Resource Id
* **name**: string (ReadOnly): Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [ApplicationGatewayBackendAddressPoolPropertiesFormat](#applicationgatewaybackendaddresspoolpropertiesformat) (ReadOnly): Properties of Backend Address Pool of application gateway

## ApplicationGatewayBackendAddressPoolPropertiesFormat
### Properties
* **backendAddresses**: [ApplicationGatewayBackendAddress](#applicationgatewaybackendaddress)[] (ReadOnly): Gets or sets the backend addresses
* **backendIPConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[] (ReadOnly): Gets collection of references to IPs defined in NICs
* **provisioningState**: string (ReadOnly): Gets or sets Provisioning state of the backend address pool resource Updating/Deleting/Failed

## BackendAddressPool
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly): Resource Id
* **name**: string (ReadOnly): Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [BackendAddressPoolPropertiesFormat](#backendaddresspoolpropertiesformat) (ReadOnly): Properties of BackendAddressPool

## BackendAddressPoolPropertiesFormat
### Properties
* **backendIPConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[] (ReadOnly): Gets collection of references to IPs defined in NICs
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly): Gets Load Balancing rules that use this Backend Address Pool
* **outboundNatRule**: [SubResource](#subresource) (ReadOnly)
* **provisioningState**: string (ReadOnly): Provisioning state of the PublicIP resource Updating/Deleting/Failed

## InboundNatRule
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly): Resource Id
* **name**: string (ReadOnly): Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [InboundNatRulePropertiesFormat](#inboundnatrulepropertiesformat) (ReadOnly): Properties of Inbound NAT rule

## InboundNatRulePropertiesFormat
### Properties
* **backendIPConfiguration**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration) (ReadOnly): IPConfiguration in a NetworkInterface
* **backendPort**: int (ReadOnly): Gets or sets a port used for internal connections on the endpoint. The localPort attribute maps the eternal port of the endpoint to an internal port on a role. This is useful in scenarios where a role must communicate to an internal component on a port that is different from the one that is exposed externally. If not specified, the value of localPort is the same as the port attribute. Set the value of localPort to '*' to automatically assign an unallocated port that is discoverable using the runtime API
* **enableFloatingIP**: bool (ReadOnly): Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn availability Group. This setting is required when using the SQL Always ON availability Groups in SQL server. This setting can't be changed after you create the endpoint
* **frontendIPConfiguration**: [SubResource](#subresource) (ReadOnly)
* **frontendPort**: int (ReadOnly): Gets or sets the port for the external endpoint. You can specify any port number you choose, but the port numbers specified for each role in the service must be unique. Possible values range between 1 and 65535, inclusive
* **idleTimeoutInMinutes**: int (ReadOnly): Gets or sets the timeout for the Tcp idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to Tcp
* **protocol**: 'Tcp' | 'Udp' | string (ReadOnly): Gets or sets the transport protocol for the external endpoint. Possible values are Udp or Tcp
* **provisioningState**: string (ReadOnly): Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed

## IPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly): Resource Id
* **name**: string (ReadOnly): Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [IPConfigurationPropertiesFormat](#ipconfigurationpropertiesformat) (ReadOnly): Properties of IPConfiguration

## IPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string (ReadOnly): Gets or sets the privateIPAddress of the IP Configuration
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string (ReadOnly): Gets or sets PrivateIP allocation method (Static/Dynamic)
* **provisioningState**: string (ReadOnly): Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **publicIPAddress**: [PublicIPAddress](#publicipaddress) (ReadOnly): PublicIPAddress resource
* **subnet**: [Subnet](#subnet) (ReadOnly): Subnet in a VirtualNetwork resource

## NetworkInterface
### Properties
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly): Resource Id
* **location**: string (ReadOnly): Resource location
* **name**: string (ReadOnly): Resource name
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat) (ReadOnly): NetworkInterface properties.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: string (ReadOnly): Resource type

## NetworkInterfaceDnsSettings
### Properties
* **appliedDnsServers**: string[] (ReadOnly): Gets or sets list of Applied DNS servers IP addresses
* **dnsServers**: string[] (ReadOnly): Gets or sets list of DNS servers IP addresses
* **internalDnsNameLabel**: string (ReadOnly): Gets or sets the Internal DNS name
* **internalDomainNameSuffix**: string (ReadOnly): Gets or sets internal domain name suffix of the NIC.
* **internalFqdn**: string (ReadOnly): Gets or sets the internal FQDN.

## NetworkInterfaceIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly): Resource Id
* **name**: string (ReadOnly): Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [NetworkInterfaceIPConfigurationPropertiesFormat](#networkinterfaceipconfigurationpropertiesformat) (ReadOnly): Properties of IPConfiguration

## NetworkInterfaceIPConfigurationPropertiesFormat
### Properties
* **applicationGatewayBackendAddressPools**: [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)[] (ReadOnly): Gets or sets the reference of ApplicationGatewayBackendAddressPool resource
* **loadBalancerBackendAddressPools**: [BackendAddressPool](#backendaddresspool)[] (ReadOnly): Gets or sets the reference of LoadBalancerBackendAddressPool resource
* **loadBalancerInboundNatRules**: [InboundNatRule](#inboundnatrule)[] (ReadOnly): Gets or sets list of references of LoadBalancerInboundNatRules
* **primary**: bool (ReadOnly): Gets whether this is a primary customer address on the NIC
* **privateIPAddress**: string (ReadOnly)
* **privateIPAddressVersion**: 'IPv4' | 'IPv6' | string (ReadOnly): Gets or sets PrivateIP address version (IPv4/IPv6)
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string (ReadOnly): Gets or sets PrivateIP allocation method (Static/Dynamic)
* **provisioningState**: string (ReadOnly)
* **publicIPAddress**: [PublicIPAddress](#publicipaddress) (ReadOnly): PublicIPAddress resource
* **subnet**: [Subnet](#subnet) (ReadOnly): Subnet in a VirtualNetwork resource

## NetworkInterfacePropertiesFormat
### Properties
* **dnsSettings**: [NetworkInterfaceDnsSettings](#networkinterfacednssettings) (ReadOnly): Dns Settings of a network interface
* **enableIPForwarding**: bool (ReadOnly): Gets or sets whether IPForwarding is enabled on the NIC
* **ipConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[] (ReadOnly): Gets or sets list of IPConfigurations of the NetworkInterface
* **macAddress**: string (ReadOnly): Gets the MAC Address of the network interface
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup) (ReadOnly): NetworkSecurityGroup resource
* **primary**: bool (ReadOnly): Gets whether this is a primary NIC on a virtual machine
* **provisioningState**: string (ReadOnly): Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **resourceGuid**: string (ReadOnly): Gets or sets resource GUID property of the network interface resource
* **virtualMachine**: [SubResource](#subresource) (ReadOnly)

## NetworkSecurityGroup
### Properties
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly): Resource Id
* **location**: string (ReadOnly): Resource location
* **name**: string (ReadOnly): Resource name
* **properties**: [NetworkSecurityGroupPropertiesFormat](#networksecuritygrouppropertiesformat) (ReadOnly): Network Security Group resource
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: string (ReadOnly): Resource type

## NetworkSecurityGroupPropertiesFormat
### Properties
* **defaultSecurityRules**: [SecurityRule](#securityrule)[] (ReadOnly): Gets or sets Default security rules of network security group
* **networkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly): Gets collection of references to Network Interfaces
* **provisioningState**: string (ReadOnly): Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **resourceGuid**: string (ReadOnly): Gets or sets resource GUID property of the network security group resource
* **securityRules**: [SecurityRule](#securityrule)[] (ReadOnly): Gets or sets Security rules of network security group
* **subnets**: [Subnet](#subnet)[] (ReadOnly): Gets collection of references to subnets

## PublicIPAddress
### Properties
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly): Resource Id
* **location**: string (ReadOnly): Resource location
* **name**: string (ReadOnly): Resource name
* **properties**: [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat) (ReadOnly): PublicIpAddress properties
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: string (ReadOnly): Resource type

## PublicIPAddressDnsSettings
### Properties
* **domainNameLabel**: string (ReadOnly): Gets or sets the Domain name label.The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
* **fqdn**: string (ReadOnly): Gets the FQDN, Fully qualified domain name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone.
* **reverseFqdn**: string (ReadOnly): Gets or Sets the Reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.

## PublicIPAddressPropertiesFormat
### Properties
* **dnsSettings**: [PublicIPAddressDnsSettings](#publicipaddressdnssettings) (ReadOnly): Contains FQDN of the DNS record associated with the public IP address
* **idleTimeoutInMinutes**: int (ReadOnly): Gets or sets the idle timeout of the public IP address
* **ipAddress**: string (ReadOnly)
* **ipConfiguration**: [IPConfiguration](#ipconfiguration) (ReadOnly): IPConfiguration
* **provisioningState**: string (ReadOnly): Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **publicIPAddressVersion**: 'IPv4' | 'IPv6' | string (ReadOnly): Gets or sets PrivateIP address version (IPv4/IPv6)
* **publicIPAllocationMethod**: 'Dynamic' | 'Static' | string (ReadOnly): Gets or sets PrivateIP allocation method (Static/Dynamic)
* **resourceGuid**: string (ReadOnly): Gets or sets resource GUID property of the PublicIP resource

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
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly): Resource Id
* **name**: string (ReadOnly): Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [RoutePropertiesFormat](#routepropertiesformat) (ReadOnly): Route resource

## RoutePropertiesFormat
### Properties
* **addressPrefix**: string (ReadOnly): Gets or sets the destination CIDR to which the route applies.
* **nextHopIpAddress**: string (ReadOnly): Gets or sets the IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
* **nextHopType**: 'Internet' | 'None' | 'VirtualAppliance' | 'VirtualNetworkGateway' | 'VnetLocal' | string (ReadOnly): Gets or sets the type of Azure hop the packet should be sent to.
* **provisioningState**: string (ReadOnly): Gets or sets Provisioning state of the resource Updating/Deleting/Failed

## RouteTable
### Properties
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly): Resource Id
* **location**: string (ReadOnly): Resource location
* **name**: string (ReadOnly): Resource name
* **properties**: [RouteTablePropertiesFormat](#routetablepropertiesformat) (ReadOnly): Route Table resource
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: string (ReadOnly): Resource type

## RouteTablePropertiesFormat
### Properties
* **provisioningState**: string (ReadOnly): Gets or sets Provisioning state of the resource Updating/Deleting/Failed
* **routes**: [Route](#route)[] (ReadOnly): Gets or sets Routes in a Route Table
* **subnets**: [Subnet](#subnet)[] (ReadOnly): Gets collection of references to subnets

## SecurityRule
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly): Resource Id
* **name**: string (ReadOnly): Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [SecurityRulePropertiesFormat](#securityrulepropertiesformat) (ReadOnly)

## SecurityRulePropertiesFormat
### Properties
* **access**: 'Allow' | 'Deny' | string (ReadOnly): Gets or sets network traffic is allowed or denied. Possible values are 'Allow' and 'Deny'
* **description**: string (ReadOnly): Gets or sets a description for this rule. Restricted to 140 chars.
* **destinationAddressPrefix**: string (ReadOnly): Gets or sets destination address prefix. CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
* **destinationPortRange**: string (ReadOnly): Gets or sets Destination Port or Range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
* **direction**: 'Inbound' | 'Outbound' | string (ReadOnly): Gets or sets the direction of the rule.InBound or Outbound. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
* **priority**: int (ReadOnly): Gets or sets the priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
* **protocol**: '*' | 'Tcp' | 'Udp' | string (ReadOnly): Gets or sets Network protocol this rule applies to. Can be Tcp, Udp or All(*).
* **provisioningState**: string (ReadOnly): Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **sourceAddressPrefix**: string (ReadOnly): Gets or sets source address prefix. CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
* **sourcePortRange**: string (ReadOnly): Gets or sets Source Port or Range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.

## Subnet
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly): Resource Id
* **name**: string (ReadOnly): Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [SubnetPropertiesFormat](#subnetpropertiesformat) (ReadOnly)

## SubnetPropertiesFormat
### Properties
* **addressPrefix**: string (ReadOnly): Gets or sets Address prefix for the subnet.
* **ipConfigurations**: [IPConfiguration](#ipconfiguration)[] (ReadOnly): Gets array of references to the network interface IP configurations using subnet
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup) (ReadOnly): NetworkSecurityGroup resource
* **provisioningState**: string (ReadOnly): Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **routeTable**: [RouteTable](#routetable) (ReadOnly): RouteTable resource

## SubResource
### Properties
* **id**: string (ReadOnly): Resource Id

