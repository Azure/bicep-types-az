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

## NetworkInterfaceDnsSettings
### Properties
* **appliedDnsServers**: string[]: Gets or sets list of Applied DNS servers IP addresses
* **dnsServers**: string[]: Gets or sets list of DNS servers IP addresses
* **internalDnsNameLabel**: string: Gets or sets the Internal DNS name
* **internalFqdn**: string: Gets or sets full IDNS name in the form, DnsName.VnetId.ZoneId.TopLevelSuffix. This is set when the NIC is associated to a VM

## NetworkInterfaceIpConfiguration
### Properties
* **etag**: string: A unique read-only string that changes whenever the resource is updated
* **id**: string: Resource Id
* **name**: string: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
* **properties**: [NetworkInterfaceIpConfigurationPropertiesFormat](#networkinterfaceipconfigurationpropertiesformat): Properties of IPConfiguration

## NetworkInterfaceIpConfigurationPropertiesFormat
### Properties
* **loadBalancerBackendAddressPools**: [SubResource](#subresource)[]: Gets or sets the reference of LoadBalancerBackendAddressPool resource
* **loadBalancerInboundNatRules**: [SubResource](#subresource)[]: Gets or sets list of references of LoadBalancerInboundNatRules
* **privateIPAddress**: string: Gets or sets the privateIPAddress of the Network Interface IP Configuration
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: Gets or sets PrivateIP allocation method (Static/Dynamic)
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **publicIPAddress**: [SubResource](#subresource): Gets or sets the reference of the PublicIP resource
* **subnet**: [SubResource](#subresource): Gets or sets the reference of the subnet resource

## NetworkInterfacePropertiesFormat
### Properties
* **dnsSettings**: [NetworkInterfaceDnsSettings](#networkinterfacednssettings): Gets or sets DNS Settings in  NetworkInterface
* **enableIPForwarding**: bool: Gets or sets whether IPForwarding is enabled on the NIC
* **ipConfigurations**: [NetworkInterfaceIpConfiguration](#networkinterfaceipconfiguration)[]: Gets or sets list of IPConfigurations of the NetworkInterface
* **macAddress**: string: Gets the MAC Address of the network interface
* **networkSecurityGroup**: [SubResource](#subresource): Gets or sets the reference of the NetworkSecurityGroup resource
* **primary**: bool: Gets whether this is a primary NIC on a virtual machine
* **provisioningState**: string: Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
* **resourceGuid**: string: Gets or sets resource guid property of the network interface resource
* **virtualMachine**: [SubResource](#subresource): Gets or sets the reference of a VirtualMachine

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SubResource
### Properties
* **id**: string: Resource Id

