# Microsoft.AzureStackHCI @ 2024-01-01

## Resource Microsoft.AzureStackHCI/galleryImages@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 80, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-._a-zA-Z0-9]{0,78}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryImageProperties](#galleryimageproperties): Properties under the gallery image resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/galleryImages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/logicalNetworks@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 2, maxLength: 64, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-._a-zA-Z0-9]{0,62}[_a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [LogicalNetworkProperties](#logicalnetworkproperties): Properties under the logical network resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/logicalNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/marketplaceGalleryImages@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 80, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-._a-zA-Z0-9]{0,78}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MarketplaceGalleryImageProperties](#marketplacegalleryimageproperties): Properties under the marketplace gallery image resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/marketplaceGalleryImages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/networkInterfaces@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 80, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-._a-zA-Z0-9]{0,78}[_a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkInterfaceProperties](#networkinterfaceproperties): Properties under the network interface resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/networkInterfaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/storageContainers@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 80, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-._a-zA-Z0-9]{0,78}[_a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [StorageContainerProperties](#storagecontainerproperties): Properties under the storage container resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/storageContainers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/virtualHardDisks@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 80, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-._a-zA-Z0-9]{0,62}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualHardDiskProperties](#virtualharddiskproperties): Properties under the virtual hard disk resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/virtualHardDisks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/virtualMachineInstances@2024-01-01
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineInstanceProperties](#virtualmachineinstanceproperties): Properties under the virtual machine instance resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/virtualMachineInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/virtualMachineInstances/guestAgents@2024-01-01
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [GuestAgentProperties](#guestagentproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/virtualMachineInstances/guestAgents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/virtualMachineInstances/hybridIdentityMetadata@2024-01-01
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [HybridIdentityMetadataProperties](#hybrididentitymetadataproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/virtualMachineInstances/hybridIdentityMetadata' (ReadOnly, DeployTimeConstant): The resource type

## Function restart (Microsoft.AzureStackHCI/virtualMachineInstances@2024-01-01)
* **Resource**: Microsoft.AzureStackHCI/virtualMachineInstances
* **ApiVersion**: 2024-01-01
* **Output**: [VirtualMachineInstance](#virtualmachineinstance)

## Function start (Microsoft.AzureStackHCI/virtualMachineInstances@2024-01-01)
* **Resource**: Microsoft.AzureStackHCI/virtualMachineInstances
* **ApiVersion**: 2024-01-01
* **Output**: [VirtualMachineInstance](#virtualmachineinstance)

## Function stop (Microsoft.AzureStackHCI/virtualMachineInstances@2024-01-01)
* **Resource**: Microsoft.AzureStackHCI/virtualMachineInstances
* **ApiVersion**: 2024-01-01
* **Output**: [VirtualMachineInstance](#virtualmachineinstance)

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): The additional info.
* **type**: string (ReadOnly): The additional info type.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## ExtendedLocation
### Properties
* **name**: string: The name of the extended location.
* **type**: 'CustomLocation' | string: The type of the extended location.

## GalleryImageIdentifier
### Properties
* **offer**: string (Required): The name of the gallery image definition offer.
* **publisher**: string (Required): The name of the gallery image definition publisher.
* **sku**: string (Required): The name of the gallery image definition SKU.

## GalleryImageProperties
### Properties
* **cloudInitDataSource**: 'Azure' | 'NoCloud' | string: Datasource for the gallery image when provisioning with cloud-init [NoCloud, Azure]
* **containerId**: string: Storage ContainerID of the storage container to be used for gallery image
* **hyperVGeneration**: 'V1' | 'V2' | string: The hypervisor generation of the Virtual Machine [V1, V2]
* **identifier**: [GalleryImageIdentifier](#galleryimageidentifier): This is the gallery image definition identifier.
* **imagePath**: string {sensitive}: location of the image the gallery image should be created from
* **osType**: 'Linux' | 'Windows' (Required): Operating system type that the gallery image uses [Windows, Linux]
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the gallery image.
* **status**: [GalleryImageStatus](#galleryimagestatus) (ReadOnly): The observed state of gallery images
* **version**: [GalleryImageVersion](#galleryimageversion): Specifies information about the gallery image version that you want to create or update.

## GalleryImageStatus
### Properties
* **downloadStatus**: [GalleryImageStatusDownloadStatus](#galleryimagestatusdownloadstatus): The download status of the gallery image
* **errorCode**: string: GalleryImage provisioning error code
* **errorMessage**: string: Descriptive error message
* **progressPercentage**: int: The progress of the operation in percentage
* **provisioningStatus**: [GalleryImageStatusProvisioningStatus](#galleryimagestatusprovisioningstatus)

## GalleryImageStatusDownloadStatus
### Properties
* **downloadSizeInMB**: int: The downloaded sized of the image in MB

## GalleryImageStatusProvisioningStatus
### Properties
* **operationId**: string: The ID of the operation performed on the gallery image
* **status**: 'Failed' | 'InProgress' | 'Succeeded' | string: The status of the operation performed on the gallery image [Succeeded, Failed, InProgress]

## GalleryImageVersion
### Properties
* **name**: string: This is the version of the gallery image.
* **properties**: [GalleryImageVersionProperties](#galleryimageversionproperties): Describes the properties of a gallery image version.

## GalleryImageVersionProperties
### Properties
* **storageProfile**: [GalleryImageVersionStorageProfile](#galleryimageversionstorageprofile) (Required): This is the storage profile of a Gallery Image Version.

## GalleryImageVersionStorageProfile
### Properties
* **osDiskImage**: [GalleryOSDiskImage](#galleryosdiskimage): This is the OS disk image.

## GalleryOSDiskImage
### Properties
* **sizeInMB**: int (ReadOnly): This property indicates the size of the VHD to be created.

## GuestAgentInstallStatus
### Properties
* **agentVersion**: string (ReadOnly): The hybrid machine agent full version.
* **errorDetails**: [ErrorDetail](#errordetail)[] (ReadOnly): Details about the error state.
* **lastStatusChange**: string (ReadOnly): The time of the last status change.
* **status**: 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): The installation status of the hybrid machine agent installation.
* **vmUuid**: string (ReadOnly): Specifies the VM's unique SMBIOS ID.

## GuestAgentProperties
### Properties
* **credentials**: [GuestCredential](#guestcredential): Username / Password Credentials to provision guest agent.
* **provisioningAction**: 'install' | 'repair' | 'uninstall' | string: The guest agent provisioning action.
* **provisioningState**: string (ReadOnly): The provisioning state.
* **status**: string (ReadOnly): The guest agent status.

## GuestCredential
### Properties
* **password**: string {sensitive} (WriteOnly): The password to connect with the guest.
* **username**: string: The username to connect with the guest.

## HttpProxyConfiguration
### Properties
* **httpProxy**: string {sensitive}: The HTTP proxy server endpoint to use.
* **httpsProxy**: string {sensitive}: The HTTPS proxy server endpoint to use.
* **noProxy**: string[]: The endpoints that should not go through proxy.
* **trustedCa**: string: Alternative CA cert to use for connecting to proxy servers.

## HybridIdentityMetadataProperties
### Properties
* **identity**: [Identity](#identity) (ReadOnly): Identity for the resource.
* **provisioningState**: string (ReadOnly): The provisioning state.
* **publicKey**: string: The Public Key.
* **resourceUid**: string: The unique identifier for the resource.

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned': The identity type.

## InstanceViewStatus
### Properties
* **code**: string: The status code.
* **displayStatus**: string: The short localizable label for the status.
* **level**: 'Error' | 'Info' | 'Warning' | string: The level code.
* **message**: string: The detailed status message, including for alerts and error messages.
* **time**: string: The time of the status.

## InterfaceDNSSettings
### Properties
* **dnsServers**: string[]: List of DNS server IP Addresses for the interface

## IPConfiguration
### Properties
* **name**: string {pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-._a-zA-Z0-9]{0,78}[_a-zA-Z0-9]$"}: Name - The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [IPConfigurationProperties](#ipconfigurationproperties): InterfaceIPConfigurationPropertiesFormat properties of IP configuration.

## IPConfigurationProperties
### Properties
* **gateway**: string (ReadOnly): Gateway for network interface
* **prefixLength**: string (ReadOnly): prefixLength for network interface
* **privateIPAddress**: string: PrivateIPAddress - Private IP address of the IP configuration.
* **subnet**: [IPConfigurationPropertiesSubnet](#ipconfigurationpropertiessubnet): Subnet - Name of Subnet bound to the IP configuration.

## IPConfigurationPropertiesSubnet
### Properties
* **id**: string: ID - The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...

## IPPool
### Properties
* **end**: string: End of the IP address pool
* **info**: [IPPoolInfo](#ippoolinfo)
* **ipPoolType**: 'vippool' | 'vm': Type of the IP Pool [vm, vippool]
* **name**: string: Name of the IP-Pool
* **start**: string: Start of the IP address pool

## IPPoolInfo
### Properties
* **available**: string (ReadOnly): Number of IP addresses available in the IP Pool
* **used**: string (ReadOnly): Number of IP addresses allocated from the IP Pool

## LogicalNetworkProperties
### Properties
* **dhcpOptions**: [LogicalNetworkPropertiesDhcpOptions](#logicalnetworkpropertiesdhcpoptions): DhcpOptions contains an array of DNS servers available to VMs deployed in the logical network. Standard DHCP option for a subnet overrides logical network DHCP options.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the logical network.
* **status**: [LogicalNetworkStatus](#logicalnetworkstatus) (ReadOnly): The observed state of logical networks
* **subnets**: [Subnet](#subnet)[]: Subnet - list of subnets under the logical network
* **vmSwitchName**: string: name of the network switch to be used for VMs

## LogicalNetworkPropertiesDhcpOptions
### Properties
* **dnsServers**: string[]: The list of DNS servers IP addresses.

## LogicalNetworkStatus
### Properties
* **errorCode**: string: LogicalNetwork provisioning error code
* **errorMessage**: string: Descriptive error message
* **provisioningStatus**: [LogicalNetworkStatusProvisioningStatus](#logicalnetworkstatusprovisioningstatus)

## LogicalNetworkStatusProvisioningStatus
### Properties
* **operationId**: string: The ID of the operation performed on the logical network
* **status**: 'Failed' | 'InProgress' | 'Succeeded' | string: The status of the operation performed on the logical network [Succeeded, Failed, InProgress]

## MarketplaceGalleryImageProperties
### Properties
* **cloudInitDataSource**: 'Azure' | 'NoCloud' | string: Datasource for the gallery image when provisioning with cloud-init [NoCloud, Azure]
* **containerId**: string: Storage ContainerID of the storage container to be used for marketplace gallery image
* **hyperVGeneration**: 'V1' | 'V2' | string: The hypervisor generation of the Virtual Machine [V1, V2]
* **identifier**: [GalleryImageIdentifier](#galleryimageidentifier): This is the gallery image definition identifier.
* **osType**: 'Linux' | 'Windows' (Required): Operating system type that the gallery image uses [Windows, Linux]
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the marketplace gallery image.
* **status**: [MarketplaceGalleryImageStatus](#marketplacegalleryimagestatus) (ReadOnly): The observed state of marketplace gallery images
* **version**: [GalleryImageVersion](#galleryimageversion): Specifies information about the gallery image version that you want to create or update.

## MarketplaceGalleryImageStatus
### Properties
* **downloadStatus**: [MarketplaceGalleryImageStatusDownloadStatus](#marketplacegalleryimagestatusdownloadstatus): The download status of the gallery image
* **errorCode**: string: MarketplaceGalleryImage provisioning error code
* **errorMessage**: string: Descriptive error message
* **progressPercentage**: int: The progress of the operation in percentage
* **provisioningStatus**: [MarketplaceGalleryImageStatusProvisioningStatus](#marketplacegalleryimagestatusprovisioningstatus)

## MarketplaceGalleryImageStatusDownloadStatus
### Properties
* **downloadSizeInMB**: int: The downloaded sized of the image in MB

## MarketplaceGalleryImageStatusProvisioningStatus
### Properties
* **operationId**: string: The ID of the operation performed on the gallery image
* **status**: 'Failed' | 'InProgress' | 'Succeeded' | string: The status of the operation performed on the gallery image [Succeeded, Failed, InProgress]

## NetworkInterfaceProperties
### Properties
* **dnsSettings**: [InterfaceDNSSettings](#interfacednssettings): DNS Settings for the interface
* **ipConfigurations**: [IPConfiguration](#ipconfiguration)[]: IPConfigurations - A list of IPConfigurations of the network interface.
* **macAddress**: string: MacAddress - The MAC address of the network interface.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the network interface.
* **status**: [NetworkInterfaceStatus](#networkinterfacestatus) (ReadOnly): The observed state of network interfaces

## NetworkInterfaceStatus
### Properties
* **errorCode**: string: NetworkInterface provisioning error code
* **errorMessage**: string: Descriptive error message
* **provisioningStatus**: [NetworkInterfaceStatusProvisioningStatus](#networkinterfacestatusprovisioningstatus)

## NetworkInterfaceStatusProvisioningStatus
### Properties
* **operationId**: string: The ID of the operation performed on the network interface
* **status**: 'Failed' | 'InProgress' | 'Succeeded' | string: The status of the operation performed on the network interface [Succeeded, Failed, InProgress]

## Route
### Properties
* **name**: string {pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-._a-zA-Z0-9]{0,78}[_a-zA-Z0-9]$"}: Name - name of the subnet
* **properties**: [RoutePropertiesFormat](#routepropertiesformat): Properties of the route.

## RoutePropertiesFormat
### Properties
* **addressPrefix**: string: The destination CIDR to which the route applies.
* **nextHopIpAddress**: string: The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.

## RouteTable
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **name**: string (ReadOnly): Resource name.
* **properties**: [RouteTablePropertiesFormat](#routetablepropertiesformat): Properties of the route table.
* **type**: string (ReadOnly): Resource type.

## RouteTablePropertiesFormat
### Properties
* **routes**: [Route](#route)[]: Collection of routes contained within a route table.

## SshConfiguration
### Properties
* **publicKeys**: [SshPublicKey](#sshpublickey)[]: The list of SSH public keys used to authenticate with linux based VMs.

## SshPublicKey
### Properties
* **keyData**: string: SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure]https://docs.microsoft.com/azure/virtual-machines/linux/create-ssh-keys-detailed).
* **path**: string: Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys

## StorageContainerProperties
### Properties
* **path**: string (Required): Path of the storage container on the disk
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the storage container.
* **status**: [StorageContainerStatus](#storagecontainerstatus) (ReadOnly): The observed state of storage containers

## StorageContainerStatus
### Properties
* **availableSizeMB**: int: Amount of space available on the disk in MB
* **containerSizeMB**: int: Total size of the disk in MB
* **errorCode**: string: StorageContainer provisioning error code
* **errorMessage**: string: Descriptive error message
* **provisioningStatus**: [StorageContainerStatusProvisioningStatus](#storagecontainerstatusprovisioningstatus)

## StorageContainerStatusProvisioningStatus
### Properties
* **operationId**: string: The ID of the operation performed on the storage container
* **status**: 'Failed' | 'InProgress' | 'Succeeded' | string: The status of the operation performed on the storage container [Succeeded, Failed, InProgress]

## Subnet
### Properties
* **name**: string {pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-._a-zA-Z0-9]{0,78}[_a-zA-Z0-9]$"}: Name - The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [SubnetPropertiesFormat](#subnetpropertiesformat): Properties of the subnet.

## SubnetPropertiesFormat
### Properties
* **addressPrefix**: string: The address prefix for the subnet: Cidr for this subnet - IPv4, IPv6.
* **addressPrefixes**: string[]: List of address prefixes for the subnet.
* **ipAllocationMethod**: 'Dynamic' | 'Static' | string: IPAllocationMethod - The IP address allocation method. Possible values include: 'Static', 'Dynamic'
* **ipConfigurationReferences**: [SubnetPropertiesFormatIpConfigurationReferencesItem](#subnetpropertiesformatipconfigurationreferencesitem)[]: IPConfigurationReferences - list of IPConfigurationReferences
* **ipPools**: [IPPool](#ippool)[]: network associated pool of IP Addresses
* **routeTable**: [RouteTable](#routetable): Route table resource.
* **vlan**: int: Vlan to use for the subnet

## SubnetPropertiesFormatIpConfigurationReferencesItem
### Properties
* **ID**: string: IPConfigurationID

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualHardDiskProperties
### Properties
* **blockSizeBytes**: int
* **containerId**: string: Storage ContainerID of the storage container to be used for VHD
* **diskFileFormat**: 'vhd' | 'vhdx' | string: The format of the actual VHD file [vhd, vhdx]
* **diskSizeGB**: int: Size of the disk in GB
* **dynamic**: bool: Boolean for enabling dynamic sizing on the virtual hard disk
* **hyperVGeneration**: 'V1' | 'V2' | string: The hypervisor generation of the Virtual Machine [V1, V2]
* **logicalSectorBytes**: int
* **physicalSectorBytes**: int
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the virtual hard disk.
* **status**: [VirtualHardDiskStatus](#virtualharddiskstatus) (ReadOnly): The observed state of virtual hard disks

## VirtualHardDiskStatus
### Properties
* **errorCode**: string: VirtualHardDisk provisioning error code
* **errorMessage**: string: Descriptive error message
* **provisioningStatus**: [VirtualHardDiskStatusProvisioningStatus](#virtualharddiskstatusprovisioningstatus)

## VirtualHardDiskStatusProvisioningStatus
### Properties
* **operationId**: string: The ID of the operation performed on the virtual hard disk
* **status**: 'Failed' | 'InProgress' | 'Succeeded' | string: The status of the operation performed on the virtual hard disk [Succeeded, Failed, InProgress]

## VirtualMachineConfigAgentInstanceView
### Properties
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.
* **vmConfigAgentVersion**: string: The VM Config Agent full version.

## VirtualMachineInstance
### Properties
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **identity**: [Identity](#identity): Identity for the resource.
* **name**: string (ReadOnly): The name of the resource
* **properties**: [VirtualMachineInstanceProperties](#virtualmachineinstanceproperties): Properties under the virtual machine instance resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## VirtualMachineInstanceProperties
### Properties
* **guestAgentInstallStatus**: [GuestAgentInstallStatus](#guestagentinstallstatus): Guest agent install status.
* **hardwareProfile**: [VirtualMachineInstancePropertiesHardwareProfile](#virtualmachineinstancepropertieshardwareprofile): HardwareProfile - Specifies the hardware settings for the virtual machine instance.
* **httpProxyConfig**: [HttpProxyConfiguration](#httpproxyconfiguration): HTTP Proxy configuration for the VM.
* **instanceView**: [VirtualMachineInstanceView](#virtualmachineinstanceview) (ReadOnly): The virtual machine instance view.
* **networkProfile**: [VirtualMachineInstancePropertiesNetworkProfile](#virtualmachineinstancepropertiesnetworkprofile): NetworkProfile - describes the network configuration the virtual machine instance
* **osProfile**: [VirtualMachineInstancePropertiesOsProfile](#virtualmachineinstancepropertiesosprofile): OsProfile - describes the configuration of the operating system and sets login data
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the virtual machine instance.
* **resourceUid**: string: Unique identifier defined by ARC to identify the guest of the VM.
* **securityProfile**: [VirtualMachineInstancePropertiesSecurityProfile](#virtualmachineinstancepropertiessecurityprofile): SecurityProfile - Specifies the security settings for the virtual machine instance.
* **status**: [VirtualMachineInstanceStatus](#virtualmachineinstancestatus) (ReadOnly): The observed state of virtual machine instances
* **storageProfile**: [VirtualMachineInstancePropertiesStorageProfile](#virtualmachineinstancepropertiesstorageprofile): StorageProfile - contains information about the disks and storage information for the virtual machine instance
* **vmId**: string (ReadOnly): Unique identifier for the vm resource.

## VirtualMachineInstancePropertiesHardwareProfile
### Properties
* **dynamicMemoryConfig**: [VirtualMachineInstancePropertiesHardwareProfileDynamicMemoryConfig](#virtualmachineinstancepropertieshardwareprofiledynamicmemoryconfig)
* **memoryMB**: int: RAM in MB for the virtual machine instance
* **processors**: int: number of processors for the virtual machine instance
* **vmSize**: 'Custom' | 'Default' | 'Standard_A2_v2' | 'Standard_A4_v2' | 'Standard_D16s_v3' | 'Standard_D2s_v3' | 'Standard_D32s_v3' | 'Standard_D4s_v3' | 'Standard_D8s_v3' | 'Standard_DS13_v2' | 'Standard_DS2_v2' | 'Standard_DS3_v2' | 'Standard_DS4_v2' | 'Standard_DS5_v2' | 'Standard_K8S2_v1' | 'Standard_K8S3_v1' | 'Standard_K8S4_v1' | 'Standard_K8S5_v1' | 'Standard_K8S_v1' | 'Standard_NK12' | 'Standard_NK6' | 'Standard_NV12' | 'Standard_NV6' | string

## VirtualMachineInstancePropertiesHardwareProfileDynamicMemoryConfig
### Properties
* **maximumMemoryMB**: int
* **minimumMemoryMB**: int
* **targetMemoryBuffer**: int: Defines the amount of extra memory that should be reserved for a virtual machine instance at runtime, as a percentage of the total memory that the virtual machine instance is thought to need. This only applies to virtual systems with dynamic memory enabled. This property can be in the range of 5 to 2000.

## VirtualMachineInstancePropertiesNetworkProfile
### Properties
* **networkInterfaces**: [VirtualMachineInstancePropertiesNetworkProfileNetworkInterfacesItem](#virtualmachineinstancepropertiesnetworkprofilenetworkinterfacesitem)[]: NetworkInterfaces - list of network interfaces to be attached to the virtual machine instance

## VirtualMachineInstancePropertiesNetworkProfileNetworkInterfacesItem
### Properties
* **id**: string: ID - Resource Id of the network interface

## VirtualMachineInstancePropertiesOsProfile
### Properties
* **adminPassword**: string {sensitive} (WriteOnly): AdminPassword - admin password
* **adminUsername**: string: AdminUsername - admin username
* **computerName**: string: ComputerName - name of the compute
* **linuxConfiguration**: [VirtualMachineInstancePropertiesOsProfileLinuxConfiguration](#virtualmachineinstancepropertiesosprofilelinuxconfiguration): LinuxConfiguration - linux specific configuration values for the virtual machine instance
* **windowsConfiguration**: [VirtualMachineInstancePropertiesOsProfileWindowsConfiguration](#virtualmachineinstancepropertiesosprofilewindowsconfiguration): Windows Configuration for the virtual machine instance

## VirtualMachineInstancePropertiesOsProfileLinuxConfiguration
### Properties
* **disablePasswordAuthentication**: bool: DisablePasswordAuthentication - whether password authentication should be disabled
* **provisionVMAgent**: bool: Used to indicate whether Arc for Servers agent onboarding should be triggered during the virtual machine instance creation process.
* **provisionVMConfigAgent**: bool: Used to indicate whether the VM Config Agent should be installed during the virtual machine creation process.
* **ssh**: [SshConfiguration](#sshconfiguration): Specifies the ssh key configuration for a Linux OS.

## VirtualMachineInstancePropertiesOsProfileWindowsConfiguration
### Properties
* **enableAutomaticUpdates**: bool: Whether to EnableAutomaticUpdates on the machine
* **provisionVMAgent**: bool: Used to indicate whether Arc for Servers agent onboarding should be triggered during the virtual machine instance creation process.
* **provisionVMConfigAgent**: bool: Used to indicate whether the VM Config Agent should be installed during the virtual machine creation process.
* **ssh**: [SshConfiguration](#sshconfiguration): Specifies the ssh key configuration for Windows OS.
* **timeZone**: string: TimeZone for the virtual machine instance

## VirtualMachineInstancePropertiesSecurityProfile
### Properties
* **enableTPM**: bool
* **securityType**: 'ConfidentialVM' | 'TrustedLaunch' | string: Specifies the SecurityType of the virtual machine. EnableTPM and SecureBootEnabled must be set to true for SecurityType to function.
* **uefiSettings**: [VirtualMachineInstancePropertiesSecurityProfileUefiSettings](#virtualmachineinstancepropertiessecurityprofileuefisettings)

## VirtualMachineInstancePropertiesSecurityProfileUefiSettings
### Properties
* **secureBootEnabled**: bool: Specifies whether secure boot should be enabled on the virtual machine instance.

## VirtualMachineInstancePropertiesStorageProfile
### Properties
* **dataDisks**: [VirtualMachineInstancePropertiesStorageProfileDataDisksItem](#virtualmachineinstancepropertiesstorageprofiledatadisksitem)[]: adds data disks to the virtual machine instance
* **imageReference**: [VirtualMachineInstancePropertiesStorageProfileImageReference](#virtualmachineinstancepropertiesstorageprofileimagereference): Which Image to use for the virtual machine instance
* **osDisk**: [VirtualMachineInstancePropertiesStorageProfileOsDisk](#virtualmachineinstancepropertiesstorageprofileosdisk): VHD to attach as OS disk
* **vmConfigStoragePathId**: string: Id of the storage container that hosts the VM configuration file

## VirtualMachineInstancePropertiesStorageProfileDataDisksItem
### Properties
* **id**: string: Resource ID of the data disk

## VirtualMachineInstancePropertiesStorageProfileImageReference
### Properties
* **id**: string: Resource ID of the image

## VirtualMachineInstancePropertiesStorageProfileOsDisk
### Properties
* **id**: string: Resource ID of the OS disk
* **osType**: 'Linux' | 'Windows': This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. Possible values are: **Windows,** **Linux.**

## VirtualMachineInstanceStatus
### Properties
* **errorCode**: string: VirtualMachine provisioning error code
* **errorMessage**: string: Descriptive error message
* **powerState**: 'Deallocated' | 'Deallocating' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | 'Unknown' | string: The power state of the virtual machine instance
* **provisioningStatus**: [VirtualMachineInstanceStatusProvisioningStatus](#virtualmachineinstancestatusprovisioningstatus)

## VirtualMachineInstanceStatusProvisioningStatus
### Properties
* **operationId**: string: The ID of the operation performed on the virtual machine instance
* **status**: 'Failed' | 'InProgress' | 'Succeeded' | string: The status of the operation performed on the virtual machine instance [Succeeded, Failed, InProgress]

## VirtualMachineInstanceView
### Properties
* **vmAgent**: [VirtualMachineConfigAgentInstanceView](#virtualmachineconfigagentinstanceview): The VM Config Agent running on the virtual machine.

