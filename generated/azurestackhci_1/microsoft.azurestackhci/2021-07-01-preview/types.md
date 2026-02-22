# Microsoft.AzureStackHCI @ 2021-07-01-preview

## Resource Microsoft.AzureStackHCI/galleryimages@2021-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 64} (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryimagesProperties](#galleryimagesproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/galleryimages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/networkinterfaces@2021-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 64} (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkinterfacesProperties](#networkinterfacesproperties): NetworkInterfaceSpec defines the desired state of NetworkInterface
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/networkinterfaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/virtualharddisks@2021-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 64} (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualharddisksProperties](#virtualharddisksproperties): VirtualHardDiskSpec defines the desired state of VirtualHardDisk
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/virtualharddisks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/virtualmachines@2021-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 64} (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualmachinesProperties](#virtualmachinesproperties): VirtualMachineSpec defines the desired state of VirtualMachine
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/virtualmachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/virtualnetworks@2021-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 64} (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualnetworksProperties](#virtualnetworksproperties): VirtualNetworkSpec defines the desired state of VirtualNetwork
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/virtualnetworks' (ReadOnly, DeployTimeConstant): The resource type

## ComponentsL15GkaSchemasVirtualnetworkspropertiesPropertiesSubnetsItemsPropertiesRoutetable
### Properties
* **id**: string: route ID - ID of the IP route
* **name**: string: Name - READ-ONLY; Resource name.
* **properties**: [ComponentsOycd2YSchemasVirtualnetworkspropertiesPropertiesSubnetsItemsPropertiesRoutetableProperties](#componentsoycd2yschemasvirtualnetworkspropertiespropertiessubnetsitemspropertiesroutetableproperties): RouteTablePropertiesFormat route Table resource.
* **type**: string: Type - READ-ONLY; Resource type.

## ComponentsOycd2YSchemasVirtualnetworkspropertiesPropertiesSubnetsItemsPropertiesRoutetableProperties
### Properties
* **routes**: [VirtualnetworksPropertiesSubnetsPropertiesItemsItem](#virtualnetworkspropertiessubnetspropertiesitemsitem)[]: Routes - Collection of routes contained within a route table.

## ComponentsVqks9HSchemasVirtualnetworkspropertiesPropertiesSubnetsItemsPropertiesIpconfigurationreferencesItems
### Properties
* **ID**: string: Name of the Ip Configuration

## ExtendedLocation
### Properties
* **name**: string: The name of the extended location.
* **type**: 'CustomLocation' | string: The type of the extended location.

## GalleryimagesProperties
### Properties
* **containerName**: string: Container Name for storage container
* **imagePath**: string: location of the image the gallery image should be created from
* **osType**: 'Linux' | 'Windows': operating system type that the gallery image uses. Expected to be linux or windows
* **provisioningState**: 'Accepted' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the gallery image.
* **resourceName**: string: name of the object to be used in moc
* **status**: [GalleryImageStatus](#galleryimagestatus) (ReadOnly): GalleryImageStatus defines the observed state of MOCGalleryImage

## GalleryImageStatus
### Properties
* **errorCode**: string: GalleryImage provisioning error code
* **errorMessage**: string: Descriptive error message

## InterfaceDNSSettings
### Properties
* **dnsServers**: string[]: List of DNS server IP Addresses for the interface

## IpConfiguration
### Properties
* **name**: string: Name - The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [IpConfigurationProperties](#ipconfigurationproperties): InterfaceIPConfigurationPropertiesFormat properties of IP configuration.

## IpConfigurationProperties
### Properties
* **gateway**: string: Gateway for network interface
* **prefixLength**: string: prefixLength for network interface
* **privateIPAddress**: string: PrivateIPAddress - Private IP address of the IP configuration.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: PrivateIPAllocationMethod - The private IP address allocation method. Possible values include: 'Static', 'Dynamic'
* **subnet**: [IpConfigurationPropertiesSubnet](#ipconfigurationpropertiessubnet): Subnet - Name of Subnet bound to the IP configuration.

## IpConfigurationPropertiesSubnet
### Properties
* **id**: string: ID - The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...

## IPPool
### Properties
* **end**: string: Last IP in the pool
* **info**: [IPPoolInfo](#ippoolinfo)
* **ipPoolType**: 'vippool' | 'vm': ip pool type
* **start**: string: First IP in the pool

## IPPoolInfo
### Properties
* **available**: string (ReadOnly): no. of ip addresses available in the ip pool
* **used**: string (ReadOnly): no. of ip addresses allocated from the ip pool

## NetworkinterfacesProperties
### Properties
* **dnsSettings**: [InterfaceDNSSettings](#interfacednssettings): DNS Settings for the interface
* **ipConfigurations**: [IpConfiguration](#ipconfiguration)[]: IPConfigurations - A list of IPConfigurations of the network interface.
* **macAddress**: string: MacAddress - The MAC address of the network interface.
* **provisioningState**: 'Accepted' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the gallery image.
* **resourceName**: string: name of the object to be used in moc
* **status**: [NetworkInterfaceStatus](#networkinterfacestatus) (ReadOnly): NetworkInterfaceStatus defines the observed state of NetworkInterface

## NetworkInterfaceStatus
### Properties
* **errorCode**: string: NetworkInterface provisioning error code
* **errorMessage**: string: Descriptive error message

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualharddisksProperties
### Properties
* **blockSizeBytes**: int
* **diskSizeBytes**: int: diskSizeBytes - size of the disk in GB
* **dynamic**: bool: Boolean for enabling dynamic sizing on the virtual hard disk
* **logicalSectorBytes**: int
* **physicalSectorBytes**: int
* **provisioningState**: 'Accepted' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the gallery image.
* **resourceName**: string: name of the object to be used in moc
* **status**: [VirtualHardDiskStatus](#virtualharddiskstatus) (ReadOnly): VirtualHardDiskStatus defines the observed state of VirtualHardDisk

## VirtualHardDiskStatus
### Properties
* **errorCode**: string: NetworkInterface provisioning error code
* **errorMessage**: string: Descriptive error message

## VirtualmachinesProperties
### Properties
* **hardwareProfile**: [VirtualmachinesPropertiesHardwareProfile](#virtualmachinespropertieshardwareprofile): HardwareProfile - Specifies the hardware settings for the virtual machine.
* **networkProfile**: [VirtualmachinesPropertiesNetworkProfile](#virtualmachinespropertiesnetworkprofile): NetworkProfile - describes the network configuration the virtual machine
* **osProfile**: [VirtualmachinesPropertiesOsProfile](#virtualmachinespropertiesosprofile): OsProfile - describes the configuration of the operating system and sets login data
* **provisioningState**: 'Accepted' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the gallery image.
* **resourceName**: string: name of the object to be used in moc
* **securityProfile**: [VirtualmachinesPropertiesSecurityProfile](#virtualmachinespropertiessecurityprofile): SecurityProfile - Specifies the security settings for the virtual machine.
* **status**: [VirtualMachineStatus](#virtualmachinestatus) (ReadOnly): VirtualMachineStatus defines the observed state of VirtualMachine
* **storageProfile**: [VirtualmachinesPropertiesStorageProfile](#virtualmachinespropertiesstorageprofile): StorageProfile - contains information about the disks and storage information for the virtual machine

## VirtualmachinesPropertiesHardwareProfile
### Properties
* **dynamicMemoryConfig**: [VirtualmachinesPropertiesHardwareProfileDynamicMemoryConfig](#virtualmachinespropertieshardwareprofiledynamicmemoryconfig)
* **memoryGB**: int: RAM in gb for the virtual machine
* **processors**: int: number of processors for the virtual machine
* **vmSize**: string

## VirtualmachinesPropertiesHardwareProfileDynamicMemoryConfig
### Properties
* **maximumMemoryGB**: int
* **minimumMemoryGB**: int
* **targetMemoryBuffer**: int

## VirtualmachinesPropertiesNetworkProfile
### Properties
* **networkInterfaces**: [VirtualmachinesPropertiesNetworkProfileNetworkInterfacesItem](#virtualmachinespropertiesnetworkprofilenetworkinterfacesitem)[]: NetworkInterfaces - list of network interfaces to be attached to the virtual machine

## VirtualmachinesPropertiesNetworkProfileNetworkInterfacesItem
### Properties
* **id**: string: Name of the network interface

## VirtualmachinesPropertiesOsProfile
### Properties
* **adminPassword**: string {sensitive} (WriteOnly): AdminPassword - admin password
* **adminUsername**: string: AdminUsername - admin username
* **computerName**: string: ComputerName - name of the compute
* **linuxConfiguration**: [VirtualmachinesPropertiesOsProfileLinuxConfiguration](#virtualmachinespropertiesosprofilelinuxconfiguration): LinuxConfiguration - linux specific configuration values for the virtual machine
* **osType**: 'Linux' | 'Windows' | string: OsType - string specifying whether the OS is Linux or Windows
* **windowsConfiguration**: [VirtualmachinesPropertiesOsProfileWindowsConfiguration](#virtualmachinespropertiesosprofilewindowsconfiguration): Windows Configuration for the virtual machine

## VirtualmachinesPropertiesOsProfileLinuxConfiguration
### Properties
* **disablePasswordAuthentication**: bool: DisablePasswordAuthentication - whether password authentication should be disabled
* **ssh**: [VirtualmachinesPropertiesOsProfileLinuxConfigurationSsh](#virtualmachinespropertiesosprofilelinuxconfigurationssh): SSH - contains settings related to ssh configuration

## VirtualmachinesPropertiesOsProfileLinuxConfigurationSsh
### Properties
* **publicKeys**: [VirtualmachinesPropertiesOsProfileLinuxConfigurationSshPublicKeysItem](#virtualmachinespropertiesosprofilelinuxconfigurationsshpublickeysitem)[]: PublicKeys - The list of SSH public keys used to authenticate with linux based VMs.

## VirtualmachinesPropertiesOsProfileLinuxConfigurationSshPublicKeysItem
### Properties
* **keyData**: string {sensitive}: KeyData - SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Li      nux VMs in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-mac-create-ssh-keys?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
* **path**: string: Path - Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys

## VirtualmachinesPropertiesOsProfileWindowsConfiguration
### Properties
* **enableAutomaticUpdates**: bool: Whether to EnableAutomaticUpdates on the machine
* **ssh**: [VirtualmachinesPropertiesOsProfileWindowsConfigurationSsh](#virtualmachinespropertiesosprofilewindowsconfigurationssh): SSH Configuration
* **timeZone**: string: TimeZone for the virtual machine

## VirtualmachinesPropertiesOsProfileWindowsConfigurationSsh
### Properties
* **publicKeys**: [VirtualmachinesPropertiesOsProfileWindowsConfigurationSshPublicKeysItem](#virtualmachinespropertiesosprofilewindowsconfigurationsshpublickeysitem)[]: PublicKeys - The list of SSH public keys used to authenticate with linux based VMs.

## VirtualmachinesPropertiesOsProfileWindowsConfigurationSshPublicKeysItem
### Properties
* **keyData**: string {sensitive}: KeyData - SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Li      nux VMs in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-mac-create-ssh-keys?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
* **path**: string: Path - Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys

## VirtualmachinesPropertiesSecurityProfile
### Properties
* **enableTPM**: bool

## VirtualmachinesPropertiesStorageProfile
### Properties
* **dataDisks**: [VirtualmachinesPropertiesStorageProfileDataDisksItem](#virtualmachinespropertiesstorageprofiledatadisksitem)[]: adds data disks to the virtual machine
* **imageReference**: [VirtualmachinesPropertiesStorageProfileImageReference](#virtualmachinespropertiesstorageprofileimagereference): Which Image to use for the virtual machine

## VirtualmachinesPropertiesStorageProfileDataDisksItem
### Properties
* **name**: string

## VirtualmachinesPropertiesStorageProfileImageReference
### Properties
* **name**: string: Name - Name of the image

## VirtualMachineStatus
### Properties
* **errorCode**: string: VM provisioning error code
* **errorMessage**: string: Descriptive error message
* **powerState**: 'Deallocated' | 'Deallocating' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | 'Unknown' | string: PowerState of the VM

## VirtualnetworksProperties
### Properties
* **networkType**: 'ICS' | 'Internal' | 'L2Bridge' | 'L2Tunnel' | 'Mirrored' | 'NAT' | 'Overlay' | 'Private' | 'Transparent' | string: Type of the network
* **provisioningState**: 'Accepted' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the gallery image.
* **resourceName**: string: name of the object to be used in moc
* **status**: [VirtualNetworkStatus](#virtualnetworkstatus) (ReadOnly): VirtualNetworkStatus defines the observed state of VirtualNetwork
* **subnets**: [VirtualnetworksPropertiesSubnetsItem](#virtualnetworkspropertiessubnetsitem)[]: Subnet - list of subnets under the virtual network

## VirtualnetworksPropertiesSubnetsItem
### Properties
* **name**: string: Name - The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VirtualnetworksPropertiesSubnetsItemAutoGenerated](#virtualnetworkspropertiessubnetsitemautogenerated): SubnetProperties - Properties of the subnet.

## VirtualnetworksPropertiesSubnetsItemAutoGenerated
### Properties
* **addressPrefix**: string: Cidr for this subnet - IPv4, IPv6
* **addressPrefixes**: string[]: AddressPrefixes - List of address prefixes for the subnet.
* **ipAllocationMethod**: 'Dynamic' | 'Static' | string: IPAllocationMethod - The IP address allocation method. Possible values include: 'Static', 'Dynamic'
* **ipConfigurationReferences**: [ComponentsVqks9HSchemasVirtualnetworkspropertiesPropertiesSubnetsItemsPropertiesIpconfigurationreferencesItems](#componentsvqks9hschemasvirtualnetworkspropertiespropertiessubnetsitemspropertiesipconfigurationreferencesitems)[]: IPConfigurationReferences - list of IPConfigurationReferences
* **ipPools**: [IPPool](#ippool)[]: network associated pool of IP Addresses
* **routeTable**: [ComponentsL15GkaSchemasVirtualnetworkspropertiesPropertiesSubnetsItemsPropertiesRoutetable](#componentsl15gkaschemasvirtualnetworkspropertiespropertiessubnetsitemspropertiesroutetable): RouteTable for the subnet
* **vlan**: int: Vlan to use for the subnet

## VirtualnetworksPropertiesSubnetsItemRouteTableRoutesItem
### Properties
* **addressPrefix**: string: AddressPrefix - The destination CIDR to which the route applies.
* **nextHopIpAddress**: string: NextHopIPAddress - The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.

## VirtualnetworksPropertiesSubnetsPropertiesItemsItem
### Properties
* **name**: string: Name - name of the subnet
* **properties**: [VirtualnetworksPropertiesSubnetsItemRouteTableRoutesItem](#virtualnetworkspropertiessubnetsitemroutetableroutesitem): RoutePropertiesFormat - Properties of the route.

## VirtualNetworkStatus
### Properties
* **errorCode**: string: VirtualNetwork provisioning error code
* **errorMessage**: string: Descriptive error message

