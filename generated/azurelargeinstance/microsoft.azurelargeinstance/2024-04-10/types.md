# Microsoft.AzureLargeInstance @ 2024-04-10

## Resource Microsoft.AzureLargeInstance/azureLargeInstances@2024-04-10
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-04-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string {pattern: ".*"} (Required, DeployTimeConstant): The resource name
* **properties**: [AzureLargeInstanceProperties](#azurelargeinstanceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.AzureLargeInstance/azureLargeInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureLargeInstance/azureLargeStorageInstances@2024-04-10
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-04-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string {pattern: ".*"} (Required, DeployTimeConstant): The resource name
* **properties**: [AzureLargeStorageInstanceProperties](#azurelargestorageinstanceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.AzureLargeInstance/azureLargeStorageInstances' (ReadOnly, DeployTimeConstant): The resource type

## Function restart (Microsoft.AzureLargeInstance/azureLargeInstances@2024-04-10)
* **Resource**: Microsoft.AzureLargeInstance/azureLargeInstances
* **ApiVersion**: 2024-04-10
* **Input**: [ForceState](#forcestate)
* **Output**: [OperationStatusResult](#operationstatusresult)

## Function shutdown (Microsoft.AzureLargeInstance/azureLargeInstances@2024-04-10)
* **Resource**: Microsoft.AzureLargeInstance/azureLargeInstances
* **ApiVersion**: 2024-04-10
* **Output**: [OperationStatusResult](#operationstatusresult)

## Function start (Microsoft.AzureLargeInstance/azureLargeInstances@2024-04-10)
* **Resource**: Microsoft.AzureLargeInstance/azureLargeInstances
* **ApiVersion**: 2024-04-10
* **Output**: [OperationStatusResult](#operationstatusresult)

## AzureLargeInstanceProperties
### Properties
* **azureLargeInstanceId**: string (ReadOnly): Specifies the Azure Large Instance unique ID.
* **hardwareProfile**: [HardwareProfile](#hardwareprofile): Specifies the hardware settings for the Azure Large Instance.
* **hwRevision**: string (ReadOnly): Hardware revision of an Azure Large Instance
* **networkProfile**: [NetworkProfile](#networkprofile): Specifies the network settings for the Azure Large Instance.
* **osProfile**: [OsProfile](#osprofile): Specifies the operating system settings for the Azure Large Instance.
* **powerState**: 'restarting' | 'started' | 'starting' | 'stopped' | 'stopping' | 'unknown' | string (ReadOnly): Resource power state
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): State of provisioning of the AzureLargeInstance
* **proximityPlacementGroup**: string (ReadOnly): Resource proximity placement group
* **storageProfile**: [StorageProfile](#storageprofile): Specifies the storage settings for the Azure Large Instance disks.

## AzureLargeStorageInstanceProperties
### Properties
* **azureLargeStorageInstanceUniqueIdentifier**: string: Specifies the AzureLargeStorageInstance unique ID.
* **storageProperties**: [StorageProperties](#storageproperties): Specifies the storage properties for the AzureLargeStorage instance.

## Disk
### Properties
* **diskSizeGB**: int: Specifies the size of an empty data disk in gigabytes.
* **lun**: int (ReadOnly): Specifies the logical unit number of the data disk. This value is used to
identify data disks within the VM and therefore must be unique for each data
disk attached to a VM.
* **name**: string: The disk name.

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

## ForceState
### Properties
* **forceState**: 'active' | 'inactive' | string: Whether to force restart by shutting all processes.

## HardwareProfile
### Properties
* **azureLargeInstanceSize**: 'S112' | 'S144' | 'S144m' | 'S192' | 'S192m' | 'S192xm' | 'S224' | 'S224m' | 'S224om' | 'S224oo' | 'S224oom' | 'S224ooo' | 'S224se' | 'S384' | 'S384m' | 'S384xm' | 'S384xxm' | 'S448' | 'S448m' | 'S448om' | 'S448oo' | 'S448oom' | 'S448ooo' | 'S448se' | 'S576m' | 'S576xm' | 'S672' | 'S672m' | 'S672om' | 'S672oo' | 'S672oom' | 'S672ooo' | 'S72' | 'S72m' | 'S768' | 'S768m' | 'S768xm' | 'S896' | 'S896m' | 'S896om' | 'S896oo' | 'S896oom' | 'S896ooo' | 'S96' | 'S960m' | string (ReadOnly): Specifies the Azure Large Instance SKU.
* **hardwareType**: 'Cisco_UCS' | 'HPE' | 'SDFLEX' | string (ReadOnly): Name of the hardware type (vendor and/or their product name)

## IpAddress
### Properties
* **ipAddress**: string: Specifies the IP address of the network interface.

## NetworkProfile
### Properties
* **circuitId**: string (ReadOnly): Specifies the circuit id for connecting to express route.
* **networkInterfaces**: [IpAddress](#ipaddress)[]: Specifies the network interfaces for the Azure Large Instance.

## OperationStatusResult
### Properties
* **endTime**: string: The end time of the operation.
* **error**: [ErrorDetail](#errordetail): If present, details of the operation error.
* **id**: string: Fully qualified ID for the async operation.
* **name**: string: Name of the async operation.
* **operations**: [OperationStatusResult](#operationstatusresult)[]: The operations list.
* **percentComplete**: int {minValue: 0, maxValue: 100}: Percent of the operation that is complete.
* **resourceId**: string (ReadOnly): Fully qualified ID of the resource against which the original async operation was started.
* **startTime**: string: The start time of the operation.
* **status**: string (Required): Operation status.

## OsProfile
### Properties
* **computerName**: string: Specifies the host OS name of the Azure Large Instance.
* **osType**: string (ReadOnly): This property allows you to specify the type of the OS.
* **sshPublicKey**: string: Specifies the SSH public key used to access the operating system.
* **version**: string (ReadOnly): Specifies version of operating system.

## StorageBillingProperties
### Properties
* **billingMode**: string: the billing mode for the storage instance
* **sku**: string: the SKU type that is provisioned

## StorageProfile
### Properties
* **nfsIpAddress**: string (ReadOnly): IP Address to connect to storage.
* **osDisks**: [Disk](#disk)[]: Specifies information about the operating system disk used by Azure Large
Instance.

## StorageProperties
### Properties
* **generation**: string: the kind of storage instance
* **hardwareType**: 'Cisco_UCS' | 'HPE' | 'SDFLEX' | string: the hardware type of the storage instance
* **offeringType**: string: the offering type for which the resource is getting provisioned
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): State of provisioning of the AzureLargeStorageInstance
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

