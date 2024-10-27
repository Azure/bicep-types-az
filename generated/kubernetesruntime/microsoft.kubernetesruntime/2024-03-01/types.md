# Microsoft.KubernetesRuntime @ 2024-03-01

## Resource Microsoft.KubernetesRuntime/bgpPeers@2024-03-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BgpPeerProperties](#bgppeerproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.KubernetesRuntime/bgpPeers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KubernetesRuntime/loadBalancers@2024-03-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [LoadBalancerProperties](#loadbalancerproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.KubernetesRuntime/loadBalancers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KubernetesRuntime/services@2024-03-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^(storageclass|networking)$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceProperties](#serviceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.KubernetesRuntime/services' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KubernetesRuntime/storageClasses@2024-03-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [StorageClassProperties](#storageclassproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.KubernetesRuntime/storageClasses' (ReadOnly, DeployTimeConstant): The resource type

## BgpPeerProperties
### Properties
* **myAsn**: int (Required): My ASN
* **peerAddress**: string (Required): Peer Address
* **peerAsn**: int (Required): Peer ASN
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Resource provision state

## LoadBalancerProperties
### Properties
* **addresses**: string[] (Required): IP Range
* **advertiseMode**: 'ARP' | 'BGP' | 'Both' | string (Required): Advertise Mode
* **bgpPeers**: string[]: The list of BGP peers it should advertise to. Null or empty means to advertise to all peers.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Resource provision state
* **serviceSelector**: [LoadBalancerPropertiesServiceSelector](#loadbalancerpropertiesserviceselector): A dynamic label mapping to select related services. For instance, if you want to create a load balancer only for services with label "a=b", then please specify {"a": "b"} in the field.

## LoadBalancerPropertiesServiceSelector
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Resource provision state
* **rpObjectId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The object id of the service principal of the RP provisioned in the tenant

## StorageClassProperties
### Properties
* **accessModes**: ('ReadWriteMany' | 'ReadWriteOnce' | string)[]: The access mode: [ReadWriteOnce, ReadWriteMany] or [ReadWriteOnce]
* **allowVolumeExpansion**: 'Allow' | 'Disallow' | string: Volume can be expanded or not
* **dataResilience**: 'DataResilient' | 'NotDataResilient' | string: Allow single data node failure
* **failoverSpeed**: 'Fast' | 'NotAvailable' | 'Slow' | 'Super' | string: Failover speed: NA, Slow, Fast
* **limitations**: string[]: Limitations of the storage class
* **mountOptions**: string[]: Additional mount options
* **performance**: 'Basic' | 'Premium' | 'Standard' | 'Ultra' | 'Undefined' | string: Performance tier
* **priority**: int: Selection priority when multiple storage classes meet the criteria. 0: Highest, -1: Never use
* **provisioner**: string: Provisioner name
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Resource provision state
* **typeProperties**: [StorageClassTypeProperties](#storageclasstypeproperties) (Required): Properties of the StorageClass
* **volumeBindingMode**: 'Immediate' | 'WaitForFirstConsumer' | string: Binding mode of volumes: Immediate, WaitForFirstConsumer

## StorageClassTypeProperties
* **Discriminator**: type

### Base Properties

### BlobStorageClassTypeProperties
#### Properties
* **azureStorageAccountKey**: string {sensitive} (Required): Azure Storage Account Key
* **azureStorageAccountName**: string (Required): Azure Storage Account Name
* **type**: 'Blob' (Required): Type of the storage class.

### NativeStorageClassTypeProperties
#### Properties
* **type**: 'Native' (Required): Type of the storage class.

### NfsStorageClassTypeProperties
#### Properties
* **mountPermissions**: string: Mounted folder permissions. Default is 0. If set as non-zero, driver will perform `chmod` after mount
* **onDelete**: 'Delete' | 'Retain' | string: The action to take when a NFS volume is deleted. Default is Delete
* **server**: string (Required): NFS Server
* **share**: string (Required): NFS share
* **subDir**: string: Sub directory under share. If the sub directory doesn't exist, driver will create it
* **type**: 'NFS' (Required): Type of the storage class.

### RwxStorageClassTypeProperties
#### Properties
* **backingStorageClassName**: string (Required): The backing storageclass used to create new storageclass
* **type**: 'RWX' (Required): Type of the storage class.

### SmbStorageClassTypeProperties
#### Properties
* **domain**: string: Server domain
* **password**: string {sensitive}: Server password
* **source**: string (Required): SMB Source
* **subDir**: string: Sub directory under share. If the sub directory doesn't exist, driver will create it
* **type**: 'SMB' (Required): Type of the storage class.
* **username**: string: Server username


## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

