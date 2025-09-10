# Microsoft.AzureStackHCI @ 2024-01-01

## Resource Microsoft.AzureStackHCI/clusters@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity of Cluster resource
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): Cluster properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/arcSettings@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ArcSettingProperties](#arcsettingproperties): ArcSetting properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/arcSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/arcSettings/extensions@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExtensionProperties](#extensionproperties): Describes Machine Extension Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/arcSettings/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/deploymentSettings@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentSettingsProperties](#deploymentsettingsproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/deploymentSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/publishers@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublisherProperties](#publisherproperties) (ReadOnly): Publisher properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/publishers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/publishers/offers@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OfferProperties](#offerproperties) (ReadOnly): Offer properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/publishers/offers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/publishers/offers/skus@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SkuProperties](#skuproperties) (ReadOnly): SKU properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/publishers/offers/skus' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/securitySettings@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityProperties](#securityproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/securitySettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/updates@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UpdateProperties](#updateproperties): Update properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/updates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/updates/updateRuns@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UpdateRunProperties](#updaterunproperties): Describes Update Run Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/updates/updateRuns' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/updateSummaries@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [UpdateSummariesProperties](#updatesummariesproperties): Update summaries properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/updateSummaries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/edgeDevices@2024-01-01
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EdgeDeviceProperties](#edgedeviceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/edgeDevices' (ReadOnly, DeployTimeConstant): The resource type

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
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup
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
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [GuestAgentProperties](#guestagentproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/virtualMachineInstances/guestAgents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/virtualMachineInstances/hybridIdentityMetadata@2024-01-01
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [HybridIdentityMetadataProperties](#hybrididentitymetadataproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/virtualMachineInstances/hybridIdentityMetadata' (ReadOnly, DeployTimeConstant): The resource type

## AdapterPropertyOverrides
### Properties
* **jumboPacket**: string: This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.
* **networkDirect**: string: This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.
* **networkDirectTechnology**: string: This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation. Expected values are 'iWARP', 'RoCEv2', 'RoCE'

## ArcSettingProperties
### Properties
* **aggregateState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Aggregate state of Arc agent across the nodes in this HCI cluster.
* **arcApplicationClientId**: string: App id of arc AAD identity.
* **arcApplicationObjectId**: string: Object id of arc AAD identity.
* **arcApplicationTenantId**: string: Tenant id of arc AAD identity.
* **arcInstanceResourceGroup**: string: The resource group that hosts the Arc agents, ie. Hybrid Compute Machine resources.
* **arcServicePrincipalObjectId**: string: Object id of arc AAD service principal.
* **connectivityProperties**: any: contains connectivity related configuration for ARC resources
* **defaultExtensions**: [DefaultExtensionDetails](#defaultextensiondetails)[] (ReadOnly): Properties for each of the default extensions category
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
* **lastLicensingTimestamp**: string (ReadOnly): Most recent licensing timestamp.
* **manufacturer**: string (ReadOnly): Manufacturer of the cluster node hardware.
* **memoryInGiB**: int (ReadOnly): Total available memory on the cluster node (in GiB).
* **model**: string (ReadOnly): Model name of the cluster node hardware.
* **name**: string (ReadOnly): Name of the cluster node.
* **nodeType**: 'FirstParty' | 'ThirdParty' | string (ReadOnly): Type of the cluster node hardware.
* **oemActivation**: 'Disabled' | 'Enabled' | string (ReadOnly): OEM activation status of the node.
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
* **connectivityStatus**: 'Connected' | 'Disconnected' | 'NotConnectedRecently' | 'NotSpecified' | 'NotYetRegistered' | 'PartiallyConnected' | string (ReadOnly): Overall connectivity status for the cluster resource.
* **desiredProperties**: [ClusterDesiredProperties](#clusterdesiredproperties): Desired properties of the cluster.
* **isolatedVmAttestationConfiguration**: [IsolatedVmAttestationConfiguration](#isolatedvmattestationconfiguration) (ReadOnly): Attestation configurations for isolated VM (e.g. TVM, CVM) of the cluster.
* **lastBillingTimestamp**: string (ReadOnly): Most recent billing meter timestamp.
* **lastSyncTimestamp**: string (ReadOnly): Most recent cluster sync timestamp.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state.
* **registrationTimestamp**: string (ReadOnly): First cluster sync timestamp.
* **reportedProperties**: [ClusterReportedProperties](#clusterreportedproperties) (ReadOnly): Properties reported by cluster agent.
* **resourceProviderObjectId**: string (ReadOnly): Object id of RP Service Principal
* **serviceEndpoint**: string (ReadOnly): Region specific DataPath Endpoint of the cluster.
* **softwareAssuranceProperties**: [SoftwareAssuranceProperties](#softwareassuranceproperties): Software Assurance properties of the cluster.
* **status**: 'ConnectedRecently' | 'DeploymentFailed' | 'DeploymentInProgress' | 'DeploymentSuccess' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'NotConnectedRecently' | 'NotSpecified' | 'NotYetRegistered' | 'Succeeded' | 'ValidationFailed' | 'ValidationInProgress' | 'ValidationSuccess' | string (ReadOnly): Status of the cluster agent.
* **trialDaysRemaining**: int (ReadOnly): Number of days remaining in the trial period.

## ClusterReportedProperties
### Properties
* **clusterId**: string (ReadOnly): Unique id generated by the on-prem cluster.
* **clusterName**: string (ReadOnly): Name of the on-prem cluster connected to this resource.
* **clusterType**: 'FirstParty' | 'ThirdParty' | string (ReadOnly): The node type of all the nodes of the cluster.
* **clusterVersion**: string (ReadOnly): Version of the cluster software.
* **diagnosticLevel**: 'Basic' | 'Enhanced' | 'Off' | string: Level of diagnostic data emitted by the cluster.
* **imdsAttestation**: 'Disabled' | 'Enabled' | string (ReadOnly): IMDS attestation status of the cluster.
* **lastUpdated**: string (ReadOnly): Last time the cluster reported the data.
* **manufacturer**: string (ReadOnly): The manufacturer of all the nodes of the cluster.
* **nodes**: [ClusterNode](#clusternode)[] (ReadOnly): List of nodes reported by the cluster.
* **oemActivation**: 'Disabled' | 'Enabled' | string (ReadOnly): OEM activation status of the cluster.
* **supportedCapabilities**: string[] (ReadOnly): Capabilities supported by the cluster.

## DefaultExtensionDetails
### Properties
* **category**: string (ReadOnly): Default extension category
* **consentTime**: string (ReadOnly): Consent time for extension category

## DeploymentCluster
### Properties
* **azureServiceEndpoint**: string: For Azure blob service endpoint type, select either Default or Custom domain. If you selected **Custom domain, enter the domain for the blob service in this format core.windows.net.
* **cloudAccountName**: string: Specify the Azure Storage account name for cloud witness for your Azure Stack HCI cluster.
* **name**: string: The cluster name provided when preparing Active Directory.
* **witnessPath**: string: Specify the fileshare path for the local witness for your Azure Stack HCI cluster.
* **witnessType**: string: Use a cloud witness if you have internet access and if you use an Azure Storage account to provide a vote on cluster quorum. A cloud witness uses Azure Blob Storage to read or write a blob file and then uses it to arbitrate in split-brain resolution. Only allowed values are 'Cloud', 'FileShare'.

## DeploymentConfiguration
### Properties
* **scaleUnits**: [ScaleUnits](#scaleunits)[] (Required): Scale units will contains list of deployment data
* **version**: string: deployment template version

## DeploymentData
### Properties
* **adouPath**: string: The path to the Active Directory Organizational Unit container object prepared for the deployment.
* **cluster**: [DeploymentCluster](#deploymentcluster): Observability config to deploy AzureStackHCI Cluster.
* **domainFqdn**: string: FQDN to deploy cluster
* **hostNetwork**: [HostNetwork](#hostnetwork): HostNetwork config to deploy AzureStackHCI Cluster.
* **infrastructureNetwork**: [InfrastructureNetwork](#infrastructurenetwork)[]: InfrastructureNetwork config to deploy AzureStackHCI Cluster.
* **namingPrefix**: string {pattern: "^[a-zA-Z0-9-]{1,8}$"}: naming prefix to deploy cluster.
* **observability**: [Observability](#observability): Observability config to deploy AzureStackHCI Cluster.
* **optionalServices**: [OptionalServices](#optionalservices): OptionalServices config to deploy AzureStackHCI Cluster.
* **physicalNodes**: [PhysicalNodes](#physicalnodes)[]: list of physical nodes config to deploy AzureStackHCI Cluster.
* **secretsLocation**: string: The URI to the keyvault / secret store.
* **securitySettings**: [DeploymentSecuritySettings](#deploymentsecuritysettings): SecuritySettings to deploy AzureStackHCI Cluster.
* **storage**: [Storage](#storage): Storage config to deploy AzureStackHCI Cluster.

## DeploymentSecuritySettings
### Properties
* **bitlockerBootVolume**: bool: When set to true, BitLocker XTS_AES 256-bit encryption is enabled for all data-at-rest on the OS volume of your Azure Stack HCI cluster. This setting is TPM-hardware dependent.
* **bitlockerDataVolumes**: bool: When set to true, BitLocker XTS-AES 256-bit encryption is enabled for all data-at-rest on your Azure Stack HCI cluster shared volumes.
* **credentialGuardEnforced**: bool: When set to true, Credential Guard is enabled.
* **driftControlEnforced**: bool: When set to true, the security baseline is re-applied regularly.
* **drtmProtection**: bool: By default, Secure Boot is enabled on your Azure HCI cluster. This setting is hardware dependent.
* **hvciProtection**: bool: By default, Hypervisor-protected Code Integrity is enabled on your Azure HCI cluster.
* **sideChannelMitigationEnforced**: bool: When set to true, all the side channel mitigations are enabled
* **smbClusterEncryption**: bool: When set to true, cluster east-west traffic is encrypted.
* **smbSigningEnforced**: bool: When set to true, the SMB default instance requires sign in for the client and server services.
* **wdacEnforced**: bool: WDAC is enabled by default and limits the applications and the code that you can run on your Azure Stack HCI cluster.

## DeploymentSettingsProperties
### Properties
* **arcNodeResourceIds**: string[] (Required): Azure resource ids of Arc machines to be part of cluster.
* **deploymentConfiguration**: [DeploymentConfiguration](#deploymentconfiguration) (Required): Scale units will contains list of deployment data
* **deploymentMode**: 'Deploy' | 'Validate' | string (Required): The deployment mode for cluster deployment.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string: DeploymentSetting provisioning state
* **reportedProperties**: [ReportedProperties](#reportedproperties) (ReadOnly): Deployment Status reported from cluster.

## DeploymentStatus
### Properties
* **status**: string (ReadOnly): Status of AzureStackHCI Cluster Deployment.
* **steps**: [DeploymentStep](#deploymentstep)[] (ReadOnly): List of steps of AzureStackHCI Cluster Deployment.

## DeploymentStep
### Properties
* **description**: string (ReadOnly): Description of step.
* **endTimeUtc**: string (ReadOnly): End time of step.
* **exception**: string[] (ReadOnly): List of exceptions in AzureStackHCI Cluster Deployment.
* **fullStepIndex**: string (ReadOnly): FullStepIndex of step.
* **name**: string (ReadOnly): Name of step.
* **startTimeUtc**: string (ReadOnly): Start time of step.
* **status**: string (ReadOnly): Status of step. Allowed values are 'Error', 'Success', 'InProgress'
* **steps**: [DeploymentStep](#deploymentstep)[] (ReadOnly): List of nested steps of AzureStackHCI Cluster Deployment.

## DeviceConfiguration
### Properties
* **deviceMetadata**: string: device metadata details.
* **nicDetails**: [NicDetail](#nicdetail)[]: NIC Details of device

## EdgeDeviceProperties
### Properties
* **deviceConfiguration**: [DeviceConfiguration](#deviceconfiguration): Device Configuration
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string: Provisioning state of edgeDevice resource

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
* **status**: 'ConnectedRecently' | 'DeploymentFailed' | 'DeploymentInProgress' | 'DeploymentSuccess' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'NotConnectedRecently' | 'NotSpecified' | 'NotYetRegistered' | 'Succeeded' | 'ValidationFailed' | 'ValidationInProgress' | 'ValidationSuccess' | string: The status of the operation performed on the gallery image [Succeeded, Failed, InProgress]

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

## HostNetwork
### Properties
* **enableStorageAutoIp**: bool: Optional parameter required only for 3 Nodes Switchless deployments. This allows users to specify IPs and Mask for Storage NICs when Network ATC is not assigning the IPs for storage automatically.
* **intents**: [Intents](#intents)[]: The network intents assigned to the network reference pattern used for the deployment. Each intent will define its own name, traffic type, adapter names, and overrides as recommended by your OEM.
* **storageConnectivitySwitchless**: bool: Defines how the storage adapters between nodes are connected either switch or switch less..
* **storageNetworks**: [StorageNetworks](#storagenetworks)[]: List of StorageNetworks config to deploy AzureStackHCI Cluster.

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

## InfrastructureNetwork
### Properties
* **dnsServers**: string[]: IPv4 address of the DNS servers in your environment.
* **gateway**: string: Default gateway that should be used for the provided IP address space.
* **ipPools**: [IpPools](#ippools)[]: Range of IP addresses from which addresses are allocated for nodes within a subnet.
* **subnetMask**: string: Subnet mask that matches the provided IP address space.
* **useDhcp**: bool: Allows customers to use DHCP for Hosts and Cluster IPs. If not declared, the deployment will default to static IPs. When true, GW and DNS servers are not required

## InstanceViewStatus
### Properties
* **code**: string: The status code.
* **displayStatus**: string: The short localizable label for the status.
* **level**: 'Error' | 'Info' | 'Warning' | string: The level code.
* **message**: string: The detailed status message, including for alerts and error messages.
* **time**: string: The time of the status.

## Intents
### Properties
* **adapter**: string[]: Array of network interfaces used for the network intent.
* **adapterPropertyOverrides**: [AdapterPropertyOverrides](#adapterpropertyoverrides): Set Adapter PropertyOverrides for cluster.
* **name**: string: Name of the network intent you wish to create.
* **overrideAdapterProperty**: bool: This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.
* **overrideQosPolicy**: bool: This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.
* **overrideVirtualSwitchConfiguration**: bool: This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.
* **qosPolicyOverrides**: [QosPolicyOverrides](#qospolicyoverrides): Set QoS PolicyOverrides for cluster.
* **trafficType**: string[]: List of network traffic types. Only allowed values are 'Compute', 'Storage', 'Management'.
* **virtualSwitchConfigurationOverrides**: [VirtualSwitchConfigurationOverrides](#virtualswitchconfigurationoverrides): Set virtualSwitch ConfigurationOverrides for cluster.

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

## IpPools
### Properties
* **endingAddress**: string: Ending IP address for the management network. A minimum of six free, contiguous IPv4 addresses (excluding your host IPs) are needed for infrastructure services such as clustering.
* **startingAddress**: string: Starting IP address for the management network. A minimum of six free, contiguous IPv4 addresses (excluding your host IPs) are needed for infrastructure services such as clustering.

## IsolatedVmAttestationConfiguration
### Properties
* **attestationResourceId**: string (ReadOnly): Fully qualified Azure resource id of the Microsoft Azure attestation resource associated with this cluster.
* **attestationServiceEndpoint**: string (ReadOnly): Region specific endpoint for Microsoft Azure Attestation service for the cluster
* **relyingPartyServiceEndpoint**: string (ReadOnly): Region specific endpoint for relying party service.

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
* **status**: 'ConnectedRecently' | 'DeploymentFailed' | 'DeploymentInProgress' | 'DeploymentSuccess' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'NotConnectedRecently' | 'NotSpecified' | 'NotYetRegistered' | 'Succeeded' | 'ValidationFailed' | 'ValidationInProgress' | 'ValidationSuccess' | string: The status of the operation performed on the logical network [Succeeded, Failed, InProgress]

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

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
* **status**: 'ConnectedRecently' | 'DeploymentFailed' | 'DeploymentInProgress' | 'DeploymentSuccess' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'NotConnectedRecently' | 'NotSpecified' | 'NotYetRegistered' | 'Succeeded' | 'ValidationFailed' | 'ValidationInProgress' | 'ValidationSuccess' | string: The status of the operation performed on the gallery image [Succeeded, Failed, InProgress]

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
* **status**: 'ConnectedRecently' | 'DeploymentFailed' | 'DeploymentInProgress' | 'DeploymentSuccess' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'NotConnectedRecently' | 'NotSpecified' | 'NotYetRegistered' | 'Succeeded' | 'ValidationFailed' | 'ValidationInProgress' | 'ValidationSuccess' | string: The status of the operation performed on the network interface [Succeeded, Failed, InProgress]

## NicDetail
### Properties
* **adapterName**: string (Required): Adapter Name of NIC
* **componentId**: string: Component Id of NIC
* **defaultGateway**: string: Default Gateway of NIC
* **defaultIsolationId**: string: Default Isolation of Management NIC
* **dnsServers**: string[]: DNS Servers for NIC
* **driverVersion**: string: Driver Version of NIC
* **interfaceDescription**: string: Interface Description of NIC
* **ip4Address**: string: Subnet Mask of NIC
* **subnetMask**: string: Subnet Mask of NIC

## Observability
### Properties
* **episodicDataUpload**: bool: When set to true, collects log data to facilitate quicker issue resolution.
* **euLocation**: bool: Location of your cluster. The log and diagnostic data is sent to the appropriate diagnostics servers depending upon where your cluster resides. Setting this to false results in all data sent to Microsoft to be stored outside of the EU.
* **streamingDataClient**: bool: Enables telemetry data to be sent to Microsoft

## OfferProperties
### Properties
* **content**: string: JSON serialized catalog content of the offer
* **contentVersion**: string: The API version of the catalog service used to serve the catalog content
* **provisioningState**: string (ReadOnly): Provisioning State
* **publisherId**: string: Identifier of the Publisher for the offer
* **skuMappings**: [SkuMappings](#skumappings)[]: Array of SKU mappings

## OptionalServices
### Properties
* **customLocation**: string: The name of custom location.

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
* **arcNodeServicePrincipalObjectId**: string (ReadOnly): The service principal id of the arc for server node
* **name**: string (ReadOnly): Name of the Node in HCI Cluster
* **state**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): State of Arc agent in this node.

## PhysicalNodes
### Properties
* **ipv4Address**: string: The IPv4 address assigned to each physical server on your Azure Stack HCI cluster.
* **name**: string: NETBIOS name of each physical server on your Azure Stack HCI cluster.

## PrecheckResult
### Properties
* **additionalData**: string: Property bag of key value pairs for additional information.
* **description**: string: Detailed overview of the issue and what impact the issue has on the stamp.
* **displayName**: string: The health check DisplayName localized of the individual test executed.
* **healthCheckSource**: string: The name of the services called for the HealthCheck (I.E. Test-AzureStack, Test-Cluster).
* **name**: string: Name of the individual test/rule/alert that was executed. Unique, not exposed to the customer.
* **remediation**: string: Set of steps that can be taken to resolve the issue found.
* **severity**: 'Critical' | 'Hidden' | 'Informational' | 'Warning' | string: Severity of the result (Critical, Warning, Informational, Hidden). This answers how important the result is. Critical is the only update-blocking severity.
* **status**: 'ConnectedRecently' | 'DeploymentFailed' | 'DeploymentInProgress' | 'DeploymentSuccess' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'NotConnectedRecently' | 'NotSpecified' | 'NotYetRegistered' | 'Succeeded' | 'ValidationFailed' | 'ValidationInProgress' | 'ValidationSuccess' | string: The status of the check running (i.e. Failed, Succeeded, In Progress). This answers whether the check ran, and passed or failed.
* **tags**: [PrecheckResultTags](#precheckresulttags): Key-value pairs that allow grouping/filtering individual tests.
* **targetResourceID**: string: The unique identifier for the affected resource (such as a node or drive).
* **targetResourceName**: string: The name of the affected resource.
* **timestamp**: string: The Time in which the HealthCheck was called.
* **title**: string: User-facing name; one or more sentences indicating the direct issue.

## PrecheckResultTags
### Properties
* **key**: string: Key that allow grouping/filtering individual tests.
* **value**: string: Value of the key that allow grouping/filtering individual tests.

## PublisherProperties
### Properties
* **provisioningState**: string (ReadOnly): Provisioning State

## QosPolicyOverrides
### Properties
* **bandwidthPercentage_SMB**: string: This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.
* **priorityValue8021Action_Cluster**: string: This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.
* **priorityValue8021Action_SMB**: string: This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.

## ReportedProperties
### Properties
* **deploymentStatus**: [DeploymentStatus](#deploymentstatus) (ReadOnly): Deployment status of AzureStackHCI Cluster Deployment.
* **validationStatus**: [ValidationStatus](#validationstatus) (ReadOnly): validation status of AzureStackHCI Cluster Deployment.

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

## ScaleUnits
### Properties
* **deploymentData**: [DeploymentData](#deploymentdata) (Required): Deployment Data to deploy AzureStackHCI Cluster.

## SecurityComplianceStatus
### Properties
* **dataAtRestEncrypted**: 'Compliant' | 'NonCompliant' | 'Pending' | string (ReadOnly): Indicates whether data at-rest encryption is enabled on Azure Stack HCI clustered volumes.
* **dataInTransitProtected**: 'Compliant' | 'NonCompliant' | 'Pending' | string (ReadOnly): Indicates whether HCI cluster has data in-transit protection.
* **lastUpdated**: string (ReadOnly): Time in UTC when compliance status was last updated.
* **securedCoreCompliance**: 'Compliant' | 'NonCompliant' | 'Pending' | string (ReadOnly): Indicates whether HCI hosts meets secured-core server requirements.
* **wdacCompliance**: 'Compliant' | 'NonCompliant' | 'Pending' | string (ReadOnly): Indicates whether HCI hosts have enforced consistent Windows Defender Application Control.

## SecurityProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string: The status of the last operation.
* **securedCoreComplianceAssignment**: 'ApplyAndAutoCorrect' | 'Audit' | string: Secured Core Compliance Assignment
* **securityComplianceStatus**: [SecurityComplianceStatus](#securitycompliancestatus) (ReadOnly): Security Compliance Status

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
* **softwareAssuranceStatus**: 'Disabled' | 'Enabled' | string (ReadOnly): Status of the Software Assurance for the cluster.

## SshConfiguration
### Properties
* **publicKeys**: [SshPublicKey](#sshpublickey)[]: The list of SSH public keys used to authenticate with linux based VMs.

## SshPublicKey
### Properties
* **keyData**: string: SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure]https://docs.microsoft.com/azure/virtual-machines/linux/create-ssh-keys-detailed).
* **path**: string: Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys

## Step
### Properties
* **description**: string: More detailed description of the step.
* **endTimeUtc**: string: When the step reached a terminal state.
* **errorMessage**: string: Error message, specified if the step is in a failed state.
* **lastUpdatedTimeUtc**: string: Completion time of this step or the last completed sub-step.
* **name**: string: Name of the step.
* **startTimeUtc**: string: When the step started, or empty if it has not started executing.
* **status**: string: Status of the step, bubbled up from the ECE action plan for installation attempts. Values are: 'Success', 'Error', 'InProgress', and 'Unknown status'.
* **steps**: [Step](#step)[]: Recursive model for child steps of this step.

## Storage
### Properties
* **configurationMode**: string: By default, this mode is set to Express and your storage is configured as per best practices based on the number of nodes in the cluster. Allowed values are 'Express','InfraOnly', 'KeepStorage'

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
* **status**: 'ConnectedRecently' | 'DeploymentFailed' | 'DeploymentInProgress' | 'DeploymentSuccess' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'NotConnectedRecently' | 'NotSpecified' | 'NotYetRegistered' | 'Succeeded' | 'ValidationFailed' | 'ValidationInProgress' | 'ValidationSuccess' | string: The status of the operation performed on the storage container [Succeeded, Failed, InProgress]

## StorageNetworks
### Properties
* **name**: string: Name of the storage network.
* **networkAdapterName**: string: Name of the storage network adapter.
* **vlanId**: string: ID specified for the VLAN storage network. This setting is applied to the network interfaces that route the storage and VM migration traffic.

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
* **healthCheckResult**: [PrecheckResult](#precheckresult)[]: An array of PrecheckResult objects.
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
* **state**: 'AdditionalContentRequired' | 'DownloadFailed' | 'Downloading' | 'HasPrerequisite' | 'HealthCheckFailed' | 'HealthChecking' | 'InstallationFailed' | 'Installed' | 'Installing' | 'Invalid' | 'NotApplicableBecauseAnotherUpdateIsInProgress' | 'Obsolete' | 'PreparationFailed' | 'Preparing' | 'Ready' | 'ReadyToInstall' | 'Recalled' | 'ScanFailed' | 'ScanInProgress' | string: State of the update as it relates to this stamp.
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
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## ValidationStatus
### Properties
* **status**: string (ReadOnly): Status of AzureStackHCI Cluster Deployment.
* **steps**: [DeploymentStep](#deploymentstep)[] (ReadOnly): List of steps of AzureStackHCI Cluster Deployment.

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
* **status**: 'ConnectedRecently' | 'DeploymentFailed' | 'DeploymentInProgress' | 'DeploymentSuccess' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'NotConnectedRecently' | 'NotSpecified' | 'NotYetRegistered' | 'Succeeded' | 'ValidationFailed' | 'ValidationInProgress' | 'ValidationSuccess' | string: The status of the operation performed on the virtual hard disk [Succeeded, Failed, InProgress]

## VirtualMachineConfigAgentInstanceView
### Properties
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.
* **vmConfigAgentVersion**: string: The VM Config Agent full version.

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
* **status**: 'ConnectedRecently' | 'DeploymentFailed' | 'DeploymentInProgress' | 'DeploymentSuccess' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'NotConnectedRecently' | 'NotSpecified' | 'NotYetRegistered' | 'Succeeded' | 'ValidationFailed' | 'ValidationInProgress' | 'ValidationSuccess' | string: The status of the operation performed on the virtual machine instance [Succeeded, Failed, InProgress]

## VirtualMachineInstanceView
### Properties
* **vmAgent**: [VirtualMachineConfigAgentInstanceView](#virtualmachineconfigagentinstanceview): The VM Config Agent running on the virtual machine.

## VirtualSwitchConfigurationOverrides
### Properties
* **enableIov**: string: Enable IoV for Virtual Switch
* **loadBalancingAlgorithm**: string: Load Balancing Algorithm for Virtual Switch

