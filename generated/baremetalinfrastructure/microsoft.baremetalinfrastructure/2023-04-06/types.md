# Microsoft.BareMetalInfrastructure @ 2023-04-06

## Resource Microsoft.BareMetalInfrastructure/bareMetalInstances@2023-04-06 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-06' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AzureBareMetalInstanceProperties](#azurebaremetalinstanceproperties) (ReadOnly): AzureBareMetal instance properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.BareMetalInfrastructure/bareMetalInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.BareMetalInfrastructure/bareMetalStorageInstances@2023-04-06
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-06' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AzureBareMetalStorageInstanceProperties](#azurebaremetalstorageinstanceproperties): AzureBareMetalStorageInstance properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.BareMetalInfrastructure/bareMetalStorageInstances' (ReadOnly, DeployTimeConstant): The resource type

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

## AzureBareMetalStorageInstanceProperties
### Properties
* **azureBareMetalStorageInstanceUniqueIdentifier**: string: Specifies the AzureBareMetaStorageInstance unique ID.
* **storageProperties**: [StorageProperties](#storageproperties): Specifies the storage properties for the AzureBareMetalStorage instance.

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

## StorageBillingProperties
### Properties
* **azureBareMetalStorageInstanceSize**: string: the SKU type that is provisioned
* **billingMode**: string: the billing mode for the storage instance

## StorageProfile
### Properties
* **nfsIpAddress**: string (ReadOnly): IP Address to connect to storage.
* **osDisks**: [Disk](#disk)[]: Specifies information about the operating system disk used by baremetal instance.

## StorageProperties
### Properties
* **generation**: string: the kind of storage instance
* **hardwareType**: string: the hardware type of the storage instance
* **offeringType**: string: the offering type for which the resource is getting provisioned
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string: State of provisioning of the AzureBareMetalStorageInstance
* **storageBillingProperties**: [StorageBillingProperties](#storagebillingproperties): the billing related information for the resource
* **storageType**: string: the storage protocol for which the resource is getting provisioned
* **workloadType**: string: the workload for which the resource is getting provisioned

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

