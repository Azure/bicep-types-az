# microsoft.compute @ 2015-05-01-preview

## Resource microsoft.compute/virtualMachineScaleSets/virtualMachines/networkInterfaces@2015-05-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat) (ReadOnly): NetworkInterface properties.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: 'microsoft.compute/virtualMachineScaleSets/virtualMachines/networkInterfaces' (ReadOnly, DeployTimeConstant): The resource type

## NetworkInterfacePropertiesFormat
### Properties
* **dnsSettings**: [NetworkInterfaceDnsSettings](#networkinterfacednssettings) (ReadOnly): Dns Settings of a network interface
* **enableIPForwarding**: bool (ReadOnly): Gets or sets whether IPForwarding is enabled on the NIC
* **ipConfigurations**: [NetworkInterfaceIpConfiguration](#networkinterfaceipconfiguration)[] (ReadOnly): Gets or sets list of IPConfigurations of the NetworkInterface
* **macAddress**: string (ReadOnly): Gets the MAC Address of the network interface
* **networkSecurityGroup**: [SubResource](#subresource) (ReadOnly)
* **primary**: bool (ReadOnly): Gets whether this is a primary NIC on a virtual machine
* **provisioningState**: string (ReadOnly): Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **resourceGuid**: string (ReadOnly): Gets or sets resource guid property of the network interface resource
* **virtualMachine**: [SubResource](#subresource) (ReadOnly)

## NetworkInterfaceDnsSettings
### Properties
* **appliedDnsServers**: string[] (ReadOnly): Gets or sets list of Applied DNS servers IP addresses
* **dnsServers**: string[] (ReadOnly): Gets or sets list of DNS servers IP addresses
* **internalDnsNameLabel**: string (ReadOnly): Gets or sets the Internal DNS name
* **internalFqdn**: string (ReadOnly): Gets or sets full IDNS name in the form, DnsName.VnetId.ZoneId.TopLevelSuffix. This is set when the NIC is associated to a VM

## NetworkInterfaceIpConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated
* **id**: string (ReadOnly): Resource Id
* **name**: string (ReadOnly): Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [NetworkInterfaceIpConfigurationPropertiesFormat](#networkinterfaceipconfigurationpropertiesformat) (ReadOnly): Properties of IPConfiguration

## NetworkInterfaceIpConfigurationPropertiesFormat
### Properties
* **loadBalancerBackendAddressPools**: [SubResource](#subresource)[] (ReadOnly): Gets or sets the reference of LoadBalancerBackendAddressPool resource
* **loadBalancerInboundNatRules**: [SubResource](#subresource)[] (ReadOnly): Gets or sets list of references of LoadBalancerInboundNatRules
* **privateIPAddress**: string (ReadOnly): Gets or sets the privateIPAddress of the Network Interface IP Configuration
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' (ReadOnly): Gets or sets PrivateIP allocation method (Static/Dynamic)
* **provisioningState**: string (ReadOnly): Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **publicIPAddress**: [SubResource](#subresource) (ReadOnly)
* **subnet**: [SubResource](#subresource) (ReadOnly)

## SubResource
### Properties
* **id**: string (ReadOnly): Resource Id

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

