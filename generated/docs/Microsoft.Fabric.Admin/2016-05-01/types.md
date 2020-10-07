# Microsoft.Fabric.Admin @ 2016-05-01

## Microsoft.Fabric.Admin/fabricLocations/ipPools
### Properties
* **apiVersion**: '2016-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IpPoolModel
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Fabric.Admin/fabricLocations/ipPools' (ReadOnly, DeployTimeConstant)

## IpPoolModel
### Properties
* **addressPrefix**: string
* **endIpAddress**: string
* **numberOfAllocatedIpAddresses**: int
* **numberOfIpAddresses**: int
* **numberOfIpAddressesInTransition**: int
* **startIpAddress**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

