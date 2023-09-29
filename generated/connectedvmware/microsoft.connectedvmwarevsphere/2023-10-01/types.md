# Microsoft.ConnectedVMwarevSphere @ 2023-10-01

## Resource Microsoft.ConnectedVMwarevSphere/clusters@2023-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Gets or sets the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): Gets or sets the location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **tags**: [ClusterTags](#clustertags): Gets or sets the Resource tags.
* **type**: 'Microsoft.ConnectedVMwarevSphere/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConnectedVMwarevSphere/datastores@2023-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Gets or sets the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): Gets or sets the location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatastoreProperties](#datastoreproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **tags**: [DatastoreTags](#datastoretags): Gets or sets the Resource tags.
* **type**: 'Microsoft.ConnectedVMwarevSphere/datastores' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConnectedVMwarevSphere/hosts@2023-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Gets or sets the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): Gets or sets the location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HostProperties](#hostproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **tags**: [HostTags](#hosttags): Gets or sets the Resource tags.
* **type**: 'Microsoft.ConnectedVMwarevSphere/hosts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConnectedVMwarevSphere/resourcePools@2023-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Gets or sets the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): Gets or sets the location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ResourcePoolProperties](#resourcepoolproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **tags**: [ResourcePoolTags](#resourcepooltags): Gets or sets the Resource tags.
* **type**: 'Microsoft.ConnectedVMwarevSphere/resourcePools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConnectedVMwarevSphere/vcenters@2023-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Gets or sets the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): Gets or sets the location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VCenterProperties](#vcenterproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **tags**: [VCenterTags](#vcentertags): Gets or sets the Resource tags.
* **type**: 'Microsoft.ConnectedVMwarevSphere/vcenters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConnectedVMwarevSphere/vcenters/inventoryItems@2023-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InventoryItemProperties](#inventoryitemproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ConnectedVMwarevSphere/vcenters/inventoryItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConnectedVMwarevSphere/virtualMachineInstances@2023-10-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Gets or sets the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineInstanceProperties](#virtualmachineinstanceproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ConnectedVMwarevSphere/virtualMachineInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/guestAgents@2023-10-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [GuestAgentProperties](#guestagentproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/guestAgents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/hybridIdentityMetadata@2023-10-01 (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [VmInstanceHybridIdentityMetadataProperties](#vminstancehybrididentitymetadataproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/hybridIdentityMetadata' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates@2023-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Gets or sets the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): Gets or sets the location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineTemplateProperties](#virtualmachinetemplateproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **tags**: [VirtualMachineTemplateTags](#virtualmachinetemplatetags): Gets or sets the Resource tags.
* **type**: 'Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConnectedVMwarevSphere/virtualNetworks@2023-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Gets or sets the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): Gets or sets the location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkProperties](#virtualnetworkproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **tags**: [VirtualNetworkTags](#virtualnetworktags): Gets or sets the Resource tags.
* **type**: 'Microsoft.ConnectedVMwarevSphere/virtualNetworks' (ReadOnly, DeployTimeConstant): The resource type

## ClusterProperties
### Properties
* **customResourceName**: string (ReadOnly): Gets the name of the corresponding resource in Kubernetes.
* **datastoreIds**: string[] (ReadOnly): Gets the datastore ARM ids.
* **inventoryItemId**: string: Gets or sets the inventory Item ID for the cluster.
* **moName**: string (ReadOnly): Gets or sets the vCenter Managed Object name for the cluster.
* **moRefId**: string: Gets or sets the vCenter MoRef (Managed Object Reference) ID for the cluster.
* **networkIds**: string[] (ReadOnly): Gets the network ARM ids.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets the provisioning state.
* **statuses**: [ResourceStatus](#resourcestatus)[] (ReadOnly): The resource status information.
* **totalCpuMHz**: int (ReadOnly): Gets the max CPU usage across all cores on the cluster in MHz.
* **totalMemoryGB**: int (ReadOnly): Gets the total amount of physical memory on the cluster in GB.
* **usedCpuMHz**: int (ReadOnly): Gets the used CPU usage across all cores on the cluster in MHz.
* **usedMemoryGB**: int (ReadOnly): Gets the used physical memory on the cluster in GB.
* **uuid**: string (ReadOnly): Gets or sets a unique identifier for this resource.
* **vCenterId**: string: Gets or sets the ARM Id of the vCenter resource in which this cluster resides.

## ClusterTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatastoreProperties
### Properties
* **capacityGB**: int (ReadOnly): Gets or sets Maximum capacity of this datastore in GBs.
* **customResourceName**: string (ReadOnly): Gets the name of the corresponding resource in Kubernetes.
* **freeSpaceGB**: int (ReadOnly): Gets or sets Available space of this datastore in GBs.
* **inventoryItemId**: string: Gets or sets the inventory Item ID for the datastore.
* **moName**: string (ReadOnly): Gets or sets the vCenter Managed Object name for the datastore.
* **moRefId**: string: Gets or sets the vCenter MoRef (Managed Object Reference) ID for the datastore.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **statuses**: [ResourceStatus](#resourcestatus)[] (ReadOnly): The resource status information.
* **uuid**: string (ReadOnly): Gets or sets a unique identifier for this resource.
* **vCenterId**: string: Gets or sets the ARM Id of the vCenter resource in which this datastore resides.

## DatastoreTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExtendedLocation
### Properties
* **name**: string: The extended location name.
* **type**: string: The extended location type.

## GuestAgentProperties
### Properties
* **credentials**: [GuestCredential](#guestcredential): Username / Password Credentials to provision guest agent.
* **customResourceName**: string (ReadOnly): Gets the name of the corresponding resource in Kubernetes.
* **httpProxyConfig**: [HttpProxyConfiguration](#httpproxyconfiguration): HTTP Proxy configuration for the VM.
* **privateLinkScopeResourceId**: string: The resource id of the private link scope this machine is assigned to, if any.
* **provisioningAction**: 'install' | 'repair' | 'uninstall' | string: Gets or sets the guest agent provisioning action.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets the provisioning state.
* **status**: string (ReadOnly): Gets or sets the guest agent status.
* **statuses**: [ResourceStatus](#resourcestatus)[] (ReadOnly): The resource status information.
* **uuid**: string (ReadOnly): Gets or sets a unique identifier for this resource.

## GuestCredential
### Properties
* **password**: string {sensitive} (WriteOnly): Gets or sets the password to connect with the guest.
* **username**: string: Gets or sets username to connect with the guest.

## HardwareProfile
### Properties
* **cpuHotAddEnabled**: bool (ReadOnly): Gets or sets a value indicating whether virtual processors can be added while this virtual machine is running.
* **cpuHotRemoveEnabled**: bool (ReadOnly): Gets or sets a value indicating whether virtual processors can be removed while this virtual machine is running.
* **memoryHotAddEnabled**: bool (ReadOnly): Gets or sets a value indicating whether memory can be added while this virtual machine is running.
* **memorySizeMB**: int: Gets or sets memory size in MBs for the vm.
* **numCoresPerSocket**: int: Gets or sets the number of cores per socket for the vm. Defaults to 1 if unspecified.
* **numCPUs**: int: Gets or sets the number of vCPUs for the vm.

## HostProperties
### Properties
* **cpuMhz**: int (ReadOnly): Gets the max CPU usage across all cores in MHz.
* **customResourceName**: string (ReadOnly): Gets the name of the corresponding resource in Kubernetes.
* **datastoreIds**: string[] (ReadOnly): Gets the datastore ARM ids.
* **inventoryItemId**: string: Gets or sets the inventory Item ID for the host.
* **memorySizeGB**: int (ReadOnly): Gets the total amount of physical memory on the host in GB.
* **moName**: string (ReadOnly): Gets or sets the vCenter Managed Object name for the host.
* **moRefId**: string: Gets or sets the vCenter MoRef (Managed Object Reference) ID for the host.
* **networkIds**: string[] (ReadOnly): Gets the network ARM ids.
* **overallCpuUsageMHz**: int (ReadOnly): Gets the used CPU usage across all cores in MHz.
* **overallMemoryUsageGB**: int (ReadOnly): Gets the used physical memory on the host in GB.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets the provisioning state.
* **statuses**: [ResourceStatus](#resourcestatus)[] (ReadOnly): The resource status information.
* **uuid**: string (ReadOnly): Gets or sets a unique identifier for this resource.
* **vCenterId**: string: Gets or sets the ARM Id of the vCenter resource in which this host resides.

## HostTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HttpProxyConfiguration
### Properties
* **httpsProxy**: string: Gets or sets httpsProxy url.

## InfrastructureProfile
### Properties
* **customResourceName**: string (ReadOnly): Gets the name of the corresponding resource in Kubernetes.
* **firmwareType**: 'bios' | 'efi' | string: Firmware type
* **folderPath**: string (ReadOnly): Gets or sets the folder path of the vm.
* **instanceUuid**: string (ReadOnly): Gets or sets the instance uuid of the vm.
* **inventoryItemId**: string: Gets or sets the inventory Item ID for the virtual machine.
* **moName**: string (ReadOnly): Gets or sets the vCenter Managed Object name for the virtual machine.
* **moRefId**: string (ReadOnly): Gets or sets the vCenter MoRef (Managed Object Reference) ID for the virtual machine.
* **smbiosUuid**: string: Gets or sets the SMBIOS UUID of the vm.
* **templateId**: string: Gets or sets the ARM Id of the template resource to deploy the virtual machine.
* **vCenterId**: string: Gets or sets the ARM Id of the vCenter resource in which this resource pool resides.

## InventoryItemDetails
### Properties
* **inventoryItemId**: string: Gets or sets the inventory Item ID for the resource.
* **inventoryType**: 'Cluster' | 'Datastore' | 'Host' | 'ResourcePool' | 'VirtualMachine' | 'VirtualMachineTemplate' | 'VirtualNetwork' | string: The inventory type.
* **moName**: string: Gets or sets the vCenter Managed Object name for the resource.

## InventoryItemProperties
* **Discriminator**: inventoryType

### Base Properties
* **managedResourceId**: string: Gets or sets the tracked resource id corresponding to the inventory resource.
* **moName**: string: Gets or sets the vCenter Managed Object name for the inventory item.
* **moRefId**: string: Gets or sets the MoRef (Managed Object Reference) ID for the inventory item.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets the provisioning state.

### ClusterInventoryItem
#### Properties
* **inventoryType**: 'Cluster' (Required): They inventory type.

### DatastoreInventoryItem
#### Properties
* **capacityGB**: int: Gets or sets Maximum capacity of this datastore, in GBs.
* **freeSpaceGB**: int: Gets or sets Available space of this datastore, in GBs.
* **inventoryType**: 'Datastore' (Required): They inventory type.

### HostInventoryItem
#### Properties
* **inventoryType**: 'Host' (Required): They inventory type.
* **parent**: [InventoryItemDetails](#inventoryitemdetails): Parent host inventory resource details.

### ResourcePoolInventoryItem
#### Properties
* **inventoryType**: 'ResourcePool' (Required): They inventory type.
* **parent**: [InventoryItemDetails](#inventoryitemdetails): Parent resourcePool inventory resource details.

### VirtualMachineInventoryItem
#### Properties
* **cluster**: [InventoryItemDetails](#inventoryitemdetails): Cluster inventory resource details.
* **folderPath**: string: Gets or sets the folder path of the vm.
* **host**: [InventoryItemDetails](#inventoryitemdetails): Host inventory resource details.
* **instanceUuid**: string: Gets or sets the instance uuid of the vm.
* **inventoryType**: 'VirtualMachine' (Required): They inventory type.
* **ipAddresses**: string[]: Gets or sets the nic ip addresses.
* **osName**: string: Gets or sets os name.
* **osType**: 'Linux' | 'Other' | 'Windows' | string: Gets or sets the type of the os.
* **powerState**: string (ReadOnly): Gets the power state of the virtual machine.
* **resourcePool**: [InventoryItemDetails](#inventoryitemdetails): ResourcePool inventory resource details.
* **smbiosUuid**: string: Gets or sets the SMBIOS UUID of the vm.
* **toolsRunningStatus**: string (ReadOnly): Gets or sets the current running status of VMware Tools running in the guest operating system.
* **toolsVersion**: string (ReadOnly): Gets or sets the current version of VMware Tools.
* **toolsVersionStatus**: string (ReadOnly): Gets or sets the current version status of VMware Tools installed in the guest operating system.

### VirtualMachineTemplateInventoryItem
#### Properties
* **folderPath**: string: Gets or sets the folder path of the template.
* **inventoryType**: 'VirtualMachineTemplate' (Required): They inventory type.
* **memorySizeMB**: int: Gets or sets memory size in MBs for the template.
* **numCoresPerSocket**: int: Gets or sets the number of cores per socket for the template.
Defaults to 1 if unspecified.
* **numCPUs**: int: Gets or sets the number of vCPUs for the template.
* **osName**: string: Gets or sets os name.
* **osType**: 'Linux' | 'Other' | 'Windows' | string: Gets or sets the type of the os.
* **toolsVersion**: string (ReadOnly): Gets or sets the current version of VMware Tools.
* **toolsVersionStatus**: string (ReadOnly): Gets or sets the current version status of VMware Tools installed in the guest operating system.

### VirtualNetworkInventoryItem
#### Properties
* **inventoryType**: 'VirtualNetwork' (Required): They inventory type.


## NetworkInterface
### Properties
* **deviceKey**: int: Gets or sets the device key value.
* **ipAddresses**: string[] (ReadOnly): Gets or sets the nic ip addresses.
* **ipSettings**: [NicIPSettings](#nicipsettings): Gets or sets the ipsettings.
* **label**: string (ReadOnly): Gets or sets the label of the virtual network in vCenter that the nic is connected to.
* **macAddress**: string (ReadOnly): Gets or sets the NIC MAC address.
* **name**: string: Gets or sets the name of the network interface.
* **networkId**: string: Gets or sets the ARM Id of the network resource to connect the virtual machine.
* **networkMoName**: string (ReadOnly): Gets or sets the name of the virtual network in vCenter that the nic is connected to.
* **networkMoRefId**: string (ReadOnly): Gets or sets the vCenter MoRef (Managed Object Reference) ID of the virtual network
that the nic is connected to.
* **nicType**: 'e1000' | 'e1000e' | 'pcnet32' | 'vmxnet' | 'vmxnet2' | 'vmxnet3' | string: NIC type
* **powerOnBoot**: 'disabled' | 'enabled' | string: Gets or sets the power on boot.

## NetworkProfile
### Properties
* **networkInterfaces**: [NetworkInterface](#networkinterface)[]: Gets or sets the list of network interfaces associated with the virtual machine.

## NicIPAddressSettings
### Properties
* **allocationMethod**: string (ReadOnly): Gets the ip address allocation method.
* **ipAddress**: string (ReadOnly): Gets the ip address for the nic.
* **subnetMask**: string (ReadOnly): Gets the mask.

## NicIPSettings
### Properties
* **allocationMethod**: 'dynamic' | 'linklayer' | 'other' | 'random' | 'static' | 'unset' | string: Gets or sets the nic allocation method.
* **dnsServers**: string[]: Gets or sets the dns servers.
* **gateway**: string[]: Gets or sets the gateway.
* **ipAddress**: string: Gets or sets the ip address for the nic.
* **ipAddressInfo**: [NicIPAddressSettings](#nicipaddresssettings)[] (ReadOnly): Gets or sets the IP address information being reported for this NIC. This contains the same IPv4 information above plus IPV6 information.
* **primaryWinsServer**: string (ReadOnly): Gets or sets the primary server.
* **secondaryWinsServer**: string (ReadOnly): Gets or sets the secondary server.
* **subnetMask**: string: Gets or sets the mask.

## OsProfileForVMInstance
### Properties
* **adminPassword**: string {sensitive} (WriteOnly): Sets administrator password.
* **adminUsername**: string: Gets or sets administrator username.
* **computerName**: string: Gets or sets computer name.
* **guestId**: string: Gets or sets the guestId.
* **osSku**: string (ReadOnly): Gets or sets os sku.
* **osType**: 'Linux' | 'Other' | 'Windows' | string: Gets or sets the type of the os.
* **toolsRunningStatus**: string (ReadOnly): Gets or sets the current running status of VMware Tools running in the guest operating system.
* **toolsVersion**: string (ReadOnly): Gets or sets the current version of VMware Tools.
* **toolsVersionStatus**: string (ReadOnly): Gets or sets the current version status of VMware Tools installed in the guest operating system.

## PlacementProfile
### Properties
* **clusterId**: string: Gets or sets the ARM Id of the cluster resource on which this virtual machine will deploy.
* **datastoreId**: string: Gets or sets the ARM Id of the datastore resource on which the data for the virtual machine will be kept.
* **hostId**: string: Gets or sets the ARM Id of the host resource on which this virtual machine will deploy.
* **resourcePoolId**: string: Gets or sets the ARM Id of the resourcePool resource on which this virtual machine will deploy.

## ResourcePoolProperties
### Properties
* **cpuCapacityMHz**: int (ReadOnly): Gets the max CPU usage across all cores on the pool in MHz.
* **cpuLimitMHz**: int (ReadOnly): Gets or sets CPULimitMHz which specifies a CPU usage limit in MHz.
Utilization will not exceed this limit even if there are available resources.
* **cpuOverallUsageMHz**: int (ReadOnly): Gets the used CPU usage across all cores on the pool in MHz.
* **cpuReservationMHz**: int (ReadOnly): Gets or sets CPUReservationMHz which specifies the CPU size in MHz that is guaranteed
to be available.
* **cpuSharesLevel**: string (ReadOnly): Gets or sets CPUSharesLevel which specifies the CPU allocation level for this pool.
This property is used in relative allocation between resource consumers.
* **customResourceName**: string (ReadOnly): Gets the name of the corresponding resource in Kubernetes.
* **datastoreIds**: string[] (ReadOnly): Gets the datastore ARM ids.
* **inventoryItemId**: string: Gets or sets the inventory Item ID for the resource pool.
* **memCapacityGB**: int (ReadOnly): Gets the total amount of physical memory on the pool in GB.
* **memLimitMB**: int (ReadOnly): Gets or sets MemLimitMB specifies a memory usage limit in megabytes.
Utilization will not exceed the specified limit even if there are available resources.
* **memOverallUsageGB**: int (ReadOnly): Gets the used physical memory on the pool in GB.
* **memReservationMB**: int (ReadOnly): Gets or sets MemReservationMB which specifies the guaranteed available memory in
megabytes.
* **memSharesLevel**: string (ReadOnly): Gets or sets CPUSharesLevel which specifies the memory allocation level for this pool.
This property is used in relative allocation between resource consumers.
* **moName**: string (ReadOnly): Gets or sets the vCenter Managed Object name for the resource pool.
* **moRefId**: string: Gets or sets the vCenter MoRef (Managed Object Reference) ID for the resource pool.
* **networkIds**: string[] (ReadOnly): Gets the network ARM ids.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets the provisioning state.
* **statuses**: [ResourceStatus](#resourcestatus)[] (ReadOnly): The resource status information.
* **uuid**: string (ReadOnly): Gets or sets a unique identifier for this resource.
* **vCenterId**: string: Gets or sets the ARM Id of the vCenter resource in which this resource pool resides.

## ResourcePoolTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceStatus
### Properties
* **lastUpdatedAt**: string (ReadOnly): The last update time for this condition.
* **message**: string (ReadOnly): A human readable message indicating details about the status.
* **reason**: string (ReadOnly): The reason for the condition's status.
* **severity**: string (ReadOnly): Severity with which to treat failures of this type of condition.
* **status**: string (ReadOnly): Status of the condition.
* **type**: string (ReadOnly): The type of the condition.

## SecurityProfile
### Properties
* **uefiSettings**: [UefiSettings](#uefisettings): Specifies the security settings like secure boot used while creating the virtual machine.

## StorageProfile
### Properties
* **disks**: [VirtualDisk](#virtualdisk)[]: Gets or sets the list of virtual disks associated with the virtual machine.
* **scsiControllers**: [VirtualScsiController](#virtualscsicontroller)[] (ReadOnly): Gets or sets the list of virtual SCSI controllers associated with the virtual machine.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## UefiSettings
### Properties
* **secureBootEnabled**: bool: Specifies whether secure boot should be enabled on the virtual machine.

## VCenterProperties
### Properties
* **connectionStatus**: string (ReadOnly): Gets or sets the connection status to the vCenter.
* **credentials**: [VICredential](#vicredential): Username / Password Credentials to connect to vcenter.
* **customResourceName**: string (ReadOnly): Gets the name of the corresponding resource in Kubernetes.
* **fqdn**: string (Required): Gets or sets the FQDN/IPAddress of the vCenter.
* **instanceUuid**: string (ReadOnly): Gets or sets the instance UUID of the vCenter.
* **port**: int {minValue: 1, maxValue: 65535}: Gets or sets the port of the vCenter.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets the provisioning state.
* **statuses**: [ResourceStatus](#resourcestatus)[] (ReadOnly): The resource status information.
* **uuid**: string (ReadOnly): Gets or sets a unique identifier for this resource.
* **version**: string (ReadOnly): Gets or sets the version of the vCenter.

## VCenterTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VICredential
### Properties
* **password**: string {sensitive} (WriteOnly): Gets or sets the password to connect with the vCenter.
* **username**: string: Gets or sets username to connect with the vCenter.

## VirtualDisk
### Properties
* **controllerKey**: int: Gets or sets the controller id.
* **deviceKey**: int: Gets or sets the device key value.
* **deviceName**: string: Gets or sets the device name.
* **diskMode**: 'independent_nonpersistent' | 'independent_persistent' | 'persistent' | string: Gets or sets the disk mode.
* **diskObjectId**: string (ReadOnly): Gets or sets the disk object id.
* **diskSizeGB**: int: Gets or sets the disk total size.
* **diskType**: 'flat' | 'pmem' | 'rawphysical' | 'rawvirtual' | 'sesparse' | 'sparse' | 'unknown' | string: Gets or sets the disk backing type.
* **label**: string (ReadOnly): Gets or sets the label of the virtual disk in vCenter.
* **name**: string: Gets or sets the name of the virtual disk.
* **unitNumber**: int: Gets or sets the unit number of the disk on the controller.

## VirtualMachineInstanceProperties
### Properties
* **hardwareProfile**: [HardwareProfile](#hardwareprofile): Hardware properties.
* **infrastructureProfile**: [InfrastructureProfile](#infrastructureprofile): Gets the infrastructure profile.
* **networkProfile**: [NetworkProfile](#networkprofile): Network properties.
* **osProfile**: [OsProfileForVMInstance](#osprofileforvminstance): OS properties.
* **placementProfile**: [PlacementProfile](#placementprofile): Placement properties.
* **powerState**: string (ReadOnly): Gets the power state of the virtual machine.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets the provisioning state.
* **resourceUid**: string (ReadOnly): Gets or sets a unique identifier for the vm resource.
* **securityProfile**: [SecurityProfile](#securityprofile): Gets the security profile.
* **statuses**: [ResourceStatus](#resourcestatus)[] (ReadOnly): The resource status information.
* **storageProfile**: [StorageProfile](#storageprofile): Storage properties.

## VirtualMachineTemplateProperties
### Properties
* **customResourceName**: string (ReadOnly): Gets the name of the corresponding resource in Kubernetes.
* **disks**: [VirtualDisk](#virtualdisk)[] (ReadOnly): Gets or sets the disks the template.
* **firmwareType**: 'bios' | 'efi' | string (ReadOnly): Firmware type
* **folderPath**: string (ReadOnly): Gets or sets the folder path of the template.
* **inventoryItemId**: string: Gets or sets the inventory Item ID for the virtual machine template.
* **memorySizeMB**: int (ReadOnly): Gets or sets memory size in MBs for the template.
* **moName**: string (ReadOnly): Gets or sets the vCenter Managed Object name for the virtual machine template.
* **moRefId**: string: Gets or sets the vCenter MoRef (Managed Object Reference) ID for the virtual machine
template.
* **networkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly): Gets or sets the network interfaces of the template.
* **numCoresPerSocket**: int (ReadOnly): Gets or sets the number of cores per socket for the template.
Defaults to 1 if unspecified.
* **numCPUs**: int (ReadOnly): Gets or sets the number of vCPUs for the template.
* **osName**: string (ReadOnly): Gets or sets os name.
* **osType**: 'Linux' | 'Other' | 'Windows' | string (ReadOnly): Gets or sets the type of the os.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets the provisioning state.
* **statuses**: [ResourceStatus](#resourcestatus)[] (ReadOnly): The resource status information.
* **toolsVersion**: string (ReadOnly): Gets or sets the current version of VMware Tools.
* **toolsVersionStatus**: string (ReadOnly): Gets or sets the current version status of VMware Tools installed in the guest operating system.
* **uuid**: string (ReadOnly): Gets or sets a unique identifier for this resource.
* **vCenterId**: string: Gets or sets the ARM Id of the vCenter resource in which this template resides.

## VirtualMachineTemplateTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualNetworkProperties
### Properties
* **customResourceName**: string (ReadOnly): Gets the name of the corresponding resource in Kubernetes.
* **inventoryItemId**: string: Gets or sets the inventory Item ID for the virtual network.
* **moName**: string (ReadOnly): Gets or sets the vCenter Managed Object name for the virtual network.
* **moRefId**: string: Gets or sets the vCenter MoRef (Managed Object Reference) ID for the virtual network.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets the provisioning state.
* **statuses**: [ResourceStatus](#resourcestatus)[] (ReadOnly): The resource status information.
* **uuid**: string (ReadOnly): Gets or sets a unique identifier for this resource.
* **vCenterId**: string: Gets or sets the ARM Id of the vCenter resource in which this template resides.

## VirtualNetworkTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualScsiController
### Properties
* **busNumber**: int: Gets or sets the bus number of the controller.
* **controllerKey**: int: Gets or sets the key of the controller.
* **scsiCtlrUnitNumber**: int: Gets or sets the SCSI controller unit number.
* **sharing**: 'noSharing' | 'physicalSharing' | 'virtualSharing' | string: Gets or sets the sharing mode.
* **type**: 'buslogic' | 'lsilogic' | 'lsilogicsas' | 'pvscsi' | string: Gets or sets the controller type.

## VmInstanceHybridIdentityMetadataProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets the provisioning state.
* **publicKey**: string: Gets or sets the Public Key.
* **resourceUid**: string: The unique identifier for the resource.

