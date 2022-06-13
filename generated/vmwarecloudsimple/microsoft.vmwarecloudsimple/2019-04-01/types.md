# Microsoft.VMwareCloudSimple @ 2019-04-01

## Resource Microsoft.VMwareCloudSimple/dedicatedCloudNodes@2019-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Azure region
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DedicatedCloudNodeProperties](#dedicatedcloudnodeproperties): Dedicated Cloud Nodes properties
* **sku**: [Sku](#sku): Dedicated Cloud Nodes SKU
* **tags**: [Tags](#tags): Dedicated Cloud Nodes tags
* **type**: 'Microsoft.VMwareCloudSimple/dedicatedCloudNodes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.VMwareCloudSimple/dedicatedCloudServices@2019-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Azure region
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DedicatedCloudServiceProperties](#dedicatedcloudserviceproperties): The properties of Dedicated Node Service
* **tags**: [Tags](#tags): The list of tags
* **type**: 'Microsoft.VMwareCloudSimple/dedicatedCloudServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.VMwareCloudSimple/virtualMachines@2019-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Azure region
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineProperties](#virtualmachineproperties): Virtual machine properties
* **tags**: [Tags](#tags): The list of tags
* **type**: 'Microsoft.VMwareCloudSimple/virtualMachines' (ReadOnly, DeployTimeConstant): The resource type

## DedicatedCloudNodeProperties
### Properties
* **availabilityZoneId**: string (Required): Availability Zone id, e.g. "az1"
* **availabilityZoneName**: string (ReadOnly): Availability Zone name, e.g. "Availability Zone 1"
* **cloudRackName**: string (ReadOnly): VMWare Cloud Rack Name
* **created**: string (ReadOnly): date time the resource was created
* **nodesCount**: int (Required): count of nodes to create
* **placementGroupId**: string (Required): Placement Group id, e.g. "n1"
* **placementGroupName**: string (ReadOnly): Placement Name, e.g. "Placement Group 1"
* **privateCloudId**: string (ReadOnly): Private Cloud Id
* **privateCloudName**: string (ReadOnly): Resource Pool Name
* **provisioningState**: string (ReadOnly): The provisioning status of the resource
* **purchaseId**: string (Required): purchase id
* **skuDescription**: [SkuDescription](#skudescription): Dedicated Cloud Nodes SKU's description
* **status**: 'unused' | 'used' (ReadOnly): Node status, indicates is private cloud set up on this node or not
* **vmwareClusterName**: string (ReadOnly): VMWare Cluster Name

## DedicatedCloudServiceProperties
### Properties
* **gatewaySubnet**: string (Required): gateway Subnet for the account. It will collect the subnet address and always treat it as /28
* **isAccountOnboarded**: 'notOnBoarded' | 'onBoarded' | 'onBoarding' | 'onBoardingFailed' (ReadOnly): indicates whether account onboarded or not in a given region
* **nodes**: int (ReadOnly): total nodes purchased
* **serviceURL**: string (ReadOnly): link to a service management web portal

## GuestOSCustomization
### Properties
* **dnsServers**: string[]: List of dns servers to use
* **hostName**: string: Virtual Machine hostname
* **password**: string: Password for login
* **policyId**: string: id of customization policy
* **username**: string: Username for login

## GuestOsnicCustomization
### Properties
* **allocation**: 'dynamic' | 'static' | string: IP address allocation method
* **dnsServers**: string[]: List of dns servers to use
* **gateway**: string[]: Gateway addresses assigned to nic
* **ipAddress**: string: Static ip address for nic
* **mask**: string: Network mask for nic
* **primaryWinsServer**: string: primary WINS server for Windows
* **secondaryWinsServer**: string: secondary WINS server for Windows

## ResourcePool
### Properties
* **id**: string (Required): resource pool id (privateCloudId:vsphereId)
* **location**: string (ReadOnly): Azure region
* **name**: string (ReadOnly): {ResourcePoolName}
* **privateCloudId**: string (ReadOnly): The Private Cloud Id
* **properties**: [ResourcePoolProperties](#resourcepoolproperties): Resource pool properties
* **type**: string (ReadOnly): {resourceProviderNamespace}/{resourceType}

## ResourcePoolProperties
### Properties
* **fullName**: string (ReadOnly): Hierarchical resource pool name

## Sku
### Properties
* **capacity**: string: The capacity of the SKU
* **description**: string: dedicatedCloudNode example: 8 x Ten-Core Intel® Xeon® Processor E5-2640 v4 2.40GHz 25MB Cache (90W); 12 x 64GB PC4-19200 2400MHz DDR4 ECC Registered DIMM, ...
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here
* **name**: string (Required): The name of the SKU for VMWare CloudSimple Node
* **tier**: string: The tier of the SKU

## SkuDescription
### Properties
* **id**: string (Required): SKU's id
* **name**: string (Required): SKU's name

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualDisk
### Properties
* **controllerId**: string (Required): Disk's Controller id
* **independenceMode**: 'independent_nonpersistent' | 'independent_persistent' | 'persistent' (Required): Disk's independence mode type
* **totalSize**: int (Required): Disk's total size
* **virtualDiskId**: string: Disk's id
* **virtualDiskName**: string (ReadOnly): Disk's display name

## VirtualDiskController
### Properties
* **id**: string (ReadOnly): Controller's id
* **name**: string (ReadOnly): The display name of Controller
* **subType**: string (ReadOnly): dik controller subtype (VMWARE_PARAVIRTUAL, BUS_PARALLEL, LSI_PARALLEL, LSI_SAS)
* **type**: string (ReadOnly): disk controller type (SCSI)

## VirtualMachineProperties
### Properties
* **amountOfRam**: int (Required): The amount of memory
* **controllers**: [VirtualDiskController](#virtualdiskcontroller)[] (ReadOnly): The list of Virtual Disks' Controllers
* **customization**: [GuestOSCustomization](#guestoscustomization): Virtual machine properties
* **disks**: [VirtualDisk](#virtualdisk)[]: The list of Virtual Disks
* **dnsname**: string (ReadOnly): The DNS name of Virtual Machine in VCenter
* **exposeToGuestVM**: bool: Expose Guest OS or not
* **folder**: string (ReadOnly): The path to virtual machine folder in VCenter
* **guestOS**: string (ReadOnly): The name of Guest OS
* **guestOSType**: 'linux' | 'other' | 'windows' (ReadOnly): The Guest OS type
* **nics**: [VirtualNic](#virtualnic)[]: The list of Virtual NICs
* **numberOfCores**: int (Required): The number of CPU cores
* **password**: string: Password for login. Deprecated - use customization property
* **privateCloudId**: string (Required): Private Cloud Id
* **provisioningState**: string (ReadOnly): The provisioning status of the resource
* **publicIP**: string (ReadOnly): The public ip of Virtual Machine
* **resourcePool**: [ResourcePool](#resourcepool): Virtual Machines Resource Pool
* **status**: 'deallocating' | 'deleting' | 'poweredoff' | 'running' | 'suspended' | 'updating' (ReadOnly): The status of Virtual machine
* **templateId**: string: Virtual Machine Template Id
* **username**: string: Username for login. Deprecated - use customization property
* **vmId**: string (ReadOnly): The internal id of Virtual Machine in VCenter
* **vmwaretools**: string (ReadOnly): VMware tools version
* **vSphereNetworks**: string[]: The list of Virtual VSphere Networks

## VirtualNetwork
### Properties
* **assignable**: bool (ReadOnly): can be used in vm creation/deletion
* **id**: string (Required): virtual network id (privateCloudId:vsphereId)
* **location**: string (ReadOnly): Azure region
* **name**: string (ReadOnly): {VirtualNetworkName}
* **properties**: [VirtualNetworkProperties](#virtualnetworkproperties): Virtual Network properties
* **type**: string (ReadOnly): {resourceProviderNamespace}/{resourceType}

## VirtualNetworkProperties
### Properties
* **privateCloudId**: string (ReadOnly): The Private Cloud id

## VirtualNic
### Properties
* **customization**: [GuestOsnicCustomization](#guestosniccustomization): guest OS customization for nic
* **ipAddresses**: string[]: NIC ip address
* **macAddress**: string: NIC MAC address
* **network**: [VirtualNetwork](#virtualnetwork) (Required): Virtual Network
* **nicType**: 'E1000' | 'E1000E' | 'PCNET32' | 'VMXNET' | 'VMXNET2' | 'VMXNET3' (Required): NIC type
* **powerOnBoot**: bool: Is NIC powered on/off on boot
* **virtualNicId**: string: NIC id
* **virtualNicName**: string (ReadOnly): NIC name

