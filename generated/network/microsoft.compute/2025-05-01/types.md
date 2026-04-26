# microsoft.Compute @ 2025-05-01

## Resource microsoft.Compute/cloudServices/roleInstances/networkInterfaces@2025-05-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [CommonExtendedLocation](#commonextendedlocation) (ReadOnly): The extended location of the network interface.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CommonNetworkInterfacePropertiesFormat](#commonnetworkinterfacepropertiesformat) (ReadOnly): Properties of the network interface.
* **tags**: [CommonResourceTags](#commonresourcetags) (ReadOnly): Resource tags.
* **type**: 'microsoft.Compute/cloudServices/roleInstances/networkInterfaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource microsoft.Compute/cloudServices/roleInstances/networkInterfaces/ipconfigurations/publicipaddresses@2025-05-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [CommonExtendedLocation](#commonextendedlocation) (ReadOnly): The extended location of the public ip address.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CommonPublicIPAddressPropertiesFormat](#commonpublicipaddresspropertiesformat) (ReadOnly): Public IP address properties.
* **sku**: [CommonPublicIPAddressSku](#commonpublicipaddresssku) (ReadOnly): The public IP address SKU.
* **tags**: [CommonResourceTags](#commonresourcetags) (ReadOnly): Resource tags.
* **type**: 'microsoft.Compute/cloudServices/roleInstances/networkInterfaces/ipconfigurations/publicipaddresses' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[] (ReadOnly): A list of availability zones denoting the IP allocated for the resource needs to come from.

## CommonApplicationGatewayBackendAddress
### Properties
* **fqdn**: string: Fully qualified domain name (FQDN).
* **ipAddress**: string: IP address.

## CommonApplicationGatewayBackendAddressPool
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the backend address pool that is unique within an Application Gateway.
* **properties**: [CommonApplicationGatewayBackendAddressPoolPropertiesFormat](#commonapplicationgatewaybackendaddresspoolpropertiesformat): Properties of the application gateway backend address pool.
* **type**: string (ReadOnly): Type of the resource.

## CommonApplicationGatewayBackendAddressPoolPropertiesFormat
### Properties
* **backendAddresses**: [CommonApplicationGatewayBackendAddress](#commonapplicationgatewaybackendaddress)[]: Backend addresses.
* **backendIPConfigurations**: [CommonNetworkInterfaceIPConfiguration](#commonnetworkinterfaceipconfiguration)[] (ReadOnly): Collection of references to IPs defined in network interfaces.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the backend address pool resource.

## CommonApplicationGatewayIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the IP configuration that is unique within an Application Gateway.
* **properties**: [CommonApplicationGatewayIPConfigurationPropertiesFormat](#commonapplicationgatewayipconfigurationpropertiesformat): Properties of the application gateway IP configuration.
* **type**: string (ReadOnly): Type of the resource.

## CommonApplicationGatewayIPConfigurationPropertiesFormat
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the application gateway IP configuration resource.
* **subnet**: [CommonSubResource](#commonsubresource): Reference to the subnet resource. A subnet from where application gateway gets its private address.

## CommonApplicationSecurityGroup
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [CommonApplicationSecurityGroupPropertiesFormat](#commonapplicationsecuritygrouppropertiesformat): Properties of the application security group.
* **tags**: [CommonResourceTags](#commonresourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## CommonApplicationSecurityGroupPropertiesFormat
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the application security group resource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.

## CommonBackendAddressPool
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource.
* **properties**: [CommonBackendAddressPoolPropertiesFormat](#commonbackendaddresspoolpropertiesformat): Properties of load balancer backend address pool.
* **type**: string (ReadOnly): Resource type.

## CommonBackendAddressPoolPropertiesFormat
### Properties
* **backendIPConfigurations**: [CommonNetworkInterfaceIPConfiguration](#commonnetworkinterfaceipconfiguration)[] (ReadOnly): An array of references to IP addresses defined in network interfaces.
* **drainPeriodInSeconds**: int: Amount of seconds Load Balancer waits for before sending RESET to client and backend address.
* **inboundNatRules**: [CommonSubResource](#commonsubresource)[] (ReadOnly): An array of references to inbound NAT rules that use this backend address pool.
* **loadBalancerBackendAddresses**: [CommonLoadBalancerBackendAddress](#commonloadbalancerbackendaddress)[]: An array of backend addresses.
* **loadBalancingRules**: [CommonSubResource](#commonsubresource)[] (ReadOnly): An array of references to load balancing rules that use this backend address pool.
* **location**: string: The location of the backend address pool.
* **outboundRule**: [CommonSubResource](#commonsubresource) (ReadOnly): A reference to an outbound rule that uses this backend address pool.
* **outboundRules**: [CommonSubResource](#commonsubresource)[] (ReadOnly): An array of references to outbound rules that use this backend address pool.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the backend address pool resource.
* **syncMode**: 'Automatic' | 'Manual' | string: Backend address synchronous mode for the backend pool
* **tunnelInterfaces**: [CommonGatewayLoadBalancerTunnelInterface](#commongatewayloadbalancertunnelinterface)[]: An array of gateway load balancer tunnel interfaces.
* **virtualNetwork**: [CommonSubResource](#commonsubresource): A reference to a virtual network.

## CommonCustomDnsConfigPropertiesFormat
### Properties
* **fqdn**: string: Fqdn that resolves to private endpoint ip address.
* **ipAddresses**: string[]: A list of private ip addresses of the private endpoint.

## CommonDdosSettings
### Properties
* **ddosProtectionPlan**: [CommonSubResource](#commonsubresource): The DDoS protection plan associated with the public IP. Can only be set if ProtectionMode is Enabled
* **protectionMode**: 'Disabled' | 'Enabled' | 'VirtualNetworkInherited' | string: The DDoS protection mode of the public IP

## CommonDelegation
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a subnet. This name can be used to access the resource.
* **properties**: [CommonServiceDelegationPropertiesFormat](#commonservicedelegationpropertiesformat): Properties of the subnet.
* **type**: string: Resource type.

## CommonExtendedLocation
### Properties
* **name**: string: The name of the extended location.
* **type**: 'EdgeZone' | string: The type of the extended location.

## CommonFlowLog
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **identity**: [CommonManagedServiceIdentity](#commonmanagedserviceidentity): FlowLog resource Managed Identity
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [CommonFlowLogPropertiesFormat](#commonflowlogpropertiesformat): Properties of the flow log.
* **tags**: [CommonResourceTags](#commonresourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## CommonFlowLogFormatParameters
### Properties
* **type**: 'JSON' | string: The file type of flow log.
* **version**: int: The version (revision) of the flow log.

## CommonFlowLogPropertiesFormat
### Properties
* **enabled**: bool: Flag to enable/disable flow logging.
* **enabledFilteringCriteria**: string: Optional field to filter network traffic logs based on SrcIP, SrcPort, DstIP, DstPort, Protocol, Encryption, Direction and Action. If not specified, all network traffic will be logged.
* **flowAnalyticsConfiguration**: [CommonTrafficAnalyticsProperties](#commontrafficanalyticsproperties): Parameters that define the configuration of traffic analytics.
* **format**: [CommonFlowLogFormatParameters](#commonflowlogformatparameters): Parameters that define the flow log format.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the flow log.
* **recordTypes**: string: Optional field to filter network traffic logs based on flow states. Value of this field could be any comma separated combination string of letters B,C,E or D. B represents Begin, when a flow is created. C represents Continue for an ongoing flow generated at every five-minute interval. E represents End, when a flow is terminated. D represents Deny, when a flow is denied. If not specified, all network traffic will be logged.
* **retentionPolicy**: [CommonRetentionPolicyParameters](#commonretentionpolicyparameters): Parameters that define the retention policy for flow log.
* **storageId**: string (Required): ID of the storage account which is used to store the flow log.
* **targetResourceGuid**: string (ReadOnly): Guid of network security group to which flow log will be applied.
* **targetResourceId**: string (Required): ID of network security group to which flow log will be applied.

## CommonFrontendIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource.
* **properties**: [CommonFrontendIPConfigurationPropertiesFormat](#commonfrontendipconfigurationpropertiesformat): Properties of the load balancer probe.
* **type**: string (ReadOnly): Resource type.
* **zones**: string[]: A list of availability zones denoting the IP allocated for the resource needs to come from.

## CommonFrontendIPConfigurationPropertiesFormat
### Properties
* **gatewayLoadBalancer**: [CommonSubResource](#commonsubresource): The reference to gateway load balancer frontend IP.
* **inboundNatPools**: [CommonSubResource](#commonsubresource)[] (ReadOnly): An array of references to inbound pools that use this frontend IP.
* **inboundNatRules**: [CommonSubResource](#commonsubresource)[] (ReadOnly): An array of references to inbound rules that use this frontend IP.
* **loadBalancingRules**: [CommonSubResource](#commonsubresource)[] (ReadOnly): An array of references to load balancing rules that use this frontend IP.
* **outboundRules**: [CommonSubResource](#commonsubresource)[] (ReadOnly): An array of references to outbound rules that use this frontend IP.
* **privateIPAddress**: string: The private IP address of the IP configuration.
* **privateIPAddressVersion**: 'IPv4' | 'IPv6' | string: Whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: The Private IP allocation method.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the frontend IP configuration resource.
* **publicIPAddress**: [CommonPublicIPAddress](#commonpublicipaddress): The reference to the Public IP resource.
* **publicIPPrefix**: [CommonSubResource](#commonsubresource): The reference to the Public IP Prefix resource.
* **subnet**: [CommonSubnet](#commonsubnet): The reference to the subnet resource.

## CommonGatewayLoadBalancerTunnelInterface
### Properties
* **identifier**: int: Identifier of gateway load balancer tunnel interface.
* **port**: int: Port of gateway load balancer tunnel interface.
* **protocol**: 'Native' | 'None' | 'VXLAN' | string: Protocol of gateway load balancer tunnel interface.
* **type**: 'External' | 'Internal' | 'None' | string: Traffic type of gateway load balancer tunnel interface.

## CommonInboundNatRule
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource.
* **properties**: [CommonInboundNatRulePropertiesFormat](#commoninboundnatrulepropertiesformat): Properties of load balancer inbound NAT rule.
* **type**: string (ReadOnly): Resource type.

## CommonInboundNatRulePropertiesFormat
### Properties
* **backendAddressPool**: [CommonSubResource](#commonsubresource): A reference to backendAddressPool resource.
* **backendIPConfiguration**: [CommonNetworkInterfaceIPConfiguration](#commonnetworkinterfaceipconfiguration) (ReadOnly): A reference to a private IP address defined on a network interface of a VM. Traffic sent to the frontend port of each of the frontend IP configurations is forwarded to the backend IP.
* **backendPort**: int: The port used for the internal endpoint. Acceptable values range from 1 to 65535.
* **enableFloatingIP**: bool: Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
* **enableTcpReset**: bool: Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
* **frontendIPConfiguration**: [CommonSubResource](#commonsubresource): A reference to frontend IP addresses.
* **frontendPort**: int: The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
* **frontendPortRangeEnd**: int: The port range end for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeStart. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534.
* **frontendPortRangeStart**: int: The port range start for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeEnd. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534.
* **idleTimeoutInMinutes**: int: The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
* **protocol**: 'All' | 'Quic' | 'Tcp' | 'Udp' | string: The reference to the transport protocol used by the load balancing rule.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the inbound NAT rule resource.

## CommonIpamPoolPrefixAllocation
### Properties
* **allocatedAddressPrefixes**: string[] (ReadOnly): List of assigned IP address prefixes in the IpamPool of the associated resource.
* **numberOfIpAddresses**: string: Number of IP addresses to allocate.
* **pool**: [CommonIpamPoolPrefixAllocationPool](#commonipampoolprefixallocationpool)

## CommonIpamPoolPrefixAllocationPool
### Properties
* **id**: string: Resource id of the associated Azure IpamPool resource.

## CommonIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [CommonIPConfigurationPropertiesFormat](#commonipconfigurationpropertiesformat): Properties of the IP configuration.

## CommonIPConfigurationProfile
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource. This name can be used to access the resource.
* **properties**: [CommonIPConfigurationProfilePropertiesFormat](#commonipconfigurationprofilepropertiesformat): Properties of the IP configuration profile.
* **type**: string (ReadOnly): Sub Resource type.

## CommonIPConfigurationProfilePropertiesFormat
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the IP configuration profile resource.
* **subnet**: [CommonSubnet](#commonsubnet): The reference to the subnet resource to create a container network interface ip configuration.

## CommonIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string: The private IP address of the IP configuration.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: The private IP address allocation method.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the IP configuration resource.
* **publicIPAddress**: [CommonPublicIPAddress](#commonpublicipaddress): The reference to the public IP resource.
* **subnet**: [CommonSubnet](#commonsubnet): The reference to the subnet resource.

## CommonIpTag
### Properties
* **ipTagType**: string: The IP tag type. Example: FirstPartyUsage.
* **tag**: string: The value of the IP tag associated with the public IP. Example: SQL.

## CommonLoadBalancerBackendAddress
### Properties
* **name**: string: Name of the backend address.
* **properties**: [CommonLoadBalancerBackendAddressPropertiesFormat](#commonloadbalancerbackendaddresspropertiesformat): Properties of load balancer backend address pool.

## CommonLoadBalancerBackendAddressPropertiesFormat
### Properties
* **adminState**: 'Down' | 'None' | 'Up' | string: A list of administrative states which once set can override health probe so that Load Balancer will always forward new connections to backend, or deny new connections and reset existing connections.
* **inboundNatRulesPortMapping**: [CommonNatRulePortMapping](#commonnatruleportmapping)[] (ReadOnly): Collection of inbound NAT rule port mappings.
* **ipAddress**: string: IP Address belonging to the referenced virtual network.
* **loadBalancerFrontendIPConfiguration**: [CommonSubResource](#commonsubresource): Reference to the frontend ip address configuration defined in regional loadbalancer.
* **networkInterfaceIPConfiguration**: [CommonSubResource](#commonsubresource) (ReadOnly): Reference to IP address defined in network interfaces.
* **subnet**: [CommonSubResource](#commonsubresource): Reference to an existing subnet.
* **virtualNetwork**: [CommonSubResource](#commonsubresource): Reference to an existing virtual network.

## CommonManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant id of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.
* **userAssignedIdentities**: [CommonManagedServiceIdentityUserAssignedIdentities](#commonmanagedserviceidentityuserassignedidentities): The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## CommonManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities)

## CommonNatGateway
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [CommonNatGatewayPropertiesFormat](#commonnatgatewaypropertiesformat): Nat Gateway properties.
* **sku**: [CommonNatGatewaySku](#commonnatgatewaysku): The nat gateway SKU.
* **tags**: [CommonResourceTags](#commonresourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.
* **zones**: string[]: A list of availability zones denoting the zone in which Nat Gateway should be deployed.

## CommonNatGatewayPropertiesFormat
### Properties
* **idleTimeoutInMinutes**: int: The idle timeout of the nat gateway.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the NAT gateway resource.
* **publicIpAddresses**: [CommonSubResource](#commonsubresource)[]: An array of public ip addresses V4 associated with the nat gateway resource.
* **publicIpAddressesV6**: [CommonSubResource](#commonsubresource)[]: An array of public ip addresses V6 associated with the nat gateway resource.
* **publicIpPrefixes**: [CommonSubResource](#commonsubresource)[]: An array of public ip prefixes V4 associated with the nat gateway resource.
* **publicIpPrefixesV6**: [CommonSubResource](#commonsubresource)[]: An array of public ip prefixes V6 associated with the nat gateway resource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the NAT gateway resource.
* **serviceGateway**: [CommonSubResource](#commonsubresource): Reference to an existing service gateway.
* **sourceVirtualNetwork**: [CommonSubResource](#commonsubresource): A reference to the source virtual network using this nat gateway resource.
* **subnets**: [CommonSubResource](#commonsubresource)[] (ReadOnly): An array of references to the subnets using this nat gateway resource.

## CommonNatGatewaySku
### Properties
* **name**: 'Standard' | 'StandardV2' | string: Name of Nat Gateway SKU.

## CommonNatRulePortMapping
### Properties
* **backendPort**: int: Backend port.
* **frontendPort**: int: Frontend port.
* **inboundNatRuleName**: string: Name of inbound NAT rule.

## CommonNetworkInterface
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [CommonExtendedLocation](#commonextendedlocation): The extended location of the network interface.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [CommonNetworkInterfacePropertiesFormat](#commonnetworkinterfacepropertiesformat): Properties of the network interface.
* **tags**: [CommonResourceTags](#commonresourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## CommonNetworkInterfaceDnsSettings
### Properties
* **appliedDnsServers**: string[] (ReadOnly): If the VM that uses this NIC is part of an Availability Set, then this list will have the union of all DNS servers from all NICs that are part of the Availability Set. This property is what is configured on each of those VMs.
* **dnsServers**: string[]: List of DNS servers IP addresses. Use 'AzureProvidedDNS' to switch to azure provided DNS resolution. 'AzureProvidedDNS' value cannot be combined with other IPs, it must be the only value in dnsServers collection.
* **internalDnsNameLabel**: string: Relative DNS name for this NIC used for internal communications between VMs in the same virtual network.
* **internalDomainNameSuffix**: string (ReadOnly): Even if internalDnsNameLabel is not specified, a DNS entry is created for the primary NIC of the VM. This DNS name can be constructed by concatenating the VM name with the value of internalDomainNameSuffix.
* **internalFqdn**: string (ReadOnly): Fully qualified DNS name supporting internal communications between VMs in the same virtual network.

## CommonNetworkInterfaceIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource.
* **properties**: [CommonNetworkInterfaceIPConfigurationPropertiesFormat](#commonnetworkinterfaceipconfigurationpropertiesformat): Network interface IP configuration properties.
* **type**: string (ReadOnly): Resource type.

## CommonNetworkInterfaceIPConfigurationPrivateLinkConnectionProperties
### Properties
* **fqdns**: string[] (ReadOnly): List of FQDNs for current private link connection.
* **groupId**: string (ReadOnly): The group ID for current private link connection.
* **requiredMemberName**: string (ReadOnly): The required member name for current private link connection.

## CommonNetworkInterfaceIPConfigurationPropertiesFormat
### Properties
* **applicationGatewayBackendAddressPools**: [CommonApplicationGatewayBackendAddressPool](#commonapplicationgatewaybackendaddresspool)[]: The reference to ApplicationGatewayBackendAddressPool resource.
* **applicationSecurityGroups**: [CommonApplicationSecurityGroup](#commonapplicationsecuritygroup)[]: Application security groups in which the IP configuration is included.
* **gatewayLoadBalancer**: [CommonSubResource](#commonsubresource): The reference to gateway load balancer frontend IP.
* **loadBalancerBackendAddressPools**: [CommonBackendAddressPool](#commonbackendaddresspool)[]: The reference to LoadBalancerBackendAddressPool resource.
* **loadBalancerInboundNatRules**: [CommonInboundNatRule](#commoninboundnatrule)[]: A list of references of LoadBalancerInboundNatRules.
* **primary**: bool: Whether this is a primary customer address on the network interface.
* **privateIPAddress**: string: Private IP address of the IP configuration. It can be a single IP address or a CIDR block in the format <address>/<prefix-length>.
* **privateIPAddressPrefixLength**: int {minValue: 1, maxValue: 128}: The private IP address prefix length. If specified and the allocation method is dynamic, the service will allocate a CIDR block instead of a single IP address.
* **privateIPAddressVersion**: 'IPv4' | 'IPv6' | string: Whether the specific IP configuration is IPv4 or IPv6. Default is IPv4.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: The private IP address allocation method.
* **privateLinkConnectionProperties**: [CommonNetworkInterfaceIPConfigurationPrivateLinkConnectionProperties](#commonnetworkinterfaceipconfigurationprivatelinkconnectionproperties) (ReadOnly): PrivateLinkConnection properties for the network interface.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the network interface IP configuration.
* **publicIPAddress**: [CommonPublicIPAddress](#commonpublicipaddress): Public IP address bound to the IP configuration.
* **subnet**: [CommonSubnet](#commonsubnet): Subnet bound to the IP configuration.
* **virtualNetworkTaps**: [CommonVirtualNetworkTap](#commonvirtualnetworktap)[]: The reference to Virtual Network Taps.

## CommonNetworkInterfacePropertiesFormat
### Properties
* **auxiliaryMode**: 'AcceleratedConnections' | 'Floating' | 'MaxConnections' | 'None' | string: Auxiliary mode of Network Interface resource.
* **auxiliarySku**: 'A1' | 'A2' | 'A4' | 'A8' | 'None' | string: Auxiliary sku of Network Interface resource.
* **defaultOutboundConnectivityEnabled**: bool (ReadOnly): Whether default outbound connectivity for nic was configured or not.
* **disableTcpStateTracking**: bool: Indicates whether to disable tcp state tracking.
* **dnsSettings**: [CommonNetworkInterfaceDnsSettings](#commonnetworkinterfacednssettings): The DNS settings in network interface.
* **dscpConfiguration**: [CommonSubResource](#commonsubresource) (ReadOnly): A reference to the dscp configuration to which the network interface is linked.
* **enableAcceleratedNetworking**: bool: If the network interface is configured for accelerated networking. Not applicable to VM sizes which require accelerated networking.
* **enableIPForwarding**: bool: Indicates whether IP forwarding is enabled on this network interface.
* **hostedWorkloads**: string[] (ReadOnly): A list of references to linked BareMetal resources.
* **ipConfigurations**: [CommonNetworkInterfaceIPConfiguration](#commonnetworkinterfaceipconfiguration)[]: A list of IPConfigurations of the network interface.
* **macAddress**: string (ReadOnly): The MAC address of the network interface.
* **migrationPhase**: 'Abort' | 'Commit' | 'Committed' | 'None' | 'Prepare' | string: Migration phase of Network Interface resource.
* **networkSecurityGroup**: [CommonNetworkSecurityGroup](#commonnetworksecuritygroup): The reference to the NetworkSecurityGroup resource.
* **nicType**: 'Elastic' | 'Standard' | string: Type of Network Interface resource.
* **primary**: bool (ReadOnly): Whether this is a primary network interface on a virtual machine.
* **privateEndpoint**: [CommonPrivateEndpoint](#commonprivateendpoint) (ReadOnly): A reference to the private endpoint to which the network interface is linked.
* **privateLinkService**: [CommonPrivateLinkService](#commonprivatelinkservice): Privatelinkservice of the network interface resource.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the network interface resource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the network interface resource.
* **tapConfigurations**: [CommonNetworkInterfaceTapConfiguration](#commonnetworkinterfacetapconfiguration)[] (ReadOnly): A list of TapConfigurations of the network interface.
* **virtualMachine**: [CommonSubResource](#commonsubresource) (ReadOnly): The reference to a virtual machine.
* **vnetEncryptionSupported**: bool (ReadOnly): Whether the virtual machine this nic is attached to supports encryption.
* **workloadType**: string: WorkloadType of the NetworkInterface for BareMetal resources

## CommonNetworkInterfaceTapConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource.
* **properties**: [CommonNetworkInterfaceTapConfigurationPropertiesFormat](#commonnetworkinterfacetapconfigurationpropertiesformat): Properties of the Virtual Network Tap configuration.
* **type**: string (ReadOnly): Resource type.

## CommonNetworkInterfaceTapConfigurationPropertiesFormat
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the network interface tap configuration resource.
* **virtualNetworkTap**: [CommonVirtualNetworkTap](#commonvirtualnetworktap): The reference to the Virtual Network Tap resource.

## CommonNetworkSecurityGroup
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [CommonNetworkSecurityGroupPropertiesFormat](#commonnetworksecuritygrouppropertiesformat): Properties of the network security group.
* **tags**: [CommonResourceTags](#commonresourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## CommonNetworkSecurityGroupPropertiesFormat
### Properties
* **defaultSecurityRules**: [CommonSecurityRule](#commonsecurityrule)[] (ReadOnly): The default security rules of network security group.
* **flowLogs**: [CommonFlowLog](#commonflowlog)[] (ReadOnly): A collection of references to flow log resources.
* **flushConnection**: bool: When enabled, flows created from Network Security Group connections will be re-evaluated when rules are updates. Initial enablement will trigger re-evaluation.
* **networkInterfaces**: [CommonNetworkInterface](#commonnetworkinterface)[] (ReadOnly): A collection of references to network interfaces.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the network security group resource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the network security group resource.
* **securityRules**: [CommonSecurityRule](#commonsecurityrule)[]: A collection of security rules of the network security group.
* **subnets**: [CommonSubnet](#commonsubnet)[] (ReadOnly): A collection of references to subnets.

## CommonPrivateEndpoint
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [CommonExtendedLocation](#commonextendedlocation): The extended location of the load balancer.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [CommonPrivateEndpointProperties](#commonprivateendpointproperties): Properties of the private endpoint.
* **tags**: [CommonResourceTags](#commonresourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## CommonPrivateEndpointConnection
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource.
* **properties**: [CommonPrivateEndpointConnectionProperties](#commonprivateendpointconnectionproperties): Properties of the private end point connection.
* **type**: string (ReadOnly): Resource type.

## CommonPrivateEndpointConnectionProperties
### Properties
* **linkIdentifier**: string (ReadOnly): The consumer link id.
* **privateEndpoint**: [CommonPrivateEndpoint](#commonprivateendpoint) (ReadOnly): The resource of private end point.
* **privateEndpointLocation**: string (ReadOnly): The location of the private endpoint.
* **privateLinkServiceConnectionState**: [CommonPrivateLinkServiceConnectionState](#commonprivatelinkserviceconnectionstate): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## CommonPrivateEndpointIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **name**: string: The name of the resource that is unique within a resource group.
* **properties**: [CommonPrivateEndpointIPConfigurationProperties](#commonprivateendpointipconfigurationproperties): Properties of private endpoint IP configurations.
* **type**: string (ReadOnly): The resource type.

## CommonPrivateEndpointIPConfigurationProperties
### Properties
* **groupId**: string: The ID of a group obtained from the remote resource that this private endpoint should connect to.
* **memberName**: string: The member name of a group obtained from the remote resource that this private endpoint should connect to.
* **privateIPAddress**: string: A private ip address obtained from the private endpoint's subnet.

## CommonPrivateEndpointProperties
### Properties
* **applicationSecurityGroups**: [CommonApplicationSecurityGroup](#commonapplicationsecuritygroup)[]: Application security groups in which the private endpoint IP configuration is included.
* **customDnsConfigs**: [CommonCustomDnsConfigPropertiesFormat](#commoncustomdnsconfigpropertiesformat)[]: An array of custom dns configurations.
* **customNetworkInterfaceName**: string: The custom name of the network interface attached to the private endpoint.
* **ipConfigurations**: [CommonPrivateEndpointIPConfiguration](#commonprivateendpointipconfiguration)[]: A list of IP configurations of the private endpoint. This will be used to map to the First Party Service's endpoints.
* **ipVersionType**: 'DualStack' | 'IPv4' | 'IPv6' | string: Specifies the IP version type for the private IPs of the private endpoint. If not defined, this defaults to IPv4.
* **manualPrivateLinkServiceConnections**: [CommonPrivateLinkServiceConnection](#commonprivatelinkserviceconnection)[]: A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource.
* **networkInterfaces**: [CommonNetworkInterface](#commonnetworkinterface)[] (ReadOnly): An array of references to the network interfaces created for this private endpoint.
* **privateLinkServiceConnections**: [CommonPrivateLinkServiceConnection](#commonprivatelinkserviceconnection)[]: A grouping of information about the connection to the remote resource.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the private endpoint resource.
* **subnet**: [CommonSubnet](#commonsubnet): The ID of the subnet from which the private IP will be allocated.

## CommonPrivateLinkService
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [CommonExtendedLocation](#commonextendedlocation): The extended location of the load balancer.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [CommonPrivateLinkServiceProperties](#commonprivatelinkserviceproperties): Properties of the private link service.
* **tags**: [CommonResourceTags](#commonresourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## CommonPrivateLinkServiceConnection
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [CommonPrivateLinkServiceConnectionProperties](#commonprivatelinkserviceconnectionproperties): Properties of the private link service connection.
* **type**: string (ReadOnly): The resource type.

## CommonPrivateLinkServiceConnectionProperties
### Properties
* **groupIds**: string[]: The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to.
* **privateLinkServiceConnectionState**: [CommonPrivateLinkServiceConnectionState](#commonprivatelinkserviceconnectionstate): A collection of read-only information about the state of the connection to the remote resource.
* **privateLinkServiceId**: string: The resource id of private link service.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the private link service connection resource.
* **requestMessage**: string: A message passed to the owner of the remote resource with this connection request. Restricted to 140 chars.

## CommonPrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## CommonPrivateLinkServiceIpConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: The name of private link service ip configuration.
* **properties**: [CommonPrivateLinkServiceIpConfigurationProperties](#commonprivatelinkserviceipconfigurationproperties): Properties of the private link service ip configuration.
* **type**: string (ReadOnly): The resource type.

## CommonPrivateLinkServiceIpConfigurationProperties
### Properties
* **primary**: bool: Whether the ip configuration is primary or not.
* **privateIPAddress**: string: The private IP address of the IP configuration.
* **privateIPAddressVersion**: 'IPv4' | 'IPv6' | string: Whether the specific IP configuration is IPv4 or IPv6. Default is IPv4.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: The private IP address allocation method.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the private link service IP configuration resource.
* **subnet**: [CommonSubnet](#commonsubnet): The reference to the subnet resource.

## CommonPrivateLinkServiceProperties
### Properties
* **accessMode**: 'Default' | 'Restricted' | string: The access mode of the private link service.
* **alias**: string (ReadOnly): The alias of the private link service.
* **autoApproval**: [CommonPrivateLinkServicePropertiesAutoApproval](#commonprivatelinkservicepropertiesautoapproval): The auto-approval list of the private link service.
* **destinationIPAddress**: string: The destination IP address of the private link service.
* **enableProxyProtocol**: bool: Whether the private link service is enabled for proxy protocol or not.
* **fqdns**: string[]: The list of Fqdn.
* **ipConfigurations**: [CommonPrivateLinkServiceIpConfiguration](#commonprivatelinkserviceipconfiguration)[]: An array of private link service IP configurations.
* **loadBalancerFrontendIpConfigurations**: [CommonFrontendIPConfiguration](#commonfrontendipconfiguration)[]: An array of references to the load balancer IP configurations.
* **networkInterfaces**: [CommonNetworkInterface](#commonnetworkinterface)[] (ReadOnly): An array of references to the network interfaces created for this private link service.
* **privateEndpointConnections**: [CommonPrivateEndpointConnection](#commonprivateendpointconnection)[] (ReadOnly): An array of list about connections to the private endpoint.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the private link service resource.
* **visibility**: [CommonPrivateLinkServicePropertiesVisibility](#commonprivatelinkservicepropertiesvisibility): The visibility list of the private link service.

## CommonPrivateLinkServicePropertiesAutoApproval
### Properties
* **subscriptions**: string[]: The list of subscriptions.

## CommonPrivateLinkServicePropertiesVisibility
### Properties
* **subscriptions**: string[]: The list of subscriptions.

## CommonPublicIPAddress
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **extendedLocation**: [CommonExtendedLocation](#commonextendedlocation): The extended location of the public ip address.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [CommonPublicIPAddressPropertiesFormat](#commonpublicipaddresspropertiesformat): Public IP address properties.
* **sku**: [CommonPublicIPAddressSku](#commonpublicipaddresssku): The public IP address SKU.
* **tags**: [CommonResourceTags](#commonresourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.
* **zones**: string[]: A list of availability zones denoting the IP allocated for the resource needs to come from.

## CommonPublicIPAddressDnsSettings
### Properties
* **domainNameLabel**: string: The domain name label. The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
* **domainNameLabelScope**: 'NoReuse' | 'ResourceGroupReuse' | 'SubscriptionReuse' | 'TenantReuse': The domain name label scope. If a domain name label and a domain name label scope are specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system with a hashed value includes in FQDN.
* **fqdn**: string: The Fully Qualified Domain Name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone.
* **reverseFqdn**: string: The reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.

## CommonPublicIPAddressPropertiesFormat
### Properties
* **ddosSettings**: [CommonDdosSettings](#commonddossettings): The DDoS protection custom policy associated with the public IP address.
* **deleteOption**: 'Delete' | 'Detach' | string: Specify what happens to the public IP address when the VM using it is deleted
* **dnsSettings**: [CommonPublicIPAddressDnsSettings](#commonpublicipaddressdnssettings): The FQDN of the DNS record associated with the public IP address.
* **idleTimeoutInMinutes**: int: The idle timeout of the public IP address.
* **ipAddress**: string: The IP address associated with the public IP address resource.
* **ipConfiguration**: [CommonIPConfiguration](#commonipconfiguration) (ReadOnly): The IP configuration associated with the public IP address.
* **ipTags**: [CommonIpTag](#commoniptag)[]: The list of tags associated with the public IP address.
* **linkedPublicIPAddress**: [CommonPublicIPAddress](#commonpublicipaddress): The linked public IP address of the public IP address resource.
* **migrationPhase**: 'Abort' | 'Commit' | 'Committed' | 'None' | 'Prepare' | string: Migration phase of Public IP Address.
* **natGateway**: [CommonNatGateway](#commonnatgateway): The NatGateway for the Public IP address.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the public IP address resource.
* **publicIPAddressVersion**: 'IPv4' | 'IPv6' | string: The public IP address version.
* **publicIPAllocationMethod**: 'Dynamic' | 'Static' | string: The public IP address allocation method.
* **publicIPPrefix**: [CommonSubResource](#commonsubresource): The Public IP Prefix this Public IP Address should be allocated from.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the public IP address resource.
* **servicePublicIPAddress**: [CommonPublicIPAddress](#commonpublicipaddress): The service public IP address of the public IP address resource.

## CommonPublicIPAddressSku
### Properties
* **name**: 'Basic' | 'Standard' | 'StandardV2' | string: Name of a public IP address SKU.
* **tier**: 'Global' | 'Regional' | string: Tier of a public IP address SKU.

## CommonResourceNavigationLink
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [CommonResourceNavigationLinkFormat](#commonresourcenavigationlinkformat): Resource navigation link properties format.
* **type**: string (ReadOnly): Resource type.

## CommonResourceNavigationLinkFormat
### Properties
* **link**: string: Link to the external resource.
* **linkedResourceType**: string: Resource type of the linked resource.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource navigation link resource.

## CommonResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CommonResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CommonResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CommonResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CommonResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CommonResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CommonResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CommonResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CommonResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CommonResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CommonResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CommonResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CommonResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CommonRetentionPolicyParameters
### Properties
* **days**: int: Number of days to retain flow log records.
* **enabled**: bool: Flag to enable/disable retention.

## CommonRoute
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource.
* **properties**: [CommonRoutePropertiesFormat](#commonroutepropertiesformat): Properties of the route.
* **type**: string (ReadOnly): Resource type.

## CommonRoutePropertiesFormat
### Properties
* **addressPrefix**: string: The destination CIDR to which the route applies.
* **hasBgpOverride**: bool (ReadOnly): A value indicating whether this route overrides overlapping BGP routes regardless of LPM.
* **nextHopIpAddress**: string: The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
* **nextHopType**: 'Internet' | 'None' | 'VirtualAppliance' | 'VirtualNetworkGateway' | 'VnetLocal' | string (Required): The type of Azure hop the packet should be sent to.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the route resource.

## CommonRouteTable
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [CommonRouteTablePropertiesFormat](#commonroutetablepropertiesformat): Properties of the route table.
* **tags**: [CommonResourceTags](#commonresourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## CommonRouteTablePropertiesFormat
### Properties
* **disableBgpRoutePropagation**: bool: Whether to disable the routes learned by BGP on that route table. True means disable.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the route table resource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the route table.
* **routes**: [CommonRoute](#commonroute)[]: Collection of routes contained within a route table.
* **subnets**: [CommonSubnet](#commonsubnet)[] (ReadOnly): A collection of references to subnets.

## CommonSecurityRule
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource.
* **properties**: [CommonSecurityRulePropertiesFormat](#commonsecurityrulepropertiesformat): Properties of the security rule.
* **type**: string (ReadOnly): Resource type.

## CommonSecurityRulePropertiesFormat
### Properties
* **access**: 'Allow' | 'Deny' | string (Required): The network traffic is allowed or denied.
* **description**: string: A description for this rule. Restricted to 140 chars.
* **destinationAddressPrefix**: string: The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
* **destinationAddressPrefixes**: string[]: The destination address prefixes. CIDR or destination IP ranges.
* **destinationApplicationSecurityGroups**: [CommonApplicationSecurityGroup](#commonapplicationsecuritygroup)[]: The application security group specified as destination.
* **destinationPortRange**: string: The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
* **destinationPortRanges**: string[]: The destination port ranges.
* **direction**: 'Inbound' | 'Outbound' | string (Required): The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
* **priority**: int (Required): The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
* **protocol**: '*' | 'Ah' | 'Esp' | 'Icmp' | 'Tcp' | 'Udp' | string (Required): Network protocol this rule applies to.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the security rule resource.
* **sourceAddressPrefix**: string: The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
* **sourceAddressPrefixes**: string[]: The CIDR or source IP ranges.
* **sourceApplicationSecurityGroups**: [CommonApplicationSecurityGroup](#commonapplicationsecuritygroup)[]: The application security group specified as source.
* **sourcePortRange**: string: The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
* **sourcePortRanges**: string[]: The source port ranges.

## CommonServiceAssociationLink
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [CommonServiceAssociationLinkPropertiesFormat](#commonserviceassociationlinkpropertiesformat): Resource navigation link properties format.
* **type**: string (ReadOnly): Resource type.

## CommonServiceAssociationLinkPropertiesFormat
### Properties
* **allowDelete**: bool: If true, the resource can be deleted.
* **link**: string: Link to the external resource.
* **linkedResourceType**: string: Resource type of the linked resource.
* **locations**: string[]: A list of locations.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the service association link resource.

## CommonServiceDelegationPropertiesFormat
### Properties
* **actions**: string[] (ReadOnly): The actions permitted to the service upon delegation.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the service delegation resource.
* **serviceName**: string: The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers).

## CommonServiceEndpointPolicy
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **kind**: string (ReadOnly): Kind of service endpoint policy. This is metadata used for the Azure portal experience.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [CommonServiceEndpointPolicyPropertiesFormat](#commonserviceendpointpolicypropertiesformat): Properties of the service end point policy.
* **tags**: [CommonResourceTags](#commonresourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## CommonServiceEndpointPolicyDefinition
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource.
* **properties**: [CommonServiceEndpointPolicyDefinitionPropertiesFormat](#commonserviceendpointpolicydefinitionpropertiesformat): Properties of the service endpoint policy definition.
* **type**: string (ReadOnly): Resource type.

## CommonServiceEndpointPolicyDefinitionPropertiesFormat
### Properties
* **description**: string: A description for this rule. Restricted to 140 chars.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the service endpoint policy definition resource.
* **service**: string: Service endpoint name.
* **serviceResources**: string[]: A list of service resources.

## CommonServiceEndpointPolicyPropertiesFormat
### Properties
* **contextualServiceEndpointPolicies**: string[]: A collection of contextual service endpoint policy.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the service endpoint policy resource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the service endpoint policy resource.
* **serviceAlias**: string: The alias indicating if the policy belongs to a service
* **serviceEndpointPolicyDefinitions**: [CommonServiceEndpointPolicyDefinition](#commonserviceendpointpolicydefinition)[]: A collection of service endpoint policy definitions of the service endpoint policy.
* **subnets**: [CommonSubnet](#commonsubnet)[] (ReadOnly): A collection of references to subnets.

## CommonServiceEndpointPropertiesFormat
### Properties
* **locations**: string[]: A list of locations.
* **networkIdentifier**: [CommonSubResource](#commonsubresource): SubResource as network identifier.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the service endpoint resource.
* **service**: string: The type of the endpoint service.

## CommonSubnet
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **name**: string: Name of the resource.
* **properties**: [CommonSubnetPropertiesFormat](#commonsubnetpropertiesformat): Properties of the subnet.
* **type**: string (ReadOnly): Resource type.

## CommonSubnetPropertiesFormat
### Properties
* **addressPrefix**: string: The address prefix for the subnet.
* **addressPrefixes**: string[]: List of address prefixes for the subnet.
* **applicationGatewayIPConfigurations**: [CommonApplicationGatewayIPConfiguration](#commonapplicationgatewayipconfiguration)[]: Application gateway IP configurations of virtual network resource.
* **defaultOutboundAccess**: bool: Set this property to false to disable default outbound connectivity for all VMs in the subnet.
* **delegations**: [CommonDelegation](#commondelegation)[]: An array of references to the delegations on the subnet.
* **ipAllocations**: [CommonSubResource](#commonsubresource)[]: Array of IpAllocation which reference this subnet.
* **ipamPoolPrefixAllocations**: [CommonIpamPoolPrefixAllocation](#commonipampoolprefixallocation)[]: A list of IPAM Pools for allocating IP address prefixes.
* **ipConfigurationProfiles**: [CommonIPConfigurationProfile](#commonipconfigurationprofile)[] (ReadOnly): Array of IP configuration profiles which reference this subnet.
* **ipConfigurations**: [CommonIPConfiguration](#commonipconfiguration)[] (ReadOnly): An array of references to the network interface IP configurations using subnet.
* **natGateway**: [CommonSubResource](#commonsubresource): Nat gateway associated with this subnet.
* **networkSecurityGroup**: [CommonNetworkSecurityGroup](#commonnetworksecuritygroup): The reference to the NetworkSecurityGroup resource.
* **privateEndpointNetworkPolicies**: 'Disabled' | 'Enabled' | 'NetworkSecurityGroupEnabled' | 'RouteTableEnabled' | string: Enable or Disable apply network policies on private end point in the subnet.
* **privateEndpoints**: [CommonPrivateEndpoint](#commonprivateendpoint)[] (ReadOnly): An array of references to private endpoints.
* **privateLinkServiceNetworkPolicies**: 'Disabled' | 'Enabled' | string: Enable or Disable apply network policies on private link service in the subnet.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the subnet resource.
* **purpose**: string (ReadOnly): A read-only string identifying the intention of use for this subnet based on delegations and other user-defined properties.
* **resourceNavigationLinks**: [CommonResourceNavigationLink](#commonresourcenavigationlink)[] (ReadOnly): An array of references to the external resources using subnet.
* **routeTable**: [CommonRouteTable](#commonroutetable): The reference to the RouteTable resource.
* **serviceAssociationLinks**: [CommonServiceAssociationLink](#commonserviceassociationlink)[] (ReadOnly): An array of references to services injecting into this subnet.
* **serviceEndpointPolicies**: [CommonServiceEndpointPolicy](#commonserviceendpointpolicy)[]: An array of service endpoint policies.
* **serviceEndpoints**: [CommonServiceEndpointPropertiesFormat](#commonserviceendpointpropertiesformat)[]: An array of service endpoints.
* **serviceGateway**: [CommonSubResource](#commonsubresource): Reference to an existing service gateway.
* **sharingScope**: 'DelegatedServices' | 'Tenant' | string: Set this property to Tenant to allow sharing subnet with other subscriptions in your AAD tenant. This property can only be set if defaultOutboundAccess is set to false, both properties can only be set if subnet is empty.

## CommonSubResource
### Properties
* **id**: string: Resource ID.

## CommonTrafficAnalyticsConfigurationProperties
### Properties
* **enabled**: bool: Flag to enable/disable traffic analytics.
* **trafficAnalyticsInterval**: int: The interval in minutes which would decide how frequently TA service should do flow analytics.
* **workspaceId**: string: The resource guid of the attached workspace.
* **workspaceRegion**: string: The location of the attached workspace.
* **workspaceResourceId**: string: Resource Id of the attached workspace.

## CommonTrafficAnalyticsProperties
### Properties
* **networkWatcherFlowAnalyticsConfiguration**: [CommonTrafficAnalyticsConfigurationProperties](#commontrafficanalyticsconfigurationproperties): Parameters that define the configuration of traffic analytics.

## CommonVirtualNetworkTap
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string: Resource ID.
* **location**: string: Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [CommonVirtualNetworkTapPropertiesFormat](#commonvirtualnetworktappropertiesformat): Virtual Network Tap Properties.
* **tags**: [CommonResourceTags](#commonresourcetags): Resource tags.
* **type**: string (ReadOnly): Resource type.

## CommonVirtualNetworkTapPropertiesFormat
### Properties
* **destinationLoadBalancerFrontEndIPConfiguration**: [CommonFrontendIPConfiguration](#commonfrontendipconfiguration): The reference to the private IP address on the internal Load Balancer that will receive the tap.
* **destinationNetworkInterfaceIPConfiguration**: [CommonNetworkInterfaceIPConfiguration](#commonnetworkinterfaceipconfiguration): The reference to the private IP Address of the collector nic that will receive the tap.
* **destinationPort**: int: The VXLAN destination port that will receive the tapped traffic.
* **networkInterfaceTapConfigurations**: [CommonNetworkInterfaceTapConfiguration](#commonnetworkinterfacetapconfiguration)[] (ReadOnly): Specifies the list of resource IDs for the network interface IP configuration that needs to be tapped.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the virtual network tap resource.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the virtual network tap resource.

## ManagedServiceIdentityUserAssignedIdentities
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

