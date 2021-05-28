# Microsoft.HanaOnAzure @ 2017-11-03-preview

## Resource Microsoft.HanaOnAzure/hanaInstances@2017-11-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-11-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HanaInstanceProperties](#hanainstanceproperties): Describes the properties of a HANA instance.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: 'Microsoft.HanaOnAzure/hanaInstances' (ReadOnly, DeployTimeConstant): The resource type

## HanaInstanceProperties
### Properties
* **hanaInstanceId**: string: Specifies the HANA instance unique ID.
* **hardwareProfile**: [HardwareProfile](#hardwareprofile): Specifies the hardware settings for the HANA instance.
* **hwRevision**: string: Hardware revision of a HANA instance
* **networkProfile**: [NetworkProfile](#networkprofile): Specifies the network settings for the HANA instance disks.
* **osProfile**: [OSProfile](#osprofile): Specifies the operating system settings for the HANA instance.
* **partnerNodeId**: string: ARM ID of another HanaInstance that will share a network with this HanaInstance
* **powerState**: 'restarting' | 'started' | 'starting' | 'stopped' | 'stopping' | 'unknown': Resource power state.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating': State of provisioning of the HanaInstance.
* **proximityPlacementGroup**: string: Resource proximity placement group
* **storageProfile**: [StorageProfile](#storageprofile): Specifies the storage settings for the HANA instance disks.

## HardwareProfile
### Properties
* **hanaInstanceSize**: 'S112' | 'S144' | 'S144m' | 'S192' | 'S192m' | 'S192xm' | 'S224' | 'S224m' | 'S224om' | 'S224oo' | 'S224oom' | 'S224ooo' | 'S384' | 'S384m' | 'S384xm' | 'S384xxm' | 'S448' | 'S448m' | 'S448om' | 'S448oo' | 'S448oom' | 'S448ooo' | 'S576m' | 'S576xm' | 'S672' | 'S672m' | 'S672om' | 'S672oo' | 'S672oom' | 'S672ooo' | 'S72' | 'S72m' | 'S768' | 'S768m' | 'S768xm' | 'S896' | 'S896m' | 'S896om' | 'S896oo' | 'S896oom' | 'S896ooo' | 'S96' | 'S960m': Specifies the HANA instance SKU.
* **hardwareType**: 'Cisco_UCS' | 'HPE': Name of the hardware type (vendor and/or their product name).

## NetworkProfile
### Properties
* **circuitId**: string: Specifies the circuit id for connecting to express route.
* **networkInterfaces**: [IpAddress](#ipaddress)[]: Specifies the network interfaces for the HANA instance.

## IpAddress
### Properties
* **ipAddress**: string: Specifies the IP address of the network interface.

## OSProfile
### Properties
* **computerName**: string: Specifies the host OS name of the HANA instance.
* **osType**: string: This property allows you to specify the type of the OS.
* **sshPublicKey**: string: Specifies the SSH public key used to access the operating system.
* **version**: string: Specifies version of operating system.

## StorageProfile
### Properties
* **nfsIpAddress**: string: IP Address to connect to storage.
* **osDisks**: [Disk](#disk)[]: Specifies information about the operating system disk used by the hana instance.

## Disk
### Properties
* **diskSizeGB**: int: Specifies the size of an empty data disk in gigabytes.
* **lun**: int (ReadOnly): Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
* **name**: string: The disk name.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

