# Microsoft.BareMetalInfrastructure @ 2020-08-06-preview

## Resource Microsoft.BareMetalInfrastructure/bareMetalInstances@2020-08-06-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-06-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AzureBareMetalInstanceProperties](#azurebaremetalinstanceproperties) (ReadOnly): AzureBareMetal instance properties
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.BareMetalInfrastructure/bareMetalInstances' (ReadOnly, DeployTimeConstant): The resource type

## AzureBareMetalInstanceProperties
### Properties
* **azureBareMetalInstanceId**: string (ReadOnly): Specifies the AzureBareMetal instance unique ID.
* **hardwareProfile**: [HardwareProfile](#hardwareprofile): Specifies the hardware settings for the AzureBareMetal instance.
* **hwRevision**: string (ReadOnly): Hardware revision of an AzureBareMetal instance
* **networkProfile**: [NetworkProfile](#networkprofile): Specifies the network settings for the AzureBareMetal instance.
* **osProfile**: [OSProfile](#osprofile): Specifies the operating system settings for the AzureBareMetal instance.
* **partnerNodeId**: string: ARM ID of another AzureBareMetalInstance that will share a network with this AzureBareMetalInstance
* **powerState**: 'restarting' | 'started' | 'starting' | 'stopped' | 'stopping' | 'unknown' | string (ReadOnly): Resource power state
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): State of provisioning of the AzureBareMetalInstance
* **proximityPlacementGroup**: string (ReadOnly): Resource proximity placement group
* **storageProfile**: [StorageProfile](#storageprofile): Specifies the storage settings for the AzureBareMetal instance disks.

## Disk
### Properties
* **diskSizeGB**: int: Specifies the size of an empty data disk in gigabytes.
* **lun**: int (ReadOnly): Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
* **name**: string: The disk name.

## HardwareProfile
### Properties
* **azureBareMetalInstanceSize**: 'S112' | 'S144' | 'S144m' | 'S192' | 'S192m' | 'S192xm' | 'S224' | 'S224m' | 'S224om' | 'S224oo' | 'S224oom' | 'S224ooo' | 'S384' | 'S384m' | 'S384xm' | 'S384xxm' | 'S448' | 'S448m' | 'S448om' | 'S448oo' | 'S448oom' | 'S448ooo' | 'S576m' | 'S576xm' | 'S672' | 'S672m' | 'S672om' | 'S672oo' | 'S672oom' | 'S672ooo' | 'S72' | 'S72m' | 'S768' | 'S768m' | 'S768xm' | 'S896' | 'S896m' | 'S896om' | 'S896oo' | 'S896oom' | 'S896ooo' | 'S96' | 'S960m' | string (ReadOnly): Specifies the AzureBareMetal instance SKU.
* **hardwareType**: 'Cisco_UCS' | 'HPE' | string (ReadOnly): Name of the hardware type (vendor and/or their product name)

## IpAddress
### Properties
* **ipAddress**: string: Specifies the IP address of the network interface.

## NetworkProfile
### Properties
* **circuitId**: string (ReadOnly): Specifies the circuit id for connecting to express route.
* **networkInterfaces**: [IpAddress](#ipaddress)[]: Specifies the network interfaces for the AzureBareMetal instance.

## OSProfile
### Properties
* **computerName**: string: Specifies the host OS name of the AzureBareMetal instance.
* **osType**: string (ReadOnly): This property allows you to specify the type of the OS.
* **sshPublicKey**: string: Specifies the SSH public key used to access the operating system.
* **version**: string (ReadOnly): Specifies version of operating system.

## StorageProfile
### Properties
* **nfsIpAddress**: string (ReadOnly): IP Address to connect to storage.
* **osDisks**: [Disk](#disk)[]: Specifies information about the operating system disk used by baremetal instance.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

