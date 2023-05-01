# Microsoft.ScVmm @ 2022-05-21-preview

## Resource Microsoft.ScVmm/availabilitySets@2022-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Gets or sets the location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AvailabilitySetProperties](#availabilitysetproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **tags**: [AvailabilitySetTags](#availabilitysettags): Resource tags
* **type**: 'Microsoft.ScVmm/availabilitySets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ScVmm/clouds@2022-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Gets or sets the location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CloudProperties](#cloudproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **tags**: [CloudTags](#cloudtags): Resource tags
* **type**: 'Microsoft.ScVmm/clouds' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ScVmm/virtualMachines@2022-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the resource.
* **location**: string (Required): Gets or sets the location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineProperties](#virtualmachineproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **tags**: [VirtualMachineTags](#virtualmachinetags): Resource tags
* **type**: 'Microsoft.ScVmm/virtualMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ScVmm/virtualMachines/extensions@2022-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MachineExtensionProperties](#machineextensionproperties): Describes Machine Extension Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ScVmm/virtualMachines/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ScVmm/virtualMachines/guestAgents@2022-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GuestAgentProperties](#guestagentproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ScVmm/virtualMachines/guestAgents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ScVmm/virtualMachines/hybridIdentityMetadata@2022-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridIdentityMetadataProperties](#hybrididentitymetadataproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ScVmm/virtualMachines/hybridIdentityMetadata' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ScVmm/virtualMachineTemplates@2022-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Gets or sets the location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineTemplateProperties](#virtualmachinetemplateproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **tags**: [VirtualMachineTemplateTags](#virtualmachinetemplatetags): Resource tags
* **type**: 'Microsoft.ScVmm/virtualMachineTemplates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ScVmm/virtualNetworks@2022-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Gets or sets the location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkProperties](#virtualnetworkproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **tags**: [VirtualNetworkTags](#virtualnetworktags): Resource tags
* **type**: 'Microsoft.ScVmm/virtualNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ScVmm/vmmServers@2022-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Gets or sets the location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VMMServerProperties](#vmmserverproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **tags**: [VMMServerTags](#vmmservertags): Resource tags
* **type**: 'Microsoft.ScVmm/vmmServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ScVmm/vmmServers/inventoryItems@2022-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InventoryItemProperties](#inventoryitemproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ScVmm/vmmServers/inventoryItems' (ReadOnly, DeployTimeConstant): The resource type

## AvailabilitySetListItem
### Properties
* **id**: string: Gets the ARM Id of the microsoft.scvmm/availabilitySets resource.
* **name**: string: Gets or sets the name of the availability set.

## AvailabilitySetProperties
### Properties
* **availabilitySetName**: string: Name of the availability set.
* **provisioningState**: string (ReadOnly): Gets or sets the provisioning state.
* **vmmServerId**: string: ARM Id of the vmmServer resource in which this resource resides.

## AvailabilitySetTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Checkpoint
### Properties
* **checkpointID**: string: Gets ID of the checkpoint.
* **description**: string: Gets description of the checkpoint.
* **name**: string: Gets name of the checkpoint.
* **parentCheckpointID**: string: Gets ID of parent of the checkpoint.

## CloudCapacity
### Properties
* **cpuCount**: int: CPUCount specifies the maximum number of CPUs that can be allocated in the cloud.
* **memoryMB**: int: MemoryMB specifies a memory usage limit in megabytes.
* **vmCount**: int: VMCount gives the max number of VMs that can be deployed in the cloud.

## CloudProperties
### Properties
* **cloudCapacity**: [CloudCapacity](#cloudcapacity) (ReadOnly): Capacity of the cloud.
* **cloudName**: string (ReadOnly): Name of the cloud in VMMServer.
* **inventoryItemId**: string: Gets or sets the inventory Item ID for the resource.
* **provisioningState**: string (ReadOnly): Gets or sets the provisioning state.
* **storageQoSPolicies**: [StorageQoSPolicy](#storageqospolicy)[] (ReadOnly): List of QoS policies available for the cloud.
* **uuid**: string: Unique ID of the cloud.
* **vmmServerId**: string: ARM Id of the vmmServer resource in which this resource resides.

## CloudTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **name**: string: The extended location name.
* **type**: string: The extended location type.

## GuestAgentProfile
### Properties
* **agentVersion**: string (ReadOnly): The hybrid machine agent full version.
* **clientPublicKey**: string: Gets or sets the Public Key provided by the client for enabling guest management.
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
* **uuid**: string (ReadOnly): Gets or sets a unique identifier for this resource.

## GuestCredential
### Properties
* **password**: string (WriteOnly): Gets or sets the password to connect with the guest.
* **username**: string: Gets or sets username to connect with the guest.

## HardwareProfile
### Properties
* **cpuCount**: int: Gets or sets the number of vCPUs for the vm.
* **dynamicMemoryEnabled**: 'false' | 'true' | string: Gets or sets a value indicating whether to enable dynamic memory or not.
* **dynamicMemoryMaxMB**: int: Gets or sets the max dynamic memory for the vm.
* **dynamicMemoryMinMB**: int: Gets or sets the min dynamic memory for the vm.
* **isHighlyAvailable**: string: Gets highly available property.
* **limitCpuForMigration**: 'false' | 'true' | string: Gets or sets a value indicating whether to enable processor compatibility mode for live migration of VMs.
* **memoryMB**: int: MemoryMB is the size of a virtual machine's memory, in MB.

## HttpProxyConfiguration
### Properties
* **httpsProxy**: string: Gets or sets httpsProxy url.

## HybridIdentityMetadataProperties
### Properties
* **identity**: [Identity](#identity) (ReadOnly): The identity of the resource.
* **provisioningState**: string (ReadOnly): Gets or sets the provisioning state.
* **publicKey**: string: Gets or sets the Public Key.
* **resourceUid**: string: Gets or sets the Vm Id.

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal id of managed service identity.
* **tenantId**: string (ReadOnly): The tenant of managed service identity.
* **type**: 'None' | 'SystemAssigned' | string (Required): The type of managed service identity.

## InventoryItemDetails
### Properties
* **inventoryItemId**: string: Gets or sets the inventory Item ID for the resource.
* **inventoryItemName**: string: Gets or sets the Managed Object name in VMM for the resource.

## InventoryItemProperties
* **Discriminator**: inventoryType

### Base Properties
* **inventoryItemName**: string (ReadOnly): Gets the Managed Object name in VMM for the inventory item.
* **managedResourceId**: string (ReadOnly): Gets the tracked resource id corresponding to the inventory resource.
* **provisioningState**: string (ReadOnly): Gets the provisioning state.
* **uuid**: string (ReadOnly): Gets the UUID (which is assigned by VMM) for the inventory item.

### CloudInventoryItem
#### Properties
* **inventoryType**: 'Cloud' (Required): They inventory type.

### VirtualMachineInventoryItem
#### Properties
* **cloud**: [InventoryItemDetails](#inventoryitemdetails): Cloud inventory resource details where the VM is present.
* **inventoryType**: 'VirtualMachine' (Required): They inventory type.
* **ipAddresses**: string[]: Gets or sets the nic ip addresses.
* **osName**: string (ReadOnly): Gets or sets os name.
* **osType**: 'Linux' | 'Other' | 'Windows' | string (ReadOnly): Gets or sets the type of the os.
* **powerState**: string (ReadOnly): Gets the power state of the virtual machine.

### VirtualMachineTemplateInventoryItem
#### Properties
* **cpuCount**: int (ReadOnly): Gets or sets the desired number of vCPUs for the vm.
* **inventoryType**: 'VirtualMachineTemplate' (Required): They inventory type.
* **memoryMB**: int (ReadOnly): MemoryMB is the desired size of a virtual machine's memory, in MB.
* **osName**: string (ReadOnly): Gets or sets os name.
* **osType**: 'Linux' | 'Other' | 'Windows' | string (ReadOnly): Gets or sets the type of the os.

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
* **enableAutomaticUpgrade**: bool: Indicates whether the extension should be automatically upgraded by the platform if there is a newer version available.
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

## NetworkInterfaces
### Properties
* **displayName**: string (ReadOnly): Gets the display name of the network interface as shown in the vmmServer. This is the fallback label for a NIC when the name is not set.
* **ipv4Addresses**: string[] (ReadOnly): Gets or sets the nic ipv4 addresses.
* **ipv4AddressType**: 'Dynamic' | 'Static' | string: Gets or sets the ipv4 address type.
* **ipv6Addresses**: string[] (ReadOnly): Gets or sets the nic ipv6 addresses.
* **ipv6AddressType**: 'Dynamic' | 'Static' | string: Gets or sets the ipv6 address type.
* **macAddress**: string: Gets or sets the nic MAC address.
* **macAddressType**: 'Dynamic' | 'Static' | string: Gets or sets the mac address type.
* **name**: string: Gets or sets the name of the network interface.
* **networkName**: string (ReadOnly): Gets or sets the name of the virtual network in vmmServer that the nic is connected to.
* **nicId**: string: Gets or sets the nic id.
* **virtualNetworkId**: string: Gets or sets the ARM Id of the Microsoft.ScVmm/virtualNetwork resource to connect the nic.

## NetworkProfile
### Properties
* **networkInterfaces**: [NetworkInterfaces](#networkinterfaces)[]: Gets or sets the list of network interfaces associated with the virtual machine.

## OsProfile
### Properties
* **adminPassword**: string (WriteOnly): Admin password of the virtual machine.
* **computerName**: string: Gets or sets computer name.
* **osName**: string (ReadOnly): Gets or sets os name.
* **osType**: 'Linux' | 'Other' | 'Windows' | string (ReadOnly): Gets or sets the type of the os.

## StorageProfile
### Properties
* **disks**: [VirtualDisk](#virtualdisk)[]: Gets or sets the list of virtual disks associated with the virtual machine.

## StorageQoSPolicy
### Properties
* **bandwidthLimit**: int: The Bandwidth Limit for internet traffic.
* **id**: string: The ID of the QoS policy.
* **iopsMaximum**: int: The maximum IO operations per second.
* **iopsMinimum**: int: The minimum IO operations per second.
* **name**: string: The name of the policy.
* **policyId**: string: The underlying policy.

## StorageQoSPolicyDetails
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

## VirtualDisk
### Properties
* **bus**: int: Gets or sets the disk bus.
* **busType**: string: Gets or sets the disk bus type.
* **createDiffDisk**: 'false' | 'true' | string: Gets or sets a value indicating diff disk.
* **diskId**: string: Gets or sets the disk id.
* **diskSizeGB**: int: Gets or sets the disk total size.
* **displayName**: string (ReadOnly): Gets the display name of the virtual disk as shown in the vmmServer. This is the fallback label for a disk when the name is not set.
* **lun**: int: Gets or sets the disk lun.
* **maxDiskSizeGB**: int (ReadOnly): Gets or sets the max disk size.
* **name**: string: Gets or sets the name of the disk.
* **storageQoSPolicy**: [StorageQoSPolicyDetails](#storageqospolicydetails): The QoS policy for the disk.
* **templateDiskId**: string: Gets or sets the disk id in the template.
* **vhdFormatType**: string (ReadOnly): Gets the disk vhd format type.
* **vhdType**: string: Gets or sets the disk vhd type.
* **volumeType**: string (ReadOnly): Gets or sets the disk volume type.

## VirtualMachineProperties
### Properties
* **availabilitySets**: [AvailabilitySetListItem](#availabilitysetlistitem)[]: Availability Sets in vm.
* **checkpoints**: [Checkpoint](#checkpoint)[]: Checkpoints in the vm.
* **checkpointType**: string: Type of checkpoint supported for the vm.
* **cloudId**: string: ARM Id of the cloud resource to use for deploying the vm.
* **generation**: int: Gets or sets the generation for the vm.
* **guestAgentProfile**: [GuestAgentProfile](#guestagentprofile): Guest agent status properties.
* **hardwareProfile**: [HardwareProfile](#hardwareprofile): Hardware properties.
* **inventoryItemId**: string: Gets or sets the inventory Item ID for the resource.
* **lastRestoredVMCheckpoint**: [Checkpoint](#checkpoint) (ReadOnly): Last restored checkpoint in the vm.
* **networkProfile**: [NetworkProfile](#networkprofile): Network properties.
* **osProfile**: [OsProfile](#osprofile): OS properties.
* **powerState**: string (ReadOnly): Gets the power state of the virtual machine.
* **provisioningState**: string (ReadOnly): Gets or sets the provisioning state.
* **storageProfile**: [StorageProfile](#storageprofile): Storage properties.
* **templateId**: string: ARM Id of the template resource to use for deploying the vm.
* **uuid**: string: Unique ID of the virtual machine.
* **vmmServerId**: string: ARM Id of the vmmServer resource in which this resource resides.
* **vmName**: string: VMName is the name of VM on the SCVMM server.

## VirtualMachineTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualMachineTemplateProperties
### Properties
* **computerName**: string (ReadOnly): Gets or sets computer name.
* **cpuCount**: int (ReadOnly): Gets or sets the desired number of vCPUs for the vm.
* **disks**: [VirtualDisk](#virtualdisk)[] (ReadOnly): Gets or sets the disks of the template.
* **dynamicMemoryEnabled**: 'false' | 'true' | string (ReadOnly): Gets or sets a value indicating whether to enable dynamic memory or not.
* **dynamicMemoryMaxMB**: int (ReadOnly): Gets or sets the max dynamic memory for the vm.
* **dynamicMemoryMinMB**: int (ReadOnly): Gets or sets the min dynamic memory for the vm.
* **generation**: int (ReadOnly): Gets or sets the generation for the vm.
* **inventoryItemId**: string: Gets or sets the inventory Item ID for the resource.
* **isCustomizable**: 'false' | 'true' | string (ReadOnly): Gets or sets a value indicating whether the vm template is customizable or not.
* **isHighlyAvailable**: string (ReadOnly): Gets highly available property.
* **limitCpuForMigration**: 'false' | 'true' | string (ReadOnly): Gets or sets a value indicating whether to enable processor compatibility mode for live migration of VMs.
* **memoryMB**: int (ReadOnly): MemoryMB is the desired size of a virtual machine's memory, in MB.
* **networkInterfaces**: [NetworkInterfaces](#networkinterfaces)[] (ReadOnly): Gets or sets the network interfaces of the template.
* **osName**: string (ReadOnly): Gets or sets os name.
* **osType**: 'Linux' | 'Other' | 'Windows' | string (ReadOnly): Gets or sets the type of the os.
* **provisioningState**: string (ReadOnly): Gets or sets the provisioning state.
* **uuid**: string: Unique ID of the virtual machine template.
* **vmmServerId**: string: ARM Id of the vmmServer resource in which this resource resides.

## VirtualMachineTemplateTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualNetworkProperties
### Properties
* **inventoryItemId**: string: Gets or sets the inventory Item ID for the resource.
* **networkName**: string (ReadOnly): Name of the virtual network in vmmServer.
* **provisioningState**: string (ReadOnly): Gets or sets the provisioning state.
* **uuid**: string: Unique ID of the virtual network.
* **vmmServerId**: string: ARM Id of the vmmServer resource in which this resource resides.

## VirtualNetworkTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VMMServerProperties
### Properties
* **connectionStatus**: string (ReadOnly): Gets or sets the connection status to the vmmServer.
* **credentials**: [VMMServerPropertiesCredentials](#vmmserverpropertiescredentials): Credentials to connect to VMMServer.
* **errorMessage**: string (ReadOnly): Gets or sets any error message if connection to vmmServer is having any issue.
* **fqdn**: string (Required): Fqdn is the hostname/ip of the vmmServer.
* **port**: int: Port is the port on which the vmmServer is listening.
* **provisioningState**: string (ReadOnly): Gets or sets the provisioning state.
* **uuid**: string (ReadOnly): Unique ID of vmmServer.
* **version**: string (ReadOnly): Version is the version of the vmmSever.

## VMMServerPropertiesCredentials
### Properties
* **password**: string (WriteOnly): Credentials to use to connect to VMMServer.
* **username**: string: Username to use to connect to VMMServer.

## VMMServerTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

