# Microsoft.AzureStackHCI @ 2021-09-01-preview

## Resource Microsoft.AzureStackHCI/clusters@2021-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): Cluster properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): System data of Cluster resource
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/arcSettings@2021-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ArcSettingProperties](#arcsettingproperties): ArcSetting properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): System data of ArcSetting resource
* **type**: 'Microsoft.AzureStackHCI/clusters/arcSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/arcSettings/extensions@2021-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExtensionProperties](#extensionproperties): Describes Machine Extension Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): System data of Extension resource.
* **type**: 'Microsoft.AzureStackHCI/clusters/arcSettings/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/galleryimages@2021-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryimagesProperties](#galleryimagesproperties): Properties of a gallery image resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/galleryimages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/marketplacegalleryimages@2021-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MarketplacegalleryimagesProperties](#marketplacegalleryimagesproperties): Properties of a marketplace gallery image resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/marketplacegalleryimages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/networkinterfaces@2021-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkinterfacesProperties](#networkinterfacesproperties): Properties of a network interface resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/networkinterfaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/storagecontainers@2021-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [StoragecontainersExtendedLocation](#storagecontainersextendedlocation)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StoragecontainersProperties](#storagecontainersproperties): Properties of a storage container resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [StoragecontainersTags](#storagecontainerstags): Resource tags
* **type**: 'Microsoft.AzureStackHCI/storagecontainers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/virtualharddisks@2021-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualharddisksProperties](#virtualharddisksproperties): Properties of a virtual hard disk resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/virtualharddisks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/virtualmachines@2021-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualmachinesProperties](#virtualmachinesproperties): Properties of a virtual machine resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/virtualmachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/virtualMachines/extensions@2021-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MachineExtensionProperties](#machineextensionproperties): Describes Machine Extension Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **tags**: [MachineExtensionTags](#machineextensiontags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/virtualMachines/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/virtualMachines/guestAgents@2021-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GuestAgentProperties](#guestagentproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **type**: 'Microsoft.AzureStackHCI/virtualMachines/guestAgents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/virtualMachines/hybridIdentityMetadata@2021-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridIdentityMetadataProperties](#hybrididentitymetadataproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **type**: 'Microsoft.AzureStackHCI/virtualMachines/hybridIdentityMetadata' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/virtualnetworks@2021-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualnetworksProperties](#virtualnetworksproperties): Properties of a virtual network resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/virtualnetworks' (ReadOnly, DeployTimeConstant): The resource type

## ArcSettingProperties
### Properties
* **aggregateState**: 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Succeeded' | 'Updating' | string (ReadOnly): Aggregate state of Arc agent across the nodes in this HCI cluster.
* **arcInstanceResourceGroup**: string (ReadOnly): The resource group that hosts the Arc agents, ie. Hybrid Compute Machine resources.
* **perNodeDetails**: [PerNodeState](#pernodestate)[] (ReadOnly): State of Arc agent in each of the nodes.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Provisioning state of the ArcSetting proxy resource.

## ClusterDesiredProperties
### Properties
* **diagnosticLevel**: 'Basic' | 'Enhanced' | 'Off' | string: Desired level of diagnostic data emitted by the cluster.
* **windowsServerSubscription**: 'Disabled' | 'Enabled' | string: Desired state of Windows Server Subscription.

## ClusterNode
### Properties
* **coreCount**: int (ReadOnly): Number of physical cores on the cluster node.
* **id**: int (ReadOnly): Id of the node in the cluster.
* **manufacturer**: string (ReadOnly): Manufacturer of the cluster node hardware.
* **memoryInGiB**: int (ReadOnly): Total available memory on the cluster node (in GiB).
* **model**: string (ReadOnly): Model name of the cluster node hardware.
* **name**: string (ReadOnly): Name of the cluster node.
* **osName**: string (ReadOnly): Operating system running on the cluster node.
* **osVersion**: string (ReadOnly): Version of the operating system running on the cluster node.
* **serialNumber**: string (ReadOnly): Immutable id of the cluster node.
* **windowsServerSubscription**: 'Disabled' | 'Enabled' | string (ReadOnly): State of Windows Server Subscription.

## ClusterProperties
### Properties
* **aadClientId**: string (Required): App id of cluster AAD identity.
* **aadTenantId**: string (Required): Tenant id of cluster AAD identity.
* **billingModel**: string (ReadOnly): Type of billing applied to the resource.
* **cloudId**: string (ReadOnly): Unique, immutable resource id.
* **cloudManagementEndpoint**: string: Endpoint configured for management from the Azure portal.
* **desiredProperties**: [ClusterDesiredProperties](#clusterdesiredproperties): Desired properties of the cluster.
* **lastBillingTimestamp**: string (ReadOnly): Most recent billing meter timestamp.
* **lastSyncTimestamp**: string (ReadOnly): Most recent cluster sync timestamp.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Provisioning state.
* **registrationTimestamp**: string (ReadOnly): First cluster sync timestamp.
* **reportedProperties**: [ClusterReportedProperties](#clusterreportedproperties) (ReadOnly): Properties reported by cluster agent.
* **status**: 'ConnectedRecently' | 'Disconnected' | 'Error' | 'NotConnectedRecently' | 'NotYetRegistered' | string (ReadOnly): Status of the cluster agent.
* **trialDaysRemaining**: int (ReadOnly): Number of days remaining in the trial period.

## ClusterReportedProperties
### Properties
* **clusterId**: string (ReadOnly): Unique id generated by the on-prem cluster.
* **clusterName**: string (ReadOnly): Name of the on-prem cluster connected to this resource.
* **clusterVersion**: string (ReadOnly): Version of the cluster software.
* **diagnosticLevel**: 'Basic' | 'Enhanced' | 'Off' | string: Level of diagnostic data emitted by the cluster.
* **imdsAttestation**: 'Disabled' | 'Enabled' | string (ReadOnly): IMDS attestation status of the cluster.
* **lastUpdated**: string (ReadOnly): Last time the cluster reported the data.
* **nodes**: [ClusterNode](#clusternode)[] (ReadOnly): List of nodes reported by the cluster.

## ComponentsL15GkaSchemasVirtualnetworkspropertiesPropertiesSubnetsItemsPropertiesRoutetable
### Properties
* **id**: string: Etag - Gets a unique read-only string that changes whenever the resource is updated.
* **name**: string: Name - READ-ONLY; Resource name.
* **properties**: [ComponentsOycd2YSchemasVirtualnetworkspropertiesPropertiesSubnetsItemsPropertiesRoutetableProperties](#componentsoycd2yschemasvirtualnetworkspropertiespropertiessubnetsitemspropertiesroutetableproperties): RouteTablePropertiesFormat route Table resource.
* **type**: string: Type - READ-ONLY; Resource type.

## ComponentsOycd2YSchemasVirtualnetworkspropertiesPropertiesSubnetsItemsPropertiesRoutetableProperties
### Properties
* **routes**: [VirtualnetworksPropertiesSubnetsPropertiesItemsItem](#virtualnetworkspropertiessubnetspropertiesitemsitem)[]: Routes - Collection of routes contained within a route table.

## ComponentsVqks9HSchemasVirtualnetworkspropertiesPropertiesSubnetsItemsPropertiesIpconfigurationreferencesItems
### Properties
* **ID**: string: IPConfigurationID

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

## ExtensionParameters
### Properties
* **autoUpgradeMinorVersion**: bool: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
* **forceUpdateTag**: string: How the extension handler should be forced to update even if the extension configuration has not changed.
* **protectedSettings**: any: Protected settings (may contain secrets).
* **publisher**: string: The name of the extension handler publisher.
* **settings**: any: Json formatted public settings for the extension.
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## ExtensionProperties
### Properties
* **aggregateState**: 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Succeeded' | 'Updating' | string (ReadOnly): Aggregate state of Arc Extensions across the nodes in this HCI cluster.
* **extensionParameters**: [ExtensionParameters](#extensionparameters): Parameters specific to this extension type.
* **perNodeExtensionDetails**: [PerNodeExtensionState](#pernodeextensionstate)[] (ReadOnly): State of Arc Extension in each of the nodes.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Provisioning state of the Extension proxy resource.

## GalleryImageIdentifier
### Properties
* **offer**: string (Required): The name of the gallery image definition offer.
* **publisher**: string (Required): The name of the gallery image definition publisher.
* **sku**: string (Required): The name of the gallery image definition SKU.

## GalleryimagesProperties
### Properties
* **cloudInitDataSource**: 'Azure' | 'NoCloud' | string: Datasource for the gallery image when provisioning with cloud-init (Azure or NoCloud)
* **containerName**: string: Container Name for storage container
* **hyperVGeneration**: 'V1' | 'V2' | string: The hypervisor generation of the Virtual Machine [V1, V2]
* **identifier**: [GalleryImageIdentifier](#galleryimageidentifier): This is the gallery image definition identifier.
* **imagePath**: string: location of the image the gallery image should be created from
* **osType**: 'Linux' | 'Windows': operating system type that the gallery image uses. Expected to be linux or windows
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the gallery image.
* **resourceName**: string: name of the object to be used in moc
* **status**: [GalleryImageStatus](#galleryimagestatus) (ReadOnly): GalleryImageStatus defines the observed state of galleryimages
* **version**: [GalleryImageVersion](#galleryimageversion): Specifies information about the gallery image version that you want to create or update.

## GalleryImageStatus
### Properties
* **downloadStatus**: [GalleryImageStatusDownloadStatus](#galleryimagestatusdownloadstatus): The download status of the gallery image
* **errorCode**: string: Gallery image provisioning error code
* **errorMessage**: string: Descriptive error message
* **progressPercentage**: int: The progress of the operation in percentage
* **provisioningStatus**: [GalleryImageStatusProvisioningStatus](#galleryimagestatusprovisioningstatus): The provisioning status of the gallery image

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
* **password**: string (WriteOnly): The password to connect with the guest.
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

## MarketplacegalleryimagesProperties
### Properties
* **cloudInitDataSource**: 'Azure' | 'NoCloud' | string: Datasource for the gallery image when provisioning with cloud-init [Azure, NoCloud]
* **containerName**: string: Container Name for storage container
* **hyperVGeneration**: 'V1' | 'V2' | string: The hypervisor generation of the Virtual Machine [V1, V2]
* **identifier**: [GalleryImageIdentifier](#galleryimageidentifier): This is the gallery image definition identifier.
* **osType**: 'Linux' | 'Windows': operating system type that the gallery image uses. Expected to be linux or windows
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the gallery image.
* **resourceName**: string: name of the object to be used in moc
* **status**: [MarketplaceGalleryImageStatus](#marketplacegalleryimagestatus) (ReadOnly): MarketplaceGalleryImageStatus defines the observed state of marketplacegalleryimages
* **version**: [GalleryImageVersion](#galleryimageversion): Specifies information about the gallery image version that you want to create or update.

## MarketplaceGalleryImageStatus
### Properties
* **downloadStatus**: [MarketplaceGalleryImageStatusDownloadStatus](#marketplacegalleryimagestatusdownloadstatus): The download status of the marketplace gallery image
* **errorCode**: string: Marketplace gallery image provisioning error code
* **errorMessage**: string: Descriptive error message
* **progressPercentage**: int: The progress of the operation in percentage
* **provisioningStatus**: [MarketplaceGalleryImageStatusProvisioningStatus](#marketplacegalleryimagestatusprovisioningstatus): The provisioning status of the marketplace gallery image

## MarketplaceGalleryImageStatusDownloadStatus
### Properties
* **downloadSizeInMB**: int: The downloaded sized of the image in MB

## MarketplaceGalleryImageStatusProvisioningStatus
### Properties
* **operationId**: string: The ID of the operation performed on the marketplace gallery image
* **status**: 'Failed' | 'InProgress' | 'Succeeded' | string: The status of the operation performed on the marketplace gallery image [Succeeded, Failed, InProgress]

## NetworkinterfacesProperties
### Properties
* **dnsSettings**: [InterfaceDNSSettings](#interfacednssettings): DNS Settings for the interface
* **ipConfigurations**: [IpConfiguration](#ipconfiguration)[]: IPConfigurations - A list of IPConfigurations of the network interface.
* **macAddress**: string: MacAddress - The MAC address of the network interface.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the gallery image.
* **resourceName**: string: name of the object to be used in moc
* **status**: [NetworkInterfaceStatus](#networkinterfacestatus) (ReadOnly): NetworkInterfaceStatus defines the observed state of network interfaces

## NetworkInterfaceStatus
### Properties
* **errorCode**: string: NetworkInterface provisioning error code
* **errorMessage**: string: Descriptive error message
* **provisioningStatus**: [NetworkInterfaceStatusProvisioningStatus](#networkinterfacestatusprovisioningstatus): The provisioning status of the network interface

## NetworkInterfaceStatusProvisioningStatus
### Properties
* **operationId**: string: The ID of the operation performed on the network interface
* **status**: 'Failed' | 'InProgress' | 'Succeeded' | string: The status of the operation performed on the network interface [Succeeded, Failed, InProgress]

## PerNodeExtensionState
### Properties
* **extension**: string (ReadOnly): Fully qualified resource ID for the particular Arc Extension on this node.
* **name**: string (ReadOnly): Name of the node in HCI Cluster.
* **state**: 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'Disconnected' | 'Error' | 'Failed' | 'Moving' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): State of Arc Extension in this node.

## PerNodeState
### Properties
* **arcInstance**: string (ReadOnly): Fully qualified resource ID for the Arc agent of this node.
* **name**: string (ReadOnly): Name of the Node in HCI Cluster
* **state**: 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'Disconnected' | 'Error' | 'Failed' | 'Moving' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): State of Arc agent in this node.

## StoragecontainersExtendedLocation
### Properties
* **name**: string: The extended location name.
* **type**: string: The extended location type.

## StoragecontainersProperties
### Properties
* **availableSizeMB**: int (ReadOnly): Amount of space available on the disk in MB
* **containerSizeMB**: int (ReadOnly): Total size of the disk in MB
* **path**: string: Path of the storage container on the disk
* **provisioningState**: string
* **resourceName**: string: name of the object to be used in moc
* **status**: [StorageContainerStatus](#storagecontainerstatus) (ReadOnly): storageContainerStatus defines the observed state of storagecontainers

## StoragecontainersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StorageContainerStatus
### Properties
* **availableSizeMB**: int: Amount of space available on the disk in MB
* **containerSizeMB**: int: Total size of the disk in MB
* **errorCode**: string: StorageContainer provisioning error code
* **errorMessage**: string: Descriptive error message
* **provisioningStatus**: [StorageContainerStatusProvisioningStatus](#storagecontainerstatusprovisioningstatus): The provisioning status of the storage container

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

## VirtualharddisksProperties
### Properties
* **blockSizeBytes**: int
* **containerId**: string: Storage ContainerID of the storage container to be used for VHD
* **diskFileFormat**: 'vhd' | 'vhdx' | string: The format of the actual VHD file [vhd, vhdx]
* **diskSizeBytes**: int: diskSizeBytes - size of the disk in GB
* **dynamic**: bool: Boolean for enabling dynamic sizing on the virtual hard disk
* **hyperVGeneration**: 'V1' | 'V2' | string: The hypervisor generation of the Virtual Machine [V1, V2]
* **logicalSectorBytes**: int
* **physicalSectorBytes**: int
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the gallery image.
* **resourceName**: string: name of the object to be used in moc
* **status**: [VirtualHardDiskStatus](#virtualharddiskstatus) (ReadOnly): VirtualHardDiskStatus defines the observed state of virtualharddisks

## VirtualHardDiskStatus
### Properties
* **errorCode**: string: VirtualHardDisk provisioning error code
* **errorMessage**: string: Descriptive error message
* **provisioningStatus**: [VirtualHardDiskStatusProvisioningStatus](#virtualharddiskstatusprovisioningstatus): The provisioning status of the virtual hard disk

## VirtualHardDiskStatusProvisioningStatus
### Properties
* **operationId**: string: The ID of the operation performed on the virtual hard disk
* **status**: 'Failed' | 'InProgress' | 'Succeeded' | string: The status of the operation performed on the virtual hard disk [Succeeded, Failed, InProgress]

## VirtualmachinesProperties
### Properties
* **guestAgentProfile**: [GuestAgentProfile](#guestagentprofile): Guest agent status properties.
* **hardwareProfile**: [VirtualmachinesPropertiesHardwareProfile](#virtualmachinespropertieshardwareprofile): HardwareProfile - Specifies the hardware settings for the virtual machine.
* **networkProfile**: [VirtualmachinesPropertiesNetworkProfile](#virtualmachinespropertiesnetworkprofile): NetworkProfile - describes the network configuration the virtual machine
* **osProfile**: [VirtualmachinesPropertiesOsProfile](#virtualmachinespropertiesosprofile): OsProfile - describes the configuration of the operating system and sets login data
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the gallery image.
* **resourceName**: string: name of the object to be used in moc
* **securityProfile**: [VirtualmachinesPropertiesSecurityProfile](#virtualmachinespropertiessecurityprofile): SecurityProfile - Specifies the security settings for the virtual machine.
* **status**: [VirtualMachineStatus](#virtualmachinestatus) (ReadOnly): VirtualMachineStatus defines the observed state of virtualmachines
* **storageProfile**: [VirtualmachinesPropertiesStorageProfile](#virtualmachinespropertiesstorageprofile): StorageProfile - contains information about the disks and storage information for the virtual machine
* **vmId**: string (ReadOnly): Unique identifier for the vm resource.

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
* **id**: string: ID - Resource Id of the network interface

## VirtualmachinesPropertiesOsProfile
### Properties
* **adminPassword**: string (WriteOnly): AdminPassword - admin password
* **adminUsername**: string: AdminUsername - admin username
* **computerName**: string: ComputerName - name of the compute
* **linuxConfiguration**: [VirtualmachinesPropertiesOsProfileLinuxConfiguration](#virtualmachinespropertiesosprofilelinuxconfiguration): LinuxConfiguration - linux specific configuration values for the virtual machine
* **osType**: 'Linux' | 'Windows' | string: OsType - string specifying whether the OS is Linux or Windows
* **windowsConfiguration**: [VirtualmachinesPropertiesOsProfileWindowsConfiguration](#virtualmachinespropertiesosprofilewindowsconfiguration): Windows Configuration for the virtual machine

## VirtualmachinesPropertiesOsProfileLinuxConfiguration
### Properties
* **disablePasswordAuthentication**: bool: DisablePasswordAuthentication - whether password authentication should be disabled
* **provisionVMAgent**: bool: Used to indicate whether Arc for Servers agent onboarding should be triggered during the virtual machine creation process.
* **ssh**: [VirtualmachinesPropertiesOsProfileLinuxConfigurationSsh](#virtualmachinespropertiesosprofilelinuxconfigurationssh): SSH - contains settings related to ssh configuration

## VirtualmachinesPropertiesOsProfileLinuxConfigurationSsh
### Properties
* **publicKeys**: [VirtualmachinesPropertiesOsProfileLinuxConfigurationSshPublicKeysItem](#virtualmachinespropertiesosprofilelinuxconfigurationsshpublickeysitem)[]: PublicKeys - The list of SSH public keys used to authenticate with linux based VMs.

## VirtualmachinesPropertiesOsProfileLinuxConfigurationSshPublicKeysItem
### Properties
* **keyData**: string: KeyData - SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Li      nux VMs in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-mac-create-ssh-keys?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
* **path**: string: Path - Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys

## VirtualmachinesPropertiesOsProfileWindowsConfiguration
### Properties
* **enableAutomaticUpdates**: bool: Whether to EnableAutomaticUpdates on the machine
* **provisionVMAgent**: bool: Used to indicate whether Arc for Servers agent onboarding should be triggered during the virtual machine creation process.
* **ssh**: [VirtualmachinesPropertiesOsProfileWindowsConfigurationSsh](#virtualmachinespropertiesosprofilewindowsconfigurationssh): SSH Configuration
* **timeZone**: string: TimeZone for the virtual machine

## VirtualmachinesPropertiesOsProfileWindowsConfigurationSsh
### Properties
* **publicKeys**: [VirtualmachinesPropertiesOsProfileWindowsConfigurationSshPublicKeysItem](#virtualmachinespropertiesosprofilewindowsconfigurationsshpublickeysitem)[]: PublicKeys - The list of SSH public keys used to authenticate with linux based VMs.

## VirtualmachinesPropertiesOsProfileWindowsConfigurationSshPublicKeysItem
### Properties
* **keyData**: string: KeyData - SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Li      nux VMs in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-mac-create-ssh-keys?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
* **path**: string: Path - Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys

## VirtualmachinesPropertiesSecurityProfile
### Properties
* **enableTPM**: bool
* **uefiSettings**: [VirtualmachinesPropertiesSecurityProfileUefiSettings](#virtualmachinespropertiessecurityprofileuefisettings)

## VirtualmachinesPropertiesSecurityProfileUefiSettings
### Properties
* **secureBootEnabled**: bool: Specifies whether secure boot should be enabled on the virtual machine.

## VirtualmachinesPropertiesStorageProfile
### Properties
* **dataDisks**: [VirtualmachinesPropertiesStorageProfileDataDisksItem](#virtualmachinespropertiesstorageprofiledatadisksitem)[]: adds data disks to the virtual machine
* **imageReference**: [VirtualmachinesPropertiesStorageProfileImageReference](#virtualmachinespropertiesstorageprofileimagereference): Which Image to use for the virtual machine
* **osDisk**: [VirtualmachinesPropertiesStorageProfileOsDisk](#virtualmachinespropertiesstorageprofileosdisk): VHD to attach as OS disk
* **vmConfigContainerName**: string: Name of the storage container that hosts the VM configuration file

## VirtualmachinesPropertiesStorageProfileDataDisksItem
### Properties
* **name**: string

## VirtualmachinesPropertiesStorageProfileImageReference
### Properties
* **name**: string: Name - Name of the image

## VirtualmachinesPropertiesStorageProfileOsDisk
### Properties
* **id**: string: Specifies the virtual hard disk's ID

## VirtualMachineStatus
### Properties
* **errorCode**: string: VirtualMachine provisioning error code
* **errorMessage**: string: Descriptive error message
* **powerState**: 'Deallocated' | 'Deallocating' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | 'Unknown' | string: The power state of the virtual machine
* **provisioningStatus**: [VirtualMachineStatusProvisioningStatus](#virtualmachinestatusprovisioningstatus): The provisioning status of the virtual machine

## VirtualMachineStatusProvisioningStatus
### Properties
* **operationId**: string: The ID of the operation performed on the virtual machine
* **status**: 'Failed' | 'InProgress' | 'Succeeded' | string: The status of the operation performed on the virtual machine [Succeeded, Failed, InProgress]

## VirtualnetworksProperties
### Properties
* **networkType**: 'ICS' | 'Internal' | 'L2Bridge' | 'L2Tunnel' | 'Mirrored' | 'NAT' | 'Overlay' | 'Private' | 'Transparent' | string: Type of the network
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the gallery image.
* **resourceName**: string: name of the object to be used in moc
* **status**: [VirtualNetworkStatus](#virtualnetworkstatus) (ReadOnly): VirtualNetworkStatus defines the observed state of virtual networks
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
* **provisioningStatus**: [VirtualNetworkStatusProvisioningStatus](#virtualnetworkstatusprovisioningstatus): The provisioning status of the virtual network

## VirtualNetworkStatusProvisioningStatus
### Properties
* **operationId**: string: The ID of the operation performed on the virtual network
* **status**: 'Failed' | 'InProgress' | 'Succeeded' | string: The status of the operation performed on the virtual network [Succeeded, Failed, InProgress]

