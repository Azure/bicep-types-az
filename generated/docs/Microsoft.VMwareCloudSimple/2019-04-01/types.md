# Microsoft.VMwareCloudSimple @ 2019-04-01

## Microsoft.VMwareCloudSimple/dedicatedCloudNodes
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DedicatedCloudNodeProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.VMwareCloudSimple/dedicatedCloudNodes' (ReadOnly, DeployTimeConstant)

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
* **skuDescription**: SkuDescription
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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.VMwareCloudSimple/dedicatedCloudServices
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DedicatedCloudServiceProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.VMwareCloudSimple/dedicatedCloudServices' (ReadOnly, DeployTimeConstant)

## DedicatedCloudServiceProperties
### Properties
* **gatewaySubnet**: string (Required)
* **isAccountOnboarded**: 'notOnBoarded' | 'onBoarded' | 'onBoarding' | 'onBoardingFailed' (ReadOnly)
* **nodes**: int (ReadOnly)
* **serviceURL**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.VMwareCloudSimple/virtualMachines
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualMachineProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.VMwareCloudSimple/virtualMachines' (ReadOnly, DeployTimeConstant)

## VirtualMachineProperties
### Properties
* **amountOfRam**: int (Required)
* **controllers**: VirtualDiskController[] (ReadOnly)
* **customization**: GuestOSCustomization
* **disks**: VirtualDisk[]
* **dnsname**: string (ReadOnly)
* **exposeToGuestVM**: bool
* **folder**: string (ReadOnly)
* **guestOS**: string (ReadOnly)
* **guestOSType**: 'linux' | 'other' | 'windows' (ReadOnly)
* **nics**: VirtualNic[]
* **numberOfCores**: int (Required)
* **password**: string
* **privateCloudId**: string (Required)
* **provisioningState**: string (ReadOnly)
* **publicIP**: string (ReadOnly)
* **resourcePool**: ResourcePool
* **status**: 'deallocating' | 'deleting' | 'poweredoff' | 'running' | 'suspended' | 'updating' (ReadOnly)
* **templateId**: string
* **username**: string
* **vSphereNetworks**: string[]
* **vmId**: string (ReadOnly)
* **vmwaretools**: string (ReadOnly)

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
* **customization**: GuestOSNICCustomization
* **ipAddresses**: string[]
* **macAddress**: string
* **network**: VirtualNetwork (Required)
* **nicType**: 'E1000' | 'E1000E' | 'PCNET32' | 'VMXNET' | 'VMXNET2' | 'VMXNET3' (Required)
* **powerOnBoot**: bool
* **virtualNicId**: string
* **virtualNicName**: string (ReadOnly)

## GuestOSNICCustomization
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
* **properties**: VirtualNetworkProperties
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
* **properties**: ResourcePoolProperties
* **type**: string (ReadOnly)

## ResourcePoolProperties
### Properties
* **fullName**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

