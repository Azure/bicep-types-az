# Microsoft.VMwareCloudSimple @ 2019-04-01

## Resource Microsoft.VMwareCloudSimple/dedicatedCloudNodes@2019-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DedicatedCloudNodeProperties](#dedicatedcloudnodeproperties)
* **sku**: [Sku](#sku)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.VMwareCloudSimple/dedicatedCloudNodes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.VMwareCloudSimple/dedicatedCloudServices@2019-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DedicatedCloudServiceProperties](#dedicatedcloudserviceproperties)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.VMwareCloudSimple/dedicatedCloudServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.VMwareCloudSimple/virtualMachines@2019-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualMachineProperties](#virtualmachineproperties)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.VMwareCloudSimple/virtualMachines' (ReadOnly, DeployTimeConstant)

## DedicatedCloudNodeProperties
### Properties
* **availabilityZoneId**: string (Required)
* **availabilityZoneName**: string (ReadOnly)
* **cloudRackName**: string (ReadOnly)
* **created**: any (ReadOnly)
* **nodesCount**: int (Required)
* **placementGroupId**: string (Required)
* **placementGroupName**: string (ReadOnly)
* **privateCloudId**: string (ReadOnly)
* **privateCloudName**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **purchaseId**: string (Required)
* **skuDescription**: [SkuDescription](#skudescription)
* **status**: 'unused' | 'used' (ReadOnly)
* **vmwareClusterName**: string (ReadOnly)

## SkuDescription
### Properties
* **id**: string (Required)
* **name**: string (Required)

## Sku
### Properties
* **capacity**: string
* **description**: string
* **family**: string
* **name**: string (Required)
* **tier**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DedicatedCloudServiceProperties
### Properties
* **gatewaySubnet**: string (Required)
* **isAccountOnboarded**: 'notOnBoarded' | 'onBoarded' | 'onBoarding' | 'onBoardingFailed' (ReadOnly)
* **nodes**: int (ReadOnly)
* **serviceURL**: string (ReadOnly)

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualMachineProperties
### Properties
* **amountOfRam**: int (Required)
* **controllers**: [VirtualDiskController](#virtualdiskcontroller)[] (ReadOnly)
* **customization**: [GuestOSCustomization](#guestoscustomization)
* **disks**: [VirtualDisk](#virtualdisk)[]
* **dnsname**: string (ReadOnly)
* **exposeToGuestVM**: bool
* **folder**: string (ReadOnly)
* **guestOS**: string (ReadOnly)
* **guestOSType**: 'linux' | 'other' | 'windows' (ReadOnly)
* **nics**: [VirtualNic](#virtualnic)[]
* **numberOfCores**: int (Required)
* **password**: string
* **privateCloudId**: string (Required)
* **provisioningState**: string (ReadOnly)
* **publicIP**: string (ReadOnly)
* **resourcePool**: [ResourcePool](#resourcepool)
* **status**: 'deallocating' | 'deleting' | 'poweredoff' | 'running' | 'suspended' | 'updating' (ReadOnly)
* **templateId**: string
* **username**: string
* **vmId**: string (ReadOnly)
* **vmwaretools**: string (ReadOnly)
* **vSphereNetworks**: string[]

## VirtualDiskController
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **subType**: string (ReadOnly)
* **type**: string (ReadOnly)

## GuestOSCustomization
### Properties
* **dnsServers**: string[]
* **hostName**: string
* **password**: string
* **policyId**: string
* **username**: string

## VirtualDisk
### Properties
* **controllerId**: string (Required)
* **independenceMode**: 'independent_nonpersistent' | 'independent_persistent' | 'persistent' (Required)
* **totalSize**: int (Required)
* **virtualDiskId**: string
* **virtualDiskName**: string (ReadOnly)

## VirtualNic
### Properties
* **customization**: [GuestOsnicCustomization](#guestosniccustomization)
* **ipAddresses**: string[]
* **macAddress**: string
* **network**: [VirtualNetwork](#virtualnetwork) (Required)
* **nicType**: 'E1000' | 'E1000E' | 'PCNET32' | 'VMXNET' | 'VMXNET2' | 'VMXNET3' (Required)
* **powerOnBoot**: bool
* **virtualNicId**: string
* **virtualNicName**: string (ReadOnly)

## GuestOsnicCustomization
### Properties
* **allocation**: 'dynamic' | 'static'
* **dnsServers**: string[]
* **gateway**: string[]
* **ipAddress**: string
* **mask**: string
* **primaryWinsServer**: string
* **secondaryWinsServer**: string

## VirtualNetwork
### Properties
* **assignable**: bool (ReadOnly)
* **id**: string (Required)
* **location**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [VirtualNetworkProperties](#virtualnetworkproperties)
* **type**: string (ReadOnly)

## VirtualNetworkProperties
### Properties
* **privateCloudId**: string (ReadOnly)

## ResourcePool
### Properties
* **id**: string (Required)
* **location**: string (ReadOnly)
* **name**: string (ReadOnly)
* **privateCloudId**: string (ReadOnly)
* **properties**: [ResourcePoolProperties](#resourcepoolproperties)
* **type**: string (ReadOnly)

## ResourcePoolProperties
### Properties
* **fullName**: string (ReadOnly)

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

