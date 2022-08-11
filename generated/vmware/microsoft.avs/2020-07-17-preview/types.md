# Microsoft.AVS @ 2020-07-17-preview

## Resource Microsoft.AVS/privateClouds@2020-07-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateCloudProperties](#privatecloudproperties): The properties of a private cloud resource
* **sku**: [Sku](#sku) (Required): The private cloud SKU
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.AVS/privateClouds' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/addons@2020-07-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AddonProperties](#addonproperties): The properties of an addon resource
* **type**: 'Microsoft.AVS/privateClouds/addons' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/authorizations@2020-07-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteAuthorizationProperties](#expressrouteauthorizationproperties) (ReadOnly): The properties of an ExpressRoute Circuit Authorization resource
* **type**: 'Microsoft.AVS/privateClouds/authorizations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/clusters@2020-07-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): The properties of a cluster resource
* **sku**: [Sku](#sku) (Required): The cluster SKU
* **type**: 'Microsoft.AVS/privateClouds/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/globalReachConnections@2020-07-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GlobalReachConnectionProperties](#globalreachconnectionproperties): The properties of a global reach connection resource
* **type**: 'Microsoft.AVS/privateClouds/globalReachConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/hcxEnterpriseSites@2020-07-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HcxEnterpriseSiteProperties](#hcxenterprisesiteproperties) (ReadOnly): The properties of an HCX Enterprise Site resource
* **type**: 'Microsoft.AVS/privateClouds/hcxEnterpriseSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/workloadNetworks/dhcpConfigurations@2020-07-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadNetworkDhcpEntity](#workloadnetworkdhcpentity): DHCP properties.
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/dhcpConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/workloadNetworks/dnsServices@2020-07-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadNetworkDnsServiceProperties](#workloadnetworkdnsserviceproperties): DNS Service properties
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/dnsServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/workloadNetworks/dnsZones@2020-07-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadNetworkDnsZoneProperties](#workloadnetworkdnszoneproperties): DNS Zone properties
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/dnsZones' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/workloadNetworks/gateways@2020-07-17-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadNetworkGatewayProperties](#workloadnetworkgatewayproperties) (ReadOnly): Gateway properties.
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/workloadNetworks/portMirroringProfiles@2020-07-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadNetworkPortMirroringProperties](#workloadnetworkportmirroringproperties): Port Mirroring Properties.
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/portMirroringProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/workloadNetworks/segments@2020-07-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadNetworkSegmentProperties](#workloadnetworksegmentproperties): The properties of a Workload Segment proxy resource.
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/segments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/workloadNetworks/virtualMachines@2020-07-17-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadNetworkVirtualMachineProperties](#workloadnetworkvirtualmachineproperties) (ReadOnly): Virtual machine properties.
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/virtualMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/workloadNetworks/vmGroups@2020-07-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadNetworkVMGroupProperties](#workloadnetworkvmgroupproperties): VM Group properties.
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/vmGroups' (ReadOnly, DeployTimeConstant): The resource type

## Function listAdminCredentials (Microsoft.AVS/privateClouds@2020-07-17-preview)
* **Resource**: Microsoft.AVS/privateClouds
* **ApiVersion**: 2020-07-17-preview
* **Output**: [AdminCredentials](#admincredentials)

## AddonProperties
### Properties
* **addonType**: 'SRM' | 'VR' | string: The type of private cloud addon
* **licenseKey**: string: The SRM license
* **provisioningState**: 'Cancelled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The state of the addon provisioning

## AdminCredentials
### Properties
* **nsxtPassword**: string (ReadOnly): NSX-T Manager password
* **nsxtUsername**: string (ReadOnly): NSX-T Manager username
* **vcenterPassword**: string (ReadOnly): vCenter admin password
* **vcenterUsername**: string (ReadOnly): vCenter admin username

## Circuit
### Properties
* **expressRouteID**: string (ReadOnly): Identifier of the ExpressRoute Circuit (Microsoft Colo only)
* **expressRoutePrivatePeeringID**: string (ReadOnly): ExpressRoute Circuit private peering identifier
* **primarySubnet**: string (ReadOnly): CIDR of primary subnet
* **secondarySubnet**: string (ReadOnly): CIDR of secondary subnet

## ClusterProperties
### Properties
* **clusterId**: int (ReadOnly): The identity
* **clusterSize**: int: The cluster size
* **hosts**: string[] (ReadOnly): The hosts
* **provisioningState**: 'Cancelled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The state of the cluster provisioning

## Endpoints
### Properties
* **hcxCloudManager**: string (ReadOnly): Endpoint for the HCX Cloud Manager
* **nsxtManager**: string (ReadOnly): Endpoint for the NSX-T Data Center manager
* **vcsa**: string (ReadOnly): Endpoint for Virtual Center Server Appliance

## ExpressRouteAuthorizationProperties
### Properties
* **expressRouteAuthorizationId**: string (ReadOnly): The ID of the ExpressRoute Circuit Authorization
* **expressRouteAuthorizationKey**: string (ReadOnly): The key of the ExpressRoute Circuit Authorization
* **provisioningState**: 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The state of the  ExpressRoute Circuit Authorization provisioning

## GlobalReachConnectionProperties
### Properties
* **addressPrefix**: string (ReadOnly): The network used for global reach carved out from the original network block provided for the private cloud
* **authorizationKey**: string: Authorization key from the peer express route used for the global reach connection
* **circuitConnectionStatus**: 'Connected' | 'Connecting' | 'Disconnected' | string (ReadOnly): The connection status of the global reach connection
* **peerExpressRouteCircuit**: string: Identifier of the ExpressRoute Circuit to peer with in the global reach connection
* **provisioningState**: 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The state of the  ExpressRoute Circuit Authorization provisioning

## HcxEnterpriseSiteProperties
### Properties
* **activationKey**: string (ReadOnly): The activation key
* **status**: 'Available' | 'Consumed' | 'Deactivated' | 'Deleted' | string (ReadOnly): The status of the HCX Enterprise Site

## IdentitySource
### Properties
* **alias**: string: The domain's NetBIOS name
* **baseGroupDN**: string: The base distinguished name for groups
* **baseUserDN**: string: The base distinguished name for users
* **domain**: string: The domain's dns name
* **name**: string: The name of the identity source
* **password**: string: The password of the Active Directory user with a minimum of read-only access to Base DN for users and groups.
* **primaryServer**: string: Primary server URL
* **secondaryServer**: string: Secondary server URL
* **ssl**: 'Disabled' | 'Enabled' | string: Protect LDAP communication using SSL certificate (LDAPS)
* **username**: string: The ID of an Active Directory user with a minimum of read-only access to Base DN for users and group

## ManagementCluster
### Properties
* **clusterId**: int (ReadOnly): The identity
* **clusterSize**: int: The cluster size
* **hosts**: string[] (ReadOnly): The hosts
* **provisioningState**: 'Cancelled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The state of the cluster provisioning

## PrivateCloudProperties
### Properties
* **circuit**: [Circuit](#circuit): An ExpressRoute Circuit
* **endpoints**: [Endpoints](#endpoints) (ReadOnly): The endpoints
* **identitySources**: [IdentitySource](#identitysource)[]: vCenter Single Sign On Identity Sources
* **internet**: 'Disabled' | 'Enabled' | string: Connectivity to internet is enabled or disabled
* **managementCluster**: [ManagementCluster](#managementcluster): The default cluster used for management
* **managementNetwork**: string (ReadOnly): Network used to access vCenter Server and NSX-T Manager
* **networkBlock**: string (Required): The block of addresses should be unique across VNet in your subscription as well as on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where A,B,C,D are between 0 and 255, and X is between 0 and 22
* **nsxtCertificateThumbprint**: string (ReadOnly): Thumbprint of the NSX-T Manager SSL certificate
* **nsxtPassword**: string: Optionally, set the NSX-T Manager password when the private cloud is created
* **provisioningNetwork**: string (ReadOnly): Used for virtual machine cold migration, cloning, and snapshot migration
* **provisioningState**: 'Building' | 'Cancelled' | 'Deleting' | 'Failed' | 'Pending' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state
* **vcenterCertificateThumbprint**: string (ReadOnly): Thumbprint of the vCenter Server SSL certificate
* **vcenterPassword**: string: Optionally, set the vCenter admin password when the private cloud is created
* **vmotionNetwork**: string (ReadOnly): Used for live migration of virtual machines

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Sku
### Properties
* **name**: string (Required): The name of the SKU.

## WorkloadNetworkDhcpEntity
* **Discriminator**: dhcpType

### Base Properties
* **displayName**: string: Display name of the DHCP entity.
* **provisioningState**: 'Building' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state
* **revision**: int: NSX revision number.
* **segments**: string[] (ReadOnly): NSX Segments consuming DHCP.

### WorkloadNetworkDhcpRelay
#### Properties
* **dhcpType**: 'RELAY' (Required): Type of DHCP: SERVER or RELAY.
* **serverAddresses**: string[]: DHCP Relay Addresses. Max 3.

### WorkloadNetworkDhcpServer
#### Properties
* **dhcpType**: 'SERVER' (Required): Type of DHCP: SERVER or RELAY.
* **leaseTime**: int: DHCP Server Lease Time.
* **serverAddress**: string: DHCP Server Address.


## WorkloadNetworkDnsServiceProperties
### Properties
* **defaultDnsZone**: string: Default DNS zone of the DNS Service.
* **displayName**: string: Display name of the DNS Service.
* **dnsServiceIp**: string: DNS service IP of the DNS Service.
* **fqdnZones**: string[]: FQDN zones of the DNS Service.
* **logLevel**: 'DEBUG' | 'ERROR' | 'FATAL' | 'INFO' | 'WARNING' | string: DNS Service log level.
* **provisioningState**: 'Building' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state
* **revision**: int: NSX revision number.
* **status**: 'FAILURE' | 'SUCCESS' | string (ReadOnly): DNS Service status.

## WorkloadNetworkDnsZoneProperties
### Properties
* **displayName**: string: Display name of the DNS Zone.
* **dnsServerIps**: string[]: DNS Server IP array of the DNS Zone.
* **dnsServices**: int: Number of DNS Services using the DNS zone.
* **domain**: string[]: Domain names of the DNS Zone.
* **provisioningState**: 'Building' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state
* **revision**: int: NSX revision number.
* **sourceIp**: string: Source IP of the DNS Zone.

## WorkloadNetworkGatewayProperties
### Properties
* **displayName**: string: Display name of the DHCP entity.
* **path**: string (ReadOnly): NSX Gateway Path.

## WorkloadNetworkPortMirroringProperties
### Properties
* **destination**: string: Destination VM Group.
* **direction**: 'INGRESS, EGRESS, BIDIRECTIONAL' | string: Direction of port mirroring profile.
* **displayName**: string: Display name of the port mirroring profile.
* **provisioningState**: 'Building' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state
* **revision**: int: NSX revision number.
* **source**: string: Source VM Group.
* **status**: 'SUCCESS, FAILURE' | string (ReadOnly): Port Mirroring Status.

## WorkloadNetworkSegmentPortVif
### Properties
* **portName**: string: Name of port or VIF attached to segment.

## WorkloadNetworkSegmentProperties
### Properties
* **connectedGateway**: string: Gateway which to connect segment to.
* **displayName**: string: Display name of the segment.
* **portVif**: [WorkloadNetworkSegmentPortVif](#workloadnetworksegmentportvif)[] (ReadOnly): Port Vif which segment is associated with.
* **provisioningState**: 'Building' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state
* **revision**: int: NSX revision number.
* **status**: 'SUCCESS, FAILURE' | string (ReadOnly): Segment status.
* **subnet**: [WorkloadNetworkSegmentSubnet](#workloadnetworksegmentsubnet): Subnet which to connect segment to.

## WorkloadNetworkSegmentSubnet
### Properties
* **dhcpRanges**: string[]: DHCP Range assigned for subnet.
* **gatewayAddress**: string: Gateway address.

## WorkloadNetworkVirtualMachineProperties
### Properties
* **displayName**: string: Display name of the VM.
* **vmType**: 'REGULAR, EDGE, SERVICE' | string (ReadOnly): Virtual machine type.

## WorkloadNetworkVMGroupProperties
### Properties
* **displayName**: string: Display name of the VM group.
* **members**: string[]: Virtual machine members of this group.
* **provisioningState**: 'Building' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state
* **revision**: int: NSX revision number.
* **status**: 'SUCCESS, FAILURE' | string (ReadOnly): VM Group status.

