# Microsoft.Fabric.Admin @ 2016-05-01

## Resource Microsoft.Fabric.Admin/fabricLocations/ipPools@2016-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-05-01' (ReadOnly, DeployTimeConstant)
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

