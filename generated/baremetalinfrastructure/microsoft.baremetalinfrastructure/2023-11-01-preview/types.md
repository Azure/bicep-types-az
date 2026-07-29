# Microsoft.BareMetalInfrastructure @ 2023-11-01-preview

## Resource Microsoft.BareMetalInfrastructure/bareMetalInstances@2023-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AzureBareMetalInstanceProperties](#azurebaremetalinstanceproperties) (ReadOnly): AzureBareMetal instance properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.BareMetalInfrastructure/bareMetalInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.BareMetalInfrastructure/bareMetalStorageInstances@2023-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [AzureBareMetalStorageInstanceIdentity](#azurebaremetalstorageinstanceidentity): The identity of Azure Bare Metal Storage Instance, if configured.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: ".*"} (Required, DeployTimeConstant): The resource name
* **properties**: [AzureBareMetalStorageInstanceProperties](#azurebaremetalstorageinstanceproperties): AzureBareMetalStorageInstance properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.BareMetalInfrastructure/bareMetalStorageInstances' (ReadOnly, DeployTimeConstant): The resource type

## Function restart (Microsoft.BareMetalInfrastructure/bareMetalInstances@2023-11-01-preview)
* **Resource**: Microsoft.BareMetalInfrastructure/bareMetalInstances
* **ApiVersion**: 2023-11-01-preview
* **Input**: [ForceState](#forcestate)
* **Output**: [OperationStatus](#operationstatus)

## Function shutdown (Microsoft.BareMetalInfrastructure/bareMetalInstances@2023-11-01-preview)
* **Resource**: Microsoft.BareMetalInfrastructure/bareMetalInstances
* **ApiVersion**: 2023-11-01-preview
* **Output**: [OperationStatus](#operationstatus)

## Function start (Microsoft.BareMetalInfrastructure/bareMetalInstances@2023-11-01-preview)
* **Resource**: Microsoft.BareMetalInfrastructure/bareMetalInstances
* **ApiVersion**: 2023-11-01-preview
* **Output**: [OperationStatus](#operationstatus)

## AzureBareMetalInstanceProperties
### Properties
* **azureBareMetalInstanceId**: string (ReadOnly): Specifies the Azure Bare Metal Instance unique ID.
* **hardwareProfile**: [HardwareProfile](#hardwareprofile): Specifies the hardware settings for the Azure Bare Metal Instance.
* **hwRevision**: string (ReadOnly): Hardware revision of an Azure Bare Metal Instance
* **networkProfile**: [NetworkProfile](#networkprofile): Specifies the network settings for the Azure Bare Metal Instance.
* **osProfile**: [OSProfile](#osprofile): Specifies the operating system settings for the Azure Bare Metal Instance.
* **partnerNodeId**: string: ARM ID of another AzureBareMetalInstance that will share a network with this AzureBareMetalInstance
* **powerState**: 'restarting' | 'started' | 'starting' | 'stopped' | 'stopping' | 'unknown' | string (ReadOnly): Resource power state
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): State of provisioning of the AzureBareMetalInstance
* **proximityPlacementGroup**: string (ReadOnly): Resource proximity placement group
* **storageProfile**: [StorageProfile](#storageprofile): Specifies the storage settings for the Azure Bare Metal Instance disks.

## AzureBareMetalStorageInstanceIdentity
### Properties
* **principalId**: string (ReadOnly): The principal ID of Azure Bare Metal Storage Instance identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant ID associated with the Azure Bare Metal Storage Instance. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | string: The type of identity used for the Azure Bare Metal Storage Instance. The type 'SystemAssigned' refers to an implicitly created identity. The type 'None' will remove any identities from the Azure Bare Metal Storage Instance.

## AzureBareMetalStorageInstanceProperties
### Properties
* **azureBareMetalStorageInstanceUniqueIdentifier**: string: Specifies the AzureBareMetaStorageInstance unique ID.
* **storageProperties**: [StorageProperties](#storageproperties): Specifies the storage properties for the AzureBareMetalStorage instance.

## Disk
### Properties
* **diskSizeGB**: int: Specifies the size of an empty data disk in gigabytes.
* **lun**: int (ReadOnly): Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
* **name**: string: The disk name.

## ForceState
### Properties
* **forceState**: 'active' | 'inactive' | string: Whether to force restart by shutting all processes.

## HardwareProfile
### Properties
* **azureBareMetalInstanceSize**: 'S112' | 'S144' | 'S144m' | 'S192' | 'S192m' | 'S192xm' | 'S224' | 'S224m' | 'S224om' | 'S224oo' | 'S224oom' | 'S224ooo' | 'S384' | 'S384m' | 'S384xm' | 'S384xxm' | 'S448' | 'S448m' | 'S448om' | 'S448oo' | 'S448oom' | 'S448ooo' | 'S448se' | 'S576m' | 'S576xm' | 'S672' | 'S672m' | 'S672om' | 'S672oo' | 'S672oom' | 'S672ooo' | 'S72' | 'S72m' | 'S768' | 'S768m' | 'S768xm' | 'S896' | 'S896m' | 'S896om' | 'S896oo' | 'S896oom' | 'S896ooo' | 'S96' | 'S960m' | string (ReadOnly): Specifies the Azure Bare Metal Instance SKU.
* **hardwareType**: 'Cisco_UCS' | 'HPE' | 'SDFLEX' | string (ReadOnly): Name of the hardware type (vendor and/or their product name)

## NetworkInterface
### Properties
* **ipAddress**: string: Specifies the IP address of the network interface.

## NetworkProfile
### Properties
* **circuitId**: string (ReadOnly): Specifies the circuit id for connecting to express route.
* **networkInterfaces**: [NetworkInterface](#networkinterface)[]: Specifies the network interfaces for the Azure Bare Metal Instance.

## OperationStatus
### Properties
* **error**: [OperationStatusError](#operationstatuserror): An error from the Azure Bare Metal Infrastructure service.
* **name**: string: Unique Operation Status Identifier.
* **startTime**: string: Start Time when the operation was initially executed.
* **status**: 'Executing' | 'Failed' | 'Requesting' | 'Succeeded' | string: Status of the operation.

## OperationStatusError
### Properties
* **code**: string: Server-defined set of error codes.
* **message**: string: Human-readable representation of the error.

## OSProfile
### Properties
* **computerName**: string: Specifies the host OS name of the Azure Bare Metal instance.
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
* **osDisks**: [Disk](#disk)[]: Specifies information about the operating system disk used by bare metal instance.

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

