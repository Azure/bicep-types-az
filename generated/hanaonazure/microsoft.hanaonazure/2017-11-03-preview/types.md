# Microsoft.HanaOnAzure @ 2017-11-03-preview

## Resource Microsoft.HanaOnAzure/hanaInstances@2017-11-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-11-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HanaInstanceProperties](#hanainstanceproperties): HANA instance properties
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.HanaOnAzure/hanaInstances' (ReadOnly, DeployTimeConstant): The resource type

## Disk
### Properties
* **diskSizeGB**: int: Specifies the size of an empty data disk in gigabytes.
* **lun**: int (ReadOnly): Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
* **name**: string: The disk name.

## HanaInstanceProperties
### Properties
* **hanaInstanceId**: string (ReadOnly): Specifies the HANA instance unique ID.
* **hardwareProfile**: [HardwareProfile](#hardwareprofile): Specifies the hardware settings for the HANA instance.
* **hwRevision**: string (ReadOnly): Hardware revision of a HANA instance
* **networkProfile**: [NetworkProfile](#networkprofile): Specifies the network settings for the HANA instance.
* **osProfile**: [OSProfile](#osprofile): Specifies the operating system settings for the HANA instance.
* **partnerNodeId**: string: ARM ID of another HanaInstance that will share a network with this HanaInstance
* **powerState**: 'restarting' | 'started' | 'starting' | 'stopped' | 'stopping' | 'unknown' | string (ReadOnly): Resource power state
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): State of provisioning of the HanaInstance
* **proximityPlacementGroup**: string (ReadOnly): Resource proximity placement group
* **storageProfile**: [StorageProfile](#storageprofile): Specifies the storage settings for the HANA instance disks.

## HardwareProfile
### Properties
* **hanaInstanceSize**: 'S112' | 'S144' | 'S144m' | 'S192' | 'S192m' | 'S192xm' | 'S224' | 'S224m' | 'S224om' | 'S224oo' | 'S224oom' | 'S224ooo' | 'S384' | 'S384m' | 'S384xm' | 'S384xxm' | 'S448' | 'S448m' | 'S448om' | 'S448oo' | 'S448oom' | 'S448ooo' | 'S576m' | 'S576xm' | 'S672' | 'S672m' | 'S672om' | 'S672oo' | 'S672oom' | 'S672ooo' | 'S72' | 'S72m' | 'S768' | 'S768m' | 'S768xm' | 'S896' | 'S896m' | 'S896om' | 'S896oo' | 'S896oom' | 'S896ooo' | 'S96' | 'S960m' | string (ReadOnly): Specifies the HANA instance SKU.
* **hardwareType**: 'Cisco_UCS' | 'HPE' | string (ReadOnly): Name of the hardware type (vendor and/or their product name)

## IpAddress
### Properties
* **ipAddress**: string: Specifies the IP address of the network interface.

## NetworkProfile
### Properties
* **circuitId**: string (ReadOnly): Specifies the circuit id for connecting to express route.
* **networkInterfaces**: [IpAddress](#ipaddress)[]: Specifies the network interfaces for the HANA instance.

## OSProfile
### Properties
* **computerName**: string: Specifies the host OS name of the HANA instance.
* **osType**: string (ReadOnly): This property allows you to specify the type of the OS.
* **sshPublicKey**: string: Specifies the SSH public key used to access the operating system.
* **version**: string (ReadOnly): Specifies version of operating system.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SAPSystemID
### Properties
* **gid**: string: Group ID of the HANA database user.
* **memoryAllocation**: string (ReadOnly): Percent of memory to allocate to this SID.
* **sid**: string: SAP system ID as database identifier.
* **uid**: string: User ID of the HANA database user.
* **username**: string: Name of the HANA database user.

## StorageProfile
### Properties
* **hanaSids**: [SAPSystemID](#sapsystemid)[]: Specifies information related to SAP system IDs for the hana instance.
* **nfsIpAddress**: string (ReadOnly): IP Address to connect to storage.
* **osDisks**: [Disk](#disk)[]: Specifies information about the operating system disk used by the hana instance.

