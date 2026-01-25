# Microsoft.AzureStackHCI @ 2022-12-15-preview

## Resource Microsoft.AzureStackHCI/galleryImages@2022-12-15-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 80, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-._a-zA-Z0-9]{0,78}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryImageProperties](#galleryimageproperties): Properties under the gallery image resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/galleryImages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/marketplaceGalleryImages@2022-12-15-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 80, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-._a-zA-Z0-9]{0,78}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MarketplaceGalleryImageProperties](#marketplacegalleryimageproperties): Properties under the marketplace gallery image resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/marketplaceGalleryImages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/networkInterfaces@2022-12-15-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 80, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-._a-zA-Z0-9]{0,78}[_a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkInterfaceProperties](#networkinterfaceproperties): Properties under the network interface resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/networkInterfaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/storageContainers@2022-12-15-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 80, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-._a-zA-Z0-9]{0,78}[_a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [StorageContainerProperties](#storagecontainerproperties): Properties under the storage container resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/storageContainers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/virtualHardDisks@2022-12-15-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 80, pattern: "^[-_a-zA-Z0-9]{1,80}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualHardDiskProperties](#virtualharddiskproperties): Properties under the virtual hard disk resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/virtualHardDisks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/virtualMachines@2022-12-15-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 64, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-._a-zA-Z0-9]{0,62}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineProperties](#virtualmachineproperties): Properties under the virtual machine resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/virtualMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/virtualMachines/extensions@2022-12-15-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MachineExtensionProperties](#machineextensionproperties): Describes Machine Extension Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **tags**: [MachineExtensionTags](#machineextensiontags): The Resource tags.
* **type**: 'Microsoft.AzureStackHCI/virtualMachines/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/virtualMachines/guestAgents@2022-12-15-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GuestAgentProperties](#guestagentproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/virtualMachines/guestAgents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/virtualMachines/hybridIdentityMetadata@2022-12-15-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridIdentityMetadataProperties](#hybrididentitymetadataproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/virtualMachines/hybridIdentityMetadata' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/virtualNetworks@2022-12-15-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 2, maxLength: 64, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-._a-zA-Z0-9]{0,62}[_a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkProperties](#virtualnetworkproperties): Properties under the virtual network resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/virtualNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Components3Iu67JSchemasVirtualnetworkpropertiesPropertiesSubnetsItemsPropertiesRoutetableProperties
### Properties
* **routes**: [VirtualNetworkPropertiesSubnetsPropertiesItemsItem](#virtualnetworkpropertiessubnetspropertiesitemsitem)[]: Routes - Collection of routes contained within a route table.

## ComponentsCr63WSchemasVirtualnetworkpropertiesPropertiesSubnetsItemsPropertiesIpconfigurationreferencesItems
### Properties
* **ID**: string: IPConfigurationID

## ComponentsI4F0MhSchemasVirtualnetworkpropertiesPropertiesSubnetsItemsPropertiesRoutetable
### Properties
* **id**: string: Etag - Gets a unique read-only string that changes whenever the resource is updated.
* **name**: string: Name - READ-ONLY; Resource name.
* **properties**: [Components3Iu67JSchemasVirtualnetworkpropertiesPropertiesSubnetsItemsPropertiesRoutetableProperties](#components3iu67jschemasvirtualnetworkpropertiespropertiessubnetsitemspropertiesroutetableproperties): RouteTablePropertiesFormat route Table resource.
* **type**: string: Type - READ-ONLY; Resource type.

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
* **containerName**: string: Container Name for storage container
* **hyperVGeneration**: 'V1' | 'V2' | string: The hypervisor generation of the Virtual Machine [V1, V2]
* **identifier**: [GalleryImageIdentifier](#galleryimageidentifier): This is the gallery image definition identifier.
* **imagePath**: string {sensitive}: location of the image the gallery image should be created from
* **osType**: 'Linux' | 'Windows': Operating system type that the gallery image uses [Windows, Linux]
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

## GuestAgentProfile
### Properties
* **agentVersion**: string (ReadOnly): The hybrid machine agent full version.
* **errorDetails**: [ErrorDetail](#errordetail)[] (ReadOnly): Details about the error state.
* **lastStatusChange**: string (ReadOnly): The time of the last status change.
* **status**: 'Connected' | 'Disconnected' | 'Error' | string (ReadOnly): The status of the hybrid machine agent.
* **vmUuid**: string (ReadOnly): Specifies the VM's unique SMBIOS ID.

## GuestAgentProperties
### Properties
* **credentials**: [GuestCredential](#guestcredential): Username / Password Credentials to provision guest agent.
* **httpProxyConfig**: [HttpProxyConfiguration](#httpproxyconfiguration): HTTP Proxy configuration for the VM.
* **provisioningAction**: 'install' | 'repair' | 'uninstall' | string: The guest agent provisioning action.
* **provisioningState**: string (ReadOnly): The provisioning state.
* **status**: string (ReadOnly): The guest agent status.

## GuestCredential
### Properties
* **password**: string {sensitive} (WriteOnly): The password to connect with the guest.
* **username**: string: The username to connect with the guest.

## HttpProxyConfiguration
### Properties
* **httpsProxy**: string: The httpsProxy url.

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

## InterfaceDNSSettings
### Properties
* **dnsServers**: string[]: List of DNS server IP Addresses for the interface

## IPConfiguration
### Properties
* **name**: string {pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-._a-zA-Z0-9]{0,78}[_a-zA-Z0-9]$"}: Name - The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [IPConfigurationProperties](#ipconfigurationproperties): InterfaceIPConfigurationPropertiesFormat properties of IP configuration.

## IPConfigurationProperties
### Properties
* **gateway**: string: Gateway for network interface
* **prefixLength**: string: prefixLength for network interface
* **privateIPAddress**: string: PrivateIPAddress - Private IP address of the IP configuration.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: PrivateIPAllocationMethod - The private IP address allocation method. Possible values include: 'Static', 'Dynamic'
* **subnet**: [IPConfigurationPropertiesSubnet](#ipconfigurationpropertiessubnet): Subnet - Name of Subnet bound to the IP configuration.

## IPConfigurationPropertiesSubnet
### Properties
* **id**: string: ID - The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...

## IPPool
### Properties
* **end**: string: end of the ip address pool
* **info**: [IPPoolInfo](#ippoolinfo)
* **ipPoolType**: 'vippool' | 'vm': ip pool type
* **start**: string: start of the ip address pool

## IPPoolInfo
### Properties
* **available**: string (ReadOnly): no. of ip addresses available in the ip pool
* **used**: string (ReadOnly): no. of ip addresses allocated from the ip pool

## MachineExtensionInstanceViewStatus
### Properties
* **code**: string (ReadOnly): The status code.
* **displayStatus**: string (ReadOnly): The short localizable label for the status.
* **level**: 'Error' | 'Info' | 'Warning' | string (ReadOnly): The level code.
* **message**: string (ReadOnly): The detailed status message, including for alerts and error messages.
* **time**: string (ReadOnly): The time of the status.

## MachineExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
* **forceUpdateTag**: string: How the extension handler should be forced to update even if the extension configuration has not changed.
* **instanceView**: [MachineExtensionPropertiesInstanceView](#machineextensionpropertiesinstanceview): The machine extension instance view.
* **protectedSettings**: any: The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **publisher**: string: The name of the extension handler publisher.
* **settings**: any: Json formatted public settings for the extension.
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## MachineExtensionPropertiesInstanceView
### Properties
* **name**: string (ReadOnly): The machine extension name.
* **status**: [MachineExtensionInstanceViewStatus](#machineextensioninstanceviewstatus): Instance view status.
* **type**: string (ReadOnly): Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string (ReadOnly): Specifies the version of the script handler.

## MachineExtensionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MarketplaceGalleryImageProperties
### Properties
* **cloudInitDataSource**: 'Azure' | 'NoCloud' | string: Datasource for the gallery image when provisioning with cloud-init [NoCloud, Azure]
* **containerName**: string: Container Name for storage container
* **hyperVGeneration**: 'V1' | 'V2' | string: The hypervisor generation of the Virtual Machine [V1, V2]
* **identifier**: [GalleryImageIdentifier](#galleryimageidentifier): This is the gallery image definition identifier.
* **osType**: 'Linux' | 'Windows': Operating system type that the gallery image uses [Windows, Linux]
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

## StorageContainerProperties
### Properties
* **path**: string: Path of the storage container on the disk
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

## VirtualMachineProperties
### Properties
* **guestAgentProfile**: [GuestAgentProfile](#guestagentprofile): Guest agent status properties.
* **hardwareProfile**: [VirtualMachinePropertiesHardwareProfile](#virtualmachinepropertieshardwareprofile): HardwareProfile - Specifies the hardware settings for the virtual machine.
* **networkProfile**: [VirtualMachinePropertiesNetworkProfile](#virtualmachinepropertiesnetworkprofile): NetworkProfile - describes the network configuration the virtual machine
* **osProfile**: [VirtualMachinePropertiesOsProfile](#virtualmachinepropertiesosprofile): OsProfile - describes the configuration of the operating system and sets login data
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the virtual machine.
* **securityProfile**: [VirtualMachinePropertiesSecurityProfile](#virtualmachinepropertiessecurityprofile): SecurityProfile - Specifies the security settings for the virtual machine.
* **status**: [VirtualMachineStatus](#virtualmachinestatus) (ReadOnly): The observed state of virtual machines
* **storageProfile**: [VirtualMachinePropertiesStorageProfile](#virtualmachinepropertiesstorageprofile): StorageProfile - contains information about the disks and storage information for the virtual machine
* **vmId**: string (ReadOnly): Unique identifier for the vm resource.

## VirtualMachinePropertiesHardwareProfile
### Properties
* **dynamicMemoryConfig**: [VirtualMachinePropertiesHardwareProfileDynamicMemoryConfig](#virtualmachinepropertieshardwareprofiledynamicmemoryconfig)
* **memoryMB**: int: RAM in MB for the virtual machine
* **processors**: int: number of processors for the virtual machine
* **vmSize**: 'Custom' | 'Default' | 'Standard_A2_v2' | 'Standard_A4_v2' | 'Standard_D16s_v3' | 'Standard_D2s_v3' | 'Standard_D32s_v3' | 'Standard_D4s_v3' | 'Standard_D8s_v3' | 'Standard_DS13_v2' | 'Standard_DS2_v2' | 'Standard_DS3_v2' | 'Standard_DS4_v2' | 'Standard_DS5_v2' | 'Standard_K8S2_v1' | 'Standard_K8S3_v1' | 'Standard_K8S4_v1' | 'Standard_K8S5_v1' | 'Standard_K8S_v1' | 'Standard_NK12' | 'Standard_NK6' | 'Standard_NV12' | 'Standard_NV6' | string

## VirtualMachinePropertiesHardwareProfileDynamicMemoryConfig
### Properties
* **maximumMemoryMB**: int
* **minimumMemoryMB**: int
* **targetMemoryBuffer**: int: Defines the amount of extra memory that should be reserved for a virtual machine at runtime, as a percentage of the total memory that the virtual machine is thought to need. This only applies to virtual systems with dynamic memory enabled. This property can be in the range of 5 to 2000.

## VirtualMachinePropertiesNetworkProfile
### Properties
* **networkInterfaces**: [VirtualMachinePropertiesNetworkProfileNetworkInterfacesItem](#virtualmachinepropertiesnetworkprofilenetworkinterfacesitem)[]: NetworkInterfaces - list of network interfaces to be attached to the virtual machine

## VirtualMachinePropertiesNetworkProfileNetworkInterfacesItem
### Properties
* **id**: string: ID - Resource Id of the network interface

## VirtualMachinePropertiesOsProfile
### Properties
* **adminPassword**: string {sensitive} (WriteOnly): AdminPassword - admin password
* **adminUsername**: string: AdminUsername - admin username
* **computerName**: string: ComputerName - name of the compute
* **linuxConfiguration**: [VirtualMachinePropertiesOsProfileLinuxConfiguration](#virtualmachinepropertiesosprofilelinuxconfiguration): LinuxConfiguration - linux specific configuration values for the virtual machine
* **osType**: 'Linux' | 'Windows' | string: OsType - string specifying whether the OS is Linux or Windows
* **windowsConfiguration**: [VirtualMachinePropertiesOsProfileWindowsConfiguration](#virtualmachinepropertiesosprofilewindowsconfiguration): Windows Configuration for the virtual machine

## VirtualMachinePropertiesOsProfileLinuxConfiguration
### Properties
* **disablePasswordAuthentication**: bool: DisablePasswordAuthentication - whether password authentication should be disabled
* **provisionVMAgent**: bool: Used to indicate whether Arc for Servers agent onboarding should be triggered during the virtual machine creation process.
* **ssh**: [VirtualMachinePropertiesOsProfileLinuxConfigurationSsh](#virtualmachinepropertiesosprofilelinuxconfigurationssh): SSH - contains settings related to ssh configuration

## VirtualMachinePropertiesOsProfileLinuxConfigurationSsh
### Properties
* **publicKeys**: [VirtualMachinePropertiesOsProfileLinuxConfigurationSshPublicKeysItem](#virtualmachinepropertiesosprofilelinuxconfigurationsshpublickeysitem)[]: PublicKeys - The list of SSH public keys used to authenticate with linux based VMs.

## VirtualMachinePropertiesOsProfileLinuxConfigurationSshPublicKeysItem
### Properties
* **keyData**: string: KeyData - SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Li      nux VMs in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-mac-create-ssh-keys?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
* **path**: string: Path - Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys

## VirtualMachinePropertiesOsProfileWindowsConfiguration
### Properties
* **enableAutomaticUpdates**: bool: Whether to EnableAutomaticUpdates on the machine
* **provisionVMAgent**: bool: Used to indicate whether Arc for Servers agent onboarding should be triggered during the virtual machine creation process.
* **ssh**: [VirtualMachinePropertiesOsProfileWindowsConfigurationSsh](#virtualmachinepropertiesosprofilewindowsconfigurationssh): SSH Configuration
* **timeZone**: string: TimeZone for the virtual machine

## VirtualMachinePropertiesOsProfileWindowsConfigurationSsh
### Properties
* **publicKeys**: [VirtualMachinePropertiesOsProfileWindowsConfigurationSshPublicKeysItem](#virtualmachinepropertiesosprofilewindowsconfigurationsshpublickeysitem)[]: PublicKeys - The list of SSH public keys used to authenticate with linux based VMs.

## VirtualMachinePropertiesOsProfileWindowsConfigurationSshPublicKeysItem
### Properties
* **keyData**: string: KeyData - SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Li      nux VMs in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-mac-create-ssh-keys?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
* **path**: string: Path - Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys

## VirtualMachinePropertiesSecurityProfile
### Properties
* **enableTPM**: bool
* **uefiSettings**: [VirtualMachinePropertiesSecurityProfileUefiSettings](#virtualmachinepropertiessecurityprofileuefisettings)

## VirtualMachinePropertiesSecurityProfileUefiSettings
### Properties
* **secureBootEnabled**: bool: Specifies whether secure boot should be enabled on the virtual machine.

## VirtualMachinePropertiesStorageProfile
### Properties
* **dataDisks**: [VirtualMachinePropertiesStorageProfileDataDisksItem](#virtualmachinepropertiesstorageprofiledatadisksitem)[]: adds data disks to the virtual machine
* **imageReference**: [VirtualMachinePropertiesStorageProfileImageReference](#virtualmachinepropertiesstorageprofileimagereference): Which Image to use for the virtual machine
* **osDisk**: [VirtualMachinePropertiesStorageProfileOsDisk](#virtualmachinepropertiesstorageprofileosdisk): VHD to attach as OS disk
* **vmConfigStoragePathId**: string: Id of the storage container that hosts the VM configuration file

## VirtualMachinePropertiesStorageProfileDataDisksItem
### Properties
* **id**: string: Resource ID of the data disk

## VirtualMachinePropertiesStorageProfileImageReference
### Properties
* **id**: string: Resource ID of the image

## VirtualMachinePropertiesStorageProfileOsDisk
### Properties
* **id**: string: Resource ID of the OS disk

## VirtualMachineStatus
### Properties
* **errorCode**: string: VirtualMachine provisioning error code
* **errorMessage**: string: Descriptive error message
* **powerState**: 'Deallocated' | 'Deallocating' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | 'Unknown' | string: The power state of the virtual machine
* **provisioningStatus**: [VirtualMachineStatusProvisioningStatus](#virtualmachinestatusprovisioningstatus)

## VirtualMachineStatusProvisioningStatus
### Properties
* **operationId**: string: The ID of the operation performed on the virtual machine
* **status**: 'Failed' | 'InProgress' | 'Succeeded' | string: The status of the operation performed on the virtual machine [Succeeded, Failed, InProgress]

## VirtualNetworkProperties
### Properties
* **dhcpOptions**: [VirtualNetworkPropertiesDhcpOptions](#virtualnetworkpropertiesdhcpoptions): DhcpOptions contains an array of DNS servers available to VMs deployed in the virtual network. Standard DHCP option for a subnet overrides VNET DHCP options.
* **networkType**: 'ICS' | 'Internal' | 'L2Bridge' | 'L2Tunnel' | 'Mirrored' | 'NAT' | 'Overlay' | 'Private' | 'Transparent' | string: Type of the network
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the virtual network.
* **status**: [VirtualNetworkStatus](#virtualnetworkstatus) (ReadOnly): The observed state of virtual networks
* **subnets**: [VirtualNetworkPropertiesSubnetsItem](#virtualnetworkpropertiessubnetsitem)[]: Subnet - list of subnets under the virtual network
* **vmSwitchName**: string: name of the network switch to be used for VMs

## VirtualNetworkPropertiesDhcpOptions
### Properties
* **dnsServers**: string[]: The list of DNS servers IP addresses.

## VirtualNetworkPropertiesSubnetsItem
### Properties
* **name**: string {pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-._a-zA-Z0-9]{0,78}[_a-zA-Z0-9]$"}: Name - The name of the resource that is unique within a resource group. This name can be used to access the resource.
* **properties**: [VirtualNetworkPropertiesSubnetsItemAutoGenerated](#virtualnetworkpropertiessubnetsitemautogenerated): SubnetProperties - Properties of the subnet.

## VirtualNetworkPropertiesSubnetsItemAutoGenerated
### Properties
* **addressPrefix**: string: Cidr for this subnet - IPv4, IPv6
* **addressPrefixes**: string[]: AddressPrefixes - List of address prefixes for the subnet.
* **ipAllocationMethod**: 'Dynamic' | 'Static' | string: IPAllocationMethod - The IP address allocation method. Possible values include: 'Static', 'Dynamic'
* **ipConfigurationReferences**: [ComponentsCr63WSchemasVirtualnetworkpropertiesPropertiesSubnetsItemsPropertiesIpconfigurationreferencesItems](#componentscr63wschemasvirtualnetworkpropertiespropertiessubnetsitemspropertiesipconfigurationreferencesitems)[]: IPConfigurationReferences - list of IPConfigurationReferences
* **ipPools**: [IPPool](#ippool)[]: network associated pool of IP Addresses
* **routeTable**: [ComponentsI4F0MhSchemasVirtualnetworkpropertiesPropertiesSubnetsItemsPropertiesRoutetable](#componentsi4f0mhschemasvirtualnetworkpropertiespropertiessubnetsitemspropertiesroutetable): RouteTable for the subnet
* **vlan**: int: Vlan to use for the subnet

## VirtualNetworkPropertiesSubnetsItemRouteTableRoutesItem
### Properties
* **addressPrefix**: string: AddressPrefix - The destination CIDR to which the route applies.
* **nextHopIpAddress**: string: NextHopIPAddress - The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.

## VirtualNetworkPropertiesSubnetsPropertiesItemsItem
### Properties
* **name**: string {pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-._a-zA-Z0-9]{0,78}[_a-zA-Z0-9]$"}: Name - name of the subnet
* **properties**: [VirtualNetworkPropertiesSubnetsItemRouteTableRoutesItem](#virtualnetworkpropertiessubnetsitemroutetableroutesitem): RoutePropertiesFormat - Properties of the route.

## VirtualNetworkStatus
### Properties
* **errorCode**: string: VirtualNetwork provisioning error code
* **errorMessage**: string: Descriptive error message
* **provisioningStatus**: [VirtualNetworkStatusProvisioningStatus](#virtualnetworkstatusprovisioningstatus)

## VirtualNetworkStatusProvisioningStatus
### Properties
* **operationId**: string: The ID of the operation performed on the virtual network
* **status**: 'Failed' | 'InProgress' | 'Succeeded' | string: The status of the operation performed on the virtual network [Succeeded, Failed, InProgress]

