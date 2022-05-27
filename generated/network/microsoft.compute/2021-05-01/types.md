# Microsoft.Compute @ 2021-05-01

## Resource Microsoft.Compute/cloudServices/roleInstances/networkInterfaces@2021-05-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (ReadOnly): ExtendedLocation complex type.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat) (ReadOnly): NetworkInterface properties.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Compute/cloudServices/roleInstances/networkInterfaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/cloudServices/roleInstances/networkInterfaces/ipconfigurations/publicipaddresses@2021-05-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (ReadOnly): ExtendedLocation complex type.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat) (ReadOnly): Public IP address properties.
* **sku**: [PublicIPAddressSku](#publicipaddresssku) (ReadOnly): SKU of a public IP address.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Compute/cloudServices/roleInstances/networkInterfaces/ipconfigurations/publicipaddresses' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[] (ReadOnly): A list of availability zones denoting the IP allocated for the resource needs to come from.

## Resource microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces@2021-05-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (ReadOnly): ExtendedLocation complex type.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat) (ReadOnly): NetworkInterface properties.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipConfigurations@2021-05-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkInterfaceIPConfigurationPropertiesFormat](#networkinterfaceipconfigurationpropertiesformat) (ReadOnly): Properties of IP configuration.
* **type**: 'microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipconfigurations/publicipaddresses@2021-05-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (ReadOnly): ExtendedLocation complex type.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat) (ReadOnly): Public IP address properties.
* **sku**: [PublicIPAddressSku](#publicipaddresssku) (ReadOnly): SKU of a public IP address.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipconfigurations/publicipaddresses' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[] (ReadOnly): A list of availability zones denoting the IP allocated for the resource needs to come from.

## ExtendedLocation
### Properties
* **name**: string (ReadOnly): The name of the extended location.
* **type**: 'EdgeZone' | string (ReadOnly): The supported ExtendedLocation types. Currently only EdgeZone is supported in Microsoft.Network resources.

## NetworkInterfacePropertiesFormat
### Properties
* **dnsSettings**: [NetworkInterfaceDnsSettings](#networkinterfacednssettings) (ReadOnly): DNS settings of a network interface.
* **dscpConfiguration**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.
* **enableAcceleratedNetworking**: bool (ReadOnly): If the network interface is accelerated networking enabled.
* **enableIPForwarding**: bool (ReadOnly): Indicates whether IP forwarding is enabled on this network interface.
* **hostedWorkloads**: string[] (ReadOnly): A list of references to linked BareMetal resources.
* **ipConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[] (ReadOnly): A list of IPConfigurations of the network interface.
* **macAddress**: string (ReadOnly): The MAC address of the network interface.
* **migrationPhase**: 'Abort' | 'Commit' | 'Committed' | 'None' | 'Prepare' | string (ReadOnly): Migration phase of Network Interface resource.
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup) (ReadOnly): NetworkSecurityGroup resource.
* **nicType**: 'Elastic' | 'Standard' | string (ReadOnly): Type of Network Interface resource.
* **primary**: bool (ReadOnly): Whether this is a primary network interface on a virtual machine.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint) (ReadOnly): Private endpoint resource.
* **privateLinkService**: [PrivateLinkService](#privatelinkservice) (ReadOnly): Private link service resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the network interface resource.
* **tapConfigurations**: [NetworkInterfaceTapConfiguration](#networkinterfacetapconfiguration)[] (ReadOnly): A list of TapConfigurations of the network interface.
* **virtualMachine**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.
* **vnetEncryptionSupported**: bool (ReadOnly): Whether the virtual machine this nic is attached to supports encryption.
* **workloadType**: string (ReadOnly): WorkloadType of the NetworkInterface for BareMetal resources

## NetworkInterfaceDnsSettings
### Properties
* **appliedDnsServers**: string[] (ReadOnly): If the VM that uses this NIC is part of an Availability Set, then this list will have the union of all DNS servers from all NICs that are part of the Availability Set. This property is what is configured on each of those VMs.
* **dnsServers**: string[] (ReadOnly): List of DNS servers IP addresses. Use 'AzureProvidedDNS' to switch to azure provided DNS resolution. 'AzureProvidedDNS' value cannot be combined with other IPs, it must be the only value in dnsServers collection.
* **internalDnsNameLabel**: string (ReadOnly): Relative DNS name for this NIC used for internal communications between VMs in the same virtual network.
* **internalDomainNameSuffix**: string (ReadOnly): Even if internalDnsNameLabel is not specified, a DNS entry is created for the primary NIC of the VM. This DNS name can be constructed by concatenating the VM name with the value of internalDomainNameSuffix.
* **internalFqdn**: string (ReadOnly): Fully qualified DNS name supporting internal communications between VMs in the same virtual network.

## SubResource
### Properties
* **id**: string (ReadOnly): Resource ID.

## NetworkInterfaceIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [NetworkInterfaceIPConfigurationPropertiesFormat](#networkinterfaceipconfigurationpropertiesformat) (ReadOnly): Properties of IP configuration.
* **type**: string (ReadOnly): Resource type.

## NetworkInterfaceIPConfigurationPropertiesFormat
### Properties
* **applicationGatewayBackendAddressPools**: [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)[] (ReadOnly): The reference to ApplicationGatewayBackendAddressPool resource.
* **applicationSecurityGroups**: [ApplicationSecurityGroup](#applicationsecuritygroup)[] (ReadOnly): Application security groups in which the IP configuration is included.
* **gatewayLoadBalancer**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.
* **loadBalancerBackendAddressPools**: [BackendAddressPool](#backendaddresspool)[] (ReadOnly): The reference to LoadBalancerBackendAddressPool resource.
* **loadBalancerInboundNatRules**: [InboundNatRule](#inboundnatrule)[] (ReadOnly): A list of references of LoadBalancerInboundNatRules.
* **primary**: bool (ReadOnly): Whether this is a primary customer address on the network interface.
* **privateIPAddress**: string (ReadOnly): Private IP address of the IP configuration.
* **privateIPAddressVersion**: 'IPv4' | 'IPv6' | string (ReadOnly): IP address version.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string (ReadOnly): IP address allocation method.
* **privateLinkConnectionProperties**: [NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties](#networkinterfaceipconfigurationprivatelinkconnectionproperties) (ReadOnly): PrivateLinkConnection properties for the network interface.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **publicIPAddress**: [PublicIPAddress](#publicipaddress) (ReadOnly): Public IP address resource.
* **subnet**: [Subnet](#subnet) (ReadOnly): Subnet in a virtual network resource.
* **virtualNetworkTaps**: [VirtualNetworkTap](#virtualnetworktap)[] (ReadOnly): The reference to Virtual Network Taps.

## ApplicationGatewayBackendAddressPool
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): Name of the backend address pool that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayBackendAddressPoolPropertiesFormat](#applicationgatewaybackendaddresspoolpropertiesformat) (ReadOnly): Properties of Backend Address Pool of an application gateway.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayBackendAddressPoolPropertiesFormat
### Properties
* **backendAddresses**: [ApplicationGatewayBackendAddress](#applicationgatewaybackendaddress)[] (ReadOnly): Backend addresses.
* **backendIPConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[] (ReadOnly): Collection of references to IPs defined in network interfaces.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## ApplicationGatewayBackendAddress
### Properties
* **fqdn**: string (ReadOnly): Fully qualified domain name (FQDN).
* **ipAddress**: string (ReadOnly): IP address.

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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BackendAddressPool
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): The name of the resource that is unique within the set of backend address pools used by the load balancer. This name can be used to access the resource.
* **properties**: [BackendAddressPoolPropertiesFormat](#backendaddresspoolpropertiesformat) (ReadOnly): Properties of the backend address pool.
* **type**: string (ReadOnly): Type of the resource.

## BackendAddressPoolPropertiesFormat
### Properties
* **backendIPConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[] (ReadOnly): An array of references to IP addresses defined in network interfaces.
* **inboundNatRules**: [SubResource](#subresource)[] (ReadOnly): An array of references to inbound NAT rules that use this backend address pool.
* **loadBalancerBackendAddresses**: [LoadBalancerBackendAddress](#loadbalancerbackendaddress)[] (ReadOnly): An array of backend addresses.
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly): An array of references to load balancing rules that use this backend address pool.
* **location**: string (ReadOnly): The location of the backend address pool.
* **outboundRule**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.
* **outboundRules**: [SubResource](#subresource)[] (ReadOnly): An array of references to outbound rules that use this backend address pool.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **tunnelInterfaces**: [GatewayLoadBalancerTunnelInterface](#gatewayloadbalancertunnelinterface)[] (ReadOnly): An array of gateway load balancer tunnel interfaces.

## LoadBalancerBackendAddress
### Properties
* **name**: string (ReadOnly): Name of the backend address.
* **properties**: [LoadBalancerBackendAddressPropertiesFormat](#loadbalancerbackendaddresspropertiesformat) (ReadOnly): Properties of the load balancer backend addresses.

## LoadBalancerBackendAddressPropertiesFormat
### Properties
* **inboundNatRulesPortMapping**: [NatRulePortMapping](#natruleportmapping)[] (ReadOnly): Collection of inbound NAT rule port mappings.
* **ipAddress**: string (ReadOnly): IP Address belonging to the referenced virtual network.
* **loadBalancerFrontendIPConfiguration**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.
* **networkInterfaceIPConfiguration**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.
* **subnet**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.
* **virtualNetwork**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.

## NatRulePortMapping
### Properties
* **backendPort**: int (ReadOnly): Backend port.
* **frontendPort**: int (ReadOnly): Frontend port.
* **inboundNatRuleName**: string (ReadOnly): Name of inbound NAT rule.

## GatewayLoadBalancerTunnelInterface
### Properties
* **identifier**: int (ReadOnly): Identifier of gateway load balancer tunnel interface.
* **port**: int (ReadOnly): Port of gateway load balancer tunnel interface.
* **protocol**: 'Native' | 'None' | 'VXLAN' | string (ReadOnly): Protocol of gateway load balancer tunnel interface.
* **type**: 'External' | 'Internal' | 'None' | string (ReadOnly): Traffic type of gateway load balancer tunnel interface.

## InboundNatRule
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): The name of the resource that is unique within the set of inbound NAT rules used by the load balancer. This name can be used to access the resource.
* **properties**: [InboundNatRulePropertiesFormat](#inboundnatrulepropertiesformat) (ReadOnly): Properties of the inbound NAT rule.
* **type**: string (ReadOnly): Type of the resource.

## InboundNatRulePropertiesFormat
### Properties
* **backendAddressPool**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.
* **backendIPConfiguration**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration) (ReadOnly): IPConfiguration in a network interface.
* **backendPort**: int (ReadOnly): The port used for the internal endpoint. Acceptable values range from 1 to 65535.
* **enableFloatingIP**: bool (ReadOnly): Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
* **enableTcpReset**: bool (ReadOnly): Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
* **frontendIPConfiguration**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.
* **frontendPort**: int (ReadOnly): The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
* **frontendPortRangeEnd**: int (ReadOnly): The port range end for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeStart. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534.
* **frontendPortRangeStart**: int (ReadOnly): The port range start for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeEnd. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534.
* **idleTimeoutInMinutes**: int (ReadOnly): The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
* **protocol**: 'All' | 'Tcp' | 'Udp' | string (ReadOnly): The transport protocol for the endpoint.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties
### Properties
* **fqdns**: string[] (ReadOnly): List of FQDNs for current private link connection.
* **groupId**: string (ReadOnly): The group ID for current private link connection.
* **requiredMemberName**: string (ReadOnly): The required member name for current private link connection.

## PublicIPAddress
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (ReadOnly): ExtendedLocation complex type.
* **id**: string (ReadOnly): Resource ID.
* **location**: string (ReadOnly): Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat) (ReadOnly): Public IP address properties.
* **sku**: [PublicIPAddressSku](#publicipaddresssku) (ReadOnly): SKU of a public IP address.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: string (ReadOnly): Resource type.
* **zones**: string[] (ReadOnly): A list of availability zones denoting the IP allocated for the resource needs to come from.

## PublicIPAddressPropertiesFormat
### Properties
* **ddosSettings**: [DdosSettings](#ddossettings) (ReadOnly): Contains the DDoS protection settings of the public IP.
* **deleteOption**: 'Delete' | 'Detach' | string (ReadOnly): Specify what happens to the public IP address when the VM using it is deleted
* **dnsSettings**: [PublicIPAddressDnsSettings](#publicipaddressdnssettings) (ReadOnly): Contains FQDN of the DNS record associated with the public IP address.
* **idleTimeoutInMinutes**: int (ReadOnly): The idle timeout of the public IP address.
* **ipAddress**: string (ReadOnly): The IP address associated with the public IP address resource.
* **ipConfiguration**: [IPConfiguration](#ipconfiguration) (ReadOnly): IP configuration.
* **ipTags**: [IpTag](#iptag)[] (ReadOnly): The list of tags associated with the public IP address.
* **linkedPublicIPAddress**: [PublicIPAddress](#publicipaddress) (ReadOnly): Public IP address resource.
* **migrationPhase**: 'Abort' | 'Commit' | 'Committed' | 'None' | 'Prepare' | string (ReadOnly): Migration phase of Public IP Address.
* **natGateway**: [NatGateway](#natgateway) (ReadOnly): Nat Gateway resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **publicIPAddressVersion**: 'IPv4' | 'IPv6' | string (ReadOnly): IP address version.
* **publicIPAllocationMethod**: 'Dynamic' | 'Static' | string (ReadOnly): IP address allocation method.
* **publicIPPrefix**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the public IP address resource.
* **servicePublicIPAddress**: [PublicIPAddress](#publicipaddress) (ReadOnly): Public IP address resource.

## DdosSettings
### Properties
* **ddosCustomPolicy**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.
* **protectedIP**: bool (ReadOnly): Enables DDoS protection on the public IP.
* **protectionCoverage**: 'Basic' | 'Standard' | string (ReadOnly): The DDoS protection policy customizability of the public IP. Only standard coverage will have the ability to be customized.

## PublicIPAddressDnsSettings
### Properties
* **domainNameLabel**: string (ReadOnly): The domain name label. The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
* **fqdn**: string (ReadOnly): The Fully Qualified Domain Name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone.
* **reverseFqdn**: string (ReadOnly): The reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.

## IPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [IPConfigurationPropertiesFormat](#ipconfigurationpropertiesformat) (ReadOnly): Properties of IP configuration.

## IPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string (ReadOnly): The private IP address of the IP configuration.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string (ReadOnly): IP address allocation method.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **publicIPAddress**: [PublicIPAddress](#publicipaddress) (ReadOnly): Public IP address resource.
* **subnet**: [Subnet](#subnet) (ReadOnly): Subnet in a virtual network resource.

## Subnet
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [SubnetPropertiesFormat](#subnetpropertiesformat) (ReadOnly): Properties of the subnet.
* **type**: string (ReadOnly): Resource type.

## SubnetPropertiesFormat
### Properties
* **addressPrefix**: string (ReadOnly): The address prefix for the subnet.
* **addressPrefixes**: string[] (ReadOnly): List of address prefixes for the subnet.
* **applicationGatewayIpConfigurations**: [ApplicationGatewayIPConfiguration](#applicationgatewayipconfiguration)[] (ReadOnly): Application gateway IP configurations of virtual network resource.
* **delegations**: [Delegation](#delegation)[] (ReadOnly): An array of references to the delegations on the subnet.
* **ipAllocations**: [SubResource](#subresource)[] (ReadOnly): Array of IpAllocation which reference this subnet.
* **ipConfigurationProfiles**: [IPConfigurationProfile](#ipconfigurationprofile)[] (ReadOnly): Array of IP configuration profiles which reference this subnet.
* **ipConfigurations**: [IPConfiguration](#ipconfiguration)[] (ReadOnly): An array of references to the network interface IP configurations using subnet.
* **natGateway**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.
* **networkSecurityGroup**: [NetworkSecurityGroup](#networksecuritygroup) (ReadOnly): NetworkSecurityGroup resource.
* **privateEndpointNetworkPolicies**: 'Disabled' | 'Enabled' | string (ReadOnly): Enable or Disable apply network policies on private end point in the subnet.
* **privateEndpoints**: [PrivateEndpoint](#privateendpoint)[] (ReadOnly): An array of references to private endpoints.
* **privateLinkServiceNetworkPolicies**: 'Disabled' | 'Enabled' | string (ReadOnly): Enable or Disable apply network policies on private link service in the subnet.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **purpose**: string (ReadOnly): A read-only string identifying the intention of use for this subnet based on delegations and other user-defined properties.
* **resourceNavigationLinks**: [ResourceNavigationLink](#resourcenavigationlink)[] (ReadOnly): An array of references to the external resources using subnet.
* **routeTable**: [RouteTable](#routetable) (ReadOnly): Route table resource.
* **serviceAssociationLinks**: [ServiceAssociationLink](#serviceassociationlink)[] (ReadOnly): An array of references to services injecting into this subnet.
* **serviceEndpointPolicies**: [ServiceEndpointPolicy](#serviceendpointpolicy)[] (ReadOnly): An array of service endpoint policies.
* **serviceEndpoints**: [ServiceEndpointPropertiesFormat](#serviceendpointpropertiesformat)[] (ReadOnly): An array of service endpoints.

## ApplicationGatewayIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): Name of the IP configuration that is unique within an Application Gateway.
* **properties**: [ApplicationGatewayIPConfigurationPropertiesFormat](#applicationgatewayipconfigurationpropertiesformat) (ReadOnly): Properties of IP configuration of an application gateway.
* **type**: string (ReadOnly): Type of the resource.

## ApplicationGatewayIPConfigurationPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **subnet**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.

## Delegation
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): The name of the resource that is unique within a subnet. This name can be used to access the resource.
* **properties**: [ServiceDelegationPropertiesFormat](#servicedelegationpropertiesformat) (ReadOnly): Properties of a service delegation.
* **type**: string (ReadOnly): Resource type.

## ServiceDelegationPropertiesFormat
### Properties
* **actions**: string[] (ReadOnly): The actions permitted to the service upon delegation.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **serviceName**: string (ReadOnly): The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers).

## IPConfigurationProfile
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): The name of the resource. This name can be used to access the resource.
* **properties**: [IPConfigurationProfilePropertiesFormat](#ipconfigurationprofilepropertiesformat) (ReadOnly): IP configuration profile properties.
* **type**: string (ReadOnly): Sub Resource type.

## IPConfigurationProfilePropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **subnet**: [Subnet](#subnet) (ReadOnly): Subnet in a virtual network resource.

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
* **flowLogs**: [FlowLog](#flowlog)[] (ReadOnly): A collection of references to flow log resources.
* **networkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly): A collection of references to network interfaces.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the network security group resource.
* **securityRules**: [SecurityRule](#securityrule)[] (ReadOnly): A collection of security rules of the network security group.
* **subnets**: [Subnet](#subnet)[] (ReadOnly): A collection of references to subnets.

## SecurityRule
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [SecurityRulePropertiesFormat](#securityrulepropertiesformat) (ReadOnly): Security rule resource.
* **type**: string (ReadOnly): The type of the resource.

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
* **protocol**: '*' | 'Ah' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' | string (ReadOnly): Network protocol this rule applies to.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **sourceAddressPrefix**: string (ReadOnly): The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
* **sourceAddressPrefixes**: string[] (ReadOnly): The CIDR or source IP ranges.
* **sourceApplicationSecurityGroups**: [ApplicationSecurityGroup](#applicationsecuritygroup)[] (ReadOnly): The application security group specified as source.
* **sourcePortRange**: string (ReadOnly): The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
* **sourcePortRanges**: string[] (ReadOnly): The source port ranges.

## FlowLog
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **location**: string (ReadOnly): Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [FlowLogPropertiesFormat](#flowlogpropertiesformat) (ReadOnly): Parameters that define the configuration of flow log.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: string (ReadOnly): Resource type.

## FlowLogPropertiesFormat
### Properties
* **enabled**: bool (ReadOnly): Flag to enable/disable flow logging.
* **flowAnalyticsConfiguration**: [TrafficAnalyticsProperties](#trafficanalyticsproperties) (ReadOnly): Parameters that define the configuration of traffic analytics.
* **format**: [FlowLogFormatParameters](#flowlogformatparameters) (ReadOnly): Parameters that define the flow log format.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **retentionPolicy**: [RetentionPolicyParameters](#retentionpolicyparameters) (ReadOnly): Parameters that define the retention policy for flow log.
* **storageId**: string (ReadOnly): ID of the storage account which is used to store the flow log.
* **targetResourceGuid**: string (ReadOnly): Guid of network security group to which flow log will be applied.
* **targetResourceId**: string (ReadOnly): ID of network security group to which flow log will be applied.

## TrafficAnalyticsProperties
### Properties
* **networkWatcherFlowAnalyticsConfiguration**: [TrafficAnalyticsConfigurationProperties](#trafficanalyticsconfigurationproperties) (ReadOnly): Parameters that define the configuration of traffic analytics.

## TrafficAnalyticsConfigurationProperties
### Properties
* **enabled**: bool (ReadOnly): Flag to enable/disable traffic analytics.
* **trafficAnalyticsInterval**: int (ReadOnly): The interval in minutes which would decide how frequently TA service should do flow analytics.
* **workspaceId**: string (ReadOnly): The resource guid of the attached workspace.
* **workspaceRegion**: string (ReadOnly): The location of the attached workspace.
* **workspaceResourceId**: string (ReadOnly): Resource Id of the attached workspace.

## FlowLogFormatParameters
### Properties
* **type**: 'JSON' | string (ReadOnly): The file type of flow log.
* **version**: int (ReadOnly): The version (revision) of the flow log.

## RetentionPolicyParameters
### Properties
* **days**: int (ReadOnly): Number of days to retain flow log records.
* **enabled**: bool (ReadOnly): Flag to enable/disable retention.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NetworkInterface
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (ReadOnly): ExtendedLocation complex type.
* **id**: string (ReadOnly): Resource ID.
* **location**: string (ReadOnly): Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat) (ReadOnly): NetworkInterface properties.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: string (ReadOnly): Resource type.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateEndpoint
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (ReadOnly): ExtendedLocation complex type.
* **id**: string (ReadOnly): Resource ID.
* **location**: string (ReadOnly): Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [PrivateEndpointProperties](#privateendpointproperties) (ReadOnly): Properties of the private endpoint.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: string (ReadOnly): Resource type.

## PrivateEndpointProperties
### Properties
* **applicationSecurityGroups**: [ApplicationSecurityGroup](#applicationsecuritygroup)[] (ReadOnly): Application security groups in which the private endpoint IP configuration is included.
* **customDnsConfigs**: [CustomDnsConfigPropertiesFormat](#customdnsconfigpropertiesformat)[] (ReadOnly): An array of custom dns configurations.
* **customNetworkInterfaceName**: string (ReadOnly): The custom name of the network interface attached to the private endpoint.
* **ipConfigurations**: [PrivateEndpointIPConfiguration](#privateendpointipconfiguration)[] (ReadOnly): A list of IP configurations of the private endpoint. This will be used to map to the First Party Service's endpoints.
* **manualPrivateLinkServiceConnections**: [PrivateLinkServiceConnection](#privatelinkserviceconnection)[] (ReadOnly): A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource.
* **networkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly): An array of references to the network interfaces created for this private endpoint.
* **privateLinkServiceConnections**: [PrivateLinkServiceConnection](#privatelinkserviceconnection)[] (ReadOnly): A grouping of information about the connection to the remote resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **subnet**: [Subnet](#subnet) (ReadOnly): Subnet in a virtual network resource.

## CustomDnsConfigPropertiesFormat
### Properties
* **fqdn**: string (ReadOnly): Fqdn that resolves to private endpoint ip address.
* **ipAddresses**: string[] (ReadOnly): A list of private ip addresses of the private endpoint.

## PrivateEndpointIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **name**: string (ReadOnly): The name of the resource that is unique within a resource group.
* **properties**: [PrivateEndpointIPConfigurationProperties](#privateendpointipconfigurationproperties) (ReadOnly): Properties of an IP Configuration of the private endpoint.
* **type**: string (ReadOnly): The resource type.

## PrivateEndpointIPConfigurationProperties
### Properties
* **groupId**: string (ReadOnly): The ID of a group obtained from the remote resource that this private endpoint should connect to.
* **memberName**: string (ReadOnly): The member name of a group obtained from the remote resource that this private endpoint should connect to.
* **privateIPAddress**: string (ReadOnly): A private ip address obtained from the private endpoint's subnet.

## PrivateLinkServiceConnection
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [PrivateLinkServiceConnectionProperties](#privatelinkserviceconnectionproperties) (ReadOnly): Properties of the PrivateLinkServiceConnection.
* **type**: string (ReadOnly): The resource type.

## PrivateLinkServiceConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (ReadOnly): A collection of information about the state of the connection between service consumer and provider.
* **privateLinkServiceId**: string (ReadOnly): The resource id of private link service.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **requestMessage**: string (ReadOnly): A message passed to the owner of the remote resource with this connection request. Restricted to 140 chars.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string (ReadOnly): A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string (ReadOnly): The reason for approval/rejection of the connection.
* **status**: string (ReadOnly): Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceNavigationLink
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ResourceNavigationLinkFormat](#resourcenavigationlinkformat) (ReadOnly): Properties of ResourceNavigationLink.
* **type**: string (ReadOnly): Resource type.

## ResourceNavigationLinkFormat
### Properties
* **link**: string (ReadOnly): Link to the external resource.
* **linkedResourceType**: string (ReadOnly): Resource type of the linked resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## RouteTable
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **location**: string (ReadOnly): Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [RouteTablePropertiesFormat](#routetablepropertiesformat) (ReadOnly): Route Table resource.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: string (ReadOnly): Resource type.

## RouteTablePropertiesFormat
### Properties
* **disableBgpRoutePropagation**: bool (ReadOnly): Whether to disable the routes learned by BGP on that route table. True means disable.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the route table.
* **routes**: [Route](#route)[] (ReadOnly): Collection of routes contained within a route table.
* **subnets**: [Subnet](#subnet)[] (ReadOnly): A collection of references to subnets.

## Route
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [RoutePropertiesFormat](#routepropertiesformat) (ReadOnly): Route resource.
* **type**: string (ReadOnly): The type of the resource.

## RoutePropertiesFormat
### Properties
* **addressPrefix**: string (ReadOnly): The destination CIDR to which the route applies.
* **hasBgpOverride**: bool (ReadOnly): A value indicating whether this route overrides overlapping BGP routes regardless of LPM.
* **nextHopIpAddress**: string (ReadOnly): The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
* **nextHopType**: 'Internet' | 'None' | 'VirtualAppliance' | 'VirtualNetworkGateway' | 'VnetLocal' | string (ReadOnly): The type of Azure hop the packet should be sent to.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceAssociationLink
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ServiceAssociationLinkPropertiesFormat](#serviceassociationlinkpropertiesformat) (ReadOnly): Properties of ServiceAssociationLink.
* **type**: string (ReadOnly): Resource type.

## ServiceAssociationLinkPropertiesFormat
### Properties
* **allowDelete**: bool (ReadOnly): If true, the resource can be deleted.
* **link**: string (ReadOnly): Link to the external resource.
* **linkedResourceType**: string (ReadOnly): Resource type of the linked resource.
* **locations**: string[] (ReadOnly): A list of locations.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## ServiceEndpointPolicy
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **kind**: string (ReadOnly): Kind of service endpoint policy. This is metadata used for the Azure portal experience.
* **location**: string (ReadOnly): Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [ServiceEndpointPolicyPropertiesFormat](#serviceendpointpolicypropertiesformat) (ReadOnly): Service Endpoint Policy resource.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: string (ReadOnly): Resource type.

## ServiceEndpointPolicyPropertiesFormat
### Properties
* **contextualServiceEndpointPolicies**: string[] (ReadOnly): A collection of contextual service endpoint policy.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the service endpoint policy resource.
* **serviceAlias**: string (ReadOnly): The alias indicating if the policy belongs to a service
* **serviceEndpointPolicyDefinitions**: [ServiceEndpointPolicyDefinition](#serviceendpointpolicydefinition)[] (ReadOnly): A collection of service endpoint policy definitions of the service endpoint policy.
* **subnets**: [Subnet](#subnet)[] (ReadOnly): A collection of references to subnets.

## ServiceEndpointPolicyDefinition
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [ServiceEndpointPolicyDefinitionPropertiesFormat](#serviceendpointpolicydefinitionpropertiesformat) (ReadOnly): Service Endpoint policy definition resource.
* **type**: string (ReadOnly): The type of the resource.

## ServiceEndpointPolicyDefinitionPropertiesFormat
### Properties
* **description**: string (ReadOnly): A description for this rule. Restricted to 140 chars.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **service**: string (ReadOnly): Service endpoint name.
* **serviceResources**: string[] (ReadOnly): A list of service resources.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceEndpointPropertiesFormat
### Properties
* **locations**: string[] (ReadOnly): A list of locations.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **service**: string (ReadOnly): The type of the endpoint service.

## IpTag
### Properties
* **ipTagType**: string (ReadOnly): The IP tag type. Example: FirstPartyUsage.
* **tag**: string (ReadOnly): The value of the IP tag associated with the public IP. Example: SQL.

## NatGateway
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **location**: string (ReadOnly): Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [NatGatewayPropertiesFormat](#natgatewaypropertiesformat) (ReadOnly): Nat Gateway properties.
* **sku**: [NatGatewaySku](#natgatewaysku) (ReadOnly): SKU of nat gateway.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: string (ReadOnly): Resource type.
* **zones**: string[] (ReadOnly): A list of availability zones denoting the zone in which Nat Gateway should be deployed.

## NatGatewayPropertiesFormat
### Properties
* **idleTimeoutInMinutes**: int (ReadOnly): The idle timeout of the nat gateway.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **publicIpAddresses**: [SubResource](#subresource)[] (ReadOnly): An array of public ip addresses associated with the nat gateway resource.
* **publicIpPrefixes**: [SubResource](#subresource)[] (ReadOnly): An array of public ip prefixes associated with the nat gateway resource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the NAT gateway resource.
* **subnets**: [SubResource](#subresource)[] (ReadOnly): An array of references to the subnets using this nat gateway resource.

## NatGatewaySku
### Properties
* **name**: 'Standard' | string (ReadOnly): Name of Nat Gateway SKU.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PublicIPAddressSku
### Properties
* **name**: 'Basic' | 'Standard' | string (ReadOnly): Name of a public IP address SKU.
* **tier**: 'Global' | 'Regional' | string (ReadOnly): Tier of a public IP address SKU.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualNetworkTap
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
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
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the virtual network tap resource.

## FrontendIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): The name of the resource that is unique within the set of frontend IP configurations used by the load balancer. This name can be used to access the resource.
* **properties**: [FrontendIPConfigurationPropertiesFormat](#frontendipconfigurationpropertiesformat) (ReadOnly): Properties of Frontend IP Configuration of the load balancer.
* **type**: string (ReadOnly): Type of the resource.
* **zones**: string[] (ReadOnly): A list of availability zones denoting the IP allocated for the resource needs to come from.

## FrontendIPConfigurationPropertiesFormat
### Properties
* **gatewayLoadBalancer**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.
* **inboundNatPools**: [SubResource](#subresource)[] (ReadOnly): An array of references to inbound pools that use this frontend IP.
* **inboundNatRules**: [SubResource](#subresource)[] (ReadOnly): An array of references to inbound rules that use this frontend IP.
* **loadBalancingRules**: [SubResource](#subresource)[] (ReadOnly): An array of references to load balancing rules that use this frontend IP.
* **outboundRules**: [SubResource](#subresource)[] (ReadOnly): An array of references to outbound rules that use this frontend IP.
* **privateIPAddress**: string (ReadOnly): The private IP address of the IP configuration.
* **privateIPAddressVersion**: 'IPv4' | 'IPv6' | string (ReadOnly): IP address version.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string (ReadOnly): IP address allocation method.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **publicIPAddress**: [PublicIPAddress](#publicipaddress) (ReadOnly): Public IP address resource.
* **publicIPPrefix**: [SubResource](#subresource) (ReadOnly): Reference to another subresource.
* **subnet**: [Subnet](#subnet) (ReadOnly): Subnet in a virtual network resource.

## NetworkInterfaceTapConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [NetworkInterfaceTapConfigurationPropertiesFormat](#networkinterfacetapconfigurationpropertiesformat) (ReadOnly): Properties of Virtual Network Tap configuration.
* **type**: string (ReadOnly): Sub Resource type.

## NetworkInterfaceTapConfigurationPropertiesFormat
### Properties
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **virtualNetworkTap**: [VirtualNetworkTap](#virtualnetworktap) (ReadOnly): Virtual Network Tap resource.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateLinkService
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (ReadOnly): ExtendedLocation complex type.
* **id**: string (ReadOnly): Resource ID.
* **location**: string (ReadOnly): Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [PrivateLinkServiceProperties](#privatelinkserviceproperties) (ReadOnly): Properties of the private link service.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: string (ReadOnly): Resource type.

## PrivateLinkServiceProperties
### Properties
* **alias**: string (ReadOnly): The alias of the private link service.
* **autoApproval**: [PrivateLinkServicePropertiesAutoApproval](#privatelinkservicepropertiesautoapproval) (ReadOnly): The auto-approval list of the private link service.
* **enableProxyProtocol**: bool (ReadOnly): Whether the private link service is enabled for proxy protocol or not.
* **fqdns**: string[] (ReadOnly): The list of Fqdn.
* **ipConfigurations**: [PrivateLinkServiceIpConfiguration](#privatelinkserviceipconfiguration)[] (ReadOnly): An array of private link service IP configurations.
* **loadBalancerFrontendIpConfigurations**: [FrontendIPConfiguration](#frontendipconfiguration)[] (ReadOnly): An array of references to the load balancer IP configurations.
* **networkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly): An array of references to the network interfaces created for this private link service.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): An array of list about connections to the private endpoint.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **visibility**: [PrivateLinkServicePropertiesVisibility](#privatelinkservicepropertiesvisibility) (ReadOnly): The visibility list of the private link service.

## PrivateLinkServicePropertiesAutoApproval
### Properties
* **subscriptions**: string[] (ReadOnly): The list of subscriptions.

## PrivateLinkServiceIpConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): The name of private link service ip configuration.
* **properties**: [PrivateLinkServiceIpConfigurationProperties](#privatelinkserviceipconfigurationproperties) (ReadOnly): Properties of private link service IP configuration.
* **type**: string (ReadOnly): The resource type.

## PrivateLinkServiceIpConfigurationProperties
### Properties
* **primary**: bool (ReadOnly): Whether the ip configuration is primary or not.
* **privateIPAddress**: string (ReadOnly): The private IP address of the IP configuration.
* **privateIPAddressVersion**: 'IPv4' | 'IPv6' | string (ReadOnly): IP address version.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string (ReadOnly): IP address allocation method.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **subnet**: [Subnet](#subnet) (ReadOnly): Subnet in a virtual network resource.

## PrivateEndpointConnection
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (ReadOnly): Properties of the PrivateEndpointConnectProperties.
* **type**: string (ReadOnly): The resource type.

## PrivateEndpointConnectionProperties
### Properties
* **linkIdentifier**: string (ReadOnly): The consumer link id.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint) (ReadOnly): Private endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (ReadOnly): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.

## PrivateLinkServicePropertiesVisibility
### Properties
* **subscriptions**: string[] (ReadOnly): The list of subscriptions.

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

