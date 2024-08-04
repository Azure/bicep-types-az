# Microsoft.ScVmm @ 2024-06-01

## Resource Microsoft.ScVmm/availabilitySets@2024-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 54, pattern: "[a-zA-Z0-9-_\.]"} (Required, DeployTimeConstant): The resource name
* **properties**: [AvailabilitySetProperties](#availabilitysetproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ScVmm/availabilitySets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ScVmm/clouds@2024-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 54, pattern: "[a-zA-Z0-9-_\.]"} (Required, DeployTimeConstant): The resource name
* **properties**: [CloudProperties](#cloudproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ScVmm/clouds' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ScVmm/virtualMachineInstances@2024-06-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): Gets or sets the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineInstanceProperties](#virtualmachineinstanceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ScVmm/virtualMachineInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ScVmm/virtualMachineInstances/guestAgents@2024-06-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [GuestAgentProperties](#guestagentproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ScVmm/virtualMachineInstances/guestAgents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ScVmm/virtualMachineInstances/hybridIdentityMetadata@2024-06-01 (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [VmInstanceHybridIdentityMetadataProperties](#vminstancehybrididentitymetadataproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ScVmm/virtualMachineInstances/hybridIdentityMetadata' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ScVmm/virtualMachineTemplates@2024-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 54, pattern: "[a-zA-Z0-9-_\.]"} (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineTemplateProperties](#virtualmachinetemplateproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ScVmm/virtualMachineTemplates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ScVmm/virtualNetworks@2024-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 54, pattern: "[a-zA-Z0-9-_\.]"} (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkProperties](#virtualnetworkproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ScVmm/virtualNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ScVmm/vmmServers@2024-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 54, pattern: "[a-zA-Z0-9-_\.]"} (Required, DeployTimeConstant): The resource name
* **properties**: [VmmServerProperties](#vmmserverproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ScVmm/vmmServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ScVmm/vmmServers/inventoryItems@2024-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **name**: string {pattern: "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [InventoryItemProperties](#inventoryitemproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ScVmm/vmmServers/inventoryItems' (ReadOnly, DeployTimeConstant): The resource type

## AvailabilitySetListItem
### Properties
* **id**: string: Gets the ARM Id of the microsoft.scvmm/availabilitySets resource.
* **name**: string: Gets or sets the name of the availability set.

## AvailabilitySetProperties
### Properties
* **availabilitySetName**: string {minLength: 1}: Name of the availability set.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **vmmServerId**: string: ARM Id of the vmmServer resource in which this resource resides.

## Checkpoint
### Properties
* **checkpointID**: string: Gets ID of the checkpoint.
* **description**: string: Gets description of the checkpoint.
* **name**: string: Gets name of the checkpoint.
* **parentCheckpointID**: string: Gets ID of parent of the checkpoint.

## CloudCapacity
### Properties
* **cpuCount**: int (ReadOnly): CPUCount specifies the maximum number of CPUs that can be allocated in the cloud.
* **memoryMB**: int (ReadOnly): MemoryMB specifies a memory usage limit in megabytes.
* **vmCount**: int (ReadOnly): VMCount gives the max number of VMs that can be deployed in the cloud.

## CloudProperties
### Properties
* **cloudCapacity**: [CloudCapacity](#cloudcapacity) (ReadOnly): Capacity of the cloud.
* **cloudName**: string (ReadOnly): Name of the cloud in VmmServer.
* **inventoryItemId**: string: Gets or sets the inventory Item ID for the resource.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **storageQoSPolicies**: [StorageQosPolicy](#storageqospolicy)[] (ReadOnly): List of QoS policies available for the cloud.
* **uuid**: string {pattern: "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"}: Unique ID of the cloud.
* **vmmServerId**: string: ARM Id of the vmmServer resource in which this resource resides.

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
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **status**: string (ReadOnly): Gets the guest agent status.
* **uuid**: string (ReadOnly): Gets a unique identifier for this resource.

## GuestCredential
### Properties
* **password**: string {sensitive} (Required, WriteOnly): Gets or sets the password to connect with the guest.
* **username**: string (Required): Gets or sets username to connect with the guest.

## HardwareProfile
### Properties
* **cpuCount**: int: Gets or sets the number of vCPUs for the vm.
* **dynamicMemoryEnabled**: 'false' | 'true' | string: Gets or sets a value indicating whether to enable dynamic memory or not.
* **dynamicMemoryMaxMB**: int: Gets or sets the max dynamic memory for the vm.
* **dynamicMemoryMinMB**: int: Gets or sets the min dynamic memory for the vm.
* **isHighlyAvailable**: 'false' | 'true' | string (ReadOnly): Gets highly available property.
* **limitCpuForMigration**: 'false' | 'true' | string: Gets or sets a value indicating whether to enable processor compatibility mode for live migration of VMs.
* **memoryMB**: int: MemoryMB is the size of a virtual machine's memory, in MB.

## HttpProxyConfiguration
### Properties
* **httpsProxy**: string: Gets or sets httpsProxy url.

## InfrastructureProfile
### Properties
* **biosGuid**: string: Gets or sets the bios guid for the vm.
* **checkpoints**: [Checkpoint](#checkpoint)[] (ReadOnly): Checkpoints in the vm.
* **checkpointType**: string: Type of checkpoint supported for the vm.
* **cloudId**: string: ARM Id of the cloud resource to use for deploying the vm.
* **generation**: int: Gets or sets the generation for the vm.
* **inventoryItemId**: string: Gets or sets the inventory Item ID for the resource.
* **lastRestoredVMCheckpoint**: [Checkpoint](#checkpoint) (ReadOnly): Last restored checkpoint in the vm.
* **templateId**: string: ARM Id of the template resource to use for deploying the vm.
* **uuid**: string: Unique ID of the virtual machine.
* **vmmServerId**: string: ARM Id of the vmmServer resource in which this resource resides.
* **vmName**: string {minLength: 1}: VMName is the name of VM on the SCVmm server.

## InventoryItemDetails
### Properties
* **inventoryItemId**: string: Gets or sets the inventory Item ID for the resource.
* **inventoryItemName**: string: Gets or sets the Managed Object name in Vmm for the resource.

## InventoryItemProperties
* **Discriminator**: inventoryType

### Base Properties
* **inventoryItemName**: string (ReadOnly): Gets the Managed Object name in Vmm for the inventory item.
* **managedResourceId**: string (ReadOnly): Gets the tracked resource id corresponding to the inventory resource.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **uuid**: string (ReadOnly): Gets the UUID (which is assigned by Vmm) for the inventory item.

### CloudInventoryItem
#### Properties
* **inventoryType**: 'Cloud' (Required): They inventory type.

### VirtualMachineInventoryItem
#### Properties
* **biosGuid**: string (ReadOnly): Gets the bios guid.
* **cloud**: [InventoryItemDetails](#inventoryitemdetails): Cloud inventory resource details where the VM is present.
* **inventoryType**: 'VirtualMachine' (Required): They inventory type.
* **ipAddresses**: string[]: Gets or sets the nic ip addresses.
* **managedMachineResourceId**: string (ReadOnly): Gets the tracked resource id corresponding to the inventory resource.
* **osName**: string (ReadOnly): Gets os name.
* **osType**: 'Linux' | 'Other' | 'Windows' | string (ReadOnly): Gets the type of the os.
* **osVersion**: string (ReadOnly): Gets os version.
* **powerState**: string (ReadOnly): Gets the power state of the virtual machine.

### VirtualMachineTemplateInventoryItem
#### Properties
* **cpuCount**: int (ReadOnly): Gets the desired number of vCPUs for the vm.
* **inventoryType**: 'VirtualMachineTemplate' (Required): They inventory type.
* **memoryMB**: int (ReadOnly): MemoryMB is the desired size of a virtual machine's memory, in MB.
* **osName**: string (ReadOnly): Gets os name.
* **osType**: 'Linux' | 'Other' | 'Windows' | string (ReadOnly): Gets the type of the os.

### VirtualNetworkInventoryItem
#### Properties
* **inventoryType**: 'VirtualNetwork' (Required): They inventory type.


## NetworkInterface
### Properties
* **displayName**: string (ReadOnly): Gets the display name of the network interface as shown in the vmmServer. This is the fallback label for a NIC when the name is not set.
* **ipv4Addresses**: string[] (ReadOnly): Gets the nic ipv4 addresses.
* **ipv4AddressType**: 'Dynamic' | 'Static' | string: Gets or sets the ipv4 address type.
* **ipv6Addresses**: string[] (ReadOnly): Gets the nic ipv6 addresses.
* **ipv6AddressType**: 'Dynamic' | 'Static' | string: Gets or sets the ipv6 address type.
* **macAddress**: string: Gets or sets the nic MAC address.
* **macAddressType**: 'Dynamic' | 'Static' | string: Gets or sets the mac address type.
* **name**: string: Gets or sets the name of the network interface.
* **networkName**: string (ReadOnly): Gets the name of the virtual network in vmmServer that the nic is connected to.
* **nicId**: string: Gets or sets the nic id.
* **virtualNetworkId**: string: Gets or sets the ARM Id of the Microsoft.ScVmm/virtualNetwork resource to connect the nic.

## NetworkProfile
### Properties
* **networkInterfaces**: [NetworkInterface](#networkinterface)[]: Gets or sets the list of network interfaces associated with the virtual machine.

## OsProfileForVmInstance
### Properties
* **adminPassword**: string {sensitive} (WriteOnly): Admin password of the virtual machine.
* **computerName**: string: Gets or sets computer name.
* **domainName**: string: Gets or sets the domain name.
* **domainPassword**: string {sensitive} (WriteOnly): Password of the domain the VM has to join.
* **domainUsername**: string: Gets or sets the domain username.
* **osSku**: string (ReadOnly): Gets os sku.
* **osType**: 'Linux' | 'Other' | 'Windows' | string (ReadOnly): Gets the type of the os.
* **osVersion**: string (ReadOnly): Gets os version.
* **productKey**: string {sensitive} (WriteOnly): Gets or sets the product key.Input format xxxxx-xxxxx-xxxxx-xxxxx-xxxxx
* **runOnceCommands**: string: Get or sets the commands to be run once at the time of creation separated by semicolons.
* **timezone**: int: Gets or sets the index value of the timezone.
* **workgroup**: string: Gets or sets the workgroup.

## StorageProfile
### Properties
* **disks**: [VirtualDisk](#virtualdisk)[]: Gets or sets the list of virtual disks associated with the virtual machine.

## StorageQosPolicy
### Properties
* **bandwidthLimit**: int: The Bandwidth Limit for internet traffic.
* **id**: string: The ID of the QoS policy.
* **iopsMaximum**: int: The maximum IO operations per second.
* **iopsMinimum**: int: The minimum IO operations per second.
* **name**: string: The name of the policy.
* **policyId**: string: The underlying policy.

## StorageQosPolicyDetails
### Properties
* **id**: string: The ID of the QoS policy.
* **name**: string: The name of the policy.

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

## VirtualDisk
### Properties
* **bus**: int: Gets or sets the disk bus.
* **busType**: string: Gets or sets the disk bus type.
* **createDiffDisk**: 'false' | 'true' | string: Gets or sets a value indicating diff disk.
* **diskId**: string: Gets or sets the disk id.
* **diskSizeGB**: int: Gets or sets the disk total size.
* **displayName**: string (ReadOnly): Gets the display name of the virtual disk as shown in the vmmServer. This is the fallback label for a disk when the name is not set.
* **lun**: int: Gets or sets the disk lun.
* **maxDiskSizeGB**: int (ReadOnly): Gets the max disk size.
* **name**: string: Gets or sets the name of the disk.
* **storageQoSPolicy**: [StorageQosPolicyDetails](#storageqospolicydetails): The QoS policy for the disk.
* **templateDiskId**: string: Gets or sets the disk id in the template.
* **vhdFormatType**: string (ReadOnly): Gets the disk vhd format type.
* **vhdType**: string: Gets or sets the disk vhd type.
* **volumeType**: string (ReadOnly): Gets the disk volume type.

## VirtualMachineInstanceProperties
### Properties
* **availabilitySets**: [AvailabilitySetListItem](#availabilitysetlistitem)[]: Availability Sets in vm.
* **hardwareProfile**: [HardwareProfile](#hardwareprofile): Hardware properties.
* **infrastructureProfile**: [InfrastructureProfile](#infrastructureprofile): Gets the infrastructure profile.
* **networkProfile**: [NetworkProfile](#networkprofile): Network properties.
* **osProfile**: [OsProfileForVmInstance](#osprofileforvminstance): OS properties.
* **powerState**: string (ReadOnly): Gets the power state of the virtual machine.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **storageProfile**: [StorageProfile](#storageprofile): Storage properties.

## VirtualMachineTemplateProperties
### Properties
* **computerName**: string (ReadOnly): Gets computer name.
* **cpuCount**: int (ReadOnly): Gets the desired number of vCPUs for the vm.
* **disks**: [VirtualDisk](#virtualdisk)[] (ReadOnly): Gets the disks of the template.
* **dynamicMemoryEnabled**: 'false' | 'true' | string (ReadOnly): Gets a value indicating whether to enable dynamic memory or not.
* **dynamicMemoryMaxMB**: int (ReadOnly): Gets the max dynamic memory for the vm.
* **dynamicMemoryMinMB**: int (ReadOnly): Gets the min dynamic memory for the vm.
* **generation**: int (ReadOnly): Gets the generation for the vm.
* **inventoryItemId**: string: Gets or sets the inventory Item ID for the resource.
* **isCustomizable**: 'false' | 'true' | string (ReadOnly): Gets a value indicating whether the vm template is customizable or not.
* **isHighlyAvailable**: 'false' | 'true' | string (ReadOnly): Gets highly available property.
* **limitCpuForMigration**: 'false' | 'true' | string (ReadOnly): Gets a value indicating whether to enable processor compatibility mode for live migration of VMs.
* **memoryMB**: int (ReadOnly): MemoryMB is the desired size of a virtual machine's memory, in MB.
* **networkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly): Gets the network interfaces of the template.
* **osName**: string (ReadOnly): Gets os name.
* **osType**: 'Linux' | 'Other' | 'Windows' | string (ReadOnly): Gets the type of the os.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **uuid**: string {pattern: "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"}: Unique ID of the virtual machine template.
* **vmmServerId**: string: ARM Id of the vmmServer resource in which this resource resides.

## VirtualNetworkProperties
### Properties
* **inventoryItemId**: string: Gets or sets the inventory Item ID for the resource.
* **networkName**: string (ReadOnly): Name of the virtual network in vmmServer.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **uuid**: string {pattern: "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"}: Unique ID of the virtual network.
* **vmmServerId**: string: ARM Id of the vmmServer resource in which this resource resides.

## VmInstanceHybridIdentityMetadataProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **publicKey**: string: Gets or sets the Public Key.
* **resourceUid**: string: The unique identifier for the resource.

## VmmCredential
### Properties
* **password**: string {sensitive} (WriteOnly): Password to use to connect to VmmServer.
* **username**: string: Username to use to connect to VmmServer.

## VmmServerProperties
### Properties
* **connectionStatus**: string (ReadOnly): Gets the connection status to the vmmServer.
* **credentials**: [VmmCredential](#vmmcredential): Credentials to connect to VmmServer.
* **errorMessage**: string (ReadOnly): Gets any error message if connection to vmmServer is having any issue.
* **fqdn**: string {minLength: 1} (Required): Fqdn is the hostname/ip of the vmmServer.
* **port**: int {minValue: 1, maxValue: 65535}: Port is the port on which the vmmServer is listening.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **uuid**: string (ReadOnly): Unique ID of vmmServer.
* **version**: string (ReadOnly): Version is the version of the vmmSever.

