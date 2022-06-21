# microsoft.Compute @ 2016-06-01

## Resource microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces@2016-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat) (ReadOnly): NetworkInterface properties.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: 'microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces' (ReadOnly, DeployTimeConstant): The resource type

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

