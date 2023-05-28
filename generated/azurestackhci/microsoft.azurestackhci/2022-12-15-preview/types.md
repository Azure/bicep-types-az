# Microsoft.AzureStackHCI @ 2022-12-15-preview

## Resource Microsoft.AzureStackHCI/clusters@2022-12-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity of Cluster resource
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): Cluster properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/arcSettings@2022-12-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ArcSettingProperties](#arcsettingproperties): ArcSetting properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/arcSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/arcSettings/extensions@2022-12-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExtensionProperties](#extensionproperties): Describes Machine Extension Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/arcSettings/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/publishers@2022-12-15-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublisherProperties](#publisherproperties) (ReadOnly): Publisher properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/publishers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/publishers/offers@2022-12-15-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OfferProperties](#offerproperties) (ReadOnly): Offer properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/publishers/offers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/publishers/offers/skus@2022-12-15-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SkuProperties](#skuproperties) (ReadOnly): SKU properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/publishers/offers/skus' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/updates@2022-12-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UpdateProperties](#updateproperties): Update properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/updates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/updates/updateRuns@2022-12-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UpdateRunProperties](#updaterunproperties): Describes Update Run Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/updates/updateRuns' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/updateSummaries@2022-12-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [UpdateSummariesProperties](#updatesummariesproperties): Update summaries properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/updateSummaries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/galleryImages@2022-12-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryImageProperties](#galleryimageproperties): Properties under the gallery image resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/galleryImages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/marketplaceGalleryImages@2022-12-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MarketplaceGalleryImageProperties](#marketplacegalleryimageproperties): Properties under the marketplace gallery image resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/marketplaceGalleryImages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/networkInterfaces@2022-12-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkInterfaceProperties](#networkinterfaceproperties): Properties under the network interface resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/networkInterfaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/storageContainers@2022-12-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageContainerProperties](#storagecontainerproperties): Properties under the storage container resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/storageContainers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/virtualHardDisks@2022-12-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualHardDiskProperties](#virtualharddiskproperties): Properties under the virtual hard disk resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/virtualHardDisks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/virtualMachines@2022-12-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineProperties](#virtualmachineproperties): Properties under the virtual machine resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/virtualMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/virtualMachines/extensions@2022-12-15-preview
* **Valid Scope(s)**: ResourceGroup
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
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GuestAgentProperties](#guestagentproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/virtualMachines/guestAgents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/virtualMachines/hybridIdentityMetadata@2022-12-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridIdentityMetadataProperties](#hybrididentitymetadataproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/virtualMachines/hybridIdentityMetadata' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/virtualNetworks@2022-12-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkProperties](#virtualnetworkproperties): Properties under the virtual network resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/virtualNetworks' (ReadOnly, DeployTimeConstant): The resource type

## ArcSettingProperties
### Properties
* **aggregateState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Aggregate state of Arc agent across the nodes in this HCI cluster.
* **arcApplicationClientId**: string: App id of arc AAD identity.
* **arcApplicationObjectId**: string: Object id of arc AAD identity.
* **arcApplicationTenantId**: string: Tenant id of arc AAD identity.
* **arcInstanceResourceGroup**: string: The resource group that hosts the Arc agents, ie. Hybrid Compute Machine resources.
* **arcServicePrincipalObjectId**: string: Object id of arc AAD service principal.
* **connectivityProperties**: any: contains connectivity related configuration for ARC resources
* **defaultExtensions**: [DefaultExtensionDetails](#defaultextensiondetails)[] (ReadOnly): Consent time for each of the default extensions category
* **perNodeDetails**: [PerNodeState](#pernodestate)[] (ReadOnly): State of Arc agent in each of the nodes.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the ArcSetting proxy resource.

## ClusterDesiredProperties
### Properties
* **diagnosticLevel**: 'Basic' | 'Enhanced' | 'Off' | string: Desired level of diagnostic data emitted by the cluster.
* **windowsServerSubscription**: 'Disabled' | 'Enabled' | string: Desired state of Windows Server Subscription.

## ClusterNode
### Properties
* **coreCount**: int (ReadOnly): Number of physical cores on the cluster node.
* **ehcResourceId**: string (ReadOnly): Edge Hardware Center Resource Id
* **id**: int (ReadOnly): Id of the node in the cluster.
* **manufacturer**: string (ReadOnly): Manufacturer of the cluster node hardware.
* **memoryInGiB**: int (ReadOnly): Total available memory on the cluster node (in GiB).
* **model**: string (ReadOnly): Model name of the cluster node hardware.
* **name**: string (ReadOnly): Name of the cluster node.
* **nodeType**: 'FirstParty' | 'ThirdParty' | string (ReadOnly): Type of the cluster node hardware.
* **osDisplayVersion**: string (ReadOnly): Display version of the operating system running on the cluster node.
* **osName**: string (ReadOnly): Operating system running on the cluster node.
* **osVersion**: string (ReadOnly): Version of the operating system running on the cluster node.
* **serialNumber**: string (ReadOnly): Immutable id of the cluster node.
* **windowsServerSubscription**: 'Disabled' | 'Enabled' | string (ReadOnly): State of Windows Server Subscription.

## ClusterProperties
### Properties
* **aadApplicationObjectId**: string: Object id of cluster AAD identity.
* **aadClientId**: string: App id of cluster AAD identity.
* **aadServicePrincipalObjectId**: string: Id of cluster identity service principal.
* **aadTenantId**: string: Tenant id of cluster AAD identity.
* **billingModel**: string (ReadOnly): Type of billing applied to the resource.
* **cloudId**: string (ReadOnly): Unique, immutable resource id.
* **cloudManagementEndpoint**: string: Endpoint configured for management from the Azure portal.
* **desiredProperties**: [ClusterDesiredProperties](#clusterdesiredproperties): Desired properties of the cluster.
* **lastBillingTimestamp**: string (ReadOnly): Most recent billing meter timestamp.
* **lastSyncTimestamp**: string (ReadOnly): Most recent cluster sync timestamp.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state.
* **registrationTimestamp**: string (ReadOnly): First cluster sync timestamp.
* **reportedProperties**: [ClusterReportedProperties](#clusterreportedproperties) (ReadOnly): Properties reported by cluster agent.
* **resourceProviderObjectId**: string (ReadOnly): Object id of RP Service Principal
* **serviceEndpoint**: string (ReadOnly): Region specific DataPath Endpoint of the cluster.
* **softwareAssuranceProperties**: [SoftwareAssuranceProperties](#softwareassuranceproperties): Software Assurance properties of the cluster.
* **status**: 'ConnectedRecently' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'NotConnectedRecently' | 'NotSpecified' | 'NotYetRegistered' | 'Succeeded' | string (ReadOnly): Status of the cluster agent.
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
* **supportedCapabilities**: string[] (ReadOnly): Capabilities supported by the cluster.

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

## DefaultExtensionDetails
### Properties
* **category**: string (ReadOnly): Default extension category
* **consentTime**: string (ReadOnly): Consent time for extension category

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

## ExtensionInstanceView
### Properties
* **name**: string: The extension name.
* **status**: [ExtensionInstanceViewStatus](#extensioninstanceviewstatus): Instance view status.
* **type**: string: Specifies the type of the extension; an example is "MicrosoftMonitoringAgent".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## ExtensionInstanceViewStatus
### Properties
* **code**: string: The status code.
* **displayStatus**: string: The short localizable label for the status.
* **level**: 'Error' | 'Info' | 'Warning' | string: The level code.
* **message**: string: The detailed status message, including for alerts and error messages.
* **time**: string: The time of the status.

## ExtensionParameters
### Properties
* **autoUpgradeMinorVersion**: bool: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
* **enableAutomaticUpgrade**: bool: Indicates whether the extension should be automatically upgraded by the platform if there is a newer version available.
* **forceUpdateTag**: string: How the extension handler should be forced to update even if the extension configuration has not changed.
* **protectedSettings**: any: Protected settings (may contain secrets).
* **publisher**: string: The name of the extension handler publisher.
* **settings**: any: Json formatted public settings for the extension.
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler. Latest version would be used if not specified.

## ExtensionProperties
### Properties
* **aggregateState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | 'UpgradeFailedRollbackSucceeded' | string (ReadOnly): Aggregate state of Arc Extensions across the nodes in this HCI cluster.
* **extensionParameters**: [ExtensionParameters](#extensionparameters): Parameters specific to this extension type.
* **managedBy**: 'Azure' | 'User' | string (ReadOnly): Indicates if the extension is managed by azure or the user.
* **perNodeExtensionDetails**: [PerNodeExtensionState](#pernodeextensionstate)[] (ReadOnly): State of Arc Extension in each of the nodes.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the Extension proxy resource.

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
* **imagePath**: string: location of the image the gallery image should be created from
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
* **status**: 'ConnectedRecently' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'NotConnectedRecently' | 'NotSpecified' | 'NotYetRegistered' | 'Succeeded' | string: The status of the operation performed on the gallery image [Succeeded, Failed, InProgress]

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

## IPConfiguration
### Properties
* **name**: string: Name - The name of the resource that is unique within a resource group. This name can be used to access the resource.
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

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

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
* **status**: 'ConnectedRecently' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'NotConnectedRecently' | 'NotSpecified' | 'NotYetRegistered' | 'Succeeded' | string: The status of the operation performed on the gallery image [Succeeded, Failed, InProgress]

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
* **status**: 'ConnectedRecently' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'NotConnectedRecently' | 'NotSpecified' | 'NotYetRegistered' | 'Succeeded' | string: The status of the operation performed on the network interface [Succeeded, Failed, InProgress]

## OfferProperties
### Properties
* **content**: string: JSON serialized catalog content of the offer
* **contentVersion**: string: The API version of the catalog service used to serve the catalog content
* **provisioningState**: string (ReadOnly): Provisioning State
* **publisherId**: string: Identifier of the Publisher for the offer
* **skuMappings**: [SkuMappings](#skumappings)[]: Array of SKU mappings

## PackageVersionInfo
### Properties
* **lastUpdated**: string: Last time this component was updated.
* **packageType**: string: Package type
* **version**: string: Package version

## PerNodeExtensionState
### Properties
* **extension**: string (ReadOnly): Fully qualified resource ID for the particular Arc Extension on this node.
* **instanceView**: [ExtensionInstanceView](#extensioninstanceview) (ReadOnly): The extension instance view.
* **name**: string (ReadOnly): Name of the node in HCI Cluster.
* **state**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): State of Arc Extension in this node.
* **typeHandlerVersion**: string (ReadOnly): Specifies the version of the script handler.

## PerNodeState
### Properties
* **arcInstance**: string (ReadOnly): Fully qualified resource ID for the Arc agent of this node.
* **name**: string (ReadOnly): Name of the Node in HCI Cluster
* **state**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): State of Arc agent in this node.

## PrecheckResult
### Properties
* **additionalData**: string: Property bag of key value pairs for additional information.
* **description**: string: Detailed overview of the issue and what impact the issue has on the stamp.
* **healthCheckSource**: string: The name of the services called for the HealthCheck (I.E. Test-AzureStack, Test-Cluster).
* **healthCheckTags**: any: Key-value pairs that allow grouping/filtering individual tests.
* **name**: string: Name of the individual test/rule/alert that was executed. Unique, not exposed to the customer.
* **remediation**: string: Set of steps that can be taken to resolve the issue found.
* **severity**: string: Severity of the result (Critical, Warning, Informational, Hidden). This answers how important the result is. Critical is the only update-blocking severity.
* **status**: 'ConnectedRecently' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'NotConnectedRecently' | 'NotSpecified' | 'NotYetRegistered' | 'Succeeded' | string: The status of the check running (i.e. Failed, Succeeded, In Progress). This answers whether the check ran, and passed or failed.
* **tags**: [PrecheckResultTags](#precheckresulttags): Key-value pairs that allow grouping/filtering individual tests.
* **targetResourceID**: string: The unique identifier for the affected resource (such as a node or drive).
* **targetResourceName**: string: The name of the affected resource.
* **targetResourceType**: string: The type of resource being referred to (well-known set of nouns in infrastructure, aligning with Monitoring).
* **timestamp**: string: The Time in which the HealthCheck was called.
* **title**: string: User-facing name; one or more sentences indicating the direct issue.

## PrecheckResultAutoGenerated
### Properties
* **additionalData**: string: Property bag of key value pairs for additional information.
* **description**: string: Detailed overview of the issue and what impact the issue has on the stamp.
* **healthCheckSource**: string: The name of the services called for the HealthCheck (I.E. Test-AzureStack, Test-Cluster).
* **healthCheckTags**: any: Key-value pairs that allow grouping/filtering individual tests.
* **name**: string: Name of the individual test/rule/alert that was executed. Unique, not exposed to the customer.
* **remediation**: string: Set of steps that can be taken to resolve the issue found.
* **severity**: 'Critical' | 'Hidden' | 'Informational' | 'Warning' | string: Severity of the result (Critical, Warning, Informational, Hidden). This answers how important the result is. Critical is the only update-blocking severity.
* **status**: 'ConnectedRecently' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'NotConnectedRecently' | 'NotSpecified' | 'NotYetRegistered' | 'Succeeded' | string: The status of the check running (i.e. Failed, Succeeded, In Progress). This answers whether the check ran, and passed or failed.
* **tags**: [PrecheckResultTags](#precheckresulttags): Key-value pairs that allow grouping/filtering individual tests.
* **targetResourceID**: string: The unique identifier for the affected resource (such as a node or drive).
* **targetResourceName**: string: The name of the affected resource.
* **targetResourceType**: string: The type of resource being referred to (well-known set of nouns in infrastructure, aligning with Monitoring).
* **timestamp**: string: The Time in which the HealthCheck was called.
* **title**: string: User-facing name; one or more sentences indicating the direct issue.

## PrecheckResultTags
### Properties
* **key**: string: Key that allow grouping/filtering individual tests.
* **value**: string: Value of the key that allow grouping/filtering individual tests.

## PublisherProperties
### Properties
* **provisioningState**: string (ReadOnly): Provisioning State

## SkuMappings
### Properties
* **catalogPlanId**: string: Identifier of the CatalogPlan for the sku
* **marketplaceSkuId**: string: Identifier for the sku
* **marketplaceSkuVersions**: string[]: Array of SKU versions available

## SkuProperties
### Properties
* **content**: string: JSON serialized catalog content of the sku offer
* **contentVersion**: string: The API version of the catalog service used to serve the catalog content
* **offerId**: string: Identifier of the Offer for the sku
* **provisioningState**: string (ReadOnly): Provisioning State
* **publisherId**: string: Identifier of the Publisher for the offer
* **skuMappings**: [SkuMappings](#skumappings)[]: Array of SKU mappings

## SoftwareAssuranceProperties
### Properties
* **lastUpdated**: string (ReadOnly): TimeStamp denoting the latest SA benefit applicability is validated.
* **softwareAssuranceIntent**: 'Disable' | 'Enable' | string: Customer Intent for Software Assurance Benefit.
* **softwareAssuranceStatus**: 'Disabled' | 'Enabled' | string: Status of the Software Assurance for the cluster.

## Step
### Properties
* **description**: string: More detailed description of the step.
* **endTimeUtc**: string: When the step reached a terminal state.
* **errorMessage**: string: Error message, specified if the step is in a failed state.
* **expectedExecutionTime**: string: Expected execution time of a given step. This is optionally authored in the update action plan and can be empty.
* **lastUpdatedTimeUtc**: string: Completion time of this step or the last completed sub-step.
* **name**: string: Name of the step.
* **startTimeUtc**: string: When the step started, or empty if it has not started executing.
* **status**: string: Status of the step, bubbled up from the ECE action plan for installation attempts. Values are: 'Success', 'Error', 'InProgress', and 'Unknown status'.
* **steps**: [Step](#step)[]: Recursive model for child steps of this step.

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
* **status**: 'ConnectedRecently' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'NotConnectedRecently' | 'NotSpecified' | 'NotYetRegistered' | 'Succeeded' | string: The status of the operation performed on the storage container [Succeeded, Failed, InProgress]

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UpdatePrerequisite
### Properties
* **packageName**: string: Friendly name of the prerequisite.
* **updateType**: string: Updatable component type.
* **version**: string: Version of the prerequisite.

## UpdateProperties
### Properties
* **additionalProperties**: string: Extensible KV pairs serialized as a string. This is currently used to report the stamp OEM family and hardware model information when an update is flagged as Invalid for the stamp based on OEM type.
* **availabilityType**: 'Local' | 'Notify' | 'Online' | string: Indicates the way the update content can be downloaded.
* **componentVersions**: [PackageVersionInfo](#packageversioninfo)[]: An array of component versions for a Solution Bundle update, and an empty array otherwise.
* **description**: string: Description of the update.
* **displayName**: string: Display name of the Update
* **healthCheckDate**: string: Last time the package-specific checks were run.
* **healthCheckResult**: [PrecheckResultAutoGenerated](#precheckresultautogenerated)[]: An array of PrecheckResult objects.
* **healthState**: 'Error' | 'Failure' | 'InProgress' | 'Success' | 'Unknown' | 'Warning' | string: Overall health state for update-specific health checks.
* **installedDate**: string: Date that the update was installed.
* **packagePath**: string: Path where the update package is available.
* **packageSizeInMb**: int: Size of the package. This value is a combination of the size from update metadata and size of the payload that results from the live scan operation for OS update content.
* **packageType**: string: Customer-visible type of the update.
* **prerequisites**: [UpdatePrerequisite](#updateprerequisite)[]: If update State is HasPrerequisite, this property contains an array of objects describing prerequisite updates before installing this update. Otherwise, it is empty.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the Updates proxy resource.
* **publisher**: string: Publisher of the update package.
* **rebootRequired**: 'False' | 'True' | 'Unknown' | string
* **releaseLink**: string: Link to release notes for the update.
* **state**: 'DownloadFailed' | 'Downloading' | 'HasPrerequisite' | 'HealthCheckFailed' | 'HealthChecking' | 'InstallationFailed' | 'Installed' | 'Installing' | 'Invalid' | 'NotApplicableBecauseAnotherUpdateIsInProgress' | 'Obsolete' | 'PreparationFailed' | 'Preparing' | 'Ready' | 'ReadyToInstall' | 'Recalled' | 'ScanFailed' | 'ScanInProgress' | string: State of the update as it relates to this stamp.
* **updateStateProperties**: [UpdateStateProperties](#updatestateproperties): Additional information regarding the state of the update. See definition of UpdateStateProperties type below for more details on this property.
* **version**: string: Version of the update.

## UpdateRunProperties
### Properties
* **duration**: string: Duration of the update run.
* **lastUpdatedTime**: string: Timestamp of the most recently completed step in the update run.
* **progress**: [Step](#step): Progress representation of the update run steps.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the UpdateRuns proxy resource.
* **state**: 'Failed' | 'InProgress' | 'Succeeded' | 'Unknown' | string: State of the update run.
* **timeStarted**: string: Timestamp of the update run was started.

## UpdateStateProperties
### Properties
* **notifyMessage**: string: Brief message with instructions for updates of AvailabilityType Notify.
* **progressPercentage**: int: Progress percentage of ongoing operation. Currently this property is only valid when the update is in the Downloading state, where it maps to how much of the update content has been downloaded.

## UpdateSummariesProperties
### Properties
* **currentOemVersion**: string: Current OEM Version.
* **currentVersion**: string: Current Solution Bundle version of the stamp.
* **hardwareModel**: string: Name of the hardware model.
* **healthCheckDate**: string: Last time the package-specific checks were run.
* **healthCheckResult**: [PrecheckResult](#precheckresult)[]: An array of pre-check result objects.
* **healthState**: 'Error' | 'Failure' | 'InProgress' | 'Success' | 'Unknown' | 'Warning' | string: Overall health state for update-specific health checks.
* **lastChecked**: string: Last time the update service successfully checked for updates
* **lastUpdated**: string: Last time an update installation completed successfully.
* **oemFamily**: string: OEM family name.
* **packageVersions**: [PackageVersionInfo](#packageversioninfo)[]: Current version of each updatable component.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the UpdateSummaries proxy resource.
* **state**: 'AppliedSuccessfully' | 'NeedsAttention' | 'PreparationFailed' | 'PreparationInProgress' | 'Unknown' | 'UpdateAvailable' | 'UpdateFailed' | 'UpdateInProgress' | string: Overall update state of the stamp.

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): The client ID of the assigned identity.
* **principalId**: string (ReadOnly): The principal ID of the assigned identity.

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
* **status**: 'ConnectedRecently' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'NotConnectedRecently' | 'NotSpecified' | 'NotYetRegistered' | 'Succeeded' | string: The status of the operation performed on the virtual hard disk [Succeeded, Failed, InProgress]

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
* **adminPassword**: string (WriteOnly): AdminPassword - admin password
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
* **status**: 'ConnectedRecently' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'NotConnectedRecently' | 'NotSpecified' | 'NotYetRegistered' | 'Succeeded' | string: The status of the operation performed on the virtual machine [Succeeded, Failed, InProgress]

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
* **name**: string: Name - The name of the resource that is unique within a resource group. This name can be used to access the resource.
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
* **name**: string: Name - name of the subnet
* **properties**: [VirtualNetworkPropertiesSubnetsItemRouteTableRoutesItem](#virtualnetworkpropertiessubnetsitemroutetableroutesitem): RoutePropertiesFormat - Properties of the route.

## VirtualNetworkStatus
### Properties
* **errorCode**: string: VirtualNetwork provisioning error code
* **errorMessage**: string: Descriptive error message
* **provisioningStatus**: [VirtualNetworkStatusProvisioningStatus](#virtualnetworkstatusprovisioningstatus)

## VirtualNetworkStatusProvisioningStatus
### Properties
* **operationId**: string: The ID of the operation performed on the virtual network
* **status**: 'ConnectedRecently' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'NotConnectedRecently' | 'NotSpecified' | 'NotYetRegistered' | 'Succeeded' | string: The status of the operation performed on the virtual network [Succeeded, Failed, InProgress]

