# Microsoft.ConnectedVMwarevSphere @ 2020-10-01-preview

## Resource Microsoft.ConnectedVMwarevSphere/clusters@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Gets or sets the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): Gets or sets the location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **tags**: [ClusterTags](#clustertags): Gets or sets the Resource tags.
* **type**: 'Microsoft.ConnectedVMwarevSphere/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConnectedVMwarevSphere/datastores@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Gets or sets the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): Gets or sets the location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatastoreProperties](#datastoreproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **tags**: [DatastoreTags](#datastoretags): Gets or sets the Resource tags.
* **type**: 'Microsoft.ConnectedVMwarevSphere/datastores' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConnectedVMwarevSphere/hosts@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Gets or sets the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): Gets or sets the location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HostProperties](#hostproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **tags**: [HostTags](#hosttags): Gets or sets the Resource tags.
* **type**: 'Microsoft.ConnectedVMwarevSphere/hosts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConnectedVMwarevSphere/resourcePools@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Gets or sets the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): Gets or sets the location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ResourcePoolProperties](#resourcepoolproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **tags**: [ResourcePoolTags](#resourcepooltags): Gets or sets the Resource tags.
* **type**: 'Microsoft.ConnectedVMwarevSphere/resourcePools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConnectedVMwarevSphere/vcenters@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Gets or sets the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): Gets or sets the location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VCenterProperties](#vcenterproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **tags**: [VCenterTags](#vcentertags): Gets or sets the Resource tags.
* **type**: 'Microsoft.ConnectedVMwarevSphere/vcenters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConnectedVMwarevSphere/vcenters/inventoryItems@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InventoryItemProperties](#inventoryitemproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **type**: 'Microsoft.ConnectedVMwarevSphere/vcenters/inventoryItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConnectedVMwarevSphere/virtualMachines@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Gets or sets the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the resource.
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): Gets or sets the location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineProperties](#virtualmachineproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **tags**: [VirtualMachineTags](#virtualmachinetags): Gets or sets the Resource tags.
* **type**: 'Microsoft.ConnectedVMwarevSphere/virtualMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConnectedVMwarevSphere/virtualMachines/extensions@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Gets or sets the location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MachineExtensionProperties](#machineextensionproperties): Describes Machine Extension Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **tags**: [MachineExtensionTags](#machineextensiontags): Gets or sets the Resource tags.
* **type**: 'Microsoft.ConnectedVMwarevSphere/virtualMachines/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConnectedVMwarevSphere/virtualMachines/guestAgents@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GuestAgentProperties](#guestagentproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **type**: 'Microsoft.ConnectedVMwarevSphere/virtualMachines/guestAgents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConnectedVMwarevSphere/virtualMachines/hybridIdentityMetadata@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridIdentityMetadataProperties](#hybrididentitymetadataproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **type**: 'Microsoft.ConnectedVMwarevSphere/virtualMachines/hybridIdentityMetadata' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Gets or sets the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): Gets or sets the location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineTemplateProperties](#virtualmachinetemplateproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **tags**: [VirtualMachineTemplateTags](#virtualmachinetemplatetags): Gets or sets the Resource tags.
* **type**: 'Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConnectedVMwarevSphere/virtualNetworks@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
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
* **datastoreIds**: string[] (ReadOnly): Gets or sets the datastore ARM ids.
* **inventoryItemId**: string: Gets or sets the inventory Item ID for the cluster.
* **moName**: string (ReadOnly): Gets or sets the vCenter Managed Object name for the cluster.
* **moRefId**: string: Gets or sets the vCenter MoRef (Managed Object Reference) ID for the cluster.
* **networkIds**: string[] (ReadOnly): Gets or sets the network ARM ids.
* **provisioningState**: string (ReadOnly): Gets or sets the provisioning state.
* **statuses**: [ResourceStatus](#resourcestatus)[] (ReadOnly): The resource status information.
* **uuid**: string (ReadOnly): Gets or sets a unique identifier for this resource.
* **vCenterId**: string: Gets or sets the ARM Id of the vCenter resource in which this cluster resides.

## ClusterTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatastoreProperties
### Properties
* **customResourceName**: string (ReadOnly): Gets the name of the corresponding resource in Kubernetes.
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

## ErrorDetail
### Properties
* **code**: string (Required): The error's code.
* **details**: [ErrorDetail](#errordetail)[]: Additional error details.
* **message**: string (Required): A human readable error message.
* **target**: string: Indicates which property in the request is responsible for the error.

## ExtendedLocation
### Properties
* **name**: string: The extended location name.
* **type**: string: The extended location type.

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
* **customResourceName**: string (ReadOnly): Gets the name of the corresponding resource in Kubernetes.
* **httpProxyConfig**: [HttpProxyConfiguration](#httpproxyconfiguration): HTTP Proxy configuration for the VM.
* **provisioningAction**: 'install' | 'repair' | 'uninstall' | string: Gets or sets the guest agent provisioning action.
* **provisioningState**: string (ReadOnly): Gets or sets the provisioning state.
* **status**: string (ReadOnly): Gets or sets the guest agent status.
* **statuses**: [ResourceStatus](#resourcestatus)[] (ReadOnly): The resource status information.
* **uuid**: string (ReadOnly): Gets or sets a unique identifier for this resource.

## GuestCredential
### Properties
* **password**: string (WriteOnly): Gets or sets the password to connect with the guest.
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
* **customResourceName**: string (ReadOnly): Gets the name of the corresponding resource in Kubernetes.
* **inventoryItemId**: string: Gets or sets the inventory Item ID for the host.
* **moName**: string (ReadOnly): Gets or sets the vCenter Managed Object name for the host.
* **moRefId**: string: Gets or sets the vCenter MoRef (Managed Object Reference) ID for the host.
* **provisioningState**: string (ReadOnly): Gets or sets the provisioning state.
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

## HybridIdentityMetadataProperties
### Properties
* **identity**: [Identity](#identity) (ReadOnly): The identity of the resource.
* **provisioningState**: string (ReadOnly): Gets or sets the provisioning state.
* **publicKey**: string: Gets or sets the Public Key.
* **vmId**: string: Gets or sets the Vm Id.

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal id of managed service identity.
* **tenantId**: string (ReadOnly): The tenant of managed service identity.
* **type**: 'None' | 'SystemAssigned' | string (Required): The type of managed service identity.

## InventoryItemDetails
### Properties
* **inventoryItemId**: string: Gets or sets the inventory Item ID for the resource.
* **moName**: string: Gets or sets the vCenter Managed Object name for the resource.

## InventoryItemProperties
* **Discriminator**: inventoryType

### Base Properties
* **managedResourceId**: string: Gets or sets the tracked resource id corresponding to the inventory resource.
* **moName**: string: Gets or sets the vCenter Managed Object name for the inventory item.
* **moRefId**: string: Gets or sets the MoRef (Managed Object Reference) ID for the inventory item.
* **provisioningState**: string (ReadOnly): Gets or sets the provisioning state.
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

### VirtualNetworkInventoryItem
#### Properties
* **inventoryType**: 'VirtualNetwork' (Required): They inventory type.


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

## OsProfile
### Properties
* **adminPassword**: string (WriteOnly): Gets or sets administrator password.
* **adminUsername**: string: Gets or sets administrator username.
* **computerName**: string: Gets or sets computer name.
* **osName**: string (ReadOnly): Gets or sets os name.
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
* **cpuLimitMHz**: int (ReadOnly): Gets or sets CPULimitMHz which specifies a CPU usage limit in MHz.
Utilization will not exceed this limit even if there are available resources.
* **cpuReservationMHz**: int (ReadOnly): Gets or sets CPUReservationMHz which specifies the CPU size in MHz that is guaranteed
to be available.
* **cpuSharesLevel**: string (ReadOnly): Gets or sets CPUSharesLevel which specifies the CPU allocation level for this pool.
This property is used in relative allocation between resource consumers.
* **customResourceName**: string (ReadOnly): Gets the name of the corresponding resource in Kubernetes.
* **inventoryItemId**: string: Gets or sets the inventory Item ID for the resource pool.
* **memLimitMB**: int (ReadOnly): Gets or sets MemLimitMB specifies a memory usage limit in megabytes.
Utilization will not exceed the specified limit even if there are available resources.
* **memReservationMB**: int (ReadOnly): Gets or sets MemReservationMB which specifies the guaranteed available memory in
megabytes.
* **memSharesLevel**: string (ReadOnly): Gets or sets CPUSharesLevel which specifies the memory allocation level for this pool.
This property is used in relative allocation between resource consumers.
* **moName**: string (ReadOnly): Gets or sets the vCenter Managed Object name for the resource pool.
* **moRefId**: string: Gets or sets the vCenter MoRef (Managed Object Reference) ID for the resource pool.
* **provisioningState**: string (ReadOnly): Gets or sets the provisioning state.
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

## VCenterProperties
### Properties
* **connectionStatus**: string (ReadOnly): Gets or sets the connection status to the vCenter.
* **credentials**: [VICredential](#vicredential): Username / Password Credentials to connect to vcenter.
* **customResourceName**: string (ReadOnly): Gets the name of the corresponding resource in Kubernetes.
* **fqdn**: string (Required): Gets or sets the FQDN/IPAddress of the vCenter.
* **instanceUuid**: string (ReadOnly): Gets or sets the instance UUID of the vCenter.
* **port**: int: Gets or sets the port of the vCenter.
* **provisioningState**: string (ReadOnly): Gets or sets the provisioning state.
* **statuses**: [ResourceStatus](#resourcestatus)[] (ReadOnly): The resource status information.
* **uuid**: string (ReadOnly): Gets or sets a unique identifier for this resource.
* **version**: string (ReadOnly): Gets or sets the version of the vCenter.

## VCenterTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VICredential
### Properties
* **password**: string (WriteOnly): Gets or sets the password to connect with the vCenter.
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

## VirtualMachineProperties
### Properties
* **customResourceName**: string (ReadOnly): Gets the name of the corresponding resource in Kubernetes.
* **firmwareType**: 'bios' | 'efi' | string: Firmware type
* **folderPath**: string (ReadOnly): Gets or sets the folder path of the vm.
* **guestAgentProfile**: [GuestAgentProfile](#guestagentprofile): Guest agent status properties.
* **hardwareProfile**: [HardwareProfile](#hardwareprofile): Hardware properties.
* **instanceUuid**: string (ReadOnly): Gets or sets the instance uuid of the vm.
* **inventoryItemId**: string: Gets or sets the inventory Item ID for the virtual machine.
* **moName**: string (ReadOnly): Gets or sets the vCenter Managed Object name for the virtual machine.
* **moRefId**: string: Gets or sets the vCenter MoRef (Managed Object Reference) ID for the virtual machine.
* **networkProfile**: [NetworkProfile](#networkprofile): Network properties.
* **osProfile**: [OsProfile](#osprofile): OS properties.
* **placementProfile**: [PlacementProfile](#placementprofile): Placement properties.
* **powerState**: string (ReadOnly): Gets the power state of the virtual machine.
* **provisioningState**: string (ReadOnly): Gets or sets the provisioning state.
* **resourcePoolId**: string: Gets or sets the ARM Id of the resourcePool resource on which this virtual machine will
deploy.
* **smbiosUuid**: string: Gets or sets the SMBIOS UUID of the vm.
* **statuses**: [ResourceStatus](#resourcestatus)[] (ReadOnly): The resource status information.
* **storageProfile**: [StorageProfile](#storageprofile): Storage properties.
* **templateId**: string: Gets or sets the ARM Id of the template resource to deploy the virtual machine.
* **uuid**: string (ReadOnly): Gets or sets a unique identifier for this resource.
* **vCenterId**: string: Gets or sets the ARM Id of the vCenter resource in which this resource pool resides.
* **vmId**: string (ReadOnly): Gets or sets a unique identifier for the vm resource.

## VirtualMachineTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **provisioningState**: string (ReadOnly): Gets or sets the provisioning state.
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
* **provisioningState**: string (ReadOnly): Gets or sets the provisioning state.
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

