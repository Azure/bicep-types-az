# Microsoft.HanaOnAzure @ 2017-11-03-preview

## Resource Microsoft.HanaOnAzure/hanaInstances@2017-11-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-11-03-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: HanaInstanceProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.HanaOnAzure/hanaInstances' (ReadOnly, DeployTimeConstant)

## HanaInstanceProperties
### Properties
* **hanaInstanceId**: string
* **hardwareProfile**: HardwareProfile
* **hwRevision**: string
* **networkProfile**: NetworkProfile
* **osProfile**: OSProfile
* **partnerNodeId**: string
* **powerState**: 'restarting' | 'started' | 'starting' | 'stopped' | 'stopping' | 'unknown'
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating'
* **proximityPlacementGroup**: string
* **storageProfile**: StorageProfile

## HardwareProfile
### Properties
* **hanaInstanceSize**: 'S112' | 'S144' | 'S144m' | 'S192' | 'S192m' | 'S192xm' | 'S224' | 'S224m' | 'S224om' | 'S224oo' | 'S224oom' | 'S224ooo' | 'S384' | 'S384m' | 'S384xm' | 'S384xxm' | 'S448' | 'S448m' | 'S448om' | 'S448oo' | 'S448oom' | 'S448ooo' | 'S576m' | 'S576xm' | 'S672' | 'S672m' | 'S672om' | 'S672oo' | 'S672oom' | 'S672ooo' | 'S72' | 'S72m' | 'S768' | 'S768m' | 'S768xm' | 'S896' | 'S896m' | 'S896om' | 'S896oo' | 'S896oom' | 'S896ooo' | 'S96' | 'S960m'
* **hardwareType**: 'Cisco_UCS' | 'HPE'

## NetworkProfile
### Properties
* **circuitId**: string
* **networkInterfaces**: IpAddress[]

## IpAddress
### Properties
* **ipAddress**: string

## OSProfile
### Properties
* **computerName**: string
* **osType**: string
* **sshPublicKey**: string
* **version**: string

## StorageProfile
### Properties
* **nfsIpAddress**: string
* **osDisks**: Disk[]

## Disk
### Properties
* **diskSizeGB**: int
* **lun**: int (ReadOnly)
* **name**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

