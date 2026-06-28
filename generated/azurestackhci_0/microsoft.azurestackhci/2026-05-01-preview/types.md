# Microsoft.AzureStackHCI @ 2026-05-01-preview

## Resource Microsoft.AzureStackHCI/clusters@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **kind**: string {pattern: "^[-\w\._,\(\\\)]+$"}: This property identifies the purpose of the Cluster deployment. For example, a valid value is AzureLocal
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): Cluster properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/arcSettings@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ArcSettingProperties](#arcsettingproperties): ArcSetting properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/arcSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/arcSettings/extensions@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExtensionProperties](#extensionproperties): Describes Machine Extension Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/arcSettings/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/deploymentSettings@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentSettingsProperties](#deploymentsettingsproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/deploymentSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/jobs@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterJobProperties](#clusterjobproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/publishers@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublisherProperties](#publisherproperties) (ReadOnly): Publisher properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/publishers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/publishers/offers@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OfferProperties](#offerproperties) (ReadOnly): Offer properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/publishers/offers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/publishers/offers/skus@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SkuProperties](#skuproperties) (ReadOnly): SKU properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/publishers/offers/skus' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/securitySettings@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityProperties](#securityproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/securitySettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/updates@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UpdateProperties](#updateproperties): Update properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/updates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/updates/updateRuns@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UpdateRunProperties](#updaterunproperties): Describes Update Run Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/updates/updateRuns' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/updateSummaries@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [UpdateSummariesProperties](#updatesummariesproperties): Update summaries properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/updateSummaries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/devicePools@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-_]{3,63}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DevicePoolProperties](#devicepoolproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/devicePools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/edgeDevices@2026-05-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/edgeDevices' (ReadOnly, DeployTimeConstant): The resource type

### HciEdgeDevice
#### Properties
* **kind**: 'HCI' (Required): Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **properties**: [HciEdgeDeviceProperties](#hciedgedeviceproperties): properties for Arc-enabled edge device with HCI OS.


## Resource Microsoft.AzureStackHCI/edgeDevices/jobs@2026-05-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/edgeDevices/jobs' (ReadOnly, DeployTimeConstant): The resource type

### HciEdgeDeviceJob
#### Properties
* **kind**: 'HCI' (Required): Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **properties**: [HciEdgeDeviceJobProperties](#hciedgedevicejobproperties) (Required): HCI Edge device job properties


## Resource Microsoft.AzureStackHCI/edgeMachines@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-_]{3,63}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EdgeMachineProperties](#edgemachineproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/edgeMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/edgeMachines/disks@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-_]{3,63}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EdgeMachineDiskProperties](#edgemachinediskproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/edgeMachines/disks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/edgeMachines/disks/jobs@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-_]{3,63}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EdgeMachineDiskJobProperties](#edgemachinediskjobproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/edgeMachines/disks/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/edgeMachines/disks/privilegedJobs@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-_]{3,63}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EdgeMachineDiskPrivilegedJobProperties](#edgemachinediskprivilegedjobproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/edgeMachines/disks/privilegedJobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/edgeMachines/gpus@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-_]{3,85}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EdgeMachineGpuProperties](#edgemachinegpuproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/edgeMachines/gpus' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/edgeMachines/gpus/jobs@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-_]{3,512}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EdgeMachineGpuJobProperties](#edgemachinegpujobproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/edgeMachines/gpus/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/edgeMachines/jobs@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-_]{3,63}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EdgeMachineJobProperties](#edgemachinejobproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/edgeMachines/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/edgeMachines/networkAdapters@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-_]{3,63}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EdgeMachineNetworkAdapterProperties](#edgemachinenetworkadapterproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/edgeMachines/networkAdapters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/edgeMachines/networkAdapters/jobs@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-_]{3,63}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EdgeMachineNetworkAdapterJobProperties](#edgemachinenetworkadapterjobproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/edgeMachines/networkAdapters/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/edgeMachines/updates@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EdgeMachineUpdateProperties](#edgemachineupdateproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/edgeMachines/updates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/edgeMachines/volumes@2026-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-_]{3,63}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EdgeMachineVolumeProperties](#edgemachinevolumeproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/edgeMachines/volumes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/locations/osImages@2026-05-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-.]{3,50}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [OsImageProperties](#osimageproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/locations/osImages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/locations/platformUpdates@2026-05-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-.]{3,50}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PlatformUpdateProperties](#platformupdateproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/locations/platformUpdates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/locations/updateContents@2026-05-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-.]{3,50}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [UpdateContentProperties](#updatecontentproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/locations/updateContents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/locations/validatedSolutionRecipes@2026-05-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-.]{3,50}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ValidatedSolutionRecipeProperties](#validatedsolutionrecipeproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/locations/validatedSolutionRecipes' (ReadOnly, DeployTimeConstant): The resource type

## AddServerJobServerDetails
### Properties
* **hostIpv4Address**: string (Required): Ip address of server to be added to cluster.
* **localAvailabilityZoneName**: string: Local availability zone name of server to be added to rack aware cluster.
* **serverName**: string (Required): Name of server to be added to cluster.
* **serverResourceId**: string (Required): Azure resource id of machine part of cluster for which job will be triggered.

## ArcConnectivityProperties
### Properties
* **enabled**: bool: True indicates ARC connectivity is enabled
* **serviceConfigurations**: [ServiceConfiguration](#serviceconfiguration)[]: Service configurations associated with the connectivity resource. They are only processed by the server if 'enabled' property is set to 'true'.

## ArcSettingProperties
### Properties
* **aggregateState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Aggregate state of Arc agent across the nodes in this HCI cluster.
* **arcApplicationClientId**: string: App id of arc AAD identity.
* **arcApplicationObjectId**: string: Object id of arc AAD identity.
* **arcApplicationTenantId**: string: Tenant id of arc AAD identity.
* **arcInstanceResourceGroup**: string: The resource group that hosts the Arc agents, ie. Hybrid Compute Machine resources.
* **arcServicePrincipalObjectId**: string: Object id of arc AAD service principal.
* **connectivityProperties**: [ArcConnectivityProperties](#arcconnectivityproperties): contains connectivity related configuration for ARC resources
* **defaultExtensions**: [DefaultExtensionDetails](#defaultextensiondetails)[] (ReadOnly): Properties for each of the default extensions category
* **perNodeDetails**: [PerNodeState](#pernodestate)[] (ReadOnly): State of Arc agent in each of the nodes.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the ArcSetting proxy resource.

## AssemblyInfo
### Properties
* **packageVersion**: string (ReadOnly): Assembly Package version for Validated Solution Recipe for AzureStackHCI Cluster
* **payload**: [AssemblyInfoPayload](#assemblyinfopayload)[] (ReadOnly): Payload properties for Validated Solution Recipe for AzureStackHCI Cluster

## AssemblyInfoPayload
### Properties
* **fileName**: string (ReadOnly): File name of assembly package for Validated Solution Recipe for AzureStackHCI Cluster
* **hash**: string (ReadOnly): Hash of assembly package for Validated Solution Recipe for AzureStackHCI Cluster
* **identifier**: string (ReadOnly): assembly identifier for Validated Solution Recipe for AzureStackHCI Cluster
* **url**: string (ReadOnly): Url of assembly package for Validated Solution Recipe for AzureStackHCI Cluster

## ClusterBillingProperties
### Properties
* **nextBillingModel**: [NextBillingModel](#nextbillingmodel): The next billing model to be applied to the cluster.

## ClusterDesiredProperties
### Properties
* **diagnosticLevel**: 'Basic' | 'Enhanced' | 'Off' | string: Desired level of diagnostic data emitted by the cluster.
* **windowsServerSubscription**: 'Disabled' | 'Enabled' | string: Desired state of Windows Server Subscription.

## ClusterJobProperties
* **Discriminator**: jobType

### Base Properties
* **deploymentMode**: 'Deploy' | 'Validate' | string: Deployment mode to trigger job.
* **endTimeUtc**: string (ReadOnly): The UTC date and time at which the job completed.
* **jobId**: string (ReadOnly): Unique, immutable job id.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Job provisioning state
* **reportedProperties**: [JobReportedProperties](#jobreportedproperties) (ReadOnly): Reported properties for job
* **startTimeUtc**: string (ReadOnly): The UTC date and time at which the job started.
* **status**: 'Canceled' | 'DeploymentFailed' | 'DeploymentInProgress' | 'DeploymentSuccess' | 'Failed' | 'NotSpecified' | 'Paused' | 'Scheduled' | 'Succeeded' | 'ValidationFailed' | 'ValidationInProgress' | 'ValidationSuccess' | string (ReadOnly): Status of Cluster job.

### HciAddServerJobProperties
#### Properties
* **addServerJobServerDetails**: [AddServerJobServerDetails](#addserverjobserverdetails)[] (Required): Details of servers to be added to the cluster.
* **cloudAccountName**: string: Specify the Azure Storage account name for cloud witness for your Azure Stack HCI cluster.
* **jobType**: 'AddServer' (Required): Job Type to support polymorphic resource.
* **secrets**: [EceDeploymentSecrets](#ecedeploymentsecrets)[]: List of protected parameters to pass to trigger the job for the cluster.
* **witnessPath**: string: Specify the fileshare path for the local witness for your Azure Stack HCI cluster.
* **witnessType**: 'Cloud' | 'FileShare' | string: Use a cloud witness if you have internet access and if you use an Azure Storage account to provide a vote on cluster quorum. A cloud witness uses Azure Blob Storage to read or write a blob file and then uses it to arbitrate in split-brain resolution.

### HciConfigureCvmJobProperties
#### Properties
* **confidentialVmIntent**: 'Disable' | 'Enable' | string (Required): Defines the customer's intent for updating confidential VM properties
* **jobType**: 'ConfigureCVM' (Required): Job Type to support polymorphic resource.

### HciConfigureSdnIntegrationJobProperties
#### Properties
* **jobType**: 'ConfigureSdnIntegration' (Required): Job Type to support polymorphic resource.
* **sdnIntegrationIntent**: 'Disable' | 'Enable' | string (Required): Defines the customer's intent for configuring SDN integration
* **sdnPrefix**: string {maxLength: 8, pattern: "^(?!.*--)(?!.*-$)[A-Za-z0-9-]{1,8}$"}: A string identifier used to construct the Network Controller (NC) REST resource name. This prefix helps group and distinguish SDN-managed network components and must follow specific formatting rules.

### GpuCreatePartitionJobProperties
#### Properties
* **jobType**: 'GpuCreatePartition' (Required): Job Type to support polymorphic resource.
* **partitionCount**: int (Required): Number of partitions to be created on the GPU.

### GpuSwitchModeJobProperties
#### Properties
* **jobType**: 'GpuSwitchMode' (Required): Job Type to support polymorphic resource.
* **mode**: 'DDA' | 'GPUP' | 'Unknown' | string (Required): Desired GPU mode to switch to.

### HciRepairServerJobProperties
#### Properties
* **jobType**: 'RepairServer' (Required): Job Type to support polymorphic resource.
* **repairServerJobServerDetails**: [RepairServerJobServerDetails](#repairserverjobserverdetails)[] (Required): Details of servers to be repaired in the cluster.
* **secrets**: [EceDeploymentSecrets](#ecedeploymentsecrets)[]: List of protected parameters to pass to trigger job for cluster.

### VmConnectProvisionJobProperties
#### Properties
* **jobType**: 'VmConnectProvision' (Required): Job Type to support polymorphic resource.
* **vmConnectProvisionJobDetails**: [VmConnectJobDetails](#vmconnectjobdetails)[] (Required): Details of VM needed to enable VM Connect

### VmConnectRemoveJobProperties
#### Properties
* **jobType**: 'VmConnectRemove' (Required): Job Type to support polymorphic resource.
* **vmConnectRemoveJobDetails**: [VmConnectJobDetails](#vmconnectjobdetails)[] (Required): Details of VM needed to disable VM Connect


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
* **billingProperties**: [ClusterBillingProperties](#clusterbillingproperties) (ReadOnly): Billing properties of the cluster, including upcoming billing model details.
* **cloudId**: string (ReadOnly): Unique, immutable resource id.
* **cloudManagementEndpoint**: string: Endpoint configured for management from the Azure portal.
* **clusterPattern**: 'RackAware' | 'Standard' | string (ReadOnly): Supported Storage Type for HCI Cluster
* **confidentialVmProperties**: [ConfidentialVmProperties](#confidentialvmproperties) (ReadOnly): Represents the Confidential Virtual Machine (CVM) support intent and current status for the cluster resource.
* **connectivityStatus**: 'Connected' | 'Disconnected' | 'NotConnectedRecently' | 'NotSpecified' | 'NotYetRegistered' | 'PartiallyConnected' | string (ReadOnly): Overall connectivity status for the cluster resource. Indicates whether the cluster is connected to Azure, partially connected, or has not recently communicated.
* **desiredProperties**: [ClusterDesiredProperties](#clusterdesiredproperties): Desired properties of the cluster.
* **identityProvider**: 'ActiveDirectory' | 'LocalIdentity' | string (ReadOnly): Identity Provider for the cluster
* **isManagementCluster**: bool (ReadOnly): Is Management Cluster, when true indicates that the cluster is used for managing other clusters
* **isolatedVmAttestationConfiguration**: [IsolatedVmAttestationConfiguration](#isolatedvmattestationconfiguration) (ReadOnly): Attestation configurations for isolated VM (e.g. TVM, CVM) of the cluster.
* **lastBillingTimestamp**: string (ReadOnly): Most recent billing meter timestamp.
* **lastSyncTimestamp**: string (ReadOnly): Most recent cluster sync timestamp.
* **localAvailabilityZones**: [LocalAvailabilityZones](#localavailabilityzones)[]: Local Availability Zone information for HCI cluster
* **logCollectionProperties**: [LogCollectionProperties](#logcollectionproperties): Log Collection properties of the cluster.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state. Indicates the current lifecycle status of the resource, including creation, update, deletion, connectivity, and error states.
* **registrationTimestamp**: string (ReadOnly): First cluster sync timestamp.
* **remoteSupportProperties**: [RemoteSupportProperties](#remotesupportproperties): RemoteSupport properties of the cluster.
* **reportedProperties**: [ClusterReportedProperties](#clusterreportedproperties) (ReadOnly): Properties reported by cluster agent.
* **resourceProviderObjectId**: string (ReadOnly): Object id of RP Service Principal
* **ring**: string (ReadOnly): The ring to which this cluster belongs to.
* **sdnProperties**: [ClusterSdnProperties](#clustersdnproperties) (ReadOnly): Software Defined Networking Properties of the cluster
* **secretsLocations**: [SecretsLocationDetails](#secretslocationdetails)[]: List of secret locations.
* **serviceEndpoint**: string (ReadOnly): Region specific DataPath Endpoint of the cluster.
* **softwareAssuranceProperties**: [SoftwareAssuranceProperties](#softwareassuranceproperties): Software Assurance properties of the cluster.
* **status**: 'ConnectedRecently' | 'DeploymentFailed' | 'DeploymentInProgress' | 'DeploymentSuccess' | 'Disconnected' | 'Error' | 'NotConnectedRecently' | 'NotSpecified' | 'NotYetRegistered' | 'ValidationFailed' | 'ValidationInProgress' | 'ValidationSuccess' | string (ReadOnly): Status of the cluster agent. Indicates the current connectivity, validation, and deployment state of the agent within the cluster.
* **storageType**: 'S2D' | 'SAN' | 'SANS2D' | string (ReadOnly): Storage type of the cluster. Indicates whether the cluster uses S2D, SAN, or a combination.
* **trialDaysRemaining**: int (ReadOnly): Number of days remaining in the trial period.

## ClusterReportedProperties
### Properties
* **clusterId**: string (ReadOnly): Unique id generated by the on-prem cluster.
* **clusterName**: string (ReadOnly): Name of the on-prem cluster connected to this resource.
* **clusterType**: 'FirstParty' | 'ThirdParty' | string (ReadOnly): Specifies the type of hardware vendor for all nodes in the cluster. Indicates whether the nodes are provided by Microsoft or a third-party vendor.
* **clusterVersion**: string (ReadOnly): Version of the cluster software.
* **diagnosticLevel**: 'Basic' | 'Enhanced' | 'Off' | string: Level of diagnostic data emitted by the cluster.
* **hardwareClass**: 'Large' | 'Medium' | 'Small' | string (ReadOnly): Hardware class of the cluster.
* **imdsAttestation**: 'Disabled' | 'Enabled' | string (ReadOnly): IMDS attestation status of the cluster.
* **lastUpdated**: string (ReadOnly): Last time the cluster reported the data.
* **manufacturer**: string (ReadOnly): The manufacturer of all the nodes of the cluster.
* **msiExpirationTimeStamp**: string (ReadOnly): Specifies the expiration timestamp of the cluster's Managed Service Identity (MSI). The value is expressed in Coordinated Universal Time (UTC).
* **nodes**: [ClusterNode](#clusternode)[] (ReadOnly): List of nodes reported by the cluster.
* **oemActivation**: 'Disabled' | 'Enabled' | string (ReadOnly): OEM activation status of the cluster.
* **supportedCapabilities**: string[] (ReadOnly): Capabilities supported by the cluster.

## ClusterSdnProperties
### Properties
* **sdnApiAddress**: string (ReadOnly): Represents the API address for the SDN deployment.
* **sdnDomainName**: string (ReadOnly): The fully qualified domain name (FQDN) associated with the SDN deployment. This value is propagated from the Device Management Extension to the cluster resource. It is typically in the format `<sdnPrefix>-nc.<domain>` when SDN is enabled. May be null or absent in unsupported or disabled states.
* **sdnIntegrationIntent**: 'Disable' | 'Enable' | string (ReadOnly): Indicates whether Software Defined Networking (SDN) integration should be enabled or disabled for this deployment.
* **sdnStatus**: 'Disabled' | 'Enabled' | 'Unknown' | string (ReadOnly): Indicates the current Software Defined Networking (SDN) status of the resource, which may be an individual device or a cluster.

## ConfidentialVmProfile
### Properties
* **igvmStatus**: 'Disabled' | 'Enabled' | 'Unknown' | string (ReadOnly): Indicates whether Independent Guest Virtual Machine (IGVM) support is available on the device. This will be 'Enabled' if the device supports CVMs, 'Disabled' if not, and 'Unknown' if the status cannot be determined.
* **statusDetails**: [IgvmStatusDetail](#igvmstatusdetail)[]: Provides detailed status entries for IGVM-related components, including deployment status, compatibility checks, and error diagnostics.

## ConfidentialVmProperties
### Properties
* **confidentialVmIntent**: 'Disable' | 'Enable' | string (ReadOnly): Captures the customer's intent to enable or disable CVM support on the cluster, either during initial deployment (Day-0) or at a later stage (Day-N).
* **confidentialVmStatus**: 'Disabled' | 'Enabled' | 'PartiallyEnabled' | string (ReadOnly): Captures the current status of CVM support on the cluster.
* **confidentialVmStatusSummary**: string (ReadOnly): Additional context about CVM support on the cluster, such as reasons for partial enablement or hardware constraints.

## ContentPayload
### Properties
* **fileName**: string: Represents the file name of a update payload.
* **group**: string: Represents the group of a update payload.
* **hash**: string: Represents hash of a update payload.
* **hashAlgorithm**: string: Represents hash algorithm of a update payload.
* **identifier**: string: Represents identifier of a update payload.
* **packageSizeInBytes**: string: Represents size in bytes of a update payload.
* **url**: string: Represents url of a update payload.

## DdaDetails
### Properties
* **ddaPool**: string (ReadOnly): It is a resource pool on each server containing the clustered GPU resources.
* **workloadDetail**: [WorkloadDetails](#workloaddetails) (ReadOnly): The workload to which this GPU is assigned.

## DefaultExtensionDetails
### Properties
* **category**: string (ReadOnly): Default extension category
* **consentTime**: string (ReadOnly): Consent time for extension category

## DeploymentCluster
### Properties
* **azureServiceEndpoint**: string: For Azure blob service endpoint type, select either Default or Custom domain. If you selected **Custom domain, enter the domain for the blob service in this format core.windows.net.
* **cloudAccountName**: string: Specify the Azure Storage account name for cloud witness for your Azure Stack HCI cluster.
* **clusterPattern**: 'RackAware' | 'Standard' | string: Cluster Pattern supported.
* **hardwareClass**: 'Large' | 'Medium' | 'Small' | string (ReadOnly): Hardware class of the cluster.
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
* **assemblyInfo**: [AssemblyInfo](#assemblyinfo): Assembly Package details for Validated Solution Recipe for AzureStackHCI Cluster
* **cluster**: [DeploymentCluster](#deploymentcluster): Observability config to deploy AzureStackHCI Cluster.
* **domainFqdn**: string: FQDN to deploy cluster
* **hostNetwork**: [DeploymentSettingHostNetwork](#deploymentsettinghostnetwork): HostNetwork config to deploy AzureStackHCI Cluster.
* **identityProvider**: 'ActiveDirectory' | 'LocalIdentity' | string: Identity Provider for the cluster
* **infrastructureNetwork**: [InfrastructureNetwork](#infrastructurenetwork)[]: InfrastructureNetwork config to deploy AzureStackHCI Cluster.
* **isManagementCluster**: bool: Is Management Cluster, when true indicates that the cluster is used for managing other clusters
* **localAvailabilityZones**: [LocalAvailabilityZones](#localavailabilityzones)[]: Local Availability Zone information for HCI cluster
* **namingPrefix**: string {pattern: "^[a-zA-Z0-9-]{1,8}$"}: naming prefix to deploy cluster.
* **observability**: [Observability](#observability): Observability config to deploy AzureStackHCI Cluster.
* **optionalServices**: [OptionalServices](#optionalservices): OptionalServices config to deploy AzureStackHCI Cluster.
* **physicalNodes**: [PhysicalNodes](#physicalnodes)[]: list of physical nodes config to deploy AzureStackHCI Cluster.
* **sdnIntegration**: [SdnIntegration](#sdnintegration): SDN Integration config to deploy AzureStackHCI Cluster.
* **secrets**: [EceDeploymentSecrets](#ecedeploymentsecrets)[]: secrets used for cloud deployment.
* **secretsLocation**: string: Azure key vault endpoint. This property is deprecated from 2023-12-01-preview. Please use secrets property instead.
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

## DeploymentSettingAdapterPropertyOverrides
### Properties
* **jumboPacket**: string: This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.
* **networkDirect**: string: This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.
* **networkDirectTechnology**: string: This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation. Expected values are 'iWARP', 'RoCEv2', 'RoCE'

## DeploymentSettingHostNetwork
### Properties
* **enableStorageAutoIp**: bool: Optional parameter required only for 3 Nodes Switchless deployments. This allows users to specify IPs and Mask for Storage NICs when Network ATC is not assigning the IPs for storage automatically.
* **intents**: [DeploymentSettingIntents](#deploymentsettingintents)[]: The network intents assigned to the network reference pattern used for the deployment. Each intent will define its own name, traffic type, adapter names, and overrides as recommended by your OEM.
* **sanNetworks**: [SanNetworks](#sannetworks): SAN network configuration for the host network. Applicable when StorageType is 'SAN' or 'SANS2D'.
* **storageConnectivitySwitchless**: bool: Defines how the storage adapters between nodes are connected either switch or switch less..
* **storageNetworks**: [DeploymentSettingStorageNetworks](#deploymentsettingstoragenetworks)[]: List of StorageNetworks config to deploy AzureStackHCI Cluster.

## DeploymentSettingIntents
### Properties
* **adapter**: string[]: Array of network interfaces used for the network intent.
* **adapterPropertyOverrides**: [DeploymentSettingAdapterPropertyOverrides](#deploymentsettingadapterpropertyoverrides): Set Adapter PropertyOverrides for cluster.
* **name**: string: Name of the network intent you wish to create.
* **overrideAdapterProperty**: bool: This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.
* **overrideQosPolicy**: bool: This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.
* **overrideVirtualSwitchConfiguration**: bool: This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.
* **qosPolicyOverrides**: [QosPolicyOverrides](#qospolicyoverrides): Set QoS PolicyOverrides for cluster.
* **trafficType**: string[]: List of network traffic types. Only allowed values are 'Compute', 'Storage', 'Management'.
* **virtualSwitchConfigurationOverrides**: [DeploymentSettingVirtualSwitchConfigurationOverrides](#deploymentsettingvirtualswitchconfigurationoverrides): Set virtualSwitch ConfigurationOverrides for cluster.

## DeploymentSettingsProperties
### Properties
* **arcNodeResourceIds**: string[] (Required): Azure resource ids of Arc machines to be part of cluster.
* **deploymentConfiguration**: [DeploymentConfiguration](#deploymentconfiguration) (Required): Scale units will contains list of deployment data
* **deploymentMode**: 'Deploy' | 'Validate' | string (Required): The deployment mode for cluster deployment.
* **operationType**: 'ClusterProvisioning' | 'ClusterUpgrade' | string: The intended operation for a cluster.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): DeploymentSetting provisioning state
* **reportedProperties**: [EceReportedProperties](#ecereportedproperties) (ReadOnly): Deployment Status reported from cluster.

## DeploymentSettingStorageAdapterIPInfo
### Properties
* **ipv4Address**: string: The IPv4 address assigned to each storage adapter physical node on your Azure Stack HCI cluster.
* **physicalNode**: string: storage adapter physical node name.
* **subnetMask**: string: The SubnetMask address assigned to each storage adapter physical node on your Azure Stack HCI cluster.

## DeploymentSettingStorageNetworks
### Properties
* **name**: string: Name of the storage network.
* **networkAdapterName**: string: Name of the storage network adapter.
* **storageAdapterIPInfo**: [DeploymentSettingStorageAdapterIPInfo](#deploymentsettingstorageadapteripinfo)[]: List of Storage adapter physical nodes config to deploy AzureStackHCI Cluster.
* **vlanId**: string: ID specified for the VLAN storage network. This setting is applied to the network interfaces that route the storage and VM migration traffic.

## DeploymentSettingVirtualSwitchConfigurationOverrides
### Properties
* **enableIov**: string: Enable IoV for Virtual Switch
* **loadBalancingAlgorithm**: string: Load Balancing Algorithm for Virtual Switch

## DeploymentStep
### Properties
* **description**: string (ReadOnly): Description of step.
* **endTimeUtc**: string (ReadOnly): End time of step.
* **error**: [ErrorDetail](#errordetail) (ReadOnly): error details.
* **exception**: string[] (ReadOnly): List of exceptions in AzureStackHCI Cluster Deployment.
* **fullStepIndex**: string (ReadOnly): FullStepIndex of step.
* **name**: string (ReadOnly): Name of step.
* **startTimeUtc**: string (ReadOnly): Start time of step.
* **status**: string (ReadOnly): Status of step. Allowed values are 'Error', 'Success', 'InProgress'
* **steps**: [DeploymentStep](#deploymentstep)[] (ReadOnly): List of nested steps of AzureStackHCI Cluster Deployment.

## DeviceConfiguration
### Properties
* **deviceMetadata**: string: Device metadata details.
* **nicDetails**: [NicDetail](#nicdetail)[]: NIC Details of device

## DeviceDetail
### Properties
* **claimedBy**: string (ReadOnly): Identifier of the group the device belongs to.
* **deviceResourceId**: string: Resource Id of the device.

## DevicePoolProperties
### Properties
* **cloudId**: string (ReadOnly): Unique, immutable resource id.
* **customLocationName**: string: Custom Location Name for the pool, default: <DevicePoolName>-CL
* **customLocationResourceId**: string (ReadOnly): Custom Location Resource Id for the pool
* **devices**: [DeviceDetail](#devicedetail)[]: List of machines in device pool.
* **managedResourceGroup**: string: Managed resource group name for the pool
* **operationDetails**: [OperationDetail](#operationdetail)[] (ReadOnly): operation status details for device pool.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of a resource.

## DiskActionStatus
### Properties
* **status**: string (ReadOnly): Status of ECE action Disk Job.
* **steps**: [DiskDeploymentStep](#diskdeploymentstep)[] (ReadOnly): List of steps of Disk Job.

## DiskConfiguration
### Properties
* **volumes**: [DiskVolumeConfiguration](#diskvolumeconfiguration)[]: List of desired volumes on this disk.

## DiskDeploymentStep
### Properties
* **description**: string (ReadOnly): Description of step.
* **endTimeUtc**: string (ReadOnly): End time of step.
* **exception**: string[] (ReadOnly): List of exceptions.
* **fullStepIndex**: string (ReadOnly): FullStepIndex of step.
* **name**: string (ReadOnly): Name of step.
* **startTimeUtc**: string (ReadOnly): Start time of step.
* **status**: string (ReadOnly): Status of step (Error, Success, InProgress).
* **steps**: [DiskDeploymentStep](#diskdeploymentstep)[] (ReadOnly): List of nested steps.

## DiskJobReportedProperties
### Properties
* **deploymentStatus**: [DiskActionStatus](#diskactionstatus) (ReadOnly): Deployment status of Disk Job.
* **percentComplete**: int (ReadOnly): Percentage of job completion.
* **validationStatus**: [DiskActionStatus](#diskactionstatus) (ReadOnly): Validation status of Disk Job.

## DiskReportedProperties
### Properties
* **busLocation**: string (ReadOnly): Bus location of the disk.
* **diskName**: string (ReadOnly): The actual disk name as reported by the OS.
* **diskType**: 'HDD' | 'NVMe' | 'Other' | 'SATA' | 'SCM' | 'SSD' | 'Unknown' | 'Virtual' | string (ReadOnly): Type of the disk.
* **firmwareVersion**: string (ReadOnly): Firmware version.
* **manufacturer**: string (ReadOnly): The manufacturer of the disk.
* **model**: string (ReadOnly): Model number of the hardware.
* **serialNumber**: string (ReadOnly): Serial number.
* **sizeInBytes**: string (ReadOnly): Size in bytes.
* **state**: 'Failed' | 'Missing' | 'Offline' | 'Online' | 'Unknown' | string (ReadOnly): Current state of the disk.
* **unallocatedSizeInBytes**: string (ReadOnly): Unallocated space on the disk in bytes.
* **volumes**: [DiskVolumeReportedProperties](#diskvolumereportedproperties)[] (ReadOnly): List of volumes on this disk.

## DiskVolumeConfiguration
### Properties
* **fileSystem**: 'NTFS' | 'ReFS' | 'ext4' | 'fat' | 'fat32' | 'vfat' | 'xfs' | string: File system type to format the volume with.
* **path**: string (Required): Mount path for the volume (e.g., /data or D:\data).
* **sizeInBytes**: string (Required): Size of the volume in bytes.

## DiskVolumeReportedProperties
### Properties
* **fileSystem**: string (ReadOnly): File system type.
* **isBoot**: bool (ReadOnly): Indicates if this volume is a boot volume.
* **name**: string (ReadOnly): Name of the volume.
* **offsetInBytes**: int (ReadOnly): Byte offset of the partition start.
* **partitionId**: string (ReadOnly): Unique identifier for the partition.
* **partitionNumber**: int (ReadOnly): Partition number.
* **path**: string (ReadOnly): Mount path for the volume.
* **resourceName**: string (ReadOnly): Resource name of the volume.
* **sizeInBytes**: string (ReadOnly): Size of the volume in bytes.
* **sizeRemainingInBytes**: string (ReadOnly): Available space on the volume in bytes.

## DnsZones
### Properties
* **dnsForwarder**: string[]: Forwarder details of the DNS Zone to be configured.
* **dnsZoneName**: string: Name of the DNS Zone to be configured.

## DownloadOsProfile
### Properties
* **gpgPubKey**: string: GPG Public Key used for package verification
* **imageHash**: string: Hash of the OS package downloaded
* **osImageLocation**: string: Location of the operating system image.
* **osName**: string: Name of the operating system.
* **osType**: string: Type of the operating system.
* **osVersion**: string: Version of the operating system.
* **vsrVersion**: string: Validated Solution Recipe version to be used for the job

## DownloadRequest
### Properties
* **osProfile**: [DownloadOsProfile](#downloadosprofile) (Required): Operating system profile.
* **target**: 'AzureLinux' | 'HCI' | string (Required): Target operating system to support polymorphic resource.

## EceActionStatus
### Properties
* **status**: string (ReadOnly): Status of ECE action AzureStackHCI Cluster Deployment.
* **steps**: [DeploymentStep](#deploymentstep)[] (ReadOnly): List of steps of AzureStackHCI Cluster Deployment.

## EceDeploymentSecrets
### Properties
* **eceSecretName**: 'AzureStackLCMUserCredential' | 'DefaultARBApplication' | 'LocalAdminCredential' | 'WitnessStorageKey' | string: Secret name expected for Enterprise Cloud Engine (ECE) deployment.
* **secretLocation**: string: Secret URI stored in keyvault.
* **secretName**: string: Secret name stored in keyvault.

## EceReportedProperties
### Properties
* **deploymentStatus**: [EceActionStatus](#eceactionstatus) (ReadOnly): Deployment status of AzureStackHCI Cluster Deployment.
* **validationStatus**: [EceActionStatus](#eceactionstatus) (ReadOnly): validation status of AzureStackHCI Cluster Deployment.

## EdgeDeviceDisks
### Properties
* **id**: string (Required, ReadOnly): The unique identifier of the disk.
* **isSupported**: bool (ReadOnly): Indicates whether the manufacturer is supported.
* **manufacturer**: string (ReadOnly): The manufacturer of the disk.
* **model**: string (ReadOnly): Model number of the hardware.
* **sizeInBytes**: string (ReadOnly): The size of the disk in bytes.
* **type**: string (ReadOnly): The type of the disk. For example, S2D or SAN.

## EdgeMachineCollectLogJobReportedProperties
### Properties
* **deploymentStatus**: [EceActionStatus](#eceactionstatus) (ReadOnly): Deployment status of job.
* **logCollectionSessionDetails**: [LogCollectionJobSession](#logcollectionjobsession)[] (ReadOnly): Details of the log collection session.
* **percentComplete**: int (ReadOnly): The percentage of the job that is complete.
* **validationStatus**: [EceActionStatus](#eceactionstatus) (ReadOnly): Validation status of job.

## EdgeMachineDiskJobProperties
* **Discriminator**: jobType

### Base Properties
* **deploymentMode**: 'Deploy' | 'Validate' | string: Deployment mode to trigger job.
* **endTimeUtc**: string (ReadOnly): The UTC date and time at which the job completed.
* **error**: [ErrorDetail](#errordetail) (ReadOnly): Error details if job failed.
* **jobId**: string (ReadOnly): Unique, immutable job id.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Job provisioning state.
* **reportedProperties**: [DiskJobReportedProperties](#diskjobreportedproperties) (ReadOnly): Properties reported by the job execution.
* **startTimeUtc**: string (ReadOnly): The UTC date and time at which the job started.
* **status**: 'Canceled' | 'DeploymentFailed' | 'DeploymentInProgress' | 'DeploymentSuccess' | 'Failed' | 'NotSpecified' | 'Paused' | 'Scheduled' | 'Succeeded' | 'ValidationFailed' | 'ValidationInProgress' | 'ValidationSuccess' | string (ReadOnly): Status of disk job.

### CreateVolumeJobProperties
#### Properties
* **createdVolumeId**: string (ReadOnly): ARM resource ID of the created volume.
* **fileSystem**: 'NTFS' | 'ReFS' | 'ext4' | 'fat' | 'fat32' | 'vfat' | 'xfs' | string (WriteOnly): File system type to format the volume with.
* **jobType**: 'CreateVolume' (Required): Job Type to support polymorphic resource.
* **path**: string (Required): Absolute path where the volume should be mounted.
* **sizeInBytes**: string (Required): Size of the volume to create in bytes.

### SyncConfigurationJobProperties
#### Properties
* **jobType**: 'SyncConfiguration' (Required): Job Type to support polymorphic resource.
* **resolutionStrategy**: 'AcceptReported' | 'ApplyDesired' | string (Required, WriteOnly): The strategy to use for resolving the configuration drift.


## EdgeMachineDiskPrivilegedJobProperties
* **Discriminator**: jobType

### Base Properties
* **deploymentMode**: 'Deploy' | 'Validate' | string: Deployment mode to trigger job.
* **endTimeUtc**: string (ReadOnly): The UTC date and time at which the job completed.
* **error**: [ErrorDetail](#errordetail) (ReadOnly): Error details if job failed.
* **jobId**: string (ReadOnly): Unique, immutable job id.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Job provisioning state.
* **reportedProperties**: [DiskJobReportedProperties](#diskjobreportedproperties) (ReadOnly): Properties reported by the job execution.
* **startTimeUtc**: string (ReadOnly): The UTC date and time at which the job started.
* **status**: 'Canceled' | 'DeploymentFailed' | 'DeploymentInProgress' | 'DeploymentSuccess' | 'Failed' | 'NotSpecified' | 'Paused' | 'Scheduled' | 'Succeeded' | 'ValidationFailed' | 'ValidationInProgress' | 'ValidationSuccess' | string (ReadOnly): Status of disk job.

### DeleteVolumeJobProperties
#### Properties
* **confirmDeletion**: bool: Confirmation flag that must be set to true to proceed with deletion.
* **jobType**: 'DeleteVolume' (Required): Privileged Job Type to support polymorphic resource.
* **volumePath**: string (Required): The mount path of the volume to delete.


## EdgeMachineDiskProperties
### Properties
* **diskConfiguration**: [DiskConfiguration](#diskconfiguration): The authoritative desired configuration for this disk.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the disk resource.
* **reportedProperties**: [DiskReportedProperties](#diskreportedproperties) (ReadOnly): The actual state of the disk as reported by the device.

## EdgeMachineGpuJobProperties
* **Discriminator**: jobType

### Base Properties
* **deploymentMode**: 'Deploy' | 'Validate' | string: Deployment mode for the GPU job.
* **endTimeUtc**: string (ReadOnly): The UTC date and time at which the job completed.
* **error**: [ErrorDetail](#errordetail) (ReadOnly): Error details.
* **gpuId**: string (ReadOnly): The ID of the GPU on which the job is to be performed.
* **jobId**: string (ReadOnly): Unique, immutable job id.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Job provisioning state
* **reportedProperties**: [JobReportedProperties](#jobreportedproperties) (ReadOnly): Reported properties specific to the GPU job.
* **startTimeUtc**: string (ReadOnly): The UTC date and time at which the job started.
* **status**: 'Canceled' | 'DeploymentFailed' | 'DeploymentInProgress' | 'DeploymentSuccess' | 'Failed' | 'NotSpecified' | 'Paused' | 'Scheduled' | 'Succeeded' | 'ValidationFailed' | 'ValidationInProgress' | 'ValidationSuccess' | string (ReadOnly): Status of GPU job.

### AssignPartitionGpuJobProperties
#### Properties
* **jobType**: 'AssignPartition' (Required): Type of GPU job to be performed.
* **vmId**: string (Required): Virtual machine ID to which the GPU partition is assigned.

### CreatePartitionGpuJobProperties
#### Properties
* **jobType**: 'CreatePartition' (Required): Type of GPU job to be performed.
* **partitionCount**: int (Required): Number of partitions to be created on the GPU.

### RemovePartitionGpuJobProperties
#### Properties
* **jobType**: 'RemovePartition' (Required): Type of GPU job to be performed.
* **vmId**: string (Required): Virtual machine ID from which the GPU partition is removed.

### SwitchModeGpuJobProperties
#### Properties
* **jobType**: 'SwitchMode' (Required): Type of GPU job to be performed.
* **mode**: 'DDA' | 'GPUP' | 'Unknown' | string (Required): Desired GPU mode to switch to.


## EdgeMachineGpuProperties
### Properties
* **acceleratorType**: string (ReadOnly): The type of the accelerator.
* **assignable**: bool (ReadOnly): Indicates whether the GPU is assignable.
* **assignmentStatus**: string (ReadOnly): This is the assignment status of the GPU.
* **ddaDetails**: [DdaDetails](#ddadetails) (ReadOnly): Details of the workload using DDA mode.
* **gpuId**: string (ReadOnly): Represents the instance Id of the GPU.
* **gpuMode**: 'DDA' | 'GPUP' | 'Unknown' | string (ReadOnly): Specified by admin whether this GPU can be used as DDA, GPU-P with LM. Can only be updated when the GPU is not attached to any VM.
* **hostDriverVersion**: string (ReadOnly): This is the host driver for the host on which GPU is assigned, only for DDA
* **manufacturer**: string (ReadOnly): The vendor of the GPU.
* **memoryModel**: string (ReadOnly): The memory model of the GPU. Possible values are 'Dedicated VRAM', 'Unified (Shared System Memory)', and 'Unified (SoC LPDDR)'.
* **model**: string (ReadOnly): The model of the GPU.
* **partitionable**: bool (ReadOnly): Indicates whether the GPU is partitionable.
* **partitionDetails**: [GpuPartitionDetails](#gpupartitiondetails) (ReadOnly): Details of the GPU specifically in GPU-P mode.
* **pciLocation**: string (ReadOnly): The PCI location of the GPU.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the GPU.
* **status**: string (ReadOnly): The status of the GPU.
* **totalMemoryInBytes**: string (ReadOnly): The total memory of the GPU in bytes.

## EdgeMachineJobProperties
* **Discriminator**: jobType

### Base Properties
* **deploymentMode**: 'Deploy' | 'Validate' | string: Deployment mode to trigger job.
* **endTimeUtc**: string (ReadOnly): The UTC date and time at which the job completed.
* **error**: [ErrorDetail](#errordetail) (ReadOnly): error details.
* **jobId**: string (ReadOnly): Unique, immutable job id.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Job provisioning state
* **startTimeUtc**: string (ReadOnly): The UTC date and time at which the job started.
* **status**: 'Canceled' | 'DeploymentFailed' | 'DeploymentInProgress' | 'DeploymentSuccess' | 'Failed' | 'NotSpecified' | 'Paused' | 'Scheduled' | 'Succeeded' | 'ValidationFailed' | 'ValidationInProgress' | 'ValidationSuccess' | string (ReadOnly): Status of Edge device job.

### EdgeMachineCollectLogJobProperties
#### Properties
* **fromDate**: string (Required): From date for log collection.
* **jobType**: 'CollectLog' (Required): Job Type to support polymorphic resource.
* **lastLogGenerated**: string (ReadOnly): To date for log collection.
* **reportedProperties**: [EdgeMachineCollectLogJobReportedProperties](#edgemachinecollectlogjobreportedproperties) (ReadOnly): log collection job reported properties.
* **toDate**: string (Required): To date for log collection.

### DownloadOsJobProperties
#### Properties
* **downloadRequest**: [DownloadRequest](#downloadrequest) (Required): Download OS request.
* **jobType**: 'DownloadOs' (Required): Job Type to support polymorphic resource.
* **reportedProperties**: [ProvisionOsReportedProperties](#provisionosreportedproperties): Reported Properties for Download Os job

### ProvisionOsJobProperties
#### Properties
* **jobType**: 'ProvisionOs' (Required): Job Type to support polymorphic resource.
* **provisioningRequest**: [ProvisioningRequest](#provisioningrequest) (Required): Os Provisioning request.
* **reportedProperties**: [ProvisionOsReportedProperties](#provisionosreportedproperties): Reported Properties for Provision Os job

### EdgeMachineRemoteSupportJobProperties
#### Properties
* **accessLevel**: 'Diagnostics' | 'DiagnosticsAndRepair' | 'None' | string (Required): Remote support access level.
* **expirationTimestamp**: string (Required): Remote support expiration timestamp.
* **jobType**: 'RemoteSupport' (Required): Job Type to support polymorphic resource.
* **reportedProperties**: [EdgeMachineRemoteSupportJobReportedProperties](#edgemachineremotesupportjobreportedproperties) (ReadOnly): log collection job reported properties.
* **type**: 'Enable' | 'Revoke' | string (Required): Remote support type.


## EdgeMachineNetworkAdapterJobProperties
* **Discriminator**: jobType

### Base Properties
* **deploymentMode**: 'Deploy' | 'Validate' | string: Deployment mode to trigger job.
* **endTimeUtc**: string (ReadOnly): The UTC date and time at which the job completed.
* **error**: [ErrorDetail](#errordetail) (ReadOnly): Error details if job failed.
* **jobId**: string (ReadOnly): Unique, immutable job id.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the job.
* **reportedProperties**: [NetworkAdapterJobReportedProperties](#networkadapterjobreportedproperties) (ReadOnly): Reported properties for Network Adapter Job.
* **startTimeUtc**: string (ReadOnly): The UTC date and time at which the job started.
* **status**: 'Canceled' | 'DeploymentFailed' | 'DeploymentInProgress' | 'DeploymentSuccess' | 'Failed' | 'NotSpecified' | 'Paused' | 'Scheduled' | 'Succeeded' | 'ValidationFailed' | 'ValidationInProgress' | 'ValidationSuccess' | string (ReadOnly): Status of Edge device job.

### ApplyConfigurationNetworkAdapterJobProperties
#### Properties
* **jobType**: 'ApplyConfiguration' (Required): Type of operation.
* **targetConfiguration**: [NetworkAdapterConfiguration](#networkadapterconfiguration) (Required): The desired network configuration to apply.

### ForcePushNetworkAdapterJobProperties
#### Properties
* **jobType**: 'ForcePush' (Required): Type of operation.

### SyncConfigurationNetworkAdapterJobProperties
#### Properties
* **jobType**: 'SyncConfiguration' (Required): Type of operation.
* **resolutionStrategy**: 'AcceptReported' | 'ApplyDesired' | string (Required, WriteOnly): The strategy to use for resolving the configuration drift.


## EdgeMachineNetworkAdapterProperties
### Properties
* **networkConfiguration**: [NetworkAdapterConfiguration](#networkadapterconfiguration): The authoritative desired configuration for this specific interface.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the network adapter resource.
* **reportedProperties**: [NetworkAdapterReportedProperties](#networkadapterreportedproperties) (ReadOnly): The actual applied configuration reported by the device.

## EdgeMachineNetworkProfile
### Properties
* **nicDetails**: [EdgeMachineNicDetail](#edgemachinenicdetail)[] (ReadOnly): List of Network Interface Card (NIC) Details of edge machine.
* **switchDetails**: [SwitchDetail](#switchdetail)[] (ReadOnly): List of switch Details of edge machine.

## EdgeMachineNicDetail
### Properties
* **adapterName**: string (ReadOnly): Adapter Name of NIC
* **componentId**: string (ReadOnly): Component Id of NIC
* **defaultGateway**: string (ReadOnly): Default Gateway of NIC
* **defaultIsolationId**: string (ReadOnly): Default Isolation of Management NIC
* **dnsServers**: string[] (ReadOnly): DNS Servers for NIC
* **driverVersion**: string (ReadOnly): Driver Version of NIC
* **interfaceDescription**: string (ReadOnly): Interface Description of NIC
* **ip4Address**: string (ReadOnly): Subnet Mask of NIC
* **macAddress**: string (ReadOnly): MAC address information of NIC.
* **nicStatus**: string (ReadOnly): The status of NIC, up, disconnected.
* **nicType**: string (ReadOnly): The type of NIC, physical, virtual, management.
* **rdmaCapability**: 'Disabled' | 'Enabled' | string (ReadOnly): Describes the RDMA capability of the network adapter.
* **slot**: string (ReadOnly): The slot attached to the NIC.
* **subnetMask**: string (ReadOnly): Subnet Mask of NIC
* **switchName**: string (ReadOnly): The switch attached to the NIC, if any.
* **vlanId**: string (ReadOnly): The VLAN ID of the physical NIC.

## EdgeMachineProperties
### Properties
* **arcGatewayResourceId**: string: Link to Arc Gateway ARM resource Id
* **arcMachineResourceGroupId**: string: Optional property to create arc machine in custom resource group.
* **arcMachineResourceId**: string: Arc machine instance resource id.
* **claimedBy**: string (ReadOnly): Tracks the ID of the consuming resource, setting the machine as in-use.
* **cloudId**: string (ReadOnly): Unique, immutable resource id.
* **connectivityStatus**: 'Connected' | 'Disconnected' | 'NotSpecified' | string (ReadOnly): machine connectivity status
* **devicePoolResourceId**: string (ReadOnly): A machine can only be assigned to single device pool
* **edgeMachineKind**: 'Dedicated' | 'Standard' | string: Edge Machine type.
* **lastSyncTimestamp**: string (ReadOnly): Last time data updated to service.
* **lifecycleDetails**: [LifecycleDetails](#lifecycledetails) (ReadOnly): Lifecycle details of the resource
* **machineState**: 'Created' | 'Failed' | 'Preparing' | 'Purposed' | 'Registering' | 'Resetting' | 'Transitioning' | 'Unpurposed' | 'Updating' | string (ReadOnly): OS configuration status details
* **operationDetails**: [OperationDetail](#operationdetail)[] (ReadOnly): operation status details for edge machine.
* **ownershipVoucherDetails**: [OwnershipVoucherDetails](#ownershipvoucherdetails): Ownership voucher details for provisioned machine.
* **provisioningDetails**: [ProvisioningDetails](#provisioningdetails): Details for device provisioning.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of a resource.
* **reportedProperties**: [EdgeMachineReportedProperties](#edgemachinereportedproperties) (ReadOnly): Reported properties for edge machine.
* **siteDetails**: [SiteDetails](#sitedetails): Service fetches common configuration from site.

## EdgeMachineRemoteSupportJobReportedProperties
### Properties
* **deploymentStatus**: [EceActionStatus](#eceactionstatus) (ReadOnly): Deployment status of job.
* **nodeSettings**: [EdgeMachineRemoteSupportNodeSettings](#edgemachineremotesupportnodesettings) (ReadOnly): Optional settings for configuring the node for remote support.
* **percentComplete**: int (ReadOnly): The percentage of the job that is complete.
* **sessionDetails**: [RemoteSupportSession](#remotesupportsession)[] (ReadOnly): Details of the remote support session.
* **validationStatus**: [EceActionStatus](#eceactionstatus) (ReadOnly): Validation status of job.

## EdgeMachineRemoteSupportNodeSettings
### Properties
* **connectionErrorMessage**: string (ReadOnly): The error message, if any, from the last connection attempt.
* **connectionStatus**: string (ReadOnly): The current connection status of the remote support session.
* **createdAt**: string (ReadOnly): The timestamp when the node settings were created, in UTC.
* **state**: string (ReadOnly): The state of the remote support node.
* **updatedAt**: string (ReadOnly): The timestamp when the node settings were last updated, in UTC.

## EdgeMachineReportedProperties
### Properties
* **extensionProfile**: [ExtensionProfile](#extensionprofile) (ReadOnly): Extension details for edge machine.
* **hardwareProfile**: [HardwareProfile](#hardwareprofile) (ReadOnly): Hardware related information for edge machine.
* **lastUpdated**: string (ReadOnly): Last time data reported.
* **networkProfile**: [EdgeMachineNetworkProfile](#edgemachinenetworkprofile) (ReadOnly): Network details for edge machine.
* **osProfile**: [OsProfile](#osprofile) (ReadOnly): OS Properties for edge machine.
* **sbeDeploymentPackageInfo**: [SbeDeploymentPackageInfo](#sbedeploymentpackageinfo) (ReadOnly): Solution builder extension (SBE) deployment package information.
* **storageProfile**: [StorageProfile](#storageprofile) (ReadOnly): Storage related information for edge machine.
* **workloadInventory**: [EdgeMachineWorkloadInventoryItem](#edgemachineworkloadinventoryitem)[] (ReadOnly): Read-only Hyper-V VM inventory reported by the device management extension for VMs visible on this node.
* **workloadInventoryLastUpdated**: string (ReadOnly): Last time the device management extension refreshed the local Hyper-V workload inventory.

## EdgeMachineUpdateInfo
### Properties
* **arcAgentVersion**: string: The Arc agent version included in this update.
* **displayName**: string: The display name of the update.
* **estimatedInstallTimeMinutes**: int: Estimated time in minutes to install this update.
* **rebootRequired**: bool: Indicates whether a reboot is required after installing this update.
* **releaseNotesLink**: string: Link to the release notes for this update.
* **totalSizeBytes**: int: Total size of the update in bytes.
* **updateType**: string: The type of update (e.g., FullImage).
* **vsrVersion**: string (Required): The VSR version of the update.

## EdgeMachineUpdateProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the updates resource.
* **solutionType**: 'AzureLinux' | 'HCI' | string: The solution type for the available updates.
* **values**: [EdgeMachineUpdateInfo](#edgemachineupdateinfo)[] (Required): The list of available updates.

## EdgeMachineVolumeProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the volume resource.
* **reportedProperties**: [VolumeReportedProperties](#volumereportedproperties) (ReadOnly): The actual state of the volume as reported by the device.
* **volumeConfiguration**: [VolumeConfiguration](#volumeconfiguration): Desired configuration for this volume.

## EdgeMachineWorkloadInventoryItem
### Properties
* **memoryInBytes**: string (ReadOnly): Maximum memory the VM can consume, in bytes.
* **name**: string (ReadOnly): Hyper-V VM name.
* **resourceId**: string (ReadOnly): Optional ARM resource ID when the service can map the local VM to an ARM resource.
* **state**: string (ReadOnly): Hyper-V VM state reported by the node.
* **virtualProcessorCount**: string (ReadOnly): Configured virtual processor count from Hyper-V.
* **workloadId**: string (ReadOnly): Stable device-reported workload identifier, such as the Hyper-V VM ID when available.
* **workloadType**: string (ReadOnly): Workload type. For v1 this should be VirtualMachine.

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
* **level**: 'Error' | 'Info' | 'Warning' | string: The level code. Indicates the severity or importance of the status message.
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

## ExtensionProfile
### Properties
* **extensions**: [HciEdgeDeviceArcExtension](#hciedgedevicearcextension)[] (ReadOnly): List of Arc extensions installed on edge device.

## ExtensionProperties
### Properties
* **aggregateState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | 'UpgradeFailedRollbackSucceeded' | string (ReadOnly): Aggregate state of Arc Extensions across the nodes in this HCI cluster. This reflects the overall status of the extension deployment and operation across all nodes.
* **extensionParameters**: [ExtensionParameters](#extensionparameters): Parameters specific to this extension type.
* **managedBy**: 'Azure' | 'User' | string (ReadOnly): Indicates if the extension is managed by Azure or the user. This determines who controls the deployment and lifecycle of the extension.
* **perNodeExtensionDetails**: [PerNodeExtensionState](#pernodeextensionstate)[] (ReadOnly): State of Arc Extension in each of the nodes.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the Extension proxy resource. Indicates the current lifecycle status of the resource, such as whether it's being created, updated, deleted, or has encountered an error.

## GpuPartitionDetails
### Properties
* **assignedPartitions**: int (ReadOnly): This is the count of assigned partitions.
* **availableDecode**: string (ReadOnly): It is the available processing power to decode video.
* **availableEncode**: string (ReadOnly): It is the available processing power to encode video.
* **availablePartitions**: int (ReadOnly): The number of available partitions.
* **availableVram**: string (ReadOnly): It is a high-speed memory which drivers allow the GPU to borrow from system memory.
* **partitionableGpuName**: string: The name used by Hyper-V commandlets for GPU partitioning
* **partitions**: [PartitionDetails](#partitiondetails)[] (ReadOnly): partition details to which GPU is assigned.
* **partitionSizeMb**: string (ReadOnly): Reported partition size in MB (default: 0 for DDA) For e.g. 2, 4, etc.
* **totalPartitions**: int (ReadOnly): This is the count of total partitions.
* **totalVram**: string (ReadOnly): VRAM (Video Random-Access Memory) is the total RAM that is plugged into your GPU and acts as temporary storage for data related to graphics rendering.
* **validPartitionCount**: string[] (ReadOnly): IA set of valid partition counts that's predefined to configure.

## HardwareProfile
### Properties
* **cpuCores**: int (ReadOnly): Number of cpu cores in the machine
* **cpuSockets**: int (ReadOnly): Number of cpu sockets in the machine
* **manufacturer**: string (ReadOnly): manufacturer info of the machine
* **memoryCapacityInGb**: int (ReadOnly): Memory capacity of the machine
* **model**: string (ReadOnly): Model info of the machine
* **processorType**: string (ReadOnly): Process type of the machine
* **serialNumber**: string (ReadOnly): Serial number of the machine

## HciEdgeDeviceAdapterPropertyOverrides
### Properties
* **jumboPacket**: string (ReadOnly): This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.
* **networkDirect**: string (ReadOnly): This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.
* **networkDirectTechnology**: string (ReadOnly): This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation. Expected values are 'iWARP', 'RoCEv2', 'RoCE'

## HciEdgeDeviceArcExtension
### Properties
* **errorDetails**: [HciValidationFailureDetail](#hcivalidationfailuredetail)[] (ReadOnly): Error details while installing Arc extension.
* **extensionName**: string (ReadOnly): Arc extension name installed on edge device.
* **extensionResourceId**: string (ReadOnly): Arc Extension Azure resource id.
* **managedBy**: 'Azure' | 'User' | string (ReadOnly): Indicates whether the extension is managed by the user or by Azure.
* **state**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Moving' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Arc extension state from arc machine extension.
* **typeHandlerVersion**: string (ReadOnly): Extension version installed.

## HciEdgeDeviceHostNetwork
### Properties
* **enableStorageAutoIp**: bool (ReadOnly): Optional parameter required only for 3 Nodes Switchless deployments. This allows users to specify IPs and Mask for Storage NICs when Network ATC is not assigning the IPs for storage automatically.
* **intents**: [HciEdgeDeviceIntents](#hciedgedeviceintents)[] (ReadOnly): The network intents assigned to the network reference pattern used for the deployment. Each intent will define its own name, traffic type, adapter names, and overrides as recommended by your OEM.
* **storageConnectivitySwitchless**: bool (ReadOnly): Defines how the storage adapters between nodes are connected either switch or switch less.
* **storageNetworks**: [HciEdgeDeviceStorageNetworks](#hciedgedevicestoragenetworks)[] (ReadOnly): List of StorageNetworks config to deploy AzureStackHCI Cluster.

## HciEdgeDeviceIntents
### Properties
* **adapterPropertyOverrides**: [HciEdgeDeviceAdapterPropertyOverrides](#hciedgedeviceadapterpropertyoverrides) (ReadOnly): Set Adapter PropertyOverrides for cluster.
* **intentAdapters**: string[] (ReadOnly): Array of adapters used for the network intent.
* **intentName**: string (ReadOnly): Name of the network intent you wish to create.
* **intentType**: int (ReadOnly): IntentType for host network intent.
* **isComputeIntentSet**: bool (ReadOnly): IsComputeIntentSet for host network intent.
* **isManagementIntentSet**: bool (ReadOnly): IsManagementIntentSet for host network intent.
* **isNetworkIntentType**: bool (ReadOnly): IsNetworkIntentType for host network intent.
* **isOnlyStorage**: bool (ReadOnly): IntentType for host network intent.
* **isOnlyStretch**: bool (ReadOnly): IsOnlyStretch for host network intent.
* **isStorageIntentSet**: bool (ReadOnly): IsStorageIntentSet for host network intent.
* **isStretchIntentSet**: bool (ReadOnly): IsStretchIntentSet for host network intent.
* **overrideAdapterProperty**: bool (ReadOnly): This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.
* **overrideQosPolicy**: bool (ReadOnly): This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.
* **overrideVirtualSwitchConfiguration**: bool (ReadOnly): This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.
* **qosPolicyOverrides**: [QosPolicyOverrides](#qospolicyoverrides) (ReadOnly): Set QoS PolicyOverrides for cluster.
* **scope**: int (ReadOnly): Scope for host network intent.
* **virtualSwitchConfigurationOverrides**: [HciEdgeDeviceVirtualSwitchConfigurationOverrides](#hciedgedevicevirtualswitchconfigurationoverrides) (ReadOnly): Set virtualSwitch ConfigurationOverrides for cluster.

## HciEdgeDeviceJobProperties
* **Discriminator**: jobType

### Base Properties
* **deploymentMode**: 'Deploy' | 'Validate' | string: Deployment mode to trigger job.
* **endTimeUtc**: string (ReadOnly): The UTC date and time at which the job completed.
* **jobId**: string (ReadOnly): Unique, immutable job id.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Job provisioning state
* **startTimeUtc**: string (ReadOnly): The UTC date and time at which the job started.
* **status**: 'Canceled' | 'DeploymentFailed' | 'DeploymentInProgress' | 'DeploymentSuccess' | 'Failed' | 'NotSpecified' | 'Paused' | 'Scheduled' | 'Succeeded' | 'ValidationFailed' | 'ValidationInProgress' | 'ValidationSuccess' | string (ReadOnly): Status of Edge device job.

### HciCollectLogJobProperties
#### Properties
* **fromDate**: string (Required): From date for log collection.
* **jobType**: 'CollectLog' (Required): Job Type to support polymorphic resource.
* **lastLogGenerated**: string (ReadOnly): To date for log collection.
* **reportedProperties**: [LogCollectionReportedProperties](#logcollectionreportedproperties) (ReadOnly): log collection job reported properties.
* **toDate**: string (Required): To date for log collection.

### HciRemoteSupportJobProperties
#### Properties
* **accessLevel**: 'Diagnostics' | 'DiagnosticsAndRepair' | 'None' | string (Required): Remote support access level.
* **expirationTimestamp**: string (Required): Remote support expiration timestamp.
* **jobType**: 'RemoteSupport' (Required): Job Type to support polymorphic resource.
* **reportedProperties**: [RemoteSupportJobReportedProperties](#remotesupportjobreportedproperties) (ReadOnly): log collection job reported properties.
* **type**: 'Enable' | 'Revoke' | string (Required): Remote support type.


## HciEdgeDeviceProperties
### Properties
* **deviceConfiguration**: [DeviceConfiguration](#deviceconfiguration): Device Configuration
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of edgeDevice resource
* **reportedProperties**: [HciReportedProperties](#hcireportedproperties) (ReadOnly): The instance view of all current configurations on HCI device.

## HciEdgeDeviceStorageAdapterIPInfo
### Properties
* **ipv4Address**: string (ReadOnly): The IPv4 address assigned to each storage adapter physical node on your Azure Stack HCI cluster.
* **physicalNode**: string (ReadOnly): storage adapter physical node name.
* **subnetMask**: string (ReadOnly): The SubnetMask address assigned to each storage adapter physical node on your Azure Stack HCI cluster.

## HciEdgeDeviceStorageNetworks
### Properties
* **name**: string (ReadOnly): Name of the storage network.
* **networkAdapterName**: string (ReadOnly): Name of the storage network adapter.
* **storageAdapterIPInfo**: [HciEdgeDeviceStorageAdapterIPInfo](#hciedgedevicestorageadapteripinfo)[] (ReadOnly): List of Storage adapter physical nodes config to deploy AzureStackHCI Cluster.
* **storageVlanId**: string (ReadOnly): ID specified for the VLAN storage network. This setting is applied to the network interfaces that route the storage and VM migration traffic.

## HciEdgeDeviceVirtualSwitchConfigurationOverrides
### Properties
* **enableIov**: string (ReadOnly): Enable IoV for Virtual Switch
* **loadBalancingAlgorithm**: string (ReadOnly): Load Balancing Algorithm for Virtual Switch

## HciHardwareProfile
### Properties
* **processorType**: string (ReadOnly): Process type of the device

## HciNetworkProfile
### Properties
* **hostNetwork**: [HciEdgeDeviceHostNetwork](#hciedgedevicehostnetwork) (ReadOnly): HostNetwork config to deploy AzureStackHCI Cluster.
* **nicDetails**: [HciNicDetail](#hcinicdetail)[] (ReadOnly): List of NIC Details of device.
* **sdnProperties**: [SdnProperties](#sdnproperties) (ReadOnly): Software Defined Networking Properties of the device.
* **switchDetails**: [SwitchDetail](#switchdetail)[] (ReadOnly): List of switch details for edge device.

## HciNicDetail
### Properties
* **adapterName**: string (ReadOnly): Adapter Name of NIC
* **componentId**: string (ReadOnly): Component Id of NIC
* **defaultGateway**: string (ReadOnly): Default Gateway of NIC
* **defaultIsolationId**: string (ReadOnly): Default Isolation of Management NIC
* **dnsServers**: string[] (ReadOnly): DNS Servers for NIC
* **driverVersion**: string (ReadOnly): Driver Version of NIC
* **interfaceDescription**: string (ReadOnly): Interface Description of NIC
* **ip4Address**: string (ReadOnly): Subnet Mask of NIC
* **macAddress**: string (ReadOnly): MAC address information of NIC.
* **nicStatus**: string (ReadOnly): The status of NIC, up, disconnected.
* **nicType**: string (ReadOnly): The type of NIC, physical, virtual, management.
* **rdmaCapability**: 'Disabled' | 'Enabled' | string (ReadOnly): Describes the RDMA capability of the network adapter.
* **slot**: string (ReadOnly): The slot attached to the NIC.
* **subnetMask**: string (ReadOnly): Subnet Mask of NIC
* **switchName**: string (ReadOnly): The switch attached to the NIC, if any.
* **vlanId**: string (ReadOnly): The VLAN ID of the physical NIC.

## HciOsProfile
### Properties
* **assemblyVersion**: string (ReadOnly): Version of assembly present on device
* **bootType**: string (ReadOnly): The boot type of the device. e.g. UEFI, Legacy etc

## HciReportedProperties
### Properties
* **confidentialVmProfile**: [ConfidentialVmProfile](#confidentialvmprofile) (ReadOnly): CVM support details for edge device.
* **deviceState**: 'Connected' | 'Disconnected' | 'Draining' | 'InMaintenance' | 'NotSpecified' | 'Processing' | 'Repairing' | 'Resuming' | string (ReadOnly): edge device state.
* **extensionProfile**: [ExtensionProfile](#extensionprofile) (ReadOnly): Extensions details for edge device.
* **hardwareProfile**: [HciHardwareProfile](#hcihardwareprofile) (ReadOnly): Hci device hardware specific information.
* **lastSyncTimestamp**: string (ReadOnly): Most recent edge device sync timestamp in UTC.
* **networkProfile**: [HciNetworkProfile](#hcinetworkprofile) (ReadOnly): HCI device network information.
* **osProfile**: [HciOsProfile](#hciosprofile) (ReadOnly): HCI device OS specific information.
* **sbeDeploymentPackageInfo**: [SbeDeploymentPackageInfo](#sbedeploymentpackageinfo) (ReadOnly): Solution builder extension (SBE) deployment package information.
* **storageProfile**: [HciStorageProfile](#hcistorageprofile) (ReadOnly): Hci device storage specific information.

## HciStorageProfile
### Properties
* **disks**: [EdgeDeviceDisks](#edgedevicedisks)[] (ReadOnly): List of storage disks on the device.
* **poolableDisksCount**: int (ReadOnly): Number of storage disks in the device with $CanPool as true.

## HciValidationFailureDetail
### Properties
* **exception**: string (ReadOnly): Exception details while installing extension.

## IgvmStatusDetail
### Properties
* **code**: string (ReadOnly): A machine-readable status code indicating the result or condition of a specific IGVM-related check or operation.
* **message**: string (ReadOnly): A human-readable message providing context or explanation for the associated status code.

## InfrastructureNetwork
### Properties
* **dnsServerConfig**: 'UseDnsServer' | 'UseForwarder' | string: Specifies how DNS servers are configured for the infrastructure network. Allowed values are 'UseDnsServer' to use the provided DNS servers, and 'UseForwarder' to use DNS forwarders.
* **dnsServers**: string[]: IPv4 address of the DNS servers in your environment.
* **dnsZones**: [DnsZones](#dnszones)[]: Details of the DNS Zones to be configured.
* **gateway**: string: Default gateway that should be used for the provided IP address space.
* **ipPools**: [IpPools](#ippools)[]: Range of IP addresses from which addresses are allocated for nodes within a subnet.
* **subnetMask**: string: Subnet mask that matches the provided IP address space.
* **useDhcp**: bool: Allows customers to use DHCP for Hosts and Cluster IPs. If not declared, the deployment will default to static IPs. When true, GW and DNS servers are not required

## IpAddressRange
### Properties
* **endIp**: string (Required): End IP address.
* **startIp**: string (Required): Start IP address.

## IpPools
### Properties
* **endingAddress**: string: Ending IP address for the management network. A minimum of six free, contiguous IPv4 addresses (excluding your host IPs) are needed for infrastructure services such as clustering.
* **startingAddress**: string: Starting IP address for the management network. A minimum of six free, contiguous IPv4 addresses (excluding your host IPs) are needed for infrastructure services such as clustering.

## IsolatedVmAttestationConfiguration
### Properties
* **attestationResourceId**: string (ReadOnly): Fully qualified Azure resource id of the Microsoft Azure attestation resource associated with this cluster.
* **attestationServiceEndpoint**: string (ReadOnly): Region specific endpoint for Microsoft Azure Attestation service for the cluster
* **relyingPartyServiceEndpoint**: string (ReadOnly): Region specific endpoint for relying party service.

## JobReportedProperties
### Properties
* **deploymentStatus**: [EceActionStatus](#eceactionstatus) (ReadOnly): Deployment status of job.
* **percentComplete**: int (ReadOnly): The percentage of the job that is complete.
* **validationStatus**: [EceActionStatus](#eceactionstatus) (ReadOnly): Validation status of job.

## LifecycleDetails
### Properties
* **lifecycleStages**: [LifecycleStage](#lifecyclestage)[] (Required, ReadOnly): List of lifecycle stages for the edge machine.
* **lifecycleStatus**: [LifecycleStatus](#lifecyclestatus) (ReadOnly): Overall lifecycle status of the edge machine.

## LifecycleStage
### Properties
* **description**: string (Required, ReadOnly): Description of the stage.
* **endTimeUtc**: string (ReadOnly): End time of the stage.
* **error**: [ErrorDetail](#errordetail) (ReadOnly): Error details.
* **lastUpdatedUtc**: string (ReadOnly): Last time the stage was updated.
* **name**: string (Required, ReadOnly): Name of the stage.
* **startTimeUtc**: string (ReadOnly): Start time of the stage.
* **status**: 'Completed' | 'Failed' | 'InProgress' | 'NotStarted' | string (Required, ReadOnly): Status of the stage.
* **subStages**: [LifecycleStage](#lifecyclestage)[] (ReadOnly): Sub-stages for this stage.

## LifecycleStatus
### Properties
* **lastUpdatedUtc**: string (Required, ReadOnly): Last time the lifecycle status was updated.
* **message**: string (ReadOnly): Message to provide more details on lifecycle status, especially in case of failures.
* **recommendedSteps**: string[] (ReadOnly): Recommended steps to resolve failures.
* **stage**: string (ReadOnly): Depicts what is the current ongoing stage.
* **status**: 'AwaitingConnection' | 'Creating' | 'Deleting' | 'Failed' | 'InstallingOs' | 'Provisioned' | 'Provisioning' | 'ReadyForOs' | 'ResettingOs' | 'UpdatingOs' | string (Required, ReadOnly): Overall lifecycle status of the edge machine.

## LocalAvailabilityZones
### Properties
* **localAvailabilityZoneName**: string: Local Availability Zone name for HCI cluster
* **nodes**: string[]: Nodes belonging to a particular zone

## LogCollectionError
### Properties
* **errorCode**: string (ReadOnly): Error Code of the log collection
* **errorMessage**: string (ReadOnly): Error Message of the log collection

## LogCollectionJobSession
### Properties
* **correlationId**: string (ReadOnly): A unique identifier for correlating this log collection session with other operations or sessions.
* **endTime**: string (ReadOnly): The timestamp when log collection ended, in ISO 8601 format.
* **logSize**: int (ReadOnly): The size of the collected logs in bytes.
* **startTime**: string (ReadOnly): The timestamp when log collection started, in ISO 8601 format.
* **status**: 'Canceled' | 'Failed' | 'NotStarted' | 'Running' | 'Succeeded' | string (ReadOnly): The status of the log collection session.
* **timeCollected**: string (ReadOnly): The total time logs were collected for, in ISO 8601 duration format.

## LogCollectionProperties
### Properties
* **fromDate**: string (ReadOnly): From DateTimeStamp from when logs need to be connected
* **lastLogGenerated**: string (ReadOnly): Recent DateTimeStamp where logs are successfully generated
* **logCollectionSessionDetails**: [LogCollectionSession](#logcollectionsession)[] (ReadOnly)
* **toDate**: string (ReadOnly): To DateTimeStamp till when logs need to be connected

## LogCollectionReportedProperties
### Properties
* **deploymentStatus**: [EceActionStatus](#eceactionstatus) (ReadOnly): Deployment status of job.
* **logCollectionSessionDetails**: [LogCollectionJobSession](#logcollectionjobsession)[] (ReadOnly): Details of the log collection session.
* **percentComplete**: int (ReadOnly): The percentage of the job that is complete.
* **validationStatus**: [EceActionStatus](#eceactionstatus) (ReadOnly): Validation status of job.

## LogCollectionSession
### Properties
* **correlationId**: string (ReadOnly): CorrelationId of the log collection
* **endTimeCollected**: string (ReadOnly): End Time of the logs when it was collected
* **logCollectionError**: [LogCollectionError](#logcollectionerror) (ReadOnly): Log Collection Error details of the cluster.
* **logCollectionJobType**: 'OnDemand' | 'Scheduled' | string (ReadOnly): Specifies the type of log collection job. Determines whether the logs are collected immediately on demand or as part of a scheduled operation.
* **logCollectionStatus**: 'Failed' | 'InProgress' | 'None' | 'Succeeded' | string (ReadOnly): LogCollection status
* **logEndTime**: string (ReadOnly): End Time of the logs when it was collected
* **logSize**: int (ReadOnly): Size of the logs collected
* **logStartTime**: string (ReadOnly): Start Time of the logs when it was collected
* **timeCollected**: string (ReadOnly): Duration of logs collected

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## ManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## NetworkAdapter
### Properties
* **adapterName**: string: Adapter Name.
* **dnsAddressArray**: string[]: Array of DNS addresses.
* **gateway**: string: Gateway id.
* **ipAddress**: string: IP address.
* **ipAddressRange**: [IpAddressRange](#ipaddressrange): IP address range.
* **ipAssignmentType**: 'Automatic' | 'Manual' | string (Required): Type of IP assignment.
* **macAddress**: string: MAC address.
* **subnetMask**: string: Subnet mask.
* **vlanId**: string: VLAN ID for the network setup.

## NetworkAdapterActionStatus
### Properties
* **status**: string (ReadOnly): Status of ECE action Network Adapter Job.
* **steps**: [NetworkAdapterDeploymentStep](#networkadapterdeploymentstep)[] (ReadOnly): List of steps of Network Adapter Job.

## NetworkAdapterConfiguration
### Properties
* **adapterName**: string: Adapter name.
* **defaultGateway**: string: Default gateway.
* **dnsServers**: string[]: List of DNS servers.
* **interfaceState**: 'down' | 'up' | string: Administrative state of the interface (up or down).
* **ip4Address**: string: IP address.
* **ipInterfaceType**: 'Dhcp' | 'Static' | string: IP configuration type (Dhcp or Static).
* **subnetMask**: string: Subnet mask.
* **vlanId**: int: VLAN identifier for network segmentation.
* **wifiConfiguration**: [WifiConfigurationDesiredProperties](#wificonfigurationdesiredproperties): WiFi configuration desired properties.

## NetworkAdapterDeploymentStep
### Properties
* **description**: string (ReadOnly): Description of step.
* **endTimeUtc**: string (ReadOnly): End time of step.
* **exception**: string[] (ReadOnly): List of exceptions.
* **fullStepIndex**: string (ReadOnly): FullStepIndex of step.
* **name**: string (ReadOnly): Name of step.
* **startTimeUtc**: string (ReadOnly): Start time of step.
* **status**: string (ReadOnly): Status of step (Error, Success, InProgress).
* **steps**: [NetworkAdapterDeploymentStep](#networkadapterdeploymentstep)[] (ReadOnly): List of nested steps.

## NetworkAdapterJobReportedProperties
### Properties
* **deploymentStatus**: [NetworkAdapterActionStatus](#networkadapteractionstatus) (ReadOnly): Deployment status of Network Adapter Job.
* **percentComplete**: int (ReadOnly): The percentage of the job that is complete.
* **validationStatus**: [NetworkAdapterActionStatus](#networkadapteractionstatus) (ReadOnly): Validation status of Network Adapter Job.

## NetworkAdapterProvisioningStatus
### Properties
* **operationId**: string (ReadOnly): The ID of the operation performed on the network adapter.
* **status**: 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): The status of the operation performed on the network adapter.

## NetworkAdapterReportedProperties
### Properties
* **adapterName**: string: Adapter name.
* **componentId**: string (ReadOnly): Component ID of NIC.
* **defaultGateway**: string: Default gateway.
* **defaultIsolationId**: string (ReadOnly): Default isolation of management NIC.
* **dnsServers**: string[]: List of DNS servers.
* **driverVersion**: string (ReadOnly): Driver version of NIC.
* **interfaceDescription**: string (ReadOnly): Interface description of NIC.
* **interfaceSpeed**: int (ReadOnly): Interface speed in Mbps.
* **interfaceState**: 'down' | 'up' | string (ReadOnly): Current state of the interface.
* **interfaceType**: 'Eth' | 'wifi' | string (ReadOnly): Type of network interface.
* **ip4Address**: string: IP address.
* **ipInterfaceType**: 'Dhcp' | 'Static' | string (ReadOnly): IP configuration type.
* **macAddress**: string (ReadOnly): MAC address.
* **managementInterface**: bool (ReadOnly): Indicates if this is a management interface.
* **networkAdapterStatus**: [NetworkAdapterStatus](#networkadapterstatus) (ReadOnly): The observed state of network adapter.
* **nicStatus**: string (ReadOnly): The status of NIC (up, disconnected).
* **nicType**: string (ReadOnly): The type of NIC (physical, virtual, management).
* **rdmaCapability**: 'Disabled' | 'Enabled' | string (ReadOnly): RDMA capability of the network adapter.
* **slot**: string (ReadOnly): The slot attached to the NIC.
* **subnetMask**: string: Subnet mask.
* **switchName**: string (ReadOnly): The switch attached to the NIC, if any.
* **vlanId**: int {minValue: 0, maxValue: 4096} (ReadOnly): VLAN identifier (0-4096).
* **wifiConfiguration**: [WifiConfigurationReportedProperties](#wificonfigurationreportedproperties) (ReadOnly): WiFi configuration reported properties.

## NetworkAdapterStatus
### Properties
* **errorCode**: string (ReadOnly): Network adapter provisioning error code.
* **errorMessage**: string (ReadOnly): Descriptive error message.
* **provisioningStatus**: [NetworkAdapterProvisioningStatus](#networkadapterprovisioningstatus) (ReadOnly): Network adapter provisioning status.

## NetworkConfiguration
### Properties
* **networkAdapters**: [NetworkAdapter](#networkadapter)[]: List of network adapters.

## NetworkController
### Properties
* **macAddressPoolStart**: string: macAddressPoolStart of network controller used for SDN Integration.
* **macAddressPoolStop**: string: macAddressPoolStop of network controller used for SDN Integration.
* **networkVirtualizationEnabled**: bool: NetworkVirtualizationEnabled of network controller used for SDN Integration.

## NextBillingModel
### Properties
* **billingModel**: string: Type of billing model.
* **capabilitiesEnabled**: string[]: Capabilities enabled under this billing model.
* **trialDaysRemaining**: int: Number of days remaining in the trial period.

## NicDetail
### Properties
* **adapterName**: string: Adapter Name of NIC
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

## OnboardingConfiguration
### Properties
* **arcVirtualMachineId**: string: Azure Arc virtual machine ID.
* **location**: string: Location of the resource.
* **resourceId**: string: Resource ID.
* **tenantId**: string: Tenant ID of the resource.
* **type**: 'HybridComputeMachine' | string: Type of the onboarding resource to support polymorphic resource.

## OperationDetail
### Properties
* **description**: string (ReadOnly): operation description.
* **error**: [ErrorDetail](#errordetail) (ReadOnly): error details.
* **id**: string (ReadOnly): operation id.
* **name**: string (ReadOnly): operation name.
* **resourceId**: string (ReadOnly): operation resource id.
* **status**: string (ReadOnly): operation status.
* **type**: string (ReadOnly): operation type.

## OptionalServices
### Properties
* **confidentialVmIntent**: 'Disable' | 'Enable' | string: Captures the customer's intent to enable or disable Confidential VM (CVM) support on the AzureStackHCI Cluster.
* **customLocation**: string: The name of custom location.

## OsImageProperties
### Properties
* **composedImageIsoHash**: string: Represents composed image iso hash of a os image.
* **composedImageIsoUrl**: string: Represents composed image iso download url of a os image.
* **composedImageVersion**: string: Represents composed image version of a os image.
* **validatedSolutionRecipeVersion**: string: Represents validated solution recipe version of a os image.

## OsProfile
### Properties
* **assemblyVersion**: string (ReadOnly): Version of assembly present on device
* **baseImageVersion**: string (ReadOnly): OS Base Image Version
* **bootType**: string (ReadOnly): The boot type of the device. e.g. UEFI, Legacy etc
* **buildNumber**: string (ReadOnly): OS Build Number
* **imageVersion**: string (ReadOnly): OS Image Version
* **osSku**: string (ReadOnly): OS SKU (e.g., “ Microsoft Azure Linux ROE“, “Azure Stack HCI", "Microsoft Azure Linux 3.0")
* **osType**: string (ReadOnly): OS type (“windows", “linux”)
* **osVersion**: string (ReadOnly): OS Version

## OsProvisionProfile
### Properties
* **gpgPubKey**: string: GPG Public Key used for package verification
* **imageHash**: string: Hash of the OS package downloaded
* **operationType**: 'Provision' | 'ReImage' | 'Update' | string: Operation sub type of OS Provisioning
* **osImageLocation**: string: Location of the operating system image.
* **osName**: string: Name of the operating system.
* **osType**: string: Type of the operating system.
* **osVersion**: string: Version of the operating system.
* **vsrVersion**: string: Validated Solution Recipe version to be used for the job

## OwnershipVoucherDetails
### Properties
* **ownerKeyType**: 'MicrosoftManaged' | string (Required): Owner key type
* **ownershipVoucher**: string {sensitive} (Required): Ownership voucher in base64 encoded format
* **validationDetails**: [OwnershipVoucherValidationDetails](#ownershipvouchervalidationdetails) (ReadOnly): Ownership Voucher Validation Details

## OwnershipVoucherValidationDetails
### Properties
* **azureMachineId**: string: Azure Machine Id of the Ownership voucher
* **error**: [ErrorDetail](#errordetail): Error details if the validation failed.
* **id**: string: FDO guid of the Ownership Voucher.
* **manufacturer**: string: Name of the manufacturer.
* **modelName**: string: Name of the model.
* **serialNumber**: string: Serial number of the device.
* **validationStatus**: 'Invalid' | 'Valid' | string: The ownership voucher validation status.
* **version**: string: Version of the Ownership Voucher format

## PackageVersionInfo
### Properties
* **lastUpdated**: string: Last time this component was updated.
* **packageType**: string: Package type
* **version**: string: Package version

## PartitionDetails
### Properties
* **currentDecode**: string (ReadOnly): The current decode that is used by the partition
* **currentEncode**: string (ReadOnly): The current encode that is used by the partition
* **currentVram**: string (ReadOnly): The current vRAM that is used by the partition
* **partitionId**: int (ReadOnly): The partition number that is being used by the workload
* **uniqueId**: string (ReadOnly): Unique identifier for the partition
* **workloadDetail**: [WorkloadDetails](#workloaddetails) (ReadOnly): The workload to which this partition is assigned.

## PerNodeExtensionState
### Properties
* **extension**: string (ReadOnly): Fully qualified resource ID for the particular Arc Extension on this node.
* **instanceView**: [ExtensionInstanceView](#extensioninstanceview) (ReadOnly): The extension instance view.
* **name**: string (ReadOnly): Name of the node in HCI Cluster.
* **state**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): State of Arc Extension in this node. Reflects the current lifecycle status of the extension on the individual node, such as whether it's being created, updated, deleted, or has encountered an error.
* **typeHandlerVersion**: string (ReadOnly): Specifies the version of the script handler.

## PerNodeRemoteSupportSession
### Properties
* **accessLevel**: 'Diagnostics' | 'DiagnosticsAndRepair' | string (ReadOnly): Remote Support Access Level
* **duration**: int (ReadOnly): Duration of Remote Support Enablement
* **nodeName**: string (ReadOnly): Name of the node
* **sessionEndTime**: string (ReadOnly): Remote Support Session EndTime on the Node
* **sessionStartTime**: string (ReadOnly): Remote Support Session StartTime on the Node
* **transcriptLocation**: string (ReadOnly): The location where the session transcript is stored.

## PerNodeState
### Properties
* **arcInstance**: string (ReadOnly): Fully qualified resource ID for the Arc agent of this node.
* **arcNodeServicePrincipalObjectId**: string (ReadOnly): The service principal id of the arc for server node
* **name**: string (ReadOnly): Name of the Node in HCI Cluster
* **state**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): State of the Arc agent in this node. Indicates the current lifecycle status of the agent, such as whether it's being provisioned, connected, updated, or has encountered an error.

## PhysicalNodes
### Properties
* **ipv4Address**: string: The IPv4 address assigned to each physical server on your Azure Stack HCI cluster.
* **name**: string: NETBIOS name of each physical server on your Azure Stack HCI cluster.

## PlatformPayload
### Properties
* **payloadHash**: string: Represents hash of a platform update payload.
* **payloadIdentifier**: string: Represents identifier of a platform update payload.
* **payloadPackageSizeInBytes**: string: Represents size in bytes of a platform update payload.
* **payloadUrl**: string: Represents url of a platform update payload.

## PlatformUpdateDetails
### Properties
* **platformPayloads**: [PlatformPayload](#platformpayload)[] (Required): Represents the platform payloads of a platform update.
* **platformVersion**: string: Represents version of a platform update.
* **validatedSolutionRecipeVersion**: string: Represents validated solution recipe version of a platform update.

## PlatformUpdateProperties
### Properties
* **platformUpdateDetails**: [PlatformUpdateDetails](#platformupdatedetails)[] (Required): Represents applicable platform updates.

## PrecheckResult
### Properties
* **additionalData**: string: Property bag of key value pairs for additional information.
* **description**: string: Detailed overview of the issue and what impact the issue has on the stamp.
* **displayName**: string: The health check DisplayName localized of the individual test executed.
* **healthCheckSource**: string: The name of the services called for the HealthCheck (I.E. Test-AzureStack, Test-Cluster).
* **healthCheckTags**: any: Key-value pairs that allow grouping/filtering individual tests.
* **name**: string: Name of the individual test/rule/alert that was executed. Unique, not exposed to the customer.
* **remediation**: string: Set of steps that can be taken to resolve the issue found.
* **severity**: 'Critical' | 'Hidden' | 'Informational' | 'Warning' | string: Indicates the importance or impact level of the result. Determines whether the result is informational, a warning, or a critical issue that may block updates.
* **status**: 'ConnectedRecently' | 'DeploymentFailed' | 'DeploymentInProgress' | 'DeploymentSuccess' | 'Disconnected' | 'Error' | 'NotConnectedRecently' | 'NotSpecified' | 'NotYetRegistered' | 'ValidationFailed' | 'ValidationInProgress' | 'ValidationSuccess' | string: Represents the current status of the check being performed. Indicates whether the check has completed successfully, failed, or is still in progress.
* **tags**: [PrecheckResultTags](#precheckresulttags): Key-value pairs that allow grouping/filtering individual tests.
* **targetResourceID**: string: The unique identifier for the affected resource (such as a node or drive).
* **targetResourceName**: string: The name of the affected resource.
* **targetResourceType**: string: The type of resource being referred to (well-known set of nouns in infrastructure, aligning with Monitoring).
* **timestamp**: string: The time in which the HealthCheck was called.
* **title**: string: User-facing name; one or more sentences indicating the direct issue.

## PrecheckResultTags
### Properties
* **key**: string: Key that allow grouping/filtering individual tests.
* **value**: string: Value of the key that allow grouping/filtering individual tests.

## ProvisioningDetails
### Properties
* **osProfile**: [OsProvisionProfile](#osprovisionprofile) (Required): Operating system profile.
* **userDetails**: [UserDetails](#userdetails)[] {minLength: 1}: User configuration.

## ProvisioningRequest
### Properties
* **customConfiguration**: string: Base64 encoded custom configuration for CAPI to use
* **deviceConfiguration**: [TargetDeviceConfiguration](#targetdeviceconfiguration): Device configuration.
* **onboardingConfiguration**: [OnboardingConfiguration](#onboardingconfiguration): Onboarding configuration.
* **osProfile**: [OsProvisionProfile](#osprovisionprofile) (Required): Operating system profile.
* **target**: 'AzureLinux' | 'HCI' | string (Required): Target operating system to support polymorphic resource.
* **userDetails**: [UserDetails](#userdetails)[]: User configuration.

## ProvisionOsReportedProperties
### Properties
* **deploymentStatus**: [EceActionStatus](#eceactionstatus) (ReadOnly): Deployment status of job.
* **percentComplete**: int (ReadOnly): The percentage of the job that is complete.
* **validationStatus**: [EceActionStatus](#eceactionstatus) (ReadOnly): Validation status of job.

## PublisherProperties
### Properties
* **provisioningState**: string (ReadOnly): Provisioning State

## QosPolicyOverrides
### Properties
* **bandwidthPercentage_SMB**: string: This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.
* **priorityValue8021Action_Cluster**: string: This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.
* **priorityValue8021Action_SMB**: string: This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.

## RemoteSupportJobNodeSettings
### Properties
* **connectionErrorMessage**: string (ReadOnly): The error message, if any, from the last connection attempt.
* **connectionStatus**: string (ReadOnly): The current connection status of the remote support session.
* **createdAt**: string (ReadOnly): The timestamp when the node settings were created, in UTC.
* **state**: string (ReadOnly): The state of the remote support node.
* **updatedAt**: string (ReadOnly): The timestamp when the node settings were last updated, in UTC.

## RemoteSupportJobReportedProperties
### Properties
* **deploymentStatus**: [EceActionStatus](#eceactionstatus) (ReadOnly): Deployment status of job.
* **nodeSettings**: [RemoteSupportJobNodeSettings](#remotesupportjobnodesettings) (ReadOnly): Optional settings for configuring the node for remote support.
* **percentComplete**: int (ReadOnly): The percentage of the job that is complete.
* **sessionDetails**: [RemoteSupportSession](#remotesupportsession)[] (ReadOnly): Details of the remote support session.
* **validationStatus**: [EceActionStatus](#eceactionstatus) (ReadOnly): Validation status of job.

## RemoteSupportNodeSettings
### Properties
* **arcResourceId**: string (ReadOnly): Arc ResourceId of the Node
* **connectionErrorMessage**: string (ReadOnly): Remote Support Access Connection Error Message on the Node
* **connectionStatus**: string (ReadOnly): Remote Support Access Connection Status on the Node
* **createdAt**: string (ReadOnly): Remote Support Enablement Request Created TimeStamp on the Node
* **state**: string (ReadOnly): Remote Support Access Connection State on the Node
* **transcriptLocation**: string (ReadOnly): Remote Support Transcript location on the node
* **updatedAt**: string (ReadOnly): Remote Support Enablement Request Updated TimeStamp on the Node

## RemoteSupportProperties
### Properties
* **accessLevel**: 'Diagnostics' | 'DiagnosticsAndRepair' | string (ReadOnly): Remote Support Access Level
* **expirationTimeStamp**: string (ReadOnly): Expiration DateTimeStamp when Remote Support Access will be expired
* **remoteSupportNodeSettings**: [RemoteSupportNodeSettings](#remotesupportnodesettings)[] (ReadOnly)
* **remoteSupportProvisioningState**: 'Failed' | 'GrantInProgress' | 'None' | 'RevokeInProgress' | 'Succeeded' | string (ReadOnly): Remote Support Provisioning State
* **remoteSupportSessionDetails**: [PerNodeRemoteSupportSession](#pernoderemotesupportsession)[] (ReadOnly)
* **remoteSupportType**: 'Enable' | 'Revoke' | string (ReadOnly): Remote Support Type for cluster

## RemoteSupportSession
### Properties
* **accessLevel**: 'Diagnostics' | 'DiagnosticsAndRepair' | 'None' | string (ReadOnly): The level of access granted during the remote support session.
* **sessionEndTime**: string (ReadOnly): The end time of the remote support session, in UTC.
* **sessionId**: string (ReadOnly): Unique session Id.
* **sessionStartTime**: string (ReadOnly): The start time of the remote support session, in UTC.
* **transcriptLocation**: string (ReadOnly): The location where the session transcript is stored.

## RepairServerJobServerDetails
### Properties
* **serverName**: string (Required): Name of server to be repaired in cluster.
* **serverResourceId**: string (Required): Azure resource id of Arc machine part of cluster for which job will be triggered.

## SanAdapterIPConfig
### Properties
* **addressPrefix**: string: Subnet address prefix in CIDR notation (e.g., 10.10.30.0/24).
* **name**: string: Logical name of the adapter IP configuration (e.g., clusterNetwork-A).
* **networkAdapterName**: string: Physical NIC name (e.g., ethernet 3).
* **vlanId**: int: VLAN ID (0-4095). Value of 0 or omitted means untagged.

## SanAdapterProperties
### Properties
* **bandwidthPercentageSmb**: int: SMB bandwidth percentage (1-97).
* **jumboPacket**: int: Jumbo frame size in bytes.
* **priorityValue8021ActionCluster**: int: 802.1p priority value for cluster traffic.
* **priorityValue8021ActionSmb**: int: 802.1p priority value for SMB traffic.

## SanClusterNetworkConfig
### Properties
* **adapterIPConfig**: [SanAdapterIPConfig](#sanadapteripconfig)[]: Per-adapter IP configuration for the cluster network.
* **adapterProperties**: [SanAdapterProperties](#sanadapterproperties): QoS and adapter overrides for the cluster network.

## SanNetworks
### Properties
* **clusterNetworkConfig**: [SanClusterNetworkConfig](#sanclusternetworkconfig): Cluster (CSV/LiveMig) network configuration for SAN deployments.

## SbeCredentials
### Properties
* **eceSecretName**: string: secret name expected for Enterprise Cloud Engine (ECE).
* **secretLocation**: string: secret URI stored in keyvault.
* **secretName**: string: secret name stored in keyvault.

## SbeDeploymentInfo
### Properties
* **family**: string: SBE family name.
* **publisher**: string: SBE manifest publisher.
* **sbeManifestCreationDate**: string: SBE Manifest Creation Date.
* **sbeManifestSource**: string: SBE Manifest Source.
* **version**: string: SBE package version.

## SbeDeploymentPackageInfo
### Properties
* **code**: string (ReadOnly): SBE deployment validation code.
* **message**: string (ReadOnly): A detailed message that explains the SBE package validation result.
* **sbeManifest**: string (ReadOnly): This represents discovered update results for matching updates and store it as SBE manifest.

## SbePartnerInfo
### Properties
* **credentialList**: [SbeCredentials](#sbecredentials)[]: SBE credentials list for AzureStackHCI cluster deployment.
* **partnerProperties**: [SbePartnerProperties](#sbepartnerproperties)[]: List of SBE partner properties for AzureStackHCI cluster deployment.
* **sbeDeploymentInfo**: [SbeDeploymentInfo](#sbedeploymentinfo): SBE package and manifest information for the solution Builder Extension staged for AzureStackHCI cluster deployment.

## SbePartnerProperties
### Properties
* **name**: string: SBE partner property name.
* **value**: string: SBE partner property value.

## ScaleUnits
### Properties
* **deploymentData**: [DeploymentData](#deploymentdata) (Required): Deployment Data to deploy AzureStackHCI Cluster.
* **sbePartnerInfo**: [SbePartnerInfo](#sbepartnerinfo): Solution builder extension (SBE) partner properties

## SdnIntegration
### Properties
* **networkController**: [NetworkController](#networkcontroller): network controller config for SDN Integration to deploy AzureStackHCI Cluster.

## SdnProperties
### Properties
* **sdnApiAddress**: string (ReadOnly): Represents the API address for the SDN deployment.
* **sdnDomainName**: string (ReadOnly): The fully qualified domain name (FQDN) associated with the SDN deployment. This value is propagated from the Device Management Extension to the cluster resource. It is typically in the format `<sdnPrefix>-nc.<domain>` when SDN is enabled. May be null or absent in unsupported or disabled states.
* **sdnStatus**: 'Disabled' | 'Enabled' | 'Unknown' | string (ReadOnly): Indicates the current Software Defined Networking (SDN) status of the resource, which may be an individual device or a cluster.

## SecretsLocationDetails
### Properties
* **secretsLocation**: string (Required): secrets location
* **secretsType**: 'BackupSecrets' | string (Required): Type of secrets to store

## SecurityComplianceStatus
### Properties
* **dataAtRestEncrypted**: 'Compliant' | 'NonCompliant' | 'Pending' | string (ReadOnly): Indicates whether data at-rest encryption is enabled on Azure Stack HCI clustered volumes.
* **dataInTransitProtected**: 'Compliant' | 'NonCompliant' | 'Pending' | string (ReadOnly): Indicates whether HCI cluster has data in-transit protection.
* **lastUpdated**: string (ReadOnly): Time in UTC when compliance status was last updated.
* **securedCoreCompliance**: 'Compliant' | 'NonCompliant' | 'Pending' | string (ReadOnly): Indicates whether HCI hosts meets secured-core server requirements.
* **wdacCompliance**: 'Compliant' | 'NonCompliant' | 'Pending' | string (ReadOnly): Indicates whether HCI hosts have enforced consistent Windows Defender Application Control.

## SecurityProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **securedCoreComplianceAssignment**: 'ApplyAndAutoCorrect' | 'Audit' | string: Secured Core Compliance Assignment
* **securityComplianceStatus**: [SecurityComplianceStatus](#securitycompliancestatus) (ReadOnly): Security Compliance Status
* **smbEncryptionForIntraClusterTrafficComplianceAssignment**: 'ApplyAndAutoCorrect' | 'Audit' | string: SMB encryption for intra-cluster traffic Compliance Assignment
* **wdacComplianceAssignment**: 'ApplyAndAutoCorrect' | 'Audit' | string: WDAC Compliance Assignment

## ServiceConfiguration
### Properties
* **port**: int (Required): The port on which service is enabled.
* **serviceName**: 'WAC' | string (Required): Specifies the name of the service associated with the update or operation. This helps identify which system component or tool is involved.

## SiteDetails
### Properties
* **deviceConfiguration**: [TargetDeviceConfiguration](#targetdeviceconfiguration): Edge Device configuration received from site common configuration.
* **siteResourceId**: string (Required): Site resource Id to be set during Edge Machine resource creation.

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

## Storage
### Properties
* **configurationMode**: string: By default, this mode is set to Express and your storage is configured as per best practices based on the number of nodes in the cluster. Allowed values are 'Express','InfraOnly', 'KeepStorage'
* **s2d**: [StorageS2DConfig](#storages2dconfig): S2D (Storage Spaces Direct) configuration. Applicable when StorageType is 'S2D' or 'SANS2D'.
* **san**: [StorageSanConfig](#storagesanconfig): SAN (Storage Area Network) configuration. Applicable when StorageType is 'SAN' or 'SANS2D'.
* **storageType**: 'S2D' | 'SAN' | 'SANS2D' | string: Storage type for the HCI Cluster. Allowed values are 'S2D', 'SAN', 'SANS2D'.

## StorageConfiguration
### Properties
* **partitionSize**: string: Partition size.

## StorageProfile
### Properties
* **poolableDisksCount**: int (ReadOnly): Number of storage disks in the device with $CanPool as true.

## StorageS2DConfig
### Properties
* **overprovisioningRatio**: '0' | '1' | '2' | string: Overprovisioning ratio for S2D storage. Allowed values are '0', '1', '2'.
* **volumeType**: 'Fixed' | 'ThinProvisioned' | string: Volume provisioning type. Allowed values are 'Fixed', 'ThinProvisioned'.

## StorageSanConfig
### Properties
* **infraPerfLunId**: string: Infrastructure performance LUN ID.
* **infraVolLunId**: string: Infrastructure volume LUN ID (e.g. PURE1234567890ABCDEF).

## SwitchDetail
### Properties
* **extensions**: [SwitchExtension](#switchextension)[] (ReadOnly): This represents extensions installed on virtualSwitch.
* **switchName**: string (ReadOnly): The name of the switch.
* **switchType**: string (ReadOnly): The type of the switch. e.g. external, internal.

## SwitchExtension
### Properties
* **extensionEnabled**: bool (ReadOnly): This represents whether extension is enabled on virtualSwitch.
* **extensionName**: string (ReadOnly): This will show extension name for virtualSwitch.
* **switchId**: string (ReadOnly): Unique identifier for virtualSwitch.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TargetDeviceConfiguration
### Properties
* **hostName**: string: Hostname of the device.
* **network**: [NetworkConfiguration](#networkconfiguration): Network configuration.
* **storage**: [StorageConfiguration](#storageconfiguration): Storage configuration.
* **time**: [TimeConfiguration](#timeconfiguration): Time configuration.
* **webProxy**: [WebProxyConfiguration](#webproxyconfiguration): Web proxy configuration.

## TimeConfiguration
### Properties
* **primaryTimeServer**: string: Primary NTP server.
* **secondaryTimeServer**: string: Secondary NTP server.
* **timeZone**: string: Time zone.

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

## UpdateContentProperties
### Properties
* **updatePayloads**: [ContentPayload](#contentpayload)[] (Required): Represents the payloads of a update content resource.

## UpdatePrerequisite
### Properties
* **packageName**: string: Friendly name of the prerequisite.
* **updateType**: string: Updatable component type.
* **version**: string: Version of the prerequisite.

## UpdateProperties
### Properties
* **additionalProperties**: string: Extensible KV pairs serialized as a string. This is currently used to report the stamp OEM family and hardware model information when an update is flagged as Invalid for the stamp based on OEM type.
* **availabilityType**: 'Local' | 'Notify' | 'Online' | string: Indicates how the update content is made available for download. This determines whether the update is sourced locally, from an online repository, or requires user notification.
* **componentVersions**: [PackageVersionInfo](#packageversioninfo)[]: An array of component versions for a Solution Bundle update, and an empty array otherwise.
* **description**: string: Description of the update.
* **displayName**: string: Display name of the Update
* **healthCheckDate**: string: Last time the package-specific checks were run.
* **healthCheckResult**: [PrecheckResult](#precheckresult)[]: An array of PrecheckResult objects.
* **healthState**: 'Error' | 'Failure' | 'InProgress' | 'Success' | 'Unknown' | 'Warning' | string: Overall health state for update-specific health checks.
* **installedDate**: string: Date that the update was installed.
* **minSbeVersionRequired**: string: Minimum Sbe Version of the update.
* **packagePath**: string: Path where the update package is available.
* **packageSizeInMb**: int: Size of the package. This value is a combination of the size from update metadata and size of the payload that results from the live scan operation for OS update content.
* **packageType**: string: Customer-visible type of the update.
* **prerequisites**: [UpdatePrerequisite](#updateprerequisite)[]: If update State is HasPrerequisite, this property contains an array of objects describing prerequisite updates before installing this update. Otherwise, it is empty.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the Updates proxy resource. Indicates the current lifecycle status of the update operation, such as whether it has been accepted, is in progress, or has completed.
* **publisher**: string: Publisher of the update package.
* **rebootRequired**: 'False' | 'True' | 'Unknown' | string: Indicates whether a reboot is required after the update or operation. Helps determine if a system restart is necessary to complete the process.
* **releaseLink**: string: Link to release notes for the update.
* **state**: 'AdditionalContentRequired' | 'DownloadFailed' | 'Downloading' | 'HasPrerequisite' | 'HealthCheckExpired' | 'HealthCheckFailed' | 'HealthChecking' | 'InstallationFailed' | 'Installed' | 'Installing' | 'Invalid' | 'NotApplicableBecauseAnotherUpdateIsInProgress' | 'Obsolete' | 'PendingOEMValidation' | 'PreparationFailed' | 'Preparing' | 'Ready' | 'ReadyToInstall' | 'Recalled' | 'ScanFailed' | 'ScanInProgress' | string: Represents the current state of the update as it relates to this stamp. This includes phases such as preparation, installation, scanning, and error handling, providing insight into the update's progress and any issues encountered.
* **updateStateProperties**: [UpdateStateProperties](#updatestateproperties): Additional information regarding the state of the update. See definition of UpdateStateProperties type below for more details on this property.
* **version**: string: Version of the update.

## UpdateRunProperties
### Properties
* **duration**: string: Duration of the update run.
* **lastUpdatedTime**: string: Timestamp of the most recently completed step in the update run.
* **progress**: [Step](#step): Progress representation of the update run steps.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the UpdateRuns proxy resource. Indicates the current lifecycle status of the update operation, such as whether it has been accepted, is in progress, or has completed.
* **state**: 'Failed' | 'InProgress' | 'Succeeded' | 'Unknown' | string (ReadOnly): Represents the current state of the update run. Indicates whether the update is in progress, has completed successfully, failed, or is in an unknown state.
* **timeStarted**: string: Timestamp of the update run was started.

## UpdateStateProperties
### Properties
* **notifyMessage**: string: Brief message with instructions for updates of AvailabilityType Notify.
* **progressPercentage**: int: Progress percentage of ongoing operation. Currently this property is only valid when the update is in the Downloading state, where it maps to how much of the update content has been downloaded.

## UpdateSummariesProperties
### Properties
* **currentOemVersion**: string: Current OEM Version.
* **currentSbeVersion**: string: Current Sbe version of the stamp.
* **currentVersion**: string: Current Solution Bundle version of the stamp.
* **hardwareModel**: string: Name of the hardware model.
* **healthCheckDate**: string: Last time the package-specific checks were run.
* **healthCheckResult**: [PrecheckResult](#precheckresult)[]: An array of pre-check result objects.
* **healthState**: 'Error' | 'Failure' | 'InProgress' | 'Success' | 'Unknown' | 'Warning' | string: Overall health state for update-specific health checks.
* **lastChecked**: string: Last time the update service successfully checked for updates
* **lastUpdated**: string: Last time an update installation completed successfully.
* **oemFamily**: string: OEM family name.
* **packageVersions**: [PackageVersionInfo](#packageversioninfo)[]: Current version of each updatable component.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'DisableInProgress' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the UpdateSummaries proxy resource. Indicates the current lifecycle status of the update summary operation, such as whether it has been accepted, is in progress, or has completed.
* **state**: 'AppliedSuccessfully' | 'NeedsAttention' | 'PreparationFailed' | 'PreparationInProgress' | 'Unknown' | 'UpdateAvailable' | 'UpdateFailed' | 'UpdateInProgress' | string: Overall update state of the stamp. Indicates the current status of update deployment across the stamp, including preparation, application, and any issues encountered.

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## UserDetails
### Properties
* **secretLocation**: string: Location of the secret used for authentication.
* **secretType**: 'KeyVault' | 'SshPubKey' | string (Required): Type of the secret used for authentication.
* **sshPubKey**: string[]: SSH Public Key for the user.
* **userName**: string (Required): Name of the user.

## ValidatedSolutionRecipeCapabilities
### Properties
* **clusterCapabilities**: [ValidatedSolutionRecipeCapability](#validatedsolutionrecipecapability)[] (Required): Represents the cluster capabilities.
* **nodeCapabilities**: [ValidatedSolutionRecipeCapability](#validatedsolutionrecipecapability)[] (Required): Represents the node capabilities.

## ValidatedSolutionRecipeCapability
### Properties
* **capabilityName**: string (Required): Represents the capability name.

## ValidatedSolutionRecipeComponent
### Properties
* **installOrder**: int: Represents the component's install order.
* **metadata**: [ValidatedSolutionRecipeComponentMetadata](#validatedsolutionrecipecomponentmetadata): Represents the component's metadata.
* **name**: string (Required): Represents the component's name.
* **payloads**: [ValidatedSolutionRecipeComponentPayload](#validatedsolutionrecipecomponentpayload)[]: Represents the component's payloads.
* **requiredVersion**: string: Represents the component's required version.
* **tags**: string[] (Required): Represents the component's tags.
* **type**: string (Required): Represents the component's type.

## ValidatedSolutionRecipeComponentMetadata
### Properties
* **catalog**: string: Specifies the catalog to which the extension belongs.
* **enableAutomaticUpgrade**: bool: Indicates whether automatic upgrades of the extension are enabled.
* **expectedHash**: string: Specifies the expected hash of the extension.
* **extensionType**: string: Represents the type of extension.
* **lcmUpdate**: bool: Indicates whether the LCM (Lifecycle Management) update of the extension is enabled.
* **link**: string: Specifies the link associated with the extension.
* **name**: string: Specifies the name of the extension.
* **previewSource**: string: Specifies the preview source of the extension.
* **publisher**: string: Represents the publisher of the extension.
* **releaseTrain**: string: Specifies the release train to which given component belongs.
* **ring**: string: Specifies the ring to which the extension belongs, internally used by component.

## ValidatedSolutionRecipeComponentPayload
### Properties
* **fileName**: string (Required): Represents the name of the file associated with the payload.
* **hash**: string (Required): Represents the cryptographic hash of the payload, ensuring data integrity.
* **identifier**: string (Required): Represents the unique identifier of the payload used to query the URL.
* **url**: string (Required): Represents the URL from which the payload can be downloaded.

## ValidatedSolutionRecipeContent
### Properties
* **capabilities**: [ValidatedSolutionRecipeCapabilities](#validatedsolutionrecipecapabilities): Represents capabilities available in a validated solution recipe.
* **components**: [ValidatedSolutionRecipeComponent](#validatedsolutionrecipecomponent)[] (Required): Represents components available in a validated solution recipe.
* **info**: [ValidatedSolutionRecipeInfo](#validatedsolutionrecipeinfo) (Required): Represents information about a validated solution recipe.

## ValidatedSolutionRecipeInfo
### Properties
* **solutionType**: string (Required): Represents the solution type for which this validated solution recipe is applicable.
* **version**: string (Required): Represents the version for which this validated solution recipe is applicable.

## ValidatedSolutionRecipeProperties
### Properties
* **recipeContent**: [ValidatedSolutionRecipeContent](#validatedsolutionrecipecontent) (Required): Represents contents of a validated solution recipe.
* **signature**: string: Represents the signature of the recipe, to be used for ensuring its integrity.

## VmConnectJobDetails
### Properties
* **nodeName**: string: Name of the node the VM is on.
* **vmName**: string (Required): Name of the VM.
* **vmResourceGroupName**: string: Name of the resource group of the VM.

## VolumeConfiguration
### Properties
* **reserved**: string: Reserved for future volume configuration options.

## VolumeReportedProperties
### Properties
* **fileSystem**: string (ReadOnly): File system on the volume.
* **isBoot**: bool (ReadOnly): Indicates if this volume is a boot volume.
* **name**: string (ReadOnly): Label of the volume.
* **offsetInBytes**: int (ReadOnly): Byte offset of the partition start.
* **parentDiskId**: string (ReadOnly): ARM resource ID of the parent disk.
* **partitionId**: string (ReadOnly): Unique identifier for the partition.
* **path**: string (ReadOnly): Access path for the volume.
* **sizeInBytes**: string (ReadOnly): Total size of the volume in bytes.
* **sizeRemainingInBytes**: string (ReadOnly): Available space on the volume in bytes.

## WebProxyConfiguration
### Properties
* **bypassList**: string[]: Bypass list for the web proxy.
* **connectionUri**: string: Connection URI of the web proxy.
* **port**: string {pattern: "^[0-9]{0,5}$"}: Port of the web proxy.

## WifiConfigurationDesiredProperties
### Properties
* **authenticationType**: 'Open' | 'WPA2-Enterprise' | 'WPA2-Personal' | 'WPA3-Enterprise' | 'WPA3-Personal' | string: WiFi authentication type.
* **eapMethod**: 'EAP-FAST' | 'EAP-TLS' | 'EAP-TTLS' | 'PEAP' | string: EAP method used for authentication.
* **ssid**: string: WiFi SSID.
* **username**: string: Username for enterprise WiFi authentication.
* **wifiSecret**: [WifiSecret](#wifisecret): WiFi secret reference.

## WifiConfigurationReportedProperties
### Properties
* **authenticationType**: 'Open' | 'WPA2-Enterprise' | 'WPA2-Personal' | 'WPA3-Enterprise' | 'WPA3-Personal' | string: WiFi authentication type.
* **connectionState**: 'AuthenticationFailed' | 'Connected' | 'Connecting' | 'Disconnected' | 'Disconnecting' | 'NotConfigured' | string (ReadOnly): Current WiFi connection state.
* **eapMethod**: 'EAP-FAST' | 'EAP-TLS' | 'EAP-TTLS' | 'PEAP' | string: EAP method used for authentication.
* **lastSuccessfulConnectionTimestamp**: string (ReadOnly): Last successful WiFi connection timestamp.
* **signalStrength**: int (ReadOnly): WiFi signal strength.
* **ssid**: string: WiFi SSID.
* **username**: string: Username for enterprise WiFi authentication.

## WifiSecret
### Properties
* **secretLocation**: string: Location of the secret.
* **secretName**: string: Name of the secret.
* **secretType**: 'WiFiCACertificate' | 'WiFiCertificate' | 'WiFiPassword' | string: Type of the WiFi secret.

## WorkloadDetails
### Properties
* **slotLocation**: string (ReadOnly): This is the unique instance path for a workload using GPU-P.
* **workloadId**: string (ReadOnly): workload Id to which GPU is assigned.
* **workloadName**: string (ReadOnly): This gives information about workload name (VM/AKS) specifically the VM Name or AKS Name.
* **workloadStatus**: string (ReadOnly): This gives information about workload status, running or down.
* **workloadType**: string (ReadOnly): This tells if workload is VM, AKS, etc.

